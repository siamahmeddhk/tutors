import React, { useContext, useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Link, NavLink, useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { Authcontext } from '../Auth/Authcontext';

export default function Nav() {
  const { user } = useContext(Authcontext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Set initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowDropdown(false);
      setMobileMenuOpen(false);
      navigate('/signup');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleProtectedClick = (path) => {
    if (!user) {
      navigate('/signup');
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-black dark:text-black font-bold'
      : 'text-white font-bold dark:text-white hover:text-white dark:hover:text-black transition duration-200';

  const closeDropdown = () => setShowDropdown(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-teal-500  dark:bg-teal-500 shadow-sm border-b dark:border-gray-700">
      <div className="max-w-7xl bg-teal-500 mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>

          <Link 
            to="/" 
            className="text-2xl font-extrabold text-blue-600 dark:text-white flex items-center gap-2 hover:text-white dark:hover:text-white transition"
          >
            📚 TutorsTalk
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex gap-8 items-center">
          <NavLink  to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/find-tutor" className={navLinkClass}>
            Find Tutors
          </NavLink>
          <button 
            onClick={() => handleProtectedClick('/add')} 
            className="text-white dark:text-white hover:text-black dark:hover:text-black transition duration-200 font-medium"
          >
            Add Tutorials
          </button>
          <button 
            onClick={() => handleProtectedClick('/my-added')} 
            className="ext-white dark:text-white hover:text-black dark:hover:text-black transition duration-200 font-medium"
          >
            My Tutorials
          </button>
          <button 
            onClick={() => handleProtectedClick('/booked')} 
            className="text-white dark:text-white hover:text-black dark:hover:text-black transition duration-200 font-medium"
          >
            My Booked Tutors
          </button>
        </nav>

        {/* Right Side - Theme Toggle & User Section */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 text-blue-600 dark:text-yellow-400 hover:text-blue-700 dark:hover:text-yellow-300 transition duration-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>

          {/* User Authentication Section */}
          {!user ? (
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-200"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center gap-2 relative">
              {/* Profile Picture Button */}
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200"
                title={user.displayName || user.email || 'User Profile'}
              >
                <img
                  src={user.photoURL || 'https://i.ibb.co/tLkDzqP/user.png'}
                  alt="User Profile"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-blue-600 dark:border-blue-400 object-cover"
                />
                <svg 
                  className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 hidden sm:block ${showDropdown ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Desktop Logout Button - Hidden on small devices */}
              <button
                onClick={handleLogout}
                className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition duration-200"
              >
                <FiLogOut size={16} />
                <span className="hidden md:inline text-white p-1 border-2 rounded-2xl">Logout</span>
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-600 rounded-lg py-2 z-50">
                  {/* User Info Section */}
                  <div className="px-4 py-3 border-b dark:border-gray-600">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.photoURL || 'https://i.ibb.co/tLkDzqP/user.png'}
                        alt="User Profile"
                        className="w-12 h-12 rounded-full border-2 border-blue-600 dark:border-blue-400 object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                          {user.displayName || 'User'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Logout Button - Only visible on small devices */}
                  <div className="px-4 py-2 sm:hidden">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium transition duration-200"
                    >
                      <FiLogOut size={16} />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 shadow-lg mobile-menu-container">
          <div className="px-4 py-4">
            {/* Navigation Links */}
            <nav className="space-y-1 mb-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400' 
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                🏠 Home
              </NavLink>
              
              <NavLink 
                to="/find-tutor" 
                className={({ isActive }) => 
                  `block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400' 
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                🔍 Find Tutors
              </NavLink>
              
              <button 
                onClick={() => handleProtectedClick('/add')} 
                className="w-full text-left px-4 py-3 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
              >
                ➕ Add Tutorials
              </button>
              
              <button 
                onClick={() => handleProtectedClick('/my-added')} 
                className="w-full text-left px-4 py-3 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
              >
                📚 My Tutorials
              </button>
              
              <button 
                onClick={() => handleProtectedClick('/booked')} 
                className="w-full text-left px-4 py-3 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
              >
                📖 My Booked Tutors
              </button>
            </nav>

            {/* User Section - Only show if user is logged in */}
            {user && (
              <>
                <div className="border-t dark:border-gray-700 my-4"></div>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                  {/* User Profile Card */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative">
                      <img
                        src={user.photoURL || 'https://i.ibb.co/tLkDzqP/user.png'}
                        alt="User Profile"
                        className="w-12 h-12 rounded-full border-2 border-blue-500 dark:border-blue-400 object-cover shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
                        {user.displayName || 'User'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {user.email}
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                        Online
                      </p>
                    </div>
                  </div>

                  {/* Mobile Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2.5 px-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    <FiLogOut size={16} />
                    Logout
                  </button>
                </div>
              </>
            )}

            {/* Login button for mobile when not authenticated */}
            {!user && (
              <>
                <div className="border-t dark:border-gray-700 my-4"></div>
                <Link
                  to="/signup"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center py-3 px-4 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🚀 Login / Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}