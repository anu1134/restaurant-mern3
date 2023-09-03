const SearchComponent = (props) => {
  let searchText = "";

  function filterRestaurants(searchText) {
    console.log("restaurants", props.restaurants);

    console.log("searchText", searchText);

    let filteredRestaurants = props.restaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );

    props.updateRestaurants(filteredRestaurants);

    console.log("filteredRestaurants", filteredRestaurants);
  }

  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => {
          searchText = e.target.value;
          filterRestaurants(searchText);
        }}
      ></input>
      <button onClick={(e) => filterRestaurants(searchText)}>Search</button>
    </div>
  );
};

export default SearchComponent;
