import { ResponseGeneric } from "../common/response.interface";

export interface GenderResponse {
    get_all_gender: ResponseGeneric<SpecieDB>;
}


export interface SpecieDB {
    id: string;
    name: NameGender;
}
enum NameGender {
    Alien = "Alien",
    Human = "Human",
}