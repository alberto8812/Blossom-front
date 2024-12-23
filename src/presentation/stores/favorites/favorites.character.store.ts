import { create } from "zustand"
import { CharacterEntity } from "../../../domain"


interface FavoritesCharacterStore {
    favorites: CharacterEntity[]
    addFavoriteAndremoVe: (character: CharacterEntity) => void
    removeFavorite: (character: CharacterEntity) => void
}

export const useFavoritesCharacterStore = create<FavoritesCharacterStore>(
    (set) => ({
        favorites: [],
        addFavoriteAndremoVe: (character) => {
            set((state) => {
                const findCharacter = state.favorites.find((fav) => fav.id === character.id)
                if (!findCharacter) {
                    return {
                        favorites: [...state.favorites, character]
                    }
                }
                const newFavorites = state.favorites.filter((fav) => fav.id !== character.id)
                return { favorites: newFavorites }
            })
        },
        removeFavorite: (character) => {
            set((state) => ({
                favorites: state.favorites.filter((fav) => fav.id !== character.id)
            }))
        }
    })
)
