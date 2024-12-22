import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./SideMenu.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { SearchSideMenu } from "./SearchSideMenu";
import { ProfileCard } from "../cards/ProfileCard";
import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "../../../action";
import { Accordion } from "../proto/acordion/Accordion";
import { Squeleton } from "..";
import { CharacterEntity } from "../../../domain";

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: characters, isLoading } = useQuery({
    queryKey: ["characters", "sidebar"],
    queryFn: () => getAllCharacters(),
    staleTime: 1000 * 60 * 5, //5 minutos
  });
  console.log(characters ? characters[0] : []);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex">
      <button
        onClick={toggleSidebar}
        className="p-4 text-primary-Primary_700 text-lg lg:hidden shadow-none border-none hover:bg-gray-100 pt-12"
      >
        <FaArrowLeftLong className="fas fa-bars" size={30} />
      </button>
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
          {isLoading ? (
            <Squeleton />
          ) : (
            <div className="space-y-7 pt-5 flex flex-col">
              {/* //!todo implmentar faboritos */}
              <Accordion title={`STARRED CHARCTERS (${4})`}>
                {characters?.map((item: CharacterEntity) => (
                  <NavLink
                    to={`/dashboard/characters/${item.id}`}
                    key={item.id}
                  >
                    <ProfileCard
                      name={item.name}
                      species={item.specie}
                      img={item.img}
                    />
                  </NavLink>
                ))}
              </Accordion>

              {/* {menuItems.map((item, index) => (
                <SideMenuItem key={index} {...item} />
              ))} */}

              <Accordion
                title={`CHARCTERS (${4})`}
                style="max-h-96"
                initalState={true}
              >
                {characters?.map((item: CharacterEntity) => (
                  <NavLink
                    to={`/dashboard/characters/${item.id}`}
                    key={item.id}
                  >
                    <ProfileCard
                      name={item.name}
                      species={item.specie}
                      img={item.img}
                    />
                  </NavLink>
                ))}
              </Accordion>
            </div>
          )}
          {/* !TODO:IMPLMENTAR LA CANTIDAD FILTROS */}
        </div>
      </div>
    </div>
  );
};
