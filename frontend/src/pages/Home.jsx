import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import Feed from "../components/Feed";
import RightSideBar from "../components/RightSideBar";
import { Outlet } from "react-router-dom";
import useOtherUsers from "../hooks/useOtherUsers";
import { useSelector } from "react-redux";

const Home = () => {
    const { user, otherUsers } = useSelector((store) => store.user);
    useOtherUsers(user?._id);

    return (
        <div className="flex justify-between w-[80%] mx-auto">
            <LeftSideBar />
            <Outlet />
            <RightSideBar otherUsers={otherUsers} />
        </div>
    );
};

export default Home;
