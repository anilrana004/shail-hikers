import type { TrekData } from "@/types";
import { useState } from "react";

interface Props {
  trek: TrekData;
}

const BATCHES = [
  { date: "2025-01-15", guide: "Deepak Singh", seats: 8, booked: 6 },
  { date: "2025-01-29", guide: "Rahul Negi", seats: 10, booked: 10 },
  { date: "2025-02-05", guide: "Priya Rawat", seats: 10, booked: 3 },
  { date: "2025-02-19", guide: "Amit Kumar", seats: 8, booked: 8 },
  { date: "2025-03-05", guide: "Deepak Singh", seats: 10, booked: 1 },
  { date: "2025-03-19", guide: "Rahul Negi", seats: 10, booked: 7 },
];

const PRICE_BREAKDOWN = [
  { label: "Expert Guides", pct: 30, color: "#B5525E" },
  { label: "Permits & Fees", pct: 10, color: "#C9A84C" },
  { label: "Meals", pct: 25, color: "#2D5016" },
  { label: "Transport", pct: 20, color: "#A8C5DA" },
  { label: "Gear & Equipment", pct: 15, color: "#E8A0AA" },
];

export default function TrekPricingTab({ trek }: Props) {
  const [groupSize, setGroupSize] = useState(2);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState<number | null>(null);
  const [alertEmail, setAlertEmail] = useState("");

  const getDiscount = () => {
    if (groupSize === 1) return -0.15;
    if (groupSize <= 4) return 0;
    if (groupSize <= 8) return 0.05;
    if (groupSize <= 15) return 0.1;
    return 0.15;
  };
  const discount = getDiscount();
  const adjustedPrice = Math.round(trek.basePrice * 1.15);
  const discountedPrice =
    groupSize > 4
      ? Math.round(trek.basePrice * (1 - discount))
      : trek.basePrice;
  const pricePerPerson = groupSize === 1 ? adjustedPrice : discountedPrice;
  const totalPrice = pricePerPerson * groupSize;

  const getBatchStatus = (booked: number, seats: number) => {
    const pct = booked / seats;
    if (booked >= seats)
      return { label: "Full", color: "#B5525E", dot: "#B5525E" };
    if (pct >= 0.7)
      return { label: "Filling Fast", color: "#C9A84C", dot: "#C9A84C" };
    return { label: "Available", color: "#4A7C2F", dot: "#4A7C2F" };
  };

  return (
    <div className="py-8 space-y-10">
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-3xl" style={{ color: "#FAD4D8" }}>
            Pricing
          </h2>
          <span
            className="text-sm px-3 py-1.5 rounded-full border"
            style={{ borderColor: "#C9A84C", color: "#C9A84C" }}
          >
            Price Match Guarantee
          </span>
        </div>
        <div
          className="rounded-2xl overflow-hidden border"
          style={{ borderColor: "#E8A0AA33" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "rgba(181,82,94,0.2)" }}>
                <th
                  className="px-5 py-3 text-left"
                  style={{ color: "#FAD4D8" }}
                >
                  Group Size
                </th>
                <th
                  className="px-5 py-3 text-right"
                  style={{ color: "#FAD4D8" }}
                >
                  Price/Person
                </th>
                <th
                  className="px-5 py-3 text-right"
                  style={{ color: "#FAD4D8" }}
                >
                  Savings
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "Solo (1 person)",
                  price: Math.round(trek.basePrice * 1.15),
                  save: "--",
                },
                {
                  label: "2-4 persons",
                  price: trek.basePrice,
                  save: "Base Price",
                },
                {
                  label: "5-8 persons",
                  price: Math.round(trek.basePrice * 0.95),
                  save: `Save Rs.${Math.round(trek.basePrice * 0.05).toLocaleString()}`,
                },
                {
                  label: "9-15 persons",
                  price: Math.round(trek.basePrice * 0.9),
                  save: `Save Rs.${Math.round(trek.basePrice * 0.1).toLocaleString()}`,
                },
                {
                  label: "16+ persons",
                  price: Math.round(trek.basePrice * 0.85),
                  save: "Contact Us",
                },
              ].map((row) => (
                <tr
                  key={row.label}
                  style={{
                    background:
                      row.label.startsWith("2") || row.label.startsWith("9")
                        ? "rgba(26,14,16,0.8)"
                        : "rgba(45,27,30,0.8)",
                  }}
                >
                  <td className="px-5 py-3" style={{ color: "#FAD4D8" }}>
                    {row.label}
                  </td>
                  <td
                    className="px-5 py-3 text-right font-semibold"
                    style={{ color: "#C9A84C" }}
                  >
                    Rs.{row.price.toLocaleString()}
                  </td>
                  <td
                    className="px-5 py-3 text-right text-xs"
                    style={{ color: "#4A7C2F" }}
                  >
                    {row.save}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-xs" style={{ color: "#E8A0AA" }}>
          All prices include 5% GST. Early bird: 10% off if booked 60+ days
          ahead.
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl mb-5" style={{ color: "#FAD4D8" }}>
          Group Price Calculator
        </h2>
        <div
          className="rounded-2xl p-6 border"
          style={{ background: "rgba(45,27,30,0.8)", borderColor: "#E8A0AA33" }}
        >
          <div className="flex items-center gap-4 mb-5">
            <label
              htmlFor="group-size-range"
              className="text-sm"
              style={{ color: "#E8A0AA" }}
            >
              Group Size:
            </label>
            <input
              type="range"
              id="group-size-range"
              min={1}
              max={20}
              value={groupSize}
              onChange={(e) => setGroupSize(Number(e.target.value))}
              className="flex-1 accent-[#B5525E]"
            />
            <span
              className="font-bold text-lg w-12 text-center"
              style={{ color: "#FAD4D8" }}
            >
              {groupSize}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div
              className="text-center rounded-xl p-4"
              style={{ background: "rgba(26,14,16,0.8)" }}
            >
              <div className="text-xs mb-1" style={{ color: "#E8A0AA" }}>
                Per Person
              </div>
              <div className="font-bold text-xl" style={{ color: "#C9A84C" }}>
                Rs.{pricePerPerson.toLocaleString()}
              </div>
            </div>
            <div
              className="text-center rounded-xl p-4"
              style={{ background: "rgba(26,14,16,0.8)" }}
            >
              <div className="text-xs mb-1" style={{ color: "#E8A0AA" }}>
                Group Discount
              </div>
              <div
                className="font-bold text-xl"
                style={{ color: discount > 0 ? "#4A7C2F" : "#E8A0AA" }}
              >
                {discount > 0 ? `${(discount * 100).toFixed(0)}%` : "--"}
              </div>
            </div>
            <div
              className="text-center rounded-xl p-4"
              style={{ background: "rgba(181,82,94,0.15)" }}
            >
              <div className="text-xs mb-1" style={{ color: "#E8A0AA" }}>
                Total
              </div>
              <div className="font-bold text-xl" style={{ color: "#B5525E" }}>
                Rs.{totalPrice.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <button
          type="button"
          onClick={() => setShowBreakdown(!showBreakdown)}
          className="text-sm underline mb-4"
          style={{ color: "#E8A0AA" }}
        >
          {showBreakdown ? "Hide" : "Show"} where your money goes
        </button>
        {showBreakdown && (
          <div
            className="rounded-2xl p-6 border"
            style={{
              background: "rgba(45,27,30,0.8)",
              borderColor: "#E8A0AA33",
            }}
          >
            {PRICE_BREAKDOWN.map((item) => (
              <div key={item.label} className="flex items-center gap-4 mb-3">
                <div className="w-32 text-sm" style={{ color: "#FAD4D8" }}>
                  {item.label}
                </div>
                <div
                  className="flex-1 h-3 rounded-full"
                  style={{ background: "rgba(26,14,16,0.8)" }}
                >
                  <div
                    className="h-3 rounded-full"
                    style={{ background: item.color, width: `${item.pct}%` }}
                  />
                </div>
                <div
                  className="text-sm font-semibold w-10 text-right"
                  style={{ color: item.color }}
                >
                  {item.pct}%
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="font-display text-2xl mb-5" style={{ color: "#FAD4D8" }}>
          Upcoming Batches
        </h2>
        <div className="space-y-3">
          {BATCHES.map((batch, i) => {
            const status = getBatchStatus(batch.booked, batch.seats);
            const date = new Date(batch.date);
            return (
              <button
                type="button"
                key={batch.date}
                className="rounded-xl border cursor-pointer transition-all w-full text-left"
                style={{
                  background:
                    selectedBatch === i
                      ? "rgba(181,82,94,0.15)"
                      : "rgba(45,27,30,0.8)",
                  borderColor: selectedBatch === i ? "#B5525E" : "#E8A0AA22",
                }}
                onClick={() => setSelectedBatch(selectedBatch === i ? null : i)}
              >
                <div className="flex items-center gap-4 px-5 py-4">
                  <div
                    className="w-14 h-14 rounded-xl flex flex-col items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(181,82,94,0.2)" }}
                  >
                    <div className="text-xs" style={{ color: "#E8A0AA" }}>
                      {date.toLocaleString("default", { month: "short" })}
                    </div>
                    <div
                      className="text-xl font-bold"
                      style={{ color: "#FAD4D8" }}
                    >
                      {date.getDate()}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div
                      className="font-semibold text-sm"
                      style={{ color: "#FAD4D8" }}
                    >
                      Guide: {batch.guide}
                    </div>
                    <div className="text-xs mt-1" style={{ color: "#E8A0AA" }}>
                      {batch.seats - batch.booked} of {batch.seats} seats left
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold" style={{ color: "#C9A84C" }}>
                      Rs.{trek.basePrice.toLocaleString()}
                    </div>
                    <div className="text-xs mt-1 flex items-center gap-1 justify-end">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: status.dot }}
                      />
                      <span style={{ color: status.color }}>
                        {status.label}
                      </span>
                    </div>
                  </div>
                </div>
                {selectedBatch === i && (
                  <div
                    className="border-t px-5 py-4 space-y-3"
                    style={{ borderColor: "#E8A0AA22" }}
                  >
                    <div className="text-sm" style={{ color: "#E8A0AA" }}>
                      Trek duration: {trek.durationDays} days /{" "}
                      {trek.durationNights} nights
                    </div>
                    <div className="flex gap-3">
                      {batch.booked < batch.seats ? (
                        <a
                          href={`/book/${trek.slug}`}
                          className="px-5 py-2 rounded-lg text-sm font-semibold"
                          style={{ background: "#B5525E", color: "#FAD4D8" }}
                        >
                          Reserve This Batch
                        </a>
                      ) : (
                        <div className="flex gap-2 w-full">
                          <input
                            type="email"
                            placeholder="Your email for waitlist"
                            value={alertEmail}
                            onChange={(e) => setAlertEmail(e.target.value)}
                            className="flex-1 px-3 py-2 rounded-lg text-sm border bg-transparent"
                            style={{
                              borderColor: "#E8A0AA44",
                              color: "#FAD4D8",
                            }}
                          />
                          <button
                            type="button"
                            className="px-4 py-2 rounded-lg text-sm"
                            style={{ background: "#B5525E", color: "#FAD4D8" }}
                          >
                            Alert Me
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl mb-5" style={{ color: "#FAD4D8" }}>
          Payment Options
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Pay Full",
              badge: "Save 5%",
              desc: `Rs.${Math.round(trek.basePrice * 0.95).toLocaleString()}/person`,
              cta: "Book & Save",
            },
            {
              title: "Pay Rs.2,000 Now",
              badge: "Balance before trek",
              desc: "Rs.2,000 now, rest due 7 days before trek",
              cta: "Reserve Spot",
            },
            {
              title: "EMI",
              badge: "0% Interest",
              desc: "3 or 6 month EMI via Razorpay",
              cta: "Choose EMI",
            },
          ].map((opt) => (
            <div
              key={opt.title}
              className="rounded-2xl p-5 border flex flex-col"
              style={{
                background: "rgba(45,27,30,0.8)",
                borderColor: opt.title === "Pay Full" ? "#C9A84C" : "#E8A0AA33",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="font-semibold" style={{ color: "#FAD4D8" }}>
                  {opt.title}
                </div>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(201,168,76,0.2)",
                    color: "#C9A84C",
                    border: "1px solid #C9A84C66",
                  }}
                >
                  {opt.badge}
                </span>
              </div>
              <div className="text-sm flex-1 mb-4" style={{ color: "#E8A0AA" }}>
                {opt.desc}
              </div>
              <button
                type="button"
                className="w-full py-2.5 rounded-xl text-sm font-semibold"
                style={{
                  background:
                    opt.title === "Pay Full"
                      ? "#B5525E"
                      : "rgba(181,82,94,0.2)",
                  color: "#FAD4D8",
                  border:
                    opt.title !== "Pay Full"
                      ? "1px solid #B5525E66"
                      : undefined,
                }}
              >
                {opt.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <div
        className="rounded-2xl p-5 border"
        style={{ background: "rgba(201,168,76,0.1)", borderColor: "#C9A84C66" }}
      >
        <div className="font-semibold mb-2" style={{ color: "#C9A84C" }}>
          Early Bird - 10% Off
        </div>
        <div className="text-sm" style={{ color: "#FAD4D8" }}>
          Book 60+ days ahead to unlock 10% savings. Refer a friend and both get
          Rs.500 off your next trek.
        </div>
      </div>
    </div>
  );
}
