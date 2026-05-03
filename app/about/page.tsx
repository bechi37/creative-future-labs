"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    num: "01",
    title: "Precision",
    description:
      "Every pixel, every frame, every automation — engineered with obsessive attention to detail. We don't approximate. We execute.",
  },
  {
    num: "02",
    title: "Innovation",
    description:
      "We use tools that most studios haven't adopted yet. 3D rendering workflows powered by AI. Automation pipelines that didn't exist 2 years ago.",
  },
  {
    num: "03",
    title: "Impact",
    description:
      "Beautiful work that doesn't convert is decoration. Every project is measured against a single standard: did it move the business forward?",
  },
];

const team = [
  {
    name: "[Team Member]",
    role: "Creative Director / 3D",
    initials: "CD",
  },
  {
    name: "[Team Member]",
    role: "AI Systems & Automation",
    initials: "AI",
  },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 35,
        duration: 0.75,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-story",
          start: "top 82%",
        },
      });

      gsap.from(".value-card", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 82%",
        },
      });

      gsap.from(".team-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 84%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="overflow-hidden">
      {/* ── Hero ──────────────────────────────────── */}
      <section
        className="min-h-screen flex flex-col justify-end pb-20 md:pb-28 relative overflow-hidden grid-bg"
        style={{ paddingTop: "80px" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 50% at 60% 40%, rgba(124,92,252,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-10">
          <div className="section-chip mb-8">Our Story</div>

          <h1
            style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
            className="text-5xl md:text-8xl lg:text-[10vw] text-[#EAE8E2] leading-[0.88] tracking-tight mb-10"
          >
            WE EXIST
            <br />
            <span className="text-outline">TO PUSH</span>
            <br />
            <span className="gradient-text">LIMITS.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <p
              style={{ fontFamily: "var(--font-serif-var), serif" }}
              className="text-[rgba(234,232,226,0.6)] text-lg leading-relaxed"
            >
              Creative Future Labs is a hybrid studio born from the belief that the future of branding lives at the intersection of human artistry and machine intelligence.
            </p>
            <p
              style={{ fontFamily: "var(--font-serif-var), serif" }}
              className="text-[rgba(234,232,226,0.4)] text-base leading-relaxed"
            >
              We&apos;re not an agency. We&apos;re not a tech company. We&apos;re a lab — a place where ideas are tested, refined, and deployed at scale.
            </p>
          </div>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────── */}
      <section
        className="about-story py-24 md:py-32"
        style={{ background: "#0D0D20" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left: Story text */}
            <div>
              <div className="section-chip mb-6 about-reveal">The Origin</div>

              <h2
                style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
                className="text-3xl md:text-4xl text-[#EAE8E2] leading-[0.95] tracking-tight mb-6 about-reveal"
              >
                Built by a brother duo.
                <br />
                <span
                  style={{ fontFamily: "var(--font-serif-var), serif", fontStyle: "italic", fontWeight: 400 }}
                  className="text-[rgba(234,232,226,0.55)]"
                >
                  Driven by one obsession.
                </span>
              </h2>

              <div
                style={{ fontFamily: "var(--font-serif-var), serif" }}
                className="text-[rgba(234,232,226,0.55)] text-base leading-[1.85] space-y-4 about-reveal"
              >
                <p>
                  Creative Future Labs was founded by two brothers who grew up watching businesses fail not because of bad products, but because of bad presentation. The world was moving toward AI and immersive visuals — but most brands were still stuck in 2015.
                </p>
                <p>
                  One of us mastered the craft side: 3D modeling in Blender, motion design, visual storytelling. The other dove deep into AI infrastructure — building automation pipelines, learning Claude inside out, engineering systems that could scale what used to require entire teams.
                </p>
                <p>
                  We realized that the most dangerous combination in branding wasn&apos;t just &quot;creative and smart.&quot; It was <em>creative AND intelligent systems that amplify the creative.</em>
                </p>
                <p>
                  That realization became Creative Future Labs.
                </p>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative about-reveal">
              <div
                className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)]"
                style={{ background: "#06060F", aspectRatio: "4/5" }}
              >
                {/* Abstract placeholder visual */}
                <div className="absolute inset-0 grid-bg opacity-60" />
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "70%",
                    height: "70%",
                    background: "radial-gradient(circle, rgba(124,92,252,0.2) 0%, transparent 70%)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    filter: "blur(50px)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/cfl-logo.png"
                    alt="Creative Future Labs"
                    width={240}
                    height={120}
                    className="w-3/5 opacity-40 object-contain"
                  />
                </div>
                <div
                  className="absolute bottom-6 left-6 right-6 border-t border-[rgba(255,255,255,0.06)] pt-4"
                >
                  <p
                    style={{ fontFamily: "var(--font-mono-var), monospace" }}
                    className="text-[9px] tracking-[0.2em] uppercase text-[rgba(234,232,226,0.25)]"
                  >
                    Est. 2024 · Sofia, Bulgaria
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 rounded-xl border border-[rgba(124,92,252,0.3)] px-4 py-3"
                style={{ background: "#0D0D20" }}
              >
                <p
                  style={{ fontFamily: "var(--font-mono-var), monospace" }}
                  className="text-[9px] tracking-[0.15em] uppercase text-[#7C5CFC]"
                >
                  Hybrid Studio
                </p>
                <p
                  style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
                  className="text-white text-sm"
                >
                  Art × AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────── */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="section-chip mb-10">Our Mission</div>

          <div className="relative">
            {/* Large background text */}
            <div
              className="absolute -top-8 -left-4 opacity-[0.03] select-none pointer-events-none"
              style={{
                fontFamily: "var(--font-syne-var), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(6rem, 20vw, 22rem)",
                lineHeight: 0.85,
                color: "#7C5CFC",
                whiteSpace: "nowrap",
              }}
              aria-hidden
            >
              FUTURE
            </div>

            <blockquote
              style={{ fontFamily: "var(--font-serif-var), serif", fontStyle: "italic" }}
              className="text-3xl md:text-4xl lg:text-5xl text-[rgba(234,232,226,0.85)] leading-[1.25] max-w-4xl relative z-10"
            >
              &quot;To give every business the visual power and intelligent infrastructure of the world&apos;s most admired brands — regardless of their size.&quot;
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#7C5CFC]" />
              <span
                style={{ fontFamily: "var(--font-mono-var), monospace" }}
                className="text-[10px] tracking-[0.2em] uppercase text-[rgba(234,232,226,0.3)]"
              >
                Creative Future Labs Mission Statement
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ background: "#0D0D20" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="section-chip mb-8">Core Values</div>
          <h2
            style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
            className="text-3xl md:text-5xl text-[#EAE8E2] leading-[0.92] tracking-tight mb-14 md:mb-20"
          >
            What we stand for.
          </h2>

          <div className="values-grid grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div
                key={v.num}
                className="value-card service-card rounded-xl p-8 md:p-10"
                style={{ background: "#06060F" }}
              >
                <span
                  style={{ fontFamily: "var(--font-mono-var), monospace" }}
                  className="text-[10px] tracking-[0.18em] text-[#F0C040] block mb-6"
                >
                  {v.num}
                </span>
                <h3
                  style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
                  className="text-2xl md:text-3xl text-[#EAE8E2] mb-4 leading-tight"
                >
                  {v.title}
                </h3>
                <p
                  style={{ fontFamily: "var(--font-serif-var), serif" }}
                  className="text-[rgba(234,232,226,0.5)] text-base leading-relaxed"
                >
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="section-chip mb-8">The Team</div>
          <h2
            style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
            className="text-3xl md:text-5xl text-[#EAE8E2] leading-[0.92] tracking-tight mb-14 md:mb-20"
          >
            Small team.
            <br />
            <span className="gradient-text">Outsized results.</span>
          </h2>

          <div className="team-grid grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
            {team.map((member, i) => (
              <div
                key={i}
                className="team-card service-card rounded-xl p-8 flex items-center gap-6"
                style={{ background: "#0D0D20" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "var(--accent-dim)", border: "1px solid rgba(124,92,252,0.3)" }}
                >
                  <span
                    style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
                    className="text-[#7C5CFC] text-sm"
                  >
                    {member.initials}
                  </span>
                </div>
                <div>
                  <h4
                    style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 700 }}
                    className="text-[rgba(234,232,226,0.7)] text-base mb-1"
                  >
                    {member.name}
                  </h4>
                  <p
                    style={{ fontFamily: "var(--font-mono-var), monospace" }}
                    className="text-[10px] tracking-[0.14em] uppercase text-[rgba(234,232,226,0.3)]"
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────── */}
      <section className="py-20 md:py-28 text-center" style={{ background: "#0D0D20" }}>
        <div className="max-w-xl mx-auto px-6">
          <div className="section-chip mb-6 justify-center">Work With Us</div>
          <h2
            style={{ fontFamily: "var(--font-syne-var), sans-serif", fontWeight: 800 }}
            className="text-3xl md:text-4xl text-[#EAE8E2] leading-[0.92] tracking-tight mb-5"
          >
            The future is designed here.
          </h2>
          <p
            style={{ fontFamily: "var(--font-serif-var), serif", fontStyle: "italic" }}
            className="text-[rgba(234,232,226,0.45)] text-lg mb-8"
          >
            Ready to become our next story?
          </p>
          <Link href="/#contact" className="btn-primary">
            Start a Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
