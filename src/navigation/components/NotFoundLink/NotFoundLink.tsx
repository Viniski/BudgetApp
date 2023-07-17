import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { useTheme } from "../../../hooks/useTheme";
import { ROOT } from "../../CONSTANTS";

export function NotFoundLink() {
  const isDarkTheme = useTheme();

  return (
    <Link to={ROOT}>
      <p className={clsx("link", isDarkTheme && "link--dark")}>
        Powrót do strony głównej
      </p>
    </Link>
  );
}
