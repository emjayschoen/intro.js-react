'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(obj) {
            return typeof obj;
          }
        : function(obj) {
            return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _intro = _interopRequireDefault(require('intro.js'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = require('react');

var _server = require('react-dom/server');

var introJsPropTypes = _interopRequireWildcard(require('../../helpers/proptypes'));

var introJsDefaultProps = _interopRequireWildcard(require('../../helpers/defaultProps'));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, 'prototype', { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError('Derived constructors may only return object or undefined');
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

/**
 * Intro.js Steps Component.
 */
var Steps = /*#__PURE__*/ (function(_Component) {
  _inherits(Steps, _Component);

  var _super = _createSuper(Steps);

  /**
   * React Props
   * @type {Object}
   */

  /**
   * React Default Props
   * @type {Object}
   */

  /**
   * Creates a new instance of the component.
   * @class
   * @param {Object} props - The props of the component.
   */
  function Steps(props) {
    var _this;

    _classCallCheck(this, Steps);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), 'onExit', function() {
      var onExit = _this.props.onExit;
      _this.isVisible = false;
      onExit(_this.introJs._currentStep);
    });

    _defineProperty(_assertThisInitialized(_this), 'onBeforeExit', function() {
      var onBeforeExit = _this.props.onBeforeExit;

      if (onBeforeExit) {
        return onBeforeExit(_this.introJs._currentStep);
      }

      return true;
    });

    _defineProperty(_assertThisInitialized(_this), 'onBeforeChange', function(nextElement) {
      if (!_this.isVisible) {
        return true;
      }

      var _this$props = _this.props,
        onBeforeChange = _this$props.onBeforeChange,
        onPreventChange = _this$props.onPreventChange;

      if (onBeforeChange) {
        var continueStep = onBeforeChange(_this.introJs._currentStep, nextElement);

        if (continueStep === false && onPreventChange) {
          setTimeout(function() {
            onPreventChange(_this.introJs._currentStep);
          }, 0);
        }

        return continueStep;
      }

      return true;
    });

    _defineProperty(_assertThisInitialized(_this), 'onAfterChange', function(element) {
      if (!_this.isVisible) {
        return;
      }

      var onAfterChange = _this.props.onAfterChange;

      if (onAfterChange) {
        onAfterChange(_this.introJs._currentStep, element);
      }
    });

    _defineProperty(_assertThisInitialized(_this), 'onChange', function(element) {
      if (!_this.isVisible) {
        return;
      }

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(_this.introJs._currentStep, element);
      }
    });

    _defineProperty(_assertThisInitialized(_this), 'onComplete', function() {
      var onComplete = _this.props.onComplete;

      if (onComplete) {
        onComplete();
      }
    });

    _defineProperty(_assertThisInitialized(_this), 'updateStepElement', function(stepIndex) {
      var element = document.querySelector(_this.introJs._options.steps[stepIndex].element);

      if (element) {
        _this.introJs._introItems[stepIndex].element = element;
        _this.introJs._introItems[stepIndex].position = _this.introJs._options.steps[stepIndex].position || 'auto';
      }
    });

    _this.introJs = null;
    _this.isConfigured = false; // We need to manually keep track of the visibility state to avoid a callback hell.

    _this.isVisible = false;

    _this.installIntroJs();

    return _this;
  }
  /**
   * Lifecycle: componentDidMount.
   * We use this event to enable Intro.js steps at mount time if enabled right from the start.
   */

  _createClass(Steps, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.enabled) {
          this.configureIntroJs();
          this.renderSteps();
        }
      },
      /**
       * Lifecycle: componentDidUpdate.
       * @param  {Object} prevProps - The previous props.
       */
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this$props2 = this.props,
          enabled = _this$props2.enabled,
          steps = _this$props2.steps,
          options = _this$props2.options;

        if (!this.isConfigured || prevProps.steps !== steps || prevProps.options !== options) {
          this.configureIntroJs();
          this.renderSteps();
        }

        if (prevProps.enabled !== enabled) {
          this.renderSteps();
        }
      },
      /**
       * Lifecycle: componentWillUnmount.
       * We use this even to hide the steps when the component is unmounted.
       */
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.introJs.exit();
      },
      /**
       * Triggered when Intro.js steps are exited.
       */
    },
    {
      key: 'installIntroJs',

      /**
       * Installs Intro.js.
       */
      value: function installIntroJs() {
        this.introJs = (0, _intro['default'])();
        this.introJs.onexit(this.onExit);
        this.introJs.onbeforeexit(this.onBeforeExit);
        this.introJs.onbeforechange(this.onBeforeChange);
        this.introJs.onafterchange(this.onAfterChange);
        this.introJs.onchange(this.onChange);
        this.introJs.oncomplete(this.onComplete);
      },
      /**
       * Configures Intro.js if not already configured.
       */
    },
    {
      key: 'configureIntroJs',
      value: function configureIntroJs() {
        var _this$props3 = this.props,
          options = _this$props3.options,
          steps = _this$props3.steps;
        var sanitizedSteps = steps.map(function(step) {
          if ((0, _react.isValidElement)(step.intro)) {
            return _objectSpread(
              _objectSpread({}, step),
              {},
              {
                intro: (0, _server.renderToStaticMarkup)(step.intro),
              }
            );
          }

          return step;
        });
        this.introJs.setOptions(
          _objectSpread(
            _objectSpread({}, options),
            {},
            {
              steps: sanitizedSteps,
            }
          )
        );
        this.isConfigured = true;
      },
      /**
       * Renders the Intro.js steps.
       */
    },
    {
      key: 'renderSteps',
      value: function renderSteps() {
        var _this$props4 = this.props,
          enabled = _this$props4.enabled,
          initialStep = _this$props4.initialStep,
          steps = _this$props4.steps,
          onStart = _this$props4.onStart;

        if (enabled && steps.length > 0 && !this.isVisible) {
          this.introJs.start();
          this.isVisible = true;
          this.introJs.goToStepNumber(initialStep + 1);

          if (onStart) {
            onStart(this.introJs._currentStep);
          }
        } else if (!enabled && this.isVisible) {
          this.isVisible = false;
          this.introJs.exit();
        }
      },
      /**
       * Renders the component.
       * @return {null} We do not want to render anything.
       */
    },
    {
      key: 'render',
      value: function render() {
        return null;
      },
    },
  ]);

  return Steps;
})(_react.Component);

exports['default'] = Steps;

_defineProperty(Steps, 'propTypes', {
  enabled: _propTypes['default'].bool,
  initialStep: _propTypes['default'].number.isRequired,
  steps: _propTypes['default'].arrayOf(
    _propTypes['default'].shape({
      element: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].instanceOf(Element),
      ]),
      intro: _propTypes['default'].node.isRequired,
      position: introJsPropTypes.tooltipPosition,
      tooltipClass: _propTypes['default'].string,
      highlightClass: _propTypes['default'].string,
    })
  ).isRequired,
  onStart: _propTypes['default'].func,
  onExit: _propTypes['default'].func.isRequired,
  onBeforeExit: _propTypes['default'].func,
  onBeforeChange: _propTypes['default'].func,
  onAfterChange: _propTypes['default'].func,
  onChange: _propTypes['default'].func,
  onPreventChange: _propTypes['default'].func,
  onComplete: _propTypes['default'].func,
  options: introJsPropTypes.options,
});

_defineProperty(Steps, 'defaultProps', {
  enabled: false,
  onStart: null,
  onBeforeExit: null,
  onBeforeChange: null,
  onAfterChange: null,
  onChange: null,
  onPreventChange: null,
  onComplete: null,
  options: introJsDefaultProps.options,
});
