import { useAppSelector } from "../redux/hooks";

export function useTheme() {
  return useAppSelector((state) => state.theme.isDarkTheme);
}
