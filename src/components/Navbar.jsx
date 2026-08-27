import { Link } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="bg-slate-950/97 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap"
          >
            🛍️<span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">ProductExpl</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-slate-300 hover:text-white transition duration-200"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-slate-300 hover:text-white transition duration-200"
            >
              Products
            </Link>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                onFocus={() => {
                  window.location.pathname !== "/products" &&
                    (window.location.href = "/products");
                }}
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 rounded-lg bg-slate-800 text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                🔍
              </span>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;