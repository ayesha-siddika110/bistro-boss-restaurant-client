import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [loading ,setLoading] = useState(true)
    const [user ,setUser] = useState(null)
    



    //onAuthStateChanged
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false)
            setUser(currentUser)
            // if(currentUser?.email){

            // }
        })
        return ()=>{
            unSubscribe()
        }

    },[])
    console.log(user);
    




    const authInfo = {
        loading,
        user,
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;