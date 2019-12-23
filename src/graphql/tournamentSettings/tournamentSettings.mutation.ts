import { resolver as rs } from 'graphql-sequelize';
import { TournamentSettings, Banlist } from '../../models';
import to from 'await-to-js';

export const Mutation = {
  createSettings: rs(TournamentSettings, {
    before: async (findOptions, { data }) => {
      let err, tournamentSettings;
      [err, tournamentSettings] = await to(TournamentSettings.create(data));
      if (err) {
        throw err;
      }
      findOptions.where = { id: tournamentSettings.id };
      return findOptions;
    },
    after: async (tournamentSettings) => {
      const banlist = await Banlist.findAll({where: { id: tournamentSettings.banlistId}});
      
      (banlist as any).forEach(async (b: Banlist) => {
        b.settingsId = tournamentSettings.id;
        let [err, ins] = to(await b.save());

        if (err) { throw err; }
      });
      
      return tournamentSettings;
    }
  }),
  modifySettings: rs(TournamentSettings, {
    before: async (modifyData, { id, data }) => {
      let err, tournamentSettings;
      modifyData.where = { id };
      [err, tournamentSettings] = await to(TournamentSettings.update(data, modifyData));
      if (err) {
        throw err;
      }
      return modifyData;
    },
    after: (tournamentSettings) => {
      return tournamentSettings;
    }
  })
};