"use client";
import React, { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div>

      {/* The Footer Component */}
      <footer className="bg-gray-900 p-8 sm:p-12 mt-auto">
        <div className="container mx-auto px-4">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
            {/* About Section */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2 text-gray-300">About Us</h4>
              <p className="text-sm text-gray-400">We are a company dedicated to providing high-quality solutions and exceptional service. Our mission is to make a positive impact on the world.</p>
            </div>

            {/* Services Section */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2 text-gray-300">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Web Development</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">UI/UX Design</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Digital Marketing</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Consulting</a></li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2 text-gray-300">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">FAQs</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Support</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-300">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>123 Main Street, City, State 12345</li>
                <li>Email: <a href="mailto:info@example.com" className="hover:text-white transition-colors duration-300">info@example.com</a></li>
                <li>Phone: (123) 456-7890</li>
              </ul>
            </div>
          </div>

          {/* Copyright and Social Media */}
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-500">&copy; {currentYear} Your Company. All Rights Reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              {/* Social Media Icons (placeholders) */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.333 7.846h-2.146v-1.12c0-.44.205-.658.658-.658h1.493V6.25h-1.637c-1.884 0-2.833 1.13-2.833 2.833v1.763h-1.5v2.146h1.5v5.354h2.146v-5.354h1.792l.25-2.146z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.16-2.724-.951.564-2.005.974-3.127 1.195-.899-.957-2.174-1.555-3.593-1.555-3.582 0-6.491 2.909-6.491 6.491 0 .509.057 1.009.169 1.496-5.391-.27-10.151-2.868-13.349-6.834-.556.958-.876 2.074-.876 3.268 0 2.253 1.149 4.258 2.891 5.432-.849-.028-1.646-.263-2.34-.644v.082c0 3.155 2.234 5.767 5.195 6.36-.549.148-1.134.226-1.737.226-.425 0-.834-.037-1.233-.117.823 2.574 3.255 4.453 6.133 4.453 3.655 0 6.732-2.909 6.732-6.491 0-.173-.004-.347-.015-.519.387-.294.755-.615 1.09-1.006z"/></svg>
              </a>
              {/* Add more social media icons here as needed */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
