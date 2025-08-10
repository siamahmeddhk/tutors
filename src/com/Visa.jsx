import React from "react";
import { FaPassport, FaEnvelope } from "react-icons/fa";

export default function Visa() {
  return (
    <section className="max-w-6xl mx-auto my-12 px-4 py-10 bg-white dark:bg-gray-900 transition-colors duration-300 rounded-2xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-500 flex items-center justify-center gap-2">
          <FaPassport className="text-teal-500" /> Visa Processing Help
        </h1>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          Need help with study or tutor-related visa processing? We're here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Info Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Available Countries
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">🇺🇸</span>
              <span>United States – Student & Language Visa</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🇨🇦</span>
              <span>Canada – Study Permit Guidance</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🇬🇧</span>
              <span>United Kingdom – Short-term Study Visa</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🇦🇺</span>
              <span>Australia – Subclass 500 Visa</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🇩🇪</span>
              <span>Germany – Language Learning Visa</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6">
            How We Help
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Free document review (Passport, Acceptance Letter)</li>
            <li>Application form support</li>
            <li>Interview preparation</li>
            <li>Consultation on tutor-based educational pathways</li>
          </ul>
        </div>

        {/* Help Form */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <FaEnvelope className="text-blue-600 dark:text-blue-400" /> Request Visa Assistance
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Visa help request submitted!");
            }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Query or Details"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}