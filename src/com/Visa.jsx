// import React from "react";
// import { FaPassport, FaEnvelope } from "react-icons/fa";

// export default function Visa() {
//   return (
//     <section className="max-w-6xl mx-auto my-12 px-4 py-10 bg-white dark:bg-gray-900 transition-colors duration-300 rounded-2xl">
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-4xl font-bold text-teal-500 flex items-center justify-center gap-2">
//           <FaPassport className="text-teal-500" /> Visa Processing Help
//         </h1>
//         <p className="mt-3 text-gray-700 dark:text-gray-300">
//           Need help with study or tutor-related visa processing? We're here to assist.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Info Section */}
//         <div className="space-y-6">
//           <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
//             Available Countries
//           </h2>
//           <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
//             <li className="flex items-start">
//               <span className="mr-2">🇺🇸</span>
//               <span>United States – Student & Language Visa</span>
//             </li>
//             <li className="flex items-start">
//               <span className="mr-2">🇨🇦</span>
//               <span>Canada – Study Permit Guidance</span>
//             </li>
//             <li className="flex items-start">
//               <span className="mr-2">🇬🇧</span>
//               <span>United Kingdom – Short-term Study Visa</span>
//             </li>
//             <li className="flex items-start">
//               <span className="mr-2">🇦🇺</span>
//               <span>Australia – Subclass 500 Visa</span>
//             </li>
//             <li className="flex items-start">
//               <span className="mr-2">🇩🇪</span>
//               <span>Germany – Language Learning Visa</span>
//             </li>
//           </ul>

//           <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6">
//             How We Help
//           </h2>
//           <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
//             <li>Free document review (Passport, Acceptance Letter)</li>
//             <li>Application form support</li>
//             <li>Interview preparation</li>
//             <li>Consultation on tutor-based educational pathways</li>
//           </ul>
//         </div>

//         {/* Help Form */}
//         <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300">
//           <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
//             <FaEnvelope className="text-blue-600 dark:text-blue-400" /> Request Visa Assistance
//           </h2>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               alert("Visa help request submitted!");
//             }}
//             className="space-y-4"
//           >
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
//               required
//             />
//             <textarea
//               rows="4"
//               placeholder="Your Query or Details"
//               className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-teal-500 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
//             >
//               Submit Request
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
// Using lucide-react for a consistent, modern icon set
import { Globe, Send, Mail } from "lucide-react";

export default function Visa() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    // e.g., send data to an API, show a success message via a toast/modal
    console.log("Visa help request submitted!");
    // Instead of alert(), use a custom modal or toast notification
    alert("Visa help request submitted!");
  };

  return (
    <section className="relative overflow-hidden py-20  transition-colors duration-300">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-5xl font-extrabold text-teal-500 dark:text-teal-500 flex items-center justify-center space-x-3">
            <Globe size={40} />
            <span>Visa Processing Help</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Need help with study or tutor-related visa processing? We're here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Info Section */}
          <div className="space-y-8 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Available Countries
              </h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-2xl flex-shrink-0">🇺🇸</span>
                  <span>United States – Student & Language Visa</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl flex-shrink-0">🇨🇦</span>
                  <span>Canada – Study Permit Guidance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl flex-shrink-0">🇬🇧</span>
                  <span>United Kingdom – Short-term Study Visa</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl flex-shrink-0">🇦🇺</span>
                  <span>Australia – Subclass 500 Visa</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl flex-shrink-0">🇩🇪</span>
                  <span>Germany – Language Learning Visa</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                How We Help
              </h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Mail size={24} className="text-teal-500 flex-shrink-0 mt-1" />
                  <span>Free document review (Passport, Acceptance Letter)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={24} className="text-teal-500 flex-shrink-0 mt-1" />
                  <span>Application form support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={24} className="text-teal-500 flex-shrink-0 mt-1" />
                  <span>Interview preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={24} className="text-teal-500 flex-shrink-0 mt-1" />
                  <span>Consultation on tutor-based educational pathways</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Help Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl transform transition-transform duration-300 hover:scale-[1.02]">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Send size={28} className="text-teal-500" />
              <span>Request Visa Assistance</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-300"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-300"
                required
              />
              <textarea
                rows="5"
                placeholder="Your Query or Details"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-300"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-teal-600"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
