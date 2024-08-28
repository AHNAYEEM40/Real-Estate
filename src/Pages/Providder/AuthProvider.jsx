import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
export  const AuthContext=createContext(null);
const auth =getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [Loading,setLoading]=useState(true)

    const createUser =(email,password) =>{
        // Loading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const LoginUser =(email,password) =>{
        // Loading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
   
    const logOut =() =>{
        // Loading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const UnSubscribe =onAuthStateChanged( auth, currentUser =>{
            console.log('user in the state changed',currentUser);
            setLoading(false)
            setUser(currentUser)
        });
        return () =>{
            UnSubscribe();
        }
    },[]);
    
    const authInfo ={
      user,
      Loading,
      createUser,
      LoginUser,
      logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;