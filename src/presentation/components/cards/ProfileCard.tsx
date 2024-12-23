import { FaRegHeart } from "react-icons/fa6";

import { useFavoritesCharacterStore } from "../../stores";
import { NameGender } from "../../../domain";
import { FaHeart } from "react-icons/fa";

interface Props {
  name?: string;
  species?: NameGender;
  img?: string;
  id?: string;
  favorite?: boolean;
}

export const ProfileCard = ({
  name = "",
  species = NameGender.Alien,
  img,
  id = "",
  favorite = false,
}: Props) => {
  const addFavoriteAndremoVe = useFavoritesCharacterStore(
    (state) => state.addFavoriteAndremoVe
  );
  return (
    <div className="rounded-lg border-none bg-card text-card-foreground shadow-none mb-1 h-min flex items-center aligh-center max-w-full py-2 px-4">
      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full min-h-[32px] min-w-[32px]">
        <img
          className="aspect-square h-full w-full"
          src={`${img && img !== "" ? img : "./img/profile.jpg"}`}
          alt="Profile"
        />
      </span>
      <div className="w-screen ">
        <p className="text-sm font-extrabold text-zinc-950 leading-[100%] pl-4 md:text-1xl">
          {name}
        </p>
        <p className="text-sm font-medium text-zinc-500  md:mt-2 pl-4 md:text-1xl ">
          {species}
        </p>
      </div>
      <div className="flex  justify-end items-end w-20  ">
        <button
          onClick={() =>
            addFavoriteAndremoVe({
              name,
              specie: species,
              img: `${img && img !== "" ? img : "./img/profile.jpg"}`,
              id,
            })
          }
          className={`flex items-center justify-center h-8 w-8 rounded-full bg-white ${
            favorite ? "text-secondary-Secondary_600" : "text-gray-300"
          } hover:bg-primary-Primary_100 shadow-none border-none`}
        >
          {favorite ? (
            <FaHeart className="fas fa-star" size={20} />
          ) : (
            <FaRegHeart className="fas fa-star" size={20} />
          )}
        </button>
      </div>
    </div>
  );
};
