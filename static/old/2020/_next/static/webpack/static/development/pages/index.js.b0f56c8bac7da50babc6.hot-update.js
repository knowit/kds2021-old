webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/FavouriteTalkButton.tsx":
/*!********************************************!*\
  !*** ./components/FavouriteTalkButton.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\gardl\\Desktop\\KDS2021\\components\\FavouriteTalkButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var FavouriteTalkButton = function FavouriteTalkButton(_ref) {
  var talkId = _ref.talkId,
      onClick = _ref.onClick;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      clicked = _useState[0],
      setClicked = _useState[1];

  var favouriteButtonClick = function favouriteButtonClick() {
    setClicked(!clicked);

    if (onClick !== undefined) {
      onClick(clicked);
    }

    if (typeof localStorage != "undefined" && !localStorage.getItem(talkId)) {
      localStorage.setItem(talkId, talkId);
    } else if (typeof localStorage != "undefined") {
      localStorage.removeItem(talkId);
    }
  };

  var isFavorited = function isFavorited(id) {
    return localStorage.getItem(id) != null;
  };

  var icon = isFavorited(talkId) ? "../static/heart.png" : "../static/heart-filled.png";
  return __jsx("button", {
    onClick: function onClick() {
      return favouriteButtonClick();
    },
    id: "favourite-talk-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    src: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FavouriteTalkButton);

/***/ })

})
//# sourceMappingURL=index.js.b0f56c8bac7da50babc6.hot-update.js.map