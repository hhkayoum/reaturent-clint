import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white mt-20  ">
      <SectionTitle
        heading="From our menu"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="flex justify-center items-center gap-6 mb-16 pb-20">
        <div className="w-96 h-72">
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p> March 20, 2023</p>
          <h3>Where Can I Get Some</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            tenetur <br /> labore voluptates soluta nesciunt?
          </p>

          <button className="btn btn-outline mt-4 border-0 border-b-4 text-white ">
            OrderNow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
