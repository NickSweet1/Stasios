import * as React from "react";
import { useSyncExternalStore } from "./useSyncExternalStore.js";
export function useReactiveVar(rv) {
    return useSyncExternalStore(React.useCallback(function (update) {
        return rv.onNextChange(function onNext() {
            update();
            rv.onNextChange(onNext);
        });
    }, [rv]), rv, rv);
}
//# sourceMappingURL=useReactiveVar.js.map