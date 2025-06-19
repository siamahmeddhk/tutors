import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Authcontext } from "../Auth/Authcontext";
import Swal from "sweetalert2";

const Tutordtl = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tutor, setTutor] = useState(null);
  const { user } = useContext(Authcontext);

  // ✅ Booking Handler
  const handelbook = () => {
    if (!user?.email) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please log in to book a tutor!",
      });
      return;
    }

    const bookingData = {
      tutorId: id,
      tutorName: tutor.name,
      tutorImage: tutor.image,
      price: tutor.price,
      userEmail: user.email,
      bookingTime: new Date().toISOString(),
      courseId: tutor._id
    };

    fetch("https://tutor-s.vercel.app/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Booking Successful!",
            text: `${tutor.name} has been booked.`,
            confirmButtonText: "Go to Booked Page",
          }).then(() => {
            navigate("/booked");
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Booking Failed",
            text: "Something went wrong. Please try again.",
          });
        }
      })
      .catch((err) => {
        console.error("Booking error:", err);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred. Please try again later.",
        });
      });
  };

  useEffect(() => {
    fetch(`https://tutor-s.vercel.app/tutors`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((t) => t._id === id);
        setTutor(found);
      })
      .catch((err) => {
        console.error("Error fetching tutor:", err);
      });
  }, [id]);

  if (!tutor) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 dark:text-gray-300">
        Loading tutor details...
      </div>
    );
  }

  const { name, image, language, review, description, price } = tutor;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden p-6">
        <img
          src={image}
          alt={name}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              {name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <span className="font-medium">Language:</span> {language}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <span className="font-medium">Reviews:</span> {review}
            </p>
            {price && (
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <span className="font-medium">Price:</span> ${price}
              </p>
            )}
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-all"
            >
              Go Back
            </button>
            <button
              onClick={handelbook}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutordtl;
