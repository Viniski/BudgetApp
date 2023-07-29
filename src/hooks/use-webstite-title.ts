import { useEffect } from 'react';

export const useWebsiteTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
