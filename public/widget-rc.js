(function () {
  function ya(a) {
    return a && a.__esModule ? {d: a.default} : {d: a};
  }
  var we = {};
  var Ob,
    Pj,
    Wq,
    Xq,
    Yq = false;
  function Zq(r) {
    if (null == r)
      throw new TypeError(
        'Object.assign cannot be called with null or undefined'
      );
    return Object(r);
  }
  function $q() {
    try {
      if (!Object.assign) return !1;
      var r = new String('abc');
      if (((r[5] = 'de'), '5' === Object.getOwnPropertyNames(r)[0])) return !1;
      for (var e = {}, t = 0; t < 10; t++) e['_' + String.fromCharCode(t)] = t;
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(e)
          .map(function (r) {
            return e[r];
          })
          .join('')
      )
        return !1;
      var n = {};
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function (r) {
          n[r] = r;
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, n)).join('')
      );
    } catch (o) {
      return !1;
    }
  }
  function eg() {
    if (Yq) return;
    Yq = true;
    Ob = {};
    Pj = Object.getOwnPropertySymbols;
    Wq = Object.prototype.hasOwnProperty;
    Xq = Object.prototype.propertyIsEnumerable;
    Ob = $q()
      ? Object.assign
      : function (r, e) {
          for (var t, n, o = Zq(r), a = 1; a < arguments.length; a++) {
            for (var $ in (t = Object(arguments[a])))
              Wq.call(t, $) && (o[$] = t[$]);
            if (Pj) {
              n = Pj(t);
              for (var s = 0; s < n.length; s++)
                Xq.call(t, n[s]) && (o[n[s]] = t[n[s]]);
            }
          }
          return o;
        };
  }
  var ja,
    fg,
    eb,
    ed,
    _q,
    ar,
    br,
    cr,
    dr,
    er,
    fr,
    gr,
    hr,
    ir,
    Qj,
    Rj,
    Sj,
    gg,
    hg,
    Tj,
    Uj,
    Vj,
    xe,
    Wj,
    jr,
    kr,
    lr,
    mr,
    nr,
    or,
    pr,
    qr,
    rr,
    sr,
    tr,
    ur,
    vr,
    wr,
    xr,
    yr,
    zr,
    Ar,
    Br,
    Cr,
    Dr,
    Er,
    Fr,
    Gr,
    Hr,
    Ir,
    Jr,
    Kr,
    Lr,
    Mr = false;
  function fd($) {
    for (
      var r = 'https://reactjs.org/docs/error-decoder.html?invariant=' + $,
        e = 1;
      e < arguments.length;
      e++
    )
      r += '&args[]=' + encodeURIComponent(arguments[e]);
    return (
      'Minified React error #' +
      $ +
      '; visit ' +
      r +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function zc($, r, e) {
    (this.props = $),
      (this.context = r),
      (this.refs = Sj),
      (this.updater = e || Rj);
  }
  function Xj() {}
  function ig($, r, e) {
    (this.props = $),
      (this.context = r),
      (this.refs = Sj),
      (this.updater = e || Rj);
  }
  function Yj($, r, e) {
    var a,
      t = {},
      i = null,
      o = null;
    if (null != r)
      for (a in (void 0 !== r.ref && (o = r.ref),
      void 0 !== r.key && (i = '' + r.key),
      r))
        Tj.call(r, a) && !Uj.hasOwnProperty(a) && (t[a] = r[a]);
    var n = arguments.length - 2;
    if (1 === n) t.children = e;
    else if (1 < n) {
      for (var u = Array(n), w = 0; w < n; w++) u[w] = arguments[w + 2];
      t.children = u;
    }
    if ($ && $.defaultProps)
      for (a in (n = $.defaultProps)) void 0 === t[a] && (t[a] = n[a]);
    return {
      $$typeof: ed,
      type: $,
      key: i,
      ref: o,
      props: t,
      _owner: hg.current,
    };
  }
  function Nr($, r) {
    return {
      $$typeof: ed,
      type: $.type,
      key: r,
      ref: $.ref,
      props: $.props,
      _owner: $._owner,
    };
  }
  function jg($) {
    return 'object' == typeof $ && null !== $ && $.$$typeof === ed;
  }
  function Or($) {
    var r = {'=': '=0', ':': '=2'};
    return (
      '$' +
      ('' + $).replace(/[=:]/g, function ($) {
        return r[$];
      })
    );
  }
  function Zj($, r, e, a) {
    if (xe.length) {
      var t = xe.pop();
      return (
        (t.result = $),
        (t.keyPrefix = r),
        (t.func = e),
        (t.context = a),
        (t.count = 0),
        t
      );
    }
    return {result: $, keyPrefix: r, func: e, context: a, count: 0};
  }
  function $j($) {
    ($.result = null),
      ($.keyPrefix = null),
      ($.func = null),
      ($.context = null),
      ($.count = 0),
      10 > xe.length && xe.push($);
  }
  function kg($, r, e, a) {
    var t = typeof $;
    ('undefined' !== t && 'boolean' !== t) || ($ = null);
    var i = !1;
    if (null === $) i = !0;
    else
      switch (t) {
        case 'string':
        case 'number':
          i = !0;
          break;
        case 'object':
          switch ($.$$typeof) {
            case ed:
            case _q:
              i = !0;
          }
      }
    if (i) return e(a, $, '' === r ? '.' + mg($, 0) : r), 1;
    if (((i = 0), (r = '' === r ? '.' : r + ':'), Array.isArray($)))
      for (var o = 0; o < $.length; o++) {
        var n = r + mg((t = $[o]), o);
        i += kg(t, n, e, a);
      }
    else if (
      (null === $ || 'object' != typeof $
        ? (n = null)
        : (n =
            'function' == typeof (n = (Qj && $[Qj]) || $['@@iterator'])
              ? n
              : null),
      'function' == typeof n)
    )
      for ($ = n.call($), o = 0; !(t = $.next()).done; )
        i += kg((t = t.value), (n = r + mg(t, o++)), e, a);
    else if ('object' === t)
      throw (
        ((e = '' + $),
        Error(
          fd(
            31,
            '[object Object]' === e
              ? 'object with keys {' + Object.keys($).join(', ') + '}'
              : e,
            ''
          )
        ))
      );
    return i;
  }
  function lg($, r, e) {
    return null == $ ? 0 : kg($, '', r, e);
  }
  function mg($, r) {
    return 'object' == typeof $ && null !== $ && null != $.key
      ? Or($.key)
      : r.toString(36);
  }
  function Pr($, r) {
    $.func.call($.context, r, $.count++);
  }
  function Qr($, r, e) {
    var a = $.result,
      t = $.keyPrefix;
    ($ = $.func.call($.context, r, $.count++)),
      Array.isArray($)
        ? ng($, a, e, function ($) {
            return $;
          })
        : null != $ &&
          (jg($) &&
            ($ = Nr(
              $,
              t +
                (!$.key || (r && r.key === $.key)
                  ? ''
                  : ('' + $.key).replace(Vj, '$&/') + '/') +
                e
            )),
          a.push($));
  }
  function ng($, r, e, a, t) {
    var i = '';
    null != e && (i = ('' + e).replace(Vj, '$&/') + '/'),
      lg($, Qr, (r = Zj(r, i, a, t))),
      $j(r);
  }
  function Ab() {
    var $ = Wj.current;
    if (null === $) throw Error(fd(321));
    return $;
  }
  function Rr() {
    if (Mr) return;
    Mr = true;
    ja = {};
    fg = (eg(), Ob);
    eb = 'function' == typeof Symbol && Symbol.for;
    ed = eb ? Symbol.for('react.element') : 60103;
    _q = eb ? Symbol.for('react.portal') : 60106;
    ar = eb ? Symbol.for('react.fragment') : 60107;
    br = eb ? Symbol.for('react.strict_mode') : 60108;
    cr = eb ? Symbol.for('react.profiler') : 60114;
    dr = eb ? Symbol.for('react.provider') : 60109;
    er = eb ? Symbol.for('react.context') : 60110;
    fr = eb ? Symbol.for('react.forward_ref') : 60112;
    gr = eb ? Symbol.for('react.suspense') : 60113;
    hr = eb ? Symbol.for('react.memo') : 60115;
    ir = eb ? Symbol.for('react.lazy') : 60116;
    Qj = 'function' == typeof Symbol && Symbol.iterator;
    Rj = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    };
    Sj = {};
    (zc.prototype.isReactComponent = {}),
      (zc.prototype.setState = function ($, r) {
        if ('object' != typeof $ && 'function' != typeof $ && null != $)
          throw Error(fd(85));
        this.updater.enqueueSetState(this, $, r, 'setState');
      }),
      (zc.prototype.forceUpdate = function ($) {
        this.updater.enqueueForceUpdate(this, $, 'forceUpdate');
      }),
      (Xj.prototype = zc.prototype);
    gg = ig.prototype = new Xj();
    (gg.constructor = ig), fg(gg, zc.prototype), (gg.isPureReactComponent = !0);
    hg = {current: null};
    Tj = Object.prototype.hasOwnProperty;
    Uj = {key: !0, ref: !0, __self: !0, __source: !0};
    Vj = /\/+/g;
    xe = [];
    Wj = {current: null};
    jr = {
      ReactCurrentDispatcher: Wj,
      ReactCurrentBatchConfig: {suspense: null},
      ReactCurrentOwner: hg,
      IsSomeRendererActing: {current: !1},
      assign: fg,
    };
    kr = {
      map: function ($, r, e) {
        if (null == $) return $;
        var a = [];
        return ng($, a, null, r, e), a;
      },
      forEach: function ($, r, e) {
        if (null == $) return $;
        lg($, Pr, (r = Zj(null, null, r, e))), $j(r);
      },
      count: function ($) {
        return lg(
          $,
          function () {
            return null;
          },
          null
        );
      },
      toArray: function ($) {
        var r = [];
        return (
          ng($, r, null, function ($) {
            return $;
          }),
          r
        );
      },
      only: function ($) {
        if (!jg($)) throw Error(fd(143));
        return $;
      },
    };
    ja.Children = kr;
    lr = zc;
    ja.Component = lr;
    mr = ar;
    ja.Fragment = mr;
    nr = cr;
    ja.Profiler = nr;
    or = ig;
    ja.PureComponent = or;
    pr = br;
    ja.StrictMode = pr;
    qr = gr;
    ja.Suspense = qr;
    rr = jr;
    ja.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rr;
    sr = function ($, r, e) {
      if (null == $) throw Error(fd(267, $));
      var a = fg({}, $.props),
        t = $.key,
        i = $.ref,
        o = $._owner;
      if (null != r) {
        if (
          (void 0 !== r.ref && ((i = r.ref), (o = hg.current)),
          void 0 !== r.key && (t = '' + r.key),
          $.type && $.type.defaultProps)
        )
          var n = $.type.defaultProps;
        for (u in r)
          Tj.call(r, u) &&
            !Uj.hasOwnProperty(u) &&
            (a[u] = void 0 === r[u] && void 0 !== n ? n[u] : r[u]);
      }
      var u = arguments.length - 2;
      if (1 === u) a.children = e;
      else if (1 < u) {
        n = Array(u);
        for (var w = 0; w < u; w++) n[w] = arguments[w + 2];
        a.children = n;
      }
      return {$$typeof: ed, type: $.type, key: t, ref: i, props: a, _owner: o};
    };
    ja.cloneElement = sr;
    tr = function ($, r) {
      return (
        void 0 === r && (r = null),
        (($ = {
          $$typeof: er,
          _calculateChangedBits: r,
          _currentValue: $,
          _currentValue2: $,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }).Provider = {$$typeof: dr, _context: $}),
        ($.Consumer = $)
      );
    };
    ja.createContext = tr;
    ur = Yj;
    ja.createElement = ur;
    vr = function ($) {
      var r = Yj.bind(null, $);
      return (r.type = $), r;
    };
    ja.createFactory = vr;
    wr = function () {
      return {current: null};
    };
    ja.createRef = wr;
    xr = function ($) {
      return {$$typeof: fr, render: $};
    };
    ja.forwardRef = xr;
    yr = jg;
    ja.isValidElement = yr;
    zr = function ($) {
      return {$$typeof: ir, _ctor: $, _status: -1, _result: null};
    };
    ja.lazy = zr;
    Ar = function ($, r) {
      return {$$typeof: hr, type: $, compare: void 0 === r ? null : r};
    };
    ja.memo = Ar;
    Br = function ($, r) {
      return Ab().useCallback($, r);
    };
    ja.useCallback = Br;
    Cr = function ($, r) {
      return Ab().useContext($, r);
    };
    ja.useContext = Cr;
    Dr = function () {};
    ja.useDebugValue = Dr;
    Er = function ($, r) {
      return Ab().useEffect($, r);
    };
    ja.useEffect = Er;
    Fr = function ($, r, e) {
      return Ab().useImperativeHandle($, r, e);
    };
    ja.useImperativeHandle = Fr;
    Gr = function ($, r) {
      return Ab().useLayoutEffect($, r);
    };
    ja.useLayoutEffect = Gr;
    Hr = function ($, r) {
      return Ab().useMemo($, r);
    };
    ja.useMemo = Hr;
    Ir = function ($, r, e) {
      return Ab().useReducer($, r, e);
    };
    ja.useReducer = Ir;
    Jr = function ($) {
      return Ab().useRef($);
    };
    ja.useRef = Jr;
    Kr = function ($) {
      return Ab().useState($);
    };
    ja.useState = Kr;
    Lr = '16.13.1';
    ja.version = Lr;
  }
  var aa,
    Sr = false;
  function Ja() {
    if (Sr) return;
    Sr = true;
    aa = {};
    aa = (Rr(), ja);
  }
  var Tr = {};
  function _j() {
    if (
      'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
    ) {
      0;
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_j);
      } catch (c) {
        console.error(c);
      }
    }
  }
  var nb,
    ak,
    ye,
    og,
    bk,
    ck,
    Ur,
    ma,
    fb,
    Pb,
    Vr,
    Wa,
    Qb,
    dk,
    pg,
    ek,
    Wr,
    Xr,
    Yr,
    Zr,
    $r,
    _r,
    as,
    bs,
    cs,
    ds,
    es,
    fs,
    gs,
    hs,
    is,
    js,
    ks,
    ls,
    ms = false;
  function qg($, v) {
    var r = $.length;
    $.push(v);
    for (;;) {
      var a = (r - 1) >>> 1,
        e = $[a];
      if (!(void 0 !== e && 0 < Ae(e, v))) break;
      ($[a] = v), ($[r] = e), (r = a);
    }
  }
  function Xa($) {
    return void 0 === ($ = $[0]) ? null : $;
  }
  function ze($) {
    var v = $[0];
    if (void 0 !== v) {
      var r = $.pop();
      if (r !== v) {
        $[0] = r;
        for (var a = 0, e = $.length; a < e; ) {
          var t = 2 * (a + 1) - 1,
            b = $[t],
            n = t + 1,
            P = $[n];
          if (void 0 !== b && 0 > Ae(b, r))
            void 0 !== P && 0 > Ae(P, b)
              ? (($[a] = P), ($[n] = r), (a = n))
              : (($[a] = b), ($[t] = r), (a = t));
          else {
            if (!(void 0 !== P && 0 > Ae(P, r))) break;
            ($[a] = P), ($[n] = r), (a = n);
          }
        }
      }
      return v;
    }
    return null;
  }
  function Ae($, v) {
    var r = $.sortIndex - v.sortIndex;
    return 0 !== r ? r : $.id - v.id;
  }
  function Be($) {
    for (var v = Xa(Pb); null !== v; ) {
      if (null === v.callback) ze(Pb);
      else {
        if (!(v.startTime <= $)) break;
        ze(Pb), (v.sortIndex = v.expirationTime), qg(fb, v);
      }
      v = Xa(Pb);
    }
  }
  function rg($) {
    if (((ek = !1), Be($), !pg))
      if (null !== Xa(fb)) (pg = !0), ye(sg);
      else {
        var v = Xa(Pb);
        null !== v && og(rg, v.startTime - $);
      }
  }
  function sg($, v) {
    (pg = !1), ek && ((ek = !1), bk()), (dk = !0);
    var r = Qb;
    try {
      for (
        Be(v), Wa = Xa(fb);
        null !== Wa && (!(Wa.expirationTime > v) || ($ && !ck()));

      ) {
        var a = Wa.callback;
        if (null !== a) {
          (Wa.callback = null), (Qb = Wa.priorityLevel);
          var e = a(Wa.expirationTime <= v);
          (v = nb()),
            'function' == typeof e
              ? (Wa.callback = e)
              : Wa === Xa(fb) && ze(fb),
            Be(v);
        } else ze(fb);
        Wa = Xa(fb);
      }
      if (null !== Wa) var t = !0;
      else {
        var b = Xa(Pb);
        null !== b && og(rg, b.startTime - v), (t = !1);
      }
      return t;
    } finally {
      (Wa = null), (Qb = r), (dk = !1);
    }
  }
  function fk($) {
    switch ($) {
      case 1:
        return -1;
      case 2:
        return 250;
      case 5:
        return 1073741823;
      case 4:
        return 1e4;
      default:
        return 5e3;
    }
  }
  function ns() {
    if (ms) return;
    ms = true;
    ma = {};
    if ('undefined' == typeof window || 'function' != typeof MessageChannel) {
      var $IvPb$var$p = null,
        $IvPb$var$q = null,
        $IvPb$var$t = function () {
          if (null !== $IvPb$var$p)
            try {
              var $ = nb();
              $IvPb$var$p(!0, $), ($IvPb$var$p = null);
            } catch (v) {
              throw (setTimeout($IvPb$var$t, 0), v);
            }
        },
        $IvPb$var$u = Date.now();
      (nb = function () {
        return Date.now() - $IvPb$var$u;
      }),
        (ma.unstable_now = nb),
        (ye = function ($) {
          null !== $IvPb$var$p
            ? setTimeout(ye, 0, $)
            : (($IvPb$var$p = $), setTimeout($IvPb$var$t, 0));
        }),
        (og = function ($, v) {
          $IvPb$var$q = setTimeout($, v);
        }),
        (bk = function () {
          clearTimeout($IvPb$var$q);
        }),
        (ck = function () {
          return !1;
        }),
        (ak = function () {}),
        (Ur = ma.unstable_forceFrameRate = ak);
    } else {
      var $IvPb$var$w = window.performance,
        $IvPb$var$x = window.Date,
        $IvPb$var$y = window.setTimeout,
        $IvPb$var$z = window.clearTimeout;
      if ('undefined' != typeof console) {
        var $IvPb$var$A = window.cancelAnimationFrame;
        'function' != typeof window.requestAnimationFrame &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
          ),
          'function' != typeof $IvPb$var$A &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            );
      }
      if (
        'object' == typeof $IvPb$var$w &&
        'function' == typeof $IvPb$var$w.now
      )
        (nb = function () {
          return $IvPb$var$w.now();
        }),
          (ma.unstable_now = nb);
      else {
        var $IvPb$var$B = $IvPb$var$x.now();
        (nb = function () {
          return $IvPb$var$x.now() - $IvPb$var$B;
        }),
          (ma.unstable_now = nb);
      }
      var $IvPb$var$C = !1,
        $IvPb$var$D = null,
        $IvPb$var$E = -1,
        $IvPb$var$F = 5,
        $IvPb$var$G = 0;
      (ck = function () {
        return nb() >= $IvPb$var$G;
      }),
        (Ur = function () {}),
        (ak = function ($) {
          0 > $ || 125 < $
            ? console.error(
                'forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported'
              )
            : ($IvPb$var$F = 0 < $ ? Math.floor(1e3 / $) : 5);
        }),
        (ma.unstable_forceFrameRate = ak);
      var $IvPb$var$H = new MessageChannel(),
        $IvPb$var$I = $IvPb$var$H.port2;
      ($IvPb$var$H.port1.onmessage = function () {
        if (null !== $IvPb$var$D) {
          var $ = nb();
          $IvPb$var$G = $ + $IvPb$var$F;
          try {
            $IvPb$var$D(!0, $)
              ? $IvPb$var$I.postMessage(null)
              : (($IvPb$var$C = !1), ($IvPb$var$D = null));
          } catch (v) {
            throw ($IvPb$var$I.postMessage(null), v);
          }
        } else $IvPb$var$C = !1;
      }),
        (ye = function ($) {
          ($IvPb$var$D = $),
            $IvPb$var$C || (($IvPb$var$C = !0), $IvPb$var$I.postMessage(null));
        }),
        (og = function ($, v) {
          $IvPb$var$E = $IvPb$var$y(function () {
            $(nb());
          }, v);
        }),
        (bk = function () {
          $IvPb$var$z($IvPb$var$E), ($IvPb$var$E = -1);
        });
    }
    fb = [];
    Pb = [];
    Vr = 1;
    Wa = null;
    Qb = 3;
    dk = !1;
    pg = !1;
    ek = !1;
    Wr = Ur;
    Xr = 5;
    ma.unstable_IdlePriority = Xr;
    Yr = 1;
    ma.unstable_ImmediatePriority = Yr;
    Zr = 4;
    ma.unstable_LowPriority = Zr;
    $r = 3;
    ma.unstable_NormalPriority = $r;
    _r = null;
    ma.unstable_Profiling = _r;
    as = 2;
    ma.unstable_UserBlockingPriority = as;
    bs = function ($) {
      $.callback = null;
    };
    ma.unstable_cancelCallback = bs;
    cs = function () {
      pg || dk || ((pg = !0), ye(sg));
    };
    ma.unstable_continueExecution = cs;
    ds = function () {
      return Qb;
    };
    ma.unstable_getCurrentPriorityLevel = ds;
    es = function () {
      return Xa(fb);
    };
    ma.unstable_getFirstCallbackNode = es;
    fs = function ($) {
      switch (Qb) {
        case 1:
        case 2:
        case 3:
          var v = 3;
          break;
        default:
          v = Qb;
      }
      var r = Qb;
      Qb = v;
      try {
        return $();
      } finally {
        Qb = r;
      }
    };
    ma.unstable_next = fs;
    gs = function () {};
    ma.unstable_pauseExecution = gs;
    hs = Wr;
    ma.unstable_requestPaint = hs;
    is = function ($, v) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var r = Qb;
      Qb = $;
      try {
        return v();
      } finally {
        Qb = r;
      }
    };
    ma.unstable_runWithPriority = is;
    js = function ($, v, r) {
      var a = nb();
      if ('object' == typeof r && null !== r) {
        var e = r.delay;
        (e = 'number' == typeof e && 0 < e ? a + e : a),
          (r = 'number' == typeof r.timeout ? r.timeout : fk($));
      } else (r = fk($)), (e = a);
      return (
        ($ = {
          id: Vr++,
          callback: v,
          priorityLevel: $,
          startTime: e,
          expirationTime: (r = e + r),
          sortIndex: -1,
        }),
        e > a
          ? (($.sortIndex = e),
            qg(Pb, $),
            null === Xa(fb) &&
              $ === Xa(Pb) &&
              (ek ? bk() : (ek = !0), og(rg, e - a)))
          : (($.sortIndex = r), qg(fb, $), pg || dk || ((pg = !0), ye(sg))),
        $
      );
    };
    ma.unstable_scheduleCallback = js;
    ks = function () {
      var $ = nb();
      Be($);
      var v = Xa(fb);
      return (
        (v !== Wa &&
          null !== Wa &&
          null !== v &&
          null !== v.callback &&
          v.startTime <= $ &&
          v.expirationTime < Wa.expirationTime) ||
        ck()
      );
    };
    ma.unstable_shouldYield = ks;
    ls = function ($) {
      var v = Qb;
      return function () {
        var r = Qb;
        Qb = v;
        try {
          return $.apply(this, arguments);
        } finally {
          Qb = r;
        }
      };
    };
    ma.unstable_wrapCallback = ls;
  }
  var os,
    ps = false;
  function qs() {
    if (ps) return;
    ps = true;
    os = {};
    os = (ns(), ma);
  }
  var Ya,
    Ce,
    Ea,
    za,
    gk,
    rs,
    hk,
    ss,
    ts,
    ik,
    us,
    vs,
    tg,
    Ac,
    De,
    ug,
    Bc,
    vg,
    Rb,
    jk,
    Ee,
    Fe,
    ws,
    wg,
    xs,
    ys,
    kk,
    lk,
    mk,
    Aa,
    xg,
    gb,
    zs,
    Ka,
    Ge,
    Cc,
    dc,
    nk,
    He,
    ok,
    pk,
    As,
    yg,
    Ie,
    zg,
    Ag,
    qk,
    rk,
    sk,
    tk,
    uk,
    vk,
    Dc,
    Bg,
    Bs,
    wk,
    xk,
    yk,
    zk,
    gd,
    Ak,
    Cg,
    Je,
    Cs,
    Bk,
    Ds,
    Es,
    ob,
    hd,
    id,
    jd,
    kd,
    ld,
    md,
    Dg,
    Fs,
    Ck,
    Dk,
    Eg,
    Gs,
    Hs,
    Is,
    Ek,
    nd,
    Js,
    Ks,
    Fk,
    Gk,
    Hk,
    Fg,
    Gg,
    Ls,
    Ms,
    Hg,
    Ns,
    Ig,
    Sb,
    Ke,
    od,
    pd,
    Os,
    Ik,
    Ps,
    Qs,
    Rs,
    Jg,
    Le,
    Ss,
    Jk,
    Kk,
    Bb,
    Ts,
    Me,
    Us,
    Vs,
    Lk,
    Mk,
    Kg,
    Nk,
    Ws,
    qd,
    Xs,
    Ys,
    Zs,
    $s,
    _s,
    rd,
    Ok,
    sd,
    at,
    ec,
    bt,
    ct,
    Pk,
    Ne,
    dt,
    Qk,
    et,
    ft,
    gt,
    ht,
    it,
    jt,
    kt,
    lt,
    mt,
    nt,
    ot,
    pt,
    qt,
    rt,
    Lg,
    td,
    Tb,
    Ca,
    La,
    Ec,
    st,
    Mg,
    Rk,
    Sk,
    Ng,
    tt,
    Oe,
    Tk,
    Uk,
    Vk,
    Wk,
    Xk,
    ut,
    vt,
    Fc,
    Yk,
    wt,
    Zk,
    Za,
    Pe,
    $k,
    _k,
    xt,
    Qe,
    ud,
    al,
    Re,
    Se,
    Gc,
    Og,
    vd,
    pb,
    wd,
    xd,
    ta,
    Te,
    $a,
    yd,
    Da,
    qb,
    Ub,
    yt,
    Ue,
    zt,
    At,
    Bt,
    Pg,
    bl,
    cl,
    Ct,
    dl,
    Dt,
    el,
    Et,
    Ft,
    Qg,
    Gt,
    Ht,
    It,
    Jt,
    Ve,
    fl,
    va,
    Rg,
    hb,
    rb,
    fc,
    We,
    gl,
    Xe,
    Ye,
    Sg,
    ra,
    Cb,
    ga,
    ab,
    bb,
    hl,
    gc,
    Tg,
    il,
    Ug,
    jl,
    kl,
    ll,
    ca,
    ml,
    Kt,
    Hc,
    nl,
    Vg,
    Wg,
    zd,
    ol,
    Lt,
    pl,
    ql,
    rl,
    Mt,
    Nt,
    Ot,
    Pt,
    Qt,
    Rt,
    St,
    Tt,
    Ut,
    Vt,
    Wt,
    Xt,
    Yt = false;
  function Y(t) {
    for (
      var $ = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
        e = 1;
      e < arguments.length;
      e++
    )
      $ += '&args[]=' + encodeURIComponent(arguments[e]);
    return (
      'Minified React error #' +
      t +
      '; visit ' +
      $ +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function Zt(t, $, e, r, i, a, n, l, v) {
    var o = Array.prototype.slice.call(arguments, 3);
    try {
      $.apply(e, o);
    } catch (u) {
      this.onError(u);
    }
  }
  function $t(t, $, e, r, i, a, n, l, v) {
    (gk = !1), (rs = null), Zt.apply(ts, arguments);
  }
  function _t(t, $, e, r, i, a, n, l, v) {
    if (($t.apply(this, arguments), gk)) {
      if (!gk) throw Error(Y(198));
      var o = rs;
      (gk = !1), (rs = null), hk || ((hk = !0), (ss = o));
    }
  }
  function sl(t, $, e) {
    var r = t.type || 'unknown-event';
    (t.currentTarget = vs(e)), _t(r, $, void 0, t), (t.currentTarget = null);
  }
  function tl() {
    if (tg)
      for (var t in Ac) {
        var $ = Ac[t],
          e = tg.indexOf(t);
        if (!(-1 < e)) throw Error(Y(96, t));
        if (!De[e]) {
          if (!$.extractEvents) throw Error(Y(97, t));
          for (var r in ((De[e] = $), (e = $.eventTypes))) {
            var i = void 0,
              a = e[r],
              n = $,
              l = r;
            if (ug.hasOwnProperty(l)) throw Error(Y(99, l));
            ug[l] = a;
            var v = a.phasedRegistrationNames;
            if (v) {
              for (i in v) v.hasOwnProperty(i) && ul(v[i], n, l);
              i = !0;
            } else
              a.registrationName
                ? (ul(a.registrationName, n, l), (i = !0))
                : (i = !1);
            if (!i) throw Error(Y(98, r, t));
          }
        }
      }
  }
  function ul(t, $, e) {
    if (Bc[t]) throw Error(Y(100, t));
    (Bc[t] = $), (vg[t] = $.eventTypes[e].dependencies);
  }
  function vl(t) {
    var $,
      e = !1;
    for ($ in t)
      if (t.hasOwnProperty($)) {
        var r = t[$];
        if (!Ac.hasOwnProperty($) || Ac[$] !== r) {
          if (Ac[$]) throw Error(Y(102, $));
          (Ac[$] = r), (e = !0);
        }
      }
    e && tl();
  }
  function wl(t) {
    if ((t = us(t))) {
      if ('function' != typeof jk) throw Error(Y(280));
      var $ = t.stateNode;
      $ && (($ = ik($)), jk(t.stateNode, t.type, $));
    }
  }
  function xl(t) {
    Ee ? (Fe ? Fe.push(t) : (Fe = [t])) : (Ee = t);
  }
  function yl() {
    if (Ee) {
      var t = Ee,
        $ = Fe;
      if (((Fe = Ee = null), wl(t), $)) for (t = 0; t < $.length; t++) wl($[t]);
    }
  }
  function zl(t, $) {
    return t($);
  }
  function au(t, $, e, r, i) {
    return t($, e, r, i);
  }
  function Al() {}
  function Xg() {
    (null === Ee && null === Fe) || (Al(), yl());
  }
  function Bl(t, $, e) {
    if (xs) return t($, e);
    xs = !0;
    try {
      return ws(t, $, e);
    } finally {
      (xs = !1), Xg();
    }
  }
  function bu(t) {
    return (
      !!kk.call(mk, t) ||
      (!kk.call(lk, t) && (ys.test(t) ? (mk[t] = !0) : ((lk[t] = !0), !1)))
    );
  }
  function cu(t, $, e, r) {
    if (null !== e && 0 === e.type) return !1;
    switch (typeof $) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return (
          !r &&
          (null !== e
            ? !e.acceptsBooleans
            : 'data-' !== (t = t.toLowerCase().slice(0, 5)) && 'aria-' !== t)
        );
      default:
        return !1;
    }
  }
  function du(t, $, e, r) {
    if (null == $ || cu(t, $, e, r)) return !0;
    if (r) return !1;
    if (null !== e)
      switch (e.type) {
        case 3:
          return !$;
        case 4:
          return !1 === $;
        case 5:
          return isNaN($);
        case 6:
          return isNaN($) || 1 > $;
      }
    return !1;
  }
  function Fa(t, $, e, r, i, a) {
    (this.acceptsBooleans = 2 === $ || 3 === $ || 4 === $),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = e),
      (this.propertyName = t),
      (this.type = $),
      (this.sanitizeURL = a);
  }
  function Yg(t) {
    return t[1].toUpperCase();
  }
  function Zg(t, $, e, r) {
    var i = Aa.hasOwnProperty($) ? Aa[$] : null;
    (null !== i
      ? 0 === i.type
      : !r &&
        2 < $.length &&
        ('o' === $[0] || 'O' === $[0]) &&
        ('n' === $[1] || 'N' === $[1])) ||
      (du($, e, i, r) && (e = null),
      r || null === i
        ? bu($) &&
          (null === e ? t.removeAttribute($) : t.setAttribute($, '' + e))
        : i.mustUseProperty
        ? (t[i.propertyName] = null === e ? 3 !== i.type && '' : e)
        : (($ = i.attributeName),
          (r = i.attributeNamespace),
          null === e
            ? t.removeAttribute($)
            : ((e = 3 === (i = i.type) || (4 === i && !0 === e) ? '' : '' + e),
              r ? t.setAttributeNS(r, $, e) : t.setAttribute($, e))));
  }
  function Ad(t) {
    return null === t || 'object' != typeof t
      ? null
      : 'function' == typeof (t = (sk && t[sk]) || t['@@iterator'])
      ? t
      : null;
  }
  function eu(t) {
    if (-1 === t._status) {
      t._status = 0;
      var $ = t._ctor;
      ($ = $()),
        (t._result = $),
        $.then(
          function ($) {
            0 === t._status &&
              (($ = $.default), (t._status = 1), (t._result = $));
          },
          function ($) {
            0 === t._status && ((t._status = 2), (t._result = $));
          }
        );
    }
  }
  function Db(t) {
    if (null == t) return null;
    if ('function' == typeof t) return t.displayName || t.name || null;
    if ('string' == typeof t) return t;
    switch (t) {
      case dc:
        return 'Fragment';
      case Cc:
        return 'Portal';
      case He:
        return 'Profiler';
      case nk:
        return 'StrictMode';
      case Ie:
        return 'Suspense';
      case zg:
        return 'SuspenseList';
    }
    if ('object' == typeof t)
      switch (t.$$typeof) {
        case pk:
          return 'Context.Consumer';
        case ok:
          return 'Context.Provider';
        case yg:
          var $ = t.render;
          return (
            ($ = $.displayName || $.name || ''),
            t.displayName || ('' !== $ ? 'ForwardRef(' + $ + ')' : 'ForwardRef')
          );
        case Ag:
          return Db(t.type);
        case rk:
          return Db(t.render);
        case qk:
          if ((t = 1 === t._status ? t._result : null)) return Db(t);
      }
    return null;
  }
  function $g(t) {
    var $ = '';
    do {
      switch (t.tag) {
        case 3:
        case 4:
        case 6:
        case 7:
        case 10:
        case 9:
          var e = '';
          break;
        default:
          var r = t._debugOwner,
            i = t._debugSource,
            a = Db(t.type);
          (e = null),
            r && (e = Db(r.type)),
            (r = a),
            (a = ''),
            i
              ? (a =
                  ' (at ' +
                  i.fileName.replace(zs, '') +
                  ':' +
                  i.lineNumber +
                  ')')
              : e && (a = ' (created by ' + e + ')'),
            (e = '\n    in ' + (r || 'Unknown') + a);
      }
      ($ += e), (t = t.return);
    } while (t);
    return $;
  }
  function Vb(t) {
    switch (typeof t) {
      case 'boolean':
      case 'number':
      case 'object':
      case 'string':
      case 'undefined':
        return t;
      default:
        return '';
    }
  }
  function Cl(t) {
    var $ = t.type;
    return (
      (t = t.nodeName) &&
      'input' === t.toLowerCase() &&
      ('checkbox' === $ || 'radio' === $)
    );
  }
  function fu(t) {
    var $ = Cl(t) ? 'checked' : 'value',
      e = Object.getOwnPropertyDescriptor(t.constructor.prototype, $),
      r = '' + t[$];
    if (
      !t.hasOwnProperty($) &&
      void 0 !== e &&
      'function' == typeof e.get &&
      'function' == typeof e.set
    ) {
      var i = e.get,
        a = e.set;
      return (
        Object.defineProperty(t, $, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (t) {
            (r = '' + t), a.call(this, t);
          },
        }),
        Object.defineProperty(t, $, {enumerable: e.enumerable}),
        {
          getValue: function () {
            return r;
          },
          setValue: function (t) {
            r = '' + t;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[$];
          },
        }
      );
    }
  }
  function Ze(t) {
    t._valueTracker || (t._valueTracker = fu(t));
  }
  function Dl(t) {
    if (!t) return !1;
    var $ = t._valueTracker;
    if (!$) return !0;
    var e = $.getValue(),
      r = '';
    return (
      t && (r = Cl(t) ? (t.checked ? 'true' : 'false') : t.value),
      (t = r) !== e && ($.setValue(t), !0)
    );
  }
  function _g(t, $) {
    var e = $.checked;
    return Ea({}, $, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: null != e ? e : t._wrapperState.initialChecked,
    });
  }
  function El(t, $) {
    var e = null == $.defaultValue ? '' : $.defaultValue,
      r = null != $.checked ? $.checked : $.defaultChecked;
    (e = Vb(null != $.value ? $.value : e)),
      (t._wrapperState = {
        initialChecked: r,
        initialValue: e,
        controlled:
          'checkbox' === $.type || 'radio' === $.type
            ? null != $.checked
            : null != $.value,
      });
  }
  function Fl(t, $) {
    null != ($ = $.checked) && Zg(t, 'checked', $, !1);
  }
  function ah(t, $) {
    Fl(t, $);
    var e = Vb($.value),
      r = $.type;
    if (null != e)
      'number' === r
        ? ((0 === e && '' === t.value) || t.value != e) && (t.value = '' + e)
        : t.value !== '' + e && (t.value = '' + e);
    else if ('submit' === r || 'reset' === r)
      return void t.removeAttribute('value');
    $.hasOwnProperty('value')
      ? bh(t, $.type, e)
      : $.hasOwnProperty('defaultValue') && bh(t, $.type, Vb($.defaultValue)),
      null == $.checked &&
        null != $.defaultChecked &&
        (t.defaultChecked = !!$.defaultChecked);
  }
  function Gl(t, $, e) {
    if ($.hasOwnProperty('value') || $.hasOwnProperty('defaultValue')) {
      var r = $.type;
      if (
        !(
          ('submit' !== r && 'reset' !== r) ||
          (void 0 !== $.value && null !== $.value)
        )
      )
        return;
      ($ = '' + t._wrapperState.initialValue),
        e || $ === t.value || (t.value = $),
        (t.defaultValue = $);
    }
    '' !== (e = t.name) && (t.name = ''),
      (t.defaultChecked = !!t._wrapperState.initialChecked),
      '' !== e && (t.name = e);
  }
  function bh(t, $, e) {
    ('number' === $ && t.ownerDocument.activeElement === t) ||
      (null == e
        ? (t.defaultValue = '' + t._wrapperState.initialValue)
        : t.defaultValue !== '' + e && (t.defaultValue = '' + e));
  }
  function gu(t) {
    var $ = '';
    return (
      Ce.Children.forEach(t, function (t) {
        null != t && ($ += t);
      }),
      $
    );
  }
  function ch(t, $) {
    return (
      (t = Ea({children: void 0}, $)),
      ($ = gu($.children)) && (t.children = $),
      t
    );
  }
  function Ic(t, $, e, r) {
    if (((t = t.options), $)) {
      $ = {};
      for (var i = 0; i < e.length; i++) $['$' + e[i]] = !0;
      for (e = 0; e < t.length; e++)
        (i = $.hasOwnProperty('$' + t[e].value)),
          t[e].selected !== i && (t[e].selected = i),
          i && r && (t[e].defaultSelected = !0);
    } else {
      for (e = '' + Vb(e), $ = null, i = 0; i < t.length; i++) {
        if (t[i].value === e)
          return (t[i].selected = !0), void (r && (t[i].defaultSelected = !0));
        null !== $ || t[i].disabled || ($ = t[i]);
      }
      null !== $ && ($.selected = !0);
    }
  }
  function dh(t, $) {
    if (null != $.dangerouslySetInnerHTML) throw Error(Y(91));
    return Ea({}, $, {
      value: void 0,
      defaultValue: void 0,
      children: '' + t._wrapperState.initialValue,
    });
  }
  function Hl(t, $) {
    var e = $.value;
    if (null == e) {
      if (((e = $.children), ($ = $.defaultValue), null != e)) {
        if (null != $) throw Error(Y(92));
        if (Array.isArray(e)) {
          if (!(1 >= e.length)) throw Error(Y(93));
          e = e[0];
        }
        $ = e;
      }
      null == $ && ($ = ''), (e = $);
    }
    t._wrapperState = {initialValue: Vb(e)};
  }
  function Il(t, $) {
    var e = Vb($.value),
      r = Vb($.defaultValue);
    null != e &&
      ((e = '' + e) !== t.value && (t.value = e),
      null == $.defaultValue && t.defaultValue !== e && (t.defaultValue = e)),
      null != r && (t.defaultValue = '' + r);
  }
  function Jl(t) {
    var $ = t.textContent;
    $ === t._wrapperState.initialValue &&
      '' !== $ &&
      null !== $ &&
      (t.value = $);
  }
  function Kl(t) {
    switch (t) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function eh(t, $) {
    return null == t || 'http://www.w3.org/1999/xhtml' === t
      ? Kl($)
      : 'http://www.w3.org/2000/svg' === t && 'foreignObject' === $
      ? 'http://www.w3.org/1999/xhtml'
      : t;
  }
  function Bd(t, $) {
    if ($) {
      var e = t.firstChild;
      if (e && e === t.lastChild && 3 === e.nodeType)
        return void (e.nodeValue = $);
    }
    t.textContent = $;
  }
  function $e(t, $) {
    var e = {};
    return (
      (e[t.toLowerCase()] = $.toLowerCase()),
      (e['Webkit' + t] = 'webkit' + $),
      (e['Moz' + t] = 'moz' + $),
      e
    );
  }
  function _e(t) {
    if (Bg[t]) return Bg[t];
    if (!Dc[t]) return t;
    var $,
      e = Dc[t];
    for ($ in e) if (e.hasOwnProperty($) && $ in Bs) return (Bg[t] = e[$]);
    return t;
  }
  function fh(t) {
    var $ = Ak.get(t);
    return void 0 === $ && (($ = new Map()), Ak.set(t, $)), $;
  }
  function hc(t) {
    var $ = t,
      e = t;
    if (t.alternate) for (; $.return; ) $ = $.return;
    else {
      t = $;
      do {
        0 != (1026 & ($ = t).effectTag) && (e = $.return), (t = $.return);
      } while (t);
    }
    return 3 === $.tag ? e : null;
  }
  function Ll(t) {
    if (13 === t.tag) {
      var $ = t.memoizedState;
      if (
        (null === $ && null !== (t = t.alternate) && ($ = t.memoizedState),
        null !== $)
      )
        return $.dehydrated;
    }
    return null;
  }
  function Ml(t) {
    if (hc(t) !== t) throw Error(Y(188));
  }
  function hu(t) {
    var $ = t.alternate;
    if (!$) {
      if (null === ($ = hc(t))) throw Error(Y(188));
      return $ !== t ? null : t;
    }
    for (var e = t, r = $; ; ) {
      var i = e.return;
      if (null === i) break;
      var a = i.alternate;
      if (null === a) {
        if (null !== (r = i.return)) {
          e = r;
          continue;
        }
        break;
      }
      if (i.child === a.child) {
        for (a = i.child; a; ) {
          if (a === e) return Ml(i), t;
          if (a === r) return Ml(i), $;
          a = a.sibling;
        }
        throw Error(Y(188));
      }
      if (e.return !== r.return) (e = i), (r = a);
      else {
        for (var n = !1, l = i.child; l; ) {
          if (l === e) {
            (n = !0), (e = i), (r = a);
            break;
          }
          if (l === r) {
            (n = !0), (r = i), (e = a);
            break;
          }
          l = l.sibling;
        }
        if (!n) {
          for (l = a.child; l; ) {
            if (l === e) {
              (n = !0), (e = a), (r = i);
              break;
            }
            if (l === r) {
              (n = !0), (r = a), (e = i);
              break;
            }
            l = l.sibling;
          }
          if (!n) throw Error(Y(189));
        }
      }
      if (e.alternate !== r) throw Error(Y(190));
    }
    if (3 !== e.tag) throw Error(Y(188));
    return e.stateNode.current === e ? t : $;
  }
  function Nl(t) {
    if (!(t = hu(t))) return null;
    for (var $ = t; ; ) {
      if (5 === $.tag || 6 === $.tag) return $;
      if ($.child) ($.child.return = $), ($ = $.child);
      else {
        if ($ === t) break;
        for (; !$.sibling; ) {
          if (!$.return || $.return === t) return null;
          $ = $.return;
        }
        ($.sibling.return = $.return), ($ = $.sibling);
      }
    }
    return null;
  }
  function Jc(t, $) {
    if (null == $) throw Error(Y(30));
    return null == t
      ? $
      : Array.isArray(t)
      ? Array.isArray($)
        ? (t.push.apply(t, $), t)
        : (t.push($), t)
      : Array.isArray($)
      ? [t].concat($)
      : [t, $];
  }
  function gh(t, $, e) {
    Array.isArray(t) ? t.forEach($, e) : t && $.call(e, t);
  }
  function iu(t) {
    if (t) {
      var $ = t._dispatchListeners,
        e = t._dispatchInstances;
      if (Array.isArray($))
        for (var r = 0; r < $.length && !t.isPropagationStopped(); r++)
          sl(t, $[r], e[r]);
      else $ && sl(t, $, e);
      (t._dispatchListeners = null),
        (t._dispatchInstances = null),
        t.isPersistent() || t.constructor.release(t);
    }
  }
  function af(t) {
    if ((null !== t && (Cg = Jc(Cg, t)), (t = Cg), (Cg = null), t)) {
      if ((gh(t, iu), Cg)) throw Error(Y(95));
      if (hk) throw ((t = ss), (hk = !1), (ss = null), t);
    }
  }
  function hh(t) {
    return (
      (t = t.target || t.srcElement || window).correspondingUseElement &&
        (t = t.correspondingUseElement),
      3 === t.nodeType ? t.parentNode : t
    );
  }
  function Ol(t) {
    if (!Rb) return !1;
    var $ = (t = 'on' + t) in document;
    return (
      $ ||
        (($ = document.createElement('div')).setAttribute(t, 'return;'),
        ($ = 'function' == typeof $[t])),
      $
    );
  }
  function Pl(t) {
    (t.topLevelType = null),
      (t.nativeEvent = null),
      (t.targetInst = null),
      (t.ancestors.length = 0),
      10 > Je.length && Je.push(t);
  }
  function Ql(t, $, e, r) {
    if (Je.length) {
      var i = Je.pop();
      return (
        (i.topLevelType = t),
        (i.eventSystemFlags = r),
        (i.nativeEvent = $),
        (i.targetInst = e),
        i
      );
    }
    return {
      topLevelType: t,
      eventSystemFlags: r,
      nativeEvent: $,
      targetInst: e,
      ancestors: [],
    };
  }
  function Rl(t) {
    var $ = t.targetInst,
      e = $;
    do {
      if (!e) {
        t.ancestors.push(e);
        break;
      }
      var r = e;
      if (3 === r.tag) r = r.stateNode.containerInfo;
      else {
        for (; r.return; ) r = r.return;
        r = 3 !== r.tag ? null : r.stateNode.containerInfo;
      }
      if (!r) break;
      (5 !== ($ = e.tag) && 6 !== $) || t.ancestors.push(e), (e = Fd(r));
    } while (e);
    for (e = 0; e < t.ancestors.length; e++) {
      $ = t.ancestors[e];
      var i = hh(t.nativeEvent);
      r = t.topLevelType;
      var a = t.nativeEvent,
        n = t.eventSystemFlags;
      0 === e && (n |= 64);
      for (var l = null, v = 0; v < De.length; v++) {
        var o = De[v];
        o && (o = o.extractEvents(r, $, a, i, n)) && (l = Jc(l, o));
      }
      af(l);
    }
  }
  function ih(t, $, e) {
    if (!e.has(t)) {
      switch (t) {
        case 'scroll':
          Ed($, 'scroll', !0);
          break;
        case 'focus':
        case 'blur':
          Ed($, 'focus', !0),
            Ed($, 'blur', !0),
            e.set('blur', null),
            e.set('focus', null);
          break;
        case 'cancel':
        case 'close':
          Ol(t) && Ed($, t, !0);
          break;
        case 'invalid':
        case 'submit':
        case 'reset':
          break;
        default:
          -1 === gd.indexOf(t) && na(t, $);
      }
      e.set(t, null);
    }
  }
  function ju(t, $) {
    var e = fh($);
    Dg.forEach(function (t) {
      ih(t, $, e);
    }),
      Fs.forEach(function (t) {
        ih(t, $, e);
      });
  }
  function jh(t, $, e, r, i) {
    return {
      blockedOn: t,
      topLevelType: $,
      eventSystemFlags: 32 | e,
      nativeEvent: i,
      container: r,
    };
  }
  function Sl(t, $) {
    switch (t) {
      case 'focus':
      case 'blur':
        hd = null;
        break;
      case 'dragenter':
      case 'dragleave':
        id = null;
        break;
      case 'mouseover':
      case 'mouseout':
        jd = null;
        break;
      case 'pointerover':
      case 'pointerout':
        kd.delete($.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        ld.delete($.pointerId);
    }
  }
  function Cd(t, $, e, r, i, a) {
    return null === t || t.nativeEvent !== a
      ? ((t = jh($, e, r, i, a)),
        null !== $ && null !== ($ = Gd($)) && Bk($),
        t)
      : ((t.eventSystemFlags |= r), t);
  }
  function ku(t, $, e, r, i) {
    switch ($) {
      case 'focus':
        return (hd = Cd(hd, t, $, e, r, i)), !0;
      case 'dragenter':
        return (id = Cd(id, t, $, e, r, i)), !0;
      case 'mouseover':
        return (jd = Cd(jd, t, $, e, r, i)), !0;
      case 'pointerover':
        var a = i.pointerId;
        return kd.set(a, Cd(kd.get(a) || null, t, $, e, r, i)), !0;
      case 'gotpointercapture':
        return (
          (a = i.pointerId), ld.set(a, Cd(ld.get(a) || null, t, $, e, r, i)), !0
        );
    }
    return !1;
  }
  function lu(t) {
    var $ = Fd(t.target);
    if (null !== $) {
      var e = hc($);
      if (null !== e)
        if (13 === ($ = e.tag)) {
          if (null !== ($ = Ll(e)))
            return (
              (t.blockedOn = $),
              void za.unstable_runWithPriority(t.priority, function () {
                Ds(e);
              })
            );
        } else if (3 === $ && e.stateNode.hydrate)
          return void (t.blockedOn =
            3 === e.tag ? e.stateNode.containerInfo : null);
    }
    t.blockedOn = null;
  }
  function bf(t) {
    if (null !== t.blockedOn) return !1;
    var $ = lh(t.topLevelType, t.eventSystemFlags, t.container, t.nativeEvent);
    if (null !== $) {
      var e = Gd($);
      return null !== e && Bk(e), (t.blockedOn = $), !1;
    }
    return !0;
  }
  function Tl(t, $, e) {
    bf(t) && e.delete($);
  }
  function mu() {
    for (Es = !1; 0 < ob.length; ) {
      var t = ob[0];
      if (null !== t.blockedOn) {
        null !== (t = Gd(t.blockedOn)) && Cs(t);
        break;
      }
      var $ = lh(
        t.topLevelType,
        t.eventSystemFlags,
        t.container,
        t.nativeEvent
      );
      null !== $ ? (t.blockedOn = $) : ob.shift();
    }
    null !== hd && bf(hd) && (hd = null),
      null !== id && bf(id) && (id = null),
      null !== jd && bf(jd) && (jd = null),
      kd.forEach(Tl),
      ld.forEach(Tl);
  }
  function Dd(t, $) {
    t.blockedOn === $ &&
      ((t.blockedOn = null),
      Es ||
        ((Es = !0),
        za.unstable_scheduleCallback(za.unstable_NormalPriority, mu)));
  }
  function Ul(t) {
    function $($) {
      return Dd($, t);
    }
    if (0 < ob.length) {
      Dd(ob[0], t);
      for (var e = 1; e < ob.length; e++) {
        var r = ob[e];
        r.blockedOn === t && (r.blockedOn = null);
      }
    }
    for (
      null !== hd && Dd(hd, t),
        null !== id && Dd(id, t),
        null !== jd && Dd(jd, t),
        kd.forEach($),
        ld.forEach($),
        e = 0;
      e < md.length;
      e++
    )
      (r = md[e]).blockedOn === t && (r.blockedOn = null);
    for (; 0 < md.length && null === (e = md[0]).blockedOn; )
      lu(e), null === e.blockedOn && md.shift();
  }
  function kh(t, $) {
    for (var e = 0; e < t.length; e += 2) {
      var r = t[e],
        i = t[e + 1],
        a = 'on' + (i[0].toUpperCase() + i.slice(1));
      (a = {
        phasedRegistrationNames: {bubbled: a, captured: a + 'Capture'},
        dependencies: [r],
        eventPriority: $,
      }),
        Eg.set(r, $),
        Dk.set(r, a),
        (Ck[i] = a);
    }
  }
  function na(t, $) {
    Ed($, t, !1);
  }
  function Ed(t, $, e) {
    var r = Eg.get($);
    switch (void 0 === r ? 2 : r) {
      case 0:
        r = nu.bind(null, $, 1, t);
        break;
      case 1:
        r = ou.bind(null, $, 1, t);
        break;
      default:
        r = cf.bind(null, $, 1, t);
    }
    e ? t.addEventListener($, r, !0) : t.addEventListener($, r, !1);
  }
  function nu(t, $, e, r) {
    wg || Al();
    var i = cf,
      a = wg;
    wg = !0;
    try {
      au(i, t, $, e, r);
    } finally {
      (wg = a) || Xg();
    }
  }
  function ou(t, $, e, r) {
    Is(Hs, cf.bind(null, t, $, e, r));
  }
  function cf(t, $, e, r) {
    if (Ek)
      if (0 < ob.length && -1 < Dg.indexOf(t))
        (t = jh(null, t, $, e, r)), ob.push(t);
      else {
        var i = lh(t, $, e, r);
        if (null === i) Sl(t, r);
        else if (-1 < Dg.indexOf(t)) (t = jh(i, t, $, e, r)), ob.push(t);
        else if (!ku(i, t, $, e, r)) {
          Sl(t, r), (t = Ql(t, r, null, $));
          try {
            Bl(Rl, t);
          } finally {
            Pl(t);
          }
        }
      }
  }
  function lh(t, $, e, r) {
    if (null !== (e = Fd((e = hh(r))))) {
      var i = hc(e);
      if (null === i) e = null;
      else {
        var a = i.tag;
        if (13 === a) {
          if (null !== (e = Ll(i))) return e;
          e = null;
        } else if (3 === a) {
          if (i.stateNode.hydrate)
            return 3 === i.tag ? i.stateNode.containerInfo : null;
          e = null;
        } else i !== e && (e = null);
      }
    }
    t = Ql(t, r, e, $);
    try {
      Bl(Rl, t);
    } finally {
      Pl(t);
    }
    return null;
  }
  function Vl(t, $, e) {
    return null == $ || 'boolean' == typeof $ || '' === $
      ? ''
      : e || 'number' != typeof $ || 0 === $ || (nd.hasOwnProperty(t) && nd[t])
      ? ('' + $).trim()
      : $ + 'px';
  }
  function Wl(t, $) {
    for (var e in ((t = t.style), $))
      if ($.hasOwnProperty(e)) {
        var r = 0 === e.indexOf('--'),
          i = Vl(e, $[e], r);
        'float' === e && (e = 'cssFloat'), r ? t.setProperty(e, i) : (t[e] = i);
      }
  }
  function mh(t, $) {
    if ($) {
      if (Ks[t] && (null != $.children || null != $.dangerouslySetInnerHTML))
        throw Error(Y(137, t, ''));
      if (null != $.dangerouslySetInnerHTML) {
        if (null != $.children) throw Error(Y(60));
        if (
          !(
            'object' == typeof $.dangerouslySetInnerHTML &&
            '__html' in $.dangerouslySetInnerHTML
          )
        )
          throw Error(Y(61));
      }
      if (null != $.style && 'object' != typeof $.style) throw Error(Y(62, ''));
    }
  }
  function nh(t, $) {
    if (-1 === t.indexOf('-')) return 'string' == typeof $.is;
    switch (t) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  function Eb(t, $) {
    var e = fh(
      (t = 9 === t.nodeType || 11 === t.nodeType ? t : t.ownerDocument)
    );
    $ = vg[$];
    for (var r = 0; r < $.length; r++) ih($[r], t, e);
  }
  function df() {}
  function oh(t) {
    if (
      void 0 === (t = t || ('undefined' != typeof document ? document : void 0))
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch ($) {
      return t.body;
    }
  }
  function Xl(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Yl(t, $) {
    var e,
      r = Xl(t);
    for (t = 0; r; ) {
      if (3 === r.nodeType) {
        if (((e = t + r.textContent.length), t <= $ && e >= $))
          return {node: r, offset: $ - t};
        t = e;
      }
      t: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break t;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Xl(r);
    }
  }
  function Zl(t, $) {
    return (
      !(!t || !$) &&
      (t === $ ||
        ((!t || 3 !== t.nodeType) &&
          ($ && 3 === $.nodeType
            ? Zl(t, $.parentNode)
            : 'contains' in t
            ? t.contains($)
            : !!t.compareDocumentPosition &&
              !!(16 & t.compareDocumentPosition($)))))
    );
  }
  function $l() {
    for (var t = window, $ = oh(); $ instanceof t.HTMLIFrameElement; ) {
      try {
        var e = 'string' == typeof $.contentWindow.location.href;
      } catch (r) {
        e = !1;
      }
      if (!e) break;
      $ = oh((t = $.contentWindow).document);
    }
    return $;
  }
  function ph(t) {
    var $ = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      $ &&
      (('input' === $ &&
        ('text' === t.type ||
          'search' === t.type ||
          'tel' === t.type ||
          'url' === t.type ||
          'password' === t.type)) ||
        'textarea' === $ ||
        'true' === t.contentEditable)
    );
  }
  function _l(t, $) {
    switch (t) {
      case 'button':
      case 'input':
      case 'select':
      case 'textarea':
        return !!$.autoFocus;
    }
    return !1;
  }
  function qh(t, $) {
    return (
      'textarea' === t ||
      'option' === t ||
      'noscript' === t ||
      'string' == typeof $.children ||
      'number' == typeof $.children ||
      ('object' == typeof $.dangerouslySetInnerHTML &&
        null !== $.dangerouslySetInnerHTML &&
        null != $.dangerouslySetInnerHTML.__html)
    );
  }
  function Kc(t) {
    for (; null != t; t = t.nextSibling) {
      var $ = t.nodeType;
      if (1 === $ || 3 === $) break;
    }
    return t;
  }
  function am(t) {
    t = t.previousSibling;
    for (var $ = 0; t; ) {
      if (8 === t.nodeType) {
        var e = t.data;
        if (e === Gk || e === Gg || e === Fg) {
          if (0 === $) return t;
          $--;
        } else e === Hk && $++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Fd(t) {
    var $ = t[Sb];
    if ($) return $;
    for (var e = t.parentNode; e; ) {
      if (($ = e[od] || e[Sb])) {
        if (
          ((e = $.alternate),
          null !== $.child || (null !== e && null !== e.child))
        )
          for (t = am(t); null !== t; ) {
            if ((e = t[Sb])) return e;
            t = am(t);
          }
        return $;
      }
      e = (t = e).parentNode;
    }
    return null;
  }
  function Gd(t) {
    return !(t = t[Sb] || t[od]) ||
      (5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag)
      ? null
      : t;
  }
  function ic(t) {
    if (5 === t.tag || 6 === t.tag) return t.stateNode;
    throw Error(Y(33));
  }
  function rh(t) {
    return t[Ke] || null;
  }
  function Fb(t) {
    do {
      t = t.return;
    } while (t && 5 !== t.tag);
    return t || null;
  }
  function bm(t, $) {
    var e = t.stateNode;
    if (!e) return null;
    var r = ik(e);
    if (!r) return null;
    e = r[$];
    switch ($) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (r = !r.disabled) ||
          (r = !(
            'button' === (t = t.type) ||
            'input' === t ||
            'select' === t ||
            'textarea' === t
          )),
          (t = !r);
        break;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && 'function' != typeof e) throw Error(Y(231, $, typeof e));
    return e;
  }
  function cm(t, $, e) {
    ($ = bm(t, e.dispatchConfig.phasedRegistrationNames[$])) &&
      ((e._dispatchListeners = Jc(e._dispatchListeners, $)),
      (e._dispatchInstances = Jc(e._dispatchInstances, t)));
  }
  function pu(t) {
    if (t && t.dispatchConfig.phasedRegistrationNames) {
      for (var $ = t._targetInst, e = []; $; ) e.push($), ($ = Fb($));
      for ($ = e.length; 0 < $--; ) cm(e[$], 'captured', t);
      for ($ = 0; $ < e.length; $++) cm(e[$], 'bubbled', t);
    }
  }
  function sh(t, $, e) {
    t &&
      e &&
      e.dispatchConfig.registrationName &&
      ($ = bm(t, e.dispatchConfig.registrationName)) &&
      ((e._dispatchListeners = Jc(e._dispatchListeners, $)),
      (e._dispatchInstances = Jc(e._dispatchInstances, t)));
  }
  function qu(t) {
    t && t.dispatchConfig.registrationName && sh(t._targetInst, null, t);
  }
  function Lc(t) {
    gh(t, pu);
  }
  function dm() {
    if (Ik) return Ik;
    var t,
      $,
      e = Os,
      r = e.length,
      i = 'value' in pd ? pd.value : pd.textContent,
      a = i.length;
    for (t = 0; t < r && e[t] === i[t]; t++);
    var n = r - t;
    for ($ = 1; $ <= n && e[r - $] === i[a - $]; $++);
    return (Ik = i.slice(t, 1 < $ ? 1 - $ : void 0));
  }
  function ef() {
    return !0;
  }
  function ff() {
    return !1;
  }
  function Qa(t, $, e, r) {
    for (var i in ((this.dispatchConfig = t),
    (this._targetInst = $),
    (this.nativeEvent = e),
    (t = this.constructor.Interface)))
      t.hasOwnProperty(i) &&
        (($ = t[i])
          ? (this[i] = $(e))
          : 'target' === i
          ? (this.target = r)
          : (this[i] = e[i]));
    return (
      (this.isDefaultPrevented = (
        null != e.defaultPrevented ? e.defaultPrevented : !1 === e.returnValue
      )
        ? ef
        : ff),
      (this.isPropagationStopped = ff),
      this
    );
  }
  function ru(t, $, e, r) {
    if (this.eventPool.length) {
      var i = this.eventPool.pop();
      return this.call(i, t, $, e, r), i;
    }
    return new this(t, $, e, r);
  }
  function su(t) {
    if (!(t instanceof this)) throw Error(Y(279));
    t.destructor(), 10 > this.eventPool.length && this.eventPool.push(t);
  }
  function em(t) {
    (t.eventPool = []), (t.getPooled = ru), (t.release = su);
  }
  function fm(t, $) {
    switch (t) {
      case 'keyup':
        return -1 !== Rs.indexOf($.keyCode);
      case 'keydown':
        return 229 !== $.keyCode;
      case 'keypress':
      case 'mousedown':
      case 'blur':
        return !0;
      default:
        return !1;
    }
  }
  function gm(t) {
    return 'object' == typeof (t = t.detail) && 'data' in t ? t.data : null;
  }
  function tu(t, $) {
    switch (t) {
      case 'compositionend':
        return gm($);
      case 'keypress':
        return 32 !== $.which ? null : ((Ts = !0), Kk);
      case 'textInput':
        return (t = $.data) === Kk && Ts ? null : t;
      default:
        return null;
    }
  }
  function uu(t, $) {
    if (Me)
      return 'compositionend' === t || (!Jg && fm(t, $))
        ? ((t = dm()), (Ik = Os = pd = null), (Me = !1), t)
        : null;
    switch (t) {
      case 'paste':
        return null;
      case 'keypress':
        if (!($.ctrlKey || $.altKey || $.metaKey) || ($.ctrlKey && $.altKey)) {
          if ($.char && 1 < $.char.length) return $.char;
          if ($.which) return String.fromCharCode($.which);
        }
        return null;
      case 'compositionend':
        return Jk && 'ko' !== $.locale ? null : $.data;
      default:
        return null;
    }
  }
  function hm(t) {
    var $ = t && t.nodeName && t.nodeName.toLowerCase();
    return 'input' === $ ? !!Vs[t.type] : 'textarea' === $;
  }
  function im(t, $, e) {
    return (
      ((t = Qa.getPooled(Lk.change, t, $, e)).type = 'change'), xl(e), Lc(t), t
    );
  }
  function vu(t) {
    af(t);
  }
  function gf(t) {
    if (Dl(ic(t))) return t;
  }
  function wu(t, $) {
    if ('change' === t) return $;
  }
  function jm() {
    Mk && (Mk.detachEvent('onpropertychange', km), (Kg = Mk = null));
  }
  function km(t) {
    if ('value' === t.propertyName && gf(Kg))
      if (((t = im(Kg, t, hh(t))), wg)) af(t);
      else {
        wg = !0;
        try {
          zl(vu, t);
        } finally {
          (wg = !1), Xg();
        }
      }
  }
  function xu(t, $, e) {
    'focus' === t
      ? (jm(), (Kg = e), (Mk = $).attachEvent('onpropertychange', km))
      : 'blur' === t && jm();
  }
  function yu(t) {
    if ('selectionchange' === t || 'keyup' === t || 'keydown' === t)
      return gf(Kg);
  }
  function zu(t, $) {
    if ('click' === t) return gf($);
  }
  function Au(t, $) {
    if ('input' === t || 'change' === t) return gf($);
  }
  function Bu(t) {
    var $ = this.nativeEvent;
    return $.getModifierState ? $.getModifierState(t) : !!(t = Xs[t]) && !!$[t];
  }
  function th() {
    return Bu;
  }
  function Cu(t, $) {
    return (t === $ && (0 !== t || 1 / t == 1 / $)) || (t != t && $ != $);
  }
  function Hd(t, $) {
    if (ec(t, $)) return !0;
    if (
      'object' != typeof t ||
      null === t ||
      'object' != typeof $ ||
      null === $
    )
      return !1;
    var e = Object.keys(t),
      r = Object.keys($);
    if (e.length !== r.length) return !1;
    for (r = 0; r < e.length; r++)
      if (!bt.call($, e[r]) || !ec(t[e[r]], $[e[r]])) return !1;
    return !0;
  }
  function lm(t, $) {
    var e =
      $.window === $ ? $.document : 9 === $.nodeType ? $ : $.ownerDocument;
    return et || null == Ne || Ne !== oh(e)
      ? null
      : ('selectionStart' in (e = Ne) && ph(e)
          ? (e = {start: e.selectionStart, end: e.selectionEnd})
          : (e = {
              anchorNode: (e = (
                (e.ownerDocument && e.ownerDocument.defaultView) ||
                window
              ).getSelection()).anchorNode,
              anchorOffset: e.anchorOffset,
              focusNode: e.focusNode,
              focusOffset: e.focusOffset,
            }),
        Qk && Hd(Qk, e)
          ? null
          : ((Qk = e),
            ((t = Qa.getPooled(Pk.select, dt, t, $)).type = 'select'),
            (t.target = Ne),
            Lc(t),
            t));
  }
  function hf(t) {
    var $ = t.keyCode;
    return (
      'charCode' in t
        ? 0 === (t = t.charCode) && 13 === $ && (t = 13)
        : (t = $),
      10 === t && (t = 13),
      32 <= t || 13 === t ? t : 0
    );
  }
  function oa(t) {
    0 > td || ((t.current = Lg[td]), (Lg[td] = null), td--);
  }
  function ua(t, $) {
    (Lg[++td] = t.current), (t.current = $);
  }
  function Mc(t, $) {
    var e = t.type.contextTypes;
    if (!e) return Tb;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === $)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i,
      a = {};
    for (i in e) a[i] = $[i];
    return (
      r &&
        (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = $),
        (t.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function Ma(t) {
    return null != (t = t.childContextTypes);
  }
  function jf() {
    oa(La), oa(Ca);
  }
  function mm(t, $, e) {
    if (Ca.current !== Tb) throw Error(Y(168));
    ua(Ca, $), ua(La, e);
  }
  function nm(t, $, e) {
    var r = t.stateNode;
    if (((t = $.childContextTypes), 'function' != typeof r.getChildContext))
      return e;
    for (var i in (r = r.getChildContext()))
      if (!(i in t)) throw Error(Y(108, Db($) || 'Unknown', i));
    return Ea({}, e, {}, r);
  }
  function kf(t) {
    return (
      (t =
        ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) ||
        Tb),
      (Ec = Ca.current),
      ua(Ca, t),
      ua(La, La.current),
      !0
    );
  }
  function om(t, $, e) {
    var r = t.stateNode;
    if (!r) throw Error(Y(169));
    e
      ? ((t = nm(t, $, Ec)),
        (r.__reactInternalMemoizedMergedChildContext = t),
        oa(La),
        oa(Ca),
        ua(Ca, t))
      : oa(La),
      ua(La, e);
  }
  function lf() {
    switch (tt()) {
      case Oe:
        return 99;
      case Tk:
        return 98;
      case Uk:
        return 97;
      case Vk:
        return 96;
      case Wk:
        return 95;
      default:
        throw Error(Y(332));
    }
  }
  function pm(t) {
    switch (t) {
      case 99:
        return Oe;
      case 98:
        return Tk;
      case 97:
        return Uk;
      case 96:
        return Vk;
      case 95:
        return Wk;
      default:
        throw Error(Y(332));
    }
  }
  function Wb(t, $) {
    return (t = pm(t)), st(t, $);
  }
  function qm(t, $, e) {
    return (t = pm(t)), Mg(t, $, e);
  }
  function rm(t) {
    return null === Fc ? ((Fc = [t]), (Yk = Mg(Oe, sm))) : Fc.push(t), Xk;
  }
  function sb() {
    if (null !== Yk) {
      var t = Yk;
      (Yk = null), Rk(t);
    }
    sm();
  }
  function sm() {
    if (!wt && null !== Fc) {
      wt = !0;
      var t = 0;
      try {
        var $ = Fc;
        Wb(99, function () {
          for (; t < $.length; t++) {
            var e = $[t];
            do {
              e = e(!0);
            } while (null !== e);
          }
        }),
          (Fc = null);
      } catch (e) {
        throw (null !== Fc && (Fc = Fc.slice(t + 1)), Mg(Oe, sb), e);
      } finally {
        wt = !1;
      }
    }
  }
  function mf(t, $, e) {
    return 1073741821 - (1 + (((1073741821 - t + $ / 10) / (e /= 10)) | 0)) * e;
  }
  function ib(t, $) {
    if (t && t.defaultProps)
      for (var e in (($ = Ea({}, $)), (t = t.defaultProps)))
        void 0 === $[e] && ($[e] = t[e]);
    return $;
  }
  function uh() {
    xt = _k = $k = null;
  }
  function vh(t) {
    var $ = Pe.current;
    oa(Pe), (t.type._context._currentValue = $);
  }
  function tm(t, $) {
    for (; null !== t; ) {
      var e = t.alternate;
      if (t.childExpirationTime < $)
        (t.childExpirationTime = $),
          null !== e &&
            e.childExpirationTime < $ &&
            (e.childExpirationTime = $);
      else {
        if (!(null !== e && e.childExpirationTime < $)) break;
        e.childExpirationTime = $;
      }
      t = t.return;
    }
  }
  function Nc(t, $) {
    ($k = t),
      (xt = _k = null),
      null !== (t = t.dependencies) &&
        null !== t.firstContext &&
        (t.expirationTime >= $ && (dl = !0), (t.firstContext = null));
  }
  function cb(t, $) {
    if (xt !== t && !1 !== $ && 0 !== $)
      if (
        (('number' == typeof $ && 1073741823 !== $) ||
          ((xt = t), ($ = 1073741823)),
        ($ = {context: t, observedBits: $, next: null}),
        null === _k)
      ) {
        if (null === $k) throw Error(Y(308));
        (_k = $),
          ($k.dependencies = {
            expirationTime: 0,
            firstContext: $,
            responders: null,
          });
      } else _k = _k.next = $;
    return t._currentValue;
  }
  function wh(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      baseQueue: null,
      shared: {pending: null},
      effects: null,
    };
  }
  function xh(t, $) {
    (t = t.updateQueue),
      $.updateQueue === t &&
        ($.updateQueue = {
          baseState: t.baseState,
          baseQueue: t.baseQueue,
          shared: t.shared,
          effects: t.effects,
        });
  }
  function Xb(t, $) {
    return ((t = {
      expirationTime: t,
      suspenseConfig: $,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    }).next = t);
  }
  function Yb(t, $) {
    if (null !== (t = t.updateQueue)) {
      var e = (t = t.shared).pending;
      null === e ? ($.next = $) : (($.next = e.next), (e.next = $)),
        (t.pending = $);
    }
  }
  function um(t, $) {
    var e = t.alternate;
    null !== e && xh(e, t),
      null === (e = (t = t.updateQueue).baseQueue)
        ? ((t.baseQueue = $.next = $), ($.next = $))
        : (($.next = e.next), (e.next = $));
  }
  function Id(t, $, e, r) {
    var i = t.updateQueue;
    Qe = !1;
    var a = i.baseQueue,
      n = i.shared.pending;
    if (null !== n) {
      if (null !== a) {
        var l = a.next;
        (a.next = n.next), (n.next = l);
      }
      (a = n),
        (i.shared.pending = null),
        null !== (l = t.alternate) &&
          null !== (l = l.updateQueue) &&
          (l.baseQueue = n);
    }
    if (null !== a) {
      l = a.next;
      var v = i.baseState,
        o = 0,
        u = null,
        c = null,
        f = null;
      if (null !== l)
        for (var s = l; ; ) {
          if ((n = s.expirationTime) < r) {
            var d = {
              expirationTime: s.expirationTime,
              suspenseConfig: s.suspenseConfig,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            };
            null === f ? ((c = f = d), (u = v)) : (f = f.next = d),
              n > o && (o = n);
          } else {
            null !== f &&
              (f = f.next =
                {
                  expirationTime: 1073741823,
                  suspenseConfig: s.suspenseConfig,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
              kn(n, s.suspenseConfig);
            t: {
              var p = t,
                h = s;
              switch (((n = $), (d = e), h.tag)) {
                case 1:
                  if ('function' == typeof (p = h.payload)) {
                    v = p.call(d, v, n);
                    break t;
                  }
                  v = p;
                  break t;
                case 3:
                  p.effectTag = (-4097 & p.effectTag) | 64;
                case 0:
                  if (
                    null ==
                    (n =
                      'function' == typeof (p = h.payload)
                        ? p.call(d, v, n)
                        : p)
                  )
                    break t;
                  v = Ea({}, v, n);
                  break t;
                case 2:
                  Qe = !0;
              }
            }
            null !== s.callback &&
              ((t.effectTag |= 32),
              null === (n = i.effects) ? (i.effects = [s]) : n.push(s));
          }
          if (null === (s = s.next) || s === l) {
            if (null === (n = i.shared.pending)) break;
            (s = a.next = n.next),
              (n.next = l),
              (i.baseQueue = a = n),
              (i.shared.pending = null);
          }
        }
      null === f ? (u = v) : (f.next = c),
        (i.baseState = u),
        (i.baseQueue = f),
        yf(o),
        (t.expirationTime = o),
        (t.memoizedState = v);
    }
  }
  function vm(t, $, e) {
    if (((t = $.effects), ($.effects = null), null !== t))
      for ($ = 0; $ < t.length; $++) {
        var r = t[$],
          i = r.callback;
        if (null !== i) {
          if (((r.callback = null), (r = i), (i = e), 'function' != typeof r))
            throw Error(Y(191, r));
          r.call(i);
        }
      }
  }
  function nf(t, $, e, r) {
    (e = null == (e = e(r, ($ = t.memoizedState))) ? $ : Ea({}, $, e)),
      (t.memoizedState = e),
      0 === t.expirationTime && (t.updateQueue.baseState = e);
  }
  function wm(t, $, e, r, i, a, n) {
    return 'function' == typeof (t = t.stateNode).shouldComponentUpdate
      ? t.shouldComponentUpdate(r, a, n)
      : !$.prototype ||
          !$.prototype.isPureReactComponent ||
          !Hd(e, r) ||
          !Hd(i, a);
  }
  function xm(t, $, e) {
    var r = !1,
      i = Tb,
      a = $.contextType;
    return (
      'object' == typeof a && null !== a
        ? (a = cb(a))
        : ((i = Ma($) ? Ec : Ca.current),
          (a = (r = null != (r = $.contextTypes)) ? Mc(t, i) : Tb)),
      ($ = new $(e, a)),
      (t.memoizedState =
        null !== $.state && void 0 !== $.state ? $.state : null),
      ($.updater = Re),
      (t.stateNode = $),
      ($._reactInternalFiber = t),
      r &&
        (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
        (t.__reactInternalMemoizedMaskedChildContext = a)),
      $
    );
  }
  function ym(t, $, e, r) {
    (t = $.state),
      'function' == typeof $.componentWillReceiveProps &&
        $.componentWillReceiveProps(e, r),
      'function' == typeof $.UNSAFE_componentWillReceiveProps &&
        $.UNSAFE_componentWillReceiveProps(e, r),
      $.state !== t && Re.enqueueReplaceState($, $.state, null);
  }
  function yh(t, $, e, r) {
    var i = t.stateNode;
    (i.props = e), (i.state = t.memoizedState), (i.refs = al), wh(t);
    var a = $.contextType;
    'object' == typeof a && null !== a
      ? (i.context = cb(a))
      : ((a = Ma($) ? Ec : Ca.current), (i.context = Mc(t, a))),
      Id(t, e, i, r),
      (i.state = t.memoizedState),
      'function' == typeof (a = $.getDerivedStateFromProps) &&
        (nf(t, $, a, e), (i.state = t.memoizedState)),
      'function' == typeof $.getDerivedStateFromProps ||
        'function' == typeof i.getSnapshotBeforeUpdate ||
        ('function' != typeof i.UNSAFE_componentWillMount &&
          'function' != typeof i.componentWillMount) ||
        (($ = i.state),
        'function' == typeof i.componentWillMount && i.componentWillMount(),
        'function' == typeof i.UNSAFE_componentWillMount &&
          i.UNSAFE_componentWillMount(),
        $ !== i.state && Re.enqueueReplaceState(i, i.state, null),
        Id(t, e, i, r),
        (i.state = t.memoizedState)),
      'function' == typeof i.componentDidMount && (t.effectTag |= 4);
  }
  function Jd(t, $, e) {
    if (
      null !== (t = e.ref) &&
      'function' != typeof t &&
      'object' != typeof t
    ) {
      if (e._owner) {
        if ((e = e._owner)) {
          if (1 !== e.tag) throw Error(Y(309));
          var r = e.stateNode;
        }
        if (!r) throw Error(Y(147, t));
        var i = '' + t;
        return null !== $ &&
          null !== $.ref &&
          'function' == typeof $.ref &&
          $.ref._stringRef === i
          ? $.ref
          : ((($ = function (t) {
              var $ = r.refs;
              $ === al && ($ = r.refs = {}),
                null === t ? delete $[i] : ($[i] = t);
            })._stringRef = i),
            $);
      }
      if ('string' != typeof t) throw Error(Y(284));
      if (!e._owner) throw Error(Y(290, t));
    }
    return t;
  }
  function of(t, $) {
    if ('textarea' !== t.type)
      throw Error(
        Y(
          31,
          '[object Object]' === Object.prototype.toString.call($)
            ? 'object with keys {' + Object.keys($).join(', ') + '}'
            : $,
          ''
        )
      );
  }
  function zm(t) {
    function $($, e) {
      if (t) {
        var r = $.lastEffect;
        null !== r
          ? ((r.nextEffect = e), ($.lastEffect = e))
          : ($.firstEffect = $.lastEffect = e),
          (e.nextEffect = null),
          (e.effectTag = 8);
      }
    }
    function e(e, r) {
      if (!t) return null;
      for (; null !== r; ) $(e, r), (r = r.sibling);
      return null;
    }
    function r(t, $) {
      for (t = new Map(); null !== $; )
        null !== $.key ? t.set($.key, $) : t.set($.index, $), ($ = $.sibling);
      return t;
    }
    function i(t, $) {
      return ((t = pc(t, $)).index = 0), (t.sibling = null), t;
    }
    function a($, e, r) {
      return (
        ($.index = r),
        t
          ? null !== (r = $.alternate)
            ? (r = r.index) < e
              ? (($.effectTag = 2), e)
              : r
            : (($.effectTag = 2), e)
          : e
      );
    }
    function n($) {
      return t && null === $.alternate && ($.effectTag = 2), $;
    }
    function l(t, $, e, r) {
      return null === $ || 6 !== $.tag
        ? ((($ = Xh(e, t.mode, r)).return = t), $)
        : ((($ = i($, e)).return = t), $);
    }
    function v(t, $, e, r) {
      return null !== $ && $.elementType === e.type
        ? (((r = i($, e.props)).ref = Jd(t, $, e)), (r.return = t), r)
        : (((r = zf(e.type, e.key, e.props, null, t.mode, r)).ref = Jd(
            t,
            $,
            e
          )),
          (r.return = t),
          r);
    }
    function o(t, $, e, r) {
      return null === $ ||
        4 !== $.tag ||
        $.stateNode.containerInfo !== e.containerInfo ||
        $.stateNode.implementation !== e.implementation
        ? ((($ = Yh(e, t.mode, r)).return = t), $)
        : ((($ = i($, e.children || [])).return = t), $);
    }
    function u(t, $, e, r, a) {
      return null === $ || 7 !== $.tag
        ? ((($ = $b(e, t.mode, r, a)).return = t), $)
        : ((($ = i($, e)).return = t), $);
    }
    function c(t, $, e) {
      if ('string' == typeof $ || 'number' == typeof $)
        return (($ = Xh('' + $, t.mode, e)).return = t), $;
      if ('object' == typeof $ && null !== $) {
        switch ($.$$typeof) {
          case Ge:
            return (
              ((e = zf($.type, $.key, $.props, null, t.mode, e)).ref = Jd(
                t,
                null,
                $
              )),
              (e.return = t),
              e
            );
          case Cc:
            return (($ = Yh($, t.mode, e)).return = t), $;
        }
        if (Se($) || Ad($)) return (($ = $b($, t.mode, e, null)).return = t), $;
        of(t, $);
      }
      return null;
    }
    function f(t, $, e, r) {
      var i = null !== $ ? $.key : null;
      if ('string' == typeof e || 'number' == typeof e)
        return null !== i ? null : l(t, $, '' + e, r);
      if ('object' == typeof e && null !== e) {
        switch (e.$$typeof) {
          case Ge:
            return e.key === i
              ? e.type === dc
                ? u(t, $, e.props.children, r, i)
                : v(t, $, e, r)
              : null;
          case Cc:
            return e.key === i ? o(t, $, e, r) : null;
        }
        if (Se(e) || Ad(e)) return null !== i ? null : u(t, $, e, r, null);
        of(t, e);
      }
      return null;
    }
    function s(t, $, e, r, i) {
      if ('string' == typeof r || 'number' == typeof r)
        return l($, (t = t.get(e) || null), '' + r, i);
      if ('object' == typeof r && null !== r) {
        switch (r.$$typeof) {
          case Ge:
            return (
              (t = t.get(null === r.key ? e : r.key) || null),
              r.type === dc
                ? u($, t, r.props.children, i, r.key)
                : v($, t, r, i)
            );
          case Cc:
            return o($, (t = t.get(null === r.key ? e : r.key) || null), r, i);
        }
        if (Se(r) || Ad(r)) return u($, (t = t.get(e) || null), r, i, null);
        of($, r);
      }
      return null;
    }
    function d(i, n, l, v) {
      for (
        var o = null, u = null, d = n, p = (n = 0), h = null;
        null !== d && p < l.length;
        p++
      ) {
        d.index > p ? ((h = d), (d = null)) : (h = d.sibling);
        var g = f(i, d, l[p], v);
        if (null === g) {
          null === d && (d = h);
          break;
        }
        t && d && null === g.alternate && $(i, d),
          (n = a(g, n, p)),
          null === u ? (o = g) : (u.sibling = g),
          (u = g),
          (d = h);
      }
      if (p === l.length) return e(i, d), o;
      if (null === d) {
        for (; p < l.length; p++)
          null !== (d = c(i, l[p], v)) &&
            ((n = a(d, n, p)), null === u ? (o = d) : (u.sibling = d), (u = d));
        return o;
      }
      for (d = r(i, d); p < l.length; p++)
        null !== (h = s(d, i, p, l[p], v)) &&
          (t && null !== h.alternate && d.delete(null === h.key ? p : h.key),
          (n = a(h, n, p)),
          null === u ? (o = h) : (u.sibling = h),
          (u = h));
      return (
        t &&
          d.forEach(function (t) {
            return $(i, t);
          }),
        o
      );
    }
    function p(i, n, l, v) {
      var o = Ad(l);
      if ('function' != typeof o) throw Error(Y(150));
      if (null == (l = o.call(l))) throw Error(Y(151));
      for (
        var u = (o = null), d = n, p = (n = 0), h = null, g = l.next();
        null !== d && !g.done;
        p++, g = l.next()
      ) {
        d.index > p ? ((h = d), (d = null)) : (h = d.sibling);
        var m = f(i, d, g.value, v);
        if (null === m) {
          null === d && (d = h);
          break;
        }
        t && d && null === m.alternate && $(i, d),
          (n = a(m, n, p)),
          null === u ? (o = m) : (u.sibling = m),
          (u = m),
          (d = h);
      }
      if (g.done) return e(i, d), o;
      if (null === d) {
        for (; !g.done; p++, g = l.next())
          null !== (g = c(i, g.value, v)) &&
            ((n = a(g, n, p)), null === u ? (o = g) : (u.sibling = g), (u = g));
        return o;
      }
      for (d = r(i, d); !g.done; p++, g = l.next())
        null !== (g = s(d, i, p, g.value, v)) &&
          (t && null !== g.alternate && d.delete(null === g.key ? p : g.key),
          (n = a(g, n, p)),
          null === u ? (o = g) : (u.sibling = g),
          (u = g));
      return (
        t &&
          d.forEach(function (t) {
            return $(i, t);
          }),
        o
      );
    }
    return function (t, r, a, l) {
      var v =
        'object' == typeof a && null !== a && a.type === dc && null === a.key;
      v && (a = a.props.children);
      var o = 'object' == typeof a && null !== a;
      if (o)
        switch (a.$$typeof) {
          case Ge:
            t: {
              for (o = a.key, v = r; null !== v; ) {
                if (v.key === o) {
                  switch (v.tag) {
                    case 7:
                      if (a.type === dc) {
                        e(t, v.sibling),
                          ((r = i(v, a.props.children)).return = t),
                          (t = r);
                        break t;
                      }
                      break;
                    default:
                      if (v.elementType === a.type) {
                        e(t, v.sibling),
                          ((r = i(v, a.props)).ref = Jd(t, v, a)),
                          (r.return = t),
                          (t = r);
                        break t;
                      }
                  }
                  e(t, v);
                  break;
                }
                $(t, v), (v = v.sibling);
              }
              a.type === dc
                ? (((r = $b(a.props.children, t.mode, l, a.key)).return = t),
                  (t = r))
                : (((l = zf(a.type, a.key, a.props, null, t.mode, l)).ref = Jd(
                    t,
                    r,
                    a
                  )),
                  (l.return = t),
                  (t = l));
            }
            return n(t);
          case Cc:
            t: {
              for (v = a.key; null !== r; ) {
                if (r.key === v) {
                  if (
                    4 === r.tag &&
                    r.stateNode.containerInfo === a.containerInfo &&
                    r.stateNode.implementation === a.implementation
                  ) {
                    e(t, r.sibling),
                      ((r = i(r, a.children || [])).return = t),
                      (t = r);
                    break t;
                  }
                  e(t, r);
                  break;
                }
                $(t, r), (r = r.sibling);
              }
              ((r = Yh(a, t.mode, l)).return = t), (t = r);
            }
            return n(t);
        }
      if ('string' == typeof a || 'number' == typeof a)
        return (
          (a = '' + a),
          null !== r && 6 === r.tag
            ? (e(t, r.sibling), ((r = i(r, a)).return = t), (t = r))
            : (e(t, r), ((r = Xh(a, t.mode, l)).return = t), (t = r)),
          n(t)
        );
      if (Se(a)) return d(t, r, a, l);
      if (Ad(a)) return p(t, r, a, l);
      if ((o && of(t, a), void 0 === a && !v))
        switch (t.tag) {
          case 1:
          case 0:
            throw (
              ((t = t.type),
              Error(Y(152, t.displayName || t.name || 'Component')))
            );
        }
      return e(t, r);
    };
  }
  function jc(t) {
    if (t === vd) throw Error(Y(174));
    return t;
  }
  function zh(t, $) {
    switch ((ua(xd, $), ua(wd, t), ua(pb, vd), (t = $.nodeType))) {
      case 9:
      case 11:
        $ = ($ = $.documentElement) ? $.namespaceURI : eh(null, '');
        break;
      default:
        $ = eh(
          ($ = (t = 8 === t ? $.parentNode : $).namespaceURI || null),
          (t = t.tagName)
        );
    }
    oa(pb), ua(pb, $);
  }
  function Oc() {
    oa(pb), oa(wd), oa(xd);
  }
  function Am(t) {
    jc(xd.current);
    var $ = jc(pb.current),
      e = eh($, t.type);
    $ !== e && (ua(wd, t), ua(pb, e));
  }
  function Ah(t) {
    wd.current === t && (oa(pb), oa(wd));
  }
  function pf(t) {
    for (var $ = t; null !== $; ) {
      if (13 === $.tag) {
        var e = $.memoizedState;
        if (
          null !== e &&
          (null === (e = e.dehydrated) || e.data === Fg || e.data === Gg)
        )
          return $;
      } else if (19 === $.tag && void 0 !== $.memoizedProps.revealOrder) {
        if (0 != (64 & $.effectTag)) return $;
      } else if (null !== $.child) {
        ($.child.return = $), ($ = $.child);
        continue;
      }
      if ($ === t) break;
      for (; null === $.sibling; ) {
        if (null === $.return || $.return === t) return null;
        $ = $.return;
      }
      ($.sibling.return = $.return), ($ = $.sibling);
    }
    return null;
  }
  function Bh(t, $) {
    return {responder: t, props: $};
  }
  function Ra() {
    throw Error(Y(321));
  }
  function Ch(t, $) {
    if (null === $) return !1;
    for (var e = 0; e < $.length && e < t.length; e++)
      if (!ec(t[e], $[e])) return !1;
    return !0;
  }
  function Dh(t, $, e, r, i, a) {
    if (
      ((yd = a),
      (Da = $),
      ($.memoizedState = null),
      ($.updateQueue = null),
      ($.expirationTime = 0),
      (Te.current = null === t || null === t.memoizedState ? zt : At),
      (t = e(r, i)),
      $.expirationTime === yd)
    ) {
      a = 0;
      do {
        if ((($.expirationTime = 0), !(25 > a))) throw Error(Y(301));
        (a += 1),
          (Ub = qb = null),
          ($.updateQueue = null),
          (Te.current = Bt),
          (t = e(r, i));
      } while ($.expirationTime === yd);
    }
    if (
      ((Te.current = Ue),
      ($ = null !== qb && null !== qb.next),
      (yd = 0),
      (Ub = qb = Da = null),
      (yt = !1),
      $)
    )
      throw Error(Y(300));
    return t;
  }
  function Pc() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return null === Ub ? (Da.memoizedState = Ub = t) : (Ub = Ub.next = t), Ub;
  }
  function Qc() {
    if (null === qb) {
      var t = Da.alternate;
      t = null !== t ? t.memoizedState : null;
    } else t = qb.next;
    var $ = null === Ub ? Da.memoizedState : Ub.next;
    if (null !== $) (Ub = $), (qb = t);
    else {
      if (null === t) throw Error(Y(310));
      (t = {
        memoizedState: (qb = t).memoizedState,
        baseState: qb.baseState,
        baseQueue: qb.baseQueue,
        queue: qb.queue,
        next: null,
      }),
        null === Ub ? (Da.memoizedState = Ub = t) : (Ub = Ub.next = t);
    }
    return Ub;
  }
  function kc(t, $) {
    return 'function' == typeof $ ? $(t) : $;
  }
  function qf(t) {
    var $ = Qc(),
      e = $.queue;
    if (null === e) throw Error(Y(311));
    e.lastRenderedReducer = t;
    var r = qb,
      i = r.baseQueue,
      a = e.pending;
    if (null !== a) {
      if (null !== i) {
        var n = i.next;
        (i.next = a.next), (a.next = n);
      }
      (r.baseQueue = i = a), (e.pending = null);
    }
    if (null !== i) {
      (i = i.next), (r = r.baseState);
      var l = (n = a = null),
        v = i;
      do {
        var o = v.expirationTime;
        if (o < yd) {
          var u = {
            expirationTime: v.expirationTime,
            suspenseConfig: v.suspenseConfig,
            action: v.action,
            eagerReducer: v.eagerReducer,
            eagerState: v.eagerState,
            next: null,
          };
          null === l ? ((n = l = u), (a = r)) : (l = l.next = u),
            o > Da.expirationTime && ((Da.expirationTime = o), yf(o));
        } else
          null !== l &&
            (l = l.next =
              {
                expirationTime: 1073741823,
                suspenseConfig: v.suspenseConfig,
                action: v.action,
                eagerReducer: v.eagerReducer,
                eagerState: v.eagerState,
                next: null,
              }),
            kn(o, v.suspenseConfig),
            (r = v.eagerReducer === t ? v.eagerState : t(r, v.action));
        v = v.next;
      } while (null !== v && v !== i);
      null === l ? (a = r) : (l.next = n),
        ec(r, $.memoizedState) || (dl = !0),
        ($.memoizedState = r),
        ($.baseState = a),
        ($.baseQueue = l),
        (e.lastRenderedState = r);
    }
    return [$.memoizedState, e.dispatch];
  }
  function rf(t) {
    var $ = Qc(),
      e = $.queue;
    if (null === e) throw Error(Y(311));
    e.lastRenderedReducer = t;
    var r = e.dispatch,
      i = e.pending,
      a = $.memoizedState;
    if (null !== i) {
      e.pending = null;
      var n = (i = i.next);
      do {
        (a = t(a, n.action)), (n = n.next);
      } while (n !== i);
      ec(a, $.memoizedState) || (dl = !0),
        ($.memoizedState = a),
        null === $.baseQueue && ($.baseState = a),
        (e.lastRenderedState = a);
    }
    return [a, r];
  }
  function Eh(t) {
    var $ = Pc();
    return (
      'function' == typeof t && (t = t()),
      ($.memoizedState = $.baseState = t),
      (t = (t = $.queue =
        {
          pending: null,
          dispatch: null,
          lastRenderedReducer: kc,
          lastRenderedState: t,
        }).dispatch =
        Im.bind(null, Da, t)),
      [$.memoizedState, t]
    );
  }
  function Fh(t, $, e, r) {
    return (
      (t = {tag: t, create: $, destroy: e, deps: r, next: null}),
      null === ($ = Da.updateQueue)
        ? (($ = {lastEffect: null}),
          (Da.updateQueue = $),
          ($.lastEffect = t.next = t))
        : null === (e = $.lastEffect)
        ? ($.lastEffect = t.next = t)
        : ((r = e.next), (e.next = t), (t.next = r), ($.lastEffect = t)),
      t
    );
  }
  function Bm() {
    return Qc().memoizedState;
  }
  function Gh(t, $, e, r) {
    var i = Pc();
    (Da.effectTag |= t),
      (i.memoizedState = Fh(1 | $, e, void 0, void 0 === r ? null : r));
  }
  function Hh(t, $, e, r) {
    var i = Qc();
    r = void 0 === r ? null : r;
    var a = void 0;
    if (null !== qb) {
      var n = qb.memoizedState;
      if (((a = n.destroy), null !== r && Ch(r, n.deps)))
        return void Fh($, e, a, r);
    }
    (Da.effectTag |= t), (i.memoizedState = Fh(1 | $, e, a, r));
  }
  function Cm(t, $) {
    return Gh(516, 4, t, $);
  }
  function sf(t, $) {
    return Hh(516, 4, t, $);
  }
  function Dm(t, $) {
    return Hh(4, 2, t, $);
  }
  function Em(t, $) {
    return 'function' == typeof $
      ? ((t = t()),
        $(t),
        function () {
          $(null);
        })
      : null != $
      ? ((t = t()),
        ($.current = t),
        function () {
          $.current = null;
        })
      : void 0;
  }
  function Fm(t, $, e) {
    return (
      (e = null != e ? e.concat([t]) : null), Hh(4, 2, Em.bind(null, $, t), e)
    );
  }
  function Ih() {}
  function Gm(t, $) {
    return (Pc().memoizedState = [t, void 0 === $ ? null : $]), t;
  }
  function tf(t, $) {
    var e = Qc();
    $ = void 0 === $ ? null : $;
    var r = e.memoizedState;
    return null !== r && null !== $ && Ch($, r[1])
      ? r[0]
      : ((e.memoizedState = [t, $]), t);
  }
  function Hm(t, $) {
    var e = Qc();
    $ = void 0 === $ ? null : $;
    var r = e.memoizedState;
    return null !== r && null !== $ && Ch($, r[1])
      ? r[0]
      : ((t = t()), (e.memoizedState = [t, $]), t);
  }
  function Jh(t, $, e) {
    var r = lf();
    Wb(98 > r ? 98 : r, function () {
      t(!0);
    }),
      Wb(97 < r ? 97 : r, function () {
        var r = $a.suspense;
        $a.suspense = void 0 === $ ? null : $;
        try {
          t(!1), e();
        } finally {
          $a.suspense = r;
        }
      });
  }
  function Im(t, $, e) {
    var r = tb(),
      i = ud.suspense;
    i = {
      expirationTime: (r = lc(r, t, i)),
      suspenseConfig: i,
      action: e,
      eagerReducer: null,
      eagerState: null,
      next: null,
    };
    var a = $.pending;
    if (
      (null === a ? (i.next = i) : ((i.next = a.next), (a.next = i)),
      ($.pending = i),
      (a = t.alternate),
      t === Da || (null !== a && a === Da))
    )
      (yt = !0), (i.expirationTime = yd), (Da.expirationTime = yd);
    else {
      if (
        0 === t.expirationTime &&
        (null === a || 0 === a.expirationTime) &&
        null !== (a = $.lastRenderedReducer)
      )
        try {
          var n = $.lastRenderedState,
            l = a(n, e);
          if (((i.eagerReducer = a), (i.eagerState = l), ec(l, n))) return;
        } catch (v) {}
      Zb(t, r);
    }
  }
  function Jm(t, $) {
    var e = ub(5, null, null, 0);
    (e.elementType = 'DELETED'),
      (e.type = 'DELETED'),
      (e.stateNode = $),
      (e.return = t),
      (e.effectTag = 8),
      null !== t.lastEffect
        ? ((t.lastEffect.nextEffect = e), (t.lastEffect = e))
        : (t.firstEffect = t.lastEffect = e);
  }
  function Km(t, $) {
    switch (t.tag) {
      case 5:
        var e = t.type;
        return (
          null !==
            ($ =
              1 !== $.nodeType || e.toLowerCase() !== $.nodeName.toLowerCase()
                ? null
                : $) && ((t.stateNode = $), !0)
        );
      case 6:
        return (
          null !== ($ = '' === t.pendingProps || 3 !== $.nodeType ? null : $) &&
          ((t.stateNode = $), !0)
        );
      case 13:
      default:
        return !1;
    }
  }
  function Kh(t) {
    if (cl) {
      var $ = bl;
      if ($) {
        var e = $;
        if (!Km(t, $)) {
          if (!($ = Kc(e.nextSibling)) || !Km(t, $))
            return (
              (t.effectTag = (-1025 & t.effectTag) | 2),
              (cl = !1),
              void (Pg = t)
            );
          Jm(Pg, e);
        }
        (Pg = t), (bl = Kc($.firstChild));
      } else (t.effectTag = (-1025 & t.effectTag) | 2), (cl = !1), (Pg = t);
    }
  }
  function Lm(t) {
    for (
      t = t.return;
      null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;

    )
      t = t.return;
    Pg = t;
  }
  function uf(t) {
    if (t !== Pg) return !1;
    if (!cl) return Lm(t), (cl = !0), !1;
    var $ = t.type;
    if (
      5 !== t.tag ||
      ('head' !== $ && 'body' !== $ && !qh($, t.memoizedProps))
    )
      for ($ = bl; $; ) Jm(t, $), ($ = Kc($.nextSibling));
    if ((Lm(t), 13 === t.tag)) {
      if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null))
        throw Error(Y(317));
      t: {
        for (t = t.nextSibling, $ = 0; t; ) {
          if (8 === t.nodeType) {
            var e = t.data;
            if (e === Hk) {
              if (0 === $) {
                bl = Kc(t.nextSibling);
                break t;
              }
              $--;
            } else (e !== Gk && e !== Gg && e !== Fg) || $++;
          }
          t = t.nextSibling;
        }
        bl = null;
      }
    } else bl = Pg ? Kc(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Lh() {
    (bl = Pg = null), (cl = !1);
  }
  function db(t, $, e, r) {
    $.child = null === t ? Og($, null, e, r) : Gc($, t.child, e, r);
  }
  function Mm(t, $, e, r, i) {
    e = e.render;
    var a = $.ref;
    return (
      Nc($, i),
      (r = Dh(t, $, e, r, a, i)),
      null === t || dl
        ? (($.effectTag |= 1), db(t, $, r, i), $.child)
        : (($.updateQueue = t.updateQueue),
          ($.effectTag &= -517),
          t.expirationTime <= i && (t.expirationTime = 0),
          Gb(t, $, i))
    );
  }
  function Nm(t, $, e, r, i, a) {
    if (null === t) {
      var n = e.type;
      return 'function' != typeof n ||
        Wh(n) ||
        void 0 !== n.defaultProps ||
        null !== e.compare ||
        void 0 !== e.defaultProps
        ? (((t = zf(e.type, null, r, null, $.mode, a)).ref = $.ref),
          (t.return = $),
          ($.child = t))
        : (($.tag = 15), ($.type = n), Om(t, $, n, r, i, a));
    }
    return (
      (n = t.child),
      i < a &&
      ((i = n.memoizedProps),
      (e = null !== (e = e.compare) ? e : Hd)(i, r) && t.ref === $.ref)
        ? Gb(t, $, a)
        : (($.effectTag |= 1),
          ((t = pc(n, r)).ref = $.ref),
          (t.return = $),
          ($.child = t))
    );
  }
  function Om(t, $, e, r, i, a) {
    return null !== t &&
      Hd(t.memoizedProps, r) &&
      t.ref === $.ref &&
      ((dl = !1), i < a)
      ? (($.expirationTime = t.expirationTime), Gb(t, $, a))
      : Mh(t, $, e, r, a);
  }
  function Pm(t, $) {
    var e = $.ref;
    ((null === t && null !== e) || (null !== t && t.ref !== e)) &&
      ($.effectTag |= 128);
  }
  function Mh(t, $, e, r, i) {
    var a = Ma(e) ? Ec : Ca.current;
    return (
      (a = Mc($, a)),
      Nc($, i),
      (e = Dh(t, $, e, r, a, i)),
      null === t || dl
        ? (($.effectTag |= 1), db(t, $, e, i), $.child)
        : (($.updateQueue = t.updateQueue),
          ($.effectTag &= -517),
          t.expirationTime <= i && (t.expirationTime = 0),
          Gb(t, $, i))
    );
  }
  function Qm(t, $, e, r, i) {
    if (Ma(e)) {
      var a = !0;
      kf($);
    } else a = !1;
    if ((Nc($, i), null === $.stateNode))
      null !== t &&
        ((t.alternate = null), ($.alternate = null), ($.effectTag |= 2)),
        xm($, e, r),
        yh($, e, r, i),
        (r = !0);
    else if (null === t) {
      var n = $.stateNode,
        l = $.memoizedProps;
      n.props = l;
      var v = n.context,
        o = e.contextType;
      'object' == typeof o && null !== o
        ? (o = cb(o))
        : (o = Mc($, (o = Ma(e) ? Ec : Ca.current)));
      var u = e.getDerivedStateFromProps,
        c =
          'function' == typeof u ||
          'function' == typeof n.getSnapshotBeforeUpdate;
      c ||
        ('function' != typeof n.UNSAFE_componentWillReceiveProps &&
          'function' != typeof n.componentWillReceiveProps) ||
        ((l !== r || v !== o) && ym($, n, r, o)),
        (Qe = !1);
      var f = $.memoizedState;
      (n.state = f),
        Id($, r, n, i),
        (v = $.memoizedState),
        l !== r || f !== v || La.current || Qe
          ? ('function' == typeof u && (nf($, e, u, r), (v = $.memoizedState)),
            (l = Qe || wm($, e, l, r, f, v, o))
              ? (c ||
                  ('function' != typeof n.UNSAFE_componentWillMount &&
                    'function' != typeof n.componentWillMount) ||
                  ('function' == typeof n.componentWillMount &&
                    n.componentWillMount(),
                  'function' == typeof n.UNSAFE_componentWillMount &&
                    n.UNSAFE_componentWillMount()),
                'function' == typeof n.componentDidMount && ($.effectTag |= 4))
              : ('function' == typeof n.componentDidMount && ($.effectTag |= 4),
                ($.memoizedProps = r),
                ($.memoizedState = v)),
            (n.props = r),
            (n.state = v),
            (n.context = o),
            (r = l))
          : ('function' == typeof n.componentDidMount && ($.effectTag |= 4),
            (r = !1));
    } else
      (n = $.stateNode),
        xh(t, $),
        (l = $.memoizedProps),
        (n.props = $.type === $.elementType ? l : ib($.type, l)),
        (v = n.context),
        'object' == typeof (o = e.contextType) && null !== o
          ? (o = cb(o))
          : (o = Mc($, (o = Ma(e) ? Ec : Ca.current))),
        (c =
          'function' == typeof (u = e.getDerivedStateFromProps) ||
          'function' == typeof n.getSnapshotBeforeUpdate) ||
          ('function' != typeof n.UNSAFE_componentWillReceiveProps &&
            'function' != typeof n.componentWillReceiveProps) ||
          ((l !== r || v !== o) && ym($, n, r, o)),
        (Qe = !1),
        (v = $.memoizedState),
        (n.state = v),
        Id($, r, n, i),
        (f = $.memoizedState),
        l !== r || v !== f || La.current || Qe
          ? ('function' == typeof u && (nf($, e, u, r), (f = $.memoizedState)),
            (u = Qe || wm($, e, l, r, v, f, o))
              ? (c ||
                  ('function' != typeof n.UNSAFE_componentWillUpdate &&
                    'function' != typeof n.componentWillUpdate) ||
                  ('function' == typeof n.componentWillUpdate &&
                    n.componentWillUpdate(r, f, o),
                  'function' == typeof n.UNSAFE_componentWillUpdate &&
                    n.UNSAFE_componentWillUpdate(r, f, o)),
                'function' == typeof n.componentDidUpdate && ($.effectTag |= 4),
                'function' == typeof n.getSnapshotBeforeUpdate &&
                  ($.effectTag |= 256))
              : ('function' != typeof n.componentDidUpdate ||
                  (l === t.memoizedProps && v === t.memoizedState) ||
                  ($.effectTag |= 4),
                'function' != typeof n.getSnapshotBeforeUpdate ||
                  (l === t.memoizedProps && v === t.memoizedState) ||
                  ($.effectTag |= 256),
                ($.memoizedProps = r),
                ($.memoizedState = f)),
            (n.props = r),
            (n.state = f),
            (n.context = o),
            (r = u))
          : ('function' != typeof n.componentDidUpdate ||
              (l === t.memoizedProps && v === t.memoizedState) ||
              ($.effectTag |= 4),
            'function' != typeof n.getSnapshotBeforeUpdate ||
              (l === t.memoizedProps && v === t.memoizedState) ||
              ($.effectTag |= 256),
            (r = !1));
    return Nh(t, $, e, r, a, i);
  }
  function Nh(t, $, e, r, i, a) {
    Pm(t, $);
    var n = 0 != (64 & $.effectTag);
    if (!r && !n) return i && om($, e, !1), Gb(t, $, a);
    (r = $.stateNode), (Ct.current = $);
    var l =
      n && 'function' != typeof e.getDerivedStateFromError ? null : r.render();
    return (
      ($.effectTag |= 1),
      null !== t && n
        ? (($.child = Gc($, t.child, null, a)), ($.child = Gc($, null, l, a)))
        : db(t, $, l, a),
      ($.memoizedState = r.state),
      i && om($, e, !0),
      $.child
    );
  }
  function Rm(t) {
    var $ = t.stateNode;
    $.pendingContext
      ? mm(t, $.pendingContext, $.pendingContext !== $.context)
      : $.context && mm(t, $.context, !1),
      zh(t, $.containerInfo);
  }
  function Sm(t, $, e) {
    var r,
      i = $.mode,
      a = $.pendingProps,
      n = ta.current,
      l = !1;
    if (
      ((r = 0 != (64 & $.effectTag)) ||
        (r = 0 != (2 & n) && (null === t || null !== t.memoizedState)),
      r
        ? ((l = !0), ($.effectTag &= -65))
        : (null !== t && null === t.memoizedState) ||
          void 0 === a.fallback ||
          !0 === a.unstable_avoidThisFallback ||
          (n |= 1),
      ua(ta, 1 & n),
      null === t)
    ) {
      if ((void 0 !== a.fallback && Kh($), l)) {
        if (
          ((l = a.fallback),
          ((a = $b(null, i, 0, null)).return = $),
          0 == (2 & $.mode))
        )
          for (
            t = null !== $.memoizedState ? $.child.child : $.child, a.child = t;
            null !== t;

          )
            (t.return = a), (t = t.sibling);
        return (
          ((e = $b(l, i, e, null)).return = $),
          (a.sibling = e),
          ($.memoizedState = Qg),
          ($.child = a),
          e
        );
      }
      return (
        (i = a.children),
        ($.memoizedState = null),
        ($.child = Og($, null, i, e))
      );
    }
    if (null !== t.memoizedState) {
      if (((i = (t = t.child).sibling), l)) {
        if (
          ((a = a.fallback),
          ((e = pc(t, t.pendingProps)).return = $),
          0 == (2 & $.mode) &&
            (l = null !== $.memoizedState ? $.child.child : $.child) !==
              t.child)
        )
          for (e.child = l; null !== l; ) (l.return = e), (l = l.sibling);
        return (
          ((i = pc(i, a)).return = $),
          (e.sibling = i),
          (e.childExpirationTime = 0),
          ($.memoizedState = Qg),
          ($.child = e),
          i
        );
      }
      return (
        (e = Gc($, t.child, a.children, e)),
        ($.memoizedState = null),
        ($.child = e)
      );
    }
    if (((t = t.child), l)) {
      if (
        ((l = a.fallback),
        ((a = $b(null, i, 0, null)).return = $),
        (a.child = t),
        null !== t && (t.return = a),
        0 == (2 & $.mode))
      )
        for (
          t = null !== $.memoizedState ? $.child.child : $.child, a.child = t;
          null !== t;

        )
          (t.return = a), (t = t.sibling);
      return (
        ((e = $b(l, i, e, null)).return = $),
        (a.sibling = e),
        (e.effectTag |= 2),
        (a.childExpirationTime = 0),
        ($.memoizedState = Qg),
        ($.child = a),
        e
      );
    }
    return ($.memoizedState = null), ($.child = Gc($, t, a.children, e));
  }
  function Tm(t, $) {
    t.expirationTime < $ && (t.expirationTime = $);
    var e = t.alternate;
    null !== e && e.expirationTime < $ && (e.expirationTime = $),
      tm(t.return, $);
  }
  function Oh(t, $, e, r, i, a) {
    var n = t.memoizedState;
    null === n
      ? (t.memoizedState = {
          isBackwards: $,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: e,
          tailExpiration: 0,
          tailMode: i,
          lastEffect: a,
        })
      : ((n.isBackwards = $),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = r),
        (n.tail = e),
        (n.tailExpiration = 0),
        (n.tailMode = i),
        (n.lastEffect = a));
  }
  function Um(t, $, e) {
    var r = $.pendingProps,
      i = r.revealOrder,
      a = r.tail;
    if ((db(t, $, r.children, e), 0 != (2 & (r = ta.current))))
      (r = (1 & r) | 2), ($.effectTag |= 64);
    else {
      if (null !== t && 0 != (64 & t.effectTag))
        t: for (t = $.child; null !== t; ) {
          if (13 === t.tag) null !== t.memoizedState && Tm(t, e);
          else if (19 === t.tag) Tm(t, e);
          else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === $) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === $) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      r &= 1;
    }
    if ((ua(ta, r), 0 == (2 & $.mode))) $.memoizedState = null;
    else
      switch (i) {
        case 'forwards':
          for (e = $.child, i = null; null !== e; )
            null !== (t = e.alternate) && null === pf(t) && (i = e),
              (e = e.sibling);
          null === (e = i)
            ? ((i = $.child), ($.child = null))
            : ((i = e.sibling), (e.sibling = null)),
            Oh($, !1, i, e, a, $.lastEffect);
          break;
        case 'backwards':
          for (e = null, i = $.child, $.child = null; null !== i; ) {
            if (null !== (t = i.alternate) && null === pf(t)) {
              $.child = i;
              break;
            }
            (t = i.sibling), (i.sibling = e), (e = i), (i = t);
          }
          Oh($, !0, e, null, a, $.lastEffect);
          break;
        case 'together':
          Oh($, !1, null, null, void 0, $.lastEffect);
          break;
        default:
          $.memoizedState = null;
      }
    return $.child;
  }
  function Gb(t, $, e) {
    null !== t && ($.dependencies = t.dependencies);
    var r = $.expirationTime;
    if ((0 !== r && yf(r), $.childExpirationTime < e)) return null;
    if (null !== t && $.child !== t.child) throw Error(Y(153));
    if (null !== $.child) {
      for (
        e = pc((t = $.child), t.pendingProps), $.child = e, e.return = $;
        null !== t.sibling;

      )
        (t = t.sibling), ((e = e.sibling = pc(t, t.pendingProps)).return = $);
      e.sibling = null;
    }
    return $.child;
  }
  function vf(t, $) {
    switch (t.tailMode) {
      case 'hidden':
        $ = t.tail;
        for (var e = null; null !== $; )
          null !== $.alternate && (e = $), ($ = $.sibling);
        null === e ? (t.tail = null) : (e.sibling = null);
        break;
      case 'collapsed':
        e = t.tail;
        for (var r = null; null !== e; )
          null !== e.alternate && (r = e), (e = e.sibling);
        null === r
          ? $ || null === t.tail
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
  }
  function Du(t, $, e) {
    var r = $.pendingProps;
    switch ($.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return Ma($.type) && jf(), null;
      case 3:
        return (
          Oc(),
          oa(La),
          oa(Ca),
          (e = $.stateNode).pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (null !== t && null !== t.child) || !uf($) || ($.effectTag |= 4),
          el($),
          null
        );
      case 5:
        Ah($), (e = jc(xd.current));
        var i = $.type;
        if (null !== t && null != $.stateNode)
          Et(t, $, i, r, e), t.ref !== $.ref && ($.effectTag |= 128);
        else {
          if (!r) {
            if (null === $.stateNode) throw Error(Y(166));
            return null;
          }
          if (((t = jc(pb.current)), uf($))) {
            (r = $.stateNode), (i = $.type);
            var a = $.memoizedProps;
            switch (((r[Sb] = $), (r[Ke] = a), i)) {
              case 'iframe':
              case 'object':
              case 'embed':
                na('load', r);
                break;
              case 'video':
              case 'audio':
                for (t = 0; t < gd.length; t++) na(gd[t], r);
                break;
              case 'source':
                na('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                na('error', r), na('load', r);
                break;
              case 'form':
                na('reset', r), na('submit', r);
                break;
              case 'details':
                na('toggle', r);
                break;
              case 'input':
                El(r, a), na('invalid', r), Eb(e, 'onChange');
                break;
              case 'select':
                (r._wrapperState = {wasMultiple: !!a.multiple}),
                  na('invalid', r),
                  Eb(e, 'onChange');
                break;
              case 'textarea':
                Hl(r, a), na('invalid', r), Eb(e, 'onChange');
            }
            for (var n in (mh(i, a), (t = null), a))
              if (a.hasOwnProperty(n)) {
                var l = a[n];
                'children' === n
                  ? 'string' == typeof l
                    ? r.textContent !== l && (t = ['children', l])
                    : 'number' == typeof l &&
                      r.textContent !== '' + l &&
                      (t = ['children', '' + l])
                  : Bc.hasOwnProperty(n) && null != l && Eb(e, n);
              }
            switch (i) {
              case 'input':
                Ze(r), Gl(r, a, !0);
                break;
              case 'textarea':
                Ze(r), Jl(r);
                break;
              case 'select':
              case 'option':
                break;
              default:
                'function' == typeof a.onClick && (r.onclick = df);
            }
            (e = t), ($.updateQueue = e), null !== e && ($.effectTag |= 4);
          } else {
            switch (
              ((n = 9 === e.nodeType ? e : e.ownerDocument),
              t === Fk && (t = Kl(i)),
              t === Fk
                ? 'script' === i
                  ? (((t = n.createElement('div')).innerHTML =
                      '<script></script>'),
                    (t = t.removeChild(t.firstChild)))
                  : 'string' == typeof r.is
                  ? (t = n.createElement(i, {is: r.is}))
                  : ((t = n.createElement(i)),
                    'select' === i &&
                      ((n = t),
                      r.multiple
                        ? (n.multiple = !0)
                        : r.size && (n.size = r.size)))
                : (t = n.createElementNS(t, i)),
              (t[Sb] = $),
              (t[Ke] = r),
              Dt(t, $, !1, !1),
              ($.stateNode = t),
              (n = nh(i, r)),
              i)
            ) {
              case 'iframe':
              case 'object':
              case 'embed':
                na('load', t), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < gd.length; l++) na(gd[l], t);
                l = r;
                break;
              case 'source':
                na('error', t), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                na('error', t), na('load', t), (l = r);
                break;
              case 'form':
                na('reset', t), na('submit', t), (l = r);
                break;
              case 'details':
                na('toggle', t), (l = r);
                break;
              case 'input':
                El(t, r), (l = _g(t, r)), na('invalid', t), Eb(e, 'onChange');
                break;
              case 'option':
                l = ch(t, r);
                break;
              case 'select':
                (t._wrapperState = {wasMultiple: !!r.multiple}),
                  (l = Ea({}, r, {value: void 0})),
                  na('invalid', t),
                  Eb(e, 'onChange');
                break;
              case 'textarea':
                Hl(t, r), (l = dh(t, r)), na('invalid', t), Eb(e, 'onChange');
                break;
              default:
                l = r;
            }
            mh(i, l);
            var v = l;
            for (a in v)
              if (v.hasOwnProperty(a)) {
                var o = v[a];
                'style' === a
                  ? Wl(t, o)
                  : 'dangerouslySetInnerHTML' === a
                  ? null != (o = o ? o.__html : void 0) && vk(t, o)
                  : 'children' === a
                  ? 'string' == typeof o
                    ? ('textarea' !== i || '' !== o) && Bd(t, o)
                    : 'number' == typeof o && Bd(t, '' + o)
                  : 'suppressContentEditableWarning' !== a &&
                    'suppressHydrationWarning' !== a &&
                    'autoFocus' !== a &&
                    (Bc.hasOwnProperty(a)
                      ? null != o && Eb(e, a)
                      : null != o && Zg(t, a, o, n));
              }
            switch (i) {
              case 'input':
                Ze(t), Gl(t, r, !1);
                break;
              case 'textarea':
                Ze(t), Jl(t);
                break;
              case 'option':
                null != r.value && t.setAttribute('value', '' + Vb(r.value));
                break;
              case 'select':
                (t.multiple = !!r.multiple),
                  null != (e = r.value)
                    ? Ic(t, !!r.multiple, e, !1)
                    : null != r.defaultValue &&
                      Ic(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                'function' == typeof l.onClick && (t.onclick = df);
            }
            _l(i, r) && ($.effectTag |= 4);
          }
          null !== $.ref && ($.effectTag |= 128);
        }
        return null;
      case 6:
        if (t && null != $.stateNode) Ft(t, $, t.memoizedProps, r);
        else {
          if ('string' != typeof r && null === $.stateNode) throw Error(Y(166));
          (e = jc(xd.current)),
            jc(pb.current),
            uf($)
              ? ((e = $.stateNode),
                (r = $.memoizedProps),
                (e[Sb] = $),
                e.nodeValue !== r && ($.effectTag |= 4))
              : (((e = (9 === e.nodeType ? e : e.ownerDocument).createTextNode(
                  r
                ))[Sb] = $),
                ($.stateNode = e));
        }
        return null;
      case 13:
        return (
          oa(ta),
          (r = $.memoizedState),
          0 != (64 & $.effectTag)
            ? (($.expirationTime = e), $)
            : ((e = null !== r),
              (r = !1),
              null === t
                ? void 0 !== $.memoizedProps.fallback && uf($)
                : ((r = null !== (i = t.memoizedState)),
                  e ||
                    null === i ||
                    (null !== (i = t.child.sibling) &&
                      (null !== (a = $.firstEffect)
                        ? (($.firstEffect = i), (i.nextEffect = a))
                        : (($.firstEffect = $.lastEffect = i),
                          (i.nextEffect = null)),
                      (i.effectTag = 8)))),
              e &&
                !r &&
                0 != (2 & $.mode) &&
                ((null === t &&
                  !0 !== $.memoizedProps.unstable_avoidThisFallback) ||
                0 != (1 & ta.current)
                  ? bb === fc && (bb = Xe)
                  : ((bb !== fc && bb !== Xe) || (bb = Ye),
                    0 !== Ug && null !== Cb && (qc(Cb, ab), pn(Cb, Ug)))),
              (e || r) && ($.effectTag |= 4),
              null)
        );
      case 4:
        return Oc(), el($), null;
      case 10:
        return vh($), null;
      case 17:
        return Ma($.type) && jf(), null;
      case 19:
        if ((oa(ta), null === (r = $.memoizedState))) return null;
        if (((i = 0 != (64 & $.effectTag)), null === (a = r.rendering))) {
          if (i) vf(r, !1);
          else if (bb !== fc || (null !== t && 0 != (64 & t.effectTag)))
            for (a = $.child; null !== a; ) {
              if (null !== (t = pf(a))) {
                for (
                  $.effectTag |= 64,
                    vf(r, !1),
                    null !== (i = t.updateQueue) &&
                      (($.updateQueue = i), ($.effectTag |= 4)),
                    null === r.lastEffect && ($.firstEffect = null),
                    $.lastEffect = r.lastEffect,
                    r = $.child;
                  null !== r;

                )
                  (a = e),
                    ((i = r).effectTag &= 2),
                    (i.nextEffect = null),
                    (i.firstEffect = null),
                    (i.lastEffect = null),
                    null === (t = i.alternate)
                      ? ((i.childExpirationTime = 0),
                        (i.expirationTime = a),
                        (i.child = null),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null))
                      : ((i.childExpirationTime = t.childExpirationTime),
                        (i.expirationTime = t.expirationTime),
                        (i.child = t.child),
                        (i.memoizedProps = t.memoizedProps),
                        (i.memoizedState = t.memoizedState),
                        (i.updateQueue = t.updateQueue),
                        (a = t.dependencies),
                        (i.dependencies =
                          null === a
                            ? null
                            : {
                                expirationTime: a.expirationTime,
                                firstContext: a.firstContext,
                                responders: a.responders,
                              })),
                    (r = r.sibling);
                return ua(ta, (1 & ta.current) | 2), $.child;
              }
              a = a.sibling;
            }
        } else {
          if (!i)
            if (null !== (t = pf(a))) {
              if (
                (($.effectTag |= 64),
                (i = !0),
                null !== (e = t.updateQueue) &&
                  (($.updateQueue = e), ($.effectTag |= 4)),
                vf(r, !0),
                null === r.tail && 'hidden' === r.tailMode && !a.alternate)
              )
                return (
                  null !== ($ = $.lastEffect = r.lastEffect) &&
                    ($.nextEffect = null),
                  null
                );
            } else
              2 * Za() - r.renderingStartTime > r.tailExpiration &&
                1 < e &&
                (($.effectTag |= 64),
                (i = !0),
                vf(r, !1),
                ($.expirationTime = $.childExpirationTime = e - 1));
          r.isBackwards
            ? ((a.sibling = $.child), ($.child = a))
            : (null !== (e = r.last) ? (e.sibling = a) : ($.child = a),
              (r.last = a));
        }
        return null !== r.tail
          ? (0 === r.tailExpiration && (r.tailExpiration = Za() + 500),
            (e = r.tail),
            (r.rendering = e),
            (r.tail = e.sibling),
            (r.lastEffect = $.lastEffect),
            (r.renderingStartTime = Za()),
            (e.sibling = null),
            ($ = ta.current),
            ua(ta, i ? (1 & $) | 2 : 1 & $),
            e)
          : null;
    }
    throw Error(Y(156, $.tag));
  }
  function Eu(t) {
    switch (t.tag) {
      case 1:
        Ma(t.type) && jf();
        var $ = t.effectTag;
        return 4096 & $ ? ((t.effectTag = (-4097 & $) | 64), t) : null;
      case 3:
        if ((Oc(), oa(La), oa(Ca), 0 != (64 & ($ = t.effectTag))))
          throw Error(Y(285));
        return (t.effectTag = (-4097 & $) | 64), t;
      case 5:
        return Ah(t), null;
      case 13:
        return (
          oa(ta),
          4096 & ($ = t.effectTag)
            ? ((t.effectTag = (-4097 & $) | 64), t)
            : null
        );
      case 19:
        return oa(ta), null;
      case 4:
        return Oc(), null;
      case 10:
        return vh(t), null;
      default:
        return null;
    }
  }
  function Ph(t, $) {
    return {value: t, source: $, stack: $g($)};
  }
  function Qh(t, $) {
    var e = $.source,
      r = $.stack;
    null === r && null !== e && (r = $g(e)),
      null !== e && Db(e.type),
      ($ = $.value),
      null !== t && 1 === t.tag && Db(t.type);
    try {
      console.error($);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Fu(t, $) {
    try {
      ($.props = t.memoizedProps),
        ($.state = t.memoizedState),
        $.componentWillUnmount();
    } catch (e) {
      oc(t, e);
    }
  }
  function Vm(t) {
    var $ = t.ref;
    if (null !== $)
      if ('function' == typeof $)
        try {
          $(null);
        } catch (e) {
          oc(t, e);
        }
      else $.current = null;
  }
  function Gu(t, $) {
    switch ($.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (256 & $.effectTag && null !== t) {
          var e = t.memoizedProps,
            r = t.memoizedState;
          ($ = (t = $.stateNode).getSnapshotBeforeUpdate(
            $.elementType === $.type ? e : ib($.type, e),
            r
          )),
            (t.__reactInternalSnapshotBeforeUpdate = $);
        }
        return;
      case 3:
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(Y(163));
  }
  function Wm(t, $) {
    if (null !== ($ = null !== ($ = $.updateQueue) ? $.lastEffect : null)) {
      var e = ($ = $.next);
      do {
        if ((e.tag & t) === t) {
          var r = e.destroy;
          (e.destroy = void 0), void 0 !== r && r();
        }
        e = e.next;
      } while (e !== $);
    }
  }
  function Xm(t, $) {
    if (null !== ($ = null !== ($ = $.updateQueue) ? $.lastEffect : null)) {
      var e = ($ = $.next);
      do {
        if ((e.tag & t) === t) {
          var r = e.create;
          e.destroy = r();
        }
        e = e.next;
      } while (e !== $);
    }
  }
  function Hu(t, $, e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return void Xm(3, e);
      case 1:
        if (((t = e.stateNode), 4 & e.effectTag))
          if (null === $) t.componentDidMount();
          else {
            var r =
              e.elementType === e.type
                ? $.memoizedProps
                : ib(e.type, $.memoizedProps);
            t.componentDidUpdate(
              r,
              $.memoizedState,
              t.__reactInternalSnapshotBeforeUpdate
            );
          }
        return void (null !== ($ = e.updateQueue) && vm(e, $, t));
      case 3:
        if (null !== ($ = e.updateQueue)) {
          if (((t = null), null !== e.child))
            switch (e.child.tag) {
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          vm(e, $, t);
        }
        return;
      case 5:
        return (
          (t = e.stateNode),
          void (
            null === $ &&
            4 & e.effectTag &&
            _l(e.type, e.memoizedProps) &&
            t.focus()
          )
        );
      case 6:
      case 4:
      case 12:
        return;
      case 13:
        return void (
          null === e.memoizedState &&
          ((e = e.alternate),
          null !== e &&
            ((e = e.memoizedState),
            null !== e && ((e = e.dehydrated), null !== e && Ul(e))))
        );
      case 19:
      case 17:
      case 20:
      case 21:
        return;
    }
    throw Error(Y(163));
  }
  function Ym(t, $, e) {
    switch (('function' == typeof rl && rl($), $.tag)) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (null !== (t = $.updateQueue) && null !== (t = t.lastEffect)) {
          var r = t.next;
          Wb(97 < e ? 97 : e, function () {
            var t = r;
            do {
              var e = t.destroy;
              if (void 0 !== e) {
                var i = $;
                try {
                  e();
                } catch (a) {
                  oc(i, a);
                }
              }
              t = t.next;
            } while (t !== r);
          });
        }
        break;
      case 1:
        Vm($),
          'function' == typeof (e = $.stateNode).componentWillUnmount &&
            Fu($, e);
        break;
      case 5:
        Vm($);
        break;
      case 4:
        an(t, $, e);
    }
  }
  function Zm(t) {
    var $ = t.alternate;
    (t.return = null),
      (t.child = null),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.dependencies = null),
      (t.alternate = null),
      (t.firstEffect = null),
      (t.lastEffect = null),
      (t.pendingProps = null),
      (t.memoizedProps = null),
      (t.stateNode = null),
      null !== $ && Zm($);
  }
  function $m(t) {
    return 5 === t.tag || 3 === t.tag || 4 === t.tag;
  }
  function _m(t) {
    t: {
      for (var $ = t.return; null !== $; ) {
        if ($m($)) {
          var e = $;
          break t;
        }
        $ = $.return;
      }
      throw Error(Y(160));
    }
    switch ((($ = e.stateNode), e.tag)) {
      case 5:
        var r = !1;
        break;
      case 3:
      case 4:
        ($ = $.containerInfo), (r = !0);
        break;
      default:
        throw Error(Y(161));
    }
    16 & e.effectTag && (Bd($, ''), (e.effectTag &= -17));
    t: $: for (e = t; ; ) {
      for (; null === e.sibling; ) {
        if (null === e.return || $m(e.return)) {
          e = null;
          break t;
        }
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

      ) {
        if (2 & e.effectTag) continue $;
        if (null === e.child || 4 === e.tag) continue $;
        (e.child.return = e), (e = e.child);
      }
      if (!(2 & e.effectTag)) {
        e = e.stateNode;
        break t;
      }
    }
    r ? Rh(t, e, $) : Sh(t, e, $);
  }
  function Rh(t, $, e) {
    var r = t.tag,
      i = 5 === r || 6 === r;
    if (i)
      (t = i ? t.stateNode : t.stateNode.instance),
        $
          ? 8 === e.nodeType
            ? e.parentNode.insertBefore(t, $)
            : e.insertBefore(t, $)
          : (8 === e.nodeType
              ? ($ = e.parentNode).insertBefore(t, e)
              : ($ = e).appendChild(t),
            null != (e = e._reactRootContainer) ||
              null !== $.onclick ||
              ($.onclick = df));
    else if (4 !== r && null !== (t = t.child))
      for (Rh(t, $, e), t = t.sibling; null !== t; )
        Rh(t, $, e), (t = t.sibling);
  }
  function Sh(t, $, e) {
    var r = t.tag,
      i = 5 === r || 6 === r;
    if (i)
      (t = i ? t.stateNode : t.stateNode.instance),
        $ ? e.insertBefore(t, $) : e.appendChild(t);
    else if (4 !== r && null !== (t = t.child))
      for (Sh(t, $, e), t = t.sibling; null !== t; )
        Sh(t, $, e), (t = t.sibling);
  }
  function an(t, $, e) {
    for (var r, i, a = $, n = !1; ; ) {
      if (!n) {
        n = a.return;
        t: for (;;) {
          if (null === n) throw Error(Y(160));
          switch (((r = n.stateNode), n.tag)) {
            case 5:
              i = !1;
              break t;
            case 3:
            case 4:
              (r = r.containerInfo), (i = !0);
              break t;
          }
          n = n.return;
        }
        n = !0;
      }
      if (5 === a.tag || 6 === a.tag) {
        t: for (var l = t, v = a, o = e, u = v; ; )
          if ((Ym(l, u, o), null !== u.child && 4 !== u.tag))
            (u.child.return = u), (u = u.child);
          else {
            if (u === v) break;
            for (; null === u.sibling; ) {
              if (null === u.return || u.return === v) break t;
              u = u.return;
            }
            (u.sibling.return = u.return), (u = u.sibling);
          }
        i
          ? ((l = r),
            (v = a.stateNode),
            8 === l.nodeType ? l.parentNode.removeChild(v) : l.removeChild(v))
          : r.removeChild(a.stateNode);
      } else if (4 === a.tag) {
        if (null !== a.child) {
          (r = a.stateNode.containerInfo),
            (i = !0),
            (a.child.return = a),
            (a = a.child);
          continue;
        }
      } else if ((Ym(t, a, e), null !== a.child)) {
        (a.child.return = a), (a = a.child);
        continue;
      }
      if (a === $) break;
      for (; null === a.sibling; ) {
        if (null === a.return || a.return === $) return;
        4 === (a = a.return).tag && (n = !1);
      }
      (a.sibling.return = a.return), (a = a.sibling);
    }
  }
  function Th(t, $) {
    switch ($.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        return void Wm(3, $);
      case 1:
        return;
      case 5:
        var e = $.stateNode;
        if (null != e) {
          var r = $.memoizedProps,
            i = null !== t ? t.memoizedProps : r;
          t = $.type;
          var a = $.updateQueue;
          if ((($.updateQueue = null), null !== a)) {
            for (
              e[Ke] = r,
                'input' === t &&
                  'radio' === r.type &&
                  null != r.name &&
                  Fl(e, r),
                nh(t, i),
                $ = nh(t, r),
                i = 0;
              i < a.length;
              i += 2
            ) {
              var n = a[i],
                l = a[i + 1];
              'style' === n
                ? Wl(e, l)
                : 'dangerouslySetInnerHTML' === n
                ? vk(e, l)
                : 'children' === n
                ? Bd(e, l)
                : Zg(e, n, l, $);
            }
            switch (t) {
              case 'input':
                ah(e, r);
                break;
              case 'textarea':
                Il(e, r);
                break;
              case 'select':
                ($ = e._wrapperState.wasMultiple),
                  (e._wrapperState.wasMultiple = !!r.multiple),
                  null != (t = r.value)
                    ? Ic(e, !!r.multiple, t, !1)
                    : $ !== !!r.multiple &&
                      (null != r.defaultValue
                        ? Ic(e, !!r.multiple, r.defaultValue, !0)
                        : Ic(e, !!r.multiple, r.multiple ? [] : '', !1));
            }
          }
        }
        return;
      case 6:
        if (null === $.stateNode) throw Error(Y(162));
        return void ($.stateNode.nodeValue = $.memoizedProps);
      case 3:
        return void (
          ($ = $.stateNode).hydrate && (($.hydrate = !1), Ul($.containerInfo))
        );
      case 12:
        return;
      case 13:
        if (
          ((e = $),
          null === $.memoizedState
            ? (r = !1)
            : ((r = !0), (e = $.child), (kl = Za())),
          null !== e)
        )
          t: for (t = e; ; ) {
            if (5 === t.tag)
              (a = t.stateNode),
                r
                  ? 'function' == typeof (a = a.style).setProperty
                    ? a.setProperty('display', 'none', 'important')
                    : (a.display = 'none')
                  : ((a = t.stateNode),
                    (i =
                      null != (i = t.memoizedProps.style) &&
                      i.hasOwnProperty('display')
                        ? i.display
                        : null),
                    (a.style.display = Vl('display', i)));
            else if (6 === t.tag)
              t.stateNode.nodeValue = r ? '' : t.memoizedProps;
            else {
              if (
                13 === t.tag &&
                null !== t.memoizedState &&
                null === t.memoizedState.dehydrated
              ) {
                ((a = t.child.sibling).return = t), (t = a);
                continue;
              }
              if (null !== t.child) {
                (t.child.return = t), (t = t.child);
                continue;
              }
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) break t;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        return void bn($);
      case 19:
        return void bn($);
      case 17:
        return;
    }
    throw Error(Y(163));
  }
  function bn(t) {
    var $ = t.updateQueue;
    if (null !== $) {
      t.updateQueue = null;
      var e = t.stateNode;
      null === e && (e = t.stateNode = new Gt()),
        $.forEach(function ($) {
          var r = Pu.bind(null, t, $);
          e.has($) || (e.add($), $.then(r, r));
        });
    }
  }
  function cn(t, $, e) {
    ((e = Xb(e, null)).tag = 3), (e.payload = {element: null});
    var r = $.value;
    return (
      (e.callback = function () {
        ml || ((ml = !0), (Kt = r)), Qh(t, $);
      }),
      e
    );
  }
  function dn(t, $, e) {
    (e = Xb(e, null)).tag = 3;
    var r = t.type.getDerivedStateFromError;
    if ('function' == typeof r) {
      var i = $.value;
      e.payload = function () {
        return Qh(t, $), r(i);
      };
    }
    var a = t.stateNode;
    return (
      null !== a &&
        'function' == typeof a.componentDidCatch &&
        (e.callback = function () {
          'function' != typeof r &&
            (null === Hc ? (Hc = new Set([this])) : Hc.add(this), Qh(t, $));
          var e = $.stack;
          this.componentDidCatch($.value, {
            componentStack: null !== e ? e : '',
          });
        }),
      e
    );
  }
  function tb() {
    return (ra & (hb | rb)) !== va
      ? 1073741821 - ((Za() / 10) | 0)
      : 0 !== pl
      ? pl
      : (pl = 1073741821 - ((Za() / 10) | 0));
  }
  function lc(t, $, e) {
    if (0 == (2 & ($ = $.mode))) return 1073741823;
    var r = lf();
    if (0 == (4 & $)) return 99 === r ? 1073741823 : 1073741822;
    if ((ra & hb) !== va) return ab;
    if (null !== e) t = mf(t, 0 | e.timeoutMs || 5e3, 250);
    else
      switch (r) {
        case 99:
          t = 1073741823;
          break;
        case 98:
          t = mf(t, 150, 100);
          break;
        case 97:
        case 96:
          t = mf(t, 5e3, 250);
          break;
        case 95:
          t = 2;
          break;
        default:
          throw Error(Y(326));
      }
    return null !== Cb && t === ab && --t, t;
  }
  function Zb(t, $) {
    if (50 < ol) throw ((ol = 0), (Lt = null), Error(Y(185)));
    if (null !== (t = wf(t, $))) {
      var e = lf();
      1073741823 === $
        ? (ra & Rg) !== va && (ra & (hb | rb)) === va
          ? Uh(t)
          : (Sa(t), ra === va && sb())
        : Sa(t),
        (4 & ra) === va ||
          (98 !== e && 99 !== e) ||
          (null === zd
            ? (zd = new Map([[t, $]]))
            : (void 0 === (e = zd.get(t)) || e > $) && zd.set(t, $));
    }
  }
  function wf(t, $) {
    t.expirationTime < $ && (t.expirationTime = $);
    var e = t.alternate;
    null !== e && e.expirationTime < $ && (e.expirationTime = $);
    var r = t.return,
      i = null;
    if (null === r && 3 === t.tag) i = t.stateNode;
    else
      for (; null !== r; ) {
        if (
          ((e = r.alternate),
          r.childExpirationTime < $ && (r.childExpirationTime = $),
          null !== e &&
            e.childExpirationTime < $ &&
            (e.childExpirationTime = $),
          null === r.return && 3 === r.tag)
        ) {
          i = r.stateNode;
          break;
        }
        r = r.return;
      }
    return (
      null !== i && (Cb === i && (yf($), bb === Ye && qc(i, ab)), pn(i, $)), i
    );
  }
  function xf(t) {
    var $ = t.lastExpiredTime;
    if (0 !== $) return $;
    if (!on(t, ($ = t.firstPendingTime))) return $;
    var e = t.lastPingedTime;
    return 2 >= (t = e > (t = t.nextKnownPendingLevel) ? e : t) && $ !== t
      ? 0
      : t;
  }
  function Sa(t) {
    if (0 !== t.lastExpiredTime)
      (t.callbackExpirationTime = 1073741823),
        (t.callbackPriority = 99),
        (t.callbackNode = rm(Uh.bind(null, t)));
    else {
      var $ = xf(t),
        e = t.callbackNode;
      if (0 === $)
        null !== e &&
          ((t.callbackNode = null),
          (t.callbackExpirationTime = 0),
          (t.callbackPriority = 90));
      else {
        var r = tb();
        if (
          (1073741823 === $
            ? (r = 99)
            : 1 === $ || 2 === $
            ? (r = 95)
            : (r =
                0 >= (r = 10 * (1073741821 - $) - 10 * (1073741821 - r))
                  ? 99
                  : 250 >= r
                  ? 98
                  : 5250 >= r
                  ? 97
                  : 95),
          null !== e)
        ) {
          var i = t.callbackPriority;
          if (t.callbackExpirationTime === $ && i >= r) return;
          e !== Xk && Rk(e);
        }
        (t.callbackExpirationTime = $),
          (t.callbackPriority = r),
          ($ =
            1073741823 === $
              ? rm(Uh.bind(null, t))
              : qm(r, en.bind(null, t), {
                  timeout: 10 * (1073741821 - $) - Za(),
                })),
          (t.callbackNode = $);
      }
    }
  }
  function en(t, $) {
    if (((pl = 0), $)) return Zh(t, ($ = tb())), Sa(t), null;
    var e = xf(t);
    if (0 !== e) {
      if ((($ = t.callbackNode), (ra & (hb | rb)) !== va)) throw Error(Y(327));
      if ((Rc(), (t === Cb && e === ab) || mc(t, e), null !== ga)) {
        var r = ra;
        ra |= hb;
        for (var i = jn(); ; )
          try {
            Ku();
            break;
          } catch (l) {
            hn(t, l);
          }
        if ((uh(), (ra = r), (Ve.current = i), bb === We))
          throw (($ = hl), mc(t, e), qc(t, e), Sa(t), $);
        if (null === ga)
          switch (
            ((i = t.finishedWork = t.current.alternate),
            (t.finishedExpirationTime = e),
            (r = bb),
            (Cb = null),
            r)
          ) {
            case fc:
            case We:
              throw Error(Y(345));
            case gl:
              Zh(t, 2 < e ? 2 : e);
              break;
            case Xe:
              if (
                (qc(t, e),
                e === (r = t.lastSuspendedTime) &&
                  (t.nextKnownPendingLevel = Vh(i)),
                1073741823 === gc && 10 < (i = kl + ll - Za()))
              ) {
                if (jl) {
                  var a = t.lastPingedTime;
                  if (0 === a || a >= e) {
                    (t.lastPingedTime = e), mc(t, e);
                    break;
                  }
                }
                if (0 !== (a = xf(t)) && a !== e) break;
                if (0 !== r && r !== e) {
                  t.lastPingedTime = r;
                  break;
                }
                t.timeoutHandle = Hg(nc.bind(null, t), i);
                break;
              }
              nc(t);
              break;
            case Ye:
              if (
                (qc(t, e),
                e === (r = t.lastSuspendedTime) &&
                  (t.nextKnownPendingLevel = Vh(i)),
                jl && (0 === (i = t.lastPingedTime) || i >= e))
              ) {
                (t.lastPingedTime = e), mc(t, e);
                break;
              }
              if (0 !== (i = xf(t)) && i !== e) break;
              if (0 !== r && r !== e) {
                t.lastPingedTime = r;
                break;
              }
              if (
                (1073741823 !== Tg
                  ? (r = 10 * (1073741821 - Tg) - Za())
                  : 1073741823 === gc
                  ? (r = 0)
                  : ((r = 10 * (1073741821 - gc) - 5e3),
                    0 > (r = (i = Za()) - r) && (r = 0),
                    (e = 10 * (1073741821 - e) - i) <
                      (r =
                        (120 > r
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Jt(r / 1960)) - r) && (r = e)),
                10 < r)
              ) {
                t.timeoutHandle = Hg(nc.bind(null, t), r);
                break;
              }
              nc(t);
              break;
            case Sg:
              if (1073741823 !== gc && null !== il) {
                a = gc;
                var n = il;
                if (
                  (0 >= (r = 0 | n.busyMinDurationMs)
                    ? (r = 0)
                    : ((i = 0 | n.busyDelayMs),
                      (r =
                        (a =
                          Za() -
                          (10 * (1073741821 - a) - (0 | n.timeoutMs || 5e3))) <=
                        i
                          ? 0
                          : i + r - a)),
                  10 < r)
                ) {
                  qc(t, e), (t.timeoutHandle = Hg(nc.bind(null, t), r));
                  break;
                }
              }
              nc(t);
              break;
            default:
              throw Error(Y(329));
          }
        if ((Sa(t), t.callbackNode === $)) return en.bind(null, t);
      }
    }
    return null;
  }
  function Uh(t) {
    var $ = t.lastExpiredTime;
    if ((($ = 0 !== $ ? $ : 1073741823), (ra & (hb | rb)) !== va))
      throw Error(Y(327));
    if ((Rc(), (t === Cb && $ === ab) || mc(t, $), null !== ga)) {
      var e = ra;
      ra |= hb;
      for (var r = jn(); ; )
        try {
          Ju();
          break;
        } catch (i) {
          hn(t, i);
        }
      if ((uh(), (ra = e), (Ve.current = r), bb === We))
        throw ((e = hl), mc(t, $), qc(t, $), Sa(t), e);
      if (null !== ga) throw Error(Y(261));
      (t.finishedWork = t.current.alternate),
        (t.finishedExpirationTime = $),
        (Cb = null),
        nc(t),
        Sa(t);
    }
    return null;
  }
  function Iu() {
    if (null !== zd) {
      var t = zd;
      (zd = null),
        t.forEach(function (t, $) {
          Zh($, t), Sa($);
        }),
        sb();
    }
  }
  function fn(t, $) {
    var e = ra;
    ra |= 1;
    try {
      return t($);
    } finally {
      (ra = e) === va && sb();
    }
  }
  function gn(t, $) {
    var e = ra;
    (ra &= -2), (ra |= Rg);
    try {
      return t($);
    } finally {
      (ra = e) === va && sb();
    }
  }
  function mc(t, $) {
    (t.finishedWork = null), (t.finishedExpirationTime = 0);
    var e = t.timeoutHandle;
    if ((-1 !== e && ((t.timeoutHandle = -1), Ns(e)), null !== ga))
      for (e = ga.return; null !== e; ) {
        var r = e;
        switch (r.tag) {
          case 1:
            null != (r = r.type.childContextTypes) && jf();
            break;
          case 3:
            Oc(), oa(La), oa(Ca);
            break;
          case 5:
            Ah(r);
            break;
          case 4:
            Oc();
            break;
          case 13:
          case 19:
            oa(ta);
            break;
          case 10:
            vh(r);
        }
        e = e.return;
      }
    (Cb = t),
      (ga = pc(t.current, null)),
      (ab = $),
      (bb = fc),
      (hl = null),
      (Tg = gc = 1073741823),
      (il = null),
      (Ug = 0),
      (jl = !1);
  }
  function hn(t, $) {
    for (;;) {
      try {
        if ((uh(), (Te.current = Ue), yt))
          for (var e = Da.memoizedState; null !== e; ) {
            var r = e.queue;
            null !== r && (r.pending = null), (e = e.next);
          }
        if (
          ((yd = 0),
          (Ub = qb = Da = null),
          (yt = !1),
          null === ga || null === ga.return)
        )
          return (bb = We), (hl = $), (ga = null);
        t: {
          var i = t,
            a = ga.return,
            n = ga,
            l = $;
          if (
            (($ = ab),
            (n.effectTag |= 2048),
            (n.firstEffect = n.lastEffect = null),
            null !== l && 'object' == typeof l && 'function' == typeof l.then)
          ) {
            var v = l;
            if (0 == (2 & n.mode)) {
              var o = n.alternate;
              o
                ? ((n.updateQueue = o.updateQueue),
                  (n.memoizedState = o.memoizedState),
                  (n.expirationTime = o.expirationTime))
                : ((n.updateQueue = null), (n.memoizedState = null));
            }
            var u = 0 != (1 & ta.current),
              c = a;
            do {
              var f;
              if ((f = 13 === c.tag)) {
                var s = c.memoizedState;
                if (null !== s) f = null !== s.dehydrated;
                else {
                  var d = c.memoizedProps;
                  f =
                    void 0 !== d.fallback &&
                    (!0 !== d.unstable_avoidThisFallback || !u);
                }
              }
              if (f) {
                var p = c.updateQueue;
                if (null === p) {
                  var h = new Set();
                  h.add(v), (c.updateQueue = h);
                } else p.add(v);
                if (0 == (2 & c.mode)) {
                  if (
                    ((c.effectTag |= 64), (n.effectTag &= -2981), 1 === n.tag)
                  )
                    if (null === n.alternate) n.tag = 17;
                    else {
                      var g = Xb(1073741823, null);
                      (g.tag = 2), Yb(n, g);
                    }
                  n.expirationTime = 1073741823;
                  break t;
                }
                (l = void 0), (n = $);
                var m = i.pingCache;
                if (
                  (null === m
                    ? ((m = i.pingCache = new Ht()),
                      (l = new Set()),
                      m.set(v, l))
                    : void 0 === (l = m.get(v)) &&
                      ((l = new Set()), m.set(v, l)),
                  !l.has(n))
                ) {
                  l.add(n);
                  var b = Ou.bind(null, i, v, n);
                  v.then(b, b);
                }
                (c.effectTag |= 4096), (c.expirationTime = $);
                break t;
              }
              c = c.return;
            } while (null !== c);
            l = Error(
              (Db(n.type) || 'A React component') +
                ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.' +
                $g(n)
            );
          }
          bb !== Sg && (bb = gl), (l = Ph(l, n)), (c = a);
          do {
            switch (c.tag) {
              case 3:
                (v = l),
                  (c.effectTag |= 4096),
                  (c.expirationTime = $),
                  um(c, cn(c, v, $));
                break t;
              case 1:
                v = l;
                var y = c.type,
                  k = c.stateNode;
                if (
                  0 == (64 & c.effectTag) &&
                  ('function' == typeof y.getDerivedStateFromError ||
                    (null !== k &&
                      'function' == typeof k.componentDidCatch &&
                      (null === Hc || !Hc.has(k))))
                ) {
                  (c.effectTag |= 4096),
                    (c.expirationTime = $),
                    um(c, dn(c, v, $));
                  break t;
                }
            }
            c = c.return;
          } while (null !== c);
        }
        ga = mn(ga);
      } catch (w) {
        $ = w;
        continue;
      }
      break;
    }
  }
  function jn() {
    var t = Ve.current;
    return (Ve.current = Ue), null === t ? Ue : t;
  }
  function kn(t, $) {
    t < gc && 2 < t && (gc = t),
      null !== $ && t < Tg && 2 < t && ((Tg = t), (il = $));
  }
  function yf(t) {
    t > Ug && (Ug = t);
  }
  function Ju() {
    for (; null !== ga; ) ga = ln(ga);
  }
  function Ku() {
    for (; null !== ga && !ut(); ) ga = ln(ga);
  }
  function ln(t) {
    var $ = It(t.alternate, t, ab);
    return (
      (t.memoizedProps = t.pendingProps),
      null === $ && ($ = mn(t)),
      (fl.current = null),
      $
    );
  }
  function mn(t) {
    ga = t;
    do {
      var $ = ga.alternate;
      if (((t = ga.return), 0 == (2048 & ga.effectTag))) {
        if ((($ = Du($, ga, ab)), 1 === ab || 1 !== ga.childExpirationTime)) {
          for (var e = 0, r = ga.child; null !== r; ) {
            var i = r.expirationTime,
              a = r.childExpirationTime;
            i > e && (e = i), a > e && (e = a), (r = r.sibling);
          }
          ga.childExpirationTime = e;
        }
        if (null !== $) return $;
        null !== t &&
          0 == (2048 & t.effectTag) &&
          (null === t.firstEffect && (t.firstEffect = ga.firstEffect),
          null !== ga.lastEffect &&
            (null !== t.lastEffect &&
              (t.lastEffect.nextEffect = ga.firstEffect),
            (t.lastEffect = ga.lastEffect)),
          1 < ga.effectTag &&
            (null !== t.lastEffect
              ? (t.lastEffect.nextEffect = ga)
              : (t.firstEffect = ga),
            (t.lastEffect = ga)));
      } else {
        if (null !== ($ = Eu(ga))) return ($.effectTag &= 2047), $;
        null !== t &&
          ((t.firstEffect = t.lastEffect = null), (t.effectTag |= 2048));
      }
      if (null !== ($ = ga.sibling)) return $;
      ga = t;
    } while (null !== ga);
    return bb === fc && (bb = Sg), null;
  }
  function Vh(t) {
    var $ = t.expirationTime;
    return $ > (t = t.childExpirationTime) ? $ : t;
  }
  function nc(t) {
    var $ = lf();
    return Wb(99, Lu.bind(null, t, $)), null;
  }
  function Lu(t, $) {
    do {
      Rc();
    } while (null !== Vg);
    if ((ra & (hb | rb)) !== va) throw Error(Y(327));
    var e = t.finishedWork,
      r = t.finishedExpirationTime;
    if (null === e) return null;
    if (
      ((t.finishedWork = null), (t.finishedExpirationTime = 0), e === t.current)
    )
      throw Error(Y(177));
    (t.callbackNode = null),
      (t.callbackExpirationTime = 0),
      (t.callbackPriority = 90),
      (t.nextKnownPendingLevel = 0);
    var i = Vh(e);
    if (
      ((t.firstPendingTime = i),
      r <= t.lastSuspendedTime
        ? (t.firstSuspendedTime =
            t.lastSuspendedTime =
            t.nextKnownPendingLevel =
              0)
        : r <= t.firstSuspendedTime && (t.firstSuspendedTime = r - 1),
      r <= t.lastPingedTime && (t.lastPingedTime = 0),
      r <= t.lastExpiredTime && (t.lastExpiredTime = 0),
      t === Cb && ((ga = Cb = null), (ab = 0)),
      1 < e.effectTag
        ? null !== e.lastEffect
          ? ((e.lastEffect.nextEffect = e), (i = e.firstEffect))
          : (i = e)
        : (i = e.firstEffect),
      null !== i)
    ) {
      var a = ra;
      (ra |= rb), (fl.current = null), (Ls = Ek);
      var n = $l();
      if (ph(n)) {
        if ('selectionStart' in n)
          var l = {start: n.selectionStart, end: n.selectionEnd};
        else
          t: {
            var v =
              (l = ((l = n.ownerDocument) && l.defaultView) || window)
                .getSelection && l.getSelection();
            if (v && 0 !== v.rangeCount) {
              l = v.anchorNode;
              var o = v.anchorOffset,
                u = v.focusNode;
              v = v.focusOffset;
              try {
                l.nodeType, u.nodeType;
              } catch (T) {
                l = null;
                break t;
              }
              var c = 0,
                f = -1,
                s = -1,
                d = 0,
                p = 0,
                h = n,
                g = null;
              $: for (;;) {
                for (
                  var m;
                  h !== l || (0 !== o && 3 !== h.nodeType) || (f = c + o),
                    h !== u || (0 !== v && 3 !== h.nodeType) || (s = c + v),
                    3 === h.nodeType && (c += h.nodeValue.length),
                    null !== (m = h.firstChild);

                )
                  (g = h), (h = m);
                for (;;) {
                  if (h === n) break $;
                  if (
                    (g === l && ++d === o && (f = c),
                    g === u && ++p === v && (s = c),
                    null !== (m = h.nextSibling))
                  )
                    break;
                  g = (h = g).parentNode;
                }
                h = m;
              }
              l = -1 === f || -1 === s ? null : {start: f, end: s};
            } else l = null;
          }
        l = l || {start: 0, end: 0};
      } else l = null;
      (Ms = {activeElementDetached: null, focusedElem: n, selectionRange: l}),
        (Ek = !1),
        (ca = i);
      do {
        try {
          Mu();
        } catch (T) {
          if (null === ca) throw Error(Y(330));
          oc(ca, T), (ca = ca.nextEffect);
        }
      } while (null !== ca);
      ca = i;
      do {
        try {
          for (n = t, l = $; null !== ca; ) {
            var b = ca.effectTag;
            if ((16 & b && Bd(ca.stateNode, ''), 128 & b)) {
              var y = ca.alternate;
              if (null !== y) {
                var k = y.ref;
                null !== k &&
                  ('function' == typeof k ? k(null) : (k.current = null));
              }
            }
            switch (1038 & b) {
              case 2:
                _m(ca), (ca.effectTag &= -3);
                break;
              case 6:
                _m(ca), (ca.effectTag &= -3), Th(ca.alternate, ca);
                break;
              case 1024:
                ca.effectTag &= -1025;
                break;
              case 1028:
                (ca.effectTag &= -1025), Th(ca.alternate, ca);
                break;
              case 4:
                Th(ca.alternate, ca);
                break;
              case 8:
                an(n, (o = ca), l), Zm(o);
            }
            ca = ca.nextEffect;
          }
        } catch (T) {
          if (null === ca) throw Error(Y(330));
          oc(ca, T), (ca = ca.nextEffect);
        }
      } while (null !== ca);
      if (
        ((k = Ms),
        (y = $l()),
        (b = k.focusedElem),
        (l = k.selectionRange),
        y !== b &&
          b &&
          b.ownerDocument &&
          Zl(b.ownerDocument.documentElement, b))
      ) {
        null !== l &&
          ph(b) &&
          ((y = l.start),
          void 0 === (k = l.end) && (k = y),
          'selectionStart' in b
            ? ((b.selectionStart = y),
              (b.selectionEnd = Math.min(k, b.value.length)))
            : (k =
                ((y = b.ownerDocument || document) && y.defaultView) || window)
                .getSelection &&
              ((k = k.getSelection()),
              (o = b.textContent.length),
              (n = Math.min(l.start, o)),
              (l = void 0 === l.end ? n : Math.min(l.end, o)),
              !k.extend && n > l && ((o = l), (l = n), (n = o)),
              (o = Yl(b, n)),
              (u = Yl(b, l)),
              o &&
                u &&
                (1 !== k.rangeCount ||
                  k.anchorNode !== o.node ||
                  k.anchorOffset !== o.offset ||
                  k.focusNode !== u.node ||
                  k.focusOffset !== u.offset) &&
                ((y = y.createRange()).setStart(o.node, o.offset),
                k.removeAllRanges(),
                n > l
                  ? (k.addRange(y), k.extend(u.node, u.offset))
                  : (y.setEnd(u.node, u.offset), k.addRange(y))))),
          (y = []);
        for (k = b; (k = k.parentNode); )
          1 === k.nodeType &&
            y.push({element: k, left: k.scrollLeft, top: k.scrollTop});
        for (
          'function' == typeof b.focus && b.focus(), b = 0;
          b < y.length;
          b++
        )
          ((k = y[b]).element.scrollLeft = k.left),
            (k.element.scrollTop = k.top);
      }
      (Ek = !!Ls), (Ms = Ls = null), (t.current = e), (ca = i);
      do {
        try {
          for (b = t; null !== ca; ) {
            var w = ca.effectTag;
            if ((36 & w && Hu(b, ca.alternate, ca), 128 & w)) {
              y = void 0;
              var x = ca.ref;
              if (null !== x) {
                var E = ca.stateNode;
                switch (ca.tag) {
                  case 5:
                    y = E;
                    break;
                  default:
                    y = E;
                }
                'function' == typeof x ? x(y) : (x.current = y);
              }
            }
            ca = ca.nextEffect;
          }
        } catch (T) {
          if (null === ca) throw Error(Y(330));
          oc(ca, T), (ca = ca.nextEffect);
        }
      } while (null !== ca);
      (ca = null), vt(), (ra = a);
    } else t.current = e;
    if (nl) (nl = !1), (Vg = t), (Wg = $);
    else
      for (ca = i; null !== ca; )
        ($ = ca.nextEffect), (ca.nextEffect = null), (ca = $);
    if (
      (0 === ($ = t.firstPendingTime) && (Hc = null),
      1073741823 === $ ? (t === Lt ? ol++ : ((ol = 0), (Lt = t))) : (ol = 0),
      'function' == typeof ql && ql(e.stateNode, r),
      Sa(t),
      ml)
    )
      throw ((ml = !1), (t = Kt), (Kt = null), t);
    return (ra & Rg) !== va ? null : (sb(), null);
  }
  function Mu() {
    for (; null !== ca; ) {
      var t = ca.effectTag;
      0 != (256 & t) && Gu(ca.alternate, ca),
        0 == (512 & t) ||
          nl ||
          ((nl = !0),
          qm(97, function () {
            return Rc(), null;
          })),
        (ca = ca.nextEffect);
    }
  }
  function Rc() {
    if (90 !== Wg) {
      var t = 97 < Wg ? 97 : Wg;
      return (Wg = 90), Wb(t, Nu);
    }
  }
  function Nu() {
    if (null === Vg) return !1;
    var t = Vg;
    if (((Vg = null), (ra & (hb | rb)) !== va)) throw Error(Y(331));
    var $ = ra;
    for (ra |= rb, t = t.current.firstEffect; null !== t; ) {
      try {
        var e = t;
        if (0 != (512 & e.effectTag))
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              Wm(5, e), Xm(5, e);
          }
      } catch (r) {
        if (null === t) throw Error(Y(330));
        oc(t, r);
      }
      (e = t.nextEffect), (t.nextEffect = null), (t = e);
    }
    return (ra = $), sb(), !0;
  }
  function nn(t, $, e) {
    Yb(t, ($ = cn(t, ($ = Ph(e, $)), 1073741823))),
      null !== (t = wf(t, 1073741823)) && Sa(t);
  }
  function oc(t, $) {
    if (3 === t.tag) nn(t, t, $);
    else
      for (var e = t.return; null !== e; ) {
        if (3 === e.tag) {
          nn(e, t, $);
          break;
        }
        if (1 === e.tag) {
          var r = e.stateNode;
          if (
            'function' == typeof e.type.getDerivedStateFromError ||
            ('function' == typeof r.componentDidCatch &&
              (null === Hc || !Hc.has(r)))
          ) {
            Yb(e, (t = dn(e, (t = Ph($, t)), 1073741823))),
              null !== (e = wf(e, 1073741823)) && Sa(e);
            break;
          }
        }
        e = e.return;
      }
  }
  function Ou(t, $, e) {
    var r = t.pingCache;
    null !== r && r.delete($),
      Cb === t && ab === e
        ? bb === Ye || (bb === Xe && 1073741823 === gc && Za() - kl < ll)
          ? mc(t, ab)
          : (jl = !0)
        : on(t, e) &&
          ((0 !== ($ = t.lastPingedTime) && $ < e) ||
            ((t.lastPingedTime = e), Sa(t)));
  }
  function Pu(t, $) {
    var e = t.stateNode;
    null !== e && e.delete($),
      0 === ($ = 0) && ($ = lc(($ = tb()), t, null)),
      null !== (t = wf(t, $)) && Sa(t);
  }
  function Qu(t) {
    if ('undefined' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
    var $ = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if ($.isDisabled || !$.supportsFiber) return !0;
    try {
      var e = $.inject(t);
      (ql = function (t) {
        try {
          $.onCommitFiberRoot(e, t, void 0, 64 == (64 & t.current.effectTag));
        } catch (r) {}
      }),
        (rl = function (t) {
          try {
            $.onCommitFiberUnmount(e, t);
          } catch (r) {}
        });
    } catch (r) {}
    return !0;
  }
  function Ru(t, $, e, r) {
    (this.tag = t),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = $),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.effectTag = 0),
      (this.lastEffect = this.firstEffect = this.nextEffect = null),
      (this.childExpirationTime = this.expirationTime = 0),
      (this.alternate = null);
  }
  function ub(t, $, e, r) {
    return new Ru(t, $, e, r);
  }
  function Wh(t) {
    return !(!(t = t.prototype) || !t.isReactComponent);
  }
  function Su(t) {
    if ('function' == typeof t) return Wh(t) ? 1 : 0;
    if (null != t) {
      if ((t = t.$$typeof) === yg) return 11;
      if (t === Ag) return 14;
    }
    return 2;
  }
  function pc(t, $) {
    var e = t.alternate;
    return (
      null === e
        ? (((e = ub(t.tag, $, t.key, t.mode)).elementType = t.elementType),
          (e.type = t.type),
          (e.stateNode = t.stateNode),
          (e.alternate = t),
          (t.alternate = e))
        : ((e.pendingProps = $),
          (e.effectTag = 0),
          (e.nextEffect = null),
          (e.firstEffect = null),
          (e.lastEffect = null)),
      (e.childExpirationTime = t.childExpirationTime),
      (e.expirationTime = t.expirationTime),
      (e.child = t.child),
      (e.memoizedProps = t.memoizedProps),
      (e.memoizedState = t.memoizedState),
      (e.updateQueue = t.updateQueue),
      ($ = t.dependencies),
      (e.dependencies =
        null === $
          ? null
          : {
              expirationTime: $.expirationTime,
              firstContext: $.firstContext,
              responders: $.responders,
            }),
      (e.sibling = t.sibling),
      (e.index = t.index),
      (e.ref = t.ref),
      e
    );
  }
  function zf(t, $, e, r, i, a) {
    var n = 2;
    if (((r = t), 'function' == typeof t)) Wh(t) && (n = 1);
    else if ('string' == typeof t) n = 5;
    else
      t: switch (t) {
        case dc:
          return $b(e.children, i, a, $);
        case As:
          (n = 8), (i |= 7);
          break;
        case nk:
          (n = 8), (i |= 1);
          break;
        case He:
          return (
            ((t = ub(12, e, $, 8 | i)).elementType = He),
            (t.type = He),
            (t.expirationTime = a),
            t
          );
        case Ie:
          return (
            ((t = ub(13, e, $, i)).type = Ie),
            (t.elementType = Ie),
            (t.expirationTime = a),
            t
          );
        case zg:
          return (
            ((t = ub(19, e, $, i)).elementType = zg), (t.expirationTime = a), t
          );
        default:
          if ('object' == typeof t && null !== t)
            switch (t.$$typeof) {
              case ok:
                n = 10;
                break t;
              case pk:
                n = 9;
                break t;
              case yg:
                n = 11;
                break t;
              case Ag:
                n = 14;
                break t;
              case qk:
                (n = 16), (r = null);
                break t;
              case rk:
                n = 22;
                break t;
            }
          throw Error(Y(130, null == t ? t : typeof t, ''));
      }
    return (
      (($ = ub(n, e, $, i)).elementType = t),
      ($.type = r),
      ($.expirationTime = a),
      $
    );
  }
  function $b(t, $, e, r) {
    return ((t = ub(7, t, r, $)).expirationTime = e), t;
  }
  function Xh(t, $, e) {
    return ((t = ub(6, t, null, $)).expirationTime = e), t;
  }
  function Yh(t, $, e) {
    return (
      (($ = ub(
        4,
        null !== t.children ? t.children : [],
        t.key,
        $
      )).expirationTime = e),
      ($.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      $
    );
  }
  function Tu(t, $, e) {
    (this.tag = $),
      (this.current = null),
      (this.containerInfo = t),
      (this.pingCache = this.pendingChildren = null),
      (this.finishedExpirationTime = 0),
      (this.finishedWork = null),
      (this.timeoutHandle = -1),
      (this.pendingContext = this.context = null),
      (this.hydrate = e),
      (this.callbackNode = null),
      (this.callbackPriority = 90),
      (this.lastExpiredTime =
        this.lastPingedTime =
        this.nextKnownPendingLevel =
        this.lastSuspendedTime =
        this.firstSuspendedTime =
        this.firstPendingTime =
          0);
  }
  function on(t, $) {
    var e = t.firstSuspendedTime;
    return (t = t.lastSuspendedTime), 0 !== e && e >= $ && t <= $;
  }
  function qc(t, $) {
    var e = t.firstSuspendedTime,
      r = t.lastSuspendedTime;
    e < $ && (t.firstSuspendedTime = $),
      (r > $ || 0 === e) && (t.lastSuspendedTime = $),
      $ <= t.lastPingedTime && (t.lastPingedTime = 0),
      $ <= t.lastExpiredTime && (t.lastExpiredTime = 0);
  }
  function pn(t, $) {
    $ > t.firstPendingTime && (t.firstPendingTime = $);
    var e = t.firstSuspendedTime;
    0 !== e &&
      ($ >= e
        ? (t.firstSuspendedTime =
            t.lastSuspendedTime =
            t.nextKnownPendingLevel =
              0)
        : $ >= t.lastSuspendedTime && (t.lastSuspendedTime = $ + 1),
      $ > t.nextKnownPendingLevel && (t.nextKnownPendingLevel = $));
  }
  function Zh(t, $) {
    var e = t.lastExpiredTime;
    (0 === e || e > $) && (t.lastExpiredTime = $);
  }
  function Af(t, $, e, r) {
    var i = $.current,
      a = tb(),
      n = ud.suspense;
    a = lc(a, i, n);
    t: if (e) {
      $: {
        if (hc((e = e._reactInternalFiber)) !== e || 1 !== e.tag)
          throw Error(Y(170));
        var l = e;
        do {
          switch (l.tag) {
            case 3:
              l = l.stateNode.context;
              break $;
            case 1:
              if (Ma(l.type)) {
                l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                break $;
              }
          }
          l = l.return;
        } while (null !== l);
        throw Error(Y(171));
      }
      if (1 === e.tag) {
        var v = e.type;
        if (Ma(v)) {
          e = nm(e, v, l);
          break t;
        }
      }
      e = l;
    } else e = Tb;
    return (
      null === $.context ? ($.context = e) : ($.pendingContext = e),
      (($ = Xb(a, n)).payload = {element: t}),
      null !== (r = void 0 === r ? null : r) && ($.callback = r),
      Yb(i, $),
      Zb(i, a),
      a
    );
  }
  function $h(t) {
    if (!(t = t.current).child) return null;
    switch (t.child.tag) {
      case 5:
      default:
        return t.child.stateNode;
    }
  }
  function qn(t, $) {
    null !== (t = t.memoizedState) &&
      null !== t.dehydrated &&
      t.retryTime < $ &&
      (t.retryTime = $);
  }
  function _h(t, $) {
    qn(t, $), (t = t.alternate) && qn(t, $);
  }
  function ai(t, $, e) {
    var r = new Tu(t, $, (e = null != e && !0 === e.hydrate)),
      i = ub(3, null, null, 2 === $ ? 7 : 1 === $ ? 3 : 0);
    (r.current = i),
      (i.stateNode = r),
      wh(i),
      (t[od] = r.current),
      e && 0 !== $ && ju(t, 9 === t.nodeType ? t : t.ownerDocument),
      (this._internalRoot = r);
  }
  function Kd(t) {
    return !(
      !t ||
      (1 !== t.nodeType &&
        9 !== t.nodeType &&
        11 !== t.nodeType &&
        (8 !== t.nodeType || ' react-mount-point-unstable ' !== t.nodeValue))
    );
  }
  function Uu(t, $) {
    if (
      ($ ||
        ($ = !(
          !($ = t
            ? 9 === t.nodeType
              ? t.documentElement
              : t.firstChild
            : null) ||
          1 !== $.nodeType ||
          !$.hasAttribute('data-reactroot')
        )),
      !$)
    )
      for (var e; (e = t.lastChild); ) t.removeChild(e);
    return new ai(t, 0, $ ? {hydrate: !0} : void 0);
  }
  function Bf(t, $, e, r, i) {
    var a = e._reactRootContainer;
    if (a) {
      var n = a._internalRoot;
      if ('function' == typeof i) {
        var l = i;
        i = function () {
          var t = $h(n);
          l.call(t);
        };
      }
      Af($, n, t, i);
    } else {
      if (
        ((a = e._reactRootContainer = Uu(e, r)),
        (n = a._internalRoot),
        'function' == typeof i)
      ) {
        var v = i;
        i = function () {
          var t = $h(n);
          v.call(t);
        };
      }
      gn(function () {
        Af($, n, t, i);
      });
    }
    return $h(n);
  }
  function Vu(t, $, e) {
    var r =
      3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: Cc,
      key: null == r ? null : '' + r,
      children: t,
      containerInfo: $,
      implementation: e,
    };
  }
  function rn(t, $) {
    var e =
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!Kd($)) throw Error(Y(200));
    return Vu(t, $, null, e);
  }
  function Wu() {
    if (Yt) return;
    Yt = true;
    Ya = {};
    Ce = (Ja(), aa);
    Ea = (eg(), Ob);
    za = (qs(), os);
    if (!Ce) throw Error(Y(227));
    gk = !1;
    rs = null;
    hk = !1;
    ss = null;
    ts = {
      onError: function (t) {
        (gk = !0), (rs = t);
      },
    };
    ik = null;
    us = null;
    vs = null;
    tg = null;
    Ac = {};
    De = [];
    ug = {};
    Bc = {};
    vg = {};
    Rb = !(
      'undefined' == typeof window ||
      void 0 === window.document ||
      void 0 === window.document.createElement
    );
    jk = null;
    Ee = null;
    Fe = null;
    ws = zl;
    wg = !1;
    xs = !1;
    ys =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    kk = Object.prototype.hasOwnProperty;
    lk = {};
    mk = {};
    Aa = {};
    'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
      .split(' ')
      .forEach(function (t) {
        Aa[t] = new Fa(t, 0, !1, t, null, !1);
      }),
      [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
      ].forEach(function (t) {
        var $ = t[0];
        Aa[$] = new Fa($, 1, !1, t[1], null, !1);
      }),
      ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (
        t
      ) {
        Aa[t] = new Fa(t, 2, !1, t.toLowerCase(), null, !1);
      }),
      [
        'autoReverse',
        'externalResourcesRequired',
        'focusable',
        'preserveAlpha',
      ].forEach(function (t) {
        Aa[t] = new Fa(t, 2, !1, t, null, !1);
      }),
      'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (t) {
          Aa[t] = new Fa(t, 3, !1, t.toLowerCase(), null, !1);
        }),
      ['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
        Aa[t] = new Fa(t, 3, !0, t, null, !1);
      }),
      ['capture', 'download'].forEach(function (t) {
        Aa[t] = new Fa(t, 4, !1, t, null, !1);
      }),
      ['cols', 'rows', 'size', 'span'].forEach(function (t) {
        Aa[t] = new Fa(t, 6, !1, t, null, !1);
      }),
      ['rowSpan', 'start'].forEach(function (t) {
        Aa[t] = new Fa(t, 5, !1, t.toLowerCase(), null, !1);
      });
    xg = /[\-:]([a-z])/g;
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
      .split(' ')
      .forEach(function (t) {
        var $ = t.replace(xg, Yg);
        Aa[$] = new Fa($, 1, !1, t, null, !1);
      }),
      'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
        .split(' ')
        .forEach(function (t) {
          var $ = t.replace(xg, Yg);
          Aa[$] = new Fa($, 1, !1, t, 'http://www.w3.org/1999/xlink', !1);
        }),
      ['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
        var $ = t.replace(xg, Yg);
        Aa[$] = new Fa($, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1);
      }),
      ['tabIndex', 'crossOrigin'].forEach(function (t) {
        Aa[t] = new Fa(t, 1, !1, t.toLowerCase(), null, !1);
      }),
      (Aa.xlinkHref = new Fa(
        'xlinkHref',
        1,
        !1,
        'xlink:href',
        'http://www.w3.org/1999/xlink',
        !0
      )),
      ['src', 'href', 'action', 'formAction'].forEach(function (t) {
        Aa[t] = new Fa(t, 1, !1, t.toLowerCase(), null, !0);
      });
    gb = Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    gb.hasOwnProperty('ReactCurrentDispatcher') ||
      (gb.ReactCurrentDispatcher = {current: null}),
      gb.hasOwnProperty('ReactCurrentBatchConfig') ||
        (gb.ReactCurrentBatchConfig = {suspense: null});
    zs = /^(.*)[\\\/]/;
    Ka = 'function' == typeof Symbol && Symbol.for;
    Ge = Ka ? Symbol.for('react.element') : 60103;
    Cc = Ka ? Symbol.for('react.portal') : 60106;
    dc = Ka ? Symbol.for('react.fragment') : 60107;
    nk = Ka ? Symbol.for('react.strict_mode') : 60108;
    He = Ka ? Symbol.for('react.profiler') : 60114;
    ok = Ka ? Symbol.for('react.provider') : 60109;
    pk = Ka ? Symbol.for('react.context') : 60110;
    As = Ka ? Symbol.for('react.concurrent_mode') : 60111;
    yg = Ka ? Symbol.for('react.forward_ref') : 60112;
    Ie = Ka ? Symbol.for('react.suspense') : 60113;
    zg = Ka ? Symbol.for('react.suspense_list') : 60120;
    Ag = Ka ? Symbol.for('react.memo') : 60115;
    qk = Ka ? Symbol.for('react.lazy') : 60116;
    rk = Ka ? Symbol.for('react.block') : 60121;
    sk = 'function' == typeof Symbol && Symbol.iterator;
    tk = {
      html: 'http://www.w3.org/1999/xhtml',
      mathml: 'http://www.w3.org/1998/Math/MathML',
      svg: 'http://www.w3.org/2000/svg',
    };
    vk = (function (t) {
      return 'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
        ? function ($, e, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return t($, e);
            });
          }
        : t;
    })(function (t, $) {
      if (t.namespaceURI !== tk.svg || 'innerHTML' in t) t.innerHTML = $;
      else {
        for (
          (uk = uk || document.createElement('div')).innerHTML =
            '<svg>' + $.valueOf().toString() + '</svg>',
            $ = uk.firstChild;
          t.firstChild;

        )
          t.removeChild(t.firstChild);
        for (; $.firstChild; ) t.appendChild($.firstChild);
      }
    });
    Dc = {
      animationend: $e('Animation', 'AnimationEnd'),
      animationiteration: $e('Animation', 'AnimationIteration'),
      animationstart: $e('Animation', 'AnimationStart'),
      transitionend: $e('Transition', 'TransitionEnd'),
    };
    Bg = {};
    Bs = {};
    Rb &&
      ((Bs = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete Dc.animationend.animation,
        delete Dc.animationiteration.animation,
        delete Dc.animationstart.animation),
      'TransitionEvent' in window || delete Dc.transitionend.transition);
    wk = _e('animationend');
    xk = _e('animationiteration');
    yk = _e('animationstart');
    zk = _e('transitionend');
    gd =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      );
    Ak = new ('function' == typeof WeakMap ? WeakMap : Map)();
    Cg = null;
    Je = [];
    Es = !1;
    ob = [];
    hd = null;
    id = null;
    jd = null;
    kd = new Map();
    ld = new Map();
    md = [];
    Dg =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
    Fs =
      'focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture'.split(
        ' '
      );
    Ck = {};
    Dk = new Map();
    Eg = new Map();
    Gs = [
      'abort',
      'abort',
      wk,
      'animationEnd',
      xk,
      'animationIteration',
      yk,
      'animationStart',
      'canplay',
      'canPlay',
      'canplaythrough',
      'canPlayThrough',
      'durationchange',
      'durationChange',
      'emptied',
      'emptied',
      'encrypted',
      'encrypted',
      'ended',
      'ended',
      'error',
      'error',
      'gotpointercapture',
      'gotPointerCapture',
      'load',
      'load',
      'loadeddata',
      'loadedData',
      'loadedmetadata',
      'loadedMetadata',
      'loadstart',
      'loadStart',
      'lostpointercapture',
      'lostPointerCapture',
      'playing',
      'playing',
      'progress',
      'progress',
      'seeking',
      'seeking',
      'stalled',
      'stalled',
      'suspend',
      'suspend',
      'timeupdate',
      'timeUpdate',
      zk,
      'transitionEnd',
      'waiting',
      'waiting',
    ];
    kh(
      'blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
        ' '
      ),
      0
    ),
      kh(
        'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
          ' '
        ),
        1
      ),
      kh(Gs, 2);
    for (
      var $i17t$var$bd =
          'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
            ' '
          ),
        $i17t$var$cd = 0;
      $i17t$var$cd < $i17t$var$bd.length;
      $i17t$var$cd++
    )
      Eg.set($i17t$var$bd[$i17t$var$cd], 0);
    Hs = za.unstable_UserBlockingPriority;
    Is = za.unstable_runWithPriority;
    Ek = !0;
    nd = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    };
    Js = ['Webkit', 'ms', 'Moz', 'O'];
    Object.keys(nd).forEach(function (t) {
      Js.forEach(function ($) {
        ($ = $ + t.charAt(0).toUpperCase() + t.substring(1)), (nd[$] = nd[t]);
      });
    });
    Ks = Ea(
      {menuitem: !0},
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    Fk = tk.html;
    Gk = '$';
    Hk = '/$';
    Fg = '$?';
    Gg = '$!';
    Ls = null;
    Ms = null;
    Hg = 'function' == typeof setTimeout ? setTimeout : void 0;
    Ns = 'function' == typeof clearTimeout ? clearTimeout : void 0;
    Ig = Math.random().toString(36).slice(2);
    Sb = '__reactInternalInstance$' + Ig;
    Ke = '__reactEventHandlers$' + Ig;
    od = '__reactContainere$' + Ig;
    pd = null;
    Os = null;
    Ik = null;
    Ea(Qa.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : 'unknown' != typeof t.returnValue && (t.returnValue = !1),
          (this.isDefaultPrevented = ef));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : 'unknown' != typeof t.cancelBubble && (t.cancelBubble = !0),
          (this.isPropagationStopped = ef));
      },
      persist: function () {
        this.isPersistent = ef;
      },
      isPersistent: ff,
      destructor: function () {
        var t,
          $ = this.constructor.Interface;
        for (t in $) this[t] = null;
        (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
          (this.isPropagationStopped = this.isDefaultPrevented = ff),
          (this._dispatchInstances = this._dispatchListeners = null);
      },
    }),
      (Qa.Interface = {
        type: null,
        target: null,
        currentTarget: function () {
          return null;
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function (t) {
          return t.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null,
      }),
      (Qa.extend = function (t) {
        function $() {}
        function e() {
          return r.apply(this, arguments);
        }
        var r = this;
        $.prototype = r.prototype;
        var i = new $();
        return (
          Ea(i, e.prototype),
          (e.prototype = i),
          (e.prototype.constructor = e),
          (e.Interface = Ea({}, r.Interface, t)),
          (e.extend = r.extend),
          em(e),
          e
        );
      }),
      em(Qa);
    Ps = Qa.extend({data: null});
    Qs = Qa.extend({data: null});
    Rs = [9, 13, 27, 32];
    Jg = Rb && 'CompositionEvent' in window;
    Le = null;
    Rb && 'documentMode' in document && (Le = document.documentMode);
    Ss = Rb && 'TextEvent' in window && !Le;
    Jk = Rb && (!Jg || (Le && 8 < Le && 11 >= Le));
    Kk = String.fromCharCode(32);
    Bb = {
      beforeInput: {
        phasedRegistrationNames: {
          bubbled: 'onBeforeInput',
          captured: 'onBeforeInputCapture',
        },
        dependencies: ['compositionend', 'keypress', 'textInput', 'paste'],
      },
      compositionEnd: {
        phasedRegistrationNames: {
          bubbled: 'onCompositionEnd',
          captured: 'onCompositionEndCapture',
        },
        dependencies:
          'blur compositionend keydown keypress keyup mousedown'.split(' '),
      },
      compositionStart: {
        phasedRegistrationNames: {
          bubbled: 'onCompositionStart',
          captured: 'onCompositionStartCapture',
        },
        dependencies:
          'blur compositionstart keydown keypress keyup mousedown'.split(' '),
      },
      compositionUpdate: {
        phasedRegistrationNames: {
          bubbled: 'onCompositionUpdate',
          captured: 'onCompositionUpdateCapture',
        },
        dependencies:
          'blur compositionupdate keydown keypress keyup mousedown'.split(' '),
      },
    };
    Ts = !1;
    Me = !1;
    Us = {
      eventTypes: Bb,
      extractEvents: function (t, $, e, r) {
        var i;
        if (Jg)
          t: {
            switch (t) {
              case 'compositionstart':
                var a = Bb.compositionStart;
                break t;
              case 'compositionend':
                a = Bb.compositionEnd;
                break t;
              case 'compositionupdate':
                a = Bb.compositionUpdate;
                break t;
            }
            a = void 0;
          }
        else
          Me
            ? fm(t, e) && (a = Bb.compositionEnd)
            : 'keydown' === t && 229 === e.keyCode && (a = Bb.compositionStart);
        return (
          a
            ? (Jk &&
                'ko' !== e.locale &&
                (Me || a !== Bb.compositionStart
                  ? a === Bb.compositionEnd && Me && (i = dm())
                  : ((Os = 'value' in (pd = r) ? pd.value : pd.textContent),
                    (Me = !0))),
              (a = Ps.getPooled(a, $, e, r)),
              i ? (a.data = i) : null !== (i = gm(e)) && (a.data = i),
              Lc(a),
              (i = a))
            : (i = null),
          (t = Ss ? tu(t, e) : uu(t, e))
            ? ((($ = Qs.getPooled(Bb.beforeInput, $, e, r)).data = t), Lc($))
            : ($ = null),
          null === i ? $ : null === $ ? i : [i, $]
        );
      },
    };
    Vs = {
      color: !0,
      date: !0,
      datetime: !0,
      'datetime-local': !0,
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
    Lk = {
      change: {
        phasedRegistrationNames: {
          bubbled: 'onChange',
          captured: 'onChangeCapture',
        },
        dependencies:
          'blur change click focus input keydown keyup selectionchange'.split(
            ' '
          ),
      },
    };
    Mk = null;
    Kg = null;
    Nk = !1;
    Rb &&
      (Nk =
        Ol('input') && (!document.documentMode || 9 < document.documentMode));
    Ws = {
      eventTypes: Lk,
      _isInputEventSupported: Nk,
      extractEvents: function (t, $, e, r) {
        var i = $ ? ic($) : window,
          a = i.nodeName && i.nodeName.toLowerCase();
        if ('select' === a || ('input' === a && 'file' === i.type)) var n = wu;
        else if (hm(i)) {
          if (Nk) n = Au;
          else {
            n = yu;
            var l = xu;
          }
        } else
          (a = i.nodeName) &&
            'input' === a.toLowerCase() &&
            ('checkbox' === i.type || 'radio' === i.type) &&
            (n = zu);
        if (n && (n = n(t, $))) return im(n, e, r);
        l && l(t, i, $),
          'blur' === t &&
            (t = i._wrapperState) &&
            t.controlled &&
            'number' === i.type &&
            bh(i, 'number', i.value);
      },
    };
    qd = Qa.extend({view: null, detail: null});
    Xs = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
    Ys = 0;
    Zs = 0;
    $s = !1;
    _s = !1;
    rd = qd.extend({
      screenX: null,
      screenY: null,
      clientX: null,
      clientY: null,
      pageX: null,
      pageY: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      getModifierState: th,
      button: null,
      buttons: null,
      relatedTarget: function (t) {
        return (
          t.relatedTarget ||
          (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
        );
      },
      movementX: function (t) {
        if ('movementX' in t) return t.movementX;
        var $ = Ys;
        return (
          (Ys = t.screenX),
          $s ? ('mousemove' === t.type ? t.screenX - $ : 0) : (($s = !0), 0)
        );
      },
      movementY: function (t) {
        if ('movementY' in t) return t.movementY;
        var $ = Zs;
        return (
          (Zs = t.screenY),
          _s ? ('mousemove' === t.type ? t.screenY - $ : 0) : ((_s = !0), 0)
        );
      },
    });
    Ok = rd.extend({
      pointerId: null,
      width: null,
      height: null,
      pressure: null,
      tangentialPressure: null,
      tiltX: null,
      tiltY: null,
      twist: null,
      pointerType: null,
      isPrimary: null,
    });
    sd = {
      mouseEnter: {
        registrationName: 'onMouseEnter',
        dependencies: ['mouseout', 'mouseover'],
      },
      mouseLeave: {
        registrationName: 'onMouseLeave',
        dependencies: ['mouseout', 'mouseover'],
      },
      pointerEnter: {
        registrationName: 'onPointerEnter',
        dependencies: ['pointerout', 'pointerover'],
      },
      pointerLeave: {
        registrationName: 'onPointerLeave',
        dependencies: ['pointerout', 'pointerover'],
      },
    };
    at = {
      eventTypes: sd,
      extractEvents: function (t, $, e, r, i) {
        var a = 'mouseover' === t || 'pointerover' === t,
          n = 'mouseout' === t || 'pointerout' === t;
        if (
          (a && 0 == (32 & i) && (e.relatedTarget || e.fromElement)) ||
          (!n && !a)
        )
          return null;
        ((a =
          r.window === r
            ? r
            : (a = r.ownerDocument)
            ? a.defaultView || a.parentWindow
            : window),
        n)
          ? ((n = $),
            null !==
              ($ = ($ = e.relatedTarget || e.toElement) ? Fd($) : null) &&
              ($ !== hc($) || (5 !== $.tag && 6 !== $.tag)) &&
              ($ = null))
          : (n = null);
        if (n === $) return null;
        if ('mouseout' === t || 'mouseover' === t)
          var l = rd,
            v = sd.mouseLeave,
            o = sd.mouseEnter,
            u = 'mouse';
        else
          ('pointerout' !== t && 'pointerover' !== t) ||
            ((l = Ok),
            (v = sd.pointerLeave),
            (o = sd.pointerEnter),
            (u = 'pointer'));
        if (
          ((t = null == n ? a : ic(n)),
          (a = null == $ ? a : ic($)),
          ((v = l.getPooled(v, n, e, r)).type = u + 'leave'),
          (v.target = t),
          (v.relatedTarget = a),
          ((e = l.getPooled(o, $, e, r)).type = u + 'enter'),
          (e.target = a),
          (e.relatedTarget = t),
          (u = $),
          (r = n) && u)
        )
          t: {
            for (o = u, n = 0, t = l = r; t; t = Fb(t)) n++;
            for (t = 0, $ = o; $; $ = Fb($)) t++;
            for (; 0 < n - t; ) (l = Fb(l)), n--;
            for (; 0 < t - n; ) (o = Fb(o)), t--;
            for (; n--; ) {
              if (l === o || l === o.alternate) break t;
              (l = Fb(l)), (o = Fb(o));
            }
            l = null;
          }
        else l = null;
        for (
          o = l, l = [];
          r && r !== o && (null === (n = r.alternate) || n !== o);

        )
          l.push(r), (r = Fb(r));
        for (r = []; u && u !== o && (null === (n = u.alternate) || n !== o); )
          r.push(u), (u = Fb(u));
        for (u = 0; u < l.length; u++) sh(l[u], 'bubbled', v);
        for (u = r.length; 0 < u--; ) sh(r[u], 'captured', e);
        return 0 == (64 & i) ? [v] : [v, e];
      },
    };
    ec = 'function' == typeof Object.is ? Object.is : Cu;
    bt = Object.prototype.hasOwnProperty;
    ct = Rb && 'documentMode' in document && 11 >= document.documentMode;
    Pk = {
      select: {
        phasedRegistrationNames: {
          bubbled: 'onSelect',
          captured: 'onSelectCapture',
        },
        dependencies:
          'blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange'.split(
            ' '
          ),
      },
    };
    Ne = null;
    dt = null;
    Qk = null;
    et = !1;
    ft = {
      eventTypes: Pk,
      extractEvents: function (t, $, e, r, i, a) {
        if (
          !(a = !(i =
            a ||
            (r.window === r
              ? r.document
              : 9 === r.nodeType
              ? r
              : r.ownerDocument)))
        ) {
          t: {
            (i = fh(i)), (a = vg.onSelect);
            for (var n = 0; n < a.length; n++)
              if (!i.has(a[n])) {
                i = !1;
                break t;
              }
            i = !0;
          }
          a = !i;
        }
        if (a) return null;
        switch (((i = $ ? ic($) : window), t)) {
          case 'focus':
            (hm(i) || 'true' === i.contentEditable) &&
              ((Ne = i), (dt = $), (Qk = null));
            break;
          case 'blur':
            Qk = dt = Ne = null;
            break;
          case 'mousedown':
            et = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            return (et = !1), lm(e, r);
          case 'selectionchange':
            if (ct) break;
          case 'keydown':
          case 'keyup':
            return lm(e, r);
        }
        return null;
      },
    };
    gt = Qa.extend({
      animationName: null,
      elapsedTime: null,
      pseudoElement: null,
    });
    ht = Qa.extend({
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    });
    it = qd.extend({relatedTarget: null});
    jt = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    };
    kt = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    };
    lt = qd.extend({
      key: function (t) {
        if (t.key) {
          var $ = jt[t.key] || t.key;
          if ('Unidentified' !== $) return $;
        }
        return 'keypress' === t.type
          ? 13 === (t = hf(t))
            ? 'Enter'
            : String.fromCharCode(t)
          : 'keydown' === t.type || 'keyup' === t.type
          ? kt[t.keyCode] || 'Unidentified'
          : '';
      },
      location: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      repeat: null,
      locale: null,
      getModifierState: th,
      charCode: function (t) {
        return 'keypress' === t.type ? hf(t) : 0;
      },
      keyCode: function (t) {
        return 'keydown' === t.type || 'keyup' === t.type ? t.keyCode : 0;
      },
      which: function (t) {
        return 'keypress' === t.type
          ? hf(t)
          : 'keydown' === t.type || 'keyup' === t.type
          ? t.keyCode
          : 0;
      },
    });
    mt = rd.extend({dataTransfer: null});
    nt = qd.extend({
      touches: null,
      targetTouches: null,
      changedTouches: null,
      altKey: null,
      metaKey: null,
      ctrlKey: null,
      shiftKey: null,
      getModifierState: th,
    });
    ot = Qa.extend({
      propertyName: null,
      elapsedTime: null,
      pseudoElement: null,
    });
    pt = rd.extend({
      deltaX: function (t) {
        return 'deltaX' in t
          ? t.deltaX
          : 'wheelDeltaX' in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return 'deltaY' in t
          ? t.deltaY
          : 'wheelDeltaY' in t
          ? -t.wheelDeltaY
          : 'wheelDelta' in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: null,
      deltaMode: null,
    });
    qt = {
      eventTypes: Ck,
      extractEvents: function (t, $, e, r) {
        var i = Dk.get(t);
        if (!i) return null;
        switch (t) {
          case 'keypress':
            if (0 === hf(e)) return null;
          case 'keydown':
          case 'keyup':
            t = lt;
            break;
          case 'blur':
          case 'focus':
            t = it;
            break;
          case 'click':
            if (2 === e.button) return null;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            t = rd;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            t = mt;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            t = nt;
            break;
          case wk:
          case xk:
          case yk:
            t = gt;
            break;
          case zk:
            t = ot;
            break;
          case 'scroll':
            t = qd;
            break;
          case 'wheel':
            t = pt;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            t = ht;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            t = Ok;
            break;
          default:
            t = Qa;
        }
        return Lc(($ = t.getPooled(i, $, e, r))), $;
      },
    };
    if (tg) throw Error(Y(101));
    (tg = Array.prototype.slice.call(
      'ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin'.split(
        ' '
      )
    )),
      tl();
    rt = Gd;
    (ik = rh),
      (us = rt),
      (vs = ic),
      vl({
        SimpleEventPlugin: qt,
        EnterLeaveEventPlugin: at,
        ChangeEventPlugin: Ws,
        SelectEventPlugin: ft,
        BeforeInputEventPlugin: Us,
      });
    Lg = [];
    td = -1;
    Tb = {};
    Ca = {current: Tb};
    La = {current: !1};
    Ec = Tb;
    st = za.unstable_runWithPriority;
    Mg = za.unstable_scheduleCallback;
    Rk = za.unstable_cancelCallback;
    Sk = za.unstable_requestPaint;
    Ng = za.unstable_now;
    tt = za.unstable_getCurrentPriorityLevel;
    Oe = za.unstable_ImmediatePriority;
    Tk = za.unstable_UserBlockingPriority;
    Uk = za.unstable_NormalPriority;
    Vk = za.unstable_LowPriority;
    Wk = za.unstable_IdlePriority;
    Xk = {};
    ut = za.unstable_shouldYield;
    vt = void 0 !== Sk ? Sk : function () {};
    Fc = null;
    Yk = null;
    wt = !1;
    Zk = Ng();
    Za =
      1e4 > Zk
        ? Ng
        : function () {
            return Ng() - Zk;
          };
    Pe = {current: null};
    $k = null;
    _k = null;
    xt = null;
    Qe = !1;
    ud = gb.ReactCurrentBatchConfig;
    al = new Ce.Component().refs;
    Re = {
      isMounted: function (t) {
        return !!(t = t._reactInternalFiber) && hc(t) === t;
      },
      enqueueSetState: function (t, $, e) {
        t = t._reactInternalFiber;
        var r = tb(),
          i = ud.suspense;
        ((i = Xb((r = lc(r, t, i)), i)).payload = $),
          null != e && (i.callback = e),
          Yb(t, i),
          Zb(t, r);
      },
      enqueueReplaceState: function (t, $, e) {
        t = t._reactInternalFiber;
        var r = tb(),
          i = ud.suspense;
        ((i = Xb((r = lc(r, t, i)), i)).tag = 1),
          (i.payload = $),
          null != e && (i.callback = e),
          Yb(t, i),
          Zb(t, r);
      },
      enqueueForceUpdate: function (t, $) {
        t = t._reactInternalFiber;
        var e = tb(),
          r = ud.suspense;
        ((r = Xb((e = lc(e, t, r)), r)).tag = 2),
          null != $ && (r.callback = $),
          Yb(t, r),
          Zb(t, e);
      },
    };
    Se = Array.isArray;
    Gc = zm(!0);
    Og = zm(!1);
    vd = {};
    pb = {current: vd};
    wd = {current: vd};
    xd = {current: vd};
    ta = {current: 0};
    Te = gb.ReactCurrentDispatcher;
    $a = gb.ReactCurrentBatchConfig;
    yd = 0;
    Da = null;
    qb = null;
    Ub = null;
    yt = !1;
    Ue = {
      readContext: cb,
      useCallback: Ra,
      useContext: Ra,
      useEffect: Ra,
      useImperativeHandle: Ra,
      useLayoutEffect: Ra,
      useMemo: Ra,
      useReducer: Ra,
      useRef: Ra,
      useState: Ra,
      useDebugValue: Ra,
      useResponder: Ra,
      useDeferredValue: Ra,
      useTransition: Ra,
    };
    zt = {
      readContext: cb,
      useCallback: Gm,
      useContext: cb,
      useEffect: Cm,
      useImperativeHandle: function (t, $, e) {
        return (
          (e = null != e ? e.concat([t]) : null),
          Gh(4, 2, Em.bind(null, $, t), e)
        );
      },
      useLayoutEffect: function (t, $) {
        return Gh(4, 2, t, $);
      },
      useMemo: function (t, $) {
        var e = Pc();
        return (
          ($ = void 0 === $ ? null : $),
          (t = t()),
          (e.memoizedState = [t, $]),
          t
        );
      },
      useReducer: function (t, $, e) {
        var r = Pc();
        return (
          ($ = void 0 !== e ? e($) : $),
          (r.memoizedState = r.baseState = $),
          (t = (t = r.queue =
            {
              pending: null,
              dispatch: null,
              lastRenderedReducer: t,
              lastRenderedState: $,
            }).dispatch =
            Im.bind(null, Da, t)),
          [r.memoizedState, t]
        );
      },
      useRef: function (t) {
        return (t = {current: t}), (Pc().memoizedState = t);
      },
      useState: Eh,
      useDebugValue: Ih,
      useResponder: Bh,
      useDeferredValue: function (t, $) {
        var e = Eh(t),
          r = e[0],
          i = e[1];
        return (
          Cm(
            function () {
              var e = $a.suspense;
              $a.suspense = void 0 === $ ? null : $;
              try {
                i(t);
              } finally {
                $a.suspense = e;
              }
            },
            [t, $]
          ),
          r
        );
      },
      useTransition: function (t) {
        var $ = Eh(!1),
          e = $[0];
        return ($ = $[1]), [Gm(Jh.bind(null, $, t), [$, t]), e];
      },
    };
    At = {
      readContext: cb,
      useCallback: tf,
      useContext: cb,
      useEffect: sf,
      useImperativeHandle: Fm,
      useLayoutEffect: Dm,
      useMemo: Hm,
      useReducer: qf,
      useRef: Bm,
      useState: function () {
        return qf(kc);
      },
      useDebugValue: Ih,
      useResponder: Bh,
      useDeferredValue: function (t, $) {
        var e = qf(kc),
          r = e[0],
          i = e[1];
        return (
          sf(
            function () {
              var e = $a.suspense;
              $a.suspense = void 0 === $ ? null : $;
              try {
                i(t);
              } finally {
                $a.suspense = e;
              }
            },
            [t, $]
          ),
          r
        );
      },
      useTransition: function (t) {
        var $ = qf(kc),
          e = $[0];
        return ($ = $[1]), [tf(Jh.bind(null, $, t), [$, t]), e];
      },
    };
    Bt = {
      readContext: cb,
      useCallback: tf,
      useContext: cb,
      useEffect: sf,
      useImperativeHandle: Fm,
      useLayoutEffect: Dm,
      useMemo: Hm,
      useReducer: rf,
      useRef: Bm,
      useState: function () {
        return rf(kc);
      },
      useDebugValue: Ih,
      useResponder: Bh,
      useDeferredValue: function (t, $) {
        var e = rf(kc),
          r = e[0],
          i = e[1];
        return (
          sf(
            function () {
              var e = $a.suspense;
              $a.suspense = void 0 === $ ? null : $;
              try {
                i(t);
              } finally {
                $a.suspense = e;
              }
            },
            [t, $]
          ),
          r
        );
      },
      useTransition: function (t) {
        var $ = rf(kc),
          e = $[0];
        return ($ = $[1]), [tf(Jh.bind(null, $, t), [$, t]), e];
      },
    };
    Pg = null;
    bl = null;
    cl = !1;
    Ct = gb.ReactCurrentOwner;
    dl = !1;
    Qg = {dehydrated: null, retryTime: 0};
    (Dt = function (t, $) {
      for (var e = $.child; null !== e; ) {
        if (5 === e.tag || 6 === e.tag) t.appendChild(e.stateNode);
        else if (4 !== e.tag && null !== e.child) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === $) break;
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === $) return;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }),
      (el = function () {}),
      (Et = function (t, $, e, r, i) {
        var a = t.memoizedProps;
        if (a !== r) {
          var n,
            l,
            v = $.stateNode;
          switch ((jc(pb.current), (t = null), e)) {
            case 'input':
              (a = _g(v, a)), (r = _g(v, r)), (t = []);
              break;
            case 'option':
              (a = ch(v, a)), (r = ch(v, r)), (t = []);
              break;
            case 'select':
              (a = Ea({}, a, {value: void 0})),
                (r = Ea({}, r, {value: void 0})),
                (t = []);
              break;
            case 'textarea':
              (a = dh(v, a)), (r = dh(v, r)), (t = []);
              break;
            default:
              'function' != typeof a.onClick &&
                'function' == typeof r.onClick &&
                (v.onclick = df);
          }
          for (n in (mh(e, r), (e = null), a))
            if (!r.hasOwnProperty(n) && a.hasOwnProperty(n) && null != a[n])
              if ('style' === n)
                for (l in (v = a[n]))
                  v.hasOwnProperty(l) && (e || (e = {}), (e[l] = ''));
              else
                'dangerouslySetInnerHTML' !== n &&
                  'children' !== n &&
                  'suppressContentEditableWarning' !== n &&
                  'suppressHydrationWarning' !== n &&
                  'autoFocus' !== n &&
                  (Bc.hasOwnProperty(n)
                    ? t || (t = [])
                    : (t = t || []).push(n, null));
          for (n in r) {
            var o = r[n];
            if (
              ((v = null != a ? a[n] : void 0),
              r.hasOwnProperty(n) && o !== v && (null != o || null != v))
            )
              if ('style' === n) {
                if (v) {
                  for (l in v)
                    !v.hasOwnProperty(l) ||
                      (o && o.hasOwnProperty(l)) ||
                      (e || (e = {}), (e[l] = ''));
                  for (l in o)
                    o.hasOwnProperty(l) &&
                      v[l] !== o[l] &&
                      (e || (e = {}), (e[l] = o[l]));
                } else e || (t || (t = []), t.push(n, e)), (e = o);
              } else
                'dangerouslySetInnerHTML' === n
                  ? ((o = o ? o.__html : void 0),
                    (v = v ? v.__html : void 0),
                    null != o && v !== o && (t = t || []).push(n, o))
                  : 'children' === n
                  ? v === o ||
                    ('string' != typeof o && 'number' != typeof o) ||
                    (t = t || []).push(n, '' + o)
                  : 'suppressContentEditableWarning' !== n &&
                    'suppressHydrationWarning' !== n &&
                    (Bc.hasOwnProperty(n)
                      ? (null != o && Eb(i, n), t || v === o || (t = []))
                      : (t = t || []).push(n, o));
          }
          e && (t = t || []).push('style', e),
            (i = t),
            ($.updateQueue = i) && ($.effectTag |= 4);
        }
      }),
      (Ft = function (t, $, e, r) {
        e !== r && ($.effectTag |= 4);
      });
    Gt = 'function' == typeof WeakSet ? WeakSet : Set;
    Ht = 'function' == typeof WeakMap ? WeakMap : Map;
    Jt = Math.ceil;
    Ve = gb.ReactCurrentDispatcher;
    fl = gb.ReactCurrentOwner;
    va = 0;
    Rg = 8;
    hb = 16;
    rb = 32;
    fc = 0;
    We = 1;
    gl = 2;
    Xe = 3;
    Ye = 4;
    Sg = 5;
    ra = va;
    Cb = null;
    ga = null;
    ab = 0;
    bb = fc;
    hl = null;
    gc = 1073741823;
    Tg = 1073741823;
    il = null;
    Ug = 0;
    jl = !1;
    kl = 0;
    ll = 500;
    ca = null;
    ml = !1;
    Kt = null;
    Hc = null;
    nl = !1;
    Vg = null;
    Wg = 90;
    zd = null;
    ol = 0;
    Lt = null;
    pl = 0;
    It = function (t, $, e) {
      var r = $.expirationTime;
      if (null !== t) {
        var i = $.pendingProps;
        if (t.memoizedProps !== i || La.current) dl = !0;
        else {
          if (r < e) {
            switch (((dl = !1), $.tag)) {
              case 3:
                Rm($), Lh();
                break;
              case 5:
                if ((Am($), 4 & $.mode && 1 !== e && i.hidden))
                  return ($.expirationTime = $.childExpirationTime = 1), null;
                break;
              case 1:
                Ma($.type) && kf($);
                break;
              case 4:
                zh($, $.stateNode.containerInfo);
                break;
              case 10:
                (r = $.memoizedProps.value),
                  (i = $.type._context),
                  ua(Pe, i._currentValue),
                  (i._currentValue = r);
                break;
              case 13:
                if (null !== $.memoizedState)
                  return 0 !== (r = $.child.childExpirationTime) && r >= e
                    ? Sm(t, $, e)
                    : (ua(ta, 1 & ta.current),
                      null !== ($ = Gb(t, $, e)) ? $.sibling : null);
                ua(ta, 1 & ta.current);
                break;
              case 19:
                if (
                  ((r = $.childExpirationTime >= e), 0 != (64 & t.effectTag))
                ) {
                  if (r) return Um(t, $, e);
                  $.effectTag |= 64;
                }
                if (
                  (null !== (i = $.memoizedState) &&
                    ((i.rendering = null), (i.tail = null)),
                  ua(ta, ta.current),
                  !r)
                )
                  return null;
            }
            return Gb(t, $, e);
          }
          dl = !1;
        }
      } else dl = !1;
      switch ((($.expirationTime = 0), $.tag)) {
        case 2:
          if (
            ((r = $.type),
            null !== t &&
              ((t.alternate = null), ($.alternate = null), ($.effectTag |= 2)),
            (t = $.pendingProps),
            (i = Mc($, Ca.current)),
            Nc($, e),
            (i = Dh(null, $, r, t, i, e)),
            ($.effectTag |= 1),
            'object' == typeof i &&
              null !== i &&
              'function' == typeof i.render &&
              void 0 === i.$$typeof)
          ) {
            if (
              (($.tag = 1),
              ($.memoizedState = null),
              ($.updateQueue = null),
              Ma(r))
            ) {
              var a = !0;
              kf($);
            } else a = !1;
            ($.memoizedState =
              null !== i.state && void 0 !== i.state ? i.state : null),
              wh($);
            var n = r.getDerivedStateFromProps;
            'function' == typeof n && nf($, r, n, t),
              (i.updater = Re),
              ($.stateNode = i),
              (i._reactInternalFiber = $),
              yh($, r, t, e),
              ($ = Nh(null, $, r, !0, a, e));
          } else ($.tag = 0), db(null, $, i, e), ($ = $.child);
          return $;
        case 16:
          t: {
            if (
              ((i = $.elementType),
              null !== t &&
                ((t.alternate = null),
                ($.alternate = null),
                ($.effectTag |= 2)),
              (t = $.pendingProps),
              eu(i),
              1 !== i._status)
            )
              throw i._result;
            switch (
              ((i = i._result),
              ($.type = i),
              (a = $.tag = Su(i)),
              (t = ib(i, t)),
              a)
            ) {
              case 0:
                $ = Mh(null, $, i, t, e);
                break t;
              case 1:
                $ = Qm(null, $, i, t, e);
                break t;
              case 11:
                $ = Mm(null, $, i, t, e);
                break t;
              case 14:
                $ = Nm(null, $, i, ib(i.type, t), r, e);
                break t;
            }
            throw Error(Y(306, i, ''));
          }
          return $;
        case 0:
          return (
            (r = $.type),
            (i = $.pendingProps),
            Mh(t, $, r, (i = $.elementType === r ? i : ib(r, i)), e)
          );
        case 1:
          return (
            (r = $.type),
            (i = $.pendingProps),
            Qm(t, $, r, (i = $.elementType === r ? i : ib(r, i)), e)
          );
        case 3:
          if ((Rm($), (r = $.updateQueue), null === t || null === r))
            throw Error(Y(282));
          if (
            ((r = $.pendingProps),
            (i = null !== (i = $.memoizedState) ? i.element : null),
            xh(t, $),
            Id($, r, null, e),
            (r = $.memoizedState.element) === i)
          )
            Lh(), ($ = Gb(t, $, e));
          else {
            if (
              ((i = $.stateNode.hydrate) &&
                ((bl = Kc($.stateNode.containerInfo.firstChild)),
                (Pg = $),
                (i = cl = !0)),
              i)
            )
              for (e = Og($, null, r, e), $.child = e; e; )
                (e.effectTag = (-3 & e.effectTag) | 1024), (e = e.sibling);
            else db(t, $, r, e), Lh();
            $ = $.child;
          }
          return $;
        case 5:
          return (
            Am($),
            null === t && Kh($),
            (r = $.type),
            (i = $.pendingProps),
            (a = null !== t ? t.memoizedProps : null),
            (n = i.children),
            qh(r, i)
              ? (n = null)
              : null !== a && qh(r, a) && ($.effectTag |= 16),
            Pm(t, $),
            4 & $.mode && 1 !== e && i.hidden
              ? (($.expirationTime = $.childExpirationTime = 1), ($ = null))
              : (db(t, $, n, e), ($ = $.child)),
            $
          );
        case 6:
          return null === t && Kh($), null;
        case 13:
          return Sm(t, $, e);
        case 4:
          return (
            zh($, $.stateNode.containerInfo),
            (r = $.pendingProps),
            null === t ? ($.child = Gc($, null, r, e)) : db(t, $, r, e),
            $.child
          );
        case 11:
          return (
            (r = $.type),
            (i = $.pendingProps),
            Mm(t, $, r, (i = $.elementType === r ? i : ib(r, i)), e)
          );
        case 7:
          return db(t, $, $.pendingProps, e), $.child;
        case 8:
        case 12:
          return db(t, $, $.pendingProps.children, e), $.child;
        case 10:
          t: {
            (r = $.type._context),
              (i = $.pendingProps),
              (n = $.memoizedProps),
              (a = i.value);
            var l = $.type._context;
            if ((ua(Pe, l._currentValue), (l._currentValue = a), null !== n))
              if (
                ((l = n.value),
                0 ===
                  (a = ec(l, a)
                    ? 0
                    : 0 |
                      ('function' == typeof r._calculateChangedBits
                        ? r._calculateChangedBits(l, a)
                        : 1073741823)))
              ) {
                if (n.children === i.children && !La.current) {
                  $ = Gb(t, $, e);
                  break t;
                }
              } else
                for (null !== (l = $.child) && (l.return = $); null !== l; ) {
                  var v = l.dependencies;
                  if (null !== v) {
                    n = l.child;
                    for (var o = v.firstContext; null !== o; ) {
                      if (o.context === r && 0 != (o.observedBits & a)) {
                        1 === l.tag && (((o = Xb(e, null)).tag = 2), Yb(l, o)),
                          l.expirationTime < e && (l.expirationTime = e),
                          null !== (o = l.alternate) &&
                            o.expirationTime < e &&
                            (o.expirationTime = e),
                          tm(l.return, e),
                          v.expirationTime < e && (v.expirationTime = e);
                        break;
                      }
                      o = o.next;
                    }
                  } else n = 10 === l.tag && l.type === $.type ? null : l.child;
                  if (null !== n) n.return = l;
                  else
                    for (n = l; null !== n; ) {
                      if (n === $) {
                        n = null;
                        break;
                      }
                      if (null !== (l = n.sibling)) {
                        (l.return = n.return), (n = l);
                        break;
                      }
                      n = n.return;
                    }
                  l = n;
                }
            db(t, $, i.children, e), ($ = $.child);
          }
          return $;
        case 9:
          return (
            (i = $.type),
            (r = (a = $.pendingProps).children),
            Nc($, e),
            (r = r((i = cb(i, a.unstable_observedBits)))),
            ($.effectTag |= 1),
            db(t, $, r, e),
            $.child
          );
        case 14:
          return (
            (a = ib((i = $.type), $.pendingProps)),
            Nm(t, $, i, (a = ib(i.type, a)), r, e)
          );
        case 15:
          return Om(t, $, $.type, $.pendingProps, r, e);
        case 17:
          return (
            (r = $.type),
            (i = $.pendingProps),
            (i = $.elementType === r ? i : ib(r, i)),
            null !== t &&
              ((t.alternate = null), ($.alternate = null), ($.effectTag |= 2)),
            ($.tag = 1),
            Ma(r) ? ((t = !0), kf($)) : (t = !1),
            Nc($, e),
            xm($, r, i),
            yh($, r, i, e),
            Nh(null, $, r, !0, t, e)
          );
        case 19:
          return Um(t, $, e);
      }
      throw Error(Y(156, $.tag));
    };
    ql = null;
    rl = null;
    (ai.prototype.render = function (t) {
      Af(t, this._internalRoot, null, null);
    }),
      (ai.prototype.unmount = function () {
        var t = this._internalRoot,
          $ = t.containerInfo;
        Af(null, t, null, function () {
          $[od] = null;
        });
      }),
      (Cs = function (t) {
        if (13 === t.tag) {
          var $ = mf(tb(), 150, 100);
          Zb(t, $), _h(t, $);
        }
      }),
      (Bk = function (t) {
        13 === t.tag && (Zb(t, 3), _h(t, 3));
      }),
      (Ds = function (t) {
        if (13 === t.tag) {
          var $ = tb();
          Zb(t, ($ = lc($, t, null))), _h(t, $);
        }
      }),
      (jk = function (t, $, e) {
        switch ($) {
          case 'input':
            if ((ah(t, e), ($ = e.name), 'radio' === e.type && null != $)) {
              for (e = t; e.parentNode; ) e = e.parentNode;
              for (
                e = e.querySelectorAll(
                  'input[name=' + JSON.stringify('' + $) + '][type="radio"]'
                ),
                  $ = 0;
                $ < e.length;
                $++
              ) {
                var r = e[$];
                if (r !== t && r.form === t.form) {
                  var i = rh(r);
                  if (!i) throw Error(Y(90));
                  Dl(r), ah(r, i);
                }
              }
            }
            break;
          case 'textarea':
            Il(t, e);
            break;
          case 'select':
            null != ($ = e.value) && Ic(t, !!e.multiple, $, !1);
        }
      }),
      (zl = fn),
      (au = function (t, $, e, r, i) {
        var a = ra;
        ra |= 4;
        try {
          return Wb(98, t.bind(null, $, e, r, i));
        } finally {
          (ra = a) === va && sb();
        }
      }),
      (Al = function () {
        (ra & (1 | hb | rb)) === va && (Iu(), Rc());
      }),
      (ws = function (t, $) {
        var e = ra;
        ra |= 2;
        try {
          return t($);
        } finally {
          (ra = e) === va && sb();
        }
      });
    Mt = {
      Events: [
        Gd,
        ic,
        rh,
        vl,
        ug,
        Lc,
        function (t) {
          gh(t, qu);
        },
        xl,
        yl,
        cf,
        af,
        Rc,
        {current: !1},
      ],
    };
    !(function (t) {
      var $ = t.findFiberByHostInstance;
      Qu(
        Ea({}, t, {
          overrideHookState: null,
          overrideProps: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: gb.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (t) {
            return null === (t = Nl(t)) ? null : t.stateNode;
          },
          findFiberByHostInstance: function (t) {
            return $ ? $(t) : null;
          },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        })
      );
    })({
      findFiberByHostInstance: Fd,
      bundleType: 0,
      version: '16.13.1',
      rendererPackageName: 'react-dom',
    });
    Nt = Mt;
    Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nt;
    Ot = rn;
    Ya.createPortal = Ot;
    Pt = function (t) {
      if (null == t) return null;
      if (1 === t.nodeType) return t;
      var $ = t._reactInternalFiber;
      if (void 0 === $) {
        if ('function' == typeof t.render) throw Error(Y(188));
        throw Error(Y(268, Object.keys(t)));
      }
      return (t = null === (t = Nl($)) ? null : t.stateNode);
    };
    Ya.findDOMNode = Pt;
    Qt = function (t, $) {
      if ((ra & (hb | rb)) !== va) throw Error(Y(187));
      var e = ra;
      ra |= 1;
      try {
        return Wb(99, t.bind(null, $));
      } finally {
        (ra = e), sb();
      }
    };
    Ya.flushSync = Qt;
    Rt = function (t, $, e) {
      if (!Kd($)) throw Error(Y(200));
      return Bf(null, t, $, !0, e);
    };
    Ya.hydrate = Rt;
    St = function (t, $, e) {
      if (!Kd($)) throw Error(Y(200));
      return Bf(null, t, $, !1, e);
    };
    Ya.render = St;
    Tt = function (t) {
      if (!Kd(t)) throw Error(Y(40));
      return (
        !!t._reactRootContainer &&
        (gn(function () {
          Bf(null, null, t, !1, function () {
            (t._reactRootContainer = null), (t[od] = null);
          });
        }),
        !0)
      );
    };
    Ya.unmountComponentAtNode = Tt;
    Ut = fn;
    Ya.unstable_batchedUpdates = Ut;
    Vt = function (t, $) {
      return rn(
        t,
        $,
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
      );
    };
    Ya.unstable_createPortal = Vt;
    Wt = function (t, $, e, r) {
      if (!Kd(e)) throw Error(Y(200));
      if (null == t || void 0 === t._reactInternalFiber) throw Error(Y(38));
      return Bf(t, $, e, !1, r);
    };
    Ya.unstable_renderSubtreeIntoContainer = Wt;
    Xt = '16.13.1';
    Ya.version = Xt;
  }
  _j(), (Tr = (Wu(), Ya));
  var bi = {};
  var Xu,
    Yu = false;
  var Zu = function (t, e) {
    return (Zu =
      Object.setPrototypeOf ||
      ({__proto__: []} instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  };
  function Hb(t, e) {
    function r() {
      this.constructor = t;
    }
    Zu(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
  }
  var ba = function () {
    return (
      (ba =
        Object.assign ||
        function (t) {
          for (var e, r = 1, o = arguments.length; r < o; r++)
            for (var n in (e = arguments[r]))
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t;
        }),
      ba.apply(this, arguments)
    );
  };
  function wa(t, e) {
    var r = {};
    for (var o in t)
      Object.prototype.hasOwnProperty.call(t, o) &&
        e.indexOf(o) < 0 &&
        (r[o] = t[o]);
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var n = 0;
      for (o = Object.getOwnPropertySymbols(t); n < o.length; n++)
        e.indexOf(o[n]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, o[n]) &&
          (r[o[n]] = t[o[n]]);
    }
    return r;
  }
  function Sc() {
    for (var t = 0, e = 0, r = arguments.length; e < r; e++)
      t += arguments[e].length;
    var o = Array(t),
      n = 0;
    for (e = 0; e < r; e++)
      for (var a = arguments[e], $ = 0, i = a.length; $ < i; $++, n++)
        o[n] = a[$];
    return o;
  }
  function sn(t) {
    return this instanceof sn ? ((this.v = t), this) : new sn(t);
  }
  var Tc, Uc;
  var $u = function () {},
    Na = function () {};
  function ci() {
    throw new Error('setTimeout has not been defined');
  }
  function di() {
    throw new Error('clearTimeout has not been defined');
  }
  function _u($) {
    if (Tc === setTimeout) return setTimeout($, 0);
    if ((Tc === ci || !Tc) && setTimeout)
      return (Tc = setTimeout), setTimeout($, 0);
    try {
      return Tc($, 0);
    } catch (e) {
      try {
        return Tc.call(null, $, 0);
      } catch (e) {
        return Tc.call(this, $, 0);
      }
    }
  }
  function av($) {
    if (Uc === clearTimeout) return clearTimeout($);
    if ((Uc === di || !Uc) && clearTimeout)
      return (Uc = clearTimeout), clearTimeout($);
    try {
      return Uc($);
    } catch (e) {
      try {
        return Uc.call(null, $);
      } catch (e) {
        return Uc.call(this, $);
      }
    }
  }
  !(function () {
    try {
      Tc = 'function' == typeof setTimeout ? setTimeout : ci;
    } catch ($) {
      Tc = ci;
    }
    try {
      Uc = 'function' == typeof clearTimeout ? clearTimeout : di;
    } catch ($) {
      Uc = di;
    }
  })();
  var Ld,
    Md = [],
    tn = !1,
    un = -1;
  function bv() {
    tn &&
      Ld &&
      ((tn = !1),
      Ld.length ? (Md = Ld.concat(Md)) : (un = -1),
      Md.length && cv());
  }
  function cv() {
    if (!tn) {
      var $ = _u(bv);
      tn = !0;
      for (var e = Md.length; e; ) {
        for (Ld = Md, Md = []; ++un < e; ) Ld && Ld[un].run();
        (un = -1), (e = Md.length);
      }
      (Ld = null), (tn = !1), av($);
    }
  }
  function dv($, e) {
    (this.fun = $), (this.array = e);
  }
  dv.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  var Nd,
    vn = 0,
    wn =
      'undefined' != typeof window && void 0 !== window.requestAnimationFrame
        ? function ($) {
            return window.requestAnimationFrame($);
          }
        : function ($) {
            var e = Date.now(),
              a = Math.max(0, 16.7 - (e - vn));
            (vn = e + a),
              setTimeout(function () {
                return $(vn);
              }, a);
          },
    ev = function ($) {
      var e = [],
        a = [],
        r = 0,
        t = !1,
        n = 0,
        S = new WeakSet(),
        s = new WeakSet(),
        I = {
          cancel: function ($) {
            var e = a.indexOf($);
            S.add($), -1 !== e && a.splice(e, 1);
          },
          process: function (v) {
            var b, Z;
            if (
              ((t = !0),
              (e = (b = [a, e])[0]),
              ((a = b[1]).length = 0),
              (r = e.length))
            )
              for (n = 0; n < r; n++)
                (Z = e[n])(v),
                  !0 !== s.has(Z) || S.has(Z) || (I.schedule(Z), $(!0));
            t = !1;
          },
          schedule: function ($, n, I) {
            void 0 === n && (n = !1),
              void 0 === I && (I = !1),
              Na('function' == typeof $, 'Argument must be a function');
            var v = I && t,
              b = v ? e : a;
            S.delete($),
              n && s.add($),
              -1 === b.indexOf($) && (b.push($), v && (r = e.length));
          },
        };
      return I;
    };
  !(function ($) {
    ($.Read = 'read'),
      ($.Update = 'update'),
      ($.Render = 'render'),
      ($.PostRender = 'postRender'),
      ($.FixedUpdate = 'fixedUpdate');
  })(Nd || (Nd = {}));
  var fv = 40,
    gv = (1 / 60) * 1e3,
    xn = !0,
    yn = !1,
    hv = !1,
    Vc = {delta: 0, timestamp: 0},
    zn = [Nd.Read, Nd.Update, Nd.Render, Nd.PostRender],
    iv = function ($) {
      return (yn = $);
    },
    ei = zn.reduce(
      function ($, e) {
        var a = ev(iv);
        return (
          ($.sync[e] = function ($, e, r) {
            return (
              void 0 === e && (e = !1),
              void 0 === r && (r = !1),
              yn || lv(),
              a.schedule($, e, r),
              $
            );
          }),
          ($.cancelSync[e] = function ($) {
            return a.cancel($);
          }),
          ($.steps[e] = a),
          $
        );
      },
      {steps: {}, sync: {}, cancelSync: {}}
    ),
    jv = ei.steps,
    Ga = ei.sync,
    jb = ei.cancelSync,
    kv = function ($) {
      return jv[$].process(Vc);
    },
    An = function ($) {
      (yn = !1),
        (Vc.delta = xn ? gv : Math.max(Math.min($ - Vc.timestamp, fv), 1)),
        xn || (gv = Vc.delta),
        (Vc.timestamp = $),
        (hv = !0),
        zn.forEach(kv),
        (hv = !1),
        yn && ((xn = !1), wn(An));
    },
    lv = function () {
      (yn = !0), (xn = !0), hv || wn(An);
    },
    Od = function () {
      return Vc;
    };
  var vb = function () {
      return (vb =
        Object.assign ||
        function (r) {
          for (var $, o = 1, e = arguments.length; o < e; o++)
            for (var t in ($ = arguments[o]))
              Object.prototype.hasOwnProperty.call($, t) && (r[t] = $[t]);
          return r;
        }).apply(this, arguments);
    },
    Bn = function (r, $) {
      return function (o) {
        return Math.max(Math.min(o, $), r);
      };
    },
    Pd = function (r) {
      return r % 1 ? Number(r.toFixed(5)) : r;
    },
    fi = /(-)?(\d[\d\.]*)/g,
    Cf =
      /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    Cn =
      /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i,
    ka = {
      test: function (r) {
        return 'number' == typeof r;
      },
      parse: parseFloat,
      transform: function (r) {
        return r;
      },
    },
    Qd = vb(vb({}, ka), {transform: Bn(0, 1)}),
    Df = vb(vb({}, ka), {default: 1}),
    Rd = function (r) {
      return {
        test: function ($) {
          return (
            'string' == typeof $ && $.endsWith(r) && 1 === $.split(' ').length
          );
        },
        parse: parseFloat,
        transform: function ($) {
          return '' + $ + r;
        },
      };
    },
    Ib = Rd('deg'),
    rc = Rd('%'),
    da = Rd('px'),
    Dn = Rd('vh'),
    En = Rd('vw'),
    Fn = vb(vb({}, rc), {
      parse: function (r) {
        return rc.parse(r) / 100;
      },
      transform: function (r) {
        return rc.transform(100 * r);
      },
    }),
    mv = function (r) {
      return r.substring(r.indexOf('(') + 1, r.lastIndexOf(')'));
    },
    nv = Bn(0, 255),
    gi = function (r) {
      return void 0 !== r.red;
    },
    hi = function (r) {
      return void 0 !== r.hue;
    },
    Gn = function (r) {
      return function ($) {
        if ('string' != typeof $) return $;
        for (var o = {}, e = mv($).split(/,\s*/), t = 0; t < 4; t++)
          o[r[t]] = void 0 !== e[t] ? parseFloat(e[t]) : 1;
        return o;
      };
    },
    ov = function (r) {
      var $ = r.red,
        o = r.green,
        e = r.blue,
        t = r.alpha;
      return (
        'rgba(' + $ + ', ' + o + ', ' + e + ', ' + (void 0 === t ? 1 : t) + ')'
      );
    },
    pv = function (r) {
      var $ = r.hue,
        o = r.saturation,
        e = r.lightness,
        t = r.alpha;
      return (
        'hsla(' + $ + ', ' + o + ', ' + e + ', ' + (void 0 === t ? 1 : t) + ')'
      );
    },
    ii = vb(vb({}, ka), {
      transform: function (r) {
        return Math.round(nv(r));
      },
    });
  function ji(r, $) {
    return r.startsWith($) && Cn.test(r);
  }
  var Sd = {
      test: function (r) {
        return 'string' == typeof r ? ji(r, 'rgb') : gi(r);
      },
      parse: Gn(['red', 'green', 'blue', 'alpha']),
      transform: function (r) {
        var $ = r.red,
          o = r.green,
          e = r.blue,
          t = r.alpha,
          a = void 0 === t ? 1 : t;
        return ov({
          red: ii.transform($),
          green: ii.transform(o),
          blue: ii.transform(e),
          alpha: Pd(Qd.transform(a)),
        });
      },
    },
    Td = {
      test: function (r) {
        return 'string' == typeof r ? ji(r, 'hsl') : hi(r);
      },
      parse: Gn(['hue', 'saturation', 'lightness', 'alpha']),
      transform: function (r) {
        var $ = r.hue,
          o = r.saturation,
          e = r.lightness,
          t = r.alpha,
          a = void 0 === t ? 1 : t;
        return pv({
          hue: Math.round($),
          saturation: rc.transform(Pd(o)),
          lightness: rc.transform(Pd(e)),
          alpha: Pd(Qd.transform(a)),
        });
      },
    },
    ki = vb(vb({}, Sd), {
      test: function (r) {
        return 'string' == typeof r && ji(r, '#');
      },
      parse: function (r) {
        var $ = '',
          o = '',
          e = '';
        return (
          r.length > 4
            ? (($ = r.substr(1, 2)), (o = r.substr(3, 2)), (e = r.substr(5, 2)))
            : (($ = r.substr(1, 1)),
              (o = r.substr(2, 1)),
              (e = r.substr(3, 1)),
              ($ += $),
              (o += o),
              (e += e)),
          {
            red: parseInt($, 16),
            green: parseInt(o, 16),
            blue: parseInt(e, 16),
            alpha: 1,
          }
        );
      },
    }),
    Ha = {
      test: function (r) {
        return ('string' == typeof r && Cn.test(r)) || gi(r) || hi(r);
      },
      parse: function (r) {
        return Sd.test(r)
          ? Sd.parse(r)
          : Td.test(r)
          ? Td.parse(r)
          : ki.test(r)
          ? ki.parse(r)
          : r;
      },
      transform: function (r) {
        return gi(r) ? Sd.transform(r) : hi(r) ? Td.transform(r) : r;
      },
    },
    li = '${c}',
    Hn = '${n}',
    qv = function (r) {
      return 'number' == typeof r ? 0 : r;
    },
    kb = {
      test: function (r) {
        if ('string' != typeof r || !isNaN(r)) return !1;
        var $ = 0,
          o = r.match(fi),
          e = r.match(Cf);
        return o && ($ += o.length), e && ($ += e.length), $ > 0;
      },
      parse: function (r) {
        var $ = r,
          o = [],
          e = $.match(Cf);
        e && (($ = $.replace(Cf, li)), o.push.apply(o, e.map(Ha.parse)));
        var t = $.match(fi);
        return t && o.push.apply(o, t.map(ka.parse)), o;
      },
      createTransformer: function (r) {
        var $ = r,
          o = 0,
          e = r.match(Cf),
          t = e ? e.length : 0;
        if (e) for (var a = 0; a < t; a++) ($ = $.replace(e[a], li)), o++;
        var g = $.match(fi),
          n = g ? g.length : 0;
        if (g) for (a = 0; a < n; a++) ($ = $.replace(g[a], Hn)), o++;
        return function (r) {
          for (var e = $, a = 0; a < o; a++)
            e = e.replace(
              a < t ? li : Hn,
              a < t ? Ha.transform(r[a]) : Pd(r[a])
            );
          return e;
        };
      },
      getAnimatableNone: function (r) {
        var $ = kb.parse(r);
        return kb.createTransformer(r)($.map(qv));
      },
    };
  var la = {},
    In = 1.525,
    Ud = function ($) {
      return function (r) {
        return 1 - $(1 - r);
      };
    },
    Vd = function ($) {
      return function (r) {
        return r <= 0.5 ? $(2 * r) / 2 : (2 - $(2 * (1 - r))) / 2;
      };
    },
    Jn = Ud,
    rv = Vd,
    Kn = function ($) {
      return function (r) {
        return Math.pow(r, $);
      };
    },
    mi = function ($) {
      return function (r) {
        return r * r * (($ + 1) * r - $);
      };
    },
    Ln = function ($) {
      var r = mi($);
      return function ($) {
        return ($ *= 2) < 1
          ? 0.5 * r($)
          : 0.5 * (2 - Math.pow(2, -10 * ($ - 1)));
      };
    },
    Wd = function ($) {
      return $;
    },
    ni = Kn(2),
    oi = Ud(ni),
    sv = Vd(ni),
    Mn = function ($) {
      return 1 - Math.sin(Math.acos($));
    },
    pi = Ud(Mn),
    tv = Vd(pi),
    qi = mi(In),
    uv = Ud(qi),
    vv = Vd(qi),
    wv = Ln(In),
    xv = 4 / 11,
    yv = 8 / 11,
    zv = 0.9,
    Av = 4356 / 361,
    Bv = 35442 / 1805,
    Cv = 16061 / 1805,
    Ef = function ($) {
      var r = $ * $;
      return $ < xv
        ? 7.5625 * r
        : $ < yv
        ? 9.075 * r - 9.9 * $ + 3.4
        : $ < zv
        ? Av * r - Bv * $ + Cv
        : 10.8 * $ * $ - 20.52 * $ + 10.72;
    },
    Dv = function ($) {
      return 1 - Ef(1 - $);
    },
    Ev = function ($) {
      return $ < 0.5 ? 0.5 * (1 - Ef(1 - 2 * $)) : 0.5 * Ef(2 * $ - 1) + 0.5;
    },
    Fv = 8,
    Gv = 0.001,
    Hv = 1e-7,
    Iv = 10,
    Xd = 11,
    Ff = 1 / (Xd - 1),
    Jv = 'undefined' != typeof Float32Array,
    Nn = function ($, r) {
      return 1 - 3 * r + 3 * $;
    },
    On = function ($, r) {
      return 3 * r - 6 * $;
    },
    Pn = function ($) {
      return 3 * $;
    },
    Qn = function ($, r, e) {
      return 3 * Nn(r, e) * $ * $ + 2 * On(r, e) * $ + Pn(r);
    },
    Gf = function ($, r, e) {
      return ((Nn(r, e) * $ + On(r, e)) * $ + Pn(r)) * $;
    };
  function Rn($, r, e, x) {
    var t = Jv ? new Float32Array(Xd) : new Array(Xd),
      T = function (r) {
        for (var x, T, n, o = 0, a = 1, j = Xd - 1; a !== j && t[a] <= r; ++a)
          o += Ff;
        return (
          (x = (r - t[--a]) / (t[a + 1] - t[a])),
          (n = Qn((T = o + x * Ff), $, e)) >= Gv
            ? (function (r, x) {
                for (var t = 0, T = 0; t < Fv; ++t) {
                  if (0 === (T = Qn(x, $, e))) return x;
                  x -= (Gf(x, $, e) - r) / T;
                }
                return x;
              })(r, T)
            : 0 === n
            ? T
            : (function (r, x, t) {
                var T,
                  n,
                  o = 0;
                do {
                  (T = Gf((n = x + (t - x) / 2), $, e) - r) > 0
                    ? (t = n)
                    : (x = n);
                } while (Math.abs(T) > Hv && ++o < Iv);
                return n;
              })(r, o, o + Ff)
        );
      };
    !(function () {
      for (var r = 0; r < Xd; ++r) t[r] = Gf(r * Ff, $, e);
    })();
    return function (t) {
      return $ === r && e === x
        ? t
        : 0 === t
        ? 0
        : 1 === t
        ? 1
        : Gf(T(t), r, x);
    };
  }
  (la.cubicBezier = Rn),
    (la.bounceInOut = Ev),
    (la.bounceIn = Dv),
    (la.bounceOut = Ef),
    (la.anticipate = wv),
    (la.backInOut = vv),
    (la.backOut = uv),
    (la.backIn = qi),
    (la.circInOut = tv),
    (la.circOut = pi),
    (la.circIn = Mn),
    (la.easeInOut = sv),
    (la.easeOut = oi),
    (la.easeIn = ni),
    (la.linear = Wd),
    (la.createAnticipateEasing = Ln),
    (la.createBackIn = mi),
    (la.createExpoIn = Kn),
    (la.createMirroredEasing = rv),
    (la.createReversedEasing = Jn),
    (la.mirrored = Vd),
    (la.reversed = Ud);
  var Kv = {x: 0, y: 0, z: 0},
    Hf = function (e) {
      return 'number' == typeof e;
    },
    ri = function (e) {
      return function (r, $, t) {
        return void 0 !== t
          ? e(r, $, t)
          : function (t) {
              return e(r, $, t);
            };
      };
    },
    Lv = function (e, r, $) {
      return Math.min(Math.max($, e), r);
    },
    Yd = ri(Lv),
    si = function (e) {
      return e.hasOwnProperty('x') && e.hasOwnProperty('y');
    },
    Sn = function (e) {
      return si(e) && e.hasOwnProperty('z');
    },
    If = function (e, r) {
      return Math.abs(e - r);
    },
    Tn = function (e, r) {
      if ((void 0 === r && (r = Kv), Hf(e) && Hf(r))) return If(e, r);
      if (si(e) && si(r)) {
        var $ = If(e.x, r.x),
          t = If(e.y, r.y),
          o = Sn(e) && Sn(r) ? If(e.z, r.z) : 0;
        return Math.sqrt(Math.pow($, 2) + Math.pow(t, 2) + Math.pow(o, 2));
      }
      return 0;
    },
    Wc = function (e, r, $) {
      var t = r - e;
      return 0 === t ? 1 : ($ - e) / t;
    },
    xa = function (e, r, $) {
      return -$ * e + $ * r + e;
    },
    Mv = function () {
      return (Mv =
        Object.assign ||
        function (e) {
          for (var r, $ = 1, t = arguments.length; $ < t; $++)
            for (var o in (r = arguments[$]))
              Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
          return e;
        }).apply(this, arguments);
    },
    Nv = function (e, r, $) {
      var t = e * e,
        o = r * r;
      return Math.sqrt(Math.max(0, $ * (o - t) + t));
    },
    Ov = [ki, Sd, Td],
    Un = function (e) {
      return Ov.find(function (r) {
        return r.test(e);
      });
    },
    Vn = function (e) {
      return (
        "'" +
        e +
        "' is not an animatable color. Use the equivalent color code instead."
      );
    },
    Wn = function (e, r) {
      var $ = Un(e),
        t = Un(r);
      Na(!!$, Vn(e)),
        Na(!!t, Vn(r)),
        Na(
          $.transform === t.transform,
          'Both colors must be hex/RGBA, OR both must be HSLA.'
        );
      var o = $.parse(e),
        u = t.parse(r),
        c = Mv({}, o),
        n = $ === Td ? xa : Nv;
      return function (e) {
        for (var r in c) 'alpha' !== r && (c[r] = n(o[r], u[r], e));
        return (c.alpha = xa(o.alpha, u.alpha, e)), $.transform(c);
      };
    },
    Pv = function (e, r) {
      return function ($) {
        return r(e($));
      };
    },
    ti = function () {
      for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
      return e.reduce(Pv);
    };
  function Qv(e, r) {
    return Hf(e)
      ? function ($) {
          return xa(e, r, $);
        }
      : Ha.test(e)
      ? Wn(e, r)
      : Yn(e, r);
  }
  var Rv = function (e, r) {
    var $ = e.slice(),
      t = $.length,
      o = e.map(function (e, $) {
        return Qv(e, r[$]);
      });
    return function (e) {
      for (var r = 0; r < t; r++) $[r] = o[r](e);
      return $;
    };
  };
  function Xn(e) {
    for (
      var r = kb.parse(e), $ = r.length, t = 0, o = 0, u = 0, c = 0;
      c < $;
      c++
    )
      t || 'number' == typeof r[c] ? t++ : void 0 !== r[c].hue ? u++ : o++;
    return {parsed: r, numNumbers: t, numRGB: o, numHSL: u};
  }
  var Yn = function (e, r) {
    var $ = kb.createTransformer(r),
      t = Xn(e),
      o = Xn(r);
    return (
      Na(
        t.numHSL === o.numHSL &&
          t.numRGB === o.numRGB &&
          t.numNumbers >= o.numNumbers,
        "Complex values '" +
          e +
          "' and '" +
          r +
          "' too different to mix. Ensure all colors are of the same type."
      ),
      ti(Rv(t.parsed, o.parsed), $)
    );
  };
  var Sv = function (e) {
      return e;
    },
    Zn = function (e) {
      return (
        void 0 === e && (e = Sv),
        ri(function (r, $, t) {
          var o = $ - t,
            u = -(0 - r + 1) * (0 - e(Math.abs(o)));
          return o <= 0 ? $ + u : $ - u;
        })
      );
    },
    a = Zn(),
    b = Zn(Math.sqrt),
    ui = function (e, r) {
      return Hf(e) ? e / (1e3 / r) : 0;
    },
    Zd = function (e, r) {
      return r ? e * (1e3 / r) : 0;
    },
    Tv = function (e, r, $) {
      var t = r - e;
      return (((($ - e) % t) + t) % t) + e;
    },
    c = ri(Tv),
    d = Yd(0, 1);
  var Uv = (function () {
      return function (t, r) {
        var e = this,
          o = t.middleware,
          n = t.onComplete;
        (this.isActive = !0),
          (this.update = function (t) {
            e.observer.update && e.updateObserver(t);
          }),
          (this.complete = function () {
            e.observer.complete && e.isActive && e.observer.complete(),
              e.onComplete && e.onComplete(),
              (e.isActive = !1);
          }),
          (this.error = function (t) {
            e.observer.error && e.isActive && e.observer.error(t),
              (e.isActive = !1);
          }),
          (this.observer = r),
          (this.updateObserver = function (t) {
            return r.update(t);
          }),
          (this.onComplete = n),
          r.update &&
            o &&
            o.length &&
            o.forEach(function (t) {
              return (e.updateObserver = t(e.updateObserver, e.complete));
            });
      };
    })(),
    $n = function (t, r, e) {
      var o = r.middleware;
      return new Uv(
        {middleware: o, onComplete: e},
        'function' == typeof t ? {update: t} : t
      );
    },
    Vv = (function () {
      function t(t) {
        void 0 === t && (t = {}), (this.props = t);
      }
      return (
        (t.prototype.create = function (r) {
          return new t(r);
        }),
        (t.prototype.start = function (t) {
          void 0 === t && (t = {});
          var r = !1,
            e = {stop: function () {}},
            o = this.props,
            n = o.init,
            $ = wa(o, ['init']),
            i = n(
              $n(t, $, function () {
                (r = !0), e.stop();
              })
            );
          return (e = i ? ba({}, e, i) : e), r && e.stop(), e;
        }),
        (t.prototype.applyMiddleware = function (t) {
          return this.create(
            ba({}, this.props, {
              middleware: this.props.middleware
                ? [t].concat(this.props.middleware)
                : [t],
            })
          );
        }),
        (t.prototype.pipe = function () {
          for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
          var e = 1 === t.length ? t[0] : ti.apply(void 0, t);
          return this.applyMiddleware(function (t) {
            return function (r) {
              return t(e(r));
            };
          });
        }),
        t
      );
    })(),
    wb = function (t) {
      return new Vv({init: t});
    },
    Wv = (function () {
      function t(t) {
        void 0 === t && (t = {}), (this.props = t);
      }
      return (
        (t.prototype.applyMiddleware = function (t) {
          return this.create(
            ba({}, this.props, {
              middleware: this.props.middleware
                ? [t].concat(this.props.middleware)
                : [t],
            })
          );
        }),
        (t.prototype.pipe = function () {
          for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
          var e = 1 === t.length ? t[0] : ti.apply(void 0, t);
          return this.applyMiddleware(function (t) {
            return function (r) {
              return t(e(r));
            };
          });
        }),
        (t.prototype.while = function (t) {
          return this.applyMiddleware(function (r, e) {
            return function (o) {
              return t(o) ? r(o) : e();
            };
          });
        }),
        (t.prototype.filter = function (t) {
          return this.applyMiddleware(function (r) {
            return function (e) {
              return t(e) && r(e);
            };
          });
        }),
        t
      );
    })(),
    _n = (function (t) {
      function r() {
        var r = (null !== t && t.apply(this, arguments)) || this;
        return (r.subscribers = []), r;
      }
      return (
        Hb(r, t),
        (r.prototype.complete = function () {
          this.subscribers.forEach(function (t) {
            return t.complete();
          });
        }),
        (r.prototype.error = function (t) {
          this.subscribers.forEach(function (r) {
            return r.error(t);
          });
        }),
        (r.prototype.update = function (t) {
          for (var r = 0; r < this.subscribers.length; r++)
            this.subscribers[r].update(t);
        }),
        (r.prototype.subscribe = function (t) {
          var r = this,
            e = $n(t, this.props);
          return (
            this.subscribers.push(e),
            {
              unsubscribe: function () {
                var t = r.subscribers.indexOf(e);
                -1 !== t && r.subscribers.splice(t, 1);
              },
            }
          );
        }),
        (r.prototype.stop = function () {
          this.parent && this.parent.stop();
        }),
        r
      );
    })(Wv),
    e = (function (t) {
      function r() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        Hb(r, t),
        (r.prototype.create = function (t) {
          return new r(t);
        }),
        r
      );
    })(_n),
    f = (function (t) {
      function r(r) {
        var e = t.call(this, r) || this;
        return (
          (e.scheduleVelocityCheck = function () {
            return Ga.postRender(e.velocityCheck);
          }),
          (e.velocityCheck = function (t) {
            t.timestamp !== e.lastUpdated && (e.prev = e.current);
          }),
          (e.prev = e.current = r.value || 0),
          (e.updateCurrent = function (t) {
            return (e.current = t);
          }),
          (e.getVelocityOfCurrent = function () {
            return e.getSingleVelocity(e.current, e.prev);
          }),
          r.initialSubscription && e.subscribe(r.initialSubscription),
          e
        );
      }
      return (
        Hb(r, t),
        (r.prototype.create = function (t) {
          return new r(t);
        }),
        (r.prototype.get = function () {
          return this.current;
        }),
        (r.prototype.getVelocity = function () {
          return this.getVelocityOfCurrent();
        }),
        (r.prototype.update = function (r) {
          t.prototype.update.call(this, r),
            (this.prev = this.current),
            this.updateCurrent(r);
          var e = Od(),
            o = e.delta,
            n = e.timestamp;
          (this.timeDelta = o),
            (this.lastUpdated = n),
            Ga.postRender(this.scheduleVelocityCheck);
        }),
        (r.prototype.subscribe = function (r) {
          var e = t.prototype.subscribe.call(this, r);
          return (
            this.subscribers[this.subscribers.length - 1].update(this.current),
            e
          );
        }),
        (r.prototype.getSingleVelocity = function (t, r) {
          return 'number' == typeof t && 'number' == typeof r
            ? Zd(t - r, this.timeDelta)
            : Zd(parseFloat(t) - parseFloat(r), this.timeDelta) || 0;
        }),
        r
      );
    })(_n),
    Xv = function (t) {
      var r = Object.keys(t),
        e = function (r, e) {
          return void 0 !== r && !t[e](r);
        };
      return {
        getVectorKeys: function (t) {
          return r.reduce(function (r, o) {
            return e(t[o], o) && r.push(o), r;
          }, []);
        },
        testVectorProps: function (t) {
          return (
            t &&
            r.some(function (r) {
              return e(t[r], r);
            })
          );
        },
      };
    },
    Yv = [da, rc, Ib, Dn, En],
    vi = function (t) {
      return Yv.find(function (r) {
        return r.test(t);
      });
    },
    Zv = function (t) {
      return Boolean(vi(t));
    },
    ao = function (t, r) {
      return t(r);
    },
    $v = function (t, r) {
      var e = r.from,
        o = r.to,
        n = wa(r, ['from', 'to']),
        $ = vi(e) || vi(o),
        i = $.transform,
        a = $.parse;
      return t(
        ba({}, n, {
          from: 'string' == typeof e ? a(e) : e,
          to: 'string' == typeof o ? a(o) : o,
        })
      ).pipe(i);
    },
    bo = function (t) {
      return function (r, e) {
        var o = e.from,
          n = e.to,
          $ = wa(e, ['from', 'to']);
        return r(ba({}, $, {from: 0, to: 1})).pipe(t(o, n));
      };
    },
    _v = bo(Wn),
    aw = bo(Yn),
    $d = function (t, r) {
      var e = Xv(r),
        o = e.testVectorProps,
        n = e.getVectorKeys;
      return function (r) {
        if (!o(r)) return t(r);
        var e = n(r),
          $ = r[e[0]];
        return bw($)(t, r, e);
      };
    },
    bw = function (t) {
      return 'number' == typeof t
        ? ao
        : Zv(t)
        ? $v
        : Ha.test(t)
        ? _v
        : kb.test(t)
        ? aw
        : ao;
    },
    cw = function (t) {
      return (
        void 0 === t && (t = {}),
        wb(function (r) {
          var e = r.complete,
            o = r.update,
            n = t.velocity,
            $ = void 0 === n ? 0 : n,
            i = t.from,
            a = void 0 === i ? 0 : i,
            u = t.power,
            l = void 0 === u ? 0.8 : u,
            p = t.timeConstant,
            c = void 0 === p ? 350 : p,
            s = t.restDelta,
            v = void 0 === s ? 0.5 : s,
            f = t.modifyTarget,
            I = 0,
            z = l * $,
            m = Math.round(a + z),
            d = void 0 === f ? m : f(m),
            y = Ga.update(function (t) {
              var r = t.delta;
              I += r;
              var n = -z * Math.exp(-I / c),
                $ = n > v || n < -v;
              o($ ? d + n : d), $ || (jb.update(y), e());
            }, !0);
          return {
            stop: function () {
              return jb.update(y);
            },
          };
        })
      );
    },
    dw = $d(cw, {
      from: ka.test,
      modifyTarget: function (t) {
        return 'function' == typeof t;
      },
      velocity: ka.test,
    }),
    ew = function (t) {
      return (
        void 0 === t && (t = {}),
        wb(function (r) {
          var e = r.update,
            o = r.complete,
            n = t.velocity,
            $ = void 0 === n ? 0 : n,
            i = t.from,
            a = void 0 === i ? 0 : i,
            u = t.to,
            l = void 0 === u ? 0 : u,
            p = t.stiffness,
            c = void 0 === p ? 100 : p,
            s = t.damping,
            v = void 0 === s ? 10 : s,
            f = t.mass,
            I = void 0 === f ? 1 : f,
            z = t.restSpeed,
            m = void 0 === z ? 0.01 : z,
            d = t.restDelta,
            y = void 0 === d ? 0.01 : d,
            h = $ ? -$ / 1e3 : 0,
            x = 0,
            g = l - a,
            b = a,
            A = b,
            w = Ga.update(function (t) {
              var r = t.delta;
              x += r;
              var n = v / (2 * Math.sqrt(c * I)),
                i = Math.sqrt(c / I) / 1e3;
              if (((A = b), n < 1)) {
                var a = Math.exp(-n * i * x),
                  u = i * Math.sqrt(1 - n * n);
                b =
                  l -
                  a *
                    (((h + n * i * g) / u) * Math.sin(u * x) +
                      g * Math.cos(u * x));
              } else {
                a = Math.exp(-i * x);
                b = l - a * (g + (h + i * g) * x);
              }
              $ = Zd(b - A, r);
              var p = Math.abs($) <= m,
                s = Math.abs(l - b) <= y;
              p && s ? (e((b = l)), jb.update(w), o()) : e(b);
            }, !0);
          return {
            stop: function () {
              return jb.update(w);
            },
          };
        })
      );
    },
    co = $d(ew, {
      from: ka.test,
      to: ka.test,
      stiffness: ka.test,
      damping: ka.test,
      mass: ka.test,
      velocity: ka.test,
    }),
    fw = function (t) {
      var r = t.from,
        e = void 0 === r ? 0 : r,
        o = t.velocity,
        n = void 0 === o ? 0 : o,
        $ = t.min,
        i = t.max,
        a = t.power,
        u = void 0 === a ? 0.8 : a,
        l = t.timeConstant,
        p = void 0 === l ? 700 : l,
        c = t.bounceStiffness,
        s = void 0 === c ? 500 : c,
        v = t.bounceDamping,
        f = void 0 === v ? 10 : v,
        I = t.restDelta,
        z = void 0 === I ? 1 : I,
        m = t.modifyTarget;
      return wb(function (t) {
        var r,
          o = t.update,
          a = t.complete,
          l = e,
          c = e,
          v = !1,
          I = function (t) {
            return void 0 !== $ && t <= $;
          },
          d = function (t) {
            return void 0 !== i && t >= i;
          },
          y = function (t) {
            return I(t) || d(t);
          },
          h = function (t) {
            o(t),
              (l = c),
              (c = t),
              (n = Zd(c - l, Od().delta)),
              r &&
                !v &&
                (function (t, r) {
                  return (I(t) && r < 0) || (d(t) && r > 0);
                })(t, n) &&
                g({from: t, velocity: n});
          },
          x = function (t, e) {
            r && r.stop(),
              (r = t.start({
                update: h,
                complete: function () {
                  e ? e() : a();
                },
              }));
          },
          g = function (t) {
            (v = !0),
              x(
                co(
                  ba({}, t, {
                    to: I(t.from) ? $ : i,
                    stiffness: s,
                    damping: f,
                    restDelta: z,
                  })
                )
              );
          };
        if (y(e)) g({from: e, velocity: n});
        else if (0 !== n) {
          var b = dw({
            from: e,
            velocity: n,
            timeConstant: p,
            power: u,
            restDelta: y(e) ? 20 : z,
            modifyTarget: m,
          });
          x(b, function () {
            y(c) ? g({from: c, velocity: n}) : a();
          });
        } else a();
        return {
          stop: function () {
            return r && r.stop();
          },
        };
      });
    },
    gw = $d(fw, {
      from: ka.test,
      velocity: ka.test,
      min: ka.test,
      max: ka.test,
      damping: ka.test,
      stiffness: ka.test,
      modifyTarget: function (t) {
        return 'function' == typeof t;
      },
    }),
    hw = function (t) {
      var r = t.from,
        e = void 0 === r ? 0 : r,
        o = t.to,
        n = void 0 === o ? 1 : o,
        $ = t.ease,
        i = void 0 === $ ? Wd : $,
        a = t.reverseEase;
      return (
        void 0 !== a && a && (i = Jn(i)),
        wb(function (t) {
          var r = t.update;
          return {
            seek: function (t) {
              return r(t);
            },
          };
        }).pipe(i, function (t) {
          return xa(e, n, t);
        })
      );
    },
    wi = $d(hw, {
      ease: function (t) {
        return 'function' == typeof t;
      },
      from: ka.test,
      to: ka.test,
    }),
    iw = Yd(0, 1),
    eo = function (t) {
      return (
        void 0 === t && (t = {}),
        wb(function (r) {
          var e,
            o = r.update,
            n = r.complete,
            $ = t.duration,
            i = void 0 === $ ? 300 : $,
            a = t.ease,
            u = void 0 === a ? oi : a,
            l = t.flip,
            p = void 0 === l ? 0 : l,
            c = t.loop,
            s = void 0 === c ? 0 : c,
            v = t.yoyo,
            f = void 0 === v ? 0 : v,
            I = t.repeatDelay,
            z = void 0 === I ? 0 : I,
            m = t.from,
            d = void 0 === m ? 0 : m,
            y = t.to,
            h = void 0 === y ? 1 : y,
            x = t.elapsed,
            g = void 0 === x ? 0 : x,
            b = t.flipCount,
            A = void 0 === b ? 0 : b,
            w = t.yoyoCount,
            P = void 0 === w ? 0 : w,
            T = t.loopCount,
            _ = void 0 === T ? 0 : T,
            D = wi({from: d, to: h, ease: u}).start(o),
            S = 0,
            M = !1,
            C = function (t) {
              var r;
              void 0 === t && (t = !1),
                (D = wi({
                  from: (d = (r = [h, d])[0]),
                  to: (h = r[1]),
                  ease: u,
                  reverseEase: t,
                }).start(o));
            },
            O = function () {
              (S = iw(Wc(0, i, g))), D.seek(S);
            },
            V = function () {
              (M = !0),
                (e = Ga.update(function (t) {
                  var r,
                    o = t.delta;
                  (g += o),
                    O(),
                    !(r = M && g > i + z) ||
                      ((!r || s || p || f) &&
                        ((g = g - i - z),
                        s && _ < s
                          ? (_++, 1)
                          : p && A < p
                          ? (A++, C(), 1)
                          : f && P < f && (C(++P % 2 != 0), 1))) ||
                      (jb.update(e), n && Ga.update(n, !1, !0));
                }, !0));
            },
            k = function () {
              (M = !1), e && jb.update(e);
            };
          return (
            V(),
            {
              isActive: function () {
                return M;
              },
              getElapsed: function () {
                return Yd(0, i, g);
              },
              getProgress: function () {
                return S;
              },
              stop: function () {
                k();
              },
              pause: function () {
                return k(), this;
              },
              resume: function () {
                return M || V(), this;
              },
              seek: function (t) {
                return (g = xa(0, i, t)), Ga.update(O, !1, !0), this;
              },
              reverse: function () {
                return C(), this;
              },
            }
          );
        })
      );
    },
    jw = Yd(0, 1),
    kw = function (t, r) {
      return t
        .map(function () {
          return r || oi;
        })
        .splice(0, t.length - 1);
    },
    lw = function (t) {
      var r = t.length;
      return t.map(function (t, e) {
        return 0 !== e ? e / (r - 1) : 0;
      });
    },
    mw = function (t, r, e) {
      var o = t.length,
        n = o - 1,
        $ = n - 1,
        i = r.map(function (t) {
          return t.start(e);
        });
      return function (r) {
        r <= t[0] && i[0].seek(0), r >= t[n] && i[$].seek(1);
        for (var e = 1; e < o && !(t[e] > r || e === n); e++);
        var a = Wc(t[e - 1], t[e], r);
        i[e - 1].seek(jw(a));
      };
    },
    nw = function (t) {
      var r = t.easings,
        e = t.ease,
        o = void 0 === e ? Wd : e,
        n = t.times,
        $ = t.values,
        i = wa(t, ['easings', 'ease', 'times', 'values']);
      (r = Array.isArray(r) ? r : kw($, r)), (n = n || lw($));
      var a = r.map(function (t, r) {
        return wi({from: $[r], to: $[r + 1], ease: t});
      });
      return eo(ba({}, i, {ease: o})).applyMiddleware(function (t) {
        return mw(n, a, t);
      });
    },
    ow = function (t) {
      return (
        void 0 === t && (t = {}),
        wb(function (r) {
          var e = r.complete,
            o = r.update,
            n = t.acceleration,
            $ = void 0 === n ? 0 : n,
            i = t.friction,
            a = void 0 === i ? 0 : i,
            u = t.velocity,
            l = void 0 === u ? 0 : u,
            p = t.springStrength,
            c = t.to,
            s = t.restSpeed,
            v = void 0 === s ? 0.001 : s,
            f = t.from,
            I = void 0 === f ? 0 : f,
            z = Ga.update(function (t) {
              var r = t.delta,
                n = Math.max(r, 16);
              ($ && (l += ui($, n)),
              a && (l *= Math.pow(1 - a, n / 100)),
              void 0 !== p && void 0 !== c) && (l += (c - I) * ui(p, n));
              (I += ui(l, n)),
                o(I),
                !1 !== v && (!l || Math.abs(l) <= v) && (jb.update(z), e());
            }, !0);
          return {
            set: function (t) {
              return (I = t), this;
            },
            setAcceleration: function (t) {
              return ($ = t), this;
            },
            setFriction: function (t) {
              return (a = t), this;
            },
            setSpringStrength: function (t) {
              return (p = t), this;
            },
            setSpringTarget: function (t) {
              return (c = t), this;
            },
            setVelocity: function (t) {
              return (l = t), this;
            },
            stop: function () {
              return jb.update(z);
            },
          };
        })
      );
    },
    g = $d(ow, {
      acceleration: ka.test,
      friction: ka.test,
      velocity: ka.test,
      from: ka.test,
      to: ka.test,
      springStrength: ka.test,
    }),
    fo = function (t) {
      var r = t.getCount,
        e = t.getFirst,
        o = t.getOutput,
        n = t.mapApi,
        $ = t.setProp,
        i = t.startActions;
      return function (t) {
        return wb(function (a) {
          var u = a.update,
            l = a.complete,
            p = a.error,
            c = r(t),
            s = o(),
            v = function () {
              return u(s);
            },
            f = 0,
            I = i(t, function (t, r) {
              var e = !1;
              return t.start({
                complete: function () {
                  e || ((e = !0), ++f === c && Ga.update(l));
                },
                error: p,
                update: function (t) {
                  $(s, r, t), Ga.update(v, !1, !0);
                },
              });
            });
          return Object.keys(e(I)).reduce(function (t, r) {
            return (t[r] = n(I, r)), t;
          }, {});
        });
      };
    },
    h = fo({
      getOutput: function () {
        return {};
      },
      getCount: function (t) {
        return Object.keys(t).length;
      },
      getFirst: function (t) {
        return t[Object.keys(t)[0]];
      },
      mapApi: function (t, r) {
        return function () {
          for (var e = [], o = 0; o < arguments.length; o++)
            e[o] = arguments[o];
          return Object.keys(t).reduce(function (o, n) {
            var $;
            return (
              t[n][r] &&
                (e[0] && void 0 !== e[0][n]
                  ? (o[n] = t[n][r](e[0][n]))
                  : (o[n] = ($ = t[n])[r].apply($, e))),
              o
            );
          }, {});
        };
      },
      setProp: function (t, r, e) {
        return (t[r] = e);
      },
      startActions: function (t, r) {
        return Object.keys(t).reduce(function (e, o) {
          return (e[o] = r(t[o], o)), e;
        }, {});
      },
    }),
    go = function (t, r, e) {
      return wb(function (o) {
        var n = o.update,
          $ = r.split(' ').map(function (r) {
            return t.addEventListener(r, n, e), r;
          });
        return {
          stop: function () {
            return $.forEach(function (r) {
              return t.removeEventListener(r, n, e);
            });
          },
        };
      });
    },
    xi = function () {
      return {clientX: 0, clientY: 0, pageX: 0, pageY: 0, x: 0, y: 0};
    },
    ho = function (t, r) {
      return (
        void 0 === r && (r = xi()),
        (r.clientX = r.x = t.clientX),
        (r.clientY = r.y = t.clientY),
        (r.pageX = t.pageX),
        (r.pageY = t.pageY),
        r
      );
    },
    io = [xi()];
  if ('undefined' != typeof document) {
    var pw = function (t) {
      var r = t.touches;
      var e = r.length;
      io.length = 0;
      for (var o = 0; o < e; o++) {
        var n = r[o];
        io.push(ho(n));
      }
    };
    go(document, 'touchstart touchmove', {passive: !0, capture: !0}).start(pw);
  }
  var qw = xi();
  if ('undefined' != typeof document) {
    var rw = function (t) {
      ho(t, qw);
    };
    go(document, 'mousedown mousemove', !0).start(rw);
  }
  var i = fo({
      getOutput: function () {
        return [];
      },
      getCount: function (t) {
        return t.length;
      },
      getFirst: function (t) {
        return t[0];
      },
      mapApi: function (t, r) {
        return function () {
          for (var e = [], o = 0; o < arguments.length; o++)
            e[o] = arguments[o];
          return t.map(function (t, o) {
            if (t[r])
              return Array.isArray(e[0]) ? t[r](e[0][o]) : t[r].apply(t, e);
          });
        };
      },
      setProp: function (t, r, e) {
        return (t[r] = e);
      },
      startActions: function (t, r) {
        return t.map(function (t, e) {
          return r(t, e);
        });
      },
    }),
    jo = function (t) {
      return wb(function (r) {
        var e = r.complete,
          o = setTimeout(e, t);
        return {
          stop: function () {
            return clearTimeout(o);
          },
        };
      });
    };
  function Jf(t) {
    var u = {};
    return function (r) {
      return void 0 === u[r] && (u[r] = t(r)), u[r];
    };
  }
  function yi() {
    if (Yu) return;
    Yu = true;
    Xu = {};
    Xu.default = Jf;
  }
  var ko,
    sw,
    zi,
    tw = false;
  function Ai() {
    if (tw) return;
    tw = true;
    ko = {};
    yi();
    sw =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    zi = Jf(function (e) {
      return (
        sw.test(e) ||
        (111 === e.charCodeAt(0) &&
          110 === e.charCodeAt(1) &&
          e.charCodeAt(2) < 91)
      );
    });
    ko.default = zi;
  }
  Ja();
  var Bi = function (t) {
      return 'object' == typeof t && t.hasOwnProperty('current');
    },
    uw = function (t) {
      return !isNaN(parseFloat(t));
    },
    Kf = (function () {
      function t(t) {
        var r = this;
        (this.timeDelta = 0),
          (this.lastUpdated = 0),
          (this.canTrackVelocity = !1),
          (this.updateAndNotify = function (t, e) {
            void 0 === e && (e = !0),
              (r.prev = r.current),
              (r.current = t),
              r.updateSubscribers &&
                r.prev !== r.current &&
                r.updateSubscribers.forEach(r.notifySubscriber),
              e &&
                r.renderSubscribers &&
                r.renderSubscribers.forEach(r.notifySubscriber);
            var n = Od(),
              o = n.delta,
              i = n.timestamp;
            r.lastUpdated !== i &&
              ((r.timeDelta = o),
              (r.lastUpdated = i),
              Ga.postRender(r.scheduleVelocityCheck));
          }),
          (this.notifySubscriber = function (t) {
            t(r.current);
          }),
          (this.scheduleVelocityCheck = function () {
            return Ga.postRender(r.velocityCheck);
          }),
          (this.velocityCheck = function (t) {
            t.timestamp !== r.lastUpdated && (r.prev = r.current);
          }),
          this.set(t, !1),
          (this.canTrackVelocity = uw(this.current));
      }
      return (
        (t.prototype.subscribeTo = function (t, r) {
          var e = this,
            n = function () {
              return r(e.current);
            };
          return (
            t.add(n),
            function () {
              return t.delete(n);
            }
          );
        }),
        (t.prototype.onChange = function (t) {
          return (
            this.updateSubscribers || (this.updateSubscribers = new Set()),
            this.subscribeTo(this.updateSubscribers, t)
          );
        }),
        (t.prototype.clearListeners = function () {
          var t;
          null === (t = this.updateSubscribers) || void 0 === t || t.clear();
        }),
        (t.prototype.onRenderRequest = function (t) {
          return (
            this.renderSubscribers || (this.renderSubscribers = new Set()),
            this.notifySubscriber(t),
            this.subscribeTo(this.renderSubscribers, t)
          );
        }),
        (t.prototype.attach = function (t) {
          this.passiveEffect = t;
        }),
        (t.prototype.set = function (t, r) {
          void 0 === r && (r = !0),
            r && this.passiveEffect
              ? this.passiveEffect(t, this.updateAndNotify)
              : this.updateAndNotify(t, r);
        }),
        (t.prototype.get = function () {
          return this.current;
        }),
        (t.prototype.getPrevious = function () {
          return this.prev;
        }),
        (t.prototype.getVelocity = function () {
          return this.canTrackVelocity
            ? Zd(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0;
        }),
        (t.prototype.start = function (t) {
          var r = this;
          return (
            this.stop(),
            new Promise(function (e) {
              r.stopAnimation = t(e);
            }).then(function () {
              return r.clearAnimation();
            })
          );
        }),
        (t.prototype.stop = function () {
          this.stopAnimation && this.stopAnimation(), this.clearAnimation();
        }),
        (t.prototype.isAnimating = function () {
          return !!this.stopAnimation;
        }),
        (t.prototype.clearAnimation = function () {
          this.stopAnimation = null;
        }),
        (t.prototype.destroy = function () {
          this.updateSubscribers && this.updateSubscribers.clear(),
            this.renderSubscribers && this.renderSubscribers.clear(),
            this.stop();
        }),
        t
      );
    })();
  function lb(t) {
    return new Kf(t);
  }
  var lo = (function () {
    function t(t, r) {
      var e = this;
      (this.children = new Set()),
        (this.latest = {}),
        (this.values = new Map()),
        (this.valueSubscriptions = new Map()),
        (this.config = {}),
        (this.update = function () {
          return e.config.onUpdate(e.latest);
        }),
        (this.triggerRender = function () {
          return e.render();
        }),
        (this.scheduleRender = function () {
          return Ga.render(e.triggerRender, !1, !0);
        }),
        (this.ref = function (t) {
          t ? e.mount(t) : e.unmount(),
            e.externalRef &&
              ('function' == typeof e.externalRef
                ? e.externalRef(t)
                : Bi(e.externalRef) && (e.externalRef.current = t));
        }),
        (this.parent = t),
        (this.treePath = t ? Sc(t.treePath, [t]) : []),
        (this.depth = t ? t.depth + 1 : 0),
        (this.externalRef = r);
    }
    return (
      (t.prototype.subscribe = function (t) {
        var r = this;
        return (
          this.children.add(t),
          function () {
            return r.children.delete(t);
          }
        );
      }),
      (t.prototype.hasValue = function (t) {
        return this.values.has(t);
      }),
      (t.prototype.addValue = function (t, r) {
        this.hasValue(t) && this.removeValue(t),
          this.values.set(t, r),
          (this.latest[t] = r.get()),
          this.element && this.subscribeToValue(t, r);
      }),
      (t.prototype.removeValue = function (t) {
        var r = this.valueSubscriptions.get(t);
        r && r(),
          this.values.delete(t),
          delete this.latest[t],
          this.valueSubscriptions.delete(t);
      }),
      (t.prototype.getValue = function (t, r) {
        var e = this.values.get(t);
        return (
          void 0 === e &&
            void 0 !== r &&
            ((e = new Kf(r)), this.addValue(t, e)),
          e
        );
      }),
      (t.prototype.forEachValue = function (t) {
        this.values.forEach(t);
      }),
      (t.prototype.getInstance = function () {
        return this.element;
      }),
      (t.prototype.updateConfig = function (t) {
        void 0 === t && (t = {}), (this.config = ba({}, t));
      }),
      (t.prototype.setSingleStaticValue = function (t, r) {
        this.latest[t] = r;
      }),
      (t.prototype.setStaticValues = function (t, r) {
        if ('string' == typeof t) this.setSingleStaticValue(t, r);
        else for (var e in t) this.setSingleStaticValue(e, t[e]);
      }),
      (t.prototype.subscribeToValue = function (t, r) {
        var e = this,
          n = r.onChange(function (r) {
            e.setSingleStaticValue(t, r),
              (e.latest[t] = r),
              e.config.onUpdate && Ga.update(e.update, !1, !0);
          }),
          o = r.onRenderRequest(this.scheduleRender);
        this.valueSubscriptions.set(t, function () {
          n(), o();
        });
      }),
      (t.prototype.mount = function (t) {
        var r = this;
        Na(
          !!t,
          'No ref found. Ensure components created with motion.custom forward refs using React.forwardRef'
        ),
          this.parent && (this.removeFromParent = this.parent.subscribe(this)),
          (this.element = this.current = t),
          this.forEachValue(function (t, e) {
            return r.subscribeToValue(e, t);
          });
      }),
      (t.prototype.unmount = function () {
        var t = this;
        this.forEachValue(function (r, e) {
          return t.removeValue(e);
        }),
          jb.update(this.update),
          jb.render(this.render),
          this.removeFromParent && this.removeFromParent();
      }),
      t
    );
  })();
  function vw(t) {
    return t;
  }
  function mo(t) {
    var r = t.top;
    return {x: {min: t.left, max: t.right}, y: {min: r, max: t.bottom}};
  }
  function ww(t) {
    var r = t.x,
      e = t.y;
    return {top: e.min, bottom: e.max, left: r.min, right: r.max};
  }
  function xw(t, r) {
    var e = t.top,
      n = t.left,
      o = t.bottom,
      i = t.right;
    void 0 === r && (r = vw);
    var a = r({x: n, y: e}),
      $ = r({x: i, y: o});
    return {top: a.y, left: a.x, bottom: $.y, right: $.x};
  }
  function yw() {
    return {x: {min: 0, max: 1}, y: {min: 0, max: 1}};
  }
  function Ci(t) {
    return {x: ba({}, t.x), y: ba({}, t.y)};
  }
  var no = {translate: 0, scale: 1, origin: 0, originPoint: 0};
  function oo() {
    return {x: ba({}, no), y: ba({}, no)};
  }
  var zw = {
      test: function (t) {
        return 'auto' === t;
      },
      parse: function (t) {
        return t;
      },
    },
    po = ba(ba({}, ka), {transform: Math.round}),
    Aw = {
      color: Ha,
      backgroundColor: Ha,
      outlineColor: Ha,
      fill: Ha,
      stroke: Ha,
      borderColor: Ha,
      borderTopColor: Ha,
      borderRightColor: Ha,
      borderBottomColor: Ha,
      borderLeftColor: Ha,
      borderWidth: da,
      borderTopWidth: da,
      borderRightWidth: da,
      borderBottomWidth: da,
      borderLeftWidth: da,
      borderRadius: da,
      radius: da,
      borderTopLeftRadius: da,
      borderTopRightRadius: da,
      borderBottomRightRadius: da,
      borderBottomLeftRadius: da,
      width: da,
      maxWidth: da,
      height: da,
      maxHeight: da,
      size: da,
      top: da,
      right: da,
      bottom: da,
      left: da,
      padding: da,
      paddingTop: da,
      paddingRight: da,
      paddingBottom: da,
      paddingLeft: da,
      margin: da,
      marginTop: da,
      marginRight: da,
      marginBottom: da,
      marginLeft: da,
      rotate: Ib,
      rotateX: Ib,
      rotateY: Ib,
      rotateZ: Ib,
      scale: Df,
      scaleX: Df,
      scaleY: Df,
      scaleZ: Df,
      skew: Ib,
      skewX: Ib,
      skewY: Ib,
      distance: da,
      translateX: da,
      translateY: da,
      translateZ: da,
      x: da,
      y: da,
      z: da,
      perspective: da,
      opacity: Qd,
      originX: Fn,
      originY: Fn,
      originZ: da,
      zIndex: po,
      fillOpacity: Qd,
      strokeOpacity: Qd,
      numOctaves: po,
    },
    qo = [ka, da, rc, Ib, En, Dn, zw],
    ro = function (t) {
      return function (r) {
        return r.test(t);
      };
    },
    Lf = function (t) {
      return qo.find(ro(t));
    },
    Bw = Sc(qo, [Ha, kb]),
    Cw = function (t) {
      return Bw.find(ro(t));
    },
    so = function (t) {
      return Aw[t];
    },
    Dw = function (t, r) {
      return r && 'number' == typeof t ? r.transform(t) : t;
    },
    Ew = ['', 'X', 'Y', 'Z'],
    Fw = ['translate', 'scale', 'rotate', 'skew', 'transformPerspective'],
    _d = ['x', 'y', 'z'];
  function Gw(t, r) {
    return _d.indexOf(t) - _d.indexOf(r);
  }
  Fw.forEach(function (t) {
    Ew.forEach(function (r) {
      return _d.push(t + r);
    });
  });
  var Hw = new Set(_d);
  function ae(t) {
    return Hw.has(t);
  }
  var Iw = new Set(['originX', 'originY', 'originZ']);
  function Di(t) {
    return Iw.has(t);
  }
  var Jw = {x: 'translateX', y: 'translateY', z: 'translateZ'};
  function Kw(t, r, e, n, o, i) {
    void 0 === o && (o = !0), void 0 === i && (i = !0);
    var a = '',
      $ = !1;
    r.sort(Gw);
    for (var s = r.length, f = 0; f < s; f++) {
      var u = r[f];
      (a += (Jw[u] || u) + '(' + t[u] + ') '), 'z' === u && ($ = !0);
    }
    return (
      !$ && o ? (a += 'translateZ(0)') : (a = a.trim()),
      e ? (a = e(t, n ? '' : a)) : i && n && (a = 'none'),
      a
    );
  }
  function Lw(t) {
    return t.startsWith('--');
  }
  function to(t, r) {
    return (t / (r.max - r.min)) * 100;
  }
  function Mw(t, r) {
    return 'number' != typeof t ? t : to(t, r.x) + '% ' + to(t, r.y) + '%';
  }
  function Nw(t, r, e, n) {
    var o = kb.parse(t),
      i = kb.createTransformer(t),
      a = e.x.scale * n.x,
      $ = e.y.scale * n.y;
    (o[1] /= a), (o[2] /= $);
    var s = xa(a, $, 0.5);
    return (
      'number' == typeof o[3] && (o[3] /= s),
      'number' == typeof o[4] && (o[4] /= s),
      i(o)
    );
  }
  var be = {process: Mw},
    Ei = {
      borderRadius: ba(ba({}, be), {
        applyTo: [
          'borderTopLeftRadius',
          'borderTopRightRadius',
          'borderBottomLeftRadius',
          'borderBottomRightRadius',
        ],
      }),
      borderTopLeftRadius: be,
      borderTopRightRadius: be,
      borderBottomLeftRadius: be,
      borderBottomRightRadius: be,
      boxShadow: {process: Nw},
    };
  function uo(t, r, e, n, o, i, a, $, s, f, u, l) {
    var p = a.enableHardwareAcceleration,
      c = a.transformTemplate,
      v = a.allowTransformNone;
    i.length = 0;
    var S = !!$,
      m = !!$,
      d = !0;
    for (var U in t) {
      var J = t[U],
        h = so(U),
        g = Dw(J, h);
      if (ae(U)) {
        if (((S = !0), (n[U] = g), i.push(U), !d)) continue;
        J !== (void 0 !== h.default ? h.default : 0) && (d = !1);
      } else if (Di(U)) (o[U] = g), (m = !0);
      else if ('transform' !== U || 'function' != typeof J) {
        var y = Lw(U) ? e : r;
        if ($ && Ei[U]) {
          var x = Ei[U].process(J, l, s, u),
            P = Ei[U].applyTo;
          if (P) for (var C = P.length, E = 0; E < C; E++) y[P[E]] = x;
          else y[U] = x;
        } else y[U] = g;
      }
    }
    if (((S || c) && (r.transform = $ ? Ow(f, u) : Kw(n, i, c, d, p, v)), m)) {
      var b = $ ? 100 * f.x.origin + '%' : o.originX || '50%',
        V = $ ? 100 * f.y.origin + '%' : o.originY || '50%',
        T = o.originZ || '0';
      r.transformOrigin = b + ' ' + V + ' ' + T;
    }
  }
  function Ow(t, r) {
    return (
      'translate3d(' +
      t.x.translate / r.x +
      'px, ' +
      t.y.translate / r.y +
      'px, 0) scale(' +
      t.x.scale +
      ', ' +
      t.y.scale +
      ')'
    );
  }
  function vo(t, r) {
    (t.min = r.min), (t.max = r.max);
  }
  function Pw(t, r) {
    vo(t.x, r.x), vo(t.y, r.y);
  }
  function Mf(t, r, e) {
    return e + r * (t - e);
  }
  function wo(t, r, e, n, o) {
    return void 0 !== o && (t = Mf(t, o, n)), Mf(t, e, n) + r;
  }
  function Fi(t, r, e, n, o) {
    void 0 === r && (r = 0),
      void 0 === e && (e = 1),
      (t.min = wo(t.min, r, e, n, o)),
      (t.max = wo(t.max, r, e, n, o));
  }
  function Qw(t, r) {
    var e = r.x,
      n = r.y;
    Fi(t.x, e.translate, e.scale, e.originPoint),
      Fi(t.y, n.translate, n.scale, n.originPoint);
  }
  function xo(t, r, e, n) {
    var o = n[0],
      i = n[1],
      a = n[2];
    (t.min = r.min), (t.max = r.max);
    var $ = xa(r.min, r.max, e[a] || 0.5);
    Fi(t, e[o], e[i], $, e.scale);
  }
  var yo = ['x', 'scaleX', 'originX'],
    zo = ['y', 'scaleY', 'originY'];
  function Rw(t, r, e) {
    xo(t.x, r.x, e, yo), xo(t.y, r.y, e, zo);
  }
  function Ao(t, r, e, n, o) {
    return (
      (t = Mf((t -= r), 1 / e, n)), void 0 !== o && (t = Mf(t, 1 / o, n)), t
    );
  }
  function Sw(t, r, e, n, o) {
    void 0 === r && (r = 0), void 0 === e && (e = 1), void 0 === n && (n = 0.5);
    var i = xa(t.min, t.max, n) - r;
    (t.min = Ao(t.min, r, e, i, o)), (t.max = Ao(t.max, r, e, i, o));
  }
  function Bo(t, r, e) {
    var n = e[0],
      o = e[1],
      i = e[2];
    Sw(t, r[n], r[o], r[i], r.scale);
  }
  function Tw(t, r) {
    Bo(t.x, r, yo), Bo(t.y, r, zo);
  }
  function Uw(t, r, e) {
    r.x = r.y = 1;
    for (var n = e.length, o = 0; o < n; o++) {
      var i = e[o].delta;
      Qw(t, i), (r.x *= i.x.scale), (r.y *= i.y.scale);
    }
  }
  var Vw = Yd(0, 1);
  function Co(t, r, e) {
    return void 0 === r && (r = 0), void 0 === e && (e = 0.01), Tn(t, r) < e;
  }
  function Ww(t, r, e) {
    var n = xa(t.min, t.max, e);
    return xa(r.min, r.max, e) - n;
  }
  function Do(t, r) {
    var e = 0.5,
      n = t.max - t.min,
      o = r.max - r.min;
    return (
      o > n
        ? (e = Wc(r.min, r.max - n, t.min))
        : n > o && (e = Wc(t.min, t.max - o, r.min)),
      Vw(e)
    );
  }
  function Eo(t, r, e, n) {
    var o = r.max - r.min,
      i = e.max - e.min;
    (t.origin = void 0 === n ? Do(r, e) : n),
      (t.originPoint = xa(r.min, r.max, t.origin)),
      (t.scale = i / o),
      Co(t.scale, 1, 1e-4) && (t.scale = 1),
      (t.translate = Ww(r, e, t.origin)),
      Co(t.translate) && (t.translate = 0);
  }
  function Fo(t, r, e, n) {
    Eo(t.x, r.x, e.x, n), Eo(t.y, r.y, e.y, n);
  }
  function sc(t) {
    return [t('x'), t('y')];
  }
  var ce = function (t) {
      return Array.isArray(t);
    },
    tc = function () {
      return {
        type: 'spring',
        stiffness: 500,
        damping: 25,
        restDelta: 0.5,
        restSpeed: 10,
      };
    },
    Nf = function (t) {
      return {type: 'spring', stiffness: 700, damping: 0 === t ? 100 : 35};
    },
    Gi = function () {
      return {ease: 'linear', duration: 0.3};
    },
    Xw = function (t) {
      return {type: 'keyframes', duration: 0.8, values: t};
    },
    Go = {
      x: tc,
      y: tc,
      z: tc,
      rotate: tc,
      rotateX: tc,
      rotateY: tc,
      rotateZ: tc,
      scaleX: Nf,
      scaleY: Nf,
      scale: Nf,
      opacity: Gi,
      backgroundColor: Gi,
      color: Gi,
      default: Nf,
    },
    Yw = function (t, r) {
      var e;
      return (e = ce(r) ? Xw : Go[t] || Go.default), ba({to: r}, e(r));
    },
    Ho = function (t) {
      var r = t.to,
        e = t.duration;
      return wb(function (t) {
        var n = t.update,
          o = t.complete;
        n(r), e ? jo(e).start({complete: o}) : o();
      });
    },
    Hi = function (t) {
      if (Array.isArray(t)) {
        Na(
          4 === t.length,
          'Cubic bezier arrays must contain four numerical values.'
        );
        var r = t[0],
          e = t[1],
          n = t[2],
          o = t[3];
        return Rn(r, e, n, o);
      }
      return 'string' == typeof t
        ? (Na(void 0 !== la[t], "Invalid easing type '" + t + "'"), la[t])
        : t;
    },
    Io = function (t) {
      return Array.isArray(t) && 'number' != typeof t[0];
    },
    Zw = function (t) {
      return t.hasOwnProperty('duration') || t.hasOwnProperty('repeatDelay');
    },
    Jo = function (t, r) {
      return (
        'zIndex' !== t &&
        (!('number' != typeof r && !Array.isArray(r)) ||
          !('string' != typeof r || !kb.test(r) || r.startsWith('url(')))
      );
    },
    Of = function (t) {
      return 1e3 * t;
    },
    $w = {tween: eo, spring: co, keyframes: nw, inertia: gw, just: Ho},
    Ko = {
      tween: function (t) {
        if (t.ease) {
          var r = Io(t.ease) ? t.ease[0] : t.ease;
          t.ease = Hi(r);
        }
        return t;
      },
      keyframes: function (t) {
        var r = t.from,
          e = (t.to, t.velocity, wa(t, ['from', 'to', 'velocity']));
        if (e.values && null === e.values[0]) {
          var n = Sc(e.values);
          (n[0] = r), (e.values = n);
        }
        return (
          e.ease && (e.easings = Io(e.ease) ? e.ease.map(Hi) : Hi(e.ease)),
          (e.ease = Wd),
          e
        );
      },
    },
    _w = function (t) {
      t.when, t.delay, t.delayChildren, t.staggerChildren, t.staggerDirection;
      var r = wa(t, [
        'when',
        'delay',
        'delayChildren',
        'staggerChildren',
        'staggerDirection',
      ]);
      return Object.keys(r).length;
    },
    ax = function (t, r, e) {
      var n = e ? e.delay : 0;
      if (void 0 === e || !_w(e)) return ba({delay: n}, Yw(t, r));
      var o = e[t] || e.default || e;
      return !1 === o.type
        ? {
            delay: o.hasOwnProperty('delay') ? o.delay : n,
            to: ce(r) ? r[r.length - 1] : r,
            type: 'just',
          }
        : ce(r)
        ? ba(ba({values: r, duration: 0.8, delay: n, ease: 'linear'}, o), {
            type: 'keyframes',
          })
        : ba({type: 'tween', to: r, delay: n}, o);
    },
    bx = function (t, r) {
      return Ko[t] ? Ko[t](r) : r;
    },
    cx = function (t, r, e, n) {
      var o = r.get(),
        i = Jo(t, o),
        a = Jo(t, e);
      $u(
        i === a,
        'You are trying to animate ' +
          t +
          ' from "' +
          o +
          '" to "' +
          e +
          '". ' +
          o +
          ' is not an animatable value - to enable this animation set ' +
          o +
          ' to a value animatable to ' +
          e +
          ' via the `style` property.'
      );
      var $ = ax(t, e, n),
        s = $.type,
        f = void 0 === s ? 'tween' : s,
        u = wa($, ['type']),
        l = i && a ? $w[f] : Ho,
        p = bx(f, ba({from: o, velocity: r.getVelocity()}, u));
      return (
        Zw(p) &&
          (p.duration && (p.duration = Of(p.duration)),
          p.repeatDelay && (p.repeatDelay = Of(p.repeatDelay))),
        [l, p]
      );
    };
  function Ii(t, r, e, n) {
    void 0 === n && (n = {});
    var o = n.delay,
      i = void 0 === o ? 0 : o,
      a = wa(n, ['delay']);
    return r.start(function (n) {
      var o,
        $ = cx(t, r, e, a),
        s = $[0],
        f = $[1],
        u = f.delay,
        l = wa(f, ['delay']);
      void 0 !== u && (i = u);
      var p = function () {
        var t = s(l);
        o = t.start({
          update: function (t) {
            return r.set(t);
          },
          complete: n,
        });
      };
      return (
        i ? (o = jo(Of(i)).start({complete: p})) : p(),
        function () {
          o && o.stop();
        }
      );
    });
  }
  function Lo(t, r) {
    return mo(xw(t.getBoundingClientRect(), r));
  }
  var Mo = (function (t) {
    function r() {
      var r = (null !== t && t.apply(this, arguments)) || this;
      return (
        (r.defaultConfig = {
          enableHardwareAcceleration: !0,
          allowTransformNone: !0,
        }),
        (r.style = {}),
        (r.reactStyle = {}),
        (r.vars = {}),
        (r.transform = {}),
        (r.transformOrigin = {}),
        (r.transformKeys = []),
        (r.config = r.defaultConfig),
        (r.isLayoutProjectionEnabled = !1),
        (r.hasLayoutChildren = !1),
        (r.layoutUpdateListeners = new Set()),
        (r.hasViewportBoxUpdated = !1),
        (r.targetBoxFinal = yw()),
        (r.treeScale = {x: 1, y: 1}),
        (r.delta = oo()),
        (r.deltaFinal = oo()),
        (r.stopLayoutAxisAnimation = {x: function () {}, y: function () {}}),
        (r.isTargetBoxLocked = !1),
        (r.axisProgress = {x: lb(0), y: lb(0)}),
        r
      );
    }
    return (
      Hb(r, t),
      (r.prototype.removeValue = function (r) {
        t.prototype.removeValue.call(this, r),
          delete this.vars[r],
          delete this.style[r];
      }),
      (r.prototype.clean = function () {
        (this.style = {}), (this.vars = {}), (this.transform = {});
      }),
      (r.prototype.updateConfig = function (t) {
        void 0 === t && (t = {}),
          (this.config = ba(ba({}, this.defaultConfig), t));
      }),
      (r.prototype.read = function (t) {
        return this.getComputedStyle()[t] || 0;
      }),
      (r.prototype.readNativeValue = function (t) {
        if (ae(t)) {
          var r = so(t);
          return (r && r.default) || 0;
        }
        return this.read(t);
      }),
      (r.prototype.enableLayoutProjection = function () {
        (this.isLayoutProjectionEnabled = !0),
          dx(this, function (t) {
            return (t.hasLayoutChildren = !0);
          });
      }),
      (r.prototype.hide = function () {
        !1 !== this.isVisible && ((this.isVisible = !1), this.scheduleRender());
      }),
      (r.prototype.show = function () {
        !0 !== this.isVisible && ((this.isVisible = !0), this.scheduleRender());
      }),
      (r.prototype.onLayoutUpdate = function (t) {
        var r = this;
        return (
          this.layoutUpdateListeners.add(t),
          function () {
            return r.layoutUpdateListeners.delete(t);
          }
        );
      }),
      (r.prototype.layoutReady = function (t) {
        var r = this;
        this.layoutUpdateListeners.forEach(function (e) {
          e(r.box, r.prevViewportBox || r.box, t);
        });
      }),
      (r.prototype.getBoundingBox = function () {
        var t = this.config.transformPagePoint;
        return Lo(this.element, t);
      }),
      (r.prototype.getBoundingBoxWithoutTransforms = function () {
        var t = this.getBoundingBox();
        return Tw(t, this.latest), t;
      }),
      (r.prototype.getComputedStyle = function () {
        return window.getComputedStyle(this.element);
      }),
      (r.prototype.snapshotBoundingBox = function () {
        this.prevViewportBox = this.getBoundingBoxWithoutTransforms();
        var t = this.axisProgress,
          r = t.x,
          e = t.y;
        this.isTargetBoxLocked ||
          r.isAnimating() ||
          e.isAnimating() ||
          (this.targetBox = Ci(this.prevViewportBox));
      }),
      (r.prototype.measureLayout = function () {
        (this.box = this.getBoundingBox()),
          (this.boxCorrected = Ci(this.box)),
          this.targetBox || (this.targetBox = Ci(this.box));
      }),
      (r.prototype.refreshTargetBox = function () {
        this.targetBox = this.getBoundingBoxWithoutTransforms();
      }),
      (r.prototype.lockTargetBox = function () {
        this.isTargetBoxLocked = !0;
      }),
      (r.prototype.unlockTargetBox = function () {
        this.stopLayoutAnimation(), (this.isTargetBoxLocked = !1);
      }),
      (r.prototype.resetTransform = function () {
        (this.element.style.transform = 'none'), this.scheduleRender();
      }),
      (r.prototype.setAxisTarget = function (t, r, e) {
        var n = this.targetBox[t];
        (n.min = r), (n.max = e), (this.hasViewportBoxUpdated = !0), No(this);
      }),
      (r.prototype.startLayoutAxisAnimation = function (t, r) {
        var e = this,
          n = this.axisProgress[t],
          o = this.targetBox[t],
          i = o.min,
          a = o.max - i;
        return (
          n.clearListeners(),
          n.set(i),
          n.set(i),
          n.onChange(function (r) {
            return e.setAxisTarget(t, r, r + a);
          }),
          Ii(t, n, 0, r)
        );
      }),
      (r.prototype.stopLayoutAnimation = function () {
        var t = this;
        sc(function (r) {
          return t.axisProgress[r].stop();
        });
      }),
      (r.prototype.updateLayoutDeltas = function (t) {
        var r, e;
        this.treePath.forEach(function (r) {
          return r.updateLayoutDeltas(t);
        }),
          this.isLayoutProjectionEnabled &&
            this.box &&
            (Pw(this.boxCorrected, this.box),
            Uw(this.boxCorrected, this.treeScale, this.treePath),
            Rw(this.targetBoxFinal, this.targetBox, this.latest),
            Fo(this.delta, this.boxCorrected, this.targetBox),
            Fo(this.deltaFinal, this.boxCorrected, this.targetBoxFinal),
            t ||
              (this.hasViewportBoxUpdated &&
                (null === (e = (r = this.config).onViewportBoxUpdate) ||
                  void 0 === e ||
                  e.call(r, this.targetBox, this.delta)),
              (this.hasViewportBoxUpdated = !1)));
      }),
      (r.prototype.build = function (t) {
        void 0 !== this.isVisible &&
          (this.style.visibility = this.isVisible ? 'visible' : 'hidden'),
          this.isLayoutProjectionEnabled &&
            this.box &&
            this.updateLayoutDeltas(t),
          uo(
            this.latest,
            this.style,
            this.vars,
            this.transform,
            this.transformOrigin,
            this.transformKeys,
            this.config,
            this.isLayoutProjectionEnabled && !!this.box,
            this.delta,
            this.deltaFinal,
            this.treeScale,
            this.targetBoxFinal
          );
      }),
      (r.prototype.render = function () {
        for (var t in (this.build(!1),
        Object.assign(this.element.style, this.style),
        this.vars))
          this.element.style.setProperty(t, this.vars[t]);
      }),
      r
    );
  })(lo);
  function No(t) {
    t.isLayoutProjectionEnabled && t.scheduleRender(),
      t.hasLayoutChildren && t.children.forEach(No);
  }
  function dx(t, r) {
    for (var e = t.parent; e; ) r(e), (e = e.parent);
  }
  function de(t) {
    var r = aa.useRef(null);
    return null === r.current && (r.current = t()), r.current;
  }
  function Oo(t, r, e) {
    return 'string' == typeof t ? t : da.transform(r + e * t);
  }
  function ex(t, r, e) {
    return Oo(r, t.x, t.width) + ' ' + Oo(e, t.y, t.height);
  }
  var Ji = function (t, r) {
      return da.transform(t * r);
    },
    fx = {offset: 'stroke-dashoffset', array: 'stroke-dasharray'},
    gx = {offset: 'strokeDashoffset', array: 'strokeDasharray'};
  function hx(t, r, e, n, o, i) {
    void 0 === n && (n = 1), void 0 === o && (o = 0), void 0 === i && (i = !0);
    var a = i ? fx : gx;
    t[a.offset] = Ji(-o, r);
    var $ = Ji(e, r),
      s = Ji(n, r);
    t[a.array] = $ + ' ' + s;
  }
  var ix = {x: 0, y: 0, width: 0, height: 0};
  function jx(t, r, e, n, o, i, a, $, s, f) {
    var u = t.attrX,
      l = t.attrY,
      p = t.originX,
      c = t.originY,
      v = t.pathLength,
      S = t.pathSpacing,
      m = void 0 === S ? 1 : S,
      d = t.pathOffset,
      U = void 0 === d ? 0 : d;
    return (
      uo(
        wa(t, [
          'attrX',
          'attrY',
          'originX',
          'originY',
          'pathLength',
          'pathSpacing',
          'pathOffset',
        ]),
        n,
        e,
        o,
        i,
        a,
        $
      ),
      n.transform && ((r.transform = n.transform), delete n.transform),
      (void 0 !== p || void 0 !== c || r.transform) &&
        (r.transformOrigin = ex(
          s || ix,
          void 0 !== p ? p : 0.5,
          void 0 !== c ? c : 0.5
        )),
      void 0 !== u && (n.x = u),
      void 0 !== l && (n.y = l),
      void 0 !== f && void 0 !== v && hx(n, f, v, m, U, !1),
      n
    );
  }
  var kx = new Set([
      'baseFrequency',
      'diffuseConstant',
      'kernelMatrix',
      'kernelUnitLength',
      'keySplines',
      'keyTimes',
      'limitingConeAngle',
      'markerHeight',
      'markerWidth',
      'numOctaves',
      'targetX',
      'targetY',
      'surfaceScale',
      'specularConstant',
      'specularExponent',
      'stdDeviation',
      'tableValues',
    ]),
    lx = /([a-z])([A-Z])/g,
    mx = '$1-$2',
    Po = function (t) {
      return t.replace(lx, mx).toLowerCase();
    },
    nx = (function (t) {
      function r() {
        var r = (null !== t && t.apply(this, arguments)) || this;
        return (
          (r.attrs = {}),
          (r.defaultConfig = {enableHardwareAcceleration: !1}),
          (r.config = r.defaultConfig),
          r
        );
      }
      return (
        Hb(r, t),
        (r.prototype.mount = function (r) {
          t.prototype.mount.call(this, r), this.measure();
        }),
        (r.prototype.measure = function () {
          try {
            this.dimensions =
              'function' == typeof this.element.getBBox
                ? this.element.getBBox()
                : this.element.getBoundingClientRect();
          } catch (t) {
            this.dimensions = {x: 0, y: 0, width: 0, height: 0};
          }
          ox(this.element) &&
            (this.totalPathLength = this.element.getTotalLength());
        }),
        (r.prototype.clean = function () {
          t.prototype.clean.call(this), (this.attrs = {});
        }),
        (r.prototype.read = function (t) {
          return (t = kx.has(t) ? t : Po(t)), this.element.getAttribute(t);
        }),
        (r.prototype.build = function () {
          jx(
            this.latest,
            this.style,
            this.vars,
            this.attrs,
            this.transform,
            this.transformOrigin,
            this.transformKeys,
            this.config,
            this.dimensions,
            this.totalPathLength
          );
        }),
        (r.prototype.render = function () {
          for (var r in (t.prototype.render.call(this), this.attrs))
            this.element.setAttribute(Po(r), this.attrs[r]);
        }),
        r
      );
    })(Mo);
  function ox(t) {
    return 'path' === t.tagName;
  }
  var px = [
      'animate',
      'circle',
      'clipPath',
      'defs',
      'desc',
      'ellipse',
      'feBlend',
      'feColorMatrix',
      'feComponentTransfer',
      'feComposite',
      'feConvolveMatrix',
      'feDiffuseLighting',
      'feDisplacementMap',
      'feDistantLight',
      'feDropShadow',
      'feFlood',
      'feFuncA',
      'feFuncB',
      'feFuncG',
      'feFuncR',
      'feGaussianBlur',
      'feImage',
      'feMerge',
      'feMergeNode',
      'feMorphology',
      'feOffset',
      'fePointLight',
      'feSpecularLighting',
      'feSpotLight',
      'feTile',
      'feTurbulence',
      'filter',
      'foreignObject',
      'g',
      'image',
      'line',
      'linearGradient',
      'marker',
      'mask',
      'metadata',
      'path',
      'pattern',
      'polygon',
      'polyline',
      'radialGradient',
      'rect',
      'stop',
      'svg',
      'switch',
      'symbol',
      'text',
      'textPath',
      'tspan',
      'use',
      'view',
    ],
    qx = new Set(px);
  function Qo(t) {
    return 'string' == typeof t && qx.has(t);
  }
  var ee = aa.createContext(null);
  function Ro() {
    var t = aa.useContext(ee);
    if (null === t) return [!0, null];
    var r = t.isPresent,
      e = t.onExitComplete,
      n = t.register,
      o = ux();
    aa.useEffect(function () {
      return n(o);
    }, []);
    return !r && e
      ? [
          !1,
          function () {
            return null == e ? void 0 : e(o);
          },
        ]
      : [!0];
  }
  function rx() {
    var t = aa.useContext(ee);
    return null === t || t.isPresent;
  }
  var sx = 0,
    tx = function () {
      return sx++;
    },
    ux = function () {
      return de(tx);
    },
    vx = function (t, r, e, n, o) {
      var i = de(function () {
        return new (Qo(t) ? nx : Mo)(e, o);
      });
      i.updateConfig(ba({enableHardwareAcceleration: !n}, r)),
        (i.layoutId = r.layoutId);
      var a = rx();
      return (i.isPresent = void 0 !== r.isPresent ? r.isPresent : a), i;
    },
    wx = new Set([
      'initial',
      'animate',
      'exit',
      'style',
      'variants',
      'transition',
      'transformTemplate',
      'transformValues',
      'custom',
      'inherit',
      'static',
      'layout',
      'layoutId',
      'onLayoutAnimationComplete',
      'onViewportBoxUpdate',
      'onAnimationStart',
      'onAnimationComplete',
      'onUpdate',
      'onDragStart',
      'onDrag',
      'onDragEnd',
      'onMeasureDragConstraints',
      'onDirectionLock',
      'onDragTransitionEnd',
      'drag',
      'dragControls',
      'dragListener',
      'dragConstraints',
      'dragDirectionLock',
      'dragElastic',
      'dragMomentum',
      'dragPropagation',
      'dragTransition',
      'onPan',
      'onPanStart',
      'onPanEnd',
      'onPanSessionStart',
      'onTap',
      'onTapStart',
      'onTapCancel',
      'whileHover',
      'whileTap',
      'onHoverEnd',
      'onHoverStart',
    ]);
  function So(t) {
    return wx.has(t);
  }
  var xx = function (t) {
    return !So(t);
  };
  try {
    var yx = (Ai(), ko).default;
    xx = function (t) {
      return t.startsWith('on') ? !So(t) : yx(t);
    };
  } catch (_a) {}
  function zx(t) {
    var r = {};
    for (var e in t) xx(e) && (r[e] = t[e]);
    return r;
  }
  function Ax(t, r) {
    var e = r.drag,
      n = {style: ba(ba(ba({}, t.reactStyle), t.style), t.vars)};
    return e && ((n.style.userSelect = 'none'), (n.draggable = !1)), n;
  }
  function Bx(t) {
    return ba(ba({}, t.attrs), {style: ba({}, t.reactStyle)});
  }
  function Cx(t, r, e) {
    var n = 'string' == typeof t ? zx(r) : r;
    e.clean(), e.build(!0);
    var o = Qo(t) ? Bx(e) : Ax(e, r);
    return aa.createElement(t, ba(ba(ba({}, n), {ref: e.ref}), o));
  }
  function Ki(t) {
    return 'string' == typeof t && t.startsWith('var(--');
  }
  var Dx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
  function Ex(t) {
    var r = Dx.exec(t);
    return r ? [r[1], r[2]] : [,];
  }
  var Fx = 4;
  function Li(t, r, e) {
    void 0 === e && (e = 1),
      Na(
        e <= Fx,
        'Max CSS variable fallback depth detected in property "' +
          t +
          '". This may indicate a circular fallback dependency.'
      );
    var n = Ex(t),
      o = n[0],
      i = n[1];
    if (o) {
      var a = window.getComputedStyle(r).getPropertyValue(o);
      return a || (Ki(i) ? Li(i, r, e + 1) : i);
    }
  }
  function Gx(t, r, e) {
    var n = wa(r, []),
      o = t.getInstance();
    if (!(o instanceof HTMLElement)) return {target: n, transitionEnd: e};
    for (var i in (e && (e = ba({}, e)),
    t.forEachValue(function (t) {
      var r = t.get();
      if (Ki(r)) {
        var e = Li(r, o);
        e && t.set(e);
      }
    }),
    n)) {
      var a = n[i];
      if (Ki(a)) {
        var $ = Li(a, o);
        $ && ((n[i] = $), e && void 0 === e[i] && (e[i] = a));
      }
    }
    return {target: n, transitionEnd: e};
  }
  var Hx,
    Ix = new Set([
      'width',
      'height',
      'top',
      'left',
      'right',
      'bottom',
      'x',
      'y',
    ]),
    To = function (t) {
      return Ix.has(t);
    },
    Jx = function (t) {
      return Object.keys(t).some(To);
    },
    Uo = function (t, r) {
      t.set(r, !1), t.set(r);
    },
    Pf = function (t) {
      return t === ka || t === da;
    };
  !(function (t) {
    (t.width = 'width'),
      (t.height = 'height'),
      (t.left = 'left'),
      (t.right = 'right'),
      (t.top = 'top'),
      (t.bottom = 'bottom');
  })(Hx || (Hx = {}));
  var Vo = function (t, r) {
      return parseFloat(t.split(', ')[r]);
    },
    Wo = function (t, r) {
      return function (e, n) {
        var o = n.transform;
        if ('none' === o || !o) return 0;
        var i = o.match(/^matrix3d\((.+)\)$/);
        if (i) return Vo(i[1], r);
        var a = o.match(/^matrix\((.+)\)$/);
        return a ? Vo(a[1], t) : 0;
      };
    },
    Kx = new Set(['x', 'y', 'z']),
    Lx = _d.filter(function (t) {
      return !Kx.has(t);
    });
  function Mx(t) {
    var r = [];
    return (
      Lx.forEach(function (e) {
        var n = t.getValue(e);
        void 0 !== n &&
          (r.push([e, n.get()]), n.set(e.startsWith('scale') ? 1 : 0));
      }),
      r.length && t.render(),
      r
    );
  }
  var Xo = {
      width: function (t) {
        var r = t.x;
        return r.max - r.min;
      },
      height: function (t) {
        var r = t.y;
        return r.max - r.min;
      },
      top: function (t, r) {
        var e = r.top;
        return parseFloat(e);
      },
      left: function (t, r) {
        var e = r.left;
        return parseFloat(e);
      },
      bottom: function (t, r) {
        var e = t.y,
          n = r.top;
        return parseFloat(n) + (e.max - e.min);
      },
      right: function (t, r) {
        var e = t.x,
          n = r.left;
        return parseFloat(n) + (e.max - e.min);
      },
      x: Wo(4, 13),
      y: Wo(5, 14),
    },
    Nx = function (t, r, e) {
      var n = r.getBoundingBox(),
        o = r.getComputedStyle(),
        i = o.display,
        a = {
          top: o.top,
          left: o.left,
          bottom: o.bottom,
          right: o.right,
          transform: o.transform,
        };
      'none' === i && r.setStaticValues('display', t.display || 'block'),
        r.render();
      var $ = r.getBoundingBox();
      return (
        e.forEach(function (e) {
          var i = r.getValue(e);
          Uo(i, Xo[e](n, a)), (t[e] = Xo[e]($, o));
        }),
        t
      );
    },
    Ox = function (t, r, e, n) {
      void 0 === e && (e = {}),
        void 0 === n && (n = {}),
        (r = ba({}, r)),
        (n = ba({}, n));
      var o = Object.keys(r).filter(To),
        i = [],
        a = !1,
        $ = [];
      if (
        (o.forEach(function (o) {
          var s = t.getValue(o);
          if (t.hasValue(o)) {
            var f,
              u = e[o],
              l = r[o],
              p = Lf(u);
            if (ce(l))
              for (var c = l.length, v = null === l[0] ? 1 : 0; v < c; v++)
                f
                  ? Na(Lf(l[v]) === f, 'All keyframes must be of the same type')
                  : ((f = Lf(l[v])),
                    Na(
                      f === p || (Pf(p) && Pf(f)),
                      'Keyframes must be of the same dimension as the current value'
                    ));
            else f = Lf(l);
            if (p !== f)
              if (Pf(p) && Pf(f)) {
                var S = s.get();
                'string' == typeof S && s.set(parseFloat(S)),
                  'string' == typeof l
                    ? (r[o] = parseFloat(l))
                    : Array.isArray(l) &&
                      f === da &&
                      (r[o] = l.map(parseFloat));
              } else
                a || ((i = Mx(t)), (a = !0)),
                  $.push(o),
                  (n[o] = void 0 !== n[o] ? n[o] : r[o]),
                  Uo(s, l);
          }
        }),
        $.length)
      ) {
        var s = Nx(r, t, $);
        return (
          i.length &&
            i.forEach(function (r) {
              var e = r[0],
                n = r[1];
              t.getValue(e).set(n);
            }),
          t.render(),
          {target: s, transitionEnd: n}
        );
      }
      return {target: r, transitionEnd: n};
    };
  function Px(t, r, e, n) {
    return Jx(r) ? Ox(t, r, e, n) : {target: r, transitionEnd: n};
  }
  var Qx = function (t, r, e, n) {
    var o = Gx(t, r, n);
    return Px(t, (r = o.target), e, (n = o.transitionEnd));
  };
  function Rx(t, r) {
    void 0 === r && (r = !1);
    var e = aa.useRef(!0);
    (!r || (r && e.current)) && t(), (e.current = !1);
  }
  var Qf = (function () {
      function t() {
        (this.hasMounted = !1),
          (this.pendingAnimations = []),
          (this.componentControls = new Set());
      }
      return (
        (t.prototype.setVariants = function (t) {
          (this.variants = t),
            this.componentControls.forEach(function (r) {
              return r.setVariants(t);
            });
        }),
        (t.prototype.setDefaultTransition = function (t) {
          (this.defaultTransition = t),
            this.componentControls.forEach(function (r) {
              return r.setDefaultTransition(t);
            });
        }),
        (t.prototype.subscribe = function (t) {
          var r = this;
          return (
            this.componentControls.add(t),
            this.variants && t.setVariants(this.variants),
            this.defaultTransition &&
              t.setDefaultTransition(this.defaultTransition),
            function () {
              return r.componentControls.delete(t);
            }
          );
        }),
        (t.prototype.start = function (t, r) {
          var e = this;
          if (this.hasMounted) {
            var n = [];
            return (
              this.componentControls.forEach(function (e) {
                var o = e.start(t, {transitionOverride: r});
                n.push(o);
              }),
              Promise.all(n)
            );
          }
          return new Promise(function (n) {
            e.pendingAnimations.push({animation: [t, r], resolve: n});
          });
        }),
        (t.prototype.set = function (t) {
          return (
            Na(
              this.hasMounted,
              'controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.'
            ),
            this.componentControls.forEach(function (r) {
              return r.apply(t);
            })
          );
        }),
        (t.prototype.stop = function () {
          this.componentControls.forEach(function (t) {
            return t.stop();
          });
        }),
        (t.prototype.mount = function () {
          var t = this;
          (this.hasMounted = !0),
            this.pendingAnimations.forEach(function (r) {
              var e = r.animation,
                n = r.resolve;
              return t.start.apply(t, e).then(n);
            });
        }),
        (t.prototype.unmount = function () {
          (this.hasMounted = !1), this.stop();
        }),
        t
      );
    })(),
    Rf = aa.createContext({static: !1}),
    Xc = function (t) {
      return 'string' == typeof t || Array.isArray(t);
    },
    Yo = function (t) {
      return t instanceof Qf;
    },
    Sx = function (t, r, e, n, o) {
      void 0 === n && (n = !1);
      var i,
        a = o.initial,
        $ = o.animate,
        s = o.variants,
        f = o.whileTap,
        u = o.whileHover,
        l = o.layoutId,
        p = aa.useContext(ee),
        c = null == p ? void 0 : p.id;
      (e.isPresenceRoot = t.presenceId !== c),
        void 0 !== (null == p ? void 0 : p.initial) && (a = p.initial),
        !1 !== a || Yo($) ? 'boolean' != typeof a && (i = a) : (i = $);
      var v = aa.useRef(!1),
        S = s || Xc($) || Xc(f) || Xc(u) || Yo($),
        m = Xc(i) ? i : t.initial,
        d = Xc($) ? $ : t.animate,
        U = n ? m : null,
        J = S && Xc(d) ? d : null,
        h = aa.useMemo(
          function () {
            return {
              controls: S ? r : t.controls,
              initial: m,
              animate: d,
              visualElement: e,
              hasMounted: v,
              isReducedMotion: t.isReducedMotion,
              presenceId: c,
            };
          },
          [U, J, t.isReducedMotion, $, l, c]
        );
      return (
        (h.static = n),
        Rx(function () {
          var e = i || t.initial;
          e && r.apply(e);
        }, !n),
        aa.useEffect(function () {
          v.current = !0;
        }, []),
        h
      );
    },
    Mi = function (t) {
      var r = t.animate,
        e = t.variants,
        n = t.inherit;
      return (void 0 === n || n) && !!e && (!r || r instanceof Qf);
    },
    Ni = function (t) {
      return t instanceof Kf;
    };
  function Tx(t, r) {
    var e = de(Vx);
    for (var n in e) {
      var o = ae(n) || Di(n),
        i = r[n],
        a = r.style && r.style[n],
        $ = i && Ni(r[n]),
        s = a && Ni(r.style[n]);
      ((o && !i && !a) || (!o && !$ && !s)) && (t.removeValue(n), delete e[n]);
    }
    Zo(t, e, r),
      r.style && Zo(t, e, r.style, !0),
      r.transformValues && (t.reactStyle = r.transformValues(t.reactStyle));
  }
  function Zo(t, r, e, n) {
    for (var o in (void 0 === n && (n = !1), n && (t.reactStyle = {}), e)) {
      var i = e[o],
        a = !1;
      if (Ni(i)) Ux.has(o) || (t.addValue(o, i), (a = !0));
      else if (ae(o) || Di(o)) {
        if (t.hasValue(o)) {
          if (i !== r[o]) {
            t.getValue(o).set(i);
          }
        } else t.addValue(o, lb(i));
        a = !0;
      } else n && (t.reactStyle[o] = i);
      a && (r[o] = i);
    }
  }
  var Ux = new Set([]),
    Vx = function () {
      return {};
    },
    $o = function (t) {
      return ce(t) ? t[t.length - 1] || 0 : t;
    },
    Wx = function (t) {
      return /^\-?\d*\.?\d+$/.test(t);
    },
    Xx = function (t) {
      var r = {};
      return (
        t.forEachValue(function (t, e) {
          return (r[e] = t.get());
        }),
        r
      );
    },
    Yx = function (t) {
      var r = {};
      return (
        t.forEachValue(function (t, e) {
          return (r[e] = t.getVelocity());
        }),
        r
      );
    },
    Zx = function (t) {
      return 'function' == typeof t;
    },
    $x = function (t) {
      return Array.isArray(t);
    },
    _x = (function () {
      function t(t, r) {
        var e = this,
          n = r.makeTargetAnimatable;
        (this.props = {}),
          (this.variants = {}),
          (this.baseTarget = {}),
          (this.overrides = []),
          (this.resolvedOverrides = []),
          (this.activeOverrides = new Set()),
          (this.isAnimating = new Set()),
          (this.hasValue = function (t) {
            return !e.visualElement.hasValue(t);
          }),
          (this.visualElement = t),
          (this.makeTargetAnimatable = n),
          this.visualElement.forEachValue(function (t, r) {
            return (e.baseTarget[r] = t.get());
          });
      }
      return (
        (t.prototype.setProps = function (t) {
          this.props = t;
        }),
        (t.prototype.setVariants = function (t) {
          t && (this.variants = t);
        }),
        (t.prototype.setDefaultTransition = function (t) {
          t && (this.defaultTransition = t);
        }),
        (t.prototype.setValues = function (t, r) {
          var e = void 0 === r ? {} : r,
            n = e.isActive,
            o = void 0 === n ? new Set() : n,
            i = e.priority,
            a = this.resolveVariant(t),
            $ = a.target,
            s = a.transitionEnd;
          for (var f in ($ = this.transformValues(ba(ba({}, $), s)))) {
            if (o.has(f)) return;
            if ((o.add(f), $)) {
              var u = $o($[f]);
              if (this.visualElement.hasValue(f)) {
                var l = this.visualElement.getValue(f);
                l && l.set(u);
              } else this.visualElement.addValue(f, lb(u));
              i || (this.baseTarget[f] = u);
            }
          }
        }),
        (t.prototype.transformValues = function (t) {
          var r = this.props.transformValues;
          return r ? r(t) : t;
        }),
        (t.prototype.checkForNewValues = function (t) {
          var r = Object.keys(t).filter(this.hasValue),
            e = r.length;
          if (e)
            for (var n = 0; n < e; n++) {
              var o = r[n],
                i = t[o],
                a = null;
              if ((Array.isArray(i) && (a = i[0]), null === a)) {
                var $ = this.visualElement.readNativeValue(o);
                (a = void 0 !== $ ? $ : t[o]),
                  Na(
                    null !== a,
                    'No initial value for "' +
                      o +
                      '" can be inferred. Ensure an initial value for "' +
                      o +
                      '" is defined on the component.'
                  );
              }
              'string' == typeof a && Wx(a)
                ? (a = parseFloat(a))
                : !Cw(a) && kb.test(i) && (a = kb.getAnimatableNone(i)),
                this.visualElement.addValue(o, lb(a)),
                (this.baseTarget[o] = a);
            }
        }),
        (t.prototype.resolveVariant = function (t) {
          if (!t)
            return {target: void 0, transition: void 0, transitionEnd: void 0};
          Zx(t) &&
            (t = t(
              this.props.custom,
              Xx(this.visualElement),
              Yx(this.visualElement)
            ));
          var r = t.transition;
          return {
            transition: void 0 === r ? this.defaultTransition : r,
            transitionEnd: t.transitionEnd,
            target: wa(t, ['transition', 'transitionEnd']),
          };
        }),
        (t.prototype.getHighestPriority = function () {
          return this.activeOverrides.size
            ? Math.max.apply(Math, Array.from(this.activeOverrides))
            : 0;
        }),
        (t.prototype.setOverride = function (t, r) {
          (this.overrides[r] = t),
            this.children &&
              this.children.forEach(function (e) {
                return e.setOverride(t, r);
              });
        }),
        (t.prototype.startOverride = function (t) {
          var r = this.overrides[t];
          if (r) return this.start(r, {priority: t});
        }),
        (t.prototype.clearOverride = function (t) {
          var r = this;
          if (
            (this.children &&
              this.children.forEach(function (r) {
                return r.clearOverride(t);
              }),
            this.overrides[t])
          ) {
            this.activeOverrides.delete(t);
            var e = this.getHighestPriority();
            if ((this.resetIsAnimating(), e))
              this.overrides[e] && this.startOverride(e);
            var n = this.resolvedOverrides[t];
            if (n) {
              var o = {};
              for (var i in this.baseTarget)
                void 0 !== n[i] && (o[i] = this.baseTarget[i]);
              this.onStart(),
                this.animate(o).then(function () {
                  return r.onComplete();
                });
            }
          }
        }),
        (t.prototype.apply = function (t) {
          return Array.isArray(t)
            ? this.applyVariantLabels(t)
            : 'string' == typeof t
            ? this.applyVariantLabels([t])
            : void this.setValues(t);
        }),
        (t.prototype.applyVariantLabels = function (t) {
          var r = this,
            e = new Set();
          Sc(t)
            .reverse()
            .forEach(function (n) {
              var o = r.resolveVariant(r.variants[n]),
                i = o.target,
                a = o.transitionEnd;
              a && r.setValues(a, {isActive: e}),
                i && r.setValues(i, {isActive: e}),
                r.children &&
                  r.children.size &&
                  r.children.forEach(function (r) {
                    return r.applyVariantLabels(t);
                  });
            });
        }),
        (t.prototype.start = function (t, r) {
          var e,
            n = this;
          return (
            void 0 === r && (r = {}),
            r.priority && this.activeOverrides.add(r.priority),
            this.resetIsAnimating(r.priority),
            (e = $x(t)
              ? this.animateVariantLabels(t, r)
              : 'string' == typeof t
              ? this.animateVariant(t, r)
              : this.animate(t, r)),
            this.onStart(),
            e.then(function () {
              return n.onComplete();
            })
          );
        }),
        (t.prototype.animate = function (t, r) {
          var e = this,
            n = void 0 === r ? {} : r,
            o = n.delay,
            i = void 0 === o ? 0 : o,
            a = n.priority,
            $ = void 0 === a ? 0 : a,
            s = n.transitionOverride,
            f = this.resolveVariant(t),
            u = f.target,
            l = f.transition,
            p = f.transitionEnd;
          if ((s && (l = s), !u)) return Promise.resolve();
          (u = this.transformValues(u)),
            p && (p = this.transformValues(p)),
            this.checkForNewValues(u);
          var c = this.transformValues(by(u, l, this.visualElement));
          if (this.makeTargetAnimatable) {
            var v = this.makeTargetAnimatable(this.visualElement, u, c, p);
            (u = v.target), (p = v.transitionEnd);
          }
          $ && (this.resolvedOverrides[$] = u), this.checkForNewValues(u);
          var S = [];
          for (var m in u) {
            var d = this.visualElement.getValue(m);
            if (d && u && void 0 !== u[m]) {
              var U = u[m];
              $ || (this.baseTarget[m] = $o(U)),
                this.isAnimating.has(m) ||
                  (this.isAnimating.add(m),
                  S.push(Ii(m, d, U, ba({delay: i}, l))));
            }
          }
          var J = Promise.all(S);
          return p
            ? J.then(function () {
                e.setValues(p, {priority: $});
              })
            : J;
        }),
        (t.prototype.animateVariantLabels = function (t, r) {
          var e = this,
            n = Sc(t)
              .reverse()
              .map(function (t) {
                return e.animateVariant(t, r);
              });
          return Promise.all(n);
        }),
        (t.prototype.animateVariant = function (t, r) {
          var e = this,
            n = !1,
            o = 0,
            i = 0,
            a = 1,
            $ = (r && r.priority) || 0,
            s = this.variants[t],
            f = s
              ? function () {
                  return e.animate(s, r);
                }
              : function () {
                  return Promise.resolve();
                },
            u = this.children
              ? function () {
                  return e.animateChildren(t, o, i, a, $);
                }
              : function () {
                  return Promise.resolve();
                };
          if (s && this.children) {
            var l = this.resolveVariant(s).transition;
            l &&
              ((n = l.when || n),
              (o = l.delayChildren || o),
              (i = l.staggerChildren || i),
              (a = l.staggerDirection || a));
          }
          if (n) {
            var p = 'beforeChildren' === n ? [f, u] : [u, f],
              c = p[1];
            return (0, p[0])().then(c);
          }
          return Promise.all([f(), u()]);
        }),
        (t.prototype.animateChildren = function (t, r, e, n, o) {
          if (
            (void 0 === r && (r = 0),
            void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === o && (o = 0),
            !this.children)
          )
            return Promise.resolve();
          var i = [],
            a = (this.children.size - 1) * e,
            $ =
              1 === n
                ? function (t) {
                    return t * e;
                  }
                : function (t) {
                    return a - t * e;
                  };
          return (
            Array.from(this.children).forEach(function (e, n) {
              var a = e.animateVariant(t, {priority: o, delay: r + $(n)});
              i.push(a);
            }),
            Promise.all(i)
          );
        }),
        (t.prototype.onStart = function () {
          var t = this.props.onAnimationStart;
          t && t();
        }),
        (t.prototype.onComplete = function () {
          var t = this.props.onAnimationComplete;
          t && t();
        }),
        (t.prototype.checkOverrideIsAnimating = function (t) {
          for (var r = this.overrides.length, e = t + 1; e < r; e++) {
            var n = this.resolvedOverrides[e];
            if (n) for (var o in n) this.isAnimating.add(o);
          }
        }),
        (t.prototype.resetIsAnimating = function (t) {
          void 0 === t && (t = 0),
            this.isAnimating.clear(),
            t < this.getHighestPriority() && this.checkOverrideIsAnimating(t),
            this.children &&
              this.children.forEach(function (r) {
                return r.resetIsAnimating(t);
              });
        }),
        (t.prototype.stop = function () {
          this.visualElement.forEachValue(function (t) {
            return t.stop();
          });
        }),
        (t.prototype.addChild = function (t) {
          this.children || (this.children = new Set()),
            this.children.add(t),
            this.overrides.forEach(function (r, e) {
              r && t.setOverride(r, e);
            });
        }),
        (t.prototype.removeChild = function (t) {
          this.children && this.children.delete(t);
        }),
        (t.prototype.resetChildren = function () {
          this.children && this.children.clear();
        }),
        t
      );
    })();
  function ay(t, r) {
    if (r) return (r[t] || r.default || r).from;
  }
  function by(t, r, e) {
    var n,
      o,
      i = {};
    for (var a in t)
      i[a] =
        null !== (n = ay(a, r)) && void 0 !== n
          ? n
          : null === (o = e.getValue(a)) || void 0 === o
          ? void 0
          : o.get();
    return i;
  }
  function cy(t, r, e) {
    var n = Mi(r),
      o = r.variants,
      i = r.transition,
      a = aa.useContext(Rf).controls,
      $ = aa.useContext(ee),
      s = de(function () {
        return new _x(t, e);
      });
    return (
      ($ && !$.isPresent) ||
        (s.resetChildren(),
        s.setProps(r),
        s.setVariants(o),
        s.setDefaultTransition(i)),
      aa.useEffect(function () {
        n && a && a.addChild(s);
      }),
      aa.useEffect(function () {
        return function () {
          r.onAnimationComplete;
          var t = wa(r, ['onAnimationComplete']);
          s.setProps(t), a && a.removeChild(s);
        };
      }, []),
      s
    );
  }
  var Oi = aa.createContext({
    transformPagePoint: function (t) {
      return t;
    },
    features: [],
  });
  function _o(t) {
    var r = null;
    return function () {
      return (
        null === r &&
        ((r = t),
        function () {
          r = null;
        })
      );
    };
  }
  var ap = _o('dragHorizontal'),
    bp = _o('dragVertical');
  function cp(t) {
    var r = !1;
    if ('y' === t) r = bp();
    else if ('x' === t) r = ap();
    else {
      var e = ap(),
        n = bp();
      e && n
        ? (r = function () {
            e(), n();
          })
        : (e && e(), n && n());
    }
    return r;
  }
  var dy = !1,
    ey = 'undefined' != typeof window;
  ey &&
    document.addEventListener(
      'touchmove',
      function (t) {
        dy && t.preventDefault();
      },
      {passive: !1}
    );
  var fy = function () {
      return (dy = !0);
    },
    dp = function () {
      return (dy = !1);
    };
  function Pi(t, r, e, n) {
    if (e)
      return (
        t.addEventListener(r, e, n),
        function () {
          return t.removeEventListener(r, e, n);
        }
      );
  }
  function gy(t, r, e, n) {
    aa.useEffect(
      function () {
        var o = t.current;
        if (e && o) return Pi(o, r, e, n);
      },
      [t, r, e, n]
    );
  }
  function ep(t) {
    return 'undefined' != typeof PointerEvent && t instanceof PointerEvent
      ? !('mouse' !== t.pointerType)
      : t instanceof MouseEvent;
  }
  function fp(t) {
    return !!t.touches;
  }
  function hy(t) {
    if (t)
      return function (r) {
        var e = r instanceof MouseEvent;
        (!e || (e && 0 === r.button)) && t(r);
      };
  }
  var iy = {pageX: 0, pageY: 0};
  function jy(t, r) {
    void 0 === r && (r = 'page');
    var e = t.touches[0] || t.changedTouches[0] || iy;
    return {x: e[r + 'X'], y: e[r + 'Y']};
  }
  function ky(t, r) {
    return void 0 === r && (r = 'page'), {x: t[r + 'X'], y: t[r + 'Y']};
  }
  function Qi(t, r) {
    return void 0 === r && (r = 'page'), {point: fp(t) ? jy(t, r) : ky(t, r)};
  }
  function gp(t) {
    return Qi(t, 'client');
  }
  var Ri,
    hp = function (t, r) {
      if ((void 0 === r && (r = !1), t)) {
        var e = function (r) {
          return t(r, Qi(r));
        };
        return r ? hy(e) : e;
      }
    },
    Si = 'undefined' != typeof window,
    ly = function () {
      return Si && null === window.onpointerdown;
    },
    my = function () {
      return Si && null === window.ontouchstart;
    },
    ny = function () {
      return Si && null === window.onmousedown;
    },
    oy = {
      pointerdown: 'mousedown',
      pointermove: 'mousemove',
      pointerup: 'mouseup',
      pointercancel: 'mousecancel',
      pointerover: 'mouseover',
      pointerout: 'mouseout',
      pointerenter: 'mouseenter',
      pointerleave: 'mouseleave',
    },
    py = {
      pointerdown: 'touchstart',
      pointermove: 'touchmove',
      pointerup: 'touchend',
      pointercancel: 'touchcancel',
    };
  function ip(t) {
    return ly() ? t : my() ? py[t] : ny() ? oy[t] : t;
  }
  function Sf(t, r, e, n) {
    return Pi(t, ip(r), hp(e, 'pointerdown' === r), n);
  }
  function Tf(t, r, e, n) {
    return gy(t, ip(r), hp(e, 'pointerdown' === r), n);
  }
  !(function (t) {
    (t.subtract = function (t, r) {
      return {x: t.x - r.x, y: t.y - r.y};
    }),
      (t.relativeTo = function (t) {
        var r;
        return function (e) {
          var n = e.x,
            o = e.y,
            i =
              void 0 !== r
                ? r
                : (r = 'string' == typeof t ? document.getElementById(t) : t);
          if (i) {
            var a = i.getBoundingClientRect();
            return {
              x: n - a.left - window.scrollX,
              y: o - a.top - window.scrollY,
            };
          }
        };
      });
  })(Ri || (Ri = {}));
  var jp = (function () {
    function t(t, r, e) {
      var n = this,
        o = (void 0 === e ? {} : e).transformPagePoint;
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.updatePoint = function () {
          if (n.lastMoveEvent && n.lastMoveEventInfo) {
            var t = Ui(n.lastMoveEventInfo, n.history),
              r = null !== n.startEvent,
              e = Tn(t.offset, {x: 0, y: 0}) >= 3;
            if (r || e) {
              var o = t.point,
                i = Od().timestamp;
              n.history.push(ba(ba({}, o), {timestamp: i}));
              var a = n.handlers,
                $ = a.onStart,
                s = a.onMove;
              r ||
                ($ && $(n.lastMoveEvent, t), (n.startEvent = n.lastMoveEvent)),
                s && s(n.lastMoveEvent, t);
            }
          }
        }),
        !(fp(t) && t.touches.length > 1))
      ) {
        (this.handlers = r), (this.transformPagePoint = o);
        var i = Ti(Qi(t), this.transformPagePoint),
          a = i.point,
          $ = Od().timestamp;
        this.history = [ba(ba({}, a), {timestamp: $})];
        var s = r.onSessionStart;
        s && s(t, Ui(i, this.history));
        var f = Sf(window, 'pointermove', function (t, r) {
            return n.handlePointerMove(t, r);
          }),
          u = Sf(window, 'pointerup', function (t, r) {
            return n.handlePointerUp(t, r);
          });
        this.removeListeners = function () {
          f && f(), u && u();
        };
      }
    }
    return (
      (t.prototype.handlePointerMove = function (t, r) {
        (this.lastMoveEvent = t),
          (this.lastMoveEventInfo = Ti(r, this.transformPagePoint)),
          ep(t) && 0 === t.buttons
            ? this.handlePointerUp(t, r)
            : Ga.update(this.updatePoint, !0);
      }),
      (t.prototype.handlePointerUp = function (t, r) {
        this.end();
        var e = this.handlers.onEnd;
        if (e) {
          var n = Ui(Ti(r, this.transformPagePoint), this.history);
          e && e(t, n);
        }
      }),
      (t.prototype.updateHandlers = function (t) {
        this.handlers = t;
      }),
      (t.prototype.end = function () {
        this.removeListeners && this.removeListeners(),
          jb.update(this.updatePoint),
          dp();
      }),
      t
    );
  })();
  function Ti(t, r) {
    return r ? {point: r(t.point)} : t;
  }
  function Ui(t, r) {
    var e = t.point;
    return {
      point: e,
      delta: Ri.subtract(e, kp(r)),
      offset: Ri.subtract(e, qy(r)),
      velocity: ry(r, 0.1),
    };
  }
  function qy(t) {
    return t[0];
  }
  function kp(t) {
    return t[t.length - 1];
  }
  function ry(t, r) {
    if (t.length < 2) return {x: 0, y: 0};
    for (
      var e = t.length - 1, n = null, o = kp(t);
      e >= 0 && ((n = t[e]), !(o.timestamp - n.timestamp > Of(r)));

    )
      e--;
    if (!n) return {x: 0, y: 0};
    var i = (o.timestamp - n.timestamp) / 1e3;
    if (0 === i) return {x: 0, y: 0};
    var a = {x: (o.x - n.x) / i, y: (o.y - n.y) / i};
    return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
  }
  function sy(t, r, e) {
    var n = r.min,
      o = r.max;
    return (
      void 0 !== n && t < n
        ? (t = e ? xa(n, t, e) : Math.max(t, n))
        : void 0 !== o && t > o && (t = e ? xa(o, t, e) : Math.min(t, o)),
      t
    );
  }
  function ty(t, r, e, n, o) {
    var i = t - r * e;
    return n ? sy(i, n, o) : i;
  }
  function lp(t, r, e) {
    var n = {},
      o = t.max - t.min;
    return (
      void 0 !== r && (n.min = t.min + r),
      void 0 !== e && (n.max = Math.max(t.min + e - o, t.min + e)),
      n
    );
  }
  function uy(t, r) {
    var e = r.top,
      n = r.left,
      o = r.bottom,
      i = r.right;
    return {x: lp(t.x, n, i), y: lp(t.y, e, o)};
  }
  function mp(t, r) {
    var e,
      n = r.min - t.min,
      o = r.max - t.max;
    return (
      r.max - r.min < t.max - t.min && ((n = (e = [o, n])[0]), (o = e[1])),
      {min: t.min + n, max: t.min + o}
    );
  }
  function vy(t, r) {
    return {x: mp(t.x, r.x), y: mp(t.y, r.y)};
  }
  function wy(t, r, e) {
    var n = t.max - t.min,
      o = xa(r.min, r.max - n, e);
    return {min: o, max: o + n};
  }
  var xy,
    np = new WeakMap(),
    yy = (function () {
      function t(t) {
        var r = t.visualElement;
        (this.isDragging = !1),
          (this.currentDirection = null),
          (this.constraints = !1),
          (this.props = {}),
          (this.cursorProgress = {x: 0.5, y: 0.5}),
          (this.openGlobalLock = null),
          (this.panSession = null),
          (this.visualElement = r),
          this.visualElement.enableLayoutProjection(),
          np.set(r, this);
      }
      return (
        (t.prototype.start = function (t, r) {
          var e = this,
            n = void 0 === r ? {} : r,
            o = n.snapToCursor,
            i = void 0 !== o && o,
            a = n.cursorProgress;
          i && this.snapToCursor(t);
          var $ = this.props.transformPagePoint;
          this.panSession = new jp(
            t,
            {
              onSessionStart: function () {
                fy(), e.stopMotion();
              },
              onStart: function (t, r) {
                var n,
                  o,
                  i = e.props,
                  $ = i.drag,
                  s = i.dragPropagation;
                if (
                  !$ ||
                  s ||
                  (e.openGlobalLock && e.openGlobalLock(),
                  (e.openGlobalLock = cp($)),
                  e.openGlobalLock)
                ) {
                  e.prepareBoundingBox(),
                    e.visualElement.lockTargetBox(),
                    e.resolveDragConstraints();
                  var f = gp(t).point;
                  sc(function (t) {
                    var r = e.visualElement.targetBox[t],
                      n = r.min,
                      o = r.max;
                    e.cursorProgress[t] = a ? a[t] : Wc(n, o, f[t]);
                  }),
                    (e.isDragging = !0),
                    (e.currentDirection = null),
                    null === (o = (n = e.props).onDragStart) ||
                      void 0 === o ||
                      o.call(n, t, r);
                }
              },
              onMove: function (t, r) {
                var n,
                  o,
                  i,
                  a,
                  $ = e.props,
                  s = $.dragPropagation,
                  f = $.dragDirectionLock;
                if (s || e.openGlobalLock) {
                  var u = r.offset;
                  if (f && null === e.currentDirection)
                    return (
                      (e.currentDirection = zy(u)),
                      void (
                        null !== e.currentDirection &&
                        (null === (o = (n = e.props).onDirectionLock) ||
                          void 0 === o ||
                          o.call(n, e.currentDirection))
                      )
                    );
                  e.updateAxis('x', t),
                    e.updateAxis('y', t),
                    null === (a = (i = e.props).onDrag) ||
                      void 0 === a ||
                      a.call(i, t, r),
                    (xy = t);
                }
              },
              onEnd: function (t, r) {
                return e.stop(t, r);
              },
            },
            {transformPagePoint: $}
          );
        }),
        (t.prototype.prepareBoundingBox = function () {
          var t = this.visualElement.getInstance(),
            r = t.style.transform;
          this.visualElement.resetTransform(),
            this.visualElement.measureLayout(),
            (t.style.transform = r),
            this.visualElement.refreshTargetBox();
        }),
        (t.prototype.resolveDragConstraints = function () {
          var t = this.props.dragConstraints;
          this.constraints =
            !!t &&
            (Bi(t)
              ? this.resolveRefConstraints(this.visualElement.box, t)
              : uy(this.visualElement.box, t));
        }),
        (t.prototype.resolveRefConstraints = function (t, r) {
          var e = this.props,
            n = e.onMeasureDragConstraints,
            o = e.transformPagePoint,
            i = r.current;
          Na(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          ),
            (this.constraintsBox = Lo(i, o));
          var a = vy(t, this.constraintsBox);
          if (n) {
            var $ = n(ww(a));
            $ && (a = mo($));
          }
          return a;
        }),
        (t.prototype.cancelDrag = function () {
          dp(),
            (this.isDragging = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = null),
            !this.props.dragPropagation &&
              this.openGlobalLock &&
              (this.openGlobalLock(), (this.openGlobalLock = null));
        }),
        (t.prototype.stop = function (t, r) {
          var e;
          this.visualElement.unlockTargetBox(),
            null === (e = this.panSession) || void 0 === e || e.end(),
            (this.panSession = null);
          var n = this.isDragging;
          if ((this.cancelDrag(), n)) {
            var o = this.props,
              i = o.dragMomentum,
              a = o.dragElastic,
              $ = o.onDragEnd;
            if (i || a) {
              var s = r.velocity;
              this.animateDragEnd(s);
            }
            null == $ || $(t, r);
          }
        }),
        (t.prototype.snapToCursor = function (t) {
          this.prepareBoundingBox(),
            (this.cursorProgress.x = 0.5),
            (this.cursorProgress.y = 0.5),
            this.updateAxis('x', t),
            this.updateAxis('y', t);
        }),
        (t.prototype.updateAxis = function (t, r) {
          var e,
            n = this.props,
            o = n.drag,
            i = n.dragElastic;
          if (Vi(t, o, this.currentDirection)) {
            var a = this.visualElement.box[t],
              $ = a.max - a.min,
              s = this.cursorProgress[t],
              f = ty(
                gp(r).point[t],
                $,
                s,
                null === (e = this.constraints) || void 0 === e ? void 0 : e[t],
                i
              );
            this.visualElement.setAxisTarget(t, f, f + $);
          }
        }),
        (t.prototype.updateProps = function (t) {
          var r = t.drag,
            e = void 0 !== r && r,
            n = t.dragDirectionLock,
            o = void 0 !== n && n,
            i = t.dragPropagation,
            a = void 0 !== i && i,
            $ = t.dragConstraints,
            s = void 0 !== $ && $,
            f = t.dragElastic,
            u = void 0 === f ? 0.35 : f,
            l = t.dragMomentum,
            p = void 0 === l || l,
            c = wa(t, [
              'drag',
              'dragDirectionLock',
              'dragPropagation',
              'dragConstraints',
              'dragElastic',
              'dragMomentum',
            ]);
          this.props = ba(
            {
              drag: e,
              dragDirectionLock: o,
              dragPropagation: a,
              dragConstraints: s,
              dragElastic: u,
              dragMomentum: p,
            },
            c
          );
        }),
        (t.prototype.animateDragEnd = function (t) {
          var r = this,
            e = this.props,
            n = e.drag,
            o = e.dragMomentum,
            i = e.dragElastic,
            a = e.dragTransition,
            $ = sc(function (e) {
              if (Vi(e, n, r.currentDirection)) {
                var $ = r.constraints ? r.constraints[e] : {},
                  s = i ? 200 : 1e6,
                  f = i ? 40 : 1e7,
                  u = ba(
                    ba(
                      {
                        type: 'inertia',
                        velocity: o ? t[e] : 0,
                        bounceStiffness: s,
                        bounceDamping: f,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                      },
                      a
                    ),
                    $
                  );
                return r.visualElement.startLayoutAxisAnimation(e, u);
              }
            });
          return Promise.all($).then(function () {
            var t, e;
            null === (e = (t = r.props).onDragTransitionEnd) ||
              void 0 === e ||
              e.call(t);
          });
        }),
        (t.prototype.stopMotion = function () {
          this.visualElement.stopLayoutAnimation();
        }),
        (t.prototype.scalePoint = function () {
          var t = this,
            r = this.props,
            e = r.drag,
            n = r.dragConstraints;
          if (Bi(n) && this.constraintsBox) {
            this.stopMotion();
            var o = {x: 0, y: 0};
            sc(function (r) {
              o[r] = Do(t.visualElement.targetBox[r], t.constraintsBox[r]);
            }),
              this.prepareBoundingBox(),
              this.resolveDragConstraints(),
              sc(function (r) {
                if (Vi(r, e, null)) {
                  var n = wy(
                      t.visualElement.targetBox[r],
                      t.constraintsBox[r],
                      o[r]
                    ),
                    i = n.min,
                    a = n.max;
                  t.visualElement.setAxisTarget(r, i, a);
                }
              });
          }
        }),
        (t.prototype.mount = function (t) {
          var r = this,
            e = Sf(t.getInstance(), 'pointerdown', function (t) {
              var e = r.props,
                n = e.drag,
                o = e.dragListener;
              n && (void 0 === o || o) && r.start(t);
            }),
            n = Pi(window, 'resize', function () {
              r.scalePoint();
            }),
            o = t.onLayoutUpdate(function () {
              r.isDragging && r.resolveDragConstraints();
            }),
            i = t.prevSnapshot;
          return (
            (null == i ? void 0 : i.isDragging) &&
              this.start(xy, {cursorProgress: i.cursorProgress}),
            function () {
              null == e || e(),
                null == n || n(),
                null == o || o(),
                r.cancelDrag();
            }
          );
        }),
        t
      );
    })();
  function Vi(t, r, e) {
    return !((!0 !== r && r !== t) || (null !== e && e !== t));
  }
  function zy(t, r) {
    void 0 === r && (r = 10);
    var e = null;
    return Math.abs(t.y) > r ? (e = 'y') : Math.abs(t.x) > r && (e = 'x'), e;
  }
  function Ay(t, r) {
    var e = t.dragControls,
      n = aa.useContext(Oi).transformPagePoint,
      o = de(function () {
        return new yy({visualElement: r});
      });
    o.updateProps(ba(ba({}, t), {transformPagePoint: n})),
      aa.useEffect(
        function () {
          return e && e.subscribe(o);
        },
        [o]
      ),
      aa.useEffect(function () {
        return o.mount(r);
      }, []);
  }
  var Yc = function (t) {
      return function (r) {
        return t(r), null;
      };
    },
    By = {
      key: 'drag',
      shouldRender: function (t) {
        return !!t.drag;
      },
      Component: Yc(function (t) {
        var r = t.visualElement;
        return Ay(wa(t, ['visualElement']), r);
      }),
    };
  function Wi(t) {
    return aa.useEffect(function () {
      return function () {
        return t();
      };
    }, []);
  }
  function Cy(t, r) {
    var e = t.onPan,
      n = t.onPanStart,
      o = t.onPanEnd,
      i = t.onPanSessionStart,
      a = e || n || o || i,
      $ = aa.useRef(null),
      s = aa.useContext(Oi).transformPagePoint,
      f = {
        onSessionStart: i,
        onStart: n,
        onMove: e,
        onEnd: function (t, r) {
          ($.current = null), o && o(t, r);
        },
      };
    aa.useEffect(function () {
      null !== $.current && $.current.updateHandlers(f);
    }),
      Tf(
        r,
        'pointerdown',
        a &&
          function (t) {
            $.current = new jp(t, f, {transformPagePoint: s});
          }
      ),
      Wi(function () {
        return $.current && $.current.end();
      });
  }
  var op = function (t, r) {
      return !!r && (t === r || op(t, r.parentElement));
    },
    Dy = ['whileHover', 'whileTap', 'whileDrag'],
    pp = function (t) {
      return Dy.indexOf(t) + 1;
    },
    Xi = pp('whileTap');
  function Ey(t, r) {
    var e = t.onTap,
      n = t.onTapStart,
      o = t.onTapCancel,
      i = t.whileTap,
      a = t.controls,
      $ = e || n || o || i,
      s = aa.useRef(!1),
      f = aa.useRef(null);
    function u() {
      f.current && f.current(), (f.current = null);
    }
    i && a && a.setOverride(i, Xi);
    var l = aa.useRef(null);
    (l.current = function (t, n) {
      var $ = r.current;
      if ((u(), s.current && $)) {
        (s.current = !1), a && i && a.clearOverride(Xi);
        var f = cp(!0);
        f && (f(), op($, t.target) ? e && e(t, n) : o && o(t, n));
      }
    }),
      Tf(
        r,
        'pointerdown',
        $
          ? function (t, e) {
              u(),
                (f.current = Sf(window, 'pointerup', function (t, r) {
                  return l.current(t, r);
                })),
                r.current &&
                  !s.current &&
                  ((s.current = !0),
                  n && n(t, e),
                  a && i && a.startOverride(Xi));
            }
          : void 0
      ),
      Wi(u);
  }
  var Yi = pp('whileHover'),
    qp = function (t) {
      return function (r, e) {
        ep(r) && t(r, e);
      };
    };
  function Fy(t, r) {
    var e = t.whileHover,
      n = t.onHoverStart,
      o = t.onHoverEnd,
      i = t.controls;
    e && i && i.setOverride(e, Yi),
      Tf(
        r,
        'pointerenter',
        qp(function (t, r) {
          n && n(t, r), e && i && i.startOverride(Yi);
        })
      ),
      Tf(
        r,
        'pointerleave',
        qp(function (t, r) {
          o && o(t, r), e && i && i.clearOverride(Yi);
        })
      );
  }
  function Gy(t, r) {
    Cy(t, r), Ey(t, r), Fy(t, r);
  }
  var _b,
    Hy = [
      'onPan',
      'onPanStart',
      'onPanEnd',
      'onPanSessionStart',
      'onTap',
      'onTapStart',
      'onTapCancel',
      'whileTap',
      'whileHover',
      'onHoverStart',
      'onHoverEnd',
    ],
    Iy = {
      key: 'gestures',
      shouldRender: function (t) {
        return Hy.some(function (r) {
          return t.hasOwnProperty(r);
        });
      },
      Component: Yc(function (t) {
        var r = t.visualElement;
        Gy(wa(t, ['visualElement']), r);
      }),
    },
    Jy = {
      key: 'exit',
      shouldRender: function (t) {
        return !!t.exit && !Mi(t);
      },
      Component: Yc(function (t) {
        var r = t.animate,
          e = t.controls,
          n = t.exit,
          o = Ro(),
          i = o[0],
          a = o[1],
          $ = aa.useContext(ee),
          s = aa.useRef(!1),
          f = void 0 !== (null == $ ? void 0 : $.custom) ? $.custom : t.custom;
        aa.useEffect(
          function () {
            i
              ? !s.current ||
                !r ||
                'boolean' == typeof r ||
                r instanceof Qf ||
                e.start(r)
              : (!s.current &&
                  n &&
                  (e.setProps(ba(ba({}, t), {custom: f})), e.start(n).then(a)),
                (s.current = !0)),
              i && (s.current = !1);
          },
          [r, e, f, n, i, a, t]
        );
      }),
    };
  function Ky(t, r) {
    if (null === r) return !1;
    var e = r.length;
    if (e !== t.length) return !1;
    for (var n = 0; n < e; n++) if (r[n] !== t[n]) return !1;
    return !0;
  }
  !(function (t) {
    (t.Target = 'Target'),
      (t.VariantLabel = 'VariantLabel'),
      (t.AnimationSubscription = 'AnimationSubscription');
  })(_b || (_b = {}));
  var Ly = function (t, r) {
    return (
      void 0 !== r &&
      (Array.isArray(t) && Array.isArray(r) ? !Ky(r, t) : t !== r)
    );
  };
  function Zi(t, r) {
    void 0 === r && (r = !1);
    t.transition;
    var e = t.transitionEnd,
      n = wa(t, ['transition', 'transitionEnd']);
    return r ? ba(ba({}, n), e) : n;
  }
  function My(t, r, e, n) {
    var o = aa.useRef(!0),
      i = aa.useRef(null);
    i.current || (i.current = Zi(t, !0)),
      aa.useEffect(
        function () {
          var a = {},
            $ = Zi(t),
            s = Zi(t, !0);
          for (var f in $) {
            var u =
                o.current && (!e.hasValue(f) || e.getValue(f).get() !== s[f]),
              l = null !== s[f],
              p = Ly(i.current[f], s[f]);
            l && (p || u) && (a[f] = $[f]);
          }
          (o.current = !1),
            (i.current = ba(ba({}, i.current), s)),
            Object.keys(a).length &&
              r.start(
                ba(ba({}, a), {
                  transition: t.transition || n,
                  transitionEnd: t.transitionEnd,
                })
              );
        },
        [t]
      );
  }
  var $i,
    _i,
    Ny = function (t) {
      return t ? (Array.isArray(t) ? t : [t]) : [];
    },
    aj = function (t) {
      var r = t instanceof Kf ? t.get() : t;
      return Array.from(new Set(Ny(r)));
    },
    Oy = function (t) {
      return [t.join(',')];
    },
    Py = function (t, r) {
      return t.join(',') !== r.join(',');
    };
  function Qy(t, r, e, n) {
    var o = aj(r),
      i = aa.useContext(Rf),
      a = i.hasMounted && i.hasMounted.current,
      $ = aa.useRef(!1);
    aa.useEffect(function () {
      var r = !1;
      e ? ((r = !!a), (o = aj(i.animate))) : (r = $.current || Py(aj(t), o)),
        r && n.start(o),
        ($.current = !0);
    }, Oy(o));
  }
  function Ry(t, r) {
    var e = aa.useMemo(
      function () {
        return t.subscribe(r);
      },
      [t]
    );
    aa.useEffect(
      function () {
        return function () {
          e && e();
        };
      },
      [e]
    );
  }
  var pa,
    fe,
    Sy =
      ((($i = {})[_b.Target] = Yc(function (t) {
        return My(t.animate, t.controls, t.visualElement, t.transition);
      })),
      ($i[_b.VariantLabel] = Yc(function (t) {
        var r = t.animate,
          e = t.inherit,
          n = void 0 === e || e,
          o = t.controls;
        return Qy(t.initial, r, n, o);
      })),
      ($i[_b.AnimationSubscription] = Yc(function (t) {
        return Ry(t.animate, t.controls);
      })),
      $i),
    Ty = function (t) {
      return Array.isArray(t) || 'string' == typeof t;
    },
    rp = function (t) {
      return t.animate instanceof Qf;
    },
    Uy = ['initial', 'animate', 'whileTap', 'whileHover'],
    Vy =
      (((_i = {})[_b.Target] = function (t) {
        return void 0 !== t.animate && !Ty(t.animate) && !rp(t);
      }),
      (_i[_b.VariantLabel] = function (t) {
        return (
          void 0 !== t.variants ||
          Uy.some(function (r) {
            return 'string' == typeof t[r];
          })
        );
      }),
      (_i[_b.AnimationSubscription] = rp),
      _i),
    Wy = function (t) {
      var r = void 0;
      for (var e in _b) Vy[e](t) && (r = e);
      return r ? Sy[r] : void 0;
    };
  function Xy(t, r, e, n) {
    (t.min = xa(r.min, e.min, n)), (t.max = xa(r.max, e.max, n));
  }
  !(function (t) {
    (t[(t.Entering = 0)] = 'Entering'),
      (t[(t.Present = 1)] = 'Present'),
      (t[(t.Exiting = 2)] = 'Exiting');
  })(pa || (pa = {})),
    (function (t) {
      (t[(t.Hide = 0)] = 'Hide'), (t[(t.Show = 1)] = 'Show');
    })(fe || (fe = {}));
  var sp = 1e3,
    Yy = (function (t) {
      function r() {
        var r = (null !== t && t.apply(this, arguments)) || this;
        return (
          (r.frameTarget = {x: {min: 0, max: 0}, y: {min: 0, max: 0}}),
          (r.stopAxisAnimation = {x: void 0, y: void 0}),
          (r.animate = function (t, e, n) {
            void 0 === n && (n = {});
            var o = n.originBox,
              i = n.targetBox,
              a = n.visibilityAction,
              $ = wa(n, ['originBox', 'targetBox', 'visibilityAction']),
              s = r.props,
              f = s.visualElement,
              u = s.layout,
              l = $y((e = o || e), (t = i || t)),
              p = sc(function (n) {
                if ('position' === u) {
                  var o = t[n].max - t[n].min;
                  e[n].max = e[n].min + o;
                }
                if (!f.isTargetBoxLocked)
                  return void 0 === a
                    ? l
                      ? r.animateAxis(n, t[n], e[n], $)
                      : f.setAxisTarget(n, t[n].min, t[n].max)
                    : void (a === fe.Hide ? f.hide() : f.show());
              });
            return (
              f.render(),
              Promise.all(p).then(function () {
                var t, e;
                null === (t = $.onLayoutAnimationComplete) ||
                  void 0 === t ||
                  t.call($),
                  f.isPresent
                    ? (f.presence = pa.Present)
                    : (null === (e = $.onLayoutAnimationComplete) ||
                        void 0 === e ||
                        e.call($),
                      r.safeToRemove());
              })
            );
          }),
          r
        );
      }
      return (
        Hb(r, t),
        (r.prototype.componentDidMount = function () {
          var t = this.props.visualElement;
          t.enableLayoutProjection(),
            (this.unsubLayoutReady = t.onLayoutUpdate(this.animate));
        }),
        (r.prototype.componentWillUnmount = function () {
          var t = this;
          this.unsubLayoutReady(),
            sc(function (r) {
              var e, n;
              return null === (n = (e = t.stopAxisAnimation)[r]) || void 0 === n
                ? void 0
                : n.call(e);
            });
        }),
        (r.prototype.animateAxis = function (t, r, e, n) {
          var o,
            i,
            a = void 0 === n ? {} : n,
            $ = a.transition,
            s = a.crossfadeOpacity;
          null === (i = (o = this.stopAxisAnimation)[t]) ||
            void 0 === i ||
            i.call(o);
          var f = this.props.visualElement,
            u = this.frameTarget[t],
            l = f.axisProgress[t];
          l.clearListeners(), l.set(0), l.set(0);
          var p = s && this.createCrossfadeAnimation(s),
            c = function () {
              var n = l.get() / sp;
              Xy(u, e, r, n),
                f.setAxisTarget(t, u.min, u.max),
                null == p || p(n);
            };
          c();
          var v = Ii(
              'x' === t ? 'layoutX' : 'layoutY',
              l,
              sp,
              $ || this.props.transition || _y
            ),
            S = l.onChange(c);
          return (
            (this.stopAxisAnimation[t] = function () {
              l.stop(), S();
            }),
            v
          );
        }),
        (r.prototype.createCrossfadeAnimation = function (t) {
          var r = this.props.visualElement.getValue('opacity', 0);
          return function (e) {
            r.set(az(xa(0, 1, e))), t.set(bz(xa(1, 0, e)));
          };
        }),
        (r.prototype.safeToRemove = function () {
          var t, r;
          null === (r = (t = this.props).safeToRemove) ||
            void 0 === r ||
            r.call(t);
        }),
        (r.prototype.render = function () {
          return null;
        }),
        r
      );
    })(aa.Component),
    Zy = {
      key: 'animate-layout',
      shouldRender: function (t) {
        return !!t.layout || !!t.layoutId;
      },
      Component: function (t) {
        var r = Ro()[1];
        return aa.createElement(Yy, ba({}, t, {safeToRemove: r}));
      },
    };
  function $y(t, r) {
    return tp(t.x, r.x) || tp(t.y, r.y);
  }
  function tp(t, r) {
    return t.min !== r.min || t.max !== r.max;
  }
  var _y = {duration: 0.45, ease: [0.4, 0, 0.1, 1]};
  function up(t, r, e) {
    return function (n) {
      return n < t ? 0 : n > r ? 1 : e(Wc(t, r, n));
    };
  }
  var az = up(0, 0.5, pi),
    bz = up(0.5, 0.95, Wd),
    cz = {
      measureLayout: function (t) {
        return t.measureLayout();
      },
      layoutReady: function (t) {
        return t.layoutReady();
      },
    },
    dz = function (t, r) {
      return t.depth - r.depth;
    };
  function vp() {
    var t = new Set();
    return {
      add: function (r) {
        return t.add(r);
      },
      flush: function (r) {
        var e = void 0 === r ? cz : r,
          n = e.measureLayout,
          o = e.layoutReady,
          i = Array.from(t).sort(dz);
        i.forEach(function (t) {
          return t.resetTransform();
        }),
          i.forEach(n),
          i.forEach(o),
          i.forEach(function (t) {
            t.isPresent && (t.presence = pa.Present);
          }),
          t.clear();
      },
    };
  }
  function Uf(t) {
    return !!t.forceUpdate;
  }
  var Q = ya(aa);
  var bj = aa.createContext(vp()),
    ez = (function (t) {
      function r(r) {
        var e = t.call(this, r) || this,
          n = r.syncLayout;
        return (
          Uf(n) ||
            (e.componentDidUpdate = function () {
              return n.flush();
            }),
          e
        );
      }
      return (
        Hb(r, t),
        (r.prototype.componentDidMount = function () {
          var t = this.props,
            r = t.syncLayout,
            e = t.visualElement;
          Uf(r) && r.register(e);
        }),
        (r.prototype.getSnapshotBeforeUpdate = function () {
          var t = this.props,
            r = t.syncLayout,
            e = t.visualElement;
          return (
            Uf(r) ? r.syncUpdate() : (e.snapshotBoundingBox(), r.add(e)), null
          );
        }),
        (r.prototype.componentDidUpdate = function () {}),
        (r.prototype.render = function () {
          return null;
        }),
        r
      );
    })(Q.d.Component),
    fz = {
      key: 'measure-layout',
      shouldRender: function (t) {
        return !!t.drag || !!t.layout || !!t.layoutId;
      },
      Component: function (t) {
        var r = aa.useContext(bj);
        return Q.d.createElement(ez, ba({}, t, {syncLayout: r}));
      },
    },
    gz = [fz, By, Iy, Jy, Zy];
  function hz(t, r, e, n, o, i, a) {
    var $ = aa.useContext(Oi);
    if (t || 'undefined' == typeof window) return null;
    var s = Sc(gz, $.features),
      f = s.length,
      u = [],
      l = Wy(n);
    l &&
      u.push(
        aa.createElement(l, {
          key: 'animation',
          initial: n.initial,
          animate: n.animate,
          variants: n.variants,
          transition: n.transition,
          controls: e,
          inherit: a,
          visualElement: r,
        })
      );
    for (var p = 0; p < f; p++) {
      var c = s[p],
        v = c.shouldRender,
        S = c.key,
        m = c.Component;
      v(n, i) &&
        u.push(
          aa.createElement(
            m,
            ba({key: S}, n, {
              localContext: o,
              parentContext: i,
              visualElement: r,
              controls: e,
            })
          )
        );
    }
    return u;
  }
  function iz(t) {
    var r = aa.useContext(bj);
    Wi(function () {
      Uf(r) && r.remove(t);
    });
  }
  function wp(t, r) {
    var e = r.useVisualElement,
      n = r.render,
      o = r.animationControlsConfig;
    return aa.forwardRef(function (r, i) {
      var a = aa.useContext(Rf),
        $ = Mi(r),
        s = a.static || r.static || !1,
        f = e(t, r, a.visualElement, s, i);
      Tx(f, r);
      var u = cy(f, r, o),
        l = Sx(a, u, f, s, r),
        p = hz(s, f, u, r, l, a, $),
        c = n(t, r, f);
      return (
        iz(f),
        aa.createElement(
          aa.Fragment,
          null,
          aa.createElement(Rf.Provider, {value: l}, c),
          p
        )
      );
    });
  }
  var xp = {
    useVisualElement: vx,
    render: Cx,
    animationControlsConfig: {makeTargetAnimatable: Qx},
  };
  function jz(t) {
    return wp(t, xp);
  }
  var cj = new Map();
  function kz(t, r) {
    return 'custom' === r
      ? t.custom
      : (cj.has(r) || cj.set(r, wp(r, xp)), cj.get(r));
  }
  var ge = new Proxy({custom: jz}, {get: kz});
  function lz(t, r) {
    return r && t !== r.lead
      ? {visibilityAction: fe.Hide}
      : r && t.presence !== pa.Entering && t === r.lead && r.lead !== r.prevLead
      ? {visibilityAction: fe.Show}
      : (t.presence === pa.Entering
          ? (e = null == r ? void 0 : r.getFollowOrigin())
          : t.presence === pa.Exiting &&
            (n = null == r ? void 0 : r.getFollowTarget()),
        {originBox: e, targetBox: n});
    var e, n;
  }
  function mz(t, r) {
    var e,
      n,
      o,
      i = {},
      a = r && r.lead,
      $ = null == a ? void 0 : a.presence;
    return (
      r && t === a
        ? t.presence === pa.Entering
          ? (i.originBox = r.getFollowOrigin())
          : t.presence === pa.Exiting && (i.targetBox = r.getFollowTarget())
        : r &&
          t === r.follow &&
          ((i.transition = r.getLeadTransition()),
          $ === pa.Entering
            ? (i.targetBox = r.getLeadTarget())
            : $ === pa.Exiting && (i.originBox = r.getLeadOrigin())),
      (null === (e = null == r ? void 0 : r.follow) || void 0 === e
        ? void 0
        : e.isPresenceRoot) || (null == a ? void 0 : a.isPresenceRoot)
        ? (r && t !== a
            ? r && t === r.follow
              ? a &&
                $ !== pa.Entering &&
                $ === pa.Exiting &&
                (i.crossfadeOpacity =
                  null === (o = null == r ? void 0 : r.lead) || void 0 === o
                    ? void 0
                    : o.getValue('opacity', 1))
              : (i.visibilityAction = fe.Hide)
            : t.presence === pa.Entering &&
              (i.crossfadeOpacity =
                null === (n = null == r ? void 0 : r.follow) || void 0 === n
                  ? void 0
                  : n.getValue('opacity', 0)),
          i)
        : i
    );
  }
  function nz(t, r) {
    for (
      var e = r[0],
        n = r[1],
        o = void 0,
        i = 0,
        a = void 0,
        $ = t.length,
        s = !1,
        f = $ - 1;
      f >= 0;
      f--
    ) {
      var u = t[f];
      if ((f === $ - 1 && (s = u.isPresent), s)) o = u;
      else {
        var l = t[f - 1];
        l && l.isPresent && (o = u);
      }
      if (o) {
        i = f;
        break;
      }
    }
    if ((o || (o = t[0]), (a = t[i - 1]), o))
      for (f = i - 1; f >= 0; f--) {
        if ((u = t[f]).isPresent) {
          a = u;
          break;
        }
      }
    return (
      o !== e &&
        !s &&
        a === n &&
        t.find(function (t) {
          return t === e;
        }) &&
        (o = e),
      [o, a]
    );
  }
  var oz = (function () {
      function t() {
        (this.order = []), (this.hasChildren = !1);
      }
      return (
        (t.prototype.add = function (t) {
          var r,
            e = t.config.layoutOrder;
          if (void 0 === e) this.order.push(t);
          else {
            var n = this.order.findIndex(function (t) {
              return e <= (t.config.layoutOrder || 0);
            });
            -1 === n &&
              ((t.presence = this.hasChildren ? pa.Entering : pa.Present),
              (n = this.order.length)),
              this.order.splice(n, 0, t);
          }
          if (this.snapshot) {
            (t.prevSnapshot = this.snapshot),
              (t.prevViewportBox = this.snapshot.boundingBox);
            var o = this.snapshot.latestMotionValues;
            for (var i in o)
              t.hasValue(i)
                ? null === (r = t.getValue(i)) || void 0 === r || r.set(o[i])
                : t.addValue(i, lb(o[i]));
          }
          this.hasChildren = !0;
        }),
        (t.prototype.remove = function (t) {
          var r = this.order.findIndex(function (r) {
            return t === r;
          });
          -1 !== r && this.order.splice(r, 1);
        }),
        (t.prototype.updateLeadAndFollow = function () {
          (this.prevLead = this.lead), (this.prevFollow = this.follow);
          var t = nz(this.order, [this.lead, this.follow]),
            r = t[0],
            e = t[1];
          (this.lead = r), (this.follow = e);
        }),
        (t.prototype.updateSnapshot = function () {
          if (this.lead) {
            var t = {
              boundingBox: this.lead.prevViewportBox,
              latestMotionValues: {},
            };
            this.lead.forEachValue(function (r, e) {
              var n = r.get();
              ae(n) || (t.latestMotionValues[e] = n);
            });
            var r = np.get(this.lead);
            r &&
              r.isDragging &&
              ((t.isDragging = !0), (t.cursorProgress = r.cursorProgress)),
              (this.snapshot = t);
          }
        }),
        (t.prototype.isLeadPresent = function () {
          var t;
          return (
            this.lead &&
            (null === (t = this.lead) || void 0 === t ? void 0 : t.presence) !==
              pa.Exiting
          );
        }),
        (t.prototype.shouldStackAnimate = function () {
          return !0;
        }),
        (t.prototype.getFollowOrigin = function () {
          var t;
          return this.follow
            ? this.follow.prevViewportBox
            : null === (t = this.snapshot) || void 0 === t
            ? void 0
            : t.boundingBox;
        }),
        (t.prototype.getFollowTarget = function () {
          var t;
          return null === (t = this.follow) || void 0 === t ? void 0 : t.box;
        }),
        (t.prototype.getLeadOrigin = function () {
          var t;
          return null === (t = this.lead) || void 0 === t
            ? void 0
            : t.prevViewportBox;
        }),
        (t.prototype.getLeadTarget = function () {
          var t;
          return null === (t = this.lead) || void 0 === t ? void 0 : t.box;
        }),
        (t.prototype.getLeadTransition = function () {
          var t;
          return null === (t = this.lead) || void 0 === t
            ? void 0
            : t.config.transition;
        }),
        t
      );
    })(),
    j = (function (t) {
      function r() {
        var r = (null !== t && t.apply(this, arguments)) || this;
        return (
          (r.children = new Set()),
          (r.stacks = new Map()),
          (r.hasMounted = !1),
          (r.updateScheduled = !1),
          (r.renderScheduled = !1),
          (r.syncContext = ba(ba({}, vp()), {
            syncUpdate: function (t) {
              return r.scheduleUpdate(t);
            },
            forceUpdate: function () {
              (r.syncContext = ba({}, r.syncContext)), r.scheduleUpdate(!0);
            },
            register: function (t) {
              return r.addChild(t);
            },
            remove: function (t) {
              return r.removeChild(t);
            },
          })),
          r
        );
      }
      return (
        Hb(r, t),
        (r.prototype.componentDidMount = function () {
          (this.hasMounted = !0), this.updateStacks();
        }),
        (r.prototype.componentDidUpdate = function () {
          this.startLayoutAnimation();
        }),
        (r.prototype.shouldComponentUpdate = function () {
          return (this.renderScheduled = !0), !0;
        }),
        (r.prototype.startLayoutAnimation = function () {
          var t = this;
          this.renderScheduled = this.updateScheduled = !1;
          var r = this.props.type;
          this.children.forEach(function (t) {
            t.isPresent
              ? t.presence !== pa.Entering &&
                (t.presence =
                  t.presence === pa.Exiting ? pa.Entering : pa.Present)
              : (t.presence = pa.Exiting);
          }),
            this.updateStacks();
          var e = 'crossfade' === r ? mz : lz,
            n = {
              measureLayout: function (t) {
                return t.measureLayout();
              },
              layoutReady: function (r) {
                var n = r.layoutId;
                r.layoutReady(e(r, t.getStack(n)));
              },
            };
          this.children.forEach(function (r) {
            return t.syncContext.add(r);
          }),
            this.syncContext.flush(n),
            this.stacks.forEach(function (t) {
              return (t.snapshot = void 0);
            });
        }),
        (r.prototype.updateStacks = function () {
          this.stacks.forEach(function (t) {
            return t.updateLeadAndFollow();
          });
        }),
        (r.prototype.scheduleUpdate = function (t) {
          void 0 === t && (t = !1),
            (!t && this.updateScheduled) ||
              ((this.updateScheduled = !0),
              this.children.forEach(function (t) {
                return t.snapshotBoundingBox();
              }),
              this.stacks.forEach(function (t) {
                return t.updateSnapshot();
              }),
              (!t && this.renderScheduled) ||
                ((this.renderScheduled = !0), this.forceUpdate()));
        }),
        (r.prototype.addChild = function (t) {
          this.children.add(t),
            this.addToStack(t),
            (t.presence = this.hasMounted ? pa.Entering : pa.Present);
        }),
        (r.prototype.removeChild = function (t) {
          this.scheduleUpdate(),
            this.children.delete(t),
            this.removeFromStack(t);
        }),
        (r.prototype.addToStack = function (t) {
          var r = this.getStack(t.layoutId);
          null == r || r.add(t);
        }),
        (r.prototype.removeFromStack = function (t) {
          var r = this.getStack(t.layoutId);
          null == r || r.remove(t);
        }),
        (r.prototype.getStack = function (t) {
          if (void 0 !== t)
            return (
              !this.stacks.has(t) && this.stacks.set(t, new oz()),
              this.stacks.get(t)
            );
        }),
        (r.prototype.render = function () {
          return aa.createElement(
            bj.Provider,
            {value: this.syncContext},
            this.props.children
          );
        }),
        r
      );
    })(aa.Component);
  function pz() {
    return {
      scrollX: lb(0),
      scrollY: lb(0),
      scrollXProgress: lb(0),
      scrollYProgress: lb(0),
    };
  }
  var qz = 'undefined' != typeof window,
    k = qz ? aa.useLayoutEffect : aa.useEffect;
  var l = pz();
  var yp = lb(null);
  if ('undefined' != typeof window)
    if (window.matchMedia) {
      var zp = window.matchMedia('(prefers-reduced-motion)'),
        Ap = function () {
          return yp.set(zp.matches);
        };
      zp.addListener(Ap), Ap();
    } else yp.set(!1);
  var m = (function () {
    function t() {
      this.componentControls = new Set();
    }
    return (
      (t.prototype.subscribe = function (t) {
        var r = this;
        return (
          this.componentControls.add(t),
          function () {
            return r.componentControls.delete(t);
          }
        );
      }),
      (t.prototype.start = function (t, r) {
        this.componentControls.forEach(function (e) {
          e.start(t.nativeEvent || t, r);
        });
      }),
      t
    );
  })();
  var n = (function (t) {
    function r() {
      var r = (null !== t && t.apply(this, arguments)) || this;
      return (r.initialState = {}), r;
    }
    return (
      Hb(r, t),
      (r.prototype.build = function () {}),
      (r.prototype.clean = function () {}),
      (r.prototype.getBoundingBox = function () {
        return {x: {min: 0, max: 0}, y: {min: 0, max: 0}};
      }),
      (r.prototype.readNativeValue = function (t) {
        return this.initialState[t] || 0;
      }),
      (r.prototype.render = function () {
        this.build();
      }),
      r
    );
  })(lo);
  var rz = {};
  function sz(o, t) {
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.constructor = o),
      (o.__proto__ = t);
  }
  rz = sz;
  function tz(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
      if (document.styleSheets[t].ownerNode === e)
        return document.styleSheets[t];
  }
  function uz(e) {
    var t = document.createElement('style');
    return (
      t.setAttribute('data-emotion', e.key),
      void 0 !== e.nonce && t.setAttribute('nonce', e.nonce),
      t.appendChild(document.createTextNode('')),
      t
    );
  }
  var Bp = (function () {
    function e(e) {
      (this.isSpeedy = void 0 === e.speedy || e.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = e.nonce),
        (this.key = e.key),
        (this.container = e.container),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.insert = function (e) {
        if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
          var t,
            s = uz(this);
          (t =
            0 === this.tags.length
              ? this.before
              : this.tags[this.tags.length - 1].nextSibling),
            this.container.insertBefore(s, t),
            this.tags.push(s);
        }
        var n = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var r = tz(n);
          try {
            var i = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0);
            r.insertRule(e, i ? 0 : r.cssRules.length);
          } catch (h) {
            0;
          }
        } else n.appendChild(document.createTextNode(e));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (e) {
          return e.parentNode.removeChild(e);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })();
  function vz(e) {
    function a(e, a, t) {
      var c = a.trim().split(k);
      a = c;
      var s = c.length,
        i = e.length;
      switch (i) {
        case 0:
        case 1:
          var n = 0;
          for (e = 0 === i ? '' : e[0] + ' '; n < s; ++n)
            a[n] = r(e, a[n], t).trim();
          break;
        default:
          var l = (n = 0);
          for (a = []; n < s; ++n)
            for (var o = 0; o < i; ++o) a[l++] = r(e[o] + ' ', c[n], t).trim();
      }
      return a;
    }
    function r(e, a, r) {
      var t = a.charCodeAt(0);
      switch ((33 > t && (t = (a = a.trim()).charCodeAt(0)), t)) {
        case 38:
          return a.replace(d, '$1' + e.trim());
        case 58:
          return e.trim() + a.replace(d, '$1' + e.trim());
        default:
          if (0 < 1 * r && 0 < a.indexOf('\f'))
            return a.replace(
              d,
              (58 === e.charCodeAt(0) ? '' : '$1') + e.trim()
            );
      }
      return e + a;
    }
    function t(e, a, r, s) {
      var i = e + ';',
        n = 2 * a + 3 * r + 4 * s;
      if (944 === n) {
        e = i.indexOf(':', 9) + 1;
        var l = i.substring(e, i.length - 1).trim();
        return (
          (l = i.substring(0, e).trim() + l + ';'),
          1 === T || (2 === T && c(l, 1)) ? '-webkit-' + l + l : l
        );
      }
      if (0 === T || (2 === T && !c(i, 1))) return i;
      switch (n) {
        case 1015:
          return 97 === i.charCodeAt(10) ? '-webkit-' + i + i : i;
        case 951:
          return 116 === i.charCodeAt(3) ? '-webkit-' + i + i : i;
        case 963:
          return 110 === i.charCodeAt(5) ? '-webkit-' + i + i : i;
        case 1009:
          if (100 !== i.charCodeAt(4)) break;
        case 969:
        case 942:
          return '-webkit-' + i + i;
        case 978:
          return '-webkit-' + i + '-moz-' + i + i;
        case 1019:
        case 983:
          return '-webkit-' + i + '-moz-' + i + '-ms-' + i + i;
        case 883:
          if (45 === i.charCodeAt(8)) return '-webkit-' + i + i;
          if (0 < i.indexOf('image-set(', 11))
            return i.replace(O, '$1-webkit-$2') + i;
          break;
        case 932:
          if (45 === i.charCodeAt(4))
            switch (i.charCodeAt(5)) {
              case 103:
                return (
                  '-webkit-box-' +
                  i.replace('-grow', '') +
                  '-webkit-' +
                  i +
                  '-ms-' +
                  i.replace('grow', 'positive') +
                  i
                );
              case 115:
                return (
                  '-webkit-' + i + '-ms-' + i.replace('shrink', 'negative') + i
                );
              case 98:
                return (
                  '-webkit-' +
                  i +
                  '-ms-' +
                  i.replace('basis', 'preferred-size') +
                  i
                );
            }
          return '-webkit-' + i + '-ms-' + i + i;
        case 964:
          return '-webkit-' + i + '-ms-flex-' + i + i;
        case 1023:
          if (99 !== i.charCodeAt(8)) break;
          return (
            '-webkit-box-pack' +
            (l = i
              .substring(i.indexOf(':', 15))
              .replace('flex-', '')
              .replace('space-between', 'justify')) +
            '-webkit-' +
            i +
            '-ms-flex-pack' +
            l +
            i
          );
        case 1005:
          return h.test(i)
            ? i.replace(b, ':-webkit-') + i.replace(b, ':-moz-') + i
            : i;
        case 1e3:
          switch (
            ((a = (l = i.substring(13).trim()).indexOf('-') + 1),
            l.charCodeAt(0) + l.charCodeAt(a))
          ) {
            case 226:
              l = i.replace(A, 'tb');
              break;
            case 232:
              l = i.replace(A, 'tb-rl');
              break;
            case 220:
              l = i.replace(A, 'lr');
              break;
            default:
              return i;
          }
          return '-webkit-' + i + '-ms-' + l + i;
        case 1017:
          if (-1 === i.indexOf('sticky', 9)) break;
        case 975:
          switch (
            ((a = (i = e).length - 10),
            (n =
              (l = (33 === i.charCodeAt(a) ? i.substring(0, a) : i)
                .substring(e.indexOf(':', 7) + 1)
                .trim()).charCodeAt(0) +
              (0 | l.charCodeAt(7))))
          ) {
            case 203:
              if (111 > l.charCodeAt(8)) break;
            case 115:
              i = i.replace(l, '-webkit-' + l) + ';' + i;
              break;
            case 207:
            case 102:
              i =
                i.replace(l, '-webkit-' + (102 < n ? 'inline-' : '') + 'box') +
                ';' +
                i.replace(l, '-webkit-' + l) +
                ';' +
                i.replace(l, '-ms-' + l + 'box') +
                ';' +
                i;
          }
          return i + ';';
        case 938:
          if (45 === i.charCodeAt(5))
            switch (i.charCodeAt(6)) {
              case 105:
                return (
                  (l = i.replace('-items', '')),
                  '-webkit-' + i + '-webkit-box-' + l + '-ms-flex-' + l + i
                );
              case 115:
                return '-webkit-' + i + '-ms-flex-item-' + i.replace(v, '') + i;
              default:
                return (
                  '-webkit-' +
                  i +
                  '-ms-flex-line-pack' +
                  i.replace('align-content', '').replace(v, '') +
                  i
                );
            }
          break;
        case 973:
        case 989:
          if (45 !== i.charCodeAt(3) || 122 === i.charCodeAt(4)) break;
        case 931:
        case 953:
          if (!0 === $.test(e))
            return 115 === (l = e.substring(e.indexOf(':') + 1)).charCodeAt(0)
              ? t(e.replace('stretch', 'fill-available'), a, r, s).replace(
                  ':fill-available',
                  ':stretch'
                )
              : i.replace(l, '-webkit-' + l) +
                  i.replace(l, '-moz-' + l.replace('fill-', '')) +
                  i;
          break;
        case 962:
          if (
            ((i =
              '-webkit-' + i + (102 === i.charCodeAt(5) ? '-ms-' + i : '') + i),
            211 === r + s &&
              105 === i.charCodeAt(13) &&
              0 < i.indexOf('transform', 10))
          )
            return (
              i
                .substring(0, i.indexOf(';', 27) + 1)
                .replace(u, '$1-webkit-$2') + i
            );
      }
      return i;
    }
    function c(e, a) {
      var r = e.indexOf(1 === a ? ':' : '{'),
        t = e.substring(0, 3 !== a ? r : 10);
      return (
        (r = e.substring(r + 1, e.length - 1)),
        B(2 !== a ? t : t.replace(x, '$1'), r, a)
      );
    }
    function s(e, a) {
      var r = t(a, a.charCodeAt(0), a.charCodeAt(1), a.charCodeAt(2));
      return r !== a + ';'
        ? r.replace(m, ' or ($1)').substring(4)
        : '(' + a + ')';
    }
    function i(e, a, r, t, c, s, i, n, o, f) {
      for (var b, h = 0, u = a; h < q; ++h)
        switch ((b = S[h].call(l, e, u, r, t, c, s, i, n, o, f))) {
          case void 0:
          case !1:
          case !0:
          case null:
            break;
          default:
            u = b;
        }
      if (u !== a) return u;
    }
    function n(e) {
      return (
        void 0 !== (e = e.prefix) &&
          ((B = null),
          e
            ? 'function' != typeof e
              ? (T = 1)
              : ((T = 2), (B = e))
            : (T = 0)),
        n
      );
    }
    function l(e, r) {
      var n = e;
      if ((33 > n.charCodeAt(0) && (n = n.trim()), (n = [n]), 0 < q)) {
        var l = i(-1, r, n, n, y, z, 0, 0, 0, 0);
        void 0 !== l && 'string' == typeof l && (r = l);
      }
      var b = (function e(r, n, l, b, h) {
        for (
          var u,
            k,
            d,
            A,
            m,
            v = 0,
            x = 0,
            $ = 0,
            O = 0,
            S = 0,
            B = 0,
            E = (d = u = 0),
            F = 0,
            G = 0,
            H = 0,
            I = 0,
            J = l.length,
            K = J - 1,
            L = '',
            M = '',
            N = '',
            P = '';
          F < J;

        ) {
          if (
            ((k = l.charCodeAt(F)),
            F === K &&
              0 !== x + O + $ + v &&
              (0 !== x && (k = 47 === x ? 10 : 47), (O = $ = v = 0), J++, K++),
            0 === x + O + $ + v)
          ) {
            if (
              F === K &&
              (0 < G && (L = L.replace(f, '')), 0 < L.trim().length)
            ) {
              switch (k) {
                case 32:
                case 9:
                case 59:
                case 13:
                case 10:
                  break;
                default:
                  L += l.charAt(F);
              }
              k = 59;
            }
            switch (k) {
              case 123:
                for (
                  u = (L = L.trim()).charCodeAt(0), d = 1, I = ++F;
                  F < J;

                ) {
                  switch ((k = l.charCodeAt(F))) {
                    case 123:
                      d++;
                      break;
                    case 125:
                      d--;
                      break;
                    case 47:
                      switch ((k = l.charCodeAt(F + 1))) {
                        case 42:
                        case 47:
                          e: {
                            for (E = F + 1; E < K; ++E)
                              switch (l.charCodeAt(E)) {
                                case 47:
                                  if (
                                    42 === k &&
                                    42 === l.charCodeAt(E - 1) &&
                                    F + 2 !== E
                                  ) {
                                    F = E + 1;
                                    break e;
                                  }
                                  break;
                                case 10:
                                  if (47 === k) {
                                    F = E + 1;
                                    break e;
                                  }
                              }
                            F = E;
                          }
                      }
                      break;
                    case 91:
                      k++;
                    case 40:
                      k++;
                    case 34:
                    case 39:
                      for (; F++ < K && l.charCodeAt(F) !== k; );
                  }
                  if (0 === d) break;
                  F++;
                }
                switch (
                  ((d = l.substring(I, F)),
                  0 === u && (u = (L = L.replace(o, '').trim()).charCodeAt(0)),
                  u)
                ) {
                  case 64:
                    switch (
                      (0 < G && (L = L.replace(f, '')), (k = L.charCodeAt(1)))
                    ) {
                      case 100:
                      case 109:
                      case 115:
                      case 45:
                        G = n;
                        break;
                      default:
                        G = W;
                    }
                    if (
                      ((I = (d = e(n, G, d, k, h + 1)).length),
                      0 < q &&
                        ((m = i(3, d, (G = a(W, L, H)), n, y, z, I, k, h, b)),
                        (L = G.join('')),
                        void 0 !== m &&
                          0 === (I = (d = m.trim()).length) &&
                          ((k = 0), (d = ''))),
                      0 < I)
                    )
                      switch (k) {
                        case 115:
                          L = L.replace(C, s);
                        case 100:
                        case 109:
                        case 45:
                          d = L + '{' + d + '}';
                          break;
                        case 107:
                          (d = (L = L.replace(w, '$1 $2')) + '{' + d + '}'),
                            (d =
                              1 === T || (2 === T && c('@' + d, 3))
                                ? '@-webkit-' + d + '@' + d
                                : '@' + d);
                          break;
                        default:
                          (d = L + d), 112 === b && ((M += d), (d = ''));
                      }
                    else d = '';
                    break;
                  default:
                    d = e(n, a(n, L, H), d, b, h + 1);
                }
                (N += d),
                  (d = H = G = E = u = 0),
                  (L = ''),
                  (k = l.charCodeAt(++F));
                break;
              case 125:
              case 59:
                if (
                  1 < (I = (L = (0 < G ? L.replace(f, '') : L).trim()).length)
                )
                  switch (
                    (0 === E &&
                      ((u = L.charCodeAt(0)),
                      45 === u || (96 < u && 123 > u)) &&
                      (I = (L = L.replace(' ', ':')).length),
                    0 < q &&
                      void 0 !== (m = i(1, L, n, r, y, z, M.length, b, h, b)) &&
                      0 === (I = (L = m.trim()).length) &&
                      (L = '\0\0'),
                    (u = L.charCodeAt(0)),
                    (k = L.charCodeAt(1)),
                    u)
                  ) {
                    case 0:
                      break;
                    case 64:
                      if (105 === k || 99 === k) {
                        P += L + l.charAt(F);
                        break;
                      }
                    default:
                      58 !== L.charCodeAt(I - 1) &&
                        (M += t(L, u, k, L.charCodeAt(2)));
                  }
                (H = G = E = u = 0), (L = ''), (k = l.charCodeAt(++F));
            }
          }
          switch (k) {
            case 13:
            case 10:
              47 === x
                ? (x = 0)
                : 0 === 1 + u &&
                  107 !== b &&
                  0 < L.length &&
                  ((G = 1), (L += '\0')),
                0 < q * D && i(0, L, n, r, y, z, M.length, b, h, b),
                (z = 1),
                y++;
              break;
            case 59:
            case 125:
              if (0 === x + O + $ + v) {
                z++;
                break;
              }
            default:
              switch ((z++, (A = l.charAt(F)), k)) {
                case 9:
                case 32:
                  if (0 === O + v + x)
                    switch (S) {
                      case 44:
                      case 58:
                      case 9:
                      case 32:
                        A = '';
                        break;
                      default:
                        32 !== k && (A = ' ');
                    }
                  break;
                case 0:
                  A = '\\0';
                  break;
                case 12:
                  A = '\\f';
                  break;
                case 11:
                  A = '\\v';
                  break;
                case 38:
                  0 === O + x + v && ((G = H = 1), (A = '\f' + A));
                  break;
                case 108:
                  if (0 === O + x + v + j && 0 < E)
                    switch (F - E) {
                      case 2:
                        112 === S && 58 === l.charCodeAt(F - 3) && (j = S);
                      case 8:
                        111 === B && (j = B);
                    }
                  break;
                case 58:
                  0 === O + x + v && (E = F);
                  break;
                case 44:
                  0 === x + $ + O + v && ((G = 1), (A += '\r'));
                  break;
                case 34:
                case 39:
                  0 === x && (O = O === k ? 0 : 0 === O ? k : O);
                  break;
                case 91:
                  0 === O + x + $ && v++;
                  break;
                case 93:
                  0 === O + x + $ && v--;
                  break;
                case 41:
                  0 === O + x + v && $--;
                  break;
                case 40:
                  if (0 === O + x + v) {
                    if (0 === u)
                      switch (2 * S + 3 * B) {
                        case 533:
                          break;
                        default:
                          u = 1;
                      }
                    $++;
                  }
                  break;
                case 64:
                  0 === x + $ + O + v + E + d && (d = 1);
                  break;
                case 42:
                case 47:
                  if (!(0 < O + v + $))
                    switch (x) {
                      case 0:
                        switch (2 * k + 3 * l.charCodeAt(F + 1)) {
                          case 235:
                            x = 47;
                            break;
                          case 220:
                            (I = F), (x = 42);
                        }
                        break;
                      case 42:
                        47 === k &&
                          42 === S &&
                          I + 2 !== F &&
                          (33 === l.charCodeAt(I + 2) &&
                            (M += l.substring(I, F + 1)),
                          (A = ''),
                          (x = 0));
                    }
              }
              0 === x && (L += A);
          }
          (B = S), (S = k), F++;
        }
        if (0 < (I = M.length)) {
          if (
            ((G = n),
            0 < q &&
              void 0 !== (m = i(2, M, G, r, y, z, I, b, h, b)) &&
              0 === (M = m).length)
          )
            return P + M + N;
          if (((M = G.join(',') + '{' + M + '}'), 0 != T * j)) {
            switch ((2 !== T || c(M, 2) || (j = 0), j)) {
              case 111:
                M = M.replace(g, ':-moz-$1') + M;
                break;
              case 112:
                M =
                  M.replace(p, '::-webkit-input-$1') +
                  M.replace(p, '::-moz-$1') +
                  M.replace(p, ':-ms-input-$1') +
                  M;
            }
            j = 0;
          }
        }
        return P + M + N;
      })(W, n, r, 0, 0);
      return (
        0 < q &&
          void 0 !== (l = i(-2, b, n, n, y, z, b.length, 0, 0, 0)) &&
          (b = l),
        '',
        (j = 0),
        (z = y = 1),
        b
      );
    }
    var o = /^\0+/g,
      f = /[\0\r\f]/g,
      b = /: */g,
      h = /zoo|gra/,
      u = /([,: ])(transform)/g,
      k = /,\r+?/g,
      d = /([\t\r\n ])*\f?&/g,
      w = /@(k\w+)\s*(\S*)\s*/,
      p = /::(place)/g,
      g = /:(read-only)/g,
      A = /[svh]\w+-[tblr]{2}/,
      C = /\(\s*(.*)\s*\)/g,
      m = /([\s\S]*?);/g,
      v = /-self|flex-/g,
      x = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      $ = /stretch|:\s*\w+\-(?:conte|avail)/,
      O = /([^-])(image-set\()/,
      z = 1,
      y = 1,
      j = 0,
      T = 1,
      W = [],
      S = [],
      q = 0,
      B = null,
      D = 0;
    return (
      (l.use = function e(a) {
        switch (a) {
          case void 0:
          case null:
            q = S.length = 0;
            break;
          default:
            if ('function' == typeof a) S[q++] = a;
            else if ('object' == typeof a)
              for (var r = 0, t = a.length; r < t; ++r) e(a[r]);
            else D = 0 | !!a;
        }
        return e;
      }),
      (l.set = n),
      void 0 !== e && n(e),
      l
    );
  }
  var dj = '/*|*/',
    wz = dj + '}';
  function xz(e) {
    e && Vf.current.insert(e + '}');
  }
  var Vf = {current: null},
    yz = function (e, r, t, $, a, n, i, d, o, c) {
      switch (e) {
        case 1:
          switch (r.charCodeAt(0)) {
            case 64:
              return Vf.current.insert(r + ';'), '';
            case 108:
              if (98 === r.charCodeAt(2)) return '';
          }
          break;
        case 2:
          if (0 === d) return r + dj;
          break;
        case 3:
          switch (d) {
            case 102:
            case 112:
              return Vf.current.insert(t[0] + r), '';
            default:
              return r + (0 === c ? dj : '');
          }
        case -2:
          r.split(wz).forEach(xz);
      }
    },
    zz = function (e) {
      void 0 === e && (e = {});
      var r,
        t = e.key || 'css';
      void 0 !== e.prefix && (r = {prefix: e.prefix});
      var $ = new vz(r);
      var a,
        n = {};
      a = e.container || document.head;
      var i,
        d = document.querySelectorAll('style[data-emotion-' + t + ']');
      Array.prototype.forEach.call(d, function (e) {
        e
          .getAttribute('data-emotion-' + t)
          .split(' ')
          .forEach(function (e) {
            n[e] = !0;
          }),
          e.parentNode !== a && a.appendChild(e);
      }),
        $.use(e.stylisPlugins)(yz),
        (i = function (e, r, t, a) {
          var n = r.name;
          (Vf.current = t), $(e, r.styles), a && (o.inserted[n] = !0);
        });
      var o = {
        key: t,
        sheet: new Bp({key: t, container: a, nonce: e.nonce, speedy: e.speedy}),
        nonce: e.nonce,
        inserted: n,
        registered: {},
        insert: i,
      };
      return o;
    };
  var Az = !0;
  function ej(e, t, r) {
    var s = '';
    return (
      r.split(' ').forEach(function (r) {
        void 0 !== e[r] ? t.push(e[r]) : (s += r + ' ');
      }),
      s
    );
  }
  var Wf = function (e, t, r) {
    var s = e.key + '-' + t.name;
    if (
      ((!1 === r || (!1 === Az && void 0 !== e.compat)) &&
        void 0 === e.registered[s] &&
        (e.registered[s] = t.styles),
      void 0 === e.inserted[t.name])
    ) {
      var $ = t;
      do {
        e.insert('.' + s, $, e.sheet, !0);
        $ = $.next;
      } while (void 0 !== $);
    }
  };
  function Bz(t) {
    for (var e, r = 0, a = 0, o = t.length; o >= 4; ++a, o -= 4)
      (e =
        1540483477 *
          (65535 &
            (e =
              (255 & t.charCodeAt(a)) |
              ((255 & t.charCodeAt(++a)) << 8) |
              ((255 & t.charCodeAt(++a)) << 16) |
              ((255 & t.charCodeAt(++a)) << 24))) +
        ((59797 * (e >>> 16)) << 16)),
        (r =
          (1540483477 * (65535 & (e ^= e >>> 24)) +
            ((59797 * (e >>> 16)) << 16)) ^
          (1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16)));
    switch (o) {
      case 3:
        r ^= (255 & t.charCodeAt(a + 2)) << 16;
      case 2:
        r ^= (255 & t.charCodeAt(a + 1)) << 8;
      case 1:
        r =
          1540483477 * (65535 & (r ^= 255 & t.charCodeAt(a))) +
          ((59797 * (r >>> 16)) << 16);
    }
    return (
      ((r =
        1540483477 * (65535 & (r ^= r >>> 13)) + ((59797 * (r >>> 16)) << 16)) ^
        (r >>> 15)) >>>
      0
    ).toString(36);
  }
  var Cz = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  };
  yi();
  var o,
    p,
    q,
    r,
    s,
    t,
    Dz = /[A-Z]|^ms/g,
    Ez = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    Cp = function (e) {
      return 45 === e.charCodeAt(1);
    },
    Dp = function (e) {
      return null != e && 'boolean' != typeof e;
    },
    fj = Jf(function (e) {
      return Cp(e) ? e : e.replace(Dz, '-$&').toLowerCase();
    }),
    Ep = function (e, r) {
      switch (e) {
        case 'animation':
        case 'animationName':
          if ('string' == typeof r)
            return r.replace(Ez, function (e, r, a) {
              return (ie = {name: r, styles: a, next: ie}), r;
            });
      }
      return 1 === Cz[e] || Cp(e) || 'number' != typeof r || 0 === r
        ? r
        : r + 'px';
    };
  function he(e, r, a, t) {
    if (null == a) return '';
    if (void 0 !== a.__emotion_styles) return a;
    switch (typeof a) {
      case 'boolean':
        return '';
      case 'object':
        if (1 === a.anim)
          return (ie = {name: a.name, styles: a.styles, next: ie}), a.name;
        if (void 0 !== a.styles) {
          var $ = a.next;
          if (void 0 !== $)
            for (; void 0 !== $; )
              (ie = {name: $.name, styles: $.styles, next: ie}), ($ = $.next);
          var n = a.styles + ';';
          return n;
        }
        return Fz(e, r, a);
      case 'function':
        if (void 0 !== e) {
          var o = ie,
            s = a(e);
          return (ie = o), he(e, r, s, t);
        }
        break;
      case 'string':
    }
    if (null == r) return a;
    var l = r[a];
    return void 0 === l || t ? a : l;
  }
  function Fz(e, r, a) {
    var t = '';
    if (Array.isArray(a))
      for (var $ = 0; $ < a.length; $++) t += he(e, r, a[$], !1);
    else
      for (var n in a) {
        var o = a[n];
        if ('object' != typeof o)
          null != r && void 0 !== r[o]
            ? (t += n + '{' + r[o] + '}')
            : Dp(o) && (t += fj(n) + ':' + Ep(n, o) + ';');
        else if (
          !Array.isArray(o) ||
          'string' != typeof o[0] ||
          (null != r && void 0 !== r[o[0]])
        ) {
          var s = he(e, r, o, !1);
          switch (n) {
            case 'animation':
            case 'animationName':
              t += fj(n) + ':' + s + ';';
              break;
            default:
              t += n + '{' + s + '}';
          }
        } else
          for (var l = 0; l < o.length; l++)
            Dp(o[l]) && (t += fj(n) + ':' + Ep(n, o[l]) + ';');
      }
    return t;
  }
  var u,
    ie,
    Fp = /label:\s*([^\s;\n{]+)\s*;/g;
  var Zc = function (e, r, a) {
    if (
      1 === e.length &&
      'object' == typeof e[0] &&
      null !== e[0] &&
      void 0 !== e[0].styles
    )
      return e[0];
    var t = !0,
      $ = '';
    ie = void 0;
    var n = e[0];
    null == n || void 0 === n.raw
      ? ((t = !1), ($ += he(a, r, n, !1)))
      : ($ += n[0]);
    for (var o = 1; o < e.length; o++)
      ($ += he(a, r, e[o], 46 === $.charCodeAt($.length - 1))),
        t && ($ += n[o]);
    Fp.lastIndex = 0;
    for (var s, l = ''; null !== (s = Fp.exec($)); ) l += '-' + s[1];
    var i = Bz($) + l;
    return {name: i, styles: $, next: ie};
  };
  function Gz() {
    for (var e = arguments.length, r = new Array(e), $ = 0; $ < e; $++)
      r[$] = arguments[$];
    return Zc(r);
  }
  Ja();
  var Gp = aa.createContext('undefined' != typeof HTMLElement ? zz() : null),
    $c = aa.createContext({}),
    v = Gp.Provider,
    Xf = function (e) {
      return aa.forwardRef(function (r, t) {
        return aa.createElement(Gp.Consumer, null, function (a) {
          return e(r, a, t);
        });
      });
    },
    gj = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
    hj = Object.prototype.hasOwnProperty,
    Hp = function (e, r, t, a) {
      var h = null === t ? r.css : r.css(t);
      'string' == typeof h &&
        void 0 !== e.registered[h] &&
        (h = e.registered[h]);
      var $ = r[gj],
        o = [h],
        n = '';
      'string' == typeof r.className
        ? (n = ej(e.registered, o, r.className))
        : null != r.className && (n = r.className + ' ');
      var s = Zc(o);
      Wf(e, s, 'string' == typeof $);
      n += e.key + '-' + s.name;
      var i = {};
      for (var l in r)
        hj.call(r, l) && 'css' !== l && l !== gj && (i[l] = r[l]);
      return (i.ref = a), (i.className = n), aa.createElement($, i);
    },
    Hz = Xf(function (e, r, t) {
      return 'function' == typeof e.css
        ? aa.createElement($c.Consumer, null, function (a) {
            return Hp(r, e, a, t);
          })
        : Hp(r, e, null, t);
    });
  var Iz = function (e, r) {
      var t = arguments;
      if (null == r || !hj.call(r, 'css'))
        return aa.createElement.apply(void 0, t);
      var a = t.length,
        h = new Array(a);
      h[0] = Hz;
      var $ = {};
      for (var o in r) hj.call(r, o) && ($[o] = r[o]);
      ($[gj] = e), (h[1] = $);
      for (var n = 2; n < a; n++) h[n] = t[n];
      return aa.createElement.apply(null, h);
    },
    Ip = Xf(function (e, r) {
      var t = e.styles;
      if ('function' == typeof t)
        return aa.createElement($c.Consumer, null, function (e) {
          var a = Zc([t(e)]);
          return aa.createElement(Jp, {serialized: a, cache: r});
        });
      var a = Zc([t]);
      return aa.createElement(Jp, {serialized: a, cache: r});
    }),
    Jp = (function (e) {
      function r(r, t, a) {
        return e.call(this, r, t, a) || this;
      }
      var $HOM9$$interop$default = ya(rz);
      $HOM9$$interop$default.d(r, e);
      var t = r.prototype;
      return (
        (t.componentDidMount = function () {
          this.sheet = new Bp({
            key: this.props.cache.key + '-global',
            nonce: this.props.cache.sheet.nonce,
            container: this.props.cache.sheet.container,
          });
          var e = document.querySelector(
            'style[data-emotion-' +
              this.props.cache.key +
              '="' +
              this.props.serialized.name +
              '"]'
          );
          null !== e && this.sheet.tags.push(e),
            this.props.cache.sheet.tags.length &&
              (this.sheet.before = this.props.cache.sheet.tags[0]),
            this.insertStyles();
        }),
        (t.componentDidUpdate = function (e) {
          e.serialized.name !== this.props.serialized.name &&
            this.insertStyles();
        }),
        (t.insertStyles = function () {
          if (
            (void 0 !== this.props.serialized.next &&
              Wf(this.props.cache, this.props.serialized.next, !0),
            this.sheet.tags.length)
          ) {
            var e =
              this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
            (this.sheet.before = e), this.sheet.flush();
          }
          this.props.cache.insert('', this.props.serialized, this.sheet, !1);
        }),
        (t.componentWillUnmount = function () {
          this.sheet.flush();
        }),
        (t.render = function () {
          return null;
        }),
        r
      );
    })(aa.Component),
    Jz = function () {
      var e = Gz.apply(void 0, arguments),
        r = 'animation-' + e.name;
      return {
        name: r,
        styles: '@keyframes ' + r + '{' + e.styles + '}',
        anim: 1,
        toString: function () {
          return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
        },
      };
    },
    Kz = function e(r) {
      for (var t = r.length, a = 0, h = ''; a < t; a++) {
        var $ = r[a];
        if (null != $) {
          var o = void 0;
          switch (typeof $) {
            case 'boolean':
              break;
            case 'object':
              if (Array.isArray($)) o = e($);
              else
                for (var n in ((o = ''), $))
                  $[n] && n && (o && (o += ' '), (o += n));
              break;
            default:
              o = $;
          }
          o && (h && (h += ' '), (h += o));
        }
      }
      return h;
    };
  function Lz(e, r, t) {
    var a = [],
      h = ej(e, a, t);
    return a.length < 2 ? t : h + r(a);
  }
  var w = Xf(function (e, r) {
    return aa.createElement($c.Consumer, null, function (t) {
      var a = function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var h = Zc(t, r.registered);
          return Wf(r, h, !1), r.key + '-' + h.name;
        },
        h = {
          css: a,
          cx: function () {
            for (var e = arguments.length, t = new Array(e), h = 0; h < e; h++)
              t[h] = arguments[h];
            return Lz(r.registered, a, Kz(t));
          },
          theme: t,
        },
        $ = e.children(h);
      return !0, $;
    });
  });
  var Ia = function (r, e, t, o, i) {
      for (e = e && e.split ? e.split('.') : [e], o = 0; o < e.length; o++)
        r = r ? r[e[o]] : i;
      return r === i ? t : r;
    },
    Mz = [40, 52, 64].map(function (r) {
      return r + 'em';
    }),
    Nz = {
      space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
      fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    },
    Oz = {
      bg: 'backgroundColor',
      m: 'margin',
      mt: 'marginTop',
      mr: 'marginRight',
      mb: 'marginBottom',
      ml: 'marginLeft',
      mx: 'marginX',
      my: 'marginY',
      p: 'padding',
      pt: 'paddingTop',
      pr: 'paddingRight',
      pb: 'paddingBottom',
      pl: 'paddingLeft',
      px: 'paddingX',
      py: 'paddingY',
    },
    Kp = {
      marginX: ['marginLeft', 'marginRight'],
      marginY: ['marginTop', 'marginBottom'],
      paddingX: ['paddingLeft', 'paddingRight'],
      paddingY: ['paddingTop', 'paddingBottom'],
      size: ['width', 'height'],
    },
    Pz = {
      color: 'colors',
      backgroundColor: 'colors',
      borderColor: 'colors',
      margin: 'space',
      marginTop: 'space',
      marginRight: 'space',
      marginBottom: 'space',
      marginLeft: 'space',
      marginX: 'space',
      marginY: 'space',
      padding: 'space',
      paddingTop: 'space',
      paddingRight: 'space',
      paddingBottom: 'space',
      paddingLeft: 'space',
      paddingX: 'space',
      paddingY: 'space',
      top: 'space',
      right: 'space',
      bottom: 'space',
      left: 'space',
      gridGap: 'space',
      gridColumnGap: 'space',
      gridRowGap: 'space',
      gap: 'space',
      columnGap: 'space',
      rowGap: 'space',
      fontFamily: 'fonts',
      fontSize: 'fontSizes',
      fontWeight: 'fontWeights',
      lineHeight: 'lineHeights',
      letterSpacing: 'letterSpacings',
      border: 'borders',
      borderTop: 'borders',
      borderRight: 'borders',
      borderBottom: 'borders',
      borderLeft: 'borders',
      borderWidth: 'borderWidths',
      borderStyle: 'borderStyles',
      borderRadius: 'radii',
      borderTopRightRadius: 'radii',
      borderTopLeftRadius: 'radii',
      borderBottomRightRadius: 'radii',
      borderBottomLeftRadius: 'radii',
      borderTopWidth: 'borderWidths',
      borderTopColor: 'colors',
      borderTopStyle: 'borderStyles',
      borderBottomWidth: 'borderWidths',
      borderBottomColor: 'colors',
      borderBottomStyle: 'borderStyles',
      borderLeftWidth: 'borderWidths',
      borderLeftColor: 'colors',
      borderLeftStyle: 'borderStyles',
      borderRightWidth: 'borderWidths',
      borderRightColor: 'colors',
      borderRightStyle: 'borderStyles',
      outlineColor: 'colors',
      boxShadow: 'shadows',
      textShadow: 'shadows',
      zIndex: 'zIndices',
      width: 'sizes',
      minWidth: 'sizes',
      maxWidth: 'sizes',
      height: 'sizes',
      minHeight: 'sizes',
      maxHeight: 'sizes',
      flexBasis: 'sizes',
      size: 'sizes',
      fill: 'colors',
      stroke: 'colors',
    },
    Qz = function (r, e) {
      if ('number' != typeof e || e >= 0) return Ia(r, e, e);
      var t = Math.abs(e),
        o = Ia(r, t, t);
      return 'string' == typeof o ? '-' + o : -1 * o;
    },
    Rz = [
      'margin',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft',
      'marginX',
      'marginY',
      'top',
      'bottom',
      'left',
      'right',
    ].reduce(function (r, e) {
      var t;
      return Object.assign({}, r, (((t = {})[e] = Qz), t));
    }, {}),
    Sz = function (r) {
      return function (e) {
        var t = {},
          o = Ia(e, 'breakpoints', Mz),
          i = [null].concat(
            o.map(function (r) {
              return '@media screen and (min-width: ' + r + ')';
            })
          );
        for (var a in r) {
          var s = 'function' == typeof r[a] ? r[a](e) : r[a];
          if (null != s)
            if (Array.isArray(s))
              for (var n = 0; n < s.slice(0, i.length).length; n++) {
                var d = i[n];
                d
                  ? ((t[d] = t[d] || {}), null != s[n] && (t[d][a] = s[n]))
                  : (t[a] = s[n]);
              }
            else t[a] = s;
        }
        return t;
      };
    },
    Jb = function (r) {
      return function (e) {
        void 0 === e && (e = {});
        var t = Object.assign({}, Nz, e.theme || e),
          o = {},
          i = 'function' == typeof r ? r(t) : r,
          a = Sz(i)(t);
        for (var s in a) {
          var n = a[s],
            d = 'function' == typeof n ? n(t) : n;
          if ('variant' !== s) {
            if (d && 'object' == typeof d) o[s] = Jb(d)(t);
            else {
              var p = Ia(Oz, s, s),
                $ = Ia(Pz, p),
                g = Ia(t, $, Ia(t, p, {})),
                b = Ia(Rz, p, Ia)(g, d, d);
              if (Kp[p])
                for (var l = Kp[p], c = 0; c < l.length; c++) o[l[c]] = b;
              else o[p] = b;
            }
          } else {
            var m = Jb(Ia(t, d))(t);
            o = Object.assign({}, o, m);
          }
        }
        return o;
      };
    };
  var Lp = {},
    Tz = function (e) {
      return Uz(e) && !Vz(e);
    };
  function Uz(e) {
    return !!e && 'object' == typeof e;
  }
  function Vz(e) {
    var r = Object.prototype.toString.call(e);
    return '[object RegExp]' === r || '[object Date]' === r || Yz(e);
  }
  var Wz = 'function' == typeof Symbol && Symbol.for,
    Xz = Wz ? Symbol.for('react.element') : 60103;
  function Yz(e) {
    return e.$$typeof === Xz;
  }
  function Zz(e) {
    return Array.isArray(e) ? [] : {};
  }
  function je(e, r) {
    return !1 !== r.clone && r.isMergeableObject(e) ? _c(Zz(e), e, r) : e;
  }
  function $z(e, r, $) {
    return e.concat(r).map(function (e) {
      return je(e, $);
    });
  }
  function _z(e, r) {
    if (!r.customMerge) return _c;
    var $ = r.customMerge(e);
    return 'function' == typeof $ ? $ : _c;
  }
  function aA(e) {
    return Object.getOwnPropertySymbols
      ? Object.getOwnPropertySymbols(e).filter(function (r) {
          return e.propertyIsEnumerable(r);
        })
      : [];
  }
  function Mp(e) {
    return Object.keys(e).concat(aA(e));
  }
  function Np(e, r) {
    try {
      return r in e;
    } catch ($) {
      return !1;
    }
  }
  function bA(e, r) {
    return (
      Np(e, r) &&
      !(
        Object.hasOwnProperty.call(e, r) &&
        Object.propertyIsEnumerable.call(e, r)
      )
    );
  }
  function cA(e, r, $) {
    var t = {};
    return (
      $.isMergeableObject(e) &&
        Mp(e).forEach(function (r) {
          t[r] = je(e[r], $);
        }),
      Mp(r).forEach(function (o) {
        bA(e, o) ||
          (Np(e, o) && $.isMergeableObject(r[o])
            ? (t[o] = _z(o, $)(e[o], r[o], $))
            : (t[o] = je(r[o], $)));
      }),
      t
    );
  }
  function _c(e, r, $) {
    (($ = $ || {}).arrayMerge = $.arrayMerge || $z),
      ($.isMergeableObject = $.isMergeableObject || Tz),
      ($.cloneUnlessOtherwiseSpecified = je);
    var t = Array.isArray(r);
    return t === Array.isArray(e)
      ? t
        ? $.arrayMerge(e, r, $)
        : cA(e, r, $)
      : je(r, $);
  }
  _c.all = function (e, r) {
    if (!Array.isArray(e)) throw new Error('first argument should be an array');
    return e.reduce(function (e, $) {
      return _c(e, $, r);
    }, {});
  };
  var dA = _c;
  Lp = dA;
  var eA = {};
  eA = {
    _args: [['@emotion/core@10.0.28', '/Users/alexreichert/projects/snippet']],
    _from: '@emotion/core@10.0.28',
    _id: '@emotion/core@10.0.28',
    _inBundle: !1,
    _integrity:
      'sha512-pH8UueKYO5jgg0Iq+AmCLxBsvuGtvlmiDCOuv8fGNYn3cowFpLN98L8zO56U0H1PjDIyAlXymgL3Wu7u7v6hbA==',
    _location: '/@emotion/core',
    _phantomChildren: {},
    _requested: {
      type: 'version',
      registry: !0,
      raw: '@emotion/core@10.0.28',
      name: '@emotion/core',
      escapedName: '@emotion%2fcore',
      scope: '@emotion',
      rawSpec: '10.0.28',
      saveSpec: null,
      fetchSpec: '10.0.28',
    },
    _requiredBy: [
      '/@theme-ui/color-modes',
      '/@theme-ui/components',
      '/@theme-ui/core',
      '/@theme-ui/mdx',
      '/@theme-ui/theme-provider',
      '/@types/theme-ui__components',
    ],
    _resolved: 'https://registry.npmjs.org/@emotion/core/-/core-10.0.28.tgz',
    _spec: '10.0.28',
    _where: '/Users/alexreichert/projects/snippet',
    author: {name: 'mitchellhamilton', email: 'mitchell@mitchellhamilton.me'},
    browser: {
      './dist/core.cjs.js': './dist/core.browser.cjs.js',
      './dist/core.esm.js': './dist/core.browser.esm.js',
    },
    dependencies: {
      '@babel/runtime': '^7.5.5',
      '@emotion/cache': '^10.0.27',
      '@emotion/css': '^10.0.27',
      '@emotion/serialize': '^0.11.15',
      '@emotion/sheet': '0.9.4',
      '@emotion/utils': '0.11.3',
    },
    description: '> Simple styling in React.',
    devDependencies: {
      '@emotion/styled': '^10.0.27',
      '@types/react': '^16.8.20',
      dtslint: '^0.3.0',
      emotion: '^10.0.27',
      'emotion-server': '^10.0.27',
      'emotion-theming': '^10.0.27',
      'html-tag-names': '^1.1.2',
      react: '^16.5.2',
      'svg-tag-names': '^1.1.1',
    },
    files: ['src', 'dist', 'types'],
    license: 'MIT',
    main: 'dist/core.cjs.js',
    module: 'dist/core.esm.js',
    name: '@emotion/core',
    peerDependencies: {react: '>=16.3.0'},
    preconstruct: {umdName: 'emotionCore'},
    publishConfig: {access: 'public'},
    repository: {
      type: 'git',
      url: 'https://github.com/emotion-js/emotion/tree/master/packages/core',
    },
    scripts: {'test:typescript': 'dtslint types'},
    types: 'types/index.d.ts',
    'umd:main': 'dist/core.umd.min.js',
    version: '10.0.28',
  };
  Ja();
  var fA = function (e) {
      if (e.sx || e.css)
        return function (r) {
          return [Jb(e.sx)(r), 'function' == typeof e.css ? e.css(r) : e.css];
        };
    },
    gA = function (e) {
      if (!e) return null;
      var r = {};
      for (var $ in e) 'sx' !== $ && (r[$] = e[$]);
      var t = fA(e);
      return t && (r.css = t), r;
    },
    sa = function (e, r) {
      for (var $ = [], t = arguments.length - 2; t-- > 0; )
        $[t] = arguments[t + 2];
      return Iz.apply(void 0, [e, gA(r)].concat($));
    },
    ij = Q.d.createContext({__EMOTION_VERSION__: eA.version, theme: null}),
    jj = function () {
      return Q.d.useContext(ij);
    },
    Op = 'function' == typeof Symbol && Symbol.for,
    hA = Op ? Symbol.for('react.element') : 60103,
    iA = Op ? Symbol.for('react.forward_ref') : 60103,
    Pp = function (e) {
      return (
        !!e && 'object' == typeof e && e.$$typeof !== hA && e.$$typeof !== iA
      );
    },
    Qp = function (e, r, $) {
      return r;
    },
    kj = function (e, r) {
      var $oANd$$interop$default = ya(Lp);
      return $oANd$$interop$default.d(e, r, {
        isMergeableObject: Pp,
        arrayMerge: Qp,
      });
    };
  kj.all = function () {
    for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
    var $oANd$$interop$default = ya(Lp);
    return $oANd$$interop$default.d.all(e, {
      isMergeableObject: Pp,
      arrayMerge: Qp,
    });
  };
  var jA = function (e) {
      var r = e.context,
        $ = e.children;
      return sa(
        $c.Provider,
        {value: r.theme},
        sa(ij.Provider, {value: r, children: $})
      );
    },
    Rp = function (e) {
      var r = e.theme,
        $ = e.children,
        t = jj();
      var o =
        'function' == typeof r
          ? Object.assign({}, t, {theme: r(t.theme)})
          : kj.all({}, t, {theme: r});
      return sa(jA, {context: o, children: $});
    };
  Ja();
  var Sp = function (e) {
      return '--theme-ui-' + e;
    },
    kA = function (e, o) {
      return 'var(' + Sp(e) + ', ' + o + ')';
    },
    Tp = function () {
      for (var e = [], o = arguments.length; o--; ) e[o] = arguments[o];
      return e.filter(Boolean).join('-');
    },
    lA = {fontWeights: !0, lineHeights: !0},
    mA = {
      useCustomProperties: !0,
      initialColorModeName: !0,
      initialColorMode: !0,
    },
    nA = function (e, o) {
      return 'number' != typeof o ? o : lA[e] ? o : o + 'px';
    },
    Up = function (e, o, r) {
      var t = Array.isArray(e) ? [] : {};
      for (var $ in e) {
        var a = e[$],
          i = Tp(o, $);
        if (a && 'object' == typeof a) t[$] = Up(a, i, $);
        else if (mA[$]) t[$] = a;
        else {
          var s = nA(r || $, a);
          t[$] = kA(i, s);
        }
      }
      return t;
    },
    lj = function (e, o) {
      var r = {};
      for (var t in o)
        if ('modes' !== t) {
          var $ = Tp(e, t),
            a = o[t];
          a && 'object' == typeof a
            ? (r = Object.assign({}, r, lj($, a)))
            : (r[Sp($)] = a);
        }
      return r;
    },
    oA = function (e) {
      if ((void 0 === e && (e = {}), !e.colors || !1 === e.useBodyStyles))
        return {};
      if (!1 === e.useCustomProperties || !e.colors.modes)
        return Jb({body: {color: 'text', bg: 'background'}})(e);
      var o = e.rawColors || e.colors,
        r = o.modes,
        t = lj('colors', o);
      return (
        Object.keys(r).forEach(function (e) {
          t['&.theme-ui-' + e] = lj('colors', r[e]);
        }),
        Jb({body: Object.assign({}, t, {color: 'text', bg: 'background'})})(e)
      );
    },
    Vp = 'theme-ui-color-mode',
    Wp = {
      get: function (e) {
        try {
          return window.localStorage.getItem(Vp) || e;
        } catch (o) {
          console.warn(
            'localStorage is disabled and color mode might not work as expected.',
            'Please check your Site Settings.',
            o
          );
        }
      },
      set: function (e) {
        try {
          window.localStorage.setItem(Vp, e);
        } catch (o) {
          console.warn(
            'localStorage is disabled and color mode might not work as expected.',
            'Please check your Site Settings.',
            o
          );
        }
      },
    },
    pA = function () {
      var e = '(prefers-color-scheme: dark)',
        o = window.matchMedia ? window.matchMedia(e) : {},
        r = window.matchMedia
          ? window.matchMedia('(prefers-color-scheme: light)')
          : {};
      return o.media === e && o.matches
        ? 'dark'
        : '(prefers-color-scheme: light)' === r.media && r.matches
        ? 'light'
        : 'default';
    },
    qA = function (e) {
      void 0 === e && (e = {});
      var o = Q.d.useState(e.initialColorModeName || 'default'),
        r = o[0],
        t = o[1];
      return (
        Q.d.useEffect(function () {
          var o = Wp.get();
          if (
            (document.body.classList.remove('theme-ui-' + o),
            o || !e.useColorSchemeMediaQuery)
          )
            o && o !== r && t(o);
          else {
            var $ = pA();
            t($);
          }
        }, []),
        Q.d.useEffect(
          function () {
            r && Wp.set(r);
          },
          [r]
        ),
        [r, t]
      );
    },
    rA = function (e, o) {
      if (!o) return e;
      var r = Ia(e, 'colors.modes', {});
      return kj.all({}, e, {colors: Ia(r, o, {})});
    },
    sA = function () {
      return sa(Ip, {
        styles: function (e) {
          return oA(e);
        },
      });
    },
    tA = function (e) {
      var o = e.children,
        r = jj(),
        t = qA(r.theme),
        $ = t[0],
        a = t[1],
        i = rA(r.theme || {}, $),
        s = Object.assign({}, i);
      !1 !== i.useCustomProperties && (s.colors = Up(s.colors, 'colors'));
      var n = Object.assign({}, r, {theme: i, colorMode: $, setColorMode: a});
      return sa(
        $c.Provider,
        {value: s},
        sa(ij.Provider, {value: n}, sa(sA, {key: 'color-mode'}), o)
      );
    };
  var uA = {};
  function vA(e, r, $) {
    return (
      r in e
        ? Object.defineProperty(e, r, {
            value: $,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[r] = $),
      e
    );
  }
  uA = vA;
  Ja(), Ai();
  var wA = zi,
    xA = function (e) {
      return 'theme' !== e && 'innerRef' !== e;
    },
    Xp = function (e) {
      return 'string' == typeof e && e.charCodeAt(0) > 96 ? wA : xA;
    };
  function Yp(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r &&
        (o = o.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })),
        t.push.apply(t, o);
    }
    return t;
  }
  function yA(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2
        ? Yp(t, !0).forEach(function (r) {
            var $IxO8$$interop$default = ya(uA);
            $IxO8$$interop$default.d(e, r, t[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : Yp(t).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
          });
    }
    return e;
  }
  var zA = function e(r, t) {
    var o, n, a;
    void 0 !== t &&
      ((o = t.label),
      (a = t.target),
      (n =
        r.__emotion_forwardProp && t.shouldForwardProp
          ? function (e) {
              return r.__emotion_forwardProp(e) && t.shouldForwardProp(e);
            }
          : t.shouldForwardProp));
    var i = r.__emotion_real === r,
      s = (i && r.__emotion_base) || r;
    'function' != typeof n && i && (n = r.__emotion_forwardProp);
    var l = n || Xp(s),
      p = !l('as');
    return function () {
      var $ = arguments,
        v =
          i && void 0 !== r.__emotion_styles ? r.__emotion_styles.slice(0) : [];
      if (
        (void 0 !== o && v.push('label:' + o + ';'),
        null == $[0] || void 0 === $[0].raw)
      )
        v.push.apply(v, $);
      else {
        0, v.push($[0][0]);
        for (var u = $.length, c = 1; c < u; c++) v.push($[c], $[0][c]);
      }
      var m = Xf(function (e, r, t) {
        return aa.createElement($c.Consumer, null, function (o) {
          var i = (p && e.as) || s,
            $ = '',
            u = [],
            c = e;
          if (null == e.theme) {
            for (var m in ((c = {}), e)) c[m] = e[m];
            c.theme = o;
          }
          'string' == typeof e.className
            ? ($ = ej(r.registered, u, e.className))
            : null != e.className && ($ = e.className + ' ');
          var d = Zc(v.concat(u), r.registered, c);
          Wf(r, d, 'string' == typeof i);
          ($ += r.key + '-' + d.name), void 0 !== a && ($ += ' ' + a);
          var f = p && void 0 === n ? Xp(i) : l,
            _ = {};
          for (var y in e) (p && 'as' === y) || (f(y) && (_[y] = e[y]));
          return (
            (_.className = $), (_.ref = t || e.innerRef), aa.createElement(i, _)
          );
        });
      });
      return (
        (m.displayName =
          void 0 !== o
            ? o
            : 'Styled(' +
              ('string' == typeof s
                ? s
                : s.displayName || s.name || 'Component') +
              ')'),
        (m.defaultProps = r.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = s),
        (m.__emotion_styles = v),
        (m.__emotion_forwardProp = n),
        Object.defineProperty(m, 'toString', {
          value: function () {
            return '.' + a;
          },
        }),
        (m.withComponent = function (r, o) {
          return e(r, void 0 !== o ? yA({}, t || {}, {}, o) : t).apply(
            void 0,
            v
          );
        }),
        m
      );
    };
  };
  var AA = [
      'a',
      'abbr',
      'address',
      'area',
      'article',
      'aside',
      'audio',
      'b',
      'base',
      'bdi',
      'bdo',
      'big',
      'blockquote',
      'body',
      'br',
      'button',
      'canvas',
      'caption',
      'cite',
      'code',
      'col',
      'colgroup',
      'data',
      'datalist',
      'dd',
      'del',
      'details',
      'dfn',
      'dialog',
      'div',
      'dl',
      'dt',
      'em',
      'embed',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'header',
      'hgroup',
      'hr',
      'html',
      'i',
      'iframe',
      'img',
      'input',
      'ins',
      'kbd',
      'keygen',
      'label',
      'legend',
      'li',
      'link',
      'main',
      'map',
      'mark',
      'marquee',
      'menu',
      'menuitem',
      'meta',
      'meter',
      'nav',
      'noscript',
      'object',
      'ol',
      'optgroup',
      'option',
      'output',
      'p',
      'param',
      'picture',
      'pre',
      'progress',
      'q',
      'rp',
      'rt',
      'ruby',
      's',
      'samp',
      'script',
      'section',
      'select',
      'small',
      'source',
      'span',
      'strong',
      'style',
      'sub',
      'summary',
      'sup',
      'table',
      'tbody',
      'td',
      'textarea',
      'tfoot',
      'th',
      'thead',
      'time',
      'title',
      'tr',
      'track',
      'u',
      'ul',
      'var',
      'video',
      'wbr',
      'circle',
      'clipPath',
      'defs',
      'ellipse',
      'foreignObject',
      'g',
      'image',
      'line',
      'linearGradient',
      'mask',
      'path',
      'pattern',
      'polygon',
      'polyline',
      'radialGradient',
      'rect',
      'stop',
      'svg',
      'text',
      'tspan',
    ],
    uc = zA.bind();
  AA.forEach(function (e) {
    uc[e] = uc(e);
  });
  function BA(r, e, t) {
    return (
      e in r
        ? Object.defineProperty(r, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (r[e] = t),
      r
    );
  }
  function Zp(r, e) {
    var t = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
      var $ = Object.getOwnPropertySymbols(r);
      e &&
        ($ = $.filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        })),
        t.push.apply(t, $);
    }
    return t;
  }
  function ke(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Zp(Object(t), !0).forEach(function (e) {
            BA(r, e, t[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
        : Zp(Object(t)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
          });
    }
    return r;
  }
  function CA(r, e) {
    if (null == r) return {};
    var t,
      $,
      o = {},
      n = Object.keys(r);
    for ($ = 0; $ < n.length; $++)
      (t = n[$]), e.indexOf(t) >= 0 || (o[t] = r[t]);
    return o;
  }
  function DA(r, e) {
    if (null == r) return {};
    var t,
      $,
      o = CA(r, e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(r);
      for ($ = 0; $ < n.length; $++)
        (t = n[$]),
          e.indexOf(t) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(r, t) && (o[t] = r[t]));
    }
    return o;
  }
  Ja();
  var EA = function (r) {
      return 'function' == typeof r;
    },
    $p = Q.d.createContext({}),
    mj = function (r) {
      var e = Q.d.useContext($p),
        t = e;
      return r && (t = EA(r) ? r(e) : ke(ke({}, e), r)), t;
    },
    FA = function (r) {
      var e = mj(r.components);
      return Q.d.createElement($p.Provider, {value: e}, r.children);
    },
    GA = {
      inlineCode: 'code',
      wrapper: function (r) {
        var e = r.children;
        return Q.d.createElement(Q.d.Fragment, {}, e);
      },
    },
    HA = Q.d.forwardRef(function (r, e) {
      var t = r.components,
        $ = r.mdxType,
        o = r.originalType,
        n = r.parentName,
        m = DA(r, ['components', 'mdxType', 'originalType', 'parentName']),
        a = mj(t),
        p = $,
        c = a[''.concat(n, '.').concat(p)] || a[p] || GA[p] || o;
      return t
        ? Q.d.createElement(c, ke(ke({ref: e}, m), {}, {components: t}))
        : Q.d.createElement(c, ke({ref: e}, m));
    });
  HA.displayName = 'MDXCreateElement';
  Ja();
  var IA = [
      'p',
      'b',
      'i',
      'a',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'img',
      'pre',
      'code',
      'ol',
      'ul',
      'li',
      'blockquote',
      'hr',
      'em',
      'table',
      'tr',
      'th',
      'td',
      'em',
      'strong',
      'del',
      'inlineCode',
      'thematicBreak',
      'div',
      'root',
    ],
    JA = {inlineCode: 'code', thematicBreak: 'hr', root: 'div'},
    KA = function (e) {
      return JA[e] || e;
    },
    nj = function (e) {
      return function ($) {
        return Jb(Ia($.theme, 'styles.' + e))($.theme);
      };
    },
    LA = uc('div')(nj('div')),
    oj = {};
  IA.forEach(function (e) {
    (oj[e] = uc(KA(e))(nj(e))), (LA[e] = oj[e]);
  });
  var MA = function (e) {
      var $ = Object.assign({}, oj);
      return (
        Object.keys(e).forEach(function (r) {
          $[r] = uc(e[r])(nj(r));
        }),
        $
      );
    },
    _p = function (e) {
      var $ = e.components,
        r = e.children,
        n = mj();
      return sa(FA, {components: MA(Object.assign({}, n, $)), children: r});
    };
  var xb = function (r, e, o, t, s) {
      for (e = e && e.split ? e.split('.') : [e], t = 0; t < e.length; t++)
        r = r ? r[e[t]] : s;
      return r === s ? o : r;
    },
    NA = [40, 52, 64].map(function (r) {
      return r + 'em';
    }),
    OA = {
      space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
      fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    },
    PA = {
      bg: 'backgroundColor',
      m: 'margin',
      mt: 'marginTop',
      mr: 'marginRight',
      mb: 'marginBottom',
      ml: 'marginLeft',
      mx: 'marginX',
      my: 'marginY',
      p: 'padding',
      pt: 'paddingTop',
      pr: 'paddingRight',
      pb: 'paddingBottom',
      pl: 'paddingLeft',
      px: 'paddingX',
      py: 'paddingY',
    },
    aq = {
      marginX: ['marginLeft', 'marginRight'],
      marginY: ['marginTop', 'marginBottom'],
      paddingX: ['paddingLeft', 'paddingRight'],
      paddingY: ['paddingTop', 'paddingBottom'],
      size: ['width', 'height'],
    },
    QA = {
      color: 'colors',
      backgroundColor: 'colors',
      borderColor: 'colors',
      margin: 'space',
      marginTop: 'space',
      marginRight: 'space',
      marginBottom: 'space',
      marginLeft: 'space',
      marginX: 'space',
      marginY: 'space',
      padding: 'space',
      paddingTop: 'space',
      paddingRight: 'space',
      paddingBottom: 'space',
      paddingLeft: 'space',
      paddingX: 'space',
      paddingY: 'space',
      top: 'space',
      right: 'space',
      bottom: 'space',
      left: 'space',
      gridGap: 'space',
      gridColumnGap: 'space',
      gridRowGap: 'space',
      gap: 'space',
      columnGap: 'space',
      rowGap: 'space',
      fontFamily: 'fonts',
      fontSize: 'fontSizes',
      fontWeight: 'fontWeights',
      lineHeight: 'lineHeights',
      letterSpacing: 'letterSpacings',
      border: 'borders',
      borderTop: 'borders',
      borderRight: 'borders',
      borderBottom: 'borders',
      borderLeft: 'borders',
      borderWidth: 'borderWidths',
      borderStyle: 'borderStyles',
      borderRadius: 'radii',
      borderTopRightRadius: 'radii',
      borderTopLeftRadius: 'radii',
      borderBottomRightRadius: 'radii',
      borderBottomLeftRadius: 'radii',
      borderTopWidth: 'borderWidths',
      borderTopColor: 'colors',
      borderTopStyle: 'borderStyles',
      borderBottomWidth: 'borderWidths',
      borderBottomColor: 'colors',
      borderBottomStyle: 'borderStyles',
      borderLeftWidth: 'borderWidths',
      borderLeftColor: 'colors',
      borderLeftStyle: 'borderStyles',
      borderRightWidth: 'borderWidths',
      borderRightColor: 'colors',
      borderRightStyle: 'borderStyles',
      outlineColor: 'colors',
      boxShadow: 'shadows',
      textShadow: 'shadows',
      zIndex: 'zIndices',
      width: 'sizes',
      minWidth: 'sizes',
      maxWidth: 'sizes',
      height: 'sizes',
      minHeight: 'sizes',
      maxHeight: 'sizes',
      flexBasis: 'sizes',
      size: 'sizes',
      fill: 'colors',
      stroke: 'colors',
    },
    RA = function (r, e) {
      if ('number' != typeof e || e >= 0) return xb(r, e, e);
      var o = Math.abs(e),
        t = xb(r, o, o);
      return 'string' == typeof t ? '-' + t : -1 * t;
    },
    SA = [
      'margin',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft',
      'marginX',
      'marginY',
      'top',
      'bottom',
      'left',
      'right',
    ].reduce(function (r, e) {
      var o;
      return Object.assign({}, r, (((o = {})[e] = RA), o));
    }, {}),
    TA = function (r) {
      return function (e) {
        var o = {},
          t = xb(e, 'breakpoints', NA),
          s = [null].concat(
            t.map(function (r) {
              return '@media screen and (min-width: ' + r + ')';
            })
          );
        for (var i in r) {
          var a = 'function' == typeof r[i] ? r[i](e) : r[i];
          if (null != a)
            if (Array.isArray(a))
              for (var $ = 0; $ < a.slice(0, s.length).length; $++) {
                var n = s[$];
                n
                  ? ((o[n] = o[n] || {}), null != a[$] && (o[n][i] = a[$]))
                  : (o[i] = a[$]);
              }
            else o[i] = a;
        }
        return o;
      };
    },
    pj = function (r) {
      return function (e) {
        void 0 === e && (e = {});
        var o = Object.assign({}, OA, e.theme || e),
          t = {},
          s = 'function' == typeof r ? r(o) : r,
          i = TA(s)(o);
        for (var a in i) {
          var $ = i[a],
            n = 'function' == typeof $ ? $(o) : $;
          if ('variant' !== a) {
            if (n && 'object' == typeof n) t[a] = pj(n)(o);
            else {
              var d = xb(PA, a, a),
                p = xb(QA, d),
                m = xb(o, p, xb(o, d, {})),
                g = xb(SA, d, xb)(m, n, n);
              if (aq[d])
                for (var l = aq[d], c = 0; c < l.length; c++) t[l[c]] = g;
              else t[d] = g;
            }
          } else {
            var z = pj(xb(o, n))(o);
            t = Object.assign({}, t, z);
          }
        }
        return t;
      };
    },
    UA = function () {
      return sa(Ip, {
        styles: function (r) {
          if (!1 === r.useBodyStyles || (r.styles && !r.styles.root)) return !1;
          var e = !1 === r.useBorderBox ? null : 'border-box';
          return pj({
            '*': {boxSizing: e},
            body: {margin: 0, variant: 'styles.root'},
          })(r);
        },
      });
    },
    VA = function (r) {
      var e = r.theme,
        o = r.components,
        t = r.children;
      return 'function' == typeof jj().setColorMode
        ? sa(Rp, {theme: e}, sa(_p, {components: o, children: t}))
        : sa(
            Rp,
            {theme: e},
            sa(tA, null, sa(UA), sa(_p, {components: o, children: t}))
          );
    };
  eg();
  var bq = function (e, r) {
    var $J4Nk$$interop$default = ya(Ob);
    var t = $J4Nk$$interop$default.d({}, e, r);
    for (var $ in e) {
      var a;
      e[$] &&
        'object' == typeof r[$] &&
        $J4Nk$$interop$default.d(
          t,
          (((a = {})[$] = $J4Nk$$interop$default.d(e[$], r[$])), a)
        );
    }
    return t;
  };
  var WA = function (e) {
      var r = {};
      return (
        Object.keys(e)
          .sort(function (e, r) {
            return e.localeCompare(r, void 0, {
              numeric: !0,
              sensitivity: 'base',
            });
          })
          .forEach(function (t) {
            r[t] = e[t];
          }),
        r
      );
    },
    XA = {
      breakpoints: [40, 52, 64].map(function (e) {
        return e + 'em';
      }),
    },
    cq = function (e) {
      return '@media screen and (min-width: ' + e + ')';
    },
    YA = function (e, r) {
      return ac(r, e, e);
    },
    ac = function (e, r, t, $, a) {
      for (r = r && r.split ? r.split('.') : [r], $ = 0; $ < r.length; $++)
        e = e ? e[r[$]] : a;
      return e === a ? t : e;
    };
  var qj = function e(r) {
    var t = {},
      $ = function (e) {
        var $ = {},
          a = !1,
          o = e.theme && e.theme.disableStyledSystemCache;
        for (var n in e)
          if (r[n]) {
            var i = r[n],
              s = e[n],
              l = ac(e.theme, i.scale, i.defaults);
            var $J4Nk$$interop$default = ya(Ob);
            if ('object' != typeof s) $J4Nk$$interop$default.d($, i(s, l, e));
            else {
              if (
                ((t.breakpoints =
                  (!o && t.breakpoints) ||
                  ac(e.theme, 'breakpoints', XA.breakpoints)),
                Array.isArray(s))
              ) {
                (t.media =
                  (!o && t.media) || [null].concat(t.breakpoints.map(cq))),
                  ($ = bq($, ZA(t.media, i, l, s, e)));
                continue;
              }
              null !== s &&
                (($ = bq($, $A(t.breakpoints, i, l, s, e))), (a = !0));
            }
          }
        return a && ($ = WA($)), $;
      };
    ($.config = r), ($.propNames = Object.keys(r)), ($.cache = t);
    var a = Object.keys(r).filter(function (e) {
      return 'config' !== e;
    });
    return (
      a.length > 1 &&
        a.forEach(function (t) {
          var a;
          $[t] = e((((a = {})[t] = r[t]), a));
        }),
      $
    );
  };
  var ZA = function (e, r, t, $, a) {
      var o = {};
      return (
        $.slice(0, e.length).forEach(function ($, n) {
          var i,
            s = e[n],
            l = r($, t, a);
          var $J4Nk$$interop$default = ya(Ob);
          s
            ? $J4Nk$$interop$default.d(
                o,
                (((i = {})[s] = $J4Nk$$interop$default.d({}, o[s], l)), i)
              )
            : $J4Nk$$interop$default.d(o, l);
        }),
        o
      );
    },
    $A = function (e, r, t, $, a) {
      var o = {};
      for (var n in $) {
        var i = e[n],
          s = r($[n], t, a);
        var $J4Nk$$interop$default = ya(Ob);
        if (i) {
          var l,
            c = cq(i);
          var $J4Nk$$interop$default = ya(Ob);
          $J4Nk$$interop$default.d(
            o,
            (((l = {})[c] = $J4Nk$$interop$default.d({}, o[c], s)), l)
          );
        } else $J4Nk$$interop$default.d(o, s);
      }
      return o;
    },
    dq = function (e) {
      var r = e.properties,
        t = e.property,
        $ = e.scale,
        a = e.transform,
        o = void 0 === a ? YA : a,
        n = e.defaultScale;
      r = r || [t];
      var i = function (e, t, $) {
        var a = {},
          n = o(e, t, $);
        if (null !== n)
          return (
            r.forEach(function (e) {
              a[e] = n;
            }),
            a
          );
      };
      return (i.scale = $), (i.defaults = n), i;
    };
  var mb = function (e) {
    void 0 === e && (e = {});
    var r = {};
    return (
      Object.keys(e).forEach(function (t) {
        var $ = e[t];
        r[t] =
          !0 !== $
            ? 'function' != typeof $
              ? dq($)
              : $
            : dq({property: t, scale: t});
      }),
      qj(r)
    );
  };
  var eq = function () {
    for (var e = {}, r = arguments.length, t = new Array(r), $ = 0; $ < r; $++)
      t[$] = arguments[$];
    return (
      t.forEach(function (r) {
        var $J4Nk$$interop$default = ya(Ob);
        r && r.config && $J4Nk$$interop$default.d(e, r.config);
      }),
      qj(e)
    );
  };
  var _A = function (e) {
      return 'number' == typeof e && !isNaN(e);
    },
    aB = function (e, t) {
      return ac(t, e, !_A(e) || e > 1 ? e : 100 * e + '%');
    },
    bB = {
      width: {property: 'width', scale: 'sizes', transform: aB},
      height: {property: 'height', scale: 'sizes'},
      minWidth: {property: 'minWidth', scale: 'sizes'},
      minHeight: {property: 'minHeight', scale: 'sizes'},
      maxWidth: {property: 'maxWidth', scale: 'sizes'},
      maxHeight: {property: 'maxHeight', scale: 'sizes'},
      size: {properties: ['width', 'height'], scale: 'sizes'},
      overflow: !0,
      overflowX: !0,
      overflowY: !0,
      display: !0,
      verticalAlign: !0,
    },
    Ta = mb(bB);
  var rj = {
    color: {property: 'color', scale: 'colors'},
    backgroundColor: {property: 'backgroundColor', scale: 'colors'},
    opacity: !0,
  };
  rj.bg = rj.backgroundColor;
  var Yf = mb(rj);
  var cB = {fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]},
    dB = {
      fontFamily: {property: 'fontFamily', scale: 'fonts'},
      fontSize: {
        property: 'fontSize',
        scale: 'fontSizes',
        defaultScale: cB.fontSizes,
      },
      fontWeight: {property: 'fontWeight', scale: 'fontWeights'},
      lineHeight: {property: 'lineHeight', scale: 'lineHeights'},
      letterSpacing: {property: 'letterSpacing', scale: 'letterSpacings'},
      textAlign: !0,
      fontStyle: !0,
    },
    bc = mb(dB);
  var eB = {
      alignItems: !0,
      alignContent: !0,
      justifyItems: !0,
      justifyContent: !0,
      flexWrap: !0,
      flexDirection: !0,
      flex: !0,
      flexGrow: !0,
      flexShrink: !0,
      flexBasis: !0,
      justifySelf: !0,
      alignSelf: !0,
      order: !0,
    },
    Oa = mb(eB);
  var sj = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
    fB = {
      gridGap: {property: 'gridGap', scale: 'space', defaultScale: sj.space},
      gridColumnGap: {
        property: 'gridColumnGap',
        scale: 'space',
        defaultScale: sj.space,
      },
      gridRowGap: {
        property: 'gridRowGap',
        scale: 'space',
        defaultScale: sj.space,
      },
      gridColumn: !0,
      gridRow: !0,
      gridAutoFlow: !0,
      gridAutoColumns: !0,
      gridAutoRows: !0,
      gridTemplateColumns: !0,
      gridTemplateRows: !0,
      gridTemplateAreas: !0,
      gridArea: !0,
    },
    Ua = mb(fB);
  var gB = {
      border: {property: 'border', scale: 'borders'},
      borderWidth: {property: 'borderWidth', scale: 'borderWidths'},
      borderStyle: {property: 'borderStyle', scale: 'borderStyles'},
      borderColor: {property: 'borderColor', scale: 'colors'},
      borderRadius: {property: 'borderRadius', scale: 'radii'},
      borderTop: {property: 'borderTop', scale: 'borders'},
      borderTopLeftRadius:
        ({property: 'borderTopLeftRadius', scale: 'radii'},
        {property: 'borderTopLeftRadius', scale: 'radii'}),
      borderTopRightRadius:
        ({property: 'borderTopRightRadius', scale: 'radii'},
        {property: 'borderTopRightRadius', scale: 'radii'}),
      borderRight: {property: 'borderRight', scale: 'borders'},
      borderBottom: {property: 'borderBottom', scale: 'borders'},
      borderBottomLeftRadius:
        ({property: 'borderBottomLeftRadius', scale: 'radii'},
        {property: 'borderBottomLeftRadius', scale: 'radii'}),
      borderBottomRightRadius:
        ({property: 'borderBottomRightRadius', scale: 'radii'},
        {property: 'borderBottomRightRadius', scale: 'radii'}),
      borderLeft: {property: 'borderLeft', scale: 'borders'},
      borderX: {properties: ['borderLeft', 'borderRight'], scale: 'borders'},
      borderY: {properties: ['borderTop', 'borderBottom'], scale: 'borders'},
      borderTopWidth: {property: 'borderTopWidth', scale: 'borderWidths'},
      borderTopColor: {property: 'borderTopColor', scale: 'colors'},
      borderTopStyle: {property: 'borderTopStyle', scale: 'borderStyles'},
      borderBottomWidth: {property: 'borderBottomWidth', scale: 'borderWidths'},
      borderBottomColor: {property: 'borderBottomColor', scale: 'colors'},
      borderBottomStyle: {property: 'borderBottomStyle', scale: 'borderStyles'},
      borderLeftWidth: {property: 'borderLeftWidth', scale: 'borderWidths'},
      borderLeftColor: {property: 'borderLeftColor', scale: 'colors'},
      borderLeftStyle: {property: 'borderLeftStyle', scale: 'borderStyles'},
      borderRightWidth: {property: 'borderRightWidth', scale: 'borderWidths'},
      borderRightColor: {property: 'borderRightColor', scale: 'colors'},
      borderRightStyle: {property: 'borderRightStyle', scale: 'borderStyles'},
    },
    Kb = mb(gB);
  var Lb = {
    background: !0,
    backgroundImage: !0,
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
  };
  (Lb.bgImage = Lb.backgroundImage),
    (Lb.bgSize = Lb.backgroundSize),
    (Lb.bgPosition = Lb.backgroundPosition),
    (Lb.bgRepeat = Lb.backgroundRepeat);
  var le = mb(Lb);
  var Zf = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
    hB = {
      position: !0,
      zIndex: {property: 'zIndex', scale: 'zIndices'},
      top: {property: 'top', scale: 'space', defaultScale: Zf.space},
      right: {property: 'right', scale: 'space', defaultScale: Zf.space},
      bottom: {property: 'bottom', scale: 'space', defaultScale: Zf.space},
      left: {property: 'left', scale: 'space', defaultScale: Zf.space},
    },
    ad = mb(hB);
  var Pa = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
    fq = function (a) {
      return 'number' == typeof a && !isNaN(a);
    },
    vc = function (a, $) {
      if (!fq(a)) return ac($, a, a);
      var n = a < 0,
        t = Math.abs(a),
        r = ac($, t, t);
      return fq(r) ? r * (n ? -1 : 1) : n ? '-' + r : r;
    },
    ha = {};
  (ha.margin = {
    margin: {
      property: 'margin',
      scale: 'space',
      transform: vc,
      defaultScale: Pa.space,
    },
    marginTop: {
      property: 'marginTop',
      scale: 'space',
      transform: vc,
      defaultScale: Pa.space,
    },
    marginRight: {
      property: 'marginRight',
      scale: 'space',
      transform: vc,
      defaultScale: Pa.space,
    },
    marginBottom: {
      property: 'marginBottom',
      scale: 'space',
      transform: vc,
      defaultScale: Pa.space,
    },
    marginLeft: {
      property: 'marginLeft',
      scale: 'space',
      transform: vc,
      defaultScale: Pa.space,
    },
    marginX: {
      properties: ['marginLeft', 'marginRight'],
      scale: 'space',
      transform: vc,
      defaultScale: Pa.space,
    },
    marginY: {
      properties: ['marginTop', 'marginBottom'],
      scale: 'space',
      transform: vc,
      defaultScale: Pa.space,
    },
  }),
    (ha.margin.m = ha.margin.margin),
    (ha.margin.mt = ha.margin.marginTop),
    (ha.margin.mr = ha.margin.marginRight),
    (ha.margin.mb = ha.margin.marginBottom),
    (ha.margin.ml = ha.margin.marginLeft),
    (ha.margin.mx = ha.margin.marginX),
    (ha.margin.my = ha.margin.marginY),
    (ha.padding = {
      padding: {property: 'padding', scale: 'space', defaultScale: Pa.space},
      paddingTop: {
        property: 'paddingTop',
        scale: 'space',
        defaultScale: Pa.space,
      },
      paddingRight: {
        property: 'paddingRight',
        scale: 'space',
        defaultScale: Pa.space,
      },
      paddingBottom: {
        property: 'paddingBottom',
        scale: 'space',
        defaultScale: Pa.space,
      },
      paddingLeft: {
        property: 'paddingLeft',
        scale: 'space',
        defaultScale: Pa.space,
      },
      paddingX: {
        properties: ['paddingLeft', 'paddingRight'],
        scale: 'space',
        defaultScale: Pa.space,
      },
      paddingY: {
        properties: ['paddingTop', 'paddingBottom'],
        scale: 'space',
        defaultScale: Pa.space,
      },
    }),
    (ha.padding.p = ha.padding.padding),
    (ha.padding.pt = ha.padding.paddingTop),
    (ha.padding.pr = ha.padding.paddingRight),
    (ha.padding.pb = ha.padding.paddingBottom),
    (ha.padding.pl = ha.padding.paddingLeft),
    (ha.padding.px = ha.padding.paddingX),
    (ha.padding.py = ha.padding.paddingY);
  var iB = mb(ha.margin);
  var jB = mb(ha.padding);
  var tj = eq(iB, jB);
  var kB = mb({
    boxShadow: {property: 'boxShadow', scale: 'shadows'},
    textShadow: {property: 'textShadow', scale: 'shadows'},
  });
  function uj() {
    return (uj =
      Object.assign ||
      function (r) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e];
          for (var o in t)
            Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
        }
        return r;
      }).apply(this, arguments);
  }
  var yb = function (r, e, t, o, i) {
    for (e = e && e.split ? e.split('.') : [e], o = 0; o < e.length; o++)
      r = r ? r[e[o]] : i;
    return r === i ? t : r;
  };
  var lB = [40, 52, 64].map(function (r) {
      return r + 'em';
    }),
    mB = {
      space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
      fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    },
    nB = {
      bg: 'backgroundColor',
      m: 'margin',
      mt: 'marginTop',
      mr: 'marginRight',
      mb: 'marginBottom',
      ml: 'marginLeft',
      mx: 'marginX',
      my: 'marginY',
      p: 'padding',
      pt: 'paddingTop',
      pr: 'paddingRight',
      pb: 'paddingBottom',
      pl: 'paddingLeft',
      px: 'paddingX',
      py: 'paddingY',
    },
    gq = {
      marginX: ['marginLeft', 'marginRight'],
      marginY: ['marginTop', 'marginBottom'],
      paddingX: ['paddingLeft', 'paddingRight'],
      paddingY: ['paddingTop', 'paddingBottom'],
      size: ['width', 'height'],
    },
    oB = {
      color: 'colors',
      backgroundColor: 'colors',
      borderColor: 'colors',
      margin: 'space',
      marginTop: 'space',
      marginRight: 'space',
      marginBottom: 'space',
      marginLeft: 'space',
      marginX: 'space',
      marginY: 'space',
      padding: 'space',
      paddingTop: 'space',
      paddingRight: 'space',
      paddingBottom: 'space',
      paddingLeft: 'space',
      paddingX: 'space',
      paddingY: 'space',
      top: 'space',
      right: 'space',
      bottom: 'space',
      left: 'space',
      gridGap: 'space',
      gridColumnGap: 'space',
      gridRowGap: 'space',
      gap: 'space',
      columnGap: 'space',
      rowGap: 'space',
      fontFamily: 'fonts',
      fontSize: 'fontSizes',
      fontWeight: 'fontWeights',
      lineHeight: 'lineHeights',
      letterSpacing: 'letterSpacings',
      border: 'borders',
      borderTop: 'borders',
      borderRight: 'borders',
      borderBottom: 'borders',
      borderLeft: 'borders',
      borderWidth: 'borderWidths',
      borderStyle: 'borderStyles',
      borderRadius: 'radii',
      borderTopRightRadius: 'radii',
      borderTopLeftRadius: 'radii',
      borderBottomRightRadius: 'radii',
      borderBottomLeftRadius: 'radii',
      borderTopWidth: 'borderWidths',
      borderTopColor: 'colors',
      borderTopStyle: 'borderStyles',
      borderBottomWidth: 'borderWidths',
      borderBottomColor: 'colors',
      borderBottomStyle: 'borderStyles',
      borderLeftWidth: 'borderWidths',
      borderLeftColor: 'colors',
      borderLeftStyle: 'borderStyles',
      borderRightWidth: 'borderWidths',
      borderRightColor: 'colors',
      borderRightStyle: 'borderStyles',
      outlineColor: 'colors',
      boxShadow: 'shadows',
      textShadow: 'shadows',
      zIndex: 'zIndices',
      width: 'sizes',
      minWidth: 'sizes',
      maxWidth: 'sizes',
      height: 'sizes',
      minHeight: 'sizes',
      maxHeight: 'sizes',
      flexBasis: 'sizes',
      size: 'sizes',
      fill: 'colors',
      stroke: 'colors',
    },
    pB = function (r, e) {
      if ('number' != typeof e || e >= 0) return yb(r, e, e);
      var t = Math.abs(e),
        o = yb(r, t, t);
      return 'string' == typeof o ? '-' + o : -1 * o;
    },
    qB = [
      'margin',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft',
      'marginX',
      'marginY',
      'top',
      'bottom',
      'left',
      'right',
    ].reduce(function (r, e) {
      var t;
      return uj({}, r, (((t = {})[e] = pB), t));
    }, {}),
    rB = function (r) {
      return function (e) {
        var t = {},
          o = yb(e, 'breakpoints', lB),
          i = [null].concat(
            o.map(function (r) {
              return '@media screen and (min-width: ' + r + ')';
            })
          );
        for (var a in r) {
          var s = 'function' == typeof r[a] ? r[a](e) : r[a];
          if (null != s)
            if (Array.isArray(s))
              for (var n = 0; n < s.slice(0, i.length).length; n++) {
                var d = i[n];
                d
                  ? ((t[d] = t[d] || {}), null != s[n] && (t[d][a] = s[n]))
                  : (t[a] = s[n]);
              }
            else t[a] = s;
        }
        return t;
      };
    };
  var sB = function r(e) {
    return function (t) {
      void 0 === t && (t = {});
      var o = uj({}, mB, {}, t.theme || t),
        i = {},
        a = 'function' == typeof e ? e(o) : e,
        s = rB(a)(o);
      for (var n in s) {
        var d = s[n],
          p = 'function' == typeof d ? d(o) : d;
        if ('variant' !== n) {
          if (p && 'object' == typeof p) i[n] = r(p)(o);
          else {
            var $ = yb(nB, n, n),
              l = yb(oB, $),
              g = yb(o, l, yb(o, $, {})),
              c = yb(qB, $, yb)(g, p, p);
            if (gq[$])
              for (var m = gq[$], f = 0; f < m.length; f++) i[m[f]] = c;
            else i[$] = c;
          }
        } else i = uj({}, i, {}, r(yb(o, p))(o));
      }
      return i;
    };
  };
  var vj = function (t) {
    var e,
      $,
      r = t.scale,
      o = t.prop,
      v = void 0 === o ? 'variant' : o,
      a = t.variants,
      l = void 0 === a ? {} : a,
      p = t.key;
    (($ = Object.keys(l).length
      ? function (t, e, $) {
          return sB(ac(e, t, null))($.theme);
        }
      : function (t, e) {
          return ac(e, t, null);
        }).scale = r || p),
      ($.defaults = l);
    var b = (((e = {})[v] = $), e);
    return qj(b);
  };
  var tB = vj({key: 'buttons'});
  var uB = vj({key: 'textStyles', prop: 'textStyle'});
  var vB = vj({key: 'colorStyles', prop: 'colors'});
  var x = Ta.width,
    y = Ta.height,
    z = Ta.minWidth,
    A = Ta.minHeight,
    B = Ta.maxWidth,
    C = Ta.maxHeight,
    D = Ta.size,
    E = Ta.verticalAlign,
    F = Ta.display,
    G = Ta.overflow,
    H = Ta.overflowX,
    I = Ta.overflowY,
    J = Yf.opacity,
    K = bc.fontSize,
    L = bc.fontFamily,
    M = bc.fontWeight,
    N = bc.lineHeight,
    O = bc.textAlign,
    P = bc.fontStyle,
    R = bc.letterSpacing,
    S = Oa.alignItems,
    T = Oa.alignContent,
    U = Oa.justifyItems,
    V = Oa.justifyContent,
    W = Oa.flexWrap,
    X = Oa.flexDirection,
    Z = Oa.flex,
    $ = Oa.flexGrow,
    _ = Oa.flexShrink,
    _a = Oa.flexBasis,
    gD = Oa.justifySelf,
    hD = Oa.alignSelf,
    iD = Oa.order,
    jD = Ua.gridGap,
    kD = Ua.gridColumnGap,
    lD = Ua.gridRowGap,
    mD = Ua.gridColumn,
    nD = Ua.gridRow,
    oD = Ua.gridAutoFlow,
    pD = Ua.gridAutoColumns,
    qD = Ua.gridAutoRows,
    rD = Ua.gridTemplateColumns,
    sD = Ua.gridTemplateRows,
    tD = Ua.gridTemplateAreas,
    uD = Ua.gridArea,
    vD = Kb.borderWidth,
    wD = Kb.borderStyle,
    xD = Kb.borderColor,
    yD = Kb.borderTop,
    zD = Kb.borderRight,
    AD = Kb.borderBottom,
    BD = Kb.borderLeft,
    CD = Kb.borderRadius,
    DD = le.backgroundImage,
    ED = le.backgroundSize,
    FD = le.backgroundPosition,
    GD = le.backgroundRepeat,
    HD = ad.zIndex,
    ID = ad.top,
    JD = ad.right,
    KD = ad.bottom,
    LD = ad.left;
  yi(), Ai();
  var wB = eq(tj, bc, Yf, Ta, Oa, Kb, le, ad, Ua, kB, tB, uB, vB),
    xB = wB.propNames;
  var hq = function ($) {
    var r = new RegExp('^(' + $.join('|') + ')$');
    return Jf(function ($) {
      return zi($) && !r.test($);
    });
  };
  var MD = hq(xB);
  Ja();
  var yB = hq(tj.propNames.concat(Yf.propNames)),
    zB = function (e) {
      return Jb(e.sx)(e.theme);
    },
    AB = function (e) {
      return Jb(e.__css)(e.theme);
    },
    BB = function (e) {
      var t = e.theme,
        r = e.variant,
        $ = e.__themeKey;
      return void 0 === $ && ($ = 'variants'), Jb(Ia(t, $ + '.' + r, Ia(t, r)));
    },
    ea = uc('div', {shouldForwardProp: yB})(
      {boxSizing: 'border-box', margin: 0, minWidth: 0},
      AB,
      BB,
      tj,
      Yf,
      zB,
      function (e) {
        return e.css;
      }
    ),
    ND = uc(ea)({display: 'flex'});
  function CB(e, t) {
    var r = {};
    for (var $ in e)
      Object.prototype.hasOwnProperty.call(e, $) &&
        -1 === t.indexOf($) &&
        (r[$] = e[$]);
    return r;
  }
  var DB = function (e) {
      return 'number' == typeof e ? e + 'px' : e;
    },
    iq = function (e) {
      return Array.isArray(e)
        ? e.map(iq)
        : !!e && 'repeat(auto-fit, minmax(' + DB(e) + ', 1fr))';
    },
    jq = function (e) {
      return Array.isArray(e)
        ? e.map(jq)
        : !!e && ('number' == typeof e ? 'repeat(' + e + ', 1fr)' : e);
    },
    OD = Q.d.forwardRef(function (e, t) {
      var r = e.width,
        $ = e.columns,
        o = e.gap;
      void 0 === o && (o = 3);
      var a = CB(e, ['width', 'columns', 'gap']),
        i = r ? iq(r) : jq($);
      return Q.d.createElement(
        ea,
        Object.assign({}, {ref: t}, a, {
          __themeKey: 'grids',
          __css: {display: 'grid', gridGap: o, gridTemplateColumns: i},
        })
      );
    }),
    EB = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign({}, {ref: t, as: 'button', variant: 'primary'}, e, {
          __themeKey: 'buttons',
          __css: {
            appearance: 'none',
            display: 'inline-block',
            textAlign: 'center',
            lineHeight: 'inherit',
            textDecoration: 'none',
            fontSize: 'inherit',
            px: 3,
            py: 2,
            color: 'white',
            bg: 'primary',
            border: 0,
            borderRadius: 4,
          },
        })
      );
    }),
    FB = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign({}, {ref: t, as: 'a', variant: 'styles.a'}, e, {
          __themeKey: 'links',
        })
      );
    }),
    PD = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign({}, {ref: t}, e, {__themeKey: 'text'})
      );
    }),
    QD = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign({}, {ref: t, as: 'h2', variant: 'heading'}, e, {
          __themeKey: 'text',
          __css: {
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
          },
        })
      );
    }),
    wj = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign({}, {ref: t, as: 'img'}, e, {
          __themeKey: 'images',
          __css: Object.assign({}, {maxWidth: '100%', height: 'auto'}, e.__css),
        })
      );
    }),
    RD = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign({}, {ref: t, variant: 'primary'}, e, {
          __themeKey: 'cards',
        })
      );
    }),
    GB = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign({}, {ref: t, as: 'label', variant: 'label'}, e, {
          __themeKey: 'forms',
          __css: {width: '100%', display: 'flex'},
        })
      );
    }),
    HB = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign({}, {ref: t, as: 'input', variant: 'input'}, e, {
          __themeKey: 'forms',
          __css: {
            display: 'block',
            width: '100%',
            p: 2,
            appearance: 'none',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            border: '1px solid',
            borderRadius: 4,
            color: 'inherit',
            bg: 'transparent',
          },
        })
      );
    });
  function IB(e, t) {
    var r = {};
    for (var $ in e)
      Object.prototype.hasOwnProperty.call(e, $) &&
        -1 === t.indexOf($) &&
        (r[$] = e[$]);
    return r;
  }
  var me = function (e) {
      var t = e.size;
      void 0 === t && (t = 24);
      var r = IB(e, ['size']);
      return Q.d.createElement(
        ea,
        Object.assign(
          {},
          {
            as: 'svg',
            xmlns: 'http://www.w3.org/2000/svg',
            width: t + '',
            height: t + '',
            viewBox: '0 0 24 24',
            fill: 'currentcolor',
          },
          r
        )
      );
    },
    kq = function (e) {
      return function (t) {
        var r = {};
        for (var $ in t) e($ || '') && (r[$] = t[$]);
        return r;
      };
    },
    lq = /^m[trblxy]?$/,
    mq = kq(function (e) {
      return lq.test(e);
    }),
    nq = kq(function (e) {
      return !lq.test(e);
    }),
    JB = function (e) {
      return Q.d.createElement(
        me,
        e,
        Q.d.createElement('path', {d: 'M7 10l5 5 5-5z'})
      );
    },
    SD = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign({}, mq(e), {sx: {display: 'flex'}}),
        Q.d.createElement(
          ea,
          Object.assign({}, {ref: t, as: 'select', variant: 'select'}, nq(e), {
            __themeKey: 'forms',
            __css: {
              display: 'block',
              width: '100%',
              p: 2,
              appearance: 'none',
              fontSize: 'inherit',
              lineHeight: 'inherit',
              border: '1px solid',
              borderRadius: 4,
              color: 'inherit',
              bg: 'transparent',
            },
          })
        ),
        Q.d.createElement(JB, {
          sx: {ml: -28, alignSelf: 'center', pointerEvents: 'none'},
        })
      );
    }),
    TD = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign({}, {ref: t, as: 'textarea', variant: 'textarea'}, e, {
          __themeKey: 'forms',
          __css: {
            display: 'block',
            width: '100%',
            p: 2,
            appearance: 'none',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            border: '1px solid',
            borderRadius: 4,
            color: 'inherit',
            bg: 'transparent',
          },
        })
      );
    });
  function KB(e, t) {
    var r = {};
    for (var $ in e)
      Object.prototype.hasOwnProperty.call(e, $) &&
        -1 === t.indexOf($) &&
        (r[$] = e[$]);
    return r;
  }
  var LB = function (e) {
      return Q.d.createElement(
        me,
        e,
        Q.d.createElement('path', {
          d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
        })
      );
    },
    MB = function (e) {
      return Q.d.createElement(
        me,
        e,
        Q.d.createElement('path', {
          d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
        })
      );
    },
    NB = function (e) {
      return Q.d.createElement(
        Q.d.Fragment,
        null,
        Q.d.createElement(
          LB,
          Object.assign({}, e, {
            __css: {display: 'none', 'input:checked ~ &': {display: 'block'}},
          })
        ),
        Q.d.createElement(
          MB,
          Object.assign({}, e, {
            __css: {display: 'block', 'input:checked ~ &': {display: 'none'}},
          })
        )
      );
    },
    UD = Q.d.forwardRef(function (e, t) {
      var r = e.className,
        $ = e.sx,
        o = e.variant;
      void 0 === o && (o = 'radio');
      var a = KB(e, ['className', 'sx', 'variant']);
      return Q.d.createElement(
        ea,
        null,
        Q.d.createElement(
          ea,
          Object.assign({}, {ref: t, as: 'input', type: 'radio'}, a, {
            sx: {
              position: 'absolute',
              opacity: 0,
              zIndex: -1,
              width: 1,
              height: 1,
              overflow: 'hidden',
            },
          })
        ),
        Q.d.createElement(ea, {
          as: NB,
          'aria-hidden': 'true',
          __themeKey: 'forms',
          variant: o,
          className: r,
          sx: $,
          __css: {
            mr: 2,
            borderRadius: 9999,
            color: 'gray',
            'input:checked ~ &': {color: 'primary'},
            'input:focus ~ &': {bg: 'highlight'},
          },
        })
      );
    });
  function OB(e, t) {
    var r = {};
    for (var $ in e)
      Object.prototype.hasOwnProperty.call(e, $) &&
        -1 === t.indexOf($) &&
        (r[$] = e[$]);
    return r;
  }
  var PB = function (e) {
      return Q.d.createElement(
        me,
        e,
        Q.d.createElement('path', {
          d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
        })
      );
    },
    QB = function (e) {
      return Q.d.createElement(
        me,
        e,
        Q.d.createElement('path', {
          d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
        })
      );
    },
    RB = function (e) {
      return Q.d.createElement(
        Q.d.Fragment,
        null,
        Q.d.createElement(
          PB,
          Object.assign({}, e, {
            __css: {display: 'none', 'input:checked ~ &': {display: 'block'}},
          })
        ),
        Q.d.createElement(
          QB,
          Object.assign({}, e, {
            __css: {display: 'block', 'input:checked ~ &': {display: 'none'}},
          })
        )
      );
    },
    VD = Q.d.forwardRef(function (e, t) {
      var r = e.className,
        $ = e.sx,
        o = e.variant;
      void 0 === o && (o = 'checkbox');
      var a = OB(e, ['className', 'sx', 'variant']);
      return Q.d.createElement(
        ea,
        null,
        Q.d.createElement(
          ea,
          Object.assign({}, {ref: t, as: 'input', type: 'checkbox'}, a, {
            sx: {
              position: 'absolute',
              opacity: 0,
              zIndex: -1,
              width: 1,
              height: 1,
              overflow: 'hidden',
            },
          })
        ),
        Q.d.createElement(ea, {
          as: RB,
          'aria-hidden': 'true',
          __themeKey: 'forms',
          variant: o,
          className: r,
          sx: $,
          __css: {
            mr: 2,
            borderRadius: 4,
            color: 'gray',
            'input:checked ~ &': {color: 'primary'},
            'input:focus ~ &': {color: 'primary', bg: 'highlight'},
          },
        })
      );
    }),
    xj = {
      appearance: 'none',
      width: 16,
      height: 16,
      bg: 'currentcolor',
      border: 0,
      borderRadius: 9999,
      variant: 'forms.slider.thumb',
    },
    WD = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign(
          {},
          {ref: t, as: 'input', type: 'range', variant: 'slider'},
          e,
          {
            __themeKey: 'forms',
            __css: {
              display: 'block',
              width: '100%',
              height: 4,
              my: 2,
              cursor: 'pointer',
              appearance: 'none',
              borderRadius: 9999,
              color: 'inherit',
              bg: 'gray',
              ':focus': {outline: 'none', color: 'primary'},
              '&::-webkit-slider-thumb': xj,
              '&::-moz-range-thumb': xj,
              '&::-ms-thumb': xj,
            },
          }
        )
      );
    });
  function SB(e, t) {
    var r = {};
    for (var $ in e)
      Object.prototype.hasOwnProperty.call(e, $) &&
        -1 === t.indexOf($) &&
        (r[$] = e[$]);
    return r;
  }
  var XD = Q.d.forwardRef(function (e, t) {
      var r = e.as;
      void 0 === r && (r = HB);
      var $ = e.label,
        o = e.name,
        a = SB(e, ['as', 'label', 'name']);
      return Q.d.createElement(
        ea,
        mq(a),
        Q.d.createElement(GB, {htmlFor: o}, $),
        Q.d.createElement(r, Object.assign({}, {ref: t, id: o, name: o}, nq(a)))
      );
    }),
    YD = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign(
          {},
          {ref: t, as: 'progress', variant: 'styles.progress'},
          e,
          {
            __css: {
              display: 'block',
              width: '100%',
              height: '4px',
              margin: 0,
              padding: 0,
              overflow: 'hidden',
              appearance: 'none',
              color: 'primary',
              bg: 'gray',
              borderRadius: 9999,
              border: 'none',
              '&::-webkit-progress-bar': {bg: 'transparent'},
              '&::-webkit-progress-value': {bg: 'currentcolor'},
              '&::-moz-progress-bar': {bg: 'currentcolor'},
            },
          }
        )
      );
    });
  function TB(e, t) {
    var r = {};
    for (var $ in e)
      Object.prototype.hasOwnProperty.call(e, $) &&
        -1 === t.indexOf($) &&
        (r[$] = e[$]);
    return r;
  }
  var ZD = Q.d.forwardRef(function (e, t) {
    var r = e.size;
    void 0 === r && (r = 128);
    var $ = e.strokeWidth;
    void 0 === $ && ($ = 2);
    var o = e.value;
    void 0 === o && (o = 0);
    var a = e.min;
    void 0 === a && (a = 0);
    var i = e.max;
    void 0 === i && (i = 1);
    var n = e.title,
      c = TB(e, ['size', 'strokeWidth', 'value', 'min', 'max', 'title']),
      s = 16 - $,
      p = 2 * s * Math.PI,
      k = p - ((o - a) / (i - a)) * p;
    return Q.d.createElement(
      ea,
      Object.assign(
        {},
        {
          ref: t,
          as: 'svg',
          viewBox: '0 0 32 32',
          width: r,
          height: r,
          strokeWidth: $,
          fill: 'none',
          stroke: 'currentcolor',
          role: 'img',
          'aria-valuenow': o,
          'aria-valuemin': a,
          'aria-valuemax': i,
        },
        c,
        {__css: {color: 'primary'}}
      ),
      n && Q.d.createElement('title', null, n),
      Q.d.createElement('circle', {cx: 16, cy: 16, r: s, opacity: 1 / 8}),
      Q.d.createElement('circle', {
        cx: 16,
        cy: 16,
        r: s,
        strokeDasharray: p,
        strokeDashoffset: k,
        transform: 'rotate(-90 16 16)',
      })
    );
  });
  function UB(e, t) {
    var r = {};
    for (var $ in e)
      Object.prototype.hasOwnProperty.call(e, $) &&
        -1 === t.indexOf($) &&
        (r[$] = e[$]);
    return r;
  }
  var VB = Jz({
      from: {transform: 'rotate(0deg)'},
      to: {transform: 'rotate(360deg)'},
    }),
    $D = Q.d.forwardRef(function (e, t) {
      var r = e.size;
      void 0 === r && (r = 48);
      var $ = e.strokeWidth;
      void 0 === $ && ($ = 4);
      var o = e.title;
      void 0 === o && (o = 'Loading...');
      var a = e.duration;
      void 0 === a && (a = 500);
      var i = UB(e, ['size', 'strokeWidth', 'max', 'title', 'duration']),
        n = 16 - $,
        c = 2 * n * Math.PI,
        s = c - 0.25 * c;
      return Q.d.createElement(
        ea,
        Object.assign(
          {},
          {
            ref: t,
            as: 'svg',
            viewBox: '0 0 32 32',
            width: r,
            height: r,
            strokeWidth: $,
            fill: 'none',
            stroke: 'currentcolor',
            role: 'img',
          },
          i,
          {__css: {color: 'primary', overflow: 'visible'}}
        ),
        Q.d.createElement('title', null, o),
        Q.d.createElement('circle', {cx: 16, cy: 16, r: n, opacity: 1 / 8}),
        Q.d.createElement(ea, {
          as: 'circle',
          cx: 16,
          cy: 16,
          r: n,
          strokeDasharray: c,
          strokeDashoffset: s,
          __css: {
            transformOrigin: '50% 50%',
            animationName: VB.toString(),
            animationTimingFunction: 'linear',
            animationDuration: a + 'ms',
            animationIterationCount: 'infinite',
          },
        })
      );
    });
  function WB(e, t) {
    var r = {};
    for (var $ in e)
      Object.prototype.hasOwnProperty.call(e, $) &&
        -1 === t.indexOf($) &&
        (r[$] = e[$]);
    return r;
  }
  var _D = Q.d.forwardRef(function (e, t) {
      var r = e.size;
      void 0 === r && (r = 48);
      var $ = WB(e, ['size']);
      return Q.d.createElement(
        wj,
        Object.assign({}, {ref: t, width: r, height: r, variant: 'avatar'}, $, {
          __css: {borderRadius: 9999},
        })
      );
    }),
    aE = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign({}, {ref: t}, e, {
          __themeKey: 'badges',
          __css: {
            display: 'inline-block',
            verticalAlign: 'baseline',
            fontSize: 0,
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            px: 1,
            borderRadius: 2,
            color: 'white',
            bg: 'primary',
          },
        })
      );
    });
  function XB(e, t) {
    var r = {};
    for (var $ in e)
      Object.prototype.hasOwnProperty.call(e, $) &&
        -1 === t.indexOf($) &&
        (r[$] = e[$]);
    return r;
  }
  var oq = Q.d.forwardRef(function (e, t) {
    var r = e.size;
    void 0 === r && (r = 32);
    var $ = XB(e, ['size']);
    return Q.d.createElement(
      ea,
      Object.assign({}, {ref: t, as: 'button', variant: 'icon'}, $, {
        __themeKey: 'buttons',
        __css: {
          appearance: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 1,
          width: r,
          height: r,
          color: 'inherit',
          bg: 'transparent',
          border: 'none',
          borderRadius: 4,
        },
      })
    );
  });
  function YB(e, t) {
    var r = {};
    for (var $ in e)
      Object.prototype.hasOwnProperty.call(e, $) &&
        -1 === t.indexOf($) &&
        (r[$] = e[$]);
    return r;
  }
  var ZB = Q.d.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '24',
        height: '24',
        fill: 'currentcolor',
        viewBox: '0 0 24 24',
      },
      Q.d.createElement('path', {
        d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
      })
    ),
    bE = Q.d.forwardRef(function (e, t) {
      var r = YB(e, ['size']);
      return Q.d.createElement(
        oq,
        Object.assign(
          {},
          {ref: t, title: 'Close', 'aria-label': 'Close', variant: 'close'},
          r,
          {children: ZB}
        )
      );
    }),
    cE = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign({}, {ref: t}, e, {
          __themeKey: 'alerts',
          __css: {
            display: 'flex',
            alignItems: 'center',
            px: 3,
            py: 2,
            fontWeight: 'bold',
            color: 'white',
            bg: 'primary',
            borderRadius: 4,
          },
        })
      );
    }),
    dE = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign({}, {ref: t, as: 'hr', variant: 'styles.hr'}, e, {
          __css: {
            color: 'gray',
            m: 0,
            my: 2,
            border: 0,
            borderBottom: '1px solid',
          },
        })
      );
    });
  function $B(e, t) {
    var r = {};
    for (var $ in e)
      Object.prototype.hasOwnProperty.call(e, $) &&
        -1 === t.indexOf($) &&
        (r[$] = e[$]);
    return r;
  }
  var eE = Q.d.forwardRef(function (e, t) {
    var r = e.ratio;
    void 0 === r && (r = 16 / 9);
    var $ = e.src,
      o = e.frameBorder;
    void 0 === o && (o = 0);
    var a = e.allowFullScreen;
    void 0 === a && (a = !0);
    var i = e.width;
    void 0 === i && (i = 560);
    var n = e.height;
    void 0 === n && (n = 315);
    var c = e.allow,
      s = $B(e, [
        'ratio',
        'src',
        'frameBorder',
        'allowFullScreen',
        'width',
        'height',
        'allow',
      ]);
    return Q.d.createElement(
      ea,
      Object.assign({}, s, {
        __css: {
          width: '100%',
          height: 0,
          paddingBottom: 100 / r + '%',
          position: 'relative',
          overflow: 'hidden',
        },
      }),
      Q.d.createElement(ea, {
        ref: t,
        as: 'iframe',
        src: $,
        width: i,
        height: n,
        frameBorder: o,
        allowFullScreen: a,
        allow: c,
        __css: {
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          bottom: 0,
          left: 0,
          border: 0,
        },
      })
    );
  });
  function _B(e, t) {
    var r = {};
    for (var $ in e)
      Object.prototype.hasOwnProperty.call(e, $) &&
        -1 === t.indexOf($) &&
        (r[$] = e[$]);
    return r;
  }
  var aC = Q.d.forwardRef(function (e, t) {
    var r = e.ratio;
    void 0 === r && (r = 4 / 3);
    var $ = e.children,
      o = _B(e, ['ratio', 'children']);
    return Q.d.createElement(
      ea,
      {ref: t, sx: {position: 'relative', overflow: 'hidden'}},
      Q.d.createElement(ea, {
        sx: {width: '100%', height: 0, paddingBottom: 100 / r + '%'},
      }),
      Q.d.createElement(
        ea,
        Object.assign({}, o, {
          __css: {position: 'absolute', top: 0, right: 0, bottom: 0, left: 0},
        }),
        $
      )
    );
  });
  function bC(e, t) {
    var r = {};
    for (var $ in e)
      Object.prototype.hasOwnProperty.call(e, $) &&
        -1 === t.indexOf($) &&
        (r[$] = e[$]);
    return r;
  }
  var fE = Q.d.forwardRef(function (e, t) {
      var r = e.ratio,
        $ = bC(e, ['ratio']);
      return Q.d.createElement(
        aC,
        {ratio: r},
        Q.d.createElement(
          wj,
          Object.assign({}, {ref: t}, $, {__css: {objectFit: 'cover'}})
        )
      );
    }),
    gE = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign({}, {ref: t, variant: 'container'}, e, {
          __themeKey: 'layout',
          __css: {width: '100%', maxWidth: 'container', mx: 'auto'},
        })
      );
    }),
    hE = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        FB,
        Object.assign({}, {ref: t, variant: 'nav'}, e, {
          __css: {
            color: 'inherit',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block',
            '&:hover, &:focus, &.active': {color: 'primary'},
          },
        })
      );
    }),
    iE = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        ea,
        Object.assign({}, {ref: t}, e, {
          __themeKey: 'messages',
          __css: {
            padding: 3,
            paddingLeft: function (e) {
              return e.space[3] - e.space[1];
            },
            borderLeftWidth: function (e) {
              return e.space[1];
            },
            borderLeftStyle: 'solid',
            borderLeftColor: 'primary',
            borderRadius: 4,
            bg: 'highlight',
          },
        })
      );
    }),
    cC = function (e) {
      var t = e.size;
      return (
        void 0 === t && (t = 24),
        Q.d.createElement(
          ea,
          {
            as: 'svg',
            xmlns: 'http://www.w3.org/2000/svg',
            width: t,
            height: t,
            fill: 'currentcolor',
            viewBox: '0 0 24 24',
            sx: {display: 'block', margin: 0},
          },
          Q.d.createElement('path', {
            d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
          })
        )
      );
    },
    jE = Q.d.forwardRef(function (e, t) {
      return Q.d.createElement(
        oq,
        Object.assign(
          {},
          {ref: t, title: 'Menu', 'aria-label': 'Toggle Menu', variant: 'menu'},
          e
        ),
        Q.d.createElement(cC, null)
      );
    });
  var ne = {};
  Ja();
  var dC =
      (ne && ne.__assign) ||
      function () {
        return (dC =
          Object.assign ||
          function (t) {
            for (var e, a = 1, o = arguments.length; a < o; a++)
              for (var $ in (e = arguments[a]))
                Object.prototype.hasOwnProperty.call(e, $) && (t[$] = e[$]);
            return t;
          }).apply(this, arguments);
      },
    wc = function (t) {
      return Q.d.createElement(
        ge.path,
        dC(
          {
            fill: 'transparent',
            strokeWidth: '3',
            stroke: 'hsl(0, 0%, 99%)',
            strokeLinecap: 'round',
          },
          t
        )
      );
    },
    eC = function () {
      return Q.d.createElement(
        'svg',
        {width: '27', height: '27', viewBox: '0 0 27 27'},
        Q.d.createElement(wc, {
          variants: {
            closed: {opacity: 0, d: 'M 7.5 14.5 L 19 14.5'},
            open: {opacity: 1, d: 'M 7 7 L 20 20'},
          },
          transition: {duration: 0.2},
        }),
        Q.d.createElement(wc, {
          variants: {
            closed: {opacity: 0, d: 'M 7.5 8.5 L 19 8.5'},
            open: {opacity: 1, d: 'M 7 20 L 20 7'},
          },
          transition: {duration: 0.2},
        }),
        Q.d.createElement(wc, {
          d: 'M22 21.6453C22 20 23 19.5 23 19.5C23 19.5 25.5 18 25.5 14V9C25.5 4 23 1.5 18 1.5H9C4 1.5 1.5 4 1.5 9V14C1.5 19 4 21 9 21H13.5C14 21 14 21 15 21.5L20.25 24.8572L20.8517 25.2118C21.5184 25.6046 22 25.631 22 24.8572V24.0287V22.7858V21.6453Z',
          variants: {closed: {opacity: 1}, open: {opacity: 0}},
          transition: {duration: 0.2},
        })
      );
    },
    pq = function () {
      return Q.d.createElement(
        'svg',
        {width: '24', height: '25', viewBox: '0 0 24 25', fill: 'none'},
        Q.d.createElement(wc, {
          variants: {
            closed: {opacity: 0, d: 'M 7.5 14.5 L 19 14.5'},
            open: {opacity: 1, d: 'M 5 5 L 20 20'},
          },
          transition: {duration: 0.2},
        }),
        Q.d.createElement(wc, {
          variants: {
            closed: {opacity: 0, d: 'M 7.5 8.5 L 19 8.5'},
            open: {opacity: 1, d: 'M 5 20 L 20 5'},
          },
          transition: {duration: 0.2},
        }),
        Q.d.createElement(ge.path, {
          d: 'M20.5 21.1453C20.5 19.5 21.5 19 21.5 19C21.5 19 24 18.5 24 13.5V8.5C24 3.5 21.5 1 16.5 1H7.5C2.5 1 0 3.5 0 8.5V13.5C0 18.5 2.5 20.5 7.5 20.5H12C12.5 20.5 12.5 20.5 13.5 21L18.75 24.3572L19.3517 24.7118C20.0184 25.1046 20.5 25.131 20.5 24.3572V23.5287V22.2858V21.1453Z',
          fill: 'white',
          fillOpacity: '0.7',
          variants: {closed: {opacity: 1}, open: {opacity: 0}},
          transition: {duration: 0.2},
        }),
        Q.d.createElement(ge.path, {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M21.5 18C21.5 18 20.5 18.5 20.5 20.1453V21.2858V22.5287V23.3572C20.5 24.131 20.0184 24.1046 19.3517 23.7118L18.75 23.3572L13.5 20C12.8174 19.6587 12.6007 19.5504 12.3729 19.516C12.267 19.5 12.1587 19.5 12 19.5H7.5C2.5 19.5 0 17.5 0 12.5V7.5C0 2.5 2.5 0 7.5 0H16.5C21.5 0 24 2.5 24 7.5V12.5C24 17.5 21.5 18 21.5 18ZM21 17.557C21.8581 17.557 24 13.557 23 13.057C22.3869 12.7505 21.8801 13.7414 21.4646 14.554C21.2023 15.0668 20.9764 15.5086 20.783 15.5086C20.283 15.5086 20 16.0554 20 16.7568C20 17.4582 20.1419 17.557 21 17.557Z',
          fill: 'white',
          variants: {closed: {opacity: 1}, open: {opacity: 0}},
          transition: {duration: 0.2},
        })
      );
    };
  ne.ToggleIconFilled = pq;
  var fC = function () {
      return Q.d.createElement(
        'svg',
        {width: '27', height: '27', viewBox: '0 0 27 27'},
        Q.d.createElement(wc, {
          variants: {
            closed: {opacity: 0, d: 'M 7.5 14.5 L 19 14.5'},
            open: {opacity: 1, d: 'M 7 7 L 20 20'},
          },
          transition: {duration: 0.2},
        }),
        Q.d.createElement(wc, {
          variants: {
            closed: {opacity: 0, d: 'M 7.5 8.5 L 19 8.5'},
            open: {opacity: 1, d: 'M 7 20 L 20 7'},
          },
          transition: {duration: 0.2},
        })
      );
    },
    gC = function (t) {
      var e = t.isOpen,
        a = t.customIconUrl,
        o = t.iconVariant;
      return a
        ? e
          ? Q.d.createElement(fC, null)
          : Q.d.createElement(wj, {
              src: a,
              style: {maxHeight: 40, maxWidth: 40},
            })
        : 'filled' === o
        ? Q.d.createElement(pq, null)
        : Q.d.createElement(eC, null);
    },
    yj = function (t) {
      var e = t.isOpen,
        a = t.isDisabled,
        o = t.customIconUrl,
        $ = t.iconVariant,
        r = t.style,
        i = t.toggle;
      return Q.d.createElement(
        EB,
        {
          className: 'Papercups-toggleButton',
          variant: 'primary',
          p: 0,
          style: r,
          sx: {variant: 'styles.WidgetToggle'},
          disabled: a,
          onClick: i,
        },
        Q.d.createElement(gC, {customIconUrl: o, iconVariant: $, isOpen: e})
      );
    };
  (ne.WidgetToggle = yj), (ne.default = yj);
  var Mb = {};
  var hC = {};
  hC = (e) =>
    encodeURIComponent(e).replace(/[!'()*]/g, (e) =>
      '%'.concat(e.charCodeAt(0).toString(16).toUpperCase())
    );
  var iC = {},
    qq = '%[a-f0-9]{2}',
    rq = new RegExp(qq, 'gi'),
    sq = new RegExp('(' + qq + ')+', 'gi');
  function zj(e, r) {
    try {
      return decodeURIComponent(e.join(''));
    } catch (n) {}
    if (1 === e.length) return e;
    r = r || 1;
    var t = e.slice(0, r),
      o = e.slice(r);
    return Array.prototype.concat.call([], zj(t), zj(o));
  }
  function jC(e) {
    try {
      return decodeURIComponent(e);
    } catch (o) {
      for (var r = e.match(rq), t = 1; t < r.length; t++)
        r = (e = zj(r, t).join('')).match(rq);
      return e;
    }
  }
  function kC(e) {
    for (
      var r = {'%FE%FF': '\uFFFD\uFFFD', '%FF%FE': '\uFFFD\uFFFD'},
        t = sq.exec(e);
      t;

    ) {
      try {
        r[t[0]] = decodeURIComponent(t[0]);
      } catch (p) {
        var o = jC(t[0]);
        o !== t[0] && (r[t[0]] = o);
      }
      t = sq.exec(e);
    }
    r['%C2'] = '\uFFFD';
    for (var n = Object.keys(r), $ = 0; $ < n.length; $++) {
      var c = n[$];
      e = e.replace(new RegExp(c, 'g'), r[c]);
    }
    return e;
  }
  iC = function (e) {
    if ('string' != typeof e)
      throw new TypeError(
        'Expected `encodedURI` to be of type `string`, got `' + typeof e + '`'
      );
    try {
      return (e = e.replace(/\+/g, ' ')), decodeURIComponent(e);
    } catch (r) {
      return kC(e);
    }
  };
  var tq = {};
  tq = function (t, e) {
    if ('string' != typeof t || 'string' != typeof e)
      throw new TypeError('Expected the arguments to be of type `string`');
    if ('' === e) return [t];
    var r = t.indexOf(e);
    return -1 === r ? [t] : [t.slice(0, r), t.slice(r + e.length)];
  };
  var xc = {};
  function Aj(r) {
    return (Aj =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              'function' == typeof Symbol &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          })(r);
  }
  function Bj(r) {
    return oC(r) || nC(r) || mC(r) || lC();
  }
  function lC() {
    throw new TypeError(
      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  function mC(r, e) {
    if (r) {
      if ('string' == typeof r) return Cj(r, e);
      var t = Object.prototype.toString.call(r).slice(8, -1);
      return (
        'Object' === t && r.constructor && (t = r.constructor.name),
        'Map' === t || 'Set' === t
          ? Array.from(r)
          : 'Arguments' === t ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          ? Cj(r, e)
          : void 0
      );
    }
  }
  function nC(r) {
    if ('undefined' != typeof Symbol && Symbol.iterator in Object(r))
      return Array.from(r);
  }
  function oC(r) {
    if (Array.isArray(r)) return Cj(r);
  }
  function Cj(r, e) {
    (null == e || e > r.length) && (e = r.length);
    for (var t = 0, a = new Array(e); t < e; t++) a[t] = r[t];
    return a;
  }
  var pC = function (r) {
    return null == r;
  };
  function qC(r) {
    switch (r.arrayFormat) {
      case 'index':
        return function (e) {
          return function (t, a) {
            var o = t.length;
            return void 0 === a ||
              (r.skipNull && null === a) ||
              (r.skipEmptyString && '' === a)
              ? t
              : [].concat(
                  Bj(t),
                  null === a
                    ? [[Ba(e, r), '[', o, ']'].join('')]
                    : [[Ba(e, r), '[', Ba(o, r), ']=', Ba(a, r)].join('')]
                );
          };
        };
      case 'bracket':
        return function (e) {
          return function (t, a) {
            return void 0 === a ||
              (r.skipNull && null === a) ||
              (r.skipEmptyString && '' === a)
              ? t
              : [].concat(
                  Bj(t),
                  null === a
                    ? [[Ba(e, r), '[]'].join('')]
                    : [[Ba(e, r), '[]=', Ba(a, r)].join('')]
                );
          };
        };
      case 'comma':
      case 'separator':
        return function (e) {
          return function (t, a) {
            return null == a || 0 === a.length
              ? t
              : 0 === t.length
              ? [[Ba(e, r), '=', Ba(a, r)].join('')]
              : [[t, Ba(a, r)].join(r.arrayFormatSeparator)];
          };
        };
      default:
        return function (e) {
          return function (t, a) {
            return void 0 === a ||
              (r.skipNull && null === a) ||
              (r.skipEmptyString && '' === a)
              ? t
              : [].concat(
                  Bj(t),
                  null === a ? [Ba(e, r)] : [[Ba(e, r), '=', Ba(a, r)].join('')]
                );
          };
        };
    }
  }
  function rC(r) {
    var e;
    switch (r.arrayFormat) {
      case 'index':
        return function (r, t, a) {
          (e = /\[(\d*)\]$/.exec(r)),
            (r = r.replace(/\[\d*\]$/, '')),
            e ? (void 0 === a[r] && (a[r] = {}), (a[r][e[1]] = t)) : (a[r] = t);
        };
      case 'bracket':
        return function (r, t, a) {
          (e = /(\[\])$/.exec(r)),
            (r = r.replace(/\[\]$/, '')),
            e
              ? void 0 !== a[r]
                ? (a[r] = [].concat(a[r], t))
                : (a[r] = [t])
              : (a[r] = t);
        };
      case 'comma':
      case 'separator':
        return function (e, t, a) {
          var o =
            'string' == typeof t &&
            t.split('').indexOf(r.arrayFormatSeparator) > -1
              ? t.split(r.arrayFormatSeparator).map(function (e) {
                  return oe(e, r);
                })
              : null === t
              ? t
              : oe(t, r);
          a[e] = o;
        };
      default:
        return function (r, e, t) {
          void 0 !== t[r] ? (t[r] = [].concat(t[r], e)) : (t[r] = e);
        };
    }
  }
  function uq(r) {
    if ('string' != typeof r || 1 !== r.length)
      throw new TypeError(
        'arrayFormatSeparator must be single character string'
      );
  }
  function Ba(r, e) {
    return e.encode ? (e.strict ? hC(r) : encodeURIComponent(r)) : r;
  }
  function oe(r, e) {
    return e.decode ? iC(r) : r;
  }
  function vq(r) {
    return Array.isArray(r)
      ? r.sort()
      : 'object' === Aj(r)
      ? vq(Object.keys(r))
          .sort(function (r, e) {
            return Number(r) - Number(e);
          })
          .map(function (e) {
            return r[e];
          })
      : r;
  }
  function wq(r) {
    var e = r.indexOf('#');
    return -1 !== e && (r = r.slice(0, e)), r;
  }
  function sC(r) {
    var e = '',
      t = r.indexOf('#');
    return -1 !== t && (e = r.slice(t)), e;
  }
  function xq(r) {
    var e = (r = wq(r)).indexOf('?');
    return -1 === e ? '' : r.slice(e + 1);
  }
  function yq(r, e) {
    return (
      e.parseNumbers &&
      !Number.isNaN(Number(r)) &&
      'string' == typeof r &&
      '' !== r.trim()
        ? (r = Number(r))
        : !e.parseBooleans ||
          null === r ||
          ('true' !== r.toLowerCase() && 'false' !== r.toLowerCase()) ||
          (r = 'true' === r.toLowerCase()),
      r
    );
  }
  function zq(r, e) {
    uq(
      (e = Object.assign(
        {
          decode: !0,
          sort: !0,
          arrayFormat: 'none',
          arrayFormatSeparator: ',',
          parseNumbers: !1,
          parseBooleans: !1,
        },
        e
      )).arrayFormatSeparator
    );
    var t = rC(e),
      a = Object.create(null);
    if ('string' != typeof r) return a;
    if (!(r = r.trim().replace(/^[?#&]/, ''))) return a;
    for (var o of r.split('&')) {
      var [n, $] = tq(e.decode ? o.replace(/\+/g, ' ') : o, '=');
      ($ =
        void 0 === $
          ? null
          : ['comma', 'separator'].includes(e.arrayFormat)
          ? $
          : oe($, e)),
        t(oe(n, e), $, a);
    }
    for (var v of Object.keys(a)) {
      var p = a[v];
      if ('object' === Aj(p) && null !== p)
        for (var i of Object.keys(p)) p[i] = yq(p[i], e);
      else a[v] = yq(p, e);
    }
    return !1 === e.sort
      ? a
      : (!0 === e.sort
          ? Object.keys(a).sort()
          : Object.keys(a).sort(e.sort)
        ).reduce(function (r, e) {
          var t = a[e];
          return (
            Boolean(t) && 'object' === Aj(t) && !Array.isArray(t)
              ? (r[e] = vq(t))
              : (r[e] = t),
            r
          );
        }, Object.create(null));
  }
  var Aq = xq;
  xc.extract = Aq;
  var Bq = zq;
  xc.parse = Bq;
  var Cq = function (r, e) {
    if (!r) return '';
    uq(
      (e = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: 'none',
          arrayFormatSeparator: ',',
        },
        e
      )).arrayFormatSeparator
    );
    var t = function (t) {
        return (e.skipNull && pC(r[t])) || (e.skipEmptyString && '' === r[t]);
      },
      a = qC(e),
      o = {};
    for (var n of Object.keys(r)) t(n) || (o[n] = r[n]);
    var $ = Object.keys(o);
    return (
      !1 !== e.sort && $.sort(e.sort),
      $.map(function (t) {
        var o = r[t];
        return void 0 === o
          ? ''
          : null === o
          ? Ba(t, e)
          : Array.isArray(o)
          ? o.reduce(a(t), []).join('&')
          : Ba(t, e) + '=' + Ba(o, e);
      })
        .filter(function (r) {
          return r.length > 0;
        })
        .join('&')
    );
  };
  xc.stringify = Cq;
  var tC = function (r, e) {
    e = Object.assign({decode: !0}, e);
    var [t, a] = tq(r, '#');
    return Object.assign(
      {url: t.split('?')[0] || '', query: zq(xq(r), e)},
      e && e.parseFragmentIdentifier && a ? {fragmentIdentifier: oe(a, e)} : {}
    );
  };
  xc.parseUrl = tC;
  var uC = function (r, e) {
    e = Object.assign({encode: !0, strict: !0}, e);
    var t = wq(r.url).split('?')[0] || '',
      a = Aq(r.url),
      o = Bq(a, {sort: !1}),
      n = Object.assign(o, r.query),
      $ = Cq(n, e);
    $ && ($ = '?'.concat($));
    var v = sC(r.url);
    return (
      r.fragmentIdentifier && (v = '#'.concat(Ba(r.fragmentIdentifier, e))),
      ''.concat(t).concat($).concat(v)
    );
  };
  xc.stringifyUrl = uC;
  var bd = {};
  var vC = {};
  function Va(t) {
    if (t) return wC(t);
  }
  function wC(t) {
    for (var r in Va.prototype) t[r] = Va.prototype[r];
    return t;
  }
  (vC = Va),
    (Va.prototype.on = Va.prototype.addEventListener =
      function (t, r) {
        return (
          (this._callbacks = this._callbacks || {}),
          (this._callbacks['$' + t] = this._callbacks['$' + t] || []).push(r),
          this
        );
      }),
    (Va.prototype.once = function (t, r) {
      function e() {
        this.off(t, e), r.apply(this, arguments);
      }
      return (e.fn = r), this.on(t, e), this;
    }),
    (Va.prototype.off =
      Va.prototype.removeListener =
      Va.prototype.removeAllListeners =
      Va.prototype.removeEventListener =
        function (t, r) {
          if (
            ((this._callbacks = this._callbacks || {}), 0 == arguments.length)
          )
            return (this._callbacks = {}), this;
          var e,
            i = this._callbacks['$' + t];
          if (!i) return this;
          if (1 == arguments.length)
            return delete this._callbacks['$' + t], this;
          for (var s = 0; s < i.length; s++)
            if ((e = i[s]) === r || e.fn === r) {
              i.splice(s, 1);
              break;
            }
          return 0 === i.length && delete this._callbacks['$' + t], this;
        }),
    (Va.prototype.emit = function (t) {
      this._callbacks = this._callbacks || {};
      for (
        var r = new Array(arguments.length - 1),
          e = this._callbacks['$' + t],
          i = 1;
        i < arguments.length;
        i++
      )
        r[i - 1] = arguments[i];
      if (e) {
        i = 0;
        for (var s = (e = e.slice(0)).length; i < s; ++i) e[i].apply(this, r);
      }
      return this;
    }),
    (Va.prototype.listeners = function (t) {
      return (
        (this._callbacks = this._callbacks || {}),
        this._callbacks['$' + t] || []
      );
    }),
    (Va.prototype.hasListeners = function (t) {
      return !!this.listeners(t).length;
    });
  var xC = {};
  (xC = pe), (pe.default = pe), (pe.stable = Dq), (pe.stableStringify = Dq);
  var Nb = [],
    cc = [];
  function pe(r, e, $) {
    var a;
    for (
      Dj(r, '', [], void 0),
        a =
          0 === cc.length
            ? JSON.stringify(r, e, $)
            : JSON.stringify(r, Eq(e), $);
      0 !== Nb.length;

    ) {
      var t = Nb.pop();
      4 === t.length
        ? Object.defineProperty(t[0], t[1], t[3])
        : (t[0][t[1]] = t[2]);
    }
    return a;
  }
  function Dj(r, e, $, a) {
    var t;
    if ('object' == typeof r && null !== r) {
      for (t = 0; t < $.length; t++)
        if ($[t] === r) {
          var i = Object.getOwnPropertyDescriptor(a, e);
          return void (void 0 !== i.get
            ? i.configurable
              ? (Object.defineProperty(a, e, {value: '[Circular]'}),
                Nb.push([a, e, r, i]))
              : cc.push([r, e])
            : ((a[e] = '[Circular]'), Nb.push([a, e, r])));
        }
      if (($.push(r), Array.isArray(r)))
        for (t = 0; t < r.length; t++) Dj(r[t], t, $, r);
      else {
        var c = Object.keys(r);
        for (t = 0; t < c.length; t++) {
          var n = c[t];
          Dj(r[n], n, $, r);
        }
      }
      $.pop();
    }
  }
  function yC(r, e) {
    return r < e ? -1 : r > e ? 1 : 0;
  }
  function Dq(r, e, $) {
    var a,
      t = Ej(r, '', [], void 0) || r;
    for (
      a =
        0 === cc.length ? JSON.stringify(t, e, $) : JSON.stringify(t, Eq(e), $);
      0 !== Nb.length;

    ) {
      var i = Nb.pop();
      4 === i.length
        ? Object.defineProperty(i[0], i[1], i[3])
        : (i[0][i[1]] = i[2]);
    }
    return a;
  }
  function Ej(r, e, $, a) {
    var t;
    if ('object' == typeof r && null !== r) {
      for (t = 0; t < $.length; t++)
        if ($[t] === r) {
          var i = Object.getOwnPropertyDescriptor(a, e);
          return void (void 0 !== i.get
            ? i.configurable
              ? (Object.defineProperty(a, e, {value: '[Circular]'}),
                Nb.push([a, e, r, i]))
              : cc.push([r, e])
            : ((a[e] = '[Circular]'), Nb.push([a, e, r])));
        }
      if ('function' == typeof r.toJSON) return;
      if (($.push(r), Array.isArray(r)))
        for (t = 0; t < r.length; t++) Ej(r[t], t, $, r);
      else {
        var c = {},
          n = Object.keys(r).sort(yC);
        for (t = 0; t < n.length; t++) {
          var v = n[t];
          Ej(r[v], v, $, r), (c[v] = r[v]);
        }
        if (void 0 === a) return c;
        Nb.push([a, e, r]), (a[e] = c);
      }
      $.pop();
    }
  }
  function Eq(r) {
    return (
      (r =
        void 0 !== r
          ? r
          : function (r, e) {
              return e;
            }),
      function (e, $) {
        if (cc.length > 0)
          for (var a = 0; a < cc.length; a++) {
            var t = cc[a];
            if (t[1] === e && t[0] === $) {
              ($ = '[Circular]'), cc.splice(a, 1);
              break;
            }
          }
        return r.call(this, e, $);
      }
    );
  }
  var cd = {};
  function zC(o) {
    return (zC =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          })(o);
  }
  function AC(o) {
    return null !== o && 'object' === zC(o);
  }
  cd = AC;
  var BC = {};
  function CC(t) {
    return (CC =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              'function' == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          })(t);
  }
  function fa(t) {
    if (t) return DC(t);
  }
  function DC(t) {
    for (var e in fa.prototype)
      Object.prototype.hasOwnProperty.call(fa.prototype, e) &&
        (t[e] = fa.prototype[e]);
    return t;
  }
  (BC = fa),
    (fa.prototype.clearTimeout = function () {
      return (
        clearTimeout(this._timer),
        clearTimeout(this._responseTimeoutTimer),
        clearTimeout(this._uploadTimeoutTimer),
        delete this._timer,
        delete this._responseTimeoutTimer,
        delete this._uploadTimeoutTimer,
        this
      );
    }),
    (fa.prototype.parse = function (t) {
      return (this._parser = t), this;
    }),
    (fa.prototype.responseType = function (t) {
      return (this._responseType = t), this;
    }),
    (fa.prototype.serialize = function (t) {
      return (this._serializer = t), this;
    }),
    (fa.prototype.timeout = function (t) {
      if (!t || 'object' !== CC(t))
        return (
          (this._timeout = t),
          (this._responseTimeout = 0),
          (this._uploadTimeout = 0),
          this
        );
      for (var e in t)
        if (Object.prototype.hasOwnProperty.call(t, e))
          switch (e) {
            case 'deadline':
              this._timeout = t.deadline;
              break;
            case 'response':
              this._responseTimeout = t.response;
              break;
            case 'upload':
              this._uploadTimeout = t.upload;
              break;
            default:
              console.warn('Unknown timeout option', e);
          }
      return this;
    }),
    (fa.prototype.retry = function (t, e) {
      return (
        (0 !== arguments.length && !0 !== t) || (t = 1),
        t <= 0 && (t = 0),
        (this._maxRetries = t),
        (this._retries = 0),
        (this._retryCallback = e),
        this
      );
    });
  var EC = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];
  (fa.prototype._shouldRetry = function (t, e) {
    if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
    if (this._retryCallback)
      try {
        var r = this._retryCallback(t, e);
        if (!0 === r) return !0;
        if (!1 === r) return !1;
      } catch (s) {
        console.error(s);
      }
    if (e && e.status && e.status >= 500 && 501 !== e.status) return !0;
    if (t) {
      if (t.code && EC.includes(t.code)) return !0;
      if (t.timeout && 'ECONNABORTED' === t.code) return !0;
      if (t.crossDomain) return !0;
    }
    return !1;
  }),
    (fa.prototype._retry = function () {
      return (
        this.clearTimeout(),
        this.req && ((this.req = null), (this.req = this.request())),
        (this._aborted = !1),
        (this.timedout = !1),
        (this.timedoutError = null),
        this._end()
      );
    }),
    (fa.prototype.then = function (t, e) {
      var r = this;
      if (!this._fullfilledPromise) {
        var s = this;
        this._endCalled &&
          console.warn(
            'Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises'
          ),
          (this._fullfilledPromise = new Promise(function (t, e) {
            s.on('abort', function () {
              if (!(r._maxRetries && r._maxRetries > r._retries))
                if (r.timedout && r.timedoutError) e(r.timedoutError);
                else {
                  var t = new Error('Aborted');
                  (t.code = 'ABORTED'),
                    (t.status = r.status),
                    (t.method = r.method),
                    (t.url = r.url),
                    e(t);
                }
            }),
              s.end(function (r, s) {
                r ? e(r) : t(s);
              });
          }));
      }
      return this._fullfilledPromise.then(t, e);
    }),
    (fa.prototype.catch = function (t) {
      return this.then(void 0, t);
    }),
    (fa.prototype.use = function (t) {
      return t(this), this;
    }),
    (fa.prototype.ok = function (t) {
      if ('function' != typeof t) throw new Error('Callback required');
      return (this._okCallback = t), this;
    }),
    (fa.prototype._isResponseOK = function (t) {
      return (
        !!t &&
        (this._okCallback
          ? this._okCallback(t)
          : t.status >= 200 && t.status < 300)
      );
    }),
    (fa.prototype.get = function (t) {
      return this._header[t.toLowerCase()];
    }),
    (fa.prototype.getHeader = fa.prototype.get),
    (fa.prototype.set = function (t, e) {
      if (cd(t)) {
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && this.set(r, t[r]);
        return this;
      }
      return (this._header[t.toLowerCase()] = e), (this.header[t] = e), this;
    }),
    (fa.prototype.unset = function (t) {
      return delete this._header[t.toLowerCase()], delete this.header[t], this;
    }),
    (fa.prototype.field = function (t, e) {
      if (null == t) throw new Error('.field(name, val) name can not be empty');
      if (this._data)
        throw new Error(
          ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"
        );
      if (cd(t)) {
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && this.field(r, t[r]);
        return this;
      }
      if (Array.isArray(e)) {
        for (var s in e)
          Object.prototype.hasOwnProperty.call(e, s) && this.field(t, e[s]);
        return this;
      }
      if (null == e) throw new Error('.field(name, val) val can not be empty');
      return (
        'boolean' == typeof e && (e = String(e)),
        this._getFormData().append(t, e),
        this
      );
    }),
    (fa.prototype.abort = function () {
      return this._aborted
        ? this
        : ((this._aborted = !0),
          this.xhr && this.xhr.abort(),
          this.req && this.req.abort(),
          this.clearTimeout(),
          this.emit('abort'),
          this);
    }),
    (fa.prototype._auth = function (t, e, r, s) {
      switch (r.type) {
        case 'basic':
          this.set(
            'Authorization',
            'Basic '.concat(s(''.concat(t, ':').concat(e)))
          );
          break;
        case 'auto':
          (this.username = t), (this.password = e);
          break;
        case 'bearer':
          this.set('Authorization', 'Bearer '.concat(t));
      }
      return this;
    }),
    (fa.prototype.withCredentials = function (t) {
      return void 0 === t && (t = !0), (this._withCredentials = t), this;
    }),
    (fa.prototype.redirects = function (t) {
      return (this._maxRedirects = t), this;
    }),
    (fa.prototype.maxResponseSize = function (t) {
      if ('number' != typeof t) throw new TypeError('Invalid argument');
      return (this._maxResponseSize = t), this;
    }),
    (fa.prototype.toJSON = function () {
      return {
        method: this.method,
        url: this.url,
        data: this._data,
        headers: this._header,
      };
    }),
    (fa.prototype.send = function (t) {
      var e = cd(t),
        r = this._header['content-type'];
      if (this._formData)
        throw new Error(
          ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"
        );
      if (e && !this._data)
        Array.isArray(t)
          ? (this._data = [])
          : this._isHost(t) || (this._data = {});
      else if (t && this._data && this._isHost(this._data))
        throw new Error("Can't merge these send calls");
      if (e && cd(this._data))
        for (var s in t)
          Object.prototype.hasOwnProperty.call(t, s) && (this._data[s] = t[s]);
      else
        'string' == typeof t
          ? (r || this.type('form'),
            (r = this._header['content-type']),
            (this._data =
              'application/x-www-form-urlencoded' === r
                ? this._data
                  ? ''.concat(this._data, '&').concat(t)
                  : t
                : (this._data || '') + t))
          : (this._data = t);
      return !e || this._isHost(t) ? this : (r || this.type('json'), this);
    }),
    (fa.prototype.sortQuery = function (t) {
      return (this._sort = void 0 === t || t), this;
    }),
    (fa.prototype._finalizeQueryString = function () {
      var t = this._query.join('&');
      if (
        (t && (this.url += (this.url.includes('?') ? '&' : '?') + t),
        (this._query.length = 0),
        this._sort)
      ) {
        var e = this.url.indexOf('?');
        if (e >= 0) {
          var r = this.url.slice(e + 1).split('&');
          'function' == typeof this._sort ? r.sort(this._sort) : r.sort(),
            (this.url = this.url.slice(0, e) + '?' + r.join('&'));
        }
      }
    }),
    (fa.prototype._appendQueryString = function () {
      console.warn('Unsupported');
    }),
    (fa.prototype._timeoutError = function (t, e, r) {
      if (!this._aborted) {
        var s = new Error(''.concat(t + e, 'ms exceeded'));
        (s.timeout = e),
          (s.code = 'ECONNABORTED'),
          (s.errno = r),
          (this.timedout = !0),
          (this.timedoutError = s),
          this.abort(),
          this.callback(s);
      }
    }),
    (fa.prototype._setTimeouts = function () {
      var t = this;
      this._timeout &&
        !this._timer &&
        (this._timer = setTimeout(function () {
          t._timeoutError('Timeout of ', t._timeout, 'ETIME');
        }, this._timeout)),
        this._responseTimeout &&
          !this._responseTimeoutTimer &&
          (this._responseTimeoutTimer = setTimeout(function () {
            t._timeoutError(
              'Response timeout of ',
              t._responseTimeout,
              'ETIMEDOUT'
            );
          }, this._responseTimeout));
    });
  var FC = function (e) {
    return e.split(/ *; */).shift();
  };
  var GC = function (e) {
    return e.split(/ *; */).reduce(function (e, t) {
      var r = t.split(/ *= */),
        $ = r.shift(),
        n = r.shift();
      return $ && n && (e[$] = n), e;
    }, {});
  };
  var HC = function (e) {
    return e.split(/ *, */).reduce(function (e, t) {
      var r = t.split(/ *; */),
        $ = r[0].slice(1, -1);
      return (e[r[1].split(/ *= */)[1].slice(1, -1)] = $), e;
    }, {});
  };
  var IC = {};
  function yc(t) {
    if (t) return JC(t);
  }
  function JC(t) {
    for (var e in yc.prototype)
      Object.prototype.hasOwnProperty.call(yc.prototype, e) &&
        (t[e] = yc.prototype[e]);
    return t;
  }
  (IC = yc),
    (yc.prototype.get = function (t) {
      return this.header[t.toLowerCase()];
    }),
    (yc.prototype._setHeaderProperties = function (t) {
      var e = t['content-type'] || '';
      this.type = FC(e);
      var s = GC(e);
      for (var r in s)
        Object.prototype.hasOwnProperty.call(s, r) && (this[r] = s[r]);
      this.links = {};
      try {
        t.link && (this.links = HC(t.link));
      } catch (o) {}
    }),
    (yc.prototype._setStatusProperties = function (t) {
      var e = (t / 100) | 0;
      (this.statusCode = t),
        (this.status = this.statusCode),
        (this.statusType = e),
        (this.info = 1 === e),
        (this.ok = 2 === e),
        (this.redirect = 3 === e),
        (this.clientError = 4 === e),
        (this.serverError = 5 === e),
        (this.error = (4 === e || 5 === e) && this.toError()),
        (this.created = 201 === t),
        (this.accepted = 202 === t),
        (this.noContent = 204 === t),
        (this.badRequest = 400 === t),
        (this.unauthorized = 401 === t),
        (this.notAcceptable = 406 === t),
        (this.forbidden = 403 === t),
        (this.notFound = 404 === t),
        (this.unprocessableEntity = 422 === t);
    });
  var $f = {};
  function KC(r) {
    return OC(r) || NC(r) || MC(r) || LC();
  }
  function LC() {
    throw new TypeError(
      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  function MC(r, t) {
    if (r) {
      if ('string' == typeof r) return Fj(r, t);
      var e = Object.prototype.toString.call(r).slice(8, -1);
      return (
        'Object' === e && r.constructor && (e = r.constructor.name),
        'Map' === e || 'Set' === e
          ? Array.from(r)
          : 'Arguments' === e ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
          ? Fj(r, t)
          : void 0
      );
    }
  }
  function NC(r) {
    if ('undefined' != typeof Symbol && Symbol.iterator in Object(r))
      return Array.from(r);
  }
  function OC(r) {
    if (Array.isArray(r)) return Fj(r);
  }
  function Fj(r, t) {
    (null == t || t > r.length) && (t = r.length);
    for (var e = 0, a = new Array(t); e < t; e++) a[e] = r[e];
    return a;
  }
  function Gj() {
    this._defaults = [];
  }
  [
    'use',
    'on',
    'once',
    'set',
    'query',
    'type',
    'accept',
    'auth',
    'withCredentials',
    'sortQuery',
    'retry',
    'ok',
    'redirects',
    'timeout',
    'buffer',
    'serialize',
    'parse',
    'ca',
    'key',
    'pfx',
    'cert',
    'disableTLSCerts',
  ].forEach(function (r) {
    Gj.prototype[r] = function () {
      for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++)
        e[a] = arguments[a];
      return this._defaults.push({fn: r, args: e}), this;
    };
  }),
    (Gj.prototype._setDefaults = function (r) {
      this._defaults.forEach(function (t) {
        r[t.fn].apply(r, KC(t.args));
      });
    }),
    ($f = Gj);
  var qe,
    Hj = {};
  function Fq(e) {
    return (Fq =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          })(e);
  }
  'undefined' != typeof window
    ? (qe = window)
    : 'undefined' == typeof self
    ? (console.warn(
        'Using browser-only version of superagent in non-browser environment'
      ),
      (qe = void 0))
    : (qe = self);
  function PC() {}
  var ia =
      (Hj =
      Hj =
        function (e, t) {
          return 'function' == typeof t
            ? new _f('GET', e).end(t)
            : 1 === arguments.length
            ? new _f('GET', e)
            : new _f(e, t);
        }),
    _f = qa;
  (Hj.Request = _f),
    (ia.getXHR = function () {
      if (
        qe.XMLHttpRequest &&
        (!qe.location || 'file:' !== qe.location.protocol || !qe.ActiveXObject)
      )
        return new XMLHttpRequest();
      try {
        return new ActiveXObject('Microsoft.XMLHTTP');
      } catch (e) {}
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.6.0');
      } catch (t) {}
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.3.0');
      } catch (r) {}
      try {
        return new ActiveXObject('Msxml2.XMLHTTP');
      } catch (n) {}
      throw new Error('Browser-only version of superagent could not find XHR');
    });
  var QC = ''.trim
    ? function (e) {
        return e.trim();
      }
    : function (e) {
        return e.replace(/(^\s*|\s*$)/g, '');
      };
  function Ij(e) {
    if (!cd(e)) return e;
    var t = [];
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && Jj(t, r, e[r]);
    return t.join('&');
  }
  function Jj(e, t, r) {
    if (void 0 !== r)
      if (null !== r) {
        if (Array.isArray(r))
          r.forEach(function (r) {
            Jj(e, t, r);
          });
        else if (cd(r))
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) &&
              Jj(e, ''.concat(t, '[').concat(n, ']'), r[n]);
        else e.push(encodeURI(t) + '=' + encodeURIComponent(r));
      } else e.push(encodeURI(t));
  }
  function Gq(e) {
    for (var t, r, n = {}, s = e.split('&'), o = 0, a = s.length; o < a; ++o)
      -1 === (r = (t = s[o]).indexOf('='))
        ? (n[decodeURIComponent(t)] = '')
        : (n[decodeURIComponent(t.slice(0, r))] = decodeURIComponent(
            t.slice(r + 1)
          ));
    return n;
  }
  function RC(e) {
    for (
      var t, r, n, s, o = e.split(/\r?\n/), a = {}, i = 0, $ = o.length;
      i < $;
      ++i
    )
      -1 !== (t = (r = o[i]).indexOf(':')) &&
        ((n = r.slice(0, t).toLowerCase()),
        (s = QC(r.slice(t + 1))),
        (a[n] = s));
    return a;
  }
  function Hq(e) {
    return /[/+]json($|[^-\w])/.test(e);
  }
  function re(e) {
    (this.req = e),
      (this.xhr = this.req.xhr),
      (this.text =
        ('HEAD' !== this.req.method &&
          ('' === this.xhr.responseType || 'text' === this.xhr.responseType)) ||
        void 0 === this.xhr.responseType
          ? this.xhr.responseText
          : null),
      (this.statusText = this.req.xhr.statusText);
    var t = this.xhr.status;
    1223 === t && (t = 204),
      this._setStatusProperties(t),
      (this.headers = RC(this.xhr.getAllResponseHeaders())),
      (this.header = this.headers),
      (this.header['content-type'] =
        this.xhr.getResponseHeader('content-type')),
      this._setHeaderProperties(this.header),
      null === this.text && e._responseType
        ? (this.body = this.xhr.response)
        : (this.body =
            'HEAD' === this.req.method
              ? null
              : this._parseBody(this.text ? this.text : this.xhr.response));
  }
  function qa(e, t) {
    var r = this;
    (this._query = this._query || []),
      (this.method = e),
      (this.url = t),
      (this.header = {}),
      (this._header = {}),
      this.on('end', function () {
        var e,
          t = null,
          n = null;
        try {
          n = new re(r);
        } catch (s) {
          return (
            ((t = new Error('Parser is unable to parse the response')).parse =
              !0),
            (t.original = s),
            r.xhr
              ? ((t.rawResponse =
                  void 0 === r.xhr.responseType
                    ? r.xhr.responseText
                    : r.xhr.response),
                (t.status = r.xhr.status ? r.xhr.status : null),
                (t.statusCode = t.status))
              : ((t.rawResponse = null), (t.status = null)),
            r.callback(t)
          );
        }
        r.emit('response', n);
        try {
          r._isResponseOK(n) ||
            (e = new Error(
              n.statusText || n.text || 'Unsuccessful HTTP response'
            ));
        } catch (s) {
          e = s;
        }
        e
          ? ((e.original = t),
            (e.response = n),
            (e.status = n.status),
            r.callback(e, n))
          : r.callback(null, n);
      });
  }
  function Iq(e, t, r) {
    var n = ia('DELETE', e);
    return (
      'function' == typeof t && ((r = t), (t = null)),
      t && n.send(t),
      r && n.end(r),
      n
    );
  }
  (ia.serializeObject = Ij),
    (ia.parseString = Gq),
    (ia.types = {
      html: 'text/html',
      json: 'application/json',
      xml: 'text/xml',
      urlencoded: 'application/x-www-form-urlencoded',
      form: 'application/x-www-form-urlencoded',
      'form-data': 'application/x-www-form-urlencoded',
    }),
    (ia.serialize = {
      'application/x-www-form-urlencoded': Ij,
      'application/json': xC,
    }),
    (ia.parse = {
      'application/x-www-form-urlencoded': Gq,
      'application/json': JSON.parse,
    }),
    IC(re.prototype),
    (re.prototype._parseBody = function (e) {
      var t = ia.parse[this.type];
      return this.req._parser
        ? this.req._parser(this, e)
        : (!t && Hq(this.type) && (t = ia.parse['application/json']),
          t && e && (e.length > 0 || e instanceof Object) ? t(e) : null);
    }),
    (re.prototype.toError = function () {
      var e = this.req,
        t = e.method,
        r = e.url,
        n = 'cannot '.concat(t, ' ').concat(r, ' (').concat(this.status, ')'),
        s = new Error(n);
      return (s.status = this.status), (s.method = t), (s.url = r), s;
    }),
    (ia.Response = re),
    vC(qa.prototype),
    BC(qa.prototype),
    (qa.prototype.type = function (e) {
      return this.set('Content-Type', ia.types[e] || e), this;
    }),
    (qa.prototype.accept = function (e) {
      return this.set('Accept', ia.types[e] || e), this;
    }),
    (qa.prototype.auth = function (e, t, r) {
      1 === arguments.length && (t = ''),
        'object' === Fq(t) && null !== t && ((r = t), (t = '')),
        r || (r = {type: 'function' == typeof btoa ? 'basic' : 'auto'});
      return this._auth(e, t, r, function (e) {
        if ('function' == typeof btoa) return btoa(e);
        throw new Error('Cannot use basic auth, btoa is not a function');
      });
    }),
    (qa.prototype.query = function (e) {
      return (
        'string' != typeof e && (e = Ij(e)), e && this._query.push(e), this
      );
    }),
    (qa.prototype.attach = function (e, t, r) {
      if (t) {
        if (this._data)
          throw new Error("superagent can't mix .send() and .attach()");
        this._getFormData().append(e, t, r || t.name);
      }
      return this;
    }),
    (qa.prototype._getFormData = function () {
      return (
        this._formData || (this._formData = new qe.FormData()), this._formData
      );
    }),
    (qa.prototype.callback = function (e, t) {
      if (this._shouldRetry(e, t)) return this._retry();
      var r = this._callback;
      this.clearTimeout(),
        e &&
          (this._maxRetries && (e.retries = this._retries - 1),
          this.emit('error', e)),
        r(e, t);
    }),
    (qa.prototype.crossDomainError = function () {
      var e = new Error(
        'Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.'
      );
      (e.crossDomain = !0),
        (e.status = this.status),
        (e.method = this.method),
        (e.url = this.url),
        this.callback(e);
    }),
    (qa.prototype.agent = function () {
      return (
        console.warn('This is not supported in browser version of superagent'),
        this
      );
    }),
    (qa.prototype.ca = qa.prototype.agent),
    (qa.prototype.buffer = qa.prototype.ca),
    (qa.prototype.write = function () {
      throw new Error(
        'Streaming is not supported in browser version of superagent'
      );
    }),
    (qa.prototype.pipe = qa.prototype.write),
    (qa.prototype._isHost = function (e) {
      return (
        e &&
        'object' === Fq(e) &&
        !Array.isArray(e) &&
        '[object Object]' !== Object.prototype.toString.call(e)
      );
    }),
    (qa.prototype.end = function (e) {
      this._endCalled &&
        console.warn(
          'Warning: .end() was called twice. This is not supported in superagent'
        ),
        (this._endCalled = !0),
        (this._callback = e || PC),
        this._finalizeQueryString(),
        this._end();
    }),
    (qa.prototype._setUploadTimeout = function () {
      var e = this;
      this._uploadTimeout &&
        !this._uploadTimeoutTimer &&
        (this._uploadTimeoutTimer = setTimeout(function () {
          e._timeoutError('Upload timeout of ', e._uploadTimeout, 'ETIMEDOUT');
        }, this._uploadTimeout));
    }),
    (qa.prototype._end = function () {
      if (this._aborted)
        return this.callback(
          new Error(
            'The request has been aborted even before .end() was called'
          )
        );
      var e = this;
      this.xhr = ia.getXHR();
      var t = this.xhr,
        r = this._formData || this._data;
      this._setTimeouts(),
        (t.onreadystatechange = function () {
          var r = t.readyState;
          if (
            (r >= 2 &&
              e._responseTimeoutTimer &&
              clearTimeout(e._responseTimeoutTimer),
            4 === r)
          ) {
            var n;
            try {
              n = t.status;
            } catch (s) {
              n = 0;
            }
            if (!n) {
              if (e.timedout || e._aborted) return;
              return e.crossDomainError();
            }
            e.emit('end');
          }
        });
      var n = function (t, r) {
        r.total > 0 &&
          ((r.percent = (r.loaded / r.total) * 100),
          100 === r.percent && clearTimeout(e._uploadTimeoutTimer)),
          (r.direction = t),
          e.emit('progress', r);
      };
      if (this.hasListeners('progress'))
        try {
          t.addEventListener('progress', n.bind(null, 'download')),
            t.upload &&
              t.upload.addEventListener('progress', n.bind(null, 'upload'));
        } catch (i) {}
      t.upload && this._setUploadTimeout();
      try {
        this.username && this.password
          ? t.open(this.method, this.url, !0, this.username, this.password)
          : t.open(this.method, this.url, !0);
      } catch ($) {
        return this.callback($);
      }
      if (
        (this._withCredentials && (t.withCredentials = !0),
        !this._formData &&
          'GET' !== this.method &&
          'HEAD' !== this.method &&
          'string' != typeof r &&
          !this._isHost(r))
      ) {
        var s = this._header['content-type'],
          o = this._serializer || ia.serialize[s ? s.split(';')[0] : ''];
        !o && Hq(s) && (o = ia.serialize['application/json']), o && (r = o(r));
      }
      for (var a in this.header)
        null !== this.header[a] &&
          Object.prototype.hasOwnProperty.call(this.header, a) &&
          t.setRequestHeader(a, this.header[a]);
      this._responseType && (t.responseType = this._responseType),
        this.emit('request', this),
        t.send(void 0 === r ? null : r);
    }),
    (ia.agent = function () {
      return new $f();
    }),
    ['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'].forEach(function (e) {
      $f.prototype[e.toLowerCase()] = function (t, r) {
        var n = new ia.Request(e, t);
        return this._setDefaults(n), r && n.end(r), n;
      };
    }),
    ($f.prototype.del = $f.prototype.delete),
    (ia.get = function (e, t, r) {
      var n = ia('GET', e);
      return (
        'function' == typeof t && ((r = t), (t = null)),
        t && n.query(t),
        r && n.end(r),
        n
      );
    }),
    (ia.head = function (e, t, r) {
      var n = ia('HEAD', e);
      return (
        'function' == typeof t && ((r = t), (t = null)),
        t && n.query(t),
        r && n.end(r),
        n
      );
    }),
    (ia.options = function (e, t, r) {
      var n = ia('OPTIONS', e);
      return (
        'function' == typeof t && ((r = t), (t = null)),
        t && n.send(t),
        r && n.end(r),
        n
      );
    }),
    (ia.del = Iq),
    (ia.delete = Iq),
    (ia.patch = function (e, t, r) {
      var n = ia('PATCH', e);
      return (
        'function' == typeof t && ((r = t), (t = null)),
        t && n.send(t),
        r && n.end(r),
        n
      );
    }),
    (ia.post = function (e, t, r) {
      var n = ia('POST', e);
      return (
        'function' == typeof t && ((r = t), (t = null)),
        t && n.send(t),
        r && n.end(r),
        n
      );
    }),
    (ia.put = function (e, t, r) {
      var n = ia('PUT', e);
      return (
        'function' == typeof t && ((r = t), (t = null)),
        t && n.send(t),
        r && n.end(r),
        n
      );
    });
  var Jq = 'https://app.papercups.io';
  var SC = function (t) {
    return Boolean(
      'localhost' === t.location.hostname ||
        '[::1]' === t.location.hostname ||
        t.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
    );
  };
  var Kq =
      (bd && bd.__awaiter) ||
      function (t, e, n, r) {
        return new (n || (n = Promise))(function (i, a) {
          function o(t) {
            try {
              $(r.next(t));
            } catch (e) {
              a(e);
            }
          }
          function u(t) {
            try {
              $(r.throw(t));
            } catch (e) {
              a(e);
            }
          }
          function $(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(o, u);
          }
          $((r = r.apply(t, e || [])).next());
        });
      },
    Lq =
      (bd && bd.__generator) ||
      function (t, e) {
        var n,
          r,
          i,
          a,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (a = {next: u(0), throw: u(1), return: u(2)}),
          'function' == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function u(a) {
          return function (u) {
            return (function (a) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; o; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & a[0]
                          ? r.return
                          : a[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, a[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                    case 0:
                    case 1:
                      i = a;
                      break;
                    case 4:
                      return o.label++, {value: a[1], done: !1};
                    case 5:
                      o.label++, (r = a[1]), (a = [0]);
                      continue;
                    case 7:
                      (a = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                        (6 === a[0] || 2 === a[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                        o.label = a[1];
                        break;
                      }
                      if (6 === a[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = a);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(a);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  a = e.call(t, o);
                } catch (u) {
                  (a = [6, u]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & a[0]) throw a[1];
              return {value: a[0] ? a[1] : void 0, done: !0};
            })([a, u]);
          };
        }
      },
    Mq = function (t, e) {
      return (
        void 0 === e && (e = Jq),
        Kq(void 0, void 0, Promise, function () {
          return Lq(this, function (n) {
            var $jn4M$$interop$default = ya(Hj);
            return [
              2,
              $jn4M$$interop$default.d
                .get(e + '/api/widget_settings')
                .query({account_id: t})
                .then(function (t) {
                  return t.body.data;
                }),
            ];
          });
        })
      );
    };
  bd.fetchWidgetSettings = Mq;
  var Nq = function (t, e, n) {
    return (
      void 0 === n && (n = Jq),
      Kq(void 0, void 0, Promise, function () {
        return Lq(this, function (r) {
          var $jn4M$$interop$default = ya(Hj);
          return [
            2,
            $jn4M$$interop$default.d
              .put(n + '/api/widget_settings/metadata')
              .send({account_id: t, metadata: e})
              .then(function (t) {
                return t.body.data;
              }),
          ];
        });
      })
    );
  };
  bd.updateWidgetSettingsMetadata = Nq;
  function dd() {}
  function TC(n) {
    if (!n || 'string' != typeof n || !n.length) return !1;
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      n
    );
  }
  var ag = {};
  var Kj,
    Oq = {};
  !(function (t) {
    var r = /^\s+/,
      e = /\s+$/,
      n = 0,
      a = t.round,
      i = t.min,
      s = t.max,
      o = t.random;
    function f(o, h) {
      if (((h = h || {}), (o = o || '') instanceof f)) return o;
      if (!(this instanceof f)) return new f(o, h);
      var l = (function (n) {
        var a = {r: 0, g: 0, b: 0},
          o = 1,
          f = null,
          h = null,
          l = null,
          u = !1,
          c = !1;
        'string' == typeof n &&
          (n = (function (t) {
            t = t.replace(r, '').replace(e, '').toLowerCase();
            var n,
              a = !1;
            if (H[t]) (t = H[t]), (a = !0);
            else if ('transparent' == t)
              return {r: 0, g: 0, b: 0, a: 0, format: 'name'};
            if ((n = T.rgb.exec(t))) return {r: n[1], g: n[2], b: n[3]};
            if ((n = T.rgba.exec(t)))
              return {r: n[1], g: n[2], b: n[3], a: n[4]};
            if ((n = T.hsl.exec(t))) return {h: n[1], s: n[2], l: n[3]};
            if ((n = T.hsla.exec(t)))
              return {h: n[1], s: n[2], l: n[3], a: n[4]};
            if ((n = T.hsv.exec(t))) return {h: n[1], s: n[2], v: n[3]};
            if ((n = T.hsva.exec(t)))
              return {h: n[1], s: n[2], v: n[3], a: n[4]};
            if ((n = T.hex8.exec(t)))
              return {
                r: q(n[1]),
                g: q(n[2]),
                b: q(n[3]),
                a: N(n[4]),
                format: a ? 'name' : 'hex8',
              };
            if ((n = T.hex6.exec(t)))
              return {
                r: q(n[1]),
                g: q(n[2]),
                b: q(n[3]),
                format: a ? 'name' : 'hex',
              };
            if ((n = T.hex4.exec(t)))
              return {
                r: q(n[1] + '' + n[1]),
                g: q(n[2] + '' + n[2]),
                b: q(n[3] + '' + n[3]),
                a: N(n[4] + '' + n[4]),
                format: a ? 'name' : 'hex8',
              };
            if ((n = T.hex3.exec(t)))
              return {
                r: q(n[1] + '' + n[1]),
                g: q(n[2] + '' + n[2]),
                b: q(n[3] + '' + n[3]),
                format: a ? 'name' : 'hex',
              };
            return !1;
          })(n));
        'object' == typeof n &&
          (j(n.r) && j(n.g) && j(n.b)
            ? ((g = n.r),
              (b = n.g),
              (d = n.b),
              (a = {
                r: 255 * $(g, 255),
                g: 255 * $(b, 255),
                b: 255 * $(d, 255),
              }),
              (u = !0),
              (c = '%' === String(n.r).substr(-1) ? 'prgb' : 'rgb'))
            : j(n.h) && j(n.s) && j(n.v)
            ? ((f = I(n.s)),
              (h = I(n.v)),
              (a = (function (r, e, n) {
                (r = 6 * $(r, 360)), (e = $(e, 100)), (n = $(n, 100));
                var a = t.floor(r),
                  i = r - a,
                  s = n * (1 - e),
                  o = n * (1 - i * e),
                  f = n * (1 - (1 - i) * e),
                  h = a % 6;
                return {
                  r: 255 * [n, o, s, s, f, n][h],
                  g: 255 * [f, n, n, o, s, s][h],
                  b: 255 * [s, s, f, n, n, o][h],
                };
              })(n.h, f, h)),
              (u = !0),
              (c = 'hsv'))
            : j(n.h) &&
              j(n.s) &&
              j(n.l) &&
              ((f = I(n.s)),
              (l = I(n.l)),
              (a = (function (t, r, e) {
                var n, a, i;
                function s(t, r, e) {
                  return (
                    e < 0 && (e += 1),
                    e > 1 && (e -= 1),
                    e < 1 / 6
                      ? t + 6 * (r - t) * e
                      : e < 0.5
                      ? r
                      : e < 2 / 3
                      ? t + (r - t) * (2 / 3 - e) * 6
                      : t
                  );
                }
                if (
                  ((t = $(t, 360)), (r = $(r, 100)), (e = $(e, 100)), 0 === r)
                )
                  n = a = i = e;
                else {
                  var o = e < 0.5 ? e * (1 + r) : e + r - e * r,
                    f = 2 * e - o;
                  (n = s(f, o, t + 1 / 3)),
                    (a = s(f, o, t)),
                    (i = s(f, o, t - 1 / 3));
                }
                return {r: 255 * n, g: 255 * a, b: 255 * i};
              })(n.h, f, l)),
              (u = !0),
              (c = 'hsl')),
          n.hasOwnProperty('a') && (o = n.a));
        var g, b, d;
        return (
          (o = F(o)),
          {
            ok: u,
            format: n.format || c,
            r: i(255, s(a.r, 0)),
            g: i(255, s(a.g, 0)),
            b: i(255, s(a.b, 0)),
            a: o,
          }
        );
      })(o);
      (this._originalInput = o),
        (this._r = l.r),
        (this._g = l.g),
        (this._b = l.b),
        (this._a = l.a),
        (this._roundA = a(100 * this._a) / 100),
        (this._format = h.format || l.format),
        (this._gradientType = h.gradientType),
        this._r < 1 && (this._r = a(this._r)),
        this._g < 1 && (this._g = a(this._g)),
        this._b < 1 && (this._b = a(this._b)),
        (this._ok = l.ok),
        (this._tc_id = n++);
    }
    function h(t, r, e) {
      (t = $(t, 255)), (r = $(r, 255)), (e = $(e, 255));
      var n,
        a,
        o = s(t, r, e),
        f = i(t, r, e),
        h = (o + f) / 2;
      if (o == f) n = a = 0;
      else {
        var l = o - f;
        switch (((a = h > 0.5 ? l / (2 - o - f) : l / (o + f)), o)) {
          case t:
            n = (r - e) / l + (r < e ? 6 : 0);
            break;
          case r:
            n = (e - t) / l + 2;
            break;
          case e:
            n = (t - r) / l + 4;
        }
        n /= 6;
      }
      return {h: n, s: a, l: h};
    }
    function l(t, r, e) {
      (t = $(t, 255)), (r = $(r, 255)), (e = $(e, 255));
      var n,
        a,
        o = s(t, r, e),
        f = i(t, r, e),
        h = o,
        l = o - f;
      if (((a = 0 === o ? 0 : l / o), o == f)) n = 0;
      else {
        switch (o) {
          case t:
            n = (r - e) / l + (r < e ? 6 : 0);
            break;
          case r:
            n = (e - t) / l + 2;
            break;
          case e:
            n = (t - r) / l + 4;
        }
        n /= 6;
      }
      return {h: n, s: a, v: h};
    }
    function u(t, r, e, n) {
      var i = [
        M(a(t).toString(16)),
        M(a(r).toString(16)),
        M(a(e).toString(16)),
      ];
      return n &&
        i[0].charAt(0) == i[0].charAt(1) &&
        i[1].charAt(0) == i[1].charAt(1) &&
        i[2].charAt(0) == i[2].charAt(1)
        ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
        : i.join('');
    }
    function c(t, r, e, n) {
      return [
        M(L(n)),
        M(a(t).toString(16)),
        M(a(r).toString(16)),
        M(a(e).toString(16)),
      ].join('');
    }
    function g(t, r) {
      r = 0 === r ? 0 : r || 10;
      var e = f(t).toHsl();
      return (e.s -= r / 100), (e.s = C(e.s)), f(e);
    }
    function b(t, r) {
      r = 0 === r ? 0 : r || 10;
      var e = f(t).toHsl();
      return (e.s += r / 100), (e.s = C(e.s)), f(e);
    }
    function d(t) {
      return f(t).desaturate(100);
    }
    function _(t, r) {
      r = 0 === r ? 0 : r || 10;
      var e = f(t).toHsl();
      return (e.l += r / 100), (e.l = C(e.l)), f(e);
    }
    function p(t, r) {
      r = 0 === r ? 0 : r || 10;
      var e = f(t).toRgb();
      return (
        (e.r = s(0, i(255, e.r - a((-r / 100) * 255)))),
        (e.g = s(0, i(255, e.g - a((-r / 100) * 255)))),
        (e.b = s(0, i(255, e.b - a((-r / 100) * 255)))),
        f(e)
      );
    }
    function m(t, r) {
      r = 0 === r ? 0 : r || 10;
      var e = f(t).toHsl();
      return (e.l -= r / 100), (e.l = C(e.l)), f(e);
    }
    function v(t, r) {
      var e = f(t).toHsl(),
        n = (e.h + r) % 360;
      return (e.h = n < 0 ? 360 + n : n), f(e);
    }
    function y(t) {
      var r = f(t).toHsl();
      return (r.h = (r.h + 180) % 360), f(r);
    }
    function A(t) {
      var r = f(t).toHsl(),
        e = r.h;
      return [
        f(t),
        f({h: (e + 120) % 360, s: r.s, l: r.l}),
        f({h: (e + 240) % 360, s: r.s, l: r.l}),
      ];
    }
    function x(t) {
      var r = f(t).toHsl(),
        e = r.h;
      return [
        f(t),
        f({h: (e + 90) % 360, s: r.s, l: r.l}),
        f({h: (e + 180) % 360, s: r.s, l: r.l}),
        f({h: (e + 270) % 360, s: r.s, l: r.l}),
      ];
    }
    function k(t) {
      var r = f(t).toHsl(),
        e = r.h;
      return [
        f(t),
        f({h: (e + 72) % 360, s: r.s, l: r.l}),
        f({h: (e + 216) % 360, s: r.s, l: r.l}),
      ];
    }
    function w(t, r, e) {
      (r = r || 6), (e = e || 30);
      var n = f(t).toHsl(),
        a = 360 / e,
        i = [f(t)];
      for (n.h = (n.h - ((a * r) >> 1) + 720) % 360; --r; )
        (n.h = (n.h + a) % 360), i.push(f(n));
      return i;
    }
    function S(t, r) {
      r = r || 6;
      for (
        var e = f(t).toHsv(), n = e.h, a = e.s, i = e.v, s = [], o = 1 / r;
        r--;

      )
        s.push(f({h: n, s: a, v: i})), (i = (i + o) % 1);
      return s;
    }
    (f.prototype = {
      isDark: function () {
        return this.getBrightness() < 128;
      },
      isLight: function () {
        return !this.isDark();
      },
      isValid: function () {
        return this._ok;
      },
      getOriginalInput: function () {
        return this._originalInput;
      },
      getFormat: function () {
        return this._format;
      },
      getAlpha: function () {
        return this._a;
      },
      getBrightness: function () {
        var t = this.toRgb();
        return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
      },
      getLuminance: function () {
        var r,
          e,
          n,
          a = this.toRgb();
        return (
          (r = a.r / 255),
          (e = a.g / 255),
          (n = a.b / 255),
          0.2126 *
            (r <= 0.03928 ? r / 12.92 : t.pow((r + 0.055) / 1.055, 2.4)) +
            0.7152 *
              (e <= 0.03928 ? e / 12.92 : t.pow((e + 0.055) / 1.055, 2.4)) +
            0.0722 *
              (n <= 0.03928 ? n / 12.92 : t.pow((n + 0.055) / 1.055, 2.4))
        );
      },
      setAlpha: function (t) {
        return (this._a = F(t)), (this._roundA = a(100 * this._a) / 100), this;
      },
      toHsv: function () {
        var t = l(this._r, this._g, this._b);
        return {h: 360 * t.h, s: t.s, v: t.v, a: this._a};
      },
      toHsvString: function () {
        var t = l(this._r, this._g, this._b),
          r = a(360 * t.h),
          e = a(100 * t.s),
          n = a(100 * t.v);
        return 1 == this._a
          ? 'hsv(' + r + ', ' + e + '%, ' + n + '%)'
          : 'hsva(' + r + ', ' + e + '%, ' + n + '%, ' + this._roundA + ')';
      },
      toHsl: function () {
        var t = h(this._r, this._g, this._b);
        return {h: 360 * t.h, s: t.s, l: t.l, a: this._a};
      },
      toHslString: function () {
        var t = h(this._r, this._g, this._b),
          r = a(360 * t.h),
          e = a(100 * t.s),
          n = a(100 * t.l);
        return 1 == this._a
          ? 'hsl(' + r + ', ' + e + '%, ' + n + '%)'
          : 'hsla(' + r + ', ' + e + '%, ' + n + '%, ' + this._roundA + ')';
      },
      toHex: function (t) {
        return u(this._r, this._g, this._b, t);
      },
      toHexString: function (t) {
        return '#' + this.toHex(t);
      },
      toHex8: function (t) {
        return (function (t, r, e, n, i) {
          var s = [
            M(a(t).toString(16)),
            M(a(r).toString(16)),
            M(a(e).toString(16)),
            M(L(n)),
          ];
          if (
            i &&
            s[0].charAt(0) == s[0].charAt(1) &&
            s[1].charAt(0) == s[1].charAt(1) &&
            s[2].charAt(0) == s[2].charAt(1) &&
            s[3].charAt(0) == s[3].charAt(1)
          )
            return (
              s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0)
            );
          return s.join('');
        })(this._r, this._g, this._b, this._a, t);
      },
      toHex8String: function (t) {
        return '#' + this.toHex8(t);
      },
      toRgb: function () {
        return {r: a(this._r), g: a(this._g), b: a(this._b), a: this._a};
      },
      toRgbString: function () {
        return 1 == this._a
          ? 'rgb(' + a(this._r) + ', ' + a(this._g) + ', ' + a(this._b) + ')'
          : 'rgba(' +
              a(this._r) +
              ', ' +
              a(this._g) +
              ', ' +
              a(this._b) +
              ', ' +
              this._roundA +
              ')';
      },
      toPercentageRgb: function () {
        return {
          r: a(100 * $(this._r, 255)) + '%',
          g: a(100 * $(this._g, 255)) + '%',
          b: a(100 * $(this._b, 255)) + '%',
          a: this._a,
        };
      },
      toPercentageRgbString: function () {
        return 1 == this._a
          ? 'rgb(' +
              a(100 * $(this._r, 255)) +
              '%, ' +
              a(100 * $(this._g, 255)) +
              '%, ' +
              a(100 * $(this._b, 255)) +
              '%)'
          : 'rgba(' +
              a(100 * $(this._r, 255)) +
              '%, ' +
              a(100 * $(this._g, 255)) +
              '%, ' +
              a(100 * $(this._b, 255)) +
              '%, ' +
              this._roundA +
              ')';
      },
      toName: function () {
        return 0 === this._a
          ? 'transparent'
          : !(this._a < 1) && (R[u(this._r, this._g, this._b, !0)] || !1);
      },
      toFilter: function (t) {
        var r = '#' + c(this._r, this._g, this._b, this._a),
          e = r,
          n = this._gradientType ? 'GradientType = 1, ' : '';
        if (t) {
          var a = f(t);
          e = '#' + c(a._r, a._g, a._b, a._a);
        }
        return (
          'progid:DXImageTransform.Microsoft.gradient(' +
          n +
          'startColorstr=' +
          r +
          ',endColorstr=' +
          e +
          ')'
        );
      },
      toString: function (t) {
        var r = !!t;
        t = t || this._format;
        var e = !1,
          n = this._a < 1 && this._a >= 0;
        return r ||
          !n ||
          ('hex' !== t &&
            'hex6' !== t &&
            'hex3' !== t &&
            'hex4' !== t &&
            'hex8' !== t &&
            'name' !== t)
          ? ('rgb' === t && (e = this.toRgbString()),
            'prgb' === t && (e = this.toPercentageRgbString()),
            ('hex' !== t && 'hex6' !== t) || (e = this.toHexString()),
            'hex3' === t && (e = this.toHexString(!0)),
            'hex4' === t && (e = this.toHex8String(!0)),
            'hex8' === t && (e = this.toHex8String()),
            'name' === t && (e = this.toName()),
            'hsl' === t && (e = this.toHslString()),
            'hsv' === t && (e = this.toHsvString()),
            e || this.toHexString())
          : 'name' === t && 0 === this._a
          ? this.toName()
          : this.toRgbString();
      },
      clone: function () {
        return f(this.toString());
      },
      _applyModification: function (t, r) {
        var e = t.apply(null, [this].concat([].slice.call(r)));
        return (
          (this._r = e._r),
          (this._g = e._g),
          (this._b = e._b),
          this.setAlpha(e._a),
          this
        );
      },
      lighten: function () {
        return this._applyModification(_, arguments);
      },
      brighten: function () {
        return this._applyModification(p, arguments);
      },
      darken: function () {
        return this._applyModification(m, arguments);
      },
      desaturate: function () {
        return this._applyModification(g, arguments);
      },
      saturate: function () {
        return this._applyModification(b, arguments);
      },
      greyscale: function () {
        return this._applyModification(d, arguments);
      },
      spin: function () {
        return this._applyModification(v, arguments);
      },
      _applyCombination: function (t, r) {
        return t.apply(null, [this].concat([].slice.call(r)));
      },
      analogous: function () {
        return this._applyCombination(w, arguments);
      },
      complement: function () {
        return this._applyCombination(y, arguments);
      },
      monochromatic: function () {
        return this._applyCombination(S, arguments);
      },
      splitcomplement: function () {
        return this._applyCombination(k, arguments);
      },
      triad: function () {
        return this._applyCombination(A, arguments);
      },
      tetrad: function () {
        return this._applyCombination(x, arguments);
      },
    }),
      (f.fromRatio = function (t, r) {
        if ('object' == typeof t) {
          var e = {};
          for (var n in t)
            t.hasOwnProperty(n) && (e[n] = 'a' === n ? t[n] : I(t[n]));
          t = e;
        }
        return f(t, r);
      }),
      (f.equals = function (t, r) {
        return !(!t || !r) && f(t).toRgbString() == f(r).toRgbString();
      }),
      (f.random = function () {
        return f.fromRatio({r: o(), g: o(), b: o()});
      }),
      (f.mix = function (t, r, e) {
        e = 0 === e ? 0 : e || 50;
        var n = f(t).toRgb(),
          a = f(r).toRgb(),
          i = e / 100;
        return f({
          r: (a.r - n.r) * i + n.r,
          g: (a.g - n.g) * i + n.g,
          b: (a.b - n.b) * i + n.b,
          a: (a.a - n.a) * i + n.a,
        });
      }),
      (f.readability = function (r, e) {
        var n = f(r),
          a = f(e);
        return (
          (t.max(n.getLuminance(), a.getLuminance()) + 0.05) /
          (t.min(n.getLuminance(), a.getLuminance()) + 0.05)
        );
      }),
      (f.isReadable = function (t, r, e) {
        var n,
          a,
          i = f.readability(t, r);
        switch (
          ((a = !1),
          (n = (function (t) {
            var r, e;
            (r = (
              (t = t || {level: 'AA', size: 'small'}).level || 'AA'
            ).toUpperCase()),
              (e = (t.size || 'small').toLowerCase()),
              'AA' !== r && 'AAA' !== r && (r = 'AA');
            'small' !== e && 'large' !== e && (e = 'small');
            return {level: r, size: e};
          })(e)).level + n.size)
        ) {
          case 'AAsmall':
          case 'AAAlarge':
            a = i >= 4.5;
            break;
          case 'AAlarge':
            a = i >= 3;
            break;
          case 'AAAsmall':
            a = i >= 7;
        }
        return a;
      }),
      (f.mostReadable = function (t, r, e) {
        var n,
          a,
          i,
          s,
          o = null,
          h = 0;
        (a = (e = e || {}).includeFallbackColors), (i = e.level), (s = e.size);
        for (var l = 0; l < r.length; l++)
          (n = f.readability(t, r[l])) > h && ((h = n), (o = f(r[l])));
        return f.isReadable(t, o, {level: i, size: s}) || !a
          ? o
          : ((e.includeFallbackColors = !1),
            f.mostReadable(t, ['#fff', '#000'], e));
      });
    var H = (f.names = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '0ff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000',
        blanchedalmond: 'ffebcd',
        blue: '00f',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        burntsienna: 'ea7e5d',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '0ff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkgrey: 'a9a9a9',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkslategrey: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dimgrey: '696969',
        dodgerblue: '1e90ff',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'f0f',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        grey: '808080',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgray: 'd3d3d3',
        lightgreen: '90ee90',
        lightgrey: 'd3d3d3',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslategray: '789',
        lightslategrey: '789',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '0f0',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'f0f',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370db',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'db7093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        rebeccapurple: '663399',
        red: 'f00',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        slategrey: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        wheat: 'f5deb3',
        white: 'fff',
        whitesmoke: 'f5f5f5',
        yellow: 'ff0',
        yellowgreen: '9acd32',
      }),
      R = (f.hexNames = (function (t) {
        var r = {};
        for (var e in t) t.hasOwnProperty(e) && (r[t[e]] = e);
        return r;
      })(H));
    function F(t) {
      return (t = parseFloat(t)), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
    }
    function $(r, e) {
      (function (t) {
        return (
          'string' == typeof t && -1 != t.indexOf('.') && 1 === parseFloat(t)
        );
      })(r) && (r = '100%');
      var n = (function (t) {
        return 'string' == typeof t && -1 != t.indexOf('%');
      })(r);
      return (
        (r = i(e, s(0, parseFloat(r)))),
        n && (r = parseInt(r * e, 10) / 100),
        t.abs(r - e) < 1e-6 ? 1 : (r % e) / parseFloat(e)
      );
    }
    function C(t) {
      return i(1, s(0, t));
    }
    function q(t) {
      return parseInt(t, 16);
    }
    function M(t) {
      return 1 == t.length ? '0' + t : '' + t;
    }
    function I(t) {
      return t <= 1 && (t = 100 * t + '%'), t;
    }
    function L(r) {
      return t.round(255 * parseFloat(r)).toString(16);
    }
    function N(t) {
      return q(t) / 255;
    }
    var X,
      z,
      E,
      T =
        ((z =
          '[\\s|\\(]+(' +
          (X = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)') +
          ')[,|\\s]+(' +
          X +
          ')[,|\\s]+(' +
          X +
          ')\\s*\\)?'),
        (E =
          '[\\s|\\(]+(' +
          X +
          ')[,|\\s]+(' +
          X +
          ')[,|\\s]+(' +
          X +
          ')[,|\\s]+(' +
          X +
          ')\\s*\\)?'),
        {
          CSS_UNIT: new RegExp(X),
          rgb: new RegExp('rgb' + z),
          rgba: new RegExp('rgba' + E),
          hsl: new RegExp('hsl' + z),
          hsla: new RegExp('hsla' + E),
          hsv: new RegExp('hsv' + z),
          hsva: new RegExp('hsva' + E),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        });
    function j(t) {
      return !!T.CSS_UNIT.exec(t);
    }
    Oq
      ? (Oq = f)
      : 'function' == typeof Kj && Kj.amd
      ? Kj(function () {
          return f;
        })
      : (window.tinycolor = f);
  })(Math);
  var UC =
      (ag && ag.__assign) ||
      function () {
        return (UC =
          Object.assign ||
          function (e) {
            for (var o, t = 1, n = arguments.length; t < n; t++)
              for (var i in (o = arguments[t]))
                Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
            return e;
          }).apply(this, arguments);
      },
    VC = {
      ChatWindowContainer: {
        margin: 0,
        height: '100%',
        width: '100%',
        minHeight: 320,
      },
      WidgetContainer: {
        margin: 0,
        zIndex: 2147483e3,
        position: 'fixed',
        bottom: 100,
        right: 20,
        width: 376,
        maxWidth: ['90%', '376px'],
        minHeight: 250,
        maxHeight: ['60%', '704px'],
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 5px 40px',
        height: 'calc(100% - 120px)',
        borderRadius: 8,
        overflow: 'hidden',
        notifications: {
          background: 'transparent',
          margin: 0,
          zIndex: 2147483e3,
          position: 'fixed',
          bottom: 80,
          right: 20,
          width: 'auto',
          maxWidth: ['90%', '300px'],
          minHeight: 0,
          maxHeight: ['60%', '400px'],
          boxShadow: 'none',
          height: 200,
          overflow: 'hidden',
        },
      },
      WidgetToggleContainer: {
        position: 'fixed',
        zIndex: 2147483003,
        bottom: '20px',
        right: '20px',
      },
      WidgetToggle: {
        outline: 'none !important',
        border: 'none !important',
        userSelect: 'none !important',
        cursor: 'pointer',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    Lj = function (e) {
      var $ilXr$$interop$default = ya(Oq);
      var o = e.primary,
        t = $ilXr$$interop$default.d(void 0 === o ? '#1890ff' : o),
        n = {
          primary: t.toString(),
          light: t.lighten().toString(),
          dark: t.darken().toString(),
        };
      return {
        useBodyStyles: !1,
        space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
        fonts: {
          body: '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;',
          heading:
            '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;',
          monospace: '"Roboto Mono", monospace',
        },
        fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
        fontWeights: {body: 400, heading: 600, bold: 600},
        lineHeights: {body: 1.5, heading: 1.125},
        colors: {
          text: '#141414',
          background: '#fff',
          primary: n.primary,
          secondary: '#722ed1',
          muted: '#f0f0f0',
          gray: 'rgba(0, 0, 0, 0.45)',
          input: 'rgba(0, 0, 0, 0.65)',
          offset: 'rgba(255, 255, 255, 0.8)',
        },
        text: {
          default: {color: 'text', fontSize: 1},
          caps: {textTransform: 'uppercase', letterSpacing: '0.2em'},
          heading: {
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
          },
        },
        buttons: {
          primary: {
            cursor: 'pointer',
            outline: 0,
            boxShadow: 'rgba(0, 0, 0, 0.08) 0 2px 4px',
            transition: '0.2s',
            '&:hover': {
              background: n.light,
              borderColor: n.light,
              boxShadow: 'rgba(0, 0, 0, 0.12) 0px 2px 8px',
            },
            '&:active': {background: n.dark, borderColor: n.dark},
          },
        },
        styles: UC(
          {
            root: {
              fontFamily: 'body',
              lineHeight: 'body',
              fontWeight: 'body',
              fontSize: 1,
            },
            h1: {
              color: 'text',
              fontFamily: 'heading',
              lineHeight: 'heading',
              fontWeight: 'heading',
              fontSize: 5,
            },
            h2: {
              color: 'text',
              fontFamily: 'heading',
              lineHeight: 'heading',
              fontWeight: 'heading',
              fontSize: 4,
            },
            h3: {
              color: 'text',
              fontFamily: 'heading',
              lineHeight: 'heading',
              fontWeight: 'heading',
              fontSize: 3,
            },
            h4: {
              color: 'text',
              fontFamily: 'heading',
              lineHeight: 'heading',
              fontWeight: 'heading',
              fontSize: 2,
            },
            h5: {
              color: 'text',
              fontFamily: 'heading',
              lineHeight: 'heading',
              fontWeight: 'heading',
              fontSize: 1,
            },
            h6: {
              color: 'text',
              fontFamily: 'heading',
              lineHeight: 'heading',
              fontWeight: 'heading',
              fontSize: 0,
            },
            p: {
              color: 'text',
              fontFamily: 'body',
              fontWeight: 'body',
              lineHeight: 'body',
            },
            a: {color: 'primary'},
            pre: {
              fontFamily: 'monospace',
              overflowX: 'auto',
              code: {color: 'inherit'},
            },
            code: {fontFamily: 'monospace', fontSize: 'inherit'},
            table: {
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: 0,
            },
            th: {textAlign: 'left', borderBottomStyle: 'solid'},
            td: {textAlign: 'left', borderBottomStyle: 'solid'},
            img: {maxWidth: '100%'},
            textarea: {
              transparent: {
                border: 'none',
                boxShadow: 'none',
                resize: 'none',
                outline: 0,
                '&:hover': {
                  border: 'none',
                  boxShadow: 'none',
                  resize: 'none',
                  outline: 0,
                },
                '&:active': {
                  border: 'none',
                  boxShadow: 'none',
                  resize: 'none',
                  outline: 0,
                },
                '&:focus': {
                  border: 'none',
                  boxShadow: 'none',
                  resize: 'none',
                  outline: 0,
                },
              },
            },
          },
          VC
        ),
      };
    };
  (ag.getThemeConfig = Lj), (ag.default = Lj);
  var Mj = {},
    bg =
      (Mj && Mj.__assign) ||
      function () {
        return (bg =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var o in (e = arguments[r]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      },
    cg = '__DESKA__',
    se = function () {
      return {
        _db: {},
        getItem: function (t) {
          return this._db[t] || null;
        },
        setItem: function (t, e) {
          this._db[t] = e;
        },
        removeItem: function (t) {
          delete this._db[t];
        },
        get: function (t) {
          return this._db[t] || null;
        },
        set: function (t, e) {
          this._db[t] = e;
        },
        remove: function (t) {
          delete this._db[t];
        },
      };
    },
    WC = function (t) {
      try {
        var e = t && t.localStorage;
        return bg(bg({}, e), {
          get: function (t) {
            var r = e.getItem('' + cg + t);
            if (!r) return null;
            try {
              return JSON.parse(r);
            } catch (n) {
              return r;
            }
          },
          set: function (t, r) {
            e.setItem('' + cg + t, JSON.stringify(r));
          },
          remove: function (t) {
            e.removeItem(t);
          },
        });
      } catch (r) {
        return se();
      }
    },
    XC = function (t) {
      try {
        var e = t && t.sessionStorage;
        return bg(bg({}, e), {
          get: function (t) {
            var r = e.getItem('' + cg + t);
            if (!r) return null;
            try {
              return JSON.parse(r);
            } catch (n) {
              return r;
            }
          },
          set: function (t, r) {
            e.setItem('' + cg + t, JSON.stringify(r));
          },
          remove: function (t) {
            e.removeItem(t);
          },
        });
      } catch (r) {
        return se();
      }
    },
    YC = function () {
      try {
        throw new Error('Cookie storage has not been implemented!');
      } catch (t) {
        return se();
      }
    },
    Pq = function (t, e) {
      void 0 === e && (e = 'local');
      try {
        switch (e) {
          case 'local':
            return WC(t);
          case 'session':
            return XC(t);
          case 'cookie':
            return YC();
          case 'memory':
          default:
            return se();
        }
      } catch (r) {
        return se();
      }
    };
  function Qq(t, e) {
    void 0 === e && (e = {});
    var r = e.defaultType,
      n = void 0 === r ? 'local' : r,
      o = e.openStateType,
      a = void 0 === o ? 'session' : o,
      $ = Pq(t, n),
      u = Pq(t, a);
    return {
      getCustomerId: function () {
        return $.get('__CUSTOMER_ID__');
      },
      setCustomerId: function (t) {
        return $.set('__CUSTOMER_ID__', t);
      },
      removeCustomerId: function () {
        return $.remove('__CUSTOMER_ID__');
      },
      getOpenState: function () {
        return u.get(':open');
      },
      setOpenState: function (t) {
        return u.set(':open', t);
      },
      clearOpenState: function () {
        return u.remove(':open');
      },
      getPopupSeen: function () {
        return u.get(':pop_up_seen');
      },
      setPopupSeen: function (t) {
        return u.set(':pop_up_seen', t);
      },
      clearPopupSeen: function () {
        return u.remove(':pop_up_seen');
      },
    };
  }
  Mj.default = Qq;
  var ZC = (function () {
    function o(o) {
      this.debugModeEnabled = !!o;
    }
    return (
      (o.prototype.debug = function () {
        for (var o = [], e = 0; e < arguments.length; e++) o[e] = arguments[e];
        this.debugModeEnabled && console.debug.apply(console, o);
      }),
      (o.prototype.log = function () {
        for (var o = [], e = 0; e < arguments.length; e++) o[e] = arguments[e];
        this.debugModeEnabled && console.log.apply(console, o);
      }),
      (o.prototype.info = function () {
        for (var o = [], e = 0; e < arguments.length; e++) o[e] = arguments[e];
        console.info.apply(console, o);
      }),
      (o.prototype.warn = function () {
        for (var o = [], e = 0; e < arguments.length; e++) o[e] = arguments[e];
        console.warn.apply(console, o);
      }),
      (o.prototype.error = function () {
        for (var o = [], e = 0; e < arguments.length; e++) o[e] = arguments[e];
        console.error.apply(console, o);
      }),
      o
    );
  })();
  function Nj(e) {
    var r = $C(e),
      o = r.navigator,
      t = r.userAgent,
      n = r.windowOpera,
      i = r.intl,
      d = r.each,
      s = r.extend,
      a = r.includes,
      c = r.timestamp,
      u = r.stripEmptyProperties,
      l = r.getQueryParam,
      h = {
        campaignParams: function () {
          var e =
              'utm_source utm_medium utm_campaign utm_content utm_term'.split(
                ' '
              ),
            r = '',
            o = {};
          return (
            d(e, function (e) {
              (r = l(document.URL, e)).length && (o[e] = r);
            }),
            o
          );
        },
        searchEngine: function (e) {
          return 0 === e.search('https?://(.*)google.([^/?]*)')
            ? 'google'
            : 0 === e.search('https?://(.*)bing.com')
            ? 'bing'
            : 0 === e.search('https?://(.*)yahoo.com')
            ? 'yahoo'
            : 0 === e.search('https?://(.*)duckduckgo.com')
            ? 'duckduckgo'
            : null;
        },
        searchInfo: function (e) {
          var r = h.searchEngine(e),
            o = 'yahoo' != r ? 'q' : 'p',
            t = {};
          if (null !== r) {
            t.$search_engine = r;
            var n = l(e, o);
            n.length && (t.ph_keyword = n);
          }
          return t;
        },
        browser: function (e, r, o) {
          return (
            (r = r || ''),
            o || a(e, ' OPR/')
              ? a(e, 'Mini')
                ? 'Opera Mini'
                : 'Opera'
              : /(BlackBerry|PlayBook|BB10)/i.test(e)
              ? 'BlackBerry'
              : a(e, 'IEMobile') || a(e, 'WPDesktop')
              ? 'Internet Explorer Mobile'
              : a(e, 'SamsungBrowser/')
              ? 'Samsung Internet'
              : a(e, 'Edge') || a(e, 'Edg/')
              ? 'Microsoft Edge'
              : a(e, 'FBIOS')
              ? 'Facebook Mobile'
              : a(e, 'Chrome')
              ? 'Chrome'
              : a(e, 'CriOS')
              ? 'Chrome iOS'
              : a(e, 'UCWEB') || a(e, 'UCBrowser')
              ? 'UC Browser'
              : a(e, 'FxiOS')
              ? 'Firefox iOS'
              : a(r, 'Apple')
              ? a(e, 'Mobile')
                ? 'Mobile Safari'
                : 'Safari'
              : a(e, 'Android')
              ? 'Android Mobile'
              : a(e, 'Konqueror')
              ? 'Konqueror'
              : a(e, 'Firefox')
              ? 'Firefox'
              : a(e, 'MSIE') || a(e, 'Trident/')
              ? 'Internet Explorer'
              : a(e, 'Gecko')
              ? 'Mozilla'
              : ''
          );
        },
        browserVersion: function (e, r, o) {
          var t = {
            'Internet Explorer Mobile': /rv:(\d+(\.\d+)?)/,
            'Microsoft Edge': /Edge?\/(\d+(\.\d+)?)/,
            Chrome: /Chrome\/(\d+(\.\d+)?)/,
            'Chrome iOS': /CriOS\/(\d+(\.\d+)?)/,
            'UC Browser': /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
            Safari: /Version\/(\d+(\.\d+)?)/,
            'Mobile Safari': /Version\/(\d+(\.\d+)?)/,
            Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
            Firefox: /Firefox\/(\d+(\.\d+)?)/,
            'Firefox iOS': /FxiOS\/(\d+(\.\d+)?)/,
            Konqueror: /Konqueror:(\d+(\.\d+)?)/,
            BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
            'Android Mobile': /android\s(\d+(\.\d+)?)/,
            'Samsung Internet': /SamsungBrowser\/(\d+(\.\d+)?)/,
            'Internet Explorer': /(rv:|MSIE )(\d+(\.\d+)?)/,
            Mozilla: /rv:(\d+(\.\d+)?)/,
          }[h.browser(e, r, o)];
          if (void 0 === t) return null;
          var n = e.match(t);
          return n ? parseFloat(n[n.length - 2]) : null;
        },
        os: function () {
          var e = t;
          return /Windows/i.test(e)
            ? /Phone/.test(e) || /WPDesktop/.test(e)
              ? 'Windows Phone'
              : 'Windows'
            : /(iPhone|iPad|iPod)/.test(e)
            ? 'iOS'
            : /Android/.test(e)
            ? 'Android'
            : /(BlackBerry|PlayBook|BB10)/i.test(e)
            ? 'BlackBerry'
            : /Mac/i.test(e)
            ? 'Mac OS X'
            : /Linux/.test(e)
            ? 'Linux'
            : /CrOS/.test(e)
            ? 'Chrome OS'
            : '';
        },
        device: function (e) {
          return /Windows Phone/i.test(e) || /WPDesktop/.test(e)
            ? 'Windows Phone'
            : /iPad/.test(e)
            ? 'iPad'
            : /iPod/.test(e)
            ? 'iPod Touch'
            : /iPhone/.test(e)
            ? 'iPhone'
            : /(BlackBerry|PlayBook|BB10)/i.test(e)
            ? 'BlackBerry'
            : /Android/.test(e)
            ? 'Android'
            : '';
        },
        referringDomain: function (e) {
          var r = e.split('/');
          return r.length >= 3 ? r[2] : '';
        },
        timezone: function (e) {
          try {
            return e.DateTimeFormat().resolvedOptions().timeZone;
          } catch (r) {
            return null;
          }
        },
        properties: function () {
          var r;
          return s(
            u({
              os: h.os(),
              browser: h.browser(t, o.vendor, n),
              referrer: document.referrer,
              referring_domain: h.referringDomain(document.referrer),
              device: h.device(t),
              time_zone: h.timezone(i),
            }),
            {
              current_url: e.location.href,
              host: e.location.host,
              pathname: e.location.pathname,
              browser_version:
                null === (r = h.browserVersion(t, o.vendor, n)) || void 0 === r
                  ? void 0
                  : r.toString(),
              screen_height: screen.height,
              screen_width: screen.width,
              lib: 'web',
              insert_id:
                Math.random().toString(36).substring(2, 10) +
                Math.random().toString(36).substring(2, 10),
              time: c() / 1e3,
            }
          );
        },
      };
    return h.properties();
  }
  function Rq(r) {
    return (Rq =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              'function' == typeof Symbol &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          })(r);
  }
  var $C = function (r) {
    var n = Array.prototype,
      t = Function.prototype,
      e = Object.prototype,
      o = e.toString,
      i = e.hasOwnProperty,
      u = r.console,
      c = r.navigator,
      a = r.document,
      f = r.opera,
      l = r.screen,
      s = c.userAgent,
      p = r.Intl,
      y = t.bind,
      h = n.forEach,
      d = n.indexOf,
      g = Array.isArray,
      v = n.slice,
      b = {},
      j =
        g ||
        function (r) {
          return '[object Array]' === o.call(r);
        };
    function m(r) {
      try {
        return /^\s*\bfunction\b/.test(r);
      } catch (n) {
        return !1;
      }
    }
    function S(r) {
      return '[object String]' == o.call(r);
    }
    function w(r) {
      return void 0 === r;
    }
    function x(r, n, t) {
      if (null != r)
        if (h && r.forEach === h) r.forEach(n, t);
        else if (r.length === +r.length) {
          for (var e = 0, o = r.length; e < o; e++)
            if (e in r && n.call(t, r[e], e, r) === b) return;
        } else
          for (var u in r)
            if (i.call(r, u) && n.call(t, r[u], u, r) === b) return;
    }
    var $,
      A,
      F,
      O,
      C,
      E,
      B,
      P,
      I,
      N,
      _,
      D,
      k = function (r) {
        var n = function (r) {
          var n =
              /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            t = {
              '\b': '\\b',
              '\t': '\\t',
              '\n': '\\n',
              '\f': '\\f',
              '\r': '\\r',
              '"': '\\"',
              '\\': '\\\\',
            };
          return (
            (n.lastIndex = 0),
            n.test(r)
              ? '"' +
                r.replace(n, function (r) {
                  var n = t[r];
                  return 'string' == typeof n
                    ? n
                    : '\\u' + ('0000' + r.charCodeAt(0).toString(16)).slice(-4);
                }) +
                '"'
              : '"' + r + '"'
          );
        };
        return (function r(t, e) {
          var u = '',
            c = 0,
            a = '',
            f = '',
            l = 0,
            s = u,
            p = [],
            y = e[t];
          switch (
            (y &&
              'object' === Rq(y) &&
              'function' == typeof y.toJSON &&
              (y = y.toJSON(t)),
            Rq(y))
          ) {
            case 'string':
              return n(y);
            case 'number':
              return isFinite(y) ? String(y) : 'null';
            case 'boolean':
            case 'undefined':
              return String(y);
            case 'object':
              if (!y) return 'null';
              if (((u += '    '), (p = []), '[object Array]' === o.apply(y))) {
                for (l = y.length, c = 0; c < l; c += 1)
                  p[c] = r(c, y) || 'null';
                return (
                  (f =
                    0 === p.length
                      ? '[]'
                      : u
                      ? '[\n' + u + p.join(',\n' + u) + '\n' + s + ']'
                      : '[' + p.join(',') + ']'),
                  (u = s),
                  f
                );
              }
              for (a in y)
                i.call(y, a) &&
                  (f = r(a, y)) &&
                  p.push(n(a) + (u ? ': ' : ':') + f);
              return (
                (f =
                  0 === p.length
                    ? '{}'
                    : u
                    ? '{' + p.join(',') + s + '}'
                    : '{' + p.join(',') + '}'),
                (u = s),
                f
              );
          }
        })('', {'': r});
      },
      U =
        ((C = {
          '"': '"',
          '\\': '\\',
          '/': '/',
          b: '\b',
          f: '\f',
          n: '\n',
          r: '\r',
          t: '\t',
        }),
        (E = function (r) {
          var n = new SyntaxError(r);
          throw ((n.at = $), (n.text = F), n);
        }),
        (B = function (r) {
          return (
            r && r !== A && E("Expected '" + r + "' instead of '" + A + "'"),
            (A = F.charAt($)),
            ($ += 1),
            A
          );
        }),
        (P = function () {
          var r,
            n = '';
          for ('-' === A && ((n = '-'), B('-')); A >= '0' && A <= '9'; )
            (n += A), B();
          if ('.' === A) for (n += '.'; B() && A >= '0' && A <= '9'; ) n += A;
          if ('e' === A || 'E' === A)
            for (
              n += A, B(), ('-' !== A && '+' !== A) || ((n += A), B());
              A >= '0' && A <= '9';

            )
              (n += A), B();
          if (((r = +n), isFinite(r))) return r;
          E('Bad number');
        }),
        (I = function () {
          var r,
            n,
            t,
            e = '';
          if ('"' === A)
            for (; B(); ) {
              if ('"' === A) return B(), e;
              if ('\\' === A) {
                if ((B(), 'u' === A)) {
                  for (
                    t = 0, n = 0;
                    n < 4 && ((r = parseInt(B(), 16)), isFinite(r));
                    n += 1
                  )
                    t = 16 * t + r;
                  e += String.fromCharCode(t);
                } else {
                  if ('string' != typeof C[A]) break;
                  e += C[A];
                }
              } else e += A;
            }
          E('Bad string');
        }),
        (N = function () {
          for (; A && A <= ' '; ) B();
        }),
        (_ = function () {
          var r = [];
          if ('[' === A) {
            if ((B('['), N(), ']' === A)) return B(']'), r;
            for (; A; ) {
              if ((r.push(O()), N(), ']' === A)) return B(']'), r;
              B(','), N();
            }
          }
          E('Bad array');
        }),
        (D = function () {
          var r,
            n = {};
          if ('{' === A) {
            if ((B('{'), N(), '}' === A)) return B('}'), n;
            for (; A; ) {
              if (
                ((r = I()),
                N(),
                B(':'),
                Object.hasOwnProperty.call(n, r) &&
                  E('Duplicate key "' + r + '"'),
                (n[r] = O()),
                N(),
                '}' === A)
              )
                return B('}'), n;
              B(','), N();
            }
          }
          E('Bad object');
        }),
        (O = function () {
          switch ((N(), A)) {
            case '{':
              return D();
            case '[':
              return _();
            case '"':
              return I();
            case '-':
              return P();
            default:
              return A >= '0' && A <= '9'
                ? P()
                : (function () {
                    switch (A) {
                      case 't':
                        return B('t'), B('r'), B('u'), B('e'), !0;
                      case 'f':
                        return B('f'), B('a'), B('l'), B('s'), B('e'), !1;
                      case 'n':
                        return B('n'), B('u'), B('l'), B('l'), null;
                    }
                    E('Unexpected "' + A + '"');
                  })();
          }
        }),
        function (r) {
          var n;
          return (
            (F = r),
            ($ = 0),
            (A = ' '),
            (n = O()),
            N(),
            A && E('Syntax error'),
            n
          );
        });
    function J(r) {
      var n,
        t,
        e,
        o,
        i = '';
      for (
        n = t = 0,
          e = (r = (r + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')).length,
          o = 0;
        o < e;
        o++
      ) {
        var u = r.charCodeAt(o),
          c = null;
        u < 128
          ? t++
          : (c =
              u > 127 && u < 2048
                ? String.fromCharCode((u >> 6) | 192, (63 & u) | 128)
                : String.fromCharCode(
                    (u >> 12) | 224,
                    ((u >> 6) & 63) | 128,
                    (63 & u) | 128
                  )),
          null !== c &&
            (t > n && (i += r.substring(n, t)), (i += c), (n = t = o + 1));
      }
      return t > n && (i += r.substring(n, r.length)), i;
    }
    return {
      ArrayProto: n,
      FuncProto: t,
      ObjProto: e,
      toString: o,
      hasOwnProperty: i,
      win: r,
      windowConsole: u,
      navigator: c,
      document: a,
      windowOpera: f,
      screen: l,
      userAgent: s,
      intl: p,
      nativeBind: y,
      nativeForEach: h,
      nativeIndexOf: d,
      nativeIsArray: g,
      slice: v,
      breaker: b,
      __NOOP: function () {},
      __NOOPTIONS: {},
      isFunction: m,
      isString: S,
      includes: function (r, n) {
        return -1 !== r.indexOf(n);
      },
      isUndefined: w,
      timestamp: function () {
        return (
          (Date.now =
            Date.now ||
            function () {
              return +new Date();
            }),
          Date.now()
        );
      },
      each: x,
      trim: function (r) {
        return r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      },
      extend: function (r) {
        for (var n = [], t = 1; t < arguments.length; t++)
          n[t - 1] = arguments[t];
        return (
          x(n, function (n) {
            for (var t in n) void 0 !== n[t] && (r[t] = n[t]);
          }),
          r
        );
      },
      bind: function (r, n) {
        var t, e;
        if (y && r.bind === y) return y.apply(r, v.call(arguments, 1));
        if (!m(r)) throw new TypeError();
        return (
          (t = v.call(arguments, 2)),
          (e = function () {
            if (!(this instanceof e))
              return r.apply(n, t.concat(v.call(arguments)));
            var o = {};
            o.prototype = r.prototype;
            var i = new o();
            o.prototype = null;
            var u = r.apply(i, t.concat(v.call(arguments)));
            return Object(u) === u ? u : i;
          })
        );
      },
      truncate: function r(n, t) {
        var e;
        return (
          'string' == typeof n
            ? (e = n.slice(0, t))
            : j(n)
            ? ((e = []),
              x(n, function (n) {
                e.push(r(n, t));
              }))
            : (function (r) {
                return r === Object(r) && !j(r);
              })(n)
            ? ((e = {}),
              x(n, function (n, o) {
                e[o] = r(n, t);
              }))
            : (e = n),
          e
        );
      },
      stripEmptyProperties: function (r) {
        var n = {};
        return (
          x(r, function (r, t) {
            S(r) && r.length > 0 && (n[t] = r);
          }),
          n
        );
      },
      HTTPBuildQuery: function (r, n) {
        var t,
          e,
          o = [];
        return (
          w(n) && (n = '&'),
          x(r, function (r, n) {
            (t = encodeURIComponent(r.toString())),
              (e = encodeURIComponent(n)),
              (o[o.length] = e + '=' + t);
          }),
          o.join(n)
        );
      },
      JSONEncode: k,
      JSONDecode: U,
      utf8Encode: J,
      base64Encode: function (r) {
        var n,
          t,
          e,
          o,
          i,
          u =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          c = 0,
          a = 0,
          f = '',
          l = [];
        if (!r) return r;
        r = J(r);
        do {
          (n =
            ((i =
              (r.charCodeAt(c++) << 16) |
              (r.charCodeAt(c++) << 8) |
              r.charCodeAt(c++)) >>
              18) &
            63),
            (t = (i >> 12) & 63),
            (e = (i >> 6) & 63),
            (o = 63 & i),
            (l[a++] = u.charAt(n) + u.charAt(t) + u.charAt(e) + u.charAt(o));
        } while (c < r.length);
        switch (((f = l.join('')), r.length % 3)) {
          case 1:
            f = f.slice(0, -2) + '==';
            break;
          case 2:
            f = f.slice(0, -1) + '=';
        }
        return f;
      },
      getQueryParam: function (r, n) {
        n = n.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
        var t = new RegExp('[\\?&]' + n + '=([^&#]*)').exec(r);
        if (null === t || (t && 'string' != typeof t[1] && t[1].length))
          return '';
        var e = t[1];
        try {
          e = decodeURIComponent(e);
        } catch (o) {
          console.error('Skipping decoding for malformed query param: ' + e);
        }
        return e.replace(/\+/g, ' ');
      },
    };
  };
  Ja();
  var _C =
      (Mb && Mb.__extends) ||
      (function () {
        var e = function (t, n) {
          return (e =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(t, n);
        };
        return function (t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
        };
      })(),
    zb =
      (Mb && Mb.__assign) ||
      function () {
        return (zb =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      },
    te =
      (Mb && Mb.__awaiter) ||
      function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, i) {
          function o(e) {
            try {
              u(r.next(e));
            } catch (t) {
              i(t);
            }
          }
          function s(e) {
            try {
              u(r.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, s);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
    ue =
      (Mb && Mb.__generator) ||
      function (e, t) {
        var n,
          r,
          a,
          i,
          o = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = {next: s(0), throw: s(1), return: s(2)}),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; o; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, i[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                    case 0:
                    case 1:
                      a = i;
                      break;
                    case 4:
                      return o.label++, {value: i[1], done: !1};
                    case 5:
                      o.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = (a = o.trys).length > 0 && a[a.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                        o.label = i[1];
                        break;
                      }
                      if (6 === i[0] && o.label < a[1]) {
                        (o.label = a[1]), (a = i);
                        break;
                      }
                      if (a && o.label < a[2]) {
                        (o.label = a[2]), o.ops.push(i);
                        break;
                      }
                      a[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  i = t.call(e, o);
                } catch (s) {
                  (i = [6, s]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & i[0]) throw i[1];
              return {value: i[0] ? i[1] : void 0, done: !0};
            })([i, s]);
          };
        }
      },
    aD = 'https://chat-widget.papercups.io',
    bD = function (e, t) {
      var n = function (e) {
        t(e);
      };
      return e.addEventListener
        ? (e.addEventListener('message', n),
          function () {
            return e.removeEventListener('message', n);
          })
        : (e.attachEvent('onmessage', n),
          function () {
            return e.detachEvent('onmessage', n);
          });
    },
    cD = function (e, t, n) {
      if (e.addEventListener) {
        for (var r = 0, a = t; r < a.length; r++) {
          var i = a[r];
          e.addEventListener(i, n);
        }
        return function () {
          return t.map(function (t) {
            return e.removeEventListener(t, n);
          });
        };
      }
      return (
        console.error('Custom events are not supported in your browser!'), dd
      );
    },
    Sq = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        if (
          ((n.subscriptions = []),
          (n.EVENTS = [
            'deska:open',
            'deska:close',
            'deska:toggle',
            'deska:identify',
            'storytime:customer:set',
          ]),
          (n.getDefaultTitle = function (e) {
            return te(n, void 0, void 0, function () {
              var t, n, r;
              return ue(this, function (a) {
                return (
                  (t = this.props),
                  (n = t.title),
                  (r = t.setDefaultTitle) && 'function' == typeof r
                    ? [2, r(e)]
                    : [2, n || e.title]
                );
              });
            });
          }),
          (n.getDefaultSubtitle = function (e) {
            return te(n, void 0, void 0, function () {
              var t, n, r;
              return ue(this, function (a) {
                return (
                  (t = this.props),
                  (n = t.subtitle),
                  (r = t.setDefaultSubtitle) && 'function' == typeof r
                    ? [2, r(e)]
                    : [2, n || e.subtitle]
                );
              });
            });
          }),
          (n.getDefaultGreeting = function (e) {
            return te(n, void 0, void 0, function () {
              var t, n, r;
              return ue(this, function (a) {
                return (
                  (t = this.props),
                  (n = t.greeting),
                  (r = t.setDefaultGreeting) && 'function' == typeof r
                    ? [2, r(e)]
                    : [2, n || e.greeting]
                );
              });
            });
          }),
          (n.setIframeRef = function (e) {
            n.iframeRef = e;
          }),
          (n.getIframeUrl = function () {
            return n.props.iframeUrlOverride || aD;
          }),
          (n.handleConfigUpdated = function (e) {
            n.setState({config: zb(zb({}, n.state.config), e)}),
              n.send('config:update', e);
          }),
          (n.handleCustomerIdUpdated = function (e) {
            var t = n.storage.getCustomerId(),
              r = e || t,
              a = zb(zb({}, n.state.config), {customerId: r});
            var $FvpG$$interop$default = ya(xc);
            n.setState({
              config: a,
              query: $FvpG$$interop$default.d.stringify(a, {
                skipEmptyString: !0,
                skipNull: !0,
              }),
            }),
              n.logger.debug('Updated customer ID:', r);
          }),
          (n.fetchWidgetSettings = function () {
            return te(n, void 0, Promise, function () {
              var e, t, n, r;
              return ue(this, function (a) {
                return (
                  (e = this.props),
                  (t = e.accountId),
                  (n = e.baseUrl),
                  (r = {}),
                  [
                    2,
                    Mq(t, n)
                      .then(function (e) {
                        return e || r;
                      })
                      .catch(function () {
                        return r;
                      }),
                  ]
                );
              });
            });
          }),
          (n.updateWidgetSettingsMetadata = function () {
            var e = n.props,
              t = e.accountId,
              r = e.baseUrl,
              a = Nj(window);
            return Nq(t, a, r).catch(function (e) {
              n.logger.error('Failed to update widget metadata:', e);
            });
          }),
          (n.customEventHandlers = function (e) {
            if (!e || !e.type) return null;
            var t = e.type,
              r = e.detail;
            switch (t) {
              case 'deska:open':
                return n.handleOpenWidget();
              case 'deska:close':
                return n.handleCloseWidget();
              case 'deska:toggle':
                return n.handleToggleOpen();
              case 'storytime:customer:set':
                return n.handleCustomerIdUpdated(r);
              default:
                return null;
            }
          }),
          (n.postMessageHandlers = function (e) {
            n.logger.debug('Handling in parent:', e.data);
            var t = n.getIframeUrl(),
              r = new URL(t).origin;
            if (e.origin !== r) return null;
            var a = e.data,
              i = a.event,
              o = a.payload,
              s = void 0 === o ? {} : o;
            switch (i) {
              case 'chat:loaded':
                return n.handleChatLoaded();
              case 'customer:created':
              case 'customer:updated':
                return n.handleCacheCustomerId(s);
              case 'conversation:join':
                return n.sendCustomerUpdate(s);
              case 'message:received':
                return n.handleMessageReceived(s);
              case 'message:sent':
                return n.handleMessageSent(s);
              case 'messages:unseen':
                return n.handleUnseenMessages(s);
              case 'messages:seen':
                return n.handleMessagesSeen();
              case 'deska:open':
              case 'deska:close':
                return n.handleToggleOpen();
              default:
                return null;
            }
          }),
          (n.send = function (e, t) {
            n.logger.debug('Sending from parent:', {event: e, payload: t});
            var r = n.iframeRef;
            if (!r)
              throw new Error(
                'Attempted to send event ' +
                  e +
                  ' with payload ' +
                  JSON.stringify(t) +
                  ' before iframeRef was ready'
              );
            r.contentWindow.postMessage(
              {event: e, payload: t},
              n.getIframeUrl()
            );
          }),
          (n.handleMessageReceived = function (e) {
            var t = n.props.onMessageReceived,
              r = void 0 === t ? dd : t,
              a = e.user_id,
              i = e.customer_id;
            !!a && !i && r && r(e);
          }),
          (n.handleMessageSent = function (e) {
            var t = n.props.onMessageSent,
              r = void 0 === t ? dd : t;
            r && r(e);
          }),
          (n.handleUnseenMessages = function (e) {
            n.logger.debug('Handling unseen messages:', e),
              n.setState({shouldDisplayNotifications: !0}),
              n.send('notifications:display', {shouldDisplayNotifications: !0});
          }),
          (n.handleMessagesSeen = function () {
            n.logger.debug('Handling messages seen'),
              n.setState({shouldDisplayNotifications: !1}),
              n.storage.setPopupSeen(!0),
              n.send('notifications:display', {shouldDisplayNotifications: !1});
          }),
          (n.shouldOpenByDefault = function () {
            var e = n.props,
              t = e.defaultIsOpen,
              r = e.isOpenByDefault,
              a = e.persistOpenState;
            if (!e.canToggle) return !0;
            var i = n.storage.getOpenState();
            return a ? i : !(!r && !t);
          }),
          (n.handleChatLoaded = function () {
            n.setState({isLoaded: !0});
            var e = n.state.config,
              t = (void 0 === e ? {} : e).subscriptionPlan,
              r = void 0 === t ? null : t,
              a = n.props,
              i = a.popUpInitialMessage,
              o = a.onChatLoaded,
              s = void 0 === o ? dd : o;
            (s && 'function' == typeof s && s(),
            n.shouldOpenByDefault() &&
              n.setState({isOpen: !0}, function () {
                return n.emitToggleEvent(!0);
              }),
            i && !n.storage.getPopupSeen()) &&
              setTimeout(
                function () {
                  n.setState({shouldDisplayNotifications: !0}),
                    n.send('notifications:display', {
                      shouldDisplayNotifications: !0,
                      popUpInitialMessage: !0,
                    });
                },
                'number' == typeof i ? i : 0
              );
            n.send('deska:plan', {plan: r});
          }),
          (n.formatCustomerMetadata = function () {
            var e = n.props.customer,
              t = void 0 === e ? {} : e;
            return t
              ? Object.keys(t).reduce(function (e, n) {
                  var r, a;
                  return zb(
                    zb({}, e),
                    'metadata' === n
                      ? (((r = {})[n] = t[n]), r)
                      : (((a = {})[n] = String(t[n])), a)
                  );
                }, {})
              : {};
          }),
          (n.sendCustomerUpdate = function (e) {
            var t = e.customerId,
              r = Nj(window),
              a = zb(zb({}, r), n.formatCustomerMetadata());
            return n.send('customer:update', {customerId: t, metadata: a});
          }),
          (n.handleCacheCustomerId = function (e) {
            var t = e.customerId;
            n.logger.debug('Caching customer ID:', t),
              window.dispatchEvent(
                new CustomEvent('deska:customer:set', {detail: t})
              ),
              n.storage.setCustomerId(t);
          }),
          (n.emitToggleEvent = function (e) {
            n.send('deska:toggle', {isOpen: e});
            var t = n.props,
              r = t.persistOpenState,
              a = void 0 !== r && r,
              i = t.onChatOpened,
              o = void 0 === i ? dd : i,
              s = t.onChatClosed,
              u = void 0 === s ? dd : s;
            a && n.storage.setOpenState(e), e ? o && o() : u && u();
          }),
          (n.handleOpenWidget = function () {
            n.props.canToggle &&
              !n.state.isOpen &&
              (n.state.shouldDisplayNotifications
                ? n.setState({isTransitioning: !0}, function () {
                    setTimeout(function () {
                      n.setState(
                        {isOpen: !0, isTransitioning: !1},
                        function () {
                          return n.emitToggleEvent(!0);
                        }
                      );
                    }, 200);
                  })
                : n.setState({isOpen: !0}, function () {
                    return n.emitToggleEvent(!0);
                  }));
          }),
          (n.handleCloseWidget = function () {
            n.props.canToggle &&
              n.state.isOpen &&
              n.setState({isOpen: !1}, function () {
                return n.emitToggleEvent(!1);
              });
          }),
          (n.handleToggleOpen = function () {
            var e = n.state,
              t = e.isOpen,
              r = e.isLoaded,
              a = e.shouldDisplayNotifications,
              i = !t;
            r &&
              n.props.canToggle &&
              (!t && a
                ? n.setState({isTransitioning: !0}, function () {
                    setTimeout(function () {
                      n.setState({isOpen: i, isTransitioning: !1}, function () {
                        return n.emitToggleEvent(i);
                      });
                    }, 200);
                  })
                : n.setState({isOpen: i}, function () {
                    return n.emitToggleEvent(i);
                  }));
          }),
          !t.accountId)
        )
          throw new Error(
            'An `accountId` is required to run the Papercups chat!'
          );
        if (!TC(t.accountId))
          throw (
            (console.error(
              'The `accountId` must be a valid UUID. (Received invalid `accountId`: ' +
                t.accountId +
                ')'
            ),
            console.error(
              "If you're missing a Papercups `accountId`, you can get one by signing up for a free account at https://app.papercups.io/register"
            ),
            new Error('Invalid `accountId`: ' + t.accountId))
          );
        return (
          (n.state = {
            isOpen: !1,
            isLoaded: !1,
            query: '',
            config: {},
            shouldDisplayNotifications: !1,
            isTransitioning: !1,
          }),
          n
        );
      }
      return (
        _C(t, e),
        (t.prototype.componentDidMount = function () {
          var e, t, n;
          return te(this, void 0, void 0, function () {
            var r, a, i, o, s, u, l, c, p, d, g, f, $, v, h, m, U, _, y, w, J;
            return ue(this, function (X) {
              switch (X.label) {
                case 0:
                  return [4, this.fetchWidgetSettings()];
                case 1:
                  return (
                    (r = X.sent()),
                    (a = this.props),
                    (i = a.accountId),
                    (o = a.primaryColor),
                    (s = a.baseUrl),
                    (u = a.awayMessage),
                    (l = a.newMessagePlaceholder),
                    (c = a.emailInputPlaceholder),
                    (p = a.newMessagesNotificationText),
                    (d = a.agentAvailableText),
                    (g = a.agentUnavailableText),
                    (f = a.showAgentAvailability),
                    ($ = a.requireEmailUpfront),
                    (v = a.canToggle),
                    (h = a.customer),
                    (m = void 0 === h ? {} : h),
                    (U = SC(window)),
                    (this.logger = new ZC(U)),
                    (this.subscriptions = [
                      bD(window, this.postMessageHandlers),
                      cD(window, this.EVENTS, this.customEventHandlers),
                    ]),
                    (this.storage = Qq(window)),
                    (_ = zb(zb({}, Nj(window)), m)),
                    (w = {accountId: i, baseUrl: s}),
                    [4, this.getDefaultTitle(r)]
                  );
                case 2:
                  return (w.title = X.sent()), [4, this.getDefaultSubtitle(r)];
                case 3:
                  return (
                    (w.subtitle = X.sent()),
                    (w.primaryColor = o || r.color),
                    [4, this.getDefaultGreeting(r)]
                  );
                case 4:
                  var $FvpG$$interop$default = ya(xc);
                  return (
                    (w.greeting = X.sent()),
                    (w.awayMessage = u || r.away_message),
                    (w.newMessagePlaceholder = l || r.new_message_placeholder),
                    (w.emailInputPlaceholder = c || r.email_input_placeholder),
                    (w.newMessagesNotificationText =
                      p || r.new_messages_notification_text),
                    (w.companyName =
                      null === (e = null == r ? void 0 : r.account) ||
                      void 0 === e
                        ? void 0
                        : e.company_name),
                    (w.requireEmailUpfront =
                      $ || r.require_email_upfront ? 1 : 0),
                    (w.showAgentAvailability =
                      f || r.show_agent_availability ? 1 : 0),
                    (w.agentAvailableText = r.agent_available_text || d),
                    (w.agentUnavailableText = r.agent_unavailable_text || g),
                    (w.closeable = v ? 1 : 0),
                    (w.customerId = this.storage.getCustomerId()),
                    (w.subscriptionPlan =
                      null === (t = null == r ? void 0 : r.account) ||
                      void 0 === t
                        ? void 0
                        : t.subscription_plan),
                    (w.isOutsideWorkingHours =
                      null === (n = null == r ? void 0 : r.account) ||
                      void 0 === n
                        ? void 0
                        : n.is_outside_working_hours),
                    (w.isBrandingHidden =
                      null == r ? void 0 : r.is_branding_hidden),
                    (w.metadata = JSON.stringify(_)),
                    (w.version = '1.1.8'),
                    (y = w),
                    (J = $FvpG$$interop$default.d.stringify(y, {
                      skipEmptyString: !0,
                      skipNull: !0,
                    })),
                    this.setState({config: y, query: J}),
                    [4, this.updateWidgetSettingsMetadata()]
                  );
                case 5:
                  return X.sent(), [2];
              }
            });
          });
        }),
        (t.prototype.componentWillUnmount = function () {
          this.subscriptions.forEach(function (e) {
            'function' == typeof e && e();
          });
        }),
        (t.prototype.componentDidUpdate = function (e) {
          var t = this.props,
            n = t.accountId,
            r = t.title,
            a = t.subtitle,
            i = t.primaryColor,
            o = t.baseUrl,
            s = t.greeting,
            u = t.newMessagePlaceholder,
            l = t.emailInputPlaceholder,
            c = t.newMessagesNotificationText,
            p = t.requireEmailUpfront,
            d = t.showAgentAvailability,
            g = t.agentAvailableText,
            f = t.agentUnavailableText,
            $ = [n, r, a, i, o, s, u, l, c, p, d, g, f],
            v = [
              e.accountId,
              e.title,
              e.subtitle,
              e.primaryColor,
              e.baseUrl,
              e.greeting,
              e.newMessagePlaceholder,
              e.emailInputPlaceholder,
              e.newMessagesNotificationText,
              e.requireEmailUpfront,
              e.showAgentAvailability,
              e.agentAvailableText,
              e.agentUnavailableText,
            ];
          $.some(function (e, t) {
            return e !== v[t];
          }) &&
            this.handleConfigUpdated({
              accountId: n,
              title: r,
              subtitle: a,
              primaryColor: i,
              baseUrl: o,
              greeting: s,
              newMessagePlaceholder: u,
              emailInputPlaceholder: l,
              newMessagesNotificationText: c,
              agentAvailableText: g,
              agentUnavailableText: f,
              requireEmailUpfront: p ? 1 : 0,
              showAgentAvailability: d ? 1 : 0,
            });
        }),
        (t.prototype.render = function () {
          var e = this.state,
            t = e.isOpen,
            n = e.isLoaded,
            r = e.query,
            a = e.config,
            i = e.shouldDisplayNotifications,
            o = e.isTransitioning,
            s = this.props,
            u = s.customIconUrl,
            l = s.hideOutsideWorkingHours,
            c = void 0 !== l && l,
            p = s.children,
            d = a.primaryColor;
          if (!r) return null;
          if (c && a.isOutsideWorkingHours) return null;
          var g = this.getIframeUrl(),
            f = (t || i) && !o,
            $ = Lj({primary: d}),
            v = [
              'allow-scripts',
              'allow-popups',
              'allow-same-origin',
              'allow-forms',
            ].join(' ');
          return sa(
            VA,
            {theme: $},
            p({
              sandbox: v,
              isLoaded: n,
              isActive: f,
              isOpen: t,
              isTransitioning: o,
              customIconUrl: u,
              iframeUrl: g,
              query: r,
              shouldDisplayNotifications: i,
              setIframeRef: this.setIframeRef,
              onToggleOpen: this.handleToggleOpen,
            })
          );
        }),
        t
      );
    })(Q.d.Component);
  Mb.default = Sq;
  var Oj = {};
  Ja();
  var dD =
      (Oj && Oj.__extends) ||
      (function () {
        var t = function (r, e) {
          return (t =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function (t, r) {
                t.__proto__ = r;
              }) ||
            function (t, r) {
              for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e]);
            })(r, e);
        };
        return function (r, e) {
          function o() {
            this.constructor = r;
          }
          t(r, e),
            (r.prototype =
              null === e
                ? Object.create(e)
                : ((o.prototype = e.prototype), new o()));
        };
      })(),
    Tq = (function (t) {
      function r() {
        var r = (null !== t && t.apply(this, arguments)) || this;
        return (r.state = {error: null}), r;
      }
      return (
        dD(r, t),
        (r.getDerivedStateFromError = function (t) {
          return {error: t};
        }),
        (r.prototype.componentDidCatch = function (t, r) {
          console.error('Error rendering Papercups chat:', t, r);
        }),
        (r.prototype.render = function () {
          return this.state.error ? null : this.props.children;
        }),
        r
      );
    })(Q.d.Component);
  Oj.default = Tq;
  Ja();
  var ve =
      (bi && bi.__assign) ||
      function () {
        return (ve =
          Object.assign ||
          function (t) {
            for (var e, i = 1, r = arguments.length; i < r; i++)
              for (var o in (e = arguments[i]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      },
    dg = 20,
    eD = function (t) {
      if (!t) return {side: 'right', offset: dg};
      switch (t) {
        case 'left':
          return {side: 'left', offset: dg};
        case 'right':
          return {side: 'right', offset: dg};
        default:
          return t;
      }
    },
    fD = function (t, e) {
      void 0 === t && (t = {});
      var i = t.chatContainer,
        r = void 0 === i ? {} : i,
        o = t.toggleContainer,
        n = void 0 === o ? {} : o,
        a = t.toggleButton,
        $ = void 0 === a ? {} : a,
        s = e.side,
        g = void 0 === s ? 'right' : s,
        l = e.offset,
        h = void 0 === l ? dg : l;
      switch (g) {
        case 'left':
          return {
            chatContainer: ve({left: h, right: 'auto'}, r),
            toggleContainer: ve({left: h, right: 'auto'}, n),
            toggleButton: $,
          };
        case 'right':
        default:
          return {
            chatContainer: ve({right: h, left: 'auto'}, r),
            toggleContainer: ve({right: h, left: 'auto'}, n),
            toggleButton: $,
          };
      }
    },
    Uq = function (t) {
      return sa(
        Tq,
        null,
        sa(Sq, ve({}, t, {canToggle: !0}), function (e) {
          var i = e.sandbox,
            r = e.isLoaded,
            o = e.isActive,
            n = e.isOpen,
            a = e.isTransitioning,
            $ = e.customIconUrl,
            s = e.iframeUrl,
            g = e.query,
            l = e.shouldDisplayNotifications,
            h = e.setIframeRef,
            u = e.onToggleOpen,
            O = t.hideToggleButton,
            c = t.iconVariant,
            d = t.renderToggleButton,
            p = t.position,
            X = void 0 === p ? 'right' : p,
            f = t.styles,
            v = void 0 === f ? {} : f,
            m = eD(X),
            _ = fD(v, m),
            y = _.chatContainer,
            C = void 0 === y ? {} : y,
            T = _.toggleContainer,
            x = void 0 === T ? {} : T,
            F = _.toggleButton,
            E = void 0 === F ? {} : F;
          return sa(
            Q.d.Fragment,
            null,
            sa(
              ge.iframe,
              {
                ref: h,
                title: 'Papercups Chat Widget Container',
                className: 'Papercups-chatWindowContainer',
                sandbox: i,
                animate: o ? 'open' : 'closed',
                initial: 'closed',
                variants: {
                  closed: {opacity: 0, y: 4},
                  open: {opacity: 1, y: 0},
                },
                transition: {duration: 0.2, ease: 'easeIn'},
                src: s + '?' + g,
                style: o ? C : {pointerEvents: 'none', height: 0, minHeight: 0},
                sx: {
                  border: 'none',
                  bg: 'background',
                  variant:
                    !n && l
                      ? 'styles.WidgetContainer.notifications'
                      : 'styles.WidgetContainer',
                },
              },
              'Loading...'
            ),
            r &&
              !O &&
              sa(
                ge.div,
                {
                  className: 'Papercups-toggleButtonContainer',
                  initial: !1,
                  style: x,
                  animate: n ? 'open' : 'closed',
                  sx: {variant: 'styles.WidgetToggleContainer'},
                },
                d && 'function' == typeof d
                  ? d({isOpen: n, onToggleOpen: u, isDisabled: a})
                  : sa(yj, {
                      style: E,
                      isDisabled: a,
                      isOpen: n,
                      customIconUrl: $,
                      iconVariant: c,
                      toggle: u,
                    })
              )
          );
        })
      );
    };
  bi.default = Uq;
  Ja();
  var Vq =
    (we && we.__assign) ||
    function () {
      return (Vq =
        Object.assign ||
        function (e) {
          for (var t, a = 1, o = arguments.length; a < o; a++)
            for (var i in (t = arguments[a]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
    };
  !(function (e) {
    var t = function () {},
      a = (e.Papercups && e.Papercups.config) || {},
      o = document.createElement('div');
    (o.id = 'PapercupsChatWidget'), document.body.appendChild(o);
    (e.Papercups.init = function (e) {
      void 0 === e && (e = {});
      var o = Vq(Vq({}, a), e),
        i = o.accountId,
        n = o.title,
        r = o.subtitle,
        s = o.newMessagePlaceholder,
        l = o.emailInputPlaceholder,
        d = o.newMessagesNotificationText,
        p = o.primaryColor,
        c = o.greeting,
        g = o.awayMessage,
        u = o.customer,
        v = o.baseUrl,
        $ = o.iframeUrlOverride,
        h = o.customIconUrl,
        m = o.agentAvailableText,
        T = o.agentUnavailableText,
        f = o.showAgentAvailability,
        y = o.iconVariant,
        C = void 0 === y ? 'outlined' : y,
        w = o.hideToggleButton,
        O = void 0 !== w && w,
        b = o.requireEmailUpfront,
        z = void 0 !== b && b,
        M = o.defaultIsOpen,
        P = void 0 !== M && M,
        U = o.isOpenByDefault,
        I = void 0 !== U && U,
        _ = o.persistOpenState,
        x = void 0 !== _ && _,
        A = o.popUpInitialMessage,
        q = void 0 !== A && A,
        E = o.position,
        B = void 0 === E ? 'right' : E,
        R = o.styles,
        S = void 0 === R ? {} : R,
        W = o.onChatLoaded,
        D = void 0 === W ? t : W,
        j = o.onChatOpened,
        L = void 0 === j ? t : j,
        N = o.onChatClosed,
        V = void 0 === N ? t : N,
        k = o.onMessageSent,
        F = void 0 === k ? t : k,
        G = o.onMessageReceived,
        H = void 0 === G ? t : G;
      if (!i)
        throw new Error(
          'An account token is required to render the Papercups chat widget!'
        );
      var $NKHc$$interop$default = ya(Tr);
      $NKHc$$interop$default.d.render(
        Q.d.createElement(Uq, {
          accountId: i,
          title: n,
          subtitle: r,
          newMessagePlaceholder: s,
          emailInputPlaceholder: l,
          newMessagesNotificationText: d,
          primaryColor: p,
          greeting: c,
          awayMessage: g,
          customer: u,
          baseUrl: v,
          iframeUrlOverride: $,
          customIconUrl: h,
          agentAvailableText: m,
          agentUnavailableText: T,
          showAgentAvailability: f,
          requireEmailUpfront: z,
          defaultIsOpen: P,
          isOpenByDefault: I,
          persistOpenState: x,
          popUpInitialMessage: q,
          iconVariant: C,
          hideToggleButton: O,
          styles: S,
          position: B,
          onChatLoaded: D,
          onChatOpened: L,
          onChatClosed: V,
          onMessageSent: F,
          onMessageReceived: H,
        }),
        document.getElementById('PapercupsChatWidget')
      );
    }),
      e.Papercups.init();
  })(window);
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = we;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return we;
    });
  }
})();
