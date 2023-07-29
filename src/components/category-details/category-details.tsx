type Props = {
  category: string;
  value: string | number;
};

export const CategoryDetails = ({ category, value }: Props) => (
  <div className="details-div">
    <p className="details-div__category">{category}</p>
    <p className="details-div__value">{value}</p>
  </div>
);
