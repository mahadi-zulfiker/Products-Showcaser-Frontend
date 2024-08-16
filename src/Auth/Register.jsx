import { useContext, useState } from "react";
import { AuthContexts } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const { registerWithEmail, continueWithGoogle } = useContext(AuthContexts);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            await registerWithEmail(email, password);
            navigate("/"); // Navigate to home page or dashboard after successful registration
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleRegister = async () => {
        try {
            await continueWithGoogle();
            navigate("/"); // Navigate to home page after successful Google sign-in
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setError("Failed to register with Google. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <form
                onSubmit={handleRegister}
                className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Register</h2>

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

                <div className="mb-4">
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

                <div className="mb-6">
                    <label htmlFor="confirm-password" className="text-lg font-medium text-gray-700">
                        Confirm Password:
                    </label>
                    <input
                        id="confirm-password"
                        className="w-full mt-1 border px-4 py-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
                        placeholder="Confirm password..."
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full mb-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition duration-200"
                >
                    Register
                </button>

                <button
                    type="button"
                    onClick={handleGoogleRegister}
                    className="w-full py-2 bg-[#4285F4] text-white font-medium rounded hover:bg-[#357ae8] transition duration-200 flex items-center justify-center"
                >
                    <FaGoogle size={20} className="mr-2"></FaGoogle>
                    Continue with Google
                </button>

                <p className="text-center text-gray-600">
                    Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login here</a>
                </p>
            </form>
        </div>
    );
};

export default Register;

