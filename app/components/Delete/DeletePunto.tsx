"use client";

import React, { FC, useState } from "react";
import Modal from "@/app/components/Modal";
import { deletePunto } from "@/utils/deletePunto";
import { useRouter } from "next/navigation";
import { Punto } from "@prisma/client";

interface Props {
    punto: Punto
}

const DeletePunto: FC<Props> = ({punto}) => {
  const router = useRouter()
  const [hidden, setHidden] = useState(true);
  
  const handleOpenForm = () => {    
    setHidden(false);
  };

  const handleDelete = async () => {
    await deletePunto(punto.id)
    setHidden(true)
    router.refresh()
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={handleOpenForm}>
        Delete
      </button>
      <Modal hidden={hidden} title="Eliminando punto de venta">
        <div className="w-full">
            Desea eliminar el Punot {punto.descripcion}
        </div>
        <div className="flex">
          <button
            className="btn btn-danger w-1/2"
            onClick={() => setHidden(true)}
          >
            Cancelar
          </button>
          <button className="btn btn-warning w-1/2" onClick={handleDelete}>Eliminar</button>
        </div>
      </Modal>
    </div>
  );
};

export default DeletePunto;
