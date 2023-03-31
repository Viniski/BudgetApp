import { useEffect } from "react";

export function useWebsiteTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
