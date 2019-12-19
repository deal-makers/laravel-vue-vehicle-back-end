(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices/device-list.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/devices/device-list.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      popupActive: false,
      id: '',
      data: []
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      var user = JSON.parse(localStorage.user);
      var token = user.api_token;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/admin/devices', {
        params: {
          api_token: token
        }
      }).then(function (res) {
        _this.data = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    edit: function edit(id) {
      window.location.href = "/app/devices/edit/" + id;
    },
    openPopup: function openPopup(id) {
      this.id = id;
      this.popupActive = true;
    },
    deleteDevice: function deleteDevice() {
      var _this2 = this;

      var user = JSON.parse(localStorage.user);
      var token = user.api_token;
      var url = '/api/admin/device/delete/' + this.id;
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'DELETE',
        url: url,
        params: {
          'api_token': token
        }
      }).then(function (res) {
        _this2.popupActive = false;

        _this2.getData();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices/device-list.vue?vue&type=template&id=fcb53e2e&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/devices/device-list.vue?vue&type=template&id=fcb53e2e& ***!
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
              _c("vs-th", [_vm._v("Name")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Description")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("RFID")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Options")])
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.data, function(item) {
            return _c(
              "vs-tr",
              { key: item.id },
              [
                _c("vs-td", [_vm._v(_vm._s(item.name))]),
                _vm._v(" "),
                _c("vs-td", [_vm._v(_vm._s(item.description))]),
                _vm._v(" "),
                _c("vs-td", [_vm._v(_vm._s(item.device_rfid))]),
                _vm._v(" "),
                _c(
                  "vs-td",
                  [
                    _c(
                      "vs-button",
                      {
                        staticClass: "mr-3 mb-2",
                        on: {
                          click: function($event) {
                            return _vm.edit(item.id)
                          }
                        }
                      },
                      [_vm._v("Edit")]
                    ),
                    _c(
                      "vs-button",
                      {
                        staticClass: "mr-3 mb-2",
                        attrs: { color: "danger" },
                        on: {
                          click: function($event) {
                            return _vm.openPopup(item.id)
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
          })
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

/***/ "./resources/js/src/views/devices/device-list.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/devices/device-list.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _device_list_vue_vue_type_template_id_fcb53e2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-list.vue?vue&type=template&id=fcb53e2e& */ "./resources/js/src/views/devices/device-list.vue?vue&type=template&id=fcb53e2e&");
/* harmony import */ var _device_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device-list.vue?vue&type=script&lang=js& */ "./resources/js/src/views/devices/device-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _device_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _device_list_vue_vue_type_template_id_fcb53e2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _device_list_vue_vue_type_template_id_fcb53e2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/devices/device-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/devices/device-list.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/devices/device-list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_device_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./device-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices/device-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_device_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/devices/device-list.vue?vue&type=template&id=fcb53e2e&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/devices/device-list.vue?vue&type=template&id=fcb53e2e& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_list_vue_vue_type_template_id_fcb53e2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./device-list.vue?vue&type=template&id=fcb53e2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/devices/device-list.vue?vue&type=template&id=fcb53e2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_list_vue_vue_type_template_id_fcb53e2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_list_vue_vue_type_template_id_fcb53e2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);