import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { Authcontext } from '../Auth/Authcontext';
import { User, Languages, DollarSign, Image, FileText } from 'lucide-react';

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
      const res = await fetch('https://tutor-s.vercel.app/tutors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
          confirmButtonColor: '#14b8a6'
        });
        setFormData({ image: '', language: '', price: '', description: '' });
      } else {
        throw new Error(result.error || 'Failed to add tutorial');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message || 'Failed to add tutorial. Please try again.',
        icon: 'error',
        background: '#1f2937',
        color: '#f3f4f6',
        confirmButtonColor: '#14b8a6'
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Add New Tutorial</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Share your expertise with learners worldwide</p>
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
          className="w-full flex items-center justify-center bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-5 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-teal-200 dark:hover:shadow-teal-900"
        >
          Submit Tutorial
        </button>
      </form>
    </div>
  );
};

export default Add;
