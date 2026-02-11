"use client";
import React, { useState } from "react";
import Heading from "./ui/Heading";
import { ContactCardType } from "@/Data/constants";
import { contactCardData } from "@/Data/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";


function ContactInfoCard({icon:Icon, title, data}:ContactCardType) {
  return (
    <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-[#e2e8f0] dark:border-[#1e293b] shadow-sm transition-colors">
      {/* Icon */}
      <div className="bg-[rgba(37,99,235,0.1)] dark:bg-[rgba(59,130,246,0.15)] w-12 h-12 rounded-[12px] flex items-center justify-center mb-4 transition-colors">
        <Icon/>
      </div>
      {/* Heading */}
      <h3 className=" font-bold text-[18px] text-[#0f172a] dark:text-[#f8fafc] tracking-[-0.45px] leading-7 mb-2 transition-colors">
        {title}
      </h3>
      {/* Info */}
      <p className=" text-[14px] text-[#64748b] dark:text-[#94a3b8] leading-5 transition-colors">
        {data}
      </p>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_8dlxpua", // 🔴 Service ID
        "template_llyp848", // 🔴 Template ID
        formData,
        "TAbn0Mx7W8aIIFG5t", // 🔴 Public Key
      )
      .then(
        () => {
          toast.success("Email sent successfully ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          toast.error("Email sending failed ❌");
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };
  const labelClass = "block font-medium text-[16px] text-foreground/90  leading-[20px] mb-2 transition-colors";
  const inputClass = "w-full bg-gray-100 dark:bg-gray-800 text-foreground placeholder:text-foreground/50  px-4 py-3 rounded-[12px] text-[16px] focus:outline-none focus:ring-2 focus:ring-primary transition-all";
  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-gray-900 py-16 lg:py-20 transition-colors"
    >
      {/* Background Image */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

      {/* Content */}
      <div className="relative max-w-350 mx-auto px-6 py-24">
        {/* Header */}
        <Heading
          heading="Get In"
          gradientHeading="Touch"
          paragraph="Have a project in mind or want to collaborate? I would love to hear from you"
        />

        {/* Contact Cards & Form */}
        
        <div className="grid lg:grid-cols-[336px_1fr] gap-6 max-w-276 mx-auto">
          {/* Information Card */}
          <div className="flex flex-col gap-6">
            {contactCardData.map((item, index)=>(
                <ContactInfoCard key={index} {...item}/>
              ))}
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white dark:bg-[#0f172a] rounded-3xl p-10 border border-[#e2e8f0] dark:border-[#1e293b] shadow-xl transition-colors">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className={labelClass}>
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={inputClass}
                />
              </div>

              {/* Email Input */}
              <div>
                <label className={labelClass}>
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className={inputClass}
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className={labelClass}>
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={inputClass}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary   text-foreground  font-semibold text-[18px] leading-6 py-4 rounded-[12px] shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 group"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
