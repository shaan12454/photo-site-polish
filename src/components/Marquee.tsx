export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink-10 py-8">
      <div className="marquee-track display text-[clamp(3rem,9vw,9rem)] text-ink">
        {loop.map((it, i) => (
          <span key={i} className="flex items-center gap-16">
            {it}
            <span className="text-lime">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
