import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "918912737662"; // LAYA's phone number
const WHATSAPP_MESSAGE = "Hello! I'd like to know more about LAYA's programs.";

const WhatsAppButton = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 175.216 175.552"
        className="w-8 h-8"
      >
        <defs>
          <linearGradient id="wa-grad" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#57d163" />
            <stop offset="1" stopColor="#23b33a" />
          </linearGradient>
        </defs>
        <path
          fill="#fff"
          d="M87.184 14.2A73.76 73.76 0 0 0 13.6 87.442a73.34 73.34 0 0 0 9.94 37.11L14.2 161.35l37.8-9.9a73.72 73.72 0 0 0 35.24 8.97h.03A73.78 73.78 0 0 0 87.184 14.2zm0 135.14h-.03a61.25 61.25 0 0 1-31.24-8.57l-2.24-1.33-23.2 6.08 6.19-22.6-1.46-2.32a61.3 61.3 0 0 1-9.39-32.68A61.4 61.4 0 0 1 87.184 26.53a61.4 61.4 0 0 1 .03 122.82z"
        />
        <path
          fill="#fff"
          d="M66.13 51.15c-1.49-3.31-3.06-3.38-4.48-3.44l-3.82-.05a7.32 7.32 0 0 0-5.3 2.49c-1.82 1.99-6.95 6.79-6.95 16.56s7.12 19.21 8.11 20.54 13.75 22.01 33.9 29.93c16.76 6.58 20.17 5.27 23.8 4.94s11.78-4.81 13.44-9.46 1.66-8.63 1.16-9.46-1.82-1.33-3.82-2.32-11.78-5.81-13.6-6.48-3.15-1-4.48 1-5.14 6.48-6.3 7.81-2.32 1.49-4.31.5-8.42-3.1-16.03-9.89a60.1 60.1 0 0 1-11.09-13.8c-1.16-2-.12-3.07.88-4.06.89-.89 1.99-2.32 2.98-3.48a13.58 13.58 0 0 0 1.99-3.31 3.66 3.66 0 0 0-.17-3.48c-.5-1-4.4-10.82-6.13-14.76z"
        />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
