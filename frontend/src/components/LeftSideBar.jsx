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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LeftSideBar = () => {
    const { user } = useSelector((store) => store.user);

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
                <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer">
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
