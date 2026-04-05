"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from "emailjs-com";

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  // Type-safe change handler for both inputs and textareas
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // TypeScript Fix: Provide fallbacks for environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    try {
      // Use e.currentTarget to refer to the form element
      await emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey);

      alert("Message sent! I'll get back to you as soon as possible.");
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Email Error:", err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen bg-background">
      <div className="max-w-310 m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-primary font-semibold">
          Contact
        </p>
        <h2 className="py-4 text-gray-800">Get In Touch</h2>
        <div className="grid grid-cols-6 gap-8">
          {/* Left Sidebar */}
          <div className="col-span-6 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 bg-white">
            <div className="lg:p-4 h-full">
              <div className="overflow-hidden rounded-xl">
                <Image
                  className="rounded-xl hover:scale-105 transition-transform duration-300"
                  src="/contact.png"
                  width={800}
                  height={1000}
                  alt="Contact image"
                />
              </div>
              <div className="pt-8 text-gray-700">
                <h2 className="py-4 text-gray-900 text-2xl font-bold">
                  Gabriel Ochieng
                </h2>
                <p className="font-semibold uppercase tracking-wider text-primary">
                  Software Developer
                </p>
                <p className="py-4 leading-relaxed">
                  I am currently available for new opportunities! Ready to
                  leverage my expertise in{" "}
                  <span className="font-bold text-gray-900">
                    UX-driven development
                  </span>{" "}
                  and
                  <span className="font-bold text-gray-900">
                    {" "}
                    AI integration
                  </span>{" "}
                  to build high-impact products.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 pb-4 text-primary font-bold">
                  Connect With Me
                </p>
                <div className="flex items-center justify-between py-4 max-w-82.5">
                  <a
                    href="https://www.linkedin.com/in/gabrielochieng"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-background text-primary">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/GabrielOchieng"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-background text-primary">
                      <FaGithub />
                    </div>
                  </a>
                  <Link
                    href="/#contact"
                    className="group flex flex-col items-center"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-background text-primary">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-background text-primary">
                      <BsFillPersonFill />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Side */}
          <div className="col-span-6 lg:col-span-4 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 bg-white">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 font-semibold">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300 focus:border-primary outline-none transition-colors"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 font-semibold">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300 focus:border-primary outline-none transition-colors"
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 font-semibold">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300 focus:border-primary outline-none transition-colors"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 font-semibold">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300 focus:border-primary outline-none transition-colors"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 font-semibold">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 focus:border-primary outline-none transition-colors resize-none"
                    rows={10}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  disabled={loading}
                  className={`w-full p-4 text-white mt-4 transition-all duration-300 rounded-lg font-bold shadow-lg shadow-gray-400 bg-linear-to-r from-primary to-secondary hover:scale-[1.02] active:scale-95 ${
                    loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Scroll Top */}
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 transition-transform duration-300 bg-white">
              <HiOutlineChevronDoubleUp className="text-primary" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
