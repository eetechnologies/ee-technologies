import Link from "next/link";
import PageHero from "@/components/PageHero";
import { IconMeter, IconWiring, IconBoard } from "@/components/icons";

export const metadata = {
  title: "Contact | E & E Technologies",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Call, email, or send a quote request — whichever's easiest."
      />

      <section className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            {/* TODO: replace with real contact details */}
            <div className="flex items-start gap-4">
              <IconBoard className="h-8 w-8 shrink-0 text-orange" style={{ width: 28, height: 28 }} />
              <div>
                <p className="font-display text-base font-semibold text-navy">Phone</p>
                <p className="font-body text-sm text-ink/65">+94 7X XXX XXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <IconMeter className="h-8 w-8 shrink-0 text-orange" style={{ width: 28, height: 28 }} />
              <div>
                <p className="font-display text-base font-semibold text-navy">Email</p>
                <p className="font-body text-sm text-ink/65">info@eetechnologies.lk</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <IconWiring className="h-8 w-8 shrink-0 text-orange" style={{ width: 28, height: 28 }} />
              <div>
                <p className="font-display text-base font-semibold text-navy">Service area</p>
                <p className="font-body text-sm text-ink/65">Colombo and surrounding areas</p>
              </div>
            </div>

            <Link
              href="/booking"
              className="mt-4 inline-block rounded-full bg-navy px-6 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-navy-light"
            >
              Request an inspection instead
            </Link>
          </div>

          <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-line bg-white font-body text-sm text-ink/40">
            Map placeholder — embed your Google Maps location here
          </div>
        </div>
      </section>
    </>
  );
}
