import inititializeAuthentication from "../../Firebase/Firebase.init";
import {getAuth,signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { useEffect, useState } from "react";

inititializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [email,setEmail]= useState({})
    const [password, setPassword] = useState({})
    const [name,setName] = useState({})
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
            
    }

    //get currently signed in user on state changed
    //firebase observer take trace of user sign in  or out
    useEffect(() => {
      const unsubscribe =   onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
      })
        return unsubscribe;
    },[])

    const createNewUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
        })
    }

    const signInUsingEmail = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
            setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
        })
    }

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                //if logout, user empty
                setUser({});
        })
    }
    return {
        error, user, email, password,name,
        setEmail,setPassword,setName,
        signInUsingGoogle,
        createNewUser,
        signInUsingEmail,
        userSignOut
    }

}

export default useFirebase;