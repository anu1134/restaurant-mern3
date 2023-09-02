import RestaurantCard from "./RestaurantCard";

const restaurantDetails = [
  {
    name: "Bhatura Co",
    avgRating: "4.3",
    cuisines: ["Fast Food, Beverages"],
  },
  {
    name: "Big Bowl",
    avgRating: "4.3",
    cuisines: ["Fast Food, Beverages"],
  },
  {
    name: "Third Wave Coffee",
    avgRating: "4.3",
    cuisines: ["Fast Food, Beverages"],
  },
  {
    name: "Oye Yummy Paratha",
    avgRating: "4.3",
    cuisines: ["Fast Food, Beverages"],
  },
  {
    name: "Steamed & Fried",
    avgRating: "4.3",
    cuisines: ["Fast Food, Beverages"],
  },
];

const BodyComponent = () => {
  return (
    <>
      <div className="search">
        <input type="text"></input>
        <button>Search</button>
      </div>
      <div className="res-container">
        {restaurantDetails.map((res) => {
          return <RestaurantCard res_details={res} />;
        })}
      </div>
    </>
  );
};

export default BodyComponent;
