import  { createContext, useContext, useState, useCallback } from "react";
const ModalContext = createContext();
export const ModalMessage = ({ children }) => {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const showModal = useCallback((msg) => {
    setMessage(msg);
    setVisible(true);
  }, []);

  const hideModal = () => {
    setVisible(false);
    setMessage("");
  };

  return (
    <ModalContext.Provider value={{ showModal }}>
      {children}
      {visible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon">⚠️</div>
            <h2 className="modal-title">{message}</h2>
            <button className="modal-button" onClick={hideModal}>
              Got it
            </button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
