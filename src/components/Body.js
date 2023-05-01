import RestaurantCard from "./RestuarantCard";
import { restaurantList } from "../config";
const BodyComponent = () => {
  return (
    <div className="cards">
      {restaurantList.map((restaurant) => {
        return (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        );
      })}
    </div>
  );
};

export default BodyComponent;
