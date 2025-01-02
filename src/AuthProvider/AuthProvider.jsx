import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [loading ,setLoading] = useState(true)
    const [user ,setUser] = useState(null)


    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile = (updateData)=>{
        return updateProfile(auth.currentUser, updateData)
    }
    const signOutUser =()=>{
        return signOut(auth)
    }




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
        loginUser,
        createUser,
        updateUserProfile,
        signOutUser
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;