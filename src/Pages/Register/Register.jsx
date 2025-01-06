
import { useContext } from 'react';
import loginbaanner from '../../assets/assets/others/authentication.png'
import loginauth from '../../assets/assets/others/authentication2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { toast } from 'react-toastify';
import SocialLogin from '../../componants/SocialLogin/SocialLogin';
const Register = () => {
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const { register, handleSubmit,formState: { errors }, } = useForm()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    // console.log(location.state?.from?.pathname);
    const axiosPublic = useAxiosPublic()
    
    const onSubmit = (data) => {
        createUser(data?.email , data?.password )
        .then(res=>{
            console.log(res);
            const updatedatas = {
                displayName : data?.name,
                photoURL : data?.photo,
            }
            updateUserProfile(updatedatas)
            .then(res=>{
                console.log(res);
                const userData = {
                    name : data?.name,
                    email: data?.email,
                    photo: data?.photo,
                }
                axiosPublic.post('/users', userData)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.insertedId){
                        toast.success('Successfully Register & save to database')
                    }
                    
                })
                // reset()
                navigate(from, {replace: true})
                
            })
            .catch(err=>{
                console.log(err);
                
            })
            
        })
        .catch(err=>{
            console.log(err.message);
            
        })
        
    }
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
                        <input {...register("photo")} name='photo' type="text" placeholder="Type here" className="input input-bordered w-full md:max-w-xs" />
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
                    <SocialLogin></SocialLogin>
                </form>
                <div className='w-[50%]'>
                    <img src={loginauth} className='w-[500px] m-auto' alt="" />

                </div>

            </div>

        </div>
    );
};

export default Register;