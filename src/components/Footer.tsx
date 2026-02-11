"use client";
import React, { useState } from "react";
import { NavItems, socialLinks } from "@/Data/constants";
import { easeOut, motion, Variants } from "motion/react";

 


function Footer() {
  const [isActive, setIsActive] = useState("");

  const handleFooterItemClick = (sectionId: string) => {
    setIsActive(sectionId);
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

    const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const scaleHover = { scale: 1.2, rotate: 5 };
  const scaleTap = { scale: 0.9 };

  return (
    <footer className="relative bg-gray-900 dark:bg-black text-white py-12 overflow-hidden">
      <motion.div 
      initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
          variants={fadeLeft}
          >
            <h3
              className="w-fit text-2xl font-bold  mb-4
            bg-clip-text text-transparent
            bg-gradient-to-r from-blue-600 to-pink-600
            "
            >
              Dav Developers
            </h3>
            <p className="text-gray-400   mb-4">
              Building digital experiences that inspire and engage. Let's create
              something amazing together.
            </p>
            <motion.div
            variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    variants={fadeUp}
                  whileHover={scaleHover}
                  whileTap={scaleTap} 
                  key={social.name}
                    href={social.href}
                    className="bg-gray-800 hover:bg-purple-600 p-2 rounded-lg transition-colors"
                    aria-label={social.name}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
          variants={fadeUp}
          >
            <h4 className="text-lg font-bold  mb-4">Quick Links</h4>
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            className=" space-y-2">
              {NavItems.map((link) => (
                <motion.li 
                variants={fadeUp}
                key={link.id}>
                  <button
                    onClick={() => handleFooterItemClick(link.id)}
                    className={`text-gray-400 hover:text-purple-400 transition-colors
                      ${isActive === link.id ? "text-purple-400" : ""}
                        `}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeRight}>
            <h4 className="text-lg font-bold   mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400  ">
              <li>Email: shakeelrehman501@gmail.com</li>
              <li>
                Phone: {""}
                <a href="tel:+923000787595" className="hover:text-purple-400">
                  0300-0787595
                </a>
              </li>
              <li>Address: Barkat Market, Lahore</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
        variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400   text-sm">
            © {new Date().getFullYear()} Dav Developers. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
