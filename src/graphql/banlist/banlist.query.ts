import { resolver } from 'graphql-sequelize';
import { Banlist } from '../../models';

export const Query = {
    getFullBanlist: resolver(Banlist),
    getAllowedBanlist: resolver(Banlist, {
        before: async(findOptions, { id, settingsId }, {banlist}) => {
            findOptions.where = { id, settingsId, allowed: true };
            return findOptions;
        },
        after: (banlist) => {
            return banlist;
        }
    }),
};