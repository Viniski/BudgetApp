import { BrowserRouter as Router } from "react-router-dom";
import { clsx } from "clsx";
import { useTheme } from "./hooks/useTheme";
import { ErrorBoundary } from "./hoc/ErrorBoundary";
import { RouterConfig } from "./navigation/RouterConfig";
import "./styles/main.scss";

export function App() {
  const isDarkTheme = useTheme();

  return (
    <body className={clsx({ "body-dark": isDarkTheme })}>
      <ErrorBoundary>
        <Router>
          <RouterConfig />
        </Router>
      </ErrorBoundary>
    </body>
  );
}
