import type { Operation, FetchResult, NextLink } from "../core/index.js";
import { ApolloLink } from "../core/index.js";
import type { Observable } from "../../utilities/index.js";
import type { BatchHandler } from "./batching.js";
export type { BatchableRequest, BatchHandler } from "./batching.js";
export { OperationBatcher } from "./batching.js";
export declare namespace BatchLink {
    interface Options {
        batchInterval?: number;
        batchDebounce?: boolean;
        batchMax?: number;
        batchHandler?: BatchHandler;
        batchKey?: (operation: Operation) => string;
    }
}
export declare class BatchLink extends ApolloLink {
    private batcher;
    constructor(fetchParams?: BatchLink.Options);
    request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null;
}
//# sourceMappingURL=batchLink.d.ts.map