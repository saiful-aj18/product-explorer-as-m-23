import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearchFocus = () => {
    if (window.location.pathname !== "/products") {
      navigate("/products");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/97 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between gap-4 h-16">

          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap"
          >
            🛍️<span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">ProExpl</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-slate-300 hover:text-white transition"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-slate-300 hover:text-white transition"
            >
              Products
            </Link>
          </div>

          <div className="hidden sm:block flex-1 max-w-sm">
            <div className="relative">

              <input
                type="text"
                value={searchTerm}
                onFocus={handleSearchFocus}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 rounded-lg bg-slate-900 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                🔍
              </span>

            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-300 hover:text-white text-2xl"
          >
            ☰
          </button>

        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 space-y-3">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block text-slate-300 hover:text-white"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="block text-slate-300 hover:text-white"
            >
              Products
            </Link>

            <div className="relative pt-2">

              <input
                type="text"
                value={searchTerm}
                onFocus={handleSearchFocus}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 rounded-lg bg-slate-800 text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <span className="absolute left-3 top-1/2 -translate-y-1/2 pt-1">
                🔍
              </span>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;