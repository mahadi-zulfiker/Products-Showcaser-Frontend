import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from "firebase/auth";
import auth from "../config";  // Adjust the path as needed

export const AuthContexts = createContext(null);  // Keep this consistent

const googleProvider = new GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {  // Renamed for clarity
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false); // Set loading to false when user is set
        });
        return () => unsubscribe();
    }, []);

    const continueWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user);
        } catch (error) {
            console.error("Error signing in with Google:", error.message);
        }
    };

    const loginWithEmail = async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log(result.user);
        } catch (error) {
            console.error("Error signing in with email:", error.message);
            throw new Error(error.message); // Re-throw error to handle in the component
        }
    };

    const registerWithEmail = async (email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            console.log(result.user);
        } catch (error) {
            console.error("Error registering with email:", error.message);
            throw new Error(error.message); // Re-throw error to handle in the component
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Error signing out:", error.message);
        }
    };

    const value = {
        user,
        continueWithGoogle,
        loginWithEmail,
        registerWithEmail,
        logOut,
        loading
    };

    return (
        <AuthContexts.Provider value={value}>
            {!loading ? children : <div>Loading...</div>}  {/* Simple loading indicator */}
        </AuthContexts.Provider>
    );
};

export default AuthContextProvider;

