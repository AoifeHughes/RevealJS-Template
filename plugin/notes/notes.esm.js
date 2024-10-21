var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
            ? self
            : {},
  e = function (t) {
    return t && t.Math == Math && t;
  },
  n =
    e("object" == typeof globalThis && globalThis) ||
    e("object" == typeof window && window) ||
    e("object" == typeof self && self) ||
    e("object" == typeof t && t) ||
    (function () {
      return this;
    })() ||
    Function("return this")(),
  r = {},
  u = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  },
  i = !u(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  a = {},
  o = {}.propertyIsEnumerable,
  l = Object.getOwnPropertyDescriptor,
  s = l && !o.call({ 1: 2 }, 1);
a.f = s
  ? function (t) {
      var e = l(this, t);
      return !!e && e.enumerable;
    }
  : o;
var c = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e,
    };
  },
  p = {}.toString,
  d = function (t) {
    return p.call(t).slice(8, -1);
  },
  f = d,
  h = "".split,
  g = u(function () {
    return !Object("z").propertyIsEnumerable(0);
  })
    ? function (t) {
        return "String" == f(t) ? h.call(t, "") : Object(t);
      }
    : Object,
  D = function (t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t;
  },
  m = g,
  v = D,
  y = function (t) {
    return m(v(t));
  },
  k = function (t) {
    return "object" == typeof t ? null !== t : "function" == typeof t;
  },
  A = k,
  E = function (t, e) {
    if (!A(t)) return t;
    var n, r;
    if (e && "function" == typeof (n = t.toString) && !A((r = n.call(t))))
      return r;
    if ("function" == typeof (n = t.valueOf) && !A((r = n.call(t)))) return r;
    if (!e && "function" == typeof (n = t.toString) && !A((r = n.call(t))))
      return r;
    throw TypeError("Can't convert object to primitive value");
  },
  b = D,
  F = function (t) {
    return Object(b(t));
  },
  C = F,
  x = {}.hasOwnProperty,
  w = function (t, e) {
    return x.call(C(t), e);
  },
  S = k,
  B = n.document,
  _ = S(B) && S(B.createElement),
  T = function (t) {
    return _ ? B.createElement(t) : {};
  },
  z = T,
  I =
    !i &&
    !u(function () {
      return (
        7 !=
        Object.defineProperty(z("div"), "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  R = i,
  $ = a,
  O = c,
  P = y,
  L = E,
  j = w,
  M = I,
  N = Object.getOwnPropertyDescriptor;
r.f = R
  ? N
  : function (t, e) {
      if (((t = P(t)), (e = L(e, !0)), M))
        try {
          return N(t, e);
        } catch (t) {}
      if (j(t, e)) return O(!$.f.call(t, e), t[e]);
    };
var U = {},
  q = k,
  Z = function (t) {
    if (!q(t)) throw TypeError(String(t) + " is not an object");
    return t;
  },
  K = i,
  J = I,
  H = Z,
  W = E,
  Y = Object.defineProperty;
U.f = K
  ? Y
  : function (t, e, n) {
      if ((H(t), (e = W(e, !0)), H(n), J))
        try {
          return Y(t, e, n);
        } catch (t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
      return "value" in n && (t[e] = n.value), t;
    };
var V = U,
  X = c,
  G = i
    ? function (t, e, n) {
        return V.f(t, e, X(1, n));
      }
    : function (t, e, n) {
        return (t[e] = n), t;
      },
  Q = { exports: {} },
  tt = n,
  et = G,
  nt = function (t, e) {
    try {
      et(tt, t, e);
    } catch (n) {
      tt[t] = e;
    }
    return e;
  },
  rt = nt,
  ut = n["__core-js_shared__"] || rt("__core-js_shared__", {}),
  it = ut,
  at = Function.toString;
"function" != typeof it.inspectSource &&
  (it.inspectSource = function (t) {
    return at.call(t);
  });
var ot = it.inspectSource,
  lt = ot,
  st = n.WeakMap,
  ct = "function" == typeof st && /native code/.test(lt(st)),
  pt = { exports: {} },
  dt = ut;
(pt.exports = function (t, e) {
  return dt[t] || (dt[t] = void 0 !== e ? e : {});
})("versions", []).push({
  version: "3.12.1",
  mode: "global",
  copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
});
var ft,
  ht,
  gt,
  Dt = 0,
  mt = Math.random(),
  vt = function (t) {
    return (
      "Symbol(" +
      String(void 0 === t ? "" : t) +
      ")_" +
      (++Dt + mt).toString(36)
    );
  },
  yt = pt.exports,
  kt = vt,
  At = yt("keys"),
  Et = function (t) {
    return At[t] || (At[t] = kt(t));
  },
  bt = {},
  Ft = ct,
  Ct = k,
  xt = G,
  wt = w,
  St = ut,
  Bt = Et,
  _t = bt,
  Tt = n.WeakMap;
if (Ft || St.state) {
  var zt = St.state || (St.state = new Tt()),
    It = zt.get,
    Rt = zt.has,
    $t = zt.set;
  (ft = function (t, e) {
    if (Rt.call(zt, t)) throw new TypeError("Object already initialized");
    return (e.facade = t), $t.call(zt, t, e), e;
  }),
    (ht = function (t) {
      return It.call(zt, t) || {};
    }),
    (gt = function (t) {
      return Rt.call(zt, t);
    });
} else {
  var Ot = Bt("state");
  (_t[Ot] = !0),
    (ft = function (t, e) {
      if (wt(t, Ot)) throw new TypeError("Object already initialized");
      return (e.facade = t), xt(t, Ot, e), e;
    }),
    (ht = function (t) {
      return wt(t, Ot) ? t[Ot] : {};
    }),
    (gt = function (t) {
      return wt(t, Ot);
    });
}
var Pt = {
    set: ft,
    get: ht,
    has: gt,
    enforce: function (t) {
      return gt(t) ? ht(t) : ft(t, {});
    },
    getterFor: function (t) {
      return function (e) {
        var n;
        if (!Ct(e) || (n = ht(e)).type !== t)
          throw TypeError("Incompatible receiver, " + t + " required");
        return n;
      };
    },
  },
  Lt = n,
  jt = G,
  Mt = w,
  Nt = nt,
  Ut = ot,
  qt = Pt.get,
  Zt = Pt.enforce,
  Kt = String(String).split("String");
(Q.exports = function (t, e, n, r) {
  var u,
    i = !!r && !!r.unsafe,
    a = !!r && !!r.enumerable,
    o = !!r && !!r.noTargetGet;
  "function" == typeof n &&
    ("string" != typeof e || Mt(n, "name") || jt(n, "name", e),
    (u = Zt(n)).source || (u.source = Kt.join("string" == typeof e ? e : ""))),
    t !== Lt
      ? (i ? !o && t[e] && (a = !0) : delete t[e], a ? (t[e] = n) : jt(t, e, n))
      : a
        ? (t[e] = n)
        : Nt(e, n);
})(Function.prototype, "toString", function () {
  return ("function" == typeof this && qt(this).source) || Ut(this);
});
var Jt = n,
  Ht = n,
  Wt = function (t) {
    return "function" == typeof t ? t : void 0;
  },
  Yt = function (t, e) {
    return arguments.length < 2
      ? Wt(Jt[t]) || Wt(Ht[t])
      : (Jt[t] && Jt[t][e]) || (Ht[t] && Ht[t][e]);
  },
  Vt = {},
  Xt = Math.ceil,
  Gt = Math.floor,
  Qt = function (t) {
    return isNaN((t = +t)) ? 0 : (t > 0 ? Gt : Xt)(t);
  },
  te = Qt,
  ee = Math.min,
  ne = function (t) {
    return t > 0 ? ee(te(t), 9007199254740991) : 0;
  },
  re = Qt,
  ue = Math.max,
  ie = Math.min,
  ae = function (t, e) {
    var n = re(t);
    return n < 0 ? ue(n + e, 0) : ie(n, e);
  },
  oe = y,
  le = ne,
  se = ae,
  ce = function (t) {
    return function (e, n, r) {
      var u,
        i = oe(e),
        a = le(i.length),
        o = se(r, a);
      if (t && n != n) {
        for (; a > o; ) if ((u = i[o++]) != u) return !0;
      } else
        for (; a > o; o++) if ((t || o in i) && i[o] === n) return t || o || 0;
      return !t && -1;
    };
  },
  pe = { includes: ce(!0), indexOf: ce(!1) },
  de = w,
  fe = y,
  he = pe.indexOf,
  ge = bt,
  De = function (t, e) {
    var n,
      r = fe(t),
      u = 0,
      i = [];
    for (n in r) !de(ge, n) && de(r, n) && i.push(n);
    for (; e.length > u; ) de(r, (n = e[u++])) && (~he(i, n) || i.push(n));
    return i;
  },
  me = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  ve = De,
  ye = me.concat("length", "prototype");
Vt.f =
  Object.getOwnPropertyNames ||
  function (t) {
    return ve(t, ye);
  };
var ke = {};
ke.f = Object.getOwnPropertySymbols;
var Ae = Vt,
  Ee = ke,
  be = Z,
  Fe =
    Yt("Reflect", "ownKeys") ||
    function (t) {
      var e = Ae.f(be(t)),
        n = Ee.f;
      return n ? e.concat(n(t)) : e;
    },
  Ce = w,
  xe = Fe,
  we = r,
  Se = U,
  Be = u,
  _e = /#|\.prototype\./,
  Te = function (t, e) {
    var n = Ie[ze(t)];
    return n == $e || (n != Re && ("function" == typeof e ? Be(e) : !!e));
  },
  ze = (Te.normalize = function (t) {
    return String(t).replace(_e, ".").toLowerCase();
  }),
  Ie = (Te.data = {}),
  Re = (Te.NATIVE = "N"),
  $e = (Te.POLYFILL = "P"),
  Oe = Te,
  Pe = n,
  Le = r.f,
  je = G,
  Me = Q.exports,
  Ne = nt,
  Ue = function (t, e) {
    for (var n = xe(e), r = Se.f, u = we.f, i = 0; i < n.length; i++) {
      var a = n[i];
      Ce(t, a) || r(t, a, u(e, a));
    }
  },
  qe = Oe,
  Ze = function (t, e) {
    var n,
      r,
      u,
      i,
      a,
      o = t.target,
      l = t.global,
      s = t.stat;
    if ((n = l ? Pe : s ? Pe[o] || Ne(o, {}) : (Pe[o] || {}).prototype))
      for (r in e) {
        if (
          ((i = e[r]),
          (u = t.noTargetGet ? (a = Le(n, r)) && a.value : n[r]),
          !qe(l ? r : o + (s ? "." : "#") + r, t.forced) && void 0 !== u)
        ) {
          if (typeof i == typeof u) continue;
          Ue(i, u);
        }
        (t.sham || (u && u.sham)) && je(i, "sham", !0), Me(n, r, i, t);
      }
  },
  Ke = Z,
  Je = function () {
    var t = Ke(this),
      e = "";
    return (
      t.global && (e += "g"),
      t.ignoreCase && (e += "i"),
      t.multiline && (e += "m"),
      t.dotAll && (e += "s"),
      t.unicode && (e += "u"),
      t.sticky && (e += "y"),
      e
    );
  },
  He = {},
  We = u;
function Ye(t, e) {
  return RegExp(t, e);
}
(He.UNSUPPORTED_Y = We(function () {
  var t = Ye("a", "y");
  return (t.lastIndex = 2), null != t.exec("abcd");
})),
  (He.BROKEN_CARET = We(function () {
    var t = Ye("^r", "gy");
    return (t.lastIndex = 2), null != t.exec("str");
  }));
var Ve = Je,
  Xe = He,
  Ge = pt.exports,
  Qe = RegExp.prototype.exec,
  tn = Ge("native-string-replace", String.prototype.replace),
  en = Qe,
  nn = (function () {
    var t = /a/,
      e = /b*/g;
    return (
      Qe.call(t, "a"), Qe.call(e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex
    );
  })(),
  rn = Xe.UNSUPPORTED_Y || Xe.BROKEN_CARET,
  un = void 0 !== /()??/.exec("")[1];
(nn || un || rn) &&
  (en = function (t) {
    var e,
      n,
      r,
      u,
      i = this,
      a = rn && i.sticky,
      o = Ve.call(i),
      l = i.source,
      s = 0,
      c = t;
    return (
      a &&
        (-1 === (o = o.replace("y", "")).indexOf("g") && (o += "g"),
        (c = String(t).slice(i.lastIndex)),
        i.lastIndex > 0 &&
          (!i.multiline || (i.multiline && "\n" !== t[i.lastIndex - 1])) &&
          ((l = "(?: " + l + ")"), (c = " " + c), s++),
        (n = new RegExp("^(?:" + l + ")", o))),
      un && (n = new RegExp("^" + l + "$(?!\\s)", o)),
      nn && (e = i.lastIndex),
      (r = Qe.call(a ? n : i, c)),
      a
        ? r
          ? ((r.input = r.input.slice(s)),
            (r[0] = r[0].slice(s)),
            (r.index = i.lastIndex),
            (i.lastIndex += r[0].length))
          : (i.lastIndex = 0)
        : nn && r && (i.lastIndex = i.global ? r.index + r[0].length : e),
      un &&
        r &&
        r.length > 1 &&
        tn.call(r[0], n, function () {
          for (u = 1; u < arguments.length - 2; u++)
            void 0 === arguments[u] && (r[u] = void 0);
        }),
      r
    );
  });
var an = en;
Ze({ target: "RegExp", proto: !0, forced: /./.exec !== an }, { exec: an });
var on,
  ln,
  sn = Yt("navigator", "userAgent") || "",
  cn = n.process,
  pn = cn && cn.versions,
  dn = pn && pn.v8;
dn
  ? (ln = (on = dn.split("."))[0] < 4 ? 1 : on[0] + on[1])
  : sn &&
    (!(on = sn.match(/Edge\/(\d+)/)) || on[1] >= 74) &&
    (on = sn.match(/Chrome\/(\d+)/)) &&
    (ln = on[1]);
var fn = ln && +ln,
  hn = fn,
  gn = u,
  Dn =
    !!Object.getOwnPropertySymbols &&
    !gn(function () {
      return !String(Symbol()) || (!Symbol.sham && hn && hn < 41);
    }),
  mn = Dn && !Symbol.sham && "symbol" == typeof Symbol.iterator,
  vn = n,
  yn = pt.exports,
  kn = w,
  An = vt,
  En = Dn,
  bn = mn,
  Fn = yn("wks"),
  Cn = vn.Symbol,
  xn = bn ? Cn : (Cn && Cn.withoutSetter) || An,
  wn = function (t) {
    return (
      (kn(Fn, t) && (En || "string" == typeof Fn[t])) ||
        (En && kn(Cn, t) ? (Fn[t] = Cn[t]) : (Fn[t] = xn("Symbol." + t))),
      Fn[t]
    );
  },
  Sn = Q.exports,
  Bn = an,
  _n = u,
  Tn = wn,
  zn = G,
  In = Tn("species"),
  Rn = RegExp.prototype,
  $n = !_n(function () {
    var t = /./;
    return (
      (t.exec = function () {
        var t = [];
        return (t.groups = { a: "7" }), t;
      }),
      "7" !== "".replace(t, "$<a>")
    );
  }),
  On = "$0" === "a".replace(/./, "$0"),
  Pn = Tn("replace"),
  Ln = !!/./[Pn] && "" === /./[Pn]("a", "$0"),
  jn = !_n(function () {
    var t = /(?:)/,
      e = t.exec;
    t.exec = function () {
      return e.apply(this, arguments);
    };
    var n = "ab".split(t);
    return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
  }),
  Mn = function (t, e, n, r) {
    var u = Tn(t),
      i = !_n(function () {
        var e = {};
        return (
          (e[u] = function () {
            return 7;
          }),
          7 != ""[t](e)
        );
      }),
      a =
        i &&
        !_n(function () {
          var e = !1,
            n = /a/;
          return (
            "split" === t &&
              (((n = {}).constructor = {}),
              (n.constructor[In] = function () {
                return n;
              }),
              (n.flags = ""),
              (n[u] = /./[u])),
            (n.exec = function () {
              return (e = !0), null;
            }),
            n[u](""),
            !e
          );
        });
    if (
      !i ||
      !a ||
      ("replace" === t && (!$n || !On || Ln)) ||
      ("split" === t && !jn)
    ) {
      var o = /./[u],
        l = n(
          u,
          ""[t],
          function (t, e, n, r, u) {
            var a = e.exec;
            return a === Bn || a === Rn.exec
              ? i && !u
                ? { done: !0, value: o.call(e, n, r) }
                : { done: !0, value: t.call(n, e, r) }
              : { done: !1 };
          },
          {
            REPLACE_KEEPS_$0: On,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Ln,
          },
        ),
        s = l[0],
        c = l[1];
      Sn(String.prototype, t, s),
        Sn(
          Rn,
          u,
          2 == e
            ? function (t, e) {
                return c.call(t, this, e);
              }
            : function (t) {
                return c.call(t, this);
              },
        );
    }
    r && zn(Rn[u], "sham", !0);
  },
  Nn =
    Object.is ||
    function (t, e) {
      return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
    },
  Un = d,
  qn = an,
  Zn = function (t, e) {
    var n = t.exec;
    if ("function" == typeof n) {
      var r = n.call(t, e);
      if ("object" != typeof r)
        throw TypeError(
          "RegExp exec method returned something other than an Object or null",
        );
      return r;
    }
    if ("RegExp" !== Un(t))
      throw TypeError("RegExp#exec called on incompatible receiver");
    return qn.call(t, e);
  },
  Kn = Z,
  Jn = D,
  Hn = Nn,
  Wn = Zn;
Mn("search", 1, function (t, e, n) {
  return [
    function (e) {
      var n = Jn(this),
        r = null == e ? void 0 : e[t];
      return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
    },
    function (t) {
      var r = n(e, t, this);
      if (r.done) return r.value;
      var u = Kn(t),
        i = String(this),
        a = u.lastIndex;
      Hn(a, 0) || (u.lastIndex = 0);
      var o = Wn(u, i);
      return Hn(u.lastIndex, a) || (u.lastIndex = a), null === o ? -1 : o.index;
    },
  ];
});
var Yn = Qt,
  Vn = D,
  Xn = function (t) {
    return function (e, n) {
      var r,
        u,
        i = String(Vn(e)),
        a = Yn(n),
        o = i.length;
      return a < 0 || a >= o
        ? t
          ? ""
          : void 0
        : (r = i.charCodeAt(a)) < 55296 ||
            r > 56319 ||
            a + 1 === o ||
            (u = i.charCodeAt(a + 1)) < 56320 ||
            u > 57343
          ? t
            ? i.charAt(a)
            : r
          : t
            ? i.slice(a, a + 2)
            : u - 56320 + ((r - 55296) << 10) + 65536;
    };
  },
  Gn = { codeAt: Xn(!1), charAt: Xn(!0) }.charAt,
  Qn = function (t, e, n) {
    return e + (n ? Gn(t, e).length : 1);
  },
  tr = Z,
  er = ne,
  nr = D,
  rr = Qn,
  ur = Zn;
function ir(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ar(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, r.key, r);
  }
}
function or(t, e, n) {
  return e && ar(t.prototype, e), n && ar(t, n), t;
}
function lr(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var n =
        t &&
        (("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"]);
      if (null == n) return;
      var r,
        u,
        i = [],
        a = !0,
        o = !1;
      try {
        for (
          n = n.call(t);
          !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e);
          a = !0
        );
      } catch (t) {
        (o = !0), (u = t);
      } finally {
        try {
          a || null == n.return || n.return();
        } finally {
          if (o) throw u;
        }
      }
      return i;
    })(t, e) ||
    sr(t, e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function sr(t, e) {
  if (t) {
    if ("string" == typeof t) return cr(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return (
      "Object" === n && t.constructor && (n = t.constructor.name),
      "Map" === n || "Set" === n
        ? Array.from(t)
        : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? cr(t, e)
          : void 0
    );
  }
}
function cr(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function pr(t, e) {
  var n =
    ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
  if (!n) {
    if (
      Array.isArray(t) ||
      (n = sr(t)) ||
      (e && t && "number" == typeof t.length)
    ) {
      n && (t = n);
      var r = 0,
        u = function () {};
      return {
        s: u,
        n: function () {
          return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
        },
        e: function (t) {
          throw t;
        },
        f: u,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
  }
  var i,
    a = !0,
    o = !1;
  return {
    s: function () {
      n = n.call(t);
    },
    n: function () {
      var t = n.next();
      return (a = t.done), t;
    },
    e: function (t) {
      (o = !0), (i = t);
    },
    f: function () {
      try {
        a || null == n.return || n.return();
      } finally {
        if (o) throw i;
      }
    },
  };
}
Mn("match", 1, function (t, e, n) {
  return [
    function (e) {
      var n = nr(this),
        r = null == e ? void 0 : e[t];
      return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
    },
    function (t) {
      var r = n(e, t, this);
      if (r.done) return r.value;
      var u = tr(t),
        i = String(this);
      if (!u.global) return ur(u, i);
      var a = u.unicode;
      u.lastIndex = 0;
      for (var o, l = [], s = 0; null !== (o = ur(u, i)); ) {
        var c = String(o[0]);
        (l[s] = c), "" === c && (u.lastIndex = rr(i, er(u.lastIndex), a)), s++;
      }
      return 0 === s ? null : l;
    },
  ];
});
var dr = {};
dr[wn("toStringTag")] = "z";
var fr = "[object z]" === String(dr),
  hr = fr,
  gr = d,
  Dr = wn("toStringTag"),
  mr =
    "Arguments" ==
    gr(
      (function () {
        return arguments;
      })(),
    ),
  vr = hr
    ? gr
    : function (t) {
        var e, n, r;
        return void 0 === t
          ? "Undefined"
          : null === t
            ? "Null"
            : "string" ==
                typeof (n = (function (t, e) {
                  try {
                    return t[e];
                  } catch (t) {}
                })((e = Object(t)), Dr))
              ? n
              : mr
                ? gr(e)
                : "Object" == (r = gr(e)) && "function" == typeof e.callee
                  ? "Arguments"
                  : r;
      },
  yr = fr
    ? {}.toString
    : function () {
        return "[object " + vr(this) + "]";
      },
  kr = fr,
  Ar = Q.exports,
  Er = yr;
kr || Ar(Object.prototype, "toString", Er, { unsafe: !0 });
var br = F,
  Fr = Math.floor,
  Cr = "".replace,
  xr = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  wr = /\$([$&'`]|\d{1,2})/g,
  Sr = Mn,
  Br = Z,
  _r = ne,
  Tr = Qt,
  zr = D,
  Ir = Qn,
  Rr = function (t, e, n, r, u, i) {
    var a = n + t.length,
      o = r.length,
      l = wr;
    return (
      void 0 !== u && ((u = br(u)), (l = xr)),
      Cr.call(i, l, function (i, l) {
        var s;
        switch (l.charAt(0)) {
          case "$":
            return "$";
          case "&":
            return t;
          case "`":
            return e.slice(0, n);
          case "'":
            return e.slice(a);
          case "<":
            s = u[l.slice(1, -1)];
            break;
          default:
            var c = +l;
            if (0 === c) return i;
            if (c > o) {
              var p = Fr(c / 10);
              return 0 === p
                ? i
                : p <= o
                  ? void 0 === r[p - 1]
                    ? l.charAt(1)
                    : r[p - 1] + l.charAt(1)
                  : i;
            }
            s = r[c - 1];
        }
        return void 0 === s ? "" : s;
      })
    );
  },
  $r = Zn,
  Or = Math.max,
  Pr = Math.min;
Sr("replace", 2, function (t, e, n, r) {
  var u = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
    i = r.REPLACE_KEEPS_$0,
    a = u ? "$" : "$0";
  return [
    function (n, r) {
      var u = zr(this),
        i = null == n ? void 0 : n[t];
      return void 0 !== i ? i.call(n, u, r) : e.call(String(u), n, r);
    },
    function (t, r) {
      if ((!u && i) || ("string" == typeof r && -1 === r.indexOf(a))) {
        var o = n(e, t, this, r);
        if (o.done) return o.value;
      }
      var l = Br(t),
        s = String(this),
        c = "function" == typeof r;
      c || (r = String(r));
      var p = l.global;
      if (p) {
        var d = l.unicode;
        l.lastIndex = 0;
      }
      for (var f = []; ; ) {
        var h = $r(l, s);
        if (null === h) break;
        if ((f.push(h), !p)) break;
        "" === String(h[0]) && (l.lastIndex = Ir(s, _r(l.lastIndex), d));
      }
      for (var g, D = "", m = 0, v = 0; v < f.length; v++) {
        h = f[v];
        for (
          var y = String(h[0]),
            k = Or(Pr(Tr(h.index), s.length), 0),
            A = [],
            E = 1;
          E < h.length;
          E++
        )
          A.push(void 0 === (g = h[E]) ? g : String(g));
        var b = h.groups;
        if (c) {
          var F = [y].concat(A, k, s);
          void 0 !== b && F.push(b);
          var C = String(r.apply(void 0, F));
        } else C = Rr(y, s, k, A, b, r);
        k >= m && ((D += s.slice(m, k) + C), (m = k + y.length));
      }
      return D + s.slice(m);
    },
  ];
});
var Lr = Q.exports,
  jr = Z,
  Mr = u,
  Nr = Je,
  Ur = RegExp.prototype,
  qr = Ur.toString,
  Zr = Mr(function () {
    return "/a/b" != qr.call({ source: "a", flags: "b" });
  }),
  Kr = "toString" != qr.name;
(Zr || Kr) &&
  Lr(
    RegExp.prototype,
    "toString",
    function () {
      var t = jr(this),
        e = String(t.source),
        n = t.flags;
      return (
        "/" +
        e +
        "/" +
        String(
          void 0 === n && t instanceof RegExp && !("flags" in Ur)
            ? Nr.call(t)
            : n,
        )
      );
    },
    { unsafe: !0 },
  );
var Jr = De,
  Hr = me,
  Wr =
    Object.keys ||
    function (t) {
      return Jr(t, Hr);
    },
  Yr = F,
  Vr = Wr;
Ze(
  {
    target: "Object",
    stat: !0,
    forced: u(function () {
      Vr(1);
    }),
  },
  {
    keys: function (t) {
      return Vr(Yr(t));
    },
  },
);
var Xr,
  Gr = U,
  Qr = Z,
  tu = Wr,
  eu = i
    ? Object.defineProperties
    : function (t, e) {
        Qr(t);
        for (var n, r = tu(e), u = r.length, i = 0; u > i; )
          Gr.f(t, (n = r[i++]), e[n]);
        return t;
      },
  nu = Yt("document", "documentElement"),
  ru = Z,
  uu = eu,
  iu = me,
  au = bt,
  ou = nu,
  lu = T,
  su = Et("IE_PROTO"),
  cu = function () {},
  pu = function (t) {
    return "<script>" + t + "</script>";
  },
  du = function () {
    try {
      Xr = document.domain && new ActiveXObject("htmlfile");
    } catch (t) {}
    var t, e;
    du = Xr
      ? (function (t) {
          t.write(pu("")), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        })(Xr)
      : (((e = lu("iframe")).style.display = "none"),
        ou.appendChild(e),
        (e.src = String("javascript:")),
        (t = e.contentWindow.document).open(),
        t.write(pu("document.F=Object")),
        t.close(),
        t.F);
    for (var n = iu.length; n--; ) delete du.prototype[iu[n]];
    return du();
  };
au[su] = !0;
var fu =
    Object.create ||
    function (t, e) {
      var n;
      return (
        null !== t
          ? ((cu.prototype = ru(t)),
            (n = new cu()),
            (cu.prototype = null),
            (n[su] = t))
          : (n = du()),
        void 0 === e ? n : uu(n, e)
      );
    },
  hu = U,
  gu = wn("unscopables"),
  Du = Array.prototype;
null == Du[gu] && hu.f(Du, gu, { configurable: !0, value: fu(null) });
var mu = pe.includes,
  vu = function (t) {
    Du[gu][t] = !0;
  };
Ze(
  { target: "Array", proto: !0 },
  {
    includes: function (t) {
      return mu(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  },
),
  vu("includes");
var yu = k,
  ku = d,
  Au = wn("match"),
  Eu = function (t) {
    var e;
    return yu(t) && (void 0 !== (e = t[Au]) ? !!e : "RegExp" == ku(t));
  },
  bu = Eu,
  Fu = wn("match"),
  Cu = function (t) {
    if (bu(t)) throw TypeError("The method doesn't accept regular expressions");
    return t;
  },
  xu = D;
Ze(
  {
    target: "String",
    proto: !0,
    forced: !(function (t) {
      var e = /./;
      try {
        "/./"[t](e);
      } catch (n) {
        try {
          return (e[Fu] = !1), "/./"[t](e);
        } catch (t) {}
      }
      return !1;
    })("includes"),
  },
  {
    includes: function (t) {
      return !!~String(xu(this)).indexOf(
        Cu(t),
        arguments.length > 1 ? arguments[1] : void 0,
      );
    },
  },
);
var wu = d,
  Su =
    Array.isArray ||
    function (t) {
      return "Array" == wu(t);
    },
  Bu = E,
  _u = U,
  Tu = c,
  zu = function (t, e, n) {
    var r = Bu(e);
    r in t ? _u.f(t, r, Tu(0, n)) : (t[r] = n);
  },
  Iu = u,
  Ru = fn,
  $u = wn("species"),
  Ou = function (t) {
    return (
      Ru >= 51 ||
      !Iu(function () {
        var e = [];
        return (
          ((e.constructor = {})[$u] = function () {
            return { foo: 1 };
          }),
          1 !== e[t](Boolean).foo
        );
      })
    );
  },
  Pu = Ze,
  Lu = k,
  ju = Su,
  Mu = ae,
  Nu = ne,
  Uu = y,
  qu = zu,
  Zu = wn,
  Ku = Ou("slice"),
  Ju = Zu("species"),
  Hu = [].slice,
  Wu = Math.max;
Pu(
  { target: "Array", proto: !0, forced: !Ku },
  {
    slice: function (t, e) {
      var n,
        r,
        u,
        i = Uu(this),
        a = Nu(i.length),
        o = Mu(t, a),
        l = Mu(void 0 === e ? a : e, a);
      if (
        ju(i) &&
        ("function" != typeof (n = i.constructor) ||
        (n !== Array && !ju(n.prototype))
          ? Lu(n) && null === (n = n[Ju]) && (n = void 0)
          : (n = void 0),
        n === Array || void 0 === n)
      )
        return Hu.call(i, o, l);
      for (
        r = new (void 0 === n ? Array : n)(Wu(l - o, 0)), u = 0;
        o < l;
        o++, u++
      )
        o in i && qu(r, u, i[o]);
      return (r.length = u), r;
    },
  },
);
var Yu = D,
  Vu = /"/g,
  Xu = u,
  Gu = function (t, e, n, r) {
    var u = String(Yu(t)),
      i = "<" + e;
    return (
      "" !== n && (i += " " + n + '="' + String(r).replace(Vu, "&quot;") + '"'),
      i + ">" + u + "</" + e + ">"
    );
  };
Ze(
  {
    target: "String",
    proto: !0,
    forced: (function (t) {
      return Xu(function () {
        var e = ""[t]('"');
        return e !== e.toLowerCase() || e.split('"').length > 3;
      });
    })("link"),
  },
  {
    link: function (t) {
      return Gu(this, "a", "href", t);
    },
  },
);
var Qu = u,
  ti = Ze,
  ei = y,
  ni = [].join,
  ri = g != Object,
  ui = (function (t, e) {
    var n = [][t];
    return (
      !!n &&
      Qu(function () {
        n.call(
          null,
          e ||
            function () {
              throw 1;
            },
          1,
        );
      })
    );
  })("join", ",");
ti(
  { target: "Array", proto: !0, forced: ri || !ui },
  {
    join: function (t) {
      return ni.call(ei(this), void 0 === t ? "," : t);
    },
  },
);
var ii = function (t) {
    if ("function" != typeof t)
      throw TypeError(String(t) + " is not a function");
    return t;
  },
  ai = ii,
  oi = k,
  li = Su,
  si = wn("species"),
  ci = function (t, e) {
    var n;
    return (
      li(t) &&
        ("function" != typeof (n = t.constructor) ||
        (n !== Array && !li(n.prototype))
          ? oi(n) && null === (n = n[si]) && (n = void 0)
          : (n = void 0)),
      new (void 0 === n ? Array : n)(0 === e ? 0 : e)
    );
  },
  pi = function (t, e, n) {
    if ((ai(t), void 0 === e)) return t;
    switch (n) {
      case 0:
        return function () {
          return t.call(e);
        };
      case 1:
        return function (n) {
          return t.call(e, n);
        };
      case 2:
        return function (n, r) {
          return t.call(e, n, r);
        };
      case 3:
        return function (n, r, u) {
          return t.call(e, n, r, u);
        };
    }
    return function () {
      return t.apply(e, arguments);
    };
  },
  di = g,
  fi = F,
  hi = ne,
  gi = ci,
  Di = [].push,
  mi = function (t) {
    var e = 1 == t,
      n = 2 == t,
      r = 3 == t,
      u = 4 == t,
      i = 6 == t,
      a = 7 == t,
      o = 5 == t || i;
    return function (l, s, c, p) {
      for (
        var d,
          f,
          h = fi(l),
          g = di(h),
          D = pi(s, c, 3),
          m = hi(g.length),
          v = 0,
          y = p || gi,
          k = e ? y(l, m) : n || a ? y(l, 0) : void 0;
        m > v;
        v++
      )
        if ((o || v in g) && ((f = D((d = g[v]), v, h)), t))
          if (e) k[v] = f;
          else if (f)
            switch (t) {
              case 3:
                return !0;
              case 5:
                return d;
              case 6:
                return v;
              case 2:
                Di.call(k, d);
            }
          else
            switch (t) {
              case 4:
                return !1;
              case 7:
                Di.call(k, d);
            }
      return i ? -1 : r || u ? u : k;
    };
  },
  vi = {
    forEach: mi(0),
    map: mi(1),
    filter: mi(2),
    some: mi(3),
    every: mi(4),
    find: mi(5),
    findIndex: mi(6),
    filterOut: mi(7),
  }.map;
Ze(
  { target: "Array", proto: !0, forced: !Ou("map") },
  {
    map: function (t) {
      return vi(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  },
);
var yi = Z,
  ki = ii,
  Ai = wn("species"),
  Ei = Mn,
  bi = Eu,
  Fi = Z,
  Ci = D,
  xi = function (t, e) {
    var n,
      r = yi(t).constructor;
    return void 0 === r || null == (n = yi(r)[Ai]) ? e : ki(n);
  },
  wi = Qn,
  Si = ne,
  Bi = Zn,
  _i = an,
  Ti = He.UNSUPPORTED_Y,
  zi = [].push,
  Ii = Math.min;
Ei(
  "split",
  2,
  function (t, e, n) {
    var r;
    return (
      (r =
        "c" == "abbc".split(/(b)*/)[1] ||
        4 != "test".split(/(?:)/, -1).length ||
        2 != "ab".split(/(?:ab)*/).length ||
        4 != ".".split(/(.?)(.?)/).length ||
        ".".split(/()()/).length > 1 ||
        "".split(/.?/).length
          ? function (t, n) {
              var r = String(Ci(this)),
                u = void 0 === n ? 4294967295 : n >>> 0;
              if (0 === u) return [];
              if (void 0 === t) return [r];
              if (!bi(t)) return e.call(r, t, u);
              for (
                var i,
                  a,
                  o,
                  l = [],
                  s =
                    (t.ignoreCase ? "i" : "") +
                    (t.multiline ? "m" : "") +
                    (t.unicode ? "u" : "") +
                    (t.sticky ? "y" : ""),
                  c = 0,
                  p = new RegExp(t.source, s + "g");
                (i = _i.call(p, r)) &&
                !(
                  (a = p.lastIndex) > c &&
                  (l.push(r.slice(c, i.index)),
                  i.length > 1 && i.index < r.length && zi.apply(l, i.slice(1)),
                  (o = i[0].length),
                  (c = a),
                  l.length >= u)
                );

              )
                p.lastIndex === i.index && p.lastIndex++;
              return (
                c === r.length
                  ? (!o && p.test("")) || l.push("")
                  : l.push(r.slice(c)),
                l.length > u ? l.slice(0, u) : l
              );
            }
          : "0".split(void 0, 0).length
            ? function (t, n) {
                return void 0 === t && 0 === n ? [] : e.call(this, t, n);
              }
            : e),
      [
        function (e, n) {
          var u = Ci(this),
            i = null == e ? void 0 : e[t];
          return void 0 !== i ? i.call(e, u, n) : r.call(String(u), e, n);
        },
        function (t, u) {
          var i = n(r, t, this, u, r !== e);
          if (i.done) return i.value;
          var a = Fi(t),
            o = String(this),
            l = xi(a, RegExp),
            s = a.unicode,
            c =
              (a.ignoreCase ? "i" : "") +
              (a.multiline ? "m" : "") +
              (a.unicode ? "u" : "") +
              (Ti ? "g" : "y"),
            p = new l(Ti ? "^(?:" + a.source + ")" : a, c),
            d = void 0 === u ? 4294967295 : u >>> 0;
          if (0 === d) return [];
          if (0 === o.length) return null === Bi(p, o) ? [o] : [];
          for (var f = 0, h = 0, g = []; h < o.length; ) {
            p.lastIndex = Ti ? 0 : h;
            var D,
              m = Bi(p, Ti ? o.slice(h) : o);
            if (
              null === m ||
              (D = Ii(Si(p.lastIndex + (Ti ? h : 0)), o.length)) === f
            )
              h = wi(o, h, s);
            else {
              if ((g.push(o.slice(f, h)), g.length === d)) return g;
              for (var v = 1; v <= m.length - 1; v++)
                if ((g.push(m[v]), g.length === d)) return g;
              h = f = D;
            }
          }
          return g.push(o.slice(f)), g;
        },
      ]
    );
  },
  Ti,
);
var Ri = D,
  $i = "[\t\n\v\f\r                　\u2028\u2029\ufeff]",
  Oi = RegExp("^" + $i + $i + "*"),
  Pi = RegExp($i + $i + "*$"),
  Li = function (t) {
    return function (e) {
      var n = String(Ri(e));
      return (
        1 & t && (n = n.replace(Oi, "")), 2 & t && (n = n.replace(Pi, "")), n
      );
    };
  },
  ji = { start: Li(1), end: Li(2), trim: Li(3) },
  Mi = u,
  Ni = "\t\n\v\f\r                　\u2028\u2029\ufeff",
  Ui = ji.trim;
Ze(
  {
    target: "String",
    proto: !0,
    forced: (function (t) {
      return Mi(function () {
        return !!Ni[t]() || "​᠎" != "​᠎"[t]() || Ni[t].name !== t;
      });
    })("trim"),
  },
  {
    trim: function () {
      return Ui(this);
    },
  },
);
var qi = k,
  Zi = Z,
  Ki = function (t) {
    if (!qi(t) && null !== t)
      throw TypeError("Can't set " + String(t) + " as a prototype");
    return t;
  },
  Ji =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function () {
          var t,
            e = !1,
            n = {};
          try {
            (t = Object.getOwnPropertyDescriptor(
              Object.prototype,
              "__proto__",
            ).set).call(n, []),
              (e = n instanceof Array);
          } catch (t) {}
          return function (n, r) {
            return Zi(n), Ki(r), e ? t.call(n, r) : (n.__proto__ = r), n;
          };
        })()
      : void 0),
  Hi = k,
  Wi = Ji,
  Yi = Yt,
  Vi = U,
  Xi = i,
  Gi = wn("species"),
  Qi = i,
  ta = n,
  ea = Oe,
  na = function (t, e, n) {
    var r, u;
    return (
      Wi &&
        "function" == typeof (r = e.constructor) &&
        r !== n &&
        Hi((u = r.prototype)) &&
        u !== n.prototype &&
        Wi(t, u),
      t
    );
  },
  ra = U.f,
  ua = Vt.f,
  ia = Eu,
  aa = Je,
  oa = He,
  la = Q.exports,
  sa = u,
  ca = Pt.enforce,
  pa = function (t) {
    var e = Yi(t),
      n = Vi.f;
    Xi &&
      e &&
      !e[Gi] &&
      n(e, Gi, {
        configurable: !0,
        get: function () {
          return this;
        },
      });
  },
  da = wn("match"),
  fa = ta.RegExp,
  ha = fa.prototype,
  ga = /a/g,
  Da = /a/g,
  ma = new fa(ga) !== ga,
  va = oa.UNSUPPORTED_Y;
if (
  Qi &&
  ea(
    "RegExp",
    !ma ||
      va ||
      sa(function () {
        return (
          (Da[da] = !1), fa(ga) != ga || fa(Da) == Da || "/a/i" != fa(ga, "i")
        );
      }),
  )
) {
  for (
    var ya = function (t, e) {
        var n,
          r = this instanceof ya,
          u = ia(t),
          i = void 0 === e;
        if (!r && u && t.constructor === ya && i) return t;
        ma
          ? u && !i && (t = t.source)
          : t instanceof ya && (i && (e = aa.call(t)), (t = t.source)),
          va && (n = !!e && e.indexOf("y") > -1) && (e = e.replace(/y/g, ""));
        var a = na(ma ? new fa(t, e) : fa(t, e), r ? this : ha, ya);
        va && n && (ca(a).sticky = !0);
        return a;
      },
      ka = function (t) {
        (t in ya) ||
          ra(ya, t, {
            configurable: !0,
            get: function () {
              return fa[t];
            },
            set: function (e) {
              fa[t] = e;
            },
          });
      },
      Aa = ua(fa),
      Ea = 0;
    Aa.length > Ea;

  )
    ka(Aa[Ea++]);
  (ha.constructor = ya), (ya.prototype = ha), la(ta, "RegExp", ya);
}
pa("RegExp");
var ba = Ze,
  Fa = ae,
  Ca = Qt,
  xa = ne,
  wa = F,
  Sa = ci,
  Ba = zu,
  _a = Ou("splice"),
  Ta = Math.max,
  za = Math.min;
ba(
  { target: "Array", proto: !0, forced: !_a },
  {
    splice: function (t, e) {
      var n,
        r,
        u,
        i,
        a,
        o,
        l = wa(this),
        s = xa(l.length),
        c = Fa(t, s),
        p = arguments.length;
      if (
        (0 === p
          ? (n = r = 0)
          : 1 === p
            ? ((n = 0), (r = s - c))
            : ((n = p - 2), (r = za(Ta(Ca(e), 0), s - c))),
        s + n - r > 9007199254740991)
      )
        throw TypeError("Maximum allowed length exceeded");
      for (u = Sa(l, r), i = 0; i < r; i++) (a = c + i) in l && Ba(u, i, l[a]);
      if (((u.length = r), n < r)) {
        for (i = c; i < s - r; i++)
          (o = i + n), (a = i + r) in l ? (l[o] = l[a]) : delete l[o];
        for (i = s; i > s - r + n; i--) delete l[i - 1];
      } else if (n > r)
        for (i = s - r; i > c; i--)
          (o = i + n - 1), (a = i + r - 1) in l ? (l[o] = l[a]) : delete l[o];
      for (i = 0; i < n; i++) l[i + c] = arguments[i + 2];
      return (l.length = s - r + n), u;
    },
  },
);
var Ia = { exports: {} };
function Ra() {
  return {
    baseUrl: null,
    breaks: !1,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartLists: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1,
  };
}
Ia.exports = {
  defaults: {
    baseUrl: null,
    breaks: !1,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartLists: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1,
  },
  getDefaults: Ra,
  changeDefaults: function (t) {
    Ia.exports.defaults = t;
  },
};
var $a = /[&<>"']/,
  Oa = /[&<>"']/g,
  Pa = /[<>"']|&(?!#?\w+;)/,
  La = /[<>"']|&(?!#?\w+;)/g,
  ja = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
  Ma = function (t) {
    return ja[t];
  };
var Na = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Ua(t) {
  return t.replace(Na, function (t, e) {
    return "colon" === (e = e.toLowerCase())
      ? ":"
      : "#" === e.charAt(0)
        ? "x" === e.charAt(1)
          ? String.fromCharCode(parseInt(e.substring(2), 16))
          : String.fromCharCode(+e.substring(1))
        : "";
  });
}
var qa = /(^|[^\[])\^/g;
var Za = /[^\w:]/g,
  Ka = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
var Ja = {},
  Ha = /^[^:]+:\/*[^/]*$/,
  Wa = /^([^:]+:)[\s\S]*$/,
  Ya = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function Va(t, e) {
  Ja[" " + t] ||
    (Ha.test(t) ? (Ja[" " + t] = t + "/") : (Ja[" " + t] = Xa(t, "/", !0)));
  var n = -1 === (t = Ja[" " + t]).indexOf(":");
  return "//" === e.substring(0, 2)
    ? n
      ? e
      : t.replace(Wa, "$1") + e
    : "/" === e.charAt(0)
      ? n
        ? e
        : t.replace(Ya, "$1") + e
      : t + e;
}
function Xa(t, e, n) {
  var r = t.length;
  if (0 === r) return "";
  for (var u = 0; u < r; ) {
    var i = t.charAt(r - u - 1);
    if (i !== e || n) {
      if (i === e || !n) break;
      u++;
    } else u++;
  }
  return t.substr(0, r - u);
}
var Ga = function (t, e) {
    if (e) {
      if ($a.test(t)) return t.replace(Oa, Ma);
    } else if (Pa.test(t)) return t.replace(La, Ma);
    return t;
  },
  Qa = Ua,
  to = function (t, e) {
    (t = t.source || t), (e = e || "");
    var n = {
      replace: function (e, r) {
        return (
          (r = (r = r.source || r).replace(qa, "$1")), (t = t.replace(e, r)), n
        );
      },
      getRegex: function () {
        return new RegExp(t, e);
      },
    };
    return n;
  },
  eo = function (t, e, n) {
    if (t) {
      var r;
      try {
        r = decodeURIComponent(Ua(n)).replace(Za, "").toLowerCase();
      } catch (t) {
        return null;
      }
      if (
        0 === r.indexOf("javascript:") ||
        0 === r.indexOf("vbscript:") ||
        0 === r.indexOf("data:")
      )
        return null;
    }
    e && !Ka.test(n) && (n = Va(e, n));
    try {
      n = encodeURI(n).replace(/%25/g, "%");
    } catch (t) {
      return null;
    }
    return n;
  },
  no = { exec: function () {} },
  ro = function (t) {
    for (var e, n, r = 1; r < arguments.length; r++)
      for (n in (e = arguments[r]))
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  },
  uo = function (t, e) {
    var n = t
        .replace(/\|/g, function (t, e, n) {
          for (var r = !1, u = e; --u >= 0 && "\\" === n[u]; ) r = !r;
          return r ? "|" : " |";
        })
        .split(/ \|/),
      r = 0;
    if (n.length > e) n.splice(e);
    else for (; n.length < e; ) n.push("");
    for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
    return n;
  },
  io = Xa,
  ao = function (t, e) {
    if (-1 === t.indexOf(e[1])) return -1;
    for (var n = t.length, r = 0, u = 0; u < n; u++)
      if ("\\" === t[u]) u++;
      else if (t[u] === e[0]) r++;
      else if (t[u] === e[1] && --r < 0) return u;
    return -1;
  },
  oo = function (t) {
    t &&
      t.sanitize &&
      !t.silent &&
      console.warn(
        "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options",
      );
  },
  lo = function (t, e) {
    if (e < 1) return "";
    for (var n = ""; e > 1; ) 1 & e && (n += t), (e >>= 1), (t += t);
    return n + t;
  },
  so = Ia.exports.defaults,
  co = io,
  po = uo,
  fo = Ga,
  ho = ao;
function go(t, e, n) {
  var r = e.href,
    u = e.title ? fo(e.title) : null,
    i = t[1].replace(/\\([\[\]])/g, "$1");
  return "!" !== t[0].charAt(0)
    ? { type: "link", raw: n, href: r, title: u, text: i }
    : { type: "image", raw: n, href: r, title: u, text: fo(i) };
}
var Do = (function () {
    function t(e) {
      ir(this, t), (this.options = e || so);
    }
    return (
      or(t, [
        {
          key: "space",
          value: function (t) {
            var e = this.rules.block.newline.exec(t);
            if (e)
              return e[0].length > 1
                ? { type: "space", raw: e[0] }
                : { raw: "\n" };
          },
        },
        {
          key: "code",
          value: function (t) {
            var e = this.rules.block.code.exec(t);
            if (e) {
              var n = e[0].replace(/^ {1,4}/gm, "");
              return {
                type: "code",
                raw: e[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic ? n : co(n, "\n"),
              };
            }
          },
        },
        {
          key: "fences",
          value: function (t) {
            var e = this.rules.block.fences.exec(t);
            if (e) {
              var n = e[0],
                r = (function (t, e) {
                  var n = t.match(/^(\s+)(?:```)/);
                  if (null === n) return e;
                  var r = n[1];
                  return e
                    .split("\n")
                    .map(function (t) {
                      var e = t.match(/^\s+/);
                      return null === e
                        ? t
                        : lr(e, 1)[0].length >= r.length
                          ? t.slice(r.length)
                          : t;
                    })
                    .join("\n");
                })(n, e[3] || "");
              return {
                type: "code",
                raw: n,
                lang: e[2] ? e[2].trim() : e[2],
                text: r,
              };
            }
          },
        },
        {
          key: "heading",
          value: function (t) {
            var e = this.rules.block.heading.exec(t);
            if (e) {
              var n = e[2].trim();
              if (/#$/.test(n)) {
                var r = co(n, "#");
                this.options.pedantic
                  ? (n = r.trim())
                  : (r && !/ $/.test(r)) || (n = r.trim());
              }
              return {
                type: "heading",
                raw: e[0],
                depth: e[1].length,
                text: n,
              };
            }
          },
        },
        {
          key: "nptable",
          value: function (t) {
            var e = this.rules.block.nptable.exec(t);
            if (e) {
              var n = {
                type: "table",
                header: po(e[1].replace(/^ *| *\| *$/g, "")),
                align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : [],
                raw: e[0],
              };
              if (n.header.length === n.align.length) {
                var r,
                  u = n.align.length;
                for (r = 0; r < u; r++)
                  /^ *-+: *$/.test(n.align[r])
                    ? (n.align[r] = "right")
                    : /^ *:-+: *$/.test(n.align[r])
                      ? (n.align[r] = "center")
                      : /^ *:-+ *$/.test(n.align[r])
                        ? (n.align[r] = "left")
                        : (n.align[r] = null);
                for (u = n.cells.length, r = 0; r < u; r++)
                  n.cells[r] = po(n.cells[r], n.header.length);
                return n;
              }
            }
          },
        },
        {
          key: "hr",
          value: function (t) {
            var e = this.rules.block.hr.exec(t);
            if (e) return { type: "hr", raw: e[0] };
          },
        },
        {
          key: "blockquote",
          value: function (t) {
            var e = this.rules.block.blockquote.exec(t);
            if (e) {
              var n = e[0].replace(/^ *> ?/gm, "");
              return { type: "blockquote", raw: e[0], text: n };
            }
          },
        },
        {
          key: "list",
          value: function (t) {
            var e = this.rules.block.list.exec(t);
            if (e) {
              var n,
                r,
                u,
                i,
                a,
                o,
                l,
                s,
                c,
                p = e[0],
                d = e[2],
                f = d.length > 1,
                h = {
                  type: "list",
                  raw: p,
                  ordered: f,
                  start: f ? +d.slice(0, -1) : "",
                  loose: !1,
                  items: [],
                },
                g = e[0].match(this.rules.block.item),
                D = !1,
                m = g.length;
              u = this.rules.block.listItemStart.exec(g[0]);
              for (var v = 0; v < m; v++) {
                if (
                  ((p = n = g[v]),
                  this.options.pedantic ||
                    ((c = n.match(
                      new RegExp("\\n\\s*\\n {0," + (u[0].length - 1) + "}\\S"),
                    )) &&
                      ((a =
                        n.length - c.index + g.slice(v + 1).join("\n").length),
                      (h.raw = h.raw.substring(0, h.raw.length - a)),
                      (p = n = n.substring(0, c.index)),
                      (m = v + 1))),
                  v !== m - 1)
                ) {
                  if (
                    ((i = this.rules.block.listItemStart.exec(g[v + 1])),
                    this.options.pedantic
                      ? i[1].length > u[1].length
                      : i[1].length >= u[0].length || i[1].length > 3)
                  ) {
                    g.splice(
                      v,
                      2,
                      g[v] +
                        (!this.options.pedantic &&
                        i[1].length < u[0].length &&
                        !g[v].match(/\n$/)
                          ? ""
                          : "\n") +
                        g[v + 1],
                    ),
                      v--,
                      m--;
                    continue;
                  }
                  (!this.options.pedantic || this.options.smartLists
                    ? i[2][i[2].length - 1] !== d[d.length - 1]
                    : f === (1 === i[2].length)) &&
                    ((a = g.slice(v + 1).join("\n").length),
                    (h.raw = h.raw.substring(0, h.raw.length - a)),
                    (v = m - 1)),
                    (u = i);
                }
                (r = n.length),
                  ~(n = n.replace(/^ *([*+-]|\d+[.)]) ?/, "")).indexOf("\n ") &&
                    ((r -= n.length),
                    (n = this.options.pedantic
                      ? n.replace(/^ {1,4}/gm, "")
                      : n.replace(new RegExp("^ {1," + r + "}", "gm"), ""))),
                  (n = co(n, "\n")),
                  v !== m - 1 && (p += "\n"),
                  (o = D || /\n\n(?!\s*$)/.test(p)),
                  v !== m - 1 && ((D = "\n\n" === p.slice(-2)), o || (o = D)),
                  o && (h.loose = !0),
                  this.options.gfm &&
                    ((s = void 0),
                    (l = /^\[[ xX]\] /.test(n)) &&
                      ((s = " " !== n[1]),
                      (n = n.replace(/^\[[ xX]\] +/, "")))),
                  h.items.push({
                    type: "list_item",
                    raw: p,
                    task: l,
                    checked: s,
                    loose: o,
                    text: n,
                  });
              }
              return h;
            }
          },
        },
        {
          key: "html",
          value: function (t) {
            var e = this.rules.block.html.exec(t);
            if (e)
              return {
                type: this.options.sanitize ? "paragraph" : "html",
                raw: e[0],
                pre:
                  !this.options.sanitizer &&
                  ("pre" === e[1] || "script" === e[1] || "style" === e[1]),
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(e[0])
                    : fo(e[0])
                  : e[0],
              };
          },
        },
        {
          key: "def",
          value: function (t) {
            var e = this.rules.block.def.exec(t);
            if (e)
              return (
                e[3] && (e[3] = e[3].substring(1, e[3].length - 1)),
                {
                  type: "def",
                  tag: e[1].toLowerCase().replace(/\s+/g, " "),
                  raw: e[0],
                  href: e[2],
                  title: e[3],
                }
              );
          },
        },
        {
          key: "table",
          value: function (t) {
            var e = this.rules.block.table.exec(t);
            if (e) {
              var n = {
                type: "table",
                header: po(e[1].replace(/^ *| *\| *$/g, "")),
                align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : [],
              };
              if (n.header.length === n.align.length) {
                n.raw = e[0];
                var r,
                  u = n.align.length;
                for (r = 0; r < u; r++)
                  /^ *-+: *$/.test(n.align[r])
                    ? (n.align[r] = "right")
                    : /^ *:-+: *$/.test(n.align[r])
                      ? (n.align[r] = "center")
                      : /^ *:-+ *$/.test(n.align[r])
                        ? (n.align[r] = "left")
                        : (n.align[r] = null);
                for (u = n.cells.length, r = 0; r < u; r++)
                  n.cells[r] = po(
                    n.cells[r].replace(/^ *\| *| *\| *$/g, ""),
                    n.header.length,
                  );
                return n;
              }
            }
          },
        },
        {
          key: "lheading",
          value: function (t) {
            var e = this.rules.block.lheading.exec(t);
            if (e)
              return {
                type: "heading",
                raw: e[0],
                depth: "=" === e[2].charAt(0) ? 1 : 2,
                text: e[1],
              };
          },
        },
        {
          key: "paragraph",
          value: function (t) {
            var e = this.rules.block.paragraph.exec(t);
            if (e)
              return {
                type: "paragraph",
                raw: e[0],
                text:
                  "\n" === e[1].charAt(e[1].length - 1)
                    ? e[1].slice(0, -1)
                    : e[1],
              };
          },
        },
        {
          key: "text",
          value: function (t) {
            var e = this.rules.block.text.exec(t);
            if (e) return { type: "text", raw: e[0], text: e[0] };
          },
        },
        {
          key: "escape",
          value: function (t) {
            var e = this.rules.inline.escape.exec(t);
            if (e) return { type: "escape", raw: e[0], text: fo(e[1]) };
          },
        },
        {
          key: "tag",
          value: function (t, e, n) {
            var r = this.rules.inline.tag.exec(t);
            if (r)
              return (
                !e && /^<a /i.test(r[0])
                  ? (e = !0)
                  : e && /^<\/a>/i.test(r[0]) && (e = !1),
                !n && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0])
                  ? (n = !0)
                  : n &&
                    /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) &&
                    (n = !1),
                {
                  type: this.options.sanitize ? "text" : "html",
                  raw: r[0],
                  inLink: e,
                  inRawBlock: n,
                  text: this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(r[0])
                      : fo(r[0])
                    : r[0],
                }
              );
          },
        },
        {
          key: "link",
          value: function (t) {
            var e = this.rules.inline.link.exec(t);
            if (e) {
              var n = e[2].trim();
              if (!this.options.pedantic && /^</.test(n)) {
                if (!/>$/.test(n)) return;
                var r = co(n.slice(0, -1), "\\");
                if ((n.length - r.length) % 2 == 0) return;
              } else {
                var u = ho(e[2], "()");
                if (u > -1) {
                  var i = (0 === e[0].indexOf("!") ? 5 : 4) + e[1].length + u;
                  (e[2] = e[2].substring(0, u)),
                    (e[0] = e[0].substring(0, i).trim()),
                    (e[3] = "");
                }
              }
              var a = e[2],
                o = "";
              if (this.options.pedantic) {
                var l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);
                l && ((a = l[1]), (o = l[3]));
              } else o = e[3] ? e[3].slice(1, -1) : "";
              return (
                (a = a.trim()),
                /^</.test(a) &&
                  (a =
                    this.options.pedantic && !/>$/.test(n)
                      ? a.slice(1)
                      : a.slice(1, -1)),
                go(
                  e,
                  {
                    href: a ? a.replace(this.rules.inline._escapes, "$1") : a,
                    title: o ? o.replace(this.rules.inline._escapes, "$1") : o,
                  },
                  e[0],
                )
              );
            }
          },
        },
        {
          key: "reflink",
          value: function (t, e) {
            var n;
            if (
              (n = this.rules.inline.reflink.exec(t)) ||
              (n = this.rules.inline.nolink.exec(t))
            ) {
              var r = (n[2] || n[1]).replace(/\s+/g, " ");
              if (!(r = e[r.toLowerCase()]) || !r.href) {
                var u = n[0].charAt(0);
                return { type: "text", raw: u, text: u };
              }
              return go(n, r, n[0]);
            }
          },
        },
        {
          key: "emStrong",
          value: function (t, e) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "",
              r = this.rules.inline.emStrong.lDelim.exec(t);
            if (
              r &&
              (!r[3] ||
                !n.match(
                  /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/,
                ))
            ) {
              var u = r[1] || r[2] || "";
              if (
                !u ||
                (u && ("" === n || this.rules.inline.punctuation.exec(n)))
              ) {
                var i,
                  a,
                  o = r[0].length - 1,
                  l = o,
                  s = 0,
                  c =
                    "*" === r[0][0]
                      ? this.rules.inline.emStrong.rDelimAst
                      : this.rules.inline.emStrong.rDelimUnd;
                for (
                  c.lastIndex = 0, e = e.slice(-1 * t.length + o);
                  null != (r = c.exec(e));

                )
                  if ((i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]))
                    if (((a = i.length), r[3] || r[4])) l += a;
                    else if (!((r[5] || r[6]) && o % 3) || (o + a) % 3) {
                      if (!((l -= a) > 0)) {
                        if (
                          (l + s - a <= 0 &&
                            !e.slice(c.lastIndex).match(c) &&
                            (a = Math.min(a, a + l + s)),
                          Math.min(o, a) % 2)
                        )
                          return {
                            type: "em",
                            raw: t.slice(0, o + r.index + a + 1),
                            text: t.slice(1, o + r.index + a),
                          };
                        if (Math.min(o, a) % 2 == 0)
                          return {
                            type: "strong",
                            raw: t.slice(0, o + r.index + a + 1),
                            text: t.slice(2, o + r.index + a - 1),
                          };
                      }
                    } else s += a;
              }
            }
          },
        },
        {
          key: "codespan",
          value: function (t) {
            var e = this.rules.inline.code.exec(t);
            if (e) {
              var n = e[2].replace(/\n/g, " "),
                r = /[^ ]/.test(n),
                u = /^ /.test(n) && / $/.test(n);
              return (
                r && u && (n = n.substring(1, n.length - 1)),
                (n = fo(n, !0)),
                { type: "codespan", raw: e[0], text: n }
              );
            }
          },
        },
        {
          key: "br",
          value: function (t) {
            var e = this.rules.inline.br.exec(t);
            if (e) return { type: "br", raw: e[0] };
          },
        },
        {
          key: "del",
          value: function (t) {
            var e = this.rules.inline.del.exec(t);
            if (e) return { type: "del", raw: e[0], text: e[2] };
          },
        },
        {
          key: "autolink",
          value: function (t, e) {
            var n,
              r,
              u = this.rules.inline.autolink.exec(t);
            if (u)
              return (
                (r =
                  "@" === u[2]
                    ? "mailto:" + (n = fo(this.options.mangle ? e(u[1]) : u[1]))
                    : (n = fo(u[1]))),
                {
                  type: "link",
                  raw: u[0],
                  text: n,
                  href: r,
                  tokens: [{ type: "text", raw: n, text: n }],
                }
              );
          },
        },
        {
          key: "url",
          value: function (t, e) {
            var n;
            if ((n = this.rules.inline.url.exec(t))) {
              var r, u;
              if ("@" === n[2])
                u = "mailto:" + (r = fo(this.options.mangle ? e(n[0]) : n[0]));
              else {
                var i;
                do {
                  (i = n[0]),
                    (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
                } while (i !== n[0]);
                (r = fo(n[0])), (u = "www." === n[1] ? "http://" + r : r);
              }
              return {
                type: "link",
                raw: n[0],
                text: r,
                href: u,
                tokens: [{ type: "text", raw: r, text: r }],
              };
            }
          },
        },
        {
          key: "inlineText",
          value: function (t, e, n) {
            var r,
              u = this.rules.inline.text.exec(t);
            if (u)
              return (
                (r = e
                  ? this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(u[0])
                      : fo(u[0])
                    : u[0]
                  : fo(this.options.smartypants ? n(u[0]) : u[0])),
                { type: "text", raw: u[0], text: r }
              );
          },
        },
      ]),
      t
    );
  })(),
  mo = no,
  vo = to,
  yo = ro,
  ko = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences:
      /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
    html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    nptable: mo,
    table: mo,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph:
      /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
    text: /^[^\n]+/,
    _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
    _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
  };
(ko.def = vo(ko.def)
  .replace("label", ko._label)
  .replace("title", ko._title)
  .getRegex()),
  (ko.bullet = /(?:[*+-]|\d{1,9}[.)])/),
  (ko.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/),
  (ko.item = vo(ko.item, "gm").replace(/bull/g, ko.bullet).getRegex()),
  (ko.listItemStart = vo(/^( *)(bull) */)
    .replace("bull", ko.bullet)
    .getRegex()),
  (ko.list = vo(ko.list)
    .replace(/bull/g, ko.bullet)
    .replace(
      "hr",
      "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))",
    )
    .replace("def", "\\n+(?=" + ko.def.source + ")")
    .getRegex()),
  (ko._tag =
    "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
  (ko._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
  (ko.html = vo(ko.html, "i")
    .replace("comment", ko._comment)
    .replace("tag", ko._tag)
    .replace(
      "attribute",
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
    )
    .getRegex()),
  (ko.paragraph = vo(ko._paragraph)
    .replace("hr", ko.hr)
    .replace("heading", " {0,3}#{1,6} ")
    .replace("|lheading", "")
    .replace("blockquote", " {0,3}>")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
    .replace("tag", ko._tag)
    .getRegex()),
  (ko.blockquote = vo(ko.blockquote)
    .replace("paragraph", ko.paragraph)
    .getRegex()),
  (ko.normal = yo({}, ko)),
  (ko.gfm = yo({}, ko.normal, {
    nptable:
      "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
    table:
      "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
  })),
  (ko.gfm.nptable = vo(ko.gfm.nptable)
    .replace("hr", ko.hr)
    .replace("heading", " {0,3}#{1,6} ")
    .replace("blockquote", " {0,3}>")
    .replace("code", " {4}[^\\n]")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
    .replace("tag", ko._tag)
    .getRegex()),
  (ko.gfm.table = vo(ko.gfm.table)
    .replace("hr", ko.hr)
    .replace("heading", " {0,3}#{1,6} ")
    .replace("blockquote", " {0,3}>")
    .replace("code", " {4}[^\\n]")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
    .replace("tag", ko._tag)
    .getRegex()),
  (ko.pedantic = yo({}, ko.normal, {
    html: vo(
      "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))",
    )
      .replace("comment", ko._comment)
      .replace(
        /tag/g,
        "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: mo,
    paragraph: vo(ko.normal._paragraph)
      .replace("hr", ko.hr)
      .replace("heading", " *#{1,6} *[^\n]")
      .replace("lheading", ko.lheading)
      .replace("blockquote", " {0,3}>")
      .replace("|fences", "")
      .replace("|list", "")
      .replace("|html", "")
      .getRegex(),
  }));
var Ao = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: mo,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst:
      /\_\_[^_]*?\*[^_]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd:
      /\*\*[^*]*?\_[^*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: mo,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/,
  _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",
};
(Ao.punctuation = vo(Ao.punctuation)
  .replace(/punctuation/g, Ao._punctuation)
  .getRegex()),
  (Ao.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
  (Ao.escapedEmSt = /\\\*|\\_/g),
  (Ao._comment = vo(ko._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex()),
  (Ao.emStrong.lDelim = vo(Ao.emStrong.lDelim)
    .replace(/punct/g, Ao._punctuation)
    .getRegex()),
  (Ao.emStrong.rDelimAst = vo(Ao.emStrong.rDelimAst, "g")
    .replace(/punct/g, Ao._punctuation)
    .getRegex()),
  (Ao.emStrong.rDelimUnd = vo(Ao.emStrong.rDelimUnd, "g")
    .replace(/punct/g, Ao._punctuation)
    .getRegex()),
  (Ao._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
  (Ao._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
  (Ao._email =
    /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
  (Ao.autolink = vo(Ao.autolink)
    .replace("scheme", Ao._scheme)
    .replace("email", Ao._email)
    .getRegex()),
  (Ao._attribute =
    /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
  (Ao.tag = vo(Ao.tag)
    .replace("comment", Ao._comment)
    .replace("attribute", Ao._attribute)
    .getRegex()),
  (Ao._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
  (Ao._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
  (Ao._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
  (Ao.link = vo(Ao.link)
    .replace("label", Ao._label)
    .replace("href", Ao._href)
    .replace("title", Ao._title)
    .getRegex()),
  (Ao.reflink = vo(Ao.reflink).replace("label", Ao._label).getRegex()),
  (Ao.reflinkSearch = vo(Ao.reflinkSearch, "g")
    .replace("reflink", Ao.reflink)
    .replace("nolink", Ao.nolink)
    .getRegex()),
  (Ao.normal = yo({}, Ao)),
  (Ao.pedantic = yo({}, Ao.normal, {
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g,
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g,
    },
    link: vo(/^!?\[(label)\]\((.*?)\)/)
      .replace("label", Ao._label)
      .getRegex(),
    reflink: vo(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace("label", Ao._label)
      .getRegex(),
  })),
  (Ao.gfm = yo({}, Ao.normal, {
    escape: vo(Ao.escape).replace("])", "~|])").getRegex(),
    _extended_email:
      /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal:
      /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
  })),
  (Ao.gfm.url = vo(Ao.gfm.url, "i")
    .replace("email", Ao.gfm._extended_email)
    .getRegex()),
  (Ao.breaks = yo({}, Ao.gfm, {
    br: vo(Ao.br).replace("{2,}", "*").getRegex(),
    text: vo(Ao.gfm.text)
      .replace("\\b_", "\\b_| {2,}\\n")
      .replace(/\{2,\}/g, "*")
      .getRegex(),
  }));
var Eo = { block: ko, inline: Ao },
  bo = Do,
  Fo = Ia.exports.defaults,
  Co = Eo.block,
  xo = Eo.inline,
  wo = lo;
function So(t) {
  return t
    .replace(/---/g, "—")
    .replace(/--/g, "–")
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
    .replace(/'/g, "’")
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
    .replace(/"/g, "”")
    .replace(/\.{3}/g, "…");
}
function Bo(t) {
  var e,
    n,
    r = "",
    u = t.length;
  for (e = 0; e < u; e++)
    (n = t.charCodeAt(e)),
      Math.random() > 0.5 && (n = "x" + n.toString(16)),
      (r += "&#" + n + ";");
  return r;
}
var _o = (function () {
    function t(e) {
      ir(this, t),
        (this.tokens = []),
        (this.tokens.links = Object.create(null)),
        (this.options = e || Fo),
        (this.options.tokenizer = this.options.tokenizer || new bo()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options);
      var n = { block: Co.normal, inline: xo.normal };
      this.options.pedantic
        ? ((n.block = Co.pedantic), (n.inline = xo.pedantic))
        : this.options.gfm &&
          ((n.block = Co.gfm),
          this.options.breaks ? (n.inline = xo.breaks) : (n.inline = xo.gfm)),
        (this.tokenizer.rules = n);
    }
    return (
      or(
        t,
        [
          {
            key: "lex",
            value: function (t) {
              return (
                (t = t.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ")),
                this.blockTokens(t, this.tokens, !0),
                this.inline(this.tokens),
                this.tokens
              );
            },
          },
          {
            key: "blockTokens",
            value: function (t) {
              var e,
                n,
                r,
                u,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                a =
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2];
              for (this.options.pedantic && (t = t.replace(/^ +$/gm, "")); t; )
                if ((e = this.tokenizer.space(t)))
                  (t = t.substring(e.raw.length)), e.type && i.push(e);
                else if ((e = this.tokenizer.code(t)))
                  (t = t.substring(e.raw.length)),
                    (u = i[i.length - 1]) && "paragraph" === u.type
                      ? ((u.raw += "\n" + e.raw), (u.text += "\n" + e.text))
                      : i.push(e);
                else if ((e = this.tokenizer.fences(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if ((e = this.tokenizer.heading(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if ((e = this.tokenizer.nptable(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if ((e = this.tokenizer.hr(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if ((e = this.tokenizer.blockquote(t)))
                  (t = t.substring(e.raw.length)),
                    (e.tokens = this.blockTokens(e.text, [], a)),
                    i.push(e);
                else if ((e = this.tokenizer.list(t))) {
                  for (
                    t = t.substring(e.raw.length), r = e.items.length, n = 0;
                    n < r;
                    n++
                  )
                    e.items[n].tokens = this.blockTokens(
                      e.items[n].text,
                      [],
                      !1,
                    );
                  i.push(e);
                } else if ((e = this.tokenizer.html(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if (a && (e = this.tokenizer.def(t)))
                  (t = t.substring(e.raw.length)),
                    this.tokens.links[e.tag] ||
                      (this.tokens.links[e.tag] = {
                        href: e.href,
                        title: e.title,
                      });
                else if ((e = this.tokenizer.table(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if ((e = this.tokenizer.lheading(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if (a && (e = this.tokenizer.paragraph(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if ((e = this.tokenizer.text(t)))
                  (t = t.substring(e.raw.length)),
                    (u = i[i.length - 1]) && "text" === u.type
                      ? ((u.raw += "\n" + e.raw), (u.text += "\n" + e.text))
                      : i.push(e);
                else if (t) {
                  var o = "Infinite loop on byte: " + t.charCodeAt(0);
                  if (this.options.silent) {
                    console.error(o);
                    break;
                  }
                  throw new Error(o);
                }
              return i;
            },
          },
          {
            key: "inline",
            value: function (t) {
              var e,
                n,
                r,
                u,
                i,
                a,
                o = t.length;
              for (e = 0; e < o; e++)
                switch ((a = t[e]).type) {
                  case "paragraph":
                  case "text":
                  case "heading":
                    (a.tokens = []), this.inlineTokens(a.text, a.tokens);
                    break;
                  case "table":
                    for (
                      a.tokens = { header: [], cells: [] },
                        u = a.header.length,
                        n = 0;
                      n < u;
                      n++
                    )
                      (a.tokens.header[n] = []),
                        this.inlineTokens(a.header[n], a.tokens.header[n]);
                    for (u = a.cells.length, n = 0; n < u; n++)
                      for (
                        i = a.cells[n], a.tokens.cells[n] = [], r = 0;
                        r < i.length;
                        r++
                      )
                        (a.tokens.cells[n][r] = []),
                          this.inlineTokens(i[r], a.tokens.cells[n][r]);
                    break;
                  case "blockquote":
                    this.inline(a.tokens);
                    break;
                  case "list":
                    for (u = a.items.length, n = 0; n < u; n++)
                      this.inline(a.items[n].tokens);
                }
              return t;
            },
          },
          {
            key: "inlineTokens",
            value: function (t) {
              var e,
                n,
                r,
                u,
                i,
                a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                o =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                l =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                s = t;
              if (this.tokens.links) {
                var c = Object.keys(this.tokens.links);
                if (c.length > 0)
                  for (
                    ;
                    null !=
                    (r = this.tokenizer.rules.inline.reflinkSearch.exec(s));

                  )
                    c.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) &&
                      (s =
                        s.slice(0, r.index) +
                        "[" +
                        wo("a", r[0].length - 2) +
                        "]" +
                        s.slice(
                          this.tokenizer.rules.inline.reflinkSearch.lastIndex,
                        ));
              }
              for (
                ;
                null != (r = this.tokenizer.rules.inline.blockSkip.exec(s));

              )
                s =
                  s.slice(0, r.index) +
                  "[" +
                  wo("a", r[0].length - 2) +
                  "]" +
                  s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
              for (
                ;
                null != (r = this.tokenizer.rules.inline.escapedEmSt.exec(s));

              )
                s =
                  s.slice(0, r.index) +
                  "++" +
                  s.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
              for (; t; )
                if ((u || (i = ""), (u = !1), (e = this.tokenizer.escape(t))))
                  (t = t.substring(e.raw.length)), a.push(e);
                else if ((e = this.tokenizer.tag(t, o, l))) {
                  (t = t.substring(e.raw.length)),
                    (o = e.inLink),
                    (l = e.inRawBlock);
                  var p = a[a.length - 1];
                  p && "text" === e.type && "text" === p.type
                    ? ((p.raw += e.raw), (p.text += e.text))
                    : a.push(e);
                } else if ((e = this.tokenizer.link(t)))
                  (t = t.substring(e.raw.length)),
                    "link" === e.type &&
                      (e.tokens = this.inlineTokens(e.text, [], !0, l)),
                    a.push(e);
                else if ((e = this.tokenizer.reflink(t, this.tokens.links))) {
                  t = t.substring(e.raw.length);
                  var d = a[a.length - 1];
                  "link" === e.type
                    ? ((e.tokens = this.inlineTokens(e.text, [], !0, l)),
                      a.push(e))
                    : d && "text" === e.type && "text" === d.type
                      ? ((d.raw += e.raw), (d.text += e.text))
                      : a.push(e);
                } else if ((e = this.tokenizer.emStrong(t, s, i)))
                  (t = t.substring(e.raw.length)),
                    (e.tokens = this.inlineTokens(e.text, [], o, l)),
                    a.push(e);
                else if ((e = this.tokenizer.codespan(t)))
                  (t = t.substring(e.raw.length)), a.push(e);
                else if ((e = this.tokenizer.br(t)))
                  (t = t.substring(e.raw.length)), a.push(e);
                else if ((e = this.tokenizer.del(t)))
                  (t = t.substring(e.raw.length)),
                    (e.tokens = this.inlineTokens(e.text, [], o, l)),
                    a.push(e);
                else if ((e = this.tokenizer.autolink(t, Bo)))
                  (t = t.substring(e.raw.length)), a.push(e);
                else if (o || !(e = this.tokenizer.url(t, Bo))) {
                  if ((e = this.tokenizer.inlineText(t, l, So)))
                    (t = t.substring(e.raw.length)),
                      "_" !== e.raw.slice(-1) && (i = e.raw.slice(-1)),
                      (u = !0),
                      (n = a[a.length - 1]) && "text" === n.type
                        ? ((n.raw += e.raw), (n.text += e.text))
                        : a.push(e);
                  else if (t) {
                    var f = "Infinite loop on byte: " + t.charCodeAt(0);
                    if (this.options.silent) {
                      console.error(f);
                      break;
                    }
                    throw new Error(f);
                  }
                } else (t = t.substring(e.raw.length)), a.push(e);
              return a;
            },
          },
        ],
        [
          {
            key: "rules",
            get: function () {
              return { block: Co, inline: xo };
            },
          },
          {
            key: "lex",
            value: function (e, n) {
              return new t(n).lex(e);
            },
          },
          {
            key: "lexInline",
            value: function (e, n) {
              return new t(n).inlineTokens(e);
            },
          },
        ],
      ),
      t
    );
  })(),
  To = Ia.exports.defaults,
  zo = eo,
  Io = Ga,
  Ro = (function () {
    function t(e) {
      ir(this, t), (this.options = e || To);
    }
    return (
      or(t, [
        {
          key: "code",
          value: function (t, e, n) {
            var r = (e || "").match(/\S*/)[0];
            if (this.options.highlight) {
              var u = this.options.highlight(t, r);
              null != u && u !== t && ((n = !0), (t = u));
            }
            return (
              (t = t.replace(/\n$/, "") + "\n"),
              r
                ? '<pre><code class="' +
                  this.options.langPrefix +
                  Io(r, !0) +
                  '">' +
                  (n ? t : Io(t, !0)) +
                  "</code></pre>\n"
                : "<pre><code>" + (n ? t : Io(t, !0)) + "</code></pre>\n"
            );
          },
        },
        {
          key: "blockquote",
          value: function (t) {
            return "<blockquote>\n" + t + "</blockquote>\n";
          },
        },
        {
          key: "html",
          value: function (t) {
            return t;
          },
        },
        {
          key: "heading",
          value: function (t, e, n, r) {
            return this.options.headerIds
              ? "<h" +
                  e +
                  ' id="' +
                  this.options.headerPrefix +
                  r.slug(n) +
                  '">' +
                  t +
                  "</h" +
                  e +
                  ">\n"
              : "<h" + e + ">" + t + "</h" + e + ">\n";
          },
        },
        {
          key: "hr",
          value: function () {
            return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
          },
        },
        {
          key: "list",
          value: function (t, e, n) {
            var r = e ? "ol" : "ul";
            return (
              "<" +
              r +
              (e && 1 !== n ? ' start="' + n + '"' : "") +
              ">\n" +
              t +
              "</" +
              r +
              ">\n"
            );
          },
        },
        {
          key: "listitem",
          value: function (t) {
            return "<li>" + t + "</li>\n";
          },
        },
        {
          key: "checkbox",
          value: function (t) {
            return (
              "<input " +
              (t ? 'checked="" ' : "") +
              'disabled="" type="checkbox"' +
              (this.options.xhtml ? " /" : "") +
              "> "
            );
          },
        },
        {
          key: "paragraph",
          value: function (t) {
            return "<p>" + t + "</p>\n";
          },
        },
        {
          key: "table",
          value: function (t, e) {
            return (
              e && (e = "<tbody>" + e + "</tbody>"),
              "<table>\n<thead>\n" + t + "</thead>\n" + e + "</table>\n"
            );
          },
        },
        {
          key: "tablerow",
          value: function (t) {
            return "<tr>\n" + t + "</tr>\n";
          },
        },
        {
          key: "tablecell",
          value: function (t, e) {
            var n = e.header ? "th" : "td";
            return (
              (e.align
                ? "<" + n + ' align="' + e.align + '">'
                : "<" + n + ">") +
              t +
              "</" +
              n +
              ">\n"
            );
          },
        },
        {
          key: "strong",
          value: function (t) {
            return "<strong>" + t + "</strong>";
          },
        },
        {
          key: "em",
          value: function (t) {
            return "<em>" + t + "</em>";
          },
        },
        {
          key: "codespan",
          value: function (t) {
            return "<code>" + t + "</code>";
          },
        },
        {
          key: "br",
          value: function () {
            return this.options.xhtml ? "<br/>" : "<br>";
          },
        },
        {
          key: "del",
          value: function (t) {
            return "<del>" + t + "</del>";
          },
        },
        {
          key: "link",
          value: function (t, e, n) {
            if (
              null === (t = zo(this.options.sanitize, this.options.baseUrl, t))
            )
              return n;
            var r = '<a href="' + Io(t) + '"';
            return e && (r += ' title="' + e + '"'), (r += ">" + n + "</a>");
          },
        },
        {
          key: "image",
          value: function (t, e, n) {
            if (
              null === (t = zo(this.options.sanitize, this.options.baseUrl, t))
            )
              return n;
            var r = '<img src="' + t + '" alt="' + n + '"';
            return (
              e && (r += ' title="' + e + '"'),
              (r += this.options.xhtml ? "/>" : ">")
            );
          },
        },
        {
          key: "text",
          value: function (t) {
            return t;
          },
        },
      ]),
      t
    );
  })(),
  $o = (function () {
    function t() {
      ir(this, t);
    }
    return (
      or(t, [
        {
          key: "strong",
          value: function (t) {
            return t;
          },
        },
        {
          key: "em",
          value: function (t) {
            return t;
          },
        },
        {
          key: "codespan",
          value: function (t) {
            return t;
          },
        },
        {
          key: "del",
          value: function (t) {
            return t;
          },
        },
        {
          key: "html",
          value: function (t) {
            return t;
          },
        },
        {
          key: "text",
          value: function (t) {
            return t;
          },
        },
        {
          key: "link",
          value: function (t, e, n) {
            return "" + n;
          },
        },
        {
          key: "image",
          value: function (t, e, n) {
            return "" + n;
          },
        },
        {
          key: "br",
          value: function () {
            return "";
          },
        },
      ]),
      t
    );
  })(),
  Oo = (function () {
    function t() {
      ir(this, t), (this.seen = {});
    }
    return (
      or(t, [
        {
          key: "serialize",
          value: function (t) {
            return t
              .toLowerCase()
              .trim()
              .replace(/<[!\/a-z].*?>/gi, "")
              .replace(
                /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                "",
              )
              .replace(/\s/g, "-");
          },
        },
        {
          key: "getNextSafeSlug",
          value: function (t, e) {
            var n = t,
              r = 0;
            if (this.seen.hasOwnProperty(n)) {
              r = this.seen[t];
              do {
                n = t + "-" + ++r;
              } while (this.seen.hasOwnProperty(n));
            }
            return e || ((this.seen[t] = r), (this.seen[n] = 0)), n;
          },
        },
        {
          key: "slug",
          value: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = this.serialize(t);
            return this.getNextSafeSlug(n, e.dryrun);
          },
        },
      ]),
      t
    );
  })(),
  Po = Ro,
  Lo = $o,
  jo = Oo,
  Mo = Ia.exports.defaults,
  No = Qa,
  Uo = _o,
  qo = (function () {
    function t(e) {
      ir(this, t),
        (this.options = e || Mo),
        (this.options.renderer = this.options.renderer || new Po()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.textRenderer = new Lo()),
        (this.slugger = new jo());
    }
    return (
      or(
        t,
        [
          {
            key: "parse",
            value: function (t) {
              var e,
                n,
                r,
                u,
                i,
                a,
                o,
                l,
                s,
                c,
                p,
                d,
                f,
                h,
                g,
                D,
                m,
                v,
                y =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                k = "",
                A = t.length;
              for (e = 0; e < A; e++)
                switch ((c = t[e]).type) {
                  case "space":
                    continue;
                  case "hr":
                    k += this.renderer.hr();
                    continue;
                  case "heading":
                    k += this.renderer.heading(
                      this.parseInline(c.tokens),
                      c.depth,
                      No(this.parseInline(c.tokens, this.textRenderer)),
                      this.slugger,
                    );
                    continue;
                  case "code":
                    k += this.renderer.code(c.text, c.lang, c.escaped);
                    continue;
                  case "table":
                    for (l = "", o = "", u = c.header.length, n = 0; n < u; n++)
                      o += this.renderer.tablecell(
                        this.parseInline(c.tokens.header[n]),
                        { header: !0, align: c.align[n] },
                      );
                    for (
                      l += this.renderer.tablerow(o),
                        s = "",
                        u = c.cells.length,
                        n = 0;
                      n < u;
                      n++
                    ) {
                      for (
                        o = "", i = (a = c.tokens.cells[n]).length, r = 0;
                        r < i;
                        r++
                      )
                        o += this.renderer.tablecell(this.parseInline(a[r]), {
                          header: !1,
                          align: c.align[r],
                        });
                      s += this.renderer.tablerow(o);
                    }
                    k += this.renderer.table(l, s);
                    continue;
                  case "blockquote":
                    (s = this.parse(c.tokens)),
                      (k += this.renderer.blockquote(s));
                    continue;
                  case "list":
                    for (
                      p = c.ordered,
                        d = c.start,
                        f = c.loose,
                        u = c.items.length,
                        s = "",
                        n = 0;
                      n < u;
                      n++
                    )
                      (D = (g = c.items[n]).checked),
                        (m = g.task),
                        (h = ""),
                        g.task &&
                          ((v = this.renderer.checkbox(D)),
                          f
                            ? g.tokens.length > 0 && "text" === g.tokens[0].type
                              ? ((g.tokens[0].text =
                                  v + " " + g.tokens[0].text),
                                g.tokens[0].tokens &&
                                  g.tokens[0].tokens.length > 0 &&
                                  "text" === g.tokens[0].tokens[0].type &&
                                  (g.tokens[0].tokens[0].text =
                                    v + " " + g.tokens[0].tokens[0].text))
                              : g.tokens.unshift({ type: "text", text: v })
                            : (h += v)),
                        (h += this.parse(g.tokens, f)),
                        (s += this.renderer.listitem(h, m, D));
                    k += this.renderer.list(s, p, d);
                    continue;
                  case "html":
                    k += this.renderer.html(c.text);
                    continue;
                  case "paragraph":
                    k += this.renderer.paragraph(this.parseInline(c.tokens));
                    continue;
                  case "text":
                    for (
                      s = c.tokens ? this.parseInline(c.tokens) : c.text;
                      e + 1 < A && "text" === t[e + 1].type;

                    )
                      s +=
                        "\n" +
                        ((c = t[++e]).tokens
                          ? this.parseInline(c.tokens)
                          : c.text);
                    k += y ? this.renderer.paragraph(s) : s;
                    continue;
                  default:
                    var E = 'Token with "' + c.type + '" type was not found.';
                    if (this.options.silent) return void console.error(E);
                    throw new Error(E);
                }
              return k;
            },
          },
          {
            key: "parseInline",
            value: function (t, e) {
              e = e || this.renderer;
              var n,
                r,
                u = "",
                i = t.length;
              for (n = 0; n < i; n++)
                switch ((r = t[n]).type) {
                  case "escape":
                    u += e.text(r.text);
                    break;
                  case "html":
                    u += e.html(r.text);
                    break;
                  case "link":
                    u += e.link(r.href, r.title, this.parseInline(r.tokens, e));
                    break;
                  case "image":
                    u += e.image(r.href, r.title, r.text);
                    break;
                  case "strong":
                    u += e.strong(this.parseInline(r.tokens, e));
                    break;
                  case "em":
                    u += e.em(this.parseInline(r.tokens, e));
                    break;
                  case "codespan":
                    u += e.codespan(r.text);
                    break;
                  case "br":
                    u += e.br();
                    break;
                  case "del":
                    u += e.del(this.parseInline(r.tokens, e));
                    break;
                  case "text":
                    u += e.text(r.text);
                    break;
                  default:
                    var a = 'Token with "' + r.type + '" type was not found.';
                    if (this.options.silent) return void console.error(a);
                    throw new Error(a);
                }
              return u;
            },
          },
        ],
        [
          {
            key: "parse",
            value: function (e, n) {
              return new t(n).parse(e);
            },
          },
          {
            key: "parseInline",
            value: function (e, n) {
              return new t(n).parseInline(e);
            },
          },
        ],
      ),
      t
    );
  })(),
  Zo = Do,
  Ko = Ro,
  Jo = $o,
  Ho = Oo,
  Wo = ro,
  Yo = oo,
  Vo = Ga,
  Xo = Ia.exports.getDefaults,
  Go = Ia.exports.changeDefaults,
  Qo = Ia.exports.defaults;
function tl(t, e, n) {
  if (null == t)
    throw new Error("marked(): input parameter is undefined or null");
  if ("string" != typeof t)
    throw new Error(
      "marked(): input parameter is of type " +
        Object.prototype.toString.call(t) +
        ", string expected",
    );
  if (
    ("function" == typeof e && ((n = e), (e = null)),
    (e = Wo({}, tl.defaults, e || {})),
    Yo(e),
    n)
  ) {
    var r,
      u = e.highlight;
    try {
      r = Uo.lex(t, e);
    } catch (t) {
      return n(t);
    }
    var i = function (t) {
      var i;
      if (!t)
        try {
          i = qo.parse(r, e);
        } catch (e) {
          t = e;
        }
      return (e.highlight = u), t ? n(t) : n(null, i);
    };
    if (!u || u.length < 3) return i();
    if ((delete e.highlight, !r.length)) return i();
    var a = 0;
    return (
      tl.walkTokens(r, function (t) {
        "code" === t.type &&
          (a++,
          setTimeout(function () {
            u(t.text, t.lang, function (e, n) {
              if (e) return i(e);
              null != n && n !== t.text && ((t.text = n), (t.escaped = !0)),
                0 === --a && i();
            });
          }, 0));
      }),
      void (0 === a && i())
    );
  }
  try {
    var o = Uo.lex(t, e);
    return e.walkTokens && tl.walkTokens(o, e.walkTokens), qo.parse(o, e);
  } catch (t) {
    if (
      ((t.message +=
        "\nPlease report this to https://github.com/markedjs/marked."),
      e.silent)
    )
      return (
        "<p>An error occurred:</p><pre>" + Vo(t.message + "", !0) + "</pre>"
      );
    throw t;
  }
}
(tl.options = tl.setOptions =
  function (t) {
    return Wo(tl.defaults, t), Go(tl.defaults), tl;
  }),
  (tl.getDefaults = Xo),
  (tl.defaults = Qo),
  (tl.use = function (t) {
    var e = Wo({}, t);
    if (
      (t.renderer &&
        (function () {
          var n = tl.defaults.renderer || new Ko(),
            r = function (e) {
              var r = n[e];
              n[e] = function () {
                for (
                  var u = arguments.length, i = new Array(u), a = 0;
                  a < u;
                  a++
                )
                  i[a] = arguments[a];
                var o = t.renderer[e].apply(n, i);
                return !1 === o && (o = r.apply(n, i)), o;
              };
            };
          for (var u in t.renderer) r(u);
          e.renderer = n;
        })(),
      t.tokenizer &&
        (function () {
          var n = tl.defaults.tokenizer || new Zo(),
            r = function (e) {
              var r = n[e];
              n[e] = function () {
                for (
                  var u = arguments.length, i = new Array(u), a = 0;
                  a < u;
                  a++
                )
                  i[a] = arguments[a];
                var o = t.tokenizer[e].apply(n, i);
                return !1 === o && (o = r.apply(n, i)), o;
              };
            };
          for (var u in t.tokenizer) r(u);
          e.tokenizer = n;
        })(),
      t.walkTokens)
    ) {
      var n = tl.defaults.walkTokens;
      e.walkTokens = function (e) {
        t.walkTokens(e), n && n(e);
      };
    }
    tl.setOptions(e);
  }),
  (tl.walkTokens = function (t, e) {
    var n,
      r = pr(t);
    try {
      for (r.s(); !(n = r.n()).done; ) {
        var u = n.value;
        switch ((e(u), u.type)) {
          case "table":
            var i,
              a = pr(u.tokens.header);
            try {
              for (a.s(); !(i = a.n()).done; ) {
                var o = i.value;
                tl.walkTokens(o, e);
              }
            } catch (t) {
              a.e(t);
            } finally {
              a.f();
            }
            var l,
              s = pr(u.tokens.cells);
            try {
              for (s.s(); !(l = s.n()).done; ) {
                var c,
                  p = pr(l.value);
                try {
                  for (p.s(); !(c = p.n()).done; ) {
                    var d = c.value;
                    tl.walkTokens(d, e);
                  }
                } catch (t) {
                  p.e(t);
                } finally {
                  p.f();
                }
              }
            } catch (t) {
              s.e(t);
            } finally {
              s.f();
            }
            break;
          case "list":
            tl.walkTokens(u.items, e);
            break;
          default:
            u.tokens && tl.walkTokens(u.tokens, e);
        }
      }
    } catch (t) {
      r.e(t);
    } finally {
      r.f();
    }
  }),
  (tl.parseInline = function (t, e) {
    if (null == t)
      throw new Error(
        "marked.parseInline(): input parameter is undefined or null",
      );
    if ("string" != typeof t)
      throw new Error(
        "marked.parseInline(): input parameter is of type " +
          Object.prototype.toString.call(t) +
          ", string expected",
      );
    (e = Wo({}, tl.defaults, e || {})), Yo(e);
    try {
      var n = Uo.lexInline(t, e);
      return (
        e.walkTokens && tl.walkTokens(n, e.walkTokens), qo.parseInline(n, e)
      );
    } catch (t) {
      if (
        ((t.message +=
          "\nPlease report this to https://github.com/markedjs/marked."),
        e.silent)
      )
        return (
          "<p>An error occurred:</p><pre>" + Vo(t.message + "", !0) + "</pre>"
        );
      throw t;
    }
  }),
  (tl.Parser = qo),
  (tl.parser = qo.parse),
  (tl.Renderer = Ko),
  (tl.TextRenderer = Jo),
  (tl.Lexer = Uo),
  (tl.lexer = Uo.lex),
  (tl.Tokenizer = Zo),
  (tl.Slugger = Ho),
  (tl.parse = tl);
var el = tl;
export default function () {
  var t,
    e = null;
  function n() {
    var n;
    !e || e.closed
      ? (((e = window.open(
          "about:blank",
          "reveal.js - Notes",
          "width=1100,height=700",
        )).marked = el),
        e.document.write(
          "<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\">\n\n\t\t<title>reveal.js - Speaker View</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: Helvetica;\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\n\t\t\t#current-slide,\n\t\t\t#upcoming-slide,\n\t\t\t#speaker-controls {\n\t\t\t\tpadding: 6px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\t-moz-box-sizing: border-box;\n\t\t\t}\n\n\t\t\t#current-slide iframe,\n\t\t\t#upcoming-slide iframe {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tborder: 1px solid #ddd;\n\t\t\t}\n\n\t\t\t#current-slide .label,\n\t\t\t#upcoming-slide .label {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 10px;\n\t\t\t\tleft: 10px;\n\t\t\t\tz-index: 2;\n\t\t\t}\n\n\t\t\t#connection-status {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tz-index: 20;\n\t\t\t\tpadding: 30% 20% 20% 20%;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tcolor: #222;\n\t\t\t\tbackground: #fff;\n\t\t\t\ttext-align: center;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tline-height: 1.4;\n\t\t\t}\n\n\t\t\t.overlay-element {\n\t\t\t\theight: 34px;\n\t\t\t\tline-height: 34px;\n\t\t\t\tpadding: 0 10px;\n\t\t\t\ttext-shadow: none;\n\t\t\t\tbackground: rgba( 220, 220, 220, 0.8 );\n\t\t\t\tcolor: #222;\n\t\t\t\tfont-size: 14px;\n\t\t\t}\n\n\t\t\t.overlay-element.interactive:hover {\n\t\t\t\tbackground: rgba( 220, 220, 220, 1 );\n\t\t\t}\n\n\t\t\t#current-slide {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 60%;\n\t\t\t\theight: 100%;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tpadding-right: 0;\n\t\t\t}\n\n\t\t\t#upcoming-slide {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 40%;\n\t\t\t\theight: 40%;\n\t\t\t\tright: 0;\n\t\t\t\ttop: 0;\n\t\t\t}\n\n\t\t\t/* Speaker controls */\n\t\t\t#speaker-controls {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 40%;\n\t\t\t\tright: 0;\n\t\t\t\twidth: 40%;\n\t\t\t\theight: 60%;\n\t\t\t\toverflow: auto;\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\n\t\t\t\t.speaker-controls-time.hidden,\n\t\t\t\t.speaker-controls-notes.hidden {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .label,\n\t\t\t\t.speaker-controls-pace .label,\n\t\t\t\t.speaker-controls-notes .label {\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\tfont-weight: normal;\n\t\t\t\t\tfont-size: 0.66em;\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time, .speaker-controls-pace {\n\t\t\t\t\tborder-bottom: 1px solid rgba( 200, 200, 200, 0.5 );\n\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t\tpadding: 10px 16px;\n\t\t\t\t\tpadding-bottom: 20px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .reset-button {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tfloat: right;\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t}\n\t\t\t\t.speaker-controls-time:hover .reset-button {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .timer,\n\t\t\t\t.speaker-controls-time .clock {\n\t\t\t\t\twidth: 50%;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .timer,\n\t\t\t\t.speaker-controls-time .clock,\n\t\t\t\t.speaker-controls-time .pacing .hours-value,\n\t\t\t\t.speaker-controls-time .pacing .minutes-value,\n\t\t\t\t.speaker-controls-time .pacing .seconds-value {\n\t\t\t\t\tfont-size: 1.9em;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .timer {\n\t\t\t\t\tfloat: left;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .clock {\n\t\t\t\t\tfloat: right;\n\t\t\t\t\ttext-align: right;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time span.mute {\n\t\t\t\t\topacity: 0.3;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing-title {\n\t\t\t\t\tmargin-top: 5px;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing.ahead {\n\t\t\t\t\tcolor: blue;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing.on-track {\n\t\t\t\t\tcolor: green;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing.behind {\n\t\t\t\t\tcolor: red;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-notes {\n\t\t\t\t\tpadding: 10px 16px;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-notes .value {\n\t\t\t\t\tmargin-top: 5px;\n\t\t\t\t\tline-height: 1.4;\n\t\t\t\t\tfont-size: 1.2em;\n\t\t\t\t}\n\n\t\t\t/* Layout selector */\n\t\t\t#speaker-layout {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 10px;\n\t\t\t\tright: 10px;\n\t\t\t\tcolor: #222;\n\t\t\t\tz-index: 10;\n\t\t\t}\n\t\t\t\t#speaker-layout select {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tborder: 0;\n\t\t\t\t\tbox-shadow: 0;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\topacity: 0;\n\n\t\t\t\t\tfont-size: 1em;\n\t\t\t\t\tbackground-color: transparent;\n\n\t\t\t\t\t-moz-appearance: none;\n\t\t\t\t\t-webkit-appearance: none;\n\t\t\t\t\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\t\t\t\t}\n\n\t\t\t\t#speaker-layout select:focus {\n\t\t\t\t\toutline: none;\n\t\t\t\t\tbox-shadow: none;\n\t\t\t\t}\n\n\t\t\t.clear {\n\t\t\t\tclear: both;\n\t\t\t}\n\n\t\t\t/* Speaker layout: Wide */\n\t\t\tbody[data-speaker-layout=\"wide\"] #current-slide,\n\t\t\tbody[data-speaker-layout=\"wide\"] #upcoming-slide {\n\t\t\t\twidth: 50%;\n\t\t\t\theight: 45%;\n\t\t\t\tpadding: 6px;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"wide\"] #current-slide {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"wide\"] #upcoming-slide {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 50%;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"wide\"] #speaker-controls {\n\t\t\t\ttop: 45%;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 50%;\n\t\t\t\tfont-size: 1.25em;\n\t\t\t}\n\n\t\t\t/* Speaker layout: Tall */\n\t\t\tbody[data-speaker-layout=\"tall\"] #current-slide,\n\t\t\tbody[data-speaker-layout=\"tall\"] #upcoming-slide {\n\t\t\t\twidth: 45%;\n\t\t\t\theight: 50%;\n\t\t\t\tpadding: 6px;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"tall\"] #current-slide {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"tall\"] #upcoming-slide {\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"tall\"] #speaker-controls {\n\t\t\t\tpadding-top: 40px;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 45%;\n\t\t\t\twidth: 55%;\n\t\t\t\theight: 100%;\n\t\t\t\tfont-size: 1.25em;\n\t\t\t}\n\n\t\t\t/* Speaker layout: Notes only */\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #current-slide,\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #upcoming-slide {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #speaker-controls {\n\t\t\t\tpadding-top: 40px;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tfont-size: 1.25em;\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 1080px) {\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\n\t\t\t\t\tfont-size: 16px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 900px) {\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 800px) {\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t</style>\n\t</head>\n\n\t<body>\n\n\t\t<div id=\"connection-status\">Loading speaker view...</div>\n\n\t\t<div id=\"current-slide\"></div>\n\t\t<div id=\"upcoming-slide\"><span class=\"overlay-element label\">Upcoming</span></div>\n\t\t<div id=\"speaker-controls\">\n\t\t\t<div class=\"speaker-controls-time\">\n\t\t\t\t<h4 class=\"label\">Time <span class=\"reset-button\">Click to Reset</span></h4>\n\t\t\t\t<div class=\"clock\">\n\t\t\t\t\t<span class=\"clock-value\">0:00 AM</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"timer\">\n\t\t\t\t\t<span class=\"hours-value\">00</span><span class=\"minutes-value\">:00</span><span class=\"seconds-value\">:00</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\n\t\t\t\t<h4 class=\"label pacing-title\" style=\"display: none\">Pacing – Time to finish current slide</h4>\n\t\t\t\t<div class=\"pacing\" style=\"display: none\">\n\t\t\t\t\t<span class=\"hours-value\">00</span><span class=\"minutes-value\">:00</span><span class=\"seconds-value\">:00</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"speaker-controls-notes hidden\">\n\t\t\t\t<h4 class=\"label\">Notes</h4>\n\t\t\t\t<div class=\"value\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"speaker-layout\" class=\"overlay-element interactive\">\n\t\t\t<span class=\"speaker-layout-label\"></span>\n\t\t\t<select class=\"speaker-layout-dropdown\"></select>\n\t\t</div>\n\n\t\t<script>\n\n\t\t\t(function() {\n\n\t\t\t\tvar notes,\n\t\t\t\t\tnotesValue,\n\t\t\t\t\tcurrentState,\n\t\t\t\t\tcurrentSlide,\n\t\t\t\t\tupcomingSlide,\n\t\t\t\t\tlayoutLabel,\n\t\t\t\t\tlayoutDropdown,\n\t\t\t\t\tpendingCalls = {},\n\t\t\t\t\tlastRevealApiCallId = 0,\n\t\t\t\t\tconnected = false;\n\n\t\t\t\tvar SPEAKER_LAYOUTS = {\n\t\t\t\t\t'default': 'Default',\n\t\t\t\t\t'wide': 'Wide',\n\t\t\t\t\t'tall': 'Tall',\n\t\t\t\t\t'notes-only': 'Notes only'\n\t\t\t\t};\n\n\t\t\t\tsetupLayout();\n\n\t\t\t\tvar connectionStatus = document.querySelector( '#connection-status' );\n\t\t\t\tvar connectionTimeout = setTimeout( function() {\n\t\t\t\t\tconnectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';\n\t\t\t\t}, 5000 );\n\n\t\t\t\twindow.addEventListener( 'message', function( event ) {\n\n\t\t\t\t\tclearTimeout( connectionTimeout );\n\t\t\t\t\tconnectionStatus.style.display = 'none';\n\n\t\t\t\t\tvar data = JSON.parse( event.data );\n\n\t\t\t\t\t// The overview mode is only useful to the reveal.js instance\n\t\t\t\t\t// where navigation occurs so we don't sync it\n\t\t\t\t\tif( data.state ) delete data.state.overview;\n\n\t\t\t\t\t// Messages sent by the notes plugin inside of the main window\n\t\t\t\t\tif( data && data.namespace === 'reveal-notes' ) {\n\t\t\t\t\t\tif( data.type === 'connect' ) {\n\t\t\t\t\t\t\thandleConnectMessage( data );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if( data.type === 'state' ) {\n\t\t\t\t\t\t\thandleStateMessage( data );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if( data.type === 'return' ) {\n\t\t\t\t\t\t\tpendingCalls[data.callId](data.result);\n\t\t\t\t\t\t\tdelete pendingCalls[data.callId];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t// Messages sent by the reveal.js inside of the current slide preview\n\t\t\t\t\telse if( data && data.namespace === 'reveal' ) {\n\t\t\t\t\t\tif( /ready/.test( data.eventName ) ) {\n\t\t\t\t\t\t\t// Send a message back to notify that the handshake is complete\n\t\t\t\t\t\t\twindow.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {\n\n\t\t\t\t\t\t\twindow.opener.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ]} ), '*' );\n\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t} );\n\n\t\t\t\t/**\n\t\t\t\t * Asynchronously calls the Reveal.js API of the main frame.\n\t\t\t\t */\n\t\t\t\tfunction callRevealApi( methodName, methodArguments, callback ) {\n\n\t\t\t\t\tvar callId = ++lastRevealApiCallId;\n\t\t\t\t\tpendingCalls[callId] = callback;\n\t\t\t\t\twindow.opener.postMessage( JSON.stringify( {\n\t\t\t\t\t\tnamespace: 'reveal-notes',\n\t\t\t\t\t\ttype: 'call',\n\t\t\t\t\t\tcallId: callId,\n\t\t\t\t\t\tmethodName: methodName,\n\t\t\t\t\t\targuments: methodArguments\n\t\t\t\t\t} ), '*' );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Called when the main window is trying to establish a\n\t\t\t\t * connection.\n\t\t\t\t */\n\t\t\t\tfunction handleConnectMessage( data ) {\n\n\t\t\t\t\tif( connected === false ) {\n\t\t\t\t\t\tconnected = true;\n\n\t\t\t\t\t\tsetupIframes( data );\n\t\t\t\t\t\tsetupKeyboard();\n\t\t\t\t\t\tsetupNotes();\n\t\t\t\t\t\tsetupTimer();\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Called when the main window sends an updated state.\n\t\t\t\t */\n\t\t\t\tfunction handleStateMessage( data ) {\n\n\t\t\t\t\t// Store the most recently set state to avoid circular loops\n\t\t\t\t\t// applying the same state\n\t\t\t\t\tcurrentState = JSON.stringify( data.state );\n\n\t\t\t\t\t// No need for updating the notes in case of fragment changes\n\t\t\t\t\tif ( data.notes ) {\n\t\t\t\t\t\tnotes.classList.remove( 'hidden' );\n\t\t\t\t\t\tnotesValue.style.whiteSpace = data.whitespace;\n\t\t\t\t\t\tif( data.markdown ) {\n\t\t\t\t\t\t\tnotesValue.innerHTML = marked( data.notes );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tnotesValue.innerHTML = data.notes;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tnotes.classList.add( 'hidden' );\n\t\t\t\t\t}\n\n\t\t\t\t\t// Update the note slides\n\t\t\t\t\tcurrentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );\n\t\t\t\t\tupcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );\n\t\t\t\t\tupcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );\n\n\t\t\t\t}\n\n\t\t\t\t// Limit to max one state update per X ms\n\t\t\t\thandleStateMessage = debounce( handleStateMessage, 200 );\n\n\t\t\t\t/**\n\t\t\t\t * Forward keyboard events to the current slide window.\n\t\t\t\t * This enables keyboard events to work even if focus\n\t\t\t\t * isn't set on the current slide iframe.\n\t\t\t\t *\n\t\t\t\t * Block F5 default handling, it reloads and disconnects\n\t\t\t\t * the speaker notes window.\n\t\t\t\t */\n\t\t\t\tfunction setupKeyboard() {\n\n\t\t\t\t\tdocument.addEventListener( 'keydown', function( event ) {\n\t\t\t\t\t\tif( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {\n\t\t\t\t\t\t\tevent.preventDefault();\n\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcurrentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Creates the preview iframes.\n\t\t\t\t */\n\t\t\t\tfunction setupIframes( data ) {\n\n\t\t\t\t\tvar params = [\n\t\t\t\t\t\t'receiver',\n\t\t\t\t\t\t'progress=false',\n\t\t\t\t\t\t'history=false',\n\t\t\t\t\t\t'transition=none',\n\t\t\t\t\t\t'autoSlide=0',\n\t\t\t\t\t\t'backgroundTransition=none'\n\t\t\t\t\t].join( '&' );\n\n\t\t\t\t\tvar urlSeparator = /\\?/.test(data.url) ? '&' : '?';\n\t\t\t\t\tvar hash = '#/' + data.state.indexh + '/' + data.state.indexv;\n\t\t\t\t\tvar currentURL = data.url + urlSeparator + params + '&postMessageEvents=true' + hash;\n\t\t\t\t\tvar upcomingURL = data.url + urlSeparator + params + '&controls=false' + hash;\n\n\t\t\t\t\tcurrentSlide = document.createElement( 'iframe' );\n\t\t\t\t\tcurrentSlide.setAttribute( 'width', 1280 );\n\t\t\t\t\tcurrentSlide.setAttribute( 'height', 1024 );\n\t\t\t\t\tcurrentSlide.setAttribute( 'src', currentURL );\n\t\t\t\t\tdocument.querySelector( '#current-slide' ).appendChild( currentSlide );\n\n\t\t\t\t\tupcomingSlide = document.createElement( 'iframe' );\n\t\t\t\t\tupcomingSlide.setAttribute( 'width', 640 );\n\t\t\t\t\tupcomingSlide.setAttribute( 'height', 512 );\n\t\t\t\t\tupcomingSlide.setAttribute( 'src', upcomingURL );\n\t\t\t\t\tdocument.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Setup the notes UI.\n\t\t\t\t */\n\t\t\t\tfunction setupNotes() {\n\n\t\t\t\t\tnotes = document.querySelector( '.speaker-controls-notes' );\n\t\t\t\t\tnotesValue = document.querySelector( '.speaker-controls-notes .value' );\n\n\t\t\t\t}\n\n\t\t\t\tfunction getTimings( callback ) {\n\n\t\t\t\t\tcallRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {\n\t\t\t\t\t\tcallRevealApi( 'getConfig', [], function ( config ) {\n\t\t\t\t\t\t\tvar totalTime = config.totalTime;\n\t\t\t\t\t\t\tvar minTimePerSlide = config.minimumTimePerSlide || 0;\n\t\t\t\t\t\t\tvar defaultTiming = config.defaultTiming;\n\t\t\t\t\t\t\tif ((defaultTiming == null) && (totalTime == null)) {\n\t\t\t\t\t\t\t\tcallback(null);\n\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t// Setting totalTime overrides defaultTiming\n\t\t\t\t\t\t\tif (totalTime) {\n\t\t\t\t\t\t\t\tdefaultTiming = 0;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvar timings = [];\n\t\t\t\t\t\t\tfor ( var i in slideAttributes ) {\n\t\t\t\t\t\t\t\tvar slide = slideAttributes[ i ];\n\t\t\t\t\t\t\t\tvar timing = defaultTiming;\n\t\t\t\t\t\t\t\tif( slide.hasOwnProperty( 'data-timing' )) {\n\t\t\t\t\t\t\t\t\tvar t = slide[ 'data-timing' ];\n\t\t\t\t\t\t\t\t\ttiming = parseInt(t);\n\t\t\t\t\t\t\t\t\tif( isNaN(timing) ) {\n\t\t\t\t\t\t\t\t\t\tconsole.warn(\"Could not parse timing '\" + t + \"' of slide \" + i + \"; using default of \" + defaultTiming);\n\t\t\t\t\t\t\t\t\t\ttiming = defaultTiming;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\ttimings.push(timing);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif ( totalTime ) {\n\t\t\t\t\t\t\t\t// After we've allocated time to individual slides, we summarize it and\n\t\t\t\t\t\t\t\t// subtract it from the total time\n\t\t\t\t\t\t\t\tvar remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );\n\t\t\t\t\t\t\t\t// The remaining time is divided by the number of slides that have 0 seconds\n\t\t\t\t\t\t\t\t// allocated at the moment, giving the average time-per-slide on the remaining slides\n\t\t\t\t\t\t\t\tvar remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length\n\t\t\t\t\t\t\t\tvar timePerSlide = Math.round( remainingTime / remainingSlides, 0 )\n\t\t\t\t\t\t\t\t// And now we replace every zero-value timing with that average\n\t\t\t\t\t\t\t\ttimings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvar slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length\n\t\t\t\t\t\t\tif ( slidesUnderMinimum ) {\n\t\t\t\t\t\t\t\tmessage = \"The pacing time for \" + slidesUnderMinimum + \" slide(s) is under the configured minimum of \" + minTimePerSlide + \" seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).\";\n\t\t\t\t\t\t\t\talert(message);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tcallback( timings );\n\t\t\t\t\t\t} );\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Return the number of seconds allocated for presenting\n\t\t\t\t * all slides up to and including this one.\n\t\t\t\t */\n\t\t\t\tfunction getTimeAllocated( timings, callback ) {\n\n\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n\t\t\t\t\t\tvar allocated = 0;\n\t\t\t\t\t\tfor (var i in timings.slice(0, currentSlide + 1)) {\n\t\t\t\t\t\t\tallocated += timings[i];\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcallback( allocated );\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Create the timer and clock and start updating them\n\t\t\t\t * at an interval.\n\t\t\t\t */\n\t\t\t\tfunction setupTimer() {\n\n\t\t\t\t\tvar start = new Date(),\n\t\t\t\t\ttimeEl = document.querySelector( '.speaker-controls-time' ),\n\t\t\t\t\tclockEl = timeEl.querySelector( '.clock-value' ),\n\t\t\t\t\thoursEl = timeEl.querySelector( '.hours-value' ),\n\t\t\t\t\tminutesEl = timeEl.querySelector( '.minutes-value' ),\n\t\t\t\t\tsecondsEl = timeEl.querySelector( '.seconds-value' ),\n\t\t\t\t\tpacingTitleEl = timeEl.querySelector( '.pacing-title' ),\n\t\t\t\t\tpacingEl = timeEl.querySelector( '.pacing' ),\n\t\t\t\t\tpacingHoursEl = pacingEl.querySelector( '.hours-value' ),\n\t\t\t\t\tpacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),\n\t\t\t\t\tpacingSecondsEl = pacingEl.querySelector( '.seconds-value' );\n\n\t\t\t\t\tvar timings = null;\n\t\t\t\t\tgetTimings( function ( _timings ) {\n\n\t\t\t\t\t\ttimings = _timings;\n\t\t\t\t\t\tif (_timings !== null) {\n\t\t\t\t\t\t\tpacingTitleEl.style.removeProperty('display');\n\t\t\t\t\t\t\tpacingEl.style.removeProperty('display');\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Update once directly\n\t\t\t\t\t\t_updateTimer();\n\n\t\t\t\t\t\t// Then update every second\n\t\t\t\t\t\tsetInterval( _updateTimer, 1000 );\n\n\t\t\t\t\t} );\n\n\n\t\t\t\t\tfunction _resetTimer() {\n\n\t\t\t\t\t\tif (timings == null) {\n\t\t\t\t\t\t\tstart = new Date();\n\t\t\t\t\t\t\t_updateTimer();\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\t// Reset timer to beginning of current slide\n\t\t\t\t\t\t\tgetTimeAllocated( timings, function ( slideEndTimingSeconds ) {\n\t\t\t\t\t\t\t\tvar slideEndTiming = slideEndTimingSeconds * 1000;\n\t\t\t\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n\t\t\t\t\t\t\t\t\tvar currentSlideTiming = timings[currentSlide] * 1000;\n\t\t\t\t\t\t\t\t\tvar previousSlidesTiming = slideEndTiming - currentSlideTiming;\n\t\t\t\t\t\t\t\t\tvar now = new Date();\n\t\t\t\t\t\t\t\t\tstart = new Date(now.getTime() - previousSlidesTiming);\n\t\t\t\t\t\t\t\t\t_updateTimer();\n\t\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t\ttimeEl.addEventListener( 'click', function() {\n\t\t\t\t\t\t_resetTimer();\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t} );\n\n\t\t\t\t\tfunction _displayTime( hrEl, minEl, secEl, time) {\n\n\t\t\t\t\t\tvar sign = Math.sign(time) == -1 ? \"-\" : \"\";\n\t\t\t\t\t\ttime = Math.abs(Math.round(time / 1000));\n\t\t\t\t\t\tvar seconds = time % 60;\n\t\t\t\t\t\tvar minutes = Math.floor( time / 60 ) % 60 ;\n\t\t\t\t\t\tvar hours = Math.floor( time / ( 60 * 60 )) ;\n\t\t\t\t\t\thrEl.innerHTML = sign + zeroPadInteger( hours );\n\t\t\t\t\t\tif (hours == 0) {\n\t\t\t\t\t\t\thrEl.classList.add( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\thrEl.classList.remove( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\tminEl.innerHTML = ':' + zeroPadInteger( minutes );\n\t\t\t\t\t\tif (hours == 0 && minutes == 0) {\n\t\t\t\t\t\t\tminEl.classList.add( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tminEl.classList.remove( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\tsecEl.innerHTML = ':' + zeroPadInteger( seconds );\n\t\t\t\t\t}\n\n\t\t\t\t\tfunction _updateTimer() {\n\n\t\t\t\t\t\tvar diff, hours, minutes, seconds,\n\t\t\t\t\t\tnow = new Date();\n\n\t\t\t\t\t\tdiff = now.getTime() - start.getTime();\n\n\t\t\t\t\t\tclockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );\n\t\t\t\t\t\t_displayTime( hoursEl, minutesEl, secondsEl, diff );\n\t\t\t\t\t\tif (timings !== null) {\n\t\t\t\t\t\t\t_updatePacing(diff);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfunction _updatePacing(diff) {\n\n\t\t\t\t\t\tgetTimeAllocated( timings, function ( slideEndTimingSeconds ) {\n\t\t\t\t\t\t\tvar slideEndTiming = slideEndTimingSeconds * 1000;\n\n\t\t\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n\t\t\t\t\t\t\t\tvar currentSlideTiming = timings[currentSlide] * 1000;\n\t\t\t\t\t\t\t\tvar timeLeftCurrentSlide = slideEndTiming - diff;\n\t\t\t\t\t\t\t\tif (timeLeftCurrentSlide < 0) {\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing behind';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\telse if (timeLeftCurrentSlide < currentSlideTiming) {\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing on-track';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\telse {\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing ahead';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );\n\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t} );\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Sets up the speaker view layout and layout selector.\n\t\t\t\t */\n\t\t\t\tfunction setupLayout() {\n\n\t\t\t\t\tlayoutDropdown = document.querySelector( '.speaker-layout-dropdown' );\n\t\t\t\t\tlayoutLabel = document.querySelector( '.speaker-layout-label' );\n\n\t\t\t\t\t// Render the list of available layouts\n\t\t\t\t\tfor( var id in SPEAKER_LAYOUTS ) {\n\t\t\t\t\t\tvar option = document.createElement( 'option' );\n\t\t\t\t\t\toption.setAttribute( 'value', id );\n\t\t\t\t\t\toption.textContent = SPEAKER_LAYOUTS[ id ];\n\t\t\t\t\t\tlayoutDropdown.appendChild( option );\n\t\t\t\t\t}\n\n\t\t\t\t\t// Monitor the dropdown for changes\n\t\t\t\t\tlayoutDropdown.addEventListener( 'change', function( event ) {\n\n\t\t\t\t\t\tsetLayout( layoutDropdown.value );\n\n\t\t\t\t\t}, false );\n\n\t\t\t\t\t// Restore any currently persisted layout\n\t\t\t\t\tsetLayout( getLayout() );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Sets a new speaker view layout. The layout is persisted\n\t\t\t\t * in local storage.\n\t\t\t\t */\n\t\t\t\tfunction setLayout( value ) {\n\n\t\t\t\t\tvar title = SPEAKER_LAYOUTS[ value ];\n\n\t\t\t\t\tlayoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );\n\t\t\t\t\tlayoutDropdown.value = value;\n\n\t\t\t\t\tdocument.body.setAttribute( 'data-speaker-layout', value );\n\n\t\t\t\t\t// Persist locally\n\t\t\t\t\tif( supportsLocalStorage() ) {\n\t\t\t\t\t\twindow.localStorage.setItem( 'reveal-speaker-layout', value );\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Returns the ID of the most recently set speaker layout\n\t\t\t\t * or our default layout if none has been set.\n\t\t\t\t */\n\t\t\t\tfunction getLayout() {\n\n\t\t\t\t\tif( supportsLocalStorage() ) {\n\t\t\t\t\t\tvar layout = window.localStorage.getItem( 'reveal-speaker-layout' );\n\t\t\t\t\t\tif( layout ) {\n\t\t\t\t\t\t\treturn layout;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Default to the first record in the layouts hash\n\t\t\t\t\tfor( var id in SPEAKER_LAYOUTS ) {\n\t\t\t\t\t\treturn id;\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\tfunction supportsLocalStorage() {\n\n\t\t\t\t\ttry {\n\t\t\t\t\t\tlocalStorage.setItem('test', 'test');\n\t\t\t\t\t\tlocalStorage.removeItem('test');\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t\tcatch( e ) {\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\tfunction zeroPadInteger( num ) {\n\n\t\t\t\t\tvar str = '00' + parseInt( num );\n\t\t\t\t\treturn str.substring( str.length - 2 );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Limits the frequency at which a function can be called.\n\t\t\t\t */\n\t\t\t\tfunction debounce( fn, ms ) {\n\n\t\t\t\t\tvar lastTime = 0,\n\t\t\t\t\t\ttimeout;\n\n\t\t\t\t\treturn function() {\n\n\t\t\t\t\t\tvar args = arguments;\n\t\t\t\t\t\tvar context = this;\n\n\t\t\t\t\t\tclearTimeout( timeout );\n\n\t\t\t\t\t\tvar timeSinceLastCall = Date.now() - lastTime;\n\t\t\t\t\t\tif( timeSinceLastCall > ms ) {\n\t\t\t\t\t\t\tfn.apply( context, args );\n\t\t\t\t\t\t\tlastTime = Date.now();\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\ttimeout = setTimeout( function() {\n\t\t\t\t\t\t\t\tfn.apply( context, args );\n\t\t\t\t\t\t\t\tlastTime = Date.now();\n\t\t\t\t\t\t\t}, ms - timeSinceLastCall );\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t})();\n\n\t\t</script>\n\t</body>\n</html>",
        ),
        e
          ? ((n = setInterval(function () {
              e.postMessage(
                JSON.stringify({
                  namespace: "reveal-notes",
                  type: "connect",
                  url:
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    window.location.pathname +
                    window.location.search,
                  state: t.getState(),
                }),
                "*",
              );
            }, 500)),
            window.addEventListener("message", function (u) {
              var i,
                a,
                o,
                l,
                s = JSON.parse(u.data);
              s &&
                "reveal-notes" === s.namespace &&
                "connected" === s.type &&
                (clearInterval(n),
                t.on("slidechanged", r),
                t.on("fragmentshown", r),
                t.on("fragmenthidden", r),
                t.on("overviewhidden", r),
                t.on("overviewshown", r),
                t.on("paused", r),
                t.on("resumed", r),
                r()),
                s &&
                  "reveal-notes" === s.namespace &&
                  "call" === s.type &&
                  ((i = s.methodName),
                  (a = s.arguments),
                  (o = s.callId),
                  (l = t[i].apply(t, a)),
                  e.postMessage(
                    JSON.stringify({
                      namespace: "reveal-notes",
                      type: "return",
                      result: l,
                      callId: o,
                    }),
                    "*",
                  ));
            }))
          : alert(
              "Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.",
            ))
      : e.focus();
    function r(n) {
      var r = t.getCurrentSlide(),
        u = r.querySelector("aside.notes"),
        i = r.querySelector(".current-fragment"),
        a = {
          namespace: "reveal-notes",
          type: "state",
          notes: "",
          markdown: !1,
          whitespace: "normal",
          state: t.getState(),
        };
      if (
        (r.hasAttribute("data-notes") &&
          ((a.notes = r.getAttribute("data-notes")),
          (a.whitespace = "pre-wrap")),
        i)
      ) {
        var o = i.querySelector("aside.notes");
        o
          ? (u = o)
          : i.hasAttribute("data-notes") &&
            ((a.notes = i.getAttribute("data-notes")),
            (a.whitespace = "pre-wrap"),
            (u = null));
      }
      u &&
        ((a.notes = u.innerHTML),
        (a.markdown = "string" == typeof u.getAttribute("data-markdown"))),
        e.postMessage(JSON.stringify(a), "*");
    }
  }
  return {
    id: "notes",
    init: function (e) {
      (t = e),
        /receiver/i.test(window.location.search) ||
          (null !== window.location.search.match(/(\?|\&)notes/gi) && n(),
          t.addKeyBinding(
            { keyCode: 83, key: "S", description: "Speaker notes view" },
            function () {
              n();
            },
          ));
    },
    open: n,
  };
}
