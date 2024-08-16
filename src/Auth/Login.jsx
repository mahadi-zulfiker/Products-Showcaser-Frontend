import { useContext } from "react";
import { AuthContexts } from "../Context/AuthContext";

const Login = () => {
    const { continueWithGoogle } = useContext(AuthContexts);
    const handleLogin = (e) => {
        e.preventDefault()
    }

    return (
        <div className="flex justify-center items-center p-20">
            <form onSubmit={handleLogin} className="border py-10 px-20">
                <div className="mb-2">
                    <h4 className="text-xl mb-2">Email:</h4>
                    <input
                        className="border px-4 py-2 outline-none"
                        placeholder="Your email..."
                        type="text"
                    />
                </div>
                <div className="mb-2">
                    <h4 className="text-xl mb-2">Password:</h4>
                    <input
                        className="border px-4 py-2 outline-none"
                        placeholder="Password..."
                        type="text"
                    />
                </div>
                <button className="w-full mb-6 py-2 bg-blue-400 text-gray-200">
                    Login
                </button>
                <button type="button"
                    onClick={continueWithGoogle}
                    className="w-full py-2 bg-[#4285F4] text-gray-200">
                    Continue With Google
                </button>
            </form>
        </div>
    );
};

export default Login;
