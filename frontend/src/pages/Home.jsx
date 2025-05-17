import React, { useEffect } from "react";
import LeftSideBar from "../components/LeftSideBar";
import Feed from "../components/Feed";
import RightSideBar from "../components/RightSideBar";
import { Outlet, useNavigate } from "react-router-dom";
import useOtherUsers from "../hooks/useOtherUsers";
import { useSelector } from "react-redux";
import useMyTweets from "../hooks/useMyTweets";

const Home = () => {
    const { user, otherUsers } = useSelector((store) => store.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, []);

    useOtherUsers(user?._id);
    useMyTweets();

    return (
        <div className="flex justify-between w-[80%] mx-auto">
            <LeftSideBar />
            <Outlet />
            <RightSideBar otherUsers={otherUsers} />
        </div>
    );
};

export default Home;
