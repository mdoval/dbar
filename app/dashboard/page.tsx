import React from "react";
import TableroVentas from "../components/PuntosDeVenta/TableroVentas";
import { getPuntos } from "@/utils/getPuntos";

const DashboardPage = async () => {
  const puntos = await getPuntos()
  return (
    <div>
      <TableroVentas puntos={puntos} />
    </div>
  );
};
export default DashboardPage;
