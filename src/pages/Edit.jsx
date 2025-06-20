// import React from 'react';

// const Edit = () => {
//     return (
//         <div>
//             <div className="max-w-2xl mx-auto my-10 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl border border-gray-700">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
//           Add New Tutorial
//         </h2>
//         <p className="text-gray-400 mt-2">Share your knowledge with the community</p>
//       </div>
      
//       <form className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">User Name</label>
//             <input 
//               type="text" 
           
//               disabled 
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
//             <input 
//               type="email" 
           
//               disabled 
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-300 mb-1">Image URL</label>
//           <input
//             type="text"
//             name="image"
         
//             required
//             className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             placeholder="https://example.com/image.jpg"
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">Language</label>
//             <input
//               type="text"
//               name="language"
           
//               required
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="e.g. JavaScript"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">Price ($)</label>
//             <input
//               type="number"
//               name="price"
             
//               required
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="0.00"
//               min="0"
//               step="0.01"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
//           <textarea
//             name="description"
          
//             required
//             rows="5"
//             className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             placeholder="Write a detailed tutorial description..."
//           />
//         </div>

//         <button 
//           type="submit" 
//           className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
//         >
//           Submit Tutorial
//         </button>
//       </form>
//     </div>
//         </div>
//     );
// };

// export default Edit;



// import React, { useEffect, useState, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router';
// import { Authcontext } from '../Auth/Authcontext';
// import Swal from 'sweetalert2';

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

//   useEffect(() => {
//     fetch(`https://tutor-s.vercel.app/tutors`)
//       .then(res => res.json())
//       .then(data => {
//         const found = data.find(tutor => tutor._id === id);
//         if (found) {
//           setFormData({
//             image: found.image || '',
//             language: found.language || '',
//             price: found.price || '',
//             description: found.description || '',
//           });
//         }
//       });
//   }, [id]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     fetch(`https://tutor-s.vercel.app/tutors/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         ...formData,
//         email: user?.email,
//       }),
//     })
//       .then(res => res.json())
//       .then(() => {
//         Swal.fire('Updated!', 'Tutor updated successfully', 'success');
//         navigate('/my-added');
//       })
//       .catch(() => {
//         Swal.fire('Error!', 'Failed to update tutor', 'error');
//       });
//   };

//   return (
//     <div className="max-w-2xl mx-auto my-10 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl border border-gray-700">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
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
//               value={user?.displayName}
//               disabled
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
//             <input
//               type="email"
//               value={user?.email}
//               disabled
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-300 mb-1">Image URL</label>
//           <input
//             type="text"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
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
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
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
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
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
//             className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
//             placeholder="Write a detailed tutorial description..."
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-md"
//         >
//           Update Tutorial
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Edit;




import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Authcontext } from '../Auth/Authcontext';
import Swal from 'sweetalert2';
import { getAuth } from 'firebase/auth';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(Authcontext);

  const [formData, setFormData] = useState({
    image: '',
    language: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    fetch(`https://tutor-s.vercel.app/tutors`)
      .then(res => res.json())
      .then(data => {
        const found = data.find(tutor => tutor._id === id);
        if (found) {
          setFormData({
            image: found.image || '',
            language: found.language || '',
            price: found.price || '',
            description: found.description || '',
          });
        }
      });
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      if (!currentUser) {
        Swal.fire('Error', 'User not logged in', 'error');
        return;
      }
      const idToken = await currentUser.getIdToken(true);

      const res = await fetch(`https://tutor-s.vercel.app/tutors/${id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}` // Send token here
        },
        body: JSON.stringify({
          ...formData,
          email: user?.email,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        Swal.fire('Error', errorData.error || 'Failed to update tutor', 'error');
        return;
      }

      Swal.fire('Updated!', 'Tutor updated successfully', 'success');
      navigate('/my-added');
    } catch (error) {
      console.error(error);
      Swal.fire('Error!', 'Failed to update tutor', 'error');
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl border border-gray-700">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
          Update Tutorial
        </h2>
        <p className="text-gray-400 mt-2">Modify your tutorial details</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">User Name</label>
            <input
              type="text"
              value={user?.displayName || ''}
              disabled
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={user?.email || ''}
              disabled
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Language</label>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
              placeholder="e.g. JavaScript"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
              placeholder="0.00"
              min="0"
              step="0.01"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
            placeholder="Write a detailed tutorial description..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-md"
        >
          Update Tutorial
        </button>
      </form>
    </div>
  );
};

export default Edit;
