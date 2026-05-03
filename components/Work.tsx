"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    category: "3D Visualization",
    title: "Luxury Product Launch",
    description: "360° product renders for premium launch campaign",
    accent: "#1E2022",
    span: "md:col-span-2",
    height: "h-64 md:h-80",
    dots: "30% 40%",
  },
  {
    category: "AI Automation",
    title: "Lead Gen System",
    description: "AI-driven outreach pipeline, 10× efficiency",
    accent: "#1E2022",
    span: "md:col-span-1",
    height: "h-64 md:h-80",
    dots: "70% 30%",
  },
  {
    category: "Video Production",
    title: "Brand Film",
    description: "Cinematic brand story for Series A startup",
    accent: "#1E2022",
    span: "md:col-span-1",
    height: "h-64 md:h-80",
    dots: "40% 60%",
  },
  {
    category: "3D + Video",
    title: "Product Visualization",
    description: "Blender renders integrated into broadcast video",
    accent: "#1E2022",
    span: "md:col-span-2",
    height: "h-64 md:h-80",
    dots: "60% 45%",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-card", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-24 md:py-32" style={{ background: "#EFEDE7" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="section-chip mb-5">Selected Work</div>
            <h2
              style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
              className="text-4xl md:text-5xl text-[#1E2022] leading-[0.92] tracking-tight"
            >
              Ideas made
              <br />
              <span className="gradient-text">into reality.</span>
            </h2>
          </div>
          <p
            style={{ fontFamily: "var(--font-serif-var), serif", fontStyle: "italic" }}
            className="text-[rgba(30,32,34,0.5)] text-lg max-w-xs leading-relaxed md:text-right"
          >
            A glimpse at what&apos;s possible when disciplines converge.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <div key={i} className={`work-card rounded-xl ${p.span} ${p.height} relative overflow-hidden`}>
              {/* Placeholder visual — geometric */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="absolute rounded-full opacity-30"
                  style={{
                    width: "60%",
                    height: "60%",
                    background: `radial-gradient(circle, ${p.accent}40 0%, transparent 70%)`,
                    top: p.dots.split(" ")[0],
                    left: p.dots.split(" ")[1],
                    transform: "translate(-50%, -50%)",
                    filter: "blur(40px)",
                  }}
                />
                {/* Abstract geometric placeholder */}
                <div
                  className="relative border opacity-20"
                  style={{
                    width: "45%",
                    height: "45%",
                    borderColor: p.accent,
                    borderRadius: i % 2 === 0 ? "50%" : "4px",
                    transform: `rotate(${i * 15}deg)`,
                  }}
                />
                <div
                  className="absolute border opacity-10"
                  style={{
                    width: "30%",
                    height: "30%",
                    borderColor: p.accent,
                    borderRadius: i % 2 === 0 ? "4px" : "50%",
                    transform: `rotate(${-i * 10}deg)`,
                  }}
                />
              </div>

              {/* Category chip */}
              <div className="absolute top-5 left-5 z-10">
                <span
                  style={{ fontFamily: "var(--font-mono-var), monospace", background: "rgba(239,237,231,0.9)" }}
                  className="text-[9px] tracking-[0.18em] uppercase text-[rgba(30,32,34,0.6)] px-2.5 py-1 rounded-sm border border-[rgba(30,32,34,0.1)] backdrop-blur-sm"
                >
                  {p.category}
                </span>
              </div>

              {/* Overlay on hover */}
              <div className="work-overlay z-10">
                <h3
                  style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
                  className="text-lg text-[#1E2022] mb-1"
                >
                  {p.title}
                </h3>
                <p
                  style={{ fontFamily: "var(--font-mono-var), monospace" }}
                  className="text-[10px] tracking-[0.1em] text-[rgba(30,32,34,0.5)]"
                >
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p
            style={{ fontFamily: "var(--font-mono-var), monospace" }}
            className="text-[10px] tracking-[0.18em] uppercase text-[rgba(30,32,34,0.3)]"
          >
            Full portfolio available upon request
          </p>
        </div>
      </div>
    </section>
  );
}
