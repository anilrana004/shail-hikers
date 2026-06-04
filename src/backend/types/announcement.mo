module {
  // Internal mutable type (stored in canister state)
  public type Announcement = {
    id       : Text;
    text     : Text;
    var isActive : Bool;
  };

  // Shared (non-mutable) type for API boundaries
  public type AnnouncementPublic = {
    id       : Text;
    text     : Text;
    isActive : Bool;
  };
};
