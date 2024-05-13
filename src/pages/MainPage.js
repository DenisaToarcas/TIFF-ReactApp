import React from "react";
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }

    const handleSignup = () => {
        navigate('/signup');
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-cyan-200 to-blue-500">
            <div className="max-w-lg mx-auto">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Welcome to the Task Manager</h1>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleSignup}
                        >
                            Signup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}