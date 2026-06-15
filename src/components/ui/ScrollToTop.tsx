"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    const start = window.scrollY;
    const duration = 800;
    const startTime = performance.now();

    const animate = (currentTime:number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const ease = 1 - Math.pow(1 - progress, 4);

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <button
      onClick={scrollTop}
      className={`
        fixed bottom-15 right-15 z-50
        bg-primary dark:bg-secondary
        text-gray-200
        px-4 py-4 rounded-full
        shadow-2xl
        transition-all duration-500
        hover:scale-110 cursor-pointer
        
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }
      `}
    >
      <FaArrowUp />
    </button>
  );
}