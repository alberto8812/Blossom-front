import { FaRegHeart } from "react-icons/fa6";

interface Props {
  name?: string;
  species?: string;
  img?: string;
}

export const ProfileCard = ({ name = "", species = "", img }: Props) => {
  console.log(name, species, img);
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
        <button className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-gray-300 hover:bg-primary-Primary_100 shadow-none border-none">
          <FaRegHeart className="fas fa-star" size={20} />
        </button>
      </div>
    </div>
  );
};
