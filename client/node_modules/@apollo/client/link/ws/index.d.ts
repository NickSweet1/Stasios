import type { ClientOptions } from "subscriptions-transport-ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import type { Operation, FetchResult } from "../core/index.js";
import { ApolloLink } from "../core/index.js";
import type { Observable } from "../../utilities/index.js";
export declare namespace WebSocketLink {
    interface Configuration {
        uri: string;
        options?: ClientOptions;
        webSocketImpl?: any;
    }
}
export import WebSocketParams = WebSocketLink.Configuration;
export declare class WebSocketLink extends ApolloLink {
    private subscriptionClient;
    constructor(paramsOrClient: WebSocketLink.Configuration | SubscriptionClient);
    request(operation: Operation): Observable<FetchResult> | null;
}
//# sourceMappingURL=index.d.ts.map