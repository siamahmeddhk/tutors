// import React, { useContext, useEffect, useState } from 'react';
// import { Authcontext } from '../Auth/Authcontext';
// import Swal from 'sweetalert2';

// const Booked = () => {
//   const { user } = useContext(Authcontext);
//   const [booked, setBooked] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       if (!user?.email) return setLoading(false);

//       try {
//         const token = await user.getIdToken(); // ✅ Get Firebase ID token

//         const res = await fetch(`https://tutor-s.vercel.app/booking/${user.email}`, {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`, // ✅ Secure header
//           },
//         });

//         if (!res.ok) throw new Error('Failed to fetch bookings');

//         const data = await res.json();
//         setBooked(data);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'Failed to load bookings.',
//         });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, [user]);

//   const handleRemove = async (id) => {
//     const confirm = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'This booking will be permanently removed!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#d33',
//       cancelButtonColor: '#3085d6',
//       confirmButtonText: 'Yes, delete it!',
//     });

//     if (!confirm.isConfirmed) return;

//     try {
//       const token = await user.getIdToken();

//       const res = await fetch(`https://tutor-s.vercel.app/booking/${id}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`, // ✅ Secure header
//         },
//       });

//       if (!res.ok) throw new Error('Delete failed');

//       setBooked((prev) => prev.filter((item) => item._id !== id));
//       Swal.fire('Deleted!', 'Your booking has been removed.', 'success');
//     } catch (error) {
//       console.error('Delete error:', error);
//       Swal.fire('Error', 'Something went wrong.', 'error');
//     }
//   };

//   const handleReview = async (courseId) => {
//     if (!courseId) {
//       return Swal.fire('Error', 'Tutor ID is missing in booking.', 'error');
//     }

//     try {
//       const token = await user.getIdToken();

//       const res = await fetch(`https://tutor-s.vercel.app/tutors/review/${courseId}`, {
//         method: 'PATCH',
//         headers: {
//           Authorization: `Bearer ${token}`, // Optional, secure if needed
//         },
//       });

//       if (!res.ok) throw new Error('Review update failed');

//       Swal.fire('Thank you!', 'Your review has been submitted.', 'success');
//     } catch (error) {
//       console.error('Review error:', error);
//       Swal.fire('Error', 'Failed to submit review.', 'error');
//     }
//   };

//   // ⭐ Beautiful Loading Spinner
//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center py-20 text-blue-600 min-h-screen">
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
//         <p className="text-lg font-medium">Loading bookings...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       <h2 className="text-2xl font-bold mb-6 text-center">My Booked Tutors</h2>

//       {booked.length === 0 ? (
//         <p className="text-center text-gray-600">You haven’t booked any tutor yet.</p>
//       ) : (
//         <div className="grid md:grid-cols-2 gap-6">
//           {booked.map((item) => (
//             <div key={item._id} className="bg-gray-100 shadow-teal-500 rounded-lg shadow-2xl text-black p-5">
//               <img
//                 src={item.tutorImage}
//                 alt={item.tutorName}
//                 className="w-full text-black h-48 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold text-black">{item.tutorName}</h3>
//               <p className="text-black">Language: {item.language}</p>
//               <p className="text-black">Price: {item.price}</p>
//               <p className="text-sm text-gray-black">
//                 Booked on: {item.bookingTime ? new Date(item.bookingTime).toLocaleString() : 'N/A'}
//               </p>

//               <div className="mt-4 flex gap-2">
//                 <button
//                   onClick={() => handleRemove(item._id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
//                 >
//                   Remove Booking
//                 </button>

//                 <button
//                   onClick={() => handleReview(item.courseId)}
//                   className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-all"
//                 >
//                   Review
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Booked;

import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Authcontext } from "../Auth/Authcontext";
import { Star, Languages, DollarSign, Calendar, Trash2, MessageSquare } from "lucide-react";

const Booked = () => {
  const { user } = useContext(Authcontext);
  const [booked, setBooked] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchBookings = async () => {
      if (!user?.email) {
        setLoading(false);
        return;
      }

      try {
        const token = await user.getIdToken();
        const res = await fetch(
          `https://tutor-s.vercel.app/booking/${user.email}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (!res.ok) throw new Error("Failed to fetch bookings");

        const data = await res.json();
        if (isMounted) setBooked(data || []);
      } catch (err) {
        console.error(err);
        if (isMounted) setError("Failed to load bookings.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchBookings();
    return () => {
      isMounted = false;
    };
  }, [user]);

  const handleRemove = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This booking will be permanently removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirm.isConfirmed) return;

    try {
      const token = await user.getIdToken();
      const res = await fetch(`https://tutor-s.vercel.app/booking/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Delete failed");

      setBooked((prev) => prev.filter((item) => item._id !== id));
      Swal.fire("Deleted!", "Your booking has been removed.", "success");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong.", "error");
    }
  };

  const handleReview = async (courseId) => {
    if (!courseId) {
      return Swal.fire("Error", "Tutor ID is missing in booking.", "error");
    }

    try {
      const token = await user.getIdToken();
      const res = await fetch(
        `https://tutor-s.vercel.app/tutors/review/${courseId}`,
        {
          method: "PATCH",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!res.ok) throw new Error("Review update failed");

      Swal.fire("Thank you!", "Your review has been submitted.", "success");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to submit review.", "error");
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-teal-600 min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
        <p className="mt-4 text-lg font-medium">Loading bookings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-500">
        <p className="text-xl">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-8 text-center">
        My Booked Tutors
      </h2>

      {booked.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="mb-4 text-lg">You haven’t booked any tutor yet.</p>
          <a
            href="/"
            className="inline-block px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
          >
            Browse Tutors
          </a>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {booked.map((item) => (
            <div
              key={item?._id || Math.random()}
              className="group bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-5 h-52 w-full">
                <img
                  src={item?.tutorImage || "/placeholder.jpg"}
                  alt={item?.tutorName || "Tutor"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Price badge */}
                {/* <div className="absolute top-3 right-3 bg-teal-500/90 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium">
                  <DollarSign size={16} />
                  {typeof item?.price === "number"
                    ? item.price.toLocaleString()
                    : "N/A"}
                </div> */}
              </div>

              <div className="flex-grow">
                {/* Tutor name */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                  <Star size={20} className="text-teal-500" />
                  {item?.tutorName || "Unknown Tutor"}
                </h3>

                {/* Language */}
                <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-sm font-medium mb-3">
                  <Languages size={16} />
                  {item?.language || "N/A"} Tutor
                </div>

                {/* Booking date */}
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-5">
                  <Calendar size={16} />
                  {item?.bookingTime
                    ? new Date(item.bookingTime).toLocaleString()
                    : "N/A"}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-auto flex gap-3">
                <button
                  onClick={() => handleRemove(item._id)}
                  className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition-all"
                >
                  <Trash2 size={16} /> Remove
                </button>
                <button
                  onClick={() => handleReview(item.courseId)}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-4 py-2 rounded-xl transition-all"
                >
                  <MessageSquare size={16} /> Review
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Booked;
