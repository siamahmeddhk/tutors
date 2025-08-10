


import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { Authcontext } from '../Auth/Authcontext';
import Swal from 'sweetalert2';

const Login = () => {
  const { signin, googleSignin } = useContext(Authcontext);
  const navigate = useNavigate();

  const handellogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());

    signin(email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user);
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome back!',
          timer: 1500,
          showConfirmButton: false
        });
        navigate('/');
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message || 'Invalid credentials. Please try again.'
        });
      });
  };

  const handleGoogle = () => {
    googleSignin()
      .then((result) => {
        console.log("Google login user:", result.user);
        Swal.fire({
          icon: 'success',
          title: 'Google Login Successful',
          text: `Welcome ${result.user.displayName || ''}!`,
          timer: 1500,
          showConfirmButton: false
        });
        navigate('/');
      })
      .catch((error) => {
        console.error("Google login error:", error.message);
        Swal.fire({
          icon: 'error',
          title: 'Google Login Failed',
          text: error.message || 'Something went wrong. Please try again.'
        });
      });
  };

  return (
    <div className="max-w-sm mt-12 mx-auto mb-12 shadow-2xl shadow-teal-500">
      <div className="card bg-gray-100 shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
        <div className="card-body p-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Login</h2>
          <form onSubmit={handellogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
            <button type="submit" className="btn btn-success w-full rounded-full text-white">
              Login
            </button>
          </form>

          <div className="divider text-xs text-gray-500">or</div>

          <button onClick={handleGoogle} className="btn w-full border border-gray-300 rounded-full text-sm">
            Continue with Google
          </button>

          <p className="text-sm text-blue-500 text-center mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-700 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
