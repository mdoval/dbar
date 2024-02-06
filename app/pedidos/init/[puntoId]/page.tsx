import PedidosPanelInicio from "@/app/components/pedidos/PedidosPanelInicio";
import { getPunto } from "@/utils/getPunto";
import React, { FC, useState } from "react";

interface PedidosProps {
  params: { puntoId: number };
}

const PedidoInitPage: FC<PedidosProps> = async ({ params }) => {
  const { puntoId } = params
  const punto = await getPunto(puntoId);

  return <PedidosPanelInicio punto={punto} />;
};

export default PedidoInitPage;
