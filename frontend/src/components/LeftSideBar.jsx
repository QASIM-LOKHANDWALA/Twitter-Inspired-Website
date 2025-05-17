import React from "react";
import { assets } from "../assets/assets";

import {
    MdOutlineHome,
    MdOutlineExplore,
    MdNotificationsNone,
    MdFavoriteBorder,
    MdLogout,
} from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constants";
import toast from "react-hot-toast";
import { getLogoutCleared, getUser } from "../redux/userSlice";

const LeftSideBar = () => {
    const { user } = useSelector((store) => store.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_ENDPOINT}/logout`);
            dispatch(getLogoutCleared());
            toast.success(res?.data?.message);
            navigate("/login");
        } catch (error) {
            console.log(`Error in logoutHandler : ${error}`);
        }
    };

    return (
        <div className="w-[20%]">
            <div>
                <img
                    className="ml-4"
                    width={"40px"}
                    src={assets.logo}
                    alt="logo"
                />
            </div>

            <div className="">
                <Link
                    to="/"
                    className="flex items-center my-2 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer"
                >
                    <MdOutlineHome size="24px" />
                    <h1 className="font-semibold text-lg ml-2">Home</h1>
                </Link>
                <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer">
                    <MdOutlineExplore size="24px" />
                    <h1 className="font-semibold text-lg ml-2">Explore</h1>
                </div>
                <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer">
                    <MdNotificationsNone size="24px" />
                    <h1 className="font-semibold text-lg ml-2">Notification</h1>
                </div>
                <Link
                    to={`/profile/${user?._id}`}
                    className="flex items-center my-2 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer"
                >
                    <FaRegCircleUser size="24px" />
                    <h1 className="font-semibold text-lg ml-2">Profile</h1>
                </Link>
                <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer">
                    <MdFavoriteBorder size="24px" />
                    <h1 className="font-semibold text-lg ml-2">Favorites</h1>
                </div>
                <div
                    onClick={logoutHandler}
                    className="flex items-center my-2 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer"
                >
                    <MdLogout size="24px" />
                    <h1 className="font-semibold text-lg ml-2">Logout</h1>
                </div>
                <button className="px-4 py-2 border-none text-lg bg-black text-white w-full rounded-full font-bold">
                    Post
                </button>
            </div>
        </div>
    );
};

export default LeftSideBar;
