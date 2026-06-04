import { K as useActor, N as useQuery, J as useQueryClient, O as createActor } from "./index-CMVflWSo.js";
import { u as useMutation } from "./useMutation-CHXod-pd.js";
function useBookings() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBookingsByUser();
    },
    enabled: !!actor && !isFetching
  });
}
function useBooking(id) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["booking", id == null ? void 0 : id.toString()],
    queryFn: async () => {
      if (!actor || id === null) return null;
      return actor.getBookingById(id);
    },
    enabled: !!actor && !isFetching && id !== null
  });
}
function useBatchesByTrek(trekSlug) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["batches", trekSlug],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBatchesByTrek(trekSlug);
    },
    enabled: !!actor && !isFetching && trekSlug.length > 0
  });
}
function useCreateBooking() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (params) => {
      if (!actor)
        throw new Error(
          "Backend not connected. Please check your connection and try again."
        );
      return actor.createBooking(
        BigInt(params.batchId),
        BigInt(params.travelers.length),
        params.addOns,
        params.travelers,
        false
      );
    }
  });
}
function useConfirmPayment() {
  const queryClient = useQueryClient();
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (params) => {
      if (!actor)
        throw new Error(
          "Backend not connected. Please check your connection and try again."
        );
      const result = await actor.confirmBookingPayment(
        params.bookingId,
        params.paymentId
      );
      if (result.__kind__ === "err") {
        throw new Error(result.err);
      }
      return result.ok;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    }
  });
}
function useCancelBooking() {
  const queryClient = useQueryClient();
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (bookingId) => {
      if (!actor)
        throw new Error(
          "Backend not connected. Please check your connection and try again."
        );
      return actor.cancelBooking(bookingId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    }
  });
}
export {
  useCreateBooking as a,
  useBookings as b,
  useCancelBooking as c,
  useBooking as d,
  useConfirmPayment as e,
  useBatchesByTrek as u
};
