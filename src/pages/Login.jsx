import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const [hidePass,setPass] = useState("password")
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="bg-[#f0f2f5] flex justify-center items-center h-[100vh] w-full">
            <div className="container">
                <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-blue-600 text-5xl font-bold mb-5">facebook</h1>
                        <div className="bg-white py-5 px-4 shadow-lg w-[300px] sm:w-[400px] rounded-md">
                            <h2 className="text-center text-lg mb-3">Log in to Facebook</h2>
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <input type="email" {...register("email",{required:true})} placeholder="Email address" className="py-2 px-2 w-full outline-none border rounded-md"/>
                                    {
                                        errors.email?.type ==="required" &&
                                        <p className="text-red-500 animate-bounce">Email is required</p>
                                    }
                                </div>
                                <div className="my-3">
                                    <div className="py-2 px-2 w-full border rounded-md flex justify-between">
                                        <input type={hidePass} {...register("password",{required:true})} placeholder="Password" className="w-full outline-none"/>
                                        {
                                            hidePass==="password" ?
                                            <EyeOff onClick={()=>setPass("text")} size={20} className="cursor-pointer"/>
                                            :<Eye onClick={()=>setPass("password")} size={20} className="cursor-pointer"/>
                                        }
                                    </div>
                                    {
                                        errors.password?.type ==="required" &&
                                        <p className="text-red-500 animate-bounce">Password is required</p>
                                    }
                                </div>
                                <button className="w-full p-2 text-center text-lg font-bold text-white bg-blue-500 rounded-md">
                                    Log in
                                </button>
                            </form>
                            <div className="text-center my-3">
                                <Link to={""} className="text-blue-500 hover:underline">Forgotten account?</Link>
                            </div>
                            <div className="text-center relative text-gray-500 after:w-full after:h-[1px] after:bg-gray-400 after:absolute after:top-1/2 after:translate-y-1/2 after:left-0">
                                <span className="border-white bg-white z-30 relative border-2 px-1 rounded-full">or</span>
                            </div>
                            <div className="text-center mt-4 mb-2">
                                <Link to={"/SignIn"} className="bg-[#42b72a] text-lg font-bold py-2 px-3 rounded-md text-white">
                                    Create new account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
