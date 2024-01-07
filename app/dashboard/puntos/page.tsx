import AddPunto from '@/app/components/Add/AddPunto';
import DatatablePuntos from '@/app/components/DataTable/DatatablePuntos'
import { getPuntos } from '@/utils/getPuntos';
import React from 'react'

const PuntosPage = async () => {
  const puntos = await getPuntos();

  return (
    <div className='h-5/6 flex flex-col'>
      <h1 className='font-bold text-2xl mb-4'>Puntos de Venta</h1>
      <AddPunto />
      <DatatablePuntos puntos={puntos} />
    </div>
  )
}

export default PuntosPage