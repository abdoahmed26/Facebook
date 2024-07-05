/* eslint-disable react/prop-types */
import face from "../assets/facebook-icon.png"
import user from "../assets/user.png"
import { AlignJustify, Bell, CircleUserRound, House, Plus, Search, Users } from 'lucide-react';
import '../App.css'
import { useState } from "react";

const Header = ({setPlay}) => {
    const [active,setActive] = useState(0)
    const dark = ()=>{
        document.querySelector("html").classList.toggle("dark")
    }
    return (
        <div className="bg-white dark:bg-[#242526] border-b dark:border-gray-600 shadow-lg flex justify-center w-full sticky top-0">
            <div className="w-full px-3">
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 py-2">
                        <img src={face} alt="icon" className="w-10 h-10"/>
                        <form action="">
                            <div className="bg-gray-100 dark:bg-[#3a3b3c] flex items-center gap-2 py-2 px-3 rounded-full">
                                <label htmlFor="search">
                                    <Search size={15} className="text-gray-600 dark:text-gray-400"/>
                                </label>
                                <input type="search" name="search" placeholder="Search Facebook" id="search" className="bg-gray-100 dark:bg-[#3a3b3c] dark:text-white outline-none w-16 lg:w-full"/>
                            </div>
                        </form>
                    </div>
                    <div className="hidden gap-2 sm:flex">
                        <button onClick={()=>{
                            setActive(0)
                            setPlay("home")
                        }} className={`${active=== 0 ? "active" : "text-gray-500 dark:text-gray-300"} h-full sm:w-[70px] md:w-[100px] relative py-2  flex justify-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-700`}>
                            <House size={25} />
                        </button>
                        <button onClick={()=>setActive(1)} className={`${active=== 1 ? "active" : "text-gray-500 dark:text-gray-300"} h-full sm:w-[70px] md:w-[100px] relative py-2  flex justify-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-700`}>
                            <Users size={25} />
                        </button>
                        <button onClick={()=>setActive(2)} className={`${active=== 2 ? "active" : "text-gray-500 dark:text-gray-300"} h-full sm:w-[70px] md:w-[100px] relative py-2  flex justify-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-700`}>
                            <CircleUserRound size={25} />
                        </button>
                        <button onClick={()=>{
                            setActive(3)
                            setPlay("aside")
                        }} className={`${active=== 3 ? "active" : "text-gray-500 dark:text-gray-300"} h-full sm:w-[70px] md:w-[100px] md:hidden relative py-2  flex justify-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-700`}>
                            <AlignJustify size={25} />
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-gray-200 dark:bg-[#3a3b3c] dark:text-gray-300 h-full hidden xl:block py-1 px-3 rounded-full">
                            Find friends
                        </button>
                        <button className="bg-gray-200 dark:bg-[#3a3b3c] dark:text-gray-300 xl:hidden py-[8px] px-2 rounded-full">
                            <Plus size={20} />
                        </button>
                        <button className="bg-gray-200 dark:bg-[#3a3b3c] dark:text-gray-300 py-[8px] px-2 rounded-full">
                            <Bell size={20} />
                        </button>
                        <button onClick={()=>dark()} className="border rounded-full">
                            <img src={user} alt="" className="w-8 h-8 rounded-full"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;