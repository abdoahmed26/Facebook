/* eslint-disable react/prop-types */

import { X } from "lucide-react";
import Post from "./Post";
import Comments from "./Comments";
import CreateComment from "./CreateComment";

const MainCommentDailog = ({displayComment,setDisplayComment}) => {
    return (
        <div className={`relative z-10 ${displayComment}`} aria-labelledby="modal-title" role="dialog">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" aria-hidden="true"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex items-center justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                    <div className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl w-[85%] sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="relative bg-white dark:bg-[#242526]">
                            <h1 className="py-3 text-xl font-bold text-center border-b dark:text-gray-300">Comments post</h1>
                            <div className="h-[80vh] overflow-auto">
                                <Post/>
                                <Comments/>
                                <CreateComment/>
                            </div>
                            <button onClick={()=>setDisplayComment("hidden")} className="absolute p-2 bg-gray-200 rounded-full top-2 right-3">
                                <X size={20} className="text-gray-500"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainCommentDailog;
