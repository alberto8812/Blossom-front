// Generated by https://quicktype.io
import { OriginDB } from "../..";
import { ResponseGeneric } from "../common/response.interface";
import { SpecieDB } from "../specie/specie.interface";

export interface ResponseCharacter {
    get_all_character: ResponseGeneric<CharacterDB>;
}

export interface CharacterDB {
    id: string;
    name: string;
    specie: SpecieDB;
    img: string;
    status: string;
    origin: OriginDB;
}

