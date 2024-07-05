import postImg from "../../assets/ImageOfPost.jpg"

const Comments = () => {
    return (
        <div className="px-4">
            <h1 className="text-gray-700 font-semibold dark:text-gray-300">All comments</h1>
            <div className="py-4 flex flex-col gap-4 mb-14">
                <div className="flex gap-2">
                    <img src={postImg} alt="Comment Image" className="w-8 h-8 rounded-full"/>
                    <div className="bg-gray-200 dark:bg-[#3a3b3c] p-2 px-3 rounded-md w-fit">
                        <h2 className="font-semibold dark:text-gray-200">Abdo Ahmed</h2>
                        <p className="dark:text-gray-200">Iam Frontend Developer</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={postImg} alt="Comment Image" className="w-8 h-8 rounded-full"/>
                    <div className="bg-gray-200 dark:bg-[#3a3b3c] p-2 px-3 rounded-md w-fit">
                        <h2 className="font-semibold dark:text-gray-200">Mohamed Aaref</h2>
                        <p className="dark:text-gray-200">Iam Backend Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;
