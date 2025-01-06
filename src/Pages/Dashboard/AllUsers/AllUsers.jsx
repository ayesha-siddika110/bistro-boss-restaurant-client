import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Heading from '../../../componants/Share/Heading/Heading';
import { FaTrash, FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [],refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization : `bearer ${localStorage.getItem('access-token')}`
                }
            });
            
            
            return res.data
        }
    })
    // console.log(users)
    const handleAdminUser =(user)=>{
        Swal.fire({
            title: "Make Admin?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make Admin!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.patch(`/users/admin/${user?._id}`)
              .then(res=>{
                  console.log(res.data);
                if(res.data.modifiedCount > 0){
                    
                    refetch();
                    Swal.fire({
                        title: "Updated",
                        text: `${user?.name} in now an admin`,
                        icon: "success"
                      });
                }
              })
            }
          });

    }

    const handleDeleteItem =(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/users/${id}`)
              .then(res=>{
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
              })
            }
          });

    }

    return (
        <div className='bg-slate-100'>
            <Heading subHeading={`How many??`} heading={`manage all users`}></Heading>

            {/* table starts */}
            <div className='w-[85%] m-auto bg-white p-8'>
                <p className='text-4xl font-semibold pb-4'>Total Users : {users.length}</p>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-orange-400 text-white text-base rounded-full'>
                            <tr className='rounded-full'>
                                <th>#</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users?.map((user,index)=><tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td className=' flex py-6'>{
                                    user?.role === 'admin'? 'admin' : <FaUsers onClick={()=>handleAdminUser(user)} className='bg-orange-400 h-9 cursor-pointer w-[32px] p-2 rounded-lg text-white' />
                                }</td>
                                <td><FaTrashAlt onClick={()=>handleDeleteItem(user._id)} className='bg-red-600 h-9 cursor-pointer w-[32px] p-[10px] rounded-lg text-white' /></td>
                            </tr>)
                            }
                           
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default AllUsers;