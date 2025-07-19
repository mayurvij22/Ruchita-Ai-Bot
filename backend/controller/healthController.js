import { GoogleGenerativeAI } from "@google/generative-ai";
import { User } from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const createUser = async (req, res) => {
  const { name } = req.body;
  try {
    const user = await User.create({ name });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error saving user" });
  }
};

export const getHealthTips = async (req, res) => {
  const { prompt } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });
  } catch (err) {
    console.error("Gemini error:", err.message || err);
    res.status(500).json({ error: "Gemini API error" });
  }
};
