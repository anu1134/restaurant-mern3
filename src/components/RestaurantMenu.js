import { useParams } from "react-router-dom";
import { restaurant_info } from "../common/restaurant_info";
import { REST_IMG_URL } from "../common/constants";

const RestaurantMenu = () => {
  const params = useParams();

  return (
    <div className="restaurant-details">
      <div>
        <h1>Restaurant Id: {params.id}</h1>
        <img
          src={`${REST_IMG_URL}${restaurant_info[0].cloudinaryImageId}`}
          alt=""
        ></img>
        <h2>{restaurant_info[0].name}</h2>
        <h2>{restaurant_info[0].city}</h2>
      </div>
      <div className="rest-menu-list">
        <h1>Menu:</h1>
        <h3>{restaurant_info[0].menu.items[0].name}</h3>
        <h3>{restaurant_info[0].menu.items[0].name}</h3>
        <h3>{restaurant_info[0].menu.items[0].name}</h3>
        <h3>{restaurant_info[0].menu.items[0].name}</h3>
        <h3>{restaurant_info[0].menu.items[0].name}</h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
