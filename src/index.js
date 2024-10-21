import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import SchedulerForm from './scheduler'; // Updated import path
ReactDOM.render(_jsx(React.StrictMode, { children: _jsx(SchedulerForm, {}) }), document.getElementById('root'));
