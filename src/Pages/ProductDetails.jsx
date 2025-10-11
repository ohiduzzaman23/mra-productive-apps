import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import iconDownloads from "../assets/icon-downloads.png";
import iconRatings from "../assets/icon-ratings.png";
import iconReviews from "../assets/icon-review.png";
import AppNotFound from "./AppNotFound";
import toast, { Toaster } from "react-hot-toast";

const ProductDetails = () => {
  const product = useLoaderData();
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("selectedProducts") || "[]");
    setSelectedProducts(stored);
  }, []);

  const isInstalled = product && selectedProducts.includes(product.id);

  const handleInstall = () => {
    if (product && !isInstalled) {
      const updated = [...selectedProducts, product.id];
      setSelectedProducts(updated);
      localStorage.setItem("selectedProducts", JSON.stringify(updated));
      toast.success(`${product.title} installed successfully 🎉`);
    } else {
      toast.error("App already installed!");
    }
  };

  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  if (!product) return <AppNotFound />;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <Toaster position="top-center" />
      <div className="rounded-2xl flex flex-col md:flex-row gap-8 items-center md:items-start">
        <img
          src={product.image}
          alt={product.title}
          className="w-60 h-60 sm:w-72 sm:h-72 object-contain rounded-xl border"
        />

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            {product.title}
          </h2>
          <p className="text-gray-500 mb-4">
            Developed by{" "}
            <span className="text-[#986EEC] font-medium">productive.io</span>
          </p>

          <hr className="text-gray-300 mb-4" />

          <div className="mb-6 flex flex-col sm:flex-row gap-6 sm:gap-10 text-center justify-center md:justify-start">
            <div>
              <img src={iconDownloads} alt="" className="mx-auto mb-2 w-8" />
              <p>Downloads</p>
              <span className="text-2xl sm:text-3xl font-bold">
                {formatDownloads(product.downloads)}
              </span>
            </div>
            <div>
              <img src={iconRatings} alt="" className="mx-auto mb-2 w-8" />
              <p>Average Ratings</p>
              <span className="text-2xl sm:text-3xl font-bold">
                {product.ratingAvg}
              </span>
            </div>
            <div>
              <img src={iconReviews} alt="" className="mx-auto mb-2 w-8" />
              <p>Total Reviews</p>
              <span className="text-2xl sm:text-3xl font-bold">54k</span>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`w-full sm:w-auto px-6 py-3 rounded-lg font-semibold shadow-md transition text-white ${
              isInstalled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00D390] hover:bg-[#028d61]"
            }`}
          >
            {isInstalled ? "Installed" : "Install Now (291 MB)"}
          </button>
        </div>
      </div>

      <hr className="text-gray-300 mt-8" />

      <div className="mt-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
          Description
        </h3>
        <p className="text-gray-600 leading-relaxed text-justify">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
