webpackHotUpdate("static\\development\\pages\\schedule.js",{

/***/ "./pages/schedule.tsx":
/*!****************************!*\
  !*** ./pages/schedule.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var _models_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/data.json */ "./models/data.json");
var _models_data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../models/data.json */ "./models/data.json", 1);
/* harmony import */ var _styling_scheduleStyles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styling/scheduleStyles.scss */ "./styling/scheduleStyles.scss");
/* harmony import */ var _styling_scheduleStyles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styling_scheduleStyles_scss__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\gardl\\Desktop\\KDS2021\\pages\\schedule.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Schedule = function Schedule() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_models_data_json__WEBPACK_IMPORTED_MODULE_4__["program"]))),
      filteredProgram = _useState[0],
      setFilteredProgram = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showOnlyFavorites = _useState2[0],
      setShowOnlyFavorites = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      tags = _useState3[0],
      setTags = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      currentDayIndex = _useState4[0],
      setCurrentDatIndex = _useState4[1];

  var getRooms = function getRooms(day) {
    var roomDict = {};
    var rooms = day.slots.reduce(function (acc, slot) {
      return acc.concat(slot.rooms);
    }, []);
    rooms.forEach(function (room) {
      if (room) {
        roomDict[room.name] = true;
      }
    });
    return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(roomDict);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    filterProgram();
  }, [tags, showOnlyFavorites]);

  var handleFilterChange = function handleFilterChange(newVal) {
    setTags(newVal);
  };

  var handleFavoriteChange = function handleFavoriteChange(newVal) {
    setShowOnlyFavorites(newVal);
  }; // TODO - Test


  var handleToggleTag = function handleToggleTag(tag) {
    filterProgram();

    if (tags.indexOf(tag) > -1) {
      setTags(tags.filter(function (t) {
        return t != tag;
      }));
    } else {
      setTags(tags.concat(tag));
    }
  };
  /*
  const filterProgram = () => {
    let newProgram = JSON.parse(JSON.stringify(Program));
      newProgram.days = newProgram.days.map((day) => {
      return day.slots.map((slot) => {
        return slot.rooms.map((room) => {
          return room.talks.map((talk) => {
            const tags = talk.tags.concat([talk.language]);
              if (showOnlyFavorites && !localStorage.getItem(talk.talkId)) {
              return false;
            } else {
              return !(
                tags.length > 0 && !tags.some((tag) => tags.indexOf(tag) > -1)
              );
            }
          });
        });
      });
    });
    */


  var filterProgram = function filterProgram() {
    var newProgram = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_models_data_json__WEBPACK_IMPORTED_MODULE_4__["program"]));
    newProgram.days.forEach(function (day) {
      day.slots.forEach(function (slot) {
        slot.rooms = slot.rooms.filter(function (room) {
          room.talks = room.talks.filter(function (talk) {
            var talkTags = talk.tags.concat();
            var talkFavorited = localStorage.getItem(talk.talkId) != null;

            if (showOnlyFavorites && !talkFavorited) {
              return false;
            }

            console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
              tags: tags,
              talkTags: talkTags
            }));

            if (tags.length == 0) {
              return true;
            }

            return tags.some(function (tag) {
              console.log(talkTags.some(function (talkTag) {
                return talkTag == tag;
              }));
              return talkTags.some(function (talkTag) {
                return talkTag == tag;
              });
            });
          });
        });
      });
    }); //alert(JSON.stringify(newProgram.days));

    setFilteredProgram(newProgram);
  };

  var setDay = function setDay(index) {
    setCurrentDatIndex(index);
  };

  return __jsx("div", {
    className: "schedule page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    title: "Schedule",
    filter: "small",
    onTagChange: handleFilterChange,
    onFavoriteChange: handleFavoriteChange,
    showOnlyFavorites: showOnlyFavorites,
    selectedTags: tags,
    hideLogo: "small",
    background: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    className: "schedule-document negative-margin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("div", {
    className: "day-selector-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, filteredProgram.days.map(function (day, i) {
    return __jsx("span", {
      key: day.day,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, i != 0 && __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, " | "), __jsx("span", {
      onClick: function onClick() {
        return setDay(i);
      },
      className: "header-day ".concat(currentDayIndex == i ? "selected" : ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, day.day));
  })), __jsx("div", {
    className: "schedule-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Filter"], {
    onTagChange: handleFilterChange,
    onFavoriteChange: handleFavoriteChange,
    selectedTags: tags,
    showOnlyFavorites: showOnlyFavorites,
    className: "hide-small schedule-filter",
    type: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), __jsx("div", {
    className: "header-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Schedule"), __jsx("div", {
    className: "day-selector-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, filteredProgram.days.map(function (day, i) {
    return __jsx("span", {
      key: day.day,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, i != 0 && __jsx("span", {
      className: "seperator",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, " | "), __jsx("span", {
      onClick: function onClick() {
        return setDay(i);
      },
      className: "header-day ".concat(currentDayIndex == i ? "selected" : ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, day.day));
  })))), filteredProgram.days.length > 0 && __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Day"], {
    onToggleTag: function onToggleTag(val) {
      return handleToggleTag(val);
    },
    tags: tags,
    currDay: filteredProgram.days[currentDayIndex],
    slots: filteredProgram.days[currentDayIndex] && filteredProgram.days[currentDayIndex].slots,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ })

})
//# sourceMappingURL=schedule.js.4077acdb039d04b6673a.hot-update.js.map