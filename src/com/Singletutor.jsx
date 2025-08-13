// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router';
// import { Authcontext } from '../Auth/Authcontext';


// const Singletutor = ({ tea }) => {
//   const { _id, name, image, language, review, description } = tea;
//   const { user } = useContext(Authcontext);
//   const navigate = useNavigate();

//   const handleDetailsClick = (e) => {
//     if (!user) {
//       e.preventDefault();
//       navigate('/signup');
//     }
//     // If user exists, the Link will handle navigation normally
//   };

//   return (
//     <div className="bg-gray-100 shadow-teal-500 rounded-2xl overflow-hidden p-6 flex flex-col justify-between gap-4 hover:shadow-xl transition-all duration-300">
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-48 object-cover rounded-lg"
//       />
//       <div className="flex-grow">
//         <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
//         <p className="text-sm text-gray-500  mb-1">
//           <span className="font-medium">Language:</span> {language}
//         </p>
//         <p className="text-sm text-gray-400 mb-1">
//           <span className="font-medium">Reviews:</span> {review}
//         </p>
//         <p className="text-sm text-gray-700 dark:text-gray-400 line-clamp-3 mb-4">
//           {description}
//         </p>
//       </div>
//       <Link
//         to={user ? `/tutordtl/${_id}` : '#'}
//         onClick={handleDetailsClick}
//         className="mt-2 block w-full text-center bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 transition-all duration-300 sm:w-auto"
//       >
//         See more
//       </Link>
//     </div>
//   );
// };

// export default Singletutor;





import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';

import { Star, User, Languages, BookOpen, ArrowRight } from 'lucide-react';
import { Authcontext } from '../Auth/Authcontext';

const Singletutor = ({ tea }) => {
  const { _id, name, image, language, review, description } = tea;
  const { user } = useContext(Authcontext);
  const navigate = useNavigate();

  const handleDetailsClick = (e) => {
    if (!user) {
      e.preventDefault();
      navigate('/signup');
    }
  };

  return (
    <div className="group bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
      {/* Image with gradient overlay */}
      <div className="relative overflow-hidden rounded-2xl mb-5 h-52 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-teal-500/90 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium">
          <Star size={16} className="fill-white" />
          {review}
        </div>
      </div>

      <div className="flex-grow">
        {/* Tutor name and language */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
            <User size={20} className="text-teal-500" />
            {name}
          </h3>
          <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-sm font-medium">
            <Languages size={16} />
            {language} Tutor
          </div>
        </div>

        {/* Description with fade effect */}
        <div className="relative mb-5">
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white dark:from-gray-800 to-transparent pointer-events-none" />
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      {/* Button with animated arrow */}
      <Link
        to={user ? `/tutordtl/${_id}` : '#'}
        onClick={handleDetailsClick}
        className="mt-auto w-full flex items-center justify-between bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-5 py-3 rounded-xl transition-all duration-300 group-hover:shadow-teal-200 dark:group-hover:shadow-teal-900 group-hover:shadow-md"
      >
        <span className="font-medium">View Profile</span>
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default Singletutor;