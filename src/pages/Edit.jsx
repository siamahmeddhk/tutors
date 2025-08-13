






// import React, { useEffect, useState, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router';
// import { Authcontext } from '../Auth/Authcontext';
// import Swal from 'sweetalert2';
// import { getAuth } from 'firebase/auth';

// const Edit = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { user } = useContext(Authcontext);

//   const [formData, setFormData] = useState({
//     image: '',
//     language: '',
//     price: '',
//     description: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [fetchingData, setFetchingData] = useState(true);

//   useEffect(() => {
//     const fetchTutorData = async () => {
//       try {
//         setFetchingData(true);
//         const response = await fetch(`https://tutor-s.vercel.app/tutors`);
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch tutors');
//         }
        
//         const data = await response.json();
//         const found = data.find(tutor => tutor._id === id);
        
//         if (found) {
//           setFormData({
//             image: found.image || '',
//             language: found.language || '',
//             price: found.price || '',
//             description: found.description || '',
//           });
//         } else {
//           Swal.fire('Error', 'Tutor not found', 'error');
//           navigate('/my-added');
//         }
//       } catch (error) {
//         console.error('Error fetching tutor data:', error);
//         Swal.fire('Error', 'Failed to load tutor data', 'error');
//       } finally {
//         setFetchingData(false);
//       }
//     };

//     if (id) {
//       fetchTutorData();
//     }
//   }, [id, navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user) {
//       Swal.fire('Error', 'You must be logged in to update tutorials', 'error');
//       return;
//     }

//     setLoading(true);

//     try {
//       const auth = getAuth();
//       const currentUser = auth.currentUser;
      
//       if (!currentUser) {
//         Swal.fire('Error', 'User not authenticated', 'error');
//         return;
//       }

//       console.log('Getting ID token...');
//       const idToken = await currentUser.getIdToken(true);
      
//       console.log('Sending update request for tutor ID:', id);
//       console.log('Form data:', formData);

//       const response = await fetch(`https://tutor-s.vercel.app/tutors/${id}`, {
//         method: 'PUT',
//         headers: { 
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${idToken}`
//         },
//         body: JSON.stringify({
//           ...formData,
//           email: user?.email,
//         }),
//       });

//       console.log('Response status:', response.status);
      
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Error response:', errorData);
        
//         if (response.status === 403) {
//           Swal.fire('Access Denied', 'You can only update your own tutorials', 'error');
//         } else if (response.status === 404) {
//           Swal.fire('Not Found', 'Tutorial not found', 'error');
//         } else {
//           Swal.fire('Error', errorData.error || errorData.message || 'Failed to update tutorial', 'error');
//         }
//         return;
//       }

//       const successData = await response.json();
//       console.log('Success response:', successData);
      
//       Swal.fire({
//         title: 'Updated!',
//         text: 'Tutorial updated successfully',
//         icon: 'success',
//         timer: 1500,
//         showConfirmButton: false
//       });
      
//       navigate('/my-added');
      
//     } catch (error) {
//       console.error('Submit error:', error);
      
//       if (error.message.includes('Failed to fetch')) {
//         Swal.fire('Network Error', 'Please check your internet connection and try again', 'error');
//       } else {
//         Swal.fire('Error', 'An unexpected error occurred. Please try again.', 'error');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (fetchingData) {
//     return (
//       <div className="max-w-2xl mx-auto my-10 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl shadow-teal-500">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-500 mx-auto"></div>
//           <p className="text-gray-400 mt-4">Loading tutorial data...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto my-10 p-8 bg-gary-100 rounded-xl   shadow-2xl shadow-teal-500 ">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl  font-bold bg-clip-text text-black bg-gradient-to-r ">
//           Update Tutorial
//         </h2>
//         <p className="text-gray-400 mt-2">Modify your tutorial details</p>
//       </div>

//       <form className="space-y-6" onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">User Name</label>
//             <input
//               type="text"
//               value={user?.displayName || ''}
//               disabled
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 opacity-60"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
//             <input
//               type="email"
//               value={user?.email || ''}
//               disabled
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 opacity-60"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-300 mb-1">Image URL</label>
//           <input
//             type="url"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
//             placeholder="https://example.com/image.jpg"
//             required
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">Language</label>
//             <input
//               type="text"
//               name="language"
//               value={formData.language}
//               onChange={handleChange}
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
//               placeholder="e.g. JavaScript"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">Price ($)</label>
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
//               placeholder="0.00"
//               min="0"
//               step="0.01"
//               required
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             rows="5"
//             className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
//             placeholder="Write a detailed tutorial description..."
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 px-4 font-medium rounded-lg shadow-md transition-all ${
//             loading
//               ? 'bg-gray-600 cursor-not-allowed'
//               : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-teal-500 hover:to-teal-700 text-white'
//           }`}
//         >
//           {loading ? (
//             <div className="flex items-center justify-center">
//               <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//               Updating...
//             </div>
//           ) : (
//             'Update Tutorial'
//           )}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Edit;























