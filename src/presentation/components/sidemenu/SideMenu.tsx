import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./SideMenu.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { SearchSideMenu } from "./SearchSideMenu";
import { ProfileCard } from "../cards/ProfileCard";
import { useQuery } from "@tanstack/react-query";
import { getAllCharacters, getAllGender, getAllOrigin } from "../../../action";
import { Accordion } from "../proto/acordion/Accordion";
import { ModalFilterSidebar, Squeleton } from "..";
import { CharacterEntity } from "../../../domain";
import { useFilterSharestore } from "../../stores";

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const characterFilter = useFilterSharestore((state) => state.characterFilter);

  const { data: characters, isLoading } = useQuery({
    queryKey: ["characters", "sidebar", characterFilter],
    queryFn: () => getAllCharacters(characterFilter),
    staleTime: 1000 * 60 * 5, //5 minutos
  });

  const { data: origins, isLoading: isLoadingOrigin } = useQuery({
    queryKey: ["origin", "sidebar"],
    queryFn: () => getAllOrigin(),
    staleTime: 1000 * 60 * 5, //5 minutos
  });
  const { data: gender, isLoading: isLoadingGneder } = useQuery({
    queryKey: ["gender", "sidebar"],
    queryFn: () => getAllGender(),
    staleTime: 1000 * 60 * 5, //5 minutos
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterModal = (isOpenFilter: boolean) => {
    setIsOpenFilter(isOpenFilter);
  };

  return (
    <div className="flex ">
      <button
        onClick={toggleSidebar}
        className={`${
          isOpen ? "hidden" : "block"
        } p-4 text-primary-Primary_700 text-lg lg:hidden shadow-none border-none hover:bg-gray-100 pt-12`}
      >
        <FaArrowLeftLong className="fas fa-bars" size={30} />
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block bg-gray-100 lg:w-96  w-screen  h-screen xs:fixed rounded-none border-none`}
      >
        <div className="p-4 space-y-4 pt-16 relative">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Rick and Morty list</h1>
          </div>
          <SearchSideMenu
            handleFilterModal={handleFilterModal}
            isOpenFilter={isOpenFilter}
          />
          {isOpenFilter && (
            <ModalFilterSidebar origins={origins ?? []} gender={gender ?? []} />
          )}
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
