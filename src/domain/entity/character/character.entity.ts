export interface CharacterEntity {
    name: string;
    specie: NameGender;
    img: string;
    id: string;
    origin?: string
    status?: string


}

enum NameGender {
    Alien = "Alien",
    Human = "Human",
}
