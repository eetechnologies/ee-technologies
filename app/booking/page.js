"use client";

import { useRef, useState } from "react";
import PageHero from "@/components/PageHero";

const SERVICE_TYPES = ["Electrical inspection", "Solar inspection"];

const CATEGORY_OPTIONS = {
  "Electrical inspection": [
    "Single-phase inspection",
    "Three-phase inspection",
    "Large building inspection",
  ],
  "Solar inspection": [
    "Single-phase solar (up to 5kW)",
    "Three-phase solar (up to 5kW)",
    "Three-phase solar (above 5kW)",
  ],
};

const SERVICE_AREAS = ["Colombo", "Gampaha"];

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Deployed Google Apps Script Web App (see /scripts/apps-script/Code.gs),
// running under eetechnologies95@gmail.com.
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzgOPOAzs6vUNz03_pmp0Om4HryhRjvEKbza7U_Xh7qg0RoYlEeyqtYvV2jAQToRc4/exec";

export default function Booking() {
  const fileInputRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    district: SERVICE_AREAS[0],
    serviceType: SERVICE_TYPES[0],
    category: CATEGORY_OPTIONS[SERVICE_TYPES[0]][0],
    preferredDate: "",
    message: "",
    paymentSlip: null,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleServiceTypeChange(e) {
    const serviceType = e.target.value;
    setForm((prev) => ({
      ...prev,
      serviceType,
      category: CATEGORY_OPTIONS[serviceType][0],
    }));
  }

  function handleFileChange(e) {
    setForm((prev) => ({ ...prev, paymentSlip: e.target.files[0] || null }));
  }

  function handleRemoveFile() {
    setForm((prev) => ({ ...prev, paymentSlip: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!APPS_SCRIPT_URL) {
      setError(
        "Booking requests aren't connected yet — please call or email us directly for now."
      );
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("phone", form.phone);
      data.append("address", form.address);
      data.append("district", form.district);
      data.append("serviceType", form.serviceType);
      data.append("category", form.category);
      data.append("preferredDate", form.preferredDate);
      data.append("message", form.message);
      if (form.paymentSlip) {
        // Apps Script web apps can't reliably parse multipart file blobs,
        // so the file is base64-encoded and decoded back into a file on
        // the backend instead.
        const base64 = await fileToBase64(form.paymentSlip);
        data.append("paymentSlipBase64", base64);
        data.append("paymentSlipName", form.paymentSlip.name);
        data.append(
          "paymentSlipType",
          form.paymentSlip.type || "application/octet-stream"
        );
      }

      // Apps Script web apps don't return CORS headers on the redirected
      // response, so the request is sent "no-cors" — we can't read the
      // response body, but the script still runs and delivers the request.
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      setSubmitted(true);
    } catch (err) {
      setError(
        "Something went wrong sending your request. Please try again, or call/email us directly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Request an inspection"
        description="Tell us about the property and what you'd like inspected, and we'll get back to you with a price and a few available times."
      />

      <section className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="font-body text-sm text-ink/65">
            <h2 className="font-display text-lg font-semibold text-navy">Before you submit</h2>
            <ul className="mt-4 space-y-4">
              <li className="trace-dot pl-4">
                <span className="font-medium text-ink">Be specific about the concern.</span> For
                electrical, mention what&apos;s happening (tripping breaker, old wiring, etc)
                or if it&apos;s a routine/compliance check.
              </li>
              <li className="trace-dot pl-4">
                <span className="font-medium text-ink">For solar, tell us about the system.</span>{" "}
                Panel count or age if you know it, and what&apos;s prompting the inspection.
              </li>
              <li className="trace-dot pl-4">
                <span className="font-medium text-ink">We currently cover Colombo and Gampaha.</span>{" "}
                We're not able to take on inspections outside these districts for now.
              </li>
              <li className="trace-dot pl-4">
                <span className="font-medium text-ink">We&apos;ll confirm by phone or email.</span>{" "}
                Expect a reply within a day or two with next steps.
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-line bg-white p-5">
              <p className="font-display text-sm font-semibold text-navy">
                Bank details for payment
              </p>
              <dl className="mt-2 space-y-1 text-sm">
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-medium text-ink">Account name:</dt>
                  <dd>A A A T Bandara</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-medium text-ink">Bank name:</dt>
                  <dd>People&apos;s Bank, Pugoda Branch</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-medium text-ink">Account number:</dt>
                  <dd>093200130032360</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            {submitted ? (
              <div className="py-10 text-center">
                <h2 className="font-display text-xl font-semibold text-navy">
                  Request received
                </h2>
                <p className="mt-2 font-body text-sm text-ink/65">
                  Thanks, {form.name || "there"} — we&apos;ll be in touch about your{" "}
                  {form.serviceType.toLowerCase()} request shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-line px-5 py-2.5 font-body text-sm text-navy hover:border-navy"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" required>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="input"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Contact number" required>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="input"
                      placeholder="07X XXX XXXX"
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Property address">
                    <input
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      className="input"
                      placeholder="Where's the job?"
                    />
                  </Field>
                  <Field label="District" required>
                    <select
                      required
                      name="district"
                      value={form.district}
                      onChange={handleChange}
                      className="input"
                    >
                      {SERVICE_AREAS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <p className="mt-1.5 font-body text-xs text-ink/50">
                      We currently only inspect properties in Colombo and Gampaha.
                    </p>
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Service needed" required>
                    <select
                      required
                      name="serviceType"
                      value={form.serviceType}
                      onChange={handleServiceTypeChange}
                      className="input"
                    >
                      {SERVICE_TYPES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Category" required>
                    <select
                      required
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className="input"
                    >
                      {CATEGORY_OPTIONS[form.serviceType].map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Preferred date">
                  <input
                    type="date"
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={handleChange}
                    className="input"
                  />
                </Field>

                <Field label="Tell us more">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="input resize-none"
                    placeholder="What's going on, or what would you like inspected?"
                  />
                </Field>

                <Field label="Payment slip">
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="paymentSlip"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="input file:mr-4 file:rounded-full file:border-0 file:bg-navy file:px-4 file:py-1.5 file:font-body file:text-xs file:font-medium file:text-white"
                  />
                  {form.paymentSlip && (
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="mt-1.5 font-body text-xs text-orange-dark hover:underline"
                    >
                      Remove file
                    </button>
                  )}
                  <p className="mt-1.5 font-body text-xs text-ink/50">
                    If you've already made a booking deposit, attach the payment slip here (optional).
                  </p>
                </Field>

                {error && (
                  <p className="font-body text-sm text-red-600">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-orange px-6 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-orange-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="font-body text-sm text-ink/80">
        {label}
        {required && <span className="text-orange"> *</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
