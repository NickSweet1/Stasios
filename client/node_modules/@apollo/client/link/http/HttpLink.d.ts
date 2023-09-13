import type { RequestHandler } from "../core/index.js";
import { ApolloLink } from "../core/index.js";
import type { HttpOptions } from "./selectHttpOptionsAndBody.js";
export declare class HttpLink extends ApolloLink {
    options: HttpOptions;
    requester: RequestHandler;
    constructor(options?: HttpOptions);
}
//# sourceMappingURL=HttpLink.d.ts.map