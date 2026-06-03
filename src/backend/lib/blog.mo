import List "mo:core/List";
import BlogTypes "../types/blog";
import Common "../types/common";

module {
  public type BlogPost = BlogTypes.BlogPost;
  public type BlogPostPublic = BlogTypes.BlogPostPublic;

  // Converts mutable BlogPost to shareable form
  public func toPublic(p : BlogPost) : BlogPostPublic {
    {
      id = p.id;
      slug = p.slug;
      title = p.title;
      excerpt = p.excerpt;
      content = p.content;
      category = p.category;
      author = p.author;
      readTime = p.readTime;
      heroImage = p.heroImage;
      tags = p.tags;
      publishedAt = p.publishedAt;
      views = p.views;
    };
  };

  // Returns all published blog posts
  public func getAll(posts : List.List<BlogPost>) : [BlogPostPublic] {
    posts.map<BlogPost, BlogPostPublic>(func(p) { toPublic(p) }).toArray();
  };

  // Returns a blog post by its slug
  public func getBySlug(posts : List.List<BlogPost>, slug : Text) : ?BlogPostPublic {
    switch (posts.find(func(p) { p.slug == slug })) {
      case (?p) { ?toPublic(p) };
      case null { null };
    };
  };

  // Returns blog posts filtered by category
  public func getByCategory(posts : List.List<BlogPost>, category : Common.BlogCategory) : [BlogPostPublic] {
    posts.filter(func(p) { p.category == category }).map<BlogPost, BlogPostPublic>(func(p) { toPublic(p) }).toArray();
  };

  // Increments the views counter on a post
  public func incrementViews(posts : List.List<BlogPost>, slug : Text) : Bool {
    switch (posts.find(func(p) { p.slug == slug })) {
      case (?p) { p.views += 1; true };
      case null { false };
    };
  };

  // Builds the initial seed dataset of 5 starter articles
  public func seedData() : List.List<BlogPost> {
    let data = List.empty<BlogPost>();
    data.add({
      id = 1;
      slug = "complete-guide-kedarkantha-trek";
      title = "Complete Guide to Kedarkantha Trek: India's Most Popular Winter Trek";
      excerpt = "Everything you need to know about the Kedarkantha Trek — from the best time to visit to what to pack, route details, and why it has become India's most-loved winter trail.";
      content = "Kedarkantha Trek: India's Most Beloved Winter Trail\n\nNestled in the Govind Wildlife Sanctuary of Uttarkashi district, the Kedarkantha trek has become synonymous with winter trekking in India. At 12,500 ft above sea level, this magnificent peak offers a symphony of snowfields, dense pine forests, and a 360-degree panorama of the greater Himalayan range that has made it the #1 winter trek in India for over a decade.\n\nThe journey begins at Sankri, a picturesque village at 6,400 ft in the Tons river valley, accessible by a 9-hour drive from Dehradun. Sankri itself is worth a day's exploration — the Govind Wildlife Sanctuary headquarters, the ancient Govind temple, and the views of the Swargarohini massif from the village square set the tone for what lies ahead.\n\nThe first two trekking days carry you through some of the finest mixed forests in the western Himalayas — dense stands of pine, oak, and rhododendron draped in snow from November onwards, interspersed with clear mountain streams and clearings that offer preview glimpses of the peaks ahead. The campsite at Juda Ka Talab (frozen lake camp) at 9,100 ft is particularly spectacular in winter, when the small lake freezes completely and the clearing glitters with frost.\n\nThe third day brings you to Kedarkantha Base at 11,250 ft — a wide, open meadow surrounded by pines with the summit pyramid rising dramatically above. This is the highest campsite and the staging point for the summit push. Acclimatisation is important here; most trekkers spend the afternoon on exploratory walks to adjust before the 2 AM wake-up call.\n\nThe summit push begins in pre-dawn darkness, ascending steeply through snowfields to reach the summit at 12,500 ft ideally by sunrise. The view from the top on a clear winter morning is one of the most extraordinary experiences available in the Indian Himalayas — the entire Garhwal Himalayan horizon from Swargarohini to Bandarpoonch to Black Peak laid out in perfect clarity, turning shades of rose and gold as the sun rises. Most trekkers consider this single moment worth the entire effort of the preceding five days.\n\nFor first-timers, Kedarkantha represents the ideal entry point to high-altitude snow trekking — technically straightforward, logistically well-supported, and rewarding beyond measure. Shail Hikers has led over 200 successful batches to this summit since 2015, and our guides know every metre of this trail in every season. Come experience why Kedarkantha has captured the imagination of every trekker who has stood on its summit.";
      category = #TrekTips;
      author = "Deepak Negi, Head Guide";
      readTime = 7;
      heroImage = "https://images.unsplash.com/photo-1626016830985-3e9d0b49f559?w=1200";
      tags = ["Kedarkantha", "Winter Trek", "Uttarakhand", "Snow Trek", "Beginner Trek"];
      publishedAt = 1748736000000000000;
      var views = 4823;
    });
    data.add({
      id = 2;
      slug = "valley-of-flowers-unesco-uttarakhand";
      title = "Valley of Flowers: A UNESCO World Heritage Trek in Uttarakhand";
      excerpt = "The Valley of Flowers National Park blooms for just three months a year. Here's everything you need to know to witness one of Earth's most extraordinary natural spectacles.";
      content = "Valley of Flowers: Nature's Most Extraordinary Alpine Garden\n\nFrom July to September each year, a narrow valley tucked deep in the Nanda Devi Biosphere Reserve transforms into something that seems too extraordinary to be real — a sweeping, miles-long carpet of over 500 species of wildflowers in every colour imaginable, all blooming simultaneously against a backdrop of snow-draped Himalayan peaks. This is the Valley of Flowers National Park, a UNESCO World Heritage Site, and one of the most memorable natural experiences available to trekkers anywhere in the world.\n\nThe Valley of Flowers was largely unknown outside the region until 1931, when British mountaineer Frank Smythe discovered it while returning from a Kamet expedition. He was so overwhelmed by its beauty that he later wrote a book about it — and the rest, as they say, is history. Today it draws thousands of botanists, photographers, nature lovers, and spiritual seekers each summer, yet somehow retains an otherworldly serenity.\n\nThe trek begins at Govindghat, a small town on the Badrinath highway that serves as the gateway to both Valley of Flowers and the Hemkund Sahib Gurudwara. The first day's walk of 14 km along the Pushpawati river through the Bhyundar valley is deceptively beautiful even before the valley proper — traditional Garhwali stone villages, cascading waterfalls, dense mixed forests, and the spectacular Ghangaria meadow base camp.\n\nEntering the Valley of Flowers itself requires leaving Ghangaria and following a seasonal trail into the national park. The forest department controls entry and charges a small permit fee; camping inside the valley is strictly prohibited to protect this fragile ecosystem. Day visits of 5-7 hours allow trekkers to cover the length of the accessible valley, where the flowers change as you progress — from dense patches of the sacred Brahmakamal lotus to fields of the rare Himalayan blue poppy, cobra lily, edelweiss, and dozens of orchid species.\n\nFor those combining the trek with Hemkund Sahib — the Sikh pilgrimage lake at 15,200 ft, the highest gurudwara in the world — the combination of botanical wonder and spiritual elevation is genuinely life-changing. Shail Hikers' 6-day Valley of Flowers itinerary includes both, with acclimatisation time built in and experienced botanical guides who can identify species and share the ecological story of this irreplaceable landscape.";
      category = #TrekTips;
      author = "Mohan Bisht, Senior Guide";
      readTime = 8;
      heroImage = "https://images.unsplash.com/photo-1495312040802-e450cfdf2f2f?w=1200";
      tags = ["Valley of Flowers", "UNESCO", "Uttarakhand", "Wildflowers", "Monsoon Trek"];
      publishedAt = 1748822400000000000;
      var views = 3241;
    });
    data.add({
      id = 3;
      slug = "chardham-yatra-2025-planning-guide";
      title = "Chardham Yatra 2025: Complete Planning Guide for First-Timers";
      excerpt = "Planning your first Chardham Yatra? This comprehensive guide covers permits, best time, route, what to expect at each dham, and how Shail Hikers makes the journey seamless.";
      content = "Chardham Yatra 2025: Your Complete First-Timer's Planning Guide\n\nThe Chardham Yatra — the circuit of four sacred Hindu shrines in the Garhwal Himalayas — is not merely a journey. It is a transformation. For devout Hindus, completing the Chardham — Yamunotri, Gangotri, Kedarnath, and Badrinath — is a spiritual obligation that washes away the accumulated karma of a lifetime. Even for secular travellers, the combination of extraordinary mountain scenery, ancient architecture, living religious culture, and the physical pilgrimage experience makes the Chardham one of the most profound journeys available in India.\n\nThe four dhams open each year in late April or early May (dates are determined by the priests of each temple using the Hindu calendar) and close in October or November before the winter snowfall makes the high-altitude roads impassable. The ideal window for a first-time Chardham is May-June (moderate temperatures, fresh snow on peaks, most pilgrims) or September-October (fewer crowds, stable weather, clearest visibility).\n\nYamunotri, the source of the Yamuna river, is typically the first dham on the circuit. The 6-km trek from Janki Chatti to the temple is straightforward but steep; palanquins and horses are available for those who need them. The main attraction is the Surya Kund — a boiling hot spring beside the temple where pilgrims cook rice wrapped in cloth to offer to the goddess.\n\nGangotri, the source of the Ganga, is accessible by road and requires no trek. The temple sits dramatically at the edge of the roaring Bhagirathi river; the glacier that feeds it, Gangotri Glacier, has receded to 19 km away at Gaumukh, making the glacier trek a popular extension for physically fit pilgrims.\n\nKedarnath is the most demanding dham — a 16-km mountain trek or 8-minute helicopter flight from Phata. The Jyotirlinga shrine of Shiva, reconstructed after the 2013 floods, sits at 11,755 ft beneath the Kedarnath peak. The atmosphere here, especially at the evening aarti when oil lamps illuminate the ancient stone walls, is unlike anything else in India.\n\nBadrinath, the abode of Vishnu, sits at 10,170 ft above the Alaknanda river and is the most easily accessible of the four dhams. The colourfully painted temple, the Tapt Kund hot springs beside it, and the dramatic backdrop of the Nilkantha peak make Badrinath one of the most photographically iconic sites in the Himalayas. Shail Hikers manages all permits, accommodation, priest arrangements, and transport for our Chardham groups, ensuring the sacred journey is experienced with full attention and devotion.";
      category = #YatraGuides;
      author = "Anil Rawat, Yatra Specialist";
      readTime = 9;
      heroImage = "https://images.unsplash.com/photo-1616430977885-24cdacbb90ef?w=1200";
      tags = ["Chardham Yatra", "Yamunotri", "Gangotri", "Kedarnath", "Badrinath", "Uttarakhand"];
      publishedAt = 1748908800000000000;
      var views = 5672;
    });
    data.add({
      id = 4;
      slug = "ultimate-himalayan-trek-gear-list";
      title = "What to Pack for a High-Altitude Himalayan Trek: The Ultimate Gear List";
      excerpt = "After guiding over 10,000 trekkers, our head guides have perfected the definitive gear list for Himalayan trekking. Every item matters when you're at altitude.";
      content = "The Ultimate Himalayan Trek Gear List: What Our Guides Carry and Why\n\nAfter a decade of guiding trekkers across 14 routes in the Garhwal Himalayas, our senior guide team has collectively watched thousands of trekkers under-prepare and over-pack in equal measure. The ideal high-altitude trek kit is a precise balance — warm enough for -10°C nights, light enough for 8-hour walking days, and resilient enough for rain, sun, snow, and everything in between.\n\nThe most critical item on any Himalayan trek is your footwear. A proper ankle-support trekking boot with a Vibram or equivalent rubber sole is non-negotiable — we have seen more trek dropouts caused by unsuitable footwear than any other single factor. The boot must be already broken in; never bring new boots to a trek. Waterproof membranes (Gore-Tex or similar) are strongly recommended for treks from July to September.\n\nLayering is the science of Himalayan comfort. Your clothing system should consist of three layers: a moisture-wicking base layer that keeps sweat away from your skin, a mid-layer fleece or down jacket for insulation, and a waterproof-windproof shell as the outermost layer. At 12,000+ ft, temperatures can swing from +15°C at midday to -8°C at night; having all three layers accessible at all times is essential.\n\nFor the head and hands, a warm woolen or fleece cap that covers the ears is mandatory above 10,000 ft. Add a balaclava for extreme cold treks (Kedarkantha winter, Bali Pass). Sun protection at altitude is critical — UV radiation increases approximately 4% per 300 metres of altitude gain, making SPF 50+ sunscreen and UV400 sunglasses as important as any other piece of gear.\n\nYour backpack should be in the 40-50L range for a 6-8 day trek (Shail Hikers provides kitchen gear, tents, and sleeping bags). Target a total packed weight of 8-10 kg without water. A rain cover for your backpack is essential — it should be brought even on non-monsoon treks, as afternoon storms can occur throughout the trekking season.\n\nFour items that many first-timers skip and later regret: trekking poles (dramatically reduce knee strain on descents), a headlamp with fresh batteries (mandatory for summit pushes), a personal first aid kit with blister treatment and altitude sickness awareness medication, and a power bank — electrical charging is unavailable beyond base camps on most routes. Pack smart, pack light, and the Himalayas will take care of the rest.";
      category = #Gear;
      author = "Rajan Thakur, Equipment Manager";
      readTime = 6;
      heroImage = "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200";
      tags = ["Gear", "Packing List", "High Altitude", "Trekking Equipment", "Preparation"];
      publishedAt = 1748995200000000000;
      var views = 2987;
    });
    data.add({
      id = 5;
      slug = "corporate-team-kedarkantha-story";
      title = "How Our Team of 45 Found Their True North on Kedarkantha: A Corporate Story";
      excerpt = "When the HR Director of a 500-person Hyderabad tech company brought 45 team members to Kedarkantha, neither she nor her team expected what happened next. A transformation story.";
      content = "Finding True North: How 45 Infosys Team Members Discovered Real Leadership on Kedarkantha\n\nPreya Krishnamurthy, HR Director at a leading Hyderabad technology firm, had tried everything. Team lunches, offsite resorts, personality assessments, leadership workshops facilitated by expensive consultants in conference rooms. None of it had produced the shift in team dynamics she was looking for — the genuine trust, the willingness to be vulnerable, the shared experience of having overcome something real together.\n\nThen a colleague mentioned Shail Hikers and Kedarkantha.\n\n45 team members — ranging in age from 24 to 52, in fitness from marathon runners to those who'd never hiked before — assembled at Dehradun ISBT on a December morning in 2024 for what would become, by unanimous agreement, the most transformative professional experience of their careers.\n\nThe first lesson came on Day 2. Sriram, a senior architect with 15 years of experience and undeniable technical authority in the office, struggled badly on the steep ascent to Juda Ka Talab in the snow. Meera, a 26-year-old UI designer who everyone in the office thought of as quiet and reserved, walked beside him for three hours, matching his pace, talking him through it, and refusing to leave him behind. By the time they reached camp, something had shifted in how those two humans looked at each other.\n\nThe summit day produced its own revelations. Suresh, the CTO, would later write in his experience report: 'At 4 AM, in -12°C, at 11,000 feet, with the summit still 1,500 feet above us and my lungs burning, I had a moment of absolute clarity. Every leadership principle I had ever learned, every framework and methodology, distilled into one simple truth: just keep moving, and take care of the person beside you.'\n\nShail Hikers' approach to corporate treks goes beyond logistics. Our dedicated relationship manager worked with Preya for two months before the trek to design team activities, evening sharing circles, and daily leadership reflection moments that were woven into the trekking experience rather than bolted on as separate exercises. On summit morning, every single one of the 45 team members made it to the top.\n\nBack in Hyderabad six weeks later, Preya reported measurable changes: cross-functional collaboration scores up 34% in the quarterly survey, two inter-departmental projects initiated by team members who had connected on the trek, and — most tellingly — a WhatsApp group of the 45 trekkers that has become one of the most active and supportive communities within the company. Some transformations cannot be engineered in a conference room. They have to be earned on a mountain.";
      category = #Stories;
      author = "Shail Hikers Editorial Team";
      readTime = 8;
      heroImage = "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=1200";
      tags = ["Corporate Trek", "Team Building", "Kedarkantha", "Leadership", "Transformation"];
      publishedAt = 1749081600000000000;
      var views = 1854;
    });
    data;
  };
};
