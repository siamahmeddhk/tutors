import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { Authcontext } from '../Auth/Authcontext';

const Add = () => {
  const { user } = useContext(Authcontext);
  const [formData, setFormData] = useState({
    image: '',
    language: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tutorialData = {
      name: user?.displayName || 'Anonymous',
      email: user?.email || 'unknown@example.com',
      image: formData.image,
      language: formData.language,
      price: parseFloat(formData.price),
      description: formData.description,
      review: 0
    };

    try {
      console.log('📤 Sending tutorial data:', JSON.stringify(tutorialData, null, 2));

      const res = await fetch('https://tutor-s.vercel.app/tutors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tutorialData)
      });

      const result = await res.json();
      if (res.ok && result.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Tutorial added successfully!',
          icon: 'success',
          background: '#1f2937',
          color: '#f3f4f6',
          confirmButtonColor: '#6366f1'
        });
        setFormData({ image: '', language: '', price: '', description: '' });
      } else {
        throw new Error(result.error || 'Failed to add tutorial');
      }
    } catch (error) {
      console.error('❌ Error submitting tutorial:', error.message, error.stack);
      Swal.fire({
        title: 'Error!',
        text: error.message || 'Failed to add tutorial. Please try again.',
        icon: 'error',
        background: '#1f2937',
        color: '#f3f4f6',
        confirmButtonColor: '#6366f1'
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl border border-gray-700">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
          Add New Tutorial
        </h2>
        <p className="text-gray-400 mt-2">Share your knowledge with the community</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
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
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
            placeholder="https://example.com/image.jpg"
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
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
              placeholder="e.g. English"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
              placeholder="0.00"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
            placeholder="Write a detailed tutorial description..."
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-700 transition"
        >
          Submit Tutorial
        </button>
      </form>
    </div>
  );
};

export default Add;