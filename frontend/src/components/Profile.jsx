import React from "react";
import { MdArrowBack } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Avatar from "react-avatar";
import useUserProfile from "../hooks/useUserProfile";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constants";
import toast from "react-hot-toast";
import { getFollowRefresh } from "../redux/userSlice";

const Profile = () => {
    const { user, profile } = useSelector((store) => store.user);
    const { id } = useParams();
    const dispatch = useDispatch();
    useUserProfile(id);

    const followHandler = async () => {
        try {
            const res = await axios.post(
                `${USER_API_ENDPOINT}/follow/${id}`,
                {
                    id: user?._id,
                },
                {
                    withCredentials: true,
                }
            );
            console.log("========== followHandler ==========");
            console.log(res);
            dispatch(getFollowRefresh(id));
            toast.success(res?.data?.message);
        } catch (error) {
            console.log(`Error in followHandler : ${error}`);
        }
    };

    return (
        <div className="w-[50%] border-l border-r border-gray-200">
            <div className="relative">
                <div className="flex items-center py-2">
                    <Link
                        to="/"
                        className="p-2 rounded-full cursor-pointer hover:bg-gray-100"
                    >
                        <MdArrowBack size="24px" />
                    </Link>
                    <div className="ml-4">
                        <h1 className="font-bold text-lg">{profile?.name}</h1>
                        <p className="text-sm text-gray-500">10 posts</p>
                    </div>
                </div>
                <img
                    className="w-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1v7Hp3SQw7rYKV8kOErUg6ZDnoAf0iukdbQ&s"
                    alt=""
                />
                <div className="absolute top-60 left-4 border-4 border-white rounded-full">
                    <Avatar
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&s"
                        size="120"
                        round={true}
                    />
                </div>
                <div className="text-right m-4">
                    {user?._id == profile?._id ? (
                        <button className="px-2 py-1 rounded-full border border-gray-400 hover:bg-gray-200">
                            Edit Profile
                        </button>
                    ) : (
                        <button
                            onClick={followHandler}
                            className="px-2 py-1 bg-black text-white rounded-full border border-gray-400 hover:bg-gray-900"
                        >
                            {user?.following.includes(id)
                                ? "Unfollow"
                                : "Follow"}
                        </button>
                    )}
                </div>
                <div className="m-4">
                    <h1 className="font-bold text-xl">{profile?.name}</h1>
                    <p>@{profile?.username}</p>
                </div>
                <div className="m-4 text-sm">
                    <p>
                        Just a demo user for trial, nothing interesting here. 😁
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
