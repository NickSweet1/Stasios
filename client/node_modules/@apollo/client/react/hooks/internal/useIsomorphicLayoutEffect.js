import * as React from "react";
import { canUseDOM } from "../../../utilities/index.js";
export var useIsomorphicLayoutEffect = canUseDOM
    ? React.useLayoutEffect
    : React.useEffect;
//# sourceMappingURL=useIsomorphicLayoutEffect.js.map