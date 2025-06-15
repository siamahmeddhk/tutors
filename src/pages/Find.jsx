// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router'; // ⬅️ Import this
// import Singletutor from '../com/Singletutor';

// const Find = () => {
//   const { categories } = useParams(); // ⬅️ Grabs category from URL
//   const [tutors, setTutors] = useState([]);
//   const [loading, setLoading] = useState(true); // Optional loading state

//   useEffect(() => {
//     fetch('http://localhost:3000/tutors')
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


import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Singletutor from "../com/Singletutor"; // তোমার টিউটর কার্ড কম্পোনেন্ট

const Find = () => {
  const [tutors, setTutors] = useState([]);
  const { language } = useParams();

  useEffect(() => {
    if (language) {
      fetch(`http://localhost:3000/tutors/${language}`)
        .then(res => res.json())
        .then(data => setTutors(data))
        .catch(err => console.error(err));
    } else {
      fetch("http://localhost:3000/tutors")
        .then(res => res.json())
        .then(data => setTutors(data))
        .catch(err => console.error(err));
    }
  }, [language]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">
        {language ? `${language} Tutors` : "All Tutors"}
      </h1>
      {tutors.length === 0 ? (
        <p className="text-center text-gray-600">Loading tutors or no tutors available...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tutors.map(tutor => (
            <Singletutor key={tutor._id} tea={tutor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Find;
