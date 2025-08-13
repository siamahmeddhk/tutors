


// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router";
// import Swal from "sweetalert2";
// import { Authcontext } from "../Auth/Authcontext";

// const Reg = () => {
//   const { create, googleSignin, updateUserProfile } = useContext(Authcontext);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   // Password validation helper
//   const validatePassword = (password) => {
//     // Minimum 6 chars, at least one uppercase, one lowercase, one digit
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
//     return regex.test(password);
//   };

//   const handelreg = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const { name, email, password, photoURL } = Object.fromEntries(
//       formData.entries()
//     );

//     if (!validatePassword(password)) {
//       Swal.fire({
//         icon: "error",
//         title: "Weak Password",
//         text:
//           "Password must be at least 6 characters and contain uppercase, lowercase, and a number.",
//       });
//       return;
//     }

//     setLoading(true);

//     create(email, password)
//       .then(() => {
//         return updateUserProfile(name, photoURL || "https://i.ibb.co/tLkDzqP/user.png");
//       })
//       .then(() => {
//         Swal.fire({
//           icon: "success",
//           title: "Registered!",
//           text: "Your account has been created successfully.",
//           timer: 2000,
//           showConfirmButton: false,
//         });
//         navigate("/"); // Redirect to Home
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: "error",
//           title: "Registration Failed",
//           text: error.message,
//         });
//       })
//       .finally(() => setLoading(false));
//   };

//   const handleGoogle = () => {
//     setLoading(true);
//     googleSignin()
//       .then((result) => {
//         Swal.fire({
//           icon: "success",
//           title: "Google Login Successful",
//           text: `Welcome ${result.user.displayName}`,
//           timer: 2000,
//           showConfirmButton: false,
//         });
//         navigate("/");
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: "error",
//           title: "Google Login Failed",
//           text: error.message,
//         });
//       })
//       .finally(() => setLoading(false));
//   };

//   return (
//     <div className="max-w-sm mt-12 mb-12 mx-auto shadow-2xl shadow-teal-500 ">
//       <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
//         <div className="card-body p-6">
//           <h2 className="text-2xl font-semibold text-green-800 mb-4">Register</h2>
//           <form onSubmit={handelreg} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               className="input input-bordered w-full"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               className="input input-bordered w-full"
//               required
//             />
//             <input
//               type="url"
//               name="photoURL"
//               placeholder="Photo URL (optional)"
//               className="input input-bordered w-full"
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="input input-bordered w-full"
//               required
//               minLength={6}
//             />
//             <button
//               type="submit"
//               className="btn btn-success w-full rounded-full text-white"
//               disabled={loading}
//             >
//               {loading ? "Registering..." : "Register"}
//             </button>
//           </form>

//           <div className="divider text-xs text-gray-500">or</div>

//           <button
//             onClick={handleGoogle}
//             className="btn w-full border border-gray-300 rounded-full text-sm"
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Continue with Google"}
//           </button>

//           <p className="text-sm text-blue-500 text-center mt-4">
//             Already have an account?{" "}
//             <Link to="/login" className="text-green-700 hover:underline">
//               Login here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reg;




import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Authcontext } from "../Auth/Authcontext";
import { User, Mail, Lock, Image, LogIn } from "lucide-react";

const Reg = () => {
  const { create, googleSignin, updateUserProfile } = useContext(Authcontext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const { name, email, password, photoURL } = Object.fromEntries(form.entries());

    if (!validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must have at least 6 characters, one uppercase, one lowercase, and one number.",
      });
      return;
    }

    try {
      setLoading(true);
      await create(email, password);
      await updateUserProfile(name, photoURL || "https://i.ibb.co/tLkDzqP/user.png");
      Swal.fire({
        icon: "success",
        title: "Registered Successfully!",
        text: `Welcome ${name}!`,
        timer: 2000,
        showConfirmButton: false,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
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
        timer: 2000,
        showConfirmButton: false,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-12 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Create Account
      </h2>
      <form onSubmit={handleRegister} className="space-y-5">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            <User size={16} /> Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200"
            required
          />
        </div>
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
            <Image size={16} /> Photo URL
          </label>
          <input
            type="url"
            name="photoURL"
            placeholder="Optional"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200"
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
            minLength={6}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
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
        Already have an account?{" "}
        <Link to="/login" className="text-teal-600 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Reg;
