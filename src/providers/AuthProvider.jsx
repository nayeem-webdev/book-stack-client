import PropTypes from "prop-types";
import AuthContext from "../context/AuthContext";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  // States
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   Observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(true);
      }
    });
  }, []);

  // Login
  const loginWithPopUp = (provider) => {
    return signInWithPopup(auth, provider);
  };
  // logout
  const logout = () => {
    return signOut(auth);
  };
  const info = {
    user,
    loading,
    setLoading,
    setUser,
    loginWithPopUp,
    logout,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
