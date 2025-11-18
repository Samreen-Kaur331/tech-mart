import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setSuccess("✅ Thank you for reaching out! Our Homing team will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(formErrors);
      setSuccess("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50 bg-gradient-to-b from-white to-pink-200 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-black-600 mb-4">
          Get in Touch with <span className="text-pink-600">techmart</span>
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Have questions about buying, selling, or designing your dream home?  
          Fill out the form below and our experts will contact you shortly.
        </p>

        {success && (
          <div className="mb-4 p-3 text-green-700 bg-green-100 rounded-lg">
            {success}
          </div>
        )}

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="How can we help you with your home?"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
            {errors.message && (
              <p className="text-pink-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
