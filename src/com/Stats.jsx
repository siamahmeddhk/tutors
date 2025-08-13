// import React, { useEffect, useState } from "react";
// import { BsEye } from "react-icons/bs";

// const Stats = () => {
//   const [tutors, setTutors] = useState([]);
//   const [userCount, setUserCount] = useState(0);

//   useEffect(() => {
//     // Fetch all tutors
//     fetch("https://tutor-s.vercel.app/tutors")
//       .then((res) => res.json())
//       .then((data) => {
//         setTutors(data);
//       });
//   }, []);

//   useEffect(() => {
//     fetch("https://tutor-s.vercel.app/user")
//       .then((res) => res.json())
//       .then((data) => {
//         setUserCount(data.users?.length || 0);
//       });
//   }, []);

//   // 🔢 Calculate total reviews
//   const totalReviews = tutors.reduce(
//     (sum, tutor) => sum + (tutor.review || 0),
//     0
//   );

//   // 🧠 Extract unique languages
//   const uniqueLanguages = [
//     ...new Set(tutors.map((t) => t.language?.toLowerCase().trim())),
//   ].filter(Boolean);

//   return (
//     <div className="mb-10">
//     <h2 className="text-3xl md:text-4xl font-bold text-center text-black mt-22 mb-2 flex items-center justify-center">
//   <BsEye className="mr-3 text-2xl" />
//   Our Platform at a Glance
// </h2>
    
//       <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center max-w-6xl mx-auto">
     
//       <div className="bg-teal-500 shadow rounded-lg p-6">
//         <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
//           Total Tutors
//         </h2>
//         <p className="text-2xl font-bold text-black">{tutors.length}</p>
//       </div>
//       <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
//         <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
//           Total Reviews
//         </h2>
//         <p className="text-2xl font-bold text-green-600 dark:text-green-400">
//           {totalReviews}
//         </p>
//       </div>
//       <div className="bg-teal-500 shadow rounded-lg p-6">
//         <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
//           Languages
//         </h2>
//         <p className="text-2xl font-bold text-black">
//           {uniqueLanguages.length}
//         </p>
//       </div>
//     </div>
    
    
    
//     </div>
  
//   );
// };

// export default Stats;



import React, { useEffect, useState } from "react";
// We'll use lucide-react for a modern icon set
import { Users, BookOpen, MessageCircleMore, Globe, BarChart  } from "lucide-react";

// A reusable component for each statistic card
const StatCard = ({ title, value, icon, color }) => (
  <div className={`p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300 ${color}`}>
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-white/30 rounded-full text-white">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-white uppercase">{title}</h3>
        <p className="text-3xl font-bold text-white mt-1">{value}</p>
      </div>
    </div>
  </div>
);

const Stats = () => {
  const [tutors, setTutors] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // We'll use a single async function to fetch all data to manage loading state better
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch tutors data
        const tutorsResponse = await fetch("https://tutor-s.vercel.app/tutors");
        const tutorsData = await tutorsResponse.json();
        setTutors(tutorsData);

        // Fetch users data
        const usersResponse = await fetch("https://tutor-s.vercel.app/user");
        const usersData = await usersResponse.json();
        setUsers(usersData.users || []); // Handle case where 'users' might be undefined
        
        setLoading(false);
      } catch (e) {
        console.error("Failed to fetch data:", e);
        setError("Failed to load platform data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔢 Calculate total reviews from tutors data
  const totalReviews = tutors.reduce(
    (sum, tutor) => sum + (tutor.review || 0),
    0
  );

  // 🧠 Extract unique languages from tutors data
  const uniqueLanguages = [
    ...new Set(tutors.map((t) => t.language?.toLowerCase().trim())),
  ].filter(Boolean);

  // 🎭 Render based on state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-48 text-red-500 font-medium">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-5xl font-extrabold text-center text-teal-500 dark:text-teal-400 mb-10 flex items-center justify-center space-x-3">
          <BarChart size={40} />
          <span>Our Platform at a Glance</span>
        </h2>
      
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Tutors"
          value={tutors.length}
          icon={<BookOpen size={24} />}
          color="bg-gradient-to-br from-blue-500 to-blue-600"
        />
        <StatCard
          title="Total Users"
          value={users.length}
          icon={<Users size={24} />}
          color="bg-gradient-to-br from-green-500 to-green-600"
        />
        <StatCard
          title="Total Reviews"
          value={totalReviews}
          icon={<MessageCircleMore size={24} />}
          color="bg-gradient-to-br from-indigo-500 to-indigo-600"
        />
        <StatCard
          title="Unique Languages"
          value={uniqueLanguages.length}
          icon={<Globe size={24} />}
          color="bg-gradient-to-br from-purple-500 to-purple-600"
        />
      </div>
    </div>
  );
};

// Export the main component as default, which is a standard React practice
export default Stats;
