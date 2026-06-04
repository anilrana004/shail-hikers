import List "mo:core/List";
import Announcement "../types/announcement";

module {
  public type Announcement     = Announcement.Announcement;
  public type AnnouncementPublic = Announcement.AnnouncementPublic;

  // Convert internal → shared
  public func toPublic(a : Announcement) : AnnouncementPublic {
    { id = a.id; text = a.text; isActive = a.isActive };
  };

  // Return all announcements as shared records
  public func getAll(store : List.List<Announcement>) : [AnnouncementPublic] {
    store.map<Announcement, AnnouncementPublic>(toPublic).toArray();
  };

  // Return only active announcements
  public func getActive(store : List.List<Announcement>) : [AnnouncementPublic] {
    store.filter(func(a : Announcement) : Bool { a.isActive })
         .map<Announcement, AnnouncementPublic>(toPublic)
         .toArray();
  };

  // Create and add a new announcement; returns the new public record
  public func create(
    store   : List.List<Announcement>,
    idSeed  : { var nextAnnouncementId : Nat },
    text    : Text,
  ) : AnnouncementPublic {
    let id = "ann-" # idSeed.nextAnnouncementId.toText();
    idSeed.nextAnnouncementId += 1;
    let a : Announcement = { id; text; var isActive = true };
    store.add(a);
    toPublic(a);
  };

  // Update text and/or isActive on an existing announcement
  public func update(
    store    : List.List<Announcement>,
    id       : Text,
    text     : Text,
    isActive : Bool,
  ) : { #ok : AnnouncementPublic; #err : Text } {
    switch (store.find(func(a : Announcement) : Bool { a.id == id })) {
      case null { #err "Announcement not found" };
      case (?_) {
        // Rebuild the entry with updated text and isActive.
        // Because `text` is immutable in the record, we replace the whole entry
        // via mapInPlace, discarding the old one and inserting a new mutable record.
        store.mapInPlace(func(ann : Announcement) : Announcement {
          if (ann.id == id) {
            let updated : Announcement = { id = ann.id; text; var isActive };
            updated;
          } else { ann };
        });
        switch (store.find(func(a2 : Announcement) : Bool { a2.id == id })) {
          case (?updated) { #ok (toPublic(updated)) };
          case null { #ok { id; text; isActive } };
        };
      };
    };
  };

  // Remove an announcement by id
  public func delete(
    store : List.List<Announcement>,
    id    : Text,
  ) : { #ok; #err : Text } {
    let sizeBefore = store.size();
    store.retain(func(a : Announcement) : Bool { a.id != id });
    if (store.size() < sizeBefore) { #ok } else { #err "Announcement not found" };
  };
};
