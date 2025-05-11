import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import Feed from "../components/Feed";
import RightSideBar from "../components/RightSideBar";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex justify-between w-[80%] mx-auto">
            <LeftSideBar />
            <Outlet />
            <RightSideBar />
        </div>
    );
};

export default Home;
