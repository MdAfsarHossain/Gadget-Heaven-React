import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { ProductsContext } from "../providers/ProductsProvider";

const AddCard = ({ product }) => {
  const { product_id, product_title, product_image, price, description } =
    product;

  const { handleRemoveCartItem } = useContext(ProductsContext);

  return (
    <div className="bg-white p-5 rounded-xl flex flex-col gap-5">
      <div className="flex flex-row gap-10">
        <div className="w-48 lg:h-24 rounded">
          <img
            className="rounded-xl w-full h-full"
            src={product_image}
            alt=""
          />
        </div>
        <div className="flex flex-row justify-between items-center border-0 w-full">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">{product_title}</h1>
            <p className="text-gray-600">{description}</p>
            <p className="font-semibold">Price: ${price}</p>
          </div>
          <div className="">
            <button
              onClick={() => handleRemoveCartItem(product_id)}
              className="text-red-500 text-xl border-2 px-2 py-2 rounded-full border-red-500"
            >
              <RxCross2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
