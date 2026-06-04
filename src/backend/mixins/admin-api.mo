// Mixin: admin principal management.
// Receives:
//   adminState — shared mutable record holding the admin principal
mixin (adminState : { var adminPrincipal : ?Principal }) {

  // ── initAdmin: one-time bootstrap ───────────────────────────────────────────
  // Sets caller as the admin principal.
  // Only succeeds if no admin has been assigned yet.
  public shared ({ caller }) func initAdmin() : async { #ok; #err : Text } {
    switch (adminState.adminPrincipal) {
      case null {
        adminState.adminPrincipal := ?caller;
        #ok;
      };
      case (?_) {
        #err "Admin already initialized";
      };
    };
  };

  // ── getAdminPrincipal: let the frontend check if current user is admin ───────
  public query func getAdminPrincipal() : async ?Principal {
    adminState.adminPrincipal;
  };
};
