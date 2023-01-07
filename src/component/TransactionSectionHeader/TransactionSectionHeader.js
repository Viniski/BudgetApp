import { useState } from "react";
import { useSelector } from "react-redux";
import FilterSection from "../FilterSection/FilterSection";

function TransactionSectionHeader({ type }) {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";
  const [isClicked, setIsClicked] = useState(false);

  const handleFilterButton = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="transaction-section__header">
      <h3>{`Twoje ${type}`}</h3>
      <button
        onClick={handleFilterButton}
        className={
          isClicked
            ? `transaction-section__button-filter--disactive`
            : `transaction-section__button-filter ${
                themeDark && `transaction-section__button-filter--dark`
              }`
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
        </svg>
      </button>
      <button
        onClick={handleFilterButton}
        className={
          isClicked
            ? `transaction-section__button-filter ${
                themeDark && `transaction-section__button-filter--dark`
              }`
            : `transaction-section__button-filter--disactive`
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
      {isClicked && <FilterSection type="expense" title="wydatki" />}
    </div>
  );
}

export default TransactionSectionHeader;
