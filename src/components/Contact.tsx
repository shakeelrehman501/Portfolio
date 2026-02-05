import React from 'react'
import Heading from './ui/Heading'

function Contact() {
  return (
     <section id="contact" className="bg-gray-50 dark:bg-gray-900 py-16 lg:py-20 transition-colors">
      {/* Background Image */}
      

      

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-6 py-24">
        {/* Header */}
        <Heading heading='Get In' gradientHeading='Touch' paragraph='Have a project in mind or want to collaborate? I would love to hear from you'/>

        {/* Contact Cards & Form */}
        <div className="grid lg:grid-cols-[336px_1fr] gap-6 max-w-[1104px] mx-auto">
          {/* Left Side - Contact Cards */}
          <div className="flex flex-col gap-6">
            {/* Email Card */}
            <div className="bg-white dark:bg-[#0f172a] rounded-[16px] p-6 border border-[#e2e8f0] dark:border-[#1e293b] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-colors">
              {/* Icon */}
              <div className="bg-[rgba(37,99,235,0.1)] dark:bg-[rgba(59,130,246,0.15)] w-12 h-12 rounded-[12px] flex items-center justify-center mb-4 transition-colors">
                {/* <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p113fd180} stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p3b0794e0} stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg> */}
              </div>
              {/* Heading */}
              <h3 className="font-['Poppins'] font-bold text-[18px] text-[#0f172a] dark:text-[#f8fafc] tracking-[-0.45px] leading-[28px] mb-2 transition-colors">
                Email
              </h3>
              {/* Info */}
              <p className="font-['Inter'] text-[14px] text-[#64748b] dark:text-[#94a3b8] leading-[20px] transition-colors">
                alex.johnson@email.com
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white dark:bg-[#0f172a] rounded-[16px] p-6 border border-[#e2e8f0] dark:border-[#1e293b] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-colors">
              {/* Icon */}
              <div className="bg-[rgba(37,99,235,0.1)] dark:bg-[rgba(59,130,246,0.15)] w-12 h-12 rounded-[12px] flex items-center justify-center mb-4 transition-colors">
                {/* <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p3f3fa00} stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg> */}
              </div>
              {/* Heading */}
              <h3 className="font-['Poppins'] font-bold text-[18px] text-[#0f172a] dark:text-[#f8fafc] tracking-[-0.45px] leading-[28px] mb-2 transition-colors">
                Phone
              </h3>
              {/* Info */}
              <p className="font-['Inter'] text-[14px] text-[#64748b] dark:text-[#94a3b8] leading-[20px] transition-colors">
                +1 (555) 123-4567
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-white dark:bg-[#0f172a] rounded-[16px] p-6 border border-[#e2e8f0] dark:border-[#1e293b] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-colors">
              {/* Icon */}
              <div className="bg-[rgba(37,99,235,0.1)] dark:bg-[rgba(59,130,246,0.15)] w-12 h-12 rounded-[12px] flex items-center justify-center mb-4 transition-colors">
                {/* <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p111b2400} stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pd5da000} stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg> */}
              </div>
              {/* Heading */}
              <h3 className="font-['Poppins'] font-bold text-[18px] text-[#0f172a] dark:text-[#f8fafc] tracking-[-0.45px] leading-[28px] mb-2 transition-colors">
                Location
              </h3>
              {/* Info */}
              <p className="font-['Inter'] text-[14px] text-[#64748b] dark:text-[#94a3b8] leading-[20px] transition-colors">
                San Francisco, CA
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white dark:bg-[#0f172a] rounded-[24px] p-10 border border-[#e2e8f0] dark:border-[#1e293b] shadow-xl transition-colors">
            <form className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label className="block font-['Inter'] font-medium text-[14px] text-[#0f172a] dark:text-[#f8fafc] leading-[20px] mb-2 transition-colors">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#f1f5f9] dark:bg-[#1e293b] text-[#0f172a] dark:text-white placeholder:text-[rgba(15,23,42,0.5)] dark:placeholder:text-[rgba(248,250,252,0.5)] px-4 py-3 rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block font-['Inter'] font-medium text-[14px] text-[#0f172a] dark:text-[#f8fafc] leading-[20px] mb-2 transition-colors">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#f1f5f9] dark:bg-[#1e293b] text-[#0f172a] dark:text-white placeholder:text-[rgba(15,23,42,0.5)] dark:placeholder:text-[rgba(248,250,252,0.5)] px-4 py-3 rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition-all"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label className="block font-['Inter'] font-medium text-[14px] text-[#0f172a] dark:text-[#f8fafc] leading-[20px] mb-2 transition-colors">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Collaboration"
                  className="w-full bg-[#f1f5f9] dark:bg-[#1e293b] text-[#0f172a] dark:text-white placeholder:text-[rgba(15,23,42,0.5)] dark:placeholder:text-[rgba(248,250,252,0.5)] px-4 py-3 rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition-all"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block font-['Inter'] font-medium text-[14px] text-[#0f172a] dark:text-[#f8fafc] leading-[20px] mb-2 transition-colors">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full bg-[#f1f5f9] dark:bg-[#1e293b] text-[#0f172a] dark:text-white placeholder:text-[rgba(15,23,42,0.5)] dark:placeholder:text-[rgba(248,250,252,0.5)] px-4 py-3 rounded-[12px] font-['Inter'] text-[16px] leading-[24px] resize-none focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#60a5fa] text-white font-['Inter'] font-bold text-[16px] leading-[24px] py-4 rounded-[12px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 group"
              >
                Send Message
                {/* <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p4dc8500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                  <path d={svgPaths.pcc4e6c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                </svg> */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
