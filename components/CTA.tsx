"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content > *", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-36 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 grid-bg opacity-30 pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="cta-content max-w-3xl mx-auto text-center">
          <div className="section-chip mb-8 justify-center">
            Start a Project
          </div>

          <h2
            style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
            className="text-4xl md:text-6xl lg:text-7xl text-[#1E2022] leading-[0.9] tracking-tight mb-6"
          >
            Ready to build
            <br />
            <span className="gradient-text">your future brand?</span>
          </h2>

          <p
            style={{ fontFamily: "var(--font-serif-var), serif", fontStyle: "italic" }}
            className="text-[rgba(30,32,34,0.5)] text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto"
          >
            The future doesn&apos;t wait. Let&apos;s build something that positions you a decade ahead of your competitors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="mailto:hello@creativefuturelabs.com" className="btn-primary text-sm">
              hello@creativefuturelabs.com
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
            <Link href="/about" className="btn-ghost text-sm">
              Learn About Us
            </Link>
          </div>

          {/* Divider with details */}
          <div className="border-t border-[rgba(30,32,34,0.08)] pt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {[
              { label: "Response Time", value: "< 24 hours" },
              { label: "Based In", value: "Sofia, Bulgaria" },
              { label: "Working With", value: "Global Clients" },
            ].map((d, i) => (
              <div key={i} className="text-center">
                <div
                  style={{ fontFamily: "var(--font-mono-var), monospace" }}
                  className="text-[9px] tracking-[0.2em] uppercase text-[rgba(30,32,34,0.3)] mb-1"
                >
                  {d.label}
                </div>
                <div
                  style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 700 }}
                  className="text-sm text-[rgba(30,32,34,0.7)]"
                >
                  {d.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
