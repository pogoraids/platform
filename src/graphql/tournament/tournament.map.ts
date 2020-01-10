import { Tournament } from "../../models";
import { resolver } from 'graphql-sequelize';

export const TournamentMap = {
    members: resolver(Tournament.associations.members),
    pods: resolver(Tournament.associations.pods),
    settings: resolver(Tournament.associations.settings)
};
