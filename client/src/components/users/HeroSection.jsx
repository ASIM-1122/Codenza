import React from "react";
import homePageIMG from "../../assets/homePageIMG.png"; // ✅ Import your image


const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center min-h-[90vh] flex flex-col justify-center items-center text-white px-4 text-center"
      style={{ backgroundImage: `url(${homePageIMG})` }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Let’s get started.</h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        Enter the address or coordinates of a structure you’d like to measure.
      </p>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-xl">
        <input
          type="text"
          placeholder="Enter full address"
          className="flex-1 px-4 py-3 rounded-md text-gray-800"
        />
        <button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-md font-semibold">
          START MEASUREMENT
        </button>
      </div>

      <button className="mt-4 bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-md font-semibold">
        APPEND ELEMENT
      </button>
    </section>
  );
};

export default HeroSection;
