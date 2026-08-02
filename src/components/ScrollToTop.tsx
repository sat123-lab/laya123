import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { getScrollTop, onScrollRoot, scrollPageToTop } from "@/lib/scrollRoot";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(getScrollTop() > 300);
    };

    handleScroll();
    return onScrollRoot(handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={() => scrollPageToTop(true)}
          className="fixed bottom-24 right-8 z-50 bg-[#5BC0DE] rounded-full shadow-2xl hover:bg-[#4aa3c0] transition-colors"
          style={{ width: "48px", height: "48px" }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-white mx-auto" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
