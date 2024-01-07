import { Producto } from "@prisma/client";
import React, { FC } from "react";
import EditProducto from '@/app/components/Edit/EditProducto'
import DeleteProducto from "@/app/components/Delete/DeleteProducto";
import ToggleProductoDisponible from "../../Toggle/ToggleProductoDisponible";

interface Props {
    producto: Producto
}

const DatatableItemProducto: FC<Props> = ({producto}) => {
  return (
    <tr className="hover">
      <th>{producto.id}</th>
      <td>{producto.descripcion}</td>
      <td>{producto.precio.toString()}</td>
      <td><ToggleProductoDisponible productoId={producto.id} checked={producto.disponible} /></td>
      <td className="flex flex-row space-x-2">
        <EditProducto producto={producto} /> 
        <DeleteProducto producto={producto} />
      </td>
    </tr>
  )
}

export default DatatableItemProducto;
