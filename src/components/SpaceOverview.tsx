import React from "react";
import { FiArrowRight } from "react-icons/fi";
import SpaceCard from "./SpaceCard";
import useFetchSpaces from "../hooks/useFetchSpaces";

const SpaceOverview: React.FC = () => {
  const { spaces, loading } = useFetchSpaces();

  return (
    <section className="py-6 px-6 md:px-20 bg-[#F8F9FB]">
      {/* Heading with Arrow Icon for Small Screens */}
      <div className="max-w-7xl mx-auto md:block">
        <h2 className="text-2xl font-bold md:text-left flex items-center gap-45">
          <span className="md:hidden">Our Space</span>
          <FiArrowRight className="lg:hidden md:hidden text-[#FFBB00] text-2x1 ml-2" />
          <span className="hidden md:pl-1 lg:pl-1 xl:pl-4 md:inline">
            Our Space Overview
          </span>
        </h2>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading spaces...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-4 2xl:gap-3 mt-4 max-w-[1600px] mx-auto">
          {spaces.map((space) => (
            <SpaceCard key={space.id} {...space} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SpaceOverview;
