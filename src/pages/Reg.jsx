


import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Authcontext } from "../Auth/Authcontext";

const Reg = () => {
  const { create, googleSignin, updateUserProfile } = useContext(Authcontext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Password validation helper
  const validatePassword = (password) => {
    // Minimum 6 chars, at least one uppercase, one lowercase, one digit
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(password);
  };

  const handelreg = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, email, password, photoURL } = Object.fromEntries(
      formData.entries()
    );

    if (!validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text:
          "Password must be at least 6 characters and contain uppercase, lowercase, and a number.",
      });
      return;
    }

    setLoading(true);

    create(email, password)
      .then(() => {
        return updateUserProfile(name, photoURL || "https://i.ibb.co/tLkDzqP/user.png");
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Registered!",
          text: "Your account has been created successfully.",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/"); // Redirect to Home
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      })
      .finally(() => setLoading(false));
  };

  const handleGoogle = () => {
    setLoading(true);
    googleSignin()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Google Login Successful",
          text: `Welcome ${result.user.displayName}`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-sm mt-12 mb-12 mx-auto shadow-2xl shadow-teal-500 ">
      <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
        <div className="card-body p-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Register</h2>
          <form onSubmit={handelreg} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="url"
              name="photoURL"
              placeholder="Photo URL (optional)"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
              minLength={6}
            />
            <button
              type="submit"
              className="btn btn-success w-full rounded-full text-white"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="divider text-xs text-gray-500">or</div>

          <button
            onClick={handleGoogle}
            className="btn w-full border border-gray-300 rounded-full text-sm"
            disabled={loading}
          >
            {loading ? "Loading..." : "Continue with Google"}
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-green-700 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reg;
