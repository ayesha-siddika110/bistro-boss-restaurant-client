import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [loading ,setLoading] = useState(true)
    const [user ,setUser] = useState(null)
    const axiosPublic = useAxiosPublic()


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
    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }




    //onAuthStateChanged
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false)
            setUser(currentUser)
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        // console.log(res.data.token)
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                        
                    })
            }
            else{
                //TODO: remove token(if token stored in the client store in the local storage, caching, in memory)
                localStorage.removeItem('access-token')
            }
           
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
        signOutUser,
        signInWithGoogle
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;