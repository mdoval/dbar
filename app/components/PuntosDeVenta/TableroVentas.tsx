import React, { FC } from "react";
import PuntosDeVenta from "./PuntosDeVenta";

interface TableroProps {
  puntos: []
}

const TableroVentas: FC<TableroProps> = ({puntos}) => {
  return (
    <div>
      <h1>Tablero de Ventas</h1>
      <hr />
      <div className="flex flex-wrap">
        {puntos.map((punto: {id: number, descripcion: string}) => {
          return <PuntosDeVenta id={punto.id} descripcion={punto.descripcion} />
        })}        
      </div>
    </div>
  );
};

export default TableroVentas;
