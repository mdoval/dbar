"use client";

import { productoDisponible } from "@/utils/productoDisponible";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface Props {
  productoId: number;
  checked: boolean;
}

const ToggleProductoDisponible: FC<Props> = ({ checked, productoId }) => {
  const router = useRouter();
  
  const handleChangeDisponible = async () => {
    console.log(productoId);
    if(checked) await productoDisponible(productoId, false);
    else await productoDisponible(productoId, true);
    router.refresh()
  };

  return (
    <input
      type="checkbox"
      className="toggle toggle-success"
      checked={checked}
      onChange={handleChangeDisponible}
    />
  );
};

export default ToggleProductoDisponible;
