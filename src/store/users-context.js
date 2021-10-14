import { createContext, useState } from "react";

const UsersContext = createContext({
  users: [],
  isLoading: false
});

export function UsersContextProvider(props) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiURL = "https://localhost:5001/api";

  const context = {
    users,
    isLoading
  };

  return <UsersContext.Provider value={context}>
    { props.children }
  </UsersContext.Provider>
}

export default UsersContext;