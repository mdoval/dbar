import React, { FC } from 'react'

interface MobileNavProps {
  onClickMenu: () => void
}

const MobileNavBar: FC<MobileNavProps> = ({onClickMenu}) => {
  return (
    <div className='w-full mt-3 mb-3'>
        <button className='btn btn-primary w-1/2'>Pedido</button>
        <button className='btn btn-primary w-1/2' onClick={onClickMenu} >Menu</button>
    </div>
  )
}

export default MobileNavBar