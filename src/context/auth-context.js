import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../services/session-service";
import { createUser, getUser, updateUser } from "../services/users-service";
import { tokenKey } from "../Config";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    if(sessionStorage.getItem(tokenKey)!==null){
      getUser()
      .then(setUser)
      .catch((error) => console.log(error));
    }

  }, []);

  function handleLogin(credentials) {
    return login(credentials).then((user) => {
      setUser(user);
      navigate("/home");
    });
  }

  function handleSignupCustomers(userData) {
    return createUser(userData).then((user) => {
      setUser(user);
      navigate("/customer_profile");
    });
  }

  function handleUpdateCustomer(userData) {
    return updateUser(userData).then((user) => {
      setUser(user);
      navigate("/profile");
    });
  }

  function handleLogout() {
    return logout().finally(() => {
      setUser(null);
      navigate("/");
    });
  }


  return (
    <AuthContext.Provider
      value={{
        user,
        update: handleUpdateCustomer,
        login: handleLogin,
        customerSignup: handleSignupCustomers,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
