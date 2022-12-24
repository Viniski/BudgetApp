import Header from "../../component/Header/Header";
import Input from "../../component/Input/Input";
import SelectTypeInput from "../../component/Input/SelectTypeInput";
import SelectCategoryInput from "../../component/Input/SelectCategoryInput";

function AddPage() {
  return (
    <>
      <Header title="Dodaj transakcje" />
      <section className="inputsSection">
        <Input type="text" placeholder="Tytuł"/>
        <Input type="text" placeholder="Wartość"/>
        <Input type="date" />
        <SelectTypeInput/>
        <SelectCategoryInput/>
        <Input type="text" placeholder="Notatki"/>
        <button className="transactionOptions">Dodaj transakcje</button>
      </section>
    </>
  );
}

export default AddPage;
