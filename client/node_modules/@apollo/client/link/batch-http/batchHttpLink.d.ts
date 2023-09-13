import type { Operation, FetchResult } from "../core/index.js";
import { ApolloLink } from "../core/index.js";
import { Observable } from "../../utilities/index.js";
import type { HttpOptions } from "../http/index.js";
import { BatchLink } from "../batch/index.js";
export declare namespace BatchHttpLink {
    type Options = Pick<BatchLink.Options, "batchMax" | "batchDebounce" | "batchInterval" | "batchKey"> & Omit<HttpOptions, "useGETForQueries">;
}
export declare class BatchHttpLink extends ApolloLink {
    private batchDebounce?;
    private batchInterval;
    private batchMax;
    private batcher;
    constructor(fetchParams?: BatchHttpLink.Options);
    request(operation: Operation): Observable<FetchResult> | null;
}
//# sourceMappingURL=batchHttpLink.d.ts.map