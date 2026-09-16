import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-navy-ink text-white">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="E & E Technologies logo" width={40} height={40} className="h-10 w-10" />
            <span className="font-display text-base font-semibold">E &amp; E Technologies</span>
          </div>
          <p className="mt-4 max-w-xs font-body text-sm text-white/65">
            Electrical and solar inspections, done properly. Serving homes and small
            businesses with clear, independent inspection reports.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-wide text-white/90">Site</h3>
          <ul className="mt-4 space-y-2.5 font-body text-sm text-white/65">
            <li><Link href="/services" className="hover:text-orange-light">Services</Link></li>
            <li><Link href="/pricing" className="hover:text-orange-light">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-orange-light">About</Link></li>
            <li><Link href="/agreement" className="hover:text-orange-light">Agreement</Link></li>
            <li><Link href="/booking" className="hover:text-orange-light">Book an inspection</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-wide text-white/90">Get in touch</h3>
          <ul className="mt-4 space-y-2.5 font-body text-sm text-white/65">
            {/* TODO: replace placeholder email with the real one */}
            <li>
              <a href="tel:+94741783280" className="hover:text-orange-light">074 178 3280</a>
            </li>
            <li>
              <a
                href="https://wa.me/94719158920"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-light"
              >
                071 915 8920 (WhatsApp)
              </a>
            </li>
            <li>info@eetechnologies.lk</li>
            <li>Gampaha, Sri Lanka</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 py-5 font-body text-xs text-white/45 md:flex-row">
          <span>&copy; {new Date().getFullYear()} E &amp; E Technologies. All rights reserved.</span>
          <span>Site content is placeholder text — replace before publishing.</span>
        </div>
      </div>
    </footer>
  );
}
