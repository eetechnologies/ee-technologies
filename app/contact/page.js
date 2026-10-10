import Link from "next/link";
import PageHero from "@/components/PageHero";
import { IconMeter, IconWiring, IconPhone } from "@/components/icons";

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
        <div className="max-w-md">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <IconPhone className="h-8 w-8 shrink-0 text-orange" style={{ width: 28, height: 28 }} />
              <div>
                <p className="font-display text-base font-semibold text-navy">Phone</p>
                <a
                  href="tel:+94741783280"
                  className="mt-1 block font-body text-sm text-ink/65 hover:text-orange-dark"
                >
                  074 178 3280
                </a>
                <a
                  href="https://wa.me/94719158920"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-body text-sm text-ink/65 hover:text-orange-dark"
                >
                  071 915 8920 (WhatsApp)
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <IconMeter className="h-8 w-8 shrink-0 text-orange" style={{ width: 28, height: 28 }} />
              <div>
                <p className="font-display text-base font-semibold text-navy">Email</p>
                <a
                  href="mailto:info@eetechnologies.lk"
                  className="font-body text-sm text-ink/65 hover:text-orange-dark"
                >
                  info@eetechnologies.lk
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <IconWiring className="h-8 w-8 shrink-0 text-orange" style={{ width: 28, height: 28 }} />
              <div>
                <p className="font-display text-base font-semibold text-navy">Service area</p>
                <p className="font-body text-sm text-ink/65">Colombo and Gampaha</p>
              </div>
            </div>

            <Link
              href="/booking"
              className="mt-4 inline-block rounded-full bg-navy px-6 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-navy-light"
            >
              Request an inspection instead
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
