// import React, { useContext, useEffect, useState } from 'react';
// import { Authcontext } from '../Auth/Authcontext';
// import Swal from 'sweetalert2';
// import { Link } from 'react-router';

// const Myadd = () => {
//   const { user } = useContext(Authcontext);
//   const [loading, setLoading] = useState(true);
//   const [tutors, setTutors] = useState([]);

//   useEffect(() => {
//     if (user?.email) {
//       fetch(`https://tutor-s.vercel.app/myadded/${user.email}`)
//         .then(res => res.json())
//         .then(data => {
//           setTutors(data);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching tutors:', error);
//           setLoading(false);
//         });
//     }
//   }, [user]);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#6366f1',
//       cancelButtonColor: '#ef4444',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`https://tutor-s.vercel.app/tutors/${id}`, {
//           method: 'DELETE'
//         })
//         .then(res => res.json())
//         .then(() => {
//           setTutors(tutors.filter(tutor => tutor._id !== id));
//           Swal.fire(
//             'Deleted!',
//             'Your tutor has been deleted.',
//             'success'
//           );
//         })
//         .catch(error => {
//           console.error('Error deleting tutor:', error);
//           Swal.fire(
//             'Error!',
//             'Failed to delete tutor.',
//             'error'
//           );
//         });
//       }
//     });
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
//           My Added Tutors
//         </h2>
//         {tutors.length > 0 && (
//           <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded">
//             Total: {tutors.length}
//           </span>
//         )}
//       </div>

//       {tutors.length === 0 ? (
//         <div className="text-center py-12">
//           <div className="mx-auto w-24 h-24 text-gray-400 mb-4">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//             </svg>
//           </div>
//           <h3 className="text-lg font-medium text-gray-600">No tutors added yet</h3>
//           <p className="text-gray-500 mt-1">Start by adding your first tutor</p>
//           <Link to="/add" className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
//             Add Tutor
//           </Link>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {tutors.map((tutor) => (
//             <div key={tutor._id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
//               <div className="h-48 overflow-hidden">
//                 <img 
//                   src={tutor.image || 'https://via.placeholder.com/400x300?text=Tutor+Image'} 
//                   alt={tutor.language} 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-5">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-xl font-bold text-gray-800">{tutor.language || 'No language specified'}</h3>
//                   <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                     ${tutor.price || '0'}
//                   </span>
//                 </div>
                
//                 <p className="text-gray-600 mb-4 line-clamp-3">{tutor.description || 'No description provided'}</p>
                
//                 <div className="flex items-center text-sm text-gray-500 mb-4">
//                   <span className="flex items-center mr-3">
//                     <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                     {tutor.review || '0'} reviews
//                   </span>
//                   <span className="flex items-center">
//                     <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                       <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                     </svg>
//                     {tutor.email}
//                   </span>
//                 </div>

//                 <div className="flex space-x-2">
//                   <Link 
//                     to={`/edit/${tutor._id}`}
//                     className="flex-1 text-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     onClick={() => handleDelete(tutor._id)}
//                     className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Myadd;




import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Auth/Authcontext';
import Swal from 'sweetalert2';
import { Link } from 'react-router'; // use react-router-dom not 'react-router'
import { getAuth } from 'firebase/auth';

const Myadd = () => {
  const { user } = useContext(Authcontext);
  const [loading, setLoading] = useState(true);
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchMyTutors = async () => {
      if (!user?.email) {
        setLoading(false);
        return;
      }

      try {
        const auth = getAuth();
        const currentUser = auth.currentUser;
        if (!currentUser) {
          console.error('No Firebase user logged in');
          setLoading(false);
          return;
        }

        const idToken = await currentUser.getIdToken(true);

        const res = await fetch(`https://tutor-s.vercel.app/myadded/${user.email}`, {
          headers: {
            'Authorization': `Bearer ${idToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          const errorData = await res.json();
          console.error('Error response from backend:', errorData);
          Swal.fire('Error', errorData.error || 'Failed to fetch tutors', 'error');
          setTutors([]);
          setLoading(false);
          return;
        }

        const data = await res.json();

        if (Array.isArray(data)) {
          setTutors(data);
        } else {
          console.error('Expected array but got:', data);
          setTutors([]);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        Swal.fire('Error', 'Failed to fetch tutors', 'error');
        setTutors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMyTutors();
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6366f1',
      cancelButtonColor: '#ef4444',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tutor-s.vercel.app/tutors/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then(() => {
            setTutors((prev) => prev.filter((tutor) => tutor._id !== id));
            Swal.fire('Deleted!', 'Your tutor has been deleted.', 'success');
          })
          .catch((error) => {
            console.error('Error deleting tutor:', error);
            Swal.fire('Error!', 'Failed to delete tutor.', 'error');
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          My Added Tutors
        </h2>
        {tutors.length > 0 && (
          <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded">
            Total: {tutors.length}
          </span>
        )}
      </div>

      {(!Array.isArray(tutors) || tutors.length === 0) ? (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 text-gray-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-600">No tutors added yet</h3>
          <p className="text-gray-500 mt-1">Start by adding your first tutor</p>
          <Link
            to="/add"
            className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Add Tutor
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <div
              key={tutor._id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={tutor.image || 'https://via.placeholder.com/400x300?text=Tutor+Image'}
                  alt={tutor.language}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {tutor.language || 'No language specified'}
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    ${tutor.price || '0'}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {tutor.description || 'No description provided'}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center mr-3">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {tutor.review || '0'} reviews
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {tutor.email}
                  </span>
                </div>

                <div className="flex space-x-2">
                  <Link
                    to={`/edit/${tutor._id}`}
                    className="flex-1 text-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(tutor._id)}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Myadd;
