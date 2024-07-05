/* eslint-disable react/prop-types */
import { Images, Laugh, Users, X } from "lucide-react";
import user from "../assets/user.png"
import { useState } from "react";

const ModalPost = ({display,setDisplay}) => {
    const [body,setBody] = useState("")
    const [photo,setPhoto] = useState("")
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(body)
        console.log(photo)
    }
    return (
        <div className={`relative z-10 ${display}`} aria-labelledby="modal-title" role="dialog">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" aria-hidden="true"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex items-center justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                    <div className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl w-[85%] sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="relative bg-white dark:bg-[#242526]">
                            <h1 className="py-3 text-xl font-bold text-center border-b dark:text-gray-300">Create post</h1>
                            <div className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <img src={user} alt="" className="rounded-full w-9 h-9"/>
                                    <div>
                                        <p className="font-semibold dark:text-gray-300">Abdo Ahmed</p>
                                        <p className="flex items-center gap-1 p-2 py-0 text-sm bg-gray-200 rounded">
                                            <Users size={13} />
                                            Friends
                                        </p>
                                    </div>
                                </div>
                                <form action="" onSubmit={(e)=>onSubmit(e)} className="pt-3">
                                    <textarea onInput={(e)=>setBody(e.target.value)} placeholder="What&apos;s on your mind, Abdo?" name="post" className="w-full h-20 dark:bg-[#242526] dark:text-white outline-none resize-none placeholder:text-lg"></textarea>
                                    {
                                        photo?.name &&
                                        <div className="p-2 my-3 relative overflow-y-scroll border rounded-md h-44">
                                            {
                                                photo?.type?.split("/")[0] === "image" ?
                                                <img src={URL.createObjectURL(photo)} alt="post" className="w-full rounded-md"/>
                                                : <video src={URL.createObjectURL(photo)} className="w-full h-full" controls>
                                                </video>
                                            }
                                            <button onClick={()=>setPhoto("")} className="absolute p-1 bg-white rounded-full top-2 right-3">
                                                <X size={20} className="text-gray-500"/>
                                            </button>
                                        </div>
                                    }
                                    <div>
                                        <label htmlFor="add">
                                            <div className="flex justify-between w-full px-3 py-4 border rounded-md cursor-pointer">
                                                <p className="dark:text-gray-300">Add to your post</p>
                                                <div className="flex gap-3">
                                                    <Images size={25} className="text-green-500"/>
                                                    <Laugh size={25} className="text-yellow-500"/>
                                                </div>
                                            </div>
                                        </label>
                                        <input type="file" onInput={(e)=>setPhoto(e.target.files[0])} name="add" id="add" className="hidden"/>
                                    </div>
                                    <button disabled={body.length > 0 || photo?.name?.length > 0 ? false : true} className={`${body.length > 0 || photo?.name?.length > 0 ? "text-white bg-blue-600" : "bg-gray-200 text-gray-400 cursor-not-allowed"} w-full py-[6px] font-semibold mt-4  rounded-md`}>
                                        Post
                                    </button>
                                </form>
                            </div>
                            <button onClick={()=>setDisplay("hidden")} className="absolute p-2 bg-gray-200 rounded-full top-2 right-3">
                                <X size={20} className="text-gray-500"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPost;
