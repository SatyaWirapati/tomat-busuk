import { Link } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-red-700 text-white px-4 md:px-6 py-3 shadow-md">
            <div className="flex justify-between items-center">
                {/* LOGO */}
                <Link to="/" className="text-xl md:text-2xl font-bold tracking-wide font-pixel">
                    🍅 Tomat Busuk
                </Link>

                {/* SEARCH BAR (HANYA DESKTOP) */}
                <div className="hidden md:flex item-center w-1/3">
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

                {/* LINKS (HANYA DESKTOP) */}
                <div className="hidden md:flex gap-4 items-center">
                    <Link to="/watchlist" className="hover:text-yellow-300">
                        🎬 Watchlist
                    </Link>
                    <Link to="/login" className="hover:text-yellow-300">
                        👤 Login
                    </Link>
                    
                </div>

                {/* TOMBOL BUKA MENU (HANYA MOBILE) */}
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
                    // HANYA SATU DIV SIDEBAR. Dibuat w-full di mobile untuk menutupi viewport.
                    <div
                        className="fixed top-0 left-0 w-full md:w-3/4 lg:w-2/5 h-full 
                           bg-red-700 p-5 shadow-lg flex flex-col z-50 text-white
                           transition duration-1000 transform"
                    // Tidak perlu onClick={(e) => e.stopPropagation()} karena tidak ada parent overlay
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

                        {/* Search bar mobile (Sekarang di dalam sidebar) */}
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

                        {/* Links */}
                        <Link
                            to="/watchlist"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-yellow-500 py-2 border-b border-yellow-600"
                        >
                            🎬 Watchlist
                        </Link>
                        <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-yellow-500 py-2 border-b border-yellow-600"
                        >
                            👤 Login
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar