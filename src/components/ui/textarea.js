import { jsx as _jsx } from "react/jsx-runtime";
var Textarea = function (_a) {
    var id = _a.id, value = _a.value, onChange = _a.onChange, className = _a.className, placeholder = _a.placeholder, _b = _a.rows, rows = _b === void 0 ? 3 : _b;
    return (_jsx("textarea", { id: id, value: value, onChange: onChange, className: className, placeholder: placeholder, rows: rows }));
};
export default Textarea;
