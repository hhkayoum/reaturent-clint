/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ item, img, title }) => {
  return (
    <>
      {title && <Cover img={img} heading={title}></Cover>}
      <div className="grid grid-cols-2 gap-10">
        {item.map((data) => (
          <MenuItem item={data} key={data._id}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline mt-4 border-0 border-b-4 text-black">
          OrderNow
        </button>
      </Link>
    </>
  );
};

export default MenuCategory;
