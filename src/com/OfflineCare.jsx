import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTools } from "react-icons/fa";

export default function OfflineCare() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-2">
          <FaTools /> Offline Support & Care
        </h2>
        <p className="mt-3 text-black dark:text-white max-w-2xl mx-auto">
          Having trouble reaching us online? We're here for you even when you're offline.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Help Center */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-3xl mb-3" />
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Visit Our Help Center</h3>
          <p className="text-sm text-black dark:text-white">
            Come to our physical help desk for offline assistance, weekdays 10am–5pm.
          </p>
          <p className="text-sm mt-2 text-blue-600 dark:text-blue-400">House #22, Road 13, Dhanmondi, Dhaka</p>
        </div>

        {/* Call Support */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <FaPhoneAlt className="text-blue-600 dark:text-blue-400 text-3xl mb-3" />
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Call Our Support Team</h3>
          <p className="text-sm text-black dark:text-white">
            Speak with our friendly support agents between 9am–8pm.
          </p>
          <p className="text-sm mt-2 text-blue-600 dark:text-blue-400">+880 1700 000 000</p>
        </div>

        {/* Email Help */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <FaEnvelope className="text-blue-600 dark:text-blue-400 text-3xl mb-3" />
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Email Assistance</h3>
          <p className="text-sm text-black dark:text-white">
            Drop us an email and we’ll respond within 24 hours (excluding holidays).
          </p>
          <p className="text-sm mt-2 text-blue-600 dark:text-blue-400">care@tutorstalk.com</p>
        </div>
      </div>
    </section>
  );
}
