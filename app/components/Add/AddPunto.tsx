"use client";

import React, { ChangeEvent, useState } from "react";
import Modal from "@/app/components/Modal";
import { addPunto } from "@/utils/addPunto";
import { useRouter } from "next/navigation";

const AddPunto = () => {
  const router = useRouter()
  const [hidden, setHidden] = useState(true);
  const [descripcion, setDescripcion] = useState<string>("")

  const handleOpenForm = () => {    
    setDescripcion("")
    setHidden(false);
  };

  const handleSubmit = async () => {
    await addPunto(descripcion)
    setDescripcion("")
    setHidden(true)
    router.refresh()
  }


  return (
    <div>
      <button className="btn btn-primary" onClick={handleOpenForm}>
        Nuevo Punto de Venta
      </button>
      <Modal hidden={hidden} title="Nuevo punto de venta">
        <div className="w-full">
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

export default AddPunto;
