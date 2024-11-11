import { Helmet } from "react-helmet-async";
import img from "../../../assets/menu/banner3.jpg";
import desserts1 from "../../../assets/menu/dessert-bg.jpeg";
import pizza1 from "../../../assets/menu/pizza-bg.jpg";
import salads1 from "../../../assets/menu/salad-bg.jpg";
import soups1 from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../Components/SectionTitle";
import UseMenu from "../../../hooks/UseMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = UseMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>

      <Cover img={img} heading="Our Menu"></Cover>
      <SectionTitle
        heading="todays offer"
        subHeading="Don't Miss"
      ></SectionTitle>
      <div className="flex flex-col gap-40">
        <MenuCategory item={offered}></MenuCategory>

        <MenuCategory
          item={desserts}
          img={desserts1}
          title={"dessert"}
        ></MenuCategory>

        <MenuCategory item={pizza} img={pizza1} title={"pizza"}></MenuCategory>

        <MenuCategory
          item={salads}
          img={salads1}
          title={"salad"}
        ></MenuCategory>

        <MenuCategory item={soups} img={soups1} title={"soup"}></MenuCategory>
      </div>
    </>
  );
};

export default Menu;
