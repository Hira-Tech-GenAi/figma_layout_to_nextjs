"use client";
import { useState } from "react";

const ContactUs = () => {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, feedback });

    //? Handle form submission logic (API call, etc.)
    alert("Feedback submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        We Value Your Feedback
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className=" text-black w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label
          htmlFor="feedback"
          className="block text-gray-700 font-medium mb-2"
        >
          Feedback:
        </label>
        <textarea
          id="feedback"
          className="w-full px-3 py-2 mb-4 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
