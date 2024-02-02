import PedidosPanel from "@/app/components/pedidos/PedidosPanel";
import { getPedido } from "@/utils/getPedido";
import { getProductos } from "@/utils/getProductos";
import { getPunto } from "@/utils/getPunto";
import React, { FC, useState } from "react";

interface PedidosProps {
  params: { puntoId: number };
}

const PedidoPage: FC<PedidosProps> = async ({ params }) => {
  const puntoId = params.puntoId;
  const punto = await getPunto(puntoId);
  const pedido = await getPedido(puntoId);

  if (pedido.pedido != null) {
    const productos = await getProductos();

    return (
      <div className="w-full h-full bg p-3 flex flex-col">
        <h1 className="w-full text-3xl text-center">{punto.descripcion}</h1>
        <h3 className="w-full text-3xl text-center">Nro: Pedido: {pedido.pedido.id}</h3>
        <PedidosPanel productos={productos} />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col align-middle text-center h-full w-full">
        <div className="m-auto space-y-5">
          <h1>Desea iniciar un pedido en...</h1>
          <h1 className="bg-blue-200 p-3 m-4">
            <b>{punto.descripcion}</b>
          </h1>
          <button className="btn btn-primary">Iniciar Pedido</button>
        </div>
      </div>
    );
  }
};

export default PedidoPage;
