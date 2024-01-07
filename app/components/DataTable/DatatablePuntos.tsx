import React, { FC } from "react";
import DatatableItemPunto from "./DatatableItems/DatatableItemPunto";
import { Punto } from "@prisma/client";

interface Props {
    puntos: Punto[]
}

const DatatablePuntos: FC<Props> = async ({puntos}) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Descripcion</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {puntos.map((punto) => {
                return <DatatableItemPunto key={punto.id} punto={punto} />
            })}            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DatatablePuntos;
