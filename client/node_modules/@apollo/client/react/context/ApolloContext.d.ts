import * as React from "react";
import type { ApolloClient } from "../../core/index.js";
import type { RenderPromises } from "../ssr/index.js";
export interface ApolloContextValue {
    client?: ApolloClient<object>;
    renderPromises?: RenderPromises;
}
export declare function getApolloContext(): React.Context<ApolloContextValue>;
export declare const resetApolloContext: typeof getApolloContext;
//# sourceMappingURL=ApolloContext.d.ts.map