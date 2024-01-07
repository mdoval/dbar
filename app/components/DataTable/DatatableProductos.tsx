import React, { FC } from "react";
import DatatableItemProducto from "./DatatableItems/DatatableItemProducto";
import { Producto } from "@prisma/client";

interface Props {
    productos: Producto[]
}

const DatatableProductos: FC<Props> = async ({productos}) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Disponible</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => {
                return <DatatableItemProducto key={producto.id} producto={producto} />
            })}            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DatatableProductos;
