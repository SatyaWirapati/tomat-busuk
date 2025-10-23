import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviewers } from "../api/reqresApi"
import Pagenation from "../components/Pagination";

const Reviewers = () => {
  const [reviewers, setReviewers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [page,setPage] = useState(1);
  useEffect(() => {
    const fetchReviewer = async () => {
      try {
        const data = await getReviewers(page);
        setReviewers(data.data)
        setTotalPages(data.total_pages);
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchReviewer();
  }, [page])

  if (loading) return <p className="text-center p-5">Loading Reviewers</p>

  return (
    <div className="p-5 max-w-3xl mx-auto mb-4">
      <h1 className="text-2xl font-bold text-center mb-4 text-red-700">
        🍅 Reviewers List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviewers.map((user) => (
          <div key={user.id} className="bg-amber-100 p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <img src={user.avatar} alt={user.first_name}
              className="mx-auto w-24 h-24 rounded-full mb-3" />
            <h2 className="text-lg font-semibold text-center">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-center text-gray-600">{user.email}</p>
            <div className="text-center mt-3">
              <Link to={`/reviewers/${user.id}`}
                className="bg-red-700 hover:bg-red-800 text-white px-3 py-1">
                View Detail
              </Link>
            </div>


          </div>
        ))}
      </div>
      <Pagenation page={page} totalPages={totalPages} onPageChange={(newPage) => setPage(newPage)}/>
    </div>
  )

}

export default Reviewers;