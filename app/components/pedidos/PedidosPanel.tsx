"use client";

import React, { FC, useState } from "react";
import MobileNavBar from "./MobileNavBar";
import MenuList from "./MenuList";
import PedidoList from "./PedidoList";
import HomeList from "./HomeList";
import { useRouter } from "next/navigation";

interface PedidosPanelProps {
  productos: [];
  pedido: any
}

const PedidosPanel: FC<PedidosPanelProps> = ({ productos, pedido }) => {
  const router = useRouter()

  const handleMenuHidden = () => {
    router.push("/pedidos/menu")
  };

  const handlePedidoHidden = () => {
    router.push("/pedidos/pedido")
  };

  const handleHomeHidden = () => {
    router.push("/pedidos/home")
  };

  return (
    <div>
      <div className="w-full h-full bg p-3 flex flex-col space-y-3">
        <span className="text-3xl text-center font-bold border p-3 shadow-md">{pedido.pedido.punto.descripcion}</span>
        <span className="w-full text-2xl">
          Nro: Pedido: <b>{pedido.pedido.id}</b>
        </span>
        <h2 className="w-full text-2xl">
          Nombre: <b>{pedido.pedido.nombre}</b>
        </h2>
        <hr />
        <MobileNavBar onClickMenu={handleMenuHidden}  onClickHome={handleHomeHidden}  onClickPedido={handlePedidoHidden} />
        <MenuList productos={productos} nropedido={pedido.pedido.id} />
        <PedidoList />
     </div>
    </div>
  );
};

export default PedidosPanel;
