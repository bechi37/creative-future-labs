const items = [
  "Visual Realism",
  "3D Design",
  "AI Automation",
  "Video Production",
  "Brand Identity",
  "Digital Evolution",
  "Blender",
  "Photoshop",
  "Claude AI",
];

const separator = (
  <span
    className="mx-6 text-[#1E2022] text-lg"
    aria-hidden
    style={{ fontFamily: "var(--font-mono-var), monospace" }}
  >
    ×
  </span>
);

export default function MarqueeBand() {
  const repeated = [...items, ...items];

  return (
    <div
      className="py-4 overflow-hidden border-y border-[rgba(30,32,34,0.08)] relative"
      style={{ background: "#EFEDE7" }}
    >
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              style={{ fontFamily: "var(--font-mono-var), monospace" }}
              className="text-[11px] tracking-[0.2em] uppercase text-[rgba(30,32,34,0.45)] whitespace-nowrap"
            >
              {item}
            </span>
            {separator}
          </span>
        ))}
      </div>
    </div>
  );
}
