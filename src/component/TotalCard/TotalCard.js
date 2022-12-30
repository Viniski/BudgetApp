import { useSelector } from "react-redux";

function TotalCard() {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";
    return (
      <div className={`cards__total ${themeDark && `cards__total--dark`}`}>
        <h2 className="cards__h2">Bilans transakcji</h2>
        <p className="cards__p">+1000 PLN</p>
      </div>
    );
  }
  
  export default TotalCard;