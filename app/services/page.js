import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceTrace from "@/components/ServiceTrace";
import { IconBoard, IconShield, IconSolarPanel, IconMeter, IconWiring } from "@/components/icons";

export const metadata = {
  title: "Services | E & E Technologies",
};

const electricalServices = [
  {
    title: "General electrical inspection",
    Icon: IconBoard,
    description:
      "A full visual and functional check of your home or business's wiring, sockets, and distribution board — catching wear, faults, and safety issues.",
    points: ["Wiring & circuit checks", "Distribution board inspection", "Fault identification"],
  },
  {
    title: "Pre-purchase / compliance inspection",
    Icon: IconShield,
    description:
      "An independent inspection before you buy a property, rent it out, or need to confirm the electrical system meets code.",
    points: ["Condition report", "Compliance check", "Written findings"],
  },
];

const solarServices = [
  {
    title: "Solar system inspection",
    Icon: IconSolarPanel,
    description:
      "A check of panels, mounting, cabling, and isolators for damage, wear, or installation issues — for new or existing systems.",
    points: ["Panel & mounting check", "Cabling & isolator check", "Visual condition report"],
  },
  {
    title: "Performance & fault inspection",
    Icon: IconMeter,
    description:
      "For systems that seem to be underperforming — checking inverter operation, output, and connections to find out why.",
    points: ["Inverter check", "Output assessment", "Fault diagnosis"],
  },
  {
    title: "Pre-purchase solar inspection",
    Icon: IconWiring,
    description:
      "An independent check of an existing solar system before you buy a property that already has one installed.",
    points: ["Condition report", "Fault flagging", "Written findings"],
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Electrical and solar inspections, done properly."
        description="Two inspection services, handled by the same team — clear findings and practical recommendations, not a sales pitch."
      />

      <section className="mx-auto max-w-content px-6 py-16">
        <h2 className="font-display text-2xl font-semibold text-navy">Electrical inspection</h2>
        <div className="mt-10">
          <ServiceTrace items={electricalServices} />
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-content px-6 py-16">
          <h2 className="font-display text-2xl font-semibold text-navy">Solar inspection</h2>
          <div className="mt-10">
            <ServiceTrace items={solarServices} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-white px-8 py-10 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <IconMeter className="h-9 w-9 text-orange" style={{ width: 32, height: 32 }} />
            <div>
              <h2 className="font-display text-xl font-semibold text-navy">
                Not sure which inspection you need?
              </h2>
              <p className="mt-1 font-body text-sm text-ink/65">
                Describe the property or the concern and we'll point you in the right direction.
              </p>
            </div>
          </div>
          <Link
            href="/booking"
            className="shrink-0 rounded-full bg-orange px-6 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-orange-dark"
          >
            Request an inspection
          </Link>
        </div>
      </section>
    </>
  );
}
