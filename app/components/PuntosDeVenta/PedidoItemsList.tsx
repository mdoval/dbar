import React, { FC } from "react";

interface PedidoItemListProps {
  items: [];
}

const PedidoItemsList: FC<PedidoItemListProps> = ({ items }) => {
  console.log(items);
  return (
    <div className="flex flex-col w-full">
      {items.map((item: any) => {
        return (
          <div key={item.id} className="flex w-full space-x-5">
            <div>{item.id}</div>
            <div>{item.producto.descripcion}</div>
            <div>{item.precio}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PedidoItemsList;
