import { CiSearch } from "react-icons/ci";
import { CiSliderVertical } from "react-icons/ci";

interface Props {
  handleFilterModal: (isOpenFilter: boolean) => void;
  isOpenFilter: boolean;
}

export const SearchSideMenu = ({ handleFilterModal, isOpenFilter }: Props) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <CiSearch className="w-5 h-5 text-gray-400 dark:text-gray-300" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
          placeholder="Search or filter results "
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-transparent  hover:bg-primary-Primary_100 rounded-lg text-sm px-1 py-2 shadow-none border-none "
          onClick={() => handleFilterModal(!isOpenFilter)}
        >
          <CiSliderVertical className="w-5 h-5 " color="#5A3696" />
        </button>
      </div>
    </div>
  );
};
