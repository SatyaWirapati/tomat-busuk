const MovieCard = ({ index, title, rating, votes, poster }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex
        flex-col">
            <img
                src={poster}
                alt={title}
                className="w-full h-64 object-cover" />
            <div className="p-3 flex flex-col flex-grow">
                <h3 className="text-sm font-semibold text-gray-800 truncate">
                    #{index + 1} {title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                    ⭐ {rating} | 📥 {votes}
                </p>
                <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                    title + " trailer"
                )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto bg-red-600 text-white text-xs font-semibold py-1.5 rounded-lg text-center hover:bg-red-700"
                >
                    ▶️ Watch Trailer
                </a>
            </div>
        </div>
    )
}

export default MovieCard;