import React from "react";
import MovieCard from "./Moviecard";

const dummyMovies = [
  {
    id: 1,
    title: "Oppenheimer",
    rating: 8.6,
    votes: "1.2M",
    poster: "https://www.moviemeter.nl/images/cover/1145000/1145017.jpg?cb=1690870678",
  },
  {
    id: 2,
    title: "Barbie",
    rating: 7.0,
    votes: "950K",
    poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
  },
  {
    id: 3,
    title: "Dune: Part Two",
    rating: 8.8,
    votes: "870K",
    poster: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  },
  {
    id: 4,
    title: "Spider-Man: Across the Spider-Verse",
    rating: 8.9,
    votes: "1.1M",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
  },
  {
    id: 5,
    title: "Avatar: The Way of Water",
    rating: 7.8,
    votes: "2.3M",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
  },
  {
    id: 6,
    title: "The Batman",
    rating: 8.0,
    votes: "1.5M",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    id: 7,
    title: "John Wick: Chapter 4",
    rating: 8.1,
    votes: "980K",
    poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  },
  {
    id: 8,
    title: "Guardians of the Galaxy Vol. 3",
    rating: 8.2,
    votes: "900K",
    poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
  },
  {
    id: 9,
    title: "Mission: Impossible – Dead Reckoning Part One",
    rating: 7.6,
    votes: "750K",
    poster: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
  },
  {
    id: 10,
    title: "The Super Mario Bros. Movie",
    rating: 7.2,
    votes: "1.0M",
    poster: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
  },
];

const TopTen = () => {
  return (
    <section className="bg-gray-900 text-white py-8 px-5">
      <h2 className="text-2xl font-bold text-center mb-6">
        🎬 Top 10 Movies This Week
      </h2>

      {/* GRID RESPONSIVE */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {dummyMovies.map((movie, index) => (
          <MovieCard
            key={movie.id}
            index={index}
            title={movie.title}
            rating={movie.rating}
            votes={movie.votes}
            poster={movie.poster}
          />
        ))}
      </div>
    </section>
  );
};

export default TopTen;
