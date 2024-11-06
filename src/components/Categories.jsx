import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../providers/ProductsProvider";

const Categories = () => {
  const { categories, handleCategory, setCategoryFlag, categoryFlag } =
    useContext(ProductsContext);

  return (
    <div className="bg-white rounded-2xl">
      <div className="p-5">
        <div className="flex flex-col gap-2">
          <NavLink
            onClick={() => {
              setCategoryFlag(true);
              handleCategory("allProducts");
            }}
            className={({ isActive }) =>
              categoryFlag
                ? "bg-[#9538E2] rounded-2xl px-3 py-2 text-xs md:text-sm lg:text-lg font-bold text-white"
                : "bg-[#09080F0D] rounded-2xl px-3 py-2 text-xs md:text-sm lg:text-lg font-bold"
            }
          >
            All Products
          </NavLink>

          {categories?.slice(1, categories.length)?.map((category) => {
            return (
              <NavLink
                to={`/category/${category.category_id}`}
                onClick={() => {
                  setCategoryFlag(false);
                  handleCategory(category.category_id);
                }}
                key={category.category_id}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#9538E2] rounded-2xl px-3 py-2 text-xs md:text-sm lg:text-lg font-bold text-white"
                    : "bg-[#09080F0D] rounded-2xl px-3 py-2 text-xs md:text-sm lg:text-lg font-bold"
                }
              >
                {category?.category_name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
