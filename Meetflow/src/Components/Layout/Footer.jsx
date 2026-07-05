import React from "react";
import { Video } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <Video className="text-white" size={20} />
            </div>

            <h2 className="text-2xl font-bold text-white">
              MeetFlow
            </h2>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How It Works</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>

        </div>

        <hr className="my-8 border-slate-700" />

        <p className="text-center text-gray-400">
          © 2026 MeetFlow. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;