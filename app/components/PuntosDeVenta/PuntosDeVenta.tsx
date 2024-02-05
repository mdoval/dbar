import React, { FC } from "react";
import DescripcionPedido from "./DescripcionPedido";

interface PuntoProps {
  id: number
  descripcion: string
  pedidos: any
}

const PuntosDeVenta: FC<PuntoProps> = ({id,descripcion,pedidos}) => {
  return (
    <div className="mockup-browser border bg-base-300 w-1/4 m-2">
      <div className="mockup-browser-toolbar">
        <div className="text-center w-full">
          <h1>{descripcion}</h1>
        </div>
      </div>
      <div className="flex justify-center px-4 py-4 bg-base-200">
        <div className="w-full h-full flex">
          <div className=" w-10/12">
            {pedidos.length !== 0 ? <DescripcionPedido pedido={pedidos[0]} /> : "No hay pedidos"}
          </div>
            {pedidos.length === 0 ? <button className="btn btn-primary">Generar QR</button> : ""}

          
        </div>
      </div>
    </div>
  );
};

export default PuntosDeVenta;
