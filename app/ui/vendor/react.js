// deno:https://cdn.jsdelivr.net/npm/react@19.2.4/+esm
var e = {
  exports: {}
};
var t = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
function r() {
  throw new Error("setTimeout has not been defined");
}
function n() {
  throw new Error("clearTimeout has not been defined");
}
var o = r;
var u = n;
function s(e6) {
  if (o === setTimeout) return setTimeout(e6, 0);
  if ((o === r || !o) && setTimeout) return o = setTimeout, setTimeout(e6, 0);
  try {
    return o(e6, 0);
  } catch (t5) {
    try {
      return o.call(null, e6, 0);
    } catch (t6) {
      return o.call(this, e6, 0);
    }
  }
}
"function" == typeof t.setTimeout && (o = setTimeout), "function" == typeof t.clearTimeout && (u = clearTimeout);
var i;
var a = [];
var c = false;
var f = -1;
function l() {
  c && i && (c = false, i.length ? a = i.concat(a) : f = -1, a.length && p());
}
function p() {
  if (!c) {
    var e6 = s(l);
    c = true;
    for (var t5 = a.length; t5; ) {
      for (i = a, a = []; ++f < t5; ) i && i[f].run();
      f = -1, t5 = a.length;
    }
    i = null, c = false, function(e7) {
      if (u === clearTimeout) return clearTimeout(e7);
      if ((u === n || !u) && clearTimeout) return u = clearTimeout, clearTimeout(e7);
      try {
        return u(e7);
      } catch (t6) {
        try {
          return u.call(null, e7);
        } catch (t7) {
          return u.call(this, e7);
        }
      }
    }(e6);
  }
}
function y(e6, t5) {
  this.fun = e6, this.array = t5;
}
y.prototype.run = function() {
  this.fun.apply(null, this.array);
};
function d() {
}
var h = d;
var m = d;
var v = d;
var _ = d;
var b = d;
var x = d;
var E = d;
var w = t.performance || {};
var S = w.now || w.mozNow || w.msNow || w.oNow || w.webkitNow || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
var g = /* @__PURE__ */ new Date();
var T = {
  nextTick: function(e6) {
    var t5 = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var r6 = 1; r6 < arguments.length; r6++) t5[r6 - 1] = arguments[r6];
    a.push(new y(e6, t5)), 1 !== a.length || c || s(p);
  },
  title: "browser",
  browser: true,
  env: {},
  argv: [],
  version: "",
  versions: {},
  on: h,
  addListener: m,
  once: v,
  off: _,
  removeListener: b,
  removeAllListeners: x,
  emit: E,
  binding: function(e6) {
    throw new Error("process.binding is not supported");
  },
  cwd: function() {
    return "/";
  },
  chdir: function(e6) {
    throw new Error("process.chdir is not supported");
  },
  umask: function() {
    return 0;
  },
  hrtime: function(e6) {
    var t5 = 1e-3 * S.call(w), r6 = Math.floor(t5), n5 = Math.floor(t5 % 1 * 1e9);
    return e6 && (r6 -= e6[0], (n5 -= e6[1]) < 0 && (r6--, n5 += 1e9)), [
      r6,
      n5
    ];
  },
  platform: "browser",
  release: {},
  config: {},
  uptime: function() {
    return (/* @__PURE__ */ new Date() - g) / 1e3;
  }
};
var R = {};
var C = Symbol.for("react.transitional.element");
var H = Symbol.for("react.portal");
var k = Symbol.for("react.fragment");
var j = Symbol.for("react.strict_mode");
var A = Symbol.for("react.profiler");
var N = Symbol.for("react.consumer");
var O = Symbol.for("react.context");
var $ = Symbol.for("react.forward_ref");
var I = Symbol.for("react.suspense");
var P = Symbol.for("react.memo");
var M = Symbol.for("react.lazy");
var D = Symbol.for("react.activity");
var L = Symbol.iterator;
var U = {
  isMounted: function() {
    return false;
  },
  enqueueForceUpdate: function() {
  },
  enqueueReplaceState: function() {
  },
  enqueueSetState: function() {
  }
};
var V = Object.assign;
var q = {};
function z(e6, t5, r6) {
  this.props = e6, this.context = t5, this.refs = q, this.updater = r6 || U;
}
function F() {
}
function G(e6, t5, r6) {
  this.props = e6, this.context = t5, this.refs = q, this.updater = r6 || U;
}
z.prototype.isReactComponent = {}, z.prototype.setState = function(e6, t5) {
  if ("object" != typeof e6 && "function" != typeof e6 && null != e6) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e6, t5, "setState");
}, z.prototype.forceUpdate = function(e6) {
  this.updater.enqueueForceUpdate(this, e6, "forceUpdate");
}, F.prototype = z.prototype;
var W = G.prototype = new F();
W.constructor = G, V(W, z.prototype), W.isPureReactComponent = true;
var Y = Array.isArray;
function B() {
}
var J = {
  H: null,
  A: null,
  T: null,
  S: null
};
var K = Object.prototype.hasOwnProperty;
function Q(e6, t5, r6) {
  var n5 = r6.ref;
  return {
    $$typeof: C,
    type: e6,
    key: t5,
    ref: void 0 !== n5 ? n5 : null,
    props: r6
  };
}
function X(e6) {
  return "object" == typeof e6 && null !== e6 && e6.$$typeof === C;
}
var Z = /\/+/g;
function ee(e6, t5) {
  return "object" == typeof e6 && null !== e6 && null != e6.key ? (r6 = "" + e6.key, n5 = {
    "=": "=0",
    ":": "=2"
  }, "$" + r6.replace(/[=:]/g, function(e7) {
    return n5[e7];
  })) : t5.toString(36);
  var r6, n5;
}
function te(e6, t5, r6, n5, o5) {
  var u5 = typeof e6;
  "undefined" !== u5 && "boolean" !== u5 || (e6 = null);
  var s6, i5, a6 = false;
  if (null === e6) a6 = true;
  else switch (u5) {
    case "bigint":
    case "string":
    case "number":
      a6 = true;
      break;
    case "object":
      switch (e6.$$typeof) {
        case C:
        case H:
          a6 = true;
          break;
        case M:
          return te((a6 = e6._init)(e6._payload), t5, r6, n5, o5);
      }
  }
  if (a6) return o5 = o5(e6), a6 = "" === n5 ? "." + ee(e6, 0) : n5, Y(o5) ? (r6 = "", null != a6 && (r6 = a6.replace(Z, "$&/") + "/"), te(o5, t5, r6, "", function(e7) {
    return e7;
  })) : null != o5 && (X(o5) && (s6 = o5, i5 = r6 + (null == o5.key || e6 && e6.key === o5.key ? "" : ("" + o5.key).replace(Z, "$&/") + "/") + a6, o5 = Q(s6.type, i5, s6.props)), t5.push(o5)), 1;
  a6 = 0;
  var c5, f5 = "" === n5 ? "." : n5 + ":";
  if (Y(e6)) for (var l5 = 0; l5 < e6.length; l5++) a6 += te(n5 = e6[l5], t5, r6, u5 = f5 + ee(n5, l5), o5);
  else if ("function" == typeof (l5 = null === (c5 = e6) || "object" != typeof c5 ? null : "function" == typeof (c5 = L && c5[L] || c5["@@iterator"]) ? c5 : null)) for (e6 = l5.call(e6), l5 = 0; !(n5 = e6.next()).done; ) a6 += te(n5 = n5.value, t5, r6, u5 = f5 + ee(n5, l5++), o5);
  else if ("object" === u5) {
    if ("function" == typeof e6.then) return te(function(e7) {
      switch (e7.status) {
        case "fulfilled":
          return e7.value;
        case "rejected":
          throw e7.reason;
        default:
          switch ("string" == typeof e7.status ? e7.then(B, B) : (e7.status = "pending", e7.then(function(t6) {
            "pending" === e7.status && (e7.status = "fulfilled", e7.value = t6);
          }, function(t6) {
            "pending" === e7.status && (e7.status = "rejected", e7.reason = t6);
          })), e7.status) {
            case "fulfilled":
              return e7.value;
            case "rejected":
              throw e7.reason;
          }
      }
      throw e7;
    }(e6), t5, r6, n5, o5);
    throw t5 = String(e6), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t5 ? "object with keys {" + Object.keys(e6).join(", ") + "}" : t5) + "). If you meant to render a collection of children, use an array instead.");
  }
  return a6;
}
function re(e6, t5, r6) {
  if (null == e6) return e6;
  var n5 = [], o5 = 0;
  return te(e6, n5, "", "", function(e7) {
    return t5.call(r6, e7, o5++);
  }), n5;
}
function ne(e6) {
  if (-1 === e6._status) {
    var t5 = e6._result;
    (t5 = t5()).then(function(t6) {
      0 !== e6._status && -1 !== e6._status || (e6._status = 1, e6._result = t6);
    }, function(t6) {
      0 !== e6._status && -1 !== e6._status || (e6._status = 2, e6._result = t6);
    }), -1 === e6._status && (e6._status = 0, e6._result = t5);
  }
  if (1 === e6._status) return e6._result.default;
  throw e6._result;
}
var oe = "function" == typeof reportError ? reportError : function(e6) {
  if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
    var t5 = new window.ErrorEvent("error", {
      bubbles: true,
      cancelable: true,
      message: "object" == typeof e6 && null !== e6 && "string" == typeof e6.message ? String(e6.message) : String(e6),
      error: e6
    });
    if (!window.dispatchEvent(t5)) return;
  } else if ("object" == typeof T && "function" == typeof T.emit) return void T.emit("uncaughtException", e6);
  console.error(e6);
};
var ue = {
  map: re,
  forEach: function(e6, t5, r6) {
    re(e6, function() {
      t5.apply(this, arguments);
    }, r6);
  },
  count: function(e6) {
    var t5 = 0;
    return re(e6, function() {
      t5++;
    }), t5;
  },
  toArray: function(e6) {
    return re(e6, function(e7) {
      return e7;
    }) || [];
  },
  only: function(e6) {
    if (!X(e6)) throw Error("React.Children.only expected to receive a single React element child.");
    return e6;
  }
};
R.Activity = D, R.Children = ue, R.Component = z, R.Fragment = k, R.Profiler = A, R.PureComponent = G, R.StrictMode = j, R.Suspense = I, R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, R.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function(e6) {
    return J.H.useMemoCache(e6);
  }
}, R.cache = function(e6) {
  return function() {
    return e6.apply(null, arguments);
  };
}, R.cacheSignal = function() {
  return null;
}, R.cloneElement = function(e6, t5, r6) {
  if (null == e6) throw Error("The argument must be a React element, but you passed " + e6 + ".");
  var n5 = V({}, e6.props), o5 = e6.key;
  if (null != t5) for (u5 in void 0 !== t5.key && (o5 = "" + t5.key), t5) !K.call(t5, u5) || "key" === u5 || "__self" === u5 || "__source" === u5 || "ref" === u5 && void 0 === t5.ref || (n5[u5] = t5[u5]);
  var u5 = arguments.length - 2;
  if (1 === u5) n5.children = r6;
  else if (1 < u5) {
    for (var s6 = Array(u5), i5 = 0; i5 < u5; i5++) s6[i5] = arguments[i5 + 2];
    n5.children = s6;
  }
  return Q(e6.type, o5, n5);
}, R.createContext = function(e6) {
  return (e6 = {
    $$typeof: O,
    _currentValue: e6,
    _currentValue2: e6,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  }).Provider = e6, e6.Consumer = {
    $$typeof: N,
    _context: e6
  }, e6;
}, R.createElement = function(e6, t5, r6) {
  var n5, o5 = {}, u5 = null;
  if (null != t5) for (n5 in void 0 !== t5.key && (u5 = "" + t5.key), t5) K.call(t5, n5) && "key" !== n5 && "__self" !== n5 && "__source" !== n5 && (o5[n5] = t5[n5]);
  var s6 = arguments.length - 2;
  if (1 === s6) o5.children = r6;
  else if (1 < s6) {
    for (var i5 = Array(s6), a6 = 0; a6 < s6; a6++) i5[a6] = arguments[a6 + 2];
    o5.children = i5;
  }
  if (e6 && e6.defaultProps) for (n5 in s6 = e6.defaultProps) void 0 === o5[n5] && (o5[n5] = s6[n5]);
  return Q(e6, u5, o5);
}, R.createRef = function() {
  return {
    current: null
  };
}, R.forwardRef = function(e6) {
  return {
    $$typeof: $,
    render: e6
  };
}, R.isValidElement = X, R.lazy = function(e6) {
  return {
    $$typeof: M,
    _payload: {
      _status: -1,
      _result: e6
    },
    _init: ne
  };
}, R.memo = function(e6, t5) {
  return {
    $$typeof: P,
    type: e6,
    compare: void 0 === t5 ? null : t5
  };
}, R.startTransition = function(e6) {
  var t5 = J.T, r6 = {};
  J.T = r6;
  try {
    var n5 = e6(), o5 = J.S;
    null !== o5 && o5(r6, n5), "object" == typeof n5 && null !== n5 && "function" == typeof n5.then && n5.then(B, oe);
  } catch (e7) {
    oe(e7);
  } finally {
    null !== t5 && null !== r6.types && (t5.types = r6.types), J.T = t5;
  }
}, R.unstable_useCacheRefresh = function() {
  return J.H.useCacheRefresh();
}, R.use = function(e6) {
  return J.H.use(e6);
}, R.useActionState = function(e6, t5, r6) {
  return J.H.useActionState(e6, t5, r6);
}, R.useCallback = function(e6, t5) {
  return J.H.useCallback(e6, t5);
}, R.useContext = function(e6) {
  return J.H.useContext(e6);
}, R.useDebugValue = function() {
}, R.useDeferredValue = function(e6, t5) {
  return J.H.useDeferredValue(e6, t5);
}, R.useEffect = function(e6, t5) {
  return J.H.useEffect(e6, t5);
}, R.useEffectEvent = function(e6) {
  return J.H.useEffectEvent(e6);
}, R.useId = function() {
  return J.H.useId();
}, R.useImperativeHandle = function(e6, t5, r6) {
  return J.H.useImperativeHandle(e6, t5, r6);
}, R.useInsertionEffect = function(e6, t5) {
  return J.H.useInsertionEffect(e6, t5);
}, R.useLayoutEffect = function(e6, t5) {
  return J.H.useLayoutEffect(e6, t5);
}, R.useMemo = function(e6, t5) {
  return J.H.useMemo(e6, t5);
}, R.useOptimistic = function(e6, t5) {
  return J.H.useOptimistic(e6, t5);
}, R.useReducer = function(e6, t5, r6) {
  return J.H.useReducer(e6, t5, r6);
}, R.useRef = function(e6) {
  return J.H.useRef(e6);
}, R.useState = function(e6) {
  return J.H.useState(e6);
}, R.useSyncExternalStore = function(e6, t5, r6) {
  return J.H.useSyncExternalStore(e6, t5, r6);
}, R.useTransition = function() {
  return J.H.useTransition();
}, R.version = "19.2.4", e.exports = R;
var se = e.exports;
var ie = e.exports.Activity;
var ae = e.exports.Children;
var ce = e.exports.Component;
var fe = e.exports.Fragment;
var le = e.exports.Profiler;
var pe = e.exports.PureComponent;
var ye = e.exports.StrictMode;
var de = e.exports.Suspense;
var he = e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
var me = e.exports.__COMPILER_RUNTIME;
var ve = e.exports.cache;
var _e = e.exports.cacheSignal;
var be = e.exports.cloneElement;
var xe = e.exports.createContext;
var Ee = e.exports.createElement;
var we = e.exports.createRef;
var Se = e.exports.forwardRef;
var ge = e.exports.isValidElement;
var Te = e.exports.lazy;
var Re = e.exports.memo;
var Ce = e.exports.startTransition;
var He = e.exports.unstable_useCacheRefresh;
var ke = e.exports.use;
var je = e.exports.useActionState;
var Ae = e.exports.useCallback;
var Ne = e.exports.useContext;
var Oe = e.exports.useDebugValue;
var $e = e.exports.useDeferredValue;
var Ie = e.exports.useEffect;
var Pe = e.exports.useEffectEvent;
var Me = e.exports.useId;
var De = e.exports.useImperativeHandle;
var Le = e.exports.useInsertionEffect;
var Ue = e.exports.useLayoutEffect;
var Ve = e.exports.useMemo;
var qe = e.exports.useOptimistic;
var ze = e.exports.useReducer;
var Fe = e.exports.useRef;
var Ge = e.exports.useState;
var We = e.exports.useSyncExternalStore;
var Ye = e.exports.useTransition;
var Be = e.exports.version;

// deno:https://cdn.jsdelivr.net/npm/scheduler@0.27.0/+esm
var e2 = {
  exports: {}
};
var t2 = {};
!function(e6) {
  function t5(e7, t6) {
    var n6 = e7.length;
    e7.push(t6);
    e: for (; 0 < n6; ) {
      var r7 = n6 - 1 >>> 1, l6 = e7[r7];
      if (!(0 < a6(l6, t6))) break e;
      e7[r7] = t6, e7[n6] = l6, n6 = r7;
    }
  }
  function n5(e7) {
    return 0 === e7.length ? null : e7[0];
  }
  function r6(e7) {
    if (0 === e7.length) return null;
    var t6 = e7[0], n6 = e7.pop();
    if (n6 !== t6) {
      e7[0] = n6;
      e: for (var r7 = 0, l6 = e7.length, o6 = l6 >>> 1; r7 < o6; ) {
        var i6 = 2 * (r7 + 1) - 1, u6 = e7[i6], s7 = i6 + 1, f6 = e7[s7];
        if (0 > a6(u6, n6)) s7 < l6 && 0 > a6(f6, u6) ? (e7[r7] = f6, e7[s7] = n6, r7 = s7) : (e7[r7] = u6, e7[i6] = n6, r7 = i6);
        else {
          if (!(s7 < l6 && 0 > a6(f6, n6))) break e;
          e7[r7] = f6, e7[s7] = n6, r7 = s7;
        }
      }
    }
    return t6;
  }
  function a6(e7, t6) {
    var n6 = e7.sortIndex - t6.sortIndex;
    return 0 !== n6 ? n6 : e7.id - t6.id;
  }
  if (e6.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
    var l5 = performance;
    e6.unstable_now = function() {
      return l5.now();
    };
  } else {
    var o5 = Date, i5 = o5.now();
    e6.unstable_now = function() {
      return o5.now() - i5;
    };
  }
  var u5 = [], s6 = [], f5 = 1, c5 = null, b4 = 3, p5 = false, y5 = false, _5 = false, v5 = false, d5 = "function" == typeof setTimeout ? setTimeout : null, x4 = "function" == typeof clearTimeout ? clearTimeout : null, m4 = "undefined" != typeof setImmediate ? setImmediate : null;
  function k3(e7) {
    for (var a7 = n5(s6); null !== a7; ) {
      if (null === a7.callback) r6(s6);
      else {
        if (!(a7.startTime <= e7)) break;
        r6(s6), a7.sortIndex = a7.expirationTime, t5(u5, a7);
      }
      a7 = n5(s6);
    }
  }
  function w3(e7) {
    if (_5 = false, k3(e7), !y5) if (null !== n5(u5)) y5 = true, P3 || (P3 = true, h4());
    else {
      var t6 = n5(s6);
      null !== t6 && R4(w3, t6.startTime - e7);
    }
  }
  var h4, P3 = false, g4 = -1, I3 = 5, T4 = -1;
  function C3() {
    return !!v5 || !(e6.unstable_now() - T4 < I3);
  }
  function L3() {
    if (v5 = false, P3) {
      var t6 = e6.unstable_now();
      T4 = t6;
      var a7 = true;
      try {
        e: {
          y5 = false, _5 && (_5 = false, x4(g4), g4 = -1), p5 = true;
          var l6 = b4;
          try {
            t: {
              for (k3(t6), c5 = n5(u5); null !== c5 && !(c5.expirationTime > t6 && C3()); ) {
                var o6 = c5.callback;
                if ("function" == typeof o6) {
                  c5.callback = null, b4 = c5.priorityLevel;
                  var i6 = o6(c5.expirationTime <= t6);
                  if (t6 = e6.unstable_now(), "function" == typeof i6) {
                    c5.callback = i6, k3(t6), a7 = true;
                    break t;
                  }
                  c5 === n5(u5) && r6(u5), k3(t6);
                } else r6(u5);
                c5 = n5(u5);
              }
              if (null !== c5) a7 = true;
              else {
                var f6 = n5(s6);
                null !== f6 && R4(w3, f6.startTime - t6), a7 = false;
              }
            }
            break e;
          } finally {
            c5 = null, b4 = l6, p5 = false;
          }
          a7 = void 0;
        }
      } finally {
        a7 ? h4() : P3 = false;
      }
    }
  }
  if ("function" == typeof m4) h4 = function() {
    m4(L3);
  };
  else if ("undefined" != typeof MessageChannel) {
    var M3 = new MessageChannel(), F3 = M3.port2;
    M3.port1.onmessage = L3, h4 = function() {
      F3.postMessage(null);
    };
  } else h4 = function() {
    d5(L3, 0);
  };
  function R4(t6, n6) {
    g4 = d5(function() {
      t6(e6.unstable_now());
    }, n6);
  }
  e6.unstable_IdlePriority = 5, e6.unstable_ImmediatePriority = 1, e6.unstable_LowPriority = 4, e6.unstable_NormalPriority = 3, e6.unstable_Profiling = null, e6.unstable_UserBlockingPriority = 2, e6.unstable_cancelCallback = function(e7) {
    e7.callback = null;
  }, e6.unstable_forceFrameRate = function(e7) {
    0 > e7 || 125 < e7 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I3 = 0 < e7 ? Math.floor(1e3 / e7) : 5;
  }, e6.unstable_getCurrentPriorityLevel = function() {
    return b4;
  }, e6.unstable_next = function(e7) {
    switch (b4) {
      case 1:
      case 2:
      case 3:
        var t6 = 3;
        break;
      default:
        t6 = b4;
    }
    var n6 = b4;
    b4 = t6;
    try {
      return e7();
    } finally {
      b4 = n6;
    }
  }, e6.unstable_requestPaint = function() {
    v5 = true;
  }, e6.unstable_runWithPriority = function(e7, t6) {
    switch (e7) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e7 = 3;
    }
    var n6 = b4;
    b4 = e7;
    try {
      return t6();
    } finally {
      b4 = n6;
    }
  }, e6.unstable_scheduleCallback = function(r7, a7, l6) {
    var o6 = e6.unstable_now();
    switch ("object" == typeof l6 && null !== l6 ? l6 = "number" == typeof (l6 = l6.delay) && 0 < l6 ? o6 + l6 : o6 : l6 = o6, r7) {
      case 1:
        var i6 = -1;
        break;
      case 2:
        i6 = 250;
        break;
      case 5:
        i6 = 1073741823;
        break;
      case 4:
        i6 = 1e4;
        break;
      default:
        i6 = 5e3;
    }
    return r7 = {
      id: f5++,
      callback: a7,
      priorityLevel: r7,
      startTime: l6,
      expirationTime: i6 = l6 + i6,
      sortIndex: -1
    }, l6 > o6 ? (r7.sortIndex = l6, t5(s6, r7), null === n5(u5) && r7 === n5(s6) && (_5 ? (x4(g4), g4 = -1) : _5 = true, R4(w3, l6 - o6))) : (r7.sortIndex = i6, t5(u5, r7), y5 || p5 || (y5 = true, P3 || (P3 = true, h4()))), r7;
  }, e6.unstable_shouldYield = C3, e6.unstable_wrapCallback = function(e7) {
    var t6 = b4;
    return function() {
      var n6 = b4;
      b4 = t6;
      try {
        return e7.apply(this, arguments);
      } finally {
        b4 = n6;
      }
    };
  };
}(t2), e2.exports = t2;
var n2 = e2.exports;
var r2 = e2.exports.unstable_IdlePriority;
var a2 = e2.exports.unstable_ImmediatePriority;
var l2 = e2.exports.unstable_LowPriority;
var o2 = e2.exports.unstable_NormalPriority;
var i2 = e2.exports.unstable_Profiling;
var u2 = e2.exports.unstable_UserBlockingPriority;
var s2 = e2.exports.unstable_cancelCallback;
var f2 = e2.exports.unstable_forceFrameRate;
var c2 = e2.exports.unstable_getCurrentPriorityLevel;
var b2 = e2.exports.unstable_next;
var p2 = e2.exports.unstable_now;
var y2 = e2.exports.unstable_requestPaint;
var _2 = e2.exports.unstable_runWithPriority;
var v2 = e2.exports.unstable_scheduleCallback;
var d2 = e2.exports.unstable_shouldYield;
var x2 = e2.exports.unstable_wrapCallback;

// deno:https://cdn.jsdelivr.net/npm/react-dom@19.2.4/+esm
var t3 = {
  exports: {}
};
var r3 = {};
var i3 = se;
function n3(e6) {
  var t5 = "https://react.dev/errors/" + e6;
  if (1 < arguments.length) {
    t5 += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var r6 = 2; r6 < arguments.length; r6++) t5 += "&args[]=" + encodeURIComponent(arguments[r6]);
  }
  return "Minified React error #" + e6 + "; visit " + t5 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function o3() {
}
var s3 = {
  d: {
    f: o3,
    r: function() {
      throw Error(n3(522));
    },
    D: o3,
    C: o3,
    L: o3,
    m: o3,
    X: o3,
    S: o3,
    M: o3
  },
  p: 0,
  findDOMNode: null
};
var f3 = Symbol.for("react.portal");
var c3 = i3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function p3(e6, t5) {
  return "font" === e6 ? "" : "string" == typeof t5 ? "use-credentials" === t5 ? t5 : "" : void 0;
}
r3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s3, r3.createPortal = function(e6, t5) {
  var r6 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!t5 || 1 !== t5.nodeType && 9 !== t5.nodeType && 11 !== t5.nodeType) throw Error(n3(299));
  return function(e7, t6, r7) {
    var i5 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: f3,
      key: null == i5 ? null : "" + i5,
      children: e7,
      containerInfo: t6,
      implementation: r7
    };
  }(e6, t5, null, r6);
}, r3.flushSync = function(e6) {
  var t5 = c3.T, r6 = s3.p;
  try {
    if (c3.T = null, s3.p = 2, e6) return e6();
  } finally {
    c3.T = t5, s3.p = r6, s3.d.f();
  }
}, r3.preconnect = function(e6, t5) {
  "string" == typeof e6 && (t5 ? t5 = "string" == typeof (t5 = t5.crossOrigin) ? "use-credentials" === t5 ? t5 : "" : void 0 : t5 = null, s3.d.C(e6, t5));
}, r3.prefetchDNS = function(e6) {
  "string" == typeof e6 && s3.d.D(e6);
}, r3.preinit = function(e6, t5) {
  if ("string" == typeof e6 && t5 && "string" == typeof t5.as) {
    var r6 = t5.as, i5 = p3(r6, t5.crossOrigin), n5 = "string" == typeof t5.integrity ? t5.integrity : void 0, o5 = "string" == typeof t5.fetchPriority ? t5.fetchPriority : void 0;
    "style" === r6 ? s3.d.S(e6, "string" == typeof t5.precedence ? t5.precedence : void 0, {
      crossOrigin: i5,
      integrity: n5,
      fetchPriority: o5
    }) : "script" === r6 && s3.d.X(e6, {
      crossOrigin: i5,
      integrity: n5,
      fetchPriority: o5,
      nonce: "string" == typeof t5.nonce ? t5.nonce : void 0
    });
  }
}, r3.preinitModule = function(e6, t5) {
  if ("string" == typeof e6) if ("object" == typeof t5 && null !== t5) {
    if (null == t5.as || "script" === t5.as) {
      var r6 = p3(t5.as, t5.crossOrigin);
      s3.d.M(e6, {
        crossOrigin: r6,
        integrity: "string" == typeof t5.integrity ? t5.integrity : void 0,
        nonce: "string" == typeof t5.nonce ? t5.nonce : void 0
      });
    }
  } else null == t5 && s3.d.M(e6);
}, r3.preload = function(e6, t5) {
  if ("string" == typeof e6 && "object" == typeof t5 && null !== t5 && "string" == typeof t5.as) {
    var r6 = t5.as, i5 = p3(r6, t5.crossOrigin);
    s3.d.L(e6, r6, {
      crossOrigin: i5,
      integrity: "string" == typeof t5.integrity ? t5.integrity : void 0,
      nonce: "string" == typeof t5.nonce ? t5.nonce : void 0,
      type: "string" == typeof t5.type ? t5.type : void 0,
      fetchPriority: "string" == typeof t5.fetchPriority ? t5.fetchPriority : void 0,
      referrerPolicy: "string" == typeof t5.referrerPolicy ? t5.referrerPolicy : void 0,
      imageSrcSet: "string" == typeof t5.imageSrcSet ? t5.imageSrcSet : void 0,
      imageSizes: "string" == typeof t5.imageSizes ? t5.imageSizes : void 0,
      media: "string" == typeof t5.media ? t5.media : void 0
    });
  }
}, r3.preloadModule = function(e6, t5) {
  if ("string" == typeof e6) if (t5) {
    var r6 = p3(t5.as, t5.crossOrigin);
    s3.d.m(e6, {
      as: "string" == typeof t5.as && "script" !== t5.as ? t5.as : void 0,
      crossOrigin: r6,
      integrity: "string" == typeof t5.integrity ? t5.integrity : void 0
    });
  } else s3.d.m(e6);
}, r3.requestFormReset = function(e6) {
  s3.d.r(e6);
}, r3.unstable_batchedUpdates = function(e6, t5) {
  return e6(t5);
}, r3.useFormState = function(e6, t5, r6) {
  return c3.H.useFormState(e6, t5, r6);
}, r3.useFormStatus = function() {
  return c3.H.useHostTransitionStatus();
}, r3.version = "19.2.4", function e3() {
  if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e3);
  } catch (e6) {
    console.error(e6);
  }
}(), t3.exports = r3;
var a3 = t3.exports;
var d3 = t3.exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
var y3 = t3.exports.createPortal;
var u3 = t3.exports.flushSync;
var l3 = t3.exports.preconnect;
var g2 = t3.exports.prefetchDNS;
var _3 = t3.exports.preinit;
var O2 = t3.exports.preinitModule;
var v3 = t3.exports.preload;
var S2 = t3.exports.preloadModule;
var m2 = t3.exports.requestFormReset;
var h2 = t3.exports.unstable_batchedUpdates;
var E2 = t3.exports.useFormState;
var T2 = t3.exports.useFormStatus;
var R2 = t3.exports.version;

// deno:https://cdn.jsdelivr.net/npm/react-dom@19.2.4/client/+esm
var r4 = {
  exports: {}
};
var l4 = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
function a4() {
  throw new Error("setTimeout has not been defined");
}
function o4() {
  throw new Error("clearTimeout has not been defined");
}
var i4 = a4;
var u4 = o4;
function s4(e6) {
  if (i4 === setTimeout) return setTimeout(e6, 0);
  if ((i4 === a4 || !i4) && setTimeout) return i4 = setTimeout, setTimeout(e6, 0);
  try {
    return i4(e6, 0);
  } catch (n5) {
    try {
      return i4.call(null, e6, 0);
    } catch (n6) {
      return i4.call(this, e6, 0);
    }
  }
}
"function" == typeof l4.setTimeout && (i4 = setTimeout), "function" == typeof l4.clearTimeout && (u4 = clearTimeout);
var c4;
var f4 = [];
var d4 = false;
var p4 = -1;
function m3() {
  d4 && c4 && (d4 = false, c4.length ? f4 = c4.concat(f4) : p4 = -1, f4.length && h3());
}
function h3() {
  if (!d4) {
    var e6 = s4(m3);
    d4 = true;
    for (var n5 = f4.length; n5; ) {
      for (c4 = f4, f4 = []; ++p4 < n5; ) c4 && c4[p4].run();
      p4 = -1, n5 = f4.length;
    }
    c4 = null, d4 = false, function(e7) {
      if (u4 === clearTimeout) return clearTimeout(e7);
      if ((u4 === o4 || !u4) && clearTimeout) return u4 = clearTimeout, clearTimeout(e7);
      try {
        return u4(e7);
      } catch (n6) {
        try {
          return u4.call(null, e7);
        } catch (n7) {
          return u4.call(this, e7);
        }
      }
    }(e6);
  }
}
function g3(e6, n5) {
  this.fun = e6, this.array = n5;
}
g3.prototype.run = function() {
  this.fun.apply(null, this.array);
};
function v4() {
}
var y4 = v4;
var b3 = v4;
var k2 = v4;
var w2 = v4;
var S3 = v4;
var E3 = v4;
var x3 = v4;
var C2 = l4.performance || {};
var z2 = C2.now || C2.mozNow || C2.msNow || C2.oNow || C2.webkitNow || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
var P2 = /* @__PURE__ */ new Date();
var N2 = {
  nextTick: function(e6) {
    var n5 = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var t5 = 1; t5 < arguments.length; t5++) n5[t5 - 1] = arguments[t5];
    f4.push(new g3(e6, n5)), 1 !== f4.length || d4 || s4(h3);
  },
  title: "browser",
  browser: true,
  env: {},
  argv: [],
  version: "",
  versions: {},
  on: y4,
  addListener: b3,
  once: k2,
  off: w2,
  removeListener: S3,
  removeAllListeners: E3,
  emit: x3,
  binding: function(e6) {
    throw new Error("process.binding is not supported");
  },
  cwd: function() {
    return "/";
  },
  chdir: function(e6) {
    throw new Error("process.chdir is not supported");
  },
  umask: function() {
    return 0;
  },
  hrtime: function(e6) {
    var n5 = 1e-3 * z2.call(C2), t5 = Math.floor(n5), r6 = Math.floor(n5 % 1 * 1e9);
    return e6 && (t5 -= e6[0], (r6 -= e6[1]) < 0 && (t5--, r6 += 1e9)), [
      t5,
      r6
    ];
  },
  platform: "browser",
  release: {},
  config: {},
  uptime: function() {
    return (/* @__PURE__ */ new Date() - P2) / 1e3;
  }
};
var T3 = {};
var L2 = n2;
var _4 = se;
var F2 = a3;
function O3(e6) {
  var n5 = "https://react.dev/errors/" + e6;
  if (1 < arguments.length) {
    n5 += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var t5 = 2; t5 < arguments.length; t5++) n5 += "&args[]=" + encodeURIComponent(arguments[t5]);
  }
  return "Minified React error #" + e6 + "; visit " + n5 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function D2(e6) {
  return !(!e6 || 1 !== e6.nodeType && 9 !== e6.nodeType && 11 !== e6.nodeType);
}
function A2(e6) {
  var n5 = e6, t5 = e6;
  if (e6.alternate) for (; n5.return; ) n5 = n5.return;
  else {
    e6 = n5;
    do {
      !!(4098 & (n5 = e6).flags) && (t5 = n5.return), e6 = n5.return;
    } while (e6);
  }
  return 3 === n5.tag ? t5 : null;
}
function M2(e6) {
  if (13 === e6.tag) {
    var n5 = e6.memoizedState;
    if (null === n5 && (null !== (e6 = e6.alternate) && (n5 = e6.memoizedState)), null !== n5) return n5.dehydrated;
  }
  return null;
}
function R3(e6) {
  if (31 === e6.tag) {
    var n5 = e6.memoizedState;
    if (null === n5 && (null !== (e6 = e6.alternate) && (n5 = e6.memoizedState)), null !== n5) return n5.dehydrated;
  }
  return null;
}
function I2(e6) {
  if (A2(e6) !== e6) throw Error(O3(188));
}
function U2(e6) {
  var n5 = e6.tag;
  if (5 === n5 || 26 === n5 || 27 === n5 || 6 === n5) return e6;
  for (e6 = e6.child; null !== e6; ) {
    if (null !== (n5 = U2(e6))) return n5;
    e6 = e6.sibling;
  }
  return null;
}
var V2 = Object.assign;
var $2 = Symbol.for("react.element");
var j2 = Symbol.for("react.transitional.element");
var B2 = Symbol.for("react.portal");
var H2 = Symbol.for("react.fragment");
var Q2 = Symbol.for("react.strict_mode");
var W2 = Symbol.for("react.profiler");
var q2 = Symbol.for("react.consumer");
var K2 = Symbol.for("react.context");
var Y2 = Symbol.for("react.forward_ref");
var X2 = Symbol.for("react.suspense");
var G2 = Symbol.for("react.suspense_list");
var Z2 = Symbol.for("react.memo");
var J2 = Symbol.for("react.lazy");
var ee2 = Symbol.for("react.activity");
var ne2 = Symbol.for("react.memo_cache_sentinel");
var te2 = Symbol.iterator;
function re2(e6) {
  return null === e6 || "object" != typeof e6 ? null : "function" == typeof (e6 = te2 && e6[te2] || e6["@@iterator"]) ? e6 : null;
}
var le2 = Symbol.for("react.client.reference");
function ae2(e6) {
  if (null == e6) return null;
  if ("function" == typeof e6) return e6.$$typeof === le2 ? null : e6.displayName || e6.name || null;
  if ("string" == typeof e6) return e6;
  switch (e6) {
    case H2:
      return "Fragment";
    case W2:
      return "Profiler";
    case Q2:
      return "StrictMode";
    case X2:
      return "Suspense";
    case G2:
      return "SuspenseList";
    case ee2:
      return "Activity";
  }
  if ("object" == typeof e6) switch (e6.$$typeof) {
    case B2:
      return "Portal";
    case K2:
      return e6.displayName || "Context";
    case q2:
      return (e6._context.displayName || "Context") + ".Consumer";
    case Y2:
      var n5 = e6.render;
      return (e6 = e6.displayName) || (e6 = "" !== (e6 = n5.displayName || n5.name || "") ? "ForwardRef(" + e6 + ")" : "ForwardRef"), e6;
    case Z2:
      return null !== (n5 = e6.displayName || null) ? n5 : ae2(e6.type) || "Memo";
    case J2:
      n5 = e6._payload, e6 = e6._init;
      try {
        return ae2(e6(n5));
      } catch (e7) {
      }
  }
  return null;
}
var oe2 = Array.isArray;
var ie2 = _4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
var ue2 = F2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
var se2 = {
  pending: false,
  data: null,
  method: null,
  action: null
};
var ce2 = [];
var fe2 = -1;
function de2(e6) {
  return {
    current: e6
  };
}
function pe2(e6) {
  0 > fe2 || (e6.current = ce2[fe2], ce2[fe2] = null, fe2--);
}
function me2(e6, n5) {
  fe2++, ce2[fe2] = e6.current, e6.current = n5;
}
var he2;
var ge2;
var ve2 = de2(null);
var ye2 = de2(null);
var be2 = de2(null);
var ke2 = de2(null);
function we2(e6, n5) {
  switch (me2(be2, n5), me2(ye2, e6), me2(ve2, null), n5.nodeType) {
    case 9:
    case 11:
      e6 = (e6 = n5.documentElement) && (e6 = e6.namespaceURI) ? Qf(e6) : 0;
      break;
    default:
      if (e6 = n5.tagName, n5 = n5.namespaceURI) e6 = Wf(n5 = Qf(n5), e6);
      else switch (e6) {
        case "svg":
          e6 = 1;
          break;
        case "math":
          e6 = 2;
          break;
        default:
          e6 = 0;
      }
  }
  pe2(ve2), me2(ve2, e6);
}
function Se2() {
  pe2(ve2), pe2(ye2), pe2(be2);
}
function Ee2(e6) {
  null !== e6.memoizedState && me2(ke2, e6);
  var n5 = ve2.current, t5 = Wf(n5, e6.type);
  n5 !== t5 && (me2(ye2, e6), me2(ve2, t5));
}
function xe2(e6) {
  ye2.current === e6 && (pe2(ve2), pe2(ye2)), ke2.current === e6 && (pe2(ke2), Id._currentValue = se2);
}
function Ce2(e6) {
  if (void 0 === he2) try {
    throw Error();
  } catch (e7) {
    var n5 = e7.stack.trim().match(/\n( *(at )?)/);
    he2 = n5 && n5[1] || "", ge2 = -1 < e7.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e7.stack.indexOf("@") ? "@unknown:0:0" : "";
  }
  return "\n" + he2 + e6 + ge2;
}
var ze2 = false;
function Pe2(e6, n5) {
  if (!e6 || ze2) return "";
  ze2 = true;
  var t5 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var r6 = {
      DetermineComponentFrameRoot: function() {
        try {
          if (n5) {
            var t6 = function() {
              throw Error();
            };
            if (Object.defineProperty(t6.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), "object" == typeof Reflect && Reflect.construct) {
              try {
                Reflect.construct(t6, []);
              } catch (e7) {
                var r7 = e7;
              }
              Reflect.construct(e6, [], t6);
            } else {
              try {
                t6.call();
              } catch (e7) {
                r7 = e7;
              }
              e6.call(t6.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (e7) {
              r7 = e7;
            }
            (t6 = e6()) && "function" == typeof t6.catch && t6.catch(function() {
            });
          }
        } catch (e7) {
          if (e7 && r7 && "string" == typeof e7.stack) return [
            e7.stack,
            r7.stack
          ];
        }
        return [
          null,
          null
        ];
      }
    };
    r6.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var l5 = Object.getOwnPropertyDescriptor(r6.DetermineComponentFrameRoot, "name");
    l5 && l5.configurable && Object.defineProperty(r6.DetermineComponentFrameRoot, "name", {
      value: "DetermineComponentFrameRoot"
    });
    var a6 = r6.DetermineComponentFrameRoot(), o5 = a6[0], i5 = a6[1];
    if (o5 && i5) {
      var u5 = o5.split("\n"), s6 = i5.split("\n");
      for (l5 = r6 = 0; r6 < u5.length && !u5[r6].includes("DetermineComponentFrameRoot"); ) r6++;
      for (; l5 < s6.length && !s6[l5].includes("DetermineComponentFrameRoot"); ) l5++;
      if (r6 === u5.length || l5 === s6.length) for (r6 = u5.length - 1, l5 = s6.length - 1; 1 <= r6 && 0 <= l5 && u5[r6] !== s6[l5]; ) l5--;
      for (; 1 <= r6 && 0 <= l5; r6--, l5--) if (u5[r6] !== s6[l5]) {
        if (1 !== r6 || 1 !== l5) do {
          if (r6--, 0 > --l5 || u5[r6] !== s6[l5]) {
            var c5 = "\n" + u5[r6].replace(" at new ", " at ");
            return e6.displayName && c5.includes("<anonymous>") && (c5 = c5.replace("<anonymous>", e6.displayName)), c5;
          }
        } while (1 <= r6 && 0 <= l5);
        break;
      }
    }
  } finally {
    ze2 = false, Error.prepareStackTrace = t5;
  }
  return (t5 = e6 ? e6.displayName || e6.name : "") ? Ce2(t5) : "";
}
function Ne2(e6, n5) {
  switch (e6.tag) {
    case 26:
    case 27:
    case 5:
      return Ce2(e6.type);
    case 16:
      return Ce2("Lazy");
    case 13:
      return e6.child !== n5 && null !== n5 ? Ce2("Suspense Fallback") : Ce2("Suspense");
    case 19:
      return Ce2("SuspenseList");
    case 0:
    case 15:
      return Pe2(e6.type, false);
    case 11:
      return Pe2(e6.type.render, false);
    case 1:
      return Pe2(e6.type, true);
    case 31:
      return Ce2("Activity");
    default:
      return "";
  }
}
function Te2(e6) {
  try {
    var n5 = "", t5 = null;
    do {
      n5 += Ne2(e6, t5), t5 = e6, e6 = e6.return;
    } while (e6);
    return n5;
  } catch (e7) {
    return "\nError generating stack: " + e7.message + "\n" + e7.stack;
  }
}
var Le2 = Object.prototype.hasOwnProperty;
var _e2 = L2.unstable_scheduleCallback;
var Fe2 = L2.unstable_cancelCallback;
var Oe2 = L2.unstable_shouldYield;
var De2 = L2.unstable_requestPaint;
var Ae2 = L2.unstable_now;
var Me2 = L2.unstable_getCurrentPriorityLevel;
var Re2 = L2.unstable_ImmediatePriority;
var Ie2 = L2.unstable_UserBlockingPriority;
var Ue2 = L2.unstable_NormalPriority;
var Ve2 = L2.unstable_LowPriority;
var $e2 = L2.unstable_IdlePriority;
var je2 = L2.log;
var Be2 = L2.unstable_setDisableYieldValue;
var He2 = null;
var Qe = null;
function We2(e6) {
  if ("function" == typeof je2 && Be2(e6), Qe && "function" == typeof Qe.setStrictMode) try {
    Qe.setStrictMode(He2, e6);
  } catch (e7) {
  }
}
var qe2 = Math.clz32 ? Math.clz32 : function(e6) {
  return 0 === (e6 >>>= 0) ? 32 : 31 - (Ke(e6) / Ye2 | 0) | 0;
};
var Ke = Math.log;
var Ye2 = Math.LN2;
var Xe = 256;
var Ge2 = 262144;
var Ze = 4194304;
function Je(e6) {
  var n5 = 42 & e6;
  if (0 !== n5) return n5;
  switch (e6 & -e6) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
      return 128;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
      return 261888 & e6;
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 3932160 & e6;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return 62914560 & e6;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return e6;
  }
}
function en(e6, n5, t5) {
  var r6 = e6.pendingLanes;
  if (0 === r6) return 0;
  var l5 = 0, a6 = e6.suspendedLanes, o5 = e6.pingedLanes;
  e6 = e6.warmLanes;
  var i5 = 134217727 & r6;
  return 0 !== i5 ? 0 !== (r6 = i5 & ~a6) ? l5 = Je(r6) : 0 !== (o5 &= i5) ? l5 = Je(o5) : t5 || 0 !== (t5 = i5 & ~e6) && (l5 = Je(t5)) : 0 !== (i5 = r6 & ~a6) ? l5 = Je(i5) : 0 !== o5 ? l5 = Je(o5) : t5 || 0 !== (t5 = r6 & ~e6) && (l5 = Je(t5)), 0 === l5 ? 0 : 0 !== n5 && n5 !== l5 && !(n5 & a6) && ((a6 = l5 & -l5) >= (t5 = n5 & -n5) || 32 === a6 && 4194048 & t5) ? n5 : l5;
}
function nn(e6, n5) {
  return !(e6.pendingLanes & ~(e6.suspendedLanes & ~e6.pingedLanes) & n5);
}
function tn(e6, n5) {
  switch (e6) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
      return n5 + 250;
    case 16:
    case 32:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n5 + 5e3;
    default:
      return -1;
  }
}
function rn() {
  var e6 = Ze;
  return !(62914560 & (Ze <<= 1)) && (Ze = 4194304), e6;
}
function ln(e6) {
  for (var n5 = [], t5 = 0; 31 > t5; t5++) n5.push(e6);
  return n5;
}
function an(e6, n5) {
  e6.pendingLanes |= n5, 268435456 !== n5 && (e6.suspendedLanes = 0, e6.pingedLanes = 0, e6.warmLanes = 0);
}
function on(e6, n5, t5) {
  e6.pendingLanes |= n5, e6.suspendedLanes &= ~n5;
  var r6 = 31 - qe2(n5);
  e6.entangledLanes |= n5, e6.entanglements[r6] = 1073741824 | e6.entanglements[r6] | 261930 & t5;
}
function un(e6, n5) {
  var t5 = e6.entangledLanes |= n5;
  for (e6 = e6.entanglements; t5; ) {
    var r6 = 31 - qe2(t5), l5 = 1 << r6;
    l5 & n5 | e6[r6] & n5 && (e6[r6] |= n5), t5 &= ~l5;
  }
}
function sn(e6, n5) {
  var t5 = n5 & -n5;
  return (t5 = 42 & t5 ? 1 : cn(t5)) & (e6.suspendedLanes | n5) ? 0 : t5;
}
function cn(e6) {
  switch (e6) {
    case 2:
      e6 = 1;
      break;
    case 8:
      e6 = 4;
      break;
    case 32:
      e6 = 16;
      break;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      e6 = 128;
      break;
    case 268435456:
      e6 = 134217728;
      break;
    default:
      e6 = 0;
  }
  return e6;
}
function fn(e6) {
  return 2 < (e6 &= -e6) ? 8 < e6 ? 134217727 & e6 ? 32 : 268435456 : 8 : 2;
}
function dn() {
  var e6 = ue2.p;
  return 0 !== e6 ? e6 : void 0 === (e6 = window.event) ? 32 : ep(e6.type);
}
function pn(e6, n5) {
  var t5 = ue2.p;
  try {
    return ue2.p = e6, n5();
  } finally {
    ue2.p = t5;
  }
}
var mn = Math.random().toString(36).slice(2);
var hn = "__reactFiber$" + mn;
var gn = "__reactProps$" + mn;
var vn = "__reactContainer$" + mn;
var yn = "__reactEvents$" + mn;
var bn = "__reactListeners$" + mn;
var kn = "__reactHandles$" + mn;
var wn = "__reactResources$" + mn;
var Sn = "__reactMarker$" + mn;
function En(e6) {
  delete e6[hn], delete e6[gn], delete e6[yn], delete e6[bn], delete e6[kn];
}
function xn(e6) {
  var n5 = e6[hn];
  if (n5) return n5;
  for (var t5 = e6.parentNode; t5; ) {
    if (n5 = t5[vn] || t5[hn]) {
      if (t5 = n5.alternate, null !== n5.child || null !== t5 && null !== t5.child) for (e6 = cd(e6); null !== e6; ) {
        if (t5 = e6[hn]) return t5;
        e6 = cd(e6);
      }
      return n5;
    }
    t5 = (e6 = t5).parentNode;
  }
  return null;
}
function Cn(e6) {
  if (e6 = e6[hn] || e6[vn]) {
    var n5 = e6.tag;
    if (5 === n5 || 6 === n5 || 13 === n5 || 31 === n5 || 26 === n5 || 27 === n5 || 3 === n5) return e6;
  }
  return null;
}
function zn(e6) {
  var n5 = e6.tag;
  if (5 === n5 || 26 === n5 || 27 === n5 || 6 === n5) return e6.stateNode;
  throw Error(O3(33));
}
function Pn(e6) {
  var n5 = e6[wn];
  return n5 || (n5 = e6[wn] = {
    hoistableStyles: /* @__PURE__ */ new Map(),
    hoistableScripts: /* @__PURE__ */ new Map()
  }), n5;
}
function Nn(e6) {
  e6[Sn] = true;
}
var Tn = /* @__PURE__ */ new Set();
var Ln = {};
function _n(e6, n5) {
  Fn(e6, n5), Fn(e6 + "Capture", n5);
}
function Fn(e6, n5) {
  for (Ln[e6] = n5, e6 = 0; e6 < n5.length; e6++) Tn.add(n5[e6]);
}
var On = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
var Dn = {};
var An = {};
function Mn(e6, n5, t5) {
  if (l5 = n5, Le2.call(An, l5) || !Le2.call(Dn, l5) && (On.test(l5) ? An[l5] = true : (Dn[l5] = true, 0))) if (null === t5) e6.removeAttribute(n5);
  else {
    switch (typeof t5) {
      case "undefined":
      case "function":
      case "symbol":
        return void e6.removeAttribute(n5);
      case "boolean":
        var r6 = n5.toLowerCase().slice(0, 5);
        if ("data-" !== r6 && "aria-" !== r6) return void e6.removeAttribute(n5);
    }
    e6.setAttribute(n5, "" + t5);
  }
  var l5;
}
function Rn(e6, n5, t5) {
  if (null === t5) e6.removeAttribute(n5);
  else {
    switch (typeof t5) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        return void e6.removeAttribute(n5);
    }
    e6.setAttribute(n5, "" + t5);
  }
}
function In(e6, n5, t5, r6) {
  if (null === r6) e6.removeAttribute(t5);
  else {
    switch (typeof r6) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        return void e6.removeAttribute(t5);
    }
    e6.setAttributeNS(n5, t5, "" + r6);
  }
}
function Un(e6) {
  switch (typeof e6) {
    case "bigint":
    case "boolean":
    case "number":
    case "string":
    case "undefined":
    case "object":
      return e6;
    default:
      return "";
  }
}
function Vn(e6) {
  var n5 = e6.type;
  return (e6 = e6.nodeName) && "input" === e6.toLowerCase() && ("checkbox" === n5 || "radio" === n5);
}
function $n(e6) {
  if (!e6._valueTracker) {
    var n5 = Vn(e6) ? "checked" : "value";
    e6._valueTracker = function(e7, n6, t5) {
      var r6 = Object.getOwnPropertyDescriptor(e7.constructor.prototype, n6);
      if (!e7.hasOwnProperty(n6) && void 0 !== r6 && "function" == typeof r6.get && "function" == typeof r6.set) {
        var l5 = r6.get, a6 = r6.set;
        return Object.defineProperty(e7, n6, {
          configurable: true,
          get: function() {
            return l5.call(this);
          },
          set: function(e8) {
            t5 = "" + e8, a6.call(this, e8);
          }
        }), Object.defineProperty(e7, n6, {
          enumerable: r6.enumerable
        }), {
          getValue: function() {
            return t5;
          },
          setValue: function(e8) {
            t5 = "" + e8;
          },
          stopTracking: function() {
            e7._valueTracker = null, delete e7[n6];
          }
        };
      }
    }(e6, n5, "" + e6[n5]);
  }
}
function jn(e6) {
  if (!e6) return false;
  var n5 = e6._valueTracker;
  if (!n5) return true;
  var t5 = n5.getValue(), r6 = "";
  return e6 && (r6 = Vn(e6) ? e6.checked ? "true" : "false" : e6.value), (e6 = r6) !== t5 && (n5.setValue(e6), true);
}
function Bn(e6) {
  if (void 0 === (e6 = e6 || ("undefined" != typeof document ? document : void 0))) return null;
  try {
    return e6.activeElement || e6.body;
  } catch (n5) {
    return e6.body;
  }
}
var Hn = /[\n"\\]/g;
function Qn(e6) {
  return e6.replace(Hn, function(e7) {
    return "\\" + e7.charCodeAt(0).toString(16) + " ";
  });
}
function Wn(e6, n5, t5, r6, l5, a6, o5, i5) {
  e6.name = "", null != o5 && "function" != typeof o5 && "symbol" != typeof o5 && "boolean" != typeof o5 ? e6.type = o5 : e6.removeAttribute("type"), null != n5 ? "number" === o5 ? (0 === n5 && "" === e6.value || e6.value != n5) && (e6.value = "" + Un(n5)) : e6.value !== "" + Un(n5) && (e6.value = "" + Un(n5)) : "submit" !== o5 && "reset" !== o5 || e6.removeAttribute("value"), null != n5 ? Kn(e6, o5, Un(n5)) : null != t5 ? Kn(e6, o5, Un(t5)) : null != r6 && e6.removeAttribute("value"), null == l5 && null != a6 && (e6.defaultChecked = !!a6), null != l5 && (e6.checked = l5 && "function" != typeof l5 && "symbol" != typeof l5), null != i5 && "function" != typeof i5 && "symbol" != typeof i5 && "boolean" != typeof i5 ? e6.name = "" + Un(i5) : e6.removeAttribute("name");
}
function qn(e6, n5, t5, r6, l5, a6, o5, i5) {
  if (null != a6 && "function" != typeof a6 && "symbol" != typeof a6 && "boolean" != typeof a6 && (e6.type = a6), null != n5 || null != t5) {
    if (("submit" === a6 || "reset" === a6) && null == n5) return void $n(e6);
    t5 = null != t5 ? "" + Un(t5) : "", n5 = null != n5 ? "" + Un(n5) : t5, i5 || n5 === e6.value || (e6.value = n5), e6.defaultValue = n5;
  }
  r6 = "function" != typeof (r6 = null != r6 ? r6 : l5) && "symbol" != typeof r6 && !!r6, e6.checked = i5 ? e6.checked : !!r6, e6.defaultChecked = !!r6, null != o5 && "function" != typeof o5 && "symbol" != typeof o5 && "boolean" != typeof o5 && (e6.name = o5), $n(e6);
}
function Kn(e6, n5, t5) {
  "number" === n5 && Bn(e6.ownerDocument) === e6 || e6.defaultValue === "" + t5 || (e6.defaultValue = "" + t5);
}
function Yn(e6, n5, t5, r6) {
  if (e6 = e6.options, n5) {
    n5 = {};
    for (var l5 = 0; l5 < t5.length; l5++) n5["$" + t5[l5]] = true;
    for (t5 = 0; t5 < e6.length; t5++) l5 = n5.hasOwnProperty("$" + e6[t5].value), e6[t5].selected !== l5 && (e6[t5].selected = l5), l5 && r6 && (e6[t5].defaultSelected = true);
  } else {
    for (t5 = "" + Un(t5), n5 = null, l5 = 0; l5 < e6.length; l5++) {
      if (e6[l5].value === t5) return e6[l5].selected = true, void (r6 && (e6[l5].defaultSelected = true));
      null !== n5 || e6[l5].disabled || (n5 = e6[l5]);
    }
    null !== n5 && (n5.selected = true);
  }
}
function Xn(e6, n5, t5) {
  null == n5 || ((n5 = "" + Un(n5)) !== e6.value && (e6.value = n5), null != t5) ? e6.defaultValue = null != t5 ? "" + Un(t5) : "" : e6.defaultValue !== n5 && (e6.defaultValue = n5);
}
function Gn(e6, n5, t5, r6) {
  if (null == n5) {
    if (null != r6) {
      if (null != t5) throw Error(O3(92));
      if (oe2(r6)) {
        if (1 < r6.length) throw Error(O3(93));
        r6 = r6[0];
      }
      t5 = r6;
    }
    null == t5 && (t5 = ""), n5 = t5;
  }
  t5 = Un(n5), e6.defaultValue = t5, (r6 = e6.textContent) === t5 && "" !== r6 && null !== r6 && (e6.value = r6), $n(e6);
}
function Zn(e6, n5) {
  if (n5) {
    var t5 = e6.firstChild;
    if (t5 && t5 === e6.lastChild && 3 === t5.nodeType) return void (t5.nodeValue = n5);
  }
  e6.textContent = n5;
}
var Jn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
function et(e6, n5, t5) {
  var r6 = 0 === n5.indexOf("--");
  null == t5 || "boolean" == typeof t5 || "" === t5 ? r6 ? e6.setProperty(n5, "") : "float" === n5 ? e6.cssFloat = "" : e6[n5] = "" : r6 ? e6.setProperty(n5, t5) : "number" != typeof t5 || 0 === t5 || Jn.has(n5) ? "float" === n5 ? e6.cssFloat = t5 : e6[n5] = ("" + t5).trim() : e6[n5] = t5 + "px";
}
function nt(e6, n5, t5) {
  if (null != n5 && "object" != typeof n5) throw Error(O3(62));
  if (e6 = e6.style, null != t5) {
    for (var r6 in t5) !t5.hasOwnProperty(r6) || null != n5 && n5.hasOwnProperty(r6) || (0 === r6.indexOf("--") ? e6.setProperty(r6, "") : "float" === r6 ? e6.cssFloat = "" : e6[r6] = "");
    for (var l5 in n5) r6 = n5[l5], n5.hasOwnProperty(l5) && t5[l5] !== r6 && et(e6, l5, r6);
  } else for (var a6 in n5) n5.hasOwnProperty(a6) && et(e6, a6, n5[a6]);
}
function tt(e6) {
  if (-1 === e6.indexOf("-")) return false;
  switch (e6) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var rt = /* @__PURE__ */ new Map([
  [
    "acceptCharset",
    "accept-charset"
  ],
  [
    "htmlFor",
    "for"
  ],
  [
    "httpEquiv",
    "http-equiv"
  ],
  [
    "crossOrigin",
    "crossorigin"
  ],
  [
    "accentHeight",
    "accent-height"
  ],
  [
    "alignmentBaseline",
    "alignment-baseline"
  ],
  [
    "arabicForm",
    "arabic-form"
  ],
  [
    "baselineShift",
    "baseline-shift"
  ],
  [
    "capHeight",
    "cap-height"
  ],
  [
    "clipPath",
    "clip-path"
  ],
  [
    "clipRule",
    "clip-rule"
  ],
  [
    "colorInterpolation",
    "color-interpolation"
  ],
  [
    "colorInterpolationFilters",
    "color-interpolation-filters"
  ],
  [
    "colorProfile",
    "color-profile"
  ],
  [
    "colorRendering",
    "color-rendering"
  ],
  [
    "dominantBaseline",
    "dominant-baseline"
  ],
  [
    "enableBackground",
    "enable-background"
  ],
  [
    "fillOpacity",
    "fill-opacity"
  ],
  [
    "fillRule",
    "fill-rule"
  ],
  [
    "floodColor",
    "flood-color"
  ],
  [
    "floodOpacity",
    "flood-opacity"
  ],
  [
    "fontFamily",
    "font-family"
  ],
  [
    "fontSize",
    "font-size"
  ],
  [
    "fontSizeAdjust",
    "font-size-adjust"
  ],
  [
    "fontStretch",
    "font-stretch"
  ],
  [
    "fontStyle",
    "font-style"
  ],
  [
    "fontVariant",
    "font-variant"
  ],
  [
    "fontWeight",
    "font-weight"
  ],
  [
    "glyphName",
    "glyph-name"
  ],
  [
    "glyphOrientationHorizontal",
    "glyph-orientation-horizontal"
  ],
  [
    "glyphOrientationVertical",
    "glyph-orientation-vertical"
  ],
  [
    "horizAdvX",
    "horiz-adv-x"
  ],
  [
    "horizOriginX",
    "horiz-origin-x"
  ],
  [
    "imageRendering",
    "image-rendering"
  ],
  [
    "letterSpacing",
    "letter-spacing"
  ],
  [
    "lightingColor",
    "lighting-color"
  ],
  [
    "markerEnd",
    "marker-end"
  ],
  [
    "markerMid",
    "marker-mid"
  ],
  [
    "markerStart",
    "marker-start"
  ],
  [
    "overlinePosition",
    "overline-position"
  ],
  [
    "overlineThickness",
    "overline-thickness"
  ],
  [
    "paintOrder",
    "paint-order"
  ],
  [
    "panose-1",
    "panose-1"
  ],
  [
    "pointerEvents",
    "pointer-events"
  ],
  [
    "renderingIntent",
    "rendering-intent"
  ],
  [
    "shapeRendering",
    "shape-rendering"
  ],
  [
    "stopColor",
    "stop-color"
  ],
  [
    "stopOpacity",
    "stop-opacity"
  ],
  [
    "strikethroughPosition",
    "strikethrough-position"
  ],
  [
    "strikethroughThickness",
    "strikethrough-thickness"
  ],
  [
    "strokeDasharray",
    "stroke-dasharray"
  ],
  [
    "strokeDashoffset",
    "stroke-dashoffset"
  ],
  [
    "strokeLinecap",
    "stroke-linecap"
  ],
  [
    "strokeLinejoin",
    "stroke-linejoin"
  ],
  [
    "strokeMiterlimit",
    "stroke-miterlimit"
  ],
  [
    "strokeOpacity",
    "stroke-opacity"
  ],
  [
    "strokeWidth",
    "stroke-width"
  ],
  [
    "textAnchor",
    "text-anchor"
  ],
  [
    "textDecoration",
    "text-decoration"
  ],
  [
    "textRendering",
    "text-rendering"
  ],
  [
    "transformOrigin",
    "transform-origin"
  ],
  [
    "underlinePosition",
    "underline-position"
  ],
  [
    "underlineThickness",
    "underline-thickness"
  ],
  [
    "unicodeBidi",
    "unicode-bidi"
  ],
  [
    "unicodeRange",
    "unicode-range"
  ],
  [
    "unitsPerEm",
    "units-per-em"
  ],
  [
    "vAlphabetic",
    "v-alphabetic"
  ],
  [
    "vHanging",
    "v-hanging"
  ],
  [
    "vIdeographic",
    "v-ideographic"
  ],
  [
    "vMathematical",
    "v-mathematical"
  ],
  [
    "vectorEffect",
    "vector-effect"
  ],
  [
    "vertAdvY",
    "vert-adv-y"
  ],
  [
    "vertOriginX",
    "vert-origin-x"
  ],
  [
    "vertOriginY",
    "vert-origin-y"
  ],
  [
    "wordSpacing",
    "word-spacing"
  ],
  [
    "writingMode",
    "writing-mode"
  ],
  [
    "xmlnsXlink",
    "xmlns:xlink"
  ],
  [
    "xHeight",
    "x-height"
  ]
]);
var lt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function at(e6) {
  return lt.test("" + e6) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e6;
}
function ot() {
}
var it = null;
function ut(e6) {
  return (e6 = e6.target || e6.srcElement || window).correspondingUseElement && (e6 = e6.correspondingUseElement), 3 === e6.nodeType ? e6.parentNode : e6;
}
var st = null;
var ct = null;
function ft(e6) {
  var n5 = Cn(e6);
  if (n5 && (e6 = n5.stateNode)) {
    var t5 = e6[gn] || null;
    e: switch (e6 = n5.stateNode, n5.type) {
      case "input":
        if (Wn(e6, t5.value, t5.defaultValue, t5.defaultValue, t5.checked, t5.defaultChecked, t5.type, t5.name), n5 = t5.name, "radio" === t5.type && null != n5) {
          for (t5 = e6; t5.parentNode; ) t5 = t5.parentNode;
          for (t5 = t5.querySelectorAll('input[name="' + Qn("" + n5) + '"][type="radio"]'), n5 = 0; n5 < t5.length; n5++) {
            var r6 = t5[n5];
            if (r6 !== e6 && r6.form === e6.form) {
              var l5 = r6[gn] || null;
              if (!l5) throw Error(O3(90));
              Wn(r6, l5.value, l5.defaultValue, l5.defaultValue, l5.checked, l5.defaultChecked, l5.type, l5.name);
            }
          }
          for (n5 = 0; n5 < t5.length; n5++) (r6 = t5[n5]).form === e6.form && jn(r6);
        }
        break e;
      case "textarea":
        Xn(e6, t5.value, t5.defaultValue);
        break e;
      case "select":
        null != (n5 = t5.value) && Yn(e6, !!t5.multiple, n5, false);
    }
  }
}
var dt = false;
function pt(e6, n5, t5) {
  if (dt) return e6(n5, t5);
  dt = true;
  try {
    return e6(n5);
  } finally {
    if (dt = false, (null !== st || null !== ct) && (zc(), st && (n5 = st, e6 = ct, ct = st = null, ft(n5), e6))) for (n5 = 0; n5 < e6.length; n5++) ft(e6[n5]);
  }
}
function mt(e6, n5) {
  var t5 = e6.stateNode;
  if (null === t5) return null;
  var r6 = t5[gn] || null;
  if (null === r6) return null;
  t5 = r6[n5];
  e: switch (n5) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r6 = !r6.disabled) || (r6 = !("button" === (e6 = e6.type) || "input" === e6 || "select" === e6 || "textarea" === e6)), e6 = !r6;
      break e;
    default:
      e6 = false;
  }
  if (e6) return null;
  if (t5 && "function" != typeof t5) throw Error(O3(231, n5, typeof t5));
  return t5;
}
var ht = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement);
var gt = false;
if (ht) try {
  vt = {};
  Object.defineProperty(vt, "passive", {
    get: function() {
      gt = true;
    }
  }), window.addEventListener("test", vt, vt), window.removeEventListener("test", vt, vt);
} catch (e6) {
  gt = false;
}
var vt;
var yt = null;
var bt = null;
var kt = null;
function wt() {
  if (kt) return kt;
  var e6, n5, t5 = bt, r6 = t5.length, l5 = "value" in yt ? yt.value : yt.textContent, a6 = l5.length;
  for (e6 = 0; e6 < r6 && t5[e6] === l5[e6]; e6++) ;
  var o5 = r6 - e6;
  for (n5 = 1; n5 <= o5 && t5[r6 - n5] === l5[a6 - n5]; n5++) ;
  return kt = l5.slice(e6, 1 < n5 ? 1 - n5 : void 0);
}
function St(e6) {
  var n5 = e6.keyCode;
  return "charCode" in e6 ? 0 === (e6 = e6.charCode) && 13 === n5 && (e6 = 13) : e6 = n5, 10 === e6 && (e6 = 13), 32 <= e6 || 13 === e6 ? e6 : 0;
}
function Et() {
  return true;
}
function xt() {
  return false;
}
function Ct(e6) {
  function n5(n6, t5, r6, l5, a6) {
    for (var o5 in this._reactName = n6, this._targetInst = r6, this.type = t5, this.nativeEvent = l5, this.target = a6, this.currentTarget = null, e6) e6.hasOwnProperty(o5) && (n6 = e6[o5], this[o5] = n6 ? n6(l5) : l5[o5]);
    return this.isDefaultPrevented = (null != l5.defaultPrevented ? l5.defaultPrevented : false === l5.returnValue) ? Et : xt, this.isPropagationStopped = xt, this;
  }
  return V2(n5.prototype, {
    preventDefault: function() {
      this.defaultPrevented = true;
      var e7 = this.nativeEvent;
      e7 && (e7.preventDefault ? e7.preventDefault() : "unknown" != typeof e7.returnValue && (e7.returnValue = false), this.isDefaultPrevented = Et);
    },
    stopPropagation: function() {
      var e7 = this.nativeEvent;
      e7 && (e7.stopPropagation ? e7.stopPropagation() : "unknown" != typeof e7.cancelBubble && (e7.cancelBubble = true), this.isPropagationStopped = Et);
    },
    persist: function() {
    },
    isPersistent: Et
  }), n5;
}
var zt;
var Pt;
var Nt;
var Tt = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function(e6) {
    return e6.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0
};
var Lt = Ct(Tt);
var _t = V2({}, Tt, {
  view: 0,
  detail: 0
});
var Ft = Ct(_t);
var Ot = V2({}, _t, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: Ht,
  button: 0,
  buttons: 0,
  relatedTarget: function(e6) {
    return void 0 === e6.relatedTarget ? e6.fromElement === e6.srcElement ? e6.toElement : e6.fromElement : e6.relatedTarget;
  },
  movementX: function(e6) {
    return "movementX" in e6 ? e6.movementX : (e6 !== Nt && (Nt && "mousemove" === e6.type ? (zt = e6.screenX - Nt.screenX, Pt = e6.screenY - Nt.screenY) : Pt = zt = 0, Nt = e6), zt);
  },
  movementY: function(e6) {
    return "movementY" in e6 ? e6.movementY : Pt;
  }
});
var Dt = Ct(Ot);
var At = Ct(V2({}, Ot, {
  dataTransfer: 0
}));
var Mt = Ct(V2({}, _t, {
  relatedTarget: 0
}));
var Rt = Ct(V2({}, Tt, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}));
var It = Ct(V2({}, Tt, {
  clipboardData: function(e6) {
    return "clipboardData" in e6 ? e6.clipboardData : window.clipboardData;
  }
}));
var Ut = Ct(V2({}, Tt, {
  data: 0
}));
var Vt = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
var $t = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
};
var jt = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function Bt(e6) {
  var n5 = this.nativeEvent;
  return n5.getModifierState ? n5.getModifierState(e6) : !!(e6 = jt[e6]) && !!n5[e6];
}
function Ht() {
  return Bt;
}
var Qt = Ct(V2({}, _t, {
  key: function(e6) {
    if (e6.key) {
      var n5 = Vt[e6.key] || e6.key;
      if ("Unidentified" !== n5) return n5;
    }
    return "keypress" === e6.type ? 13 === (e6 = St(e6)) ? "Enter" : String.fromCharCode(e6) : "keydown" === e6.type || "keyup" === e6.type ? $t[e6.keyCode] || "Unidentified" : "";
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: Ht,
  charCode: function(e6) {
    return "keypress" === e6.type ? St(e6) : 0;
  },
  keyCode: function(e6) {
    return "keydown" === e6.type || "keyup" === e6.type ? e6.keyCode : 0;
  },
  which: function(e6) {
    return "keypress" === e6.type ? St(e6) : "keydown" === e6.type || "keyup" === e6.type ? e6.keyCode : 0;
  }
}));
var Wt = Ct(V2({}, Ot, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
}));
var qt = Ct(V2({}, _t, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: Ht
}));
var Kt = Ct(V2({}, Tt, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}));
var Yt = Ct(V2({}, Ot, {
  deltaX: function(e6) {
    return "deltaX" in e6 ? e6.deltaX : "wheelDeltaX" in e6 ? -e6.wheelDeltaX : 0;
  },
  deltaY: function(e6) {
    return "deltaY" in e6 ? e6.deltaY : "wheelDeltaY" in e6 ? -e6.wheelDeltaY : "wheelDelta" in e6 ? -e6.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}));
var Xt = Ct(V2({}, Tt, {
  newState: 0,
  oldState: 0
}));
var Gt = [
  9,
  13,
  27,
  32
];
var Zt = ht && "CompositionEvent" in window;
var Jt = null;
ht && "documentMode" in document && (Jt = document.documentMode);
var er = ht && "TextEvent" in window && !Jt;
var nr = ht && (!Zt || Jt && 8 < Jt && 11 >= Jt);
var tr = String.fromCharCode(32);
var rr = false;
function lr(e6, n5) {
  switch (e6) {
    case "keyup":
      return -1 !== Gt.indexOf(n5.keyCode);
    case "keydown":
      return 229 !== n5.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function ar(e6) {
  return "object" == typeof (e6 = e6.detail) && "data" in e6 ? e6.data : null;
}
var or = false;
var ir = {
  color: true,
  date: true,
  datetime: true,
  "datetime-local": true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true
};
function ur(e6) {
  var n5 = e6 && e6.nodeName && e6.nodeName.toLowerCase();
  return "input" === n5 ? !!ir[e6.type] : "textarea" === n5;
}
function sr(e6, n5, t5, r6) {
  st ? ct ? ct.push(r6) : ct = [
    r6
  ] : st = r6, 0 < (n5 = _f(n5, "onChange")).length && (t5 = new Lt("onChange", "change", null, t5, r6), e6.push({
    event: t5,
    listeners: n5
  }));
}
var cr = null;
var fr = null;
function dr(e6) {
  Ef(e6, 0);
}
function pr(e6) {
  if (jn(zn(e6))) return e6;
}
function mr(e6, n5) {
  if ("change" === e6) return n5;
}
var hr = false;
if (ht) {
  if (ht) {
    vr = "oninput" in document;
    if (!vr) {
      yr = document.createElement("div");
      yr.setAttribute("oninput", "return;"), vr = "function" == typeof yr.oninput;
    }
    gr = vr;
  } else gr = false;
  hr = gr && (!document.documentMode || 9 < document.documentMode);
}
var gr;
var vr;
var yr;
function br() {
  cr && (cr.detachEvent("onpropertychange", kr), fr = cr = null);
}
function kr(e6) {
  if ("value" === e6.propertyName && pr(fr)) {
    var n5 = [];
    sr(n5, fr, e6, ut(e6)), pt(dr, n5);
  }
}
function wr(e6, n5, t5) {
  "focusin" === e6 ? (br(), fr = t5, (cr = n5).attachEvent("onpropertychange", kr)) : "focusout" === e6 && br();
}
function Sr(e6) {
  if ("selectionchange" === e6 || "keyup" === e6 || "keydown" === e6) return pr(fr);
}
function Er(e6, n5) {
  if ("click" === e6) return pr(n5);
}
function xr(e6, n5) {
  if ("input" === e6 || "change" === e6) return pr(n5);
}
var Cr = "function" == typeof Object.is ? Object.is : function(e6, n5) {
  return e6 === n5 && (0 !== e6 || 1 / e6 == 1 / n5) || e6 != e6 && n5 != n5;
};
function zr(e6, n5) {
  if (Cr(e6, n5)) return true;
  if ("object" != typeof e6 || null === e6 || "object" != typeof n5 || null === n5) return false;
  var t5 = Object.keys(e6), r6 = Object.keys(n5);
  if (t5.length !== r6.length) return false;
  for (r6 = 0; r6 < t5.length; r6++) {
    var l5 = t5[r6];
    if (!Le2.call(n5, l5) || !Cr(e6[l5], n5[l5])) return false;
  }
  return true;
}
function Pr(e6) {
  for (; e6 && e6.firstChild; ) e6 = e6.firstChild;
  return e6;
}
function Nr(e6, n5) {
  var t5, r6 = Pr(e6);
  for (e6 = 0; r6; ) {
    if (3 === r6.nodeType) {
      if (t5 = e6 + r6.textContent.length, e6 <= n5 && t5 >= n5) return {
        node: r6,
        offset: n5 - e6
      };
      e6 = t5;
    }
    e: {
      for (; r6; ) {
        if (r6.nextSibling) {
          r6 = r6.nextSibling;
          break e;
        }
        r6 = r6.parentNode;
      }
      r6 = void 0;
    }
    r6 = Pr(r6);
  }
}
function Tr(e6, n5) {
  return !(!e6 || !n5) && (e6 === n5 || (!e6 || 3 !== e6.nodeType) && (n5 && 3 === n5.nodeType ? Tr(e6, n5.parentNode) : "contains" in e6 ? e6.contains(n5) : !!e6.compareDocumentPosition && !!(16 & e6.compareDocumentPosition(n5))));
}
function Lr(e6) {
  for (var n5 = Bn((e6 = null != e6 && null != e6.ownerDocument && null != e6.ownerDocument.defaultView ? e6.ownerDocument.defaultView : window).document); n5 instanceof e6.HTMLIFrameElement; ) {
    try {
      var t5 = "string" == typeof n5.contentWindow.location.href;
    } catch (e7) {
      t5 = false;
    }
    if (!t5) break;
    n5 = Bn((e6 = n5.contentWindow).document);
  }
  return n5;
}
function _r(e6) {
  var n5 = e6 && e6.nodeName && e6.nodeName.toLowerCase();
  return n5 && ("input" === n5 && ("text" === e6.type || "search" === e6.type || "tel" === e6.type || "url" === e6.type || "password" === e6.type) || "textarea" === n5 || "true" === e6.contentEditable);
}
var Fr = ht && "documentMode" in document && 11 >= document.documentMode;
var Or = null;
var Dr = null;
var Ar = null;
var Mr = false;
function Rr(e6, n5, t5) {
  var r6 = t5.window === t5 ? t5.document : 9 === t5.nodeType ? t5 : t5.ownerDocument;
  Mr || null == Or || Or !== Bn(r6) || ("selectionStart" in (r6 = Or) && _r(r6) ? r6 = {
    start: r6.selectionStart,
    end: r6.selectionEnd
  } : r6 = {
    anchorNode: (r6 = (r6.ownerDocument && r6.ownerDocument.defaultView || window).getSelection()).anchorNode,
    anchorOffset: r6.anchorOffset,
    focusNode: r6.focusNode,
    focusOffset: r6.focusOffset
  }, Ar && zr(Ar, r6) || (Ar = r6, 0 < (r6 = _f(Dr, "onSelect")).length && (n5 = new Lt("onSelect", "select", null, n5, t5), e6.push({
    event: n5,
    listeners: r6
  }), n5.target = Or)));
}
function Ir(e6, n5) {
  var t5 = {};
  return t5[e6.toLowerCase()] = n5.toLowerCase(), t5["Webkit" + e6] = "webkit" + n5, t5["Moz" + e6] = "moz" + n5, t5;
}
var Ur = {
  animationend: Ir("Animation", "AnimationEnd"),
  animationiteration: Ir("Animation", "AnimationIteration"),
  animationstart: Ir("Animation", "AnimationStart"),
  transitionrun: Ir("Transition", "TransitionRun"),
  transitionstart: Ir("Transition", "TransitionStart"),
  transitioncancel: Ir("Transition", "TransitionCancel"),
  transitionend: Ir("Transition", "TransitionEnd")
};
var Vr = {};
var $r = {};
function jr(e6) {
  if (Vr[e6]) return Vr[e6];
  if (!Ur[e6]) return e6;
  var n5, t5 = Ur[e6];
  for (n5 in t5) if (t5.hasOwnProperty(n5) && n5 in $r) return Vr[e6] = t5[n5];
  return e6;
}
ht && ($r = document.createElement("div").style, "AnimationEvent" in window || (delete Ur.animationend.animation, delete Ur.animationiteration.animation, delete Ur.animationstart.animation), "TransitionEvent" in window || delete Ur.transitionend.transition);
var Br = jr("animationend");
var Hr = jr("animationiteration");
var Qr = jr("animationstart");
var Wr = jr("transitionrun");
var qr = jr("transitionstart");
var Kr = jr("transitioncancel");
var Yr = jr("transitionend");
var Xr = /* @__PURE__ */ new Map();
var Gr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Zr(e6, n5) {
  Xr.set(e6, n5), _n(n5, [
    e6
  ]);
}
Gr.push("scrollEnd");
var Jr = "function" == typeof reportError ? reportError : function(e6) {
  if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
    var n5 = new window.ErrorEvent("error", {
      bubbles: true,
      cancelable: true,
      message: "object" == typeof e6 && null !== e6 && "string" == typeof e6.message ? String(e6.message) : String(e6),
      error: e6
    });
    if (!window.dispatchEvent(n5)) return;
  } else if ("object" == typeof N2 && "function" == typeof N2.emit) return void N2.emit("uncaughtException", e6);
  console.error(e6);
};
var el = [];
var nl = 0;
var tl = 0;
function rl() {
  for (var e6 = nl, n5 = tl = nl = 0; n5 < e6; ) {
    var t5 = el[n5];
    el[n5++] = null;
    var r6 = el[n5];
    el[n5++] = null;
    var l5 = el[n5];
    el[n5++] = null;
    var a6 = el[n5];
    if (el[n5++] = null, null !== r6 && null !== l5) {
      var o5 = r6.pending;
      null === o5 ? l5.next = l5 : (l5.next = o5.next, o5.next = l5), r6.pending = l5;
    }
    0 !== a6 && il(t5, l5, a6);
  }
}
function ll(e6, n5, t5, r6) {
  el[nl++] = e6, el[nl++] = n5, el[nl++] = t5, el[nl++] = r6, tl |= r6, e6.lanes |= r6, null !== (e6 = e6.alternate) && (e6.lanes |= r6);
}
function al(e6, n5, t5, r6) {
  return ll(e6, n5, t5, r6), ul(e6);
}
function ol(e6, n5) {
  return ll(e6, null, null, n5), ul(e6);
}
function il(e6, n5, t5) {
  e6.lanes |= t5;
  var r6 = e6.alternate;
  null !== r6 && (r6.lanes |= t5);
  for (var l5 = false, a6 = e6.return; null !== a6; ) a6.childLanes |= t5, null !== (r6 = a6.alternate) && (r6.childLanes |= t5), 22 === a6.tag && (null === (e6 = a6.stateNode) || 1 & e6._visibility || (l5 = true)), e6 = a6, a6 = a6.return;
  return 3 === e6.tag ? (a6 = e6.stateNode, l5 && null !== n5 && (l5 = 31 - qe2(t5), null === (r6 = (e6 = a6.hiddenUpdates)[l5]) ? e6[l5] = [
    n5
  ] : r6.push(n5), n5.lane = 536870912 | t5), a6) : null;
}
function ul(e6) {
  if (50 < vc) throw vc = 0, yc = null, Error(O3(185));
  for (var n5 = e6.return; null !== n5; ) n5 = (e6 = n5).return;
  return 3 === e6.tag ? e6.stateNode : null;
}
var sl = {};
function cl(e6, n5, t5, r6) {
  this.tag = e6, this.key = t5, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n5, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r6, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function fl(e6, n5, t5, r6) {
  return new cl(e6, n5, t5, r6);
}
function dl(e6) {
  return !(!(e6 = e6.prototype) || !e6.isReactComponent);
}
function pl(e6, n5) {
  var t5 = e6.alternate;
  return null === t5 ? ((t5 = fl(e6.tag, n5, e6.key, e6.mode)).elementType = e6.elementType, t5.type = e6.type, t5.stateNode = e6.stateNode, t5.alternate = e6, e6.alternate = t5) : (t5.pendingProps = n5, t5.type = e6.type, t5.flags = 0, t5.subtreeFlags = 0, t5.deletions = null), t5.flags = 65011712 & e6.flags, t5.childLanes = e6.childLanes, t5.lanes = e6.lanes, t5.child = e6.child, t5.memoizedProps = e6.memoizedProps, t5.memoizedState = e6.memoizedState, t5.updateQueue = e6.updateQueue, n5 = e6.dependencies, t5.dependencies = null === n5 ? null : {
    lanes: n5.lanes,
    firstContext: n5.firstContext
  }, t5.sibling = e6.sibling, t5.index = e6.index, t5.ref = e6.ref, t5.refCleanup = e6.refCleanup, t5;
}
function ml(e6, n5) {
  e6.flags &= 65011714;
  var t5 = e6.alternate;
  return null === t5 ? (e6.childLanes = 0, e6.lanes = n5, e6.child = null, e6.subtreeFlags = 0, e6.memoizedProps = null, e6.memoizedState = null, e6.updateQueue = null, e6.dependencies = null, e6.stateNode = null) : (e6.childLanes = t5.childLanes, e6.lanes = t5.lanes, e6.child = t5.child, e6.subtreeFlags = 0, e6.deletions = null, e6.memoizedProps = t5.memoizedProps, e6.memoizedState = t5.memoizedState, e6.updateQueue = t5.updateQueue, e6.type = t5.type, n5 = t5.dependencies, e6.dependencies = null === n5 ? null : {
    lanes: n5.lanes,
    firstContext: n5.firstContext
  }), e6;
}
function hl(e6, n5, t5, r6, l5, a6) {
  var o5 = 0;
  if (r6 = e6, "function" == typeof e6) dl(e6) && (o5 = 1);
  else if ("string" == typeof e6) o5 = function(e7, n6, t6) {
    if (1 === t6 || null != n6.itemProp) return false;
    switch (e7) {
      case "meta":
      case "title":
        return true;
      case "style":
        if ("string" != typeof n6.precedence || "string" != typeof n6.href || "" === n6.href) break;
        return true;
      case "link":
        if ("string" != typeof n6.rel || "string" != typeof n6.href || "" === n6.href || n6.onLoad || n6.onError) break;
        return "stylesheet" !== n6.rel || (e7 = n6.disabled, "string" == typeof n6.precedence && null == e7);
      case "script":
        if (n6.async && "function" != typeof n6.async && "symbol" != typeof n6.async && !n6.onLoad && !n6.onError && n6.src && "string" == typeof n6.src) return true;
    }
    return false;
  }(e6, t5, ve2.current) ? 26 : "html" === e6 || "head" === e6 || "body" === e6 ? 27 : 5;
  else e: switch (e6) {
    case ee2:
      return (e6 = fl(31, t5, n5, l5)).elementType = ee2, e6.lanes = a6, e6;
    case H2:
      return gl(t5.children, l5, a6, n5);
    case Q2:
      o5 = 8, l5 |= 24;
      break;
    case W2:
      return (e6 = fl(12, t5, n5, 2 | l5)).elementType = W2, e6.lanes = a6, e6;
    case X2:
      return (e6 = fl(13, t5, n5, l5)).elementType = X2, e6.lanes = a6, e6;
    case G2:
      return (e6 = fl(19, t5, n5, l5)).elementType = G2, e6.lanes = a6, e6;
    default:
      if ("object" == typeof e6 && null !== e6) switch (e6.$$typeof) {
        case K2:
          o5 = 10;
          break e;
        case q2:
          o5 = 9;
          break e;
        case Y2:
          o5 = 11;
          break e;
        case Z2:
          o5 = 14;
          break e;
        case J2:
          o5 = 16, r6 = null;
          break e;
      }
      o5 = 29, t5 = Error(O3(130, null === e6 ? "null" : typeof e6, "")), r6 = null;
  }
  return (n5 = fl(o5, t5, n5, l5)).elementType = e6, n5.type = r6, n5.lanes = a6, n5;
}
function gl(e6, n5, t5, r6) {
  return (e6 = fl(7, e6, r6, n5)).lanes = t5, e6;
}
function vl(e6, n5, t5) {
  return (e6 = fl(6, e6, null, n5)).lanes = t5, e6;
}
function yl(e6) {
  var n5 = fl(18, null, null, 0);
  return n5.stateNode = e6, n5;
}
function bl(e6, n5, t5) {
  return (n5 = fl(4, null !== e6.children ? e6.children : [], e6.key, n5)).lanes = t5, n5.stateNode = {
    containerInfo: e6.containerInfo,
    pendingChildren: null,
    implementation: e6.implementation
  }, n5;
}
var kl = /* @__PURE__ */ new WeakMap();
function wl(e6, n5) {
  if ("object" == typeof e6 && null !== e6) {
    var t5 = kl.get(e6);
    return void 0 !== t5 ? t5 : (n5 = {
      value: e6,
      source: n5,
      stack: Te2(n5)
    }, kl.set(e6, n5), n5);
  }
  return {
    value: e6,
    source: n5,
    stack: Te2(n5)
  };
}
var Sl = [];
var El = 0;
var xl = null;
var Cl = 0;
var zl = [];
var Pl = 0;
var Nl = null;
var Tl = 1;
var Ll = "";
function _l(e6, n5) {
  Sl[El++] = Cl, Sl[El++] = xl, xl = e6, Cl = n5;
}
function Fl(e6, n5, t5) {
  zl[Pl++] = Tl, zl[Pl++] = Ll, zl[Pl++] = Nl, Nl = e6;
  var r6 = Tl;
  e6 = Ll;
  var l5 = 32 - qe2(r6) - 1;
  r6 &= ~(1 << l5), t5 += 1;
  var a6 = 32 - qe2(n5) + l5;
  if (30 < a6) {
    var o5 = l5 - l5 % 5;
    a6 = (r6 & (1 << o5) - 1).toString(32), r6 >>= o5, l5 -= o5, Tl = 1 << 32 - qe2(n5) + l5 | t5 << l5 | r6, Ll = a6 + e6;
  } else Tl = 1 << a6 | t5 << l5 | r6, Ll = e6;
}
function Ol(e6) {
  null !== e6.return && (_l(e6, 1), Fl(e6, 1, 0));
}
function Dl(e6) {
  for (; e6 === xl; ) xl = Sl[--El], Sl[El] = null, Cl = Sl[--El], Sl[El] = null;
  for (; e6 === Nl; ) Nl = zl[--Pl], zl[Pl] = null, Ll = zl[--Pl], zl[Pl] = null, Tl = zl[--Pl], zl[Pl] = null;
}
function Al(e6, n5) {
  zl[Pl++] = Tl, zl[Pl++] = Ll, zl[Pl++] = Nl, Tl = n5.id, Ll = n5.overflow, Nl = e6;
}
var Ml = null;
var Rl = null;
var Il = false;
var Ul = null;
var Vl = false;
var $l = Error(O3(519));
function jl(e6) {
  throw Kl(wl(Error(O3(418, 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML", "")), e6)), $l;
}
function Bl(e6) {
  var n5 = e6.stateNode, t5 = e6.type, r6 = e6.memoizedProps;
  switch (n5[hn] = e6, n5[gn] = r6, t5) {
    case "dialog":
      xf("cancel", n5), xf("close", n5);
      break;
    case "iframe":
    case "object":
    case "embed":
      xf("load", n5);
      break;
    case "video":
    case "audio":
      for (t5 = 0; t5 < wf.length; t5++) xf(wf[t5], n5);
      break;
    case "source":
      xf("error", n5);
      break;
    case "img":
    case "image":
    case "link":
      xf("error", n5), xf("load", n5);
      break;
    case "details":
      xf("toggle", n5);
      break;
    case "input":
      xf("invalid", n5), qn(n5, r6.value, r6.defaultValue, r6.checked, r6.defaultChecked, r6.type, r6.name, true);
      break;
    case "select":
      xf("invalid", n5);
      break;
    case "textarea":
      xf("invalid", n5), Gn(n5, r6.value, r6.defaultValue, r6.children);
  }
  "string" != typeof (t5 = r6.children) && "number" != typeof t5 && "bigint" != typeof t5 || n5.textContent === "" + t5 || true === r6.suppressHydrationWarning || Rf(n5.textContent, t5) ? (null != r6.popover && (xf("beforetoggle", n5), xf("toggle", n5)), null != r6.onScroll && xf("scroll", n5), null != r6.onScrollEnd && xf("scrollend", n5), null != r6.onClick && (n5.onclick = ot), n5 = true) : n5 = false, n5 || jl(e6, true);
}
function Hl(e6) {
  for (Ml = e6.return; Ml; ) switch (Ml.tag) {
    case 5:
    case 31:
    case 13:
      return void (Vl = false);
    case 27:
    case 3:
      return void (Vl = true);
    default:
      Ml = Ml.return;
  }
}
function Ql(e6) {
  if (e6 !== Ml) return false;
  if (!Il) return Hl(e6), Il = true, false;
  var n5, t5 = e6.tag;
  if ((n5 = 3 !== t5 && 27 !== t5) && ((n5 = 5 === t5) && (n5 = !("form" !== (n5 = e6.type) && "button" !== n5) || qf(e6.type, e6.memoizedProps)), n5 = !n5), n5 && Rl && jl(e6), Hl(e6), 13 === t5) {
    if (!(e6 = null !== (e6 = e6.memoizedState) ? e6.dehydrated : null)) throw Error(O3(317));
    Rl = sd(e6);
  } else if (31 === t5) {
    if (!(e6 = null !== (e6 = e6.memoizedState) ? e6.dehydrated : null)) throw Error(O3(317));
    Rl = sd(e6);
  } else 27 === t5 ? (t5 = Rl, ed(e6.type) ? (e6 = ud, ud = null, Rl = e6) : Rl = t5) : Rl = Ml ? id(e6.stateNode.nextSibling) : null;
  return true;
}
function Wl() {
  Rl = Ml = null, Il = false;
}
function ql() {
  var e6 = Ul;
  return null !== e6 && (null === rc ? rc = e6 : rc.push.apply(rc, e6), Ul = null), e6;
}
function Kl(e6) {
  null === Ul ? Ul = [
    e6
  ] : Ul.push(e6);
}
var Yl = de2(null);
var Xl = null;
var Gl = null;
function Zl(e6, n5, t5) {
  me2(Yl, n5._currentValue), n5._currentValue = t5;
}
function Jl(e6) {
  e6._currentValue = Yl.current, pe2(Yl);
}
function ea(e6, n5, t5) {
  for (; null !== e6; ) {
    var r6 = e6.alternate;
    if ((e6.childLanes & n5) !== n5 ? (e6.childLanes |= n5, null !== r6 && (r6.childLanes |= n5)) : null !== r6 && (r6.childLanes & n5) !== n5 && (r6.childLanes |= n5), e6 === t5) break;
    e6 = e6.return;
  }
}
function na(e6, n5, t5, r6) {
  var l5 = e6.child;
  for (null !== l5 && (l5.return = e6); null !== l5; ) {
    var a6 = l5.dependencies;
    if (null !== a6) {
      var o5 = l5.child;
      a6 = a6.firstContext;
      e: for (; null !== a6; ) {
        var i5 = a6;
        a6 = l5;
        for (var u5 = 0; u5 < n5.length; u5++) if (i5.context === n5[u5]) {
          a6.lanes |= t5, null !== (i5 = a6.alternate) && (i5.lanes |= t5), ea(a6.return, t5, e6), r6 || (o5 = null);
          break e;
        }
        a6 = i5.next;
      }
    } else if (18 === l5.tag) {
      if (null === (o5 = l5.return)) throw Error(O3(341));
      o5.lanes |= t5, null !== (a6 = o5.alternate) && (a6.lanes |= t5), ea(o5, t5, e6), o5 = null;
    } else o5 = l5.child;
    if (null !== o5) o5.return = l5;
    else for (o5 = l5; null !== o5; ) {
      if (o5 === e6) {
        o5 = null;
        break;
      }
      if (null !== (l5 = o5.sibling)) {
        l5.return = o5.return, o5 = l5;
        break;
      }
      o5 = o5.return;
    }
    l5 = o5;
  }
}
function ta(e6, n5, t5, r6) {
  e6 = null;
  for (var l5 = n5, a6 = false; null !== l5; ) {
    if (!a6) {
      if (524288 & l5.flags) a6 = true;
      else if (262144 & l5.flags) break;
    }
    if (10 === l5.tag) {
      var o5 = l5.alternate;
      if (null === o5) throw Error(O3(387));
      if (null !== (o5 = o5.memoizedProps)) {
        var i5 = l5.type;
        Cr(l5.pendingProps.value, o5.value) || (null !== e6 ? e6.push(i5) : e6 = [
          i5
        ]);
      }
    } else if (l5 === ke2.current) {
      if (null === (o5 = l5.alternate)) throw Error(O3(387));
      o5.memoizedState.memoizedState !== l5.memoizedState.memoizedState && (null !== e6 ? e6.push(Id) : e6 = [
        Id
      ]);
    }
    l5 = l5.return;
  }
  null !== e6 && na(n5, e6, t5, r6), n5.flags |= 262144;
}
function ra(e6) {
  for (e6 = e6.firstContext; null !== e6; ) {
    if (!Cr(e6.context._currentValue, e6.memoizedValue)) return true;
    e6 = e6.next;
  }
  return false;
}
function la(e6) {
  Xl = e6, Gl = null, null !== (e6 = e6.dependencies) && (e6.firstContext = null);
}
function aa(e6) {
  return ia(Xl, e6);
}
function oa(e6, n5) {
  return null === Xl && la(e6), ia(e6, n5);
}
function ia(e6, n5) {
  var t5 = n5._currentValue;
  if (n5 = {
    context: n5,
    memoizedValue: t5,
    next: null
  }, null === Gl) {
    if (null === e6) throw Error(O3(308));
    Gl = n5, e6.dependencies = {
      lanes: 0,
      firstContext: n5
    }, e6.flags |= 524288;
  } else Gl = Gl.next = n5;
  return t5;
}
var ua = "undefined" != typeof AbortController ? AbortController : function() {
  var e6 = [], n5 = this.signal = {
    aborted: false,
    addEventListener: function(n6, t5) {
      e6.push(t5);
    }
  };
  this.abort = function() {
    n5.aborted = true, e6.forEach(function(e7) {
      return e7();
    });
  };
};
var sa = L2.unstable_scheduleCallback;
var ca = L2.unstable_NormalPriority;
var fa = {
  $$typeof: K2,
  Consumer: null,
  Provider: null,
  _currentValue: null,
  _currentValue2: null,
  _threadCount: 0
};
function da() {
  return {
    controller: new ua(),
    data: /* @__PURE__ */ new Map(),
    refCount: 0
  };
}
function pa(e6) {
  e6.refCount--, 0 === e6.refCount && sa(ca, function() {
    e6.controller.abort();
  });
}
var ma = null;
var ha = 0;
var ga = 0;
var va = null;
function ya() {
  if (0 == --ha && null !== ma) {
    null !== va && (va.status = "fulfilled");
    var e6 = ma;
    ma = null, ga = 0, va = null;
    for (var n5 = 0; n5 < e6.length; n5++) (0, e6[n5])();
  }
}
var ba = ie2.S;
ie2.S = function(e6, n5) {
  oc = Ae2(), "object" == typeof n5 && null !== n5 && "function" == typeof n5.then && function(e7, n6) {
    if (null === ma) {
      var t5 = ma = [];
      ha = 0, ga = gf(), va = {
        status: "pending",
        value: void 0,
        then: function(e8) {
          t5.push(e8);
        }
      };
    }
    ha++, n6.then(ya, ya);
  }(0, n5), null !== ba && ba(e6, n5);
};
var ka = de2(null);
function wa() {
  var e6 = ka.current;
  return null !== e6 ? e6 : $s.pooledCache;
}
function Sa(e6, n5) {
  me2(ka, null === n5 ? ka.current : n5.pool);
}
function Ea() {
  var e6 = wa();
  return null === e6 ? null : {
    parent: fa._currentValue,
    pool: e6
  };
}
var xa = Error(O3(460));
var Ca = Error(O3(474));
var za = Error(O3(542));
var Pa = {
  then: function() {
  }
};
function Na(e6) {
  return "fulfilled" === (e6 = e6.status) || "rejected" === e6;
}
function Ta(e6, n5, t5) {
  switch (void 0 === (t5 = e6[t5]) ? e6.push(n5) : t5 !== n5 && (n5.then(ot, ot), n5 = t5), n5.status) {
    case "fulfilled":
      return n5.value;
    case "rejected":
      throw Oa(e6 = n5.reason), e6;
    default:
      if ("string" == typeof n5.status) n5.then(ot, ot);
      else {
        if (null !== (e6 = $s) && 100 < e6.shellSuspendCounter) throw Error(O3(482));
        (e6 = n5).status = "pending", e6.then(function(e7) {
          if ("pending" === n5.status) {
            var t6 = n5;
            t6.status = "fulfilled", t6.value = e7;
          }
        }, function(e7) {
          if ("pending" === n5.status) {
            var t6 = n5;
            t6.status = "rejected", t6.reason = e7;
          }
        });
      }
      switch (n5.status) {
        case "fulfilled":
          return n5.value;
        case "rejected":
          throw Oa(e6 = n5.reason), e6;
      }
      throw _a = n5, xa;
  }
}
function La(e6) {
  try {
    return (0, e6._init)(e6._payload);
  } catch (e7) {
    if (null !== e7 && "object" == typeof e7 && "function" == typeof e7.then) throw _a = e7, xa;
    throw e7;
  }
}
var _a = null;
function Fa() {
  if (null === _a) throw Error(O3(459));
  var e6 = _a;
  return _a = null, e6;
}
function Oa(e6) {
  if (e6 === xa || e6 === za) throw Error(O3(483));
}
var Da = null;
var Aa = 0;
function Ma(e6) {
  var n5 = Aa;
  return Aa += 1, null === Da && (Da = []), Ta(Da, e6, n5);
}
function Ra(e6, n5) {
  n5 = n5.props.ref, e6.ref = void 0 !== n5 ? n5 : null;
}
function Ia(e6, n5) {
  if (n5.$$typeof === $2) throw Error(O3(525));
  throw e6 = Object.prototype.toString.call(n5), Error(O3(31, "[object Object]" === e6 ? "object with keys {" + Object.keys(n5).join(", ") + "}" : e6));
}
function Ua(e6) {
  function n5(n6, t6) {
    if (e6) {
      var r7 = n6.deletions;
      null === r7 ? (n6.deletions = [
        t6
      ], n6.flags |= 16) : r7.push(t6);
    }
  }
  function t5(t6, r7) {
    if (!e6) return null;
    for (; null !== r7; ) n5(t6, r7), r7 = r7.sibling;
    return null;
  }
  function r6(e7) {
    for (var n6 = /* @__PURE__ */ new Map(); null !== e7; ) null !== e7.key ? n6.set(e7.key, e7) : n6.set(e7.index, e7), e7 = e7.sibling;
    return n6;
  }
  function l5(e7, n6) {
    return (e7 = pl(e7, n6)).index = 0, e7.sibling = null, e7;
  }
  function a6(n6, t6, r7) {
    return n6.index = r7, e6 ? null !== (r7 = n6.alternate) ? (r7 = r7.index) < t6 ? (n6.flags |= 67108866, t6) : r7 : (n6.flags |= 67108866, t6) : (n6.flags |= 1048576, t6);
  }
  function o5(n6) {
    return e6 && null === n6.alternate && (n6.flags |= 67108866), n6;
  }
  function i5(e7, n6, t6, r7) {
    return null === n6 || 6 !== n6.tag ? ((n6 = vl(t6, e7.mode, r7)).return = e7, n6) : ((n6 = l5(n6, t6)).return = e7, n6);
  }
  function u5(e7, n6, t6, r7) {
    var a7 = t6.type;
    return a7 === H2 ? c5(e7, n6, t6.props.children, r7, t6.key) : null !== n6 && (n6.elementType === a7 || "object" == typeof a7 && null !== a7 && a7.$$typeof === J2 && La(a7) === n6.type) ? (Ra(n6 = l5(n6, t6.props), t6), n6.return = e7, n6) : (Ra(n6 = hl(t6.type, t6.key, t6.props, null, e7.mode, r7), t6), n6.return = e7, n6);
  }
  function s6(e7, n6, t6, r7) {
    return null === n6 || 4 !== n6.tag || n6.stateNode.containerInfo !== t6.containerInfo || n6.stateNode.implementation !== t6.implementation ? ((n6 = bl(t6, e7.mode, r7)).return = e7, n6) : ((n6 = l5(n6, t6.children || [])).return = e7, n6);
  }
  function c5(e7, n6, t6, r7, a7) {
    return null === n6 || 7 !== n6.tag ? ((n6 = gl(t6, e7.mode, r7, a7)).return = e7, n6) : ((n6 = l5(n6, t6)).return = e7, n6);
  }
  function f5(e7, n6, t6) {
    if ("string" == typeof n6 && "" !== n6 || "number" == typeof n6 || "bigint" == typeof n6) return (n6 = vl("" + n6, e7.mode, t6)).return = e7, n6;
    if ("object" == typeof n6 && null !== n6) {
      switch (n6.$$typeof) {
        case j2:
          return Ra(t6 = hl(n6.type, n6.key, n6.props, null, e7.mode, t6), n6), t6.return = e7, t6;
        case B2:
          return (n6 = bl(n6, e7.mode, t6)).return = e7, n6;
        case J2:
          return f5(e7, n6 = La(n6), t6);
      }
      if (oe2(n6) || re2(n6)) return (n6 = gl(n6, e7.mode, t6, null)).return = e7, n6;
      if ("function" == typeof n6.then) return f5(e7, Ma(n6), t6);
      if (n6.$$typeof === K2) return f5(e7, oa(e7, n6), t6);
      Ia(e7, n6);
    }
    return null;
  }
  function d5(e7, n6, t6, r7) {
    var l6 = null !== n6 ? n6.key : null;
    if ("string" == typeof t6 && "" !== t6 || "number" == typeof t6 || "bigint" == typeof t6) return null !== l6 ? null : i5(e7, n6, "" + t6, r7);
    if ("object" == typeof t6 && null !== t6) {
      switch (t6.$$typeof) {
        case j2:
          return t6.key === l6 ? u5(e7, n6, t6, r7) : null;
        case B2:
          return t6.key === l6 ? s6(e7, n6, t6, r7) : null;
        case J2:
          return d5(e7, n6, t6 = La(t6), r7);
      }
      if (oe2(t6) || re2(t6)) return null !== l6 ? null : c5(e7, n6, t6, r7, null);
      if ("function" == typeof t6.then) return d5(e7, n6, Ma(t6), r7);
      if (t6.$$typeof === K2) return d5(e7, n6, oa(e7, t6), r7);
      Ia(e7, t6);
    }
    return null;
  }
  function p5(e7, n6, t6, r7, l6) {
    if ("string" == typeof r7 && "" !== r7 || "number" == typeof r7 || "bigint" == typeof r7) return i5(n6, e7 = e7.get(t6) || null, "" + r7, l6);
    if ("object" == typeof r7 && null !== r7) {
      switch (r7.$$typeof) {
        case j2:
          return u5(n6, e7 = e7.get(null === r7.key ? t6 : r7.key) || null, r7, l6);
        case B2:
          return s6(n6, e7 = e7.get(null === r7.key ? t6 : r7.key) || null, r7, l6);
        case J2:
          return p5(e7, n6, t6, r7 = La(r7), l6);
      }
      if (oe2(r7) || re2(r7)) return c5(n6, e7 = e7.get(t6) || null, r7, l6, null);
      if ("function" == typeof r7.then) return p5(e7, n6, t6, Ma(r7), l6);
      if (r7.$$typeof === K2) return p5(e7, n6, t6, oa(n6, r7), l6);
      Ia(n6, r7);
    }
    return null;
  }
  function m4(i6, u6, s7, c6) {
    if ("object" == typeof s7 && null !== s7 && s7.type === H2 && null === s7.key && (s7 = s7.props.children), "object" == typeof s7 && null !== s7) {
      switch (s7.$$typeof) {
        case j2:
          e: {
            for (var h4 = s7.key; null !== u6; ) {
              if (u6.key === h4) {
                if ((h4 = s7.type) === H2) {
                  if (7 === u6.tag) {
                    t5(i6, u6.sibling), (c6 = l5(u6, s7.props.children)).return = i6, i6 = c6;
                    break e;
                  }
                } else if (u6.elementType === h4 || "object" == typeof h4 && null !== h4 && h4.$$typeof === J2 && La(h4) === u6.type) {
                  t5(i6, u6.sibling), Ra(c6 = l5(u6, s7.props), s7), c6.return = i6, i6 = c6;
                  break e;
                }
                t5(i6, u6);
                break;
              }
              n5(i6, u6), u6 = u6.sibling;
            }
            s7.type === H2 ? ((c6 = gl(s7.props.children, i6.mode, c6, s7.key)).return = i6, i6 = c6) : (Ra(c6 = hl(s7.type, s7.key, s7.props, null, i6.mode, c6), s7), c6.return = i6, i6 = c6);
          }
          return o5(i6);
        case B2:
          e: {
            for (h4 = s7.key; null !== u6; ) {
              if (u6.key === h4) {
                if (4 === u6.tag && u6.stateNode.containerInfo === s7.containerInfo && u6.stateNode.implementation === s7.implementation) {
                  t5(i6, u6.sibling), (c6 = l5(u6, s7.children || [])).return = i6, i6 = c6;
                  break e;
                }
                t5(i6, u6);
                break;
              }
              n5(i6, u6), u6 = u6.sibling;
            }
            (c6 = bl(s7, i6.mode, c6)).return = i6, i6 = c6;
          }
          return o5(i6);
        case J2:
          return m4(i6, u6, s7 = La(s7), c6);
      }
      if (oe2(s7)) return function(l6, o6, i7, u7) {
        for (var s8 = null, c7 = null, m5 = o6, h5 = o6 = 0, g4 = null; null !== m5 && h5 < i7.length; h5++) {
          m5.index > h5 ? (g4 = m5, m5 = null) : g4 = m5.sibling;
          var v5 = d5(l6, m5, i7[h5], u7);
          if (null === v5) {
            null === m5 && (m5 = g4);
            break;
          }
          e6 && m5 && null === v5.alternate && n5(l6, m5), o6 = a6(v5, o6, h5), null === c7 ? s8 = v5 : c7.sibling = v5, c7 = v5, m5 = g4;
        }
        if (h5 === i7.length) return t5(l6, m5), Il && _l(l6, h5), s8;
        if (null === m5) {
          for (; h5 < i7.length; h5++) null !== (m5 = f5(l6, i7[h5], u7)) && (o6 = a6(m5, o6, h5), null === c7 ? s8 = m5 : c7.sibling = m5, c7 = m5);
          return Il && _l(l6, h5), s8;
        }
        for (m5 = r6(m5); h5 < i7.length; h5++) null !== (g4 = p5(m5, l6, h5, i7[h5], u7)) && (e6 && null !== g4.alternate && m5.delete(null === g4.key ? h5 : g4.key), o6 = a6(g4, o6, h5), null === c7 ? s8 = g4 : c7.sibling = g4, c7 = g4);
        return e6 && m5.forEach(function(e7) {
          return n5(l6, e7);
        }), Il && _l(l6, h5), s8;
      }(i6, u6, s7, c6);
      if (re2(s7)) {
        if ("function" != typeof (h4 = re2(s7))) throw Error(O3(150));
        return function(l6, o6, i7, u7) {
          if (null == i7) throw Error(O3(151));
          for (var s8 = null, c7 = null, m5 = o6, h5 = o6 = 0, g4 = null, v5 = i7.next(); null !== m5 && !v5.done; h5++, v5 = i7.next()) {
            m5.index > h5 ? (g4 = m5, m5 = null) : g4 = m5.sibling;
            var y5 = d5(l6, m5, v5.value, u7);
            if (null === y5) {
              null === m5 && (m5 = g4);
              break;
            }
            e6 && m5 && null === y5.alternate && n5(l6, m5), o6 = a6(y5, o6, h5), null === c7 ? s8 = y5 : c7.sibling = y5, c7 = y5, m5 = g4;
          }
          if (v5.done) return t5(l6, m5), Il && _l(l6, h5), s8;
          if (null === m5) {
            for (; !v5.done; h5++, v5 = i7.next()) null !== (v5 = f5(l6, v5.value, u7)) && (o6 = a6(v5, o6, h5), null === c7 ? s8 = v5 : c7.sibling = v5, c7 = v5);
            return Il && _l(l6, h5), s8;
          }
          for (m5 = r6(m5); !v5.done; h5++, v5 = i7.next()) null !== (v5 = p5(m5, l6, h5, v5.value, u7)) && (e6 && null !== v5.alternate && m5.delete(null === v5.key ? h5 : v5.key), o6 = a6(v5, o6, h5), null === c7 ? s8 = v5 : c7.sibling = v5, c7 = v5);
          return e6 && m5.forEach(function(e7) {
            return n5(l6, e7);
          }), Il && _l(l6, h5), s8;
        }(i6, u6, s7 = h4.call(s7), c6);
      }
      if ("function" == typeof s7.then) return m4(i6, u6, Ma(s7), c6);
      if (s7.$$typeof === K2) return m4(i6, u6, oa(i6, s7), c6);
      Ia(i6, s7);
    }
    return "string" == typeof s7 && "" !== s7 || "number" == typeof s7 || "bigint" == typeof s7 ? (s7 = "" + s7, null !== u6 && 6 === u6.tag ? (t5(i6, u6.sibling), (c6 = l5(u6, s7)).return = i6, i6 = c6) : (t5(i6, u6), (c6 = vl(s7, i6.mode, c6)).return = i6, i6 = c6), o5(i6)) : t5(i6, u6);
  }
  return function(e7, n6, t6, r7) {
    try {
      Aa = 0;
      var l6 = m4(e7, n6, t6, r7);
      return Da = null, l6;
    } catch (n7) {
      if (n7 === xa || n7 === za) throw n7;
      var a7 = fl(29, n7, null, e7.mode);
      return a7.lanes = r7, a7.return = e7, a7;
    }
  };
}
var Va = Ua(true);
var $a = Ua(false);
var ja = false;
function Ba(e6) {
  e6.updateQueue = {
    baseState: e6.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      lanes: 0,
      hiddenCallbacks: null
    },
    callbacks: null
  };
}
function Ha(e6, n5) {
  e6 = e6.updateQueue, n5.updateQueue === e6 && (n5.updateQueue = {
    baseState: e6.baseState,
    firstBaseUpdate: e6.firstBaseUpdate,
    lastBaseUpdate: e6.lastBaseUpdate,
    shared: e6.shared,
    callbacks: null
  });
}
function Qa(e6) {
  return {
    lane: e6,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function Wa(e6, n5, t5) {
  var r6 = e6.updateQueue;
  if (null === r6) return null;
  if (r6 = r6.shared, 2 & Vs) {
    var l5 = r6.pending;
    return null === l5 ? n5.next = n5 : (n5.next = l5.next, l5.next = n5), r6.pending = n5, n5 = ul(e6), il(e6, null, t5), n5;
  }
  return ll(e6, r6, n5, t5), ul(e6);
}
function qa(e6, n5, t5) {
  if (null !== (n5 = n5.updateQueue) && (n5 = n5.shared, 4194048 & t5)) {
    var r6 = n5.lanes;
    t5 |= r6 &= e6.pendingLanes, n5.lanes = t5, un(e6, t5);
  }
}
function Ka(e6, n5) {
  var t5 = e6.updateQueue, r6 = e6.alternate;
  if (null !== r6 && t5 === (r6 = r6.updateQueue)) {
    var l5 = null, a6 = null;
    if (null !== (t5 = t5.firstBaseUpdate)) {
      do {
        var o5 = {
          lane: t5.lane,
          tag: t5.tag,
          payload: t5.payload,
          callback: null,
          next: null
        };
        null === a6 ? l5 = a6 = o5 : a6 = a6.next = o5, t5 = t5.next;
      } while (null !== t5);
      null === a6 ? l5 = a6 = n5 : a6 = a6.next = n5;
    } else l5 = a6 = n5;
    return t5 = {
      baseState: r6.baseState,
      firstBaseUpdate: l5,
      lastBaseUpdate: a6,
      shared: r6.shared,
      callbacks: r6.callbacks
    }, void (e6.updateQueue = t5);
  }
  null === (e6 = t5.lastBaseUpdate) ? t5.firstBaseUpdate = n5 : e6.next = n5, t5.lastBaseUpdate = n5;
}
var Ya = false;
function Xa() {
  if (Ya) {
    if (null !== va) throw va;
  }
}
function Ga(e6, n5, t5, r6) {
  Ya = false;
  var l5 = e6.updateQueue;
  ja = false;
  var a6 = l5.firstBaseUpdate, o5 = l5.lastBaseUpdate, i5 = l5.shared.pending;
  if (null !== i5) {
    l5.shared.pending = null;
    var u5 = i5, s6 = u5.next;
    u5.next = null, null === o5 ? a6 = s6 : o5.next = s6, o5 = u5;
    var c5 = e6.alternate;
    null !== c5 && ((i5 = (c5 = c5.updateQueue).lastBaseUpdate) !== o5 && (null === i5 ? c5.firstBaseUpdate = s6 : i5.next = s6, c5.lastBaseUpdate = u5));
  }
  if (null !== a6) {
    var f5 = l5.baseState;
    for (o5 = 0, c5 = s6 = u5 = null, i5 = a6; ; ) {
      var d5 = -536870913 & i5.lane, p5 = d5 !== i5.lane;
      if (p5 ? (Bs & d5) === d5 : (r6 & d5) === d5) {
        0 !== d5 && d5 === ga && (Ya = true), null !== c5 && (c5 = c5.next = {
          lane: 0,
          tag: i5.tag,
          payload: i5.payload,
          callback: null,
          next: null
        });
        e: {
          var m4 = e6, h4 = i5;
          d5 = n5;
          var g4 = t5;
          switch (h4.tag) {
            case 1:
              if ("function" == typeof (m4 = h4.payload)) {
                f5 = m4.call(g4, f5, d5);
                break e;
              }
              f5 = m4;
              break e;
            case 3:
              m4.flags = -65537 & m4.flags | 128;
            case 0:
              if (null == (d5 = "function" == typeof (m4 = h4.payload) ? m4.call(g4, f5, d5) : m4)) break e;
              f5 = V2({}, f5, d5);
              break e;
            case 2:
              ja = true;
          }
        }
        null !== (d5 = i5.callback) && (e6.flags |= 64, p5 && (e6.flags |= 8192), null === (p5 = l5.callbacks) ? l5.callbacks = [
          d5
        ] : p5.push(d5));
      } else p5 = {
        lane: d5,
        tag: i5.tag,
        payload: i5.payload,
        callback: i5.callback,
        next: null
      }, null === c5 ? (s6 = c5 = p5, u5 = f5) : c5 = c5.next = p5, o5 |= d5;
      if (null === (i5 = i5.next)) {
        if (null === (i5 = l5.shared.pending)) break;
        i5 = (p5 = i5).next, p5.next = null, l5.lastBaseUpdate = p5, l5.shared.pending = null;
      }
    }
    null === c5 && (u5 = f5), l5.baseState = u5, l5.firstBaseUpdate = s6, l5.lastBaseUpdate = c5, null === a6 && (l5.shared.lanes = 0), Gs |= o5, e6.lanes = o5, e6.memoizedState = f5;
  }
}
function Za(e6, n5) {
  if ("function" != typeof e6) throw Error(O3(191, e6));
  e6.call(n5);
}
function Ja(e6, n5) {
  var t5 = e6.callbacks;
  if (null !== t5) for (e6.callbacks = null, e6 = 0; e6 < t5.length; e6++) Za(t5[e6], n5);
}
var eo = de2(null);
var no = de2(0);
function to(e6, n5) {
  me2(no, e6 = Ys), me2(eo, n5), Ys = e6 | n5.baseLanes;
}
function ro() {
  me2(no, Ys), me2(eo, eo.current);
}
function lo() {
  Ys = no.current, pe2(eo), pe2(no);
}
var ao = de2(null);
var oo = null;
function io(e6) {
  var n5 = e6.alternate;
  me2(po, 1 & po.current), me2(ao, e6), null === oo && (null === n5 || null !== eo.current || null !== n5.memoizedState) && (oo = e6);
}
function uo(e6) {
  me2(po, po.current), me2(ao, e6), null === oo && (oo = e6);
}
function so(e6) {
  22 === e6.tag ? (me2(po, po.current), me2(ao, e6), null === oo && (oo = e6)) : co();
}
function co() {
  me2(po, po.current), me2(ao, ao.current);
}
function fo(e6) {
  pe2(ao), oo === e6 && (oo = null), pe2(po);
}
var po = de2(0);
function mo(e6) {
  for (var n5 = e6; null !== n5; ) {
    if (13 === n5.tag) {
      var t5 = n5.memoizedState;
      if (null !== t5 && (null === (t5 = t5.dehydrated) || ad(t5) || od(t5))) return n5;
    } else if (19 !== n5.tag || "forwards" !== n5.memoizedProps.revealOrder && "backwards" !== n5.memoizedProps.revealOrder && "unstable_legacy-backwards" !== n5.memoizedProps.revealOrder && "together" !== n5.memoizedProps.revealOrder) {
      if (null !== n5.child) {
        n5.child.return = n5, n5 = n5.child;
        continue;
      }
    } else if (128 & n5.flags) return n5;
    if (n5 === e6) break;
    for (; null === n5.sibling; ) {
      if (null === n5.return || n5.return === e6) return null;
      n5 = n5.return;
    }
    n5.sibling.return = n5.return, n5 = n5.sibling;
  }
  return null;
}
var ho = 0;
var go = null;
var vo = null;
var yo = null;
var bo = false;
var ko = false;
var wo = false;
var So = 0;
var Eo = 0;
var xo = null;
var Co = 0;
function zo() {
  throw Error(O3(321));
}
function Po(e6, n5) {
  if (null === n5) return false;
  for (var t5 = 0; t5 < n5.length && t5 < e6.length; t5++) if (!Cr(e6[t5], n5[t5])) return false;
  return true;
}
function No(e6, n5, t5, r6, l5, a6) {
  return ho = a6, go = n5, n5.memoizedState = null, n5.updateQueue = null, n5.lanes = 0, ie2.H = null === e6 || null === e6.memoizedState ? Bi : Hi, wo = false, a6 = t5(r6, l5), wo = false, ko && (a6 = Lo(n5, t5, r6, l5)), To(e6), a6;
}
function To(e6) {
  ie2.H = ji;
  var n5 = null !== vo && null !== vo.next;
  if (ho = 0, yo = vo = go = null, bo = false, Eo = 0, xo = null, n5) throw Error(O3(300));
  null === e6 || ou || null !== (e6 = e6.dependencies) && ra(e6) && (ou = true);
}
function Lo(e6, n5, t5, r6) {
  go = e6;
  var l5 = 0;
  do {
    if (ko && (xo = null), Eo = 0, ko = false, 25 <= l5) throw Error(O3(301));
    if (l5 += 1, yo = vo = null, null != e6.updateQueue) {
      var a6 = e6.updateQueue;
      a6.lastEffect = null, a6.events = null, a6.stores = null, null != a6.memoCache && (a6.memoCache.index = 0);
    }
    ie2.H = Qi, a6 = n5(t5, r6);
  } while (ko);
  return a6;
}
function _o() {
  var e6 = ie2.H, n5 = e6.useState()[0];
  return n5 = "function" == typeof n5.then ? Ro(n5) : n5, e6 = e6.useState()[0], (null !== vo ? vo.memoizedState : null) !== e6 && (go.flags |= 1024), n5;
}
function Fo() {
  var e6 = 0 !== So;
  return So = 0, e6;
}
function Oo(e6, n5, t5) {
  n5.updateQueue = e6.updateQueue, n5.flags &= -2053, e6.lanes &= ~t5;
}
function Do(e6) {
  if (bo) {
    for (e6 = e6.memoizedState; null !== e6; ) {
      var n5 = e6.queue;
      null !== n5 && (n5.pending = null), e6 = e6.next;
    }
    bo = false;
  }
  ho = 0, yo = vo = go = null, ko = false, Eo = So = 0, xo = null;
}
function Ao() {
  var e6 = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return null === yo ? go.memoizedState = yo = e6 : yo = yo.next = e6, yo;
}
function Mo() {
  if (null === vo) {
    var e6 = go.alternate;
    e6 = null !== e6 ? e6.memoizedState : null;
  } else e6 = vo.next;
  var n5 = null === yo ? go.memoizedState : yo.next;
  if (null !== n5) yo = n5, vo = e6;
  else {
    if (null === e6) {
      if (null === go.alternate) throw Error(O3(467));
      throw Error(O3(310));
    }
    e6 = {
      memoizedState: (vo = e6).memoizedState,
      baseState: vo.baseState,
      baseQueue: vo.baseQueue,
      queue: vo.queue,
      next: null
    }, null === yo ? go.memoizedState = yo = e6 : yo = yo.next = e6;
  }
  return yo;
}
function Ro(e6) {
  var n5 = Eo;
  return Eo += 1, null === xo && (xo = []), e6 = Ta(xo, e6, n5), n5 = go, null === (null === yo ? n5.memoizedState : yo.next) && (n5 = n5.alternate, ie2.H = null === n5 || null === n5.memoizedState ? Bi : Hi), e6;
}
function Io(e6) {
  if (null !== e6 && "object" == typeof e6) {
    if ("function" == typeof e6.then) return Ro(e6);
    if (e6.$$typeof === K2) return aa(e6);
  }
  throw Error(O3(438, String(e6)));
}
function Uo(e6) {
  var n5 = null, t5 = go.updateQueue;
  if (null !== t5 && (n5 = t5.memoCache), null == n5) {
    var r6 = go.alternate;
    null !== r6 && (null !== (r6 = r6.updateQueue) && (null != (r6 = r6.memoCache) && (n5 = {
      data: r6.data.map(function(e7) {
        return e7.slice();
      }),
      index: 0
    })));
  }
  if (null == n5 && (n5 = {
    data: [],
    index: 0
  }), null === t5 && (t5 = {
    lastEffect: null,
    events: null,
    stores: null,
    memoCache: null
  }, go.updateQueue = t5), t5.memoCache = n5, void 0 === (t5 = n5.data[n5.index])) for (t5 = n5.data[n5.index] = Array(e6), r6 = 0; r6 < e6; r6++) t5[r6] = ne2;
  return n5.index++, t5;
}
function Vo(e6, n5) {
  return "function" == typeof n5 ? n5(e6) : n5;
}
function $o(e6) {
  return jo(Mo(), vo, e6);
}
function jo(e6, n5, t5) {
  var r6 = e6.queue;
  if (null === r6) throw Error(O3(311));
  r6.lastRenderedReducer = t5;
  var l5 = e6.baseQueue, a6 = r6.pending;
  if (null !== a6) {
    if (null !== l5) {
      var o5 = l5.next;
      l5.next = a6.next, a6.next = o5;
    }
    n5.baseQueue = l5 = a6, r6.pending = null;
  }
  if (a6 = e6.baseState, null === l5) e6.memoizedState = a6;
  else {
    var i5 = o5 = null, u5 = null, s6 = n5 = l5.next, c5 = false;
    do {
      var f5 = -536870913 & s6.lane;
      if (f5 !== s6.lane ? (Bs & f5) === f5 : (ho & f5) === f5) {
        var d5 = s6.revertLane;
        if (0 === d5) null !== u5 && (u5 = u5.next = {
          lane: 0,
          revertLane: 0,
          gesture: null,
          action: s6.action,
          hasEagerState: s6.hasEagerState,
          eagerState: s6.eagerState,
          next: null
        }), f5 === ga && (c5 = true);
        else {
          if ((ho & d5) === d5) {
            s6 = s6.next, d5 === ga && (c5 = true);
            continue;
          }
          f5 = {
            lane: 0,
            revertLane: s6.revertLane,
            gesture: null,
            action: s6.action,
            hasEagerState: s6.hasEagerState,
            eagerState: s6.eagerState,
            next: null
          }, null === u5 ? (i5 = u5 = f5, o5 = a6) : u5 = u5.next = f5, go.lanes |= d5, Gs |= d5;
        }
        f5 = s6.action, wo && t5(a6, f5), a6 = s6.hasEagerState ? s6.eagerState : t5(a6, f5);
      } else d5 = {
        lane: f5,
        revertLane: s6.revertLane,
        gesture: s6.gesture,
        action: s6.action,
        hasEagerState: s6.hasEagerState,
        eagerState: s6.eagerState,
        next: null
      }, null === u5 ? (i5 = u5 = d5, o5 = a6) : u5 = u5.next = d5, go.lanes |= f5, Gs |= f5;
      s6 = s6.next;
    } while (null !== s6 && s6 !== n5);
    if (null === u5 ? o5 = a6 : u5.next = i5, !Cr(a6, e6.memoizedState) && (ou = true, c5 && null !== (t5 = va))) throw t5;
    e6.memoizedState = a6, e6.baseState = o5, e6.baseQueue = u5, r6.lastRenderedState = a6;
  }
  return null === l5 && (r6.lanes = 0), [
    e6.memoizedState,
    r6.dispatch
  ];
}
function Bo(e6) {
  var n5 = Mo(), t5 = n5.queue;
  if (null === t5) throw Error(O3(311));
  t5.lastRenderedReducer = e6;
  var r6 = t5.dispatch, l5 = t5.pending, a6 = n5.memoizedState;
  if (null !== l5) {
    t5.pending = null;
    var o5 = l5 = l5.next;
    do {
      a6 = e6(a6, o5.action), o5 = o5.next;
    } while (o5 !== l5);
    Cr(a6, n5.memoizedState) || (ou = true), n5.memoizedState = a6, null === n5.baseQueue && (n5.baseState = a6), t5.lastRenderedState = a6;
  }
  return [
    a6,
    r6
  ];
}
function Ho(e6, n5, t5) {
  var r6 = go, l5 = Mo(), a6 = Il;
  if (a6) {
    if (void 0 === t5) throw Error(O3(407));
    t5 = t5();
  } else t5 = n5();
  var o5 = !Cr((vo || l5).memoizedState, t5);
  if (o5 && (l5.memoizedState = t5, ou = true), l5 = l5.queue, hi(qo.bind(null, r6, l5, e6), [
    e6
  ]), l5.getSnapshot !== n5 || o5 || null !== yo && 1 & yo.memoizedState.tag) {
    if (r6.flags |= 2048, ci(9, {
      destroy: void 0
    }, Wo.bind(null, r6, l5, t5, n5), null), null === $s) throw Error(O3(349));
    a6 || 127 & ho || Qo(r6, n5, t5);
  }
  return t5;
}
function Qo(e6, n5, t5) {
  e6.flags |= 16384, e6 = {
    getSnapshot: n5,
    value: t5
  }, null === (n5 = go.updateQueue) ? (n5 = {
    lastEffect: null,
    events: null,
    stores: null,
    memoCache: null
  }, go.updateQueue = n5, n5.stores = [
    e6
  ]) : null === (t5 = n5.stores) ? n5.stores = [
    e6
  ] : t5.push(e6);
}
function Wo(e6, n5, t5, r6) {
  n5.value = t5, n5.getSnapshot = r6, Ko(n5) && Yo(e6);
}
function qo(e6, n5, t5) {
  return t5(function() {
    Ko(n5) && Yo(e6);
  });
}
function Ko(e6) {
  var n5 = e6.getSnapshot;
  e6 = e6.value;
  try {
    var t5 = n5();
    return !Cr(e6, t5);
  } catch (e7) {
    return true;
  }
}
function Yo(e6) {
  var n5 = ol(e6, 2);
  null !== n5 && wc(n5, e6, 2);
}
function Xo(e6) {
  var n5 = Ao();
  if ("function" == typeof e6) {
    var t5 = e6;
    if (e6 = t5(), wo) {
      We2(true);
      try {
        t5();
      } finally {
        We2(false);
      }
    }
  }
  return n5.memoizedState = n5.baseState = e6, n5.queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: Vo,
    lastRenderedState: e6
  }, n5;
}
function Go(e6, n5, t5, r6) {
  return e6.baseState = t5, jo(e6, vo, "function" == typeof r6 ? r6 : Vo);
}
function Zo(e6, n5, t5, r6, l5) {
  if (Ui(e6)) throw Error(O3(485));
  if (null !== (e6 = n5.action)) {
    var a6 = {
      payload: l5,
      action: e6,
      next: null,
      isTransition: true,
      status: "pending",
      value: null,
      reason: null,
      listeners: [],
      then: function(e7) {
        a6.listeners.push(e7);
      }
    };
    null !== ie2.T ? t5(true) : a6.isTransition = false, r6(a6), null === (t5 = n5.pending) ? (a6.next = n5.pending = a6, Jo(n5, a6)) : (a6.next = t5.next, n5.pending = t5.next = a6);
  }
}
function Jo(e6, n5) {
  var t5 = n5.action, r6 = n5.payload, l5 = e6.state;
  if (n5.isTransition) {
    var a6 = ie2.T, o5 = {};
    ie2.T = o5;
    try {
      var i5 = t5(l5, r6), u5 = ie2.S;
      null !== u5 && u5(o5, i5), ei(e6, n5, i5);
    } catch (t6) {
      ti(e6, n5, t6);
    } finally {
      null !== a6 && null !== o5.types && (a6.types = o5.types), ie2.T = a6;
    }
  } else try {
    ei(e6, n5, a6 = t5(l5, r6));
  } catch (t6) {
    ti(e6, n5, t6);
  }
}
function ei(e6, n5, t5) {
  null !== t5 && "object" == typeof t5 && "function" == typeof t5.then ? t5.then(function(t6) {
    ni(e6, n5, t6);
  }, function(t6) {
    return ti(e6, n5, t6);
  }) : ni(e6, n5, t5);
}
function ni(e6, n5, t5) {
  n5.status = "fulfilled", n5.value = t5, ri(n5), e6.state = t5, null !== (n5 = e6.pending) && ((t5 = n5.next) === n5 ? e6.pending = null : (t5 = t5.next, n5.next = t5, Jo(e6, t5)));
}
function ti(e6, n5, t5) {
  var r6 = e6.pending;
  if (e6.pending = null, null !== r6) {
    r6 = r6.next;
    do {
      n5.status = "rejected", n5.reason = t5, ri(n5), n5 = n5.next;
    } while (n5 !== r6);
  }
  e6.action = null;
}
function ri(e6) {
  e6 = e6.listeners;
  for (var n5 = 0; n5 < e6.length; n5++) (0, e6[n5])();
}
function li(e6, n5) {
  return n5;
}
function ai(e6, n5) {
  if (Il) {
    var t5 = $s.formState;
    if (null !== t5) {
      e: {
        var r6 = go;
        if (Il) {
          if (Rl) {
            n: {
              for (var l5 = Rl, a6 = Vl; 8 !== l5.nodeType; ) {
                if (!a6) {
                  l5 = null;
                  break n;
                }
                if (null === (l5 = id(l5.nextSibling))) {
                  l5 = null;
                  break n;
                }
              }
              l5 = "F!" === (a6 = l5.data) || "F" === a6 ? l5 : null;
            }
            if (l5) {
              Rl = id(l5.nextSibling), r6 = "F!" === l5.data;
              break e;
            }
          }
          jl(r6);
        }
        r6 = false;
      }
      r6 && (n5 = t5[0]);
    }
  }
  return (t5 = Ao()).memoizedState = t5.baseState = n5, r6 = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: li,
    lastRenderedState: n5
  }, t5.queue = r6, t5 = Mi.bind(null, go, r6), r6.dispatch = t5, r6 = Xo(false), a6 = Ii.bind(null, go, false, r6.queue), l5 = {
    state: n5,
    dispatch: null,
    action: e6,
    pending: null
  }, (r6 = Ao()).queue = l5, t5 = Zo.bind(null, go, l5, a6, t5), l5.dispatch = t5, r6.memoizedState = e6, [
    n5,
    t5,
    false
  ];
}
function oi(e6) {
  return ii(Mo(), vo, e6);
}
function ii(e6, n5, t5) {
  if (n5 = jo(e6, n5, li)[0], e6 = $o(Vo)[0], "object" == typeof n5 && null !== n5 && "function" == typeof n5.then) try {
    var r6 = Ro(n5);
  } catch (e7) {
    if (e7 === xa) throw za;
    throw e7;
  }
  else r6 = n5;
  var l5 = (n5 = Mo()).queue, a6 = l5.dispatch;
  return t5 !== n5.memoizedState && (go.flags |= 2048, ci(9, {
    destroy: void 0
  }, ui.bind(null, l5, t5), null)), [
    r6,
    a6,
    e6
  ];
}
function ui(e6, n5) {
  e6.action = n5;
}
function si(e6) {
  var n5 = Mo(), t5 = vo;
  if (null !== t5) return ii(n5, t5, e6);
  Mo(), n5 = n5.memoizedState;
  var r6 = (t5 = Mo()).queue.dispatch;
  return t5.memoizedState = e6, [
    n5,
    r6,
    false
  ];
}
function ci(e6, n5, t5, r6) {
  return e6 = {
    tag: e6,
    create: t5,
    deps: r6,
    inst: n5,
    next: null
  }, null === (n5 = go.updateQueue) && (n5 = {
    lastEffect: null,
    events: null,
    stores: null,
    memoCache: null
  }, go.updateQueue = n5), null === (t5 = n5.lastEffect) ? n5.lastEffect = e6.next = e6 : (r6 = t5.next, t5.next = e6, e6.next = r6, n5.lastEffect = e6), e6;
}
function fi() {
  return Mo().memoizedState;
}
function di(e6, n5, t5, r6) {
  var l5 = Ao();
  go.flags |= e6, l5.memoizedState = ci(1 | n5, {
    destroy: void 0
  }, t5, void 0 === r6 ? null : r6);
}
function pi(e6, n5, t5, r6) {
  var l5 = Mo();
  r6 = void 0 === r6 ? null : r6;
  var a6 = l5.memoizedState.inst;
  null !== vo && null !== r6 && Po(r6, vo.memoizedState.deps) ? l5.memoizedState = ci(n5, a6, t5, r6) : (go.flags |= e6, l5.memoizedState = ci(1 | n5, a6, t5, r6));
}
function mi(e6, n5) {
  di(8390656, 8, e6, n5);
}
function hi(e6, n5) {
  pi(2048, 8, e6, n5);
}
function gi(e6) {
  var n5 = Mo().memoizedState;
  return function(e7) {
    go.flags |= 4;
    var n6 = go.updateQueue;
    if (null === n6) n6 = {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    }, go.updateQueue = n6, n6.events = [
      e7
    ];
    else {
      var t5 = n6.events;
      null === t5 ? n6.events = [
        e7
      ] : t5.push(e7);
    }
  }({
    ref: n5,
    nextImpl: e6
  }), function() {
    if (2 & Vs) throw Error(O3(440));
    return n5.impl.apply(void 0, arguments);
  };
}
function vi(e6, n5) {
  return pi(4, 2, e6, n5);
}
function yi(e6, n5) {
  return pi(4, 4, e6, n5);
}
function bi(e6, n5) {
  if ("function" == typeof n5) {
    e6 = e6();
    var t5 = n5(e6);
    return function() {
      "function" == typeof t5 ? t5() : n5(null);
    };
  }
  if (null != n5) return e6 = e6(), n5.current = e6, function() {
    n5.current = null;
  };
}
function ki(e6, n5, t5) {
  t5 = null != t5 ? t5.concat([
    e6
  ]) : null, pi(4, 4, bi.bind(null, n5, e6), t5);
}
function wi() {
}
function Si(e6, n5) {
  var t5 = Mo();
  n5 = void 0 === n5 ? null : n5;
  var r6 = t5.memoizedState;
  return null !== n5 && Po(n5, r6[1]) ? r6[0] : (t5.memoizedState = [
    e6,
    n5
  ], e6);
}
function Ei(e6, n5) {
  var t5 = Mo();
  n5 = void 0 === n5 ? null : n5;
  var r6 = t5.memoizedState;
  if (null !== n5 && Po(n5, r6[1])) return r6[0];
  if (r6 = e6(), wo) {
    We2(true);
    try {
      e6();
    } finally {
      We2(false);
    }
  }
  return t5.memoizedState = [
    r6,
    n5
  ], r6;
}
function xi(e6, n5, t5) {
  return void 0 === t5 || 1073741824 & ho && !(261930 & Bs) ? e6.memoizedState = n5 : (e6.memoizedState = t5, e6 = kc(), go.lanes |= e6, Gs |= e6, t5);
}
function Ci(e6, n5, t5, r6) {
  return Cr(t5, n5) ? t5 : null !== eo.current ? (e6 = xi(e6, t5, r6), Cr(e6, n5) || (ou = true), e6) : 42 & ho && (!(1073741824 & ho) || 261930 & Bs) ? (e6 = kc(), go.lanes |= e6, Gs |= e6, n5) : (ou = true, e6.memoizedState = t5);
}
function zi(e6, n5, t5, r6, l5) {
  var a6 = ue2.p;
  ue2.p = 0 !== a6 && 8 > a6 ? a6 : 8;
  var o5, i5, u5, s6 = ie2.T, c5 = {};
  ie2.T = c5, Ii(e6, false, n5, t5);
  try {
    var f5 = l5(), d5 = ie2.S;
    if (null !== d5 && d5(c5, f5), null !== f5 && "object" == typeof f5 && "function" == typeof f5.then) Ri(e6, n5, (o5 = r6, i5 = [], u5 = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e7) {
        i5.push(e7);
      }
    }, f5.then(function() {
      u5.status = "fulfilled", u5.value = o5;
      for (var e7 = 0; e7 < i5.length; e7++) (0, i5[e7])(o5);
    }, function(e7) {
      for (u5.status = "rejected", u5.reason = e7, e7 = 0; e7 < i5.length; e7++) (0, i5[e7])(void 0);
    }), u5), bc());
    else Ri(e6, n5, r6, bc());
  } catch (t6) {
    Ri(e6, n5, {
      then: function() {
      },
      status: "rejected",
      reason: t6
    }, bc());
  } finally {
    ue2.p = a6, null !== s6 && null !== c5.types && (s6.types = c5.types), ie2.T = s6;
  }
}
function Pi() {
}
function Ni(e6, n5, t5, r6) {
  if (5 !== e6.tag) throw Error(O3(476));
  var l5 = Ti(e6).queue;
  zi(e6, l5, n5, se2, null === t5 ? Pi : function() {
    return Li(e6), t5(r6);
  });
}
function Ti(e6) {
  var n5 = e6.memoizedState;
  if (null !== n5) return n5;
  var t5 = {};
  return (n5 = {
    memoizedState: se2,
    baseState: se2,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vo,
      lastRenderedState: se2
    },
    next: null
  }).next = {
    memoizedState: t5,
    baseState: t5,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vo,
      lastRenderedState: t5
    },
    next: null
  }, e6.memoizedState = n5, null !== (e6 = e6.alternate) && (e6.memoizedState = n5), n5;
}
function Li(e6) {
  var n5 = Ti(e6);
  null === n5.next && (n5 = e6.alternate.memoizedState), Ri(e6, n5.next.queue, {}, bc());
}
function _i() {
  return aa(Id);
}
function Fi() {
  return Mo().memoizedState;
}
function Oi() {
  return Mo().memoizedState;
}
function Di(e6) {
  for (var n5 = e6.return; null !== n5; ) {
    switch (n5.tag) {
      case 24:
      case 3:
        var t5 = bc(), r6 = Wa(n5, e6 = Qa(t5), t5);
        return null !== r6 && (wc(r6, n5, t5), qa(r6, n5, t5)), n5 = {
          cache: da()
        }, void (e6.payload = n5);
    }
    n5 = n5.return;
  }
}
function Ai(e6, n5, t5) {
  var r6 = bc();
  t5 = {
    lane: r6,
    revertLane: 0,
    gesture: null,
    action: t5,
    hasEagerState: false,
    eagerState: null,
    next: null
  }, Ui(e6) ? Vi(n5, t5) : null !== (t5 = al(e6, n5, t5, r6)) && (wc(t5, e6, r6), $i(t5, n5, r6));
}
function Mi(e6, n5, t5) {
  Ri(e6, n5, t5, bc());
}
function Ri(e6, n5, t5, r6) {
  var l5 = {
    lane: r6,
    revertLane: 0,
    gesture: null,
    action: t5,
    hasEagerState: false,
    eagerState: null,
    next: null
  };
  if (Ui(e6)) Vi(n5, l5);
  else {
    var a6 = e6.alternate;
    if (0 === e6.lanes && (null === a6 || 0 === a6.lanes) && null !== (a6 = n5.lastRenderedReducer)) try {
      var o5 = n5.lastRenderedState, i5 = a6(o5, t5);
      if (l5.hasEagerState = true, l5.eagerState = i5, Cr(i5, o5)) return ll(e6, n5, l5, 0), null === $s && rl(), false;
    } catch (e7) {
    }
    if (null !== (t5 = al(e6, n5, l5, r6))) return wc(t5, e6, r6), $i(t5, n5, r6), true;
  }
  return false;
}
function Ii(e6, n5, t5, r6) {
  if (r6 = {
    lane: 2,
    revertLane: gf(),
    gesture: null,
    action: r6,
    hasEagerState: false,
    eagerState: null,
    next: null
  }, Ui(e6)) {
    if (n5) throw Error(O3(479));
  } else null !== (n5 = al(e6, t5, r6, 2)) && wc(n5, e6, 2);
}
function Ui(e6) {
  var n5 = e6.alternate;
  return e6 === go || null !== n5 && n5 === go;
}
function Vi(e6, n5) {
  ko = bo = true;
  var t5 = e6.pending;
  null === t5 ? n5.next = n5 : (n5.next = t5.next, t5.next = n5), e6.pending = n5;
}
function $i(e6, n5, t5) {
  if (4194048 & t5) {
    var r6 = n5.lanes;
    t5 |= r6 &= e6.pendingLanes, n5.lanes = t5, un(e6, t5);
  }
}
var ji = {
  readContext: aa,
  use: Io,
  useCallback: zo,
  useContext: zo,
  useEffect: zo,
  useImperativeHandle: zo,
  useLayoutEffect: zo,
  useInsertionEffect: zo,
  useMemo: zo,
  useReducer: zo,
  useRef: zo,
  useState: zo,
  useDebugValue: zo,
  useDeferredValue: zo,
  useTransition: zo,
  useSyncExternalStore: zo,
  useId: zo,
  useHostTransitionStatus: zo,
  useFormState: zo,
  useActionState: zo,
  useOptimistic: zo,
  useMemoCache: zo,
  useCacheRefresh: zo
};
ji.useEffectEvent = zo;
var Bi = {
  readContext: aa,
  use: Io,
  useCallback: function(e6, n5) {
    return Ao().memoizedState = [
      e6,
      void 0 === n5 ? null : n5
    ], e6;
  },
  useContext: aa,
  useEffect: mi,
  useImperativeHandle: function(e6, n5, t5) {
    t5 = null != t5 ? t5.concat([
      e6
    ]) : null, di(4194308, 4, bi.bind(null, n5, e6), t5);
  },
  useLayoutEffect: function(e6, n5) {
    return di(4194308, 4, e6, n5);
  },
  useInsertionEffect: function(e6, n5) {
    di(4, 2, e6, n5);
  },
  useMemo: function(e6, n5) {
    var t5 = Ao();
    n5 = void 0 === n5 ? null : n5;
    var r6 = e6();
    if (wo) {
      We2(true);
      try {
        e6();
      } finally {
        We2(false);
      }
    }
    return t5.memoizedState = [
      r6,
      n5
    ], r6;
  },
  useReducer: function(e6, n5, t5) {
    var r6 = Ao();
    if (void 0 !== t5) {
      var l5 = t5(n5);
      if (wo) {
        We2(true);
        try {
          t5(n5);
        } finally {
          We2(false);
        }
      }
    } else l5 = n5;
    return r6.memoizedState = r6.baseState = l5, e6 = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: e6,
      lastRenderedState: l5
    }, r6.queue = e6, e6 = e6.dispatch = Ai.bind(null, go, e6), [
      r6.memoizedState,
      e6
    ];
  },
  useRef: function(e6) {
    return e6 = {
      current: e6
    }, Ao().memoizedState = e6;
  },
  useState: function(e6) {
    var n5 = (e6 = Xo(e6)).queue, t5 = Mi.bind(null, go, n5);
    return n5.dispatch = t5, [
      e6.memoizedState,
      t5
    ];
  },
  useDebugValue: wi,
  useDeferredValue: function(e6, n5) {
    return xi(Ao(), e6, n5);
  },
  useTransition: function() {
    var e6 = Xo(false);
    return e6 = zi.bind(null, go, e6.queue, true, false), Ao().memoizedState = e6, [
      false,
      e6
    ];
  },
  useSyncExternalStore: function(e6, n5, t5) {
    var r6 = go, l5 = Ao();
    if (Il) {
      if (void 0 === t5) throw Error(O3(407));
      t5 = t5();
    } else {
      if (t5 = n5(), null === $s) throw Error(O3(349));
      127 & Bs || Qo(r6, n5, t5);
    }
    l5.memoizedState = t5;
    var a6 = {
      value: t5,
      getSnapshot: n5
    };
    return l5.queue = a6, mi(qo.bind(null, r6, a6, e6), [
      e6
    ]), r6.flags |= 2048, ci(9, {
      destroy: void 0
    }, Wo.bind(null, r6, a6, t5, n5), null), t5;
  },
  useId: function() {
    var e6 = Ao(), n5 = $s.identifierPrefix;
    if (Il) {
      var t5 = Ll;
      n5 = "_" + n5 + "R_" + (t5 = (Tl & ~(1 << 32 - qe2(Tl) - 1)).toString(32) + t5), 0 < (t5 = So++) && (n5 += "H" + t5.toString(32)), n5 += "_";
    } else n5 = "_" + n5 + "r_" + (t5 = Co++).toString(32) + "_";
    return e6.memoizedState = n5;
  },
  useHostTransitionStatus: _i,
  useFormState: ai,
  useActionState: ai,
  useOptimistic: function(e6) {
    var n5 = Ao();
    n5.memoizedState = n5.baseState = e6;
    var t5 = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: null,
      lastRenderedState: null
    };
    return n5.queue = t5, n5 = Ii.bind(null, go, true, t5), t5.dispatch = n5, [
      e6,
      n5
    ];
  },
  useMemoCache: Uo,
  useCacheRefresh: function() {
    return Ao().memoizedState = Di.bind(null, go);
  },
  useEffectEvent: function(e6) {
    var n5 = Ao(), t5 = {
      impl: e6
    };
    return n5.memoizedState = t5, function() {
      if (2 & Vs) throw Error(O3(440));
      return t5.impl.apply(void 0, arguments);
    };
  }
};
var Hi = {
  readContext: aa,
  use: Io,
  useCallback: Si,
  useContext: aa,
  useEffect: hi,
  useImperativeHandle: ki,
  useInsertionEffect: vi,
  useLayoutEffect: yi,
  useMemo: Ei,
  useReducer: $o,
  useRef: fi,
  useState: function() {
    return $o(Vo);
  },
  useDebugValue: wi,
  useDeferredValue: function(e6, n5) {
    return Ci(Mo(), vo.memoizedState, e6, n5);
  },
  useTransition: function() {
    var e6 = $o(Vo)[0], n5 = Mo().memoizedState;
    return [
      "boolean" == typeof e6 ? e6 : Ro(e6),
      n5
    ];
  },
  useSyncExternalStore: Ho,
  useId: Fi,
  useHostTransitionStatus: _i,
  useFormState: oi,
  useActionState: oi,
  useOptimistic: function(e6, n5) {
    return Go(Mo(), 0, e6, n5);
  },
  useMemoCache: Uo,
  useCacheRefresh: Oi
};
Hi.useEffectEvent = gi;
var Qi = {
  readContext: aa,
  use: Io,
  useCallback: Si,
  useContext: aa,
  useEffect: hi,
  useImperativeHandle: ki,
  useInsertionEffect: vi,
  useLayoutEffect: yi,
  useMemo: Ei,
  useReducer: Bo,
  useRef: fi,
  useState: function() {
    return Bo(Vo);
  },
  useDebugValue: wi,
  useDeferredValue: function(e6, n5) {
    var t5 = Mo();
    return null === vo ? xi(t5, e6, n5) : Ci(t5, vo.memoizedState, e6, n5);
  },
  useTransition: function() {
    var e6 = Bo(Vo)[0], n5 = Mo().memoizedState;
    return [
      "boolean" == typeof e6 ? e6 : Ro(e6),
      n5
    ];
  },
  useSyncExternalStore: Ho,
  useId: Fi,
  useHostTransitionStatus: _i,
  useFormState: si,
  useActionState: si,
  useOptimistic: function(e6, n5) {
    var t5 = Mo();
    return null !== vo ? Go(t5, 0, e6, n5) : (t5.baseState = e6, [
      e6,
      t5.queue.dispatch
    ]);
  },
  useMemoCache: Uo,
  useCacheRefresh: Oi
};
function Wi(e6, n5, t5, r6) {
  t5 = null == (t5 = t5(r6, n5 = e6.memoizedState)) ? n5 : V2({}, n5, t5), e6.memoizedState = t5, 0 === e6.lanes && (e6.updateQueue.baseState = t5);
}
Qi.useEffectEvent = gi;
var qi = {
  enqueueSetState: function(e6, n5, t5) {
    e6 = e6._reactInternals;
    var r6 = bc(), l5 = Qa(r6);
    l5.payload = n5, null != t5 && (l5.callback = t5), null !== (n5 = Wa(e6, l5, r6)) && (wc(n5, e6, r6), qa(n5, e6, r6));
  },
  enqueueReplaceState: function(e6, n5, t5) {
    e6 = e6._reactInternals;
    var r6 = bc(), l5 = Qa(r6);
    l5.tag = 1, l5.payload = n5, null != t5 && (l5.callback = t5), null !== (n5 = Wa(e6, l5, r6)) && (wc(n5, e6, r6), qa(n5, e6, r6));
  },
  enqueueForceUpdate: function(e6, n5) {
    e6 = e6._reactInternals;
    var t5 = bc(), r6 = Qa(t5);
    r6.tag = 2, null != n5 && (r6.callback = n5), null !== (n5 = Wa(e6, r6, t5)) && (wc(n5, e6, t5), qa(n5, e6, t5));
  }
};
function Ki(e6, n5, t5, r6, l5, a6, o5) {
  return "function" == typeof (e6 = e6.stateNode).shouldComponentUpdate ? e6.shouldComponentUpdate(r6, a6, o5) : !n5.prototype || !n5.prototype.isPureReactComponent || (!zr(t5, r6) || !zr(l5, a6));
}
function Yi(e6, n5, t5, r6) {
  e6 = n5.state, "function" == typeof n5.componentWillReceiveProps && n5.componentWillReceiveProps(t5, r6), "function" == typeof n5.UNSAFE_componentWillReceiveProps && n5.UNSAFE_componentWillReceiveProps(t5, r6), n5.state !== e6 && qi.enqueueReplaceState(n5, n5.state, null);
}
function Xi(e6, n5) {
  var t5 = n5;
  if ("ref" in n5) for (var r6 in t5 = {}, n5) "ref" !== r6 && (t5[r6] = n5[r6]);
  if (e6 = e6.defaultProps) for (var l5 in t5 === n5 && (t5 = V2({}, t5)), e6) void 0 === t5[l5] && (t5[l5] = e6[l5]);
  return t5;
}
function Gi(e6) {
  Jr(e6);
}
function Zi(e6) {
  console.error(e6);
}
function Ji(e6) {
  Jr(e6);
}
function eu(e6, n5) {
  try {
    (0, e6.onUncaughtError)(n5.value, {
      componentStack: n5.stack
    });
  } catch (e7) {
    setTimeout(function() {
      throw e7;
    });
  }
}
function nu(e6, n5, t5) {
  try {
    (0, e6.onCaughtError)(t5.value, {
      componentStack: t5.stack,
      errorBoundary: 1 === n5.tag ? n5.stateNode : null
    });
  } catch (e7) {
    setTimeout(function() {
      throw e7;
    });
  }
}
function tu(e6, n5, t5) {
  return (t5 = Qa(t5)).tag = 3, t5.payload = {
    element: null
  }, t5.callback = function() {
    eu(e6, n5);
  }, t5;
}
function ru(e6) {
  return (e6 = Qa(e6)).tag = 3, e6;
}
function lu(e6, n5, t5, r6) {
  var l5 = t5.type.getDerivedStateFromError;
  if ("function" == typeof l5) {
    var a6 = r6.value;
    e6.payload = function() {
      return l5(a6);
    }, e6.callback = function() {
      nu(n5, t5, r6);
    };
  }
  var o5 = t5.stateNode;
  null !== o5 && "function" == typeof o5.componentDidCatch && (e6.callback = function() {
    nu(n5, t5, r6), "function" != typeof l5 && (null === sc ? sc = /* @__PURE__ */ new Set([
      this
    ]) : sc.add(this));
    var e7 = r6.stack;
    this.componentDidCatch(r6.value, {
      componentStack: null !== e7 ? e7 : ""
    });
  });
}
var au = Error(O3(461));
var ou = false;
function iu(e6, n5, t5, r6) {
  n5.child = null === e6 ? $a(n5, null, t5, r6) : Va(n5, e6.child, t5, r6);
}
function uu(e6, n5, t5, r6, l5) {
  t5 = t5.render;
  var a6 = n5.ref;
  if ("ref" in r6) {
    var o5 = {};
    for (var i5 in r6) "ref" !== i5 && (o5[i5] = r6[i5]);
  } else o5 = r6;
  return la(n5), r6 = No(e6, n5, t5, o5, a6, l5), i5 = Fo(), null === e6 || ou ? (Il && i5 && Ol(n5), n5.flags |= 1, iu(e6, n5, r6, l5), n5.child) : (Oo(e6, n5, l5), _u(e6, n5, l5));
}
function su(e6, n5, t5, r6, l5) {
  if (null === e6) {
    var a6 = t5.type;
    return "function" != typeof a6 || dl(a6) || void 0 !== a6.defaultProps || null !== t5.compare ? ((e6 = hl(t5.type, null, r6, n5, n5.mode, l5)).ref = n5.ref, e6.return = n5, n5.child = e6) : (n5.tag = 15, n5.type = a6, cu(e6, n5, a6, r6, l5));
  }
  if (a6 = e6.child, !Fu(e6, l5)) {
    var o5 = a6.memoizedProps;
    if ((t5 = null !== (t5 = t5.compare) ? t5 : zr)(o5, r6) && e6.ref === n5.ref) return _u(e6, n5, l5);
  }
  return n5.flags |= 1, (e6 = pl(a6, r6)).ref = n5.ref, e6.return = n5, n5.child = e6;
}
function cu(e6, n5, t5, r6, l5) {
  if (null !== e6) {
    var a6 = e6.memoizedProps;
    if (zr(a6, r6) && e6.ref === n5.ref) {
      if (ou = false, n5.pendingProps = r6 = a6, !Fu(e6, l5)) return n5.lanes = e6.lanes, _u(e6, n5, l5);
      131072 & e6.flags && (ou = true);
    }
  }
  return vu(e6, n5, t5, r6, l5);
}
function fu(e6, n5, t5, r6) {
  var l5 = r6.children, a6 = null !== e6 ? e6.memoizedState : null;
  if (null === e6 && null === n5.stateNode && (n5.stateNode = {
    _visibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null
  }), "hidden" === r6.mode) {
    if (128 & n5.flags) {
      if (a6 = null !== a6 ? a6.baseLanes | t5 : t5, null !== e6) {
        for (r6 = n5.child = e6.child, l5 = 0; null !== r6; ) l5 = l5 | r6.lanes | r6.childLanes, r6 = r6.sibling;
        r6 = l5 & ~a6;
      } else r6 = 0, n5.child = null;
      return pu(e6, n5, a6, t5, r6);
    }
    if (!(536870912 & t5)) return r6 = n5.lanes = 536870912, pu(e6, n5, null !== a6 ? a6.baseLanes | t5 : t5, t5, r6);
    n5.memoizedState = {
      baseLanes: 0,
      cachePool: null
    }, null !== e6 && Sa(0, null !== a6 ? a6.cachePool : null), null !== a6 ? to(n5, a6) : ro(), so(n5);
  } else null !== a6 ? (Sa(0, a6.cachePool), to(n5, a6), co(), n5.memoizedState = null) : (null !== e6 && Sa(0, null), ro(), co());
  return iu(e6, n5, l5, t5), n5.child;
}
function du(e6, n5) {
  return null !== e6 && 22 === e6.tag || null !== n5.stateNode || (n5.stateNode = {
    _visibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null
  }), n5.sibling;
}
function pu(e6, n5, t5, r6, l5) {
  var a6 = wa();
  return a6 = null === a6 ? null : {
    parent: fa._currentValue,
    pool: a6
  }, n5.memoizedState = {
    baseLanes: t5,
    cachePool: a6
  }, null !== e6 && Sa(0, null), ro(), so(n5), null !== e6 && ta(e6, n5, r6, true), n5.childLanes = l5, null;
}
function mu(e6, n5) {
  return (n5 = zu({
    mode: n5.mode,
    children: n5.children
  }, e6.mode)).ref = e6.ref, e6.child = n5, n5.return = e6, n5;
}
function hu(e6, n5, t5) {
  return Va(n5, e6.child, null, t5), (e6 = mu(n5, n5.pendingProps)).flags |= 2, fo(n5), n5.memoizedState = null, e6;
}
function gu(e6, n5) {
  var t5 = n5.ref;
  if (null === t5) null !== e6 && null !== e6.ref && (n5.flags |= 4194816);
  else {
    if ("function" != typeof t5 && "object" != typeof t5) throw Error(O3(284));
    null !== e6 && e6.ref === t5 || (n5.flags |= 4194816);
  }
}
function vu(e6, n5, t5, r6, l5) {
  return la(n5), t5 = No(e6, n5, t5, r6, void 0, l5), r6 = Fo(), null === e6 || ou ? (Il && r6 && Ol(n5), n5.flags |= 1, iu(e6, n5, t5, l5), n5.child) : (Oo(e6, n5, l5), _u(e6, n5, l5));
}
function yu(e6, n5, t5, r6, l5, a6) {
  return la(n5), n5.updateQueue = null, t5 = Lo(n5, r6, t5, l5), To(e6), r6 = Fo(), null === e6 || ou ? (Il && r6 && Ol(n5), n5.flags |= 1, iu(e6, n5, t5, a6), n5.child) : (Oo(e6, n5, a6), _u(e6, n5, a6));
}
function bu(e6, n5, t5, r6, l5) {
  if (la(n5), null === n5.stateNode) {
    var a6 = sl, o5 = t5.contextType;
    "object" == typeof o5 && null !== o5 && (a6 = aa(o5)), a6 = new t5(r6, a6), n5.memoizedState = null !== a6.state && void 0 !== a6.state ? a6.state : null, a6.updater = qi, n5.stateNode = a6, a6._reactInternals = n5, (a6 = n5.stateNode).props = r6, a6.state = n5.memoizedState, a6.refs = {}, Ba(n5), o5 = t5.contextType, a6.context = "object" == typeof o5 && null !== o5 ? aa(o5) : sl, a6.state = n5.memoizedState, "function" == typeof (o5 = t5.getDerivedStateFromProps) && (Wi(n5, t5, o5, r6), a6.state = n5.memoizedState), "function" == typeof t5.getDerivedStateFromProps || "function" == typeof a6.getSnapshotBeforeUpdate || "function" != typeof a6.UNSAFE_componentWillMount && "function" != typeof a6.componentWillMount || (o5 = a6.state, "function" == typeof a6.componentWillMount && a6.componentWillMount(), "function" == typeof a6.UNSAFE_componentWillMount && a6.UNSAFE_componentWillMount(), o5 !== a6.state && qi.enqueueReplaceState(a6, a6.state, null), Ga(n5, r6, a6, l5), Xa(), a6.state = n5.memoizedState), "function" == typeof a6.componentDidMount && (n5.flags |= 4194308), r6 = true;
  } else if (null === e6) {
    a6 = n5.stateNode;
    var i5 = n5.memoizedProps, u5 = Xi(t5, i5);
    a6.props = u5;
    var s6 = a6.context, c5 = t5.contextType;
    o5 = sl, "object" == typeof c5 && null !== c5 && (o5 = aa(c5));
    var f5 = t5.getDerivedStateFromProps;
    c5 = "function" == typeof f5 || "function" == typeof a6.getSnapshotBeforeUpdate, i5 = n5.pendingProps !== i5, c5 || "function" != typeof a6.UNSAFE_componentWillReceiveProps && "function" != typeof a6.componentWillReceiveProps || (i5 || s6 !== o5) && Yi(n5, a6, r6, o5), ja = false;
    var d5 = n5.memoizedState;
    a6.state = d5, Ga(n5, r6, a6, l5), Xa(), s6 = n5.memoizedState, i5 || d5 !== s6 || ja ? ("function" == typeof f5 && (Wi(n5, t5, f5, r6), s6 = n5.memoizedState), (u5 = ja || Ki(n5, t5, u5, r6, d5, s6, o5)) ? (c5 || "function" != typeof a6.UNSAFE_componentWillMount && "function" != typeof a6.componentWillMount || ("function" == typeof a6.componentWillMount && a6.componentWillMount(), "function" == typeof a6.UNSAFE_componentWillMount && a6.UNSAFE_componentWillMount()), "function" == typeof a6.componentDidMount && (n5.flags |= 4194308)) : ("function" == typeof a6.componentDidMount && (n5.flags |= 4194308), n5.memoizedProps = r6, n5.memoizedState = s6), a6.props = r6, a6.state = s6, a6.context = o5, r6 = u5) : ("function" == typeof a6.componentDidMount && (n5.flags |= 4194308), r6 = false);
  } else {
    a6 = n5.stateNode, Ha(e6, n5), c5 = Xi(t5, o5 = n5.memoizedProps), a6.props = c5, f5 = n5.pendingProps, d5 = a6.context, s6 = t5.contextType, u5 = sl, "object" == typeof s6 && null !== s6 && (u5 = aa(s6)), (s6 = "function" == typeof (i5 = t5.getDerivedStateFromProps) || "function" == typeof a6.getSnapshotBeforeUpdate) || "function" != typeof a6.UNSAFE_componentWillReceiveProps && "function" != typeof a6.componentWillReceiveProps || (o5 !== f5 || d5 !== u5) && Yi(n5, a6, r6, u5), ja = false, d5 = n5.memoizedState, a6.state = d5, Ga(n5, r6, a6, l5), Xa();
    var p5 = n5.memoizedState;
    o5 !== f5 || d5 !== p5 || ja || null !== e6 && null !== e6.dependencies && ra(e6.dependencies) ? ("function" == typeof i5 && (Wi(n5, t5, i5, r6), p5 = n5.memoizedState), (c5 = ja || Ki(n5, t5, c5, r6, d5, p5, u5) || null !== e6 && null !== e6.dependencies && ra(e6.dependencies)) ? (s6 || "function" != typeof a6.UNSAFE_componentWillUpdate && "function" != typeof a6.componentWillUpdate || ("function" == typeof a6.componentWillUpdate && a6.componentWillUpdate(r6, p5, u5), "function" == typeof a6.UNSAFE_componentWillUpdate && a6.UNSAFE_componentWillUpdate(r6, p5, u5)), "function" == typeof a6.componentDidUpdate && (n5.flags |= 4), "function" == typeof a6.getSnapshotBeforeUpdate && (n5.flags |= 1024)) : ("function" != typeof a6.componentDidUpdate || o5 === e6.memoizedProps && d5 === e6.memoizedState || (n5.flags |= 4), "function" != typeof a6.getSnapshotBeforeUpdate || o5 === e6.memoizedProps && d5 === e6.memoizedState || (n5.flags |= 1024), n5.memoizedProps = r6, n5.memoizedState = p5), a6.props = r6, a6.state = p5, a6.context = u5, r6 = c5) : ("function" != typeof a6.componentDidUpdate || o5 === e6.memoizedProps && d5 === e6.memoizedState || (n5.flags |= 4), "function" != typeof a6.getSnapshotBeforeUpdate || o5 === e6.memoizedProps && d5 === e6.memoizedState || (n5.flags |= 1024), r6 = false);
  }
  return a6 = r6, gu(e6, n5), r6 = !!(128 & n5.flags), a6 || r6 ? (a6 = n5.stateNode, t5 = r6 && "function" != typeof t5.getDerivedStateFromError ? null : a6.render(), n5.flags |= 1, null !== e6 && r6 ? (n5.child = Va(n5, e6.child, null, l5), n5.child = Va(n5, null, t5, l5)) : iu(e6, n5, t5, l5), n5.memoizedState = a6.state, e6 = n5.child) : e6 = _u(e6, n5, l5), e6;
}
function ku(e6, n5, t5, r6) {
  return Wl(), n5.flags |= 256, iu(e6, n5, t5, r6), n5.child;
}
var wu = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
  hydrationErrors: null
};
function Su(e6) {
  return {
    baseLanes: e6,
    cachePool: Ea()
  };
}
function Eu(e6, n5, t5) {
  return e6 = null !== e6 ? e6.childLanes & ~t5 : 0, n5 && (e6 |= ec), e6;
}
function xu(e6, n5, t5) {
  var r6, l5 = n5.pendingProps, a6 = false, o5 = !!(128 & n5.flags);
  if ((r6 = o5) || (r6 = (null === e6 || null !== e6.memoizedState) && !!(2 & po.current)), r6 && (a6 = true, n5.flags &= -129), r6 = !!(32 & n5.flags), n5.flags &= -33, null === e6) {
    if (Il) {
      if (a6 ? io(n5) : co(), (e6 = Rl) ? null !== (e6 = null !== (e6 = ld(e6, Vl)) && "&" !== e6.data ? e6 : null) && (n5.memoizedState = {
        dehydrated: e6,
        treeContext: null !== Nl ? {
          id: Tl,
          overflow: Ll
        } : null,
        retryLane: 536870912,
        hydrationErrors: null
      }, (t5 = yl(e6)).return = n5, n5.child = t5, Ml = n5, Rl = null) : e6 = null, null === e6) throw jl(n5);
      return od(e6) ? n5.lanes = 32 : n5.lanes = 536870912, null;
    }
    var i5 = l5.children;
    return l5 = l5.fallback, a6 ? (co(), i5 = zu({
      mode: "hidden",
      children: i5
    }, a6 = n5.mode), l5 = gl(l5, a6, t5, null), i5.return = n5, l5.return = n5, i5.sibling = l5, n5.child = i5, (l5 = n5.child).memoizedState = Su(t5), l5.childLanes = Eu(e6, r6, t5), n5.memoizedState = wu, du(null, l5)) : (io(n5), Cu(n5, i5));
  }
  var u5 = e6.memoizedState;
  if (null !== u5 && null !== (i5 = u5.dehydrated)) {
    if (o5) 256 & n5.flags ? (io(n5), n5.flags &= -257, n5 = Pu(e6, n5, t5)) : null !== n5.memoizedState ? (co(), n5.child = e6.child, n5.flags |= 128, n5 = null) : (co(), i5 = l5.fallback, a6 = n5.mode, l5 = zu({
      mode: "visible",
      children: l5.children
    }, a6), (i5 = gl(i5, a6, t5, null)).flags |= 2, l5.return = n5, i5.return = n5, l5.sibling = i5, n5.child = l5, Va(n5, e6.child, null, t5), (l5 = n5.child).memoizedState = Su(t5), l5.childLanes = Eu(e6, r6, t5), n5.memoizedState = wu, n5 = du(null, l5));
    else if (io(n5), od(i5)) {
      if (r6 = i5.nextSibling && i5.nextSibling.dataset) var s6 = r6.dgst;
      r6 = s6, (l5 = Error(O3(419))).stack = "", l5.digest = r6, Kl({
        value: l5,
        source: null,
        stack: null
      }), n5 = Pu(e6, n5, t5);
    } else if (ou || ta(e6, n5, t5, false), r6 = !!(t5 & e6.childLanes), ou || r6) {
      if (null !== (r6 = $s) && (0 !== (l5 = sn(r6, t5)) && l5 !== u5.retryLane)) throw u5.retryLane = l5, ol(e6, l5), wc(r6, e6, l5), au;
      ad(i5) || Oc(), n5 = Pu(e6, n5, t5);
    } else ad(i5) ? (n5.flags |= 192, n5.child = e6.child, n5 = null) : (e6 = u5.treeContext, Rl = id(i5.nextSibling), Ml = n5, Il = true, Ul = null, Vl = false, null !== e6 && Al(n5, e6), (n5 = Cu(n5, l5.children)).flags |= 4096);
    return n5;
  }
  return a6 ? (co(), i5 = l5.fallback, a6 = n5.mode, s6 = (u5 = e6.child).sibling, (l5 = pl(u5, {
    mode: "hidden",
    children: l5.children
  })).subtreeFlags = 65011712 & u5.subtreeFlags, null !== s6 ? i5 = pl(s6, i5) : (i5 = gl(i5, a6, t5, null)).flags |= 2, i5.return = n5, l5.return = n5, l5.sibling = i5, n5.child = l5, du(null, l5), l5 = n5.child, null === (i5 = e6.child.memoizedState) ? i5 = Su(t5) : (null !== (a6 = i5.cachePool) ? (u5 = fa._currentValue, a6 = a6.parent !== u5 ? {
    parent: u5,
    pool: u5
  } : a6) : a6 = Ea(), i5 = {
    baseLanes: i5.baseLanes | t5,
    cachePool: a6
  }), l5.memoizedState = i5, l5.childLanes = Eu(e6, r6, t5), n5.memoizedState = wu, du(e6.child, l5)) : (io(n5), e6 = (t5 = e6.child).sibling, (t5 = pl(t5, {
    mode: "visible",
    children: l5.children
  })).return = n5, t5.sibling = null, null !== e6 && (null === (r6 = n5.deletions) ? (n5.deletions = [
    e6
  ], n5.flags |= 16) : r6.push(e6)), n5.child = t5, n5.memoizedState = null, t5);
}
function Cu(e6, n5) {
  return (n5 = zu({
    mode: "visible",
    children: n5
  }, e6.mode)).return = e6, e6.child = n5;
}
function zu(e6, n5) {
  return (e6 = fl(22, e6, null, n5)).lanes = 0, e6;
}
function Pu(e6, n5, t5) {
  return Va(n5, e6.child, null, t5), (e6 = Cu(n5, n5.pendingProps.children)).flags |= 2, n5.memoizedState = null, e6;
}
function Nu(e6, n5, t5) {
  e6.lanes |= n5;
  var r6 = e6.alternate;
  null !== r6 && (r6.lanes |= n5), ea(e6.return, n5, t5);
}
function Tu(e6, n5, t5, r6, l5, a6) {
  var o5 = e6.memoizedState;
  null === o5 ? e6.memoizedState = {
    isBackwards: n5,
    rendering: null,
    renderingStartTime: 0,
    last: r6,
    tail: t5,
    tailMode: l5,
    treeForkCount: a6
  } : (o5.isBackwards = n5, o5.rendering = null, o5.renderingStartTime = 0, o5.last = r6, o5.tail = t5, o5.tailMode = l5, o5.treeForkCount = a6);
}
function Lu(e6, n5, t5) {
  var r6 = n5.pendingProps, l5 = r6.revealOrder, a6 = r6.tail;
  r6 = r6.children;
  var o5 = po.current, i5 = !!(2 & o5);
  if (i5 ? (o5 = 1 & o5 | 2, n5.flags |= 128) : o5 &= 1, me2(po, o5), iu(e6, n5, r6, t5), r6 = Il ? Cl : 0, !i5 && null !== e6 && 128 & e6.flags) e: for (e6 = n5.child; null !== e6; ) {
    if (13 === e6.tag) null !== e6.memoizedState && Nu(e6, t5, n5);
    else if (19 === e6.tag) Nu(e6, t5, n5);
    else if (null !== e6.child) {
      e6.child.return = e6, e6 = e6.child;
      continue;
    }
    if (e6 === n5) break e;
    for (; null === e6.sibling; ) {
      if (null === e6.return || e6.return === n5) break e;
      e6 = e6.return;
    }
    e6.sibling.return = e6.return, e6 = e6.sibling;
  }
  switch (l5) {
    case "forwards":
      for (t5 = n5.child, l5 = null; null !== t5; ) null !== (e6 = t5.alternate) && null === mo(e6) && (l5 = t5), t5 = t5.sibling;
      null === (t5 = l5) ? (l5 = n5.child, n5.child = null) : (l5 = t5.sibling, t5.sibling = null), Tu(n5, false, l5, t5, a6, r6);
      break;
    case "backwards":
    case "unstable_legacy-backwards":
      for (t5 = null, l5 = n5.child, n5.child = null; null !== l5; ) {
        if (null !== (e6 = l5.alternate) && null === mo(e6)) {
          n5.child = l5;
          break;
        }
        e6 = l5.sibling, l5.sibling = t5, t5 = l5, l5 = e6;
      }
      Tu(n5, true, t5, null, a6, r6);
      break;
    case "together":
      Tu(n5, false, null, null, void 0, r6);
      break;
    default:
      n5.memoizedState = null;
  }
  return n5.child;
}
function _u(e6, n5, t5) {
  if (null !== e6 && (n5.dependencies = e6.dependencies), Gs |= n5.lanes, !(t5 & n5.childLanes)) {
    if (null === e6) return null;
    if (ta(e6, n5, t5, false), !(t5 & n5.childLanes)) return null;
  }
  if (null !== e6 && n5.child !== e6.child) throw Error(O3(153));
  if (null !== n5.child) {
    for (t5 = pl(e6 = n5.child, e6.pendingProps), n5.child = t5, t5.return = n5; null !== e6.sibling; ) e6 = e6.sibling, (t5 = t5.sibling = pl(e6, e6.pendingProps)).return = n5;
    t5.sibling = null;
  }
  return n5.child;
}
function Fu(e6, n5) {
  return !!(e6.lanes & n5) || !(null === (e6 = e6.dependencies) || !ra(e6));
}
function Ou(e6, n5, t5) {
  if (null !== e6) if (e6.memoizedProps !== n5.pendingProps) ou = true;
  else {
    if (!(Fu(e6, t5) || 128 & n5.flags)) return ou = false, function(e7, n6, t6) {
      switch (n6.tag) {
        case 3:
          we2(n6, n6.stateNode.containerInfo), Zl(0, fa, e7.memoizedState.cache), Wl();
          break;
        case 27:
        case 5:
          Ee2(n6);
          break;
        case 4:
          we2(n6, n6.stateNode.containerInfo);
          break;
        case 10:
          Zl(0, n6.type, n6.memoizedProps.value);
          break;
        case 31:
          if (null !== n6.memoizedState) return n6.flags |= 128, uo(n6), null;
          break;
        case 13:
          var r7 = n6.memoizedState;
          if (null !== r7) return null !== r7.dehydrated ? (io(n6), n6.flags |= 128, null) : t6 & n6.child.childLanes ? xu(e7, n6, t6) : (io(n6), null !== (e7 = _u(e7, n6, t6)) ? e7.sibling : null);
          io(n6);
          break;
        case 19:
          var l6 = !!(128 & e7.flags);
          if ((r7 = !!(t6 & n6.childLanes)) || (ta(e7, n6, t6, false), r7 = !!(t6 & n6.childLanes)), l6) {
            if (r7) return Lu(e7, n6, t6);
            n6.flags |= 128;
          }
          if (null !== (l6 = n6.memoizedState) && (l6.rendering = null, l6.tail = null, l6.lastEffect = null), me2(po, po.current), r7) break;
          return null;
        case 22:
          return n6.lanes = 0, fu(e7, n6, t6, n6.pendingProps);
        case 24:
          Zl(0, fa, e7.memoizedState.cache);
      }
      return _u(e7, n6, t6);
    }(e6, n5, t5);
    ou = !!(131072 & e6.flags);
  }
  else ou = false, Il && 1048576 & n5.flags && Fl(n5, Cl, n5.index);
  switch (n5.lanes = 0, n5.tag) {
    case 16:
      e: {
        var r6 = n5.pendingProps;
        if (e6 = La(n5.elementType), n5.type = e6, "function" != typeof e6) {
          if (null != e6) {
            var l5 = e6.$$typeof;
            if (l5 === Y2) {
              n5.tag = 11, n5 = uu(null, n5, e6, r6, t5);
              break e;
            }
            if (l5 === Z2) {
              n5.tag = 14, n5 = su(null, n5, e6, r6, t5);
              break e;
            }
          }
          throw n5 = ae2(e6) || e6, Error(O3(306, n5, ""));
        }
        dl(e6) ? (r6 = Xi(e6, r6), n5.tag = 1, n5 = bu(null, n5, e6, r6, t5)) : (n5.tag = 0, n5 = vu(null, n5, e6, r6, t5));
      }
      return n5;
    case 0:
      return vu(e6, n5, n5.type, n5.pendingProps, t5);
    case 1:
      return bu(e6, n5, r6 = n5.type, l5 = Xi(r6, n5.pendingProps), t5);
    case 3:
      e: {
        if (we2(n5, n5.stateNode.containerInfo), null === e6) throw Error(O3(387));
        r6 = n5.pendingProps;
        var a6 = n5.memoizedState;
        l5 = a6.element, Ha(e6, n5), Ga(n5, r6, null, t5);
        var o5 = n5.memoizedState;
        if (r6 = o5.cache, Zl(0, fa, r6), r6 !== a6.cache && na(n5, [
          fa
        ], t5, true), Xa(), r6 = o5.element, a6.isDehydrated) {
          if (a6 = {
            element: r6,
            isDehydrated: false,
            cache: o5.cache
          }, n5.updateQueue.baseState = a6, n5.memoizedState = a6, 256 & n5.flags) {
            n5 = ku(e6, n5, r6, t5);
            break e;
          }
          if (r6 !== l5) {
            Kl(l5 = wl(Error(O3(424)), n5)), n5 = ku(e6, n5, r6, t5);
            break e;
          }
          if (9 === (e6 = n5.stateNode.containerInfo).nodeType) e6 = e6.body;
          else e6 = "HTML" === e6.nodeName ? e6.ownerDocument.body : e6;
          for (Rl = id(e6.firstChild), Ml = n5, Il = true, Ul = null, Vl = true, t5 = $a(n5, null, r6, t5), n5.child = t5; t5; ) t5.flags = -3 & t5.flags | 4096, t5 = t5.sibling;
        } else {
          if (Wl(), r6 === l5) {
            n5 = _u(e6, n5, t5);
            break e;
          }
          iu(e6, n5, r6, t5);
        }
        n5 = n5.child;
      }
      return n5;
    case 26:
      return gu(e6, n5), null === e6 ? (t5 = bd(n5.type, null, n5.pendingProps, null)) ? n5.memoizedState = t5 : Il || (t5 = n5.type, e6 = n5.pendingProps, (r6 = Hf(be2.current).createElement(t5))[hn] = n5, r6[gn] = e6, Vf(r6, t5, e6), Nn(r6), n5.stateNode = r6) : n5.memoizedState = bd(n5.type, e6.memoizedProps, n5.pendingProps, e6.memoizedState), null;
    case 27:
      return Ee2(n5), null === e6 && Il && (r6 = n5.stateNode = fd(n5.type, n5.pendingProps, be2.current), Ml = n5, Vl = true, l5 = Rl, ed(n5.type) ? (ud = l5, Rl = id(r6.firstChild)) : Rl = l5), iu(e6, n5, n5.pendingProps.children, t5), gu(e6, n5), null === e6 && (n5.flags |= 4194304), n5.child;
    case 5:
      return null === e6 && Il && ((l5 = r6 = Rl) && (null !== (r6 = function(e7, n6, t6, r7) {
        for (; 1 === e7.nodeType; ) {
          var l6 = t6;
          if (e7.nodeName.toLowerCase() !== n6.toLowerCase()) {
            if (!r7 && ("INPUT" !== e7.nodeName || "hidden" !== e7.type)) break;
          } else if (r7) {
            if (!e7[Sn]) switch (n6) {
              case "meta":
                if (!e7.hasAttribute("itemprop")) break;
                return e7;
              case "link":
                if ("stylesheet" === (a7 = e7.getAttribute("rel")) && e7.hasAttribute("data-precedence")) break;
                if (a7 !== l6.rel || e7.getAttribute("href") !== (null == l6.href || "" === l6.href ? null : l6.href) || e7.getAttribute("crossorigin") !== (null == l6.crossOrigin ? null : l6.crossOrigin) || e7.getAttribute("title") !== (null == l6.title ? null : l6.title)) break;
                return e7;
              case "style":
                if (e7.hasAttribute("data-precedence")) break;
                return e7;
              case "script":
                if (((a7 = e7.getAttribute("src")) !== (null == l6.src ? null : l6.src) || e7.getAttribute("type") !== (null == l6.type ? null : l6.type) || e7.getAttribute("crossorigin") !== (null == l6.crossOrigin ? null : l6.crossOrigin)) && a7 && e7.hasAttribute("async") && !e7.hasAttribute("itemprop")) break;
                return e7;
              default:
                return e7;
            }
          } else {
            if ("input" !== n6 || "hidden" !== e7.type) return e7;
            var a7 = null == l6.name ? null : "" + l6.name;
            if ("hidden" === l6.type && e7.getAttribute("name") === a7) return e7;
          }
          if (null === (e7 = id(e7.nextSibling))) break;
        }
        return null;
      }(r6, n5.type, n5.pendingProps, Vl)) ? (n5.stateNode = r6, Ml = n5, Rl = id(r6.firstChild), Vl = false, l5 = true) : l5 = false), l5 || jl(n5)), Ee2(n5), l5 = n5.type, a6 = n5.pendingProps, o5 = null !== e6 ? e6.memoizedProps : null, r6 = a6.children, qf(l5, a6) ? r6 = null : null !== o5 && qf(l5, o5) && (n5.flags |= 32), null !== n5.memoizedState && (l5 = No(e6, n5, _o, null, null, t5), Id._currentValue = l5), gu(e6, n5), iu(e6, n5, r6, t5), n5.child;
    case 6:
      return null === e6 && Il && ((e6 = t5 = Rl) && (null !== (t5 = function(e7, n6, t6) {
        if ("" === n6) return null;
        for (; 3 !== e7.nodeType; ) {
          if ((1 !== e7.nodeType || "INPUT" !== e7.nodeName || "hidden" !== e7.type) && !t6) return null;
          if (null === (e7 = id(e7.nextSibling))) return null;
        }
        return e7;
      }(t5, n5.pendingProps, Vl)) ? (n5.stateNode = t5, Ml = n5, Rl = null, e6 = true) : e6 = false), e6 || jl(n5)), null;
    case 13:
      return xu(e6, n5, t5);
    case 4:
      return we2(n5, n5.stateNode.containerInfo), r6 = n5.pendingProps, null === e6 ? n5.child = Va(n5, null, r6, t5) : iu(e6, n5, r6, t5), n5.child;
    case 11:
      return uu(e6, n5, n5.type, n5.pendingProps, t5);
    case 7:
      return iu(e6, n5, n5.pendingProps, t5), n5.child;
    case 8:
    case 12:
      return iu(e6, n5, n5.pendingProps.children, t5), n5.child;
    case 10:
      return r6 = n5.pendingProps, Zl(0, n5.type, r6.value), iu(e6, n5, r6.children, t5), n5.child;
    case 9:
      return l5 = n5.type._context, r6 = n5.pendingProps.children, la(n5), r6 = r6(l5 = aa(l5)), n5.flags |= 1, iu(e6, n5, r6, t5), n5.child;
    case 14:
      return su(e6, n5, n5.type, n5.pendingProps, t5);
    case 15:
      return cu(e6, n5, n5.type, n5.pendingProps, t5);
    case 19:
      return Lu(e6, n5, t5);
    case 31:
      return function(e7, n6, t6) {
        var r7 = n6.pendingProps, l6 = !!(128 & n6.flags);
        if (n6.flags &= -129, null === e7) {
          if (Il) {
            if ("hidden" === r7.mode) return e7 = mu(n6, r7), n6.lanes = 536870912, du(null, e7);
            if (uo(n6), (e7 = Rl) ? null !== (e7 = null !== (e7 = ld(e7, Vl)) && "&" === e7.data ? e7 : null) && (n6.memoizedState = {
              dehydrated: e7,
              treeContext: null !== Nl ? {
                id: Tl,
                overflow: Ll
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, (t6 = yl(e7)).return = n6, n6.child = t6, Ml = n6, Rl = null) : e7 = null, null === e7) throw jl(n6);
            return n6.lanes = 536870912, null;
          }
          return mu(n6, r7);
        }
        var a7 = e7.memoizedState;
        if (null !== a7) {
          var o6 = a7.dehydrated;
          if (uo(n6), l6) if (256 & n6.flags) n6.flags &= -257, n6 = hu(e7, n6, t6);
          else {
            if (null === n6.memoizedState) throw Error(O3(558));
            n6.child = e7.child, n6.flags |= 128, n6 = null;
          }
          else if (ou || ta(e7, n6, t6, false), l6 = !!(t6 & e7.childLanes), ou || l6) {
            if (null !== (r7 = $s) && 0 !== (o6 = sn(r7, t6)) && o6 !== a7.retryLane) throw a7.retryLane = o6, ol(e7, o6), wc(r7, e7, o6), au;
            Oc(), n6 = hu(e7, n6, t6);
          } else e7 = a7.treeContext, Rl = id(o6.nextSibling), Ml = n6, Il = true, Ul = null, Vl = false, null !== e7 && Al(n6, e7), (n6 = mu(n6, r7)).flags |= 4096;
          return n6;
        }
        return (e7 = pl(e7.child, {
          mode: r7.mode,
          children: r7.children
        })).ref = n6.ref, n6.child = e7, e7.return = n6, e7;
      }(e6, n5, t5);
    case 22:
      return fu(e6, n5, t5, n5.pendingProps);
    case 24:
      return la(n5), r6 = aa(fa), null === e6 ? (null === (l5 = wa()) && (l5 = $s, a6 = da(), l5.pooledCache = a6, a6.refCount++, null !== a6 && (l5.pooledCacheLanes |= t5), l5 = a6), n5.memoizedState = {
        parent: r6,
        cache: l5
      }, Ba(n5), Zl(0, fa, l5)) : (!!(e6.lanes & t5) && (Ha(e6, n5), Ga(n5, null, null, t5), Xa()), l5 = e6.memoizedState, a6 = n5.memoizedState, l5.parent !== r6 ? (l5 = {
        parent: r6,
        cache: r6
      }, n5.memoizedState = l5, 0 === n5.lanes && (n5.memoizedState = n5.updateQueue.baseState = l5), Zl(0, fa, r6)) : (r6 = a6.cache, Zl(0, fa, r6), r6 !== l5.cache && na(n5, [
        fa
      ], t5, true))), iu(e6, n5, n5.pendingProps.children, t5), n5.child;
    case 29:
      throw n5.pendingProps;
  }
  throw Error(O3(156, n5.tag));
}
function Du(e6) {
  e6.flags |= 4;
}
function Au(e6, n5, t5, r6, l5) {
  if ((n5 = !!(32 & e6.mode)) && (n5 = false), n5) {
    if (e6.flags |= 16777216, (335544128 & l5) === l5) if (e6.stateNode.complete) e6.flags |= 8192;
    else {
      if (!Lc()) throw _a = Pa, Ca;
      e6.flags |= 8192;
    }
  } else e6.flags &= -16777217;
}
function Mu(e6, n5) {
  if ("stylesheet" !== n5.type || 4 & n5.state.loading) e6.flags &= -16777217;
  else if (e6.flags |= 16777216, !Fd(n5)) {
    if (!Lc()) throw _a = Pa, Ca;
    e6.flags |= 8192;
  }
}
function Ru(e6, n5) {
  null !== n5 && (e6.flags |= 4), 16384 & e6.flags && (n5 = 22 !== e6.tag ? rn() : 536870912, e6.lanes |= n5, nc |= n5);
}
function Iu(e6, n5) {
  if (!Il) switch (e6.tailMode) {
    case "hidden":
      n5 = e6.tail;
      for (var t5 = null; null !== n5; ) null !== n5.alternate && (t5 = n5), n5 = n5.sibling;
      null === t5 ? e6.tail = null : t5.sibling = null;
      break;
    case "collapsed":
      t5 = e6.tail;
      for (var r6 = null; null !== t5; ) null !== t5.alternate && (r6 = t5), t5 = t5.sibling;
      null === r6 ? n5 || null === e6.tail ? e6.tail = null : e6.tail.sibling = null : r6.sibling = null;
  }
}
function Uu(e6) {
  var n5 = null !== e6.alternate && e6.alternate.child === e6.child, t5 = 0, r6 = 0;
  if (n5) for (var l5 = e6.child; null !== l5; ) t5 |= l5.lanes | l5.childLanes, r6 |= 65011712 & l5.subtreeFlags, r6 |= 65011712 & l5.flags, l5.return = e6, l5 = l5.sibling;
  else for (l5 = e6.child; null !== l5; ) t5 |= l5.lanes | l5.childLanes, r6 |= l5.subtreeFlags, r6 |= l5.flags, l5.return = e6, l5 = l5.sibling;
  return e6.subtreeFlags |= r6, e6.childLanes = t5, n5;
}
function Vu(e6, n5, t5) {
  var r6 = n5.pendingProps;
  switch (Dl(n5), n5.tag) {
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
    case 1:
      return Uu(n5), null;
    case 3:
      return t5 = n5.stateNode, r6 = null, null !== e6 && (r6 = e6.memoizedState.cache), n5.memoizedState.cache !== r6 && (n5.flags |= 2048), Jl(fa), Se2(), t5.pendingContext && (t5.context = t5.pendingContext, t5.pendingContext = null), null !== e6 && null !== e6.child || (Ql(n5) ? Du(n5) : null === e6 || e6.memoizedState.isDehydrated && !(256 & n5.flags) || (n5.flags |= 1024, ql())), Uu(n5), null;
    case 26:
      var l5 = n5.type, a6 = n5.memoizedState;
      return null === e6 ? (Du(n5), null !== a6 ? (Uu(n5), Mu(n5, a6)) : (Uu(n5), Au(n5, l5, 0, 0, t5))) : a6 ? a6 !== e6.memoizedState ? (Du(n5), Uu(n5), Mu(n5, a6)) : (Uu(n5), n5.flags &= -16777217) : ((e6 = e6.memoizedProps) !== r6 && Du(n5), Uu(n5), Au(n5, l5, 0, 0, t5)), null;
    case 27:
      if (xe2(n5), t5 = be2.current, l5 = n5.type, null !== e6 && null != n5.stateNode) e6.memoizedProps !== r6 && Du(n5);
      else {
        if (!r6) {
          if (null === n5.stateNode) throw Error(O3(166));
          return Uu(n5), null;
        }
        e6 = ve2.current, Ql(n5) ? Bl(n5) : (e6 = fd(l5, r6, t5), n5.stateNode = e6, Du(n5));
      }
      return Uu(n5), null;
    case 5:
      if (xe2(n5), l5 = n5.type, null !== e6 && null != n5.stateNode) e6.memoizedProps !== r6 && Du(n5);
      else {
        if (!r6) {
          if (null === n5.stateNode) throw Error(O3(166));
          return Uu(n5), null;
        }
        if (a6 = ve2.current, Ql(n5)) Bl(n5);
        else {
          var o5 = Hf(be2.current);
          switch (a6) {
            case 1:
              a6 = o5.createElementNS("http://www.w3.org/2000/svg", l5);
              break;
            case 2:
              a6 = o5.createElementNS("http://www.w3.org/1998/Math/MathML", l5);
              break;
            default:
              switch (l5) {
                case "svg":
                  a6 = o5.createElementNS("http://www.w3.org/2000/svg", l5);
                  break;
                case "math":
                  a6 = o5.createElementNS("http://www.w3.org/1998/Math/MathML", l5);
                  break;
                case "script":
                  (a6 = o5.createElement("div")).innerHTML = "<script><\/script>", a6 = a6.removeChild(a6.firstChild);
                  break;
                case "select":
                  a6 = "string" == typeof r6.is ? o5.createElement("select", {
                    is: r6.is
                  }) : o5.createElement("select"), r6.multiple ? a6.multiple = true : r6.size && (a6.size = r6.size);
                  break;
                default:
                  a6 = "string" == typeof r6.is ? o5.createElement(l5, {
                    is: r6.is
                  }) : o5.createElement(l5);
              }
          }
          a6[hn] = n5, a6[gn] = r6;
          e: for (o5 = n5.child; null !== o5; ) {
            if (5 === o5.tag || 6 === o5.tag) a6.appendChild(o5.stateNode);
            else if (4 !== o5.tag && 27 !== o5.tag && null !== o5.child) {
              o5.child.return = o5, o5 = o5.child;
              continue;
            }
            if (o5 === n5) break e;
            for (; null === o5.sibling; ) {
              if (null === o5.return || o5.return === n5) break e;
              o5 = o5.return;
            }
            o5.sibling.return = o5.return, o5 = o5.sibling;
          }
          n5.stateNode = a6;
          e: switch (Vf(a6, l5, r6), l5) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              r6 = !!r6.autoFocus;
              break e;
            case "img":
              r6 = true;
              break e;
            default:
              r6 = false;
          }
          r6 && Du(n5);
        }
      }
      return Uu(n5), Au(n5, n5.type, null === e6 || e6.memoizedProps, n5.pendingProps, t5), null;
    case 6:
      if (e6 && null != n5.stateNode) e6.memoizedProps !== r6 && Du(n5);
      else {
        if ("string" != typeof r6 && null === n5.stateNode) throw Error(O3(166));
        if (e6 = be2.current, Ql(n5)) {
          if (e6 = n5.stateNode, t5 = n5.memoizedProps, r6 = null, null !== (l5 = Ml)) switch (l5.tag) {
            case 27:
            case 5:
              r6 = l5.memoizedProps;
          }
          e6[hn] = n5, (e6 = !!(e6.nodeValue === t5 || null !== r6 && true === r6.suppressHydrationWarning || Rf(e6.nodeValue, t5))) || jl(n5, true);
        } else (e6 = Hf(e6).createTextNode(r6))[hn] = n5, n5.stateNode = e6;
      }
      return Uu(n5), null;
    case 31:
      if (t5 = n5.memoizedState, null === e6 || null !== e6.memoizedState) {
        if (r6 = Ql(n5), null !== t5) {
          if (null === e6) {
            if (!r6) throw Error(O3(318));
            if (!(e6 = null !== (e6 = n5.memoizedState) ? e6.dehydrated : null)) throw Error(O3(557));
            e6[hn] = n5;
          } else Wl(), !(128 & n5.flags) && (n5.memoizedState = null), n5.flags |= 4;
          Uu(n5), e6 = false;
        } else t5 = ql(), null !== e6 && null !== e6.memoizedState && (e6.memoizedState.hydrationErrors = t5), e6 = true;
        if (!e6) return 256 & n5.flags ? (fo(n5), n5) : (fo(n5), null);
        if (128 & n5.flags) throw Error(O3(558));
      }
      return Uu(n5), null;
    case 13:
      if (r6 = n5.memoizedState, null === e6 || null !== e6.memoizedState && null !== e6.memoizedState.dehydrated) {
        if (l5 = Ql(n5), null !== r6 && null !== r6.dehydrated) {
          if (null === e6) {
            if (!l5) throw Error(O3(318));
            if (!(l5 = null !== (l5 = n5.memoizedState) ? l5.dehydrated : null)) throw Error(O3(317));
            l5[hn] = n5;
          } else Wl(), !(128 & n5.flags) && (n5.memoizedState = null), n5.flags |= 4;
          Uu(n5), l5 = false;
        } else l5 = ql(), null !== e6 && null !== e6.memoizedState && (e6.memoizedState.hydrationErrors = l5), l5 = true;
        if (!l5) return 256 & n5.flags ? (fo(n5), n5) : (fo(n5), null);
      }
      return fo(n5), 128 & n5.flags ? (n5.lanes = t5, n5) : (t5 = null !== r6, e6 = null !== e6 && null !== e6.memoizedState, t5 && (l5 = null, null !== (r6 = n5.child).alternate && null !== r6.alternate.memoizedState && null !== r6.alternate.memoizedState.cachePool && (l5 = r6.alternate.memoizedState.cachePool.pool), a6 = null, null !== r6.memoizedState && null !== r6.memoizedState.cachePool && (a6 = r6.memoizedState.cachePool.pool), a6 !== l5 && (r6.flags |= 2048)), t5 !== e6 && t5 && (n5.child.flags |= 8192), Ru(n5, n5.updateQueue), Uu(n5), null);
    case 4:
      return Se2(), null === e6 && Pf(n5.stateNode.containerInfo), Uu(n5), null;
    case 10:
      return Jl(n5.type), Uu(n5), null;
    case 19:
      if (pe2(po), null === (r6 = n5.memoizedState)) return Uu(n5), null;
      if (l5 = !!(128 & n5.flags), null === (a6 = r6.rendering)) if (l5) Iu(r6, false);
      else {
        if (0 !== Xs || null !== e6 && 128 & e6.flags) for (e6 = n5.child; null !== e6; ) {
          if (null !== (a6 = mo(e6))) {
            for (n5.flags |= 128, Iu(r6, false), e6 = a6.updateQueue, n5.updateQueue = e6, Ru(n5, e6), n5.subtreeFlags = 0, e6 = t5, t5 = n5.child; null !== t5; ) ml(t5, e6), t5 = t5.sibling;
            return me2(po, 1 & po.current | 2), Il && _l(n5, r6.treeForkCount), n5.child;
          }
          e6 = e6.sibling;
        }
        null !== r6.tail && Ae2() > ic && (n5.flags |= 128, l5 = true, Iu(r6, false), n5.lanes = 4194304);
      }
      else {
        if (!l5) if (null !== (e6 = mo(a6))) {
          if (n5.flags |= 128, l5 = true, e6 = e6.updateQueue, n5.updateQueue = e6, Ru(n5, e6), Iu(r6, true), null === r6.tail && "hidden" === r6.tailMode && !a6.alternate && !Il) return Uu(n5), null;
        } else 2 * Ae2() - r6.renderingStartTime > ic && 536870912 !== t5 && (n5.flags |= 128, l5 = true, Iu(r6, false), n5.lanes = 4194304);
        r6.isBackwards ? (a6.sibling = n5.child, n5.child = a6) : (null !== (e6 = r6.last) ? e6.sibling = a6 : n5.child = a6, r6.last = a6);
      }
      return null !== r6.tail ? (e6 = r6.tail, r6.rendering = e6, r6.tail = e6.sibling, r6.renderingStartTime = Ae2(), e6.sibling = null, t5 = po.current, me2(po, l5 ? 1 & t5 | 2 : 1 & t5), Il && _l(n5, r6.treeForkCount), e6) : (Uu(n5), null);
    case 22:
    case 23:
      return fo(n5), lo(), r6 = null !== n5.memoizedState, null !== e6 ? null !== e6.memoizedState !== r6 && (n5.flags |= 8192) : r6 && (n5.flags |= 8192), r6 ? !!(536870912 & t5) && !(128 & n5.flags) && (Uu(n5), 6 & n5.subtreeFlags && (n5.flags |= 8192)) : Uu(n5), null !== (t5 = n5.updateQueue) && Ru(n5, t5.retryQueue), t5 = null, null !== e6 && null !== e6.memoizedState && null !== e6.memoizedState.cachePool && (t5 = e6.memoizedState.cachePool.pool), r6 = null, null !== n5.memoizedState && null !== n5.memoizedState.cachePool && (r6 = n5.memoizedState.cachePool.pool), r6 !== t5 && (n5.flags |= 2048), null !== e6 && pe2(ka), null;
    case 24:
      return t5 = null, null !== e6 && (t5 = e6.memoizedState.cache), n5.memoizedState.cache !== t5 && (n5.flags |= 2048), Jl(fa), Uu(n5), null;
    case 25:
    case 30:
      return null;
  }
  throw Error(O3(156, n5.tag));
}
function $u(e6, n5) {
  switch (Dl(n5), n5.tag) {
    case 1:
      return 65536 & (e6 = n5.flags) ? (n5.flags = -65537 & e6 | 128, n5) : null;
    case 3:
      return Jl(fa), Se2(), 65536 & (e6 = n5.flags) && !(128 & e6) ? (n5.flags = -65537 & e6 | 128, n5) : null;
    case 26:
    case 27:
    case 5:
      return xe2(n5), null;
    case 31:
      if (null !== n5.memoizedState) {
        if (fo(n5), null === n5.alternate) throw Error(O3(340));
        Wl();
      }
      return 65536 & (e6 = n5.flags) ? (n5.flags = -65537 & e6 | 128, n5) : null;
    case 13:
      if (fo(n5), null !== (e6 = n5.memoizedState) && null !== e6.dehydrated) {
        if (null === n5.alternate) throw Error(O3(340));
        Wl();
      }
      return 65536 & (e6 = n5.flags) ? (n5.flags = -65537 & e6 | 128, n5) : null;
    case 19:
      return pe2(po), null;
    case 4:
      return Se2(), null;
    case 10:
      return Jl(n5.type), null;
    case 22:
    case 23:
      return fo(n5), lo(), null !== e6 && pe2(ka), 65536 & (e6 = n5.flags) ? (n5.flags = -65537 & e6 | 128, n5) : null;
    case 24:
      return Jl(fa), null;
    default:
      return null;
  }
}
function ju(e6, n5) {
  switch (Dl(n5), n5.tag) {
    case 3:
      Jl(fa), Se2();
      break;
    case 26:
    case 27:
    case 5:
      xe2(n5);
      break;
    case 4:
      Se2();
      break;
    case 31:
      null !== n5.memoizedState && fo(n5);
      break;
    case 13:
      fo(n5);
      break;
    case 19:
      pe2(po);
      break;
    case 10:
      Jl(n5.type);
      break;
    case 22:
    case 23:
      fo(n5), lo(), null !== e6 && pe2(ka);
      break;
    case 24:
      Jl(fa);
  }
}
function Bu(e6, n5) {
  try {
    var t5 = n5.updateQueue, r6 = null !== t5 ? t5.lastEffect : null;
    if (null !== r6) {
      var l5 = r6.next;
      t5 = l5;
      do {
        if ((t5.tag & e6) === e6) {
          r6 = void 0;
          var a6 = t5.create, o5 = t5.inst;
          r6 = a6(), o5.destroy = r6;
        }
        t5 = t5.next;
      } while (t5 !== l5);
    }
  } catch (e7) {
    Xc(n5, n5.return, e7);
  }
}
function Hu(e6, n5, t5) {
  try {
    var r6 = n5.updateQueue, l5 = null !== r6 ? r6.lastEffect : null;
    if (null !== l5) {
      var a6 = l5.next;
      r6 = a6;
      do {
        if ((r6.tag & e6) === e6) {
          var o5 = r6.inst, i5 = o5.destroy;
          if (void 0 !== i5) {
            o5.destroy = void 0, l5 = n5;
            var u5 = t5, s6 = i5;
            try {
              s6();
            } catch (e7) {
              Xc(l5, u5, e7);
            }
          }
        }
        r6 = r6.next;
      } while (r6 !== a6);
    }
  } catch (e7) {
    Xc(n5, n5.return, e7);
  }
}
function Qu(e6) {
  var n5 = e6.updateQueue;
  if (null !== n5) {
    var t5 = e6.stateNode;
    try {
      Ja(n5, t5);
    } catch (n6) {
      Xc(e6, e6.return, n6);
    }
  }
}
function Wu(e6, n5, t5) {
  t5.props = Xi(e6.type, e6.memoizedProps), t5.state = e6.memoizedState;
  try {
    t5.componentWillUnmount();
  } catch (t6) {
    Xc(e6, n5, t6);
  }
}
function qu(e6, n5) {
  try {
    var t5 = e6.ref;
    if (null !== t5) {
      switch (e6.tag) {
        case 26:
        case 27:
        case 5:
          var r6 = e6.stateNode;
          break;
        default:
          r6 = e6.stateNode;
      }
      "function" == typeof t5 ? e6.refCleanup = t5(r6) : t5.current = r6;
    }
  } catch (t6) {
    Xc(e6, n5, t6);
  }
}
function Ku(e6, n5) {
  var t5 = e6.ref, r6 = e6.refCleanup;
  if (null !== t5) if ("function" == typeof r6) try {
    r6();
  } catch (t6) {
    Xc(e6, n5, t6);
  } finally {
    e6.refCleanup = null, null != (e6 = e6.alternate) && (e6.refCleanup = null);
  }
  else if ("function" == typeof t5) try {
    t5(null);
  } catch (t6) {
    Xc(e6, n5, t6);
  }
  else t5.current = null;
}
function Yu(e6) {
  var n5 = e6.type, t5 = e6.memoizedProps, r6 = e6.stateNode;
  try {
    e: switch (n5) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        t5.autoFocus && r6.focus();
        break e;
      case "img":
        t5.src ? r6.src = t5.src : t5.srcSet && (r6.srcset = t5.srcSet);
    }
  } catch (n6) {
    Xc(e6, e6.return, n6);
  }
}
function Xu(e6, n5, t5) {
  try {
    var r6 = e6.stateNode;
    !function(e7, n6, t6, r7) {
      switch (n6) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var l5 = null, a6 = null, o5 = null, i5 = null, u5 = null, s6 = null, c5 = null;
          for (p5 in t6) {
            var f5 = t6[p5];
            if (t6.hasOwnProperty(p5) && null != f5) switch (p5) {
              case "checked":
              case "value":
                break;
              case "defaultValue":
                u5 = f5;
              default:
                r7.hasOwnProperty(p5) || If(e7, n6, p5, null, r7, f5);
            }
          }
          for (var d5 in r7) {
            var p5 = r7[d5];
            if (f5 = t6[d5], r7.hasOwnProperty(d5) && (null != p5 || null != f5)) switch (d5) {
              case "type":
                a6 = p5;
                break;
              case "name":
                l5 = p5;
                break;
              case "checked":
                s6 = p5;
                break;
              case "defaultChecked":
                c5 = p5;
                break;
              case "value":
                o5 = p5;
                break;
              case "defaultValue":
                i5 = p5;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (null != p5) throw Error(O3(137, n6));
                break;
              default:
                p5 !== f5 && If(e7, n6, d5, p5, r7, f5);
            }
          }
          return void Wn(e7, o5, i5, u5, s6, c5, a6, l5);
        case "select":
          for (a6 in p5 = o5 = i5 = d5 = null, t6) if (u5 = t6[a6], t6.hasOwnProperty(a6) && null != u5) switch (a6) {
            case "value":
              break;
            case "multiple":
              p5 = u5;
            default:
              r7.hasOwnProperty(a6) || If(e7, n6, a6, null, r7, u5);
          }
          for (l5 in r7) if (a6 = r7[l5], u5 = t6[l5], r7.hasOwnProperty(l5) && (null != a6 || null != u5)) switch (l5) {
            case "value":
              d5 = a6;
              break;
            case "defaultValue":
              i5 = a6;
              break;
            case "multiple":
              o5 = a6;
            default:
              a6 !== u5 && If(e7, n6, l5, a6, r7, u5);
          }
          return n6 = i5, t6 = o5, r7 = p5, void (null != d5 ? Yn(e7, !!t6, d5, false) : !!r7 != !!t6 && (null != n6 ? Yn(e7, !!t6, n6, true) : Yn(e7, !!t6, t6 ? [] : "", false)));
        case "textarea":
          for (i5 in p5 = d5 = null, t6) if (l5 = t6[i5], t6.hasOwnProperty(i5) && null != l5 && !r7.hasOwnProperty(i5)) switch (i5) {
            case "value":
            case "children":
              break;
            default:
              If(e7, n6, i5, null, r7, l5);
          }
          for (o5 in r7) if (l5 = r7[o5], a6 = t6[o5], r7.hasOwnProperty(o5) && (null != l5 || null != a6)) switch (o5) {
            case "value":
              d5 = l5;
              break;
            case "defaultValue":
              p5 = l5;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (null != l5) throw Error(O3(91));
              break;
            default:
              l5 !== a6 && If(e7, n6, o5, l5, r7, a6);
          }
          return void Xn(e7, d5, p5);
        case "option":
          for (var m4 in t6) if (d5 = t6[m4], t6.hasOwnProperty(m4) && null != d5 && !r7.hasOwnProperty(m4)) if ("selected" === m4) e7.selected = false;
          else If(e7, n6, m4, null, r7, d5);
          for (u5 in r7) if (d5 = r7[u5], p5 = t6[u5], r7.hasOwnProperty(u5) && d5 !== p5 && (null != d5 || null != p5)) if ("selected" === u5) e7.selected = d5 && "function" != typeof d5 && "symbol" != typeof d5;
          else If(e7, n6, u5, d5, r7, p5);
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var h4 in t6) d5 = t6[h4], t6.hasOwnProperty(h4) && null != d5 && !r7.hasOwnProperty(h4) && If(e7, n6, h4, null, r7, d5);
          for (s6 in r7) if (d5 = r7[s6], p5 = t6[s6], r7.hasOwnProperty(s6) && d5 !== p5 && (null != d5 || null != p5)) switch (s6) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (null != d5) throw Error(O3(137, n6));
              break;
            default:
              If(e7, n6, s6, d5, r7, p5);
          }
          return;
        default:
          if (tt(n6)) {
            for (var g4 in t6) d5 = t6[g4], t6.hasOwnProperty(g4) && void 0 !== d5 && !r7.hasOwnProperty(g4) && Uf(e7, n6, g4, void 0, r7, d5);
            for (c5 in r7) d5 = r7[c5], p5 = t6[c5], !r7.hasOwnProperty(c5) || d5 === p5 || void 0 === d5 && void 0 === p5 || Uf(e7, n6, c5, d5, r7, p5);
            return;
          }
      }
      for (var v5 in t6) d5 = t6[v5], t6.hasOwnProperty(v5) && null != d5 && !r7.hasOwnProperty(v5) && If(e7, n6, v5, null, r7, d5);
      for (f5 in r7) d5 = r7[f5], p5 = t6[f5], !r7.hasOwnProperty(f5) || d5 === p5 || null == d5 && null == p5 || If(e7, n6, f5, d5, r7, p5);
    }(r6, e6.type, t5, n5), r6[gn] = n5;
  } catch (n6) {
    Xc(e6, e6.return, n6);
  }
}
function Gu(e6) {
  return 5 === e6.tag || 3 === e6.tag || 26 === e6.tag || 27 === e6.tag && ed(e6.type) || 4 === e6.tag;
}
function Zu(e6) {
  e: for (; ; ) {
    for (; null === e6.sibling; ) {
      if (null === e6.return || Gu(e6.return)) return null;
      e6 = e6.return;
    }
    for (e6.sibling.return = e6.return, e6 = e6.sibling; 5 !== e6.tag && 6 !== e6.tag && 18 !== e6.tag; ) {
      if (27 === e6.tag && ed(e6.type)) continue e;
      if (2 & e6.flags) continue e;
      if (null === e6.child || 4 === e6.tag) continue e;
      e6.child.return = e6, e6 = e6.child;
    }
    if (!(2 & e6.flags)) return e6.stateNode;
  }
}
function Ju(e6, n5, t5) {
  var r6 = e6.tag;
  if (5 === r6 || 6 === r6) e6 = e6.stateNode, n5 ? (9 === t5.nodeType ? t5.body : "HTML" === t5.nodeName ? t5.ownerDocument.body : t5).insertBefore(e6, n5) : ((n5 = 9 === t5.nodeType ? t5.body : "HTML" === t5.nodeName ? t5.ownerDocument.body : t5).appendChild(e6), null != (t5 = t5._reactRootContainer) || null !== n5.onclick || (n5.onclick = ot));
  else if (4 !== r6 && (27 === r6 && ed(e6.type) && (t5 = e6.stateNode, n5 = null), null !== (e6 = e6.child))) for (Ju(e6, n5, t5), e6 = e6.sibling; null !== e6; ) Ju(e6, n5, t5), e6 = e6.sibling;
}
function es(e6, n5, t5) {
  var r6 = e6.tag;
  if (5 === r6 || 6 === r6) e6 = e6.stateNode, n5 ? t5.insertBefore(e6, n5) : t5.appendChild(e6);
  else if (4 !== r6 && (27 === r6 && ed(e6.type) && (t5 = e6.stateNode), null !== (e6 = e6.child))) for (es(e6, n5, t5), e6 = e6.sibling; null !== e6; ) es(e6, n5, t5), e6 = e6.sibling;
}
function ns(e6) {
  var n5 = e6.stateNode, t5 = e6.memoizedProps;
  try {
    for (var r6 = e6.type, l5 = n5.attributes; l5.length; ) n5.removeAttributeNode(l5[0]);
    Vf(n5, r6, t5), n5[hn] = e6, n5[gn] = t5;
  } catch (n6) {
    Xc(e6, e6.return, n6);
  }
}
var ts = false;
var rs = false;
var ls = false;
var as = "function" == typeof WeakSet ? WeakSet : Set;
var os = null;
function is(e6, n5, t5) {
  var r6 = t5.flags;
  switch (t5.tag) {
    case 0:
    case 11:
    case 15:
      ws(e6, t5), 4 & r6 && Bu(5, t5);
      break;
    case 1:
      if (ws(e6, t5), 4 & r6) if (e6 = t5.stateNode, null === n5) try {
        e6.componentDidMount();
      } catch (e7) {
        Xc(t5, t5.return, e7);
      }
      else {
        var l5 = Xi(t5.type, n5.memoizedProps);
        n5 = n5.memoizedState;
        try {
          e6.componentDidUpdate(l5, n5, e6.__reactInternalSnapshotBeforeUpdate);
        } catch (e7) {
          Xc(t5, t5.return, e7);
        }
      }
      64 & r6 && Qu(t5), 512 & r6 && qu(t5, t5.return);
      break;
    case 3:
      if (ws(e6, t5), 64 & r6 && null !== (e6 = t5.updateQueue)) {
        if (n5 = null, null !== t5.child) switch (t5.child.tag) {
          case 27:
          case 5:
          case 1:
            n5 = t5.child.stateNode;
        }
        try {
          Ja(e6, n5);
        } catch (e7) {
          Xc(t5, t5.return, e7);
        }
      }
      break;
    case 27:
      null === n5 && 4 & r6 && ns(t5);
    case 26:
    case 5:
      ws(e6, t5), null === n5 && 4 & r6 && Yu(t5), 512 & r6 && qu(t5, t5.return);
      break;
    case 12:
      ws(e6, t5);
      break;
    case 31:
      ws(e6, t5), 4 & r6 && ps(e6, t5);
      break;
    case 13:
      ws(e6, t5), 4 & r6 && ms(e6, t5), 64 & r6 && (null !== (e6 = t5.memoizedState) && (null !== (e6 = e6.dehydrated) && function(e7, n6) {
        var t6 = e7.ownerDocument;
        if ("$~" === e7.data) e7._reactRetry = n6;
        else if ("$?" !== e7.data || "loading" !== t6.readyState) n6();
        else {
          var r7 = function() {
            n6(), t6.removeEventListener("DOMContentLoaded", r7);
          };
          t6.addEventListener("DOMContentLoaded", r7), e7._reactRetry = r7;
        }
      }(e6, t5 = ef.bind(null, t5))));
      break;
    case 22:
      if (!(r6 = null !== t5.memoizedState || ts)) {
        n5 = null !== n5 && null !== n5.memoizedState || rs, l5 = ts;
        var a6 = rs;
        ts = r6, (rs = n5) && !a6 ? Es(e6, t5, !!(8772 & t5.subtreeFlags)) : ws(e6, t5), ts = l5, rs = a6;
      }
      break;
    case 30:
      break;
    default:
      ws(e6, t5);
  }
}
function us(e6) {
  var n5 = e6.alternate;
  null !== n5 && (e6.alternate = null, us(n5)), e6.child = null, e6.deletions = null, e6.sibling = null, 5 === e6.tag && (null !== (n5 = e6.stateNode) && En(n5)), e6.stateNode = null, e6.return = null, e6.dependencies = null, e6.memoizedProps = null, e6.memoizedState = null, e6.pendingProps = null, e6.stateNode = null, e6.updateQueue = null;
}
var ss = null;
var cs = false;
function fs(e6, n5, t5) {
  for (t5 = t5.child; null !== t5; ) ds(e6, n5, t5), t5 = t5.sibling;
}
function ds(e6, n5, t5) {
  if (Qe && "function" == typeof Qe.onCommitFiberUnmount) try {
    Qe.onCommitFiberUnmount(He2, t5);
  } catch (e7) {
  }
  switch (t5.tag) {
    case 26:
      rs || Ku(t5, n5), fs(e6, n5, t5), t5.memoizedState ? t5.memoizedState.count-- : t5.stateNode && (t5 = t5.stateNode).parentNode.removeChild(t5);
      break;
    case 27:
      rs || Ku(t5, n5);
      var r6 = ss, l5 = cs;
      ed(t5.type) && (ss = t5.stateNode, cs = false), fs(e6, n5, t5), dd(t5.stateNode), ss = r6, cs = l5;
      break;
    case 5:
      rs || Ku(t5, n5);
    case 6:
      if (r6 = ss, l5 = cs, ss = null, fs(e6, n5, t5), cs = l5, null !== (ss = r6)) if (cs) try {
        (9 === ss.nodeType ? ss.body : "HTML" === ss.nodeName ? ss.ownerDocument.body : ss).removeChild(t5.stateNode);
      } catch (e7) {
        Xc(t5, n5, e7);
      }
      else try {
        ss.removeChild(t5.stateNode);
      } catch (e7) {
        Xc(t5, n5, e7);
      }
      break;
    case 18:
      null !== ss && (cs ? (nd(9 === (e6 = ss).nodeType ? e6.body : "HTML" === e6.nodeName ? e6.ownerDocument.body : e6, t5.stateNode), yp(e6)) : nd(ss, t5.stateNode));
      break;
    case 4:
      r6 = ss, l5 = cs, ss = t5.stateNode.containerInfo, cs = true, fs(e6, n5, t5), ss = r6, cs = l5;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      Hu(2, t5, n5), rs || Hu(4, t5, n5), fs(e6, n5, t5);
      break;
    case 1:
      rs || (Ku(t5, n5), "function" == typeof (r6 = t5.stateNode).componentWillUnmount && Wu(t5, n5, r6)), fs(e6, n5, t5);
      break;
    case 21:
      fs(e6, n5, t5);
      break;
    case 22:
      rs = (r6 = rs) || null !== t5.memoizedState, fs(e6, n5, t5), rs = r6;
      break;
    default:
      fs(e6, n5, t5);
  }
}
function ps(e6, n5) {
  if (null === n5.memoizedState && (null !== (e6 = n5.alternate) && null !== (e6 = e6.memoizedState))) {
    e6 = e6.dehydrated;
    try {
      yp(e6);
    } catch (e7) {
      Xc(n5, n5.return, e7);
    }
  }
}
function ms(e6, n5) {
  if (null === n5.memoizedState && (null !== (e6 = n5.alternate) && (null !== (e6 = e6.memoizedState) && null !== (e6 = e6.dehydrated)))) try {
    yp(e6);
  } catch (e7) {
    Xc(n5, n5.return, e7);
  }
}
function hs(e6, n5) {
  var t5 = function(e7) {
    switch (e7.tag) {
      case 31:
      case 13:
      case 19:
        var n6 = e7.stateNode;
        return null === n6 && (n6 = e7.stateNode = new as()), n6;
      case 22:
        return null === (n6 = (e7 = e7.stateNode)._retryCache) && (n6 = e7._retryCache = new as()), n6;
      default:
        throw Error(O3(435, e7.tag));
    }
  }(e6);
  n5.forEach(function(n6) {
    if (!t5.has(n6)) {
      t5.add(n6);
      var r6 = nf.bind(null, e6, n6);
      n6.then(r6, r6);
    }
  });
}
function gs(e6, n5) {
  var t5 = n5.deletions;
  if (null !== t5) for (var r6 = 0; r6 < t5.length; r6++) {
    var l5 = t5[r6], a6 = e6, o5 = n5, i5 = o5;
    e: for (; null !== i5; ) {
      switch (i5.tag) {
        case 27:
          if (ed(i5.type)) {
            ss = i5.stateNode, cs = false;
            break e;
          }
          break;
        case 5:
          ss = i5.stateNode, cs = false;
          break e;
        case 3:
        case 4:
          ss = i5.stateNode.containerInfo, cs = true;
          break e;
      }
      i5 = i5.return;
    }
    if (null === ss) throw Error(O3(160));
    ds(a6, o5, l5), ss = null, cs = false, null !== (a6 = l5.alternate) && (a6.return = null), l5.return = null;
  }
  if (13886 & n5.subtreeFlags) for (n5 = n5.child; null !== n5; ) ys(n5, e6), n5 = n5.sibling;
}
var vs = null;
function ys(e6, n5) {
  var t5 = e6.alternate, r6 = e6.flags;
  switch (e6.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      gs(n5, e6), bs(e6), 4 & r6 && (Hu(3, e6, e6.return), Bu(3, e6), Hu(5, e6, e6.return));
      break;
    case 1:
      gs(n5, e6), bs(e6), 512 & r6 && (rs || null === t5 || Ku(t5, t5.return)), 64 & r6 && ts && (null !== (e6 = e6.updateQueue) && (null !== (r6 = e6.callbacks) && (t5 = e6.shared.hiddenCallbacks, e6.shared.hiddenCallbacks = null === t5 ? r6 : t5.concat(r6))));
      break;
    case 26:
      var l5 = vs;
      if (gs(n5, e6), bs(e6), 512 & r6 && (rs || null === t5 || Ku(t5, t5.return)), 4 & r6) {
        var a6 = null !== t5 ? t5.memoizedState : null;
        if (r6 = e6.memoizedState, null === t5) if (null === r6) if (null === e6.stateNode) {
          e: {
            r6 = e6.type, t5 = e6.memoizedProps, l5 = l5.ownerDocument || l5;
            n: switch (r6) {
              case "title":
                (!(a6 = l5.getElementsByTagName("title")[0]) || a6[Sn] || a6[hn] || "http://www.w3.org/2000/svg" === a6.namespaceURI || a6.hasAttribute("itemprop")) && (a6 = l5.createElement(r6), l5.head.insertBefore(a6, l5.querySelector("head > title"))), Vf(a6, r6, t5), a6[hn] = e6, Nn(a6), r6 = a6;
                break e;
              case "link":
                var o5 = Ld("link", "href", l5).get(r6 + (t5.href || ""));
                if (o5) {
                  for (var i5 = 0; i5 < o5.length; i5++) if ((a6 = o5[i5]).getAttribute("href") === (null == t5.href || "" === t5.href ? null : t5.href) && a6.getAttribute("rel") === (null == t5.rel ? null : t5.rel) && a6.getAttribute("title") === (null == t5.title ? null : t5.title) && a6.getAttribute("crossorigin") === (null == t5.crossOrigin ? null : t5.crossOrigin)) {
                    o5.splice(i5, 1);
                    break n;
                  }
                }
                Vf(a6 = l5.createElement(r6), r6, t5), l5.head.appendChild(a6);
                break;
              case "meta":
                if (o5 = Ld("meta", "content", l5).get(r6 + (t5.content || ""))) {
                  for (i5 = 0; i5 < o5.length; i5++) if ((a6 = o5[i5]).getAttribute("content") === (null == t5.content ? null : "" + t5.content) && a6.getAttribute("name") === (null == t5.name ? null : t5.name) && a6.getAttribute("property") === (null == t5.property ? null : t5.property) && a6.getAttribute("http-equiv") === (null == t5.httpEquiv ? null : t5.httpEquiv) && a6.getAttribute("charset") === (null == t5.charSet ? null : t5.charSet)) {
                    o5.splice(i5, 1);
                    break n;
                  }
                }
                Vf(a6 = l5.createElement(r6), r6, t5), l5.head.appendChild(a6);
                break;
              default:
                throw Error(O3(468, r6));
            }
            a6[hn] = e6, Nn(a6), r6 = a6;
          }
          e6.stateNode = r6;
        } else _d(l5, e6.type, e6.stateNode);
        else e6.stateNode = Cd(l5, r6, e6.memoizedProps);
        else a6 !== r6 ? (null === a6 ? null !== t5.stateNode && (t5 = t5.stateNode).parentNode.removeChild(t5) : a6.count--, null === r6 ? _d(l5, e6.type, e6.stateNode) : Cd(l5, r6, e6.memoizedProps)) : null === r6 && null !== e6.stateNode && Xu(e6, e6.memoizedProps, t5.memoizedProps);
      }
      break;
    case 27:
      gs(n5, e6), bs(e6), 512 & r6 && (rs || null === t5 || Ku(t5, t5.return)), null !== t5 && 4 & r6 && Xu(e6, e6.memoizedProps, t5.memoizedProps);
      break;
    case 5:
      if (gs(n5, e6), bs(e6), 512 & r6 && (rs || null === t5 || Ku(t5, t5.return)), 32 & e6.flags) {
        l5 = e6.stateNode;
        try {
          Zn(l5, "");
        } catch (n6) {
          Xc(e6, e6.return, n6);
        }
      }
      4 & r6 && null != e6.stateNode && Xu(e6, l5 = e6.memoizedProps, null !== t5 ? t5.memoizedProps : l5), 1024 & r6 && (ls = true);
      break;
    case 6:
      if (gs(n5, e6), bs(e6), 4 & r6) {
        if (null === e6.stateNode) throw Error(O3(162));
        r6 = e6.memoizedProps, t5 = e6.stateNode;
        try {
          t5.nodeValue = r6;
        } catch (n6) {
          Xc(e6, e6.return, n6);
        }
      }
      break;
    case 3:
      if (Td = null, l5 = vs, vs = hd(n5.containerInfo), gs(n5, e6), vs = l5, bs(e6), 4 & r6 && null !== t5 && t5.memoizedState.isDehydrated) try {
        yp(n5.containerInfo);
      } catch (n6) {
        Xc(e6, e6.return, n6);
      }
      ls && (ls = false, ks(e6));
      break;
    case 4:
      r6 = vs, vs = hd(e6.stateNode.containerInfo), gs(n5, e6), bs(e6), vs = r6;
      break;
    case 12:
    default:
      gs(n5, e6), bs(e6);
      break;
    case 31:
    case 19:
      gs(n5, e6), bs(e6), 4 & r6 && (null !== (r6 = e6.updateQueue) && (e6.updateQueue = null, hs(e6, r6)));
      break;
    case 13:
      gs(n5, e6), bs(e6), 8192 & e6.child.flags && null !== e6.memoizedState != (null !== t5 && null !== t5.memoizedState) && (ac = Ae2()), 4 & r6 && (null !== (r6 = e6.updateQueue) && (e6.updateQueue = null, hs(e6, r6)));
      break;
    case 22:
      l5 = null !== e6.memoizedState;
      var u5 = null !== t5 && null !== t5.memoizedState, s6 = ts, c5 = rs;
      if (ts = s6 || l5, rs = c5 || u5, gs(n5, e6), rs = c5, ts = s6, bs(e6), 8192 & r6) e: for (n5 = e6.stateNode, n5._visibility = l5 ? -2 & n5._visibility : 1 | n5._visibility, l5 && (null === t5 || u5 || ts || rs || Ss(e6)), t5 = null, n5 = e6; ; ) {
        if (5 === n5.tag || 26 === n5.tag) {
          if (null === t5) {
            u5 = t5 = n5;
            try {
              if (a6 = u5.stateNode, l5) "function" == typeof (o5 = a6.style).setProperty ? o5.setProperty("display", "none", "important") : o5.display = "none";
              else {
                i5 = u5.stateNode;
                var f5 = u5.memoizedProps.style, d5 = null != f5 && f5.hasOwnProperty("display") ? f5.display : null;
                i5.style.display = null == d5 || "boolean" == typeof d5 ? "" : ("" + d5).trim();
              }
            } catch (e7) {
              Xc(u5, u5.return, e7);
            }
          }
        } else if (6 === n5.tag) {
          if (null === t5) {
            u5 = n5;
            try {
              u5.stateNode.nodeValue = l5 ? "" : u5.memoizedProps;
            } catch (e7) {
              Xc(u5, u5.return, e7);
            }
          }
        } else if (18 === n5.tag) {
          if (null === t5) {
            u5 = n5;
            try {
              var p5 = u5.stateNode;
              l5 ? td(p5, true) : td(u5.stateNode, false);
            } catch (e7) {
              Xc(u5, u5.return, e7);
            }
          }
        } else if ((22 !== n5.tag && 23 !== n5.tag || null === n5.memoizedState || n5 === e6) && null !== n5.child) {
          n5.child.return = n5, n5 = n5.child;
          continue;
        }
        if (n5 === e6) break e;
        for (; null === n5.sibling; ) {
          if (null === n5.return || n5.return === e6) break e;
          t5 === n5 && (t5 = null), n5 = n5.return;
        }
        t5 === n5 && (t5 = null), n5.sibling.return = n5.return, n5 = n5.sibling;
      }
      4 & r6 && (null !== (r6 = e6.updateQueue) && (null !== (t5 = r6.retryQueue) && (r6.retryQueue = null, hs(e6, t5))));
    case 30:
    case 21:
  }
}
function bs(e6) {
  var n5 = e6.flags;
  if (2 & n5) {
    try {
      for (var t5, r6 = e6.return; null !== r6; ) {
        if (Gu(r6)) {
          t5 = r6;
          break;
        }
        r6 = r6.return;
      }
      if (null == t5) throw Error(O3(160));
      switch (t5.tag) {
        case 27:
          var l5 = t5.stateNode;
          es(e6, Zu(e6), l5);
          break;
        case 5:
          var a6 = t5.stateNode;
          32 & t5.flags && (Zn(a6, ""), t5.flags &= -33), es(e6, Zu(e6), a6);
          break;
        case 3:
        case 4:
          var o5 = t5.stateNode.containerInfo;
          Ju(e6, Zu(e6), o5);
          break;
        default:
          throw Error(O3(161));
      }
    } catch (n6) {
      Xc(e6, e6.return, n6);
    }
    e6.flags &= -3;
  }
  4096 & n5 && (e6.flags &= -4097);
}
function ks(e6) {
  if (1024 & e6.subtreeFlags) for (e6 = e6.child; null !== e6; ) {
    var n5 = e6;
    ks(n5), 5 === n5.tag && 1024 & n5.flags && n5.stateNode.reset(), e6 = e6.sibling;
  }
}
function ws(e6, n5) {
  if (8772 & n5.subtreeFlags) for (n5 = n5.child; null !== n5; ) is(e6, n5.alternate, n5), n5 = n5.sibling;
}
function Ss(e6) {
  for (e6 = e6.child; null !== e6; ) {
    var n5 = e6;
    switch (n5.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Hu(4, n5, n5.return), Ss(n5);
        break;
      case 1:
        Ku(n5, n5.return);
        var t5 = n5.stateNode;
        "function" == typeof t5.componentWillUnmount && Wu(n5, n5.return, t5), Ss(n5);
        break;
      case 27:
        dd(n5.stateNode);
      case 26:
      case 5:
        Ku(n5, n5.return), Ss(n5);
        break;
      case 22:
        null === n5.memoizedState && Ss(n5);
        break;
      default:
        Ss(n5);
    }
    e6 = e6.sibling;
  }
}
function Es(e6, n5, t5) {
  for (t5 = t5 && !!(8772 & n5.subtreeFlags), n5 = n5.child; null !== n5; ) {
    var r6 = n5.alternate, l5 = e6, a6 = n5, o5 = a6.flags;
    switch (a6.tag) {
      case 0:
      case 11:
      case 15:
        Es(l5, a6, t5), Bu(4, a6);
        break;
      case 1:
        if (Es(l5, a6, t5), "function" == typeof (l5 = (r6 = a6).stateNode).componentDidMount) try {
          l5.componentDidMount();
        } catch (e7) {
          Xc(r6, r6.return, e7);
        }
        if (null !== (l5 = (r6 = a6).updateQueue)) {
          var i5 = r6.stateNode;
          try {
            var u5 = l5.shared.hiddenCallbacks;
            if (null !== u5) for (l5.shared.hiddenCallbacks = null, l5 = 0; l5 < u5.length; l5++) Za(u5[l5], i5);
          } catch (e7) {
            Xc(r6, r6.return, e7);
          }
        }
        t5 && 64 & o5 && Qu(a6), qu(a6, a6.return);
        break;
      case 27:
        ns(a6);
      case 26:
      case 5:
        Es(l5, a6, t5), t5 && null === r6 && 4 & o5 && Yu(a6), qu(a6, a6.return);
        break;
      case 12:
        Es(l5, a6, t5);
        break;
      case 31:
        Es(l5, a6, t5), t5 && 4 & o5 && ps(l5, a6);
        break;
      case 13:
        Es(l5, a6, t5), t5 && 4 & o5 && ms(l5, a6);
        break;
      case 22:
        null === a6.memoizedState && Es(l5, a6, t5), qu(a6, a6.return);
        break;
      case 30:
        break;
      default:
        Es(l5, a6, t5);
    }
    n5 = n5.sibling;
  }
}
function xs(e6, n5) {
  var t5 = null;
  null !== e6 && null !== e6.memoizedState && null !== e6.memoizedState.cachePool && (t5 = e6.memoizedState.cachePool.pool), e6 = null, null !== n5.memoizedState && null !== n5.memoizedState.cachePool && (e6 = n5.memoizedState.cachePool.pool), e6 !== t5 && (null != e6 && e6.refCount++, null != t5 && pa(t5));
}
function Cs(e6, n5) {
  e6 = null, null !== n5.alternate && (e6 = n5.alternate.memoizedState.cache), (n5 = n5.memoizedState.cache) !== e6 && (n5.refCount++, null != e6 && pa(e6));
}
function zs(e6, n5, t5, r6) {
  if (10256 & n5.subtreeFlags) for (n5 = n5.child; null !== n5; ) Ps(e6, n5, t5, r6), n5 = n5.sibling;
}
function Ps(e6, n5, t5, r6) {
  var l5 = n5.flags;
  switch (n5.tag) {
    case 0:
    case 11:
    case 15:
      zs(e6, n5, t5, r6), 2048 & l5 && Bu(9, n5);
      break;
    case 1:
    case 31:
    case 13:
    default:
      zs(e6, n5, t5, r6);
      break;
    case 3:
      zs(e6, n5, t5, r6), 2048 & l5 && (e6 = null, null !== n5.alternate && (e6 = n5.alternate.memoizedState.cache), (n5 = n5.memoizedState.cache) !== e6 && (n5.refCount++, null != e6 && pa(e6)));
      break;
    case 12:
      if (2048 & l5) {
        zs(e6, n5, t5, r6), e6 = n5.stateNode;
        try {
          var a6 = n5.memoizedProps, o5 = a6.id, i5 = a6.onPostCommit;
          "function" == typeof i5 && i5(o5, null === n5.alternate ? "mount" : "update", e6.passiveEffectDuration, -0);
        } catch (e7) {
          Xc(n5, n5.return, e7);
        }
      } else zs(e6, n5, t5, r6);
      break;
    case 23:
      break;
    case 22:
      a6 = n5.stateNode, o5 = n5.alternate, null !== n5.memoizedState ? 2 & a6._visibility ? zs(e6, n5, t5, r6) : Ts(e6, n5) : 2 & a6._visibility ? zs(e6, n5, t5, r6) : (a6._visibility |= 2, Ns(e6, n5, t5, r6, !!(10256 & n5.subtreeFlags) || false)), 2048 & l5 && xs(o5, n5);
      break;
    case 24:
      zs(e6, n5, t5, r6), 2048 & l5 && Cs(n5.alternate, n5);
  }
}
function Ns(e6, n5, t5, r6, l5) {
  for (l5 = l5 && (!!(10256 & n5.subtreeFlags) || false), n5 = n5.child; null !== n5; ) {
    var a6 = e6, o5 = n5, i5 = t5, u5 = r6, s6 = o5.flags;
    switch (o5.tag) {
      case 0:
      case 11:
      case 15:
        Ns(a6, o5, i5, u5, l5), Bu(8, o5);
        break;
      case 23:
        break;
      case 22:
        var c5 = o5.stateNode;
        null !== o5.memoizedState ? 2 & c5._visibility ? Ns(a6, o5, i5, u5, l5) : Ts(a6, o5) : (c5._visibility |= 2, Ns(a6, o5, i5, u5, l5)), l5 && 2048 & s6 && xs(o5.alternate, o5);
        break;
      case 24:
        Ns(a6, o5, i5, u5, l5), l5 && 2048 & s6 && Cs(o5.alternate, o5);
        break;
      default:
        Ns(a6, o5, i5, u5, l5);
    }
    n5 = n5.sibling;
  }
}
function Ts(e6, n5) {
  if (10256 & n5.subtreeFlags) for (n5 = n5.child; null !== n5; ) {
    var t5 = e6, r6 = n5, l5 = r6.flags;
    switch (r6.tag) {
      case 22:
        Ts(t5, r6), 2048 & l5 && xs(r6.alternate, r6);
        break;
      case 24:
        Ts(t5, r6), 2048 & l5 && Cs(r6.alternate, r6);
        break;
      default:
        Ts(t5, r6);
    }
    n5 = n5.sibling;
  }
}
var Ls = 8192;
function _s(e6, n5, t5) {
  if (e6.subtreeFlags & Ls) for (e6 = e6.child; null !== e6; ) Fs(e6, n5, t5), e6 = e6.sibling;
}
function Fs(e6, n5, t5) {
  switch (e6.tag) {
    case 26:
      _s(e6, n5, t5), e6.flags & Ls && null !== e6.memoizedState && function(e7, n6, t6, r7) {
        if (!("stylesheet" !== t6.type || "string" == typeof r7.media && false === matchMedia(r7.media).matches || 4 & t6.state.loading)) {
          if (null === t6.instance) {
            var l5 = kd(r7.href), a6 = n6.querySelector(wd(l5));
            if (a6) return null !== (n6 = a6._p) && "object" == typeof n6 && "function" == typeof n6.then && (e7.count++, e7 = Dd.bind(e7), n6.then(e7, e7)), t6.state.loading |= 4, t6.instance = a6, void Nn(a6);
            a6 = n6.ownerDocument || n6, r7 = Sd(r7), (l5 = pd.get(l5)) && Pd(r7, l5), Nn(a6 = a6.createElement("link"));
            var o5 = a6;
            o5._p = new Promise(function(e8, n7) {
              o5.onload = e8, o5.onerror = n7;
            }), Vf(a6, "link", r7), t6.instance = a6;
          }
          null === e7.stylesheets && (e7.stylesheets = /* @__PURE__ */ new Map()), e7.stylesheets.set(t6, n6), (n6 = t6.state.preload) && !(3 & t6.state.loading) && (e7.count++, t6 = Dd.bind(e7), n6.addEventListener("load", t6), n6.addEventListener("error", t6));
        }
      }(t5, vs, e6.memoizedState, e6.memoizedProps);
      break;
    case 5:
    default:
      _s(e6, n5, t5);
      break;
    case 3:
    case 4:
      var r6 = vs;
      vs = hd(e6.stateNode.containerInfo), _s(e6, n5, t5), vs = r6;
      break;
    case 22:
      null === e6.memoizedState && (null !== (r6 = e6.alternate) && null !== r6.memoizedState ? (r6 = Ls, Ls = 16777216, _s(e6, n5, t5), Ls = r6) : _s(e6, n5, t5));
  }
}
function Os(e6) {
  var n5 = e6.alternate;
  if (null !== n5 && null !== (e6 = n5.child)) {
    n5.child = null;
    do {
      n5 = e6.sibling, e6.sibling = null, e6 = n5;
    } while (null !== e6);
  }
}
function Ds(e6) {
  var n5 = e6.deletions;
  if (16 & e6.flags) {
    if (null !== n5) for (var t5 = 0; t5 < n5.length; t5++) {
      var r6 = n5[t5];
      os = r6, Rs(r6, e6);
    }
    Os(e6);
  }
  if (10256 & e6.subtreeFlags) for (e6 = e6.child; null !== e6; ) As(e6), e6 = e6.sibling;
}
function As(e6) {
  switch (e6.tag) {
    case 0:
    case 11:
    case 15:
      Ds(e6), 2048 & e6.flags && Hu(9, e6, e6.return);
      break;
    case 3:
    case 12:
    default:
      Ds(e6);
      break;
    case 22:
      var n5 = e6.stateNode;
      null !== e6.memoizedState && 2 & n5._visibility && (null === e6.return || 13 !== e6.return.tag) ? (n5._visibility &= -3, Ms(e6)) : Ds(e6);
  }
}
function Ms(e6) {
  var n5 = e6.deletions;
  if (16 & e6.flags) {
    if (null !== n5) for (var t5 = 0; t5 < n5.length; t5++) {
      var r6 = n5[t5];
      os = r6, Rs(r6, e6);
    }
    Os(e6);
  }
  for (e6 = e6.child; null !== e6; ) {
    switch ((n5 = e6).tag) {
      case 0:
      case 11:
      case 15:
        Hu(8, n5, n5.return), Ms(n5);
        break;
      case 22:
        2 & (t5 = n5.stateNode)._visibility && (t5._visibility &= -3, Ms(n5));
        break;
      default:
        Ms(n5);
    }
    e6 = e6.sibling;
  }
}
function Rs(e6, n5) {
  for (; null !== os; ) {
    var t5 = os;
    switch (t5.tag) {
      case 0:
      case 11:
      case 15:
        Hu(8, t5, n5);
        break;
      case 23:
      case 22:
        if (null !== t5.memoizedState && null !== t5.memoizedState.cachePool) {
          var r6 = t5.memoizedState.cachePool.pool;
          null != r6 && r6.refCount++;
        }
        break;
      case 24:
        pa(t5.memoizedState.cache);
    }
    if (null !== (r6 = t5.child)) r6.return = t5, os = r6;
    else e: for (t5 = e6; null !== os; ) {
      var l5 = (r6 = os).sibling, a6 = r6.return;
      if (us(r6), r6 === t5) {
        os = null;
        break e;
      }
      if (null !== l5) {
        l5.return = a6, os = l5;
        break e;
      }
      os = a6;
    }
  }
}
var Is = {
  getCacheForType: function(e6) {
    var n5 = aa(fa), t5 = n5.data.get(e6);
    return void 0 === t5 && (t5 = e6(), n5.data.set(e6, t5)), t5;
  },
  cacheSignal: function() {
    return aa(fa).controller.signal;
  }
};
var Us = "function" == typeof WeakMap ? WeakMap : Map;
var Vs = 0;
var $s = null;
var js = null;
var Bs = 0;
var Hs = 0;
var Qs = null;
var Ws = false;
var qs = false;
var Ks = false;
var Ys = 0;
var Xs = 0;
var Gs = 0;
var Zs = 0;
var Js = 0;
var ec = 0;
var nc = 0;
var tc = null;
var rc = null;
var lc = false;
var ac = 0;
var oc = 0;
var ic = 1 / 0;
var uc = null;
var sc = null;
var cc = 0;
var fc = null;
var dc = null;
var pc = 0;
var mc = 0;
var hc = null;
var gc = null;
var vc = 0;
var yc = null;
function bc() {
  return 2 & Vs && 0 !== Bs ? Bs & -Bs : null !== ie2.T ? gf() : dn();
}
function kc() {
  if (0 === ec) if (536870912 & Bs && !Il) ec = 536870912;
  else {
    var e6 = Ge2;
    !(3932160 & (Ge2 <<= 1)) && (Ge2 = 262144), ec = e6;
  }
  return null !== (e6 = ao.current) && (e6.flags |= 32), ec;
}
function wc(e6, n5, t5) {
  (e6 !== $s || 2 !== Hs && 9 !== Hs) && null === e6.cancelPendingCommit || (Nc(e6, 0), Cc(e6, Bs, ec, false)), an(e6, t5), 2 & Vs && e6 === $s || (e6 === $s && (!(2 & Vs) && (Zs |= t5), 4 === Xs && Cc(e6, Bs, ec, false)), sf(e6));
}
function Sc(e6, n5, t5) {
  if (6 & Vs) throw Error(O3(327));
  for (var r6 = !t5 && !(127 & n5) && !(n5 & e6.expiredLanes) || nn(e6, n5), l5 = r6 ? function(e7, n6) {
    var t6 = Vs;
    Vs |= 2;
    var r7 = _c(), l6 = Fc();
    $s !== e7 || Bs !== n6 ? (uc = null, ic = Ae2() + 500, Nc(e7, n6)) : qs = nn(e7, n6);
    e: for (; ; ) try {
      if (0 !== Hs && null !== js) {
        n6 = js;
        var a7 = Qs;
        n: switch (Hs) {
          case 1:
            Hs = 0, Qs = null, Uc(e7, n6, a7, 1);
            break;
          case 2:
          case 9:
            if (Na(a7)) {
              Hs = 0, Qs = null, Ic(n6);
              break;
            }
            n6 = function() {
              2 !== Hs && 9 !== Hs || $s !== e7 || (Hs = 7), sf(e7);
            }, a7.then(n6, n6);
            break e;
          case 3:
            Hs = 7;
            break e;
          case 4:
            Hs = 5;
            break e;
          case 7:
            Na(a7) ? (Hs = 0, Qs = null, Ic(n6)) : (Hs = 0, Qs = null, Uc(e7, n6, a7, 7));
            break;
          case 5:
            var o6 = null;
            switch (js.tag) {
              case 26:
                o6 = js.memoizedState;
              case 5:
              case 27:
                var i6 = js;
                if (o6 ? Fd(o6) : i6.stateNode.complete) {
                  Hs = 0, Qs = null;
                  var u6 = i6.sibling;
                  if (null !== u6) js = u6;
                  else {
                    var s6 = i6.return;
                    null !== s6 ? (js = s6, Vc(s6)) : js = null;
                  }
                  break n;
                }
            }
            Hs = 0, Qs = null, Uc(e7, n6, a7, 5);
            break;
          case 6:
            Hs = 0, Qs = null, Uc(e7, n6, a7, 6);
            break;
          case 8:
            Pc(), Xs = 6;
            break e;
          default:
            throw Error(O3(462));
        }
      }
      Mc();
      break;
    } catch (n7) {
      Tc(e7, n7);
    }
    return Gl = Xl = null, ie2.H = r7, ie2.A = l6, Vs = t6, null !== js ? 0 : ($s = null, Bs = 0, rl(), Xs);
  }(e6, n5) : Dc(e6, n5, true), a6 = r6; ; ) {
    if (0 === l5) {
      qs && !r6 && Cc(e6, n5, 0, false);
      break;
    }
    if (t5 = e6.current.alternate, !a6 || xc(t5)) {
      if (2 === l5) {
        if (a6 = n5, e6.errorRecoveryDisabledLanes & a6) var o5 = 0;
        else o5 = 0 !== (o5 = -536870913 & e6.pendingLanes) ? o5 : 536870912 & o5 ? 536870912 : 0;
        if (0 !== o5) {
          n5 = o5;
          e: {
            var i5 = e6;
            l5 = tc;
            var u5 = i5.current.memoizedState.isDehydrated;
            if (u5 && (Nc(i5, o5).flags |= 256), 2 !== (o5 = Dc(i5, o5, false))) {
              if (Ks && !u5) {
                i5.errorRecoveryDisabledLanes |= a6, Zs |= a6, l5 = 4;
                break e;
              }
              a6 = rc, rc = l5, null !== a6 && (null === rc ? rc = a6 : rc.push.apply(rc, a6));
            }
            l5 = o5;
          }
          if (a6 = false, 2 !== l5) continue;
        }
      }
      if (1 === l5) {
        Nc(e6, 0), Cc(e6, n5, 0, true);
        break;
      }
      e: {
        switch (r6 = e6, a6 = l5) {
          case 0:
          case 1:
            throw Error(O3(345));
          case 4:
            if ((4194048 & n5) !== n5) break;
          case 6:
            Cc(r6, n5, ec, !Ws);
            break e;
          case 2:
            rc = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(O3(329));
        }
        if ((62914560 & n5) === n5 && 10 < (l5 = ac + 300 - Ae2())) {
          if (Cc(r6, n5, ec, !Ws), 0 !== en(r6, 0, true)) break e;
          pc = n5, r6.timeoutHandle = Yf(Ec.bind(null, r6, t5, rc, uc, lc, n5, ec, Zs, nc, Ws, a6, "Throttled", -0, 0), l5);
        } else Ec(r6, t5, rc, uc, lc, n5, ec, Zs, nc, Ws, a6, null, -0, 0);
      }
      break;
    }
    l5 = Dc(e6, n5, false), a6 = false;
  }
  sf(e6);
}
function Ec(e6, n5, t5, r6, l5, a6, o5, i5, u5, s6, c5, f5, d5, p5) {
  if (e6.timeoutHandle = -1, 8192 & (f5 = n5.subtreeFlags) || !(16785408 & ~f5)) {
    Fs(n5, a6, f5 = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: true,
      waitingForViewTransition: false,
      unsuspend: ot
    });
    var m4 = (62914560 & a6) === a6 ? ac - Ae2() : (4194048 & a6) === a6 ? oc - Ae2() : 0;
    if (null !== (m4 = function(e7, n6) {
      return e7.stylesheets && 0 === e7.count && Md(e7, e7.stylesheets), 0 < e7.count || 0 < e7.imgCount ? function(t6) {
        var r7 = setTimeout(function() {
          if (e7.stylesheets && Md(e7, e7.stylesheets), e7.unsuspend) {
            var n7 = e7.unsuspend;
            e7.unsuspend = null, n7();
          }
        }, 6e4 + n6);
        0 < e7.imgBytes && 0 === Od && (Od = 62500 * function() {
          if ("function" == typeof performance.getEntriesByType) {
            for (var e8 = 0, n7 = 0, t7 = performance.getEntriesByType("resource"), r8 = 0; r8 < t7.length; r8++) {
              var l7 = t7[r8], a7 = l7.transferSize, o6 = l7.initiatorType, i6 = l7.duration;
              if (a7 && i6 && $f(o6)) {
                for (o6 = 0, i6 = l7.responseEnd, r8 += 1; r8 < t7.length; r8++) {
                  var u6 = t7[r8], s7 = u6.startTime;
                  if (s7 > i6) break;
                  var c6 = u6.transferSize, f6 = u6.initiatorType;
                  c6 && $f(f6) && (o6 += c6 * ((u6 = u6.responseEnd) < i6 ? 1 : (i6 - s7) / (u6 - s7)));
                }
                if (--r8, n7 += 8 * (a7 + o6) / (l7.duration / 1e3), 10 < ++e8) break;
              }
            }
            if (0 < e8) return n7 / e8 / 1e6;
          }
          return navigator.connection && "number" == typeof (e8 = navigator.connection.downlink) ? e8 : 5;
        }());
        var l6 = setTimeout(function() {
          if (e7.waitingForImages = false, 0 === e7.count && (e7.stylesheets && Md(e7, e7.stylesheets), e7.unsuspend)) {
            var n7 = e7.unsuspend;
            e7.unsuspend = null, n7();
          }
        }, (e7.imgBytes > Od ? 50 : 800) + n6);
        return e7.unsuspend = t6, function() {
          e7.unsuspend = null, clearTimeout(r7), clearTimeout(l6);
        };
      } : null;
    }(f5, m4))) return pc = a6, e6.cancelPendingCommit = m4(jc.bind(null, e6, n5, a6, t5, r6, l5, o5, i5, u5, c5, f5, null, d5, p5)), void Cc(e6, a6, o5, !s6);
  }
  jc(e6, n5, a6, t5, r6, l5, o5, i5, u5);
}
function xc(e6) {
  for (var n5 = e6; ; ) {
    var t5 = n5.tag;
    if ((0 === t5 || 11 === t5 || 15 === t5) && 16384 & n5.flags && (null !== (t5 = n5.updateQueue) && null !== (t5 = t5.stores))) for (var r6 = 0; r6 < t5.length; r6++) {
      var l5 = t5[r6], a6 = l5.getSnapshot;
      l5 = l5.value;
      try {
        if (!Cr(a6(), l5)) return false;
      } catch (e7) {
        return false;
      }
    }
    if (t5 = n5.child, 16384 & n5.subtreeFlags && null !== t5) t5.return = n5, n5 = t5;
    else {
      if (n5 === e6) break;
      for (; null === n5.sibling; ) {
        if (null === n5.return || n5.return === e6) return true;
        n5 = n5.return;
      }
      n5.sibling.return = n5.return, n5 = n5.sibling;
    }
  }
  return true;
}
function Cc(e6, n5, t5, r6) {
  n5 &= ~Js, n5 &= ~Zs, e6.suspendedLanes |= n5, e6.pingedLanes &= ~n5, r6 && (e6.warmLanes |= n5), r6 = e6.expirationTimes;
  for (var l5 = n5; 0 < l5; ) {
    var a6 = 31 - qe2(l5), o5 = 1 << a6;
    r6[a6] = -1, l5 &= ~o5;
  }
  0 !== t5 && on(e6, t5, n5);
}
function zc() {
  return !!(6 & Vs) || (cf(0, false), false);
}
function Pc() {
  if (null !== js) {
    if (0 === Hs) var e6 = js.return;
    else Gl = Xl = null, Do(e6 = js), Da = null, Aa = 0, e6 = js;
    for (; null !== e6; ) ju(e6.alternate, e6), e6 = e6.return;
    js = null;
  }
}
function Nc(e6, n5) {
  var t5 = e6.timeoutHandle;
  -1 !== t5 && (e6.timeoutHandle = -1, Xf(t5)), null !== (t5 = e6.cancelPendingCommit) && (e6.cancelPendingCommit = null, t5()), pc = 0, Pc(), $s = e6, js = t5 = pl(e6.current, null), Bs = n5, Hs = 0, Qs = null, Ws = false, qs = nn(e6, n5), Ks = false, nc = ec = Js = Zs = Gs = Xs = 0, rc = tc = null, lc = false, 8 & n5 && (n5 |= 32 & n5);
  var r6 = e6.entangledLanes;
  if (0 !== r6) for (e6 = e6.entanglements, r6 &= n5; 0 < r6; ) {
    var l5 = 31 - qe2(r6), a6 = 1 << l5;
    n5 |= e6[l5], r6 &= ~a6;
  }
  return Ys = n5, rl(), t5;
}
function Tc(e6, n5) {
  go = null, ie2.H = ji, n5 === xa || n5 === za ? (n5 = Fa(), Hs = 3) : n5 === Ca ? (n5 = Fa(), Hs = 4) : Hs = n5 === au ? 8 : null !== n5 && "object" == typeof n5 && "function" == typeof n5.then ? 6 : 1, Qs = n5, null === js && (Xs = 1, eu(e6, wl(n5, e6.current)));
}
function Lc() {
  var e6 = ao.current;
  return null === e6 || ((4194048 & Bs) === Bs ? null === oo : !!((62914560 & Bs) === Bs || 536870912 & Bs) && e6 === oo);
}
function _c() {
  var e6 = ie2.H;
  return ie2.H = ji, null === e6 ? ji : e6;
}
function Fc() {
  var e6 = ie2.A;
  return ie2.A = Is, e6;
}
function Oc() {
  Xs = 4, Ws || (4194048 & Bs) !== Bs && null !== ao.current || (qs = true), !(134217727 & Gs) && !(134217727 & Zs) || null === $s || Cc($s, Bs, ec, false);
}
function Dc(e6, n5, t5) {
  var r6 = Vs;
  Vs |= 2;
  var l5 = _c(), a6 = Fc();
  $s === e6 && Bs === n5 || (uc = null, Nc(e6, n5)), n5 = false;
  var o5 = Xs;
  e: for (; ; ) try {
    if (0 !== Hs && null !== js) {
      var i5 = js, u5 = Qs;
      switch (Hs) {
        case 8:
          Pc(), o5 = 6;
          break e;
        case 3:
        case 2:
        case 9:
        case 6:
          null === ao.current && (n5 = true);
          var s6 = Hs;
          if (Hs = 0, Qs = null, Uc(e6, i5, u5, s6), t5 && qs) {
            o5 = 0;
            break e;
          }
          break;
        default:
          s6 = Hs, Hs = 0, Qs = null, Uc(e6, i5, u5, s6);
      }
    }
    Ac(), o5 = Xs;
    break;
  } catch (n6) {
    Tc(e6, n6);
  }
  return n5 && e6.shellSuspendCounter++, Gl = Xl = null, Vs = r6, ie2.H = l5, ie2.A = a6, null === js && ($s = null, Bs = 0, rl()), o5;
}
function Ac() {
  for (; null !== js; ) Rc(js);
}
function Mc() {
  for (; null !== js && !Oe2(); ) Rc(js);
}
function Rc(e6) {
  var n5 = Ou(e6.alternate, e6, Ys);
  e6.memoizedProps = e6.pendingProps, null === n5 ? Vc(e6) : js = n5;
}
function Ic(e6) {
  var n5 = e6, t5 = n5.alternate;
  switch (n5.tag) {
    case 15:
    case 0:
      n5 = yu(t5, n5, n5.pendingProps, n5.type, void 0, Bs);
      break;
    case 11:
      n5 = yu(t5, n5, n5.pendingProps, n5.type.render, n5.ref, Bs);
      break;
    case 5:
      Do(n5);
    default:
      ju(t5, n5), n5 = Ou(t5, n5 = js = ml(n5, Ys), Ys);
  }
  e6.memoizedProps = e6.pendingProps, null === n5 ? Vc(e6) : js = n5;
}
function Uc(e6, n5, t5, r6) {
  Gl = Xl = null, Do(n5), Da = null, Aa = 0;
  var l5 = n5.return;
  try {
    if (function(e7, n6, t6, r7, l6) {
      if (t6.flags |= 32768, null !== r7 && "object" == typeof r7 && "function" == typeof r7.then) {
        if (null !== (n6 = t6.alternate) && ta(n6, t6, l6, true), null !== (t6 = ao.current)) {
          switch (t6.tag) {
            case 31:
            case 13:
              return null === oo ? Oc() : null === t6.alternate && 0 === Xs && (Xs = 3), t6.flags &= -257, t6.flags |= 65536, t6.lanes = l6, r7 === Pa ? t6.flags |= 16384 : (null === (n6 = t6.updateQueue) ? t6.updateQueue = /* @__PURE__ */ new Set([
                r7
              ]) : n6.add(r7), Gc(e7, r7, l6)), false;
            case 22:
              return t6.flags |= 65536, r7 === Pa ? t6.flags |= 16384 : (null === (n6 = t6.updateQueue) ? (n6 = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  r7
                ])
              }, t6.updateQueue = n6) : null === (t6 = n6.retryQueue) ? n6.retryQueue = /* @__PURE__ */ new Set([
                r7
              ]) : t6.add(r7), Gc(e7, r7, l6)), false;
          }
          throw Error(O3(435, t6.tag));
        }
        return Gc(e7, r7, l6), Oc(), false;
      }
      if (Il) return null !== (n6 = ao.current) ? (!(65536 & n6.flags) && (n6.flags |= 256), n6.flags |= 65536, n6.lanes = l6, r7 !== $l && Kl(wl(e7 = Error(O3(422), {
        cause: r7
      }), t6))) : (r7 !== $l && Kl(wl(n6 = Error(O3(423), {
        cause: r7
      }), t6)), (e7 = e7.current.alternate).flags |= 65536, l6 &= -l6, e7.lanes |= l6, r7 = wl(r7, t6), Ka(e7, l6 = tu(e7.stateNode, r7, l6)), 4 !== Xs && (Xs = 2)), false;
      var a6 = Error(O3(520), {
        cause: r7
      });
      if (a6 = wl(a6, t6), null === tc ? tc = [
        a6
      ] : tc.push(a6), 4 !== Xs && (Xs = 2), null === n6) return true;
      r7 = wl(r7, t6), t6 = n6;
      do {
        switch (t6.tag) {
          case 3:
            return t6.flags |= 65536, e7 = l6 & -l6, t6.lanes |= e7, Ka(t6, e7 = tu(t6.stateNode, r7, e7)), false;
          case 1:
            if (n6 = t6.type, a6 = t6.stateNode, !(128 & t6.flags || "function" != typeof n6.getDerivedStateFromError && (null === a6 || "function" != typeof a6.componentDidCatch || null !== sc && sc.has(a6)))) return t6.flags |= 65536, l6 &= -l6, t6.lanes |= l6, lu(l6 = ru(l6), e7, t6, r7), Ka(t6, l6), false;
        }
        t6 = t6.return;
      } while (null !== t6);
      return false;
    }(e6, l5, n5, t5, Bs)) return Xs = 1, eu(e6, wl(t5, e6.current)), void (js = null);
  } catch (n6) {
    if (null !== l5) throw js = l5, n6;
    return Xs = 1, eu(e6, wl(t5, e6.current)), void (js = null);
  }
  32768 & n5.flags ? (Il || 1 === r6 ? e6 = true : qs || 536870912 & Bs ? e6 = false : (Ws = e6 = true, (2 === r6 || 9 === r6 || 3 === r6 || 6 === r6) && (null !== (r6 = ao.current) && 13 === r6.tag && (r6.flags |= 16384))), $c(n5, e6)) : Vc(n5);
}
function Vc(e6) {
  var n5 = e6;
  do {
    if (32768 & n5.flags) return void $c(n5, Ws);
    e6 = n5.return;
    var t5 = Vu(n5.alternate, n5, Ys);
    if (null !== t5) return void (js = t5);
    if (null !== (n5 = n5.sibling)) return void (js = n5);
    js = n5 = e6;
  } while (null !== n5);
  0 === Xs && (Xs = 5);
}
function $c(e6, n5) {
  do {
    var t5 = $u(e6.alternate, e6);
    if (null !== t5) return t5.flags &= 32767, void (js = t5);
    if (null !== (t5 = e6.return) && (t5.flags |= 32768, t5.subtreeFlags = 0, t5.deletions = null), !n5 && null !== (e6 = e6.sibling)) return void (js = e6);
    js = e6 = t5;
  } while (null !== e6);
  Xs = 6, js = null;
}
function jc(e6, n5, t5, r6, l5, a6, o5, i5, u5) {
  e6.cancelPendingCommit = null;
  do {
    qc();
  } while (0 !== cc);
  if (6 & Vs) throw Error(O3(327));
  if (null !== n5) {
    if (n5 === e6.current) throw Error(O3(177));
    if (a6 = n5.lanes | n5.childLanes, function(e7, n6, t6, r7, l6, a7) {
      var o6 = e7.pendingLanes;
      e7.pendingLanes = t6, e7.suspendedLanes = 0, e7.pingedLanes = 0, e7.warmLanes = 0, e7.expiredLanes &= t6, e7.entangledLanes &= t6, e7.errorRecoveryDisabledLanes &= t6, e7.shellSuspendCounter = 0;
      var i6 = e7.entanglements, u6 = e7.expirationTimes, s6 = e7.hiddenUpdates;
      for (t6 = o6 & ~t6; 0 < t6; ) {
        var c5 = 31 - qe2(t6), f5 = 1 << c5;
        i6[c5] = 0, u6[c5] = -1;
        var d5 = s6[c5];
        if (null !== d5) for (s6[c5] = null, c5 = 0; c5 < d5.length; c5++) {
          var p5 = d5[c5];
          null !== p5 && (p5.lane &= -536870913);
        }
        t6 &= ~f5;
      }
      0 !== r7 && on(e7, r7, 0), 0 !== a7 && 0 === l6 && 0 !== e7.tag && (e7.suspendedLanes |= a7 & ~(o6 & ~n6));
    }(e6, t5, a6 |= tl, o5, i5, u5), e6 === $s && (js = $s = null, Bs = 0), dc = n5, fc = e6, pc = t5, mc = a6, hc = l5, gc = r6, 10256 & n5.subtreeFlags || 10256 & n5.flags ? (e6.callbackNode = null, e6.callbackPriority = 0, _e2(Ue2, function() {
      return Kc(), null;
    })) : (e6.callbackNode = null, e6.callbackPriority = 0), r6 = !!(13878 & n5.flags), 13878 & n5.subtreeFlags || r6) {
      r6 = ie2.T, ie2.T = null, l5 = ue2.p, ue2.p = 2, o5 = Vs, Vs |= 4;
      try {
        !function(e7, n6) {
          if (e7 = e7.containerInfo, jf = qd, _r(e7 = Lr(e7))) {
            if ("selectionStart" in e7) var t6 = {
              start: e7.selectionStart,
              end: e7.selectionEnd
            };
            else e: {
              var r7 = (t6 = (t6 = e7.ownerDocument) && t6.defaultView || window).getSelection && t6.getSelection();
              if (r7 && 0 !== r7.rangeCount) {
                t6 = r7.anchorNode;
                var l6 = r7.anchorOffset, a7 = r7.focusNode;
                r7 = r7.focusOffset;
                try {
                  t6.nodeType, a7.nodeType;
                } catch (e8) {
                  t6 = null;
                  break e;
                }
                var o6 = 0, i6 = -1, u6 = -1, s6 = 0, c5 = 0, f5 = e7, d5 = null;
                n: for (; ; ) {
                  for (var p5; f5 !== t6 || 0 !== l6 && 3 !== f5.nodeType || (i6 = o6 + l6), f5 !== a7 || 0 !== r7 && 3 !== f5.nodeType || (u6 = o6 + r7), 3 === f5.nodeType && (o6 += f5.nodeValue.length), null !== (p5 = f5.firstChild); ) d5 = f5, f5 = p5;
                  for (; ; ) {
                    if (f5 === e7) break n;
                    if (d5 === t6 && ++s6 === l6 && (i6 = o6), d5 === a7 && ++c5 === r7 && (u6 = o6), null !== (p5 = f5.nextSibling)) break;
                    d5 = (f5 = d5).parentNode;
                  }
                  f5 = p5;
                }
                t6 = -1 === i6 || -1 === u6 ? null : {
                  start: i6,
                  end: u6
                };
              } else t6 = null;
            }
            t6 = t6 || {
              start: 0,
              end: 0
            };
          } else t6 = null;
          for (Bf = {
            focusedElem: e7,
            selectionRange: t6
          }, qd = false, os = n6; null !== os; ) if (e7 = (n6 = os).child, 1028 & n6.subtreeFlags && null !== e7) e7.return = n6, os = e7;
          else for (; null !== os; ) {
            switch (a7 = (n6 = os).alternate, e7 = n6.flags, n6.tag) {
              case 0:
                if (4 & e7 && null !== (e7 = null !== (e7 = n6.updateQueue) ? e7.events : null)) for (t6 = 0; t6 < e7.length; t6++) (l6 = e7[t6]).ref.impl = l6.nextImpl;
                break;
              case 11:
              case 15:
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              case 1:
                if (1024 & e7 && null !== a7) {
                  e7 = void 0, t6 = n6, l6 = a7.memoizedProps, a7 = a7.memoizedState, r7 = t6.stateNode;
                  try {
                    var m4 = Xi(t6.type, l6);
                    e7 = r7.getSnapshotBeforeUpdate(m4, a7), r7.__reactInternalSnapshotBeforeUpdate = e7;
                  } catch (e8) {
                    Xc(t6, t6.return, e8);
                  }
                }
                break;
              case 3:
                if (1024 & e7) {
                  if (9 === (t6 = (e7 = n6.stateNode.containerInfo).nodeType)) rd(e7);
                  else if (1 === t6) switch (e7.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      rd(e7);
                      break;
                    default:
                      e7.textContent = "";
                  }
                }
                break;
              default:
                if (1024 & e7) throw Error(O3(163));
            }
            if (null !== (e7 = n6.sibling)) {
              e7.return = n6.return, os = e7;
              break;
            }
            os = n6.return;
          }
        }(e6, n5);
      } finally {
        Vs = o5, ue2.p = l5, ie2.T = r6;
      }
    }
    cc = 1, Bc(), Hc(), Qc();
  }
}
function Bc() {
  if (1 === cc) {
    cc = 0;
    var e6 = fc, n5 = dc, t5 = !!(13878 & n5.flags);
    if (13878 & n5.subtreeFlags || t5) {
      t5 = ie2.T, ie2.T = null;
      var r6 = ue2.p;
      ue2.p = 2;
      var l5 = Vs;
      Vs |= 4;
      try {
        ys(n5, e6);
        var a6 = Bf, o5 = Lr(e6.containerInfo), i5 = a6.focusedElem, u5 = a6.selectionRange;
        if (o5 !== i5 && i5 && i5.ownerDocument && Tr(i5.ownerDocument.documentElement, i5)) {
          if (null !== u5 && _r(i5)) {
            var s6 = u5.start, c5 = u5.end;
            if (void 0 === c5 && (c5 = s6), "selectionStart" in i5) i5.selectionStart = s6, i5.selectionEnd = Math.min(c5, i5.value.length);
            else {
              var f5 = i5.ownerDocument || document, d5 = f5 && f5.defaultView || window;
              if (d5.getSelection) {
                var p5 = d5.getSelection(), m4 = i5.textContent.length, h4 = Math.min(u5.start, m4), g4 = void 0 === u5.end ? h4 : Math.min(u5.end, m4);
                !p5.extend && h4 > g4 && (o5 = g4, g4 = h4, h4 = o5);
                var v5 = Nr(i5, h4), y5 = Nr(i5, g4);
                if (v5 && y5 && (1 !== p5.rangeCount || p5.anchorNode !== v5.node || p5.anchorOffset !== v5.offset || p5.focusNode !== y5.node || p5.focusOffset !== y5.offset)) {
                  var b4 = f5.createRange();
                  b4.setStart(v5.node, v5.offset), p5.removeAllRanges(), h4 > g4 ? (p5.addRange(b4), p5.extend(y5.node, y5.offset)) : (b4.setEnd(y5.node, y5.offset), p5.addRange(b4));
                }
              }
            }
          }
          for (f5 = [], p5 = i5; p5 = p5.parentNode; ) 1 === p5.nodeType && f5.push({
            element: p5,
            left: p5.scrollLeft,
            top: p5.scrollTop
          });
          for ("function" == typeof i5.focus && i5.focus(), i5 = 0; i5 < f5.length; i5++) {
            var k3 = f5[i5];
            k3.element.scrollLeft = k3.left, k3.element.scrollTop = k3.top;
          }
        }
        qd = !!jf, Bf = jf = null;
      } finally {
        Vs = l5, ue2.p = r6, ie2.T = t5;
      }
    }
    e6.current = n5, cc = 2;
  }
}
function Hc() {
  if (2 === cc) {
    cc = 0;
    var e6 = fc, n5 = dc, t5 = !!(8772 & n5.flags);
    if (8772 & n5.subtreeFlags || t5) {
      t5 = ie2.T, ie2.T = null;
      var r6 = ue2.p;
      ue2.p = 2;
      var l5 = Vs;
      Vs |= 4;
      try {
        is(e6, n5.alternate, n5);
      } finally {
        Vs = l5, ue2.p = r6, ie2.T = t5;
      }
    }
    cc = 3;
  }
}
function Qc() {
  if (4 === cc || 3 === cc) {
    cc = 0, De2();
    var e6 = fc, n5 = dc, t5 = pc, r6 = gc;
    10256 & n5.subtreeFlags || 10256 & n5.flags ? cc = 5 : (cc = 0, dc = fc = null, Wc(e6, e6.pendingLanes));
    var l5 = e6.pendingLanes;
    if (0 === l5 && (sc = null), fn(t5), n5 = n5.stateNode, Qe && "function" == typeof Qe.onCommitFiberRoot) try {
      Qe.onCommitFiberRoot(He2, n5, void 0, !(128 & ~n5.current.flags));
    } catch (e7) {
    }
    if (null !== r6) {
      n5 = ie2.T, l5 = ue2.p, ue2.p = 2, ie2.T = null;
      try {
        for (var a6 = e6.onRecoverableError, o5 = 0; o5 < r6.length; o5++) {
          var i5 = r6[o5];
          a6(i5.value, {
            componentStack: i5.stack
          });
        }
      } finally {
        ie2.T = n5, ue2.p = l5;
      }
    }
    3 & pc && qc(), sf(e6), l5 = e6.pendingLanes, 261930 & t5 && 42 & l5 ? e6 === yc ? vc++ : (vc = 0, yc = e6) : vc = 0, cf(0, false);
  }
}
function Wc(e6, n5) {
  0 == (e6.pooledCacheLanes &= n5) && (null != (n5 = e6.pooledCache) && (e6.pooledCache = null, pa(n5)));
}
function qc() {
  return Bc(), Hc(), Qc(), Kc();
}
function Kc() {
  if (5 !== cc) return false;
  var e6 = fc, n5 = mc;
  mc = 0;
  var t5 = fn(pc), r6 = ie2.T, l5 = ue2.p;
  try {
    ue2.p = 32 > t5 ? 32 : t5, ie2.T = null, t5 = hc, hc = null;
    var a6 = fc, o5 = pc;
    if (cc = 0, dc = fc = null, pc = 0, 6 & Vs) throw Error(O3(331));
    var i5 = Vs;
    if (Vs |= 4, As(a6.current), Ps(a6, a6.current, o5, t5), Vs = i5, cf(0, false), Qe && "function" == typeof Qe.onPostCommitFiberRoot) try {
      Qe.onPostCommitFiberRoot(He2, a6);
    } catch (e7) {
    }
    return true;
  } finally {
    ue2.p = l5, ie2.T = r6, Wc(e6, n5);
  }
}
function Yc(e6, n5, t5) {
  n5 = wl(t5, n5), null !== (e6 = Wa(e6, n5 = tu(e6.stateNode, n5, 2), 2)) && (an(e6, 2), sf(e6));
}
function Xc(e6, n5, t5) {
  if (3 === e6.tag) Yc(e6, e6, t5);
  else for (; null !== n5; ) {
    if (3 === n5.tag) {
      Yc(n5, e6, t5);
      break;
    }
    if (1 === n5.tag) {
      var r6 = n5.stateNode;
      if ("function" == typeof n5.type.getDerivedStateFromError || "function" == typeof r6.componentDidCatch && (null === sc || !sc.has(r6))) {
        e6 = wl(t5, e6), null !== (r6 = Wa(n5, t5 = ru(2), 2)) && (lu(t5, r6, n5, e6), an(r6, 2), sf(r6));
        break;
      }
    }
    n5 = n5.return;
  }
}
function Gc(e6, n5, t5) {
  var r6 = e6.pingCache;
  if (null === r6) {
    r6 = e6.pingCache = new Us();
    var l5 = /* @__PURE__ */ new Set();
    r6.set(n5, l5);
  } else void 0 === (l5 = r6.get(n5)) && (l5 = /* @__PURE__ */ new Set(), r6.set(n5, l5));
  l5.has(t5) || (Ks = true, l5.add(t5), e6 = Zc.bind(null, e6, n5, t5), n5.then(e6, e6));
}
function Zc(e6, n5, t5) {
  var r6 = e6.pingCache;
  null !== r6 && r6.delete(n5), e6.pingedLanes |= e6.suspendedLanes & t5, e6.warmLanes &= ~t5, $s === e6 && (Bs & t5) === t5 && (4 === Xs || 3 === Xs && (62914560 & Bs) === Bs && 300 > Ae2() - ac ? !(2 & Vs) && Nc(e6, 0) : Js |= t5, nc === Bs && (nc = 0)), sf(e6);
}
function Jc(e6, n5) {
  0 === n5 && (n5 = rn()), null !== (e6 = ol(e6, n5)) && (an(e6, n5), sf(e6));
}
function ef(e6) {
  var n5 = e6.memoizedState, t5 = 0;
  null !== n5 && (t5 = n5.retryLane), Jc(e6, t5);
}
function nf(e6, n5) {
  var t5 = 0;
  switch (e6.tag) {
    case 31:
    case 13:
      var r6 = e6.stateNode, l5 = e6.memoizedState;
      null !== l5 && (t5 = l5.retryLane);
      break;
    case 19:
      r6 = e6.stateNode;
      break;
    case 22:
      r6 = e6.stateNode._retryCache;
      break;
    default:
      throw Error(O3(314));
  }
  null !== r6 && r6.delete(n5), Jc(e6, t5);
}
var tf = null;
var rf = null;
var lf = false;
var af = false;
var of = false;
var uf = 0;
function sf(e6) {
  e6 !== rf && null === e6.next && (null === rf ? tf = rf = e6 : rf = rf.next = e6), af = true, lf || (lf = true, Zf(function() {
    6 & Vs ? _e2(Re2, ff) : df();
  }));
}
function cf(e6, n5) {
  if (!of && af) {
    of = true;
    do {
      for (var t5 = false, r6 = tf; null !== r6; ) {
        if (!n5) if (0 !== e6) {
          var l5 = r6.pendingLanes;
          if (0 === l5) var a6 = 0;
          else {
            var o5 = r6.suspendedLanes, i5 = r6.pingedLanes;
            a6 = (1 << 31 - qe2(42 | e6) + 1) - 1, a6 = 201326741 & (a6 &= l5 & ~(o5 & ~i5)) ? 201326741 & a6 | 1 : a6 ? 2 | a6 : 0;
          }
          0 !== a6 && (t5 = true, hf(r6, a6));
        } else a6 = Bs, !(3 & (a6 = en(r6, r6 === $s ? a6 : 0, null !== r6.cancelPendingCommit || -1 !== r6.timeoutHandle))) || nn(r6, a6) || (t5 = true, hf(r6, a6));
        r6 = r6.next;
      }
    } while (t5);
    of = false;
  }
}
function ff() {
  df();
}
function df() {
  af = lf = false;
  var e6 = 0;
  0 !== uf && function() {
    var e7 = window.event;
    if (e7 && "popstate" === e7.type) return e7 !== Kf && (Kf = e7, true);
    return Kf = null, false;
  }() && (e6 = uf);
  for (var n5 = Ae2(), t5 = null, r6 = tf; null !== r6; ) {
    var l5 = r6.next, a6 = pf(r6, n5);
    0 === a6 ? (r6.next = null, null === t5 ? tf = l5 : t5.next = l5, null === l5 && (rf = t5)) : (t5 = r6, (0 !== e6 || 3 & a6) && (af = true)), r6 = l5;
  }
  0 !== cc && 5 !== cc || cf(e6, false), 0 !== uf && (uf = 0);
}
function pf(e6, n5) {
  for (var t5 = e6.suspendedLanes, r6 = e6.pingedLanes, l5 = e6.expirationTimes, a6 = -62914561 & e6.pendingLanes; 0 < a6; ) {
    var o5 = 31 - qe2(a6), i5 = 1 << o5, u5 = l5[o5];
    -1 === u5 ? i5 & t5 && !(i5 & r6) || (l5[o5] = tn(i5, n5)) : u5 <= n5 && (e6.expiredLanes |= i5), a6 &= ~i5;
  }
  if (t5 = Bs, t5 = en(e6, e6 === (n5 = $s) ? t5 : 0, null !== e6.cancelPendingCommit || -1 !== e6.timeoutHandle), r6 = e6.callbackNode, 0 === t5 || e6 === n5 && (2 === Hs || 9 === Hs) || null !== e6.cancelPendingCommit) return null !== r6 && null !== r6 && Fe2(r6), e6.callbackNode = null, e6.callbackPriority = 0;
  if (!(3 & t5) || nn(e6, t5)) {
    if ((n5 = t5 & -t5) === e6.callbackPriority) return n5;
    switch (null !== r6 && Fe2(r6), fn(t5)) {
      case 2:
      case 8:
        t5 = Ie2;
        break;
      case 32:
      default:
        t5 = Ue2;
        break;
      case 268435456:
        t5 = $e2;
    }
    return r6 = mf.bind(null, e6), t5 = _e2(t5, r6), e6.callbackPriority = n5, e6.callbackNode = t5, n5;
  }
  return null !== r6 && null !== r6 && Fe2(r6), e6.callbackPriority = 2, e6.callbackNode = null, 2;
}
function mf(e6, n5) {
  if (0 !== cc && 5 !== cc) return e6.callbackNode = null, e6.callbackPriority = 0, null;
  var t5 = e6.callbackNode;
  if (qc() && e6.callbackNode !== t5) return null;
  var r6 = Bs;
  return 0 === (r6 = en(e6, e6 === $s ? r6 : 0, null !== e6.cancelPendingCommit || -1 !== e6.timeoutHandle)) ? null : (Sc(e6, r6, n5), pf(e6, Ae2()), null != e6.callbackNode && e6.callbackNode === t5 ? mf.bind(null, e6) : null);
}
function hf(e6, n5) {
  if (qc()) return null;
  Sc(e6, n5, true);
}
function gf() {
  if (0 === uf) {
    var e6 = ga;
    0 === e6 && (e6 = Xe, !(261888 & (Xe <<= 1)) && (Xe = 256)), uf = e6;
  }
  return uf;
}
function vf(e6) {
  return null == e6 || "symbol" == typeof e6 || "boolean" == typeof e6 ? null : "function" == typeof e6 ? e6 : at("" + e6);
}
function yf(e6, n5) {
  var t5 = n5.ownerDocument.createElement("input");
  return t5.name = n5.name, t5.value = n5.value, e6.id && t5.setAttribute("form", e6.id), n5.parentNode.insertBefore(t5, n5), e6 = new FormData(e6), t5.parentNode.removeChild(t5), e6;
}
for (bf = 0; bf < Gr.length; bf++) {
  kf = Gr[bf];
  Zr(kf.toLowerCase(), "on" + (kf[0].toUpperCase() + kf.slice(1)));
}
var kf;
var bf;
Zr(Br, "onAnimationEnd"), Zr(Hr, "onAnimationIteration"), Zr(Qr, "onAnimationStart"), Zr("dblclick", "onDoubleClick"), Zr("focusin", "onFocus"), Zr("focusout", "onBlur"), Zr(Wr, "onTransitionRun"), Zr(qr, "onTransitionStart"), Zr(Kr, "onTransitionCancel"), Zr(Yr, "onTransitionEnd"), Fn("onMouseEnter", [
  "mouseout",
  "mouseover"
]), Fn("onMouseLeave", [
  "mouseout",
  "mouseover"
]), Fn("onPointerEnter", [
  "pointerout",
  "pointerover"
]), Fn("onPointerLeave", [
  "pointerout",
  "pointerover"
]), _n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _n("onBeforeInput", [
  "compositionend",
  "keypress",
  "textInput",
  "paste"
]), _n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var wf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
var Sf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wf));
function Ef(e6, n5) {
  n5 = !!(4 & n5);
  for (var t5 = 0; t5 < e6.length; t5++) {
    var r6 = e6[t5], l5 = r6.event;
    r6 = r6.listeners;
    e: {
      var a6 = void 0;
      if (n5) for (var o5 = r6.length - 1; 0 <= o5; o5--) {
        var i5 = r6[o5], u5 = i5.instance, s6 = i5.currentTarget;
        if (i5 = i5.listener, u5 !== a6 && l5.isPropagationStopped()) break e;
        a6 = i5, l5.currentTarget = s6;
        try {
          a6(l5);
        } catch (e7) {
          Jr(e7);
        }
        l5.currentTarget = null, a6 = u5;
      }
      else for (o5 = 0; o5 < r6.length; o5++) {
        if (u5 = (i5 = r6[o5]).instance, s6 = i5.currentTarget, i5 = i5.listener, u5 !== a6 && l5.isPropagationStopped()) break e;
        a6 = i5, l5.currentTarget = s6;
        try {
          a6(l5);
        } catch (e7) {
          Jr(e7);
        }
        l5.currentTarget = null, a6 = u5;
      }
    }
  }
}
function xf(e6, n5) {
  var t5 = n5[yn];
  void 0 === t5 && (t5 = n5[yn] = /* @__PURE__ */ new Set());
  var r6 = e6 + "__bubble";
  t5.has(r6) || (Nf(n5, e6, 2, false), t5.add(r6));
}
function Cf(e6, n5, t5) {
  var r6 = 0;
  n5 && (r6 |= 4), Nf(t5, e6, r6, n5);
}
var zf = "_reactListening" + Math.random().toString(36).slice(2);
function Pf(e6) {
  if (!e6[zf]) {
    e6[zf] = true, Tn.forEach(function(n6) {
      "selectionchange" !== n6 && (Sf.has(n6) || Cf(n6, false, e6), Cf(n6, true, e6));
    });
    var n5 = 9 === e6.nodeType ? e6 : e6.ownerDocument;
    null === n5 || n5[zf] || (n5[zf] = true, Cf("selectionchange", false, n5));
  }
}
function Nf(e6, n5, t5, r6) {
  switch (ep(n5)) {
    case 2:
      var l5 = Kd;
      break;
    case 8:
      l5 = Yd;
      break;
    default:
      l5 = Xd;
  }
  t5 = l5.bind(null, n5, t5, e6), l5 = void 0, !gt || "touchstart" !== n5 && "touchmove" !== n5 && "wheel" !== n5 || (l5 = true), r6 ? void 0 !== l5 ? e6.addEventListener(n5, t5, {
    capture: true,
    passive: l5
  }) : e6.addEventListener(n5, t5, true) : void 0 !== l5 ? e6.addEventListener(n5, t5, {
    passive: l5
  }) : e6.addEventListener(n5, t5, false);
}
function Tf(e6, n5, t5, r6, l5) {
  var a6 = r6;
  if (!(1 & n5 || 2 & n5 || null === r6)) e: for (; ; ) {
    if (null === r6) return;
    var o5 = r6.tag;
    if (3 === o5 || 4 === o5) {
      var i5 = r6.stateNode.containerInfo;
      if (i5 === l5) break;
      if (4 === o5) for (o5 = r6.return; null !== o5; ) {
        var u5 = o5.tag;
        if ((3 === u5 || 4 === u5) && o5.stateNode.containerInfo === l5) return;
        o5 = o5.return;
      }
      for (; null !== i5; ) {
        if (null === (o5 = xn(i5))) return;
        if (5 === (u5 = o5.tag) || 6 === u5 || 26 === u5 || 27 === u5) {
          r6 = a6 = o5;
          continue e;
        }
        i5 = i5.parentNode;
      }
    }
    r6 = r6.return;
  }
  pt(function() {
    var r7 = a6, l6 = ut(t5), o6 = [];
    e: {
      var i6 = Xr.get(e6);
      if (void 0 !== i6) {
        var u6 = Lt, s6 = e6;
        switch (e6) {
          case "keypress":
            if (0 === St(t5)) break e;
          case "keydown":
          case "keyup":
            u6 = Qt;
            break;
          case "focusin":
            s6 = "focus", u6 = Mt;
            break;
          case "focusout":
            s6 = "blur", u6 = Mt;
            break;
          case "beforeblur":
          case "afterblur":
            u6 = Mt;
            break;
          case "click":
            if (2 === t5.button) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            u6 = Dt;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            u6 = At;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            u6 = qt;
            break;
          case Br:
          case Hr:
          case Qr:
            u6 = Rt;
            break;
          case Yr:
            u6 = Kt;
            break;
          case "scroll":
          case "scrollend":
            u6 = Ft;
            break;
          case "wheel":
            u6 = Yt;
            break;
          case "copy":
          case "cut":
          case "paste":
            u6 = It;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            u6 = Wt;
            break;
          case "toggle":
          case "beforetoggle":
            u6 = Xt;
        }
        var c5 = !!(4 & n5), f5 = !c5 && ("scroll" === e6 || "scrollend" === e6), d5 = c5 ? null !== i6 ? i6 + "Capture" : null : i6;
        c5 = [];
        for (var p5, m4 = r7; null !== m4; ) {
          var h4 = m4;
          if (p5 = h4.stateNode, 5 !== (h4 = h4.tag) && 26 !== h4 && 27 !== h4 || null === p5 || null === d5 || null != (h4 = mt(m4, d5)) && c5.push(Lf(m4, h4, p5)), f5) break;
          m4 = m4.return;
        }
        0 < c5.length && (i6 = new u6(i6, s6, null, t5, l6), o6.push({
          event: i6,
          listeners: c5
        }));
      }
    }
    if (!(7 & n5)) {
      if (u6 = "mouseout" === e6 || "pointerout" === e6, (!(i6 = "mouseover" === e6 || "pointerover" === e6) || t5 === it || !(s6 = t5.relatedTarget || t5.fromElement) || !xn(s6) && !s6[vn]) && (u6 || i6) && (i6 = l6.window === l6 ? l6 : (i6 = l6.ownerDocument) ? i6.defaultView || i6.parentWindow : window, u6 ? (u6 = r7, null !== (s6 = (s6 = t5.relatedTarget || t5.toElement) ? xn(s6) : null) && (f5 = A2(s6), c5 = s6.tag, s6 !== f5 || 5 !== c5 && 27 !== c5 && 6 !== c5) && (s6 = null)) : (u6 = null, s6 = r7), u6 !== s6)) {
        if (c5 = Dt, h4 = "onMouseLeave", d5 = "onMouseEnter", m4 = "mouse", "pointerout" !== e6 && "pointerover" !== e6 || (c5 = Wt, h4 = "onPointerLeave", d5 = "onPointerEnter", m4 = "pointer"), f5 = null == u6 ? i6 : zn(u6), p5 = null == s6 ? i6 : zn(s6), (i6 = new c5(h4, m4 + "leave", u6, t5, l6)).target = f5, i6.relatedTarget = p5, h4 = null, xn(l6) === r7 && ((c5 = new c5(d5, m4 + "enter", s6, t5, l6)).target = p5, c5.relatedTarget = f5, h4 = c5), f5 = h4, u6 && s6) e: {
          for (c5 = Ff, m4 = s6, p5 = 0, h4 = d5 = u6; h4; h4 = c5(h4)) p5++;
          h4 = 0;
          for (var g4 = m4; g4; g4 = c5(g4)) h4++;
          for (; 0 < p5 - h4; ) d5 = c5(d5), p5--;
          for (; 0 < h4 - p5; ) m4 = c5(m4), h4--;
          for (; p5--; ) {
            if (d5 === m4 || null !== m4 && d5 === m4.alternate) {
              c5 = d5;
              break e;
            }
            d5 = c5(d5), m4 = c5(m4);
          }
          c5 = null;
        }
        else c5 = null;
        null !== u6 && Of(o6, i6, u6, c5, false), null !== s6 && null !== f5 && Of(o6, f5, s6, c5, true);
      }
      if ("select" === (u6 = (i6 = r7 ? zn(r7) : window).nodeName && i6.nodeName.toLowerCase()) || "input" === u6 && "file" === i6.type) var v5 = mr;
      else if (ur(i6)) if (hr) v5 = xr;
      else {
        v5 = Sr;
        var y5 = wr;
      }
      else !(u6 = i6.nodeName) || "input" !== u6.toLowerCase() || "checkbox" !== i6.type && "radio" !== i6.type ? r7 && tt(r7.elementType) && (v5 = mr) : v5 = Er;
      switch (v5 && (v5 = v5(e6, r7)) ? sr(o6, v5, t5, l6) : (y5 && y5(e6, i6, r7), "focusout" === e6 && r7 && "number" === i6.type && null != r7.memoizedProps.value && Kn(i6, "number", i6.value)), y5 = r7 ? zn(r7) : window, e6) {
        case "focusin":
          (ur(y5) || "true" === y5.contentEditable) && (Or = y5, Dr = r7, Ar = null);
          break;
        case "focusout":
          Ar = Dr = Or = null;
          break;
        case "mousedown":
          Mr = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Mr = false, Rr(o6, t5, l6);
          break;
        case "selectionchange":
          if (Fr) break;
        case "keydown":
        case "keyup":
          Rr(o6, t5, l6);
      }
      var b4;
      if (Zt) e: {
        switch (e6) {
          case "compositionstart":
            var k3 = "onCompositionStart";
            break e;
          case "compositionend":
            k3 = "onCompositionEnd";
            break e;
          case "compositionupdate":
            k3 = "onCompositionUpdate";
            break e;
        }
        k3 = void 0;
      }
      else or ? lr(e6, t5) && (k3 = "onCompositionEnd") : "keydown" === e6 && 229 === t5.keyCode && (k3 = "onCompositionStart");
      k3 && (nr && "ko" !== t5.locale && (or || "onCompositionStart" !== k3 ? "onCompositionEnd" === k3 && or && (b4 = wt()) : (bt = "value" in (yt = l6) ? yt.value : yt.textContent, or = true)), 0 < (y5 = _f(r7, k3)).length && (k3 = new Ut(k3, e6, null, t5, l6), o6.push({
        event: k3,
        listeners: y5
      }), b4 ? k3.data = b4 : null !== (b4 = ar(t5)) && (k3.data = b4))), (b4 = er ? function(e7, n6) {
        switch (e7) {
          case "compositionend":
            return ar(n6);
          case "keypress":
            return 32 !== n6.which ? null : (rr = true, tr);
          case "textInput":
            return (e7 = n6.data) === tr && rr ? null : e7;
          default:
            return null;
        }
      }(e6, t5) : function(e7, n6) {
        if (or) return "compositionend" === e7 || !Zt && lr(e7, n6) ? (e7 = wt(), kt = bt = yt = null, or = false, e7) : null;
        switch (e7) {
          case "paste":
          default:
            return null;
          case "keypress":
            if (!(n6.ctrlKey || n6.altKey || n6.metaKey) || n6.ctrlKey && n6.altKey) {
              if (n6.char && 1 < n6.char.length) return n6.char;
              if (n6.which) return String.fromCharCode(n6.which);
            }
            return null;
          case "compositionend":
            return nr && "ko" !== n6.locale ? null : n6.data;
        }
      }(e6, t5)) && (0 < (k3 = _f(r7, "onBeforeInput")).length && (y5 = new Ut("onBeforeInput", "beforeinput", null, t5, l6), o6.push({
        event: y5,
        listeners: k3
      }), y5.data = b4)), function(e7, n6, t6, r8, l7) {
        if ("submit" === n6 && t6 && t6.stateNode === l7) {
          var a7 = vf((l7[gn] || null).action), o7 = r8.submitter;
          o7 && null !== (n6 = (n6 = o7[gn] || null) ? vf(n6.formAction) : o7.getAttribute("formAction")) && (a7 = n6, o7 = null);
          var i7 = new Lt("action", "action", null, r8, l7);
          e7.push({
            event: i7,
            listeners: [
              {
                instance: null,
                listener: function() {
                  if (r8.defaultPrevented) {
                    if (0 !== uf) {
                      var e8 = o7 ? yf(l7, o7) : new FormData(l7);
                      Ni(t6, {
                        pending: true,
                        data: e8,
                        method: l7.method,
                        action: a7
                      }, null, e8);
                    }
                  } else "function" == typeof a7 && (i7.preventDefault(), e8 = o7 ? yf(l7, o7) : new FormData(l7), Ni(t6, {
                    pending: true,
                    data: e8,
                    method: l7.method,
                    action: a7
                  }, a7, e8));
                },
                currentTarget: l7
              }
            ]
          });
        }
      }(o6, e6, r7, t5, l6);
    }
    Ef(o6, n5);
  });
}
function Lf(e6, n5, t5) {
  return {
    instance: e6,
    listener: n5,
    currentTarget: t5
  };
}
function _f(e6, n5) {
  for (var t5 = n5 + "Capture", r6 = []; null !== e6; ) {
    var l5 = e6, a6 = l5.stateNode;
    if (5 !== (l5 = l5.tag) && 26 !== l5 && 27 !== l5 || null === a6 || (null != (l5 = mt(e6, t5)) && r6.unshift(Lf(e6, l5, a6)), null != (l5 = mt(e6, n5)) && r6.push(Lf(e6, l5, a6))), 3 === e6.tag) return r6;
    e6 = e6.return;
  }
  return [];
}
function Ff(e6) {
  if (null === e6) return null;
  do {
    e6 = e6.return;
  } while (e6 && 5 !== e6.tag && 27 !== e6.tag);
  return e6 || null;
}
function Of(e6, n5, t5, r6, l5) {
  for (var a6 = n5._reactName, o5 = []; null !== t5 && t5 !== r6; ) {
    var i5 = t5, u5 = i5.alternate, s6 = i5.stateNode;
    if (i5 = i5.tag, null !== u5 && u5 === r6) break;
    5 !== i5 && 26 !== i5 && 27 !== i5 || null === s6 || (u5 = s6, l5 ? null != (s6 = mt(t5, a6)) && o5.unshift(Lf(t5, s6, u5)) : l5 || null != (s6 = mt(t5, a6)) && o5.push(Lf(t5, s6, u5))), t5 = t5.return;
  }
  0 !== o5.length && e6.push({
    event: n5,
    listeners: o5
  });
}
var Df = /\r\n?/g;
var Af = /\u0000|\uFFFD/g;
function Mf(e6) {
  return ("string" == typeof e6 ? e6 : "" + e6).replace(Df, "\n").replace(Af, "");
}
function Rf(e6, n5) {
  return n5 = Mf(n5), Mf(e6) === n5;
}
function If(e6, n5, t5, r6, l5, a6) {
  switch (t5) {
    case "children":
      "string" == typeof r6 ? "body" === n5 || "textarea" === n5 && "" === r6 || Zn(e6, r6) : ("number" == typeof r6 || "bigint" == typeof r6) && "body" !== n5 && Zn(e6, "" + r6);
      break;
    case "className":
      Rn(e6, "class", r6);
      break;
    case "tabIndex":
      Rn(e6, "tabindex", r6);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      Rn(e6, t5, r6);
      break;
    case "style":
      nt(e6, r6, a6);
      break;
    case "data":
      if ("object" !== n5) {
        Rn(e6, "data", r6);
        break;
      }
    case "src":
    case "href":
      if ("" === r6 && ("a" !== n5 || "href" !== t5)) {
        e6.removeAttribute(t5);
        break;
      }
      if (null == r6 || "function" == typeof r6 || "symbol" == typeof r6 || "boolean" == typeof r6) {
        e6.removeAttribute(t5);
        break;
      }
      r6 = at("" + r6), e6.setAttribute(t5, r6);
      break;
    case "action":
    case "formAction":
      if ("function" == typeof r6) {
        e6.setAttribute(t5, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
        break;
      }
      if ("function" == typeof a6 && ("formAction" === t5 ? ("input" !== n5 && If(e6, n5, "name", l5.name, l5, null), If(e6, n5, "formEncType", l5.formEncType, l5, null), If(e6, n5, "formMethod", l5.formMethod, l5, null), If(e6, n5, "formTarget", l5.formTarget, l5, null)) : (If(e6, n5, "encType", l5.encType, l5, null), If(e6, n5, "method", l5.method, l5, null), If(e6, n5, "target", l5.target, l5, null))), null == r6 || "symbol" == typeof r6 || "boolean" == typeof r6) {
        e6.removeAttribute(t5);
        break;
      }
      r6 = at("" + r6), e6.setAttribute(t5, r6);
      break;
    case "onClick":
      null != r6 && (e6.onclick = ot);
      break;
    case "onScroll":
      null != r6 && xf("scroll", e6);
      break;
    case "onScrollEnd":
      null != r6 && xf("scrollend", e6);
      break;
    case "dangerouslySetInnerHTML":
      if (null != r6) {
        if ("object" != typeof r6 || !("__html" in r6)) throw Error(O3(61));
        if (null != (t5 = r6.__html)) {
          if (null != l5.children) throw Error(O3(60));
          e6.innerHTML = t5;
        }
      }
      break;
    case "multiple":
      e6.multiple = r6 && "function" != typeof r6 && "symbol" != typeof r6;
      break;
    case "muted":
      e6.muted = r6 && "function" != typeof r6 && "symbol" != typeof r6;
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
    case "autoFocus":
      break;
    case "xlinkHref":
      if (null == r6 || "function" == typeof r6 || "boolean" == typeof r6 || "symbol" == typeof r6) {
        e6.removeAttribute("xlink:href");
        break;
      }
      t5 = at("" + r6), e6.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t5);
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      null != r6 && "function" != typeof r6 && "symbol" != typeof r6 ? e6.setAttribute(t5, "" + r6) : e6.removeAttribute(t5);
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      r6 && "function" != typeof r6 && "symbol" != typeof r6 ? e6.setAttribute(t5, "") : e6.removeAttribute(t5);
      break;
    case "capture":
    case "download":
      true === r6 ? e6.setAttribute(t5, "") : false !== r6 && null != r6 && "function" != typeof r6 && "symbol" != typeof r6 ? e6.setAttribute(t5, r6) : e6.removeAttribute(t5);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      null != r6 && "function" != typeof r6 && "symbol" != typeof r6 && !isNaN(r6) && 1 <= r6 ? e6.setAttribute(t5, r6) : e6.removeAttribute(t5);
      break;
    case "rowSpan":
    case "start":
      null == r6 || "function" == typeof r6 || "symbol" == typeof r6 || isNaN(r6) ? e6.removeAttribute(t5) : e6.setAttribute(t5, r6);
      break;
    case "popover":
      xf("beforetoggle", e6), xf("toggle", e6), Mn(e6, "popover", r6);
      break;
    case "xlinkActuate":
      In(e6, "http://www.w3.org/1999/xlink", "xlink:actuate", r6);
      break;
    case "xlinkArcrole":
      In(e6, "http://www.w3.org/1999/xlink", "xlink:arcrole", r6);
      break;
    case "xlinkRole":
      In(e6, "http://www.w3.org/1999/xlink", "xlink:role", r6);
      break;
    case "xlinkShow":
      In(e6, "http://www.w3.org/1999/xlink", "xlink:show", r6);
      break;
    case "xlinkTitle":
      In(e6, "http://www.w3.org/1999/xlink", "xlink:title", r6);
      break;
    case "xlinkType":
      In(e6, "http://www.w3.org/1999/xlink", "xlink:type", r6);
      break;
    case "xmlBase":
      In(e6, "http://www.w3.org/XML/1998/namespace", "xml:base", r6);
      break;
    case "xmlLang":
      In(e6, "http://www.w3.org/XML/1998/namespace", "xml:lang", r6);
      break;
    case "xmlSpace":
      In(e6, "http://www.w3.org/XML/1998/namespace", "xml:space", r6);
      break;
    case "is":
      Mn(e6, "is", r6);
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      (!(2 < t5.length) || "o" !== t5[0] && "O" !== t5[0] || "n" !== t5[1] && "N" !== t5[1]) && Mn(e6, t5 = rt.get(t5) || t5, r6);
  }
}
function Uf(e6, n5, t5, r6, l5, a6) {
  switch (t5) {
    case "style":
      nt(e6, r6, a6);
      break;
    case "dangerouslySetInnerHTML":
      if (null != r6) {
        if ("object" != typeof r6 || !("__html" in r6)) throw Error(O3(61));
        if (null != (t5 = r6.__html)) {
          if (null != l5.children) throw Error(O3(60));
          e6.innerHTML = t5;
        }
      }
      break;
    case "children":
      "string" == typeof r6 ? Zn(e6, r6) : ("number" == typeof r6 || "bigint" == typeof r6) && Zn(e6, "" + r6);
      break;
    case "onScroll":
      null != r6 && xf("scroll", e6);
      break;
    case "onScrollEnd":
      null != r6 && xf("scrollend", e6);
      break;
    case "onClick":
      null != r6 && (e6.onclick = ot);
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "innerHTML":
    case "ref":
    case "innerText":
    case "textContent":
      break;
    default:
      Ln.hasOwnProperty(t5) || ("o" !== t5[0] || "n" !== t5[1] || (l5 = t5.endsWith("Capture"), n5 = t5.slice(2, l5 ? t5.length - 7 : void 0), "function" == typeof (a6 = null != (a6 = e6[gn] || null) ? a6[t5] : null) && e6.removeEventListener(n5, a6, l5), "function" != typeof r6) ? t5 in e6 ? e6[t5] = r6 : true === r6 ? e6.setAttribute(t5, "") : Mn(e6, t5, r6) : ("function" != typeof a6 && null !== a6 && (t5 in e6 ? e6[t5] = null : e6.hasAttribute(t5) && e6.removeAttribute(t5)), e6.addEventListener(n5, r6, l5)));
  }
}
function Vf(e6, n5, t5) {
  switch (n5) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "img":
      xf("error", e6), xf("load", e6);
      var r6, l5 = false, a6 = false;
      for (r6 in t5) if (t5.hasOwnProperty(r6)) {
        var o5 = t5[r6];
        if (null != o5) switch (r6) {
          case "src":
            l5 = true;
            break;
          case "srcSet":
            a6 = true;
            break;
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(O3(137, n5));
          default:
            If(e6, n5, r6, o5, t5, null);
        }
      }
      return a6 && If(e6, n5, "srcSet", t5.srcSet, t5, null), void (l5 && If(e6, n5, "src", t5.src, t5, null));
    case "input":
      xf("invalid", e6);
      var i5 = r6 = o5 = a6 = null, u5 = null, s6 = null;
      for (l5 in t5) if (t5.hasOwnProperty(l5)) {
        var c5 = t5[l5];
        if (null != c5) switch (l5) {
          case "name":
            a6 = c5;
            break;
          case "type":
            o5 = c5;
            break;
          case "checked":
            u5 = c5;
            break;
          case "defaultChecked":
            s6 = c5;
            break;
          case "value":
            r6 = c5;
            break;
          case "defaultValue":
            i5 = c5;
            break;
          case "children":
          case "dangerouslySetInnerHTML":
            if (null != c5) throw Error(O3(137, n5));
            break;
          default:
            If(e6, n5, l5, c5, t5, null);
        }
      }
      return void qn(e6, r6, i5, u5, s6, o5, a6, false);
    case "select":
      for (a6 in xf("invalid", e6), l5 = o5 = r6 = null, t5) if (t5.hasOwnProperty(a6) && null != (i5 = t5[a6])) switch (a6) {
        case "value":
          r6 = i5;
          break;
        case "defaultValue":
          o5 = i5;
          break;
        case "multiple":
          l5 = i5;
        default:
          If(e6, n5, a6, i5, t5, null);
      }
      return n5 = r6, t5 = o5, e6.multiple = !!l5, void (null != n5 ? Yn(e6, !!l5, n5, false) : null != t5 && Yn(e6, !!l5, t5, true));
    case "textarea":
      for (o5 in xf("invalid", e6), r6 = a6 = l5 = null, t5) if (t5.hasOwnProperty(o5) && null != (i5 = t5[o5])) switch (o5) {
        case "value":
          l5 = i5;
          break;
        case "defaultValue":
          a6 = i5;
          break;
        case "children":
          r6 = i5;
          break;
        case "dangerouslySetInnerHTML":
          if (null != i5) throw Error(O3(91));
          break;
        default:
          If(e6, n5, o5, i5, t5, null);
      }
      return void Gn(e6, l5, a6, r6);
    case "option":
      for (u5 in t5) if (t5.hasOwnProperty(u5) && null != (l5 = t5[u5])) if ("selected" === u5) e6.selected = l5 && "function" != typeof l5 && "symbol" != typeof l5;
      else If(e6, n5, u5, l5, t5, null);
      return;
    case "dialog":
      xf("beforetoggle", e6), xf("toggle", e6), xf("cancel", e6), xf("close", e6);
      break;
    case "iframe":
    case "object":
      xf("load", e6);
      break;
    case "video":
    case "audio":
      for (l5 = 0; l5 < wf.length; l5++) xf(wf[l5], e6);
      break;
    case "image":
      xf("error", e6), xf("load", e6);
      break;
    case "details":
      xf("toggle", e6);
      break;
    case "embed":
    case "source":
    case "link":
      xf("error", e6), xf("load", e6);
    case "area":
    case "base":
    case "br":
    case "col":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "track":
    case "wbr":
    case "menuitem":
      for (s6 in t5) if (t5.hasOwnProperty(s6) && null != (l5 = t5[s6])) switch (s6) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(O3(137, n5));
        default:
          If(e6, n5, s6, l5, t5, null);
      }
      return;
    default:
      if (tt(n5)) {
        for (c5 in t5) t5.hasOwnProperty(c5) && (void 0 !== (l5 = t5[c5]) && Uf(e6, n5, c5, l5, t5, void 0));
        return;
      }
  }
  for (i5 in t5) t5.hasOwnProperty(i5) && (null != (l5 = t5[i5]) && If(e6, n5, i5, l5, t5, null));
}
function $f(e6) {
  switch (e6) {
    case "css":
    case "script":
    case "font":
    case "img":
    case "image":
    case "input":
    case "link":
      return true;
    default:
      return false;
  }
}
var jf = null;
var Bf = null;
function Hf(e6) {
  return 9 === e6.nodeType ? e6 : e6.ownerDocument;
}
function Qf(e6) {
  switch (e6) {
    case "http://www.w3.org/2000/svg":
      return 1;
    case "http://www.w3.org/1998/Math/MathML":
      return 2;
    default:
      return 0;
  }
}
function Wf(e6, n5) {
  if (0 === e6) switch (n5) {
    case "svg":
      return 1;
    case "math":
      return 2;
    default:
      return 0;
  }
  return 1 === e6 && "foreignObject" === n5 ? 0 : e6;
}
function qf(e6, n5) {
  return "textarea" === e6 || "noscript" === e6 || "string" == typeof n5.children || "number" == typeof n5.children || "bigint" == typeof n5.children || "object" == typeof n5.dangerouslySetInnerHTML && null !== n5.dangerouslySetInnerHTML && null != n5.dangerouslySetInnerHTML.__html;
}
var Kf = null;
var Yf = "function" == typeof setTimeout ? setTimeout : void 0;
var Xf = "function" == typeof clearTimeout ? clearTimeout : void 0;
var Gf = "function" == typeof Promise ? Promise : void 0;
var Zf = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== Gf ? function(e6) {
  return Gf.resolve(null).then(e6).catch(Jf);
} : Yf;
function Jf(e6) {
  setTimeout(function() {
    throw e6;
  });
}
function ed(e6) {
  return "head" === e6;
}
function nd(e6, n5) {
  var t5 = n5, r6 = 0;
  do {
    var l5 = t5.nextSibling;
    if (e6.removeChild(t5), l5 && 8 === l5.nodeType) if ("/$" === (t5 = l5.data) || "/&" === t5) {
      if (0 === r6) return e6.removeChild(l5), void yp(n5);
      r6--;
    } else if ("$" === t5 || "$?" === t5 || "$~" === t5 || "$!" === t5 || "&" === t5) r6++;
    else if ("html" === t5) dd(e6.ownerDocument.documentElement);
    else if ("head" === t5) {
      dd(t5 = e6.ownerDocument.head);
      for (var a6 = t5.firstChild; a6; ) {
        var o5 = a6.nextSibling, i5 = a6.nodeName;
        a6[Sn] || "SCRIPT" === i5 || "STYLE" === i5 || "LINK" === i5 && "stylesheet" === a6.rel.toLowerCase() || t5.removeChild(a6), a6 = o5;
      }
    } else "body" === t5 && dd(e6.ownerDocument.body);
    t5 = l5;
  } while (t5);
  yp(n5);
}
function td(e6, n5) {
  var t5 = e6;
  e6 = 0;
  do {
    var r6 = t5.nextSibling;
    if (1 === t5.nodeType ? n5 ? (t5._stashedDisplay = t5.style.display, t5.style.display = "none") : (t5.style.display = t5._stashedDisplay || "", "" === t5.getAttribute("style") && t5.removeAttribute("style")) : 3 === t5.nodeType && (n5 ? (t5._stashedText = t5.nodeValue, t5.nodeValue = "") : t5.nodeValue = t5._stashedText || ""), r6 && 8 === r6.nodeType) if ("/$" === (t5 = r6.data)) {
      if (0 === e6) break;
      e6--;
    } else "$" !== t5 && "$?" !== t5 && "$~" !== t5 && "$!" !== t5 || e6++;
    t5 = r6;
  } while (t5);
}
function rd(e6) {
  var n5 = e6.firstChild;
  for (n5 && 10 === n5.nodeType && (n5 = n5.nextSibling); n5; ) {
    var t5 = n5;
    switch (n5 = n5.nextSibling, t5.nodeName) {
      case "HTML":
      case "HEAD":
      case "BODY":
        rd(t5), En(t5);
        continue;
      case "SCRIPT":
      case "STYLE":
        continue;
      case "LINK":
        if ("stylesheet" === t5.rel.toLowerCase()) continue;
    }
    e6.removeChild(t5);
  }
}
function ld(e6, n5) {
  for (; 8 !== e6.nodeType; ) {
    if ((1 !== e6.nodeType || "INPUT" !== e6.nodeName || "hidden" !== e6.type) && !n5) return null;
    if (null === (e6 = id(e6.nextSibling))) return null;
  }
  return e6;
}
function ad(e6) {
  return "$?" === e6.data || "$~" === e6.data;
}
function od(e6) {
  return "$!" === e6.data || "$?" === e6.data && "loading" !== e6.ownerDocument.readyState;
}
function id(e6) {
  for (; null != e6; e6 = e6.nextSibling) {
    var n5 = e6.nodeType;
    if (1 === n5 || 3 === n5) break;
    if (8 === n5) {
      if ("$" === (n5 = e6.data) || "$!" === n5 || "$?" === n5 || "$~" === n5 || "&" === n5 || "F!" === n5 || "F" === n5) break;
      if ("/$" === n5 || "/&" === n5) return null;
    }
  }
  return e6;
}
var ud = null;
function sd(e6) {
  e6 = e6.nextSibling;
  for (var n5 = 0; e6; ) {
    if (8 === e6.nodeType) {
      var t5 = e6.data;
      if ("/$" === t5 || "/&" === t5) {
        if (0 === n5) return id(e6.nextSibling);
        n5--;
      } else "$" !== t5 && "$!" !== t5 && "$?" !== t5 && "$~" !== t5 && "&" !== t5 || n5++;
    }
    e6 = e6.nextSibling;
  }
  return null;
}
function cd(e6) {
  e6 = e6.previousSibling;
  for (var n5 = 0; e6; ) {
    if (8 === e6.nodeType) {
      var t5 = e6.data;
      if ("$" === t5 || "$!" === t5 || "$?" === t5 || "$~" === t5 || "&" === t5) {
        if (0 === n5) return e6;
        n5--;
      } else "/$" !== t5 && "/&" !== t5 || n5++;
    }
    e6 = e6.previousSibling;
  }
  return null;
}
function fd(e6, n5, t5) {
  switch (n5 = Hf(t5), e6) {
    case "html":
      if (!(e6 = n5.documentElement)) throw Error(O3(452));
      return e6;
    case "head":
      if (!(e6 = n5.head)) throw Error(O3(453));
      return e6;
    case "body":
      if (!(e6 = n5.body)) throw Error(O3(454));
      return e6;
    default:
      throw Error(O3(451));
  }
}
function dd(e6) {
  for (var n5 = e6.attributes; n5.length; ) e6.removeAttributeNode(n5[0]);
  En(e6);
}
var pd = /* @__PURE__ */ new Map();
var md = /* @__PURE__ */ new Set();
function hd(e6) {
  return "function" == typeof e6.getRootNode ? e6.getRootNode() : 9 === e6.nodeType ? e6 : e6.ownerDocument;
}
var gd = ue2.d;
ue2.d = {
  f: function() {
    var e6 = gd.f(), n5 = zc();
    return e6 || n5;
  },
  r: function(e6) {
    var n5 = Cn(e6);
    null !== n5 && 5 === n5.tag && "form" === n5.type ? Li(n5) : gd.r(e6);
  },
  D: function(e6) {
    gd.D(e6), yd("dns-prefetch", e6, null);
  },
  C: function(e6, n5) {
    gd.C(e6, n5), yd("preconnect", e6, n5);
  },
  L: function(e6, n5, t5) {
    gd.L(e6, n5, t5);
    var r6 = vd;
    if (r6 && e6 && n5) {
      var l5 = 'link[rel="preload"][as="' + Qn(n5) + '"]';
      "image" === n5 && t5 && t5.imageSrcSet ? (l5 += '[imagesrcset="' + Qn(t5.imageSrcSet) + '"]', "string" == typeof t5.imageSizes && (l5 += '[imagesizes="' + Qn(t5.imageSizes) + '"]')) : l5 += '[href="' + Qn(e6) + '"]';
      var a6 = l5;
      switch (n5) {
        case "style":
          a6 = kd(e6);
          break;
        case "script":
          a6 = Ed(e6);
      }
      pd.has(a6) || (e6 = V2({
        rel: "preload",
        href: "image" === n5 && t5 && t5.imageSrcSet ? void 0 : e6,
        as: n5
      }, t5), pd.set(a6, e6), null !== r6.querySelector(l5) || "style" === n5 && r6.querySelector(wd(a6)) || "script" === n5 && r6.querySelector(xd(a6)) || (Vf(n5 = r6.createElement("link"), "link", e6), Nn(n5), r6.head.appendChild(n5)));
    }
  },
  m: function(e6, n5) {
    gd.m(e6, n5);
    var t5 = vd;
    if (t5 && e6) {
      var r6 = n5 && "string" == typeof n5.as ? n5.as : "script", l5 = 'link[rel="modulepreload"][as="' + Qn(r6) + '"][href="' + Qn(e6) + '"]', a6 = l5;
      switch (r6) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          a6 = Ed(e6);
      }
      if (!pd.has(a6) && (e6 = V2({
        rel: "modulepreload",
        href: e6
      }, n5), pd.set(a6, e6), null === t5.querySelector(l5))) {
        switch (r6) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t5.querySelector(xd(a6))) return;
        }
        Vf(r6 = t5.createElement("link"), "link", e6), Nn(r6), t5.head.appendChild(r6);
      }
    }
  },
  X: function(e6, n5) {
    gd.X(e6, n5);
    var t5 = vd;
    if (t5 && e6) {
      var r6 = Pn(t5).hoistableScripts, l5 = Ed(e6), a6 = r6.get(l5);
      a6 || ((a6 = t5.querySelector(xd(l5))) || (e6 = V2({
        src: e6,
        async: true
      }, n5), (n5 = pd.get(l5)) && Nd(e6, n5), Nn(a6 = t5.createElement("script")), Vf(a6, "link", e6), t5.head.appendChild(a6)), a6 = {
        type: "script",
        instance: a6,
        count: 1,
        state: null
      }, r6.set(l5, a6));
    }
  },
  S: function(e6, n5, t5) {
    gd.S(e6, n5, t5);
    var r6 = vd;
    if (r6 && e6) {
      var l5 = Pn(r6).hoistableStyles, a6 = kd(e6);
      n5 = n5 || "default";
      var o5 = l5.get(a6);
      if (!o5) {
        var i5 = {
          loading: 0,
          preload: null
        };
        if (o5 = r6.querySelector(wd(a6))) i5.loading = 5;
        else {
          e6 = V2({
            rel: "stylesheet",
            href: e6,
            "data-precedence": n5
          }, t5), (t5 = pd.get(a6)) && Pd(e6, t5);
          var u5 = o5 = r6.createElement("link");
          Nn(u5), Vf(u5, "link", e6), u5._p = new Promise(function(e7, n6) {
            u5.onload = e7, u5.onerror = n6;
          }), u5.addEventListener("load", function() {
            i5.loading |= 1;
          }), u5.addEventListener("error", function() {
            i5.loading |= 2;
          }), i5.loading |= 4, zd(o5, n5, r6);
        }
        o5 = {
          type: "stylesheet",
          instance: o5,
          count: 1,
          state: i5
        }, l5.set(a6, o5);
      }
    }
  },
  M: function(e6, n5) {
    gd.M(e6, n5);
    var t5 = vd;
    if (t5 && e6) {
      var r6 = Pn(t5).hoistableScripts, l5 = Ed(e6), a6 = r6.get(l5);
      a6 || ((a6 = t5.querySelector(xd(l5))) || (e6 = V2({
        src: e6,
        async: true,
        type: "module"
      }, n5), (n5 = pd.get(l5)) && Nd(e6, n5), Nn(a6 = t5.createElement("script")), Vf(a6, "link", e6), t5.head.appendChild(a6)), a6 = {
        type: "script",
        instance: a6,
        count: 1,
        state: null
      }, r6.set(l5, a6));
    }
  }
};
var vd = "undefined" == typeof document ? null : document;
function yd(e6, n5, t5) {
  var r6 = vd;
  if (r6 && "string" == typeof n5 && n5) {
    var l5 = Qn(n5);
    l5 = 'link[rel="' + e6 + '"][href="' + l5 + '"]', "string" == typeof t5 && (l5 += '[crossorigin="' + t5 + '"]'), md.has(l5) || (md.add(l5), e6 = {
      rel: e6,
      crossOrigin: t5,
      href: n5
    }, null === r6.querySelector(l5) && (Vf(n5 = r6.createElement("link"), "link", e6), Nn(n5), r6.head.appendChild(n5)));
  }
}
function bd(e6, n5, t5, r6) {
  var l5, a6, o5, i5, u5 = (u5 = be2.current) ? hd(u5) : null;
  if (!u5) throw Error(O3(446));
  switch (e6) {
    case "meta":
    case "title":
      return null;
    case "style":
      return "string" == typeof t5.precedence && "string" == typeof t5.href ? (n5 = kd(t5.href), (r6 = (t5 = Pn(u5).hoistableStyles).get(n5)) || (r6 = {
        type: "style",
        instance: null,
        count: 0,
        state: null
      }, t5.set(n5, r6)), r6) : {
        type: "void",
        instance: null,
        count: 0,
        state: null
      };
    case "link":
      if ("stylesheet" === t5.rel && "string" == typeof t5.href && "string" == typeof t5.precedence) {
        e6 = kd(t5.href);
        var s6 = Pn(u5).hoistableStyles, c5 = s6.get(e6);
        if (c5 || (u5 = u5.ownerDocument || u5, c5 = {
          type: "stylesheet",
          instance: null,
          count: 0,
          state: {
            loading: 0,
            preload: null
          }
        }, s6.set(e6, c5), (s6 = u5.querySelector(wd(e6))) && !s6._p && (c5.instance = s6, c5.state.loading = 5), pd.has(e6) || (t5 = {
          rel: "preload",
          as: "style",
          href: t5.href,
          crossOrigin: t5.crossOrigin,
          integrity: t5.integrity,
          media: t5.media,
          hrefLang: t5.hrefLang,
          referrerPolicy: t5.referrerPolicy
        }, pd.set(e6, t5), s6 || (l5 = u5, a6 = e6, o5 = t5, i5 = c5.state, l5.querySelector('link[rel="preload"][as="style"][' + a6 + "]") ? i5.loading = 1 : (a6 = l5.createElement("link"), i5.preload = a6, a6.addEventListener("load", function() {
          return i5.loading |= 1;
        }), a6.addEventListener("error", function() {
          return i5.loading |= 2;
        }), Vf(a6, "link", o5), Nn(a6), l5.head.appendChild(a6))))), n5 && null === r6) throw Error(O3(528, ""));
        return c5;
      }
      if (n5 && null !== r6) throw Error(O3(529, ""));
      return null;
    case "script":
      return n5 = t5.async, "string" == typeof (t5 = t5.src) && n5 && "function" != typeof n5 && "symbol" != typeof n5 ? (n5 = Ed(t5), (r6 = (t5 = Pn(u5).hoistableScripts).get(n5)) || (r6 = {
        type: "script",
        instance: null,
        count: 0,
        state: null
      }, t5.set(n5, r6)), r6) : {
        type: "void",
        instance: null,
        count: 0,
        state: null
      };
    default:
      throw Error(O3(444, e6));
  }
}
function kd(e6) {
  return 'href="' + Qn(e6) + '"';
}
function wd(e6) {
  return 'link[rel="stylesheet"][' + e6 + "]";
}
function Sd(e6) {
  return V2({}, e6, {
    "data-precedence": e6.precedence,
    precedence: null
  });
}
function Ed(e6) {
  return '[src="' + Qn(e6) + '"]';
}
function xd(e6) {
  return "script[async]" + e6;
}
function Cd(e6, n5, t5) {
  if (n5.count++, null === n5.instance) switch (n5.type) {
    case "style":
      var r6 = e6.querySelector('style[data-href~="' + Qn(t5.href) + '"]');
      if (r6) return n5.instance = r6, Nn(r6), r6;
      var l5 = V2({}, t5, {
        "data-href": t5.href,
        "data-precedence": t5.precedence,
        href: null,
        precedence: null
      });
      return Nn(r6 = (e6.ownerDocument || e6).createElement("style")), Vf(r6, "style", l5), zd(r6, t5.precedence, e6), n5.instance = r6;
    case "stylesheet":
      l5 = kd(t5.href);
      var a6 = e6.querySelector(wd(l5));
      if (a6) return n5.state.loading |= 4, n5.instance = a6, Nn(a6), a6;
      r6 = Sd(t5), (l5 = pd.get(l5)) && Pd(r6, l5), Nn(a6 = (e6.ownerDocument || e6).createElement("link"));
      var o5 = a6;
      return o5._p = new Promise(function(e7, n6) {
        o5.onload = e7, o5.onerror = n6;
      }), Vf(a6, "link", r6), n5.state.loading |= 4, zd(a6, t5.precedence, e6), n5.instance = a6;
    case "script":
      return a6 = Ed(t5.src), (l5 = e6.querySelector(xd(a6))) ? (n5.instance = l5, Nn(l5), l5) : (r6 = t5, (l5 = pd.get(a6)) && Nd(r6 = V2({}, t5), l5), Nn(l5 = (e6 = e6.ownerDocument || e6).createElement("script")), Vf(l5, "link", r6), e6.head.appendChild(l5), n5.instance = l5);
    case "void":
      return null;
    default:
      throw Error(O3(443, n5.type));
  }
  else "stylesheet" === n5.type && !(4 & n5.state.loading) && (r6 = n5.instance, n5.state.loading |= 4, zd(r6, t5.precedence, e6));
  return n5.instance;
}
function zd(e6, n5, t5) {
  for (var r6 = t5.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l5 = r6.length ? r6[r6.length - 1] : null, a6 = l5, o5 = 0; o5 < r6.length; o5++) {
    var i5 = r6[o5];
    if (i5.dataset.precedence === n5) a6 = i5;
    else if (a6 !== l5) break;
  }
  a6 ? a6.parentNode.insertBefore(e6, a6.nextSibling) : (n5 = 9 === t5.nodeType ? t5.head : t5).insertBefore(e6, n5.firstChild);
}
function Pd(e6, n5) {
  null == e6.crossOrigin && (e6.crossOrigin = n5.crossOrigin), null == e6.referrerPolicy && (e6.referrerPolicy = n5.referrerPolicy), null == e6.title && (e6.title = n5.title);
}
function Nd(e6, n5) {
  null == e6.crossOrigin && (e6.crossOrigin = n5.crossOrigin), null == e6.referrerPolicy && (e6.referrerPolicy = n5.referrerPolicy), null == e6.integrity && (e6.integrity = n5.integrity);
}
var Td = null;
function Ld(e6, n5, t5) {
  if (null === Td) {
    var r6 = /* @__PURE__ */ new Map(), l5 = Td = /* @__PURE__ */ new Map();
    l5.set(t5, r6);
  } else (r6 = (l5 = Td).get(t5)) || (r6 = /* @__PURE__ */ new Map(), l5.set(t5, r6));
  if (r6.has(e6)) return r6;
  for (r6.set(e6, null), t5 = t5.getElementsByTagName(e6), l5 = 0; l5 < t5.length; l5++) {
    var a6 = t5[l5];
    if (!(a6[Sn] || a6[hn] || "link" === e6 && "stylesheet" === a6.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== a6.namespaceURI) {
      var o5 = a6.getAttribute(n5) || "";
      o5 = e6 + o5;
      var i5 = r6.get(o5);
      i5 ? i5.push(a6) : r6.set(o5, [
        a6
      ]);
    }
  }
  return r6;
}
function _d(e6, n5, t5) {
  (e6 = e6.ownerDocument || e6).head.insertBefore(t5, "title" === n5 ? e6.querySelector("head > title") : null);
}
function Fd(e6) {
  return !!("stylesheet" !== e6.type || 3 & e6.state.loading);
}
var Od = 0;
function Dd() {
  if (this.count--, 0 === this.count && (0 === this.imgCount || !this.waitingForImages)) {
    if (this.stylesheets) Md(this, this.stylesheets);
    else if (this.unsuspend) {
      var e6 = this.unsuspend;
      this.unsuspend = null, e6();
    }
  }
}
var Ad = null;
function Md(e6, n5) {
  e6.stylesheets = null, null !== e6.unsuspend && (e6.count++, Ad = /* @__PURE__ */ new Map(), n5.forEach(Rd, e6), Ad = null, Dd.call(e6));
}
function Rd(e6, n5) {
  if (!(4 & n5.state.loading)) {
    var t5 = Ad.get(e6);
    if (t5) var r6 = t5.get(null);
    else {
      t5 = /* @__PURE__ */ new Map(), Ad.set(e6, t5);
      for (var l5 = e6.querySelectorAll("link[data-precedence],style[data-precedence]"), a6 = 0; a6 < l5.length; a6++) {
        var o5 = l5[a6];
        "LINK" !== o5.nodeName && "not all" === o5.getAttribute("media") || (t5.set(o5.dataset.precedence, o5), r6 = o5);
      }
      r6 && t5.set(null, r6);
    }
    o5 = (l5 = n5.instance).getAttribute("data-precedence"), (a6 = t5.get(o5) || r6) === r6 && t5.set(null, l5), t5.set(o5, l5), this.count++, r6 = Dd.bind(this), l5.addEventListener("load", r6), l5.addEventListener("error", r6), a6 ? a6.parentNode.insertBefore(l5, a6.nextSibling) : (e6 = 9 === e6.nodeType ? e6.head : e6).insertBefore(l5, e6.firstChild), n5.state.loading |= 4;
  }
}
var Id = {
  $$typeof: K2,
  Provider: null,
  Consumer: null,
  _currentValue: se2,
  _currentValue2: se2,
  _threadCount: 0
};
function Ud(e6, n5, t5, r6, l5, a6, o5, i5, u5) {
  this.tag = 1, this.containerInfo = e6, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ln(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ln(0), this.hiddenUpdates = ln(null), this.identifierPrefix = r6, this.onUncaughtError = l5, this.onCaughtError = a6, this.onRecoverableError = o5, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = u5, this.incompleteTransitions = /* @__PURE__ */ new Map();
}
function Vd(e6, n5, t5, r6, l5, a6, o5, i5, u5, s6, c5, f5) {
  return e6 = new Ud(e6, n5, t5, o5, u5, s6, c5, f5, i5), n5 = 1, true === a6 && (n5 |= 24), a6 = fl(3, null, null, n5), e6.current = a6, a6.stateNode = e6, (n5 = da()).refCount++, e6.pooledCache = n5, n5.refCount++, a6.memoizedState = {
    element: r6,
    isDehydrated: t5,
    cache: n5
  }, Ba(a6), e6;
}
function $d(e6) {
  return e6 ? e6 = sl : sl;
}
function jd(e6, n5, t5, r6, l5, a6) {
  l5 = $d(l5), null === r6.context ? r6.context = l5 : r6.pendingContext = l5, (r6 = Qa(n5)).payload = {
    element: t5
  }, null !== (a6 = void 0 === a6 ? null : a6) && (r6.callback = a6), null !== (t5 = Wa(e6, r6, n5)) && (wc(t5, 0, n5), qa(t5, e6, n5));
}
function Bd(e6, n5) {
  if (null !== (e6 = e6.memoizedState) && null !== e6.dehydrated) {
    var t5 = e6.retryLane;
    e6.retryLane = 0 !== t5 && t5 < n5 ? t5 : n5;
  }
}
function Hd(e6, n5) {
  Bd(e6, n5), (e6 = e6.alternate) && Bd(e6, n5);
}
function Qd(e6) {
  if (13 === e6.tag || 31 === e6.tag) {
    var n5 = ol(e6, 67108864);
    null !== n5 && wc(n5, 0, 67108864), Hd(e6, 67108864);
  }
}
function Wd(e6) {
  if (13 === e6.tag || 31 === e6.tag) {
    var n5 = bc(), t5 = ol(e6, n5 = cn(n5));
    null !== t5 && wc(t5, 0, n5), Hd(e6, n5);
  }
}
var qd = true;
function Kd(e6, n5, t5, r6) {
  var l5 = ie2.T;
  ie2.T = null;
  var a6 = ue2.p;
  try {
    ue2.p = 2, Xd(e6, n5, t5, r6);
  } finally {
    ue2.p = a6, ie2.T = l5;
  }
}
function Yd(e6, n5, t5, r6) {
  var l5 = ie2.T;
  ie2.T = null;
  var a6 = ue2.p;
  try {
    ue2.p = 8, Xd(e6, n5, t5, r6);
  } finally {
    ue2.p = a6, ie2.T = l5;
  }
}
function Xd(e6, n5, t5, r6) {
  if (qd) {
    var l5 = Gd(r6);
    if (null === l5) Tf(e6, n5, r6, Zd, t5), sp(e6, r6);
    else if (function(e7, n6, t6, r7, l6) {
      switch (n6) {
        case "focusin":
          return tp = cp(tp, e7, n6, t6, r7, l6), true;
        case "dragenter":
          return rp = cp(rp, e7, n6, t6, r7, l6), true;
        case "mouseover":
          return lp = cp(lp, e7, n6, t6, r7, l6), true;
        case "pointerover":
          var a7 = l6.pointerId;
          return ap.set(a7, cp(ap.get(a7) || null, e7, n6, t6, r7, l6)), true;
        case "gotpointercapture":
          return a7 = l6.pointerId, op.set(a7, cp(op.get(a7) || null, e7, n6, t6, r7, l6)), true;
      }
      return false;
    }(l5, e6, n5, t5, r6)) r6.stopPropagation();
    else if (sp(e6, r6), 4 & n5 && -1 < up.indexOf(e6)) {
      for (; null !== l5; ) {
        var a6 = Cn(l5);
        if (null !== a6) switch (a6.tag) {
          case 3:
            if ((a6 = a6.stateNode).current.memoizedState.isDehydrated) {
              var o5 = Je(a6.pendingLanes);
              if (0 !== o5) {
                var i5 = a6;
                for (i5.pendingLanes |= 2, i5.entangledLanes |= 2; o5; ) {
                  var u5 = 1 << 31 - qe2(o5);
                  i5.entanglements[1] |= u5, o5 &= ~u5;
                }
                sf(a6), !(6 & Vs) && (ic = Ae2() + 500, cf(0, false));
              }
            }
            break;
          case 31:
          case 13:
            null !== (i5 = ol(a6, 2)) && wc(i5, 0, 2), zc(), Hd(a6, 2);
        }
        if (null === (a6 = Gd(r6)) && Tf(e6, n5, r6, Zd, t5), a6 === l5) break;
        l5 = a6;
      }
      null !== l5 && r6.stopPropagation();
    } else Tf(e6, n5, r6, null, t5);
  }
}
function Gd(e6) {
  return Jd(e6 = ut(e6));
}
var Zd = null;
function Jd(e6) {
  if (Zd = null, null !== (e6 = xn(e6))) {
    var n5 = A2(e6);
    if (null === n5) e6 = null;
    else {
      var t5 = n5.tag;
      if (13 === t5) {
        if (null !== (e6 = M2(n5))) return e6;
        e6 = null;
      } else if (31 === t5) {
        if (null !== (e6 = R3(n5))) return e6;
        e6 = null;
      } else if (3 === t5) {
        if (n5.stateNode.current.memoizedState.isDehydrated) return 3 === n5.tag ? n5.stateNode.containerInfo : null;
        e6 = null;
      } else n5 !== e6 && (e6 = null);
    }
  }
  return Zd = e6, null;
}
function ep(e6) {
  switch (e6) {
    case "beforetoggle":
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "toggle":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 2;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 8;
    case "message":
      switch (Me2()) {
        case Re2:
          return 2;
        case Ie2:
          return 8;
        case Ue2:
        case Ve2:
          return 32;
        case $e2:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var np = false;
var tp = null;
var rp = null;
var lp = null;
var ap = /* @__PURE__ */ new Map();
var op = /* @__PURE__ */ new Map();
var ip = [];
var up = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
function sp(e6, n5) {
  switch (e6) {
    case "focusin":
    case "focusout":
      tp = null;
      break;
    case "dragenter":
    case "dragleave":
      rp = null;
      break;
    case "mouseover":
    case "mouseout":
      lp = null;
      break;
    case "pointerover":
    case "pointerout":
      ap.delete(n5.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      op.delete(n5.pointerId);
  }
}
function cp(e6, n5, t5, r6, l5, a6) {
  return null === e6 || e6.nativeEvent !== a6 ? (e6 = {
    blockedOn: n5,
    domEventName: t5,
    eventSystemFlags: r6,
    nativeEvent: a6,
    targetContainers: [
      l5
    ]
  }, null !== n5 && (null !== (n5 = Cn(n5)) && Qd(n5)), e6) : (e6.eventSystemFlags |= r6, n5 = e6.targetContainers, null !== l5 && -1 === n5.indexOf(l5) && n5.push(l5), e6);
}
function fp(e6) {
  var n5 = xn(e6.target);
  if (null !== n5) {
    var t5 = A2(n5);
    if (null !== t5) {
      if (13 === (n5 = t5.tag)) {
        if (null !== (n5 = M2(t5))) return e6.blockedOn = n5, void pn(e6.priority, function() {
          Wd(t5);
        });
      } else if (31 === n5) {
        if (null !== (n5 = R3(t5))) return e6.blockedOn = n5, void pn(e6.priority, function() {
          Wd(t5);
        });
      } else if (3 === n5 && t5.stateNode.current.memoizedState.isDehydrated) return void (e6.blockedOn = 3 === t5.tag ? t5.stateNode.containerInfo : null);
    }
  }
  e6.blockedOn = null;
}
function dp(e6) {
  if (null !== e6.blockedOn) return false;
  for (var n5 = e6.targetContainers; 0 < n5.length; ) {
    var t5 = Gd(e6.nativeEvent);
    if (null !== t5) return null !== (n5 = Cn(t5)) && Qd(n5), e6.blockedOn = t5, false;
    var r6 = new (t5 = e6.nativeEvent).constructor(t5.type, t5);
    it = r6, t5.target.dispatchEvent(r6), it = null, n5.shift();
  }
  return true;
}
function pp(e6, n5, t5) {
  dp(e6) && t5.delete(n5);
}
function mp() {
  np = false, null !== tp && dp(tp) && (tp = null), null !== rp && dp(rp) && (rp = null), null !== lp && dp(lp) && (lp = null), ap.forEach(pp), op.forEach(pp);
}
function hp(e6, n5) {
  e6.blockedOn === n5 && (e6.blockedOn = null, np || (np = true, L2.unstable_scheduleCallback(L2.unstable_NormalPriority, mp)));
}
var gp = null;
function vp(e6) {
  gp !== e6 && (gp = e6, L2.unstable_scheduleCallback(L2.unstable_NormalPriority, function() {
    gp === e6 && (gp = null);
    for (var n5 = 0; n5 < e6.length; n5 += 3) {
      var t5 = e6[n5], r6 = e6[n5 + 1], l5 = e6[n5 + 2];
      if ("function" != typeof r6) {
        if (null === Jd(r6 || t5)) continue;
        break;
      }
      var a6 = Cn(t5);
      null !== a6 && (e6.splice(n5, 3), n5 -= 3, Ni(a6, {
        pending: true,
        data: l5,
        method: t5.method,
        action: r6
      }, r6, l5));
    }
  }));
}
function yp(e6) {
  function n5(n6) {
    return hp(n6, e6);
  }
  null !== tp && hp(tp, e6), null !== rp && hp(rp, e6), null !== lp && hp(lp, e6), ap.forEach(n5), op.forEach(n5);
  for (var t5 = 0; t5 < ip.length; t5++) {
    var r6 = ip[t5];
    r6.blockedOn === e6 && (r6.blockedOn = null);
  }
  for (; 0 < ip.length && null === (t5 = ip[0]).blockedOn; ) fp(t5), null === t5.blockedOn && ip.shift();
  if (null != (t5 = (e6.ownerDocument || e6).$$reactFormReplay)) for (r6 = 0; r6 < t5.length; r6 += 3) {
    var l5 = t5[r6], a6 = t5[r6 + 1], o5 = l5[gn] || null;
    if ("function" == typeof a6) o5 || vp(t5);
    else if (o5) {
      var i5 = null;
      if (a6 && a6.hasAttribute("formAction")) {
        if (l5 = a6, o5 = a6[gn] || null) i5 = o5.formAction;
        else if (null !== Jd(l5)) continue;
      } else i5 = o5.action;
      "function" == typeof i5 ? t5[r6 + 1] = i5 : (t5.splice(r6, 3), r6 -= 3), vp(t5);
    }
  }
}
function bp() {
  function e6(e7) {
    e7.canIntercept && "react-transition" === e7.info && e7.intercept({
      handler: function() {
        return new Promise(function(e8) {
          return l5 = e8;
        });
      },
      focusReset: "manual",
      scroll: "manual"
    });
  }
  function n5() {
    null !== l5 && (l5(), l5 = null), r6 || setTimeout(t5, 20);
  }
  function t5() {
    if (!r6 && !navigation.transition) {
      var e7 = navigation.currentEntry;
      e7 && null != e7.url && navigation.navigate(e7.url, {
        state: e7.getState(),
        info: "react-transition",
        history: "replace"
      });
    }
  }
  if ("object" == typeof navigation) {
    var r6 = false, l5 = null;
    return navigation.addEventListener("navigate", e6), navigation.addEventListener("navigatesuccess", n5), navigation.addEventListener("navigateerror", n5), setTimeout(t5, 100), function() {
      r6 = true, navigation.removeEventListener("navigate", e6), navigation.removeEventListener("navigatesuccess", n5), navigation.removeEventListener("navigateerror", n5), null !== l5 && (l5(), l5 = null);
    };
  }
}
function kp(e6) {
  this._internalRoot = e6;
}
function wp(e6) {
  this._internalRoot = e6;
}
wp.prototype.render = kp.prototype.render = function(e6) {
  var n5 = this._internalRoot;
  if (null === n5) throw Error(O3(409));
  jd(n5.current, bc(), e6, n5, null, null);
}, wp.prototype.unmount = kp.prototype.unmount = function() {
  var e6 = this._internalRoot;
  if (null !== e6) {
    this._internalRoot = null;
    var n5 = e6.containerInfo;
    jd(e6.current, 2, null, e6, null, null), zc(), n5[vn] = null;
  }
}, wp.prototype.unstable_scheduleHydration = function(e6) {
  if (e6) {
    var n5 = dn();
    e6 = {
      blockedOn: null,
      target: e6,
      priority: n5
    };
    for (var t5 = 0; t5 < ip.length && 0 !== n5 && n5 < ip[t5].priority; t5++) ;
    ip.splice(t5, 0, e6), 0 === t5 && fp(e6);
  }
};
var Sp = _4.version;
if ("19.2.4" !== Sp) throw Error(O3(527, Sp, "19.2.4"));
ue2.findDOMNode = function(e6) {
  var n5 = e6._reactInternals;
  if (void 0 === n5) {
    if ("function" == typeof e6.render) throw Error(O3(188));
    throw e6 = Object.keys(e6).join(","), Error(O3(268, e6));
  }
  return e6 = function(e7) {
    var n6 = e7.alternate;
    if (!n6) {
      if (null === (n6 = A2(e7))) throw Error(O3(188));
      return n6 !== e7 ? null : e7;
    }
    for (var t5 = e7, r6 = n6; ; ) {
      var l5 = t5.return;
      if (null === l5) break;
      var a6 = l5.alternate;
      if (null === a6) {
        if (null !== (r6 = l5.return)) {
          t5 = r6;
          continue;
        }
        break;
      }
      if (l5.child === a6.child) {
        for (a6 = l5.child; a6; ) {
          if (a6 === t5) return I2(l5), e7;
          if (a6 === r6) return I2(l5), n6;
          a6 = a6.sibling;
        }
        throw Error(O3(188));
      }
      if (t5.return !== r6.return) t5 = l5, r6 = a6;
      else {
        for (var o5 = false, i5 = l5.child; i5; ) {
          if (i5 === t5) {
            o5 = true, t5 = l5, r6 = a6;
            break;
          }
          if (i5 === r6) {
            o5 = true, r6 = l5, t5 = a6;
            break;
          }
          i5 = i5.sibling;
        }
        if (!o5) {
          for (i5 = a6.child; i5; ) {
            if (i5 === t5) {
              o5 = true, t5 = a6, r6 = l5;
              break;
            }
            if (i5 === r6) {
              o5 = true, r6 = a6, t5 = l5;
              break;
            }
            i5 = i5.sibling;
          }
          if (!o5) throw Error(O3(189));
        }
      }
      if (t5.alternate !== r6) throw Error(O3(190));
    }
    if (3 !== t5.tag) throw Error(O3(188));
    return t5.stateNode.current === t5 ? e7 : n6;
  }(n5), e6 = null === (e6 = null !== e6 ? U2(e6) : null) ? null : e6.stateNode;
};
var Ep = {
  bundleType: 0,
  version: "19.2.4",
  rendererPackageName: "react-dom",
  currentDispatcherRef: ie2,
  reconcilerVersion: "19.2.4"
};
if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  xp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xp.isDisabled && xp.supportsFiber) try {
    He2 = xp.inject(Ep), Qe = xp;
  } catch (e6) {
  }
}
var xp;
T3.createRoot = function(e6, n5) {
  if (!D2(e6)) throw Error(O3(299));
  var t5 = false, r6 = "", l5 = Gi, a6 = Zi, o5 = Ji;
  return null != n5 && (true === n5.unstable_strictMode && (t5 = true), void 0 !== n5.identifierPrefix && (r6 = n5.identifierPrefix), void 0 !== n5.onUncaughtError && (l5 = n5.onUncaughtError), void 0 !== n5.onCaughtError && (a6 = n5.onCaughtError), void 0 !== n5.onRecoverableError && (o5 = n5.onRecoverableError)), n5 = Vd(e6, 1, false, null, 0, t5, r6, null, l5, a6, o5, bp), e6[vn] = n5.current, Pf(e6), new kp(n5);
}, T3.hydrateRoot = function(e6, n5, t5) {
  if (!D2(e6)) throw Error(O3(299));
  var r6 = false, l5 = "", a6 = Gi, o5 = Zi, i5 = Ji, u5 = null;
  return null != t5 && (true === t5.unstable_strictMode && (r6 = true), void 0 !== t5.identifierPrefix && (l5 = t5.identifierPrefix), void 0 !== t5.onUncaughtError && (a6 = t5.onUncaughtError), void 0 !== t5.onCaughtError && (o5 = t5.onCaughtError), void 0 !== t5.onRecoverableError && (i5 = t5.onRecoverableError), void 0 !== t5.formState && (u5 = t5.formState)), (n5 = Vd(e6, 1, true, n5, 0, r6, l5, u5, a6, o5, i5, bp)).context = $d(null), t5 = n5.current, (l5 = Qa(r6 = cn(r6 = bc()))).callback = null, Wa(t5, l5, r6), t5 = r6, n5.current.lanes = t5, an(n5, t5), sf(n5), e6[vn] = n5.current, Pf(e6), new wp(n5);
}, T3.version = "19.2.4", function e4() {
  if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e4);
  } catch (e6) {
    console.error(e6);
  }
}(), r4.exports = T3;
var Cp = r4.exports;
var zp = r4.exports.createRoot;
var Pp = r4.exports.hydrateRoot;
var Np = r4.exports.version;

// deno:https://cdn.jsdelivr.net/npm/zustand@5.0.11/vanilla/+esm
var t4 = (t5) => {
  let e6;
  const n5 = /* @__PURE__ */ new Set(), o5 = (t6, o6) => {
    const c6 = "function" == typeof t6 ? t6(e6) : t6;
    if (!Object.is(c6, e6)) {
      const t7 = e6;
      e6 = (null != o6 ? o6 : "object" != typeof c6 || null === c6) ? c6 : Object.assign({}, e6, c6), n5.forEach((n6) => n6(e6, t7));
    }
  }, c5 = () => e6, l5 = {
    setState: o5,
    getState: c5,
    getInitialState: () => s6,
    subscribe: (t6) => (n5.add(t6), () => n5.delete(t6))
  }, s6 = e6 = t5(o5, c5, l5);
  return l5;
};
var e5 = (e6) => e6 ? t4(e6) : t4;

// deno:https://cdn.jsdelivr.net/npm/zustand@5.0.11/react/+esm
var n4 = (t5) => t5;
function a5(e6, a6 = n4) {
  const s6 = se.useSyncExternalStore(e6.subscribe, se.useCallback(() => a6(e6.getState()), [
    e6,
    a6
  ]), se.useCallback(() => a6(e6.getInitialState()), [
    e6,
    a6
  ]));
  return se.useDebugValue(s6), s6;
}
var s5 = (t5) => {
  const n5 = e5(t5), s6 = (t6) => a5(n5, t6);
  return Object.assign(s6, n5), s6;
};
var r5 = (t5) => t5 ? s5(t5) : s5;
export {
  Ee as createElement,
  zp as createRoot,
  Ae as useCallback,
  Ie as useEffect,
  Fe as useRef,
  Ge as useState,
  r5 as zustandCreate
};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
