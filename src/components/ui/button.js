var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
var Button = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.type, type = _b === void 0 ? 'button' : _b;
    return (_jsx("button", __assign({ type: type, className: className }, { children: children })));
};
export default Button;
