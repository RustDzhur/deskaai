parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    QVnC: [
      function (require, module, exports) {
        var define;
        var t,
          r = (function (t) {
            'use strict';
            var r,
              e = Object.prototype,
              n = e.hasOwnProperty,
              o = 'function' == typeof Symbol ? Symbol : {},
              i = o.iterator || '@@iterator',
              a = o.asyncIterator || '@@asyncIterator',
              c = o.toStringTag || '@@toStringTag';
            function u(t, r, e) {
              return (
                Object.defineProperty(t, r, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                t[r]
              );
            }
            try {
              u({}, '');
            } catch (P) {
              u = function (t, r, e) {
                return (t[r] = e);
              };
            }
            function h(t, r, e, n) {
              var o = r && r.prototype instanceof d ? r : d,
                i = Object.create(o.prototype),
                a = new G(n || []);
              return (
                (i._invoke = (function (t, r, e) {
                  var n = l;
                  return function (o, i) {
                    if (n === p)
                      throw new Error('Generator is already running');
                    if (n === y) {
                      if ('throw' === o) throw i;
                      return F();
                    }
                    for (e.method = o, e.arg = i; ; ) {
                      var a = e.delegate;
                      if (a) {
                        var c = j(a, e);
                        if (c) {
                          if (c === v) continue;
                          return c;
                        }
                      }
                      if ('next' === e.method) e.sent = e._sent = e.arg;
                      else if ('throw' === e.method) {
                        if (n === l) throw ((n = y), e.arg);
                        e.dispatchException(e.arg);
                      } else 'return' === e.method && e.abrupt('return', e.arg);
                      n = p;
                      var u = f(t, r, e);
                      if ('normal' === u.type) {
                        if (((n = e.done ? y : s), u.arg === v)) continue;
                        return {value: u.arg, done: e.done};
                      }
                      'throw' === u.type &&
                        ((n = y), (e.method = 'throw'), (e.arg = u.arg));
                    }
                  };
                })(t, e, a)),
                i
              );
            }
            function f(t, r, e) {
              try {
                return {type: 'normal', arg: t.call(r, e)};
              } catch (P) {
                return {type: 'throw', arg: P};
              }
            }
            t.wrap = h;
            var l = 'suspendedStart',
              s = 'suspendedYield',
              p = 'executing',
              y = 'completed',
              v = {};
            function d() {}
            function g() {}
            function m() {}
            var w = {};
            w[i] = function () {
              return this;
            };
            var L = Object.getPrototypeOf,
              x = L && L(L(N([])));
            x && x !== e && n.call(x, i) && (w = x);
            var b = (m.prototype = d.prototype = Object.create(w));
            function E(t) {
              ['next', 'throw', 'return'].forEach(function (r) {
                u(t, r, function (t) {
                  return this._invoke(r, t);
                });
              });
            }
            function _(t, r) {
              var e;
              this._invoke = function (o, i) {
                function a() {
                  return new r(function (e, a) {
                    !(function e(o, i, a, c) {
                      var u = f(t[o], t, i);
                      if ('throw' !== u.type) {
                        var h = u.arg,
                          l = h.value;
                        return l && 'object' == typeof l && n.call(l, '__await')
                          ? r.resolve(l.__await).then(
                              function (t) {
                                e('next', t, a, c);
                              },
                              function (t) {
                                e('throw', t, a, c);
                              }
                            )
                          : r.resolve(l).then(
                              function (t) {
                                (h.value = t), a(h);
                              },
                              function (t) {
                                return e('throw', t, a, c);
                              }
                            );
                      }
                      c(u.arg);
                    })(o, i, e, a);
                  });
                }
                return (e = e ? e.then(a, a) : a());
              };
            }
            function j(t, e) {
              var n = t.iterator[e.method];
              if (n === r) {
                if (((e.delegate = null), 'throw' === e.method)) {
                  if (
                    t.iterator.return &&
                    ((e.method = 'return'),
                    (e.arg = r),
                    j(t, e),
                    'throw' === e.method)
                  )
                    return v;
                  (e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a 'throw' method"
                    ));
                }
                return v;
              }
              var o = f(n, t.iterator, e.arg);
              if ('throw' === o.type)
                return (
                  (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), v
                );
              var i = o.arg;
              return i
                ? i.done
                  ? ((e[t.resultName] = i.value),
                    (e.next = t.nextLoc),
                    'return' !== e.method && ((e.method = 'next'), (e.arg = r)),
                    (e.delegate = null),
                    v)
                  : i
                : ((e.method = 'throw'),
                  (e.arg = new TypeError('iterator result is not an object')),
                  (e.delegate = null),
                  v);
            }
            function O(t) {
              var r = {tryLoc: t[0]};
              1 in t && (r.catchLoc = t[1]),
                2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
                this.tryEntries.push(r);
            }
            function k(t) {
              var r = t.completion || {};
              (r.type = 'normal'), delete r.arg, (t.completion = r);
            }
            function G(t) {
              (this.tryEntries = [{tryLoc: 'root'}]),
                t.forEach(O, this),
                this.reset(!0);
            }
            function N(t) {
              if (t) {
                var e = t[i];
                if (e) return e.call(t);
                if ('function' == typeof t.next) return t;
                if (!isNaN(t.length)) {
                  var o = -1,
                    a = function e() {
                      for (; ++o < t.length; )
                        if (n.call(t, o))
                          return (e.value = t[o]), (e.done = !1), e;
                      return (e.value = r), (e.done = !0), e;
                    };
                  return (a.next = a);
                }
              }
              return {next: F};
            }
            function F() {
              return {value: r, done: !0};
            }
            return (
              (g.prototype = b.constructor = m),
              (m.constructor = g),
              (g.displayName = u(m, c, 'GeneratorFunction')),
              (t.isGeneratorFunction = function (t) {
                var r = 'function' == typeof t && t.constructor;
                return (
                  !!r &&
                  (r === g || 'GeneratorFunction' === (r.displayName || r.name))
                );
              }),
              (t.mark = function (t) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, m)
                    : ((t.__proto__ = m), u(t, c, 'GeneratorFunction')),
                  (t.prototype = Object.create(b)),
                  t
                );
              }),
              (t.awrap = function (t) {
                return {__await: t};
              }),
              E(_.prototype),
              (_.prototype[a] = function () {
                return this;
              }),
              (t.AsyncIterator = _),
              (t.async = function (r, e, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new _(h(r, e, n, o), i);
                return t.isGeneratorFunction(e)
                  ? a
                  : a.next().then(function (t) {
                      return t.done ? t.value : a.next();
                    });
              }),
              E(b),
              u(b, c, 'Generator'),
              (b[i] = function () {
                return this;
              }),
              (b.toString = function () {
                return '[object Generator]';
              }),
              (t.keys = function (t) {
                var r = [];
                for (var e in t) r.push(e);
                return (
                  r.reverse(),
                  function e() {
                    for (; r.length; ) {
                      var n = r.pop();
                      if (n in t) return (e.value = n), (e.done = !1), e;
                    }
                    return (e.done = !0), e;
                  }
                );
              }),
              (t.values = N),
              (G.prototype = {
                constructor: G,
                reset: function (t) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = r),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = 'next'),
                    (this.arg = r),
                    this.tryEntries.forEach(k),
                    !t)
                  )
                    for (var e in this)
                      't' === e.charAt(0) &&
                        n.call(this, e) &&
                        !isNaN(+e.slice(1)) &&
                        (this[e] = r);
                },
                stop: function () {
                  this.done = !0;
                  var t = this.tryEntries[0].completion;
                  if ('throw' === t.type) throw t.arg;
                  return this.rval;
                },
                dispatchException: function (t) {
                  if (this.done) throw t;
                  var e = this;
                  function o(n, o) {
                    return (
                      (c.type = 'throw'),
                      (c.arg = t),
                      (e.next = n),
                      o && ((e.method = 'next'), (e.arg = r)),
                      !!o
                    );
                  }
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                      c = a.completion;
                    if ('root' === a.tryLoc) return o('end');
                    if (a.tryLoc <= this.prev) {
                      var u = n.call(a, 'catchLoc'),
                        h = n.call(a, 'finallyLoc');
                      if (u && h) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                      } else if (u) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      } else {
                        if (!h)
                          throw new Error(
                            'try statement without catch or finally'
                          );
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (t, r) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var o = this.tryEntries[e];
                    if (
                      o.tryLoc <= this.prev &&
                      n.call(o, 'finallyLoc') &&
                      this.prev < o.finallyLoc
                    ) {
                      var i = o;
                      break;
                    }
                  }
                  i &&
                    ('break' === t || 'continue' === t) &&
                    i.tryLoc <= r &&
                    r <= i.finallyLoc &&
                    (i = null);
                  var a = i ? i.completion : {};
                  return (
                    (a.type = t),
                    (a.arg = r),
                    i
                      ? ((this.method = 'next'), (this.next = i.finallyLoc), v)
                      : this.complete(a)
                  );
                },
                complete: function (t, r) {
                  if ('throw' === t.type) throw t.arg;
                  return (
                    'break' === t.type || 'continue' === t.type
                      ? (this.next = t.arg)
                      : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === t.type && r && (this.next = r),
                    v
                  );
                },
                finish: function (t) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.finallyLoc === t)
                      return this.complete(e.completion, e.afterLoc), k(e), v;
                  }
                },
                catch: function (t) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.tryLoc === t) {
                      var n = e.completion;
                      if ('throw' === n.type) {
                        var o = n.arg;
                        k(e);
                      }
                      return o;
                    }
                  }
                  throw new Error('illegal catch attempt');
                },
                delegateYield: function (t, e, n) {
                  return (
                    (this.delegate = {
                      iterator: N(t),
                      resultName: e,
                      nextLoc: n,
                    }),
                    'next' === this.method && (this.arg = r),
                    v
                  );
                },
              }),
              t
            );
          })('object' == typeof module ? module.exports : {});
        try {
          regeneratorRuntime = r;
        } catch (e) {
          Function('r', 'regeneratorRuntime = r')(r);
        }
      },
      {},
    ],
    XFqm: [
      function (require, module, exports) {
        var define;
        var e;
        !(function (t, n) {
          'object' == typeof exports && 'object' == typeof module
            ? (module.exports = n())
            : 'function' == typeof e && e.amd
            ? e([], n)
            : 'object' == typeof exports
            ? (exports.Phoenix = n())
            : (t.Phoenix = n());
        })(this, function () {
          return (function (e) {
            var t = {};
            function n(i) {
              if (t[i]) return t[i].exports;
              var o = (t[i] = {i: i, l: !1, exports: {}});
              return (
                e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
              );
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function (e, t, i) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, {enumerable: !0, get: i});
              }),
              (n.r = function (e) {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                  }),
                  Object.defineProperty(e, '__esModule', {value: !0});
              }),
              (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule)
                  return e;
                var i = Object.create(null);
                if (
                  (n.r(i),
                  Object.defineProperty(i, 'default', {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && 'string' != typeof e)
                )
                  for (var o in e)
                    n.d(
                      i,
                      o,
                      function (t) {
                        return e[t];
                      }.bind(null, o)
                    );
                return i;
              }),
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, 'a', t), t;
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.p = ''),
              n((n.s = 0))
            );
          })([
            function (e, t, n) {
              (function (t) {
                e.exports = t.Phoenix = n(2);
              }).call(this, n(1));
            },
            function (e, t) {
              var n;
              n = (function () {
                return this;
              })();
              try {
                n = n || new Function('return this')();
              } catch (e) {
                'object' == typeof window && (n = window);
              }
              e.exports = n;
            },
            function (e, t, n) {
              'use strict';
              function i(e) {
                return (
                  (function (e) {
                    if (Array.isArray(e)) return a(e);
                  })(e) ||
                  (function (e) {
                    if (
                      'undefined' != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(e) ||
                  s(e) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  })()
                );
              }
              function o(e) {
                return (o =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
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
              function r(e, t) {
                return (
                  (function (e) {
                    if (Array.isArray(e)) return e;
                  })(e) ||
                  (function (e, t) {
                    if (
                      'undefined' != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    ) {
                      var n = [],
                        i = !0,
                        o = !1,
                        r = void 0;
                      try {
                        for (
                          var s, a = e[Symbol.iterator]();
                          !(i = (s = a.next()).done) &&
                          (n.push(s.value), !t || n.length !== t);
                          i = !0
                        );
                      } catch (e) {
                        (o = !0), (r = e);
                      } finally {
                        try {
                          i || null == a.return || a.return();
                        } finally {
                          if (o) throw r;
                        }
                      }
                      return n;
                    }
                  })(e, t) ||
                  s(e, t) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  })()
                );
              }
              function s(e, t) {
                if (e) {
                  if ('string' == typeof e) return a(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                      ? Array.from(n)
                      : 'Arguments' === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? a(e, t)
                      : void 0
                  );
                }
              }
              function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i;
              }
              function c(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              }
              function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    'value' in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              }
              function h(e, t, n) {
                return t && u(e.prototype, t), n && u(e, n), e;
              }
              n.r(t),
                n.d(t, 'Channel', function () {
                  return L;
                }),
                n.d(t, 'Serializer', function () {
                  return x;
                }),
                n.d(t, 'Socket', function () {
                  return O;
                }),
                n.d(t, 'LongPoll', function () {
                  return P;
                }),
                n.d(t, 'Ajax', function () {
                  return _;
                }),
                n.d(t, 'Presence', function () {
                  return H;
                });
              var l = 'undefined' != typeof self ? self : null,
                f = 'undefined' != typeof window ? window : null,
                d = l || f || void 0,
                p = 0,
                v = 'closed',
                y = 'errored',
                m = 'joined',
                g = 'joining',
                k = 'leaving',
                b = 'phx_close',
                j = 'phx_error',
                C = 'phx_join',
                E = 'phx_reply',
                R = 'phx_leave',
                T = [b, j, C, E, R],
                S = 'websocket',
                w = function (e) {
                  return 'function' == typeof e
                    ? e
                    : function () {
                        return e;
                      };
                },
                A = (function () {
                  function e(t, n, i, o) {
                    c(this, e),
                      (this.channel = t),
                      (this.event = n),
                      (this.payload =
                        i ||
                        function () {
                          return {};
                        }),
                      (this.receivedResp = null),
                      (this.timeout = o),
                      (this.timeoutTimer = null),
                      (this.recHooks = []),
                      (this.sent = !1);
                  }
                  return (
                    h(e, [
                      {
                        key: 'resend',
                        value: function (e) {
                          (this.timeout = e), this.reset(), this.send();
                        },
                      },
                      {
                        key: 'send',
                        value: function () {
                          this.hasReceived('timeout') ||
                            (this.startTimeout(),
                            (this.sent = !0),
                            this.channel.socket.push({
                              topic: this.channel.topic,
                              event: this.event,
                              payload: this.payload(),
                              ref: this.ref,
                              join_ref: this.channel.joinRef(),
                            }));
                        },
                      },
                      {
                        key: 'receive',
                        value: function (e, t) {
                          return (
                            this.hasReceived(e) &&
                              t(this.receivedResp.response),
                            this.recHooks.push({status: e, callback: t}),
                            this
                          );
                        },
                      },
                      {
                        key: 'reset',
                        value: function () {
                          this.cancelRefEvent(),
                            (this.ref = null),
                            (this.refEvent = null),
                            (this.receivedResp = null),
                            (this.sent = !1);
                        },
                      },
                      {
                        key: 'matchReceive',
                        value: function (e) {
                          var t = e.status,
                            n = e.response;
                          e.ref,
                            this.recHooks
                              .filter(function (e) {
                                return e.status === t;
                              })
                              .forEach(function (e) {
                                return e.callback(n);
                              });
                        },
                      },
                      {
                        key: 'cancelRefEvent',
                        value: function () {
                          this.refEvent && this.channel.off(this.refEvent);
                        },
                      },
                      {
                        key: 'cancelTimeout',
                        value: function () {
                          clearTimeout(this.timeoutTimer),
                            (this.timeoutTimer = null);
                        },
                      },
                      {
                        key: 'startTimeout',
                        value: function () {
                          var e = this;
                          this.timeoutTimer && this.cancelTimeout(),
                            (this.ref = this.channel.socket.makeRef()),
                            (this.refEvent = this.channel.replyEventName(
                              this.ref
                            )),
                            this.channel.on(this.refEvent, function (t) {
                              e.cancelRefEvent(),
                                e.cancelTimeout(),
                                (e.receivedResp = t),
                                e.matchReceive(t);
                            }),
                            (this.timeoutTimer = setTimeout(function () {
                              e.trigger('timeout', {});
                            }, this.timeout));
                        },
                      },
                      {
                        key: 'hasReceived',
                        value: function (e) {
                          return (
                            this.receivedResp && this.receivedResp.status === e
                          );
                        },
                      },
                      {
                        key: 'trigger',
                        value: function (e, t) {
                          this.channel.trigger(this.refEvent, {
                            status: e,
                            response: t,
                          });
                        },
                      },
                    ]),
                    e
                  );
                })(),
                L = (function () {
                  function e(t, n, i) {
                    var o = this;
                    c(this, e),
                      (this.state = v),
                      (this.topic = t),
                      (this.params = w(n || {})),
                      (this.socket = i),
                      (this.bindings = []),
                      (this.bindingRef = 0),
                      (this.timeout = this.socket.timeout),
                      (this.joinedOnce = !1),
                      (this.joinPush = new A(
                        this,
                        C,
                        this.params,
                        this.timeout
                      )),
                      (this.pushBuffer = []),
                      (this.stateChangeRefs = []),
                      (this.rejoinTimer = new U(function () {
                        o.socket.isConnected() && o.rejoin();
                      }, this.socket.rejoinAfterMs)),
                      this.stateChangeRefs.push(
                        this.socket.onError(function () {
                          return o.rejoinTimer.reset();
                        })
                      ),
                      this.stateChangeRefs.push(
                        this.socket.onOpen(function () {
                          o.rejoinTimer.reset(), o.isErrored() && o.rejoin();
                        })
                      ),
                      this.joinPush.receive('ok', function () {
                        (o.state = m),
                          o.rejoinTimer.reset(),
                          o.pushBuffer.forEach(function (e) {
                            return e.send();
                          }),
                          (o.pushBuffer = []);
                      }),
                      this.joinPush.receive('error', function () {
                        (o.state = y),
                          o.socket.isConnected() &&
                            o.rejoinTimer.scheduleTimeout();
                      }),
                      this.onClose(function () {
                        o.rejoinTimer.reset(),
                          o.socket.hasLogger() &&
                            o.socket.log(
                              'channel',
                              'close '.concat(o.topic, ' ').concat(o.joinRef())
                            ),
                          (o.state = v),
                          o.socket.remove(o);
                      }),
                      this.onError(function (e) {
                        o.socket.hasLogger() &&
                          o.socket.log('channel', 'error '.concat(o.topic), e),
                          o.isJoining() && o.joinPush.reset(),
                          (o.state = y),
                          o.socket.isConnected() &&
                            o.rejoinTimer.scheduleTimeout();
                      }),
                      this.joinPush.receive('timeout', function () {
                        o.socket.hasLogger() &&
                          o.socket.log(
                            'channel',
                            'timeout '
                              .concat(o.topic, ' (')
                              .concat(o.joinRef(), ')'),
                            o.joinPush.timeout
                          ),
                          new A(o, R, w({}), o.timeout).send(),
                          (o.state = y),
                          o.joinPush.reset(),
                          o.socket.isConnected() &&
                            o.rejoinTimer.scheduleTimeout();
                      }),
                      this.on(E, function (e, t) {
                        o.trigger(o.replyEventName(t), e);
                      });
                  }
                  return (
                    h(e, [
                      {
                        key: 'join',
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : this.timeout;
                          if (this.joinedOnce)
                            throw new Error(
                              "tried to join multiple times. 'join' can only be called a single time per channel instance"
                            );
                          return (
                            (this.timeout = e),
                            (this.joinedOnce = !0),
                            this.rejoin(),
                            this.joinPush
                          );
                        },
                      },
                      {
                        key: 'onClose',
                        value: function (e) {
                          this.on(b, e);
                        },
                      },
                      {
                        key: 'onError',
                        value: function (e) {
                          return this.on(j, function (t) {
                            return e(t);
                          });
                        },
                      },
                      {
                        key: 'on',
                        value: function (e, t) {
                          var n = this.bindingRef++;
                          return (
                            this.bindings.push({event: e, ref: n, callback: t}),
                            n
                          );
                        },
                      },
                      {
                        key: 'off',
                        value: function (e, t) {
                          this.bindings = this.bindings.filter(function (n) {
                            return !(
                              n.event === e &&
                              (void 0 === t || t === n.ref)
                            );
                          });
                        },
                      },
                      {
                        key: 'canPush',
                        value: function () {
                          return this.socket.isConnected() && this.isJoined();
                        },
                      },
                      {
                        key: 'push',
                        value: function (e, t) {
                          var n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : this.timeout;
                          if (((t = t || {}), !this.joinedOnce))
                            throw new Error(
                              "tried to push '"
                                .concat(e, "' to '")
                                .concat(
                                  this.topic,
                                  "' before joining. Use channel.join() before pushing events"
                                )
                            );
                          var i = new A(
                            this,
                            e,
                            function () {
                              return t;
                            },
                            n
                          );
                          return (
                            this.canPush()
                              ? i.send()
                              : (i.startTimeout(), this.pushBuffer.push(i)),
                            i
                          );
                        },
                      },
                      {
                        key: 'leave',
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : this.timeout;
                          this.rejoinTimer.reset(),
                            this.joinPush.cancelTimeout(),
                            (this.state = k);
                          var n = function () {
                              e.socket.hasLogger() &&
                                e.socket.log(
                                  'channel',
                                  'leave '.concat(e.topic)
                                ),
                                e.trigger(b, 'leave');
                            },
                            i = new A(this, R, w({}), t);
                          return (
                            i
                              .receive('ok', function () {
                                return n();
                              })
                              .receive('timeout', function () {
                                return n();
                              }),
                            i.send(),
                            this.canPush() || i.trigger('ok', {}),
                            i
                          );
                        },
                      },
                      {
                        key: 'onMessage',
                        value: function (e, t, n) {
                          return t;
                        },
                      },
                      {
                        key: 'isLifecycleEvent',
                        value: function (e) {
                          return T.indexOf(e) >= 0;
                        },
                      },
                      {
                        key: 'isMember',
                        value: function (e, t, n, i) {
                          return !(
                            this.topic !== e ||
                            (i &&
                              i !== this.joinRef() &&
                              this.isLifecycleEvent(t) &&
                              (this.socket.hasLogger() &&
                                this.socket.log(
                                  'channel',
                                  'dropping outdated message',
                                  {topic: e, event: t, payload: n, joinRef: i}
                                ),
                              1))
                          );
                        },
                      },
                      {
                        key: 'joinRef',
                        value: function () {
                          return this.joinPush.ref;
                        },
                      },
                      {
                        key: 'rejoin',
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : this.timeout;
                          this.isLeaving() ||
                            (this.socket.leaveOpenTopic(this.topic),
                            (this.state = g),
                            this.joinPush.resend(e));
                        },
                      },
                      {
                        key: 'trigger',
                        value: function (e, t, n, i) {
                          var o = this.onMessage(e, t, n, i);
                          if (t && !o)
                            throw new Error(
                              'channel onMessage callbacks must return the payload, modified or unmodified'
                            );
                          for (
                            var r = this.bindings.filter(function (t) {
                                return t.event === e;
                              }),
                              s = 0;
                            s < r.length;
                            s++
                          )
                            r[s].callback(o, n, i || this.joinRef());
                        },
                      },
                      {
                        key: 'replyEventName',
                        value: function (e) {
                          return 'chan_reply_'.concat(e);
                        },
                      },
                      {
                        key: 'isClosed',
                        value: function () {
                          return this.state === v;
                        },
                      },
                      {
                        key: 'isErrored',
                        value: function () {
                          return this.state === y;
                        },
                      },
                      {
                        key: 'isJoined',
                        value: function () {
                          return this.state === m;
                        },
                      },
                      {
                        key: 'isJoining',
                        value: function () {
                          return this.state === g;
                        },
                      },
                      {
                        key: 'isLeaving',
                        value: function () {
                          return this.state === k;
                        },
                      },
                    ]),
                    e
                  );
                })(),
                x = {
                  HEADER_LENGTH: 1,
                  META_LENGTH: 4,
                  KINDS: {push: 0, reply: 1, broadcast: 2},
                  encode: function (e, t) {
                    if (e.payload.constructor === ArrayBuffer)
                      return t(this.binaryEncode(e));
                    var n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
                    return t(JSON.stringify(n));
                  },
                  decode: function (e, t) {
                    if (e.constructor === ArrayBuffer)
                      return t(this.binaryDecode(e));
                    var n = r(JSON.parse(e), 5);
                    return t({
                      join_ref: n[0],
                      ref: n[1],
                      topic: n[2],
                      event: n[3],
                      payload: n[4],
                    });
                  },
                  binaryEncode: function (e) {
                    var t = e.join_ref,
                      n = e.ref,
                      i = e.event,
                      o = e.topic,
                      r = e.payload,
                      s =
                        this.META_LENGTH +
                        t.length +
                        n.length +
                        o.length +
                        i.length,
                      a = new ArrayBuffer(this.HEADER_LENGTH + s),
                      c = new DataView(a),
                      u = 0;
                    c.setUint8(u++, this.KINDS.push),
                      c.setUint8(u++, t.length),
                      c.setUint8(u++, n.length),
                      c.setUint8(u++, o.length),
                      c.setUint8(u++, i.length),
                      Array.from(t, function (e) {
                        return c.setUint8(u++, e.charCodeAt(0));
                      }),
                      Array.from(n, function (e) {
                        return c.setUint8(u++, e.charCodeAt(0));
                      }),
                      Array.from(o, function (e) {
                        return c.setUint8(u++, e.charCodeAt(0));
                      }),
                      Array.from(i, function (e) {
                        return c.setUint8(u++, e.charCodeAt(0));
                      });
                    var h = new Uint8Array(a.byteLength + r.byteLength);
                    return (
                      h.set(new Uint8Array(a), 0),
                      h.set(new Uint8Array(r), a.byteLength),
                      h.buffer
                    );
                  },
                  binaryDecode: function (e) {
                    var t = new DataView(e),
                      n = t.getUint8(0),
                      i = new TextDecoder();
                    switch (n) {
                      case this.KINDS.push:
                        return this.decodePush(e, t, i);
                      case this.KINDS.reply:
                        return this.decodeReply(e, t, i);
                      case this.KINDS.broadcast:
                        return this.decodeBroadcast(e, t, i);
                    }
                  },
                  decodePush: function (e, t, n) {
                    var i = t.getUint8(1),
                      o = t.getUint8(2),
                      r = t.getUint8(3),
                      s = this.HEADER_LENGTH + this.META_LENGTH - 1,
                      a = n.decode(e.slice(s, s + i));
                    s += i;
                    var c = n.decode(e.slice(s, s + o));
                    s += o;
                    var u = n.decode(e.slice(s, s + r));
                    return (
                      (s += r),
                      {
                        join_ref: a,
                        ref: null,
                        topic: c,
                        event: u,
                        payload: e.slice(s, e.byteLength),
                      }
                    );
                  },
                  decodeReply: function (e, t, n) {
                    var i = t.getUint8(1),
                      o = t.getUint8(2),
                      r = t.getUint8(3),
                      s = t.getUint8(4),
                      a = this.HEADER_LENGTH + this.META_LENGTH,
                      c = n.decode(e.slice(a, a + i));
                    a += i;
                    var u = n.decode(e.slice(a, a + o));
                    a += o;
                    var h = n.decode(e.slice(a, a + r));
                    a += r;
                    var l = n.decode(e.slice(a, a + s));
                    a += s;
                    var f = e.slice(a, e.byteLength);
                    return {
                      join_ref: c,
                      ref: u,
                      topic: h,
                      event: E,
                      payload: {status: l, response: f},
                    };
                  },
                  decodeBroadcast: function (e, t, n) {
                    var i = t.getUint8(1),
                      o = t.getUint8(2),
                      r = this.HEADER_LENGTH + 2,
                      s = n.decode(e.slice(r, r + i));
                    r += i;
                    var a = n.decode(e.slice(r, r + o));
                    return (
                      (r += o),
                      {
                        join_ref: null,
                        ref: null,
                        topic: s,
                        event: a,
                        payload: e.slice(r, e.byteLength),
                      }
                    );
                  },
                },
                O = (function () {
                  function e(t) {
                    var n = this,
                      i =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    c(this, e),
                      (this.stateChangeCallbacks = {
                        open: [],
                        close: [],
                        error: [],
                        message: [],
                      }),
                      (this.channels = []),
                      (this.sendBuffer = []),
                      (this.ref = 0),
                      (this.timeout = i.timeout || 1e4),
                      (this.transport = i.transport || d.WebSocket || P),
                      (this.defaultEncoder = x.encode.bind(x)),
                      (this.defaultDecoder = x.decode.bind(x)),
                      (this.closeWasClean = !1),
                      (this.unloaded = !1),
                      (this.binaryType = i.binaryType || 'arraybuffer'),
                      this.transport !== P
                        ? ((this.encode = i.encode || this.defaultEncoder),
                          (this.decode = i.decode || this.defaultDecoder))
                        : ((this.encode = this.defaultEncoder),
                          (this.decode = this.defaultDecoder)),
                      f &&
                        f.addEventListener &&
                        f.addEventListener('unload', function (e) {
                          n.conn &&
                            ((n.unloaded = !0), n.abnormalClose('unloaded'));
                        }),
                      (this.heartbeatIntervalMs = i.heartbeatIntervalMs || 3e4),
                      (this.rejoinAfterMs = function (e) {
                        return i.rejoinAfterMs
                          ? i.rejoinAfterMs(e)
                          : [1e3, 2e3, 5e3][e - 1] || 1e4;
                      }),
                      (this.reconnectAfterMs = function (e) {
                        return n.unloaded
                          ? 100
                          : i.reconnectAfterMs
                          ? i.reconnectAfterMs(e)
                          : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][
                              e - 1
                            ] || 5e3;
                      }),
                      (this.logger = i.logger || null),
                      (this.longpollerTimeout = i.longpollerTimeout || 2e4),
                      (this.params = w(i.params || {})),
                      (this.endPoint = ''.concat(t, '/').concat(S)),
                      (this.vsn = i.vsn || '2.0.0'),
                      (this.heartbeatTimer = null),
                      (this.pendingHeartbeatRef = null),
                      (this.reconnectTimer = new U(function () {
                        n.teardown(function () {
                          return n.connect();
                        });
                      }, this.reconnectAfterMs));
                  }
                  return (
                    h(e, [
                      {
                        key: 'protocol',
                        value: function () {
                          return location.protocol.match(/^https/)
                            ? 'wss'
                            : 'ws';
                        },
                      },
                      {
                        key: 'endPointURL',
                        value: function () {
                          var e = _.appendParams(
                            _.appendParams(this.endPoint, this.params()),
                            {vsn: this.vsn}
                          );
                          return '/' !== e.charAt(0)
                            ? e
                            : '/' === e.charAt(1)
                            ? ''.concat(this.protocol(), ':').concat(e)
                            : ''
                                .concat(this.protocol(), '://')
                                .concat(location.host)
                                .concat(e);
                        },
                      },
                      {
                        key: 'disconnect',
                        value: function (e, t, n) {
                          (this.closeWasClean = !0),
                            this.reconnectTimer.reset(),
                            this.teardown(e, t, n);
                        },
                      },
                      {
                        key: 'connect',
                        value: function (e) {
                          var t = this;
                          e &&
                            (console &&
                              console.log(
                                'passing params to connect is deprecated. Instead pass :params to the Socket constructor'
                              ),
                            (this.params = w(e))),
                            this.conn ||
                              ((this.closeWasClean = !1),
                              (this.conn = new this.transport(
                                this.endPointURL()
                              )),
                              (this.conn.binaryType = this.binaryType),
                              (this.conn.timeout = this.longpollerTimeout),
                              (this.conn.onopen = function () {
                                return t.onConnOpen();
                              }),
                              (this.conn.onerror = function (e) {
                                return t.onConnError(e);
                              }),
                              (this.conn.onmessage = function (e) {
                                return t.onConnMessage(e);
                              }),
                              (this.conn.onclose = function (e) {
                                return t.onConnClose(e);
                              }));
                        },
                      },
                      {
                        key: 'log',
                        value: function (e, t, n) {
                          this.logger(e, t, n);
                        },
                      },
                      {
                        key: 'hasLogger',
                        value: function () {
                          return null !== this.logger;
                        },
                      },
                      {
                        key: 'onOpen',
                        value: function (e) {
                          var t = this.makeRef();
                          return this.stateChangeCallbacks.open.push([t, e]), t;
                        },
                      },
                      {
                        key: 'onClose',
                        value: function (e) {
                          var t = this.makeRef();
                          return (
                            this.stateChangeCallbacks.close.push([t, e]), t
                          );
                        },
                      },
                      {
                        key: 'onError',
                        value: function (e) {
                          var t = this.makeRef();
                          return (
                            this.stateChangeCallbacks.error.push([t, e]), t
                          );
                        },
                      },
                      {
                        key: 'onMessage',
                        value: function (e) {
                          var t = this.makeRef();
                          return (
                            this.stateChangeCallbacks.message.push([t, e]), t
                          );
                        },
                      },
                      {
                        key: 'onConnOpen',
                        value: function () {
                          this.hasLogger() &&
                            this.log(
                              'transport',
                              'connected to '.concat(this.endPointURL())
                            ),
                            (this.unloaded = !1),
                            (this.closeWasClean = !1),
                            this.flushSendBuffer(),
                            this.reconnectTimer.reset(),
                            this.resetHeartbeat(),
                            this.stateChangeCallbacks.open.forEach(function (
                              e
                            ) {
                              return (0, r(e, 2)[1])();
                            });
                        },
                      },
                      {
                        key: 'resetHeartbeat',
                        value: function () {
                          var e = this;
                          (this.conn && this.conn.skipHeartbeat) ||
                            ((this.pendingHeartbeatRef = null),
                            clearInterval(this.heartbeatTimer),
                            (this.heartbeatTimer = setInterval(function () {
                              return e.sendHeartbeat();
                            }, this.heartbeatIntervalMs)));
                        },
                      },
                      {
                        key: 'teardown',
                        value: function (e, t, n) {
                          var i = this;
                          if (!this.conn) return e && e();
                          this.waitForBufferDone(function () {
                            i.conn &&
                              (t ? i.conn.close(t, n || '') : i.conn.close()),
                              i.waitForSocketClosed(function () {
                                i.conn &&
                                  ((i.conn.onclose = function () {}),
                                  (i.conn = null)),
                                  e && e();
                              });
                          });
                        },
                      },
                      {
                        key: 'waitForBufferDone',
                        value: function (e) {
                          var t = this,
                            n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 1;
                          5 !== n && this.conn && this.conn.bufferedAmount
                            ? setTimeout(function () {
                                t.waitForBufferDone(e, n + 1);
                              }, 150 * n)
                            : e();
                        },
                      },
                      {
                        key: 'waitForSocketClosed',
                        value: function (e) {
                          var t = this,
                            n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 1;
                          5 !== n && this.conn && 3 !== this.conn.readyState
                            ? setTimeout(function () {
                                t.waitForSocketClosed(e, n + 1);
                              }, 150 * n)
                            : e();
                        },
                      },
                      {
                        key: 'onConnClose',
                        value: function (e) {
                          this.hasLogger() && this.log('transport', 'close', e),
                            this.triggerChanError(),
                            clearInterval(this.heartbeatTimer),
                            this.closeWasClean ||
                              this.reconnectTimer.scheduleTimeout(),
                            this.stateChangeCallbacks.close.forEach(function (
                              t
                            ) {
                              return (0, r(t, 2)[1])(e);
                            });
                        },
                      },
                      {
                        key: 'onConnError',
                        value: function (e) {
                          this.hasLogger() && this.log('transport', e),
                            this.triggerChanError(),
                            this.stateChangeCallbacks.error.forEach(function (
                              t
                            ) {
                              return (0, r(t, 2)[1])(e);
                            });
                        },
                      },
                      {
                        key: 'triggerChanError',
                        value: function () {
                          this.channels.forEach(function (e) {
                            e.isErrored() ||
                              e.isLeaving() ||
                              e.isClosed() ||
                              e.trigger(j);
                          });
                        },
                      },
                      {
                        key: 'connectionState',
                        value: function () {
                          switch (this.conn && this.conn.readyState) {
                            case p:
                              return 'connecting';
                            case 1:
                              return 'open';
                            case 2:
                              return 'closing';
                            default:
                              return 'closed';
                          }
                        },
                      },
                      {
                        key: 'isConnected',
                        value: function () {
                          return 'open' === this.connectionState();
                        },
                      },
                      {
                        key: 'remove',
                        value: function (e) {
                          this.off(e.stateChangeRefs),
                            (this.channels = this.channels.filter(function (t) {
                              return t.joinRef() !== e.joinRef();
                            }));
                        },
                      },
                      {
                        key: 'off',
                        value: function (e) {
                          for (var t in this.stateChangeCallbacks)
                            this.stateChangeCallbacks[t] =
                              this.stateChangeCallbacks[t].filter(function (t) {
                                var n = r(t, 1)[0];
                                return -1 === e.indexOf(n);
                              });
                        },
                      },
                      {
                        key: 'channel',
                        value: function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            n = new L(e, t, this);
                          return this.channels.push(n), n;
                        },
                      },
                      {
                        key: 'push',
                        value: function (e) {
                          var t = this;
                          if (this.hasLogger()) {
                            var n = e.topic,
                              i = e.event,
                              o = e.payload,
                              r = e.ref,
                              s = e.join_ref;
                            this.log(
                              'push',
                              ''
                                .concat(n, ' ')
                                .concat(i, ' (')
                                .concat(s, ', ')
                                .concat(r, ')'),
                              o
                            );
                          }
                          this.isConnected()
                            ? this.encode(e, function (e) {
                                return t.conn.send(e);
                              })
                            : this.sendBuffer.push(function () {
                                return t.encode(e, function (e) {
                                  return t.conn.send(e);
                                });
                              });
                        },
                      },
                      {
                        key: 'makeRef',
                        value: function () {
                          var e = this.ref + 1;
                          return (
                            e === this.ref ? (this.ref = 0) : (this.ref = e),
                            this.ref.toString()
                          );
                        },
                      },
                      {
                        key: 'sendHeartbeat',
                        value: function () {
                          if (this.isConnected()) {
                            if (this.pendingHeartbeatRef)
                              return (
                                (this.pendingHeartbeatRef = null),
                                this.hasLogger() &&
                                  this.log(
                                    'transport',
                                    'heartbeat timeout. Attempting to re-establish connection'
                                  ),
                                void this.abnormalClose('heartbeat timeout')
                              );
                            (this.pendingHeartbeatRef = this.makeRef()),
                              this.push({
                                topic: 'phoenix',
                                event: 'heartbeat',
                                payload: {},
                                ref: this.pendingHeartbeatRef,
                              });
                          }
                        },
                      },
                      {
                        key: 'abnormalClose',
                        value: function (e) {
                          (this.closeWasClean = !1),
                            1 === this.conn.readyState &&
                              this.conn.close(1e3, e);
                        },
                      },
                      {
                        key: 'flushSendBuffer',
                        value: function () {
                          this.isConnected() &&
                            this.sendBuffer.length > 0 &&
                            (this.sendBuffer.forEach(function (e) {
                              return e();
                            }),
                            (this.sendBuffer = []));
                        },
                      },
                      {
                        key: 'onConnMessage',
                        value: function (e) {
                          var t = this;
                          this.decode(e.data, function (e) {
                            var n = e.topic,
                              i = e.event,
                              o = e.payload,
                              s = e.ref,
                              a = e.join_ref;
                            s &&
                              s === t.pendingHeartbeatRef &&
                              (t.pendingHeartbeatRef = null),
                              t.hasLogger() &&
                                t.log(
                                  'receive',
                                  ''
                                    .concat(o.status || '', ' ')
                                    .concat(n, ' ')
                                    .concat(i, ' ')
                                    .concat((s && '(' + s + ')') || ''),
                                  o
                                );
                            for (var c = 0; c < t.channels.length; c++) {
                              var u = t.channels[c];
                              u.isMember(n, i, o, a) && u.trigger(i, o, s, a);
                            }
                            for (
                              var h = 0;
                              h < t.stateChangeCallbacks.message.length;
                              h++
                            )
                              (0, r(t.stateChangeCallbacks.message[h], 2)[1])(
                                e
                              );
                          });
                        },
                      },
                      {
                        key: 'leaveOpenTopic',
                        value: function (e) {
                          var t = this.channels.find(function (t) {
                            return (
                              t.topic === e && (t.isJoined() || t.isJoining())
                            );
                          });
                          t &&
                            (this.hasLogger() &&
                              this.log(
                                'transport',
                                'leaving duplicate topic "'.concat(e, '"')
                              ),
                            t.leave());
                        },
                      },
                    ]),
                    e
                  );
                })(),
                P = (function () {
                  function e(t) {
                    c(this, e),
                      (this.endPoint = null),
                      (this.token = null),
                      (this.skipHeartbeat = !0),
                      (this.onopen = function () {}),
                      (this.onerror = function () {}),
                      (this.onmessage = function () {}),
                      (this.onclose = function () {}),
                      (this.pollEndpoint = this.normalizeEndpoint(t)),
                      (this.readyState = p),
                      this.poll();
                  }
                  return (
                    h(e, [
                      {
                        key: 'normalizeEndpoint',
                        value: function (e) {
                          return e
                            .replace('ws://', 'http://')
                            .replace('wss://', 'https://')
                            .replace(new RegExp('(.*)/' + S), '$1/longpoll');
                        },
                      },
                      {
                        key: 'endpointURL',
                        value: function () {
                          return _.appendParams(this.pollEndpoint, {
                            token: this.token,
                          });
                        },
                      },
                      {
                        key: 'closeAndRetry',
                        value: function () {
                          this.close(), (this.readyState = p);
                        },
                      },
                      {
                        key: 'ontimeout',
                        value: function () {
                          this.onerror('timeout'), this.closeAndRetry();
                        },
                      },
                      {
                        key: 'poll',
                        value: function () {
                          var e = this;
                          (1 !== this.readyState && this.readyState !== p) ||
                            _.request(
                              'GET',
                              this.endpointURL(),
                              'application/json',
                              null,
                              this.timeout,
                              this.ontimeout.bind(this),
                              function (t) {
                                if (t) {
                                  var n = t.status,
                                    i = t.token,
                                    o = t.messages;
                                  e.token = i;
                                } else n = 0;
                                switch (n) {
                                  case 200:
                                    o.forEach(function (t) {
                                      return e.onmessage({data: t});
                                    }),
                                      e.poll();
                                    break;
                                  case 204:
                                    e.poll();
                                    break;
                                  case 410:
                                    (e.readyState = 1), e.onopen(), e.poll();
                                    break;
                                  case 403:
                                    e.onerror(), e.close();
                                    break;
                                  case 0:
                                  case 500:
                                    e.onerror(), e.closeAndRetry();
                                    break;
                                  default:
                                    throw new Error(
                                      'unhandled poll status '.concat(n)
                                    );
                                }
                              }
                            );
                        },
                      },
                      {
                        key: 'send',
                        value: function (e) {
                          var t = this;
                          _.request(
                            'POST',
                            this.endpointURL(),
                            'application/json',
                            e,
                            this.timeout,
                            this.onerror.bind(this, 'timeout'),
                            function (e) {
                              (e && 200 === e.status) ||
                                (t.onerror(e && e.status), t.closeAndRetry());
                            }
                          );
                        },
                      },
                      {
                        key: 'close',
                        value: function (e, t) {
                          (this.readyState = 3), this.onclose();
                        },
                      },
                    ]),
                    e
                  );
                })(),
                _ = (function () {
                  function e() {
                    c(this, e);
                  }
                  return (
                    h(e, null, [
                      {
                        key: 'request',
                        value: function (e, t, n, i, o, r, s) {
                          if (d.XDomainRequest) {
                            var a = new XDomainRequest();
                            this.xdomainRequest(a, e, t, i, o, r, s);
                          } else {
                            var c = new d.XMLHttpRequest();
                            this.xhrRequest(c, e, t, n, i, o, r, s);
                          }
                        },
                      },
                      {
                        key: 'xdomainRequest',
                        value: function (e, t, n, i, o, r, s) {
                          var a = this;
                          (e.timeout = o),
                            e.open(t, n),
                            (e.onload = function () {
                              var t = a.parseJSON(e.responseText);
                              s && s(t);
                            }),
                            r && (e.ontimeout = r),
                            (e.onprogress = function () {}),
                            e.send(i);
                        },
                      },
                      {
                        key: 'xhrRequest',
                        value: function (e, t, n, i, o, r, s, a) {
                          var c = this;
                          e.open(t, n, !0),
                            (e.timeout = r),
                            e.setRequestHeader('Content-Type', i),
                            (e.onerror = function () {
                              a && a(null);
                            }),
                            (e.onreadystatechange = function () {
                              if (e.readyState === c.states.complete && a) {
                                var t = c.parseJSON(e.responseText);
                                a(t);
                              }
                            }),
                            s && (e.ontimeout = s),
                            e.send(o);
                        },
                      },
                      {
                        key: 'parseJSON',
                        value: function (e) {
                          if (!e || '' === e) return null;
                          try {
                            return JSON.parse(e);
                          } catch (t) {
                            return (
                              console &&
                                console.log('failed to parse JSON response', e),
                              null
                            );
                          }
                        },
                      },
                      {
                        key: 'serialize',
                        value: function (e, t) {
                          var n = [];
                          for (var i in e)
                            if (e.hasOwnProperty(i)) {
                              var r = t ? ''.concat(t, '[').concat(i, ']') : i,
                                s = e[i];
                              'object' === o(s)
                                ? n.push(this.serialize(s, r))
                                : n.push(
                                    encodeURIComponent(r) +
                                      '=' +
                                      encodeURIComponent(s)
                                  );
                            }
                          return n.join('&');
                        },
                      },
                      {
                        key: 'appendParams',
                        value: function (e, t) {
                          if (0 === Object.keys(t).length) return e;
                          var n = e.match(/\?/) ? '&' : '?';
                          return ''
                            .concat(e)
                            .concat(n)
                            .concat(this.serialize(t));
                        },
                      },
                    ]),
                    e
                  );
                })();
              _.states = {complete: 4};
              var H = (function () {
                  function e(t) {
                    var n = this,
                      i =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    c(this, e);
                    var o = i.events || {
                      state: 'presence_state',
                      diff: 'presence_diff',
                    };
                    (this.state = {}),
                      (this.pendingDiffs = []),
                      (this.channel = t),
                      (this.joinRef = null),
                      (this.caller = {
                        onJoin: function () {},
                        onLeave: function () {},
                        onSync: function () {},
                      }),
                      this.channel.on(o.state, function (t) {
                        var i = n.caller,
                          o = i.onJoin,
                          r = i.onLeave,
                          s = i.onSync;
                        (n.joinRef = n.channel.joinRef()),
                          (n.state = e.syncState(n.state, t, o, r)),
                          n.pendingDiffs.forEach(function (t) {
                            n.state = e.syncDiff(n.state, t, o, r);
                          }),
                          (n.pendingDiffs = []),
                          s();
                      }),
                      this.channel.on(o.diff, function (t) {
                        var i = n.caller,
                          o = i.onJoin,
                          r = i.onLeave,
                          s = i.onSync;
                        n.inPendingSyncState()
                          ? n.pendingDiffs.push(t)
                          : ((n.state = e.syncDiff(n.state, t, o, r)), s());
                      });
                  }
                  return (
                    h(
                      e,
                      [
                        {
                          key: 'onJoin',
                          value: function (e) {
                            this.caller.onJoin = e;
                          },
                        },
                        {
                          key: 'onLeave',
                          value: function (e) {
                            this.caller.onLeave = e;
                          },
                        },
                        {
                          key: 'onSync',
                          value: function (e) {
                            this.caller.onSync = e;
                          },
                        },
                        {
                          key: 'list',
                          value: function (t) {
                            return e.list(this.state, t);
                          },
                        },
                        {
                          key: 'inPendingSyncState',
                          value: function () {
                            return (
                              !this.joinRef ||
                              this.joinRef !== this.channel.joinRef()
                            );
                          },
                        },
                      ],
                      [
                        {
                          key: 'syncState',
                          value: function (e, t, n, i) {
                            var o = this,
                              r = this.clone(e),
                              s = {},
                              a = {};
                            return (
                              this.map(r, function (e, n) {
                                t[e] || (a[e] = n);
                              }),
                              this.map(t, function (e, t) {
                                var n = r[e];
                                if (n) {
                                  var i = t.metas.map(function (e) {
                                      return e.phx_ref;
                                    }),
                                    c = n.metas.map(function (e) {
                                      return e.phx_ref;
                                    }),
                                    u = t.metas.filter(function (e) {
                                      return c.indexOf(e.phx_ref) < 0;
                                    }),
                                    h = n.metas.filter(function (e) {
                                      return i.indexOf(e.phx_ref) < 0;
                                    });
                                  u.length > 0 &&
                                    ((s[e] = t), (s[e].metas = u)),
                                    h.length > 0 &&
                                      ((a[e] = o.clone(n)), (a[e].metas = h));
                                } else s[e] = t;
                              }),
                              this.syncDiff(r, {joins: s, leaves: a}, n, i)
                            );
                          },
                        },
                        {
                          key: 'syncDiff',
                          value: function (e, t, n, o) {
                            var r = t.joins,
                              s = t.leaves,
                              a = this.clone(e);
                            return (
                              n || (n = function () {}),
                              o || (o = function () {}),
                              this.map(r, function (e, t) {
                                var o = a[e];
                                if (((a[e] = t), o)) {
                                  var r,
                                    s = a[e].metas.map(function (e) {
                                      return e.phx_ref;
                                    }),
                                    c = o.metas.filter(function (e) {
                                      return s.indexOf(e.phx_ref) < 0;
                                    });
                                  (r = a[e].metas).unshift.apply(r, i(c));
                                }
                                n(e, o, t);
                              }),
                              this.map(s, function (e, t) {
                                var n = a[e];
                                if (n) {
                                  var i = t.metas.map(function (e) {
                                    return e.phx_ref;
                                  });
                                  (n.metas = n.metas.filter(function (e) {
                                    return i.indexOf(e.phx_ref) < 0;
                                  })),
                                    o(e, n, t),
                                    0 === n.metas.length && delete a[e];
                                }
                              }),
                              a
                            );
                          },
                        },
                        {
                          key: 'list',
                          value: function (e, t) {
                            return (
                              t ||
                                (t = function (e, t) {
                                  return t;
                                }),
                              this.map(e, function (e, n) {
                                return t(e, n);
                              })
                            );
                          },
                        },
                        {
                          key: 'map',
                          value: function (e, t) {
                            return Object.getOwnPropertyNames(e).map(function (
                              n
                            ) {
                              return t(n, e[n]);
                            });
                          },
                        },
                        {
                          key: 'clone',
                          value: function (e) {
                            return JSON.parse(JSON.stringify(e));
                          },
                        },
                      ]
                    ),
                    e
                  );
                })(),
                U = (function () {
                  function e(t, n) {
                    c(this, e),
                      (this.callback = t),
                      (this.timerCalc = n),
                      (this.timer = null),
                      (this.tries = 0);
                  }
                  return (
                    h(e, [
                      {
                        key: 'reset',
                        value: function () {
                          (this.tries = 0), clearTimeout(this.timer);
                        },
                      },
                      {
                        key: 'scheduleTimeout',
                        value: function () {
                          var e = this;
                          clearTimeout(this.timer),
                            (this.timer = setTimeout(function () {
                              (e.tries = e.tries + 1), e.callback();
                            }, this.timerCalc(this.tries + 1)));
                        },
                      },
                    ]),
                    e
                  );
                })();
            },
          ]);
        });
      },
      {},
    ],
    ikLx: [
      function (require, module, exports) {
        'use strict';
        var e, t, o, n, s;
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.ReplayerEvents =
            exports.MouseInteractions =
            exports.MediaInteractions =
            exports.IncrementalSource =
            exports.EventType =
              void 0),
          (exports.EventType = e),
          (function (e) {
            (e[(e.DomContentLoaded = 0)] = 'DomContentLoaded'),
              (e[(e.Load = 1)] = 'Load'),
              (e[(e.FullSnapshot = 2)] = 'FullSnapshot'),
              (e[(e.IncrementalSnapshot = 3)] = 'IncrementalSnapshot'),
              (e[(e.Meta = 4)] = 'Meta'),
              (e[(e.Custom = 5)] = 'Custom');
          })(e || (exports.EventType = e = {})),
          (exports.IncrementalSource = t),
          (function (e) {
            (e[(e.Mutation = 0)] = 'Mutation'),
              (e[(e.MouseMove = 1)] = 'MouseMove'),
              (e[(e.MouseInteraction = 2)] = 'MouseInteraction'),
              (e[(e.Scroll = 3)] = 'Scroll'),
              (e[(e.ViewportResize = 4)] = 'ViewportResize'),
              (e[(e.Input = 5)] = 'Input'),
              (e[(e.TouchMove = 6)] = 'TouchMove'),
              (e[(e.MediaInteraction = 7)] = 'MediaInteraction'),
              (e[(e.StyleSheetRule = 8)] = 'StyleSheetRule'),
              (e[(e.CanvasMutation = 9)] = 'CanvasMutation'),
              (e[(e.Font = 10)] = 'Font'),
              (e[(e.Log = 11)] = 'Log');
          })(t || (exports.IncrementalSource = t = {})),
          (exports.MouseInteractions = o),
          (function (e) {
            (e[(e.MouseUp = 0)] = 'MouseUp'),
              (e[(e.MouseDown = 1)] = 'MouseDown'),
              (e[(e.Click = 2)] = 'Click'),
              (e[(e.ContextMenu = 3)] = 'ContextMenu'),
              (e[(e.DblClick = 4)] = 'DblClick'),
              (e[(e.Focus = 5)] = 'Focus'),
              (e[(e.Blur = 6)] = 'Blur'),
              (e[(e.TouchStart = 7)] = 'TouchStart'),
              (e[(e.TouchMove_Departed = 8)] = 'TouchMove_Departed'),
              (e[(e.TouchEnd = 9)] = 'TouchEnd');
          })(o || (exports.MouseInteractions = o = {})),
          (exports.MediaInteractions = n),
          (function (e) {
            (e[(e.Play = 0)] = 'Play'), (e[(e.Pause = 1)] = 'Pause');
          })(n || (exports.MediaInteractions = n = {})),
          (exports.ReplayerEvents = s),
          (function (e) {
            (e.Start = 'start'),
              (e.Pause = 'pause'),
              (e.Resume = 'resume'),
              (e.Resize = 'resize'),
              (e.Finish = 'finish'),
              (e.FullsnapshotRebuilded = 'fullsnapshot-rebuilded'),
              (e.LoadStylesheetStart = 'load-stylesheet-start'),
              (e.LoadStylesheetEnd = 'load-stylesheet-end'),
              (e.SkipStart = 'skip-start'),
              (e.SkipEnd = 'skip-end'),
              (e.MouseInteraction = 'mouse-interaction'),
              (e.EventCast = 'event-cast'),
              (e.CustomEvent = 'custom-event'),
              (e.Flush = 'flush'),
              (e.StateChange = 'state-change');
          })(s || (exports.ReplayerEvents = s = {}));
      },
      {},
    ],
    e02N: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.__read = e),
          (exports.__spread = n),
          (exports.__values = t),
          (exports.__assign = void 0);
        var r = function () {
          return (
            (exports.__assign = r =
              Object.assign ||
              function (r) {
                for (var t, e = 1, n = arguments.length; e < n; e++)
                  for (var o in (t = arguments[e]))
                    Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
                return r;
              }),
            r.apply(this, arguments)
          );
        };
        function t(r) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            e = t && r[t],
            n = 0;
          if (e) return e.call(r);
          if (r && 'number' == typeof r.length)
            return {
              next: function () {
                return (
                  r && n >= r.length && (r = void 0),
                  {value: r && r[n++], done: !r}
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
          );
        }
        function e(r, t) {
          var e = 'function' == typeof Symbol && r[Symbol.iterator];
          if (!e) return r;
          var n,
            o,
            i = e.call(r),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
              a.push(n.value);
          } catch (l) {
            o = {error: l};
          } finally {
            try {
              n && !n.done && (e = i.return) && e.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        }
        function n() {
          for (var r = [], t = 0; t < arguments.length; t++)
            r = r.concat(e(arguments[t]));
          return r;
        }
        exports.__assign = r;
      },
      {},
    ],
    Fzkz: [
      function (require, module, exports) {
        'use strict';
        var e;
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.addHoverClass = A),
          (exports.buildNodeWithSN = L),
          (exports.rebuild = G),
          (exports.serializeNodeWithId = x),
          (exports.snapshot = E),
          (exports.transformAttribute = g),
          (exports.NodeType = exports.IGNORED_NODE = void 0),
          (exports.NodeType = e),
          (function (e) {
            (e[(e.Document = 0)] = 'Document'),
              (e[(e.DocumentType = 1)] = 'DocumentType'),
              (e[(e.Element = 2)] = 'Element'),
              (e[(e.Text = 3)] = 'Text'),
              (e[(e.CDATA = 4)] = 'CDATA'),
              (e[(e.Comment = 5)] = 'Comment');
          })(e || (exports.NodeType = e = {}));
        var t = 1,
          r = RegExp('[^a-z1-6-_]'),
          n = -2;
        function a() {
          return t++;
        }
        function i(e) {
          if (e instanceof HTMLFormElement) return 'form';
          var t = e.tagName.toLowerCase().trim();
          return r.test(t) ? 'div' : t;
        }
        function o(e) {
          try {
            var t = e.rules || e.cssRules;
            return t ? Array.from(t).map(s).join('') : null;
          } catch (r) {
            return null;
          }
        }
        function s(e) {
          return c(e) ? o(e.styleSheet) || '' : e.cssText;
        }
        function c(e) {
          return 'styleSheet' in e;
        }
        function u(e) {
          return (
            e.indexOf('//') > -1
              ? e.split('/').slice(0, 3).join('/')
              : e.split('/')[0]
          ).split('?')[0];
        }
        exports.IGNORED_NODE = n;
        var l = /url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm,
          f = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
          p = /^(data:)([^,]*),(.*)/i;
        function m(e, t) {
          return (e || '').replace(l, function (e, r, n, a, i, o) {
            var s = n || i || o,
              c = r || a || '';
            if (!s) return e;
            if (!f.test(s)) return 'url(' + c + s + c + ')';
            if (p.test(s)) return 'url(' + c + s + c + ')';
            if ('/' === s[0]) return 'url(' + c + (u(t) + s) + c + ')';
            var l = t.split('/'),
              m = s.split('/');
            l.pop();
            for (var d = 0, h = m; d < h.length; d++) {
              var v = h[d];
              '.' !== v && ('..' === v ? l.pop() : l.push(v));
            }
            return 'url(' + c + l.join('/') + c + ')';
          });
        }
        function d(e, t) {
          return '' === t.trim()
            ? t
            : t
                .split(',')
                .map(function (t) {
                  var r = t.trimLeft().trimRight().split(' ');
                  return 2 === r.length
                    ? h(e, r[0]) + ' ' + r[1]
                    : 1 === r.length
                    ? '' + h(e, r[0])
                    : '';
                })
                .join(', ');
        }
        function h(e, t) {
          if (!t || '' === t.trim()) return t;
          var r = e.createElement('a');
          return (r.href = t), r.href;
        }
        function v(e) {
          return 'svg' === e.tagName || e instanceof SVGElement;
        }
        function g(e, t, r) {
          return 'src' === t || (('href' === t || 'xlink:href' === t) && r)
            ? h(e, r)
            : 'srcset' === t && r
            ? d(e, r)
            : 'style' === t && r
            ? m(r, location.href)
            : r;
        }
        function y(e, t, r) {
          if ('string' == typeof t) {
            if (e.classList.contains(t)) return !0;
          } else
            e.classList.forEach(function (e) {
              if (t.test(e)) return !0;
            });
          return !!r && e.matches(r);
        }
        function b(t, r) {
          var n = r.doc,
            a = r.blockClass,
            s = r.blockSelector,
            c = r.inlineStylesheet,
            u = r.maskInputOptions,
            l = void 0 === u ? {} : u,
            f = r.recordCanvas;
          switch (t.nodeType) {
            case t.DOCUMENT_NODE:
              return {type: e.Document, childNodes: []};
            case t.DOCUMENT_TYPE_NODE:
              return {
                type: e.DocumentType,
                name: t.name,
                publicId: t.publicId,
                systemId: t.systemId,
              };
            case t.ELEMENT_NODE:
              for (
                var p = y(t, a, s),
                  d = i(t),
                  h = {},
                  b = 0,
                  C = Array.from(t.attributes);
                b < C.length;
                b++
              ) {
                var k = C[b],
                  x = k.name,
                  E = k.value;
                h[x] = g(n, x, E);
              }
              if ('link' === d && c) {
                var T,
                  N = Array.from(n.styleSheets).find(function (e) {
                    return e.href === t.href;
                  });
                (T = o(N)) &&
                  (delete h.rel, delete h.href, (h._cssText = m(T, N.href)));
              }
              if (
                'style' === d &&
                t.sheet &&
                !(t.innerText || t.textContent || '').trim().length
              )
                (T = o(t.sheet)) && (h._cssText = m(T, location.href));
              if ('input' === d || 'textarea' === d || 'select' === d) {
                E = t.value;
                'radio' !== h.type &&
                'checkbox' !== h.type &&
                'submit' !== h.type &&
                'button' !== h.type &&
                E
                  ? (h.value = l[h.type] || l[d] ? '*'.repeat(E.length) : E)
                  : t.checked && (h.checked = t.checked);
              }
              if ('option' === d) {
                var _ = t.parentElement;
                h.value === _.value && (h.selected = t.selected);
              }
              if (
                ('canvas' === d && f && (h.rr_dataURL = t.toDataURL()),
                ('audio' !== d && 'video' !== d) ||
                  (h.rr_mediaState = t.paused ? 'paused' : 'played'),
                t.scrollLeft && (h.rr_scrollLeft = t.scrollLeft),
                t.scrollTop && (h.rr_scrollTop = t.scrollTop),
                p)
              ) {
                var D = t.getBoundingClientRect(),
                  w = D.width,
                  S = D.height;
                h = {class: h.class, rr_width: w + 'px', rr_height: S + 'px'};
              }
              return {
                type: e.Element,
                tagName: d,
                attributes: h,
                childNodes: [],
                isSVG: v(t) || void 0,
                needBlock: p,
              };
            case t.TEXT_NODE:
              var O = t.parentNode && t.parentNode.tagName,
                A = t.textContent,
                M = 'STYLE' === O || void 0;
              return (
                M && A && (A = m(A, location.href)),
                'SCRIPT' === O && (A = 'SCRIPT_PLACEHOLDER'),
                {type: e.Text, textContent: A || '', isStyle: M}
              );
            case t.CDATA_SECTION_NODE:
              return {type: e.CDATA, textContent: ''};
            case t.COMMENT_NODE:
              return {type: e.Comment, textContent: t.textContent || ''};
            default:
              return !1;
          }
        }
        function C(e) {
          return void 0 === e ? '' : e.toLowerCase();
        }
        function k(t, r) {
          if (r.comment && t.type === e.Comment) return !0;
          if (t.type === e.Element) {
            if (
              r.script &&
              ('script' === t.tagName ||
                ('link' === t.tagName &&
                  'preload' === t.attributes.rel &&
                  'script' === t.attributes.as))
            )
              return !0;
            if (
              r.headFavicon &&
              (('link' === t.tagName && 'shortcut icon' === t.attributes.rel) ||
                ('meta' === t.tagName &&
                  (C(t.attributes.name).match(
                    /^msapplication-tile(image|color)$/
                  ) ||
                    'application-name' === C(t.attributes.name) ||
                    'icon' === C(t.attributes.rel) ||
                    'apple-touch-icon' === C(t.attributes.rel) ||
                    'shortcut icon' === C(t.attributes.rel))))
            )
              return !0;
            if ('meta' === t.tagName) {
              if (
                r.headMetaDescKeywords &&
                C(t.attributes.name).match(/^description|keywords$/)
              )
                return !0;
              if (
                r.headMetaSocial &&
                (C(t.attributes.property).match(/^(og|twitter|fb):/) ||
                  C(t.attributes.name).match(/^(og|twitter):/) ||
                  'pinterest' === C(t.attributes.name))
              )
                return !0;
              if (
                r.headMetaRobots &&
                ('robots' === C(t.attributes.name) ||
                  'googlebot' === C(t.attributes.name) ||
                  'bingbot' === C(t.attributes.name))
              )
                return !0;
              if (r.headMetaHttpEquiv && void 0 !== t.attributes['http-equiv'])
                return !0;
              if (
                r.headMetaAuthorship &&
                ('author' === C(t.attributes.name) ||
                  'generator' === C(t.attributes.name) ||
                  'framework' === C(t.attributes.name) ||
                  'publisher' === C(t.attributes.name) ||
                  'progid' === C(t.attributes.name) ||
                  C(t.attributes.property).match(/^article:/) ||
                  C(t.attributes.property).match(/^product:/))
              )
                return !0;
              if (
                r.headMetaVerification &&
                ('google-site-verification' === C(t.attributes.name) ||
                  'yandex-verification' === C(t.attributes.name) ||
                  'csrf-token' === C(t.attributes.name) ||
                  'p:domain_verify' === C(t.attributes.name) ||
                  'verify-v1' === C(t.attributes.name) ||
                  'verification' === C(t.attributes.name) ||
                  'shopify-checkout-api-token' === C(t.attributes.name))
              )
                return !0;
            }
          }
          return !1;
        }
        function x(t, r) {
          var i,
            o = r.doc,
            s = r.map,
            c = r.blockClass,
            u = r.blockSelector,
            l = r.skipChild,
            f = void 0 !== l && l,
            p = r.inlineStylesheet,
            m = void 0 === p || p,
            d = r.maskInputOptions,
            h = void 0 === d ? {} : d,
            v = r.slimDOMOptions,
            g = r.recordCanvas,
            y = void 0 !== g && g,
            C = r.preserveWhiteSpace,
            E = void 0 === C || C,
            T = b(t, {
              doc: o,
              blockClass: c,
              blockSelector: u,
              inlineStylesheet: m,
              maskInputOptions: h,
              recordCanvas: y,
            });
          if (!T) return console.warn(t, 'not serialized'), null;
          i =
            '__sn' in t
              ? t.__sn.id
              : k(T, v) ||
                (!E &&
                  T.type === e.Text &&
                  !T.isStyle &&
                  !T.textContent.replace(/^\s+|\s+$/gm, '').length)
              ? n
              : a();
          var N = Object.assign(T, {id: i});
          if (((t.__sn = N), i === n)) return null;
          s[i] = t;
          var _ = !f;
          if (
            (N.type === e.Element &&
              ((_ = _ && !N.needBlock), delete N.needBlock),
            (N.type === e.Document || N.type === e.Element) && _)
          ) {
            v.headWhitespace &&
              T.type === e.Element &&
              'head' === T.tagName &&
              (E = !1);
            for (var D = 0, w = Array.from(t.childNodes); D < w.length; D++) {
              var S = x(w[D], {
                doc: o,
                map: s,
                blockClass: c,
                blockSelector: u,
                skipChild: f,
                inlineStylesheet: m,
                maskInputOptions: h,
                slimDOMOptions: v,
                recordCanvas: y,
                preserveWhiteSpace: E,
              });
              S && N.childNodes.push(S);
            }
          }
          return N;
        }
        function E(e, t) {
          var r = t || {},
            n = r.blockClass,
            a = void 0 === n ? 'rr-block' : n,
            i = r.inlineStylesheet,
            o = void 0 === i || i,
            s = r.recordCanvas,
            c = void 0 !== s && s,
            u = r.blockSelector,
            l = void 0 === u ? null : u,
            f = r.maskAllInputs,
            p = void 0 !== f && f,
            m = r.slimDOM,
            d = void 0 !== m && m,
            h = {};
          return [
            x(e, {
              doc: e,
              map: h,
              blockClass: a,
              blockSelector: l,
              skipChild: !1,
              inlineStylesheet: o,
              maskInputOptions:
                !0 === p
                  ? {
                      color: !0,
                      date: !0,
                      'datetime-local': !0,
                      email: !0,
                      month: !0,
                      number: !0,
                      range: !0,
                      search: !0,
                      tel: !0,
                      text: !0,
                      time: !0,
                      url: !0,
                      week: !0,
                      textarea: !0,
                      select: !0,
                    }
                  : !1 === p
                  ? {}
                  : p,
              slimDOMOptions:
                !0 === d || 'all' === d
                  ? {
                      script: !0,
                      comment: !0,
                      headFavicon: !0,
                      headWhitespace: !0,
                      headMetaDescKeywords: 'all' === d,
                      headMetaSocial: !0,
                      headMetaRobots: !0,
                      headMetaHttpEquiv: !0,
                      headMetaAuthorship: !0,
                      headMetaVerification: !0,
                    }
                  : !1 === d
                  ? {}
                  : d,
              recordCanvas: c,
            }),
            h,
          ];
        }
        var T = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
        function N(e, t) {
          void 0 === t && (t = {});
          var r = 1,
            n = 1;
          function a(e) {
            var t = e.match(/\n/g);
            t && (r += t.length);
            var a = e.lastIndexOf('\n');
            n = -1 === a ? n + e.length : e.length - a;
          }
          function i() {
            var e = {line: r, column: n};
            return function (t) {
              return (t.position = new o(e)), m(), t;
            };
          }
          var o = (function () {
            return function (e) {
              (this.start = e),
                (this.end = {line: r, column: n}),
                (this.source = t.source);
            };
          })();
          o.prototype.content = e;
          var s = [];
          function c(a) {
            var i = new Error(t.source + ':' + r + ':' + n + ': ' + a);
            if (
              ((i.reason = a),
              (i.filename = t.source),
              (i.line = r),
              (i.column = n),
              (i.source = e),
              !t.silent)
            )
              throw i;
            s.push(i);
          }
          function u() {
            return p(/^{\s*/);
          }
          function l() {
            return p(/^}/);
          }
          function f() {
            var t,
              r = [];
            for (
              m(), d(r);
              e.length && '}' !== e.charAt(0) && (t = w() || S());

            )
              !1 !== t && (r.push(t), d(r));
            return r;
          }
          function p(t) {
            var r = t.exec(e);
            if (r) {
              var n = r[0];
              return a(n), (e = e.slice(n.length)), r;
            }
          }
          function m() {
            p(/^\s*/);
          }
          function d(e) {
            var t;
            for (void 0 === e && (e = []); (t = h()); )
              !1 !== t && e.push(t), (t = h());
            return e;
          }
          function h() {
            var t = i();
            if ('/' === e.charAt(0) && '*' === e.charAt(1)) {
              for (
                var r = 2;
                '' !== e.charAt(r) &&
                ('*' !== e.charAt(r) || '/' !== e.charAt(r + 1));

              )
                ++r;
              if (((r += 2), '' === e.charAt(r - 1)))
                return c('End of comment missing');
              var o = e.slice(2, r - 2);
              return (
                (n += 2),
                a(o),
                (e = e.slice(r)),
                (n += 2),
                t({type: 'comment', comment: o})
              );
            }
          }
          function v() {
            var e = p(/^([^{]+)/);
            if (e)
              return _(e[0])
                .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
                .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (e) {
                  return e.replace(/,/g, '‌');
                })
                .split(/\s*(?![^(]*\)),\s*/)
                .map(function (e) {
                  return e.replace(/\u200C/g, ',');
                });
          }
          function g() {
            var e = i(),
              t = p(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
            if (t) {
              var r = _(t[0]);
              if (!p(/^:\s*/)) return c("property missing ':'");
              var n = p(
                  /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/
                ),
                a = e({
                  type: 'declaration',
                  property: r.replace(T, ''),
                  value: n ? _(n[0]).replace(T, '') : '',
                });
              return p(/^[;\s]*/), a;
            }
          }
          function y() {
            var e,
              t = [];
            if (!u()) return c("missing '{'");
            for (d(t); (e = g()); ) !1 !== e && (t.push(e), d(t)), (e = g());
            return l() ? t : c("missing '}'");
          }
          function b() {
            for (
              var e, t = [], r = i();
              (e = p(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/));

            )
              t.push(e[1]), p(/^,\s*/);
            if (t.length)
              return r({type: 'keyframe', values: t, declarations: y()});
          }
          var C,
            k = N('import'),
            x = N('charset'),
            E = N('namespace');
          function N(e) {
            var t = new RegExp('^@' + e + '\\s*([^;]+);');
            return function () {
              var r = i(),
                n = p(t);
              if (n) {
                var a = {type: e};
                return (a[e] = n[1].trim()), r(a);
              }
            };
          }
          function w() {
            if ('@' === e[0])
              return (
                (function () {
                  var e = i(),
                    t = p(/^@([-\w]+)?keyframes\s*/);
                  if (t) {
                    var r = t[1];
                    if (!(t = p(/^([-\w]+)\s*/)))
                      return c('@keyframes missing name');
                    var n,
                      a = t[1];
                    if (!u()) return c("@keyframes missing '{'");
                    for (var o = d(); (n = b()); )
                      o.push(n), (o = o.concat(d()));
                    return l()
                      ? e({type: 'keyframes', name: a, vendor: r, keyframes: o})
                      : c("@keyframes missing '}'");
                  }
                })() ||
                (function () {
                  var e = i(),
                    t = p(/^@media *([^{]+)/);
                  if (t) {
                    var r = _(t[1]);
                    if (!u()) return c("@media missing '{'");
                    var n = d().concat(f());
                    return l()
                      ? e({type: 'media', media: r, rules: n})
                      : c("@media missing '}'");
                  }
                })() ||
                (function () {
                  var e = i(),
                    t = p(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
                  if (t)
                    return e({
                      type: 'custom-media',
                      name: _(t[1]),
                      media: _(t[2]),
                    });
                })() ||
                (function () {
                  var e = i(),
                    t = p(/^@supports *([^{]+)/);
                  if (t) {
                    var r = _(t[1]);
                    if (!u()) return c("@supports missing '{'");
                    var n = d().concat(f());
                    return l()
                      ? e({type: 'supports', supports: r, rules: n})
                      : c("@supports missing '}'");
                  }
                })() ||
                k() ||
                x() ||
                E() ||
                (function () {
                  var e = i(),
                    t = p(/^@([-\w]+)?document *([^{]+)/);
                  if (t) {
                    var r = _(t[1]),
                      n = _(t[2]);
                    if (!u()) return c("@document missing '{'");
                    var a = d().concat(f());
                    return l()
                      ? e({type: 'document', document: n, vendor: r, rules: a})
                      : c("@document missing '}'");
                  }
                })() ||
                (function () {
                  var e = i();
                  if (p(/^@page */)) {
                    var t = v() || [];
                    if (!u()) return c("@page missing '{'");
                    for (var r, n = d(); (r = g()); )
                      n.push(r), (n = n.concat(d()));
                    return l()
                      ? e({type: 'page', selectors: t, declarations: n})
                      : c("@page missing '}'");
                  }
                })() ||
                (function () {
                  var e = i();
                  if (p(/^@host\s*/)) {
                    if (!u()) return c("@host missing '{'");
                    var t = d().concat(f());
                    return l()
                      ? e({type: 'host', rules: t})
                      : c("@host missing '}'");
                  }
                })() ||
                (function () {
                  var e = i();
                  if (p(/^@font-face\s*/)) {
                    if (!u()) return c("@font-face missing '{'");
                    for (var t, r = d(); (t = g()); )
                      r.push(t), (r = r.concat(d()));
                    return l()
                      ? e({type: 'font-face', declarations: r})
                      : c("@font-face missing '}'");
                  }
                })()
              );
          }
          function S() {
            var e = i(),
              t = v();
            return t
              ? (d(), e({type: 'rule', selectors: t, declarations: y()}))
              : c('selector missing');
          }
          return D(
            ((C = f()),
            {
              type: 'stylesheet',
              stylesheet: {source: t.source, rules: C, parsingErrors: s},
            })
          );
        }
        function _(e) {
          return e ? e.replace(/^\s+|\s+$/g, '') : '';
        }
        function D(e, t) {
          for (
            var r = e && 'string' == typeof e.type,
              n = r ? e : t,
              a = 0,
              i = Object.keys(e);
            a < i.length;
            a++
          ) {
            var o = e[i[a]];
            Array.isArray(o)
              ? o.forEach(function (e) {
                  D(e, n);
                })
              : o && 'object' == typeof o && D(o, n);
          }
          return (
            r &&
              Object.defineProperty(e, 'parent', {
                configurable: !0,
                writable: !0,
                enumerable: !1,
                value: t || null,
              }),
            e
          );
        }
        var w = {
          script: 'noscript',
          altglyph: 'altGlyph',
          altglyphdef: 'altGlyphDef',
          altglyphitem: 'altGlyphItem',
          animatecolor: 'animateColor',
          animatemotion: 'animateMotion',
          animatetransform: 'animateTransform',
          clippath: 'clipPath',
          feblend: 'feBlend',
          fecolormatrix: 'feColorMatrix',
          fecomponenttransfer: 'feComponentTransfer',
          fecomposite: 'feComposite',
          feconvolvematrix: 'feConvolveMatrix',
          fediffuselighting: 'feDiffuseLighting',
          fedisplacementmap: 'feDisplacementMap',
          fedistantlight: 'feDistantLight',
          fedropshadow: 'feDropShadow',
          feflood: 'feFlood',
          fefunca: 'feFuncA',
          fefuncb: 'feFuncB',
          fefuncg: 'feFuncG',
          fefuncr: 'feFuncR',
          fegaussianblur: 'feGaussianBlur',
          feimage: 'feImage',
          femerge: 'feMerge',
          femergenode: 'feMergeNode',
          femorphology: 'feMorphology',
          feoffset: 'feOffset',
          fepointlight: 'fePointLight',
          fespecularlighting: 'feSpecularLighting',
          fespotlight: 'feSpotLight',
          fetile: 'feTile',
          feturbulence: 'feTurbulence',
          foreignobject: 'foreignObject',
          glyphref: 'glyphRef',
          lineargradient: 'linearGradient',
          radialgradient: 'radialGradient',
        };
        function S(e) {
          var t = w[e.tagName] ? w[e.tagName] : e.tagName;
          return 'link' === t && e.attributes._cssText && (t = 'style'), t;
        }
        var O = /([^\\]):hover/g;
        function A(e) {
          var t = N(e, {silent: !0});
          return t.stylesheet
            ? (t.stylesheet.rules.forEach(function (t) {
                'selectors' in t &&
                  (t.selectors || []).forEach(function (t) {
                    if (O.test(t)) {
                      var r = t.replace(O, '$1.\\:hover');
                      e = e.replace(t, t + ', ' + r);
                    }
                  });
              }),
              e)
            : e;
        }
        function M(t, r) {
          var n = r.doc,
            a = r.hackCss;
          switch (t.type) {
            case e.Document:
              return n.implementation.createDocument(null, '', null);
            case e.DocumentType:
              return n.implementation.createDocumentType(
                t.name || 'html',
                t.publicId,
                t.systemId
              );
            case e.Element:
              var i,
                o = S(t);
              i = t.isSVG
                ? n.createElementNS('http://www.w3.org/2000/svg', o)
                : n.createElement(o);
              var s = function (e) {
                if (!t.attributes.hasOwnProperty(e)) return 'continue';
                var r = t.attributes[e];
                if (
                  ((r = 'boolean' == typeof r || 'number' == typeof r ? '' : r),
                  e.startsWith('rr_'))
                ) {
                  if ('canvas' === o && 'rr_dataURL' === e) {
                    var s = document.createElement('img');
                    (s.src = r),
                      (s.onload = function () {
                        var e = i.getContext('2d');
                        e && e.drawImage(s, 0, 0, s.width, s.height);
                      });
                  }
                  if (
                    ('rr_width' === e && (i.style.width = r),
                    'rr_height' === e && (i.style.height = r),
                    'rr_mediaState' === e)
                  )
                    switch (r) {
                      case 'played':
                        i.play();
                      case 'paused':
                        i.pause();
                    }
                } else {
                  var c = 'textarea' === o && 'value' === e,
                    u = 'style' === o && '_cssText' === e;
                  if ((u && a && (r = A(r)), c || u)) {
                    for (
                      var l = n.createTextNode(r),
                        f = 0,
                        p = Array.from(i.childNodes);
                      f < p.length;
                      f++
                    ) {
                      var m = p[f];
                      m.nodeType === i.TEXT_NODE && i.removeChild(m);
                    }
                    return i.appendChild(l), 'continue';
                  }
                  if ('iframe' === o && 'src' === e) return 'continue';
                  try {
                    t.isSVG && 'xlink:href' === e
                      ? i.setAttributeNS('http://www.w3.org/1999/xlink', e, r)
                      : 'onload' === e ||
                        'onclick' === e ||
                        'onmouse' === e.substring(0, 7)
                      ? i.setAttribute('_' + e, r)
                      : i.setAttribute(e, r);
                  } catch (d) {}
                }
              };
              for (var c in t.attributes) s(c);
              return i;
            case e.Text:
              return n.createTextNode(
                t.isStyle && a ? A(t.textContent) : t.textContent
              );
            case e.CDATA:
              return n.createCDATASection(t.textContent);
            case e.Comment:
              return n.createComment(t.textContent);
            default:
              return null;
          }
        }
        function L(t, r) {
          var n = r.doc,
            a = r.map,
            i = r.skipChild,
            o = void 0 !== i && i,
            s = r.hackCss,
            c = void 0 === s || s,
            u = M(t, {doc: n, hackCss: c});
          if (!u) return null;
          if (
            (t.type === e.Document && (n.close(), n.open(), (u = n)),
            (u.__sn = t),
            (a[t.id] = u),
            (t.type === e.Document || t.type === e.Element) && !o)
          )
            for (var l = 0, f = t.childNodes; l < f.length; l++) {
              var p = f[l],
                m = L(p, {doc: n, map: a, skipChild: !1, hackCss: c});
              m ? u.appendChild(m) : console.warn('Failed to rebuild', p);
            }
          return u;
        }
        function I(e, t) {
          for (var r in e) e[r] && ((n = e[r]), t(n));
          var n;
        }
        function R(t) {
          var r = t.__sn;
          if (r.type === e.Element) {
            var n = t;
            for (var a in r.attributes)
              if (r.attributes.hasOwnProperty(a) && a.startsWith('rr_')) {
                var i = r.attributes[a];
                'rr_scrollLeft' === a && (n.scrollLeft = i),
                  'rr_scrollTop' === a && (n.scrollTop = i);
              }
          }
        }
        function G(e, t) {
          var r = t.doc,
            n = t.onVisit,
            a = t.hackCss,
            i = {},
            o = L(e, {
              doc: r,
              map: i,
              skipChild: !1,
              hackCss: void 0 === a || a,
            });
          return (
            I(i, function (e) {
              n && n(e), R(e);
            }),
            [o, i]
          );
        }
      },
      {},
    ],
    CnRk: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.getWindowHeight = u),
          (exports.getWindowWidth = d),
          (exports.hookSetter = s),
          (exports.isAncestorRemoved = p),
          (exports.isBlocked = c),
          (exports.isIgnored = l),
          (exports.isTouchEvent = h),
          (exports.iterateResolveTree = x),
          (exports.needCastInSyncMode = v),
          (exports.on = r),
          (exports.patch = a),
          (exports.polyfill = f),
          (exports.queueToResolveTrees = y),
          (exports.throttle = i),
          (exports.mirror = exports.TreeIndex = void 0);
        var e = require('../node_modules/tslib/tslib.es6.js'),
          t = require('../node_modules/rrweb-snapshot/es/rrweb-snapshot.js'),
          n = require('./types.js');
        function r(e, t, n) {
          void 0 === n && (n = document);
          var r = {capture: !0, passive: !0};
          return (
            n.addEventListener(e, t, r),
            function () {
              return n.removeEventListener(e, t, r);
            }
          );
        }
        var o = {
          map: {},
          getId: function (e) {
            return e.__sn ? e.__sn.id : -1;
          },
          getNode: function (e) {
            return o.map[e] || null;
          },
          removeNodeFromMap: function (e) {
            var t = e.__sn && e.__sn.id;
            delete o.map[t],
              e.childNodes &&
                e.childNodes.forEach(function (e) {
                  return o.removeNodeFromMap(e);
                });
          },
          has: function (e) {
            return o.map.hasOwnProperty(e);
          },
        };
        function i(e, t, n) {
          void 0 === n && (n = {});
          var r = null,
            o = 0;
          return function (i) {
            var s = Date.now();
            o || !1 !== n.leading || (o = s);
            var a = t - (s - o),
              u = this,
              d = arguments;
            a <= 0 || a > t
              ? (r && (window.clearTimeout(r), (r = null)),
                (o = s),
                e.apply(u, d))
              : r ||
                !1 === n.trailing ||
                (r = window.setTimeout(function () {
                  (o = !1 === n.leading ? 0 : Date.now()),
                    (r = null),
                    e.apply(u, d);
                }, a));
          };
        }
        function s(e, t, n, r, o) {
          void 0 === o && (o = window);
          var i = o.Object.getOwnPropertyDescriptor(e, t);
          return (
            o.Object.defineProperty(
              e,
              t,
              r
                ? n
                : {
                    set: function (e) {
                      var t = this;
                      setTimeout(function () {
                        n.set.call(t, e);
                      }, 0),
                        i && i.set && i.set.call(this, e);
                    },
                  }
            ),
            function () {
              return s(e, t, i || {}, !0);
            }
          );
        }
        function a(e, t, n) {
          try {
            if (!(t in e)) return function () {};
            var r = e[t],
              o = n(r);
            return (
              'function' == typeof o &&
                ((o.prototype = o.prototype || {}),
                Object.defineProperties(o, {
                  __rrweb_original__: {enumerable: !1, value: r},
                })),
              (e[t] = o),
              function () {
                e[t] = r;
              }
            );
          } catch (i) {
            return function () {};
          }
        }
        function u() {
          return (
            window.innerHeight ||
            (document.documentElement &&
              document.documentElement.clientHeight) ||
            (document.body && document.body.clientHeight)
          );
        }
        function d() {
          return (
            window.innerWidth ||
            (document.documentElement &&
              document.documentElement.clientWidth) ||
            (document.body && document.body.clientWidth)
          );
        }
        function c(e, t) {
          if (!e) return !1;
          if (e.nodeType === e.ELEMENT_NODE) {
            var n = !1;
            return (
              'string' == typeof t
                ? (n = e.classList.contains(t))
                : e.classList.forEach(function (e) {
                    t.test(e) && (n = !0);
                  }),
              n || c(e.parentNode, t)
            );
          }
          return e.nodeType, e.TEXT_NODE, c(e.parentNode, t);
        }
        function l(e) {
          return '__sn' in e && e.__sn.id === t.IGNORED_NODE;
        }
        function p(e) {
          var t = o.getId(e);
          return (
            !o.has(t) ||
            ((!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) &&
              (!e.parentNode || p(e.parentNode)))
          );
        }
        function h(e) {
          return Boolean(e.changedTouches);
        }
        function f(e) {
          void 0 === e && (e = window),
            'NodeList' in e &&
              !e.NodeList.prototype.forEach &&
              (e.NodeList.prototype.forEach = Array.prototype.forEach),
            'DOMTokenList' in e &&
              !e.DOMTokenList.prototype.forEach &&
              (e.DOMTokenList.prototype.forEach = Array.prototype.forEach);
        }
        function v(e) {
          switch (e.type) {
            case n.EventType.DomContentLoaded:
            case n.EventType.Load:
            case n.EventType.Custom:
              return !1;
            case n.EventType.FullSnapshot:
            case n.EventType.Meta:
              return !0;
          }
          switch (e.data.source) {
            case n.IncrementalSource.MouseMove:
            case n.IncrementalSource.MouseInteraction:
            case n.IncrementalSource.TouchMove:
            case n.IncrementalSource.MediaInteraction:
              return !1;
            case n.IncrementalSource.ViewportResize:
            case n.IncrementalSource.StyleSheetRule:
            case n.IncrementalSource.Scroll:
            case n.IncrementalSource.Input:
              return !0;
          }
          return !0;
        }
        exports.mirror = o;
        var m = (function () {
          function t() {
            this.reset();
          }
          return (
            (t.prototype.add = function (e) {
              var t = this.indexes.get(e.parentId),
                n = {
                  id: e.node.id,
                  mutation: e,
                  children: [],
                  texts: [],
                  attributes: [],
                };
              t
                ? ((n.parent = t), (t.children[n.id] = n))
                : (this.tree[n.id] = n),
                this.indexes.set(n.id, n);
            }),
            (t.prototype.remove = function (e) {
              var t = this,
                n = this.indexes.get(e.parentId),
                r = this.indexes.get(e.id),
                i = function (e) {
                  t.removeIdSet.add(e);
                  var n = o.getNode(e);
                  null == n ||
                    n.childNodes.forEach(function (e) {
                      '__sn' in e && i(e.__sn.id);
                    });
                },
                s = function (n) {
                  t.removeIdSet.add(n.id),
                    Object.values(n.children).forEach(function (e) {
                      return s(e);
                    });
                  var r = t.indexes.get(n.id);
                  if (r) {
                    var o = r.parent;
                    o &&
                      (delete r.parent,
                      delete o.children[r.id],
                      t.indexes.delete(e.id));
                  }
                };
              r
                ? n
                  ? (delete r.parent,
                    delete n.children[r.id],
                    this.indexes.delete(e.id),
                    s(r))
                  : (delete this.tree[r.id], this.indexes.delete(r.id), s(r))
                : (this.removeNodeMutations.push(e), i(e.id));
            }),
            (t.prototype.text = function (e) {
              var t = this.indexes.get(e.id);
              t ? t.texts.push(e) : this.textMutations.push(e);
            }),
            (t.prototype.attribute = function (e) {
              var t = this.indexes.get(e.id);
              t ? t.attributes.push(e) : this.attributeMutations.push(e);
            }),
            (t.prototype.scroll = function (e) {
              this.scrollMap.set(e.id, e);
            }),
            (t.prototype.input = function (e) {
              this.inputMap.set(e.id, e);
            }),
            (t.prototype.flush = function () {
              var t,
                r,
                o,
                i,
                s = this,
                a = this.tree,
                u = this.removeNodeMutations,
                d = this.textMutations,
                c = this.attributeMutations,
                l = {
                  source: n.IncrementalSource.Mutation,
                  removes: u,
                  texts: d,
                  attributes: c,
                  adds: [],
                },
                p = function (e, t) {
                  t && s.removeIdSet.add(e.id),
                    (l.texts = l.texts
                      .concat(t ? [] : e.texts)
                      .filter(function (e) {
                        return !s.removeIdSet.has(e.id);
                      })),
                    (l.attributes = l.attributes
                      .concat(t ? [] : e.attributes)
                      .filter(function (e) {
                        return !s.removeIdSet.has(e.id);
                      })),
                    s.removeIdSet.has(e.id) ||
                    s.removeIdSet.has(e.mutation.parentId) ||
                    t
                      ? Object.values(e.children).forEach(function (e) {
                          return p(e, !0);
                        })
                      : (l.adds.push(e.mutation),
                        e.children &&
                          Object.values(e.children).forEach(function (e) {
                            return p(e, !1);
                          }));
                };
              Object.values(a).forEach(function (e) {
                return p(e, !1);
              });
              try {
                for (
                  var h = (0, e.__values)(this.scrollMap.keys()), f = h.next();
                  !f.done;
                  f = h.next()
                ) {
                  var v = f.value;
                  this.removeIdSet.has(v) && this.scrollMap.delete(v);
                }
              } catch (E) {
                t = {error: E};
              } finally {
                try {
                  f && !f.done && (r = h.return) && r.call(h);
                } finally {
                  if (t) throw t.error;
                }
              }
              try {
                for (
                  var m = (0, e.__values)(this.inputMap.keys()), y = m.next();
                  !y.done;
                  y = m.next()
                ) {
                  v = y.value;
                  this.removeIdSet.has(v) && this.inputMap.delete(v);
                }
              } catch (_) {
                o = {error: _};
              } finally {
                try {
                  y && !y.done && (i = m.return) && i.call(m);
                } finally {
                  if (o) throw o.error;
                }
              }
              var x = new Map(this.scrollMap),
                M = new Map(this.inputMap);
              return this.reset(), {mutationData: l, scrollMap: x, inputMap: M};
            }),
            (t.prototype.reset = function () {
              (this.tree = []),
                (this.indexes = new Map()),
                (this.removeNodeMutations = []),
                (this.textMutations = []),
                (this.attributeMutations = []),
                (this.removeIdSet = new Set()),
                (this.scrollMap = new Map()),
                (this.inputMap = new Map());
            }),
            t
          );
        })();
        function y(t) {
          var n,
            r,
            o = {},
            i = function (e, t) {
              var n = {value: e, parent: t, children: []};
              return (o[e.node.id] = n), n;
            },
            s = [];
          try {
            for (
              var a = (0, e.__values)(t), u = a.next();
              !u.done;
              u = a.next()
            ) {
              var d = u.value,
                c = d.nextId,
                l = d.parentId;
              if (c && c in o) {
                var p = o[c];
                if (p.parent) {
                  var h = p.parent.children.indexOf(p);
                  p.parent.children.splice(h, 0, i(d, p.parent));
                } else {
                  h = s.indexOf(p);
                  s.splice(h, 0, i(d, null));
                }
              } else if (l in o) {
                var f = o[l];
                f.children.push(i(d, f));
              } else s.push(i(d, null));
            }
          } catch (v) {
            n = {error: v};
          } finally {
            try {
              u && !u.done && (r = a.return) && r.call(a);
            } finally {
              if (n) throw n.error;
            }
          }
          return s;
        }
        function x(e, t) {
          t(e.value);
          for (var n = e.children.length - 1; n >= 0; n--) x(e.children[n], t);
        }
        exports.TreeIndex = m;
      },
      {
        '../node_modules/tslib/tslib.es6.js': 'e02N',
        '../node_modules/rrweb-snapshot/es/rrweb-snapshot.js': 'Fzkz',
        './types.js': 'ikLx',
      },
    ],
    AAml: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.default = void 0);
        var e = require('../../node_modules/tslib/tslib.es6.js'),
          t = require('../../node_modules/rrweb-snapshot/es/rrweb-snapshot.js'),
          r = require('../utils.js');
        function n(e) {
          return '__ln' in e;
        }
        var i = (function () {
            function e() {
              (this.length = 0), (this.head = null);
            }
            return (
              (e.prototype.get = function (e) {
                if (e >= this.length)
                  throw new Error('Position outside of list range');
                for (var t = this.head, r = 0; r < e; r++)
                  t = (null == t ? void 0 : t.next) || null;
                return t;
              }),
              (e.prototype.addNode = function (e) {
                var t = {value: e, previous: null, next: null};
                if (((e.__ln = t), e.previousSibling && n(e.previousSibling))) {
                  var r = e.previousSibling.__ln.next;
                  (t.next = r),
                    (t.previous = e.previousSibling.__ln),
                    (e.previousSibling.__ln.next = t),
                    r && (r.previous = t);
                } else if (e.nextSibling && n(e.nextSibling)) {
                  r = e.nextSibling.__ln.previous;
                  (t.previous = r),
                    (t.next = e.nextSibling.__ln),
                    (e.nextSibling.__ln.previous = t),
                    r && (r.next = t);
                } else
                  this.head && (this.head.previous = t),
                    (t.next = this.head),
                    (this.head = t);
                this.length++;
              }),
              (e.prototype.removeNode = function (e) {
                var t = e.__ln;
                this.head &&
                  (t.previous
                    ? ((t.previous.next = t.next),
                      t.next && (t.next.previous = t.previous))
                    : ((this.head = t.next),
                      this.head && (this.head.previous = null)),
                  e.__ln && delete e.__ln,
                  this.length--);
              }),
              e
            );
          })(),
          o = function (e, t) {
            return e + '@' + t;
          };
        function s(e) {
          return '__sn' in e;
        }
        var a = (function () {
          function n() {
            var n = this;
            (this.frozen = !1),
              (this.texts = []),
              (this.attributes = []),
              (this.removes = []),
              (this.mapRemoves = []),
              (this.movedMap = {}),
              (this.addedSet = new Set()),
              (this.movedSet = new Set()),
              (this.droppedSet = new Set()),
              (this.processMutations = function (e) {
                e.forEach(n.processMutation), n.frozen || n.emit();
              }),
              (this.emit = function () {
                for (
                  var o,
                    s,
                    a,
                    d,
                    v = [],
                    h = new i(),
                    c = function (e) {
                      for (
                        var i = e, o = t.IGNORED_NODE;
                        o === t.IGNORED_NODE;

                      )
                        o = (i = i && i.nextSibling) && r.mirror.getId(i);
                      return (
                        -1 === o &&
                          (0, r.isBlocked)(e.nextSibling, n.blockClass) &&
                          (o = null),
                        o
                      );
                    },
                    p = function (e) {
                      if (e.parentNode && document.contains(e)) {
                        var i = r.mirror.getId(e.parentNode),
                          o = c(e);
                        if (-1 === i || -1 === o) return h.addNode(e);
                        var s = (0, t.serializeNodeWithId)(e, {
                          doc: document,
                          map: r.mirror.map,
                          blockClass: n.blockClass,
                          blockSelector: n.blockSelector,
                          skipChild: !0,
                          inlineStylesheet: n.inlineStylesheet,
                          maskInputOptions: n.maskInputOptions,
                          slimDOMOptions: n.slimDOMOptions,
                          recordCanvas: n.recordCanvas,
                        });
                        s && v.push({parentId: i, nextId: o, node: s});
                      }
                    };
                  n.mapRemoves.length;

                )
                  r.mirror.removeNodeFromMap(n.mapRemoves.shift());
                try {
                  for (
                    var f = (0, e.__values)(n.movedSet), m = f.next();
                    !m.done;
                    m = f.next()
                  ) {
                    var g = m.value;
                    (l(n.removes, g) && !n.movedSet.has(g.parentNode)) || p(g);
                  }
                } catch (w) {
                  o = {error: w};
                } finally {
                  try {
                    m && !m.done && (s = f.return) && s.call(f);
                  } finally {
                    if (o) throw o.error;
                  }
                }
                try {
                  for (
                    var b = (0, e.__values)(n.addedSet), S = b.next();
                    !S.done;
                    S = b.next()
                  ) {
                    g = S.value;
                    u(n.droppedSet, g) || l(n.removes, g)
                      ? u(n.movedSet, g)
                        ? p(g)
                        : n.droppedSet.add(g)
                      : p(g);
                  }
                } catch (O) {
                  a = {error: O};
                } finally {
                  try {
                    S && !S.done && (d = b.return) && d.call(b);
                  } finally {
                    if (a) throw a.error;
                  }
                }
                for (var _ = null; h.length; ) {
                  var x = null;
                  if (_) {
                    var k = r.mirror.getId(_.value.parentNode),
                      N = c(_.value);
                    -1 !== k && -1 !== N && (x = _);
                  }
                  if (!x)
                    for (var I = h.length - 1; I >= 0; I--) {
                      var y = h.get(I);
                      (k = r.mirror.getId(y.value.parentNode)),
                        (N = c(y.value));
                      if (-1 !== k && -1 !== N) {
                        x = y;
                        break;
                      }
                    }
                  if (!x) {
                    for (; h.head; ) h.removeNode(h.head.value);
                    break;
                  }
                  (_ = x.previous), h.removeNode(x.value), p(x.value);
                }
                var C = {
                  texts: n.texts
                    .map(function (e) {
                      return {id: r.mirror.getId(e.node), value: e.value};
                    })
                    .filter(function (e) {
                      return r.mirror.has(e.id);
                    }),
                  attributes: n.attributes
                    .map(function (e) {
                      return {
                        id: r.mirror.getId(e.node),
                        attributes: e.attributes,
                      };
                    })
                    .filter(function (e) {
                      return r.mirror.has(e.id);
                    }),
                  removes: n.removes,
                  adds: v,
                };
                (C.texts.length ||
                  C.attributes.length ||
                  C.removes.length ||
                  C.adds.length) &&
                  ((n.texts = []),
                  (n.attributes = []),
                  (n.removes = []),
                  (n.addedSet = new Set()),
                  (n.movedSet = new Set()),
                  (n.droppedSet = new Set()),
                  (n.movedMap = {}),
                  n.emissionCallback(C));
              }),
              (this.processMutation = function (e) {
                if (!(0, r.isIgnored)(e.target))
                  switch (e.type) {
                    case 'characterData':
                      var i = e.target.textContent;
                      (0, r.isBlocked)(e.target, n.blockClass) ||
                        i === e.oldValue ||
                        n.texts.push({value: i, node: e.target});
                      break;
                    case 'attributes':
                      i = e.target.getAttribute(e.attributeName);
                      if (
                        (0, r.isBlocked)(e.target, n.blockClass) ||
                        i === e.oldValue
                      )
                        return;
                      var s = n.attributes.find(function (t) {
                        return t.node === e.target;
                      });
                      s ||
                        ((s = {node: e.target, attributes: {}}),
                        n.attributes.push(s)),
                        (s.attributes[e.attributeName] = (0,
                        t.transformAttribute)(document, e.attributeName, i));
                      break;
                    case 'childList':
                      e.addedNodes.forEach(function (t) {
                        return n.genAdds(t, e.target);
                      }),
                        e.removedNodes.forEach(function (t) {
                          var i = r.mirror.getId(t),
                            s = r.mirror.getId(e.target);
                          (0, r.isBlocked)(t, n.blockClass) ||
                            (0, r.isBlocked)(e.target, n.blockClass) ||
                            (0, r.isIgnored)(t) ||
                            (n.addedSet.has(t)
                              ? (d(n.addedSet, t), n.droppedSet.add(t))
                              : (n.addedSet.has(e.target) && -1 === i) ||
                                (0, r.isAncestorRemoved)(e.target) ||
                                (n.movedSet.has(t) && n.movedMap[o(i, s)]
                                  ? d(n.movedSet, t)
                                  : n.removes.push({parentId: s, id: i})),
                            n.mapRemoves.push(t));
                        });
                  }
              }),
              (this.genAdds = function (e, t) {
                if (
                  !(
                    (0, r.isBlocked)(e, n.blockClass) ||
                    (t && (0, r.isBlocked)(t, n.blockClass))
                  )
                ) {
                  if (s(e)) {
                    if ((0, r.isIgnored)(e)) return;
                    n.movedSet.add(e);
                    var i = null;
                    t && s(t) && (i = t.__sn.id),
                      i && (n.movedMap[o(e.__sn.id, i)] = !0);
                  } else n.addedSet.add(e), n.droppedSet.delete(e);
                  e.childNodes.forEach(function (e) {
                    return n.genAdds(e);
                  });
                }
              });
          }
          return (
            (n.prototype.init = function (e, t, r, n, i, o, s) {
              (this.blockClass = t),
                (this.blockSelector = r),
                (this.inlineStylesheet = n),
                (this.maskInputOptions = i),
                (this.recordCanvas = o),
                (this.slimDOMOptions = s),
                (this.emissionCallback = e);
            }),
            (n.prototype.freeze = function () {
              this.frozen = !0;
            }),
            (n.prototype.unfreeze = function () {
              this.frozen = !1;
            }),
            (n.prototype.isFrozen = function () {
              return this.frozen;
            }),
            n
          );
        })();
        function d(e, t) {
          e.delete(t),
            t.childNodes.forEach(function (t) {
              return d(e, t);
            });
        }
        function l(e, t) {
          var n = t.parentNode;
          if (!n) return !1;
          var i = r.mirror.getId(n);
          return (
            !!e.some(function (e) {
              return e.id === i;
            }) || l(e, n)
          );
        }
        function u(e, t) {
          var r = t.parentNode;
          return !!r && (!!e.has(r) || u(e, r));
        }
        var v = a;
        exports.default = v;
      },
      {
        '../../node_modules/tslib/tslib.es6.js': 'e02N',
        '../../node_modules/rrweb-snapshot/es/rrweb-snapshot.js': 'Fzkz',
        '../utils.js': 'CnRk',
      },
    ],
    Co33: [
      function (require, module, exports) {
        'use strict';
        function e(e) {
          if (!e || !e.outerHTML) return '';
          for (var n = ''; e.parentElement; ) {
            var r = e.localName;
            if (!r) break;
            r = r.toLowerCase();
            var t = e.parentElement,
              i = [];
            if (t.children && t.children.length > 0)
              for (var a = 0; a < t.children.length; a++) {
                var l = t.children[a];
                l.localName &&
                  l.localName.toLowerCase &&
                  l.localName.toLowerCase() === r &&
                  i.push(l);
              }
            i.length > 1 && (r += ':eq(' + i.indexOf(e) + ')'),
              (n = r + (n ? '>' + n : '')),
              (e = t);
          }
          return n;
        }
        function n(n, r) {
          var t = {numOfKeysLimit: 50};
          Object.assign(t, r);
          var i = [],
            a = [];
          return JSON.stringify(n, function (n, r) {
            if (i.length > 0) {
              var l = i.indexOf(this);
              ~l ? i.splice(l + 1) : i.push(this),
                ~l ? a.splice(l, 1 / 0, n) : a.push(n),
                ~i.indexOf(r) &&
                  (r =
                    i[0] === r
                      ? '[Circular ~]'
                      : '[Circular ~.' +
                        a.slice(0, i.indexOf(r)).join('.') +
                        ']');
            } else i.push(r);
            if (null == r) return r;
            if (
              ('object' == typeof (o = r) &&
                Object.keys(o).length > t.numOfKeysLimit) ||
              'function' == typeof o
            )
              return (function (e) {
                var n = e.toString();
                t.stringLengthLimit &&
                  n.length > t.stringLengthLimit &&
                  (n = n.slice(0, t.stringLengthLimit) + '...');
                return n;
              })(r);
            var o;
            if (r instanceof Event) {
              var s = {};
              for (var f in r) {
                var u = r[f];
                Array.isArray(u)
                  ? (s[f] = e(u.length ? u[0] : null))
                  : (s[f] = u);
              }
              return s;
            }
            return r instanceof Node
              ? r instanceof HTMLElement
                ? r
                  ? r.outerHTML
                  : ''
                : r.nodeName
              : r;
          });
        }
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.stringify = n);
      },
      {},
    ],
    Q7zJ: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.initObservers = b),
          (exports.mutationBuffer = exports.INPUT_TAGS = void 0);
        var e = require('../../node_modules/tslib/tslib.es6.js'),
          t = require('../types.js'),
          n = require('../utils.js'),
          r = a(require('./mutation.js')),
          o = require('./stringify.js');
        function a(e) {
          return e && e.__esModule ? e : {default: e};
        }
        var i = new r.default();
        function u(e, t, n, r, o, a, u) {
          i.init(e, t, n, r, o, a, u);
          var s = new MutationObserver(i.processMutations.bind(i));
          return (
            s.observe(document, {
              attributes: !0,
              attributeOldValue: !0,
              characterData: !0,
              characterDataOldValue: !0,
              childList: !0,
              subtree: !0,
            }),
            s
          );
        }
        function s(e, r) {
          if (!1 === r.mousemove) return function () {};
          var o,
            a = 'number' == typeof r.mousemove ? r.mousemove : 50,
            i = [],
            u = (0, n.throttle)(function (n) {
              var r = Date.now() - o;
              e(
                i.map(function (e) {
                  return (e.timeOffset -= r), e;
                }),
                n
                  ? t.IncrementalSource.TouchMove
                  : t.IncrementalSource.MouseMove
              ),
                (i = []),
                (o = null);
            }, 500),
            s = (0, n.throttle)(
              function (e) {
                var t = e.target,
                  r = (0, n.isTouchEvent)(e) ? e.changedTouches[0] : e,
                  a = r.clientX,
                  s = r.clientY;
                o || (o = Date.now()),
                  i.push({
                    x: a,
                    y: s,
                    id: n.mirror.getId(t),
                    timeOffset: Date.now() - o,
                  }),
                  u((0, n.isTouchEvent)(e));
              },
              a,
              {trailing: !1}
            ),
            c = [(0, n.on)('mousemove', s), (0, n.on)('touchmove', s)];
          return function () {
            c.forEach(function (e) {
              return e();
            });
          };
        }
        function c(e, r, o) {
          if (!1 === o.mouseInteraction) return function () {};
          var a =
              !0 === o.mouseInteraction || void 0 === o.mouseInteraction
                ? {}
                : o.mouseInteraction,
            i = [];
          return (
            Object.keys(t.MouseInteractions)
              .filter(function (e) {
                return (
                  Number.isNaN(Number(e)) &&
                  !e.endsWith('_Departed') &&
                  !1 !== a[e]
                );
              })
              .forEach(function (o) {
                var a = o.toLowerCase(),
                  u = (function (o) {
                    return function (a) {
                      if (!(0, n.isBlocked)(a.target, r)) {
                        var i = n.mirror.getId(a.target),
                          u = (0, n.isTouchEvent)(a) ? a.changedTouches[0] : a,
                          s = u.clientX,
                          c = u.clientY;
                        e({type: t.MouseInteractions[o], id: i, x: s, y: c});
                      }
                    };
                  })(o);
                i.push((0, n.on)(a, u));
              }),
            function () {
              i.forEach(function (e) {
                return e();
              });
            }
          );
        }
        function l(e, t, r) {
          var o = (0, n.throttle)(function (r) {
            if (r.target && !(0, n.isBlocked)(r.target, t)) {
              var o = n.mirror.getId(r.target);
              if (r.target === document) {
                var a = document.scrollingElement || document.documentElement;
                e({id: o, x: a.scrollLeft, y: a.scrollTop});
              } else e({id: o, x: r.target.scrollLeft, y: r.target.scrollTop});
            }
          }, r.scroll || 100);
          return (0, n.on)('scroll', o);
        }
        function p(e) {
          var t = -1,
            r = -1,
            o = (0, n.throttle)(function () {
              var o = (0, n.getWindowHeight)(),
                a = (0, n.getWindowWidth)();
              (t === o && r == a) ||
                (e({width: Number(a), height: Number(o)}), (t = o), (r = a));
            }, 200);
          return (0, n.on)('resize', o, window);
        }
        exports.mutationBuffer = i;
        var f = ['INPUT', 'TEXTAREA', 'SELECT'];
        exports.INPUT_TAGS = f;
        var d = new WeakMap();
        function v(t, r, o, a, i, u) {
          function s(e) {
            var t = e.target;
            if (
              t &&
              t.tagName &&
              !(f.indexOf(t.tagName) < 0) &&
              !(0, n.isBlocked)(t, r)
            ) {
              var u = t.type;
              if ('password' !== u && !t.classList.contains(o)) {
                var s = t.value,
                  l = !1;
                'radio' === u || 'checkbox' === u
                  ? (l = t.checked)
                  : (a[t.tagName.toLowerCase()] || a[u]) &&
                    (s = i ? i(s) : '*'.repeat(s.length)),
                  c(t, {text: s, isChecked: l});
                var p = t.name;
                'radio' === u &&
                  p &&
                  l &&
                  document
                    .querySelectorAll('input[type="radio"][name="' + p + '"]')
                    .forEach(function (e) {
                      e !== t && c(e, {text: e.value, isChecked: !l});
                    });
              }
            }
          }
          function c(r, o) {
            var a = d.get(r);
            if (!a || a.text !== o.text || a.isChecked !== o.isChecked) {
              d.set(r, o);
              var i = n.mirror.getId(r);
              t((0, e.__assign)((0, e.__assign)({}, o), {id: i}));
            }
          }
          var l = ('last' === u.input ? ['change'] : ['input', 'change']).map(
              function (e) {
                return (0, n.on)(e, s);
              }
            ),
            p = Object.getOwnPropertyDescriptor(
              HTMLInputElement.prototype,
              'value'
            ),
            v = [
              [HTMLInputElement.prototype, 'value'],
              [HTMLInputElement.prototype, 'checked'],
              [HTMLSelectElement.prototype, 'value'],
              [HTMLTextAreaElement.prototype, 'value'],
              [HTMLSelectElement.prototype, 'selectedIndex'],
            ];
          return (
            p &&
              p.set &&
              l.push.apply(
                l,
                (0, e.__spread)(
                  v.map(function (e) {
                    return (0, n.hookSetter)(e[0], e[1], {
                      set: function () {
                        s({target: this});
                      },
                    });
                  })
                )
              ),
            function () {
              l.forEach(function (e) {
                return e();
              });
            }
          );
        }
        function h(e) {
          var t = CSSStyleSheet.prototype.insertRule;
          CSSStyleSheet.prototype.insertRule = function (r, o) {
            var a = n.mirror.getId(this.ownerNode);
            return (
              -1 !== a && e({id: a, adds: [{rule: r, index: o}]}),
              t.apply(this, arguments)
            );
          };
          var r = CSSStyleSheet.prototype.deleteRule;
          return (
            (CSSStyleSheet.prototype.deleteRule = function (t) {
              var o = n.mirror.getId(this.ownerNode);
              return (
                -1 !== o && e({id: o, removes: [{index: t}]}),
                r.apply(this, arguments)
              );
            }),
            function () {
              (CSSStyleSheet.prototype.insertRule = t),
                (CSSStyleSheet.prototype.deleteRule = r);
            }
          );
        }
        function y(e, r) {
          var o = function (o) {
              return function (a) {
                var i = a.target;
                i &&
                  !(0, n.isBlocked)(i, r) &&
                  e({
                    type:
                      'play' === o
                        ? t.MediaInteractions.Play
                        : t.MediaInteractions.Pause,
                    id: n.mirror.getId(i),
                  });
              };
            },
            a = [(0, n.on)('play', o('play')), (0, n.on)('pause', o('pause'))];
          return function () {
            a.forEach(function (e) {
              return e();
            });
          };
        }
        function m(t, r) {
          var o,
            a,
            i = Object.getOwnPropertyNames(CanvasRenderingContext2D.prototype),
            u = [],
            s = function (o) {
              try {
                if ('function' != typeof CanvasRenderingContext2D.prototype[o])
                  return 'continue';
                var i = (0, n.patch)(
                  CanvasRenderingContext2D.prototype,
                  o,
                  function (a) {
                    return function () {
                      for (
                        var i = this, u = [], s = 0;
                        s < arguments.length;
                        s++
                      )
                        u[s] = arguments[s];
                      return (
                        (0, n.isBlocked)(this.canvas, r) ||
                          setTimeout(function () {
                            var r = (0, e.__spread)(u);
                            'drawImage' === o &&
                              r[0] &&
                              r[0] instanceof HTMLCanvasElement &&
                              (r[0] = r[0].toDataURL()),
                              t({
                                id: n.mirror.getId(i.canvas),
                                property: o,
                                args: r,
                              });
                          }, 0),
                        a.apply(this, u)
                      );
                    };
                  }
                );
                u.push(i);
              } catch (a) {
                var s = (0, n.hookSetter)(
                  CanvasRenderingContext2D.prototype,
                  o,
                  {
                    set: function (e) {
                      t({
                        id: n.mirror.getId(this.canvas),
                        property: o,
                        args: [e],
                        setter: !0,
                      });
                    },
                  }
                );
                u.push(s);
              }
            };
          try {
            for (
              var c = (0, e.__values)(i), l = c.next();
              !l.done;
              l = c.next()
            ) {
              s(l.value);
            }
          } catch (p) {
            o = {error: p};
          } finally {
            try {
              l && !l.done && (a = c.return) && a.call(c);
            } finally {
              if (o) throw o.error;
            }
          }
          return function () {
            u.forEach(function (e) {
              return e();
            });
          };
        }
        function g(e) {
          var t = [],
            r = new WeakMap(),
            o = FontFace;
          window.FontFace = function (e, t, n) {
            var a = new o(e, t, n);
            return (
              r.set(a, {
                family: e,
                buffer: 'string' != typeof t,
                descriptors: n,
                fontSource:
                  'string' == typeof t
                    ? t
                    : JSON.stringify(Array.from(new Uint8Array(t))),
              }),
              a
            );
          };
          var a = (0, n.patch)(document.fonts, 'add', function (t) {
            return function (n) {
              return (
                setTimeout(function () {
                  var t = r.get(n);
                  t && (e(t), r.delete(n));
                }, 0),
                t.apply(this, [n])
              );
            };
          });
          return (
            t.push(function () {
              window.FonFace = o;
            }),
            t.push(a),
            function () {
              t.forEach(function (e) {
                return e();
              });
            }
          );
        }
        function _(t, r) {
          var a,
            i,
            u = this,
            s = r.logger;
          if (!s) return function () {};
          var c = 0,
            l = [];
          if (r.level.includes('error') && window) {
            var p = window.onerror;
            (window.onerror = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              p && p.apply(u, e);
              var a = [];
              e[e.length - 1] instanceof Error &&
                (a = y(e[e.length - 1].stack, 0));
              var i = [(0, o.stringify)(e[0], r.stringifyOptions)];
              t({level: 'error', trace: a, payload: i});
            }),
              l.push(function () {
                window.onerror = p;
              });
          }
          try {
            for (
              var f = (0, e.__values)(r.level), d = f.next();
              !d.done;
              d = f.next()
            ) {
              var v = d.value;
              l.push(h(s, v));
            }
          } catch (m) {
            a = {error: m};
          } finally {
            try {
              d && !d.done && (i = f.return) && i.call(f);
            } finally {
              if (a) throw a.error;
            }
          }
          return function () {
            l.forEach(function (e) {
              return e();
            });
          };
          function h(a, i) {
            var u = this;
            return a[i]
              ? (0, n.patch)(a, i, function (n) {
                  return function () {
                    for (var a = [], s = 0; s < arguments.length; s++)
                      a[s] = arguments[s];
                    n.apply(u, a);
                    try {
                      var l = y(new Error().stack),
                        p = a.map(function (e) {
                          return (0, o.stringify)(e, r.stringifyOptions);
                        });
                      ++c < r.lengthThreshold
                        ? t({level: i, trace: l, payload: p})
                        : c === r.lengthThreshold &&
                          t({
                            level: 'warn',
                            trace: [],
                            payload: [
                              (0, o.stringify)(
                                'The number of log records reached the threshold.'
                              ),
                            ],
                          });
                    } catch (f) {
                      n.apply(
                        void 0,
                        (0, e.__spread)(['rrweb logger error:', f], a)
                      );
                    }
                  };
                })
              : function () {};
          }
          function y(e, t) {
            void 0 === t && (t = 1);
            var n = [];
            return (
              e &&
                (n = e
                  .split('at')
                  .splice(1 + t)
                  .map(function (e) {
                    return e.trim();
                  })),
              n
            );
          }
        }
        function C(t, n) {
          var r = t.mutationCb,
            o = t.mousemoveCb,
            a = t.mouseInteractionCb,
            i = t.scrollCb,
            u = t.viewportResizeCb,
            s = t.inputCb,
            c = t.mediaInteractionCb,
            l = t.styleSheetRuleCb,
            p = t.canvasMutationCb,
            f = t.fontCb,
            d = t.logCb;
          (t.mutationCb = function () {
            for (var t = [], o = 0; o < arguments.length; o++)
              t[o] = arguments[o];
            n.mutation && n.mutation.apply(n, (0, e.__spread)(t)),
              r.apply(void 0, (0, e.__spread)(t));
          }),
            (t.mousemoveCb = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              n.mousemove && n.mousemove.apply(n, (0, e.__spread)(t)),
                o.apply(void 0, (0, e.__spread)(t));
            }),
            (t.mouseInteractionCb = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              n.mouseInteraction &&
                n.mouseInteraction.apply(n, (0, e.__spread)(t)),
                a.apply(void 0, (0, e.__spread)(t));
            }),
            (t.scrollCb = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              n.scroll && n.scroll.apply(n, (0, e.__spread)(t)),
                i.apply(void 0, (0, e.__spread)(t));
            }),
            (t.viewportResizeCb = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              n.viewportResize && n.viewportResize.apply(n, (0, e.__spread)(t)),
                u.apply(void 0, (0, e.__spread)(t));
            }),
            (t.inputCb = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              n.input && n.input.apply(n, (0, e.__spread)(t)),
                s.apply(void 0, (0, e.__spread)(t));
            }),
            (t.mediaInteractionCb = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              n.mediaInteaction &&
                n.mediaInteaction.apply(n, (0, e.__spread)(t)),
                c.apply(void 0, (0, e.__spread)(t));
            }),
            (t.styleSheetRuleCb = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              n.styleSheetRule && n.styleSheetRule.apply(n, (0, e.__spread)(t)),
                l.apply(void 0, (0, e.__spread)(t));
            }),
            (t.canvasMutationCb = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              n.canvasMutation && n.canvasMutation.apply(n, (0, e.__spread)(t)),
                p.apply(void 0, (0, e.__spread)(t));
            }),
            (t.fontCb = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              n.font && n.font.apply(n, (0, e.__spread)(t)),
                f.apply(void 0, (0, e.__spread)(t));
            }),
            (t.logCb = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              n.log && n.log.apply(n, (0, e.__spread)(t)),
                d.apply(void 0, (0, e.__spread)(t));
            });
        }
        function b(e, t) {
          void 0 === t && (t = {}), C(e, t);
          var n = u(
              e.mutationCb,
              e.blockClass,
              e.blockSelector,
              e.inlineStylesheet,
              e.maskInputOptions,
              e.recordCanvas,
              e.slimDOMOptions
            ),
            r = s(e.mousemoveCb, e.sampling),
            o = c(e.mouseInteractionCb, e.blockClass, e.sampling),
            a = l(e.scrollCb, e.blockClass, e.sampling),
            i = p(e.viewportResizeCb),
            f = v(
              e.inputCb,
              e.blockClass,
              e.ignoreClass,
              e.maskInputOptions,
              e.maskInputFn,
              e.sampling
            ),
            d = y(e.mediaInteractionCb, e.blockClass),
            b = h(e.styleSheetRuleCb),
            w = e.recordCanvas
              ? m(e.canvasMutationCb, e.blockClass)
              : function () {},
            S = e.collectFonts ? g(e.fontCb) : function () {},
            I = e.logOptions ? _(e.logCb, e.logOptions) : function () {};
          return function () {
            n.disconnect(), r(), o(), a(), i(), f(), d(), b(), w(), S(), I();
          };
        }
      },
      {
        '../../node_modules/tslib/tslib.es6.js': 'e02N',
        '../types.js': 'ikLx',
        '../utils.js': 'CnRk',
        './mutation.js': 'AAml',
        './stringify.js': 'Co33',
      },
    ],
    '2txm': [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.default = void 0);
        var e,
          t = require('../../node_modules/tslib/tslib.es6.js'),
          n = require('../../node_modules/rrweb-snapshot/es/rrweb-snapshot.js'),
          o = require('../types.js'),
          a = require('../utils.js'),
          r = require('./observer.js');
        function i(e) {
          return (0, t.__assign)((0, t.__assign)({}, e), {
            timestamp: Date.now(),
          });
        }
        function s(s) {
          void 0 === s && (s = {});
          var u = s.emit,
            l = s.checkoutEveryNms,
            c = s.checkoutEveryNth,
            d = s.blockClass,
            m = void 0 === d ? 'rr-block' : d,
            p = s.blockSelector,
            v = void 0 === p ? null : p,
            f = s.ignoreClass,
            h = void 0 === f ? 'rr-ignore' : f,
            y = s.inlineStylesheet,
            g = void 0 === y || y,
            S = s.maskAllInputs,
            I = s.maskInputOptions,
            b = s.slimDOMOptions,
            E = s.maskInputFn,
            _ = s.hooks,
            w = s.packFn,
            C = s.sampling,
            T = void 0 === C ? {} : C,
            k = s.mousemoveWait,
            M = s.recordCanvas,
            O = void 0 !== M && M,
            F = s.collectFonts,
            z = void 0 !== F && F,
            L = s.recordLog,
            B = void 0 !== L && L;
          if (!u) throw new Error('emit function is required');
          void 0 !== k && void 0 === T.mousemove && (T.mousemove = k);
          var j,
            q =
              !0 === S
                ? {
                    color: !0,
                    date: !0,
                    'datetime-local': !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0,
                    textarea: !0,
                    select: !0,
                  }
                : void 0 !== I
                ? I
                : {},
            D =
              !0 === b || 'all' === b
                ? {
                    script: !0,
                    comment: !0,
                    headFavicon: !0,
                    headWhitespace: !0,
                    headMetaSocial: !0,
                    headMetaRobots: !0,
                    headMetaHttpEquiv: !0,
                    headMetaVerification: !0,
                    headMetaAuthorship: 'all' === b,
                    headMetaDescKeywords: 'all' === b,
                  }
                : b || {},
            x = {
              level: [
                'assert',
                'clear',
                'count',
                'countReset',
                'debug',
                'dir',
                'dirxml',
                'error',
                'group',
                'groupCollapsed',
                'groupEnd',
                'info',
                'log',
                'table',
                'time',
                'timeEnd',
                'timeLog',
                'trace',
                'warn',
              ],
              lengthThreshold: 1e3,
              logger: console,
            },
            R = B ? (!0 === B ? x : Object.assign({}, x, B)) : {};
          (0, a.polyfill)();
          var W = 0;
          function A(s) {
            var u, l, c, d;
            void 0 === s && (s = !1),
              e(
                i({
                  type: o.EventType.Meta,
                  data: {
                    href: window.location.href,
                    width: (0, a.getWindowWidth)(),
                    height: (0, a.getWindowHeight)(),
                  },
                }),
                s
              );
            var p = r.mutationBuffer.isFrozen();
            r.mutationBuffer.freeze();
            var f = (0, t.__read)(
                (0, n.snapshot)(document, {
                  blockClass: m,
                  blockSelector: v,
                  inlineStylesheet: g,
                  maskAllInputs: q,
                  slimDOM: D,
                  recordCanvas: O,
                }),
                2
              ),
              h = f[0],
              y = f[1];
            if (!h) return console.warn('Failed to snapshot the document');
            (a.mirror.map = y),
              e(
                i({
                  type: o.EventType.FullSnapshot,
                  data: {
                    node: h,
                    initialOffset: {
                      left:
                        void 0 !== window.pageXOffset
                          ? window.pageXOffset
                          : (null === document || void 0 === document
                              ? void 0
                              : document.documentElement.scrollLeft) ||
                            (null ===
                              (l =
                                null ===
                                  (u =
                                    null === document || void 0 === document
                                      ? void 0
                                      : document.body) || void 0 === u
                                  ? void 0
                                  : u.parentElement) || void 0 === l
                              ? void 0
                              : l.scrollLeft) ||
                            (null === document || void 0 === document
                              ? void 0
                              : document.body.scrollLeft) ||
                            0,
                      top:
                        void 0 !== window.pageYOffset
                          ? window.pageYOffset
                          : (null === document || void 0 === document
                              ? void 0
                              : document.documentElement.scrollTop) ||
                            (null ===
                              (d =
                                null ===
                                  (c =
                                    null === document || void 0 === document
                                      ? void 0
                                      : document.body) || void 0 === c
                                  ? void 0
                                  : c.parentElement) || void 0 === d
                              ? void 0
                              : d.scrollTop) ||
                            (null === document || void 0 === document
                              ? void 0
                              : document.body.scrollTop) ||
                            0,
                    },
                  },
                })
              ),
              p || (r.mutationBuffer.emit(), r.mutationBuffer.unfreeze());
          }
          e = function (e, t) {
            if (
              (!r.mutationBuffer.isFrozen() ||
                e.type === o.EventType.FullSnapshot ||
                (e.type === o.EventType.IncrementalSnapshot &&
                  e.data.source === o.IncrementalSource.Mutation) ||
                (r.mutationBuffer.emit(), r.mutationBuffer.unfreeze()),
              u(w ? w(e) : e, t),
              e.type === o.EventType.FullSnapshot)
            )
              (j = e), (W = 0);
            else if (e.type === o.EventType.IncrementalSnapshot) {
              W++;
              var n = c && W >= c,
                a = l && e.timestamp - j.timestamp > l;
              (n || a) && A(!0);
            }
          };
          try {
            var H = [];
            H.push(
              (0, a.on)('DOMContentLoaded', function () {
                e(i({type: o.EventType.DomContentLoaded, data: {}}));
              })
            );
            var N = function () {
              A(),
                H.push(
                  (0, r.initObservers)(
                    {
                      mutationCb: function (n) {
                        return e(
                          i({
                            type: o.EventType.IncrementalSnapshot,
                            data: (0, t.__assign)(
                              {source: o.IncrementalSource.Mutation},
                              n
                            ),
                          })
                        );
                      },
                      mousemoveCb: function (t, n) {
                        return e(
                          i({
                            type: o.EventType.IncrementalSnapshot,
                            data: {source: n, positions: t},
                          })
                        );
                      },
                      mouseInteractionCb: function (n) {
                        return e(
                          i({
                            type: o.EventType.IncrementalSnapshot,
                            data: (0, t.__assign)(
                              {source: o.IncrementalSource.MouseInteraction},
                              n
                            ),
                          })
                        );
                      },
                      scrollCb: function (n) {
                        return e(
                          i({
                            type: o.EventType.IncrementalSnapshot,
                            data: (0, t.__assign)(
                              {source: o.IncrementalSource.Scroll},
                              n
                            ),
                          })
                        );
                      },
                      viewportResizeCb: function (n) {
                        return e(
                          i({
                            type: o.EventType.IncrementalSnapshot,
                            data: (0, t.__assign)(
                              {source: o.IncrementalSource.ViewportResize},
                              n
                            ),
                          })
                        );
                      },
                      inputCb: function (n) {
                        return e(
                          i({
                            type: o.EventType.IncrementalSnapshot,
                            data: (0, t.__assign)(
                              {source: o.IncrementalSource.Input},
                              n
                            ),
                          })
                        );
                      },
                      mediaInteractionCb: function (n) {
                        return e(
                          i({
                            type: o.EventType.IncrementalSnapshot,
                            data: (0, t.__assign)(
                              {source: o.IncrementalSource.MediaInteraction},
                              n
                            ),
                          })
                        );
                      },
                      styleSheetRuleCb: function (n) {
                        return e(
                          i({
                            type: o.EventType.IncrementalSnapshot,
                            data: (0, t.__assign)(
                              {source: o.IncrementalSource.StyleSheetRule},
                              n
                            ),
                          })
                        );
                      },
                      canvasMutationCb: function (n) {
                        return e(
                          i({
                            type: o.EventType.IncrementalSnapshot,
                            data: (0, t.__assign)(
                              {source: o.IncrementalSource.CanvasMutation},
                              n
                            ),
                          })
                        );
                      },
                      fontCb: function (n) {
                        return e(
                          i({
                            type: o.EventType.IncrementalSnapshot,
                            data: (0, t.__assign)(
                              {source: o.IncrementalSource.Font},
                              n
                            ),
                          })
                        );
                      },
                      logCb: function (n) {
                        return e(
                          i({
                            type: o.EventType.IncrementalSnapshot,
                            data: (0, t.__assign)(
                              {source: o.IncrementalSource.Log},
                              n
                            ),
                          })
                        );
                      },
                      blockClass: m,
                      blockSelector: v,
                      ignoreClass: h,
                      maskInputOptions: q,
                      maskInputFn: E,
                      inlineStylesheet: g,
                      sampling: T,
                      recordCanvas: O,
                      collectFonts: z,
                      slimDOMOptions: D,
                      logOptions: R,
                    },
                    _
                  )
                );
            };
            return (
              'interactive' === document.readyState ||
              'complete' === document.readyState
                ? N()
                : H.push(
                    (0, a.on)(
                      'load',
                      function () {
                        e(i({type: o.EventType.Load, data: {}})), N();
                      },
                      window
                    )
                  ),
              function () {
                H.forEach(function (e) {
                  return e();
                });
              }
            );
          } catch (P) {
            console.warn(P);
          }
        }
        (s.addCustomEvent = function (t, n) {
          if (!e)
            throw new Error('please add custom event after start recording');
          e(i({type: o.EventType.Custom, data: {tag: t, payload: n}}));
        }),
          (s.freezePage = function () {
            r.mutationBuffer.freeze();
          });
        var u = s;
        exports.default = u;
      },
      {
        '../../node_modules/tslib/tslib.es6.js': 'e02N',
        '../../node_modules/rrweb-snapshot/es/rrweb-snapshot.js': 'Fzkz',
        '../types.js': 'ikLx',
        '../utils.js': 'CnRk',
        './observer.js': 'Q7zJ',
      },
    ],
    '9QLE': [
      function (require, module, exports) {
        'use strict';
        function e(e) {
          return (
            (e = e || Object.create(null)),
            {
              on: function (t, n) {
                (e[t] || (e[t] = [])).push(n);
              },
              off: function (t, n) {
                e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
              },
              emit: function (t, n) {
                (e[t] || []).slice().map(function (e) {
                  e(n);
                }),
                  (e['*'] || []).slice().map(function (e) {
                    e(t, n);
                  });
              },
            }
          );
        }
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.default = void 0);
        var t = e;
        exports.default = t;
      },
      {},
    ],
    UVom: [
      function (require, module, exports) {
        'use strict';
        function o(o, t) {
          if (
            (void 0 === o && (o = window),
            void 0 === t && (t = document),
            !(
              'scrollBehavior' in t.documentElement.style &&
              !0 !== o.__forceSmoothScrollPolyfill__
            ))
          ) {
            var l,
              e = o.HTMLElement || o.Element,
              r = 468,
              i = {
                scroll: o.scroll || o.scrollTo,
                scrollBy: o.scrollBy,
                elementScroll: e.prototype.scroll || n,
                scrollIntoView: e.prototype.scrollIntoView,
              },
              s =
                o.performance && o.performance.now
                  ? o.performance.now.bind(o.performance)
                  : Date.now,
              c =
                ((l = o.navigator.userAgent),
                new RegExp(['MSIE ', 'Trident/', 'Edge/'].join('|')).test(l)
                  ? 1
                  : 0);
            (o.scroll = o.scrollTo =
              function () {
                void 0 !== arguments[0] &&
                  (!0 !== f(arguments[0])
                    ? h.call(
                        o,
                        t.body,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : o.scrollX || o.pageXOffset,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : o.scrollY || o.pageYOffset
                      )
                    : i.scroll.call(
                        o,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : 'object' != typeof arguments[0]
                          ? arguments[0]
                          : o.scrollX || o.pageXOffset,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : o.scrollY || o.pageYOffset
                      ));
              }),
              (o.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (f(arguments[0])
                    ? i.scrollBy.call(
                        o,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : 'object' != typeof arguments[0]
                          ? arguments[0]
                          : 0,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                      )
                    : h.call(
                        o,
                        t.body,
                        ~~arguments[0].left + (o.scrollX || o.pageXOffset),
                        ~~arguments[0].top + (o.scrollY || o.pageYOffset)
                      ));
              }),
              (e.prototype.scroll = e.prototype.scrollTo =
                function () {
                  if (void 0 !== arguments[0])
                    if (!0 !== f(arguments[0])) {
                      var o = arguments[0].left,
                        t = arguments[0].top;
                      h.call(
                        this,
                        this,
                        void 0 === o ? this.scrollLeft : ~~o,
                        void 0 === t ? this.scrollTop : ~~t
                      );
                    } else {
                      if (
                        'number' == typeof arguments[0] &&
                        void 0 === arguments[1]
                      )
                        throw new SyntaxError('Value could not be converted');
                      i.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : 'object' != typeof arguments[0]
                          ? ~~arguments[0]
                          : this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : void 0 !== arguments[1]
                          ? ~~arguments[1]
                          : this.scrollTop
                      );
                    }
                }),
              (e.prototype.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (!0 !== f(arguments[0])
                    ? this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior,
                      })
                    : i.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left + this.scrollLeft
                          : ~~arguments[0] + this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top + this.scrollTop
                          : ~~arguments[1] + this.scrollTop
                      ));
              }),
              (e.prototype.scrollIntoView = function () {
                if (!0 !== f(arguments[0])) {
                  var l = (function (o) {
                      for (; o !== t.body && !1 === d(o); )
                        o = o.parentNode || o.host;
                      return o;
                    })(this),
                    e = l.getBoundingClientRect(),
                    r = this.getBoundingClientRect();
                  l !== t.body
                    ? (h.call(
                        this,
                        l,
                        l.scrollLeft + r.left - e.left,
                        l.scrollTop + r.top - e.top
                      ),
                      'fixed' !== o.getComputedStyle(l).position &&
                        o.scrollBy({
                          left: e.left,
                          top: e.top,
                          behavior: 'smooth',
                        }))
                    : o.scrollBy({
                        left: r.left,
                        top: r.top,
                        behavior: 'smooth',
                      });
                } else
                  i.scrollIntoView.call(
                    this,
                    void 0 === arguments[0] || arguments[0]
                  );
              });
          }
          function n(o, t) {
            (this.scrollLeft = o), (this.scrollTop = t);
          }
          function f(o) {
            if (
              null === o ||
              'object' != typeof o ||
              void 0 === o.behavior ||
              'auto' === o.behavior ||
              'instant' === o.behavior
            )
              return !0;
            if ('object' == typeof o && 'smooth' === o.behavior) return !1;
            throw new TypeError(
              'behavior member of ScrollOptions ' +
                o.behavior +
                ' is not a valid value for enumeration ScrollBehavior.'
            );
          }
          function a(o, t) {
            return 'Y' === t
              ? o.clientHeight + c < o.scrollHeight
              : 'X' === t
              ? o.clientWidth + c < o.scrollWidth
              : void 0;
          }
          function p(t, l) {
            var e = o.getComputedStyle(t, null)['overflow' + l];
            return 'auto' === e || 'scroll' === e;
          }
          function d(o) {
            var t = a(o, 'Y') && p(o, 'Y'),
              l = a(o, 'X') && p(o, 'X');
            return t || l;
          }
          function v(t) {
            var l,
              e,
              i,
              c,
              n = (s() - t.startTime) / r;
            (c = n = n > 1 ? 1 : n),
              (l = 0.5 * (1 - Math.cos(Math.PI * c))),
              (e = t.startX + (t.x - t.startX) * l),
              (i = t.startY + (t.y - t.startY) * l),
              t.method.call(t.scrollable, e, i),
              (e === t.x && i === t.y) || o.requestAnimationFrame(v.bind(o, t));
          }
          function h(l, e, r) {
            var c,
              f,
              a,
              p,
              d = s();
            l === t.body
              ? ((c = o),
                (f = o.scrollX || o.pageXOffset),
                (a = o.scrollY || o.pageYOffset),
                (p = i.scroll))
              : ((c = l), (f = l.scrollLeft), (a = l.scrollTop), (p = n)),
              v({
                scrollable: c,
                method: p,
                startTime: d,
                startX: f,
                startY: a,
                x: e,
                y: r,
              });
          }
        }
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.polyfill = o);
      },
      {},
    ],
    't2T/': [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.addDelay = n),
          (exports.Timer = void 0);
        var t = require('../../node_modules/tslib/tslib.es6.js'),
          e = require('../types.js'),
          i = (function () {
            function e(t, e) {
              void 0 === t && (t = []),
                (this.timeOffset = 0),
                (this.raf = null),
                (this.actions = t),
                (this.speed = e);
            }
            return (
              (e.prototype.addAction = function (t) {
                var e = this.findActionIndex(t);
                this.actions.splice(e, 0, t);
              }),
              (e.prototype.addActions = function (e) {
                var i;
                (i = this.actions).push.apply(i, (0, t.__spread)(e));
              }),
              (e.prototype.start = function () {
                this.actions.sort(function (t, e) {
                  return t.delay - e.delay;
                }),
                  (this.timeOffset = 0);
                var t = performance.now(),
                  e = this.actions,
                  i = this;
                this.raf = requestAnimationFrame(function n() {
                  var o = performance.now();
                  for (i.timeOffset += (o - t) * i.speed, t = o; e.length; ) {
                    var r = e[0];
                    if (!(i.timeOffset >= r.delay)) break;
                    e.shift(), r.doAction();
                  }
                  (e.length > 0 || i.liveMode) &&
                    (i.raf = requestAnimationFrame(n));
                });
              }),
              (e.prototype.clear = function () {
                this.raf && (cancelAnimationFrame(this.raf), (this.raf = null)),
                  (this.actions.length = 0);
              }),
              (e.prototype.setSpeed = function (t) {
                this.speed = t;
              }),
              (e.prototype.toggleLiveMode = function (t) {
                this.liveMode = t;
              }),
              (e.prototype.isActive = function () {
                return null !== this.raf;
              }),
              (e.prototype.findActionIndex = function (t) {
                for (var e = 0, i = this.actions.length - 1; e <= i; ) {
                  var n = Math.floor((e + i) / 2);
                  if (this.actions[n].delay < t.delay) e = n + 1;
                  else {
                    if (!(this.actions[n].delay > t.delay)) return n;
                    i = n - 1;
                  }
                }
                return e;
              }),
              e
            );
          })();
        function n(t, i) {
          if (
            t.type === e.EventType.IncrementalSnapshot &&
            t.data.source === e.IncrementalSource.MouseMove
          ) {
            var n = t.data.positions[0].timeOffset,
              o = t.timestamp + n;
            return (t.delay = o - i), o - i;
          }
          return (t.delay = t.timestamp - i), t.delay;
        }
        exports.Timer = i;
      },
      {'../../node_modules/tslib/tslib.es6.js': 'e02N', '../types.js': 'ikLx'},
    ],
    'kd+Q': [
      function (require, module, exports) {
        'use strict';
        var t;
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.assign = r),
          (exports.createMachine = c),
          (exports.interpret = f),
          (exports.InterpreterStatus = void 0),
          (exports.InterpreterStatus = t),
          (function (t) {
            (t[(t.NotStarted = 0)] = 'NotStarted'),
              (t[(t.Running = 1)] = 'Running'),
              (t[(t.Stopped = 2)] = 'Stopped');
          })(t || (exports.InterpreterStatus = t = {}));
        var n = {type: 'xstate.init'};
        function e(t) {
          return void 0 === t ? [] : [].concat(t);
        }
        function r(t) {
          return {type: 'xstate.assign', assignment: t};
        }
        function o(t, n) {
          return 'string' ==
            typeof (t = 'string' == typeof t && n && n[t] ? n[t] : t)
            ? {type: t}
            : 'function' == typeof t
            ? {type: t.name, exec: t}
            : t;
        }
        function i(t) {
          return function (n) {
            return t === n;
          };
        }
        function a(t) {
          return 'string' == typeof t ? {type: t} : t;
        }
        function u(t, n) {
          return {
            value: t,
            context: n,
            actions: [],
            changed: !1,
            matches: i(t),
          };
        }
        function c(t, n) {
          void 0 === n && (n = {});
          var r = {
            config: t,
            _options: n,
            initialState: {
              value: t.initial,
              actions: e(t.states[t.initial].entry).map(function (t) {
                return o(t, n.actions);
              }),
              context: t.context,
              matches: i(t.initial),
            },
            transition: function (n, c) {
              var s,
                f,
                p = 'string' == typeof n ? {value: n, context: t.context} : n,
                v = p.value,
                l = p.context,
                g = a(c),
                x = t.states[v];
              if (x.on) {
                var y = e(x.on[g.type]),
                  d = function (n) {
                    if (void 0 === n) return {value: u(v, l)};
                    var e = 'string' == typeof n ? {target: n} : n,
                      a = e.target,
                      c = void 0 === a ? v : a,
                      s = e.actions,
                      f = void 0 === s ? [] : s,
                      p = e.cond,
                      y = l;
                    if (
                      (void 0 === p
                        ? function () {
                            return !0;
                          }
                        : p)(l, g)
                    ) {
                      var d = t.states[c],
                        m = !1,
                        h = []
                          .concat(x.exit, f, d.entry)
                          .filter(function (t) {
                            return t;
                          })
                          .map(function (t) {
                            return o(t, r._options.actions);
                          })
                          .filter(function (t) {
                            if ('xstate.assign' === t.type) {
                              m = !0;
                              var n = Object.assign({}, y);
                              return (
                                'function' == typeof t.assignment
                                  ? (n = t.assignment(y, g))
                                  : Object.keys(t.assignment).forEach(function (
                                      e
                                    ) {
                                      n[e] =
                                        'function' == typeof t.assignment[e]
                                          ? t.assignment[e](y, g)
                                          : t.assignment[e];
                                    }),
                                (y = n),
                                !1
                              );
                            }
                            return !0;
                          });
                      return {
                        value: {
                          value: c,
                          context: y,
                          actions: h,
                          changed: c !== v || h.length > 0 || m,
                          matches: i(c),
                        },
                      };
                    }
                  };
                try {
                  for (
                    var m = (function (t) {
                        var n =
                            'function' == typeof Symbol && t[Symbol.iterator],
                          e = 0;
                        return n
                          ? n.call(t)
                          : {
                              next: function () {
                                return (
                                  t && e >= t.length && (t = void 0),
                                  {value: t && t[e++], done: !t}
                                );
                              },
                            };
                      })(y),
                      h = m.next();
                    !h.done;
                    h = m.next()
                  ) {
                    var S = d(h.value);
                    if ('object' == typeof S) return S.value;
                  }
                } catch (t) {
                  s = {error: t};
                } finally {
                  try {
                    h && !h.done && (f = m.return) && f.call(m);
                  } finally {
                    if (s) throw s.error;
                  }
                }
              }
              return u(v, l);
            },
          };
          return r;
        }
        var s = function (t, n) {
          return t.actions.forEach(function (e) {
            var r = e.exec;
            return r && r(t.context, n);
          });
        };
        function f(e) {
          var r = e.initialState,
            o = t.NotStarted,
            u = new Set(),
            c = {
              _machine: e,
              send: function (n) {
                o === t.Running &&
                  ((r = e.transition(r, n)),
                  s(r, a(n)),
                  u.forEach(function (t) {
                    return t(r);
                  }));
              },
              subscribe: function (t) {
                return (
                  u.add(t),
                  t(r),
                  {
                    unsubscribe: function () {
                      return u.delete(t);
                    },
                  }
                );
              },
              start: function (a) {
                if (a) {
                  var u =
                    'object' == typeof a
                      ? a
                      : {context: e.config.context, value: a};
                  r = {
                    value: u.value,
                    actions: [],
                    context: u.context,
                    matches: i(u.value),
                  };
                }
                return (o = t.Running), s(r, n), c;
              },
              stop: function () {
                return (o = t.Stopped), u.clear(), c;
              },
              get state() {
                return r;
              },
              get status() {
                return o;
              },
            };
          return c;
        }
      },
      {},
    ],
    tTcn: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.createPlayerService = s),
          (exports.createSpeedService = o),
          (exports.discardPriorSnapshots = i);
        var e = require('../../node_modules/tslib/tslib.es6.js'),
          t = require('../types.js'),
          a = require('../utils.js'),
          n = require('./timer.js'),
          r = require('../../node_modules/@xstate/fsm/es/index.js');
        function i(e, a) {
          for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n];
            if (r.type === t.EventType.Meta && r.timestamp <= a)
              return e.slice(n);
          }
          return e;
        }
        function s(s, o) {
          var l = o.getCastFn,
            d = o.emitter,
            p = (0, r.createMachine)(
              {
                id: 'player',
                context: s,
                initial: 'paused',
                states: {
                  playing: {
                    on: {
                      PAUSE: {target: 'paused', actions: ['pause']},
                      CAST_EVENT: {target: 'playing', actions: 'castEvent'},
                      END: {
                        target: 'paused',
                        actions: ['resetLastPlayedEvent', 'pause'],
                      },
                      ADD_EVENT: {target: 'playing', actions: ['addEvent']},
                    },
                  },
                  paused: {
                    on: {
                      PLAY: {
                        target: 'playing',
                        actions: ['recordTimeOffset', 'play'],
                      },
                      CAST_EVENT: {target: 'paused', actions: 'castEvent'},
                      TO_LIVE: {target: 'live', actions: ['startLive']},
                      ADD_EVENT: {target: 'paused', actions: ['addEvent']},
                    },
                  },
                  live: {
                    on: {
                      ADD_EVENT: {target: 'live', actions: ['addEvent']},
                      CAST_EVENT: {target: 'live', actions: ['castEvent']},
                    },
                  },
                },
              },
              {
                actions: {
                  castEvent: (0, r.assign)({
                    lastPlayedEvent: function (e, t) {
                      return 'CAST_EVENT' === t.type
                        ? t.payload.event
                        : e.lastPlayedEvent;
                    },
                  }),
                  recordTimeOffset: (0, r.assign)(function (t, a) {
                    var n = t.timeOffset;
                    return (
                      'payload' in a &&
                        'timeOffset' in a.payload &&
                        (n = a.payload.timeOffset),
                      (0, e.__assign)((0, e.__assign)({}, t), {
                        timeOffset: n,
                        baselineTime: t.events[0].timestamp + n,
                      })
                    );
                  }),
                  play: function (r) {
                    var s, o, p, c, u;
                    console.warn('play');
                    var v = r.timer,
                      m = r.events,
                      y = r.baselineTime,
                      E = r.lastPlayedEvent;
                    v.clear();
                    try {
                      for (
                        var f = (0, e.__values)(m), g = f.next();
                        !g.done;
                        g = f.next()
                      ) {
                        var _ = g.value;
                        (0, n.addDelay)(_, y);
                      }
                    } catch (P) {
                      s = {error: P};
                    } finally {
                      try {
                        g && !g.done && (o = f.return) && o.call(f);
                      } finally {
                        if (s) throw s.error;
                      }
                    }
                    var S = i(m, y),
                      T = new Array(),
                      A = function (e) {
                        var n = null == E ? void 0 : E.timestamp;
                        if (
                          ((null == E ? void 0 : E.type) ===
                            t.EventType.IncrementalSnapshot &&
                            E.data.source === t.IncrementalSource.MouseMove &&
                            (n =
                              E.timestamp +
                              (null === (u = E.data.positions[0]) ||
                              void 0 === u
                                ? void 0
                                : u.timeOffset)),
                          n && n < y && (e.timestamp <= n || e === E))
                        )
                          return 'continue';
                        var r = e.timestamp < y;
                        if (r && !(0, a.needCastInSyncMode)(e))
                          return 'continue';
                        var i = l(e, r);
                        r
                          ? i()
                          : T.push({
                              doAction: function () {
                                i(), d.emit(t.ReplayerEvents.EventCast, e);
                              },
                              delay: e.delay,
                            });
                      };
                    try {
                      for (
                        var D = (0, e.__values)(S), O = D.next();
                        !O.done;
                        O = D.next()
                      ) {
                        A((_ = O.value));
                      }
                    } catch (h) {
                      p = {error: h};
                    } finally {
                      try {
                        O && !O.done && (c = D.return) && c.call(D);
                      } finally {
                        if (p) throw p.error;
                      }
                    }
                    d.emit(t.ReplayerEvents.Flush), v.addActions(T), v.start();
                  },
                  pause: function (e) {
                    e.timer.clear();
                  },
                  resetLastPlayedEvent: (0, r.assign)(function (t) {
                    return (0,
                    e.__assign)((0, e.__assign)({}, t), {lastPlayedEvent: null});
                  }),
                  startLive: (0, r.assign)({
                    baselineTime: function (e, t) {
                      return (
                        e.timer.toggleLiveMode(!0),
                        e.timer.start(),
                        'TO_LIVE' === t.type && t.payload.baselineTime
                          ? t.payload.baselineTime
                          : Date.now()
                      );
                    },
                  }),
                  addEvent: (0, r.assign)(function (a, r) {
                    var i = a.baselineTime,
                      s = a.timer,
                      o = a.events;
                    if ('ADD_EVENT' === r.type) {
                      var p = r.payload.event;
                      (0, n.addDelay)(p, i), o.push(p);
                      var c = p.timestamp < i,
                        u = l(p, c);
                      c
                        ? u()
                        : (s.addAction({
                            doAction: function () {
                              u(), d.emit(t.ReplayerEvents.EventCast, p);
                            },
                            delay: p.delay,
                          }),
                          s.isActive() || s.start());
                    }
                    return (0, e.__assign)((0, e.__assign)({}, a), {events: o});
                  }),
                },
              }
            );
          return (0, r.interpret)(p);
        }
        function o(e) {
          var t = (0, r.createMachine)(
            {
              id: 'speed',
              context: e,
              initial: 'normal',
              states: {
                normal: {
                  on: {
                    FAST_FORWARD: {
                      target: 'skipping',
                      actions: ['recordSpeed', 'setSpeed'],
                    },
                    SET_SPEED: {target: 'normal', actions: ['setSpeed']},
                  },
                },
                skipping: {
                  on: {
                    BACK_TO_NORMAL: {
                      target: 'normal',
                      actions: ['restoreSpeed'],
                    },
                    SET_SPEED: {target: 'normal', actions: ['setSpeed']},
                  },
                },
              },
            },
            {
              actions: {
                setSpeed: function (e, t) {
                  'payload' in t && e.timer.setSpeed(t.payload.speed);
                },
                recordSpeed: (0, r.assign)({
                  normalSpeed: function (e) {
                    return e.timer.speed;
                  },
                }),
                restoreSpeed: function (e) {
                  e.timer.setSpeed(e.normalSpeed);
                },
              },
            }
          );
          return (0, r.interpret)(t);
        }
      },
      {
        '../../node_modules/tslib/tslib.es6.js': 'e02N',
        '../types.js': 'ikLx',
        '../utils.js': 'CnRk',
        './timer.js': 't2T/',
        '../../node_modules/@xstate/fsm/es/index.js': 'kd+Q',
      },
    ],
    'tjp/': [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.default = void 0);
        var e = function (e) {
            return [
              'iframe, .' + e + ' { background: #ccc }',
              'noscript { display: none !important; }',
            ];
          },
          t = e;
        exports.default = t;
      },
      {},
    ],
    OFnK: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.Replayer = void 0);
        var e = require('../../node_modules/tslib/tslib.es6.js'),
          t = require('../../node_modules/rrweb-snapshot/es/rrweb-snapshot.js'),
          r = require('../types.js'),
          n = require('../utils.js'),
          i = u(require('../../node_modules/mitt/dist/mitt.es.js')),
          a = require('./smoothscroll.js'),
          o = require('./timer.js'),
          s = require('./machine.js'),
          l = c(require('./styles/inject-style.js'));
        function c(e) {
          return e && e.__esModule ? e : {default: e};
        }
        function d() {
          if ('function' != typeof WeakMap) return null;
          var e = new WeakMap();
          return (
            (d = function () {
              return e;
            }),
            e
          );
        }
        function u(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e))
            return {default: e};
          var t = d();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, i, a)
                : (r[i] = e[i]);
            }
          return (r.default = e), t && t.set(e, r), r;
        }
        var p = 1e4,
          h = 5e3,
          m = i.default || i,
          f = '[replayer]',
          v = {
            duration: 500,
            lineCap: 'round',
            lineWidth: 3,
            strokeStyle: 'red',
          },
          y = {
            level: [
              'assert',
              'clear',
              'count',
              'countReset',
              'debug',
              'dir',
              'dirxml',
              'error',
              'group',
              'groupCollapsed',
              'groupEnd',
              'info',
              'log',
              'table',
              'time',
              'timeEnd',
              'timeLog',
              'trace',
              'warn',
            ],
            replayLogger: void 0,
          },
          g = (function () {
            function i(i, a) {
              var l = this;
              if (
                ((this.mouseTail = null),
                (this.tailPositions = []),
                (this.emitter = m()),
                (this.legacy_missingNodeRetryMap = {}),
                (this.imageMap = new Map()),
                !(null == a ? void 0 : a.liveMode) && i.length < 2)
              )
                throw new Error('Replayer need at least 2 events.');
              var c = {
                speed: 1,
                root: document.body,
                loadTimeout: 0,
                skipInactive: !1,
                showWarning: !0,
                showDebug: !1,
                blockClass: 'rr-block',
                liveMode: !1,
                insertStyleRules: [],
                triggerFocus: !0,
                UNSAFE_replayCanvas: !1,
                pauseAnimation: !0,
                mouseTail: v,
                logConfig: y,
              };
              (this.config = Object.assign({}, c, a)),
                this.config.logConfig.replayLogger ||
                  (this.config.logConfig.replayLogger =
                    this.getConsoleLogger()),
                (this.handleResize = this.handleResize.bind(this)),
                (this.getCastFn = this.getCastFn.bind(this)),
                this.emitter.on(r.ReplayerEvents.Resize, this.handleResize),
                this.setupDom(),
                (this.treeIndex = new n.TreeIndex()),
                (this.fragmentParentMap = new Map()),
                (this.elementStateMap = new Map()),
                this.emitter.on(r.ReplayerEvents.Flush, function () {
                  var r,
                    i,
                    a,
                    o,
                    s,
                    c,
                    d = l.treeIndex.flush(),
                    u = d.scrollMap,
                    p = d.inputMap;
                  try {
                    for (
                      var h = (0, e.__values)(l.fragmentParentMap.entries()),
                        m = h.next();
                      !m.done;
                      m = h.next()
                    ) {
                      var f = (0, e.__read)(m.value, 2),
                        v = f[0],
                        y = f[1];
                      (n.mirror.map[y.__sn.id] = y),
                        y.__sn.type === t.NodeType.Element &&
                          'textarea' === y.__sn.tagName &&
                          v.textContent &&
                          (y.value = v.textContent),
                        y.appendChild(v),
                        l.restoreState(y);
                    }
                  } catch (T) {
                    r = {error: T};
                  } finally {
                    try {
                      m && !m.done && (i = h.return) && i.call(h);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                  l.fragmentParentMap.clear(), l.elementStateMap.clear();
                  try {
                    for (
                      var g = (0, e.__values)(u.values()), b = g.next();
                      !b.done;
                      b = g.next()
                    ) {
                      var E = b.value;
                      l.applyScroll(E);
                    }
                  } catch (x) {
                    a = {error: x};
                  } finally {
                    try {
                      b && !b.done && (o = g.return) && o.call(g);
                    } finally {
                      if (a) throw a.error;
                    }
                  }
                  try {
                    for (
                      var w = (0, e.__values)(p.values()), S = w.next();
                      !S.done;
                      S = w.next()
                    ) {
                      E = S.value;
                      l.applyInput(E);
                    }
                  } catch (_) {
                    s = {error: _};
                  } finally {
                    try {
                      S && !S.done && (c = w.return) && c.call(w);
                    } finally {
                      if (s) throw s.error;
                    }
                  }
                });
              var d = new o.Timer(
                [],
                (null == a ? void 0 : a.speed) || c.speed
              );
              (this.service = (0, s.createPlayerService)(
                {
                  events: i.map(function (e) {
                    return a && a.unpackFn ? a.unpackFn(e) : e;
                  }),
                  timer: d,
                  timeOffset: 0,
                  baselineTime: 0,
                  lastPlayedEvent: null,
                },
                {getCastFn: this.getCastFn, emitter: this.emitter}
              )),
                this.service.start(),
                this.service.subscribe(function (e) {
                  l.emitter.emit(r.ReplayerEvents.StateChange, {player: e});
                }),
                (this.speedService = (0, s.createSpeedService)({
                  normalSpeed: -1,
                  timer: d,
                })),
                this.speedService.start(),
                this.speedService.subscribe(function (e) {
                  l.emitter.emit(r.ReplayerEvents.StateChange, {speed: e});
                });
              var u = this.service.state.context.events.find(function (e) {
                  return e.type === r.EventType.Meta;
                }),
                p = this.service.state.context.events.find(function (e) {
                  return e.type === r.EventType.FullSnapshot;
                });
              if (u) {
                var h = u.data,
                  f = h.width,
                  g = h.height;
                setTimeout(function () {
                  l.emitter.emit(r.ReplayerEvents.Resize, {
                    width: f,
                    height: g,
                  });
                }, 0);
              }
              p &&
                setTimeout(function () {
                  l.rebuildFullSnapshot(p),
                    l.iframe.contentWindow.scrollTo(p.data.initialOffset);
                }, 1);
            }
            return (
              Object.defineProperty(i.prototype, 'timer', {
                get: function () {
                  return this.service.state.context.timer;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (i.prototype.on = function (e, t) {
                return this.emitter.on(e, t), this;
              }),
              (i.prototype.setConfig = function (e) {
                var t = this;
                Object.keys(e).forEach(function (r) {
                  t.config[r] = e[r];
                }),
                  this.config.skipInactive || this.backToNormal(),
                  void 0 !== e.speed &&
                    this.speedService.send({
                      type: 'SET_SPEED',
                      payload: {speed: e.speed},
                    }),
                  void 0 !== e.mouseTail &&
                    (!1 === e.mouseTail
                      ? this.mouseTail &&
                        (this.mouseTail.style.display = 'none')
                      : (this.mouseTail ||
                          ((this.mouseTail = document.createElement('canvas')),
                          (this.mouseTail.width = Number.parseFloat(
                            this.iframe.width
                          )),
                          (this.mouseTail.height = Number.parseFloat(
                            this.iframe.height
                          )),
                          this.mouseTail.classList.add('replayer-mouse-tail'),
                          this.wrapper.insertBefore(
                            this.mouseTail,
                            this.iframe
                          )),
                        (this.mouseTail.style.display = 'inherit')));
              }),
              (i.prototype.getMetaData = function () {
                var e = this.service.state.context.events[0],
                  t =
                    this.service.state.context.events[
                      this.service.state.context.events.length - 1
                    ];
                return {
                  startTime: e.timestamp,
                  endTime: t.timestamp,
                  totalTime: t.timestamp - e.timestamp,
                };
              }),
              (i.prototype.getCurrentTime = function () {
                return this.timer.timeOffset + this.getTimeOffset();
              }),
              (i.prototype.getTimeOffset = function () {
                var e = this.service.state.context;
                return e.baselineTime - e.events[0].timestamp;
              }),
              (i.prototype.play = function (e) {
                var t;
                void 0 === e && (e = 0),
                  this.service.state.matches('paused')
                    ? this.service.send({
                        type: 'PLAY',
                        payload: {timeOffset: e},
                      })
                    : (this.service.send({type: 'PAUSE'}),
                      this.service.send({
                        type: 'PLAY',
                        payload: {timeOffset: e},
                      })),
                  null === (t = this.iframe.contentDocument) ||
                    void 0 === t ||
                    t
                      .getElementsByTagName('html')[0]
                      .classList.remove('rrweb-paused'),
                  this.emitter.emit(r.ReplayerEvents.Start);
              }),
              (i.prototype.pause = function (e) {
                var t;
                void 0 === e &&
                  this.service.state.matches('playing') &&
                  this.service.send({type: 'PAUSE'}),
                  'number' == typeof e &&
                    (this.play(e), this.service.send({type: 'PAUSE'})),
                  null === (t = this.iframe.contentDocument) ||
                    void 0 === t ||
                    t
                      .getElementsByTagName('html')[0]
                      .classList.add('rrweb-paused'),
                  this.emitter.emit(r.ReplayerEvents.Pause);
              }),
              (i.prototype.resume = function (e) {
                void 0 === e && (e = 0),
                  console.warn(
                    "The 'resume' will be departed in 1.0. Please use 'play' method which has the same interface."
                  ),
                  this.play(e),
                  this.emitter.emit(r.ReplayerEvents.Resume);
              }),
              (i.prototype.startLive = function (e) {
                this.service.send({
                  type: 'TO_LIVE',
                  payload: {baselineTime: e},
                });
              }),
              (i.prototype.addEvent = function (e) {
                var t = this,
                  r = this.config.unpackFn ? this.config.unpackFn(e) : e;
                Promise.resolve().then(function () {
                  return t.service.send({
                    type: 'ADD_EVENT',
                    payload: {event: r},
                  });
                });
              }),
              (i.prototype.enableInteract = function () {
                this.iframe.setAttribute('scrolling', 'auto'),
                  (this.iframe.style.pointerEvents = 'auto');
              }),
              (i.prototype.disableInteract = function () {
                this.iframe.setAttribute('scrolling', 'no'),
                  (this.iframe.style.pointerEvents = 'none');
              }),
              (i.prototype.setupDom = function () {
                (this.wrapper = document.createElement('div')),
                  this.wrapper.classList.add('replayer-wrapper'),
                  this.config.root.appendChild(this.wrapper),
                  (this.mouse = document.createElement('div')),
                  this.mouse.classList.add('replayer-mouse'),
                  this.wrapper.appendChild(this.mouse),
                  !1 !== this.config.mouseTail &&
                    ((this.mouseTail = document.createElement('canvas')),
                    this.mouseTail.classList.add('replayer-mouse-tail'),
                    (this.mouseTail.style.display = 'inherit'),
                    this.wrapper.appendChild(this.mouseTail)),
                  (this.iframe = document.createElement('iframe'));
                var e = ['allow-same-origin'];
                this.config.UNSAFE_replayCanvas && e.push('allow-scripts'),
                  (this.iframe.style.display = 'none'),
                  this.iframe.setAttribute('sandbox', e.join(' ')),
                  this.disableInteract(),
                  this.wrapper.appendChild(this.iframe),
                  this.iframe.contentWindow &&
                    this.iframe.contentDocument &&
                    ((0, a.polyfill)(
                      this.iframe.contentWindow,
                      this.iframe.contentDocument
                    ),
                    (0, n.polyfill)(this.iframe.contentWindow));
              }),
              (i.prototype.handleResize = function (t) {
                var r, n;
                this.iframe.style.display = 'inherit';
                try {
                  for (
                    var i = (0, e.__values)([this.mouseTail, this.iframe]),
                      a = i.next();
                    !a.done;
                    a = i.next()
                  ) {
                    var o = a.value;
                    o &&
                      (o.setAttribute('width', String(t.width)),
                      o.setAttribute('height', String(t.height)));
                  }
                } catch (s) {
                  r = {error: s};
                } finally {
                  try {
                    a && !a.done && (n = i.return) && n.call(i);
                  } finally {
                    if (r) throw r.error;
                  }
                }
              }),
              (i.prototype.getCastFn = function (t, n) {
                var i,
                  a = this;
                switch ((void 0 === n && (n = !1), t.type)) {
                  case r.EventType.DomContentLoaded:
                  case r.EventType.Load:
                    break;
                  case r.EventType.Custom:
                    i = function () {
                      a.emitter.emit(r.ReplayerEvents.CustomEvent, t);
                    };
                    break;
                  case r.EventType.Meta:
                    i = function () {
                      return a.emitter.emit(r.ReplayerEvents.Resize, {
                        width: t.data.width,
                        height: t.data.height,
                      });
                    };
                    break;
                  case r.EventType.FullSnapshot:
                    i = function () {
                      a.rebuildFullSnapshot(t, n),
                        a.iframe.contentWindow.scrollTo(t.data.initialOffset);
                    };
                    break;
                  case r.EventType.IncrementalSnapshot:
                    i = function () {
                      var i, o;
                      if (
                        (a.applyIncremental(t, n),
                        !n &&
                          (t === a.nextUserInteractionEvent &&
                            ((a.nextUserInteractionEvent = null),
                            a.backToNormal()),
                          a.config.skipInactive && !a.nextUserInteractionEvent))
                      ) {
                        try {
                          for (
                            var s = (0, e.__values)(
                                a.service.state.context.events
                              ),
                              l = s.next();
                            !l.done;
                            l = s.next()
                          ) {
                            var c = l.value;
                            if (
                              !(c.timestamp <= t.timestamp) &&
                              a.isUserInteraction(c)
                            ) {
                              c.delay - t.delay >
                                p * a.speedService.state.context.timer.speed &&
                                (a.nextUserInteractionEvent = c);
                              break;
                            }
                          }
                        } catch (m) {
                          i = {error: m};
                        } finally {
                          try {
                            l && !l.done && (o = s.return) && o.call(s);
                          } finally {
                            if (i) throw i.error;
                          }
                        }
                        if (a.nextUserInteractionEvent) {
                          var d = a.nextUserInteractionEvent.delay - t.delay,
                            u = {speed: Math.min(Math.round(d / h), 360)};
                          a.speedService.send({
                            type: 'FAST_FORWARD',
                            payload: u,
                          }),
                            a.emitter.emit(r.ReplayerEvents.SkipStart, u);
                        }
                      }
                    };
                }
                return function () {
                  if (
                    (i && i(),
                    a.service.send({type: 'CAST_EVENT', payload: {event: t}}),
                    t ===
                      a.service.state.context.events[
                        a.service.state.context.events.length - 1
                      ])
                  ) {
                    var e = function () {
                      a.backToNormal(),
                        a.service.send('END'),
                        a.emitter.emit(r.ReplayerEvents.Finish);
                    };
                    t.type === r.EventType.IncrementalSnapshot &&
                    t.data.source === r.IncrementalSource.MouseMove &&
                    t.data.positions.length
                      ? setTimeout(function () {
                          e();
                        }, Math.max(0, 50 - t.data.positions[0].timeOffset))
                      : e();
                  }
                };
              }),
              (i.prototype.rebuildFullSnapshot = function (e, i) {
                if ((void 0 === i && (i = !1), !this.iframe.contentDocument))
                  return console.warn(
                    'Looks like your replayer has been destroyed.'
                  );
                Object.keys(this.legacy_missingNodeRetryMap).length &&
                  console.warn(
                    'Found unresolved missing node map',
                    this.legacy_missingNodeRetryMap
                  ),
                  (this.legacy_missingNodeRetryMap = {}),
                  (n.mirror.map = (0, t.rebuild)(e.data.node, {
                    doc: this.iframe.contentDocument,
                  })[1]);
                var a = document.createElement('style'),
                  o = this.iframe.contentDocument,
                  s = o.documentElement,
                  c = o.head;
                s.insertBefore(a, c);
                var d = (0, l.default)(this.config.blockClass).concat(
                  this.config.insertStyleRules
                );
                this.config.pauseAnimation &&
                  d.push(
                    'html.rrweb-paused * { animation-play-state: paused !important; }'
                  ),
                  this.service.state.matches('playing') ||
                    this.iframe.contentDocument
                      .getElementsByTagName('html')[0]
                      .classList.add('rrweb-paused');
                for (var u = 0; u < d.length; u++) a.sheet.insertRule(d[u], u);
                this.emitter.emit(r.ReplayerEvents.FullsnapshotRebuilded, e),
                  i || this.waitForStylesheetLoad(),
                  this.config.UNSAFE_replayCanvas && this.preloadAllImages();
              }),
              (i.prototype.waitForStylesheetLoad = function () {
                var e,
                  t = this,
                  n =
                    null === (e = this.iframe.contentDocument) || void 0 === e
                      ? void 0
                      : e.head;
                if (n) {
                  var i,
                    a = new Set(),
                    o = this.service.state,
                    s = function () {
                      o = t.service.state;
                    };
                  this.emitter.on(r.ReplayerEvents.Start, s),
                    this.emitter.on(r.ReplayerEvents.Pause, s);
                  var l = function () {
                    t.emitter.off(r.ReplayerEvents.Start, s),
                      t.emitter.off(r.ReplayerEvents.Pause, s);
                  };
                  n
                    .querySelectorAll('link[rel="stylesheet"]')
                    .forEach(function (e) {
                      e.sheet ||
                        (a.add(e),
                        e.addEventListener('load', function () {
                          a.delete(e),
                            0 === a.size &&
                              -1 !== i &&
                              (o.matches('playing') &&
                                t.play(t.getCurrentTime()),
                              t.emitter.emit(
                                r.ReplayerEvents.LoadStylesheetEnd
                              ),
                              i && window.clearTimeout(i),
                              l());
                        }));
                    }),
                    a.size > 0 &&
                      (this.service.send({type: 'PAUSE'}),
                      this.emitter.emit(r.ReplayerEvents.LoadStylesheetStart),
                      (i = window.setTimeout(function () {
                        o.matches('playing') && t.play(t.getCurrentTime()),
                          (i = -1),
                          l();
                      }, this.config.loadTimeout)));
                }
              }),
              (i.prototype.preloadAllImages = function () {
                var t,
                  n,
                  i = this,
                  a = this.service.state,
                  o = function () {
                    a = i.service.state;
                  };
                this.emitter.on(r.ReplayerEvents.Start, o),
                  this.emitter.on(r.ReplayerEvents.Pause, o);
                var s = 0,
                  l = 0;
                try {
                  for (
                    var c = (0, e.__values)(this.service.state.context.events),
                      d = c.next();
                    !d.done;
                    d = c.next()
                  ) {
                    var u = d.value;
                    if (
                      u.type === r.EventType.IncrementalSnapshot &&
                      u.data.source === r.IncrementalSource.CanvasMutation &&
                      'drawImage' === u.data.property &&
                      'string' == typeof u.data.args[0] &&
                      !this.imageMap.has(u)
                    ) {
                      s++;
                      var p = document.createElement('img');
                      (p.src = u.data.args[0]),
                        this.imageMap.set(u, p),
                        (p.onload = function () {
                          ++l === s &&
                            (a.matches('playing') && i.play(i.getCurrentTime()),
                            i.emitter.off(r.ReplayerEvents.Start, o),
                            i.emitter.off(r.ReplayerEvents.Pause, o));
                        });
                    }
                  }
                } catch (h) {
                  t = {error: h};
                } finally {
                  try {
                    d && !d.done && (n = c.return) && n.call(c);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                s !== l && this.service.send({type: 'PAUSE'});
              }),
              (i.prototype.applyIncremental = function (e, t) {
                var i,
                  a,
                  o = this,
                  s = e.data;
                switch (s.source) {
                  case r.IncrementalSource.Mutation:
                    t &&
                      (s.adds.forEach(function (e) {
                        return o.treeIndex.add(e);
                      }),
                      s.texts.forEach(function (e) {
                        return o.treeIndex.text(e);
                      }),
                      s.attributes.forEach(function (e) {
                        return o.treeIndex.attribute(e);
                      }),
                      s.removes.forEach(function (e) {
                        return o.treeIndex.remove(e);
                      })),
                      this.applyMutation(s, t);
                    break;
                  case r.IncrementalSource.MouseMove:
                    if (t) {
                      var l = s.positions[s.positions.length - 1];
                      this.moveAndHover(s, l.x, l.y, l.id);
                    } else
                      s.positions.forEach(function (t) {
                        var r = {
                          doAction: function () {
                            o.moveAndHover(s, t.x, t.y, t.id);
                          },
                          delay:
                            t.timeOffset +
                            e.timestamp -
                            o.service.state.context.baselineTime,
                        };
                        o.timer.addAction(r);
                      }),
                        this.timer.addAction({
                          doAction: function () {},
                          delay:
                            e.delay -
                            (null === (i = s.positions[0]) || void 0 === i
                              ? void 0
                              : i.timeOffset),
                        });
                    break;
                  case r.IncrementalSource.MouseInteraction:
                    if (-1 === s.id) break;
                    var c = new Event(
                      r.MouseInteractions[s.type].toLowerCase()
                    );
                    if (!(g = n.mirror.getNode(s.id)))
                      return this.debugNodeNotFound(s, s.id);
                    this.emitter.emit(r.ReplayerEvents.MouseInteraction, {
                      type: s.type,
                      target: g,
                    });
                    var d = this.config.triggerFocus;
                    switch (s.type) {
                      case r.MouseInteractions.Blur:
                        'blur' in g && g.blur();
                        break;
                      case r.MouseInteractions.Focus:
                        d && g.focus && g.focus({preventScroll: !0});
                        break;
                      case r.MouseInteractions.Click:
                      case r.MouseInteractions.TouchStart:
                      case r.MouseInteractions.TouchEnd:
                        t ||
                          (this.moveAndHover(s, s.x, s.y, s.id),
                          this.mouse.classList.remove('active'),
                          this.mouse.offsetWidth,
                          this.mouse.classList.add('active'));
                        break;
                      default:
                        g.dispatchEvent(c);
                    }
                    break;
                  case r.IncrementalSource.Scroll:
                    if (-1 === s.id) break;
                    if (t) {
                      this.treeIndex.scroll(s);
                      break;
                    }
                    this.applyScroll(s);
                    break;
                  case r.IncrementalSource.ViewportResize:
                    this.emitter.emit(r.ReplayerEvents.Resize, {
                      width: s.width,
                      height: s.height,
                    });
                    break;
                  case r.IncrementalSource.Input:
                    if (-1 === s.id) break;
                    if (t) {
                      this.treeIndex.input(s);
                      break;
                    }
                    this.applyInput(s);
                    break;
                  case r.IncrementalSource.MediaInteraction:
                    if (!(g = n.mirror.getNode(s.id)))
                      return this.debugNodeNotFound(s, s.id);
                    var u = g;
                    try {
                      s.type === r.MediaInteractions.Pause && u.pause(),
                        s.type === r.MediaInteractions.Play &&
                          (u.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA
                            ? u.play()
                            : u.addEventListener('canplay', function () {
                                u.play();
                              }));
                    } catch (_) {
                      this.config.showWarning &&
                        console.warn(
                          'Failed to replay media interactions: ' +
                            (_.message || _)
                        );
                    }
                    break;
                  case r.IncrementalSource.StyleSheetRule:
                    if (!(g = n.mirror.getNode(s.id)))
                      return this.debugNodeNotFound(s, s.id);
                    var p = g,
                      h = g.parentNode,
                      m = this.fragmentParentMap.has(h),
                      f = void 0;
                    if (m) {
                      var v = this.fragmentParentMap.get(g.parentNode);
                      (f = document.createTextNode('')),
                        h.replaceChild(f, g),
                        v.appendChild(g);
                    }
                    var y = p.sheet;
                    s.adds &&
                      s.adds.forEach(function (t) {
                        var r = t.rule,
                          n = t.index;
                        try {
                          var i =
                            void 0 === n ? void 0 : Math.min(n, y.rules.length);
                          try {
                            y.insertRule(r, i);
                          } catch (e) {}
                        } catch (e) {}
                      }),
                      s.removes &&
                        s.removes.forEach(function (t) {
                          var r = t.index;
                          try {
                            y.deleteRule(r);
                          } catch (e) {}
                        }),
                      m && f && h.replaceChild(g, f);
                    break;
                  case r.IncrementalSource.CanvasMutation:
                    if (!this.config.UNSAFE_replayCanvas) return;
                    var g;
                    if (!(g = n.mirror.getNode(s.id)))
                      return this.debugNodeNotFound(s, s.id);
                    try {
                      var b = g.getContext('2d');
                      if (s.setter) return void (b[s.property] = s.args[0]);
                      var E = b[s.property];
                      if (
                        'drawImage' === s.property &&
                        'string' == typeof s.args[0]
                      ) {
                        var w = this.imageMap.get(e);
                        (s.args[0] = w), E.apply(b, s.args);
                      } else E.apply(b, s.args);
                    } catch (_) {
                      this.warnCanvasMutationFailed(s, s.id, _);
                    }
                    break;
                  case r.IncrementalSource.Font:
                    try {
                      var S = new FontFace(
                        s.family,
                        s.buffer
                          ? new Uint8Array(JSON.parse(s.fontSource))
                          : s.fontSource,
                        s.descriptors
                      );
                      null === (a = this.iframe.contentDocument) ||
                        void 0 === a ||
                        a.fonts.add(S);
                    } catch (_) {
                      this.config.showWarning && console.warn(_);
                    }
                    break;
                  case r.IncrementalSource.Log:
                    try {
                      var T = e.data,
                        x = this.config.logConfig.replayLogger;
                      'function' == typeof x[T.level] && x[T.level](T);
                    } catch (_) {
                      this.config.showWarning && console.warn(_);
                    }
                }
              }),
              (i.prototype.applyMutation = function (r, i) {
                var a,
                  o,
                  s = this;
                r.removes.forEach(function (e) {
                  var t = n.mirror.getNode(e.id);
                  if (!t) return s.warnNodeNotFound(r, e.id);
                  var i = n.mirror.getNode(e.parentId);
                  if (!i) return s.warnNodeNotFound(r, e.parentId);
                  if ((n.mirror.removeNodeFromMap(t), i)) {
                    var a = s.fragmentParentMap.get(i);
                    if (a && a.contains(t)) a.removeChild(t);
                    else if (s.fragmentParentMap.has(t)) {
                      var o = s.fragmentParentMap.get(t);
                      i.removeChild(o), s.fragmentParentMap.delete(t);
                    } else i.removeChild(t);
                  }
                });
                var l = (0, e.__assign)({}, this.legacy_missingNodeRetryMap),
                  c = [];
                var d = function (e) {
                  if (!s.iframe.contentDocument)
                    return console.warn(
                      'Looks like your replayer has been destroyed.'
                    );
                  var r = n.mirror.getNode(e.parentId);
                  if (!r) return c.push(e);
                  var a = null;
                  if (
                    (s.iframe.contentDocument.contains
                      ? (a = s.iframe.contentDocument.contains(r))
                      : s.iframe.contentDocument.body.contains &&
                        (a = s.iframe.contentDocument.body.contains(r)),
                    i && a)
                  ) {
                    var o = document.createDocumentFragment();
                    for (
                      n.mirror.map[e.parentId] = o,
                        s.fragmentParentMap.set(o, r),
                        s.storeState(r);
                      r.firstChild;

                    )
                      o.appendChild(r.firstChild);
                    r = o;
                  }
                  var d = null,
                    u = null;
                  if (
                    (e.previousId && (d = n.mirror.getNode(e.previousId)),
                    e.nextId && (u = n.mirror.getNode(e.nextId)),
                    (function (e) {
                      var t = null;
                      return (
                        e.nextId && (t = n.mirror.getNode(e.nextId)),
                        null !== e.nextId &&
                          void 0 !== e.nextId &&
                          -1 !== e.nextId &&
                          !t
                      );
                    })(e))
                  )
                    return c.push(e);
                  var p = (0, t.buildNodeWithSN)(e.node, {
                    doc: s.iframe.contentDocument,
                    map: n.mirror.map,
                    skipChild: !0,
                    hackCss: !0,
                  });
                  -1 !== e.previousId && -1 !== e.nextId
                    ? (d && d.nextSibling && d.nextSibling.parentNode
                        ? r.insertBefore(p, d.nextSibling)
                        : u && u.parentNode
                        ? r.contains(u)
                          ? r.insertBefore(p, u)
                          : r.insertBefore(p, null)
                        : r.appendChild(p),
                      (e.previousId || e.nextId) &&
                        s.legacy_resolveMissingNode(l, r, p, e))
                    : (l[e.node.id] = {node: p, mutation: e});
                };
                r.adds.forEach(function (e) {
                  d(e);
                });
                for (var u = Date.now(); c.length; ) {
                  var p = (0, n.queueToResolveTrees)(c);
                  if (((c.length = 0), Date.now() - u > 500)) {
                    this.warn(
                      'Timeout in the loop, please check the resolve tree data:',
                      p
                    );
                    break;
                  }
                  try {
                    for (
                      var h = ((a = void 0), (0, e.__values)(p)), m = h.next();
                      !m.done;
                      m = h.next()
                    ) {
                      var f = m.value;
                      n.mirror.getNode(f.value.parentId)
                        ? (0, n.iterateResolveTree)(f, function (e) {
                            d(e);
                          })
                        : this.debug(
                            'Drop resolve tree since there is no parent for the root node.',
                            f
                          );
                    }
                  } catch (v) {
                    a = {error: v};
                  } finally {
                    try {
                      m && !m.done && (o = h.return) && o.call(h);
                    } finally {
                      if (a) throw a.error;
                    }
                  }
                }
                Object.keys(l).length &&
                  Object.assign(this.legacy_missingNodeRetryMap, l),
                  r.texts.forEach(function (e) {
                    var t = n.mirror.getNode(e.id);
                    if (!t) return s.warnNodeNotFound(r, e.id);
                    s.fragmentParentMap.has(t) &&
                      (t = s.fragmentParentMap.get(t)),
                      (t.textContent = e.value);
                  }),
                  r.attributes.forEach(function (e) {
                    var t = n.mirror.getNode(e.id);
                    if (!t) return s.warnNodeNotFound(r, e.id);
                    for (var i in (s.fragmentParentMap.has(t) &&
                      (t = s.fragmentParentMap.get(t)),
                    e.attributes))
                      if ('string' == typeof i) {
                        var a = e.attributes[i];
                        try {
                          null !== a
                            ? t.setAttribute(i, a)
                            : t.removeAttribute(i);
                        } catch (o) {
                          s.config.showWarning &&
                            console.warn(
                              'An error occurred may due to the checkout feature.',
                              o
                            );
                        }
                      }
                  });
              }),
              (i.prototype.applyScroll = function (e) {
                var t = n.mirror.getNode(e.id);
                if (!t) return this.debugNodeNotFound(e, e.id);
                if (t === this.iframe.contentDocument)
                  this.iframe.contentWindow.scrollTo({
                    top: e.y,
                    left: e.x,
                    behavior: 'smooth',
                  });
                else
                  try {
                    (t.scrollTop = e.y), (t.scrollLeft = e.x);
                  } catch (r) {}
              }),
              (i.prototype.applyInput = function (e) {
                var t = n.mirror.getNode(e.id);
                if (!t) return this.debugNodeNotFound(e, e.id);
                try {
                  (t.checked = e.isChecked), (t.value = e.text);
                } catch (r) {}
              }),
              (i.prototype.formatMessage = function (e) {
                if (0 === e.trace.length) return '';
                var t = '\n\tat ';
                return (t += e.trace.join('\n\tat '));
              }),
              (i.prototype.getConsoleLogger = function () {
                var t,
                  r,
                  n = this,
                  i = {},
                  a = function (t) {
                    i[t] =
                      'trace' === t
                        ? function (t) {
                            (console.log.__rrweb_original__
                              ? console.log.__rrweb_original__
                              : console.log
                            ).apply(
                              void 0,
                              (0, e.__spread)(
                                t.payload.map(function (e) {
                                  return JSON.parse(e);
                                }),
                                [n.formatMessage(t)]
                              )
                            );
                          }
                        : function (r) {
                            (console[t].__rrweb_original__
                              ? console[t].__rrweb_original__
                              : console[t]
                            ).apply(
                              void 0,
                              (0, e.__spread)(
                                r.payload.map(function (e) {
                                  return JSON.parse(e);
                                }),
                                [n.formatMessage(r)]
                              )
                            );
                          };
                  };
                try {
                  for (
                    var o = (0, e.__values)(this.config.logConfig.level),
                      s = o.next();
                    !s.done;
                    s = o.next()
                  ) {
                    a(s.value);
                  }
                } catch (l) {
                  t = {error: l};
                } finally {
                  try {
                    s && !s.done && (r = o.return) && r.call(o);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return i;
              }),
              (i.prototype.legacy_resolveMissingNode = function (e, t, r, n) {
                var i = n.previousId,
                  a = n.nextId,
                  o = i && e[i],
                  s = a && e[a];
                if (o) {
                  var l = o,
                    c = l.node,
                    d = l.mutation;
                  t.insertBefore(c, r),
                    delete e[d.node.id],
                    delete this.legacy_missingNodeRetryMap[d.node.id],
                    (d.previousId || d.nextId) &&
                      this.legacy_resolveMissingNode(e, t, c, d);
                }
                if (s) {
                  var u = s;
                  (c = u.node), (d = u.mutation);
                  t.insertBefore(c, r.nextSibling),
                    delete e[d.node.id],
                    delete this.legacy_missingNodeRetryMap[d.node.id],
                    (d.previousId || d.nextId) &&
                      this.legacy_resolveMissingNode(e, t, c, d);
                }
              }),
              (i.prototype.moveAndHover = function (e, t, r, i) {
                (this.mouse.style.left = t + 'px'),
                  (this.mouse.style.top = r + 'px'),
                  this.drawMouseTail({x: t, y: r});
                var a = n.mirror.getNode(i);
                if (!a) return this.debugNodeNotFound(e, i);
                this.hoverElements(a);
              }),
              (i.prototype.drawMouseTail = function (e) {
                var t = this;
                if (this.mouseTail) {
                  var r =
                      !0 === this.config.mouseTail
                        ? v
                        : Object.assign({}, v, this.config.mouseTail),
                    n = r.lineCap,
                    i = r.lineWidth,
                    a = r.strokeStyle,
                    o = r.duration,
                    s = function () {
                      if (t.mouseTail) {
                        var e = t.mouseTail.getContext('2d');
                        e &&
                          t.tailPositions.length &&
                          (e.clearRect(
                            0,
                            0,
                            t.mouseTail.width,
                            t.mouseTail.height
                          ),
                          e.beginPath(),
                          (e.lineWidth = i),
                          (e.lineCap = n),
                          (e.strokeStyle = a),
                          e.moveTo(t.tailPositions[0].x, t.tailPositions[0].y),
                          t.tailPositions.forEach(function (t) {
                            return e.lineTo(t.x, t.y);
                          }),
                          e.stroke());
                      }
                    };
                  this.tailPositions.push(e),
                    s(),
                    setTimeout(function () {
                      (t.tailPositions = t.tailPositions.filter(function (t) {
                        return t !== e;
                      })),
                        s();
                    }, o / this.speedService.state.context.timer.speed);
                }
              }),
              (i.prototype.hoverElements = function (e) {
                var t;
                null === (t = this.iframe.contentDocument) ||
                  void 0 === t ||
                  t.querySelectorAll('.\\:hover').forEach(function (e) {
                    e.classList.remove(':hover');
                  });
                for (var r = e; r; )
                  r.classList && r.classList.add(':hover'),
                    (r = r.parentElement);
              }),
              (i.prototype.isUserInteraction = function (e) {
                return (
                  e.type === r.EventType.IncrementalSnapshot &&
                  e.data.source > r.IncrementalSource.Mutation &&
                  e.data.source <= r.IncrementalSource.Input
                );
              }),
              (i.prototype.backToNormal = function () {
                (this.nextUserInteractionEvent = null),
                  this.speedService.state.matches('normal') ||
                    (this.speedService.send({type: 'BACK_TO_NORMAL'}),
                    this.emitter.emit(r.ReplayerEvents.SkipEnd, {
                      speed: this.speedService.state.context.normalSpeed,
                    }));
              }),
              (i.prototype.storeState = function (t) {
                var r, n;
                if (t && t.nodeType === t.ELEMENT_NODE) {
                  var i = t;
                  (i.scrollLeft || i.scrollTop) &&
                    this.elementStateMap.set(t, {
                      scroll: [i.scrollLeft, i.scrollTop],
                    });
                  var a = i.children;
                  try {
                    for (
                      var o = (0, e.__values)(Array.from(a)), s = o.next();
                      !s.done;
                      s = o.next()
                    ) {
                      var l = s.value;
                      this.storeState(l);
                    }
                  } catch (c) {
                    r = {error: c};
                  } finally {
                    try {
                      s && !s.done && (n = o.return) && n.call(o);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                }
              }),
              (i.prototype.restoreState = function (t) {
                var r, n;
                if (t.nodeType === t.ELEMENT_NODE) {
                  var i = t;
                  if (this.elementStateMap.has(t)) {
                    var a = this.elementStateMap.get(t);
                    a.scroll &&
                      ((i.scrollLeft = a.scroll[0]),
                      (i.scrollTop = a.scroll[1])),
                      this.elementStateMap.delete(t);
                  }
                  var o = i.children;
                  try {
                    for (
                      var s = (0, e.__values)(Array.from(o)), l = s.next();
                      !l.done;
                      l = s.next()
                    ) {
                      var c = l.value;
                      this.restoreState(c);
                    }
                  } catch (d) {
                    r = {error: d};
                  } finally {
                    try {
                      l && !l.done && (n = s.return) && n.call(s);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                }
              }),
              (i.prototype.warnNodeNotFound = function (e, t) {
                this.warn("Node with id '" + t + "' not found in", e);
              }),
              (i.prototype.warnCanvasMutationFailed = function (e, t, r) {
                this.warn("Has error on update canvas '" + t + "'", e, r);
              }),
              (i.prototype.debugNodeNotFound = function (e, t) {
                this.debug(f, "Node with id '" + t + "' not found in", e);
              }),
              (i.prototype.warn = function () {
                for (var t = [], r = 0; r < arguments.length; r++)
                  t[r] = arguments[r];
                this.config.showWarning &&
                  console.warn.apply(console, (0, e.__spread)([f], t));
              }),
              (i.prototype.debug = function () {
                for (var t = [], r = 0; r < arguments.length; r++)
                  t[r] = arguments[r];
                this.config.showDebug &&
                  console.log.apply(console, (0, e.__spread)([f], t));
              }),
              i
            );
          })();
        exports.Replayer = g;
      },
      {
        '../../node_modules/tslib/tslib.es6.js': 'e02N',
        '../../node_modules/rrweb-snapshot/es/rrweb-snapshot.js': 'Fzkz',
        '../types.js': 'ikLx',
        '../utils.js': 'CnRk',
        '../../node_modules/mitt/dist/mitt.es.js': '9QLE',
        './smoothscroll.js': 'UVom',
        './timer.js': 't2T/',
        './machine.js': 'tTcn',
        './styles/inject-style.js': 'tjp/',
      },
    ],
    '455E': [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          Object.defineProperty(exports, 'EventType', {
            enumerable: !0,
            get: function () {
              return e.EventType;
            },
          }),
          Object.defineProperty(exports, 'IncrementalSource', {
            enumerable: !0,
            get: function () {
              return e.IncrementalSource;
            },
          }),
          Object.defineProperty(exports, 'MouseInteractions', {
            enumerable: !0,
            get: function () {
              return e.MouseInteractions;
            },
          }),
          Object.defineProperty(exports, 'ReplayerEvents', {
            enumerable: !0,
            get: function () {
              return e.ReplayerEvents;
            },
          }),
          Object.defineProperty(exports, 'mirror', {
            enumerable: !0,
            get: function () {
              return r.mirror;
            },
          }),
          Object.defineProperty(exports, 'record', {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, 'Replayer', {
            enumerable: !0,
            get: function () {
              return n.Replayer;
            },
          }),
          (exports.utils =
            exports.freezePage =
            exports.addCustomEvent =
              void 0);
        var e = require('./types.js'),
          r = i(require('./utils.js'));
        exports.utils = r;
        var t = o(require('./record/index.js')),
          n = require('./replay/index.js');
        function o(e) {
          return e && e.__esModule ? e : {default: e};
        }
        function u() {
          if ('function' != typeof WeakMap) return null;
          var e = new WeakMap();
          return (
            (u = function () {
              return e;
            }),
            e
          );
        }
        function i(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e))
            return {default: e};
          var r = u();
          if (r && r.has(e)) return r.get(e);
          var t = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(t, o, i)
                : (t[o] = e[o]);
            }
          return (t.default = e), r && r.set(e, t), t;
        }
        var a = t.default.addCustomEvent;
        exports.addCustomEvent = a;
        var p = t.default.freezePage;
        exports.freezePage = p;
      },
      {
        './types.js': 'ikLx',
        './utils.js': 'CnRk',
        './record/index.js': '2txm',
        './replay/index.js': 'OFnK',
      },
    ],
    ettW: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.strFromU8 = Y),
          (exports.strToU8 = X),
          (exports.unzlibSync = W),
          (exports.zlibSync = V);
        var r = Uint8Array,
          n = Uint16Array,
          e = Uint32Array,
          f = new r([
            0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
            4, 5, 5, 5, 5, 0, 0, 0, 0,
          ]),
          t = new r([
            0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
            10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
          ]),
          a = new r([
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ]),
          o = function (r, f) {
            for (var t = new n(31), a = 0; a < 31; ++a)
              t[a] = f += 1 << r[a - 1];
            var o = new e(t[30]);
            for (a = 1; a < 30; ++a)
              for (var i = t[a]; i < t[a + 1]; ++i)
                o[i] = ((i - t[a]) << 5) | a;
            return [t, o];
          },
          i = o(f, 2),
          v = i[0],
          u = i[1];
        (v[28] = 258), (u[258] = 28);
        for (
          var l = o(t, 0), s = l[0], c = l[1], h = new n(32768), w = 0;
          w < 32768;
          ++w
        ) {
          var d = ((43690 & w) >>> 1) | ((21845 & w) << 1);
          (d =
            ((61680 & (d = ((52428 & d) >>> 2) | ((13107 & d) << 2))) >>> 4) |
            ((3855 & d) << 4)),
            (h[w] = (((65280 & d) >>> 8) | ((255 & d) << 8)) >>> 1);
        }
        var g = function (r, e, f) {
            for (var t = r.length, a = 0, o = new n(e); a < t; ++a)
              ++o[r[a] - 1];
            var i,
              v = new n(e);
            for (a = 0; a < e; ++a) v[a] = (v[a - 1] + o[a - 1]) << 1;
            if (f) {
              i = new n(1 << e);
              var u = 15 - e;
              for (a = 0; a < t; ++a)
                if (r[a])
                  for (
                    var l = (a << 4) | r[a],
                      s = e - r[a],
                      c = v[r[a] - 1]++ << s,
                      w = c | ((1 << s) - 1);
                    c <= w;
                    ++c
                  )
                    i[h[c] >>> u] = l;
            } else
              for (i = new n(t), a = 0; a < t; ++a)
                i[a] = h[v[r[a] - 1]++] >>> (15 - r[a]);
            return i;
          },
          b = new r(288);
        for (w = 0; w < 144; ++w) b[w] = 8;
        for (w = 144; w < 256; ++w) b[w] = 9;
        for (w = 256; w < 280; ++w) b[w] = 7;
        for (w = 280; w < 288; ++w) b[w] = 8;
        var p = new r(32);
        for (w = 0; w < 32; ++w) p[w] = 5;
        var m = g(b, 9, 0),
          y = g(b, 9, 1),
          x = g(p, 5, 0),
          M = g(p, 5, 1),
          C = function (r) {
            for (var n = r[0], e = 1; e < r.length; ++e) r[e] > n && (n = r[e]);
            return n;
          },
          k = function (r, n, e) {
            var f = (n / 8) >> 0;
            return ((r[f] | (r[f + 1] << 8)) >>> (7 & n)) & e;
          },
          E = function (r, n) {
            var e = (n / 8) >> 0;
            return (r[e] | (r[e + 1] << 8) | (r[e + 2] << 16)) >>> (7 & n);
          },
          S = function (r) {
            return ((r / 8) >> 0) + (7 & r && 1);
          },
          A = function (f, t, a) {
            (null == t || t < 0) && (t = 0),
              (null == a || a > f.length) && (a = f.length);
            var o = new (f instanceof n ? n : f instanceof e ? e : r)(a - t);
            return o.set(f.subarray(t, a)), o;
          },
          F = function (n, e, o) {
            var i = n.length,
              u = !e || o,
              l = !o || o.i;
            o || (o = {}), e || (e = new r(3 * i));
            var c = function (n) {
                var f = e.length;
                if (n > f) {
                  var t = new r(Math.max(2 * f, n));
                  t.set(e), (e = t);
                }
              },
              h = o.f || 0,
              w = o.p || 0,
              d = o.b || 0,
              b = o.l,
              p = o.d,
              m = o.m,
              x = o.n;
            if (h && !b) return e;
            var F = 8 * i;
            do {
              if (!b) {
                o.f = h = k(n, w, 1);
                var O = k(n, w + 1, 3);
                if (((w += 3), !O)) {
                  var T = n[(I = S(w) + 4) - 4] | (n[I - 3] << 8),
                    U = I + T;
                  if (U > i) {
                    if (l) throw 'unexpected EOF';
                    break;
                  }
                  u && c(d + T),
                    e.set(n.subarray(I, U), d),
                    (o.b = d += T),
                    (o.p = w = 8 * U);
                  continue;
                }
                if (1 == O) (b = y), (p = M), (m = 9), (x = 5);
                else {
                  if (2 != O) throw 'invalid block type';
                  var z = k(n, w, 31) + 257,
                    D = k(n, w + 10, 15) + 4,
                    _ = z + k(n, w + 5, 31) + 1;
                  w += 14;
                  for (var j = new r(_), P = new r(19), q = 0; q < D; ++q)
                    P[a[q]] = k(n, w + 3 * q, 7);
                  w += 3 * D;
                  var B = C(P),
                    G = (1 << B) - 1;
                  if (!l && w + _ * (B + 7) > F) break;
                  var H = g(P, B, 1);
                  for (q = 0; q < _; ) {
                    var I,
                      J = H[k(n, w, G)];
                    if (((w += 15 & J), (I = J >>> 4) < 16)) j[q++] = I;
                    else {
                      var K = 0,
                        L = 0;
                      for (
                        16 == I
                          ? ((L = 3 + k(n, w, 3)), (w += 2), (K = j[q - 1]))
                          : 17 == I
                          ? ((L = 3 + k(n, w, 7)), (w += 3))
                          : 18 == I && ((L = 11 + k(n, w, 127)), (w += 7));
                        L--;

                      )
                        j[q++] = K;
                    }
                  }
                  var N = j.subarray(0, z),
                    Q = j.subarray(z);
                  (m = C(N)), (x = C(Q)), (b = g(N, m, 1)), (p = g(Q, x, 1));
                }
                if (w > F) throw 'unexpected EOF';
              }
              u && c(d + 131072);
              for (
                var R = (1 << m) - 1, V = (1 << x) - 1, W = m + x + 18;
                l || w + W < F;

              ) {
                var X = (K = b[E(n, w) & R]) >>> 4;
                if ((w += 15 & K) > F) throw 'unexpected EOF';
                if (!K) throw 'invalid length/literal';
                if (X < 256) e[d++] = X;
                else {
                  if (256 == X) {
                    b = null;
                    break;
                  }
                  var Y = X - 254;
                  if (X > 264) {
                    var Z = f[(q = X - 257)];
                    (Y = k(n, w, (1 << Z) - 1) + v[q]), (w += Z);
                  }
                  var $ = p[E(n, w) & V],
                    rr = $ >>> 4;
                  if (!$) throw 'invalid distance';
                  w += 15 & $;
                  Q = s[rr];
                  if (rr > 3) {
                    Z = t[rr];
                    (Q += E(n, w) & ((1 << Z) - 1)), (w += Z);
                  }
                  if (w > F) throw 'unexpected EOF';
                  u && c(d + 131072);
                  for (var nr = d + Y; d < nr; d += 4)
                    (e[d] = e[d - Q]),
                      (e[d + 1] = e[d + 1 - Q]),
                      (e[d + 2] = e[d + 2 - Q]),
                      (e[d + 3] = e[d + 3 - Q]);
                  d = nr;
                }
              }
              (o.l = b),
                (o.p = w),
                (o.b = d),
                b && ((h = 1), (o.m = m), (o.d = p), (o.n = x));
            } while (!h);
            return d == e.length ? e : A(e, 0, d);
          },
          O = function (r, n, e) {
            e <<= 7 & n;
            var f = (n / 8) >> 0;
            (r[f] |= e), (r[f + 1] |= e >>> 8);
          },
          T = function (r, n, e) {
            e <<= 7 & n;
            var f = (n / 8) >> 0;
            (r[f] |= e), (r[f + 1] |= e >>> 8), (r[f + 2] |= e >>> 16);
          },
          U = function (e, f) {
            for (var t = [], a = 0; a < e.length; ++a)
              e[a] && t.push({s: a, f: e[a]});
            var o = t.length,
              i = t.slice();
            if (!o) return [new r(0), 0];
            if (1 == o) {
              var v = new r(t[0].s + 1);
              return (v[t[0].s] = 1), [v, 1];
            }
            t.sort(function (r, n) {
              return r.f - n.f;
            }),
              t.push({s: -1, f: 25001});
            var u = t[0],
              l = t[1],
              s = 0,
              c = 1,
              h = 2;
            for (t[0] = {s: -1, f: u.f + l.f, l: u, r: l}; c != o - 1; )
              (u = t[t[s].f < t[h].f ? s++ : h++]),
                (l = t[s != c && t[s].f < t[h].f ? s++ : h++]),
                (t[c++] = {s: -1, f: u.f + l.f, l: u, r: l});
            var w = i[0].s;
            for (a = 1; a < o; ++a) i[a].s > w && (w = i[a].s);
            var d = new n(w + 1),
              g = z(t[c - 1], d, 0);
            if (g > f) {
              a = 0;
              var b = 0,
                p = g - f,
                m = 1 << p;
              for (
                i.sort(function (r, n) {
                  return d[n.s] - d[r.s] || r.f - n.f;
                });
                a < o;
                ++a
              ) {
                var y = i[a].s;
                if (!(d[y] > f)) break;
                (b += m - (1 << (g - d[y]))), (d[y] = f);
              }
              for (b >>>= p; b > 0; ) {
                var x = i[a].s;
                d[x] < f ? (b -= 1 << (f - d[x]++ - 1)) : ++a;
              }
              for (; a >= 0 && b; --a) {
                var M = i[a].s;
                d[M] == f && (--d[M], ++b);
              }
              g = f;
            }
            return [new r(d), g];
          },
          z = function (r, n, e) {
            return -1 == r.s
              ? Math.max(z(r.l, n, e + 1), z(r.r, n, e + 1))
              : (n[r.s] = e);
          },
          D = function (r) {
            for (var e = r.length; e && !r[--e]; );
            for (
              var f = new n(++e),
                t = 0,
                a = r[0],
                o = 1,
                i = function (r) {
                  f[t++] = r;
                },
                v = 1;
              v <= e;
              ++v
            )
              if (r[v] == a && v != e) ++o;
              else {
                if (!a && o > 2) {
                  for (; o > 138; o -= 138) i(32754);
                  o > 2 &&
                    (i(
                      o > 10 ? ((o - 11) << 5) | 28690 : ((o - 3) << 5) | 12305
                    ),
                    (o = 0));
                } else if (o > 3) {
                  for (i(a), --o; o > 6; o -= 6) i(8304);
                  o > 2 && (i(((o - 3) << 5) | 8208), (o = 0));
                }
                for (; o--; ) i(a);
                (o = 1), (a = r[v]);
              }
            return [f.subarray(0, t), e];
          },
          _ = function (r, n) {
            for (var e = 0, f = 0; f < n.length; ++f) e += r[f] * n[f];
            return e;
          },
          j = function (r, n, e) {
            var f = e.length,
              t = S(n + 2);
            (r[t] = 255 & f),
              (r[t + 1] = f >>> 8),
              (r[t + 2] = 255 ^ r[t]),
              (r[t + 3] = 255 ^ r[t + 1]);
            for (var a = 0; a < f; ++a) r[t + a + 4] = e[a];
            return 8 * (t + 4 + f);
          },
          P = function (r, e, o, i, v, u, l, s, c, h, w) {
            O(e, w++, o), ++v[256];
            for (
              var d = U(v, 15),
                y = d[0],
                M = d[1],
                C = U(u, 15),
                k = C[0],
                E = C[1],
                S = D(y),
                A = S[0],
                F = S[1],
                z = D(k),
                P = z[0],
                q = z[1],
                B = new n(19),
                G = 0;
              G < A.length;
              ++G
            )
              B[31 & A[G]]++;
            for (G = 0; G < P.length; ++G) B[31 & P[G]]++;
            for (
              var H = U(B, 7), I = H[0], J = H[1], K = 19;
              K > 4 && !I[a[K - 1]];
              --K
            );
            var L,
              N,
              Q,
              R,
              V = (h + 5) << 3,
              W = _(v, b) + _(u, p) + l,
              X =
                _(v, y) +
                _(u, k) +
                l +
                14 +
                3 * K +
                _(B, I) +
                (2 * B[16] + 3 * B[17] + 7 * B[18]);
            if (V <= W && V <= X) return j(e, w, r.subarray(c, c + h));
            if ((O(e, w, 1 + (X < W)), (w += 2), X < W)) {
              (L = g(y, M, 0)), (N = y), (Q = g(k, E, 0)), (R = k);
              var Y = g(I, J, 0);
              O(e, w, F - 257),
                O(e, w + 5, q - 1),
                O(e, w + 10, K - 4),
                (w += 14);
              for (G = 0; G < K; ++G) O(e, w + 3 * G, I[a[G]]);
              w += 3 * K;
              for (var Z = [A, P], $ = 0; $ < 2; ++$) {
                var rr = Z[$];
                for (G = 0; G < rr.length; ++G) {
                  var nr = 31 & rr[G];
                  O(e, w, Y[nr]),
                    (w += I[nr]),
                    nr > 15 &&
                      (O(e, w, (rr[G] >>> 5) & 127), (w += rr[G] >>> 12));
                }
              }
            } else (L = m), (N = b), (Q = x), (R = p);
            for (G = 0; G < s; ++G)
              if (i[G] > 255) {
                nr = (i[G] >>> 18) & 31;
                T(e, w, L[nr + 257]),
                  (w += N[nr + 257]),
                  nr > 7 && (O(e, w, (i[G] >>> 23) & 31), (w += f[nr]));
                var er = 31 & i[G];
                T(e, w, Q[er]),
                  (w += R[er]),
                  er > 3 && (T(e, w, (i[G] >>> 5) & 8191), (w += t[er]));
              } else T(e, w, L[i[G]]), (w += N[i[G]]);
            return T(e, w, L[256]), w + N[256];
          },
          q = new e([
            65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560,
            2117632,
          ]),
          B = new r(0),
          G = function (a, o, i, v, l, s) {
            var h = a.length,
              w = new r(v + h + 5 * (1 + Math.floor(h / 7e3)) + l),
              d = w.subarray(v, w.length - l),
              g = 0;
            if (!o || h < 8)
              for (var b = 0; b <= h; b += 65535) {
                var p = b + 65535;
                p < h
                  ? (g = j(d, g, a.subarray(b, p)))
                  : ((d[b] = s), (g = j(d, g, a.subarray(b, h))));
              }
            else {
              for (
                var m = q[o - 1],
                  y = m >>> 13,
                  x = 8191 & m,
                  M = (1 << i) - 1,
                  C = new n(32768),
                  k = new n(M + 1),
                  E = Math.ceil(i / 3),
                  F = 2 * E,
                  O = function (r) {
                    return (a[r] ^ (a[r + 1] << E) ^ (a[r + 2] << F)) & M;
                  },
                  T = new e(25e3),
                  U = new n(288),
                  z = new n(32),
                  D = 0,
                  _ = 0,
                  G = ((b = 0), 0),
                  H = 0,
                  I = 0;
                b < h;
                ++b
              ) {
                var J = O(b),
                  K = 32767 & b,
                  L = k[J];
                if (((C[K] = L), (k[J] = K), H <= b)) {
                  var N = h - b;
                  if ((D > 7e3 || G > 24576) && N > 423) {
                    (g = P(a, d, 0, T, U, z, _, G, I, b - I, g)),
                      (G = D = _ = 0),
                      (I = b);
                    for (var Q = 0; Q < 286; ++Q) U[Q] = 0;
                    for (Q = 0; Q < 30; ++Q) z[Q] = 0;
                  }
                  var R = 2,
                    V = 0,
                    W = x,
                    X = (K - L) & 32767;
                  if (N > 2 && J == O(b - X))
                    for (
                      var Y = Math.min(y, N) - 1,
                        Z = Math.min(32767, b),
                        $ = Math.min(258, N);
                      X <= Z && --W && K != L;

                    ) {
                      if (a[b + R] == a[b + R - X]) {
                        for (
                          var rr = 0;
                          rr < $ && a[b + rr] == a[b + rr - X];
                          ++rr
                        );
                        if (rr > R) {
                          if (((R = rr), (V = X), rr > Y)) break;
                          var nr = Math.min(X, rr - 2),
                            er = 0;
                          for (Q = 0; Q < nr; ++Q) {
                            var fr = (b - X + Q + 32768) & 32767,
                              tr = (fr - C[fr] + 32768) & 32767;
                            tr > er && ((er = tr), (L = fr));
                          }
                        }
                      }
                      X += ((K = L) - (L = C[K]) + 32768) & 32767;
                    }
                  if (V) {
                    T[G++] = 268435456 | (u[R] << 18) | c[V];
                    var ar = 31 & u[R],
                      or = 31 & c[V];
                    (_ += f[ar] + t[or]),
                      ++U[257 + ar],
                      ++z[or],
                      (H = b + R),
                      ++D;
                  } else (T[G++] = a[b]), ++U[a[b]];
                }
              }
              (g = P(a, d, s, T, U, z, _, G, I, b - I, g)),
                s || (g = j(d, g, B));
            }
            return A(w, 0, v + S(g) + l);
          },
          H = new e(256);
        for (w = 0; w < 256; ++w) {
          for (var I = w, J = 9; --J; ) I = (1 & I && 3988292384) ^ (I >>> 1);
          H[w] = I;
        }
        var K = function () {
            var r = 1,
              n = 0;
            return {
              p: function (e) {
                for (var f = r, t = n, a = e.length, o = 0; o != a; ) {
                  for (var i = Math.min(o + 5552, a); o < i; ++o)
                    t += f += e[o];
                  (f %= 65521), (t %= 65521);
                }
                (r = f), (n = t);
              },
              d: function () {
                return (
                  (((r >>> 8) << 16) | ((255 & n) << 8) | (n >>> 8)) +
                  2 * ((255 & r) << 23)
                );
              },
            };
          },
          L = function (r, n, e, f, t) {
            return G(
              r,
              null == n.level ? 6 : n.level,
              null == n.mem
                ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(r.length))))
                : 12 + n.mem,
              e,
              f,
              !t
            );
          },
          N = function (r, n, e) {
            for (; e; ++n) (r[n] = e), (e >>>= 8);
          },
          Q = function (r, n) {
            var e = n.level,
              f = 0 == e ? 0 : e < 6 ? 1 : 9 == e ? 3 : 2;
            (r[0] = 120), (r[1] = (f << 6) | (f ? 32 - 2 * f : 1));
          },
          R = function (r) {
            if (8 != (15 & r[0]) || r[0] >>> 4 > 7 || ((r[0] << 8) | r[1]) % 31)
              throw 'invalid zlib data';
            if (32 & r[1])
              throw 'invalid zlib data: preset dictionaries not supported';
          };
        function V(r, n) {
          void 0 === n && (n = {});
          var e = K();
          e.p(r);
          var f = L(r, n, 2, 4);
          return Q(f, n), N(f, f.length - 4, e.d()), f;
        }
        function W(r, n) {
          return F((R(r), r.subarray(2, -4)), n);
        }
        function X(n, e) {
          var f = n.length;
          if (!e && 'undefined' != typeof TextEncoder)
            return new TextEncoder().encode(n);
          for (
            var t = new r(n.length + (n.length >>> 1)),
              a = 0,
              o = function (r) {
                t[a++] = r;
              },
              i = 0;
            i < f;
            ++i
          ) {
            if (a + 5 > t.length) {
              var v = new r(a + 8 + ((f - i) << 1));
              v.set(t), (t = v);
            }
            var u = n.charCodeAt(i);
            u < 128 || e
              ? o(u)
              : u < 2048
              ? (o(192 | (u >>> 6)), o(128 | (63 & u)))
              : u > 55295 && u < 57344
              ? (o(
                  240 |
                    ((u =
                      (65536 + (1047552 & u)) | (1023 & n.charCodeAt(++i))) >>>
                      18)
                ),
                o(128 | ((u >>> 12) & 63)),
                o(128 | ((u >>> 6) & 63)),
                o(128 | (63 & u)))
              : (o(224 | (u >>> 12)),
                o(128 | ((u >>> 6) & 63)),
                o(128 | (63 & u)));
          }
          return A(t, 0, a);
        }
        function Y(r, n) {
          var e = '';
          if (!n && 'undefined' != typeof TextDecoder)
            return new TextDecoder().decode(r);
          for (var f = 0; f < r.length; ) {
            var t = r[f++];
            t < 128 || n
              ? (e += String.fromCharCode(t))
              : t < 224
              ? (e += String.fromCharCode(((31 & t) << 6) | (63 & r[f++])))
              : t < 240
              ? (e += String.fromCharCode(
                  ((15 & t) << 12) | ((63 & r[f++]) << 6) | (63 & r[f++])
                ))
              : ((t =
                  (((15 & t) << 18) |
                    ((63 & r[f++]) << 12) |
                    ((63 & r[f++]) << 6) |
                    (63 & r[f++])) -
                  65536),
                (e += String.fromCharCode(
                  55296 | (t >> 10),
                  56320 | (1023 & t)
                )));
          }
          return e;
        }
      },
      {},
    ],
    Nrur: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.MARK = void 0);
        var e = 'v1';
        exports.MARK = e;
      },
      {},
    ],
    hMPL: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.pack = void 0);
        var e = require('../../node_modules/tslib/tslib.es6.js'),
          s = require('../../node_modules/fflate/esm/browser.js'),
          r = require('./base.js'),
          t = function (t) {
            var i = (0, e.__assign)((0, e.__assign)({}, t), {v: r.MARK});
            return (0, s.strFromU8)(
              (0, s.zlibSync)((0, s.strToU8)(JSON.stringify(i))),
              !0
            );
          };
        exports.pack = t;
      },
      {
        '../../node_modules/tslib/tslib.es6.js': 'e02N',
        '../../node_modules/fflate/esm/browser.js': 'ettW',
        './base.js': 'Nrur',
      },
    ],
    ZBiE: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.unpack = void 0);
        var r = require('../../node_modules/fflate/esm/browser.js'),
          e = require('./base.js'),
          t = function (t) {
            if ('string' != typeof t) return t;
            try {
              if ((o = JSON.parse(t)).timestamp) return o;
            } catch (s) {}
            try {
              var o;
              if (
                (o = JSON.parse(
                  (0, r.strFromU8)((0, r.unzlibSync)((0, r.strToU8)(t, !0)))
                )).v === e.MARK
              )
                return o;
              throw new Error(
                'These events were packed with packer ' +
                  o.v +
                  ' which is incompatible with current packer ' +
                  e.MARK +
                  '.'
              );
            } catch (s) {
              throw (console.error(s), new Error('Unknown data format.'));
            }
          };
        exports.unpack = t;
      },
      {'../../node_modules/fflate/esm/browser.js': 'ettW', './base.js': 'Nrur'},
    ],
    swtb: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          Object.defineProperty(exports, 'EventType', {
            enumerable: !0,
            get: function () {
              return e.EventType;
            },
          }),
          Object.defineProperty(exports, 'IncrementalSource', {
            enumerable: !0,
            get: function () {
              return e.IncrementalSource;
            },
          }),
          Object.defineProperty(exports, 'MouseInteractions', {
            enumerable: !0,
            get: function () {
              return e.MouseInteractions;
            },
          }),
          Object.defineProperty(exports, 'ReplayerEvents', {
            enumerable: !0,
            get: function () {
              return e.ReplayerEvents;
            },
          }),
          Object.defineProperty(exports, 'mirror', {
            enumerable: !0,
            get: function () {
              return r.mirror;
            },
          }),
          Object.defineProperty(exports, 'record', {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(exports, 'Replayer', {
            enumerable: !0,
            get: function () {
              return n.Replayer;
            },
          }),
          Object.defineProperty(exports, 'addCustomEvent', {
            enumerable: !0,
            get: function () {
              return u.addCustomEvent;
            },
          }),
          Object.defineProperty(exports, 'freezePage', {
            enumerable: !0,
            get: function () {
              return u.freezePage;
            },
          }),
          Object.defineProperty(exports, 'pack', {
            enumerable: !0,
            get: function () {
              return o.pack;
            },
          }),
          Object.defineProperty(exports, 'unpack', {
            enumerable: !0,
            get: function () {
              return i.unpack;
            },
          }),
          (exports.utils = void 0);
        var e = require('../types.js'),
          r = a(require('../utils.js'));
        exports.utils = r;
        var t = p(require('../record/index.js')),
          n = require('../replay/index.js'),
          u = require('../index.js'),
          o = require('../packer/pack.js'),
          i = require('../packer/unpack.js');
        function p(e) {
          return e && e.__esModule ? e : {default: e};
        }
        function c() {
          if ('function' != typeof WeakMap) return null;
          var e = new WeakMap();
          return (
            (c = function () {
              return e;
            }),
            e
          );
        }
        function a(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e))
            return {default: e};
          var r = c();
          if (r && r.has(e)) return r.get(e);
          var t = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in e)
            if (Object.prototype.hasOwnProperty.call(e, u)) {
              var o = n ? Object.getOwnPropertyDescriptor(e, u) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(t, u, o)
                : (t[u] = e[u]);
            }
          return (t.default = e), r && r.set(e, t), t;
        }
      },
      {
        '../types.js': 'ikLx',
        '../utils.js': 'CnRk',
        '../record/index.js': '2txm',
        '../replay/index.js': 'OFnK',
        '../index.js': '455E',
        '../packer/pack.js': 'hMPL',
        '../packer/unpack.js': 'ZBiE',
      },
    ],
    Wr69: [
      function (require, module, exports) {
        function t(t) {
          if (t) return e(t);
        }
        function e(e) {
          for (var s in t.prototype) e[s] = t.prototype[s];
          return e;
        }
        'undefined' != typeof module && (module.exports = t),
          (t.prototype.on = t.prototype.addEventListener =
            function (t, e) {
              return (
                (this._callbacks = this._callbacks || {}),
                (this._callbacks['$' + t] =
                  this._callbacks['$' + t] || []).push(e),
                this
              );
            }),
          (t.prototype.once = function (t, e) {
            function s() {
              this.off(t, s), e.apply(this, arguments);
            }
            return (s.fn = e), this.on(t, s), this;
          }),
          (t.prototype.off =
            t.prototype.removeListener =
            t.prototype.removeAllListeners =
            t.prototype.removeEventListener =
              function (t, e) {
                if (
                  ((this._callbacks = this._callbacks || {}),
                  0 == arguments.length)
                )
                  return (this._callbacks = {}), this;
                var s,
                  r = this._callbacks['$' + t];
                if (!r) return this;
                if (1 == arguments.length)
                  return delete this._callbacks['$' + t], this;
                for (var i = 0; i < r.length; i++)
                  if ((s = r[i]) === e || s.fn === e) {
                    r.splice(i, 1);
                    break;
                  }
                return 0 === r.length && delete this._callbacks['$' + t], this;
              }),
          (t.prototype.emit = function (t) {
            this._callbacks = this._callbacks || {};
            for (
              var e = new Array(arguments.length - 1),
                s = this._callbacks['$' + t],
                r = 1;
              r < arguments.length;
              r++
            )
              e[r - 1] = arguments[r];
            if (s) {
              r = 0;
              for (var i = (s = s.slice(0)).length; r < i; ++r)
                s[r].apply(this, e);
            }
            return this;
          }),
          (t.prototype.listeners = function (t) {
            return (
              (this._callbacks = this._callbacks || {}),
              this._callbacks['$' + t] || []
            );
          }),
          (t.prototype.hasListeners = function (t) {
            return !!this.listeners(t).length;
          });
      },
      {},
    ],
    SQZr: [
      function (require, module, exports) {
        (module.exports = t),
          (t.default = t),
          (t.stable = o),
          (t.stableStringify = o);
        var r = [],
          e = [];
        function t(t, i, o) {
          var f;
          for (
            n(t, '', [], void 0),
              f =
                0 === e.length
                  ? JSON.stringify(t, i, o)
                  : JSON.stringify(t, u(i), o);
            0 !== r.length;

          ) {
            var l = r.pop();
            4 === l.length
              ? Object.defineProperty(l[0], l[1], l[3])
              : (l[0][l[1]] = l[2]);
          }
          return f;
        }
        function n(t, i, o, f) {
          var u;
          if ('object' == typeof t && null !== t) {
            for (u = 0; u < o.length; u++)
              if (o[u] === t) {
                var l = Object.getOwnPropertyDescriptor(f, i);
                return void (void 0 !== l.get
                  ? l.configurable
                    ? (Object.defineProperty(f, i, {value: '[Circular]'}),
                      r.push([f, i, t, l]))
                    : e.push([t, i])
                  : ((f[i] = '[Circular]'), r.push([f, i, t])));
              }
            if ((o.push(t), Array.isArray(t)))
              for (u = 0; u < t.length; u++) n(t[u], u, o, t);
            else {
              var a = Object.keys(t);
              for (u = 0; u < a.length; u++) {
                var c = a[u];
                n(t[c], c, o, t);
              }
            }
            o.pop();
          }
        }
        function i(r, e) {
          return r < e ? -1 : r > e ? 1 : 0;
        }
        function o(t, n, i) {
          var o,
            l = f(t, '', [], void 0) || t;
          for (
            o =
              0 === e.length
                ? JSON.stringify(l, n, i)
                : JSON.stringify(l, u(n), i);
            0 !== r.length;

          ) {
            var a = r.pop();
            4 === a.length
              ? Object.defineProperty(a[0], a[1], a[3])
              : (a[0][a[1]] = a[2]);
          }
          return o;
        }
        function f(t, n, o, u) {
          var l;
          if ('object' == typeof t && null !== t) {
            for (l = 0; l < o.length; l++)
              if (o[l] === t) {
                var a = Object.getOwnPropertyDescriptor(u, n);
                return void (void 0 !== a.get
                  ? a.configurable
                    ? (Object.defineProperty(u, n, {value: '[Circular]'}),
                      r.push([u, n, t, a]))
                    : e.push([t, n])
                  : ((u[n] = '[Circular]'), r.push([u, n, t])));
              }
            if ('function' == typeof t.toJSON) return;
            if ((o.push(t), Array.isArray(t)))
              for (l = 0; l < t.length; l++) f(t[l], l, o, t);
            else {
              var c = {},
                p = Object.keys(t).sort(i);
              for (l = 0; l < p.length; l++) {
                var s = p[l];
                f(t[s], s, o, t), (c[s] = t[s]);
              }
              if (void 0 === u) return c;
              r.push([u, n, t]), (u[n] = c);
            }
            o.pop();
          }
        }
        function u(r) {
          return (
            (r =
              void 0 !== r
                ? r
                : function (r, e) {
                    return e;
                  }),
            function (t, n) {
              if (e.length > 0)
                for (var i = 0; i < e.length; i++) {
                  var o = e[i];
                  if (o[1] === t && o[0] === n) {
                    (n = '[Circular]'), e.splice(i, 1);
                    break;
                  }
                }
              return r.call(this, t, n);
            }
          );
        }
      },
      {},
    ],
    jYt2: [
      function (require, module, exports) {
        'use strict';
        module.exports = function () {
          if (
            'function' != typeof Symbol ||
            'function' != typeof Object.getOwnPropertySymbols
          )
            return !1;
          if ('symbol' == typeof Symbol.iterator) return !0;
          var t = {},
            e = Symbol('test'),
            r = Object(e);
          if ('string' == typeof e) return !1;
          if ('[object Symbol]' !== Object.prototype.toString.call(e))
            return !1;
          if ('[object Symbol]' !== Object.prototype.toString.call(r))
            return !1;
          for (e in ((t[e] = 42), t)) return !1;
          if ('function' == typeof Object.keys && 0 !== Object.keys(t).length)
            return !1;
          if (
            'function' == typeof Object.getOwnPropertyNames &&
            0 !== Object.getOwnPropertyNames(t).length
          )
            return !1;
          var o = Object.getOwnPropertySymbols(t);
          if (1 !== o.length || o[0] !== e) return !1;
          if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
          if ('function' == typeof Object.getOwnPropertyDescriptor) {
            var n = Object.getOwnPropertyDescriptor(t, e);
            if (42 !== n.value || !0 !== n.enumerable) return !1;
          }
          return !0;
        };
      },
      {},
    ],
    NS5K: [
      function (require, module, exports) {
        'use strict';
        var o = 'undefined' != typeof Symbol && Symbol,
          e = require('./shams');
        module.exports = function () {
          return (
            'function' == typeof o &&
            'function' == typeof Symbol &&
            'symbol' == typeof o('foo') &&
            'symbol' == typeof Symbol('bar') &&
            e()
          );
        };
      },
      {'./shams': 'jYt2'},
    ],
    'B6/o': [
      function (require, module, exports) {
        'use strict';
        var t = 'Function.prototype.bind called on incompatible ',
          n = Array.prototype.slice,
          o = Object.prototype.toString,
          r = '[object Function]';
        module.exports = function (e) {
          var p = this;
          if ('function' != typeof p || o.call(p) !== r)
            throw new TypeError(t + p);
          for (
            var i,
              c = n.call(arguments, 1),
              a = Math.max(0, p.length - c.length),
              l = [],
              u = 0;
            u < a;
            u++
          )
            l.push('$' + u);
          if (
            ((i = Function(
              'binder',
              'return function (' +
                l.join(',') +
                '){ return binder.apply(this,arguments); }'
            )(function () {
              if (this instanceof i) {
                var t = p.apply(this, c.concat(n.call(arguments)));
                return Object(t) === t ? t : this;
              }
              return p.apply(e, c.concat(n.call(arguments)));
            })),
            p.prototype)
          ) {
            var y = function () {};
            (y.prototype = p.prototype),
              (i.prototype = new y()),
              (y.prototype = null);
          }
          return i;
        };
      },
      {},
    ],
    '58Ti': [
      function (require, module, exports) {
        'use strict';
        var e = require('./implementation');
        module.exports = Function.prototype.bind || e;
      },
      {'./implementation': 'B6/o'},
    ],
    ar57: [
      function (require, module, exports) {
        'use strict';
        var t = require('function-bind');
        module.exports = t.call(Function.call, Object.prototype.hasOwnProperty);
      },
      {'function-bind': '58Ti'},
    ],
    LiLl: [
      function (require, module, exports) {
        'use strict';
        var r,
          t = SyntaxError,
          e = Function,
          o = TypeError,
          n = function (r) {
            try {
              return e('"use strict"; return (' + r + ').constructor;')();
            } catch (t) {}
          },
          a = Object.getOwnPropertyDescriptor;
        if (a)
          try {
            a({}, '');
          } catch (U) {
            a = null;
          }
        var y = function () {
            throw new o();
          },
          p = a
            ? (function () {
                try {
                  return arguments.callee, y;
                } catch (r) {
                  try {
                    return a(arguments, 'callee').get;
                  } catch (t) {
                    return y;
                  }
                }
              })()
            : y,
          i = require('has-symbols')(),
          f =
            Object.getPrototypeOf ||
            function (r) {
              return r.__proto__;
            },
          c = {},
          u = 'undefined' == typeof Uint8Array ? r : f(Uint8Array),
          l = {
            '%AggregateError%':
              'undefined' == typeof AggregateError ? r : AggregateError,
            '%Array%': Array,
            '%ArrayBuffer%':
              'undefined' == typeof ArrayBuffer ? r : ArrayBuffer,
            '%ArrayIteratorPrototype%': i ? f([][Symbol.iterator]()) : r,
            '%AsyncFromSyncIteratorPrototype%': r,
            '%AsyncFunction%': c,
            '%AsyncGenerator%': c,
            '%AsyncGeneratorFunction%': c,
            '%AsyncIteratorPrototype%': c,
            '%Atomics%': 'undefined' == typeof Atomics ? r : Atomics,
            '%BigInt%': 'undefined' == typeof BigInt ? r : BigInt,
            '%Boolean%': Boolean,
            '%DataView%': 'undefined' == typeof DataView ? r : DataView,
            '%Date%': Date,
            '%decodeURI%': decodeURI,
            '%decodeURIComponent%': decodeURIComponent,
            '%encodeURI%': encodeURI,
            '%encodeURIComponent%': encodeURIComponent,
            '%Error%': Error,
            '%eval%': eval,
            '%EvalError%': EvalError,
            '%Float32Array%':
              'undefined' == typeof Float32Array ? r : Float32Array,
            '%Float64Array%':
              'undefined' == typeof Float64Array ? r : Float64Array,
            '%FinalizationRegistry%':
              'undefined' == typeof FinalizationRegistry
                ? r
                : FinalizationRegistry,
            '%Function%': e,
            '%GeneratorFunction%': c,
            '%Int8Array%': 'undefined' == typeof Int8Array ? r : Int8Array,
            '%Int16Array%': 'undefined' == typeof Int16Array ? r : Int16Array,
            '%Int32Array%': 'undefined' == typeof Int32Array ? r : Int32Array,
            '%isFinite%': isFinite,
            '%isNaN%': isNaN,
            '%IteratorPrototype%': i ? f(f([][Symbol.iterator]())) : r,
            '%JSON%': 'object' == typeof JSON ? JSON : r,
            '%Map%': 'undefined' == typeof Map ? r : Map,
            '%MapIteratorPrototype%':
              'undefined' != typeof Map && i
                ? f(new Map()[Symbol.iterator]())
                : r,
            '%Math%': Math,
            '%Number%': Number,
            '%Object%': Object,
            '%parseFloat%': parseFloat,
            '%parseInt%': parseInt,
            '%Promise%': 'undefined' == typeof Promise ? r : Promise,
            '%Proxy%': 'undefined' == typeof Proxy ? r : Proxy,
            '%RangeError%': RangeError,
            '%ReferenceError%': ReferenceError,
            '%Reflect%': 'undefined' == typeof Reflect ? r : Reflect,
            '%RegExp%': RegExp,
            '%Set%': 'undefined' == typeof Set ? r : Set,
            '%SetIteratorPrototype%':
              'undefined' != typeof Set && i
                ? f(new Set()[Symbol.iterator]())
                : r,
            '%SharedArrayBuffer%':
              'undefined' == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
            '%String%': String,
            '%StringIteratorPrototype%': i ? f(''[Symbol.iterator]()) : r,
            '%Symbol%': i ? Symbol : r,
            '%SyntaxError%': t,
            '%ThrowTypeError%': p,
            '%TypedArray%': u,
            '%TypeError%': o,
            '%Uint8Array%': 'undefined' == typeof Uint8Array ? r : Uint8Array,
            '%Uint8ClampedArray%':
              'undefined' == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
            '%Uint16Array%':
              'undefined' == typeof Uint16Array ? r : Uint16Array,
            '%Uint32Array%':
              'undefined' == typeof Uint32Array ? r : Uint32Array,
            '%URIError%': URIError,
            '%WeakMap%': 'undefined' == typeof WeakMap ? r : WeakMap,
            '%WeakRef%': 'undefined' == typeof WeakRef ? r : WeakRef,
            '%WeakSet%': 'undefined' == typeof WeakSet ? r : WeakSet,
          },
          s = function r(t) {
            var e;
            if ('%AsyncFunction%' === t) e = n('async function () {}');
            else if ('%GeneratorFunction%' === t) e = n('function* () {}');
            else if ('%AsyncGeneratorFunction%' === t)
              e = n('async function* () {}');
            else if ('%AsyncGenerator%' === t) {
              var o = r('%AsyncGeneratorFunction%');
              o && (e = o.prototype);
            } else if ('%AsyncIteratorPrototype%' === t) {
              var a = r('%AsyncGenerator%');
              a && (e = f(a.prototype));
            }
            return (l[t] = e), e;
          },
          A = {
            '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
            '%ArrayPrototype%': ['Array', 'prototype'],
            '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
            '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
            '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
            '%ArrayProto_values%': ['Array', 'prototype', 'values'],
            '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
            '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
            '%AsyncGeneratorPrototype%': [
              'AsyncGeneratorFunction',
              'prototype',
              'prototype',
            ],
            '%BooleanPrototype%': ['Boolean', 'prototype'],
            '%DataViewPrototype%': ['DataView', 'prototype'],
            '%DatePrototype%': ['Date', 'prototype'],
            '%ErrorPrototype%': ['Error', 'prototype'],
            '%EvalErrorPrototype%': ['EvalError', 'prototype'],
            '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
            '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
            '%FunctionPrototype%': ['Function', 'prototype'],
            '%Generator%': ['GeneratorFunction', 'prototype'],
            '%GeneratorPrototype%': [
              'GeneratorFunction',
              'prototype',
              'prototype',
            ],
            '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
            '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
            '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
            '%JSONParse%': ['JSON', 'parse'],
            '%JSONStringify%': ['JSON', 'stringify'],
            '%MapPrototype%': ['Map', 'prototype'],
            '%NumberPrototype%': ['Number', 'prototype'],
            '%ObjectPrototype%': ['Object', 'prototype'],
            '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
            '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
            '%PromisePrototype%': ['Promise', 'prototype'],
            '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
            '%Promise_all%': ['Promise', 'all'],
            '%Promise_reject%': ['Promise', 'reject'],
            '%Promise_resolve%': ['Promise', 'resolve'],
            '%RangeErrorPrototype%': ['RangeError', 'prototype'],
            '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
            '%RegExpPrototype%': ['RegExp', 'prototype'],
            '%SetPrototype%': ['Set', 'prototype'],
            '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
            '%StringPrototype%': ['String', 'prototype'],
            '%SymbolPrototype%': ['Symbol', 'prototype'],
            '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
            '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
            '%TypeErrorPrototype%': ['TypeError', 'prototype'],
            '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
            '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
            '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
            '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
            '%URIErrorPrototype%': ['URIError', 'prototype'],
            '%WeakMapPrototype%': ['WeakMap', 'prototype'],
            '%WeakSetPrototype%': ['WeakSet', 'prototype'],
          },
          d = require('function-bind'),
          P = require('has'),
          g = d.call(Function.call, Array.prototype.concat),
          m = d.call(Function.apply, Array.prototype.splice),
          S = d.call(Function.call, String.prototype.replace),
          E = d.call(Function.call, String.prototype.slice),
          I =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          F = /\\(\\)?/g,
          h = function (r) {
            var e = E(r, 0, 1),
              o = E(r, -1);
            if ('%' === e && '%' !== o)
              throw new t('invalid intrinsic syntax, expected closing `%`');
            if ('%' === o && '%' !== e)
              throw new t('invalid intrinsic syntax, expected opening `%`');
            var n = [];
            return (
              S(r, I, function (r, t, e, o) {
                n[n.length] = e ? S(o, F, '$1') : t || r;
              }),
              n
            );
          },
          b = function (r, e) {
            var n,
              a = r;
            if ((P(A, a) && (a = '%' + (n = A[a])[0] + '%'), P(l, a))) {
              var y = l[a];
              if ((y === c && (y = s(a)), void 0 === y && !e))
                throw new o(
                  'intrinsic ' +
                    r +
                    ' exists, but is not available. Please file an issue!'
                );
              return {alias: n, name: a, value: y};
            }
            throw new t('intrinsic ' + r + ' does not exist!');
          };
        module.exports = function (r, e) {
          if ('string' != typeof r || 0 === r.length)
            throw new o('intrinsic name must be a non-empty string');
          if (arguments.length > 1 && 'boolean' != typeof e)
            throw new o('"allowMissing" argument must be a boolean');
          var n = h(r),
            y = n.length > 0 ? n[0] : '',
            p = b('%' + y + '%', e),
            i = p.name,
            f = p.value,
            c = !1,
            u = p.alias;
          u && ((y = u[0]), m(n, g([0, 1], u)));
          for (var s = 1, A = !0; s < n.length; s += 1) {
            var d = n[s],
              S = E(d, 0, 1),
              I = E(d, -1);
            if (
              ('"' === S ||
                "'" === S ||
                '`' === S ||
                '"' === I ||
                "'" === I ||
                '`' === I) &&
              S !== I
            )
              throw new t(
                'property names with quotes must have matching quotes'
              );
            if (
              (('constructor' !== d && A) || (c = !0),
              P(l, (i = '%' + (y += '.' + d) + '%')))
            )
              f = l[i];
            else if (null != f) {
              if (!(d in f)) {
                if (!e)
                  throw new o(
                    'base intrinsic for ' +
                      r +
                      ' exists, but the property is not available.'
                  );
                return;
              }
              if (a && s + 1 >= n.length) {
                var F = a(f, d);
                f =
                  (A = !!F) && 'get' in F && !('originalValue' in F.get)
                    ? F.get
                    : f[d];
              } else (A = P(f, d)), (f = f[d]);
              A && !c && (l[i] = f);
            }
          }
          return f;
        };
      },
      {'has-symbols': 'NS5K', 'function-bind': '58Ti', has: 'ar57'},
    ],
    y9YS: [
      function (require, module, exports) {
        'use strict';
        var e = require('function-bind'),
          t = require('get-intrinsic'),
          r = t('%Function.prototype.apply%'),
          n = t('%Function.prototype.call%'),
          l = t('%Reflect.apply%', !0) || e.call(n, r),
          o = t('%Object.getOwnPropertyDescriptor%', !0),
          p = t('%Object.defineProperty%', !0),
          u = t('%Math.max%');
        if (p)
          try {
            p({}, 'a', {value: 1});
          } catch (c) {
            p = null;
          }
        module.exports = function (t) {
          var r = l(e, n, arguments);
          o &&
            p &&
            o(r, 'length').configurable &&
            p(r, 'length', {
              value: 1 + u(0, t.length - (arguments.length - 1)),
            });
          return r;
        };
        var a = function () {
          return l(e, r, arguments);
        };
        p ? p(module.exports, 'apply', {value: a}) : (module.exports.apply = a);
      },
      {'function-bind': '58Ti', 'get-intrinsic': 'LiLl'},
    ],
    'tAi/': [
      function (require, module, exports) {
        'use strict';
        var r = require('get-intrinsic'),
          t = require('./'),
          e = t(r('String.prototype.indexOf'));
        module.exports = function (i, n) {
          var o = r(i, !!n);
          return 'function' == typeof o && e(i, '.prototype.') > -1 ? t(o) : o;
        };
      },
      {'get-intrinsic': 'LiLl', './': 'y9YS'},
    ],
    f88W: [function (require, module, exports) {}, {}],
    d9qy: [
      function (require, module, exports) {
        var t = 'function' == typeof Map && Map.prototype,
          e =
            Object.getOwnPropertyDescriptor && t
              ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
              : null,
          n = t && e && 'function' == typeof e.get ? e.get : null,
          r = t && Map.prototype.forEach,
          o = 'function' == typeof Set && Set.prototype,
          i =
            Object.getOwnPropertyDescriptor && o
              ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
              : null,
          u = o && i && 'function' == typeof i.get ? i.get : null,
          f = o && Set.prototype.forEach,
          c = 'function' == typeof WeakMap && WeakMap.prototype,
          a = c ? WeakMap.prototype.has : null,
          l = 'function' == typeof WeakSet && WeakSet.prototype,
          p = l ? WeakSet.prototype.has : null,
          y = Boolean.prototype.valueOf,
          g = Object.prototype.toString,
          s = Function.prototype.toString,
          h = String.prototype.match,
          b = 'function' == typeof BigInt ? BigInt.prototype.valueOf : null,
          S = Object.getOwnPropertySymbols,
          d = 'function' == typeof Symbol ? Symbol.prototype.toString : null,
          m = Object.prototype.propertyIsEnumerable,
          v = require('./util.inspect').custom,
          j = v && k(v) ? v : null;
        function O(t, e, n) {
          var r = 'double' === (n.quoteStyle || e) ? '"' : "'";
          return r + t + r;
        }
        function w(t) {
          return String(t).replace(/"/g, '&quot;');
        }
        function x(t) {
          return '[object Array]' === T(t);
        }
        function L(t) {
          return '[object Date]' === T(t);
        }
        function M(t) {
          return '[object RegExp]' === T(t);
        }
        function E(t) {
          return '[object Error]' === T(t);
        }
        function k(t) {
          return '[object Symbol]' === T(t);
        }
        function q(t) {
          return '[object String]' === T(t);
        }
        function W(t) {
          return '[object Number]' === T(t);
        }
        function I(t) {
          return '[object BigInt]' === T(t);
        }
        function N(t) {
          return '[object Boolean]' === T(t);
        }
        module.exports = function t(e, o, i, c) {
          var a = o || {};
          if (
            P(a, 'quoteStyle') &&
            'single' !== a.quoteStyle &&
            'double' !== a.quoteStyle
          )
            throw new TypeError(
              'option "quoteStyle" must be "single" or "double"'
            );
          if (
            P(a, 'maxStringLength') &&
            ('number' == typeof a.maxStringLength
              ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0
              : null !== a.maxStringLength)
          )
            throw new TypeError(
              'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
            );
          var l = !P(a, 'customInspect') || a.customInspect;
          if ('boolean' != typeof l)
            throw new TypeError(
              'option "customInspect", if provided, must be `true` or `false`'
            );
          if (
            P(a, 'indent') &&
            null !== a.indent &&
            '\t' !== a.indent &&
            !(parseInt(a.indent, 10) === a.indent && a.indent > 0)
          )
            throw new TypeError(
              'options "indent" must be "\\t", an integer > 0, or `null`'
            );
          if (void 0 === e) return 'undefined';
          if (null === e) return 'null';
          if ('boolean' == typeof e) return e ? 'true' : 'false';
          if ('string' == typeof e) return R(e, a);
          if ('number' == typeof e)
            return 0 === e ? (1 / 0 / e > 0 ? '0' : '-0') : String(e);
          if ('bigint' == typeof e) return String(e) + 'n';
          var p = void 0 === a.depth ? 5 : a.depth;
          if (
            (void 0 === i && (i = 0), i >= p && p > 0 && 'object' == typeof e)
          )
            return x(e) ? '[Array]' : '[Object]';
          var g = V(a, i);
          if (void 0 === c) c = [];
          else if (C(c, e) >= 0) return '[Circular]';
          function s(e, n, r) {
            if ((n && (c = c.slice()).push(n), r)) {
              var o = {depth: a.depth};
              return (
                P(a, 'quoteStyle') && (o.quoteStyle = a.quoteStyle),
                t(e, o, i + 1, c)
              );
            }
            return t(e, a, i + 1, c);
          }
          if ('function' == typeof e) {
            var h = B(e),
              S = Y(e, s);
            return (
              '[Function' +
              (h ? ': ' + h : ' (anonymous)') +
              ']' +
              (S.length > 0 ? ' { ' + S.join(', ') + ' }' : '')
            );
          }
          if (k(e)) {
            var m = d.call(e);
            return 'object' == typeof e ? G(m) : m;
          }
          if (H(e)) {
            for (
              var v = '<' + String(e.nodeName).toLowerCase(),
                A = e.attributes || [],
                T = 0;
              T < A.length;
              T++
            )
              v += ' ' + A[T].name + '=' + O(w(A[T].value), 'double', a);
            return (
              (v += '>'),
              e.childNodes && e.childNodes.length && (v += '...'),
              (v += '</' + String(e.nodeName).toLowerCase() + '>')
            );
          }
          if (x(e)) {
            if (0 === e.length) return '[]';
            var U = Y(e, s);
            return g && !Q(U)
              ? '[' + X(U, g) + ']'
              : '[ ' + U.join(', ') + ' ]';
          }
          if (E(e)) {
            var Z = Y(e, s);
            return 0 === Z.length
              ? '[' + String(e) + ']'
              : '{ [' + String(e) + '] ' + Z.join(', ') + ' }';
          }
          if ('object' == typeof e && l) {
            if (j && 'function' == typeof e[j]) return e[j]();
            if ('function' == typeof e.inspect) return e.inspect();
          }
          if (D(e)) {
            var _ = [];
            return (
              r.call(e, function (t, n) {
                _.push(s(n, e, !0) + ' => ' + s(t, e));
              }),
              K('Map', n.call(e), _, g)
            );
          }
          if (z(e)) {
            var tt = [];
            return (
              f.call(e, function (t) {
                tt.push(s(t, e));
              }),
              K('Set', u.call(e), tt, g)
            );
          }
          if ($(e)) return J('WeakMap');
          if (F(e)) return J('WeakSet');
          if (W(e)) return G(s(Number(e)));
          if (I(e)) return G(s(b.call(e)));
          if (N(e)) return G(y.call(e));
          if (q(e)) return G(s(String(e)));
          if (!L(e) && !M(e)) {
            var et = Y(e, s);
            return 0 === et.length
              ? '{}'
              : g
              ? '{' + X(et, g) + '}'
              : '{ ' + et.join(', ') + ' }';
          }
          return String(e);
        };
        var A =
          Object.prototype.hasOwnProperty ||
          function (t) {
            return t in this;
          };
        function P(t, e) {
          return A.call(t, e);
        }
        function T(t) {
          return g.call(t);
        }
        function B(t) {
          if (t.name) return t.name;
          var e = h.call(s.call(t), /^function\s*([\w$]+)/);
          return e ? e[1] : null;
        }
        function C(t, e) {
          if (t.indexOf) return t.indexOf(e);
          for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
          return -1;
        }
        function D(t) {
          if (!n || !t || 'object' != typeof t) return !1;
          try {
            n.call(t);
            try {
              u.call(t);
            } catch (e) {
              return !0;
            }
            return t instanceof Map;
          } catch (r) {}
          return !1;
        }
        function $(t) {
          if (!a || !t || 'object' != typeof t) return !1;
          try {
            a.call(t, a);
            try {
              p.call(t, p);
            } catch (e) {
              return !0;
            }
            return t instanceof WeakMap;
          } catch (n) {}
          return !1;
        }
        function z(t) {
          if (!u || !t || 'object' != typeof t) return !1;
          try {
            u.call(t);
            try {
              n.call(t);
            } catch (e) {
              return !0;
            }
            return t instanceof Set;
          } catch (r) {}
          return !1;
        }
        function F(t) {
          if (!p || !t || 'object' != typeof t) return !1;
          try {
            p.call(t, p);
            try {
              a.call(t, a);
            } catch (e) {
              return !0;
            }
            return t instanceof WeakSet;
          } catch (n) {}
          return !1;
        }
        function H(t) {
          return (
            !(!t || 'object' != typeof t) &&
            (('undefined' != typeof HTMLElement && t instanceof HTMLElement) ||
              ('string' == typeof t.nodeName &&
                'function' == typeof t.getAttribute))
          );
        }
        function R(t, e) {
          if (t.length > e.maxStringLength) {
            var n = t.length - e.maxStringLength,
              r = '... ' + n + ' more character' + (n > 1 ? 's' : '');
            return R(t.slice(0, e.maxStringLength), e) + r;
          }
          return O(
            t.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, U),
            'single',
            e
          );
        }
        function U(t) {
          var e = t.charCodeAt(0),
            n = {8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r'}[e];
          return n
            ? '\\' + n
            : '\\x' + (e < 16 ? '0' : '') + e.toString(16).toUpperCase();
        }
        function G(t) {
          return 'Object(' + t + ')';
        }
        function J(t) {
          return t + ' { ? }';
        }
        function K(t, e, n, r) {
          return t + ' (' + e + ') {' + (r ? X(n, r) : n.join(', ')) + '}';
        }
        function Q(t) {
          for (var e = 0; e < t.length; e++) if (C(t[e], '\n') >= 0) return !1;
          return !0;
        }
        function V(t, e) {
          var n;
          if ('\t' === t.indent) n = '\t';
          else {
            if (!('number' == typeof t.indent && t.indent > 0)) return null;
            n = Array(t.indent + 1).join(' ');
          }
          return {base: n, prev: Array(e + 1).join(n)};
        }
        function X(t, e) {
          if (0 === t.length) return '';
          var n = '\n' + e.prev + e.base;
          return n + t.join(',' + n) + '\n' + e.prev;
        }
        function Y(t, e) {
          var n = x(t),
            r = [];
          if (n) {
            r.length = t.length;
            for (var o = 0; o < t.length; o++) r[o] = P(t, o) ? e(t[o], t) : '';
          }
          for (var i in t)
            P(t, i) &&
              ((n && String(Number(i)) === i && i < t.length) ||
                (/[^\w$]/.test(i)
                  ? r.push(e(i, t) + ': ' + e(t[i], t))
                  : r.push(i + ': ' + e(t[i], t))));
          if ('function' == typeof S)
            for (var u = S(t), f = 0; f < u.length; f++)
              m.call(t, u[f]) && r.push('[' + e(u[f]) + ']: ' + e(t[u[f]], t));
          return r;
        }
      },
      {'./util.inspect': 'f88W'},
    ],
    iGu9: [
      function (require, module, exports) {
        'use strict';
        var e = require('get-intrinsic'),
          t = require('call-bind/callBound'),
          n = require('object-inspect'),
          r = e('%TypeError%'),
          o = e('%WeakMap%', !0),
          i = e('%Map%', !0),
          u = t('WeakMap.prototype.get', !0),
          f = t('WeakMap.prototype.set', !0),
          a = t('WeakMap.prototype.has', !0),
          p = t('Map.prototype.get', !0),
          c = t('Map.prototype.set', !0),
          s = t('Map.prototype.has', !0),
          l = function (e, t) {
            for (var n, r = e; null !== (n = r.next); r = n)
              if (n.key === t)
                return (r.next = n.next), (n.next = e.next), (e.next = n), n;
          },
          y = function (e, t) {
            var n = l(e, t);
            return n && n.value;
          },
          x = function (e, t, n) {
            var r = l(e, t);
            r ? (r.value = n) : (e.next = {key: t, next: e.next, value: n});
          },
          v = function (e, t) {
            return !!l(e, t);
          };
        module.exports = function () {
          var e,
            t,
            l,
            M = {
              assert: function (e) {
                if (!M.has(e))
                  throw new r('Side channel does not contain ' + n(e));
              },
              get: function (n) {
                if (
                  o &&
                  n &&
                  ('object' == typeof n || 'function' == typeof n)
                ) {
                  if (e) return u(e, n);
                } else if (i) {
                  if (t) return p(t, n);
                } else if (l) return y(l, n);
              },
              has: function (n) {
                if (
                  o &&
                  n &&
                  ('object' == typeof n || 'function' == typeof n)
                ) {
                  if (e) return a(e, n);
                } else if (i) {
                  if (t) return s(t, n);
                } else if (l) return v(l, n);
                return !1;
              },
              set: function (n, r) {
                o && n && ('object' == typeof n || 'function' == typeof n)
                  ? (e || (e = new o()), f(e, n, r))
                  : i
                  ? (t || (t = new i()), c(t, n, r))
                  : (l || (l = {key: {}, next: null}), x(l, n, r));
              },
            };
          return M;
        };
      },
      {
        'get-intrinsic': 'LiLl',
        'call-bind/callBound': 'tAi/',
        'object-inspect': 'd9qy',
      },
    ],
    mdM2: [
      function (require, module, exports) {
        'use strict';
        var t = String.prototype.replace,
          r = /%20/g,
          C = {RFC1738: 'RFC1738', RFC3986: 'RFC3986'};
        module.exports = {
          default: C.RFC3986,
          formatters: {
            RFC1738: function (C) {
              return t.call(C, r, '+');
            },
            RFC3986: function (t) {
              return String(t);
            },
          },
          RFC1738: C.RFC1738,
          RFC3986: C.RFC3986,
        };
      },
      {},
    ],
    HHEV: [
      function (require, module, exports) {
        'use strict';
        var r = require('./formats'),
          e = Object.prototype.hasOwnProperty,
          t = Array.isArray,
          o = (function () {
            for (var r = [], e = 0; e < 256; ++e)
              r.push(
                '%' + ((e < 16 ? '0' : '') + e.toString(16)).toUpperCase()
              );
            return r;
          })(),
          n = function (r) {
            for (; r.length > 1; ) {
              var e = r.pop(),
                o = e.obj[e.prop];
              if (t(o)) {
                for (var n = [], c = 0; c < o.length; ++c)
                  void 0 !== o[c] && n.push(o[c]);
                e.obj[e.prop] = n;
              }
            }
          },
          c = function (r, e) {
            for (
              var t = e && e.plainObjects ? Object.create(null) : {}, o = 0;
              o < r.length;
              ++o
            )
              void 0 !== r[o] && (t[o] = r[o]);
            return t;
          },
          u = function r(o, n, u) {
            if (!n) return o;
            if ('object' != typeof n) {
              if (t(o)) o.push(n);
              else {
                if (!o || 'object' != typeof o) return [o, n];
                ((u && (u.plainObjects || u.allowPrototypes)) ||
                  !e.call(Object.prototype, n)) &&
                  (o[n] = !0);
              }
              return o;
            }
            if (!o || 'object' != typeof o) return [o].concat(n);
            var f = o;
            return (
              t(o) && !t(n) && (f = c(o, u)),
              t(o) && t(n)
                ? (n.forEach(function (t, n) {
                    if (e.call(o, n)) {
                      var c = o[n];
                      c && 'object' == typeof c && t && 'object' == typeof t
                        ? (o[n] = r(c, t, u))
                        : o.push(t);
                    } else o[n] = t;
                  }),
                  o)
                : Object.keys(n).reduce(function (t, o) {
                    var c = n[o];
                    return (
                      e.call(t, o) ? (t[o] = r(t[o], c, u)) : (t[o] = c), t
                    );
                  }, f)
            );
          },
          f = function (r, e) {
            return Object.keys(e).reduce(function (r, t) {
              return (r[t] = e[t]), r;
            }, r);
          },
          p = function (r, e, t) {
            var o = r.replace(/\+/g, ' ');
            if ('iso-8859-1' === t)
              return o.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
              return decodeURIComponent(o);
            } catch (n) {
              return o;
            }
          },
          a = function (e, t, n, c, u) {
            if (0 === e.length) return e;
            var f = e;
            if (
              ('symbol' == typeof e
                ? (f = Symbol.prototype.toString.call(e))
                : 'string' != typeof e && (f = String(e)),
              'iso-8859-1' === n)
            )
              return escape(f).replace(/%u[0-9a-f]{4}/gi, function (r) {
                return '%26%23' + parseInt(r.slice(2), 16) + '%3B';
              });
            for (var p = '', a = 0; a < f.length; ++a) {
              var i = f.charCodeAt(a);
              45 === i ||
              46 === i ||
              95 === i ||
              126 === i ||
              (i >= 48 && i <= 57) ||
              (i >= 65 && i <= 90) ||
              (i >= 97 && i <= 122) ||
              (u === r.RFC1738 && (40 === i || 41 === i))
                ? (p += f.charAt(a))
                : i < 128
                ? (p += o[i])
                : i < 2048
                ? (p += o[192 | (i >> 6)] + o[128 | (63 & i)])
                : i < 55296 || i >= 57344
                ? (p +=
                    o[224 | (i >> 12)] +
                    o[128 | ((i >> 6) & 63)] +
                    o[128 | (63 & i)])
                : ((a += 1),
                  (i = 65536 + (((1023 & i) << 10) | (1023 & f.charCodeAt(a)))),
                  (p +=
                    o[240 | (i >> 18)] +
                    o[128 | ((i >> 12) & 63)] +
                    o[128 | ((i >> 6) & 63)] +
                    o[128 | (63 & i)]));
            }
            return p;
          },
          i = function (r) {
            for (
              var e = [{obj: {o: r}, prop: 'o'}], t = [], o = 0;
              o < e.length;
              ++o
            )
              for (
                var c = e[o], u = c.obj[c.prop], f = Object.keys(u), p = 0;
                p < f.length;
                ++p
              ) {
                var a = f[p],
                  i = u[a];
                'object' == typeof i &&
                  null !== i &&
                  -1 === t.indexOf(i) &&
                  (e.push({obj: u, prop: a}), t.push(i));
              }
            return n(e), r;
          },
          s = function (r) {
            return '[object RegExp]' === Object.prototype.toString.call(r);
          },
          l = function (r) {
            return (
              !(!r || 'object' != typeof r) &&
              !!(
                r.constructor &&
                r.constructor.isBuffer &&
                r.constructor.isBuffer(r)
              )
            );
          },
          b = function (r, e) {
            return [].concat(r, e);
          },
          y = function (r, e) {
            if (t(r)) {
              for (var o = [], n = 0; n < r.length; n += 1) o.push(e(r[n]));
              return o;
            }
            return e(r);
          };
        module.exports = {
          arrayToObject: c,
          assign: f,
          combine: b,
          compact: i,
          decode: p,
          encode: a,
          isBuffer: l,
          isRegExp: s,
          maybeMap: y,
          merge: u,
        };
      },
      {'./formats': 'mdM2'},
    ],
    SZfA: [
      function (require, module, exports) {
        'use strict';
        var e = require('side-channel'),
          t = require('./utils'),
          r = require('./formats'),
          o = Object.prototype.hasOwnProperty,
          n = {
            brackets: function (e) {
              return e + '[]';
            },
            comma: 'comma',
            indices: function (e, t) {
              return e + '[' + t + ']';
            },
            repeat: function (e) {
              return e;
            },
          },
          i = Array.isArray,
          l = Array.prototype.push,
          a = function (e, t) {
            l.apply(e, i(t) ? t : [t]);
          },
          f = Date.prototype.toISOString,
          s = r.default,
          c = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: 'utf-8',
            charsetSentinel: !1,
            delimiter: '&',
            encode: !0,
            encoder: t.encode,
            encodeValuesOnly: !1,
            format: s,
            formatter: r.formatters[s],
            indices: !1,
            serializeDate: function (e) {
              return f.call(e);
            },
            skipNulls: !1,
            strictNullHandling: !1,
          },
          u = function (e) {
            return (
              'string' == typeof e ||
              'number' == typeof e ||
              'boolean' == typeof e ||
              'symbol' == typeof e ||
              'bigint' == typeof e
            );
          },
          d = function e(r, o, n, l, f, s, d, y, p, m, h, v, b, w, g) {
            var D = r;
            if (g.has(r)) throw new RangeError('Cyclic object value');
            if (
              ('function' == typeof d
                ? (D = d(o, D))
                : D instanceof Date
                ? (D = m(D))
                : 'comma' === n &&
                  i(D) &&
                  (D = t.maybeMap(D, function (e) {
                    return e instanceof Date ? m(e) : e;
                  })),
              null === D)
            ) {
              if (l) return s && !b ? s(o, c.encoder, w, 'key', h) : o;
              D = '';
            }
            if (u(D) || t.isBuffer(D))
              return s
                ? [
                    v(b ? o : s(o, c.encoder, w, 'key', h)) +
                      '=' +
                      v(s(D, c.encoder, w, 'value', h)),
                  ]
                : [v(o) + '=' + v(String(D))];
            var k,
              N = [];
            if (void 0 === D) return N;
            if ('comma' === n && i(D))
              k = [{value: D.length > 0 ? D.join(',') || null : void 0}];
            else if (i(d)) k = d;
            else {
              var O = Object.keys(D);
              k = y ? O.sort(y) : O;
            }
            for (var S = 0; S < k.length; ++S) {
              var j = k[S],
                x = 'object' == typeof j && void 0 !== j.value ? j.value : D[j];
              if (!f || null !== x) {
                var P = i(D)
                  ? 'function' == typeof n
                    ? n(o, j)
                    : o
                  : o + (p ? '.' + j : '[' + j + ']');
                g.set(r, !0),
                  a(N, e(x, P, n, l, f, s, d, y, p, m, h, v, b, w, g));
              }
            }
            return N;
          },
          y = function (e) {
            if (!e) return c;
            if (
              null !== e.encoder &&
              void 0 !== e.encoder &&
              'function' != typeof e.encoder
            )
              throw new TypeError('Encoder has to be a function.');
            var t = e.charset || c.charset;
            if (
              void 0 !== e.charset &&
              'utf-8' !== e.charset &&
              'iso-8859-1' !== e.charset
            )
              throw new TypeError(
                'The charset option must be either utf-8, iso-8859-1, or undefined'
              );
            var n = r.default;
            if (void 0 !== e.format) {
              if (!o.call(r.formatters, e.format))
                throw new TypeError('Unknown format option provided.');
              n = e.format;
            }
            var l = r.formatters[n],
              a = c.filter;
            return (
              ('function' == typeof e.filter || i(e.filter)) && (a = e.filter),
              {
                addQueryPrefix:
                  'boolean' == typeof e.addQueryPrefix
                    ? e.addQueryPrefix
                    : c.addQueryPrefix,
                allowDots: void 0 === e.allowDots ? c.allowDots : !!e.allowDots,
                charset: t,
                charsetSentinel:
                  'boolean' == typeof e.charsetSentinel
                    ? e.charsetSentinel
                    : c.charsetSentinel,
                delimiter: void 0 === e.delimiter ? c.delimiter : e.delimiter,
                encode: 'boolean' == typeof e.encode ? e.encode : c.encode,
                encoder: 'function' == typeof e.encoder ? e.encoder : c.encoder,
                encodeValuesOnly:
                  'boolean' == typeof e.encodeValuesOnly
                    ? e.encodeValuesOnly
                    : c.encodeValuesOnly,
                filter: a,
                format: n,
                formatter: l,
                serializeDate:
                  'function' == typeof e.serializeDate
                    ? e.serializeDate
                    : c.serializeDate,
                skipNulls:
                  'boolean' == typeof e.skipNulls ? e.skipNulls : c.skipNulls,
                sort: 'function' == typeof e.sort ? e.sort : null,
                strictNullHandling:
                  'boolean' == typeof e.strictNullHandling
                    ? e.strictNullHandling
                    : c.strictNullHandling,
              }
            );
          };
        module.exports = function (t, r) {
          var o,
            l = t,
            f = y(r);
          'function' == typeof f.filter
            ? (l = (0, f.filter)('', l))
            : i(f.filter) && (o = f.filter);
          var s,
            c = [];
          if ('object' != typeof l || null === l) return '';
          s =
            r && r.arrayFormat in n
              ? r.arrayFormat
              : r && 'indices' in r
              ? r.indices
                ? 'indices'
                : 'repeat'
              : 'indices';
          var u = n[s];
          o || (o = Object.keys(l)), f.sort && o.sort(f.sort);
          for (var p = e(), m = 0; m < o.length; ++m) {
            var h = o[m];
            (f.skipNulls && null === l[h]) ||
              a(
                c,
                d(
                  l[h],
                  h,
                  u,
                  f.strictNullHandling,
                  f.skipNulls,
                  f.encode ? f.encoder : null,
                  f.filter,
                  f.sort,
                  f.allowDots,
                  f.serializeDate,
                  f.format,
                  f.formatter,
                  f.encodeValuesOnly,
                  f.charset,
                  p
                )
              );
          }
          var v = c.join(f.delimiter),
            b = !0 === f.addQueryPrefix ? '?' : '';
          return (
            f.charsetSentinel &&
              ('iso-8859-1' === f.charset
                ? (b += 'utf8=%26%2310003%3B&')
                : (b += 'utf8=%E2%9C%93&')),
            v.length > 0 ? b + v : ''
          );
        };
      },
      {'side-channel': 'iGu9', './utils': 'HHEV', './formats': 'mdM2'},
    ],
    'r1+p': [
      function (require, module, exports) {
        'use strict';
        var e = require('./utils'),
          r = Object.prototype.hasOwnProperty,
          t = Array.isArray,
          i = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: 'utf-8',
            charsetSentinel: !1,
            comma: !1,
            decoder: e.decode,
            delimiter: '&',
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1,
          },
          a = function (e) {
            return e.replace(/&#(\d+);/g, function (e, r) {
              return String.fromCharCode(parseInt(r, 10));
            });
          },
          o = function (e, r) {
            return e && 'string' == typeof e && r.comma && e.indexOf(',') > -1
              ? e.split(',')
              : e;
          },
          n = 'utf8=%26%2310003%3B',
          l = 'utf8=%E2%9C%93',
          c = function (c, s) {
            var p,
              d = {},
              u = s.ignoreQueryPrefix ? c.replace(/^\?/, '') : c,
              f = s.parameterLimit === 1 / 0 ? void 0 : s.parameterLimit,
              m = u.split(s.delimiter, f),
              y = -1,
              h = s.charset;
            if (s.charsetSentinel)
              for (p = 0; p < m.length; ++p)
                0 === m[p].indexOf('utf8=') &&
                  (m[p] === l
                    ? (h = 'utf-8')
                    : m[p] === n && (h = 'iso-8859-1'),
                  (y = p),
                  (p = m.length));
            for (p = 0; p < m.length; ++p)
              if (p !== y) {
                var b,
                  g,
                  w = m[p],
                  O = w.indexOf(']='),
                  v = -1 === O ? w.indexOf('=') : O + 1;
                -1 === v
                  ? ((b = s.decoder(w, i.decoder, h, 'key')),
                    (g = s.strictNullHandling ? null : ''))
                  : ((b = s.decoder(w.slice(0, v), i.decoder, h, 'key')),
                    (g = e.maybeMap(o(w.slice(v + 1), s), function (e) {
                      return s.decoder(e, i.decoder, h, 'value');
                    }))),
                  g &&
                    s.interpretNumericEntities &&
                    'iso-8859-1' === h &&
                    (g = a(g)),
                  w.indexOf('[]=') > -1 && (g = t(g) ? [g] : g),
                  r.call(d, b) ? (d[b] = e.combine(d[b], g)) : (d[b] = g);
              }
            return d;
          },
          s = function (e, r, t, i) {
            for (var a = i ? r : o(r, t), n = e.length - 1; n >= 0; --n) {
              var l,
                c = e[n];
              if ('[]' === c && t.parseArrays) l = [].concat(a);
              else {
                l = t.plainObjects ? Object.create(null) : {};
                var s =
                    '[' === c.charAt(0) && ']' === c.charAt(c.length - 1)
                      ? c.slice(1, -1)
                      : c,
                  p = parseInt(s, 10);
                t.parseArrays || '' !== s
                  ? !isNaN(p) &&
                    c !== s &&
                    String(p) === s &&
                    p >= 0 &&
                    t.parseArrays &&
                    p <= t.arrayLimit
                    ? ((l = [])[p] = a)
                    : (l[s] = a)
                  : (l = {0: a});
              }
              a = l;
            }
            return a;
          },
          p = function (e, t, i, a) {
            if (e) {
              var o = i.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
                n = /(\[[^[\]]*])/g,
                l = i.depth > 0 && /(\[[^[\]]*])/.exec(o),
                c = l ? o.slice(0, l.index) : o,
                p = [];
              if (c) {
                if (
                  !i.plainObjects &&
                  r.call(Object.prototype, c) &&
                  !i.allowPrototypes
                )
                  return;
                p.push(c);
              }
              for (
                var d = 0;
                i.depth > 0 && null !== (l = n.exec(o)) && d < i.depth;

              ) {
                if (
                  ((d += 1),
                  !i.plainObjects &&
                    r.call(Object.prototype, l[1].slice(1, -1)) &&
                    !i.allowPrototypes)
                )
                  return;
                p.push(l[1]);
              }
              return l && p.push('[' + o.slice(l.index) + ']'), s(p, t, i, a);
            }
          },
          d = function (r) {
            if (!r) return i;
            if (
              null !== r.decoder &&
              void 0 !== r.decoder &&
              'function' != typeof r.decoder
            )
              throw new TypeError('Decoder has to be a function.');
            if (
              void 0 !== r.charset &&
              'utf-8' !== r.charset &&
              'iso-8859-1' !== r.charset
            )
              throw new TypeError(
                'The charset option must be either utf-8, iso-8859-1, or undefined'
              );
            var t = void 0 === r.charset ? i.charset : r.charset;
            return {
              allowDots: void 0 === r.allowDots ? i.allowDots : !!r.allowDots,
              allowPrototypes:
                'boolean' == typeof r.allowPrototypes
                  ? r.allowPrototypes
                  : i.allowPrototypes,
              allowSparse:
                'boolean' == typeof r.allowSparse
                  ? r.allowSparse
                  : i.allowSparse,
              arrayLimit:
                'number' == typeof r.arrayLimit ? r.arrayLimit : i.arrayLimit,
              charset: t,
              charsetSentinel:
                'boolean' == typeof r.charsetSentinel
                  ? r.charsetSentinel
                  : i.charsetSentinel,
              comma: 'boolean' == typeof r.comma ? r.comma : i.comma,
              decoder: 'function' == typeof r.decoder ? r.decoder : i.decoder,
              delimiter:
                'string' == typeof r.delimiter || e.isRegExp(r.delimiter)
                  ? r.delimiter
                  : i.delimiter,
              depth:
                'number' == typeof r.depth || !1 === r.depth
                  ? +r.depth
                  : i.depth,
              ignoreQueryPrefix: !0 === r.ignoreQueryPrefix,
              interpretNumericEntities:
                'boolean' == typeof r.interpretNumericEntities
                  ? r.interpretNumericEntities
                  : i.interpretNumericEntities,
              parameterLimit:
                'number' == typeof r.parameterLimit
                  ? r.parameterLimit
                  : i.parameterLimit,
              parseArrays: !1 !== r.parseArrays,
              plainObjects:
                'boolean' == typeof r.plainObjects
                  ? r.plainObjects
                  : i.plainObjects,
              strictNullHandling:
                'boolean' == typeof r.strictNullHandling
                  ? r.strictNullHandling
                  : i.strictNullHandling,
            };
          };
        module.exports = function (r, t) {
          var i = d(t);
          if ('' === r || null == r)
            return i.plainObjects ? Object.create(null) : {};
          for (
            var a = 'string' == typeof r ? c(r, i) : r,
              o = i.plainObjects ? Object.create(null) : {},
              n = Object.keys(a),
              l = 0;
            l < n.length;
            ++l
          ) {
            var s = n[l],
              u = p(s, a[s], i, 'string' == typeof r);
            o = e.merge(o, u, i);
          }
          return !0 === i.allowSparse ? o : e.compact(o);
        };
      },
      {'./utils': 'HHEV'},
    ],
    OFf3: [
      function (require, module, exports) {
        'use strict';
        var r = require('./stringify'),
          e = require('./parse'),
          s = require('./formats');
        module.exports = {formats: s, parse: e, stringify: r};
      },
      {'./stringify': 'SZfA', './parse': 'r1+p', './formats': 'mdM2'},
    ],
    rf7W: [
      function (require, module, exports) {
        'use strict';
        function o(t) {
          return (o =
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
                })(t);
        }
        function t(t) {
          return null !== t && 'object' === o(t);
        }
        module.exports = t;
      },
      {},
    ],
    bs5T: [
      function (require, module, exports) {
        'use strict';
        function t(e) {
          return (t =
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
                })(e);
        }
        var e = require('./is-object');
        function r(t) {
          if (t) return i(t);
        }
        function i(t) {
          for (var e in r.prototype)
            Object.prototype.hasOwnProperty.call(r.prototype, e) &&
              (t[e] = r.prototype[e]);
          return t;
        }
        (module.exports = r),
          (r.prototype.clearTimeout = function () {
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
          (r.prototype.parse = function (t) {
            return (this._parser = t), this;
          }),
          (r.prototype.responseType = function (t) {
            return (this._responseType = t), this;
          }),
          (r.prototype.serialize = function (t) {
            return (this._serializer = t), this;
          }),
          (r.prototype.timeout = function (e) {
            if (!e || 'object' !== t(e))
              return (
                (this._timeout = e),
                (this._responseTimeout = 0),
                (this._uploadTimeout = 0),
                this
              );
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r))
                switch (r) {
                  case 'deadline':
                    this._timeout = e.deadline;
                    break;
                  case 'response':
                    this._responseTimeout = e.response;
                    break;
                  case 'upload':
                    this._uploadTimeout = e.upload;
                    break;
                  default:
                    console.warn('Unknown timeout option', r);
                }
            return this;
          }),
          (r.prototype.retry = function (t, e) {
            return (
              (0 !== arguments.length && !0 !== t) || (t = 1),
              t <= 0 && (t = 0),
              (this._maxRetries = t),
              (this._retries = 0),
              (this._retryCallback = e),
              this
            );
          });
        var o = new Set([
            'ETIMEDOUT',
            'ECONNRESET',
            'EADDRINUSE',
            'ECONNREFUSED',
            'EPIPE',
            'ENOTFOUND',
            'ENETUNREACH',
            'EAI_AGAIN',
          ]),
          s = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);
        (r.prototype._shouldRetry = function (t, e) {
          if (!this._maxRetries || this._retries++ >= this._maxRetries)
            return !1;
          if (this._retryCallback)
            try {
              var r = this._retryCallback(t, e);
              if (!0 === r) return !0;
              if (!1 === r) return !1;
            } catch (i) {
              console.error(i);
            }
          if (e && e.status && s.has(e.status)) return !0;
          if (t) {
            if (t.code && o.has(t.code)) return !0;
            if (t.timeout && 'ECONNABORTED' === t.code) return !0;
            if (t.crossDomain) return !0;
          }
          return !1;
        }),
          (r.prototype._retry = function () {
            return (
              this.clearTimeout(),
              this.req && ((this.req = null), (this.req = this.request())),
              (this._aborted = !1),
              (this.timedout = !1),
              (this.timedoutError = null),
              this._end()
            );
          }),
          (r.prototype.then = function (t, e) {
            var r = this;
            if (!this._fullfilledPromise) {
              var i = this;
              this._endCalled &&
                console.warn(
                  'Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises'
                ),
                (this._fullfilledPromise = new Promise(function (t, e) {
                  i.on('abort', function () {
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
                    i.end(function (r, i) {
                      r ? e(r) : t(i);
                    });
                }));
            }
            return this._fullfilledPromise.then(t, e);
          }),
          (r.prototype.catch = function (t) {
            return this.then(void 0, t);
          }),
          (r.prototype.use = function (t) {
            return t(this), this;
          }),
          (r.prototype.ok = function (t) {
            if ('function' != typeof t) throw new Error('Callback required');
            return (this._okCallback = t), this;
          }),
          (r.prototype._isResponseOK = function (t) {
            return (
              !!t &&
              (this._okCallback
                ? this._okCallback(t)
                : t.status >= 200 && t.status < 300)
            );
          }),
          (r.prototype.get = function (t) {
            return this._header[t.toLowerCase()];
          }),
          (r.prototype.getHeader = r.prototype.get),
          (r.prototype.set = function (t, r) {
            if (e(t)) {
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && this.set(i, t[i]);
              return this;
            }
            return (
              (this._header[t.toLowerCase()] = r), (this.header[t] = r), this
            );
          }),
          (r.prototype.unset = function (t) {
            return (
              delete this._header[t.toLowerCase()], delete this.header[t], this
            );
          }),
          (r.prototype.field = function (t, r) {
            if (null == t)
              throw new Error('.field(name, val) name can not be empty');
            if (this._data)
              throw new Error(
                ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"
              );
            if (e(t)) {
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) &&
                  this.field(i, t[i]);
              return this;
            }
            if (Array.isArray(r)) {
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) &&
                  this.field(t, r[o]);
              return this;
            }
            if (null == r)
              throw new Error('.field(name, val) val can not be empty');
            return (
              'boolean' == typeof r && (r = String(r)),
              this._getFormData().append(t, r),
              this
            );
          }),
          (r.prototype.abort = function () {
            return this._aborted
              ? this
              : ((this._aborted = !0),
                this.xhr && this.xhr.abort(),
                this.req && this.req.abort(),
                this.clearTimeout(),
                this.emit('abort'),
                this);
          }),
          (r.prototype._auth = function (t, e, r, i) {
            switch (r.type) {
              case 'basic':
                this.set(
                  'Authorization',
                  'Basic '.concat(i(''.concat(t, ':').concat(e)))
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
          (r.prototype.withCredentials = function (t) {
            return void 0 === t && (t = !0), (this._withCredentials = t), this;
          }),
          (r.prototype.redirects = function (t) {
            return (this._maxRedirects = t), this;
          }),
          (r.prototype.maxResponseSize = function (t) {
            if ('number' != typeof t) throw new TypeError('Invalid argument');
            return (this._maxResponseSize = t), this;
          }),
          (r.prototype.toJSON = function () {
            return {
              method: this.method,
              url: this.url,
              data: this._data,
              headers: this._header,
            };
          }),
          (r.prototype.send = function (t) {
            var r = e(t),
              i = this._header['content-type'];
            if (this._formData)
              throw new Error(
                ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"
              );
            if (r && !this._data)
              Array.isArray(t)
                ? (this._data = [])
                : this._isHost(t) || (this._data = {});
            else if (t && this._data && this._isHost(this._data))
              throw new Error("Can't merge these send calls");
            if (r && e(this._data))
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) &&
                  (this._data[o] = t[o]);
            else
              'string' == typeof t
                ? (i || this.type('form'),
                  (i = this._header['content-type']) &&
                    (i = i.toLowerCase().trim()),
                  (this._data =
                    'application/x-www-form-urlencoded' === i
                      ? this._data
                        ? ''.concat(this._data, '&').concat(t)
                        : t
                      : (this._data || '') + t))
                : (this._data = t);
            return !r || this._isHost(t)
              ? this
              : (i || this.type('json'), this);
          }),
          (r.prototype.sortQuery = function (t) {
            return (this._sort = void 0 === t || t), this;
          }),
          (r.prototype._finalizeQueryString = function () {
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
          (r.prototype._appendQueryString = function () {
            console.warn('Unsupported');
          }),
          (r.prototype._timeoutError = function (t, e, r) {
            if (!this._aborted) {
              var i = new Error(''.concat(t + e, 'ms exceeded'));
              (i.timeout = e),
                (i.code = 'ECONNABORTED'),
                (i.errno = r),
                (this.timedout = !0),
                (this.timedoutError = i),
                this.abort(),
                this.callback(i);
            }
          }),
          (r.prototype._setTimeouts = function () {
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
      },
      {'./is-object': 'rf7W'},
    ],
    uzNR: [
      function (require, module, exports) {
        'use strict';
        function t(t, n) {
          var r;
          if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
            if (
              Array.isArray(t) ||
              (r = e(t)) ||
              (n && t && 'number' == typeof t.length)
            ) {
              r && (t = r);
              var o = 0,
                i = function () {};
              return {
                s: i,
                n: function () {
                  return o >= t.length ? {done: !0} : {done: !1, value: t[o++]};
                },
                e: function (t) {
                  throw t;
                },
                f: i,
              };
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }
          var a,
            l = !0,
            u = !1;
          return {
            s: function () {
              r = t[Symbol.iterator]();
            },
            n: function () {
              var t = r.next();
              return (l = t.done), t;
            },
            e: function (t) {
              (u = !0), (a = t);
            },
            f: function () {
              try {
                l || null == r.return || r.return();
              } finally {
                if (u) throw a;
              }
            },
          };
        }
        function e(t, e) {
          if (t) {
            if ('string' == typeof t) return n(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              'Object' === r && t.constructor && (r = t.constructor.name),
              'Map' === r || 'Set' === r
                ? Array.from(t)
                : 'Arguments' === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? n(t, e)
                : void 0
            );
          }
        }
        function n(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        (exports.type = function (t) {
          return t.split(/ *; */).shift();
        }),
          (exports.params = function (e) {
            var n,
              r = {},
              o = t(e.split(/ *; */));
            try {
              for (o.s(); !(n = o.n()).done; ) {
                var i = n.value.split(/ *= */),
                  a = i.shift(),
                  l = i.shift();
                a && l && (r[a] = l);
              }
            } catch (u) {
              o.e(u);
            } finally {
              o.f();
            }
            return r;
          }),
          (exports.parseLinks = function (e) {
            var n,
              r = {},
              o = t(e.split(/ *, */));
            try {
              for (o.s(); !(n = o.n()).done; ) {
                var i = n.value.split(/ *; */),
                  a = i[0].slice(1, -1);
                r[i[1].split(/ *= */)[1].slice(1, -1)] = a;
              }
            } catch (l) {
              o.e(l);
            } finally {
              o.f();
            }
            return r;
          }),
          (exports.cleanHeader = function (t, e) {
            return (
              delete t['content-type'],
              delete t['content-length'],
              delete t['transfer-encoding'],
              delete t.host,
              e && (delete t.authorization, delete t.cookie),
              t
            );
          });
      },
      {},
    ],
    LjRy: [
      function (require, module, exports) {
        'use strict';
        var t = require('./utils');
        function e(t) {
          if (t) return r(t);
        }
        function r(t) {
          for (var r in e.prototype)
            Object.prototype.hasOwnProperty.call(e.prototype, r) &&
              (t[r] = e.prototype[r]);
          return t;
        }
        (module.exports = e),
          (e.prototype.get = function (t) {
            return this.header[t.toLowerCase()];
          }),
          (e.prototype._setHeaderProperties = function (e) {
            var r = e['content-type'] || '';
            this.type = t.type(r);
            var s = t.params(r);
            for (var i in s)
              Object.prototype.hasOwnProperty.call(s, i) && (this[i] = s[i]);
            this.links = {};
            try {
              e.link && (this.links = t.parseLinks(e.link));
            } catch (o) {}
          }),
          (e.prototype._setStatusProperties = function (t) {
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
      },
      {'./utils': 'uzNR'},
    ],
    '+XIK': [
      function (require, module, exports) {
        'use strict';
        function t(t) {
          return o(t) || n(t) || e(t) || r();
        }
        function r() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        function e(t, r) {
          if (t) {
            if ('string' == typeof t) return a(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            return (
              'Object' === e && t.constructor && (e = t.constructor.name),
              'Map' === e || 'Set' === e
                ? Array.from(t)
                : 'Arguments' === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                ? a(t, r)
                : void 0
            );
          }
        }
        function n(t) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        }
        function o(t) {
          if (Array.isArray(t)) return a(t);
        }
        function a(t, r) {
          (null == r || r > t.length) && (r = t.length);
          for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
          return n;
        }
        function i() {
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
        ].forEach(function (t) {
          i.prototype[t] = function () {
            for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
              e[n] = arguments[n];
            return this._defaults.push({fn: t, args: e}), this;
          };
        }),
          (i.prototype._setDefaults = function (r) {
            this._defaults.forEach(function (e) {
              r[e.fn].apply(r, t(e.args));
            });
          }),
          (module.exports = i);
      },
      {},
    ],
    jn4M: [
      function (require, module, exports) {
        'use strict';
        function t(e) {
          return (t =
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
                })(e);
        }
        var e;
        'undefined' != typeof window
          ? (e = window)
          : 'undefined' == typeof self
          ? (console.warn(
              'Using browser-only version of superagent in non-browser environment'
            ),
            (e = void 0))
          : (e = self);
        var r = require('component-emitter'),
          o = require('fast-safe-stringify'),
          n = require('qs'),
          s = require('./request-base'),
          i = require('./is-object'),
          a = require('./response-base'),
          u = require('./agent-base');
        function p() {}
        (module.exports = function (t, e) {
          return 'function' == typeof e
            ? new exports.Request('GET', t).end(e)
            : 1 === arguments.length
            ? new exports.Request('GET', t)
            : new exports.Request(t, e);
        }),
          (exports = module.exports);
        var c = exports;
        (exports.Request = T),
          (c.getXHR = function () {
            if (
              e.XMLHttpRequest &&
              (!e.location ||
                'file:' !== e.location.protocol ||
                !e.ActiveXObject)
            )
              return new XMLHttpRequest();
            try {
              return new ActiveXObject('Microsoft.XMLHTTP');
            } catch (t) {}
            try {
              return new ActiveXObject('Msxml2.XMLHTTP.6.0');
            } catch (r) {}
            try {
              return new ActiveXObject('Msxml2.XMLHTTP.3.0');
            } catch (o) {}
            try {
              return new ActiveXObject('Msxml2.XMLHTTP');
            } catch (n) {}
            throw new Error(
              'Browser-only version of superagent could not find XHR'
            );
          });
        var h = ''.trim
          ? function (t) {
              return t.trim();
            }
          : function (t) {
              return t.replace(/(^\s*|\s*$)/g, '');
            };
        function l(t) {
          if (!i(t)) return t;
          var e = [];
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && d(e, r, t[r]);
          return e.join('&');
        }
        function d(t, e, r) {
          if (void 0 !== r)
            if (null !== r)
              if (Array.isArray(r))
                r.forEach(function (r) {
                  d(t, e, r);
                });
              else if (i(r))
                for (var o in r)
                  Object.prototype.hasOwnProperty.call(r, o) &&
                    d(t, ''.concat(e, '[').concat(o, ']'), r[o]);
              else t.push(encodeURI(e) + '=' + encodeURIComponent(r));
            else t.push(encodeURI(e));
        }
        function f(t) {
          for (
            var e, r, o = {}, n = t.split('&'), s = 0, i = n.length;
            s < i;
            ++s
          )
            -1 === (r = (e = n[s]).indexOf('='))
              ? (o[decodeURIComponent(e)] = '')
              : (o[decodeURIComponent(e.slice(0, r))] = decodeURIComponent(
                  e.slice(r + 1)
                ));
          return o;
        }
        function y(t) {
          for (
            var e, r, o, n, s = t.split(/\r?\n/), i = {}, a = 0, u = s.length;
            a < u;
            ++a
          )
            -1 !== (e = (r = s[a]).indexOf(':')) &&
              ((o = r.slice(0, e).toLowerCase()),
              (n = h(r.slice(e + 1))),
              (i[o] = n));
          return i;
        }
        function m(t) {
          return /[/+]json($|[^-\w])/i.test(t);
        }
        function w(t) {
          (this.req = t),
            (this.xhr = this.req.xhr),
            (this.text =
              ('HEAD' !== this.req.method &&
                ('' === this.xhr.responseType ||
                  'text' === this.xhr.responseType)) ||
              void 0 === this.xhr.responseType
                ? this.xhr.responseText
                : null),
            (this.statusText = this.req.xhr.statusText);
          var e = this.xhr.status;
          1223 === e && (e = 204),
            this._setStatusProperties(e),
            (this.headers = y(this.xhr.getAllResponseHeaders())),
            (this.header = this.headers),
            (this.header['content-type'] =
              this.xhr.getResponseHeader('content-type')),
            this._setHeaderProperties(this.header),
            null === this.text && t._responseType
              ? (this.body = this.xhr.response)
              : (this.body =
                  'HEAD' === this.req.method
                    ? null
                    : this._parseBody(
                        this.text ? this.text : this.xhr.response
                      ));
        }
        function T(t, e) {
          var r = this;
          (this._query = this._query || []),
            (this.method = t),
            (this.url = e),
            (this.header = {}),
            (this._header = {}),
            this.on('end', function () {
              var t,
                e = null,
                o = null;
              try {
                o = new w(r);
              } catch (n) {
                return (
                  ((e = new Error(
                    'Parser is unable to parse the response'
                  )).parse = !0),
                  (e.original = n),
                  r.xhr
                    ? ((e.rawResponse =
                        void 0 === r.xhr.responseType
                          ? r.xhr.responseText
                          : r.xhr.response),
                      (e.status = r.xhr.status ? r.xhr.status : null),
                      (e.statusCode = e.status))
                    : ((e.rawResponse = null), (e.status = null)),
                  r.callback(e)
                );
              }
              r.emit('response', o);
              try {
                r._isResponseOK(o) ||
                  (t = new Error(
                    o.statusText || o.text || 'Unsuccessful HTTP response'
                  ));
              } catch (n) {
                t = n;
              }
              t
                ? ((t.original = e),
                  (t.response = o),
                  (t.status = o.status),
                  r.callback(t, o))
                : r.callback(null, o);
            });
        }
        function b(t, e, r) {
          var o = c('DELETE', t);
          return (
            'function' == typeof e && ((r = e), (e = null)),
            e && o.send(e),
            r && o.end(r),
            o
          );
        }
        (c.serializeObject = l),
          (c.parseString = f),
          (c.types = {
            html: 'text/html',
            json: 'application/json',
            xml: 'text/xml',
            urlencoded: 'application/x-www-form-urlencoded',
            form: 'application/x-www-form-urlencoded',
            'form-data': 'application/x-www-form-urlencoded',
          }),
          (c.serialize = {
            'application/x-www-form-urlencoded': n.stringify,
            'application/json': o,
          }),
          (c.parse = {
            'application/x-www-form-urlencoded': f,
            'application/json': JSON.parse,
          }),
          a(w.prototype),
          (w.prototype._parseBody = function (t) {
            var e = c.parse[this.type];
            return this.req._parser
              ? this.req._parser(this, t)
              : (!e && m(this.type) && (e = c.parse['application/json']),
                e && t && (t.length > 0 || t instanceof Object) ? e(t) : null);
          }),
          (w.prototype.toError = function () {
            var t = this.req,
              e = t.method,
              r = t.url,
              o = 'cannot '
                .concat(e, ' ')
                .concat(r, ' (')
                .concat(this.status, ')'),
              n = new Error(o);
            return (n.status = this.status), (n.method = e), (n.url = r), n;
          }),
          (c.Response = w),
          r(T.prototype),
          s(T.prototype),
          (T.prototype.type = function (t) {
            return this.set('Content-Type', c.types[t] || t), this;
          }),
          (T.prototype.accept = function (t) {
            return this.set('Accept', c.types[t] || t), this;
          }),
          (T.prototype.auth = function (e, r, o) {
            1 === arguments.length && (r = ''),
              'object' === t(r) && null !== r && ((o = r), (r = '')),
              o || (o = {type: 'function' == typeof btoa ? 'basic' : 'auto'});
            return this._auth(e, r, o, function (t) {
              if ('function' == typeof btoa) return btoa(t);
              throw new Error('Cannot use basic auth, btoa is not a function');
            });
          }),
          (T.prototype.query = function (t) {
            return (
              'string' != typeof t && (t = l(t)), t && this._query.push(t), this
            );
          }),
          (T.prototype.attach = function (t, e, r) {
            if (e) {
              if (this._data)
                throw new Error("superagent can't mix .send() and .attach()");
              this._getFormData().append(t, e, r || e.name);
            }
            return this;
          }),
          (T.prototype._getFormData = function () {
            return (
              this._formData || (this._formData = new e.FormData()),
              this._formData
            );
          }),
          (T.prototype.callback = function (t, e) {
            if (this._shouldRetry(t, e)) return this._retry();
            var r = this._callback;
            this.clearTimeout(),
              t &&
                (this._maxRetries && (t.retries = this._retries - 1),
                this.emit('error', t)),
              r(t, e);
          }),
          (T.prototype.crossDomainError = function () {
            var t = new Error(
              'Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.'
            );
            (t.crossDomain = !0),
              (t.status = this.status),
              (t.method = this.method),
              (t.url = this.url),
              this.callback(t);
          }),
          (T.prototype.agent = function () {
            return (
              console.warn(
                'This is not supported in browser version of superagent'
              ),
              this
            );
          }),
          (T.prototype.ca = T.prototype.agent),
          (T.prototype.buffer = T.prototype.ca),
          (T.prototype.write = function () {
            throw new Error(
              'Streaming is not supported in browser version of superagent'
            );
          }),
          (T.prototype.pipe = T.prototype.write),
          (T.prototype._isHost = function (e) {
            return (
              e &&
              'object' === t(e) &&
              !Array.isArray(e) &&
              '[object Object]' !== Object.prototype.toString.call(e)
            );
          }),
          (T.prototype.end = function (t) {
            this._endCalled &&
              console.warn(
                'Warning: .end() was called twice. This is not supported in superagent'
              ),
              (this._endCalled = !0),
              (this._callback = t || p),
              this._finalizeQueryString(),
              this._end();
          }),
          (T.prototype._setUploadTimeout = function () {
            var t = this;
            this._uploadTimeout &&
              !this._uploadTimeoutTimer &&
              (this._uploadTimeoutTimer = setTimeout(function () {
                t._timeoutError(
                  'Upload timeout of ',
                  t._uploadTimeout,
                  'ETIMEDOUT'
                );
              }, this._uploadTimeout));
          }),
          (T.prototype._end = function () {
            if (this._aborted)
              return this.callback(
                new Error(
                  'The request has been aborted even before .end() was called'
                )
              );
            var t = this;
            this.xhr = c.getXHR();
            var e = this.xhr,
              r = this._formData || this._data;
            this._setTimeouts(),
              (e.onreadystatechange = function () {
                var r = e.readyState;
                if (
                  (r >= 2 &&
                    t._responseTimeoutTimer &&
                    clearTimeout(t._responseTimeoutTimer),
                  4 === r)
                ) {
                  var o;
                  try {
                    o = e.status;
                  } catch (n) {
                    o = 0;
                  }
                  if (!o) {
                    if (t.timedout || t._aborted) return;
                    return t.crossDomainError();
                  }
                  t.emit('end');
                }
              });
            var o = function (e, r) {
              r.total > 0 &&
                ((r.percent = (r.loaded / r.total) * 100),
                100 === r.percent && clearTimeout(t._uploadTimeoutTimer)),
                (r.direction = e),
                t.emit('progress', r);
            };
            if (this.hasListeners('progress'))
              try {
                e.addEventListener('progress', o.bind(null, 'download')),
                  e.upload &&
                    e.upload.addEventListener(
                      'progress',
                      o.bind(null, 'upload')
                    );
              } catch (a) {}
            e.upload && this._setUploadTimeout();
            try {
              this.username && this.password
                ? e.open(
                    this.method,
                    this.url,
                    !0,
                    this.username,
                    this.password
                  )
                : e.open(this.method, this.url, !0);
            } catch (u) {
              return this.callback(u);
            }
            if (
              (this._withCredentials && (e.withCredentials = !0),
              !this._formData &&
                'GET' !== this.method &&
                'HEAD' !== this.method &&
                'string' != typeof r &&
                !this._isHost(r))
            ) {
              var n = this._header['content-type'],
                s = this._serializer || c.serialize[n ? n.split(';')[0] : ''];
              !s && m(n) && (s = c.serialize['application/json']),
                s && (r = s(r));
            }
            for (var i in this.header)
              null !== this.header[i] &&
                Object.prototype.hasOwnProperty.call(this.header, i) &&
                e.setRequestHeader(i, this.header[i]);
            this._responseType && (e.responseType = this._responseType),
              this.emit('request', this),
              e.send(void 0 === r ? null : r);
          }),
          (c.agent = function () {
            return new u();
          }),
          ['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'].forEach(
            function (t) {
              u.prototype[t.toLowerCase()] = function (e, r) {
                var o = new c.Request(t, e);
                return this._setDefaults(o), r && o.end(r), o;
              };
            }
          ),
          (u.prototype.del = u.prototype.delete),
          (c.get = function (t, e, r) {
            var o = c('GET', t);
            return (
              'function' == typeof e && ((r = e), (e = null)),
              e && o.query(e),
              r && o.end(r),
              o
            );
          }),
          (c.head = function (t, e, r) {
            var o = c('HEAD', t);
            return (
              'function' == typeof e && ((r = e), (e = null)),
              e && o.query(e),
              r && o.end(r),
              o
            );
          }),
          (c.options = function (t, e, r) {
            var o = c('OPTIONS', t);
            return (
              'function' == typeof e && ((r = e), (e = null)),
              e && o.send(e),
              r && o.end(r),
              o
            );
          }),
          (c.del = b),
          (c.delete = b),
          (c.patch = function (t, e, r) {
            var o = c('PATCH', t);
            return (
              'function' == typeof e && ((r = e), (e = null)),
              e && o.send(e),
              r && o.end(r),
              o
            );
          }),
          (c.post = function (t, e, r) {
            var o = c('POST', t);
            return (
              'function' == typeof e && ((r = e), (e = null)),
              e && o.send(e),
              r && o.end(r),
              o
            );
          }),
          (c.put = function (t, e, r) {
            var o = c('PUT', t);
            return (
              'function' == typeof e && ((r = e), (e = null)),
              e && o.send(e),
              r && o.end(r),
              o
            );
          });
      },
      {
        'component-emitter': 'Wr69',
        'fast-safe-stringify': 'SQZr',
        qs: 'OFf3',
        './request-base': 'bs5T',
        './is-object': 'rf7W',
        './response-base': 'LjRy',
        './agent-base': '+XIK',
      },
    ],
    '3whG': [
      function (require, module, exports) {
        'use strict';
        function r(t) {
          return (r =
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
                })(t);
        }
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.isFunction = m),
          (exports.isString = j),
          (exports.includes = P),
          (exports.isUndefined = E),
          (exports.timestamp = C),
          (exports.each = F),
          (exports.trim = N),
          (exports.extend = I),
          (exports.bind = _),
          (exports.truncate = B),
          (exports.stripEmptyProperties = D),
          (exports.HTTPBuildQuery = J),
          (exports.utf8Encode = U),
          (exports.base64Encode = R),
          (exports.JSONDecode =
            exports.JSONEncode =
            exports.__NOOPTIONS =
            exports.__NOOP =
            exports.breaker =
            exports.slice =
            exports.nativeIsArray =
            exports.nativeIndexOf =
            exports.nativeForEach =
            exports.nativeBind =
            exports.intl =
            exports.userAgent =
            exports.screen =
            exports.windowOpera =
            exports.document =
            exports.navigator =
            exports.windowConsole =
            exports.win =
            exports.hasOwnProperty =
            exports.toString =
            exports.ObjProto =
            exports.FuncProto =
            exports.ArrayProto =
              void 0);
        var t = Array.prototype;
        exports.ArrayProto = t;
        var e = Function.prototype;
        exports.FuncProto = e;
        var n = Object.prototype;
        exports.ObjProto = n;
        var o = n.toString;
        exports.toString = o;
        var i = n.hasOwnProperty;
        exports.hasOwnProperty = i;
        var a = window;
        exports.win = a;
        var u = a.console;
        exports.windowConsole = u;
        var c = a.navigator;
        exports.navigator = c;
        var s = a.document;
        exports.document = s;
        var f = a.opera;
        exports.windowOpera = f;
        var p = a.screen;
        exports.screen = p;
        var l = c.userAgent;
        exports.userAgent = l;
        var x = a.Intl;
        exports.intl = x;
        var v = e.bind;
        exports.nativeBind = v;
        var d = t.forEach;
        exports.nativeForEach = d;
        var y = t.indexOf;
        exports.nativeIndexOf = y;
        var h = Array.isArray;
        exports.nativeIsArray = h;
        var g = t.slice;
        exports.slice = g;
        var b = {};
        exports.breaker = b;
        var O = function () {};
        exports.__NOOP = O;
        var w = {};
        exports.__NOOPTIONS = w;
        var S =
          h ||
          function (r) {
            return '[object Array]' === o.call(r);
          };
        function A(r) {
          return r === Object(r) && !S(r);
        }
        function m(r) {
          try {
            return /^\s*\bfunction\b/.test(r);
          } catch (t) {
            return !1;
          }
        }
        function j(r) {
          return '[object String]' === o.call(r);
        }
        function P(r, t) {
          return -1 !== r.indexOf(t);
        }
        function E(r) {
          return void 0 === r;
        }
        function C() {
          return (
            (Date.now =
              Date.now ||
              function () {
                return +new Date();
              }),
            Date.now()
          );
        }
        function F(r, t, e) {
          if (null != r)
            if (d && r.forEach === d) r.forEach(t, e);
            else if (r.length === +r.length) {
              for (var n = 0, o = r.length; n < o; n++)
                if (n in r && t.call(e, r[n], n, r) === b) return;
            } else
              for (var a in r)
                if (i.call(r, a) && t.call(e, r[a], a, r) === b) return;
        }
        function N(r) {
          return r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
        function I(r) {
          for (
            var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            e[n - 1] = arguments[n];
          return (
            F(e, function (t) {
              for (var e in t) void 0 !== t[e] && (r[e] = t[e]);
            }),
            r
          );
        }
        function _(r, t) {
          var e, n;
          if (v && r.bind === v)
            return (e = g.call(arguments, 1)), v.apply(r, e);
          if (!m(r)) throw new TypeError();
          return (
            (e = g.call(arguments, 2)),
            (n = function () {
              if (!(this instanceof n))
                return r.apply(t, e.concat(g.call(arguments)));
              var o = {};
              o.prototype = r.prototype;
              var i = new o();
              o.prototype = null;
              var a = r.apply(i, e.concat(g.call(arguments)));
              return Object(a) === a ? a : i;
            })
          );
        }
        function B(r, t) {
          var e;
          return (
            'string' == typeof r
              ? (e = r.slice(0, t))
              : S(r)
              ? ((e = []),
                F(r, function (r) {
                  e.push(B(r, t));
                }))
              : A(r)
              ? ((e = {}),
                F(r, function (r, n) {
                  e[n] = B(r, t);
                }))
              : (e = r),
            e
          );
        }
        function D(r) {
          var t = {};
          return (
            F(r, function (r, e) {
              j(r) && r.length > 0 && (t[e] = r);
            }),
            t
          );
        }
        function J(r, t) {
          var e,
            n,
            o = [];
          return (
            E(t) && (t = '&'),
            F(r, function (r, t) {
              (e = encodeURIComponent(r.toString())),
                (n = encodeURIComponent(t)),
                (o[o.length] = n + '=' + e);
            }),
            o.join(t)
          );
        }
        var k = function (t) {
          var e = function (r) {
            var t =
                /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
              e = {
                '\b': '\\b',
                '\t': '\\t',
                '\n': '\\n',
                '\f': '\\f',
                '\r': '\\r',
                '"': '\\"',
                '\\': '\\\\',
              };
            return (
              (t.lastIndex = 0),
              t.test(r)
                ? '"' +
                  r.replace(t, function (r) {
                    var t = e[r];
                    return 'string' == typeof t
                      ? t
                      : '\\u' +
                          ('0000' + r.charCodeAt(0).toString(16)).slice(-4);
                  }) +
                  '"'
                : '"' + r + '"'
            );
          };
          return (function t(n, a) {
            var u = '',
              c = 0,
              s = '',
              f = '',
              p = 0,
              l = u,
              x = [],
              v = a[n];
            switch (
              (v &&
                'object' === r(v) &&
                'function' == typeof v.toJSON &&
                (v = v.toJSON(n)),
              r(v))
            ) {
              case 'string':
                return e(v);
              case 'number':
                return isFinite(v) ? String(v) : 'null';
              case 'boolean':
              case 'undefined':
                return String(v);
              case 'object':
                if (!v) return 'null';
                if (
                  ((u += '    '), (x = []), '[object Array]' === o.apply(v))
                ) {
                  for (p = v.length, c = 0; c < p; c += 1)
                    x[c] = t(c, v) || 'null';
                  return (
                    (f =
                      0 === x.length
                        ? '[]'
                        : u
                        ? '[\n' + u + x.join(',\n' + u) + '\n' + l + ']'
                        : '[' + x.join(',') + ']'),
                    (u = l),
                    f
                  );
                }
                for (s in v)
                  i.call(v, s) &&
                    (f = t(s, v) || '') &&
                    x.push(e(s) + (u ? ': ' : ':') + f);
                return (
                  (f =
                    0 === x.length
                      ? '{}'
                      : u
                      ? '{' + x.join(',') + l + '}'
                      : '{' + x.join(',') + '}'),
                  (u = l),
                  f
                );
            }
          })('', {'': t});
        };
        exports.JSONEncode = k;
        var T = (function () {
          var r,
            t,
            e,
            n,
            o = {
              '"': '"',
              '\\': '\\',
              '/': '/',
              b: '\b',
              f: '\f',
              n: '\n',
              r: '\r',
              t: '\t',
            },
            i = function (t) {
              var n = new SyntaxError(t);
              throw ((n.at = r), (n.text = e), n);
            },
            a = function (n) {
              return (
                n &&
                  n !== t &&
                  i("Expected '" + n + "' instead of '" + t + "'"),
                (t = e.charAt(r)),
                (r += 1),
                t
              );
            },
            u = function () {
              var r,
                e = '';
              for ('-' === t && ((e = '-'), a('-')); t >= '0' && t <= '9'; )
                (e += t), a();
              if ('.' === t)
                for (e += '.'; a() && t >= '0' && t <= '9'; ) e += t;
              if ('e' === t || 'E' === t)
                for (
                  e += t, a(), ('-' !== t && '+' !== t) || ((e += t), a());
                  t >= '0' && t <= '9';

                )
                  (e += t), a();
              if (((r = +e), isFinite(r))) return r;
              i('Bad number');
            },
            c = function () {
              var r,
                e,
                n,
                u = '';
              if ('"' === t)
                for (; a(); ) {
                  if ('"' === t) return a(), u;
                  if ('\\' === t)
                    if ((a(), 'u' === t)) {
                      for (
                        n = 0, e = 0;
                        e < 4 && ((r = parseInt(a(), 16)), isFinite(r));
                        e += 1
                      )
                        n = 16 * n + r;
                      u += String.fromCharCode(n);
                    } else {
                      if ('string' != typeof o[t]) break;
                      u += o[t];
                    }
                  else u += t;
                }
              i('Bad string');
            },
            s = function () {
              for (; t && t <= ' '; ) a();
            },
            f = function () {
              var r = [];
              if ('[' === t) {
                if ((a('['), s(), ']' === t)) return a(']'), r;
                for (; t; ) {
                  if ((r.push(n()), s(), ']' === t)) return a(']'), r;
                  a(','), s();
                }
              }
              i('Bad array');
            },
            p = function () {
              var r,
                e = {};
              if ('{' === t) {
                if ((a('{'), s(), '}' === t)) return a('}'), e;
                for (; t; ) {
                  if (
                    ((r = c()),
                    s(),
                    a(':'),
                    Object.hasOwnProperty.call(e, r) &&
                      i('Duplicate key "' + r + '"'),
                    (e[r] = n()),
                    s(),
                    '}' === t)
                  )
                    return a('}'), e;
                  a(','), s();
                }
              }
              i('Bad object');
            };
          return (
            (n = function () {
              switch ((s(), t)) {
                case '{':
                  return p();
                case '[':
                  return f();
                case '"':
                  return c();
                case '-':
                  return u();
                default:
                  return t >= '0' && t <= '9'
                    ? u()
                    : (function () {
                        switch (t) {
                          case 't':
                            return a('t'), a('r'), a('u'), a('e'), !0;
                          case 'f':
                            return a('f'), a('a'), a('l'), a('s'), a('e'), !1;
                          case 'n':
                            return a('n'), a('u'), a('l'), a('l'), null;
                        }
                        i('Unexpected "' + t + '"');
                      })();
              }
            }),
            function (o) {
              var a;
              return (
                (e = o),
                (r = 0),
                (t = ' '),
                (a = n()),
                s(),
                t && i('Syntax error'),
                a
              );
            }
          );
        })();
        function U(r) {
          var t,
            e,
            n,
            o,
            i = '';
          for (
            t = e = 0,
              n = (r = (r + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n'))
                .length,
              o = 0;
            o < n;
            o++
          ) {
            var a = r.charCodeAt(o),
              u = null;
            a < 128
              ? e++
              : (u =
                  a > 127 && a < 2048
                    ? String.fromCharCode((a >> 6) | 192, (63 & a) | 128)
                    : String.fromCharCode(
                        (a >> 12) | 224,
                        ((a >> 6) & 63) | 128,
                        (63 & a) | 128
                      )),
              null !== u &&
                (e > t && (i += r.substring(t, e)), (i += u), (t = e = o + 1));
          }
          return e > t && (i += r.substring(t, r.length)), i;
        }
        function R(r) {
          var t,
            e,
            n,
            o,
            i,
            a =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            u = 0,
            c = 0,
            s = '',
            f = [];
          if (!r) return r;
          r = U(r);
          do {
            (t =
              ((i =
                (r.charCodeAt(u++) << 16) |
                (r.charCodeAt(u++) << 8) |
                r.charCodeAt(u++)) >>
                18) &
              63),
              (e = (i >> 12) & 63),
              (n = (i >> 6) & 63),
              (o = 63 & i),
              (f[c++] = a.charAt(t) + a.charAt(e) + a.charAt(n) + a.charAt(o));
          } while (u < r.length);
          switch (((s = f.join('')), r.length % 3)) {
            case 1:
              s = s.slice(0, -2) + '==';
              break;
            case 2:
              s = s.slice(0, -1) + '=';
          }
          return s;
        }
        exports.JSONDecode = T;
      },
      {},
    ],
    C9JJ: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.getConfig = o),
          (exports.USE_XHR = exports.DEFAULT_CONFIG = void 0);
        var e = {
          api_host: 'http://localhost:3000',
          api_method: 'POST',
          api_transport: 'XHR',
          autocapture: !0,
          persistence: 'cookie',
          persistence_name: '',
          cookie_name: '',
          loaded: function () {},
          store_google: !0,
          save_referrer: !0,
          test: !1,
          verbose: !1,
          img: !1,
          capture_pageview: !0,
          debug: !1,
          capture_links_timeout: 300,
          cookie_expiration: 365,
          upgrade: !1,
          disable_persistence: !1,
          disable_cookie: !1,
          secure_cookie: !1,
          ip: !0,
          opt_out_capturing_by_default: !1,
          opt_out_persistence_by_default: !1,
          opt_out_capturing_persistence_type: 'localStorage',
          opt_out_capturing_cookie_prefix: null,
          property_blacklist: [],
          xhr_headers: {},
          inapp_protocol: '//',
          inapp_link_new_window: !1,
          request_batching: !0,
        };
        exports.DEFAULT_CONFIG = e;
        var t =
          window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest();
        function o(t) {
          return e[t] || null;
        }
        exports.USE_XHR = t;
      },
      {},
    ],
    aMix: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.getQueryParam = a),
          (exports.request = s),
          (exports.fetch = i),
          (exports.sendBeacon = void 0);
        var e = require('./helpers'),
          t = require('../config'),
          r =
            window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest(),
          o = e.navigator.sendBeacon;
        o && (o = (0, e.bind)(o, e.navigator));
        var n = o;
        function a(e, t) {
          t = t.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
          var r = new RegExp('[\\?&]' + t + '=([^&#]*)').exec(e);
          if (null === r || (r && 'string' != typeof r[1] && r[1].length))
            return '';
          var o = r[1];
          try {
            o = decodeURIComponent(o);
          } catch (n) {
            console.error('Skipping decoding for malformed query param: ' + o);
          }
          return o.replace(/\+/g, ' ');
        }
        function s(o, a, s, i) {
          var c,
            d = {
              method: (0, t.getConfig)('api_method'),
              transport: (0, t.getConfig)('api_transport'),
            },
            p = null;
          i ||
            (!(0, e.isFunction)(s) && 'string' != typeof s) ||
            ((i = s), (s = null)),
            (s = (0, e.extend)(d, s || {})),
            r || (s.method = 'GET');
          var l = n && 'sendbeacon' === s.transport.toLowerCase(),
            u = l || 'POST' === s.method,
            g = (0, t.getConfig)('verbose');
          a.verbose && (g = !0),
            (0, t.getConfig)('test') && (a.test = 1),
            g && (a.verbose = 1),
            (0, t.getConfig)('img') && (a.img = 1),
            r ||
              (i
                ? (a.callback = i)
                : (g || (0, t.getConfig)('test')) &&
                  (a.callback = '(function(){})'));
          var f = {};
          if (
            ((f.ip = (0, t.getConfig)('ip') ? 1 : 0),
            (f._ = new Date().getTime().toString()),
            u &&
              ((p = Array.isArray(a) ? 'data=' + a : 'data=' + a.data),
              delete a.data),
            (o += '?' + (0, e.HTTPBuildQuery)(f)),
            'img' in a)
          ) {
            var v = document.createElement('img');
            (v.src = o), document.body.appendChild(v);
          } else if (l) {
            var m = new Blob([p || ''], {
              type: 'application/x-www-form-urlencoded',
            });
            n(o, m);
          } else if (r)
            try {
              var y = new XMLHttpRequest();
              y.open(s.method, o, !0);
              var h = (0, t.getConfig)('xhr_headers');
              u && (h['Content-Type'] = 'application/x-www-form-urlencoded'),
                (0, e.each)(h, function (e, t) {
                  y.setRequestHeader(t, e);
                }),
                (y.withCredentials = !0),
                (y.onreadystatechange = function () {
                  if (4 === y.readyState)
                    if (200 === y.status) {
                      if ((console.log(y.responseText), i))
                        if (g) {
                          var t;
                          try {
                            t = (0, e.JSONDecode)(y.responseText);
                          } catch (o) {
                            return void console.error(o);
                          }
                          i(t);
                        } else i(Number(y.responseText));
                    } else {
                      var r =
                        'Bad HTTP status: ' + y.status + ' ' + y.statusText;
                      console.error(r), i && i(g ? {status: 0, error: r} : 0);
                    }
                }),
                y.send(p);
            } catch (b) {
              console.error(b);
            }
          else {
            var x = document.createElement('script');
            (x.type = 'text/javascript'),
              (x.async = !0),
              (x.defer = !0),
              (x.src = o);
            var w = document.getElementsByTagName('script')[0];
            null === (c = w.parentNode) || void 0 === c || c.insertBefore(x, w);
          }
        }
        function i(t, r, o, n) {
          var a = o.format,
            i = void 0 === a ? 'base64' : a,
            c = (0, e.truncate)(r, 255),
            d = (0, e.JSONEncode)(c),
            p = (0, e.base64Encode)(d);
          s(t, {verbose: !0, data: 'json' === i ? d : p}, o, n);
        }
        exports.sendBeacon = n;
      },
      {'./helpers': '3whG', '../config': 'C9JJ'},
    ],
    '62OF': [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.session = exports.local = exports.cookie = void 0);
        var e = require('./helpers'),
          r = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
          t = {
            get: function (e) {
              try {
                for (
                  var r = e + '=', t = document.cookie.split(';'), o = 0;
                  o < t.length;
                  o++
                ) {
                  for (var n = t[o]; ' ' === n.charAt(0); )
                    n = n.substring(1, n.length);
                  if (0 === n.indexOf(r))
                    return decodeURIComponent(n.substring(r.length, n.length));
                }
              } catch (c) {}
              return null;
            },
            parse: function (r) {
              var o;
              try {
                o = (0, e.JSONDecode)(t.get(r)) || {};
              } catch (n) {}
              return o;
            },
            setSeconds: function (e, t, o, n, c) {
              try {
                var a = '',
                  s = '',
                  i = '';
                if (n) {
                  var u = document.location.hostname.match(r),
                    l = u ? u[0] : '';
                  a = l ? '; domain=.' + l : '';
                }
                if (o) {
                  var g = new Date();
                  g.setTime(g.getTime() + 1e3 * o),
                    (s = '; expires=' + g.toUTCString());
                }
                c && (i = '; secure'),
                  (document.cookie =
                    e + '=' + encodeURIComponent(t) + s + '; path=/' + a + i);
              } catch (p) {
                return;
              }
            },
            set: function (e, t, o, n, c) {
              try {
                var a = '',
                  s = '',
                  i = '';
                if (n) {
                  var u = document.location.hostname.match(r),
                    l = u ? u[0] : '';
                  a = l ? '; domain=.' + l : '';
                }
                if (o) {
                  var g = new Date();
                  g.setTime(g.getTime() + 24 * o * 60 * 60 * 1e3),
                    (s = '; expires=' + g.toUTCString());
                }
                c && (i = '; secure');
                var p =
                  e + '=' + encodeURIComponent(t) + s + '; path=/' + a + i;
                return (document.cookie = p), p;
              } catch (m) {
                return;
              }
            },
            remove: function (e, r) {
              try {
                t.set(e, '', -1, r);
              } catch (o) {
                return;
              }
            },
          };
        exports.cookie = t;
        var o = null,
          n = {
            isSupported: function () {
              if (null !== o) return o;
              var e = !0;
              try {
                var r = '__lssupport__';
                n.set(r, 'xyz'), 'xyz' !== n.get(r) && (e = !1), n.remove(r);
              } catch (t) {
                e = !1;
              }
              return (
                e ||
                  console.error(
                    'localStorage unsupported; falling back to cookie store'
                  ),
                (o = e),
                e
              );
            },
            error: function (e) {
              console.error('localStorage error: ' + e);
            },
            get: function (e) {
              try {
                return window.localStorage.getItem(e);
              } catch (r) {
                n.error(r);
              }
              return null;
            },
            parse: function (r) {
              try {
                return (0, e.JSONDecode)(n.get(r)) || null;
              } catch (t) {}
              return null;
            },
            set: function (e, r) {
              try {
                window.localStorage.setItem(e, r);
              } catch (t) {
                n.error(t);
              }
            },
            remove: function (e) {
              try {
                window.localStorage.removeItem(e);
              } catch (r) {
                n.error(r);
              }
            },
          };
        exports.local = n;
        var c = null,
          a = {
            isSupported: function () {
              if (null !== c) return c;
              var e = !0;
              try {
                var r = '__lssupport__';
                a.set(r, 'xyz'), 'xyz' !== a.get(r) && (e = !1), a.remove(r);
              } catch (t) {
                e = !1;
              }
              return (
                e ||
                  console.error(
                    'sessionStorage unsupported; falling back to cookie store'
                  ),
                (c = e),
                e
              );
            },
            error: function (e) {
              console.error('sessionStorage error: ' + e);
            },
            get: function (e) {
              try {
                return window.sessionStorage.getItem(e);
              } catch (r) {
                a.error(r);
              }
              return null;
            },
            parse: function (r) {
              try {
                return (0, e.JSONDecode)(a.get(r)) || null;
              } catch (t) {}
              return null;
            },
            set: function (e, r) {
              try {
                window.sessionStorage.setItem(e, r);
              } catch (t) {
                a.error(t);
              }
            },
            remove: function (e) {
              try {
                window.sessionStorage.removeItem(e);
              } catch (r) {
                a.error(r);
              }
            },
          };
        exports.session = a;
      },
      {'./helpers': '3whG'},
    ],
    Nc59: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.getUserInfo = o),
          (exports.default = void 0);
        var e = require('./helpers'),
          r = require('./http'),
          n = {
            campaignParams: function () {
              var n =
                  'utm_source utm_medium utm_campaign utm_content utm_term'.split(
                    ' '
                  ),
                o = '',
                i = {};
              return (
                (0, e.each)(n, function (e) {
                  (o = (0, r.getQueryParam)(document.URL, e)).length &&
                    (i[e] = o);
                }),
                i
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
              var o = n.searchEngine(e),
                i = 'yahoo' !== o ? 'q' : 'p',
                t = {};
              if (null !== o) {
                t.$search_engine = o;
                var s = (0, r.getQueryParam)(e, i);
                s.length && (t.ph_keyword = s);
              }
              return t;
            },
            browser: function (r, n, o) {
              return (
                (n = n || ''),
                o || (0, e.includes)(r, ' OPR/')
                  ? (0, e.includes)(r, 'Mini')
                    ? 'Opera Mini'
                    : 'Opera'
                  : /(BlackBerry|PlayBook|BB10)/i.test(r)
                  ? 'BlackBerry'
                  : (0, e.includes)(r, 'IEMobile') ||
                    (0, e.includes)(r, 'WPDesktop')
                  ? 'Internet Explorer Mobile'
                  : (0, e.includes)(r, 'SamsungBrowser/')
                  ? 'Samsung Internet'
                  : (0, e.includes)(r, 'Edge') || (0, e.includes)(r, 'Edg/')
                  ? 'Microsoft Edge'
                  : (0, e.includes)(r, 'FBIOS')
                  ? 'Facebook Mobile'
                  : (0, e.includes)(r, 'Chrome')
                  ? 'Chrome'
                  : (0, e.includes)(r, 'CriOS')
                  ? 'Chrome iOS'
                  : (0, e.includes)(r, 'UCWEB') ||
                    (0, e.includes)(r, 'UCBrowser')
                  ? 'UC Browser'
                  : (0, e.includes)(r, 'FxiOS')
                  ? 'Firefox iOS'
                  : (0, e.includes)(n, 'Apple')
                  ? (0, e.includes)(r, 'Mobile')
                    ? 'Mobile Safari'
                    : 'Safari'
                  : (0, e.includes)(r, 'Android')
                  ? 'Android Mobile'
                  : (0, e.includes)(r, 'Konqueror')
                  ? 'Konqueror'
                  : (0, e.includes)(r, 'Firefox')
                  ? 'Firefox'
                  : (0, e.includes)(r, 'MSIE') || (0, e.includes)(r, 'Trident/')
                  ? 'Internet Explorer'
                  : (0, e.includes)(r, 'Gecko')
                  ? 'Mozilla'
                  : ''
              );
            },
            browserVersion: function (e, r, o) {
              var i = {
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
              }[n.browser(e, r, o)];
              if (void 0 === i) return null;
              var t = e.match(i);
              return t ? parseFloat(t[t.length - 2]) : null;
            },
            os: function () {
              var r = e.userAgent;
              return /Windows/i.test(r)
                ? /Phone/.test(r) || /WPDesktop/.test(r)
                  ? 'Windows Phone'
                  : 'Windows'
                : /(iPhone|iPad|iPod)/.test(r)
                ? 'iOS'
                : /Android/.test(r)
                ? 'Android'
                : /(BlackBerry|PlayBook|BB10)/i.test(r)
                ? 'BlackBerry'
                : /Mac/i.test(r)
                ? 'Mac OS X'
                : /Linux/.test(r)
                ? 'Linux'
                : /CrOS/.test(r)
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
              return (0, e.extend)(
                (0, e.stripEmptyProperties)({
                  os: n.os(),
                  browser: n.browser(
                    e.userAgent,
                    e.navigator.vendor,
                    e.windowOpera
                  ),
                  referrer: document.referrer,
                  referring_domain: n.referringDomain(document.referrer),
                  device: n.device(e.userAgent),
                  time_zone: n.timezone(e.intl),
                }),
                {
                  current_url: e.win.location.href,
                  host: e.win.location.host,
                  pathname: e.win.location.pathname,
                  browser_version: n.browserVersion(
                    e.userAgent,
                    e.navigator.vendor,
                    e.windowOpera
                  ),
                  screen_height: e.win.screen.height,
                  screen_width: e.win.screen.width,
                  lib: 'web',
                  insert_id:
                    Math.random().toString(36).substring(2, 10) +
                    Math.random().toString(36).substring(2, 10),
                  time: (0, e.timestamp)() / 1e3,
                }
              );
            },
            people_properties: function () {
              return (0, e.extend)(
                (0, e.stripEmptyProperties)({
                  $os: n.os(),
                  $browser: n.browser(
                    e.userAgent,
                    e.navigator.vendor,
                    e.windowOpera
                  ),
                }),
                {
                  $browser_version: n.browserVersion(
                    e.userAgent,
                    e.navigator.vendor,
                    e.windowOpera
                  ),
                }
              );
            },
          };
        function o() {
          return n.properties();
        }
        var i = n;
        exports.default = i;
      },
      {'./helpers': '3whG', './http': 'aMix'},
    ],
    Zv2z: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.addVisibilityEventListener =
            exports.isWindowHidden =
            exports.getBrowserVisibilityInfo =
              void 0);
        var i = function (i) {
          return void 0 !== i.hidden
            ? {
                hidden: 'hidden',
                event: 'visibilitychange',
                state: 'visibilityState',
              }
            : void 0 !== i.mozHidden
            ? {
                hidden: 'mozHidden',
                event: 'mozvisibilitychange',
                state: 'mozVisibilityState',
              }
            : void 0 !== i.msHidden
            ? {
                hidden: 'msHidden',
                event: 'msvisibilitychange',
                state: 'msVisibilityState',
              }
            : void 0 !== i.webkitHidden
            ? {
                hidden: 'webkitHidden',
                event: 'webkitvisibilitychange',
                state: 'webkitVisibilityState',
              }
            : {hidden: null, event: null, state: null};
        };
        exports.getBrowserVisibilityInfo = i;
        var e = function (e) {
          var t = i(e).hidden;
          return !!t && !!e[t];
        };
        exports.isWindowHidden = e;
        var t = function (e, t) {
          var n = i(e).event;
          return (
            e.addEventListener(n, t, !1),
            function () {
              return e.removeEventListener(n, t);
            }
          );
        };
        exports.addVisibilityEventListener = t;
      },
      {},
    ],
    IqTo: [
      function (require, module, exports) {
        'use strict';
        function e(e, n) {
          if (!(e instanceof n))
            throw new TypeError('Cannot call a class as a function');
        }
        function n(e, n) {
          for (var o = 0; o < n.length; o++) {
            var a = n[o];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              'value' in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        function o(e, o, a) {
          return o && n(e.prototype, o), a && n(e, a), e;
        }
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.default = void 0);
        var a = (function () {
            function n(o) {
              e(this, n), (this.debugModeEnabled = !!o);
            }
            return (
              o(n, [
                {
                  key: 'debug',
                  value: function () {
                    var e;
                    this.debugModeEnabled &&
                      (e = console).debug.apply(e, arguments);
                  },
                },
                {
                  key: 'log',
                  value: function () {
                    var e;
                    this.debugModeEnabled &&
                      (e = console).log.apply(e, arguments);
                  },
                },
                {
                  key: 'info',
                  value: function () {
                    var e;
                    (e = console).info.apply(e, arguments);
                  },
                },
                {
                  key: 'warn',
                  value: function () {
                    var e;
                    (e = console).warn.apply(e, arguments);
                  },
                },
                {
                  key: 'error',
                  value: function () {
                    var e;
                    (e = console).error.apply(e, arguments);
                  },
                },
              ]),
              n
            );
          })(),
          r = a;
        exports.default = r;
      },
      {},
    ],
    txY7: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          (exports.default =
            exports.findCustomerByExternalId =
            exports.updateCustomerMetadata =
            exports.createNewCustomer =
            exports.getWebsocketUrl =
              void 0);
        var e = require('phoenix'),
          t = require('rrweb'),
          r = h(require('superagent')),
          n = require('./utils/helpers'),
          i = require('./utils/http'),
          s = h(require('./utils/storage')),
          o = require('./utils/info'),
          a = require('./utils/visibility'),
          u = c(require('./utils/logger'));
        function c(e) {
          return e && e.__esModule ? e : {default: e};
        }
        function d() {
          if ('function' != typeof WeakMap) return null;
          var e = new WeakMap();
          return (
            (d = function () {
              return e;
            }),
            e
          );
        }
        function h(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e))
            return {default: e};
          var t = d();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var s = n ? Object.getOwnPropertyDescriptor(e, i) : null;
              s && (s.get || s.set)
                ? Object.defineProperty(r, i, s)
                : (r[i] = e[i]);
            }
          return (r.default = e), t && t.set(e, r), r;
        }
        function l(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        function f(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function p(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        function g(e, t, r) {
          return t && p(e.prototype, t), r && p(e, r), e;
        }
        function b(e, t) {
          return x(e) || w(e, t) || v(e, t) || m();
        }
        function m() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        function v(e, t) {
          if (e) {
            if ('string' == typeof e) return y(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return (
              'Object' === r && e.constructor && (r = e.constructor.name),
              'Map' === r || 'Set' === r
                ? Array.from(e)
                : 'Arguments' === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? y(e, t)
                : void 0
            );
          }
        }
        function y(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function w(e, t) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
            var r = [],
              n = !0,
              i = !1,
              s = void 0;
            try {
              for (
                var o, a = e[Symbol.iterator]();
                !(n = (o = a.next()).done) &&
                (r.push(o.value), !t || r.length !== t);
                n = !0
              );
            } catch (u) {
              (i = !0), (s = u);
            } finally {
              try {
                n || null == a.return || a.return();
              } finally {
                if (i) throw s;
              }
            }
            return r;
          }
        }
        function x(e) {
          if (Array.isArray(e)) return e;
        }
        var k = function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, s) {
              function o(e) {
                try {
                  u(n.next(e));
                } catch (t) {
                  s(t);
                }
              }
              function a(e) {
                try {
                  u(n.throw(e));
                } catch (t) {
                  s(t);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })).then(o, a);
              }
              u((n = n.apply(e, t || [])).next());
            });
          },
          S = 'https://app.papercups.io',
          I = 'replay:event:emitted',
          C = 'session:active',
          _ = 'session:inactive',
          R = 'deska:storytime:session',
          O = '__DESKA____CUSTOMER_ID__',
          j = {},
          E = function () {
            var e = b(
                (arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : S
                ).split('://'),
                2
              ),
              t = e[0],
              r = e[1];
            return ''
              .concat('https' === t ? 'wss' : 'ws', '://')
              .concat(r, '/socket');
          };
        exports.getWebsocketUrl = E;
        var U = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : j,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : S;
          return k(
            void 0,
            void 0,
            void 0,
            regeneratorRuntime.mark(function i() {
              return regeneratorRuntime.wrap(function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return i.abrupt(
                        'return',
                        r
                          .post(''.concat(n, '/api/customers'))
                          .send({
                            customer: Object.assign(Object.assign({}, t), {
                              account_id: e,
                              first_seen: new Date(),
                              last_seen: new Date(),
                            }),
                          })
                          .then(function (e) {
                            return e.body.data;
                          })
                      );
                    case 1:
                    case 'end':
                      return i.stop();
                  }
              }, i);
            })
          );
        };
        exports.createNewCustomer = U;
        var P = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : j,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : S;
          return k(
            void 0,
            void 0,
            void 0,
            regeneratorRuntime.mark(function i() {
              return regeneratorRuntime.wrap(function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return i.abrupt(
                        'return',
                        r
                          .put(
                            ''
                              .concat(n, '/api/customers/')
                              .concat(e, '/metadata')
                          )
                          .send({metadata: t})
                          .then(function (e) {
                            return e.body.data;
                          })
                      );
                    case 1:
                    case 'end':
                      return i.stop();
                  }
              }, i);
            })
          );
        };
        exports.updateCustomerMetadata = P;
        var M = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S;
          return k(
            void 0,
            void 0,
            void 0,
            regeneratorRuntime.mark(function i() {
              return regeneratorRuntime.wrap(function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return i.abrupt(
                        'return',
                        r
                          .get(''.concat(n, '/api/customers/identify'))
                          .query({external_id: e, account_id: t})
                          .then(function (e) {
                            return e.body.data;
                          })
                      );
                    case 1:
                    case 'end':
                      return i.stop();
                  }
              }, i);
            })
          );
        };
        exports.findCustomerByExternalId = M;
        var B = (function () {
            function c(t) {
              var d = this;
              f(this, c),
                (this.handleVisibilityChange = function (e) {
                  var t = n.document || (e && e.target);
                  d.channel &&
                    ((0, a.isWindowHidden)(t)
                      ? d.channel.push(_, {ts: +new Date()})
                      : d.channel.push(C, {ts: +new Date()}));
                }),
                (this.cacheCustomerId = function (e) {
                  n.win.dispatchEvent(
                    new CustomEvent('storytime:customer:set', {detail: e})
                  ),
                    s.local.set(O, JSON.stringify(e));
                }),
                (this.formatCustomerMetadata = function (e) {
                  return e
                    ? Object.keys(e).reduce(function (t, r) {
                        return 'metadata' === r
                          ? Object.assign(Object.assign({}, t), l({}, r, e[r]))
                          : Object.assign(
                              Object.assign({}, t),
                              l({}, r, String(e[r]))
                            );
                      }, {})
                    : {};
                }),
                (this.findOrCreateCustomerId = function () {
                  return k(
                    d,
                    void 0,
                    void 0,
                    regeneratorRuntime.mark(function e() {
                      var t, r, n, i, s, a, u;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.checkForExistingCustomerId()
                                );
                              case 2:
                                if (!(t = e.sent)) {
                                  e.next = 6;
                                  break;
                                }
                                return (
                                  this.logger.debug(
                                    'Found existing customer id!',
                                    t
                                  ),
                                  e.abrupt('return', t)
                                );
                              case 6:
                                return (
                                  (r = this.accountId),
                                  (n = this.baseUrl),
                                  (i = this.customer),
                                  (s = this.formatCustomerMetadata(
                                    Object.assign(
                                      Object.assign({}, (0, o.getUserInfo)()),
                                      i
                                    )
                                  )),
                                  (e.next = 10),
                                  U(r, s, n)
                                );
                              case 10:
                                return (
                                  (a = e.sent),
                                  (u = a.id),
                                  this.logger.debug(
                                    'Created new customer id!',
                                    u
                                  ),
                                  e.abrupt('return', u)
                                );
                              case 14:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                }),
                (this.checkForExistingCustomerId = function () {
                  return k(
                    d,
                    void 0,
                    void 0,
                    regeneratorRuntime.mark(function e() {
                      var t, r, n, i, o, a, u;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = s.local.parse(O)),
                                  (r = this.accountId),
                                  (n = this.baseUrl),
                                  (i = this.customer) &&
                                    (null == i ? void 0 : i.external_id))
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return (
                                  this.logger.debug(
                                    'No external_id specified - returning cachedId:',
                                    t
                                  ),
                                  e.abrupt('return', t)
                                );
                              case 5:
                                return (
                                  (o = i.external_id), (e.next = 8), M(o, r, n)
                                );
                              case 8:
                                if (((a = e.sent), (u = a.customer_id))) {
                                  e.next = 15;
                                  break;
                                }
                                return (
                                  this.logger.debug(
                                    'No matching id found, returning null'
                                  ),
                                  e.abrupt('return', null)
                                );
                              case 15:
                                if (u !== t) {
                                  e.next = 18;
                                  break;
                                }
                                return (
                                  this.logger.debug(
                                    'Matching id matches cachedId!',
                                    {matchingCustomerId: u, cachedId: t}
                                  ),
                                  e.abrupt('return', t)
                                );
                              case 18:
                                return (
                                  this.logger.debug('Matching id found!', u),
                                  e.abrupt('return', u)
                                );
                              case 20:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                }),
                (this.createBrowserSession = function (e, t) {
                  return k(
                    d,
                    void 0,
                    void 0,
                    regeneratorRuntime.mark(function n() {
                      var i;
                      return regeneratorRuntime.wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (i = (0, o.getUserInfo)()),
                                  n.abrupt(
                                    'return',
                                    r
                                      .post(
                                        ''.concat(
                                          this.baseUrl,
                                          '/api/browser_sessions'
                                        )
                                      )
                                      .send({
                                        browser_session: {
                                          account_id: e,
                                          customer_id: t,
                                          started_at: new Date(),
                                          metadata: i,
                                        },
                                      })
                                      .then(function (e) {
                                        return e.body.data;
                                      })
                                  )
                                );
                              case 2:
                              case 'end':
                                return n.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                }),
                (this.isValidSessionId = function (e) {
                  return k(
                    d,
                    void 0,
                    void 0,
                    regeneratorRuntime.mark(function t() {
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (e && e.length) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt('return', !1);
                              case 2:
                                return t.abrupt(
                                  'return',
                                  r
                                    .get(
                                      ''
                                        .concat(
                                          this.baseUrl,
                                          '/api/browser_sessions/'
                                        )
                                        .concat(e, '/exists')
                                    )
                                    .then(function (e) {
                                      return e.body.data;
                                    })
                                );
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                }),
                (this.setBrowserSessionCustomer = function (e, t) {
                  return k(
                    d,
                    void 0,
                    void 0,
                    regeneratorRuntime.mark(function n() {
                      return regeneratorRuntime.wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return n.abrupt(
                                  'return',
                                  r
                                    .post(
                                      ''
                                        .concat(
                                          this.baseUrl,
                                          '/api/browser_sessions/'
                                        )
                                        .concat(e, '/identify')
                                    )
                                    .send({customer_id: t})
                                    .then(function (e) {
                                      return e.body.data;
                                    })
                                );
                              case 1:
                              case 'end':
                                return n.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                }),
                (this.restartBrowserSession = function (e) {
                  (0, i.fetch)(
                    ''
                      .concat(d.baseUrl, '/api/browser_sessions/')
                      .concat(e, '/restart'),
                    {},
                    {transport: 'sendbeacon'}
                  );
                }),
                (this.finishBrowserSession = function (e) {
                  (0, i.fetch)(
                    ''
                      .concat(d.baseUrl, '/api/browser_sessions/')
                      .concat(e, '/finish'),
                    {},
                    {transport: 'sendbeacon'}
                  );
                }),
                (this.accountId = t.accountId),
                (this.customer = t.customer || {}),
                (this.sessionId = s.session.get(R)),
                (this.customerId = s.local.parse(O)),
                (this.publicKey = t.publicKey),
                (this.blocklist = t.blocklist || []),
                (this.baseUrl = t.baseUrl || S),
                (this.logger = new u.default(!!t.debug)),
                (this.version = '1.0.5'),
                (this.socket = new e.Socket(E(this.baseUrl)));
            }
            return (
              g(
                c,
                [
                  {
                    key: 'listen',
                    value: function () {
                      return k(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function e() {
                          var t = this;
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      this.socket.isConnected() ||
                                        this.socket.connect(),
                                      this.socket.onError(function (e) {
                                        t.logger.error(e);
                                      }),
                                      (e.next = 5),
                                      this.findOrCreateCustomerId()
                                    );
                                  case 5:
                                    return (
                                      (this.customerId = e.sent),
                                      this.cacheCustomerId(this.customerId),
                                      (e.next = 9),
                                      this.getSessionId(
                                        this.accountId,
                                        this.customerId
                                      )
                                    );
                                  case 9:
                                    (this.sessionId = e.sent),
                                      (this.channel = this.socket.channel(
                                        this.getChannelName(this.sessionId),
                                        {
                                          customerId: this.customerId,
                                          publicKey: this.publicKey,
                                        }
                                      )),
                                      this.channel
                                        .join()
                                        .receive('ok', function () {
                                          return (
                                            t.sessionId &&
                                            t.onConnectionSuccess(t.sessionId)
                                          );
                                        })
                                        .receive('error', function (e) {
                                          return t.onConnectionError(e);
                                        }),
                                      (this.unsubscribe = (0,
                                      a.addVisibilityEventListener)(
                                        n.document,
                                        this.handleVisibilityChange
                                      )),
                                      (e.next = 18);
                                    break;
                                  case 15:
                                    (e.prev = 15),
                                      (e.t0 = e.catch(0)),
                                      this.logger.error(
                                        '[Storytime] Error on `listen`:',
                                        e.t0
                                      );
                                  case 18:
                                    return e.abrupt('return', this);
                                  case 19:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[0, 15]]
                          );
                        })
                      );
                    },
                  },
                  {
                    key: 'finish',
                    value: function () {
                      this.sessionId &&
                        (this.logger.debug(
                          '[Storytime] Marking session over...'
                        ),
                        this.finishBrowserSession(this.sessionId)),
                        this.stop &&
                          (this.logger.debug('[Storytime] Stopping...'),
                          this.stop()),
                        this.unsubscribe &&
                          (this.logger.debug(
                            '[Storytime] Unsubscribing visibility handler...'
                          ),
                          this.unsubscribe()),
                        this.socket &&
                          this.socket.disconnect &&
                          (this.logger.debug(
                            '[Storytime] Disconnecting socket...'
                          ),
                          this.socket.disconnect()),
                        this.channel &&
                          this.channel.leave &&
                          (this.logger.debug('[Storytime] Leaving channel...'),
                          this.channel.leave()),
                        (n.win.Storytime = {});
                    },
                  },
                  {
                    key: 'captureReplayEvent',
                    value: function (e) {
                      this.channel.push(I, {
                        event: e,
                        customer_id: this.customerId,
                      });
                    },
                  },
                  {
                    key: 'startRecordingSession',
                    value: function () {
                      var e = this;
                      this.logger.debug('Start recording!', this),
                        (this.stop = (0, t.record)({
                          emit: function (t) {
                            var r = n.win.location.pathname;
                            e.shouldEmitEvent(r) && e.captureReplayEvent(t);
                          },
                        }));
                    },
                  },
                  {
                    key: 'stopRecordingSession',
                    value: function () {
                      this.stop &&
                        'function' == typeof this.stop &&
                        (this.logger.debug('Stopped recording!', this),
                        this.stop());
                    },
                  },
                  {
                    key: 'onConnectionSuccess',
                    value: function (t) {
                      var r = this;
                      n.win.Storytime.initialized = !0;
                      var i = new e.Presence(this.channel);
                      i.onSync(function () {
                        i
                          .list()
                          .map(function (e) {
                            var t = e.metas;
                            return void 0 === t ? [] : t;
                          })
                          .reduce(function (e, t) {
                            return e.concat(t);
                          }, [])
                          .filter(function (e) {
                            if (!e) return !1;
                            var t = e.session_id;
                            return e.admin && !!t;
                          }).length > 0
                          ? (r.stopRecordingSession(),
                            r.startRecordingSession())
                          : r.stopRecordingSession();
                      }),
                        n.win.addEventListener(
                          'deska:customer:set',
                          function (e) {
                            var n = e.detail;
                            r.setBrowserSessionCustomer(t, n);
                          }
                        ),
                        n.win.addEventListener('beforeunload', function () {
                          r.finishBrowserSession(t);
                        }),
                        this.handleVisibilityChange();
                    },
                  },
                  {
                    key: 'onConnectionError',
                    value: function (e) {
                      this.logger.error(e);
                    },
                  },
                  {
                    key: 'shouldEmitEvent',
                    value: function (e) {
                      return this.blocklist.every(function (t) {
                        return -1 === e.indexOf(t);
                      });
                    },
                  },
                  {
                    key: 'getSessionId',
                    value: function (e, t) {
                      return k(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function r() {
                          var n, i, o, a, u, c;
                          return regeneratorRuntime.wrap(
                            function (r) {
                              for (;;)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    if (s.session.isSupported()) {
                                      r.next = 6;
                                      break;
                                    }
                                    return (
                                      (r.next = 3),
                                      this.createBrowserSession(e, t)
                                    );
                                  case 3:
                                    return (
                                      (n = r.sent),
                                      (i = n.id),
                                      r.abrupt('return', i)
                                    );
                                  case 6:
                                    return (
                                      (o = s.session.get(R)),
                                      (r.next = 9),
                                      this.isValidSessionId(o)
                                    );
                                  case 9:
                                    if (((a = r.sent), !o || !a)) {
                                      r.next = 15;
                                      break;
                                    }
                                    return (
                                      this.restartBrowserSession(o),
                                      (r.next = 14),
                                      this.setBrowserSessionCustomer(o, t)
                                    );
                                  case 14:
                                    return r.abrupt('return', o);
                                  case 15:
                                    return (
                                      (r.next = 17),
                                      this.createBrowserSession(e, t)
                                    );
                                  case 17:
                                    return (
                                      (u = r.sent),
                                      (c = u.id),
                                      s.session.set(R, c),
                                      r.abrupt('return', c)
                                    );
                                  case 21:
                                  case 'end':
                                    return r.stop();
                                }
                            },
                            r,
                            this
                          );
                        })
                      );
                    },
                  },
                  {
                    key: 'getChannelName',
                    value: function (e) {
                      return 'events:'.concat(this.accountId, ':').concat(e);
                    },
                  },
                ],
                [
                  {
                    key: 'init',
                    value: function (e) {
                      (n.win.Storytime = n.win.Storytime || {}),
                        n.win.Storytime.initialized &&
                          (console.warn(
                            'Storytime has already been initialized!'
                          ),
                          console.warn(
                            'This may result in some unexpected issues.'
                          ));
                      var t = new c(e);
                      return (
                        (n.win.Storytime = t),
                        t.publicKey
                          ? t.listen()
                          : console.warn(
                              'Please upgrade your Papercups subscription plan to use Storytime!'
                            ),
                        t
                      );
                    },
                  },
                ]
              ),
              c
            );
          })(),
          q = B;
        exports.default = q;
      },
      {
        phoenix: 'XFqm',
        rrweb: 'swtb',
        superagent: 'jn4M',
        './utils/helpers': '3whG',
        './utils/http': 'aMix',
        './utils/storage': '62OF',
        './utils/info': 'Nc59',
        './utils/visibility': 'Zv2z',
        './utils/logger': 'IqTo',
      },
    ],
    '7QCb': [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {value: !0}),
          Object.defineProperty(exports, 'Storytime', {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          });
        var e = t(require('./storytime'));
        function t(e) {
          return e && e.__esModule ? e : {default: e};
        }
      },
      {'./storytime': 'txY7'},
    ],
    dgRt: [
      function (require, module, exports) {
        'use strict';
        require('regenerator-runtime/runtime');
        var e = require('./index'),
          r = window,
          t = (r.Papercups && r.Papercups.config) || {},
          i = t.accountId,
          u = t.customer,
          c = t.baseUrl,
          o = t.debug,
          n = t.publicKey;
        if (!i)
          throw new Error('An account token is required to start Storytime!');
        e.Storytime.init({
          accountId: i,
          baseUrl: c,
          customer: u,
          debug: o,
          publicKey: n,
        });
      },
      {'regenerator-runtime/runtime': 'QVnC', './index': '7QCb'},
    ],
  },
  {},
  ['dgRt'],
  null
);
