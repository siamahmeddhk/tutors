// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router'; // ⬅️ Import this
// import Singletutor from '../com/Singletutor';

// const Find = () => {
//   const { categories } = useParams(); // ⬅️ Grabs category from URL
//   const [tutors, setTutors] = useState([]);
//   const [loading, setLoading] = useState(true); // Optional loading state

//   useEffect(() => {
//     fetch('https://tutor-s.vercel.app/tutors')
//       .then(res => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then(data => {
//         if (categories) {
//           const filtered = data.filter(tutor =>
//             tutor.language.toLowerCase() === categories.toLowerCase()
//           );
//           setTutors(filtered);
//         } else {
//           setTutors(data);
//         }
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("Failed to fetch tutors:", error);
//         setLoading(false);
//       });
//   }, [categories]);

//   return (
//     <div className="container mx-auto px-4 py-8 dark:bg-gray-900 min-h-screen">
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
//         {categories ? `Tutors for "${categories}"` : "Find Your Perfect Tutor"}
//       </h1>
//       {loading ? (
//         <p className="text-center text-gray-600 dark:text-gray-300 text-lg">Loading tutors...</p>
//       ) : tutors.length === 0 ? (
//         <p className="text-center text-red-500 text-lg">No tutors found for "{categories}"</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {tutors.map(tutor => (
//             <Singletutor key={tutor._id} tea={tutor} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Find;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import Singletutor from "../com/Singletutor"; // তোমার টিউটর কার্ড কম্পোনেন্ট

// const Find = () => {
//   const [tutors, setTutors] = useState([]);
//   const { language } = useParams();

//   useEffect(() => {
//     if (language) {
//       fetch(`https://tutor-s.vercel.app/tutors/${language}`)
//         .then(res => res.json())
//         .then(data => setTutors(data))
//         .catch(err => console.error(err));
//     } else {
//       fetch("https://tutor-s.vercel.app/tutors")
//         .then(res => res.json())
//         .then(data => setTutors(data))
//         .catch(err => console.error(err));
//     }
//   }, [language]);

//   return (
//     <div className="container mx-auto px-4 py-8 min-h-screen bg-gray-50">
//       <h1 className="text-3xl font-bold text-center mb-8">
//         {language ? `${language} Tutors` : "All Tutors"}
//       </h1>
//       {tutors.length === 0 ? (
//         <p className="text-center text-gray-600">Loading tutors or no tutors available...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {tutors.map(tutor => (
//             <Singletutor key={tutor._id} tea={tutor} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Find;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Singletutor from "../com/Singletutor";

const Find = () => {
  const { language } = useParams(); // 🟢 Language from URL
  const [searchTerm, setSearchTerm] = useState(language || "");
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSearchTerm(language || "");
  }, [language]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      fetch("https://tutor-s.vercel.app/tutors")
        .then((res) => res.json())
        .then((data) => setTutors(data));
      return;
    }

    const delayDebounce = setTimeout(() => {
      setLoading(true);
      fetch(`https://tutor-s.vercel.app/search?language=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          setTutors(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error searching:", err);
          setLoading(false);
        });
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">
        Find a Tutor by Language
      </h1>

      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Type language name..."
          className="px-4 py-2 border rounded-lg w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-12 text-blue-600">
          <svg
            className="animate-spin h-10 w-10 mb-4 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <p className="text-lg font-medium">Searching tutors...</p>
        </div>
      ) : tutors.length === 0 ? (
        <p className="text-center text-gray-600">No tutors found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tutors.map((tutor) => (
            <Singletutor key={tutor._id} tea={tutor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Find;
