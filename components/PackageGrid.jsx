import Link from "next/link";

export default function PackageGrid({ packages, hideCta }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {packages.map((pkg) => (
        <div
          key={pkg.name}
          className={`flex flex-col rounded-2xl border p-7 ${
            pkg.highlighted ? "border-orange bg-white shadow-[0_0_0_1px_theme(colors.orange.DEFAULT)]" : "border-line bg-white"
          }`}
        >
          <h3 className="font-display text-lg font-semibold text-navy">{pkg.name}</h3>
          <p className="mt-1 font-display text-2xl font-semibold text-orange">{pkg.range}</p>
          <p className="mt-3 font-body text-sm text-ink/65">{pkg.blurb}</p>
          <ul className="mt-5 flex-1 space-y-2 font-body text-sm text-ink/70">
            {pkg.points.map((p) => (
              <li key={p} className="trace-dot pl-3">{p}</li>
            ))}
          </ul>
          {!hideCta && (
            <Link
              href="/booking"
              className="mt-6 rounded-full bg-navy px-5 py-2.5 text-center font-body text-sm font-medium text-white transition-colors hover:bg-navy-light"
            >
              Request this quote
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
