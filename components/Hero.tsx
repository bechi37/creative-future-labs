"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(labelRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power2.out",
      })
        .from(
          [line1Ref.current, line2Ref.current, line3Ref.current],
          {
            opacity: 0,
            y: 60,
            skewY: 2,
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          subtitleRef.current,
          { opacity: 0, y: 20, duration: 0.7, ease: "power2.out" },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .from(
          scrollRef.current,
          { opacity: 0, y: 10, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
      style={{ paddingTop: "80px" }}
    >
      {/* Noise layer */}
      <div className="noise-layer pointer-events-none z-[1]" />

      {/* Ambient orbs */}
      <div
        className="hero-orb"
        style={{
          width: "60vw",
          height: "60vw",
          maxWidth: 700,
          maxHeight: 700,
          background: "radial-gradient(circle, rgba(30,32,34,0.06) 0%, transparent 70%)",
          top: "-15%",
          left: "-10%",
          animationDelay: "0s",
        }}
      />
      <div
        className="hero-orb"
        style={{
          width: "50vw",
          height: "50vw",
          maxWidth: 600,
          maxHeight: 600,
          background: "radial-gradient(circle, rgba(30,32,34,0.04) 0%, transparent 70%)",
          bottom: "-20%",
          right: "-5%",
          animationDelay: "-6s",
        }}
      />
      <div
        className="hero-orb"
        style={{
          width: "30vw",
          height: "30vw",
          maxWidth: 400,
          maxHeight: 400,
          background: "radial-gradient(circle, rgba(30,32,34,0.04) 0%, transparent 70%)",
          top: "30%",
          right: "15%",
          animationDelay: "-3s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        {/* Top label */}
        <div ref={labelRef} className="mb-8 md:mb-12">
          <div className="section-chip">
            Creative Studio × AI Lab — Sofia, Bulgaria
          </div>
        </div>

        {/* Giant headline */}
        <div className="mb-8 md:mb-10 overflow-hidden">
          <div
            style={{
              fontFamily: "var(--font-syne-var), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(4rem, 14vw, 16rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
            }}
          >
            <div className="overflow-hidden">
              <span ref={line1Ref} className="block text-[#1E2022]">
                CREATIVE
              </span>
            </div>
            <div className="overflow-hidden">
              <span ref={line2Ref} className="block text-outline" aria-hidden>
                FUTURE
              </span>
            </div>
            <div className="overflow-hidden">
              <span ref={line3Ref} className="block gradient-text">
                LABS
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle + CTAs side by side on desktop */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p
            ref={subtitleRef}
            style={{ fontFamily: "var(--font-serif-var), serif", fontStyle: "italic" }}
            className="text-xl md:text-2xl text-[rgba(30,32,34,0.6)] max-w-md leading-relaxed"
          >
            We don&apos;t just create content —<br />
            we design the future of your brand.
          </p>

          <div ref={ctaRef} className="flex items-center gap-4 shrink-0">
            <Link href="/#contact" className="btn-primary">
              Start a Project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
            <Link href="/#work" className="btn-ghost">
              See Our Work
            </Link>
          </div>
        </div>

        {/* Stats row at bottom */}
        <div className="mt-16 md:mt-24 grid grid-cols-3 gap-4 md:gap-0 border-t border-[rgba(30,32,34,0.1)] pt-8">
          {[
            { num: "47+", label: "Projects Delivered" },
            { num: "3", label: "Core Disciplines" },
            { num: "100%", label: "Digital Native" },
          ].map((s, i) => (
            <div key={i} className={`${i > 0 ? "md:border-l border-[rgba(30,32,34,0.1)] md:pl-10" : ""}`}>
              <div
                style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
                className="text-2xl md:text-3xl text-[#1E2022] mb-1"
              >
                {s.num}
              </div>
              <div
                style={{ fontFamily: "var(--font-mono-var), monospace" }}
                className="text-[10px] tracking-[0.15em] uppercase text-[rgba(30,32,34,0.35)]"
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span
          style={{ fontFamily: "var(--font-mono-var), monospace" }}
          className="text-[9px] tracking-[0.25em] uppercase text-[rgba(30,32,34,0.3)]"
        >
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[rgba(30,32,34,0.5)] to-transparent" />
      </div>
    </section>
  );
}
