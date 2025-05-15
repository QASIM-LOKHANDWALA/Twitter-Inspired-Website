import React, { useState } from "react";
import { assets } from "../assets/assets";
import { USER_API_ENDPOINT } from "../utils/constants";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const loginSignupHandler = () => {
        setIsLogin(!isLogin);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(username, email, password, name);
        setIsLoading(true);
        try {
            if (isLogin) {
                const res = await axios.post(
                    `${USER_API_ENDPOINT}/login`,
                    {
                        email,
                        password,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (res.data && res.data.success) {
                    navigate("/");
                    toast.success(res.data.message);
                }
            } else {
                const res = await axios.post(
                    `${USER_API_ENDPOINT}/register`,
                    {
                        name,
                        email,
                        username,
                        password,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (res.data && res.data.success) {
                    setIsLogin(true);
                    toast.success(res.data.message);
                }
            }
        } catch (error) {
            console.log(`Error in Login page submitHandler : ${error}`);
            toast.error(error.response.data.message);
        }
        setIsLoading(false);
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="flex items-center justify-evenly w-[60%]">
                <div>
                    <img src={assets.logo} width="400px" alt="" />
                </div>
                <div>
                    <div className="my-5">
                        <h1 className="font-bold text-5xl">Happening Now</h1>
                    </div>
                    <h1 className="mt-4 mb-2 text-2xl font-bold">
                        {isLogin ? "Login" : "Register"}
                    </h1>
                    <form
                        onSubmit={submitHandler}
                        action=""
                        className="flex flex-col w-[80%]"
                    >
                        {!isLogin && (
                            <>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Name"
                                    className="outline-blue-300 border border-gray-800 px-3 py-1 rounded-full my-2"
                                />
                                <input
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    type="text"
                                    placeholder="Username"
                                    className="outline-blue-300 border border-gray-800 px-3 py-1 rounded-full my-2"
                                />
                            </>
                        )}

                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            className="outline-blue-300 border border-gray-800 px-3 py-1 rounded-full my-2"
                        />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            className="outline-blue-300 border border-gray-800 px-3 py-1 rounded-full my-2"
                        />
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="px-4 py-2 my-4 bg-zinc-950 hover:bg-zinc-900 text-white border-none rounded-full text-lg disabled:bg-zinc-600"
                        >
                            {isLoading
                                ? "Loading..."
                                : isLogin
                                ? "Login"
                                : "Create Account"}
                        </button>

                        <h1 className="text-center">
                            {isLogin
                                ? "Don't have an account?"
                                : "Already have an account?"}{" "}
                            <span
                                onClick={loginSignupHandler}
                                className="text-blue-800 hover:text-blue-500 font-semibold"
                            >
                                {!isLogin ? "Login" : "Register"}
                            </span>
                        </h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
