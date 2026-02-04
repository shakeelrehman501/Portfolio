import React from 'react'

function Footer() {
  return (
   <footer className="relative bg-gray-900 dark:bg-black text-white py-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="figma:asset/4d466c714a12b2309d950b449fdbb47ee09cbd7b.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold font-['Poppins'] mb-4">
              <span 
                className="bg-clip-text"
                style={{ 
                  backgroundImage: "linear-gradient(rgb(34, 91, 251) 0%, rgb(228, 0, 123) 100%)", 
                  WebkitTextFillColor: "transparent" 
                }}
              >
                Dav Developers
              </span>
            </h3>
            <p className="text-gray-400 font-['Poppins'] mb-4">
              Building digital experiences that inspire and engage. Let's create something amazing together.
            </p>
            {/* <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-gray-800 hover:bg-purple-600 p-2 rounded-lg transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-['Poppins'] mb-4">Quick Links</h4>
            {/* <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 font-['Poppins'] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-['Poppins'] mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 font-['Poppins']">
              <li>Email: shakeelrehman@gmail.com</li>
              <li>Phone: +1 (555) 000-0000</li>
              <li>Address: 123 Main St, City</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 font-['Poppins'] text-sm">
            © {new Date().getFullYear()} Dav Developers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
