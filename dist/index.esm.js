import React, { Children, cloneElement, useMemo, forwardRef, useState, useCallback, useImperativeHandle, useEffect } from 'react';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;
  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min.AsyncMode = l;
  reactIs_production_min.ConcurrentMode = m;
  reactIs_production_min.ContextConsumer = k;
  reactIs_production_min.ContextProvider = h;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p;
  reactIs_production_min.isAsyncMode = function (a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min.isConcurrentMode = A;
  reactIs_production_min.isContextConsumer = function (a) {
    return z(a) === k;
  };
  reactIs_production_min.isContextProvider = function (a) {
    return z(a) === h;
  };
  reactIs_production_min.isElement = function (a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  reactIs_production_min.isForwardRef = function (a) {
    return z(a) === n;
  };
  reactIs_production_min.isFragment = function (a) {
    return z(a) === e;
  };
  reactIs_production_min.isLazy = function (a) {
    return z(a) === t;
  };
  reactIs_production_min.isMemo = function (a) {
    return z(a) === r;
  };
  reactIs_production_min.isPortal = function (a) {
    return z(a) === d;
  };
  reactIs_production_min.isProfiler = function (a) {
    return z(a) === g;
  };
  reactIs_production_min.isStrictMode = function (a) {
    return z(a) === f;
  };
  reactIs_production_min.isSuspense = function (a) {
    return z(a) === p;
  };
  reactIs_production_min.isValidElementType = function (a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };
  reactIs_production_min.typeOf = z;
  return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_development;
function requireReactIs_development() {
  if (hasRequiredReactIs_development) return reactIs_development;
  hasRequiredReactIs_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function () {

      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' ||
        // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (typeof object === 'object' && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      reactIs_development.AsyncMode = AsyncMode;
      reactIs_development.ConcurrentMode = ConcurrentMode;
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }
  return reactIs_development;
}

var hasRequiredReactIs;
function requireReactIs() {
  if (hasRequiredReactIs) return reactIs.exports;
  hasRequiredReactIs = 1;
  if (process.env.NODE_ENV === 'production') {
    reactIs.exports = requireReactIs_production_min();
  } else {
    reactIs.exports = requireReactIs_development();
  }
  return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var objectAssign;
var hasRequiredObjectAssign;
function requireObjectAssign() {
  if (hasRequiredObjectAssign) return objectAssign;
  hasRequiredObjectAssign = 1;
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }
      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }
  objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
  return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;
function requireHas() {
  if (hasRequiredHas) return has;
  hasRequiredHas = 1;
  has = Function.call.bind(Object.prototype.hasOwnProperty);
  return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var checkPropTypes_1;
var hasRequiredCheckPropTypes;
function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;
  var printWarning = function () {};
  if (process.env.NODE_ENV !== 'production') {
    var ReactPropTypesSecret = /*@__PURE__*/requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has = /*@__PURE__*/requireHas();
    printWarning = function (text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {/**/}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (process.env.NODE_ENV !== 'production') {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : '';
            printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function () {
    if (process.env.NODE_ENV !== 'production') {
      loggedTypeFailures = {};
    }
  };
  checkPropTypes_1 = checkPropTypes;
  return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;
function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;
  var ReactIs = requireReactIs();
  var assign = requireObjectAssign();
  var ReactPropTypesSecret = /*@__PURE__*/requireReactPropTypesSecret();
  var has = /*@__PURE__*/requireHas();
  var checkPropTypes = /*@__PURE__*/requireCheckPropTypes();
  var printWarning = function () {};
  if (process.env.NODE_ENV !== 'production') {
    printWarning = function (text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }
  function emptyFunctionThatReturnsNull() {
    return null;
  }
  factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bigint: createPrimitiveTypeChecker('bigint'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message, data) {
      this.message = message;
      this.data = data && typeof data === 'object' ? data : {};
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== 'production') {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
            err.name = 'Invariant Violation';
            throw err;
          } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (!manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
            expectedType: expectedType
          });
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== 'production') {
          if (arguments.length > 1) {
            printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
          } else {
            printWarning('Invalid argument supplied to oneOf, expected an array.');
          }
        }
        return emptyFunctionThatReturnsNull;
      }
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }
        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === 'symbol') {
            return String(value);
          }
          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
        return emptyFunctionThatReturnsNull;
      }
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
          return emptyFunctionThatReturnsNull;
        }
      }
      function validate(props, propName, componentName, location, propFullName) {
        var expectedTypes = [];
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
          if (checkerResult == null) {
            return null;
          }
          if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
      }
      return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
      return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== 'function') {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from props.
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has(shapeTypes, key) && typeof checker !== 'function') {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          if (!checker) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }
          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }
          return true;
        default:
          return false;
      }
    }
    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }
      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = /*@__PURE__*/requireReactPropTypesSecret();
  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims = function () {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredPropTypes;
function requirePropTypes() {
  if (hasRequiredPropTypes) return propTypes.exports;
  hasRequiredPropTypes = 1;
  if (process.env.NODE_ENV !== 'production') {
    var ReactIs = requireReactIs();

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    propTypes.exports = /*@__PURE__*/requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    propTypes.exports = /*@__PURE__*/requireFactoryWithThrowingShims()();
  }
  return propTypes.exports;
}

var propTypesExports = /*@__PURE__*/ requirePropTypes();
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production;
function requireReactJsxRuntime_production() {
  if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
  hasRequiredReactJsxRuntime_production = 1;
  var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
    REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
  function jsxProd(type, config, maybeKey) {
    var key = null;
    void 0 !== maybeKey && (key = "" + maybeKey);
    void 0 !== config.key && (key = "" + config.key);
    if ("key" in config) {
      maybeKey = {};
      for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
    } else maybeKey = config;
    config = maybeKey.ref;
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key,
      ref: void 0 !== config ? config : null,
      props: maybeKey
    };
  }
  reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
  reactJsxRuntime_production.jsx = jsxProd;
  reactJsxRuntime_production.jsxs = jsxProd;
  return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  "production" !== process.env.NODE_ENV && function () {
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PORTAL_TYPE:
          return "Portal";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if ("object" === typeof type) switch ("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
        case REACT_CONTEXT_TYPE:
          return (type.displayName || "Context") + ".Provider";
        case REACT_CONSUMER_TYPE:
          return (type._context.displayName || "Context") + ".Consumer";
        case REACT_FORWARD_REF_TYPE:
          var innerType = type.render;
          type = type.displayName;
          type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
          return type;
        case REACT_MEMO_TYPE:
          return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
        case REACT_LAZY_TYPE:
          innerType = type._payload;
          type = type._init;
          try {
            return getComponentNameFromType(type(innerType));
          } catch (x) {}
      }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = !1;
      } catch (e) {
        JSCompiler_inline_result = !0;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function disabledLog() {}
    function disableLogs() {
      if (0 === disabledDepth) {
        prevLog = console.log;
        prevInfo = console.info;
        prevWarn = console.warn;
        prevError = console.error;
        prevGroup = console.group;
        prevGroupCollapsed = console.groupCollapsed;
        prevGroupEnd = console.groupEnd;
        var props = {
          configurable: !0,
          enumerable: !0,
          value: disabledLog,
          writable: !0
        };
        Object.defineProperties(console, {
          info: props,
          log: props,
          warn: props,
          error: props,
          group: props,
          groupCollapsed: props,
          groupEnd: props
        });
      }
      disabledDepth++;
    }
    function reenableLogs() {
      disabledDepth--;
      if (0 === disabledDepth) {
        var props = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: assign({}, props, {
            value: prevLog
          }),
          info: assign({}, props, {
            value: prevInfo
          }),
          warn: assign({}, props, {
            value: prevWarn
          }),
          error: assign({}, props, {
            value: prevError
          }),
          group: assign({}, props, {
            value: prevGroup
          }),
          groupCollapsed: assign({}, props, {
            value: prevGroupCollapsed
          }),
          groupEnd: assign({}, props, {
            value: prevGroupEnd
          })
        });
      }
      0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
      if (void 0 === prefix) try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || "";
        suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry) return "";
      var frame = componentFrameCache.get(fn);
      if (void 0 !== frame) return frame;
      reentry = !0;
      frame = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var previousDispatcher = null;
      previousDispatcher = ReactSharedInternals.H;
      ReactSharedInternals.H = null;
      disableLogs();
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function () {
            try {
              if (construct) {
                var Fake = function () {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function () {
                    throw Error();
                  }
                });
                if ("object" === typeof Reflect && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$0) {
                    control = x$0;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$1) {
                  control = x$1;
                }
                (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function () {});
              }
            } catch (sample) {
              if (sample && control && "string" === typeof sample.stack) return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(),
          sampleStack = _RunInRootFrame$Deter[0],
          controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split("\n"),
            controlLines = controlStack.split("\n");
          for (_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");) namePropDescriptor++;
          for (; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");) _RunInRootFrame$Deter++;
          if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];) _RunInRootFrame$Deter--;
          for (; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--) if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
            if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
              do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                "function" === typeof fn && componentFrameCache.set(fn, _frame);
                return _frame;
              } while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
            }
            break;
          }
        }
      } finally {
        reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
      }
      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
      "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
      return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
      if (null == type) return "";
      if ("function" === typeof type) {
        var prototype = type.prototype;
        return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
      }
      if ("string" === typeof type) return describeBuiltInComponentFrame(type);
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
      }
      if ("object" === typeof type) switch (type.$$typeof) {
        case REACT_FORWARD_REF_TYPE:
          return type = describeNativeComponentFrame(type.render, !1), type;
        case REACT_MEMO_TYPE:
          return describeUnknownElementTypeFrameInDEV(type.type);
        case REACT_LAZY_TYPE:
          prototype = type._payload;
          type = type._init;
          try {
            return describeUnknownElementTypeFrameInDEV(type(prototype));
          } catch (x) {}
      }
      return "";
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning) return !1;
      }
      return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = !0;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: !0
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        props: props,
        _owner: owner
      };
      null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
        enumerable: !1,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", {
        enumerable: !1,
        value: null
      });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
      if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId)) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) {
          if (isArrayImpl(children)) {
            for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++) validateChildKeys(children[isStaticChildren], type);
            Object.freeze && Object.freeze(children);
          } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        } else validateChildKeys(children, type);
      } else {
        children = "";
        if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
        console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", isStaticChildren, children);
      }
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function (k) {
          return "key" !== k;
        });
        isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
      }
      children = null;
      void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
      hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
      return ReactElement(type, children, self, source, getOwner(), maybeKey);
    }
    function validateChildKeys(node, parentType) {
      if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) if (isArrayImpl(node)) for (var i = 0; i < node.length; i++) {
        var child = node[i];
        isValidElement(child) && validateExplicitKey(child, parentType);
      } else if (isValidElement(node)) node._store && (node._store.validated = 1);else if (null === node || "object" !== typeof node ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = "function" === typeof i ? i : null), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node)) for (; !(node = i.next()).done;) isValidElement(node.value) && validateExplicitKey(node.value, parentType);
    }
    function isValidElement(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
      if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
        ownerHasKeyUseWarning[parentType] = !0;
        var childOwner = "";
        element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
        ReactSharedInternals.getCurrentStack = function () {
          var stack = describeUnknownElementTypeFrameInDEV(element.type);
          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
          return stack;
        };
        console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
      }
    }
    function getCurrentComponentErrorInfo(parentType) {
      var info = "",
        owner = getOwner();
      owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
      info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
      return info;
    }
    var React$1 = React,
      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
      REACT_MEMO_TYPE = Symbol.for("react.memo"),
      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
      REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
      REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"),
      ReactSharedInternals = React$1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      assign = Object.assign,
      REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"),
      isArrayImpl = Array.isArray,
      disabledDepth = 0,
      prevLog,
      prevInfo,
      prevWarn,
      prevError,
      prevGroup,
      prevGroupCollapsed,
      prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix,
      suffix,
      reentry = !1;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
      specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {},
      ownerHasKeyUseWarning = {};
    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
    reactJsxRuntime_development.jsx = function (type, config, maybeKey, source, self) {
      return jsxDEVImpl(type, config, maybeKey, !1, source, self);
    };
    reactJsxRuntime_development.jsxs = function (type, config, maybeKey, source, self) {
      return jsxDEVImpl(type, config, maybeKey, !0, source, self);
    };
  }();
  return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  if (process.env.NODE_ENV === 'production') {
    jsxRuntime.exports = requireReactJsxRuntime_production();
  } else {
    jsxRuntime.exports = requireReactJsxRuntime_development();
  }
  return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

