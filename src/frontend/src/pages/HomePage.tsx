import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { HeroSection } from "@/components/HeroSection";
import { SearchBar } from "@/components/SearchBar";
import { SocialProofToast } from "@/components/SocialProofToast";
import { AwardsStripSection } from "@/components/sections/AwardsStripSection";
import { BatchCalendarSection } from "@/components/sections/BatchCalendarSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { CompareTeaserSection } from "@/components/sections/CompareTeaserSection";
import { CorporateCTASection } from "@/components/sections/CorporateCTASection";
import { DifficultySelectorSection } from "@/components/sections/DifficultySelectorSection";
import { FeaturedTreksSection } from "@/components/sections/FeaturedTreksSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { MapSection } from "@/components/sections/MapSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WeatherStripSection } from "@/components/sections/WeatherStripSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { YatraSection } from "@/components/sections/YatraSection";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "TouristInformationCenter",
  "@id": "https://shailhikers.com",
  name: "Shail Hikers",
  description:
    "Uttarakhand's premier Himalayan trekking and yatra company based in Dehradun. 14 legendary treks, 4 sacred yatras, certified guides, 10,000+ happy trekkers since 2015.",
  url: "https://shailhikers.com",
  telephone: "+91-8279888470",
  email: "Shailhikers@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dehradun",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    postalCode: "248001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 30.3165, longitude: 78.0322 },
  openingHours: "Mo-Su 07:00-22:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "847",
    bestRating: "5",
  },
  sameAs: [
    "https://www.instagram.com/shailhikers",
    "https://www.facebook.com/shailhikers",
  ],
};

export default function HomePage() {
  return (
    <>
      {/* SEO: JSON-LD LocalBusiness schema */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* All 18 homepage sections in order */}
      <HeroSection />
      <SearchBar />
      <FeaturedTreksSection />
      <YatraSection />
      <StatsSection />
      <WhyUsSection />
      <PackagesSection />
      <DifficultySelectorSection />
      <BatchCalendarSection />
      <TestimonialsSection />
      <CorporateCTASection />
      <InstagramSection />
      <BlogPreviewSection />
      <NewsletterSection />
      <MapSection />
      <CompareTeaserSection />
      <WeatherStripSection />
      <AwardsStripSection />

      {/* Overlays */}
      <SocialProofToast />
      <ExitIntentPopup />
    </>
  );
}
