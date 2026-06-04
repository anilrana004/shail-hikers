import Map "mo:core/Map";
import Text "mo:core/Text";
import Guide "../types/guide";

module {
  public type Guide = Guide.Guide;
  public type GuidePublic = Guide.GuidePublic;
  public type GuideAvailability = Guide.GuideAvailability;

  // Return all guides as public records.
  public func getAll(
    guides : Map.Map<Text, Guide>,
  ) : [GuidePublic] {
    guides.entries().map<(Text, Guide), GuidePublic>(func((_, g)) { toPublic(g) }).toArray();
  };

  // Return a single guide by id.
  public func getById(
    guides  : Map.Map<Text, Guide>,
    guideId : Text,
  ) : ?GuidePublic {
    switch (guides.get(guideId)) {
      case (?g) { ?toPublic(g) };
      case null { null };
    };
  };

  // Assign a guide to a batch (updates guide.currentAssignment + availability).
  public func assignToBatch(
    guides  : Map.Map<Text, Guide>,
    guideId : Text,
    batchId : Text,
  ) : { #ok; #err : Text } {
    switch (guides.get(guideId)) {
      case null { #err "Guide not found" };
      case (?guide) {
        guide.currentAssignment := ?batchId;
        guide.availability := #OnTrek;
        #ok;
      };
    };
  };

  // Update a guide's availability status.
  public func updateAvailability(
    guides       : Map.Map<Text, Guide>,
    guideId      : Text,
    availability : GuideAvailability,
  ) : { #ok; #err : Text } {
    switch (guides.get(guideId)) {
      case null { #err "Guide not found" };
      case (?guide) {
        guide.availability := availability;
        #ok;
      };
    };
  };

  // Insert or update a guide record.
  public func upsert(
    guides : Map.Map<Text, Guide>,
    g      : GuidePublic,
  ) : { #ok; #err : Text } {
    let internal : Guide = {
      id                = g.id;
      name              = g.name;
      photo             = g.photo;
      designation       = g.designation;
      yearsExperience   = g.yearsExperience;
      certifications    = g.certifications;
      favoriteTrek      = g.favoriteTrek;
      var rating            = g.rating;
      var totalTreksLed     = g.totalTreksLed;
      var availability      = g.availability;
      var currentAssignment = g.currentAssignment;
      bio               = g.bio;
    };
    guides.add(internal.id, internal);
    #ok;
  };

  // Update only the photo field of an existing guide.
  // Reads the stored internal record, overwrites the photo URL, and re-inserts.
  public func updatePhoto(
    guides   : Map.Map<Text, Guide>,
    guideId  : Text,
    photoUrl : Text,
  ) : { #ok; #err : Text } {
    switch (guides.get(guideId)) {
      case null { #err "Guide not found" };
      case (?guide) {
        // Guide has var fields so record spread is not allowed; rebuild fully.
        let updated : Guide = {
          id                = guide.id;
          name              = guide.name;
          photo             = photoUrl;
          designation       = guide.designation;
          yearsExperience   = guide.yearsExperience;
          certifications    = guide.certifications;
          favoriteTrek      = guide.favoriteTrek;
          var rating            = guide.rating;
          var totalTreksLed     = guide.totalTreksLed;
          var availability      = guide.availability;
          var currentAssignment = guide.currentAssignment;
          bio               = guide.bio;
        };
        guides.add(guideId, updated);
        #ok;
      };
    };
  };

  // Convert internal record to public (no-var) form.
  public func toPublic(guide : Guide) : GuidePublic {
    {
      id                = guide.id;
      name              = guide.name;
      photo             = guide.photo;
      designation       = guide.designation;
      yearsExperience   = guide.yearsExperience;
      certifications    = guide.certifications;
      favoriteTrek      = guide.favoriteTrek;
      rating            = guide.rating;
      totalTreksLed     = guide.totalTreksLed;
      availability      = guide.availability;
      currentAssignment = guide.currentAssignment;
      bio               = guide.bio;
    };
  };
  // Seed initial guide data into the map.
  public func initSeedGuides(guides : Map.Map<Text, Guide>) {
    let seed : [Guide] = [
      {
        id                = "guide-deepak";
        name              = "Deepak Rawat";
        photo             = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200";
        designation       = "Lead Trek Guide";
        yearsExperience   = 12;
        certifications    = ["ITBP Certified", "WFR Certified", "UIAA Level 2"];
        favoriteTrek      = "kedarkantha";
        var rating            = 4.9;
        var totalTreksLed     = 186;
        var availability      = #Available;
        var currentAssignment = null;
        bio               = "Deepak has led over 186 Himalayan expeditions across Uttarakhand and Himachal Pradesh.";
      },
      {
        id                = "guide-vikram";
        name              = "Vikram Singh";
        photo             = "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200";
        designation       = "Senior Mountain Guide";
        yearsExperience   = 9;
        certifications    = ["ITBP Certified", "Basic Mountaineering Course"];
        favoriteTrek      = "rupin-pass";
        var rating            = 4.8;
        var totalTreksLed     = 134;
        var availability      = #Available;
        var currentAssignment = null;
        bio               = "Vikram specializes in high-altitude crossings and technical passes.";
      },
      {
        id                = "guide-priya";
        name              = "Priya Negi";
        photo             = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200";
        designation       = "Trek Guide & Naturalist";
        yearsExperience   = 6;
        certifications    = ["WFR Certified", "Naturalist Training"];
        favoriteTrek      = "valley-of-flowers";
        var rating            = 4.9;
        var totalTreksLed     = 87;
        var availability      = #Available;
        var currentAssignment = null;
        bio               = "Priya brings unmatched botanical knowledge to every trek.";
      },
      {
        id                = "guide-arjun";
        name              = "Arjun Thakur";
        photo             = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200";
        designation       = "Mountain Guide";
        yearsExperience   = 7;
        certifications    = ["ITBP Certified", "Advanced First Aid"];
        favoriteTrek      = "bali-pass";
        var rating            = 4.7;
        var totalTreksLed     = 98;
        var availability      = #Available;
        var currentAssignment = null;
        bio               = "Arjun is renowned for his calm leadership on extreme-difficulty treks.";
      },
    ];
    for (g in seed.vals()) {
      guides.add(g.id, g);
    };
  };
};
