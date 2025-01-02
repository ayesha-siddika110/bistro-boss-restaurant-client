import React, { useContext, useEffect, useRef, useState } from 'react';
import loginbaanner from '../../assets/assets/others/authentication.png'
import loginauth from '../../assets/assets/others/authentication2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';


const Login = () => {
    const [isDisable,setDisable] = useState(true)
    const {loginUser} = useContext(AuthContext)
    const { register, handleSubmit,formState: { errors }, } = useForm()

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    
    const captchaRef = useRef()
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    const handleChaptcha =()=>{
        const captcha_value = captchaRef.current.value
        if(validateCaptcha(captcha_value)){
            setDisable(false)
        }else{
            setDisable(true)
        }
        

    }

    const onSubmit = (data) => {
        loginUser(data?.email , data?.password )
        .then(res=>{
            console.log(res);
            navigate(from, {replace: true})
            
        })
        .catch(err=>{
            console.log(err.message);
            
        })
        
    }
    // const regenerateCaptcha = () => {
    //     loadCaptchaEnginge(6); // Reload CAPTCHA
    //     captchaRef.current.value = ''; // Clear the input field
    //     setDisable(true); // Disable the button until validated again
    // };
    return (
        <div style={{
            backgroundImage: `url(${loginbaanner})`,
            
            backgroundSize: 'cover'

        }} className='flex items-center justify-center md:h-[100vh]'>
            <div className='border-2 flex lg:flex-row md:flex-row flex-col  items-center justify-center w-[90%] md:w-[80%] md:h-[90%]  shadow-slate-800 shadow-2xl'>
                <div className='md:w-[50%]'>
                    <img src={loginauth} className='w-[500px] m-auto' alt="" />

                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='md:w-[50%] space-y-3 flex flex-col justify-center md:pl-20'>
                    <p className='text-3xl font-semibold text-center w-full max-w-xs'>LOGIN</p>
                    <div>
                        <p>Email : </p>
                        <input {...register("email")} name="email" type="email"  placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <p>Password : </p>
                        <input {...register("password")} name='password' type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    
                    <div>
                        <label className='label'><LoadCanvasTemplate /></label>
                        <input onBlur={handleChaptcha} type="text" ref={captchaRef}  placeholder="Type here" className="input input-bordered w-full max-w-xs" /><br />
                        {/* <button className='p-1 px-3 bg-blue-600 text-white mt-2' >Validate</button> */}
                     
                    </div>
                    <button className={`bg-[#D1A054] w-full max-w-xs py-3 rounded-lg text-center font-semibold text-white  ${isDisable && 'cursor-not-allowed opacity-50'}`} >Login</button>
                    <Link to="/register" className='text-[#9c712f] hover:underline cursor-pointer'>New here? Create a New Account</Link>
                    <p className='text-black text-center w-full max-w-xs'>Or sign in with</p>
                    <div className='w-full max-w-xs flex items-center justify-center gap-4'>
                    <FaFacebookF className='text-3xl border border-black p-1 rounded-full' />
                    <FaGoogle className='text-3xl border border-black p-1 rounded-full' />
                    <FaGithub className='text-3xl border border-black p-1 rounded-full' />
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Login;