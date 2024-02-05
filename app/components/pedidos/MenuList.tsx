import React, { FC } from "react";
import ButtonPedir from "./ButtonPedir";

interface MenuProps {
  hidden: boolean;
  productos: [];
}

const MenuList: FC<MenuProps> = ({ hidden, productos }) => {
  return (
    <div hidden={hidden}>
      <h1>Menu</h1>
      <hr />
      {productos.map((producto: {id:number, descripcion: string, precio: number}) => {
        return (
          <div key={producto.id} className="m-2 space-y-2 p-3 shadow-md">
            <div>
              <h1>{producto.descripcion}</h1>
            </div>
            <div>
              <h2>{producto.precio}</h2>
            </div>
            <div className="text-right">
              <ButtonPedir producto={producto} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
