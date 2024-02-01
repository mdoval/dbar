import React, { FC } from "react";

interface ModalProps {
    hidden: boolean
    producto:string
    onClickSi: () => void
    onClickNo: () => void
  }

const Modal: FC<ModalProps> = ({ hidden, onClickSi, onClickNo, producto }) => {
  return (
    <dialog id="my_modal_2" className={`modal ${hidden ? "" : "modal-open"}`} > 
      <div className="modal-box">
        <h3 className="font-bold text-lg">Pedir?</h3>
        <p className="py-4">Desea pedir <b>{producto}</b></p>
        <div>
            <button className="btn btn-primary w-1/2" onClick={onClickSi}>Si</button>
            <button className="btn btn-primary w-1/2" onClick={onClickNo}>No</button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
