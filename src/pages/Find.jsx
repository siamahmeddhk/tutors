

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import Singletutor from "../com/Singletutor";

// const Find = () => {
//   const { language } = useParams(); // 🟢 Language from URL
//   const [searchTerm, setSearchTerm] = useState(language || "");
//   const [tutors, setTutors] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setSearchTerm(language || "");
//   }, [language]);

//   useEffect(() => {
//     if (searchTerm.trim() === "") {
//       fetch("https://tutor-s.vercel.app/tutors")
//         .then((res) => res.json())
//         .then((data) => setTutors(data));
//       return;
//     }

//     const delayDebounce = setTimeout(() => {
//       setLoading(true);
//       fetch(`https://tutor-s.vercel.app/search?language=${searchTerm}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setTutors(data);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error("Error searching:", err);
//           setLoading(false);
//         });
//     }, 400);

//     return () => clearTimeout(delayDebounce);
//   }, [searchTerm]);

//   return (
//     <div className="container mx-auto px-4 py-8 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-6">
//         Find a Tutor by Language
//       </h1>

//       <div className="mb-6 text-center">
//         <input
//           type="text"
//           placeholder="Type language name..."
//           className="px-4 py-2 border rounded-lg w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {loading ? (
//         <div className="flex flex-col items-center justify-center py-12 text-blue-600">
//           <svg
//             className="animate-spin h-10 w-10 mb-4 text-blue-600"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <circle
//               className="opacity-25"
//               cx="12"
//               cy="12"
//               r="10"
//               stroke="currentColor"
//               strokeWidth="4"
//             ></circle>
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//             ></path>
//           </svg>
//           <p className="text-lg font-medium">Searching tutors...</p>
//         </div>
//       ) : tutors.length === 0 ? (
//         <p className="text-center text-gray-600">No tutors found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {tutors.map((tutor) => (
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
  const { language } = useParams();
  const [searchTerm, setSearchTerm] = useState(language || "");
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState("none"); // 🟢 Sorting state

  useEffect(() => {
    setSearchTerm(language || "");
  }, [language]);

  useEffect(() => {
    const fetchTutors = async () => {
      setLoading(true);
      try {
        let url =
          searchTerm.trim() === ""
            ? "https://tutor-s.vercel.app/tutors"
            : `https://tutor-s.vercel.app/search?language=${searchTerm}`;

        const res = await fetch(url);
        let data = await res.json();

        // 🟢 Apply sorting
        if (sortOption === "rating") {
          data.sort((a, b) => b.review - a.review); // Highest rating first
        } else if (sortOption === "priceAsc") {
          data.sort((a, b) => a.price - b.price);
        } else if (sortOption === "priceDesc") {
          data.sort((a, b) => b.price - a.price);
        }

        setTutors(data);
      } catch (err) {
        console.error("Error fetching tutors:", err);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounce = setTimeout(fetchTutors, 400);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm, sortOption]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        Find a Tutor by Language
      </h1>

      {/* Search & Sort */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Type language name..."
          className="px-4 py-2 border rounded-lg w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="none">Sort by</option>
          <option value="rating">Highest Review</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>

      {/* Tutors Grid */}
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
