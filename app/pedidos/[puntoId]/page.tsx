import { getPedido } from "@/utils/getPedido";
import { getProductos } from "@/utils/getProductos";
import { getPunto } from "@/utils/getPunto";
import React, { FC, useState } from "react";
import { redirect } from 'next/navigation'

interface PedidosProps {
  params: { puntoId: number };
}

const PedidoPage: FC<PedidosProps> = async ({ params }) => {
  const puntoId = params.puntoId;
  const pedido = await getPedido(puntoId);

  if (pedido.pedido === null) {
    redirect(`/pedidos/init/${puntoId}`)
  } else {
    const productos = await getProductos();
    redirect(`/pedidos/home/${puntoId}`)
  }
}

export default PedidoPage;
