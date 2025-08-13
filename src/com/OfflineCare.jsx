// import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTools } from "react-icons/fa";

// export default function OfflineCare() {
//   return (
//     <section className="max-w-6xl mx-auto px-1 py-12">
//       <div className="text-center mb-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-black flex items-center justify-center gap-2">
//           <FaTools /> Offline Support & Care
//         </h2>
//         <p className="mt-3 text-black dark:text-white max-w-2xl mx-auto">
//           Having trouble reaching us online? We're here for you even when you're offline.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Help Center */}
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
//           <FaMapMarkerAlt className="text-teal-500 text-3xl mb-3" />
//           <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Visit Our Help Center</h3>
//           <p className="text-sm text-black dark:text-white">
//             Come to our physical help desk for offline assistance, weekdays 10am–5pm.
//           </p>
//           <p className="text-sm mt-2 text-teal-500">House #22, Road 13, Dhanmondi, Dhaka</p>
//         </div>

//         {/* Call Support */}
//         <div className="bg-teal-500 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
//           <FaPhoneAlt className="text-black text-3xl mb-3" />
//           <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Call Our Support Team</h3>
//           <p className="text-sm text-black dark:text-white">
//             Speak with our friendly support agents between 9am–8pm.
//           </p>
//           <p className="text-sm mt-2 text-black">+880 1700 000 000</p>
//         </div>

//         {/* Email Help */}
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
//           <FaEnvelope className="text-teal-500 text-3xl mb-3" />
//           <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Email Assistance</h3>
//           <p className="text-sm text-black dark:text-white">
//             Drop us an email and we’ll respond within 24 hours (excluding holidays).
//           </p>
//           <p className="text-sm mt-2 text-teal-500">care@tutorstalk.com</p>
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
// Using lucide-react for a consistent, modern icon set
import { Wrench, Phone, Mail, MapPin } from "lucide-react";

export default function OfflineCare() {
  return (
    <section className="py-16  duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-5xl font-extrabold text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <Wrench size={40} className="text-teal-500" />
            <span className="text-teal-500">Offline Support & Care</span>
          </h2>
       
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Help Center */}
          <div className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border-2 border-transparent transition-all duration-300 hover:scale-[1.02] hover:border-teal-500">
            <MapPin size={40} className="text-teal-500 mb-4 transition-colors duration-300 group-hover:text-teal-600" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-teal-500">
              Visit Our Help Center
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Come to our physical help desk for offline assistance, weekdays 10am–5pm.
            </p>
            <p className="text-sm font-medium mt-4 text-teal-500 dark:text-teal-400 transition-colors duration-300 group-hover:text-teal-600">
              House #22, Road 13, Dhanmondi, Dhaka
            </p>
          </div>

          {/* Call Support */}
          <div className="group bg-teal-500 dark:bg-teal-700 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <Phone size={40} className="text-white mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">
              Call Our Support Team
            </h3>
            <p className="text-base text-teal-100 dark:text-teal-200">
              Speak with our friendly support agents between 9am–8pm.
            </p>
            <p className="text-sm font-medium mt-4 text-white">
              +880 1700 000 000
            </p>
          </div>

          {/* Email Help */}
          <div className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border-2 border-transparent transition-all duration-300 hover:scale-[1.02] hover:border-teal-500">
            <Mail size={40} className="text-teal-500 mb-4 transition-colors duration-300 group-hover:text-teal-600" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-teal-500">
              Email Assistance
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Drop us an email and we’ll respond within 24 hours (excluding holidays).
            </p>
            <p className="text-sm font-medium mt-4 text-teal-500 dark:text-teal-400 transition-colors duration-300 group-hover:text-teal-600">
              care@tutorstalk.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
