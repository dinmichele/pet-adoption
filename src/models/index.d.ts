import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPetAdoption = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PetAdoption, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly age: string;
  readonly heading: string;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPetAdoption = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PetAdoption, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly age: string;
  readonly heading: string;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PetAdoption = LazyLoading extends LazyLoadingDisabled ? EagerPetAdoption : LazyPetAdoption

export declare const PetAdoption: (new (init: ModelInit<PetAdoption>) => PetAdoption) & {
  copyOf(source: PetAdoption, mutator: (draft: MutableModel<PetAdoption>) => MutableModel<PetAdoption> | void): PetAdoption;
}