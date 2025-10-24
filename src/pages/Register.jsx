import { useState } from "react";
import useRegister from "../hooks/useRegister";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const {handleRegister, message, loading} = useRegister();
    const submitForm = async (e) => {
        e.preventDefault();
        handleRegister(email,password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Register
                </h2>

                <form onSubmit={submitForm} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="example@domain.com"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>

                {message && (
                    <p
                        className={`mt-4 text-center font-medium ${message.includes("✅") ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {message}
                    </p>
                )}

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-red-600 font-medium hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
