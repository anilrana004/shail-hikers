import { createActor } from "@/backend";
import type {
  AddOn,
  BatchPublic,
  BookingPublic,
  TravelerInfo,
} from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ─── Queries ────────────────────────────────────────────────────────────────

export function useBookings() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<BookingPublic[]>({
    queryKey: ["bookings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBookingsByUser();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useBooking(id: bigint | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<BookingPublic | null>({
    queryKey: ["booking", id?.toString()],
    queryFn: async () => {
      if (!actor || id === null) return null;
      return actor.getBookingById(id);
    },
    enabled: !!actor && !isFetching && id !== null,
  });
}

export function useBatchesByTrek(trekSlug: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<BatchPublic[]>({
    queryKey: ["batches", trekSlug],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBatchesByTrek(trekSlug);
    },
    enabled: !!actor && !isFetching && trekSlug.length > 0,
  });
}

export function useBatchAvailability(batchId: bigint | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<{
    batchId: bigint;
    seatsAvailable: bigint;
    isSoldOut: boolean;
  } | null>({
    queryKey: ["batch-availability", batchId?.toString()],
    queryFn: async () => {
      if (!actor || batchId === null) return null;
      return actor.getBatchAvailability(batchId);
    },
    enabled: !!actor && !isFetching && batchId !== null,
  });
}

// ─── Mutations ───────────────────────────────────────────────────────────────

export function useCreateBooking() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (params: {
      trekSlug: string;
      batchId: bigint;
      travelers: TravelerInfo[];
      addOns: AddOn[];
      totalAmount: bigint;
    }) => {
      if (!actor)
        throw new Error(
          "Backend not connected. Please check your connection and try again.",
        );
      return actor.createBooking(
        BigInt(params.batchId),
        BigInt(params.travelers.length),
        params.addOns,
        params.travelers,
        false,
      );
    },
  });
}

export function useConfirmPayment() {
  const queryClient = useQueryClient();
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (params: { bookingId: bigint; paymentId: string }) => {
      if (!actor)
        throw new Error(
          "Backend not connected. Please check your connection and try again.",
        );
      const result = await actor.confirmBookingPayment(
        params.bookingId,
        params.paymentId,
      );
      if (result.__kind__ === "err") {
        throw new Error(result.err);
      }
      return result.ok;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}

export function useCancelBooking() {
  const queryClient = useQueryClient();
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (bookingId: bigint) => {
      if (!actor)
        throw new Error(
          "Backend not connected. Please check your connection and try again.",
        );
      return actor.cancelBooking(bookingId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}

export function useCalculatePrice() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (params: {
      trekSlug: string;
      groupSize: bigint;
      addOns: AddOn[];
    }) => {
      if (!actor)
        throw new Error(
          "Backend not connected. Please check your connection and try again.",
        );
      return actor.calculateGroupPrice(
        params.trekSlug,
        params.groupSize,
        params.addOns,
        BigInt(0),
      );
    },
  });
}
