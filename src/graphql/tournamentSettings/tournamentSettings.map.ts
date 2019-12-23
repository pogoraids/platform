import { resolver } from 'graphql-sequelize';
import { TournamentSettings } from '../../models';
import to from 'await-to-js';

export const TournamentSettingsMap = {
    banlist: resolver(TournamentSettings.associations.banlist)
};