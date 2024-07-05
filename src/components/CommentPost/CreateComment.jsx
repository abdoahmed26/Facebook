import { SendHorizontal } from "lucide-react";
import user from "../../assets/user.png"
import { useState } from "react";

const CreateComment = () => {
    const [comment,setComment] = useState("")
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(comment)
    }
    return (
        <div className="px-4 py-3 bg-white dark:bg-[#242526] flex gap-2 fixed bottom-0 w-full">
            <img src={user} alt="Profile Image" className="w-8 h-8 rounded-full"/>
            <div className="bg-gray-200 dark:bg-[#3a3b3c] p-2 px-3 rounded-md w-full">
                <form onSubmit={(e)=>onSubmit(e)} action="" className="flex">
                    <input type="text" onChange={(e)=>setComment(e.target.value)} placeholder="Write a public comment..." className="outline-none w-full bg-gray-200 dark:bg-[#3a3b3c] dark:text-white"/>
                    <button disabled={comment.length > 0 ? false : true} className={`${comment.length > 0 ? "text-blue-600" : "text-gray-400 cursor-not-allowed"}`}>
                        <SendHorizontal size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateComment;
