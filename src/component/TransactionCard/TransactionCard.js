import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../redux/transactionsSlice";
import useLocalStorage from "../../hooks/useLocalStorage";

function TransactionCard({ data }) {
  const theme = useSelector((state) => state.theme.theme);
  const state = useSelector((state) => state.transactions);
  const themeDark = theme === "dark";
  const dispatch = useDispatch();
  const [localSotrage, setLocalStorage] = useLocalStorage("transactions");

  const handleDeleteTransaction = () => {
    dispatch(remove(data.id));
    const newState = state.filter((tranasaction) => tranasaction.id !== data.id);
    setLocalStorage(newState);
  };

  return (
    <>
      <div
        className={`transaction-section__card ${
          themeDark && `transaction-section__card--dark`
        }`}
      >
        <Link to={`/transakcje/${data.id}`}>
          <div
            className={`card__ammount ${themeDark && `card__ammount--dark`}`}
          >
            <span className={data.type}>{data.type === "expense" ? `-${data.amount} $` : `+${data.amount} $`}</span>
          </div>
        </Link>
        <Link to={`/transakcje/${data.id}`}>
          <div className="card__description">
            <p className={`card__title ${themeDark && `card__title--dark`}`}>
              {data.title}
            </p>
            <p className="card__category">{data.category}</p>
          </div>
        </Link>
        <div className="card__buttons">
          <button
            onClick={handleDeleteTransaction}
            className={`card__button-trash ${
              themeDark && `card__button-trash--dark`
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
          <Link to={`/edytuj-transakcje/${data.id}`}>
            <button
              className={`card__button-edit ${
                themeDark && `card__button-edit--dark`
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TransactionCard;
