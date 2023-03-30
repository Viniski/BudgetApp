import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { ErrorBoundary } from "./hoc/ErrorBoundary";
import { RouterConfig } from "./navigation/RouterConfig";
import "./styles/main.scss";

export function App() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

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
