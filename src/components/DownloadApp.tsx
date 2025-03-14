import React from "react";
import { FiArrowRight } from "react-icons/fi";

const DownloadApp: React.FC = () => {
  return (
    <section className="bg-[#F8F9FB] px-6 md:px-30 py-12">
      {/* Heading */}
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h2 className="text-[24px]  md:text-[28px] font-bold text-[#333] flex items-center gap-2">
          Download our app now
          <FiArrowRight className="lg:hidden md:hidden text-[#FFBB00] text-2xl" />
        </h2>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 mt-6">
        {/* White Card - Only for Large Screens */}
        <div className="hidden md:block bg-white shadow-lg rounded-xl px-4 py-2 w-full">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* App Images */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img
                src="/assets/DownloadApp_img.png"
                alt="BHIVE Workspace App"
                className="w-full max-w-[280px] md:max-w-[350px] h-auto"
              />
            </div>

            {/* Text & Store Buttons */}
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-[#828282] leading-relaxed">
                Boost your productivity with the BHIVE Workspace app. Elevate
                your workspace, collaborate efficiently, and unlock exclusive
                perks.
              </p>

              <div className="flex justify-center md:justify-start gap-4 mt-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/assets/Playstore_img.png"
                    alt="Google Play"
                    className="h-[40px] w-auto"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/assets/Appstore-Img.png"
                    alt="App Store"
                    className="h-[40px] w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (Without White Card) */}
        <div className="md:hidden flex flex-col items-center gap-6">
          <img
            src="/assets/DownloadApp_img.png"
            alt="BHIVE Workspace App"
            className="w-full max-w-[280px] h-auto"
          />
          <p className="hidden sm:block text-[#828282] leading-relaxed text-center">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/Playstore_img.png"
                alt="Google Play"
                className="h-[40px] w-auto"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/Appstore-Img.png"
                alt="App Store"
                className="h-[40px] w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
