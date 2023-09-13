import type { DocumentNode, FieldNode } from "graphql";
import type { Transaction } from "../core/cache.js";
import type { StoreObject, StoreValue, Reference } from "../../utilities/index.js";
import type { FieldValueGetter } from "./entityStore.js";
import type { TypePolicies, PossibleTypesMap, KeyFieldsFunction, StorageType, FieldMergeFunction } from "./policies.js";
import type { Modifiers, ToReferenceFunction, CanReadFunction, AllFieldsModifier } from "../core/types/common.js";
import type { FragmentRegistryAPI } from "./fragmentRegistry.js";
export type { StoreObject, StoreValue, Reference };
export interface IdGetterObj extends Object {
    __typename?: string;
    id?: string;
    _id?: string;
}
export declare type IdGetter = (value: IdGetterObj) => string | undefined;
export interface NormalizedCache {
    has(dataId: string): boolean;
    get(dataId: string, fieldName: string): StoreValue;
    merge(olderId: string, newerObject: StoreObject): void;
    merge(olderObject: StoreObject, newerId: string): void;
    modify<Entity extends Record<string, any>>(dataId: string, fields: Modifiers<Entity> | AllFieldsModifier<Entity>): boolean;
    delete(dataId: string, fieldName?: string): boolean;
    clear(): void;
    toObject(): NormalizedCacheObject;
    replace(newData: NormalizedCacheObject): void;
    retain(rootId: string): number;
    release(rootId: string): number;
    getFieldValue: FieldValueGetter;
    toReference: ToReferenceFunction;
    canRead: CanReadFunction;
    getStorage(idOrObj: string | StoreObject, ...storeFieldNames: (string | number)[]): StorageType;
}
export interface NormalizedCacheObject {
    __META?: {
        extraRootIds: string[];
    };
    [dataId: string]: StoreObject | undefined;
}
export type OptimisticStoreItem = {
    id: string;
    data: NormalizedCacheObject;
    transaction: Transaction<NormalizedCacheObject>;
};
export type ReadQueryOptions = {
    store: NormalizedCache;
    query: DocumentNode;
    variables?: Object;
    previousResult?: any;
    canonizeResults?: boolean;
    rootId?: string;
    config?: ApolloReducerConfig;
};
export type DiffQueryAgainstStoreOptions = ReadQueryOptions & {
    returnPartialData?: boolean;
};
export type ApolloReducerConfig = {
    dataIdFromObject?: KeyFieldsFunction;
    addTypename?: boolean;
};
export interface InMemoryCacheConfig extends ApolloReducerConfig {
    resultCaching?: boolean;
    possibleTypes?: PossibleTypesMap;
    typePolicies?: TypePolicies;
    resultCacheMaxSize?: number;
    canonizeResults?: boolean;
    fragments?: FragmentRegistryAPI;
}
export interface MergeInfo {
    field: FieldNode;
    typename: string | undefined;
    merge: FieldMergeFunction;
}
export interface MergeTree {
    info?: MergeInfo;
    map: Map<string | number, MergeTree>;
}
export interface ReadMergeModifyContext {
    store: NormalizedCache;
    variables?: Record<string, any>;
    varString?: string;
}
//# sourceMappingURL=types.d.ts.map