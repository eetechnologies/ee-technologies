export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-line bg-navy-ink text-white">
      <div className="mx-auto max-w-content px-6 py-16">
        {eyebrow && (
          <p className="font-body text-sm text-orange-light">{eyebrow}</p>
        )}
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold leading-[1.1] md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl font-body text-white/70">{description}</p>
        )}
      </div>
    </section>
  );
}
