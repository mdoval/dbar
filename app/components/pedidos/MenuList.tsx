import React, { FC } from "react";
import ButtonPedir from "./ButtonPedir";

interface MenuProps {
  nropedido: number
  productos: [];
}

const MenuList: FC<MenuProps> = ({  productos, nropedido }) => {
  return (
    <div>
      <span className="text-2xl font-bold">Menu</span>
      {productos.map((producto: {id:number, descripcion: string, precio: number}) => {
        return (
          <div key={producto.id} className="m-2 space-y-2 p-3 shadow-md">
            <div>
              <span className="text-2xl font-bold">{producto.descripcion}</span>
            </div>
            <div>
              <span className="font-bold text-gray-600">$ {producto.precio}</span>
            </div>
            <div className="text-right">
              <ButtonPedir producto={producto} nropedido={nropedido} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
