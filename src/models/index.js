// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PetAdoption } = initSchema(schema);

export {
  PetAdoption
};