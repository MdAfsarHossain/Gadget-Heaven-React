import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ProductsContext } from "../providers/ProductsProvider";

const Navbar = () => {
  const { pathname } = useLocation();

  const { addToCartItems, addTowishListCartItems, handleFlag, setFlag } =
    useContext(ProductsContext);
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink className="" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink onClick={() => setFlag(true)} to="/dashboard">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );

  const handleDashboard = async (value) => {
    const some = await handleFlag(value);
    navigate("/dashboard");
  };

  return (
    <div
      className={`pt-5 lg:pt-5 pr-5 lg:pr-0 md:border-0 border-black lg:px-10 md:rounded-t-2xl navbar ${
        pathname == "/" ||
        pathname == "/category/C001" ||
        pathname == "/category/C002" ||
        pathname == "/category/C003" ||
        pathname == "/category/C004" ||
        pathname == "/category/C005" ||
        pathname == "/category/C006"
          ? "bg-[#9538E2]"
          : "bg-[#F7F7F7]"
      } border-0 border-[#9538E2]`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <Link className="text-3xl font-bold flex flex-row justify-start items-center gap-2">
          <img className="w-10 hidden md:block" src="/gadget.png" alt="" />
          Gadget{" "}
          <span
            className={`${
              pathname == "/" ||
              pathname == "/category/C001" ||
              pathname == "/category/C002" ||
              pathname == "/category/C003" ||
              pathname == "/category/C004" ||
              pathname == "/category/C005" ||
              pathname == "/category/C006"
                ? "text-white"
                : "text-[#9538E2]"
            }`}
          >
            Heaven
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal px-1 flex gap-5 text-base ${
            pathname == "/" ? "text-white" : "text-black"
          }`}
        >
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-4 md:gap-5 text-xl md:justify-end items-center font-bold lg:mr-8">
        <Link onClick={() => handleDashboard("cart")} className="indicator">
          <span className="indicator-item badge badge-secondary">
            {addToCartItems?.length}
          </span>
          <div className="border-2 bg-white border-white hover:bg-transparent hover:border-white transition-all hover:text-white rounded-full px-2 py-2">
            <IoCartOutline />
          </div>
        </Link>

        <Link onClick={() => handleDashboard("wishList")} className="indicator">
          <span className="indicator-item badge badge-secondary">
            {addTowishListCartItems?.length}
          </span>
          <div className="border-2 bg-white border-white hover:bg-transparent hover:border-white transition-all hover:text-white rounded-full px-2 py-2">
            <FaRegHeart />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
