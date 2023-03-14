import { useSelector } from "react-redux";

export function FilterInputLabel({ title, value }) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <>
      {value ? (
        <label
          className={`inputs-filter__labelDate ${
            isDarkTheme && `inputs-filter__labelDate--dark`
          }`}
        >
          {title}
        </label>
      ) : (
        <div className="inputs-filter__labelNone"></div>
      )}
    </>
  );
}
