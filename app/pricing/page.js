import PageHero from "@/components/PageHero";
import PackageGrid from "@/components/PackageGrid";
import { electricalPackages, solarPackages } from "@/components/packages";

export const metadata = {
  title: "Pricing | E & E Technologies",
};

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
