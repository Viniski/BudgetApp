import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TransactionSectionHeader(props) {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";
    return (
        <div className="transaction-section__header">
          <h3>{`Twoje ${props.type}`}</h3>
          <Link to={`/filtruj-${props.type}`}>
          <button className={`transaction-section__button-filter ${themeDark && `transaction-section__button-filter--dark`}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
          </svg>
          </button>
          </Link>
        </div>
    )
}

export default TransactionSectionHeader;