var mimicFn_1;
var hasRequiredMimicFn;
function requireMimicFn() {
  if (hasRequiredMimicFn) return mimicFn_1;
  hasRequiredMimicFn = 1;
  const copyProperty = (to, from, property, ignoreNonConfigurable) => {
    // `Function#length` should reflect the parameters of `to` not `from` since we keep its body.
    // `Function#prototype` is non-writable and non-configurable so can never be modified.
    if (property === 'length' || property === 'prototype') {
      return;
    }

    // `Function#arguments` and `Function#caller` should not be copied. They were reported to be present in `Reflect.ownKeys` for some devices in React Native (#41), so we explicitly ignore them here.
    if (property === 'arguments' || property === 'caller') {
      return;
    }
    const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
    const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
    if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
      return;
    }
    Object.defineProperty(to, property, fromDescriptor);
  };

  // `Object.defineProperty()` throws if the property exists, is not configurable and either:
  //  - one its descriptors is changed
  //  - it is non-writable and its value is changed
  const canCopyProperty = function (toDescriptor, fromDescriptor) {
    return toDescriptor === undefined || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
  };
  const changePrototype = (to, from) => {
    const fromPrototype = Object.getPrototypeOf(from);
    if (fromPrototype === Object.getPrototypeOf(to)) {
      return;
    }
    Object.setPrototypeOf(to, fromPrototype);
  };
  const wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/\n${fromBody}`;
  const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, 'toString');
  const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name');

  // We call `from.toString()` early (not lazily) to ensure `from` can be garbage collected.
  // We use `bind()` instead of a closure for the same reason.
  // Calling `from.toString()` early also allows caching it in case `to.toString()` is called several times.
  const changeToString = (to, from, name) => {
    const withName = name === '' ? '' : `with ${name.trim()}() `;
    const newToString = wrappedToString.bind(null, withName, from.toString());
    // Ensure `to.toString.toString` is non-enumerable and has the same `same`
    Object.defineProperty(newToString, 'name', toStringName);
    Object.defineProperty(to, 'toString', {
      ...toStringDescriptor,
      value: newToString
    });
  };
  const mimicFn = (to, from, {
    ignoreNonConfigurable = false
  } = {}) => {
    const {
      name
    } = to;
    for (const property of Reflect.ownKeys(from)) {
      copyProperty(to, from, property, ignoreNonConfigurable);
    }
    changePrototype(to, from);
    changeToString(to, from, name);
    return to;
  };
  mimicFn_1 = mimicFn;
  return mimicFn_1;
}

var dist$2 = {exports: {}};

var pDefer;
var hasRequiredPDefer;
function requirePDefer() {
  if (hasRequiredPDefer) return pDefer;
  hasRequiredPDefer = 1;
  pDefer = () => {
    const ret = {};
    ret.promise = new Promise((resolve, reject) => {
      ret.resolve = resolve;
      ret.reject = reject;
    });
    return ret;
  };
  return pDefer;
}

var dist$1 = dist$2.exports;
var hasRequiredDist$1;
function requireDist$1() {
  if (hasRequiredDist$1) return dist$2.exports;
  hasRequiredDist$1 = 1;
  (function (module, exports) {

    var __awaiter = dist$1 && dist$1.__awaiter || function (thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = dist$1 && dist$1.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const p_defer_1 = __importDefault(requirePDefer());
    function mapAgeCleaner(map, property = 'maxAge') {
      let processingKey;
      let processingTimer;
      let processingDeferred;
      const cleanup = () => __awaiter(this, void 0, void 0, function* () {
        if (processingKey !== undefined) {
          // If we are already processing an item, we can safely exit
          return;
        }
        const setupTimer = item => __awaiter(this, void 0, void 0, function* () {
          processingDeferred = p_defer_1.default();
          const delay = item[1][property] - Date.now();
          if (delay <= 0) {
            // Remove the item immediately if the delay is equal to or below 0
            map.delete(item[0]);
            processingDeferred.resolve();
            return;
          }
          // Keep track of the current processed key
          processingKey = item[0];
          processingTimer = setTimeout(() => {
            // Remove the item when the timeout fires
            map.delete(item[0]);
            if (processingDeferred) {
              processingDeferred.resolve();
            }
          }, delay);
          // tslint:disable-next-line:strict-type-predicates
          if (typeof processingTimer.unref === 'function') {
            // Don't hold up the process from exiting
            processingTimer.unref();
          }
          return processingDeferred.promise;
        });
        try {
          for (const entry of map) {
            yield setupTimer(entry);
          }
        } catch (_a) {
          // Do nothing if an error occurs, this means the timer was cleaned up and we should stop processing
        }
        processingKey = undefined;
      });
      const reset = () => {
        processingKey = undefined;
        if (processingTimer !== undefined) {
          clearTimeout(processingTimer);
          processingTimer = undefined;
        }
        if (processingDeferred !== undefined) {
          // tslint:disable-line:early-exit
          processingDeferred.reject(undefined);
          processingDeferred = undefined;
        }
      };
      const originalSet = map.set.bind(map);
      map.set = (key, value) => {
        if (map.has(key)) {
          // If the key already exist, remove it so we can add it back at the end of the map.
          map.delete(key);
        }
        // Call the original `map.set`
        const result = originalSet(key, value);
        // If we are already processing a key and the key added is the current processed key, stop processing it
        if (processingKey && processingKey === key) {
          reset();
        }
        // Always run the cleanup method in case it wasn't started yet
        cleanup(); // tslint:disable-line:no-floating-promises
        return result;
      };
      cleanup(); // tslint:disable-line:no-floating-promises
      return map;
    }
    exports.default = mapAgeCleaner;
    // Add support for CJS
    module.exports = mapAgeCleaner;
    module.exports.default = mapAgeCleaner;
  })(dist$2, dist$2.exports);
  return dist$2.exports;
}

var dist;
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  const mimicFn = requireMimicFn();
  const mapAgeCleaner = /*@__PURE__*/requireDist$1();
  const decoratorInstanceMap = new WeakMap();
  const cacheStore = new WeakMap();
  /**
  [Memoize](https://en.wikipedia.org/wiki/Memoization) functions - An optimization used to speed up consecutive function calls by caching the result of calls with identical input.
  	@param fn - Function to be memoized.
  	@example
  ```
  import mem = require('mem');
  	let i = 0;
  const counter = () => ++i;
  const memoized = mem(counter);
  	memoized('foo');
  //=> 1
  	// Cached as it's the same arguments
  memoized('foo');
  //=> 1
  	// Not cached anymore as the arguments changed
  memoized('bar');
  //=> 2
  	memoized('bar');
  //=> 2
  ```
  */
  const mem = (fn, {
    cacheKey,
    cache = new Map(),
    maxAge
  } = {}) => {
    if (typeof maxAge === 'number') {
      // TODO: Drop after https://github.com/SamVerschueren/map-age-cleaner/issues/5
      // @ts-expect-error
      mapAgeCleaner(cache);
    }
    const memoized = function (...arguments_) {
      const key = cacheKey ? cacheKey(arguments_) : arguments_[0];
      const cacheItem = cache.get(key);
      if (cacheItem) {
        return cacheItem.data;
      }
      const result = fn.apply(this, arguments_);
      cache.set(key, {
        data: result,
        maxAge: maxAge ? Date.now() + maxAge : Number.POSITIVE_INFINITY
      });
      return result;
    };
    mimicFn(memoized, fn, {
      ignoreNonConfigurable: true
    });
    cacheStore.set(memoized, cache);
    return memoized;
  };
  /**
  @returns A [decorator](https://github.com/tc39/proposal-decorators) to memoize class methods or static class methods.
  	@example
  ```
  import mem = require('mem');
  	class Example {
      index = 0
  	    @mem.decorator()
      counter() {
          return ++this.index;
      }
  }
  	class ExampleWithOptions {
      index = 0
  	    @mem.decorator({maxAge: 1000})
      counter() {
          return ++this.index;
      }
  }
  ```
  */
  mem.decorator = (options = {}) => (target, propertyKey, descriptor) => {
    const input = target[propertyKey];
    if (typeof input !== 'function') {
      throw new TypeError('The decorated value must be a function');
    }
    delete descriptor.value;
    delete descriptor.writable;
    descriptor.get = function () {
      if (!decoratorInstanceMap.has(this)) {
        const value = mem(input, options);
        decoratorInstanceMap.set(this, value);
        return value;
      }
      return decoratorInstanceMap.get(this);
    };
  };
  /**
  Clear all cached data of a memoized function.
  	@param fn - Memoized function.
  */
  mem.clear = fn => {
    const cache = cacheStore.get(fn);
    if (!cache) {
      throw new TypeError('Can\'t clear a function that was not memoized!');
    }
    if (typeof cache.clear !== 'function') {
      throw new TypeError('The cache Map can\'t be cleared!');
    }
    cache.clear();
  };
  dist = mem;
  return dist;
}

var distExports = requireDist();
var mem = /*@__PURE__*/getDefaultExportFromCjs(distExports);

function isString(el) {
  return typeof el === 'string';
}
function isUnique(el, index, arr) {
  return arr.indexOf(el) === index;
}
function isAllLowerCase(el) {
  return el.toLowerCase() === el;
}
function fixCommas(el) {
  return el.indexOf(',') === -1 ? el : el.split(',');
}
function normalizeLocale(locale) {
  if (!locale) {
    return locale;
  }
  if (locale === 'C' || locale === 'posix' || locale === 'POSIX') {
    return 'en-US';
  }
  // If there's a dot (.) in the locale, it's likely in the format of "en-US.UTF-8", so we only take the first part
  if (locale.indexOf('.') !== -1) {
    var _a = locale.split('.')[0],
      actualLocale = _a === void 0 ? '' : _a;
    return normalizeLocale(actualLocale);
  }
  // If there's an at sign (@) in the locale, it's likely in the format of "en-US@posix", so we only take the first part
  if (locale.indexOf('@') !== -1) {
    var _b = locale.split('@')[0],
      actualLocale = _b === void 0 ? '' : _b;
    return normalizeLocale(actualLocale);
  }
  // If there's a dash (-) in the locale and it's not all lower case, it's already in the format of "en-US", so we return it
  if (locale.indexOf('-') === -1 || !isAllLowerCase(locale)) {
    return locale;
  }
  var _c = locale.split('-'),
    splitEl1 = _c[0],
    _d = _c[1],
    splitEl2 = _d === void 0 ? '' : _d;
  return "".concat(splitEl1, "-").concat(splitEl2.toUpperCase());
}
function getUserLocalesInternal(_a) {
  var _b = _a === void 0 ? {} : _a,
    _c = _b.useFallbackLocale,
    useFallbackLocale = _c === void 0 ? true : _c,
    _d = _b.fallbackLocale,
    fallbackLocale = _d === void 0 ? 'en-US' : _d;
  var languageList = [];
  if (typeof navigator !== 'undefined') {
    var rawLanguages = navigator.languages || [];
    var languages = [];
    for (var _i = 0, rawLanguages_1 = rawLanguages; _i < rawLanguages_1.length; _i++) {
      var rawLanguagesItem = rawLanguages_1[_i];
      languages = languages.concat(fixCommas(rawLanguagesItem));
    }
    var rawLanguage = navigator.language;
    var language = rawLanguage ? fixCommas(rawLanguage) : rawLanguage;
    languageList = languageList.concat(languages, language);
  }
  if (useFallbackLocale) {
    languageList.push(fallbackLocale);
  }
  return languageList.filter(isString).map(normalizeLocale).filter(isUnique);
}
var getUserLocales = mem(getUserLocalesInternal, {
  cacheKey: JSON.stringify
});
function getUserLocaleInternal(options) {
  return getUserLocales(options)[0] || null;
}
var getUserLocale = mem(getUserLocaleInternal, {
  cacheKey: JSON.stringify
});

/**
 * Utils
 */
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var previousPeriod = getPeriod(date) + offset;
    return getEdgeOfPeriod(previousPeriod);
  };
}
function makeGetEnd(getBeginOfNextPeriod) {
  return function makeGetEndInternal(date) {
    return new Date(getBeginOfNextPeriod(date).getTime() - 1);
  };
}
function makeGetRange(getStart, getEnd) {
  return function makeGetRangeInternal(date) {
    return [getStart(date), getEnd(date)];
  };
}
/**
 * Simple getters - getting a property of a given point in time
 */
/**
 * Gets year from a given date.
 *
 * @param {DateLike} date Date to get year from
 * @returns {number} Year
 */
function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }
  if (typeof date === 'number') {
    return date;
  }
  var year = parseInt(date, 10);
  if (typeof date === 'string' && !isNaN(year)) {
    return year;
  }
  throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Gets month from a given date.
 *
 * @param {Date} date Date to get month from
 * @returns {number} Month
 */
function getMonth(date) {
  if (date instanceof Date) {
    return date.getMonth();
  }
  throw new Error("Failed to get month from date: ".concat(date, "."));
}
/**
 * Gets day of the month from a given date.
 *
 * @param {Date} date Date to get day of the month from
 * @returns {number} Day of the month
 */
function getDate(date) {
  if (date instanceof Date) {
    return date.getDate();
  }
  throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Century
 */
/**
 * Gets century start date from a given date.
 *
 * @param {DateLike} date Date to get century start from
 * @returns {Date} Century start date
 */
function getCenturyStart(date) {
  var year = getYear(date);
  var centuryStartYear = year + (-year + 1) % 100;
  var centuryStartDate = new Date();
  centuryStartDate.setFullYear(centuryStartYear, 0, 1);
  centuryStartDate.setHours(0, 0, 0, 0);
  return centuryStartDate;
}
/**
 * Gets previous century start date from a given date.
 *
 * @param {DateLike} date Date to get previous century start from
 * @returns {Date} Previous century start date
 */
var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
/**
 * Gets next century start date from a given date.
 *
 * @param {DateLike} date Date to get next century start from
 * @returns {Date} Next century start date
 */
var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
/**
 * Gets century end date from a given date.
 *
 * @param {DateLike} date Date to get century end from
 * @returns {Date} Century end date
 */
var getCenturyEnd = makeGetEnd(getNextCenturyStart);
/**
 * Gets previous century end date from a given date.
 *
 * @param {DateLike} date Date to get previous century end from
 * @returns {Date} Previous century end date
 */
var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
/**
 * Gets century start and end dates from a given date.
 *
 * @param {DateLike} date Date to get century start and end from
 * @returns {[Date, Date]} Century start and end dates
 */
var getCenturyRange = makeGetRange(getCenturyStart, getCenturyEnd);
/**
 * Decade
 */
/**
 * Gets decade start date from a given date.
 *
 * @param {DateLike} date Date to get decade start from
 * @returns {Date} Decade start date
 */
function getDecadeStart(date) {
  var year = getYear(date);
  var decadeStartYear = year + (-year + 1) % 10;
  var decadeStartDate = new Date();
  decadeStartDate.setFullYear(decadeStartYear, 0, 1);
  decadeStartDate.setHours(0, 0, 0, 0);
  return decadeStartDate;
}
/**
 * Gets previous decade start date from a given date.
 *
 * @param {DateLike} date Date to get previous decade start from
 * @returns {Date} Previous decade start date
 */
var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
/**
 * Gets next decade start date from a given date.
 *
 * @param {DateLike} date Date to get next decade start from
 * @returns {Date} Next decade start date
 */
var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
/**
 * Gets decade end date from a given date.
 *
 * @param {DateLike} date Date to get decade end from
 * @returns {Date} Decade end date
 */
var getDecadeEnd = makeGetEnd(getNextDecadeStart);
/**
 * Gets previous decade end date from a given date.
 *
 * @param {DateLike} date Date to get previous decade end from
 * @returns {Date} Previous decade end date
 */
var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
/**
 * Gets decade start and end dates from a given date.
 *
 * @param {DateLike} date Date to get decade start and end from
 * @returns {[Date, Date]} Decade start and end dates
 */
var getDecadeRange = makeGetRange(getDecadeStart, getDecadeEnd);
/**
 * Year
 */
/**
 * Gets year start date from a given date.
 *
 * @param {DateLike} date Date to get year start from
 * @returns {Date} Year start date
 */
function getYearStart(date) {
  var year = getYear(date);
  var yearStartDate = new Date();
  yearStartDate.setFullYear(year, 0, 1);
  yearStartDate.setHours(0, 0, 0, 0);
  return yearStartDate;
}
/**
 * Gets previous year start date from a given date.
 *
 * @param {DateLike} date Date to get previous year start from
 * @returns {Date} Previous year start date
 */
var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
/**
 * Gets next year start date from a given date.
 *
 * @param {DateLike} date Date to get next year start from
 * @returns {Date} Next year start date
 */
var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
/**
 * Gets year end date from a given date.
 *
 * @param {DateLike} date Date to get year end from
 * @returns {Date} Year end date
 */
var getYearEnd = makeGetEnd(getNextYearStart);
/**
 * Gets previous year end date from a given date.
 *
 * @param {DateLike} date Date to get previous year end from
 * @returns {Date} Previous year end date
 */
var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
/**
 * Gets year start and end dates from a given date.
 *
 * @param {DateLike} date Date to get year start and end from
 * @returns {[Date, Date]} Year start and end dates
 */
var getYearRange = makeGetRange(getYearStart, getYearEnd);
/**
 * Month
 */
function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborMonthInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var year = getYear(date);
    var month = getMonth(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, 1);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}
/**
 * Gets month start date from a given date.
 *
 * @param {DateLike} date Date to get month start from
 * @returns {Date} Month start date
 */
function getMonthStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var monthStartDate = new Date();
  monthStartDate.setFullYear(year, month, 1);
  monthStartDate.setHours(0, 0, 0, 0);
  return monthStartDate;
}
/**
 * Gets previous month start date from a given date.
 *
 * @param {DateLike} date Date to get previous month start from
 * @returns {Date} Previous month start date
 */
var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
/**
 * Gets next month start date from a given date.
 *
 * @param {DateLike} date Date to get next month start from
 * @returns {Date} Next month start date
 */
var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
/**
 * Gets month end date from a given date.
 *
 * @param {DateLike} date Date to get month end from
 * @returns {Date} Month end date
 */
var getMonthEnd = makeGetEnd(getNextMonthStart);
/**
 * Gets previous month end date from a given date.
 *
 * @param {DateLike} date Date to get previous month end from
 * @returns {Date} Previous month end date
 */
var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
/**
 * Gets month start and end dates from a given date.
 *
 * @param {DateLike} date Date to get month start and end from
 * @returns {[Date, Date]} Month start and end dates
 */
var getMonthRange = makeGetRange(getMonthStart, getMonthEnd);
/**
 * Day
 */
function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborDayInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, day);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}
/**
 * Gets day start date from a given date.
 *
 * @param {DateLike} date Date to get day start from
 * @returns {Date} Day start date
 */
function getDayStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var day = getDate(date);
  var dayStartDate = new Date();
  dayStartDate.setFullYear(year, month, day);
  dayStartDate.setHours(0, 0, 0, 0);
  return dayStartDate;
}
/**
 * Gets next day start date from a given date.
 *
 * @param {DateLike} date Date to get next day start from
 * @returns {Date} Next day start date
 */
var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
/**
 * Gets day end date from a given date.
 *
 * @param {DateLike} date Date to get day end from
 * @returns {Date} Day end date
 */
var getDayEnd = makeGetEnd(getNextDayStart);
/**
 * Gets day start and end dates from a given date.
 *
 * @param {DateLike} date Date to get day start and end from
 * @returns {[Date, Date]} Day start and end dates
 */
var getDayRange = makeGetRange(getDayStart, getDayEnd);
/**
 * Other
 */
/**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date
 * @returns {number} Number of days in a month
 */
function getDaysInMonth(date) {
  return getDate(getMonthEnd(date));
}

var CALENDAR_TYPES = {
  GREGORY: 'gregory',
  HEBREW: 'hebrew',
  ISLAMIC: 'islamic',
  ISO_8601: 'iso8601'
};
var CALENDAR_TYPE_LOCALES = {
  gregory: ['en-CA', 'en-US', 'es-AR', 'es-BO', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 'es-EC', 'es-GT', 'es-HN', 'es-MX', 'es-NI', 'es-PA', 'es-PE', 'es-PR', 'es-SV', 'es-VE', 'pt-BR'],
  hebrew: ['he', 'he-IL'],
  islamic: [
  // ar-LB, ar-MA intentionally missing
  'ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LY', 'ar-OM', 'ar-QA', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-YE', 'dv', 'dv-MV', 'ps', 'ps-AR']
};
var WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];

var formatterCache = new Map();
function getFormatter(options) {
  return function formatter(locale, date) {
    var localeWithDefault = locale || getUserLocale();
    if (!formatterCache.has(localeWithDefault)) {
      formatterCache.set(localeWithDefault, new Map());
    }
    var formatterCacheLocale = formatterCache.get(localeWithDefault);
    if (!formatterCacheLocale.has(options)) {
      formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || undefined, options).format);
    }
    return formatterCacheLocale.get(options)(date);
  };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 * @returns {Date} Date with hour set to 12.
 */
function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options) {
  return function (locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
}
var formatDayOptions = {
  day: 'numeric'
};
var formatLongDateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
var formatMonthOptions = {
  month: 'long'
};
var formatMonthYearOptions = {
  month: 'long',
  year: 'numeric'
};
var formatShortWeekdayOptions = {
  weekday: 'short'
};
var formatWeekdayOptions = {
  weekday: 'long'
};
var formatYearOptions = {
  year: 'numeric'
};
var formatDay = getSafeFormatter(formatDayOptions);
var formatLongDate = getSafeFormatter(formatLongDateOptions);
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
var formatWeekday = getSafeFormatter(formatWeekdayOptions);
var formatYear = getSafeFormatter(formatYearOptions);

var SUNDAY = WEEKDAYS[0];
var FRIDAY = WEEKDAYS[5];
var SATURDAY = WEEKDAYS[6];
/* Simple getters - getting a property of a given point in time */
/**
 * Gets day of the week of a given date.
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {number} Day of the week.
 */
function getDayOfWeek(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var weekday = date.getDay();
  switch (calendarType) {
    case CALENDAR_TYPES.ISO_8601:
      // Shifts days of the week so that Monday is 0, Sunday is 6
      return (weekday + 6) % 7;
    case CALENDAR_TYPES.ISLAMIC:
      return (weekday + 1) % 7;
    case CALENDAR_TYPES.HEBREW:
    case CALENDAR_TYPES.GREGORY:
      return weekday;
    default:
      throw new Error('Unsupported calendar type.');
  }
}
/**
 * Century
 */
/**
 * Gets the year of the beginning of a century of a given date.
 * @param {Date} date Date.
 * @returns {number} Year of the beginning of a century.
 */
function getBeginOfCenturyYear(date) {
  var beginOfCentury = getCenturyStart(date);
  return getYear(beginOfCentury);
}
/**
 * Decade
 */
/**
 * Gets the year of the beginning of a decade of a given date.
 * @param {Date} date Date.
 * @returns {number} Year of the beginning of a decade.
 */
function getBeginOfDecadeYear(date) {
  var beginOfDecade = getDecadeStart(date);
  return getYear(beginOfDecade);
}
/**
 * Week
 */
/**
 * Returns the beginning of a given week.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {Date} Beginning of a given week.
 */
function getBeginOfWeek(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var year = getYear(date);
  var monthIndex = getMonth(date);
  var day = date.getDate() - getDayOfWeek(date, calendarType);
  return new Date(year, monthIndex, day);
}
/**
 * Gets week number according to ISO 8601 or US standard.
 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
 * In US calendar week 1 is the one with January 1.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {number} Week number.
 */
function getWeekNumber(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var calendarTypeForWeekNumber = calendarType === CALENDAR_TYPES.GREGORY ? CALENDAR_TYPES.GREGORY : CALENDAR_TYPES.ISO_8601;
  var beginOfWeek = getBeginOfWeek(date, calendarType);
  var year = getYear(date) + 1;
  var dayInWeekOne;
  var beginOfFirstWeek;
  // Look for the first week one that does not come after a given date
  do {
    dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === CALENDAR_TYPES.ISO_8601 ? 4 : 1);
    beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarType);
    year -= 1;
  } while (date < beginOfFirstWeek);
  return Math.round((beginOfWeek.getTime() - beginOfFirstWeek.getTime()) / (8.64e7 * 7)) + 1;
}
/**
 * Others
 */
/**
 * Returns the beginning of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a given range.
 */
function getBegin(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getCenturyStart(date);
    case 'decade':
      return getDecadeStart(date);
    case 'year':
      return getYearStart(date);
    case 'month':
      return getMonthStart(date);
    case 'day':
      return getDayStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Returns the beginning of a previous given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a previous given range.
 */
function getBeginPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getPreviousCenturyStart(date);
    case 'decade':
      return getPreviousDecadeStart(date);
    case 'year':
      return getPreviousYearStart(date);
    case 'month':
      return getPreviousMonthStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Returns the beginning of a next given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a next given range.
 */
function getBeginNext(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getNextCenturyStart(date);
    case 'decade':
      return getNextDecadeStart(date);
    case 'year':
      return getNextYearStart(date);
    case 'month':
      return getNextMonthStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getPreviousDecadeStart(date, -100);
    case 'year':
      return getPreviousYearStart(date, -10);
    case 'month':
      return getPreviousMonthStart(date, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginNext2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getNextDecadeStart(date, 100);
    case 'year':
      return getNextYearStart(date, 10);
    case 'month':
      return getNextMonthStart(date, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Returns the end of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} End of a given range.
 */
function getEnd(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getCenturyEnd(date);
    case 'decade':
      return getDecadeEnd(date);
    case 'year':
      return getYearEnd(date);
    case 'month':
      return getMonthEnd(date);
    case 'day':
      return getDayEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Returns the end of a previous given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} End of a previous given range.
 */
function getEndPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getPreviousCenturyEnd(date);
    case 'decade':
      return getPreviousDecadeEnd(date);
    case 'year':
      return getPreviousYearEnd(date);
    case 'month':
      return getPreviousMonthEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEndPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getPreviousDecadeEnd(date, -100);
    case 'year':
      return getPreviousYearEnd(date, -10);
    case 'month':
      return getPreviousMonthEnd(date, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Returns an array with the beginning and the end of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date[]} Beginning and end of a given range.
 */
function getRange(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getCenturyRange(date);
    case 'decade':
      return getDecadeRange(date);
    case 'year':
      return getYearRange(date);
    case 'month':
      return getMonthRange(date);
    case 'day':
      return getDayRange(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 * @returns {Date[]} Beginning and end of a given range.
 */
function getValueRange(rangeType, date1, date2) {
  var rawNextValue = [date1, date2].sort(function (a, b) {
    return a.getTime() - b.getTime();
  });
  return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
}
function toYearLabel(locale, formatYear$1, dates) {
  return dates.map(function (date) {
    return (formatYear$1 || formatYear)(locale, date);
  }).join(' – ');
}
/**
 * @callback FormatYear
 * @param {string} locale Locale.
 * @param {Date} date Date.
 * @returns {string} Formatted year.
 */
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2001-2100.
 *
 * @param {string} locale Locale.
 * @param {FormatYear} formatYear Function to format a year.
 * @param {Date|string|number} date Date or a year as a string or as a number.
 * @returns {string} String labelling a century of a given date.
 */
function getCenturyLabel(locale, formatYear, date) {
  return toYearLabel(locale, formatYear, getCenturyRange(date));
}
/**
 * Returns a string labelling a decade of a given date.
 * For example, for 2017 it will return 2011-2020.
 *
 * @param {string} locale Locale.
 * @param {FormatYear} formatYear Function to format a year.
 * @param {Date|string|number} date Date or a year as a string or as a number.
 * @returns {string} String labelling a decade of a given date.
 */
function getDecadeLabel(locale, formatYear, date) {
  return toYearLabel(locale, formatYear, getDecadeRange(date));
}
/**
 * Returns a boolean determining whether a given date is the current day of the week.
 *
 * @param {Date} date Date.
 * @returns {boolean} Whether a given date is the current day of the week.
 */
function isCurrentDayOfWeek(date) {
  return date.getDay() === new Date().getDay();
}
/**
 * Returns a boolean determining whether a given date is a weekend day.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {boolean} Whether a given date is a weekend day.
 */
function isWeekend(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var weekday = date.getDay();
  switch (calendarType) {
    case CALENDAR_TYPES.ISLAMIC:
    case CALENDAR_TYPES.HEBREW:
      return weekday === FRIDAY || weekday === SATURDAY;
    case CALENDAR_TYPES.ISO_8601:
    case CALENDAR_TYPES.GREGORY:
      return weekday === SATURDAY || weekday === SUNDAY;
    default:
      throw new Error('Unsupported calendar type.');
  }
}

var className$6 = 'react-calendar__navigation';
function Navigation(_a) {
  var activeStartDate = _a.activeStartDate,
    drillUp = _a.drillUp,
    _b = _a.formatMonthYear,
    formatMonthYear$1 = _b === void 0 ? formatMonthYear : _b,
    _c = _a.formatYear,
    formatYear$1 = _c === void 0 ? formatYear : _c,
    locale = _a.locale,
    maxDate = _a.maxDate,
    minDate = _a.minDate,
    _d = _a.navigationAriaLabel,
    navigationAriaLabel = _d === void 0 ? '' : _d,
    navigationAriaLive = _a.navigationAriaLive,
    navigationLabel = _a.navigationLabel,
    _e = _a.next2AriaLabel,
    next2AriaLabel = _e === void 0 ? '' : _e,
    _f = _a.next2Label,
    next2Label = _f === void 0 ? '»' : _f,
    _g = _a.nextAriaLabel,
    nextAriaLabel = _g === void 0 ? '' : _g,
    _h = _a.nextLabel,
    nextLabel = _h === void 0 ? '›' : _h,
    _j = _a.prev2AriaLabel,
    prev2AriaLabel = _j === void 0 ? '' : _j,
    _k = _a.prev2Label,
    prev2Label = _k === void 0 ? '«' : _k,
    _l = _a.prevAriaLabel,
    prevAriaLabel = _l === void 0 ? '' : _l,
    _m = _a.prevLabel,
    prevLabel = _m === void 0 ? '‹' : _m,
    setActiveStartDate = _a.setActiveStartDate,
    showDoubleView = _a.showDoubleView,
    view = _a.view,
    views = _a.views;
  var drillUpAvailable = views.indexOf(view) > 0;
  var shouldShowPrevNext2Buttons = view !== 'century';
  var previousActiveStartDate = getBeginPrevious(view, activeStartDate);
  var previousActiveStartDate2 = shouldShowPrevNext2Buttons ? getBeginPrevious2(view, activeStartDate) : undefined;
  var nextActiveStartDate = getBeginNext(view, activeStartDate);
  var nextActiveStartDate2 = shouldShowPrevNext2Buttons ? getBeginNext2(view, activeStartDate) : undefined;
  var prevButtonDisabled = function () {
    if (previousActiveStartDate.getFullYear() < 0) {
      return true;
    }
    var previousActiveEndDate = getEndPrevious(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();
  var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function () {
    if (previousActiveStartDate2.getFullYear() < 0) {
      return true;
    }
    var previousActiveEndDate = getEndPrevious2(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();
  var nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
  var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;
  function onClickPrevious() {
    setActiveStartDate(previousActiveStartDate, 'prev');
  }
  function onClickPrevious2() {
    setActiveStartDate(previousActiveStartDate2, 'prev2');
  }
  function onClickNext() {
    setActiveStartDate(nextActiveStartDate, 'next');
  }
  function onClickNext2() {
    setActiveStartDate(nextActiveStartDate2, 'next2');
  }
  function renderLabel(date) {
    var label = function () {
      switch (view) {
        case 'century':
          return getCenturyLabel(locale, formatYear$1, date);
        case 'decade':
          return getDecadeLabel(locale, formatYear$1, date);
        case 'year':
          return formatYear$1(locale, date);
        case 'month':
          return formatMonthYear$1(locale, date);
        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();
    return navigationLabel ? navigationLabel({
      date: date,
      label: label,
      locale: locale || getUserLocale() || undefined,
      view: view
    }) : label;
  }
  function renderButton() {
    var labelClassName = "".concat(className$6, "__label");
    return jsxRuntimeExports.jsxs("button", {
      "aria-label": navigationAriaLabel,
      "aria-live": navigationAriaLive,
      className: labelClassName,
      disabled: !drillUpAvailable,
      onClick: drillUp,
      style: {
        flexGrow: 1
      },
      type: "button",
      children: [jsxRuntimeExports.jsx("span", {
        className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from"),
        children: renderLabel(activeStartDate)
      }), showDoubleView ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [jsxRuntimeExports.jsx("span", {
          className: "".concat(labelClassName, "__divider"),
          children: " \u2013 "
        }), jsxRuntimeExports.jsx("span", {
          className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to"),
          children: renderLabel(nextActiveStartDate)
        })]
      }) : null]
    });
  }
  return jsxRuntimeExports.jsxs("div", {
    className: className$6,
    children: [prev2Label !== null && shouldShowPrevNext2Buttons ? jsxRuntimeExports.jsx("button", {
      "aria-label": prev2AriaLabel,
      className: "".concat(className$6, "__arrow ").concat(className$6, "__prev2-button"),
      disabled: prev2ButtonDisabled,
      onClick: onClickPrevious2,
      type: "button",
      children: prev2Label
    }) : null, prevLabel !== null && jsxRuntimeExports.jsx("button", {
      "aria-label": prevAriaLabel,
      className: "".concat(className$6, "__arrow ").concat(className$6, "__prev-button"),
      disabled: prevButtonDisabled,
      onClick: onClickPrevious,
      type: "button",
      children: prevLabel
    }), renderButton(), nextLabel !== null && jsxRuntimeExports.jsx("button", {
      "aria-label": nextAriaLabel,
      className: "".concat(className$6, "__arrow ").concat(className$6, "__next-button"),
      disabled: nextButtonDisabled,
      onClick: onClickNext,
      type: "button",
      children: nextLabel
    }), next2Label !== null && shouldShowPrevNext2Buttons ? jsxRuntimeExports.jsx("button", {
      "aria-label": next2AriaLabel,
      className: "".concat(className$6, "__arrow ").concat(className$6, "__next2-button"),
      disabled: next2ButtonDisabled,
      onClick: onClickNext2,
      type: "button",
      children: next2Label
    }) : null]
  });
}

var __assign$e = undefined && undefined.__assign || function () {
  __assign$e = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$e.apply(this, arguments);
};
var __rest$a = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function toPercent(num) {
  return "".concat(num, "%");
}
function Flex(_a) {
  var children = _a.children,
    className = _a.className,
    count = _a.count,
    direction = _a.direction,
    offset = _a.offset,
    style = _a.style,
    wrap = _a.wrap,
    otherProps = __rest$a(_a, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return jsxRuntimeExports.jsx("div", __assign$e({
    className: className,
    style: __assign$e({
      display: 'flex',
      flexDirection: direction,
      flexWrap: wrap ? 'wrap' : 'nowrap'
    }, style)
  }, otherProps, {
    children: Children.map(children, function (child, index) {
      var marginInlineStart = offset && index === 0 ? toPercent(100 * offset / count) : null;
      return /*#__PURE__*/cloneElement(child, __assign$e(__assign$e({}, child.props), {
        style: {
          flexBasis: toPercent(100 / count),
          flexShrink: 0,
          flexGrow: 0,
          overflow: 'hidden',
          marginLeft: marginInlineStart,
          marginInlineStart: marginInlineStart,
          marginInlineEnd: 0
        }
      }));
    })
  }));
}

/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {Date} value Value to return.
 * @param {Date} min Minimum return value.
 * @param {Date} max Maximum return value.
 * @returns {Date} Value between min and max.
 */
function between(value, min, max) {
  if (min && min > value) {
    return min;
  }
  if (max && max < value) {
    return max;
  }
  return value;
}
function isValueWithinRange(value, range) {
  return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
  return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
  return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
function getRangeClassNames(valueRange, dateRange, baseClassName) {
  var isRange = doRangesOverlap(dateRange, valueRange);
  var classes = [];
  if (isRange) {
    classes.push(baseClassName);
    var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
    var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
    if (isRangeStart) {
      classes.push("".concat(baseClassName, "Start"));
    }
    if (isRangeEnd) {
      classes.push("".concat(baseClassName, "End"));
    }
    if (isRangeStart && isRangeEnd) {
      classes.push("".concat(baseClassName, "BothEnds"));
    }
  }
  return classes;
}
function isCompleteValue(value) {
  if (Array.isArray(value)) {
    return value[0] !== null && value[1] !== null;
  }
  return value !== null;
}
function getTileClasses(args) {
  if (!args) {
    throw new Error('args is required');
  }
  var value = args.value,
    date = args.date,
    hover = args.hover;
  var className = 'react-calendar__tile';
  var classes = [className];
  if (!date) {
    return classes;
  }
  var now = new Date();
  var dateRange = function () {
    if (Array.isArray(date)) {
      return date;
    }
    var dateType = args.dateType;
    if (!dateType) {
      throw new Error('dateType is required when date is not an array of two dates');
    }
    return getRange(dateType, date);
  }();
  if (isValueWithinRange(now, dateRange)) {
    classes.push("".concat(className, "--now"));
  }
  if (!value || !isCompleteValue(value)) {
    return classes;
  }
  var valueRange = function () {
    if (Array.isArray(value)) {
      return value;
    }
    var valueType = args.valueType;
    if (!valueType) {
      throw new Error('valueType is required when value is not an array of two dates');
    }
    return getRange(valueType, value);
  }();
  if (isRangeWithinRange(valueRange, dateRange)) {
    classes.push("".concat(className, "--active"));
  } else if (doRangesOverlap(valueRange, dateRange)) {
    classes.push("".concat(className, "--hasActive"));
  }
  var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className, "--range"));
  classes.push.apply(classes, valueRangeClassNames);
  var valueArray = Array.isArray(value) ? value : [value];
  if (hover && valueArray.length === 1) {
    var hoverRange = hover > valueRange[0] ? [valueRange[0], hover] : [hover, valueRange[0]];
    var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className, "--hover"));
    classes.push.apply(classes, hoverRangeClassNames);
  }
  return classes;
}

function TileGroup(_a) {
  var className = _a.className,
    _b = _a.count,
    count = _b === void 0 ? 3 : _b,
    dateTransform = _a.dateTransform,
    dateType = _a.dateType,
    end = _a.end,
    hover = _a.hover,
    offset = _a.offset,
    renderTile = _a.renderTile,
    start = _a.start,
    _c = _a.step,
    step = _c === void 0 ? 1 : _c,
    value = _a.value,
    valueType = _a.valueType;
  var tiles = [];
  for (var point = start; point <= end; point += step) {
    var date = dateTransform(point);
    tiles.push(renderTile({
      classes: getTileClasses({
        date: date,
        dateType: dateType,
        hover: hover,
        value: value,
        valueType: valueType
      }),
      date: date
    }));
  }
  return jsxRuntimeExports.jsx(Flex, {
    className: className,
    count: count,
    offset: offset,
    wrap: true,
    children: tiles
  });
}

function Tile(props) {
  var activeStartDate = props.activeStartDate,
    children = props.children,
    classes = props.classes,
    date = props.date,
    formatAbbr = props.formatAbbr,
    locale = props.locale,
    maxDate = props.maxDate,
    maxDateTransform = props.maxDateTransform,
    minDate = props.minDate,
    minDateTransform = props.minDateTransform,
    onClick = props.onClick,
    onMouseOver = props.onMouseOver,
    style = props.style,
    tileClassNameProps = props.tileClassName,
    tileContentProps = props.tileContent,
    tileDisabled = props.tileDisabled,
    view = props.view;
  var tileClassName = useMemo(function () {
    var args = {
      activeStartDate: activeStartDate,
      date: date,
      view: view
    };
    return typeof tileClassNameProps === 'function' ? tileClassNameProps(args) : tileClassNameProps;
  }, [activeStartDate, date, tileClassNameProps, view]);
  var tileContent = useMemo(function () {
    var args = {
      activeStartDate: activeStartDate,
      date: date,
      view: view
    };
    return typeof tileContentProps === 'function' ? tileContentProps(args) : tileContentProps;
  }, [activeStartDate, date, tileContentProps, view]);
  return jsxRuntimeExports.jsxs("button", {
    className: clsx(classes, tileClassName),
    disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || (tileDisabled === null || tileDisabled === void 0 ? void 0 : tileDisabled({
      activeStartDate: activeStartDate,
      date: date,
      view: view
    })),
    onClick: onClick ? function (event) {
      return onClick(date, event);
    } : undefined,
    onFocus: onMouseOver ? function () {
      return onMouseOver(date);
    } : undefined,
    onMouseOver: onMouseOver ? function () {
      return onMouseOver(date);
    } : undefined,
    style: style,
    type: "button",
    children: [formatAbbr ? jsxRuntimeExports.jsx("abbr", {
      "aria-label": formatAbbr(locale, date),
      children: children
    }) : children, tileContent]
  });
}

var __assign$d = undefined && undefined.__assign || function () {
  __assign$d = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$d.apply(this, arguments);
};
var __rest$9 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var className$5 = 'react-calendar__century-view__decades__decade';
function Decade(_a) {
  var _b = _a.classes,
    classes = _b === void 0 ? [] : _b,
    currentCentury = _a.currentCentury,
    _c = _a.formatYear,
    formatYear$1 = _c === void 0 ? formatYear : _c,
    otherProps = __rest$9(_a, ["classes", "currentCentury", "formatYear"]);
  var date = otherProps.date,
    locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  if (className$5) {
    classesProps.push(className$5);
  }
  if (getCenturyStart(date).getFullYear() !== currentCentury) {
    classesProps.push("".concat(className$5, "--neighboringCentury"));
  }
  return jsxRuntimeExports.jsx(Tile, __assign$d({}, otherProps, {
    classes: classesProps,
    maxDateTransform: getDecadeEnd,
    minDateTransform: getDecadeStart,
    view: "century",
    children: getDecadeLabel(locale, formatYear$1, date)
  }));
}

var __assign$c = undefined && undefined.__assign || function () {
  __assign$c = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$c.apply(this, arguments);
};
var __rest$8 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Decades(props) {
  var activeStartDate = props.activeStartDate,
    hover = props.hover,
    showNeighboringCentury = props.showNeighboringCentury,
    value = props.value,
    valueType = props.valueType,
    otherProps = __rest$8(props, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]);
  var start = getBeginOfCenturyYear(activeStartDate);
  var end = start + (showNeighboringCentury ? 119 : 99);
  return jsxRuntimeExports.jsx(TileGroup, {
    className: "react-calendar__century-view__decades",
    dateTransform: getDecadeStart,
    dateType: "decade",
    end: end,
    hover: hover,
    renderTile: function (_a) {
      var date = _a.date,
        otherTileProps = __rest$8(_a, ["date"]);
      return jsxRuntimeExports.jsx(Decade, __assign$c({}, otherProps, otherTileProps, {
        activeStartDate: activeStartDate,
        currentCentury: start,
        date: date
      }), date.getTime());
    },
    start: start,
    step: 10,
    value: value,
    valueType: valueType
  });
}

var __assign$b = undefined && undefined.__assign || function () {
  __assign$b = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$b.apply(this, arguments);
};
/**
 * Displays a given century.
 */
function CenturyView(props) {
  function renderDecades() {
    return jsxRuntimeExports.jsx(Decades, __assign$b({}, props));
  }
  return jsxRuntimeExports.jsx("div", {
    className: "react-calendar__century-view",
    children: renderDecades()
  });
}

var __assign$a = undefined && undefined.__assign || function () {
  __assign$a = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$a.apply(this, arguments);
};
var __rest$7 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var className$4 = 'react-calendar__decade-view__years__year';
function Year(_a) {
  var _b = _a.classes,
    classes = _b === void 0 ? [] : _b,
    currentDecade = _a.currentDecade,
    _c = _a.formatYear,
    formatYear$1 = _c === void 0 ? formatYear : _c,
    otherProps = __rest$7(_a, ["classes", "currentDecade", "formatYear"]);
  var date = otherProps.date,
    locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  if (className$4) {
    classesProps.push(className$4);
  }
  if (getDecadeStart(date).getFullYear() !== currentDecade) {
    classesProps.push("".concat(className$4, "--neighboringDecade"));
  }
  return jsxRuntimeExports.jsx(Tile, __assign$a({}, otherProps, {
    classes: classesProps,
    maxDateTransform: getYearEnd,
    minDateTransform: getYearStart,
    view: "decade",
    children: formatYear$1(locale, date)
  }));
}

var __assign$9 = undefined && undefined.__assign || function () {
  __assign$9 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$9.apply(this, arguments);
};
var __rest$6 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Years(props) {
  var activeStartDate = props.activeStartDate,
    hover = props.hover,
    showNeighboringDecade = props.showNeighboringDecade,
    value = props.value,
    valueType = props.valueType,
    otherProps = __rest$6(props, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]);
  var start = getBeginOfDecadeYear(activeStartDate);
  var end = start + (showNeighboringDecade ? 11 : 9);
  return jsxRuntimeExports.jsx(TileGroup, {
    className: "react-calendar__decade-view__years",
    dateTransform: getYearStart,
    dateType: "year",
    end: end,
    hover: hover,
    renderTile: function (_a) {
      var date = _a.date,
        otherTileProps = __rest$6(_a, ["date"]);
      return jsxRuntimeExports.jsx(Year, __assign$9({}, otherProps, otherTileProps, {
        activeStartDate: activeStartDate,
        currentDecade: start,
        date: date
      }), date.getTime());
    },
    start: start,
    value: value,
    valueType: valueType
  });
}

var __assign$8 = undefined && undefined.__assign || function () {
  __assign$8 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$8.apply(this, arguments);
};
/**
 * Displays a given decade.
 */
function DecadeView(props) {
  function renderYears() {
    return jsxRuntimeExports.jsx(Years, __assign$8({}, props));
  }
  return jsxRuntimeExports.jsx("div", {
    className: "react-calendar__decade-view",
    children: renderYears()
  });
}

var __assign$7 = undefined && undefined.__assign || function () {
  __assign$7 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$7.apply(this, arguments);
};
var __rest$5 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var className$3 = 'react-calendar__year-view__months__month';
function Month(_a) {
  var _b = _a.classes,
    classes = _b === void 0 ? [] : _b,
    _c = _a.formatMonth,
    formatMonth$1 = _c === void 0 ? formatMonth : _c,
    _d = _a.formatMonthYear,
    formatMonthYear$1 = _d === void 0 ? formatMonthYear : _d,
    otherProps = __rest$5(_a, ["classes", "formatMonth", "formatMonthYear"]);
  var date = otherProps.date,
    locale = otherProps.locale;
  return jsxRuntimeExports.jsx(Tile, __assign$7({}, otherProps, {
    classes: __spreadArray(__spreadArray([], classes, true), [className$3], false),
    formatAbbr: formatMonthYear$1,
    maxDateTransform: getMonthEnd,
    minDateTransform: getMonthStart,
    view: "year",
    children: formatMonth$1(locale, date)
  }));
}

var __assign$6 = undefined && undefined.__assign || function () {
  __assign$6 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$6.apply(this, arguments);
};
var __rest$4 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Months(props) {
  var activeStartDate = props.activeStartDate,
    hover = props.hover,
    value = props.value,
    valueType = props.valueType,
    otherProps = __rest$4(props, ["activeStartDate", "hover", "value", "valueType"]);
  var start = 0;
  var end = 11;
  var year = getYear(activeStartDate);
  return jsxRuntimeExports.jsx(TileGroup, {
    className: "react-calendar__year-view__months",
    dateTransform: function (monthIndex) {
      var date = new Date();
      date.setFullYear(year, monthIndex, 1);
      return getMonthStart(date);
    },
    dateType: "month",
    end: end,
    hover: hover,
    renderTile: function (_a) {
      var date = _a.date,
        otherTileProps = __rest$4(_a, ["date"]);
      return jsxRuntimeExports.jsx(Month, __assign$6({}, otherProps, otherTileProps, {
        activeStartDate: activeStartDate,
        date: date
      }), date.getTime());
    },
    start: start,
    value: value,
    valueType: valueType
  });
}

var __assign$5 = undefined && undefined.__assign || function () {
  __assign$5 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$5.apply(this, arguments);
};
/**
 * Displays a given year.
 */
function YearView(props) {
  function renderMonths() {
    return jsxRuntimeExports.jsx(Months, __assign$5({}, props));
  }
  return jsxRuntimeExports.jsx("div", {
    className: "react-calendar__year-view",
    children: renderMonths()
  });
}

var __assign$4 = undefined && undefined.__assign || function () {
  __assign$4 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$4.apply(this, arguments);
};
var __rest$3 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var className$2 = 'react-calendar__month-view__days__day';
function Day(_a) {
  var calendarType = _a.calendarType,
    _b = _a.classes,
    classes = _b === void 0 ? [] : _b,
    currentMonthIndex = _a.currentMonthIndex,
    _c = _a.formatDay,
    formatDay$1 = _c === void 0 ? formatDay : _c,
    _d = _a.formatLongDate,
    formatLongDate$1 = _d === void 0 ? formatLongDate : _d,
    otherProps = __rest$3(_a, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]);
  var date = otherProps.date,
    locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  if (className$2) {
    classesProps.push(className$2);
  }
  if (isWeekend(date, calendarType)) {
    classesProps.push("".concat(className$2, "--weekend"));
  }
  if (date.getMonth() !== currentMonthIndex) {
    classesProps.push("".concat(className$2, "--neighboringMonth"));
  }
  return jsxRuntimeExports.jsx(Tile, __assign$4({}, otherProps, {
    classes: classesProps,
    formatAbbr: formatLongDate$1,
    maxDateTransform: getDayEnd,
    minDateTransform: getDayStart,
    view: "month",
    children: formatDay$1(locale, date)
  }));
}

var __assign$3 = undefined && undefined.__assign || function () {
  __assign$3 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$3.apply(this, arguments);
};
var __rest$2 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Days(props) {
  var activeStartDate = props.activeStartDate,
    calendarType = props.calendarType,
    hover = props.hover,
    showFixedNumberOfWeeks = props.showFixedNumberOfWeeks,
    showNeighboringMonth = props.showNeighboringMonth,
    value = props.value,
    valueType = props.valueType,
    otherProps = __rest$2(props, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]);
  var year = getYear(activeStartDate);
  var monthIndex = getMonth(activeStartDate);
  var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
  var dayOfWeek = getDayOfWeek(activeStartDate, calendarType);
  var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
  /**
   * Defines on which day of the month the grid shall start. If we simply show current
   * month, we obviously start on day one, but if showNeighboringMonth is set to
   * true, we need to find the beginning of the week the first day of the month is in.
   */
  var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
  /**
   * Defines on which day of the month the grid shall end. If we simply show current
   * month, we need to stop on the last day of the month, but if showNeighboringMonth
   * is set to true, we need to find the end of the week the last day of the month is in.
   */
  var end = function () {
    if (showFixedNumberOfWeeks) {
      // Always show 6 weeks
      return start + 6 * 7 - 1;
    }
    var daysInMonth = getDaysInMonth(activeStartDate);
    if (showNeighboringMonth) {
      var activeEndDate = new Date();
      activeEndDate.setFullYear(year, monthIndex, daysInMonth);
      activeEndDate.setHours(0, 0, 0, 0);
      var daysUntilEndOfTheWeek = 7 - getDayOfWeek(activeEndDate, calendarType) - 1;
      return daysInMonth + daysUntilEndOfTheWeek;
    }
    return daysInMonth;
  }();
  return jsxRuntimeExports.jsx(TileGroup, {
    className: "react-calendar__month-view__days",
    count: 7,
    dateTransform: function (day) {
      var date = new Date();
      date.setFullYear(year, monthIndex, day);
      return getDayStart(date);
    },
    dateType: "day",
    hover: hover,
    end: end,
    renderTile: function (_a) {
      var date = _a.date,
        otherTileProps = __rest$2(_a, ["date"]);
      return jsxRuntimeExports.jsx(Day, __assign$3({}, otherProps, otherTileProps, {
        activeStartDate: activeStartDate,
        calendarType: calendarType,
        currentMonthIndex: monthIndex,
        date: date
      }), date.getTime());
    },
    offset: offset,
    start: start,
    value: value,
    valueType: valueType
  });
}

var className$1 = 'react-calendar__month-view__weekdays';
var weekdayClassName = "".concat(className$1, "__weekday");
function Weekdays(props) {
  var calendarType = props.calendarType,
    _a = props.formatShortWeekday,
    formatShortWeekday$1 = _a === void 0 ? formatShortWeekday : _a,
    _b = props.formatWeekday,
    formatWeekday$1 = _b === void 0 ? formatWeekday : _b,
    locale = props.locale,
    onMouseLeave = props.onMouseLeave;
  var anyDate = new Date();
  var beginOfMonth = getMonthStart(anyDate);
  var year = getYear(beginOfMonth);
  var monthIndex = getMonth(beginOfMonth);
  var weekdays = [];
  for (var weekday = 1; weekday <= 7; weekday += 1) {
    var weekdayDate = new Date(year, monthIndex, weekday - getDayOfWeek(beginOfMonth, calendarType));
    var abbr = formatWeekday$1(locale, weekdayDate);
    weekdays.push(jsxRuntimeExports.jsx("div", {
      className: clsx(weekdayClassName, isCurrentDayOfWeek(weekdayDate) && "".concat(weekdayClassName, "--current"), isWeekend(weekdayDate, calendarType) && "".concat(weekdayClassName, "--weekend")),
      children: jsxRuntimeExports.jsx("abbr", {
        "aria-label": abbr,
        title: abbr,
        children: formatShortWeekday$1(locale, weekdayDate).replace('.', '')
      })
    }, weekday));
  }
  return jsxRuntimeExports.jsx(Flex, {
    className: className$1,
    count: 7,
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave,
    children: weekdays
  });
}

var __assign$2 = undefined && undefined.__assign || function () {
  __assign$2 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$2.apply(this, arguments);
};
var __rest$1 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var className = 'react-calendar__tile';
function WeekNumber(props) {
  var onClickWeekNumber = props.onClickWeekNumber,
    weekNumber = props.weekNumber;
  var children = jsxRuntimeExports.jsx("span", {
    children: weekNumber
  });
  if (onClickWeekNumber) {
    var date_1 = props.date,
      onClickWeekNumber_1 = props.onClickWeekNumber,
      weekNumber_1 = props.weekNumber,
      otherProps = __rest$1(props, ["date", "onClickWeekNumber", "weekNumber"]);
    return jsxRuntimeExports.jsx("button", __assign$2({}, otherProps, {
      className: className,
      onClick: function (event) {
        return onClickWeekNumber_1(weekNumber_1, date_1, event);
      },
      type: "button",
      children: children
    }));
    // biome-ignore lint/style/noUselessElse: TypeScript is unhappy if we remove this else
  } else {
    props.date;
      props.onClickWeekNumber;
      props.weekNumber;
      var otherProps = __rest$1(props, ["date", "onClickWeekNumber", "weekNumber"]);
    return jsxRuntimeExports.jsx("div", __assign$2({}, otherProps, {
      className: className,
      children: children
    }));
  }
}

function WeekNumbers(props) {
  var activeStartDate = props.activeStartDate,
    calendarType = props.calendarType,
    onClickWeekNumber = props.onClickWeekNumber,
    onMouseLeave = props.onMouseLeave,
    showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
  var numberOfWeeks = function () {
    if (showFixedNumberOfWeeks) {
      return 6;
    }
    var numberOfDays = getDaysInMonth(activeStartDate);
    var startWeekday = getDayOfWeek(activeStartDate, calendarType);
    var days = numberOfDays - (7 - startWeekday);
    return 1 + Math.ceil(days / 7);
  }();
  var dates = function () {
    var year = getYear(activeStartDate);
    var monthIndex = getMonth(activeStartDate);
    var day = getDate(activeStartDate);
    var result = [];
    for (var index = 0; index < numberOfWeeks; index += 1) {
      result.push(getBeginOfWeek(new Date(year, monthIndex, day + index * 7), calendarType));
    }
    return result;
  }();
  var weekNumbers = dates.map(function (date) {
    return getWeekNumber(date, calendarType);
  });
  return jsxRuntimeExports.jsx(Flex, {
    className: "react-calendar__month-view__weekNumbers",
    count: numberOfWeeks,
    direction: "column",
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave,
    style: {
      flexBasis: 'calc(100% * (1 / 8)',
      flexShrink: 0
    },
    children: weekNumbers.map(function (weekNumber, weekIndex) {
      var date = dates[weekIndex];
      if (!date) {
        throw new Error('date is not defined');
      }
      return jsxRuntimeExports.jsx(WeekNumber, {
        date: date,
        onClickWeekNumber: onClickWeekNumber,
        weekNumber: weekNumber
      }, weekNumber);
    })
  });
}

var __assign$1 = undefined && undefined.__assign || function () {
  __assign$1 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function getCalendarTypeFromLocale(locale) {
  if (locale) {
    for (var _i = 0, _a = Object.entries(CALENDAR_TYPE_LOCALES); _i < _a.length; _i++) {
      var _b = _a[_i],
        calendarType = _b[0],
        locales = _b[1];
      if (locales.includes(locale)) {
        return calendarType;
      }
    }
  }
  return CALENDAR_TYPES.ISO_8601;
}
/**
 * Displays a given month.
 */
function MonthView(props) {
  var activeStartDate = props.activeStartDate,
    locale = props.locale,
    onMouseLeave = props.onMouseLeave,
    showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
  var _a = props.calendarType,
    calendarType = _a === void 0 ? getCalendarTypeFromLocale(locale) : _a,
    formatShortWeekday = props.formatShortWeekday,
    formatWeekday = props.formatWeekday,
    onClickWeekNumber = props.onClickWeekNumber,
    showWeekNumbers = props.showWeekNumbers,
    childProps = __rest(props, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function renderWeekdays() {
    return jsxRuntimeExports.jsx(Weekdays, {
      calendarType: calendarType,
      formatShortWeekday: formatShortWeekday,
      formatWeekday: formatWeekday,
      locale: locale,
      onMouseLeave: onMouseLeave
    });
  }
  function renderWeekNumbers() {
    if (!showWeekNumbers) {
      return null;
    }
    return jsxRuntimeExports.jsx(WeekNumbers, {
      activeStartDate: activeStartDate,
      calendarType: calendarType,
      onClickWeekNumber: onClickWeekNumber,
      onMouseLeave: onMouseLeave,
      showFixedNumberOfWeeks: showFixedNumberOfWeeks
    });
  }
  function renderDays() {
    return jsxRuntimeExports.jsx(Days, __assign$1({
      calendarType: calendarType
    }, childProps));
  }
  var className = 'react-calendar__month-view';
  return jsxRuntimeExports.jsx("div", {
    className: clsx(className, showWeekNumbers ? "".concat(className, "--weekNumbers") : ''),
    children: jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end'
      },
      children: [renderWeekNumbers(), jsxRuntimeExports.jsxs("div", {
        style: {
          flexGrow: 1,
          width: '100%'
        },
        children: [renderWeekdays(), renderDays()]
      })]
    })
  });
}

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var baseClassName = 'react-calendar';
var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = ['decade', 'year', 'month', 'day'];
var defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = new Date(8.64e15);
function toDate(value) {
  if (value instanceof Date) {
    return value;
  }
  return new Date(value);
}
/**
 * Returns views array with disallowed values cut off.
 */
function getLimitedViews(minDetail, maxDetail) {
  return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
}
/**
 * Determines whether a given view is allowed with currently applied settings.
 */
function isViewAllowed(view, minDetail, maxDetail) {
  var views = getLimitedViews(minDetail, maxDetail);
  return views.indexOf(view) !== -1;
}
/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */
function getView(view, minDetail, maxDetail) {
  if (!view) {
    return maxDetail;
  }
  if (isViewAllowed(view, minDetail, maxDetail)) {
    return view;
  }
  return maxDetail;
}
/**
 * Returns value type that can be returned with currently applied settings.
 */
function getValueType(view) {
  var index = allViews.indexOf(view);
  return allValueTypes[index];
}
function getValue(value, index) {
  var rawValue = Array.isArray(value) ? value[index] : value;
  if (!rawValue) {
    return null;
  }
  var valueDate = toDate(rawValue);
  if (Number.isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }
  return valueDate;
}
function getDetailValue(_a, index) {
  var value = _a.value,
    minDate = _a.minDate,
    maxDate = _a.maxDate,
    maxDetail = _a.maxDetail;
  var valuePiece = getValue(value, index);
  if (!valuePiece) {
    return null;
  }
  var valueType = getValueType(maxDetail);
  var detailValueFrom = function () {
    switch (index) {
      case 0:
        return getBegin(valueType, valuePiece);
      case 1:
        return getEnd(valueType, valuePiece);
      default:
        throw new Error("Invalid index value: ".concat(index));
    }
  }();
  return between(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom = function (args) {
  return getDetailValue(args, 0);
};
var getDetailValueTo = function (args) {
  return getDetailValue(args, 1);
};
var getDetailValueArray = function (args) {
  return [getDetailValueFrom, getDetailValueTo].map(function (fn) {
    return fn(args);
  });
};
function getActiveStartDate(_a) {
  var maxDate = _a.maxDate,
    maxDetail = _a.maxDetail,
    minDate = _a.minDate,
    minDetail = _a.minDetail,
    value = _a.value,
    view = _a.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = getDetailValueFrom({
    value: value,
    minDate: minDate,
    maxDate: maxDate,
    maxDetail: maxDetail
  }) || new Date();
  return getBegin(rangeType, valueFrom);
}
function getInitialActiveStartDate(_a) {
  var activeStartDate = _a.activeStartDate,
    defaultActiveStartDate = _a.defaultActiveStartDate,
    defaultValue = _a.defaultValue,
    defaultView = _a.defaultView,
    maxDate = _a.maxDate,
    maxDetail = _a.maxDetail,
    minDate = _a.minDate,
    minDetail = _a.minDetail,
    value = _a.value,
    view = _a.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = activeStartDate || defaultActiveStartDate;
  if (valueFrom) {
    return getBegin(rangeType, valueFrom);
  }
  return getActiveStartDate({
    maxDate: maxDate,
    maxDetail: maxDetail,
    minDate: minDate,
    minDetail: minDetail,
    value: value || defaultValue,
    view: view || defaultView
  });
}
function getIsSingleValue(value) {
  return value && (!Array.isArray(value) || value.length === 1);
}
function areDatesEqual(date1, date2) {
  return date1 instanceof Date && date2 instanceof Date && date1.getTime() === date2.getTime();
}
var Calendar = /*#__PURE__*/forwardRef(function Calendar(props, ref) {
  var activeStartDateProps = props.activeStartDate,
    allowPartialRange = props.allowPartialRange,
    calendarType = props.calendarType,
    className = props.className,
    defaultActiveStartDate = props.defaultActiveStartDate,
    defaultValue = props.defaultValue,
    defaultView = props.defaultView,
    formatDay = props.formatDay,
    formatLongDate = props.formatLongDate,
    formatMonth = props.formatMonth,
    formatMonthYear = props.formatMonthYear,
    formatShortWeekday = props.formatShortWeekday,
    formatWeekday = props.formatWeekday,
    formatYear = props.formatYear,
    _a = props.goToRangeStartOnSelect,
    goToRangeStartOnSelect = _a === void 0 ? true : _a,
    inputRef = props.inputRef,
    locale = props.locale,
    _b = props.maxDate,
    maxDate = _b === void 0 ? defaultMaxDate : _b,
    _c = props.maxDetail,
    maxDetail = _c === void 0 ? 'month' : _c,
    _d = props.minDate,
    minDate = _d === void 0 ? defaultMinDate : _d,
    _e = props.minDetail,
    minDetail = _e === void 0 ? 'century' : _e,
    navigationAriaLabel = props.navigationAriaLabel,
    navigationAriaLive = props.navigationAriaLive,
    navigationLabel = props.navigationLabel,
    next2AriaLabel = props.next2AriaLabel,
    next2Label = props.next2Label,
    nextAriaLabel = props.nextAriaLabel,
    nextLabel = props.nextLabel,
    onActiveStartDateChange = props.onActiveStartDateChange,
    onChangeProps = props.onChange,
    onClickDay = props.onClickDay,
    onClickDecade = props.onClickDecade,
    onClickMonth = props.onClickMonth,
    onClickWeekNumber = props.onClickWeekNumber,
    onClickYear = props.onClickYear,
    onDrillDown = props.onDrillDown,
    onDrillUp = props.onDrillUp,
    onViewChange = props.onViewChange,
    prev2AriaLabel = props.prev2AriaLabel,
    prev2Label = props.prev2Label,
    prevAriaLabel = props.prevAriaLabel,
    prevLabel = props.prevLabel,
    _f = props.returnValue,
    returnValue = _f === void 0 ? 'start' : _f,
    selectRange = props.selectRange,
    showDoubleView = props.showDoubleView,
    showFixedNumberOfWeeks = props.showFixedNumberOfWeeks,
    _g = props.showNavigation,
    showNavigation = _g === void 0 ? true : _g,
    showNeighboringCentury = props.showNeighboringCentury,
    showNeighboringDecade = props.showNeighboringDecade,
    _h = props.showNeighboringMonth,
    showNeighboringMonth = _h === void 0 ? true : _h,
    showWeekNumbers = props.showWeekNumbers,
    tileClassName = props.tileClassName,
    tileContent = props.tileContent,
    tileDisabled = props.tileDisabled,
    valueProps = props.value,
    viewProps = props.view;
  var _j = useState(defaultActiveStartDate),
    activeStartDateState = _j[0],
    setActiveStartDateState = _j[1];
  var _k = useState(null),
    hoverState = _k[0],
    setHoverState = _k[1];
  var _l = useState(Array.isArray(defaultValue) ? defaultValue.map(function (el) {
      return el !== null ? toDate(el) : null;
    }) : defaultValue !== null && defaultValue !== undefined ? toDate(defaultValue) : null),
    valueState = _l[0],
    setValueState = _l[1];
  var _m = useState(defaultView),
    viewState = _m[0],
    setViewState = _m[1];
  var activeStartDate = activeStartDateProps || activeStartDateState || getInitialActiveStartDate({
    activeStartDate: activeStartDateProps,
    defaultActiveStartDate: defaultActiveStartDate,
    defaultValue: defaultValue,
    defaultView: defaultView,
    maxDate: maxDate,
    maxDetail: maxDetail,
    minDate: minDate,
    minDetail: minDetail,
    value: valueProps,
    view: viewProps
  });
  var value = function () {
    var rawValue = function () {
      // In the middle of range selection, use value from state
      if (selectRange && getIsSingleValue(valueState)) {
        return valueState;
      }
      return valueProps !== undefined ? valueProps : valueState;
    }();
    if (!rawValue) {
      return null;
    }
    return Array.isArray(rawValue) ? rawValue.map(function (el) {
      return el !== null ? toDate(el) : null;
    }) : rawValue !== null ? toDate(rawValue) : null;
  }();
  var valueType = getValueType(maxDetail);
  var view = getView(viewProps || viewState, minDetail, maxDetail);
  var views = getLimitedViews(minDetail, maxDetail);
  var hover = selectRange ? hoverState : null;
  var drillDownAvailable = views.indexOf(view) < views.length - 1;
  var drillUpAvailable = views.indexOf(view) > 0;
  var getProcessedValue = useCallback(function (value) {
    var processFunction = function () {
      switch (returnValue) {
        case 'start':
          return getDetailValueFrom;
        case 'end':
          return getDetailValueTo;
        case 'range':
          return getDetailValueArray;
        default:
          throw new Error('Invalid returnValue.');
      }
    }();
    return processFunction({
      maxDate: maxDate,
      maxDetail: maxDetail,
      minDate: minDate,
      value: value
    });
  }, [maxDate, maxDetail, minDate, returnValue]);
  var setActiveStartDate = useCallback(function (nextActiveStartDate, action) {
    setActiveStartDateState(nextActiveStartDate);
    var args = {
      action: action,
      activeStartDate: nextActiveStartDate,
      value: value,
      view: view
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
  }, [activeStartDate, onActiveStartDateChange, value, view]);
  var onClickTile = useCallback(function (value, event) {
    var callback = function () {
      switch (view) {
        case 'century':
          return onClickDecade;
        case 'decade':
          return onClickYear;
        case 'year':
          return onClickMonth;
        case 'month':
          return onClickDay;
        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();
    if (callback) callback(value, event);
  }, [onClickDay, onClickDecade, onClickMonth, onClickYear, view]);
  var drillDown = useCallback(function (nextActiveStartDate, event) {
    if (!drillDownAvailable) {
      return;
    }
    onClickTile(nextActiveStartDate, event);
    var nextView = views[views.indexOf(view) + 1];
    if (!nextView) {
      throw new Error('Attempted to drill down from the lowest view.');
    }
    setActiveStartDateState(nextActiveStartDate);
    setViewState(nextView);
    var args = {
      action: 'drillDown',
      activeStartDate: nextActiveStartDate,
      value: value,
      view: nextView
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onViewChange && view !== nextView) {
      onViewChange(args);
    }
    if (onDrillDown) {
      onDrillDown(args);
    }
  }, [activeStartDate, drillDownAvailable, onActiveStartDateChange, onClickTile, onDrillDown, onViewChange, value, view, views]);
  var drillUp = useCallback(function () {
    if (!drillUpAvailable) {
      return;
    }
    var nextView = views[views.indexOf(view) - 1];
    if (!nextView) {
      throw new Error('Attempted to drill up from the highest view.');
    }
    var nextActiveStartDate = getBegin(nextView, activeStartDate);
    setActiveStartDateState(nextActiveStartDate);
    setViewState(nextView);
    var args = {
      action: 'drillUp',
      activeStartDate: nextActiveStartDate,
      value: value,
      view: nextView
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onViewChange && view !== nextView) {
      onViewChange(args);
    }
    if (onDrillUp) {
      onDrillUp(args);
    }
  }, [activeStartDate, drillUpAvailable, onActiveStartDateChange, onDrillUp, onViewChange, value, view, views]);
  var onChange = useCallback(function (rawNextValue, event) {
    var previousValue = value;
    onClickTile(rawNextValue, event);
    var isFirstValueInRange = selectRange && !getIsSingleValue(previousValue);
    var nextValue;
    if (selectRange) {
      // Range selection turned on
      if (isFirstValueInRange) {
        // Value has 0 or 2 elements - either way we're starting a new array
        // First value
        nextValue = getBegin(valueType, rawNextValue);
      } else {
        if (!previousValue) {
          throw new Error('previousValue is required');
        }
        if (Array.isArray(previousValue)) {
          throw new Error('previousValue must not be an array');
        }
        // Second value
        nextValue = getValueRange(valueType, previousValue, rawNextValue);
      }
    } else {
      // Range selection turned off
      nextValue = getProcessedValue(rawNextValue);
    }
    var nextActiveStartDate =
    // Range selection turned off
    !selectRange ||
    // Range selection turned on, first value
    isFirstValueInRange ||
    // Range selection turned on, second value, goToRangeStartOnSelect toggled on
    goToRangeStartOnSelect ? getActiveStartDate({
      maxDate: maxDate,
      maxDetail: maxDetail,
      minDate: minDate,
      minDetail: minDetail,
      value: nextValue,
      view: view
    }) : null;
    event.persist();
    setActiveStartDateState(nextActiveStartDate);
    setValueState(nextValue);
    var args = {
      action: 'onChange',
      activeStartDate: nextActiveStartDate,
      value: nextValue,
      view: view
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onChangeProps) {
      if (selectRange) {
        var isSingleValue = getIsSingleValue(nextValue);
        if (!isSingleValue) {
          onChangeProps(nextValue || null, event);
        } else if (allowPartialRange) {
          if (Array.isArray(nextValue)) {
            throw new Error('value must not be an array');
          }
          onChangeProps([nextValue || null, null], event);
        }
      } else {
        onChangeProps(nextValue || null, event);
      }
    }
  }, [activeStartDate, allowPartialRange, getProcessedValue, goToRangeStartOnSelect, maxDate, maxDetail, minDate, minDetail, onActiveStartDateChange, onChangeProps, onClickTile, selectRange, value, valueType, view]);
  function onMouseOver(nextHover) {
    setHoverState(nextHover);
  }
  function onMouseLeave() {
    setHoverState(null);
  }
  useImperativeHandle(ref, function () {
    return {
      activeStartDate: activeStartDate,
      drillDown: drillDown,
      drillUp: drillUp,
      onChange: onChange,
      setActiveStartDate: setActiveStartDate,
      value: value,
      view: view
    };
  }, [activeStartDate, drillDown, drillUp, onChange, setActiveStartDate, value, view]);
  function renderContent(next) {
    var currentActiveStartDate = next ? getBeginNext(view, activeStartDate) : getBegin(view, activeStartDate);
    var onClick = drillDownAvailable ? drillDown : onChange;
    var commonProps = {
      activeStartDate: currentActiveStartDate,
      hover: hover,
      locale: locale,
      maxDate: maxDate,
      minDate: minDate,
      onClick: onClick,
      onMouseOver: selectRange ? onMouseOver : undefined,
      tileClassName: tileClassName,
      tileContent: tileContent,
      tileDisabled: tileDisabled,
      value: value,
      valueType: valueType
    };
    switch (view) {
      case 'century':
        {
          return jsxRuntimeExports.jsx(CenturyView, __assign({
            formatYear: formatYear,
            showNeighboringCentury: showNeighboringCentury
          }, commonProps));
        }
      case 'decade':
        {
          return jsxRuntimeExports.jsx(DecadeView, __assign({
            formatYear: formatYear,
            showNeighboringDecade: showNeighboringDecade
          }, commonProps));
        }
      case 'year':
        {
          return jsxRuntimeExports.jsx(YearView, __assign({
            formatMonth: formatMonth,
            formatMonthYear: formatMonthYear
          }, commonProps));
        }
      case 'month':
        {
          return jsxRuntimeExports.jsx(MonthView, __assign({
            calendarType: calendarType,
            formatDay: formatDay,
            formatLongDate: formatLongDate,
            formatShortWeekday: formatShortWeekday,
            formatWeekday: formatWeekday,
            onClickWeekNumber: onClickWeekNumber,
            onMouseLeave: selectRange ? onMouseLeave : undefined,
            showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== 'undefined' ? showFixedNumberOfWeeks : showDoubleView,
            showNeighboringMonth: showNeighboringMonth,
            showWeekNumbers: showWeekNumbers
          }, commonProps));
        }
      default:
        throw new Error("Invalid view: ".concat(view, "."));
    }
  }
  function renderNavigation() {
    if (!showNavigation) {
      return null;
    }
    return jsxRuntimeExports.jsx(Navigation, {
      activeStartDate: activeStartDate,
      drillUp: drillUp,
      formatMonthYear: formatMonthYear,
      formatYear: formatYear,
      locale: locale,
      maxDate: maxDate,
      minDate: minDate,
      navigationAriaLabel: navigationAriaLabel,
      navigationAriaLive: navigationAriaLive,
      navigationLabel: navigationLabel,
      next2AriaLabel: next2AriaLabel,
      next2Label: next2Label,
      nextAriaLabel: nextAriaLabel,
      nextLabel: nextLabel,
      prev2AriaLabel: prev2AriaLabel,
      prev2Label: prev2Label,
      prevAriaLabel: prevAriaLabel,
      prevLabel: prevLabel,
      setActiveStartDate: setActiveStartDate,
      showDoubleView: showDoubleView,
      view: view,
      views: views
    });
  }
  var valueArray = Array.isArray(value) ? value : [value];
  return jsxRuntimeExports.jsxs("div", {
    className: clsx(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className),
    ref: inputRef,
    children: [renderNavigation(), jsxRuntimeExports.jsxs("div", {
      className: "".concat(baseClassName, "__viewContainer"),
      onBlur: selectRange ? onMouseLeave : undefined,
      onMouseLeave: selectRange ? onMouseLeave : undefined,
      children: [renderContent(), showDoubleView ? renderContent(true) : null]
    })]
  });
});
var Calendar$1 = Calendar;

const GitLabContributionGraph = ({
  username,
  token,
  highlightColor = '#00aaff',
  onError
}) => {
  const [markedDates, setMarkedDates] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(`https://gitlab.com/api/v4/users/${username}/events`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) throw new Error('Failed to fetch contributions.');
        const data = await response.json();
        const dates = data.map(event => event.created_at.split('T')[0]);
        setMarkedDates(dates);
      } catch (error) {
        if (onError) onError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchContributions();
  }, [username, token, onError]);
  const tileClassName = ({
    date
  }) => {
    const dateString = date.toISOString().split('T')[0];
    return markedDates.includes(dateString) ? 'highlight' : null;
  };
  if (loading) return /*#__PURE__*/React.createElement("div", null, "Loading...");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, username, "'s GitLab Contributions"), /*#__PURE__*/React.createElement(Calendar$1, {
    tileClassName: tileClassName
  }), /*#__PURE__*/React.createElement("style", null, `
        .highlight {
          background-color: ${highlightColor};
          border-radius: 50%;
          color: white;
        }
      `));
};
GitLabContributionGraph.propTypes = {
  username: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  highlightColor: PropTypes.string,
  onError: PropTypes.func
};

export { GitLabContributionGraph };
