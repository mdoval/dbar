"use client";

import React, { useState } from "react";
import Modal from "@/app/components/Modal";
import { addProducto } from "@/utils/addProducto";
import { useRouter } from "next/navigation";

const AddPrecio = () => {
  const router = useRouter()
  const [hidden, setHidden] = useState(true);
  const [descripcion, setDescripcion] = useState<string>("")
  const [precio, setPrecio] = useState<number>(0)

  const handleOpenForm = () => {    
    setDescripcion("")
    setPrecio(0)
    setHidden(false);
  };

  const handleSubmit = async () => {
    await addProducto(descripcion, precio)
    setDescripcion("")
    setPrecio(0)
    setHidden(true)
    router.refresh()
  }


  return (
    <div>
      <button className="btn btn-primary" onClick={handleOpenForm}>
        Nuevo Producto
      </button>
      <Modal hidden={hidden} title="Nuevo producto">
        <div className="w-full flex flex-col">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Descripcion</span>
            </div>
            <input
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              type="text"
              placeholder="Ingrese aqui"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Precio</span>
            </div>
            <input
              value={precio}
              onChange={(e) => setPrecio(parseFloat(e.target.value))}
              type="number"
              placeholder="Ingrese aqui"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="flex">
          <button
            className="btn btn-danger w-1/2"
            onClick={() => setHidden(true)}
          >
            Cancelar
          </button>
          <button className="btn btn-primary w-1/2" onClick={handleSubmit}>Guardar</button>
        </div>
      </Modal>
    </div>
  );
};

export default AddPrecio;
