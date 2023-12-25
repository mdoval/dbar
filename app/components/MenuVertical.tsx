import React from "react";
import { GrTarget } from "react-icons/gr";
import { LuMenuSquare } from "react-icons/lu";
import { GrCopy } from "react-icons/gr";

const MenuVertical = () => {
  return (
    <div>
      <ul className="menu bg-base-200 w-56 rounded-box">
        <li>
          <a href="/dashboard/puntos">
            <GrTarget /> Punto de Venta
          </a>
        </li>
        <li>
          <a href="/dashboard/menu">
            <LuMenuSquare />
            Menu / Carta
          </a>
        </li>
        <li>
          <a href="/dashboard/pedidos">
            <GrCopy />
            Pedidos
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuVertical;
