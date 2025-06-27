import React from "react";
import { Link } from "react-router";
import { FaSadTear, FaHome } from "react-icons/fa";

export default function ErrorPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-6">
      <div className="max-w-xl text-center">
        <div className="text-7xl mb-6 text-blue-600 dark:text-blue-400">
          <FaSadTear />
        </div>
        <h1 className="text-5xl font-bold text-black dark:text-white mb-4">Oops! 404</h1>
        <p className="text-lg text-black dark:text-white mb-6">
          Looks like you took a wrong turn while learning languages...  
          <span className="block mt-2 text-blue-600 dark:text-blue-400 font-medium">
            Even our tutors can't find this page!
          </span>
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition"
        >
          <FaHome /> Back to Home
        </Link>

        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 italic">
          Error Code: 404 – “Page went to take a language class.”
        </p>
      </div>
    </section>
  );
}
