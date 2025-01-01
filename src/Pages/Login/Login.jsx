import React from 'react';
import loginbaanner from '../../assets/assets/others/authentication.png'
import loginauth from '../../assets/assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div style={{
            backgroundImage: `url(${loginbaanner})`,
            height: '100vh',
            backgroundSize: 'cover'

        }} className='flex items-center justify-center'>
            <div className='border-2 flex  items-center justify-center w-[80%] h-[80%] shadow-slate-800 shadow-2xl'>
                <div className='w-[50%]'>
                    <img src={loginauth} className='w-[500px] m-auto' alt="" />

                </div>
                <div className='w-[50%] space-y-3 flex flex-col justify-center pl-20'>
                    <p className='text-3xl font-semibold text-center w-full max-w-xs'>LOGIN</p>
                    <div>
                        <p>Email : </p>
                        <input type="email"  placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <p>Password : </p>
                        <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        {/* <p>Password : </p> */}
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <p>Reload Chaptcha : </p>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <Link className='bg-[#D1A054] w-full max-w-xs py-3 rounded-lg text-center font-semibold text-white'>Login</Link>
                    <Link to="/register" className='text-[#9c712f] hover:underline cursor-pointer'>New here? Create a New Account</Link>
                    <p className='text-black text-center w-full max-w-xs'>Or sign in with</p>
                    <div className='w-full max-w-xs flex items-center justify-center gap-4'>
                    <FaFacebookF className='text-3xl border border-black p-1 rounded-full' />
                    <FaGoogle className='text-3xl border border-black p-1 rounded-full' />
                    <FaGithub className='text-3xl border border-black p-1 rounded-full' />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;