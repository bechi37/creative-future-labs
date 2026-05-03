"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 47, suffix: "+", label: "Projects Delivered", description: "Across 3D, video, and AI disciplines" },
  { value: 3, suffix: "", label: "Core Disciplines", description: "Visual, dynamic, and intelligent" },
  { value: 100, suffix: "%", label: "Digital Native", description: "Born for the new era of branding" },
  { value: 24, suffix: "/7", label: "AI Systems Active", description: "Automations that never sleep" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = numRefs.current[i];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 1.6,
          ease: "power2.out",
          delay: i * 0.1,
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + stat.suffix;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.from(".stat-item", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="stat-item"
              style={{
                borderLeft: i > 0 ? "1px solid rgba(30,32,34,0.1)" : "none",
                paddingLeft: i > 0 ? "2rem" : "0",
              }}
            >
              <div className="stat-num mb-2">
                <span ref={(el) => { numRefs.current[i] = el; }}>0{s.suffix}</span>
              </div>
              <div
                style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 700 }}
                className="text-sm md:text-base text-[#1E2022] mb-1"
              >
                {s.label}
              </div>
              <p
                style={{ fontFamily: "var(--font-mono-var), monospace" }}
                className="text-[9px] md:text-[10px] tracking-[0.12em] text-[rgba(30,32,34,0.35)] uppercase"
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
