
import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup,
  updateProfile 
} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    
    const create = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
   
    const googleSignin = () => {
        return signInWithPopup(auth, provider);
    };

    // Add function to update user profile
    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const usersinfo = {
        create,
        user,
        signin,
        googleSignin,
        updateUserProfile,
        loading
    }

    return (
        <Authcontext.Provider value={usersinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;