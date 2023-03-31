import { BrowserRouter as Router } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import { ErrorBoundary } from "./hoc/ErrorBoundary";
import { RouterConfig } from "./navigation/RouterConfig";
import "./styles/main.scss";

export function App() {
  const isDarkTheme = useTheme();

  return (
    <body className={isDarkTheme && `body-dark`}>
      <ErrorBoundary>
        <Router>
          <RouterConfig />
        </Router>
      </ErrorBoundary>
    </body>
  );
}
