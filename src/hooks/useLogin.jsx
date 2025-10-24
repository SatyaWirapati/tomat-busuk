import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/reqresApi";
import { useAuth } from "../context/AuthContext";

const useLogin = ()=> {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const {login} = useAuth();
    const navigate=useNavigate();

    const handleLogin= async(email, password)=> {
        setMessage("");
        setLoading(true);
        try {
            const data = await loginUser(email, password);
            console.log("Token: ", data.token);
            login(data.token);
            setMessage("✅ Login successful! Redirecting...")
            setTimeout(()=>navigate("/"), 1500);
        }catch (err){
            setMessage("❌ Invalid email or password")
        }
        setLoading(false);
    }
    return {handleLogin, message, loading}
}

export default useLogin ;