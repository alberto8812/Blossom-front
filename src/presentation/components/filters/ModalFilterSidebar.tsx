import { useState } from "react";

interface Props {
  handleFilterModal: (isOpenFilter: boolean) => void;
}

export const ModalFilterSidebar = ({ handleFilterModal }: Props) => {
  const [characterFilter, setCharacterFilter] = useState("all");
  const [specieFilter, setSpecieFilter] = useState("human");
  return (
    <div className=" absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border p-4 z-30">
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-gray-600 text-sm">Character</h3>
          <div className="flex gap-2">
            <button
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
                  ? "bg-purple-100 text-purple-700"
                  : "bg-white border text-gray-700"
              }`}
            >
              Starred
            </button>
            <button
              onClick={() => setCharacterFilter("others")}
              className={`px-6 py-2 rounded-lg text-xs ${
                characterFilter === "others"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-white border text-gray-700"
              }`}
            >
              Others
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-gray-600 text-sm">Specie</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setSpecieFilter("all")}
              className={`px-6 py-2 rounded-lg text-xs ${
                specieFilter === "all"
                  ? "bg-purple-100 text-purple-700"
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
            </button>
          </div>
        </div>

        <button
          onClick={() => handleFilterModal(false)}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors text-xs"
        >
          Filter
        </button>
      </div>
    </div>
  );
};
