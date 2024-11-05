import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthStore {
  isLoggedIn: boolean;
  userData: unknown | undefined;
  accessToken: string | undefined;
  refreshToken: string | undefined;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      userData: undefined,
      accessToken: undefined,
      refreshToken: undefined,
      setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
      setAccessToken: (accessToken: string) => set(() => ({ accessToken })),
      setRefreshToken: (refreshToken: string) => set(() => ({ refreshToken })),
      setTokens: (accessToken: string, refreshToken: string) =>
        set(() => ({ accessToken, refreshToken })),
      clearTokens: () => {
        set({
          isLoggedIn: false,
          accessToken: undefined,
          refreshToken: undefined,
        });
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
