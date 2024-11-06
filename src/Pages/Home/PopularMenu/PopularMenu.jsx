import SectionTitle from "../../../Components/SectionTitle";
import UseMenu from "../../../hooks/UseMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menuItem] = UseMenu();
  console.log(menuItem);
  const popularData = menuItem.filter((menu) => menu.category === "popular");
  console.log(popularData);

  return (
    <div className="mb-20">
      <SectionTitle
        heading="From our menu"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-10">
        {popularData.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
