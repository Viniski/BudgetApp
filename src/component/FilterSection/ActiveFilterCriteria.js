import { useState } from "react";
import { formatDate } from "../helpers/formatDate";

function ActiveFilterCriteria({ params, onFilter }) {
    console.log(params);
    console.log(onFilter);

  const handleFilterCriteriaButtons = (para) => {
    //tu będę miał znów miał kryteria i przekazywał je go głównego komponentu
  };

  const handleDeleteFilterCriteriaButton = (para) => {
    //tu będę miał znów miał kryteria i przekazywał je go głównego komponentu
  };

  return (
    <section>
      <button
        onClick={() => console.log("hello")}
        className="button-options"
      >{`Filtruj`}</button>
    </section>
  );
}

export default ActiveFilterCriteria;