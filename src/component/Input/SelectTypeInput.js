const SelectTypeInput = () => {
    return (
      <select className="input">
      <option value="" disabled selected hidden>Typ</option>
      <option value="income">Dochód</option>
      <option value="expense">Wydatek</option>
    </select>
    );
  };

export default SelectTypeInput;