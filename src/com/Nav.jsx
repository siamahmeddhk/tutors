import React, { useContext, useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Link, NavLink, useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { Authcontext } from '../Auth/Authcontext';

export default function Nav() {
  const { user } = useContext(Authcontext);
  const [showLogout, setShowLogout] = useState(false);
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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
    await signOut(auth);
    setShowLogout(false);
    navigate('/signup');
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
      ? 'text-blue-600 font-semibold underline underline-offset-4'
      : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 transition duration-200';

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo & mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6 text-blue-600 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>

          <Link to="/" className="text-2xl font-extrabold flex items-center gap-1 text-blue-600 dark:text-white">
            📚
         
            TutorsTalk
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6 items-center">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/find-tutor" className={navLinkClass}>Find Tutors</NavLink>
          <NavLink to="/add" className={navLinkClass}>Add Tutorials</NavLink>
          <button onClick={() => handleProtectedClick('/my-added')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition">My Tutorials</button>
          <button onClick={() => handleProtectedClick('/booked')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition">Booked Tutors</button>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-blue-600 dark:text-yellow-400 hover:text-blue-700 transition"
            title="Toggle theme"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          {/* Auth buttons */}
          {!user ? (
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-medium transition"
            >
              Login / Signup
            </Link>
          ) : (
            <div className="relative">
              <img
                src={user.photoURL || 'https://i.ibb.co/tLkDzqP/user.png'}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-blue-600 cursor-pointer"
                onClick={() => setShowLogout(!showLogout)}
                title={user.displayName}
              />
              {showLogout && (
                <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-md border dark:border-gray-600 rounded-md p-3 w-48 z-50">
                  <p className="text-sm text-gray-700 dark:text-white text-center truncate mb-2">{user.displayName}</p>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 hover:bg-red-600 text-white text-sm py-1 rounded flex items-center justify-center gap-2"
                  >
                    <FiLogOut /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 shadow-md px-6 py-4 space-y-3 flex flex-col">
          <NavLink to="/" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/find-tutor" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>Find Tutors</NavLink>
          <NavLink to="/add" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>Add Tutorials</NavLink>
          <button onClick={() => handleProtectedClick('/my-added')} className="text-left text-gray-700 dark:text-white hover:text-blue-600">My Tutorials</button>
          <button onClick={() => handleProtectedClick('/booked')} className="text-left text-gray-700 dark:text-white hover:text-blue-600">Booked Tutors</button>
          {!user && (
            <Link
              to="/signup"
              className="block bg-blue-600 text-white text-center py-2 rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login / Signup
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
