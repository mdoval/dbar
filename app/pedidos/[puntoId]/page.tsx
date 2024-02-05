import PedidosPanel from "@/app/components/pedidos/PedidosPanel";
import PedidosPanelInicio from "@/app/components/pedidos/PedidosPanelInicio";
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
        <PedidosPanel productos={productos} pedido={pedido} />
    );
  } else {
    return (<PedidosPanelInicio punto={punto} />)
  }
}

export default PedidoPage;
