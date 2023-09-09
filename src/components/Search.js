import { useState } from "react";

const SearchComponent = (props) => {
  const [searchText, setSearchText] = useState("");

  function filterRestaurants(searchText) {
    console.log("restaurants", props.restaurants);

    console.log("searchText", searchText);

    let filteredRestaurants = props.restaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );

    console.log("filteredRestaurants", filteredRestaurants);

    props.updateRestaurants(filteredRestaurants);
  }

  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => {
          setSearchText(e.target.value);
          filterRestaurants(searchText);
        }}
      ></input>
      <button onClick={(e) => filterRestaurants(searchText)}>Search</button>
    </div>
  );
};

export default SearchComponent;
