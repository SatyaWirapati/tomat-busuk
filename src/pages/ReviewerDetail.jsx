import { useParams, Link } from "react-router-dom";
import useReviewerDetail from "../hooks/useReviewerDetail";

const ReviewerDetail = () => {
    const { id } = useParams();
    const {reviewer, loading} = useReviewerDetail(id);

    if (loading) return <p className="text-center py-5">Loading...</p>;
    if (!reviewer) return <p className="text-center py-5">Reviewer not found.</p>;

    return (
        <div className="p-5 max-w-md mx-auto bg-amber-100 rounded-xl shadow-md text-center">
            <img
                src={reviewer.avatar}
                alt={reviewer.first_name}
                className="w-32 h-32 rounded-full mx-auto mb-3"
            />
            <h1 className="text-2xl font-bold text-red-700">
                {reviewer.first_name} {reviewer.last_name}
            </h1>
            <p className="text-gray-600 mb-3">{reviewer.email}</p>
            <Link
                to="/reviewers"
                className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800"
            >
                🔙 Back to Reviewers
            </Link>
        </div>
    );
};

export default ReviewerDetail;
