import { TREKS } from "@/data/treks";
import { useBookings, useCancelBooking } from "@/hooks/useBookings";
import {
  Bell,
  Calendar,
  Camera,
  Check,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Heart,
  LayoutDashboard,
  Lock,
  LogOut,
  MapPin,
  Mountain,
  Phone,
  Settings,
  Shield,
  Star,
  Trash2,
  Upload,
  User,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const MOCK_USER = {
  name: "Arjun Mehta",
  email: "arjun.mehta@gmail.com",
  phone: "+91 98765 43210",
  city: "Delhi",
  dateOfBirth: "1995-08-14",
  profilePhoto:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  loyaltyTier: "Trailblazer" as const,
  treksCompleted: 4,
  referralCode: "ARJUN500",
  referralCredit: 1000,
  notifications: {
    email: true,
    whatsapp: true,
    newBatches: true,
    offers: false,
    blog: true,
    weather: true,
  },
};

function getBookingStatus(ps: { __kind__: string } | string): string {
  if (typeof ps === "string") return ps.toLowerCase();
  if (ps.__kind__ === "Paid") return "confirmed";
  if (ps.__kind__ === "Pending") return "pending";
  if (ps.__kind__ === "Cancelled") return "cancelled";
  return "pending";
}

function getTrekHeroImage(slug: string): string {
  const t = TREKS.find((x) => x.slug === slug);
  return (
    t?.heroImage ??
    "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=400&q=80"
  );
}

function getTrekName(slug: string): string {
  const t = TREKS.find((x) => x.slug === slug);
  return t?.name ?? slug;
}

function daysUntil(dateStr: string): number {
  const diff = new Date(dateStr).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

const PACKING_ITEMS = [
  { id: "p1", name: "Trekking shoes (ankle support)", essential: true },
  { id: "p2", name: "Down jacket (mandatory above 11,000ft)", essential: true },
  { id: "p3", name: "Moisture-wicking base layers (3 sets)", essential: true },
  { id: "p4", name: "Waterproof shell jacket", essential: true },
  { id: "p5", name: "Trekking poles (telescopic)", essential: false },
  { id: "p6", name: "Headlamp + extra batteries", essential: true },
  { id: "p7", name: "40–50L backpack with rain cover", essential: true },
  { id: "p8", name: "Sunscreen SPF 50+ & sunglasses", essential: true },
  { id: "p9", name: "Water bottles (2L minimum)", essential: true },
  { id: "p10", name: "Personal first aid kit", essential: false },
];

const WISHLIST = ["buran-ghati", "valley-of-flowers", "bali-pass"];

const DOCS = [
  {
    id: "aadhaar",
    name: "Aadhaar Card",
    status: "uploaded" as const,
    expiry: null,
  },
  {
    id: "medical",
    name: "Medical Fitness Certificate",
    status: "pending" as const,
    expiry: "2026-06-01",
  },
  {
    id: "insurance",
    name: "Travel Insurance Policy",
    status: "expired" as const,
    expiry: "2025-11-30",
  },
];

const REFERRALS = [
  {
    name: "Priya Kapoor",
    city: "Mumbai",
    status: "Booked",
    credit: 500,
    date: "Dec 2025",
  },
  {
    name: "Rahul Singh",
    city: "Pune",
    status: "Signed Up",
    credit: 0,
    date: "Nov 2025",
  },
];

const PENDING_REVIEWS = [
  {
    trekName: "Har Ki Dun",
    slug: "har-ki-dun",
    date: "Sep 2025",
    heroImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
  },
];

const PAST_REVIEWS = [
  {
    trekName: "Kedarkantha",
    rating: 5,
    date: "Jan 2025",
    snippet:
      "Absolutely magical experience. Deepak was an incredible guide. The summit sunrise at -12°C was worth every step.",
  },
];

const tierConfig = {
  Explorer: {
    color: "#82C8E5",
    bg: "rgba(168,197,218,0.15)",
    next: "Trailblazer (6 treks)",
    emoji: "🥾",
  },
  Trailblazer: {
    color: "#D4A843",
    bg: "rgba(201,168,76,0.15)",
    next: "Summit Master (10 treks)",
    emoji: "⛰️",
  },
  "Summit Master": {
    color: "#F88379",
    bg: "rgba(248,131,121,0.2)",
    next: "You've reached the peak!",
    emoji: "🏔️",
  },
};

const SECTIONS = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "bookings", label: "My Bookings", icon: Calendar },
  { id: "upcoming", label: "Upcoming Trek", icon: Mountain },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "reviews", label: "Reviews", icon: Star },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "referrals", label: "Referrals", icon: Users },
  { id: "settings", label: "Settings", icon: Settings },
];

const statusBadge = (s: string) => {
  const map: Record<string, { color: string; bg: string }> = {
    confirmed: { color: "#4ade80", bg: "rgba(74,222,128,0.12)" },
    completed: { color: "#82C8E5", bg: "rgba(168,197,218,0.12)" },
    cancelled: { color: "#F88379", bg: "rgba(248,131,121,0.12)" },
    pending: { color: "#D4A843", bg: "rgba(201,168,76,0.12)" },
  };
  return map[s] ?? { color: "#4A4A4A", bg: "rgba(232,160,170,0.1)" };
};

