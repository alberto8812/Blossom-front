import type { IconType } from "react-icons";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";
import { SideMenuItem } from "./SideMenuItem";
import { useState } from "react";
import { SearchSideMenu } from "./searchSideMenu";

interface MenuItem {
  title: string;
  subTitle: string;
  href: string;
  Icon: IconType;
}

const menuItems: MenuItem[] = [
  //   { title: 'Dashboard', subTitle: 'Visualizar data', href: '/dashboard', Icon: IoSpeedometerOutline },
  //   { title: 'Osos', subTitle: 'Manejador de osos', href: '/dashboard/bears', Icon: IoPawOutline },
  //   { title: 'Persona', subTitle: 'Nombre y apellido', href: '/dashboard/person', Icon: IoAccessibilityOutline },
  //   { title: 'Tareas', subTitle: 'Listado de tareas', href: '/dashboard/tasks', Icon: IoListOutline },
  //   { title: 'Boda', subTitle: 'Invitados a la boda', href: '/dashboard/wedding-invitation', Icon: IoHeartOutline },
];
//bg-gray-900 min-h-screen z-10 text-slate-300 w-80 left-0 overflow-y-scroll
export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex">
      {/* Botón para mostrar/ocultar la barra lateral */}
      <button
        onClick={toggleSidebar}
        className="p-4 text-cyan-500 text-lg lg:hidden"
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Barra lateral */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block bg-white lg:w-96  w-screen  h-screen fixed rounded-none border-none`}
      >
        <div className="p-4 space-y-4">
          <SearchSideMenu />
        </div>
      </div>
    </div>
  );
};
