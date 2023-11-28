import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../FirebaseConfig/FirebaseConfig";
import useAxios from "../Hooks/Axios/useAxios";

export const AuthContext = createContext('null');

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [userEmail, setuserEmail] = useState();
    const [loading, setLoading] = useState(true);
    const Axios = useAxios();

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, (currentUser)=>{

            setUser(currentUser)
            if (currentUser) {
                
                setuserEmail(currentUser.email)
                const userEmail = {email: currentUser.email}
                Axios.post('/jwt', userEmail)
                .then(res => {
                    if (res.data.token) {

                        localStorage.setItem('accessToken', res.data.token)
                        
                    }
                })
                
            }else{
                localStorage.removeItem('accessToken')
            }

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

    const logOut = () => {
        return signOut(auth)
    }




    const contextValue ={
        user,
        loading,
        createUser,
        signIn,
        updateUserInfo,
        logOut,
        userEmail

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