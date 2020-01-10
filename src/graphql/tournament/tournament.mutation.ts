import { resolver as rs } from 'graphql-sequelize';
import { Tournament } from '../../models';
import to from 'await-to-js';

export const Mutation = {
    createTournament: rs(Tournament, {
        before: async (findOptions, { data }) => {
            let err, tournament;
            [err, tournament] = await to(Tournament.create(data));
            if (err) {
                throw err;
            }
            findOptions.where = { id: tournament.id };

            return findOptions;
        },
        after: (tournament) => {
            return tournament;
        }
    }),
    modifyTournament: rs(Tournament, {
        before: async (modifyData, { id, data }) => {
          let err, tournament;
          modifyData.where = { id };
          [err, tournament] = await to(Tournament.update(data, modifyData));
          if (err) {
            throw err;
          }
          return modifyData;
        },
        after: (tournament) => {
          return tournament;
        }
      })
};