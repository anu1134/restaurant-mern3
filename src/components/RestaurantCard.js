function RestaurantCard(props) {
  const { name, avgRating, cuisines } = props.res_details;
  return (
    <div className="res-card">
      <img
        className="res-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bxw5r28qx1wczsicwhyn"
        alt="restaurant"
      ></img>

      <div className="res-details">
        <h3>{name}</h3>
        <h3> {avgRating}</h3>
        <h4> {cuisines}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;
