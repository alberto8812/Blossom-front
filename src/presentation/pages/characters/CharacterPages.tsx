import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { GiHearts } from "react-icons/gi";
import { CharacterDetailSkeleton } from "./components/CharacterDetailSkeleton";
import { getAllCharactersById } from "../../../action";

export const CharacterPages = () => {
  const { id } = useParams();

  const { data: characters, isLoading } = useQuery({
    queryKey: ["characters", id],
    queryFn: () => getAllCharactersById(id ?? ""),
    staleTime: 1000 * 60 * 5, //5 minutos
  });

  if (isLoading) {
    return <CharacterDetailSkeleton />;
  }

  return (
    <div className="max-w-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="relative">
          <img
            src={`${characters?.img ? characters.img : "./img/profile.jpg"}`}
            alt="Character avatar"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div className="absolute -right-1 -bottom-1">
            <GiHearts
              className="w-6 h-6 text-gray-500 fill-current"
              size={20}
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">{characters?.name}</h1>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Specie</h2>
          <p className="text-gray-600">{characters?.specie}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">Status</h2>
          <p className="text-gray-600">{characters?.status}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">Occupation</h2>
          <p className="text-gray-600">{characters?.origin}</p>
        </div>
      </div>
    </div>
  );
};
