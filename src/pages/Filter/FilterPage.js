import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import Header from "../../component/Header/Header";
import Input from "../../component/Input/Input";
import SelectCategoryInput from "../../component/Input/SelectCategoryInput";

function FilterPage() {
  useWebsiteTitle('Filtruj transakcje | BudgetApp by Viniski')
  return (
    <>
      <Header title="Filtruj transakcje" />
      <section className="inputsSection">
        <Input type="text" placeholder="Wartość" />
        <Input type="date" />
        <SelectCategoryInput />
        <button className="transactionOptions">Edytuj transakcje</button>
      </section>
    </>
  );
}

export default FilterPage;
