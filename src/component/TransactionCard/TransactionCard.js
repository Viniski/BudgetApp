import { useDispatch } from "react-redux";
import { remove } from "../../redux/transactionsSlice";
import { DeleteButton } from "../../UI/Buttons/DeleteButton";
import { EditButton } from "../../UI/Buttons/EditButton";
import { DetailsTransactionLink } from "../../navigation/components/DetailsTransactionLink/DetailsTransactionLink";
import { EditTransactionLink } from "../../navigation/components/EditTransactionLink/EditTransactionLink";

export function TransactionCard({ data, isDarkTheme }) {
  const dispatch = useDispatch();

  const handleDeleteTransaction = () => {
    dispatch(remove(data.id));
  };

  return (
    <div
      className={`transaction-section__card ${
        isDarkTheme && `transaction-section__card--dark`
      }`}
    >
      <DetailsTransactionLink id={data.id}>
        <div
          className={`card__ammount ${isDarkTheme && `card__ammount--dark`}`}
        >
          <span className={data.type}>
            {data.type === "expense" ? `-${data.amount}` : `+${data.amount}`}
          </span>
        </div>
      </DetailsTransactionLink>
      <DetailsTransactionLink id={data.id}>
        <div className="card__description">
          <p className={`card__title ${isDarkTheme && `card__title--dark`}`}>
            {data.title}
          </p>
          <p className="card__category">{data.category}</p>
        </div>
      </DetailsTransactionLink>
      <div className="card__buttons">
        <DeleteButton
          onClick={handleDeleteTransaction}
          isDarkTheme={isDarkTheme}
        />
        <EditTransactionLink id={data.id}>
          <EditButton isDarkTheme={isDarkTheme} />
        </EditTransactionLink>
      </div>
    </div>
  );
}
