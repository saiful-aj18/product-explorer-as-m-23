const ProductCard = ({ product }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-1 hover:border-slate-700 transition duration-300">

      <div className="h-56 bg-white flex items-center justify-center p-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="p-5">
        <p className="text-sm text-cyan-400 capitalize mb-2">
          {product.category}
        </p>

        <h2 className="text-lg font-semibold text-white line-clamp-2 min-h-14">
          {product.title}
        </h2>

        <div className="flex items-center justify-between mt-4">
          <p className="text-2xl font-bold text-white">
            ${product.price}
          </p>

          <span className="text-sm text-yellow-400">
            ⭐ {product.rating}
          </span>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;