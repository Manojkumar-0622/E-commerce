import React from "react";

const ContectPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="bg-gray-200 py-16 text-center">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-gray-600 mt-2">We’d love to hear from you</p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT INFO */}
        <div>
          <h2 className="text-2xl font-medium mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have a question about our products, orders, or services?  
            Fill out the form and our team will get back to you shortly.
          </p>

          <div className="space-y-4 text-gray-700">
            <p><span className="font-medium">Email:</span> support@ecommerce.com</p>
            <p><span className="font-medium">Phone:</span> +91 98765 43210</p>
            <p><span className="font-medium">Address:</span> Bengaluru, India</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContectPage;
