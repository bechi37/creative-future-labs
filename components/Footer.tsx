import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-[rgba(30,32,34,0.08)] py-14 md:py-16"
      style={{ background: "#EFEDE7" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/cfl-logo-dark.png"
                alt="Creative Future Labs"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p
              style={{ fontFamily: "var(--font-serif-var), serif", fontStyle: "italic" }}
              className="text-[rgba(30,32,34,0.45)] text-sm leading-relaxed max-w-[220px]"
            >
              Designing the digital evolution of your business.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{ fontFamily: "var(--font-mono-var), monospace" }}
              className="text-[9px] tracking-[0.22em] uppercase text-[rgba(30,32,34,0.35)] mb-4"
            >
              Navigation
            </p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ fontFamily: "var(--font-mono-var), monospace" }}
                  className="text-[11px] tracking-[0.12em] uppercase text-[rgba(30,32,34,0.45)] hover:text-[#1E2022] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{ fontFamily: "var(--font-mono-var), monospace" }}
              className="text-[9px] tracking-[0.22em] uppercase text-[rgba(30,32,34,0.35)] mb-4"
            >
              Contact
            </p>
            <a
              href="mailto:hello@creativefuturelabs.com"
              style={{ fontFamily: "var(--font-mono-var), monospace" }}
              className="block text-[11px] tracking-[0.06em] text-[rgba(30,32,34,0.55)] hover:text-[#1E2022] transition-colors mb-2"
            >
              hello@creativefuturelabs.com
            </a>
            <p
              style={{ fontFamily: "var(--font-mono-var), monospace" }}
              className="text-[10px] tracking-[0.12em] text-[rgba(30,32,34,0.35)]"
            >
              Sofia, Bulgaria
            </p>
            <div className="flex gap-5 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  style={{ fontFamily: "var(--font-mono-var), monospace" }}
                  className="text-[9px] tracking-[0.18em] uppercase text-[rgba(30,32,34,0.35)] hover:text-[#1E2022] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(30,32,34,0.06)] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            style={{ fontFamily: "var(--font-mono-var), monospace" }}
            className="text-[9px] tracking-[0.14em] uppercase text-[rgba(30,32,34,0.3)]"
          >
            © 2026 Creative Future Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1E2022] animate-pulse" />
            <span
              style={{ fontFamily: "var(--font-mono-var), monospace" }}
              className="text-[9px] tracking-[0.18em] uppercase text-[rgba(30,32,34,0.3)]"
            >
              VISUALS · AI · AUTOMATION
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
