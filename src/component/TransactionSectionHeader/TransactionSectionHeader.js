import { useState } from "react";
import { useSelector } from "react-redux";
import FilterSection from "../FilterSection/FilterSection";
import FilterButton from "../Buttons/FilterButton";
import CloseFilterButton from "../Buttons/CloseFilterButton";

function TransactionSectionHeader({ type }) {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";
  const [isClicked, setIsClicked] = useState(false);

  const handleFilterButton = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className="transaction-section__header">
        <h3>{`Twoje ${type}`}</h3>
        <FilterButton
          onClick={handleFilterButton}
          className={
            isClicked
              ? `transaction-section__button-filter--disactive`
              : `transaction-section__button-filter ${themeDark && `transaction-section__button-filter--dark`
              }`
          }
        />
        <CloseFilterButton
          onClick={handleFilterButton}
          className={
            isClicked
              ? `transaction-section__button-filter ${themeDark && `transaction-section__button-filter--dark`
              }`
              : `transaction-section__button-filter--disactive`
          }
        />
      </div>
      {isClicked && <FilterSection type="expense" title="wydatki" />}
    </>
  );
}

export default TransactionSectionHeader;