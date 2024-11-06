import { useContext } from "react";
import { ProductsContext } from "../providers/ProductsProvider";
import Card from "./Card";

const Cards = () => {
  const { displayProducts } = useContext(ProductsContext);

  return (
    <div>
      {displayProducts.length === 0 && (
        <div className="flex flex-col justify-center items-center py-16 text-center">
          <div className="flex flex-col justify-center items-center gap-5">
            <img className="w-36 md:w-56" src="/search_icon.png" alt="" />
            {/* <img className="w-36" src="/sad_emoji.png" alt="" /> */}
            <h2 className="font-bold text-xl md:text-3xl text-red-500 uppercase">
              No products found in this category.
            </h2>
          </div>
        </div>
      )}

      {displayProducts && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayProducts?.map((product) => (
            <Card key={product.product_id} product={product}></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
