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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Calendar from './components/ui/calendar';
import Button from './components/ui/button';
import Input from './components/ui/input';
import Textarea from './components/ui/textarea';
import Label from './components/ui/label';
import './styles.css'; // Importing the CSS file
export default function SchedulerForm() {
    var _this = this;
    var _a = useState(new Date()), date = _a[0], setDate = _a[1];
    var _b = useState(''), eventTitle = _b[0], setEventTitle = _b[1];
    var _c = useState(''), attendees = _c[0], setAttendees = _c[1];
    var _d = useState(''), notes = _d[0], setNotes = _d[1];
    var handleDateSelect = function (selectedDate) {
        setDate(selectedDate);
    };
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            e.preventDefault();
            console.log('Form submitted', { date: date, eventTitle: eventTitle, attendees: attendees, notes: notes });
            return [2 /*return*/];
        });
    }); };
    return (_jsxs("div", __assign({ className: "container" }, { children: [_jsxs("div", __assign({ className: "header" }, { children: [_jsx("h1", { children: "Schedule Your Event" }), _jsx("p", { children: "Select a date and provide event details" })] })), _jsxs("div", __assign({ className: "p-8 grid grid-cols-1 md:grid-cols-2 gap-8" }, { children: [_jsx("div", { children: _jsx(Calendar, { mode: "single", selected: date, onSelect: handleDateSelect, className: "rounded-md border border-[#cbbba4]" }) }), _jsxs("form", __assign({ onSubmit: handleSubmit, className: "space-y-6" }, { children: [_jsxs("div", __assign({ className: "form-group" }, { children: [_jsx(Label, __assign({ htmlFor: "eventTitle" }, { children: "Event Title" })), _jsx(Input, { id: "eventTitle", value: eventTitle, onChange: function (e) { return setEventTitle(e.target.value); }, placeholder: "e.g., Wedding Consultation", required: true })] })), _jsxs("div", __assign({ className: "form-group" }, { children: [_jsx(Label, __assign({ htmlFor: "attendees" }, { children: "Number of Attendees (Optional)" })), _jsx(Input, { id: "attendees", value: attendees, onChange: function (e) { return setAttendees(e.target.value); }, placeholder: "e.g., 50", type: "number" })] })), _jsxs("div", __assign({ className: "form-group" }, { children: [_jsx(Label, __assign({ htmlFor: "notes" }, { children: "Additional Notes" })), _jsx(Textarea, { id: "notes", value: notes, onChange: function (e) { return setNotes(e.target.value); }, placeholder: "Any specific requests or requirements?", rows: 4 })] })), _jsx(Button, __assign({ type: "submit" }, { children: "Proceed to Payment" }))] }))] }))] })));
}
