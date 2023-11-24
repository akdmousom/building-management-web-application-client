import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../FirebaseConfig/FirebaseConfig";

export const AuthContext = createContext('null');

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, (currentUser)=>{

            setUser(currentUser)
            setLoading(false)

        })

        return ()=>{
            return subscribe();
        }
    },[])

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const updateUserInfo = (name, img) =>{
        return updateProfile(auth.currentUser, {

            displayName: name,
            photoURL: img


        })
    }




    const contextValue ={
        user,
        loading,
        createUser,
        signIn,
        updateUserInfo

    }


    return (
        <AuthContext.Provider value={contextValue}>

            {children}
            
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;