import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Authcontext } from '../Auth/Authcontext';
import Swal from 'sweetalert2';
import { getAuth } from 'firebase/auth';
import { User, Languages, DollarSign, Image, FileText } from 'lucide-react';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(Authcontext);

  const [formData, setFormData] = useState({
    image: '',
    language: '',
    price: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [fetchingData, setFetchingData] = useState(true);

  // Fetch existing tutorial
  useEffect(() => {
    const fetchTutorData = async () => {
      try {
        setFetchingData(true);
        const response = await fetch(`https://tutor-s.vercel.app/tutors`);
        if (!response.ok) throw new Error('Failed to fetch tutors');

        const data = await response.json();
        const found = data.find(tutor => tutor._id === id);

        if (found) {
          setFormData({
            image: found.image || '',
            language: found.language || '',
            price: found.price || '',
            description: found.description || ''
          });
        } else {
          Swal.fire('Error', 'Tutorial not found', 'error');
          navigate('/my-added');
        }
      } catch (error) {
        Swal.fire('Error', 'Failed to load tutorial data', 'error');
      } finally {
        setFetchingData(false);
      }
    };

    if (id) fetchTutorData();
  }, [id, navigate]);

  // Handle field changes
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      Swal.fire('Error', 'You must be logged in to update tutorials', 'error');
      return;
    }

    setLoading(true);
    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      if (!currentUser) {
        Swal.fire('Error', 'User not authenticated', 'error');
        return;
      }

      const idToken = await currentUser.getIdToken(true);

      const response = await fetch(`https://tutor-s.vercel.app/tutors/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`
        },
        body: JSON.stringify({
          ...formData,
          email: user?.email
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        Swal.fire('Error', errorData.error || 'Failed to update tutorial', 'error');
        return;
      }

      Swal.fire({
        title: 'Updated!',
        text: 'Tutorial updated successfully!',
        icon: 'success',
        background: '#1f2937',
        color: '#f3f4f6',
        confirmButtonColor: '#14b8a6',
        timer: 1500,
        showConfirmButton: false
      });

      navigate('/my-added');
    } catch (error) {
      Swal.fire('Error', 'An unexpected error occurred.', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (fetchingData) {
    return (
      <div className="max-w-2xl mx-auto my-10 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-500 mx-auto"></div>
        <p className="text-gray-500 dark:text-gray-400 mt-4">Loading tutorial data...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-10 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Edit Tutorial</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Update your tutorial details</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-1">
              <User size={16} /> User Name
            </label>
            <input
              type="text"
              value={user?.displayName || ''}
              disabled
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={user?.email || ''}
              disabled
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-200"
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-1">
            <Image size={16} /> Image URL
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-200"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Language & Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-1">
              <Languages size={16} /> Language
            </label>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-200"
              placeholder="e.g. English"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-1">
              <DollarSign size={16} /> Price ($)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-200"
              placeholder="0.00"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-1">
            <FileText size={16} /> Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-200"
            placeholder="Write a detailed tutorial description..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-5 py-3 rounded-xl transition-all duration-300 shadow-md ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-teal-200 dark:hover:shadow-teal-900'
          }`}
        >
          {loading ? 'Updating...' : 'Update Tutorial'}
        </button>
      </form>
    </div>
  );
};

export default Edit;
