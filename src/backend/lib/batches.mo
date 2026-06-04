import List "mo:core/List";
import BatchTypes "../types/batch";
import Common "../types/common";
import Nat "mo:core/Nat";

module {
  public type Batch = BatchTypes.Batch;
  public type BatchPublic = BatchTypes.BatchPublic;

  // Converts mutable Batch to a shareable BatchPublic record
  public func toPublic(b : Batch) : BatchPublic {
    let seatsAvailable = Nat.sub(b.totalSeats, b.bookedSeats);
    {
      id = b.id;
      trekSlug = b.trekSlug;
      startDate = b.startDate;
      endDate = b.endDate;
      totalSeats = b.totalSeats;
      bookedSeats = b.bookedSeats;
      seatsAvailable;
      isSoldOut = seatsAvailable == 0;
      pricePerPerson = b.pricePerPerson;
      guideId = b.guideId;
      status = b.status;
    };
  };

  // Returns all batches for a given trek slug
  public func getByTrek(batches : List.List<Batch>, trekSlug : Text) : [BatchPublic] {
    batches.filter(func(b) { b.trekSlug == trekSlug }).map<Batch, BatchPublic>(func(b) { toPublic(b) }).toArray();
  };

  // Returns all batches with #Open status
  public func getAvailable(batches : List.List<Batch>) : [BatchPublic] {
    batches.filter(func(b) { b.status == #Open }).map<Batch, BatchPublic>(func(b) { toPublic(b) }).toArray();
  };

  // Returns a single batch by its id
  public func getById(batches : List.List<Batch>, id : Nat) : ?BatchPublic {
    switch (batches.find(func(b) { b.id == id })) {
      case (?b) { ?toPublic(b) };
      case null { null };
    };
  };

  // Increments bookedSeats by groupSize, flips status to #Full when all seats taken.
  // Returns false if batch not found, not #Open, or insufficient seats.
  public func reserveSeats(batches : List.List<Batch>, batchId : Nat, groupSize : Nat) : Bool {
    switch (batches.find(func(b) { b.id == batchId })) {
      case null { false };
      case (?b) {
        let available = Nat.sub(b.totalSeats, b.bookedSeats);
        if (b.status != #Open or available < groupSize) {
          false;
        } else {
          b.bookedSeats += groupSize;
          if (b.bookedSeats >= b.totalSeats) {
            b.status := #Full;
          };
          true;
        };
      };
    };
  };

  // Decrements bookedSeats by groupSize and re-opens batch if it was #Full.
  // Returns false if batch not found or groupSize > bookedSeats.
  public func releaseSeats(batches : List.List<Batch>, batchId : Nat, groupSize : Nat) : Bool {
    switch (batches.find(func(b) { b.id == batchId })) {
      case null { false };
      case (?b) {
        if (b.bookedSeats < groupSize) {
          false;
        } else {
          b.bookedSeats -= groupSize;
          if (b.status == #Full) {
            b.status := #Open;
          };
          true;
        };
      };
    };
  };

  // Returns availability snapshot for a batch.
  public func getBatchAvailability(batches : List.List<Batch>, batchId : Nat) : ?BatchTypes.BatchAvailability {
    switch (batches.find(func(b) { b.id == batchId })) {
      case null { null };
      case (?b) {
        let seatsAvailable = Nat.sub(b.totalSeats, b.bookedSeats);
        ?{
          batchId = b.id;
          seatsAvailable;
          isSoldOut = seatsAvailable == 0;
        };
      };
    };
  };

  // Returns a full availability report for a batch.
  public type AvailabilityReport = {
    total : Nat;
    available : Nat;
    reserved : Nat;
    percentFilled : Nat;
    soldOut : Bool;
  };

  public func getAvailability(batches : List.List<Batch>, batchId : Nat) : ?AvailabilityReport {
    switch (batches.find(func(b) { b.id == batchId })) {
      case null { null };
      case (?b) {
        let reserved = b.bookedSeats;
        let available = Nat.sub(b.totalSeats, reserved);
        let percentFilled = if (b.totalSeats == 0) { 100 } else { (reserved * 100) / b.totalSeats };
        ?{
          total = b.totalSeats;
          available;
          reserved;
          percentFilled;
          soldOut = available == 0;
        };
      };
    };
  };

  // Builds initial seed batches (3–4 per trek)
  public func seedData() : List.List<Batch> {
    let data = List.empty<Batch>();
    // Kedarkantha — 4 batches
    data.add(({ id = 1; trekSlug = "kedarkantha"; startDate = "2026-07-15"; endDate = "2026-07-20"; totalSeats = 12; var bookedSeats = 4; pricePerPerson = 5999; guideId = "deepak-negi"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 2; trekSlug = "kedarkantha"; startDate = "2026-08-12"; endDate = "2026-08-17"; totalSeats = 12; var bookedSeats = 8; pricePerPerson = 5999; guideId = "rajan-thakur"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 3; trekSlug = "kedarkantha"; startDate = "2026-10-08"; endDate = "2026-10-13"; totalSeats = 14; var bookedSeats = 2; pricePerPerson = 5999; guideId = "deepak-negi"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 4; trekSlug = "kedarkantha"; startDate = "2026-12-20"; endDate = "2026-12-25"; totalSeats = 14; var bookedSeats = 10; pricePerPerson = 6499; guideId = "anil-rawat"; var status : Common.BatchStatus = #Open } : Batch));
    // Har Ki Dun — 3 batches
    data.add(({ id = 5; trekSlug = "har-ki-dun"; startDate = "2026-07-10"; endDate = "2026-07-16"; totalSeats = 10; var bookedSeats = 3; pricePerPerson = 7999; guideId = "suresh-negi"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 6; trekSlug = "har-ki-dun"; startDate = "2026-09-14"; endDate = "2026-09-20"; totalSeats = 10; var bookedSeats = 7; pricePerPerson = 7999; guideId = "deepak-negi"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 7; trekSlug = "har-ki-dun"; startDate = "2026-10-19"; endDate = "2026-10-25"; totalSeats = 12; var bookedSeats = 1; pricePerPerson = 7999; guideId = "suresh-negi"; var status : Common.BatchStatus = #Open } : Batch));
    // Valley of Flowers — 3 batches
    data.add(({ id = 8; trekSlug = "valley-of-flowers"; startDate = "2026-07-22"; endDate = "2026-07-27"; totalSeats = 12; var bookedSeats = 9; pricePerPerson = 8499; guideId = "mohan-bisht"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 9; trekSlug = "valley-of-flowers"; startDate = "2026-08-05"; endDate = "2026-08-10"; totalSeats = 12; var bookedSeats = 12; pricePerPerson = 8499; guideId = "mohan-bisht"; var status : Common.BatchStatus = #Full } : Batch));
    data.add(({ id = 10; trekSlug = "valley-of-flowers"; startDate = "2026-08-26"; endDate = "2026-08-31"; totalSeats = 12; var bookedSeats = 5; pricePerPerson = 8499; guideId = "rajan-thakur"; var status : Common.BatchStatus = #Open } : Batch));
    // Rupin Pass — 3 batches
    data.add(({ id = 11; trekSlug = "rupin-pass"; startDate = "2026-07-08"; endDate = "2026-07-15"; totalSeats = 10; var bookedSeats = 6; pricePerPerson = 12999; guideId = "anil-rawat"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 12; trekSlug = "rupin-pass"; startDate = "2026-09-12"; endDate = "2026-09-19"; totalSeats = 10; var bookedSeats = 2; pricePerPerson = 12999; guideId = "deepak-negi"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 13; trekSlug = "rupin-pass"; startDate = "2026-10-07"; endDate = "2026-10-14"; totalSeats = 10; var bookedSeats = 8; pricePerPerson = 12999; guideId = "anil-rawat"; var status : Common.BatchStatus = #Open } : Batch));
    // Buran Ghati — 3 batches
    data.add(({ id = 14; trekSlug = "buran-ghati"; startDate = "2026-07-16"; endDate = "2026-07-23"; totalSeats = 8; var bookedSeats = 5; pricePerPerson = 13999; guideId = "suresh-negi"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 15; trekSlug = "buran-ghati"; startDate = "2026-09-17"; endDate = "2026-09-24"; totalSeats = 8; var bookedSeats = 3; pricePerPerson = 13999; guideId = "rajan-thakur"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 16; trekSlug = "buran-ghati"; startDate = "2026-10-01"; endDate = "2026-10-08"; totalSeats = 8; var bookedSeats = 7; pricePerPerson = 13999; guideId = "suresh-negi"; var status : Common.BatchStatus = #Open } : Batch));
    // Nag Tibba — 4 batches
    data.add(({ id = 17; trekSlug = "nag-tibba"; startDate = "2026-07-18"; endDate = "2026-07-19"; totalSeats = 14; var bookedSeats = 6; pricePerPerson = 2299; guideId = "mohan-bisht"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 18; trekSlug = "nag-tibba"; startDate = "2026-08-08"; endDate = "2026-08-09"; totalSeats = 14; var bookedSeats = 12; pricePerPerson = 2299; guideId = "mohan-bisht"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 19; trekSlug = "nag-tibba"; startDate = "2026-10-10"; endDate = "2026-10-11"; totalSeats = 14; var bookedSeats = 4; pricePerPerson = 2299; guideId = "anil-rawat"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 20; trekSlug = "nag-tibba"; startDate = "2026-12-12"; endDate = "2026-12-13"; totalSeats = 14; var bookedSeats = 9; pricePerPerson = 2499; guideId = "mohan-bisht"; var status : Common.BatchStatus = #Open } : Batch));
    // Dayara Bugyal — 3 batches
    data.add(({ id = 21; trekSlug = "dayara-bugyal"; startDate = "2026-07-24"; endDate = "2026-07-27"; totalSeats = 12; var bookedSeats = 3; pricePerPerson = 4499; guideId = "rajan-thakur"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 22; trekSlug = "dayara-bugyal"; startDate = "2026-10-14"; endDate = "2026-10-17"; totalSeats = 12; var bookedSeats = 8; pricePerPerson = 4499; guideId = "deepak-negi"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 23; trekSlug = "dayara-bugyal"; startDate = "2026-12-18"; endDate = "2026-12-21"; totalSeats = 12; var bookedSeats = 5; pricePerPerson = 4999; guideId = "rajan-thakur"; var status : Common.BatchStatus = #Open } : Batch));
    // Chopta Chandrashila — 3 batches
    data.add(({ id = 24; trekSlug = "chopta-chandrashila"; startDate = "2026-07-20"; endDate = "2026-07-23"; totalSeats = 12; var bookedSeats = 7; pricePerPerson = 5499; guideId = "anil-rawat"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 25; trekSlug = "chopta-chandrashila"; startDate = "2026-10-16"; endDate = "2026-10-19"; totalSeats = 12; var bookedSeats = 4; pricePerPerson = 5499; guideId = "mohan-bisht"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 26; trekSlug = "chopta-chandrashila"; startDate = "2026-11-13"; endDate = "2026-11-16"; totalSeats = 12; var bookedSeats = 10; pricePerPerson = 5499; guideId = "anil-rawat"; var status : Common.BatchStatus = #Open } : Batch));
    // Bali Pass — 3 batches
    data.add(({ id = 27; trekSlug = "bali-pass"; startDate = "2026-07-05"; endDate = "2026-07-13"; totalSeats = 8; var bookedSeats = 6; pricePerPerson = 17999; guideId = "suresh-negi"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 28; trekSlug = "bali-pass"; startDate = "2026-09-04"; endDate = "2026-09-12"; totalSeats = 8; var bookedSeats = 2; pricePerPerson = 17999; guideId = "suresh-negi"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 29; trekSlug = "bali-pass"; startDate = "2026-09-20"; endDate = "2026-09-28"; totalSeats = 8; var bookedSeats = 8; pricePerPerson = 17999; guideId = "anil-rawat"; var status : Common.BatchStatus = #Full } : Batch));
    // Borasu Pass — 3 batches
    data.add(({ id = 30; trekSlug = "borasu-pass"; startDate = "2026-07-01"; endDate = "2026-07-08"; totalSeats = 8; var bookedSeats = 4; pricePerPerson = 15999; guideId = "suresh-negi"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 31; trekSlug = "borasu-pass"; startDate = "2026-09-08"; endDate = "2026-09-15"; totalSeats = 8; var bookedSeats = 1; pricePerPerson = 15999; guideId = "rajan-thakur"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 32; trekSlug = "borasu-pass"; startDate = "2026-09-25"; endDate = "2026-10-02"; totalSeats = 8; var bookedSeats = 6; pricePerPerson = 15999; guideId = "suresh-negi"; var status : Common.BatchStatus = #Open } : Batch));
    // Chandernahan Lake — 3 batches
    data.add(({ id = 33; trekSlug = "chandernahan-lake"; startDate = "2026-07-28"; endDate = "2026-08-01"; totalSeats = 10; var bookedSeats = 5; pricePerPerson = 8999; guideId = "mohan-bisht"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 34; trekSlug = "chandernahan-lake"; startDate = "2026-09-03"; endDate = "2026-09-07"; totalSeats = 10; var bookedSeats = 8; pricePerPerson = 8999; guideId = "deepak-negi"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 35; trekSlug = "chandernahan-lake"; startDate = "2026-10-06"; endDate = "2026-10-10"; totalSeats = 10; var bookedSeats = 3; pricePerPerson = 8999; guideId = "mohan-bisht"; var status : Common.BatchStatus = #Open } : Batch));
    // Chaainsheel Bugyal — 3 batches
    data.add(({ id = 36; trekSlug = "chaainsheel-bugyal"; startDate = "2026-07-31"; endDate = "2026-08-03"; totalSeats = 12; var bookedSeats = 6; pricePerPerson = 4999; guideId = "rajan-thakur"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 37; trekSlug = "chaainsheel-bugyal"; startDate = "2026-09-25"; endDate = "2026-09-28"; totalSeats = 12; var bookedSeats = 4; pricePerPerson = 4999; guideId = "anil-rawat"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 38; trekSlug = "chaainsheel-bugyal"; startDate = "2026-11-06"; endDate = "2026-11-09"; totalSeats = 12; var bookedSeats = 9; pricePerPerson = 4999; guideId = "rajan-thakur"; var status : Common.BatchStatus = #Open } : Batch));
    // Ruinsara Tal — 3 batches
    data.add(({ id = 39; trekSlug = "ruinsara-tal"; startDate = "2026-07-14"; endDate = "2026-07-19"; totalSeats = 10; var bookedSeats = 4; pricePerPerson = 7499; guideId = "suresh-negi"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 40; trekSlug = "ruinsara-tal"; startDate = "2026-09-21"; endDate = "2026-09-26"; totalSeats = 10; var bookedSeats = 7; pricePerPerson = 7499; guideId = "deepak-negi"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 41; trekSlug = "ruinsara-tal"; startDate = "2026-10-12"; endDate = "2026-10-17"; totalSeats = 10; var bookedSeats = 2; pricePerPerson = 7499; guideId = "suresh-negi"; var status : Common.BatchStatus = #Open } : Batch));
    // Phulara Ridge — 3 batches
    data.add(({ id = 42; trekSlug = "phulara-ridge"; startDate = "2026-07-26"; endDate = "2026-07-29"; totalSeats = 12; var bookedSeats = 5; pricePerPerson = 5499; guideId = "anil-rawat"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 43; trekSlug = "phulara-ridge"; startDate = "2026-10-03"; endDate = "2026-10-06"; totalSeats = 12; var bookedSeats = 3; pricePerPerson = 5499; guideId = "mohan-bisht"; var status : Common.BatchStatus = #Open } : Batch));
    data.add(({ id = 44; trekSlug = "phulara-ridge"; startDate = "2026-11-07"; endDate = "2026-11-10"; totalSeats = 12; var bookedSeats = 8; pricePerPerson = 5499; guideId = "anil-rawat"; var status : Common.BatchStatus = #Open } : Batch));
    data;
  };
};
