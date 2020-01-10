import { GraphQLDate, GraphQlDateTime } from 'graphql-iso-date';

export const resolver = {
    Date: GraphQLDate,
    DateTime: GraphQlDateTime,
}