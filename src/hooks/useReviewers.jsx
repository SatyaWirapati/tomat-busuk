import { useEffect, useState } from "react";
import { getReviewers } from "../api/reqresApi"

const useReviewers = () => {
    const [reviewers, setReviewers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetchReviewer = async () => {
            setLoading(true);
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
    return { reviewers, loading, page, totalPages, setPage }
}
export default useReviewers;