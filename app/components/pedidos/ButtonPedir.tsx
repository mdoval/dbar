import React, { FC, useState } from 'react'
import Modal from '@/app/components/pedidos/Modal'

interface ButtonProps {
  producto: string
}

const ButtonPedir: FC<ButtonProps> = ({producto}) => {
    const [hidden, setHidden] = useState<boolean>(true)

    const handleHidden = () => {
        setHidden(!hidden)
    }

  return (
    <div>
        <button className='btn btn-primary w-1/3' onClick={() => setHidden(!hidden)}>Pedir</button>
        <Modal hidden={hidden} onClickSi={handleHidden} onClickNo={handleHidden} producto={producto}/>          
    </div>
  )
}

export default ButtonPedir