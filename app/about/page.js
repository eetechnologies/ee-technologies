import PageHero from "@/components/PageHero";
import { IconShield, IconMeter, IconSolarPanel, IconBoard } from "@/components/icons";

export const metadata = {
  title: "About | E & E Technologies",
};

const values = [
  {
    Icon: IconShield,
    title: "Safety comes first",
    body: "Every inspection follows a proper safety process — we don't cut corners around live electricity.",
  },
  {
    Icon: IconMeter,
    title: "Honest findings",
    body: "We report what we actually find, not what's easiest to tell you — clear results and next steps.",
  },
  {
    Icon: IconSolarPanel,
    title: "Independent assessment",
    body: "We check systems against how they're actually installed and used, not guesswork or assumptions.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Electrical and solar inspections, handled properly."
        description="E & E Technologies is a Sri Lanka-based team focused on two things: electrical inspections and solar inspections."
      />

      <section className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
          <div className="max-w-lg font-body text-ink/75">
            <p>
              We started E &amp; E Technologies to bring a straightforward approach to two
              things that are often overlooked — checking that electrical systems and solar
              installations are actually safe, compliant, and performing the way they should.
            </p>
            <p className="mt-4">
              Whether it&apos;s a routine safety check, a pre-purchase inspection, or working
              out why a solar system is underperforming, we walk you through what we found
              and what it will cost before the inspection begins.
            </p>
            <p className="mt-4">
              {/* TODO: swap in real founding story, team size, years active, certifications, etc. */}
              This page is a starting point — replace this section with your team's real
              background, certifications, and story.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {values.map(({ Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <Icon className="h-9 w-9 shrink-0 text-orange" style={{ width: 32, height: 32 }} />
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy">{title}</h3>
                  <p className="mt-1 font-body text-sm text-ink/65">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-content px-6 py-16">
          <div className="flex items-center gap-3">
            <IconBoard className="h-7 w-7 text-navy" style={{ width: 26, height: 26 }} />
            <h2 className="font-display text-2xl font-semibold text-navy">
              How an inspection usually goes
            </h2>
          </div>
          <ol className="mt-8 grid gap-8 md:grid-cols-4">
            {[
              ["Get in touch", "Tell us about the property and what you'd like inspected."],
              ["Quote & booking", "You get a clear price and confirm your slot with the booking payment."],
              ["Site visit", "We visit the property to inspect the wiring or solar system directly."],
              ["Report", "You get a written report with findings and any recommendations."],
            ].map(([title, body], i) => (
              <li key={title} className="border-l-2 border-orange pl-4">
                <p className="font-display text-sm text-orange">{`0${i + 1}`}</p>
                <p className="mt-1 font-display text-base font-semibold text-navy">{title}</p>
                <p className="mt-1.5 font-body text-sm text-ink/65">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
