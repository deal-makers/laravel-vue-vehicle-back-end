(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/logs/logs-list.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/logs/logs-list.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
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
      id: '',
      data: [],
      search_params: {
        date_from: '',
        date_to: '',
        device_group_id: ''
      }
    };
  },
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    search: function search() {
      var user = JSON.parse(localStorage.user);
      var token = user.api_token;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/admin/logs', {
        params: {
          api_token: token,
          date_from: this.search_params.date_from,
          date_to: this.search_params.date_to,
          device_group_id: this.search_params.device_group_id
        }
      }).then(function (res) {
        console.log(res);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  beforeMount: function beforeMount() {
    this.search();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/logs/logs-list.vue?vue&type=template&id=50b0fdb4&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/logs/logs-list.vue?vue&type=template&id=50b0fdb4& ***!
  \****************************************************************************************************************************************************************************************************************/
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
        "div",
        { staticClass: "logs-search w-full" },
        [
          _c("p", [_vm._v("Date from:")]),
          _vm._v(" "),
          _c("datepicker", {
            staticClass: "logs-search-items",
            staticStyle: { "z-index": "1000" },
            model: {
              value: _vm.search_params.date_from,
              callback: function($$v) {
                _vm.$set(_vm.search_params, "date_from", $$v)
              },
              expression: "search_params.date_from"
            }
          }),
          _vm._v(" "),
          _c("p", [_vm._v("To:")]),
          _vm._v(" "),
          _c("datepicker", {
            staticClass: "logs-search-items",
            staticStyle: { "z-index": "1000" },
            model: {
              value: _vm.search_params.date_to,
              callback: function($$v) {
                _vm.$set(_vm.search_params, "date_to", $$v)
              },
              expression: "search_params.date_to"
            }
          }),
          _vm._v(" "),
          _c("p", [_vm._v("Device group:")]),
          _vm._v(" "),
          _c(
            "vs-select",
            {
              staticClass: "logs-search-items",
              model: {
                value: _vm.search_params.device_group_id,
                callback: function($$v) {
                  _vm.$set(_vm.search_params, "device_group_id", $$v)
                },
                expression: "search_params.device_group_id"
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
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              staticClass: "mr-3 mb-2 search-button",
              on: { click: _vm.search }
            },
            [_vm._v("Search")]
          )
        ],
        1
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
              _c("vs-th", [_vm._v("ID")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Device group ID")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Device ID")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Description")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Reported by")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Reported at")])
            ],
            1
          ),
          _vm._v(" "),
          [
            _c(
              "vs-tr",
              [
                _c("vs-td", [_vm._v("234")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("324")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("546")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("dfdfsdfds")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("Ivan")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("12:24")])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-tr",
              [
                _c("vs-td", [_vm._v("234")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("324")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("546")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("dfdfsdfds")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("Ivan")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("12:24")])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-tr",
              [
                _c("vs-td", [_vm._v("234")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("324")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("546")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("dfdfsdfds")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("Ivan")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("12:24")])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-tr",
              [
                _c("vs-td", [_vm._v("234")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("324")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("546")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("dfdfsdfds")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("Ivan")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("12:24")])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-tr",
              [
                _c("vs-td", [_vm._v("234")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("324")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("546")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("dfdfsdfds")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("Ivan")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("12:24")])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-tr",
              [
                _c("vs-td", [_vm._v("234")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("324")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("546")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("dfdfsdfds")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("Ivan")]),
                _vm._v(" "),
                _c("vs-td", [_vm._v("12:24")])
              ],
              1
            )
          ]
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/logs/logs-list.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/logs/logs-list.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logs_list_vue_vue_type_template_id_50b0fdb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logs-list.vue?vue&type=template&id=50b0fdb4& */ "./resources/js/src/views/logs/logs-list.vue?vue&type=template&id=50b0fdb4&");
/* harmony import */ var _logs_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logs-list.vue?vue&type=script&lang=js& */ "./resources/js/src/views/logs/logs-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _logs_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _logs_list_vue_vue_type_template_id_50b0fdb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _logs_list_vue_vue_type_template_id_50b0fdb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/logs/logs-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/logs/logs-list.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/logs/logs-list.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logs_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./logs-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/logs/logs-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logs_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/logs/logs-list.vue?vue&type=template&id=50b0fdb4&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/logs/logs-list.vue?vue&type=template&id=50b0fdb4& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logs_list_vue_vue_type_template_id_50b0fdb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./logs-list.vue?vue&type=template&id=50b0fdb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/logs/logs-list.vue?vue&type=template&id=50b0fdb4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logs_list_vue_vue_type_template_id_50b0fdb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logs_list_vue_vue_type_template_id_50b0fdb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);