import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../Hooks/useProducts";
import { FaStar, FaDownload } from "react-icons/fa";

const Products = () => {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("selectedProducts") || "[]");
    setSelectedProducts(stored);
  }, []);

  useEffect(() => {
    if (!products?.length) return;
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    if (!products?.length) return;
    setSearchLoading(true);

    const timer = setTimeout(() => {
      const filtered = products.filter((product) =>
        product.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setSearchLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchTerm, products]);

  const handleInstall = (id) => {
    const updated = [...new Set([...selectedProducts, id])];
    setSelectedProducts(updated);
    localStorage.setItem("selectedProducts", JSON.stringify(updated));
  };

  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  const averageRating = (rating) => rating?.toFixed(1) || "0.0";

  if (loading)
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <p className="text-center py-10 text-red-500">Error loading products.</p>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Our All Applications
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between items-center mb-5">
        <h3 className="font-semibold text-gray-700 text-xl">
          ({filteredProducts.length}) Apps Found
        </h3>
        <input
          type="text"
          placeholder="Search Apps"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {searchLoading ? (
        <div className="flex justify-center items-center py-16">
          <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="bg-gray-100 h-36 flex items-center justify-center rounded-t-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover h-full w-full"
                />
              </div>

              <div className="p-3">
                <h2 className="text-sm font-semibold text-gray-800 mb-3 line-clamp-2">
                  {product.title}
                </h2>

                <div className="flex justify-between items-center gap-3">
                  <button className="btn btn-xs bg-blue-100 text-blue-600 border-none hover:bg-blue-200 flex items-center gap-1">
                    <FaDownload className="text-green-500" />
                    {formatDownloads(product.downloads)}
                  </button>

                  <button className="btn btn-xs bg-blue-100 text-blue-600 border-none hover:bg-blue-200 flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    {averageRating(product.ratingAvg)}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No apps found.</p>
      )}
    </div>
  );
};

export default Products;
