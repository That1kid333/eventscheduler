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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Calendar = function (_a) {
    var mode = _a.mode, selected = _a.selected, onSelect = _a.onSelect, className = _a.className;
    var month = selected ? selected.getMonth() : new Date().getMonth();
    var year = selected ? selected.getFullYear() : new Date().getFullYear();
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var firstDay = new Date(year, month, 1).getDay();
    var days = Array.from({ length: daysInMonth }, function (_, i) { return i + 1; });
    return (_jsxs("div", __assign({ className: "calendar ".concat(className) }, { children: [_jsx("div", __assign({ className: "calendar-header" }, { children: _jsx("h2", { children: "October ".concat(year) }) })), _jsxs("div", __assign({ className: "calendar-days" }, { children: [['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(function (day) { return (_jsx("div", __assign({ className: "calendar-day" }, { children: day }), day)); }), Array.from({ length: firstDay }).map(function (_, i) { return (_jsx("div", { className: "calendar-day empty" }, i)); }), days.map(function (day) { return (_jsx("div", __assign({ className: "calendar-day ".concat((selected === null || selected === void 0 ? void 0 : selected.getDate()) === day ? 'selected' : ''), onClick: function () { return onSelect(new Date(year, month, day)); } }, { children: day }), day)); })] }))] })));
};
export default Calendar;
