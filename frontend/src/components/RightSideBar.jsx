import React from "react";
import Avatar from "react-avatar";

import { IoMdSearch } from "react-icons/io";

const RightSideBar = ({ otherUsers }) => {
    return (
        <div className="w-[20%]">
            <div className="p-2 bg-gray-100 rounded-full outline-none flex items-center w-full">
                <IoMdSearch size="24px" />
                <input
                    type="text"
                    className=" bg-transparent outline-none px-2"
                    placeholder="Search"
                />
            </div>

            <div className="p-2 bg-gray-100 rounded-2xl my-4">
                <h1 className="font-bold text-lg">Who to follow</h1>

                {otherUsers?.map((user) => {
                    return (
                        <div
                            key={user._id}
                            className="flex items-center justify-between my-3"
                        >
                            <div className="flex">
                                <div>
                                    <Avatar
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&s"
                                        size="50"
                                        round={true}
                                    />
                                </div>
                                <div className="ml-2">
                                    <h1 className="font-bold">{user.name}</h1>
                                    <p className="text-sm">@{user.username}</p>
                                </div>
                            </div>
                            <div>
                                <button className="px-4 py-1 bg-black text-white rounded-full">
                                    Profile
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RightSideBar;
