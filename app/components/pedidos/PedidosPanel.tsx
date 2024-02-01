"use client";

import React, { FC, useState } from "react";
import MobileNavBar from "./MobileNavBar";
import MenuList from "./MenuList";

interface PedidosPanelProps {
  productos: [];
}

const PedidosPanel: FC<PedidosPanelProps> = ({ productos }) => {
  const [menuHidden, setMenuHidden] = useState<boolean>(true);

  const handleMenuHidden = () => {
    setMenuHidden(!menuHidden);
  };

  return (
    <div>
      <MobileNavBar onClickMenu={handleMenuHidden} />
      <MenuList hidden={menuHidden} productos={productos} />
    </div>
  );
};

export default PedidosPanel;
