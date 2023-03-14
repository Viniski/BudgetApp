import { useSelector } from "react-redux";

export function SectionInputLabel({ title, value }) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <>
      {value ? (
        <label
          className={`inputs-section__labelDate ${
            isDarkTheme && `inputs-section__labelDate--dark`
          }`}
        >
          {title}
        </label>
      ) : (
        <div className="inputs-section__labelNone"></div>
      )}
    </>
  );
}
