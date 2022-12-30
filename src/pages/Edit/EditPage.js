import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import Header from "../../component/Header/Header";
import Input from "../../component/Input/Input";
import SelectCategoryInput from "../../component/Input/SelectCategoryInput";
import SelectTypeInput from "../../component/Input/SelectTypeInput";

function EditPage() {
  useWebsiteTitle('Edytuj transakcje | BudgetApp by Viniski')
    return (
      <>
      <Header title="Edytuj transakcje" />
      <section className="inputs-section">
        <Input type="text" placeholder="Tytuł" value="Pizza z rulolą i sosem vinegre"/>
        <Input type="text" placeholder="Wartość" value="30$"/>
        <Input type="date" />
        <SelectTypeInput/>
        <SelectCategoryInput/>
        <Input type="text" placeholder="Notatki" value="Pyszne byli!"/>
        <button className="button-options button-options--dark">Edytuj transakcje</button>
      </section>
    </>
    );
  }
  
  export default EditPage;