"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "@/components/Icons";

type Step = [title: string, text: string];

function RoadmapItem({ step, index, last }: { step: Step; index: number; last: boolean }) {
  const ref = useRef<HTMLLIElement>(null);
  const [active, setActive] = useState(false);
  const left = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cardHidden = `opacity-0 translate-x-6 ${left ? "md:-translate-x-16" : "md:translate-x-16"}`;
  return (
    <li
      ref={ref}
      className="relative z-10 mb-7 grid grid-cols-[40px_1fr] items-center gap-3 last:mb-0 md:mb-14 md:grid-cols-[1fr_80px_1fr] md:gap-8"
    >
      <span
        className={`col-start-1 row-start-1 flex h-10 w-10 shrink-0 items-center justify-center justify-self-center rounded-full border-2 border-[#21547C] text-xs font-semibold transition duration-500 [transition-delay:250ms] motion-reduce:transition-none md:col-start-2 md:h-16 md:w-16 md:text-base ${
          last ? "bg-[#21547C] text-white" : "bg-[#EEF6FB] text-[#21547C]"
        } ${active ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
      >
        {last ? <Check className="h-4 w-4 md:h-6 md:w-6" /> : String(index + 1).padStart(2, "0")}
      </span>
      <div
        className={`col-start-2 row-start-1 rounded-2xl border border-[#C5DAE9] bg-white p-5 transition duration-700 motion-reduce:transition-none md:p-8 ${
          left ? "md:col-start-1" : "md:col-start-3"
        } ${active ? "translate-x-0 opacity-100" : cardHidden}`}
      >
        <h3 className="font-serif type-card font-medium text-[#21547C]">{step[0]}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#35516a] md:text-base">{step[1]}</p>
      </div>
    </li>
  );
}

/** Linha do tempo vertical: a linha central cresce com o scroll e os cards entram alternando os lados. */
export default function Roadmap({ steps }: { steps: Step[] }) {
  const trackRef = useRef<HTMLOListElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const update = () => {
      const track = trackRef.current;
      const line = lineRef.current;
      if (!track || !line) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const progress = reduced
        ? 1
        : Math.max(0, Math.min((window.innerHeight * 0.65 - track.getBoundingClientRect().top) / track.offsetHeight, 1));
      line.style.transform = `scaleY(${progress})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <ol ref={trackRef} className="relative mx-auto max-w-4xl">
      <span aria-hidden className="absolute bottom-5 left-5 top-5 w-0.5 -translate-x-1/2 bg-[#3F8DBB]/20 md:bottom-8 md:left-1/2 md:top-8" />
      <span
        ref={lineRef}
        aria-hidden
        className="absolute bottom-5 left-5 top-5 w-0.5 origin-top -translate-x-1/2 bg-[#3F8DBB] md:bottom-8 md:left-1/2 md:top-8"
        style={{ transform: "scaleY(0)" }}
      />
      {steps.map((step, i) => (
        <RoadmapItem key={step[0]} step={step} index={i} last={i === steps.length - 1} />
      ))}
    </ol>
  );
}
