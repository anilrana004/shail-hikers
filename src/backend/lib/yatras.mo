import List "mo:core/List";
import YatraTypes "../types/yatra";

module {
  public type Yatra = YatraTypes.Yatra;

  // Returns all yatras
  public func getAll(yatras : List.List<Yatra>) : [Yatra] {
    yatras.toArray();
  };

  // Returns a yatra by its slug, or null if not found
  public func getBySlug(yatras : List.List<Yatra>, slug : Text) : ?Yatra {
    yatras.find(func(y) { y.slug == slug });
  };

  // Builds the initial seed dataset of all 4 yatras
  public func seedData() : List.List<Yatra> {
    let data = List.empty<Yatra>();
    data.add({
      id = 1; slug = "mussoorie-tour"; name = "Mussoorie Tour";
      tagline = "The Queen of Hill Stations — Mist, Mountains & Majestic Views";
      heroImage = "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=1200";
      durationDays = 3; basePrice = 8500; category = "Hill Station Tour";
      shortDescription = "Mussoorie, perched at 6,600 ft in the Garhwal Himalayas, is India's most beloved hill station — a graceful colonial-era town of Victorian architecture, bustling Mall Road, and sweeping views of the Himalayan foothills and the Doon valley below. Our 3-day tour covers Kempty Falls (Uttarakhand's most iconic waterfall), Gun Hill (accessible by ropeway), Lal Tibba (highest point with telescope views of Badrinath and Kedarnath), Camel's Back Road, and Mussoorie Lake. We stay in carefully selected heritage-style hotels with mountain views, and our local guide brings the colonial and Garhwali history of the town alive. Perfect for families, couples, and first-time Uttarakhand visitors.";
      nextDeparture = "Every Friday year-round";
    });
    data.add({
      id = 2; slug = "rishikesh-tour"; name = "Rishikesh Tour";
      tagline = "The Yoga Capital of the World — Where the Ganga Sings";
      heroImage = "https://images.unsplash.com/photo-1553443836-0ff0a9e6bb7a?w=1200";
      durationDays = 3; basePrice = 7500; category = "Spiritual & Adventure Tour";
      shortDescription = "Rishikesh, where the Ganga emerges from the mountains into the plains, is simultaneously India's yoga capital, whitewater rafting headquarters, and a deeply sacred pilgrimage town. Our 3-day tour balances spiritual experiences with adventure activities: a Ganga Aarti ceremony at Triveni Ghat at dawn, yoga and meditation sessions at a riverside ashram, whitewater rafting on Grade 3-4 rapids between Marine Drive and Lakshman Jhula, a bungee jump at India's highest bungee platform (83 metres), and visits to the iconic Lakshman Jhula and Ram Jhula suspension bridges with their ancient temples. We also arrange Ayurvedic consultations and evening kirtan sessions for those seeking a deeper spiritual experience.";
      nextDeparture = "Every Saturday year-round";
    });
    data.add({
      id = 3; slug = "chardham-yatra"; name = "Chardham Yatra";
      tagline = "The Supreme Himalayan Pilgrimage — Four Sacred Dhams in One Journey";
      heroImage = "https://images.unsplash.com/photo-1616430977885-24cdacbb90ef?w=1200";
      durationDays = 12; basePrice = 45000; category = "Sacred Pilgrimage";
      shortDescription = "The Chardham Yatra is the most sacred pilgrimage in Hinduism — a circuit of four divine shrines (Yamunotri, Gangotri, Kedarnath, and Badrinath) nestled in the Garhwal Himalayas that devout Hindus strive to complete at least once in a lifetime. Our 12-day meticulously planned yatra covers all four dhams with comfortable accommodation at each stop, experienced religious guides who explain the mythology and rituals of each shrine, priority darshan arrangements at each temple, daily vegetarian meals, and the option of helicopter services to Kedarnath (available as a premium add-on). Advance registration is mandatory as permits are limited. This deeply moving journey through the divine geography of Uttarakhand changes everyone who undertakes it.";
      nextDeparture = "May 10, 2026 (Registration Open)";
    });
    data.add({
      id = 4; slug = "do-dham-yatra"; name = "Do Dham Yatra";
      tagline = "Kedarnath & Badrinath — The Twin Peaks of Himalayan Devotion";
      heroImage = "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200";
      durationDays = 7; basePrice = 28000; category = "Sacred Pilgrimage";
      shortDescription = "The Do Dham Yatra — encompassing the sacred Kedarnath and Badrinath shrines — is the most popular two-dham combination for pilgrims who cannot undertake the full Chardham circuit. Kedarnath, home of the Jyotirlinga of Lord Shiva at 11,755 ft, demands a dramatic 16-km mountain trek or helicopter flight, while Badrinath, the abode of Lord Vishnu at 10,170 ft beside the Alaknanda river, is accessible by motorable road. Our 7-day itinerary allows for unhurried darshan at both shrines, morning abhishek participation, evening aarti ceremonies, and acclimatisation days at each location. We offer both standard and premium accommodation options and manage all priest arrangements for our pilgrims.";
      nextDeparture = "May 17, 2026";
    });
    data;
  };
};
