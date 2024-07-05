import { useState } from "react";
import ASide from "../components/ASide";
import CreatePost from "../components/CreatePost";
import Header from "../components/Header";
import Story from "../components/Story";
import PostCom from "../components/PostCom";

const Home = () => {
    const [play,setPlay] = useState("")
    return (
        <div className="bg-[#f0f2f5] dark:bg-[#18191a]">
            <Header setPlay={setPlay}/>
            <div className="flex justify-between w-full gap-10">
                <div className="">
                    <ASide play={play}/>
                </div>
                <div className="pt-5">
                    <div className={`${play==="aside" ? "hidden" :"flex"} flex-col items-center justify-center gap-5`}>
                        <Story/>
                        <CreatePost/>
                        <PostCom/>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Home;
