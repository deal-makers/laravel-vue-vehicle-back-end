(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices-groups/edit-devices-group.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/devices-groups/edit-devices-group.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      switch1: true,
      type: "",
      name: "",
      duration: "",
      time_between: "",
      id: 1
    };
  },
  methods: {
    getData: function getData() {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/admin/device_group/' + this.id).then(function (res) {
        console.log(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    postRequest: function postRequest() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/admin/test1', {
        name: this.name
      }).then(function (res) {
        console.log(res);
      })["catch"](function (err) {
        _this.alert = true;
        console.log(err);
      });
    }
  },
  beforeMount: function beforeMount() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices-groups/edit-devices-group.vue?vue&type=template&id=746c891d&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/devices-groups/edit-devices-group.vue?vue&type=template&id=746c891d& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "max-width-500" }, [
    _c("h2", { staticClass: "style-title" }, [_vm._v("Edit devices group")]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row mb-6" }, [
      _c(
        "div",
        {
          staticClass: "vx-col w-full",
          staticStyle: { display: "inline-flex" }
        },
        [
          _c("vs-switch", {
            model: {
              value: _vm.switch1,
              callback: function($$v) {
                _vm.switch1 = $$v
              },
              expression: "switch1"
            }
          }),
          _vm._v(" "),
          _c("p", { staticStyle: { "margin-left": "10px" } }, [
            _vm._v("Enabled")
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row mb-6" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full" },
        [
          _c("vs-input", {
            staticClass: "w-full",
            attrs: { type: "text", label: "Type" },
            model: {
              value: _vm.type,
              callback: function($$v) {
                _vm.type = $$v
              },
              expression: "type"
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row mb-6" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full" },
        [
          _c("vs-input", {
            staticClass: "w-full",
            attrs: { type: "text", label: "Name" },
            model: {
              value: _vm.name,
              callback: function($$v) {
                _vm.name = $$v
              },
              expression: "name"
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row mb-6" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full" },
        [
          _c("vs-input", {
            staticClass: "w-full",
            attrs: { type: "number", label: "Trigger duration ms" },
            model: {
              value: _vm.duration,
              callback: function($$v) {
                _vm.duration = $$v
              },
              expression: "duration"
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row mb-6" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full" },
        [
          _c("vs-input", {
            staticClass: "w-full",
            attrs: { type: "number", label: "Time between trigger seconds" },
            model: {
              value: _vm.time_between,
              callback: function($$v) {
                _vm.time_between = $$v
              },
              expression: "time_between"
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full" },
        [
          _c(
            "vs-button",
            { staticClass: "mr-3 mb-2", on: { click: _vm.postRequest } },
            [_vm._v("Save")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/devices-groups/edit-devices-group.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/devices-groups/edit-devices-group.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_devices_group_vue_vue_type_template_id_746c891d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-devices-group.vue?vue&type=template&id=746c891d& */ "./resources/js/src/views/devices-groups/edit-devices-group.vue?vue&type=template&id=746c891d&");
/* harmony import */ var _edit_devices_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-devices-group.vue?vue&type=script&lang=js& */ "./resources/js/src/views/devices-groups/edit-devices-group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_devices_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_devices_group_vue_vue_type_template_id_746c891d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_devices_group_vue_vue_type_template_id_746c891d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/devices-groups/edit-devices-group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/devices-groups/edit-devices-group.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/devices-groups/edit-devices-group.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_devices_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit-devices-group.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices-groups/edit-devices-group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_devices_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/devices-groups/edit-devices-group.vue?vue&type=template&id=746c891d&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/devices-groups/edit-devices-group.vue?vue&type=template&id=746c891d& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_devices_group_vue_vue_type_template_id_746c891d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit-devices-group.vue?vue&type=template&id=746c891d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices-groups/edit-devices-group.vue?vue&type=template&id=746c891d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_devices_group_vue_vue_type_template_id_746c891d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_devices_group_vue_vue_type_template_id_746c891d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);