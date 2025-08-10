import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Auth/Authcontext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { getAuth } from 'firebase/auth';

const Myadd = () => {
  const { user } = useContext(Authcontext);
  const [loading, setLoading] = useState(true);
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchMyTutors = async () => {
      if (!user?.email) return setLoading(false);
      try {
        const auth = getAuth();
        const currentUser = auth.currentUser;
        if (!currentUser) return setLoading(false);
        const token = await currentUser.getIdToken(true);
        const res = await fetch(`https://tutor-s.vercel.app/myadded/${user.email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (Array.isArray(data)) setTutors(data);
        else setTutors([]);
      } catch (err) {
        console.error(err);
        Swal.fire('Error', 'Failed to fetch tutors.', 'error');
      } finally {
        setLoading(false);
      }
    };
    fetchMyTutors();
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Delete this tutorial?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e11d48',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tutor-s.vercel.app/tutors/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then(() => {
            setTutors((prev) => prev.filter((t) => t._id !== id));
            Swal.fire('Deleted!', 'Your tutorial has been deleted.', 'success');
          })
          .catch(() =>
            Swal.fire('Error', 'Failed to delete the tutorial.', 'error')
          );
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-500 dark:text-white">
        My Tutorials
      </h2>

      {tutors.length === 0 ? (
        <div className="text-center text-gray-600 mt-16">
          <p className="mb-4 text-xl">You haven't added any tutorials yet.</p>
          <Link
            to="/add"
            className="inline-block px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Add Your First Tutorial
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-teal-500 text-black">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Image</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Language</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Price</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Description</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Review</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {tutors.map((tutor) => (
                <tr key={tutor._id} className="hover:bg-teal-100 bg-gray-100">
                  <td className="px-4 py-3">
                    <img
                      src={tutor.image || 'https://via.placeholder.com/80'}
                      alt={tutor.language}
                      className="w-16 h-16 object-cover rounded shadow border"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium">{tutor.language}</td>
                  <td className="px-4 py-3 font-semibold text-green-600">
                    ${tutor.price}
                  </td>
                  <td className="px-4 py-3 max-w-xs truncate">{tutor.description}</td>
                  <td className="px-4 py-3">{tutor.review || 0}</td>
                  <td className="px-4 py-3 space-x-2">
                    <Link
                      to={`/edit/${tutor._id}`}
                      className="inline-block px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(tutor._id)}
                      className="inline-block px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Myadd;
