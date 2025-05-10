import React from "react";
import Avatar from "react-avatar";
import { MdOutlineImage } from "react-icons/md";

const CreatePost = () => {
    return (
        <div className="w-[100%]">
            <div>
                <div className="flex items-center justify-evenly border border-b border-gray-100">
                    <div className="hover:bg-gray-100  w-full cursor-pointer text-center px-4 py-3">
                        <h1 className="font-semibold text-gray-700 text-lg">
                            For You
                        </h1>
                    </div>
                    <div className="hover:bg-gray-100 w-full cursor-pointer text-center px-4 py-3">
                        <h1 className="font-semibold text-gray-700 text-lg">
                            Following
                        </h1>
                    </div>
                </div>
                <div>
                    <div className="flex items-center p-4">
                        <div>
                            <Avatar
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&s"
                                size="50"
                                round={true}
                            />
                        </div>
                        <input
                            className="w-full outline-none border-none text-lg ml-2"
                            type="text"
                            placeholder="What is happening?"
                        />
                    </div>
                    <div className="flex items-center justify-between p-4 border-b border-gray-300">
                        <div>
                            <MdOutlineImage size={"30px"} />
                        </div>
                        <button className="bg-black px-4 py-1 text-lg text-white text-center border-none rounded-full">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
