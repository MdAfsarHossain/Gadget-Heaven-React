import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [categories, setCategoryes] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [addToCartItems, setAddToCartItems] = useState([]);
  const [addTowishListCartItems, setAddToWishListCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [flag, setFlag] = useState(true);

  const [categoryFlag, setCategoryFlag] = useState();

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategoryes(data));
  }, []);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setDisplayProducts(data);
      })
      .catch((error) => toast.error("Error:", error));
  }, []);

  const handleCategory = (catId) => {
    if (catId === "allProducts") {
      setDisplayProducts(allProducts);
    } else {
      const categoryProducts = allProducts.filter(
        (product) => product.category_id === catId
      );
      setDisplayProducts(categoryProducts);
    }
  };

  const handleAddToCart = (prodId) => {
    if (addToCartItems.length > 0) {
      const productFound = addToCartItems?.find(
        (item) => item.product_id == prodId
      );

      if (productFound) {
        toast.error("Product already added in the add cart!");
        return;
      } else {
        const product = allProducts.find(
          (product) => product.product_id == prodId
        );
        setAddToCartItems([...addToCartItems, product]);
        toast.success("Product successfully added to the add cart");
        handleCartTotal();
        return;
      }
    } else {
      const product = allProducts.find(
        (product) => product.product_id == prodId
      );
      setAddToCartItems([...addToCartItems, product]);
      toast.success("Product successfully added to the add cart!");
      handleCartTotal();
      return;
    }
  };

  const handleAddToWishList = async (prodId) => {
    if (addTowishListCartItems.length > 0) {
      const productFound = addTowishListCartItems?.find(
        (item) => item.product_id == prodId
      );

      if (productFound) {
        toast.success("Product already added in the wishlist cart!");
        return;
      } else {
        const product = allProducts.find(
          (product) => product.product_id == prodId
        );
        setAddToWishListCartItems([...addTowishListCartItems, product]);
        toast.success("Product successfully added to the wishlist");
        return;
      }
    } else {
      const product = allProducts.find(
        (product) => product.product_id == prodId
      );
      setAddToWishListCartItems([...addTowishListCartItems, product]);
      toast.success("Product successfully added to the wishlist");
      return;
    }
  };

  const handleFlag = (value) => {
    if (value === "wishList") {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  const handleRemoveCartItem = (prodId) => {
    setAddToCartItems(
      addToCartItems.filter((item) => item.product_id !== prodId)
    );
    toast.success("Product removed from cart!");
    handleCartTotal();
  };

  const handleRemoveWishListItem = (prodId) => {
    setAddToWishListCartItems(
      addTowishListCartItems?.filter((item) => item.product_id !== prodId)
    );
    toast.success("Product removed from wishlist successfully!");
  };

  const handleCartTotal = async () => {
    let total = 0;
    addToCartItems?.map((item) => (total += item.price));
    setCartTotal(total);
  };

  const handlePurchaseProduct = () => {
    setFlag(true);
    setAddToCartItems([]);
    setCartTotal(0);
    setAddToWishListCartItems([]);
  };

  const info = {
    categories,
    handleCategory,
    allProducts,
    displayProducts,
    addToCartItems,
    addTowishListCartItems,
    handleAddToCart,
    handleAddToWishList,
    flag,
    handleFlag,
    setFlag,
    handleRemoveCartItem,
    handleRemoveWishListItem,
    cartTotal,
    handleCartTotal,
    handlePurchaseProduct,
    categoryFlag,
    setCategoryFlag,
  };

  return (
    <ProductsContext.Provider value={info}>{children}</ProductsContext.Provider>
  );
};

export default ProductsProvider;
