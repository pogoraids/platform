import { resolver } from "graphql-sequelize";
import { Pod } from "../../models";

export const Query = {
    getAllPods: resolver(Pod),
    getUserPods: resolver(Pod),
    getTournamentPods: resolver(Pod),
    getPod: resolver(Pod),
};
