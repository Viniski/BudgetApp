import { useSelector } from "react-redux";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import Header from "../../component/Header/Header";
import Input from "../../component/Input/Input";
import SelectCategoryInput from "../../component/Input/SelectCategoryInput";

function FilterPage(props) {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";
  console.log(props.type);
  useWebsiteTitle('Filtruj transakcje | BudgetApp by Viniski')
  return (
    <>
      <Header title="Filtruj transakcje" />
      <section className="inputs-section">
        <Input type="text" placeholder="Wartość" />
        <Input type="date" />
        <SelectCategoryInput />
        <button className="button-options">Filtruj transakcje</button>
      </section>
    </>
  );
}

export default FilterPage;
