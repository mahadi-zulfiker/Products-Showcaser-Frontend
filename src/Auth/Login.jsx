import { useContext, useState } from "react";
import { AuthContexts } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { continueWithGoogle, loginWithEmail } = useContext(AuthContexts);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await loginWithEmail(email, password);
            navigate("/"); // Navigate to home or dashboard after successful login
        } catch (err) {
            setError("Failed to login. Please check your credentials.");
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await continueWithGoogle();
            navigate("/"); // Navigate to home after successful Google login
        } catch (error) {
            setError("Failed to login with Google. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <form
                onSubmit={handleLogin}
                className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Login</h2>

                {error && (
                    <p className="text-red-500 text-center mb-4">{error}</p>
                )}

                <div className="mb-4">
                    <label htmlFor="email" className="text-lg font-medium text-gray-700">
                        Email:
                    </label>
                    <input
                        id="email"
                        className="w-full mt-1 border px-4 py-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
                        placeholder="Your email..."
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="text-lg font-medium text-gray-700">
                        Password:
                    </label>
                    <input
                        id="password"
                        className="w-full mt-1 border px-4 py-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
                        placeholder="Password..."
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full mb-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition duration-200"
                >
                    Login
                </button>

                <button
                    type="button"
                    onClick={handleGoogleLogin}  // Updated to handle navigation
                    className="w-full py-2 bg-[#4285F4] text-white font-medium rounded hover:bg-[#357ae8] transition duration-200 flex items-center justify-center"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                        alt="Google logo"
                        className="w-5 h-5 mr-2"
                    />
                    Continue with Google
                </button>
                <p className="text-center text-gray-600">
                    Do you not have an account? <a href="/register" className="text-blue-500 hover:underline">Register here</a>
                </p>
            </form>
        </div>
    );
};

export default Login;

