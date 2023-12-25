import { FC, ReactNode } from "react";
import NavBar from "../components/NavBar";
import { getUsuarioLogueado } from "@/utils/getUsuarioLogueado";
import MenuVertical from "../components/MenuVertical";

interface Props {
  children: ReactNode;
}

const DashboardLayout: FC<Props> = async ({ children }) => {
  const usuario = await getUsuarioLogueado()
  return (
    <div className="bg-gray-200 w-full h-full">
      <div><NavBar usuario={usuario} /></div>
      <div className="flex flex-row space-x-2">
        <div className="mt-4"><MenuVertical /></div>
        <div className="w-11/12 h-5/6 bg-white m-auto mt-5 border shadow-lg p-4">{children}</div>
      </div>
      
    </div>
  );
};

export default DashboardLayout;
