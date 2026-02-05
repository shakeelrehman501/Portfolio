import React from "react";
import { NavItems, socialLinks } from "@/constants";

function Footer() {
  return (
    <footer className="relative bg-gray-900 dark:bg-black text-white py-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
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
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="bg-gray-800 hover:bg-purple-600 p-2 rounded-lg transition-colors"
                    aria-label={social.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold   mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NavItems.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.id}
                    className="text-gray-400 hover:text-purple-400   transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold   mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2 text-gray-400  ">
              <li>Email: shakeelrehman501@gmail.com</li>
              <li>Phone: 0300-0787595</li>
              <li>Address: Barkat Market, Lahore</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400   text-sm">
            © {new Date().getFullYear()} Dav Developers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
