import { createActor } from "@/backend";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuthStatus } from "@/store/authStore";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  AlertCircle,
  Award,
  Calendar,
  CheckCircle2,
  ChevronUp,
  Clock,
  Filter,
  ListOrdered,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Search,
  Shield,
  Star,
  TrendingUp,
  Users,
  XCircle,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

// ─── Types ───────────────────────────────────────────────────────────

type TabKey = "bookings" | "guides" | "batches" | "waitlists";

type BookingStatus = "confirmed" | "pending" | "cancelled" | "completed";

interface Booking {
  id: string;
  trekName: string;
  customerName: string;
  email: string;
  phone: string;
  batchDate: string;
  groupSize: number;
  totalAmount: number;
  status: BookingStatus;
  paymentStatus: "paid" | "partial" | "pending";
  guideName?: string;
  bookedAt: string;
}

interface Guide {
  id: string;
  name: string;
  designation: string;
  phone: string;
  certifications: string[];
  availability: "Available" | "OnTrek" | "OnLeave";
  rating: number;
  treksLed: number;
  currentAssignment?: string;
}

interface Batch {
  id: string;
  trekName: string;
  startDate: string;
  endDate: string;
  seatsTotal: number;
  seatsBooked: number;
  price: number;
  status: "open" | "full" | "closed" | "cancelled";
  guideName?: string;
  guideId?: string;
}

interface WaitlistEntry {
  id: string;
  batchId: string;
  trekName: string;
  batchDate: string;
  name: string;
  email: string;
  phone: string;
  position: number;
  numPeople: number;
  status: "Waiting" | "Notified" | "Booked" | "Expired";
  createdAt: string;
  notifiedAt?: string;
}

// ─── Mock Data ───────────────────────────────────────────────────────

const MOCK_BOOKINGS: Booking[] = [
  {
    id: "BK-001",
    trekName: "Kedarkantha Trek",
    customerName: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91-98765-43210",
    batchDate: "2026-01-15",
    groupSize: 4,
    totalAmount: 23996,
    status: "confirmed",
    paymentStatus: "paid",
    guideName: "Deepak Negi",
    bookedAt: "2025-12-01",
  },
  {
    id: "BK-002",
    trekName: "Har Ki Dun Trek",
    customerName: "Priya Patel",
    email: "priya.p@email.com",
    phone: "+91-98765-43211",
    batchDate: "2026-02-20",
    groupSize: 2,
    totalAmount: 15998,
    status: "pending",
    paymentStatus: "partial",
    bookedAt: "2025-12-05",
  },
  {
    id: "BK-003",
    trekName: "Valley of Flowers",
    customerName: "Amit Kumar",
    email: "amit.k@email.com",
    phone: "+91-98765-43212",
    batchDate: "2026-07-10",
    groupSize: 6,
    totalAmount: 41994,
    status: "confirmed",
    paymentStatus: "paid",
    guideName: "Suresh Bisht",
    bookedAt: "2025-11-20",
  },
  {
    id: "BK-004",
    trekName: "Bali Pass Trek",
    customerName: "Neha Gupta",
    email: "neha.g@email.com",
    phone: "+91-98765-43213",
    batchDate: "2026-05-15",
    groupSize: 1,
    totalAmount: 14999,
    status: "cancelled",
    paymentStatus: "pending",
    bookedAt: "2025-12-10",
  },
  {
    id: "BK-005",
    trekName: "Dayara Bugyal Trek",
    customerName: "Vikram Singh",
    email: "vikram.s@email.com",
    phone: "+91-98765-43214",
    batchDate: "2026-03-05",
    groupSize: 3,
    totalAmount: 17997,
    status: "confirmed",
    paymentStatus: "paid",
    guideName: "Deepak Negi",
    bookedAt: "2025-12-08",
  },
];

