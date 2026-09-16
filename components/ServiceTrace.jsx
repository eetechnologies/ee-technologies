export default function ServiceTrace({ items }) {
  return (
    <ol className="relative border-l border-line pl-8 md:pl-10">
      {items.map((item, i) => (
        <li key={item.title} className="relative pb-12 last:pb-0">
          <span
            className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-orange bg-paper text-orange md:-left-[49px] md:h-9 md:w-9"
            aria-hidden="true"
          >
            <item.Icon className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
          </span>
          <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
          <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-ink/70">
            {item.description}
          </p>
          {item.points && (
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5 font-body text-sm text-ink/60">
              {item.points.map((p) => (
                <li key={p} className="trace-dot pl-3">{p}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
