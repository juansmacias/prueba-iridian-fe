"use strict";
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
exports.__esModule = true;
var react_1 = require("react");
// ----- MUI Layout, Surface, Style ------
var Box_1 = require("@mui/material/Box");
var AppBar_1 = require("@mui/material/AppBar");
var Toolbar_1 = require("@mui/material/Toolbar");
var styles_1 = require("@mui/material/styles");
var Container_1 = require("@mui/material/Container");
// ----- MUI Navigation -----
var Drawer_1 = require("@mui/material/Drawer");
// ----- MUI Input, Data Display,Icons  -----
var material_1 = require("@mui/material");
var Menu_1 = require("@mui/icons-material/Menu");
var ChevronRight_1 = require("@mui/icons-material/ChevronRight");
var IconButton_1 = require("@mui/material/IconButton");
// ----- Components -----
var EventPage_1 = require("@/components/EventPage");
var Betslip_1 = require("@/components/Betslip");
// --- Component Constants
var DRAWER_SIZE = 240;
var DrawerHeader = styles_1.styled('div')(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({ display: 'flex', alignItems: 'center', padding: theme.spacing(0, 1) }, theme.mixins.toolbar), { justifyContent: 'flex-start' }));
});
exports["default"] = (function () {
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    var handleDrawerOpen = function () {
        setOpen(true);
    };
    var handleDrawerClose = function () {
        setOpen(false);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Box_1["default"], { sx: { display: 'flex' } },
            react_1["default"].createElement(AppBar_1["default"], { position: "fixed" },
                react_1["default"].createElement(Container_1["default"], { maxWidth: "xl" },
                    react_1["default"].createElement(Toolbar_1["default"], { disableGutters: true },
                        react_1["default"].createElement(material_1.Typography, { variant: "h6", noWrap: true, sx: { flexGrow: 1 }, component: "div" }, " Event Central "),
                        react_1["default"].createElement(IconButton_1["default"], { color: "inherit", "aria-label": "open drawer", onClick: handleDrawerOpen, edge: "end", sx: __assign({}, (open && { display: 'none' })) },
                            react_1["default"].createElement(Menu_1["default"], null))))),
            react_1["default"].createElement(Drawer_1["default"], { sx: {
                    width: DRAWER_SIZE,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: DRAWER_SIZE,
                        boxSizing: 'border-box'
                    }
                }, variant: "persistent", anchor: "right", open: open },
                react_1["default"].createElement(DrawerHeader, null,
                    react_1["default"].createElement(IconButton_1["default"], { onClick: handleDrawerClose },
                        react_1["default"].createElement(ChevronRight_1["default"], null))),
                react_1["default"].createElement(Betslip_1["default"], null)),
            react_1["default"].createElement(EventPage_1["default"], null))));
});
