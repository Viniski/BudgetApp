import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ThemeState {
  theme: boolean;
  toogleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: false,
      toogleTheme: () => set((state) => ({ theme: !state.theme })),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
