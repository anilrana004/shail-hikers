import { Link } from "@tanstack/react-router";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const _treks = [
  { name: "Kedarkantha", slug: "kedarkantha", color: "#2D5016" },
  { name: "Har Ki Dun", slug: "har-ki-dun", color: "#2D5016" },
  { name: "Buran Ghati", slug: "buran-ghati", color: "#B5525E" },
  { name: "Rupin Pass", slug: "rupin-pass", color: "#B5525E" },
  { name: "Bali Pass", slug: "bali-pass", color: "#B5525E" },
  { name: "Valley of Flowers", slug: "valley-of-flowers", color: "#2D5016" },
  { name: "Dayara Bugyal", slug: "dayara-bugyal", color: "#2D5016" },
  { name: "Nag Tibba", slug: "nag-tibba", color: "#2D5016" },
  {
    name: "Chopta Chandrashila",
    slug: "chopta-chandrashila",
    color: "#2D5016",
  },
  { name: "Phulara Ridge", slug: "phulara-ridge", color: "#B5525E" },
  { name: "Borasu Pass", slug: "borasu-pass", color: "#B5525E" },
  { name: "Chandernahan Lake", slug: "chandernahan-lake", color: "#2D5016" },
  { name: "Ruinsara Tal", slug: "ruinsara-tal", color: "#2D5016" },
  { name: "Chaainsheel Bugyal", slug: "chaainsheel-bugyal", color: "#2D5016" },
];

