import { Link, useNavigate } from "react-router-dom";
import Button from "../componant/Button";
import { useContext } from "react";
import { AuthContexts } from "../Context/AuthContext";

const Header = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContexts);

    return (
        <header className="w-full bg-gray-700/20 shadow-md">
            <div className="max-w-screen-2xl mx-auto py-4 px-4 flex justify-between items-center">
                <div>
                    <Link to="/">
                        <h1 className="text-3xl text-gray-800 font-extrabold">PSP</h1>
                    </Link>
                </div>
                {user ? (
                    <div className="flex items-center gap-2">
                        <img
                            title={user.displayName}
                            className="w-12 h-12 rounded-full"
                            src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} // Use user photoURL if available
                            alt="User"
                        />
                        <button
                            onClick={logOut}
                            aria-label="Logout"
                        >
                            <h2 className="font-bold">LOGOUT</h2>
                        </button>
                    </div>
                ) : (
                    <Button fn={() => navigate("/login")} text="Sign In" />
                )}
            </div>
        </header>
    );
};

export default Header;

