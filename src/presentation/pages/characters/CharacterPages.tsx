import { useParams } from "react-router-dom";

import { CharacterDetailSkeleton } from "./components/CharacterDetailSkeleton";
import { useQuery } from "@tanstack/react-query";
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
            src="/placeholder.svg?height=80&width=80"
            alt="Character avatar"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="absolute -right-1 -bottom-1">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-green-500 fill-current"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">
          Abadango Cluster Princess
        </h1>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Specie</h2>
          <p className="text-gray-600">Alien</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">Status</h2>
          <p className="text-gray-600">Alive</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">Occupation</h2>
          <p className="text-gray-600">Princess</p>
        </div>
      </div>
    </div>
  );
};
