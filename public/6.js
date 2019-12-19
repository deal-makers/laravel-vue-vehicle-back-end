(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/device-groups/edit-device-group.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/device-groups/edit-device-group.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: {
        name: ''
      },
      alert: ''
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      var user = JSON.parse(localStorage.user);
      var token = user.api_token;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/admin/device_group/' + this.$route.params.id, {
        params: {
          'api_token': token
        }
      }).then(function (res) {
        _this.data = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    postRequest: function postRequest() {
      var _this2 = this;

      var user = JSON.parse(localStorage.user);
      var token = user.api_token;
      var url = '/api/admin/device_group/update/' + this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'PUT',
        url: url,
        data: this.data,
        params: {
          'api_token': token
        }
      }).then(function (res) {
        _this2.alert = 'Device group successfully updated';
      })["catch"](function (err) {
        _this2.alert = 'Device group failed to update';
        console.log(err);
      });
    }
  },
  beforeMount: function beforeMount() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/device-groups/edit-device-group.vue?vue&type=template&id=16bc09ad&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/device-groups/edit-device-group.vue?vue&type=template&id=16bc09ad& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _vm.data.name.length < 3
        ? _c(
            "vs-alert",
            {
              staticStyle: { "margin-bottom": "20px" },
              attrs: { color: "danger" }
            },
            [
              _vm._v(
                "\n  \t\tDevice name must me longer that three letters!\n\t\t"
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
            [_vm._v("\n  \t\t" + _vm._s(_vm.alert) + "\n\t\t")]
          )
        : _vm._e(),
      _vm._v(" "),
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
                value: _vm.data.enabled,
                callback: function($$v) {
                  _vm.$set(_vm.data, "enabled", $$v)
                },
                expression: "data.enabled"
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
                value: _vm.data.type,
                callback: function($$v) {
                  _vm.$set(_vm.data, "type", $$v)
                },
                expression: "data.type"
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
              attrs: { type: "number", label: "Trigger duration ms" },
              model: {
                value: _vm.data.trigger_duration_ms,
                callback: function($$v) {
                  _vm.$set(_vm.data, "trigger_duration_ms", $$v)
                },
                expression: "data.trigger_duration_ms"
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
                value: _vm.data.time_between_trigger,
                callback: function($$v) {
                  _vm.$set(_vm.data, "time_between_trigger", $$v)
                },
                expression: "data.time_between_trigger"
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
            _vm.data.name.length >= 3
              ? _c(
                  "vs-button",
                  { staticClass: "mr-3 mb-2", on: { click: _vm.postRequest } },
                  [_vm._v("Save")]
                )
              : _vm._e(),
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

/***/ "./resources/js/src/views/device-groups/edit-device-group.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/device-groups/edit-device-group.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_device_group_vue_vue_type_template_id_16bc09ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-device-group.vue?vue&type=template&id=16bc09ad& */ "./resources/js/src/views/device-groups/edit-device-group.vue?vue&type=template&id=16bc09ad&");
/* harmony import */ var _edit_device_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-device-group.vue?vue&type=script&lang=js& */ "./resources/js/src/views/device-groups/edit-device-group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_device_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_device_group_vue_vue_type_template_id_16bc09ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_device_group_vue_vue_type_template_id_16bc09ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/device-groups/edit-device-group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/device-groups/edit-device-group.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/device-groups/edit-device-group.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_device_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit-device-group.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/device-groups/edit-device-group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_device_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/device-groups/edit-device-group.vue?vue&type=template&id=16bc09ad&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/device-groups/edit-device-group.vue?vue&type=template&id=16bc09ad& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_device_group_vue_vue_type_template_id_16bc09ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit-device-group.vue?vue&type=template&id=16bc09ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/device-groups/edit-device-group.vue?vue&type=template&id=16bc09ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_device_group_vue_vue_type_template_id_16bc09ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_device_group_vue_vue_type_template_id_16bc09ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);