import RestaurantCard from "./RestaurantCard";
import SearchComponent from "./Search";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const restaurantDetails = [
  {
    id: "1",
    name: "Bhatura Co",
    avgRating: "3.3",
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
    avgRating: "4.0",
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
    console.log("list of filetred", filteredRestaurants);
    setFilteredRestaurants(filteredRestaurants);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  function getRestaurants() {
    console.log("fetching restaurants");

    //setAllRestaurants(restaurantDetails);
    //setFilteredRestaurants(restaurantDetails);

    setTimeout(() => {
      fetch("http://localhost:8000")
        .then((res) => res.json())
        .then((response) => {
          setAllRestaurants(response.resturant);
          setFilteredRestaurants(response.resturant);
        });
    }, 5000);
  }

  function filterTopRatedRestaurants() {
    const topRatedRest = filteredRestaurants.filter(
      (restaurant) => restaurant.avgRating > 4.0
    );

    setFilteredRestaurants(topRatedRest);
  }

  return (
    <>
      <div className="filter-bar">
        <SearchComponent
          restaurants={allRestaurants}
          updateRestaurants={updateRestaurants}
        />
        <button
          className="top-rated-restaurants"
          onClick={filterTopRatedRestaurants}
        >
          Top Rated Restaurants
        </button>
      </div>

      {filteredRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredRestaurants.map((res) => {
            return (
              <Link to={`restaurant/${res.id}`} key={res.id}>
                <RestaurantCard key={res.id} res_details={res} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default BodyComponent;
