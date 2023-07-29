import { BrowserRouter as Router } from 'react-router-dom';
import { clsx } from 'clsx';
import { ErrorBoundary } from './hoc/error-boundary';
import { useTheme } from './hooks/use-theme';
import { RouterConfig } from './navigation/router-config';
import './styles/main.scss';

export const App = () => {
  const isDarkTheme = useTheme();

  return (
    <body className={clsx({ 'body-dark': isDarkTheme })}>
      <ErrorBoundary>
        <Router>
          <RouterConfig />
        </Router>
      </ErrorBoundary>
    </body>
  );
};
