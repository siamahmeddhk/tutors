import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLeaf, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div className="space-y-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-2xl font-bold text-blue-600 dark:text-blue-400 group"
          >
            <span className="group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
               📚 TutorsTalk
            </span>
          </Link>
          <p className="text-sm leading-relaxed">
            Empowering learners and tutors worldwide through easy bookings and expert guidance.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>123 Education St, Learning City</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 w-max">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              { path: "/", label: "Home" },
              { path: "/find-tutor", label: "Find Tutors" },
              { path: "/add", label: "Add Tutorial" },
              { path: "/visa-help", label: "Visa Help" },
            ].map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 w-max">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-blue-500 mt-1 flex-shrink-0" />
              <a 
                href="mailto:help@tutorstalk.com" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                help@tutorstalk.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-blue-500 mt-1 flex-shrink-0" />
              <a 
                href="tel:+8801234567890" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                +880 1234 567 890
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0" />
              <span>Support available 9AM-6PM</span>
            </li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Stay Connected
          </h3>
          <div className="mb-6">
            <p className="text-sm mb-3">Subscribe to our newsletter:</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-sm border border-r-0 border-gray-300 dark:border-gray-600 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-r transition-colors duration-300">
                Join
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            {[
              { icon: <FaFacebookF />, color: "hover:text-[#1877F2]" },
              { icon: <FaTwitter />, color: "hover:text-[#1DA1F2]" },
              { icon: <FaInstagram />, color: "hover:text-[#E1306C]" },
            ].map((social, index) => (
              <a 
                key={index} 
                href="#" 
                className={`text-lg p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm hover:shadow-md transition-all duration-300 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-14 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} TutorsTalk. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
            <Link to="/cookies" className="hover:underline">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}