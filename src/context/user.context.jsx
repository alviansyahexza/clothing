import { onAuthListerner } from "../utils/firebase/firebase.utils";

const { createContext, useState, useEffect } = require("react");

export const UserContext = createContext({
  userState: null,
  setUserState: () => null,
});

export const UserProvider = ({ children }) => {
  const [userState, setUserState] = useState(null);
  const value = { userState, setUserState };

  useEffect(() => {
    const subscribe = onAuthListerner((user) => {
      console.log(user);
      setUserState(user);
    });

    return subscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
