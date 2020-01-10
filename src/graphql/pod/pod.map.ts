import { Pod } from "../../models";
import { resolver } from 'graphql-sequelize';

export const PodMap = {
    members: resolver(Pod.associations.members),
    tournament: resolver(Pod.associations.tournament)
}