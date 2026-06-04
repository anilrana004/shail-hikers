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
export interface BatchAvailability {
    isSoldOut: boolean;
    batchId: bigint;
    seatsAvailable: bigint;
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
export interface backendInterface {
    addToWishlist(slug: string): Promise<boolean>;
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
    getBatchesByTrek(trekSlug: string): Promise<Array<BatchPublic>>;
    getBlogByCategory(category: BlogCategory): Promise<Array<BlogPostPublic>>;
    getBlogBySlug(slug: string): Promise<BlogPostPublic | null>;
    getBlogPosts(): Promise<Array<BlogPostPublic>>;
    getBookingById(id: bigint): Promise<BookingPublic | null>;
    getBookingsByUser(): Promise<Array<BookingPublic>>;
    getCorporateLeads(): Promise<Array<CorporateLead>>;
    getFaqVotes(trekSlug: string, faqIndex: bigint): Promise<FaqVotesPublic>;
    getFeaturedTreks(): Promise<Array<Trek>>;
    getReviewsByTrek(trekSlug: string): Promise<Array<ReviewPublic>>;
    getStripePublicKey(): Promise<string>;
    getSubscriberCount(): Promise<bigint>;
    getTrekBySlug(slug: string): Promise<Trek | null>;
    getTreksByDifficulty(difficulty: Difficulty): Promise<Array<Trek>>;
    getUserProfile(): Promise<UserProfilePublic | null>;
    getYatraBySlug(slug: string): Promise<Yatra | null>;
    incrementBlogViews(slug: string): Promise<boolean>;
    removeFromWishlist(slug: string): Promise<boolean>;
    setStripeSecretKey(secretKey: string, publicKey: string): Promise<void>;
    submitCorporateLead(companyName: string, contactName: string, email: string, phone: string, headcount: bigint, preferredDates: string, preferredTrek: string, message: string): Promise<CorporateLead>;
    submitReview(trekSlug: string, userName: string, userCity: string, rating: bigint, guideRating: bigint, foodRating: bigint, safetyRating: bigint, reviewText: string): Promise<ReviewPublic>;
    subscribe(email: string, preferences: Array<NewsletterPreference>): Promise<boolean>;
    unsubscribe(email: string): Promise<boolean>;
    updatePaymentStatus(id: bigint, status: PaymentStatus): Promise<boolean>;
    voteFaq(trekSlug: string, faqIndex: bigint, isHelpful: boolean): Promise<boolean>;
    voteHelpful(reviewId: bigint): Promise<boolean>;
}
