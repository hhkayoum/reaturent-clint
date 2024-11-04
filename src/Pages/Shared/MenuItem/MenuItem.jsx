/* eslint-disable react/prop-types */
const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-8">
      <img src={image} alt="" className="w-[120px] rounded-t-full" />

      <div>
        <h3 className="uppercase text-2xl">{name}---------</h3>
        <p>{recipe}</p>
      </div>
      <div>
        <p className="text-yellow-500 ">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
