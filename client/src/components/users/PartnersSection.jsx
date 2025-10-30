import React from "react";
import prs1 from "../../assets/prs.jpg";
import prs2 from "../../assets/prs2.jpg";
import prs3 from "../../assets/prs3.jpg";

const PartnersSection = () => (
  <section className="py-20 bg-gray-50 text-center">
    {/* Heading */}
    <div className="px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Our Integrated Partners
      </h2>
      <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-12">
        We’re proud to collaborate with top industry partners that help us deliver
        the best services and solutions for our clients.
      </p>
    </div>

    {/* Partner Logos */}
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 px-4">
      {[prs1, prs2, prs3].map((img, i) => (
        <div
          key={i}
          className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-4 md:p-6 flex justify-center items-center w-32 h-32 md:w-44 md:h-44"
        >
          <img
            src={img}
            alt={`Partner ${i + 1}`}
            className="object-contain w-full h-full rounded-md"
          />
        </div>
      ))}
    </div>
  </section>
);

export default PartnersSection;
