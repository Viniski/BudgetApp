import { useThemeStore } from '@/store/theme';

export const useTheme = () => useThemeStore((state) => state.theme);
