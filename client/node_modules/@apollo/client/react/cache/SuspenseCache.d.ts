import type { ObservableQuery } from "../../core/index.js";
import { InternalQueryReference } from "./QueryReference.js";
import type { CacheKey } from "./types.js";
export interface SuspenseCacheOptions {
    autoDisposeTimeoutMs?: number;
}
export declare class SuspenseCache {
    private queryRefs;
    private options;
    constructor(options?: SuspenseCacheOptions);
    getQueryRef<TData = any>(cacheKey: CacheKey, createObservable: () => ObservableQuery<TData>): InternalQueryReference<TData>;
}
//# sourceMappingURL=SuspenseCache.d.ts.map