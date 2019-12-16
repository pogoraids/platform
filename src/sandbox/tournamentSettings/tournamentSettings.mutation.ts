import { resolver as rs } from 'graphql-sequelize';
import TournamentSettings from '../../models/tournamentSettings.model';
import to from 'await-to-js';

export const Mutation = {
    createSettings: rs(TournamentSettings, {
      before: async (findOptions, { data }) => {
        let err, tournamentSettings;
        [err, tournamentSettings] = await to(TournamentSettings.create(data) );
        if (err) {
          throw err;
        }
        findOptions.where = { id:tournamentSettings.id };
        return findOptions;
      },
      after: (tournamentSettings) => {
        return tournamentSettings;
      }
    }),
};