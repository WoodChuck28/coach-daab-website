// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Swimmer } = initSchema(schema);

export {
  Swimmer
};