import { setupAxiosInterceptors } from "../api/Interceptors";
import { loginPlayer } from "../services/PlayerService";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import { getLocalAccesToken, UpdateLocalAccesToken } from "../services/TokenService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(getLocalAccesToken() || "");
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = getLocalAccesToken();
        if (token) {
            try {
                const decodedUser = jwtDecode(token);
                setUser(decodedUser);
            } catch (error) {
                console.error("Invalid token:", error);
                localStorage.removeItem("site");
            }
        }
        setupAxiosInterceptors(logout);
    }, []);

    const login = async (data) => {
        setErrorMessage(null);
        try {
            const response = await loginPlayer(data);
            if (response.data) {
                setToken(response.data);
                UpdateLocalAccesToken(response.data);
                const decodedUser = jwtDecode(response.data); 
                setUser(decodedUser);
                navigate("/CardList");
                return;
            }
            throw new Error(response.message);
        } catch (error) {
            console.error(error);
            const errorMessage = error.response?.data?.Message || "An error occurred during login.";
            setErrorMessage(errorMessage);
        }
    };

    const logout = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ token, user, login, logout, errorMessage }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}