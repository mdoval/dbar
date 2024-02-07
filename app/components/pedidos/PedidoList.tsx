import React, { FC } from "react";

interface PedidosProps {
  pedidoitems: [];
}

const PedidoList: FC<PedidosProps> = ({ pedidoitems }) => {
  return (
    <div>
      <span className="text-2xl font-bold">Pedido</span>
      {pedidoitems.map((pedido: { id: number, producto: any, precio: number }) => {
        return (
          <div key={pedido.id} className="flex space-x-8 w-full">
            <span>{pedido.id}</span>
            <span>{pedido.producto.descripcion}</span>
            <span>$ {pedido.precio}</span>
          </div>
        );
      })}
    </div>
  );
};

export default PedidoList;
