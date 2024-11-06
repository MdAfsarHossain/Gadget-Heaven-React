import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import {
  useLoaderData,
  useLocation,
  useNavigation,
  useParams,
} from "react-router-dom";
import { ProductsContext } from "../providers/ProductsProvider";

const ProductDetails = () => {
  const { handleAddToCart, handleAddToWishList, addTowishListCartItems } =
    useContext(ProductsContext);
  const allProducts = useLoaderData();
  const { prodId } = useParams();
  const [btnFlag, setBtnFlag] = useState(false);
  const navigation = useNavigation();

  const location = useLocation();

  const product = [...allProducts].find(
    (product) => product.product_id === prodId
  );

  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    const itemFound = addTowishListCartItems?.find(
      (item) => item.product_id == prodId
    );
    if (itemFound) {
      setBtnFlag(true);
    } else {
      setBtnFlag(false);
    }
  }, []);

  const handleWish = async (prodId) => {
    handleAddToWishList(prodId);
    const wishListBtn = document.getElementById("wishListBtn");
    wishListBtn.disabled = true;
  };

  return (
    <div className="pb-36 lg:pb-[580px]">
      <Helmet>
        <title>Product Details | Gadget Heaven</title>
      </Helmet>

      <div className="bg-[#9538E2] pt-12 space-y-2 pb-20 lg:pb-56 text-center lg:relative">
        <h1 className="text-white text-4xl font-bold">Product Details</h1>
        <p className="text-gray-100 w-4/6 lg:w-3/6 mx-auto text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 w-5/6 mx-auto border-0 p-5 lg:p-10 rounded-3xl bg-white lg:absolute lg:top-80 lg:left-28 mt-16 lg:mt-0">
        {/* Image */}
        <div className="lg:w-96 lg:h-[450px] rounded-2xl">
          <img className="h-full rounded-2xl" src={product_image} alt="" />
        </div>

        {/* Info */}
        <div className="lg:pl-10 flex flex-col gap-2">
          <h1 className="text-black text-3xl font-bold">{product_title}</h1>
          <h1 className="text-xl font-semibold">Price: ${price}</h1>
          <h1
            className={`font-bold  w-fit px-3 rounded-3xl py-1 border-2 ${
              availability === true
                ? "border-[#309C08] bg-[#309C081A] text-[#309C08]"
                : "text-amber-500 border-amber-500 bg-amber-100"
            }`}
          >
            {availability ? "In Stock" : "Out of Stock"}
          </h1>
          <h1 className="text-gray-500 text-lg">{description}</h1>
          <h1 className="text-black text-xl font-bold">Specification:</h1>
          <ul className="px-5 text-gray-500 font-semibold">
            {specification?.map((item, idx) => (
              <li key={idx} className="list-decimal">
                {item}
              </li>
            ))}
          </ul>
          <h1 className="text-xl font-bold">Rating:</h1>
          <div className="flex flex-row justify-start items-center  gap-5">
            <div className="flex flex-row gap-1 text-2xl">
              <ReactStars
                count={5}
                size={36}
                value={rating}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
            <p className="text-lg border-2 rounded-full px-2 py-1 font-bold">
              {rating}
            </p>
          </div>

          <div className="flex justify-start items-center gap-5 mt-5">
            <button
              onClick={() => handleAddToCart(product_id)}
              className="flex justify-center items-center gap-2 font-bold bg-[#9538E2] text-white rounded-3xl px-5 py-2 border-2 border-[#9538E2] hover:bg-transparent hover:border-[#9538E2] hover:text-[#9538E2] transition-all"
            >
              Add To Cart <IoCartOutline />
            </button>

            <button
              id="wishListBtn"
              disabled={btnFlag}
              onClick={() => handleWish(product_id)}
              className="border-2 bg-white  hover:bg-transparent hover:border-[#9538E2] transition-all hover:text-[#9538E2] rounded-full px-3 py-3 disabled:cursor-not-allowed"
            >
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
