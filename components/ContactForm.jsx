"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message");
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-8 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300 mt-8"
    >
      <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
        Send a Message
      </h3>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-gray-700 text-white border border-gray-700 focus:border-blue-400 outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-gray-700 text-white border border-gray-700 focus:border-blue-400 outline-none"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        rows="4"
        className="w-full p-3 rounded bg-gray-700 text-white border border-gray-700 focus:border-blue-400 outline-none"
      ></textarea>
      <button
        type="submit"
        disabled={loading}
        className="w-full p-3 text-lg font-medium bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-blue-500/30"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      {success && <p className="text-green-500 text-center">{success}</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
    </form>
  );
}
