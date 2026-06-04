import { createActor } from "@/backend";
import type { WaitlistResult } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ─── Queries ────────────────────────────────────────────────────────────────

export function useWaitlistPosition(batchId: string, email: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<bigint | null>({
    queryKey: ["waitlist-position", batchId, email],
    queryFn: async () => {
      if (!actor || !batchId || !email) return null;
      return actor.getWaitlistPosition(batchId, email);
    },
    enabled: !!actor && !isFetching && batchId.length > 0 && email.length > 0,
  });
}

// ─── Mutations ───────────────────────────────────────────────────────────────

export function useJoinWaitlist() {
  const queryClient = useQueryClient();
  const { actor } = useActor(createActor);
  return useMutation<
    WaitlistResult,
    Error,
    {
      batchId: string;
      name: string;
      email: string;
      phone: string;
      numPeople?: bigint;
    }
  >({
    mutationFn: async (params) => {
      if (!actor)
        throw new Error(
          "Backend not connected. Please check your connection and try again.",
        );
      return actor.joinWaitlist(
        params.batchId,
        params.name,
        params.email,
        params.phone,
        params.numPeople ?? BigInt(1),
      );
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["waitlist-position", variables.batchId, variables.email],
      });
      queryClient.invalidateQueries({
        queryKey: ["batches"],
      });
    },
  });
}
