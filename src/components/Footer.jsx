const Footer = () => {
    return (
        <footer className="bg-red-800 text-white py-4">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">

                <p className="text-sm font-pixel">🍅 Tomat Busuk &copy; 2025</p>

                <div className="flex gap-4 text-sm">
                    <a href="#" className="hover:text-yellow-300 transition">Terms</a>
                    <a href="#" className="hover:text-yellow-300 transition">Privacy</a>
                    <a href="https://reqres.in" target="_blank" className="hover:text-yellow-300 transition">
                        Powered by Reqres
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
