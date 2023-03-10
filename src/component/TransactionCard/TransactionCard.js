import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/transactionsSlice";
import { DeleteButton } from "../Buttons/DeleteButton";
import { EditButton } from "../Buttons/EditButton";

export function TransactionCard({ data, themeDark }) {
  const dispatch = useDispatch();

  const handleDeleteTransaction = () => {
    dispatch(remove(data.id));
  };

  return (
    <div
      className={`transaction-section__card ${
        themeDark && `transaction-section__card--dark`
      }`}
    >
      <Link to={`/transakcje/${data.id}`}>
        <div className={`card__ammount ${themeDark && `card__ammount--dark`}`}>
          <span className={data.type}>
            {data.type === "expense" ? `-${data.amount}` : `+${data.amount}`}
          </span>
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
        <DeleteButton
          onClick={handleDeleteTransaction}
          className={`card__button-trash ${
            themeDark && `card__button-trash--dark`
          }`}
        />
        <Link to={`/edytuj-transakcje/${data.id}`}>
          <EditButton
            className={`card__button-edit ${
              themeDark && `card__button-edit--dark`
            }`}
          />
        </Link>
      </div>
    </div>
  );
}
