import { __rest } from "tslib";
import equal from "@wry/equality";
import { createFragmentMap, getFragmentDefinitions, getFragmentFromSelection, getMainDefinition, isField, resultKeyNameFromField, shouldInclude, } from "../utilities/index.js";
export function equalByQuery(query, _a, _b, variables) {
    var aData = _a.data, aRest = __rest(_a, ["data"]);
    var bData = _b.data, bRest = __rest(_b, ["data"]);
    return (equal(aRest, bRest) &&
        equalBySelectionSet(getMainDefinition(query).selectionSet, aData, bData, {
            fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
            variables: variables,
        }));
}
function equalBySelectionSet(selectionSet, aResult, bResult, context) {
    if (aResult === bResult) {
        return true;
    }
    var seenSelections = new Set();
    return selectionSet.selections.every(function (selection) {
        if (seenSelections.has(selection))
            return true;
        seenSelections.add(selection);
        if (!shouldInclude(selection, context.variables))
            return true;
        if (selectionHasNonreactiveDirective(selection))
            return true;
        if (isField(selection)) {
            var resultKey = resultKeyNameFromField(selection);
            var aResultChild = aResult && aResult[resultKey];
            var bResultChild = bResult && bResult[resultKey];
            var childSelectionSet = selection.selectionSet;
            if (!childSelectionSet) {
                return equal(aResultChild, bResultChild);
            }
            var aChildIsArray = Array.isArray(aResultChild);
            var bChildIsArray = Array.isArray(bResultChild);
            if (aChildIsArray !== bChildIsArray)
                return false;
            if (aChildIsArray && bChildIsArray) {
                var length_1 = aResultChild.length;
                if (bResultChild.length !== length_1) {
                    return false;
                }
                for (var i = 0; i < length_1; ++i) {
                    if (!equalBySelectionSet(childSelectionSet, aResultChild[i], bResultChild[i], context)) {
                        return false;
                    }
                }
                return true;
            }
            return equalBySelectionSet(childSelectionSet, aResultChild, bResultChild, context);
        }
        else {
            var fragment = getFragmentFromSelection(selection, context.fragmentMap);
            if (fragment) {
                if (selectionHasNonreactiveDirective(fragment))
                    return true;
                return equalBySelectionSet(fragment.selectionSet, aResult, bResult, context);
            }
        }
    });
}
function selectionHasNonreactiveDirective(selection) {
    return (!!selection.directives && selection.directives.some(directiveIsNonreactive));
}
function directiveIsNonreactive(dir) {
    return dir.name.value === "nonreactive";
}
//# sourceMappingURL=equalByQuery.js.map