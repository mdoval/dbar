import { Pedido } from '@prisma/client'
import React, { FC } from 'react'

interface PedidoProps {
    pedido: any
}

const DescripcionPedido: FC<PedidoProps> = ({pedido}) => {
  //console.log(pedido)
  return (
    <div>
      <div>Pedido de: <b>{pedido.nombre}</b></div>
      <hr />
    </div>
  )
}

export default DescripcionPedido