import { PodMap } from "./pod.map";
import { Query } from './pod.query';
import { Mutation } from './pod.mutation';

export const resolver = {
    Query,
    Pod: PodMap,
    Mutation
};