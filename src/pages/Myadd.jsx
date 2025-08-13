// import React, { useContext, useEffect, useState } from 'react';
// import { Authcontext } from '../Auth/Authcontext';
// import Swal from 'sweetalert2';
// import { Link } from 'react-router';
// import { getAuth } from 'firebase/auth';

// const Myadd = () => {
//   const { user } = useContext(Authcontext);
//   const [loading, setLoading] = useState(true);
//   const [tutors, setTutors] = useState([]);

//   useEffect(() => {
//     const fetchMyTutors = async () => {
//       if (!user?.email) return setLoading(false);
//       try {
//         const auth = getAuth();
//         const currentUser = auth.currentUser;
//         if (!currentUser) return setLoading(false);
//         const token = await currentUser.getIdToken(true);
//         const res = await fetch(`https://tutor-s.vercel.app/myadded/${user.email}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await res.json();
//         if (Array.isArray(data)) setTutors(data);
//         else setTutors([]);
//       } catch (err) {
//         console.error(err);
//         Swal.fire('Error', 'Failed to fetch tutors.', 'error');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMyTutors();
//   }, [user]);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: 'Delete this tutorial?',
//       text: 'This action cannot be undone!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#e11d48',
//       cancelButtonColor: '#6b7280',
//       confirmButtonText: 'Yes, delete it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`https://tutor-s.vercel.app/tutors/${id}`, {
//           method: 'DELETE',
//         })
//           .then((res) => res.json())
//           .then(() => {
//             setTutors((prev) => prev.filter((t) => t._id !== id));
//             Swal.fire('Deleted!', 'Your tutorial has been deleted.', 'success');
//           })
//           .catch(() =>
//             Swal.fire('Error', 'Failed to delete the tutorial.', 'error')
//           );
//       }
//     });
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-[60vh]">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold text-center mb-8 text-gray-500 dark:text-white">
//         My Tutorials
//       </h2>

//       {tutors.length === 0 ? (
//         <div className="text-center text-gray-600 mt-16">
//           <p className="mb-4 text-xl">You haven't added any tutorials yet.</p>
//           <Link
//             to="/add"
//             className="inline-block px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//           >
//             Add Your First Tutorial
//           </Link>
//         </div>
//       ) : (
//         <div className="overflow-x-auto rounded-lg shadow">
//           <table className="min-w-full divide-y divide-gray-200 bg-white">
//             <thead className="bg-teal-500 text-black">
//               <tr>
//                 <th className="px-4 py-3 text-left text-sm font-semibold">Image</th>
//                 <th className="px-4 py-3 text-left text-sm font-semibold">Language</th>
//                 <th className="px-4 py-3 text-left text-sm font-semibold">Price</th>
//                 <th className="px-4 py-3 text-left text-sm font-semibold">Description</th>
//                 <th className="px-4 py-3 text-left text-sm font-semibold">Review</th>
//                 <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100 text-gray-700">
//               {tutors.map((tutor) => (
//                 <tr key={tutor._id} className="hover:bg-teal-100 bg-gray-100">
//                   <td className="px-4 py-3">
//                     <img
//                       src={tutor.image || 'https://via.placeholder.com/80'}
//                       alt={tutor.language}
//                       className="w-16 h-16 object-cover rounded shadow border"
//                     />
//                   </td>
//                   <td className="px-4 py-3 font-medium">{tutor.language}</td>
//                   <td className="px-4 py-3 font-semibold text-green-600">
//                     ${tutor.price}
//                   </td>
//                   <td className="px-4 py-3 max-w-xs truncate">{tutor.description}</td>
//                   <td className="px-4 py-3">{tutor.review || 0}</td>
//                   <td className="px-4 py-3 space-x-2">
//                     <Link
//                       to={`/edit/${tutor._id}`}
//                       className="inline-block px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
//                     >
//                       Update
//                     </Link>
//                     <button
//                       onClick={() => handleDelete(tutor._id)}
//                       className="inline-block px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Myadd;









import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Auth/Authcontext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { getAuth } from 'firebase/auth';
import { Loader2, Edit, Trash2, Plus } from 'lucide-react';

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
        <Loader2 className="w-12 h-12 animate-spin text-teal-500" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        Find a Tutor by Language
      </h1>

      {tutors.length === 0 ? (
        <div className="text-center mt-16 bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
            You haven't added any tutorials yet.
          </p>
          <Link
            to="/add"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium rounded-xl shadow-md transition-all duration-300"
          >
            <Plus size={18} /> Add Your First Tutorial
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <table className="min-w-full text-sm">
            <thead className="bg-teal-500/90 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Image</th>
                <th className="px-4 py-3 text-left font-semibold">Language</th>
                <th className="px-4 py-3 text-left font-semibold">Price</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-left font-semibold">Review</th>
                <th className="px-4 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {tutors.map((tutor) => (
                <tr
                  key={tutor._id}
                  className="hover:bg-teal-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="px-4 py-3">
                    <img
                      src={tutor.image || 'https://via.placeholder.com/80'}
                      alt={tutor.language}
                      className="w-16 h-16 object-cover rounded-lg shadow border border-gray-200 dark:border-gray-600"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-200">
                    {tutor.language}
                  </td>
                  <td className="px-4 py-3 font-semibold text-teal-600 dark:text-teal-400">
                    ${tutor.price}
                  </td>
                  <td className="px-4 py-3 max-w-xs truncate text-gray-700 dark:text-gray-300">
                    {tutor.description}
                  </td>
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-200">
                    {tutor.review || 0}
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <Link
                      to={`/edit/${tutor._id}`}
                      className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg shadow transition-all"
                    >
                      <Edit size={14} /> Update
                    </Link>
                    <button
                      onClick={() => handleDelete(tutor._id)}
                      className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white rounded-lg shadow transition-all"
                    >
                      <Trash2 size={14} /> Delete
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
