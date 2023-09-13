export { ApolloClient, mergeOptions } from "./ApolloClient.js";
export { ObservableQuery } from "./ObservableQuery.js";
export { NetworkStatus, isNetworkRequestSettled } from "./networkStatus.js";
export * from "./types.js";
export { isApolloError, ApolloError } from "../errors/index.js";
export { Cache, ApolloCache, InMemoryCache, MissingFieldError, defaultDataIdFromObject, makeVar, } from "../cache/index.js";
export * from "../cache/inmemory/types.js";
export * from "../link/core/index.js";
export * from "../link/http/index.js";
export { fromError, toPromise, fromPromise, throwServerError, } from "../link/utils/index.js";
export { DocumentTransform, Observable, isReference, makeReference, } from "../utilities/index.js";
import { setVerbosity } from "ts-invariant";
export { setVerbosity as setLogVerbosity };
setVerbosity(globalThis.__DEV__ !== false ? "log" : "silent");
export { gql, resetCaches, disableFragmentWarnings, enableExperimentalFragmentVariables, disableExperimentalFragmentVariables, } from "graphql-tag";
//# sourceMappingURL=index.js.map