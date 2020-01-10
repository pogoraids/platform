import { resolver } from "graphql-sequelize";
import { Tournament } from "../../models";

export const Query = {
    getAllTournaments: resolver(Tournament),
    getTournament: resolver(Tournament),
};
