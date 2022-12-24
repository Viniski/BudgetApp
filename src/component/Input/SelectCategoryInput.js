const SelectCategoryInput = () => {
  return (
    <select className="input">
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
