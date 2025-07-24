# 💖 Ruchita AI – Backend

**Welcome Back!**  
**Ruchita is here to help you with health tips and guidance.** 🩺🌟

This is the backend server for **Ruchita AI**, your intelligent health companion. It uses AI models to provide personalized wellness guidance, symptom checks, and lifestyle tips — powered by **Node.js**, **Express**, **MongoDB**, and integrated with **Cloudinary** and external AI services.

---

## 🌟 Key Features

- 🧠 AI-based health insights and suggestions
- 🛡️ User authentication with JWT
- ☁️ Cloudinary support for profile uploads (if applicable)
- 📦 MongoDB for storing user data and chat history
- 🧰 Organized Express server with MVC structure

---

## 🛠️ Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JWT for authentication
- Cloudinary + Multer for file handling
- dotenv, axios, cors

---

## 📁 Project Structure

ruchita-backend/
├── index.js
├── .env
├── routes/
├── controllers/
├── models/
├── middleware/
└── utils/

yaml
Copy
Edit

---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/ruchita-backend.git
cd ruchita-backend
Install dependencies

bash
Copy
Edit
npm install
Set up environment variables

Create a .env file with the following:

env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
📜 Available Scripts
Script	Description
npm start	Run server with Node
npm run dev	Run server with nodemon

📡 Sample API Endpoints
POST /api/auth/register – Register user

POST /api/auth/login – Login and receive token

POST /api/health/analyze – Get health tips from Ruchita

GET /api/history – View past AI interactions

🧪 Example Use Case
http
Copy
Edit
POST /api/health/analyze
Headers:
  Authorization: Bearer <jwt_token>
  Content-Type: application/json
Body:
{
  "message": "I'm having a headache and cold. What should I do?"
}
