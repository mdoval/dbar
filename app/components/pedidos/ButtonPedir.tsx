"use client";

import { addPedidoItem } from "@/utils/addPedidoItem";
import React, { FC, useState } from "react";

interface ButtonProps {
  producto: any;
  nropedido: number
}

const ButtonPedir: FC<ButtonProps> = ({ producto, nropedido }) => {
  const [ventanaPedir, setVentanaPedir] = useState<boolean>(false)

  const handlePedir = async () => {
    let newPedido = await addPedidoItem(nropedido, producto.id, producto.precio)
    console.log(newPedido)
    setVentanaPedir(false)    
  }

  return (
    <div>
      <button className="btn btn-primary w-1/3" onClick={() => setVentanaPedir(true)}>Pedir</button>

      <dialog id="my_modal_1" className={`modal ${ventanaPedir ? "modal-open" : ""}`}>
        <div className="modal-box text-left">
          <h3 className="font-bold text-lg">Desea pedir!</h3>
          <p className="p-2">
            {producto.descripcion} - $ {producto.precio}
          </p>
          <div className="modal-action">
              <button className="btn btn-primary w-1/2" onClick={() => handlePedir()}>Pedir</button>
              <button className="btn btn-warning w-1/2" onClick={() => setVentanaPedir(false)}>Cancelar</button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ButtonPedir;
