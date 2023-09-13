import { InvariantError } from "ts-invariant";
import type { ErrorCodes } from "../../invariantErrorCodes.js";
type LogFunction = {
    (message?: any, ...optionalParams: unknown[]): void;
};
type WrappedInvariant = {
    (condition: any, message?: string | number, ...optionalParams: unknown[]): asserts condition;
    debug: LogFunction;
    log: LogFunction;
    warn: LogFunction;
    error: LogFunction;
};
declare const invariant: WrappedInvariant;
declare function newInvariantError(message?: string | number, ...optionalParams: unknown[]): InvariantError;
declare const ApolloErrorMessageHandler: unique symbol;
declare global {
    interface Window {
        [ApolloErrorMessageHandler]?: {
            (message: string | number, args: unknown[]): string | undefined;
        } & ErrorCodes;
    }
}
export { invariant, InvariantError, newInvariantError, ApolloErrorMessageHandler, };
//# sourceMappingURL=invariantWrappers.d.ts.map