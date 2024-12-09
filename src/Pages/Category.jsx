import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";

import Item from "../Components/Item/Item";
import LoadingDots from "../Components/Suspense/LoadingDots";
import LoadingMini from "../Components/Suspense/LoadingMini";
import { ShopContext } from "../Context/ShopContext";

const Category = (props) => {
  const { all_product } = useContext(ShopContext);
  const [categoryProducts, setCategoryProducts] = useState([]);
  useEffect(() => {
    if (all_product) {
      setCategoryProducts(all_product.filter((product) => product.category === props.category));
    }
  },[all_product , props]);
  
  const [productsPage, setProductsPage] = useState(1);
  const [sortOption, setSortOption] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadingLess, setLoadingLess] = useState(false);
  const [loadingAll, setLoadingAll] = useState(false);
  const [hideLoading, setHideLoading] = useState(false);
  const [sortedProducts, setSortedProducts] = useState([]);
  const ProductsPerPage = 4;
  const maxPages = Math.ceil(categoryProducts.length / ProductsPerPage);

  const handleSort = (option) => {
    setSortOption(option);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  useEffect(() => {
    const sortedItems = [...categoryProducts];

    if (sortOption === "name") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "price") {
      sortedItems.sort((a, b) => a.new_price - b.new_price);
    }

    if (sortOrder === "desc") {
      sortedItems.reverse();
    }

    setSortedProducts(sortedItems);
  }, [categoryProducts, sortOption, sortOrder]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const savedSortOption = urlParams.get("sortOption");
    const savedSortOrder = urlParams.get("sortOrder");

    if (savedSortOrder) setSortOrder(savedSortOrder);
    if (savedSortOption) setSortOption(savedSortOption);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.serach);
    urlParams.set("sortOption", sortOption);
    urlParams.set("sortOrder", sortOrder);
    window.history.replaceState(null, "", `?${urlParams.toString()}`);
  }, [sortOrder, sortOption]);

  const showMoreProducts = () => {
    if (productsPage < maxPages) {
      setLoadingMore(true);
      setTimeout(() => {
        setProductsPage((prev) => prev + 1);
        setLoadingMore(false);
      }, 500);
    }
  };

  const showLessProducts = () => {
    if (productsPage > 1) {
      setLoadingLess(true);
      setTimeout(() => {
        setProductsPage((prev) => Math.max(prev - 1, 1));
        setLoadingLess(false);
      }, 500);
    }
  };

  const showAllProducts = () => {
    setLoadingAll(true);
    setTimeout(() => {
      setProductsPage(maxPages);
      setLoadingAll(false);
    }, 500);
  };

  const hideAllProducts = () => {
    setHideLoading(true);
    setTimeout(() => {
      setProductsPage(1);
      setHideLoading(false);
    }, 500);
  };

  const paginatedProducts = sortedProducts.slice(
    0,
    productsPage * ProductsPerPage
  );
  return (
    <div className="flex flex-col">
      {/* banner */}
      <div>{props.banner}</div>
      {/* products */}
      <div className="flex flex-col w-screen bg-gradient-to-b from-red-500 items-center justify-center">
        <div className="w-full flex flex-col p-5 items-center justify-center">
          <div className="w-full flex flex-col gap-3 items-center justify-center py-[2rem]">
            <div className="flex items-center justify-center gap-2 text-xl">
              <p>Showing </p>
              <p className="font-Madimi text-white">{paginatedProducts.length}</p>
              <p>out of</p>
              <p className="font-Madimi text-white">{categoryProducts.length}</p>
              <p>Products</p>
            </div>
            {/* sort */}
            <div className="flex items-center justify-center w-full flex-col gap-3  my-10">
              <div className="flex items-center justify-center gap-3 w-full">
                <div className="flex flex-col gap-1 ">
                  <div className="pl-1 text-white">Sort By :</div>
                  <select
                    id="sort"
                    value={sortOption}
                    onChange={(e) => handleSort(e.target.value, sortOrder)}
                    className="p-2 border border-r-8 rounded border-black bg-black 
                text-yellow-200 w-[10rem] hover:text-sky-200 cursor-pointer shadow-lg shadow-black
                group focus:outline-none
              +"
                  >
                    <option
                      className="text-yellow-200 cursor-pointer"
                      value="name"
                    >
                      Name
                    </option>
                    <option
                      className="text-yellow-200 cursor-pointer"
                      value="price"
                    >
                      Price
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="pl-1 text-white">Direction :</p>
                  <select
                    id="order"
                    value={sortOrder}
                    onChange={(e) => handleSort(sortOption, e.target.value)}
                    className="p-2 border border-r-8 rounded border-black bg-black 
                text-yellow-200 w-[10rem] hover:text-sky-200 cursor-pointer shadow-lg shadow-black
                group focus:outline-none
              +"
                  >
                    <option
                      className="text-yellow-200 cursor-pointer"
                      value="asc"
                    >
                      Asc
                    </option>
                    <option
                      className="text-yellow-200 cursor-pointer"
                      value="desc"
                    >
                      Desc
                    </option>
                  </select>
                </div>
              </div>
            </div>
            {/* sort */}
          </div>
          <motion.div className="flex  relative flex-wrap items-stretch justify-center gap-4 w-full">
            <AnimatePresence>
              {paginatedProducts.map((item, i) => (
                <Item
                  name={item.name}
                  number={item.number}
                  id={item.id}
                  key={i}
                  img={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              ))}
            </AnimatePresence>
            <AnimatePresence>
              {/* loading */}
              {loadingMore || loadingAll || hideLoading || loadingLess ? (
                <div
                  className="absolute w-full h-full flex items-center justify-center bg-stone-500/30
          backdrop-blur-md z-20 rounded-xl"
                >
                  <motion.div className="flex items-center justify-center">
                    <LoadingMini />
                  </motion.div>
                </div>
              ) : null}
              {/* loading */}
            </AnimatePresence>
          </motion.div>
          {/* pagination */}
          <AnimatePresence>
            {
              <motion.div className="flex flex-col items-center justify-center gap-4 my-5">
                <motion.div
                  dir="rtl"
                  className="flex items-center justify-center gap-2"
                >
                  {/* load more */}
                  <motion.div
                    whileHover={{ scale: productsPage >= maxPages ? 1 : 1.05 }}
                    whileTap={{ scale: productsPage >= maxPages ? 1 : 0.9 }}
                  >
                    <button
                      onClick={showMoreProducts}
                      disabled={loadingMore || productsPage >= maxPages}
                      className={`flex items-center justify-center p-2 border-2 rounded-lg
                    w-[8rem] shadow-lg shadow-black
                     ${productsPage >= maxPages
                          ? "text-gray-200 bg-gray-400 border-none hover:text-gray-200"
                          : "text-yellow-200 bg-black border-black hover:text-white"
                        }`}
                    >
                      {loadingMore ? (
                        <LoadingDots color="bg-sky-200" />
                      ) : (
                        "show more"
                      )}
                    </button>
                  </motion.div>
                  {/* load more */}
                  {/* load less */}
                  <motion.div
                    whileHover={{ scale: productsPage <= 1 ? 1 : 1.05 }}
                    whileTap={{ scale: productsPage <= 1 ? 1 : 0.9 }}
                  >
                    <button
                      onClick={showLessProducts}
                      disabled={loadingLess || productsPage <= 1}
                      className={`flex items-center justify-center p-2 border-2  rounded-lg
                    w-[8rem] shadow-lg shadow-black
                     ${productsPage <= 1
                          ? "text-gray-200 bg-gray-400 border-none hover:text-gray-200"
                          : "text-yellow-200 bg-black border-black hover:text-white"
                        }`}
                    >
                      {loadingLess ? (
                        <LoadingDots color="bg-sky-200" />
                      ) : (
                        "show less"
                      )}
                    </button>
                  </motion.div>
                  {/* load less */}
                </motion.div>
                <div
                  dir="rtl"
                  className="flex items-center justify-center gap-2"
                >
                  {/* load all */}
                  <motion.div
                    whileHover={{ scale: productsPage >= maxPages ? 1 : 1.05 }}
                    whileTap={{ scale: productsPage >= maxPages ? 1 : 0.9 }}
                  >
                    <button
                      onClick={showAllProducts}
                      disabled={loadingAll || productsPage >= maxPages}
                      className={`flex items-center justify-center p-2 border-2  rounded-lg
                    w-[8rem] shadow-lg shadow-black
                     ${productsPage >= maxPages
                          ? "text-gray-200 bg-gray-400 border-none hover:text-gray-200"
                          : "text-yellow-200 bg-black border-black hover:text-white"
                        }`}
                    >
                      {loadingAll ? (
                        <LoadingDots color="bg-sky-200" />
                      ) : (
                        "show all"
                      )}
                    </button>
                  </motion.div>
                  {/* load all */}
                  {/* hide all */}
                  <motion.div
                    whileHover={{ scale: productsPage <= 1 ? 1 : 1.05 }}
                    whileTap={{ scale: productsPage <= 1 ? 1 : 0.9 }}
                  >
                    <button
                      onClick={hideAllProducts}
                      disabled={hideLoading || productsPage <= 1}
                      className={`flex items-center justify-center p-2 border-2  rounded-lg
                    w-[8rem] shadow-lg shadow-black
                     ${productsPage <= 1
                          ? "text-gray-200 bg-gray-400 border-none hover:text-gray-200"
                          : "text-yellow-200 bg-black border-black hover:text-white"
                        }`}
                    >
                      {hideLoading ? (
                        <LoadingDots color="bg-sky-200" />
                      ) : (
                        "hide all"
                      )}
                    </button>
                  </motion.div>
                  {/* hide all */}
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Category;
