import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { useTheme } from '@/hooks/use-theme';
import { ROOT } from '@/navigation/constants-dupa';

export const NotFoundLink = () => {
  const isDarkTheme = useTheme();

  return (
    <Link to={ROOT}>
      <p className={clsx('link', isDarkTheme && 'link--dark')}>Powrót do strony głównej</p>
    </Link>
  );
};
