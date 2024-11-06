import { useEffect, useState } from "react";
import Categories from "../components/Categories";

const NestedLayouts = () => {
  const [categories, setCategoryes] = useState([]);
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategoryes(data));
  }, []);

  const handleCategory = (catId) => {
    if (catId === "allProducts") {
      setDisplayProducts(loaderProducts);
      return;
    }

    const categoryProducts = loaderProducts.filter(
      (product) => product.category_id === catId
    );
    setDisplayProducts(categoryProducts);
  };

  return (
    <div className="px-5 mt-96 mb-20">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold">Explore Cutting-Edge Gadgets</h1>
      </div>

      <div className="mt-10 grid grid-cols-4 gap-10">
        <div className="col-span-1 rounded-2xl">
          <Categories
            categories={categories}
            handleCategory={handleCategory}
          ></Categories>
        </div>
        <div className="col-span-3">
          {/* <Cards allProducts={displayProducts}></Cards> */}
          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  );
};

export default NestedLayouts;
