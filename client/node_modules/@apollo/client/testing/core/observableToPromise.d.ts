import type { ObservableQuery, ApolloQueryResult } from "../../core/index.js";
import type { ObservableSubscription } from "../../utilities/index.js";
export type Options = {
    observable: ObservableQuery<any>;
    shouldResolve?: boolean;
    wait?: number;
    errorCallbacks?: ((error: Error) => any)[];
};
export type ResultCallback = (result: ApolloQueryResult<any>) => any;
export declare function observableToPromiseAndSubscription({ observable, shouldResolve, wait, errorCallbacks }: Options, ...cbs: ResultCallback[]): {
    promise: Promise<any[]>;
    subscription: ObservableSubscription;
};
export default function (options: Options, ...cbs: ResultCallback[]): Promise<any[]>;
//# sourceMappingURL=observableToPromise.d.ts.map