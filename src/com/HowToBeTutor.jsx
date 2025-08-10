import React from "react";
import { NavLink } from "react-router";

const HowToBeTutor = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 ">
      <h1 className="text-3xl font-bold mb-6 text-center">
        How to Become a Tutor on Our Platform
      </h1>

      <section className="space-y-6">
        <p>
          Becoming a tutor on our platform is simple! Whether you’re a language expert or a subject specialist, you can start teaching and earning in just a few steps.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-2xl shadow-teal-500 text-black">
          <h2 className="text-2xl font-semibold mb-3">Step 1: Sign Up</h2>
          <p>Create an account using your email or Google Sign-In.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-2xl shadow-teal-500 text-black">
          <h2 className="text-2xl font-semibold mb-3">Step 2: Add Your Tutorials</h2>
          <p>
            Go to the "Add Tutorials" section and provide details like language, price, description, and an image. Make sure your details are accurate to attract students.
          </p>
        </div>

        <div className="bg-gray-100 text-black p-6 rounded-lg shadow-2xl shadow-teal-500">
          <h2 className="text-2xl font-semibold mb-3">Step 3: Engage with Students</h2>
          <p>
            Once your tutorial is live, students can view your profile, book sessions, and leave reviews. Maintain a good rating to get more bookings.
          </p>
        </div>

        <p className="mt-6 font-medium text-lg">
          🚀 Ready to start? Head over to the{" "}
          <NavLink to="/signup" className="text-blue-500 dark:text-blue-400">Add Tutorials</NavLink> page and become a tutor today!
        </p>
      </section>
    </div>
  );
};

export default HowToBeTutor;
