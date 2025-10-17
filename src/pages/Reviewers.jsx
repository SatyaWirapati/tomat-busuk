import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviewers } from "../api/reqresApi";

const Reviewers = () => {
  const [reviewers, setReviewers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviewers = async () => {
      try {
        const data = await getReviewers(1); // ambil page 1
        setReviewers(data.slice(0, 10)); // hanya 10 reviewer
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviewers();
  }, []);

  if (loading) return <p className="text-center py-5">Loading reviewers...</p>;

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-red-700">
        🍅 Reviewers List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviewers.map((user) => (
          <div
            key={user.id}
            className="bg-amber-100 p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={user.avatar}
              alt={user.first_name}
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />
            <h2 className="text-lg font-semibold text-center">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-center text-gray-600">{user.email}</p>
            <div className="text-center mt-3">
              <Link
                to={`/reviewers/${user.id}`}
                className="bg-red-700 text-white px-3 py-1 rounded-lg hover:bg-red-800"
              >
                View Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviewers;
