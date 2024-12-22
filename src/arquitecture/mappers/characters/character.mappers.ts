import { CharacterEntity } from "../../../domain";
import { CharacterDB } from "../../interfaces/chracters/character.interface.db";

export const characterMappers = (Character: CharacterDB): CharacterEntity => {
    return {
        name: Character.name,
        specie: Character.specie.name,
        img: Character.img,
        id: Character.id
    }

}