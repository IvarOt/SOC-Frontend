import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginPlayer } from "./PlayerService";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("site");
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
        try {
            const response = await loginPlayer(data);
            if (response) {
                setToken(response.token);
                const decodedUser = jwtDecode(response.token);
                setUser(decodedUser);
                localStorage.setItem("site", response.token);
                navigate("/CardList");
                return;
            }
            throw new Error(response.message);
        } catch (error) {
            console.error(error);
        }
    };
    const logout = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}