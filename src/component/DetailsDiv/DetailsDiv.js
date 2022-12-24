function DetailsDiv(props) {
  return (
    <div className="detailsInfo">
      <p className="detailsInfo__category">{props.category}</p>
      <p className="detailsInfo__value">{props.value}</p>
    </div>
  );
}

export default DetailsDiv;
