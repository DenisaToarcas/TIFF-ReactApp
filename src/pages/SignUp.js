import React from "react";
import { useNavigate } from 'react-router-dom';
import { useTIFFRoleContext } from "../store/contextProvider";

export const SignUp = () => {
    const [username, setUsername] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [CNP, setCNP] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigate = useNavigate();

    const { signUp } = useTIFFRoleContext();

    const handleSignIn = async (e) => {
        e.preventDefault();

        const newUser = {
            id: 0,
            username: username,
            address: address,
            CNP: CNP,
            email: email,
            password: password,
        };

        console.log("Sign Up button clicked!");
        try {
            console.log("Adding user:", newUser);
            const response = await signUp(newUser);
            console.log("User added successfully:", response);
            
            setUsername("");
            setAddress("");
            setCNP("");
            setEmail("");
            setPassword("");

            navigate("/login");
        }
        catch (error) {
            console.error("Error adding user:", error);
        }
    }


    return (
        <div className="min-h-screen bg-gradient-to-r from-cyan-200 to-blue-500">
            <div className="max-w-lg mx-auto">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign Up</h1>
                    <form className="mb-4" onSubmit={handleSignIn}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                Address
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="address"
                                type="text"
                                placeholder="Address"
                                value={address}
            on                  onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="CNP">
                                CNP
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="CNP"
                                type="text"
                                placeholder="CNP"
                                value={CNP}
                                onChange={(e) => setCNP(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
