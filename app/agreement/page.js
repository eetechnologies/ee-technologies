import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Agreement | E & E Technologies",
};

function Section({ number, title, children }) {
  return (
    <div className="border-t border-line pt-8 first:border-t-0 first:pt-0">
      <h2 className="font-display text-xl font-semibold text-navy">
        {number}. {title}
      </h2>
      <div className="mt-4 space-y-4 font-body text-sm leading-relaxed text-ink/70">
        {children}
      </div>
    </div>
  );
}

export default function Agreement() {
  return (
    <>
      <PageHero
        eyebrow="Agreement"
        title="Inspection booking agreement"
        description="By booking an inspection with E & E Technologies, you agree to the terms below. This agreement keeps the process clear and fair for everyone involved."
      />

      <section className="mx-auto max-w-content px-6 py-16">
        <div className="max-w-3xl space-y-8">
          <Section number={1} title="Appointment terms">
            <p>
              <span className="font-medium text-ink">Site access.</span> Someone must be
              present at the property to give our team access to the distribution board,
              meter, or solar equipment being inspected.
            </p>
            <p>
              <span className="font-medium text-ink">Accurate submission of details.</span> All
              details provided in the booking form must be accurate, including contact
              information, property address, district, and the service and category
              requested. A valid <span className="font-medium text-ink">payment slip</span>{" "}
              must be uploaded to confirm the booking.
            </p>
            <p>
              <span className="font-medium text-ink">Confirmation.</span> Once your form and
              payment slip are received, we&apos;ll confirm your appointment by phone or email
              with the details for your reference.
            </p>
          </Section>

          <Section number={2} title="Payment policy">
            <p>
              <span className="font-medium text-ink">Refund policy.</span> If you cancel your
              appointment, we&apos;ll refund your payment within a week. No-shows are not
              eligible for a refund.
            </p>
            {/* TODO: replace with real bank details before publishing this site. */}
            <div className="rounded-2xl border border-line bg-white p-6">
              <p className="font-medium text-ink">Bank details for payment</p>
              <dl className="mt-3 space-y-1.5">
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-medium text-ink">Account name:</dt>
                  <dd>Account holder name</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-medium text-ink">Bank name:</dt>
                  <dd>Bank &amp; branch</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-medium text-ink">Account number:</dt>
                  <dd>0000 0000 0000</dd>
                </div>
              </dl>
            </div>
          </Section>

          <Section number={3} title="Inspection process">
            <p>
              <span className="font-medium text-ink">Categories offered:</span>
            </p>
            <ul className="ml-1 space-y-1.5">
              <li className="trace-dot pl-4">
                <span className="font-medium text-ink">Electrical:</span> single-phase
                inspection, three-phase inspection, or large building inspection.
              </li>
              <li className="trace-dot pl-4">
                <span className="font-medium text-ink">Solar:</span> single-phase (up to 5kW),
                three-phase (up to 5kW), or three-phase (above 5kW).
              </li>
            </ul>
            <p>
              <span className="font-medium text-ink">Inspection report.</span> A written report
              is provided after the inspection, covering our findings and any
              recommendations. This report is for informational purposes and is meant to aid
              decision-making, not to replace independent professional advice.
            </p>
          </Section>

          <Section number={4} title="Rescheduling and cancellations">
            <p>
              <span className="font-medium text-ink">Rescheduling policy.</span> Requests to
              reschedule must be made at least 24 hours before the scheduled appointment and
              are subject to availability.
            </p>
            <p>
              <span className="font-medium text-ink">No-show policy.</span> Failing to attend
              the appointment without prior notice will result in forfeiture of the payment.
            </p>
          </Section>

          <Section number={5} title="Liability disclaimer">
            <p>
              <span className="font-medium text-ink">Inspection scope.</span> The inspection
              report reflects the condition of the electrical or solar system at the time of
              assessment. E &amp; E Technologies is not liable for faults or issues that arise
              afterward.
            </p>
            <p>
              <span className="font-medium text-ink">Client responsibility.</span> Any
              decisions made using the inspection report — including property purchases or
              compliance filings — are the client&apos;s responsibility. E &amp; E
              Technologies does not mediate disputes between other parties.
            </p>
          </Section>

          <Section number={6} title="Agreement to terms">
            <p>
              By proceeding with your booking, you acknowledge and accept the terms outlined
              above. This agreement exists to keep the process transparent and fair for
              everyone involved.
            </p>
          </Section>

          <div className="rounded-2xl border border-line bg-navy/5 p-6">
            <p className="font-display text-base font-semibold text-navy">Contact us</p>
            {/* TODO: replace placeholder email with the real one */}
            <div className="mt-3 space-y-1.5 font-body text-sm text-ink/70">
              <p>Phone: 074 178 3280</p>
              <p>WhatsApp: 070 102 4769</p>
              <p>Email: info@eetechnologies.lk</p>
            </div>
          </div>

          <Link
            href="/booking"
            className="inline-block rounded-full bg-orange px-6 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-orange-dark"
          >
            Request an inspection
          </Link>
        </div>
      </section>
    </>
  );
}
