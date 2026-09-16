import Link from "next/link";
import ServiceTrace from "@/components/ServiceTrace";
import { IconBoard, IconSolarPanel, IconMeter, IconShield } from "@/components/icons";

const homeServices = [
  {
    title: "Electrical inspection",
    Icon: IconBoard,
    description:
      "A full check of your home or business's wiring, sockets, and distribution board — catching faults, wear, and safety issues before they become a problem.",
    points: ["Wiring & circuit checks", "Distribution board inspection", "Safety & compliance report"],
  },
  {
    title: "Solar inspection",
    Icon: IconSolarPanel,
    description:
      "An independent check of your rooftop solar system's panels, mounting, wiring, and performance — whether it's new, ageing, or underperforming.",
    points: ["Panel & mounting check", "Inverter & wiring inspection", "Performance assessment"],
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-ink text-white">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
          viewBox="0 0 1200 700"
          fill="none"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden="true"
        >
          <path d="M700 0v120h180v140h260M900 700V520H740V360" stroke="#F5924A" strokeWidth="2" />
          <path d="M1000 0v80h-120v160h-160v100h220v180" stroke="#F5924A" strokeWidth="2" />
          <circle cx="880" cy="120" r="5" fill="#F5924A" />
          <circle cx="1060" cy="80" r="5" fill="#F5924A" />
          <circle cx="900" cy="700" r="5" fill="#F5924A" />
          <circle cx="740" cy="260" r="5" fill="#F5924A" />
        </svg>

        <div className="relative mx-auto grid max-w-content gap-10 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div>
            <p className="font-body text-sm text-orange-light">E &amp; E Technologies</p>
            <h1 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-[1.08] md:text-5xl">
              Electrical and solar inspections you don&apos;t have to second-guess.
            </h1>
            <p className="mt-5 max-w-md font-body text-white/70">
              We carry out electrical and solar inspections for homes and small businesses —
              clear findings, honest reporting, and practical next steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="rounded-full bg-orange px-6 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-orange-dark"
              >
                Book an inspection
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/25 px-6 py-3 font-body text-sm font-medium text-white/90 transition-colors hover:border-white/50"
              >
                See what we do
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-end gap-4 self-end">
            {[
              ["Electrical inspection", "Wiring, distribution boards, safety & compliance"],
              ["Solar inspection", "Panels, inverters, wiring & performance"],
              ["Clear reporting", "A written report with findings, not just a verdict"],
            ].map(([title, sub]) => (
              <div key={title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="font-display text-base font-semibold">{title}</p>
                <p className="mt-1 font-body text-sm text-white/60">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-20">
        <div className="max-w-xl">
          <p className="font-body text-sm text-orange">What we do</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-navy">
            Two inspections, one clear report.
          </h2>
        </div>
        <div className="mt-12">
          <ServiceTrace items={homeServices} />
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-content gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-body text-sm text-orange">Why work with us</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-navy">
              We explain the findings before we call it done.
            </h2>
            <p className="mt-4 font-body text-ink/70">
              You&apos;ll get a clear scope and a price before we visit, and a plain-language
              report once the inspection is complete — no surprises either way.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              [IconShield, "Safety first", "Circuits and systems are checked thoroughly and safely, every time — no shortcuts around live electricity."],
              [IconMeter, "Clear reporting", "You get a straightforward written report, not just a verbal pass or fail."],
              [IconSolarPanel, "Independent assessment", "We inspect what's actually installed and tell you honestly what needs attention."],
              [IconBoard, "Local availability", "Based in Sri Lanka, available for both electrical and solar inspections."],
            ].map(([Icon, title, body]) => (
              <div key={title}>
                <Icon className="h-8 w-8 text-orange" style={{ width: 28, height: 28 }} />
                <p className="mt-3 font-display text-base font-semibold text-navy">{title}</p>
                <p className="mt-1.5 font-body text-sm text-ink/65">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-navy px-8 py-12 text-white md:flex-row md:items-center md:px-12">
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Need an electrical or solar inspection?
            </h2>
            <p className="mt-2 max-w-md font-body text-white/70">
              Tell us about the property and what you&apos;d like inspected — we&apos;ll get
              back to you with a quote.
            </p>
          </div>
          <Link
            href="/booking"
            className="shrink-0 rounded-full bg-orange px-7 py-3.5 font-body text-sm font-medium text-white transition-colors hover:bg-orange-dark"
          >
            Request an inspection
          </Link>
        </div>
      </section>
    </>
  );
}
