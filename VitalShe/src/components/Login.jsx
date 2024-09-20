import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simulating login action
        setIsLoggedIn(true);
        navigate('/calendar'); // Redirect to calendar on successful login
    };

    return (
        <div className=" h-1/3 w-[90%] border-white border text-xl text-white flex items-center justify-center flex-col gap-10">
            <h2>Login  Here</h2>
            <button onClick={handleLogin} className="login-button botder border-white bg-black shadow-lg px-2 py-1 text-white flex items-center justify-center  text-">
                Login
            </button>
        </div>
    );
}

export default Login;
