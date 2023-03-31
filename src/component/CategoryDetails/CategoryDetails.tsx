type Props = {
  category: string;
  value: string;
};

export function CategoryDetails({ category, value }: Props) {
  return (
    <div className="details-div">
      <p className="details-div__category">{category}</p>
      <p className="details-div__value">{value}</p>
    </div>
  );
}
