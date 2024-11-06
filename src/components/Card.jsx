import { Link } from "react-router-dom";

const Card = ({ product }) => {
  //   console.log(Object.keys(product).join(","));
  const { product_id, product_title, price } = product;

  return (
    <div className="bg-white p-3 md:p-5 rounded-2xl flex flex-col gap-2 shadow-xl hover:scale-105 transition-all">
      <div className="h-44 rounded-2xl">
        <img
          className="w-full h-full rounded-2xl"
          src={product?.product_image}
          alt=""
        />
      </div>
      <div className="">
        <h1 className="text-black font-bold text-xl">{product_title}</h1>
        <p className="text-gray-400 font-bold">Price: {price}$</p>
      </div>
      <div className="mt-2">
        <Link to={`/productDetails/${product_id}`}>
          <button className="btn rounded-3xl text-[#9538E2] border-2 border-[#9538E2] bg-transparent font-bold hover:bg-transparent hover:border-orange-500 hover:text-orange-500">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
