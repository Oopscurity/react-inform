(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["reactInform"] = factory(require("react"));
	else
		root["reactInform"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _form = __webpack_require__(5);

	var _form2 = _interopRequireDefault(_form);

	var _createValidate = __webpack_require__(2);

	var _createValidate2 = _interopRequireDefault(_createValidate);

	var _from = __webpack_require__(6);

	var _from2 = _interopRequireDefault(_from);

	var _resetFormButton = __webpack_require__(8);

	var _resetFormButton2 = _interopRequireDefault(_resetFormButton);

	var _disabledFormSubmit = __webpack_require__(3);

	var _disabledFormSubmit2 = _interopRequireDefault(_disabledFormSubmit);

	var _feedbackFormSubmit = __webpack_require__(4);

	var _feedbackFormSubmit2 = _interopRequireDefault(_feedbackFormSubmit);

	exports['default'] = _form2['default'];
	exports.form = _form2['default'];
	exports.createValidate = _createValidate2['default'];
	exports.from = _from2['default'];
	exports.ResetFormButton = _resetFormButton2['default'];
	exports.DisabledFormSubmit = _disabledFormSubmit2['default'];
	exports.FeedbackFormSubmit = _feedbackFormSubmit2['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = createValidate;
	var hasThen = function hasThen(obj) {
	  return !!obj && obj.then instanceof Function;
	};

	function gen(obj) {
	  var index = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	  var keys = arguments.length <= 2 || arguments[2] === undefined ? Object.keys(obj) : arguments[2];
	  return (function () {
	    return {
	      keys: keys,
	      index: index,
	      key: keys[index],
	      value: obj[keys[index]],
	      next: function next() {
	        return gen(obj, index + 1, keys);
	      },
	      done: index >= keys.length
	    };
	  })();
	}

	function validateField(_x3, _x4, _x5) {
	  var _again = true;

	  _function: while (_again) {
	    var value = _x3,
	        values = _x4,
	        rule = _x5;
	    _again = false;

	    if (rule.done) return undefined;
	    var result = rule.value(value, values);

	    if (hasThen(result)) {
	      return result.then(function (res) {
	        if (!res) return rule.key;
	        return validateField(value, values, rule.next());
	      });
	    } else if (!result) return rule.key;
	    _x3 = value;
	    _x4 = values;
	    _x5 = rule.next();
	    _again = true;
	    result = undefined;
	    continue _function;
	  }
	}

	function createValidate(rulesMap) {
	  return function (values) {
	    var errors = {};
	    var promises = [];
	    Object.keys(rulesMap).forEach(function (key) {
	      var rules = rulesMap[key];
	      var value = values[key];
	      var result = validateField(value, values, gen(rules));

	      if (hasThen(result)) {
	        promises.push(result.then(function (v) {
	          if (v !== undefined) {
	            errors[key] = v;
	          }
	        }));
	      } else if (result !== undefined) errors[key] = result;
	    });
	    if (promises.length === 0) return errors;
	    return Promise.all(promises).then(function () {
	      return errors;
	    });
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var DisabledFormSubmit = (function (_Component) {
	  _inherits(DisabledFormSubmit, _Component);

	  function DisabledFormSubmit() {
	    _classCallCheck(this, DisabledFormSubmit);

	    _get(Object.getPrototypeOf(DisabledFormSubmit.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(DisabledFormSubmit, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement("input", _extends({ type: "submit", disabled: !this.context.form.isValid() }, this.props));
	    }
	  }], [{
	    key: "contextTypes",
	    value: {
	      form: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  return DisabledFormSubmit;
	})(_react.Component);

	exports["default"] = DisabledFormSubmit;
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var FeedbackFormSubmit = (function (_Component) {
	  _inherits(FeedbackFormSubmit, _Component);

	  function FeedbackFormSubmit() {
	    _classCallCheck(this, FeedbackFormSubmit);

	    _get(Object.getPrototypeOf(FeedbackFormSubmit.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(FeedbackFormSubmit, [{
	    key: "handleClick",
	    value: function handleClick(e) {
	      if (!this.context.form.isValid()) {
	        e.preventDefault();
	        this.context.form.forceValidate();
	        if (this.props.onInvalid) this.props.onInvalid(e);
	      }
	      if (this.props.onClick) this.props.onClick(e);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this = this;

	      return _react2["default"].createElement("input", _extends({ type: "submit" }, this.props, { onClick: function (e) {
	          return _this.handleClick(e);
	        } }));
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      onInvalid: _react.PropTypes.func,
	      onClick: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: "contextTypes",
	    value: {
	      form: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  return FeedbackFormSubmit;
	})(_react.Component);

	exports["default"] = FeedbackFormSubmit;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	exports['default'] = form;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _getValue = __webpack_require__(7);

	var _getValue2 = _interopRequireDefault(_getValue);

	function form(_ref) {
	  var fields = _ref.fields;
	  var _ref$validate = _ref.validate;
	  var validate = _ref$validate === undefined ? function () {
	    return {};
	  } : _ref$validate;

	  return function (Wrapped) {
	    return (function (_Component) {
	      _inherits(FormWrapper, _Component);

	      function FormWrapper() {
	        _classCallCheck(this, FormWrapper);

	        _get(Object.getPrototypeOf(FormWrapper.prototype), 'constructor', this).apply(this, arguments);

	        this.state = {
	          touched: {},
	          errors: {},
	          valid: undefined
	        };
	      }

	      _createClass(FormWrapper, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	          var values = this.props.value || {};
	          this.setState({ values: values });
	          this.handleValidate(values);
	        }
	      }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	          this.setValues(nextProps.value);
	        }
	      }, {
	        key: 'setValues',
	        value: function setValues(values) {
	          if (values === undefined) return;
	          this.setState({ values: values });
	          this.handleValidate(values);
	        }
	      }, {
	        key: 'setErrors',
	        value: function setErrors(errors) {
	          var valid = Object.keys(errors).length === 0;
	          if (valid !== this.state.valid) {
	            this.setState({ valid: valid });
	            if (this.props.onValidate) this.props.onValidate(valid);
	          }
	          this.setState({ errors: errors });
	        }
	      }, {
	        key: 'handleValidate',
	        value: function handleValidate(values) {
	          var _this = this;

	          var errors = validate(values);
	          if (errors.then instanceof Function) {
	            errors.then(function (errs) {
	              return _this.setErrors(errs);
	            });
	          } else {
	            this.setErrors(errors);
	          }
	        }
	      }, {
	        key: 'field',
	        value: function field(name) {
	          var _this2 = this;

	          return {
	            onBlur: function onBlur() {
	              return _this2.blur(name);
	            },
	            onChange: function onChange(e) {
	              return _this2.handleChange(name, e);
	            }
	          };
	        }
	      }, {
	        key: 'handleChange',
	        value: function handleChange(name, e) {
	          var value = (0, _getValue2['default'])(e);
	          var values = _extends({}, this.state.values, _defineProperty({}, name, value));

	          if (value === this.state.values[name]) return;
	          if (this.props.onChange) this.props.onChange(values);
	          if (this.props.value !== undefined) return;

	          this.setState({
	            values: values
	          });
	          this.handleValidate(values);
	        }
	      }, {
	        key: 'touch',
	        value: function touch(vals) {
	          var _this3 = this;

	          var allTouched = vals.reduce(function (acc, name) {
	            return acc && _this3.state.touched[name];
	          }, true);
	          if (allTouched) return;

	          this.setState({ touched: _extends({}, this.state.touched, vals.reduce(function (acc, name) {
	              return _extends({}, acc, _defineProperty({}, name, true));
	            }, {})) });
	        }
	      }, {
	        key: 'formProps',
	        value: function formProps() {
	          var _this4 = this;

	          return {
	            isValid: function isValid() {
	              return _this4.state.valid;
	            },
	            forceValidate: function forceValidate() {
	              return _this4.touch(fields);
	            },
	            values: function values() {
	              return _this4.state.values;
	            },
	            onValues: function onValues(values) {
	              if (!_this4.props.value) {
	                _this4.setState({ values: values });
	              }
	              if (_this4.props.onChange) _this4.props.onChange(values);
	            }
	          };
	        }
	      }, {
	        key: 'makeField',
	        value: function makeField(name) {
	          var _this5 = this;

	          var _state = this.state;
	          var values = _state.values;
	          var errors = _state.errors;
	          var touched = _state.touched;

	          return {
	            onChange: function onChange(e) {
	              return _this5.handleChange(name, e);
	            },
	            onBlur: function onBlur() {
	              return _this5.touch([name]);
	            },
	            value: values[name] || '',
	            error: touched[name] ? errors[name] : undefined,
	            checked: typeof values[name] === 'boolean' ? values[name] : undefined
	          };
	        }
	      }, {
	        key: 'makeFields',
	        value: function makeFields() {
	          var _this6 = this;

	          return fields.reduce(function (acc, name) {
	            return _extends({}, acc, _defineProperty({}, name, _this6.makeField(name)));
	          }, {});
	        }
	      }, {
	        key: 'generatedProps',
	        value: function generatedProps() {
	          return {
	            form: this.formProps(),
	            fields: this.makeFields()
	          };
	        }
	      }, {
	        key: 'getChildContext',
	        value: function getChildContext() {
	          return this.generatedProps();
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return _react2['default'].createElement(Wrapped, _extends({}, this.props, this.generatedProps()));
	        }
	      }], [{
	        key: 'childContextTypes',
	        value: {
	          form: _react.PropTypes.object,
	          fields: _react.PropTypes.object
	        },
	        enumerable: true
	      }, {
	        key: 'propTypes',
	        value: {
	          value: _react.PropTypes.object,
	          onChange: _react.PropTypes.func,
	          onValidate: _react.PropTypes.func
	        },
	        enumerable: true
	      }]);

	      return FormWrapper;
	    })(_react.Component);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = from;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createValidate = __webpack_require__(2);

	var _createValidate2 = _interopRequireDefault(_createValidate);

	function from(rules) {
	  return {
	    fields: Object.keys(rules),
	    validate: (0, _createValidate2['default'])(rules)
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var getSelectedValues = function getSelectedValues(options) {
	  var result = [];
	  if (options) {
	    for (var index = 0; index < options.length; index++) {
	      var option = options[index];
	      if (option.selected) {
	        result.push(option.value);
	      }
	    }
	  }
	  return result;
	};

	var isEvent = function isEvent(candidate) {
	  return !!(candidate && candidate.stopPropagation && candidate.preventDefault);
	};

	exports['default'] = function (event) {
	  if (isEvent(event)) {
	    var _event$target = event.target;
	    var type = _event$target.type;
	    var value = _event$target.value;
	    var checked = _event$target.checked;
	    var files = _event$target.files;
	    var dataTransfer = event.dataTransfer;

	    if (type === 'checkbox') {
	      return checked;
	    }
	    if (type === 'file') {
	      return files || dataTransfer && dataTransfer.files;
	    }
	    if (type === 'select-multiple') {
	      return getSelectedValues(event.target.options);
	    }
	    return value;
	  }
	  // not an event, so must be either our value or an object containing our value in the 'value' key
	  return event && typeof event === 'object' && event.value !== undefined ? event.value : event;
	};

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var ResetFormButton = (function (_Component) {
	  _inherits(ResetFormButton, _Component);

	  function ResetFormButton() {
	    _classCallCheck(this, ResetFormButton);

	    _get(Object.getPrototypeOf(ResetFormButton.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ResetFormButton, [{
	    key: 'handleClick',
	    value: function handleClick(e) {
	      e.preventDefault();
	      this.context.form.onValues({});
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      return _react2['default'].createElement(
	        'button',
	        _extends({}, this.props, { onClick: function (e) {
	            return _this.handleClick(e);
	          } }),
	        this.props.children || 'Reset'
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      children: _react.PropTypes.string
	    },
	    enumerable: true
	  }, {
	    key: 'contextTypes',
	    value: {
	      form: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  return ResetFormButton;
	})(_react.Component);

	exports['default'] = ResetFormButton;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;