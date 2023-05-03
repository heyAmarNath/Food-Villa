import RestaurantCard from "./RestuarantCard";
import { restaurantList } from "../config";
import { useState } from "react";

const BodyComponent = () => {
  //making a react state variable of restuarant list
  const [restuarants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  function filterData(searchText, restuarants) {
    return restuarants.filter((restaurant) => restaurant.data.name.includes(searchText));
  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" onClick={() => {
          const data = filterData(searchText, restuarants);
          setRestaurants(data);
        }}>
          Search
        </button>
      </div>
      <div className="cards">
        {restuarants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
