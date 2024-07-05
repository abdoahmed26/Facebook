import { Images, Laugh, Video } from "lucide-react";
import user from "../assets/user.png"
import ModalPost from "./ModalPost";
import { useState } from "react";

const CreatePost = () => {
    const [display,setDisplay] = useState("hidden")
    return (
        <div className="p-3 px-4 bg-white dark:bg-[#242526] rounded-md shadow-lg w-full sm:w-[500px] cursor-pointer">
            <div className="flex items-center gap-2 pb-3 border-b">
                <img src={user} alt="" className="w-8 h-8 rounded-full"/>
                <button onClick={()=>setDisplay("block")} className="p-1 px-3 w-full text-start rounded-full text-[#b0b3b8] bg-[#f0f2f5] dark:bg-[#3a3b3c]">
                    What&apos;s on your mind, Abdo?
                </button>
            </div>
            <div className="flex justify-center pt-1">
                <div onClick={()=>setDisplay("block")} className="flex items-center justify-center gap-2 p-1 px-4 calcWidth rounded-md hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c]">
                    <Video size={30} className="text-red-500"/>
                    <p className="text-[#b0b3b8] font-semibold">Video</p>
                </div>
                <div onClick={()=>setDisplay("block")} className="flex items-center justify-center gap-2 p-1 px-4 calcWidth rounded-md hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c]">
                    <Images size={25} className="text-green-500"/>
                    <p className="text-[#b0b3b8] font-semibold">Photo</p>
                </div>
                <div onClick={()=>setDisplay("block")} className="sm:flex items-center hidden justify-center gap-2 p-1 px-4 calcWidth rounded-md hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c]">
                    <Laugh size={25} className="text-yellow-500"/>
                    <p className="text-[#b0b3b8] font-semibold">Feeling</p>
                </div>
            </div>
            <ModalPost display={display} setDisplay={setDisplay}/>
        </div>
    );
}

export default CreatePost;
