import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Dalton Smith / Frank Guillens",
    company: "Western Roofing Installations",
    text: "Online Prime Sollutions reports have been a game changer for us! Their accuracy and speed give us confidence in every project.",
  },
  {
    name: "N. Higgs",
    company: "Higgs Installations Services, LLC",
    text: "Online Prime Sollutions has streamlined our workflow and made our estimates 100% more efficient.",
  },
  // add more testimonials here — component will adapt
];

export default function TestimonialsSection() {
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // update arrow enabled state
  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    // Use small epsilon to avoid floating rounding issues
    setCanScrollRight(el.scrollLeft + el.clientWidth + 1 < el.scrollWidth);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => updateScrollState();
    const onResize = () => updateScrollState();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // keyboard support (left/right)
    const onKey = (e) => {
      if (e.key === "ArrowLeft") return scrollByOffset(-1);
      if (e.key === "ArrowRight") return scrollByOffset(1);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // scroll by pages (80% of visible width)
  const scrollByOffset = (direction = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const offset = Math.round(el.clientWidth * 0.8) * direction;
    el.scrollTo({ left: el.scrollLeft + offset, behavior: "smooth" });
    // update after a short delay (smooth scroll)
    setTimeout(updateScrollState, 300);
  };

  return (
    <section className="relative bg-gray-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Are Saying</h2>

        {/* Scroller container */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scrollByOffset(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-opacity
              ${canScrollLeft ? "bg-white text-gray-800 hover:scale-105" : "bg-white/40 text-gray-400 cursor-not-allowed opacity-50"}
              hidden md:inline-flex`}
          >
            {/* left arrow svg */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 18l-6-6 6-6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Horizontal scroller */}
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2 snap-x snap-mandatory"
            // snap children to center-ish; card uses snap-center
          >
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="min-w-[280px] sm:min-w-[340px] md:min-w-[420px] snap-center bg-gray-900 p-6 rounded-lg shadow-lg flex-shrink-0"
                aria-label={`testimonial-${i}`}
              >
                <p className="italic mb-4 leading-relaxed">“{t.text}”</p>
                <div className="mt-auto">
                  <h4 className="font-bold">{t.name}</h4>
                  <span className="text-sm text-gray-400">{t.company}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scrollByOffset(1)}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-opacity
              ${canScrollRight ? "bg-white text-gray-800 hover:scale-105" : "bg-white/40 text-gray-400 cursor-not-allowed opacity-50"}
              hidden md:inline-flex`}
          >
            {/* right arroww svg */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 6l6 6-6 6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Small pager dots for desktop & mobile */}
        <div className="mt-6 flex justify-center items-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const el = scrollerRef.current;
                if (!el) return;
                const card = el.children[idx];
                if (!card) return;
                // center the clicked card
                const left = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2;
                el.scrollTo({ left, behavior: "smooth" });
                setTimeout(updateScrollState, 300);
              }}
              className="w-2.5 h-2.5 rounded-full bg-white/60 hover:bg-white/90"
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
