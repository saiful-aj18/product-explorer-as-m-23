import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import useDebounce from "../hooks/useDebounce";

const Products = ({ searchTerm, setSearchTerm }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["all"]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://dummyjson.com/products?limit=100"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.products);

        const uniqueCategories = [
          "all",
          ...new Set(
            data.products.map((product) => product.category)
          ),
        ];

        setCategories(uniqueCategories);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      const matchesSearch = product.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, debouncedSearch]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-xl text-white">
          Loading products...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <p className="text-xl text-red-400">
          Error: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Explore Products
          </h1>

          <p className="text-slate-400 mt-2">
            Find your favorite products easily.
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="mb-6">
          <p className="text-slate-400">
            Showing{" "}
            <span className="text-white font-semibold">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">
              🔍
            </div>

            <h2 className="text-2xl font-semibold mb-2">
              No products found
            </h2>

            <p className="text-slate-400">
              Try another search or category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Products;