import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import Feed from "../components/Feed";
import RightSideBar from "../components/RightSideBar";

const Home = () => {
    return (
        <div className="flex justify-between w-[80%] mx-auto">
            <LeftSideBar />
            <Feed />
            <RightSideBar />
        </div>
    );
};

export default Home;
