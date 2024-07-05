/* eslint-disable react/prop-types */
import { Bookmark, TvMinimalPlay, Users, UsersRound } from "lucide-react";
import user from "../assets/user.png"
import LinkASide from "./LinkASide";

const ASide = ({play}) => {
    return (
        <div className={`py-3 pl-2 ${play==="aside" ? "block" : "hidden"} md:block fixed left-0`}>
            <LinkASide url={""} title={"Abdo Ahmed"} com={<img src={user} alt="image profile" className="rounded-full w-7 h-7"/>}/>
            <LinkASide url={""} title={"Friends"} com={<Users className="w-6 h-6 text-blue-500"/>}/>
            <LinkASide url={""} title={"Saved"} com={<Bookmark className="w-6 h-6 text-blue-500"/>}/>
            <LinkASide url={""} title={"Groups"} com={<UsersRound className="w-6 h-6 text-blue-500"/>}/>
            <LinkASide url={""} title={"Video"} com={<TvMinimalPlay className="w-6 h-6 text-blue-500"/>}/>
        </div>
    );
}

export default ASide;
