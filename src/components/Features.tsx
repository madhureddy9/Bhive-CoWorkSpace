import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  FaWifi,
  FaDumbbell,
  FaMugHot,
  FaCalendarCheck,
  FaUsers,
  FaCouch,
  FaRupeeSign,
  FaFutbol,
} from "react-icons/fa";

const features = [
  { icon: <FaUsers />, text: "Community Events" },
  { icon: <FaDumbbell />, text: "Gym Facilities" },
  { icon: <FaWifi />, text: "High-Speed WiFi" },
  { icon: <FaMugHot />, text: "Cafe & Tea Bar" },
  { icon: <FaRupeeSign />, text: "Affordable" },
  { icon: <FaCouch />, text: "Comfort Lounges" },
  { icon: <FaCalendarCheck />, text: "Quick Booking" },
  { icon: <FaFutbol />, text: "Sports Area" },
];

const Features: React.FC = () => {
  return (
    <section className="py-10 bg-[#F8F9FB] px-6 md:px-12 lg:px-10 xl:px-22">
      {/* Feature Heading */}
      <h2 className="text-left md:pl-2 text-2xl md:text-2xl lg:text-2xl font-bold mb-6 max-w-7xl mx-auto flex items-center gap-30">
        <span>Why Choose Us?</span>
        <FiArrowRight className="lg:hidden md:hidden text-[#FFBB00] text-2xl" />
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-center p-3 md:p-4
            bg-[#F8F9FB] rounded-lg shadow-md md:shadow-none md:rounded-none 
            ${index % 4 !== 3 ? "md:border-r border-gray-300" : ""} 
            ${index < 4 ? "md:border-b border-gray-300" : ""}`}
          >
            <span className="text-[#FFBB00] text-2xl md:text-2xl lg:text-3xl">
              {feature.icon}
            </span>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl truncate w-full">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