const MOCK_GUIDES: Guide[] = [
  {
    id: "GD-001",
    name: "Deepak Negi",
    designation: "Senior Trek Leader",
    phone: "+91-82798-88470",
    certifications: ["UIAA", "IMF", "Wilderness First Aid"],
    availability: "OnTrek",
    rating: 4.9,
    treksLed: 156,
    currentAssignment: "Kedarkantha Trek (Jan 15)",
  },
  {
    id: "GD-002",
    name: "Suresh Bisht",
    designation: "Mountain Guide",
    phone: "+91-82798-88471",
    certifications: ["IMF", "Basic Mountaineering"],
    availability: "Available",
    rating: 4.7,
    treksLed: 89,
  },
  {
    id: "GD-003",
    name: "Anita Rawat",
    designation: "Trek Leader",
    phone: "+91-82798-88472",
    certifications: ["Wilderness First Aid", "Leave No Trace"],
    availability: "Available",
    rating: 4.8,
    treksLed: 67,
  },
  {
    id: "GD-004",
    name: "Rohit Chauhan",
    designation: "Assistant Guide",
    phone: "+91-82798-88473",
    certifications: ["Basic Mountaineering"],
    availability: "OnLeave",
    rating: 4.5,
    treksLed: 34,
  },
];

const MOCK_BATCHES: Batch[] = [
  {
    id: "BT-001",
    trekName: "Kedarkantha Trek",
    startDate: "2026-01-15",
    endDate: "2026-01-20",
    seatsTotal: 12,
    seatsBooked: 10,
    price: 5999,
    status: "open",
    guideName: "Deepak Negi",
    guideId: "GD-001",
  },
  {
    id: "BT-002",
    trekName: "Har Ki Dun Trek",
    startDate: "2026-02-20",
    endDate: "2026-02-26",
    seatsTotal: 10,
    seatsBooked: 10,
    price: 7999,
    status: "full",
  },
  {
    id: "BT-003",
    trekName: "Valley of Flowers",
    startDate: "2026-07-10",
    endDate: "2026-07-15",
    seatsTotal: 15,
    seatsBooked: 8,
    price: 6999,
    status: "open",
    guideName: "Suresh Bisht",
    guideId: "GD-002",
  },
  {
    id: "BT-004",
    trekName: "Bali Pass Trek",
    startDate: "2026-05-15",
    endDate: "2026-05-22",
    seatsTotal: 8,
    seatsBooked: 4,
    price: 14999,
    status: "open",
  },
  {
    id: "BT-005",
    trekName: "Dayara Bugyal Trek",
    startDate: "2026-03-05",
    endDate: "2026-03-08",
    seatsTotal: 12,
    seatsBooked: 12,
    price: 5999,
    status: "full",
    guideName: "Deepak Negi",
    guideId: "GD-001",
  },
];

const MOCK_WAITLIST: WaitlistEntry[] = [
  {
    id: "WL-001",
    batchId: "BT-002",
    trekName: "Har Ki Dun Trek",
    batchDate: "2026-02-20",
    name: "Sneha Reddy",
    email: "sneha.r@email.com",
    phone: "+91-98765-43215",
    position: 1,
    numPeople: 2,
    status: "Waiting",
    createdAt: "2025-12-12",
  },
  {
    id: "WL-002",
    batchId: "BT-002",
    trekName: "Har Ki Dun Trek",
    batchDate: "2026-02-20",
    name: "Arjun Nair",
    email: "arjun.n@email.com",
    phone: "+91-98765-43216",
    position: 2,
    numPeople: 1,
    status: "Notified",
    createdAt: "2025-12-10",
    notifiedAt: "2025-12-14",
  },
  {
    id: "WL-003",
    batchId: "BT-005",
    trekName: "Dayara Bugyal Trek",
    batchDate: "2026-03-05",
    name: "Meera Iyer",
    email: "meera.i@email.com",
    phone: "+91-98765-43217",
    position: 1,
    numPeople: 3,
    status: "Waiting",
    createdAt: "2025-12-13",
  },
];

