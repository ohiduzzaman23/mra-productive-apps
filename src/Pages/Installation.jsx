import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Installation = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("/AppData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    const stored = JSON.parse(localStorage.getItem("selectedProducts") || "[]");
    setSelectedProducts(stored);
  }, []);

  const handleUninstall = (id) => {
    const updated = selectedProducts.filter((pId) => pId !== id);
    setSelectedProducts(updated);
    localStorage.setItem("selectedProducts", JSON.stringify(updated));

    const product = products.find((p) => p.id === id);
    toast.success(`${product?.title || "App"} uninstalled successfully 🗑️`);
  };

  if (!selectedProducts.length) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 text-xl font-semibold">
          Please select an app first!
        </p>
      </div>
    );
  }

  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  let productsToShow = products.filter((p) => selectedProducts.includes(p.id));

  if (sortOrder === "Low-High") {
    productsToShow.sort((a, b) => a.size - b.size);
  } else if (sortOrder === "High-Low") {
    productsToShow.sort((a, b) => b.size - a.size);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <Toaster position="top-center" />
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Your Installed Apps</h1>
        <p className="text-gray-500">
          Explore all trending apps installed on your device.
        </p>
      </div>

      {/* Sort bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-lg sm:text-xl font-semibold">
          {productsToShow.length} Apps Found
        </h2>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 p-2 rounded text-gray-700"
        >
          <option value="">Sort By Size</option>
          <option value="Low-High">Low-High</option>
          <option value="High-Low">High-Low</option>
        </select>
      </div>

      {/* Installed Apps List */}
      <div className="grid grid-cols-1 gap-5">
        {productsToShow.map((product) => (
          <div
            key={product.id}
            className="flex flex-col sm:flex-row items-center sm:items-center justify-between bg-base-100 shadow-md rounded-lg p-4 gap-4"
          >
            <div className="flex items-center w-full sm:w-auto gap-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1 text-[#00D390] font-medium">
                    <i className="fa-solid fa-download"></i>
                    <span>{formatDownloads(product.downloads)}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#FFA500] font-medium">
                    <i className="fa-solid fa-star"></i>
                    <span>{product.ratingAvg}</span>
                  </div>
                  <div className="text-gray-500 font-medium">
                    {product.size} MB
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(product.id)}
              className="btn bg-[#00D390] text-white px-5 py-2 rounded-lg hover:bg-[#028d61] w-full sm:w-auto"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
