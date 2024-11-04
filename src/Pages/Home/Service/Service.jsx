import img from "../../../assets/home/chef-service.jpg";

const Service = () => {
  return (
    <div
      className="w-full 96 flex flex-col justify-center items-center text-center text-white mt-20"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white  text-black w-2/3 h-64 flex flex-col justify-center items-center p-4 rounded-md my-40 bg-opacity-40">
        <h1 className="text-4xl uppercase">Bistro Boss</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, quas. Saepe quasi accusamus animi consectetur tempore
          ratione quia illum quae.
        </p>
      </div>
    </div>
  );
};

export default Service;
