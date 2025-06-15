import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Auth/Authcontext';
import Swal from 'sweetalert2';

const Booked = () => {
  const { user } = useContext(Authcontext);
  const [booked, setBooked] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    console.log("Fetching bookings for:", user.email);

    fetch(`http://localhost:3000/booking/${user.email}`)
      .then((res) => {
        if (!res.ok) {
          console.error("Server responded with status:", res.status);
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then((data) => {
        setBooked(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to load bookings.',
        });
      });
  }, [user?.email]);

  const handleRemove = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This booking will be permanently removed!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/booking/${id}`, {
          method: 'DELETE',
        })
          .then((res) => {
            if (!res.ok) throw new Error('Delete failed');
            return res.json();
          })
          .then(() => {
            setBooked((prev) => prev.filter((item) => item._id !== id));
            Swal.fire('Deleted!', 'Your booking has been removed.', 'success');
          })
          .catch((error) => {
            console.error('Delete error:', error);
            Swal.fire('Error', 'Something went wrong.', 'error');
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="text-gray-500">Loading bookings...</span>
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
            <div key={item._id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-5">
              <img
                src={item.tutorImage}
                alt={item.tutorName}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.tutorName}</h3>
              <p className="text-gray-600 dark:text-gray-300">Price: ${item.price}</p>
              <p className="text-sm text-gray-500 mt-2 dark:text-gray-400">
                Booked on: {item.bookingTime ? new Date(item.bookingTime).toLocaleString() : 'N/A'}
              </p>
              <button
                onClick={() => handleRemove(item._id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
              >
                Remove Booking
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Booked;
