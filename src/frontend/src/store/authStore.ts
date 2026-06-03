import { useInternetIdentity } from "@caffeineai/core-infrastructure";

export function useAuthStatus() {
  const { isAuthenticated, identity } = useInternetIdentity();
  const principalText =
    isAuthenticated && identity ? identity.getPrincipal().toText() : null;
  return { isAuthenticated, principalText };
}

export default useAuthStatus;
