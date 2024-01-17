// MyContext.js
import React, { createContext, useState } from 'react';

// Create a context with a default value (in this case, an empty object)
const AuthContext = createContext({
  loggedIn: false,
  setLoggedIn: (updatedStatus) => {}
});

// Create a provider component
const AuthContextProvider = ({ children }) => {
  // Define your state or any data you want to share
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("token") !== null);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };