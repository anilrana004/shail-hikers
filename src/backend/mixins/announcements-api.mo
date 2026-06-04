import List "mo:core/List";
import AnnouncementsLib "../lib/announcements";
import Announcement "../types/announcement";
import Runtime "mo:core/Runtime";

// Mixin: announcements management public endpoints.
// Receives:
//   announcements        — list of announcement records
//   announcementState    — mutable counter for id generation
//   adminState           — shared mutable record holding the admin principal
mixin (
  announcements     : List.List<AnnouncementsLib.Announcement>,
  announcementState : { var nextAnnouncementId : Nat },
  adminState        : { var adminPrincipal : ?Principal },
) {

  // Private admin-check helper — uniquely named to avoid M0051 collision
  func isAdminAnnouncements(caller : Principal) : Bool {
    switch (adminState.adminPrincipal) {
      case (?a) { caller == a };
      case null { false };
    };
  };

  // ── Public query: active announcements (for homepage ticker) ─────────────────
  public query func getActiveAnnouncements() : async [Announcement.AnnouncementPublic] {
    AnnouncementsLib.getActive(announcements);
  };

  // ── Public query: all announcements (admin list view) ────────────────────────
  public query func getAllAnnouncements() : async [Announcement.AnnouncementPublic] {
    AnnouncementsLib.getAll(announcements);
  };

  // ── Admin: create a new announcement ────────────────────────────────────────
  public shared ({ caller }) func createAnnouncement(
    text : Text,
  ) : async Announcement.AnnouncementPublic {
    if (not isAdminAnnouncements(caller)) {
      return Runtime.trap("Unauthorized");
    };
    AnnouncementsLib.create(announcements, announcementState, text);
  };

  // ── Admin: update an announcement's text and/or active flag ─────────────────
  public shared ({ caller }) func updateAnnouncement(
    id       : Text,
    text     : Text,
    isActive : Bool,
  ) : async { #ok : Announcement.AnnouncementPublic; #err : Text } {
    if (not isAdminAnnouncements(caller)) {
      return #err "Unauthorized";
    };
    AnnouncementsLib.update(announcements, id, text, isActive);
  };

  // ── Admin: delete an announcement ───────────────────────────────────────────
  public shared ({ caller }) func deleteAnnouncement(
    id : Text,
  ) : async { #ok; #err : Text } {
    if (not isAdminAnnouncements(caller)) {
      return #err "Unauthorized";
    };
    AnnouncementsLib.delete(announcements, id);
  };
};
