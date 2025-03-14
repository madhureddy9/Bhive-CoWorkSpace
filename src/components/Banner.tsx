import React from "react";

const Banner: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat px-4 py-16"
      style={{
        backgroundImage: `url('/assets/bg-image.png'), url('/assets/Vector 6.png')`,
        backgroundPosition: "center, top 40px",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      {/* Vector 6 explicitly positioned for testing */}
      <img
        src="/assets/Vector 6.png"
        alt="Vector 6 Illustration"
        className="absolute left-13 top-10 opacity-100 z-10"
      />

      {/* Vector 7 Positioned in Foreground */}
      <img
        src="/assets/Vector 7.png"
        alt="Vector 7 Illustration"
        className="absolute right-0 top-0 w-2/5 md:w-1/3 lg:w-1/3 opacity-80"
      />

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left md:pl-10">
          <h1 className="text-[26px] md:text-[32px] font-bold leading-snug">
            Host your meeting with <br className="sm:hidden" />
            world-class amenities.
          </h1>
          <h1 className="text-[22px] md:text-[26px] font-bold">
            Starting at{" "}
            <span className="text-[#FFBB00] font-bold">₹199/-!</span>
          </h1>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full md:max-w-md bg-[#F8F9FB] rounded-lg shadow-md p-2">
            <video
              src="/assets/Bhive.mp4"
              autoPlay
              loop
              muted
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
