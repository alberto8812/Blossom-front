export interface CharacterEntity {
    name: string;
    specie: Name;
    img: string;
    id: string;
    origin?: string
    status?: string


}

export enum Name {
    Alien = "Alien",
    Human = "Human",
}
