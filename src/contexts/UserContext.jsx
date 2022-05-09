import { createContext, useContext, useEffect, useState } from "react";

import axios from "../api/api";
import useStorage from "../utils/useStorage";

const UserContext = createContext({
  token: null,
  setToken: () => {},
  usuario: {},
  usuarioLogado: null,
  logout: () => {},
});

export const useUseContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [token, setToken, removeUsuario] = useStorage("token");
  const [usuario, setUsuario] = useState({});
  const [usuarioLogado, setUsuarioLogado] = useState(false);

  console.log(token);
  console.log(usuario);
  console.log(usuarioLogado);

  const getDadosDoUsuario = async () => {
    try {
      const response = await axios.get("/usuario");
      setUsuario(response.data);
      setUsuarioLogado(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    axios.defaults.headers.common["x-access-token"] = null;
    setUsuario({});
    setUsuarioLogado(false);
    removeUsuario();
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["x-access-token"] = token;
      getDadosDoUsuario();
      setUsuarioLogado(true);
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{ token, setToken, usuario, logout, usuarioLogado }}
    >
      {children}
    </UserContext.Provider>
  );
};
