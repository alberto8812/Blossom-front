import { create } from "zustand"
import { CharacterFilter, NameFilter } from "../../../domain"


interface FieldFileterShare {
    specieFilter: CharacterFilter
    originFilter: CharacterFilter
    characterFilter: CharacterFilter
    setOriginCharacterFilter: (characterFilters?: CharacterFilter) => void
    setSpeciesCharacterFilter: (characterFilters?: CharacterFilter) => void
    setValidatedFieldFilter: () => void

}

export const useFilterSharestore = create<FieldFileterShare>()(
    (set, get) => ({

        specieFilter: {},
        originFilter: {},
        characterFilter: {},
        setValidatedFieldFilter: () => {
            const newEspecieFilter = { ...get().specieFilter }
            const newOriginFilter = { ...get().originFilter }

            if (newEspecieFilter.speciesId === "all") {
                delete newEspecieFilter.speciesId
            }
            if (newOriginFilter.originId === "all") {
                delete newOriginFilter.originId
            }
            set({ characterFilter: { ...newEspecieFilter, ...newOriginFilter } })

        },
        setOriginCharacterFilter: (characterFilters?: CharacterFilter) => {
            set({ originFilter: characterFilters })
        },
        setSpeciesCharacterFilter: (characterFilters?: CharacterFilter) => {
            set({ specieFilter: characterFilters })
        },

    })

)