import { createActor } from "@/backend";
import { useAuthStatus } from "@/store/authStore";
import { useActor } from "@caffeineai/core-infrastructure";
import { Navigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface AdminRouteProps {
  children: React.ReactNode;
}

export function AdminRoute({ children }: AdminRouteProps) {
  const { isAuthenticated, principalText } = useAuthStatus();
  const { actor } = useActor(createActor);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkAdmin() {
      if (!actor || !principalText) {
        setIsAdmin(false);
        setIsLoading(false);
        return;
      }

      try {
        const adminPrincipal = await actor.getAdminPrincipal();
        if (adminPrincipal) {
          setIsAdmin(principalText === adminPrincipal.toText());
        } else {
          setIsAdmin(false);
        }
      } catch {
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    }

    checkAdmin();
  }, [actor, principalText]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <Loader2 className="h-8 w-8 animate-spin text-[#F88379]" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" search={{ redirect: "/admin" }} />;
  }

  if (!isAdmin) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-white px-4">
        <h1 className="font-display text-3xl font-bold text-[#1A1A1A]">
          Access Denied
        </h1>
        <p className="mt-2 text-center text-[#4A4A4A]">
          You do not have permission to access the admin area.
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
