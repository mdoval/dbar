import React, { FC, useState } from 'react'
import Modal from '@/app/components/pedidos/Modal'
import { addPedidoItem } from '@/utils/addPedidoItem'

interface ButtonProps {
  producto: any
}

const ButtonPedir: FC<ButtonProps> = ({producto}) => {
    const [hidden, setHidden] = useState<boolean>(true)

    const handleHidden = () => {
        setHidden(!hidden)
    }

    const handlePedir = async () => {
      await addPedidoItem(1, 2)
      setHidden(!hidden)
  }

  return (
    <div>
        <button className='btn btn-primary w-1/3' onClick={() => setHidden(!hidden)}>Pedir</button>
        <Modal hidden={hidden} onClickSi={handlePedir} onClickNo={handleHidden} producto={producto.descripcion}/>          
    </div>
  )
}

export default ButtonPedir