import AddProducto from '@/app/components/Add/AddProducto';
import DatatableProductos from '@/app/components/DataTable/DatatableProductos'
import { getProductos } from '@/utils/getProductos';
import React from 'react'

const ProductosPage = async () => {
  const productos = await getProductos();

  return (
    <div className='h-5/6 flex flex-col'>
      <h1 className='font-bold text-2xl mb-4'>Puntos de Venta</h1>
      <AddProducto />
      <DatatableProductos productos={productos} />
    </div>
  )
}

export default ProductosPage