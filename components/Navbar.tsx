"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.services, href: "/#services" },
    { label: t.work, href: "/#work" },
    { label: t.about, href: "/about" },
    { label: t.contact, href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F7F6F2]/92 backdrop-blur-xl border-b border-[rgba(30,32,34,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/cfl-logo-dark.png"
            alt="Creative Future Labs"
            width={160}
            height={40}
            className="h-8 md:h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontFamily: "var(--font-mono-var), monospace" }}
              className="text-[10px] tracking-[0.18em] uppercase text-[rgba(30,32,34,0.42)] hover:text-[#1E2022] transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side: lang toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div
            className="hidden md:flex items-center rounded-full border border-[rgba(30,32,34,0.12)] overflow-hidden"
            style={{ background: "rgba(239,237,231,0.9)" }}
          >
            {(["en", "bg"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{ fontFamily: "var(--font-mono-var), monospace" }}
                className={`text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 transition-all duration-200 ${
                  lang === l
                    ? "bg-[#1E2022] text-white"
                    : "text-[rgba(30,32,34,0.4)] hover:text-[#1E2022]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <Link
            href="/#contact"
            className="hidden md:inline-flex btn-primary py-2.5 px-5 text-[10px]"
          >
            {t.cta}
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#1E2022] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 space-y-1.5">
              <div className="h-[1.5px] bg-current transition-all" style={{ transform: menuOpen ? "rotate(45deg) translate(2px, 4px)" : "none" }} />
              <div className="h-[1.5px] bg-current transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
              <div className="h-[1.5px] bg-current transition-all" style={{ transform: menuOpen ? "rotate(-45deg) translate(2px, -4px)" : "none" }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 border-b border-[rgba(30,32,34,0.08)]" : "max-h-0"
        }`}
        style={{ background: "#EFEDE7" }}
      >
        <div className="px-5 py-5 flex flex-col gap-4">
          {/* Mobile lang toggle */}
          <div className="flex gap-2">
            {(["en", "bg"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{ fontFamily: "var(--font-mono-var), monospace" }}
                className={`text-[10px] tracking-[0.12em] uppercase px-4 py-1.5 rounded-full border transition-all ${
                  lang === l
                    ? "bg-[#1E2022] text-white border-[#1E2022]"
                    : "text-[rgba(30,32,34,0.4)] border-[rgba(30,32,34,0.15)]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "var(--font-mono-var), monospace" }}
              className="text-[11px] tracking-[0.15em] uppercase text-[rgba(30,32,34,0.5)] hover:text-[#1E2022] transition-colors py-1 border-b border-[rgba(30,32,34,0.06)] last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setMenuOpen(false)} className="btn-primary text-center mt-1 text-[10px]">
            {t.cta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
