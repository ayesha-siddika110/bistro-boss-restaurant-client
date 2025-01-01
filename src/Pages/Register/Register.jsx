
import React from 'react';
import loginbaanner from '../../assets/assets/others/authentication.png'
import loginauth from '../../assets/assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { useForm } from "react-hook-form"
const Register = () => {
    const { register, handleSubmit,formState: { errors }, } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div style={{
            backgroundImage: `url(${loginbaanner})`,

            backgroundSize: 'cover'

        }} className='flex items-center justify-center md:h-[100vh]'>
            <div className='border-2 flex lg:flex-row md:flex-row flex-col  items-center justify-center w-[90%] md:w-[80%] md:h-[80%] shadow-slate-800 shadow-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='lg:w-[50%] space-y-3 flex flex-col justify-center md:pl-20'>
                    <p className='text-3xl font-semibold text-center md:w-full md:max-w-xs'>Register</p>
                    <div>
                        <p>Name : </p>
                        <input {...register("name")} name='name' type="text" placeholder="Type here" className="input input-bordered w-full md:max-w-xs" />
                    </div>
                    <div>
                        <p>Photo : </p>
                        <input {...register("Photo")} name='Photo' type="text" placeholder="Type here" className="input input-bordered w-full md:max-w-xs" />
                    </div>
                    <div>
                        <p>Email : </p>
                        <input type="text" {...register("email", {pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})} name='email' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        {errors.email && (
                            <p className='text-red-600' role="alert">please input valid syntext email</p>
                        )}
                    </div>
                    <div>
                        <p>Password : </p>
                        <input type="password" {...register("password", { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/ })} name='password' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        {errors.password && (
                            <p className='text-red-600' role="alert">password must be 6 character, one uppercase,one lowercase, one special character and one number</p>
                        )}
                    </div>

                    <button className='bg-[#D1A054] w-full max-w-xs py-3 rounded-lg text-center font-semibold text-white'>Register</button>
                    <Link to="/login" className='text-[#9c712f] hover:underline cursor-pointer'>Already registered? Go to log in</Link>
                    <p className='text-black text-center w-full max-w-xs'>Or sign in with</p>
                    <div className='w-full max-w-xs flex items-center justify-center gap-4'>
                        <FaFacebookF className='text-3xl border border-black p-1 rounded-full' />
                        <FaGoogle className='text-3xl border border-black p-1 rounded-full' />
                        <FaGithub className='text-3xl border border-black p-1 rounded-full' />
                    </div>
                </form>
                <div className='w-[50%]'>
                    <img src={loginauth} className='w-[500px] m-auto' alt="" />

                </div>

            </div>

        </div>
    );
};

export default Register;