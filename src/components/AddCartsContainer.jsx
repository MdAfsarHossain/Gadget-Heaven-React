import { useContext, useEffect, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../providers/ProductsProvider";
import Cart from "./AddCard";

const AddCartsContainer = () => {
  const { addToCartItems, cartTotal, handleCartTotal, handlePurchaseProduct } =
    useContext(ProductsContext);

  const [displayAddCartData, setDisplayAddCartData] = useState(addToCartItems);
  const [sortType, setSortType] = useState("none");
  const navigate = useNavigate();

  // Calculate cart total
  useEffect(() => {
    handleCartTotal();
    setDisplayAddCartData(addToCartItems);
    if (sortType !== "none") {
      const sortData = addToCartItems.sort((a, b) => b.price - a.price);
      setDisplayAddCartData(sortData);
      setSortType("none");
    }
  }, [sortType, addToCartItems]);

  const handleSorting = () => {
    setSortType("price");
  };

  const purchase = async () => {
    const modalId = document.getElementById("my_modal_1");
    modalId.showModal();
  };

  const closeModal = () => {
    handlePurchaseProduct();
    navigate("/");
  };

  return (
    <div className="px-5 md:px-16 lg:px-36 mt-10">
      <div className="flex flex-col md:flex-row md:items-center justify-start mb-5 gap-5 md:gap-28 lg:gap-0">
        <div className="md:flex-grow-0 lg:flex-1">
          <h1 className="text-xl font-bold">Cart</h1>
        </div>
        <div className="flex-1 flex flex-row gap-5 lg:gap-10 justify-between md:justify-normal lg:justify-between items-center">
          <h1 className="font-bold text-sm md:text-xl">
            Total Cost: ${cartTotal}
          </h1>
          <button
            onClick={handleSorting}
            className="border-2 border-[#9538E2] text-[#9538E2] rounded-full px-3 md:px-5 py-2 font-bold hover:bg-[#9538E2] transition-all hover:text-white flex flex-row justify-center items-center gap-1"
          >
            Sort by Price{" "}
            <GiSettingsKnobs className="font-extrabold hidden md:block" />
          </button>
          <button
            disabled={addToCartItems?.length == 0}
            onClick={purchase}
            className="bg-[#9538E2] text-white rounded-full px-3 md:px-5 py-2 font-bold hover:bg-transparent hover:border-[#9538E2] border-2 border-[#9538E2] hover:text-[#9538E2] transition-all disabled:cursor-not-allowed"
          >
            Purchase
          </button>
        </div>
      </div>
      {/* Cards Container */}
      <div className="flex flex-col gap-5 mt-10">
        {/* Card-1 */}
        {displayAddCartData?.map((product, idx) => (
          <Cart key={idx} product={product}></Cart>
        ))}
        {/* End of Card */}
      </div>

      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="px-10 flex flex-col justify-center items-center gap-4">
            <img src="/success.png" alt="" />
            <h3 className="font-bold text-3xl md:text-4xl pb-3 border-b-2">
              Payment Success
            </h3>
            <p className="text-xl">Thanks for purchasing.</p>
            <p className="text-xl text-gray-500">
              <span className="font-bold">Total:</span> ${cartTotal}
            </p>
            <div className="modal-action">
              <div method="dialog w-full">
                {/* if there is a button in form, it will close the modal */}
                <button
                  onClick={closeModal}
                  className="btn w-full lg:px-28 text-xl font-bold rounded-full"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddCartsContainer;
