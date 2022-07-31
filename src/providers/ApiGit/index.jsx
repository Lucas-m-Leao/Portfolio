import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ApiGitContext = createContext([]);
export const ApiGitProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [repository, setRepository] = useState("");
  useEffect(() => {
    axios
      .get("https://api.github.com/users/Lucas-m-Leao")
      .then((res) => setUser(res.data));
    axios
      .get("https://api.github.com/users/Lucas-m-Leao/repos")
      .then((res) => setRepository(res.data));
  }, []);
  return (
    <ApiGitContext.Provider value={{ user, repository }}>
      {children}
    </ApiGitContext.Provider>
  );
};
