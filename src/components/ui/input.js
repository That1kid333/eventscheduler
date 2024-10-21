import { jsx as _jsx } from "react/jsx-runtime";
var Input = function (_a) {
    var id = _a.id, value = _a.value, onChange = _a.onChange, className = _a.className, placeholder = _a.placeholder, required = _a.required, _b = _a.type, type = _b === void 0 ? 'text' : _b;
    return (_jsx("input", { id: id, type: type, value: value, onChange: onChange, className: className, placeholder: placeholder, required: required }));
};
export default Input;
