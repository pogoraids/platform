import { resolver } from 'graphql-sequelize';
import TournamentSettings from '../../models/tournamentSettings.model';
import to from 'await-to-js';

export const TournamentSettingsMap = {
    banlist: resolver(TournamentSettings.associations.banlist),
};