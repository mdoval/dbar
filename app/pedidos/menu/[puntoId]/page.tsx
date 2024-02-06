import MenuList from '@/app/components/pedidos/MenuList';
import MobileNavBar from '@/app/components/pedidos/MobileNavBar';
import { getPedido } from '@/utils/getPedido';
import { getProductos } from '@/utils/getProductos';
import React, { FC } from 'react'

interface MenuProps {
    params: { puntoId: number };
}

const PedidosHome: FC<MenuProps> = async ({params}) => {
  const { puntoId } = params
  const pedido = await getPedido(puntoId);
  console.log(pedido)
  const productos = await getProductos()

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
        <MobileNavBar />
        <MenuList nropedido={pedido.pedido.id} productos={productos}  />
      </div>
    </div>
  )
}

export default PedidosHome