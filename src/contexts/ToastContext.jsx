import React, { createContext, useContext, useEffect, useState } from "react";

import Toast from "../components/toast/Toast";

const ToastContext = createContext({
  showToast: false,
  toastVariant: "success",
  toastMessage: "",
  hideToast: () => {},
  setToastMessage: () => {},
  setToastVariant: () => {},
  setShowToast: () => {},
});

export const useToastContext = () => useContext(ToastContext);

export const ToastContextProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const hideToast = () => setShowToast(false);

  useEffect(() => {}, []);

  return (
    <ToastContext.Provider
      value={{
        showToast,
        toastVariant,
        toastMessage,
        setShowToast,
        setToastMessage,
        setToastVariant,
        hideToast,
      }}
    >
      {children}

      <Toast
        showToast={showToast}
        variant={toastVariant}
        mensagem={toastMessage}
        onClose={hideToast}
      />
    </ToastContext.Provider>
  );
};
