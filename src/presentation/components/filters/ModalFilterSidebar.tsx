import { useState } from "react";
import { CharacterFilter, NameFilter } from "../../../domain";
import { getAllGender, getAllOrigin } from "../../../action";
import { useQuery } from "@tanstack/react-query";

interface Props {
  handleFilterSearch: (
    filterData?: CharacterFilter,
    DeleteField?: NameFilter[]
  ) => void;
}

export const ModalFilterSidebar = ({ handleFilterSearch }: Props) => {
  const [characterFilter, setCharacterFilter] = useState<CharacterFilter>({});
  const [specieFilter, setSpecieFilter] = useState<CharacterFilter>({});

  const { data: origins, isLoading } = useQuery({
    queryKey: ["origin", "sidebar"],
    queryFn: () => getAllOrigin(),
    staleTime: 1000 * 60 * 5, //5 minutos
  });
  const { data: gender, isLoading: isLoadingGneder } = useQuery({
    queryKey: ["gender", "sidebar"],
    queryFn: () => getAllGender(),
    staleTime: 1000 * 60 * 5, //5 minutos
  });

  const sendFilter = () => {
    if (
      characterFilter.originId === "all" &&
      specieFilter.speciesId === "all"
    ) {
      handleFilterSearch({}, ["speciesId", "originId"]);
      return;
    }
    if (characterFilter.originId === "all") {
      handleFilterSearch({}, ["originId"]);
      return;
    }
    if (specieFilter.speciesId === "all") {
      handleFilterSearch({}, ["speciesId"]);
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
          <h3 className="text-gray-600 text-sm">origins</h3>
          <div className="flex justify-evenly flex-wrap align-baseline gap-2">
            <button
              onClick={() => setCharacterFilter({ originId: "all" })}
              className={`px-6 py-2 rounded-lg text-xs ${
                characterFilter.originId === "all"
                  ? "bg-primary-Primary_100 text-primary-Primary_700"
                  : "bg-white border text-gray-700"
              }`}
            >
              All
            </button>

            {origins?.map((origin) => (
              <button
                key={origin.id}
                onClick={() => setCharacterFilter({ originId: origin.id })}
                className={`px-6 py-2 rounded-lg text-xs ${
                  characterFilter.originId === origin.id
                    ? "bg-primary-Primary_100 text-primary-Primary_700"
                    : "bg-white border text-gray-700"
                }`}
              >
                {origin?.name?.slice(0, 10)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-gray-600 text-sm">Specie</h3>
          <div className="flex justify-evenly flex-wrap align-baseline gap-2">
            <button
              onClick={() => setSpecieFilter({ speciesId: "all" })}
              className={`px-6 py-2 rounded-lg text-xs ${
                specieFilter.speciesId === "all"
                  ? "bg-primary-Primary_100 text-primary-Primary_700"
                  : "bg-white border text-gray-700"
              }`}
            >
              All
            </button>

            {gender?.map((specie) => (
              <button
                key={specie.id}
                onClick={() => setSpecieFilter({ speciesId: specie.id })}
                className={`px-6 py-2 rounded-lg text-xs ${
                  specieFilter.speciesId === specie.id
                    ? "bg-primary-Primary_100 text-primary-Primary_700"
                    : "bg-white border text-gray-700"
                }`}
              >
                {specie?.name?.slice(0, 10)}
              </button>
            ))}
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
