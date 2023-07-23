import { useThemeStore } from "../store/theme";

export function useTheme() {
  return useThemeStore((state) => state.theme);
}
