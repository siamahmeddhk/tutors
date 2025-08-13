// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLeaf, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import { Link } from "react-router";

// export default function Footer() {
//   return (
//     <footer className="bg-teal-500 dark:text-gray-300 pt-14 pb-8 text-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
//         {/* Logo & Tagline */}
//         <div className="space-y-4">
//           <Link 
//             to="/" 
//             className="flex items-center gap-2 text-2xl font-bold text-black "
//           >
//             <span className="group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
//                📚 TutorsTalk
//             </span>
//           </Link>
//           <p className="text-sm leading-relaxed text-gray-900">
//             Empowering learners and tutors worldwide through easy bookings and expert guidance.
//           </p>
//           <div className="flex items-center gap-2 text-sm">
//             <FaMapMarkerAlt className="text-black" />
//             <span className="text-gray-700">123 Education St, Learning City</span>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div>
//           <h3 className="text-lg text-black font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 w-max">
//             Quick Links
//           </h3>
//           <ul className="space-y-3 text-gray-700">
//             {[
//               { path: "/", label: "Home" },
//               { path: "/find-tutor", label: "Find Tutors" },
//               { path: "/add", label: "Add Tutorial" },
//               { path: "/visa-help", label: "Visa Help" },
//             ].map((item) => (
//               <li key={item.path}>
//                 <Link 
//                   to={item.path} 
//                   className="text-sm hover:text-gray-700 dark:hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group"
//                 >
//                   <span className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg text-black font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 w-max">
//             Contact Us
//           </h3>
//           <ul className="space-y-4 text-sm text-gray-700">
//             <li className="flex items-start gap-3">
//               <FaEnvelope className="text-gray-700 mt-1 flex-shrink-0" />
//               <a 
//                 href="mailto:help@tutorstalk.com" 
//                 className="hover:text-gray-700 dark:hover:text-gray-900 transition-colors duration-300"
//               >
//                 help@tutorstalk.com
//               </a>
//             </li>
//             <li className="flex items-start gap-3">
//               <FaPhoneAlt className="text-gray-700 mt-1 flex-shrink-0" />
//               <a 
//                 href="tel:+8801234567890" 
//                 className="hover:text-gary-700 dark:hover:text-gray-900 transition-colors duration-300"
//               >
//                 +880 1234 567 890
//               </a>
//             </li>
//             <li className="flex items-start gap-3">
//               <FaMapMarkerAlt className="text-gray-700 mt-1 flex-shrink-0" />
//               <span>Support available 9AM-6PM</span>
//             </li>
//           </ul>
//         </div>

//         {/* Newsletter & Social */}
//         <div>
//           <h3 className="text-lg text-black font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
//             Stay Connected
//           </h3>
//           <div className="mb-6">
//             <p className="text-sm text-black mb-3">Subscribe to our newsletter:</p>
//             <div className="flex">
//               <input 
//                 type="email" 
//                 placeholder="Your email" 
//                 className="px-3 py-2 text-sm border border-r-0 border-gray-300 dark:border-gray-600 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 w-full"
//               />
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-r transition-colors duration-300">
//                 Join
//               </button>
//             </div>
//           </div>
//           <div className="flex gap-4">
//             {[
//               { icon: <FaFacebookF />, color: "hover:text-[#1877F2]" },
//               { icon: <FaTwitter />, color: "hover:text-[#1DA1F2]" },
//               { icon: <FaInstagram />, color: "hover:text-[#E1306C]" },
//             ].map((social, index) => (
//               <a 
//                 key={index} 
//                 href="#" 
//                 className={`text-lg p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm hover:shadow-md transition-all duration-300 ${social.color}`}
//               >
//                 {social.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Copyright */}
//       <div className="text-center text-xs text-black mt-14 pt-6 border-t border-gray-200 dark:border-gray-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <p>&copy; {new Date().getFullYear()} TutorsTalk. All rights reserved.</p>
//           <div className="flex justify-center gap-4 mt-2">
//             <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
//             <Link to="/terms" className="hover:underline">Terms of Service</Link>
//             <Link to="/cookies" className="hover:underline">Cookie Policy</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }





import React from "react";
// Using lucide-react for a consistent, modern icon set
import { BookOpen, Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Newsletter subscription request submitted!");
  };

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Tagline */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-teal-500">
            <BookOpen className="text-3xl" />
            <span>TutorsTalk</span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering learners and tutors worldwide through easy bookings and expert guidance.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <MapPin size={16} className="text-teal-500" />
            <span>123 Education St, Learning City</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg text-white font-bold mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400">
            {[
              { path: "/", label: "Home" },
              { path: "/find-tutor", label: "Find Tutors" },
              { path: "/add", label: "Add Tutorial" },
              { path: "/visa-help", label: "Visa Help" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-base hover:text-teal-500 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg text-white font-bold mb-6">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-teal-500 mt-1 flex-shrink-0" />
              <a
                href="mailto:help@tutorstalk.com"
                className="hover:text-teal-500 transition-colors duration-300"
              >
                help@tutorstalk.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-teal-500 mt-1 flex-shrink-0" />
              <a
                href="tel:+8801234567890"
                className="hover:text-teal-500 transition-colors duration-300"
              >
                +880 1234 567 890
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-teal-500 mt-1 flex-shrink-0" />
              <span>Support available 9AM-6PM</span>
            </li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg text-white font-bold mb-6">
            Stay Connected
          </h3>
          <div className="mb-6">
            <p className="text-sm text-gray-400 mb-3">Subscribe to our newsletter:</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 text-sm border-2 border-gray-700 bg-gray-800 text-white rounded-l-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-300 w-full"
              />
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 text-sm font-semibold rounded-r-xl transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div>
          <div className="flex gap-4">
            {[
              { icon: <Facebook />, link: "#", color: "hover:text-[#1877F2]" },
              { icon: <Twitter />, link: "#", color: "hover:text-[#1DA1F2]" },
              { icon: <Instagram />, link: "#", color: "hover:text-[#E1306C]" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className={`text-lg p-3 bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-all duration-300 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-500 mt-16 pt-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} TutorsTalk. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
            <Link to="/cookies" className="hover:underline">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
