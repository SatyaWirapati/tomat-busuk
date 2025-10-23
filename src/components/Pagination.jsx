const Pagenation = ({ page, totalPages, onPageChange }) => {
    const handleChange = (newPage) => {
        onPageChange(newPage);
        setTimeout(() => {
            window.scroll({ top: 0, behavior: "smooth" });
        }, 0);
    }

    return (
        <div className="flex justify-center items-center gap-3 mt-6">
            <button
                disabled={page === 1}
                onClick={() => handleChange(page - 1)}
                className={`px-4 py-1 rounded-lg border transition mr-3 ${page === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-gray-200 active:scale-95"
                    }`}
            >
                Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
                <button
                    key={i}
                    onClick={() => handleChange(i + 1)}
                    className={`px-3 py-1 border rounded-lg transition ${page === i + 1
                            ? "bg-gray-900 text-white font-semibold"
                            : "hover:bg-gray-200"
                        }`}
                >
                    {i + 1}
                </button>
            ))}
            <button
                disabled={page === totalPages}
                onClick={() => handleChange(page + 1)}
                className={`px-4 py-1 rounded-lg transition border ml-3 ${page === totalPages
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-gray-200 active:scale-95"
                    }`}
            >
                Next
            </button>
        </div>
    )
}

export default Pagenation;