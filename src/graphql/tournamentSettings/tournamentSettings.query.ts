import { resolver } from 'graphql-sequelize';
import { TournamentSettings, Banlist } from '../../models';
import to from 'await-to-js';

export const Query = {
    getSettings: resolver(TournamentSettings),
};