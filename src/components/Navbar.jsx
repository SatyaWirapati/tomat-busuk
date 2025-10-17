import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // Cek login status di localStorage (misal token disimpan di sana)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-red-700 text-white px-4 md:px-6 py-3 shadow-md">
      <div className="flex justify-between items-center">
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold tracking-wide font-pixel"
        >
          🍅 Tomat Busuk
        </Link>

        {/* SEARCH BAR (DESKTOP) */}
        <div className="hidden md:flex items-center w-1/3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search movie or series..."
            className="w-full bg-amber-100 px-3 py-1 rounded-l-lg text-black focus:outline-none"
          />
          <button className="bg-yellow-400 px-3 py-1 rounded-r-lg text-black font-semibold hover:bg-yellow-500">
            🔎
          </button>
        </div>

        {/* LINKS (DESKTOP) */}
        <div className="hidden md:flex gap-4 items-center">
          <Link to="/watchlist" className="hover:text-yellow-300">
            🎬 Watchlist
          </Link>

          {/* Jika sudah login */}
          {isLoggedIn ? (
            <>
              <Link to="/reviewers" className="hover:text-yellow-300">
                🧑‍💻 Reviewers
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-yellow-300 font-semibold"
              >
                🚪 Logout
              </button>
            </>
          ) : (
            // Jika belum login
            <Link to="/login" className="hover:text-yellow-300">
              👤 Login
            </Link>
          )}
        </div>

        {/* TOMBOL MENU (MOBILE) */}
        {!menuOpen && (
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        )}

        {/* SIDEBAR MOBILE */}
        {menuOpen && (
          <div
            className="fixed top-0 left-0 w-full md:w-3/4 lg:w-2/5 h-full 
                       bg-red-700 p-5 shadow-lg flex flex-col z-50 text-white
                       transition duration-500 transform"
          >
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-bold font-pixel">🍅 Tomat Busuk</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl hover:text-yellow-300"
              >
                ❌
              </button>
            </div>

            {/* SEARCH MOBILE */}
            <div className="flex mb-4">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full bg-amber-100 px-3 py-1 rounded-l-lg text-black focus:outline-none"
              />
              <button className="bg-yellow-400 px-3 py-1 rounded-r-lg text-black font-semibold hover:bg-yellow-500">
                🔎
              </button>
            </div>

            {/* LINK MENU MOBILE */}
            <Link
              to="/watchlist"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 py-2 border-b border-yellow-600"
            >
              🎬 Watchlist
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  to="/reviewers"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-yellow-500 py-2 border-b border-yellow-600"
                >
                  🧑‍💻 Reviewers
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="hover:text-yellow-500 py-2 border-b border-yellow-600 text-left"
                >
                  🚪 Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-500 py-2 border-b border-yellow-600"
              >
                👤 Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