const FOOTER_TREKS = [
  { name: "Kedarkantha", slug: "kedarkantha", color: "#2D5016" },
  { name: "Har Ki Dun", slug: "har-ki-dun", color: "#2D5016" },
  { name: "Valley of Flowers", slug: "valley-of-flowers", color: "#2D5016" },
  { name: "Dayara Bugyal", slug: "dayara-bugyal", color: "#2D5016" },
  { name: "Nag Tibba", slug: "nag-tibba", color: "#2D5016" },
  {
    name: "Chopta Chandrashila",
    slug: "chopta-chandrashila",
    color: "#2D5016",
  },
  { name: "Chandernahan Lake", slug: "chandernahan-lake", color: "#C9A84C" },
  { name: "Chaainsheel Bugyal", slug: "chaainsheel-bugyal", color: "#2D5016" },
  { name: "Phulara Ridge", slug: "phulara-ridge", color: "#C9A84C" },
  { name: "Ruinsara Tal", slug: "ruinsara-tal", color: "#C9A84C" },
  { name: "Buran Ghati", slug: "buran-ghati", color: "#B5525E" },
  { name: "Rupin Pass", slug: "rupin-pass", color: "#B5525E" },
  { name: "Bali Pass", slug: "bali-pass", color: "#B5525E" },
  { name: "Borasu Pass", slug: "borasu-pass", color: "#B5525E" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const year = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer style={{ background: "#1A0E10" }} className="text-sm">
      {/* Trust badges bar */}
      <div style={{ background: "#2D1B1E", borderTop: "1px solid #B5525E33" }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-8">
          {[
            { icon: "★", label: "10,000+ Happy Trekkers" },
            { icon: "★", label: "Since 2015" },
            { icon: "★", label: "ITBP-Certified Guides" },
            { icon: "★", label: "24/7 Support" },
            { icon: "★", label: "100% Safe Record" },
            { icon: "★", label: "₹10L Group Insurance" },
          ].map((t) => (
            <span
              key={t.label}
              className="flex items-center gap-2 font-medium tracking-wide text-xs uppercase"
              style={{ color: "#FAD4D8" }}
            >
              <span style={{ color: "#C9A84C" }}>{t.icon}</span>
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1 — Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <svg
              width="28"
              height="28"
              viewBox="0 0 40 40"
              fill="none"
              role="img"
              aria-label="Shail Hikers mountain logo"
            >
              <path d="M20 4L36 34H4L20 4Z" fill="#B5525E" />
              <path d="M20 14L28 34H12L20 14Z" fill="#1A0E10" opacity="0.5" />
              <circle cx="20" cy="34" r="2" fill="#C9A84C" />
            </svg>
            <span
              style={{ color: "#FAD4D8", fontFamily: "var(--font-display)" }}
              className="text-xl font-semibold tracking-widest uppercase"
            >
              Shail Hikers
            </span>
          </Link>
          <p
            style={{ color: "#E8A0AA" }}
            className="text-xs leading-relaxed mb-6"
          >
            Uttarakhand's finest Himalayan trekking company. Crafting
            extraordinary journeys across the high Himalayas since 2015.
          </p>
          <div className="flex gap-3 mb-6">
            {[
              {
                icon: <Instagram size={15} />,
                href: "https://instagram.com/shailhikers",
                label: "Instagram",
              },
              { icon: <Facebook size={15} />, href: "#", label: "Facebook" },
              { icon: <Youtube size={15} />, href: "#", label: "YouTube" },
              { icon: <Twitter size={15} />, href: "#", label: "Twitter" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                style={{
                  background: "#2D1B1E",
                  border: "1px solid #B5525E44",
                  color: "#E8A0AA",
                }}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:border-[#B5525E] hover:text-[#FAD4D8] transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="space-y-1.5">
            {[
              "Ministry of Tourism Reg.",
              "AATO Member",
              "UK Tourism Licensed",
            ].map((c) => (
              <div key={c} className="flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#C9A84C" }}
                />
                <span style={{ color: "#E8A0AA77" }} className="text-[10px]">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Col 2 — Treks (all 14 with colored difficulty dots) */}
        <div>
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-5 pb-2"
            style={{ color: "#FAD4D8", borderBottom: "1px solid #B5525E44" }}
          >
            Treks
          </h3>
          <ul className="space-y-2">
            {FOOTER_TREKS.map((t) => (
              <li key={t.slug} className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: t.color }}
                />
                <Link
                  to="/treks/$slug"
                  params={{ slug: t.slug }}
                  style={{ color: "#E8A0AA" }}
                  className="hover:text-[#FAD4D8] transition-colors text-xs"
                >
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Yatras + Packages */}
        <div>
          <h3
            style={{ color: "#FAD4D8", borderBottom: "1px solid #B5525E44" }}
            className="text-xs font-bold uppercase tracking-widest mb-5 pb-2"
          >
            Yatras & Tours
          </h3>
          <ul className="space-y-2 mb-6">
            {[
              { label: "Chardham Yatra", to: "/yatras/chardham-yatra" },
              { label: "Do Dham Yatra", to: "/yatras/do-dham-yatra" },
              { label: "Mussoorie Tour", to: "/yatras/mussoorie-tour" },
              { label: "Rishikesh Tour", to: "/yatras/rishikesh-tour" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to as "/"}
                  style={{ color: "#E8A0AA" }}
                  className="hover:text-[#FAD4D8] transition-colors text-xs"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3
            style={{ color: "#FAD4D8", borderBottom: "1px solid #B5525E44" }}
            className="text-xs font-bold uppercase tracking-widest mb-3 pb-2"
          >
            Explore
          </h3>
          <ul className="space-y-2">
            {[
              { label: "All Packages", to: "/packages" },
              { label: "Corporate Groups", to: "/corporate" },
              { label: "Trek Finder Quiz", to: "/trek-finder" },
              { label: "Compare Treks", to: "/compare" },
              { label: "Gallery", to: "/gallery" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to as "/"}
                  style={{ color: "#E8A0AA" }}
                  className="hover:text-[#FAD4D8] transition-colors text-xs"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Company */}
        <div>
          <h3
            style={{ color: "#FAD4D8", borderBottom: "1px solid #B5525E44" }}
            className="text-xs font-bold uppercase tracking-widest mb-5 pb-2"
          >
            Company
          </h3>
          <ul className="space-y-2.5">
            {[
              { label: "About Us", to: "/about" },
              { label: "Our Team", to: "/team" },
              { label: "Blog", to: "/blog" },
              { label: "Contact Us", to: "/contact" },
              { label: "Cancellation Policy", to: "/cancellation-policy" },
              { label: "Terms & Conditions", to: "/terms" },
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Sitemap", to: "/sitemap" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to as "/"}
                  style={{ color: "#E8A0AA" }}
                  className="hover:text-[#FAD4D8] transition-colors text-xs"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="mt-5 flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
            style={{
              background: "#2D1B1E",
              border: "1px solid #B5525E44",
              color: "#FAD4D8",
            }}
          >
            📄 Download Press Kit
          </button>
        </div>

        {/* Col 5 — Contact + Newsletter */}
        <div>
          <h3
            style={{ color: "#FAD4D8", borderBottom: "1px solid #B5525E44" }}
            className="text-xs font-bold uppercase tracking-widest mb-5 pb-2"
          >
            Contact
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <Phone
                size={13}
                style={{ color: "#B5525E" }}
                className="mt-0.5 flex-shrink-0"
              />
              <a
                href="tel:+918279888470"
                style={{ color: "#E8A0AA" }}
                className="hover:text-[#FAD4D8] text-xs"
              >
                +91-8279888470
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail
                size={13}
                style={{ color: "#B5525E" }}
                className="mt-0.5 flex-shrink-0"
              />
              <a
                href="mailto:Shailhikers@gmail.com"
                style={{ color: "#E8A0AA" }}
                className="hover:text-[#FAD4D8] text-xs break-all"
              >
                Shailhikers@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin
                size={13}
                style={{ color: "#B5525E" }}
                className="mt-0.5 flex-shrink-0"
              />
              <span style={{ color: "#E8A0AA" }} className="text-xs">
                Dehradun, Uttarakhand, India
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock
                size={13}
                style={{ color: "#B5525E" }}
                className="mt-0.5 flex-shrink-0"
              />
              <span style={{ color: "#E8A0AA" }} className="text-xs">
                Mon–Sun 7AM–10PM IST
              </span>
            </li>
          </ul>
          <p
            style={{ color: "#FAD4D8" }}
            className="text-xs font-bold mb-1 uppercase tracking-wide"
          >
            Newsletter
          </p>
          <p style={{ color: "#E8A0AA66" }} className="text-[10px] mb-3">
            Join 8,000+ trekkers for tips &amp; offers
          </p>
          {subscribed ? (
            <p className="text-xs font-semibold" style={{ color: "#C9A84C" }}>
              🏔 You're subscribed! Welcome to the tribe.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                style={{
                  background: "#2D1B1E",
                  border: "1px solid #B5525E44",
                  color: "#FAD4D8",
                }}
                className="flex-1 text-xs px-3 py-2 rounded-l-lg outline-none placeholder:text-[#E8A0AA66] focus:border-[#B5525E]"
                data-ocid="footer.newsletter_input"
              />
              <button
                type="submit"
                style={{ background: "#B5525E" }}
                className="px-3 py-2 rounded-r-lg hover:opacity-90 transition-opacity"
                data-ocid="footer.newsletter_submit"
                aria-label="Subscribe to newsletter"
              >
                <Send size={13} style={{ color: "#FAD4D8" }} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar — payment icons + copyright */}
      <div style={{ borderTop: "1px solid #B5525E1A", background: "#150A0C" }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span
              style={{ color: "#E8A0AA66" }}
              className="text-[10px] uppercase tracking-wider mr-1"
            >
              Secure Payments:
            </span>
            {[
              "Razorpay",
              "UPI",
              "Visa",
              "Mastercard",
              "RuPay",
              "NetBanking",
            ].map((p) => (
              <span
                key={p}
                className="text-[10px] px-2 py-0.5 rounded font-medium"
                style={{
                  background: "#2D1B1E",
                  color: "#E8A0AA",
                  border: "1px solid #B5525E22",
                }}
              >
                {p}
              </span>
            ))}
          </div>
          <p style={{ color: "#E8A0AA66" }} className="text-xs">
            &copy; {year} Shail Hikers. All rights reserved.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "shailhikers.com")}`}
              style={{ color: "#B5525E" }}
              className="hover:text-[#FAD4D8] transition-colors"
            >
              Built with caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
