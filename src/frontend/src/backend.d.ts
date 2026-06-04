import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export interface BlogPostPublic {
    id: bigint;
    title: string;
    content: string;
    views: bigint;
    slug: Slug;
    tags: Array<string>;
    publishedAt: Timestamp;
    author: string;
    readTime: bigint;
    heroImage: string;
    excerpt: string;
    category: BlogCategory;
}
export interface AddOn {
    name: string;
    pricePerPerson: bigint;
}
export type Slug = string;
export interface FaqVotesPublic {
    notHelpful: bigint;
    helpful: bigint;
}
export interface Trek {
    id: bigint;
    region: string;
    durationDays: bigint;
    startingPoint: string;
    tagline: string;
    durationNights: bigint;
    difficulty: Difficulty;
    name: string;
    bestTime: string;
    slug: Slug;
    heroImage: string;
    nearestAirport: string;
    trekDistance: bigint;
    shortDescription: string;
    isFeatured: boolean;
    maxAltitude: bigint;
    basePrice: bigint;
    nearestRailhead: string;
}
export interface BatchAvailability {
    isSoldOut: boolean;
    batchId: bigint;
    seatsAvailable: bigint;
}
export interface CorporateLead {
    id: bigint;
    contactName: string;
    createdAt: Timestamp;
    headcount: bigint;
    email: string;
    preferredDates: string;
    message: string;
    preferredTrek: string;
    companyName: string;
    phone: string;
}
export interface GuidePublic {
    id: string;
    bio: string;
    currentAssignment?: string;
    yearsExperience: bigint;
    name: string;
    designation: string;
    favoriteTrek: string;
    availability: GuideAvailability;
    rating: number;
    photo: string;
    certifications: Array<string>;
    totalTreksLed: bigint;
}
export interface BatchUpdateInput {
    status?: string;
    maxSeats?: bigint;
    endDate?: string;
    meetingPoint?: string;
    guideId?: string;
    pricePerPerson?: bigint;
    guideName?: string;
    trekName?: string;
    trekSlug?: string;
    startDate?: string;
}
export interface BatchCreateInput {
    status: string;
    maxSeats: bigint;
    endDate: string;
    meetingPoint: string;
    guideId?: string;
    pricePerPerson: bigint;
    guideName?: string;
    trekName: string;
    trekSlug: string;
    startDate: string;
}
export interface AnnouncementPublic {
    id: string;
    text: string;
    isActive: boolean;
}
export interface WaitlistEntryPublic {
    id: string;
    status: WaitlistStatus;
    name: string;
    createdAt: bigint;
    email: string;
    notifiedAt?: bigint;
    batchId: string;
    phone: string;
    position: bigint;
    numPeople: bigint;
}
export interface BookingPublic {
    id: bigint;
    paymentStatus: PaymentStatus;
    userId: UserId;
    createdAt: Timestamp;
    travelers: Array<TravelerInfo>;
    totalAmount: bigint;
    addOns: Array<AddOn>;
    trekSlug: Slug;
    batchId: bigint;
    stripeSessionId?: string;
}
export interface ReviewPublic {
    id: bigint;
    userCity: string;
    userName: string;
    foodRating: bigint;
    verified: boolean;
    userId: UserId;
    createdAt: Timestamp;
    reviewText: string;
    trekSlug: Slug;
    safetyRating: bigint;
    rating: bigint;
    helpfulVotes: bigint;
    guideRating: bigint;
}
export interface UserProfilePublic {
    principal: UserId;
    referralCode: string;
    city: string;
    name: string;
    createdAt: Timestamp;
    email: string;
    phone: string;
    wishlist: Array<Slug>;
    referralCredits: bigint;
    loyaltyTier: LoyaltyTier;
    totalTreksCompleted: bigint;
}
export type UserId = Principal;
export interface TravelerInfo {
    age: bigint;
    mealPreference: MealPreference;
    name: string;
    medicalConditions: string;
    emergencyContact: string;
    gender: string;
    tshirtSize: string;
}
export interface Yatra {
    id: bigint;
    durationDays: bigint;
    tagline: string;
    name: string;
    slug: Slug;
    heroImage: string;
    shortDescription: string;
    category: string;
    basePrice: bigint;
    nextDeparture: string;
}
export interface BatchPublic {
    id: bigint;
    status: BatchStatus;
    endDate: string;
    guideId: string;
    pricePerPerson: bigint;
    totalSeats: bigint;
    bookedSeats: bigint;
    isSoldOut: boolean;
    trekSlug: Slug;
    seatsAvailable: bigint;
    startDate: string;
}
export type WaitlistResult = {
    __kind__: "ok";
    ok: {
        waitlistId: string;
        position: bigint;
    };
} | {
    __kind__: "err";
    err: string;
};
export enum BatchStatus {
    Full = "Full",
    Open = "Open",
    Cancelled = "Cancelled",
    Completed = "Completed"
}
export enum BlogCategory {
    Stories = "Stories",
    Gear = "Gear",
    TrekTips = "TrekTips",
    YatraGuides = "YatraGuides"
}
export enum Difficulty {
    Easy = "Easy",
    Extreme = "Extreme",
    Difficult = "Difficult",
    Moderate = "Moderate"
}
export enum GuideAvailability {
    Available = "Available",
    OnTrek = "OnTrek",
    OnLeave = "OnLeave"
}
export enum LoyaltyTier {
    SummitMaster = "SummitMaster",
    Explorer = "Explorer",
    Trailblazer = "Trailblazer"
}
export enum MealPreference {
    Veg = "Veg",
    NonVeg = "NonVeg"
}
export enum NewsletterPreference {
    BlogPosts = "BlogPosts",
    Offers = "Offers",
    WeatherAlerts = "WeatherAlerts",
    NewBatches = "NewBatches"
}
export enum PaymentStatus {
    Paid = "Paid",
    Cancelled = "Cancelled",
    Pending = "Pending"
}
export enum WaitlistStatus {
    Notified = "Notified",
    Booked = "Booked",
    Waiting = "Waiting",
    Expired = "Expired"
}
export interface backendInterface {
    addToWishlist(slug: string): Promise<boolean>;
    assignGuideToBatch(batchId: string, guideId: string): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    calculateGroupPrice(trekSlug: string, groupSize: bigint, addOns: Array<AddOn>, batchId: bigint): Promise<bigint>;
    cancelBooking(id: bigint): Promise<{
        __kind__: "ok";
        ok: string;
    } | {
        __kind__: "err";
        err: string;
    }>;
    confirmBookingPayment(bookingId: bigint, stripeSessionId: string): Promise<{
        __kind__: "ok";
        ok: BookingPublic;
    } | {
        __kind__: "err";
        err: string;
    }>;
    createAnnouncement(text: string): Promise<AnnouncementPublic>;
    createBatch(input: BatchCreateInput): Promise<{
        __kind__: "ok";
        ok: BatchPublic;
    } | {
        __kind__: "err";
        err: string;
    }>;
    createBooking(batchId: bigint, groupSize: bigint, addOns: Array<AddOn>, travelers: Array<TravelerInfo>, applyEarlyBird: boolean): Promise<{
        __kind__: "ok";
        ok: {
            bookingId: bigint;
            checkoutUrl: string;
            sessionId: string;
        };
    } | {
        __kind__: "err";
        err: string;
    }>;
    createOrUpdateProfile(name: string, email: string, phone: string, city: string): Promise<UserProfilePublic>;
    deleteAnnouncement(id: string): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    deleteBatch(batchId: bigint): Promise<{
        __kind__: "ok";
        ok: boolean;
    } | {
        __kind__: "err";
        err: string;
    }>;
    getActiveAnnouncements(): Promise<Array<AnnouncementPublic>>;
    getAdminPrincipal(): Promise<Principal | null>;
    getAllAnnouncements(): Promise<Array<AnnouncementPublic>>;
    getAllGuides(): Promise<Array<GuidePublic>>;
    getAllTreks(): Promise<Array<Trek>>;
    getAllYatras(): Promise<Array<Yatra>>;
    getAvailability(batchId: bigint): Promise<{
        total: bigint;
        reserved: bigint;
        available: bigint;
        soldOut: boolean;
        percentFilled: bigint;
    }>;
    getAvailableBatches(): Promise<Array<BatchPublic>>;
    getAverageRating(trekSlug: string): Promise<bigint>;
    getBatchAvailability(batchId: bigint): Promise<BatchAvailability | null>;
    getBatchById(id: bigint): Promise<BatchPublic | null>;
    getBatchesAll(): Promise<Array<BatchPublic>>;
    getBatchesByTrek(trekSlug: string): Promise<Array<BatchPublic>>;
    getBlogByCategory(category: BlogCategory): Promise<Array<BlogPostPublic>>;
    getBlogBySlug(slug: string): Promise<BlogPostPublic | null>;
    getBlogPosts(): Promise<Array<BlogPostPublic>>;
    getBookingById(id: bigint): Promise<BookingPublic | null>;
    getBookingsByUser(): Promise<Array<BookingPublic>>;
    getCorporateLeads(): Promise<Array<CorporateLead>>;
    getFaqVotes(trekSlug: string, faqIndex: bigint): Promise<FaqVotesPublic>;
    getFeaturedTreks(): Promise<Array<Trek>>;
    getGuideById(id: string): Promise<GuidePublic | null>;
    getReviewsByTrek(trekSlug: string): Promise<Array<ReviewPublic>>;
    getStripePublicKey(): Promise<string>;
    getSubscriberCount(): Promise<bigint>;
    getTrekBySlug(slug: string): Promise<Trek | null>;
    getTreksByDifficulty(difficulty: Difficulty): Promise<Array<Trek>>;
    getUserProfile(): Promise<UserProfilePublic | null>;
    getWaitlistByBatch(batchId: string): Promise<Array<WaitlistEntryPublic>>;
    getWaitlistPosition(batchId: string, email: string): Promise<bigint | null>;
    getYatraBySlug(slug: string): Promise<Yatra | null>;
    incrementBlogViews(slug: string): Promise<boolean>;
    initAdmin(): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    joinWaitlist(batchId: string, name: string, email: string, phone: string, numPeople: bigint): Promise<WaitlistResult>;
    notifyNextOnWaitlist(batchId: string): Promise<boolean>;
    promoteFromWaitlist(batchId: string, waitlistId: string): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    removeFromWishlist(slug: string): Promise<boolean>;
    sendManualWaitlistNotification(batchId: string, waitlistId: string, message: string): Promise<boolean>;
    setStripeSecretKey(secretKey: string, publicKey: string): Promise<void>;
    submitCorporateLead(companyName: string, contactName: string, email: string, phone: string, headcount: bigint, preferredDates: string, preferredTrek: string, message: string): Promise<CorporateLead>;
    submitReview(trekSlug: string, userName: string, userCity: string, rating: bigint, guideRating: bigint, foodRating: bigint, safetyRating: bigint, reviewText: string): Promise<ReviewPublic>;
    subscribe(email: string, preferences: Array<NewsletterPreference>): Promise<boolean>;
    unsubscribe(email: string): Promise<boolean>;
    updateAnnouncement(id: string, text: string, isActive: boolean): Promise<{
        __kind__: "ok";
        ok: AnnouncementPublic;
    } | {
        __kind__: "err";
        err: string;
    }>;
    updateBatch(batchId: bigint, input: BatchUpdateInput): Promise<{
        __kind__: "ok";
        ok: BatchPublic;
    } | {
        __kind__: "err";
        err: string;
    }>;
    updateGuideAvailability(guideId: string, availability: GuideAvailability): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    updateGuidePhoto(guideId: string, photoUrl: string): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    updatePaymentStatus(id: bigint, status: PaymentStatus): Promise<boolean>;
    upsertGuide(guide: GuidePublic): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    voteFaq(trekSlug: string, faqIndex: bigint, isHelpful: boolean): Promise<boolean>;
    voteHelpful(reviewId: bigint): Promise<boolean>;
}
