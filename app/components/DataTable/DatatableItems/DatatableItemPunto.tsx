import { Punto } from "@prisma/client";
import React, { FC } from "react";
import EditPunto from '@/app/components/Edit/EditPunto'
import DeletePunto from "@/app/components/Delete/DeletePunto";

interface Props {
    punto: Punto
}

const DatatableItemPunto: FC<Props> = ({punto}) => {
  return (
    <tr className="hover">
      <th>{punto.id}</th>
      <td>{punto.descripcion}</td>
      <td>{punto.estado}</td>
      <td className="flex flex-row space-x-2">
        <EditPunto punto={punto} /> 
        <DeletePunto punto={punto} />
      </td>
    </tr>
  )
}

export default DatatableItemPunto;
