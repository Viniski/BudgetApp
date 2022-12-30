const SelectTypeInput = () => {
    return (
      <select className="inputs-section__input inputs-section__input--dark">
      <option value="" disabled selected hidden>Typ</option>
      <option value="income">Dochód</option>
      <option value="expense">Wydatek</option>
    </select>
    );
  };

export default SelectTypeInput;