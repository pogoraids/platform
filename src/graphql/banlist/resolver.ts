import { BanlistMap } from "./banlist.map";
import { Query } from './banlist.query';
import { Mutation } from './banlist.mutation';

export const resolver = {
    Query,
    Banlist: BanlistMap,
    Mutation
};