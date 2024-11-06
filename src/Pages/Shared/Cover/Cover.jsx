/* eslint-disable react/prop-types */
import { Parallax } from "react-parallax";
const Cover = ({ img, heading }) => {
  return (
    <>
      <Parallax
        blur={{ min: -45, max: 45 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
      >
        <div
          className="w-full h-[700px] flex flex-col justify-center items-center text-center text-white "
          //  style={{
          //    backgroundImage: `url(${img})`,
          //    backgroundSize: "cover",
          //    backgroundPosition: "center",
          //    backgroundRepeat: "no-repeat",
          //  }}
        >
          <div className="bg-black text-white w-2/3 h-64 flex flex-col justify-center items-center p-4 rounded-md my-40 bg-opacity-40">
            <h1 className="text-4xl uppercase">{heading}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, quas. Saepe quasi accusamus animi consectetur
              tempore ratione quia illum quae.
            </p>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Cover;
