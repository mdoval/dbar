import { Pedido } from '@prisma/client'
import React, { FC } from 'react'
import PedidoItemsList from './PedidoItemsList'

interface PedidoProps {
    pedido: any
}

const DescripcionPedido: FC<PedidoProps> = ({pedido}) => {
  const { pedidoitems } = pedido.pedido

  return (
    <div>
      <div className='mb-3'>Pedido de: <b>{pedido.pedido.nombre}</b></div>
      <hr  className='mb-3' />
      <PedidoItemsList items={pedidoitems}  />
    </div>  
  )
}

export default DescripcionPedido