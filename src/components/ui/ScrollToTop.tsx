"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      console.log(window.scrollY); // DEBUG (check karo console mein)
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    // run once on mount
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bg-primary  text-gray-200 dark:bg-secondary bottom-15 right-15 z-50 cursor-pointer hover:scale-110 transition-all ease-in-out  px-4 py-4 rounded-full shadow-2xl border border-gray-50/30"
    >
      <FaArrowUp />
    </button>
  );
}