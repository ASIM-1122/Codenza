import React from "react";

const PartnersSection = () => (
  <section className="py-16 bg-white text-center">
    <h2 className="text-3xl font-bold mb-10">Our Integrated Partners</h2>
    <div className="flex flex-wrap justify-center items-center gap-10 px-4">
      {["partner1.png", "partner2.png", "partner3.png", "partner4.png"].map((img, i) => (
        <img key={i} src={`/${img}`} alt={`Partner ${i}`} className="h-10 md:h-14" />
      ))}
    </div>
  </section>
);

export default PartnersSection;
