

// import { useNavigate } from "react-router";
// import { FaArrowRight } from "react-icons/fa";

// import { MdLanguage } from "react-icons/md";

// const categories = [
//   {
//     language: "English",
//     logo: "https://img.icons8.com/color/48/great-britain.png",
//   },
//   { language: "Spanish", logo: "https://img.icons8.com/color/48/spain-2.png" },
//   { language: "French", logo: "https://img.icons8.com/color/48/france.png" },
//   { language: "German", logo: "https://img.icons8.com/color/48/germany.png" },
//   { language: "Chinese", logo: "https://img.icons8.com/color/48/china.png" },
//   { language: "Japanese", logo: "https://img.icons8.com/color/48/japan.png" },
//   { language: "Arabic", logo: "https://img.icons8.com/color/48/syria.png" },
//   { language: "Hindi", logo: "https://img.icons8.com/color/48/india.png" },
//   {
//     language: "Bengali",
//     logo: "https://img.icons8.com/color/48/bangladesh.png",
//   },
// ];

// export default function LanguageCategory() {
//   const navigate = useNavigate();

//   return (
//     <section className="py-12 transition-colors duration-300">
//       <div className="max-w-6xl mx-auto px-1">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10 flex items-center justify-center">
//           <MdLanguage className="mr-3" />
//           Explore by Language
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {categories.map((cat) => (
//             <div
//               key={cat.language}
//               onClick={() => navigate(`/find-tutor/${cat.language}`)}
//               className="cursor-pointer p-6 rounded-2xl  border-2 border-teal-500 shadow-sm hover:shadow-lg transition-all flex justify-between items-center group"
//             >
//               <div className="flex items-center gap-4">
//                 <img
//                   src={cat.logo}
//                   alt={cat.language}
//                   className="w-12 h-12 rounded-full object-cover"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src =
//                       "https://img.icons8.com/color/48/globe--v1.png";
//                   }}
//                 />
//                 <h3 className="text-lg font-semibold text-black dark:text-teal-500">
//                   {cat.language}
//                 </h3>
//               </div>
//               <FaArrowRight className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 transition" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { useNavigate } from "react-router";
import { Globe, ArrowRight } from "lucide-react";

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
    <section className="relative overflow-hidden py-20 transition-colors duration-300">
      <div className="absolute inset-0  dark:from-teal-900/20 dark:to-transparent z-0"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h2 className="text-2xl sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-16 flex items-center justify-center space-x-3">
          <Globe size={40} className="text-teal-500" />
          <span className="text-teal-500">Explore by Language</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.language}
              onClick={() => navigate(`/find-tutor/${cat.language}`)}
              className="cursor-pointer p-6 rounded-3xl bg-white dark:bg-gray-900 border-2 border-transparent shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-teal-500 flex justify-between items-center group"
            >
              <div className="flex items-center gap-8">
                <div className="w-26 h-16 flex-shrink-0 flex items-center justify-center bg-teal-100 rounded-full dark:bg-teal-900/40 transition-all duration-300 group-hover:shadow-lg group-hover:bg-teal-500/20">
                  <img
                    src={cat.logo}
                    alt={`${cat.language} flag`}
                    className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/48x48/CCCCCC/333333?text=LANG";
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-500 transition-colors duration-300">
                  {cat.language}
                </h3>
              </div>
              <ArrowRight className="text-gray-400 dark:text-gray-600 group-hover:text-teal-500 text-3xl transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
