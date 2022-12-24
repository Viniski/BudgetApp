import Header from "../../component/Header/Header";
import Input from "../../component/Input/Input";
import SelectCategoryInput from "../../component/Input/SelectCategoryInput";
import SelectTypeInput from "../../component/Input/SelectTypeInput";

function EditPage() {
    return (
      <>
      <Header title="Edytuj transakcje" />
      <section className="inputsSection">
        <Input type="text" placeholder="Tytuł" value="Pizza z rulolą i sosem vinegre"/>
        <Input type="text" placeholder="Wartość" value="30$"/>
        <Input type="date" />
        <SelectTypeInput/>
        <SelectCategoryInput/>
        <Input type="text" placeholder="Notatki" value="Pyszne byli!"/>
        <button className="transactionOptions">Edytuj transakcje</button>
      </section>
    </>
    );
  }
  
  export default EditPage;