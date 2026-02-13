"use client";
import React, { useState } from "react";
import { NavItems, socialLinks } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";

function Footer() {
  const [isActive, setIsActive] = useState("");

  const handleFooterItemClick = (sectionId: string) => {
    setIsActive(sectionId);
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatedSection className="relative bg-gray-900 dark:bg-black text-white py-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <AnimatedItem type="slideLeft" index={0}>
              <h3
                className="w-fit text-2xl font-bold  mb-4
            bg-clip-text text-transparent
            bg-gradient-to-r from-blue-600 to-pink-600"
              >
                Dav Developers
              </h3>
              <p className="text-gray-400   mb-4">
                Building digital experiences that inspire and engage. Let's
                create something amazing together.
              </p>
            </AnimatedItem>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <AnimatedItem type="slideUp" key={index} index={index}>
                    <a
                      href={social.href}
                      className="bg-gray-800 hover:bg-purple-600 p-2 rounded-lg flex"
                      aria-label={social.name}
                    >
                      <Icon />
                    </a>
                  </AnimatedItem>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <AnimatedSection>
            <AnimatedItem type="slideRight" className="text-lg font-bold  mb-4">
              Quick Links
            </AnimatedItem>
            <ul className=" space-y-2">
              {NavItems.map((link, index) => (
                <li key={index}>
                  <AnimatedItem type="slideLeft" index={index}>
                    <button
                      onClick={() => handleFooterItemClick(link.id)}
                      className={`text-gray-400 hover:text-purple-400 transition-colors cursor-pointer
                      ${isActive === link.id ? "text-purple-400" : ""}
                        `}>
                      {link.label}
                    </button>
                  </AnimatedItem>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection>
            <AnimatedItem type="slideRight">
              <h4 className="text-lg font-bold   mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400  ">
                <li>Email: shakeelrehman501@gmail.com</li>
                <li className="">
                  Phone: {""}
                  <a
                    href="tel:+923000787595"
                    className=" hover:text-purple-400 group"
                  >
                    0300-0787595
                  </a>
                </li>
                <li>Address: Barkat Market, Lahore</li>
              </ul>
            </AnimatedItem>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <AnimatedSection className="mt-12 pt-8 border-t border-gray-800 text-center">
          <AnimatedItem type="slideUp">
            <p className="text-gray-400   text-sm">
              © {new Date().getFullYear()} Dav Developers. All rights reserved.
            </p>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}

export default Footer;
