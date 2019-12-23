import { resolver as rs } from 'graphql-sequelize';
import { Banlist, TournamentSettings } from '../../models';
import to from 'await-to-js';

export const Mutation = {
    createBanlist: rs(Banlist, {
        before: async (findOptions, { data }) => {
            let err, banlist;
            let [errQ, ts] = await to(TournamentSettings.findAll({ where: { banlistId: data.id } }));
            if (errQ) {
                throw errQ;
            }

            if (ts && ts.length > 0) {
                ts.forEach(async (setting) => {
                    data.settingsId = setting.id;
                    [err, banlist] = await to(Banlist.create(data));

                    if (err) {
                        throw err;
                    }
                });
                
                findOptions.where = { id: data.id };
            } else {
                [err, banlist] = await to(Banlist.create(data));
                if (err) {
                    throw err;
                }
                findOptions.where = { id: banlist.id };
            }
            return findOptions;
        },
        after: (banlist) => {
            return banlist;
        }
    }),
};
