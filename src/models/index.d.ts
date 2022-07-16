import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SwimmerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Swimmer {
  readonly id: string;
  readonly lname: string;
  readonly fname: string;
  readonly swimevent: string;
  readonly time: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Swimmer, SwimmerMetaData>);
  static copyOf(source: Swimmer, mutator: (draft: MutableModel<Swimmer, SwimmerMetaData>) => MutableModel<Swimmer, SwimmerMetaData> | void): Swimmer;
}