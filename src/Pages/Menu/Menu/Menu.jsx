import { Helmet } from "react-helmet-async";
import img from "../../../assets/menu/banner3.jpg";
import Cover from "../../Shared/Cover/Cover";
const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>

      <Cover img={img} heading="Our Menu"></Cover>
    </>
  );
};

export default Menu;
