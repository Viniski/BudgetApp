import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import Header from "../../component/Header/Header";
import Input from "../../component/Input/Input";
import SelectTypeInput from "../../component/Input/SelectTypeInput";
import SelectCategoryInput from "../../component/Input/SelectCategoryInput";

function AddPage() {
  useWebsiteTitle('Dodaj transakcje | BudgetApp by Viniski')
  return (
    <>
      <Header title="Dodaj transakcje" />
      <section className="inputs-section">
        <Input type="text" placeholder="Tytuł"/>
        <Input type="text" placeholder="Wartość"/>
        <Input type="date" />
        <SelectTypeInput/>
        <SelectCategoryInput/>
        <Input type="text" placeholder="Notatki"/>
        <button className="button-options button-options--dark">Dodaj transakcje</button>
      </section>
    </>
  );
}

export default AddPage;
