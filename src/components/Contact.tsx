"use client";

import Link from "next/link";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from "emailjs-com";
import Footer from "./Footer";

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    try {
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
    <div id="contact" className="p-2">
      <div className="screenbreak-contact">
        <p className="screenbreak-kicker screenbreak-kicker-light">
          05 / Start a conversation
        </p>
        <div className="contact-stage">
          <div className="contact-stage-copy">
            <h2>Have a product that needs someone to own it end to end?</h2>
            <p>
              I&#39;m open to product engineering roles across web and
              mobile, building internal platforms, automation, and
              AI-driven products.
            </p>
          </div>

          <div className="contact-console">
            <div className="contact-console-head">
              <span>Conversation channel</span>
              <span className="contact-console-status">
                <i aria-hidden="true" /> Available
              </span>
            </div>

            <div className="contact-signal" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, i) => (
                <i key={i} />
              ))}
            </div>

            <dl className="contact-console-details">
              <div>
                <dt>Signal</dt>
                <dd>Product Engineering &middot; React/Next.js &middot; AI</dd>
              </div>
              <div>
                <dt>Next step</dt>
                <dd>A focused first conversation</dd>
              </div>
            </dl>

            <Link
              href="#contact-form"
              className="button-tactile screenbreak-button contact-console-button"
            >
              Start the conversation <HiArrowUpRight />
            </Link>
          </div>
        </div>

        <Footer />
      </div>

      <div className="mx-auto" style={{ maxWidth: "var(--max-width)" }}>
        <div id="contact-form" className="card w-full h-auto p-4 md:p-6 mt-10">
          <p className="eyebrow">Send a message</p>
          <h3 className="text-xl font-bold text-text-main pt-2 pb-4">
            Prefer a direct form? Use this instead.
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase text-xs py-2 font-bold font-mono tracking-widest text-muted">
                  Name
                </label>
                <input
                  className="border-2 rounded-[10px] p-3 border-line bg-background focus:border-primary outline-none transition-colors"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-xs py-2 font-bold font-mono tracking-widest text-muted">
                  Phone Number
                </label>
                <input
                  className="border-2 rounded-[10px] p-3 border-line bg-background focus:border-primary outline-none transition-colors"
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-xs py-2 font-bold font-mono tracking-widest text-muted">
                Email
              </label>
              <input
                className="border-2 rounded-[10px] p-3 border-line bg-background focus:border-primary outline-none transition-colors"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-xs py-2 font-bold font-mono tracking-widest text-muted">
                Subject
              </label>
              <input
                className="border-2 rounded-[10px] p-3 border-line bg-background focus:border-primary outline-none transition-colors"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-xs py-2 font-bold font-mono tracking-widest text-muted">
                Message
              </label>
              <textarea
                className="border-2 rounded-[10px] p-3 border-line bg-background focus:border-primary outline-none transition-colors resize-none"
                rows={8}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              disabled={loading}
              className={`w-full mt-4 ${
                loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="pill-link p-4 cursor-pointer">
              <HiOutlineChevronDoubleUp className="text-primary" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
