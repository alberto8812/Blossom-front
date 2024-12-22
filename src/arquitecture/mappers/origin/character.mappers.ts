import { OriginDB } from "../..";
import { OriginEntity } from "../../../domain";

export const originMappers = (Origin: OriginDB): OriginEntity => {
    return {
        id: Origin.id,
        name: Origin.name,
    };
}