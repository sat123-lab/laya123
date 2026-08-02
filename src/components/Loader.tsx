import { useState, useEffect } from "react";
import logo from "../assets/laya-logo.png";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#5BC0DE] to-[#4aa3c0] transition-all duration-500 ease-in-out ${
        fadeOut ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
    >
      <div className="text-center">
        <img
          src={logo}
          alt="LAYA Logo"
          className="h-28 w-28 rounded-full object-cover animate-pulse-logo md:h-32 md:w-32"
        />
        <p className="mt-4 text-white/80 text-sm font-heading tracking-wider uppercase animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
