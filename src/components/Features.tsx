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
    <section className="py-10 bg-[#F8F9FB] px-6 md:px-12 lg:px-10 xl:px-22 2xl:px-30 3xl:px-50">
      {/* Feature Heading */}
      <h2 className="text-left text-2xl font-bold mb-6 max-w-7xl mx-auto flex items-center gap-30">
        <span>Why Choose Us?</span>
        <FiArrowRight className="lg:hidden md:hidden text-[#FFBB00] text-2xl" />
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 p-4 bg-white shadow-md rounded-lg"
          >
            <span className="text-[#FFBB00] text-2xl">{feature.icon}</span>
            <p className="text-lg">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
