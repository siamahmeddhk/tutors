import React, { useEffect, useState } from 'react';

const Stats = () => {
  const [tutors, setTutors] = useState([]);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Fetch all tutors
    fetch("https://tutor-s.vercel.app/tutors")
      .then(res => res.json())
      .then(data => {
        setTutors(data);
      });
  }, []);

  useEffect(() => {
    // Fetch Firebase users
    fetch("https://tutor-s.vercel.app/user")
      .then(res => res.json())
      .then(data => {
        setUserCount(data.users?.length || 0);
      });
  }, []);

  // 🔢 Calculate total reviews
  const totalReviews = tutors.reduce((sum, tutor) => sum + (tutor.review || 0), 0);

  // 🧠 Extract unique languages
  const uniqueLanguages = [...new Set(tutors.map(t => t.language?.toLowerCase().trim()))].filter(Boolean);

  return (
    <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center max-w-6xl mx-auto">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Total Tutors</h2>
        <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{tutors.length}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Total Reviews</h2>
        <p className="text-2xl font-bold text-green-600 dark:text-green-400">{totalReviews}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Languages</h2>
        <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">{uniqueLanguages.length}</p>
      </div>
     
    </div>
  );
};

export default Stats;
