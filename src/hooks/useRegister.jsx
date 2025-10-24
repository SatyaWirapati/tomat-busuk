import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/reqresApi";
import { useAuth } from "../context/AuthContext";

const useRegister = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleRegister = async (email, password) => {
        setMessage("");
        setLoading(true);
        try {
            const data = await registerUser(email, password)
            login(data.token);
            setMessage("✅ Registration successful! Redirecting...");
            setTimeout(() => navigate("/"), 1500);
        } catch (err) {
            setMessage(`❌ ${err.message}`);
        }finally{
            setLoading(false)
        }

    }
    return {handleRegister, message, loading}
}
export default useRegister;