// import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';
import toast from 'react-hot-toast';

const ShopCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item || {}
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const[,refetch] = useCart()

    const handleAddCart = (_id) => {
        console.log(_id)
        const itemData = {
            menuId: _id,
            buyeremail: user?.email,
            name,
            image,
            price,
            recipe

        }
        if (user && user?.email) {
            
            axiosSecure.post('/carts', itemData)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success('Add to Cart')
                    }
                    refetch()

                })
           
        } else {
            Swal.fire({
                title: "Please login",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                    
                }
            });


        }

    }

    return (
        <div className='space-y-4 border p-6 shadow-2xl'>
            <img className='h-[200px] w-full object-cover' src={image} alt="" />
            <div className='flex justify-between items-center text-xl font-semibold'>
                <p>{name}</p>
                <p className='text-orange-600'>{price}</p>
            </div>
            <p>{recipe}</p>
            <div className='flex justify-center items-center'>

                <Link onClick={() => handleAddCart(_id)} className='uppercase border-b-4 border-orange-600 bg-sky-100 hover:bg-black hover:text-orange-600 px-4 py-2 rounded-lg '>Add To Cart</Link>
            </div>

        </div>
    );
};

export default ShopCard;