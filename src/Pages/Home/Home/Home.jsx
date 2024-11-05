import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Service from "../Service/Service";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <Service></Service>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Recommends></Recommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
