/* eslint-disable react/prop-types */
import { Bookmark, X } from "lucide-react";

const DailogPost = ({display}) => {
    return (
        <div className={`bg-gray-100 dark:bg-[#18191a] ${display} w-[200px] sm:w-[300px] mt-1 drop-shadow-xl p-2 rounded-md absolute top-full right-0
        after:w-0 after:h-0 after:absolute after:-top-5 after:right-0 after:border-[10px] after:border-transparent after:border-b-gray-500`}>
            <div className="flex items-start gap-2 p-2 rounded-md cursor-pointer border-b hover:bg-white dark:hover:bg-[#3a3b3c]">
                <Bookmark size={22} className="text-black dark:text-white mt-2"/>
                <div>
                    <h2 className="font-semibold text-black dark:text-white">Save Post</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Add this to your saved items.</p>
                </div>
            </div>
            <div className="flex items-start gap-2 p-2 mt-2 rounded-md cursor-pointer hover:bg-white dark:hover:bg-[#3a3b3c]">
                <div className="bg-black/90 dark:bg-white rounded mt-2 px-[2px]">
                    <X size={18} className="text-white dark:text-black"/>
                </div>
                <div>
                    <h2 className="font-semibold text-black dark:text-white">Hide Post</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">See fewer posts like this.</p>
                </div>
            </div>
        </div>
    );
}

export default DailogPost;