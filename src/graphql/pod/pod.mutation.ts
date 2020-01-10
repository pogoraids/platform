import { resolver as rs } from 'graphql-sequelize';
import { Pod } from '../../models';
import to from 'await-to-js';

export const Mutation = {
    createPod: rs(Pod, {
        before: async (findOptions, { data }) => {
            let err, pod;
            [err, pod] = await to(Pod.create(data));
            if (err) {
                throw err;
            }
            findOptions.where = { id: pod.id };

            return findOptions;
        },
        after: (pod) => {
            return pod;
        }
    }),
    modifyPod: rs(Pod, {
        before: async (modifyData, { id, data }) => {
          let err, pod;
          modifyData.where = { id };
          [err, pod] = await to(Pod.update(data, modifyData));
          if (err) {
            throw err;
          }
          
          return modifyData;
        },
        after: (pod) => {
          return pod;
        }
      })
};