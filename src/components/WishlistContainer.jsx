import { useContext } from "react";
import { ProductsContext } from "../providers/ProductsProvider";
import WishListCard from "./WishListCard";

const WishlistContainer = () => {
  const { addTowishListCartItems } = useContext(ProductsContext);

  return (
    <div className="px-5 md:px-16 lg:px-36 mt-10">
      <div className="flex flex-row items-center mb-5">
        <div className="flex-1">
          <h1 className="text-xl font-bold">Wisthlist</h1>
        </div>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col gap-5 mt-10">
        {/* Card-1 */}
        {addTowishListCartItems?.map((product, idx) => (
          <WishListCard key={idx} product={product}></WishListCard>
        ))}

        {/* End of Card */}
      </div>
    </div>
  );
};

export default WishlistContainer;
