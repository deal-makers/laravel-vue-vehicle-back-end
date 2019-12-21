(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices/edit-device.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/devices/edit-device.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
      data: {
        name: ''
      },
      alert: '',
      errors: null
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      var user = JSON.parse(localStorage.user);
      var token = user.api_token;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/admin/device/' + this.$route.params.id, {
        params: {
          'api_token': token
        }
      }).then(function (res) {
        _this.data = res.data;
      })["catch"](function (err) {
        _this.errors = err;
      });
    },
    postRequest: function postRequest() {
      var _this2 = this;

      var user = JSON.parse(localStorage.user);
      var token = user.api_token;
      var url = '/api/admin/device/update/' + this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'PUT',
        url: url,
        data: this.data,
        params: {
          'api_token': token
        }
      }).then(function (res) {
        _this2.alert = 'Device successfully updated';
      })["catch"](function (err) {
        _this2.errors = null;
        _this2.errors = err.response.data;
      });
    }
  },
  beforeMount: function beforeMount() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices/edit-device.vue?vue&type=template&id=36b9c0ad&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/devices/edit-device.vue?vue&type=template&id=36b9c0ad& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "max-width-500" },
    [
      _vm.data.name.length < 3 && _vm.data.name !== ""
        ? _c(
            "vs-alert",
            {
              staticStyle: { "margin-bottom": "20px" },
              attrs: { color: "danger" }
            },
            [
              _vm._v(
                "\n  \t\t    Device name must me longer that three letters!\n\t\t"
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.alert
        ? _c(
            "vs-alert",
            {
              staticStyle: { "margin-bottom": "20px" },
              attrs: { color: "success" }
            },
            [_vm._v("\n  \t\t    " + _vm._s(_vm.alert) + "\n\t\t")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.errors !== null
        ? _c("vs-alert", { attrs: { color: "danger" } }, [
            _c("b", [_vm._v("Please correct the following error(s):")]),
            _vm._v(" "),
            _c(
              "ul",
              _vm._l(_vm.errors, function(error) {
                return _c("li", [
                  _vm._v(
                    "\n                    - " +
                      _vm._s(error[0]) +
                      "\n                "
                  )
                ])
              }),
              0
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("h2", { staticClass: "style-title" }, [_vm._v("Edit device")]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row mb-6" }, [
        _c(
          "div",
          { staticClass: "vx-col w-full" },
          [
            _c(
              "vs-select",
              {
                staticClass: "w-full",
                attrs: { label: "Device group" },
                model: {
                  value: _vm.data.device_group_id,
                  callback: function($$v) {
                    _vm.$set(_vm.data, "device_group_id", $$v)
                  },
                  expression: "data.device_group_id"
                }
              },
              [
                _c("vs-select-item", {
                  key: "1",
                  attrs: { value: "1", text: "1" }
                }),
                _vm._v(" "),
                _c("vs-select-item", {
                  key: "2",
                  attrs: { value: "2", text: "2" }
                })
              ],
              1
            )
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
              attrs: { type: "text", label: "Device name" },
              model: {
                value: _vm.data.name,
                callback: function($$v) {
                  _vm.$set(_vm.data, "name", $$v)
                },
                expression: "data.name"
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
              attrs: { type: "text", label: "Device ID" },
              model: {
                value: _vm.data.device_id,
                callback: function($$v) {
                  _vm.$set(_vm.data, "device_id", $$v)
                },
                expression: "data.device_id"
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
              attrs: { type: "text", label: "Description" },
              model: {
                value: _vm.data.description,
                callback: function($$v) {
                  _vm.$set(_vm.data, "description", $$v)
                },
                expression: "data.description"
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
              attrs: { type: "text", label: "RFID" },
              model: {
                value: _vm.data.device_rfid,
                callback: function($$v) {
                  _vm.$set(_vm.data, "device_rfid", $$v)
                },
                expression: "data.device_rfid"
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
            ),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "mr-3 mb-2",
                attrs: { to: "/devices", color: "danger" }
              },
              [_vm._v("Cancel")]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/devices/edit-device.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/devices/edit-device.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_device_vue_vue_type_template_id_36b9c0ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-device.vue?vue&type=template&id=36b9c0ad& */ "./resources/js/src/views/devices/edit-device.vue?vue&type=template&id=36b9c0ad&");
/* harmony import */ var _edit_device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-device.vue?vue&type=script&lang=js& */ "./resources/js/src/views/devices/edit-device.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_device_vue_vue_type_template_id_36b9c0ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_device_vue_vue_type_template_id_36b9c0ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/devices/edit-device.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/devices/edit-device.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/devices/edit-device.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit-device.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices/edit-device.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/devices/edit-device.vue?vue&type=template&id=36b9c0ad&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/devices/edit-device.vue?vue&type=template&id=36b9c0ad& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_device_vue_vue_type_template_id_36b9c0ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit-device.vue?vue&type=template&id=36b9c0ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices/edit-device.vue?vue&type=template&id=36b9c0ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_device_vue_vue_type_template_id_36b9c0ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_device_vue_vue_type_template_id_36b9c0ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);