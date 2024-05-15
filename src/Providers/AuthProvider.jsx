import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"; 
import app from "../firebase.config";
import axios from "axios";
export const AuthContext= createContext(null);
const auth = getAuth(app);
const googleProvider= new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user,SetUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>
    {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>
    {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleLogin=()=>
    {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const updateUserProfile=(name,photo)=>
    {
        return updateProfile(auth.currentUser,
        {
            displayName:name,
            photoURL:photo
        })
    }

    
    const logOut=()=>
    {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            const userEmail=currentUser?.email || user?.email;
            const loggedUser={email:userEmail}
            SetUser(currentUser);
            setLoading(false);
            if(currentUser)
                {
                    
                    axios.post('https://jobnestbd.vercel.app/jwt',loggedUser,{withCredentials:true})
                    .then(res=>
                        {
                            
                        }
                    )
                }
                else{

                    axios.post('https://jobnestbd.vercel.app/logout',loggedUser,{withCredentials:true})
                                       .then(res=>{
                                        
                                       })
                }
        });
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo={user,createUser,updateUserProfile,signIn,googleLogin,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes=
{
    children:PropTypes.node
}