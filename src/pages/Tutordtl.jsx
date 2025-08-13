// import React, { useContext, useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router";
// import { Authcontext } from "../Auth/Authcontext";
// import Swal from "sweetalert2";

// const Tutordtl = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [tutor, setTutor] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { user } = useContext(Authcontext);

//   const handelbook = async () => {
//   if (!user?.email) {
//     Swal.fire({
//       icon: "warning",
//       title: "Login Required",
//       text: "Please log in to book a tutor!",
//     });
//     return;
//   }

//   const bookingData = {
//     tutorId: id,
//     tutorName: tutor.name,
//     tutorImage: tutor.image,
//     language: tutor.language,
//     price: tutor.price,
//     tutorEmail: tutor.email || "",
//     bookingTime: new Date().toISOString(),
//     courseId: tutor._id,
//   };

//   try {
//     const token = await user.getIdToken(); // ✅ Get Firebase token
//     const response = await fetch("https://tutor-s.vercel.app/booking", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // ✅ Send auth token
//       },
//       body: JSON.stringify(bookingData),
//     });

//     const data = await response.json();

//     if (data.insertedId) {
//       Swal.fire({
//         icon: "success",
//         title: "Booking Successful!",
//         text: `${tutor.name} has been booked.`,
//         confirmButtonText: "Go to Booked Page",
//       }).then(() => {
//         navigate("/booked");
//       });
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Booking Failed",
//         text: "Something went wrong. Please try again.",
//       });
//     }
//   } catch (error) {
//     console.error("Booking error:", error);
//     Swal.fire({
//       icon: "error",
//       title: "Error",
//       text: "An error occurred. Please try again later.",
//     });
//   }
// };


//   useEffect(() => {
//     fetch(`https://tutor-s.vercel.app/tutors`)
//       .then((res) => res.json())
//       .then((data) => {
//         const found = data.find((t) => t._id === id);
//         setTutor(found);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching tutor:", err);
//         setLoading(false);
//       });
//   }, [id]);

//   // Beautiful Loading Spinner
//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center py-20 text-blue-600">
//         <svg
//           className="animate-spin h-10 w-10 mb-4 text-blue-600"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//         >
//           <circle
//             className="opacity-25"
//             cx="12"
//             cy="12"
//             r="10"
//             stroke="currentColor"
//             strokeWidth="4"
//           ></circle>
//           <path
//             className="opacity-75"
//             fill="currentColor"
//             d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//           ></path>
//         </svg>
//         <p className="text-lg font-medium">Loading tutor details...</p>
//       </div>
//     );
//   }

//   if (!tutor) {
//     return (
//       <div className="text-center text-gray-500 py-10">
//         <p>Tutor not found.</p>
//       </div>
//     );
//   }

//   const { name, image, language, review, description, price } = tutor;

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       <div className="grid md:grid-cols-2 gap-10 bg-gray-100 rounded-xl shadow-2xl shadow-teal-500 overflow-hidden p-6">
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-96 object-cover rounded-lg shadow-md"
//         />
//         <div className="flex flex-col justify-between">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800">
//               {name}
//             </h2>
//             <p className="text-gray-600 mb-2">
//               <span className="font-medium">Language:</span> {language}
//             </p>
//             <p className="text-gray-600 mb-2">
//               <span className="font-medium">Reviews:</span> {review}
//             </p>
//             {price && (
//               <p className="text-gray-6000 mb-4">
//                 <span className="font-medium">Price:</span> {price}
//               </p>
//             )}
//             <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
//               {description}
//             </p>
          
//           </div>

//           <div className="mt-6 flex flex-wrap gap-4">
//             <button
//               onClick={() => navigate(-1)}
//               className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-all"
//             >
//               Go Back
//             </button>
//             <button
//               onClick={handelbook}
//               className=" text-white px-6 py-2 rounded-lg bg-teal-600 hover:bg-teal-900 transition-all"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tutordtl;


import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Star, Languages, ArrowLeft, DollarSign } from "lucide-react";
import { Authcontext } from "../Auth/Authcontext";

const Tutordtl = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Authcontext);

  const handleBook = async () => {
    if (!user?.email) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please log in to book a tutor!",
      });
      return;
    }

    const bookingData = {
      tutorId: id,
      tutorName: tutor.name,
      tutorImage: tutor.image,
      language: tutor.language,
      price: tutor.price,
      tutorEmail: tutor.email || "",
      bookingTime: new Date().toISOString(),
      courseId: tutor._id,
    };

    try {
      const token = await user.getIdToken();
      const response = await fetch("https://tutor-s.vercel.app/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Booking Successful!",
          text: `${tutor.name} has been booked.`,
          confirmButtonText: "Go to Booked Page",
        }).then(() => navigate("/booked"));
      } else {
        Swal.fire({
          icon: "error",
          title: "Booking Failed",
          text: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Booking error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. Please try again later.",
      });
    }
  };

  useEffect(() => {
    fetch(`https://tutor-s.vercel.app/tutors`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((t) => t._id === id);
        setTutor(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tutor:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-teal-600">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mb-4"></div>
        <p className="text-lg font-medium">Loading tutor details...</p>
      </div>
    );
  }

  if (!tutor) {
    return (
      <div className="text-center text-gray-500 py-10">
        <p>Tutor not found.</p>
      </div>
    );
  }

  const { name, image, language, review, description, price } = tutor;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-8 p-6 border border-gray-200 dark:border-gray-700">
        
        {/* Tutor Image */}
        <div className="relative overflow-hidden rounded-2xl group">
          <img
            src={image}
            alt={name}
            className="w-full h-full max-h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Rating badge */}
          <div className="absolute top-4 right-4 bg-teal-500/90 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium shadow-md">
            <Star size={16} className="fill-white" />
            {review || "No reviews"}
          </div>
        </div>

        {/* Tutor Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              {name}
            </h2>

            {/* Language */}
            <p className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium mb-3">
              <Languages size={18} />
              {language} Tutor
            </p>

            {/* Price */}
            {price !== undefined && (
              <p className="flex items-center gap-2 text-gray-800 dark:text-gray-200 mb-4">
                <DollarSign size={18} className="text-green-500" />
                {Number(price).toLocaleString()} USD
              </p>
            )}

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-xl transition-all"
            >
              <ArrowLeft size={18} /> Go Back
            </button>
            <button
              onClick={handleBook}
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-2 rounded-xl transition-all shadow-md"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutordtl;
