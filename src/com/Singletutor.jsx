import React from 'react';
import { Link } from 'react-router';

const Singletutor = ({ tea }) => {
  const { _id, name, image, language, review, description } = tea;


  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-6 flex flex-col justify-between gap-4 hover:shadow-xl transition-all duration-300 dark:bg-gray-800">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{name}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
          <span className="font-medium">Language:</span> {language}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
          <span className="font-medium">Reviews:</span> {review}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-400 line-clamp-3 mb-4">
          {description}
        </p>
      </div>
      <Link
        to={`/tutordtl/${_id}`}
        className="mt-2 block w-full text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-300 sm:w-auto"
      >
        Details
      </Link>
    </div>
  );
};

export default Singletutor;