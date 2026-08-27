import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import "./App.css";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-7xl mx-auto px-4 py-20 sm:py-28">

        <div className="max-w-3xl mx-auto text-center">

          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">
            Discover Amazing Products
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Explore Products
            <span className="block text-cyan-500">
              You’ll Love
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Browse through a wide collection of products.
            Search by title, filter by category, and find
            exactly what you're looking for.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link
              to="/products"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition"
            >
              Explore Products →
            </Link>

            <a
              href="#features"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-900 text-slate-300 transition"
            >
              Learn More
            </a>

          </div>

        </div>

      </section>

      <section
        id="features"
        className="border-t border-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 py-16">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold">
              Why Product Explorer?
            </h2>

            <p className="mt-3 text-slate-400">
              Simple tools to help you find products faster.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-3xl mb-4">🔍</div>

              <h3 className="text-xl font-semibold mb-2">
                Fast Search
              </h3>

              <p className="text-slate-400">
                Search products by title with a smooth
                debounced search experience.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-3xl mb-4">🗂️</div>

              <h3 className="text-xl font-semibold mb-2">
                Category Filter
              </h3>

              <p className="text-slate-400">
                Quickly filter products by their category
                and find relevant products.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-3xl mb-4">🎯</div>

              <h3 className="text-xl font-semibold mb-2">
                Optimized
              </h3>

              <p className="text-slate-400">
                React optimization techniques help avoid
                unnecessary filtering calculations.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>

      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={
            <Products
              searchTerm={searchTerm}
              
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}



export default App;