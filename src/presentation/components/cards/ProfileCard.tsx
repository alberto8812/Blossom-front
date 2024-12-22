import { FaRegHeart } from "react-icons/fa6";

export const ProfileCard = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-5 h-min flex items-center aligh-center max-w-full py-2 px-4">
      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full min-h-[32px] min-w-[32px]">
        <img
          className="aspect-square h-full w-full"
          src="https://lh3.googleusercontent.com/a/ACg8ocKIWdfb7aIybpzBFfDOHi2TyFWvW73xKa2hXx8Zw1Xzoz62T18=s96-c"
          alt="Profile"
        />
      </span>
      <div className="w-screen ">
        <p className="text-sm font-extrabold text-zinc-950 leading-[100%] dark:text-white pl-4 md:text-1xl">
          carlos velasco
        </p>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 md:mt-2 pl-4 md:text-1xl ">
          CTO and Founder
        </p>
      </div>
      <div className="flex  justify-end items-end w-screen ">
        <button className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-gray-300 shadow-none border-none">
          <FaRegHeart className="fas fa-star" size={20} />
        </button>
      </div>
    </div>
  );
};
