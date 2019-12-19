(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/device-groups/device-groups-list.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/device-groups/device-groups-list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      popupActive: false,
      id: 1,
      data: []
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      var user = JSON.parse(localStorage.user);
      var token = user.api_token;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/admin/device_groups', {
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
      window.location.href = "/app/device_groups/edit/" + id;
    },
    openPopup: function openPopup(id) {
      this.id = id;
      this.popupActive = true;
    },
    deleteDeviceGroup: function deleteDeviceGroup() {
      var _this2 = this;

      var user = JSON.parse(localStorage.user);
      var token = user.api_token;
      var url = '/api/admin/device_group/delete/' + this.id;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/device-groups/device-groups-list.vue?vue&type=template&id=768e8324&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/device-groups/device-groups-list.vue?vue&type=template&id=768e8324& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c("h2", { staticClass: "style-title" }, [_vm._v("Device Groups")]),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticStyle: { "margin-bottom": "20px" },
          attrs: { color: "primary", type: "filled", to: "/device_groups/add" }
        },
        [_vm._v("Add device group")]
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
              _c("vs-th", [_vm._v("Enabled")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Type")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Name")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Trigger duration")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Time between trigger")]),
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
                _c("vs-td", [_vm._v(_vm._s(item.enabled ? "True" : "False"))]),
                _vm._v(" "),
                _c("vs-td", [_vm._v(_vm._s(item.type))]),
                _vm._v(" "),
                _c("vs-td", [_vm._v(_vm._s(item.name))]),
                _vm._v(" "),
                _c("vs-td", [_vm._v(_vm._s(item.trigger_duration_ms) + " ms")]),
                _vm._v(" "),
                _c("vs-td", [
                  _vm._v(_vm._s(item.time_between_trigger) + " ms")
                ]),
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
            title: "Are you sure you want to delete this device group",
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
              on: { click: _vm.deleteDeviceGroup }
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

/***/ "./resources/js/src/views/device-groups/device-groups-list.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/device-groups/device-groups-list.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _device_groups_list_vue_vue_type_template_id_768e8324___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-groups-list.vue?vue&type=template&id=768e8324& */ "./resources/js/src/views/device-groups/device-groups-list.vue?vue&type=template&id=768e8324&");
/* harmony import */ var _device_groups_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device-groups-list.vue?vue&type=script&lang=js& */ "./resources/js/src/views/device-groups/device-groups-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _device_groups_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _device_groups_list_vue_vue_type_template_id_768e8324___WEBPACK_IMPORTED_MODULE_0__["render"],
  _device_groups_list_vue_vue_type_template_id_768e8324___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/device-groups/device-groups-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/device-groups/device-groups-list.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/device-groups/device-groups-list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_device_groups_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./device-groups-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/device-groups/device-groups-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_device_groups_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/device-groups/device-groups-list.vue?vue&type=template&id=768e8324&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/device-groups/device-groups-list.vue?vue&type=template&id=768e8324& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_groups_list_vue_vue_type_template_id_768e8324___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./device-groups-list.vue?vue&type=template&id=768e8324& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/device-groups/device-groups-list.vue?vue&type=template&id=768e8324&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_groups_list_vue_vue_type_template_id_768e8324___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_groups_list_vue_vue_type_template_id_768e8324___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);