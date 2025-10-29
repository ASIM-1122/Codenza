import React from "react";
import prs1 from "../../assets/prs.jpg";
import prs2 from "../../assets/prs2.jpg";
import prs3 from "../../assets/prs3.jpg";


const PartnersSection = () => (
  <section className="py-16 bg-white text-center">
    <h2 className="text-3xl font-bold mb-10">Our Integrated Partners</h2>
    <div className="flex flex-wrap justify-center items-center gap-10 px-4">
      {[prs1, prs2, prs3].map((img, i) => (
        <img key={i} src={img} alt={`Partner ${i}`} className=" rounded-md h-60" />
      ))}
    </div>
  </section>
);

export default PartnersSection;
