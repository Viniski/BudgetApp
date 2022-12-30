function DetailsDiv(props) {
  return (
    <div className="details-div">
      <p className="details-div__category">{props.category}</p>
      <p className="details-div__value">{props.value}</p>
    </div>
  );
}

export default DetailsDiv;
