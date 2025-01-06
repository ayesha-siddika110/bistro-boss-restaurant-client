import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const SocialLogin = () => {
    const {signInWithGoogle} = useAuth()
    const axiosPublic = useAxiosPublic()
     const handleGoogleLogin =()=>{
            signInWithGoogle()
            .then(res=>{
                console.log(res);
                const userData = {
                    name : res.user?.displayName,
                    email: res.user?.email,
                    photo: res.user?.photoURL,
                }
                axiosPublic.post('/users', userData)
                .then(res=>{
                    console.log(res.data);
                    
                })
                toast.success('Succesfully Login')

                
            })
            .catch(err=>{
                console.log(err);
                
            })
        }
    return (
        <div className='w-full max-w-xs flex items-center justify-center gap-4'>
                    <FaFacebookF className='text-3xl border border-black p-1 rounded-full' />
                    <FaGoogle onClick={handleGoogleLogin} className='text-3xl border border-black p-1 rounded-full' />
                    <FaGithub className='text-3xl border border-black p-1 rounded-full' />
        </div>
    );
};

export default SocialLogin;