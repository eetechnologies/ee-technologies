import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Pricing | E & E Technologies",
};

const electricalPackages = [
  {
    name: "Single-phase inspection",
    range: "LKR 6,000",
    blurb: "For standard single-phase electrical systems — most homes and small units.",
    points: ["Wiring & circuit checks", "Distribution board inspection", "Written report"],
    highlighted: true,
  },
  {
    name: "Three-phase inspection",
    range: "LKR 9,000",
    blurb: "For three-phase electrical systems, typically larger homes, workshops, or small commercial units.",
    points: ["Full circuit & board inspection", "Load balancing check", "Written report"],
  },
  {
    name: "Large building inspection",
    range: "Custom quote",
    blurb: "For large residential or commercial buildings with multiple boards or extensive wiring.",
    points: ["Multi-board inspection", "Scoped to building size", "Detailed report"],
  },
];

const solarPackages = [
  {
    name: "Single-phase solar (up to 5kW)",
    range: "LKR 6,000",
    blurb: "For single-phase solar systems up to 5kW — typical for most households.",
    points: ["Panel & mounting check", "Inverter & cabling check", "Written report"],
    highlighted: true,
  },
  {
    name: "Three-phase solar (up to 5kW)",
    range: "LKR 9,000",
    blurb: "For three-phase solar systems up to 5kW.",
    points: ["Panel & mounting check", "Inverter & cabling check", "Written report"],
  },
  {
    name: "Three-phase solar (above 5kW)",
    range: "Custom quote",
    blurb: "For larger three-phase solar systems above 5kW, typically commercial-scale installations.",
    points: ["Full system inspection", "Performance assessment", "Detailed report"],
  },
];

function PackageGrid({ packages }) {
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
          <Link
            href="/booking"
            className="mt-6 rounded-full bg-navy px-5 py-2.5 text-center font-body text-sm font-medium text-white transition-colors hover:bg-navy-light"
          >
            Request this quote
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Typical inspection pricing, so you know what to expect."
        description="Every property is different, so these are starting ranges — the final price is confirmed after we've seen the site or your photos."
      />

      <section className="mx-auto max-w-content px-6 py-16">
        <h2 className="font-display text-2xl font-semibold text-navy">Electrical inspection</h2>
        <div className="mt-8">
          <PackageGrid packages={electricalPackages} />
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-content px-6 py-16">
          <h2 className="font-display text-2xl font-semibold text-navy">Solar inspection</h2>
          <div className="mt-8">
            <PackageGrid packages={solarPackages} />
          </div>
          <p className="mt-10 max-w-2xl font-body text-sm text-ink/55">
            Prices above are starting figures — the final price can vary based on property
            size, system size, and how detailed a report you need.
          </p>
        </div>
      </section>
    </>
  );
}
