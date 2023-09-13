import { __assign } from "tslib";
import { visit } from "graphql";
export function filterOperationVariables(variables, query) {
    var result = __assign({}, variables);
    var unusedNames = new Set(Object.keys(variables));
    visit(query, {
        Variable: function (node, _key, parent) {
            if (parent &&
                parent.kind !== "VariableDefinition") {
                unusedNames.delete(node.name.value);
            }
        },
    });
    unusedNames.forEach(function (name) {
        delete result[name];
    });
    return result;
}
//# sourceMappingURL=filterOperationVariables.js.map