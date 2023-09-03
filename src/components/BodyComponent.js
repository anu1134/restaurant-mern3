import RestaurantCard from "./RestaurantCard";
import SearchComponent from "./Search";
import { useState, useEffect } from "react";

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
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  function updateRestaurants(filteredRestaurants) {
    setFilteredRestaurants(filteredRestaurants);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  function getRestaurants() {
    console.log("fetching restaurants");

    setAllRestaurants(restaurantDetails);
    setFilteredRestaurants(restaurantDetails);

    /*  fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((response) => {
        setAllRestaurants(response.resturant);
        setFilteredRestaurants(response.resturant);
      }); */
  }

  return (
    <>
      <SearchComponent
        restaurants={allRestaurants}
        updateRestaurants={updateRestaurants}
      />
      <div className="res-container">
        {filteredRestaurants.map((res) => {
          return <RestaurantCard key={res.id} res_details={res} />;
        })}
      </div>
    </>
  );
};

export default BodyComponent;
