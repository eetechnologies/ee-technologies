"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/agreement", label: "Agreement" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="E & E Technologies logo"
            width={44}
            height={44}
            className="h-11 w-11"
            priority
          />
          <span className="font-display text-lg font-semibold leading-tight text-navy">
            E&nbsp;&amp;&nbsp;E<span className="block text-xs font-normal tracking-wide text-navy-light">Technologies</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm transition-colors ${
                  active ? "text-orange" : "text-ink/80 hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/booking"
            className="rounded-full bg-orange px-5 py-2.5 font-body text-sm font-medium text-white transition-colors hover:bg-orange-dark"
          >
            Book an Inspection
          </Link>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2.5 5h15M2.5 10h15M2.5 15h15" stroke="#10236B" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2.5 font-body text-sm text-ink/85"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="mt-2 rounded-full bg-orange px-5 py-2.5 text-center font-body text-sm font-medium text-white"
            onClick={() => setOpen(false)}
          >
            Book an Inspection
          </Link>
        </nav>
      )}
    </header>
  );
}
