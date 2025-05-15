import React from "react";
import Avatar from "react-avatar";

import { MdOutlineModeComment, MdOutlineBookmarkBorder } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

const Tweet = ({ tweet }) => {
    return (
        <div className="border-b">
            <div>
                <div className="flex p-4">
                    <Avatar
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&s"
                        size="50"
                        round={true}
                    />
                    <div className="ml-2 w-full">
                        <div className="flex items-center">
                            <h1 className="font-bold">
                                {tweet?.userDetails[0].name}
                            </h1>
                            <p className="text-gray-500 text-sm ml-1">
                                @{tweet?.userDetails[0].username}
                            </p>
                        </div>

                        <div>
                            <p>{tweet?.description}</p>
                        </div>

                        <div className="flex justify-between my-2">
                            <div className="flex items-center">
                                <div className="p-2 hover:bg-blue-100 rounded-full cursor-pointer">
                                    <MdOutlineModeComment size="24px" />
                                </div>
                                <p>0</p>
                            </div>
                            <div className="flex items-center">
                                <div className="p-2 hover:bg-blue-100 rounded-full cursor-pointer">
                                    <IoMdHeartEmpty size="24px" />
                                </div>
                                <p>{tweet?.like?.length}</p>
                            </div>
                            <div className="flex items-center">
                                <div className="p-2 hover:bg-blue-100 rounded-full cursor-pointer">
                                    <MdOutlineBookmarkBorder size="24px" />
                                </div>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tweet;
