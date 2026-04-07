

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const navigate = useNavigate();

  // ✅ Check login
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-400">
            <Link to="/">Ai Interview Prep</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:text-blue-400">LandingPage</Link>
            <Link to="/about" className="hover:text-blue-400">About</Link>
            <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
            <Link to='/interview/:id' className="hover:text-blue-400"></Link>

            {/* ✅ CONDITION */}
            {!isLoggedIn ? (
              <>
                {/* <Link
                  to="/login"
                  className="px-4 py-2 border border-blue-400 rounded hover:bg-blue-400 hover:text-black transition"
                >
                  Login
                </Link> */}
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-gray-800">
          <Link to="/" className="block hover:text-blue-400">LandingPage</Link>
          <Link to="/about" className="block hover:text-blue-400">About</Link>
          <Link to="/dashboard" className="block hover:text-blue-400">Dashboard</Link>
          <Link to="/interview/:id" className="block hover:text-blue-400"></Link>

          {/* ✅ MOBILE CONDITION */}
          {!isLoggedIn ? (
            <>
              {/* <Link
                to="/login"
                className="block px-4 py-2 border border-blue-400 rounded hover:bg-blue-400 hover:text-black transition"
              >
                Login
              </Link> */}
              <Link
                to="/signup"
                className="block px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}