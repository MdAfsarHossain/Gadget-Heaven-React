import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import AddCartsContainer from "../components/AddCartsContainer";
import WishlistContainer from "../components/WishlistContainer";
import { ProductsContext } from "../providers/ProductsProvider";

const Dashboard = () => {
  const { flag, setFlag } = useContext(ProductsContext);

  return (
    <div>
      {/* Dynamic Title */}
      <Helmet>
        <title>Dashboard | Gadget Heaven</title>
      </Helmet>

      {/* Dashboard Heading */}
      <div className="bg-[#9538E2] pt-12 space-y-2 pb-36 text-center">
        <h1 className="text-white text-4xl font-bold">Dashboard</h1>
        <p className="text-gray-100 w-5/6 md:w-4/6 mx-auto text-base">
          Track, Manage, and Customize Your Experience. Access all your data,
          monitor progress, and stay in control with a comprehensive view of
          your activity. From analytics to personalized settings, the dashboard
          puts everything you need at your fingertips for a seamless, tailored
          experience.
        </p>

        <div className="flex flex-row gap-5 justify-center items-center pt-10">
          <button
            onClick={() => setFlag(true)}
            className={`px-10 py-2 rounded-3xl font-bold text-xl border-2 border-white hover:bg-transparent transition-all hover:text-white ${
              flag ? "bg-white text-[#9538E2]" : "text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setFlag(false)}
            className={`px-10 py-2 rounded-3xl font-bold text-xl border-2  hover:bg-white transition-all hover:text-[#9538E2] ${
              !flag ? "bg-white text-[#9538E2] border-white" : "text-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {flag ? (
        <AddCartsContainer></AddCartsContainer>
      ) : (
        <WishlistContainer></WishlistContainer>
      )}
    </div>
  );
};

export default Dashboard;
