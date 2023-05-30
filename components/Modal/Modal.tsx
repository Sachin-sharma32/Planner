import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: JSX.Element;
}

const Modal = ({ children }: ModalProps) => {
  const [isBrowser, setIsBroswer] = useState<boolean>(false);
  useEffect(() => {
    setIsBroswer(true);
  }, []);

  const modal = (
    <div className=" fixed top-0 left-0 z-50 bg-opacity-50 w-screen h-screen bg-black flex items-center justify-center">
      {children}
    </div>
  );
  if (isBrowser) {
    return createPortal(modal, document.getElementById("modal-root")!);
  } else {
    return null;
  }
};

export default Modal;
