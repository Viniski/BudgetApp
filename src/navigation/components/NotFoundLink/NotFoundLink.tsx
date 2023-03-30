import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROOT } from "../../CONSTANTS";

export function NotFoundLink() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <Link to={ROOT}>
      <p className={`link ${isDarkTheme && `link--dark`}`}>
        Powrót do strony głównej
      </p>
    </Link>
  );
}
