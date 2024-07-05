import { Plus } from "lucide-react";

const Story = () => {
    return (
        <div className="p-2 bg-white dark:bg-[#242526] rounded-md shadow-lg w-full sm:w-[550px] cursor-pointer">
            <div className="flex items-center gap-3 p-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-[#3a3b3c]">
                <div className="bg-[#ebf5ff] p-2 rounded-full">
                    <Plus size={20} className="text-blue-500"/>
                </div>
                <div>
                    <h1 className="mb-0 text-[17px] font-medium dark:text-gray-300">Create Story</h1>
                    <span className="text-gray-600 dark:text-gray-400">Share a photo or write something.</span>
                </div>
            </div>
        </div>
    );
}

export default Story;