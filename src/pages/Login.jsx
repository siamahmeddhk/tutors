


// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router';
// import { Authcontext } from '../Auth/Authcontext';
// import Swal from 'sweetalert2';

// const Login = () => {
//   const { signin, googleSignin } = useContext(Authcontext);
//   const navigate = useNavigate();

//   const handellogin = (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const formData = new FormData(form);
//     const { email, password } = Object.fromEntries(formData.entries());

//     signin(email, password)
//       .then((userCredential) => {
//         console.log("User logged in:", userCredential.user);
//         Swal.fire({
//           icon: 'success',
//           title: 'Login Successful',
//           text: 'Welcome back!',
//           timer: 1500,
//           showConfirmButton: false
//         });
//         navigate('/');
//       })
//       .catch((error) => {
//         console.error("Login error:", error.message);
//         Swal.fire({
//           icon: 'error',
//           title: 'Login Failed',
//           text: error.message || 'Invalid credentials. Please try again.'
//         });
//       });
//   };

//   const handleGoogle = () => {
//     googleSignin()
//       .then((result) => {
//         console.log("Google login user:", result.user);
//         Swal.fire({
//           icon: 'success',
//           title: 'Google Login Successful',
//           text: `Welcome ${result.user.displayName || ''}!`,
//           timer: 1500,
//           showConfirmButton: false
//         });
//         navigate('/');
//       })
//       .catch((error) => {
//         console.error("Google login error:", error.message);
//         Swal.fire({
//           icon: 'error',
//           title: 'Google Login Failed',
//           text: error.message || 'Something went wrong. Please try again.'
//         });
//       });
//   };

//   return (
//     <div className="max-w-sm mt-12 mx-auto mb-12 shadow-2xl shadow-teal-500">
//       <div className="card bg-gray-100 shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
//         <div className="card-body p-6">
//           <h2 className="text-2xl font-semibold text-green-800 mb-4">Login</h2>
//           <form onSubmit={handellogin} className="space-y-4">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="input input-bordered w-full"
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="input input-bordered w-full"
//               required
//             />
//             <button type="submit" className="btn btn-success w-full rounded-full text-white">
//               Login
//             </button>
//           </form>

//           <div className="divider text-xs text-gray-500">or</div>

//           <button onClick={handleGoogle} className="btn w-full border border-gray-300 rounded-full text-sm">
//             Continue with Google
//           </button>

//           <p className="text-sm text-blue-500 text-center mt-4">
//             Don't have an account?{' '}
//             <Link to="/signup" className="text-green-700 hover:underline">
//               Register here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Authcontext } from "../Auth/Authcontext";
import Swal from "sweetalert2";
import { Mail, Lock, LogIn } from "lucide-react";

const Login = () => {
  const { signin, googleSignin } = useContext(Authcontext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const { email, password } = Object.fromEntries(form.entries());

    try {
      setLoading(true);
      await signin(email, password);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message || "Invalid credentials. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      setLoading(true);
      const result = await googleSignin();
      Swal.fire({
        icon: "success",
        title: "Google Login Successful",
        text: `Welcome ${result.user.displayName || ""}!`,
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-12 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Login
      </h2>
      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            <Mail size={16} /> Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200"
            required
          />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            <Lock size={16} /> Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="mt-6">
        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
          disabled={loading}
        >
          <LogIn size={18} /> {loading ? "Loading..." : "Continue with Google"}
        </button>
      </div>

      <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-6">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-teal-600 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;
