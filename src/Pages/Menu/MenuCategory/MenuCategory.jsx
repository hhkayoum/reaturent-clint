/* eslint-disable react/prop-types */
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ item }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        {item.map((data) => (
          <MenuItem item={data} key={data._id}></MenuItem>
        ))}
      </div>
    </>
  );
};

export default MenuCategory;
