import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";

interface ModalProps {
  show: boolean;
  onCancel: () => void;
  children: React.ReactNode;
}

const ModalOverlay: React.FC<ModalProps> = (props) => {
  const content = (
    <div className="fixed w-min top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-50">
      {props.children}
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook")!);
};

const Modal: React.FC<ModalProps> = (props) => (
  <Fragment>
    {props.show && <Backdrop onClick={props.onCancel} />}
    <CSSTransition
      in={props.show}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames="modal"
    >
      <ModalOverlay {...props} />
    </CSSTransition>
  </Fragment>
);

export default Modal;
