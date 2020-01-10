import { TournamentMap } from "./tournament.map";
import { Query } from "./tournament.query";
import { Mutation } from "./tournament.mutation";

export const resolver = {
    Query,
    Tournament: TournamentMap,
    Mutation,
};