import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import { createContext } from "react";
import useAxiosPublic from './../hooks/useAxiosPublic';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic(); 


  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged (auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
      // const userEmail = currentUser?.email || user?.email;
      // const userInfo = { email: userEmail };

      // if (currentUser) {
      //   axiosPublic.post("/jwt", userInfo).then((res) => {
      //     if (res.data.token) {
      //       localStorage.setItem("access-token", res.data.token);
      //     }
      //   });
      // } else {
      //   localStorage.removeItem("access-token");
      // }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [])

  const authProperties = {
    user,
    loading,
    loginWithGoogle,
    logOut
  }
  return (
    <AuthContext.Provider value={authProperties} >{children}</AuthContext.Provider>
  )
};

export default AuthProvider;
