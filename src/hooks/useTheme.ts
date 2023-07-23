import { useThemeStore } from "../store/store";

export function useTheme() {
  return useThemeStore((state) => state.theme);

  // return useAppSelector((state) => state.theme.isDarkTheme);
}
