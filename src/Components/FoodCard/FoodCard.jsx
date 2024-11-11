/* eslint-disable react/prop-types */
const FoodCard = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-3 justify-center items-center ">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={data.image} alt="Shoes" className="w-full h-96" />
          </figure>
          <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 p-3 rounded-xl ">
            $ {data.price}
          </p>
          <div className="card-body">
            <h2 className="card-title">{data.name}</h2>
            <p>{data.recipe}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline text-orange-400 border-0 border-b-2 bg-zinc-200">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
