"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L26 8V20L14 26L2 20V8L14 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M14 2V26M2 8L26 20M26 8L2 20" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
      </svg>
    ),
    title: "Visual Realism",
    subtitle: "3D Design & Rendering",
    description:
      "Precision 3D modeling and photorealistic rendering using Blender and Photoshop. We breathe life into objects, products, and spaces that don't yet exist — or haven't been seen this beautifully.",
    tags: ["Blender", "Photoshop", "3D Modeling", "Product Viz", "Architecture Viz"],
    color: "rgba(30,32,34,0.06)",
    border: "rgba(30,32,34,0.2)",
  },
  {
    num: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="6" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M11 10L17 14L11 18V10Z" fill="currentColor" opacity="0.7"/>
        <path d="M2 22L8 17M26 22L20 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    title: "Dynamic Content",
    subtitle: "Video & AI Visuals",
    subtitle2: "",
    description:
      "High-impact video production and AI-generated visuals crafted to capture attention in the first second. From brand films to social content — every frame designed to convert.",
    tags: ["Video Editing", "Motion Graphics", "AI Generation", "Brand Films", "Social Content"],
    color: "rgba(30,32,34,0.04)",
    border: "rgba(30,32,34,0.15)",
  },
  {
    num: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="3" fill="currentColor" opacity="0.8"/>
        <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M14 2V7M14 21V26M2 14H7M21 14H26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
        <path d="M5.5 5.5L9 9M19 19L22.5 22.5M22.5 5.5L19 9M9 19L5.5 22.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
      </svg>
    ),
    title: "Intelligent Systems",
    subtitle: "AI Automation",
    description:
      "Claude-powered automation integrations that optimize your workflows and scale your marketing with ease. Intelligent systems that work 24/7 — so you don't have to.",
    tags: ["Claude AI", "Automation", "Workflow Optimization", "Marketing AI", "Lead Generation"],
    color: "rgba(30,32,34,0.04)",
    border: "rgba(30,32,34,0.15)",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div ref={headerRef} className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="section-chip mb-5">What We Create</div>
            <h2
              style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
              className="text-4xl md:text-6xl text-[#1E2022] leading-[0.92] tracking-tight"
            >
              Three disciplines.
              <br />
              <span className="gradient-text">One vision.</span>
            </h2>
          </div>
          <p
            style={{ fontFamily: "var(--font-serif-var), serif", fontStyle: "italic" }}
            className="text-[rgba(30,32,34,0.5)] text-lg md:text-xl max-w-xs leading-relaxed md:text-right"
          >
            Beauty meets intelligence — every project delivered with both.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {services.map((s, i) => (
            <div
              key={s.num}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="service-card rounded-xl p-8 md:p-10 flex flex-col relative overflow-hidden"
              style={{ background: "#EFEDE7" }}
            >
              {/* Subtle glow on hover via CSS */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 pointer-events-none transition-opacity duration-300"
                style={{ background: `radial-gradient(ellipse at 30% 30%, ${s.color}, transparent 70%)` }}
                data-hover-glow
              />

              {/* Number + Icon */}
              <div className="flex items-start justify-between mb-8">
                <span
                  style={{ fontFamily: "var(--font-mono-var), monospace" }}
                  className="text-[11px] tracking-[0.15em] text-[rgba(30,32,34,0.4)]"
                >
                  {s.num}
                </span>
                <div className="text-[rgba(30,32,34,0.4)]">{s.icon}</div>
              </div>

              {/* Title */}
              <h3
                style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
                className="text-2xl md:text-3xl text-[#1E2022] mb-1 leading-tight"
              >
                {s.title}
              </h3>
              <p
                style={{ fontFamily: "var(--font-mono-var), monospace" }}
                className="text-[10px] tracking-[0.18em] uppercase text-[rgba(30,32,34,0.35)] mb-5"
              >
                {s.subtitle}
              </p>

              {/* Description */}
              <p
                style={{ fontFamily: "var(--font-serif-var), serif" }}
                className="text-[rgba(30,32,34,0.55)] text-base leading-relaxed mb-7 flex-1"
              >
                {s.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    style={{ fontFamily: "var(--font-mono-var), monospace" }}
                    className="text-[9px] tracking-[0.12em] uppercase text-[rgba(30,32,34,0.4)] border border-[rgba(30,32,34,0.12)] px-2.5 py-1 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link href="/#contact" className="link-underline mt-auto">
                Get Started →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
