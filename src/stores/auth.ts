import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserData {
  userId?: string;
  accountId: string;
  email: string;
  firstName: string;
  lastName: string;
  preferName: string | null;
  phoneNumber: string | null;
  avatarUrl: string | null;
  location: string | null;
  role: string;
  isBlocked: boolean;
  createdAt: Date;
}
interface AuthStore {
  isLoggedIn: boolean;
  userData: UserData | null;
  accessToken: string | null;
  refreshToken: string | null;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  setUserData: (userData: UserData | null) => void;
  clearTokens: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      userData: null,
      accessToken: null,
      refreshToken: null,
      setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
      setAccessToken: (accessToken: string) => set(() => ({ accessToken })),
      setRefreshToken: (refreshToken: string) => set(() => ({ refreshToken })),
      setTokens: (accessToken: string, refreshToken: string) =>
        set(() => ({ accessToken, refreshToken, isLoggedIn: true })),
      clearTokens: () => {
        set({
          isLoggedIn: false,
          userData: undefined,
          accessToken: undefined,
          refreshToken: undefined,
        });
      },
      setUserData: (data: UserData | null) => {
        set({
          userData: data,
        });
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
