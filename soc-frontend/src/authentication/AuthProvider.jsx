import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginPlayer } from "./PlayerService";
import { jwtDecode } from "jwt-decode";
import { UpdateLocalAccesToken, getLocalAccesToken } from "../services/TokenService";

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
    }, []);

    const login = async (data) => {
        setErrorMessage(null);
        try {
            const response = await loginPlayer(data);
            if (response.data) {
                setToken(response.data);
                UpdateLocalAccesToken(token);
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