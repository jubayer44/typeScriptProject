import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.Config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';

interface AppContextInterface {
    user: any;
    signUp: (email: string, password: string) => any;
    signIn: (email: string, password: string) => any;
  }

const auth = getAuth(app);
export const AuthContext = createContext({} as AppContextInterface);


type CardProps = {
    children: React.ReactNode;
  };

const AuthProvider = ({children}: CardProps) => {
    const [user, setUser] = useState<React.SetStateAction<{}>>({});

const signUp = (email: string, password: string)=> {
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
        console.log(result);
    })
    .catch(err => console.error(err));
};

const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
};



useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(()=> currentUser)
        console.log(currentUser);
    })
    return () => {
        unsubscribe();
    }
}, [])
const authInfo = {user, signUp, signIn}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;