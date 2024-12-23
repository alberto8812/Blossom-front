import { SpecieDB } from "../.."
import { GenderEntity } from "../../../domain"


export const genderMappers = (gender: SpecieDB): GenderEntity => {
    return {
        id: gender.id,
        name: gender.name
    }
}