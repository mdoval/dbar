import React, { FC } from "react";
import DescripcionPedido from "./DescripcionPedido";
import { getPedido } from "@/utils/getPedido";

interface PuntoProps {
  id: number
  descripcion: string
}  

const PuntosDeVenta: FC<PuntoProps> = async ({id,descripcion}) => {
  const pedido = await getPedido(id)
//  console.log(pedido)

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
            {pedido.pedido === null ?  "NO hay peiddos" : <DescripcionPedido pedido={pedido} />}
          </div>
            {pedido.pedido === null ? <button className="btn btn-primary">Generar QR</button> : ""}          
        </div>
      </div>
    </div>
  );
};

export default PuntosDeVenta;

//<DescripcionPedido pedido={pedido} />