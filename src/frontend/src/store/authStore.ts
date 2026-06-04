import { useInternetIdentity } from "@caffeineai/core-infrastructure";

export function useAuthStatus() {
  const { isAuthenticated, identity, loginStatus, login, clear } =
    useInternetIdentity();
  const isLoading =
    loginStatus === "initializing" || loginStatus === "logging-in";
  const principal =
    isAuthenticated && identity ? identity.getPrincipal() : null;
  const principalText = principal ? principal.toText() : null;
  return {
    isAuthenticated,
    isLoading,
    login,
    logout: clear,
    principal,
    principalText,
  };
}

export default useAuthStatus;