// ─── Helper Components ───────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    confirmed: "bg-[#2D6A4F] text-white",
    pending: "bg-[#FFEB3B] text-[#1A1A1A]",
    cancelled: "bg-[#F88379] text-white",
    completed: "bg-[#82C8E5] text-[#1A1A1A]",
    paid: "bg-[#2D6A4F] text-white",
    partial: "bg-[#FFEB3B] text-[#1A1A1A]",
    open: "bg-[#2D6A4F] text-white",
    full: "bg-[#F88379] text-white",
    closed: "bg-[#7A7A7A] text-white",
    Available: "bg-[#2D6A4F] text-white",
    OnTrek: "bg-[#82C8E5] text-[#1A1A1A]",
    OnLeave: "bg-[#E6D8C4] text-[#1A1A1A]",
    Waiting: "bg-[#E6D8C4] text-[#1A1A1A]",
    Notified: "bg-[#FFEB3B] text-[#1A1A1A]",
    Booked: "bg-[#2D6A4F] text-white",
    Expired: "bg-[#F88379] text-white",
  };

  return (
    <Badge
      className={`${styles[status] || "bg-[#E6D8C4] text-[#1A1A1A]"} font-medium`}
    >
      {status}
    </Badge>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <div className="rounded-xl border border-[#E6D8C4] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[#7A7A7A]">{label}</p>
          <p className="mt-1 font-display text-2xl font-bold text-[#1A1A1A]">
            {value}
          </p>
        </div>
        <div className={`rounded-lg p-3 ${color}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
}

// ─── Tab: Bookings ───────────────────────────────────────────────────

function BookingsTab() {
  const [filter, setFilter] = useState<"all" | BookingStatus>("all");
  const [search, setSearch] = useState("");

  const filtered = MOCK_BOOKINGS.filter((b) => {
    const matchesFilter = filter === "all" || b.status === filter;
    const matchesSearch =
      search === "" ||
      b.customerName.toLowerCase().includes(search.toLowerCase()) ||
      b.trekName.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = {
    total: MOCK_BOOKINGS.length,
    confirmed: MOCK_BOOKINGS.filter((b) => b.status === "confirmed").length,
    revenue: MOCK_BOOKINGS.filter((b) => b.paymentStatus === "paid").reduce(
      (sum, b) => sum + b.totalAmount,
      0,
    ),
    pending: MOCK_BOOKINGS.filter((b) => b.status === "pending").length,
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total Bookings"
          value={stats.total.toString()}
          icon={Calendar}
          color="bg-[#F88379]"
        />
        <StatCard
          label="Confirmed"
          value={stats.confirmed.toString()}
          icon={CheckCircle2}
          color="bg-[#2D6A4F]"
        />
        <StatCard
          label="Revenue (₹)"
          value={stats.revenue.toLocaleString()}
          icon={TrendingUp}
          color="bg-[#D4A843]"
        />
        <StatCard
          label="Pending"
          value={stats.pending.toString()}
          icon={Clock}
          color="bg-[#82C8E5]"
        />
      </div>

      <div className="rounded-xl border border-[#E6D8C4] bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-[#E6D8C4] p-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-display text-lg font-semibold text-[#1A1A1A]">
            All Bookings
          </h3>
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A7A7A]" />
              <input
                type="text"
                placeholder="Search bookings..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-lg border border-[#E6D8C4] bg-white py-2 pl-9 pr-4 text-sm text-[#1A1A1A] placeholder:text-[#7A7A7A] focus:border-[#F88379] focus:outline-none"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as typeof filter)}
              className="rounded-lg border border-[#E6D8C4] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none"
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F5EEE4]">
                <TableHead className="text-[#1A1A1A]">Booking ID</TableHead>
                <TableHead className="text-[#1A1A1A]">Trek</TableHead>
                <TableHead className="text-[#1A1A1A]">Customer</TableHead>
                <TableHead className="text-[#1A1A1A]">Batch Date</TableHead>
                <TableHead className="text-[#1A1A1A]">Group</TableHead>
                <TableHead className="text-[#1A1A1A]">Amount</TableHead>
                <TableHead className="text-[#1A1A1A]">Status</TableHead>
                <TableHead className="text-[#1A1A1A]">Payment</TableHead>
                <TableHead className="text-[#1A1A1A]">Guide</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-mono text-sm text-[#1A1A1A]">
                    {booking.id}
                  </TableCell>
                  <TableCell className="text-[#1A1A1A]">
                    {booking.trekName}
                  </TableCell>
                  <TableCell>
                    <div className="text-[#1A1A1A]">{booking.customerName}</div>
                    <div className="text-xs text-[#7A7A7A]">
                      {booking.email}
                    </div>
                  </TableCell>
                  <TableCell className="text-[#1A1A1A]">
                    {booking.batchDate}
                  </TableCell>
                  <TableCell className="text-[#1A1A1A]">
                    {booking.groupSize}
                  </TableCell>
                  <TableCell className="font-medium text-[#D4A843]">
                    ₹{booking.totalAmount.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={booking.status} />
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={booking.paymentStatus} />
                  </TableCell>
                  <TableCell className="text-[#1A1A1A]">
                    {booking.guideName || "—"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

// ─── Tab: Guides ────────────────────────────────────────────────────

function GuidesTab() {
  const [guides, setGuides] = useState<Guide[]>(MOCK_GUIDES);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingGuide, setEditingGuide] = useState<Guide | null>(null);

  const handleAvailabilityToggle = (guideId: string) => {
    setGuides((prev) =>
      prev.map((g) => {
        if (g.id !== guideId) return g;
        const next: Guide["availability"][] = [
          "Available",
          "OnTrek",
          "OnLeave",
        ];
        const idx = next.indexOf(g.availability);
        return { ...g, availability: next[(idx + 1) % 3] };
      }),
    );
    toast.success("Guide availability updated");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold text-[#1A1A1A]">
            Guide Management
          </h3>
          <p className="text-sm text-[#7A7A7A]">
            {guides.length} guides ·{" "}
            {guides.filter((g) => g.availability === "Available").length}{" "}
            available
          </p>
        </div>
        <Button
          onClick={() => setShowAddDialog(true)}
          className="bg-[#F88379] text-white hover:bg-[#D9604F]"
          data-ocid="admin.add_guide_button"
        >
          <Users className="mr-2 h-4 w-4" />
          Add Guide
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {guides.map((guide) => (
          <div
            key={guide.id}
            className="rounded-xl border border-[#E6D8C4] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5EEE4] font-display text-lg font-bold text-[#F88379]">
                  {guide.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-[#1A1A1A]">
                    {guide.name}
                  </h4>
                  <p className="text-sm text-[#7A7A7A]">{guide.designation}</p>
                </div>
              </div>
              <StatusBadge status={guide.availability} />
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                <Phone className="h-4 w-4 text-[#82C8E5]" />
                {guide.phone}
              </div>
              <div className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                <Star className="h-4 w-4 text-[#D4A843]" />
                {guide.rating}/5 · {guide.treksLed} treks led
              </div>
              {guide.currentAssignment && (
                <div className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                  <MapPin className="h-4 w-4 text-[#F88379]" />
                  {guide.currentAssignment}
                </div>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-1">
              {guide.certifications.map((cert) => (
                <Badge
                  key={cert}
                  variant="outline"
                  className="border-[#82C8E5] text-[#1A1A1A]"
                >
                  <Award className="mr-1 h-3 w-3 text-[#82C8E5]" />
                  {cert}
                </Badge>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-[#E6D8C4] text-[#1A1A1A] hover:bg-[#F5EEE4]"
                onClick={() => setEditingGuide(guide)}
                data-ocid="admin.edit_guide_button"
              >
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-[#E6D8C4] text-[#1A1A1A] hover:bg-[#F5EEE4]"
                onClick={() => handleAvailabilityToggle(guide.id)}
                data-ocid="admin.toggle_availability_button"
              >
                Toggle Status
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Guide Dialog */}
      <Dialog
        open={showAddDialog || !!editingGuide}
        onOpenChange={(open) => {
          if (!open) {
            setShowAddDialog(false);
            setEditingGuide(null);
          }
        }}
      >
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="font-display text-[#1A1A1A]">
              {editingGuide ? "Edit Guide" : "Add New Guide"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label
                htmlFor="guide-name"
                className="text-sm font-medium text-[#1A1A1A]"
              >
                Name
              </label>
              <input
                id="guide-name"
                type="text"
                defaultValue={editingGuide?.name}
                className="mt-1 w-full rounded-lg border border-[#E6D8C4] px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none"
                placeholder="Guide name"
              />
            </div>
            <div>
              <label
                htmlFor="guide-designation"
                className="text-sm font-medium text-[#1A1A1A]"
              >
                Designation
              </label>
              <input
                id="guide-designation"
                type="text"
                defaultValue={editingGuide?.designation}
                className="mt-1 w-full rounded-lg border border-[#E6D8C4] px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none"
                placeholder="e.g. Senior Trek Leader"
              />
            </div>
            <div>
              <label
                htmlFor="guide-phone"
                className="text-sm font-medium text-[#1A1A1A]"
              >
                Phone
              </label>
              <input
                id="guide-phone"
                type="tel"
                defaultValue={editingGuide?.phone}
                className="mt-1 w-full rounded-lg border border-[#E6D8C4] px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none"
                placeholder="+91-XXXXX-XXXXX"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowAddDialog(false);
                setEditingGuide(null);
              }}
              className="border-[#E6D8C4] text-[#1A1A1A]"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                toast.success(editingGuide ? "Guide updated" : "Guide added");
                setShowAddDialog(false);
                setEditingGuide(null);
              }}
              className="bg-[#F88379] text-white hover:bg-[#D9604F]"
            >
              {editingGuide ? "Save Changes" : "Add Guide"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── Tab: Batches ────────────────────────────────────────────────────

function BatchesTab() {
  const [batches, setBatches] = useState<Batch[]>(MOCK_BATCHES);
  const [assigningBatch, setAssigningBatch] = useState<Batch | null>(null);
  const [selectedGuide, setSelectedGuide] = useState("");

  const guides = MOCK_GUIDES;

  const handleAssignGuide = () => {
    if (!assigningBatch || !selectedGuide) return;
    const guide = guides.find((g) => g.id === selectedGuide);
    setBatches((prev) =>
      prev.map((b) =>
        b.id === assigningBatch.id
          ? { ...b, guideId: selectedGuide, guideName: guide?.name }
          : b,
      ),
    );
    toast.success(`Assigned ${guide?.name} to ${assigningBatch.trekName}`);
    setAssigningBatch(null);
    setSelectedGuide("");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total Batches"
          value={batches.length.toString()}
          icon={Calendar}
          color="bg-[#F88379]"
        />
        <StatCard
          label="Open"
          value={batches.filter((b) => b.status === "open").length.toString()}
          icon={CheckCircle2}
          color="bg-[#2D6A4F]"
        />
        <StatCard
          label="Full"
          value={batches.filter((b) => b.status === "full").length.toString()}
          icon={AlertCircle}
          color="bg-[#D4A843]"
        />
        <StatCard
          label="With Guide"
          value={batches.filter((b) => b.guideName).length.toString()}
          icon={Users}
          color="bg-[#82C8E5]"
        />
      </div>

      <div className="rounded-xl border border-[#E6D8C4] bg-white shadow-sm">
        <div className="border-b border-[#E6D8C4] p-4">
          <h3 className="font-display text-lg font-semibold text-[#1A1A1A]">
            Batch Management
          </h3>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F5EEE4]">
                <TableHead className="text-[#1A1A1A]">Batch ID</TableHead>
                <TableHead className="text-[#1A1A1A]">Trek</TableHead>
                <TableHead className="text-[#1A1A1A]">Dates</TableHead>
                <TableHead className="text-[#1A1A1A]">Seats</TableHead>
                <TableHead className="text-[#1A1A1A]">Price</TableHead>
                <TableHead className="text-[#1A1A1A]">Status</TableHead>
                <TableHead className="text-[#1A1A1A]">Guide</TableHead>
                <TableHead className="text-[#1A1A1A]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {batches.map((batch) => (
                <TableRow key={batch.id}>
                  <TableCell className="font-mono text-sm text-[#1A1A1A]">
                    {batch.id}
                  </TableCell>
                  <TableCell className="text-[#1A1A1A]">
                    {batch.trekName}
                  </TableCell>
                  <TableCell className="text-[#1A1A1A]">
                    <div className="text-sm">{batch.startDate}</div>
                    <div className="text-xs text-[#7A7A7A]">
                      to {batch.endDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 rounded-full bg-[#E6D8C4]">
                        <div
                          className="h-2 rounded-full bg-[#F88379]"
                          style={{
                            width: `${(batch.seatsBooked / batch.seatsTotal) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="text-sm text-[#1A1A1A]">
                        {batch.seatsBooked}/{batch.seatsTotal}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-[#D4A843]">
                    ₹{batch.price.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={batch.status} />
                  </TableCell>
                  <TableCell>
                    {batch.guideName ? (
                      <span className="text-sm text-[#1A1A1A]">
                        {batch.guideName}
                      </span>
                    ) : (
                      <span className="text-sm text-[#7A7A7A]">Unassigned</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#F88379] text-[#F88379] hover:bg-[#F88379] hover:text-white"
                      onClick={() => setAssigningBatch(batch)}
                      data-ocid="admin.assign_guide_button"
                    >
                      {batch.guideName ? "Reassign" : "Assign Guide"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Assign Guide Dialog */}
      <Dialog
        open={!!assigningBatch}
        onOpenChange={(open) => !open && setAssigningBatch(null)}
      >
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="font-display text-[#1A1A1A]">
              Assign Guide to {assigningBatch?.trekName}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="mb-3 text-sm text-[#4A4A4A]">
              Batch: {assigningBatch?.startDate} to {assigningBatch?.endDate}
            </p>
            <label
              htmlFor="guide-select"
              className="text-sm font-medium text-[#1A1A1A]"
            >
              Select Guide
            </label>
            <select
              id="guide-select"
              value={selectedGuide}
              onChange={(e) => setSelectedGuide(e.target.value)}
              className="mt-1 w-full rounded-lg border border-[#E6D8C4] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none"
            >
              <option value="">Choose a guide...</option>
              {guides
                .filter((g) => g.availability === "Available")
                .map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name} — {g.designation} ({g.rating}★)
                  </option>
                ))}
            </select>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setAssigningBatch(null)}
              className="border-[#E6D8C4] text-[#1A1A1A]"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAssignGuide}
              disabled={!selectedGuide}
              className="bg-[#F88379] text-white hover:bg-[#D9604F]"
            >
              Assign Guide
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── Tab: Waitlists ──────────────────────────────────────────────────

function WaitlistsTab() {
  const [waitlist, setWaitlist] = useState<WaitlistEntry[]>(MOCK_WAITLIST);
  const [filterBatch, setFilterBatch] = useState("all");

  const batches = Array.from(new Set(waitlist.map((w) => w.batchId))).map(
    (id) => {
      const entry = waitlist.find((w) => w.batchId === id);
      return { id, name: `${entry?.trekName} (${entry?.batchDate})` };
    },
  );

  const filtered =
    filterBatch === "all"
      ? waitlist
      : waitlist.filter((w) => w.batchId === filterBatch);

  const handlePromote = (entryId: string) => {
    setWaitlist((prev) =>
      prev.map((w) =>
        w.id === entryId
          ? {
              ...w,
              status: "Notified" as const,
              notifiedAt: new Date().toISOString().split("T")[0],
            }
          : w,
      ),
    );
    toast.success("Waitlist entry promoted and notified");
  };

  const handleNotifyNext = (batchId: string) => {
    const next = waitlist.find(
      (w) => w.batchId === batchId && w.status === "Waiting",
    );
    if (next) {
      handlePromote(next.id);
    } else {
      toast.info("No one waiting for this batch");
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          label="Total Waitlisted"
          value={waitlist.length.toString()}
          icon={ListOrdered}
          color="bg-[#F88379]"
        />
        <StatCard
          label="Waiting"
          value={waitlist
            .filter((w) => w.status === "Waiting")
            .length.toString()}
          icon={Clock}
          color="bg-[#82C8E5]"
        />
        <StatCard
          label="Notified"
          value={waitlist
            .filter((w) => w.status === "Notified")
            .length.toString()}
          icon={Mail}
          color="bg-[#D4A843]"
        />
      </div>

      <div className="rounded-xl border border-[#E6D8C4] bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-[#E6D8C4] p-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-display text-lg font-semibold text-[#1A1A1A]">
            Waitlist Entries
          </h3>
          <select
            value={filterBatch}
            onChange={(e) => setFilterBatch(e.target.value)}
            className="rounded-lg border border-[#E6D8C4] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#F88379] focus:outline-none"
          >
            <option value="all">All Batches</option>
            {batches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F5EEE4]">
                <TableHead className="text-[#1A1A1A]">Entry ID</TableHead>
                <TableHead className="text-[#1A1A1A]">Trek / Batch</TableHead>
                <TableHead className="text-[#1A1A1A]">Name</TableHead>
                <TableHead className="text-[#1A1A1A]">Position</TableHead>
                <TableHead className="text-[#1A1A1A]">People</TableHead>
                <TableHead className="text-[#1A1A1A]">Status</TableHead>
                <TableHead className="text-[#1A1A1A]">Created</TableHead>
                <TableHead className="text-[#1A1A1A]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell className="font-mono text-sm text-[#1A1A1A]">
                    {entry.id}
                  </TableCell>
                  <TableCell>
                    <div className="text-[#1A1A1A]">{entry.trekName}</div>
                    <div className="text-xs text-[#7A7A7A]">
                      {entry.batchDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-[#1A1A1A]">{entry.name}</div>
                    <div className="text-xs text-[#7A7A7A]">{entry.email}</div>
                  </TableCell>
                  <TableCell>
                    <span className="font-display text-lg font-bold text-[#F88379]">
                      #{entry.position}
                    </span>
                  </TableCell>
                  <TableCell className="text-[#1A1A1A]">
                    {entry.numPeople}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={entry.status} />
                  </TableCell>
                  <TableCell className="text-sm text-[#7A7A7A]">
                    {entry.createdAt}
                    {entry.notifiedAt && (
                      <div className="text-xs text-[#D4A843]">
                        Notified: {entry.notifiedAt}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {entry.status === "Waiting" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white"
                          onClick={() => handlePromote(entry.id)}
                          data-ocid="admin.promote_waitlist_button"
                        >
                          <ChevronUp className="mr-1 h-3 w-3" />
                          Promote
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#82C8E5] text-[#82C8E5] hover:bg-[#82C8E5] hover:text-white"
                        onClick={() => handleNotifyNext(entry.batchId)}
                        data-ocid="admin.notify_next_button"
                      >
                        <Mail className="mr-1 h-3 w-3" />
                        Notify Next
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

// ─── Main Admin Page ─────────────────────────────────────────────────

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("bookings");
  const { actor } = useActor(createActor);
  const { principalText } = useAuthStatus();
  const [isAdminInitialized, setIsAdminInitialized] = useState<boolean | null>(
    null,
  );
  const [isInitializing, setIsInitializing] = useState(false);

  useEffect(() => {
    async function checkAdmin() {
      if (!actor) return;
      try {
        const adminPrincipal = await actor.getAdminPrincipal();
        setIsAdminInitialized(!!adminPrincipal);
      } catch {
        setIsAdminInitialized(false);
      }
    }
    checkAdmin();
  }, [actor]);

  const handleInitAdmin = async () => {
    if (!actor || !principalText) return;
    setIsInitializing(true);
    try {
      await actor.initAdmin();
      toast.success("Admin initialized successfully");
      setIsAdminInitialized(true);
    } catch (err) {
      toast.error(`Failed to initialize admin: ${String(err)}`);
    } finally {
      setIsInitializing(false);
    }
  };

  const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
    { key: "bookings", label: "Bookings", icon: Calendar },
    { key: "guides", label: "Guides", icon: Users },
    { key: "batches", label: "Batches", icon: Calendar },
    { key: "waitlists", label: "Waitlists", icon: ListOrdered },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-[#E6D8C4] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F88379]">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-[#1A1A1A]">
                Admin Dashboard
              </h1>
              <p className="text-xs text-[#7A7A7A]">Shail Hikers Management</p>
            </div>
          </div>
          {isAdminInitialized === false && (
            <Button
              onClick={handleInitAdmin}
              disabled={isInitializing}
              className="bg-[#F88379] text-white hover:bg-[#D9604F]"
              data-ocid="admin.init_admin_button"
            >
              {isInitializing ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Shield className="mr-2 h-4 w-4" />
              )}
              Initialize Admin
            </Button>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Mobile Tab Bar */}
        <div className="mb-6 flex overflow-x-auto border-b border-[#E6D8C4] lg:hidden">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "border-[#F88379] text-[#F88379]"
                  : "border-transparent text-[#7A7A7A] hover:text-[#1A1A1A]"
              }`}
              data-ocid={`admin.tab.${tab.key}`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden w-[200px] shrink-0 lg:block">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  type="button"
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    activeTab === tab.key
                      ? "bg-[#F5EEE4] text-[#F88379]"
                      : "text-[#4A4A4A] hover:bg-[#F5EEE4] hover:text-[#1A1A1A]"
                  }`}
                  data-ocid={`admin.sidebar.${tab.key}`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                  {tab.key === "waitlists" && (
                    <Badge className="ml-auto bg-[#F88379] text-white">
                      {MOCK_WAITLIST.length}
                    </Badge>
                  )}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="min-w-0 flex-1">
            {activeTab === "bookings" && <BookingsTab />}
            {activeTab === "guides" && <GuidesTab />}
            {activeTab === "batches" && <BatchesTab />}
            {activeTab === "waitlists" && <WaitlistsTab />}
          </main>
        </div>
      </div>
    </div>
  );
}
