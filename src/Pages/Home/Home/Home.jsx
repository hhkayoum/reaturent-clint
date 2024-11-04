import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Service from "../Service/Service";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <Service></Service>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
    </>
  );
};

export default Home;
