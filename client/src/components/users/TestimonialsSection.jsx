// src/components/TestimonialsSection.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

/**
 * TestimonialsSection
 * - Uses site palette: slate (text), teal (accent), amber (decor)
 * - Responsive from mobile -> 2400px
 * - Horizontal scroll + arrow controls + pager dots
 * - Keyboard navigation & accessible labels
 */

const testimonials = [
  {
    name: "Dalton Smith / Frank Guillens",
    company: "Western Roofing Installations",
    text: "Online PrimeSolutions reports have been a game changer for us! Their accuracy and speed give us confidence in every project.",
  },
  {
    name: "N. Higgs",
    company: "Higgs Installations Services, LLC",
    text: "PrimeSolutions has streamlined our workflow and made our estimates 100% more efficient.",
  },
  {
    name: "A. Johnson",
    company: "Johnson Roofing Co.",
    text: "Fast turnaround, excellent support and highly accurate measurements — highly recommended.",
  },
];

export default function TestimonialsSection() {
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // compute scroll state (left/right possibility) and active index
  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    // buttons enablement
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth + 8 < el.scrollWidth);

    // determine nearest child to center
    const children = Array.from(el.children);
    const viewportCenter = el.scrollLeft + el.clientWidth / 2;
    let nearest = 0;
    let nearestDist = Infinity;
    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const dist = Math.abs(childCenter - viewportCenter);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = idx;
      }
    });
    setActiveIndex(nearest);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => updateScrollState();
    const onResize = () => updateScrollState();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const onKey = (e) => {
      if (["ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(e.key)) {
        // allow keyboard only when focus is inside the section or on document (friendly)
        if (e.key === "ArrowLeft" || e.key === "PageUp") scrollByOffset(-1);
        if (e.key === "ArrowRight" || e.key === "PageDown") scrollByOffset(1);
        if (e.key === "Home") scrollToIndex(0);
        if (e.key === "End") scrollToIndex(testimonials.length - 1);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, [updateScrollState]);

  // scroll by "page" (80% of container width)
  const scrollByOffset = (direction = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const offset = Math.round(el.clientWidth * 0.8) * direction;
    el.scrollTo({ left: el.scrollLeft + offset, behavior: "smooth" });
    // update after scroll finishes (best-effort)
    setTimeout(updateScrollState, 400);
  };

  // center a card at index
  const scrollToIndex = (index) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[index];
    if (!card) return;
    const left = Math.max(0, Math.round(card.offsetLeft - (el.clientWidth - card.clientWidth) / 2));
    el.scrollTo({ left, behavior: "smooth" });
    setTimeout(updateScrollState, 400);
  };

  return (
    <section className="relative py-20 bg-slate-50 text-slate-900">
      {/* decorative warm glow */}
      <div className="absolute -top-12 -left-12 w-[260px] h-[260px] bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-10">
          What Our Customers Are Saying
        </h2>

        <div className="relative">
          {/* Left Arrow (visible on md+) */}
          <button
            onClick={() => scrollByOffset(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll testimonials left"
            className={`hidden md:inline-flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-teal-200 transition transform
              ${canScrollLeft ? "bg-white text-slate-900 hover:scale-105" : "bg-white/40 text-slate-300 cursor-not-allowed opacity-60"}`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Scroller */}
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-2 snap-x snap-mandatory"
            role="list"
            aria-label="Customer testimonials"
          >
            {testimonials.map((t, i) => (
              <motion.article
                key={i}
                className="snap-center min-w-[280px] sm:min-w-[320px] md:min-w-[420px] bg-white rounded-2xl p-6 shadow-lg flex flex-col justify-between"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                role="listitem"
                aria-label={`Testimonial from ${t.name}`}
              >
                <p className="italic text-slate-700 mb-6 leading-relaxed">“{t.text}”</p>

                <div className="mt-4">
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.company}</div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Right Arrow (visible on md+) */}
          <button
            onClick={() => scrollByOffset(1)}
            disabled={!canScrollRight}
            aria-label="Scroll testimonials right"
            className={`hidden md:inline-flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-teal-200 transition transform
              ${canScrollRight ? "bg-white text-slate-900 hover:scale-105" : "bg-white/40 text-slate-300 cursor-not-allowed opacity-60"}`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        {/* pager dots */}
        <div className="mt-8 flex justify-center items-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`w-3.5 h-3.5 rounded-full transition-all ${activeIndex === idx ? "bg-teal-600 scale-110" : "bg-slate-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
