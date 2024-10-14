import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

        <p className="mb-4 text-center">
          We would love to hear from you! If you have any questions, comments, or concerns, please feel free to reach out to us using the information below.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-6">Contact Information</h2>
        
        <div className="mb-4">
          <h3 className="font-semibold">Phone:</h3>
          <p>+91 8076925810</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Email:</h3>
          <p>ayush.xyz1625@gmail.com</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Address:</h3>
          <p>wz-57b ring road,</p>
          <p>naraina, new delhi</p>
        </div>

        <h2 className="text-2xl font-semibold mb-3 mt-6">Send Us a Message</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
