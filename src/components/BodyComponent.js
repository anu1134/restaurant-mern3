import RestaurantCard from "./RestaurantCard";
import SearchComponent from "./Search";
import { useState } from "react";

const restaurantDetails = [
  {
    id: "1",
    name: "Bhatura Co",
    avgRating: "4.3",
    cuisines: ["Fast Food, Beverages"],
  },
  {
    id: "2",
    name: "Big Bowl",
    avgRating: "4.3",
    cuisines: ["Fast Food, Beverages"],
  },
  {
    id: "3",
    name: "Third Wave Coffee",
    avgRating: "4.3",
    cuisines: ["Fast Food, Beverages"],
  },
  {
    id: "4",
    name: "Oye Yummy Paratha",
    avgRating: "4.3",
    cuisines: ["Fast Food, Beverages"],
  },
  {
    id: "5",
    name: "Steamed & Fried",
    avgRating: "4.3",
    cuisines: ["Fast Food, Beverages"],
  },
];

const BodyComponent = () => {
  const [allRestaurants, setAllRestaurants] = useState(restaurantDetails);

  function updateRestaurants(filteredRestaurants) {
    setAllRestaurants(filteredRestaurants);

    console.log("restaurants....", allRestaurants);
  }
  return (
    <>
      <SearchComponent
        restaurants={restaurantDetails}
        updateRestaurants={updateRestaurants}
      />
      <div className="res-container">
        {allRestaurants.map((res) => {
          return <RestaurantCard key={res.id} res_details={res} />;
        })}
      </div>
    </>
  );
};

export default BodyComponent;
