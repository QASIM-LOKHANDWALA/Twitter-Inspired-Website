import React, { useState } from "react";
import { assets } from "../assets/assets";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const loginSignupHandler = () => {
        setIsLogin(!isLogin);
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
                    <form action="" className="flex flex-col w-[80%]">
                        {!isLogin && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="outline-blue-300 border border-gray-800 px-3 py-1 rounded-full my-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="outline-blue-300 border border-gray-800 px-3 py-1 rounded-full my-2"
                                />
                            </>
                        )}

                        <input
                            type="text"
                            placeholder="Email"
                            className="outline-blue-300 border border-gray-800 px-3 py-1 rounded-full my-2"
                        />
                        <input
                            type="text"
                            placeholder="Password"
                            className="outline-blue-300 border border-gray-800 px-3 py-1 rounded-full my-2"
                        />
                        <button className="px-4 py-2 my-4 bg-zinc-950 hover:bg-zinc-900 text-white border-none rounded-full text-lg">
                            {isLogin ? "Login" : "Create Account"}
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
