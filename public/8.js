(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices/devices-list.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/devices/devices-list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      popupActive: false,
      id: 1
    };
  },
  methods: {
    getData: function getData() {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/admin/device').then(function (res) {
        console.log(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    edit: function edit() {
      window.location.href = "/devices/edit";
    },
    deleteDevice: function deleteDevice() {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]('/api/admin/test3/' + this.id).then(function (res) {
        console.log(res);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  beforeMount: function beforeMount() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices/devices-list.vue?vue&type=template&id=2aee6f8a&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/devices/devices-list.vue?vue&type=template&id=2aee6f8a& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("h2", { staticClass: "style-title" }, [_vm._v("Devices")]),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticStyle: { "margin-bottom": "20px" },
          attrs: { color: "primary", type: "filled", to: "/devices/add" }
        },
        [_vm._v("Add device")]
      ),
      _vm._v(" "),
      _c(
        "vs-table",
        { attrs: { data: "users" } },
        [
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", [_vm._v("Tehnologija")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Naziv")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Korisnički račun")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Datum")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Radnik")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Options")])
            ],
            1
          ),
          _vm._v(" "),
          [
            _c(
              "vs-tr",
              { key: "indextr" },
              [
                _c("vs-td", [_vm._v("4500317791")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("Verriegelungsblech RFID")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("5000524301")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("3.5.2016")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("Antun Vrban")]),
                _vm._v(" "),
                _c(
                  "vs-td",
                  [
                    _c(
                      "vs-button",
                      { staticClass: "mr-3 mb-2", on: { click: _vm.edit } },
                      [_vm._v("Edit")]
                    ),
                    _c(
                      "vs-button",
                      {
                        staticClass: "mr-3 mb-2",
                        attrs: { color: "danger" },
                        on: {
                          click: function($event) {
                            _vm.popupActive = true
                          }
                        }
                      },
                      [_vm._v("Delete")]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-tr",
              { key: "indextr2" },
              [
                _c("vs-td", [_vm._v("4500317791")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("Verriegelungsblech RFID")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("5000524301")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("3.5.2016")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("Antun Vrban")]),
                _vm._v(" "),
                _c(
                  "vs-td",
                  [
                    _c(
                      "vs-button",
                      { staticClass: "mr-3 mb-2", on: { click: _vm.edit } },
                      [_vm._v("Edit")]
                    ),
                    _c(
                      "vs-button",
                      {
                        staticClass: "mr-3 mb-2",
                        attrs: { color: "danger" },
                        on: {
                          click: function($event) {
                            _vm.popupActive = true
                          }
                        }
                      },
                      [_vm._v("Delete")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: {
            title: "Are you sure you want to delete this device",
            active: _vm.popupActive
          },
          on: {
            "update:active": function($event) {
              _vm.popupActive = $event
            }
          }
        },
        [
          _c(
            "vs-button",
            {
              staticClass: "mr-3 mb-2",
              attrs: { color: "danger" },
              on: { click: _vm.deleteDevice }
            },
            [_vm._v("Yes")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              staticClass: "mr-3 mb-2",
              on: {
                click: function($event) {
                  _vm.popupActive = false
                }
              }
            },
            [_vm._v("No")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/devices/devices-list.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/devices/devices-list.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _devices_list_vue_vue_type_template_id_2aee6f8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devices-list.vue?vue&type=template&id=2aee6f8a& */ "./resources/js/src/views/devices/devices-list.vue?vue&type=template&id=2aee6f8a&");
/* harmony import */ var _devices_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devices-list.vue?vue&type=script&lang=js& */ "./resources/js/src/views/devices/devices-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _devices_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _devices_list_vue_vue_type_template_id_2aee6f8a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _devices_list_vue_vue_type_template_id_2aee6f8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/devices/devices-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/devices/devices-list.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/devices/devices-list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_devices_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./devices-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices/devices-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_devices_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/devices/devices-list.vue?vue&type=template&id=2aee6f8a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/devices/devices-list.vue?vue&type=template&id=2aee6f8a& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_devices_list_vue_vue_type_template_id_2aee6f8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./devices-list.vue?vue&type=template&id=2aee6f8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices/devices-list.vue?vue&type=template&id=2aee6f8a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_devices_list_vue_vue_type_template_id_2aee6f8a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_devices_list_vue_vue_type_template_id_2aee6f8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);