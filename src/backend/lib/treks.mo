import List "mo:core/List";
import TrekTypes "../types/trek";
import Common "../types/common";

module {
  public type Trek = TrekTypes.Trek;
  public type Difficulty = Common.Difficulty;

  // Returns all treks
  public func getAll(treks : List.List<Trek>) : [Trek] {
    treks.toArray();
  };

  // Returns a trek by its slug, or null if not found
  public func getBySlug(treks : List.List<Trek>, slug : Text) : ?Trek {
    treks.find(func(t) { t.slug == slug });
  };

  // Returns treks filtered by difficulty
  public func getByDifficulty(treks : List.List<Trek>, difficulty : Difficulty) : [Trek] {
    treks.filter(func(t) { t.difficulty == difficulty }).toArray();
  };

  // Returns featured treks only
  public func getFeatured(treks : List.List<Trek>) : [Trek] {
    treks.filter(func(t) { t.isFeatured }).toArray();
  };

  // Builds the initial seed dataset of all 14 treks
  public func seedData() : List.List<Trek> {
    let data = List.empty<Trek>();
    data.add({
      id = 1; slug = "kedarkantha"; name = "Kedarkantha Trek";
      tagline = "India's Most Beloved Winter Snowscape";
      heroImage = "https://images.unsplash.com/photo-1626016830985-3e9d0b49f559?w=1200";
      difficulty = #Easy; maxAltitude = 12500; trekDistance = 20;
      durationDays = 6; durationNights = 5; bestTime = "November to April";
      startingPoint = "Sankri, Uttarkashi"; nearestRailhead = "Dehradun Railway Station (200 km)";
      nearestAirport = "Jolly Grant Airport, Dehradun (220 km)";
      basePrice = 5999; region = "Garhwal Himalayas"; isFeatured = true;
      shortDescription = "Kedarkantha is a magnificent winter trek crowned with snow-laden meadows and a summit that offers a 360-degree panorama of Swargarohini, Bandarpoonch, and Black Peak. Rising to 12,500 ft above sea level, the trek winds through dense pine forests, pristine campsites at Juda Ka Talab and Kedarkantha Base, and culminates in a dawn summit push that reveals the full glory of the Garhwal Himalayas bathed in golden light. Whether you are a first-timer chasing your first snowscape or a seasoned trekker seeking a meditative winter escape, Kedarkantha delivers the complete Himalayan experience in just six days.";
    });
    data.add({
      id = 2; slug = "har-ki-dun"; name = "Har Ki Dun Trek";
      tagline = "The Valley of the Gods — Uttarakhand's Most Sacred Glacial Basin";
      heroImage = "https://images.unsplash.com/photo-1610993165007-e85d4dc5286c?w=1200";
      difficulty = #Moderate; maxAltitude = 11700; trekDistance = 50;
      durationDays = 7; durationNights = 6; bestTime = "April to June, September to November";
      startingPoint = "Taluka, Purola, Uttarkashi"; nearestRailhead = "Dehradun Railway Station (190 km)";
      nearestAirport = "Jolly Grant Airport, Dehradun (215 km)";
      basePrice = 7999; region = "Govind Wildlife Sanctuary"; isFeatured = true;
      shortDescription = "Har Ki Dun, meaning the Valley of Gods in local dialect, is one of Uttarakhand's most pristine and storied trekking destinations. Cradled between the Swargarohini massif and the flanks of Ruinsara Tal ridge, this glacial valley cradle is said to be the route taken by the Pandavas on their final journey to heaven. The trek passes through dense cedar and birch forests, traditional Garhwali villages like Osla and Gangad that maintain centuries-old architectural traditions, alpine meadows carpeted with wildflowers, and dramatic moraines that speak of ancient glacier movement. The wide, U-shaped valley opens majestically before you on Day 5, rewarding every step of the journey.";
    });
    data.add({
      id = 3; slug = "chandernahan-lake"; name = "Chandernahan Lake Trek";
      tagline = "The Glacial Crown Jewel of the Shimla Hills";
      heroImage = "https://images.unsplash.com/photo-1578758824228-a71e2d9fa8a4?w=1200";
      difficulty = #Moderate; maxAltitude = 13600; trekDistance = 32;
      durationDays = 5; durationNights = 4; bestTime = "June to October";
      startingPoint = "Chirgaon, Rohru, Himachal Pradesh"; nearestRailhead = "Shimla Railway Station (80 km)";
      nearestAirport = "Shimla Airport (85 km)";
      basePrice = 8999; region = "Rohru Himalayas"; isFeatured = false;
      shortDescription = "Chandernahan Lake is a pristine glacial lake sitting at 13,600 ft in the remote Rohru region of Himachal Pradesh, fed by the meltwater of the Chandernahan glacier. The trek to this crystalline bowl of water passes through dense oak and rhododendron forests, traditional apple-growing villages, and dramatically shifting mountain terrain. The lake itself, surrounded by sheer cliffs and snowfields well into summer, is one of the most photographically stunning destinations in the western Himalayas. It is also notably less crowded than its counterparts in Uttarakhand, making it a rare gem for trekkers seeking solitude amid spectacular scenery.";
    });
    data.add({
      id = 4; slug = "chaainsheel-bugyal"; name = "Chaainsheel Bugyal Trek";
      tagline = "Rolling Alpine Meadows Above the Clouds of Uttarkashi";
      heroImage = "https://images.unsplash.com/photo-1601389960788-e4b44d490a12?w=1200";
      difficulty = #Easy; maxAltitude = 12100; trekDistance = 22;
      durationDays = 4; durationNights = 3; bestTime = "May to June, September to November";
      startingPoint = "Hanuman Chatti, Uttarkashi"; nearestRailhead = "Dehradun Railway Station (175 km)";
      nearestAirport = "Jolly Grant Airport, Dehradun (200 km)";
      basePrice = 4999; region = "Garhwal Himalayas"; isFeatured = false;
      shortDescription = "Chaainsheel Bugyal is a high-altitude meadow paradise in the Uttarkashi district, where vast rolling grasslands extend above the treeline, offering unobstructed views of peaks including Gangotri Group, Kedarnath, and the distant Badrinath ranges. The word 'bugyal' in local Garhwali means alpine meadow, and Chaainsheel is among the finest examples — a carpet of seasonal wildflowers in summer and a pristine snow-draped plateau in autumn. This accessible four-day trek is ideal for beginners and those seeking a gentle introduction to high-altitude camping without the technical demands of a pass crossing.";
    });
    data.add({
      id = 5; slug = "buran-ghati"; name = "Buran Ghati Trek";
      tagline = "The Rapelling Pass That Tests Every Trekker's Mettle";
      heroImage = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200";
      difficulty = #Difficult; maxAltitude = 15700; trekDistance = 45;
      durationDays = 8; durationNights = 7; bestTime = "June to July, September to October";
      startingPoint = "Jankoti, Rohru, Himachal Pradesh"; nearestRailhead = "Shimla Railway Station (90 km)";
      nearestAirport = "Shimla Airport (92 km)";
      basePrice = 13999; region = "Rohru Himalayas"; isFeatured = true;
      shortDescription = "Buran Ghati is one of the most technically demanding and visually spectacular treks in the western Himalayas, infamous for its notorious cornice — a 100-metre snow wall that must be descended by rope on the pass itself. Rising to 15,700 ft, the trek traverses the boundary between Himachal Pradesh and Uttarakhand through remote forests, glacial bowls, and high-altitude camps at Dhunda and Litham. The descent through Chitkul, the last inhabited village on the old Hindustan-Tibet trade road, adds a rich cultural dimension to a trek that is as much about human endurance as it is about mountain beauty.";
    });
    data.add({
      id = 6; slug = "ruinsara-tal"; name = "Ruinsara Tal Trek";
      tagline = "The Sacred Lake in the Shadow of Swargarohini";
      heroImage = "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200";
      difficulty = #Moderate; maxAltitude = 12500; trekDistance = 36;
      durationDays = 6; durationNights = 5; bestTime = "May to June, September to October";
      startingPoint = "Taluka, Purola, Uttarkashi"; nearestRailhead = "Dehradun Railway Station (190 km)";
      nearestAirport = "Jolly Grant Airport, Dehradun (215 km)";
      basePrice = 7499; region = "Govind Wildlife Sanctuary"; isFeatured = false;
      shortDescription = "Ruinsara Tal is a glacially-fed lake of deep blue-green water set in a high cirque below the towering Swargarohini group of peaks in the Govind Wildlife Sanctuary. Sharing its starting point with the iconic Har Ki Dun trek, the route to Ruinsara diverges into deeper wilderness, following the Supin river through ancient forests of silver birch and then ascending steeply to the lake at 12,500 ft. The surrounding ridges offer views of Swargarohini I (21,650 ft), Bandarpoonch, and the remote peaks of the Indo-Tibetan border zone. This trek demands good fitness but rewards with a profoundly quiet, rarely-visited landscape of extraordinary beauty.";
    });
    data.add({
      id = 7; slug = "rupin-pass"; name = "Rupin Pass Trek";
      tagline = "Where a Waterfall Plunges into the Clouds at 15,250 Feet";
      heroImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200";
      difficulty = #Difficult; maxAltitude = 15250; trekDistance = 55;
      durationDays = 8; durationNights = 7; bestTime = "May to June, September to October";
      startingPoint = "Dhaula, Uttarkashi"; nearestRailhead = "Dehradun Railway Station (195 km)";
      nearestAirport = "Jolly Grant Airport, Dehradun (220 km)";
      basePrice = 12999; region = "Garhwal-Kinnaur Border"; isFeatured = true;
      shortDescription = "Rupin Pass is widely regarded as one of the most diverse and visually dramatic treks in the Indian Himalayas, traversing a complete cross-section of mountain ecosystems in eight days. Beginning in the lush Rupin valley with its terraced fields and waterfalls, the route ascends through hanging villages, a breathtaking waterfall-draped gorge known as the Upper Waterfall Camp, snow bridges, and glacial fields before cresting the 15,250-ft pass. The descent into Sangla valley in Himachal Pradesh is equally spectacular, dropping through wildflower meadows and pine forests into the ancient Kinnauri cultural landscape. This trek has it all — waterfalls, snowfields, passes, and cultural immersion.";
    });
    data.add({
      id = 8; slug = "bali-pass"; name = "Bali Pass Trek";
      tagline = "The Extreme Himalayan Traverse Connecting Two Ancient Valleys";
      heroImage = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200";
      difficulty = #Extreme; maxAltitude = 16207; trekDistance = 60;
      durationDays = 9; durationNights = 8; bestTime = "June to July, September";
      startingPoint = "Janki Chatti, Uttarkashi"; nearestRailhead = "Dehradun Railway Station (175 km)";
      nearestAirport = "Jolly Grant Airport, Dehradun (200 km)";
      basePrice = 17999; region = "Govind Wildlife Sanctuary"; isFeatured = false;
      shortDescription = "Bali Pass is among the highest, remotest, and most demanding trekking passes in the Garhwal Himalayas, connecting the Yamunotri valley with the Tons river basin through a 16,207-ft high-altitude col. This nine-day expedition-grade trek is for experienced Himalayan trekkers only — the pass section involves scrambling over unstable moraine, navigating permanent snowfields, and enduring extreme weather exposure at altitude. The rewards, however, are extraordinary: the route passes through the barely-visited Bali Plateau, the sacred Yamunotri temple, remote forests of the Govind Wildlife Sanctuary, and the traditional village of Osla in the Tons valley. Rope and technical gear are used on the pass; participants must have prior high-altitude experience.";
    });
    data.add({
      id = 9; slug = "dayara-bugyal"; name = "Dayara Bugyal Trek";
      tagline = "Uttarakhand's Most Accessible High-Altitude Meadow";
      heroImage = "https://images.unsplash.com/photo-1604537372136-89b3dae196e3?w=1200";
      difficulty = #Easy; maxAltitude = 11000; trekDistance = 16;
      durationDays = 4; durationNights = 3; bestTime = "October to March (snow), June to September (flowers)";
      startingPoint = "Barsu or Raithal, Uttarkashi"; nearestRailhead = "Dehradun Railway Station (180 km)";
      nearestAirport = "Jolly Grant Airport, Dehradun (205 km)";
      basePrice = 4499; region = "Garhwal Himalayas"; isFeatured = true;
      shortDescription = "Dayara Bugyal is the quintessential beginner's high-altitude trek — a sweeping alpine meadow at 11,000 ft that rolls across the Gangotri mountain range like a vast green (or snow-white) carpet suspended between heaven and earth. Accessible from both Barsu and Raithal villages, the trek ascends gently through oak and rhododendron forests before bursting into the open meadow with panoramic views of Srikanth, Draupadi Ka Danda, and Gangotri peaks. In winter it transforms into a pristine snowfield, making it the perfect location for beginner skiing and snowshoeing. Families, seniors, and anyone seeking a gentle but spectacular introduction to the Himalayas will find Dayara Bugyal unforgettable.";
    });
    data.add({
      id = 10; slug = "nag-tibba"; name = "Nag Tibba Trek";
      tagline = "The Perfect Weekend Himalayan Escape from Dehradun";
      heroImage = "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200";
      difficulty = #Easy; maxAltitude = 9915; trekDistance = 16;
      durationDays = 2; durationNights = 1; bestTime = "October to March";
      startingPoint = "Pantwari, Tehri Garhwal"; nearestRailhead = "Dehradun Railway Station (58 km)";
      nearestAirport = "Jolly Grant Airport, Dehradun (62 km)";
      basePrice = 2299; region = "Lower Garhwal Himalayas"; isFeatured = true;
      shortDescription = "Nag Tibba, the 'Serpent's Peak' at 9,915 ft, is the highest peak in the lower Himalayan ranges of Tehri Garhwal and the most accessible overnight trek from Dehradun, making it the ideal introduction to Himalayan trekking. The two-day route from Pantwari village passes through dense oak, rhododendron and wild berry forests, reaching a campsite at the treeline with clear night skies undisturbed by city light pollution. The summit rewards with a 270-degree panorama of the greater Himalayan range including Srikantha, Bandarpoonch, Kedarnath, Chaukhamba, and Nanda Devi — all visible on a clear winter morning. This is the perfect confidence-building trek before venturing higher.";
    });
    data.add({
      id = 11; slug = "chopta-chandrashila"; name = "Chopta Chandrashila Trek";
      tagline = "Temple Trek Through the Mini-Switzerland of Uttarakhand";
      heroImage = "https://images.unsplash.com/photo-1585016495481-91613f765fe6?w=1200";
      difficulty = #Easy; maxAltitude = 13100; trekDistance = 14;
      durationDays = 4; durationNights = 3; bestTime = "March to June, October to November";
      startingPoint = "Chopta, Rudraprayag"; nearestRailhead = "Rishikesh Railway Station (209 km)";
      nearestAirport = "Jolly Grant Airport, Dehradun (245 km)";
      basePrice = 5499; region = "Kedarnath Wildlife Sanctuary"; isFeatured = true;
      shortDescription = "Chopta Chandrashila combines spiritual devotion with alpine grandeur in one of Uttarakhand's most beloved short treks. The route from the meadow-strewn base at Chopta (the 'Mini-Switzerland of India') climbs through forests of oak, pine, and rhododendron to the ancient Tungnath temple — the highest Shiva temple in the world at 12,073 ft — before continuing to the Chandrashila summit at 13,100 ft. From the top, a complete sweep of the Himalayan horizon unfolds: Kedarnath, Chaukhamba, Trishul, Nanda Devi, and Bandarpoonch are all visible on clear days. The combination of mythology, meadows, temple history, and summit views makes this four-day trek an extraordinary experience.";
    });
    data.add({
      id = 12; slug = "phulara-ridge"; name = "Phulara Ridge Trek";
      tagline = "Walk the Ridge with the Himalayas on Both Sides";
      heroImage = "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1200";
      difficulty = #Easy; maxAltitude = 11850; trekDistance = 24;
      durationDays = 4; durationNights = 3; bestTime = "April to June, September to November";
      startingPoint = "Sankri, Uttarkashi"; nearestRailhead = "Dehradun Railway Station (200 km)";
      nearestAirport = "Jolly Grant Airport, Dehradun (225 km)";
      basePrice = 5499; region = "Garhwal Himalayas"; isFeatured = false;
      shortDescription = "Phulara Ridge is one of the most unusual and exhilarating walking experiences available in the Garhwal Himalayas — a four-day route that follows a high-altitude ridge crest for extended stretches, providing simultaneous views of peaks on both sides of the watershed. Unlike valley treks that look up at mountains, Phulara puts you on the ridge itself, with the Swargarohini group to the north and the lower ranges fading toward the plains to the south. The trail passes through dense forests of oak and pine, wildflower meadows, and the remote herder settlement of Phulara, where Gujjar pastoral communities still practice transhumance exactly as they have for centuries.";
    });
    data.add({
      id = 13; slug = "borasu-pass"; name = "Borasu Pass Trek";
      tagline = "The Remotest High Pass in Govind Wildlife Sanctuary";
      heroImage = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200";
      difficulty = #Difficult; maxAltitude = 16530; trekDistance = 65;
      durationDays = 8; durationNights = 7; bestTime = "June to July, September";
      startingPoint = "Sankri, Uttarkashi"; nearestRailhead = "Dehradun Railway Station (200 km)";
      nearestAirport = "Jolly Grant Airport, Dehradun (225 km)";
      basePrice = 15999; region = "Govind Wildlife Sanctuary"; isFeatured = false;
      shortDescription = "Borasu Pass at 16,530 ft is the crown jewel of the Govind Wildlife Sanctuary and one of the most demanding trekking passes in Uttarakhand, standing 300 ft higher than the more famous Rupin Pass. The eight-day route from Sankri traverses deeply remote terrain through the Supin river valley, past the serene Litham camping ground, through permanent glacial snowfields, and over the pass into the Kinnauri village of Chitkul. Wildlife sightings of snow leopard, Himalayan tahr, and bharal are possible in the higher reaches. This is expedition-grade trekking requiring prior high-altitude experience, strong fitness, and a tolerance for multi-day isolation deep in the wilderness.";
    });
    data.add({
      id = 14; slug = "valley-of-flowers"; name = "Valley of Flowers Trek";
      tagline = "UNESCO World Heritage — Nature's Most Extraordinary Alpine Garden";
      heroImage = "https://images.unsplash.com/photo-1495312040802-e450cfdf2f2f?w=1200";
      difficulty = #Easy; maxAltitude = 11300; trekDistance = 38;
      durationDays = 6; durationNights = 5; bestTime = "July to September";
      startingPoint = "Govindghat, Chamoli"; nearestRailhead = "Rishikesh Railway Station (275 km)";
      nearestAirport = "Jolly Grant Airport, Dehradun (295 km)";
      basePrice = 8499; region = "Nanda Devi Biosphere Reserve"; isFeatured = true;
      shortDescription = "The Valley of Flowers National Park is a UNESCO World Heritage Site and one of the most breathtakingly beautiful natural landscapes on Earth — a 87.5 sq km valley in the Nanda Devi Biosphere Reserve that erupts into an astonishing tapestry of over 500 species of wildflowers from July through September. The trek begins at Govindghat near Badrinath, ascending through the sacred Sikh pilgrimage town of Ghangaria before entering the valley proper. The combination of the UNESCO Valley of Flowers and the nearby Hemkund Sahib Gurudwara at 15,200 ft makes this one of the most spiritually and aesthetically rich trekking experiences in the Himalayas. Rare species include the iconic Brahmakamal, Himalayan poppy, cobra lily, and endemic orchids found nowhere else on Earth.";
    });
    data;
  };
};
