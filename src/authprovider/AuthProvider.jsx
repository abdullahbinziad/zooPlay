import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut  } from "firebase/auth";
import { app } from "../firebase/Firebase.config";


export const UserContext= createContext(null)
const AuthProvider = ({children}) => {
  const[loading,setLoading] = useState(true)
// user state.
const [user,setUser]= useState(null)

console.log(user);
//firebase
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

//const handleSignUp with email password 
const handleSignUpWithEmailPass=(email,password)=>{
  setLoading(true)
  return  createUserWithEmailAndPassword(auth, email, password)
}

const updateUsersProfile =(name,image)=>{
  setLoading(true)
 return updateProfile(auth.currentUser, {displayName: name ,photoURL: image})
}
const handleSignInWithEmailPass=(email,password)=>{
  setLoading(true)
  return  signInWithEmailAndPassword(auth, email, password)
}
const handleSignWithGoogle=()=>{
  setLoading(true)
  return  signInWithPopup(auth, googleProvider);
}
const handleSignOut=()=>{
  return   signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
//Onauth change 

useEffect(() => {
    
    const listener = onAuthStateChanged(auth, (user) => {
   
      setUser(user);
      setLoading(false)
    });
  
    return () => {
      listener();
    };
  }, []);







    




const authinfo ={
    user,
    handleSignUpWithEmailPass,
    handleSignWithGoogle,
    handleSignInWithEmailPass,
    updateUsersProfile,
    handleSignOut,
    loading

}

    return (
   <UserContext.Provider  value={authinfo}>
{children}
   </UserContext.Provider>
    );
};

export default AuthProvider;