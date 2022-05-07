import { createContext, useContext, useEffect, useState } from "react";
import useStorage from "../utils/useStorage";
import axios from "../api/api";

const UserContext = createContext({
  token: null,
  setToken: () => {},
  usuario: {},
});

export const useUseContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useStorage("token");
  const [usuario, setUsuario] = useState({});

  console.log("userContex usuario", usuario);
  console.log("userContex token", token);

  const getDadosDoUsuario = async () => {
    try {
      const response = await axios.get("/usuario");
      setUsuario(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDadosDoUsuario();
  }, [token]);

  return (
    <UserContext.Provider value={{ token, setToken, usuario }}>
      {children}
    </UserContext.Provider>
  );
};