function Overview({ onSection }: { onSection: (id: string) => void }) {
  const tier = tierConfig[MOCK_USER.loyaltyTier];
  const { data: bookingsData } = useBookings();
  const bookings = bookingsData ?? [];
  const upcomingBookingRaw = bookings.find(
    (b) => getBookingStatus(b.paymentStatus) === "confirmed",
  );
  const upcomingBooking = upcomingBookingRaw
    ? {
        trekName: getTrekName(upcomingBookingRaw.trekSlug),
        trekSlug: upcomingBookingRaw.trekSlug,
        batchDate: "2026-01-15",
        daysUntil: daysUntil("2026-01-15"),
        heroImage: getTrekHeroImage(upcomingBookingRaw.trekSlug),
      }
    : null;

  return (
    <div>
      <div
        className="p-6 rounded-2xl mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        style={{
          background: "rgba(248,131,121,0.12)",
          border: "1px solid rgba(248,131,121,0.3)",
        }}
      >
        <img
          src={MOCK_USER.profilePhoto}
          alt={MOCK_USER.name}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
          style={{ border: "3px solid #F88379" }}
        />
        <div className="flex-1">
          <h2 className="font-display text-2xl" style={{ color: "#1A1A1A" }}>
            Welcome back, {MOCK_USER.name.split(" ")[0]}! 👋
          </h2>
          <p className="text-sm mt-0.5" style={{ color: "#4A4A4A" }}>
            {MOCK_USER.treksCompleted} treks completed · {MOCK_USER.city}
          </p>
        </div>
        <div
          className="px-4 py-2 rounded-xl flex items-center gap-2"
          style={{ background: tier.bg, border: `1px solid ${tier.color}` }}
        >
          <span>{tier.emoji}</span>
          <div>
            <div
              className="text-xs font-semibold"
              style={{ color: tier.color }}
            >
              {MOCK_USER.loyaltyTier}
            </div>
            <div className="text-xs" style={{ color: "#4A4A4A" }}>
              {tier.next}
            </div>
          </div>
        </div>
      </div>

      {upcomingBooking && (
        <div
          className="p-5 rounded-2xl mb-6"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(248,131,121,0.25)",
          }}
        >
          <h3
            className="font-display text-lg mb-3"
            style={{ color: "#1A1A1A" }}
          >
            Next Trek Countdown
          </h3>
          <div className="flex items-center gap-4">
            <img
              src={upcomingBooking.heroImage}
              alt={upcomingBooking.trekName}
              className="w-20 h-16 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <div className="font-semibold" style={{ color: "#1A1A1A" }}>
                {upcomingBooking.trekName}
              </div>
              <div className="text-sm" style={{ color: "#4A4A4A" }}>
                {upcomingBooking.batchDate}
              </div>
            </div>
            <div className="text-center">
              <div
                className="font-display text-4xl"
                style={{ color: "#F88379" }}
              >
                {upcomingBooking.daysUntil}
              </div>
              <div className="text-xs" style={{ color: "#4A4A4A" }}>
                days to go
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          {
            label: "Upload Documents",
            icon: Upload,
            id: "documents",
            color: "#D4A843",
          },
          {
            label: "Contact Guide",
            icon: Phone,
            id: "upcoming",
            color: "#82C8E5",
          },
          {
            label: "Download Itinerary",
            icon: Download,
            id: "upcoming",
            color: "#4A4A4A",
          },
          {
            label: "Check Weather",
            icon: Bell,
            id: "upcoming",
            color: "#2D6A4F",
          },
        ].map((a) => (
          <button
            key={a.id + a.label}
            type="button"
            onClick={() => onSection(a.id)}
            className="p-4 rounded-xl flex flex-col items-center gap-2 text-center transition-all duration-200 hover:opacity-90"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(248,131,121,0.2)",
            }}
          >
            <a.icon size={22} style={{ color: a.color }} />
            <span className="text-xs" style={{ color: "#4A4A4A" }}>
              {a.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function MyBookings() {
  const { data: bookingsData, isLoading: bookingsLoading } = useBookings();
  const cancelBooking = useCancelBooking();
  const [cancellingId, setCancellingId] = useState<bigint | null>(null);

  const bookings = bookingsData ?? [];

  const upcoming = bookings.filter(
    (b) => getBookingStatus(b.paymentStatus) === "confirmed",
  );
  const past = bookings.filter(
    (b) => getBookingStatus(b.paymentStatus) === "completed",
  );
  const cancelled = bookings.filter(
    (b) => getBookingStatus(b.paymentStatus) === "cancelled",
  );

  const handleCancel = async (id: bigint) => {
    if (!window.confirm("Are you sure you want to cancel this booking?"))
      return;
    setCancellingId(id);
    try {
      await cancelBooking.mutateAsync(id);
    } catch {
      /* error handled by mutation */
    } finally {
      setCancellingId(null);
    }
  };

  const BookingCard = ({ b }: { b: (typeof bookings)[0] }) => {
    const status = getBookingStatus(b.paymentStatus);
    const sc = statusBadge(status);
    const trekName = getTrekName(b.trekSlug);
    const heroImage = getTrekHeroImage(b.trekSlug);
    const batchDate = "2026-01-15"; // fallback since backend BookingPublic doesn't have batchDate directly
    const du = daysUntil(batchDate);
    const amount = Number(b.totalAmount);
    const isCancelling = cancellingId === b.id;
    return (
      <div
        className="p-4 rounded-xl mb-3 flex gap-4"
        style={{
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(248,131,121,0.2)",
        }}
      >
        <img
          src={heroImage}
          alt={trekName}
          className="w-20 h-16 rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="font-display text-base"
              style={{ color: "#1A1A1A" }}
            >
              {trekName}
            </span>
            <span
              className="px-2 py-0.5 rounded-full text-xs"
              style={{ background: sc.bg, color: sc.color }}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
          <div className="text-xs mb-2" style={{ color: "#4A4A4A" }}>
            Batch ID: {b.batchId.toString()} · ₹{amount.toLocaleString("en-IN")}{" "}
            · {b.travelers.length} traveler{b.travelers.length > 1 ? "s" : ""}
          </div>
          <div className="flex gap-2 flex-wrap">
            {status === "confirmed" && (
              <>
                <a
                  href={`/book/${b.trekSlug}`}
                  className="text-xs px-3 py-1 rounded-lg"
                  style={{
                    background: "rgba(248,131,121,0.2)",
                    color: "#F88379",
                  }}
                >
                  View Details
                </a>
                <span
                  className="text-xs px-3 py-1 rounded-lg"
                  style={{
                    background: "rgba(201,168,76,0.15)",
                    color: "#D4A843",
                  }}
                >
                  {du} days until trek
                </span>
                <button
                  type="button"
                  onClick={() => handleCancel(b.id)}
                  disabled={isCancelling}
                  data-ocid="booking.cancel_button"
                  className="text-xs px-3 py-1 rounded-lg"
                  style={{
                    background: isCancelling
                      ? "rgba(248,131,121,0.1)"
                      : "rgba(248,131,121,0.15)",
                    color: "#F88379",
                    cursor: isCancelling ? "not-allowed" : "pointer",
                  }}
                >
                  {isCancelling ? "Cancelling..." : "Cancel"}
                </button>
              </>
            )}
            {status === "completed" && (
              <>
                <button
                  type="button"
                  className="text-xs px-3 py-1 rounded-lg"
                  style={{
                    background: "rgba(168,197,218,0.15)",
                    color: "#82C8E5",
                  }}
                >
                  Download Certificate
                </button>
                <a
                  href={`/treks/${b.trekSlug}`}
                  className="text-xs px-3 py-1 rounded-lg"
                  style={{
                    background: "rgba(248,131,121,0.15)",
                    color: "#F88379",
                  }}
                >
                  Write Review
                </a>
                <a
                  href={`/book/${b.trekSlug}`}
                  className="text-xs px-3 py-1 rounded-lg"
                  style={{ background: "rgba(45,80,22,0.2)", color: "#4ade80" }}
                >
                  Rebook
                </a>
              </>
            )}
            {status === "cancelled" && (
              <span
                className="text-xs px-3 py-1 rounded-lg"
                style={{
                  background: "rgba(248,131,121,0.1)",
                  color: "#4A4A4A",
                }}
              >
                Refund: Processing
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  if (bookingsLoading) {
    return (
      <div>
        <h2 className="font-display text-2xl mb-5" style={{ color: "#1A1A1A" }}>
          My Bookings
        </h2>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-24 rounded-xl animate-pulse"
              style={{ background: "rgba(255,255,255,0.8)" }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-display text-2xl mb-5" style={{ color: "#1A1A1A" }}>
        My Bookings
      </h2>
      {upcoming.length === 0 && past.length === 0 && cancelled.length === 0 && (
        <div className="py-12 text-center" style={{ color: "#4A4A4A" }}>
          No bookings yet.{" "}
          <a href="/treks" className="underline" style={{ color: "#F88379" }}>
            Browse treks
          </a>
        </div>
      )}
      {upcoming.length > 0 && (
        <>
          <h3
            className="text-sm font-semibold mb-3 uppercase tracking-wide"
            style={{ color: "#F88379" }}
          >
            Upcoming
          </h3>
          {upcoming.map((b) => (
            <BookingCard key={b.id.toString()} b={b} />
          ))}
        </>
      )}
      {past.length > 0 && (
        <>
          <h3
            className="text-sm font-semibold mt-5 mb-3 uppercase tracking-wide"
            style={{ color: "#82C8E5" }}
          >
            Past Treks
          </h3>
          {past.map((b) => (
            <BookingCard key={b.id.toString()} b={b} />
          ))}
        </>
      )}
      {cancelled.length > 0 && (
        <>
          <h3
            className="text-sm font-semibold mt-5 mb-3 uppercase tracking-wide"
            style={{ color: "#4A4A4A" }}
          >
            Cancelled
          </h3>
          {cancelled.map((b) => (
            <BookingCard key={b.id.toString()} b={b} />
          ))}
        </>
      )}
    </div>
  );
}

function UpcomingTrek() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [todoChecked, setTodoChecked] = useState<string[]>([]);
  const { data: bookingsData } = useBookings();
  const bookings = bookingsData ?? [];
  const upcomingBookingRaw = bookings.find(
    (b) => getBookingStatus(b.paymentStatus) === "confirmed",
  );
  const upcomingBooking = upcomingBookingRaw
    ? {
        trekName: getTrekName(upcomingBookingRaw.trekSlug),
        trekSlug: upcomingBookingRaw.trekSlug,
        batchDate: "2026-01-15",
        endDate: "2026-01-20",
        guideName: "Deepak Negi",
        daysUntil: daysUntil("2026-01-15"),
        heroImage: getTrekHeroImage(upcomingBookingRaw.trekSlug),
      }
    : null;
  if (!upcomingBooking)
    return (
      <div className="py-12 text-center" style={{ color: "#4A4A4A" }}>
        No upcoming treks booked yet.{" "}
        <a href="/treks" className="underline" style={{ color: "#F88379" }}>
          Browse treks
        </a>
      </div>
    );

  const progress = (checkedItems.length / PACKING_ITEMS.length) * 100;
  const todos = [
    "Upload Aadhaar to Documents",
    "Confirm final payment (7 days before)",
    "Confirm Dehradun pickup point",
    "Download offline map",
  ];

  return (
    <div>
      <h2 className="font-display text-2xl mb-5" style={{ color: "#1A1A1A" }}>
        Upcoming Trek: {upcomingBooking.trekName}
      </h2>
      <div
        className="p-4 rounded-xl mb-5 flex gap-4"
        style={{
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(248,131,121,0.25)",
        }}
      >
        <img
          src={upcomingBooking.heroImage}
          alt={upcomingBooking.trekName}
          className="w-24 h-18 rounded-lg object-cover flex-shrink-0"
        />
        <div>
          <div className="font-display text-lg" style={{ color: "#1A1A1A" }}>
            {upcomingBooking.trekName}
          </div>
          <div className="text-sm mt-1" style={{ color: "#4A4A4A" }}>
            {upcomingBooking.batchDate} — {upcomingBooking.endDate}
          </div>
          <div className="text-sm mt-1" style={{ color: "#4A4A4A" }}>
            Guide:{" "}
            <strong style={{ color: "#1A1A1A" }}>
              {upcomingBooking.guideName}
            </strong>
          </div>
          <div className="flex gap-2 mt-2">
            <a
              href="tel:+918279888470"
              className="text-xs px-3 py-1 rounded-lg flex items-center gap-1"
              style={{ background: "rgba(248,131,121,0.2)", color: "#F88379" }}
            >
              <Phone size={11} /> Call Guide
            </a>
            <button
              type="button"
              className="text-xs px-3 py-1 rounded-lg flex items-center gap-1"
              style={{ background: "rgba(168,197,218,0.15)", color: "#82C8E5" }}
            >
              <Download size={11} /> Offline Map
            </button>
          </div>
        </div>
      </div>

      <div
        className="mb-5 p-4 rounded-xl"
        style={{
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(248,131,121,0.25)",
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display text-lg" style={{ color: "#1A1A1A" }}>
            Packing Checklist
          </h3>
          <span className="text-sm" style={{ color: "#D4A843" }}>
            {checkedItems.length}/{PACKING_ITEMS.length} packed
          </span>
        </div>
        <div
          className="h-2 rounded-full mb-4"
          style={{ background: "rgba(248,131,121,0.2)" }}
        >
          <div
            className="h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, background: "#F88379" }}
          />
        </div>
        {PACKING_ITEMS.map((item) => (
          <label
            key={item.id}
            className="flex items-center gap-3 py-2 cursor-pointer border-b last:border-0"
            style={{ borderColor: "rgba(248,131,121,0.1)" }}
          >
            <input
              type="checkbox"
              checked={checkedItems.includes(item.id)}
              onChange={() =>
                setCheckedItems((prev) =>
                  prev.includes(item.id)
                    ? prev.filter((i) => i !== item.id)
                    : [...prev, item.id],
                )
              }
              className="w-4 h-4 accent-[#F88379]"
            />
            <span
              className="text-sm flex-1"
              style={{
                color: checkedItems.includes(item.id) ? "#4A4A4A" : "#1A1A1A",
                textDecoration: checkedItems.includes(item.id)
                  ? "line-through"
                  : "none",
              }}
            >
              {item.name}
            </span>
            {item.essential && (
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(248,131,121,0.2)",
                  color: "#F88379",
                }}
              >
                Essential
              </span>
            )}
          </label>
        ))}
      </div>

      <div
        className="p-4 rounded-xl"
        style={{
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(248,131,121,0.25)",
        }}
      >
        <h3 className="font-display text-lg mb-3" style={{ color: "#1A1A1A" }}>
          Things To Do Before Trek
        </h3>
        {todos.map((t, i) => (
          <label
            key={t}
            className="flex items-center gap-3 py-2 cursor-pointer border-b last:border-0"
            style={{ borderColor: "rgba(248,131,121,0.1)" }}
          >
            <input
              type="checkbox"
              checked={todoChecked.includes(String(i))}
              onChange={() =>
                setTodoChecked((prev) =>
                  prev.includes(String(i))
                    ? prev.filter((x) => x !== String(i))
                    : [...prev, String(i)],
                )
              }
              className="w-4 h-4 accent-[#F88379]"
            />
            <span
              className="text-sm"
              style={{
                color: todoChecked.includes(String(i)) ? "#4A4A4A" : "#1A1A1A",
                textDecoration: todoChecked.includes(String(i))
                  ? "line-through"
                  : "none",
              }}
            >
              {t}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

function Documents() {
  const docStatus = {
    uploaded: {
      color: "#4ade80",
      bg: "rgba(74,222,128,0.12)",
      label: "Uploaded ✔",
    },
    pending: {
      color: "#D4A843",
      bg: "rgba(201,168,76,0.12)",
      label: "Pending ⚠",
    },
    expired: {
      color: "#F88379",
      bg: "rgba(248,131,121,0.12)",
      label: "Expired ⚠",
    },
  };

  return (
    <div>
      <h2 className="font-display text-2xl mb-2" style={{ color: "#1A1A1A" }}>
        Documents Vault
      </h2>
      <p className="text-sm mb-6" style={{ color: "#4A4A4A" }}>
        Upload required documents for permit processing
      </p>
      <div className="grid gap-4">
        {DOCS.map((doc) => {
          const ds = docStatus[doc.status];
          return (
            <div
              key={doc.id}
              className="p-4 rounded-xl flex items-center gap-4"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(248,131,121,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(248,131,121,0.15)" }}
              >
                <FileText size={20} style={{ color: "#F88379" }} />
              </div>
              <div className="flex-1">
                <div
                  className="font-semibold text-sm"
                  style={{ color: "#1A1A1A" }}
                >
                  {doc.name}
                </div>
                {doc.expiry && (
                  <div className="text-xs mt-0.5" style={{ color: "#4A4A4A" }}>
                    Expiry: {doc.expiry}
                  </div>
                )}
                {doc.status === "expired" && (
                  <div className="text-xs" style={{ color: "#F88379" }}>
                    Document expired — please re-upload
                  </div>
                )}
              </div>
              <span
                className="px-3 py-1 rounded-full text-xs"
                style={{ background: ds.bg, color: ds.color }}
              >
                {ds.label}
              </span>
              <button
                type="button"
                className="px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5"
                style={{
                  background: "rgba(248,131,121,0.2)",
                  color: "#F88379",
                }}
              >
                <Upload size={12} /> Upload
              </button>
            </div>
          );
        })}
      </div>
      <p
        className="text-xs mt-4 flex items-center gap-1.5"
        style={{ color: "#4A4A4A" }}
      >
        <Shield size={12} style={{ color: "#F88379" }} /> Documents are
        encrypted and shared only with forest/wildlife departments for permit
        processing.
      </p>
    </div>
  );
}

function Reviews() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h2 className="font-display text-2xl mb-5" style={{ color: "#1A1A1A" }}>
        Reviews
      </h2>
      {PENDING_REVIEWS.length > 0 && (
        <div className="mb-6">
          <h3
            className="text-sm font-semibold mb-3 uppercase tracking-wide"
            style={{ color: "#D4A843" }}
          >
            Awaiting Your Review
          </h3>
          {PENDING_REVIEWS.map((pr) => (
            <div
              key={pr.slug}
              className="p-4 rounded-xl flex items-center gap-4"
              style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              <img
                src={pr.heroImage}
                alt={pr.trekName}
                className="w-16 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div
                  className="font-display text-base"
                  style={{ color: "#1A1A1A" }}
                >
                  {pr.trekName}
                </div>
                <div className="text-xs" style={{ color: "#4A4A4A" }}>
                  Completed {pr.date}
                </div>
              </div>
              <a
                href={`/treks/${pr.slug}`}
                className="px-4 py-2 rounded-xl text-xs font-semibold"
                style={{ background: "#F88379", color: "#1A1A1A" }}
              >
                Write Review
              </a>
            </div>
          ))}
        </div>
      )}
      <h3
        className="text-sm font-semibold mb-3 uppercase tracking-wide"
        style={{ color: "#82C8E5" }}
      >
        Your Past Reviews
      </h3>
      {PAST_REVIEWS.map((r) => (
        <div
          key={r.trekName}
          className="p-4 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(248,131,121,0.2)",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span
              className="font-display text-base"
              style={{ color: "#1A1A1A" }}
            >
              {r.trekName}
            </span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={`rs-${j + 1}`}
                  size={13}
                  style={{
                    color: j < r.rating ? "#D4A843" : "rgba(201,168,76,0.3)",
                  }}
                  fill={j < r.rating ? "#D4A843" : "none"}
                />
              ))}
            </div>
          </div>
          <p className="text-sm" style={{ color: "#4A4A4A" }}>
            {r.snippet}
          </p>
          <p
            className="text-xs mt-1"
            style={{ color: "rgba(232,160,170,0.5)" }}
          >
            {r.date}
          </p>
        </div>
      ))}
      <div
        className="mt-4 p-4 rounded-xl"
        style={{
          background: "rgba(255,255,255,0.8)",
          border: "1px dashed rgba(248,131,121,0.3)",
        }}
      >
        <p className="text-sm" style={{ color: "#4A4A4A" }}>
          Quick Rating (demo)
        </p>
        <div className="flex gap-1 mt-2">
          {Array.from({ length: 5 }).map((_, j) => (
            <button
              key={`rb-${j + 1}`}
              type="button"
              onClick={() => setRating(j + 1)}
            >
              <Star
                size={24}
                style={{
                  color: j < rating ? "#D4A843" : "rgba(201,168,76,0.3)",
                }}
                fill={j < rating ? "#D4A843" : "none"}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Wishlist() {
  const [wishlist, setWishlist] = useState(WISHLIST);
  const treks = TREKS.filter((t) => wishlist.includes(t.slug));

  return (
    <div>
      <h2 className="font-display text-2xl mb-5" style={{ color: "#1A1A1A" }}>
        Wishlist
      </h2>
      {treks.length === 0 && (
        <div
          className="py-12 text-center"
          data-ocid="wishlist.empty_state"
          style={{ color: "#4A4A4A" }}
        >
          Your wishlist is empty.{" "}
          <a href="/treks" className="underline" style={{ color: "#F88379" }}>
            Browse treks
          </a>
        </div>
      )}
      <div className="grid gap-4">
        {treks.map((trek) => (
          <div
            key={trek.slug}
            className="p-4 rounded-xl flex gap-4 items-center"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(248,131,121,0.2)",
            }}
          >
            <img
              src={trek.heroImage}
              alt={trek.name}
              className="w-20 h-14 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <div
                className="font-display text-base"
                style={{ color: "#1A1A1A" }}
              >
                {trek.name}
              </div>
              <div className="text-xs mt-0.5" style={{ color: "#4A4A4A" }}>
                {trek.durationDays} days · {trek.difficulty} · from ₹
                {trek.basePrice.toLocaleString("en-IN")}
              </div>
              <div className="text-xs mt-1" style={{ color: "#D4A843" }}>
                Next batch: Jan 15, 2026 · 4 seats left
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href={`/book/${trek.slug}`}
                className="text-xs px-3 py-1.5 rounded-xl"
                style={{ background: "#F88379", color: "#1A1A1A" }}
              >
                Book Now
              </a>
              <button
                type="button"
                onClick={() =>
                  setWishlist((prev) => prev.filter((s) => s !== trek.slug))
                }
                className="text-xs px-3 py-1.5 rounded-xl flex items-center justify-center gap-1"
                style={{
                  background: "rgba(248,131,121,0.15)",
                  color: "#4A4A4A",
                }}
              >
                <Heart size={11} /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Referrals() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard
      .writeText(`https://shailhikers.com?ref=${MOCK_USER.referralCode}`)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        /* ignore */
      });
  };

  return (
    <div>
      <h2 className="font-display text-2xl mb-5" style={{ color: "#1A1A1A" }}>
        Referrals
      </h2>
      <div
        className="p-5 rounded-2xl mb-6"
        style={{
          background: "rgba(248,131,121,0.12)",
          border: "1px solid rgba(248,131,121,0.3)",
        }}
      >
        <h3 className="font-display text-lg mb-1" style={{ color: "#1A1A1A" }}>
          Your Referral Code
        </h3>
        <p className="text-xs mb-3" style={{ color: "#4A4A4A" }}>
          Share and earn ₹500 when your friend books a trek
        </p>
        <div className="flex gap-2">
          <div
            className="flex-1 px-4 py-2 rounded-xl font-mono text-lg font-bold tracking-widest"
            style={{
              background: "rgba(255,255,255,0.9)",
              color: "#D4A843",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            {MOCK_USER.referralCode}
          </div>
          <button
            type="button"
            onClick={copy}
            className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{
              background: copied ? "rgba(74,222,128,0.2)" : "#F88379",
              color: copied ? "#4ade80" : "#1A1A1A",
            }}
          >
            {copied ? <Check size={16} /> : "Copy"}
          </button>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm" style={{ color: "#4A4A4A" }}>
            Available credit:
          </span>
          <span className="font-display text-xl" style={{ color: "#D4A843" }}>
            ₹{MOCK_USER.referralCredit.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
      <h3
        className="text-sm font-semibold mb-3 uppercase tracking-wide"
        style={{ color: "#4A4A4A" }}
      >
        Referral History
      </h3>
      <div className="grid gap-3">
        {REFERRALS.map((r) => (
          <div
            key={r.name}
            className="p-3 rounded-xl flex items-center gap-3"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(248,131,121,0.2)",
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(248,131,121,0.2)" }}
            >
              <User size={16} style={{ color: "#F88379" }} />
            </div>
            <div className="flex-1">
              <div
                className="font-semibold text-sm"
                style={{ color: "#1A1A1A" }}
              >
                {r.name}
              </div>
              <div className="text-xs" style={{ color: "#4A4A4A" }}>
                {r.city} · {r.date}
              </div>
            </div>
            <div className="text-right">
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background:
                    r.status === "Booked"
                      ? "rgba(74,222,128,0.12)"
                      : "rgba(201,168,76,0.12)",
                  color: r.status === "Booked" ? "#4ade80" : "#D4A843",
                }}
              >
                {r.status}
              </span>
              {r.credit > 0 && (
                <div className="text-xs mt-0.5" style={{ color: "#D4A843" }}>
                  +₹{r.credit}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsPanel() {
  const [profile, setProfile] = useState({
    name: MOCK_USER.name,
    email: MOCK_USER.email,
    phone: MOCK_USER.phone,
    city: MOCK_USER.city,
    dob: MOCK_USER.dateOfBirth,
  });
  const [notifs, setNotifs] = useState(MOCK_USER.notifications);
  const [saved, setSaved] = useState(false);

  const inputClass =
    "w-full px-3 py-2 rounded-lg text-sm bg-transparent border outline-none";
  const inputStyle = {
    borderColor: "rgba(248,131,121,0.4)",
    color: "#1A1A1A",
    background: "rgba(255,255,255,0.8)",
  };

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <h2 className="font-display text-2xl mb-5" style={{ color: "#1A1A1A" }}>
        Settings
      </h2>
      <div
        className="p-5 rounded-xl mb-5"
        style={{
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(248,131,121,0.25)",
        }}
      >
        <h3
          className="font-display text-lg mb-4 flex items-center gap-2"
          style={{ color: "#1A1A1A" }}
        >
          <Camera size={16} style={{ color: "#F88379" }} /> Profile
        </h3>
        <div className="flex items-center gap-4 mb-4">
          <img
            src={MOCK_USER.profilePhoto}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
            style={{ border: "3px solid #F88379" }}
          />
          <button
            type="button"
            className="text-sm px-4 py-2 rounded-lg"
            style={{ background: "rgba(248,131,121,0.2)", color: "#F88379" }}
          >
            Change Photo
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="dash-name"
              className="block text-xs mb-1"
              style={{ color: "#4A4A4A" }}
            >
              Full Name
            </label>
            <input
              id="dash-name"
              className={inputClass}
              style={inputStyle}
              value={profile.name}
              onChange={(e) =>
                setProfile((p) => ({ ...p, name: e.target.value }))
              }
            />
          </div>
          <div>
            <label
              htmlFor="dash-email"
              className="block text-xs mb-1"
              style={{ color: "#4A4A4A" }}
            >
              Email
            </label>
            <input
              id="dash-email"
              className={inputClass}
              style={inputStyle}
              value={profile.email}
              onChange={(e) =>
                setProfile((p) => ({ ...p, email: e.target.value }))
              }
            />
          </div>
          <div>
            <label
              htmlFor="dash-phone"
              className="block text-xs mb-1"
              style={{ color: "#4A4A4A" }}
            >
              Phone
            </label>
            <input
              id="dash-phone"
              className={inputClass}
              style={inputStyle}
              value={profile.phone}
              onChange={(e) =>
                setProfile((p) => ({ ...p, phone: e.target.value }))
              }
            />
          </div>
          <div>
            <label
              htmlFor="dash-city"
              className="block text-xs mb-1"
              style={{ color: "#4A4A4A" }}
            >
              City
            </label>
            <input
              id="dash-city"
              className={inputClass}
              style={inputStyle}
              value={profile.city}
              onChange={(e) =>
                setProfile((p) => ({ ...p, city: e.target.value }))
              }
            />
          </div>
          <div>
            <label
              htmlFor="dash-dob"
              className="block text-xs mb-1"
              style={{ color: "#4A4A4A" }}
            >
              Date of Birth
            </label>
            <input
              id="dash-dob"
              type="date"
              className={inputClass}
              style={inputStyle}
              value={profile.dob ?? ""}
              onChange={(e) =>
                setProfile((p) => ({ ...p, dob: e.target.value }))
              }
            />
          </div>
        </div>
      </div>

      <div
        className="p-5 rounded-xl mb-5"
        style={{
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(248,131,121,0.25)",
        }}
      >
        <h3
          className="font-display text-lg mb-4 flex items-center gap-2"
          style={{ color: "#1A1A1A" }}
        >
          <Bell size={16} style={{ color: "#F88379" }} /> Notifications
        </h3>
        {(Object.entries(notifs) as [keyof typeof notifs, boolean][]).map(
          ([key, val]) => (
            <label
              key={key}
              className="flex items-center justify-between py-2.5 border-b last:border-0 cursor-pointer"
              style={{ borderColor: "rgba(248,131,121,0.1)" }}
            >
              <span className="text-sm" style={{ color: "#4A4A4A" }}>
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (s) => s.toUpperCase())}
              </span>
              <input
                type="checkbox"
                checked={val}
                onChange={(e) =>
                  setNotifs((n) => ({ ...n, [key]: e.target.checked }))
                }
                className="w-4 h-4 accent-[#F88379]"
              />
            </label>
          ),
        )}
      </div>

      <div
        className="p-5 rounded-xl mb-5"
        style={{
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(248,131,121,0.25)",
        }}
      >
        <h3
          className="font-display text-lg mb-3 flex items-center gap-2"
          style={{ color: "#1A1A1A" }}
        >
          <Lock size={16} style={{ color: "#F88379" }} /> Security
        </h3>
        <button
          type="button"
          className="text-sm px-4 py-2 rounded-lg"
          style={{ background: "rgba(248,131,121,0.2)", color: "#F88379" }}
        >
          Change Password
        </button>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg"
          style={{
            background: "rgba(248,131,121,0.1)",
            color: "#F88379",
            border: "1px solid rgba(248,131,121,0.3)",
          }}
        >
          <Trash2 size={14} /> Delete Account
        </button>
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={save}
          data-ocid="settings.save_button"
          className="px-6 py-2 rounded-xl text-sm font-semibold flex items-center gap-2"
          style={{
            background: saved ? "rgba(74,222,128,0.2)" : "#F88379",
            color: saved ? "#4ade80" : "#1A1A1A",
          }}
        >
          {saved ? (
            <>
              <Check size={14} /> Saved!
            </>
          ) : (
            "Save Changes"
          )}
        </motion.button>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionComponents: Record<string, React.ReactNode> = {
    overview: <Overview onSection={setActiveSection} />,
    bookings: <MyBookings />,
    upcoming: <UpcomingTrek />,
    documents: <Documents />,
    reviews: <Reviews />,
    wishlist: <Wishlist />,
    referrals: <Referrals />,
    settings: <SettingsPanel />,
  };

  const activeLabel =
    SECTIONS.find((s) => s.id === activeSection)?.label ?? "Dashboard";

  return (
    <div className="min-h-screen" style={{ background: "#E6D8C4" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col w-56 flex-shrink-0">
            <div
              className="p-4 rounded-2xl sticky top-24"
              style={{
                background: "rgba(255,255,255,0.95)",
                border: "1px solid rgba(248,131,121,0.25)",
              }}
            >
              <div
                className="flex items-center gap-3 mb-6 pb-4 border-b"
                style={{ borderColor: "rgba(248,131,121,0.2)" }}
              >
                <img
                  src={MOCK_USER.profilePhoto}
                  alt={MOCK_USER.name}
                  className="w-10 h-10 rounded-full object-cover"
                  style={{ border: "2px solid #F88379" }}
                />
                <div className="min-w-0">
                  <div
                    className="font-semibold text-sm truncate"
                    style={{ color: "#1A1A1A" }}
                  >
                    {MOCK_USER.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: tierConfig[MOCK_USER.loyaltyTier].color }}
                  >
                    {MOCK_USER.loyaltyTier}
                  </div>
                </div>
              </div>
              {SECTIONS.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setActiveSection(sec.id)}
                    data-ocid={`dashboard.nav.${sec.id}`}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg mb-1 text-sm transition-all duration-200 text-left"
                    style={{
                      background: isActive
                        ? "rgba(248,131,121,0.2)"
                        : "transparent",
                      color: isActive ? "#1A1A1A" : "#4A4A4A",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    <Icon
                      size={16}
                      style={{ color: isActive ? "#F88379" : "#4A4A4A" }}
                    />
                    {sec.label}
                  </button>
                );
              })}
              <div
                className="mt-4 pt-4 border-t"
                style={{ borderColor: "rgba(248,131,121,0.2)" }}
              >
                <button
                  type="button"
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm"
                  style={{ color: "rgba(232,160,170,0.6)" }}
                >
                  <LogOut size={15} /> Sign Out
                </button>
              </div>
            </div>
          </aside>

          {/* Mobile: dropdown section picker */}
          <div className="lg:hidden w-full mb-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold"
              style={{
                background: "rgba(255,255,255,0.95)",
                border: "1px solid rgba(248,131,121,0.3)",
                color: "#1A1A1A",
              }}
            >
              <span>{activeLabel}</span>
              <ChevronRight
                size={16}
                className={mobileMenuOpen ? "rotate-90" : ""}
                style={{ transition: "transform 0.2s" }}
              />
            </button>
            {mobileMenuOpen && (
              <div
                className="mt-1 rounded-xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(248,131,121,0.25)",
                }}
              >
                {SECTIONS.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => {
                        setActiveSection(sec.id);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-left border-b last:border-0"
                      style={{
                        borderColor: "rgba(248,131,121,0.1)",
                        color: activeSection === sec.id ? "#1A1A1A" : "#4A4A4A",
                        background:
                          activeSection === sec.id
                            ? "rgba(248,131,121,0.15)"
                            : "transparent",
                      }}
                    >
                      <Icon
                        size={15}
                        style={{
                          color:
                            activeSection === sec.id ? "#F88379" : "#4A4A4A",
                        }}
                      />
                      {sec.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {sectionComponents[activeSection]}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
