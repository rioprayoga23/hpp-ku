var Og = (l) => {
  throw TypeError(l);
};
var _g = (l, r, o) => r.has(l) || Og("Cannot " + o);
var Mt = (l, r, o) => (
    _g(l, r, "read from private field"),
    o ? o.call(l) : r.get(l)
  ),
  Dg = (l, r, o) =>
    r.has(l)
      ? Og("Cannot add the same private member more than once")
      : r instanceof WeakSet
        ? r.add(l)
        : r.set(l, o),
  Md = (l, r, o, s) => (
    _g(l, r, "write to private field"),
    s ? s.call(l, o) : r.set(l, o),
    o
  );
function pC(l, r) {
  for (var o = 0; o < r.length; o++) {
    const s = r[o];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const f in s)
        if (f !== "default" && !(f in l)) {
          const u = Object.getOwnPropertyDescriptor(s, f);
          u &&
            Object.defineProperty(
              l,
              f,
              u.get ? u : { enumerable: !0, get: () => s[f] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(l, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) s(f);
  new MutationObserver((f) => {
    for (const u of f)
      if (u.type === "childList")
        for (const d of u.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(f) {
    const u = {};
    return (
      f.integrity && (u.integrity = f.integrity),
      f.referrerPolicy && (u.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (u.credentials = "omit")
          : (u.credentials = "same-origin"),
      u
    );
  }
  function s(f) {
    if (f.ep) return;
    f.ep = !0;
    const u = o(f);
    fetch(f.href, u);
  }
})();
function ym(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var jd = { exports: {} },
  So = {};
var Mg;
function vC() {
  if (Mg) return So;
  Mg = 1;
  var l = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function o(s, f, u) {
    var d = null;
    if (
      (u !== void 0 && (d = "" + u),
      f.key !== void 0 && (d = "" + f.key),
      "key" in f)
    ) {
      u = {};
      for (var v in f) v !== "key" && (u[v] = f[v]);
    } else u = f;
    return (
      (f = u.ref),
      { $$typeof: l, type: s, key: d, ref: f !== void 0 ? f : null, props: u }
    );
  }
  return ((So.Fragment = r), (So.jsx = o), (So.jsxs = o), So);
}
var jg;
function gC() {
  return (jg || ((jg = 1), (jd.exports = vC())), jd.exports);
}
var S = gC(),
  zd = { exports: {} },
  xe = {};
var zg;
function yC() {
  if (zg) return xe;
  zg = 1;
  var l = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    v = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    b = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    h = Symbol.for("react.activity"),
    x = Symbol.for("react.view_transition"),
    E = Symbol.iterator;
  function w(O) {
    return O === null || typeof O != "object"
      ? null
      : ((O = (E && O[E]) || O["@@iterator"]),
        typeof O == "function" ? O : null);
  }
  var T = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    N = Object.assign,
    R = {};
  function M(O, q, F) {
    ((this.props = O),
      (this.context = q),
      (this.refs = R),
      (this.updater = F || T));
  }
  ((M.prototype.isReactComponent = {}),
    (M.prototype.setState = function (O, q) {
      if (typeof O != "object" && typeof O != "function" && O != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, O, q, "setState");
    }),
    (M.prototype.forceUpdate = function (O) {
      this.updater.enqueueForceUpdate(this, O, "forceUpdate");
    }));
  function _() {}
  _.prototype = M.prototype;
  function j(O, q, F) {
    ((this.props = O),
      (this.context = q),
      (this.refs = R),
      (this.updater = F || T));
  }
  var G = (j.prototype = new _());
  ((G.constructor = j), N(G, M.prototype), (G.isPureReactComponent = !0));
  var P = Array.isArray;
  function U() {}
  var Q = { H: null, A: null, T: null, S: null },
    ie = Object.prototype.hasOwnProperty;
  function W(O, q, F) {
    var ne = F.ref;
    return {
      $$typeof: l,
      type: O,
      key: q,
      ref: ne !== void 0 ? ne : null,
      props: F,
    };
  }
  function re(O, q) {
    return W(O.type, q, O.props);
  }
  function X(O) {
    return typeof O == "object" && O !== null && O.$$typeof === l;
  }
  function oe(O) {
    var q = { "=": "=0", ":": "=2" };
    return (
      "$" +
      O.replace(/[=:]/g, function (F) {
        return q[F];
      })
    );
  }
  var fe = /\/+/g;
  function pe(O, q) {
    return typeof O == "object" && O !== null && O.key != null
      ? oe("" + O.key)
      : q.toString(36);
  }
  function k(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (
          (typeof O.status == "string"
            ? O.then(U, U)
            : ((O.status = "pending"),
              O.then(
                function (q) {
                  O.status === "pending" &&
                    ((O.status = "fulfilled"), (O.value = q));
                },
                function (q) {
                  O.status === "pending" &&
                    ((O.status = "rejected"), (O.reason = q));
                }
              )),
          O.status)
        ) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function te(O, q, F, ne, ge) {
    var ce = typeof O;
    (ce === "undefined" || ce === "boolean") && (O = null);
    var ee = !1;
    if (O === null) ee = !0;
    else
      switch (ce) {
        case "bigint":
        case "string":
        case "number":
          ee = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case l:
            case r:
              ee = !0;
              break;
            case y:
              return ((ee = O._init), te(ee(O._payload), q, F, ne, ge));
          }
      }
    if (ee)
      return (
        (ge = ge(O)),
        (ee = ne === "" ? "." + pe(O, 0) : ne),
        P(ge)
          ? ((F = ""),
            ee != null && (F = ee.replace(fe, "$&/") + "/"),
            te(ge, q, F, "", function (ye) {
              return ye;
            }))
          : ge != null &&
            (X(ge) &&
              (ge = re(
                ge,
                F +
                  (ge.key == null || (O && O.key === ge.key)
                    ? ""
                    : ("" + ge.key).replace(fe, "$&/") + "/") +
                  ee
              )),
            q.push(ge)),
        1
      );
    ee = 0;
    var le = ne === "" ? "." : ne + ":";
    if (P(O))
      for (var ue = 0; ue < O.length; ue++)
        ((ne = O[ue]), (ce = le + pe(ne, ue)), (ee += te(ne, q, F, ce, ge)));
    else if (((ue = w(O)), typeof ue == "function"))
      for (O = ue.call(O), ue = 0; !(ne = O.next()).done;)
        ((ne = ne.value),
          (ce = le + pe(ne, ue++)),
          (ee += te(ne, q, F, ce, ge)));
    else if (ce === "object") {
      if (typeof O.then == "function") return te(k(O), q, F, ne, ge);
      throw (
        (q = String(O)),
        Error(
          "Objects are not valid as a React child (found: " +
            (q === "[object Object]"
              ? "object with keys {" + Object.keys(O).join(", ") + "}"
              : q) +
            "). If you meant to render a collection of children, use an array instead."
        )
      );
    }
    return ee;
  }
  function K(O, q, F) {
    if (O == null) return O;
    var ne = [],
      ge = 0;
    return (
      te(O, ne, "", "", function (ce) {
        return q.call(F, ce, ge++);
      }),
      ne
    );
  }
  function ae(O) {
    if (O._status === -1) {
      var q = O._result,
        F = q();
      (F.then(
        function (ne) {
          (O._status === 0 || O._status === -1) &&
            ((O._status = 1),
            (O._result = ne),
            F.status === void 0 && ((F.status = "fulfilled"), (F.value = ne)));
        },
        function (ne) {
          (O._status === 0 || O._status === -1) &&
            ((O._status = 2),
            (O._result = ne),
            F.status === void 0 && ((F.status = "rejected"), (F.reason = ne)));
        }
      ),
        O._status === -1 && ((O._status = 0), (O._result = F)));
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var $ =
    typeof reportError == "function"
      ? reportError
      : function (O) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var q = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof O == "object" &&
                O !== null &&
                typeof O.message == "string"
                  ? String(O.message)
                  : String(O),
              error: O,
            });
            if (!window.dispatchEvent(q)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", O);
            return;
          }
          console.error(O);
        };
  function me(O) {
    var q = Q.T,
      F = {};
    ((F.types = q !== null ? q.types : null), (Q.T = F));
    try {
      var ne = O(),
        ge = Q.S;
      (ge !== null && ge(F, ne),
        typeof ne == "object" &&
          ne !== null &&
          typeof ne.then == "function" &&
          ne.then(U, $));
    } catch (ce) {
      $(ce);
    } finally {
      (q !== null && F.types !== null && (q.types = F.types), (Q.T = q));
    }
  }
  function Ce(O) {
    var q = Q.T;
    if (q !== null) {
      var F = q.types;
      F === null ? (q.types = [O]) : F.indexOf(O) === -1 && F.push(O);
    } else me(Ce.bind(null, O));
  }
  var Ve = {
    map: K,
    forEach: function (O, q, F) {
      K(
        O,
        function () {
          q.apply(this, arguments);
        },
        F
      );
    },
    count: function (O) {
      var q = 0;
      return (
        K(O, function () {
          q++;
        }),
        q
      );
    },
    toArray: function (O) {
      return (
        K(O, function (q) {
          return q;
        }) || []
      );
    },
    only: function (O) {
      if (!X(O))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return O;
    },
  };
  return (
    (xe.Activity = h),
    (xe.Children = Ve),
    (xe.Component = M),
    (xe.Fragment = o),
    (xe.Profiler = f),
    (xe.PureComponent = j),
    (xe.StrictMode = s),
    (xe.Suspense = g),
    (xe.ViewTransition = x),
    (xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q),
    (xe.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (O) {
        return Q.H.useMemoCache(O);
      },
    }),
    (xe.addTransitionType = Ce),
    (xe.cache = function (O) {
      return function () {
        return O.apply(null, arguments);
      };
    }),
    (xe.cacheSignal = function () {
      return null;
    }),
    (xe.cloneElement = function (O, q, F) {
      if (O == null)
        throw Error(
          "The argument must be a React element, but you passed " + O + "."
        );
      var ne = N({}, O.props),
        ge = O.key;
      if (q != null)
        for (ce in (q.key !== void 0 && (ge = "" + q.key), q))
          !ie.call(q, ce) ||
            ce === "key" ||
            ce === "__self" ||
            ce === "__source" ||
            (ce === "ref" && q.ref === void 0) ||
            (ne[ce] = q[ce]);
      var ce = arguments.length - 2;
      if (ce === 1) ne.children = F;
      else if (1 < ce) {
        for (var ee = Array(ce), le = 0; le < ce; le++)
          ee[le] = arguments[le + 2];
        ne.children = ee;
      }
      return W(O.type, ge, ne);
    }),
    (xe.createContext = function (O) {
      return (
        (O = {
          $$typeof: d,
          _currentValue: O,
          _currentValue2: O,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (O.Provider = O),
        (O.Consumer = { $$typeof: u, _context: O }),
        O
      );
    }),
    (xe.createElement = function (O, q, F) {
      var ne,
        ge = {},
        ce = null;
      if (q != null)
        for (ne in (q.key !== void 0 && (ce = "" + q.key), q))
          ie.call(q, ne) &&
            ne !== "key" &&
            ne !== "__self" &&
            ne !== "__source" &&
            (ge[ne] = q[ne]);
      var ee = arguments.length - 2;
      if (ee === 1) ge.children = F;
      else if (1 < ee) {
        for (var le = Array(ee), ue = 0; ue < ee; ue++)
          le[ue] = arguments[ue + 2];
        ge.children = le;
      }
      if (O && O.defaultProps)
        for (ne in ((ee = O.defaultProps), ee))
          ge[ne] === void 0 && (ge[ne] = ee[ne]);
      return W(O, ce, ge);
    }),
    (xe.createRef = function () {
      return { current: null };
    }),
    (xe.forwardRef = function (O) {
      return { $$typeof: v, render: O };
    }),
    (xe.isValidElement = X),
    (xe.lazy = function (O) {
      return { $$typeof: y, _payload: { _status: -1, _result: O }, _init: ae };
    }),
    (xe.memo = function (O, q) {
      return { $$typeof: b, type: O, compare: q === void 0 ? null : q };
    }),
    (xe.startTransition = me),
    (xe.unstable_useCacheRefresh = function () {
      return Q.H.useCacheRefresh();
    }),
    (xe.use = function (O) {
      return Q.H.use(O);
    }),
    (xe.useActionState = function (O, q, F) {
      return Q.H.useActionState(O, q, F);
    }),
    (xe.useCallback = function (O, q) {
      return Q.H.useCallback(O, q);
    }),
    (xe.useContext = function (O) {
      return Q.H.useContext(O);
    }),
    (xe.useDebugValue = function () {}),
    (xe.useDeferredValue = function (O, q) {
      return Q.H.useDeferredValue(O, q);
    }),
    (xe.useEffect = function (O, q) {
      return Q.H.useEffect(O, q);
    }),
    (xe.useEffectEvent = function (O) {
      return Q.H.useEffectEvent(O);
    }),
    (xe.useId = function () {
      return Q.H.useId();
    }),
    (xe.useImperativeHandle = function (O, q, F) {
      return Q.H.useImperativeHandle(O, q, F);
    }),
    (xe.useInsertionEffect = function (O, q) {
      return Q.H.useInsertionEffect(O, q);
    }),
    (xe.useLayoutEffect = function (O, q) {
      return Q.H.useLayoutEffect(O, q);
    }),
    (xe.useMemo = function (O, q) {
      return Q.H.useMemo(O, q);
    }),
    (xe.useOptimistic = function (O, q) {
      return Q.H.useOptimistic(O, q);
    }),
    (xe.useReducer = function (O, q, F) {
      return Q.H.useReducer(O, q, F);
    }),
    (xe.useRef = function (O) {
      return Q.H.useRef(O);
    }),
    (xe.useState = function (O) {
      return Q.H.useState(O);
    }),
    (xe.useSyncExternalStore = function (O, q, F) {
      return Q.H.useSyncExternalStore(O, q, F);
    }),
    (xe.useTransition = function () {
      return Q.H.useTransition();
    }),
    (xe.version = "19.3.1"),
    xe
  );
}
var Hg;
function bm() {
  return (Hg || ((Hg = 1), (zd.exports = yC())), zd.exports);
}
var m = bm();
const J = ym(m),
  hi = pC({ __proto__: null, default: J }, [m]);
var Hd = { exports: {} },
  xo = {},
  Ld = { exports: {} },
  Bd = {};
var Lg;
function bC() {
  return (
    Lg ||
      ((Lg = 1),
      (function (l) {
        function r(k, te) {
          var K = k.length;
          k.push(te);
          e: for (; 0 < K;) {
            var ae = (K - 1) >>> 1,
              $ = k[ae];
            if (0 < f($, te)) ((k[ae] = te), (k[K] = $), (K = ae));
            else break e;
          }
        }
        function o(k) {
          return k.length === 0 ? null : k[0];
        }
        function s(k) {
          if (k.length === 0) return null;
          var te = k[0],
            K = k.pop();
          if (K !== te) {
            k[0] = K;
            e: for (var ae = 0, $ = k.length, me = $ >>> 1; ae < me;) {
              var Ce = 2 * (ae + 1) - 1,
                Ve = k[Ce],
                O = Ce + 1,
                q = k[O];
              if (0 > f(Ve, K))
                O < $ && 0 > f(q, Ve)
                  ? ((k[ae] = q), (k[O] = K), (ae = O))
                  : ((k[ae] = Ve), (k[Ce] = K), (ae = Ce));
              else if (O < $ && 0 > f(q, K))
                ((k[ae] = q), (k[O] = K), (ae = O));
              else break e;
            }
          }
          return te;
        }
        function f(k, te) {
          var K = k.sortIndex - te.sortIndex;
          return K !== 0 ? K : k.id - te.id;
        }
        if (
          ((l.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          l.unstable_now = function () {
            return u.now();
          };
        } else {
          var d = Date,
            v = d.now();
          l.unstable_now = function () {
            return d.now() - v;
          };
        }
        var g = [],
          b = [],
          y = 1,
          h = null,
          x = 3,
          E = !1,
          w = !1,
          T = !1,
          N = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          M = typeof clearTimeout == "function" ? clearTimeout : null,
          _ = typeof setImmediate < "u" ? setImmediate : null;
        function j(k) {
          for (var te = o(b); te !== null;) {
            if (te.callback === null) s(b);
            else if (te.startTime <= k)
              (s(b), (te.sortIndex = te.expirationTime), r(g, te));
            else break;
            te = o(b);
          }
        }
        function G(k) {
          if (((T = !1), j(k), !w))
            if (o(g) !== null) ((w = !0), P || ((P = !0), X()));
            else {
              var te = o(b);
              te !== null && pe(G, te.startTime - k);
            }
        }
        var P = !1,
          U = -1,
          Q = 5,
          ie = -1;
        function W() {
          return N ? !0 : !(l.unstable_now() - ie < Q);
        }
        function re() {
          if (((N = !1), P)) {
            var k = l.unstable_now();
            ie = k;
            var te = !0;
            try {
              e: {
                ((w = !1), T && ((T = !1), M(U), (U = -1)), (E = !0));
                var K = x;
                try {
                  t: {
                    for (
                      j(k), h = o(g);
                      h !== null && !(h.expirationTime > k && W());
                    ) {
                      var ae = h.callback;
                      if (typeof ae == "function") {
                        ((h.callback = null), (x = h.priorityLevel));
                        var $ = ae(h.expirationTime <= k);
                        if (((k = l.unstable_now()), typeof $ == "function")) {
                          ((h.callback = $), j(k), (te = !0));
                          break t;
                        }
                        (h === o(g) && s(g), j(k));
                      } else s(g);
                      h = o(g);
                    }
                    if (h !== null) te = !0;
                    else {
                      var me = o(b);
                      (me !== null && pe(G, me.startTime - k), (te = !1));
                    }
                  }
                  break e;
                } finally {
                  ((h = null), (x = K), (E = !1));
                }
                te = void 0;
              }
            } finally {
              te ? X() : (P = !1);
            }
          }
        }
        var X;
        if (typeof _ == "function")
          X = function () {
            _(re);
          };
        else if (typeof MessageChannel < "u") {
          var oe = new MessageChannel(),
            fe = oe.port2;
          ((oe.port1.onmessage = re),
            (X = function () {
              fe.postMessage(null);
            }));
        } else
          X = function () {
            R(re, 0);
          };
        function pe(k, te) {
          U = R(function () {
            k(l.unstable_now());
          }, te);
        }
        ((l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (l.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Q = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (l.unstable_next = function (k) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var te = 3;
                break;
              default:
                te = x;
            }
            var K = x;
            x = te;
            try {
              return k();
            } finally {
              x = K;
            }
          }),
          (l.unstable_requestPaint = function () {
            N = !0;
          }),
          (l.unstable_runWithPriority = function (k, te) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var K = x;
            x = k;
            try {
              return te();
            } finally {
              x = K;
            }
          }),
          (l.unstable_scheduleCallback = function (k, te, K) {
            var ae = l.unstable_now();
            switch (
              (typeof K == "object" && K !== null
                ? ((K = K.delay),
                  (K = typeof K == "number" && 0 < K ? ae + K : ae))
                : (K = ae),
              k)
            ) {
              case 1:
                var $ = -1;
                break;
              case 2:
                $ = 250;
                break;
              case 5:
                $ = 1073741823;
                break;
              case 4:
                $ = 1e4;
                break;
              default:
                $ = 5e3;
            }
            return (
              ($ = K + $),
              (k = {
                id: y++,
                callback: te,
                priorityLevel: k,
                startTime: K,
                expirationTime: $,
                sortIndex: -1,
              }),
              K > ae
                ? ((k.sortIndex = K),
                  r(b, k),
                  o(g) === null &&
                    k === o(b) &&
                    (T ? (M(U), (U = -1)) : (T = !0), pe(G, K - ae)))
                : ((k.sortIndex = $),
                  r(g, k),
                  w || E || ((w = !0), P || ((P = !0), X()))),
              k
            );
          }),
          (l.unstable_shouldYield = W),
          (l.unstable_wrapCallback = function (k) {
            var te = x;
            return function () {
              var K = x;
              x = te;
              try {
                return k.apply(this, arguments);
              } finally {
                x = K;
              }
            };
          }));
      })(Bd)),
    Bd
  );
}
var Bg;
function SC() {
  return (Bg || ((Bg = 1), (Ld.exports = bC())), Ld.exports);
}
var Ud = { exports: {} },
  jt = {};
var Ug;
function xC() {
  if (Ug) return jt;
  Ug = 1;
  var l = bm();
  function r(y) {
    var h = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        h += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var s = {
      d: {
        f: o,
        r: function () {
          throw Error(r(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    f = Symbol.for("react.portal"),
    u = Symbol.for("react.recoverable"),
    d = Symbol.for("react.optimistic_key");
  function v(y, h, x) {
    var E =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: E == null ? null : E === d ? d : "" + E,
      children: y,
      containerInfo: h,
      implementation: x,
    };
  }
  var g = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function b(y, h) {
    if (y === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (jt.browser = function (y) {
      return { $$typeof: u, _reason: y };
    }),
    (jt.createPortal = function (y, h) {
      var x =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(r(299));
      return v(y, h, null, x);
    }),
    (jt.flushSync = function (y) {
      var h = g.T,
        x = s.p;
      try {
        if (((g.T = null), (s.p = 2), y)) return y();
      } finally {
        ((g.T = h), (s.p = x), s.d.f());
      }
    }),
    (jt.preconnect = function (y, h) {
      typeof y == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        s.d.C(y, h));
    }),
    (jt.prefetchDNS = function (y) {
      typeof y == "string" && s.d.D(y);
    }),
    (jt.preinit = function (y, h) {
      if (typeof y == "string" && h && typeof h.as == "string") {
        var x = h.as,
          E = b(x, h.crossOrigin),
          w = typeof h.integrity == "string" ? h.integrity : void 0,
          T = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        x === "style"
          ? s.d.S(y, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: E,
              integrity: w,
              fetchPriority: T,
            })
          : x === "script" &&
            s.d.X(y, {
              crossOrigin: E,
              integrity: w,
              fetchPriority: T,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (jt.preinitModule = function (y, h) {
      if (typeof y == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var x = b(h.as, h.crossOrigin);
            s.d.M(y, {
              crossOrigin: x,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
              fetchPriority:
                typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
            });
          }
        } else h == null && s.d.M(y);
    }),
    (jt.preload = function (y, h) {
      if (
        typeof y == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var x = h.as,
          E = b(x, h.crossOrigin);
        s.d.L(y, x, {
          crossOrigin: E,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        });
      }
    }),
    (jt.preloadModule = function (y, h) {
      if (typeof y == "string")
        if (h) {
          var x = b(h.as, h.crossOrigin);
          s.d.m(y, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: x,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            fetchPriority:
              typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          });
        } else s.d.m(y);
    }),
    (jt.requestFormReset = function (y) {
      s.d.r(y);
    }),
    (jt.unstable_batchedUpdates = function (y, h) {
      return y(h);
    }),
    (jt.useFormState = function (y, h, x) {
      return g.H.useFormState(y, h, x);
    }),
    (jt.useFormStatus = function () {
      return g.H.useHostTransitionStatus();
    }),
    (jt.version = "19.3.1"),
    jt
  );
}
var Vg;
function B1() {
  if (Vg) return Ud.exports;
  Vg = 1;
  function l() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return (l(), (Ud.exports = xC()), Ud.exports);
}
var Pg;
function CC() {
  if (Pg) return xo;
  Pg = 1;
  var l = SC(),
    r = bm(),
    o = B1();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function u(e) {
    for (var t = e, n = t; n && !n.alternate;)
      ((t = n), (t.flags & 4098) !== 0 && (e = t.return), (n = t.return));
    for (; t.return;) t = t.return;
    return t.tag === 3 ? e : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (u(e) !== e) throw Error(s(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = u(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ;) {
      var i = n.return;
      if (i === null) break;
      var c = i.alternate;
      if (c === null) {
        if (((a = i.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (i.child === c.child) {
        for (c = i.child; c;) {
          if (c === n) return (g(i), e);
          if (c === a) return (g(i), t);
          c = c.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== a.return) ((n = i), (a = c));
      else {
        for (var p = !1, C = i.child; C;) {
          if (C === n) {
            ((p = !0), (n = i), (a = c));
            break;
          }
          if (C === a) {
            ((p = !0), (a = i), (n = c));
            break;
          }
          C = C.sibling;
        }
        if (!p) {
          for (C = c.child; C;) {
            if (C === n) {
              ((p = !0), (n = c), (a = i));
              break;
            }
            if (C === a) {
              ((p = !0), (a = c), (n = i));
              break;
            }
            C = C.sibling;
          }
          if (!p) throw Error(s(189));
        }
      }
      if (n.alternate !== a) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null;) {
      if (((t = y(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  function h(e, t, n, a, i, c) {
    for (; e !== null;) {
      if (
        ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, a, i, c)) ||
        ((e.tag !== 22 || e.memoizedState === null) &&
          (t || (e.tag !== 5 && e.tag !== 27)) &&
          h(e.child, t, n, a, i, c))
      )
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function x(e) {
    for (e = e.return; e !== null;) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function E(e) {
    var t = !1;
    for (
      e = e.return;
      e !== null &&
      (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27));
    )
      e = e.return;
    return t;
  }
  function w(e) {
    var t = [null, null],
      n = x(e);
    return (n === null || T(t, e, n.child, { foundSelf: !1 }), t);
  }
  function T(e, t, n, a) {
    for (; n !== null;) {
      if (n === t) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return ((e[1] = n), !0);
        e[0] = n;
      } else if (
        (n.tag !== 22 || n.memoizedState === null) &&
        T(e, t, n.child, a)
      )
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function N(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(s(559));
    }
  }
  var R = null,
    M = null;
  function _(e, t, n) {
    return e === n ? !0 : e === t ? ((R = e), !0) : !1;
  }
  function j(e, t, n) {
    return e === n ? ((M = e), !1) : e === t ? (M !== null && (R = e), !0) : !1;
  }
  function G(e) {
    if (e === null) return null;
    do e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function P(e, t, n) {
    for (var a = 0, i = e; i; i = n(i)) a++;
    i = 0;
    for (var c = t; c; c = n(c)) i++;
    for (; 0 < a - i;) ((e = n(e)), a--);
    for (; 0 < i - a;) ((t = n(t)), i--);
    for (; a--;) {
      if (e === t || (t !== null && e === t.alternate)) return e;
      ((e = n(e)), (t = n(t)));
    }
    return null;
  }
  var U = Object.assign,
    Q = Symbol.for("react.element"),
    ie = Symbol.for("react.transitional.element"),
    W = Symbol.for("react.portal"),
    re = Symbol.for("react.fragment"),
    X = Symbol.for("react.strict_mode"),
    oe = Symbol.for("react.profiler"),
    fe = Symbol.for("react.consumer"),
    pe = Symbol.for("react.context"),
    k = Symbol.for("react.forward_ref"),
    te = Symbol.for("react.suspense"),
    K = Symbol.for("react.suspense_list"),
    ae = Symbol.for("react.memo"),
    $ = Symbol.for("react.lazy"),
    me = Symbol.for("react.activity"),
    Ce = Symbol.for("react.legacy_hidden"),
    Ve = Symbol.for("react.memo_cache_sentinel"),
    O = Symbol.for("react.view_transition"),
    q = Symbol.for("react.recoverable"),
    F = Symbol.iterator;
  function ne(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (F && e[F]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ge = Symbol.for("react.client.reference");
  function ce(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ge ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case re:
        return "Fragment";
      case oe:
        return "Profiler";
      case X:
        return "StrictMode";
      case te:
        return "Suspense";
      case K:
        return "SuspenseList";
      case me:
        return "Activity";
      case O:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case W:
          return "Portal";
        case pe:
          return e.displayName || "Context";
        case fe:
          return (e._context.displayName || "Context") + ".Consumer";
        case k:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ae:
          return (
            (t = e.displayName || null),
            t !== null ? t : ce(e.type) || "Memo"
          );
        case $:
          ((t = e._payload), (e = e._init));
          try {
            return ce(e(t));
          } catch {}
      }
    return null;
  }
  var ee = Array.isArray,
    le = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ue = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ye = { pending: !1, data: null, method: null, action: null },
    ze = [],
    Le = -1;
  function Tt(e) {
    return { current: e };
  }
  function Fe(e) {
    0 > Le || ((e.current = ze[Le]), (ze[Le] = null), Le--);
  }
  function Be(e, t) {
    (Le++, (ze[Le] = e.current), (e.current = t));
  }
  var st = Tt(null),
    Sl = Tt(null),
    Yn = Tt(null),
    ct = Tt(null);
  function xl(e, t) {
    switch ((Be(Yn, t), Be(Sl, e), Be(st, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Uv(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Uv(t)), (e = Vv(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (Fe(st), Be(st, e));
  }
  function tn() {
    (Fe(st), Fe(Sl), Fe(Yn));
  }
  function Si(e) {
    var t = e.memoizedState;
    (t !== null && ((Wr._currentValue = t.memoizedState), Be(ct, e)),
      (t = st.current));
    var n = Vv(t, e.type);
    t !== n && (Be(Sl, e), Be(st, n));
  }
  function ur(e) {
    (Sl.current === e && (Fe(st), Fe(Sl)),
      ct.current === e && (Fe(ct), (Wr._currentValue = ye)));
  }
  var ja, Po;
  function On(e) {
    if (ja === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((ja = (t && t[1]) || ""),
          (Po =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      ja +
      e +
      Po
    );
  }
  var Cl = !1;
  function kn(e, t) {
    if (!e || Cl) return "";
    Cl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var Z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Z, []);
                } catch (se) {
                  var z = se;
                }
                Reflect.construct(e, [], Z);
              } else {
                try {
                  Z.call();
                } catch (se) {
                  z = se;
                }
                Z = !1;
                try {
                  var V = Object.getOwnPropertyDescriptor(e.prototype, "props");
                  (Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function () {
                      throw Error();
                    },
                  }),
                    (Z = !0),
                    new e());
                } finally {
                  Z &&
                    (V !== void 0
                      ? Object.defineProperty(e.prototype, "props", V)
                      : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (se) {
                z = se;
              }
              (Z = e()) &&
                typeof Z.catch == "function" &&
                Z.catch(function () {});
            }
          } catch (se) {
            if (se && z && typeof se.stack == "string")
              return [se.stack, z.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      i &&
        i.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = a.DetermineComponentFrameRoot(),
        p = c[0],
        C = c[1];
      if (p && C) {
        var A = p.split(`
`),
          L = C.split(`
`);
        for (
          i = a = 0;
          a < A.length && !A[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; i < L.length && !L[i].includes("DetermineComponentFrameRoot");)
          i++;
        if (a === A.length || i === L.length)
          for (
            a = A.length - 1, i = L.length - 1;
            1 <= a && 0 <= i && A[a] !== L[i];
          )
            i--;
        for (; 1 <= a && 0 <= i; a--, i--)
          if (A[a] !== L[i]) {
            if (a !== 1 || i !== 1)
              do
                if ((a--, i--, 0 > i || A[a] !== L[i])) {
                  var Y =
                    `
` + A[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      Y.includes("<anonymous>") &&
                      (Y = Y.replace("<anonymous>", e.displayName)),
                    Y
                  );
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      ((Cl = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : "") ? On(n) : "";
  }
  function Yo(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return On(e.type);
      case 16:
        return On("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? On("Suspense Fallback")
          : On("Suspense");
      case 19:
        return On("SuspenseList");
      case 0:
      case 15:
        return kn(e.type, !1);
      case 11:
        return kn(e.type.render, !1);
      case 1:
        return kn(e.type, !0);
      case 31:
        return On("Activity");
      case 30:
        return On("ViewTransition");
      default:
        return "";
    }
  }
  function ra(e) {
    try {
      var t = "",
        n = null;
      do ((t += Yo(e, n)), (n = e), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var xi = Object.prototype.hasOwnProperty,
    Ci = l.unstable_scheduleCallback,
    fr = l.unstable_cancelCallback,
    ko = l.unstable_shouldYield,
    hn = l.unstable_requestPaint,
    Lt = l.unstable_now,
    Ei = l.unstable_getCurrentPriorityLevel,
    _n = l.unstable_ImmediatePriority,
    wi = l.unstable_UserBlockingPriority,
    dr = l.unstable_NormalPriority,
    qo = l.unstable_LowPriority,
    Ti = l.unstable_IdlePriority,
    Se = l.log,
    ut = l.unstable_setDisableYieldValue,
    at = null,
    Ke = null;
  function kt(e) {
    if (
      (typeof Se == "function" && ut(e),
      Ke && typeof Ke.setStrictMode == "function")
    )
      try {
        Ke.setStrictMode(at, e);
      } catch {}
  }
  var ke = Math.clz32 ? Math.clz32 : Ni,
    qt = Math.log,
    pn = Math.LN2;
  function Ni(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((qt(e) / pn) | 0)) | 0);
  }
  var Bt = 256,
    za = 262144,
    Go = 4194304;
  function El(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
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
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
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
        return e;
    }
  }
  function Xo(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0,
      c = e.suspendedLanes,
      p = e.pingedLanes;
    e = e.warmLanes;
    var C = a & 134217727;
    return (
      C !== 0
        ? ((a = C & ~c),
          a !== 0
            ? (i = El(a))
            : ((p &= C),
              p !== 0
                ? (i = El(p))
                : n || ((n = C & ~e), n !== 0 && (i = El(n)))))
        : ((C = a & ~c),
          C !== 0
            ? (i = El(C))
            : p !== 0
              ? (i = El(p))
              : n || ((n = a & ~e), n !== 0 && (i = El(n)))),
      i === 0
        ? 0
        : t !== 0 &&
            t !== i &&
            (t & c) === 0 &&
            ((c = i & -i),
            (n = t & -t),
            c >= n || (c === 32 && (n & 4194048) !== 0))
          ? t
          : i
    );
  }
  function Ri(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function uh(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n;) {
        var a = 31 - ke(n),
          i = 1 << a;
        ((t |= e[a]), (n &= ~i));
      }
    return t;
  }
  function OS(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function fh() {
    var e = Go;
    return ((Go <<= 1), (Go & 62914560) === 0 && (Go = 4194304), e);
  }
  function lu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ai(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function _S(e, t, n, a, i, c) {
    var p = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var C = e.entanglements,
      A = e.expirationTimes,
      L = e.hiddenUpdates;
    for (n = p & ~n; 0 < n;) {
      var Y = 31 - ke(n),
        Z = 1 << Y;
      ((C[Y] = 0), (A[Y] = -1));
      var z = L[Y];
      if (z !== null)
        for (L[Y] = null, Y = 0; Y < z.length; Y++) {
          var V = z[Y];
          V !== null && (V.lane &= -536870913);
        }
      n &= ~Z;
    }
    (a !== 0 && dh(e, a, 0),
      c !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(p & ~t)));
  }
  function dh(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - ke(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function mh(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var a = 31 - ke(n),
        i = 1 << a;
      ((i & t) | (e[a] & t) && (e[a] |= t), (n &= ~i));
    }
  }
  function hh(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : ru(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function ru(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function iu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ph() {
    var e = ue.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Cg(e.type));
  }
  function vh(e, t) {
    var n = ue.p;
    try {
      return ((ue.p = e), t());
    } finally {
      ue.p = n;
    }
  }
  var ia = Math.random().toString(36).slice(2),
    Nt = "__reactFiber$" + ia,
    Gt = "__reactProps$" + ia,
    mr = "__reactContainer$" + ia,
    gh = "__reactEvents$" + ia,
    DS = "__reactListeners$" + ia,
    MS = "__reactHandles$" + ia,
    yh = "__reactResources$" + ia,
    Oi = "__reactMarker$" + ia,
    Io = "__reactLoad$" + ia;
  function Zo(e) {
    (delete e[Nt], delete e[Gt], delete e[DS], delete e[MS]);
  }
  function wl(e) {
    var t;
    if ((t = e[Nt])) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[mr] || n[Nt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ng(e); e !== null;) {
            if ((n = e[Nt])) return n;
            e = ng(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function hr(e) {
    if ((e = e[Nt] || e[mr])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function _i(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function pr(e) {
    var t = e[yh];
    return (
      t ||
        (t = e[yh] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function bt(e) {
    e[Oi] = !0;
  }
  function bh(e) {
    e[Io] = void 0;
  }
  var Sh = new Set(),
    xh = {};
  function Tl(e, t) {
    (vr(e, t), vr(e + "Capture", t));
  }
  function vr(e, t) {
    for (xh[e] = t, e = 0; e < t.length; e++) Sh.add(t[e]);
  }
  var jS = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Ch = {},
    Eh = {};
  function zS(e) {
    return xi.call(Eh, e)
      ? !0
      : xi.call(Ch, e)
        ? !1
        : jS.test(e)
          ? (Eh[e] = !0)
          : ((Ch[e] = !0), !1);
  }
  var Pe = !1;
  function wh() {
    var e = Pe;
    return ((Pe = !1), e);
  }
  function Qo(e, t, n) {
    if (zS(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, n);
      }
  }
  function Ko(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, n);
    }
  }
  function oa(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, a);
    }
  }
  function nn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Th(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function HS(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var i = a.get,
        c = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (p) {
            ((n = "" + p), c.call(this, p));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (p) {
            n = "" + p;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function ou(e) {
    if (!e._valueTracker) {
      var t = Th(e) ? "checked" : "value";
      e._valueTracker = HS(e, t, "" + e[t]);
    }
  }
  function Nh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = "";
    return (
      e && (a = Th(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  var LS = /[\n"\\]/g;
  function vn(e) {
    return e.replace(LS, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function su(e, t, n, a, i, c, p, C) {
    ((e.name = ""),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (e.type = p)
        : e.removeAttribute("type"),
      t != null
        ? p === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + nn(t))
          : e.value !== "" + nn(t) && (e.value = "" + nn(t))
        : (p !== "submit" && p !== "reset") || e.removeAttribute("value"),
      t != null
        ? p === "number" && e.value == t
          ? cu(e, nn(e.value))
          : cu(e, nn(t))
        : n != null
          ? cu(e, nn(n))
          : a != null && e.removeAttribute("value"),
      i == null && c != null && (e.defaultChecked = !!c),
      i != null &&
        (e.checked = i && typeof i != "function" && typeof i != "symbol"),
      C != null &&
      typeof C != "function" &&
      typeof C != "symbol" &&
      typeof C != "boolean"
        ? (e.name = "" + nn(C))
        : e.removeAttribute("name"));
  }
  function Rh(e, t, n, a, i, c, p, C) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (e.type = c),
      t != null || n != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || t != null)) {
        ou(e);
        return;
      }
      ((n = n != null ? "" + nn(n) : ""),
        (t = t != null ? "" + nn(t) : n),
        C || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? i),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = C ? e.checked : !!a),
      (e.defaultChecked = !!a),
      p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (e.name = p),
      ou(e));
  }
  function cu(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function gr(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        ((i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && a && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + nn(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          ((e[i].selected = !0), a && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ah(e, t, n) {
    if (
      t != null &&
      ((t = "" + nn(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + nn(n) : "";
  }
  function Oh(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(s(92));
        if (ee(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ""), (t = n));
    }
    ((n = nn(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== "" && a !== null && (e.value = a),
      ou(e));
  }
  function yr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var BS = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function _h(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || BS.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function Dh(e, t, n) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (((e = e.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""),
          (Pe = !0));
      for (var i in t)
        ((a = t[i]),
          t.hasOwnProperty(i) && n[i] !== a && (_h(e, i, a), (Pe = !0)));
    } else for (var c in t) t.hasOwnProperty(c) && _h(e, c, t[c]);
  }
  function uu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var US = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["maskType", "mask-type"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    VS =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $o(e) {
    return VS.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function qn() {}
  var fu = null;
  function du(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var br = null,
    Sr = null;
  function Mh(e) {
    var t = hr(e);
    if (t && (e = t.stateNode)) {
      var n = e[Gt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (su(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + vn("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[Gt] || null;
                if (!i) throw Error(s(90));
                su(
                  a,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((a = n[t]), a.form === e.form && Nh(a));
          }
          break e;
        case "textarea":
          Ah(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && gr(e, !!n.multiple, t, !1));
      }
    }
  }
  var mu = !1;
  function jh(e, t, n) {
    if (mu) return e(t, n);
    mu = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((mu = !1),
        (br !== null || Sr !== null) &&
          ($s(), br && ((t = br), (e = Sr), (Sr = br = null), Mh(t), e)))
      )
        for (t = 0; t < e.length; t++) Mh(e[t]);
    }
  }
  function Di(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[Gt] || null;
    if (a === null) return null;
    n = a[t];
    e: switch (t) {
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
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var sa = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    hu = !1;
  if (sa)
    try {
      var Mi = {};
      (Object.defineProperty(Mi, "passive", {
        get: function () {
          hu = !0;
        },
      }),
        window.addEventListener("test", Mi, Mi),
        window.removeEventListener("test", Mi, Mi));
    } catch {
      hu = !1;
    }
  var Ha = null,
    pu = null,
    Fo = null;
  function zh() {
    if (Fo) return Fo;
    var e,
      t = pu,
      n = t.length,
      a,
      i = "value" in Ha ? Ha.value : Ha.textContent,
      c = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var p = n - e;
    for (a = 1; a <= p && t[n - a] === i[c - a]; a++);
    return (Fo = i.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Jo(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Wo() {
    return !0;
  }
  function Hh() {
    return !1;
  }
  function Ut(e) {
    function t(n, a, i, c, p) {
      ((this._reactName = n),
        (this._targetInst = i),
        (this.type = a),
        (this.nativeEvent = c),
        (this.target = p),
        (this.currentTarget = null));
      for (var C in e)
        e.hasOwnProperty(C) && ((n = e[C]), (this[C] = n ? n(c) : c[C]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Wo
          : Hh),
        (this.isPropagationStopped = Hh),
        this
      );
    }
    return (
      U(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Wo));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Wo));
        },
        persist: function () {},
        isPersistent: Wo,
      }),
      t
    );
  }
  var La = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    es = Ut(La),
    ji = U({}, La, { view: 0, detail: 0 }),
    PS = Ut(ji),
    vu,
    gu,
    zi,
    ts = U({}, ji, {
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
      getModifierState: bu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== zi &&
              (zi && e.type === "mousemove"
                ? ((vu = e.screenX - zi.screenX), (gu = e.screenY - zi.screenY))
                : (gu = vu = 0),
              (zi = e)),
            vu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : gu;
      },
    }),
    Lh = Ut(ts),
    YS = U({}, ts, { dataTransfer: 0 }),
    kS = Ut(YS),
    qS = U({}, ji, { relatedTarget: 0 }),
    yu = Ut(qS),
    GS = U({}, La, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    XS = Ut(GS),
    IS = U({}, La, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ZS = Ut(IS),
    QS = U({}, La, { data: 0 }),
    Bh = Ut(QS),
    KS = {
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
      MozPrintableKey: "Unidentified",
    },
    $S = {
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
      224: "Meta",
    },
    FS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function JS(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = FS[e])
        ? !!t[e]
        : !1;
  }
  function bu() {
    return JS;
  }
  var WS = U({}, ji, {
      key: function (e) {
        if (e.key) {
          var t = KS[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Jo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? $S[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: bu,
      charCode: function (e) {
        return e.type === "keypress" ? Jo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Jo(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    e2 = Ut(WS),
    t2 = U({}, ts, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Uh = Ut(t2),
    n2 = U({}, La, { submitter: 0 }),
    a2 = Ut(n2),
    l2 = U({}, ji, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bu,
    }),
    r2 = Ut(l2),
    i2 = U({}, La, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    o2 = Ut(i2),
    s2 = U({}, ts, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    c2 = Ut(s2),
    u2 = U({}, La, { newState: 0, oldState: 0, source: 0 }),
    f2 = Ut(u2),
    d2 = [9, 13, 27, 32],
    Su = sa && "CompositionEvent" in window,
    Hi = null;
  sa && "documentMode" in document && (Hi = document.documentMode);
  var m2 = sa && "TextEvent" in window && !Hi,
    Vh = sa && (!Su || (Hi && 8 < Hi && 11 >= Hi)),
    Ph = " ",
    Yh = !1;
  function kh(e, t) {
    switch (e) {
      case "keyup":
        return d2.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function qh(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var xr = !1;
  function h2(e, t) {
    switch (e) {
      case "compositionend":
        return qh(t);
      case "keypress":
        return t.which !== 32 ? null : ((Yh = !0), Ph);
      case "textInput":
        return ((e = t.data), e === Ph && Yh ? null : e);
      default:
        return null;
    }
  }
  function p2(e, t) {
    if (xr)
      return e === "compositionend" || (!Su && kh(e, t))
        ? ((e = zh()), (Fo = pu = Ha = null), (xr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Vh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var v2 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Gh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!v2[e.type] : t === "textarea";
  }
  function Xh(e, t, n, a) {
    (br ? (Sr ? Sr.push(a) : (Sr = [a])) : (br = a),
      (t = nc(t, "onChange")),
      0 < t.length &&
        ((n = new es("onChange", "change", null, n, a)),
        e.push({ event: n, listeners: t })));
  }
  var Li = null,
    Bi = null;
  function g2(e) {
    Mv(e, 0);
  }
  function ns(e) {
    var t = _i(e);
    if (Nh(t)) return e;
  }
  function Ih(e, t) {
    if (e === "change") return t;
  }
  var Zh = !1;
  if (sa) {
    var xu;
    if (sa) {
      var Cu = "oninput" in document;
      if (!Cu) {
        var Qh = document.createElement("div");
        (Qh.setAttribute("oninput", "return;"),
          (Cu = typeof Qh.oninput == "function"));
      }
      xu = Cu;
    } else xu = !1;
    Zh = xu && (!document.documentMode || 9 < document.documentMode);
  }
  function Kh() {
    Li && (Li.detachEvent("onpropertychange", $h), (Bi = Li = null));
  }
  function $h(e) {
    if (e.propertyName === "value" && ns(Bi)) {
      var t = [];
      (Xh(t, Bi, e, du(e)), jh(g2, t));
    }
  }
  function y2(e, t, n) {
    e === "focusin"
      ? (Kh(), (Li = t), (Bi = n), Li.attachEvent("onpropertychange", $h))
      : e === "focusout" && Kh();
  }
  function b2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ns(Bi);
  }
  function S2(e, t) {
    if (e === "click") return ns(t);
  }
  function x2(e, t) {
    if (e === "input" || e === "change") return ns(t);
  }
  function C2(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var an = typeof Object.is == "function" ? Object.is : C2;
  function Ui(e, t) {
    if (an(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!xi.call(t, i) || !an(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Eu(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Fh(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Jh(e, t) {
    var n = Fh(e);
    e = 0;
    for (var a; n;) {
      if (n.nodeType === 3) {
        if (((a = e + n.textContent.length), e <= t && a >= t))
          return { node: n, offset: t - e };
        e = a;
      }
      e: {
        for (; n;) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Fh(n);
    }
  }
  function Wh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Wh(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function e0(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Eu(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Eu(e.document);
    }
    return t;
  }
  function wu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var E2 = sa && "documentMode" in document && 11 >= document.documentMode,
    Cr = null,
    Tu = null,
    Vi = null,
    Nu = !1;
  function t0(e, t, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Nu ||
      Cr == null ||
      Cr !== Eu(a) ||
      ((a = Cr),
      "selectionStart" in a && wu(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Vi && Ui(Vi, a)) ||
        ((Vi = a),
        (a = nc(Tu, "onSelect")),
        0 < a.length &&
          ((t = new es("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = Cr))));
  }
  function Nl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Er = {
      animationend: Nl("Animation", "AnimationEnd"),
      animationiteration: Nl("Animation", "AnimationIteration"),
      animationstart: Nl("Animation", "AnimationStart"),
      transitionrun: Nl("Transition", "TransitionRun"),
      transitionstart: Nl("Transition", "TransitionStart"),
      transitioncancel: Nl("Transition", "TransitionCancel"),
      transitionend: Nl("Transition", "TransitionEnd"),
    },
    Ru = {},
    n0 = {};
  sa &&
    ((n0 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Er.animationend.animation,
      delete Er.animationiteration.animation,
      delete Er.animationstart.animation),
    "TransitionEvent" in window || delete Er.transitionend.transition);
  function Rl(e) {
    if (Ru[e]) return Ru[e];
    if (!Er[e]) return e;
    var t = Er[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in n0) return (Ru[e] = t[n]);
    return e;
  }
  var a0 = Rl("animationend"),
    l0 = Rl("animationiteration"),
    r0 = Rl("animationstart"),
    w2 = Rl("transitionrun"),
    T2 = Rl("transitionstart"),
    N2 = Rl("transitioncancel"),
    i0 = Rl("transitionend"),
    o0 = new Map(),
    Au =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Au.push("scrollEnd");
  function Dn(e, t) {
    (o0.set(e, t), Tl(t, [e]));
  }
  var R2 = 0;
  function ca(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = Hn.identifierPrefix;
    var n = R2++;
    return ((e = "_" + e + "t_" + n.toString(32) + "_"), (t.autoName = e));
  }
  function s0(e) {
    if (e == null || typeof e == "string") return e;
    var t = null,
      n = qr;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = e[n[a]];
        if (i != null) {
          if (i === "none") return "none";
          t = t == null ? i : t + (" " + i);
        }
      }
    return t ?? e.default;
  }
  function ua(e, t) {
    return (
      (e = s0(e)),
      (t = s0(t)),
      t == null ? (e === "auto" ? null : e) : t === "auto" ? null : t
    );
  }
  var as =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    gn = [],
    wr = 0,
    Ou = 0;
  function ls() {
    for (var e = wr, t = (Ou = wr = 0); t < e;) {
      var n = gn[t];
      gn[t++] = null;
      var a = gn[t];
      gn[t++] = null;
      var i = gn[t];
      gn[t++] = null;
      var c = gn[t];
      if (((gn[t++] = null), a !== null && i !== null)) {
        var p = a.pending;
        (p === null ? (i.next = i) : ((i.next = p.next), (p.next = i)),
          (a.pending = i));
      }
      c !== 0 && c0(n, i, c);
    }
  }
  function rs(e, t, n, a) {
    ((gn[wr++] = e),
      (gn[wr++] = t),
      (gn[wr++] = n),
      (gn[wr++] = a),
      (Ou |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function _u(e, t, n, a) {
    return (rs(e, t, n, a), is(e));
  }
  function Al(e, t) {
    return (rs(e, null, null, t), is(e));
  }
  function c0(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var i = !1, c = e.return; c !== null;)
      ((c.childLanes |= n),
        (a = c.alternate),
        a !== null && (a.childLanes |= n),
        c.tag === 22 &&
          ((e = c.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = c),
        (c = c.return));
    return e.tag === 3
      ? ((c = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - ke(n)),
          (e = c.hiddenUpdates),
          (a = e[i]),
          a === null ? (e[i] = [t]) : a.push(t),
          (t.lane = n | 536870912)),
        c)
      : null;
  }
  function is(e) {
    if (50 < oo) throw ((oo = 0), (Ks = null), Error(s(185)));
    for (var t = e.return; t !== null;) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Tr = {};
  function A2(e, t, n, a) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Xt(e, t, n, a) {
    return new A2(e, t, n, a);
  }
  function Du(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function fa(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Xt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 1206910976),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function u0(e, t) {
    e.flags &= 1206910978;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function os(e, t, n, a, i, c) {
    var p = 0;
    if (((a = e), typeof a == "function")) Du(a) && (p = 1);
    else if (typeof a == "string")
      p = nC(e, n, st.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (a) {
        case me:
          return (
            (e = Xt(31, n, t, i)),
            (e.elementType = me),
            (e.lanes = c),
            e
          );
        case re:
          return Ol(n.children, i, c, t);
        case X:
          ((p = 8), (i |= 24));
          break;
        case oe:
          return (
            (e = Xt(12, n, t, i | 2)),
            (e.elementType = oe),
            (e.lanes = c),
            e
          );
        case te:
          return (
            (e = Xt(13, n, t, i)),
            (e.elementType = te),
            (e.lanes = c),
            e
          );
        case K:
          return ((e = Xt(19, n, t, i)), (e.elementType = K), (e.lanes = c), e);
        case Ce:
        case O:
          return (
            (e = i | 32),
            (e = Xt(30, n, t, e)),
            (e.elementType = O),
            (e.lanes = c),
            (e.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
            e
          );
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case pe:
                p = 10;
                break e;
              case fe:
                p = 9;
                break e;
              case k:
                p = 11;
                break e;
              case ae:
                p = 14;
                break e;
              case $:
                ((p = 16), (a = null));
                break e;
            }
          ((p = 29),
            (n = Error(s(130, e === null ? "null" : typeof e, ""))),
            (a = null));
      }
    return (
      (t = Xt(p, n, t, i)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = c),
      t
    );
  }
  function Ol(e, t, n, a) {
    return ((e = Xt(7, e, a, t)), (e.lanes = n), e);
  }
  function Mu(e, t, n) {
    return ((e = Xt(6, e, null, t)), (e.lanes = n), e);
  }
  function f0(e) {
    var t = Xt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function ju(e, t, n) {
    return (
      (t = Xt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var d0 = new WeakMap();
  function yn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = d0.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: ra(t) }), d0.set(e, t), t);
    }
    return { value: e, source: t, stack: ra(t) };
  }
  var Nr = [],
    Rr = 0,
    ss = null,
    Pi = 0,
    bn = [],
    Sn = 0,
    Ba = null,
    Gn = 1,
    Xn = "";
  function da(e, t) {
    ((Nr[Rr++] = Pi), (Nr[Rr++] = ss), (ss = e), (Pi = t));
  }
  function m0(e, t, n) {
    ((bn[Sn++] = Gn), (bn[Sn++] = Xn), (bn[Sn++] = Ba), (Ba = e));
    var a = Gn;
    e = Xn;
    var i = 32 - ke(a) - 1;
    ((a &= ~(1 << i)), (n += 1));
    var c = 32 - ke(t) + i;
    if (30 < c) {
      var p = i - (i % 5);
      ((c = (a & ((1 << p) - 1)).toString(32)),
        (a >>= p),
        (i -= p),
        (Gn = (1 << (32 - ke(t) + i)) | (n << i) | a),
        (Xn = c + e));
    } else ((Gn = (1 << c) | (n << i) | a), (Xn = e));
  }
  function cs(e) {
    e.return !== null && (da(e, 1), m0(e, 1, 0));
  }
  function zu(e) {
    for (; e === ss;)
      ((ss = Nr[--Rr]), (Nr[Rr] = null), (Pi = Nr[--Rr]), (Nr[Rr] = null));
    for (; e === Ba;)
      ((Ba = bn[--Sn]),
        (bn[Sn] = null),
        (Xn = bn[--Sn]),
        (bn[Sn] = null),
        (Gn = bn[--Sn]),
        (bn[Sn] = null));
  }
  function h0(e, t) {
    ((bn[Sn++] = Gn),
      (bn[Sn++] = Xn),
      (bn[Sn++] = Ba),
      (Gn = t.id),
      (Xn = t.overflow),
      (Ba = e));
  }
  var St = null,
    We = null,
    Ne = !1,
    Ua = null,
    xn = !1,
    Hu = Error(s(519));
  function Va(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Yi(yn(t, e)), Hu);
  }
  function p0(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps;
    switch (((t[Nt] = e), (t[Gt] = a), n)) {
      case "dialog":
        (_e("cancel", t), _e("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        _e("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < co.length; n++) _e(co[n], t);
        break;
      case "source":
        _e("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (_e("error", t), _e("load", t));
        break;
      case "details":
        _e("toggle", t);
        break;
      case "input":
        (_e("invalid", t),
          Rh(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ));
        break;
      case "select":
        _e("invalid", t);
        break;
      case "textarea":
        (_e("invalid", t), Oh(t, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Lv(t.textContent, n)
        ? (a.popover != null && (_e("beforetoggle", t), _e("toggle", t)),
          a.onScroll != null && _e("scroll", t),
          a.onScrollEnd != null && _e("scrollend", t),
          a.onClick != null && (t.onclick = qn),
          (t = !0))
        : (t = !1),
      t || Va(e, !0));
  }
  function us(e) {
    for (St = e.return; St;)
      switch (St.tag) {
        case 5:
        case 31:
        case 13:
          xn = !1;
          return;
        case 27:
        case 3:
          xn = !0;
          return;
        default:
          St = St.return;
      }
  }
  function Ar(e) {
    if (e !== St) return !1;
    if (!Ne) return (us(e), (Ne = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || dd(e.type, e.memoizedProps))),
        (n = !n)),
      n && We && Va(e),
      us(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      We = tg(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      We = tg(e);
    } else
      t === 27
        ? ((t = We), tl(e.type) ? ((e = xd), (xd = null), (We = e)) : (We = t))
        : (We = St ? En(e.stateNode.nextSibling) : null);
    return !0;
  }
  function _l() {
    ((We = St = null), (Ne = !1));
  }
  function Lu() {
    var e = Ua;
    return (
      e !== null &&
        (Qt === null ? (Qt = e) : Qt.push.apply(Qt, e), (Ua = null)),
      e
    );
  }
  function Yi(e) {
    Ua === null ? (Ua = [e]) : Ua.push(e);
  }
  var Bu = Tt(null),
    Dl = null,
    ma = null;
  function Pa(e, t, n) {
    (Be(Bu, t._currentValue), (t._currentValue = n));
  }
  function ha(e) {
    ((e._currentValue = Bu.current), Fe(Bu));
  }
  function fs(e, t, n) {
    for (; e !== null;) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Uu(e, t, n, a) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null;) {
      var c = i.dependencies;
      if (c !== null) {
        var p = i.child;
        c = c.firstContext;
        e: for (; c !== null;) {
          var C = c;
          c = i;
          for (var A = 0; A < t.length; A++)
            if (C.context === t[A]) {
              ((c.lanes |= n),
                (C = c.alternate),
                C !== null && (C.lanes |= n),
                fs(c.return, n, e),
                a || (p = null));
              break e;
            }
          c = C.next;
        }
      } else if (i.tag === 18) {
        if (((p = i.return), p === null)) throw Error(s(341));
        ((p.lanes |= n),
          (c = p.alternate),
          c !== null && (c.lanes |= n),
          fs(p, n, e),
          (p = null));
      } else
        i.tag === 13 &&
        i.memoizedState !== null &&
        i.memoizedState.dehydrated === null
          ? ((i.lanes |= n),
            (p = i.alternate),
            p !== null && (p.lanes |= n),
            fs(i.return, n, e),
            (p = i.child),
            (p = p !== null ? p.sibling : null))
          : (p = i.child);
      if (p !== null) p.return = i;
      else
        for (p = i; p !== null;) {
          if (p === e) {
            p = null;
            break;
          }
          if (((i = p.sibling), i !== null)) {
            ((i.return = p.return), (p = i));
            break;
          }
          p = p.return;
        }
      i = p;
    }
  }
  function Ml(e, t, n, a) {
    e = null;
    for (var i = t, c = !1; i !== null;) {
      if (!c) {
        if ((i.flags & 524288) !== 0) c = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var p = i.alternate;
        if (p === null) throw Error(s(387));
        if (((p = p.memoizedProps), p !== null)) {
          var C = i.type;
          an(i.pendingProps.value, p.value) ||
            (e !== null ? e.push(C) : (e = [C]));
        }
      } else if (i === ct.current) {
        if (((p = i.alternate), p === null)) throw Error(s(387));
        p.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(Wr) : (e = [Wr]));
      }
      i = i.return;
    }
    return (e !== null && Uu(t, e, n, a), (t.flags |= 262144), e !== null);
  }
  function ds(e) {
    for (e = e.firstContext; e !== null;) {
      if (!an(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function jl(e) {
    ((Dl = e),
      (ma = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Rt(e) {
    return v0(Dl, e);
  }
  function ms(e, t) {
    return (Dl === null && jl(e), v0(e, t));
  }
  function v0(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), ma === null)) {
      if (e === null) throw Error(s(308));
      ((ma = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else ma = ma.next = t;
    return n;
  }
  var O2 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    _2 = l.unstable_scheduleCallback,
    D2 = l.unstable_NormalPriority,
    ft = {
      $$typeof: pe,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Vu() {
    return { controller: new O2(), data: new Map(), refCount: 0 };
  }
  function ki(e) {
    (e.refCount--,
      e.refCount === 0 &&
        _2(D2, function () {
          e.controller.abort();
        }));
  }
  function g0(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var n = e.transitionTypes;
      for (
        n === null && (n = e.transitionTypes = []), e = 0;
        e < t.length;
        e++
      ) {
        var a = t[e];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var qi = null;
  function M2(e) {
    var t = e.transitionTypes;
    return ((e.transitionTypes = null), t);
  }
  var Gi = null,
    Pu = 0,
    zl = 0,
    Or = null;
  function j2(e, t) {
    if (Gi === null) {
      var n = (Gi = []);
      ((Pu = 0),
        (zl = ad()),
        (Or = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (Pu++, t.then(y0, y0), t);
  }
  function y0() {
    if (--Pu === 0 && ((qi = null), Gi !== null)) {
      Or !== null && (Or.status = "fulfilled");
      var e = Gi;
      ((Gi = null), (zl = 0), (Or = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function z2(e, t) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (i) {
          n.push(i);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var i = 0; i < n.length; i++) (0, n[i])(t);
        },
        function (i) {
          for (a.status = "rejected", a.reason = i, i = 0; i < n.length; i++)
            (0, n[i])(void 0);
        }
      ),
      a
    );
  }
  var b0 = le.S;
  le.S = function (e, t) {
    if (
      ((fv = Lt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        j2(e, t),
      qi !== null)
    )
      for (var n = Zr; n !== null;) (g0(n, qi), (n = n.next));
    if (((n = e.types), n !== null)) {
      for (var a = Zr; a !== null;) (g0(a, n), (a = a.next));
      if (zl !== 0) {
        ((a = qi), a === null && (a = qi = []));
        for (var i = 0; i < n.length; i++) {
          var c = n[i];
          a.indexOf(c) === -1 && a.push(c);
        }
      }
    }
    b0 !== null && b0(e, t);
  };
  var Hl = Tt(null);
  function Yu() {
    var e = Hl.current;
    return e !== null ? e : Je.pooledCache;
  }
  function hs(e, t) {
    t === null ? Be(Hl, Hl.current) : Be(Hl, t.pool);
  }
  function S0() {
    var e = Yu();
    return e === null ? null : { parent: ft._currentValue, pool: e };
  }
  var _r = Error(s(460)),
    ku = Error(s(474)),
    ps = Error(s(542)),
    vs = { then: function () {} };
  function x0(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function C0(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(qn, qn), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw (
          (e = t.reason),
          w0(e),
          e === void 0 && !("reason" in t) ? Error(s(600)) : e
        );
      default:
        if (typeof t.status == "string") t.then(qn, qn);
        else {
          if (((e = Je), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "fulfilled"), (i.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "rejected"), (i.reason = a));
                }
              }
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), w0(e), e);
        }
        throw ((Bl = t), _r);
    }
  }
  function Ll(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((Bl = n), _r)
        : n;
    }
  }
  var Bl = null;
  function E0() {
    if (Bl === null) throw Error(s(459));
    var e = Bl;
    return ((Bl = null), e);
  }
  function w0(e) {
    if (e === _r || e === ps) throw Error(s(483));
  }
  var Dr = null,
    Xi = 0;
  function gs(e) {
    var t = Xi;
    return ((Xi += 1), Dr === null && (Dr = []), C0(Dr, e, t));
  }
  function Ya(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function ys(e, t) {
    throw t.$$typeof === Q
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function T0(e) {
    function t(H, D) {
      if (e) {
        var B = H.deletions;
        B === null ? ((H.deletions = [D]), (H.flags |= 16)) : B.push(D);
      }
    }
    function n(H, D) {
      if (!e) return null;
      for (; D !== null;) (t(H, D), (D = D.sibling));
      return null;
    }
    function a(H) {
      for (var D = new Map(); H !== null;)
        (H.key === null ? D.set(H.index, H) : D.set(H.key, H), (H = H.sibling));
      return D;
    }
    function i(H, D) {
      return ((H = fa(H, D)), (H.index = 0), (H.sibling = null), H);
    }
    function c(H, D, B) {
      return (
        (H.index = B),
        e
          ? ((B = H.alternate),
            B !== null
              ? ((B = B.index), B < D ? ((H.flags |= 2), D) : B)
              : ((H.flags |= 134217730), D))
          : ((H.flags |= 1048576), D)
      );
    }
    function p(H) {
      return (e && H.alternate === null && (H.flags |= 134217730), H);
    }
    function C(H, D, B, I) {
      return D === null || D.tag !== 6
        ? ((D = Mu(B, H.mode, I)), (D.return = H), D)
        : ((D = i(D, B)), (D.return = H), D);
    }
    function A(H, D, B, I) {
      var de = B.type;
      return de === re
        ? ((H = Y(H, D, B.props.children, I, B.key)), Ya(H, B), H)
        : D !== null &&
            (D.elementType === de ||
              (typeof de == "object" &&
                de !== null &&
                de.$$typeof === $ &&
                Ll(de) === D.type))
          ? ((D = i(D, B.props)), Ya(D, B), (D.return = H), D)
          : ((D = os(B.type, B.key, B.props, null, H.mode, I)),
            Ya(D, B),
            (D.return = H),
            D);
    }
    function L(H, D, B, I) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== B.containerInfo ||
        D.stateNode.implementation !== B.implementation
        ? ((D = ju(B, H.mode, I)), (D.return = H), D)
        : ((D = i(D, B.children || [])), (D.return = H), D);
    }
    function Y(H, D, B, I, de) {
      return D === null || D.tag !== 7
        ? ((D = Ol(B, H.mode, I, de)), (D.return = H), D)
        : ((D = i(D, B)), (D.return = H), D);
    }
    function Z(H, D, B) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return ((D = Mu("" + D, H.mode, B)), (D.return = H), D);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ie:
            return (
              (B = os(D.type, D.key, D.props, null, H.mode, B)),
              Ya(B, D),
              (B.return = H),
              B
            );
          case W:
            return ((D = ju(D, H.mode, B)), (D.return = H), D);
          case $:
            return ((D = Ll(D)), Z(H, D, B));
        }
        if (ee(D) || ne(D))
          return ((D = Ol(D, H.mode, B, null)), (D.return = H), D);
        if (typeof D.then == "function") return Z(H, gs(D), B);
        if (D.$$typeof === pe) return Z(H, ms(H, D), B);
        ys(H, D);
      }
      return null;
    }
    function z(H, D, B, I) {
      var de = D !== null ? D.key : null;
      if (
        (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
      )
        return de !== null ? null : C(H, D, "" + B, I);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case ie:
            return B.key === de ? A(H, D, B, I) : null;
          case W:
            return B.key === de ? L(H, D, B, I) : null;
          case $:
            return ((B = Ll(B)), z(H, D, B, I));
        }
        if (ee(B) || ne(B)) return de !== null ? null : Y(H, D, B, I, null);
        if (typeof B.then == "function") return z(H, D, gs(B), I);
        if (B.$$typeof === pe) return z(H, D, ms(H, B), I);
        ys(H, B);
      }
      return null;
    }
    function V(H, D, B, I, de) {
      if (
        (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
      )
        return ((H = H.get(B) || null), C(D, H, "" + I, de));
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case ie:
            return (
              (H = H.get(I.key === null ? B : I.key) || null),
              A(D, H, I, de)
            );
          case W:
            return (
              (H = H.get(I.key === null ? B : I.key) || null),
              L(D, H, I, de)
            );
          case $:
            return ((I = Ll(I)), V(H, D, B, I, de));
        }
        if (ee(I) || ne(I))
          return ((H = H.get(B) || null), Y(D, H, I, de, null));
        if (typeof I.then == "function") return V(H, D, B, gs(I), de);
        if (I.$$typeof === pe) return V(H, D, B, ms(D, I), de);
        ys(D, I);
      }
      return null;
    }
    function se(H, D, B, I) {
      for (
        var de = null, Me = null, ve = D, be = (D = 0), ht = null;
        ve !== null && be < B.length;
        be++
      ) {
        ve.index > be ? ((ht = ve), (ve = null)) : (ht = ve.sibling);
        var He = z(H, ve, B[be], I);
        if (He === null) {
          ve === null && (ve = ht);
          break;
        }
        (e && ve && He.alternate === null && t(H, ve),
          (D = c(He, D, be)),
          Me === null ? (de = He) : (Me.sibling = He),
          (Me = He),
          (ve = ht));
      }
      if (be === B.length) return (n(H, ve), Ne && da(H, be), de);
      if (ve === null) {
        for (; be < B.length; be++)
          ((ve = Z(H, B[be], I)),
            ve !== null &&
              ((D = c(ve, D, be)),
              Me === null ? (de = ve) : (Me.sibling = ve),
              (Me = ve)));
        return (Ne && da(H, be), de);
      }
      for (ve = a(ve); be < B.length; be++)
        ((ht = V(ve, H, be, B[be], I)),
          ht !== null &&
            (e &&
              ((He = ht.alternate),
              He !== null && ve.delete(He.key === null ? be : He.key)),
            (D = c(ht, D, be)),
            Me === null ? (de = ht) : (Me.sibling = ht),
            (Me = ht)));
      return (
        e &&
          ve.forEach(function (il) {
            return t(H, il);
          }),
        Ne && da(H, be),
        de
      );
    }
    function he(H, D, B, I) {
      if (B == null) throw Error(s(151));
      for (
        var de = null,
          Me = null,
          ve = D,
          be = (D = 0),
          ht = null,
          He = B.next();
        ve !== null && !He.done;
        be++, He = B.next()
      ) {
        ve.index > be ? ((ht = ve), (ve = null)) : (ht = ve.sibling);
        var il = z(H, ve, He.value, I);
        if (il === null) {
          ve === null && (ve = ht);
          break;
        }
        (e && ve && il.alternate === null && t(H, ve),
          (D = c(il, D, be)),
          Me === null ? (de = il) : (Me.sibling = il),
          (Me = il),
          (ve = ht));
      }
      if (He.done) return (n(H, ve), Ne && da(H, be), de);
      if (ve === null) {
        for (; !He.done; be++, He = B.next())
          ((He = Z(H, He.value, I)),
            He !== null &&
              ((D = c(He, D, be)),
              Me === null ? (de = He) : (Me.sibling = He),
              (Me = He)));
        return (Ne && da(H, be), de);
      }
      for (ve = a(ve); !He.done; be++, He = B.next())
        ((He = V(ve, H, be, He.value, I)),
          He !== null &&
            (e &&
              ((ht = He.alternate),
              ht !== null && ve.delete(ht.key === null ? be : ht.key)),
            (D = c(He, D, be)),
            Me === null ? (de = He) : (Me.sibling = He),
            (Me = He)));
      return (
        e &&
          ve.forEach(function (hC) {
            return t(H, hC);
          }),
        Ne && da(H, be),
        de
      );
    }
    function we(H, D, B, I) {
      if (
        (typeof B == "object" &&
          B !== null &&
          B.type === re &&
          B.key === null &&
          B.props.ref === void 0 &&
          (B = B.props.children),
        typeof B == "object" && B !== null)
      ) {
        switch (B.$$typeof) {
          case ie:
            e: {
              for (var de = B.key; D !== null;) {
                if (D.key === de) {
                  if (((de = B.type), de === re)) {
                    if (D.tag === 7) {
                      (n(H, D.sibling),
                        (I = i(D, B.props.children)),
                        Ya(I, B),
                        (I.return = H),
                        (H = I));
                      break e;
                    }
                  } else if (
                    D.elementType === de ||
                    (typeof de == "object" &&
                      de !== null &&
                      de.$$typeof === $ &&
                      Ll(de) === D.type)
                  ) {
                    (n(H, D.sibling),
                      (I = i(D, B.props)),
                      Ya(I, B),
                      (I.return = H),
                      (H = I));
                    break e;
                  }
                  n(H, D);
                  break;
                } else t(H, D);
                D = D.sibling;
              }
              B.type === re
                ? ((I = Ol(B.props.children, H.mode, I, B.key)),
                  Ya(I, B),
                  (I.return = H),
                  (H = I))
                : ((I = os(B.type, B.key, B.props, null, H.mode, I)),
                  Ya(I, B),
                  (I.return = H),
                  (H = I));
            }
            return p(H);
          case W:
            e: {
              for (de = B.key; D !== null;) {
                if (D.key === de)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === B.containerInfo &&
                    D.stateNode.implementation === B.implementation
                  ) {
                    (n(H, D.sibling),
                      (I = i(D, B.children || [])),
                      (I.return = H),
                      (H = I));
                    break e;
                  } else {
                    n(H, D);
                    break;
                  }
                else t(H, D);
                D = D.sibling;
              }
              ((I = ju(B, H.mode, I)), (I.return = H), (H = I));
            }
            return p(H);
          case $:
            return ((B = Ll(B)), we(H, D, B, I));
        }
        if (ee(B)) return se(H, D, B, I);
        if (ne(B)) {
          if (((de = ne(B)), typeof de != "function")) throw Error(s(150));
          return ((B = de.call(B)), he(H, D, B, I));
        }
        if (typeof B.then == "function") return we(H, D, gs(B), I);
        if (B.$$typeof === pe) return we(H, D, ms(H, B), I);
        ys(H, B);
      }
      return (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
        ? ((B = "" + B),
          D !== null && D.tag === 6
            ? (n(H, D.sibling), (I = i(D, B)), (I.return = H), (H = I))
            : (n(H, D), (I = Mu(B, H.mode, I)), (I.return = H), (H = I)),
          p(H))
        : n(H, D);
    }
    return function (H, D, B, I) {
      try {
        Xi = 0;
        var de = we(H, D, B, I);
        return ((Dr = null), de);
      } catch (ve) {
        if (ve === _r || ve === ps) throw ve;
        var Me = Xt(29, ve, null, H.mode);
        return ((Me.lanes = I), (Me.return = H), Me);
      }
    };
  }
  var Ul = T0(!0),
    N0 = T0(!1),
    ka = !1;
  function qu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Gu(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function qa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ga(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (qe & 2) !== 0)) {
      var i = a.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (a.pending = t),
        (t = is(e)),
        c0(e, null, n),
        t
      );
    }
    return (rs(e, a, t, n), is(e));
  }
  function Ii(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), mh(e, n));
    }
  }
  function Xu(e, t) {
    var n = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var i = null,
        c = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var p = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (c === null ? (i = c = p) : (c = c.next = p), (n = n.next));
        } while (n !== null);
        c === null ? (i = c = t) : (c = c.next = t);
      } else i = c = t;
      ((n = {
        baseState: a.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: c,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var Iu = !1;
  function Zi() {
    if (Iu) {
      var e = Or;
      if (e !== null) throw e;
    }
  }
  function Qi(e, t, n, a) {
    Iu = !1;
    var i = e.updateQueue;
    ka = !1;
    var c = i.firstBaseUpdate,
      p = i.lastBaseUpdate,
      C = i.shared.pending;
    if (C !== null) {
      i.shared.pending = null;
      var A = C,
        L = A.next;
      ((A.next = null), p === null ? (c = L) : (p.next = L), (p = A));
      var Y = e.alternate;
      Y !== null &&
        ((Y = Y.updateQueue),
        (C = Y.lastBaseUpdate),
        C !== p &&
          (C === null ? (Y.firstBaseUpdate = L) : (C.next = L),
          (Y.lastBaseUpdate = A)));
    }
    if (c !== null) {
      var Z = i.baseState;
      ((p = 0), (Y = L = A = null), (C = c));
      do {
        var z = C.lane & -536870913,
          V = z !== C.lane;
        if (V ? (De & z) === z : (a & z) === z) {
          (z !== 0 && z === zl && (Iu = !0),
            Y !== null &&
              (Y = Y.next =
                {
                  lane: 0,
                  tag: C.tag,
                  payload: C.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var se = e,
              he = C;
            z = t;
            var we = n;
            switch (he.tag) {
              case 1:
                if (((se = he.payload), typeof se == "function")) {
                  Z = se.call(we, Z, z);
                  break e;
                }
                Z = se;
                break e;
              case 3:
                se.flags = (se.flags & -65537) | 128;
              case 0:
                if (
                  ((se = he.payload),
                  (z = typeof se == "function" ? se.call(we, Z, z) : se),
                  z == null)
                )
                  break e;
                Z = U({}, Z, z);
                break e;
              case 2:
                ka = !0;
            }
          }
          ((z = C.callback),
            z !== null &&
              ((e.flags |= 64),
              V && (e.flags |= 8192),
              (V = i.callbacks),
              V === null ? (i.callbacks = [z]) : V.push(z)));
        } else
          ((V = {
            lane: z,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null,
          }),
            Y === null ? ((L = Y = V), (A = Z)) : (Y = Y.next = V),
            (p |= z));
        if (((C = C.next), C === null)) {
          if (((C = i.shared.pending), C === null)) break;
          ((V = C),
            (C = V.next),
            (V.next = null),
            (i.lastBaseUpdate = V),
            (i.shared.pending = null));
        }
      } while (!0);
      (Y === null && (A = Z),
        (i.baseState = A),
        (i.firstBaseUpdate = L),
        (i.lastBaseUpdate = Y),
        c === null && (i.shared.lanes = 0),
        (Fa |= p),
        (e.lanes = p),
        (e.memoizedState = Z));
    }
  }
  function R0(e, t) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(t);
  }
  function A0(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) R0(n[e], t);
  }
  var Xa = Tt(null),
    bs = Tt(0);
  function O0(e, t) {
    ((e = ba), Be(bs, e), Be(Xa, t), (ba = e | t.baseLanes));
  }
  function Zu() {
    (Be(bs, ba), Be(Xa, Xa.current));
  }
  function Qu() {
    ((ba = bs.current), Fe(Xa), Fe(bs));
  }
  var At = Tt(null),
    Ht = null;
  function Ia(e) {
    var t = e.alternate;
    (Be(Ot, Ot.current & 1),
      Be(At, e),
      Ht === null &&
        (t === null || Xa.current !== null || t.memoizedState !== null) &&
        (Ht = e));
  }
  function Ku(e) {
    (Be(Ot, Ot.current), Be(At, e), Ht === null && (Ht = e));
  }
  function _0(e) {
    e.tag === 22
      ? (Be(Ot, Ot.current), Be(At, e), Ht === null && (Ht = e))
      : Za();
  }
  function Za() {
    (Be(Ot, Ot.current), Be(At, At.current));
  }
  function ln(e) {
    (Fe(At), Ht === e && (Ht = null), Fe(Ot));
  }
  var Ot = Tt(0);
  function Ki(e, t) {
    (Be(At, At.current), Be(Ot, t));
  }
  function $u(e) {
    (Fe(Ot), Fe(At), Ht === e && (Ht = null));
  }
  function Ss(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || bd(n) || Sd(n)))
          return t;
      } else if (
        t.tag === 19 &&
        t.memoizedProps.revealOrder !== "independent"
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var pa = 0,
    Ee = null,
    $e = null,
    dt = null,
    xs = !1,
    Mr = !1,
    Vl = !1,
    Cs = 0,
    $i = 0,
    jr = null,
    H2 = 0;
  function lt() {
    throw Error(s(321));
  }
  function Fu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!an(e[n], t[n])) return !1;
    return !0;
  }
  function Ju(e, t, n, a, i, c) {
    return (
      (pa = c),
      (Ee = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (le.H = e === null || e.memoizedState === null ? mp : hp),
      (Vl = !1),
      (c = n(a, i)),
      (Vl = !1),
      Mr && (c = M0(t, n, a, i)),
      D0(e),
      c
    );
  }
  function D0(e) {
    le.H = Os;
    var t = $e !== null && $e.next !== null;
    if (((pa = 0), (dt = $e = Ee = null), (xs = !1), ($i = 0), (jr = null), t))
      throw Error(s(300));
    e === null ||
      mt ||
      ((e = e.dependencies), e !== null && ds(e) && (mt = !0));
  }
  function M0(e, t, n, a) {
    Ee = e;
    var i = 0;
    do {
      if ((Mr && (jr = null), ($i = 0), (Mr = !1), 25 <= i))
        throw Error(s(301));
      if (((i += 1), (dt = $e = null), e.updateQueue != null)) {
        var c = e.updateQueue;
        ((c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0));
      }
      ((le.H = q2), (c = t(n, a)));
    } while (Mr);
    return c;
  }
  function L2() {
    var e = le.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Fi(t) : t),
      (e = e.useState()[0]),
      ($e !== null ? $e.memoizedState : null) !== e && (Ee.flags |= 1024),
      t
    );
  }
  function Wu() {
    var e = Cs !== 0;
    return ((Cs = 0), e);
  }
  function ef(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function tf(e) {
    if (xs) {
      for (e = e.memoizedState; e !== null;) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      xs = !1;
    }
    ((pa = 0), (dt = $e = Ee = null), (Mr = !1), ($i = Cs = 0), (jr = null));
  }
  function Vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (dt === null ? (Ee.memoizedState = dt = e) : (dt = dt.next = e), dt);
  }
  function it() {
    if ($e === null) {
      var e = Ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = $e.next;
    var t = dt === null ? Ee.memoizedState : dt.next;
    if (t !== null) ((dt = t), ($e = e));
    else {
      if (e === null)
        throw Ee.alternate === null ? Error(s(467)) : Error(s(310));
      (($e = e),
        (e = {
          memoizedState: $e.memoizedState,
          baseState: $e.baseState,
          baseQueue: $e.baseQueue,
          queue: $e.queue,
          next: null,
        }),
        dt === null ? (Ee.memoizedState = dt = e) : (dt = dt.next = e));
    }
    return dt;
  }
  function Es() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fi(e) {
    var t = $i;
    return (
      ($i += 1),
      jr === null && (jr = []),
      (e = C0(jr, e, t)),
      (t = Ee),
      (dt === null ? t.memoizedState : dt.next) === null &&
        ((t = t.alternate),
        (le.H = t === null || t.memoizedState === null ? mp : hp)),
      e
    );
  }
  function ws(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Fi(e);
      if (e.$$typeof === q) return;
      if (e.$$typeof === pe) return Rt(e);
    }
    throw Error(s(438, String(e)));
  }
  function nf(e) {
    var t = null,
      n = Ee.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var a = Ee.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Es()), (Ee.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = Ve;
    return (t.index++, n);
  }
  function va(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ts(e) {
    var t = it();
    return af(t, $e, e);
  }
  function af(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = n;
    var i = e.baseQueue,
      c = a.pending;
    if (c !== null) {
      if (i !== null) {
        var p = i.next;
        ((i.next = c.next), (c.next = p));
      }
      ((t.baseQueue = i = c), (a.pending = null));
    }
    if (((c = e.baseState), i === null)) e.memoizedState = c;
    else {
      t = i.next;
      var C = (p = null),
        A = null,
        L = t,
        Y = !1;
      do {
        var Z = L.lane & -536870913;
        if (Z !== L.lane ? (De & Z) === Z : (pa & Z) === Z) {
          var z = L.revertLane;
          if (z === 0)
            (A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: L.action,
                  hasEagerState: L.hasEagerState,
                  eagerState: L.eagerState,
                  next: null,
                }),
              Z === zl && (Y = !0));
          else if ((pa & z) === z) {
            ((L = L.next), z === zl && (Y = !0));
            continue;
          } else
            ((Z = {
              lane: 0,
              revertLane: L.revertLane,
              gesture: null,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null,
            }),
              A === null ? ((C = A = Z), (p = c)) : (A = A.next = Z),
              (Ee.lanes |= z),
              (Fa |= z));
          ((Z = L.action),
            Vl && n(c, Z),
            (c = L.hasEagerState ? L.eagerState : n(c, Z)));
        } else
          ((z = {
            lane: Z,
            revertLane: L.revertLane,
            gesture: L.gesture,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          }),
            A === null ? ((C = A = z), (p = c)) : (A = A.next = z),
            (Ee.lanes |= Z),
            (Fa |= Z));
        L = L.next;
      } while (L !== null && L !== t);
      if (
        (A === null ? (p = c) : (A.next = C),
        !an(c, e.memoizedState) && ((mt = !0), Y && ((n = Or), n !== null)))
      )
        throw n;
      ((e.memoizedState = c),
        (e.baseState = p),
        (e.baseQueue = A),
        (a.lastRenderedState = c));
    }
    return (i === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function lf(e) {
    var t = it(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch,
      i = n.pending,
      c = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var p = (i = i.next);
      do ((c = e(c, p.action)), (p = p.next));
      while (p !== i);
      (an(c, t.memoizedState) || (mt = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (n.lastRenderedState = c));
    }
    return [c, a];
  }
  function j0(e, t, n) {
    var a = Ee,
      i = it(),
      c = Ne;
    if (c) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var p = !an(($e || i).memoizedState, n);
    if (
      (p && ((i.memoizedState = n), (mt = !0)),
      (i = i.queue),
      sf(L0.bind(null, a, i, e), [e]),
      (e =
        i.getSnapshot !== t ||
        p ||
        (dt !== null && (dt.memoizedState.tag & 1) !== 0)),
      zr(e ? 9 : 8, { destroy: void 0 }, H0.bind(null, a, i, n, t), null),
      e)
    ) {
      if (((a.flags |= 2048), Je === null)) throw Error(s(349));
      c || (pa & 127) !== 0 || z0(a, t, n);
    }
    return n;
  }
  function z0(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ee.updateQueue),
      t === null
        ? ((t = Es()), (Ee.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function H0(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), B0(t) && U0(e));
  }
  function L0(e, t, n) {
    return n(function () {
      B0(t) && U0(e);
    });
  }
  function B0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !an(e, n);
    } catch {
      return !0;
    }
  }
  function U0(e) {
    var t = Al(e, 2);
    t !== null && Kt(t, e, 2);
  }
  function rf(e) {
    var t = Vt();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), Vl)) {
        kt(!0);
        try {
          n();
        } finally {
          kt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: va,
        lastRenderedState: e,
      }),
      t
    );
  }
  function V0(e, t, n, a) {
    return ((e.baseState = n), af(e, $e, typeof a == "function" ? a : va));
  }
  function B2(e, t, n, a, i) {
    if (As(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var c = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (p) {
          c.listeners.push(p);
        },
      };
      (le.T !== null ? n(!0) : (c.isTransition = !1),
        a(c),
        (n = t.pending),
        n === null
          ? ((c.next = t.pending = c), P0(t, c))
          : ((c.next = n.next), (t.pending = n.next = c)));
    }
  }
  function P0(e, t) {
    var n = t.action,
      a = t.payload,
      i = e.state;
    if (t.isTransition) {
      var c = le.T,
        p = {};
      ((p.types = c !== null ? c.types : null), (le.T = p));
      try {
        var C = n(i, a),
          A = le.S;
        (A !== null && A(p, C), Y0(e, t, C));
      } catch (L) {
        of(e, t, L);
      } finally {
        (c !== null && p.types !== null && (c.types = p.types), (le.T = c));
      }
    } else
      try {
        ((c = n(i, a)), Y0(e, t, c));
      } catch (L) {
        of(e, t, L);
      }
  }
  function Y0(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            k0(e, t, a);
          },
          function (a) {
            return of(e, t, a);
          }
        )
      : k0(e, t, n);
  }
  function k0(e, t, n) {
    ((t.status = "fulfilled"),
      (t.value = n),
      q0(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), P0(e, n))));
  }
  function of(e, t, n) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = n), q0(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function q0(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function G0(e, t) {
    return t;
  }
  function X0(e, t) {
    if (Ne) {
      var n = Je.formState;
      if (n !== null) {
        e: {
          var a = Ee;
          if (Ne) {
            if (We) {
              t: {
                for (var i = We, c = xn; i.nodeType !== 8;) {
                  if (!c) {
                    i = null;
                    break t;
                  }
                  if (((i = En(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                ((c = i.data), (i = c === "F!" || c === "F" ? i : null));
              }
              if (i) {
                ((We = En(i.nextSibling)), (a = i.data === "F!"));
                break e;
              }
            }
            Va(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return (
      (n = Vt()),
      (n.memoizedState = n.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: G0,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = up.bind(null, Ee, a)),
      (a.dispatch = n),
      (a = rf(!1)),
      (c = mf.bind(null, Ee, !1, a.queue)),
      (a = Vt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = i),
      (n = B2.bind(null, Ee, i, c, n)),
      (i.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function I0(e) {
    var t = it();
    return Z0(t, $e, e);
  }
  function Z0(e, t, n) {
    if (
      ((t = af(e, t, G0)[0]),
      (e = Ts(va)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = Fi(t);
      } catch (p) {
        throw p === _r ? ps : p;
      }
    else a = t;
    t = it();
    var i = t.queue,
      c = i.dispatch;
    return (
      n !== t.memoizedState &&
        ((Ee.flags |= 2048),
        zr(9, { destroy: void 0 }, U2.bind(null, i, n), null)),
      [a, c, e]
    );
  }
  function U2(e, t) {
    e.action = t;
  }
  function Q0(e) {
    var t = it(),
      n = $e;
    if (n !== null) return Z0(t, n, e);
    (it(), (t = t.memoizedState), (n = it()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = e), [t, a, !1]);
  }
  function zr(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = Ee.updateQueue),
      t === null && ((t = Es()), (Ee.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function K0() {
    return it().memoizedState;
  }
  function Ns(e, t, n, a) {
    var i = Vt();
    ((Ee.flags |= e),
      (i.memoizedState = zr(
        1 | t,
        { destroy: void 0 },
        n,
        a === void 0 ? null : a
      )));
  }
  function Rs(e, t, n, a) {
    var i = it();
    a = a === void 0 ? null : a;
    var c = i.memoizedState.inst;
    $e !== null && a !== null && Fu(a, $e.memoizedState.deps)
      ? (i.memoizedState = zr(t, c, n, a))
      : ((Ee.flags |= e), (i.memoizedState = zr(1 | t, c, n, a)));
  }
  function $0(e, t) {
    Ns(8390656, 8, e, t);
  }
  function sf(e, t) {
    Rs(2048, 8, e, t);
  }
  function V2(e) {
    Ee.flags |= 4;
    var t = Ee.updateQueue;
    if (t === null) ((t = Es()), (Ee.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function F0(e) {
    var t = it().memoizedState;
    return (
      V2({ ref: t, nextImpl: e }),
      function () {
        if ((qe & 2) !== 0) throw Error(s(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function J0(e, t) {
    return Rs(4, 2, e, t);
  }
  function W0(e, t) {
    return Rs(4, 4, e, t);
  }
  function ep(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function tp(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), Rs(4, 4, ep.bind(null, t, e), n));
  }
  function cf() {}
  function np(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Fu(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function ap(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Fu(t, a[1])) return a[0];
    if (((a = e()), Vl)) {
      kt(!0);
      try {
        e();
      } finally {
        kt(!1);
      }
    }
    return ((n.memoizedState = [a, t]), a);
  }
  function uf(e, t, n) {
    return n === void 0 || ((pa & 1073741824) !== 0 && (De & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = mv()), (Ee.lanes |= e), (Fa |= e), n);
  }
  function lp(e, t, n, a) {
    return an(n, t)
      ? n
      : Xa.current !== null
        ? ((e = uf(e, n, a)), an(e, t) || (mt = !0), e)
        : (pa & 106) === 0 || ((pa & 1073741824) !== 0 && (De & 261930) === 0)
          ? ((mt = !0), (e.memoizedState = n))
          : ((e = mv()), (Ee.lanes |= e), (Fa |= e), t);
  }
  function rp(e, t, n, a, i) {
    var c = ue.p;
    ue.p = c !== 0 && 8 > c ? c : 8;
    var p = le.T,
      C = {};
    ((C.types = p !== null ? p.types : null), (le.T = C), mf(e, !1, t, n));
    try {
      var A = i(),
        L = le.S;
      if (
        (L !== null && L(C, A),
        A !== null && typeof A == "object" && typeof A.then == "function")
      ) {
        var Y = z2(A, a);
        Ji(e, t, Y, cn(e));
      } else Ji(e, t, a, cn(e));
    } catch (Z) {
      Ji(e, t, { then: function () {}, status: "rejected", reason: Z }, cn());
    } finally {
      ((ue.p = c),
        p !== null && C.types !== null && (p.types = C.types),
        (le.T = p));
    }
  }
  function P2() {}
  function ff(e, t, n, a) {
    if (e.tag !== 5) throw Error(s(476));
    var i = ip(e).queue;
    rp(
      e,
      i,
      t,
      ye,
      n === null
        ? P2
        : function () {
            return (op(e), n(a));
          }
    );
  }
  function ip(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ye,
      baseState: ye,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: va,
        lastRenderedState: ye,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: va,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function op(e) {
    var t = ip(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Ji(e, t.next.queue, {}, cn()));
  }
  function df() {
    return Rt(Wr);
  }
  function sp() {
    return it().memoizedState;
  }
  function cp() {
    return it().memoizedState;
  }
  function Y2(e) {
    for (var t = e.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = cn();
          e = qa(n);
          var a = Ga(t, e, n);
          (a !== null && (Kt(a, t, n), Ii(a, t, n)),
            (t = { cache: Vu() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function k2(e, t, n) {
    var a = cn();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      As(e)
        ? fp(t, n)
        : ((n = _u(e, t, n, a)), n !== null && (Kt(n, e, a), dp(n, t, a))));
  }
  function up(e, t, n) {
    var a = cn();
    Ji(e, t, n, a);
  }
  function Ji(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (As(e)) fp(t, i);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var p = t.lastRenderedState,
            C = c(p, n);
          if (((i.hasEagerState = !0), (i.eagerState = C), an(C, p)))
            return (rs(e, t, i, 0), Je === null && ls(), !1);
        } catch {}
      if (((n = _u(e, t, i, a)), n !== null))
        return (Kt(n, e, a), dp(n, t, a), !0);
    }
    return !1;
  }
  function mf(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: ad(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      As(e))
    ) {
      if (t) throw Error(s(479));
    } else ((t = _u(e, n, a, 2)), t !== null && Kt(t, e, 2));
  }
  function As(e) {
    var t = e.alternate;
    return e === Ee || (t !== null && t === Ee);
  }
  function fp(e, t) {
    Mr = xs = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function dp(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), mh(e, n));
    }
  }
  var Os = {
      readContext: Rt,
      use: ws,
      useCallback: lt,
      useContext: lt,
      useEffect: lt,
      useImperativeHandle: lt,
      useLayoutEffect: lt,
      useInsertionEffect: lt,
      useMemo: lt,
      useReducer: lt,
      useRef: lt,
      useState: lt,
      useDebugValue: lt,
      useDeferredValue: lt,
      useTransition: lt,
      useSyncExternalStore: lt,
      useId: lt,
      useHostTransitionStatus: lt,
      useFormState: lt,
      useActionState: lt,
      useOptimistic: lt,
      useMemoCache: lt,
      useCacheRefresh: lt,
      useEffectEvent: lt,
    },
    mp = {
      readContext: Rt,
      use: ws,
      useCallback: function (e, t) {
        return ((Vt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Rt,
      useEffect: $0,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          Ns(4194308, 4, ep.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Ns(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Ns(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Vt();
        t = t === void 0 ? null : t;
        var a = e();
        if (Vl) {
          kt(!0);
          try {
            e();
          } finally {
            kt(!1);
          }
        }
        return ((n.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, n) {
        var a = Vt();
        if (n !== void 0) {
          var i = n(t);
          if (Vl) {
            kt(!0);
            try {
              n(t);
            } finally {
              kt(!1);
            }
          }
        } else i = t;
        return (
          (a.memoizedState = a.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (a.queue = e),
          (e = e.dispatch = k2.bind(null, Ee, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Vt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = rf(e);
        var t = e.queue,
          n = up.bind(null, Ee, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: cf,
      useDeferredValue: function (e, t) {
        var n = Vt();
        return uf(n, e, t);
      },
      useTransition: function () {
        var e = rf(!1);
        return (
          (e = rp.bind(null, Ee, e.queue, !0, !1)),
          (Vt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var a = Ee,
          i = Vt();
        if (Ne) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Je === null)) throw Error(s(349));
          (De & 127) !== 0 || z0(a, t, n);
        }
        i.memoizedState = n;
        var c = { value: n, getSnapshot: t };
        return (
          (i.queue = c),
          $0(L0.bind(null, a, c, e), [e]),
          (a.flags |= 2048),
          zr(9, { destroy: void 0 }, H0.bind(null, a, c, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Vt(),
          t = Je.identifierPrefix;
        if (Ne) {
          var n = Xn,
            a = Gn;
          ((n = (a & ~(1 << (32 - ke(a) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = Cs++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_"));
        } else ((n = H2++), (t = "_" + t + "r_" + n.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: df,
      useFormState: X0,
      useActionState: X0,
      useOptimistic: function (e) {
        var t = Vt();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = mf.bind(null, Ee, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: nf,
      useCacheRefresh: function () {
        return (Vt().memoizedState = Y2.bind(null, Ee));
      },
      useEffectEvent: function (e) {
        var t = Vt(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((qe & 2) !== 0) throw Error(s(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    hp = {
      readContext: Rt,
      use: ws,
      useCallback: np,
      useContext: Rt,
      useEffect: sf,
      useImperativeHandle: tp,
      useInsertionEffect: J0,
      useLayoutEffect: W0,
      useMemo: ap,
      useReducer: Ts,
      useRef: K0,
      useState: function () {
        return Ts(va);
      },
      useDebugValue: cf,
      useDeferredValue: function (e, t) {
        var n = it();
        return lp(n, $e.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ts(va)[0],
          t = it().memoizedState;
        return [typeof e == "boolean" ? e : Fi(e), t];
      },
      useSyncExternalStore: j0,
      useId: sp,
      useHostTransitionStatus: df,
      useFormState: I0,
      useActionState: I0,
      useOptimistic: function (e, t) {
        var n = it();
        return V0(n, $e, e, t);
      },
      useMemoCache: nf,
      useCacheRefresh: cp,
      useEffectEvent: F0,
    },
    q2 = {
      readContext: Rt,
      use: ws,
      useCallback: np,
      useContext: Rt,
      useEffect: sf,
      useImperativeHandle: tp,
      useInsertionEffect: J0,
      useLayoutEffect: W0,
      useMemo: ap,
      useReducer: lf,
      useRef: K0,
      useState: function () {
        return lf(va);
      },
      useDebugValue: cf,
      useDeferredValue: function (e, t) {
        var n = it();
        return $e === null ? uf(n, e, t) : lp(n, $e.memoizedState, e, t);
      },
      useTransition: function () {
        var e = lf(va)[0],
          t = it().memoizedState;
        return [typeof e == "boolean" ? e : Fi(e), t];
      },
      useSyncExternalStore: j0,
      useId: sp,
      useHostTransitionStatus: df,
      useFormState: Q0,
      useActionState: Q0,
      useOptimistic: function (e, t) {
        var n = it();
        return $e !== null
          ? V0(n, $e, e, t)
          : ((n.baseState = e), [e, n.queue.dispatch]);
      },
      useMemoCache: nf,
      useCacheRefresh: cp,
      useEffectEvent: F0,
    };
  function hf(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : U({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var pf = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = cn(),
        i = qa(a);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = Ga(e, i, a)),
        t !== null && (Kt(t, e, a), Ii(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = cn(),
        i = qa(a);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Ga(e, i, a)),
        t !== null && (Kt(t, e, a), Ii(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = cn(),
        a = qa(n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = Ga(e, a, n)),
        t !== null && (Kt(t, e, n), Ii(t, e, n)));
    },
  };
  function pp(e, t, n, a, i, c, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, c, p)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ui(n, a) || !Ui(i, c)
          : !0
    );
  }
  function vp(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && pf.enqueueReplaceState(t, t.state, null));
  }
  function Pl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t) a !== "ref" && (n[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = U({}, n));
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  function gp(e) {
    as(e);
  }
  function yp(e) {
    console.error(e);
  }
  function bp(e) {
    as(e);
  }
  function _s(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Sp(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function vf(e, t, n) {
    return (
      (n = qa(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        _s(e, t);
      }),
      n
    );
  }
  function xp(e) {
    return ((e = qa(e)), (e.tag = 3), e);
  }
  function Cp(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var c = a.value;
      ((e.payload = function () {
        return i(c);
      }),
        (e.callback = function () {
          Sp(t, n, a);
        }));
    }
    var p = n.stateNode;
    p !== null &&
      typeof p.componentDidCatch == "function" &&
      (e.callback = function () {
        (Sp(t, n, a),
          typeof i != "function" &&
            (Ja === null ? (Ja = new Set([this])) : Ja.add(this)));
        var C = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: C !== null ? C : "",
        });
      });
  }
  function G2(e, t, n, a, i) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && Ml(t, n, i, !0),
        (n = At.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return (
              Ht === null ? Fs() : n.alternate === null && rt === 0 && (rt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = i),
              a === vs
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  ed(e, a, i)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === vs
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  ed(e, a, i)),
              !1
            );
        }
        throw Error(s(435, n.tag));
      }
      return (ed(e, a, i), Fs(), !1);
    }
    if (Ne)
      return (
        (t = At.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            a !== Hu && ((e = Error(s(422), { cause: a })), Yi(yn(e, n))))
          : (a !== Hu && ((t = Error(s(423), { cause: a })), Yi(yn(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (a = yn(a, n)),
            (i = vf(e.stateNode, a, i)),
            Xu(e, i),
            rt !== 4 && (rt = 2)),
        !1
      );
    var c = Error(s(520), { cause: a });
    if (
      ((c = yn(c, n)),
      io === null ? (io = [c]) : io.push(c),
      rt !== 4 && (rt = 2),
      t === null)
    )
      return !0;
    ((a = yn(a, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = i & -i),
            (n.lanes |= e),
            (e = vf(n.stateNode, a, e)),
            Xu(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (c = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (Ja === null || !Ja.has(c)))))
          )
            return (
              (n.flags |= 65536),
              (i &= -i),
              (n.lanes |= i),
              (i = xp(i)),
              Cp(i, e, n, a),
              Xu(n, i),
              !1
            );
          break;
        case 22:
          if (n.memoizedState !== null) return ((n.flags |= 65536), !1);
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var gf = Error(s(461)),
    mt = !1;
  function gt(e, t, n, a) {
    t.child = e === null ? N0(t, null, n, a) : Ul(t, e.child, n, a);
  }
  function Ep(e, t, n, a, i) {
    n = n.render;
    var c = t.ref;
    if ("ref" in a) {
      var p = {};
      for (var C in a) C !== "ref" && (p[C] = a[C]);
    } else p = a;
    return (
      jl(t),
      (a = Ju(e, t, n, p, c, i)),
      (C = Wu()),
      e !== null && !mt
        ? (ef(e, t, i), ga(e, t, i))
        : (Ne && C && cs(t), (t.flags |= 1), gt(e, t, a, i), t.child)
    );
  }
  function wp(e, t, n, a, i) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" &&
        !Du(c) &&
        c.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = c), Tp(e, t, c, a, i))
        : ((e = os(n.type, null, a, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), !Tf(e, i))) {
      var p = c.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ui), n(p, a) && e.ref === t.ref)
      )
        return ga(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = fa(c, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Tp(e, t, n, a, i) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Ui(c, a) && e.ref === t.ref)
        if (((mt = !1), (t.pendingProps = a = c), Tf(e, i)))
          (e.flags & 131072) !== 0 && (mt = !0);
        else return ((t.lanes = e.lanes), ga(e, t, i));
    }
    return yf(e, t, n, a, i);
  }
  function Np(e, t, n, a) {
    var i = a.children,
      c = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((c = c !== null ? c.baseLanes | n : n), e !== null)) {
          for (a = t.child = e.child, i = 0; a !== null;)
            ((i = i | a.lanes | a.childLanes), (a = a.sibling));
          a = i & ~c;
        } else ((a = 0), (t.child = null));
        return Rp(e, t, c, n, a);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && hs(t, c !== null ? c.cachePool : null),
          c !== null ? O0(t, c) : Zu(),
          _0(t));
      else
        return (
          (a = t.lanes = 536870912),
          Rp(e, t, c !== null ? c.baseLanes | n : n, n, a)
        );
    } else
      c !== null
        ? (hs(t, c.cachePool), O0(t, c), Za(), (t.memoizedState = null))
        : (e !== null && hs(t, null), Zu(), Za());
    return (gt(e, t, i, n), t.child);
  }
  function Wi(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Rp(e, t, n, a, i) {
    var c = Yu();
    return (
      (c = c === null ? null : { parent: ft._currentValue, pool: c }),
      (t.memoizedState = { baseLanes: n, cachePool: c }),
      e !== null && hs(t, null),
      Zu(),
      _0(t),
      e !== null && Ml(e, t, a, !0),
      (t.childLanes = i),
      null
    );
  }
  function Ds(e, t) {
    return (
      (t = Ms({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Ap(e, t, n) {
    return (
      Ul(t, e.child, null, n),
      (e = Ds(t, t.pendingProps)),
      (e.flags |= 2),
      ln(t),
      (t.memoizedState = null),
      e
    );
  }
  function X2(e, t, n) {
    var a = t.pendingProps,
      i = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ne) {
        if (a.mode === "hidden")
          return (
            (e = Ds(t, a)),
            (t.lanes = 536870912),
            (e.memoizedState = { baseLanes: 0, cachePool: null }),
            Wi(null, e)
          );
        if (
          (Ku(t),
          (e = We)
            ? ((e = eg(e, xn)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Ba !== null ? { id: Gn, overflow: Xn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = f0(e)),
                (n.return = t),
                (t.child = n),
                (St = t),
                (We = null)))
            : (e = null),
          e === null)
        )
          throw Va(t);
        return ((t.lanes = 536870912), null);
      }
      return Ds(t, a);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var p = c.dehydrated;
      if ((Ku(t), i))
        if (t.flags & 256) ((t.flags &= -257), (t = Ap(e, t, n)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(s(558));
      else if (
        (mt || Ml(e, t, n, !1), (i = (n & e.childLanes) !== 0), mt || i)
      ) {
        if (Xa.current === null) {
          if (
            ((a = Je),
            a !== null && ((p = hh(a, n)), p !== 0 && p !== c.retryLane))
          )
            throw ((c.retryLane = p), Al(e, p), Kt(a, e, p), gf);
          Fs();
        }
        t = Ap(e, t, n);
      } else
        ((e = c.treeContext),
          (We = En(p.nextSibling)),
          (St = t),
          (Ne = !0),
          (Ua = null),
          (xn = !1),
          e !== null && h0(t, e),
          (t = Ds(t, a)),
          (t.flags |= 134221824));
      return t;
    }
    return (
      (e = fa(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Hr(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function yf(e, t, n, a, i) {
    return (
      jl(t),
      (n = Ju(e, t, n, a, void 0, i)),
      (a = Wu()),
      e !== null && !mt
        ? (ef(e, t, i), ga(e, t, i))
        : (Ne && a && cs(t), (t.flags |= 1), gt(e, t, n, i), t.child)
    );
  }
  function Op(e, t, n, a, i, c) {
    return (
      jl(t),
      (t.updateQueue = null),
      (n = M0(t, a, n, i)),
      D0(e),
      (a = Wu()),
      e !== null && !mt
        ? (ef(e, t, c), ga(e, t, c))
        : (Ne && a && cs(t), (t.flags |= 1), gt(e, t, n, c), t.child)
    );
  }
  function _p(e, t, n, a, i) {
    if ((jl(t), t.stateNode === null)) {
      var c = Tr,
        p = n.contextType;
      (typeof p == "object" && p !== null && (c = Rt(p)),
        (c = new n(a, c)),
        (t.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = pf),
        (t.stateNode = c),
        (c._reactInternals = t),
        (c = t.stateNode),
        (c.props = a),
        (c.state = t.memoizedState),
        (c.refs = {}),
        qu(t),
        (p = n.contextType),
        (c.context = typeof p == "object" && p !== null ? Rt(p) : Tr),
        (c.state = t.memoizedState),
        (p = n.getDerivedStateFromProps),
        typeof p == "function" && (hf(t, n, p, a), (c.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((p = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          p !== c.state && pf.enqueueReplaceState(c, c.state, null),
          Qi(t, a, c, i),
          Zi(),
          (c.state = t.memoizedState)),
        typeof c.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      c = t.stateNode;
      var C = t.memoizedProps,
        A = Pl(n, C);
      c.props = A;
      var L = c.context,
        Y = n.contextType;
      ((p = Tr), typeof Y == "object" && Y !== null && (p = Rt(Y)));
      var Z = n.getDerivedStateFromProps;
      ((Y =
        typeof Z == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (C = t.pendingProps !== C),
        Y ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((C || L !== p) && vp(t, c, a, p)),
        (ka = !1));
      var z = t.memoizedState;
      ((c.state = z),
        Qi(t, a, c, i),
        Zi(),
        (L = t.memoizedState),
        C || z !== L || ka
          ? (typeof Z == "function" && (hf(t, n, Z, a), (L = t.memoizedState)),
            (A = ka || pp(t, n, A, a, z, L, p))
              ? (Y ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = L)),
            (c.props = a),
            (c.state = L),
            (c.context = p),
            (a = A))
          : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((c = t.stateNode),
        Gu(e, t),
        (p = t.memoizedProps),
        (Y = Pl(n, p)),
        (c.props = Y),
        (Z = t.pendingProps),
        (z = c.context),
        (L = n.contextType),
        (A = Tr),
        typeof L == "object" && L !== null && (A = Rt(L)),
        (C = n.getDerivedStateFromProps),
        (L =
          typeof C == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((p !== Z || z !== A) && vp(t, c, a, A)),
        (ka = !1),
        (z = t.memoizedState),
        (c.state = z),
        Qi(t, a, c, i),
        Zi());
      var V = t.memoizedState;
      p !== Z ||
      z !== V ||
      ka ||
      (e !== null && e.dependencies !== null && ds(e.dependencies))
        ? (typeof C == "function" && (hf(t, n, C, a), (V = t.memoizedState)),
          (Y =
            ka ||
            pp(t, n, Y, a, z, V, A) ||
            (e !== null && e.dependencies !== null && ds(e.dependencies)))
            ? (L ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(a, V, A),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(a, V, A)),
              typeof c.componentDidUpdate == "function" && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (p === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = V)),
          (c.props = a),
          (c.state = V),
          (c.context = A),
          (a = Y))
        : (typeof c.componentDidUpdate != "function" ||
            (p === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (c = a),
      Hr(e, t),
      (a = (t.flags & 128) !== 0),
      c || a
        ? ((c = t.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = Ul(t, e.child, null, i)),
              (t.child = Ul(t, null, n, i)))
            : gt(e, t, n, i),
          (t.memoizedState = c.state),
          (e = t.child))
        : (e = ga(e, t, i)),
      e
    );
  }
  function Dp(e, t, n, a) {
    return (_l(), (t.flags |= 256), gt(e, t, n, a), t.child);
  }
  var bf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Sf(e) {
    return { baseLanes: e, cachePool: S0() };
  }
  function xf(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= sn), e);
  }
  function Mp(e, t, n) {
    var a = t.pendingProps,
      i = !1,
      c = (t.flags & 128) !== 0,
      p;
    if (
      ((p = c) ||
        (p =
          e !== null && e.memoizedState === null ? !1 : (Ot.current & 2) !== 0),
      p && ((i = !0), (t.flags &= -129)),
      (p = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ne) {
        if (
          (i ? Ia(t) : Za(),
          (e = We)
            ? ((e = eg(e, xn)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Ba !== null ? { id: Gn, overflow: Xn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = f0(e)),
                (n.return = t),
                (t.child = n),
                (St = t),
                (We = null)))
            : (e = null),
          e === null)
        )
          throw Va(t);
        return (Sd(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      return (
        (c = a.children),
        (a = a.fallback),
        i
          ? (Za(),
            (i = t.mode),
            (c = Ms({ mode: "hidden", children: c }, i)),
            (a = Ol(a, i, n, null)),
            (c.return = t),
            (a.return = t),
            (c.sibling = a),
            (t.child = c),
            (a = t.child),
            (a.memoizedState = Sf(n)),
            (a.childLanes = xf(e, p, n)),
            (t.memoizedState = bf),
            Wi(null, a))
          : (Ia(t), Cf(t, c))
      );
    }
    var C = e.memoizedState;
    if (C !== null) {
      var A = C.dehydrated;
      if (A !== null) return I2(e, t, c, p, a, A, C, n);
    }
    return i
      ? (Za(),
        (i = a.fallback),
        (c = t.mode),
        (C = e.child),
        (A = C.sibling),
        (a = fa(C, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = C.subtreeFlags & 1206910976),
        A !== null ? (i = fa(A, i)) : ((i = Ol(i, c, n, null)), (i.flags |= 2)),
        (i.return = t),
        (a.return = t),
        (a.sibling = i),
        (t.child = a),
        Wi(null, a),
        (a = t.child),
        (i = e.child.memoizedState),
        i === null
          ? (i = Sf(n))
          : ((c = i.cachePool),
            c !== null
              ? ((C = ft._currentValue),
                (c = c.parent !== C ? { parent: C, pool: C } : c))
              : (c = S0()),
            (i = { baseLanes: i.baseLanes | n, cachePool: c })),
        (a.memoizedState = i),
        (a.childLanes = xf(e, p, n)),
        (t.memoizedState = bf),
        Wi(e.child, a))
      : (Ia(t),
        (n = e.child),
        (e = n.sibling),
        (n = fa(n, { mode: "visible", children: a.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((p = t.deletions),
          p === null ? ((t.deletions = [e]), (t.flags |= 16)) : p.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Cf(e, t) {
    return (
      (t = Ms({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ms(e, t) {
    return ((e = Xt(22, e, null, t)), (e.lanes = 0), e);
  }
  function js(e, t, n) {
    return (
      Ul(t, e.child, null, n),
      (e = Cf(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function I2(e, t, n, a, i, c, p, C) {
    if (n)
      return t.flags & 256
        ? (Ia(t), (t.flags &= -257), js(e, t, C))
        : t.memoizedState !== null
          ? (Za(), (t.child = e.child), (t.flags |= 128), null)
          : (Za(),
            (c = i.fallback),
            (p = t.mode),
            (i = Ms({ mode: "visible", children: i.children }, p)),
            (c = Ol(c, p, C, null)),
            (c.flags |= 2),
            (i.return = t),
            (c.return = t),
            (i.sibling = c),
            (t.child = i),
            Ul(t, e.child, null, C),
            (i = t.child),
            (i.memoizedState = Sf(C)),
            (i.childLanes = xf(e, a, C)),
            (t.memoizedState = bf),
            Wi(null, i));
    if ((Ia(t), Sd(c))) {
      if (((a = c.nextSibling && c.nextSibling.dataset), a)) var A = a.dgst;
      return (
        (a = A),
        a !== "" &&
          ((i = Error(s(419))),
          (i.stack = ""),
          (i.digest = a),
          Yi({ value: i, source: null, stack: null })),
        js(e, t, C)
      );
    }
    if ((mt || Ml(e, t, C, !1), (a = (C & e.childLanes) !== 0), mt || a)) {
      if (Xa.current !== null) return js(e, t, C);
      if (
        ((a = Je), a !== null && ((i = hh(a, C)), i !== 0 && i !== p.retryLane))
      )
        throw ((p.retryLane = i), Al(e, i), Kt(a, e, i), gf);
      return (bd(c) || Fs(), js(e, t, C));
    }
    return bd(c)
      ? ((t.flags |= 192), (t.child = e.child), null)
      : ((e = p.treeContext),
        (We = En(c.nextSibling)),
        (St = t),
        (Ne = !0),
        (Ua = null),
        (xn = !1),
        e !== null && h0(t, e),
        (t = Cf(t, i.children)),
        (t.flags |= 134221824),
        t);
  }
  function jp(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), fs(e.return, t, n));
  }
  function zp(e) {
    for (var t = null; e !== null;) {
      var n = e.alternate;
      (n !== null && Ss(n) === null && (t = e), (e = e.sibling));
    }
    return t;
  }
  function zs(e, t, n, a, i, c) {
    var p = e.memoizedState;
    p === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: i,
          treeForkCount: c,
        })
      : ((p.isBackwards = t),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = a),
        (p.tail = n),
        (p.tailMode = i),
        (p.treeForkCount = c));
  }
  function Ef(e) {
    var t = e.child;
    for (e.child = null; t !== null;) {
      var n = t.sibling;
      ((t.sibling = e.child), (e.child = t), (t = n));
    }
  }
  function wf(e, t, n) {
    var a = t.pendingProps,
      i = a.revealOrder,
      c = a.tail;
    a = a.children;
    var p = Ot.current;
    if (t.flags & 128) return (Ki(t, p), null);
    var C = (p & 2) !== 0;
    if (
      (C ? ((p = (p & 1) | 2), (t.flags |= 128)) : (p &= 1),
      Ki(t, p),
      i === "backwards" && e !== null
        ? (Ef(e), gt(e, t, a, n), Ef(e))
        : gt(e, t, a, n),
      (a = Ne ? Pi : 0),
      !C && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && jp(e, n, t);
        else if (e.tag === 19) jp(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (i) {
      case "backwards":
        ((n = zp(t.child)),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null), Ef(t)),
          zs(t, !0, i, null, c, a));
        break;
      case "unstable_legacy-backwards":
        for (n = null, i = t.child, t.child = null; i !== null;) {
          if (((e = i.alternate), e !== null && Ss(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        zs(t, !0, n, null, c, a);
        break;
      case "together":
        zs(t, !1, null, null, void 0, a);
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        ((n = zp(t.child)),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          zs(t, !1, i, n, c, a));
    }
    return t.child;
  }
  function Hp(e, t, n) {
    var a = t.pendingProps;
    return (Pa(t, t.type, a.value), gt(e, t, a.children, n), t.child);
  }
  function ga(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Fa |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Ml(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, n = fa(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = fa(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Tf(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ds(e)));
  }
  function Z2(e, t, n) {
    switch (t.tag) {
      case 3:
        (xl(t, t.stateNode.containerInfo),
          Pa(t, ft, e.memoizedState.cache),
          _l());
        break;
      case 27:
      case 5:
        Si(t);
        break;
      case 4:
        xl(t, t.stateNode.containerInfo);
        break;
      case 10:
        Pa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Ku(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null) return (Ia(t), (t.flags |= 128), null);
          a = Ml(e, t, n, !1);
          var i = t.child.childLanes;
          return a || (n & i) !== 0
            ? Mp(e, t, n)
            : (Ia(t), (e = ga(e, t, n)), e !== null ? e.sibling : null);
        }
        Ia(t);
        break;
      case 19:
        if (t.flags & 128) return wf(e, t, n);
        if (
          ((i = (e.flags & 128) !== 0),
          (a = (n & t.childLanes) !== 0),
          a || (Ml(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          i)
        ) {
          if (a) return wf(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          Ki(t, Ot.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Np(e, t, n, t.pendingProps));
      case 24:
        Pa(t, ft, e.memoizedState.cache);
    }
    return ga(e, t, n);
  }
  function Lp(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) mt = !0;
      else {
        if (!Tf(e, n) && (t.flags & 128) === 0) return ((mt = !1), Z2(e, t, n));
        mt = (e.flags & 131072) !== 0;
      }
    else ((mt = !1), Ne && (t.flags & 1048576) !== 0 && m0(t, Pi, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Ll(t.elementType)), (t.type = e), typeof e == "function"))
            Du(e)
              ? ((a = Pl(e, a)), (t.tag = 1), (t = _p(null, t, e, a, n)))
              : ((t.tag = 0), (t = yf(null, t, e, a, n)));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === k) {
                ((t.tag = 11), (t = Ep(null, t, e, a, n)));
                break e;
              } else if (i === ae) {
                ((t.tag = 14), (t = wp(null, t, e, a, n)));
                break e;
              } else if (i === pe) {
                ((t.tag = 10), (t.type = e), (t = Hp(null, t, n)));
                break e;
              }
            }
            throw ((t = ce(e) || e), Error(s(306, t, "")));
          }
        }
        return t;
      case 0:
        return yf(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((a = t.type), (i = Pl(a, t.pendingProps)), _p(e, t, a, i, n));
      case 3:
        e: {
          if ((xl(t, t.stateNode.containerInfo), e === null))
            throw Error(s(387));
          a = t.pendingProps;
          var c = t.memoizedState;
          ((i = c.element), Gu(e, t), Qi(t, a, null, n));
          var p = t.memoizedState;
          if (
            ((a = p.cache),
            Pa(t, ft, a),
            a !== c.cache && Uu(t, [ft], n, !0),
            Zi(),
            (a = p.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: a, isDehydrated: !1, cache: p.cache }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              t = Dp(e, t, a, n);
              break e;
            } else if (a !== i) {
              ((i = yn(Error(s(424)), t)), Yi(i), (t = Dp(e, t, a, n)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  We = En(e.firstChild),
                  St = t,
                  Ne = !0,
                  Ua = null,
                  xn = !0,
                  n = N0(t, null, a, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 134221824), (n = n.sibling));
          else {
            if ((_l(), a === i)) {
              t = ga(e, t, n);
              break e;
            }
            gt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Hr(e, t),
          e === null
            ? (n = og(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Ne || (t.stateNode = Pv(t.type, t.pendingProps, Yn.current, t))
            : (t.memoizedState = og(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Si(t),
          e === null &&
            Ne &&
            ((a = t.stateNode = ag(t.type, t.pendingProps, Yn.current)),
            (St = t),
            (xn = !0),
            (i = We),
            tl(t.type) ? ((xd = i), (We = En(a.firstChild))) : (We = i)),
          gt(e, t, t.pendingProps.children, n),
          Hr(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ne &&
            ((i = a = We) &&
              ((a = Yx(a, t.type, t.pendingProps, xn)),
              a !== null
                ? ((t.stateNode = a),
                  (St = t),
                  (We = En(a.firstChild)),
                  (xn = !1),
                  (i = !0))
                : (i = !1)),
            i || Va(t)),
          Si(t),
          (i = t.type),
          (c = t.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (a = c.children),
          dd(i, c) ? (a = null) : p !== null && dd(i, p) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = Ju(e, t, L2, null, null, n)), (Wr._currentValue = i)),
          Hr(e, t),
          gt(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ne &&
            ((e = n = We) &&
              ((n = kx(n, t.pendingProps, xn)),
              n !== null
                ? ((t.stateNode = n), (St = t), (We = null), (e = !0))
                : (e = !1)),
            e || Va(t)),
          null
        );
      case 13:
        return Mp(e, t, n);
      case 4:
        return (
          xl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Ul(t, null, a, n)) : gt(e, t, a, n),
          t.child
        );
      case 11:
        return Ep(e, t, t.type, t.pendingProps, n);
      case 7:
        return ((a = t.pendingProps), Hr(e, t), gt(e, t, a, n), t.child);
      case 8:
        return (gt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (gt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return Hp(e, t, n);
      case 9:
        return (
          (i = t.type._context),
          (a = t.pendingProps.children),
          jl(t),
          (i = Rt(i)),
          (a = a(i)),
          (t.flags |= 1),
          gt(e, t, a, n),
          t.child
        );
      case 14:
        return wp(e, t, t.type, t.pendingProps, n);
      case 15:
        return Tp(e, t, t.type, t.pendingProps, n);
      case 19:
        return wf(e, t, n);
      case 31:
        return X2(e, t, n);
      case 22:
        return Np(e, t, n, t.pendingProps);
      case 24:
        return (
          jl(t),
          (a = Rt(ft)),
          e === null
            ? ((i = Yu()),
              i === null &&
                ((i = Je),
                (c = Vu()),
                (i.pooledCache = c),
                c.refCount++,
                c !== null && (i.pooledCacheLanes |= n),
                (i = c)),
              (t.memoizedState = { parent: a, cache: i }),
              qu(t),
              Pa(t, ft, i))
            : ((e.lanes & n) !== 0 && (Gu(e, t), Qi(t, null, null, n), Zi()),
              (i = e.memoizedState),
              (c = t.memoizedState),
              i.parent !== a
                ? ((i = { parent: a, cache: a }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  Pa(t, ft, a))
                : ((a = c.cache),
                  Pa(t, ft, a),
                  a !== i.cache && Uu(t, [ft], n, !0))),
          gt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 30:
        return (
          t.stateNode === null &&
            (t.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
          (a = t.pendingProps),
          a.name != null && a.name !== "auto"
            ? (t.flags |= e === null ? 18882560 : 18874368)
            : Ne && cs(t),
          e !== null && e.memoizedProps.name !== a.name
            ? (t.flags |= 4194816)
            : Hr(e, t),
          gt(e, t, a.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function ya(e) {
    e.flags |= 4;
  }
  function Nf(e, t, n, a, i) {
    var c;
    if (
      ((c = (e.mode & 32) !== 0) &&
        (c =
          n === null
            ? fg(t, a)
            : fg(t, a) && (a.src !== n.src || a.srcSet !== n.srcSet)),
      c)
    ) {
      if (((e.flags |= 16777216), (i & 335544128) === i))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (gv()) e.flags |= 8192;
        else throw ((Bl = vs), ku);
    } else e.flags &= -16777217;
  }
  function Bp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !dg(t)))
      if (gv()) e.flags |= 8192;
      else throw ((Bl = vs), ku);
  }
  function Hs(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? fh() : 536870912), (e.lanes |= t), (Pr |= t)));
  }
  function eo(e, t) {
    if (!Ne)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = e.tail, a = null; n !== null;)
            (n.alternate !== null && (a = n), (n = n.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
          break;
        default:
          for (t = e.tail, n = null; t !== null;)
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
      }
  }
  function et(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      a = 0;
    if (t)
      for (var i = e.child; i !== null;)
        ((n |= i.lanes | i.childLanes),
          (a |= i.subtreeFlags & 1206910976),
          (a |= i.flags & 1206910976),
          (i.return = e),
          (i = i.sibling));
    else
      for (i = e.child; i !== null;)
        ((n |= i.lanes | i.childLanes),
          (a |= i.subtreeFlags),
          (a |= i.flags),
          (i.return = e),
          (i = i.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = n), t);
  }
  function Q2(e, t, n) {
    var a = t.pendingProps;
    switch ((zu(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (et(t), null);
      case 1:
        return (et(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          ha(ft),
          tn(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ar(t)
              ? ya(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Lu())),
          et(t),
          null
        );
      case 26:
        var i = t.type,
          c = t.memoizedState;
        return (
          e === null
            ? (ya(t),
              c !== null ? (et(t), Bp(t, c)) : (et(t), Nf(t, i, null, a, n)))
            : c
              ? c !== e.memoizedState
                ? (ya(t), et(t), Bp(t, c))
                : (et(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== a && ya(t),
                et(t),
                Nf(t, i, e, a, n)),
          null
        );
      case 27:
        if (
          (ur(t),
          (n = Yn.current),
          (i = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && ya(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return (et(t), (t.subtreeFlags &= -33554433), null);
          }
          ((e = st.current),
            Ar(t) ? p0(t) : ((e = ag(i, a, n)), (t.stateNode = e), ya(t)));
        }
        return (et(t), (t.subtreeFlags &= -33554433), null);
      case 5:
        if ((ur(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && ya(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return (et(t), (t.subtreeFlags &= -33554433), null);
          }
          if (((c = st.current), Ar(t))) p0(t);
          else {
            var p = fo(Yn.current);
            switch (c) {
              case 1:
                c = p.createElementNS("http://www.w3.org/2000/svg", i);
                break;
              case 2:
                c = p.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                break;
              default:
                switch (i) {
                  case "svg":
                    c = p.createElementNS("http://www.w3.org/2000/svg", i);
                    break;
                  case "math":
                    c = p.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    ((c = p.createElement("div")),
                      (c.innerHTML = "<script><\/script>"),
                      (c = c.removeChild(c.firstChild)));
                    break;
                  case "select":
                    ((c =
                      typeof a.is == "string"
                        ? p.createElement("select", { is: a.is })
                        : p.createElement("select")),
                      a.multiple
                        ? (c.multiple = !0)
                        : a.size && (c.size = a.size));
                    break;
                  default:
                    c =
                      typeof a.is == "string"
                        ? p.createElement(i, { is: a.is })
                        : p.createElement(i);
                }
            }
            ((c[Nt] = t), (c[Gt] = a));
            e: for (p = t.child; p !== null;) {
              if (p.tag === 5 || p.tag === 6) c.appendChild(p.stateNode);
              else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                ((p.child.return = p), (p = p.child));
                continue;
              }
              if (p === t) break e;
              for (; p.sibling === null;) {
                if (p.return === null || p.return === t) break e;
                p = p.return;
              }
              ((p.sibling.return = p.return), (p = p.sibling));
            }
            t.stateNode = c;
            e: switch ((Dt(c, i, a), i)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && ya(t);
          }
        }
        return (
          et(t),
          (t.subtreeFlags &= -33554433),
          Nf(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && ya(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
          if (((e = Yn.current), Ar(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (a = null),
              (i = St),
              i !== null)
            )
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            ((e[Nt] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Lv(e.nodeValue, n)
              )),
              e || Va(t, !0));
          } else
            ((e = fo(e).createTextNode(a)), (e[Nt] = t), (t.stateNode = e));
        }
        return (et(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = Ar(t)), n !== null)) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(s(557));
              e[Nt] = t;
            } else
              (_l(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (et(t), (e = !1));
          } else
            ((n = Lu()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (ln(t), t) : (ln(t), null);
          if ((t.flags & 128) !== 0) throw Error(s(558));
        }
        return (et(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = Ar(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(s(317));
              i[Nt] = t;
            } else
              (_l(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (et(t), (i = !1));
          } else
            ((i = Lu()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (i = !0));
          if (!i) return t.flags & 256 ? (ln(t), t) : (ln(t), null);
        }
        return (
          ln(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = a !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((a = t.child),
                (i = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (i = a.alternate.memoizedState.cachePool.pool),
                (c = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (c = a.memoizedState.cachePool.pool),
                c !== i && (a.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              Hs(t, t.updateQueue),
              et(t),
              null)
        );
      case 4:
        return (
          tn(),
          e === null && od(t.stateNode.containerInfo),
          (t.flags |= 67108864),
          et(t),
          null
        );
      case 10:
        return (ha(t.type), et(t), null);
      case 19:
        if (($u(t), (a = t.memoizedState), a === null)) return (et(t), null);
        if (((i = (t.flags & 128) !== 0), (c = a.rendering), c === null))
          if (i) eo(a, !1);
          else {
            if (rt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((c = Ss(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      eo(a, !1),
                      e = c.updateQueue,
                      t.updateQueue = e,
                      Hs(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (u0(n, e), (n = n.sibling));
                  return (
                    Ki(t, (Ot.current & 1) | 2),
                    Ne && da(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              Lt() > Zs &&
              ((t.flags |= 128), (i = !0), eo(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = Ss(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Hs(t, e),
                eo(a, !0),
                a.tail === null &&
                  a.tailMode !== "collapsed" &&
                  a.tailMode !== "visible" &&
                  !c.alternate &&
                  !Ne)
              )
                return (et(t), null);
            } else
              2 * Lt() - a.renderingStartTime > Zs &&
                n !== 536870912 &&
                ((t.flags |= 128), (i = !0), eo(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((e = a.last),
              e !== null ? (e.sibling = c) : (t.child = c),
              (a.last = c));
        }
        if (a.tail !== null) {
          e = a.tail;
          e: {
            for (n = e; n !== null;) {
              if (n.alternate !== null) {
                n = !1;
                break e;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return (
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = Lt()),
            (e.sibling = null),
            (c = Ot.current),
            (c = i ? (c & 1) | 2 : c & 1),
            a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Ne
              ? Ki(t, c)
              : ((n = c), Be(At, t), Be(Ot, n), Ht === null && (Ht = t)),
            Ne && da(t, a.treeForkCount),
            e
          );
        }
        return (et(t), null);
      case 22:
      case 23:
        return (
          ln(t),
          Qu(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (et(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : et(t),
          (n = t.updateQueue),
          n !== null && Hs(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== n && (t.flags |= 2048),
          e !== null && Fe(Hl),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          ha(ft),
          et(t),
          null
        );
      case 25:
        return null;
      case 30:
        return ((t.flags |= 33554432), et(t), null);
    }
    throw Error(s(156, t.tag));
  }
  function K2(e, t) {
    switch ((zu(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          ha(ft),
          tn(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (ur(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((ln(t), t.alternate === null)) throw Error(s(340));
          _l();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (ln(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          _l();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (
          $u(t),
          (e = t.flags),
          e & 65536
            ? ((t.flags = (e & -65537) | 128),
              (e = t.memoizedState),
              e !== null && ((e.rendering = null), (e.tail = null)),
              (t.flags |= 4),
              t)
            : null
        );
      case 4:
        return (tn(), null);
      case 10:
        return (ha(t.type), null);
      case 22:
      case 23:
        return (
          ln(t),
          Qu(),
          e !== null && Fe(Hl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (ha(ft), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Up(e, t) {
    switch ((zu(t), t.tag)) {
      case 3:
        (ha(ft), tn());
        break;
      case 26:
      case 27:
      case 5:
        ur(t);
        break;
      case 4:
        tn();
        break;
      case 31:
        t.memoizedState !== null && ln(t);
        break;
      case 13:
        ln(t);
        break;
      case 19:
        $u(t);
        break;
      case 10:
        ha(t.type);
        break;
      case 22:
      case 23:
        (ln(t), Qu(), e !== null && Fe(Hl));
        break;
      case 24:
        ha(ft);
    }
  }
  function to(e, t) {
    try {
      var n = t.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var c = n.create,
              p = n.inst;
            ((a = c()), (p.destroy = a));
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (C) {
      Ze(t, t.return, C);
    }
  }
  function Qa(e, t, n) {
    try {
      var a = t.updateQueue,
        i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var c = i.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            var p = a.inst,
              C = p.destroy;
            if (C !== void 0) {
              ((p.destroy = void 0), (i = t));
              var A = n,
                L = C;
              try {
                L();
              } catch (Y) {
                Ze(i, A, Y);
              }
            }
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (Y) {
      Ze(t, t.return, Y);
    }
  }
  function Vp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        A0(t, n);
      } catch (a) {
        Ze(e, e.return, a);
      }
    }
  }
  function Pp(e, t, n) {
    ((n.props = Pl(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      Ze(e, t, a);
    }
  }
  function In(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            var i = e.stateNode,
              c = ca(e.memoizedProps, i);
            ((i.ref === null || i.ref.name !== c) && (i.ref = Zv(c)),
              (a = i.ref));
            break;
          case 7:
            if (e.stateNode === null) {
              var p = new un(e);
              (h(e.child, !1, Vx, p, void 0, void 0), (e.stateNode = p));
            }
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(a)) : (n.current = a);
      }
    } catch (C) {
      Ze(e, t, C);
    }
  }
  function _t(e, t) {
    var n = e.ref,
      a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (i) {
          Ze(e, t, i);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          Ze(e, t, i);
        }
      else n.current = null;
  }
  function Ls(e, t) {
    if (
      (e.tag === 5 || e.tag === 27 || e.tag === 6) &&
      e.alternate === null &&
      t !== null
    )
      for (var n = 0; n < t.length; n++) Wv(e.stateNode, t[n]);
  }
  function Yp(e) {
    for (
      var t = e.return;
      t !== null && (Af(t) && Wv(e.stateNode, t.stateNode), !Rf(t));
    )
      t = t.return;
  }
  function no(e) {
    for (
      var t = e.return;
      t !== null && (Af(t) && Px(e.stateNode, t.stateNode), !Rf(t));
    )
      t = t.return;
  }
  function Rf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function Af(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function Of(e) {
    var t = e.type,
      n = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break e;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (i) {
      Ze(e, e.return, i);
    }
  }
  function _f(e, t, n) {
    try {
      var a = e.stateNode;
      (xx(a, e.type, n, t), (a[Gt] = t));
    } catch (i) {
      Ze(e, e.return, i);
    }
  }
  function kp(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && tl(e.type)) ||
      e.tag === 4
    );
  }
  function Df(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || kp(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && tl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Mf(e, t, n, a) {
    var i = e.tag;
    if (i === 5 || i === 6)
      ((i = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(i, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(i),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = qn)),
        Ls(e, a),
        (Pe = !0));
    else if (
      i !== 4 &&
      (i === 27 &&
        (Ls(e, a), (a = null), tl(e.type) && ((n = e.stateNode), (t = null))),
      (e = e.child),
      e !== null)
    )
      for (Mf(e, t, n, a), e = e.sibling; e !== null;)
        (Mf(e, t, n, a), (e = e.sibling));
  }
  function Bs(e, t, n, a) {
    var i = e.tag;
    if (i === 5 || i === 6)
      ((i = e.stateNode),
        t ? n.insertBefore(i, t) : n.appendChild(i),
        Ls(e, a),
        (Pe = !0));
    else if (
      i !== 4 &&
      (i === 27 && (Ls(e, a), (a = null), tl(e.type) && (n = e.stateNode)),
      (e = e.child),
      e !== null)
    )
      for (Bs(e, t, n, a), e = e.sibling; e !== null;)
        (Bs(e, t, n, a), (e = e.sibling));
  }
  function qp(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length;)
        t.removeAttributeNode(i[0]);
      (Dt(t, a, n), (t[Nt] = e), (t[Gt] = n));
    } catch (c) {
      Ze(e, e.return, c);
    }
  }
  var Us = !1,
    rn = null;
  function Gp(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (Us = !0);
  }
  var Zn = null;
  function Xp() {
    var e = Zn;
    return ((Zn = null), e);
  }
  var It = 0;
  function Lr(e, t, n, a, i) {
    return ((It = 0), Ip(e.child, t, n, a, i));
  }
  function Ip(e, t, n, a, i) {
    for (var c = !1; e !== null;) {
      if (e.tag === 5) {
        var p = e.stateNode;
        if (a !== null) {
          var C = pd(p);
          (a.push(C), C.view && (c = !0));
        } else c || (pd(p).view && (c = !0));
        ((Us = !0), Xv(p, It === 0 ? t : t + "_" + It, n), It++);
      } else
        (e.tag !== 22 || e.memoizedState === null) &&
          ((e.tag === 30 && i) || (Ip(e.child, t, n, a, i) && (c = !0)));
      e = e.sibling;
    }
    return c;
  }
  function Qn(e, t) {
    for (; e !== null;)
      (e.tag === 5
        ? Iv(e.stateNode, e.memoizedProps)
        : (e.tag !== 22 || e.memoizedState === null) &&
          ((e.tag === 30 && t) || Qn(e.child, t)),
        (e = e.sibling));
  }
  function Vs(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null;) {
        if (
          (e.tag !== 22 || e.memoizedState === null) &&
          (Vs(e),
          e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)
        ) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto") throw Error(s(544));
          var n = t.name;
          ((t = ua(t.default, t.share)),
            t !== "none" && (Lr(e, n, t, null, !1) || Qn(e.child, !1)));
        }
        e = e.sibling;
      }
  }
  function jf(e, t) {
    if (e.tag === 30) {
      var n = e.stateNode,
        a = e.memoizedProps,
        i = ca(a, n),
        c = ua(a.default, n.paired ? a.share : a.enter);
      c !== "none"
        ? Lr(e, i, c, null, !1)
          ? (Vs(e), n.paired || t || Gr(e, a.onEnter))
          : Qn(e.child, !1)
        : Vs(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null;) (jf(e, t), (e = e.sibling));
    else Vs(e);
  }
  function zf(e) {
    if (rn !== null && rn.size !== 0) {
      var t = rn;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null;) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var n = e.memoizedProps,
                a = n.name;
              if (a != null && a !== "auto") {
                var i = t.get(a);
                if (i !== void 0) {
                  var c = ua(n.default, n.share);
                  if (
                    (c !== "none" &&
                      (Lr(e, a, c, null, !1)
                        ? ((c = e.stateNode),
                          (i.paired = c),
                          (c.paired = i),
                          Gr(e, n.onShare))
                        : Qn(e.child, !1)),
                    t.delete(a),
                    t.size === 0)
                  )
                    break;
                }
              }
            }
            zf(e);
          }
          e = e.sibling;
        }
    }
  }
  function Hf(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps,
        n = ca(t, e.stateNode),
        a = rn !== null ? rn.get(n) : void 0,
        i = ua(t.default, a !== void 0 ? t.share : t.exit);
      (i !== "none" &&
        (Lr(e, n, i, null, !1)
          ? a !== void 0
            ? ((i = e.stateNode),
              (a.paired = i),
              (i.paired = a),
              rn.delete(n),
              Gr(e, t.onShare))
            : Gr(e, t.onExit)
          : Qn(e.child, !1)),
        rn !== null && zf(e));
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null;) (Hf(e), (e = e.sibling));
    else rn !== null && zf(e);
  }
  function Zp(e) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        var t = e.memoizedProps,
          n = ca(t, e.stateNode);
        ((t = ua(t.default, t.update)),
          (e.flags &= -5),
          t !== "none" && Lr(e, n, t, (e.memoizedState = []), !1));
      } else (e.subtreeFlags & 33554432) !== 0 && Zp(e);
      e = e.sibling;
    }
  }
  function Lf(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null;) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && ((t.paired = null), Qn(e.child, !1));
          }
          Lf(e);
        }
        e = e.sibling;
      }
  }
  function Ps(e) {
    if (e.tag === 30) ((e.stateNode.paired = null), Qn(e.child, !1), Lf(e));
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null;) (Ps(e), (e = e.sibling));
    else Lf(e);
  }
  function Qp(e) {
    for (e = e.child; e !== null;)
      (e.tag === 30
        ? Qn(e.child, !1)
        : (e.subtreeFlags & 33554432) !== 0 && Qp(e),
        (e = e.sibling));
  }
  function Bf(e, t, n, a, i, c, p) {
    for (var C = !1; t !== null;) {
      if (t.tag === 5) {
        var A = t.stateNode;
        if (c !== null && It < c.length) {
          var L = c[It],
            Y = pd(A);
          (L.view || Y.view) && (C = !0);
          var Z;
          if ((Z = (e.flags & 4) === 0))
            if (Y.clip) Z = !0;
            else {
              Z = L.rect;
              var z = Y.rect;
              Z =
                Z.y !== z.y ||
                Z.x !== z.x ||
                Z.height !== z.height ||
                Z.width !== z.width;
            }
          (Z && (e.flags |= 4),
            Y.abs
              ? (Y = !L.abs)
              : ((L = L.rect),
                (Y = Y.rect),
                (Y = L.height !== Y.height || L.width !== Y.width)),
            Y && (e.flags |= 32));
        } else e.flags |= 32;
        ((e.flags & 4) !== 0 && Xv(A, It === 0 ? n : n + "_" + It, i),
          (C && (e.flags & 4) !== 0) ||
            (Zn === null && (Zn = []),
            Zn.push(A, It === 0 ? a : a + "_" + It, t.memoizedProps)),
          It++);
      } else
        (t.tag !== 22 || t.memoizedState === null) &&
          (t.tag === 30 && p
            ? (e.flags |= t.flags & 32)
            : Bf(e, t.child, n, a, i, c, p) && (C = !0));
      t = t.sibling;
    }
    return C;
  }
  function Kp(e, t) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        var n = e.memoizedProps,
          a = e.stateNode,
          i = ca(n, a),
          c = ua(n.default, n.update),
          p;
        ((p = e.memoizedState), (e.memoizedState = null), (a = e));
        var C = e.child;
        ((It = 0),
          (i = Bf(a, C, i, i, c, p, !1)),
          (e.flags & 4) !== 0 && i && Gr(e, n.onUpdate));
      } else (e.subtreeFlags & 33554432) !== 0 && Kp(e);
      e = e.sibling;
    }
  }
  var xt = !1,
    Xe = !1,
    Kn = !1,
    Uf = !1,
    $p = typeof WeakSet == "function" ? WeakSet : Set,
    Ct = null,
    $n = !1,
    ao = !1,
    Ys = !1,
    Vf = !1;
  function $2(e, t, n) {
    if (((e = e.containerInfo), (ud = ei), (e = e0(e)), wu(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var i = a.getSelection && a.getSelection();
          if (i && i.rangeCount !== 0) {
            a = i.anchorNode;
            var c = i.anchorOffset,
              p = i.focusNode;
            i = i.focusOffset;
            try {
              (a.nodeType, p.nodeType);
            } catch {
              a = null;
              break e;
            }
            var C = 0,
              A = -1,
              L = -1,
              Y = 0,
              Z = 0,
              z = e,
              V = null;
            t: for (;;) {
              for (
                var se;
                z !== a || (c !== 0 && z.nodeType !== 3) || (A = C + c),
                  z !== p || (i !== 0 && z.nodeType !== 3) || (L = C + i),
                  z.nodeType === 3 && (C += z.nodeValue.length),
                  (se = z.firstChild) !== null;
              )
                ((V = z), (z = se));
              for (;;) {
                if (z === e) break t;
                if (
                  (V === a && ++Y === c && (A = C),
                  V === p && ++Z === i && (L = C),
                  (se = z.nextSibling) !== null)
                )
                  break;
                ((z = V), (V = z.parentNode));
              }
              z = se;
            }
            a = A === -1 || L === -1 ? null : { start: A, end: L };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      fd = { focusedElem: e, selectionRange: a },
        ei = !1,
        n = (n & 335544064) === n,
        Ct = t,
        t = n ? 9270 : 1024;
      Ct !== null;
    ) {
      if (((e = Ct), n && ((a = e.deletions), a !== null)))
        for (c = 0; c < a.length; c++) n && Hf(a[c]);
      if (e.alternate === null && (e.flags & 2) !== 0) (n && Gp(e), ks(n));
      else {
        if (e.tag === 22) {
          if (((a = e.alternate), e.memoizedState !== null)) {
            (a !== null && a.memoizedState === null && n && Hf(a), ks(n));
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            (n && Gp(e), ks(n));
            continue;
          }
        }
        ((a = e.child),
          (e.subtreeFlags & t) !== 0 && a !== null
            ? ((a.return = e), (Ct = a))
            : (n && Zp(e), ks(n)));
      }
    }
    rn = null;
  }
  function ks(e) {
    for (; Ct !== null;) {
      var t = Ct,
        n = e,
        a = t.alternate,
        i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((i & 1024) !== 0 && a !== null) {
            ((n = void 0), (i = a.memoizedProps), (a = a.memoizedState));
            var c = t.stateNode;
            try {
              var p = Pl(t.type, i);
              ((n = c.getSnapshotBeforeUpdate(p, a)),
                (c.__reactInternalSnapshotBeforeUpdate = n));
            } catch (C) {
              Ze(t, t.return, C);
            }
          }
          break;
        case 3:
          if ((i & 1024) !== 0) {
            if (((a = t.stateNode.containerInfo), (n = a.nodeType), n === 9))
              yd(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  yd(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n &&
            a !== null &&
            ((n = ca(a.memoizedProps, a.stateNode)),
            (i = t.memoizedProps),
            (i = ua(i.default, i.update)),
            i !== "none" && Lr(a, n, i, (a.memoizedState = []), !0));
          break;
        default:
          if ((i & 1024) !== 0) throw Error(s(163));
      }
      if (((a = t.sibling), a !== null)) {
        ((a.return = t.return), (Ct = a));
        break;
      }
      Ct = t.return;
    }
  }
  function Fp(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Fn(e, n), a & 4 && to(5, n));
        break;
      case 1:
        if ((Fn(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (p) {
              Ze(n, n.return, p);
            }
          else {
            var i = Pl(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (p) {
              Ze(n, n.return, p);
            }
          }
        (a & 64 && Vp(n), a & 512 && In(n, n.return));
        break;
      case 3:
        if ((Fn(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            A0(e, t);
          } catch (p) {
            Ze(n, n.return, p);
          }
        }
        break;
      case 27:
        t === null && a & 4 && qp(n);
      case 26:
      case 5:
        (Fn(e, n), t === null && a & 4 && Of(n), a & 512 && In(n, n.return));
        break;
      case 12:
        Fn(e, n);
        break;
      case 31:
        (Fn(e, n), a & 4 && tv(e, n));
        break;
      case 13:
        (Fn(e, n),
          a & 4 && nv(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = sx.bind(null, n)), qx(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || xt), !a)) {
          var c = (t !== null && t.memoizedState !== null) || Xe;
          ((t = xt),
            (i = Xe),
            (xt = a),
            (Xe = c) && !i
              ? ((a = 2),
                (n.subtreeFlags & 8772) !== 0 && (a |= 1),
                zn(e, n, a))
              : Fn(e, n),
            (xt = t),
            (Xe = i));
        }
        break;
      case 30:
        (Fn(e, n), a & 512 && In(n, n.return));
        break;
      case 7:
        a & 512 && In(n, n.return);
      default:
        Fn(e, n);
    }
  }
  function Pf(e, t) {
    for (e = e.child; e !== null;) (Jp(e, t), (e = e.sibling));
  }
  function Jp(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var n = e.stateNode;
          if (t) {
            var a = n.style;
            typeof a.setProperty == "function"
              ? a.setProperty("display", "none", "important")
              : (a.display = "none");
          } else {
            var i = e.stateNode,
              c = e.memoizedProps.style,
              p = c != null && c.hasOwnProperty("display") ? c.display : null;
            i.style.display =
              p == null || typeof p == "boolean" ? "" : ("" + p).trim();
          }
        } catch (A) {
          Ze(e, e.return, A);
        }
        Yf(e, t);
        break;
      case 6:
        try {
          ((e.stateNode.nodeValue = t ? "" : e.memoizedProps), (Pe = !0));
        } catch (A) {
          Ze(e, e.return, A);
        }
        break;
      case 18:
        try {
          var C = e.stateNode;
          t ? Gv(C, !0) : Gv(e.stateNode, !1);
        } catch (A) {
          Ze(e, e.return, A);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && Pf(e, t);
        break;
      default:
        Pf(e, t);
    }
  }
  function Yf(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null;) {
        e: {
          var n = e,
            a = t;
          switch (n.tag) {
            case 4:
              Jp(n, a);
              break e;
            case 22:
              n.memoizedState === null && Yf(n, a);
              break e;
            default:
              Yf(n, a);
          }
        }
        e = e.sibling;
      }
  }
  function Wp(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Wp(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Zo(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var tt = null,
    Zt = !1;
  function Mn(e, t, n) {
    for (n = n.child; n !== null;) (ev(e, t, n), (n = n.sibling));
  }
  function ev(e, t, n) {
    if (Ke && typeof Ke.onCommitFiberUnmount == "function")
      try {
        Ke.onCommitFiberUnmount(at, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Xe || _t(n, t),
          Mn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode &&
              !Xe &&
              ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        (Xe || _t(n, t), no(n));
        var a = tt,
          i = Zt;
        (tl(n.type) && ((tt = n.stateNode), (Zt = !1)),
          Mn(e, t, n),
          lg(n.stateNode, n.type, n.memoizedProps),
          (tt = a),
          (Zt = i));
        break;
      case 5:
        (Xe || _t(n, t), no(n));
      case 6:
        if (
          (n.tag === 6 && no(n),
          (a = tt),
          (i = Zt),
          (tt = null),
          Mn(e, t, n),
          (tt = a),
          (Zt = i),
          tt !== null)
        )
          if (Zt)
            try {
              ((tt.nodeType === 9
                ? tt.body
                : tt.nodeName === "HTML"
                  ? tt.ownerDocument.body
                  : tt
              ).removeChild(n.stateNode),
                (Pe = !0));
            } catch (c) {
              Ze(n, t, c);
            }
          else
            try {
              (tt.removeChild(n.stateNode), (Pe = !0));
            } catch (c) {
              Ze(n, t, c);
            }
        break;
      case 18:
        tt !== null &&
          (Zt
            ? ((e = tt),
              qv(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode
              ),
              ti(e))
            : qv(tt, n.stateNode));
        break;
      case 4:
        ((a = tt),
          (i = Zt),
          (tt = n.stateNode.containerInfo),
          (Zt = !0),
          Mn(e, t, n),
          (tt = a),
          (Zt = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Qa(2, n, t), Xe || Qa(4, n, t), Mn(e, t, n));
        break;
      case 1:
        (Xe ||
          (_t(n, t),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && Pp(n, t, a)),
          Mn(e, t, n));
        break;
      case 21:
        Mn(e, t, n);
        break;
      case 22:
        ((Xe = (a = Xe) || n.memoizedState !== null), Mn(e, t, n), (Xe = a));
        break;
      case 30:
        (_t(n, t), Mn(e, t, n));
        break;
      case 7:
        (Xe || _t(n, t), Mn(e, t, n));
        break;
      default:
        Mn(e, t, n);
    }
  }
  function tv(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        ti(e);
      } catch (n) {
        Ze(t, t.return, n);
      }
    }
  }
  function nv(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        ti(e);
      } catch (n) {
        Ze(t, t.return, n);
      }
  }
  function F2(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new $p()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new $p()),
          t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function qs(e, t) {
    var n = F2(e);
    t.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var i = cx.bind(null, e, a);
        a.then(i, i);
      }
    });
  }
  function Pt(e, t, n) {
    var a = t.deletions;
    if (a !== null)
      for (var i = 0; i < a.length; i++) {
        var c = a[i],
          p = e,
          C = t,
          A = C;
        e: for (; A !== null;) {
          switch (A.tag) {
            case 27:
              if (tl(A.type)) {
                ((tt = A.stateNode), (Zt = !1));
                break e;
              }
              break;
            case 5:
              ((tt = A.stateNode), (Zt = !1));
              break e;
            case 3:
            case 4:
              ((tt = A.stateNode.containerInfo), (Zt = !0));
              break e;
          }
          A = A.return;
        }
        if (tt === null) throw Error(s(160));
        (ev(p, C, c),
          (tt = null),
          (Zt = !1),
          (p = c.alternate),
          p !== null && (p.return = null),
          (c.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;) (av(t, e, n), (t = t.sibling));
  }
  var jn = null;
  function av(e, t, n) {
    var a = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          i & 4 &&
          ((a = e.updateQueue), (a = a !== null ? a.events : null), a !== null)
        )
          for (var c = 0; c < a.length; c++) {
            var p = a[c];
            p.ref.impl = p.nextImpl;
          }
        (Pt(t, e, n),
          Yt(e),
          i & 4 && (Qa(3, e, e.return), to(3, e), Qa(5, e, e.return)));
        break;
      case 1:
        (Pt(t, e, n),
          Yt(e),
          i & 512 && (Xe || a === null || _t(a, a.return)),
          i & 64 &&
            xt &&
            ((e = e.updateQueue),
            e !== null &&
              ((t = e.callbacks),
              t !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? t : n.concat(t))))));
        break;
      case 26:
        if (
          ((c = jn),
          Pt(t, e, n),
          Yt(e),
          i & 512 && (Xe || a === null || _t(a, a.return)),
          i & 4)
        )
          if (
            ((i = a !== null ? a.memoizedState : null),
            (n = e.memoizedState),
            a === null)
          )
            if (n === null)
              if (e.stateNode === null)
                if (xt)
                  e.stateNode = Pv(e.type, e.memoizedProps, t.containerInfo, e);
                else {
                  e: {
                    ((t = e.type),
                      (n = e.memoizedProps),
                      (i = c.ownerDocument || c));
                    t: switch (t) {
                      case "title":
                        ((a = i.getElementsByTagName("title")[0]),
                          (!a ||
                            a[Oi] ||
                            a[Nt] ||
                            a.namespaceURI === "http://www.w3.org/2000/svg" ||
                            a.hasAttribute("itemprop")) &&
                            ((a = i.createElement(t)),
                            i.head.insertBefore(
                              a,
                              i.querySelector("head > title")
                            )),
                          Dt(a, t, n),
                          (a[Nt] = e),
                          bt(a),
                          (t = a));
                        break e;
                      case "link":
                        if (
                          (c = ug("link", "href", i).get(t + (n.href || "")))
                        ) {
                          for (p = 0; p < c.length; p++)
                            if (
                              ((a = c[p]),
                              a.getAttribute("href") ===
                                (n.href == null || n.href === ""
                                  ? null
                                  : n.href) &&
                                a.getAttribute("rel") ===
                                  (n.rel == null ? null : n.rel) &&
                                a.getAttribute("title") ===
                                  (n.title == null ? null : n.title) &&
                                a.getAttribute("crossorigin") ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              c.splice(p, 1);
                              break t;
                            }
                        }
                        ((a = i.createElement(t)),
                          Dt(a, t, n),
                          i.head.appendChild(a));
                        break;
                      case "meta":
                        if (
                          (c = ug("meta", "content", i).get(
                            t + (n.content || "")
                          ))
                        ) {
                          for (p = 0; p < c.length; p++)
                            if (
                              ((a = c[p]),
                              a.getAttribute("content") ===
                                (n.content == null ? null : "" + n.content) &&
                                a.getAttribute("name") ===
                                  (n.name == null ? null : n.name) &&
                                a.getAttribute("property") ===
                                  (n.property == null ? null : n.property) &&
                                a.getAttribute("http-equiv") ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                a.getAttribute("charset") ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              c.splice(p, 1);
                              break t;
                            }
                        }
                        ((a = i.createElement(t)),
                          Dt(a, t, n),
                          i.head.appendChild(a));
                        break;
                      default:
                        throw Error(s(468, t));
                    }
                    ((a[Nt] = e), bt(a), (t = a));
                  }
                  e.stateNode = t;
                }
              else xt || Td(c, e.type, e.stateNode);
            else e.stateNode = cg(c, n, e.memoizedProps);
          else
            i !== n
              ? (i === null
                  ? ((t = a.stateNode),
                    t === null || Xe || t.parentNode.removeChild(t))
                  : i.count--,
                n === null
                  ? xt || Td(c, e.type, e.stateNode)
                  : cg(c, n, e.memoizedProps))
              : n === null &&
                e.stateNode !== null &&
                _f(e, e.memoizedProps, a.memoizedProps);
        break;
      case 27:
        (Pt(t, e, n),
          Yt(e),
          i & 512 && (Xe || a === null || _t(a, a.return)),
          a !== null && i & 4 && _f(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          ((c = Kn),
          (Kn = !1),
          Pt(t, e, n),
          (Kn = c),
          Yt(e),
          i & 512 && (Xe || a === null || _t(a, a.return)),
          e.flags & 32)
        ) {
          t = e.stateNode;
          try {
            (yr(t, ""), (Pe = !0));
          } catch (Y) {
            Ze(e, e.return, Y);
          }
        }
        (i & 4 &&
          e.stateNode != null &&
          ((t = e.memoizedProps), _f(e, t, a !== null ? a.memoizedProps : t)),
          i & 1024 && (Uf = !0));
        break;
      case 6:
        if ((Pt(t, e, n), Yt(e), i & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((t = e.memoizedProps), (n = e.stateNode));
          try {
            ((n.nodeValue = t), (Pe = !0));
          } catch (Y) {
            Ze(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (
          ((Pe = !1),
          (lc = null),
          (c = jn),
          (jn = mo(t.containerInfo)),
          Pt(t, e, n),
          (jn = c),
          Yt(e),
          i & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            ti(t.containerInfo);
          } catch (Y) {
            Ze(e, e.return, Y);
          }
        (Uf && ((Uf = !1), lv(e)), (Pe = !1));
        break;
      case 4:
        ((i = Kn),
          (Kn = xt),
          (a = wh()),
          (c = jn),
          (jn = mo(e.stateNode.containerInfo)),
          Pt(t, e, n),
          Yt(e),
          (jn = c),
          Pe && ao && (Ys = !0),
          (Pe = a),
          (Kn = i));
        break;
      case 12:
        (Pt(t, e, n), Yt(e));
        break;
      case 31:
        (Pt(t, e, n),
          Yt(e),
          i & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), qs(e, t))));
        break;
      case 13:
        (Pt(t, e, n),
          Yt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Is = Lt()),
          i & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), qs(e, t))));
        break;
      case 22:
        ((c = e.memoizedState !== null),
          (p = a !== null && a.memoizedState !== null));
        var C = xt,
          A = Xe,
          L = Kn;
        ((xt = C || c),
          (Kn = L || c),
          (Xe = A || p),
          Pt(t, e, n),
          (Xe = A),
          (Kn = L),
          (xt = C),
          Yt(e),
          i & 8192 &&
            ((t = e.stateNode),
            (t._visibility = c ? t._visibility & -2 : t._visibility | 1),
            !c ||
              a === null ||
              p ||
              xt ||
              Xe ||
              ((t = p || Xe),
              (n = xt),
              (a = Xe),
              (xt = c || xt),
              (Xe = t),
              Ka(e, 2),
              (xt = n),
              (Xe = a)),
            (!c && Kn) || Pf(e, c)),
          i & 4 &&
            ((t = e.updateQueue),
            t !== null &&
              ((n = t.retryQueue),
              n !== null && ((t.retryQueue = null), qs(e, n)))));
        break;
      case 19:
        (Pt(t, e, n),
          Yt(e),
          i & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), qs(e, t))));
        break;
      case 30:
        (i & 512 && (Xe || a === null || _t(a, a.return)),
          (i = wh()),
          (c = ao),
          (p = (n & 335544064) === n),
          (C = e.memoizedProps),
          (ao = p && ua(C.default, C.update) !== "none"),
          Pt(t, e, n),
          Yt(e),
          p && a !== null && Pe && (e.flags |= 4),
          (ao = c),
          (Pe = i));
        break;
      case 21:
        break;
      case 7:
        (i & 512 && (Xe || a === null || _t(a, a.return)),
          a && a.stateNode !== null && (a.stateNode._fragmentFiber = e));
      default:
        (Pt(t, e, n), Yt(e));
    }
  }
  function Yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null;) {
          if (kp(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var i = e.return; i !== null;) {
          if (Af(i)) {
            var c = i.stateNode;
            a === null ? (a = [c]) : a.push(c);
          }
          if (Rf(i)) break;
          i = i.return;
        }
        var p = a;
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var C = n.stateNode,
              A = Df(e);
            Bs(e, A, C, p);
            break;
          case 5:
            var L = n.stateNode;
            n.flags & 32 && (yr(L, ""), (n.flags &= -33));
            var Y = Df(e);
            Bs(e, Y, L, p);
            break;
          case 3:
          case 4:
            var Z = n.stateNode.containerInfo,
              z = Df(e);
            Mf(e, z, Z, p);
            break;
          default:
            throw Error(s(161));
        }
      } catch (V) {
        Ze(e, e.return, V);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function lv(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var t = e;
        (lv(t),
          t.tag === 5 &&
            t.flags & 1024 &&
            ((t = t.stateNode), (ei = !0), t.reset(), (ei = !1)),
          (e = e.sibling));
      }
  }
  function Br(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null;) (rv(t, e), (t = t.sibling));
    else Kp(t);
  }
  function rv(e, t) {
    var n = e.alternate;
    if (n === null) jf(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (((Vf = $n = !1), Xp(), Br(t, e), !$n && !Ys)) {
            if (((e = Zn), e !== null))
              for (var a = 0; a < e.length; a += 3) {
                n = e[a];
                var i = e[a + 1];
                (Iv(n, e[a + 2]),
                  (n = n.ownerDocument.documentElement),
                  n !== null &&
                    n.animate(
                      { opacity: [0, 0], pointerEvents: ["none", "none"] },
                      {
                        duration: 0,
                        fill: "forwards",
                        pseudoElement: "::view-transition-group(" + i + ")",
                      }
                    ));
              }
            ((e = t.containerInfo),
              (e =
                e.nodeType === 9
                  ? e.documentElement
                  : e.ownerDocument.documentElement),
              e !== null &&
                e.style.viewTransitionName === "" &&
                ((e.style.viewTransitionName = "none"),
                e.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(root)",
                  }
                ),
                e.animate(
                  { width: [0, 0], height: [0, 0] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition",
                  }
                )),
              (Vf = !0));
          }
          Zn = null;
          break;
        case 5:
          Br(t, e);
          break;
        case 4:
          ((a = $n), ($n = !1), Br(t, e), $n && (Ys = !0), ($n = a));
          break;
        case 22:
          e.memoizedState === null &&
            (n.memoizedState !== null ? jf(e, !1) : Br(t, e));
          break;
        case 30:
          ((a = $n), (i = Xp()), ($n = !1), Br(t, e), $n && (e.flags |= 4));
          var c = e.memoizedProps,
            p = e.stateNode;
          ((t = ca(c, p)), (p = ca(n.memoizedProps, p)));
          var C = ua(c.default, c.update);
          (C === "none"
            ? (t = !1)
            : ((c = n.memoizedState),
              (n.memoizedState = null),
              (n = e.child),
              (It = 0),
              (t = Bf(e, n, t, p, C, c, !0)),
              It !== (c === null ? 0 : c.length) && (e.flags |= 32)),
            (e.flags & 4) !== 0 && t
              ? (Gr(e, e.memoizedProps.onUpdate), (Zn = i))
              : i !== null && (i.push.apply(i, Zn), (Zn = i)),
            ($n = (e.flags & 32) !== 0 ? !0 : a));
          break;
        default:
          Br(t, e);
      }
  }
  function Fn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) (Fp(e, t.alternate, t), (t = t.sibling));
  }
  function Ka(e, t) {
    for (e = e.child; e !== null;) {
      var n = e,
        a = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Qa(4, n, n.return), Ka(n, a));
          break;
        case 1:
          _t(n, n.return);
          var i = n.stateNode;
          (typeof i.componentWillUnmount == "function" && Pp(n, n.return, i),
            Ka(n, a));
          break;
        case 27:
          (a & 2) !== 0 && lg(n.stateNode, n.type, n.memoizedProps);
        case 5:
          (_t(n, n.return), (n.tag !== 5 && n.tag !== 27) || no(n), Ka(n, a));
          break;
        case 6:
          no(n);
          break;
        case 26:
          (_t(n, n.return),
            (i = n.stateNode),
            n.memoizedState !== null ||
              i === null ||
              Xe ||
              i.parentNode.removeChild(i),
            Ka(n, a));
          break;
        case 22:
          n.memoizedState === null && Ka(n, a);
          break;
        case 30:
          (_t(n, n.return), Ka(n, a));
          break;
        case 7:
          _t(n, n.return);
        default:
          Ka(n, a);
      }
      e = e.sibling;
    }
  }
  function zn(e, t, n) {
    for (
      n = (t.subtreeFlags & 8772) !== 0 ? n : n & -2, t = t.child;
      t !== null;
    ) {
      var a = t.alternate,
        i = e,
        c = t,
        p = c.flags,
        C = (n & 1) !== 0;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (zn(i, c, n), to(4, c));
          break;
        case 1:
          if (
            (zn(i, c, n),
            (a = c),
            (i = a.stateNode),
            typeof i.componentDidMount == "function")
          )
            try {
              i.componentDidMount();
            } catch (Y) {
              Ze(a, a.return, Y);
            }
          if (((a = c), (i = a.updateQueue), i !== null)) {
            var A = a.stateNode;
            try {
              var L = i.shared.hiddenCallbacks;
              if (L !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < L.length; i++)
                  R0(L[i], A);
            } catch (Y) {
              Ze(a, a.return, Y);
            }
          }
          (C && p & 64 && Vp(c), In(c, c.return));
          break;
        case 27:
          (n & 2) !== 0 && qp(c);
        case 5:
          ((c.tag !== 5 && c.tag !== 27) || Yp(c),
            zn(i, c, n),
            C && a === null && p & 4 && Of(c),
            In(c, c.return));
          break;
        case 6:
          Yp(c);
          break;
        case 26:
          ((A = c.stateNode),
            c.memoizedState !== null ||
              A === null ||
              xt ||
              Td(mo(A.ownerDocument), c.type, A),
            zn(i, c, n),
            C && a === null && p & 4 && Of(c),
            In(c, c.return));
          break;
        case 12:
          zn(i, c, n);
          break;
        case 31:
          (zn(i, c, n), C && p & 4 && tv(i, c));
          break;
        case 13:
          (zn(i, c, n), C && p & 4 && nv(i, c));
          break;
        case 22:
          (c.memoizedState === null && zn(i, c, n), In(c, c.return));
          break;
        case 30:
          (zn(i, c, n), In(c, c.return));
          break;
        case 7:
          In(c, c.return);
        default:
          zn(i, c, n);
      }
      t = t.sibling;
    }
  }
  function kf(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && ki(n)));
  }
  function qf(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ki(e)));
  }
  function Cn(e, t, n, a) {
    var i = (n & 335544064) === n;
    if (t.subtreeFlags & (i ? 10262 : 10256))
      for (t = t.child; t !== null;) (iv(e, t, n, a), (t = t.sibling));
    else i && Qp(t);
  }
  function iv(e, t, n, a) {
    var i = (n & 335544064) === n;
    i &&
      t.alternate === null &&
      t.return !== null &&
      t.return.alternate !== null &&
      Ps(t);
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Cn(e, t, n, a), c & 2048 && to(9, t));
        break;
      case 1:
        Cn(e, t, n, a);
        break;
      case 3:
        (Cn(e, t, n, a),
          i &&
            Vf &&
            ((e = e.containerInfo),
            (e =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e),
            e.style.viewTransitionName === "root" &&
              (e.style.viewTransitionName = ""),
            (e = e.ownerDocument.documentElement),
            e !== null &&
              e.style.viewTransitionName === "none" &&
              (e.style.viewTransitionName = "")),
          c & 2048 &&
            ((c = null),
            t.alternate !== null && (c = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== c && (t.refCount++, c != null && ki(c))));
        break;
      case 12:
        if (c & 2048) {
          (Cn(e, t, n, a), (c = t.stateNode));
          try {
            var p = t.memoizedProps,
              C = p.id,
              A = p.onPostCommit;
            typeof A == "function" &&
              A(
                C,
                t.alternate === null ? "mount" : "update",
                c.passiveEffectDuration,
                -0
              );
          } catch (L) {
            Ze(t, t.return, L);
          }
        } else Cn(e, t, n, a);
        break;
      case 31:
        Cn(e, t, n, a);
        break;
      case 13:
        Cn(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        ((p = t.stateNode),
          (C = t.alternate),
          t.memoizedState !== null
            ? (i && C !== null && C.memoizedState === null && Ps(C),
              p._visibility & 2 ? Cn(e, t, n, a) : lo(e, t))
            : (i && C !== null && C.memoizedState !== null && Ps(t),
              p._visibility & 2
                ? Cn(e, t, n, a)
                : ((p._visibility |= 2),
                  Ur(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1))),
          c & 2048 && kf(C, t));
        break;
      case 24:
        (Cn(e, t, n, a), c & 2048 && qf(t.alternate, t));
        break;
      case 30:
        (i &&
          ((c = t.alternate), c !== null && (Qn(c.child, !0), Qn(t.child, !0))),
          Cn(e, t, n, a));
        break;
      default:
        Cn(e, t, n, a);
    }
  }
  function Ur(e, t, n, a, i) {
    for (
      i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var c = e,
        p = t,
        C = n,
        A = a,
        L = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          (Ur(c, p, C, A, i), to(8, p));
          break;
        case 23:
          break;
        case 22:
          var Y = p.stateNode;
          (p.memoizedState !== null
            ? Y._visibility & 2
              ? Ur(c, p, C, A, i)
              : lo(c, p)
            : ((Y._visibility |= 2), Ur(c, p, C, A, i)),
            i && L & 2048 && kf(p.alternate, p));
          break;
        case 24:
          (Ur(c, p, C, A, i), i && L & 2048 && qf(p.alternate, p));
          break;
        default:
          Ur(c, p, C, A, i);
      }
      t = t.sibling;
    }
  }
  function lo(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var n = e,
          a = t,
          i = a.flags;
        switch (a.tag) {
          case 22:
            (lo(n, a), i & 2048 && kf(a.alternate, a));
            break;
          case 24:
            (lo(n, a), i & 2048 && qf(a.alternate, a));
            break;
          default:
            lo(n, a);
        }
        t = t.sibling;
      }
  }
  var Yl = 8192;
  function kl(e, t, n) {
    if (e.subtreeFlags & Yl)
      for (e = e.child; e !== null;) (ov(e, t, n), (e = e.sibling));
  }
  function ov(e, t, n) {
    switch (e.tag) {
      case 26:
        (kl(e, t, n),
          e.flags & Yl &&
            (e.memoizedState !== null
              ? aC(n, jn, e.memoizedState, e.memoizedProps)
              : ((e = e.stateNode), (t & 335544128) === t && hg(n, e))));
        break;
      case 5:
        (kl(e, t, n),
          e.flags & Yl &&
            ((e = e.stateNode), (t & 335544128) === t && hg(n, e)));
        break;
      case 3:
      case 4:
        var a = jn;
        ((jn = mo(e.stateNode.containerInfo)), kl(e, t, n), (jn = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Yl), (Yl = 16777216), kl(e, t, n), (Yl = a))
            : kl(e, t, n));
        break;
      case 30:
        if (
          (e.flags & Yl) !== 0 &&
          ((a = e.memoizedProps.name), a != null && a !== "auto")
        ) {
          var i = e.stateNode;
          ((i.paired = null), rn === null && (rn = new Map()), rn.set(a, i));
        }
        kl(e, t, n);
        break;
      default:
        kl(e, t, n);
    }
  }
  function sv(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function ro(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((Ct = a), uv(a, e));
        }
      sv(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) (cv(e), (e = e.sibling));
  }
  function cv(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (ro(e), e.flags & 2048 && Qa(9, e, e.return));
        break;
      case 3:
        ro(e);
        break;
      case 12:
        ro(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Gs(e))
          : ro(e);
        break;
      default:
        ro(e);
    }
  }
  function Gs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((Ct = a), uv(a, e));
        }
      sv(e);
    }
    for (e = e.child; e !== null;) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Qa(8, t, t.return), Gs(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Gs(t)));
          break;
        default:
          Gs(t);
      }
      e = e.sibling;
    }
  }
  function uv(e, t) {
    for (; Ct !== null;) {
      var n = Ct;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Qa(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ki(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (Ct = a));
      else
        e: for (n = e; Ct !== null;) {
          a = Ct;
          var i = a.sibling,
            c = a.return;
          if ((Wp(a), a === n)) {
            Ct = null;
            break e;
          }
          if (i !== null) {
            ((i.return = c), (Ct = i));
            break e;
          }
          Ct = c;
        }
    }
  }
  var J2 = {
      getCacheForType: function (e) {
        var t = Rt(ft),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return Rt(ft).controller.signal;
      },
    },
    W2 = typeof WeakMap == "function" ? WeakMap : Map,
    qe = 0,
    Je = null,
    Oe = null,
    De = 0,
    Ie = 0,
    on = null,
    $a = !1,
    Vr = !1,
    Gf = !1,
    ba = 0,
    rt = 0,
    Fa = 0,
    ql = 0,
    Xs = 0,
    sn = 0,
    Pr = 0,
    io = null,
    Qt = null,
    Xf = !1,
    Is = 0,
    fv = 0,
    Zs = 1 / 0,
    Qs = null,
    Ja = null,
    nt = 0,
    Hn = null,
    Gl = null,
    Jn = 0,
    If = 0,
    Zf = null,
    dv = null,
    Yr = null,
    kr = null,
    qr = null,
    oo = 0,
    Ks = null;
  function cn() {
    return (qe & 2) !== 0 && De !== 0 ? De & -De : le.T !== null ? ad() : ph();
  }
  function mv() {
    if (sn === 0)
      if ((De & 536870912) === 0 || Ne) {
        var e = za;
        ((za <<= 1), (za & 3932160) === 0 && (za = 262144), (sn = e));
      } else sn = 536870912;
    return ((e = At.current), e !== null && (e.flags |= 32), sn);
  }
  function Gr(e, t) {
    if (t != null) {
      var n = e.stateNode,
        a = n.ref;
      (a === null && (a = n.ref = Zv(ca(e.memoizedProps, n))),
        kr === null && (kr = []),
        kr.push(t.bind(null, a)));
    }
  }
  function Kt(e, t, n) {
    (((e === Je && (Ie === 2 || Ie === 9)) || e.cancelPendingCommit !== null) &&
      (Xr(e, 0), Wa(e, De, sn, !1)),
      Ai(e, n),
      ((qe & 2) === 0 || e !== Je) &&
        (e === Je &&
          ((qe & 2) === 0 && (ql |= n), rt === 4 && Wa(e, De, sn, !1)),
        Wn(e)));
  }
  function hv(e, t, n) {
    if ((qe & 6) !== 0) throw Error(s(327));
    var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Ri(e, t),
      i = a ? nx(e, t) : Kf(e, t, !0),
      c = a;
    do {
      if (i === 0) {
        Vr && !a && Wa(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), c && !ex(n))) {
          ((i = Kf(e, t, !1)), (c = !1));
          continue;
        }
        if (i === 2) {
          if (((c = t), e.errorRecoveryDisabledLanes & c)) var p = 0;
          else
            ((p = e.pendingLanes & -536870913),
              (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0));
          if (p !== 0) {
            t = p;
            e: {
              var C = e;
              i = io;
              var A = C.current.memoizedState.isDehydrated;
              if (
                (A && (Xr(C, p).flags |= 256),
                (p = Kf(C, p, !1)),
                p !== 2 && p !== 6)
              ) {
                if (Gf && !A) {
                  ((C.errorRecoveryDisabledLanes |= c), (ql |= c), (i = 4));
                  break e;
                }
                ((c = Qt),
                  (Qt = i),
                  c !== null &&
                    (Qt === null ? (Qt = c) : Qt.push.apply(Qt, c)));
              }
              i = p;
            }
            if (((c = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (Xr(e, 0), Wa(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (c = i), c)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t) break;
            case 6:
              Wa(a, t, sn, !$a);
              break e;
            case 2:
              Qt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((i = Is + 300 - Lt()), 10 < i)) {
            if ((Wa(a, t, sn, !$a), Xo(a, 0, !0) !== 0)) break e;
            ((Jn = t),
              (a.timeoutHandle = hd(
                pv.bind(
                  null,
                  a,
                  n,
                  Qt,
                  Qs,
                  Xf,
                  t,
                  sn,
                  ql,
                  Pr,
                  $a,
                  c,
                  "Throttled",
                  -0,
                  0
                ),
                i
              )));
            break e;
          }
          pv(a, n, Qt, Qs, Xf, t, sn, ql, Pr, $a, c, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Wn(e);
  }
  function pv(e, t, n, a, i, c, p, C, A, L, Y, Z, z, V) {
    e.timeoutHandle = -1;
    var se = t.subtreeFlags,
      he = (c & 335544064) === c;
    if (
      ((Z = null),
      (he || se & 8192 || (se & 16785408) === 16785408) &&
        ((Z = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: qn,
        }),
        (rn = null),
        ov(t, c, Z),
        he &&
          ((se = Z),
          (he = e.containerInfo),
          (he = (he.nodeType === 9 ? he : he.ownerDocument)
            .__reactViewTransition),
          he != null &&
            (se.count++,
            (se.waitingForViewTransition = !0),
            (se = vo.bind(se)),
            he.finished.then(se, se))),
        (se =
          (c & 62914560) === c
            ? Is - Lt()
            : (c & 4194048) === c
              ? fv - Lt()
              : 0),
        (se = lC(Z, se)),
        se !== null))
    ) {
      ((Jn = c),
        (e.cancelPendingCommit = se(
          Ev.bind(null, e, t, c, n, a, i, p, C, A, L, Y, Z, null, z, V)
        )),
        Wa(e, c, p, !L));
      return;
    }
    Ev(e, t, c, n, a, i, p, C, A, L, Y, Z);
  }
  function ex(e) {
    for (var t = e; ;) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var i = n[a],
            c = i.getSnapshot;
          i = i.value;
          try {
            if (!an(c(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Wa(e, t, n, a) {
    ((t = uh(e, t)),
      (t &= ~Xs),
      (t &= ~ql),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var i = t; 0 < i;) {
      var c = 31 - ke(i),
        p = 1 << c;
      ((a[c] = -1), (i &= ~p));
    }
    n !== 0 && dh(e, n, t);
  }
  function $s() {
    return (qe & 6) === 0 ? (so(0), !1) : !0;
  }
  function Qf() {
    if (Oe !== null) {
      if (Ie === 0) var e = Oe.return;
      else ((e = Oe), (ma = Dl = null), tf(e), (Dr = null), (Xi = 0), (e = Oe));
      for (; e !== null;) (Up(e.alternate, e), (e = e.return));
      Oe = null;
    }
  }
  function Xr(e, t) {
    var n = e.timeoutHandle;
    return (
      n !== -1 && ((e.timeoutHandle = -1), wx(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (Jn = 0),
      Qf(),
      (Je = e),
      (Oe = n = fa(e.current, null)),
      (De = t),
      (Ie = 0),
      (on = null),
      ($a = !1),
      (Vr = Ri(e, t)),
      (Gf = !1),
      (Pr = sn = Xs = ql = Fa = rt = 0),
      (Qt = io = null),
      (Xf = !1),
      (ba = uh(e, t)),
      ls(),
      n
    );
  }
  function vv(e, t) {
    ((Ee = null),
      (le.H = Os),
      t === _r || t === ps
        ? ((t = E0()), (Ie = 3))
        : t === ku
          ? ((t = E0()), (Ie = 4))
          : (Ie =
              t === gf
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (on = t),
      Oe === null && ((rt = 1), _s(e, yn(t, e.current))));
  }
  function gv() {
    var e = At.current;
    return e === null
      ? !0
      : (De & 4194048) === De
        ? Ht === null
        : (De & 62914560) === De || (De & 536870912) !== 0
          ? e === Ht
          : !1;
  }
  function yv() {
    var e = le.H;
    return ((le.H = Os), e === null ? Os : e);
  }
  function bv() {
    var e = le.A;
    return ((le.A = J2), e);
  }
  function Fs() {
    ((rt = 4),
      $a || ((De & 4194048) !== De && At.current !== null) || (Vr = !0),
      ((Fa & 134217727) === 0 && (ql & 134217727) === 0) ||
        Je === null ||
        Wa(Je, De, sn, !1));
  }
  function Kf(e, t, n) {
    var a = qe;
    qe |= 2;
    var i = yv(),
      c = bv();
    ((Je !== e || De !== t) && ((Qs = null), Xr(e, t)), (t = !1));
    var p = rt;
    e: do
      try {
        if (Ie !== 0 && Oe !== null) {
          var C = Oe,
            A = on;
          switch (Ie) {
            case 8:
              (Qf(), (p = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              At.current === null && (t = !0);
              var L = Ie;
              if (((Ie = 0), (on = null), Ir(e, C, A, L), n && Vr)) {
                p = 0;
                break e;
              }
              break;
            default:
              ((L = Ie), (Ie = 0), (on = null), Ir(e, C, A, L));
          }
        }
        (tx(), (p = rt));
        break;
      } catch (Y) {
        vv(e, Y);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (ma = Dl = null),
      (qe = a),
      (le.H = i),
      (le.A = c),
      Oe === null && ((Je = null), (De = 0), ls()),
      p
    );
  }
  function tx() {
    for (; Oe !== null;) Sv(Oe);
  }
  function nx(e, t) {
    var n = qe;
    qe |= 2;
    var a = yv(),
      i = bv();
    Je !== e || De !== t
      ? ((Qs = null), (Zs = Lt() + 500), Xr(e, t))
      : (Vr = Ri(e, t));
    e: do
      try {
        if (Ie !== 0 && Oe !== null) {
          t = Oe;
          var c = on;
          t: switch (Ie) {
            case 1:
              ((Ie = 0), (on = null), Ir(e, t, c, 1));
              break;
            case 2:
            case 9:
              if (x0(c)) {
                ((Ie = 0), (on = null), xv(t));
                break;
              }
              ((t = function () {
                ((Ie !== 2 && Ie !== 9) || Je !== e || (Ie = 7), Wn(e));
              }),
                c.then(t, t));
              break e;
            case 3:
              Ie = 7;
              break e;
            case 4:
              Ie = 5;
              break e;
            case 7:
              x0(c)
                ? ((Ie = 0), (on = null), xv(t))
                : ((Ie = 0), (on = null), Ir(e, t, c, 7));
              break;
            case 5:
              var p = null;
              switch (Oe.tag) {
                case 26:
                  p = Oe.memoizedState;
                case 5:
                case 27:
                  var C = Oe;
                  if (p ? dg(p) : C.stateNode.complete) {
                    ((Ie = 0), (on = null));
                    var A = C.sibling;
                    if (A !== null) Oe = A;
                    else {
                      var L = C.return;
                      L !== null ? ((Oe = L), Js(L)) : (Oe = null);
                    }
                    break t;
                  }
              }
              ((Ie = 0), (on = null), Ir(e, t, c, 5));
              break;
            case 6:
              ((Ie = 0), (on = null), Ir(e, t, c, 6));
              break;
            case 8:
              (Qf(), (rt = 6));
              break e;
            default:
              throw Error(s(462));
          }
        }
        ax();
        break;
      } catch (Y) {
        vv(e, Y);
      }
    while (!0);
    return (
      (ma = Dl = null),
      (le.H = a),
      (le.A = i),
      (qe = n),
      Oe !== null ? 0 : ((Je = null), (De = 0), ls(), rt)
    );
  }
  function ax() {
    for (; Oe !== null && !ko();) Sv(Oe);
  }
  function Sv(e) {
    var t = Lp(e.alternate, e, ba);
    ((e.memoizedProps = e.pendingProps), t === null ? Js(e) : (Oe = t));
  }
  function xv(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Op(n, t, t.pendingProps, t.type, void 0, De);
        break;
      case 11:
        t = Op(n, t, t.pendingProps, t.type.render, t.ref, De);
        break;
      case 5:
        tf(t);
        var a = t;
        a === St &&
          (Ne
            ? (us(a), a.tag === 5 && a.stateNode != null && (We = a.stateNode))
            : (us(a), (Ne = !0)));
      default:
        (Up(n, t), (t = Oe = u0(t, ba)), (t = Lp(n, t, ba)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Js(e) : (Oe = t));
  }
  function Ir(e, t, n, a) {
    ((ma = Dl = null), tf(t), (Dr = null), (Xi = 0));
    var i = t.return;
    try {
      if (G2(e, i, t, n, De)) {
        ((rt = 1), _s(e, yn(n, e.current)), (Oe = null));
        return;
      }
    } catch (c) {
      if (i !== null) throw ((Oe = i), c);
      ((rt = 1), _s(e, yn(n, e.current)), (Oe = null));
      return;
    }
    t.flags & 32768
      ? (Ne || a === 1
          ? (e = !0)
          : Vr || (De & 536870912) !== 0
            ? (e = !1)
            : (($a = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = At.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Cv(t, e))
      : Js(t);
  }
  function Js(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Cv(t, $a);
        return;
      }
      e = t.return;
      var n = Q2(t.alternate, t, ba);
      if (n !== null) {
        Oe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Oe = t;
        return;
      }
      Oe = t = e;
    } while (t !== null);
    rt === 0 && (rt = 5);
  }
  function Cv(e, t) {
    do {
      var n = K2(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (Oe = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Oe = e;
        return;
      }
      Oe = e = n;
    } while (e !== null);
    ((rt = 6), (Oe = null));
  }
  function Ev(e, t, n, a, i, c, p, C, A, L, Y, Z) {
    e.cancelPendingCommit = null;
    do Ws();
    while (nt !== 0);
    if ((qe & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      (e === Je && ((Oe = Je = null), (De = 0)),
        (Gl = t),
        (Hn = e),
        (Jn = n),
        (Zf = i),
        (dv = a),
        lx(e, t, n, p, C, A, Z));
    }
  }
  function lx(e, t, n, a, i, c, p) {
    var C = t.lanes | t.childLanes;
    if (
      ((If = C),
      (C |= Ou),
      _S(e, n, C, a, i, c),
      (kr = null),
      (n & 335544064) === n
        ? ((qr = M2(e)), (a = 10262))
        : ((qr = null), (a = 10256)),
      (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0
        ? ((e.callbackNode = null),
          (e.callbackPriority = 0),
          ux(dr, function () {
            return (Wf(), null);
          }))
        : ((e.callbackNode = null), (e.callbackPriority = 0)),
      (Us = !1),
      (a = (t.flags & 13878) !== 0),
      (t.subtreeFlags & 13878) !== 0 || a)
    ) {
      ((a = le.T), (le.T = null), (i = ue.p), (ue.p = 2), (c = qe), (qe |= 4));
      try {
        $2(e, t, n);
      } finally {
        ((qe = c), (ue.p = i), (le.T = a));
      }
    }
    ((nt = 1),
      Us
        ? (Yr = _x(p, e.containerInfo, qr, $f, Ff, ix, Jf, Wf, rx))
        : ($f(), Ff(), Jf()));
  }
  function rx(e) {
    if (nt !== 0) {
      var t = Hn.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function ix() {
    nt === 3 && ((nt = 0), rv(Gl, Hn), (nt = 4));
  }
  function $f() {
    if (nt === 1) {
      nt = 0;
      var e = Hn,
        t = Gl,
        n = Jn,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = le.T), (le.T = null));
        var i = ue.p;
        ue.p = 2;
        var c = qe;
        qe |= 4;
        try {
          ((ao = Ys = !1), av(t, e, n), (n = fd));
          var p = e0(e.containerInfo),
            C = n.focusedElem,
            A = n.selectionRange;
          if (
            p !== C &&
            C &&
            C.ownerDocument &&
            Wh(C.ownerDocument.documentElement, C)
          ) {
            if (A !== null && wu(C)) {
              var L = A.start,
                Y = A.end;
              if ((Y === void 0 && (Y = L), "selectionStart" in C))
                ((C.selectionStart = L),
                  (C.selectionEnd = Math.min(Y, C.value.length)));
              else {
                var Z = C.ownerDocument || document,
                  z = (Z && Z.defaultView) || window;
                if (z.getSelection) {
                  var V = z.getSelection(),
                    se = C.textContent.length,
                    he = Math.min(A.start, se),
                    we = A.end === void 0 ? he : Math.min(A.end, se);
                  !V.extend && he > we && ((p = we), (we = he), (he = p));
                  var H = Jh(C, he),
                    D = Jh(C, we);
                  if (
                    H &&
                    D &&
                    (V.rangeCount !== 1 ||
                      V.anchorNode !== H.node ||
                      V.anchorOffset !== H.offset ||
                      V.focusNode !== D.node ||
                      V.focusOffset !== D.offset)
                  ) {
                    var B = Z.createRange();
                    (B.setStart(H.node, H.offset),
                      V.removeAllRanges(),
                      he > we
                        ? (V.addRange(B), V.extend(D.node, D.offset))
                        : (B.setEnd(D.node, D.offset), V.addRange(B)));
                  }
                }
              }
            }
            for (Z = [], V = C; (V = V.parentNode);)
              V.nodeType === 1 &&
                Z.push({ element: V, left: V.scrollLeft, top: V.scrollTop });
            for (
              typeof C.focus == "function" && C.focus(), C = 0;
              C < Z.length;
              C++
            ) {
              var I = Z[C];
              ((I.element.scrollLeft = I.left), (I.element.scrollTop = I.top));
            }
          }
          ((ei = !!ud), (fd = ud = null));
        } finally {
          ((qe = c), (ue.p = i), (le.T = a));
        }
      }
      ((e.current = t), (nt = 2));
    }
  }
  function Ff() {
    if (nt === 2) {
      nt = 0;
      var e = Hn,
        t = Gl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = le.T), (le.T = null));
        var a = ue.p;
        ue.p = 2;
        var i = qe;
        qe |= 4;
        try {
          Fp(e, t.alternate, t);
        } finally {
          ((qe = i), (ue.p = a), (le.T = n));
        }
      }
      nt = 3;
    }
  }
  function Jf() {
    if (nt === 4 || nt === 3) {
      nt = 0;
      var e = Yr;
      ((Yr = null), hn());
      var t = Hn,
        n = Gl,
        a = Jn,
        i = dv,
        c = (a & 335544064) === a ? 10262 : 10256;
      if (
        ((n.subtreeFlags & c) !== 0 || (n.flags & c) !== 0
          ? (nt = 5)
          : ((nt = 0), (Gl = Hn = null), wv(t, t.pendingLanes)),
        (c = t.pendingLanes),
        c === 0 && (Ja = null),
        iu(a),
        (n = n.stateNode),
        Ke && typeof Ke.onCommitFiberRoot == "function")
      )
        try {
          Ke.onCommitFiberRoot(at, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        ((n = le.T), (c = ue.p), (ue.p = 2), (le.T = null));
        try {
          for (var p = t.onRecoverableError, C = 0; C < i.length; C++) {
            var A = i[C];
            p(A.value, { componentStack: A.stack });
          }
        } finally {
          ((le.T = n), (ue.p = c));
        }
      }
      if (
        ((i = kr),
        (p = qr),
        (qr = null),
        i !== null && ((kr = null), p === null && (p = []), e !== null))
      )
        for (A = 0; A < i.length; A++)
          ((n = (0, i[A])(p)), n !== void 0 && e.finished.finally(n));
      ((Jn & 3) !== 0 && Ws(),
        Wn(t),
        (c = t.pendingLanes),
        (a & 261930) !== 0 && (c & 42) !== 0
          ? t === Ks
            ? oo++
            : ((oo = 0), (Ks = t))
          : ((oo = 0), (Ks = null)),
        so(0));
    }
  }
  function wv(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ki(t)));
  }
  function Ws() {
    return (
      Yr !== null && (Yr.skipTransition(), (Yr = null)),
      $f(),
      Ff(),
      Jf(),
      Wf()
    );
  }
  function Wf() {
    if (nt !== 5) return !1;
    var e = Hn,
      t = If;
    If = 0;
    var n = iu(Jn),
      a = le.T,
      i = ue.p;
    try {
      ((ue.p = 32 > n ? 32 : n), (le.T = null), (n = Zf), (Zf = null));
      var c = Hn,
        p = Jn;
      if (((nt = 0), (Gl = Hn = null), (Jn = 0), (qe & 6) !== 0))
        throw Error(s(331));
      var C = qe;
      if (
        ((qe |= 4),
        cv(c.current),
        iv(c, c.current, p, n),
        (qe = C),
        so(0, !1),
        Ke && typeof Ke.onPostCommitFiberRoot == "function")
      )
        try {
          Ke.onPostCommitFiberRoot(at, c);
        } catch {}
      return !0;
    } finally {
      ((ue.p = i), (le.T = a), wv(e, t));
    }
  }
  function Tv(e, t, n) {
    ((t = yn(n, t)),
      (t = vf(e.stateNode, t, 2)),
      (e = Ga(e, t, 2)),
      e !== null && (Ai(e, 2), Wn(e)));
  }
  function Ze(e, t, n) {
    if (e.tag === 3) Tv(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Tv(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Ja === null || !Ja.has(a)))
          ) {
            ((e = yn(n, e)),
              (n = xp(2)),
              (a = Ga(t, n, 2)),
              a !== null && (Cp(n, a, t, e), Ai(a, 2), Wn(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ed(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new W2();
      var i = new Set();
      a.set(t, i);
    } else ((i = a.get(t)), i === void 0 && ((i = new Set()), a.set(t, i)));
    i.has(n) ||
      ((Gf = !0), i.add(n), (e = ox.bind(null, e, t, n)), t.then(e, e));
  }
  function ox(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Je === e &&
        (De & n) === n &&
        ((rt === 4 ||
          (rt === 3 && (De & 62914560) === De && 300 > Lt() - Is)) &&
        (qe & 2) === 0
          ? Xr(e, 0)
          : (Xs |= n),
        Pr === De && (Pr = 0)),
      Wn(e));
  }
  function Nv(e, t) {
    (t === 0 && (t = fh()), (e = Al(e, t)), e !== null && (Ai(e, t), Wn(e)));
  }
  function sx(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Nv(e, n));
  }
  function cx(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    (a !== null && a.delete(t), Nv(e, n));
  }
  function ux(e, t) {
    return Ci(e, t);
  }
  var Zr = null,
    Qr = null,
    td = !1,
    ec = !1,
    nd = !1,
    el = 0;
  function Wn(e) {
    (e !== Qr &&
      e.next === null &&
      (Qr === null ? (Zr = Qr = e) : (Qr = Qr.next = e)),
      (ec = !0),
      td || ((td = !0), dx()));
  }
  function so(e, t) {
    if (!nd && ec) {
      nd = !0;
      do
        for (var n = !1, a = Zr; a !== null;) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var c = 0;
            else {
              var p = a.suspendedLanes,
                C = a.pingedLanes;
              ((c = (1 << (31 - ke(42 | e) + 1)) - 1),
                (c &= i & ~(p & ~C)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0));
            }
            c !== 0 && ((n = !0), _v(a, c));
          } else
            ((c = De),
              (c = Xo(
                a,
                a === Je ? c : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (c & 3) === 0 || Ri(a, c) || ((n = !0), _v(a, c)));
          a = a.next;
        }
      while (n);
      nd = !1;
    }
  }
  function fx() {
    Rv();
  }
  function Rv() {
    ec = td = !1;
    var e = 0;
    el !== 0 && Ex() && (e = el);
    for (var t = Lt(), n = null, a = Zr; a !== null;) {
      var i = a.next,
        c = Av(a, t);
      (c === 0
        ? ((a.next = null),
          n === null ? (Zr = i) : (n.next = i),
          i === null && (Qr = n))
        : ((n = a), (e !== 0 || (c & 3) !== 0) && (ec = !0)),
        (a = i));
    }
    ((nt !== 0 && nt !== 5) || so(e), el !== 0 && (el = 0));
  }
  function Av(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        i = e.expirationTimes,
        c = e.pendingLanes & -62914561;
      0 < c;
    ) {
      var p = 31 - ke(c),
        C = 1 << p,
        A = i[p];
      (A === -1
        ? ((C & n) === 0 || (C & a) !== 0) && (i[p] = OS(C, t))
        : A <= t && (e.expiredLanes |= C),
        (c &= ~C));
    }
    if (
      ((t = Je),
      (n = De),
      (n = Xo(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (a = e.callbackNode),
      n === 0 ||
        (e === t && (Ie === 2 || Ie === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && fr(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Ri(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && fr(a), iu(n))) {
        case 2:
        case 8:
          n = wi;
          break;
        case 32:
          n = dr;
          break;
        case 268435456:
          n = Ti;
          break;
        default:
          n = dr;
      }
      return (
        (a = Ov.bind(null, e)),
        (n = Ci(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      a !== null && a !== null && fr(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Ov(e, t) {
    if (nt !== 0 && nt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Ws() && e.callbackNode !== n) return null;
    var a = De;
    return (
      (a = Xo(
        e,
        e === Je ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (hv(e, a, t),
          Av(e, Lt()),
          e.callbackNode != null && e.callbackNode === n
            ? Ov.bind(null, e)
            : null)
    );
  }
  function _v(e, t) {
    if (Ws()) return null;
    hv(e, t, !0);
  }
  function dx() {
    Tx(function () {
      (qe & 6) !== 0 ? Ci(_n, fx) : Rv();
    });
  }
  function ad() {
    if (el === 0) {
      var e = zl;
      (e === 0 && ((e = Bt), (Bt <<= 1), (Bt & 261888) === 0 && (Bt = 256)),
        (el = e));
    }
    return el;
  }
  function Dv(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : $o(e);
  }
  function mx(e, t, n, a, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var c = Dv((i[Gt] || null).action),
        p = a.submitter;
      p &&
        ((t = (t = p[Gt] || null)
          ? Dv(t.formAction)
          : p.getAttribute("formAction")),
        t !== null && ((c = t), (p = null)));
      var C = new es("action", "action", null, a, i);
      e.push({
        event: C,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (el !== 0) {
                  var A = new FormData(i, p);
                  ff(
                    n,
                    { pending: !0, data: A, method: i.method, action: c },
                    null,
                    A
                  );
                }
              } else
                typeof c == "function" &&
                  (C.preventDefault(),
                  (A = new FormData(i, p)),
                  ff(
                    n,
                    { pending: !0, data: A, method: i.method, action: c },
                    c,
                    A
                  ));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var ld = 0; ld < Au.length; ld++) {
    var rd = Au[ld],
      hx = rd.toLowerCase(),
      px = rd[0].toUpperCase() + rd.slice(1);
    Dn(hx, "on" + px);
  }
  (Dn(a0, "onAnimationEnd"),
    Dn(l0, "onAnimationIteration"),
    Dn(r0, "onAnimationStart"),
    Dn("dblclick", "onDoubleClick"),
    Dn("focusin", "onFocus"),
    Dn("focusout", "onBlur"),
    Dn(w2, "onTransitionRun"),
    Dn(T2, "onTransitionStart"),
    Dn(N2, "onTransitionCancel"),
    Dn(i0, "onTransitionEnd"),
    vr("onMouseEnter", ["mouseout", "mouseover"]),
    vr("onMouseLeave", ["mouseout", "mouseover"]),
    vr("onPointerEnter", ["pointerout", "pointerover"]),
    vr("onPointerLeave", ["pointerout", "pointerover"]),
    Tl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Tl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Tl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Tl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Tl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Tl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    ));
  var co =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    vx = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(co)
    );
  function Mv(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        i = a.event;
      a = a.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = a.length - 1; 0 <= p; p--) {
            var C = a[p],
              A = C.instance,
              L = C.currentTarget;
            if (((C = C.listener), A !== c && i.isPropagationStopped()))
              break e;
            ((c = C), (i.currentTarget = L));
            try {
              c(i);
            } catch (Y) {
              as(Y);
            }
            ((i.currentTarget = null), (c = A));
          }
        else
          for (p = 0; p < a.length; p++) {
            if (
              ((C = a[p]),
              (A = C.instance),
              (L = C.currentTarget),
              (C = C.listener),
              A !== c && i.isPropagationStopped())
            )
              break e;
            ((c = C), (i.currentTarget = L));
            try {
              c(i);
            } catch (Y) {
              as(Y);
            }
            ((i.currentTarget = null), (c = A));
          }
      }
    }
  }
  function _e(e, t) {
    var n = t[gh];
    n === void 0 && (n = t[gh] = new Set());
    var a = e + "__bubble";
    n.has(a) || (jv(t, e, 2, !1), n.add(a));
  }
  function id(e, t, n) {
    var a = 0;
    (t && (a |= 4), jv(n, e, a, t));
  }
  var tc = "_reactListening" + Math.random().toString(36).slice(2);
  function od(e) {
    if (!e[tc]) {
      ((e[tc] = !0),
        Sh.forEach(function (n) {
          n !== "selectionchange" && (vx.has(n) || id(n, !1, e), id(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[tc] || ((t[tc] = !0), id("selectionchange", !1, t));
    }
  }
  function jv(e, t, n, a) {
    switch (Cg(t)) {
      case 2:
        var i = sC;
        break;
      case 8:
        i = cC;
        break;
      default:
        i = Rd;
    }
    ((n = i.bind(null, t, n, e)),
      (i = void 0),
      !hu ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      a
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1));
  }
  function sd(e, t, n, a, i) {
    var c = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var p = a.tag;
        if (p === 3 || p === 4) {
          var C = a.stateNode.containerInfo;
          if (C === i) break;
          if (p === 4)
            for (p = a.return; p !== null;) {
              var A = p.tag;
              if ((A === 3 || A === 4) && p.stateNode.containerInfo === i)
                return;
              p = p.return;
            }
          for (; C !== null;) {
            if (((p = wl(C)), p === null)) return;
            if (((A = p.tag), A === 5 || A === 6 || A === 26 || A === 27)) {
              a = c = p;
              continue e;
            }
            C = C.parentNode;
          }
        }
        a = a.return;
      }
    jh(function () {
      var L = c,
        Y = du(n),
        Z = [];
      e: {
        var z = o0.get(e);
        if (z !== void 0) {
          var V = es,
            se = e;
          switch (e) {
            case "keypress":
              if (Jo(n) === 0) break e;
            case "keydown":
            case "keyup":
              V = e2;
              break;
            case "focusin":
              ((se = "focus"), (V = yu));
              break;
            case "focusout":
              ((se = "blur"), (V = yu));
              break;
            case "beforeblur":
            case "afterblur":
              V = yu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = Lh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = kS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = r2;
              break;
            case a0:
            case l0:
            case r0:
              V = XS;
              break;
            case i0:
              V = o2;
              break;
            case "scroll":
            case "scrollend":
              V = PS;
              break;
            case "wheel":
              V = c2;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = ZS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = Uh;
              break;
            case "submit":
              V = a2;
              break;
            case "toggle":
            case "beforetoggle":
              V = f2;
          }
          var he = (t & 4) !== 0,
            we = !he && (e === "scroll" || e === "scrollend"),
            H = he ? (z !== null ? z + "Capture" : null) : z;
          he = [];
          for (var D = L, B; D !== null;) {
            var I = D;
            if (
              ((B = I.stateNode),
              (I = I.tag),
              (I !== 5 && I !== 26 && I !== 27) ||
                B === null ||
                H === null ||
                ((I = Di(D, H)), I != null && he.push(uo(D, I, B))),
              we)
            )
              break;
            D = D.return;
          }
          0 < he.length &&
            ((z = new V(z, se, null, n, Y)),
            Z.push({ event: z, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((V = e === "mouseover" || e === "pointerover"),
            (z = e === "mouseout" || e === "pointerout"),
            V &&
              n !== fu &&
              (se = n.relatedTarget || n.fromElement) &&
              (wl(se) || se[mr]))
          )
            break e;
          (z || V) &&
            ((se =
              Y.window === Y
                ? Y
                : (V = Y.ownerDocument)
                  ? V.defaultView || V.parentWindow
                  : window),
            z
              ? ((V = n.relatedTarget || n.toElement),
                (z = L),
                (V = V ? wl(V) : null),
                V !== null &&
                  ((we = u(V)),
                  (he = V.tag),
                  V !== we || (he !== 5 && he !== 27 && he !== 6)) &&
                  (V = null))
              : ((z = null), (V = L)),
            z !== V &&
              ((he = Lh),
              (I = "onMouseLeave"),
              (H = "onMouseEnter"),
              (D = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((he = Uh),
                (I = "onPointerLeave"),
                (H = "onPointerEnter"),
                (D = "pointer")),
              (we = z == null ? se : _i(z)),
              (B = V == null ? se : _i(V)),
              (se = new he(I, D + "leave", z, n, Y)),
              (se.target = we),
              (se.relatedTarget = B),
              (I = null),
              wl(Y) === L &&
                ((he = new he(H, D + "enter", V, n, Y)),
                (he.target = B),
                (he.relatedTarget = we),
                (I = he)),
              (we = I),
              (he = z && V ? P(z, V, gx) : null),
              z !== null && zv(Z, se, z, he, !1),
              V !== null && we !== null && zv(Z, we, V, he, !0)));
        }
        e: {
          if (
            ((z = L ? _i(L) : window),
            (V = z.nodeName && z.nodeName.toLowerCase()),
            V === "select" || (V === "input" && z.type === "file"))
          )
            var de = Ih;
          else if (Gh(z))
            if (Zh) de = x2;
            else {
              de = b2;
              var Me = y2;
            }
          else
            ((V = z.nodeName),
              !V ||
              V.toLowerCase() !== "input" ||
              (z.type !== "checkbox" && z.type !== "radio")
                ? L && uu(L.elementType) && (de = Ih)
                : (de = S2));
          if (de && (de = de(e, L))) {
            Xh(Z, de, n, Y);
            break e;
          }
          Me && Me(e, z, L);
        }
        switch (((Me = L ? _i(L) : window), e)) {
          case "focusin":
            (Gh(Me) || Me.contentEditable === "true") &&
              ((Cr = Me), (Tu = L), (Vi = null));
            break;
          case "focusout":
            Vi = Tu = Cr = null;
            break;
          case "mousedown":
            Nu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Nu = !1), t0(Z, n, Y));
            break;
          case "selectionchange":
            if (E2) break;
          case "keydown":
          case "keyup":
            t0(Z, n, Y);
        }
        var ve;
        if (Su)
          e: {
            switch (e) {
              case "compositionstart":
                var be = "onCompositionStart";
                break e;
              case "compositionend":
                be = "onCompositionEnd";
                break e;
              case "compositionupdate":
                be = "onCompositionUpdate";
                break e;
            }
            be = void 0;
          }
        else
          xr
            ? kh(e, n) && (be = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (be = "onCompositionStart");
        (be &&
          (Vh &&
            n.locale !== "ko" &&
            (xr || be !== "onCompositionStart"
              ? be === "onCompositionEnd" && xr && (ve = zh())
              : ((Ha = Y),
                (pu = "value" in Ha ? Ha.value : Ha.textContent),
                (xr = !0))),
          (Me = nc(L, be)),
          0 < Me.length &&
            ((be = new Bh(be, e, null, n, Y)),
            Z.push({ event: be, listeners: Me }),
            ve
              ? (be.data = ve)
              : ((ve = qh(n)), ve !== null && (be.data = ve)))),
          (ve = m2 ? h2(e, n) : p2(e, n)) &&
            ((be = nc(L, "onBeforeInput")),
            0 < be.length &&
              ((Me = new Bh("onBeforeInput", "beforeinput", null, n, Y)),
              Z.push({ event: Me, listeners: be }),
              (Me.data = ve))),
          mx(Z, e, L, n, Y));
      }
      Mv(Z, t);
    });
  }
  function uo(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function nc(e, t) {
    for (var n = t + "Capture", a = []; e !== null;) {
      var i = e,
        c = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          c === null ||
          ((i = Di(e, n)),
          i != null && a.unshift(uo(e, i, c)),
          (i = Di(e, t)),
          i != null && a.push(uo(e, i, c))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function gx(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function zv(e, t, n, a, i) {
    for (var c = t._reactName, p = []; n !== null && n !== a;) {
      var C = n,
        A = C.alternate,
        L = C.stateNode;
      if (((C = C.tag), A !== null && A === a)) break;
      ((C !== 5 && C !== 26 && C !== 27) ||
        L === null ||
        ((A = L),
        i
          ? ((L = Di(n, c)), L != null && p.unshift(uo(n, L, A)))
          : i || ((L = Di(n, c)), L != null && p.push(uo(n, L, A)))),
        (n = n.return));
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var yx = /\r\n?/g,
    bx = /\u0000|\uFFFD/g;
  function Hv(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        yx,
        `
`
      )
      .replace(bx, "");
  }
  function Lv(e, t) {
    return ((t = Hv(t)), Hv(e) === t);
  }
  function Qe(e, t, n, a, i, c) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          t === "body" || (t === "textarea" && a === "") || yr(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && yr(e, "" + a);
        else return;
        break;
      case "className":
        Ko(e, "class", a);
        break;
      case "tabIndex":
        Ko(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ko(e, n, a);
        break;
      case "style":
        Dh(e, a, c);
        return;
      case "data":
        if (t !== "object") {
          Ko(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        ((a = $o(a)), e.setAttribute(n, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" &&
            (n === "formAction"
              ? (t !== "input" && Qe(e, t, "name", i.name, i, null),
                Qe(e, t, "formEncType", i.formEncType, i, null),
                Qe(e, t, "formMethod", i.formMethod, i, null),
                Qe(e, t, "formTarget", i.formTarget, i, null))
              : (Qe(e, t, "encType", i.encType, i, null),
                Qe(e, t, "method", i.method, i, null),
                Qe(e, t, "target", i.target, i, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        ((a = $o(a)), e.setAttribute(n, a));
        break;
      case "onClick":
        a != null && (e.onclick = qn);
        return;
      case "onScroll":
        a != null && _e("scroll", e);
        return;
      case "onScrollEnd":
        a != null && _e("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((n = a.__html), n != null)) {
            if (i.children != null) throw Error(s(60));
            c?.__html !== n && (e.innerHTML = n);
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((n = $o(a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(n, a)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
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
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(n, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(n, a)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(n, a)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(n)
          : e.setAttribute(n, a);
        break;
      case "popover":
        (_e("beforetoggle", e), _e("toggle", e), Qo(e, "popover", a));
        break;
      case "xlinkActuate":
        oa(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        oa(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        oa(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        oa(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        oa(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        oa(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        oa(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        oa(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        oa(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Qo(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (
          !(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")
        )
          ((n = US.get(n) || n), Qo(e, n, a));
        else return;
    }
    Pe = !0;
  }
  function cd(e, t, n, a, i, c) {
    switch (n) {
      case "style":
        Dh(e, a, c);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((n = a.__html), n != null)) {
            if (i.children != null) throw Error(s(60));
            c?.__html !== n && (e.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof a == "string") yr(e, a);
        else if (typeof a == "number" || typeof a == "bigint") yr(e, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && _e("scroll", e);
        return;
      case "onScrollEnd":
        a != null && _e("scrollend", e);
        return;
      case "onClick":
        a != null && (e.onclick = qn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!xh.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((i = n.endsWith("Capture")),
              (c = n.slice(2, i ? n.length - 7 : void 0)),
              (t = e[Gt] || null),
              (t = t != null ? t[n] : null),
              typeof t == "function" && e.removeEventListener(c, t, i),
              typeof a == "function")
            ) {
              (typeof t != "function" &&
                t !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(c, a, i));
              break e;
            }
            ((Pe = !0),
              n in e
                ? (e[n] = a)
                : a === !0
                  ? e.setAttribute(n, "")
                  : Qo(e, n, a));
          }
        return;
    }
    Pe = !0;
  }
  function Dt(e, t, n) {
    switch (t) {
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
        (_e("error", e), _e("load", e));
        var a = !1,
          i = !1,
          c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var p = n[c];
            if (p != null)
              switch (c) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  Qe(e, t, c, p, n, null);
              }
          }
        (i && Qe(e, t, "srcSet", n.srcSet, n, null),
          a && Qe(e, t, "src", n.src, n, null));
        return;
      case "input":
        _e("invalid", e);
        var C = (c = p = i = null),
          A = null,
          L = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var Y = n[a];
            if (Y != null)
              switch (a) {
                case "name":
                  i = Y;
                  break;
                case "type":
                  p = Y;
                  break;
                case "checked":
                  A = Y;
                  break;
                case "defaultChecked":
                  L = Y;
                  break;
                case "value":
                  c = Y;
                  break;
                case "defaultValue":
                  C = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null) throw Error(s(137, t));
                  break;
                default:
                  Qe(e, t, a, Y, n, null);
              }
          }
        Rh(e, c, C, A, L, p, i, !1);
        return;
      case "select":
        (_e("invalid", e), (a = p = c = null));
        for (i in n)
          if (n.hasOwnProperty(i) && ((C = n[i]), C != null))
            switch (i) {
              case "value":
                c = C;
                break;
              case "defaultValue":
                p = C;
                break;
              case "multiple":
                a = C;
              default:
                Qe(e, t, i, C, n, null);
            }
        ((t = c),
          (n = p),
          (e.multiple = !!a),
          t != null ? gr(e, !!a, t, !1) : n != null && gr(e, !!a, n, !0));
        return;
      case "textarea":
        (_e("invalid", e), (c = i = a = null));
        for (p in n)
          if (n.hasOwnProperty(p) && ((C = n[p]), C != null))
            switch (p) {
              case "value":
                a = C;
                break;
              case "defaultValue":
                i = C;
                break;
              case "children":
                c = C;
                break;
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(s(91));
                break;
              default:
                Qe(e, t, p, C, n, null);
            }
        Oh(e, a, i, c);
        return;
      case "option":
        for (A in n)
          n.hasOwnProperty(A) &&
            ((a = n[A]), a != null) &&
            (A === "selected"
              ? (e.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : Qe(e, t, A, a, n, null));
        return;
      case "dialog":
        (_e("beforetoggle", e),
          _e("toggle", e),
          _e("cancel", e),
          _e("close", e));
        break;
      case "iframe":
      case "object":
        _e("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < co.length; a++) _e(co[a], e);
        break;
      case "image":
        (_e("error", e), _e("load", e));
        break;
      case "details":
        _e("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (_e("error", e), _e("load", e));
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
        for (L in n)
          if (n.hasOwnProperty(L) && ((a = n[L]), a != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                Qe(e, t, L, a, n, null);
            }
        return;
      default:
        if (uu(t)) {
          for (Y in n)
            n.hasOwnProperty(Y) &&
              ((a = n[Y]), a !== void 0 && cd(e, t, Y, a, n, void 0));
          return;
        }
    }
    for (C in n)
      n.hasOwnProperty(C) && ((a = n[C]), a != null && Qe(e, t, C, a, n, null));
  }
  var Sx = {};
  function xx(e, t, n, a) {
    switch (t) {
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
        var i = null,
          c = null,
          p = null,
          C = null,
          A = null,
          L = null,
          Y = null;
        for (V in n) {
          var Z = n[V];
          if (n.hasOwnProperty(V) && Z != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = Z;
              default:
                a.hasOwnProperty(V) || Qe(e, t, V, null, a, Z);
            }
        }
        for (var z in a) {
          var V = a[z];
          if (((Z = n[z]), a.hasOwnProperty(z) && (V != null || Z != null)))
            switch (z) {
              case "type":
                (V !== Z && (Pe = !0), (c = V));
                break;
              case "name":
                (V !== Z && (Pe = !0), (i = V));
                break;
              case "checked":
                (V !== Z && (Pe = !0), (L = V));
                break;
              case "defaultChecked":
                (V !== Z && (Pe = !0), (Y = V));
                break;
              case "value":
                (V !== Z && (Pe = !0), (p = V));
                break;
              case "defaultValue":
                (V !== Z && (Pe = !0), (C = V));
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(s(137, t));
                break;
              default:
                V !== Z && Qe(e, t, z, V, a, Z);
            }
        }
        su(e, p, C, A, L, Y, c, i);
        return;
      case "select":
        V = p = C = z = null;
        for (c in n)
          if (((A = n[c]), n.hasOwnProperty(c) && A != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                V = A;
              default:
                a.hasOwnProperty(c) || Qe(e, t, c, null, a, A);
            }
        for (i in a)
          if (
            ((c = a[i]),
            (A = n[i]),
            a.hasOwnProperty(i) && (c != null || A != null))
          )
            switch (i) {
              case "value":
                (c !== A && (Pe = !0), (z = c));
                break;
              case "defaultValue":
                (c !== A && (Pe = !0), (C = c));
                break;
              case "multiple":
                (c !== A && (Pe = !0), (p = c));
              default:
                c !== A && Qe(e, t, i, c, a, A);
            }
        ((t = C),
          (n = p),
          (a = V),
          z != null
            ? gr(e, !!n, z, !1)
            : !!a != !!n &&
              (t != null ? gr(e, !!n, t, !0) : gr(e, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        V = z = null;
        for (C in n)
          if (
            ((i = n[C]),
            n.hasOwnProperty(C) && i != null && !a.hasOwnProperty(C))
          )
            switch (C) {
              case "value":
                break;
              case "children":
                break;
              default:
                Qe(e, t, C, null, a, i);
            }
        for (p in a)
          if (
            ((i = a[p]),
            (c = n[p]),
            a.hasOwnProperty(p) && (i != null || c != null))
          )
            switch (p) {
              case "value":
                (i !== c && (Pe = !0), (z = i));
                break;
              case "defaultValue":
                (i !== c && (Pe = !0), (V = i));
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(s(91));
                break;
              default:
                i !== c && Qe(e, t, p, i, a, c);
            }
        Ah(e, z, V);
        return;
      case "option":
        for (var se in n)
          ((z = n[se]),
            n.hasOwnProperty(se) &&
              z != null &&
              !a.hasOwnProperty(se) &&
              (se === "selected"
                ? (e.selected = !1)
                : Qe(e, t, se, null, a, z)));
        for (A in a)
          ((z = a[A]),
            (V = n[A]),
            a.hasOwnProperty(A) &&
              z !== V &&
              (z != null || V != null) &&
              (A === "selected"
                ? (z !== V && (Pe = !0),
                  (e.selected =
                    z && typeof z != "function" && typeof z != "symbol"))
                : Qe(e, t, A, z, a, V)));
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
        for (var he in n)
          ((z = n[he]),
            n.hasOwnProperty(he) &&
              z != null &&
              !a.hasOwnProperty(he) &&
              Qe(e, t, he, null, a, z));
        for (L in a)
          if (
            ((z = a[L]),
            (V = n[L]),
            a.hasOwnProperty(L) && z !== V && (z != null || V != null))
          )
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(s(137, t));
                break;
              default:
                Qe(e, t, L, z, a, V);
            }
        return;
      default:
        if (uu(t)) {
          for (var we in n)
            ((z = n[we]),
              n.hasOwnProperty(we) &&
                z !== void 0 &&
                !a.hasOwnProperty(we) &&
                cd(e, t, we, void 0, a, z));
          for (Y in a)
            ((z = a[Y]),
              (V = n[Y]),
              !a.hasOwnProperty(Y) ||
                z === V ||
                (z === void 0 && V === void 0) ||
                cd(e, t, Y, z, a, V));
          return;
        }
    }
    for (var H in n)
      ((z = n[H]),
        n.hasOwnProperty(H) &&
          z != null &&
          !a.hasOwnProperty(H) &&
          Qe(e, t, H, null, a, z));
    for (Z in a)
      ((z = a[Z]),
        (V = n[Z]),
        !a.hasOwnProperty(Z) ||
          z === V ||
          (z == null && V == null) ||
          Qe(e, t, Z, z, a, V));
  }
  function Bv(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Cx() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0;
        a < n.length;
        a++
      ) {
        var i = n[a],
          c = i.transferSize,
          p = i.initiatorType,
          C = i.duration;
        if (c && C && Bv(p)) {
          for (p = 0, C = i.responseEnd, a += 1; a < n.length; a++) {
            var A = n[a],
              L = A.startTime;
            if (L > C) break;
            var Y = A.transferSize,
              Z = A.initiatorType;
            Y &&
              Bv(Z) &&
              ((A = A.responseEnd), (p += Y * (A < C ? 1 : (C - L) / (A - L))));
          }
          if ((--a, (t += (8 * (c + p)) / (i.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var ud = null,
    fd = null;
  function fo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Uv(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Vv(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Pv(e, t, n, a) {
    return (
      (n = fo(n).createElement(e)),
      (n[Nt] = a),
      (n[Gt] = t),
      Dt(n, e, t),
      bt(n),
      n
    );
  }
  function dd(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var md = null;
  function Ex() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === md
        ? !1
        : ((md = e), !0)
      : ((md = null), !1);
  }
  var hd = typeof setTimeout == "function" ? setTimeout : void 0,
    wx = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Yv = typeof Promise == "function" ? Promise : void 0,
    kv =
      typeof requestAnimationFrame == "function" ? requestAnimationFrame : hd,
    Tx =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Yv < "u"
          ? function (e) {
              return Yv.resolve(null).then(e).catch(Nx);
            }
          : hd;
  function Nx(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function tl(e) {
    return e === "head";
  }
  function qv(e, t) {
    var n = t,
      a = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$" || n === "/&")) {
          if (a === 0) {
            (e.removeChild(i), ti(t));
            return;
          }
          a--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          a++;
        else if (n === "html") Cd(e.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = e.ownerDocument.head), Cd(n));
          for (var c = n.firstChild; c;) {
            var p = c.nextSibling,
              C = c.nodeName;
            (c[Oi] ||
              C === "SCRIPT" ||
              C === "STYLE" ||
              (C === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(c),
              (c = p));
          }
        } else n === "body" && Cd(e.ownerDocument.body);
      n = i;
    } while (n);
    ti(t);
  }
  function Gv(e, t) {
    var n = e;
    e = 0;
    do {
      var a = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((n = a.data), n === "/$")) {
          if (e === 0) break;
          e--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || e++;
      n = a;
    } while (n);
  }
  function Xv(e, t, n) {
    if (
      ((t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t),
      (e.style.viewTransitionName = t),
      n != null && (e.style.viewTransitionClass = n),
      (n = getComputedStyle(e)),
      n.display === "inline")
    ) {
      if (((t = e.getClientRects()), t.length === 1)) var a = 1;
      else
        for (var i = (a = 0); i < t.length; i++) {
          var c = t[i];
          0 < c.width && 0 < c.height && a++;
        }
      a === 1 &&
        ((e = e.style),
        (e.display = t.length === 1 ? "inline-block" : "block"),
        (e.marginTop = "-" + n.paddingTop),
        (e.marginBottom = "-" + n.paddingBottom));
    }
  }
  function Iv(e, t) {
    ((e = e.style), (t = t.style));
    var n =
      t != null
        ? t.hasOwnProperty("viewTransitionName")
          ? t.viewTransitionName
          : t.hasOwnProperty("view-transition-name")
            ? t["view-transition-name"]
            : null
        : null;
    ((e.viewTransitionName =
      n == null || typeof n == "boolean" ? "" : ("" + n).trim()),
      (n =
        t != null
          ? t.hasOwnProperty("viewTransitionClass")
            ? t.viewTransitionClass
            : t.hasOwnProperty("view-transition-class")
              ? t["view-transition-class"]
              : null
          : null),
      (e.viewTransitionClass =
        n == null || typeof n == "boolean" ? "" : ("" + n).trim()),
      e.display === "inline-block" &&
        (t == null
          ? (e.display = e.margin = "")
          : ((n = t.display),
            (e.display = n == null || typeof n == "boolean" ? "" : n),
            (n = t.margin),
            n != null
              ? (e.margin = n)
              : ((n = t.hasOwnProperty("marginTop")
                  ? t.marginTop
                  : t["margin-top"]),
                (e.marginTop = n == null || typeof n == "boolean" ? "" : n),
                (t = t.hasOwnProperty("marginBottom")
                  ? t.marginBottom
                  : t["margin-bottom"]),
                (e.marginBottom =
                  t == null || typeof t == "boolean" ? "" : t)))));
  }
  function Rx(e, t, n) {
    return (
      (n = n.ownerDocument.defaultView),
      {
        rect: e,
        abs: t.position === "absolute" || t.position === "fixed",
        clip:
          t.clipPath !== "none" ||
          t.overflow !== "visible" ||
          t.filter !== "none" ||
          t.mask !== "none" ||
          t.mask !== "none" ||
          t.borderRadius !== "0px",
        view:
          0 <= e.bottom &&
          0 <= e.right &&
          e.top <= n.innerHeight &&
          e.left <= n.innerWidth,
      }
    );
  }
  function pd(e) {
    var t = e.getBoundingClientRect(),
      n = getComputedStyle(e);
    return Rx(t, n, e);
  }
  function Ax(e) {
    return e.documentElement.clientHeight;
  }
  function Ox(e) {
    (this.addEventListener("load", e), this.addEventListener("error", e));
  }
  function _x(e, t, n, a, i, c, p, C, A) {
    var L = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var Y = L.startViewTransition({
        update: function () {
          var z = L.defaultView,
            V = z.navigation && z.navigation.transition,
            se = L.fonts.status;
          a();
          var he = [];
          if (
            (se === "loaded" &&
              (Ax(L), L.fonts.status === "loading" && he.push(L.fonts.ready)),
            (se = he.length),
            e !== null)
          )
            for (var we = e.suspenseyImages, H = 0, D = 0; D < we.length; D++) {
              var B = we[D];
              if (!B.complete) {
                var I = B.getBoundingClientRect();
                if (
                  0 < I.bottom &&
                  0 < I.right &&
                  I.top < z.innerHeight &&
                  I.left < z.innerWidth
                ) {
                  if (((H += mg(B)), H > rc)) {
                    he.length = se;
                    break;
                  }
                  ((B = new Promise(Ox.bind(B))), he.push(B));
                }
              }
            }
          if (0 < he.length)
            return (
              (z = Promise.race([
                Promise.all(he),
                new Promise(function (de) {
                  return setTimeout(de, 500);
                }),
              ]).then(i, i)),
              (V ? Promise.allSettled([V.finished, z]) : z).then(c, c)
            );
          if ((i(), V)) return V.finished.then(c, c);
          c();
        },
        types: n,
      });
      L.__reactViewTransition = Y;
      var Z = [];
      return (
        Y.ready.then(
          function () {
            for (
              var z = L.documentElement.getAnimations({ subtree: !0 }), V = 0;
              V < z.length;
              V++
            ) {
              var se = z[V],
                he = se.effect,
                we = he.pseudoElement;
              if (we != null && we.startsWith("::view-transition")) {
                (Z.push(se), (se = he.getKeyframes()));
                for (var H = (we = void 0), D = !0, B = 0; B < se.length; B++) {
                  var I = se[B],
                    de = I.width;
                  if (we === void 0) we = de;
                  else if (we !== de) {
                    D = !1;
                    break;
                  }
                  if (((de = I.height), H === void 0)) H = de;
                  else if (H !== de) {
                    D = !1;
                    break;
                  }
                  (delete I.width,
                    delete I.height,
                    I.transform === "none" && delete I.transform);
                }
                D &&
                  we !== void 0 &&
                  H !== void 0 &&
                  (he.setKeyframes(se),
                  (D = getComputedStyle(he.target, he.pseudoElement)),
                  D.width !== we || D.height !== H) &&
                  ((D = se[0]),
                  (D.width = we),
                  (D.height = H),
                  (D = se[se.length - 1]),
                  (D.width = we),
                  (D.height = H),
                  he.setKeyframes(se));
              }
            }
            p();
          },
          function (z) {
            L.__reactViewTransition === Y && (L.__reactViewTransition = null);
            try {
              (typeof z == "object" &&
                z !== null &&
                z.name === "InvalidStateError" &&
                (z.message ===
                  "View transition was skipped because document visibility state is hidden." ||
                  z.message ===
                    "Skipping view transition because document visibility state has become hidden." ||
                  z.message ===
                    "Skipping view transition because viewport size changed." ||
                  z.message ===
                    "Transition was aborted because of invalid state") &&
                (z = null),
                z !== null && A(z));
            } finally {
              (a(), i(), p());
            }
          }
        ),
        Y.finished.finally(function () {
          for (var z = 0; z < Z.length; z++) Z[z].cancel();
          (L.__reactViewTransition === Y && (L.__reactViewTransition = null),
            C());
        }),
        Y
      );
    } catch {
      return (a(), i(), p(), null);
    }
  }
  function Xl(e, t) {
    ((this._scope = document.documentElement),
      (this._selector = "::view-transition-" + e + "(" + t + ")"));
  }
  ((Xl.prototype.animate = function (e, t) {
    return (
      (t = typeof t == "number" ? { duration: t } : U({}, t)),
      (t.pseudoElement = this._selector),
      this._scope.animate(e, t)
    );
  }),
    (Xl.prototype.getAnimations = function () {
      for (
        var e = this._scope,
          t = this._selector,
          n = e.getAnimations({ subtree: !0 }),
          a = [],
          i = 0;
        i < n.length;
        i++
      ) {
        var c = n[i].effect;
        c !== null && c.target === e && c.pseudoElement === t && a.push(n[i]);
      }
      return a;
    }),
    (Xl.prototype.getComputedStyle = function () {
      return getComputedStyle(this._scope, this._selector);
    }));
  function Zv(e) {
    return {
      name: e,
      group: new Xl("group", e),
      imagePair: new Xl("image-pair", e),
      old: new Xl("old", e),
      new: new Xl("new", e),
    };
  }
  function un(e) {
    ((this._fragmentFiber = e),
      (this._observers = this._eventListeners = null));
  }
  un.prototype.addEventListener = function (e, t, n) {
    var a = null,
      i = null;
    if (!(
      n != null &&
      typeof n != "boolean" &&
      ((a = n.signal || null), a !== null && a.aborted)
    )) {
      this._eventListeners === null && (this._eventListeners = []);
      var c = this._eventListeners;
      if (Kv(c, e, t, n) === -1) {
        var p = this,
          C = t;
        (n != null &&
          typeof n != "boolean" &&
          n.once === !0 &&
          (C = function (A) {
            (p.removeEventListener(e, t, n),
              typeof t == "function" ? t.call(this, A) : t.handleEvent(A));
          }),
          a !== null &&
            ((i = p.removeEventListener.bind(p, e, t, n)),
            a.addEventListener("abort", i, { once: !0 }),
            (i = a.removeEventListener.bind(a, "abort", i))),
          (a = Kr(n)),
          c.push({
            type: e,
            listener: t,
            optionsOrUseCapture: n,
            attachedListener: C,
            cleanup: i,
          }),
          h(this._fragmentFiber.child, !1, Dx, e, C, a));
      }
      this._eventListeners = c;
    }
  };
  function Dx(e, t, n, a) {
    return (N(e).addEventListener(t, n, a), !1);
  }
  un.prototype.removeEventListener = function (e, t, n) {
    var a = this._eventListeners;
    if (a !== null && ((t = Kv(a, e, t, n)), t !== -1)) {
      var i = a[t];
      n = i.attachedListener;
      var c = i.cleanup;
      ((i = Kr(i.optionsOrUseCapture)),
        h(this._fragmentFiber.child, !1, Mx, e, n, i),
        a.splice(t, 1),
        c !== null && c());
    }
  };
  function Mx(e, t, n, a) {
    return (N(e).removeEventListener(t, n, a), !1);
  }
  function Kr(e) {
    return e != null &&
      typeof e != "boolean" &&
      (e.once === !0 || e.signal instanceof AbortSignal)
      ? { capture: e.capture, passive: e.passive }
      : e;
  }
  function Qv(e) {
    return e == null
      ? "c=0"
      : typeof e == "boolean"
        ? "c=" + (e ? "1" : "0")
        : "c=" + (e.capture ? "1" : "0");
  }
  function Kv(e, t, n, a) {
    if (e.length === 0) return -1;
    a = Qv(a);
    for (var i = 0; i < e.length; i++) {
      var c = e[i];
      if (c.type === t && c.listener === n && Qv(c.optionsOrUseCapture) === a)
        return i;
    }
    return -1;
  }
  ((un.prototype.dispatchEvent = function (e) {
    var t = x(this._fragmentFiber);
    if (t === null) return !0;
    t = N(t);
    var n = this._eventListeners;
    if ((n !== null && 0 < n.length) || !e.bubbles) {
      var a =
        t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (n)
        for (var i = 0; i < n.length; i++) {
          var c = n[i];
          a.addEventListener(
            c.type,
            c.attachedListener,
            Kr(c.optionsOrUseCapture)
          );
        }
      if ((t.appendChild(a), (e = a.dispatchEvent(e)), n))
        for (i = 0; i < n.length; i++)
          ((c = n[i]),
            a.removeEventListener(
              c.type,
              c.attachedListener,
              Kr(c.optionsOrUseCapture)
            ));
      return (t.removeChild(a), e);
    }
    return t.dispatchEvent(e);
  }),
    (un.prototype.focus = function (e) {
      h(this._fragmentFiber.child, !0, $v, e, void 0, void 0);
    }));
  function $v(e, t) {
    return e.tag === 6 ? !1 : ((e = N(e)), Gx(e, t));
  }
  un.prototype.focusLast = function (e) {
    var t = [];
    h(this._fragmentFiber.child, !0, vd, t, void 0, void 0);
    for (var n = t.length - 1; 0 <= n && !$v(t[n], e); n--);
  };
  function vd(e, t) {
    return (t.push(e), !1);
  }
  un.prototype.blur = function () {
    var e = x(this._fragmentFiber);
    e !== null &&
      ((e = N(e)),
      (e = fo(e).activeElement),
      e !== null && h(this._fragmentFiber.child, !1, jx, e, void 0, void 0));
  };
  function jx(e, t) {
    return e.tag === 6
      ? !1
      : ((e = N(e)), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  un.prototype.observeUsing = function (e) {
    (this._observers === null && (this._observers = new Set()),
      this._observers.add(e),
      h(this._fragmentFiber.child, !1, zx, e, void 0, void 0));
  };
  function zx(e, t) {
    return (e.tag === 6 || ((e = N(e)), t.observe(e)), !1);
  }
  un.prototype.unobserveUsing = function (e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      (t.delete(e), h(this._fragmentFiber.child, !1, Hx, e, void 0, void 0));
      for (var n = (t = 0); n < Ln.length; n++) {
        var a = Ln[n];
        a.fragmentInstance === this && a.observer === e
          ? e.unobserve(a.instance)
          : (Ln[t++] = a);
      }
      Ln.length = t;
    }
  };
  function Hx(e, t) {
    return (e.tag === 6 || ((e = N(e)), t.unobserve(e)), !1);
  }
  var Ln = [],
    gd = !1;
  function Lx(e, t, n) {
    (Ln.push({ fragmentInstance: e, observer: t, instance: n }),
      gd ||
        ((gd = !0),
        Xx(function () {
          gd = !1;
          var a = Ln;
          Ln = [];
          for (var i = 0; i < a.length; i++) {
            var c = a[i];
            c.observer.unobserve(c.instance);
          }
        })));
  }
  un.prototype.getClientRects = function () {
    var e = [];
    return (h(this._fragmentFiber.child, !1, Bx, e, void 0, void 0), e);
  };
  function Bx(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var n = e.ownerDocument.createRange();
      (n.selectNodeContents(e), t.push.apply(t, n.getClientRects()));
    } else ((e = N(e)), t.push.apply(t, e.getClientRects()));
    return !1;
  }
  ((un.prototype.getRootNode = function (e) {
    var t = x(this._fragmentFiber);
    return t === null ? this : N(t).getRootNode(e);
  }),
    (un.prototype.compareDocumentPosition = function (e) {
      var t = x(this._fragmentFiber);
      if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      var n = [];
      h(this._fragmentFiber.child, !1, vd, n, void 0, void 0);
      var a = N(t);
      if (n.length === 0) {
        if (((n = a), E(this._fragmentFiber))) {
          e: {
            for (t = this._fragmentFiber.return; t !== null;) {
              if (t.tag === 4) {
                t = t.stateNode.containerInfo;
                break e;
              }
              if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
              t = t.return;
            }
            t = null;
          }
          t != null && (n = t);
        }
        t = this._fragmentFiber;
        var i = (a = n.compareDocumentPosition(e));
        return (
          n === e
            ? (i = Node.DOCUMENT_POSITION_CONTAINS)
            : a & Node.DOCUMENT_POSITION_CONTAINED_BY &&
              ((n = w(t)[1]),
              n === null
                ? (i = Node.DOCUMENT_POSITION_PRECEDING)
                : ((e = N(n).compareDocumentPosition(e)),
                  (i =
                    e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING
                      ? Node.DOCUMENT_POSITION_FOLLOWING
                      : Node.DOCUMENT_POSITION_PRECEDING))),
          (i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
        );
      }
      ((t = N(n[0])), (i = N(n[n.length - 1])));
      var c = E(this._fragmentFiber) ? t.parentElement : a;
      if (c == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      ((a = c.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY),
        (c =
          c.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY));
      var p = t.compareDocumentPosition(e),
        C = i.compareDocumentPosition(e),
        A =
          p & Node.DOCUMENT_POSITION_CONTAINED_BY ||
          C & Node.DOCUMENT_POSITION_CONTAINED_BY;
      return (
        (C =
          a &&
          c &&
          p & Node.DOCUMENT_POSITION_FOLLOWING &&
          C & Node.DOCUMENT_POSITION_PRECEDING),
        (t =
          (a && t === e) || (c && i === e) || A || C
            ? Node.DOCUMENT_POSITION_CONTAINED_BY
            : (!a && t === e) || (!c && i === e)
              ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
              : p),
        t & Node.DOCUMENT_POSITION_DISCONNECTED ||
        t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
        Ux(t, this._fragmentFiber, n[0], n[n.length - 1], e)
          ? t
          : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
      );
    }));
  function Ux(e, t, n, a, i) {
    var c = wl(i);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if ((n = !!c))
        e: {
          for (; c !== null;) {
            if (c.tag === 7 && (c === t || c.alternate === t)) {
              n = !0;
              break e;
            }
            c = c.return;
          }
          n = !1;
        }
      return n;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (c === null)
        return (
          (c = i.ownerDocument),
          i === c || i === c.documentElement || i === c.body
        );
      e: {
        for (c = t, t = x(t); c !== null;) {
          if (!(
            (c.tag !== 5 && c.tag !== 3 && c.tag !== 27) ||
            (c !== t && c.alternate !== t)
          )) {
            c = !0;
            break e;
          }
          c = c.return;
        }
        c = !1;
      }
      return c;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING
      ? ((t = !!c) &&
          !(t = c === n) &&
          ((t = P(n, c, G)),
          t === null
            ? (t = !1)
            : (h(t, !0, _, c, n), (c = R), (R = null), (t = c !== null))),
        t)
      : e & Node.DOCUMENT_POSITION_FOLLOWING
        ? ((t = !!c) &&
            !(t = c === a) &&
            ((t = P(a, c, G)),
            t === null
              ? (t = !1)
              : (h(t, !0, j, c, a), (c = R), (M = R = null), (t = c !== null))),
          t)
        : !1;
  }
  function Fv(e, t) {
    var n = e.ownerDocument.createRange();
    (n.selectNodeContents(e),
      (e = n.getBoundingClientRect()),
      window.scrollTo(
        window.scrollX + e.left,
        t
          ? window.scrollY + e.top
          : window.scrollY + e.bottom - window.innerHeight
      ));
  }
  un.prototype.scrollIntoView = function (e) {
    if (typeof e == "object") throw Error(s(566));
    var t = [];
    h(this._fragmentFiber.child, !1, vd, t, void 0, void 0);
    var n = e !== !1;
    if (t.length === 0) {
      var a = w(this._fragmentFiber);
      if (
        ((a = n ? a[1] || a[0] || x(this._fragmentFiber) : a[0] || a[1]),
        a === null)
      )
        return;
      if (a.tag === 6) {
        ((e = N(a)), Fv(e, n));
        return;
      }
      if (((a = N(a)), a.nodeType !== 9)) {
        if (a.nodeType === 11) {
          ((n = "host" in a ? a.host : null),
            n !== null && n.scrollIntoView(e));
          return;
        }
        a.scrollIntoView(e);
      }
    }
    for (a = n ? t.length - 1 : 0; a !== (n ? -1 : t.length);) {
      var i = t[a];
      (i.tag === 6 ? ((i = N(i)), Fv(i, n)) : N(i).scrollIntoView(e),
        (a += n ? -1 : 1));
    }
  };
  function Vx(e, t) {
    return ((e = N(e)), Jv(e, t), !1);
  }
  function Jv(e, t) {
    (e.reactFragments == null && (e.reactFragments = new Set()),
      e.reactFragments.add(t));
  }
  function Wv(e, t) {
    var n = t._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a];
        e.addEventListener(
          i.type,
          i.attachedListener,
          Kr(i.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 &&
      ((n = t._observers),
      n !== null &&
        n.forEach(function (c) {
          for (var p = 0, C = 0; C < Ln.length; C++) {
            var A = Ln[C];
            (A.fragmentInstance !== t ||
              A.observer !== c ||
              A.instance !== e) &&
              (Ln[p++] = A);
          }
          ((Ln.length = p), c.observe(e));
        }),
      Jv(e, t));
  }
  function Px(e, t) {
    var n = t._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a];
        e.removeEventListener(
          i.type,
          i.attachedListener,
          Kr(i.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 &&
      ((n = t._observers),
      n !== null &&
        n.forEach(function (c) {
          typeof c.rootMargin == "string" ? Lx(t, c, e) : c.unobserve(e);
        }),
      e.reactFragments != null && e.reactFragments.delete(t));
  }
  function yd(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (yd(n), Zo(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Yx(e, t, n, a) {
    for (; e.nodeType === 1;) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[Oi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((c = e.getAttribute("rel")),
                c === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== i.rel ||
                e.getAttribute("href") !==
                  (i.href == null || i.href === "" ? null : i.href) ||
                e.getAttribute("crossorigin") !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute("title") !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((c = e.getAttribute("src")),
                (c !== (i.src == null ? null : i.src) ||
                  e.getAttribute("type") !== (i.type == null ? null : i.type) ||
                  e.getAttribute("crossorigin") !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  c &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === c) return e;
      } else return e;
      if (((e = En(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function kx(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = En(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function eg(e, t) {
    for (; e.nodeType !== 8;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = En(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function bd(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Sd(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function qx(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), n.removeEventListener("DOMContentLoaded", a));
      };
      (n.addEventListener("DOMContentLoaded", a), (e._reactRetry = a));
    }
  }
  function En(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var xd = null;
  function tg(e) {
    e = e.nextSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return En(e.nextSibling);
          t--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function ng(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else (n !== "/$" && n !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Gx(e, t) {
    function n() {
      a = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var a = !1;
    try {
      (e.ownerDocument.addEventListener("focus", n, !0),
        (e.focus || HTMLElement.prototype.focus).call(e, t));
    } finally {
      e.ownerDocument.removeEventListener("focus", n, !0);
    }
    return a;
  }
  function Xx(e) {
    kv(function () {
      kv(function (t) {
        return e(t);
      });
    });
  }
  function ag(e, t, n) {
    switch (((t = fo(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function lg(e, t, n) {
    for (var a in n) {
      var i = n[a];
      n.hasOwnProperty(a) && i != null && Qe(e, t, a, null, Sx, i);
    }
    (n.dangerouslySetInnerHTML != null && (e.textContent = ""),
      e.onclick === qn && (e.onclick = null),
      Zo(e));
  }
  function Cd(e) {
    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
    Zo(e);
  }
  var wn = new Map(),
    rg = new Set();
  function mo(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Sa = ue.d;
  ue.d = { f: Ix, r: Zx, D: Qx, C: Kx, L: $x, m: Fx, X: Wx, S: Jx, M: eC };
  function Ix() {
    var e = Sa.f(),
      t = $s();
    return e || t;
  }
  function Zx(e) {
    var t = hr(e);
    t !== null && t.tag === 5 && t.type === "form" ? op(t) : Sa.r(e);
  }
  var $r = typeof document > "u" ? null : document;
  function ig(e, t, n) {
    var a = $r;
    if (a && typeof t == "string" && t) {
      var i = vn(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof n == "string" && (i += '[crossorigin="' + n + '"]'),
        rg.has(i) ||
          (rg.add(i),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(i) === null &&
            ((t = a.createElement("link")),
            Dt(t, "link", e),
            bt(t),
            a.head.appendChild(t))));
    }
  }
  function Qx(e) {
    (Sa.D(e), ig("dns-prefetch", e, null));
  }
  function Kx(e, t) {
    (Sa.C(e, t), ig("preconnect", e, t));
  }
  function $x(e, t, n) {
    Sa.L(e, t, n);
    var a = $r;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + vn(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((i += '[imagesrcset="' + vn(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (i += '[imagesizes="' + vn(n.imageSizes) + '"]'))
        : (i += '[href="' + vn(e) + '"]');
      var c = i;
      switch (t) {
        case "style":
          c = Fr(e);
          break;
        case "script":
          c = Jr(e);
      }
      if (!(
        wn.has(c) ||
        ((e = U(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        wn.set(c, e),
        a.querySelector(i) !== null ||
          (t === "style" && a.querySelector(ho(c))) ||
          (t === "script" && a.querySelector(po(c))))
      )) {
        var p = a.createElement("link");
        (Dt(p, "link", e),
          t === "style" &&
            ((p[Io] = !0),
            (p.onload = p.onerror =
              function () {
                bh(p);
              })),
          bt(p),
          a.head.appendChild(p));
      }
    }
  }
  function Fx(e, t) {
    Sa.m(e, t);
    var n = $r;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        i =
          'link[rel="modulepreload"][as="' + vn(a) + '"][href="' + vn(e) + '"]',
        c = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Jr(e);
      }
      if (
        !wn.has(c) &&
        ((e = U({ rel: "modulepreload", href: e }, t)),
        wn.set(c, e),
        n.querySelector(i) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(po(c))) return;
        }
        ((a = n.createElement("link")),
          Dt(a, "link", e),
          bt(a),
          n.head.appendChild(a));
      }
    }
  }
  function Jx(e, t, n) {
    Sa.S(e, t, n);
    var a = $r;
    if (a && e) {
      var i = pr(a).hoistableStyles,
        c = Fr(e);
      t = t || "default";
      var p = i.get(c);
      if (!p) {
        var C = { loading: 0, preload: null };
        if ((p = a.querySelector(ho(c)))) C.loading = 5;
        else {
          ((e = U({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = wn.get(c)) && Ed(e, n));
          var A = (p = a.createElement("link"));
          (bt(A),
            Dt(A, "link", e),
            (A._p = new Promise(function (L, Y) {
              ((A.onload = L), (A.onerror = Y));
            })),
            A.addEventListener("load", function () {
              C.loading |= 1;
            }),
            A.addEventListener("error", function () {
              C.loading |= 2;
            }),
            (C.loading |= 4),
            ac(p, t, a));
        }
        ((p = { type: "stylesheet", instance: p, count: 1, state: C }),
          i.set(c, p));
      }
    }
  }
  function Wx(e, t) {
    Sa.X(e, t);
    var n = $r;
    if (n && e) {
      var a = pr(n).hoistableScripts,
        i = Jr(e),
        c = a.get(i);
      c ||
        ((c = n.querySelector(po(i))),
        c ||
          ((e = U({ src: e, async: !0 }, t)),
          (t = wn.get(i)) && wd(e, t),
          (c = n.createElement("script")),
          bt(c),
          Dt(c, "link", e),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(i, c));
    }
  }
  function eC(e, t) {
    Sa.M(e, t);
    var n = $r;
    if (n && e) {
      var a = pr(n).hoistableScripts,
        i = Jr(e),
        c = a.get(i);
      c ||
        ((c = n.querySelector(po(i))),
        c ||
          ((e = U({ src: e, async: !0, type: "module" }, t)),
          (t = wn.get(i)) && wd(e, t),
          (c = n.createElement("script")),
          bt(c),
          Dt(c, "link", e),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(i, c));
    }
  }
  function og(e, t, n, a) {
    var i = (i = Yn.current) ? mo(i) : null;
    if (!i) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((n = Fr(n.href)),
            (t = pr(i).hoistableStyles),
            (a = t.get(n)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              t.set(n, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = Fr(n.href);
          var c = pr(i).hoistableStyles,
            p = c.get(e);
          if (
            (p ||
              ((i = i.ownerDocument || i),
              (p = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(e, p),
              (c = i.querySelector(ho(e)))
                ? c._p || ((p.instance = c), (p.state.loading = 5))
                : ((c = wn.get(e)),
                  c ||
                    ((c = {
                      rel: "preload",
                      as: "style",
                      href: n.href,
                      crossOrigin: n.crossOrigin,
                      integrity: n.integrity,
                      media: n.media,
                      hrefLang: n.hrefLang,
                      referrerPolicy: n.referrerPolicy,
                    }),
                    wn.set(e, c)),
                  tC(i, e, c, p.state))),
            t && a === null)
          )
            throw Error(s(528, ""));
          return p;
        }
        if (t && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((n = Jr(n)),
              (t = pr(i).hoistableScripts),
              (a = t.get(n)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                t.set(n, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function Fr(e) {
    return 'href="' + vn(e) + '"';
  }
  function ho(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function sg(e) {
    return U({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function tC(e, t, n, a) {
    if ((t = e.querySelector('link[rel="preload"][as="style"][' + t + "]"))) {
      if (t[Io] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      ((t = e.createElement("link")),
        (t[Io] = !0),
        (t.onload = t.onerror = bh.bind(null, t)),
        Dt(t, "link", n),
        bt(t),
        e.head.appendChild(t));
    ((a.preload = t),
      t.addEventListener("load", function () {
        return (a.loading |= 1);
      }),
      t.addEventListener("error", function () {
        return (a.loading |= 2);
      }));
  }
  function Jr(e) {
    return '[src="' + vn(e) + '"]';
  }
  function po(e) {
    return "script[async]" + e;
  }
  function cg(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + vn(n.href) + '"]');
          if (a) return ((t.instance = a), bt(a), a);
          var i = U({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            bt(a),
            Dt(a, "style", i),
            ac(a, n.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          i = Fr(n.href);
          var c = e.querySelector(ho(i));
          if (c) return ((t.state.loading |= 4), (t.instance = c), bt(c), c);
          ((a = sg(n)),
            (i = wn.get(i)) && Ed(a, i),
            (c = (e.ownerDocument || e).createElement("link")),
            bt(c));
          var p = c;
          return (
            (p._p = new Promise(function (C, A) {
              ((p.onload = C), (p.onerror = A));
            })),
            Dt(c, "link", a),
            (t.state.loading |= 4),
            ac(c, n.precedence, e),
            (t.instance = c)
          );
        case "script":
          return (
            (c = Jr(n.src)),
            (i = e.querySelector(po(c)))
              ? ((t.instance = i), bt(i), i)
              : ((a = n),
                (i = wn.get(c)) && ((a = U({}, n)), wd(a, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement("script")),
                bt(i),
                Dt(i, "link", a),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), ac(a, n.precedence, e));
    return t.instance;
  }
  function ac(e, t, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        i = a.length ? a[a.length - 1] : null,
        c = i,
        p = 0;
      p < a.length;
      p++
    ) {
      var C = a[p];
      if (C.dataset.precedence === t) c = C;
      else if (c !== i) break;
    }
    c
      ? c.parentNode.insertBefore(e, c.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Ed(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function wd(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var lc = null;
  function ug(e, t, n) {
    if (lc === null) {
      var a = new Map(),
        i = (lc = new Map());
      i.set(n, a);
    } else ((i = lc), (a = i.get(n)), a || ((a = new Map()), i.set(n, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), n = n.getElementsByTagName(e), i = 0;
      i < n.length;
      i++
    ) {
      var c = n[i];
      if (
        !(
          c[Oi] ||
          c[Nt] ||
          (e === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var p = c.getAttribute(t) || "";
        p = e + p;
        var C = a.get(p);
        C ? C.push(c) : a.set(p, [c]);
      }
    }
    return a;
  }
  function Td(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      ));
  }
  function nC(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function fg(e, t) {
    return (
      e === "img" &&
      t.src != null &&
      t.src !== "" &&
      t.onLoad == null &&
      t.loading !== "lazy"
    );
  }
  function dg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function mg(e) {
    return (
      (e.width || 100) *
      (e.height || 100) *
      (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) *
      0.25
    );
  }
  function hg(e, t) {
    typeof t.decode == "function" &&
      (e.imgCount++,
      t.complete || ((e.imgBytes += mg(t)), e.suspenseyImages.push(t)),
      (e = rC.bind(e)),
      t.decode().then(e, e));
  }
  function aC(e, t, n, a) {
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var i = Fr(a.href),
          c = t.querySelector(ho(i));
        if (c) {
          ((t = c._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = vo.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = c),
            bt(c));
          return;
        }
        ((c = t.ownerDocument || t),
          (a = sg(a)),
          (i = wn.get(i)) && Ed(a, i),
          (c = c.createElement("link")),
          bt(c));
        var p = c;
        ((p._p = new Promise(function (C, A) {
          ((p.onload = C), (p.onerror = A));
        })),
          Dt(c, "link", a),
          (n.instance = c));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = vo.bind(e)),
          t.addEventListener("load", n),
          t.addEventListener("error", n)));
    }
  }
  var rc = 0;
  function lC(e, t) {
    return (
      e.stylesheets && e.count === 0 && oc(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && oc(e, e.stylesheets), e.unsuspend)) {
                var c = e.unsuspend;
                ((e.unsuspend = null), c());
              }
            }, 6e4 + t);
            0 < e.imgBytes && rc === 0 && (rc = 62500 * Cx());
            var i = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && oc(e, e.stylesheets), e.unsuspend))
                ) {
                  var c = e.unsuspend;
                  ((e.unsuspend = null), c());
                }
              },
              (e.imgBytes > rc ? 50 : 800) + t
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(i));
              }
            );
          }
        : null
    );
  }
  function pg(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) oc(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        ((e.unsuspend = null), t());
      }
    }
  }
  function vo() {
    (this.count--, pg(this));
  }
  function rC() {
    (this.imgCount--, pg(this));
  }
  var ic = null;
  function oc(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (ic = new Map()),
        t.forEach(iC, e),
        (ic = null),
        vo.call(e)));
  }
  function iC(e, t) {
    if (!(t.state.loading & 4)) {
      var n = ic.get(e);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), ic.set(e, n));
        for (
          var i = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            c = 0;
          c < i.length;
          c++
        ) {
          var p = i[c];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") &&
            (n.set(p.dataset.precedence, p), (a = p));
        }
        a && n.set(null, a);
      }
      ((i = t.instance),
        (p = i.getAttribute("data-precedence")),
        (c = n.get(p) || a),
        c === a && n.set(null, i),
        n.set(p, i),
        this.count++,
        (a = vo.bind(this)),
        i.addEventListener("load", a),
        i.addEventListener("error", a),
        c
          ? c.parentNode.insertBefore(i, c.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Wr = {
    $$typeof: pe,
    Provider: null,
    Consumer: null,
    _currentValue: ye,
    _currentValue2: ye,
    _threadCount: 0,
  };
  function oC(e, t, n, a, i, c, p, C, A) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = lu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = lu(0)),
      (this.hiddenUpdates = lu(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = i),
      (this.onCaughtError = c),
      (this.onRecoverableError = p),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = A),
      (this.transitionTypes = null),
      (this.incompleteTransitions = new Map()));
  }
  function vg(e, t, n, a, i, c, p, C, A, L, Y, Z) {
    return (
      (e = new oC(e, t, n, p, A, L, Y, Z, C)),
      (t = 1),
      c === !0 && (t |= 24),
      (c = Xt(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (t = Vu()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (c.memoizedState = { element: a, isDehydrated: n, cache: t }),
      qu(c),
      e
    );
  }
  function gg(e) {
    return e ? ((e = Tr), e) : Tr;
  }
  function yg(e, t, n, a, i, c) {
    ((i = gg(i)),
      a.context === null ? (a.context = i) : (a.pendingContext = i),
      (a = qa(t)),
      (a.payload = { element: n }),
      (c = c === void 0 ? null : c),
      c !== null && (a.callback = c),
      (n = Ga(e, a, t)),
      n !== null && (Kt(n, e, t), Ii(n, e, t)));
  }
  function bg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Nd(e, t) {
    (bg(e, t), (e = e.alternate) && bg(e, t));
  }
  function Sg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Al(e, 67108864);
      (t !== null && Kt(t, e, 67108864), Nd(e, 67108864));
    }
  }
  function xg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = cn();
      t = ru(t);
      var n = Al(e, t);
      (n !== null && Kt(n, e, t), Nd(e, t));
    }
  }
  var ei = !0;
  function sC(e, t, n, a) {
    var i = le.T;
    le.T = null;
    var c = ue.p;
    try {
      ((ue.p = 2), Rd(e, t, n, a));
    } finally {
      ((ue.p = c), (le.T = i));
    }
  }
  function cC(e, t, n, a) {
    var i = le.T;
    le.T = null;
    var c = ue.p;
    try {
      ((ue.p = 8), Rd(e, t, n, a));
    } finally {
      ((ue.p = c), (le.T = i));
    }
  }
  function Rd(e, t, n, a) {
    if (ei) {
      var i = Ad(a);
      if (i === null) (sd(e, t, a, sc, n), Eg(e, a));
      else if (fC(i, e, t, n, a)) a.stopPropagation();
      else if ((Eg(e, a), t & 4 && -1 < uC.indexOf(e))) {
        for (; i !== null;) {
          var c = hr(i);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var p = El(c.pendingLanes);
                  if (p !== 0) {
                    var C = c;
                    for (C.pendingLanes |= 2, C.entangledLanes |= 2; p;) {
                      var A = 1 << (31 - ke(p));
                      ((C.entanglements[1] |= A), (p &= ~A));
                    }
                    (Wn(c), (qe & 6) === 0 && ((Zs = Lt() + 500), so(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((C = Al(c, 2)), C !== null && Kt(C, c, 2), $s(), Nd(c, 2));
            }
          if (((c = Ad(a)), c === null && sd(e, t, a, sc, n), c === i)) break;
          i = c;
        }
        i !== null && a.stopPropagation();
      } else sd(e, t, a, null, n);
    }
  }
  function Ad(e) {
    return ((e = du(e)), Od(e));
  }
  var sc = null;
  function Od(e) {
    if (((sc = null), (e = wl(e)), e !== null)) {
      var t = u(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = v(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((sc = e), null);
  }
  function Cg(e) {
    switch (e) {
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
      case "fullscreenerror":
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
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ei()) {
          case _n:
            return 2;
          case wi:
            return 8;
          case dr:
          case qo:
            return 32;
          case Ti:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var _d = !1,
    nl = null,
    al = null,
    ll = null,
    go = new Map(),
    yo = new Map(),
    rl = [],
    uC =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Eg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        nl = null;
        break;
      case "dragenter":
      case "dragleave":
        al = null;
        break;
      case "mouseover":
      case "mouseout":
        ll = null;
        break;
      case "pointerover":
      case "pointerout":
        go.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yo.delete(t.pointerId);
    }
  }
  function bo(e, t, n, a, i, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: c,
          targetContainers: [i],
        }),
        t !== null && ((t = hr(t)), t !== null && Sg(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function fC(e, t, n, a, i) {
    switch (t) {
      case "focusin":
        return ((nl = bo(nl, e, t, n, a, i)), !0);
      case "dragenter":
        return ((al = bo(al, e, t, n, a, i)), !0);
      case "mouseover":
        return ((ll = bo(ll, e, t, n, a, i)), !0);
      case "pointerover":
        var c = i.pointerId;
        return (go.set(c, bo(go.get(c) || null, e, t, n, a, i)), !0);
      case "gotpointercapture":
        return (
          (c = i.pointerId),
          yo.set(c, bo(yo.get(c) || null, e, t, n, a, i)),
          !0
        );
    }
    return !1;
  }
  function wg(e) {
    var t = wl(e.target);
    if (t !== null) {
      var n = u(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              vh(e.priority, function () {
                xg(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = v(n)), t !== null)) {
            ((e.blockedOn = t),
              vh(e.priority, function () {
                xg(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function cc(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = Ad(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((fu = a), n.target.dispatchEvent(a), (fu = null));
      } else return ((t = hr(n)), t !== null && Sg(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Tg(e, t, n) {
    cc(e) && n.delete(t);
  }
  function dC() {
    ((_d = !1),
      nl !== null && cc(nl) && (nl = null),
      al !== null && cc(al) && (al = null),
      ll !== null && cc(ll) && (ll = null),
      go.forEach(Tg),
      yo.forEach(Tg));
  }
  function uc(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      _d ||
        ((_d = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, dC)));
  }
  var fc = null;
  function Ng(e) {
    fc !== e &&
      ((fc = e),
      l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
        fc === e && (fc = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            i = e[t + 2];
          if (typeof a != "function") {
            if (Od(a || n) === null) continue;
            break;
          }
          var c = hr(n);
          c !== null &&
            (e.splice(t, 3),
            (t -= 3),
            ff(c, { pending: !0, data: i, method: n.method, action: a }, a, i));
        }
      }));
  }
  function ti(e) {
    function t(A) {
      return uc(A, e);
    }
    (nl !== null && uc(nl, e),
      al !== null && uc(al, e),
      ll !== null && uc(ll, e),
      go.forEach(t),
      yo.forEach(t));
    for (var n = 0; n < rl.length; n++) {
      var a = rl[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < rl.length && ((n = rl[0]), n.blockedOn === null);)
      (wg(n), n.blockedOn === null && rl.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var i = n[a],
          c = n[a + 1],
          p = i[Gt] || null;
        if (typeof c == "function") p || Ng(n);
        else if (p) {
          var C = null;
          if (c && c.hasAttribute("formAction")) {
            if (((i = c), (p = c[Gt] || null))) C = p.formAction;
            else if (Od(i) !== null) continue;
          } else C = p.action;
          (typeof C == "function" ? (n[a + 1] = C) : (n.splice(a, 3), (a -= 3)),
            Ng(n));
        }
      }
  }
  function Rg() {
    function e(c) {
      c.canIntercept &&
        c.info === "react-transition" &&
        c.intercept({
          handler: function () {
            return new Promise(function (p) {
              return (i = p);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (i !== null && (i(), (i = null)), a || setTimeout(n, 20));
    }
    function n() {
      if (!a && !navigation.transition) {
        var c = navigation.currentEntry;
        c &&
          c.url != null &&
          navigation.navigate(c.url, {
            state: c.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        i = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(n, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            i !== null && (i(), (i = null)));
        }
      );
    }
  }
  function Dd(e) {
    this._internalRoot = e;
  }
  ((dc.prototype.render = Dd.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var n = t.current,
        a = cn();
      yg(n, a, e, t, null, null);
    }),
    (dc.prototype.unmount = Dd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (yg(e.current, 2, null, e, null, null), $s(), (t[mr] = null));
        }
      }));
  function dc(e) {
    this._internalRoot = e;
  }
  dc.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ph();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < rl.length && t !== 0 && t < rl[n].priority; n++);
      (rl.splice(n, 0, e), n === 0 && wg(e));
    }
  };
  var Ag = r.version;
  if (Ag !== "19.3.1") throw Error(s(527, Ag, "19.3.1"));
  ue.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = b(t)),
      (e = e !== null ? y(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var mC = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: le,
    reconcilerVersion: "19.3.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var mc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!mc.isDisabled && mc.supportsFiber)
      try {
        ((at = mc.inject(mC)), (Ke = mc));
      } catch {}
  }
  return (
    (xo.createRoot = function (e, t) {
      if (!f(e)) throw Error(s(299));
      var n = !1,
        a = "",
        i = gp,
        c = yp,
        p = bp;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (c = t.onCaughtError),
          t.onRecoverableError !== void 0 && (p = t.onRecoverableError)),
        (t = vg(e, 1, !1, null, null, n, a, null, i, c, p, Rg)),
        (e[mr] = t.current),
        od(e),
        new Dd(t)
      );
    }),
    (xo.hydrateRoot = function (e, t, n) {
      if (!f(e)) throw Error(s(299));
      var a = !1,
        i = "",
        c = gp,
        p = yp,
        C = bp,
        A = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (p = n.onCaughtError),
          n.onRecoverableError !== void 0 && (C = n.onRecoverableError),
          n.formState !== void 0 && (A = n.formState)),
        (t = vg(e, 1, !0, t, n ?? null, a, i, A, c, p, C, Rg)),
        (t.context = gg(null)),
        (n = t.current),
        (a = cn()),
        (a = ru(a)),
        (i = qa(a)),
        (i.callback = null),
        Ga(n, i, a),
        (n = a),
        (t.current.lanes = n),
        Ai(t, n),
        Wn(t),
        (e[mr] = t.current),
        od(e),
        new dc(t)
      );
    }),
    (xo.version = "19.3.1"),
    xo
  );
}
var Yg;
function EC() {
  if (Yg) return Hd.exports;
  Yg = 1;
  function l() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return (l(), (Hd.exports = CC()), Hd.exports);
}
var wC = EC(),
  pi = B1();
const TC = ym(pi);
var NC = Object.defineProperty,
  Sm = (l, r) => NC(l, "name", { value: r, configurable: !0 });
function em(l, r) {
  if (typeof l == "function") return l(r);
  l != null && (l.current = r);
}
Sm(em, "setRef");
function xm(...l) {
  return (r) => {
    let o = !1;
    const s = l.map((f) => {
      const u = em(f, r);
      return (!o && typeof u == "function" && (o = !0), u);
    });
    if (o)
      return () => {
        for (let f = 0; f < s.length; f++) {
          const u = s[f];
          typeof u == "function" ? u() : em(l[f], null);
        }
      };
  };
}
Sm(xm, "composeRefs");
function Re(...l) {
  return m.useCallback(xm(...l), l);
}
Sm(Re, "useComposedRefs");
var RC = Object.defineProperty,
  mn = (l, r) => RC(l, "name", { value: r, configurable: !0 });
function wa(l) {
  const r = m.forwardRef((o, s) => {
    let { children: f, ...u } = o,
      d = null,
      v = !1;
    const g = [];
    ((f = G1(f)),
      m.Children.forEach(f, (x) => {
        if (k1(x)) {
          v = !0;
          const E = x;
          let w = "child" in E.props ? E.props.child : E.props.children;
          for (; Cm(w) && typeof Dc == "function";) w = Dc(w._payload);
          ((d = AC(E, w)), g.push(d?.props?.children));
        } else g.push(x);
      }),
      d
        ? (d = m.cloneElement(d, void 0, g))
        : !v && m.Children.count(f) === 1 && m.isValidElement(f) && (d = f));
    const b = d ? Y1(d) : void 0,
      y = Re(s, b);
    if (!d) {
      if (f || f === 0) throw new Error(v ? DC(l) : _C(l));
      return f;
    }
    const h = P1(u, d.props ?? {});
    return (d.type !== m.Fragment && (h.ref = s ? y : b), m.cloneElement(d, h));
  });
  return ((r.displayName = `${l}.Slot`), r);
}
mn(wa, "createSlot");
var ir = wa("Slot"),
  U1 = Symbol.for("radix.slottable");
function V1(l) {
  const r = mn(
    (o) => ("child" in o ? o.children(o.child) : o.children),
    "Slottable"
  );
  return ((r.displayName = `${l}.Slottable`), (r.__radixId = U1), r);
}
mn(V1, "createSlottable");
var AC = mn(
  (l, r) =>
    "child" in l.props
      ? m.isValidElement(r)
        ? m.cloneElement(r, void 0, l.props.children(r.props.children))
        : null
      : m.isValidElement(r)
        ? r
        : null,
  "getSlottableElementFromSlottable"
);
function P1(l, r) {
  const o = { ...r };
  for (const s in r) {
    const f = l[s],
      u = r[s];
    /^on[A-Z]/.test(s)
      ? f && u
        ? (o[s] = (...v) => {
            const g = u(...v);
            return (f(...v), g);
          })
        : f && (o[s] = f)
      : s === "style"
        ? (o[s] = { ...f, ...u })
        : s === "className"
          ? (o[s] = [f, u].filter(Boolean).join(" "))
          : s === "aria-describedby" && (o[s] = X1(u, f));
  }
  return { ...l, ...o };
}
mn(P1, "mergeProps");
function Y1(l) {
  let r = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
    o = r && "isReactWarning" in r && r.isReactWarning;
  return o
    ? l.ref
    : ((r = Object.getOwnPropertyDescriptor(l, "ref")?.get),
      (o = r && "isReactWarning" in r && r.isReactWarning),
      o ? l.props.ref : l.props.ref || l.ref);
}
mn(Y1, "getElementRef");
function k1(l) {
  return (
    m.isValidElement(l) &&
    typeof l.type == "function" &&
    "__radixId" in l.type &&
    l.type.__radixId === U1
  );
}
mn(k1, "isSlottable");
var OC = Symbol.for("react.lazy");
function Cm(l) {
  return (
    l != null &&
    typeof l == "object" &&
    "$$typeof" in l &&
    l.$$typeof === OC &&
    "_payload" in l &&
    q1(l._payload)
  );
}
mn(Cm, "isLazyComponent");
function q1(l) {
  return typeof l == "object" && l !== null && "then" in l;
}
mn(q1, "isPromiseLike");
function G1(l) {
  let r = l;
  for (; Cm(r) && typeof Dc == "function";) r = Dc(r._payload);
  return r;
}
mn(G1, "useUnwrappedLazy");
function X1(...l) {
  const r = new Set();
  for (const o of l)
    if (typeof o == "string")
      for (const s of String(o).trim().split(/\s+/)) s && r.add(s);
  return r.size > 0 ? Array.from(r).join(" ") : void 0;
}
mn(X1, "concatAriaDescribedby");
var _C = mn(
    (l) =>
      `${l} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    "createSlotError"
  ),
  DC = mn(
    (l) =>
      `${l} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    "createSlottableError"
  ),
  Dc = hi[" use ".trim().toString()],
  MC = Object.defineProperty,
  jC = (l, r) => MC(l, "name", { value: r, configurable: !0 }),
  zC = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ae = zC.reduce((l, r) => {
    const o = wa(`Primitive.${r}`),
      s = m.forwardRef((f, u) => {
        const { asChild: d, ...v } = f,
          g = d ? o : r;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          S.jsx(g, { ...v, ref: u })
        );
      });
    return ((s.displayName = `Primitive.${r}`), { ...l, [r]: s });
  }, {});
function Em(l, r) {
  l && pi.flushSync(() => l.dispatchEvent(r));
}
jC(Em, "dispatchDiscreteCustomEvent");
var HC = Object.defineProperty,
  LC = (l, r) => HC(l, "name", { value: r, configurable: !0 }),
  I1 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  BC = m.forwardRef(
    LC(function (r, o) {
      return S.jsx(Ae.span, { ...r, ref: o, style: { ...I1, ...r.style } });
    }, "VisuallyHidden")
  ),
  UC = Object.defineProperty,
  Nn = (l, r) => UC(l, "name", { value: r, configurable: !0 });
function VC(l, r) {
  const o = m.createContext(r);
  o.displayName = l + "Context";
  const s = Nn((u) => {
    const { children: d, ...v } = u,
      g = m.useMemo(() => v, Object.values(v));
    return S.jsx(o.Provider, { value: g, children: d });
  }, "Provider");
  s.displayName = l + "Provider";
  function f(u, d = {}) {
    const { optional: v = !1 } = d,
      g = m.useContext(o);
    if (g) return g;
    if (r !== void 0) return r;
    if (!v) throw new Error(`\`${u}\` must be used within \`${l}\``);
  }
  return (Nn(f, "useContext"), [s, f]);
}
Nn(VC, "createContext");
function Un(l, r = []) {
  let o = [];
  function s(u, d) {
    const v = m.createContext(d);
    v.displayName = u + "Context";
    const g = o.length;
    o = [...o, d];
    const b = Nn((h) => {
      const { scope: x, children: E, ...w } = h,
        T = x?.[l]?.[g] || v,
        N = m.useMemo(() => w, Object.values(w));
      return S.jsx(T.Provider, { value: N, children: E });
    }, "Provider");
    b.displayName = u + "Provider";
    function y(h, x, E = {}) {
      const { optional: w = !1 } = E,
        T = x?.[l]?.[g] || v,
        N = m.useContext(T);
      if (N) return N;
      if (d !== void 0) return d;
      if (!w) throw new Error(`\`${h}\` must be used within \`${u}\``);
    }
    return (Nn(y, "useContext"), [b, y]);
  }
  Nn(s, "createContext");
  const f = Nn(() => {
    const u = o.map((d) => m.createContext(d));
    return Nn(function (v) {
      const g = v?.[l] || u;
      return m.useMemo(() => ({ [`__scope${l}`]: { ...v, [l]: g } }), [v, g]);
    }, "useScope");
  }, "createScope");
  return ((f.scopeName = l), [s, Z1(f, ...r)]);
}
Nn(Un, "createContextScope");
function Z1(...l) {
  const r = l[0];
  if (l.length === 1) return r;
  const o = Nn(() => {
    const s = l.map((f) => ({ useScope: f(), scopeName: f.scopeName }));
    return Nn(function (u) {
      const d = s.reduce((v, { useScope: g, scopeName: b }) => {
        const h = g(u)[`__scope${b}`];
        return { ...v, ...h };
      }, {});
      return m.useMemo(() => ({ [`__scope${r.scopeName}`]: d }), [d]);
    }, "useComposedScopes");
  }, "createScope");
  return ((o.scopeName = r.scopeName), o);
}
Nn(Z1, "composeContextScopes");
var vt = globalThis?.document ? m.useLayoutEffect : () => {},
  PC = Object.defineProperty,
  yt = (l, r) => PC(l, "name", { value: r, configurable: !0 });
function wm(l) {
  const r = l + "CollectionProvider",
    [o, s] = Un(r),
    [f, u] = o(r, { collectionRef: { current: null }, itemMap: new Map() }),
    d = yt((T) => {
      const { scope: N, children: R } = T,
        M = m.useRef(null),
        _ = m.useRef(new Map()).current;
      return S.jsx(f, { scope: N, itemMap: _, collectionRef: M, children: R });
    }, "CollectionProvider");
  d.displayName = r;
  const v = l + "CollectionSlot",
    g = wa(v),
    b = m.forwardRef((T, N) => {
      const { scope: R, children: M } = T,
        _ = u(v, R),
        j = Re(N, _.collectionRef);
      return S.jsx(g, { ref: j, children: M });
    });
  b.displayName = v;
  const y = l + "CollectionItemSlot",
    h = "data-radix-collection-item",
    x = wa(y),
    E = m.forwardRef((T, N) => {
      const { scope: R, children: M, ..._ } = T,
        j = m.useRef(null),
        G = Re(N, j),
        P = u(y, R);
      return (
        m.useEffect(
          () => (
            P.itemMap.set(j, { ref: j, ..._ }),
            () => {
              P.itemMap.delete(j);
            }
          )
        ),
        S.jsx(x, { [h]: "", ref: G, children: M })
      );
    });
  E.displayName = y;
  function w(T) {
    const N = u(l + "CollectionConsumer", T);
    return m.useCallback(() => {
      const M = N.collectionRef.current;
      if (!M) return [];
      const _ = Array.from(M.querySelectorAll(`[${h}]`));
      return Array.from(N.itemMap.values()).sort(
        (P, U) => _.indexOf(P.ref.current) - _.indexOf(U.ref.current)
      );
    }, [N.collectionRef, N.itemMap]);
  }
  return (
    yt(w, "useCollection"),
    [{ Provider: d, Slot: b, ItemSlot: E }, w, s]
  );
}
yt(wm, "createCollection");
var kg = new WeakMap(),
  ot,
  fn,
  hc =
    ((fn = class extends Map {
      constructor(o) {
        super(o);
        Dg(this, ot);
        (Md(this, ot, [...super.keys()]), kg.set(this, !0));
      }
      set(o, s) {
        return (
          kg.get(this) && !this.has(o) && Mt(this, ot).push(o),
          super.set(o, s),
          this
        );
      }
      insert(o, s, f) {
        const u = this.has(s),
          d = u ? this.size : this.size + 1,
          v = Tm(o),
          g = v >= 0 ? Math.min(v, d - 1) : Math.max(d + v, 0);
        if (u ? Mt(this, ot).indexOf(s) === g : g === this.size)
          return (this.set(s, f), this);
        const b = Mt(this, ot).filter((h) => h !== s);
        b.splice(g, 0, s);
        const y = b.map((h) => [h, h === s ? f : this.get(h)]);
        this.clear();
        for (const [h, x] of y) this.set(h, x);
        return this;
      }
      with(o, s, f) {
        const u = new fn(this);
        return (u.insert(o, s, f), u);
      }
      before(o) {
        const s = Mt(this, ot).indexOf(o) - 1;
        if (!(s < 0)) return this.entryAt(s);
      }
      setBefore(o, s, f) {
        const u = Mt(this, ot).indexOf(o);
        if (u === -1) return this;
        const d = Mt(this, ot).indexOf(s),
          v = d !== -1 && d < u ? u - 1 : u;
        return this.insert(v, s, f);
      }
      after(o) {
        let s = Mt(this, ot).indexOf(o);
        if (((s = s === -1 || s === this.size - 1 ? -1 : s + 1), s !== -1))
          return this.entryAt(s);
      }
      setAfter(o, s, f) {
        const u = Mt(this, ot).indexOf(o);
        if (u === -1) return this;
        const d = Mt(this, ot).indexOf(s),
          v = d !== -1 && d <= u ? u : u + 1;
        return this.insert(v, s, f);
      }
      first() {
        return this.entryAt(0);
      }
      last() {
        return this.entryAt(-1);
      }
      clear() {
        return (Md(this, ot, []), super.clear());
      }
      delete(o) {
        const s = super.delete(o);
        return (s && Mt(this, ot).splice(Mt(this, ot).indexOf(o), 1), s);
      }
      deleteAt(o) {
        const s = this.keyAt(o);
        return s !== void 0 ? this.delete(s) : !1;
      }
      at(o) {
        const s = Ec(Mt(this, ot), o);
        if (s !== void 0) return this.get(s);
      }
      entryAt(o) {
        const s = Ec(Mt(this, ot), o);
        if (s !== void 0) return [s, this.get(s)];
      }
      indexOf(o) {
        return Mt(this, ot).indexOf(o);
      }
      keyAt(o) {
        return Ec(Mt(this, ot), o);
      }
      from(o, s) {
        const f = this.indexOf(o);
        if (f === -1) return;
        let u = f + s;
        return (
          u < 0 && (u = 0),
          u >= this.size && (u = this.size - 1),
          this.at(u)
        );
      }
      keyFrom(o, s) {
        const f = this.indexOf(o);
        if (f === -1) return;
        let u = f + s;
        return (
          u < 0 && (u = 0),
          u >= this.size && (u = this.size - 1),
          this.keyAt(u)
        );
      }
      find(o, s) {
        let f = 0;
        for (const u of this) {
          if (Reflect.apply(o, s, [u, f, this])) return u;
          f++;
        }
      }
      findIndex(o, s) {
        let f = 0;
        for (const u of this) {
          if (Reflect.apply(o, s, [u, f, this])) return f;
          f++;
        }
        return -1;
      }
      filter(o, s) {
        const f = [];
        let u = 0;
        for (const d of this)
          (Reflect.apply(o, s, [d, u, this]) && f.push(d), u++);
        return new fn(f);
      }
      map(o, s) {
        const f = [];
        let u = 0;
        for (const d of this)
          (f.push([d[0], Reflect.apply(o, s, [d, u, this])]), u++);
        return new fn(f);
      }
      reduce(...o) {
        const [s, f] = o,
          u = o.length > 1;
        if (!u && this.size === 0)
          throw new TypeError(
            "Reduce of empty OrderedDict with no initial value"
          );
        let d = 0,
          v = f;
        for (const g of this)
          (d === 0 && !u
            ? (v = g)
            : (v = Reflect.apply(s, this, [v, g, d, this])),
            d++);
        return v;
      }
      reduceRight(...o) {
        const [s, f] = o,
          u = o.length > 1;
        if (!u && this.size === 0)
          throw new TypeError(
            "Reduce of empty OrderedDict with no initial value"
          );
        let d = f;
        for (let v = this.size - 1; v >= 0; v--) {
          const g = this.entryAt(v);
          v === this.size - 1 && !u
            ? (d = g)
            : (d = Reflect.apply(s, this, [d, g, v, this]));
        }
        return d;
      }
      sort(o) {
        if (typeof o != "function")
          throw new TypeError("OrderedDict.sort requires a compare function");
        const s = [...this.entries()].sort(o);
        this.clear();
        for (const [f, u] of s) this.set(f, u);
        return this;
      }
      toSorted(o) {
        if (typeof o != "function")
          throw new TypeError(
            "OrderedDict.toSorted requires a compare function"
          );
        const s = [...this.entries()].sort(o);
        return new fn(s);
      }
      toReversed() {
        const o = new fn();
        for (let s = this.size - 1; s >= 0; s--) {
          const f = this.keyAt(s),
            u = this.get(f);
          o.set(f, u);
        }
        return o;
      }
      toSpliced(...o) {
        const s = [...this.entries()];
        return (s.splice(...o), new fn(s));
      }
      slice(o, s) {
        const f = new fn();
        for (const u of Mt(this, ot).slice(o, s)) f.set(u, this.get(u));
        return f;
      }
      every(o, s) {
        let f = 0;
        for (const u of this) {
          if (!Reflect.apply(o, s, [u, f, this])) return !1;
          f++;
        }
        return !0;
      }
      some(o, s) {
        let f = 0;
        for (const u of this) {
          if (Reflect.apply(o, s, [u, f, this])) return !0;
          f++;
        }
        return !1;
      }
    }),
    (ot = new WeakMap()),
    yt(fn, "OrderedDict"),
    fn);
function Ec(l, r) {
  if ("at" in Array.prototype) return Array.prototype.at.call(l, r);
  const o = Q1(l, r);
  return o === -1 ? void 0 : l[o];
}
yt(Ec, "at");
function Q1(l, r) {
  const o = l.length,
    s = Tm(r),
    f = s >= 0 ? s : o + s;
  return f < 0 || f >= o ? -1 : f;
}
yt(Q1, "toSafeIndex");
function Tm(l) {
  return l !== l || l === 0 ? 0 : Math.trunc(l);
}
yt(Tm, "toSafeInteger");
function YC(l) {
  const r = l + "CollectionProvider",
    [o, s] = Un(r),
    [f, u] = o(r);
  f.displayName = l + "CollectionStableContextProvider";
  const [d, v] = o(r);
  d.displayName = l + "CollectionStatefulContextProvider";
  const g = yt(
    ({ state: P, ...U }) =>
      P ? S.jsx(y, { ...U, state: P }) : S.jsx(b, { ...U }),
    "CollectionProvider"
  );
  g.displayName = r;
  const b = yt((P) => {
    const U = M();
    return S.jsx(y, { ...P, state: U });
  }, "CollectionInit");
  b.displayName = l + "CollectionInit";
  const y = yt((P) => {
    const { scope: U, children: Q, state: ie } = P,
      W = m.useRef(null),
      [re, X] = m.useState(null),
      oe = Re(W, X),
      [fe, pe] = ie,
      k = m.useRef(new hc()),
      te = m.useCallback(() => {
        const K = k.current;
        return (F1(K) || K.sort(wc), K);
      }, []);
    return (
      m.useEffect(() => {
        if (!re) return;
        const K = J1(() => {
          pe((ae) => {
            const $ = ae.toSorted(wc);
            return $.some(([Ce], Ve) => ae.keyAt(Ve) !== Ce) ? $ : ae;
          });
        });
        return (
          K.observe(re, { childList: !0, subtree: !0 }),
          () => {
            K.disconnect();
          }
        );
      }, [re, pe]),
      S.jsx(f, {
        scope: U,
        collectionElementRef: oe,
        collectionElementRefObject: W,
        getCollection: te,
        setCollection: pe,
        registryRef: k,
        children: S.jsx(d, {
          scope: U,
          collectionElement: re,
          collection: fe,
          children: Q,
        }),
      })
    );
  }, "CollectionProviderImpl");
  y.displayName = l + "CollectionProviderImpl";
  const h = l + "CollectionSlot",
    x = wa(h),
    E = m.forwardRef((P, U) => {
      const { scope: Q, children: ie } = P,
        W = u(h, Q),
        re = Re(U, W.collectionElementRef);
      return S.jsx(x, { ref: re, children: ie });
    });
  E.displayName = h;
  const w = l + "CollectionItemSlot",
    T = "data-radix-collection-item",
    N = wa(w),
    R = m.forwardRef((P, U) => {
      const { scope: Q, children: ie, ...W } = P,
        re = m.useRef(null),
        X = u(w, Q),
        { setCollection: oe, registryRef: fe } = X,
        pe = m.useRef(W);
      K1(pe.current, W) || (pe.current = W);
      const k = pe.current,
        te = m.useCallback(
          ($) => {
            const me = fe.current;
            $
              ? me.set($, { ...pe.current, element: $ })
              : re.current && me.delete(re.current);
          },
          [fe]
        ),
        K = Re(U, te, re);
      vt(() => {
        const $ = re.current,
          me = fe.current;
        $ && me.has($) && me.set($, { ...k, element: $ });
      }, [k, fe]);
      const ae = m.useRef(null);
      return (
        m.useEffect(() => {
          const $ = re.current,
            me = ae.current;
          ((me?.element ?? null) === $ && (!$ || me?.itemData === k)) ||
            ((ae.current = $ ? { element: $, itemData: k } : null),
            oe((Ce) => {
              const Ve = new hc(Ce);
              return (
                me && me.element !== $ && Ve.delete(me.element),
                $ && Ve.set($, { ...k, element: $ }),
                Ve.sort(wc)
              );
            }));
        }),
        m.useEffect(
          () => () => {
            const $ = ae.current;
            ((ae.current = null),
              $ &&
                oe((me) => {
                  if (!me.has($.element)) return me;
                  const Ce = new hc(me);
                  return (Ce.delete($.element), Ce);
                }));
          },
          [oe]
        ),
        S.jsx(N, { [T]: "", ref: K, children: ie })
      );
    });
  R.displayName = w;
  function M() {
    return m.useState(new hc());
  }
  yt(M, "useInitCollection");
  function _(P) {
    const { collection: U } = v(l + "CollectionConsumer", P);
    return U;
  }
  yt(_, "useCollection");
  function j(P) {
    const { getCollection: U } = u(l + "CollectionConsumer", P);
    return U;
  }
  return (
    yt(j, "useGetCollection"),
    [
      { Provider: g, Slot: E, ItemSlot: R },
      {
        createCollectionScope: s,
        useCollection: _,
        useGetCollection: j,
        useInitCollection: M,
      },
    ]
  );
}
yt(YC, "createCollection");
function K1(l, r) {
  if (l === r) return !0;
  if (typeof l != "object" || typeof r != "object" || l == null || r == null)
    return !1;
  const o = Object.keys(l),
    s = Object.keys(r);
  if (o.length !== s.length) return !1;
  for (const f of o)
    if (!Object.prototype.hasOwnProperty.call(r, f) || l[f] !== r[f]) return !1;
  return !0;
}
yt(K1, "shallowEqual");
function $1(l, r) {
  return !!(r.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_PRECEDING);
}
yt($1, "isElementPreceding");
function F1(l) {
  let r;
  for (const o of l.keys()) {
    if (r) {
      const s = r.compareDocumentPosition(o);
      if (
        !(s & Node.DOCUMENT_POSITION_DISCONNECTED) &&
        s & Node.DOCUMENT_POSITION_PRECEDING
      )
        return !1;
    }
    r = o;
  }
  return !0;
}
yt(F1, "isInDocumentOrder");
function wc(l, r) {
  return !l[1].element || !r[1].element
    ? 0
    : $1(l[1].element, r[1].element)
      ? -1
      : 1;
}
yt(wc, "sortByDocumentPosition");
function J1(l) {
  return new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList") {
        l();
        return;
      }
  });
}
yt(J1, "getChildListObserver");
var kC = Object.defineProperty,
  vi = (l, r) => kC(l, "name", { value: r, configurable: !0 }),
  W1 = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
function Te(l, r, { checkForDefaultPrevented: o = !0 } = {}) {
  return vi(function (f) {
    if ((l?.(f), o === !1 || !f || !f.defaultPrevented)) return r?.(f);
  }, "handleEvent");
}
vi(Te, "composeEventHandlers");
function qC(l) {
  if (!W1) throw new Error("Cannot access window outside of the DOM");
  return l?.ownerDocument?.defaultView ?? window;
}
vi(qC, "getOwnerWindow");
function tm(l) {
  if (!W1) throw new Error("Cannot access document outside of the DOM");
  return l?.ownerDocument ?? document;
}
vi(tm, "getOwnerDocument");
function ey(l, r = !1) {
  const { activeElement: o } = tm(l);
  if (!o?.nodeName) return null;
  if (ty(o) && o.contentDocument) return ey(o.contentDocument.body, r);
  if (r) {
    const s = o.getAttribute("aria-activedescendant");
    if (s) {
      const f = tm(o).getElementById(s);
      if (f) return f;
    }
  }
  return o;
}
vi(ey, "getActiveElement");
function ty(l) {
  return l.tagName === "IFRAME";
}
vi(ty, "isFrame");
var GC = Object.defineProperty,
  XC = (l, r) => GC(l, "name", { value: r, configurable: !0 }),
  qg = hi[" useEffectEvent ".trim().toString()],
  Gg = hi[" useInsertionEffect ".trim().toString()];
function ny(l) {
  if (typeof qg == "function") return qg(l);
  const r = m.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return (
    typeof Gg == "function"
      ? Gg(() => {
          r.current = l;
        })
      : vt(() => {
          r.current = l;
        }),
    m.useMemo(
      () =>
        (...o) =>
          r.current?.(...o),
      []
    )
  );
}
XC(ny, "useEffectEvent");
var IC = Object.defineProperty,
  Mo = (l, r) => IC(l, "name", { value: r, configurable: !0 }),
  ZC = hi[" useInsertionEffect ".trim().toString()] || vt;
function di({
  prop: l,
  defaultProp: r,
  onChange: o = Mo(() => {}, "onChange"),
  caller: s,
}) {
  const [f, u, d] = ay({ defaultProp: r, onChange: o }),
    v = l !== void 0,
    g = v ? l : f,
    b = m.useCallback(
      (y) => {
        if (v) {
          const h = ly(y) ? y(l) : y;
          h !== l && d.current?.(h);
        } else u(y);
      },
      [v, l, u, d]
    );
  return [g, b];
}
Mo(di, "useControllableState");
function ay({ defaultProp: l, onChange: r }) {
  const [o, s] = m.useState(l),
    f = m.useRef(o),
    u = m.useRef(r);
  return (
    ZC(() => {
      u.current = r;
    }, [r]),
    m.useEffect(() => {
      f.current !== o && (u.current?.(o), (f.current = o));
    }, [o, f]),
    [o, s, u]
  );
}
Mo(ay, "useUncontrolledState");
function ly(l) {
  return typeof l == "function";
}
Mo(ly, "isFunction");
var Xg = Symbol("RADIX:SYNC_STATE");
function QC(l, r, o, s) {
  const { prop: f, defaultProp: u, onChange: d, caller: v } = r,
    g = f !== void 0,
    b = ny(d),
    y = [{ ...o, state: u }];
  s && y.push(s);
  const [h, x] = m.useReducer(
      (N, R) => {
        if (R.type === Xg) return { ...N, state: R.state };
        const M = l(N, R);
        return (g && !Object.is(M.state, N.state) && b(M.state), M);
      },
      ...y
    ),
    E = h.state,
    w = m.useRef(E);
  m.useEffect(() => {
    w.current !== E && ((w.current = E), g || b(E));
  }, [E, w, g]);
  const T = m.useMemo(() => (f !== void 0 ? { ...h, state: f } : h), [h, f]);
  return (
    m.useEffect(() => {
      g && !Object.is(f, h.state) && x({ type: Xg, state: f });
    }, [f, h.state, g]),
    [T, x]
  );
}
Mo(QC, "useControllableStateReducer");
var KC = Object.defineProperty,
  Ta = (l, r) => KC(l, "name", { value: r, configurable: !0 });
function ry(l, r) {
  return m.useReducer((o, s) => r[o][s] ?? o, l);
}
Ta(ry, "useStateMachine");
var pl = Ta((l) => {
  const { present: r, children: o } = l,
    s = iy(r),
    f =
      typeof o == "function" ? o({ present: s.isPresent }) : m.Children.only(o),
    u = oy(s.ref, sy(f));
  return typeof o == "function" || s.isPresent
    ? m.cloneElement(f, { ref: u })
    : null;
}, "Presence");
function iy(l) {
  const [r, o] = m.useState(),
    s = m.useRef(null),
    f = m.useRef(l),
    u = m.useRef("none"),
    d = m.useRef(void 0),
    v = l ? "mounted" : "unmounted",
    [g, b] = ry(v, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    m.useEffect(() => {
      g === "mounted"
        ? ((u.current = d.current ?? oi(s.current)), (d.current = void 0))
        : (u.current = "none");
    }, [g]),
    vt(() => {
      const y = s.current,
        h = f.current;
      if (h !== l) {
        const E = u.current,
          w = oi(y);
        (l
          ? ((d.current = w), b("MOUNT"))
          : w === "none" || y?.display === "none"
            ? b("UNMOUNT")
            : b(h && E !== w ? "ANIMATION_OUT" : "UNMOUNT"),
          (f.current = l));
      }
    }, [l, b]),
    vt(() => {
      if (r) {
        let y;
        const h = r.ownerDocument.defaultView ?? window,
          x = Ta((w) => {
            const N = oi(s.current).includes(CSS.escape(w.animationName));
            if (w.target === r && N && (b("ANIMATION_END"), !f.current)) {
              const R = r.style.animationFillMode;
              ((r.style.animationFillMode = "forwards"),
                (y = h.setTimeout(() => {
                  r.style.animationFillMode === "forwards" &&
                    (r.style.animationFillMode = R);
                })));
            }
          }, "handleAnimationEnd"),
          E = Ta((w) => {
            w.target === r && (u.current = oi(s.current));
          }, "handleAnimationStart");
        return (
          r.addEventListener("animationstart", E),
          r.addEventListener("animationcancel", x),
          r.addEventListener("animationend", x),
          () => {
            (h.clearTimeout(y),
              r.removeEventListener("animationstart", E),
              r.removeEventListener("animationcancel", x),
              r.removeEventListener("animationend", x));
          }
        );
      } else b("ANIMATION_END");
    }, [r, b]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(g),
      ref: m.useCallback((y) => {
        if (y) {
          const h = getComputedStyle(y);
          ((s.current = h), (d.current = oi(h)));
        } else s.current = null;
        o(y);
      }, []),
    }
  );
}
Ta(iy, "usePresence");
function nm(l, r) {
  if (typeof l == "function") return l(r);
  l != null && (l.current = r);
}
Ta(nm, "setRef");
function oy(...l) {
  const r = m.useRef(l);
  return (
    (r.current = l),
    m.useCallback((o) => {
      const s = r.current;
      let f = !1;
      const u = s.map((d) => {
        const v = nm(d, o);
        return (!f && typeof v == "function" && (f = !0), v);
      });
      if (f)
        return () => {
          for (let d = 0; d < u.length; d++) {
            const v = u[d];
            typeof v == "function" ? v() : nm(s[d], null);
          }
        };
    }, [])
  );
}
Ta(oy, "useStableComposedRefs");
function oi(l) {
  return l?.animationName || "none";
}
Ta(oi, "getAnimationName");
function sy(l) {
  let r = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
    o = r && "isReactWarning" in r && r.isReactWarning;
  return o
    ? l.ref
    : ((r = Object.getOwnPropertyDescriptor(l, "ref")?.get),
      (o = r && "isReactWarning" in r && r.isReactWarning),
      o ? l.props.ref : l.props.ref || l.ref);
}
Ta(sy, "getElementRef");
var $C = Object.defineProperty,
  FC = (l, r) => $C(l, "name", { value: r, configurable: !0 }),
  JC = hi[" useId ".trim().toString()] || (() => {}),
  WC = 0;
function Fl(l) {
  const [r, o] = m.useState(JC());
  return (
    vt(() => {
      l || o((s) => s ?? String(WC++));
    }, [l]),
    l || (r ? `radix-${r}` : "")
  );
}
FC(Fl, "useId");
var e3 = Object.defineProperty,
  cy = (l, r) => e3(l, "name", { value: r, configurable: !0 }),
  t3 = { LTR: "ltr" },
  uy = m.createContext(void 0),
  n3 = cy((l) => {
    const { dir: r, children: o } = l;
    return S.jsx(uy.Provider, { value: r, children: o });
  }, "DirectionProvider");
function Pc(l) {
  const r = m.useContext(uy);
  return l || r || t3.LTR;
}
cy(Pc, "useDirection");
var a3 = Object.defineProperty,
  l3 = (l, r) => a3(l, "name", { value: r, configurable: !0 }),
  Ig = hi[" useInsertionEffect ".trim().toString()];
function zt(l) {
  const r = m.useRef(l);
  return (
    typeof Ig == "function"
      ? Ig(() => {
          r.current = l;
        })
      : vt(() => {
          r.current = l;
        }),
    m.useMemo(
      () =>
        (...o) =>
          r.current?.(...o),
      []
    )
  );
}
l3(zt, "useCallbackRef");
var r3 = Object.defineProperty,
  Et = (l, r) => r3(l, "name", { value: r, configurable: !0 }),
  am = "dismissableLayer.update",
  i3 = "dismissableLayer.pointerDownOutside",
  o3 = "dismissableLayer.focusOutside",
  Zg,
  fy = m.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  dy = m.forwardRef(
    Et(function (r, o) {
      const {
          disableOutsidePointerEvents: s = !1,
          deferPointerDownOutside: f = !1,
          onEscapeKeyDown: u,
          onPointerDownOutside: d,
          onFocusOutside: v,
          onInteractOutside: g,
          onDismiss: b,
          ...y
        } = r,
        h = m.useContext(fy),
        [x, E] = m.useState(null),
        w = x?.ownerDocument ?? globalThis?.document,
        [, T] = m.useState({}),
        N = Re(o, E),
        R = Array.from(h.layers),
        [M] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
        _ = M ? R.indexOf(M) : -1,
        j = x ? R.indexOf(x) : -1,
        G = h.layersWithOutsidePointerEventsDisabled.size > 0,
        P = j >= _,
        U = m.useRef(!1),
        Q = hy(
          (X) => {
            (d?.(X), g?.(X), X.defaultPrevented || b?.());
          },
          {
            ownerDocument: w,
            deferPointerDownOutside: f,
            isDeferredPointerDownOutsideRef: U,
            dismissableSurfaces: h.dismissableSurfaces,
            shouldHandlePointerDownOutside: m.useCallback(
              (X) => {
                if (!(X instanceof Node)) return !1;
                const oe = [...h.branches].some((fe) => fe.contains(X));
                return P && !oe;
              },
              [h.branches, P]
            ),
          }
        ),
        ie = py((X) => {
          if (f && U.current) return;
          const oe = X.target;
          [...h.branches].some((pe) => pe.contains(oe)) ||
            (v?.(X), g?.(X), X.defaultPrevented || b?.());
        }, w),
        W = x ? j === R.length - 1 : !1,
        re = zt((X) => {
          X.key === "Escape" &&
            (u?.(X), !X.defaultPrevented && b && (X.preventDefault(), b()));
        });
      return (
        m.useEffect(() => {
          if (W)
            return (
              w.addEventListener("keydown", re, { capture: !0 }),
              () => w.removeEventListener("keydown", re, { capture: !0 })
            );
        }, [w, W, re]),
        m.useEffect(() => {
          if (x)
            return (
              s &&
                (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((Zg = w.body.style.pointerEvents),
                  (w.body.style.pointerEvents = "none")),
                h.layersWithOutsidePointerEventsDisabled.add(x)),
              h.layers.add(x),
              lm(),
              () => {
                s &&
                  (h.layersWithOutsidePointerEventsDisabled.delete(x),
                  h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                    (w.body.style.pointerEvents = Zg));
              }
            );
        }, [x, w, s, h]),
        m.useEffect(
          () => () => {
            x &&
              (h.layers.delete(x),
              h.layersWithOutsidePointerEventsDisabled.delete(x),
              lm());
          },
          [x, h]
        ),
        m.useEffect(() => {
          const X = Et(() => T({}), "handleUpdate");
          return (
            document.addEventListener(am, X),
            () => document.removeEventListener(am, X)
          );
        }, []),
        S.jsx(Ae.div, {
          ...y,
          ref: N,
          style: {
            pointerEvents: G ? (P ? "auto" : "none") : void 0,
            ...r.style,
          },
          onFocusCapture: Te(r.onFocusCapture, ie.onFocusCapture),
          onBlurCapture: Te(r.onBlurCapture, ie.onBlurCapture),
          onPointerDownCapture: Te(
            r.onPointerDownCapture,
            Q.onPointerDownCapture
          ),
        })
      );
    }, "DismissableLayer")
  );
function my() {
  const l = m.useContext(fy),
    [r, o] = m.useState(null);
  return (
    m.useEffect(() => {
      if (r)
        return (
          l.dismissableSurfaces.add(r),
          () => {
            l.dismissableSurfaces.delete(r);
          }
        );
    }, [r, l.dismissableSurfaces]),
    o
  );
}
Et(my, "useDismissableLayerSurface");
var s3 = Et(() => !0, "IS_TRUE");
function hy(l, r) {
  const {
      ownerDocument: o = globalThis?.document,
      deferPointerDownOutside: s = !1,
      isDeferredPointerDownOutsideRef: f,
      dismissableSurfaces: u,
      shouldHandlePointerDownOutside: d = s3,
    } = r,
    v = zt(l),
    g = m.useRef(!1),
    b = m.useRef(!1),
    y = m.useRef(new Map()),
    h = m.useRef(() => {});
  return (
    m.useEffect(() => {
      function x() {
        ((b.current = !1), (f.current = !1), y.current.clear());
      }
      Et(x, "resetOutsideInteraction");
      function E() {
        return Array.from(y.current.values()).some(Boolean);
      }
      Et(E, "isOutsideInteractionIntercepted");
      function w(_) {
        if (!b.current) return;
        const j = _.target;
        ((j instanceof Node && [...u].some((P) => P.contains(j))) ||
          y.current.set(_.type, !0),
          _.type === "click" &&
            window.setTimeout(() => {
              b.current && h.current();
            }, 0));
      }
      Et(w, "handleInteractionCapture");
      function T(_) {
        b.current && y.current.set(_.type, !1);
      }
      Et(T, "handleInteractionBubble");
      const N = Et((_) => {
          if (_.target && !g.current) {
            let j = function () {
              o.removeEventListener("click", h.current);
              const P = E();
              (x(), P || Nm(i3, v, G, { discrete: !0 }));
            };
            if (
              (Et(j, "handleAndDispatchPointerDownOutsideEvent"), !d(_.target))
            ) {
              (o.removeEventListener("click", h.current),
                x(),
                (g.current = !1));
              return;
            }
            const G = { originalEvent: _ };
            ((b.current = !0),
              (f.current = s && _.button === 0),
              y.current.clear(),
              !s || _.button !== 0
                ? j()
                : (o.removeEventListener("click", h.current),
                  (h.current = j),
                  o.addEventListener("click", h.current, { once: !0 })));
          } else (o.removeEventListener("click", h.current), x());
          g.current = !1;
        }, "handlePointerDown"),
        R = [
          "pointerup",
          "mousedown",
          "mouseup",
          "touchstart",
          "touchend",
          "click",
        ];
      for (const _ of R)
        (o.addEventListener(_, w, !0), o.addEventListener(_, T));
      const M = window.setTimeout(() => {
        o.addEventListener("pointerdown", N);
      }, 0);
      return () => {
        (window.clearTimeout(M),
          o.removeEventListener("pointerdown", N),
          o.removeEventListener("click", h.current));
        for (const _ of R)
          (o.removeEventListener(_, w, !0), o.removeEventListener(_, T));
      };
    }, [o, v, s, f, u, d]),
    { onPointerDownCapture: Et(() => (g.current = !0), "onPointerDownCapture") }
  );
}
Et(hy, "usePointerDownOutside");
function py(l, r = globalThis?.document) {
  const o = zt(l),
    s = m.useRef(!1);
  return (
    m.useEffect(() => {
      const f = Et((u) => {
        u.target &&
          !s.current &&
          Nm(o3, o, { originalEvent: u }, { discrete: !1 });
      }, "handleFocus");
      return (
        r.addEventListener("focusin", f),
        () => r.removeEventListener("focusin", f)
      );
    }, [r, o]),
    {
      onFocusCapture: Et(() => (s.current = !0), "onFocusCapture"),
      onBlurCapture: Et(() => (s.current = !1), "onBlurCapture"),
    }
  );
}
Et(py, "useFocusOutside");
function lm() {
  const l = new CustomEvent(am);
  document.dispatchEvent(l);
}
Et(lm, "dispatchUpdate");
function Nm(l, r, o, { discrete: s }) {
  const f = o.originalEvent.target,
    u = new CustomEvent(l, { bubbles: !1, cancelable: !0, detail: o });
  (r && f.addEventListener(l, r, { once: !0 }),
    s ? Em(f, u) : f.dispatchEvent(u));
}
Et(Nm, "handleAndDispatchCustomEvent");
var c3 = Object.defineProperty,
  pt = (l, r) => c3(l, "name", { value: r, configurable: !0 }),
  Vd = "focusScope.autoFocusOnMount",
  Pd = "focusScope.autoFocusOnUnmount",
  Qg = { bubbles: !1, cancelable: !0 },
  vy = m.forwardRef(
    pt(function (r, o) {
      const {
          loop: s = !1,
          trapped: f = !1,
          branches: u,
          onMountAutoFocus: d,
          onUnmountAutoFocus: v,
          ...g
        } = r,
        [b, y] = m.useState(null),
        h = zt(d),
        x = zt(v),
        E = m.useRef(null),
        w = Re(o, y),
        T = m.useRef(u);
      m.useEffect(() => {
        T.current = u;
      });
      const N = m.useCallback(
          (_) =>
            _
              ? b?.contains(_)
                ? !0
                : !!T.current?.some((j) => j.contains(_))
              : !1,
          [b]
        ),
        R = m.useRef({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
      (m.useEffect(() => {
        if (f) {
          let _ = function (U) {
              if (R.paused || !b) return;
              const Q = U.target;
              N(Q) ? (E.current = Q) : xa(E.current, { select: !0 });
            },
            j = function (U) {
              if (R.paused || !b) return;
              const Q = U.relatedTarget;
              Q !== null && (N(Q) || xa(E.current, { select: !0 }));
            },
            G = function (U) {
              if (document.activeElement === document.body)
                for (const ie of U) ie.removedNodes.length > 0 && xa(b);
            };
          (pt(_, "handleFocusIn"),
            pt(j, "handleFocusOut"),
            pt(G, "handleMutations"),
            document.addEventListener("focusin", _),
            document.addEventListener("focusout", j));
          const P = new MutationObserver(G);
          return (
            b && P.observe(b, { childList: !0, subtree: !0 }),
            () => {
              (document.removeEventListener("focusin", _),
                document.removeEventListener("focusout", j),
                P.disconnect());
            }
          );
        }
      }, [f, b, R.paused, N]),
        m.useEffect(() => {
          if (b) {
            Kg.add(R);
            const _ = document.activeElement;
            if (!b.contains(_)) {
              const G = new CustomEvent(Vd, Qg);
              (b.addEventListener(Vd, h),
                b.dispatchEvent(G),
                G.defaultPrevented ||
                  (Sy(Ty(Rm(b)), { select: !0 }),
                  document.activeElement === _ && xa(b)));
            }
            return () => {
              b.removeEventListener(Vd, h);
              const G = b.ownerDocument,
                P = CustomEvent;
              setTimeout(() => {
                const U = new P(Pd, Qg);
                (b.addEventListener(Pd, x),
                  b.dispatchEvent(U),
                  U.defaultPrevented || xa(_ ?? G.body, { select: !0 }),
                  b.removeEventListener(Pd, x),
                  Kg.remove(R));
              }, 0);
            };
          }
        }, [b, h, x, R]));
      const M = m.useCallback(
        (_) => {
          if ((!s && !f) || R.paused) return;
          const j = _.key === "Tab" && !_.altKey && !_.ctrlKey && !_.metaKey,
            G = document.activeElement;
          if (j && G) {
            const P = _.currentTarget,
              [U, Q] = xy(P);
            U && Q
              ? !_.shiftKey && G === Q
                ? (_.preventDefault(), s && xa(U, { select: !0 }))
                : _.shiftKey &&
                  G === U &&
                  (_.preventDefault(), s && xa(Q, { select: !0 }))
              : G === P && _.preventDefault();
          }
        },
        [s, f, R.paused]
      );
      return S.jsx(Ae.div, { tabIndex: -1, ...g, ref: w, onKeyDown: M });
    }, "FocusScope")
  ),
  gy = m.createContext(null);
function yy({ registry: l, children: r }) {
  return l ? S.jsx(gy.Provider, { value: l, children: r }) : r;
}
pt(yy, "FocusScopeBranchProvider");
function by() {
  const [l, r] = m.useState([]),
    o = m.useMemo(
      () => ({
        add: pt((s) => r((f) => (f.includes(s) ? f : [...f, s])), "add"),
        remove: pt((s) => r((f) => f.filter((u) => u !== s)), "remove"),
      }),
      []
    );
  return { nodes: l, registry: o };
}
pt(by, "useFocusScopeBranchRegistry");
function u3(l) {
  const r = m.useContext(gy);
  m.useEffect(() => {
    if (!(!l || !r)) return (r.add(l), () => r.remove(l));
  }, [l, r]);
}
pt(u3, "useFocusScopeBranch");
function Sy(l, { select: r = !1 } = {}) {
  const o = document.activeElement;
  for (const s of l)
    if ((xa(s, { select: r }), document.activeElement !== o)) return;
}
pt(Sy, "focusFirst");
function xy(l) {
  const r = Rm(l),
    o = rm(r, l),
    s = rm(r.reverse(), l);
  return [o, s];
}
pt(xy, "getTabbableEdges");
function Rm(l) {
  const r = [],
    s = l.ownerDocument.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, {
      acceptNode: pt((f) => {
        const u = f.tagName === "INPUT" && f.type === "hidden";
        return f.disabled || f.hidden || u
          ? NodeFilter.FILTER_SKIP
          : f.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      }, "acceptNode"),
    });
  for (; s.nextNode();) r.push(s.currentNode);
  return r;
}
pt(Rm, "getTabbableCandidates");
function rm(l, r) {
  const o =
    typeof r.checkVisibility == "function" &&
    r.checkVisibility({ checkVisibilityCSS: !0 });
  for (const s of l)
    if (
      !(o ? !s.checkVisibility({ checkVisibilityCSS: !0 }) : Cy(s, { upTo: r }))
    )
      return s;
}
pt(rm, "findVisible");
function Cy(l, { upTo: r }) {
  if (getComputedStyle(l).visibility === "hidden") return !0;
  for (; l;) {
    if (r !== void 0 && l === r) return !1;
    if (getComputedStyle(l).display === "none") return !0;
    l = l.parentElement;
  }
  return !1;
}
pt(Cy, "isHidden");
function Ey(l) {
  return l.tagName === "INPUT" && typeof l.select == "function";
}
pt(Ey, "isSelectableInput");
function xa(l, { select: r = !1 } = {}) {
  if (l && l.focus) {
    const s = (l.ownerDocument ?? document).activeElement;
    (l.focus({ preventScroll: !0 }), l !== s && Ey(l) && r && l.select());
  }
}
pt(xa, "focus");
var Kg = wy();
function wy() {
  let l = [];
  return {
    add(r) {
      const o = l[0];
      (r !== o && o?.pause(), (l = im(l, r)), l.unshift(r));
    },
    remove(r) {
      ((l = im(l, r)), l[0]?.resume());
    },
  };
}
pt(wy, "createFocusScopesStack");
function im(l, r) {
  const o = [...l],
    s = o.indexOf(r);
  return (s !== -1 && o.splice(s, 1), o);
}
pt(im, "arrayRemove");
function Ty(l) {
  return l.filter((r) => r.tagName !== "A");
}
pt(Ty, "removeLinks");
var f3 = Object.defineProperty,
  d3 = (l, r) => f3(l, "name", { value: r, configurable: !0 }),
  Ny = m.forwardRef(
    d3(function (r, o) {
      const { container: s, ...f } = r,
        [u, d] = m.useState(!1);
      vt(() => d(!0), []);
      const v = s || (u && globalThis?.document?.body);
      return v ? pi.createPortal(S.jsx(Ae.div, { ...f, ref: o }), v) : null;
    }, "Portal")
  ),
  m3 = Object.defineProperty,
  Am = (l, r) => m3(l, "name", { value: r, configurable: !0 }),
  pc = 0,
  ni = null;
function h3(l) {
  return (Yc(), l.children);
}
Am(h3, "FocusGuards");
function Yc() {
  m.useEffect(() => {
    ni || (ni = { start: om(), end: om() });
    const { start: l, end: r } = ni;
    return (
      document.body.firstElementChild !== l &&
        document.body.insertAdjacentElement("afterbegin", l),
      document.body.lastElementChild !== r &&
        document.body.insertAdjacentElement("beforeend", r),
      pc++,
      () => {
        (pc === 1 && (ni?.start.remove(), ni?.end.remove(), (ni = null)),
          (pc = Math.max(0, pc - 1)));
      }
    );
  }, []);
}
Am(Yc, "useFocusGuards");
function om() {
  const l = document.createElement("span");
  return (
    l.setAttribute("data-radix-focus-guard", ""),
    (l.tabIndex = 0),
    (l.style.outline = "none"),
    (l.style.opacity = "0"),
    (l.style.position = "fixed"),
    (l.style.pointerEvents = "none"),
    l
  );
}
Am(om, "createFocusGuard");
var ta = function () {
  return (
    (ta =
      Object.assign ||
      function (r) {
        for (var o, s = 1, f = arguments.length; s < f; s++) {
          o = arguments[s];
          for (var u in o)
            Object.prototype.hasOwnProperty.call(o, u) && (r[u] = o[u]);
        }
        return r;
      }),
    ta.apply(this, arguments)
  );
};
function Ry(l, r) {
  var o = {};
  for (var s in l)
    Object.prototype.hasOwnProperty.call(l, s) &&
      r.indexOf(s) < 0 &&
      (o[s] = l[s]);
  if (l != null && typeof Object.getOwnPropertySymbols == "function")
    for (var f = 0, s = Object.getOwnPropertySymbols(l); f < s.length; f++)
      r.indexOf(s[f]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(l, s[f]) &&
        (o[s[f]] = l[s[f]]);
  return o;
}
function p3(l, r, o) {
  if (o || arguments.length === 2)
    for (var s = 0, f = r.length, u; s < f; s++)
      (u || !(s in r)) &&
        (u || (u = Array.prototype.slice.call(r, 0, s)), (u[s] = r[s]));
  return l.concat(u || Array.prototype.slice.call(r));
}
var Tc = "right-scroll-bar-position",
  Nc = "width-before-scroll-bar",
  v3 = "with-scroll-bars-hidden",
  g3 = "--removed-body-scroll-bar-size";
function Yd(l, r) {
  return (typeof l == "function" ? l(r) : l && (l.current = r), l);
}
function y3(l, r) {
  var o = m.useState(function () {
    return {
      value: l,
      callback: r,
      facade: {
        get current() {
          return o.value;
        },
        set current(s) {
          var f = o.value;
          f !== s && ((o.value = s), o.callback(s, f));
        },
      },
    };
  })[0];
  return ((o.callback = r), o.facade);
}
var b3 = typeof window < "u" ? m.useLayoutEffect : m.useEffect,
  $g = new WeakMap();
function S3(l, r) {
  var o = y3(null, function (s) {
    return l.forEach(function (f) {
      return Yd(f, s);
    });
  });
  return (
    b3(
      function () {
        var s = $g.get(o);
        if (s) {
          var f = new Set(s),
            u = new Set(l),
            d = o.current;
          (f.forEach(function (v) {
            u.has(v) || Yd(v, null);
          }),
            u.forEach(function (v) {
              f.has(v) || Yd(v, d);
            }));
        }
        $g.set(o, l);
      },
      [l]
    ),
    o
  );
}
function x3(l) {
  return l;
}
function C3(l, r) {
  r === void 0 && (r = x3);
  var o = [],
    s = !1,
    f = {
      read: function () {
        if (s)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return o.length ? o[o.length - 1] : l;
      },
      useMedium: function (u) {
        var d = r(u, s);
        return (
          o.push(d),
          function () {
            o = o.filter(function (v) {
              return v !== d;
            });
          }
        );
      },
      assignSyncMedium: function (u) {
        for (s = !0; o.length;) {
          var d = o;
          ((o = []), d.forEach(u));
        }
        o = {
          push: function (v) {
            return u(v);
          },
          filter: function () {
            return o;
          },
        };
      },
      assignMedium: function (u) {
        s = !0;
        var d = [];
        if (o.length) {
          var v = o;
          ((o = []), v.forEach(u), (d = o));
        }
        var g = function () {
            var y = d;
            ((d = []), y.forEach(u));
          },
          b = function () {
            return Promise.resolve().then(g);
          };
        (b(),
          (o = {
            push: function (y) {
              (d.push(y), b());
            },
            filter: function (y) {
              return ((d = d.filter(y)), o);
            },
          }));
      },
    };
  return f;
}
function E3(l) {
  l === void 0 && (l = {});
  var r = C3(null);
  return ((r.options = ta({ async: !0, ssr: !1 }, l)), r);
}
var Ay = function (l) {
  var r = l.sideCar,
    o = Ry(l, ["sideCar"]);
  if (!r)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var s = r.read();
  if (!s) throw new Error("Sidecar medium not found");
  return m.createElement(s, ta({}, o));
};
Ay.isSideCarExport = !0;
function w3(l, r) {
  return (l.useMedium(r), Ay);
}
var Oy = E3(),
  kd = function () {},
  kc = m.forwardRef(function (l, r) {
    var o = m.useRef(null),
      s = m.useState({
        onScrollCapture: kd,
        onWheelCapture: kd,
        onTouchMoveCapture: kd,
      }),
      f = s[0],
      u = s[1],
      d = l.forwardProps,
      v = l.children,
      g = l.className,
      b = l.removeScrollBar,
      y = l.enabled,
      h = l.shards,
      x = l.sideCar,
      E = l.noRelative,
      w = l.noIsolation,
      T = l.inert,
      N = l.allowPinchZoom,
      R = l.as,
      M = R === void 0 ? "div" : R,
      _ = l.gapMode,
      j = Ry(l, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      G = x,
      P = S3([o, r]),
      U = ta(ta({}, j), f);
    return m.createElement(
      m.Fragment,
      null,
      y &&
        m.createElement(G, {
          sideCar: Oy,
          removeScrollBar: b,
          shards: h,
          noRelative: E,
          noIsolation: w,
          inert: T,
          setCallbacks: u,
          allowPinchZoom: !!N,
          lockRef: o,
          gapMode: _,
        }),
      d
        ? m.cloneElement(m.Children.only(v), ta(ta({}, U), { ref: P }))
        : m.createElement(M, ta({}, U, { className: g, ref: P }), v)
    );
  });
kc.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
kc.classNames = { fullWidth: Nc, zeroRight: Tc };
var T3 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function N3() {
  if (!document) return null;
  var l = document.createElement("style");
  l.type = "text/css";
  var r = T3();
  return (r && l.setAttribute("nonce", r), l);
}
function R3(l, r) {
  l.styleSheet
    ? (l.styleSheet.cssText = r)
    : l.appendChild(document.createTextNode(r));
}
function A3(l) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(l);
}
var O3 = function () {
    var l = 0,
      r = null;
    return {
      add: function (o) {
        (l == 0 && (r = N3()) && (R3(r, o), A3(r)), l++);
      },
      remove: function () {
        (l--,
          !l && r && (r.parentNode && r.parentNode.removeChild(r), (r = null)));
      },
    };
  },
  _3 = function () {
    var l = O3();
    return function (r, o) {
      m.useEffect(
        function () {
          return (
            l.add(r),
            function () {
              l.remove();
            }
          );
        },
        [r && o]
      );
    };
  },
  _y = function () {
    var l = _3(),
      r = function (o) {
        var s = o.styles,
          f = o.dynamic;
        return (l(s, f), null);
      };
    return r;
  },
  D3 = { left: 0, top: 0, right: 0, gap: 0 },
  qd = function (l) {
    return parseInt(l || "", 10) || 0;
  },
  M3 = function (l) {
    var r = window.getComputedStyle(document.body),
      o = r[l === "padding" ? "paddingLeft" : "marginLeft"],
      s = r[l === "padding" ? "paddingTop" : "marginTop"],
      f = r[l === "padding" ? "paddingRight" : "marginRight"];
    return [qd(o), qd(s), qd(f)];
  },
  j3 = function (l) {
    if ((l === void 0 && (l = "margin"), typeof window > "u")) return D3;
    var r = M3(l),
      o = document.documentElement.clientWidth,
      s = window.innerWidth;
    return {
      left: r[0],
      top: r[1],
      right: r[2],
      gap: Math.max(0, s - o + r[2] - r[0]),
    };
  },
  z3 = _y(),
  si = "data-scroll-locked",
  H3 = function (l, r, o, s) {
    var f = l.left,
      u = l.top,
      d = l.right,
      v = l.gap;
    return (
      o === void 0 && (o = "margin"),
      `
  .`
        .concat(
          v3,
          ` {
   overflow: hidden `
        )
        .concat(
          s,
          `;
   padding-right: `
        )
        .concat(v, "px ")
        .concat(
          s,
          `;
  }
  body[`
        )
        .concat(
          si,
          `] {
    overflow: hidden `
        )
        .concat(
          s,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            r && "position: relative ".concat(s, ";"),
            o === "margin" &&
              `
    padding-left: `
                .concat(
                  f,
                  `px;
    padding-top: `
                )
                .concat(
                  u,
                  `px;
    padding-right: `
                )
                .concat(
                  d,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(v, "px ")
                .concat(
                  s,
                  `;
    `
                ),
            o === "padding" &&
              "padding-right: ".concat(v, "px ").concat(s, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Tc,
          ` {
    right: `
        )
        .concat(v, "px ")
        .concat(
          s,
          `;
  }
  
  .`
        )
        .concat(
          Nc,
          ` {
    margin-right: `
        )
        .concat(v, "px ")
        .concat(
          s,
          `;
  }
  
  .`
        )
        .concat(Tc, " .")
        .concat(
          Tc,
          ` {
    right: 0 `
        )
        .concat(
          s,
          `;
  }
  
  .`
        )
        .concat(Nc, " .")
        .concat(
          Nc,
          ` {
    margin-right: 0 `
        )
        .concat(
          s,
          `;
  }
  
  body[`
        )
        .concat(
          si,
          `] {
    `
        )
        .concat(g3, ": ")
        .concat(
          v,
          `px;
  }
`
        )
    );
  },
  Fg = function () {
    var l = parseInt(document.body.getAttribute(si) || "0", 10);
    return isFinite(l) ? l : 0;
  },
  L3 = function () {
    m.useEffect(function () {
      return (
        document.body.setAttribute(si, (Fg() + 1).toString()),
        function () {
          var l = Fg() - 1;
          l <= 0
            ? document.body.removeAttribute(si)
            : document.body.setAttribute(si, l.toString());
        }
      );
    }, []);
  },
  B3 = function (l) {
    var r = l.noRelative,
      o = l.noImportant,
      s = l.gapMode,
      f = s === void 0 ? "margin" : s;
    L3();
    var u = m.useMemo(
      function () {
        return j3(f);
      },
      [f]
    );
    return m.createElement(z3, { styles: H3(u, !r, f, o ? "" : "!important") });
  },
  sm = !1;
if (typeof window < "u")
  try {
    var vc = Object.defineProperty({}, "passive", {
      get: function () {
        return ((sm = !0), !0);
      },
    });
    (window.addEventListener("test", vc, vc),
      window.removeEventListener("test", vc, vc));
  } catch {
    sm = !1;
  }
var ai = sm ? { passive: !1 } : !1,
  U3 = function (l) {
    return l.tagName === "TEXTAREA";
  },
  Dy = function (l, r) {
    if (!(l instanceof Element)) return !1;
    var o = window.getComputedStyle(l);
    return (
      o[r] !== "hidden" &&
      !(o.overflowY === o.overflowX && !U3(l) && o[r] === "visible")
    );
  },
  V3 = function (l) {
    return Dy(l, "overflowY");
  },
  P3 = function (l) {
    return Dy(l, "overflowX");
  },
  Jg = function (l, r) {
    var o = r.ownerDocument,
      s = r;
    do {
      typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host);
      var f = My(l, s);
      if (f) {
        var u = jy(l, s),
          d = u[1],
          v = u[2];
        if (d > v) return !0;
      }
      s = s.parentNode;
    } while (s && s !== o.body);
    return !1;
  },
  Y3 = function (l) {
    var r = l.scrollTop,
      o = l.scrollHeight,
      s = l.clientHeight;
    return [r, o, s];
  },
  k3 = function (l) {
    var r = l.scrollLeft,
      o = l.scrollWidth,
      s = l.clientWidth;
    return [r, o, s];
  },
  My = function (l, r) {
    return l === "v" ? V3(r) : P3(r);
  },
  jy = function (l, r) {
    return l === "v" ? Y3(r) : k3(r);
  },
  q3 = function (l, r) {
    return l === "h" && r === "rtl" ? -1 : 1;
  },
  G3 = function (l, r, o, s, f) {
    var u = q3(l, window.getComputedStyle(r).direction),
      d = u * s,
      v = o.target,
      g = r.contains(v),
      b = !1,
      y = d > 0,
      h = 0,
      x = 0;
    do {
      if (!v) break;
      var E = jy(l, v),
        w = E[0],
        T = E[1],
        N = E[2],
        R = T - N - u * w;
      (w || R) && My(l, v) && ((h += R), (x += w));
      var M = v.parentNode;
      v = M && M.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? M.host : M;
    } while ((!g && v !== document.body) || (g && (r.contains(v) || r === v)));
    return (((y && Math.abs(h) < 1) || (!y && Math.abs(x) < 1)) && (b = !0), b);
  },
  gc = function (l) {
    return "changedTouches" in l
      ? [l.changedTouches[0].clientX, l.changedTouches[0].clientY]
      : [0, 0];
  },
  Wg = function (l) {
    return [l.deltaX, l.deltaY];
  },
  e1 = function (l) {
    return l && "current" in l ? l.current : l;
  },
  X3 = function (l, r) {
    return l[0] === r[0] && l[1] === r[1];
  },
  I3 = function (l) {
    return `
  .block-interactivity-`
      .concat(
        l,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        l,
        ` {pointer-events: all;}
`
      );
  },
  Z3 = 0,
  li = [];
function Q3(l) {
  var r = m.useRef([]),
    o = m.useRef([0, 0]),
    s = m.useRef(),
    f = m.useState(Z3++)[0],
    u = m.useState(_y)[0],
    d = m.useRef(l);
  (m.useEffect(
    function () {
      d.current = l;
    },
    [l]
  ),
    m.useEffect(
      function () {
        if (l.inert) {
          document.body.classList.add("block-interactivity-".concat(f));
          var T = p3([l.lockRef.current], (l.shards || []).map(e1), !0).filter(
            Boolean
          );
          return (
            T.forEach(function (N) {
              return N.classList.add("allow-interactivity-".concat(f));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(f)),
                T.forEach(function (N) {
                  return N.classList.remove("allow-interactivity-".concat(f));
                }));
            }
          );
        }
      },
      [l.inert, l.lockRef.current, l.shards]
    ));
  var v = m.useCallback(function (T, N) {
      if (
        ("touches" in T && T.touches.length === 2) ||
        (T.type === "wheel" && T.ctrlKey)
      )
        return !d.current.allowPinchZoom;
      var R = gc(T),
        M = o.current,
        _ = "deltaX" in T ? T.deltaX : M[0] - R[0],
        j = "deltaY" in T ? T.deltaY : M[1] - R[1],
        G,
        P = T.target,
        U = Math.abs(_) > Math.abs(j) ? "h" : "v";
      if ("touches" in T && U === "h" && P.type === "range") return !1;
      var Q = window.getSelection(),
        ie = Q && Q.anchorNode,
        W = ie ? ie === P || ie.contains(P) : !1;
      if (W) return !1;
      var re = Jg(U, P);
      if (!re) return !0;
      if ((re ? (G = U) : ((G = U === "v" ? "h" : "v"), (re = Jg(U, P))), !re))
        return !1;
      if (
        (!s.current && "changedTouches" in T && (_ || j) && (s.current = G), !G)
      )
        return !0;
      var X = s.current || G;
      return G3(X, N, T, X === "h" ? _ : j);
    }, []),
    g = m.useCallback(function (T) {
      var N = T;
      if (!(!li.length || li[li.length - 1] !== u)) {
        var R = "deltaY" in N ? Wg(N) : gc(N),
          M = r.current.filter(function (G) {
            return (
              G.name === N.type &&
              (G.target === N.target || N.target === G.shadowParent) &&
              X3(G.delta, R)
            );
          })[0];
        if (M && M.should) {
          N.cancelable && N.preventDefault();
          return;
        }
        if (!M) {
          var _ = (d.current.shards || [])
              .map(e1)
              .filter(Boolean)
              .filter(function (G) {
                return G.contains(N.target);
              }),
            j = _.length > 0 ? v(N, _[0]) : !d.current.noIsolation;
          j && N.cancelable && N.preventDefault();
        }
      }
    }, []),
    b = m.useCallback(function (T, N, R, M) {
      var _ = { name: T, delta: N, target: R, should: M, shadowParent: K3(R) };
      (r.current.push(_),
        setTimeout(function () {
          r.current = r.current.filter(function (j) {
            return j !== _;
          });
        }, 1));
    }, []),
    y = m.useCallback(function (T) {
      ((o.current = gc(T)), (s.current = void 0));
    }, []),
    h = m.useCallback(function (T) {
      b(T.type, Wg(T), T.target, v(T, l.lockRef.current));
    }, []),
    x = m.useCallback(function (T) {
      b(T.type, gc(T), T.target, v(T, l.lockRef.current));
    }, []);
  m.useEffect(function () {
    return (
      li.push(u),
      l.setCallbacks({
        onScrollCapture: h,
        onWheelCapture: h,
        onTouchMoveCapture: x,
      }),
      document.addEventListener("wheel", g, ai),
      document.addEventListener("touchmove", g, ai),
      document.addEventListener("touchstart", y, ai),
      function () {
        ((li = li.filter(function (T) {
          return T !== u;
        })),
          document.removeEventListener("wheel", g, ai),
          document.removeEventListener("touchmove", g, ai),
          document.removeEventListener("touchstart", y, ai));
      }
    );
  }, []);
  var E = l.removeScrollBar,
    w = l.inert;
  return m.createElement(
    m.Fragment,
    null,
    w ? m.createElement(u, { styles: I3(f) }) : null,
    E
      ? m.createElement(B3, { noRelative: l.noRelative, gapMode: l.gapMode })
      : null
  );
}
function K3(l) {
  for (var r = null; l !== null;)
    (l instanceof ShadowRoot && ((r = l.host), (l = l.host)),
      (l = l.parentNode));
  return r;
}
const $3 = w3(Oy, Q3);
var Om = m.forwardRef(function (l, r) {
  return m.createElement(kc, ta({}, l, { ref: r, sideCar: $3 }));
});
Om.classNames = kc.classNames;
var F3 = function (l) {
    if (typeof document > "u") return null;
    var r = Array.isArray(l) ? l[0] : l;
    return r.ownerDocument.body;
  },
  ri = new WeakMap(),
  yc = new WeakMap(),
  bc = {},
  Gd = 0,
  zy = function (l) {
    return l && (l.host || zy(l.parentNode));
  },
  J3 = function (l, r) {
    return r
      .map(function (o) {
        if (l.contains(o)) return o;
        var s = zy(o);
        return s && l.contains(s)
          ? s
          : (console.error(
              "aria-hidden",
              o,
              "in not contained inside",
              l,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (o) {
        return !!o;
      });
  },
  W3 = function (l, r, o, s) {
    var f = J3(r, Array.isArray(l) ? l : [l]);
    bc[o] || (bc[o] = new WeakMap());
    var u = bc[o],
      d = [],
      v = new Set(),
      g = new Set(f),
      b = function (h) {
        !h || v.has(h) || (v.add(h), b(h.parentNode));
      };
    f.forEach(b);
    var y = function (h) {
      !h ||
        g.has(h) ||
        Array.prototype.forEach.call(h.children, function (x) {
          if (v.has(x)) y(x);
          else
            try {
              var E = x.getAttribute(s),
                w = E !== null && E !== "false",
                T = (ri.get(x) || 0) + 1,
                N = (u.get(x) || 0) + 1;
              (ri.set(x, T),
                u.set(x, N),
                d.push(x),
                T === 1 && w && yc.set(x, !0),
                N === 1 && x.setAttribute(o, "true"),
                w || x.setAttribute(s, "true"));
            } catch (R) {
              console.error("aria-hidden: cannot operate on ", x, R);
            }
        });
    };
    return (
      y(r),
      v.clear(),
      Gd++,
      function () {
        (d.forEach(function (h) {
          var x = ri.get(h) - 1,
            E = u.get(h) - 1;
          (ri.set(h, x),
            u.set(h, E),
            x || (yc.has(h) || h.removeAttribute(s), yc.delete(h)),
            E || h.removeAttribute(o));
        }),
          Gd--,
          Gd ||
            ((ri = new WeakMap()),
            (ri = new WeakMap()),
            (yc = new WeakMap()),
            (bc = {})));
      }
    );
  },
  Hy = function (l, r, o) {
    o === void 0 && (o = "data-aria-hidden");
    var s = Array.from(Array.isArray(l) ? l : [l]),
      f = F3(l);
    return f
      ? (s.push.apply(s, Array.from(f.querySelectorAll("[aria-live], script"))),
        W3(s, f, o, "aria-hidden"))
      : function () {
          return null;
        };
  },
  eE = Object.defineProperty,
  en = (l, r) => eE(l, "name", { value: r, configurable: !0 }),
  _m = "Dialog",
  [Ly, By] = Un(_m),
  [tE, Vn] = Ly(_m),
  Uy = en((l) => {
    const {
        __scopeDialog: r,
        children: o,
        open: s,
        defaultOpen: f,
        onOpenChange: u,
        modal: d = !0,
      } = l,
      v = m.useRef(null),
      g = m.useRef(null),
      { nodes: b, registry: y } = by(),
      [h, x] = di({ prop: s, defaultProp: f ?? !1, onChange: u, caller: _m }),
      [E, w] = m.useState(0),
      [T, N] = m.useState(0);
    return S.jsx(tE, {
      scope: r,
      triggerRef: v,
      contentRef: g,
      contentId: Fl(),
      titleId: Fl(),
      descriptionId: Fl(),
      titlePresent: E > 0,
      descriptionPresent: T > 0,
      setTitleCount: w,
      setDescriptionCount: N,
      open: h,
      onOpenChange: x,
      onOpenToggle: m.useCallback(() => x((R) => !R), [x]),
      modal: d,
      branchNodes: b,
      branchRegistry: y,
      children: o,
    });
  }, "Dialog"),
  nE = "DialogTrigger",
  Vy = m.forwardRef(
    en(function (r, o) {
      const { __scopeDialog: s, ...f } = r,
        u = Vn(nE, s),
        d = Re(o, u.triggerRef);
      return S.jsx(Ae.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": u.open,
        "aria-controls": u.open ? u.contentId : void 0,
        "data-state": qc(u.open),
        ...f,
        ref: d,
        onClick: Te(r.onClick, u.onOpenToggle),
      });
    }, "DialogTrigger")
  ),
  Py = "DialogPortal",
  [aE, Yy] = Ly(Py, { forceMount: void 0 }),
  ky = en((l) => {
    const { __scopeDialog: r, forceMount: o, children: s, container: f } = l,
      u = Vn(Py, r);
    return S.jsx(aE, {
      scope: r,
      forceMount: o,
      children: m.Children.map(s, (d) =>
        S.jsx(pl, {
          present: o || u.open,
          children: S.jsx(Ny, { asChild: !0, container: f, children: d }),
        })
      ),
    });
  }, "DialogPortal"),
  cm = "DialogOverlay",
  qy = m.forwardRef(
    en(function (r, o) {
      const s = Yy(cm, r.__scopeDialog),
        { forceMount: f = s.forceMount, ...u } = r,
        d = Vn(cm, r.__scopeDialog);
      return d.modal
        ? S.jsx(pl, {
            present: f || d.open,
            children: S.jsx(rE, { ...u, ref: o }),
          })
        : null;
    }, "DialogOverlay")
  ),
  lE = wa("DialogOverlay.RemoveScroll"),
  rE = m.forwardRef(
    en(function (r, o) {
      const { __scopeDialog: s, ...f } = r,
        u = Vn(cm, s),
        d = my(),
        v = Re(o, d);
      return S.jsx(Om, {
        as: lE,
        allowPinchZoom: !0,
        shards: m.useMemo(
          () => [u.contentRef, ...u.branchNodes.map((g) => ({ current: g }))],
          [u.contentRef, u.branchNodes]
        ),
        children: S.jsx(Ae.div, {
          "data-state": qc(u.open),
          ...f,
          ref: v,
          style: { pointerEvents: "auto", ...f.style },
        }),
      });
    }, "DialogOverlayImpl")
  ),
  Ro = "DialogContent",
  Gy = m.forwardRef(
    en(function (r, o) {
      const s = Yy(Ro, r.__scopeDialog),
        { forceMount: f = s.forceMount, ...u } = r,
        d = Vn(Ro, r.__scopeDialog);
      return S.jsx(pl, {
        present: f || d.open,
        children: d.modal
          ? S.jsx(iE, { ...u, ref: o })
          : S.jsx(oE, { ...u, ref: o }),
      });
    }, "DialogContent")
  ),
  iE = m.forwardRef(
    en(function (r, o) {
      const s = Vn(Ro, r.__scopeDialog),
        f = m.useRef(null),
        u = Re(o, s.contentRef, f);
      return (
        m.useEffect(() => {
          const d = f.current;
          if (d) return Hy(d);
        }, []),
        S.jsx(Xy, {
          ...r,
          ref: u,
          trapFocus: s.open,
          disableOutsidePointerEvents: s.open,
          onCloseAutoFocus: Te(r.onCloseAutoFocus, (d) => {
            (d.preventDefault(), s.triggerRef.current?.focus());
          }),
          onPointerDownOutside: Te(r.onPointerDownOutside, (d) => {
            const v = d.detail.originalEvent,
              g = v.button === 0 && v.ctrlKey === !0;
            (v.button === 2 || g) && d.preventDefault();
          }),
          onFocusOutside: Te(r.onFocusOutside, (d) => d.preventDefault()),
        })
      );
    }, "DialogContentModal")
  ),
  oE = m.forwardRef(
    en(function (r, o) {
      const s = Vn(Ro, r.__scopeDialog),
        f = m.useRef(!1),
        u = m.useRef(!1);
      return S.jsx(Xy, {
        ...r,
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (d) => {
          (r.onCloseAutoFocus?.(d),
            d.defaultPrevented ||
              (f.current || s.triggerRef.current?.focus(), d.preventDefault()),
            (f.current = !1),
            (u.current = !1));
        },
        onInteractOutside: (d) => {
          (r.onInteractOutside?.(d),
            d.defaultPrevented ||
              ((f.current = !0),
              d.detail.originalEvent.type === "pointerdown" &&
                (u.current = !0)));
          const v = d.target;
          (s.triggerRef.current?.contains(v) && d.preventDefault(),
            d.detail.originalEvent.type === "focusin" &&
              u.current &&
              d.preventDefault());
        },
      });
    }, "DialogContentNonModal")
  ),
  Xy = m.forwardRef(
    en(function (r, o) {
      const {
          __scopeDialog: s,
          trapFocus: f,
          onOpenAutoFocus: u,
          onCloseAutoFocus: d,
          "aria-describedby": v,
          children: g,
          ...b
        } = r,
        y = Vn(Ro, s);
      return (
        Yc(),
        S.jsx(yy, {
          registry: y.branchRegistry,
          children: S.jsx(vy, {
            asChild: !0,
            loop: !0,
            trapped: f,
            branches: y.branchNodes,
            onMountAutoFocus: u,
            onUnmountAutoFocus: d,
            children: S.jsx(dy, {
              role: "dialog",
              id: y.contentId,
              "aria-labelledby": y.titlePresent ? y.titleId : void 0,
              "aria-describedby": y.descriptionPresent
                ? Qy(v, y.descriptionId)
                : v,
              "data-state": qc(y.open),
              ...b,
              ref: o,
              deferPointerDownOutside: !0,
              onDismiss: () => y.onOpenChange(!1),
              children: g,
            }),
          }),
        })
      );
    }, "DialogContentImpl")
  ),
  Iy = m.forwardRef(
    en(function (r, o) {
      const { __scopeDialog: s, ...f } = r,
        u = Vn("DialogTitle", s),
        { setTitleCount: d } = u;
      return (
        vt(() => (d((v) => v + 1), () => d((v) => v - 1)), [d]),
        S.jsx(Ae.h2, { id: u.titleId, ...f, ref: o })
      );
    }, "DialogTitle")
  ),
  Zy = m.forwardRef(
    en(function (r, o) {
      const { __scopeDialog: s, ...f } = r,
        u = Vn("DialogDescription", s),
        { setDescriptionCount: d } = u;
      return (
        vt(() => (d((v) => v + 1), () => d((v) => v - 1)), [d]),
        S.jsx(Ae.p, { id: u.descriptionId, ...f, ref: o })
      );
    }, "DialogDescription")
  ),
  sE = "DialogClose",
  Dm = m.forwardRef(
    en(function (r, o) {
      const { __scopeDialog: s, ...f } = r,
        u = Vn(sE, s);
      return S.jsx(Ae.button, {
        type: "button",
        ...f,
        ref: o,
        onClick: Te(r.onClick, () => u.onOpenChange(!1)),
      });
    }, "DialogClose")
  );
function Qy(...l) {
  const r = new Set();
  for (const o of l)
    if (typeof o == "string")
      for (const s of String(o).trim().split(/\s+/)) s && r.add(s);
  return r.size > 0 ? Array.from(r).join(" ") : void 0;
}
en(Qy, "concatAriaDescribedby");
function qc(l) {
  return l ? "open" : "closed";
}
en(qc, "getState");
var cE = Object.defineProperty,
  Aa = (l, r) => cE(l, "name", { value: r, configurable: !0 }),
  uE = "AlertDialog",
  [fE, cT] = Un(uE, [By]),
  Oa = By(),
  dE = Aa((l) => {
    const { __scopeAlertDialog: r, ...o } = l,
      s = Oa(r);
    return S.jsx(Uy, { ...s, ...o, modal: !0 });
  }, "AlertDialog"),
  mE = m.forwardRef(
    Aa(function (r, o) {
      const { __scopeAlertDialog: s, ...f } = r,
        u = Oa(s);
      return S.jsx(Vy, { ...u, ...f, ref: o });
    }, "AlertDialogTrigger")
  ),
  hE = Aa((l) => {
    const { __scopeAlertDialog: r, ...o } = l,
      s = Oa(r);
    return S.jsx(ky, { ...s, ...o });
  }, "AlertDialogPortal"),
  pE = m.forwardRef(
    Aa(function (r, o) {
      const { __scopeAlertDialog: s, ...f } = r,
        u = Oa(s);
      return S.jsx(qy, { ...u, ...f, ref: o });
    }, "AlertDialogOverlay")
  ),
  vE = "AlertDialogContent",
  [gE, yE] = fE(vE),
  bE = m.forwardRef(
    Aa(function (r, o) {
      const { __scopeAlertDialog: s, children: f, ...u } = r,
        d = Oa(s),
        v = m.useRef(null),
        g = Re(o, v),
        b = m.useRef(null);
      return S.jsx(gE, {
        scope: s,
        cancelRef: b,
        children: S.jsx(Gy, {
          role: "alertdialog",
          ...d,
          ...u,
          ref: g,
          onOpenAutoFocus: Te(u.onOpenAutoFocus, (y) => {
            (y.preventDefault(), b.current?.focus({ preventScroll: !0 }));
          }),
          onPointerDownOutside: (y) => y.preventDefault(),
          onInteractOutside: (y) => y.preventDefault(),
          children: f,
        }),
      });
    }, "AlertDialogContent")
  ),
  SE = m.forwardRef(
    Aa(function (r, o) {
      const { __scopeAlertDialog: s, ...f } = r,
        u = Oa(s);
      return S.jsx(Iy, { ...u, ...f, ref: o });
    }, "AlertDialogTitle")
  ),
  xE = m.forwardRef(
    Aa(function (r, o) {
      const { __scopeAlertDialog: s, ...f } = r,
        u = Oa(s);
      return S.jsx(Zy, { ...u, ...f, ref: o });
    }, "AlertDialogDescription")
  ),
  CE = m.forwardRef(
    Aa(function (r, o) {
      const { __scopeAlertDialog: s, ...f } = r,
        u = Oa(s);
      return S.jsx(Dm, { ...u, ...f, ref: o });
    }, "AlertDialogAction")
  ),
  EE = "AlertDialogCancel",
  wE = m.forwardRef(
    Aa(function (r, o) {
      const { __scopeAlertDialog: s, ...f } = r,
        { cancelRef: u } = yE(EE, s),
        d = Oa(s),
        v = Re(o, u);
      return S.jsx(Dm, { ...d, ...f, ref: v });
    }, "AlertDialogCancel")
  ),
  TE = Object.defineProperty,
  NE = (l, r) => TE(l, "name", { value: r, configurable: !0 });
function Gc(l) {
  const [r, o] = m.useState(void 0);
  return (
    vt(() => {
      if (l) {
        o({ width: l.offsetWidth, height: l.offsetHeight });
        let s = 0;
        const f = new ResizeObserver((u) => {
          if (!Array.isArray(u) || !u.length) return;
          const d = u[0];
          (window.cancelAnimationFrame(s),
            (s = window.requestAnimationFrame(() => {
              let v, g;
              if ("borderBoxSize" in d) {
                const b = d.borderBoxSize,
                  y = Array.isArray(b) ? b[0] : b;
                ((v = y.inlineSize), (g = y.blockSize));
              } else ((v = l.offsetWidth), (g = l.offsetHeight));
              o({ width: v, height: g });
            })));
        });
        return (
          f.observe(l, { box: "border-box" }),
          () => {
            (window.cancelAnimationFrame(s), f.unobserve(l));
          }
        );
      } else o(void 0);
    }, [l]),
    r
  );
}
NE(Gc, "useSize");
const RE = ["top", "right", "bottom", "left"],
  fl = Math.min,
  Ca = Math.max,
  Mc = Math.round,
  Sc = Math.floor,
  Ea = (l) => ({ x: l, y: l }),
  AE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ky(l, r, o) {
  return Ca(l, fl(r, o));
}
function Na(l, r) {
  return typeof l == "function" ? l(r) : l;
}
function dl(l) {
  return l.split("-")[0];
}
function gi(l) {
  return l.split("-")[1];
}
function Mm(l) {
  return l === "x" ? "y" : "x";
}
function jm(l) {
  return l === "y" ? "height" : "width";
}
function na(l) {
  const r = l[0];
  return r === "t" || r === "b" ? "y" : "x";
}
function zm(l) {
  return Mm(na(l));
}
function OE(l, r, o) {
  o === void 0 && (o = !1);
  const s = gi(l),
    f = zm(l),
    u = jm(f);
  let d =
    f === "x"
      ? s === (o ? "end" : "start")
        ? "right"
        : "left"
      : s === "start"
        ? "bottom"
        : "top";
  return (r.reference[u] > r.floating[u] && (d = jc(d)), [d, jc(d)]);
}
function _E(l) {
  const r = jc(l);
  return [um(l), r, um(r)];
}
function um(l) {
  return l.includes("start")
    ? l.replace("start", "end")
    : l.replace("end", "start");
}
const t1 = ["left", "right"],
  n1 = ["right", "left"],
  DE = ["top", "bottom"],
  ME = ["bottom", "top"];
function jE(l, r, o) {
  switch (l) {
    case "top":
    case "bottom":
      return o ? (r ? n1 : t1) : r ? t1 : n1;
    case "left":
    case "right":
      return r ? DE : ME;
    default:
      return [];
  }
}
function zE(l, r, o, s) {
  const f = gi(l);
  let u = jE(dl(l), o === "start", s);
  return (
    f && ((u = u.map((d) => d + "-" + f)), r && (u = u.concat(u.map(um)))),
    u
  );
}
function jc(l) {
  const r = dl(l);
  return AE[r] + l.slice(r.length);
}
function HE(l) {
  var r, o, s, f;
  return {
    top: (r = l.top) != null ? r : 0,
    right: (o = l.right) != null ? o : 0,
    bottom: (s = l.bottom) != null ? s : 0,
    left: (f = l.left) != null ? f : 0,
  };
}
function $y(l) {
  return typeof l != "number"
    ? HE(l)
    : { top: l, right: l, bottom: l, left: l };
}
function zc(l) {
  const { x: r, y: o, width: s, height: f } = l;
  return {
    width: s,
    height: f,
    top: o,
    left: r,
    right: r + s,
    bottom: o + f,
    x: r,
    y: o,
  };
}
function a1(l, r, o) {
  let { reference: s, floating: f } = l;
  const u = na(r),
    d = zm(r),
    v = jm(d),
    g = dl(r),
    b = u === "y",
    y = s.x + s.width / 2 - f.width / 2,
    h = s.y + s.height / 2 - f.height / 2,
    x = s[v] / 2 - f[v] / 2;
  let E;
  switch (g) {
    case "top":
      E = { x: y, y: s.y - f.height };
      break;
    case "bottom":
      E = { x: y, y: s.y + s.height };
      break;
    case "right":
      E = { x: s.x + s.width, y: h };
      break;
    case "left":
      E = { x: s.x - f.width, y: h };
      break;
    default:
      E = { x: s.x, y: s.y };
  }
  const w = gi(r);
  return (w && (E[d] += x * (w === "end" ? 1 : -1) * (o && b ? -1 : 1)), E);
}
async function LE(l, r) {
  var o;
  r === void 0 && (r = {});
  const { x: s, y: f, platform: u, rects: d, elements: v, strategy: g } = l,
    {
      boundary: b = "clippingAncestors",
      rootBoundary: y = "viewport",
      elementContext: h = "floating",
      altBoundary: x = !1,
      padding: E = 0,
    } = Na(r, l),
    w = $y(E),
    N = v[x ? (h === "floating" ? "reference" : "floating") : h],
    R = zc(
      await u.getClippingRect({
        element:
          (o = await (u.isElement == null ? void 0 : u.isElement(N))) == null ||
          o
            ? N
            : N.contextElement ||
              (await (u.getDocumentElement == null
                ? void 0
                : u.getDocumentElement(v.floating))),
        boundary: b,
        rootBoundary: y,
        strategy: g,
      })
    ),
    M =
      h === "floating"
        ? { x: s, y: f, width: d.floating.width, height: d.floating.height }
        : d.reference,
    _ = await (u.getOffsetParent == null
      ? void 0
      : u.getOffsetParent(v.floating)),
    j = ((await (u.isElement == null ? void 0 : u.isElement(_))) &&
      (await (u.getScale == null ? void 0 : u.getScale(_)))) || { x: 1, y: 1 },
    G = zc(
      u.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: v,
            rect: M,
            offsetParent: _,
            strategy: g,
          })
        : M
    );
  return {
    top: (R.top - G.top + w.top) / j.y,
    bottom: (G.bottom - R.bottom + w.bottom) / j.y,
    left: (R.left - G.left + w.left) / j.x,
    right: (G.right - R.right + w.right) / j.x,
  };
}
const BE = 50,
  UE = async (l, r, o) => {
    const {
        placement: s = "bottom",
        strategy: f = "absolute",
        middleware: u = [],
        platform: d,
      } = o,
      v = d.detectOverflow ? d : { ...d, detectOverflow: LE },
      g = await (d.isRTL == null ? void 0 : d.isRTL(r));
    let b = await d.getElementRects({ reference: l, floating: r, strategy: f }),
      { x: y, y: h } = a1(b, s, g),
      x = s,
      E = 0;
    const w = {};
    for (let T = 0; T < u.length; T++) {
      const N = u[T];
      if (!N) continue;
      const { name: R, fn: M } = N,
        {
          x: _,
          y: j,
          data: G,
          reset: P,
        } = await M({
          x: y,
          y: h,
          initialPlacement: s,
          placement: x,
          strategy: f,
          middlewareData: w,
          rects: b,
          platform: v,
          elements: { reference: l, floating: r },
        });
      ((y = _ ?? y),
        (h = j ?? h),
        (w[R] = { ...w[R], ...G }),
        P &&
          E < BE &&
          (E++,
          typeof P == "object" &&
            (P.placement && (x = P.placement),
            P.rects &&
              (b =
                P.rects === !0
                  ? await d.getElementRects({
                      reference: l,
                      floating: r,
                      strategy: f,
                    })
                  : P.rects),
            ({ x: y, y: h } = a1(b, x, g))),
          (T = -1)));
    }
    return { x: y, y: h, placement: x, strategy: f, middlewareData: w };
  },
  VE = (l) => ({
    name: "arrow",
    options: l,
    async fn(r) {
      const {
          x: o,
          y: s,
          placement: f,
          rects: u,
          platform: d,
          elements: v,
          middlewareData: g,
        } = r,
        { element: b, padding: y = 0 } = Na(l, r) || {};
      if (b == null) return {};
      const h = $y(y),
        x = { x: o, y: s },
        E = zm(f),
        w = jm(E),
        T = await d.getDimensions(b),
        N = E === "y",
        R = N ? "top" : "left",
        M = N ? "bottom" : "right",
        _ = N ? "clientHeight" : "clientWidth",
        j = u.reference[w] + u.reference[E] - x[E] - u.floating[w],
        G = x[E] - u.reference[E],
        P = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(b));
      let U = P ? P[_] : 0;
      (!U || !(await (d.isElement == null ? void 0 : d.isElement(P)))) &&
        (U = v.floating[_] || u.floating[w]);
      const Q = j / 2 - G / 2,
        ie = U / 2 - T[w] / 2 - 1,
        W = fl(h[R], ie),
        re = fl(h[M], ie),
        X = U - T[w] - re,
        oe = U / 2 - T[w] / 2 + Q,
        fe = Ky(W, oe, X),
        pe =
          !g.arrow &&
          gi(f) != null &&
          oe !== fe &&
          u.reference[w] / 2 - (oe < W ? W : re) - T[w] / 2 < 0,
        k = pe ? (oe < W ? oe - W : oe - X) : 0;
      return {
        [E]: x[E] + k,
        data: {
          [E]: fe,
          centerOffset: oe - fe - k,
          ...(pe && { alignmentOffset: k }),
        },
        reset: pe,
      };
    },
  }),
  PE = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        name: "flip",
        options: l,
        async fn(r) {
          var o, s;
          const {
              placement: f,
              middlewareData: u,
              rects: d,
              initialPlacement: v,
              platform: g,
              elements: b,
            } = r,
            {
              mainAxis: y = !0,
              crossAxis: h = !0,
              fallbackPlacements: x,
              fallbackStrategy: E = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: T = !0,
              ...N
            } = Na(l, r);
          if ((o = u.arrow) != null && o.alignmentOffset) return {};
          const R = dl(f),
            M = na(v),
            _ = dl(v) === v,
            j = await (g.isRTL == null ? void 0 : g.isRTL(b.floating)),
            G = x || (_ || !T ? [jc(v)] : _E(v)),
            P = w !== "none";
          !x && P && G.push(...zE(v, T, w, j));
          const U = [v, ...G],
            Q = await g.detectOverflow(r, N),
            ie = [];
          let W = ((s = u.flip) == null ? void 0 : s.overflows) || [];
          if ((y && ie.push(Q[R]), h)) {
            const fe = OE(f, d, j);
            ie.push(Q[fe[0]], Q[fe[1]]);
          }
          if (
            ((W = [...W, { placement: f, overflows: ie }]),
            !ie.every((fe) => fe <= 0))
          ) {
            var re, X;
            const fe = (((re = u.flip) == null ? void 0 : re.index) || 0) + 1,
              pe = U[fe];
            if (
              pe &&
              (!(h === "alignment" ? M !== na(pe) : !1) ||
                W.every((K) =>
                  na(K.placement) === M ? K.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: fe, overflows: W },
                reset: { placement: pe },
              };
            let k =
              (X = W.filter((te) => te.overflows[0] <= 0).sort(
                (te, K) => te.overflows[1] - K.overflows[1]
              )[0]) == null
                ? void 0
                : X.placement;
            if (!k)
              switch (E) {
                case "bestFit": {
                  var oe;
                  const te =
                    (oe = W.filter((K) => {
                      if (P) {
                        const ae = na(K.placement);
                        return ae === M || ae === "y";
                      }
                      return !0;
                    })
                      .map((K) => [
                        K.placement,
                        K.overflows
                          .filter((ae) => ae > 0)
                          .reduce((ae, $) => ae + $, 0),
                      ])
                      .sort((K, ae) => K[1] - ae[1])[0]) == null
                      ? void 0
                      : oe[0];
                  te && (k = te);
                  break;
                }
                case "initialPlacement":
                  k = v;
                  break;
              }
            if (f !== k) return { reset: { placement: k } };
          }
          return {};
        },
      }
    );
  };
function l1(l, r) {
  return {
    top: l.top - r.height,
    right: l.right - r.width,
    bottom: l.bottom - r.height,
    left: l.left - r.width,
  };
}
function r1(l) {
  return RE.some((r) => l[r] >= 0);
}
const YE = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        name: "hide",
        options: l,
        async fn(r) {
          const { rects: o, platform: s } = r,
            { strategy: f = "referenceHidden", ...u } = Na(l, r);
          switch (f) {
            case "referenceHidden": {
              const d = await s.detectOverflow(r, {
                  ...u,
                  elementContext: "reference",
                }),
                v = l1(d, o.reference);
              return {
                data: { referenceHiddenOffsets: v, referenceHidden: r1(v) },
              };
            }
            case "escaped": {
              const d = await s.detectOverflow(r, { ...u, altBoundary: !0 }),
                v = l1(d, o.floating);
              return { data: { escapedOffsets: v, escaped: r1(v) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Fy = new Set(["left", "top"]);
async function kE(l, r) {
  const { placement: o, platform: s, elements: f } = l,
    u = await (s.isRTL == null ? void 0 : s.isRTL(f.floating)),
    d = dl(o),
    v = gi(o),
    g = na(o) === "y",
    b = Fy.has(d) ? -1 : 1,
    y = u && g ? -1 : 1,
    h = Na(r, l);
  let {
    mainAxis: x,
    crossAxis: E,
    alignmentAxis: w,
  } = typeof h == "number"
    ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: h.mainAxis || 0,
        crossAxis: h.crossAxis || 0,
        alignmentAxis: h.alignmentAxis,
      };
  return (
    v && typeof w == "number" && (E = v === "end" ? w * -1 : w),
    g ? { x: E * y, y: x * b } : { x: x * b, y: E * y }
  );
}
const qE = function (l) {
    return (
      l === void 0 && (l = 0),
      {
        name: "offset",
        options: l,
        async fn(r) {
          var o, s;
          const { x: f, y: u, placement: d, middlewareData: v } = r,
            g = await kE(r, l);
          return d === ((o = v.offset) == null ? void 0 : o.placement) &&
            (s = v.arrow) != null &&
            s.alignmentOffset
            ? {}
            : { x: f + g.x, y: u + g.y, data: { ...g, placement: d } };
        },
      }
    );
  },
  GE = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        name: "shift",
        options: l,
        async fn(r) {
          const { x: o, y: s, placement: f, platform: u } = r,
            {
              mainAxis: d = !0,
              crossAxis: v = !1,
              limiter: g = {
                fn: (M) => {
                  let { x: _, y: j } = M;
                  return { x: _, y: j };
                },
              },
              ...b
            } = Na(l, r),
            y = { x: o, y: s },
            h = await u.detectOverflow(r, b),
            x = na(f),
            E = Mm(x);
          let w = y[E],
            T = y[x];
          const N = (M, _) =>
            Ky(
              _ + h[M === "y" ? "top" : "left"],
              _,
              _ - h[M === "y" ? "bottom" : "right"]
            );
          (d && (w = N(E, w)), v && (T = N(x, T)));
          const R = g.fn({ ...r, [E]: w, [x]: T });
          return {
            ...R,
            data: { x: R.x - o, y: R.y - s, enabled: { [E]: d, [x]: v } },
          };
        },
      }
    );
  },
  XE = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        options: l,
        fn(r) {
          var o, s;
          const { x: f, y: u, placement: d, rects: v, middlewareData: g } = r,
            { offset: b = 0, mainAxis: y = !0, crossAxis: h = !0 } = Na(l, r),
            x = { x: f, y: u },
            E = na(d),
            w = Mm(E);
          let T = x[w],
            N = x[E];
          const R = Na(b, r),
            M =
              typeof R == "number"
                ? { mainAxis: R, crossAxis: 0 }
                : {
                    mainAxis: (o = R.mainAxis) != null ? o : 0,
                    crossAxis: (s = R.crossAxis) != null ? s : 0,
                  };
          if (y) {
            const G = w === "y" ? "height" : "width",
              P = v.reference[w] - v.floating[G] + M.mainAxis,
              U = v.reference[w] + v.reference[G] - M.mainAxis;
            T < P ? (T = P) : T > U && (T = U);
          }
          if (h) {
            var _, j;
            const G = w === "y" ? "width" : "height",
              P = Fy.has(dl(d)),
              U =
                v.reference[E] -
                v.floating[G] +
                ((P && ((_ = g.offset) == null ? void 0 : _[E])) || 0) +
                (P ? 0 : M.crossAxis),
              Q =
                v.reference[E] +
                v.reference[G] +
                (P ? 0 : ((j = g.offset) == null ? void 0 : j[E]) || 0) -
                (P ? M.crossAxis : 0);
            N < U ? (N = U) : N > Q && (N = Q);
          }
          return { [w]: T, [E]: N };
        },
      }
    );
  },
  IE = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        name: "size",
        options: l,
        async fn(r) {
          const { placement: o, rects: s, platform: f, elements: u } = r,
            { apply: d = () => {}, ...v } = Na(l, r),
            g = await f.detectOverflow(r, v),
            b = dl(o),
            y = gi(o),
            h = na(o) === "y",
            { width: x, height: E } = s.floating;
          let w, T;
          b === "top" || b === "bottom"
            ? ((w = b),
              (T =
                y ===
                ((await (f.isRTL == null ? void 0 : f.isRTL(u.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((T = b), (w = y === "end" ? "top" : "bottom"));
          const N = E - g.top - g.bottom,
            R = x - g.left - g.right,
            M = fl(E - g[w], N),
            _ = fl(x - g[T], R),
            j = r.middlewareData.shift,
            G = !j;
          let P = M,
            U = _;
          (j != null && j.enabled.x && (U = R),
            j != null && j.enabled.y && (P = N),
            G &&
              !y &&
              (h
                ? (U = x - 2 * Ca(g.left, g.right))
                : (P = E - 2 * Ca(g.top, g.bottom))),
            await d({ ...r, availableWidth: U, availableHeight: P }));
          const Q = await f.getDimensions(u.floating);
          return x !== Q.width || E !== Q.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Xc() {
  return typeof window < "u";
}
function yi(l) {
  return Jy(l) ? (l.nodeName || "").toLowerCase() : "#document";
}
function Wt(l) {
  var r;
  return (
    (l == null || (r = l.ownerDocument) == null ? void 0 : r.defaultView) ||
    window
  );
}
function _a(l) {
  var r;
  return (r = (Jy(l) ? l.ownerDocument : l.document) || window.document) == null
    ? void 0
    : r.documentElement;
}
function Jy(l) {
  return Xc() ? l instanceof Node || l instanceof Wt(l).Node : !1;
}
function aa(l) {
  return Xc() ? l instanceof Element || l instanceof Wt(l).Element : !1;
}
function vl(l) {
  return Xc() ? l instanceof HTMLElement || l instanceof Wt(l).HTMLElement : !1;
}
function i1(l) {
  return !Xc() || typeof ShadowRoot > "u"
    ? !1
    : l instanceof ShadowRoot || l instanceof Wt(l).ShadowRoot;
}
function Ic(l) {
  const { overflow: r, overflowX: o, overflowY: s, display: f } = la(l);
  return (
    /auto|scroll|overlay|hidden|clip/.test(r + s + o) &&
    f !== "inline" &&
    f !== "contents"
  );
}
function ZE(l) {
  return /^(table|td|th)$/.test(yi(l));
}
function Zc(l) {
  try {
    if (l.matches(":popover-open")) return !0;
  } catch {}
  try {
    return l.matches(":modal");
  } catch {
    return !1;
  }
}
const QE = /transform|translate|scale|rotate|perspective|filter/,
  KE = /paint|layout|strict|content/,
  Il = (l) => !!l && l !== "none";
let Xd;
function Hm(l) {
  const r = aa(l) ? la(l) : l;
  return (
    Il(r.transform) ||
    Il(r.translate) ||
    Il(r.scale) ||
    Il(r.rotate) ||
    Il(r.perspective) ||
    (!Lm() && (Il(r.backdropFilter) || Il(r.filter))) ||
    QE.test(r.willChange || "") ||
    KE.test(r.contain || "")
  );
}
function $E(l) {
  let r = nr(l);
  for (; vl(r) && !Ao(r);) {
    if (Hm(r)) return r;
    if (Zc(r)) return null;
    r = nr(r);
  }
  return null;
}
function Lm() {
  return (
    Xd == null &&
      (Xd =
        typeof CSS < "u" &&
        CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")),
    Xd
  );
}
function Ao(l) {
  return /^(html|body|#document)$/.test(yi(l));
}
function la(l) {
  return Wt(l).getComputedStyle(l);
}
function Qc(l) {
  return aa(l)
    ? { scrollLeft: l.scrollLeft, scrollTop: l.scrollTop }
    : { scrollLeft: l.scrollX, scrollTop: l.scrollY };
}
function nr(l) {
  if (yi(l) === "html") return l;
  const r = l.assignedSlot || l.parentNode || (i1(l) && l.host) || _a(l);
  return i1(r) ? r.host : r;
}
function Wy(l) {
  const r = nr(l);
  return Ao(r) ? (l.ownerDocument || l).body : vl(r) && Ic(r) ? r : Wy(r);
}
function Oo(l, r, o) {
  var s;
  (r === void 0 && (r = []), o === void 0 && (o = !0));
  const f = Wy(l),
    u = f === ((s = l.ownerDocument) == null ? void 0 : s.body),
    d = Wt(f);
  if (u) {
    const v = fm(d);
    return r.concat(
      d,
      d.visualViewport || [],
      Ic(f) ? f : [],
      v && o ? Oo(v) : []
    );
  } else return r.concat(f, Oo(f, [], o));
}
function fm(l) {
  return l.parent && Object.getPrototypeOf(l.parent) ? l.frameElement : null;
}
function eb(l) {
  const r = la(l);
  let o = parseFloat(r.width) || 0,
    s = parseFloat(r.height) || 0;
  const f = vl(l),
    u = f ? l.offsetWidth : o,
    d = f ? l.offsetHeight : s,
    v = Mc(o) !== u || Mc(s) !== d;
  return (v && ((o = u), (s = d)), { width: o, height: s, $: v });
}
function Bm(l) {
  return aa(l) ? l : l.contextElement;
}
function ci(l) {
  const r = Bm(l);
  if (!vl(r)) return Ea(1);
  const o = r.getBoundingClientRect(),
    { width: s, height: f, $: u } = eb(r);
  let d = (u ? Mc(o.width) : o.width) / s,
    v = (u ? Mc(o.height) : o.height) / f;
  return (
    (!d || !Number.isFinite(d)) && (d = 1),
    (!v || !Number.isFinite(v)) && (v = 1),
    { x: d, y: v }
  );
}
const FE = Ea(0);
function tb(l) {
  const r = Wt(l);
  return !Lm() || !r.visualViewport
    ? FE
    : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop };
}
function JE(l, r, o) {
  return (r === void 0 && (r = !1), !!o && r && o === Wt(l));
}
function ar(l, r, o, s) {
  (r === void 0 && (r = !1), o === void 0 && (o = !1));
  const f = l.getBoundingClientRect(),
    u = Bm(l);
  let d = Ea(1);
  r && (s ? aa(s) && (d = ci(s)) : (d = ci(l)));
  const v = JE(u, o, s) ? tb(u) : Ea(0);
  let g = (f.left + v.x) / d.x,
    b = (f.top + v.y) / d.y,
    y = f.width / d.x,
    h = f.height / d.y;
  if (u && s) {
    const x = Wt(u),
      E = aa(s) ? Wt(s) : s;
    let w = x,
      T = fm(w);
    for (; T && E !== w;) {
      const N = ci(T),
        R = T.getBoundingClientRect(),
        M = la(T),
        _ = R.left + (T.clientLeft + parseFloat(M.paddingLeft)) * N.x,
        j = R.top + (T.clientTop + parseFloat(M.paddingTop)) * N.y;
      ((g *= N.x),
        (b *= N.y),
        (y *= N.x),
        (h *= N.y),
        (g += _),
        (b += j),
        (w = Wt(T)),
        (T = fm(w)));
    }
  }
  return zc({ width: y, height: h, x: g, y: b });
}
function Kc(l, r) {
  const o = Qc(l).scrollLeft;
  return r ? r.left + o : ar(_a(l)).left + o;
}
function nb(l, r) {
  const o = l.getBoundingClientRect(),
    s = o.left + r.scrollLeft - Kc(l, o),
    f = o.top + r.scrollTop;
  return { x: s, y: f };
}
function WE(l) {
  let { elements: r, rect: o, offsetParent: s, strategy: f } = l;
  const u = f === "fixed",
    d = _a(s),
    v = r ? Zc(r.floating) : !1;
  if (s === d || (v && u)) return o;
  let g = { scrollLeft: 0, scrollTop: 0 },
    b = Ea(1);
  const y = Ea(0),
    h = vl(s);
  if ((h || !u) && ((yi(s) !== "body" || Ic(d)) && (g = Qc(s)), h)) {
    const E = ar(s);
    ((b = ci(s)), (y.x = E.x + s.clientLeft), (y.y = E.y + s.clientTop));
  }
  const x = d && !h && !u ? nb(d, g) : Ea(0);
  return {
    width: o.width * b.x,
    height: o.height * b.y,
    x: o.x * b.x - g.scrollLeft * b.x + y.x + x.x,
    y: o.y * b.y - g.scrollTop * b.y + y.y + x.y,
  };
}
function e5(l) {
  return l.getClientRects ? Array.from(l.getClientRects()) : [];
}
function t5(l) {
  const r = Qc(l),
    o = l.ownerDocument.body,
    s = Ca(l.scrollWidth, l.clientWidth, o.scrollWidth, o.clientWidth),
    f = Ca(l.scrollHeight, l.clientHeight, o.scrollHeight, o.clientHeight);
  let u = -r.scrollLeft + Kc(l);
  const d = -r.scrollTop;
  return (
    la(o).direction === "rtl" && (u += Ca(l.clientWidth, o.clientWidth) - s),
    { width: s, height: f, x: u, y: d }
  );
}
const n5 = 25;
function a5(l, r, o) {
  o === void 0 && (o = "viewport");
  const s = o === "layoutViewport",
    f = Wt(l),
    u = _a(l),
    d = f.visualViewport;
  let v = u.clientWidth,
    g = u.clientHeight,
    b = 0,
    y = 0;
  if (d) {
    const x = !Lm() || r === "fixed";
    s
      ? x || ((b = -d.offsetLeft), (y = -d.offsetTop))
      : ((v = d.width),
        (g = d.height),
        x && ((b = d.offsetLeft), (y = d.offsetTop)));
  }
  if (Kc(u) <= 0) {
    const x = u.ownerDocument,
      E = x.body,
      w = getComputedStyle(E),
      T =
        (x.compatMode === "CSS1Compat" &&
          parseFloat(w.marginLeft) + parseFloat(w.marginRight)) ||
        0,
      N = Math.abs(u.clientWidth - E.clientWidth - T),
      R =
        getComputedStyle(u).scrollbarGutter === "stable both-edges" ? N / 2 : N;
    R <= n5 && (v -= R);
  }
  return { width: v, height: g, x: b, y };
}
function l5(l, r) {
  const o = ar(l, !0, r === "fixed"),
    s = o.top + l.clientTop,
    f = o.left + l.clientLeft,
    u = ci(l),
    d = l.clientWidth * u.x,
    v = l.clientHeight * u.y,
    g = f * u.x,
    b = s * u.y;
  return { width: d, height: v, x: g, y: b };
}
function o1(l, r, o) {
  let s;
  if (r === "viewport" || r === "layoutViewport") s = a5(l, o, r);
  else if (r === "document") s = t5(_a(l));
  else if (aa(r)) s = l5(r, o);
  else {
    const f = tb(l);
    s = { x: r.x - f.x, y: r.y - f.y, width: r.width, height: r.height };
  }
  return zc(s);
}
function r5(l, r) {
  const o = r.get(l);
  if (o) return o;
  let s = Oo(l, [], !1).filter((v) => aa(v) && yi(v) !== "body"),
    f = null;
  const u = la(l).position === "fixed";
  let d = u ? nr(l) : l;
  for (; aa(d) && !Ao(d);) {
    const v = la(d),
      g = Hm(d),
      b = f ? f.position : u ? "fixed" : "";
    (!g && (b === "fixed" || (b === "absolute" && v.position === "static"))
      ? (s = s.filter((h) => h !== d))
      : (f = v),
      (d = nr(d)));
  }
  return (r.set(l, s), s);
}
function i5(l) {
  let { element: r, boundary: o, rootBoundary: s, strategy: f } = l;
  const d = [
      ...(o === "clippingAncestors"
        ? Zc(r)
          ? []
          : r5(r, this._c)
        : [].concat(o)),
      s,
    ],
    v = o1(r, d[0], f);
  let g = v.top,
    b = v.right,
    y = v.bottom,
    h = v.left;
  for (let x = 1; x < d.length; x++) {
    const E = o1(r, d[x], f);
    ((g = Ca(E.top, g)),
      (b = fl(E.right, b)),
      (y = fl(E.bottom, y)),
      (h = Ca(E.left, h)));
  }
  return { width: b - h, height: y - g, x: h, y: g };
}
function o5(l) {
  const { width: r, height: o } = eb(l);
  return { width: r, height: o };
}
function s5(l, r, o) {
  const s = vl(r),
    f = _a(r),
    u = o === "fixed",
    d = ar(l, !0, u, r);
  let v = { scrollLeft: 0, scrollTop: 0 };
  const g = Ea(0);
  if ((s || !u) && ((yi(r) !== "body" || Ic(f)) && (v = Qc(r)), s)) {
    const x = ar(r, !0, u, r);
    ((g.x = x.x + r.clientLeft), (g.y = x.y + r.clientTop));
  }
  !s && f && (g.x = Kc(f));
  const b = f && !s && !u ? nb(f, v) : Ea(0),
    y = d.left + v.scrollLeft - g.x - b.x,
    h = d.top + v.scrollTop - g.y - b.y;
  return { x: y, y: h, width: d.width, height: d.height };
}
function Id(l) {
  return la(l).position === "static";
}
function s1(l, r) {
  if (!vl(l) || la(l).position === "fixed") return null;
  if (r) return r(l);
  let o = l.offsetParent;
  return (_a(l) === o && (o = o.ownerDocument.body), o);
}
function ab(l, r) {
  const o = Wt(l);
  if (Zc(l)) return o;
  if (!vl(l)) {
    let f = nr(l);
    for (; f && !Ao(f);) {
      if (aa(f) && !Id(f)) return f;
      f = nr(f);
    }
    return o;
  }
  let s = s1(l, r);
  for (; s && ZE(s) && Id(s);) s = s1(s, r);
  return s && Ao(s) && Id(s) && !Hm(s) ? o : s || $E(l) || o;
}
const c5 = async function (l) {
  const r = this.getOffsetParent || ab,
    o = this.getDimensions,
    s = await o(l.floating);
  return {
    reference: s5(l.reference, await r(l.floating), l.strategy),
    floating: { x: 0, y: 0, width: s.width, height: s.height },
  };
};
function u5(l) {
  return la(l).direction === "rtl";
}
const f5 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: WE,
  getDocumentElement: _a,
  getClippingRect: i5,
  getOffsetParent: ab,
  getElementRects: c5,
  getClientRects: e5,
  getDimensions: o5,
  getScale: ci,
  isElement: aa,
  isRTL: u5,
};
function lb(l, r) {
  return (
    l.x === r.x && l.y === r.y && l.width === r.width && l.height === r.height
  );
}
function d5(l, r, o) {
  let s = null,
    f;
  const u = _a(l);
  function d() {
    var y;
    (clearTimeout(f), (y = s) == null || y.disconnect(), (s = null));
  }
  function v(y, h) {
    (y === void 0 && (y = !1), h === void 0 && (h = 1), d());
    const x = l.getBoundingClientRect(),
      { left: E, top: w, width: T, height: N } = x;
    if ((y || r(), !T || !N)) return;
    const R = Sc(w),
      M = Sc(u.clientWidth - (E + T)),
      _ = Sc(u.clientHeight - (w + N)),
      j = Sc(E),
      P = {
        rootMargin: -R + "px " + -M + "px " + -_ + "px " + -j + "px",
        threshold: Ca(0, fl(1, h)) || 1,
      };
    let U = !0;
    function Q(ie) {
      const W = ie[0].intersectionRatio;
      if (!lb(x, l.getBoundingClientRect())) return v();
      if (W !== h) {
        if (!U) return v();
        W
          ? v(!1, W)
          : (f = setTimeout(() => {
              v(!1, 1e-7);
            }, 1e3));
      }
      U = !1;
    }
    try {
      s = new IntersectionObserver(Q, { ...P, root: u.ownerDocument });
    } catch {
      s = new IntersectionObserver(Q, P);
    }
    s.observe(l);
  }
  const g = Wt(l),
    b = () => v(o);
  return (
    g.addEventListener("resize", b),
    v(!0),
    () => {
      (g.removeEventListener("resize", b), d());
    }
  );
}
function m5(l, r, o, s) {
  s === void 0 && (s = {});
  const {
      ancestorScroll: f = !0,
      ancestorResize: u = !0,
      elementResize: d = typeof ResizeObserver == "function",
      layoutShift: v = typeof IntersectionObserver == "function",
      animationFrame: g = !1,
    } = s,
    b = Bm(l),
    y = f || u ? [...(b ? Oo(b) : []), ...(r ? Oo(r) : [])] : [];
  y.forEach((R) => {
    (f && R.addEventListener("scroll", o),
      u && R.addEventListener("resize", o));
  });
  const h = b && v ? d5(b, o, u) : null;
  let x = -1,
    E = null;
  d &&
    ((E = new ResizeObserver((R) => {
      let [M] = R;
      (M &&
        M.target === b &&
        E &&
        r &&
        (E.unobserve(r),
        cancelAnimationFrame(x),
        (x = requestAnimationFrame(() => {
          var _;
          (_ = E) == null || _.observe(r);
        }))),
        o());
    })),
    b && !g && E.observe(b),
    r && E.observe(r));
  let w,
    T = g ? ar(l) : null;
  g && N();
  function N() {
    const R = ar(l);
    (T && !lb(T, R) && o(), (T = R), (w = requestAnimationFrame(N)));
  }
  return (
    o(),
    () => {
      var R;
      (y.forEach((M) => {
        (f && M.removeEventListener("scroll", o),
          u && M.removeEventListener("resize", o));
      }),
        h?.(),
        (R = E) == null || R.disconnect(),
        (E = null),
        g && cancelAnimationFrame(w));
    }
  );
}
const h5 = qE,
  p5 = GE,
  v5 = PE,
  g5 = IE,
  y5 = YE,
  c1 = VE,
  b5 = XE,
  S5 = (l, r, o) => {
    const s = new Map(),
      f = o ?? {},
      u = { ...f5, ...f.platform, _c: s };
    return UE(l, r, { ...f, platform: u });
  };
var x5 = typeof document < "u",
  C5 = function () {},
  Rc = x5 ? m.useLayoutEffect : C5;
function Hc(l, r) {
  if (l === r) return !0;
  if (typeof l != typeof r) return !1;
  if (typeof l == "function" && l.toString() === r.toString()) return !0;
  let o, s, f;
  if (l && r && typeof l == "object") {
    if (Array.isArray(l)) {
      if (((o = l.length), o !== r.length)) return !1;
      for (s = o; s-- !== 0;) if (!Hc(l[s], r[s])) return !1;
      return !0;
    }
    if (((f = Object.keys(l)), (o = f.length), o !== Object.keys(r).length))
      return !1;
    for (s = o; s-- !== 0;) if (!{}.hasOwnProperty.call(r, f[s])) return !1;
    for (s = o; s-- !== 0;) {
      const u = f[s];
      if (!(u === "_owner" && l.$$typeof) && !Hc(l[u], r[u])) return !1;
    }
    return !0;
  }
  return l !== l && r !== r;
}
function rb(l) {
  return typeof window > "u"
    ? 1
    : (l.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function u1(l, r) {
  const o = rb(l);
  return Math.round(r * o) / o;
}
function Zd(l) {
  const r = m.useRef(l);
  return (
    Rc(() => {
      r.current = l;
    }),
    r
  );
}
function E5(l) {
  l === void 0 && (l = {});
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: f,
      elements: { reference: u, floating: d } = {},
      transform: v = !0,
      whileElementsMounted: g,
      open: b,
    } = l,
    [y, h] = m.useState({
      x: 0,
      y: 0,
      strategy: o,
      placement: r,
      middlewareData: {},
      isPositioned: !1,
    }),
    [x, E] = m.useState(s);
  Hc(x, s) || E(s);
  const [w, T] = m.useState(null),
    [N, R] = m.useState(null),
    M = m.useCallback((K) => {
      K !== P.current && ((P.current = K), T(K));
    }, []),
    _ = m.useCallback((K) => {
      K !== U.current && ((U.current = K), R(K));
    }, []),
    j = u || w,
    G = d || N,
    P = m.useRef(null),
    U = m.useRef(null),
    Q = m.useRef(y),
    ie = g != null,
    W = Zd(g),
    re = Zd(f),
    X = Zd(b),
    oe = m.useCallback(() => {
      if (!P.current || !U.current) return;
      const K = { placement: r, strategy: o, middleware: x };
      (re.current && (K.platform = re.current),
        S5(P.current, U.current, K).then((ae) => {
          const $ = { ...ae, isPositioned: X.current !== !1 };
          fe.current &&
            !Hc(Q.current, $) &&
            ((Q.current = $),
            pi.flushSync(() => {
              h($);
            }));
        }));
    }, [x, r, o, re, X]);
  Rc(() => {
    b === !1 &&
      Q.current.isPositioned &&
      ((Q.current.isPositioned = !1), h((K) => ({ ...K, isPositioned: !1 })));
  }, [b]);
  const fe = m.useRef(!1);
  (Rc(
    () => (
      (fe.current = !0),
      () => {
        fe.current = !1;
      }
    ),
    []
  ),
    Rc(() => {
      if ((j && (P.current = j), G && (U.current = G), j && G)) {
        if (W.current) return W.current(j, G, oe);
        oe();
      }
    }, [j, G, oe, W, ie]));
  const pe = m.useMemo(
      () => ({ reference: P, floating: U, setReference: M, setFloating: _ }),
      [M, _]
    ),
    k = m.useMemo(() => ({ reference: j, floating: G }), [j, G]),
    te = m.useMemo(() => {
      const K = { position: o, left: 0, top: 0 };
      if (!k.floating) return K;
      const ae = u1(k.floating, y.x),
        $ = u1(k.floating, y.y);
      return v
        ? {
            ...K,
            transform: "translate(" + ae + "px, " + $ + "px)",
            ...(rb(k.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: o, left: ae, top: $ };
    }, [o, v, k.floating, y.x, y.y]);
  return m.useMemo(
    () => ({ ...y, update: oe, refs: pe, elements: k, floatingStyles: te }),
    [y, oe, pe, k, te]
  );
}
const w5 = (l) => {
    function r(o) {
      return {}.hasOwnProperty.call(o, "current");
    }
    return {
      name: "arrow",
      options: l,
      fn(o) {
        const { element: s, padding: f } = typeof l == "function" ? l(o) : l;
        return s && r(s)
          ? s.current != null
            ? c1({ element: s.current, padding: f }).fn(o)
            : {}
          : s
            ? c1({ element: s, padding: f }).fn(o)
            : {};
      },
    };
  },
  T5 = (l, r) => {
    const o = h5(l);
    return { name: o.name, fn: o.fn, options: [l, r] };
  },
  N5 = (l, r) => {
    const o = p5(l);
    return { name: o.name, fn: o.fn, options: [l, r] };
  },
  R5 = (l, r) => ({ fn: b5(l).fn, options: [l, r] }),
  A5 = (l, r) => {
    const o = v5(l);
    return { name: o.name, fn: o.fn, options: [l, r] };
  },
  O5 = (l, r) => {
    const o = g5(l);
    return { name: o.name, fn: o.fn, options: [l, r] };
  },
  _5 = (l, r) => {
    const o = y5(l);
    return { name: o.name, fn: o.fn, options: [l, r] };
  },
  D5 = (l, r) => {
    const o = w5(l);
    return { name: o.name, fn: o.fn, options: [l, r] };
  };
var M5 = Object.defineProperty,
  ul = (l, r) => M5(l, "name", { value: r, configurable: !0 }),
  f1 = { Partial: "partial" },
  d1 = { Optimized: "optimized", Always: "always" },
  ib = "Popper",
  [ob, $c] = Un(ib),
  [j5, sb] = ob(ib),
  z5 = ul((l) => {
    const { __scopePopper: r, children: o } = l,
      [s, f] = m.useState(null),
      [u, d] = m.useState(void 0);
    return S.jsx(j5, {
      scope: r,
      anchor: s,
      onAnchorChange: f,
      placementState: u,
      setPlacementState: d,
      children: o,
    });
  }, "Popper"),
  H5 = "PopperAnchor",
  L5 = m.forwardRef(
    ul(function (r, o) {
      const { __scopePopper: s, virtualRef: f, ...u } = r,
        d = sb(H5, s),
        v = m.useRef(null),
        g = d.onAnchorChange,
        b = m.useCallback(
          (T) => {
            ((v.current = T), T && g(T));
          },
          [g]
        ),
        y = Re(o, b),
        h = m.useRef(null);
      m.useEffect(() => {
        if (!f) return;
        const T = h.current;
        ((h.current = f.current), T !== h.current && g(h.current));
      });
      const x = d.placementState && Fc(d.placementState),
        E = x?.[0],
        w = x?.[1];
      return f
        ? null
        : S.jsx(Ae.div, {
            "data-radix-popper-side": E,
            "data-radix-popper-align": w,
            ...u,
            ref: y,
          });
    }, "PopperAnchor")
  ),
  cb = "PopperContent",
  [B5, uT] = ob(cb),
  U5 = m.forwardRef(
    ul(function (r, o) {
      const {
          __scopePopper: s,
          side: f = "bottom",
          sideOffset: u = 0,
          align: d = "center",
          alignOffset: v = 0,
          arrowPadding: g = 0,
          avoidCollisions: b = !0,
          collisionBoundary: y = [],
          collisionPadding: h = 0,
          sticky: x = f1.Partial,
          hideWhenDetached: E = !1,
          updatePositionStrategy: w = d1.Optimized,
          onPlaced: T,
          ...N
        } = r,
        R = sb(cb, s),
        [M, _] = m.useState(null),
        j = Re(o, _),
        [G, P] = m.useState(null),
        U = Gc(G),
        Q = U?.width ?? 0,
        ie = U?.height ?? 0,
        W = f + (d !== "center" ? "-" + d : ""),
        re =
          typeof h == "number"
            ? h
            : { top: 0, right: 0, bottom: 0, left: 0, ...h },
        X = Array.isArray(y) ? y : [y],
        oe = X.length > 0,
        fe = { padding: re, boundary: X.filter(ub), altBoundary: oe },
        {
          refs: pe,
          floatingStyles: k,
          placement: te,
          isPositioned: K,
          middlewareData: ae,
        } = E5({
          strategy: "fixed",
          placement: W,
          whileElementsMounted: ul(
            (...ce) => m5(...ce, { animationFrame: w === d1.Always }),
            "whileElementsMounted"
          ),
          elements: { reference: R.anchor },
          middleware: [
            T5({ mainAxis: u + ie, alignmentAxis: v }),
            b &&
              N5({
                mainAxis: !0,
                crossAxis: !1,
                ...(x === f1.Partial ? { limiter: R5() } : {}),
                ...fe,
              }),
            b && A5({ ...fe }),
            O5({
              ...fe,
              apply: ul(
                ({
                  elements: ce,
                  rects: ee,
                  availableWidth: le,
                  availableHeight: ue,
                }) => {
                  const { width: ye, height: ze } = ee.reference,
                    Le = ce.floating.style;
                  (Le.setProperty("--radix-popper-available-width", `${le}px`),
                    Le.setProperty(
                      "--radix-popper-available-height",
                      `${ue}px`
                    ),
                    Le.setProperty("--radix-popper-anchor-width", `${ye}px`),
                    Le.setProperty("--radix-popper-anchor-height", `${ze}px`));
                },
                "apply"
              ),
            }),
            G && D5({ element: G, padding: g }),
            V5({ arrowWidth: Q, arrowHeight: ie }),
            E &&
              _5(
                oe
                  ? { strategy: "referenceHidden", ...fe }
                  : {
                      strategy: "referenceHidden",
                      padding: fe.padding,
                      altBoundary: fe.altBoundary,
                    }
              ),
          ],
        }),
        $ = R.setPlacementState;
      vt(
        () => (
          $(te),
          () => {
            $(void 0);
          }
        ),
        [te, $]
      );
      const [me, Ce] = Fc(te),
        Ve = zt(T);
      vt(() => {
        K && Ve?.();
      }, [K, Ve]);
      const O = ae.arrow?.x,
        q = ae.arrow?.y,
        F = ae.arrow?.centerOffset !== 0,
        [ne, ge] = m.useState();
      return (
        vt(() => {
          M && ge(window.getComputedStyle(M).zIndex);
        }, [M]),
        S.jsx("div", {
          ref: pe.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...k,
            transform: K ? k.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ne,
            "--radix-popper-transform-origin": [
              ae.transformOrigin?.x,
              ae.transformOrigin?.y,
            ].join(" "),
            ...(ae.hide?.referenceHidden && {
              visibility: "hidden",
              pointerEvents: "none",
            }),
          },
          dir: r.dir,
          children: S.jsx(B5, {
            scope: s,
            placedSide: me,
            placedAlign: Ce,
            onArrowChange: P,
            arrowX: O,
            arrowY: q,
            shouldHideArrow: F,
            children: S.jsx(Ae.div, {
              "data-side": me,
              "data-align": Ce,
              ...N,
              ref: j,
              style: { ...N.style, animation: K ? N.style?.animation : "none" },
            }),
          }),
        })
      );
    }, "PopperContent")
  );
function ub(l) {
  return l !== null;
}
ul(ub, "isNotNull");
var V5 = ul(
  (l) => ({
    name: "transformOrigin",
    options: l,
    fn(r) {
      const { placement: o, rects: s, middlewareData: f } = r,
        d = f.arrow?.centerOffset !== 0,
        v = d ? 0 : l.arrowWidth,
        g = d ? 0 : l.arrowHeight,
        [b, y] = Fc(o),
        h = { start: "0%", center: "50%", end: "100%" }[y],
        x = (f.arrow?.x ?? 0) + v / 2,
        E = (f.arrow?.y ?? 0) + g / 2;
      let w = "",
        T = "";
      return (
        b === "bottom"
          ? ((w = d ? h : `${x}px`), (T = `${-g}px`))
          : b === "top"
            ? ((w = d ? h : `${x}px`), (T = `${s.floating.height + g}px`))
            : b === "right"
              ? ((w = `${-g}px`), (T = d ? h : `${E}px`))
              : b === "left" &&
                ((w = `${s.floating.width + g}px`), (T = d ? h : `${E}px`)),
        { data: { x: w, y: T } }
      );
    },
  }),
  "transformOrigin"
);
function Fc(l) {
  const [r, o = "center"] = l.split("-");
  return [r, o];
}
ul(Fc, "getSideAndAlignFromPlacement");
var P5 = Object.defineProperty,
  Y5 = (l, r) => P5(l, "name", { value: r, configurable: !0 });
function lr(l, [r, o]) {
  return Math.min(o, Math.max(r, l));
}
Y5(lr, "clamp");
var k5 = Object.defineProperty,
  je = (l, r) => k5(l, "name", { value: r, configurable: !0 });
function fb(l, r) {
  return m.useReducer((o, s) => r[o][s] ?? o, l);
}
je(fb, "useStateMachine");
var wo = { Auto: "auto", Always: "always", Scroll: "scroll", Hover: "hover" },
  ui = { Vertical: "vertical", Horizontal: "horizontal" },
  ml = { LTR: "ltr", RTL: "rtl" },
  db = "ScrollArea",
  [mb, fT] = Un(db),
  [q5, Pn] = mb(db),
  G5 = m.forwardRef(
    je(function (r, o) {
      const {
          __scopeScrollArea: s,
          type: f = wo.Hover,
          dir: u,
          scrollHideDelay: d = 600,
          ...v
        } = r,
        [g, b] = m.useState(null),
        [y, h] = m.useState(null),
        [x, E] = m.useState(null),
        [w, T] = m.useState(null),
        [N, R] = m.useState(null),
        [M, _] = m.useState(0),
        [j, G] = m.useState(0),
        [P, U] = m.useState(!1),
        [Q, ie] = m.useState(!1),
        W = Re(o, b),
        re = Pc(u);
      return S.jsx(q5, {
        scope: s,
        type: f,
        dir: re,
        scrollHideDelay: d,
        scrollArea: g,
        viewport: y,
        onViewportChange: h,
        content: x,
        onContentChange: E,
        scrollbarX: w,
        onScrollbarXChange: T,
        scrollbarXEnabled: P,
        onScrollbarXEnabledChange: U,
        scrollbarY: N,
        onScrollbarYChange: R,
        scrollbarYEnabled: Q,
        onScrollbarYEnabledChange: ie,
        onCornerWidthChange: _,
        onCornerHeightChange: G,
        children: S.jsx(Ae.div, {
          dir: re,
          ...v,
          ref: W,
          style: {
            position: "relative",
            "--radix-scroll-area-corner-width": M + "px",
            "--radix-scroll-area-corner-height": j + "px",
            ...r.style,
          },
        }),
      });
    }, "ScrollArea")
  ),
  hb = "ScrollAreaViewport",
  m1 = V1(hb),
  X5 = m.forwardRef(
    je(function (r, o) {
      const {
          __scopeScrollArea: s,
          children: f,
          nonce: u,
          disableImplicitContentElement: d,
          ...v
        } = r,
        g = Pn(hb, s),
        b = m.useRef(null),
        y = Re(o, b, g.onViewportChange),
        h = m.isValidElement(f);
      return S.jsxs(S.Fragment, {
        children: [
          S.jsx(I5, { nonce: u }),
          S.jsx(Ae.div, {
            "data-radix-scroll-area-viewport": "",
            ...v,
            ref: y,
            style: {
              overflowX: g.scrollbarXEnabled ? "scroll" : "hidden",
              overflowY: g.scrollbarYEnabled ? "scroll" : "hidden",
              ...r.style,
            },
            children: d
              ? f
              : h
                ? S.jsx(m1, {
                    child: f,
                    children: (x) =>
                      S.jsx(h1, { __scopeScrollArea: s, children: x }),
                  })
                : S.jsx(m1, {
                    children: S.jsx(h1, { __scopeScrollArea: s, children: f }),
                  }),
          }),
        ],
      });
    }, "ScrollAreaViewport")
  ),
  I5 = m.memo(
    je(function ({ nonce: r }) {
      return S.jsx("style", {
        dangerouslySetInnerHTML: {
          __html:
            "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
        },
        nonce: r,
      });
    }, "ScrollAreaViewportStyle"),
    (l, r) => l.nonce === r.nonce
  ),
  Z5 = "ScrollAreaContent",
  h1 = m.forwardRef(
    je(function (r, o) {
      const { __scopeScrollArea: s, children: f, ...u } = r,
        d = Pn(Z5, s),
        v = Re(o, d.onContentChange);
      return S.jsx(Ae.div, {
        ...u,
        ref: v,
        style: { minWidth: "100%", display: "table", ...r.style },
        children: f,
      });
    }, "ScrollAreaContent")
  ),
  Da = "ScrollAreaScrollbar",
  Q5 = m.forwardRef(
    je(function (r, o) {
      const { forceMount: s, ...f } = r,
        u = Pn(Da, r.__scopeScrollArea),
        { onScrollbarXEnabledChange: d, onScrollbarYEnabledChange: v } = u,
        g = r.orientation === ui.Horizontal;
      return (
        m.useEffect(
          () => (
            g ? d(!0) : v(!0),
            () => {
              g ? d(!1) : v(!1);
            }
          ),
          [g, d, v]
        ),
        u.type === wo.Hover
          ? S.jsx(K5, { ...f, ref: o, forceMount: s })
          : u.type === wo.Scroll
            ? S.jsx($5, { ...f, ref: o, forceMount: s })
            : u.type === wo.Auto
              ? S.jsx(pb, { ...f, ref: o, forceMount: s })
              : u.type === wo.Always
                ? S.jsx(Um, { ...f, ref: o, "data-state": "visible" })
                : null
      );
    }, "ScrollAreaScrollbar")
  ),
  K5 = m.forwardRef(
    je(function (r, o) {
      const { forceMount: s, ...f } = r,
        u = Pn(Da, r.__scopeScrollArea),
        [d, v] = m.useState(!1);
      return (
        m.useEffect(() => {
          const g = u.scrollArea;
          let b = 0;
          if (g) {
            const y = je(() => {
                (window.clearTimeout(b), v(!0));
              }, "handlePointerEnter"),
              h = je(() => {
                b = window.setTimeout(() => v(!1), u.scrollHideDelay);
              }, "handlePointerLeave");
            return (
              g.addEventListener("pointerenter", y),
              g.addEventListener("pointerleave", h),
              () => {
                (window.clearTimeout(b),
                  g.removeEventListener("pointerenter", y),
                  g.removeEventListener("pointerleave", h));
              }
            );
          }
        }, [u.scrollArea, u.scrollHideDelay]),
        S.jsx(pl, {
          present: s || d,
          children: S.jsx(pb, {
            "data-state": d ? "visible" : "hidden",
            ...f,
            ref: o,
          }),
        })
      );
    }, "ScrollAreaScrollbarHover")
  ),
  $5 = m.forwardRef(
    je(function (r, o) {
      const { forceMount: s, ...f } = r,
        u = Pn(Da, r.__scopeScrollArea),
        d = r.orientation === ui.Horizontal,
        v = zo(() => b("SCROLL_END"), 100),
        [g, b] = fb("hidden", {
          hidden: { SCROLL: "scrolling" },
          scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
          interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
          idle: {
            HIDE: "hidden",
            SCROLL: "scrolling",
            POINTER_ENTER: "interacting",
          },
        });
      return (
        m.useEffect(() => {
          if (g === "idle") {
            const y = window.setTimeout(() => b("HIDE"), u.scrollHideDelay);
            return () => window.clearTimeout(y);
          }
        }, [g, u.scrollHideDelay, b]),
        m.useEffect(() => {
          const y = u.viewport,
            h = d ? "scrollLeft" : "scrollTop";
          if (y) {
            let x = y[h];
            const E = je(() => {
              const w = y[h];
              (x !== w && (b("SCROLL"), v()), (x = w));
            }, "handleScroll");
            return (
              y.addEventListener("scroll", E),
              () => y.removeEventListener("scroll", E)
            );
          }
        }, [u.viewport, d, b, v]),
        S.jsx(pl, {
          present: s || g !== "hidden",
          children: S.jsx(Um, {
            "data-state": g === "hidden" ? "hidden" : "visible",
            ...f,
            ref: o,
            onPointerEnter: Te(r.onPointerEnter, () => b("POINTER_ENTER")),
            onPointerLeave: Te(r.onPointerLeave, () => b("POINTER_LEAVE")),
          }),
        })
      );
    }, "ScrollAreaScrollbarScroll")
  ),
  pb = m.forwardRef(
    je(function (r, o) {
      const s = Pn(Da, r.__scopeScrollArea),
        { forceMount: f, ...u } = r,
        [d, v] = m.useState(!1),
        g = r.orientation === ui.Horizontal,
        b = zo(() => {
          if (s.viewport) {
            const y = s.viewport.offsetWidth < s.viewport.scrollWidth,
              h = s.viewport.offsetHeight < s.viewport.scrollHeight;
            v(g ? y : h);
          }
        }, 10);
      return (
        Do(s.viewport, b),
        Do(s.content, b),
        S.jsx(pl, {
          present: f || d,
          children: S.jsx(Um, {
            "data-state": d ? "visible" : "hidden",
            ...u,
            ref: o,
          }),
        })
      );
    }, "ScrollAreaScrollbarAuto")
  ),
  Um = m.forwardRef(
    je(function (r, o) {
      const { orientation: s = ui.Vertical, ...f } = r,
        u = Pn(Da, r.__scopeScrollArea),
        d = m.useRef(null),
        v = m.useRef(0),
        [g, b] = m.useState({
          content: 0,
          viewport: 0,
          scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
        }),
        y = Vm(g.viewport, g.content),
        h = {
          ...f,
          sizes: g,
          onSizesChange: b,
          hasThumb: y > 0 && y < 1,
          onThumbChange: je((E) => (d.current = E), "onThumbChange"),
          onThumbPointerUp: je(() => (v.current = 0), "onThumbPointerUp"),
          onThumbPointerDown: je((E) => (v.current = E), "onThumbPointerDown"),
        };
      function x(E, w) {
        return yb(E, v.current, g, w);
      }
      return (
        je(x, "getScrollPosition"),
        s === ui.Horizontal
          ? S.jsx(F5, {
              ...h,
              ref: o,
              onThumbPositionChange: () => {
                if (u.viewport && d.current) {
                  const E = u.viewport.scrollLeft,
                    w = mm(E, g, u.dir);
                  d.current.style.transform = `translate3d(${w}px, 0, 0)`;
                }
              },
              onWheelScroll: (E) => {
                u.viewport && (u.viewport.scrollLeft = E);
              },
              onDragScroll: (E) => {
                u.viewport && (u.viewport.scrollLeft = x(E, u.dir));
              },
            })
          : s === ui.Vertical
            ? S.jsx(J5, {
                ...h,
                ref: o,
                onThumbPositionChange: () => {
                  if (u.viewport && d.current) {
                    const E = u.viewport.scrollTop,
                      w = mm(E, g);
                    d.current.style.transform = `translate3d(0, ${w}px, 0)`;
                  }
                },
                onWheelScroll: (E) => {
                  u.viewport && (u.viewport.scrollTop = E);
                },
                onDragScroll: (E) => {
                  u.viewport && (u.viewport.scrollTop = x(E));
                },
              })
            : null
      );
    }, "ScrollAreaScrollbarVisible")
  ),
  F5 = m.forwardRef(
    je(function (r, o) {
      const { sizes: s, onSizesChange: f, ...u } = r,
        d = Pn(Da, r.__scopeScrollArea),
        [v, g] = m.useState(),
        b = m.useRef(null),
        y = Re(o, b, d.onScrollbarXChange);
      return (
        m.useEffect(() => {
          b.current && g(getComputedStyle(b.current));
        }, [b]),
        S.jsx(gb, {
          "data-orientation": "horizontal",
          ...u,
          ref: y,
          sizes: s,
          style: {
            bottom: 0,
            left:
              d.dir === ml.RTL ? "var(--radix-scroll-area-corner-width)" : 0,
            right:
              d.dir === ml.LTR ? "var(--radix-scroll-area-corner-width)" : 0,
            "--radix-scroll-area-thumb-width": jo(s) + "px",
            ...r.style,
          },
          onThumbPointerDown: (h) => r.onThumbPointerDown(h.x),
          onDragScroll: (h) => r.onDragScroll(h.x),
          onWheelScroll: (h, x) => {
            if (d.viewport) {
              const E = d.viewport.scrollLeft + h.deltaX;
              (r.onWheelScroll(E), Ym(E, x) && h.preventDefault());
            }
          },
          onResize: () => {
            b.current &&
              d.viewport &&
              v &&
              f({
                content: d.viewport.scrollWidth,
                viewport: d.viewport.offsetWidth,
                scrollbar: {
                  size: b.current.clientWidth,
                  paddingStart: _o(v.paddingLeft),
                  paddingEnd: _o(v.paddingRight),
                },
              });
          },
        })
      );
    }, "ScrollAreaScrollbarX")
  ),
  J5 = m.forwardRef(
    je(function (r, o) {
      const { sizes: s, onSizesChange: f, ...u } = r,
        d = Pn(Da, r.__scopeScrollArea),
        [v, g] = m.useState(),
        b = m.useRef(null),
        y = Re(o, b, d.onScrollbarYChange);
      return (
        m.useEffect(() => {
          b.current && g(getComputedStyle(b.current));
        }, [b]),
        S.jsx(gb, {
          "data-orientation": "vertical",
          ...u,
          ref: y,
          sizes: s,
          style: {
            top: 0,
            right: d.dir === ml.LTR ? 0 : void 0,
            left: d.dir === ml.RTL ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            "--radix-scroll-area-thumb-height": jo(s) + "px",
            ...r.style,
          },
          onThumbPointerDown: (h) => r.onThumbPointerDown(h.y),
          onDragScroll: (h) => r.onDragScroll(h.y),
          onWheelScroll: (h, x) => {
            if (d.viewport) {
              const E = d.viewport.scrollTop + h.deltaY;
              (r.onWheelScroll(E), Ym(E, x) && h.preventDefault());
            }
          },
          onResize: () => {
            b.current &&
              d.viewport &&
              v &&
              f({
                content: d.viewport.scrollHeight,
                viewport: d.viewport.offsetHeight,
                scrollbar: {
                  size: b.current.clientHeight,
                  paddingStart: _o(v.paddingTop),
                  paddingEnd: _o(v.paddingBottom),
                },
              });
          },
        })
      );
    }, "ScrollAreaScrollbarY")
  ),
  [W5, vb] = mb(Da),
  gb = m.forwardRef(
    je(function (r, o) {
      const {
          __scopeScrollArea: s,
          sizes: f,
          hasThumb: u,
          onThumbChange: d,
          onThumbPointerUp: v,
          onThumbPointerDown: g,
          onThumbPositionChange: b,
          onDragScroll: y,
          onWheelScroll: h,
          onResize: x,
          ...E
        } = r,
        w = Pn(Da, s),
        [T, N] = m.useState(null),
        R = Re(o, N),
        M = m.useRef(null),
        _ = m.useRef(""),
        j = w.viewport,
        G = f.content - f.viewport,
        P = zt(h),
        U = zt(b),
        Q = zo(x, 10);
      function ie(W) {
        if (M.current) {
          const re = W.clientX - M.current.left,
            X = W.clientY - M.current.top;
          y({ x: re, y: X });
        }
      }
      return (
        je(ie, "handleDragScroll"),
        m.useEffect(() => {
          const W = je((re) => {
            const X = re.target;
            T?.contains(X) && P(re, G);
          }, "handleWheel");
          return (
            document.addEventListener("wheel", W, { passive: !1 }),
            () => document.removeEventListener("wheel", W, { passive: !1 })
          );
        }, [j, T, G, P]),
        m.useEffect(U, [f, U]),
        Do(T, Q),
        Do(w.content, Q),
        S.jsx(W5, {
          scope: s,
          scrollbar: T,
          hasThumb: u,
          onThumbChange: zt(d),
          onThumbPointerUp: zt(v),
          onThumbPositionChange: U,
          onThumbPointerDown: zt(g),
          children: S.jsx(Ae.div, {
            ...E,
            ref: R,
            style: { position: "absolute", ...E.style },
            onPointerDown: Te(r.onPointerDown, (W) => {
              W.button === 0 &&
                (W.target.setPointerCapture(W.pointerId),
                (M.current = T.getBoundingClientRect()),
                (_.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = "none"),
                w.viewport && (w.viewport.style.scrollBehavior = "auto"),
                ie(W));
            }),
            onPointerMove: Te(r.onPointerMove, ie),
            onPointerUp: Te(r.onPointerUp, (W) => {
              const re = W.target;
              (re.hasPointerCapture(W.pointerId) &&
                re.releasePointerCapture(W.pointerId),
                (document.body.style.webkitUserSelect = _.current),
                w.viewport && (w.viewport.style.scrollBehavior = ""),
                (M.current = null));
            }),
          }),
        })
      );
    }, "ScrollAreaScrollbarImpl")
  ),
  dm = "ScrollAreaThumb",
  e9 = m.forwardRef(
    je(function (r, o) {
      const { forceMount: s, ...f } = r,
        u = vb(dm, r.__scopeScrollArea);
      return S.jsx(pl, {
        present: s || u.hasThumb,
        children: S.jsx(t9, { ref: o, ...f }),
      });
    }, "ScrollAreaThumb")
  ),
  t9 = m.forwardRef(
    je(function (r, o) {
      const { __scopeScrollArea: s, style: f, ...u } = r,
        d = Pn(dm, s),
        v = vb(dm, s),
        { onThumbPositionChange: g } = v,
        b = Re(o, v.onThumbChange),
        y = m.useRef(void 0),
        h = zo(() => {
          y.current && (y.current(), (y.current = void 0));
        }, 100);
      return (
        m.useEffect(() => {
          const x = d.viewport;
          if (x) {
            const E = je(() => {
              if ((h(), !y.current)) {
                const w = n9(x, g);
                ((y.current = w), g());
              }
            }, "handleScroll");
            return (
              g(),
              x.addEventListener("scroll", E),
              () => x.removeEventListener("scroll", E)
            );
          }
        }, [d.viewport, h, g]),
        S.jsx(Ae.div, {
          "data-state": v.hasThumb ? "visible" : "hidden",
          ...u,
          ref: b,
          style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...f,
          },
          onPointerDownCapture: Te(r.onPointerDownCapture, (x) => {
            const w = x.target.getBoundingClientRect(),
              T = x.clientX - w.left,
              N = x.clientY - w.top;
            v.onThumbPointerDown({ x: T, y: N });
          }),
          onPointerUp: Te(r.onPointerUp, v.onThumbPointerUp),
        })
      );
    }, "ScrollAreaThumbImpl")
  );
function _o(l) {
  return l ? parseInt(l, 10) : 0;
}
je(_o, "toInt");
function Vm(l, r) {
  const o = l / r;
  return isNaN(o) ? 0 : o;
}
je(Vm, "getThumbRatio");
function jo(l) {
  const r = Vm(l.viewport, l.content),
    o = l.scrollbar.paddingStart + l.scrollbar.paddingEnd,
    s = (l.scrollbar.size - o) * r;
  return Math.max(s, 18);
}
je(jo, "getThumbSize");
function yb(l, r, o, s = ml.LTR) {
  const f = jo(o),
    u = f / 2,
    d = r || u,
    v = f - d,
    g = o.scrollbar.paddingStart + d,
    b = o.scrollbar.size - o.scrollbar.paddingEnd - v,
    y = o.content - o.viewport,
    h = s === ml.LTR ? [0, y] : [y * -1, 0];
  return Pm([g, b], h)(l);
}
je(yb, "getScrollPositionFromPointer");
function mm(l, r, o = ml.LTR) {
  const s = jo(r),
    f = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
    u = r.scrollbar.size - f,
    d = r.content - r.viewport,
    v = u - s,
    g = o === ml.LTR ? [0, d] : [d * -1, 0],
    b = lr(l, g);
  return Pm([0, d], [0, v])(b);
}
je(mm, "getThumbOffsetFromScroll");
function Pm(l, r) {
  return (o) => {
    if (l[0] === l[1] || r[0] === r[1]) return r[0];
    const s = (r[1] - r[0]) / (l[1] - l[0]);
    return r[0] + s * (o - l[0]);
  };
}
je(Pm, "linearScale");
function Ym(l, r) {
  return l > 0 && l < r;
}
je(Ym, "isScrollingWithinScrollbarBounds");
var n9 = je((l, r = () => {}) => {
  let o = { left: l.scrollLeft, top: l.scrollTop },
    s = 0;
  function f() {
    const u = { left: l.scrollLeft, top: l.scrollTop },
      d = o.left !== u.left,
      v = o.top !== u.top;
    ((d || v) && r(), (o = u), (s = window.requestAnimationFrame(f)));
  }
  return (je(f, "loop"), f(), () => window.cancelAnimationFrame(s));
}, "addUnlinkedScrollListener");
function zo(l, r) {
  const o = zt(l),
    s = m.useRef(0);
  return (
    m.useEffect(() => () => window.clearTimeout(s.current), []),
    m.useCallback(() => {
      (window.clearTimeout(s.current), (s.current = window.setTimeout(o, r)));
    }, [o, r])
  );
}
je(zo, "useDebounceCallback");
function Do(l, r) {
  const o = zt(r);
  vt(() => {
    let s = 0;
    if (l) {
      const f = new ResizeObserver(() => {
        (cancelAnimationFrame(s), (s = window.requestAnimationFrame(o)));
      });
      return (
        f.observe(l),
        () => {
          (window.cancelAnimationFrame(s), f.unobserve(l));
        }
      );
    }
  }, [l, o]);
}
je(Do, "useResizeObserver");
var a9 = Object.defineProperty,
  Ye = (l, r) => a9(l, "name", { value: r, configurable: !0 }),
  p1 = { ItemAligned: "item-aligned", Popper: "popper" },
  l9 = { RTL: "rtl" },
  r9 = [" ", "Enter", "ArrowUp", "ArrowDown"],
  i9 = [" ", "Enter"],
  mi = "Select",
  [Jc, km, o9] = wm(mi),
  [or, dT] = Un(mi, [o9, $c]),
  qm = $c(),
  [s9, gl] = or(mi),
  [c9, u9] = or(mi);
function bb(l) {
  const {
      __scopeSelect: r,
      children: o,
      open: s,
      defaultOpen: f,
      onOpenChange: u,
      value: d,
      defaultValue: v,
      onValueChange: g,
      dir: b,
      name: y,
      autoComplete: h,
      disabled: x,
      required: E,
      form: w,
      internal_do_not_use_render: T,
    } = l,
    N = qm(r),
    [R, M] = m.useState(null),
    [_, j] = m.useState(null),
    [G, P] = m.useState(!1),
    U = Pc(b),
    [Q, ie] = di({ prop: s, defaultProp: f ?? !1, onChange: u, caller: mi }),
    [W, re] = di({ prop: d, defaultProp: v, onChange: g, caller: mi }),
    X = m.useRef(null),
    oe = m.useRef(!1),
    [fe, pe] = m.useState(null),
    k = Ye((F) => {
      (pe({ value: F, hasConsumerStoppedPropagation: oe.current }), re(F));
    }, "handleUserSelect"),
    te = m.useRef(W);
  m.useEffect(() => {
    const F = w ? R?.ownerDocument.getElementById(w) : R?.form;
    if (F instanceof HTMLFormElement) {
      const ne = Ye(() => re(te.current), "reset");
      return (
        F.addEventListener("reset", ne),
        () => F.removeEventListener("reset", ne)
      );
    }
  }, [w, R, re]);
  const K = R ? !!w || !!R.closest("form") : !0,
    [ae, $] = m.useState(new Set()),
    me = Fl(),
    Ce = Array.from(ae)
      .map((F) => F.props.value)
      .join(";"),
    Ve = m.useCallback((F) => {
      $((ne) => new Set(ne).add(F));
    }, []),
    O = m.useCallback((F) => {
      $((ne) => {
        const ge = new Set(ne);
        return (ge.delete(F), ge);
      });
    }, []),
    q = {
      required: E,
      trigger: R,
      onTriggerChange: M,
      valueNode: _,
      onValueNodeChange: j,
      valueNodeHasChildren: G,
      onValueNodeHasChildrenChange: P,
      contentId: me,
      value: W,
      onValueChange: re,
      hasConsumerStoppedPropagationRef: oe,
      userSelection: fe,
      onUserSelect: k,
      open: Q,
      onOpenChange: ie,
      dir: U,
      triggerPointerDownPosRef: X,
      disabled: x,
      name: y,
      autoComplete: h,
      form: w,
      nativeOptions: ae,
      nativeSelectKey: Ce,
      isFormControl: K,
    };
  return S.jsx(z5, {
    ...N,
    children: S.jsx(s9, {
      scope: r,
      ...q,
      children: S.jsx(Jc.Provider, {
        scope: r,
        children: S.jsx(c9, {
          scope: r,
          onNativeOptionAdd: Ve,
          onNativeOptionRemove: O,
          children: Cb(T) ? T(q) : o,
        }),
      }),
    }),
  });
}
Ye(bb, "SelectProvider");
var f9 = Ye((l) => {
    const { __scopeSelect: r, children: o, ...s } = l;
    return S.jsx(bb, {
      __scopeSelect: r,
      ...s,
      internal_do_not_use_render: ({ isFormControl: f }) =>
        S.jsxs(S.Fragment, {
          children: [o, f ? S.jsx(k9, { __scopeSelect: r }) : null],
        }),
    });
  }, "Select"),
  d9 = "SelectTrigger",
  m9 = m.forwardRef(
    Ye(function (r, o) {
      const { __scopeSelect: s, disabled: f = !1, ...u } = r,
        d = qm(s),
        v = gl(d9, s),
        g = v.disabled || f,
        b = Re(o, v.onTriggerChange),
        y = km(s),
        h = m.useRef("touch"),
        [x, E, w] = Gm((N) => {
          const R = y().filter((j) => !j.disabled),
            M = R.find((j) => j.value === v.value),
            _ = Xm(R, N, M);
          _ !== void 0 && v.onUserSelect(_.value);
        }),
        T = Ye((N) => {
          (g || (v.onOpenChange(!0), w()),
            N &&
              (v.triggerPointerDownPosRef.current = {
                x: Math.round(N.pageX),
                y: Math.round(N.pageY),
              }));
        }, "handleOpen");
      return S.jsx(L5, {
        asChild: !0,
        ...d,
        children: S.jsx(Ae.button, {
          type: "button",
          role: "combobox",
          "aria-controls": v.open ? v.contentId : void 0,
          "aria-expanded": v.open,
          "aria-required": v.required,
          "aria-autocomplete": "none",
          dir: v.dir,
          "data-state": v.open ? "open" : "closed",
          disabled: g,
          "data-disabled": g ? "" : void 0,
          "data-placeholder": Ho(v.value) ? "" : void 0,
          ...u,
          ref: b,
          onClick: Te(u.onClick, (N) => {
            (N.currentTarget.focus(), h.current !== "mouse" && T(N));
          }),
          onPointerDown: Te(u.onPointerDown, (N) => {
            h.current = N.pointerType;
            const R = N.target;
            (R.hasPointerCapture(N.pointerId) &&
              R.releasePointerCapture(N.pointerId),
              N.button === 0 &&
                N.ctrlKey === !1 &&
                N.pointerType === "mouse" &&
                (T(N), N.preventDefault()));
          }),
          onKeyDown: Te(u.onKeyDown, (N) => {
            const R = x.current !== "";
            (!(N.ctrlKey || N.altKey || N.metaKey) &&
              N.key.length === 1 &&
              ((v.hasConsumerStoppedPropagationRef.current =
                N.isPropagationStopped()),
              E(N.key)),
              !(R && N.key === " ") &&
                r9.includes(N.key) &&
                (T(), N.preventDefault()));
          }),
        }),
      });
    }, "SelectTrigger")
  ),
  h9 = "SelectValue",
  p9 = m.forwardRef(
    Ye(function (r, o) {
      const {
          __scopeSelect: s,
          className: f,
          style: u,
          children: d,
          placeholder: v = "",
          ...g
        } = r,
        b = gl(h9, s),
        { onValueNodeHasChildrenChange: y } = b,
        h = d !== void 0,
        x = Re(o, b.onValueNodeChange);
      vt(() => {
        y(h);
      }, [y, h]);
      const E = Ho(b.value);
      return S.jsx(Ae.span, {
        ...g,
        asChild: E ? !1 : g.asChild,
        ref: x,
        style: { pointerEvents: "none" },
        children: S.jsx(
          m.Fragment,
          { children: E ? v : d },
          E ? "placeholder" : "value"
        ),
      });
    }, "SelectValue")
  ),
  v9 = m.forwardRef(
    Ye(function (r, o) {
      const { __scopeSelect: s, children: f, ...u } = r;
      return S.jsx(Ae.span, {
        "aria-hidden": !0,
        ...u,
        ref: o,
        children: f || "▼",
      });
    }, "SelectIcon")
  ),
  g9 = "SelectPortal",
  [y9, b9] = or(g9, { forceMount: void 0 }),
  S9 = Ye((l) => {
    const { __scopeSelect: r, forceMount: o, ...s } = l;
    return S.jsx(y9, {
      scope: l.__scopeSelect,
      forceMount: o,
      children: S.jsx(Ny, { asChild: !0, ...s }),
    });
  }, "SelectPortal"),
  rr = "SelectContent",
  x9 = m.forwardRef(
    Ye(function (r, o) {
      const s = b9(rr, r.__scopeSelect),
        { forceMount: f = s.forceMount, ...u } = r,
        d = gl(rr, r.__scopeSelect),
        [v, g] = m.useState();
      return (
        vt(() => {
          g(new DocumentFragment());
        }, []),
        S.jsx(pl, {
          present: f || d.open,
          children: ({ present: b }) =>
            b ? S.jsx(w9, { ...u, ref: o }) : S.jsx(C9, { ...u, fragment: v }),
        })
      );
    }, "SelectContent")
  ),
  C9 = m.forwardRef(
    Ye(function (r, o) {
      const { __scopeSelect: s, children: f, fragment: u } = r;
      return u
        ? pi.createPortal(
            S.jsx(Sb, {
              scope: s,
              children: S.jsx(Jc.Slot, {
                scope: s,
                children: S.jsx("div", { ref: o, children: f }),
              }),
            }),
            u
          )
        : null;
    }, "SelectContentFragment")
  ),
  Bn = 10,
  [Sb, Wc] = or(rr),
  E9 = wa("SelectContent.RemoveScroll"),
  w9 = m.forwardRef(
    Ye(function (r, o) {
      const { __scopeSelect: s } = r,
        {
          position: f = p1.ItemAligned,
          onCloseAutoFocus: u,
          onEscapeKeyDown: d,
          onPointerDownOutside: v,
          side: g,
          sideOffset: b,
          align: y,
          alignOffset: h,
          arrowPadding: x,
          collisionBoundary: E,
          collisionPadding: w,
          sticky: T,
          hideWhenDetached: N,
          avoidCollisions: R,
          ...M
        } = r,
        _ = gl(rr, s),
        [j, G] = m.useState(null),
        [P, U] = m.useState(null),
        Q = Re(o, G),
        [ie, W] = m.useState(null),
        [re, X] = m.useState(null),
        oe = km(s),
        [fe, pe] = m.useState(!1),
        k = m.useRef(!1),
        te = m.useRef(!1),
        K = m.useRef(!1);
      (m.useEffect(() => {
        if (j) return Hy(j);
      }, [j]),
        Yc());
      const ae = m.useCallback(
          (ee) => {
            const [le, ...ue] = oe().map((Le) => Le.ref.current),
              [ye] = ue.slice(-1),
              ze = document.activeElement;
            for (const Le of ee)
              if (
                Le === ze ||
                (Le?.scrollIntoView({ block: "nearest" }),
                Le === le && P && (P.scrollTop = 0),
                Le === ye && P && (P.scrollTop = P.scrollHeight),
                Le?.focus(),
                document.activeElement !== ze)
              )
                return;
          },
          [oe, P]
        ),
        $ = m.useCallback(() => ae([ie, j]), [ae, ie, j]);
      m.useEffect(() => {
        fe && $();
      }, [fe, $]);
      const { onOpenChange: me, triggerPointerDownPosRef: Ce } = _;
      (m.useEffect(() => {
        if (j) {
          let ee = { x: 0, y: 0 };
          const le = Ye((ye) => {
              ee = {
                x: Math.abs(Math.round(ye.pageX) - (Ce.current?.x ?? 0)),
                y: Math.abs(Math.round(ye.pageY) - (Ce.current?.y ?? 0)),
              };
            }, "handlePointerMove"),
            ue = Ye((ye) => {
              (ee.x <= 10 && ee.y <= 10
                ? ye.preventDefault()
                : ye.composedPath().includes(j) || me(!1),
                document.removeEventListener("pointermove", le),
                (Ce.current = null));
            }, "handlePointerUp");
          return (
            Ce.current !== null &&
              (document.addEventListener("pointermove", le),
              document.addEventListener("pointerup", ue, {
                capture: !0,
                once: !0,
              })),
            () => {
              (document.removeEventListener("pointermove", le),
                document.removeEventListener("pointerup", ue, { capture: !0 }));
            }
          );
        }
      }, [j, me, Ce]),
        m.useEffect(() => {
          const ee = Ye(() => me(!1), "close");
          return (
            window.addEventListener("blur", ee),
            window.addEventListener("resize", ee),
            () => {
              (window.removeEventListener("blur", ee),
                window.removeEventListener("resize", ee));
            }
          );
        }, [me]));
      const [Ve, O] = Gm((ee) => {
          const le = oe().filter((ze) => !ze.disabled),
            ue = le.find((ze) => ze.ref.current === document.activeElement),
            ye = Xm(le, ee, ue);
          ye && setTimeout(() => ye.ref.current?.focus());
        }),
        q = m.useCallback(
          (ee, le, ue) => {
            const ye = !te.current;
            ye && (te.current = !0);
            const ze = !k.current && !ue;
            (_.value !== void 0 && _.value === le) || ze
              ? (W(ee), ze && (k.current = !0))
              : ye && W(ee);
          },
          [_.value]
        ),
        F = m.useCallback(() => j?.focus(), [j]),
        ne = m.useCallback(
          (ee, le, ue) => {
            if (!ee) return;
            const ye = !K.current;
            ye && (K.current = !0);
            const ze = !k.current && !ue;
            ((_.value !== void 0 && _.value === le) || ze || ye) && X(ee);
          },
          [_.value]
        ),
        ge = f === p1.Popper ? v1 : T9,
        ce =
          ge === v1
            ? {
                side: g,
                sideOffset: b,
                align: y,
                alignOffset: h,
                arrowPadding: x,
                collisionBoundary: E,
                collisionPadding: w,
                sticky: T,
                hideWhenDetached: N,
                avoidCollisions: R,
              }
            : {};
      return S.jsx(Sb, {
        scope: s,
        content: j,
        viewport: P,
        onViewportChange: U,
        itemRefCallback: q,
        selectedItem: ie,
        onItemLeave: F,
        itemTextRefCallback: ne,
        focusSelectedItem: $,
        selectedItemText: re,
        position: f,
        isPositioned: fe,
        searchRef: Ve,
        children: S.jsx(Om, {
          as: E9,
          allowPinchZoom: !0,
          children: S.jsx(vy, {
            asChild: !0,
            trapped: _.open,
            onMountAutoFocus: (ee) => {
              ee.preventDefault();
            },
            onUnmountAutoFocus: Te(u, (ee) => {
              (_.trigger?.focus({ preventScroll: !0 }), ee.preventDefault());
            }),
            children: S.jsx(dy, {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: d,
              onPointerDownOutside: v,
              onFocusOutside: (ee) => ee.preventDefault(),
              onDismiss: () => _.onOpenChange(!1),
              children: S.jsx(ge, {
                role: "listbox",
                id: _.contentId,
                "data-state": _.open ? "open" : "closed",
                dir: _.dir,
                onContextMenu: (ee) => ee.preventDefault(),
                ...M,
                ...ce,
                onPlaced: () => pe(!0),
                ref: Q,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  outline: "none",
                  ...M.style,
                },
                onKeyDown: Te(M.onKeyDown, (ee) => {
                  const le = ee.ctrlKey || ee.altKey || ee.metaKey;
                  if (
                    (ee.key === "Tab" && ee.preventDefault(),
                    !le && ee.key.length === 1 && O(ee.key),
                    ["ArrowUp", "ArrowDown", "Home", "End"].includes(ee.key))
                  ) {
                    let ye = oe()
                      .filter((ze) => !ze.disabled)
                      .map((ze) => ze.ref.current);
                    if (
                      (["ArrowUp", "End"].includes(ee.key) &&
                        (ye = ye.slice().reverse()),
                      ["ArrowUp", "ArrowDown"].includes(ee.key))
                    ) {
                      const ze = ee.target,
                        Le = ye.indexOf(ze);
                      ye = ye.slice(Le + 1);
                    }
                    (setTimeout(() => ae(ye)), ee.preventDefault());
                  }
                }),
              }),
            }),
          }),
        }),
      });
    }, "SelectContentImpl")
  ),
  T9 = m.forwardRef(
    Ye(function (r, o) {
      const { __scopeSelect: s, onPlaced: f, ...u } = r,
        d = gl(rr, s),
        v = Wc(rr, s),
        [g, b] = m.useState(null),
        [y, h] = m.useState(null),
        x = Re(o, h),
        E = km(s),
        w = m.useRef(!1),
        T = m.useRef(!0),
        {
          viewport: N,
          selectedItem: R,
          selectedItemText: M,
          focusSelectedItem: _,
        } = v,
        j = m.useCallback(() => {
          if (d.trigger && d.valueNode && g && y && N && R && M) {
            const Q = d.trigger.getBoundingClientRect(),
              ie = y.getBoundingClientRect(),
              W = d.valueNode.getBoundingClientRect(),
              re = M.getBoundingClientRect();
            if (d.dir !== l9.RTL) {
              const ue = re.left - ie.left,
                ye = W.left - ue,
                ze = Q.left - ye,
                Le = Q.width + ze,
                Tt = Math.max(Le, ie.width),
                Fe = window.innerWidth - Bn,
                Be = lr(ye, [Bn, Math.max(Bn, Fe - Tt)]);
              ((g.style.minWidth = Le + "px"), (g.style.left = Be + "px"));
            } else {
              const ue = ie.right - re.right,
                ye = window.innerWidth - W.right - ue,
                ze = window.innerWidth - Q.right - ye,
                Le = Q.width + ze,
                Tt = Math.max(Le, ie.width),
                Fe = window.innerWidth - Bn,
                Be = lr(ye, [Bn, Math.max(Bn, Fe - Tt)]);
              ((g.style.minWidth = Le + "px"), (g.style.right = Be + "px"));
            }
            const X = E(),
              oe = window.innerHeight - Bn * 2,
              fe = N.scrollHeight,
              pe = window.getComputedStyle(y),
              k = parseInt(pe.borderTopWidth, 10),
              te = parseInt(pe.paddingTop, 10),
              K = parseInt(pe.borderBottomWidth, 10),
              ae = parseInt(pe.paddingBottom, 10),
              $ = k + te + fe + ae + K,
              me = Math.min(R.offsetHeight * 5, $),
              Ce = window.getComputedStyle(N),
              Ve = parseInt(Ce.paddingTop, 10),
              O = parseInt(Ce.paddingBottom, 10),
              q = Q.top + Q.height / 2 - Bn,
              F = oe - q,
              ne = R.offsetHeight / 2,
              ge = R.offsetTop + ne,
              ce = k + te + ge,
              ee = $ - ce;
            if (ce <= q) {
              const ue = X.length > 0 && R === X[X.length - 1].ref.current;
              g.style.bottom = "0px";
              const ye = y.clientHeight - N.offsetTop - N.offsetHeight,
                ze = Math.max(F, ne + (ue ? O : 0) + ye + K),
                Le = ce + ze;
              g.style.height = Le + "px";
            } else {
              const ue = X.length > 0 && R === X[0].ref.current;
              g.style.top = "0px";
              const ze = Math.max(q, k + N.offsetTop + (ue ? Ve : 0) + ne) + ee;
              ((g.style.height = ze + "px"),
                (N.scrollTop = ce - q + N.offsetTop));
            }
            ((g.style.margin = `${Bn}px 0`),
              (g.style.minHeight = me + "px"),
              (g.style.maxHeight = oe + "px"),
              f?.(),
              requestAnimationFrame(() => (w.current = !0)));
          }
        }, [E, d.trigger, d.valueNode, g, y, N, R, M, d.dir, f]);
      vt(() => j(), [j]);
      const [G, P] = m.useState();
      vt(() => {
        y && P(window.getComputedStyle(y).zIndex);
      }, [y]);
      const U = m.useCallback(
        (Q) => {
          Q && T.current === !0 && (j(), _?.(), (T.current = !1));
        },
        [j, _]
      );
      return S.jsx(N9, {
        scope: s,
        contentWrapper: g,
        shouldExpandOnScrollRef: w,
        onScrollButtonChange: U,
        children: S.jsx("div", {
          ref: b,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: G,
          },
          children: S.jsx(Ae.div, {
            ...u,
            ref: x,
            style: { boxSizing: "border-box", maxHeight: "100%", ...u.style },
          }),
        }),
      });
    }, "SelectItemAlignedPosition")
  ),
  v1 = m.forwardRef(
    Ye(function (r, o) {
      const {
          __scopeSelect: s,
          align: f = "start",
          collisionPadding: u = Bn,
          ...d
        } = r,
        v = qm(s);
      return S.jsx(U5, {
        ...v,
        ...d,
        ref: o,
        align: f,
        collisionPadding: u,
        style: {
          boxSizing: "border-box",
          ...d.style,
          "--radix-select-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-select-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
        },
      });
    }, "SelectPopperPosition")
  ),
  [N9, R9] = or(rr, {}),
  g1 = "SelectViewport",
  A9 = m.forwardRef(
    Ye(function (r, o) {
      const { __scopeSelect: s, nonce: f, ...u } = r,
        d = Wc(g1, s),
        v = R9(g1, s),
        g = Re(o, d.onViewportChange),
        b = m.useRef(0);
      return S.jsxs(S.Fragment, {
        children: [
          S.jsx("style", {
            dangerouslySetInnerHTML: {
              __html:
                "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
            },
            nonce: f,
          }),
          S.jsx(Jc.Slot, {
            scope: s,
            children: S.jsx(Ae.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...u,
              ref: g,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...u.style,
              },
              onScroll: Te(u.onScroll, (y) => {
                const h = y.currentTarget,
                  { contentWrapper: x, shouldExpandOnScrollRef: E } = v;
                if (E?.current && x) {
                  const w = Math.abs(b.current - h.scrollTop);
                  if (w > 0) {
                    const T = window.innerHeight - Bn * 2,
                      N = parseFloat(x.style.minHeight),
                      R = parseFloat(x.style.height),
                      M = Math.max(N, R);
                    if (M < T) {
                      const _ = M + w,
                        j = Math.min(T, _),
                        G = _ - j;
                      ((x.style.height = j + "px"),
                        x.style.bottom === "0px" &&
                          ((h.scrollTop = G > 0 ? G : 0),
                          (x.style.justifyContent = "flex-end")));
                    }
                  }
                }
                b.current = h.scrollTop;
              }),
            }),
          }),
        ],
      });
    }, "SelectViewport")
  ),
  O9 = "SelectGroup",
  [_9, D9] = or(O9),
  M9 = m.forwardRef(
    Ye(function (r, o) {
      const { __scopeSelect: s, ...f } = r,
        u = Fl();
      return S.jsx(_9, {
        scope: s,
        id: u,
        children: S.jsx(Ae.div, {
          role: "group",
          "aria-labelledby": u,
          ...f,
          ref: o,
        }),
      });
    }, "SelectGroup")
  ),
  j9 = "SelectLabel",
  z9 = m.forwardRef(
    Ye(function (r, o) {
      const { __scopeSelect: s, ...f } = r,
        u = D9(j9, s);
      return S.jsx(Ae.div, { id: u.id, ...f, ref: o });
    }, "SelectLabel")
  ),
  hm = "SelectItem",
  [H9, xb] = or(hm),
  L9 = m.forwardRef(
    Ye(function (r, o) {
      const {
          __scopeSelect: s,
          value: f,
          disabled: u = !1,
          textValue: d,
          ...v
        } = r,
        g = gl(hm, s),
        b = Wc(hm, s),
        y = g.value === f,
        [h, x] = m.useState(d ?? ""),
        [E, w] = m.useState(!1),
        T = zt((j) => b.itemRefCallback?.(j, f, u)),
        N = Re(o, T),
        R = Fl(),
        M = m.useRef("touch");
      function _(j) {
        ((g.hasConsumerStoppedPropagationRef.current =
          j.isPropagationStopped()),
          g.onUserSelect(f),
          g.onOpenChange(!1));
      }
      return (
        Ye(_, "handleSelect"),
        S.jsx(H9, {
          scope: s,
          value: f,
          disabled: u,
          textId: R,
          isSelected: y,
          onItemTextChange: m.useCallback((j) => {
            x((G) => G || (j?.textContent ?? "").trim());
          }, []),
          children: S.jsx(Jc.ItemSlot, {
            scope: s,
            value: f,
            disabled: u,
            textValue: h,
            children: S.jsx(Ae.div, {
              role: "option",
              "aria-labelledby": R,
              "data-highlighted": E ? "" : void 0,
              "aria-selected": y && E,
              "data-state": y ? "checked" : "unchecked",
              "aria-disabled": u || void 0,
              "data-disabled": u ? "" : void 0,
              tabIndex: u ? void 0 : -1,
              ...v,
              ref: N,
              onFocus: Te(v.onFocus, () => w(!0)),
              onBlur: Te(v.onBlur, () => w(!1)),
              onClick: Te(v.onClick, (j) => {
                u || (M.current !== "mouse" && _(j));
              }),
              onPointerUp: Te(v.onPointerUp, (j) => {
                u || (M.current === "mouse" && _(j));
              }),
              onPointerDown: Te(v.onPointerDown, (j) => {
                M.current = j.pointerType;
              }),
              onPointerMove: Te(v.onPointerMove, (j) => {
                ((M.current = j.pointerType),
                  u
                    ? b.onItemLeave?.()
                    : M.current === "mouse" &&
                      j.currentTarget.focus({ preventScroll: !0 }));
              }),
              onPointerLeave: Te(v.onPointerLeave, (j) => {
                j.currentTarget === document.activeElement && b.onItemLeave?.();
              }),
              onKeyDown: Te(v.onKeyDown, (j) => {
                u ||
                  j.target !== j.currentTarget ||
                  (b.searchRef?.current !== "" && j.key === " ") ||
                  (i9.includes(j.key) && _(j),
                  j.key === " " && j.preventDefault());
              }),
            }),
          }),
        })
      );
    }, "SelectItem")
  ),
  xc = "SelectItemText",
  B9 = m.forwardRef(
    Ye(function (r, o) {
      const { __scopeSelect: s, className: f, style: u, ...d } = r,
        v = gl(xc, s),
        g = Wc(xc, s),
        b = xb(xc, s),
        y = u9(xc, s),
        [h, x] = m.useState(null),
        E = zt((_) => g.itemTextRefCallback?.(_, b.value, b.disabled)),
        w = Re(o, x, b.onItemTextChange, E),
        T = h?.textContent,
        N = m.useMemo(
          () =>
            S.jsx(
              "option",
              { value: b.value, disabled: b.disabled, children: T },
              b.value
            ),
          [b.disabled, b.value, T]
        ),
        { onNativeOptionAdd: R, onNativeOptionRemove: M } = y;
      return (
        vt(() => (R(N), () => M(N)), [R, M, N]),
        S.jsxs(S.Fragment, {
          children: [
            S.jsx(Ae.span, { id: b.textId, ...d, ref: w }),
            b.isSelected &&
            v.valueNode &&
            !v.valueNodeHasChildren &&
            !Ho(v.value)
              ? pi.createPortal(d.children, v.valueNode)
              : null,
          ],
        })
      );
    }, "SelectItemText")
  ),
  U9 = "SelectItemIndicator",
  V9 = m.forwardRef(
    Ye(function (r, o) {
      const { __scopeSelect: s, ...f } = r;
      return xb(U9, s).isSelected
        ? S.jsx(Ae.span, { "aria-hidden": !0, ...f, ref: o })
        : null;
    }, "SelectItemIndicator")
  ),
  P9 = m.forwardRef(
    Ye(function (r, o) {
      const { __scopeSelect: s, ...f } = r;
      return S.jsx(Ae.div, { "aria-hidden": !0, ...f, ref: o });
    }, "SelectSeparator")
  ),
  Y9 = "SelectBubbleInput",
  k9 = m.forwardRef(
    Ye(function ({ __scopeSelect: r, ...o }, s) {
      const f = gl(Y9, r),
        {
          value: u,
          onValueChange: d,
          required: v,
          disabled: g,
          name: b,
          autoComplete: y,
          form: h,
          userSelection: x,
        } = f,
        { nativeOptions: E, nativeSelectKey: w } = f,
        T = m.useRef(null),
        N = Re(s, T),
        R = u ?? "",
        M = m.useRef(R),
        _ = m.useRef(x),
        j = m.useRef(!1),
        G = Array.from(E).some((P) => (P.props.value ?? "") === "");
      return (
        m.useEffect(() => {
          const P = T.current;
          if (!P) return;
          const U = window.HTMLSelectElement.prototype,
            ie = Object.getOwnPropertyDescriptor(U, "value").set,
            W = x !== null && x !== _.current;
          _.current = x;
          const re = M.current !== R;
          M.current = R;
          const X = W && re;
          if (
            W &&
            !re &&
            x.value !== R &&
            !x.hasConsumerStoppedPropagation &&
            ie
          ) {
            j.current = !0;
            try {
              (ie.call(P, x.value),
                P.dispatchEvent(new Event("change", { bubbles: !0 })));
            } finally {
              ((j.current = !1), ie.call(P, R));
            }
            return;
          }
          const oe = X && !x.hasConsumerStoppedPropagation;
          if (re && ie) {
            const fe = new Event("change", { bubbles: oe });
            (ie.call(P, R), P.dispatchEvent(fe));
          }
        }, [R, x]),
        S.jsxs(
          Ae.select,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: b,
            autoComplete: y,
            disabled: g,
            form: h,
            onChange: (P) => {
              j.current || d(P.target.value);
            },
            ...o,
            style: { ...I1, ...o.style },
            ref: N,
            defaultValue: R,
            children: [
              Ho(u) && !G ? S.jsx("option", { value: "" }) : null,
              Array.from(E),
            ],
          },
          w
        )
      );
    }, "SelectBubbleInput")
  );
function Cb(l) {
  return typeof l == "function";
}
Ye(Cb, "isFunction");
function Ho(l) {
  return l === "" || l === void 0;
}
Ye(Ho, "shouldShowPlaceholder");
function Gm(l) {
  const r = zt(l),
    o = m.useRef(""),
    s = m.useRef(0),
    f = m.useCallback(
      (d) => {
        const v = o.current + d;
        r(v);
        function g(b) {
          ((o.current = b),
            window.clearTimeout(s.current),
            b !== "" && (s.current = window.setTimeout(() => g(""), 1e3)));
        }
        (Ye(g, "updateSearch"), g(v));
      },
      [r]
    ),
    u = m.useCallback(() => {
      ((o.current = ""), window.clearTimeout(s.current));
    }, []);
  return (
    m.useEffect(() => () => window.clearTimeout(s.current), []),
    [o, f, u]
  );
}
Ye(Gm, "useTypeaheadSearch");
function Xm(l, r, o) {
  const f = r.length > 1 && Array.from(r).every((b) => b === r[0]) ? r[0] : r,
    u = o ? l.indexOf(o) : -1;
  let d = Eb(l, Math.max(u, 0));
  f.length === 1 && (d = d.filter((b) => b !== o));
  const g = d.find((b) =>
    b.textValue.toLowerCase().startsWith(f.toLowerCase())
  );
  return g !== o ? g : void 0;
}
Ye(Xm, "findNextItem");
function Eb(l, r) {
  return l.map((o, s) => l[(r + s) % l.length]);
}
Ye(Eb, "wrapArray");
var q9 = Object.defineProperty,
  Ue = (l, r) => q9(l, "name", { value: r, configurable: !0 }),
  y1 = { Horizontal: "horizontal" },
  G9 = { LTR: "ltr" },
  wb = ["PageUp", "PageDown"],
  Tb = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  Nb = {
    "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
    "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
  },
  Lo = "Slider",
  [pm, X9, I9] = wm(Lo),
  [Im, mT] = Un(Lo, [I9]),
  [Z9, bi] = Im(Lo),
  Q9 = m.forwardRef(
    Ue(function (r, o) {
      const {
          name: s,
          min: f = 0,
          max: u = 100,
          step: d = 1,
          orientation: v = y1.Horizontal,
          disabled: g = !1,
          minStepsBetweenThumbs: b = 0,
          preserveThumbOrder: y = !1,
          defaultValue: h = [f],
          value: x,
          onValueChange: E = Ue(() => {}, "onValueChange"),
          onValueCommit: w = Ue(() => {}, "onValueCommit"),
          inverted: T = !1,
          form: N,
          ...R
        } = r,
        M = m.useRef(new Set()),
        _ = m.useRef(0),
        j = m.useRef(!1),
        [G, P] = m.useState(null),
        Q = v === y1.Horizontal ? K9 : $9,
        [ie, W] = m.useState(null),
        re = Re(o, W),
        [X = [], oe] = di({
          prop: x,
          defaultProp: h,
          onChange: Ue(($) => {
            ([...M.current][_.current]?.focus({
              preventScroll: !0,
              focusVisible: j.current,
            }),
              (j.current = !1),
              E($));
          }, "onChange"),
        }),
        fe = m.useRef(X),
        pe = m.useRef(X);
      m.useEffect(() => {
        const $ = N ? ie?.ownerDocument.getElementById(N) : ie?.closest("form");
        if ($ instanceof HTMLFormElement) {
          const me = Ue(() => oe(pe.current), "reset");
          return (
            $.addEventListener("reset", me),
            () => $.removeEventListener("reset", me)
          );
        }
      }, [ie, N, oe]);
      function k($) {
        const me = zb(X, $);
        ae($, me);
      }
      Ue(k, "handleSlideStart");
      function te($) {
        ae($, _.current);
      }
      Ue(te, "handleSlideMove");
      function K() {
        String(X) !== String(fe.current) && w(X);
      }
      Ue(K, "handleSlideEnd");
      function ae($, me, { commit: Ce } = { commit: !1 }) {
        const Ve = Qm(d),
          O = To(Math.round(($ - f) / d) * d + f, Ve),
          q = lr(O, [f, u]),
          F = b * d;
        function ne(ce) {
          const ee = y
              ? lr(q, [
                  ce[me - 1] === void 0 ? f : ce[me - 1] + F,
                  ce[me + 1] === void 0 ? u : ce[me + 1] - F,
                ])
              : q,
            le = Mb(ce, ee, me);
          return Bb(le, F)
            ? {
                nextValues: le,
                changedIndex: y ? me : le.indexOf(ee),
                hasChanged: String(le) !== String(ce),
              }
            : null;
        }
        Ue(ne, "getNextValues");
        const ge = ne(X);
        (ge?.hasChanged && P(ge.nextValues),
          oe((ce = []) => {
            const ee = ne(ce);
            return ee
              ? ((_.current = ee.changedIndex),
                ee.hasChanged && Ce && w(ee.nextValues),
                ee.hasChanged ? ee.nextValues : ce)
              : ce;
          }));
      }
      return (
        Ue(ae, "updateValues"),
        S.jsx(Z9, {
          scope: r.__scopeSlider,
          name: s,
          disabled: g,
          min: f,
          max: u,
          valueIndexToChangeRef: _,
          thumbs: M.current,
          values: X,
          orientation: v,
          form: N,
          userRequestedValues: G,
          children: S.jsx(pm.Provider, {
            scope: r.__scopeSlider,
            children: S.jsx(pm.Slot, {
              scope: r.__scopeSlider,
              children: S.jsx(Q, {
                "aria-disabled": g,
                "data-disabled": g ? "" : void 0,
                ...R,
                ref: re,
                onPointerDown: Te(R.onPointerDown, () => {
                  g || ((fe.current = X), (j.current = !1));
                }),
                min: f,
                max: u,
                inverted: T,
                onSlideStart: g ? void 0 : k,
                onSlideMove: g ? void 0 : te,
                onSlideEnd: g ? void 0 : K,
                onHomeKeyDown: () => {
                  g || ((j.current = !0), ae(f, 0, { commit: !0 }));
                },
                onEndKeyDown: () => {
                  g || ((j.current = !0), ae(u, X.length - 1, { commit: !0 }));
                },
                onStepKeyDown: ({ event: $, direction: me }) => {
                  if (!g) {
                    j.current = !0;
                    const O =
                        wb.includes($.key) || ($.shiftKey && Tb.includes($.key))
                          ? 10
                          : 1,
                      q = _.current,
                      F = X[q],
                      ne = Ub(F, {
                        min: f,
                        step: d,
                        direction: me,
                        multiplier: O,
                      });
                    ae(ne, q, { commit: !0 });
                  }
                },
              }),
            }),
          }),
        })
      );
    }, "Slider")
  ),
  [Rb, Ab] = Im(Lo, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1,
  }),
  K9 = m.forwardRef(
    Ue(function (r, o) {
      const {
          min: s,
          max: f,
          dir: u,
          inverted: d,
          onSlideStart: v,
          onSlideMove: g,
          onSlideEnd: b,
          onStepKeyDown: y,
          ...h
        } = r,
        [x, E] = m.useState(null),
        w = Re(o, E),
        T = m.useRef(void 0),
        N = Pc(u),
        R = N === G9.LTR,
        M = (R && !d) || (!R && d);
      function _(j) {
        const G = T.current || x.getBoundingClientRect(),
          P = [0, G.width],
          Q = eu(P, M ? [s, f] : [f, s]);
        return ((T.current = G), Q(j - G.left));
      }
      return (
        Ue(_, "getValueFromPointer"),
        S.jsx(Rb, {
          scope: r.__scopeSlider,
          startEdge: M ? "left" : "right",
          endEdge: M ? "right" : "left",
          direction: M ? 1 : -1,
          size: "width",
          children: S.jsx(Ob, {
            dir: N,
            "data-orientation": "horizontal",
            ...h,
            ref: w,
            style: {
              ...h.style,
              "--radix-slider-thumb-transform": "translateX(-50%)",
            },
            onSlideStart: (j) => {
              const G = _(j.clientX);
              v?.(G);
            },
            onSlideMove: (j) => {
              const G = _(j.clientX);
              g?.(G);
            },
            onSlideEnd: () => {
              ((T.current = void 0), b?.());
            },
            onStepKeyDown: (j) => {
              const P = Nb[M ? "from-left" : "from-right"].includes(j.key);
              y?.({ event: j, direction: P ? -1 : 1 });
            },
          }),
        })
      );
    }, "SliderHorizontal")
  ),
  $9 = m.forwardRef(
    Ue(function (r, o) {
      const {
          min: s,
          max: f,
          inverted: u,
          onSlideStart: d,
          onSlideMove: v,
          onSlideEnd: g,
          onStepKeyDown: b,
          ...y
        } = r,
        h = m.useRef(null),
        x = Re(o, h),
        E = m.useRef(void 0),
        w = !u;
      function T(N) {
        const R = E.current || h.current.getBoundingClientRect(),
          M = [0, R.height],
          j = eu(M, w ? [f, s] : [s, f]);
        return ((E.current = R), j(N - R.top));
      }
      return (
        Ue(T, "getValueFromPointer"),
        S.jsx(Rb, {
          scope: r.__scopeSlider,
          startEdge: w ? "bottom" : "top",
          endEdge: w ? "top" : "bottom",
          size: "height",
          direction: w ? 1 : -1,
          children: S.jsx(Ob, {
            "data-orientation": "vertical",
            ...y,
            ref: x,
            style: {
              ...y.style,
              "--radix-slider-thumb-transform": "translateY(50%)",
            },
            onSlideStart: (N) => {
              const R = T(N.clientY);
              d?.(R);
            },
            onSlideMove: (N) => {
              const R = T(N.clientY);
              v?.(R);
            },
            onSlideEnd: () => {
              ((E.current = void 0), g?.());
            },
            onStepKeyDown: (N) => {
              const M = Nb[w ? "from-bottom" : "from-top"].includes(N.key);
              b?.({ event: N, direction: M ? -1 : 1 });
            },
          }),
        })
      );
    }, "SliderVertical")
  ),
  Ob = m.forwardRef(
    Ue(function (r, o) {
      const {
          __scopeSlider: s,
          onSlideStart: f,
          onSlideMove: u,
          onSlideEnd: d,
          onHomeKeyDown: v,
          onEndKeyDown: g,
          onStepKeyDown: b,
          ...y
        } = r,
        h = bi(Lo, s);
      return S.jsx(Ae.span, {
        ...y,
        ref: o,
        onKeyDown: Te(r.onKeyDown, (x) => {
          x.key === "Home"
            ? (v(x), x.preventDefault())
            : x.key === "End"
              ? (g(x), x.preventDefault())
              : wb.concat(Tb).includes(x.key) && (b(x), x.preventDefault());
        }),
        onPointerDown: Te(r.onPointerDown, (x) => {
          const E = x.target;
          (E.setPointerCapture(x.pointerId),
            x.preventDefault(),
            h.thumbs.has(E)
              ? E.focus({ preventScroll: !0, focusVisible: !1 })
              : f(x));
        }),
        onPointerMove: Te(r.onPointerMove, (x) => {
          x.target.hasPointerCapture(x.pointerId) && u(x);
        }),
        onPointerUp: Te(r.onPointerUp, (x) => {
          const E = x.target;
          E.hasPointerCapture(x.pointerId) &&
            (E.releasePointerCapture(x.pointerId), d(x));
        }),
      });
    }, "SliderImpl")
  ),
  F9 = "SliderTrack",
  J9 = m.forwardRef(
    Ue(function (r, o) {
      const { __scopeSlider: s, ...f } = r,
        u = bi(F9, s);
      return S.jsx(Ae.span, {
        "data-disabled": u.disabled ? "" : void 0,
        "data-orientation": u.orientation,
        ...f,
        ref: o,
      });
    }, "SliderTrack")
  ),
  b1 = "SliderRange",
  W9 = m.forwardRef(
    Ue(function (r, o) {
      const { __scopeSlider: s, ...f } = r,
        u = bi(b1, s),
        d = Ab(b1, s),
        v = m.useRef(null),
        g = Re(o, v),
        b = u.values.length,
        y = u.values.map((E) => Zm(E, u.min, u.max)),
        h = b > 1 ? Math.min(...y) : 0,
        x = 100 - Math.max(...y);
      return S.jsx(Ae.span, {
        "data-orientation": u.orientation,
        "data-disabled": u.disabled ? "" : void 0,
        ...f,
        ref: g,
        style: { ...r.style, [d.startEdge]: h + "%", [d.endEdge]: x + "%" },
      });
    }, "SliderRange")
  ),
  e8 = "SliderThumb",
  [t8, _b] = Im(e8),
  n8 = "SliderThumbProvider";
function Db(l) {
  const {
      __scopeSlider: r,
      name: o,
      children: s,
      internal_do_not_use_render: f,
    } = l,
    u = bi(n8, r),
    d = X9(r),
    [v, g] = m.useState(null),
    b = m.useMemo(
      () => (v ? d().findIndex((N) => N.ref.current === v) : -1),
      [d, v]
    ),
    y = Gc(v),
    h = v ? !!u.form || !!v.closest("form") : !0,
    x = u.values[b],
    E = o ?? (u.name ? u.name + (u.values.length > 1 ? "[]" : "") : void 0),
    w = x === void 0 ? 0 : Zm(x, u.min, u.max);
  m.useEffect(() => {
    if (v)
      return (
        u.thumbs.add(v),
        () => {
          u.thumbs.delete(v);
        }
      );
  }, [v, u.thumbs]);
  const T = {
    value: x,
    name: E,
    form: u.form,
    isFormControl: h,
    index: b,
    thumb: v,
    onThumbChange: g,
    percent: w,
    size: y,
  };
  return S.jsx(t8, { scope: r, ...T, children: Vb(f) ? f(T) : s });
}
Ue(Db, "SliderThumbProvider");
var Qd = "SliderThumbTrigger",
  a8 = m.forwardRef(
    Ue(function (r, o) {
      const { __scopeSlider: s, ...f } = r,
        u = bi(Qd, s),
        d = Ab(Qd, s),
        {
          index: v,
          value: g,
          percent: b,
          size: y,
          onThumbChange: h,
        } = _b(Qd, s),
        x = Re(o, h),
        E = jb(v, u.values.length),
        w = y?.[d.size],
        T = w ? Hb(w, b, d.direction) : 0;
      return S.jsx("span", {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [d.startEdge]: `calc(${b}% + ${T}px)`,
        },
        children: S.jsx(pm.ItemSlot, {
          scope: s,
          children: S.jsx(Ae.span, {
            role: "slider",
            "aria-label": r["aria-label"] || E,
            "aria-valuemin": u.min,
            "aria-valuenow": g,
            "aria-valuemax": u.max,
            "aria-orientation": u.orientation,
            "data-orientation": u.orientation,
            "data-disabled": u.disabled ? "" : void 0,
            tabIndex: u.disabled ? void 0 : 0,
            ...f,
            ref: x,
            style: g === void 0 ? { display: "none" } : r.style,
            onFocus: Te(r.onFocus, () => {
              u.valueIndexToChangeRef.current = v;
            }),
          }),
        }),
      });
    }, "SliderThumbTrigger")
  ),
  l8 = m.forwardRef(
    Ue(function (r, o) {
      const { __scopeSlider: s, name: f, ...u } = r;
      return S.jsx(Db, {
        __scopeSlider: s,
        name: f,
        internal_do_not_use_render: ({ index: d, isFormControl: v }) =>
          S.jsxs(S.Fragment, {
            children: [
              S.jsx(a8, { ...u, ref: o, __scopeSlider: s }),
              v ? S.jsx(r8, { __scopeSlider: s }, d) : null,
            ],
          }),
      });
    }, "SliderThumb")
  ),
  S1 = "SliderBubbleInput",
  r8 = m.forwardRef(
    Ue(function ({ __scopeSlider: r, onInput: o, ...s }, f) {
      const { index: u, value: d, name: v, form: g } = _b(S1, r),
        { userRequestedValues: b } = bi(S1, r),
        y = m.useRef(null),
        h = Re(y, f),
        x = m.useRef(!1),
        E = m.useRef(d),
        w = m.useRef(b),
        T = m.useRef(b);
      return (
        m.useEffect(() => {
          const N = y.current;
          if (!N) return;
          const R = window.HTMLInputElement.prototype,
            _ = Object.getOwnPropertyDescriptor(R, "value").set,
            j = E.current,
            G = j !== d;
          E.current = d;
          const P = b !== T.current;
          if (((T.current = b), G && _)) {
            const U = b !== w.current;
            w.current = b;
            const Q = b?.[u],
              ie = U && ((P && Q !== j) || Q === d);
            x.current = !ie;
            const W = new Event("input", { bubbles: !0 });
            (_.call(N, d), N.dispatchEvent(W), (x.current = !1));
          }
        }, [u, d, b]),
        S.jsx(Ae.input, {
          style: { display: "none" },
          name: v,
          form: g,
          ...s,
          ref: h,
          defaultValue: d,
          onInput: Te(o, (N) => {
            x.current && N.stopPropagation();
          }),
        })
      );
    }, "SliderBubbleInput")
  );
function Mb(l = [], r, o) {
  const s = [...l];
  return ((s[o] = r), s.sort((f, u) => f - u));
}
Ue(Mb, "getNextSortedValues");
function Zm(l, r, o) {
  const u = (100 / (o - r)) * (l - r);
  return lr(u, [0, 100]);
}
Ue(Zm, "convertValueToPercentage");
function jb(l, r) {
  return r > 2
    ? `Value ${l + 1} of ${r}`
    : r === 2
      ? ["Minimum", "Maximum"][l]
      : void 0;
}
Ue(jb, "getLabel");
function zb(l, r) {
  if (l.length === 1) return 0;
  const o = l.map((f) => Math.abs(f - r)),
    s = Math.min(...o);
  return o.indexOf(s);
}
Ue(zb, "getClosestValueIndex");
function Hb(l, r, o) {
  const s = l / 2,
    u = eu([0, 50], [0, s]);
  return (s - u(r) * o) * o;
}
Ue(Hb, "getThumbInBoundsOffset");
function Lb(l) {
  return l.slice(0, -1).map((r, o) => l[o + 1] - r);
}
Ue(Lb, "getStepsBetweenValues");
function Bb(l, r) {
  if (r > 0) {
    const o = Lb(l);
    return Math.min(...o) >= r;
  }
  return !0;
}
Ue(Bb, "hasMinStepsBetweenValues");
function eu(l, r) {
  return (o) => {
    if (l[0] === l[1] || r[0] === r[1]) return r[0];
    const s = (r[1] - r[0]) / (l[1] - l[0]);
    return r[0] + s * (o - l[0]);
  };
}
Ue(eu, "linearScale");
function Qm(l) {
  if (!Number.isFinite(l)) return 0;
  const r = l.toString();
  if (r.includes("e")) {
    const [s, f] = r.split("e"),
      u = s.split(".")[1] || "",
      d = Number(f);
    return Math.max(0, u.length - d);
  }
  const o = r.split(".")[1];
  return o ? o.length : 0;
}
Ue(Qm, "getDecimalCount");
function To(l, r) {
  const o = Math.pow(10, r);
  return Math.round(l * o) / o;
}
Ue(To, "roundValue");
function Ub(l, { min: r, step: o, direction: s, multiplier: f }) {
  const u = Qm(o),
    d = (l - r) / o,
    v = Math.round(d),
    g = To(v * o + r, u) === To(l, u);
  let b;
  return (
    g ? (b = v + f * s) : s > 0 ? (b = Math.ceil(d)) : (b = Math.floor(d)),
    To(b * o + r, u)
  );
}
Ue(Ub, "getNextStepValue");
function Vb(l) {
  return typeof l == "function";
}
Ue(Vb, "isFunction");
var i8 = Object.defineProperty,
  hl = (l, r) => i8(l, "name", { value: r, configurable: !0 }),
  Km = "Switch",
  [o8, hT] = Un(Km),
  [s8, $m] = o8(Km);
function Pb(l) {
  const {
      __scopeSwitch: r,
      checked: o,
      children: s,
      defaultChecked: f,
      disabled: u,
      form: d,
      name: v,
      onCheckedChange: g,
      required: b,
      value: y = "on",
      internal_do_not_use_render: h,
    } = l,
    [x, E] = di({ prop: o, defaultProp: f ?? !1, onChange: g, caller: Km }),
    [w, T] = m.useState(null),
    [N, R] = m.useState(null),
    [M, _] = m.useState(null),
    j = w ? !!d || !!w.closest("form") : !0,
    G = {
      checked: x,
      setChecked: E,
      disabled: u,
      control: w,
      setControl: T,
      name: v,
      form: d,
      value: y,
      userClick: M,
      onUserClick: _,
      required: b,
      defaultChecked: f,
      isFormControl: j,
      bubbleInput: N,
      setBubbleInput: R,
    };
  return S.jsx(s8, { scope: r, ...G, children: Yb(h) ? h(G) : s });
}
hl(Pb, "SwitchProvider");
var c8 = "SwitchTrigger",
  u8 = m.forwardRef(
    hl(function ({ __scopeSwitch: r, onClick: o, ...s }, f) {
      const {
          control: u,
          form: d,
          value: v,
          disabled: g,
          checked: b,
          required: y,
          setControl: h,
          setChecked: x,
          onUserClick: E,
          isFormControl: w,
          bubbleInput: T,
        } = $m(c8, r),
        N = Re(f, h),
        R = m.useRef(b);
      return (
        m.useEffect(() => {
          const M = d ? u?.ownerDocument.getElementById(d) : u?.form;
          if (M instanceof HTMLFormElement) {
            const _ = hl(() => x(R.current), "reset");
            return (
              M.addEventListener("reset", _),
              () => M.removeEventListener("reset", _)
            );
          }
        }, [u, d, x]),
        S.jsx(Ae.button, {
          type: "button",
          role: "switch",
          "aria-checked": b,
          "aria-required": y,
          "data-state": Fm(b),
          "data-disabled": g ? "" : void 0,
          disabled: g,
          value: v,
          ...s,
          ref: N,
          onClick: Te(o, (M) => {
            const _ = M.isPropagationStopped();
            (E({ requestedChecked: !b, hasConsumerStoppedPropagation: _ }),
              x((j) => !j),
              T && w && (_ || M.stopPropagation()));
          }),
        })
      );
    }, "SwitchTrigger")
  ),
  f8 = m.forwardRef(
    hl(function (r, o) {
      const {
        __scopeSwitch: s,
        name: f,
        checked: u,
        defaultChecked: d,
        required: v,
        disabled: g,
        value: b,
        onCheckedChange: y,
        form: h,
        ...x
      } = r;
      return S.jsx(Pb, {
        __scopeSwitch: s,
        checked: u,
        defaultChecked: d,
        disabled: g,
        required: v,
        onCheckedChange: y,
        name: f,
        form: h,
        value: b,
        internal_do_not_use_render: ({ isFormControl: E }) =>
          S.jsxs(S.Fragment, {
            children: [
              S.jsx(u8, { ...x, ref: o, __scopeSwitch: s }),
              E && S.jsx(p8, { __scopeSwitch: s }),
            ],
          }),
      });
    }, "Switch")
  ),
  d8 = "SwitchThumb",
  m8 = m.forwardRef(
    hl(function (r, o) {
      const { __scopeSwitch: s, ...f } = r,
        u = $m(d8, s);
      return S.jsx(Ae.span, {
        "data-state": Fm(u.checked),
        "data-disabled": u.disabled ? "" : void 0,
        ...f,
        ref: o,
      });
    }, "SwitchThumb")
  ),
  h8 = "SwitchBubbleInput",
  p8 = m.forwardRef(
    hl(function ({ __scopeSwitch: r, onClick: o, ...s }, f) {
      const {
          control: u,
          userClick: d,
          checked: v,
          defaultChecked: g,
          required: b,
          disabled: y,
          name: h,
          value: x,
          form: E,
          bubbleInput: w,
          setBubbleInput: T,
        } = $m(h8, r),
        N = Re(f, T),
        R = Gc(u),
        M = m.useRef(!1),
        _ = m.useRef(v),
        j = m.useRef(d),
        G = m.useRef(null);
      m.useEffect(() => {
        const U = w;
        if (!U) return;
        const Q = window.HTMLInputElement.prototype,
          W = Object.getOwnPropertyDescriptor(Q, "checked").set;
        if (!W) return;
        const re = _.current !== v;
        _.current = v;
        const X = d !== null && d !== j.current;
        if (((j.current = d), X))
          ((G.current = re ? null : d),
            re && W.call(U, v),
            U.dispatchEvent(
              new Event("click", { bubbles: !d.hasConsumerStoppedPropagation })
            ));
        else if (re) {
          const oe = G.current;
          G.current = null;
          const fe = oe?.requestedChecked === v;
          ((M.current = !0),
            W.call(U, v),
            U.dispatchEvent(
              new Event("click", {
                bubbles: !(fe && oe.hasConsumerStoppedPropagation),
              })
            ),
            (M.current = !1));
        }
      }, [w, v, d]);
      const P = m.useRef(v);
      return S.jsx(Ae.input, {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: g ?? P.current,
        required: b,
        disabled: y,
        name: h,
        value: x,
        form: E,
        ...s,
        tabIndex: -1,
        ref: N,
        onClick: Te(o, (U) => {
          M.current && U.stopPropagation();
        }),
        style: {
          ...s.style,
          ...R,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          transform: "translateX(-100%)",
        },
      });
    }, "SwitchBubbleInput")
  );
function Yb(l) {
  return typeof l == "function";
}
hl(Yb, "isFunction");
function Fm(l) {
  return l ? "checked" : "unchecked";
}
hl(Fm, "getState");
var v8 = Object.defineProperty,
  yl = (l, r) => v8(l, "name", { value: r, configurable: !0 }),
  [Jm, pT] = Un("Tooltip", [$c]);
$c();
var g8 = "TooltipProvider",
  y8 = 700,
  [b8, vT] = Jm(g8),
  S8 = yl((l) => {
    const {
        __scopeTooltip: r,
        delayDuration: o = y8,
        skipDelayDuration: s = 300,
        disableHoverableContent: f = !1,
        children: u,
      } = l,
      d = m.useRef(!0),
      v = m.useRef(!1),
      g = m.useRef(0);
    return (
      m.useEffect(() => {
        const b = g.current;
        return () => window.clearTimeout(b);
      }, []),
      S.jsx(b8, {
        scope: r,
        isOpenDelayedRef: d,
        delayDuration: o,
        onOpen: m.useCallback(() => {
          s <= 0 || (window.clearTimeout(g.current), (d.current = !1));
        }, [s]),
        onClose: m.useCallback(() => {
          s <= 0 ||
            (window.clearTimeout(g.current),
            (g.current = window.setTimeout(() => (d.current = !0), s)));
        }, [s]),
        isPointerInTransitRef: v,
        onPointerInTransitChange: m.useCallback((b) => {
          v.current = b;
        }, []),
        disableHoverableContent: f,
        children: u,
      })
    );
  }, "TooltipProvider"),
  x8 = "Tooltip",
  [gT, yT] = Jm(x8),
  C8 = "TooltipPortal",
  [bT, ST] = Jm(C8, { forceMount: void 0 });
function E8(l, r) {
  const o = Math.abs(r.top - l.y),
    s = Math.abs(r.bottom - l.y),
    f = Math.abs(r.right - l.x),
    u = Math.abs(r.left - l.x);
  switch (Math.min(o, s, f, u)) {
    case u:
      return "left";
    case f:
      return "right";
    case o:
      return "top";
    case s:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
yl(E8, "getExitSideFromRect");
function w8(l, r, o = 5) {
  const s = [];
  switch (r) {
    case "top":
      s.push({ x: l.x - o, y: l.y + o }, { x: l.x + o, y: l.y + o });
      break;
    case "bottom":
      s.push({ x: l.x - o, y: l.y - o }, { x: l.x + o, y: l.y - o });
      break;
    case "left":
      s.push({ x: l.x + o, y: l.y - o }, { x: l.x + o, y: l.y + o });
      break;
    case "right":
      s.push({ x: l.x - o, y: l.y - o }, { x: l.x - o, y: l.y + o });
      break;
  }
  return s;
}
yl(w8, "getPaddedExitPoints");
function T8(l) {
  const { top: r, right: o, bottom: s, left: f } = l;
  return [
    { x: f, y: r },
    { x: o, y: r },
    { x: o, y: s },
    { x: f, y: s },
  ];
}
yl(T8, "getPointsFromRect");
function N8(l, r) {
  const { x: o, y: s } = l;
  let f = !1;
  for (let u = 0, d = r.length - 1; u < r.length; d = u++) {
    const v = r[u],
      g = r[d],
      b = v.x,
      y = v.y,
      h = g.x,
      x = g.y;
    y > s != x > s && o < ((h - b) * (s - y)) / (x - y) + b && (f = !f);
  }
  return f;
}
yl(N8, "isPointInPolygon");
function R8(l) {
  const r = l.slice();
  return (
    r.sort((o, s) =>
      o.x < s.x ? -1 : o.x > s.x ? 1 : o.y < s.y ? -1 : o.y > s.y ? 1 : 0
    ),
    kb(r)
  );
}
yl(R8, "getHull");
function kb(l) {
  if (l.length <= 1) return l.slice();
  const r = [];
  for (let s = 0; s < l.length; s++) {
    const f = l[s];
    for (; r.length >= 2;) {
      const u = r[r.length - 1],
        d = r[r.length - 2];
      if ((u.x - d.x) * (f.y - d.y) >= (u.y - d.y) * (f.x - d.x)) r.pop();
      else break;
    }
    r.push(f);
  }
  r.pop();
  const o = [];
  for (let s = l.length - 1; s >= 0; s--) {
    const f = l[s];
    for (; o.length >= 2;) {
      const u = o[o.length - 1],
        d = o[o.length - 2];
      if ((u.x - d.x) * (f.y - d.y) >= (u.y - d.y) * (f.x - d.x)) o.pop();
      else break;
    }
    o.push(f);
  }
  return (
    o.pop(),
    r.length === 1 && o.length === 1 && r[0].x === o[0].x && r[0].y === o[0].y
      ? r
      : r.concat(o)
  );
}
yl(kb, "getHullPresorted");
function A8(...l) {
  const r = new Set();
  for (const o of l)
    if (typeof o == "string")
      for (const s of String(o).trim().split(/\s+/)) s && r.add(s);
  return r.size > 0 ? Array.from(r).join(" ") : void 0;
}
yl(A8, "concatAriaDescribedby");
var Kd = { exports: {} };
var x1;
function O8() {
  return (
    x1 ||
      ((x1 = 1),
      (function (l) {
        (function () {
          var r = {}.hasOwnProperty;
          function o() {
            for (var u = "", d = 0; d < arguments.length; d++) {
              var v = arguments[d];
              v && (u = f(u, s(v)));
            }
            return u;
          }
          function s(u) {
            if (typeof u == "string" || typeof u == "number") return u;
            if (typeof u != "object") return "";
            if (Array.isArray(u)) return o.apply(null, u);
            if (
              u.toString !== Object.prototype.toString &&
              !u.toString.toString().includes("[native code]")
            )
              return u.toString();
            var d = "";
            for (var v in u) r.call(u, v) && u[v] && (d = f(d, v));
            return d;
          }
          function f(u, d) {
            return d ? (u ? u + " " + d : u + d) : u;
          }
          l.exports
            ? ((o.default = o), (l.exports = o))
            : (window.classNames = o);
        })();
      })(Kd)),
    Kd.exports
  );
}
var _8 = O8();
const Ge = ym(_8),
  sr = { asChild: { type: "boolean" } },
  Ac = {
    width: {
      type: "string",
      className: "rt-r-w",
      customProperties: ["--width"],
      responsive: !0,
    },
    minWidth: {
      type: "string",
      className: "rt-r-min-w",
      customProperties: ["--min-width"],
      responsive: !0,
    },
    maxWidth: {
      type: "string",
      className: "rt-r-max-w",
      customProperties: ["--max-width"],
      responsive: !0,
    },
  },
  qb = {
    height: {
      type: "string",
      className: "rt-r-h",
      customProperties: ["--height"],
      responsive: !0,
    },
    minHeight: {
      type: "string",
      className: "rt-r-min-h",
      customProperties: ["--min-height"],
      responsive: !0,
    },
    maxHeight: {
      type: "string",
      className: "rt-r-max-h",
      customProperties: ["--max-height"],
      responsive: !0,
    },
  },
  D8 = ["1", "2", "3", "4"],
  Gb = {
    ...sr,
    align: {
      type: "enum",
      className: "rt-r-align",
      values: ["start", "center"],
      default: "center",
    },
    size: {
      type: "enum",
      className: "rt-r-size",
      values: D8,
      default: "3",
      responsive: !0,
    },
    width: Ac.width,
    minWidth: Ac.minWidth,
    maxWidth: { ...Ac.maxWidth, default: "600px" },
    ...qb,
  },
  Xb = [
    "gray",
    "gold",
    "bronze",
    "brown",
    "yellow",
    "amber",
    "orange",
    "tomato",
    "red",
    "ruby",
    "crimson",
    "pink",
    "plum",
    "purple",
    "violet",
    "iris",
    "indigo",
    "blue",
    "cyan",
    "teal",
    "jade",
    "green",
    "grass",
    "lime",
    "mint",
    "sky",
  ],
  Ma = { color: { type: "enum", values: Xb, default: void 0 } },
  Wm = { color: { type: "enum", values: Xb, default: "" } },
  bl = {
    highContrast: {
      type: "boolean",
      className: "rt-high-contrast",
      default: void 0,
    },
  },
  M8 = ["normal", "start", "end", "both"],
  Ib = {
    trim: { type: "enum", className: "rt-r-lt", values: M8, responsive: !0 },
  },
  j8 = ["left", "center", "right"],
  Zb = {
    align: { type: "enum", className: "rt-r-ta", values: j8, responsive: !0 },
  },
  z8 = ["wrap", "nowrap", "pretty", "balance"],
  Qb = {
    wrap: { type: "enum", className: "rt-r-tw", values: z8, responsive: !0 },
  },
  Kb = { truncate: { type: "boolean", className: "rt-truncate" } },
  H8 = ["light", "regular", "medium", "bold"],
  $b = {
    weight: {
      type: "enum",
      className: "rt-r-weight",
      values: H8,
      responsive: !0,
    },
  },
  L8 = ["h1", "h2", "h3", "h4", "h5", "h6"],
  B8 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  U8 = {
    as: { type: "enum", values: L8, default: "h1" },
    ...sr,
    size: {
      type: "enum",
      className: "rt-r-size",
      values: B8,
      default: "6",
      responsive: !0,
    },
    ...$b,
    ...Zb,
    ...Ib,
    ...Kb,
    ...Qb,
    ...Ma,
    ...bl,
  },
  V8 = ["initial", "xs", "sm", "md", "lg", "xl"],
  eh = new Set(V8);
function Fb(l, r) {
  return Object.prototype.hasOwnProperty.call(l, r);
}
function No(l) {
  return (
    typeof l == "object" && l !== null && Object.keys(l).some((r) => eh.has(r))
  );
}
function P8({ className: l, customProperties: r, ...o }) {
  const s = Jb({ allowArbitraryValues: !0, className: l, ...o }),
    f = Y8({ customProperties: r, ...o });
  return [s, f];
}
function Jb({
  allowArbitraryValues: l,
  value: r,
  className: o,
  propValues: s,
  parseValue: f = (u) => u,
}) {
  const u = [];
  if (r) {
    if (typeof r == "string" && s.includes(r)) return C1(o, r, f);
    if (No(r)) {
      const d = r;
      for (const v in d) {
        if (!Fb(d, v) || !eh.has(v)) continue;
        const g = d[v];
        if (g !== void 0) {
          if (s.includes(g)) {
            const b = C1(o, g, f),
              y = v === "initial" ? b : `${v}:${b}`;
            u.push(y);
          } else if (l) {
            const b = v === "initial" ? o : `${v}:${o}`;
            u.push(b);
          }
        }
      }
      return u.join(" ");
    }
    if (l) return o;
  }
}
function C1(l, r, o) {
  const s = l ? "-" : "",
    f = o(r),
    u = f?.startsWith("-"),
    d = u ? "-" : "",
    v = u ? f?.substring(1) : f;
  return `${d}${l}${s}${v}`;
}
function Y8({
  customProperties: l,
  value: r,
  propValues: o,
  parseValue: s = (f) => f,
}) {
  let f = {};
  if (!(!r || (typeof r == "string" && o.includes(r)))) {
    if (
      (typeof r == "string" && (f = Object.fromEntries(l.map((u) => [u, r]))),
      No(r))
    ) {
      const u = r;
      for (const d in u) {
        if (!Fb(u, d) || !eh.has(d)) continue;
        const v = u[d];
        if (!o.includes(v))
          for (const g of l)
            f = { [d === "initial" ? g : `${g}-${d}`]: v, ...f };
      }
    }
    for (const u in f) {
      const d = f[u];
      d !== void 0 && (f[u] = s(d));
    }
    return f;
  }
}
function E1(...l) {
  let r = {};
  for (const o of l) o && (r = { ...r, ...o });
  return Object.keys(r).length ? r : void 0;
}
function k8(...l) {
  return Object.assign({}, ...l);
}
function wt(l, ...r) {
  let o, s;
  const f = { ...l },
    u = k8(...r);
  for (const d in u) {
    let v = f[d];
    const g = u[d];
    if (
      (g.default !== void 0 && v === void 0 && (v = g.default),
      g.type === "enum" &&
        ![g.default, ...g.values].includes(v) &&
        !No(v) &&
        (v = g.default),
      (f[d] = v),
      "className" in g && g.className)
    ) {
      delete f[d];
      const b = "responsive" in g;
      if (!v || (No(v) && !b)) continue;
      if (
        (No(v) &&
          (g.default !== void 0 &&
            v.initial === void 0 &&
            (v.initial = g.default),
          g.type === "enum" &&
            ([g.default, ...g.values].includes(v.initial) ||
              (v.initial = g.default))),
        g.type === "enum")
      ) {
        const y = Jb({
          allowArbitraryValues: !1,
          value: v,
          className: g.className,
          propValues: g.values,
          parseValue: g.parseValue,
        });
        o = Ge(o, y);
        continue;
      }
      if (g.type === "string" || g.type === "enum | string") {
        const y = g.type === "string" ? [] : g.values,
          [h, x] = P8({
            className: g.className,
            customProperties: g.customProperties,
            propValues: y,
            parseValue: g.parseValue,
            value: v,
          });
        ((s = E1(s, x)), (o = Ge(o, h)));
        continue;
      }
      if (g.type === "boolean" && v) {
        o = Ge(o, g.className);
        continue;
      }
    }
  }
  return ((f.className = Ge(o, l.className)), (f.style = E1(s, l.style)), f);
}
const Zl = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-1",
    "-2",
    "-3",
    "-4",
    "-5",
    "-6",
    "-7",
    "-8",
    "-9",
  ],
  Rn = {
    m: {
      type: "enum | string",
      values: Zl,
      responsive: !0,
      className: "rt-r-m",
      customProperties: ["--m"],
    },
    mx: {
      type: "enum | string",
      values: Zl,
      responsive: !0,
      className: "rt-r-mx",
      customProperties: ["--ml", "--mr"],
    },
    my: {
      type: "enum | string",
      values: Zl,
      responsive: !0,
      className: "rt-r-my",
      customProperties: ["--mt", "--mb"],
    },
    mt: {
      type: "enum | string",
      values: Zl,
      responsive: !0,
      className: "rt-r-mt",
      customProperties: ["--mt"],
    },
    mr: {
      type: "enum | string",
      values: Zl,
      responsive: !0,
      className: "rt-r-mr",
      customProperties: ["--mr"],
    },
    mb: {
      type: "enum | string",
      values: Zl,
      responsive: !0,
      className: "rt-r-mb",
      customProperties: ["--mb"],
    },
    ml: {
      type: "enum | string",
      values: Zl,
      responsive: !0,
      className: "rt-r-ml",
      customProperties: ["--ml"],
    },
  },
  th = m.forwardRef((l, r) => {
    const {
      children: o,
      className: s,
      asChild: f,
      as: u = "h1",
      color: d,
      ...v
    } = wt(l, U8, Rn);
    return m.createElement(
      ir,
      { "data-accent-color": d, ...v, ref: r, className: Ge("rt-Heading", s) },
      f ? o : m.createElement(u, null, o)
    );
  });
th.displayName = "Heading";
const q8 = ["span", "div", "label", "p"],
  G8 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  X8 = {
    as: { type: "enum", values: q8, default: "span" },
    ...sr,
    size: { type: "enum", className: "rt-r-size", values: G8, responsive: !0 },
    ...$b,
    ...Zb,
    ...Ib,
    ...Kb,
    ...Qb,
    ...Ma,
    ...bl,
  },
  tu = m.forwardRef((l, r) => {
    const {
      children: o,
      className: s,
      asChild: f,
      as: u = "span",
      color: d,
      ...v
    } = wt(l, X8, Rn);
    return m.createElement(
      ir,
      { "data-accent-color": d, ...v, ref: r, className: Ge("rt-Text", s) },
      f ? o : m.createElement(u, null, o)
    );
  });
tu.displayName = "Text";
function I8(l) {
  switch (l) {
    case "tomato":
    case "red":
    case "ruby":
    case "crimson":
    case "pink":
    case "plum":
    case "purple":
    case "violet":
      return "mauve";
    case "iris":
    case "indigo":
    case "blue":
    case "sky":
    case "cyan":
      return "slate";
    case "teal":
    case "jade":
    case "mint":
    case "green":
      return "sage";
    case "grass":
    case "lime":
      return "olive";
    case "yellow":
    case "amber":
    case "orange":
    case "brown":
    case "gold":
    case "bronze":
      return "sand";
    case "gray":
      return "gray";
  }
}
const Z8 = ["none", "small", "medium", "large", "full"],
  cr = { radius: { type: "enum", values: Z8, default: void 0 } },
  dn = {
    hasBackground: { default: !0 },
    appearance: { default: "inherit" },
    accentColor: { default: "indigo" },
    grayColor: { default: "auto" },
    panelBackground: { default: "translucent" },
    radius: { default: "medium" },
    scaling: { default: "100%" },
  },
  ii = () => {},
  Lc = m.createContext(void 0);
function Q8() {
  const l = m.useContext(Lc);
  if (l === void 0)
    throw new Error("`useThemeContext` must be used within a `Theme`");
  return l;
}
const Bo = m.forwardRef((l, r) =>
  m.useContext(Lc) === void 0
    ? m.createElement(
        S8,
        { delayDuration: 200 },
        m.createElement(
          n3,
          { dir: "ltr" },
          m.createElement(Wb, { ...l, ref: r })
        )
      )
    : m.createElement(nh, { ...l, ref: r })
);
Bo.displayName = "Theme";
const Wb = m.forwardRef((l, r) => {
  const {
      appearance: o = dn.appearance.default,
      accentColor: s = dn.accentColor.default,
      grayColor: f = dn.grayColor.default,
      panelBackground: u = dn.panelBackground.default,
      radius: d = dn.radius.default,
      scaling: v = dn.scaling.default,
      hasBackground: g = dn.hasBackground.default,
      ...b
    } = l,
    [y, h] = m.useState(o);
  m.useEffect(() => h(o), [o]);
  const [x, E] = m.useState(s);
  m.useEffect(() => E(s), [s]);
  const [w, T] = m.useState(f);
  m.useEffect(() => T(f), [f]);
  const [N, R] = m.useState(u);
  m.useEffect(() => R(u), [u]);
  const [M, _] = m.useState(d);
  m.useEffect(() => _(d), [d]);
  const [j, G] = m.useState(v);
  return (
    m.useEffect(() => G(v), [v]),
    m.createElement(nh, {
      ...b,
      ref: r,
      isRoot: !0,
      hasBackground: g,
      appearance: y,
      accentColor: x,
      grayColor: w,
      panelBackground: N,
      radius: M,
      scaling: j,
      onAppearanceChange: h,
      onAccentColorChange: E,
      onGrayColorChange: T,
      onPanelBackgroundChange: R,
      onRadiusChange: _,
      onScalingChange: G,
    })
  );
});
Wb.displayName = "ThemeRoot";
const nh = m.forwardRef((l, r) => {
  const o = m.useContext(Lc),
    {
      asChild: s,
      isRoot: f,
      hasBackground: u,
      appearance: d = o?.appearance ?? dn.appearance.default,
      accentColor: v = o?.accentColor ?? dn.accentColor.default,
      grayColor: g = o?.resolvedGrayColor ?? dn.grayColor.default,
      panelBackground: b = o?.panelBackground ?? dn.panelBackground.default,
      radius: y = o?.radius ?? dn.radius.default,
      scaling: h = o?.scaling ?? dn.scaling.default,
      onAppearanceChange: x = ii,
      onAccentColorChange: E = ii,
      onGrayColorChange: w = ii,
      onPanelBackgroundChange: T = ii,
      onRadiusChange: N = ii,
      onScalingChange: R = ii,
      ...M
    } = l,
    _ = s ? ir : "div",
    j = g === "auto" ? I8(v) : g,
    G = l.appearance === "light" || l.appearance === "dark",
    P = u === void 0 ? f || G : u;
  return m.createElement(
    Lc.Provider,
    {
      value: m.useMemo(
        () => ({
          appearance: d,
          accentColor: v,
          grayColor: g,
          resolvedGrayColor: j,
          panelBackground: b,
          radius: y,
          scaling: h,
          onAppearanceChange: x,
          onAccentColorChange: E,
          onGrayColorChange: w,
          onPanelBackgroundChange: T,
          onRadiusChange: N,
          onScalingChange: R,
        }),
        [d, v, g, j, b, y, h, x, E, w, T, N, R]
      ),
    },
    m.createElement(_, {
      "data-is-root-theme": f ? "true" : "false",
      "data-accent-color": v,
      "data-gray-color": j,
      "data-has-background": P ? "true" : "false",
      "data-panel-background": b,
      "data-radius": y,
      "data-scaling": h,
      ref: r,
      ...M,
      className: Ge(
        "radix-themes",
        { light: d === "light", dark: d === "dark" },
        M.className
      ),
    })
  );
});
nh.displayName = "ThemeImpl";
const Uo = (l) => {
    if (!m.isValidElement(l))
      throw Error(
        `Expected a single React Element child, but got: ${m.Children.toArray(l)
          .map((r) =>
            typeof r == "object" && "type" in r && typeof r.type == "string"
              ? r.type
              : typeof r
          )
          .join(", ")}`
      );
    return l;
  },
  eS = (l) => m.createElement(dE, { ...l });
eS.displayName = "AlertDialog.Root";
const K8 = m.forwardRef(({ children: l, ...r }, o) =>
  m.createElement(mE, { ...r, ref: o, asChild: !0 }, Uo(l))
);
K8.displayName = "AlertDialog.Trigger";
const tS = m.forwardRef(({ align: l, ...r }, o) => {
  const { align: s, ...f } = Gb,
    { className: u } = wt({ align: l }, { align: s }),
    { className: d, forceMount: v, container: g, ...b } = wt(r, f);
  return m.createElement(
    hE,
    { container: g, forceMount: v },
    m.createElement(
      Bo,
      { asChild: !0 },
      m.createElement(
        pE,
        { className: "rt-BaseDialogOverlay rt-AlertDialogOverlay" },
        m.createElement(
          "div",
          { className: "rt-BaseDialogScroll rt-AlertDialogScroll" },
          m.createElement(
            "div",
            {
              className: `rt-BaseDialogScrollPadding rt-AlertDialogScrollPadding ${u}`,
            },
            m.createElement(bE, {
              ...b,
              ref: o,
              className: Ge("rt-BaseDialogContent", "rt-AlertDialogContent", d),
            })
          )
        )
      )
    )
  );
});
tS.displayName = "AlertDialog.Content";
const nS = m.forwardRef((l, r) =>
  m.createElement(
    SE,
    { asChild: !0 },
    m.createElement(th, {
      size: "5",
      mb: "3",
      trim: "start",
      ...l,
      asChild: !1,
      ref: r,
    })
  )
);
nS.displayName = "AlertDialog.Title";
const aS = m.forwardRef((l, r) =>
  m.createElement(
    xE,
    { asChild: !0 },
    m.createElement(tu, { as: "p", size: "3", ...l, asChild: !1, ref: r })
  )
);
aS.displayName = "AlertDialog.Description";
const lS = m.forwardRef(({ children: l, ...r }, o) =>
  m.createElement(CE, { ...r, ref: o, asChild: !0 }, Uo(l))
);
lS.displayName = "AlertDialog.Action";
const rS = m.forwardRef(({ children: l, ...r }, o) =>
  m.createElement(wE, { ...r, ref: o, asChild: !0 }, Uo(l))
);
rS.displayName = "AlertDialog.Cancel";
const $8 = ["1", "2", "3"],
  F8 = ["solid", "soft", "surface", "outline"],
  J8 = {
    ...sr,
    size: {
      type: "enum",
      className: "rt-r-size",
      values: $8,
      default: "1",
      responsive: !0,
    },
    variant: {
      type: "enum",
      className: "rt-variant",
      values: F8,
      default: "soft",
    },
    ...Wm,
    ...bl,
    ...cr,
  },
  iS = m.forwardRef((l, r) => {
    const {
        asChild: o,
        className: s,
        color: f,
        radius: u,
        ...d
      } = wt(l, J8, Rn),
      v = o ? ir : "span";
    return m.createElement(v, {
      "data-accent-color": f,
      "data-radius": u,
      ...d,
      ref: r,
      className: Ge("rt-reset", "rt-Badge", s),
    });
  });
iS.displayName = "Badge";
const W8 = ir,
  Ql = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  Oc = {
    p: {
      type: "enum | string",
      className: "rt-r-p",
      customProperties: ["--p"],
      values: Ql,
      responsive: !0,
    },
    px: {
      type: "enum | string",
      className: "rt-r-px",
      customProperties: ["--pl", "--pr"],
      values: Ql,
      responsive: !0,
    },
    py: {
      type: "enum | string",
      className: "rt-r-py",
      customProperties: ["--pt", "--pb"],
      values: Ql,
      responsive: !0,
    },
    pt: {
      type: "enum | string",
      className: "rt-r-pt",
      customProperties: ["--pt"],
      values: Ql,
      responsive: !0,
    },
    pr: {
      type: "enum | string",
      className: "rt-r-pr",
      customProperties: ["--pr"],
      values: Ql,
      responsive: !0,
    },
    pb: {
      type: "enum | string",
      className: "rt-r-pb",
      customProperties: ["--pb"],
      values: Ql,
      responsive: !0,
    },
    pl: {
      type: "enum | string",
      className: "rt-r-pl",
      customProperties: ["--pl"],
      values: Ql,
      responsive: !0,
    },
  },
  $d = ["visible", "hidden", "clip", "scroll", "auto"],
  e4 = ["static", "relative", "absolute", "fixed", "sticky"],
  Co = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-1",
    "-2",
    "-3",
    "-4",
    "-5",
    "-6",
    "-7",
    "-8",
    "-9",
  ],
  t4 = ["0", "1"],
  n4 = ["0", "1"],
  a4 = ["start", "center", "end", "baseline", "stretch"],
  l4 = ["start", "center", "end", "baseline", "stretch"],
  r4 = {
    ...Oc,
    ...Ac,
    ...qb,
    position: {
      type: "enum",
      className: "rt-r-position",
      values: e4,
      responsive: !0,
    },
    inset: {
      type: "enum | string",
      className: "rt-r-inset",
      customProperties: ["--inset"],
      values: Co,
      responsive: !0,
    },
    top: {
      type: "enum | string",
      className: "rt-r-top",
      customProperties: ["--top"],
      values: Co,
      responsive: !0,
    },
    right: {
      type: "enum | string",
      className: "rt-r-right",
      customProperties: ["--right"],
      values: Co,
      responsive: !0,
    },
    bottom: {
      type: "enum | string",
      className: "rt-r-bottom",
      customProperties: ["--bottom"],
      values: Co,
      responsive: !0,
    },
    left: {
      type: "enum | string",
      className: "rt-r-left",
      customProperties: ["--left"],
      values: Co,
      responsive: !0,
    },
    overflow: {
      type: "enum",
      className: "rt-r-overflow",
      values: $d,
      responsive: !0,
    },
    overflowX: {
      type: "enum",
      className: "rt-r-ox",
      values: $d,
      responsive: !0,
    },
    overflowY: {
      type: "enum",
      className: "rt-r-oy",
      values: $d,
      responsive: !0,
    },
    flexBasis: {
      type: "string",
      className: "rt-r-fb",
      customProperties: ["--flex-basis"],
      responsive: !0,
    },
    flexShrink: {
      type: "enum | string",
      className: "rt-r-fs",
      customProperties: ["--flex-shrink"],
      values: t4,
      responsive: !0,
    },
    flexGrow: {
      type: "enum | string",
      className: "rt-r-fg",
      customProperties: ["--flex-grow"],
      values: n4,
      responsive: !0,
    },
    gridArea: {
      type: "string",
      className: "rt-r-ga",
      customProperties: ["--grid-area"],
      responsive: !0,
    },
    gridColumn: {
      type: "string",
      className: "rt-r-gc",
      customProperties: ["--grid-column"],
      responsive: !0,
    },
    gridColumnStart: {
      type: "string",
      className: "rt-r-gcs",
      customProperties: ["--grid-column-start"],
      responsive: !0,
    },
    gridColumnEnd: {
      type: "string",
      className: "rt-r-gce",
      customProperties: ["--grid-column-end"],
      responsive: !0,
    },
    gridRow: {
      type: "string",
      className: "rt-r-gr",
      customProperties: ["--grid-row"],
      responsive: !0,
    },
    gridRowStart: {
      type: "string",
      className: "rt-r-grs",
      customProperties: ["--grid-row-start"],
      responsive: !0,
    },
    gridRowEnd: {
      type: "string",
      className: "rt-r-gre",
      customProperties: ["--grid-row-end"],
      responsive: !0,
    },
    alignSelf: {
      type: "enum",
      className: "rt-r-as",
      values: a4,
      responsive: !0,
    },
    justifySelf: {
      type: "enum",
      className: "rt-r-js",
      values: l4,
      responsive: !0,
    },
  },
  i4 = ["1", "2", "3", "4"],
  o4 = ["classic", "solid", "soft", "surface", "outline", "ghost"],
  w1 = {
    ...sr,
    size: {
      type: "enum",
      className: "rt-r-size",
      values: i4,
      default: "2",
      responsive: !0,
    },
    variant: {
      type: "enum",
      className: "rt-variant",
      values: o4,
      default: "solid",
    },
    ...Wm,
    ...bl,
    ...cr,
    loading: { type: "boolean", className: "rt-loading", default: !1 },
  },
  Fd = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  s4 = {
    gap: {
      type: "enum | string",
      className: "rt-r-gap",
      customProperties: ["--gap"],
      values: Fd,
      responsive: !0,
    },
    gapX: {
      type: "enum | string",
      className: "rt-r-cg",
      customProperties: ["--column-gap"],
      values: Fd,
      responsive: !0,
    },
    gapY: {
      type: "enum | string",
      className: "rt-r-rg",
      customProperties: ["--row-gap"],
      values: Fd,
      responsive: !0,
    },
  },
  c4 = ["div", "span"],
  u4 = ["none", "inline-flex", "flex"],
  f4 = ["row", "column", "row-reverse", "column-reverse"],
  d4 = ["start", "center", "end", "baseline", "stretch"],
  m4 = ["start", "center", "end", "between"],
  h4 = ["nowrap", "wrap", "wrap-reverse"],
  oS = {
    as: { type: "enum", values: c4, default: "div" },
    ...sr,
    display: {
      type: "enum",
      className: "rt-r-display",
      values: u4,
      responsive: !0,
    },
    direction: {
      type: "enum",
      className: "rt-r-fd",
      values: f4,
      responsive: !0,
    },
    align: { type: "enum", className: "rt-r-ai", values: d4, responsive: !0 },
    justify: {
      type: "enum",
      className: "rt-r-jc",
      values: m4,
      parseValue: p4,
      responsive: !0,
    },
    wrap: { type: "enum", className: "rt-r-fw", values: h4, responsive: !0 },
    ...s4,
  };
function p4(l) {
  return l === "between" ? "space-between" : l;
}
const Bc = m.forwardRef((l, r) => {
  const { className: o, asChild: s, as: f = "div", ...u } = wt(l, oS, r4, Rn);
  return m.createElement(s ? W8 : f, {
    ...u,
    ref: r,
    className: Ge("rt-Flex", o),
  });
});
Bc.displayName = "Flex";
const v4 = ["1", "2", "3"],
  g4 = {
    size: {
      type: "enum",
      className: "rt-r-size",
      values: v4,
      default: "2",
      responsive: !0,
    },
    loading: { type: "boolean", default: !0 },
  },
  sS = m.forwardRef((l, r) => {
    const { className: o, children: s, loading: f, ...u } = wt(l, g4, Rn);
    if (!f) return s;
    const d = m.createElement(
      "span",
      { ...u, ref: r, className: Ge("rt-Spinner", o) },
      m.createElement("span", { className: "rt-SpinnerLeaf" }),
      m.createElement("span", { className: "rt-SpinnerLeaf" }),
      m.createElement("span", { className: "rt-SpinnerLeaf" }),
      m.createElement("span", { className: "rt-SpinnerLeaf" }),
      m.createElement("span", { className: "rt-SpinnerLeaf" }),
      m.createElement("span", { className: "rt-SpinnerLeaf" }),
      m.createElement("span", { className: "rt-SpinnerLeaf" }),
      m.createElement("span", { className: "rt-SpinnerLeaf" })
    );
    return s === void 0
      ? d
      : m.createElement(
          Bc,
          {
            asChild: !0,
            position: "relative",
            align: "center",
            justify: "center",
          },
          m.createElement(
            "span",
            null,
            m.createElement(
              "span",
              {
                "aria-hidden": !0,
                style: { display: "contents", visibility: "hidden" },
                inert: void 0,
              },
              s
            ),
            m.createElement(
              Bc,
              {
                asChild: !0,
                align: "center",
                justify: "center",
                position: "absolute",
                inset: "0",
              },
              m.createElement("span", null, d)
            )
          )
        );
  });
sS.displayName = "Spinner";
const y4 = BC;
function cS(l, r) {
  if (l !== void 0)
    return typeof l == "string"
      ? r(l)
      : Object.fromEntries(Object.entries(l).map(([o, s]) => [o, r(s)]));
}
function b4(l) {
  return l === "3" ? "3" : "2";
}
function S4(l) {
  switch (l) {
    case "1":
      return "1";
    case "2":
    case "3":
      return "2";
    case "4":
      return "3";
  }
}
const ah = m.forwardRef((l, r) => {
  const { size: o = w1.size.default } = l,
    {
      className: s,
      children: f,
      asChild: u,
      color: d,
      radius: v,
      disabled: g = l.loading,
      ...b
    } = wt(l, w1, Rn),
    y = u ? ir : "button";
  return m.createElement(
    y,
    {
      "data-disabled": g || void 0,
      "data-accent-color": d,
      "data-radius": v,
      ...b,
      ref: r,
      className: Ge("rt-reset", "rt-BaseButton", s),
      disabled: g,
    },
    l.loading
      ? m.createElement(
          m.Fragment,
          null,
          m.createElement(
            "span",
            {
              style: { display: "contents", visibility: "hidden" },
              "aria-hidden": !0,
            },
            f
          ),
          m.createElement(y4, null, f),
          m.createElement(
            Bc,
            {
              asChild: !0,
              align: "center",
              justify: "center",
              position: "absolute",
              inset: "0",
            },
            m.createElement(
              "span",
              null,
              m.createElement(sS, { size: cS(o, S4) })
            )
          )
        )
      : f
  );
});
ah.displayName = "BaseButton";
const Ft = m.forwardRef(({ className: l, ...r }, o) =>
  m.createElement(ah, { ...r, ref: o, className: Ge("rt-Button", l) })
);
Ft.displayName = "Button";
const x4 = ["1", "2", "3"],
  C4 = ["soft", "surface", "outline"],
  T1 = {
    ...sr,
    size: {
      type: "enum",
      className: "rt-r-size",
      values: x4,
      default: "2",
      responsive: !0,
    },
    variant: {
      type: "enum",
      className: "rt-variant",
      values: C4,
      default: "soft",
    },
    ...Wm,
    ...bl,
  },
  uS = m.createContext({}),
  Jl = m.forwardRef((l, r) => {
    const { size: o = T1.size.default } = l,
      { asChild: s, children: f, className: u, color: d, ...v } = wt(l, T1, Rn),
      g = s ? ir : "div";
    return m.createElement(
      g,
      {
        "data-accent-color": d,
        ...v,
        className: Ge("rt-CalloutRoot", u),
        ref: r,
      },
      m.createElement(
        uS.Provider,
        { value: m.useMemo(() => ({ size: o }), [o]) },
        f
      )
    );
  });
Jl.displayName = "Callout.Root";
const Wl = m.forwardRef(({ className: l, ...r }, o) =>
  m.createElement("div", { ...r, className: Ge("rt-CalloutIcon", l), ref: o })
);
Wl.displayName = "Callout.Icon";
const er = m.forwardRef(({ className: l, ...r }, o) => {
  const { size: s } = m.useContext(uS);
  return m.createElement(tu, {
    as: "p",
    size: cS(s, b4),
    ...r,
    asChild: !1,
    ref: o,
    className: Ge("rt-CalloutText", l),
  });
});
er.displayName = "Callout.Text";
var fS = Ae;
fS.dispatchDiscreteCustomEvent = Em;
fS.Root = Ae;
const E4 = J.forwardRef((l, r) =>
  J.createElement(
    "svg",
    {
      width: "9",
      height: "9",
      viewBox: "0 0 9 9",
      fill: "currentcolor",
      xmlns: "http://www.w3.org/2000/svg",
      ...l,
      ref: r,
    },
    J.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0.75 4.5C0.75 4.08579 1.08579 3.75 1.5 3.75H7.5C7.91421 3.75 8.25 4.08579 8.25 4.5C8.25 4.91421 7.91421 5.25 7.5 5.25H1.5C1.08579 5.25 0.75 4.91421 0.75 4.5Z",
    })
  )
);
E4.displayName = "ThickDividerHorizontalIcon";
const dS = J.forwardRef((l, r) =>
  J.createElement(
    "svg",
    {
      width: "9",
      height: "9",
      viewBox: "0 0 9 9",
      fill: "currentcolor",
      xmlns: "http://www.w3.org/2000/svg",
      ...l,
      ref: r,
    },
    J.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z",
    })
  )
);
dS.displayName = "ThickCheckIcon";
const mS = J.forwardRef((l, r) =>
  J.createElement(
    "svg",
    {
      width: "9",
      height: "9",
      viewBox: "0 0 9 9",
      fill: "currentcolor",
      xmlns: "http://www.w3.org/2000/svg",
      ...l,
      ref: r,
    },
    J.createElement("path", {
      d: "M0.135232 3.15803C0.324102 2.95657 0.640521 2.94637 0.841971 3.13523L4.5 6.56464L8.158 3.13523C8.3595 2.94637 8.6759 2.95657 8.8648 3.15803C9.0536 3.35949 9.0434 3.67591 8.842 3.86477L4.84197 7.6148C4.64964 7.7951 4.35036 7.7951 4.15803 7.6148L0.158031 3.86477C-0.0434285 3.67591 -0.0536285 3.35949 0.135232 3.15803Z",
    })
  )
);
mS.displayName = "ChevronDownIcon";
const w4 = J.forwardRef((l, r) =>
  J.createElement(
    "svg",
    {
      width: "9",
      height: "9",
      viewBox: "0 0 9 9",
      fill: "currentcolor",
      xmlns: "http://www.w3.org/2000/svg",
      ...l,
      ref: r,
    },
    J.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.23826 0.201711C3.54108 -0.0809141 4.01567 -0.0645489 4.29829 0.238264L7.79829 3.98826C8.06724 4.27642 8.06724 4.72359 7.79829 5.01174L4.29829 8.76174C4.01567 9.06455 3.54108 9.08092 3.23826 8.79829C2.93545 8.51567 2.91909 8.04108 3.20171 7.73826L6.22409 4.5L3.20171 1.26174C2.91909 0.958928 2.93545 0.484337 3.23826 0.201711Z",
    })
  )
);
w4.displayName = "ThickChevronRightIcon";
const hS = (l) => m.createElement(Uy, { ...l, modal: !0 });
hS.displayName = "Dialog.Root";
const T4 = m.forwardRef(({ children: l, ...r }, o) =>
  m.createElement(Vy, { ...r, ref: o, asChild: !0 }, Uo(l))
);
T4.displayName = "Dialog.Trigger";
const pS = m.forwardRef(({ align: l, ...r }, o) => {
  const { align: s, ...f } = Gb,
    { className: u } = wt({ align: l }, { align: s }),
    { className: d, forceMount: v, container: g, ...b } = wt(r, f);
  return m.createElement(
    ky,
    { container: g, forceMount: v },
    m.createElement(
      Bo,
      { asChild: !0 },
      m.createElement(
        qy,
        { className: "rt-BaseDialogOverlay rt-DialogOverlay" },
        m.createElement(
          "div",
          { className: "rt-BaseDialogScroll rt-DialogScroll" },
          m.createElement(
            "div",
            {
              className: `rt-BaseDialogScrollPadding rt-DialogScrollPadding ${u}`,
            },
            m.createElement(Gy, {
              ...b,
              ref: o,
              className: Ge("rt-BaseDialogContent", "rt-DialogContent", d),
            })
          )
        )
      )
    )
  );
});
pS.displayName = "Dialog.Content";
const vS = m.forwardRef((l, r) =>
  m.createElement(
    Iy,
    { asChild: !0 },
    m.createElement(th, {
      size: "5",
      mb: "3",
      trim: "start",
      ...l,
      asChild: !1,
      ref: r,
    })
  )
);
vS.displayName = "Dialog.Title";
const gS = m.forwardRef((l, r) =>
  m.createElement(
    Zy,
    { asChild: !0 },
    m.createElement(tu, { as: "p", size: "3", ...l, asChild: !1, ref: r })
  )
);
gS.displayName = "Dialog.Description";
const yS = m.forwardRef(({ children: l, ...r }, o) =>
  m.createElement(Dm, { ...r, ref: o, asChild: !0 }, Uo(l))
);
yS.displayName = "Dialog.Close";
const lh = m.forwardRef(({ className: l, ...r }, o) =>
  m.createElement(ah, { ...r, ref: o, className: Ge("rt-IconButton", l) })
);
lh.displayName = "IconButton";
const N4 = ["1", "2", "3"],
  rh = {
    size: {
      type: "enum",
      className: "rt-r-size",
      values: N4,
      default: "2",
      responsive: !0,
    },
  },
  R4 = ["classic", "surface", "soft", "ghost"],
  A4 = {
    variant: {
      type: "enum",
      className: "rt-variant",
      values: R4,
      default: "surface",
    },
    ...Ma,
    ...cr,
    placeholder: { type: "string" },
  },
  O4 = ["solid", "soft"],
  _4 = {
    variant: {
      type: "enum",
      className: "rt-variant",
      values: O4,
      default: "solid",
    },
    ...Ma,
    ...bl,
  },
  ih = m.createContext({}),
  bS = (l) => {
    const { children: r, size: o = rh.size.default, ...s } = l;
    return m.createElement(
      f9,
      { ...s },
      m.createElement(
        ih.Provider,
        { value: m.useMemo(() => ({ size: o }), [o]) },
        r
      )
    );
  };
bS.displayName = "Select.Root";
const SS = m.forwardRef((l, r) => {
  const o = m.useContext(ih),
    {
      children: s,
      className: f,
      color: u,
      radius: d,
      placeholder: v,
      ...g
    } = wt({ size: o?.size, ...l }, { size: rh.size }, A4, Rn);
  return m.createElement(
    m9,
    { asChild: !0 },
    m.createElement(
      "button",
      {
        "data-accent-color": u,
        "data-radius": d,
        ...g,
        ref: r,
        className: Ge("rt-reset", "rt-SelectTrigger", f),
      },
      m.createElement(
        "span",
        { className: "rt-SelectTriggerInner" },
        m.createElement(p9, { placeholder: v }, s)
      ),
      m.createElement(
        v9,
        { asChild: !0 },
        m.createElement(mS, { className: "rt-SelectIcon" })
      )
    )
  );
});
SS.displayName = "Select.Trigger";
const xS = m.forwardRef((l, r) => {
  const o = m.useContext(ih),
    {
      className: s,
      children: f,
      color: u,
      container: d,
      ...v
    } = wt({ size: o?.size, ...l }, { size: rh.size }, _4),
    g = Q8(),
    b = u || g.accentColor;
  return m.createElement(
    S9,
    { container: d },
    m.createElement(
      Bo,
      { asChild: !0 },
      m.createElement(
        x9,
        {
          "data-accent-color": b,
          sideOffset: 4,
          ...v,
          asChild: !1,
          ref: r,
          className: Ge(
            { "rt-PopperContent": v.position === "popper" },
            "rt-SelectContent",
            s
          ),
        },
        m.createElement(
          G5,
          { type: "auto", className: "rt-ScrollAreaRoot" },
          m.createElement(
            A9,
            { asChild: !0, className: "rt-SelectViewport" },
            m.createElement(
              X5,
              {
                className: "rt-ScrollAreaViewport",
                style: { overflowY: void 0 },
              },
              f
            )
          ),
          m.createElement(
            Q5,
            {
              className: "rt-ScrollAreaScrollbar rt-r-size-1",
              orientation: "vertical",
            },
            m.createElement(e9, { className: "rt-ScrollAreaThumb" })
          )
        )
      )
    )
  );
});
xS.displayName = "Select.Content";
const CS = m.forwardRef((l, r) => {
  const { className: o, children: s, ...f } = l;
  return m.createElement(
    L9,
    { ...f, asChild: !1, ref: r, className: Ge("rt-SelectItem", o) },
    m.createElement(
      V9,
      { className: "rt-SelectItemIndicator" },
      m.createElement(dS, { className: "rt-SelectItemIndicatorIcon" })
    ),
    m.createElement(B9, null, s)
  );
});
CS.displayName = "Select.Item";
const D4 = m.forwardRef(({ className: l, ...r }, o) =>
  m.createElement(M9, {
    ...r,
    asChild: !1,
    ref: o,
    className: Ge("rt-SelectGroup", l),
  })
);
D4.displayName = "Select.Group";
const M4 = m.forwardRef(({ className: l, ...r }, o) =>
  m.createElement(z9, {
    ...r,
    asChild: !1,
    ref: o,
    className: Ge("rt-SelectLabel", l),
  })
);
M4.displayName = "Select.Label";
const j4 = m.forwardRef(({ className: l, ...r }, o) =>
  m.createElement(P9, {
    ...r,
    asChild: !1,
    ref: o,
    className: Ge("rt-SelectSeparator", l),
  })
);
j4.displayName = "Select.Separator";
const z4 = ["1", "2", "3"],
  H4 = ["classic", "surface", "soft"],
  L4 = {
    size: {
      type: "enum",
      className: "rt-r-size",
      values: z4,
      default: "2",
      responsive: !0,
    },
    variant: {
      type: "enum",
      className: "rt-variant",
      values: H4,
      default: "surface",
    },
    ...Ma,
    ...bl,
    ...cr,
  },
  ES = m.forwardRef((l, r) => {
    const {
      className: o,
      color: s,
      radius: f,
      tabIndex: u,
      ...d
    } = wt(l, L4, Rn);
    return m.createElement(
      Q9,
      {
        "data-accent-color": s,
        "data-radius": f,
        ref: r,
        ...d,
        asChild: !1,
        className: Ge("rt-SliderRoot", o),
      },
      m.createElement(
        J9,
        { className: "rt-SliderTrack" },
        m.createElement(W9, {
          className: Ge("rt-SliderRange", {
            "rt-high-contrast": l.highContrast,
          }),
          "data-inverted": d.inverted ? "" : void 0,
        })
      ),
      (d.value ?? d.defaultValue ?? []).map((v, g) =>
        m.createElement(l8, {
          key: g,
          className: "rt-SliderThumb",
          ...(u !== void 0 ? { tabIndex: u } : void 0),
        })
      )
    );
  });
ES.displayName = "Slider";
const B4 = ["1", "2", "3"],
  U4 = ["classic", "surface", "soft"],
  V4 = {
    size: {
      type: "enum",
      className: "rt-r-size",
      values: B4,
      default: "2",
      responsive: !0,
    },
    variant: {
      type: "enum",
      className: "rt-variant",
      values: U4,
      default: "surface",
    },
    ...Ma,
    ...bl,
    ...cr,
  },
  nu = m.forwardRef((l, r) => {
    const { className: o, color: s, radius: f, ...u } = wt(l, V4, Rn);
    return m.createElement(
      f8,
      {
        "data-accent-color": s,
        "data-radius": f,
        ...u,
        asChild: !1,
        ref: r,
        className: Ge("rt-reset", "rt-SwitchRoot", o),
      },
      m.createElement(m8, {
        className: Ge("rt-SwitchThumb", { "rt-high-contrast": l.highContrast }),
      })
    );
  });
nu.displayName = "Switch";
const P4 = ["1", "2", "3"],
  Y4 = ["classic", "surface", "soft"],
  k4 = ["none", "vertical", "horizontal", "both"],
  q4 = {
    size: {
      type: "enum",
      className: "rt-r-size",
      values: P4,
      default: "2",
      responsive: !0,
    },
    variant: {
      type: "enum",
      className: "rt-variant",
      values: Y4,
      default: "surface",
    },
    resize: {
      type: "enum",
      className: "rt-r-resize",
      values: k4,
      responsive: !0,
    },
    ...Ma,
    ...cr,
  },
  wS = m.forwardRef((l, r) => {
    const { className: o, color: s, radius: f, style: u, ...d } = wt(l, q4, Rn);
    return m.createElement(
      "div",
      {
        "data-accent-color": s,
        "data-radius": f,
        className: Ge("rt-TextAreaRoot", o),
        style: u,
      },
      m.createElement("textarea", {
        className: "rt-reset rt-TextAreaInput",
        ref: r,
        ...d,
      })
    );
  });
wS.displayName = "TextArea";
const G4 = ["1", "2", "3"],
  X4 = ["classic", "surface", "soft"],
  I4 = {
    size: {
      type: "enum",
      className: "rt-r-size",
      values: G4,
      default: "2",
      responsive: !0,
    },
    variant: {
      type: "enum",
      className: "rt-variant",
      values: X4,
      default: "surface",
    },
    ...Ma,
    ...cr,
  },
  Z4 = ["left", "right"],
  Q4 = {
    side: { type: "enum", values: Z4 },
    ...Ma,
    gap: oS.gap,
    px: Oc.px,
    pl: Oc.pl,
    pr: Oc.pr,
  },
  Vo = m.forwardRef((l, r) => {
    const o = m.useRef(null),
      {
        children: s,
        className: f,
        color: u,
        radius: d,
        style: v,
        ...g
      } = wt(l, I4, Rn);
    return m.createElement(
      "div",
      {
        "data-accent-color": u,
        "data-radius": d,
        style: v,
        className: Ge("rt-TextFieldRoot", f),
        onPointerDown: (b) => {
          const y = b.target;
          if (y.closest("input, button, a")) return;
          const h = o.current;
          if (!h) return;
          const x = y.closest(`
            .rt-TextFieldSlot[data-side='right'],
            .rt-TextFieldSlot:not([data-side='right']) ~ .rt-TextFieldSlot:not([data-side='left'])
          `)
            ? h.value.length
            : 0;
          requestAnimationFrame(() => {
            try {
              h.setSelectionRange(x, x);
            } catch {}
            h.focus();
          });
        },
      },
      m.createElement("input", {
        spellCheck: "false",
        ...g,
        ref: xm(o, r),
        className: "rt-reset rt-TextFieldInput",
      }),
      s
    );
  });
Vo.displayName = "TextField.Root";
const vm = m.forwardRef((l, r) => {
  const { className: o, color: s, side: f, ...u } = wt(l, Q4);
  return m.createElement("div", {
    "data-accent-color": s,
    "data-side": f,
    ...u,
    ref: r,
    className: Ge("rt-TextFieldSlot", o),
  });
});
vm.displayName = "TextField.Slot";
function An(l, r) {
  if (l == null) return {};
  var o = {},
    s = Object.keys(l),
    f,
    u;
  for (u = 0; u < s.length; u++)
    ((f = s[u]), !(r.indexOf(f) >= 0) && (o[f] = l[f]));
  return o;
}
var K4 = ["color"],
  $4 = m.forwardRef(function (l, r) {
    var o = l.color,
      s = o === void 0 ? "currentColor" : o,
      f = An(l, K4);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        f,
        { ref: r }
      ),
      m.createElement("path", {
        d: "M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z",
        fill: s,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  F4 = ["color"],
  gm = m.forwardRef(function (l, r) {
    var o = l.color,
      s = o === void 0 ? "currentColor" : o,
      f = An(l, F4);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        f,
        { ref: r }
      ),
      m.createElement("path", {
        d: "M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z",
        fill: s,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  J4 = ["color"],
  W4 = m.forwardRef(function (l, r) {
    var o = l.color,
      s = o === void 0 ? "currentColor" : o,
      f = An(l, J4);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        f,
        { ref: r }
      ),
      m.createElement("path", {
        d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
        fill: s,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  ew = ["color"],
  TS = m.forwardRef(function (l, r) {
    var o = l.color,
      s = o === void 0 ? "currentColor" : o,
      f = An(l, ew);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        f,
        { ref: r }
      ),
      m.createElement("path", {
        d: "M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z",
        fill: s,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  tw = ["color"],
  nw = m.forwardRef(function (l, r) {
    var o = l.color,
      s = o === void 0 ? "currentColor" : o,
      f = An(l, tw);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        f,
        { ref: r }
      ),
      m.createElement("path", {
        d: "M1 3.25C1 3.11193 1.11193 3 1.25 3H13.75C13.8881 3 14 3.11193 14 3.25V10.75C14 10.8881 13.8881 11 13.75 11H1.25C1.11193 11 1 10.8881 1 10.75V3.25ZM1.25 2C0.559643 2 0 2.55964 0 3.25V10.75C0 11.4404 0.559644 12 1.25 12H5.07341L4.82991 13.2986C4.76645 13.6371 5.02612 13.95 5.37049 13.95H9.62951C9.97389 13.95 10.2336 13.6371 10.1701 13.2986L9.92659 12H13.75C14.4404 12 15 11.4404 15 10.75V3.25C15 2.55964 14.4404 2 13.75 2H1.25ZM9.01091 12H5.98909L5.79222 13.05H9.20778L9.01091 12Z",
        fill: s,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  aw = ["color"],
  N1 = m.forwardRef(function (l, r) {
    var o = l.color,
      s = o === void 0 ? "currentColor" : o,
      f = An(l, aw);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        f,
        { ref: r }
      ),
      m.createElement("path", {
        d: "M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z",
        fill: s,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  lw = ["color"],
  fi = m.forwardRef(function (l, r) {
    var o = l.color,
      s = o === void 0 ? "currentColor" : o,
      f = An(l, lw);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        f,
        { ref: r }
      ),
      m.createElement("path", {
        d: "M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z",
        fill: s,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  rw = ["color"],
  iw = m.forwardRef(function (l, r) {
    var o = l.color,
      s = o === void 0 ? "currentColor" : o,
      f = An(l, rw);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        f,
        { ref: r }
      ),
      m.createElement("path", {
        d: "M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z",
        fill: s,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  ow = ["color"],
  Uc = m.forwardRef(function (l, r) {
    var o = l.color,
      s = o === void 0 ? "currentColor" : o,
      f = An(l, ow);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        f,
        { ref: r }
      ),
      m.createElement("path", {
        d: "M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z",
        fill: s,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  sw = ["color"],
  cw = m.forwardRef(function (l, r) {
    var o = l.color,
      s = o === void 0 ? "currentColor" : o,
      f = An(l, sw);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        f,
        { ref: r }
      ),
      m.createElement("path", {
        d: "M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z",
        fill: s,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  uw = ["color"],
  fw = m.forwardRef(function (l, r) {
    var o = l.color,
      s = o === void 0 ? "currentColor" : o,
      f = An(l, uw);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        f,
        { ref: r }
      ),
      m.createElement("path", {
        d: "M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z",
        fill: s,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  dw = ["color"],
  NS = m.forwardRef(function (l, r) {
    var o = l.color,
      s = o === void 0 ? "currentColor" : o,
      f = An(l, dw);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        f,
        { ref: r }
      ),
      m.createElement("path", {
        d: "M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z",
        fill: s,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  });
const RS = "kopti-workspace-v2",
  mw = "kopti-hpp-calculator-v1",
  Ra = () => crypto.randomUUID(),
  Kl = ["ml", "L", "g", "kg", "pcs"],
  R1 = { ml: "volume", L: "volume", g: "mass", kg: "mass", pcs: "count" },
  A1 = { ml: 1, L: 1e3, g: 1, kg: 1e3, pcs: 1 },
  Jt = (l) =>
    l == null || !Number.isFinite(l)
      ? "Belum tersedia"
      : new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 0,
        }).format(l),
  oh = (l) =>
    new Intl.NumberFormat("id-ID", { maximumFractionDigits: 2 }).format(l || 0),
  O1 = (l) =>
    l === ""
      ? ""
      : new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(l),
  ol = (l, r = 0, o = Number.MAX_SAFE_INTEGER) =>
    l !== "" &&
    l !== null &&
    Number.isFinite(Number(l)) &&
    Number(l) >= r &&
    Number(l) <= o;
function sl(l = !1) {
  const r = l
    ? [
        ["Espresso", 9e4, 1e3, 30, "ml", "ml", "ingredient"],
        ["Brown Sugar (Delifru)", 111e3, 1e3, 15, "ml", "ml", "ingredient"],
        ["Creamiera", 65e3, 1e3, 15, "ml", "ml", "ingredient"],
        [
          "Susu UHT (Indomilk Good Milk)",
          18500,
          950,
          80,
          "ml",
          "ml",
          "ingredient",
        ],
        ["Gula cair", 75e3, 3, 15, "kg", "g", "ingredient"],
        ["Es batu", 1e4, 1, 150, "kg", "g", "ingredient"],
        ["Cup", 1e3, 1, 1, "pcs", "pcs", "packaging"],
      ].map(([o, s, f, u, d, v, g]) => ({
        id: Ra(),
        name: o,
        price: s,
        packQty: f,
        usage: u,
        packUnit: d,
        usageUnit: v,
        kind: g,
        active: !0,
      }))
    : [];
  return {
    id: Ra(),
    name: l ? "Kopi Brown Sugar" : "",
    items: r,
    overheads: [],
    overheadsActive: !0,
    target: "",
    pricing: { percent: 45, customPrice: "" },
    marginActive: !0,
    updatedAt: null,
  };
}
const hw = () => ({
  id: Ra(),
  name: "",
  price: "",
  packQty: 1,
  usage: 1,
  packUnit: "g",
  usageUnit: "g",
  kind: "ingredient",
  active: !0,
});
function Jd(l) {
  const r = sl(),
    o = l.pricing ?? {},
    s = Number(o.percent),
    f =
      o.mode === "markup" && Number.isFinite(s) && s >= 0
        ? (s / (100 + s)) * 100
        : (o.percent ?? r.pricing.percent);
  return {
    ...r,
    id: typeof l.id == "string" ? l.id : r.id,
    name: String(l.name ?? l.recipe ?? ""),
    items: (Array.isArray(l.items) ? l.items : []).map((u) => ({
      id: typeof u.id == "string" ? u.id : Ra(),
      name: String(u.name ?? ""),
      price: u.price ?? "",
      packQty: u.packQty ?? "",
      usage: u.usage ?? "",
      packUnit: Kl.includes(u.packUnit)
        ? u.packUnit
        : Kl.includes(u.unit)
          ? u.unit
          : "ml",
      usageUnit: Kl.includes(u.usageUnit)
        ? u.usageUnit
        : Kl.includes(u.unit)
          ? u.unit
          : "ml",
      kind: u.kind === "packaging" ? "packaging" : "ingredient",
      active: u.active !== !1,
    })),
    overheads: (Array.isArray(l.overheads) ? l.overheads : []).map((u) => ({
      id: typeof u.id == "string" ? u.id : Ra(),
      name: String(u.name ?? ""),
      amount: u.amount ?? "",
      period: u.period === "portion" ? "portion" : "month",
    })),
    target: l.target ?? "",
    overheadsActive: l.overheadsActive !== !1,
    pricing: {
      percent: f,
      customPrice:
        o.customPrice !== void 0 && o.customPrice !== "" && ol(o.customPrice, 1)
          ? Number(o.customPrice)
          : "",
    },
    marginActive: l.marginActive !== !1,
    updatedAt: l.updatedAt ?? null,
  };
}
function sh(l) {
  if (!l.active) return { cost: 0, error: null };
  if (R1[l.packUnit] !== R1[l.usageUnit])
    return {
      cost: null,
      error: "Samakan jenis satuan (berat, volume, atau pcs).",
    };
  if (!ol(l.packQty, Number.MIN_VALUE))
    return { cost: null, error: "Isi kemasan harus lebih dari 0." };
  if (!ol(l.price) || !ol(l.usage))
    return {
      cost: null,
      error: "Isi harga dan pemakaian dengan angka 0 atau lebih.",
    };
  const r =
    (Number(l.price) * (Number(l.usage) * A1[l.usageUnit])) /
    (Number(l.packQty) * A1[l.packUnit]);
  return Number.isFinite(r) && r <= Number.MAX_SAFE_INTEGER
    ? { cost: r, error: null }
    : { cost: null, error: "Angka terlalu besar untuk dihitung." };
}
function au(l) {
  const r = [],
    o = [];
  let s = 0,
    f = 0,
    u = 0,
    d = 0,
    v = 0;
  for (const [P, U] of l.items.entries()) {
    U.active && v++;
    const Q = sh(U);
    Q.error
      ? r.push(`${U.name || `Bahan ${P + 1}`}: ${Q.error}`)
      : U.kind === "packaging"
        ? (f += Q.cost)
        : (s += Q.cost);
  }
  const g = l.overheadsActive !== !1;
  for (const [P, U] of l.overheads.entries())
    U.amount === "" ||
      U.amount === null ||
      (ol(U.amount)
        ? U.period === "month"
          ? (u += Number(U.amount))
          : (d += Number(U.amount))
        : g &&
          o.push(
            `${U.name || `Biaya ${P + 1}`}: nominal diabaikan karena belum valid.`
          ));
  const b = ol(l.target, Number.MIN_VALUE);
  g &&
    u > 0 &&
    !b &&
    o.push("Isi target cup per bulan untuk memasukkan biaya bulanan ke HPP.");
  const y = u > 0 && b ? u / Number(l.target) : 0,
    h = g ? d + y : 0,
    x = l.marginActive !== !1,
    { percent: E, customPrice: w } = l.pricing || {},
    T = x && ol(w, 1);
  v || r.push("Tambahkan setidaknya satu komponen aktif.");
  const N = s + f + h;
  ((!Number.isFinite(N) || N > Number.MAX_SAFE_INTEGER) &&
    r.push("Total biaya terlalu besar untuk dihitung."),
    x &&
      !T &&
      !ol(E, 0, 99.99) &&
      r.push("Margin harus antara 0 dan kurang dari 100%."),
    N <= 0 &&
      r.push("Tambahkan biaya aktif agar HPP dan harga jual dapat dihitung."));
  let R = null,
    M = null,
    _ = null;
  const j = r.some((P) =>
      /Samakan jenis satuan|Isi kemasan|Isi harga|Angka terlalu besar/.test(P)
    ),
    G =
      v > 0 &&
      !j &&
      Number.isFinite(N) &&
      N <= Number.MAX_SAFE_INTEGER &&
      N > 0;
  if (G && (!x || T || !r.some((P) => P.includes("Margin harus")))) {
    if (T)
      ((R = Math.round(Number(w))),
        (M = R - N),
        (_ = R > 0 ? (M / R) * 100 : 0));
    else {
      const P = x ? Number(E) : 0;
      ((R = Math.ceil(N / (1 - P / 100))),
        (M = R - N),
        (_ = R > 0 ? (M / R) * 100 : 0));
    }
    (![R, M, _].every(Number.isFinite) || R > Number.MAX_SAFE_INTEGER) &&
      (r.push("Hasil terlalu besar. Kurangi nilai biaya atau margin."),
      (R = M = _ = null));
  }
  return {
    ingredients: j ? null : s,
    packaging: j ? null : f,
    monthly: u,
    overhead: j ? null : h,
    overheadsActive: g,
    marginActive: x,
    unallocatedMonthly: g && y === 0 ? u : 0,
    cost: G ? N : null,
    price: R,
    profit: M,
    margin: _,
    errors: r,
    overheadWarnings: o,
    lowMargin: x && _ !== null && _ < 30,
    lossWarning: x && R !== null && G && M < 0,
  };
}
function pw(l = localStorage) {
  let r;
  try {
    r = l.getItem(RS);
  } catch {
    return {
      draft: sl(!0),
      menus: [],
      issue:
        "Penyimpanan browser tidak dapat dibaca. Perubahan hanya tersedia selama halaman terbuka.",
      blocked: !0,
    };
  }
  if (r)
    try {
      const o = JSON.parse(r);
      if (o.schema !== 2 || !o.draft || !Array.isArray(o.menus))
        throw new Error("invalid");
      return {
        draft: Jd(o.draft),
        menus: o.menus.map(Jd),
        issue: "",
        blocked: !1,
      };
    } catch {
      return {
        draft: sl(!0),
        menus: [],
        issue:
          "Data tersimpan tidak dapat dibaca. Data asli dipertahankan; penyimpanan dinonaktifkan agar tidak tertimpa.",
        blocked: !0,
      };
    }
  try {
    const o = l.getItem(mw);
    if (o) {
      const s = JSON.parse(o);
      if (!Array.isArray(s.items)) throw new Error("invalid legacy");
      return { draft: Jd(s), menus: [], issue: "", blocked: !1, migrated: !0 };
    }
  } catch {
    return {
      draft: sl(!0),
      menus: [],
      issue:
        "Resep lama tidak dapat dibaca. Data lama dipertahankan; penyimpanan dinonaktifkan agar aman.",
      blocked: !0,
    };
  }
  return { draft: sl(!0), menus: [], issue: "", blocked: !1 };
}
function _1(l, r, o = localStorage) {
  o.setItem(RS, JSON.stringify({ schema: 2, draft: l, menus: r }));
}
function tr({
  value: l,
  onChange: r,
  money: o = !1,
  label: s,
  id: f,
  min: u = 0,
  max: d,
  suffix: v,
  invalid: g = !1,
  ...b
}) {
  const y = m.useRef(null),
    h = m.useRef(null);
  m.useLayoutEffect(() => {
    o &&
      h.current !== null &&
      y.current === document.activeElement &&
      (y.current.setSelectionRange(h.current, h.current), (h.current = null));
  });
  function x(E) {
    const w = E.target.value;
    if (!o) {
      r(w === "" ? "" : w);
      return;
    }
    const T = w
        .slice(0, E.target.selectionStart ?? w.length)
        .replace(/\D/g, "").length,
      N = w.replace(/\D/g, "").slice(0, 12),
      R = N ? O1(Number(N)) : "";
    let M = 0,
      _ = 0;
    for (; _ < R.length && M < T;) (/\d/.test(R[_]) && M++, _++);
    ((h.current = _), r(N ? Number(N) : ""));
  }
  return S.jsxs(Vo, {
    ...b,
    ref: y,
    id: f,
    "aria-label": s,
    "aria-invalid": g || void 0,
    type: o ? "text" : "number",
    inputMode: o ? "numeric" : "decimal",
    min: o ? void 0 : u,
    max: o ? void 0 : d,
    step: o ? void 0 : "any",
    value: o ? O1(l) : l,
    onChange: x,
    className: "numeric-input",
    size: "3",
    children: [
      o && S.jsx(vm, { children: "Rp" }),
      v && S.jsx(vm, { side: "right", children: v }),
    ],
  });
}
function $l({ label: l, hint: r, children: o, error: s, className: f = "" }) {
  const u = m.useId();
  return S.jsxs("div", {
    className: `field ${f}`,
    children: [
      S.jsx("label", { htmlFor: u, children: l }),
      o(u),
      r && S.jsx("small", { id: `${u}-hint`, children: r }),
      s && S.jsx("small", { className: "field-error", children: s }),
    ],
  });
}
function _c({
  value: l,
  onChange: r,
  options: o,
  label: s,
  id: f,
  size: u = "3",
}) {
  return S.jsxs(bS, {
    value: String(l),
    onValueChange: r,
    size: u,
    children: [
      S.jsx(SS, { id: f, "aria-label": s }),
      S.jsx(xS, {
        position: "popper",
        align: "start",
        collisionPadding: 8,
        className: "compact-select-content",
        children: o.map((d) => {
          const v = typeof d == "string" ? { value: d, label: d } : d;
          return S.jsx(
            CS,
            { value: String(v.value), children: v.label },
            v.value
          );
        }),
      }),
    ],
  });
}
function AS({ label: l, className: r = "", children: o, ...s }) {
  return S.jsx(lh, {
    ...s,
    className: `icon-action ${r}`.trim(),
    variant: "ghost",
    color: "gray",
    "aria-label": l,
    title: l,
    children: o,
  });
}
function vw({ items: l, onChange: r, notify: o }) {
  const s = (u, d) => r(l.map((v, g) => (g === u ? { ...v, ...d } : v))),
    f = (u) => {
      const d = l[u];
      (r(l.filter((v, g) => g !== u)),
        o("Komponen dihapus.", () =>
          r((v) => {
            const g = [...v];
            return (g.splice(Math.min(u, g.length), 0, d), g);
          })
        ));
    };
  return S.jsxs("section", {
    className: "panel ingredients-panel",
    "aria-labelledby": "recipe-heading",
    children: [
      S.jsxs("div", {
        className: "panel-heading",
        children: [
          S.jsx("h2", { id: "recipe-heading", children: "Bahan & kemasan" }),
          S.jsxs(iS, {
            color: "gray",
            variant: "soft",
            children: [
              l.filter((u) => u.active).length,
              "/",
              l.length,
              " aktif",
            ],
          }),
        ],
      }),
      S.jsx("div", {
        className: "table-scroll",
        role: "region",
        "aria-label": "Tabel bahan dan kemasan",
        tabIndex: 0,
        children: S.jsxs("table", {
          className: "ingredients-table",
          children: [
            S.jsxs("colgroup", {
              children: [
                S.jsx("col", { className: "ingredient-name-col" }),
                S.jsx("col", { className: "ingredient-price-col" }),
                S.jsx("col", { className: "ingredient-size-col" }),
                S.jsx("col", { className: "ingredient-size-col" }),
                S.jsx("col", { className: "ingredient-cost-col" }),
              ],
            }),
            S.jsx("thead", {
              children: S.jsxs("tr", {
                children: [
                  S.jsx("th", { scope: "col", children: "Komponen" }),
                  S.jsx("th", { scope: "col", children: "Harga beli" }),
                  S.jsx("th", { scope: "col", children: "Isi kemasan" }),
                  S.jsx("th", { scope: "col", children: "Pakai / cup" }),
                  S.jsx("th", { scope: "col", children: "Biaya / cup" }),
                ],
              }),
            }),
            S.jsxs("tbody", {
              children: [
                l.map((u, d) => {
                  const v = sh(u);
                  return S.jsxs(
                    "tr",
                    {
                      className: u.active ? "" : "inactive-row",
                      children: [
                        S.jsxs("td", {
                          children: [
                            S.jsx(Vo, {
                              size: "3",
                              value: u.name,
                              onChange: (g) => s(d, { name: g.target.value }),
                              "aria-label": `Nama komponen ${d + 1}`,
                              placeholder: "Nama bahan",
                              title: u.name,
                            }),
                            S.jsxs("div", {
                              className: "row-options",
                              children: [
                                S.jsx(_c, {
                                  value: u.kind,
                                  onChange: (g) => s(d, { kind: g }),
                                  label: `Jenis ${u.name || d + 1}`,
                                  options: [
                                    { value: "ingredient", label: "Bahan" },
                                    { value: "packaging", label: "Kemasan" },
                                  ],
                                }),
                                S.jsx("label", {
                                  className: "switch-label",
                                  children: S.jsx(nu, {
                                    size: "1",
                                    checked: u.active,
                                    onCheckedChange: (g) => s(d, { active: g }),
                                    "aria-label": `Sertakan ${u.name || "komponen"} dalam perhitungan`,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        S.jsx("td", {
                          children: S.jsx(tr, {
                            money: !0,
                            value: u.price,
                            onChange: (g) => s(d, { price: g }),
                            label: `Harga beli ${u.name || d + 1}`,
                          }),
                        }),
                        S.jsx("td", {
                          children: S.jsxs("div", {
                            className: "quantity-input",
                            children: [
                              S.jsx(tr, {
                                value: u.packQty,
                                onChange: (g) => s(d, { packQty: g }),
                                label: `Isi kemasan ${u.name || d + 1}`,
                                invalid: u.active && !(Number(u.packQty) > 0),
                              }),
                              S.jsx(_c, {
                                value: u.packUnit,
                                onChange: (g) => s(d, { packUnit: g }),
                                options: Kl,
                                label: `Satuan kemasan ${u.name || d + 1}`,
                              }),
                            ],
                          }),
                        }),
                        S.jsx("td", {
                          children: S.jsxs("div", {
                            className: "quantity-input",
                            children: [
                              S.jsx(tr, {
                                value: u.usage,
                                onChange: (g) => s(d, { usage: g }),
                                label: `Pemakaian ${u.name || d + 1}`,
                              }),
                              S.jsx(_c, {
                                value: u.usageUnit,
                                onChange: (g) => s(d, { usageUnit: g }),
                                options: Kl,
                                label: `Satuan pemakaian ${u.name || d + 1}`,
                              }),
                            ],
                          }),
                        }),
                        S.jsxs("td", {
                          children: [
                            S.jsxs("div", {
                              className: "row-result",
                              children: [
                                S.jsx("strong", {
                                  className: v.error ? "field-error" : "",
                                  children: u.active
                                    ? v.error
                                      ? "Periksa input"
                                      : Jt(v.cost)
                                    : "Tidak dihitung",
                                }),
                                S.jsx(AS, {
                                  className: "row-delete",
                                  onClick: () => f(d),
                                  label: `Hapus ${u.name || "komponen"}`,
                                  children: S.jsx(NS, {}),
                                }),
                              ],
                            }),
                            v.error &&
                              S.jsx("small", {
                                className: "field-error row-error",
                                children: v.error,
                              }),
                          ],
                        }),
                      ],
                    },
                    u.id
                  );
                }),
                !l.length &&
                  S.jsx("tr", {
                    children: S.jsx("td", {
                      colSpan: 5,
                      className: "empty-table",
                      children:
                        "Belum ada bahan. Tambahkan bahan pertama untuk mulai menghitung.",
                    }),
                  }),
              ],
            }),
          ],
        }),
      }),
      S.jsx("div", {
        className: "panel-footer",
        children: S.jsxs(Ft, {
          variant: "soft",
          onClick: () => r([...l, hw()]),
          children: [S.jsx(Uc, {}), "Tambah bahan"],
        }),
      }),
    ],
  });
}
const gw = ["Sewa tempat", "Gaji karyawan", "Listrik & air"],
  yw = [
    { value: "month", label: "Bulan" },
    { value: "portion", label: "Cup" },
  ];
function bw({ menu: l, update: r, result: o, notify: s }) {
  const f = l.overheadsActive !== !1,
    u = (y) =>
      r((h) => ({ overheads: typeof y == "function" ? y(h.overheads) : y })),
    d = (y, h) => u(l.overheads.map((x, E) => (E === y ? { ...x, ...h } : x))),
    v = (y = "") =>
      u([...l.overheads, { id: Ra(), name: y, amount: "", period: "month" }]),
    g = (y) => {
      const h = l.overheads[y];
      (u(l.overheads.filter((x, E) => E !== y)),
        s("Biaya dihapus.", () =>
          u((x) => {
            const E = [...x];
            return (E.splice(Math.min(y, E.length), 0, h), E);
          })
        ));
    },
    b =
      o.monthly > 0 && Number(l.target) > 0
        ? Jt(o.monthly) +
          " ÷ " +
          Number(l.target).toLocaleString("id-ID") +
          " cup"
        : o.monthly > 0
          ? "Belum dialokasikan"
          : Jt(0);
  return S.jsxs("div", {
    className: "summary-subpanel overhead-subpanel" + (f ? "" : " is-inactive"),
    id: "overheads",
    children: [
      S.jsxs("div", {
        className: "subpanel-header",
        children: [
          S.jsxs("div", {
            className: "subpanel-title-group",
            children: [
              S.jsx("h3", {
                className: "subpanel-title",
                children: "Biaya operasional",
              }),
              S.jsx("span", {
                className: "subpanel-meta",
                children: f
                  ? o.overhead > 0
                    ? `${Jt(o.overhead)} / cup`
                    : "Opsional (Rp 0)"
                  : "Tidak dihitung",
              }),
            ],
          }),
          S.jsxs("label", {
            className: "section-toggle",
            children: [
              S.jsx(nu, {
                size: "1",
                checked: f,
                onCheckedChange: (y) => r({ overheadsActive: y }),
                "aria-label": "Aktifkan biaya operasional",
              }),
              S.jsx("span", { children: f ? "Aktif" : "Nonaktif" }),
            ],
          }),
        ],
      }),
      S.jsxs("details", {
        className: "subpanel-details",
        children: [
          S.jsxs("summary", {
            className: "subpanel-summary",
            children: [
              S.jsx("span", { children: "Atur rincian biaya" }),
              S.jsx(W4, { "aria-hidden": "true" }),
            ],
          }),
          S.jsx("fieldset", {
            className: "subpanel-fields",
            disabled: !f,
            children: S.jsxs("div", {
              className: "subpanel-body",
              children: [
                S.jsxs("div", {
                  className: "target-block-compact",
                  children: [
                    S.jsx($l, {
                      label: "Target cup / bulan",
                      children: (y) =>
                        S.jsx(tr, {
                          id: y,
                          size: "2",
                          label: "Target cup per bulan",
                          value: l.target,
                          min: 1,
                          onChange: (h) => r({ target: h }),
                          suffix: "cup",
                          placeholder: "Opsional",
                        }),
                    }),
                    S.jsxs("div", {
                      className: "monthly-cost-compact",
                      "aria-live": "polite",
                      children: [
                        S.jsx("span", { children: "Biaya bulanan" }),
                        S.jsx("strong", { children: b }),
                      ],
                    }),
                  ],
                }),
                !l.overheads.length &&
                  S.jsxs("div", {
                    className: "empty-overhead-compact",
                    children: [
                      S.jsx("span", {
                        className: "quick-add-title",
                        children: "Tambah biaya umum:",
                      }),
                      S.jsx("div", {
                        className: "quick-add",
                        role: "group",
                        "aria-label": "Tambah biaya umum",
                        children: gw.map((y) =>
                          S.jsxs(
                            Ft,
                            {
                              className: "quick-add-chip",
                              size: "1",
                              variant: "outline",
                              color: "gray",
                              onClick: () => v(y),
                              children: [
                                S.jsx(Uc, { "aria-hidden": "true" }),
                                y,
                              ],
                            },
                            y
                          )
                        ),
                      }),
                    ],
                  }),
                S.jsx("div", {
                  className: "overhead-list-compact",
                  children: l.overheads.map((y, h) =>
                    S.jsxs(
                      "div",
                      {
                        className: "overhead-item-card",
                        children: [
                          S.jsxs("div", {
                            className: "overhead-item-header",
                            children: [
                              S.jsx($l, {
                                label: "Nama biaya",
                                children: (x) =>
                                  S.jsx(Vo, {
                                    size: "2",
                                    id: x,
                                    value: y.name,
                                    onChange: (E) =>
                                      d(h, { name: E.target.value }),
                                    placeholder: "Contoh: Sewa tempat",
                                  }),
                              }),
                              S.jsx(AS, {
                                className: "overhead-delete",
                                label: "Hapus biaya " + (y.name || h + 1),
                                onClick: () => g(h),
                                children: S.jsx(NS, { "aria-hidden": "true" }),
                              }),
                            ],
                          }),
                          S.jsxs("div", {
                            className: "overhead-item-inputs",
                            children: [
                              S.jsx($l, {
                                label: "Nominal",
                                children: (x) =>
                                  S.jsx(tr, {
                                    id: x,
                                    money: !0,
                                    size: "2",
                                    label: "Nominal " + (y.name || "biaya"),
                                    value: y.amount,
                                    onChange: (E) => d(h, { amount: E }),
                                  }),
                              }),
                              S.jsx($l, {
                                label: "Dihitung per",
                                children: (x) =>
                                  S.jsx(_c, {
                                    id: x,
                                    size: "2",
                                    value: y.period,
                                    onChange: (E) => d(h, { period: E }),
                                    options: yw,
                                    label: "Periode " + (y.name || "biaya"),
                                  }),
                              }),
                            ],
                          }),
                        ],
                      },
                      y.id
                    )
                  ),
                }),
                S.jsx("div", {
                  className: "subpanel-footer",
                  children: S.jsxs(Ft, {
                    size: "1",
                    variant: "soft",
                    onClick: () => v(),
                    children: [
                      S.jsx(Uc, { "aria-hidden": "true" }),
                      "Tambah biaya",
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const Sw = [
  { name: "Kompetitif", value: 25 },
  { name: "Standar", value: 45 },
  { name: "Premium", value: 65 },
];
function xw({ menu: l, update: r, result: o }) {
  const s = l.marginActive !== !1,
    f = l.pricing,
    u = o.cost ?? 0,
    d =
      f.customPrice && u > 0 && o.margin !== null
        ? Number(o.margin.toFixed(2))
        : f.percent,
    v = Number(d),
    g = Math.min(90, Math.max(0, Math.round(v || 0))),
    b = (E) => {
      r((w) => ({ pricing: { ...w.pricing, percent: E, customPrice: "" } }));
    },
    y = ([E]) => {
      r((w) => ({ pricing: { ...w.pricing, percent: E, customPrice: "" } }));
    },
    h = (E) => {
      r((w) => ({ pricing: { ...w.pricing, percent: E, customPrice: "" } }));
    },
    x = (E) => {
      if (E === "" || E === null) {
        r((T) => ({ pricing: { ...T.pricing, customPrice: "" } }));
        return;
      }
      const w = Number(E);
      if (u > 0 && w > 0) {
        const T = ((w - u) / w) * 100,
          N = Number(Math.max(0, Math.min(99.99, T)).toFixed(2));
        r((R) => ({ pricing: { ...R.pricing, customPrice: w, percent: N } }));
      } else r((T) => ({ pricing: { ...T.pricing, customPrice: w } }));
    };
  return S.jsxs("div", {
    className: "summary-subpanel pricing-subpanel" + (s ? "" : " is-inactive"),
    id: "pricing",
    children: [
      S.jsxs("div", {
        className: "subpanel-header",
        children: [
          S.jsxs("div", {
            className: "subpanel-title-group",
            children: [
              S.jsx("h3", {
                className: "subpanel-title",
                children: "Margin keuntungan",
              }),
              S.jsx("span", {
                className: "subpanel-meta",
                children: s ? `${oh(d)}%` : "Nonaktif",
              }),
            ],
          }),
          S.jsxs("label", {
            className: "section-toggle",
            children: [
              S.jsx(nu, {
                size: "1",
                checked: s,
                onCheckedChange: (E) => r({ marginActive: E }),
                "aria-label": "Aktifkan margin keuntungan",
              }),
              S.jsx("span", { children: s ? "Aktif" : "Nonaktif" }),
            ],
          }),
        ],
      }),
      s
        ? S.jsxs("fieldset", {
            className: "subpanel-fields pricing-fields",
            disabled: !s,
            children: [
              S.jsx("div", {
                className: "profit-presets",
                role: "group",
                "aria-label": "Pilihan margin",
                children: Sw.map((E) => {
                  const w = !f.customPrice && v === E.value;
                  return S.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "preset" + (w ? " selected" : ""),
                      "aria-pressed": w,
                      onClick: () => b(E.value),
                      children: [
                        S.jsx("span", { children: E.name }),
                        S.jsxs("strong", { children: [E.value, "%"] }),
                      ],
                    },
                    E.name
                  );
                }),
              }),
              S.jsxs("div", {
                className: "slider-field",
                children: [
                  S.jsxs("div", {
                    className: "slider-label-row",
                    children: [
                      S.jsx("label", {
                        id: "profit-slider-label",
                        children: "Atur margin",
                      }),
                      S.jsxs("span", {
                        className: "slider-value-badge",
                        children: [g, "%"],
                      }),
                    ],
                  }),
                  S.jsx(ES, {
                    "aria-labelledby": "profit-slider-label",
                    value: [g],
                    min: 0,
                    max: 90,
                    step: 1,
                    onValueChange: y,
                  }),
                  S.jsxs("div", {
                    className: "slider-scale",
                    "aria-hidden": "true",
                    children: [
                      S.jsx("span", { children: "0%" }),
                      S.jsx("span", { children: "90%" }),
                    ],
                  }),
                ],
              }),
              S.jsxs("div", {
                className: "pricing-inputs-grid",
                children: [
                  S.jsx($l, {
                    label: "Custom harga jual",
                    children: (E) =>
                      S.jsx(tr, {
                        id: E,
                        money: !0,
                        size: "2",
                        label: "Custom harga jual",
                        value: f.customPrice,
                        onChange: x,
                        placeholder: o.price
                          ? String(o.price)
                          : "Contoh: 15.000",
                      }),
                  }),
                  S.jsx($l, {
                    label: "Nilai margin",
                    children: (E) =>
                      S.jsx(tr, {
                        id: E,
                        size: "2",
                        label: "Margin keuntungan",
                        value: d,
                        onChange: h,
                        max: 99.99,
                        suffix: "%",
                      }),
                  }),
                ],
              }),
            ],
          })
        : S.jsx("p", {
            className: "subpanel-inactive-note",
            children: "Harga jual mengikuti total HPP (margin 0%).",
          }),
    ],
  });
}
function Cw({
  menu: l,
  update: r,
  result: o,
  canCopy: s,
  onCopy: f,
  notify: u,
}) {
  const d = o.cost !== null && o.price !== null,
    v = l.overheadsActive !== !1;
  return S.jsx("aside", {
    className: "summary-column",
    "aria-labelledby": "summary-title",
    children: S.jsx("section", {
      className: "panel summary-panel",
      id: "summary",
      children: S.jsxs("div", {
        className: "summary-body",
        children: [
          S.jsx("div", {
            className: "summary-section overhead-section",
            children: S.jsx(bw, { menu: l, update: r, result: o, notify: u }),
          }),
          S.jsx("div", {
            className: "summary-section pricing-section",
            children: S.jsx(xw, { menu: l, update: r, result: o }),
          }),
          S.jsxs("div", {
            className: "summary-section summary-final-section",
            children: [
              S.jsx("div", {
                className: "final-summary-header",
                children: S.jsx("h2", {
                  id: "summary-title",
                  className: "summary-main-title",
                  children: "Ringkasan / cup",
                }),
              }),
              S.jsxs("dl", {
                className: "cost-breakdown",
                children: [
                  S.jsxs("div", {
                    children: [
                      S.jsx("dt", { children: "Bahan baku" }),
                      S.jsx("dd", { children: Jt(o.ingredients) }),
                    ],
                  }),
                  S.jsxs("div", {
                    children: [
                      S.jsx("dt", { children: "Kemasan" }),
                      S.jsx("dd", { children: Jt(o.packaging) }),
                    ],
                  }),
                  S.jsxs("div", {
                    children: [
                      S.jsx("dt", { children: "Operasional / cup" }),
                      S.jsx("dd", { children: v ? Jt(o.overhead) : "Rp 0" }),
                    ],
                  }),
                  S.jsxs("div", {
                    className: "total-cost",
                    children: [
                      S.jsx("dt", { children: "Total HPP" }),
                      S.jsx("dd", { id: "grand-total", children: Jt(o.cost) }),
                    ],
                  }),
                ],
              }),
              d
                ? S.jsxs("div", {
                    className: "price-results-block",
                    children: [
                      S.jsxs("div", {
                        className: "recommended-price",
                        children: [
                          S.jsx("span", { children: "Harga jual / cup" }),
                          S.jsx("strong", {
                            id: "selling-price",
                            children: Jt(o.price),
                          }),
                        ],
                      }),
                      S.jsxs("dl", {
                        className: "cost-breakdown profit-breakdown",
                        children: [
                          S.jsxs("div", {
                            className: "profit-row",
                            children: [
                              S.jsx("dt", { children: "Estimasi laba" }),
                              S.jsx("dd", {
                                id: "net-profit",
                                children: Jt(o.profit),
                              }),
                            ],
                          }),
                          S.jsxs("div", {
                            children: [
                              S.jsx("dt", { children: "Margin aktual" }),
                              S.jsxs("dd", { children: [oh(o.margin), "%"] }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : S.jsx("p", {
                    className: "price-unavailable",
                    children:
                      "Tambahkan bahan untuk menghitung total HPP dan harga jual.",
                  }),
              o.lossWarning &&
                S.jsxs(Jl, {
                  color: "red",
                  className: "summary-warning",
                  size: "1",
                  children: [
                    S.jsx(Wl, { children: S.jsx(fi, {}) }),
                    S.jsx(er, {
                      children:
                        "Harga jual lebih rendah dari total HPP (rugi).",
                    }),
                  ],
                }),
              o.unallocatedMonthly > 0 &&
                S.jsxs(Jl, {
                  className: "summary-warning",
                  size: "1",
                  children: [
                    S.jsx(Wl, { children: S.jsx(fi, {}) }),
                    S.jsx(er, {
                      children:
                        "Isi target cup per bulan untuk alokasi biaya bulanan ke HPP.",
                    }),
                  ],
                }),
              o.overheadWarnings.length > 0 &&
                S.jsxs(Jl, {
                  color: "amber",
                  className: "summary-warning",
                  size: "1",
                  children: [
                    S.jsx(Wl, { children: S.jsx(fi, {}) }),
                    S.jsx(er, { children: o.overheadWarnings.join(" ") }),
                  ],
                }),
              o.errors.length > 0 &&
                S.jsxs("div", {
                  className: "calculation-errors",
                  role: "status",
                  children: [
                    S.jsx("strong", { children: "Periksa bahan" }),
                    S.jsx("ul", {
                      children: o.errors.map((g) =>
                        S.jsx("li", { children: g }, g)
                      ),
                    }),
                  ],
                }),
              S.jsx("div", {
                className: "save-actions",
                children: S.jsxs(Ft, {
                  highContrast: !0,
                  size: "3",
                  onClick: f,
                  disabled: !s,
                  className: "copy-btn-block",
                  children: [S.jsx(TS, {}), "Salin tabel HPP"],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const Ew = (l) =>
    String(l ?? "")
      .replace(/[\r\n\t]/g, " ")
      .trim(),
  Tn = (l) => String(Math.round(Number(l) || 0)),
  D1 = (l) =>
    new Intl.NumberFormat("id-ID", {
      maximumFractionDigits: 12,
      useGrouping: !1,
    }).format(Number(l) || 0),
  Eo = (l) =>
    String(l ?? "").replace(
      /[&<>"]/g,
      (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[r]
    ),
  M1 = (l) => {
    const r = Ew(l);
    return /^[=+@-]/.test(r) ? "'" + r : r;
  };
function ch(l) {
  const r = au(l),
    s = l.items
      .filter((v) => v.active)
      .map((v, g) => ({
        index: g,
        isItem: !0,
        cells: [
          "1",
          M1(l.name || "(tanpa nama)"),
          M1(v.name || "(tanpa nama)"),
          Tn(v.price),
          D1(v.packQty) + " " + v.packUnit,
          D1(v.usage) + " " + v.usageUnit,
          Tn(sh(v).cost),
        ],
      })),
    f = s.reduce((v, g) => v + Number(g.cells[6]), 0);
  l.overheadsActive !== !1 &&
    r.overhead > 0 &&
    s.push({
      isOverhead: !0,
      isSummary: !0,
      cells: ["", "", "", "", "", "Biaya Operasional / Cup", Tn(r.overhead)],
    });
  const d = r.cost !== null ? Tn(r.cost) : String(f);
  return (
    s.push({
      total: !0,
      isSummary: !0,
      cells: ["", "", "", "", "", "TOTAL HPP / CUP", d],
    }),
    r.price !== null &&
      (s.push({
        isPrice: !0,
        isSummary: !0,
        cells: ["", "", "", "", "", "Harga Jual", Tn(r.price)],
      }),
      s.push({
        isProfit: !0,
        isSummary: !0,
        cells: ["", "", "", "", "", "Estimasi laba", Tn(r.profit)],
      }),
      s.push({
        isMargin: !0,
        isSummary: !0,
        cells: ["", "", "", "", "", "Margin aktual", oh(r.margin) + "%"],
      })),
    s
  );
}
function ww(l) {
  const r = au(l);
  return r.cost !== null
    ? r.cost
    : ch(l)
        .filter((o) => o.isItem)
        .reduce((o, s) => o + Number(s.cells[6]), 0);
}
function Tw(l) {
  const r = [
      "No",
      "Menu",
      "Komposisi",
      "Harga Beli Kemasan",
      "Ukuran Kemasan",
      "Takaran / Cup",
      "HPP / Porsi",
    ],
    o = ch(l).map((s) =>
      s.cells
        .map((f, u) =>
          f === ""
            ? f
            : (s.isItem && (u === 3 || u === 6)) ||
                (s.isSummary && u === 6 && !s.isMargin)
              ? Tn(f)
              : f
        )
        .join("	")
    );
  return [r.join("	"), ...o].join(`
`);
}
function Nw(l) {
  const r = ch(l),
    o = r.filter((v) => v.isItem).length,
    f =
      "<tr>" +
      [
        "No",
        "Menu",
        "Komposisi",
        "Harga Beli Kemasan",
        "Ukuran Kemasan",
        "Takaran / Cup",
        "HPP / Porsi",
      ]
        .map(
          (v) =>
            '<th style="border:1px solid #173f73;padding:6px 8px;vertical-align:middle;text-align:center;background:#214e78;color:#fff;font-weight:bold">' +
            Eo(v) +
            "</th>"
        )
        .join("") +
      "</tr>";
  let u = !0;
  const d = r
    .map((v) => {
      if (v.isItem)
        return (
          "<tr>" +
          v.cells
            .map((y, h) => {
              if (h < 2) {
                if (v.index > 0) return "";
                const N = [
                    "border:1px solid #d8dee8",
                    "padding:5px 8px",
                    "vertical-align:middle",
                    "mso-vertical-align-alt:middle",
                    h === 0 ? "text-align:center" : "text-align:left",
                  ].join(";"),
                  R = h === 0 ? "center" : "left";
                return (
                  '<td rowspan="' +
                  o +
                  '" valign="middle" align="' +
                  R +
                  '" style="' +
                  N +
                  '">' +
                  Eo(y) +
                  "</td>"
                );
              }
              const x = h === 3 || h === 6,
                E = [
                  "border:1px solid #d8dee8",
                  "padding:5px 8px",
                  "vertical-align:middle",
                  x ? "text-align:right" : "text-align:left",
                  x ? 'mso-number-format:"\\#\\,\\#\\#0"' : "",
                ]
                  .filter(Boolean)
                  .join(";"),
                w = x && y !== "" ? ' x:num="' + Tn(y) + '"' : "",
                T = x && y !== "" ? Tn(y) : y;
              return "<td" + w + " style='" + E + "'>" + Eo(T) + "</td>";
            })
            .join("") +
          "</tr>"
        );
      const g = u;
      g && (u = !1);
      const b = g ? "border-top:2px solid #173f73;" : "";
      return (
        "<tr>" +
        v.cells
          .map((y, h) => {
            if (h < 5)
              return '<td style="border:1px solid #d8dee8;' + b + '"></td>';
            if (h === 5)
              return (
                '<td style="' +
                [
                  "border:1px solid #d8dee8",
                  b,
                  "padding:5px 8px",
                  "vertical-align:middle",
                  "text-align:left",
                  "font-weight:bold",
                ]
                  .filter(Boolean)
                  .join(";") +
                '">' +
                Eo(y) +
                "</td>"
              );
            const x = v.isMargin,
              E = x ? null : Tn(y),
              w = [
                "border:1px solid #d8dee8",
                b,
                "padding:5px 8px",
                "vertical-align:middle",
                "text-align:right",
                "font-weight:bold",
                x ? "" : 'mso-number-format:"\\#\\,\\#\\#0"',
              ]
                .filter(Boolean)
                .join(";"),
              T = !x && E !== "" ? ' x:num="' + E + '"' : "",
              N = !x && E !== "" ? Tn(y) : y;
            return "<td" + T + " style='" + w + "'>" + Eo(N) + "</td>";
          })
          .join("") +
        "</tr>"
      );
    })
    .join("");
  return (
    '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body><table><thead>' +
    f +
    "</thead><tbody>" +
    d +
    "</tbody></table></body></html>"
  );
}
function cl(l, r, o = !1) {
  if (l === "(belum diisi)") return "";
  const s = String(l)
    .replace(/^Rp\s*/i, "")
    .replace(/%$/, "")
    .replace(/\s/g, "");
  if (!/^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(s))
    throw new Error(r + ": format angka tidak dikenali.");
  const f = Number(s.replace(/\./g, "").replace(",", "."));
  if (
    !Number.isFinite(f) ||
    (!o && f < 0) ||
    Math.abs(f) > Number.MAX_SAFE_INTEGER
  )
    throw new Error(r + ": isi angka yang valid.");
  return f;
}
function Vc(l, r) {
  const o = String(l).match(/^(.+)\s+(ml|L|g|kg|pcs)$/);
  if (!o || !Kl.includes(o[2]))
    throw new Error(r + ": sertakan satuan ml, L, g, kg, atau pcs.");
  return [cl(o[1], r), o[2]];
}
function Rw(l) {
  return l
    .split(
      `
`
    )
    .filter((r) => r.includes("|"))
    .map((r) => {
      const s = r
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((f) =>
          f
            .trim()
            .replace(/\*\*/g, "")
            .replace(/__([^_]+)__/g, "$1")
            .replace(/`/g, "")
        );
      return s.length &&
        s.every((f) => /^:?-{3,}:?$/.test(f.replace(/\s/g, "")))
        ? ""
        : s.join("	");
    })
    .filter(Boolean).join(`
`);
}
function j1(l) {
  return /^.+\s+(ml|L|g|kg|pcs)$/i.test(String(l ?? "").trim());
}
function Aw(l) {
  const r = l
      .replace(/^\uFEFF/, "")
      .replace(/\r/g, "")
      .split(
        `
`
      )
      .map((b) => b.split("	").map((y) => y.trim())),
    o =
      (r[0] || [])
        .map((b) => b.toLowerCase())
        .slice(0, 3)
        .join("|") === "no|menu|komposisi",
    s = !o && (r[0] || []).length >= 7 && /^\d+$/.test((r[0] || [])[0] || ""),
    f = sl();
  ((f.items = []), (f.overheads = []), (f.name = ""));
  let u = !1,
    d = "";
  const v = (b, y, h, x, E) => {
      const w = b.startsWith("'") ? b.slice(1) : b,
        T = y.startsWith("'") ? y.slice(1) : y;
      if (!T) return;
      if (f.name && w && f.name !== w)
        throw new Error("Salinan tabel berisi lebih dari satu nama menu.");
      !f.name && w && w !== "(tanpa nama)" && (f.name = w);
      const [N, R] = Vc(x, "Ukuran kemasan"),
        [M, _] = Vc(E, "Takaran / cup"),
        j =
          /cup|gelas|lid|tutup|sedotan|straw|seal|kemasan|stiker|sticker|plastik|plastic/i;
      f.items.push({
        id: Ra(),
        name: T,
        price: cl(h, "Harga beli kemasan"),
        packQty: N,
        packUnit: R,
        usage: M,
        usageUnit: _,
        kind: j.test(T) ? "packaging" : "ingredient",
        active: !0,
      });
    },
    g = o ? r.slice(1) : r;
  for (const b of g)
    if (!b.every((y) => !y))
      if (o || s) {
        const y = [...b, "", "", "", "", "", "", ""].slice(0, 7);
        if (
          y.some((x) => {
            const E = x.toLowerCase();
            return (
              E.includes("total hpp") ||
              E.includes("harga jual") ||
              E.includes("estimasi laba") ||
              E.includes("margin aktual")
            );
          })
        ) {
          if (y[5] && y[5].toLowerCase().includes("harga jual") && y[6])
            try {
              const x = cl(y[6], "Harga Jual");
              x > 0 && (f.pricing.customPrice = x);
            } catch {}
          continue;
        }
        if (y[5].toLowerCase().includes("operasional")) {
          (f.overheads.push({
            id: Ra(),
            name: "Operasional / cup",
            amount: cl(y[6], "Operasional / cup"),
            period: "portion",
          }),
            (u = !0));
          continue;
        }
        if (
          (/^\d+$/.test(y[0]) && y[1] && (d = y[1]),
          y[0] &&
            !/^\d+$/.test(y[0]) &&
            y[1] &&
            /^\d[\d.,]*$/.test(y[1]) &&
            j1(y[2]) &&
            j1(y[3]))
        ) {
          v(d, y[0], y[1], y[2], y[3]);
          continue;
        }
        const h = y[1] || d;
        h &&
          y[2] &&
          y[3] &&
          y[4] &&
          y[5] &&
          (y[1] && (d = y[1]), v(h, y[2], y[3], y[4], y[5]));
      } else {
        const y = [...b, "", "", "", "", "", ""].slice(0, 6);
        if (y[4].toLowerCase().includes("total hpp")) continue;
        y[0] && y[1] && v(y[0], y[1], y[2], y[3], y[4]);
      }
  if (!f.items.length)
    throw new Error("Tabel belum berisi komponen untuk diimpor.");
  return ((f.overheadsActive = u), (f.marginActive = !0), f);
}
function Ow(l) {
  if (l.length > 1e5)
    throw new Error("Teks terlalu panjang. Maksimal 100.000 karakter.");
  let r = l.replace(/\r/g, "");
  const o = "`".repeat(3);
  if (r.startsWith(o)) {
    const T = r.indexOf(`
`);
    T >= 0 && (r = r.slice(T + 1));
  }
  (r.endsWith(o) && (r = r.slice(0, -o.length)),
    r
      .split(
        `
`
      )
      .some((T) => /^\s*\|.*\|\s*$/.test(T)) && (r = Rw(r)));
  const s = r
    .split(
      `
`
    )[0]
    .trim()
    .replace(/^\uFEFF/, "");
  if (s.toLowerCase().startsWith("no	menu	") || s.includes("	")) return Aw(r);
  const f = r
    .split(
      `
`
    )
    .map((T) => T.trim())
    .filter(Boolean);
  if (!["RESEP HPP-KU", "RESEP KOPTI"].includes(f[0]))
    throw new Error("Tempel tabel HPP atau format resep HPP-Ku yang lama.");
  const u = sl(),
    d = {},
    v = {};
  let g = "head",
    b = null;
  const y = new Set();
  for (const T of f.slice(1)) {
    if (
      [
        "BAHAN AKTIF",
        "OPERASIONAL",
        "OVERHEAD",
        "PENGATURAN",
        "RINGKASAN PER PORSI",
      ].includes(T)
    ) {
      ((g = T), y.add(T), (b = null));
      continue;
    }
    if (
      g === "RINGKASAN PER PORSI" ||
      T.startsWith("Tempel teks ini") ||
      T === "(tidak ada)"
    )
      continue;
    if (
      (g === "BAHAN AKTIF" || g === "OPERASIONAL" || g === "OVERHEAD") &&
      T.startsWith("- ")
    ) {
      const _ = T.slice(2).trim();
      ((b = { id: Ra(), name: _ === "(tanpa nama)" ? "" : _ }),
        g === "BAHAN AKTIF"
          ? ((b.active = !0), u.items.push(b))
          : u.overheads.push(b));
      continue;
    }
    const N = T.indexOf(":");
    if (N < 0) throw new Error("Baris tidak dikenali: " + T.slice(0, 70));
    const R = T.slice(0, N).trim(),
      M = T.slice(N + 1).trim();
    if (g === "head") v[R] = M;
    else if (g === "PENGATURAN") d[R] = M;
    else if (g === "BAHAN AKTIF" && b)
      if (R === "Jenis") {
        if (!["Kemasan", "Bahan"].includes(M))
          throw new Error("Jenis komponen harus Bahan atau Kemasan.");
        b.kind = M === "Kemasan" ? "packaging" : "ingredient";
      } else if (R === "Harga beli") b.price = cl(M, R);
      else if (R === "Isi kemasan") [b.packQty, b.packUnit] = Vc(M, R);
      else if (R === "Pemakaian") [b.usage, b.usageUnit] = Vc(M, R);
      else throw new Error("Kolom bahan tidak dikenali: " + R);
    else if ((g === "OPERASIONAL" || g === "OVERHEAD") && b)
      if (R === "Nominal") b.amount = cl(M, R);
      else if (R === "Periode") {
        if (!["Bulan", "Cup", "Porsi"].includes(M))
          throw new Error("Periode biaya harus Bulan atau Cup.");
        b.period = M === "Bulan" ? "month" : "portion";
      } else throw new Error("Kolom biaya tidak dikenali: " + R);
    else throw new Error("Baris tidak pada bagian yang tepat: " + R);
  }
  if (!v["Nama minuman"] && !v["Nama menu"])
    throw new Error("Nama minuman tidak ditemukan.");
  if (
    !y.has("BAHAN AKTIF") ||
    !(y.has("OPERASIONAL") || y.has("OVERHEAD")) ||
    !y.has("PENGATURAN")
  )
    throw new Error("Salinan resep belum lengkap.");
  for (const T of u.items)
    if (
      ["kind", "price", "packQty", "packUnit", "usage", "usageUnit"].some(
        (N) => T[N] === void 0
      )
    )
      throw new Error("Data bahan “" + T.name + "” belum lengkap.");
  for (const T of u.overheads)
    if (T.amount === void 0 || !T.period)
      throw new Error("Data biaya “" + T.name + "” belum lengkap.");
  const h = String(d.Metode ?? "").toLowerCase(),
    x = d.Margin ?? d["Target keuntungan"];
  if (x === void 0) throw new Error("Margin resep tidak ditemukan.");
  const E = (T, N) => {
    const R = d[T];
    if (R === void 0) return N;
    if (R === "Ya") return !0;
    if (R === "Tidak") return !1;
    throw new Error(T + ": pilih Ya atau Tidak.");
  };
  ((u.name =
    (v["Nama minuman"] ?? v["Nama menu"]) === "(tanpa nama)"
      ? ""
      : (v["Nama minuman"] ?? v["Nama menu"])),
    (u.target = cl(
      d["Target cup/bulan"] ?? d["Target porsi/bulan"] ?? "(belum diisi)",
      "Target cup/bulan",
      !0
    )),
    (u.overheadsActive = E("Operasional aktif", !0)),
    (u.marginActive = E("Margin aktif", !0)));
  const w = cl(x, "Margin");
  return (
    (u.pricing = { percent: h === "markup" ? (w / (100 + w)) * 100 : w }),
    u
  );
}
function _w({ open: l, onOpenChange: r, onImport: o, copyFallback: s }) {
  const [f, u] = m.useState(""),
    d = m.useMemo(() => {
      if (!f.trim()) return {};
      try {
        return { menu: Ow(f) };
      } catch (g) {
        return { error: g.message };
      }
    }, [f]),
    v = d.menu ? au(d.menu) : null;
  return S.jsx(hS, {
    open: l,
    onOpenChange: r,
    children: S.jsxs(pS, {
      maxWidth: "620px",
      children: [
        S.jsx(vS, {
          children: s ? "Salin tabel secara manual" : "Import resep",
        }),
        S.jsx(gS, {
          children: s
            ? "Clipboard tidak tersedia. Pilih dan salin tabel di bawah."
            : "Tempel tabel dari Excel, Markdown, atau hasil Salin tabel. Format resep HPP-Ku lama juga bisa diimpor.",
        }),
        S.jsx("label", {
          className: "paste-label",
          htmlFor: "recipe-paste",
          children: s ? "Tabel HPP" : "Tempel tabel atau resep di sini",
        }),
        S.jsx(wS, {
          id: "recipe-paste",
          size: "3",
          rows: 10,
          value: s || f,
          readOnly: !!s,
          onChange: (g) => u(g.target.value),
          maxLength: 1e5,
          placeholder:
            "No	Menu	Komposisi	Harga Beli Kemasan	Ukuran Kemasan	Takaran / Cup	HPP / Porsi",
          onFocus: (g) => {
            s && g.target.select();
          },
        }),
        !s &&
          d.error &&
          S.jsxs(Jl, {
            color: "red",
            className: "import-feedback",
            children: [
              S.jsx(Wl, { children: S.jsx(fi, {}) }),
              S.jsx(er, { children: d.error }),
            ],
          }),
        !s &&
          d.menu &&
          S.jsxs(Jl, {
            className: "import-feedback",
            children: [
              S.jsx(Wl, { children: S.jsx(gm, {}) }),
              S.jsxs(er, {
                children: [
                  S.jsx("strong", {
                    children: d.menu.name || "Resep tanpa nama",
                  }),
                  S.jsx("br", {}),
                  d.menu.items.length,
                  " komponen aktif · HPP / cup:",
                  " ",
                  Jt(v.cost),
                ],
              }),
            ],
          }),
        S.jsxs("div", {
          className: "dialog-actions",
          children: [
            S.jsx(yS, {
              children: S.jsx(Ft, {
                variant: "soft",
                color: "gray",
                children: "Batal",
              }),
            }),
            s
              ? S.jsx(Ft, {
                  highContrast: !0,
                  onClick: () =>
                    document.getElementById("recipe-paste")?.select(),
                  children: "Pilih semua teks",
                })
              : S.jsx(Ft, {
                  highContrast: !0,
                  disabled: !d.menu,
                  onClick: () => {
                    (o(d.menu), u(""), r(!1));
                  },
                  children: "Gunakan resep",
                }),
          ],
        }),
      ],
    }),
  });
}
function Dw(l) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0],
    o = document.createElement("style");
  ((o.type = "text/css"),
    r.appendChild(o),
    o.styleSheet
      ? (o.styleSheet.cssText = l)
      : o.appendChild(document.createTextNode(l)));
}
const Mw = (l) => {
    switch (l) {
      case "success":
        return Hw;
      case "info":
        return Bw;
      case "warning":
        return Lw;
      case "error":
        return Uw;
      default:
        return null;
    }
  },
  jw = Array(12).fill(0),
  zw = ({ visible: l, className: r }) =>
    J.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", r].filter(Boolean).join(" "),
        "data-visible": l,
      },
      J.createElement(
        "div",
        { className: "sonner-spinner" },
        jw.map((o, s) =>
          J.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${s}`,
          })
        )
      )
    ),
  Hw = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
      "aria-hidden": "true",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  Lw = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
      "aria-hidden": "true",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  Bw = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
      "aria-hidden": "true",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  Uw = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
      "aria-hidden": "true",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  Vw = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
    },
    J.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    J.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  Pw = () => {
    const [l, r] = J.useState(document.hidden);
    return (
      J.useEffect(() => {
        const o = () => {
          r(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", o),
          () => document.removeEventListener("visibilitychange", o)
        );
      }, []),
      l
    );
  };
let Yw = 1;
const kw = 100,
  z1 = (l) => {
    var r;
    return typeof l?.id == "number" ||
      (l == null || (r = l.id) == null ? void 0 : r.length) > 0
      ? l.id
      : Yw++;
  };
class qw {
  constructor() {
    ((this.subscribe = (r) => (
      this.subscribers.push(r),
      this.getActiveToasts().forEach((o) => r(o)),
      () => {
        const o = this.subscribers.indexOf(r);
        this.subscribers.splice(o, 1);
      }
    )),
      (this.publish = (r) => {
        this.subscribers.forEach((o) => o(r));
      }),
      (this.addToast = (r) => {
        (this.publish(r),
          (this.toasts = [...this.toasts, r]),
          this.trimHistory());
      }),
      (this.trimHistory = () => {
        let r = this.toasts.length - kw;
        r <= 0 ||
          (this.toasts = this.toasts.filter((o) =>
            r > 0 && this.dismissedToasts.has(o.id)
              ? (this.dismissedToasts.delete(o.id), r--, !1)
              : !0
          ));
      }),
      (this.create = (r) => {
        const { message: o, ...s } = r,
          f = z1(r),
          u = this.pendingDismissals.get(f);
        u !== void 0 &&
          (cancelAnimationFrame(u),
          this.pendingDismissals.delete(f),
          this.dismissedToasts.delete(f));
        const d = this.dismissedToasts.has(f),
          v = r.dismissible === void 0 ? !0 : r.dismissible;
        return (
          d &&
            (this.dismissedToasts.delete(f),
            (this.toasts = this.toasts.filter((b) => b.id !== f))),
          (d ? void 0 : this.toasts.find((b) => b.id === f))
            ? (this.toasts = this.toasts.map((b) =>
                b.id === f
                  ? (this.publish({ ...b, ...r, id: f, title: o }),
                    { ...b, ...r, id: f, dismissible: v, title: o })
                  : b
              ))
            : this.addToast({ title: o, ...s, dismissible: v, id: f }),
          f
        );
      }),
      (this.dismiss = (r) => {
        if (r == null)
          return (
            this.getActiveToasts().forEach((s) => {
              (this.dismissedToasts.add(s.id),
                this.subscribers.forEach((f) => f({ id: s.id, dismiss: !0 })));
            }),
            r
          );
        this.dismissedToasts.add(r);
        const o = this.pendingDismissals.get(r);
        return (
          o !== void 0 && cancelAnimationFrame(o),
          this.pendingDismissals.set(
            r,
            requestAnimationFrame(() => {
              (this.pendingDismissals.delete(r),
                this.subscribers.forEach((s) => s({ id: r, dismiss: !0 })));
            })
          ),
          r
        );
      }),
      (this.message = (r, o) =>
        this.create({ ...o, message: r, type: void 0 })),
      (this.error = (r, o) => this.create({ ...o, message: r, type: "error" })),
      (this.success = (r, o) =>
        this.create({ ...o, type: "success", message: r })),
      (this.info = (r, o) => this.create({ ...o, type: "info", message: r })),
      (this.warning = (r, o) =>
        this.create({ ...o, type: "warning", message: r })),
      (this.loading = (r, o) =>
        this.create({ ...o, type: "loading", message: r })),
      (this.promise = (r, o) => {
        if (!o) return;
        let s;
        o.loading !== void 0 &&
          (s = this.create({
            ...o,
            promise: r,
            type: "loading",
            message: o.loading,
            description:
              typeof o.description != "function" ? o.description : void 0,
          }));
        const f = Promise.resolve(r instanceof Function ? r() : r);
        let u = s !== void 0,
          d;
        const v = f
            .then(async (b) => {
              if (((d = ["resolve", b]), J.isValidElement(b)))
                ((u = !1), this.create({ id: s, type: "default", message: b }));
              else if (Xw(b) && !b.ok) {
                u = !1;
                const h =
                    typeof o.error == "function"
                      ? await o.error(`HTTP error! status: ${b.status}`)
                      : o.error,
                  x =
                    typeof o.description == "function"
                      ? await o.description(`HTTP error! status: ${b.status}`)
                      : o.description,
                  w =
                    typeof h == "object" && !J.isValidElement(h)
                      ? h
                      : { message: h };
                this.create({ id: s, type: "error", description: x, ...w });
              } else if (b instanceof Error) {
                u = !1;
                const h =
                    typeof o.error == "function" ? await o.error(b) : o.error,
                  x =
                    typeof o.description == "function"
                      ? await o.description(b)
                      : o.description,
                  w =
                    typeof h == "object" && !J.isValidElement(h)
                      ? h
                      : { message: h };
                this.create({ id: s, type: "error", description: x, ...w });
              } else if (o.success !== void 0) {
                u = !1;
                const h =
                    typeof o.success == "function"
                      ? await o.success(b)
                      : o.success,
                  x =
                    typeof o.description == "function"
                      ? await o.description(b)
                      : o.description,
                  w =
                    typeof h == "object" && !J.isValidElement(h)
                      ? h
                      : { message: h };
                this.create({ id: s, type: "success", description: x, ...w });
              }
            })
            .catch(async (b) => {
              if (((d = ["reject", b]), o.error !== void 0)) {
                u = !1;
                const y =
                    typeof o.error == "function" ? await o.error(b) : o.error,
                  h =
                    typeof o.description == "function"
                      ? await o.description(b)
                      : o.description,
                  E =
                    typeof y == "object" && !J.isValidElement(y)
                      ? y
                      : { message: y };
                this.create({ id: s, type: "error", description: h, ...E });
              }
            })
            .finally(() => {
              (u && (this.dismiss(s), (s = void 0)),
                o.finally == null || o.finally.call(o));
            }),
          g = () =>
            new Promise((b, y) =>
              v.then(() => (d[0] === "reject" ? y(d[1]) : b(d[1]))).catch(y)
            );
        return typeof s != "string" && typeof s != "number"
          ? { unwrap: g }
          : Object.assign(s, { unwrap: g });
      }),
      (this.custom = (r, o) => {
        const s = z1(o);
        return (this.create({ ...o, jsx: r(s), id: s, type: void 0 }), s);
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter((r) => !this.dismissedToasts.has(r.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set()),
      (this.pendingDismissals = new Map()));
  }
}
const $t = new qw(),
  Gw = (l, r) => $t.message(l, r),
  Xw = (l) =>
    l &&
    typeof l == "object" &&
    "ok" in l &&
    typeof l.ok == "boolean" &&
    "status" in l &&
    typeof l.status == "number",
  Iw = Gw,
  Zw = () => $t.toasts,
  Qw = () => $t.getActiveToasts(),
  Wd = Object.assign(
    Iw,
    {
      success: $t.success,
      info: $t.info,
      warning: $t.warning,
      error: $t.error,
      custom: $t.custom,
      message: $t.message,
      promise: $t.promise,
      dismiss: $t.dismiss,
      loading: $t.loading,
    },
    { getHistory: Zw, getToasts: Qw }
  );
Dw(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}"
);
function Cc(l) {
  return l.label !== void 0;
}
const Kw = 3,
  $w = "24px",
  Fw = "16px",
  H1 = 4e3,
  Jw = 356,
  Ww = 14,
  eT = 45,
  tT = 200;
function ea(...l) {
  return l.filter(Boolean).join(" ");
}
function nT(l) {
  const [r, o] = l.split("-"),
    s = [];
  return (r && s.push(r), o && s.push(o), s);
}
const aT = (l) => {
  var r, o, s, f, u, d, v, g, b;
  const {
      invert: y,
      toast: h,
      unstyled: x,
      interacting: E,
      setHeights: w,
      visibleToasts: T,
      heights: N,
      index: R,
      toasts: M,
      expanded: _,
      removeToast: j,
      defaultRichColors: G,
      closeButton: P,
      style: U,
      cancelButtonStyle: Q,
      actionButtonStyle: ie,
      className: W = "",
      descriptionClassName: re = "",
      duration: X,
      position: oe,
      gap: fe,
      expandByDefault: pe,
      classNames: k,
      icons: te,
      closeButtonAriaLabel: K = "Close toast",
    } = l,
    [ae, $] = J.useState(null),
    [me, Ce] = J.useState(null),
    [Ve, O] = J.useState(!1),
    [q, F] = J.useState(!1),
    [ne, ge] = J.useState(!1),
    [ce, ee] = J.useState(!1),
    [le, ue] = J.useState(!1),
    [ye, ze] = J.useState(0),
    [Le, Tt] = J.useState(0),
    Fe = J.useRef(h.duration || X || H1),
    Be = J.useRef(null),
    st = J.useRef(null),
    Sl = R === 0,
    Yn = R + 1 <= T,
    ct = h.type,
    xl = ct ?? "default",
    tn = h.dismissible !== !1,
    Si = h.className || "",
    ur = h.descriptionClassName || "",
    ja = J.useMemo(
      () => N.findIndex((Se) => Se.toastId === h.id) || 0,
      [N, h.id]
    ),
    Po = J.useMemo(() => {
      var Se;
      return (Se = h.closeButton) != null ? Se : P;
    }, [h.closeButton, P]),
    On = J.useMemo(() => h.duration || X || H1, [h.duration, X]),
    Cl = J.useRef(0),
    kn = J.useRef(0),
    Yo = J.useRef(0),
    ra = J.useRef(null),
    [xi, Ci] = oe.split("-"),
    fr = J.useMemo(
      () => N.reduce((Se, ut, at) => (at >= ja ? Se : Se + ut.height), 0),
      [N, ja]
    ),
    ko = Pw(),
    hn = J.useMemo(() => {
      var Se;
      return (Se = l.swipeDirections) != null ? Se : nT(oe);
    }, [l.swipeDirections, oe]),
    Lt = h.invert || y,
    Ei = ct === "loading";
  ((kn.current = J.useMemo(() => ja * fe + fr, [ja, fr])),
    J.useEffect(() => {
      Fe.current = On;
    }, [On]),
    J.useEffect(() => {
      O(!0);
    }, []),
    J.useEffect(() => {
      const Se = st.current;
      if (Se) {
        const ut = Se.getBoundingClientRect().height;
        return (
          Tt(ut),
          w((at) => [
            { toastId: h.id, height: ut, position: h.position },
            ...at,
          ]),
          () => w((at) => at.filter((Ke) => Ke.toastId !== h.id))
        );
      }
    }, [w, h.id]),
    J.useLayoutEffect(() => {
      if (!Ve) return;
      const Se = st.current,
        ut = Se.style.height;
      Se.style.height = "auto";
      const at = Se.getBoundingClientRect().height;
      ((Se.style.height = ut),
        Tt(at),
        w((Ke) =>
          Ke.find((ke) => ke.toastId === h.id)
            ? Ke.map((ke) => (ke.toastId === h.id ? { ...ke, height: at } : ke))
            : [{ toastId: h.id, height: at, position: h.position }, ...Ke]
        ));
    }, [Ve, h.title, h.description, w, h.id, h.jsx, h.action, h.cancel]));
  const _n = J.useCallback(() => {
    (F(!0),
      ze(kn.current),
      w((Se) => Se.filter((ut) => ut.toastId !== h.id)),
      setTimeout(() => {
        j(h);
      }, tT));
  }, [h, j, w, kn]);
  (J.useEffect(() => {
    if (
      (h.promise && ct === "loading") ||
      h.duration === 1 / 0 ||
      h.type === "loading"
    )
      return;
    let Se;
    return (
      _ || E || ko
        ? (() => {
            if (Yo.current < Cl.current) {
              const Ke = new Date().getTime() - Cl.current;
              Fe.current = Fe.current - Ke;
            }
            Yo.current = new Date().getTime();
          })()
        : Fe.current !== 1 / 0 &&
          ((Cl.current = new Date().getTime()),
          (Se = setTimeout(() => {
            (h.onAutoClose == null || h.onAutoClose.call(h, h), _n());
          }, Fe.current))),
      () => clearTimeout(Se)
    );
  }, [_, E, h, ct, ko, _n]),
    J.useEffect(() => {
      h.delete && (_n(), h.onDismiss == null || h.onDismiss.call(h, h));
    }, [_n, h.delete]));
  function wi() {
    var Se;
    if (te?.loading) {
      var ut;
      return J.createElement(
        "div",
        {
          className: ea(
            k?.loader,
            h == null || (ut = h.classNames) == null ? void 0 : ut.loader,
            "sonner-loader"
          ),
          "data-visible": ct === "loading",
        },
        te.loading
      );
    }
    return J.createElement(zw, {
      className: ea(
        k?.loader,
        h == null || (Se = h.classNames) == null ? void 0 : Se.loader
      ),
      visible: ct === "loading",
    });
  }
  const dr = h.icon || te?.[ct] || Mw(ct);
  var qo, Ti;
  return J.createElement(
    "li",
    {
      tabIndex: 0,
      ref: st,
      className: ea(
        W,
        Si,
        k?.toast,
        h == null || (r = h.classNames) == null ? void 0 : r.toast,
        k?.[xl],
        h == null || (o = h.classNames) == null ? void 0 : o[xl]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (qo = h.richColors) != null ? qo : G,
      "data-styled": !(h.jsx || h.unstyled || x),
      "data-mounted": Ve,
      "data-promise": !!h.promise,
      "data-swiped": le,
      "data-removed": q,
      "data-visible": Yn,
      "data-y-position": xi,
      "data-x-position": Ci,
      "data-index": R,
      "data-front": Sl,
      "data-swiping": ne,
      "data-dismissible": tn,
      "data-type": ct,
      "data-invert": Lt,
      "data-swipe-out": ce,
      "data-swipe-direction": me,
      "data-expanded": !!(_ || (pe && Ve)),
      "data-testid": h.testId,
      style: {
        "--index": R,
        "--toasts-before": R,
        "--z-index": M.length - R,
        "--offset": `${q ? ye : kn.current}px`,
        "--initial-height": pe ? "auto" : `${Le}px`,
        ...U,
        ...h.style,
      },
      onDragEnd: () => {
        (ge(!1), $(null), (ra.current = null));
      },
      onPointerDown: (Se) => {
        Se.button !== 2 &&
          (Ei ||
            !tn ||
            ((Be.current = new Date()),
            ze(kn.current),
            Se.target.setPointerCapture(Se.pointerId),
            Se.target.tagName !== "BUTTON" &&
              (ge(!0), (ra.current = { x: Se.clientX, y: Se.clientY }))));
      },
      onPointerUp: () => {
        var Se, ut, at;
        if (ce || !tn) return;
        ra.current = null;
        const Ke = Number(
            ((Se = st.current) == null
              ? void 0
              : Se.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          kt = Number(
            ((ut = st.current) == null
              ? void 0
              : ut.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          ke =
            new Date().getTime() -
            ((at = Be.current) == null ? void 0 : at.getTime()),
          qt = ae === "x" ? Ke : kt,
          pn = Math.abs(qt) / ke;
        if (
          (ae === "x"
            ? hn.includes(Ke > 0 ? "right" : "left")
            : hn.includes(kt > 0 ? "bottom" : "top")) &&
          (Math.abs(qt) >= eT || pn > 0.11)
        ) {
          (ze(kn.current),
            h.onDismiss == null || h.onDismiss.call(h, h),
            Ce(
              ae === "x" ? (Ke > 0 ? "right" : "left") : kt > 0 ? "down" : "up"
            ),
            _n(),
            ee(!0));
          return;
        } else {
          var Bt, za;
          ((Bt = st.current) == null ||
            Bt.style.setProperty("--swipe-amount-x", "0px"),
            (za = st.current) == null ||
              za.style.setProperty("--swipe-amount-y", "0px"));
        }
        (ue(!1), ge(!1), $(null));
      },
      onPointerMove: (Se) => {
        var ut, at, Ke;
        if (
          !ra.current ||
          !tn ||
          ((ut = window.getSelection()) == null
            ? void 0
            : ut.toString().length) > 0
        )
          return;
        const ke = Se.clientY - ra.current.y,
          qt = Se.clientX - ra.current.x;
        !ae &&
          (Math.abs(qt) > 1 || Math.abs(ke) > 1) &&
          $(Math.abs(qt) > Math.abs(ke) ? "x" : "y");
        let pn = { x: 0, y: 0 };
        const Ni = (Bt) => 1 / (1.5 + Math.abs(Bt) / 20);
        if (ae === "y") {
          if (hn.includes("top") || hn.includes("bottom"))
            if (
              (hn.includes("top") && ke < 0) ||
              (hn.includes("bottom") && ke > 0)
            )
              pn.y = ke;
            else {
              const Bt = ke * Ni(ke);
              pn.y = Math.abs(Bt) < Math.abs(ke) ? Bt : ke;
            }
        } else if (ae === "x" && (hn.includes("left") || hn.includes("right")))
          if (
            (hn.includes("left") && qt < 0) ||
            (hn.includes("right") && qt > 0)
          )
            pn.x = qt;
          else {
            const Bt = qt * Ni(qt);
            pn.x = Math.abs(Bt) < Math.abs(qt) ? Bt : qt;
          }
        ((Math.abs(pn.x) > 0 || Math.abs(pn.y) > 0) && ue(!0),
          (at = st.current) == null ||
            at.style.setProperty("--swipe-amount-x", `${pn.x}px`),
          (Ke = st.current) == null ||
            Ke.style.setProperty("--swipe-amount-y", `${pn.y}px`));
      },
    },
    Po && !h.jsx && ct !== "loading"
      ? J.createElement(
          "button",
          {
            "aria-label": K,
            "data-disabled": Ei,
            "data-close-button": !0,
            onClick:
              Ei || !tn
                ? () => {}
                : () => {
                    (_n(), h.onDismiss == null || h.onDismiss.call(h, h));
                  },
            className: ea(
              k?.closeButton,
              h == null || (s = h.classNames) == null ? void 0 : s.closeButton
            ),
          },
          (Ti = te?.close) != null ? Ti : Vw
        )
      : null,
    (ct || h.icon || h.promise) &&
      h.icon !== null &&
      (te?.[ct] !== null || h.icon)
      ? J.createElement(
          "div",
          {
            "data-icon": "",
            className: ea(
              k?.icon,
              h == null || (f = h.classNames) == null ? void 0 : f.icon
            ),
          },
          ct === "loading" ? h.icon || wi() : h.promise ? wi() : null,
          ct !== "loading" ? dr : null
        )
      : null,
    J.createElement(
      "div",
      {
        "data-content": "",
        className: ea(
          k?.content,
          h == null || (u = h.classNames) == null ? void 0 : u.content
        ),
      },
      J.createElement(
        "div",
        {
          "data-title": "",
          className: ea(
            k?.title,
            h == null || (d = h.classNames) == null ? void 0 : d.title
          ),
        },
        h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title
      ),
      h.description
        ? J.createElement(
            "div",
            {
              "data-description": "",
              className: ea(
                re,
                ur,
                k?.description,
                h == null || (v = h.classNames) == null ? void 0 : v.description
              ),
            },
            typeof h.description == "function" ? h.description() : h.description
          )
        : null
    ),
    J.isValidElement(h.cancel)
      ? h.cancel
      : h.cancel && Cc(h.cancel)
        ? J.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: h.cancelButtonStyle || Q,
              onClick: (Se) => {
                Cc(h.cancel) &&
                  tn &&
                  (h.cancel.onClick == null ||
                    h.cancel.onClick.call(h.cancel, Se),
                  _n());
              },
              className: ea(
                k?.cancelButton,
                h == null || (g = h.classNames) == null
                  ? void 0
                  : g.cancelButton
              ),
            },
            h.cancel.label
          )
        : null,
    J.isValidElement(h.action)
      ? h.action
      : h.action && Cc(h.action)
        ? J.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: h.actionButtonStyle || ie,
              onClick: (Se) => {
                Cc(h.action) &&
                  (h.action.onClick == null ||
                    h.action.onClick.call(h.action, Se),
                  !Se.defaultPrevented && _n());
              },
              className: ea(
                k?.actionButton,
                h == null || (b = h.classNames) == null
                  ? void 0
                  : b.actionButton
              ),
            },
            h.action.label
          )
        : null
  );
};
function L1() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const l = document.documentElement.getAttribute("dir");
  return l === "auto" || !l
    ? window.getComputedStyle(document.documentElement).direction
    : l;
}
function lT(l, r) {
  const o = {};
  return (
    [l, r].forEach((s, f) => {
      const u = f === 1,
        d = u ? "--mobile-offset" : "--offset",
        v = u ? Fw : $w;
      function g(b) {
        ["top", "right", "bottom", "left"].forEach((y) => {
          o[`${d}-${y}`] = typeof b == "number" ? `${b}px` : b;
        });
      }
      typeof s == "number" || typeof s == "string"
        ? g(s)
        : typeof s == "object"
          ? ["top", "right", "bottom", "left"].forEach((b) => {
              s[b] === void 0
                ? (o[`${d}-${b}`] = v)
                : (o[`${d}-${b}`] =
                    typeof s[b] == "number" ? `${s[b]}px` : s[b]);
            })
          : g(v);
    }),
    o
  );
}
const rT = J.forwardRef(function (r, o) {
  const {
      id: s,
      invert: f,
      position: u = "bottom-right",
      hotkey: d = ["altKey", "KeyT"],
      expand: v,
      closeButton: g,
      className: b,
      offset: y,
      mobileOffset: h,
      theme: x = "light",
      richColors: E,
      duration: w,
      style: T,
      visibleToasts: N = Kw,
      toastOptions: R,
      dir: M = L1(),
      gap: _ = Ww,
      icons: j,
      customAriaLabel: G,
      containerAriaLabel: P = "Notifications",
    } = r,
    [U, Q] = J.useState([]),
    ie = J.useMemo(
      () =>
        s ? U.filter((O) => O.toasterId === s) : U.filter((O) => !O.toasterId),
      [U, s]
    ),
    W = J.useMemo(
      () =>
        Array.from(
          new Set(
            [u].concat(ie.filter((O) => O.position).map((O) => O.position))
          )
        ),
      [ie, u]
    ),
    [re, X] = J.useState([]),
    [oe, fe] = J.useState(!1),
    [pe, k] = J.useState(!1),
    [te, K] = J.useState(
      x !== "system"
        ? x
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
    ),
    ae = J.useRef(null),
    $ = d.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    me = J.useRef(null),
    Ce = J.useRef(!1),
    Ve = J.useCallback((O) => {
      Q((q) => {
        var F;
        return (
          ((F = q.find((ne) => ne.id === O.id)) != null && F.delete) ||
            $t.dismiss(O.id),
          q.filter(({ id: ne }) => ne !== O.id)
        );
      });
    }, []);
  return (
    J.useEffect(
      () =>
        $t.subscribe((O) => {
          if (O.dismiss) {
            requestAnimationFrame(() => {
              Q((q) =>
                q.map((F) => (F.id === O.id ? { ...F, delete: !0 } : F))
              );
            });
            return;
          }
          setTimeout(() => {
            TC.flushSync(() => {
              Q((q) => {
                const F = q.findIndex((ne) => ne.id === O.id);
                return F !== -1
                  ? [...q.slice(0, F), { ...q[F], ...O }, ...q.slice(F + 1)]
                  : [O, ...q];
              });
            });
          });
        }),
      []
    ),
    J.useEffect(() => {
      if (x !== "system") {
        K(x);
        return;
      }
      if (
        (x === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? K("dark")
            : K("light")),
        typeof window > "u")
      )
        return;
      const O = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        O.addEventListener("change", ({ matches: q }) => {
          K(q ? "dark" : "light");
        });
      } catch {
        O.addListener(({ matches: F }) => {
          try {
            K(F ? "dark" : "light");
          } catch (ne) {
            console.error(ne);
          }
        });
      }
    }, [x]),
    J.useEffect(() => {
      U.length <= 1 && fe(!1);
    }, [U]),
    J.useEffect(() => {
      const O = (q) => {
        var F;
        if (d.length > 0 && d.every((ce) => q[ce] || q.code === ce)) {
          var ge;
          (fe(!0), (ge = ae.current) == null || ge.focus());
        }
        q.code === "Escape" &&
          (document.activeElement === ae.current ||
            ((F = ae.current) != null && F.contains(document.activeElement))) &&
          fe(!1);
      };
      return (
        document.addEventListener("keydown", O),
        () => document.removeEventListener("keydown", O)
      );
    }, [d]),
    J.useEffect(() => {
      if (ae.current)
        return () => {
          me.current &&
            (me.current.focus({ preventScroll: !0 }),
            (me.current = null),
            (Ce.current = !1));
        };
    }, [ae.current]),
    J.createElement(
      "section",
      {
        ref: o,
        "aria-label": G ?? `${P} ${$}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
        "data-react-aria-top-layer": !0,
      },
      W.map((O, q) => {
        var F;
        const [ne, ge] = O.split("-");
        return ie.length
          ? J.createElement(
              "ol",
              {
                key: O,
                dir: M === "auto" ? L1() : M,
                tabIndex: -1,
                ref: ae,
                className: b,
                "data-sonner-toaster": !0,
                "data-sonner-theme": te,
                "data-y-position": ne,
                "data-x-position": ge,
                style: {
                  "--front-toast-height": `${((F = re[0]) == null ? void 0 : F.height) || 0}px`,
                  "--width": `${Jw}px`,
                  "--gap": `${_}px`,
                  ...T,
                  ...lT(y, h),
                },
                onBlur: (ce) => {
                  Ce.current &&
                    !ce.currentTarget.contains(ce.relatedTarget) &&
                    ((Ce.current = !1),
                    me.current &&
                      (me.current.focus({ preventScroll: !0 }),
                      (me.current = null)));
                },
                onFocus: (ce) => {
                  (ce.target instanceof HTMLElement &&
                    ce.target.dataset.dismissible === "false") ||
                    Ce.current ||
                    ((Ce.current = !0), (me.current = ce.relatedTarget));
                },
                onMouseEnter: () => fe(!0),
                onMouseMove: () => fe(!0),
                onMouseLeave: () => {
                  pe || fe(!1);
                },
                onDragEnd: () => fe(!1),
                onPointerDown: (ce) => {
                  (ce.target instanceof HTMLElement &&
                    ce.target.dataset.dismissible === "false") ||
                    k(!0);
                },
                onPointerUp: () => k(!1),
              },
              ie
                .filter((ce) => (!ce.position && q === 0) || ce.position === O)
                .map((ce, ee) => {
                  var le, ue;
                  return J.createElement(aT, {
                    key: ce.id,
                    icons: j,
                    index: ee,
                    toast: ce,
                    defaultRichColors: E,
                    duration: (le = R?.duration) != null ? le : w,
                    className: R?.className,
                    descriptionClassName: R?.descriptionClassName,
                    invert: f,
                    visibleToasts: N,
                    closeButton: (ue = R?.closeButton) != null ? ue : g,
                    interacting: pe,
                    position: O,
                    style: R?.style,
                    unstyled: R?.unstyled,
                    classNames: R?.classNames,
                    cancelButtonStyle: R?.cancelButtonStyle,
                    actionButtonStyle: R?.actionButtonStyle,
                    closeButtonAriaLabel: R?.closeButtonAriaLabel,
                    removeToast: Ve,
                    toasts: ie.filter((ye) => ye.position == ce.position),
                    heights: re.filter((ye) => ye.position == ce.position),
                    setHeights: X,
                    expandByDefault: v,
                    gap: _,
                    expanded: oe,
                    swipeDirections: r.swipeDirections,
                  });
                })
            )
          : null;
      })
    )
  );
});
function iT() {
  const [l] = m.useState(pw),
    [r, o] = m.useState(l.draft),
    [s, f] = m.useState(l.issue),
    [u, d] = m.useState("saved"),
    [v, g] = m.useState(!1),
    [b, y] = m.useState(!1),
    [h, x] = m.useState(""),
    [E, w] = m.useState(
      () => window.matchMedia("(prefers-color-scheme: dark)").matches
    ),
    [T, N] = m.useState(() => {
      try {
        const X = localStorage.getItem("kopti-theme");
        return ["light", "dark", "system"].includes(X) ? X : "light";
      } catch {
        return "light";
      }
    }),
    R = m.useRef(r),
    M = T === "system" ? (E ? "dark" : "light") : T,
    _ = m.useMemo(() => au(r), [r]),
    j = _.marginActive && _.price !== null,
    P = r.items.filter((X) => X.active).length > 0 && _.errors.length === 0,
    U = (X) => o((oe) => ({ ...oe, ...(typeof X == "function" ? X(oe) : X) })),
    Q = (X, oe) => {
      if (oe) {
        Wd.success(X, {
          duration: 6e3,
          action: { label: "Urungkan", onClick: oe },
        });
        return;
      }
      Wd.success(X, { duration: 3500 });
    };
  (m.useEffect(() => {
    const X = window.matchMedia("(prefers-color-scheme: dark)"),
      oe = (fe) => w(fe.matches);
    return (
      X.addEventListener("change", oe),
      () => X.removeEventListener("change", oe)
    );
  }, []),
    m.useEffect(() => {
      ((document.documentElement.dataset.theme = M),
        (document.documentElement.style.colorScheme = M));
      try {
        localStorage.setItem("kopti-theme", T);
      } catch {}
    }, [T, M]),
    m.useEffect(() => {
      if (((R.current = r), l.blocked)) return;
      d("saving");
      const X = setTimeout(() => {
        try {
          (_1(r, l.menus), f(""), d("saved"));
        } catch {
          (f(
            "Penyimpanan browser penuh atau tidak tersedia. Salin resep sebelum menutup halaman agar data tidak hilang."
          ),
            d("error"));
        }
      }, 300);
      return () => clearTimeout(X);
    }, [r, l]),
    m.useEffect(() => {
      if (l.blocked) return;
      const X = () => {
        try {
          _1(R.current, l.menus);
        } catch {}
      };
      return (
        window.addEventListener("pagehide", X),
        () => {
          (window.removeEventListener("pagehide", X), X());
        }
      );
    }, [l]));
  async function ie() {
    if (!P) return;
    const X = Tw(r),
      oe = Nw(r);
    try {
      if (navigator.clipboard?.write && window.ClipboardItem)
        try {
          const fe = new window.ClipboardItem({
            "text/plain": new Blob([X], { type: "text/plain" }),
            "text/html": new Blob([oe], { type: "text/html" }),
          });
          await navigator.clipboard.write([fe]);
        } catch {
          await navigator.clipboard.writeText(X);
        }
      else await navigator.clipboard.writeText(X);
      Wd.success("Tabel HPP disalin.", {
        duration: 3500,
        description:
          "Tempel mulai dari kolom No. Total HPP bahan dan kemasan / cup: " +
          Jt(ww(r)),
      });
    } catch {
      (x(X), y(!0));
    }
  }
  function W() {
    (x(""), y(!0));
  }
  function re(X) {
    const oe = structuredClone(r);
    (o(X), Q(`“${X.name}” berhasil diimport.`, () => o(oe)));
  }
  return S.jsxs(Bo, {
    appearance: M,
    accentColor: "blue",
    grayColor: "slate",
    radius: "medium",
    scaling: "100%",
    children: [
      S.jsx("a", {
        className: "skip-link",
        href: "#calculator",
        children: "Lewati ke kalkulator",
      }),
      S.jsx("header", {
        className: "app-header",
        children: S.jsxs("div", {
          className: "header-inner",
          children: [
            S.jsxs("a", {
              href: "#calculator",
              className: "brand",
              "aria-label": "HPP-Ku, ke kalkulator",
              children: [
                S.jsx("span", { className: "brand-name", children: "HPP-Ku" }),
                S.jsx("span", {
                  className: "brand-product",
                  children: "HPP & harga jual",
                }),
              ],
            }),
            S.jsxs("div", {
              className: "header-actions",
              children: [
                S.jsxs("span", {
                  className: "header-autosave",
                  children: [
                    l.blocked || u === "error"
                      ? S.jsx(fi, {})
                      : u === "saving"
                        ? S.jsx(cw, {})
                        : S.jsx(gm, {}),
                    l.blocked || u === "error"
                      ? "Belum tersimpan"
                      : u === "saving"
                        ? "Menyimpan..."
                        : "Tersimpan di perangkat",
                  ],
                }),
                S.jsx(lh, {
                  variant: "soft",
                  color: "gray",
                  "aria-label": `Tema ${T}. Ganti tema`,
                  title: `Tema: ${T}`,
                  onClick: () =>
                    N(
                      T === "system"
                        ? "light"
                        : T === "light"
                          ? "dark"
                          : "system"
                    ),
                  children:
                    T === "system"
                      ? S.jsx(nw, {})
                      : T === "light"
                        ? S.jsx(fw, {})
                        : S.jsx(iw, {}),
                }),
              ],
            }),
          ],
        }),
      }),
      S.jsxs("main", {
        className: "workspace",
        id: "calculator",
        children: [
          S.jsx("div", {
            className: "page-intro",
            children: S.jsxs(Ft, {
              className: "desktop-import",
              variant: "outline",
              color: "gray",
              onClick: W,
              children: [S.jsx(N1, {}), "Import resep"],
            }),
          }),
          s &&
            S.jsxs(Jl, {
              color: "red",
              role: "alert",
              children: [
                S.jsx(Wl, { children: S.jsx(fi, {}) }),
                S.jsx(er, { children: s }),
              ],
            }),
          S.jsxs("div", {
            className: "menu-identity",
            children: [
              S.jsx($l, {
                label: "Nama minuman",
                children: (X) =>
                  S.jsx(Vo, {
                    id: X,
                    size: "3",
                    value: r.name,
                    onChange: (oe) => U({ name: oe.target.value }),
                    placeholder: "Contoh: Kopi Brown Sugar",
                  }),
              }),
              S.jsxs(Ft, {
                variant: "ghost",
                color: "gray",
                onClick: () => g(!0),
                children: [S.jsx(Uc, {}), "Resep baru"],
              }),
            ],
          }),
          S.jsxs("div", {
            className: "calculator-layout",
            children: [
              S.jsx("div", {
                className: "editor-column",
                children: S.jsx(vw, {
                  items: r.items,
                  onChange: (X) =>
                    U((oe) => ({
                      items: typeof X == "function" ? X(oe.items) : X,
                    })),
                  notify: Q,
                }),
              }),
              S.jsx(Cw, {
                menu: r,
                update: U,
                result: _,
                canCopy: P,
                onCopy: ie,
                notify: Q,
              }),
            ],
          }),
        ],
      }),
      S.jsxs("div", {
        className: "mobile-action-bar",
        children: [
          S.jsxs("a", {
            href: "#summary",
            children: [
              S.jsx("span", {
                children: j ? "Harga jual / cup" : "Total HPP / cup",
              }),
              S.jsx("strong", {
                children: j
                  ? Jt(_.price)
                  : _.cost === null
                    ? "Periksa bahan"
                    : Jt(_.cost),
              }),
              S.jsx($4, {}),
            ],
          }),
          S.jsxs("div", {
            children: [
              S.jsxs(Ft, {
                variant: "outline",
                color: "gray",
                onClick: W,
                children: [S.jsx(N1, {}), "Import resep"],
              }),
              S.jsxs(Ft, {
                highContrast: !0,
                onClick: ie,
                disabled: !P,
                "aria-label": "Salin tabel HPP",
                children: [S.jsx(TS, {}), "Salin"],
              }),
            ],
          }),
        ],
      }),
      S.jsx(_w, { open: b, onOpenChange: y, onImport: re, copyFallback: h }),
      S.jsx(eS, {
        open: v,
        onOpenChange: g,
        children: S.jsxs(tS, {
          maxWidth: "450px",
          children: [
            S.jsx(nS, { children: "Mulai resep baru?" }),
            S.jsx(aS, {
              children:
                "Resep saat ini akan diganti. Salin tabel HPP terlebih dahulu jika ingin menggunakannya lagi.",
            }),
            S.jsxs("div", {
              className: "dialog-actions",
              children: [
                S.jsx(rS, {
                  children: S.jsx(Ft, {
                    variant: "soft",
                    color: "gray",
                    children: "Batal",
                  }),
                }),
                S.jsx(lS, {
                  children: S.jsx(Ft, {
                    highContrast: !0,
                    onClick: () => {
                      const X = structuredClone(r);
                      (o(sl()), Q("Resep baru siap diisi.", () => o(X)));
                    },
                    children: "Mulai baru",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      S.jsx(rT, {
        position: "bottom-center",
        theme: M,
        closeButton: !0,
        visibleToasts: 2,
        offset: { bottom: 22 },
        mobileOffset: { bottom: "calc(122px + env(safe-area-inset-bottom))" },
        icons: { success: S.jsx(gm, {}) },
        toastOptions: {
          className: "hpp-toast",
          duration: 3500,
          style: {
            background: "var(--surface)",
            borderColor: "var(--border)",
            color: "var(--ink)",
            borderRadius: "14px",
            boxShadow: "var(--shadow)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "13px",
          },
          actionButtonStyle: {
            background: "var(--accent)",
            color: "#fff",
            borderRadius: "8px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          },
        },
      }),
    ],
  });
}
class oT extends J.Component {
  state = { error: !1 };
  static getDerivedStateFromError() {
    return { error: !0 };
  }
  render() {
    return this.state.error
      ? S.jsxs("main", {
          className: "fatal",
          children: [
            S.jsx("h1", { children: "HPP-Ku belum dapat ditampilkan" }),
            S.jsx("p", {
              children:
                "Muat ulang halaman untuk mencoba lagi. Data resep tetap tersimpan di browser.",
            }),
            S.jsx("button", {
              onClick: () => location.reload(),
              children: "Muat ulang",
            }),
          ],
        })
      : this.props.children;
  }
}
wC.createRoot(document.getElementById("root")).render(
  S.jsx(oT, { children: S.jsx(iT, {}) })
);
