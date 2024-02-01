import React, { FC } from "react";

interface PuntoProps {
  id: number
  descripcion: string
}

const PuntosDeVenta: FC<PuntoProps> = ({id,descripcion}) => {
  return (
    <div className="mockup-browser border bg-base-300 w-1/4 m-2">
      <div className="mockup-browser-toolbar">
        <div className="text-center w-full">
          <h1>{descripcion}</h1>
        </div>
      </div>
      <div className="flex justify-center px-4 py-4 bg-base-200">
        <div className="w-full h-full flex">
          <div className=" w-10/12">
            <ul>
              <li>Gaseosa</li>
              <li>Cerveza</li>
              <li>Picada</li>
            </ul>
          </div>
          <button className="btn btn-primary">Generar QR</button>
        </div>
      </div>
    </div>
  );
};

export default PuntosDeVenta;
