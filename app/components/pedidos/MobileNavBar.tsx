'use client'

import React, { FC } from "react";
import { RiMenuAddLine } from "react-icons/ri";
import { MdRestaurantMenu } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const MobileNavBar: FC = ({ }) => {
  const router = useRouter()

  const goHome = () => {
    router.push("/pedidos/home/1")    
    router.refresh()
  }

  const goPedido = () => {
    router.push("/pedidos/pedido/1")    
    router.refresh()
  }

  const goMenu = () => {
    router.push("/pedidos/menu/1")    
    router.refresh()
  }

  return (
    <div className="btm-nav">
      <button className="bg-pink-200 text-pink-600" onClick={goHome}>
        <IoHomeOutline />
        <span className="btm-nav-label">Inicio</span>
      </button>
      <button className="active bg-blue-200 text-blue-600 border-blue-600" onClick={goPedido}>
        <MdRestaurantMenu />
        <span className="btm-nav-label">Pedido</span>
      </button>
      <button className="bg-teal-200 text-teal-600" onClick={goMenu}>
        <RiMenuAddLine />
        <span className="btm-nav-label">Menu</span>
      </button>
    </div>
  );
};

export default MobileNavBar;
