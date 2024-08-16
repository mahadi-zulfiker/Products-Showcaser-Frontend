import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
} from "firebase/auth";
import auth from "../config";

export const AuthContexts = createContext(null);
const googleProvaider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return () => unsubscribe();
    }, []);


    const continueWithGoogle = () => {
        signInWithPopup(auth, googleProvaider).then((res) => console.log(res));
    };

    const value = {
        user,
        continueWithGoogle,
    };

    return (
        <AuthContexts.Provider value={value}>{children}</AuthContexts.Provider>
    );
};

export default AuthContext;