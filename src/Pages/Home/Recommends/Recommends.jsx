import SectionTitle from "../../../Components/SectionTitle";
import img from "../../../assets/home/slide5.jpg";

const Recommends = () => {
  const recoData = [
    {
      name: "Spicy Ramen",
      shortDescription:
        "A delicious bowl of spicy ramen with fresh ingredients.",
      image: img, // Replace with actual image URL
    },
    {
      name: "Sushi Platter",
      shortDescription: "Assorted sushi with the finest quality fish and rice.",
      image: img, // Replace with actual image URL
    },
    {
      name: "Avocado Toast",
      shortDescription:
        "Crispy toast topped with smashed avocado and seasoning.",
      image: img, // Replace with actual image URL
    },
  ];
  return (
    <div>
      <SectionTitle heading="Recommends" subHeading="Should Try"></SectionTitle>
      <div className="grid grid-cols-3 justify-center items-center ">
        {recoData.map((data, index) => (
          <div className="card bg-base-100 w-96 shadow-xl" key={index}>
            <figure>
              <img src={data.image} alt="Shoes" className="w-full h-96" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.name}</h2>
              <p>{data.shortDescription}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline text-orange-400 border-0 border-b-2 bg-zinc-200">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommends;
