import { TournamentSettingsMap } from "./tournamentSettings.map";
import { Query } from './tournamentSettings.query';
import { Mutation } from './tournamentSettings.mutation';

export const resolver = {
    Query,
    TournamentSettings: TournamentSettingsMap,
    Mutation
};