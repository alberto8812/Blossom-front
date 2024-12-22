import { useState } from "react";
import type { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

import "./SideMenu.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { SearchSideMenu } from "./SearchSideMenu";
import { ProfileCard } from "../cards/ProfileCard";
import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "../../../action";

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

  const {
    data: characters,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["characters", "sidebar"],
    queryFn: () => getAllCharacters(),
    staleTime: 1000 * 60 * 5, //5 minutos
  });
  console.log(characters);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex">
      {/* Botón para mostrar/ocultar la barra lateral */}
      <button
        onClick={toggleSidebar}
        className="p-4 text-primary-Primary_700 text-lg lg:hidden shadow-none border-none hover:bg-gray-100 pt-12"
      >
        <FaArrowLeftLong className="fas fa-bars" size={30} />
      </button>

      {/* Barra lateral */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block bg-white lg:w-96  w-screen  h-screen fixed rounded-none border-none`}
      >
        <div className="p-4 space-y-4 pt-16">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Rick and Morty list</h1>
          </div>
          <SearchSideMenu />
          {/* !TODO:IMPLMENTAR LA CANTIDAD FILTROS */}

          <div className="space-y-7 pt-5 flex flex-col">
            <span className="text-xs  ">{`STARRED CHARCTERS (${4})`}</span>
            <div className="h-40 overflow-y-auto">
              <ProfileCard name="carlos velasco saavedra" species="Human" />
              <ProfileCard name="carlos velasco saavedra" species="Human" />
            </div>

            {/* {menuItems.map((item, index) => (
              <SideMenuItem key={index} {...item} />
            ))} */}

            <span className="text-xs  ">{`STARRED CHARCTERS (${4})`}</span>
            <div className="h-screen  overflow-y-auto">
              <ProfileCard name="carlos velasco saavedra" species="Human" />
              <ProfileCard name="carlos velasco saavedra" species="Human" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
