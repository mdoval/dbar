"use client";

import React, { FC, useState } from "react";
import Modal from "@/app/components/Modal";
import { deleteProducto } from "@/utils/deleteProducto";
import { useRouter } from "next/navigation";
import { Producto } from "@prisma/client";

interface Props {
    producto: Producto
}

const DeleteProducto: FC<Props> = ({producto}) => {
  const router = useRouter()
  const [hidden, setHidden] = useState(true);
  
  const handleOpenForm = () => {    
    setHidden(false);
  };

  const handleDelete = async () => {
    await deleteProducto(producto.id)
    setHidden(true)
    router.refresh()
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={handleOpenForm}>
        Delete
      </button>
      <Modal hidden={hidden} title="Eliminando Producto">
        <div className="w-full">
            Desea eliminar el Producto "{producto.descripcion}"
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

export default DeleteProducto;
