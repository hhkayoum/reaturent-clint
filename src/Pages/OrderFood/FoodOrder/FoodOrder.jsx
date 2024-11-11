import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img from "../../../assets/shop/banner2.jpg";
import FoodCard from "../../../Components/FoodCard/FoodCard.jsx";
import UseMenu from "../../../hooks/UseMenu.jsx";
import Cover from "../../Shared/Cover/Cover.jsx";
import "./tab.css";
const FoodOrder = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = UseMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <>
      <Cover img={img} heading="Our Shop"></Cover>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className=" text-center"
      >
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-3 gap-2">
            {salads.map((item) => (
              <FoodCard key={item._id} data={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-2">
            {pizza.map((item) => (
              <FoodCard key={item._id} data={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-2">
            {soups.map((item) => (
              <FoodCard key={item._id} data={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-2">
            {desserts.map((item) => (
              <FoodCard key={item._id} data={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-2">
            {drinks.map((item) => (
              <FoodCard key={item._id} data={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default FoodOrder;
