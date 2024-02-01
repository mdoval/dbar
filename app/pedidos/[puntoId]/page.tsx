import PedidosPanel from "@/app/components/pedidos/PedidosPanel";
import { getProductos } from "@/utils/getProductos";
import { getPunto } from "@/utils/getPunto";
import React, { FC, useState } from "react";

interface PedidosProps {
  params: {puntoId: number};
}

const PedidoPage: FC<PedidosProps> = async ({ params }) => {    
  const puntoId = params.puntoId
  const punto = await getPunto(puntoId)
  const productos = await getProductos()

  return (
    <div className="w-full h-full bg p-3 flex flex-col">
      <h1 className="w-full text-3xl text-center">{punto.descripcion}</h1>
      <PedidosPanel productos={productos} />
    </div>
  );
};

export default PedidoPage;
