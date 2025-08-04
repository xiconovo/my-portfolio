import emailjs from "emailjs-com";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_beg9kcd", // Your service ID
        "template_fg1thxa", // Your template ID
        e.target,
        "w7uDfb9qryMerLGOL" // Your user/public key
      )
      .then(() => {
        setStatusType("success");
        setStatusMessage("✅ Message sent successfully!");
        setFormData({ user_name: "", user_email: "", message: "" });

        setTimeout(() => {
          setStatusMessage("");
          setStatusType("");
        }, 5000);
      })
      .catch(() => {
        setStatusType("error");
        setStatusMessage("❌ Failed to send message. Please try again later.");

        setTimeout(() => {
          setStatusMessage("");
          setStatusType("");
        }, 5000);
      });
  };

  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-[10vw] py-8 lg:py-16 mt-24 mb-8 lg:mb-16 scroll-mt-[80px]"
    >
      <h2 className="text-3xl sm:text-5xl lg:text-5xl font-semibold text-blue-200 font-poppins text-center mb-12 sm:mb-16 lg:mb-20">
        Contact
      </h2>

      <p className="mb-8 lg:mb-16 font-poppins text-center text-gray-100 text-base sm:text-lg mx-auto w-full max-w-2xl px-2">
        Have a project in mind or want to collaborate? Feel free to reach out!
        I'm always open to new opportunities and exciting projects —
        <a
          href="mailto:xiconovo2000@gmail.com"
          className="text-blue-200 hover:underline mx-1.5"
        >
          xiconovo2000@gmail.com
        </a>
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 max-w-screen-md mx-auto"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="user_name"
            className="block mb-2 text-md font-poppins text-gray-100"
          >
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="block p-3 w-full text-sm font-poppins rounded-lg border bg-[#02001E]/5 backdrop-blur-lg dark:border-gray-600 dark:placeholder-gray-400 text-white focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Your name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="user_email"
            className="block mb-2 text-md font-poppins text-gray-100"
          >
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className="block p-3 w-full text-sm font-poppins rounded-lg border bg-[#02001E]/5 backdrop-blur-lg dark:border-gray-600 dark:placeholder-gray-400 text-white focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="your@email.com"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-md font-poppins text-gray-100"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="block p-3 w-full text-sm font-poppins rounded-lg border bg-[#02001E]/5 backdrop-blur-lg dark:border-gray-600 dark:placeholder-gray-400 text-white focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Leave a message..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center px-4 py-3 bg-[#eff4ff] backdrop-blur-lg text-[#41567e] rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-l hover:from-blue-200 hover:to-blue-200"
        >
          <span className="text-sm font-semibold font-poppins">
            Send message
          </span>
        </button>
      </form>

      {statusMessage && (
        <div
          className={`mt-6 text-center font-poppins text-sm sm:text-base ${
            statusType === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {statusMessage}
        </div>
      )}
    </section>
  );
};

export default Contact;
