export default function Footer() {
  return (
    <footer className="bg-rose-50 border-t border-rose-200 text-center py-6 mt-10 text-sm text-gray-600">
      <p className="mb-1">
        Made with ❤️ by <span className="font-semibold text-rose-500">Mayur Patil</span>
      </p>

      <div className="flex justify-center gap-4 my-2 text-emerald-600 text-sm">
        <a
         href="https://www.linkedin.com/in/mayur-patil-033787250/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-rose-500 transition duration-200"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/mayur_.p07"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-rose-500 transition duration-200"
        >
          Insta
        </a>
        <a
           href="https://myr-mayurvij22s-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-rose-500 transition duration-200"
        >
          Portfolio
        </a>
      </div>

      <p className="text-xs">
        © {new Date().getFullYear()} Ruchita AI · All rights reserved.
      </p>
    </footer>
  );
}
