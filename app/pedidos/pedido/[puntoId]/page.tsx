import MobileNavBar from "@/app/components/pedidos/MobileNavBar";
import PedidoList from "@/app/components/pedidos/PedidoList";
import { getPedido } from "@/utils/getPedido";
import React, { FC } from "react";
import { redirect } from 'next/navigation'

interface MenuProps {
  params: { puntoId: number };
}

const PedidosHome: FC<MenuProps> = async ({ params }) => {
  const { puntoId } = params;
  const pedido = await getPedido(puntoId);

  if (pedido.pedido === null) {
    redirect(`/pedidos/init/${puntoId}`);
  } else {
    const { pedidoitems } = pedido.pedido;
    return (
      <div>
        <div className="w-full h-full bg p-3 flex flex-col space-y-3">
          <span className="text-3xl text-center font-bold border p-3 shadow-md">
            {pedido.pedido.punto.descripcion}
          </span>
          <span className="w-full text-2xl">
            Nro: Pedido: <b>{pedido.pedido.id}</b>
          </span>
          <h2 className="w-full text-2xl">
            Nombre: <b>{pedido.pedido.nombre}</b>
          </h2>
          <hr />
          <PedidoList pedidoitems={pedidoitems} />
          <MobileNavBar puntoId={puntoId} />
        </div>
      </div>
    );
  }
};

export default PedidosHome;
