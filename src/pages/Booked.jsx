import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Auth/Authcontext';
import Swal from 'sweetalert2';

const Booked = () => {
  const { user } = useContext(Authcontext);
  const [booked, setBooked] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user?.email) return setLoading(false);

      try {
        const token = await user.getIdToken(); // ✅ Get Firebase ID token

        const res = await fetch(`https://tutor-s.vercel.app/booking/${user.email}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Secure header
          },
        });

        if (!res.ok) throw new Error('Failed to fetch bookings');

        const data = await res.json();
        setBooked(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to load bookings.',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user]);

  const handleRemove = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'This booking will be permanently removed!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (!confirm.isConfirmed) return;

    try {
      const token = await user.getIdToken();

      const res = await fetch(`https://tutor-s.vercel.app/booking/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Secure header
        },
      });

      if (!res.ok) throw new Error('Delete failed');

      setBooked((prev) => prev.filter((item) => item._id !== id));
      Swal.fire('Deleted!', 'Your booking has been removed.', 'success');
    } catch (error) {
      console.error('Delete error:', error);
      Swal.fire('Error', 'Something went wrong.', 'error');
    }
  };

  const handleReview = async (courseId) => {
    if (!courseId) {
      return Swal.fire('Error', 'Tutor ID is missing in booking.', 'error');
    }

    try {
      const token = await user.getIdToken();

      const res = await fetch(`https://tutor-s.vercel.app/tutors/review/${courseId}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`, // Optional, secure if needed
        },
      });

      if (!res.ok) throw new Error('Review update failed');

      Swal.fire('Thank you!', 'Your review has been submitted.', 'success');
    } catch (error) {
      console.error('Review error:', error);
      Swal.fire('Error', 'Failed to submit review.', 'error');
    }
  };

  // ⭐ Beautiful Loading Spinner
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-blue-600 min-h-screen">
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
        <p className="text-lg font-medium">Loading bookings...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">My Booked Tutors</h2>

      {booked.length === 0 ? (
        <p className="text-center text-gray-600">You haven’t booked any tutor yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {booked.map((item) => (
            <div key={item._id} className="bg-teal-500 rounded-lg shadow p-5">
              <img
                src={item.tutorImage}
                alt={item.tutorName}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.tutorName}</h3>
              <p className="text-black">Language: {item.language}</p>
              <p className="text-black">Price: {item.price}</p>
              <p className="text-sm text-gray-black">
                Booked on: {item.bookingTime ? new Date(item.bookingTime).toLocaleString() : 'N/A'}
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleRemove(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
                >
                  Remove Booking
                </button>

                <button
                  onClick={() => handleReview(item.courseId)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-all"
                >
                  Review
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


