import { wrapPromiseWithState } from "../../../utilities/index.js";
import * as React from "react";
var useKey = "use";
var realHook = React[useKey];
export var __use = realHook ||
    function __use(promise) {
        var statefulPromise = wrapPromiseWithState(promise);
        switch (statefulPromise.status) {
            case "pending":
                throw statefulPromise;
            case "rejected":
                throw statefulPromise.reason;
            case "fulfilled":
                return statefulPromise.value;
        }
    };
//# sourceMappingURL=__use.js.map