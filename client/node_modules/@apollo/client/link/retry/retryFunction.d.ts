import type { Operation } from "../core/index.js";
export interface RetryFunction {
    (count: number, operation: Operation, error: any): boolean | Promise<boolean>;
}
export interface RetryFunctionOptions {
    max?: number;
    retryIf?: (error: any, operation: Operation) => boolean | Promise<boolean>;
}
export declare function buildRetryFunction(retryOptions?: RetryFunctionOptions): RetryFunction;
//# sourceMappingURL=retryFunction.d.ts.map