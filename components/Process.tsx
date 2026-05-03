"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Brief",
    description:
      "We study your brand's DNA, your audience, and your competitive landscape. Every great project starts with asking the right questions.",
  },
  {
    num: "02",
    title: "Concept",
    description:
      "3D concept renders, mood boards, motion references, and strategic direction. You see your future before we build it.",
  },
  {
    num: "03",
    title: "Execution",
    description:
      "Precision production across all three disciplines — design, video, and AI systems — running in parallel for maximum efficiency.",
  },
  {
    num: "04",
    title: "Launch",
    description:
      "Delivery, iteration, and ongoing optimization. We don't hand off and disappear — we stay until the results speak.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-step", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#EFEDE7" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <div className="section-chip mb-5">How We Work</div>
          <h2
            style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
            className="text-4xl md:text-5xl text-[#1E2022] leading-[0.92] tracking-tight"
          >
            A process built for
            <br />
            <span className="text-outline-accent">precision.</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px relative">
          {/* Connecting line (desktop only) */}
          <div
            ref={lineRef}
            className="hidden md:block absolute top-[18px] left-[calc(12.5%)] right-[calc(12.5%)] h-[1px]"
            style={{
              background: "linear-gradient(90deg, rgba(30,32,34,0.3) 0%, transparent 100%)",
            }}
          />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="process-step relative pt-12 pb-8 md:pr-8"
              style={{ borderTop: i === 0 ? "2px solid #1E2022" : "2px solid rgba(30,32,34,0.12)" }}
            >
              {/* Step circle */}
              <div
                className="absolute top-[-9px] left-0 w-[17px] h-[17px] rounded-full flex items-center justify-center"
                style={{
                  background: i === 0 ? "#1E2022" : "#EFEDE7",
                  border: `1px solid ${i === 0 ? "#1E2022" : "rgba(30,32,34,0.2)"}`,
                }}
              >
                {i === 0 && (
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </div>

              {/* Number */}
              <span
                style={{ fontFamily: "var(--font-mono-var), monospace" }}
                className="text-[10px] tracking-[0.2em] text-[rgba(30,32,34,0.45)] block mb-4"
              >
                Step {step.num}
              </span>

              {/* Title */}
              <h3
                style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
                className="text-xl md:text-2xl text-[#1E2022] mb-3 leading-tight"
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{ fontFamily: "var(--font-serif-var), serif" }}
                className="text-[rgba(30,32,34,0.5)] text-sm md:text-base leading-relaxed"
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
