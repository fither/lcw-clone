import { createContext, useState } from "react";

const AuthContext = createContext({
  user: {},
  isLoading: false,
  login: (auth) => {}
});

export function AuthContextProvider(props) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const apiURL = "https://localhost:5001/api";

  async function loginHandler(auth) {
    setIsLoading(true);
    const response = await fetch(apiURL + "/auth", {
      method: 'POST',
      body: JSON.stringify(auth),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    
    const result = response.json();
    result.then((r) => {
      if(r.Success === true) {
        setUser(r.data);
        document.cookie = `Token= ${r.data.token}; SameSite=none; Secure`;
      }

      setIsLoading(false);
    });

    return result;
  }

  const context = {
    user: user,
    isLoading: isLoading,
    login: loginHandler
  };

  return <AuthContext.Provider value={context}>
    { props.children }
  </AuthContext.Provider>
}

export default AuthContext;