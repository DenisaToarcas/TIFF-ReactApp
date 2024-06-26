import React from "react";
import { useTIFFRoleContext } from "../store/contextProvider";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { login, setToken, setUserId } = useTIFFRoleContext();

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        };

        console.log("Login button clicked!");
        try {
            console.log("Authenticating user:", user);
            const response = await login(user);
            console.log("User login successfully:", response);
            setToken(response.token);
            setUserId(response.user_id);
            
            setEmail("");
            setPassword("");
            navigate("/master");
        }
        catch (error) {
            console.error("Error adding user:", error);
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-r from-cyan-200 to-blue-500">
        <div className="max-w-lg mx-auto">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h1>
            <form className="mb-4" onSubmit={handleLogin}>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
}
