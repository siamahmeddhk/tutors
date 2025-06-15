// import { useNavigate } from "react-router";
// import { FaArrowRight } from "react-icons/fa";

// const categories = [
//   { language: "English", logo: "https://img.icons8.com/color/48/000000/english.png" },
//   { language: "Spanish", logo: "https://img.icons8.com/color/48/000000/spanish.png" },
//   { language: "French", logo: "https://img.icons8.com/color/48/000000/french.png" },
//   { language: "German", logo: "https://img.icons8.com/color/48/000000/germany.png" },
//   { language: "Chinese", logo: "https://img.icons8.com/color/48/000000/china.png" },
//   { language: "Japanese", logo: "https://img.icons8.com/color/48/000000/japan.png" },
//   { language: "Arabic", logo: "https://img.icons8.com/color/48/000000/arabic.png" },
//   { language: "Hindi", logo: "https://img.icons8.com/color/48/000000/india.png" },
//   { language: "Bengali", logo: "https://img.icons8.com/color/48/000000/bengali.png" },
// ];

// export default function LanguageCategory() {
//   const navigate = useNavigate();

//   return (
//     <section className="py-10 bg-white">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-6 text-center">Language Categories</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {categories.map((cat) => (
//             <div
//               key={cat.language}
//               onClick={() => navigate(`/find-tutor/${cat.language}`)}
//               className="cursor-pointer p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-200 flex items-center justify-between"
//             >
//               <div className="flex items-center gap-4">
//                 <img src={cat.logo} alt={cat.language} className="w-12 h-12" />
//                 <h3 className="text-xl font-semibold">{cat.language}</h3>
//               </div>
//               <FaArrowRight className="text-gray-600" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { useNavigate } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const categories = [
  { language: "English", logo: "https://img.icons8.com/color/48/great-britain.png" },
  { language: "Spanish", logo: "https://img.icons8.com/color/48/spain-2.png" },
  { language: "French", logo: "https://img.icons8.com/color/48/france.png" },
  { language: "German", logo: "https://img.icons8.com/color/48/germany.png" },
  { language: "Chinese", logo: "https://img.icons8.com/color/48/china.png" },
  { language: "Japanese", logo: "https://img.icons8.com/color/48/japan.png" },
  { language: "Arabic", logo: "https://img.icons8.com/color/48/syria.png" },
  { language: "Hindi", logo: "https://img.icons8.com/color/48/india.png" },
  { language: "Bengali", logo: "https://img.icons8.com/color/48/bangladesh.png" },
];

export default function LanguageCategory() {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Language Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.language}
              onClick={() => navigate(`/find-tutor/${cat.language}`)}
              className="cursor-pointer p-6 rounded-2xl bg-white shadow hover:shadow-lg transition-all flex justify-between items-center border border-gray-200 group"
            >
              <div className="flex items-center gap-4">
                <img
                  src={cat.logo}
                  alt={cat.language}
                  className="w-12 h-12 rounded-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://img.icons8.com/color/48/globe--v1.png"; // fallback image
                  }}
                />
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                  {cat.language}
                </h3>
              </div>
              <FaArrowRight className="text-gray-500 group-hover:text-blue-600 text-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
