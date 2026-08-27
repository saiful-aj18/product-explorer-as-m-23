import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-950/98 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          
          <Link
            to="/"
            className="text-2xl font-bold "
          >
            🛍️<span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">ProExpl</span>
          </Link>

          <div className="flex items-center gap-6">
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
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search products..."
              className="w-56 px-4 py-2 rounded-lg bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;