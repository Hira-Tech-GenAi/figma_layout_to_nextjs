import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 flex flex-col justify-center items-center space-y-4">
      {/* Social Icons */}
      <div className="flex space-x-6">
        <FaFacebook className="text-2xl text-gray-700" />
        <FaTwitter className="text-2xl text-gray-700" />
        <FaLinkedin className="text-2xl text-gray-700" />
        <FaGithub className="text-2xl text-gray-700" />
        <FaInstagram className="text-2xl text-gray-700" />
      </div>

      {/* Copyright Text */}
      <p className="text-gray-700 text-center">
        © 2024 Hira Khalid. Made with <span className="text-red-500">❤</span>
      </p>
    </footer>
  );
}
