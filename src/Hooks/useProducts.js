import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/AppData.json");
        if (!res.ok) throw new Error("Failed to load data");
        const data = await res.json();

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        console.error("Error loading products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
