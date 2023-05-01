import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({
  name,
  cuisines,
  totalRatingsString,
  cloudinaryImageId,
}) => {
  return (
    <div className="restaurant-card">
      {/* {console.log(props)} */}
      <img
        className="thumbnail"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurant-thumbnail"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{totalRatingsString}</h4>
    </div>
  );
};

export default RestaurantCard;
