/* eslint-disable react/prop-types */
import FoodCard from "../../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map((item) => (
        <FoodCard key={item._id} data={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
