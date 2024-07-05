import { Ellipsis, Forward, MessageCircle, ThumbsUp, X } from "lucide-react";
import postProfile from "../assets/postImage.jpg"
import postImg from "../assets/ImageOfPost.jpg"
import DailogPost from "./DailogPost";
import { useState } from "react";
import SharePost from "./SharePost";
import MainCommentDailog from "./CommentPost/MainCommentDailog";

const PostCom = () => {
    const [display,setPlay] = useState("hidden")
    const [appear,setAppear] = useState("hidden")
    const [displayComment,setDisplayComment] = useState("hidden")
    return (
        <div className="p-3 px-4 bg-white dark:bg-[#242526] rounded-md shadow-lg w-full sm:w-[500px]">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={postProfile} alt="postProfile" className="w-8 h-8 rounded-full" />
                    <div>
                        <div className="flex gap-1">
                            <h1 className="font-semibold dark:text-gray-200 hover:underline">ماجيكانو</h1>
                            <button className="text-blue-600 font-semibold hover:underline">Follow</button>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">27 June at 02:55</p>
                    </div>
                </div>
                <div className="flex gap-3 text-gray-600 dark:text-gray-400">
                    <div className="relative">
                        <Ellipsis size={25} onClick={()=>setPlay(display==="hidden"?"block":"hidden")} className="cursor-pointer"/>
                        <DailogPost display={display}/>
                    </div>
                    <X size={25} className="cursor-pointer"/>
                </div>
            </div>
            <p className="pl-4 py-1 dark:text-gray-200 border-l-4 border-gray-300 dark:border-gray-500">
                You fought FIFA in 2020 when you refused to wear the gay badge and now you pay the price for FIFA
                I don&apos;t care legend
            </p>
            <div className="mt-4">
                <img src={postImg} alt="postImg" className="w-full"/>
            </div>
            <div className="text-gray-500 dark:text-gray-400 flex justify-between py-2 border-b border-b-gray-300">
                <p className="flex gap-1">
                    <span className="p-1 bg-blue-600 rounded-full">
                        <ThumbsUp size={15} className="text-white"/>
                    </span>3.8K
                </p>
                <div className="flex gap-2">
                    <button className="flex items-center">
                        4.1K
                        <MessageCircle size={20}/>
                    </button>
                    <button className="flex items-center">
                        242
                        <Forward size={25}/>
                    </button>
                </div>
            </div>
            <div className="pt-1 flex">
                <button className="calcWidth py-1 rounded-md flex justify-center gap-2 items-center text-gray-600 dark:text-gray-400 hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c]">
                    <ThumbsUp size={20}/>
                    Like
                </button>
                <button onClick={()=>setDisplayComment("block")} className="calcWidth py-1 rounded-md flex justify-center gap-2 items-center text-gray-600 dark:text-gray-400 hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c]">
                    <MessageCircle size={20}/>
                    Comment
                </button>
                <button  onClick={()=>setAppear(appear==="hidden"?"block":"hidden")} className="calcWidth relative py-1 rounded-md flex justify-center gap-2 items-center text-gray-600 dark:text-gray-400 hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c]">
                    <Forward size={20}/>
                    Share
                    <SharePost appear={appear}/>
                </button>
            </div>
            <MainCommentDailog displayComment={displayComment} setDisplayComment={setDisplayComment} />
        </div>
    );
}

export default PostCom;
