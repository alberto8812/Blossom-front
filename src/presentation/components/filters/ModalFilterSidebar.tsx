import { useState } from "react";
import { CharacterFilter, NameFilter } from "../../../domain";

interface Props {
  handleFilterSearch: (
    filterData?: CharacterFilter,
    DeleteField?: NameFilter[]
  ) => void;
}

export const ModalFilterSidebar = ({ handleFilterSearch }: Props) => {
  const [characterFilter, setCharacterFilter] = useState<CharacterFilter>({});
  const [specieFilter, setSpecieFilter] = useState<CharacterFilter>({});

  const sendFilter = () => {
    if (
      characterFilter.originId === "all" &&
      specieFilter.speciesId === "all"
    ) {
      handleFilterSearch({}, ["speciesId", "originId"]);
      return;
    }
    handleFilterSearch({
      ...characterFilter,
      ...specieFilter,
    });
  };

  return (
    <div className=" absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border p-4 z-30">
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-gray-600 text-sm">Character</h3>
          <div className="flex justify-evenly  gap-2">
            {/* <button
              onClick={() => setCharacterFilter("all")}
              className={`px-6 py-2 rounded-lg text-xs ${
                characterFilter === "all"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-white border text-gray-700"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setCharacterFilter("starred")}
              className={`px-6 py-2 rounded-lg  text-xs ${
                characterFilter === "starred"
                  ? "bg-primary-Primary_100 text-primary-Primary_700"
                  : "bg-white border text-gray-700"
              }`}
            >
              Starred
            </button>
            <button
              onClick={() => setCharacterFilter("others")}
              className={`px-6 py-2 rounded-lg text-xs ${
                characterFilter === "others"
                  ? "bg-primary-Primary_100 text-primary-Primary_700"
                  : "bg-white border text-gray-700"
              }`}
            >
              Others
            </button> */}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-gray-600 text-sm">Specie</h3>
          <div className="flex gap-2 justify-evenly">
            {/* <button
              onClick={() => setSpecieFilter("all")}
              className={`px-6 py-2 rounded-lg text-xs ${
                specieFilter === "all"
                  ? "bg-primary-Primary_100 text-primary-Primary_700"
                  : "bg-white border text-gray-700"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSpecieFilter("human")}
              className={`px-6 py-2 rounded-lg text-xs ${
                specieFilter === "human"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-white border text-gray-700"
              }`}
            >
              Human
            </button>
            <button
              onClick={() => setSpecieFilter("alien")}
              className={`px-6 py-2 rounded-lg  text-xs ${
                specieFilter === "alien"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-white border text-gray-700"
              }`}
            >
              Alien
            </button> */}
          </div>
        </div>

        <button
          onClick={() => sendFilter()}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors text-xs"
        >
          Filter
        </button>
      </div>
    </div>
  );
};
