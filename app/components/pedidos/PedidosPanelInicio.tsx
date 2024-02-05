"use client";

import { iniciarPedido } from "@/utils/iniciarPedido";
import { Punto } from "@prisma/client";
import React, { FC, useState } from "react";

interface PedidosProps {
  punto: Punto;
}

const PedidosPanelInicio: FC<PedidosProps> = ({ punto }) => {
  const [nombre, setNombre] = useState<string>("");

  const handleActivarPedido = async () => {
    await iniciarPedido(punto.id, nombre);
  };

  return (
    <div className="flex flex-col align-middle text-center h-full w-full">
      <div className="m-auto space-y-5">
        <h1>Desea iniciar un pedido en...</h1>
        <div>
          <h1 className="bg-blue-200 p-3 m-4 rounded-lg">
            <b>{punto.descripcion}</b>
          </h1>
        </div>
        <div>
          <label className="form-control w-full max-w-xs m-auto">
            <div className="label">
              <span className="label-text">Cual es su nombre?</span>
            </div>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              placeholder="Nombre"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div>
          <button className="btn btn-primary" onClick={handleActivarPedido}>
            Iniciar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default PedidosPanelInicio;
