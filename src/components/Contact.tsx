import React from 'react'

function Contact() {
  return (
     <section id="contact" className="relative py-16 lg:py-20 bg-[#0a0a0f] dark:bg-[#0a0a0f] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div 
          className="absolute -left-32 top-1/3 w-[651px] h-[651px] rounded-full opacity-40"
          style={{ 
            backgroundImage: "radial-gradient(circle at center, rgba(42,22,62,1) 0%, rgba(26,16,39,0.5) 50%, rgba(10,10,15,0) 100%)" 
          }}
        />
        <div 
          className="absolute right-0 bottom-0 w-[651px] h-[651px] rounded-full opacity-40"
          style={{ 
            backgroundImage: "radial-gradient(circle at center, rgba(9,29,37,1) 0%, rgba(10,10,15,0) 100%)" 
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-[60px] font-semibold font-['Poppins'] leading-normal mb-4">
            <span className="bg-clip-text bg-gradient-to-r from-[#225bfb] to-[#e4007b]" style={{ WebkitTextFillColor: "transparent" }}>Get In Touch</span>
          </h2>
          <div className="mt-4 mx-auto w-[109px] h-[9px] rounded-[5px] bg-gradient-to-r from-[#2957f7] to-[#9517fa]" />
        </div>

        <p className="text-center text-lg lg:text-2xl text-white max-w-3xl mx-auto mb-12 lg:mb-16 font-['Poppins'] leading-normal">
          Have a project in mind or want to collaborate? I'd love to hear from you
        </p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4 font-['Poppins']">
                Let's Connect
              </h3>
              <p className="text-gray-400 mb-8 font-['Inter'] leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you
                have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="size-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-['Inter']">{info.label}</p>
                      <p className="text-white font-['Inter']">{info.value}</p>
                    </div>
                  </div>
                );

                if (info.href) {
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="block hover:bg-[#1a1a1f] p-4 rounded-lg transition-colors"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div key={info.label} className="p-4">
                    {content}
                  </div>
                );
              })}
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a1a1f] border border-gray-800 p-6 lg:p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 mb-2 font-['Inter']"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#0a0a0f] text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow font-['Inter']"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-400 mb-2 font-['Inter']"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#0a0a0f] text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow font-['Inter']"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-2 font-['Inter']"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#0a0a0f] text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow resize-none font-['Inter']"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#1b5dfc] to-[#9617fa] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 font-['Poppins'] font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
