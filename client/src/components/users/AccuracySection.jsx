import React from "react";
import percent from "../../assets/99percent.png"; // ✅ Import your image

const AccuracySection = () => (
  <section className="bg-gray-50 py-16 text-center">
    <div className="max-w-3xl mx-auto px-4">
      <img
        src={percent}
        alt="99% Accuracy Guarantee"
        className="mx-auto mb-6 w-28 md:w-36 rounded-[50%]"
      />
      <h2 className="text-3xl font-bold mb-4">99% Accuracy Guarantee</h2>
      <p className="text-gray-600 mb-8">
        Innovative measurements that save you time, money, and rework. We guarantee
        a 99% accuracy rate with every RoofScope report, ensuring confidence and
        consistency in your estimates and material orders.
      </p>
      <button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold">
        SEE OUR ACCURACY REPORT
      </button>
    </div>
  </section>
);

export default AccuracySection;
