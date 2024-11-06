import { Outlet } from "react-router-dom";
import Categories from "./Categories";

const GadgetsContainer = () => {
  return (
    <div className="px-3 md:px-5 mt-14 lg:mt-96 mb-20">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-5 md:grid-cols-4 gap-3 md:gap-5 lg:gap-10">
        <div className="col-span-2 md:col-span-1 rounded-2xl">
          <Categories></Categories>
        </div>
        <div className="col-span-3 md:col-span-3">
          {/* Outlet */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GadgetsContainer;
