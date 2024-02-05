"use client";

import React, { FC, useState } from "react";
import MobileNavBar from "./MobileNavBar";
import MenuList from "./MenuList";

interface PedidosPanelProps {
  productos: [];
  pedido: any
}

const PedidosPanel: FC<PedidosPanelProps> = ({ productos, pedido }) => {
  const [menuHidden, setMenuHidden] = useState<boolean>(true);

  const handleMenuHidden = () => {
    setMenuHidden(!menuHidden);
  };

  return (
    <div>
      <div className="w-full h-full bg p-3 flex flex-col">
        <h1 className="w-full text-3xl text-center">{pedido.pedido.punto.descripcion}</h1>
        <h2 className="w-full text-2xl ">
          Nro: Pedido: <b>{pedido.pedido.id}</b>
        </h2>
        <h2 className="w-full text-2xl">
          Nombre: <b>{pedido.pedido.nombre}</b>
        </h2>
        <MobileNavBar onClickMenu={handleMenuHidden} />
        <MenuList hidden={menuHidden} productos={productos} />
      </div>
    </div>
  );
};

export default PedidosPanel;
