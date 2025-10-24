import { use, useEffect, useState } from "react";
import { getReviewerDetail } from "../api/reqresApi";


const useReviewerDetail = (id)=> {
    const [reviewer, setReviewer] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const data = await getReviewerDetail(id);
                setReviewer(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchDetail();
    }, [id]);
     
    return {reviewer, loading} 
    
}
export default useReviewerDetail;