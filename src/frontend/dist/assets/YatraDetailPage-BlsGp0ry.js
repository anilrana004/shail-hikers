import { t as jsxRuntimeExports, j as reactExports, N as useParams, L as Link } from "./index-CmnsDpTB.js";
import { Y as YATRAS } from "./treks-CFuBXqZV.js";
const ACCOMMODATION_DATA = {
  "chardham-yatra": {
    overview: "Accommodation along the Chardham route ranges from basic dharamshalas to premium hotels. Book early (January onwards) for May–June season as demand vastly outstrips supply. Shail Hikers pre-blocks inventory across all tiers.",
    tiers: [
      {
        tier: "Budget",
        stars: 1,
        pricePerNight: 800,
        description: "Clean, functional dormitory or basic double rooms. Ideal for solo pilgrims on a tight budget. Shared bathrooms with hot water (morning hours only).",
        facilities: [
          "Shared bathroom",
          "Basic meals",
          "Locker",
          "WiFi (limited)"
        ],
        sampleHotels: "GMVN Tourist Rest Houses, Dharamshalas at each dham",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&q=80"
      },
      {
        tier: "Standard",
        stars: 2,
        pricePerNight: 2200,
        description: "Comfortable double/twin rooms with attached bathroom. Geyser hot water, room service, and morning bed-tea included. Our most popular tier for families.",
        facilities: [
          "Attached bathroom",
          "Geyser hot water",
          "Room service",
          "Parking",
          "Heater"
        ],
        sampleHotels: "Hotel Mandakini (Kedarnath), Hotel Devlok (Badrinath), Hotel Yamuna (Uttarkashi)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80"
      },
      {
        tier: "Deluxe",
        stars: 3,
        pricePerNight: 4500,
        description: "Well-appointed rooms with mountain views, premium mattresses, and quality in-house restaurant. Ideal for couples and small groups wanting comfort after a long day's journey.",
        facilities: [
          "Mountain view",
          "Restaurant",
          "24hr hot water",
          "TV",
          "Heater",
          "Travel desk"
        ],
        sampleHotels: "Snow Valley Resort (Kedarnath base), Badri Vishal Hotel, Hotel Uttarakhand Grand",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80"
      },
      {
        tier: "Luxury",
        stars: 4,
        pricePerNight: 9e3,
        description: "Premium resort-style accommodation with panoramic Himalayan views, spa, fine dining, and concierge service. Limited availability — book 3+ months ahead for peak season.",
        facilities: [
          "Panoramic views",
          "Spa",
          "Fine dining",
          "Concierge",
          "Airport/station transfers",
          "Butler service"
        ],
        sampleHotels: "Narayan Palace (Badrinath), The Fern Ganga (Rishikesh), Zostel Plus (Haridwar)",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80"
      }
    ]
  },
  "do-dham-yatra": {
    overview: "The Do Dham route offers fewer options than full Chardham but quality has improved significantly since 2022. Accommodation near Kedarnath (Sonprayag/Gaurikund base) and Badrinath town is abundant. Book 2 months in advance for May.",
    tiers: [
      {
        tier: "Budget",
        stars: 1,
        pricePerNight: 700,
        description: "Basic rooms and GMVN rest houses at Sonprayag, Gaurikund, and Badrinath. Clean, functional, and pilgrimage-focused. Hot water by bucket.",
        facilities: ["Basic rooms", "Bucket hot water", "Meals nearby"],
        sampleHotels: "GMVN Tourist Bungalows, Sharma Guest House (Badrinath)",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&q=80"
      },
      {
        tier: "Standard",
        stars: 2,
        pricePerNight: 1800,
        description: "Mid-range double rooms with attached baths and reliable hot water. Most include dinner and breakfast in the room rate.",
        facilities: [
          "Attached bathroom",
          "Hot water",
          "Breakfast included",
          "Heater"
        ],
        sampleHotels: "Hotel Shri Badri (Badrinath), Hotel Kalindi (Sonprayag)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80"
      },
      {
        tier: "Deluxe",
        stars: 3,
        pricePerNight: 3800,
        description: "Quality rooms with Mandakini/Alakananda river views, in-house dining with South Indian and North Indian menus. Best value in this tier.",
        facilities: [
          "River view",
          "Restaurant",
          "24hr hot water",
          "TV",
          "Room heater"
        ],
        sampleHotels: "Snow Crest Inn (Badrinath), Hotel Devlok Kedarnath",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80"
      },
      {
        tier: "Luxury",
        stars: 4,
        pricePerNight: 7500,
        description: "Premium mountain resort accommodation with panoramic views, spa treatments, and premium vegetarian dining. Very limited availability near Kedarnath and Badrinath.",
        facilities: [
          "Premium views",
          "Spa",
          "Fine dining",
          "Concierge",
          "Yoga deck"
        ],
        sampleHotels: "The Fern (en route), Dwarika's Devi Darshan",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80"
      }
    ]
  },
  "rishikesh-tour": {
    overview: "Rishikesh has an exceptional range of accommodation from ashram stays to luxury riverside resorts. The town is divided by the Ganga — Laxman Jhula side has backpacker/ashram options, Tapovan area has luxury resorts.",
    tiers: [
      {
        tier: "Budget",
        stars: 1,
        pricePerNight: 500,
        description: "Ashram dormitories and guesthouses. Yoga retreat packages often include meals. Simple, clean, and deeply spiritual. Experience authentic ashram life.",
        facilities: [
          "Shared rooms",
          "Yoga classes",
          "Vegetarian meals",
          "Meditation sessions"
        ],
        sampleHotels: "Parmarth Niketan, Sivananda Ashram, Swarg Ashram guesthouses",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&q=80"
      },
      {
        tier: "Standard",
        stars: 2,
        pricePerNight: 1500,
        description: "Mid-range hotels and camps along the Ganga. River-facing rooms, rooftop yoga areas, and in-house cafes with organic food. Very popular with young travelers.",
        facilities: ["Ganga view", "Rooftop café", "AC", "WiFi", "Breakfast"],
        sampleHotels: "Hotel Surya, Zostel Rishikesh, Camp Namaste",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80"
      },
      {
        tier: "Deluxe",
        stars: 3,
        pricePerNight: 3200,
        description: "Boutique hotels with pool, spa, and private Ganga-view decks. Excellent restaurants with world cuisine. Perfect for couples and wellness retreats.",
        facilities: [
          "Pool",
          "Spa",
          "Ganga view balcony",
          "Multi-cuisine",
          "Yoga deck",
          "Cycling"
        ],
        sampleHotels: "Aloha on the Ganges, Aqua Terra Resort, The Hideout Hostel (premium)",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80"
      },
      {
        tier: "Luxury",
        stars: 5,
        pricePerNight: 8500,
        description: "World-class riverside resorts with private plunge pools, Ayurvedic spas, Michelin-class dining, and wellness programs. The ultimate Rishikesh experience.",
        facilities: [
          "Private pool",
          "Ayurvedic spa",
          "Fine dining",
          "River cruises",
          "Butler",
          "Airport transfer"
        ],
        sampleHotels: "Ananda in the Himalayas, Vana Retreat, Taj Rishikesh",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80"
      }
    ]
  },
  "mussoorie-tour": {
    overview: "Mussoorie has abundant accommodation options across all budgets. Mall Road area is most convenient for sightseeing. The Library area offers quieter stays with better views. Book 4–6 weeks ahead for peak summer (May–July) and Christmas season.",
    tiers: [
      {
        tier: "Budget",
        stars: 1,
        pricePerNight: 600,
        description: "Clean guesthouses and homestays, typically a short walk from Mall Road. Family-run properties with home-cooked breakfast. Great for experiencing local Mussoorie culture.",
        facilities: [
          "Basic rooms",
          "Home breakfast",
          "Hot water",
          "Valley views from some"
        ],
        sampleHotels: "Hotel Woodland, Mayfair Homestay, Prakash Guest House",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&q=80"
      },
      {
        tier: "Standard",
        stars: 2,
        pricePerNight: 1800,
        description: "Well-maintained hotels with valley or mountain views, attached restaurants, and convenient Mall Road location. Most popular category for family trips.",
        facilities: [
          "Valley view",
          "Restaurant",
          "Room service",
          "Parking",
          "WiFi"
        ],
        sampleHotels: "Hotel Broadway, Kasmanda Palace (heritage), Hotel Roselyn",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80"
      },
      {
        tier: "Deluxe",
        stars: 3,
        pricePerNight: 4e3,
        description: "Premium hotels with panoramic Himalayan views, in-house fine dining, and heritage architecture. Experience British colonial charm with modern comforts.",
        facilities: [
          "Panoramic views",
          "Heritage décor",
          "Fine dining",
          "Bonfire evenings",
          "Spa"
        ],
        sampleHotels: "Savoy Heritage Hotel, The Carlton's Plum, Fortune Resort",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80"
      },
      {
        tier: "Luxury",
        stars: 5,
        pricePerNight: 9500,
        description: "Iconic heritage grand hotels and luxury mountain retreats. Private cottages with fireplaces, butler service, and exclusive dining experiences.",
        facilities: [
          "Private cottage",
          "Fireplace",
          "Butler",
          "Spa",
          "Heritage architecture",
          "Exclusive dining"
        ],
        sampleHotels: "JW Marriott Mussoorie Walnut Grove, The Amber Hotel, Lal Bahadur Shastri NPA",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80"
      }
    ]
  }
};
function YatraAccommodationTab({ yatra }) {
  const data = ACCOMMODATION_DATA[yatra.slug] ?? ACCOMMODATION_DATA["rishikesh-tour"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "p-5 rounded-xl",
        style: {
          background: "rgba(181,82,94,0.08)",
          borderLeft: "4px solid #B5525E"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#FAD4D8", lineHeight: 1.7 }, children: data.overview })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: data.tiers.map((tier) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "rounded-xl overflow-hidden",
        style: { border: "1px solid rgba(232,160,170,0.2)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-48 h-40 md:h-auto flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: tier.image,
              alt: `${tier.tier} accommodation`,
              className: "w-full h-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2 flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-3 py-1 rounded-full text-sm font-bold",
                    style: {
                      background: "rgba(181,82,94,0.2)",
                      color: "#B5525E"
                    },
                    children: tier.tier
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#C9A84C" }, children: [
                  "★".repeat(tier.stars),
                  "☆".repeat(5 - tier.stars)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", style: { color: "#C9A84C" }, children: [
                "from ₹",
                tier.pricePerNight.toLocaleString("en-IN"),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-sm font-normal",
                    style: { color: "#E8A0AA" },
                    children: "/night"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "mb-3",
                style: {
                  color: "#E8A0AA",
                  fontSize: "0.875rem",
                  lineHeight: 1.6
                },
                children: tier.description
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: tier.facilities.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-2 py-0.5 rounded text-xs",
                style: {
                  background: "rgba(250,212,216,0.06)",
                  color: "#E8A0AA",
                  border: "1px solid rgba(232,160,170,0.2)"
                },
                children: f
              },
              f
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", style: { color: "#E8A0AA" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C9A84C" }, children: "Sample:" }),
              " ",
              tier.sampleHotels
            ] })
          ] })
        ] })
      },
      tier.tier
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-5 rounded-xl text-center",
        style: {
          background: "rgba(201,168,76,0.08)",
          border: "1px solid rgba(201,168,76,0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mb-1", style: { color: "#C9A84C" }, children: "Upgrade Accommodation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", style: { color: "#E8A0AA" }, children: "Upgrade your accommodation tier at the time of booking or up to 30 days before departure, subject to availability." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "tel:+918279888470",
              "data-ocid": "accommodation.upgrade_button",
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold",
              style: { background: "#B5525E", color: "#FAD4D8" },
              children: "📞 Call to Upgrade — +91-8279888470"
            }
          )
        ]
      }
    )
  ] });
}
const DARSHAN_DATA = {
  "chardham-yatra": {
    temples: [
      {
        name: "Yamunotri Temple",
        summerOpen: "6:00 AM",
        summerClose: "8:00 PM",
        winterOpen: "Closed (Nov–Apr)",
        winterClose: "Closed",
        closedMonths: "November to April",
        peakQueue: "3–5 hours (May–June, Sep–Oct)",
        offPeakQueue: "30–60 minutes",
        vipDarshan: "₹1,100 per person — special darshan queue with separate entry",
        vipCost: "₹1,100",
        specialPujas: [
          {
            name: "Abhishek",
            time: "6:00–7:00 AM",
            cost: "₹551",
            significance: "Ritual bathing of the deity with Ganga water, milk, and honey — most auspicious puja"
          },
          {
            name: "Rudrabhishek",
            time: "7:00–8:00 AM",
            cost: "₹1,100",
            significance: "Vedic chanting + abhishek — highly recommended for wish fulfillment"
          },
          {
            name: "Evening Aarti",
            time: "7:00–8:00 PM",
            cost: "Free",
            significance: "Daily sunset farewell aarti — deeply moving, no queue needed"
          }
        ]
      },
      {
        name: "Gangotri Temple",
        summerOpen: "6:15 AM",
        summerClose: "2:00 PM (break), 3:00 PM–9:00 PM",
        winterOpen: "Closed (Nov–Apr)",
        winterClose: "Closed",
        closedMonths: "November to April",
        peakQueue: "2–4 hours (May–June)",
        offPeakQueue: "20–45 minutes",
        vipDarshan: "₹1,500 — dedicated VIP line with 15-minute limit at sanctum",
        vipCost: "₹1,500",
        specialPujas: [
          {
            name: "Ganga Puja",
            time: "6:15 AM",
            cost: "₹251",
            significance: "Offering flowers and lamps to Goddess Ganga at the Bhagirathi river bank"
          },
          {
            name: "Bhagirathi Aarti",
            time: "Sunrise",
            cost: "Free",
            significance: "Sunrise aarti at the river ghat — the most photographed moment at Gangotri"
          },
          {
            name: "Rudrabhishek",
            time: "7:00–9:00 AM",
            cost: "₹1,100",
            significance: "Shiva abhishek performed by temple priests — must book 1 day in advance"
          }
        ]
      },
      {
        name: "Kedarnath Temple",
        summerOpen: "4:00 AM (Abhishek), 6:00 AM (General darshan)",
        summerClose: "9:00 PM",
        winterOpen: "Closed (Nov–Apr)",
        winterClose: "Closed",
        closedMonths: "November to April (Shivalinga shifted to Ukhimath)",
        peakQueue: "4–8 hours (May–June, Sep–Oct). Lines form from 2 AM",
        offPeakQueue: "1–2 hours",
        vipDarshan: "₹3,000 per person — VIP darshan through official DSGMC token system",
        vipCost: "₹3,000",
        specialPujas: [
          {
            name: "Rudra Abhishek",
            time: "4:00–6:00 AM",
            cost: "₹5,500",
            significance: "The most sacred puja at Kedarnath — direct abhishek of the Jyotirlinga. Book weeks in advance"
          },
          {
            name: "Rudrabhishek (Regular)",
            time: "6:00 AM onwards",
            cost: "₹2,100",
            significance: "Standard Shivalinga abhishek with 108 offerings — very powerful"
          },
          {
            name: "Samput Path",
            time: "By appointment",
            cost: "₹11,000",
            significance: "Full day Vedic recitation by 5 priests — for major life events and ancestors"
          },
          {
            name: "Bhog Aarti",
            time: "3:00–4:00 PM",
            cost: "Free (view from distance)",
            significance: "Bhog (food offering) aarti — one of the most devotional moments of the day"
          }
        ]
      },
      {
        name: "Badrinath Temple",
        summerOpen: "4:30 AM (Mahabhishek), 6:00 AM (General)",
        summerClose: "9:00 PM (Shayan Aarti at 8:30 PM)",
        winterOpen: "Closed (Nov–Apr)",
        winterClose: "Closed",
        closedMonths: "November to April (deity shifted to Pandukeshwar)",
        peakQueue: "3–6 hours (May–June)",
        offPeakQueue: "45–90 minutes",
        vipDarshan: "₹2,500 — through Badrinath-Kedarnath Temple Committee (BKTC) online portal",
        vipCost: "₹2,500",
        specialPujas: [
          {
            name: "Mahabhishek",
            time: "4:30–6:00 AM",
            cost: "₹7,500",
            significance: "The supreme puja at Badrinath — a full ritual bathing of the deity with 16 sacred substances. The most auspicious darshan possible"
          },
          {
            name: "Abhishek",
            time: "7:00 AM onwards",
            cost: "₹1,500",
            significance: "Regular deity abhishek with Tapt Kund water, Tulsi, and seasonal flowers"
          },
          {
            name: "Shayan Aarti",
            time: "8:30 PM",
            cost: "Free",
            significance: "The bedtime aarti of Lord Vishnu — incredibly moving ceremony, witness if possible"
          },
          {
            name: "Vishnusahastranaam",
            time: "By appointment",
            cost: "₹2,100",
            significance: "Recitation of the 1,000 names of Lord Vishnu by temple priests"
          }
        ]
      }
    ],
    generalNotes: [
      "Register on the Chardham Yatra official government portal before travel — mandatory since 2022",
      "Carry biometric registration slip for entry to Kedarnath and Badrinath",
      "Medical certificate required if trekking to Kedarnath on foot",
      "All pujas can be booked through Shail Hikers on your behalf — included in VIP package tier",
      "Carry exact change in ₹10–₹100 notes for donations and prasad purchases",
      "Queues are dramatically shorter in September–October vs May–June"
    ]
  },
  "do-dham-yatra": {
    temples: [
      {
        name: "Kedarnath Temple",
        summerOpen: "4:00 AM (Abhishek), 6:00 AM (General darshan)",
        summerClose: "9:00 PM",
        winterOpen: "Closed (Nov–Apr)",
        winterClose: "Closed",
        closedMonths: "November to April",
        peakQueue: "4–8 hours (peak) — arrive by 3 AM for manageable wait",
        offPeakQueue: "1–2 hours (Sep–Oct)",
        vipDarshan: "₹3,000 per person via official DSGMC queue",
        vipCost: "₹3,000",
        specialPujas: [
          {
            name: "Rudra Abhishek",
            time: "4:00–6:00 AM",
            cost: "₹5,500",
            significance: "Direct abhishek of the Jyotirlinga. Most auspicious. Book weeks ahead."
          },
          {
            name: "Rudrabhishek (Regular)",
            time: "6:00 AM",
            cost: "₹2,100",
            significance: "Standard Shivalinga abhishek — 108 sacred offerings"
          },
          {
            name: "Bhog Aarti",
            time: "3:00–4:00 PM",
            cost: "Free",
            significance: "Daily afternoon food offering aarti"
          }
        ]
      },
      {
        name: "Badrinath Temple",
        summerOpen: "4:30 AM (Mahabhishek), 6:00 AM (General)",
        summerClose: "9:00 PM",
        winterOpen: "Closed (Nov–Apr)",
        winterClose: "Closed",
        closedMonths: "November to April",
        peakQueue: "3–6 hours (May–June). September queues are 30–60 min.",
        offPeakQueue: "30–90 minutes",
        vipDarshan: "₹2,500 via BKTC online portal",
        vipCost: "₹2,500",
        specialPujas: [
          {
            name: "Mahabhishek",
            time: "4:30–6:00 AM",
            cost: "₹7,500",
            significance: "The supreme ritual at Badrinath — bathe the deity with 16 sacred substances"
          },
          {
            name: "Abhishek",
            time: "7:00 AM",
            cost: "₹1,500",
            significance: "Regular darshan with holy water and flowers"
          },
          {
            name: "Shayan Aarti",
            time: "8:30 PM",
            cost: "Free",
            significance: "Evening farewell aarti — deeply moving"
          }
        ]
      }
    ],
    generalNotes: [
      "Government biometric registration mandatory for Kedarnath from Sonprayag",
      "For helicopter to Kedarnath: report at helipad by 5:30 AM for 6 AM slots",
      "September is ideal: post-monsoon clarity, short queues, best photography",
      "All pujas can be pre-booked through Shail Hikers 2 weeks in advance"
    ]
  },
  "rishikesh-tour": {
    temples: [
      {
        name: "Triveni Ghat Aarti",
        summerOpen: "6:00 AM (Morning Aarti)",
        summerClose: "8:00 PM (Evening Aarti)",
        winterOpen: "6:30 AM",
        winterClose: "7:30 PM",
        closedMonths: "Open year-round",
        peakQueue: "No formal queue — arrive 30 min early for front spots",
        offPeakQueue: "Walk-in",
        vipDarshan: "Not applicable — open public ghat",
        vipCost: "Free",
        specialPujas: [
          {
            name: "Evening Maha Aarti",
            time: "Sunset (5:30–6:30 PM)",
            cost: "Free",
            significance: "The most iconic spiritual spectacle in Rishikesh — 108 priests, fire lamps, Vedic chanting"
          },
          {
            name: "Ganga Dip",
            time: "Any morning",
            cost: "Free",
            significance: "Holy dip in the Ganga — believed to wash away sins and grant liberation"
          },
          {
            name: "Floating Lamp (Deepdan)",
            time: "Evening aarti",
            cost: "₹20–₹50",
            significance: "Release a flower lamp into the Ganga as prayer for ancestors and wishes"
          }
        ]
      },
      {
        name: "Neelkanth Mahadev",
        summerOpen: "6:00 AM",
        summerClose: "7:00 PM",
        winterOpen: "7:00 AM",
        winterClose: "6:00 PM",
        closedMonths: "Open year-round",
        peakQueue: "1–2 hours on weekends and Sawan Mondays",
        offPeakQueue: "15–30 minutes",
        vipDarshan: "Not available",
        vipCost: "N/A",
        specialPujas: [
          {
            name: "Rudrabhishek",
            time: "6:00–9:00 AM",
            cost: "₹551",
            significance: "Shiva abhishek with Ganga water and bilva leaves"
          },
          {
            name: "Sawan Monday Special",
            time: "All day during Sawan month",
            cost: "₹101",
            significance: "Most auspicious Shiva puja day — queues of 3+ hours"
          }
        ]
      }
    ],
    generalNotes: [
      "Parmarth Niketan Aarti: arrive 30 min before sunset for seated spot",
      "No entry fee at any Rishikesh ghat or temple — only puja dakshina is voluntary",
      "Rishikesh is open year-round — October–March is coolest and most comfortable",
      "Wear socks for temple visits — marble floors get cold in winter"
    ]
  },
  "mussoorie-tour": {
    temples: [
      {
        name: "Surkanda Devi Temple",
        summerOpen: "6:00 AM",
        summerClose: "8:00 PM",
        winterOpen: "7:00 AM",
        winterClose: "6:00 PM",
        closedMonths: "Open year-round",
        peakQueue: "2–3 hours during Navratri (March–April, October)",
        offPeakQueue: "15–30 minutes on weekdays",
        vipDarshan: "Not applicable",
        vipCost: "N/A",
        specialPujas: [
          {
            name: "Navratri Puja",
            time: "All day during 9 Navratri days",
            cost: "₹251",
            significance: "The most powerful time to visit — Goddess Durga's energy is at peak"
          },
          {
            name: "Morning Aarti",
            time: "6:00–7:00 AM",
            cost: "Free",
            significance: "Sunrise aarti with panoramic Himalayan backdrop — unforgettable spiritual experience"
          }
        ]
      }
    ],
    generalNotes: [
      "Trek to Surkanda Devi takes 2.5 km (45 minutes) — good footwear essential",
      "Ropeway available to Surkanda Devi (₹200 return) for elderly and children",
      "Carry prasad items (coconut, red chunri, flowers) before the climb"
    ]
  }
};
function YatraDarshanTab({ yatra }) {
  const data = DARSHAN_DATA[yatra.slug] ?? DARSHAN_DATA["rishikesh-tour"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-5 rounded-xl",
        style: {
          background: "rgba(201,168,76,0.08)",
          border: "1px solid rgba(201,168,76,0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-bold mb-3 flex items-center gap-2",
              style: { color: "#C9A84C" },
              children: "📋 Important Notes Before You Go"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: data.generalNotes.map((note) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-2",
              style: {
                color: "#E8A0AA",
                fontSize: "0.875rem",
                lineHeight: 1.6
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C9A84C" }, children: "•" }),
                " ",
                note
              ]
            },
            note
          )) })
        ]
      }
    ),
    data.temples.map((temple) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl overflow-hidden",
        style: { border: "1px solid rgba(232,160,170,0.2)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", style: { background: "rgba(181,82,94,0.15)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "h3",
            {
              className: "font-bold text-lg",
              style: { color: "#FAD4D8", fontFamily: "var(--font-display)" },
              children: [
                "🛕 ",
                temple.name
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
              { label: "Summer Opening", value: temple.summerOpen },
              { label: "Summer Closing", value: temple.summerClose },
              { label: "Winter Schedule", value: temple.winterOpen },
              { label: "Closed Months", value: temple.closedMonths }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-3 rounded-lg text-center",
                style: {
                  background: "rgba(250,212,216,0.04)",
                  border: "1px solid rgba(232,160,170,0.1)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mb-1", style: { color: "#B5525E" }, children: item.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm", style: { color: "#FAD4D8" }, children: item.value })
                ]
              },
              item.label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-4 rounded-lg",
                  style: {
                    background: "rgba(181,82,94,0.06)",
                    border: "1px solid rgba(181,82,94,0.2)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm font-bold mb-1",
                        style: { color: "#B5525E" },
                        children: "⏳ Peak Season Queue (Jan–Jun)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA" }, children: temple.peakQueue })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-4 rounded-lg",
                  style: {
                    background: "rgba(45,80,22,0.08)",
                    border: "1px solid rgba(45,80,22,0.3)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm font-bold mb-1",
                        style: { color: "#A8C5DA" },
                        children: "🟢 Off-Peak Queue"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA" }, children: temple.offPeakQueue })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "p-4 rounded-lg",
                style: {
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.25)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "⭐" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-bold text-sm mb-1",
                        style: { color: "#C9A84C" },
                        children: "VIP Darshan"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA", fontSize: "0.875rem" }, children: temple.vipDarshan })
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-3", style: { color: "#FAD4D8" }, children: "Special Pujas & Rituals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: temple.specialPujas.map((puja) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "p-4 rounded-lg",
                  style: {
                    background: "rgba(250,212,216,0.03)",
                    border: "1px solid rgba(232,160,170,0.1)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "font-bold",
                            style: { color: "#FAD4D8" },
                            children: puja.name
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-xs px-2 py-0.5 rounded",
                            style: {
                              background: "rgba(181,82,94,0.2)",
                              color: "#B5525E"
                            },
                            children: puja.time
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          style: {
                            color: "#E8A0AA",
                            fontSize: "0.85rem",
                            lineHeight: 1.6
                          },
                          children: puja.significance
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-bold whitespace-nowrap",
                        style: { color: "#C9A84C" },
                        children: puja.cost
                      }
                    )
                  ] })
                },
                puja.name
              )) })
            ] })
          ] })
        ]
      },
      temple.name
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-5 rounded-xl text-center",
        style: {
          background: "rgba(181,82,94,0.1)",
          border: "1px solid rgba(181,82,94,0.3)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mb-1", style: { color: "#FAD4D8" }, children: "Book Pujas in Advance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", style: { color: "#E8A0AA" }, children: "Shail Hikers coordinates all puja bookings on your behalf. Special pujas at Kedarnath and Badrinath must be booked 2–4 weeks in advance during peak season." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "tel:+918279888470",
              "data-ocid": "darshan.puja_book_button",
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold",
              style: { background: "#B5525E", color: "#FAD4D8" },
              children: "📞 Book Puja — Call +91-8279888470"
            }
          )
        ]
      }
    )
  ] });
}
const HELI_DATA = {
  kedarHelipads: [
    {
      name: "Phata",
      distance: "11 km from Kedarnath",
      flightTime: "7 min",
      oneWay: 4999,
      returnTrip: 8999
    },
    {
      name: "Sersi",
      distance: "12 km from Kedarnath",
      flightTime: "8 min",
      oneWay: 4999,
      returnTrip: 8999
    },
    {
      name: "Guptkashi",
      distance: "28 km from Kedarnath",
      flightTime: "12 min",
      oneWay: 5999,
      returnTrip: 9999
    }
  ],
  bookingSteps: [
    "Select your preferred helipad (Phata/Sersi/Guptkashi) during booking",
    "Pay helicopter surcharge online (non-refundable if cancelled <48 hrs)",
    "Receive confirmed slot with report time (typically 5–6 AM)",
    "Carry only a day pack (5 kg limit) — porters carry remaining luggage by road",
    "Check-in at helipad 1 hr before departure for safety briefing",
    "Flight operates only in good weather — road transport arranged if cancelled"
  ]
};
function YatraHelicopterTab({ yatra }) {
  const hasHeli = yatra.helicopterOption;
  if (!hasHeli) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-8 rounded-xl text-center",
        style: {
          background: "rgba(250,212,216,0.04)",
          border: "1px solid rgba(232,160,170,0.15)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🚁" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2", style: { color: "#FAD4D8" }, children: "Helicopter Not Required" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "#E8A0AA" }, children: [
            "This yatra is fully accessible by road or trekking path. No helicopter service is available or needed for ",
            yatra.name,
            "."
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-6 rounded-xl flex items-start gap-4",
        style: {
          background: "rgba(201,168,76,0.08)",
          border: "1px solid rgba(201,168,76,0.3)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "🚁" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-1", style: { color: "#C9A84C" }, children: "Helicopter to Kedarnath — Save 5+ Hours of Trekking" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA", lineHeight: 1.7 }, children: "Skip the grueling 16 km Kedarnath trek and fly directly to the temple helipad in under 12 minutes. Perfect for elderly pilgrims, those with health constraints, or anyone wanting to maximize darshan time. Shail Hikers handles all helicopter bookings with DGCA-approved operators." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-4", style: { color: "#FAD4D8" }, children: "Helipad Options & Pricing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "overflow-x-auto rounded-xl",
          style: { border: "1px solid rgba(232,160,170,0.2)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { style: { background: "rgba(181,82,94,0.2)" }, children: [
              "Helipad",
              "Distance from Kedarnath",
              "Flight Time",
              "One-Way",
              "Return Trip"
            ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "th",
              {
                className: "p-4 text-left text-sm font-bold",
                style: { color: "#FAD4D8" },
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: HELI_DATA.kedarHelipads.map((pad, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                style: {
                  background: i % 2 === 0 ? "rgba(250,212,216,0.02)" : "transparent",
                  borderTop: "1px solid rgba(232,160,170,0.1)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 font-bold", style: { color: "#E8A0AA" }, children: pad.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", style: { color: "#E8A0AA" }, children: pad.distance }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", style: { color: "#E8A0AA" }, children: pad.flightTime }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 font-bold", style: { color: "#C9A84C" }, children: [
                    "₹",
                    pad.oneWay.toLocaleString("en-IN")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 font-bold", style: { color: "#C9A84C" }, children: [
                    "₹",
                    pad.returnTrip.toLocaleString("en-IN")
                  ] })
                ]
              },
              pad.name
            )) })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-4", style: { color: "#FAD4D8" }, children: "Helicopter vs Road — Full Comparison" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-5 rounded-xl",
            style: {
              background: "rgba(181,82,94,0.08)",
              border: "1px solid rgba(181,82,94,0.3)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h4",
                {
                  className: "font-bold mb-3 flex items-center gap-2",
                  style: { color: "#B5525E" },
                  children: "🚁 By Helicopter"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
                "Flight time: 7–12 minutes",
                "No trekking required",
                "Cost: ₹4,999–₹9,999 per person",
                "Suitable for all ages and fitness levels",
                "Subject to weather cancellation",
                "Morning slots most reliable (6–10 AM)",
                "Best for senior citizens and health concerns"
              ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-2",
                  style: { color: "#E8A0AA", fontSize: "0.875rem" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C9A84C" }, children: "✓" }),
                    " ",
                    item
                  ]
                },
                item
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-5 rounded-xl",
            style: {
              background: "rgba(45,80,22,0.12)",
              border: "1px solid rgba(45,80,22,0.4)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h4",
                {
                  className: "font-bold mb-3 flex items-center gap-2",
                  style: { color: "#A8C5DA" },
                  children: "🥾 By Trekking (Road to Gaurikund)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
                "Trek time: 6–8 hours (16 km)",
                "Spiritual experience of the full yatra",
                "Cost: Included in package",
                "Suitable for moderate-fit pilgrims",
                "Always available (weather-independent)",
                "Scenic: waterfalls, Mandakini valley views",
                "Pontine/pony/palkee available at extra cost"
              ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-2",
                  style: { color: "#E8A0AA", fontSize: "0.875rem" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#A8C5DA" }, children: "✓" }),
                    " ",
                    item
                  ]
                },
                item
              )) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-4", style: { color: "#FAD4D8" }, children: "How to Book Helicopter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: HELI_DATA.bookingSteps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-start gap-4 p-4 rounded-lg",
          style: {
            background: "rgba(250,212,216,0.04)",
            border: "1px solid rgba(232,160,170,0.1)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0",
                style: { background: "#B5525E", color: "#FAD4D8" },
                children: i + 1
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA", lineHeight: 1.6 }, children: step })
          ]
        },
        step
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-5 rounded-xl flex items-start gap-3",
        style: {
          background: "rgba(201,168,76,0.06)",
          border: "1px solid rgba(201,168,76,0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⚠️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mb-1", style: { color: "#C9A84C" }, children: "Weather Dependency Notice" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: { color: "#E8A0AA", fontSize: "0.875rem", lineHeight: 1.6 },
                children: "Helicopter operations are entirely subject to weather clearance. Kedarnath receives sudden weather changes — morning fog, cloud cover, and afternoon thunderstorms can ground flights. In case of cancellation, Shail Hikers arranges road/trek transport at no extra cost. No refund on helicopter surcharge for weather cancellations — this is a DGCA regulation."
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "tel:+918279888470",
          "data-ocid": "helicopter.book_button",
          className: "inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg",
          style: { background: "#B5525E", color: "#FAD4D8" },
          children: "🚁 Book Helicopter Add-On — Call Us"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm", style: { color: "#E8A0AA" }, children: "+91-8279888470 · Available 7 AM–10 PM, Mon–Sun" })
    ] })
  ] });
}
const SPIRITUAL_CONTENT = {
  "chardham-yatra": {
    intro: "Chardham Yatra is the most sacred Hindu pilgrimage, believed to wash away all sins and grant moksha (liberation). The four dhams — Yamunotri, Gangotri, Kedarnath, and Badrinath — are manifestations of four divine forces at the source of four holy rivers in the Garhwal Himalayas.",
    sites: [
      {
        name: "Yamunotri",
        significance: "Abode of Goddess Yamuna, the sister of Yama (god of death). Worshipping here liberates devotees from a fearful death. The hot springs here (Surya Kund) are used to cook rice and potatoes as prasad.",
        mythology: "Asit Muni, a sage, meditated here through his old age. The river Yamuna is believed to be the daughter of the Sun God (Surya) and twin sister of Lord Yama. Her blessings free souls from the cycle of rebirth."
      },
      {
        name: "Gangotri",
        significance: "The origin of the sacred Ganga, personified as Goddess Ganga. The temple faces north toward Gaumukh glacier, the actual source 19 km away. It is one of the most spiritually charged sites in the Himalayas.",
        mythology: "King Bhagirath performed penance here for thousands of years to bring Goddess Ganga to earth to liberate his ancestors. Lord Shiva caught Ganga in his matted hair to prevent the earth from being destroyed by her force."
      },
      {
        name: "Kedarnath",
        significance: "One of the 12 Jyotirlingas of Lord Shiva — the most potent. The present temple was built by Adi Shankaracharya in the 8th century. At 3,584 m, it is the highest among the Chardham temples.",
        mythology: "After the Kurukshetra war, the Pandavas sought Lord Shiva's forgiveness. Shiva, evading them, disguised as a bull. When Bhima grabbed the bull's hump, Shiva disappeared underground, with his hump remaining at Kedarnath and other body parts at the Panch Kedar temples."
      },
      {
        name: "Badrinath",
        significance: "Seat of Lord Vishnu in his Badri Narayana form. One of the 108 Divya Desams and the holiest Vaishnava shrine. The Char Dham Yatra is incomplete without Badrinath darshan.",
        mythology: "Lord Vishnu is said to have meditated here under a Badri tree (jujube). Goddess Lakshmi, unable to bear seeing her husband meditate in harsh cold, transformed herself into the Badri tree to shield him. Hence, the place is called Badri-Nath."
      }
    ],
    conduct: [
      "Maintain silence near sanctum sanctorum — no photography inside temples",
      "Complete physical and mental fast on the day of darshan for maximum spiritual benefit",
      "Carry prasad rice/potatoes to cook in Surya Kund at Yamunotri",
      "Offer holy water of each river to the next dham as a sacred chain",
      "No leather items (belts, shoes) inside temple premises",
      "Mobiles strictly prohibited inside all four dham sanctums",
      "Alcohol and non-vegetarian food strictly prohibited during entire yatra",
      "Chant respective deity mantras during darshan for spiritual amplification"
    ],
    dressCode: "Traditional Indian attire recommended — saree/salwar kameez for women, dhoti/kurta for men. Shoulders and knees must be covered. Western clothing is permitted but modest. Head covering recommended at Kedarnath and Badrinath.",
    photography: "Photography allowed in outer temple premises and landscapes. Strictly NO photography inside the sanctum (garbhagriha) of any of the four dhams. Drone photography requires special permits from district administration.",
    bestTimeForDarshan: "Early morning darshan (5–7 AM, Mangal Aarti) is the most auspicious and least crowded. Evening Bhog Aarti (6–7 PM) is spiritually powerful and highly recommended. Avoid 10 AM–2 PM when queues stretch 3–4 hours."
  },
  "do-dham-yatra": {
    intro: "Do Dham Yatra encompasses the two most powerful dhams of the Garhwal Himalayas — Kedarnath, the throne of Lord Shiva, and Badrinath, the abode of Lord Vishnu. These two deities represent the supreme forces of dissolution and preservation in Hindu cosmology, making this yatra a complete spiritual journey.",
    sites: [
      {
        name: "Kedarnath",
        significance: "One of the 12 Jyotirlingas of Lord Shiva — the most powerful manifestation of Shiva's cosmic energy. Situated at 3,584 m by the Mandakini river, the ancient stone temple has withstood centuries of Himalayan storms. The 2013 floods destroyed everything around it but left the temple untouched — an event considered miraculous by millions.",
        mythology: "The Pandavas, seeking absolution for the sins of the Kurukshetra war, chased Lord Shiva through the Himalayas. Shiva assumed the form of a bull and dived into the earth at Kedarnath, with his hump emerging at this site. The other body parts emerged at Tungnath, Rudranath, Madhyamaheshwar, and Kalpeshwar — together forming the Panch Kedar."
      },
      {
        name: "Badrinath",
        significance: "The seat of Lord Vishnu's meditating form (Badrinarayan), Badrinath at 3,133 m sits between Nar and Narayana mountain ranges. It is said that what cannot be attained through thousands of years of penance and charity can be obtained through a single darshan at Badrinath.",
        mythology: "In the Satya Yuga, this entire region was the meditation ground of Nara and Narayana, the twin sons of Dharma who were incarnations of Vishnu. The Narada Muni, Kapila Muni, and many rishis performed tapas here. The present temple form was established by Adi Shankaracharya around 800 AD."
      }
    ],
    conduct: [
      "Begin journey facing north — direction of Badrinath and Kailash",
      "Take a dip in Tapt Kund (hot spring) before Badrinath darshan",
      "Offer Panchaamrit (milk, curd, ghee, honey, sugar) at Kedarnath",
      "No alcohol, smoking, or non-veg food throughout the yatra",
      "No leather inside temple premises — wear cloth footwear or go barefoot",
      "Maintain sacred silence during Abhishek and Aarti rituals"
    ],
    dressCode: "Traditional Indian dress preferred. Clean, modest attire mandatory. Women: saree or salwar suit. Men: dhoti-kurta or clean trousers with kurta. No shorts, sleeveless tops, or revealing clothing inside any temple complex.",
    photography: "Outer temple compound photography permitted. Inner sanctum — strictly no phones or cameras. Kedarnath: photography of the main Shivalinga is prohibited. Badrinath: the central idol darshan area is no-camera.",
    bestTimeForDarshan: "Kedarnath: 4 AM Rudra Abhishek (most auspicious, book in advance). Badrinath: 4:30 AM Mahabhishek Puja is the highest spiritual experience. Evening Shayan Aarti (9 PM) at Badrinath is breathtaking."
  },
  "rishikesh-tour": {
    intro: "Rishikesh, the 'Gateway to the Himalayas,' is where the sacred Ganga descends from the mountains to the plains, making it the most spiritually charged yoga and meditation capital on earth. Every stone, every aarti, every chant here is saturated with thousands of years of unbroken spiritual practice.",
    sites: [
      {
        name: "Triveni Ghat",
        significance: "The most sacred ghat in Rishikesh, where three rivers — Ganga, Yamuna, and the invisible Saraswati — are believed to converge. The evening Maha Aarti here, with 108 priests performing synchronized rituals with fire lamps, is one of the most moving spiritual spectacles in India.",
        mythology: "The name 'Triveni' (three braids) refers to the confluence of the three holiest rivers. A dip at Triveni Ghat during auspicious occasions is believed to free the soul from the cycle of birth and death."
      },
      {
        name: "Parmarth Niketan Ashram",
        significance: "One of the largest ashrams in India, situated on the banks of the Ganga. The evening Ganga Aarti here draws thousands daily. The ashram founded by Swami Shukdevananda ji is a center for Vedantic studies, yoga teacher training, and interfaith dialogue.",
        mythology: "This site is associated with the sage Parmar Hansa. The 13-foot Shiva statue here is an artistic representation of divine consciousness. The ashram's Ganga aarti has been celebrated continuously for over 80 years."
      },
      {
        name: "Neelkanth Mahadev Temple",
        significance: "Dedicated to Lord Shiva in his 'Blue-Throated' form (Neelkanth), this temple marks the spot where Shiva consumed the Halahala poison that emerged during the Samudra Manthan (churning of the cosmic ocean) to save the universe.",
        mythology: "During the churning of the ocean by gods and demons, the most deadly poison Halahala emerged first. Lord Shiva drank it to save creation, and Goddess Parvati held his throat to prevent it from spreading — turning his throat permanently blue."
      }
    ],
    conduct: [
      "Remove footwear before entering all temples and ashram premises",
      "Dress modestly — no beachwear or revealing clothing near ghats and temples",
      "Maintain silence during Ganga Aarti — observe without chatting or phones",
      "Do not click photos during aarti rituals without permission",
      "No alcohol permitted in Rishikesh town — it is a dry city",
      "Respect the meditation silence zones in ashrams",
      "Do not touch the Ganga lamps or flowers offered during aarti"
    ],
    dressCode: "Light, modest Indian or Western clothing. Carry a dupatta/stole for temple entry. At ashrams: simple white or light-colored attire. Near ghats in evenings: comfortable modest wear. No shorts at Ganga ghats after sunset.",
    photography: "Photography warmly welcomed along the ghats, Lakshman Jhula, Ram Jhula, and open temple areas. Avoid photographing sadhus without permission. No photography during active pujas inside temples. The Ganga Aarti is photogenic but keep flash off.",
    bestTimeForDarshan: "Evening Ganga Aarti at Triveni Ghat (5:30–6:30 PM daily) — arrive by 5 PM for front space. Morning Rudra Abhishek at Neelkanth Mahadev (6–8 AM). Parmarth Ashram Aarti (sunset time, approx 6–7 PM)."
  },
  "mussoorie-tour": {
    intro: "While Mussoorie is celebrated as a hill station, its spiritual landscape is equally profound. The Surkanda Devi temple, Kempty Falls with its mythological associations, and the colonial-era Christ Church all tell stories of faith across cultures and centuries in the Garhwal foothills.",
    sites: [
      {
        name: "Surkanda Devi Temple",
        significance: "One of the 51 Shakti Peethas, Surkanda Devi is a powerful manifestation of Goddess Durga. The temple at 2,757 m commands panoramic Himalayan views and is especially crowded on Navratri when tens of thousands of devotees trek up to seek blessings.",
        mythology: "According to the Shakti Peetha legend, when Lord Shiva was carrying the body of Sati (his divine consort) in grief, Lord Vishnu used his Sudarshana Chakra to cut the body into 51 parts. Sati's head (sheesh) fell at this location — hence the name 'Sur-kanda' (head of divinity)."
      },
      {
        name: "Camel's Back Road & Heritage Walk",
        significance: "The famous 3 km promenade traces the ridge spine of Mussoorie and has historical significance as the leisure walk of British-era administrators and military officers. The Mall Road and Camel's Back Road together form a living museum of colonial-era Himalayan history.",
        mythology: "The road was originally constructed in 1845 by the British for recreational walking. Local legend holds that the rock formation resembling a camel's back is a petrified camel of a Mughal-era army that was cursed for harming a sadhu."
      }
    ],
    conduct: [
      "Dress warmly and modestly for Surkanda Devi temple — the climb is steep and windy",
      "Carry prasad (coconut, red chunri) as offerings at Surkanda Devi",
      "No non-vegetarian food on days of temple visits",
      "Respect heritage buildings on Camel's Back Road — no vandalism or graffiti",
      "Maintain cleanliness at viewpoints and along Mall Road"
    ],
    dressCode: "Warm layers essential (10–18°C year-round). For Surkanda Devi temple: traditional modest dress preferred. Comfortable walking shoes mandatory for Camel's Back Road trek and temple paths.",
    photography: "Mussoorie offers spectacular photography opportunities at Lal Tibba, Gun Hill, and Camel's Back Road. Inside Surkanda Devi temple: outer area photography permitted, inner sanctum no-camera. Drone photography from viewpoints is spectacular in clear weather.",
    bestTimeForDarshan: "Surkanda Devi: Early morning (6–8 AM) for clear Himalayan views and minimal crowd. Navratri (March–April, October) for the vibrant festival atmosphere. Mussoorie town: Sunrise at Lal Tibba (6–7 AM) and sunset at Gun Hill are unmissable."
  }
};
function YatraSpiritualTab({ yatra }) {
  const content = SPIRITUAL_CONTENT[yatra.slug] ?? SPIRITUAL_CONTENT["rishikesh-tour"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "p-6 rounded-xl",
        style: {
          background: "rgba(181,82,94,0.08)",
          borderLeft: "4px solid #B5525E"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#FAD4D8", lineHeight: 1.8 }, children: content.intro })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          className: "text-xl font-bold mb-4",
          style: { color: "#FAD4D8", fontFamily: "var(--font-display)" },
          children: "Sacred Sites & Their Significance"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: content.sites.map((site) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "details",
        {
          className: "group rounded-xl overflow-hidden",
          style: {
            background: "rgba(250,212,216,0.04)",
            border: "1px solid rgba(232,160,170,0.2)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex items-center justify-between p-5 cursor-pointer list-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🛕" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-bold text-lg",
                    style: { color: "#FAD4D8" },
                    children: site.name
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xl transition-transform group-open:rotate-180",
                  style: { color: "#B5525E" },
                  children: "›"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-5 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-bold uppercase tracking-wider",
                    style: { color: "#B5525E" },
                    children: "Spiritual Significance"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "mt-1",
                    style: { color: "#E8A0AA", lineHeight: 1.7 },
                    children: site.significance
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-bold uppercase tracking-wider",
                    style: { color: "#C9A84C" },
                    children: "Mythology & Legend"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "mt-1",
                    style: { color: "#E8A0AA", lineHeight: 1.7 },
                    children: site.mythology
                  }
                )
              ] })
            ] })
          ]
        },
        site.name
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-5 rounded-xl",
          style: {
            background: "rgba(250,212,216,0.04)",
            border: "1px solid rgba(232,160,170,0.15)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h4",
              {
                className: "font-bold mb-3 flex items-center gap-2",
                style: { color: "#FAD4D8" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🙏" }),
                  " Conduct Guidelines"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: content.conduct.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-2",
                style: {
                  color: "#E8A0AA",
                  fontSize: "0.875rem",
                  lineHeight: 1.6
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "mt-1 flex-shrink-0",
                      style: { color: "#B5525E" },
                      children: "✓"
                    }
                  ),
                  item
                ]
              },
              item
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-5 rounded-xl",
            style: {
              background: "rgba(250,212,216,0.04)",
              border: "1px solid rgba(232,160,170,0.15)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h4",
                {
                  className: "font-bold mb-2 flex items-center gap-2",
                  style: { color: "#FAD4D8" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "👗" }),
                    " Dress Code"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    color: "#E8A0AA",
                    fontSize: "0.875rem",
                    lineHeight: 1.6
                  },
                  children: content.dressCode
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-5 rounded-xl",
            style: {
              background: "rgba(250,212,216,0.04)",
              border: "1px solid rgba(232,160,170,0.15)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h4",
                {
                  className: "font-bold mb-2 flex items-center gap-2",
                  style: { color: "#FAD4D8" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📷" }),
                    " Photography Rules"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    color: "#E8A0AA",
                    fontSize: "0.875rem",
                    lineHeight: 1.6
                  },
                  children: content.photography
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-5 rounded-xl",
            style: {
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.3)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h4",
                {
                  className: "font-bold mb-2 flex items-center gap-2",
                  style: { color: "#C9A84C" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⏰" }),
                    " Best Time for Darshan"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    color: "#E8A0AA",
                    fontSize: "0.875rem",
                    lineHeight: 1.6
                  },
                  children: content.bestTimeForDarshan
                }
              )
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-5 rounded-xl text-center",
        style: {
          background: "rgba(181,82,94,0.12)",
          border: "1px solid rgba(181,82,94,0.3)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: "🕉" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mb-1", style: { color: "#FAD4D8" }, children: "Pilgrimage Importance to Hindu Faith" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA", fontSize: "0.9rem", lineHeight: 1.7 }, children: "The Chardham Yatra is believed to grant salvation (moksha) to devotees. Scriptures declare that a person who completes the Chardham Yatra in their lifetime is freed from the cycle of birth and death. Every Hindu aspires to complete this pilgrimage at least once, making it the holiest of all earthly journeys." })
        ]
      }
    )
  ] });
}
const ALL_TABS = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "inclusions", label: "Inclusions" },
  { id: "pricing", label: "Batch & Pricing" },
  { id: "photos", label: "Photos" },
  { id: "spiritual", label: "Spiritual Significance" },
  { id: "helicopter", label: "Helicopter Options", heliOnly: true },
  { id: "accommodation", label: "Accommodation" },
  { id: "darshan", label: "Darshan Timings" },
  { id: "reviews", label: "Reviews" },
  { id: "faqs", label: "FAQs" },
  { id: "permits", label: "Permits" }
];
const YATRA_ITINERARIES = {
  "chardham-yatra": [
    {
      day: 1,
      title: "Arrival in Haridwar",
      locations: "Haridwar",
      driving: "—",
      hotel: "Hotel in Haridwar",
      description: "Arrive at Haridwar, check in and attend the mesmerizing Ganga Aarti at Har Ki Pauri. Meet your Shail Hikers guide for trek briefing. Overnight at hotel."
    },
    {
      day: 2,
      title: "Haridwar → Barkot (Yamunotri base)",
      locations: "Haridwar → Barkot (220 km)",
      driving: "7 hrs",
      hotel: "Hotel in Barkot",
      description: "Early morning drive through Mussoorie and Naugaon to Barkot, the base village for Yamunotri. En route visit Kempty Falls. Evening preparation for next day's trek."
    },
    {
      day: 3,
      title: "Yamunotri Trek & Darshan",
      locations: "Barkot → Janki Chatti → Yamunotri → Barkot",
      driving: "30 km drive + 6 km trek",
      hotel: "Hotel in Barkot",
      description: "Drive to Janki Chatti (30 km) then trek 6 km to Yamunotri temple (3,291 m). Cook rice/potatoes in Surya Kund hot spring as prasad. Darshan at Goddess Yamuna's shrine. Return to Barkot."
    },
    {
      day: 4,
      title: "Barkot → Uttarkashi (Gangotri base)",
      locations: "Barkot → Uttarkashi (100 km)",
      driving: "4 hrs",
      hotel: "Hotel in Uttarkashi",
      description: "Drive along the Bhagirathi valley to Uttarkashi, the 'Kashi of the Himalayas.' Visit Vishwanath temple in the evening. Uttarkashi is the last major town before Gangotri."
    },
    {
      day: 5,
      title: "Gangotri Darshan",
      locations: "Uttarkashi → Gangotri → Uttarkashi (100 km)",
      driving: "5 hrs round trip",
      hotel: "Hotel in Uttarkashi",
      description: "Drive to Gangotri (3,048 m), origin of the sacred Bhagirathi river. Attend sunrise aarti, perform Ganga puja, and take darshan at the Goddess Ganga temple. Return to Uttarkashi."
    },
    {
      day: 6,
      title: "Uttarkashi → Guptkashi",
      locations: "Uttarkashi → Guptkashi (220 km)",
      driving: "8 hrs",
      hotel: "Hotel in Guptkashi",
      description: "Long drive through spectacular mountain landscapes via Tehri and Rudraprayag to Guptkashi, the gateway to Kedarnath. Visit Ardhnareshwar temple in Guptkashi evening."
    },
    {
      day: 7,
      title: "Kedarnath Trek & Darshan",
      locations: "Guptkashi → Gaurikund → Kedarnath",
      driving: "30 km + 16 km trek",
      hotel: "Camp at Kedarnath base",
      description: "Drive to Gaurikund, then trek or helicopter to Kedarnath (3,584 m). Attend evening Bhog Aarti at the Jyotirlinga temple. Overnight at Kedarnath base camp."
    },
    {
      day: 8,
      title: "Kedarnath → Badrinath",
      locations: "Kedarnath → Gaurikund → Badrinath (220 km)",
      driving: "Trek + 8 hr drive",
      hotel: "Hotel in Badrinath",
      description: "Early morning Abhishek darshan at Kedarnath (4 AM). Descend to Gaurikund, then drive via Rudraprayag and Joshimath to Badrinath. Evening aarti at Badrinath temple."
    },
    {
      day: 9,
      title: "Badrinath Darshan",
      locations: "Badrinath (3,133 m)",
      driving: "Local sightseeing",
      hotel: "Hotel in Badrinath",
      description: "Pre-dawn Mahabhishek puja (book in advance). Darshan at Badrinarayan temple. Visit Tapt Kund, Brahma Kapal, Mana village (last village before Tibet border), Vasudhara Falls, Bheem Pul."
    },
    {
      day: 10,
      title: "Badrinath → Rudraprayag",
      locations: "Badrinath → Rudraprayag (160 km)",
      driving: "6 hrs",
      hotel: "Hotel in Rudraprayag",
      description: "Descend from Badrinath. Visit Joshimath and the 1,200-year-old Adi Shankaracharya-established Narsingh temple en route. Overnight at the sacred Rudraprayag confluence."
    },
    {
      day: 11,
      title: "Rudraprayag → Haridwar → Departure",
      locations: "Rudraprayag → Haridwar (170 km)",
      driving: "6 hrs",
      hotel: "Drop at Haridwar",
      description: "Drive back to Haridwar with stops at Devprayag (Bhagirathi + Alakananda confluence) for a final Ganga dip. Arrive Haridwar for onward journey. Yatra complete."
    }
  ],
  "do-dham-yatra": [
    {
      day: 1,
      title: "Arrival in Haridwar",
      locations: "Haridwar",
      driving: "—",
      hotel: "Hotel in Haridwar",
      description: "Arrive Haridwar, attend Ganga Aarti at Har Ki Pauri. Meet guide for yatra briefing. Dinner included."
    },
    {
      day: 2,
      title: "Haridwar → Guptkashi",
      locations: "Haridwar → Guptkashi (240 km)",
      driving: "9 hrs",
      hotel: "Hotel in Guptkashi",
      description: "Drive via Rishikesh, Devprayag, Rudraprayag to Guptkashi. Stop at Devprayag to witness the sacred confluence. Evening visit to Ardhnareshwar temple."
    },
    {
      day: 3,
      title: "Kedarnath Trek & Darshan",
      locations: "Guptkashi → Gaurikund → Kedarnath",
      driving: "30 km + 16 km trek or 12 min heli",
      hotel: "Camp/guesthouse at Kedarnath",
      description: "Pre-dawn start to Gaurikund. Trek or helicopter to Kedarnath. Evening Bhog Aarti at the Jyotirlinga."
    },
    {
      day: 4,
      title: "Kedarnath → Badrinath",
      locations: "Kedarnath → Badrinath (220 km)",
      driving: "Trek + 8 hrs",
      hotel: "Hotel in Badrinath",
      description: "Early 4 AM Abhishek darshan. Descend and drive via Rudraprayag, Nandprayag, Joshimath to Badrinath. Evening darshan at Badrinarayan."
    },
    {
      day: 5,
      title: "Badrinath Darshan",
      locations: "Badrinath",
      driving: "Local",
      hotel: "Hotel in Badrinath",
      description: "Morning Mahabhishek puja (pre-booked). Full day at Badrinath — Tapt Kund, Brahma Kapal, Mana village, Vasudhara Falls. Evening Shayan Aarti."
    },
    {
      day: 6,
      title: "Badrinath → Rudraprayag",
      locations: "Badrinath → Rudraprayag (160 km)",
      driving: "6 hrs",
      hotel: "Hotel in Rudraprayag",
      description: "Descend through Joshimath and Chamoli. Visit Karnprayag and Rudraprayag confluences."
    },
    {
      day: 7,
      title: "Rudraprayag → Haridwar → Departure",
      locations: "Rudraprayag → Haridwar (170 km)",
      driving: "6 hrs",
      hotel: "Drop at Haridwar",
      description: "Final drive back. Stop at Devprayag for darshan. Arrive Haridwar for onward journey."
    }
  ],
  "rishikesh-tour": [
    {
      day: 1,
      title: "Arrival in Dehradun → Rishikesh",
      locations: "Dehradun → Rishikesh (45 km)",
      driving: "1.5 hrs",
      hotel: "Hotel in Rishikesh",
      description: "Pickup from Dehradun, transfer to Rishikesh. Check in, evening walk along the ghats. Attend Parmarth Niketan Ganga Aarti at sunset. Dinner by the Ganga."
    },
    {
      day: 2,
      title: "Rishikesh Deep Dive",
      locations: "Rishikesh (local)",
      driving: "—",
      hotel: "Hotel in Rishikesh",
      description: "Morning yoga session at an ashram (6–7 AM). Breakfast. Visit Triveni Ghat, Lakshman Jhula, Ram Jhula. Explore Beatles Ashram ruins. Optional: white-water rafting (Grade I–IV, ₹800–1,500 extra). Evening aarti."
    },
    {
      day: 3,
      title: "Neelkanth Mahadev + Adventure",
      locations: "Rishikesh → Neelkanth Mahadev (32 km)",
      driving: "1.5 hrs",
      hotel: "Hotel in Rishikesh",
      description: "Morning trek or drive to Neelkanth Mahadev temple (1,330 m). Darshan and return by noon. Afternoon: bungee jumping, cliff jumping, or zip-lining (optional, extra cost). Evening meditation at Sivananda Ashram."
    },
    {
      day: 4,
      title: "Rishikesh → Dehradun (Departure)",
      locations: "Rishikesh → Dehradun (45 km)",
      driving: "1.5 hrs",
      hotel: "Drop at Dehradun",
      description: "Morning at leisure — final Ganga dip at Triveni Ghat for blessings. Transfer to Dehradun. Tour complete."
    }
  ],
  "mussoorie-tour": [
    {
      day: 1,
      title: "Dehradun → Mussoorie",
      locations: "Dehradun → Mussoorie (35 km)",
      driving: "1.5 hrs",
      hotel: "Hotel in Mussoorie",
      description: "Pickup from Dehradun, scenic drive up to Mussoorie. Check in, walk on Mall Road, visit Camel's Back Road. Dinner and evening stroll. Views of Doon Valley lit up at night."
    },
    {
      day: 2,
      title: "Mussoorie Full Day Exploration",
      locations: "Mussoorie (local)",
      driving: "—",
      hotel: "Hotel in Mussoorie",
      description: "Morning visit to Lal Tibba (highest point, Himalayan panorama). Kempty Falls for a refreshing stop. Gun Hill via ropeway. Company Garden. Evening shopping on Mall Road."
    },
    {
      day: 3,
      title: "Surkanda Devi + Departure",
      locations: "Mussoorie → Surkanda Devi (35 km) → Dehradun",
      driving: "1.5 hrs + 2 hrs",
      hotel: "Drop at Dehradun",
      description: "Morning drive to Surkanda Devi temple (2.5 km trek or ropeway). Darshan at the Shakti Peetha, panoramic Himalayan views. Return to Dehradun for departure."
    }
  ]
};
const YATRA_INCLUSIONS = {
  default: {
    inclusions: [
      "AC vehicle transport for entire route (sedan/SUV for groups up to 6)",
      "All accommodation as per selected tier (breakfast + dinner)",
      "Experienced yatra guide — GMVN-certified, fluent in Hindi and English",
      "All forest/shrine entry permits and registration fees",
      "High-altitude medical kit + pulse oximeter",
      "First aid kit and basic medications (AMS, altitude sickness)",
      "All government registration and biometric fees (Kedarnath/Chardham)",
      "24/7 emergency support line — Shail Hikers operations center",
      "Gratitude certificate + digital photo album"
    ],
    exclusions: [
      "Helicopter to Kedarnath (available as paid add-on)",
      "Personal travel insurance (strongly recommended)",
      "Pony/palanquin to Kedarnath (₹1,500–₹3,000 extra, pay locally)",
      "Special pujas: Abhishek, Rudrabhishek, Mahabhishek (payable at temple)",
      "Meals not specified in itinerary (Day 1 lunch, last day lunch)",
      "Personal expenses: laundry, telephone, tips",
      "Porter charges for personal luggage (₹800/day)",
      "Any extra nights due to weather or personal reasons",
      "Rafting, bungee, or other adventure activities (pay locally)"
    ]
  }
};
const YATRA_FAQS = {
  default: [
    {
      cat: "Logistics",
      q: "What is the best time to do Chardham Yatra?",
      a: "May to June and September to October are ideal. The shrines open in April/May and close in November. Avoid peak June (very crowded), and July–August (monsoon landslides). September is the sweet spot: clear weather, shorter queues, lush post-monsoon landscapes."
    },
    {
      cat: "Logistics",
      q: "Is government registration mandatory for Chardham Yatra?",
      a: "Yes, since 2022. You must register on the official Chardham Devasthanam portal for Kedarnath and Badrinath. Registration is free and can be done online or at Haridwar/Rishikesh registration booths. Shail Hikers handles this for all guests."
    },
    {
      cat: "Fitness",
      q: "How fit do I need to be for Chardham Yatra?",
      a: "Moderately fit. The main challenge is the 16 km Kedarnath trek (6–8 hrs). All other dhams are accessible by vehicle (Gangotri, Yamunotri base). If you cannot walk 16 km, the helicopter (₹4,999+) or ponies/palanquins are excellent alternatives. For Yamunotri, it's a 6 km trek with no shortcuts."
    },
    {
      cat: "Fitness",
      q: "Can elderly or senior citizens do the yatra?",
      a: "Yes, with planning. Yamunotri: palanquin available. Kedarnath: helicopter or pony recommended. Gangotri and Badrinath are driveable to the temple gate. Medical fitness clearance is recommended for those above 65 or with heart/lung conditions. Consult your doctor before booking."
    },
    {
      cat: "Gear",
      q: "What should I wear for the yatra?",
      a: "Layered clothing is essential. Even in May–June, nights at Kedarnath/Badrinath drop to 5–10°C. Must-carry: warm fleece, waterproof jacket, warm trekking shoes (for Kedarnath/Yamunotri), rain poncho. Traditional attire (saree/dhoti) for temple entry is culturally respectful but not mandatory."
    },
    {
      cat: "Gear",
      q: "Are ATMs available along the Chardham route?",
      a: "ATMs exist in Barkot, Uttarkashi, Guptkashi, Joshimath, and Badrinath. They are frequently out of cash in peak season. Carry sufficient cash (₹5,000–₹10,000) from Haridwar/Rishikesh. Most dhabas and small shops don't accept UPI above ₹1,000 in remote areas."
    },
    {
      cat: "Safety",
      q: "Is the Chardham Yatra safe?",
      a: "Yes, when done with a reliable operator. Roads have improved significantly post-2013. Shail Hikers monitors weather forecasts daily, avoids known landslide-prone timings, and has 24/7 emergency contacts. We have completed 200+ Chardham batches with zero major incidents."
    },
    {
      cat: "Safety",
      q: "What happens if a shrine closes due to weather?",
      a: "We have contingency plans for all weather events. If a shrine is temporarily closed, we wait at the nearest safe guesthouse. If the closure extends beyond 24 hours, we adjust the itinerary. For complete cancellations due to calamities, full refund is processed within 7 business days."
    },
    {
      cat: "Booking",
      q: "How far in advance should I book Chardham Yatra?",
      a: "For May–June departures: book by February at latest. Premium accommodation and helicopter slots fill up by March. September–October: book by July. Shail Hikers releases a limited number of April slots for VIP early-bird bookings with exclusive guide assignments."
    },
    {
      cat: "Booking",
      q: "Can I customize the Chardham Yatra itinerary?",
      a: "Yes, for private batches. Add extra nights at any location, include specific pujas, upgrade accommodation, or add helicopter for select legs. Contact us for a custom quotation. Group customization available for 8+ people."
    },
    {
      cat: "Logistics",
      q: "What is the pickup/drop point?",
      a: "Pickup from Haridwar ISBT or Rishikesh bus stand. If coming from Delhi, the Dehradun/Haridwar Shatabdi train is most convenient (5 hrs). Nearest airport: Dehradun Jolly Grant Airport (40 km from Haridwar). Shail Hikers can arrange Dehradun airport pickup at extra cost."
    },
    {
      cat: "Fitness",
      q: "Can children do the Chardham Yatra?",
      a: "Yes, children 7+ can comfortably do Gangotri and Badrinath by vehicle. For Kedarnath, helicopter is recommended for children under 12. Yamunotri's 6 km trek is manageable for fit children 10+. Pony rides are available for younger children at both Yamunotri and Kedarnath."
    },
    {
      cat: "Gear",
      q: "Do I need to carry food for the trek?",
      a: "No. Shail Hikers includes all meals in the package. However, carrying personal snacks (energy bars, dry fruits, chocolates) for the Kedarnath trek is recommended. Avoid heavy meals before the climb. Dhabas exist at checkpoints on the Kedarnath route."
    },
    {
      cat: "Safety",
      q: "What altitude sickness precautions should I take?",
      a: "Kedarnath (3,584 m) and Badrinath (3,133 m) can cause mild altitude sickness. Symptoms: headache, nausea, dizziness. Our guides carry pulse oximeters and Diamox (acetazolamide) in the first aid kit. Acclimatization tips: hydrate well, no alcohol, ascend slowly, rest if symptomatic."
    },
    {
      cat: "Booking",
      q: "What is the cancellation policy?",
      a: "Cancellation 30+ days before departure: 90% refund. 15–30 days: 50% refund. 7–15 days: 25% refund. Less than 7 days: no refund. For full details, see our Cancellation Policy page. We strongly recommend purchasing travel insurance at the time of booking."
    }
  ]
};
const YATRA_REVIEWS = [
  {
    name: "Sunita Verma",
    city: "Jaipur",
    rating: 5,
    date: "October 2024",
    text: "Shail Hikers made our Chardham Yatra an experience of a lifetime. The organization was flawless — right from pickup at Haridwar to drop. Our guide Ramesh ji was not just a guide but a philosopher who explained the significance of each dham so beautifully that even my skeptical husband was moved to tears at Kedarnath.",
    yatra: "Chardham Yatra",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=60&q=80"
  },
  {
    name: "Dr. Rajesh Iyer",
    city: "Chennai",
    rating: 5,
    date: "June 2024",
    text: "As a 68-year-old with knee issues, I was worried about the Kedarnath climb. Shail Hikers arranged helicopter for us and even pre-booked the Mahabhishek puja at Badrinath which was the most spiritually profound experience of my life. They thought of everything.",
    yatra: "Do Dham Yatra",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80"
  },
  {
    name: "Ananya Krishnamurthy",
    city: "Hyderabad",
    rating: 5,
    date: "March 2024",
    text: "Rishikesh with Shail Hikers was magical. The sunrise aarti at Triveni Ghat and the Parmarth Niketan evening aarti were beyond words. Our guide knew every temple, every story. The whole family — from my 70-year-old mother to my 8-year-old son — had the time of their lives.",
    yatra: "Rishikesh Tour",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80"
  },
  {
    name: "Vikram & Priya Agarwal",
    city: "Lucknow",
    rating: 5,
    date: "May 2024",
    text: "Mussoorie weekend with Shail Hikers exceeded all expectations. The Surkanda Devi trek at sunrise, Camel's Back Road walk, and the cozy hotel they arranged — everything was perfect. Will definitely book the full Chardham Yatra next year with them.",
    yatra: "Mussoorie Tour",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80"
  },
  {
    name: "Meera Pillai",
    city: "Kochi",
    rating: 5,
    date: "September 2024",
    text: "September Chardham with Shail Hikers was ideal — minimal crowds, clear skies, and the most efficient transportation. They pre-booked our pujas everywhere and gave us detailed briefings before each dham. The food was home-style and delicious throughout. Highly recommend!",
    yatra: "Chardham Yatra",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&q=80"
  }
];
const YATRA_PERMITS = {
  "chardham-yatra": [
    {
      name: "Chardham Yatra Online Registration",
      by: "Uttarakhand Tourism Department",
      cost: "Free",
      handled: "Shail Hikers registers all guests online before departure",
      docs: ["Aadhaar card", "Mobile number", "Passport photo"]
    },
    {
      name: "Kedarnath Biometric Registration",
      by: "DSGMC / Kedarnath Devasthanam Board",
      cost: "Included",
      handled: "Done at Sonprayag check-post by our guide",
      docs: ["Original Aadhaar card (mandatory)"]
    },
    {
      name: "Badrinath Entry Registration",
      by: "BKTC (Badrinath-Kedarnath Temple Committee)",
      cost: "Included",
      handled: "Online pre-registration by Shail Hikers",
      docs: ["Aadhaar or Passport"]
    },
    {
      name: "Medical Fitness Certificate (Kedarnath on foot)",
      by: "State Medical Authority",
      cost: "₹50–₹100 at camps",
      handled: "Checked at Sonprayag; our guide advises on process",
      docs: ["Doctor certificate (obtainable at Sonprayag medical camp)"]
    }
  ],
  default: [
    {
      name: "Yatra Registration",
      by: "Uttarakhand Tourism Department",
      cost: "Free",
      handled: "Shail Hikers handles all registration",
      docs: ["Aadhaar card", "Mobile number"]
    },
    {
      name: "Photo ID at All Temples",
      by: "Temple Committee",
      cost: "Included",
      handled: "Carry original government ID throughout",
      docs: ["Aadhaar card or Passport (original)"]
    }
  ]
};
const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=80",
  "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=500&q=80",
  "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&q=80"
];
const PRICING_TIERS = [
  { group: "1 person", multiplier: 1.15 },
  { group: "2–4 persons", multiplier: 1 },
  { group: "5–8 persons", multiplier: 0.95 },
  { group: "9–15 persons", multiplier: 0.9 }
];
function YatraTabs({ yatra }) {
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const tabs = ALL_TABS.filter((t) => !t.heliOnly || yatra.helicopterOption);
  const itinerary = YATRA_ITINERARIES[yatra.slug] ?? YATRA_ITINERARIES["rishikesh-tour"];
  const { inclusions, exclusions } = YATRA_INCLUSIONS.default;
  const faqs = YATRA_FAQS.default;
  const permits = YATRA_PERMITS[yatra.slug] ?? YATRA_PERMITS.default;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "sticky top-0 z-30 overflow-x-auto",
        style: {
          background: "#1A0E10",
          borderBottom: "1px solid rgba(232,160,170,0.2)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-max", children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": `yatra.tab.${tab.id}`,
            onClick: () => setActiveTab(tab.id),
            className: "px-4 py-4 text-sm font-medium whitespace-nowrap transition-colors",
            style: {
              color: activeTab === tab.id ? "#FAD4D8" : "#E8A0AA",
              borderBottom: activeTab === tab.id ? "2px solid #B5525E" : "2px solid transparent"
            },
            children: tab.label
          },
          tab.id
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8 max-w-5xl", style: { minHeight: 400 }, children: [
      activeTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              borderLeft: "4px solid #B5525E",
              paddingLeft: "1.25rem"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  color: "#FAD4D8",
                  lineHeight: 1.85,
                  fontSize: "1.05rem"
                },
                children: yatra.shortDescription
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "text-xl font-bold mb-4",
              style: { color: "#FAD4D8", fontFamily: "var(--font-display)" },
              children: "Yatra Highlights"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
            {
              icon: "🛕",
              title: "Sacred Darshan",
              desc: "Direct temple access at all dhams"
            },
            {
              icon: "🚐",
              title: "AC Transport",
              desc: "Comfortable vehicle throughout"
            },
            {
              icon: "🏨",
              title: "Quality Hotels",
              desc: "Comfortable accommodation each night"
            },
            {
              icon: "👨‍🍳",
              title: "All Meals",
              desc: "Breakfast & dinner included"
            },
            {
              icon: "🧭",
              title: "Expert Guide",
              desc: "GMVN-certified spiritual guide"
            },
            {
              icon: "📋",
              title: "All Permits",
              desc: "Registration handled for you"
            },
            {
              icon: "🏥",
              title: "Medical Kit",
              desc: "Pulse oximeter & first aid"
            },
            {
              icon: "📞",
              title: "24/7 Support",
              desc: "Emergency line always active"
            }
          ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-4 rounded-xl",
              style: {
                background: "rgba(250,212,216,0.04)",
                border: "1px solid rgba(232,160,170,0.15)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: h.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-bold text-sm mb-1",
                    style: { color: "#FAD4D8" },
                    children: h.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "#E8A0AA" }, children: h.desc })
              ]
            },
            h.title
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "text-xl font-bold mb-4",
              style: { color: "#FAD4D8", fontFamily: "var(--font-display)" },
              children: "Yatra At A Glance"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rounded-xl overflow-hidden",
              style: { border: "1px solid rgba(232,160,170,0.2)" },
              children: [
                [
                  "Duration",
                  `${yatra.durationDays} Days / ${yatra.durationNights} Nights`
                ],
                ["Best Time", yatra.bestTime],
                ["Starting Point", yatra.startingPoint],
                ["Difficulty", yatra.difficulty],
                ["Vehicle", "AC Sedan/SUV (up to 6 persons per vehicle)"],
                [
                  "Accommodation",
                  "Hotels (Standard/Deluxe as per selected tier)"
                ],
                ["Meals", "Breakfast + Dinner included daily"],
                ["Guides", "GMVN-Certified Spiritual Guide (1 per group)"],
                [
                  "Advance Registration",
                  yatra.requiresAdvanceRegistration ? "Mandatory — handled by Shail Hikers" : "Not required"
                ],
                [
                  "Helicopter Option",
                  yatra.helicopterOption ? "Available as paid add-on" : "Not applicable"
                ]
              ].map(([label, value], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex",
                  style: {
                    background: i % 2 === 0 ? "rgba(250,212,216,0.03)" : "transparent",
                    borderTop: i > 0 ? "1px solid rgba(232,160,170,0.1)" : void 0
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-40 md:w-52 p-3 font-bold text-sm flex-shrink-0",
                        style: { color: "#B5525E" },
                        children: label
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "flex-1 p-3 text-sm",
                        style: { color: "#E8A0AA" },
                        children: value
                      }
                    )
                  ]
                },
                label
              ))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-5 rounded-xl",
            style: {
              background: "rgba(168,197,218,0.08)",
              border: "1px solid rgba(168,197,218,0.25)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h4",
                {
                  className: "font-bold mb-2 flex items-center gap-2",
                  style: { color: "#A8C5DA" },
                  children: "♿ Senior Citizen & Accessibility Information"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    color: "#E8A0AA",
                    fontSize: "0.9rem",
                    lineHeight: 1.7
                  },
                  children: "Chardham Yatra is designed to be accessible to pilgrims of all ages. Gangotri and Badrinath temples are directly accessible by vehicle (walking distance <500 m from parking). For Yamunotri, palanquin (doli) service is available for ₹2,000–₹4,000 return. For Kedarnath, helicopter is the preferred option for seniors. Our guides ensure a comfortable pace and carry portable oxygen canisters for high-altitude comfort."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-3", children: [
                "Pony available at Kedarnath",
                "Palanquin at Yamunotri",
                "Helicopter option",
                "Medical staff at camps",
                "Gentle pace groups"
              ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "px-3 py-1 rounded-full text-xs",
                  style: {
                    background: "rgba(168,197,218,0.12)",
                    color: "#A8C5DA",
                    border: "1px solid rgba(168,197,218,0.3)"
                  },
                  children: item
                },
                item
              )) })
            ]
          }
        )
      ] }),
      activeTab === "itinerary" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6", style: { color: "#E8A0AA" }, children: "Day-by-day journey across the sacred route." }),
        itinerary.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "details",
          {
            className: "group rounded-xl overflow-hidden",
            style: { border: "1px solid rgba(232,160,170,0.2)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex items-center gap-4 p-5 cursor-pointer list-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0",
                    style: { background: "#B5525E", color: "#FAD4D8" },
                    children: [
                      "D",
                      day.day
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", style: { color: "#FAD4D8" }, children: day.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", style: { color: "#E8A0AA" }, children: day.locations })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xl transition-transform group-open:rotate-180 flex-shrink-0",
                    style: { color: "#B5525E" },
                    children: "›"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-5 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
                  day.driving !== "—" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2",
                      style: { color: "#E8A0AA", fontSize: "0.875rem" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🚐" }),
                        " ",
                        day.driving,
                        " drive"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2",
                      style: { color: "#E8A0AA", fontSize: "0.875rem" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🏨" }),
                        " ",
                        day.hotel
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA", lineHeight: 1.75 }, children: day.description })
              ] })
            ]
          },
          day.day
        ))
      ] }),
      activeTab === "inclusions" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "text-lg font-bold mb-4",
              style: { color: "#FAD4D8" },
              children: "✅ Inclusions"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: inclusions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-3 p-3 rounded-lg",
              style: {
                background: "rgba(45,80,22,0.08)",
                border: "1px solid rgba(45,80,22,0.25)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#2D5016" }, children: "✓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      color: "#E8A0AA",
                      fontSize: "0.875rem",
                      lineHeight: 1.6
                    },
                    children: item
                  }
                )
              ]
            },
            item
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "text-lg font-bold mb-4",
              style: { color: "#FAD4D8" },
              children: "❌ Exclusions"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: exclusions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-3 p-3 rounded-lg",
              style: {
                background: "rgba(181,82,94,0.06)",
                border: "1px solid rgba(181,82,94,0.2)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#B5525E" }, children: "✗" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      color: "#E8A0AA",
                      fontSize: "0.875rem",
                      lineHeight: 1.6
                    },
                    children: item
                  }
                )
              ]
            },
            item
          )) })
        ] })
      ] }),
      activeTab === "pricing" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl overflow-hidden",
            style: { border: "1px solid rgba(232,160,170,0.2)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "p-4",
                  style: { background: "rgba(181,82,94,0.15)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", style: { color: "#FAD4D8" }, children: "Group Size Pricing" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { style: { background: "rgba(250,212,216,0.04)" }, children: ["Group Size", "Price Per Person", "Discount"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    className: "p-4 text-left text-sm font-bold",
                    style: { color: "#FAD4D8" },
                    children: h
                  },
                  h
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: PRICING_TIERS.map((tier, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    style: {
                      borderTop: "1px solid rgba(232,160,170,0.1)",
                      background: i % 2 === 0 ? "rgba(250,212,216,0.02)" : "transparent"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", style: { color: "#E8A0AA" }, children: tier.group }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "td",
                        {
                          className: "p-4 font-bold",
                          style: { color: "#C9A84C" },
                          children: [
                            "₹",
                            Math.round(
                              yatra.basePrice * tier.multiplier
                            ).toLocaleString("en-IN")
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          className: "p-4 text-sm",
                          style: {
                            color: tier.multiplier < 1 ? "#2D5016" : tier.multiplier > 1 ? "#B5525E" : "#E8A0AA"
                          },
                          children: tier.multiplier < 1 ? `Save ${Math.round((1 - tier.multiplier) * 100)}%` : tier.multiplier > 1 ? "+15% solo surcharge" : "Base price"
                        }
                      )
                    ]
                  },
                  tier.group
                )) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-4", children: [
          {
            label: "Pay Full",
            desc: "5% discount applied",
            badge: "Best Value",
            color: "#C9A84C"
          },
          {
            label: "Pay ₹5,000 Now",
            desc: "Balance 14 days before",
            badge: "Popular",
            color: "#B5525E"
          },
          {
            label: "EMI — 3 or 6 months",
            desc: "Via Razorpay",
            badge: "",
            color: "#A8C5DA"
          }
        ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-5 rounded-xl",
            style: {
              background: "rgba(250,212,216,0.04)",
              border: "1px solid rgba(232,160,170,0.15)"
            },
            children: [
              opt.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs font-bold px-2 py-0.5 rounded mb-2 inline-block",
                  style: { background: opt.color, color: "#1A0E10" },
                  children: opt.badge
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", style: { color: "#FAD4D8" }, children: opt.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", style: { color: "#E8A0AA" }, children: opt.desc })
            ]
          },
          opt.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-5 rounded-xl",
            style: {
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.25)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mb-1", style: { color: "#C9A84C" }, children: "Early Bird Discount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA", fontSize: "0.9rem" }, children: "Book 60 days ahead — save 10%. Refer a friend: both get ₹500 off." })
            ]
          }
        )
      ] }),
      activeTab === "photos" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: GALLERY_IMAGES.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": `yatra.photo.item.${i + 1}`,
          className: "rounded-xl overflow-hidden aspect-square",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: img,
              alt: `${yatra.name} scene ${i + 1}`,
              className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300",
              loading: "lazy"
            }
          )
        },
        img
      )) }) }),
      activeTab === "spiritual" && /* @__PURE__ */ jsxRuntimeExports.jsx(YatraSpiritualTab, { yatra }),
      activeTab === "helicopter" && /* @__PURE__ */ jsxRuntimeExports.jsx(YatraHelicopterTab, { yatra }),
      activeTab === "accommodation" && /* @__PURE__ */ jsxRuntimeExports.jsx(YatraAccommodationTab, { yatra }),
      activeTab === "darshan" && /* @__PURE__ */ jsxRuntimeExports.jsx(YatraDarshanTab, { yatra }),
      activeTab === "reviews" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-4 p-5 rounded-xl",
            style: {
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.25)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-bold", style: { color: "#C9A84C" }, children: "4.9" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "#E8A0AA" }, children: "out of 5" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: [5, 4, 3, 2, 1].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs w-4", style: { color: "#E8A0AA" }, children: [
                  star,
                  "★"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex-1 h-2 rounded-full",
                    style: { background: "rgba(232,160,170,0.2)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full rounded-full",
                        style: {
                          width: star === 5 ? "85%" : star === 4 ? "12%" : "3%",
                          background: "#C9A84C"
                        }
                      }
                    )
                  }
                )
              ] }, star)) })
            ]
          }
        ),
        YATRA_REVIEWS.map((review, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `yatra.review.item.${i + 1}`,
            className: "p-5 rounded-xl",
            style: {
              border: "1px solid rgba(232,160,170,0.15)",
              background: "rgba(250,212,216,0.03)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: review.avatar,
                    alt: review.name,
                    className: "w-10 h-10 rounded-full object-cover flex-shrink-0",
                    style: { border: "2px solid #E8A0AA" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", style: { color: "#FAD4D8" }, children: review.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", style: { color: "#E8A0AA" }, children: [
                    review.city,
                    " · ",
                    review.date,
                    " · ",
                    review.yatra
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C9A84C" }, children: "★".repeat(review.rating) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    color: "#E8A0AA",
                    lineHeight: 1.7,
                    fontSize: "0.9rem"
                  },
                  children: review.text
                }
              )
            ]
          },
          review.name
        ))
      ] }),
      activeTab === "faqs" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "details",
        {
          className: "group rounded-xl overflow-hidden",
          style: { border: "1px solid rgba(232,160,170,0.15)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex items-start justify-between gap-4 p-5 cursor-pointer list-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs px-2 py-0.5 rounded mt-0.5 flex-shrink-0",
                    style: {
                      background: "rgba(181,82,94,0.2)",
                      color: "#B5525E"
                    },
                    children: faq.cat
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", style: { color: "#FAD4D8" }, children: faq.q })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xl transition-transform group-open:rotate-180 flex-shrink-0 mt-0.5",
                  style: { color: "#B5525E" },
                  children: "›"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#E8A0AA", lineHeight: 1.75 }, children: faq.a }) })
          ]
        },
        faq.q
      )) }),
      activeTab === "permits" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        permits.map((permit) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-5 rounded-xl",
            style: {
              border: "1px solid rgba(232,160,170,0.15)",
              background: "rgba(250,212,216,0.03)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-3", style: { color: "#FAD4D8" }, children: permit.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#B5525E" }, children: "Issued by: " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E8A0AA" }, children: permit.by })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#B5525E" }, children: "Cost: " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C9A84C" }, children: permit.cost })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#B5525E" }, children: "How handled: " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E8A0AA" }, children: permit.handled })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#B5525E" }, children: "Documents: " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E8A0AA" }, children: permit.docs.join(", ") })
                ] })
              ] })
            ]
          },
          permit.name
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4 rounded-xl",
            style: {
              background: "rgba(168,197,218,0.06)",
              border: "1px solid rgba(168,197,218,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mb-1", style: { color: "#A8C5DA" }, children: "Upload Your Aadhaar" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", style: { color: "#E8A0AA" }, children: "Upload your Aadhaar card in your dashboard before the yatra. Our team uses it for all permit and registration processing — saving you time at checkposts." })
            ]
          }
        )
      ] })
    ] })
  ] });
}
const TRUST_ITEMS = [
  {
    icon: "🏛",
    label: "GMVN Registered",
    detail: "Licensed by Garhwal Mandal Vikas Nigam — Uttarakhand's premier tourism body"
  },
  {
    icon: "🍱",
    label: "All Meals",
    detail: "Breakfast and dinner included daily. Quality home-style vegetarian meals."
  },
  {
    icon: "🚐",
    label: "AC Transport",
    detail: "Air-conditioned vehicles throughout. Premium sedan/SUV for all road journeys."
  },
  {
    icon: "🏨",
    label: "Hotel Accommodation",
    detail: "Comfortable hotel stay every night. No camping — proper beds and hot showers."
  },
  {
    icon: "👨‍🏫",
    label: "Certified Guides",
    detail: "All guides hold GMVN certification with 5+ years experience on Chardham routes."
  },
  {
    icon: "🏥",
    label: "Medical Kit",
    detail: "Gamow bag, pulse oximeter, AMS medication, and first aid kit on every trip."
  },
  {
    icon: "📋",
    label: "All Permits",
    detail: "Government registration, Chardham portals, biometric — all handled by us."
  },
  {
    icon: "📞",
    label: "24/7 Support",
    detail: "Shail Hikers operations center monitors every active group round the clock."
  }
];
function YatraDetailPage() {
  const { slug } = useParams({ from: "/yatras/$slug" });
  const yatra = YATRAS.find((y) => y.slug === slug);
  const [groupSize, setGroupSize] = reactExports.useState(2);
  const [activeTrust, setActiveTrust] = reactExports.useState(null);
  if (!yatra) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center",
        style: { background: "#1A0E10" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-6xl mb-4", children: "🛕" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-2", style: { color: "#FAD4D8" }, children: "Yatra Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", style: { color: "#B5525E" }, children: "← Back to Home" })
        ] })
      }
    );
  }
  const priceForGroup = groupSize >= 9 ? yatra.basePrice * 0.9 : groupSize >= 5 ? yatra.basePrice * 0.95 : groupSize === 1 ? yatra.basePrice * 1.15 : yatra.basePrice;
  const totalPrice = Math.round(priceForGroup * groupSize);
  const difficultyColor = yatra.difficulty === "Easy" ? "#2D5016" : yatra.difficulty === "Moderate" ? "#C9A84C" : "#B5525E";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: yatra.name,
    description: yatra.shortDescription,
    url: `https://shailhikers.com/yatras/${yatra.slug}`,
    image: yatra.heroImage,
    touristType: "Religious",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Uttarakhand",
      addressCountry: "IN"
    },
    offers: {
      "@type": "Offer",
      price: yatra.basePrice,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock"
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#1A0E10", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[70vh] min-h-[520px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: yatra.heroImage,
          alt: yatra.name,
          className: "absolute inset-0 w-full h-full object-cover",
          style: { filter: "brightness(0.45)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "text-[18rem] font-bold select-none",
          style: { color: "rgba(181,82,94,0.06)", lineHeight: 1 },
          children: "ॐ"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(to top, #1A0E10 0%, rgba(26,14,16,0.5) 50%, transparent 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-6 md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2 text-sm mb-4",
            style: { color: "rgba(250,212,216,0.7)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", style: { color: "rgba(250,212,216,0.7)" }, children: "Home" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "›" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", style: { color: "rgba(250,212,216,0.7)" }, children: "Yatras" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "›" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#FAD4D8" }, children: yatra.name })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "text-4xl md:text-6xl font-bold mb-3",
            style: { color: "#FAD4D8", fontFamily: "var(--font-display)" },
            children: yatra.name
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-xl mb-6",
            style: {
              color: "#E8A0AA",
              fontFamily: "var(--font-accent, var(--font-display))"
            },
            children: yatra.tagline
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mb-6", children: [
          [
            {
              label: "Duration",
              value: `${yatra.durationDays}D / ${yatra.durationNights}N`
            },
            { label: "Best Time", value: yatra.bestTime },
            {
              label: "Difficulty",
              value: yatra.difficulty,
              color: difficultyColor
            },
            { label: "From", value: yatra.startingPoint }
          ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "px-4 py-2 rounded-full text-sm",
              style: {
                background: "rgba(45,27,30,0.8)",
                border: "1px solid rgba(232,160,170,0.3)",
                backdropFilter: "blur(8px)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#B5525E" }, children: [
                  stat.label,
                  ": "
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: { color: stat.color ?? "#FAD4D8", fontWeight: 600 },
                    children: stat.value
                  }
                )
              ]
            },
            stat.label
          )),
          yatra.requiresAdvanceRegistration && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "px-4 py-2 rounded-full text-sm",
              style: {
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.4)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C9A84C" }, children: "⚠ Advance Registration Required" })
            }
          ),
          yatra.helicopterOption && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "px-4 py-2 rounded-full text-sm",
              style: {
                background: "rgba(168,197,218,0.1)",
                border: "1px solid rgba(168,197,218,0.35)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#A8C5DA" }, children: "🚁 Helicopter Available" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/book/$slug",
              params: { slug: yatra.slug },
              "data-ocid": "yatra.hero.book_button",
              className: "px-8 py-3 rounded-full font-bold",
              style: { background: "#B5525E", color: "#FAD4D8" },
              children: [
                "Book This Yatra — ₹",
                yatra.basePrice.toLocaleString("en-IN")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "yatra.hero.share_button",
              className: "px-6 py-3 rounded-full font-bold",
              style: {
                border: "1px solid rgba(232,160,170,0.5)",
                color: "#FAD4D8",
                background: "rgba(45,27,30,0.6)"
              },
              onClick: () => {
                if (navigator.share)
                  navigator.share({
                    title: yatra.name,
                    url: window.location.href
                  });
                else navigator.clipboard.writeText(window.location.href);
              },
              children: "Share Yatra"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          background: "#2D1B1E",
          borderBottom: "1px solid rgba(232,160,170,0.15)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 md:grid-cols-8 gap-3", children: TRUST_ITEMS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `yatra.trust.item.${i + 1}`,
              onClick: () => setActiveTrust(activeTrust === i ? null : i),
              className: "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors text-center",
              style: {
                background: activeTrust === i ? "rgba(181,82,94,0.15)" : "transparent"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-medium leading-tight",
                    style: { color: "#E8A0AA" },
                    children: item.label
                  }
                )
              ]
            },
            item.label
          )) }),
          activeTrust !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mt-3 p-4 rounded-lg",
              style: {
                background: "rgba(181,82,94,0.1)",
                border: "1px solid rgba(181,82,94,0.25)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", style: { color: "#FAD4D8" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", children: [
                  TRUST_ITEMS[activeTrust].icon,
                  " ",
                  TRUST_ITEMS[activeTrust].label,
                  ":"
                ] }),
                " ",
                TRUST_ITEMS[activeTrust].detail
              ] })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex-1 min-w-0 rounded-2xl overflow-hidden",
            style: { border: "1px solid rgba(232,160,170,0.15)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(YatraTabs, { yatra })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block w-80 flex-shrink-0 sticky top-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl overflow-hidden",
            style: {
              background: "#2D1B1E",
              border: "1px solid rgba(232,160,170,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-5",
                  style: { borderBottom: "1px solid rgba(232,160,170,0.15)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", style: { color: "#E8A0AA" }, children: "Starting from" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "text-3xl font-bold",
                        style: {
                          color: "#C9A84C",
                          fontFamily: "var(--font-display)"
                        },
                        children: [
                          "₹",
                          yatra.basePrice.toLocaleString("en-IN")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", style: { color: "#E8A0AA" }, children: [
                      "per person · ",
                      yatra.durationDays,
                      " days"
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "group-size-yatra",
                      className: "block text-sm font-bold mb-2",
                      style: { color: "#FAD4D8" },
                      children: "Group Size"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-3",
                      id: "group-size-yatra",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": "yatra.sidebar.group_decrease",
                            onClick: () => setGroupSize(Math.max(1, groupSize - 1)),
                            className: "w-8 h-8 rounded-full font-bold",
                            style: {
                              background: "rgba(181,82,94,0.2)",
                              color: "#FAD4D8"
                            },
                            children: "−"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "font-bold text-lg",
                            style: { color: "#FAD4D8" },
                            children: groupSize
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": "yatra.sidebar.group_increase",
                            onClick: () => setGroupSize(Math.min(20, groupSize + 1)),
                            className: "w-8 h-8 rounded-full font-bold",
                            style: {
                              background: "rgba(181,82,94,0.2)",
                              color: "#FAD4D8"
                            },
                            children: "+"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "#E8A0AA" }, children: "persons" })
                      ]
                    }
                  ),
                  groupSize >= 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-1", style: { color: "#2D5016" }, children: [
                    "🎉 Group discount applied: ",
                    groupSize >= 9 ? "10%" : "5%",
                    " ",
                    "off"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "p-4 rounded-xl",
                    style: {
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.2)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E8A0AA" }, children: "Per person" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#C9A84C" }, children: [
                          "₹",
                          Math.round(priceForGroup).toLocaleString("en-IN")
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#E8A0AA" }, children: [
                          "Group of ",
                          groupSize
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#C9A84C" }, children: [
                          "₹",
                          totalPrice.toLocaleString("en-IN")
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "pt-2",
                          style: { borderTop: "1px solid rgba(201,168,76,0.2)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", style: { color: "#FAD4D8" }, children: "Total" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "span",
                              {
                                className: "font-bold text-lg",
                                style: { color: "#C9A84C" },
                                children: [
                                  "₹",
                                  totalPrice.toLocaleString("en-IN")
                                ]
                              }
                            )
                          ] })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/book/$slug",
                    params: { slug: yatra.slug },
                    "data-ocid": "yatra.sidebar.book_button",
                    className: "block text-center py-4 rounded-xl font-bold transition-opacity hover:opacity-90",
                    style: { background: "#B5525E", color: "#FAD4D8" },
                    children: "Book Now"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://wa.me/918279888470",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "yatra.sidebar.whatsapp_button",
                    className: "flex items-center justify-center gap-2 py-3 rounded-xl font-medium",
                    style: {
                      border: "1px solid rgba(232,160,170,0.3)",
                      color: "#E8A0AA"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "💬" }),
                      " WhatsApp Us"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "p-4 rounded-xl",
                    style: {
                      background: "rgba(250,212,216,0.03)",
                      border: "1px solid rgba(232,160,170,0.1)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mb-2", style: { color: "#B5525E" }, children: "YOUR POTENTIAL GUIDE" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80",
                            alt: "Guide",
                            className: "w-10 h-10 rounded-full object-cover",
                            style: { border: "2px solid #B5525E" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-bold text-sm",
                              style: { color: "#FAD4D8" },
                              children: "Sanjay Kumar"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "#E8A0AA" }, children: "9 yrs · ⭐ 4.9/5" })
                        ] })
                      ] })
                    ]
                  }
                ),
                yatra.nextDeparture && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "p-3 rounded-lg text-center",
                    style: {
                      background: "rgba(181,82,94,0.1)",
                      border: "1px solid rgba(181,82,94,0.25)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "#E8A0AA" }, children: "Next Departure" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", style: { color: "#FAD4D8" }, children: new Date(yatra.nextDeparture).toLocaleDateString(
                        "en-IN",
                        { day: "numeric", month: "long", year: "numeric" }
                      ) })
                    ]
                  }
                )
              ] })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4",
          style: {
            background: "rgba(26,14,16,0.95)",
            borderTop: "1px solid rgba(232,160,170,0.2)",
            backdropFilter: "blur(8px)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "#E8A0AA" }, children: "from" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-lg", style: { color: "#C9A84C" }, children: [
                "₹",
                yatra.basePrice.toLocaleString("en-IN")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/book/$slug",
                params: { slug: yatra.slug },
                "data-ocid": "yatra.mobile.book_button",
                className: "flex-1 text-center py-3 rounded-full font-bold",
                style: { background: "#B5525E", color: "#FAD4D8" },
                children: "Book This Yatra"
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden h-24" })
    ] })
  ] });
}
export {
  YatraDetailPage as default
};
