const SelectCategoryInput = () => {
  return (
    <select className="inputs-section__input inputs-section__input--dark">
      <option value="" disabled selected hidden>Kategoria</option>
      <option value="fixed">Koszty stałe</option>
      <option value="food">Jedzenie</option>
      <option value="transport">Transport</option>
      <option value="hobby">Rozrywka</option>
      <option value="other">inne</option>
    </select>
  );
};

export default SelectCategoryInput;
