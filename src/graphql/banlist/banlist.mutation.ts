import { resolver as rs } from 'graphql-sequelize';
import { Banlist } from '../../models';
import to from 'await-to-js';

export const Mutation = {
    createBanlist: rs(Banlist, {
        before: async (findOptions, { data }) => {
            let err, banlist;
            [err, banlist] = await to(Banlist.create(data) );
            if (err) {
              throw err;
            }
            findOptions.where = { id:banlist.id };
            return findOptions;
          },
          after: (banlist) => {
            return banlist;
          }
    }),
};
