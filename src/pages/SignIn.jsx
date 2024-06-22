import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const onSubmit = (data) => {
        console.log(data)
    }
    const date = new Date()
    return (
        <div className="bg-[#f0f2f5] py-10 flex justify-center items-center w-full">
            <div className="container">
                <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-blue-600 text-5xl font-bold mb-5">facebook</h1>
                        <div className="bg-white py-3 shadow-lg w-[300px] sm:w-[400px] rounded-md">
                            <div className="pb-3 border-b">
                                <h2 className="text-center font-bold text-2xl text-[#1c1e21]">Create a new account</h2>
                                <p className="text-center text-gray-600">It&apos;s quick and easy.</p>
                            </div>
                            <form action="" className="px-3 mt-4" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <input type="email" {...register("email",{required:true})} placeholder="Email address" className="py-2 px-2 w-full outline-none border rounded-md"/>
                                    {
                                        errors.email?.type ==="required" &&
                                        <p className="text-red-500 animate-bounce">Email is required</p>
                                    }
                                </div>
                                <div className="mt-3">
                                    <input type="password" {...register("password",{required:true})} placeholder="New password" className="py-2 px-2 w-full outline-none border rounded-md"/>
                                    {
                                        errors.password?.type ==="required" &&
                                        <p className="text-red-500 animate-bounce">Password is required</p>
                                    }
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="birth" className="text-gray-600 text-sm">Date of birth</label>
                                    <div className="grid grid-cols-3 gap-3 mt-1">
                                        <select name="day" {...register("day",{required:true})} className="px-1 py-1 border border-gray-400 rounded outline-none">
                                            {
                                                Array.from({length:31},(_,x)=>{
                                                    return x+1=== date.getDate() ? 
                                                    <option key={x+1} value={x+1} selected>{x+1}</option>
                                                    : <option key={x+1} value={x+1}>{x+1}</option>
                                                })
                                            }
                                        </select>
                                        <select name="month" {...register("month",{required:true})} className="px-1 py-1 border border-gray-400 rounded outline-none">
                                            {
                                                months.map((mon,x)=>{
                                                    return x===date.getMonth()?
                                                        <option key={x} value={mon} selected>{mon}</option>
                                                    :<option key={x} value={mon}>{mon}</option>
                                                })
                                            }
                                        </select>
                                        <select name="year" {...register("year",{required:true})} className="px-1 py-1 border border-gray-400 rounded outline-none">
                                            {
                                                Array.from({length:1131},(_,x)=>{
                                                    return date.getFullYear()-x >= 1905 ?
                                                    <option key={x} value={date.getFullYear()-x}>{date.getFullYear()-x}</option>
                                                    :null
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="mt-3">
                                        <input type="text" {...register("firstname",{required:true})} placeholder="First name" className="py-2 px-2 w-full outline-none border rounded-md"/>
                                        {
                                            errors.firstname?.type ==="required" &&
                                            <p className="text-red-500 animate-bounce">First name is required</p>
                                        }
                                    </div>
                                    <div className="mt-3">
                                        <input type="text" {...register("lastname",{required:true})} placeholder="Surname" className="py-2 px-2 w-full outline-none border rounded-md"/>
                                        {
                                            errors.lastname?.type ==="required" &&
                                            <p className="text-red-500 animate-bounce">Surname is required</p>
                                        }
                                    </div>
                                    <div className="mt-2">
                                        <label htmlFor="gender" className="text-gray-600 text-sm">Gender</label>
                                        <div className="grid grid-cols-2 gap-3 mt-1">
                                            <div className="border border-gray-400 rounded py-1 px-2 flex justify-between items-center">
                                                <label htmlFor="male" className="w-full">Male</label>
                                                <input type="radio" id="male" value="male" name="gender"{...register("gender",{required:true})} />
                                            </div>
                                            <div className="border border-gray-400 rounded py-1 px-2 flex justify-between items-center">
                                                <label htmlFor="female" className="w-full">Female</label>
                                                <input type="radio" id="female" value="female" name="gender" {...register("gender",{required:true})} />
                                            </div>
                                            {
                                                errors.gender?.type ==="required" &&
                                                <p className="text-red-500 animate-bounce">Gender is required</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-5 mb-2 px-3">
                                    <button className="p-6 py-1 text-center text-lg font-bold text-white bg-[#00a400] rounded-md">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                            <div className="text-center my-3 px-3">
                                <Link to={"/"} className="text-blue-500 hover:underline">Already have an account?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
