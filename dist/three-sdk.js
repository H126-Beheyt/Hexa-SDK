import * as V from "react";
import Be, { forwardRef as ns, useContext as os, isValidElement as ir, cloneElement as ar, Children as xi, useState as hr, useCallback as ss, useEffect as tt, useRef as dt, useMemo as Ei, useImperativeHandle as Si } from "react";
import { observer as Ve } from "mobx-react-lite";
import { makeAutoObservable as ot } from "mobx";
import * as ue from "three";
import { TrianglesDrawMode as _i, TriangleFanDrawMode as on, TriangleStripDrawMode as is, Loader as as, LoaderUtils as Ft, FileLoader as Sn, MeshPhysicalMaterial as Ue, Vector2 as cs, Color as gt, LinearSRGBColorSpace as je, SRGBColorSpace as Ut, SpotLight as wi, PointLight as Ri, DirectionalLight as Ci, Matrix4 as mr, Vector3 as Qe, Quaternion as ls, InstancedMesh as Ai, InstancedBufferAttribute as Mi, Object3D as us, TextureLoader as Oi, ImageBitmapLoader as Pi, BufferAttribute as jr, InterleavedBuffer as Ii, InterleavedBufferAttribute as ki, LinearMipmapLinearFilter as fs, NearestMipmapLinearFilter as Ni, LinearMipmapNearestFilter as $i, NearestMipmapNearestFilter as Li, LinearFilter as Ye, NearestFilter as ds, RepeatWrapping as sn, MirroredRepeatWrapping as Di, ClampToEdgeWrapping as cr, PointsMaterial as Bi, Material as Vr, LineBasicMaterial as Fi, MeshStandardMaterial as ps, DoubleSide as ji, MeshBasicMaterial as Lt, PropertyBinding as Vi, BufferGeometry as Ui, SkinnedMesh as Gi, Mesh as Hi, LineSegments as zi, Line as Wi, LineLoop as Yi, Points as Ki, Group as Ur, PerspectiveCamera as qi, MathUtils as Xi, OrthographicCamera as Ji, Skeleton as Qi, AnimationClip as Zi, Bone as ea, InterpolateDiscrete as ta, InterpolateLinear as hs, Texture as zn, VectorKeyframeTrack as Wn, NumberKeyframeTrack as Yn, QuaternionKeyframeTrack as Kn, ColorManagement as qn, FrontSide as ra, Interpolant as na, Box3 as oa, Sphere as sa, UnsignedByteType as Gr, Data3DTexture as ia, DataTextureLoader as ms, HalfFloatType as Ze, FloatType as _t, DataUtils as et } from "three";
import { CameraControls as aa, Environment as ca } from "@react-three/drei";
import { Canvas as la, useLoader as ua } from "@react-three/fiber";
function fa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zt = { exports: {} }, Pt = {};
var Xn;
function da() {
  if (Xn) return Pt;
  Xn = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(n, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var a in o)
        a !== "key" && (s[a] = o[a]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return Pt.Fragment = t, Pt.jsx = r, Pt.jsxs = r, Pt;
}
var It = {};
var Jn;
function pa() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === B ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case g:
          return "Fragment";
        case M:
          return "Profiler";
        case S:
          return "StrictMode";
        case A:
          return "Suspense";
        case $:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case p:
            return "Portal";
          case E:
            return T.displayName || "Context";
          case P:
            return (T._context.displayName || "Context") + ".Consumer";
          case v:
            var N = T.render;
            return T = T.displayName, T || (T = N.displayName || N.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case _:
            return N = T.displayName || null, N !== null ? N : e(T.type) || "Memo";
          case I:
            N = T._payload, T = T._init;
            try {
              return e(T(N));
            } catch {
            }
        }
      return null;
    }
    function t(T) {
      return "" + T;
    }
    function r(T) {
      try {
        t(T);
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var F = N.error, j = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return F.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), t(T);
      }
    }
    function n(T) {
      if (T === g) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === I)
        return "<...>";
      try {
        var N = e(T);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var T = d.A;
      return T === null ? null : T.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(T) {
      if (R.call(T, "key")) {
        var N = Object.getOwnPropertyDescriptor(T, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function a(T, N) {
      function F() {
        k || (k = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: F,
        configurable: !0
      });
    }
    function c() {
      var T = e(this.type);
      return H[T] || (H[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function l(T, N, F, j, Y, z) {
      var G = F.ref;
      return T = {
        $$typeof: y,
        type: T,
        key: N,
        props: F,
        _owner: j
      }, (G !== void 0 ? G : null) !== null ? Object.defineProperty(T, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(T, "ref", { enumerable: !1, value: null }), T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(T, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(T, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function u(T, N, F, j, Y, z) {
      var G = N.children;
      if (G !== void 0)
        if (j)
          if (x(G)) {
            for (j = 0; j < G.length; j++)
              f(G[j]);
            Object.freeze && Object.freeze(G);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(G);
      if (R.call(N, "key")) {
        G = e(T);
        var W = Object.keys(N).filter(function(X) {
          return X !== "key";
        });
        j = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", O[G + j] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          G,
          W,
          G
        ), O[G + j] = !0);
      }
      if (G = null, F !== void 0 && (r(F), G = "" + F), i(N) && (r(N.key), G = "" + N.key), "key" in N) {
        F = {};
        for (var J in N)
          J !== "key" && (F[J] = N[J]);
      } else F = N;
      return G && a(
        F,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), l(
        T,
        G,
        F,
        o(),
        Y,
        z
      );
    }
    function f(T) {
      h(T) ? T._store && (T._store.validated = 1) : typeof T == "object" && T !== null && T.$$typeof === I && (T._payload.status === "fulfilled" ? h(T._payload.value) && T._payload.value._store && (T._payload.value._store.validated = 1) : T._store && (T._store.validated = 1));
    }
    function h(T) {
      return typeof T == "object" && T !== null && T.$$typeof === y;
    }
    var b = Be, y = /* @__PURE__ */ Symbol.for("react.transitional.element"), p = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), S = /* @__PURE__ */ Symbol.for("react.strict_mode"), M = /* @__PURE__ */ Symbol.for("react.profiler"), P = /* @__PURE__ */ Symbol.for("react.consumer"), E = /* @__PURE__ */ Symbol.for("react.context"), v = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), $ = /* @__PURE__ */ Symbol.for("react.suspense_list"), _ = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), L = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.client.reference"), d = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = Object.prototype.hasOwnProperty, x = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(T) {
        return T();
      }
    };
    var k, H = {}, se = b.react_stack_bottom_frame.bind(
      b,
      s
    )(), q = D(n(s)), O = {};
    It.Fragment = g, It.jsx = function(T, N, F) {
      var j = 1e4 > d.recentlyCreatedOwnerStacks++;
      return u(
        T,
        N,
        F,
        !1,
        j ? Error("react-stack-top-frame") : se,
        j ? D(n(T)) : q
      );
    }, It.jsxs = function(T, N, F) {
      var j = 1e4 > d.recentlyCreatedOwnerStacks++;
      return u(
        T,
        N,
        F,
        !0,
        j ? Error("react-stack-top-frame") : se,
        j ? D(n(T)) : q
      );
    };
  })()), It;
}
var Qn;
function ha() {
  return Qn || (Qn = 1, process.env.NODE_ENV === "production" ? Zt.exports = da() : Zt.exports = pa()), Zt.exports;
}
var U = ha();
const Gt = {
  black: "#000",
  white: "#fff"
}, vt = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Tt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, xt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Et = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, St = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, kt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, ma = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function rt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const _n = "$$material";
function gr() {
  return gr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gr.apply(null, arguments);
}
function ga(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ya(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var ba = /* @__PURE__ */ (function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, s), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ya(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = ga(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
})(), xe = "-ms-", yr = "-moz-", Z = "-webkit-", gs = "comm", wn = "rule", Rn = "decl", va = "@import", ys = "@keyframes", Ta = "@layer", xa = Math.abs, Sr = String.fromCharCode, Ea = Object.assign;
function Sa(e, t) {
  return ve(e, 0) ^ 45 ? (((t << 2 ^ ve(e, 0)) << 2 ^ ve(e, 1)) << 2 ^ ve(e, 2)) << 2 ^ ve(e, 3) : 0;
}
function bs(e) {
  return e.trim();
}
function _a(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function an(e, t) {
  return e.indexOf(t);
}
function ve(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ht(e, t, r) {
  return e.slice(t, r);
}
function $e(e) {
  return e.length;
}
function Cn(e) {
  return e.length;
}
function er(e, t) {
  return t.push(e), e;
}
function wa(e, t) {
  return e.map(t).join("");
}
var _r = 1, At = 1, vs = 0, Se = 0, ge = 0, Mt = "";
function wr(e, t, r, n, o, s, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: s, line: _r, column: At, length: i, return: "" };
}
function Nt(e, t) {
  return Ea(wr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ra() {
  return ge;
}
function Ca() {
  return ge = Se > 0 ? ve(Mt, --Se) : 0, At--, ge === 10 && (At = 1, _r--), ge;
}
function Re() {
  return ge = Se < vs ? ve(Mt, Se++) : 0, At++, ge === 10 && (At = 1, _r++), ge;
}
function Fe() {
  return ve(Mt, Se);
}
function lr() {
  return Se;
}
function Yt(e, t) {
  return Ht(Mt, e, t);
}
function zt(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ts(e) {
  return _r = At = 1, vs = $e(Mt = e), Se = 0, [];
}
function xs(e) {
  return Mt = "", e;
}
function ur(e) {
  return bs(Yt(Se - 1, cn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Aa(e) {
  for (; (ge = Fe()) && ge < 33; )
    Re();
  return zt(e) > 2 || zt(ge) > 3 ? "" : " ";
}
function Ma(e, t) {
  for (; --t && Re() && !(ge < 48 || ge > 102 || ge > 57 && ge < 65 || ge > 70 && ge < 97); )
    ;
  return Yt(e, lr() + (t < 6 && Fe() == 32 && Re() == 32));
}
function cn(e) {
  for (; Re(); )
    switch (ge) {
      // ] ) " '
      case e:
        return Se;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && cn(ge);
        break;
      // (
      case 40:
        e === 41 && cn(e);
        break;
      // \
      case 92:
        Re();
        break;
    }
  return Se;
}
function Oa(e, t) {
  for (; Re() && e + ge !== 57; )
    if (e + ge === 84 && Fe() === 47)
      break;
  return "/*" + Yt(t, Se - 1) + "*" + Sr(e === 47 ? e : Re());
}
function Pa(e) {
  for (; !zt(Fe()); )
    Re();
  return Yt(e, Se);
}
function Ia(e) {
  return xs(fr("", null, null, null, [""], e = Ts(e), 0, [0], e));
}
function fr(e, t, r, n, o, s, i, a, c) {
  for (var l = 0, u = 0, f = i, h = 0, b = 0, y = 0, p = 1, g = 1, S = 1, M = 0, P = "", E = o, v = s, A = n, $ = P; g; )
    switch (y = M, M = Re()) {
      // (
      case 40:
        if (y != 108 && ve($, f - 1) == 58) {
          an($ += ee(ur(M), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        $ += ur(M);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        $ += Aa(y);
        break;
      // \
      case 92:
        $ += Ma(lr() - 1, 7);
        continue;
      // /
      case 47:
        switch (Fe()) {
          case 42:
          case 47:
            er(ka(Oa(Re(), lr()), t, r), c);
            break;
          default:
            $ += "/";
        }
        break;
      // {
      case 123 * p:
        a[l++] = $e($) * S;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (M) {
          // \0 }
          case 0:
          case 125:
            g = 0;
          // ;
          case 59 + u:
            S == -1 && ($ = ee($, /\f/g, "")), b > 0 && $e($) - f && er(b > 32 ? eo($ + ";", n, r, f - 1) : eo(ee($, " ", "") + ";", n, r, f - 2), c);
            break;
          // @ ;
          case 59:
            $ += ";";
          // { rule/at-rule
          default:
            if (er(A = Zn($, t, r, l, u, o, a, P, E = [], v = [], f), s), M === 123)
              if (u === 0)
                fr($, t, A, A, E, s, f, a, v);
              else
                switch (h === 99 && ve($, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    fr(e, A, A, n && er(Zn(e, A, A, 0, 0, o, a, P, o, E = [], f), v), o, v, f, a, n ? E : v);
                    break;
                  default:
                    fr($, A, A, A, [""], v, 0, a, v);
                }
        }
        l = u = b = 0, p = S = 1, P = $ = "", f = i;
        break;
      // :
      case 58:
        f = 1 + $e($), b = y;
      default:
        if (p < 1) {
          if (M == 123)
            --p;
          else if (M == 125 && p++ == 0 && Ca() == 125)
            continue;
        }
        switch ($ += Sr(M), M * p) {
          // &
          case 38:
            S = u > 0 ? 1 : ($ += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = ($e($) - 1) * S, S = 1;
            break;
          // @
          case 64:
            Fe() === 45 && ($ += ur(Re())), h = Fe(), u = f = $e(P = $ += Pa(lr())), M++;
            break;
          // -
          case 45:
            y === 45 && $e($) == 2 && (p = 0);
        }
    }
  return s;
}
function Zn(e, t, r, n, o, s, i, a, c, l, u) {
  for (var f = o - 1, h = o === 0 ? s : [""], b = Cn(h), y = 0, p = 0, g = 0; y < n; ++y)
    for (var S = 0, M = Ht(e, f + 1, f = xa(p = i[y])), P = e; S < b; ++S)
      (P = bs(p > 0 ? h[S] + " " + M : ee(M, /&\f/g, h[S]))) && (c[g++] = P);
  return wr(e, t, r, o === 0 ? wn : a, c, l, u);
}
function ka(e, t, r) {
  return wr(e, t, r, gs, Sr(Ra()), Ht(e, 2, -2), 0);
}
function eo(e, t, r, n) {
  return wr(e, t, r, Rn, Ht(e, 0, n), Ht(e, n + 1, -1), n);
}
function wt(e, t) {
  for (var r = "", n = Cn(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Na(e, t, r, n) {
  switch (e.type) {
    case Ta:
      if (e.children.length) break;
    case va:
    case Rn:
      return e.return = e.return || e.value;
    case gs:
      return "";
    case ys:
      return e.return = e.value + "{" + wt(e.children, n) + "}";
    case wn:
      e.value = e.props.join(",");
  }
  return $e(r = wt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function $a(e) {
  var t = Cn(e);
  return function(r, n, o, s) {
    for (var i = "", a = 0; a < t; a++)
      i += e[a](r, n, o, s) || "";
    return i;
  };
}
function La(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Es(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Da = function(t, r, n) {
  for (var o = 0, s = 0; o = s, s = Fe(), o === 38 && s === 12 && (r[n] = 1), !zt(s); )
    Re();
  return Yt(t, Se);
}, Ba = function(t, r) {
  var n = -1, o = 44;
  do
    switch (zt(o)) {
      case 0:
        o === 38 && Fe() === 12 && (r[n] = 1), t[n] += Da(Se - 1, r, n);
        break;
      case 2:
        t[n] += ur(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Fe() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += Sr(o);
    }
  while (o = Re());
  return t;
}, Fa = function(t, r) {
  return xs(Ba(Ts(t), r));
}, to = /* @__PURE__ */ new WeakMap(), ja = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !to.get(n)) && !o) {
      to.set(t, !0);
      for (var s = [], i = Fa(r, s), a = n.props, c = 0, l = 0; c < i.length; c++)
        for (var u = 0; u < a.length; u++, l++)
          t.props[l] = s[c] ? i[c].replace(/&\f/g, a[u]) : a[u] + " " + i[c];
    }
  }
}, Va = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ss(e, t) {
  switch (Sa(e, t)) {
    // color-adjust
    case 5103:
      return Z + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Z + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Z + e + yr + e + xe + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Z + e + xe + e + e;
    // order
    case 6165:
      return Z + e + xe + "flex-" + e + e;
    // align-items
    case 5187:
      return Z + e + ee(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + xe + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Z + e + xe + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return Z + e + xe + "flex-line-pack" + ee(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return Z + e + xe + ee(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Z + e + xe + ee(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Z + "box-" + ee(e, "-grow", "") + Z + e + xe + ee(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Z + ee(e, /([^-])(transform)/g, "$1" + Z + "$2") + e;
    // cursor
    case 6187:
      return ee(ee(ee(e, /(zoom-|grab)/, Z + "$1"), /(image-set)/, Z + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, Z + "$1$`$1");
    // justify-content
    case 4968:
      return ee(ee(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Z + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ee(e, /(.+)-inline(.+)/, Z + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if ($e(e) - 1 - t > 6) switch (ve(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ve(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return ee(e, /(.+:)(.+)-([^]+)/, "$1" + Z + "$2-$3$1" + yr + (ve(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~an(e, "stretch") ? Ss(ee(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (ve(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ve(e, $e(e) - 3 - (~an(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return ee(e, ":", ":" + Z) + e;
        // (inline-)?fl(e)x
        case 101:
          return ee(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Z + (ve(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Z + "$2$3$1" + xe + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (ve(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return Z + e + xe + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Z + e + xe + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Z + e + xe + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Z + e + xe + e + e;
  }
  return e;
}
var Ua = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Rn:
      t.return = Ss(t.value, t.length);
      break;
    case ys:
      return wt([Nt(t, {
        value: ee(t.value, "@", "@" + Z)
      })], o);
    case wn:
      if (t.length) return wa(t.props, function(s) {
        switch (_a(s, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return wt([Nt(t, {
              props: [ee(s, /:(read-\w+)/, ":" + yr + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return wt([Nt(t, {
              props: [ee(s, /:(plac\w+)/, ":" + Z + "input-$1")]
            }), Nt(t, {
              props: [ee(s, /:(plac\w+)/, ":" + yr + "$1")]
            }), Nt(t, {
              props: [ee(s, /:(plac\w+)/, xe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Ga = [Ua], Ha = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(p) {
      var g = p.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Ga, s = {}, i, a = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(p) {
      for (var g = p.getAttribute("data-emotion").split(" "), S = 1; S < g.length; S++)
        s[g[S]] = !0;
      a.push(p);
    }
  );
  var c, l = [ja, Va];
  {
    var u, f = [Na, La(function(p) {
      u.insert(p);
    })], h = $a(l.concat(o, f)), b = function(g) {
      return wt(Ia(g), h);
    };
    c = function(g, S, M, P) {
      u = M, b(g ? g + "{" + S.styles + "}" : S.styles), P && (y.inserted[S.name] = !0);
    };
  }
  var y = {
    key: r,
    sheet: new ba({
      key: r,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: c
  };
  return y.sheet.hydrate(a), y;
}, tr = { exports: {} }, te = {};
var ro;
function za() {
  if (ro) return te;
  ro = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, i = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, l = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, u = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, h = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, y = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, p = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, g = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, S = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, M = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function P(v) {
    if (typeof v == "object" && v !== null) {
      var A = v.$$typeof;
      switch (A) {
        case t:
          switch (v = v.type, v) {
            case c:
            case l:
            case n:
            case s:
            case o:
            case f:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case u:
                case y:
                case b:
                case i:
                  return v;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function E(v) {
    return P(v) === l;
  }
  return te.AsyncMode = c, te.ConcurrentMode = l, te.ContextConsumer = a, te.ContextProvider = i, te.Element = t, te.ForwardRef = u, te.Fragment = n, te.Lazy = y, te.Memo = b, te.Portal = r, te.Profiler = s, te.StrictMode = o, te.Suspense = f, te.isAsyncMode = function(v) {
    return E(v) || P(v) === c;
  }, te.isConcurrentMode = E, te.isContextConsumer = function(v) {
    return P(v) === a;
  }, te.isContextProvider = function(v) {
    return P(v) === i;
  }, te.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, te.isForwardRef = function(v) {
    return P(v) === u;
  }, te.isFragment = function(v) {
    return P(v) === n;
  }, te.isLazy = function(v) {
    return P(v) === y;
  }, te.isMemo = function(v) {
    return P(v) === b;
  }, te.isPortal = function(v) {
    return P(v) === r;
  }, te.isProfiler = function(v) {
    return P(v) === s;
  }, te.isStrictMode = function(v) {
    return P(v) === o;
  }, te.isSuspense = function(v) {
    return P(v) === f;
  }, te.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === l || v === s || v === o || v === f || v === h || typeof v == "object" && v !== null && (v.$$typeof === y || v.$$typeof === b || v.$$typeof === i || v.$$typeof === a || v.$$typeof === u || v.$$typeof === g || v.$$typeof === S || v.$$typeof === M || v.$$typeof === p);
  }, te.typeOf = P, te;
}
var re = {};
var no;
function Wa() {
  return no || (no = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, i = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, l = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, u = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, h = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, y = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, p = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, g = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, S = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, M = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function P(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === n || C === l || C === s || C === o || C === f || C === h || typeof C == "object" && C !== null && (C.$$typeof === y || C.$$typeof === b || C.$$typeof === i || C.$$typeof === a || C.$$typeof === u || C.$$typeof === g || C.$$typeof === S || C.$$typeof === M || C.$$typeof === p);
    }
    function E(C) {
      if (typeof C == "object" && C !== null) {
        var Te = C.$$typeof;
        switch (Te) {
          case t:
            var _e = C.type;
            switch (_e) {
              case c:
              case l:
              case n:
              case s:
              case o:
              case f:
                return _e;
              default:
                var ct = _e && _e.$$typeof;
                switch (ct) {
                  case a:
                  case u:
                  case y:
                  case b:
                  case i:
                    return ct;
                  default:
                    return Te;
                }
            }
          case r:
            return Te;
        }
      }
    }
    var v = c, A = l, $ = a, _ = i, I = t, L = u, B = n, d = y, R = b, x = r, D = s, k = o, H = f, se = !1;
    function q(C) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(C) || E(C) === c;
    }
    function O(C) {
      return E(C) === l;
    }
    function T(C) {
      return E(C) === a;
    }
    function N(C) {
      return E(C) === i;
    }
    function F(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function j(C) {
      return E(C) === u;
    }
    function Y(C) {
      return E(C) === n;
    }
    function z(C) {
      return E(C) === y;
    }
    function G(C) {
      return E(C) === b;
    }
    function W(C) {
      return E(C) === r;
    }
    function J(C) {
      return E(C) === s;
    }
    function X(C) {
      return E(C) === o;
    }
    function be(C) {
      return E(C) === f;
    }
    re.AsyncMode = v, re.ConcurrentMode = A, re.ContextConsumer = $, re.ContextProvider = _, re.Element = I, re.ForwardRef = L, re.Fragment = B, re.Lazy = d, re.Memo = R, re.Portal = x, re.Profiler = D, re.StrictMode = k, re.Suspense = H, re.isAsyncMode = q, re.isConcurrentMode = O, re.isContextConsumer = T, re.isContextProvider = N, re.isElement = F, re.isForwardRef = j, re.isFragment = Y, re.isLazy = z, re.isMemo = G, re.isPortal = W, re.isProfiler = J, re.isStrictMode = X, re.isSuspense = be, re.isValidElementType = P, re.typeOf = E;
  })()), re;
}
var oo;
function Ya() {
  return oo || (oo = 1, process.env.NODE_ENV === "production" ? tr.exports = za() : tr.exports = Wa()), tr.exports;
}
var Hr, so;
function Ka() {
  if (so) return Hr;
  so = 1;
  var e = Ya(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, o = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, s = {};
  s[e.ForwardRef] = n, s[e.Memo] = o;
  function i(y) {
    return e.isMemo(y) ? o : s[y.$$typeof] || t;
  }
  var a = Object.defineProperty, c = Object.getOwnPropertyNames, l = Object.getOwnPropertySymbols, u = Object.getOwnPropertyDescriptor, f = Object.getPrototypeOf, h = Object.prototype;
  function b(y, p, g) {
    if (typeof p != "string") {
      if (h) {
        var S = f(p);
        S && S !== h && b(y, S, g);
      }
      var M = c(p);
      l && (M = M.concat(l(p)));
      for (var P = i(y), E = i(p), v = 0; v < M.length; ++v) {
        var A = M[v];
        if (!r[A] && !(g && g[A]) && !(E && E[A]) && !(P && P[A])) {
          var $ = u(p, A);
          try {
            a(y, A, $);
          } catch {
          }
        }
      }
    }
    return y;
  }
  return Hr = b, Hr;
}
Ka();
var qa = !0;
function _s(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var An = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  qa === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, ws = function(t, r, n) {
  An(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var s = r;
    do
      t.insert(r === s ? "." + o : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function Xa(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Ja = {
  animationIterationCount: 1,
  aspectRatio: 1,
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
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Qa = /[A-Z]|^ms/g, Za = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Rs = function(t) {
  return t.charCodeAt(1) === 45;
}, io = function(t) {
  return t != null && typeof t != "boolean";
}, zr = /* @__PURE__ */ Es(function(e) {
  return Rs(e) ? e : e.replace(Qa, "-$&").toLowerCase();
}), ao = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Za, function(n, o, s) {
          return Le = {
            name: o,
            styles: s,
            next: Le
          }, o;
        });
  }
  return Ja[t] !== 1 && !Rs(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Wt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Le = {
          name: o.name,
          styles: o.styles,
          next: Le
        }, o.name;
      var s = r;
      if (s.styles !== void 0) {
        var i = s.next;
        if (i !== void 0)
          for (; i !== void 0; )
            Le = {
              name: i.name,
              styles: i.styles,
              next: Le
            }, i = i.next;
        var a = s.styles + ";";
        return a;
      }
      return ec(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = Le, l = r(e);
        return Le = c, Wt(e, t, l);
      }
      break;
    }
  }
  var u = r;
  if (t == null)
    return u;
  var f = t[u];
  return f !== void 0 ? f : u;
}
function ec(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Wt(e, t, r[o]) + ";";
  else
    for (var s in r) {
      var i = r[s];
      if (typeof i != "object") {
        var a = i;
        t != null && t[a] !== void 0 ? n += s + "{" + t[a] + "}" : io(a) && (n += zr(s) + ":" + ao(s, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var c = 0; c < i.length; c++)
          io(i[c]) && (n += zr(s) + ":" + ao(s, i[c]) + ";");
      else {
        var l = Wt(e, t, i);
        switch (s) {
          case "animation":
          case "animationName": {
            n += zr(s) + ":" + l + ";";
            break;
          }
          default:
            n += s + "{" + l + "}";
        }
      }
    }
  return n;
}
var co = /label:\s*([^\s;{]+)\s*(;|$)/g, Le;
function Rr(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Le = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    n = !1, o += Wt(r, t, s);
  else {
    var i = s;
    o += i[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += Wt(r, t, e[a]), n) {
      var c = s;
      o += c[a];
    }
  co.lastIndex = 0;
  for (var l = "", u; (u = co.exec(o)) !== null; )
    l += "-" + u[1];
  var f = Xa(o) + l;
  return {
    name: f,
    styles: o,
    next: Le
  };
}
var tc = function(t) {
  return t();
}, rc = V.useInsertionEffect ? V.useInsertionEffect : !1, Cs = rc || tc, As = /* @__PURE__ */ V.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ha({
    key: "css"
  }) : null
);
As.Provider;
var Ms = function(t) {
  return /* @__PURE__ */ ns(function(r, n) {
    var o = os(As);
    return t(r, o, n);
  });
}, Mn = /* @__PURE__ */ V.createContext({}), On = {}.hasOwnProperty, ln = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", nc = function(t, r) {
  var n = {};
  for (var o in r)
    On.call(r, o) && (n[o] = r[o]);
  return n[ln] = t, n;
}, oc = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return An(r, n, o), Cs(function() {
    return ws(r, n, o);
  }), null;
}, sc = /* @__PURE__ */ Ms(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[ln], s = [n], i = "";
  typeof e.className == "string" ? i = _s(t.registered, s, e.className) : e.className != null && (i = e.className + " ");
  var a = Rr(s, void 0, V.useContext(Mn));
  i += t.key + "-" + a.name;
  var c = {};
  for (var l in e)
    On.call(e, l) && l !== "css" && l !== ln && (c[l] = e[l]);
  return c.className = i, r && (c.ref = r), /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement(oc, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ V.createElement(o, c));
}), ic = sc, lo = function(t, r) {
  var n = arguments;
  if (r == null || !On.call(r, "css"))
    return V.createElement.apply(void 0, n);
  var o = n.length, s = new Array(o);
  s[0] = ic, s[1] = nc(t, r);
  for (var i = 2; i < o; i++)
    s[i] = n[i];
  return V.createElement.apply(null, s);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(lo || (lo = {}));
function Pn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Rr(t);
}
function Kt() {
  var e = Pn.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var ac = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, cc = /* @__PURE__ */ Es(
  function(e) {
    return ac.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), lc = cc, uc = function(t) {
  return t !== "theme";
}, uo = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? lc : uc;
}, fo = function(t, r, n) {
  var o;
  if (r) {
    var s = r.shouldForwardProp;
    o = t.__emotion_forwardProp && s ? function(i) {
      return t.__emotion_forwardProp(i) && s(i);
    } : s;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, fc = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return An(r, n, o), Cs(function() {
    return ws(r, n, o);
  }), null;
}, dc = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, s, i;
  r !== void 0 && (s = r.label, i = r.target);
  var a = fo(t, r, n), c = a || uo(o), l = !c("as");
  return function() {
    var u = arguments, f = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && f.push("label:" + s + ";"), u[0] == null || u[0].raw === void 0)
      f.push.apply(f, u);
    else {
      var h = u[0];
      f.push(h[0]);
      for (var b = u.length, y = 1; y < b; y++)
        f.push(u[y], h[y]);
    }
    var p = Ms(function(g, S, M) {
      var P = l && g.as || o, E = "", v = [], A = g;
      if (g.theme == null) {
        A = {};
        for (var $ in g)
          A[$] = g[$];
        A.theme = V.useContext(Mn);
      }
      typeof g.className == "string" ? E = _s(S.registered, v, g.className) : g.className != null && (E = g.className + " ");
      var _ = Rr(f.concat(v), S.registered, A);
      E += S.key + "-" + _.name, i !== void 0 && (E += " " + i);
      var I = l && a === void 0 ? uo(P) : c, L = {};
      for (var B in g)
        l && B === "as" || I(B) && (L[B] = g[B]);
      return L.className = E, M && (L.ref = M), /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement(fc, {
        cache: S,
        serialized: _,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ V.createElement(P, L));
    });
    return p.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", p.defaultProps = t.defaultProps, p.__emotion_real = p, p.__emotion_base = o, p.__emotion_styles = f, p.__emotion_forwardProp = a, Object.defineProperty(p, "toString", {
      value: function() {
        return "." + i;
      }
    }), p.withComponent = function(g, S) {
      var M = e(g, gr({}, r, S, {
        shouldForwardProp: fo(p, S, !0)
      }));
      return M.apply(void 0, f);
    }, p;
  };
}, pc = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], un = dc.bind(null);
pc.forEach(function(e) {
  un[e] = un(e);
});
var rr = { exports: {} }, nr = { exports: {} }, ne = {};
var po;
function hc() {
  if (po) return ne;
  po = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, i = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, l = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, u = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, h = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, y = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, p = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, g = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, S = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, M = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function P(v) {
    if (typeof v == "object" && v !== null) {
      var A = v.$$typeof;
      switch (A) {
        case t:
          switch (v = v.type, v) {
            case c:
            case l:
            case n:
            case s:
            case o:
            case f:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case u:
                case y:
                case b:
                case i:
                  return v;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function E(v) {
    return P(v) === l;
  }
  return ne.AsyncMode = c, ne.ConcurrentMode = l, ne.ContextConsumer = a, ne.ContextProvider = i, ne.Element = t, ne.ForwardRef = u, ne.Fragment = n, ne.Lazy = y, ne.Memo = b, ne.Portal = r, ne.Profiler = s, ne.StrictMode = o, ne.Suspense = f, ne.isAsyncMode = function(v) {
    return E(v) || P(v) === c;
  }, ne.isConcurrentMode = E, ne.isContextConsumer = function(v) {
    return P(v) === a;
  }, ne.isContextProvider = function(v) {
    return P(v) === i;
  }, ne.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, ne.isForwardRef = function(v) {
    return P(v) === u;
  }, ne.isFragment = function(v) {
    return P(v) === n;
  }, ne.isLazy = function(v) {
    return P(v) === y;
  }, ne.isMemo = function(v) {
    return P(v) === b;
  }, ne.isPortal = function(v) {
    return P(v) === r;
  }, ne.isProfiler = function(v) {
    return P(v) === s;
  }, ne.isStrictMode = function(v) {
    return P(v) === o;
  }, ne.isSuspense = function(v) {
    return P(v) === f;
  }, ne.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === l || v === s || v === o || v === f || v === h || typeof v == "object" && v !== null && (v.$$typeof === y || v.$$typeof === b || v.$$typeof === i || v.$$typeof === a || v.$$typeof === u || v.$$typeof === g || v.$$typeof === S || v.$$typeof === M || v.$$typeof === p);
  }, ne.typeOf = P, ne;
}
var oe = {};
var ho;
function mc() {
  return ho || (ho = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, i = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, l = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, u = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, h = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, y = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, p = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, g = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, S = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, M = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function P(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === n || C === l || C === s || C === o || C === f || C === h || typeof C == "object" && C !== null && (C.$$typeof === y || C.$$typeof === b || C.$$typeof === i || C.$$typeof === a || C.$$typeof === u || C.$$typeof === g || C.$$typeof === S || C.$$typeof === M || C.$$typeof === p);
    }
    function E(C) {
      if (typeof C == "object" && C !== null) {
        var Te = C.$$typeof;
        switch (Te) {
          case t:
            var _e = C.type;
            switch (_e) {
              case c:
              case l:
              case n:
              case s:
              case o:
              case f:
                return _e;
              default:
                var ct = _e && _e.$$typeof;
                switch (ct) {
                  case a:
                  case u:
                  case y:
                  case b:
                  case i:
                    return ct;
                  default:
                    return Te;
                }
            }
          case r:
            return Te;
        }
      }
    }
    var v = c, A = l, $ = a, _ = i, I = t, L = u, B = n, d = y, R = b, x = r, D = s, k = o, H = f, se = !1;
    function q(C) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(C) || E(C) === c;
    }
    function O(C) {
      return E(C) === l;
    }
    function T(C) {
      return E(C) === a;
    }
    function N(C) {
      return E(C) === i;
    }
    function F(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function j(C) {
      return E(C) === u;
    }
    function Y(C) {
      return E(C) === n;
    }
    function z(C) {
      return E(C) === y;
    }
    function G(C) {
      return E(C) === b;
    }
    function W(C) {
      return E(C) === r;
    }
    function J(C) {
      return E(C) === s;
    }
    function X(C) {
      return E(C) === o;
    }
    function be(C) {
      return E(C) === f;
    }
    oe.AsyncMode = v, oe.ConcurrentMode = A, oe.ContextConsumer = $, oe.ContextProvider = _, oe.Element = I, oe.ForwardRef = L, oe.Fragment = B, oe.Lazy = d, oe.Memo = R, oe.Portal = x, oe.Profiler = D, oe.StrictMode = k, oe.Suspense = H, oe.isAsyncMode = q, oe.isConcurrentMode = O, oe.isContextConsumer = T, oe.isContextProvider = N, oe.isElement = F, oe.isForwardRef = j, oe.isFragment = Y, oe.isLazy = z, oe.isMemo = G, oe.isPortal = W, oe.isProfiler = J, oe.isStrictMode = X, oe.isSuspense = be, oe.isValidElementType = P, oe.typeOf = E;
  })()), oe;
}
var mo;
function Os() {
  return mo || (mo = 1, process.env.NODE_ENV === "production" ? nr.exports = hc() : nr.exports = mc()), nr.exports;
}
var Wr, go;
function gc() {
  if (go) return Wr;
  go = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var i = {}, a = 0; a < 10; a++)
        i["_" + String.fromCharCode(a)] = a;
      var c = Object.getOwnPropertyNames(i).map(function(u) {
        return i[u];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        l[u] = u;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Wr = o() ? Object.assign : function(s, i) {
    for (var a, c = n(s), l, u = 1; u < arguments.length; u++) {
      a = Object(arguments[u]);
      for (var f in a)
        t.call(a, f) && (c[f] = a[f]);
      if (e) {
        l = e(a);
        for (var h = 0; h < l.length; h++)
          r.call(a, l[h]) && (c[l[h]] = a[l[h]]);
      }
    }
    return c;
  }, Wr;
}
var Yr, yo;
function In() {
  if (yo) return Yr;
  yo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Yr = e, Yr;
}
var Kr, bo;
function Ps() {
  return bo || (bo = 1, Kr = Function.call.bind(Object.prototype.hasOwnProperty)), Kr;
}
var qr, vo;
function yc() {
  if (vo) return qr;
  vo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ In(), r = {}, n = /* @__PURE__ */ Ps();
    e = function(s) {
      var i = "Warning: " + s;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(s, i, a, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in s)
        if (n(s, u)) {
          var f;
          try {
            if (typeof s[u] != "function") {
              var h = Error(
                (c || "React class") + ": " + a + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            f = s[u](i, u, c, a, null, t);
          } catch (y) {
            f = y;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + a + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var b = l ? l() : "";
            e(
              "Failed " + a + " type: " + f.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, qr = o, qr;
}
var Xr, To;
function bc() {
  if (To) return Xr;
  To = 1;
  var e = Os(), t = gc(), r = /* @__PURE__ */ In(), n = /* @__PURE__ */ Ps(), o = /* @__PURE__ */ yc(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(a) {
    var c = "Warning: " + a;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Xr = function(a, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function f(O) {
      var T = O && (l && O[l] || O[u]);
      if (typeof T == "function")
        return T;
    }
    var h = "<<anonymous>>", b = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: M(),
      arrayOf: P,
      element: E(),
      elementType: v(),
      instanceOf: A,
      node: L(),
      objectOf: _,
      oneOf: $,
      oneOfType: I,
      shape: d,
      exact: R
    };
    function y(O, T) {
      return O === T ? O !== 0 || 1 / O === 1 / T : O !== O && T !== T;
    }
    function p(O, T) {
      this.message = O, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function g(O) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, N = 0;
      function F(Y, z, G, W, J, X, be) {
        if (W = W || h, X = X || G, be !== r) {
          if (c) {
            var C = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw C.name = "Invariant Violation", C;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Te = W + ":" + G;
            !T[Te] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + X + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[Te] = !0, N++);
          }
        }
        return z[G] == null ? Y ? z[G] === null ? new p("The " + J + " `" + X + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new p("The " + J + " `" + X + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : O(z, G, W, J, X);
      }
      var j = F.bind(null, !1);
      return j.isRequired = F.bind(null, !0), j;
    }
    function S(O) {
      function T(N, F, j, Y, z, G) {
        var W = N[F], J = k(W);
        if (J !== O) {
          var X = H(W);
          return new p(
            "Invalid " + Y + " `" + z + "` of type " + ("`" + X + "` supplied to `" + j + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return g(T);
    }
    function M() {
      return g(i);
    }
    function P(O) {
      function T(N, F, j, Y, z) {
        if (typeof O != "function")
          return new p("Property `" + z + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var G = N[F];
        if (!Array.isArray(G)) {
          var W = k(G);
          return new p("Invalid " + Y + " `" + z + "` of type " + ("`" + W + "` supplied to `" + j + "`, expected an array."));
        }
        for (var J = 0; J < G.length; J++) {
          var X = O(G, J, j, Y, z + "[" + J + "]", r);
          if (X instanceof Error)
            return X;
        }
        return null;
      }
      return g(T);
    }
    function E() {
      function O(T, N, F, j, Y) {
        var z = T[N];
        if (!a(z)) {
          var G = k(z);
          return new p("Invalid " + j + " `" + Y + "` of type " + ("`" + G + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(O);
    }
    function v() {
      function O(T, N, F, j, Y) {
        var z = T[N];
        if (!e.isValidElementType(z)) {
          var G = k(z);
          return new p("Invalid " + j + " `" + Y + "` of type " + ("`" + G + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(O);
    }
    function A(O) {
      function T(N, F, j, Y, z) {
        if (!(N[F] instanceof O)) {
          var G = O.name || h, W = q(N[F]);
          return new p("Invalid " + Y + " `" + z + "` of type " + ("`" + W + "` supplied to `" + j + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return g(T);
    }
    function $(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), i;
      function T(N, F, j, Y, z) {
        for (var G = N[F], W = 0; W < O.length; W++)
          if (y(G, O[W]))
            return null;
        var J = JSON.stringify(O, function(be, C) {
          var Te = H(C);
          return Te === "symbol" ? String(C) : C;
        });
        return new p("Invalid " + Y + " `" + z + "` of value `" + String(G) + "` " + ("supplied to `" + j + "`, expected one of " + J + "."));
      }
      return g(T);
    }
    function _(O) {
      function T(N, F, j, Y, z) {
        if (typeof O != "function")
          return new p("Property `" + z + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var G = N[F], W = k(G);
        if (W !== "object")
          return new p("Invalid " + Y + " `" + z + "` of type " + ("`" + W + "` supplied to `" + j + "`, expected an object."));
        for (var J in G)
          if (n(G, J)) {
            var X = O(G, J, j, Y, z + "." + J, r);
            if (X instanceof Error)
              return X;
          }
        return null;
      }
      return g(T);
    }
    function I(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var T = 0; T < O.length; T++) {
        var N = O[T];
        if (typeof N != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(N) + " at index " + T + "."
          ), i;
      }
      function F(j, Y, z, G, W) {
        for (var J = [], X = 0; X < O.length; X++) {
          var be = O[X], C = be(j, Y, z, G, W, r);
          if (C == null)
            return null;
          C.data && n(C.data, "expectedType") && J.push(C.data.expectedType);
        }
        var Te = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new p("Invalid " + G + " `" + W + "` supplied to " + ("`" + z + "`" + Te + "."));
      }
      return g(F);
    }
    function L() {
      function O(T, N, F, j, Y) {
        return x(T[N]) ? null : new p("Invalid " + j + " `" + Y + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return g(O);
    }
    function B(O, T, N, F, j) {
      return new p(
        (O || "React class") + ": " + T + " type `" + N + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function d(O) {
      function T(N, F, j, Y, z) {
        var G = N[F], W = k(G);
        if (W !== "object")
          return new p("Invalid " + Y + " `" + z + "` of type `" + W + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var J in O) {
          var X = O[J];
          if (typeof X != "function")
            return B(j, Y, z, J, H(X));
          var be = X(G, J, j, Y, z + "." + J, r);
          if (be)
            return be;
        }
        return null;
      }
      return g(T);
    }
    function R(O) {
      function T(N, F, j, Y, z) {
        var G = N[F], W = k(G);
        if (W !== "object")
          return new p("Invalid " + Y + " `" + z + "` of type `" + W + "` " + ("supplied to `" + j + "`, expected `object`."));
        var J = t({}, N[F], O);
        for (var X in J) {
          var be = O[X];
          if (n(O, X) && typeof be != "function")
            return B(j, Y, z, X, H(be));
          if (!be)
            return new p(
              "Invalid " + Y + " `" + z + "` key `" + X + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(N[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var C = be(G, X, j, Y, z + "." + X, r);
          if (C)
            return C;
        }
        return null;
      }
      return g(T);
    }
    function x(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(x);
          if (O === null || a(O))
            return !0;
          var T = f(O);
          if (T) {
            var N = T.call(O), F;
            if (T !== O.entries) {
              for (; !(F = N.next()).done; )
                if (!x(F.value))
                  return !1;
            } else
              for (; !(F = N.next()).done; ) {
                var j = F.value;
                if (j && !x(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function D(O, T) {
      return O === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function k(O) {
      var T = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : D(T, O) ? "symbol" : T;
    }
    function H(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var T = k(O);
      if (T === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function se(O) {
      var T = H(O);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function q(O) {
      return !O.constructor || !O.constructor.name ? h : O.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, Xr;
}
var Jr, xo;
function vc() {
  if (xo) return Jr;
  xo = 1;
  var e = /* @__PURE__ */ In();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Jr = function() {
    function n(i, a, c, l, u, f) {
      if (f !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Jr;
}
var Eo;
function Tc() {
  if (Eo) return rr.exports;
  if (Eo = 1, process.env.NODE_ENV !== "production") {
    var e = Os(), t = !0;
    rr.exports = /* @__PURE__ */ bc()(e.isElement, t);
  } else
    rr.exports = /* @__PURE__ */ vc()();
  return rr.exports;
}
var xc = /* @__PURE__ */ Tc();
const m = /* @__PURE__ */ fa(xc);
function Is(e, t) {
  const r = un(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Ec(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const So = [];
function mt(e) {
  return So[0] = e, Rr(So);
}
var or = { exports: {} }, ce = {};
var _o;
function Sc() {
  if (_o) return ce;
  _o = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), o = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.consumer"), i = /* @__PURE__ */ Symbol.for("react.context"), a = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), l = /* @__PURE__ */ Symbol.for("react.suspense_list"), u = /* @__PURE__ */ Symbol.for("react.memo"), f = /* @__PURE__ */ Symbol.for("react.lazy"), h = /* @__PURE__ */ Symbol.for("react.view_transition"), b = /* @__PURE__ */ Symbol.for("react.client.reference");
  function y(p) {
    if (typeof p == "object" && p !== null) {
      var g = p.$$typeof;
      switch (g) {
        case e:
          switch (p = p.type, p) {
            case r:
            case o:
            case n:
            case c:
            case l:
            case h:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case i:
                case a:
                case f:
                case u:
                  return p;
                case s:
                  return p;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return ce.ContextConsumer = s, ce.ContextProvider = i, ce.Element = e, ce.ForwardRef = a, ce.Fragment = r, ce.Lazy = f, ce.Memo = u, ce.Portal = t, ce.Profiler = o, ce.StrictMode = n, ce.Suspense = c, ce.SuspenseList = l, ce.isContextConsumer = function(p) {
    return y(p) === s;
  }, ce.isContextProvider = function(p) {
    return y(p) === i;
  }, ce.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, ce.isForwardRef = function(p) {
    return y(p) === a;
  }, ce.isFragment = function(p) {
    return y(p) === r;
  }, ce.isLazy = function(p) {
    return y(p) === f;
  }, ce.isMemo = function(p) {
    return y(p) === u;
  }, ce.isPortal = function(p) {
    return y(p) === t;
  }, ce.isProfiler = function(p) {
    return y(p) === o;
  }, ce.isStrictMode = function(p) {
    return y(p) === n;
  }, ce.isSuspense = function(p) {
    return y(p) === c;
  }, ce.isSuspenseList = function(p) {
    return y(p) === l;
  }, ce.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === o || p === n || p === c || p === l || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === u || p.$$typeof === i || p.$$typeof === s || p.$$typeof === a || p.$$typeof === b || p.getModuleId !== void 0);
  }, ce.typeOf = y, ce;
}
var le = {};
var wo;
function _c() {
  return wo || (wo = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(p) {
      if (typeof p == "object" && p !== null) {
        var g = p.$$typeof;
        switch (g) {
          case t:
            switch (p = p.type, p) {
              case n:
              case s:
              case o:
              case l:
              case u:
              case b:
                return p;
              default:
                switch (p = p && p.$$typeof, p) {
                  case a:
                  case c:
                  case h:
                  case f:
                    return p;
                  case i:
                    return p;
                  default:
                    return g;
                }
            }
          case r:
            return g;
        }
      }
    }
    var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.consumer"), a = /* @__PURE__ */ Symbol.for("react.context"), c = /* @__PURE__ */ Symbol.for("react.forward_ref"), l = /* @__PURE__ */ Symbol.for("react.suspense"), u = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), h = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.view_transition"), y = /* @__PURE__ */ Symbol.for("react.client.reference");
    le.ContextConsumer = i, le.ContextProvider = a, le.Element = t, le.ForwardRef = c, le.Fragment = n, le.Lazy = h, le.Memo = f, le.Portal = r, le.Profiler = s, le.StrictMode = o, le.Suspense = l, le.SuspenseList = u, le.isContextConsumer = function(p) {
      return e(p) === i;
    }, le.isContextProvider = function(p) {
      return e(p) === a;
    }, le.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, le.isForwardRef = function(p) {
      return e(p) === c;
    }, le.isFragment = function(p) {
      return e(p) === n;
    }, le.isLazy = function(p) {
      return e(p) === h;
    }, le.isMemo = function(p) {
      return e(p) === f;
    }, le.isPortal = function(p) {
      return e(p) === r;
    }, le.isProfiler = function(p) {
      return e(p) === s;
    }, le.isStrictMode = function(p) {
      return e(p) === o;
    }, le.isSuspense = function(p) {
      return e(p) === l;
    }, le.isSuspenseList = function(p) {
      return e(p) === u;
    }, le.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === n || p === s || p === o || p === l || p === u || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === f || p.$$typeof === a || p.$$typeof === i || p.$$typeof === c || p.$$typeof === y || p.getModuleId !== void 0);
    }, le.typeOf = e;
  })()), le;
}
var Ro;
function wc() {
  return Ro || (Ro = 1, process.env.NODE_ENV === "production" ? or.exports = /* @__PURE__ */ Sc() : or.exports = /* @__PURE__ */ _c()), or.exports;
}
var br = /* @__PURE__ */ wc();
function De(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ks(e) {
  if (/* @__PURE__ */ V.isValidElement(e) || br.isValidElementType(e) || !De(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = ks(e[r]);
  }), t;
}
function Ce(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return De(e) && De(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ V.isValidElement(t[o]) || br.isValidElementType(t[o]) ? n[o] = t[o] : De(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && De(e[o]) ? n[o] = Ce(e[o], t[o], r) : r.clone ? n[o] = De(t[o]) ? ks(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const Rc = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Cc(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, s = Rc(t), i = Object.keys(s);
  function a(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function l(h, b) {
    const y = i.indexOf(b);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(y !== -1 && typeof t[i[y]] == "number" ? t[i[y]] : b) - n / 100}${r})`;
  }
  function u(h) {
    return i.indexOf(h) + 1 < i.length ? l(h, i[i.indexOf(h) + 1]) : a(h);
  }
  function f(h) {
    const b = i.indexOf(h);
    return b === 0 ? a(i[1]) : b === i.length - 1 ? c(i[b]) : l(h, i[i.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: i,
    values: s,
    up: a,
    down: c,
    between: l,
    only: u,
    not: f,
    unit: r,
    ...o
  };
}
function Co(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    const s = /min-width:\s*([0-9.]+)/;
    return +(n.match(s)?.[1] || 0) - +(o.match(s)?.[1] || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const s = t[o];
    return delete n[o], n[o] = s, n;
  }, {
    ...t
  }) : t;
}
function Ac(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Mc(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : rt(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, s = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(s);
}
function Oc(e) {
  const t = (s, i) => s.replace("@media", i ? `@container ${i}` : "@container");
  function r(s, i) {
    s.up = (...a) => t(e.breakpoints.up(...a), i), s.down = (...a) => t(e.breakpoints.down(...a), i), s.between = (...a) => t(e.breakpoints.between(...a), i), s.only = (...a) => t(e.breakpoints.only(...a), i), s.not = (...a) => {
      const c = t(e.breakpoints.not(...a), i);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const n = {}, o = (s) => (r(n, s), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Pc = {
  borderRadius: 4
}, st = process.env.NODE_ENV !== "production" ? m.oneOfType([m.number, m.string, m.object, m.array]) : {};
function jt(e, t) {
  return t ? Ce(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Cr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Ao = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Cr[e]}px)`
}, Ic = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Cr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ke(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const s = n.breakpoints || Ao;
    return t.reduce((i, a, c) => (i[s.up(s.keys[c])] = r(t[c]), i), {});
  }
  if (typeof t == "object") {
    const s = n.breakpoints || Ao;
    return Object.keys(t).reduce((i, a) => {
      if (Ac(s.keys, a)) {
        const c = Mc(n.containerQueries ? n : Ic, a);
        c && (i[c] = r(t[a], a));
      } else if (Object.keys(s.values || Cr).includes(a)) {
        const c = s.up(a);
        i[c] = r(t[a], a);
      } else {
        const c = a;
        i[c] = t[c];
      }
      return i;
    }, {});
  }
  return r(t);
}
function kc(e = {}) {
  return e.keys?.reduce((r, n) => {
    const o = e.up(n);
    return r[o] = {}, r;
  }, {}) || {};
}
function Mo(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function fe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : rt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ar(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function vr(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Ar(e, r) || n, t && (o = t(o, n, e)), o;
}
function me(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, s = (i) => {
    if (i[t] == null)
      return null;
    const a = i[t], c = i.theme, l = Ar(c, n) || {};
    return Ke(i, a, (f) => {
      let h = vr(l, o, f);
      return f === h && typeof f == "string" && (h = vr(l, o, `${t}${f === "default" ? "" : fe(f)}`, f)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: st
  } : {}, s.filterProps = [t], s;
}
function Nc(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const $c = {
  m: "margin",
  p: "padding"
}, Lc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Oo = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Dc = Nc((e) => {
  if (e.length > 2)
    if (Oo[e])
      e = Oo[e];
    else
      return [e];
  const [t, r] = e.split(""), n = $c[t], o = Lc[r] || "";
  return Array.isArray(o) ? o.map((s) => n + s) : [n + o];
}), Mr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Or = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Bc = [...Mr, ...Or];
function qt(e, t, r, n) {
  const o = Ar(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), typeof o == "string" ? o.startsWith("var(") && s === 0 ? 0 : o.startsWith("var(") && s === 1 ? o : `calc(${s} * ${o})` : o * s) : Array.isArray(o) ? (s) => {
    if (typeof s == "string")
      return s;
    const i = Math.abs(s);
    process.env.NODE_ENV !== "production" && (Number.isInteger(i) ? i > o.length - 1 && console.error([`MUI: The value provided (${i}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${i} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const a = o[i];
    return s >= 0 ? a : typeof a == "number" ? -a : typeof a == "string" && a.startsWith("var(") ? `calc(-1 * ${a})` : `-${a}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function kn(e) {
  return qt(e, "spacing", 8, "spacing");
}
function Xt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Fc(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Xt(t, r), n), {});
}
function jc(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Dc(r), s = Fc(o, n), i = e[r];
  return Ke(e, i, s);
}
function Ns(e, t) {
  const r = kn(e.theme);
  return Object.keys(e).map((n) => jc(e, t, n, r)).reduce(jt, {});
}
function pe(e) {
  return Ns(e, Mr);
}
pe.propTypes = process.env.NODE_ENV !== "production" ? Mr.reduce((e, t) => (e[t] = st, e), {}) : {};
pe.filterProps = Mr;
function he(e) {
  return Ns(e, Or);
}
he.propTypes = process.env.NODE_ENV !== "production" ? Or.reduce((e, t) => (e[t] = st, e), {}) : {};
he.filterProps = Or;
process.env.NODE_ENV !== "production" && Bc.reduce((e, t) => (e[t] = st, e), {});
function $s(e = 8, t = kn({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const i = t(s);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" "));
  return r.mui = !0, r;
}
function Pr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((s) => {
    n[s] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, s) => t[s] ? jt(o, t[s](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Oe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Pe(e, t) {
  return me({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Vc = Pe("border", Oe), Uc = Pe("borderTop", Oe), Gc = Pe("borderRight", Oe), Hc = Pe("borderBottom", Oe), zc = Pe("borderLeft", Oe), Wc = Pe("borderColor"), Yc = Pe("borderTopColor"), Kc = Pe("borderRightColor"), qc = Pe("borderBottomColor"), Xc = Pe("borderLeftColor"), Jc = Pe("outline", Oe), Qc = Pe("outlineColor"), Ir = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = qt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Xt(t, n)
    });
    return Ke(e, e.borderRadius, r);
  }
  return null;
};
Ir.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: st
} : {};
Ir.filterProps = ["borderRadius"];
Pr(Vc, Uc, Gc, Hc, zc, Wc, Yc, Kc, qc, Xc, Ir, Jc, Qc);
const kr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = qt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Xt(t, n)
    });
    return Ke(e, e.gap, r);
  }
  return null;
};
kr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: st
} : {};
kr.filterProps = ["gap"];
const Nr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = qt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Xt(t, n)
    });
    return Ke(e, e.columnGap, r);
  }
  return null;
};
Nr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: st
} : {};
Nr.filterProps = ["columnGap"];
const $r = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = qt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Xt(t, n)
    });
    return Ke(e, e.rowGap, r);
  }
  return null;
};
$r.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: st
} : {};
$r.filterProps = ["rowGap"];
const Zc = me({
  prop: "gridColumn"
}), el = me({
  prop: "gridRow"
}), tl = me({
  prop: "gridAutoFlow"
}), rl = me({
  prop: "gridAutoColumns"
}), nl = me({
  prop: "gridAutoRows"
}), ol = me({
  prop: "gridTemplateColumns"
}), sl = me({
  prop: "gridTemplateRows"
}), il = me({
  prop: "gridTemplateAreas"
}), al = me({
  prop: "gridArea"
});
Pr(kr, Nr, $r, Zc, el, tl, rl, nl, ol, sl, il, al);
function Rt(e, t) {
  return t === "grey" ? t : e;
}
const cl = me({
  prop: "color",
  themeKey: "palette",
  transform: Rt
}), ll = me({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Rt
}), ul = me({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Rt
});
Pr(cl, ll, ul);
function we(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const fl = me({
  prop: "width",
  transform: we
}), Nn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const n = e.theme?.breakpoints?.values?.[r] || Cr[r];
      return n ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: we(r)
      };
    };
    return Ke(e, e.maxWidth, t);
  }
  return null;
};
Nn.filterProps = ["maxWidth"];
const dl = me({
  prop: "minWidth",
  transform: we
}), pl = me({
  prop: "height",
  transform: we
}), hl = me({
  prop: "maxHeight",
  transform: we
}), ml = me({
  prop: "minHeight",
  transform: we
});
me({
  prop: "size",
  cssProperty: "width",
  transform: we
});
me({
  prop: "size",
  cssProperty: "height",
  transform: we
});
const gl = me({
  prop: "boxSizing"
});
Pr(fl, Nn, dl, pl, hl, ml, gl);
const Jt = {
  // borders
  border: {
    themeKey: "borders",
    transform: Oe
  },
  borderTop: {
    themeKey: "borders",
    transform: Oe
  },
  borderRight: {
    themeKey: "borders",
    transform: Oe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Oe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Oe
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Oe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ir
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Rt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Rt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Rt
  },
  // spacing
  p: {
    style: he
  },
  pt: {
    style: he
  },
  pr: {
    style: he
  },
  pb: {
    style: he
  },
  pl: {
    style: he
  },
  px: {
    style: he
  },
  py: {
    style: he
  },
  padding: {
    style: he
  },
  paddingTop: {
    style: he
  },
  paddingRight: {
    style: he
  },
  paddingBottom: {
    style: he
  },
  paddingLeft: {
    style: he
  },
  paddingX: {
    style: he
  },
  paddingY: {
    style: he
  },
  paddingInline: {
    style: he
  },
  paddingInlineStart: {
    style: he
  },
  paddingInlineEnd: {
    style: he
  },
  paddingBlock: {
    style: he
  },
  paddingBlockStart: {
    style: he
  },
  paddingBlockEnd: {
    style: he
  },
  m: {
    style: pe
  },
  mt: {
    style: pe
  },
  mr: {
    style: pe
  },
  mb: {
    style: pe
  },
  ml: {
    style: pe
  },
  mx: {
    style: pe
  },
  my: {
    style: pe
  },
  margin: {
    style: pe
  },
  marginTop: {
    style: pe
  },
  marginRight: {
    style: pe
  },
  marginBottom: {
    style: pe
  },
  marginLeft: {
    style: pe
  },
  marginX: {
    style: pe
  },
  marginY: {
    style: pe
  },
  marginInline: {
    style: pe
  },
  marginInlineStart: {
    style: pe
  },
  marginInlineEnd: {
    style: pe
  },
  marginBlock: {
    style: pe
  },
  marginBlockStart: {
    style: pe
  },
  marginBlockEnd: {
    style: pe
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: kr
  },
  rowGap: {
    style: $r
  },
  columnGap: {
    style: Nr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: we
  },
  maxWidth: {
    style: Nn
  },
  minWidth: {
    transform: we
  },
  height: {
    transform: we
  },
  maxHeight: {
    transform: we
  },
  minHeight: {
    transform: we
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function yl(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function bl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function vl() {
  function e(r, n, o, s) {
    const i = {
      [r]: n,
      theme: o
    }, a = s[r];
    if (!a)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: l,
      transform: u,
      style: f
    } = a;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const h = Ar(o, l) || {};
    return f ? f(i) : Ke(i, n, (y) => {
      let p = vr(h, u, y);
      return y === p && typeof y == "string" && (p = vr(h, u, `${r}${y === "default" ? "" : fe(y)}`, y)), c === !1 ? p : {
        [c]: p
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {},
      nested: s
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? Jt;
    function a(c) {
      let l = c;
      if (typeof c == "function")
        l = c(o);
      else if (typeof c != "object")
        return c;
      if (!l)
        return null;
      const u = kc(o.breakpoints), f = Object.keys(u);
      let h = u;
      return Object.keys(l).forEach((b) => {
        const y = bl(l[b], o);
        if (y != null)
          if (typeof y == "object")
            if (i[b])
              h = jt(h, e(b, y, o, i));
            else {
              const p = Ke({
                theme: o
              }, y, (g) => ({
                [b]: g
              }));
              yl(p, y) ? h[b] = t({
                sx: y,
                theme: o,
                nested: !0
              }) : h = jt(h, p);
            }
          else
            h = jt(h, e(b, y, o, i));
      }), !s && o.modularCssLayers ? {
        "@layer sx": Co(o, Mo(f, h))
      } : Co(o, Mo(f, h));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const yt = vl();
yt.filterProps = ["sx"];
function Tl(e, t) {
  const r = this;
  if (r.vars) {
    if (!r.colorSchemes?.[e] || typeof r.getColorSchemeSelector != "function")
      return {};
    let n = r.getColorSchemeSelector(e);
    return n === "&" ? t : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), {
      [n]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function $n(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: s = {},
    ...i
  } = e, a = Cc(r), c = $s(o);
  let l = Ce({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: c,
    shape: {
      ...Pc,
      ...s
    }
  }, i);
  return l = Oc(l), l.applyStyles = Tl, l = t.reduce((u, f) => Ce(u, f), l), l.unstable_sxConfig = {
    ...Jt,
    ...i?.unstable_sxConfig
  }, l.unstable_sx = function(f) {
    return yt({
      sx: f,
      theme: this
    });
  }, l;
}
function xl(e) {
  return Object.keys(e).length === 0;
}
function El(e = null) {
  const t = V.useContext(Mn);
  return !t || xl(t) ? e : t;
}
const Sl = $n();
function Ls(e = Sl) {
  return El(e);
}
const _l = (e) => {
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = e?.theme?.unstable_sxConfig ?? Jt;
  return Object.keys(e).forEach((n) => {
    r[n] ? t.systemProps[n] = e[n] : t.otherProps[n] = e[n];
  }), t;
};
function Ds(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = _l(r);
  let s;
  return Array.isArray(t) ? s = [n, ...t] : typeof t == "function" ? s = (...i) => {
    const a = t(...i);
    return De(a) ? {
      ...n,
      ...a
    } : n;
  } : s = {
    ...n,
    ...t
  }, {
    ...o,
    sx: s
  };
}
const Po = (e) => e, wl = () => {
  let e = Po;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Po;
    }
  };
}, Bs = wl();
function Fs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Fs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ye() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Fs(e)) && (n && (n += " "), n += t);
  return n;
}
function Rl(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, s = Is("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(yt);
  return /* @__PURE__ */ V.forwardRef(function(c, l) {
    const u = Ls(r), {
      className: f,
      component: h = "div",
      ...b
    } = Ds(c);
    return /* @__PURE__ */ U.jsx(s, {
      as: h,
      ref: l,
      className: ye(f, o ? o(n) : n),
      theme: t && u[t] || u,
      ...b
    });
  });
}
const Cl = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function qe(e, t, r = "Mui") {
  const n = Cl[t];
  return n ? `${r}-${n}` : `${Bs.generate(e)}-${t}`;
}
function Xe(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = qe(e, o, r);
  }), n;
}
function js(e, t = "") {
  return e.displayName || e.name || t;
}
function Io(e, t, r) {
  const n = js(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Al(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return js(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case br.ForwardRef:
          return Io(e, e.render, "ForwardRef");
        case br.Memo:
          return Io(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Vs(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: mt(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = mt(o.style));
  }), n;
}
const Ml = $n();
function Qr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function pt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Ol(e) {
  return e ? (t, r) => r[e] : null;
}
function Pl(e, t, r) {
  e.theme = $l(e.theme) ? r : e.theme[t] || e.theme;
}
function dr(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => dr(e, o, r));
  if (Array.isArray(n?.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? pt(n.style, r) : n.style;
    else {
      const {
        variants: s,
        ...i
      } = n;
      o = r ? pt(mt(i), r) : i;
    }
    return Us(e, n.variants, [o], r);
  }
  return n?.isProcessed ? r ? pt(mt(n.style), r) : n.style : r ? pt(mt(n), r) : n;
}
function Us(e, t, r = [], n = void 0) {
  let o;
  e: for (let s = 0; s < t.length; s += 1) {
    const i = t[s];
    if (typeof i.props == "function") {
      if (o ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !i.props(o))
        continue;
    } else
      for (const a in i.props)
        if (e[a] !== i.props[a] && e.ownerState?.[a] !== i.props[a])
          continue e;
    typeof i.style == "function" ? (o ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, r.push(n ? pt(mt(i.style(o)), n) : i.style(o))) : r.push(n ? pt(mt(i.style), n) : i.style);
  }
  return r;
}
function Il(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Ml,
    rootShouldForwardProp: n = Qr,
    slotShouldForwardProp: o = Qr
  } = e;
  function s(a) {
    Pl(a, t, r);
  }
  return (a, c = {}) => {
    Ec(a, (A) => A.filter(($) => $ !== yt));
    const {
      name: l,
      slot: u,
      skipVariantsResolver: f,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: b = Ol(Gs(u)),
      ...y
    } = c, p = l && l.startsWith("Mui") || u ? "components" : "custom", g = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), S = h || !1;
    let M = Qr;
    u === "Root" || u === "root" ? M = n : u ? M = o : Ll(a) && (M = void 0);
    const P = Is(a, {
      shouldForwardProp: M,
      label: Nl(l, u),
      ...y
    }), E = (A) => {
      if (A.__emotion_real === A)
        return A;
      if (typeof A == "function")
        return function(_) {
          return dr(_, A, _.theme.modularCssLayers ? p : void 0);
        };
      if (De(A)) {
        const $ = Vs(A);
        return function(I) {
          return $.variants ? dr(I, $, I.theme.modularCssLayers ? p : void 0) : I.theme.modularCssLayers ? pt($.style, p) : $.style;
        };
      }
      return A;
    }, v = (...A) => {
      const $ = [], _ = A.map(E), I = [];
      if ($.push(s), l && b && I.push(function(R) {
        const D = R.theme.components?.[l]?.styleOverrides;
        if (!D)
          return null;
        const k = {};
        for (const H in D)
          k[H] = dr(R, D[H], R.theme.modularCssLayers ? "theme" : void 0);
        return b(R, k);
      }), l && !g && I.push(function(R) {
        const D = R.theme?.components?.[l]?.variants;
        return D ? Us(R, D, [], R.theme.modularCssLayers ? "theme" : void 0) : null;
      }), S || I.push(yt), Array.isArray(_[0])) {
        const d = _.shift(), R = new Array($.length).fill(""), x = new Array(I.length).fill("");
        let D;
        D = [...R, ...d, ...x], D.raw = [...R, ...d.raw, ...x], $.unshift(D);
      }
      const L = [...$, ..._, ...I], B = P(...L);
      return a.muiName && (B.muiName = a.muiName), process.env.NODE_ENV !== "production" && (B.displayName = kl(l, u, a)), B;
    };
    return P.withConfig && (v.withConfig = P.withConfig), v;
  };
}
function kl(e, t, r) {
  return e ? `${e}${fe(t || "")}` : `Styled(${Al(r)})`;
}
function Nl(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Gs(t || "Root")}`), r;
}
function $l(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ll(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Gs(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Tr(e, t, r = !1) {
  const n = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const s = o;
      if (s === "components" || s === "slots")
        n[s] = {
          ...e[s],
          ...n[s]
        };
      else if (s === "componentsProps" || s === "slotProps") {
        const i = e[s], a = t[s];
        if (!a)
          n[s] = i || {};
        else if (!i)
          n[s] = a;
        else {
          n[s] = {
            ...a
          };
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const l = c;
              n[s][l] = Tr(i[l], a[l], r);
            }
        }
      } else s === "className" && r && t.className ? n.className = ye(e?.className, t?.className) : s === "style" && r && t.style ? n.style = {
        ...e?.style,
        ...t?.style
      } : n[s] === void 0 && (n[s] = e[s]);
    }
  return n;
}
const Dl = typeof window < "u" ? V.useLayoutEffect : V.useEffect;
function Bl(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Ln(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Bl(e, t, r);
}
function Fl(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function nt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return nt(Fl(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : rt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : rt(10, o));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const jl = (e) => {
  const t = nt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Dt = (e, t) => {
  try {
    return jl(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Lr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Hs(e) {
  e = nt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, s = n * Math.min(o, 1 - o), i = (l, u = (l + r / 30) % 12) => o - s * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let a = "rgb";
  const c = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (a += "a", c.push(t[3])), Lr({
    type: a,
    values: c
  });
}
function fn(e) {
  e = nt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? nt(Hs(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ko(e, t) {
  const r = fn(e), n = fn(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function xr(e, t) {
  return e = nt(e), t = Ln(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Lr(e);
}
function lt(e, t, r) {
  try {
    return xr(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Dr(e, t) {
  if (e = nt(e), t = Ln(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Lr(e);
}
function ie(e, t, r) {
  try {
    return Dr(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Br(e, t) {
  if (e = nt(e), t = Ln(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Lr(e);
}
function ae(e, t, r) {
  try {
    return Br(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Vl(e, t = 0.15) {
  return fn(e) > 0.5 ? Dr(e, t) : Br(e, t);
}
function sr(e, t, r) {
  try {
    return Vl(e, t);
  } catch {
    return e;
  }
}
const Ul = /* @__PURE__ */ V.createContext(void 0);
process.env.NODE_ENV !== "production" && (m.node, m.object);
function Gl(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Tr(o.defaultProps, n, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Tr(o, n, t.components.mergeClassNameAndStyle) : n;
}
function Hl({
  props: e,
  name: t
}) {
  const r = V.useContext(Ul);
  return Gl({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let No = 0;
function zl(e) {
  const [t, r] = V.useState(e), n = e || t;
  return V.useEffect(() => {
    t == null && (No += 1, r(`mui-${No}`));
  }, [t]), n;
}
const Wl = {
  ...V
}, $o = Wl.useId;
function Yl(e) {
  if ($o !== void 0) {
    const t = $o();
    return e ?? t;
  }
  return zl(e);
}
const Lo = {
  theme: void 0
};
function Kl(e) {
  let t, r;
  return function(o) {
    let s = t;
    return (s === void 0 || o.theme !== r) && (Lo.theme = o.theme, s = Vs(e(Lo)), t = s, r = o.theme), s;
  };
}
function ql(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Do = (e, t, r, n = []) => {
  let o = e;
  t.forEach((s, i) => {
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = r : o && typeof o == "object" && (o[s] = r) : o && typeof o == "object" && (o[s] || (o[s] = n.includes(s) ? [] : {}), o = o[s]);
  });
}, Xl = (e, t, r) => {
  function n(o, s = [], i = []) {
    Object.entries(o).forEach(([a, c]) => {
      (!r || r && !r([...s, a])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [...s, a], Array.isArray(c) ? [...i, a] : i) : t([...s, a], c, i));
    });
  }
  n(e);
}, Jl = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Zr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, s = {}, i = {};
  return Xl(
    e,
    (a, c, l) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(a, c))) {
        const u = `--${r ? `${r}-` : ""}${a.join("-")}`, f = Jl(a, c);
        Object.assign(o, {
          [u]: f
        }), Do(s, a, `var(${u})`, l), Do(i, a, `var(${u}, ${f})`, l);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: s,
    varsWithDefaults: i
  };
}
function Ql(e, t = {}) {
  const {
    getSelector: r = S,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: s
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: c = "light",
    ...l
  } = e, {
    vars: u,
    css: f,
    varsWithDefaults: h
  } = Zr(l, t);
  let b = h;
  const y = {}, {
    [c]: p,
    ...g
  } = i;
  if (Object.entries(g || {}).forEach(([E, v]) => {
    const {
      vars: A,
      css: $,
      varsWithDefaults: _
    } = Zr(v, t);
    b = Ce(b, _), y[E] = {
      css: $,
      vars: A
    };
  }), p) {
    const {
      css: E,
      vars: v,
      varsWithDefaults: A
    } = Zr(p, t);
    b = Ce(b, A), y[c] = {
      css: E,
      vars: v
    };
  }
  function S(E, v) {
    let A = o;
    if (o === "class" && (A = ".%s"), o === "data" && (A = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (A = `[${o}="%s"]`), E) {
      if (A === "media")
        return e.defaultColorScheme === E ? ":root" : {
          [`@media (prefers-color-scheme: ${i[E]?.palette?.mode || E})`]: {
            ":root": v
          }
        };
      if (A)
        return e.defaultColorScheme === E ? `:root, ${A.replace("%s", String(E))}` : A.replace("%s", String(E));
    }
    return ":root";
  }
  return {
    vars: b,
    generateThemeVars: () => {
      let E = {
        ...u
      };
      return Object.entries(y).forEach(([, {
        vars: v
      }]) => {
        E = Ce(E, v);
      }), E;
    },
    generateStyleSheets: () => {
      const E = [], v = e.defaultColorScheme || "light";
      function A(I, L) {
        Object.keys(L).length && E.push(typeof I == "string" ? {
          [I]: {
            ...L
          }
        } : I);
      }
      A(r(void 0, {
        ...f
      }), f);
      const {
        [v]: $,
        ..._
      } = y;
      if ($) {
        const {
          css: I
        } = $, L = i[v]?.palette?.mode, B = !n && L ? {
          colorScheme: L,
          ...I
        } : {
          ...I
        };
        A(r(v, {
          ...B
        }), B);
      }
      return Object.entries(_).forEach(([I, {
        css: L
      }]) => {
        const B = i[I]?.palette?.mode, d = !n && B ? {
          colorScheme: B,
          ...L
        } : {
          ...L
        };
        A(r(I, {
          ...d
        }), d);
      }), s && E.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), E;
    }
  };
}
function Zl(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function bt(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const s = e[o];
    let i = "", a = !0;
    for (let c = 0; c < s.length; c += 1) {
      const l = s[c];
      l && (i += (a === !0 ? "" : " ") + t(l), a = !1, r && r[l] && (i += " " + r[l]));
    }
    n[o] = i;
  }
  return n;
}
function zs() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Gt.white,
      default: Gt.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Ws = zs();
function Ys() {
  return {
    text: {
      primary: Gt.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Gt.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const dn = Ys();
function Bo(e, t, r, n) {
  const o = n.light || n, s = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Br(e.main, o) : t === "dark" && (e.dark = Dr(e.main, s)));
}
function Fo(e, t, r, n, o) {
  const s = o.light || o, i = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(i * 100).toFixed(0)}%)`));
}
function eu(e = "light") {
  return e === "dark" ? {
    main: xt[200],
    light: xt[50],
    dark: xt[400]
  } : {
    main: xt[700],
    light: xt[400],
    dark: xt[800]
  };
}
function tu(e = "light") {
  return e === "dark" ? {
    main: Tt[200],
    light: Tt[50],
    dark: Tt[400]
  } : {
    main: Tt[500],
    light: Tt[300],
    dark: Tt[700]
  };
}
function ru(e = "light") {
  return e === "dark" ? {
    main: vt[500],
    light: vt[300],
    dark: vt[700]
  } : {
    main: vt[700],
    light: vt[400],
    dark: vt[800]
  };
}
function nu(e = "light") {
  return e === "dark" ? {
    main: Et[400],
    light: Et[300],
    dark: Et[700]
  } : {
    main: Et[700],
    light: Et[500],
    dark: Et[900]
  };
}
function ou(e = "light") {
  return e === "dark" ? {
    main: St[400],
    light: St[300],
    dark: St[700]
  } : {
    main: St[800],
    light: St[500],
    dark: St[900]
  };
}
function su(e = "light") {
  return e === "dark" ? {
    main: kt[400],
    light: kt[300],
    dark: kt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: kt[500],
    dark: kt[900]
  };
}
function iu(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Dn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...s
  } = e, i = e.primary || eu(t), a = e.secondary || tu(t), c = e.error || ru(t), l = e.info || nu(t), u = e.success || ou(t), f = e.warning || su(t);
  function h(g) {
    if (o)
      return iu(g);
    const S = ko(g, dn.text.primary) >= r ? dn.text.primary : Ws.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const M = ko(g, S);
      M < 3 && console.error([`MUI: The contrast ratio of ${M}:1 for ${S} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return S;
  }
  const b = ({
    color: g,
    name: S,
    mainShade: M = 500,
    lightShade: P = 300,
    darkShade: E = 700
  }) => {
    if (g = {
      ...g
    }, !g.main && g[M] && (g.main = g[M]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${M}\` property.` : rt(11, S ? ` (${S})` : "", M));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : rt(12, S ? ` (${S})` : "", JSON.stringify(g.main)));
    return o ? (Fo(o, g, "light", P, n), Fo(o, g, "dark", E, n)) : (Bo(g, "light", P, n), Bo(g, "dark", E, n)), g.contrastText || (g.contrastText = h(g.main)), g;
  };
  let y;
  return t === "light" ? y = zs() : t === "dark" && (y = Ys()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ce({
    // A collection of common colors.
    common: {
      ...Gt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: b({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: b({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: b({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: b({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: b({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: b({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: ma,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: b,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...y
  }, s);
}
function au(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, s] = n;
    typeof s == "object" && (t[o] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function cu(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function lu(e) {
  return Math.round(e * 1e5) / 1e5;
}
const jo = {
  textTransform: "uppercase"
}, Vo = '"Roboto", "Helvetica", "Arial", sans-serif';
function uu(e, t) {
  const {
    fontFamily: r = Vo,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: i = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: l,
    pxToRem: u,
    ...f
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, b = u || ((g) => `${g / c * h}rem`), y = (g, S, M, P, E) => ({
    fontFamily: r,
    fontWeight: g,
    fontSize: b(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: M,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Vo ? {
      letterSpacing: `${lu(P / S)}em`
    } : {},
    ...E,
    ...l
  }), p = {
    h1: y(o, 96, 1.167, -1.5),
    h2: y(o, 60, 1.2, -0.5),
    h3: y(s, 48, 1.167, 0),
    h4: y(s, 34, 1.235, 0.25),
    h5: y(s, 24, 1.334, 0),
    h6: y(i, 20, 1.6, 0.15),
    subtitle1: y(s, 16, 1.75, 0.15),
    subtitle2: y(i, 14, 1.57, 0.1),
    body1: y(s, 16, 1.5, 0.15),
    body2: y(s, 14, 1.43, 0.15),
    button: y(i, 14, 1.75, 0.4, jo),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, jo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ce({
    htmlFontSize: c,
    pxToRem: b,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: s,
    fontWeightMedium: i,
    fontWeightBold: a,
    ...p
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const fu = 0.2, du = 0.14, pu = 0.12;
function de(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${fu})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${du})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${pu})`].join(",");
}
const hu = ["none", de(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), de(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), de(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), de(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), de(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), de(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), de(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), de(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), de(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), de(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), de(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), de(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), de(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), de(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), de(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), de(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), de(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), de(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), de(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), de(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), de(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), de(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), de(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), de(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], mu = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, gu = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Uo(e) {
  return `${Math.round(e)}ms`;
}
function yu(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function bu(e) {
  const t = {
    ...mu,
    ...e.easing
  }, r = {
    ...gu,
    ...e.duration
  };
  return {
    getAutoHeightDuration: yu,
    create: (o = ["all"], s = {}) => {
      const {
        duration: i = r.standard,
        easing: a = t.easeInOut,
        delay: c = 0,
        ...l
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const u = (h) => typeof h == "string", f = (h) => !Number.isNaN(parseFloat(h));
        !u(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !f(i) && !u(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), u(a) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !u(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof i == "string" ? i : Uo(i)} ${a} ${typeof c == "string" ? c : Uo(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const vu = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Tu(e) {
  return De(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Ks(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let s = 0; s < o.length; s++) {
      const [i, a] = o[s];
      !Tu(a) || i.startsWith("unstable_") ? delete n[i] : De(a) && (n[i] = {
        ...a
      }, r(n[i]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Go(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const xu = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let r = 0;
  for (let n = 0; n < t.length; n += 1)
    r += +t[n];
  return r;
};
function Eu(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : xr(t, xu(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${Go(r)})` : Br(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${Go(r)})` : Dr(t, r);
    }
  });
}
function pn(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: s = {},
    transitions: i = {},
    typography: a = {},
    shape: c,
    colorSpace: l,
    ...u
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : rt(20));
  const f = Dn({
    ...s,
    colorSpace: l
  }), h = $n(e);
  let b = Ce(h, {
    mixins: cu(h.breakpoints, n),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: hu.slice(),
    typography: uu(f, a),
    transitions: bu(i),
    zIndex: {
      ...vu
    }
  });
  if (b = Ce(b, u), b = t.reduce((y, p) => Ce(y, p), b), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (g, S) => {
      let M;
      for (M in g) {
        const P = g[M];
        if (y.includes(M) && Object.keys(P).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const E = qe("", M);
            console.error([`MUI: The \`${S}\` component increases the CSS specificity of the \`${M}\` internal state.`, "You can not override it like this: ", JSON.stringify(g, null, 2), "", `Instead, you need to use the '&.${E}' syntax:`, JSON.stringify({
              root: {
                [`&.${E}`]: P
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          g[M] = {};
        }
      }
    };
    Object.keys(b.components).forEach((g) => {
      const S = b.components[g].styleOverrides;
      S && g.startsWith("Mui") && p(S, g);
    });
  }
  return b.unstable_sxConfig = {
    ...Jt,
    ...u?.unstable_sxConfig
  }, b.unstable_sx = function(p) {
    return yt({
      sx: p,
      theme: this
    });
  }, b.toRuntimeSource = Ks, Eu(b), b;
}
function hn(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Su = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = hn(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function qs(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Xs(e) {
  return e === "dark" ? Su : [];
}
function _u(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...s
  } = e, i = Dn({
    ...t,
    colorSpace: o
  });
  return {
    palette: i,
    opacity: {
      ...qs(i.mode),
      ...r
    },
    overlays: n || Xs(i.mode),
    ...s
  };
}
function wu(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Ru = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Cu = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let s = o;
  if (o === "class" && (s = ".%s"), o === "data" && (s = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (s = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const i = {};
      return Ru(e.cssVarPrefix).forEach((a) => {
        i[a] = r[a], delete r[a];
      }), s === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: i
        }
      } : s ? {
        [s.replace("%s", t)]: i,
        [`${n}, ${s.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...i
        }
      };
    }
    if (s && s !== "media")
      return `${n}, ${s.replace("%s", String(t))}`;
  } else if (t) {
    if (s === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (s)
      return s.replace("%s", String(t));
  }
  return n;
};
function Au(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function w(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Bt(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Hs(e);
}
function Ge(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Dt(Bt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Mu(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const ke = (e) => {
  try {
    return e();
  } catch {
  }
}, Ou = (e = "mui") => ql(e);
function en(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const s = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = _u({
      ...r,
      palette: {
        mode: s,
        ...r?.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = pn({
    ...n,
    palette: {
      mode: s,
      ...r?.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...r,
    palette: i,
    opacity: {
      ...qs(s),
      ...r?.opacity
    },
    overlays: r?.overlays || Xs(s)
  }, a;
}
function Pu(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: s = "mui",
    nativeColor: i = !1,
    shouldSkipGeneratingVar: a = wu,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...u
  } = e, f = Object.keys(r)[0], h = n || (r.light && f !== "light" ? "light" : f), b = Ou(s), {
    [h]: y,
    light: p,
    dark: g,
    ...S
  } = r, M = {
    ...S
  };
  let P = y;
  if ((h === "dark" && !("dark" in r) || h === "light" && !("light" in r)) && (P = !0), !P)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : rt(21, h));
  let E;
  i && (E = "oklch");
  const v = en(E, M, P, u, h);
  p && !M.light && en(E, M, p, void 0, "light"), g && !M.dark && en(E, M, g, void 0, "dark");
  let A = {
    defaultColorScheme: h,
    ...v,
    cssVarPrefix: s,
    colorSchemeSelector: c,
    rootSelector: l,
    getCssVar: b,
    colorSchemes: M,
    font: {
      ...au(v.typography),
      ...v.font
    },
    spacing: Mu(u.spacing)
  };
  Object.keys(A.colorSchemes).forEach((B) => {
    const d = A.colorSchemes[B].palette, R = (D) => {
      const k = D.split("-"), H = k[1], se = k[2];
      return b(D, d[H][se]);
    };
    d.mode === "light" && (w(d.common, "background", "#fff"), w(d.common, "onBackground", "#000")), d.mode === "dark" && (w(d.common, "background", "#000"), w(d.common, "onBackground", "#fff"));
    function x(D, k, H) {
      if (E) {
        let se;
        return D === lt && (se = `transparent ${((1 - H) * 100).toFixed(0)}%`), D === ie && (se = `#000 ${(H * 100).toFixed(0)}%`), D === ae && (se = `#fff ${(H * 100).toFixed(0)}%`), `color-mix(in ${E}, ${k}, ${se})`;
      }
      return D(k, H);
    }
    if (Au(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      w(d.Alert, "errorColor", x(ie, d.error.light, 0.6)), w(d.Alert, "infoColor", x(ie, d.info.light, 0.6)), w(d.Alert, "successColor", x(ie, d.success.light, 0.6)), w(d.Alert, "warningColor", x(ie, d.warning.light, 0.6)), w(d.Alert, "errorFilledBg", R("palette-error-main")), w(d.Alert, "infoFilledBg", R("palette-info-main")), w(d.Alert, "successFilledBg", R("palette-success-main")), w(d.Alert, "warningFilledBg", R("palette-warning-main")), w(d.Alert, "errorFilledColor", ke(() => d.getContrastText(d.error.main))), w(d.Alert, "infoFilledColor", ke(() => d.getContrastText(d.info.main))), w(d.Alert, "successFilledColor", ke(() => d.getContrastText(d.success.main))), w(d.Alert, "warningFilledColor", ke(() => d.getContrastText(d.warning.main))), w(d.Alert, "errorStandardBg", x(ae, d.error.light, 0.9)), w(d.Alert, "infoStandardBg", x(ae, d.info.light, 0.9)), w(d.Alert, "successStandardBg", x(ae, d.success.light, 0.9)), w(d.Alert, "warningStandardBg", x(ae, d.warning.light, 0.9)), w(d.Alert, "errorIconColor", R("palette-error-main")), w(d.Alert, "infoIconColor", R("palette-info-main")), w(d.Alert, "successIconColor", R("palette-success-main")), w(d.Alert, "warningIconColor", R("palette-warning-main")), w(d.AppBar, "defaultBg", R("palette-grey-100")), w(d.Avatar, "defaultBg", R("palette-grey-400")), w(d.Button, "inheritContainedBg", R("palette-grey-300")), w(d.Button, "inheritContainedHoverBg", R("palette-grey-A100")), w(d.Chip, "defaultBorder", R("palette-grey-400")), w(d.Chip, "defaultAvatarColor", R("palette-grey-700")), w(d.Chip, "defaultIconColor", R("palette-grey-700")), w(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), w(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), w(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), w(d.LinearProgress, "primaryBg", x(ae, d.primary.main, 0.62)), w(d.LinearProgress, "secondaryBg", x(ae, d.secondary.main, 0.62)), w(d.LinearProgress, "errorBg", x(ae, d.error.main, 0.62)), w(d.LinearProgress, "infoBg", x(ae, d.info.main, 0.62)), w(d.LinearProgress, "successBg", x(ae, d.success.main, 0.62)), w(d.LinearProgress, "warningBg", x(ae, d.warning.main, 0.62)), w(d.Skeleton, "bg", E ? x(lt, d.text.primary, 0.11) : `rgba(${R("palette-text-primaryChannel")} / 0.11)`), w(d.Slider, "primaryTrack", x(ae, d.primary.main, 0.62)), w(d.Slider, "secondaryTrack", x(ae, d.secondary.main, 0.62)), w(d.Slider, "errorTrack", x(ae, d.error.main, 0.62)), w(d.Slider, "infoTrack", x(ae, d.info.main, 0.62)), w(d.Slider, "successTrack", x(ae, d.success.main, 0.62)), w(d.Slider, "warningTrack", x(ae, d.warning.main, 0.62));
      const D = E ? x(ie, d.background.default, 0.6825) : sr(d.background.default, 0.8);
      w(d.SnackbarContent, "bg", D), w(d.SnackbarContent, "color", ke(() => E ? dn.text.primary : d.getContrastText(D))), w(d.SpeedDialAction, "fabHoverBg", sr(d.background.paper, 0.15)), w(d.StepConnector, "border", R("palette-grey-400")), w(d.StepContent, "border", R("palette-grey-400")), w(d.Switch, "defaultColor", R("palette-common-white")), w(d.Switch, "defaultDisabledColor", R("palette-grey-100")), w(d.Switch, "primaryDisabledColor", x(ae, d.primary.main, 0.62)), w(d.Switch, "secondaryDisabledColor", x(ae, d.secondary.main, 0.62)), w(d.Switch, "errorDisabledColor", x(ae, d.error.main, 0.62)), w(d.Switch, "infoDisabledColor", x(ae, d.info.main, 0.62)), w(d.Switch, "successDisabledColor", x(ae, d.success.main, 0.62)), w(d.Switch, "warningDisabledColor", x(ae, d.warning.main, 0.62)), w(d.TableCell, "border", x(ae, x(lt, d.divider, 1), 0.88)), w(d.Tooltip, "bg", x(lt, d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      w(d.Alert, "errorColor", x(ae, d.error.light, 0.6)), w(d.Alert, "infoColor", x(ae, d.info.light, 0.6)), w(d.Alert, "successColor", x(ae, d.success.light, 0.6)), w(d.Alert, "warningColor", x(ae, d.warning.light, 0.6)), w(d.Alert, "errorFilledBg", R("palette-error-dark")), w(d.Alert, "infoFilledBg", R("palette-info-dark")), w(d.Alert, "successFilledBg", R("palette-success-dark")), w(d.Alert, "warningFilledBg", R("palette-warning-dark")), w(d.Alert, "errorFilledColor", ke(() => d.getContrastText(d.error.dark))), w(d.Alert, "infoFilledColor", ke(() => d.getContrastText(d.info.dark))), w(d.Alert, "successFilledColor", ke(() => d.getContrastText(d.success.dark))), w(d.Alert, "warningFilledColor", ke(() => d.getContrastText(d.warning.dark))), w(d.Alert, "errorStandardBg", x(ie, d.error.light, 0.9)), w(d.Alert, "infoStandardBg", x(ie, d.info.light, 0.9)), w(d.Alert, "successStandardBg", x(ie, d.success.light, 0.9)), w(d.Alert, "warningStandardBg", x(ie, d.warning.light, 0.9)), w(d.Alert, "errorIconColor", R("palette-error-main")), w(d.Alert, "infoIconColor", R("palette-info-main")), w(d.Alert, "successIconColor", R("palette-success-main")), w(d.Alert, "warningIconColor", R("palette-warning-main")), w(d.AppBar, "defaultBg", R("palette-grey-900")), w(d.AppBar, "darkBg", R("palette-background-paper")), w(d.AppBar, "darkColor", R("palette-text-primary")), w(d.Avatar, "defaultBg", R("palette-grey-600")), w(d.Button, "inheritContainedBg", R("palette-grey-800")), w(d.Button, "inheritContainedHoverBg", R("palette-grey-700")), w(d.Chip, "defaultBorder", R("palette-grey-700")), w(d.Chip, "defaultAvatarColor", R("palette-grey-300")), w(d.Chip, "defaultIconColor", R("palette-grey-300")), w(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), w(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), w(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), w(d.LinearProgress, "primaryBg", x(ie, d.primary.main, 0.5)), w(d.LinearProgress, "secondaryBg", x(ie, d.secondary.main, 0.5)), w(d.LinearProgress, "errorBg", x(ie, d.error.main, 0.5)), w(d.LinearProgress, "infoBg", x(ie, d.info.main, 0.5)), w(d.LinearProgress, "successBg", x(ie, d.success.main, 0.5)), w(d.LinearProgress, "warningBg", x(ie, d.warning.main, 0.5)), w(d.Skeleton, "bg", E ? x(lt, d.text.primary, 0.13) : `rgba(${R("palette-text-primaryChannel")} / 0.13)`), w(d.Slider, "primaryTrack", x(ie, d.primary.main, 0.5)), w(d.Slider, "secondaryTrack", x(ie, d.secondary.main, 0.5)), w(d.Slider, "errorTrack", x(ie, d.error.main, 0.5)), w(d.Slider, "infoTrack", x(ie, d.info.main, 0.5)), w(d.Slider, "successTrack", x(ie, d.success.main, 0.5)), w(d.Slider, "warningTrack", x(ie, d.warning.main, 0.5));
      const D = E ? x(ae, d.background.default, 0.985) : sr(d.background.default, 0.98);
      w(d.SnackbarContent, "bg", D), w(d.SnackbarContent, "color", ke(() => E ? Ws.text.primary : d.getContrastText(D))), w(d.SpeedDialAction, "fabHoverBg", sr(d.background.paper, 0.15)), w(d.StepConnector, "border", R("palette-grey-600")), w(d.StepContent, "border", R("palette-grey-600")), w(d.Switch, "defaultColor", R("palette-grey-300")), w(d.Switch, "defaultDisabledColor", R("palette-grey-600")), w(d.Switch, "primaryDisabledColor", x(ie, d.primary.main, 0.55)), w(d.Switch, "secondaryDisabledColor", x(ie, d.secondary.main, 0.55)), w(d.Switch, "errorDisabledColor", x(ie, d.error.main, 0.55)), w(d.Switch, "infoDisabledColor", x(ie, d.info.main, 0.55)), w(d.Switch, "successDisabledColor", x(ie, d.success.main, 0.55)), w(d.Switch, "warningDisabledColor", x(ie, d.warning.main, 0.55)), w(d.TableCell, "border", x(ie, x(lt, d.divider, 1), 0.68)), w(d.Tooltip, "bg", x(lt, d.grey[700], 0.92));
    }
    Ge(d.background, "default"), Ge(d.background, "paper"), Ge(d.common, "background"), Ge(d.common, "onBackground"), Ge(d, "divider"), Object.keys(d).forEach((D) => {
      const k = d[D];
      D !== "tonalOffset" && k && typeof k == "object" && (k.main && w(d[D], "mainChannel", Dt(Bt(k.main))), k.light && w(d[D], "lightChannel", Dt(Bt(k.light))), k.dark && w(d[D], "darkChannel", Dt(Bt(k.dark))), k.contrastText && w(d[D], "contrastTextChannel", Dt(Bt(k.contrastText))), D === "text" && (Ge(d[D], "primary"), Ge(d[D], "secondary")), D === "action" && (k.active && Ge(d[D], "active"), k.selected && Ge(d[D], "selected")));
    });
  }), A = t.reduce((B, d) => Ce(B, d), A);
  const $ = {
    prefix: s,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Cu(A),
    enableContrastVars: i
  }, {
    vars: _,
    generateThemeVars: I,
    generateStyleSheets: L
  } = Ql(A, $);
  return A.vars = _, Object.entries(A.colorSchemes[A.defaultColorScheme]).forEach(([B, d]) => {
    A[B] = d;
  }), A.generateThemeVars = I, A.generateStyleSheets = L, A.generateSpacing = function() {
    return $s(u.spacing, kn(this));
  }, A.getColorSchemeSelector = Zl(c), A.spacing = A.generateSpacing(), A.shouldSkipGeneratingVar = a, A.unstable_sxConfig = {
    ...Jt,
    ...u?.unstable_sxConfig
  }, A.unstable_sx = function(d) {
    return yt({
      sx: d,
      theme: this
    });
  }, A.toRuntimeSource = Ks, A;
}
function Ho(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Dn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Js(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = r?.mode,
    ...i
  } = e, a = s || "light", c = o?.[a], l = {
    ...o,
    ...r ? {
      [a]: {
        ...typeof c != "boolean" && c,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return pn(e, ...t);
    let u = r;
    "palette" in e || l[a] && (l[a] !== !0 ? u = l[a].palette : a === "dark" && (u = {
      mode: "dark"
    }));
    const f = pn({
      ...e,
      palette: u
    }, ...t);
    return f.defaultColorScheme = a, f.colorSchemes = l, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...l.light !== !0 && l.light,
      palette: f.palette
    }, Ho(f, "dark", l.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...l.dark !== !0 && l.dark,
      palette: f.palette
    }, Ho(f, "light", l.light)), f;
  }
  return !r && !("light" in l) && a === "light" && (l.light = !0), Pu({
    ...i,
    colorSchemes: l,
    defaultColorScheme: a,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Qs = Js();
function Iu() {
  const e = Ls(Qs);
  return process.env.NODE_ENV !== "production" && V.useDebugValue(e), e[_n] || e;
}
function ku(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Zs = (e) => ku(e) && e !== "classes", Ee = Il({
  themeId: _n,
  defaultTheme: Qs,
  rootShouldForwardProp: Zs
});
function Nu() {
  return Ds;
}
const it = Kl;
process.env.NODE_ENV !== "production" && (m.node, m.object.isRequired);
function at(e) {
  return Hl(e);
}
function pr(e) {
  const t = V.useRef(e);
  return Dl(() => {
    t.current = e;
  }), V.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function zo(...e) {
  const t = V.useRef(void 0), r = V.useCallback((n) => {
    const o = e.map((s) => {
      if (s == null)
        return null;
      if (typeof s == "function") {
        const i = s, a = i(n);
        return typeof a == "function" ? a : () => {
          i(null);
        };
      }
      return s.current = n, () => {
        s.current = null;
      };
    });
    return () => {
      o.forEach((s) => s?.());
    };
  }, e);
  return V.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
function Bn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function $u(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function mn(e, t) {
  return mn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, mn(e, t);
}
function Lu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, mn(e, t);
}
const Wo = Be.createContext(null);
function Du(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fn(e, t) {
  var r = function(s) {
    return t && ir(s) ? t(s) : s;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && xi.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Bu(e, t) {
  e = e || {}, t = t || {};
  function r(u) {
    return u in t ? t[u] : e[u];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var s in e)
    s in t ? o.length && (n[s] = o, o = []) : o.push(s);
  var i, a = {};
  for (var c in t) {
    if (n[c])
      for (i = 0; i < n[c].length; i++) {
        var l = n[c][i];
        a[n[c][i]] = r(l);
      }
    a[c] = r(c);
  }
  for (i = 0; i < o.length; i++)
    a[o[i]] = r(o[i]);
  return a;
}
function ht(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Fu(e, t) {
  return Fn(e.children, function(r) {
    return ar(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: ht(r, "appear", e),
      enter: ht(r, "enter", e),
      exit: ht(r, "exit", e)
    });
  });
}
function ju(e, t, r) {
  var n = Fn(e.children), o = Bu(t, n);
  return Object.keys(o).forEach(function(s) {
    var i = o[s];
    if (ir(i)) {
      var a = s in t, c = s in n, l = t[s], u = ir(l) && !l.props.in;
      c && (!a || u) ? o[s] = ar(i, {
        onExited: r.bind(null, i),
        in: !0,
        exit: ht(i, "exit", e),
        enter: ht(i, "enter", e)
      }) : !c && a && !u ? o[s] = ar(i, {
        in: !1
      }) : c && a && ir(l) && (o[s] = ar(i, {
        onExited: r.bind(null, i),
        in: l.props.in,
        exit: ht(i, "exit", e),
        enter: ht(i, "enter", e)
      }));
    }
  }), o;
}
var Vu = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Uu = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, jn = /* @__PURE__ */ (function(e) {
  Lu(t, e);
  function t(n, o) {
    var s;
    s = e.call(this, n, o) || this;
    var i = s.handleExited.bind(Du(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: i,
      firstRender: !0
    }, s;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, s) {
    var i = s.children, a = s.handleExited, c = s.firstRender;
    return {
      children: c ? Fu(o, a) : ju(o, i, a),
      firstRender: !1
    };
  }, r.handleExited = function(o, s) {
    var i = Fn(this.props.children);
    o.key in i || (o.props.onExited && o.props.onExited(s), this.mounted && this.setState(function(a) {
      var c = gr({}, a.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var o = this.props, s = o.component, i = o.childFactory, a = $u(o, ["component", "childFactory"]), c = this.state.contextValue, l = Vu(this.state.children).map(i);
    return delete a.appear, delete a.enter, delete a.exit, s === null ? /* @__PURE__ */ Be.createElement(Wo.Provider, {
      value: c
    }, l) : /* @__PURE__ */ Be.createElement(Wo.Provider, {
      value: c
    }, /* @__PURE__ */ Be.createElement(s, a, l));
  }, t;
})(Be.Component);
jn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: m.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: m.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: m.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: m.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: m.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: m.func
} : {};
jn.defaultProps = Uu;
const Yo = {};
function ei(e, t) {
  const r = V.useRef(Yo);
  return r.current === Yo && (r.current = e(t)), r;
}
const Gu = [];
function Hu(e) {
  V.useEffect(e, Gu);
}
class Vn {
  static create() {
    return new Vn();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function zu() {
  const e = ei(Vn.create).current;
  return Hu(e.disposeEffect), e;
}
function Wu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Yu(e, t, r, n, o) {
  const s = e[t], i = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof s == "function" && !Wu(s) && (a = "Did you accidentally provide a plain function component instead?"), s === V.Fragment && (a = "Did you accidentally provide a React.Fragment instead?"), a !== void 0 ? new Error(`Invalid ${n} \`${i}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ku = Bn(m.elementType, Yu);
function qu(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function ti(e, t, r, n) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const s = qu(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${s}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function ri(e, t, r, n) {
  return e[t] === void 0 ? null : ti(e, t, r, n);
}
function gn() {
  return null;
}
ri.isRequired = ti;
gn.isRequired = gn;
const Xu = process.env.NODE_ENV === "production" ? gn : ri;
function Ju(e) {
  return qe("MuiPaper", e);
}
Xe("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Qu = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, s = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return bt(s, Ju, o);
}, Zu = Ee("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(it(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), ni = /* @__PURE__ */ V.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiPaper"
  }), o = Iu(), {
    className: s,
    component: i = "div",
    elevation: a = 1,
    square: c = !1,
    variant: l = "elevation",
    ...u
  } = n, f = {
    ...n,
    component: i,
    elevation: a,
    square: c,
    variant: l
  }, h = Qu(f);
  return process.env.NODE_ENV !== "production" && o.shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ U.jsx(Zu, {
    as: i,
    ownerState: f,
    className: ye(h.root, s),
    ref: r,
    ...u,
    style: {
      ...l === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[a],
        ...o.vars && {
          "--Paper-overlay": o.vars.overlays?.[a]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${xr("#fff", hn(a))}, ${xr("#fff", hn(a))})`
        }
      },
      ...u.style
    }
  });
});
process.env.NODE_ENV !== "production" && (ni.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Bn(Xu, (e) => {
    const {
      elevation: t,
      variant: r
    } = e;
    return t > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: m.bool,
  /**
   * @ignore
   */
  style: m.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: m.oneOfType([m.oneOf(["elevation", "outlined"]), m.string])
});
const ef = m.oneOfType([m.func, m.object]);
function Ko(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
class Er {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Er();
  }
  static use() {
    const t = ei(Er.create).current, [r, n] = V.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, V.useEffect(t.mountEffect, [r]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = rf(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
  };
  /* Ripple API */
  start(...t) {
    this.mount().then(() => this.ref.current?.start(...t));
  }
  stop(...t) {
    this.mount().then(() => this.ref.current?.stop(...t));
  }
  pulsate(...t) {
    this.mount().then(() => this.ref.current?.pulsate(...t));
  }
}
function tf() {
  return Er.use();
}
function rf() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function oi(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: s,
    rippleSize: i,
    in: a,
    onExited: c,
    timeout: l
  } = e, [u, f] = V.useState(!1), h = ye(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), b = {
    width: i,
    height: i,
    top: -(i / 2) + s,
    left: -(i / 2) + o
  }, y = ye(r.child, u && r.childLeaving, n && r.childPulsate);
  return !a && !u && f(!0), V.useEffect(() => {
    if (!a && c != null) {
      const p = setTimeout(c, l);
      return () => {
        clearTimeout(p);
      };
    }
  }, [c, a, l]), /* @__PURE__ */ U.jsx("span", {
    className: h,
    style: b,
    children: /* @__PURE__ */ U.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (oi.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object.isRequired,
  className: m.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: m.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: m.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: m.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: m.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: m.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: m.number,
  /**
   * exit delay
   */
  timeout: m.number.isRequired
});
const Me = Xe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), yn = 550, nf = 80, of = Kt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, sf = Kt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, af = Kt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, cf = Ee("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), lf = Ee(oi, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Me.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${of};
    animation-duration: ${yn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Me.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Me.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Me.childLeaving} {
    opacity: 0;
    animation-name: ${sf};
    animation-duration: ${yn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Me.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${af};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, si = /* @__PURE__ */ V.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: s = {},
    className: i,
    ...a
  } = n, [c, l] = V.useState([]), u = V.useRef(0), f = V.useRef(null);
  V.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const h = V.useRef(!1), b = zu(), y = V.useRef(null), p = V.useRef(null), g = V.useCallback((E) => {
    const {
      pulsate: v,
      rippleX: A,
      rippleY: $,
      rippleSize: _,
      cb: I
    } = E;
    l((L) => [...L, /* @__PURE__ */ U.jsx(lf, {
      classes: {
        ripple: ye(s.ripple, Me.ripple),
        rippleVisible: ye(s.rippleVisible, Me.rippleVisible),
        ripplePulsate: ye(s.ripplePulsate, Me.ripplePulsate),
        child: ye(s.child, Me.child),
        childLeaving: ye(s.childLeaving, Me.childLeaving),
        childPulsate: ye(s.childPulsate, Me.childPulsate)
      },
      timeout: yn,
      pulsate: v,
      rippleX: A,
      rippleY: $,
      rippleSize: _
    }, u.current)]), u.current += 1, f.current = I;
  }, [s]), S = V.useCallback((E = {}, v = {}, A = () => {
  }) => {
    const {
      pulsate: $ = !1,
      center: _ = o || v.pulsate,
      fakeElement: I = !1
      // For test purposes
    } = v;
    if (E?.type === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    E?.type === "touchstart" && (h.current = !0);
    const L = I ? null : p.current, B = L ? L.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let d, R, x;
    if (_ || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      d = Math.round(B.width / 2), R = Math.round(B.height / 2);
    else {
      const {
        clientX: D,
        clientY: k
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      d = Math.round(D - B.left), R = Math.round(k - B.top);
    }
    if (_)
      x = Math.sqrt((2 * B.width ** 2 + B.height ** 2) / 3), x % 2 === 0 && (x += 1);
    else {
      const D = Math.max(Math.abs((L ? L.clientWidth : 0) - d), d) * 2 + 2, k = Math.max(Math.abs((L ? L.clientHeight : 0) - R), R) * 2 + 2;
      x = Math.sqrt(D ** 2 + k ** 2);
    }
    E?.touches ? y.current === null && (y.current = () => {
      g({
        pulsate: $,
        rippleX: d,
        rippleY: R,
        rippleSize: x,
        cb: A
      });
    }, b.start(nf, () => {
      y.current && (y.current(), y.current = null);
    })) : g({
      pulsate: $,
      rippleX: d,
      rippleY: R,
      rippleSize: x,
      cb: A
    });
  }, [o, g, b]), M = V.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), P = V.useCallback((E, v) => {
    if (b.clear(), E?.type === "touchend" && y.current) {
      y.current(), y.current = null, b.start(0, () => {
        P(E, v);
      });
      return;
    }
    y.current = null, l((A) => A.length > 0 ? A.slice(1) : A), f.current = v;
  }, [b]);
  return V.useImperativeHandle(r, () => ({
    pulsate: M,
    start: S,
    stop: P
  }), [M, S, P]), /* @__PURE__ */ U.jsx(cf, {
    className: ye(Me.root, s.root, i),
    ref: p,
    ...a,
    children: /* @__PURE__ */ U.jsx(jn, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (si.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: m.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string
});
function uf(e) {
  return qe("MuiButtonBase", e);
}
const ff = Xe("MuiButtonBase", ["root", "disabled", "focusVisible"]), df = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, i = bt({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, uf, o);
  return r && n && (i.root += ` ${n}`), i;
}, pf = Ee("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${ff.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ii = /* @__PURE__ */ V.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: s = !1,
    children: i,
    className: a,
    component: c = "button",
    disabled: l = !1,
    disableRipple: u = !1,
    disableTouchRipple: f = !1,
    focusRipple: h = !1,
    focusVisibleClassName: b,
    LinkComponent: y = "a",
    onBlur: p,
    onClick: g,
    onContextMenu: S,
    onDragLeave: M,
    onFocus: P,
    onFocusVisible: E,
    onKeyDown: v,
    onKeyUp: A,
    onMouseDown: $,
    onMouseLeave: _,
    onMouseUp: I,
    onTouchEnd: L,
    onTouchMove: B,
    onTouchStart: d,
    tabIndex: R = 0,
    TouchRippleProps: x,
    touchRippleRef: D,
    type: k,
    ...H
  } = n, se = V.useRef(null), q = tf(), O = zo(q.ref, D), [T, N] = V.useState(!1);
  l && T && N(!1), V.useImperativeHandle(o, () => ({
    focusVisible: () => {
      N(!0), se.current.focus();
    }
  }), []);
  const F = q.shouldMount && !u && !l;
  V.useEffect(() => {
    T && h && !u && q.pulsate();
  }, [u, h, T, q]);
  const j = He(q, "start", $, f), Y = He(q, "stop", S, f), z = He(q, "stop", M, f), G = He(q, "stop", I, f), W = He(q, "stop", (K) => {
    T && K.preventDefault(), _ && _(K);
  }, f), J = He(q, "start", d, f), X = He(q, "stop", L, f), be = He(q, "stop", B, f), C = He(q, "stop", (K) => {
    Ko(K.target) || N(!1), p && p(K);
  }, !1), Te = pr((K) => {
    se.current || (se.current = K.currentTarget), Ko(K.target) && (N(!0), E && E(K)), P && P(K);
  }), _e = () => {
    const K = se.current;
    return c && c !== "button" && !(K.tagName === "A" && K.href);
  }, ct = pr((K) => {
    h && !K.repeat && T && K.key === " " && q.stop(K, () => {
      q.start(K);
    }), K.target === K.currentTarget && _e() && K.key === " " && K.preventDefault(), v && v(K), K.target === K.currentTarget && _e() && K.key === "Enter" && !l && (K.preventDefault(), g && g(K));
  }), bi = pr((K) => {
    h && K.key === " " && T && !K.defaultPrevented && q.stop(K, () => {
      q.pulsate(K);
    }), A && A(K), g && K.target === K.currentTarget && _e() && K.key === " " && !K.defaultPrevented && g(K);
  });
  let Qt = c;
  Qt === "button" && (H.href || H.to) && (Qt = y);
  const Ot = {};
  if (Qt === "button") {
    const K = !!H.formAction;
    Ot.type = k === void 0 && !K ? "button" : k, Ot.disabled = l;
  } else
    !H.href && !H.to && (Ot.role = "button"), l && (Ot["aria-disabled"] = l);
  const vi = zo(r, se), Hn = {
    ...n,
    centerRipple: s,
    component: c,
    disabled: l,
    disableRipple: u,
    disableTouchRipple: f,
    focusRipple: h,
    tabIndex: R,
    focusVisible: T
  }, Ti = df(Hn);
  return /* @__PURE__ */ U.jsxs(pf, {
    as: Qt,
    className: ye(Ti.root, a),
    ownerState: Hn,
    onBlur: C,
    onClick: g,
    onContextMenu: Y,
    onFocus: Te,
    onKeyDown: ct,
    onKeyUp: bi,
    onMouseDown: j,
    onMouseLeave: W,
    onMouseUp: G,
    onDragLeave: z,
    onTouchEnd: X,
    onTouchMove: be,
    onTouchStart: J,
    ref: vi,
    tabIndex: l ? -1 : R,
    type: k,
    ...Ot,
    ...H,
    children: [i, F ? /* @__PURE__ */ U.jsx(si, {
      ref: O,
      center: s,
      ...x
    }) : null]
  });
});
function He(e, t, r, n = !1) {
  return pr((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (ii.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: ef,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: m.bool,
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Ku,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: m.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: m.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: m.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: m.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: m.string,
  /**
   * @ignore
   */
  formAction: m.oneOfType([m.func, m.string]),
  /**
   * @ignore
   */
  href: m.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: m.elementType,
  /**
   * @ignore
   */
  onBlur: m.func,
  /**
   * @ignore
   */
  onClick: m.func,
  /**
   * @ignore
   */
  onContextMenu: m.func,
  /**
   * @ignore
   */
  onDragLeave: m.func,
  /**
   * @ignore
   */
  onFocus: m.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: m.func,
  /**
   * @ignore
   */
  onKeyDown: m.func,
  /**
   * @ignore
   */
  onKeyUp: m.func,
  /**
   * @ignore
   */
  onMouseDown: m.func,
  /**
   * @ignore
   */
  onMouseLeave: m.func,
  /**
   * @ignore
   */
  onMouseUp: m.func,
  /**
   * @ignore
   */
  onTouchEnd: m.func,
  /**
   * @ignore
   */
  onTouchMove: m.func,
  /**
   * @ignore
   */
  onTouchStart: m.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * @default 0
   */
  tabIndex: m.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: m.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: m.oneOfType([m.func, m.shape({
    current: m.shape({
      pulsate: m.func.isRequired,
      start: m.func.isRequired,
      stop: m.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: m.oneOfType([m.oneOf(["button", "reset", "submit"]), m.string])
});
function hf(e) {
  return typeof e.main == "string";
}
function mf(e, t = []) {
  if (!hf(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Fr(e = []) {
  return ([, t]) => t && mf(t, e);
}
function gf(e) {
  return qe("MuiCircularProgress", e);
}
Xe("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Ie = 44, bn = Kt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, vn = Kt`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, yf = typeof bn != "string" ? Pn`
        animation: ${bn} 1.4s linear infinite;
      ` : null, bf = typeof vn != "string" ? Pn`
        animation: ${vn} 1.4s ease-in-out infinite;
      ` : null, vf = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, s = {
    root: ["root", r, `color${fe(n)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", `circle${fe(r)}`, o && "circleDisableShrink"]
  };
  return bt(s, gf, t);
}, Tf = Ee("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${fe(r.color)}`]];
  }
})(it(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: yf || {
      animation: `${bn} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Fr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), xf = Ee("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), Ef = Ee("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${fe(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(it(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: bf || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${vn} 1.4s ease-in-out infinite`
    }
  }]
}))), Sf = Ee("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(it(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), ai = /* @__PURE__ */ V.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: s = "primary",
    disableShrink: i = !1,
    enableTrackSlot: a = !1,
    size: c = 40,
    style: l,
    thickness: u = 3.6,
    value: f = 0,
    variant: h = "indeterminate",
    ...b
  } = n, y = {
    ...n,
    color: s,
    disableShrink: i,
    size: c,
    thickness: u,
    value: f,
    variant: h,
    enableTrackSlot: a
  }, p = vf(y), g = {}, S = {}, M = {};
  if (h === "determinate") {
    const P = 2 * Math.PI * ((Ie - u) / 2);
    g.strokeDasharray = P.toFixed(3), M["aria-valuenow"] = Math.round(f), g.strokeDashoffset = `${((100 - f) / 100 * P).toFixed(3)}px`, S.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ U.jsx(Tf, {
    className: ye(p.root, o),
    style: {
      width: c,
      height: c,
      ...S,
      ...l
    },
    ownerState: y,
    ref: r,
    role: "progressbar",
    ...M,
    ...b,
    children: /* @__PURE__ */ U.jsxs(xf, {
      className: p.svg,
      ownerState: y,
      viewBox: `${Ie / 2} ${Ie / 2} ${Ie} ${Ie}`,
      children: [a ? /* @__PURE__ */ U.jsx(Sf, {
        className: p.track,
        ownerState: y,
        cx: Ie,
        cy: Ie,
        r: (Ie - u) / 2,
        fill: "none",
        strokeWidth: u,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ U.jsx(Ef, {
        className: p.circle,
        style: g,
        ownerState: y,
        cx: Ie,
        cy: Ie,
        r: (Ie - u) / 2,
        fill: "none",
        strokeWidth: u
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (ai.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: m.oneOfType([m.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), m.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Bn(m.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * If `true`, a track circle slot is mounted to show a subtle background for the progress.
   * The `size` and `thickness` apply to the track slot to be consistent with the progress circle.
   * @default false
   */
  enableTrackSlot: m.bool,
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: m.oneOfType([m.number, m.string]),
  /**
   * @ignore
   */
  style: m.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: m.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: m.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: m.oneOf(["determinate", "indeterminate"])
});
function _f(e) {
  return qe("MuiTypography", e);
}
Xe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const wf = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Rf = Nu(), Cf = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: s,
    classes: i
  } = e, a = {
    root: ["root", s, e.align !== "inherit" && `align${fe(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return bt(a, _f, i);
}, Af = Ee("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${fe(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(it(({
  theme: e
}) => ({
  margin: 0,
  variants: [{
    props: {
      variant: "inherit"
    },
    style: {
      // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
      font: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  }, ...Object.entries(e.typography).filter(([t, r]) => t !== "inherit" && r && typeof r == "object").map(([t, r]) => ({
    props: {
      variant: t
    },
    style: r
  })), ...Object.entries(e.palette).filter(Fr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette?.text || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({
    props: {
      color: `text${fe(t)}`
    },
    style: {
      color: (e.vars || e).palette.text[t]
    }
  })), {
    props: ({
      ownerState: t
    }) => t.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.paragraph,
    style: {
      marginBottom: 16
    }
  }]
}))), qo = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, ci = /* @__PURE__ */ V.forwardRef(function(t, r) {
  const {
    color: n,
    ...o
  } = at({
    props: t,
    name: "MuiTypography"
  }), s = !wf[n], i = Rf({
    ...o,
    ...s && {
      color: n
    }
  }), {
    align: a = "inherit",
    className: c,
    component: l,
    gutterBottom: u = !1,
    noWrap: f = !1,
    paragraph: h = !1,
    variant: b = "body1",
    variantMapping: y = qo,
    ...p
  } = i, g = {
    ...i,
    align: a,
    color: n,
    className: c,
    component: l,
    gutterBottom: u,
    noWrap: f,
    paragraph: h,
    variant: b,
    variantMapping: y
  }, S = l || (h ? "p" : y[b] || qo[b]) || "span", M = Cf(g);
  return /* @__PURE__ */ U.jsx(Af, {
    as: S,
    ref: r,
    className: ye(M.root, c),
    ...p,
    ownerState: g,
    style: {
      ...a !== "inherit" && {
        "--Typography-textAlign": a
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (ci.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: m.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: m.oneOfType([m.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), m.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: m.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: m.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: m.bool,
  /**
   * @ignore
   */
  style: m.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: m.oneOfType([m.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), m.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: m.object
});
function Mf(e) {
  return qe("MuiAppBar", e);
}
Xe("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const Of = (e) => {
  const {
    color: t,
    position: r,
    classes: n
  } = e, o = {
    root: ["root", `color${fe(t)}`, `position${fe(r)}`]
  };
  return bt(o, Mf, n);
}, Xo = (e, t) => e ? `${e?.replace(")", "")}, ${t})` : t, Pf = Ee(ni, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[`position${fe(r.position)}`], t[`color${fe(r.color)}`]];
  }
})(it(({
  theme: e
}) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box",
  // Prevent padding issue with the Modal and fixed positioned AppBar.
  flexShrink: 0,
  variants: [{
    props: {
      position: "fixed"
    },
    style: {
      position: "fixed",
      zIndex: (e.vars || e).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0,
      "@media print": {
        // Prevent the app bar to be visible on each printed page.
        position: "absolute"
      }
    }
  }, {
    props: {
      position: "absolute"
    },
    style: {
      position: "absolute",
      zIndex: (e.vars || e).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0
    }
  }, {
    props: {
      position: "sticky"
    },
    style: {
      position: "sticky",
      zIndex: (e.vars || e).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0
    }
  }, {
    props: {
      position: "static"
    },
    style: {
      position: "static"
    }
  }, {
    props: {
      position: "relative"
    },
    style: {
      position: "relative"
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      "--AppBar-color": "inherit",
      color: "var(--AppBar-color)"
    }
  }, {
    props: {
      color: "default"
    },
    style: {
      "--AppBar-background": e.vars ? e.vars.palette.AppBar.defaultBg : e.palette.grey[100],
      "--AppBar-color": e.vars ? e.vars.palette.text.primary : e.palette.getContrastText(e.palette.grey[100]),
      ...e.applyStyles("dark", {
        "--AppBar-background": e.vars ? e.vars.palette.AppBar.defaultBg : e.palette.grey[900],
        "--AppBar-color": e.vars ? e.vars.palette.text.primary : e.palette.getContrastText(e.palette.grey[900])
      })
    }
  }, ...Object.entries(e.palette).filter(Fr(["contrastText"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--AppBar-background": (e.vars ?? e).palette[t].main,
      "--AppBar-color": (e.vars ?? e).palette[t].contrastText
    }
  })), {
    props: (t) => t.enableColorOnDark === !0 && !["inherit", "transparent"].includes(t.color),
    style: {
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)"
    }
  }, {
    props: (t) => t.enableColorOnDark === !1 && !["inherit", "transparent"].includes(t.color),
    style: {
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)",
      ...e.applyStyles("dark", {
        backgroundColor: e.vars ? Xo(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null,
        color: e.vars ? Xo(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null
      })
    }
  }, {
    props: {
      color: "transparent"
    },
    style: {
      "--AppBar-background": "transparent",
      "--AppBar-color": "inherit",
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)",
      ...e.applyStyles("dark", {
        backgroundImage: "none"
      })
    }
  }]
}))), li = /* @__PURE__ */ V.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiAppBar"
  }), {
    className: o,
    color: s = "primary",
    enableColorOnDark: i = !1,
    position: a = "fixed",
    ...c
  } = n, l = {
    ...n,
    color: s,
    position: a,
    enableColorOnDark: i
  }, u = Of(l);
  return /* @__PURE__ */ U.jsx(Pf, {
    square: !0,
    component: "header",
    ownerState: l,
    elevation: 4,
    className: ye(u.root, o, a === "fixed" && "mui-fixed"),
    ref: r,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (li.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: m.oneOfType([m.oneOf(["default", "inherit", "primary", "secondary", "transparent", "error", "info", "success", "warning"]), m.string]),
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 4
   */
  elevation: m.number,
  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark: m.bool,
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position: m.oneOf(["absolute", "fixed", "relative", "static", "sticky"]),
  /**
   * If `false`, rounded corners are enabled.
   * @default true
   */
  square: m.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object])
});
const If = Xe("MuiBox", ["root"]), kf = Js(), Vt = Rl({
  themeId: _n,
  defaultTheme: kf,
  defaultClassName: If.root,
  generateClassName: Bs.generate
});
process.env.NODE_ENV !== "production" && (Vt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: m.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object])
});
function Nf(e) {
  return qe("MuiButton", e);
}
const ut = Xe("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), ui = /* @__PURE__ */ V.createContext({});
process.env.NODE_ENV !== "production" && (ui.displayName = "ButtonGroupContext");
const fi = /* @__PURE__ */ V.createContext(void 0);
process.env.NODE_ENV !== "production" && (fi.displayName = "ButtonGroupButtonContext");
const $f = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: s,
    loading: i,
    loadingPosition: a,
    classes: c
  } = e, l = {
    root: ["root", i && "loading", s, `${s}${fe(t)}`, `size${fe(o)}`, `${s}Size${fe(o)}`, `color${fe(t)}`, r && "disableElevation", n && "fullWidth", i && `loadingPosition${fe(a)}`],
    startIcon: ["icon", "startIcon", `iconSize${fe(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${fe(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, u = bt(l, Nf, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...u
  };
}, di = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], Lf = Ee(ii, {
  shouldForwardProp: (e) => Zs(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${fe(r.color)}`], t[`size${fe(r.size)}`], t[`${r.variant}Size${fe(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(it(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${ut.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${ut.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${ut.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${ut.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Fr()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.alpha((e.vars || e).palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${ut.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${ut.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${ut.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Df = Ee("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${fe(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...di]
})), Bf = Ee("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${fe(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...di]
})), Ff = Ee("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), Jo = Ee("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Tn = /* @__PURE__ */ V.forwardRef(function(t, r) {
  const n = V.useContext(ui), o = V.useContext(fi), s = Tr(n, t), i = at({
    props: s,
    name: "MuiButton"
  }), {
    children: a,
    color: c = "primary",
    component: l = "button",
    className: u,
    disabled: f = !1,
    disableElevation: h = !1,
    disableFocusRipple: b = !1,
    endIcon: y,
    focusVisibleClassName: p,
    fullWidth: g = !1,
    id: S,
    loading: M = null,
    loadingIndicator: P,
    loadingPosition: E = "center",
    size: v = "medium",
    startIcon: A,
    type: $,
    variant: _ = "text",
    ...I
  } = i, L = Yl(S), B = P ?? /* @__PURE__ */ U.jsx(ai, {
    "aria-labelledby": L,
    color: "inherit",
    size: 16
  }), d = {
    ...i,
    color: c,
    component: l,
    disabled: f,
    disableElevation: h,
    disableFocusRipple: b,
    fullWidth: g,
    loading: M,
    loadingIndicator: B,
    loadingPosition: E,
    size: v,
    type: $,
    variant: _
  }, R = $f(d), x = (A || M && E === "start") && /* @__PURE__ */ U.jsx(Df, {
    className: R.startIcon,
    ownerState: d,
    children: A || /* @__PURE__ */ U.jsx(Jo, {
      className: R.loadingIconPlaceholder,
      ownerState: d
    })
  }), D = (y || M && E === "end") && /* @__PURE__ */ U.jsx(Bf, {
    className: R.endIcon,
    ownerState: d,
    children: y || /* @__PURE__ */ U.jsx(Jo, {
      className: R.loadingIconPlaceholder,
      ownerState: d
    })
  }), k = o || "", H = typeof M == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ U.jsx("span", {
      className: R.loadingWrapper,
      style: {
        display: "contents"
      },
      children: M && /* @__PURE__ */ U.jsx(Ff, {
        className: R.loadingIndicator,
        ownerState: d,
        children: B
      })
    })
  ) : null;
  return /* @__PURE__ */ U.jsxs(Lf, {
    ownerState: d,
    className: ye(n.className, R.root, u, k),
    component: l,
    disabled: f || M,
    focusRipple: !b,
    focusVisibleClassName: ye(R.focusVisible, p),
    ref: r,
    type: $,
    id: M ? L : S,
    ...I,
    classes: R,
    children: [x, E !== "end" && H, a, E === "end" && H, D]
  });
});
process.env.NODE_ENV !== "production" && (Tn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: m.oneOfType([m.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), m.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: m.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: m.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: m.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: m.bool,
  /**
   * Element placed after the children.
   */
  endIcon: m.node,
  /**
   * @ignore
   */
  focusVisibleClassName: m.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: m.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: m.string,
  /**
   * @ignore
   */
  id: m.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: m.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: m.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: m.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: m.oneOfType([m.oneOf(["small", "medium", "large"]), m.string]),
  /**
   * Element placed before the children.
   */
  startIcon: m.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * @ignore
   */
  type: m.oneOfType([m.oneOf(["button", "reset", "submit"]), m.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: m.oneOfType([m.oneOf(["contained", "outlined", "text"]), m.string])
});
function jf(e) {
  return qe("MuiToolbar", e);
}
Xe("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const Vf = (e) => {
  const {
    classes: t,
    disableGutters: r,
    variant: n
  } = e;
  return bt({
    root: ["root", !r && "gutters", n]
  }, jf, t);
}, Uf = Ee("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.disableGutters && t.gutters, t[r.variant]];
  }
})(it(({
  theme: e
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: e.spacing(2),
      paddingRight: e.spacing(2),
      [e.breakpoints.up("sm")]: {
        paddingLeft: e.spacing(3),
        paddingRight: e.spacing(3)
      }
    }
  }, {
    props: {
      variant: "dense"
    },
    style: {
      minHeight: 48
    }
  }, {
    props: {
      variant: "regular"
    },
    style: e.mixins.toolbar
  }]
}))), pi = /* @__PURE__ */ V.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiToolbar"
  }), {
    className: o,
    component: s = "div",
    disableGutters: i = !1,
    variant: a = "regular",
    ...c
  } = n, l = {
    ...n,
    component: s,
    disableGutters: i,
    variant: a
  }, u = Vf(l);
  return /* @__PURE__ */ U.jsx(Uf, {
    as: s,
    className: ye(u.root, o),
    ref: r,
    ownerState: l,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (pi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: m.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: m.oneOfType([m.oneOf(["dense", "regular"]), m.string])
});
const Gf = (e) => {
  const [t, r] = hr({
    data: null,
    error: null,
    loading: !1
  }), n = ss(async () => {
    r((o) => ({ ...o, error: null, loading: !0 }));
    try {
      const o = await fetch(e);
      if (!o.ok)
        throw new Error(
          `Failed to fetch JSON: ${o.status} ${o.statusText}`
        );
      const s = await o.json();
      if (!s || typeof s != "object")
        throw new Error("Invalid JSON: Expected an object");
      if (!s.glbUrl || typeof s.glbUrl != "string")
        throw new Error("Invalid JSON: Missing or invalid glbUrl property");
      if (!Array.isArray(s.availableColors))
        throw new Error("Invalid JSON: availableColors must be an array");
      if (s.availableColors.filter(
        (a) => typeof a != "string"
      ).length > 0)
        throw new Error("Invalid JSON: All availableColors must be strings");
      r({
        data: s,
        error: null,
        loading: !1
      });
    } catch (o) {
      r({
        data: null,
        error: o instanceof Error ? o.message : "Unknown error occurred",
        loading: !1
      });
    }
  }, [e]);
  return tt(() => {
    n();
  }, [n]), t;
};
Be.createContext(null);
const Hf = Be.createContext(null), hi = () => {
  const e = os(Hf);
  if (!e)
    throw new Error(
      "useModelStateContext must be used within ModelStateContextProvider"
    );
  return e;
}, mi = Be.createContext(null), zf = ({
  children: e,
  state: t
}) => /* @__PURE__ */ U.jsx(mi.Provider, { value: t, children: e });
function Qo(e, t) {
  if (t === _i)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), e;
  if (t === on || t === is) {
    let r = e.getIndex();
    if (r === null) {
      const i = [], a = e.getAttribute("position");
      if (a !== void 0) {
        for (let c = 0; c < a.count; c++)
          i.push(c);
        e.setIndex(i), r = e.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
    }
    const n = r.count - 2, o = [];
    if (t === on)
      for (let i = 1; i <= n; i++)
        o.push(r.getX(0)), o.push(r.getX(i)), o.push(r.getX(i + 1));
    else
      for (let i = 0; i < n; i++)
        i % 2 === 0 ? (o.push(r.getX(i)), o.push(r.getX(i + 1)), o.push(r.getX(i + 2))) : (o.push(r.getX(i + 2)), o.push(r.getX(i + 1)), o.push(r.getX(i)));
    o.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = e.clone();
    return s.setIndex(o), s.clearGroups(), s;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), e;
}
class Wf extends as {
  /**
   * Constructs a new glTF loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(t) {
    super(t), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(r) {
      return new Jf(r);
    }), this.register(function(r) {
      return new Qf(r);
    }), this.register(function(r) {
      return new ad(r);
    }), this.register(function(r) {
      return new cd(r);
    }), this.register(function(r) {
      return new ld(r);
    }), this.register(function(r) {
      return new ed(r);
    }), this.register(function(r) {
      return new td(r);
    }), this.register(function(r) {
      return new rd(r);
    }), this.register(function(r) {
      return new nd(r);
    }), this.register(function(r) {
      return new Xf(r);
    }), this.register(function(r) {
      return new od(r);
    }), this.register(function(r) {
      return new Zf(r);
    }), this.register(function(r) {
      return new id(r);
    }), this.register(function(r) {
      return new sd(r);
    }), this.register(function(r) {
      return new Kf(r);
    }), this.register(function(r) {
      return new ud(r);
    }), this.register(function(r) {
      return new fd(r);
    });
  }
  /**
   * Starts loading from the given URL and passes the loaded glTF asset
   * to the `onLoad()` callback.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(GLTFLoader~LoadObject)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  load(t, r, n, o) {
    const s = this;
    let i;
    if (this.resourcePath !== "")
      i = this.resourcePath;
    else if (this.path !== "") {
      const l = Ft.extractUrlBase(t);
      i = Ft.resolveURL(l, this.path);
    } else
      i = Ft.extractUrlBase(t);
    this.manager.itemStart(t);
    const a = function(l) {
      o ? o(l) : console.error(l), s.manager.itemError(t), s.manager.itemEnd(t);
    }, c = new Sn(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(t, function(l) {
      try {
        s.parse(l, i, function(u) {
          r(u), s.manager.itemEnd(t);
        }, a);
      } catch (u) {
        a(u);
      }
    }, n, a);
  }
  /**
   * Sets the given Draco loader to this loader. Required for decoding assets
   * compressed with the `KHR_draco_mesh_compression` extension.
   *
   * @param {DRACOLoader} dracoLoader - The Draco loader to set.
   * @return {GLTFLoader} A reference to this loader.
   */
  setDRACOLoader(t) {
    return this.dracoLoader = t, this;
  }
  /**
   * Sets the given KTX2 loader to this loader. Required for loading KTX2
   * compressed textures.
   *
   * @param {KTX2Loader} ktx2Loader - The KTX2 loader to set.
   * @return {GLTFLoader} A reference to this loader.
   */
  setKTX2Loader(t) {
    return this.ktx2Loader = t, this;
  }
  /**
   * Sets the given meshopt decoder. Required for decoding assets
   * compressed with the `EXT_meshopt_compression` extension.
   *
   * @param {Object} meshoptDecoder - The meshopt decoder to set.
   * @return {GLTFLoader} A reference to this loader.
   */
  setMeshoptDecoder(t) {
    return this.meshoptDecoder = t, this;
  }
  /**
   * Registers a plugin callback. This API is internally used to implement the various
   * glTF extensions but can also used by third-party code to add additional logic
   * to the loader.
   *
   * @param {function(parser:GLTFParser)} callback - The callback function to register.
   * @return {GLTFLoader} A reference to this loader.
   */
  register(t) {
    return this.pluginCallbacks.indexOf(t) === -1 && this.pluginCallbacks.push(t), this;
  }
  /**
   * Unregisters a plugin callback.
   *
   * @param {Function} callback - The callback function to unregister.
   * @return {GLTFLoader} A reference to this loader.
   */
  unregister(t) {
    return this.pluginCallbacks.indexOf(t) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t), 1), this;
  }
  /**
   * Parses the given FBX data and returns the resulting group.
   *
   * @param {string|ArrayBuffer} data - The raw glTF data.
   * @param {string} path - The URL base path.
   * @param {function(GLTFLoader~LoadObject)} onLoad - Executed when the loading process has been finished.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  parse(t, r, n, o) {
    let s;
    const i = {}, a = {}, c = new TextDecoder();
    if (typeof t == "string")
      s = JSON.parse(t);
    else if (t instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(t, 0, 4)) === gi) {
        try {
          i[Q.KHR_BINARY_GLTF] = new dd(t);
        } catch (f) {
          o && o(f);
          return;
        }
        s = JSON.parse(i[Q.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(c.decode(t));
    else
      s = t;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      o && o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new wd(s, {
      path: r || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const f = this.pluginCallbacks[u](l);
      f.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[f.name] = f, i[f.name] = !0;
    }
    if (s.extensionsUsed)
      for (let u = 0; u < s.extensionsUsed.length; ++u) {
        const f = s.extensionsUsed[u], h = s.extensionsRequired || [];
        switch (f) {
          case Q.KHR_MATERIALS_UNLIT:
            i[f] = new qf();
            break;
          case Q.KHR_DRACO_MESH_COMPRESSION:
            i[f] = new pd(s, this.dracoLoader);
            break;
          case Q.KHR_TEXTURE_TRANSFORM:
            i[f] = new hd();
            break;
          case Q.KHR_MESH_QUANTIZATION:
            i[f] = new md();
            break;
          default:
            h.indexOf(f) >= 0 && a[f] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + f + '".');
        }
      }
    l.setExtensions(i), l.setPlugins(a), l.parse(n, o);
  }
  /**
   * Async version of {@link GLTFLoader#parse}.
   *
   * @async
   * @param {string|ArrayBuffer} data - The raw glTF data.
   * @param {string} path - The URL base path.
   * @return {Promise<GLTFLoader~LoadObject>} A Promise that resolves with the loaded glTF when the parsing has been finished.
   */
  parseAsync(t, r) {
    const n = this;
    return new Promise(function(o, s) {
      n.parse(t, r, o, s);
    });
  }
}
function Yf() {
  let e = {};
  return {
    get: function(t) {
      return e[t];
    },
    add: function(t, r) {
      e[t] = r;
    },
    remove: function(t) {
      delete e[t];
    },
    removeAll: function() {
      e = {};
    }
  };
}
const Q = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class Kf {
  constructor(t) {
    this.parser = t, this.name = Q.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const t = this.parser, r = this.parser.json.nodes || [];
    for (let n = 0, o = r.length; n < o; n++) {
      const s = r[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && t._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(t) {
    const r = this.parser, n = "light:" + t;
    let o = r.cache.get(n);
    if (o) return o;
    const s = r.json, c = ((s.extensions && s.extensions[this.name] || {}).lights || [])[t];
    let l;
    const u = new gt(16777215);
    c.color !== void 0 && u.setRGB(c.color[0], c.color[1], c.color[2], je);
    const f = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new Ci(u), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new Ri(u), l.distance = f;
        break;
      case "spot":
        l = new wi(u), l.distance = f, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), Ne(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = r.createUniqueName(c.name || "light_" + t), o = Promise.resolve(l), r.cache.add(n, o), o;
  }
  getDependency(t, r) {
    if (t === "light")
      return this._loadLight(r);
  }
  createNodeAttachment(t) {
    const r = this, n = this.parser, s = n.json.nodes[t], a = (s.extensions && s.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(c) {
      return n._getNodeRef(r.cache, a, c);
    });
  }
}
class qf {
  constructor() {
    this.name = Q.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Lt;
  }
  extendParams(t, r, n) {
    const o = [];
    t.color = new gt(1, 1, 1), t.opacity = 1;
    const s = r.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const i = s.baseColorFactor;
        t.color.setRGB(i[0], i[1], i[2], je), t.opacity = i[3];
      }
      s.baseColorTexture !== void 0 && o.push(n.assignTexture(t, "map", s.baseColorTexture, Ut));
    }
    return Promise.all(o);
  }
}
class Xf {
  constructor(t) {
    this.parser = t, this.name = Q.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(t, r) {
    const o = this.parser.json.materials[t];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const s = o.extensions[this.name].emissiveStrength;
    return s !== void 0 && (r.emissiveIntensity = s), Promise.resolve();
  }
}
class Jf {
  constructor(t) {
    this.parser = t, this.name = Q.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(t, r) {
    const n = this.parser, o = n.json.materials[t];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const s = [], i = o.extensions[this.name];
    if (i.clearcoatFactor !== void 0 && (r.clearcoat = i.clearcoatFactor), i.clearcoatTexture !== void 0 && s.push(n.assignTexture(r, "clearcoatMap", i.clearcoatTexture)), i.clearcoatRoughnessFactor !== void 0 && (r.clearcoatRoughness = i.clearcoatRoughnessFactor), i.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(r, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), i.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(r, "clearcoatNormalMap", i.clearcoatNormalTexture)), i.clearcoatNormalTexture.scale !== void 0)) {
      const a = i.clearcoatNormalTexture.scale;
      r.clearcoatNormalScale = new cs(a, a);
    }
    return Promise.all(s);
  }
}
class Qf {
  constructor(t) {
    this.parser = t, this.name = Q.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(t, r) {
    const o = this.parser.json.materials[t];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const s = o.extensions[this.name];
    return r.dispersion = s.dispersion !== void 0 ? s.dispersion : 0, Promise.resolve();
  }
}
class Zf {
  constructor(t) {
    this.parser = t, this.name = Q.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(t, r) {
    const n = this.parser, o = n.json.materials[t];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const s = [], i = o.extensions[this.name];
    return i.iridescenceFactor !== void 0 && (r.iridescence = i.iridescenceFactor), i.iridescenceTexture !== void 0 && s.push(n.assignTexture(r, "iridescenceMap", i.iridescenceTexture)), i.iridescenceIor !== void 0 && (r.iridescenceIOR = i.iridescenceIor), r.iridescenceThicknessRange === void 0 && (r.iridescenceThicknessRange = [100, 400]), i.iridescenceThicknessMinimum !== void 0 && (r.iridescenceThicknessRange[0] = i.iridescenceThicknessMinimum), i.iridescenceThicknessMaximum !== void 0 && (r.iridescenceThicknessRange[1] = i.iridescenceThicknessMaximum), i.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(r, "iridescenceThicknessMap", i.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class ed {
  constructor(t) {
    this.parser = t, this.name = Q.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(t, r) {
    const n = this.parser, o = n.json.materials[t];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const s = [];
    r.sheenColor = new gt(0, 0, 0), r.sheenRoughness = 0, r.sheen = 1;
    const i = o.extensions[this.name];
    if (i.sheenColorFactor !== void 0) {
      const a = i.sheenColorFactor;
      r.sheenColor.setRGB(a[0], a[1], a[2], je);
    }
    return i.sheenRoughnessFactor !== void 0 && (r.sheenRoughness = i.sheenRoughnessFactor), i.sheenColorTexture !== void 0 && s.push(n.assignTexture(r, "sheenColorMap", i.sheenColorTexture, Ut)), i.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(r, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(s);
  }
}
class td {
  constructor(t) {
    this.parser = t, this.name = Q.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(t, r) {
    const n = this.parser, o = n.json.materials[t];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const s = [], i = o.extensions[this.name];
    return i.transmissionFactor !== void 0 && (r.transmission = i.transmissionFactor), i.transmissionTexture !== void 0 && s.push(n.assignTexture(r, "transmissionMap", i.transmissionTexture)), Promise.all(s);
  }
}
class rd {
  constructor(t) {
    this.parser = t, this.name = Q.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(t, r) {
    const n = this.parser, o = n.json.materials[t];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const s = [], i = o.extensions[this.name];
    r.thickness = i.thicknessFactor !== void 0 ? i.thicknessFactor : 0, i.thicknessTexture !== void 0 && s.push(n.assignTexture(r, "thicknessMap", i.thicknessTexture)), r.attenuationDistance = i.attenuationDistance || 1 / 0;
    const a = i.attenuationColor || [1, 1, 1];
    return r.attenuationColor = new gt().setRGB(a[0], a[1], a[2], je), Promise.all(s);
  }
}
class nd {
  constructor(t) {
    this.parser = t, this.name = Q.KHR_MATERIALS_IOR;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(t, r) {
    const o = this.parser.json.materials[t];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const s = o.extensions[this.name];
    return r.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class od {
  constructor(t) {
    this.parser = t, this.name = Q.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(t, r) {
    const n = this.parser, o = n.json.materials[t];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const s = [], i = o.extensions[this.name];
    r.specularIntensity = i.specularFactor !== void 0 ? i.specularFactor : 1, i.specularTexture !== void 0 && s.push(n.assignTexture(r, "specularIntensityMap", i.specularTexture));
    const a = i.specularColorFactor || [1, 1, 1];
    return r.specularColor = new gt().setRGB(a[0], a[1], a[2], je), i.specularColorTexture !== void 0 && s.push(n.assignTexture(r, "specularColorMap", i.specularColorTexture, Ut)), Promise.all(s);
  }
}
class sd {
  constructor(t) {
    this.parser = t, this.name = Q.EXT_MATERIALS_BUMP;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(t, r) {
    const n = this.parser, o = n.json.materials[t];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const s = [], i = o.extensions[this.name];
    return r.bumpScale = i.bumpFactor !== void 0 ? i.bumpFactor : 1, i.bumpTexture !== void 0 && s.push(n.assignTexture(r, "bumpMap", i.bumpTexture)), Promise.all(s);
  }
}
class id {
  constructor(t) {
    this.parser = t, this.name = Q.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(t, r) {
    const n = this.parser, o = n.json.materials[t];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const s = [], i = o.extensions[this.name];
    return i.anisotropyStrength !== void 0 && (r.anisotropy = i.anisotropyStrength), i.anisotropyRotation !== void 0 && (r.anisotropyRotation = i.anisotropyRotation), i.anisotropyTexture !== void 0 && s.push(n.assignTexture(r, "anisotropyMap", i.anisotropyTexture)), Promise.all(s);
  }
}
class ad {
  constructor(t) {
    this.parser = t, this.name = Q.KHR_TEXTURE_BASISU;
  }
  loadTexture(t) {
    const r = this.parser, n = r.json, o = n.textures[t];
    if (!o.extensions || !o.extensions[this.name])
      return null;
    const s = o.extensions[this.name], i = r.options.ktx2Loader;
    if (!i) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return r.loadTextureImage(t, s.source, i);
  }
}
class cd {
  constructor(t) {
    this.parser = t, this.name = Q.EXT_TEXTURE_WEBP;
  }
  loadTexture(t) {
    const r = this.name, n = this.parser, o = n.json, s = o.textures[t];
    if (!s.extensions || !s.extensions[r])
      return null;
    const i = s.extensions[r], a = o.images[i.source];
    let c = n.textureLoader;
    if (a.uri) {
      const l = n.options.manager.getHandler(a.uri);
      l !== null && (c = l);
    }
    return n.loadTextureImage(t, i.source, c);
  }
}
class ld {
  constructor(t) {
    this.parser = t, this.name = Q.EXT_TEXTURE_AVIF;
  }
  loadTexture(t) {
    const r = this.name, n = this.parser, o = n.json, s = o.textures[t];
    if (!s.extensions || !s.extensions[r])
      return null;
    const i = s.extensions[r], a = o.images[i.source];
    let c = n.textureLoader;
    if (a.uri) {
      const l = n.options.manager.getHandler(a.uri);
      l !== null && (c = l);
    }
    return n.loadTextureImage(t, i.source, c);
  }
}
class ud {
  constructor(t) {
    this.name = Q.EXT_MESHOPT_COMPRESSION, this.parser = t;
  }
  loadBufferView(t) {
    const r = this.parser.json, n = r.bufferViews[t];
    if (n.extensions && n.extensions[this.name]) {
      const o = n.extensions[this.name], s = this.parser.getDependency("buffer", o.buffer), i = this.parser.options.meshoptDecoder;
      if (!i || !i.supported) {
        if (r.extensionsRequired && r.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(a) {
        const c = o.byteOffset || 0, l = o.byteLength || 0, u = o.count, f = o.byteStride, h = new Uint8Array(a, c, l);
        return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(u, f, h, o.mode, o.filter).then(function(b) {
          return b.buffer;
        }) : i.ready.then(function() {
          const b = new ArrayBuffer(u * f);
          return i.decodeGltfBuffer(new Uint8Array(b), u, f, h, o.mode, o.filter), b;
        });
      });
    } else
      return null;
  }
}
class fd {
  constructor(t) {
    this.name = Q.EXT_MESH_GPU_INSTANCING, this.parser = t;
  }
  createNodeMesh(t) {
    const r = this.parser.json, n = r.nodes[t];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const o = r.meshes[n.mesh];
    for (const l of o.primitives)
      if (l.mode !== Ae.TRIANGLES && l.mode !== Ae.TRIANGLE_STRIP && l.mode !== Ae.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const i = n.extensions[this.name].attributes, a = [], c = {};
    for (const l in i)
      a.push(this.parser.getDependency("accessor", i[l]).then((u) => (c[l] = u, c[l])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(t)), Promise.all(a).then((l) => {
      const u = l.pop(), f = u.isGroup ? u.children : [u], h = l[0].count, b = [];
      for (const y of f) {
        const p = new mr(), g = new Qe(), S = new ls(), M = new Qe(1, 1, 1), P = new Ai(y.geometry, y.material, h);
        for (let E = 0; E < h; E++)
          c.TRANSLATION && g.fromBufferAttribute(c.TRANSLATION, E), c.ROTATION && S.fromBufferAttribute(c.ROTATION, E), c.SCALE && M.fromBufferAttribute(c.SCALE, E), P.setMatrixAt(E, p.compose(g, S, M));
        for (const E in c)
          if (E === "_COLOR_0") {
            const v = c[E];
            P.instanceColor = new Mi(v.array, v.itemSize, v.normalized);
          } else E !== "TRANSLATION" && E !== "ROTATION" && E !== "SCALE" && y.geometry.setAttribute(E, c[E]);
        us.prototype.copy.call(P, y), this.parser.assignFinalMaterial(P), b.push(P);
      }
      return u.isGroup ? (u.clear(), u.add(...b), u) : b[0];
    }));
  }
}
const gi = "glTF", $t = 12, Zo = { JSON: 1313821514, BIN: 5130562 };
class dd {
  constructor(t) {
    this.name = Q.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const r = new DataView(t, 0, $t), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(t.slice(0, 4))),
      version: r.getUint32(4, !0),
      length: r.getUint32(8, !0)
    }, this.header.magic !== gi)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const o = this.header.length - $t, s = new DataView(t, $t);
    let i = 0;
    for (; i < o; ) {
      const a = s.getUint32(i, !0);
      i += 4;
      const c = s.getUint32(i, !0);
      if (i += 4, c === Zo.JSON) {
        const l = new Uint8Array(t, $t + i, a);
        this.content = n.decode(l);
      } else if (c === Zo.BIN) {
        const l = $t + i;
        this.body = t.slice(l, l + a);
      }
      i += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class pd {
  constructor(t, r) {
    if (!r)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Q.KHR_DRACO_MESH_COMPRESSION, this.json = t, this.dracoLoader = r, this.dracoLoader.preload();
  }
  decodePrimitive(t, r) {
    const n = this.json, o = this.dracoLoader, s = t.extensions[this.name].bufferView, i = t.extensions[this.name].attributes, a = {}, c = {}, l = {};
    for (const u in i) {
      const f = xn[u] || u.toLowerCase();
      a[f] = i[u];
    }
    for (const u in t.attributes) {
      const f = xn[u] || u.toLowerCase();
      if (i[u] !== void 0) {
        const h = n.accessors[t.attributes[u]], b = Ct[h.componentType];
        l[f] = b.name, c[f] = h.normalized === !0;
      }
    }
    return r.getDependency("bufferView", s).then(function(u) {
      return new Promise(function(f, h) {
        o.decodeDracoFile(u, function(b) {
          for (const y in b.attributes) {
            const p = b.attributes[y], g = c[y];
            g !== void 0 && (p.normalized = g);
          }
          f(b);
        }, a, l, je, h);
      });
    });
  }
}
class hd {
  constructor() {
    this.name = Q.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(t, r) {
    return (r.texCoord === void 0 || r.texCoord === t.channel) && r.offset === void 0 && r.rotation === void 0 && r.scale === void 0 || (t = t.clone(), r.texCoord !== void 0 && (t.channel = r.texCoord), r.offset !== void 0 && t.offset.fromArray(r.offset), r.rotation !== void 0 && (t.rotation = r.rotation), r.scale !== void 0 && t.repeat.fromArray(r.scale), t.needsUpdate = !0), t;
  }
}
class md {
  constructor() {
    this.name = Q.KHR_MESH_QUANTIZATION;
  }
}
class yi extends na {
  constructor(t, r, n, o) {
    super(t, r, n, o);
  }
  copySampleValue_(t) {
    const r = this.resultBuffer, n = this.sampleValues, o = this.valueSize, s = t * o * 3 + o;
    for (let i = 0; i !== o; i++)
      r[i] = n[s + i];
    return r;
  }
  interpolate_(t, r, n, o) {
    const s = this.resultBuffer, i = this.sampleValues, a = this.valueSize, c = a * 2, l = a * 3, u = o - r, f = (n - r) / u, h = f * f, b = h * f, y = t * l, p = y - l, g = -2 * b + 3 * h, S = b - h, M = 1 - g, P = S - h + f;
    for (let E = 0; E !== a; E++) {
      const v = i[p + E + a], A = i[p + E + c] * u, $ = i[y + E + a], _ = i[y + E] * u;
      s[E] = M * v + P * A + g * $ + S * _;
    }
    return s;
  }
}
const gd = new ls();
class yd extends yi {
  interpolate_(t, r, n, o) {
    const s = super.interpolate_(t, r, n, o);
    return gd.fromArray(s).normalize().toArray(s), s;
  }
}
const Ae = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, Ct = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, es = {
  9728: ds,
  9729: Ye,
  9984: Li,
  9985: $i,
  9986: Ni,
  9987: fs
}, ts = {
  33071: cr,
  33648: Di,
  10497: sn
}, tn = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, xn = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, Je = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, bd = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: hs,
  STEP: ta
}, rn = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function vd(e) {
  return e.DefaultMaterial === void 0 && (e.DefaultMaterial = new ps({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: ra
  })), e.DefaultMaterial;
}
function ft(e, t, r) {
  for (const n in r.extensions)
    e[n] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[n] = r.extensions[n]);
}
function Ne(e, t) {
  t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
function Td(e, t, r) {
  let n = !1, o = !1, s = !1;
  for (let l = 0, u = t.length; l < u; l++) {
    const f = t[l];
    if (f.POSITION !== void 0 && (n = !0), f.NORMAL !== void 0 && (o = !0), f.COLOR_0 !== void 0 && (s = !0), n && o && s) break;
  }
  if (!n && !o && !s) return Promise.resolve(e);
  const i = [], a = [], c = [];
  for (let l = 0, u = t.length; l < u; l++) {
    const f = t[l];
    if (n) {
      const h = f.POSITION !== void 0 ? r.getDependency("accessor", f.POSITION) : e.attributes.position;
      i.push(h);
    }
    if (o) {
      const h = f.NORMAL !== void 0 ? r.getDependency("accessor", f.NORMAL) : e.attributes.normal;
      a.push(h);
    }
    if (s) {
      const h = f.COLOR_0 !== void 0 ? r.getDependency("accessor", f.COLOR_0) : e.attributes.color;
      c.push(h);
    }
  }
  return Promise.all([
    Promise.all(i),
    Promise.all(a),
    Promise.all(c)
  ]).then(function(l) {
    const u = l[0], f = l[1], h = l[2];
    return n && (e.morphAttributes.position = u), o && (e.morphAttributes.normal = f), s && (e.morphAttributes.color = h), e.morphTargetsRelative = !0, e;
  });
}
function xd(e, t) {
  if (e.updateMorphTargets(), t.weights !== void 0)
    for (let r = 0, n = t.weights.length; r < n; r++)
      e.morphTargetInfluences[r] = t.weights[r];
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    const r = t.extras.targetNames;
    if (e.morphTargetInfluences.length === r.length) {
      e.morphTargetDictionary = {};
      for (let n = 0, o = r.length; n < o; n++)
        e.morphTargetDictionary[r[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Ed(e) {
  let t;
  const r = e.extensions && e.extensions[Q.KHR_DRACO_MESH_COMPRESSION];
  if (r ? t = "draco:" + r.bufferView + ":" + r.indices + ":" + nn(r.attributes) : t = e.indices + ":" + nn(e.attributes) + ":" + e.mode, e.targets !== void 0)
    for (let n = 0, o = e.targets.length; n < o; n++)
      t += ":" + nn(e.targets[n]);
  return t;
}
function nn(e) {
  let t = "";
  const r = Object.keys(e).sort();
  for (let n = 0, o = r.length; n < o; n++)
    t += r[n] + ":" + e[r[n]] + ";";
  return t;
}
function En(e) {
  switch (e) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Sd(e) {
  return e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : e.search(/\.webp($|\?)/i) > 0 || e.search(/^data\:image\/webp/) === 0 ? "image/webp" : e.search(/\.ktx2($|\?)/i) > 0 || e.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const _d = new mr();
class wd {
  constructor(t = {}, r = {}) {
    this.json = t, this.extensions = {}, this.plugins = {}, this.options = r, this.cache = new Yf(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, o = -1, s = !1, i = -1;
    if (typeof navigator < "u") {
      const a = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(a) === !0;
      const c = a.match(/Version\/(\d+)/);
      o = n && c ? parseInt(c[1], 10) : -1, s = a.indexOf("Firefox") > -1, i = s ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && o < 17 || s && i < 98 ? this.textureLoader = new Oi(this.options.manager) : this.textureLoader = new Pi(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Sn(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(t) {
    this.extensions = t;
  }
  setPlugins(t) {
    this.plugins = t;
  }
  parse(t, r) {
    const n = this, o = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(i) {
      return i._markDefs && i._markDefs();
    }), Promise.all(this._invokeAll(function(i) {
      return i.beforeRoot && i.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(i) {
      const a = {
        scene: i[0][o.scene || 0],
        scenes: i[0],
        animations: i[1],
        cameras: i[2],
        asset: o.asset,
        parser: n,
        userData: {}
      };
      return ft(s, a, o), Ne(a, o), Promise.all(n._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(a);
      })).then(function() {
        for (const c of a.scenes)
          c.updateMatrixWorld();
        t(a);
      });
    }).catch(r);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   *
   * @private
   */
  _markDefs() {
    const t = this.json.nodes || [], r = this.json.skins || [], n = this.json.meshes || [];
    for (let o = 0, s = r.length; o < s; o++) {
      const i = r[o].joints;
      for (let a = 0, c = i.length; a < c; a++)
        t[i[a]].isBone = !0;
    }
    for (let o = 0, s = t.length; o < s; o++) {
      const i = t[o];
      i.mesh !== void 0 && (this._addNodeRef(this.meshCache, i.mesh), i.skin !== void 0 && (n[i.mesh].isSkinnedMesh = !0)), i.camera !== void 0 && this._addNodeRef(this.cameraCache, i.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   *
   * @private
   * @param {Object} cache
   * @param {Object3D} index
   */
  _addNodeRef(t, r) {
    r !== void 0 && (t.refs[r] === void 0 && (t.refs[r] = t.uses[r] = 0), t.refs[r]++);
  }
  /**
   * Returns a reference to a shared resource, cloning it if necessary.
   *
   * @private
   * @param {Object} cache
   * @param {number} index
   * @param {Object} object
   * @return {Object}
   */
  _getNodeRef(t, r, n) {
    if (t.refs[r] <= 1) return n;
    const o = n.clone(), s = (i, a) => {
      const c = this.associations.get(i);
      c != null && this.associations.set(a, c);
      for (const [l, u] of i.children.entries())
        s(u, a.children[l]);
    };
    return s(n, o), o.name += "_instance_" + t.uses[r]++, o;
  }
  _invokeOne(t) {
    const r = Object.values(this.plugins);
    r.push(this);
    for (let n = 0; n < r.length; n++) {
      const o = t(r[n]);
      if (o) return o;
    }
    return null;
  }
  _invokeAll(t) {
    const r = Object.values(this.plugins);
    r.unshift(this);
    const n = [];
    for (let o = 0; o < r.length; o++) {
      const s = t(r[o]);
      s && n.push(s);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   *
   * @private
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(t, r) {
    const n = t + ":" + r;
    let o = this.cache.get(n);
    if (!o) {
      switch (t) {
        case "scene":
          o = this.loadScene(r);
          break;
        case "node":
          o = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(r);
          });
          break;
        case "mesh":
          o = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(r);
          });
          break;
        case "accessor":
          o = this.loadAccessor(r);
          break;
        case "bufferView":
          o = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(r);
          });
          break;
        case "buffer":
          o = this.loadBuffer(r);
          break;
        case "material":
          o = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(r);
          });
          break;
        case "texture":
          o = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(r);
          });
          break;
        case "skin":
          o = this.loadSkin(r);
          break;
        case "animation":
          o = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(r);
          });
          break;
        case "camera":
          o = this.loadCamera(r);
          break;
        default:
          if (o = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(t, r);
          }), !o)
            throw new Error("Unknown type: " + t);
          break;
      }
      this.cache.add(n, o);
    }
    return o;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   *
   * @private
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(t) {
    let r = this.cache.get(t);
    if (!r) {
      const n = this, o = this.json[t + (t === "mesh" ? "es" : "s")] || [];
      r = Promise.all(o.map(function(s, i) {
        return n.getDependency(t, i);
      })), this.cache.add(t, r);
    }
    return r;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   *
   * @private
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(t) {
    const r = this.json.buffers[t], n = this.fileLoader;
    if (r.type && r.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + r.type + " buffer type is not supported.");
    if (r.uri === void 0 && t === 0)
      return Promise.resolve(this.extensions[Q.KHR_BINARY_GLTF].body);
    const o = this.options;
    return new Promise(function(s, i) {
      n.load(Ft.resolveURL(r.uri, o.path), s, void 0, function() {
        i(new Error('THREE.GLTFLoader: Failed to load buffer "' + r.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   *
   * @private
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(t) {
    const r = this.json.bufferViews[t];
    return this.getDependency("buffer", r.buffer).then(function(n) {
      const o = r.byteLength || 0, s = r.byteOffset || 0;
      return n.slice(s, s + o);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   *
   * @private
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(t) {
    const r = this, n = this.json, o = this.json.accessors[t];
    if (o.bufferView === void 0 && o.sparse === void 0) {
      const i = tn[o.type], a = Ct[o.componentType], c = o.normalized === !0, l = new a(o.count * i);
      return Promise.resolve(new jr(l, i, c));
    }
    const s = [];
    return o.bufferView !== void 0 ? s.push(this.getDependency("bufferView", o.bufferView)) : s.push(null), o.sparse !== void 0 && (s.push(this.getDependency("bufferView", o.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", o.sparse.values.bufferView))), Promise.all(s).then(function(i) {
      const a = i[0], c = tn[o.type], l = Ct[o.componentType], u = l.BYTES_PER_ELEMENT, f = u * c, h = o.byteOffset || 0, b = o.bufferView !== void 0 ? n.bufferViews[o.bufferView].byteStride : void 0, y = o.normalized === !0;
      let p, g;
      if (b && b !== f) {
        const S = Math.floor(h / b), M = "InterleavedBuffer:" + o.bufferView + ":" + o.componentType + ":" + S + ":" + o.count;
        let P = r.cache.get(M);
        P || (p = new l(a, S * b, o.count * b / u), P = new Ii(p, b / u), r.cache.add(M, P)), g = new ki(P, c, h % b / u, y);
      } else
        a === null ? p = new l(o.count * c) : p = new l(a, h, o.count * c), g = new jr(p, c, y);
      if (o.sparse !== void 0) {
        const S = tn.SCALAR, M = Ct[o.sparse.indices.componentType], P = o.sparse.indices.byteOffset || 0, E = o.sparse.values.byteOffset || 0, v = new M(i[1], P, o.sparse.count * S), A = new l(i[2], E, o.sparse.count * c);
        a !== null && (g = new jr(g.array.slice(), g.itemSize, g.normalized)), g.normalized = !1;
        for (let $ = 0, _ = v.length; $ < _; $++) {
          const I = v[$];
          if (g.setX(I, A[$ * c]), c >= 2 && g.setY(I, A[$ * c + 1]), c >= 3 && g.setZ(I, A[$ * c + 2]), c >= 4 && g.setW(I, A[$ * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        g.normalized = y;
      }
      return g;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   *
   * @private
   * @param {number} textureIndex
   * @return {Promise<?Texture>}
   */
  loadTexture(t) {
    const r = this.json, n = this.options, s = r.textures[t].source, i = r.images[s];
    let a = this.textureLoader;
    if (i.uri) {
      const c = n.manager.getHandler(i.uri);
      c !== null && (a = c);
    }
    return this.loadTextureImage(t, s, a);
  }
  loadTextureImage(t, r, n) {
    const o = this, s = this.json, i = s.textures[t], a = s.images[r], c = (a.uri || a.bufferView) + ":" + i.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const l = this.loadImageSource(r, n).then(function(u) {
      u.flipY = !1, u.name = i.name || a.name || "", u.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (u.name = a.uri);
      const h = (s.samplers || {})[i.sampler] || {};
      return u.magFilter = es[h.magFilter] || Ye, u.minFilter = es[h.minFilter] || fs, u.wrapS = ts[h.wrapS] || sn, u.wrapT = ts[h.wrapT] || sn, u.generateMipmaps = !u.isCompressedTexture && u.minFilter !== ds && u.minFilter !== Ye, o.associations.set(u, { textures: t }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(t, r) {
    const n = this, o = this.json, s = this.options;
    if (this.sourceCache[t] !== void 0)
      return this.sourceCache[t].then((f) => f.clone());
    const i = o.images[t], a = self.URL || self.webkitURL;
    let c = i.uri || "", l = !1;
    if (i.bufferView !== void 0)
      c = n.getDependency("bufferView", i.bufferView).then(function(f) {
        l = !0;
        const h = new Blob([f], { type: i.mimeType });
        return c = a.createObjectURL(h), c;
      });
    else if (i.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + t + " is missing URI and bufferView");
    const u = Promise.resolve(c).then(function(f) {
      return new Promise(function(h, b) {
        let y = h;
        r.isImageBitmapLoader === !0 && (y = function(p) {
          const g = new zn(p);
          g.needsUpdate = !0, h(g);
        }), r.load(Ft.resolveURL(f, s.path), y, void 0, b);
      });
    }).then(function(f) {
      return l === !0 && a.revokeObjectURL(c), Ne(f, i), f.userData.mimeType = i.mimeType || Sd(i.uri), f;
    }).catch(function(f) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), f;
    });
    return this.sourceCache[t] = u, u;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   *
   * @private
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @param {string} [colorSpace]
   * @return {Promise<Texture>}
   */
  assignTexture(t, r, n, o) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(i) {
      if (!i) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (i = i.clone(), i.channel = n.texCoord), s.extensions[Q.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[Q.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const c = s.associations.get(i);
          i = s.extensions[Q.KHR_TEXTURE_TRANSFORM].extendTexture(i, a), s.associations.set(i, c);
        }
      }
      return o !== void 0 && (i.colorSpace = o), t[r] = i, i;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   *
   * @private
   * @param {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(t) {
    const r = t.geometry;
    let n = t.material;
    const o = r.attributes.tangent === void 0, s = r.attributes.color !== void 0, i = r.attributes.normal === void 0;
    if (t.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(a);
      c || (c = new Bi(), Vr.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(a, c)), n = c;
    } else if (t.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(a);
      c || (c = new Fi(), Vr.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(a, c)), n = c;
    }
    if (o || s || i) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      o && (a += "derivative-tangents:"), s && (a += "vertex-colors:"), i && (a += "flat-shading:");
      let c = this.cache.get(a);
      c || (c = n.clone(), s && (c.vertexColors = !0), i && (c.flatShading = !0), o && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(a, c), this.associations.set(c, this.associations.get(n))), n = c;
    }
    t.material = n;
  }
  getMaterialType() {
    return ps;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   *
   * @private
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(t) {
    const r = this, n = this.json, o = this.extensions, s = n.materials[t];
    let i;
    const a = {}, c = s.extensions || {}, l = [];
    if (c[Q.KHR_MATERIALS_UNLIT]) {
      const f = o[Q.KHR_MATERIALS_UNLIT];
      i = f.getMaterialType(), l.push(f.extendParams(a, s, r));
    } else {
      const f = s.pbrMetallicRoughness || {};
      if (a.color = new gt(1, 1, 1), a.opacity = 1, Array.isArray(f.baseColorFactor)) {
        const h = f.baseColorFactor;
        a.color.setRGB(h[0], h[1], h[2], je), a.opacity = h[3];
      }
      f.baseColorTexture !== void 0 && l.push(r.assignTexture(a, "map", f.baseColorTexture, Ut)), a.metalness = f.metallicFactor !== void 0 ? f.metallicFactor : 1, a.roughness = f.roughnessFactor !== void 0 ? f.roughnessFactor : 1, f.metallicRoughnessTexture !== void 0 && (l.push(r.assignTexture(a, "metalnessMap", f.metallicRoughnessTexture)), l.push(r.assignTexture(a, "roughnessMap", f.metallicRoughnessTexture))), i = this._invokeOne(function(h) {
        return h.getMaterialType && h.getMaterialType(t);
      }), l.push(Promise.all(this._invokeAll(function(h) {
        return h.extendMaterialParams && h.extendMaterialParams(t, a);
      })));
    }
    s.doubleSided === !0 && (a.side = ji);
    const u = s.alphaMode || rn.OPAQUE;
    if (u === rn.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, u === rn.MASK && (a.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && i !== Lt && (l.push(r.assignTexture(a, "normalMap", s.normalTexture)), a.normalScale = new cs(1, 1), s.normalTexture.scale !== void 0)) {
      const f = s.normalTexture.scale;
      a.normalScale.set(f, f);
    }
    if (s.occlusionTexture !== void 0 && i !== Lt && (l.push(r.assignTexture(a, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && i !== Lt) {
      const f = s.emissiveFactor;
      a.emissive = new gt().setRGB(f[0], f[1], f[2], je);
    }
    return s.emissiveTexture !== void 0 && i !== Lt && l.push(r.assignTexture(a, "emissiveMap", s.emissiveTexture, Ut)), Promise.all(l).then(function() {
      const f = new i(a);
      return s.name && (f.name = s.name), Ne(f, s), r.associations.set(f, { materials: t }), s.extensions && ft(o, f, s), f;
    });
  }
  /**
   * When Object3D instances are targeted by animation, they need unique names.
   *
   * @private
   * @param {string} originalName
   * @return {string}
   */
  createUniqueName(t) {
    const r = Vi.sanitizeNodeName(t || "");
    return r in this.nodeNamesUsed ? r + "_" + ++this.nodeNamesUsed[r] : (this.nodeNamesUsed[r] = 0, r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @private
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(t) {
    const r = this, n = this.extensions, o = this.primitiveCache;
    function s(a) {
      return n[Q.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, r).then(function(c) {
        return rs(c, a, r);
      });
    }
    const i = [];
    for (let a = 0, c = t.length; a < c; a++) {
      const l = t[a], u = Ed(l), f = o[u];
      if (f)
        i.push(f.promise);
      else {
        let h;
        l.extensions && l.extensions[Q.KHR_DRACO_MESH_COMPRESSION] ? h = s(l) : h = rs(new Ui(), l, r), o[u] = { primitive: l, promise: h }, i.push(h);
      }
    }
    return Promise.all(i);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   *
   * @private
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh|Line|Points>}
   */
  loadMesh(t) {
    const r = this, n = this.json, o = this.extensions, s = n.meshes[t], i = s.primitives, a = [];
    for (let c = 0, l = i.length; c < l; c++) {
      const u = i[c].material === void 0 ? vd(this.cache) : this.getDependency("material", i[c].material);
      a.push(u);
    }
    return a.push(r.loadGeometries(i)), Promise.all(a).then(function(c) {
      const l = c.slice(0, c.length - 1), u = c[c.length - 1], f = [];
      for (let b = 0, y = u.length; b < y; b++) {
        const p = u[b], g = i[b];
        let S;
        const M = l[b];
        if (g.mode === Ae.TRIANGLES || g.mode === Ae.TRIANGLE_STRIP || g.mode === Ae.TRIANGLE_FAN || g.mode === void 0)
          S = s.isSkinnedMesh === !0 ? new Gi(p, M) : new Hi(p, M), S.isSkinnedMesh === !0 && S.normalizeSkinWeights(), g.mode === Ae.TRIANGLE_STRIP ? S.geometry = Qo(S.geometry, is) : g.mode === Ae.TRIANGLE_FAN && (S.geometry = Qo(S.geometry, on));
        else if (g.mode === Ae.LINES)
          S = new zi(p, M);
        else if (g.mode === Ae.LINE_STRIP)
          S = new Wi(p, M);
        else if (g.mode === Ae.LINE_LOOP)
          S = new Yi(p, M);
        else if (g.mode === Ae.POINTS)
          S = new Ki(p, M);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + g.mode);
        Object.keys(S.geometry.morphAttributes).length > 0 && xd(S, s), S.name = r.createUniqueName(s.name || "mesh_" + t), Ne(S, s), g.extensions && ft(o, S, g), r.assignFinalMaterial(S), f.push(S);
      }
      for (let b = 0, y = f.length; b < y; b++)
        r.associations.set(f[b], {
          meshes: t,
          primitives: b
        });
      if (f.length === 1)
        return s.extensions && ft(o, f[0], s), f[0];
      const h = new Ur();
      s.extensions && ft(o, h, s), r.associations.set(h, { meshes: t });
      for (let b = 0, y = f.length; b < y; b++)
        h.add(f[b]);
      return h;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   *
   * @private
   * @param {number} cameraIndex
   * @return {Promise<Camera>|undefined}
   */
  loadCamera(t) {
    let r;
    const n = this.json.cameras[t], o = n[n.type];
    if (!o) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? r = new qi(Xi.radToDeg(o.yfov), o.aspectRatio || 1, o.znear || 1, o.zfar || 2e6) : n.type === "orthographic" && (r = new Ji(-o.xmag, o.xmag, o.ymag, -o.ymag, o.znear, o.zfar)), n.name && (r.name = this.createUniqueName(n.name)), Ne(r, n), Promise.resolve(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   *
   * @private
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(t) {
    const r = this.json.skins[t], n = [];
    for (let o = 0, s = r.joints.length; o < s; o++)
      n.push(this._loadNodeShallow(r.joints[o]));
    return r.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", r.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(o) {
      const s = o.pop(), i = o, a = [], c = [];
      for (let l = 0, u = i.length; l < u; l++) {
        const f = i[l];
        if (f) {
          a.push(f);
          const h = new mr();
          s !== null && h.fromArray(s.array, l * 16), c.push(h);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', r.joints[l]);
      }
      return new Qi(a, c);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   *
   * @private
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(t) {
    const r = this.json, n = this, o = r.animations[t], s = o.name ? o.name : "animation_" + t, i = [], a = [], c = [], l = [], u = [];
    for (let f = 0, h = o.channels.length; f < h; f++) {
      const b = o.channels[f], y = o.samplers[b.sampler], p = b.target, g = p.node, S = o.parameters !== void 0 ? o.parameters[y.input] : y.input, M = o.parameters !== void 0 ? o.parameters[y.output] : y.output;
      p.node !== void 0 && (i.push(this.getDependency("node", g)), a.push(this.getDependency("accessor", S)), c.push(this.getDependency("accessor", M)), l.push(y), u.push(p));
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(a),
      Promise.all(c),
      Promise.all(l),
      Promise.all(u)
    ]).then(function(f) {
      const h = f[0], b = f[1], y = f[2], p = f[3], g = f[4], S = [];
      for (let P = 0, E = h.length; P < E; P++) {
        const v = h[P], A = b[P], $ = y[P], _ = p[P], I = g[P];
        if (v === void 0) continue;
        v.updateMatrix && v.updateMatrix();
        const L = n._createAnimationTracks(v, A, $, _, I);
        if (L)
          for (let B = 0; B < L.length; B++)
            S.push(L[B]);
      }
      const M = new Zi(s, void 0, S);
      return Ne(M, o), M;
    });
  }
  createNodeMesh(t) {
    const r = this.json, n = this, o = r.nodes[t];
    return o.mesh === void 0 ? null : n.getDependency("mesh", o.mesh).then(function(s) {
      const i = n._getNodeRef(n.meshCache, o.mesh, s);
      return o.weights !== void 0 && i.traverse(function(a) {
        if (a.isMesh)
          for (let c = 0, l = o.weights.length; c < l; c++)
            a.morphTargetInfluences[c] = o.weights[c];
      }), i;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   *
   * @private
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(t) {
    const r = this.json, n = this, o = r.nodes[t], s = n._loadNodeShallow(t), i = [], a = o.children || [];
    for (let l = 0, u = a.length; l < u; l++)
      i.push(n.getDependency("node", a[l]));
    const c = o.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", o.skin);
    return Promise.all([
      s,
      Promise.all(i),
      c
    ]).then(function(l) {
      const u = l[0], f = l[1], h = l[2];
      h !== null && u.traverse(function(b) {
        b.isSkinnedMesh && b.bind(h, _d);
      });
      for (let b = 0, y = f.length; b < y; b++)
        u.add(f[b]);
      return u;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(t) {
    const r = this.json, n = this.extensions, o = this;
    if (this.nodeCache[t] !== void 0)
      return this.nodeCache[t];
    const s = r.nodes[t], i = s.name ? o.createUniqueName(s.name) : "", a = [], c = o._invokeOne(function(l) {
      return l.createNodeMesh && l.createNodeMesh(t);
    });
    return c && a.push(c), s.camera !== void 0 && a.push(o.getDependency("camera", s.camera).then(function(l) {
      return o._getNodeRef(o.cameraCache, s.camera, l);
    })), o._invokeAll(function(l) {
      return l.createNodeAttachment && l.createNodeAttachment(t);
    }).forEach(function(l) {
      a.push(l);
    }), this.nodeCache[t] = Promise.all(a).then(function(l) {
      let u;
      if (s.isBone === !0 ? u = new ea() : l.length > 1 ? u = new Ur() : l.length === 1 ? u = l[0] : u = new us(), u !== l[0])
        for (let f = 0, h = l.length; f < h; f++)
          u.add(l[f]);
      if (s.name && (u.userData.name = s.name, u.name = i), Ne(u, s), s.extensions && ft(n, u, s), s.matrix !== void 0) {
        const f = new mr();
        f.fromArray(s.matrix), u.applyMatrix4(f);
      } else
        s.translation !== void 0 && u.position.fromArray(s.translation), s.rotation !== void 0 && u.quaternion.fromArray(s.rotation), s.scale !== void 0 && u.scale.fromArray(s.scale);
      if (!o.associations.has(u))
        o.associations.set(u, {});
      else if (s.mesh !== void 0 && o.meshCache.refs[s.mesh] > 1) {
        const f = o.associations.get(u);
        o.associations.set(u, { ...f });
      }
      return o.associations.get(u).nodes = t, u;
    }), this.nodeCache[t];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   *
   * @private
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(t) {
    const r = this.extensions, n = this.json.scenes[t], o = this, s = new Ur();
    n.name && (s.name = o.createUniqueName(n.name)), Ne(s, n), n.extensions && ft(r, s, n);
    const i = n.nodes || [], a = [];
    for (let c = 0, l = i.length; c < l; c++)
      a.push(o.getDependency("node", i[c]));
    return Promise.all(a).then(function(c) {
      for (let u = 0, f = c.length; u < f; u++)
        s.add(c[u]);
      const l = (u) => {
        const f = /* @__PURE__ */ new Map();
        for (const [h, b] of o.associations)
          (h instanceof Vr || h instanceof zn) && f.set(h, b);
        return u.traverse((h) => {
          const b = o.associations.get(h);
          b != null && f.set(h, b);
        }), f;
      };
      return o.associations = l(s), s;
    });
  }
  _createAnimationTracks(t, r, n, o, s) {
    const i = [], a = t.name ? t.name : t.uuid, c = [];
    Je[s.path] === Je.weights ? t.traverse(function(h) {
      h.morphTargetInfluences && c.push(h.name ? h.name : h.uuid);
    }) : c.push(a);
    let l;
    switch (Je[s.path]) {
      case Je.weights:
        l = Yn;
        break;
      case Je.rotation:
        l = Kn;
        break;
      case Je.translation:
      case Je.scale:
        l = Wn;
        break;
      default:
        n.itemSize === 1 ? l = Yn : l = Wn;
        break;
    }
    const u = o.interpolation !== void 0 ? bd[o.interpolation] : hs, f = this._getArrayFromAccessor(n);
    for (let h = 0, b = c.length; h < b; h++) {
      const y = new l(
        c[h] + "." + Je[s.path],
        r.array,
        f,
        u
      );
      o.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(y), i.push(y);
    }
    return i;
  }
  _getArrayFromAccessor(t) {
    let r = t.array;
    if (t.normalized) {
      const n = En(r.constructor), o = new Float32Array(r.length);
      for (let s = 0, i = r.length; s < i; s++)
        o[s] = r[s] * n;
      r = o;
    }
    return r;
  }
  _createCubicSplineTrackInterpolant(t) {
    t.createInterpolant = function(n) {
      const o = this instanceof Kn ? yd : yi;
      return new o(this.times, this.values, this.getValueSize() / 3, n);
    }, t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Rd(e, t, r) {
  const n = t.attributes, o = new oa();
  if (n.POSITION !== void 0) {
    const a = r.json.accessors[n.POSITION], c = a.min, l = a.max;
    if (c !== void 0 && l !== void 0) {
      if (o.set(
        new Qe(c[0], c[1], c[2]),
        new Qe(l[0], l[1], l[2])
      ), a.normalized) {
        const u = En(Ct[a.componentType]);
        o.min.multiplyScalar(u), o.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = t.targets;
  if (s !== void 0) {
    const a = new Qe(), c = new Qe();
    for (let l = 0, u = s.length; l < u; l++) {
      const f = s[l];
      if (f.POSITION !== void 0) {
        const h = r.json.accessors[f.POSITION], b = h.min, y = h.max;
        if (b !== void 0 && y !== void 0) {
          if (c.setX(Math.max(Math.abs(b[0]), Math.abs(y[0]))), c.setY(Math.max(Math.abs(b[1]), Math.abs(y[1]))), c.setZ(Math.max(Math.abs(b[2]), Math.abs(y[2]))), h.normalized) {
            const p = En(Ct[h.componentType]);
            c.multiplyScalar(p);
          }
          a.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    o.expandByVector(a);
  }
  e.boundingBox = o;
  const i = new sa();
  o.getCenter(i.center), i.radius = o.min.distanceTo(o.max) / 2, e.boundingSphere = i;
}
function rs(e, t, r) {
  const n = t.attributes, o = [];
  function s(i, a) {
    return r.getDependency("accessor", i).then(function(c) {
      e.setAttribute(a, c);
    });
  }
  for (const i in n) {
    const a = xn[i] || i.toLowerCase();
    a in e.attributes || o.push(s(n[i], a));
  }
  if (t.indices !== void 0 && !e.index) {
    const i = r.getDependency("accessor", t.indices).then(function(a) {
      e.setIndex(a);
    });
    o.push(i);
  }
  return qn.workingColorSpace !== je && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qn.workingColorSpace}" not supported.`), Ne(e, t), Rd(e, t, r), Promise.all(o).then(function() {
    return t.targets !== void 0 ? Td(e, t.targets, r) : e;
  });
}
class Cd extends as {
  /**
   * Constructs a new Cube LUT loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(t) {
    super(t), this.type = Gr;
  }
  /**
   * Sets the texture type.
   *
   * @param {(UnsignedByteType|FloatType)} type - The texture type to set.
   * @return {LUTCubeLoader} A reference to this loader.
   */
  setType(t) {
    return this.type = t, this;
  }
  /**
   * Starts loading from the given URL and passes the loaded Cube LUT asset
   * to the `onLoad()` callback.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function({title:string,size:number,domainMin:Vector3,domainMax:Vector3,texture3D:Data3DTexture})} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  load(t, r, n, o) {
    const s = new Sn(this.manager);
    s.setPath(this.path), s.setResponseType("text"), s.load(t, (i) => {
      try {
        r(this.parse(i));
      } catch (a) {
        o ? o(a) : console.error(a), this.manager.itemError(t);
      }
    }, n, o);
  }
  /**
   * Parses the given Cube LUT data and returns the resulting 3D data texture.
   *
   * @param {string} input - The raw Cube LUT data as a string.
   * @return {{title:string,size:number,domainMin:Vector3,domainMax:Vector3,texture3D:Data3DTexture}} The parsed Cube LUT.
   */
  parse(t) {
    const r = /TITLE +"([^"]*)"/, n = /LUT_3D_SIZE +(\d+)/, o = /DOMAIN_MIN +([\d.]+) +([\d.]+) +([\d.]+)/, s = /DOMAIN_MAX +([\d.]+) +([\d.]+) +([\d.]+)/, i = /^([\d.e+-]+) +([\d.e+-]+) +([\d.e+-]+) *$/gm;
    let a = r.exec(t);
    const c = a !== null ? a[1] : null;
    if (a = n.exec(t), a === null)
      throw new Error("LUTCubeLoader: Missing LUT_3D_SIZE information");
    const l = Number(a[1]), u = l ** 3 * 4, f = this.type === Gr ? new Uint8Array(u) : new Float32Array(u), h = new Qe(0, 0, 0), b = new Qe(1, 1, 1);
    if (a = o.exec(t), a !== null && h.set(Number(a[1]), Number(a[2]), Number(a[3])), a = s.exec(t), a !== null && b.set(Number(a[1]), Number(a[2]), Number(a[3])), h.x > b.x || h.y > b.y || h.z > b.z)
      throw new Error("LUTCubeLoader: Invalid input domain");
    const y = this.type === Gr ? 255 : 1;
    let p = 0;
    for (; (a = i.exec(t)) !== null; )
      f[p++] = Number(a[1]) * y, f[p++] = Number(a[2]) * y, f[p++] = Number(a[3]) * y, f[p++] = y;
    const g = new ia();
    return g.image.data = f, g.image.width = l, g.image.height = l, g.image.depth = l, g.type = this.type, g.magFilter = Ye, g.minFilter = Ye, g.wrapS = cr, g.wrapT = cr, g.wrapR = cr, g.generateMipmaps = !1, g.needsUpdate = !0, {
      title: c,
      size: l,
      domainMin: h,
      domainMax: b,
      texture3D: g
    };
  }
}
class Ad extends ms {
  /**
      * Constructs a new RGBE/HDR loader.
      *
      * @param {LoadingManager} [manager] - The loading manager.
      */
  constructor(t) {
    super(t), this.type = Ze;
  }
  /**
      * Parses the given RGBE texture data.
      *
      * @param {ArrayBuffer} buffer - The raw texture data.
      * @return {DataTextureLoader~TexData} An object representing the parsed texture data.
      */
  parse(t) {
    const i = function(_, I) {
      switch (_) {
        case 1:
          throw new Error("THREE.HDRLoader: Read Error: " + (I || ""));
        case 2:
          throw new Error("THREE.HDRLoader: Write Error: " + (I || ""));
        case 3:
          throw new Error("THREE.HDRLoader: Bad File Format: " + (I || ""));
        default:
        case 4:
          throw new Error("THREE.HDRLoader: Memory Error: " + (I || ""));
      }
    }, f = function(_, I, L) {
      I = I || 1024;
      let d = _.pos, R = -1, x = 0, D = "", k = String.fromCharCode.apply(null, new Uint16Array(_.subarray(d, d + 128)));
      for (; 0 > (R = k.indexOf(`
`)) && x < I && d < _.byteLength; )
        D += k, x += k.length, d += 128, k += String.fromCharCode.apply(null, new Uint16Array(_.subarray(d, d + 128)));
      return -1 < R ? (_.pos += x + R + 1, D + k.slice(0, R)) : !1;
    }, h = function(_) {
      const I = /^#\?(\S+)/, L = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, B = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, d = /^\s*FORMAT=(\S+)\s*$/, R = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, x = {
        valid: 0,
        /* indicate which fields are valid */
        string: "",
        /* the actual header string */
        comments: "",
        /* comments found in header */
        programtype: "RGBE",
        /* listed at beginning of file to identify it after "#?". defaults to "RGBE" */
        format: "",
        /* RGBE format, default 32-bit_rle_rgbe */
        gamma: 1,
        /* image has already been gamma corrected with given gamma. defaults to 1.0 (no correction) */
        exposure: 1,
        /* a value of 1.0 in an image corresponds to <exposure> watts/steradian/m^2. defaults to 1.0 */
        width: 0,
        height: 0
        /* image dimensions, width/height */
      };
      let D, k;
      for ((_.pos >= _.byteLength || !(D = f(_))) && i(1, "no header found"), (k = D.match(I)) || i(3, "bad initial token"), x.valid |= 1, x.programtype = k[1], x.string += D + `
`; D = f(_), D !== !1; ) {
        if (x.string += D + `
`, D.charAt(0) === "#") {
          x.comments += D + `
`;
          continue;
        }
        if ((k = D.match(L)) && (x.gamma = parseFloat(k[1])), (k = D.match(B)) && (x.exposure = parseFloat(k[1])), (k = D.match(d)) && (x.valid |= 2, x.format = k[1]), (k = D.match(R)) && (x.valid |= 4, x.height = parseInt(k[1], 10), x.width = parseInt(k[2], 10)), x.valid & 2 && x.valid & 4) break;
      }
      return x.valid & 2 || i(3, "missing format specifier"), x.valid & 4 || i(3, "missing image size specifier"), x;
    }, b = function(_, I, L) {
      const B = I;
      if (
        // run length encoding is not allowed so read flat
        B < 8 || B > 32767 || // this file is not run length encoded
        _[0] !== 2 || _[1] !== 2 || _[2] & 128
      )
        return new Uint8Array(_);
      B !== (_[2] << 8 | _[3]) && i(3, "wrong scanline width");
      const d = new Uint8Array(4 * I * L);
      d.length || i(4, "unable to allocate buffer space");
      let R = 0, x = 0;
      const D = 4 * B, k = new Uint8Array(4), H = new Uint8Array(D);
      let se = L;
      for (; se > 0 && x < _.byteLength; ) {
        x + 4 > _.byteLength && i(1), k[0] = _[x++], k[1] = _[x++], k[2] = _[x++], k[3] = _[x++], (k[0] != 2 || k[1] != 2 || (k[2] << 8 | k[3]) != B) && i(3, "bad rgbe scanline format");
        let q = 0, O;
        for (; q < D && x < _.byteLength; ) {
          O = _[x++];
          const N = O > 128;
          if (N && (O -= 128), (O === 0 || q + O > D) && i(3, "bad scanline data"), N) {
            const F = _[x++];
            for (let j = 0; j < O; j++)
              H[q++] = F;
          } else
            H.set(_.subarray(x, x + O), q), q += O, x += O;
        }
        const T = B;
        for (let N = 0; N < T; N++) {
          let F = 0;
          d[R] = H[N + F], F += B, d[R + 1] = H[N + F], F += B, d[R + 2] = H[N + F], F += B, d[R + 3] = H[N + F], R += 4;
        }
        se--;
      }
      return d;
    }, y = function(_, I, L, B) {
      const d = _[I + 3], R = Math.pow(2, d - 128) / 255;
      L[B + 0] = _[I + 0] * R, L[B + 1] = _[I + 1] * R, L[B + 2] = _[I + 2] * R, L[B + 3] = 1;
    }, p = function(_, I, L, B) {
      const d = _[I + 3], R = Math.pow(2, d - 128) / 255;
      L[B + 0] = et.toHalfFloat(Math.min(_[I + 0] * R, 65504)), L[B + 1] = et.toHalfFloat(Math.min(_[I + 1] * R, 65504)), L[B + 2] = et.toHalfFloat(Math.min(_[I + 2] * R, 65504)), L[B + 3] = et.toHalfFloat(1);
    }, g = new Uint8Array(t);
    g.pos = 0;
    const S = h(g), M = S.width, P = S.height, E = b(g.subarray(g.pos), M, P);
    let v, A, $;
    switch (this.type) {
      case _t:
        $ = E.length / 4;
        const _ = new Float32Array($ * 4);
        for (let L = 0; L < $; L++)
          y(E, L * 4, _, L * 4);
        v = _, A = _t;
        break;
      case Ze:
        $ = E.length / 4;
        const I = new Uint16Array($ * 4);
        for (let L = 0; L < $; L++)
          p(E, L * 4, I, L * 4);
        v = I, A = Ze;
        break;
      default:
        throw new Error("THREE.HDRLoader: Unsupported type: " + this.type);
    }
    return {
      width: M,
      height: P,
      data: v,
      header: S.string,
      gamma: S.gamma,
      exposure: S.exposure,
      type: A
    };
  }
  /**
      * Sets the texture type.
      *
      * @param {(HalfFloatType|FloatType)} value - The texture type to set.
      * @return {HDRLoader} A reference to this loader.
      */
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, n, o) {
    function s(i, a) {
      switch (i.type) {
        case _t:
        case Ze:
          i.colorSpace = je, i.minFilter = Ye, i.magFilter = Ye, i.generateMipmaps = !1, i.flipY = !0;
          break;
      }
      r && r(i, a);
    }
    return super.load(t, s, n, o);
  }
}
let Md = class extends Ad {
  constructor(t) {
    console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."), super(t);
  }
};
class We {
  static enabled = !1;
  static log(t) {
  }
  static error(t) {
    console.error(t);
  }
  static warn(t) {
    console.warn(t);
  }
}
class ze {
  static gltfLoader = new Wf();
  static loadGLTF = (t) => new Promise((r, n) => {
    if (!t)
      return r(new ue.Group());
    ze.gltfLoader.load(
      t,
      (o) => {
        r(o.scene);
      },
      () => {
      },
      (o) => {
        n(o);
      }
    );
  });
  static async loadEnvironmentTexture(t) {
    const r = URL.createObjectURL(t), n = new Md();
    try {
      const o = await n.loadAsync(r);
      return o.mapping = ue.EquirectangularReflectionMapping, URL.revokeObjectURL(r), o;
    } catch (o) {
      throw URL.revokeObjectURL(r), We.error(`Error loading environment map: ${o}`), o;
    }
  }
  static loadNodeMapForGLTF = async (t) => {
    const r = await ze.loadGLTF(t), n = {};
    return r.traverse((o) => {
      o instanceof ue.Mesh && (n[o.name] = o);
    }), n;
  };
  static loadTexture = async (t) => await new ue.TextureLoader().loadAsync(t);
  static loadLut = async (t) => await new Cd().loadAsync(t);
  static getImageUrlFromTexture(t) {
    const r = document.createElement("canvas");
    r.width = 2e3, r.height = 2e3;
    const n = t.repeat ?? new ue.Vector2(1, 1), o = r.getContext("2d", { willReadFrequently: !0 });
    if (!o)
      return We.error("Failed to get 2D context"), null;
    const s = o.createPattern(
      t.image,
      "repeat"
    );
    if (s)
      o.fillStyle = s, o.save(), o.scale(1 / n.x, 1 / n.y), o.fillRect(0, 0, r.width * n.x, r.height * n.y), o.restore();
    else
      return We.error("Failed to create pattern"), null;
    return r.toDataURL();
  }
  static getBoundingBox = (t) => {
    const r = new ue.Box3();
    return t.forEach((n) => {
      r.expandByObject(n);
    }), r;
  };
  static getCenterPointAndNormal = (t) => {
    const r = t.geometry, n = r.attributes.position, o = r.attributes.normal, s = r.attributes.uv, i = t.matrixWorld;
    if (!n || !o || !s)
      return {
        center: ze.getBoundingBox([t]).getCenter(new ue.Vector3()),
        normal: new ue.Vector3(0, 0, 1),
        uv: new ue.Vector2(0.5, 0.5)
      };
    const a = new ue.Vector3(0, 0, 0), c = n.count;
    for (let y = 0; y < c; y++) {
      const p = new ue.Vector3().fromBufferAttribute(n, y).applyMatrix4(i);
      a.add(p);
    }
    a.divideScalar(c);
    let l = 1 / 0, u = 0;
    for (let y = 0; y < c; y++) {
      const g = new ue.Vector3().fromBufferAttribute(n, y).applyMatrix4(i).distanceTo(a);
      g < l && (l = g, u = y);
    }
    const f = new ue.Vector3().fromBufferAttribute(o, u).applyMatrix4(i), h = new ue.Vector3().fromBufferAttribute(n, u).applyMatrix4(i), b = new ue.Vector2().fromBufferAttribute(s, u);
    return {
      center: h,
      normal: f,
      uv: b
    };
  };
  static getSizeAndCenter = (t) => {
    const r = ze.getBoundingBox([t]), n = r.getSize(new ue.Vector3()), o = r.getCenter(new ue.Vector3());
    return {
      boundingBox: r,
      center: o,
      size: n
    };
  };
}
class Od {
  _libState;
  _cameraRef = null;
  constructor(t) {
    this._libState = t, ot(this);
  }
  setCameraRef(t) {
    this._cameraRef = t;
  }
  get cameraRef() {
    return this._cameraRef;
  }
  resetCameraToRef = () => {
    const t = this._libState.design3DManager.meshManager.groupRef;
    t && this.focusCameraTo([t]);
  };
  focusCameraTo = (t) => {
    const r = Array.isArray(t) ? t[t.length - 1] : t, n = -1, { boundingBox: o, center: s } = ze.getSizeAndCenter(r);
    if (r instanceof ue.Mesh) {
      const { center: i } = ze.getCenterPointAndNormal(
        r
      ), a = Math.abs(i.x);
      this._cameraRef?.setLookAt(
        s.x,
        s.y,
        s.z,
        a,
        i.y,
        n,
        !0
      );
    } else
      this._cameraRef?.setLookAt(
        s.x,
        s.y,
        s.z,
        0,
        s.y,
        n,
        !0
      );
    this._cameraRef?.fitToBox(o, !0);
  };
  dispose() {
    this._cameraRef = null;
  }
}
class Pd {
  _envVisibility = !1;
  _envIntensity = 1.6;
  _envRotation = {
    x: 0,
    y: 0,
    z: 1.5
  };
  _environmentTexture = null;
  constructor() {
    ot(this);
  }
  get envVisibility() {
    return this._envVisibility;
  }
  setEnvVisibility(t) {
    this._envVisibility = t;
  }
  get envIntensity() {
    return this._envIntensity;
  }
  setEnvIntensity(t) {
    this._envIntensity = t;
  }
  get envRotation() {
    return this._envRotation;
  }
  setEnvRotation(t) {
    this._envRotation = t;
  }
  get environmentTexture() {
    return this._environmentTexture;
  }
  setEnvironmentTexture(t) {
    this._environmentTexture = t;
  }
  async handleEnvUpload(t) {
    try {
      const r = await ze.loadEnvironmentTexture(t);
      this.setEnvironmentTexture(r);
    } catch (r) {
      We.error(`Failed to load environment: ${r}`);
    }
  }
  clearMap = (t) => {
    t === "envMap" && (this._envVisibility = !1, this._envIntensity = 1.6, this._envRotation = { x: 0, y: 0, z: 1.5 }, this._environmentTexture = null);
  };
  dispose() {
    this.clearMap("envMap");
  }
}
class Id {
  _libState;
  _meshInfos = [];
  _groupRef = null;
  constructor(t) {
    this._libState = t, ot(this);
  }
  get meshInfos() {
    return this._meshInfos;
  }
  setMeshInfos(t) {
    this._meshInfos = t;
  }
  setGroupRef(t) {
    this._groupRef = t;
  }
  get groupRef() {
    return this._groupRef;
  }
  dispose() {
    this._meshInfos = [], this._groupRef = null;
  }
}
class kd {
  _libState;
  _meshManager;
  _cameraManager;
  _envManager;
  constructor(t) {
    this._libState = t, this._meshManager = new Id(t), this._cameraManager = new Od(t), this._envManager = new Pd(), ot(this);
  }
  get meshManager() {
    return this._meshManager;
  }
  get cameraManager() {
    return this._cameraManager;
  }
  get envManager() {
    return this._envManager;
  }
  dispose() {
    this._meshManager.dispose(), this._cameraManager.dispose(), this._envManager.dispose();
  }
}
class Nd {
  _libState;
  _meshInfoJson = null;
  _jsonUrl = "./init.json";
  constructor(t) {
    this._libState = t, ot(this);
  }
  get meshInfoJson() {
    return this._meshInfoJson;
  }
  setMeshInfoJson(t) {
    this._meshInfoJson = t;
  }
  setGlbUrl(t) {
    const r = {
      ...this._meshInfoJson || { availableColors: [] },
      glbUrl: t
    };
    this.setMeshInfoJson(r);
  }
  get glbUrl() {
    return this._meshInfoJson?.glbUrl;
  }
  get jsonUrl() {
    return this._jsonUrl;
  }
  setJsonUrl(t) {
    this._jsonUrl = t;
  }
  dispose() {
    this._meshInfoJson = null, this._jsonUrl = "./init.json";
  }
}
class $d {
  _libState;
  _viewManager;
  constructor(t) {
    this._libState = t, this._viewManager = new Nd(t), ot(this);
  }
  get viewManager() {
    return this._viewManager;
  }
  dispose() {
    this._viewManager.dispose();
  }
}
class Ld {
  constructor() {
    ot(this);
  }
  _designManager = new $d(this);
  get designManager() {
    return this._designManager;
  }
  _design3DManager = new kd(this);
  get design3DManager() {
    return this._design3DManager;
  }
  dispose() {
    this._designManager.dispose(), this._design3DManager.dispose();
  }
}
const Un = () => {
  const e = Be.useContext(mi);
  if (!e)
    throw new Error("useMainContext must be used within MainContextProvider");
  return e;
}, Dd = Ve(() => {
  const { design3DManager: e } = Un(), { cameraManager: t } = e;
  return /* @__PURE__ */ U.jsx(
    aa,
    {
      makeDefault: !0,
      minPolarAngle: Math.PI / 2,
      maxPolarAngle: Math.PI / 2,
      minDistance: 0.5,
      maxDistance: 2,
      ref: (r) => {
        r && t.setCameraRef(r);
      }
    }
  );
}), Bd = Ve(
  ({ children: e }) => /* @__PURE__ */ U.jsx(
    la,
    {
      className: "canvas-3d",
      frameloop: "demand",
      shadows: !0,
      gl: {
        toneMapping: ue.ACESFilmicToneMapping,
        toneMappingExposure: 0.9
      },
      children: e
    }
  )
);
class Fd extends ms {
  constructor(t) {
    super(t), this.type = Ze;
  }
  // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
  parse(t) {
    const i = function(_, I) {
      switch (_) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (I || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (I || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (I || ""));
        default:
        case 4:
          throw new Error("THREE.RGBELoader: Memory Error: " + (I || ""));
      }
    }, f = function(_, I, L) {
      I = I || 1024;
      let d = _.pos, R = -1, x = 0, D = "", k = String.fromCharCode.apply(null, new Uint16Array(_.subarray(d, d + 128)));
      for (; 0 > (R = k.indexOf(`
`)) && x < I && d < _.byteLength; )
        D += k, x += k.length, d += 128, k += String.fromCharCode.apply(null, new Uint16Array(_.subarray(d, d + 128)));
      return -1 < R ? (_.pos += x + R + 1, D + k.slice(0, R)) : !1;
    }, h = function(_) {
      const I = /^#\?(\S+)/, L = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, B = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, d = /^\s*FORMAT=(\S+)\s*$/, R = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, x = {
        valid: 0,
        string: "",
        comments: "",
        programtype: "RGBE",
        format: "",
        gamma: 1,
        exposure: 1,
        width: 0,
        height: 0
      };
      let D, k;
      for ((_.pos >= _.byteLength || !(D = f(_))) && i(1, "no header found"), (k = D.match(I)) || i(3, "bad initial token"), x.valid |= 1, x.programtype = k[1], x.string += D + `
`; D = f(_), D !== !1; ) {
        if (x.string += D + `
`, D.charAt(0) === "#") {
          x.comments += D + `
`;
          continue;
        }
        if ((k = D.match(L)) && (x.gamma = parseFloat(k[1])), (k = D.match(B)) && (x.exposure = parseFloat(k[1])), (k = D.match(d)) && (x.valid |= 2, x.format = k[1]), (k = D.match(R)) && (x.valid |= 4, x.height = parseInt(k[1], 10), x.width = parseInt(k[2], 10)), x.valid & 2 && x.valid & 4)
          break;
      }
      return x.valid & 2 || i(3, "missing format specifier"), x.valid & 4 || i(3, "missing image size specifier"), x;
    }, b = function(_, I, L) {
      const B = I;
      if (
        // run length encoding is not allowed so read flat
        B < 8 || B > 32767 || // this file is not run length encoded
        _[0] !== 2 || _[1] !== 2 || _[2] & 128
      )
        return new Uint8Array(_);
      B !== (_[2] << 8 | _[3]) && i(3, "wrong scanline width");
      const d = new Uint8Array(4 * I * L);
      d.length || i(4, "unable to allocate buffer space");
      let R = 0, x = 0;
      const D = 4 * B, k = new Uint8Array(4), H = new Uint8Array(D);
      let se = L;
      for (; se > 0 && x < _.byteLength; ) {
        x + 4 > _.byteLength && i(1), k[0] = _[x++], k[1] = _[x++], k[2] = _[x++], k[3] = _[x++], (k[0] != 2 || k[1] != 2 || (k[2] << 8 | k[3]) != B) && i(3, "bad rgbe scanline format");
        let q = 0, O;
        for (; q < D && x < _.byteLength; ) {
          O = _[x++];
          const N = O > 128;
          if (N && (O -= 128), (O === 0 || q + O > D) && i(3, "bad scanline data"), N) {
            const F = _[x++];
            for (let j = 0; j < O; j++)
              H[q++] = F;
          } else
            H.set(_.subarray(x, x + O), q), q += O, x += O;
        }
        const T = B;
        for (let N = 0; N < T; N++) {
          let F = 0;
          d[R] = H[N + F], F += B, d[R + 1] = H[N + F], F += B, d[R + 2] = H[N + F], F += B, d[R + 3] = H[N + F], R += 4;
        }
        se--;
      }
      return d;
    }, y = function(_, I, L, B) {
      const d = _[I + 3], R = Math.pow(2, d - 128) / 255;
      L[B + 0] = _[I + 0] * R, L[B + 1] = _[I + 1] * R, L[B + 2] = _[I + 2] * R, L[B + 3] = 1;
    }, p = function(_, I, L, B) {
      const d = _[I + 3], R = Math.pow(2, d - 128) / 255;
      L[B + 0] = et.toHalfFloat(Math.min(_[I + 0] * R, 65504)), L[B + 1] = et.toHalfFloat(Math.min(_[I + 1] * R, 65504)), L[B + 2] = et.toHalfFloat(Math.min(_[I + 2] * R, 65504)), L[B + 3] = et.toHalfFloat(1);
    }, g = new Uint8Array(t);
    g.pos = 0;
    const S = h(g), M = S.width, P = S.height, E = b(g.subarray(g.pos), M, P);
    let v, A, $;
    switch (this.type) {
      case _t:
        $ = E.length / 4;
        const _ = new Float32Array($ * 4);
        for (let L = 0; L < $; L++)
          y(E, L * 4, _, L * 4);
        v = _, A = _t;
        break;
      case Ze:
        $ = E.length / 4;
        const I = new Uint16Array($ * 4);
        for (let L = 0; L < $; L++)
          p(E, L * 4, I, L * 4);
        v = I, A = Ze;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return {
      width: M,
      height: P,
      data: v,
      header: S.string,
      gamma: S.gamma,
      exposure: S.exposure,
      type: A
    };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, n, o) {
    function s(i, a) {
      switch (i.type) {
        case _t:
        case Ze:
          "colorSpace" in i ? i.colorSpace = "srgb-linear" : i.encoding = 3e3, i.minFilter = Ye, i.magFilter = Ye, i.generateMipmaps = !1, i.flipY = !0;
          break;
      }
      r && r(i, a);
    }
    return super.load(t, s, n, o);
  }
}
const jd = Ve(() => {
  const e = ua(Fd, "/env/studio_small_09_2k.hdr"), { design3DManager: t } = Un(), { envManager: r } = t;
  return /* @__PURE__ */ U.jsxs(ca, { background: r.envVisibility, children: [
    /* @__PURE__ */ U.jsx("color", { attach: "background", args: ["black"] }),
    /* @__PURE__ */ U.jsxs(
      "mesh",
      {
        rotation: [
          r.envRotation.x,
          r.envRotation.y,
          r.envRotation.z
        ],
        scale: 100,
        children: [
          /* @__PURE__ */ U.jsx("sphereGeometry", {}),
          /* @__PURE__ */ U.jsx(
            "meshBasicMaterial",
            {
              transparent: !0,
              opacity: r.envIntensity,
              map: r.environmentTexture || e,
              side: ue.BackSide,
              toneMapped: !1
            }
          )
        ]
      }
    )
  ] });
}), Vd = Ve(() => /* @__PURE__ */ U.jsx(U.Fragment, { children: /* @__PURE__ */ U.jsx("ambientLight", { intensity: 1.01 }) }));
class Gn {
  _id;
  _name;
  _mesh;
  _isVisible;
  constructor(t, r, n) {
    this._id = t, this._name = r, this._mesh = n, this._isVisible = !0, ot(this);
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get item() {
    return this._mesh;
  }
  get isVisible() {
    return this._isVisible;
  }
  setIsVisible(t) {
    this._isVisible = t;
  }
  setMesh(t) {
    this._mesh = t;
  }
  changeColor(t) {
    const r = this._mesh.material.clone();
    r.color.set(t), this._mesh.material = r;
  }
  static parseMeshInfo(t) {
    return new Gn(t.id.toString(), t.name, t);
  }
}
const Ud = (e) => {
  const [t, r] = hr({
    isLoaded: !1,
    meshInfo: []
  }), n = ss(async () => {
    if (!e) {
      r((o) => ({ ...o, isLoaded: !1, meshInfo: [] }));
      return;
    }
    r((o) => ({ ...o, isLoaded: !1, meshInfo: [] }));
    try {
      const o = await ze.loadNodeMapForGLTF(e);
      let s = [];
      s = Object.values(o).flat().map((a) => Gn.parseMeshInfo(a)), r({
        isLoaded: !0,
        meshInfo: s
      });
    } catch (o) {
      We.error(`Error loading GLB file: ${o}`), r((s) => ({
        ...s,
        isLoaded: !1,
        meshInfo: []
      }));
    }
  }, [e]);
  return tt(() => {
    n();
  }, [n]), t;
}, Gd = (e) => {
  const {
    onSelected: t,
    distanceToAllowClick: r = 22,
    onHoverStateChanged: n,
    onMoved: o,
    onClick: s
  } = e, i = dt(!1), a = dt(!1), c = dt(new ue.Vector2()), l = dt(new ue.Vector2()), u = () => {
    i.current = !1, c.current = new ue.Vector2();
  };
  return {
    listeners: {
      onPointerDown: (g) => {
        g.stopPropagation(), c.current = new ue.Vector2(g.pageX, g.pageY), l.current = new ue.Vector2(g.pageX, g.pageY), i.current = !0, s && s(g);
      },
      onPointerMove: (g) => {
        {
          if (g.stopPropagation(), o) {
            const S = l.current.distanceTo(
              new ue.Vector2(g.pageX, g.pageY)
            );
            o(S);
          }
          i && c && c.current.distanceTo(
            new ue.Vector2(g.pageX, g.pageY)
          ) > r && u();
        }
      },
      onPointerOut: () => {
        u(), n?.(!1), a.current = !1;
      },
      onPointerOver: (g) => {
        g.stopPropagation(), n?.(!0), a.current = !0;
      },
      onPointerUp: (g) => {
        g.stopPropagation(), i.current && (u(), t?.(g));
      }
    },
    state: {
      hovered: a
    }
  };
}, Hd = Ve(
  (e) => {
    const t = e.mainMeshVisible, r = Ei(
      () => e.material || new ue.MeshStandardMaterial(),
      [e.material]
    );
    return /* @__PURE__ */ U.jsx(U.Fragment, { children: /* @__PURE__ */ U.jsx(
      "mesh",
      {
        ...e,
        visible: t,
        material: r
      },
      `single-mesh-${e.ukey}`
    ) });
  }
), zd = Ve(({ meshInfo: e }) => {
  const t = e.item, r = Gd({
    onHoverStateChanged: (n) => {
      We.log(`${t.name} hovered: ${n}`);
    },
    onSelected: () => {
      We.log(`${t.name} clicked`);
    }
  });
  return /* @__PURE__ */ U.jsx("group", { ...r.listeners, children: /* @__PURE__ */ U.jsx(
    Hd,
    {
      ...t,
      ukey: t.name,
      mainMeshVisible: e.isVisible,
      children: /* @__PURE__ */ U.jsx(
        "mesh",
        {
          material: t.material,
          geometry: t.geometry,
          position: t.position
        },
        t.name
      )
    },
    t.name
  ) });
}), Wd = Ve(() => {
  const { design3DManager: e, designManager: t } = Un(), { meshManager: r, cameraManager: n } = e, { viewManager: o } = t, { isLoaded: s, meshInfo: i } = Ud(o.glbUrl);
  return tt(() => {
    s && r.setMeshInfos(i);
  }, [s, i, r]), tt(() => {
    r.groupRef && n.focusCameraTo([r.groupRef]);
  }, [n, r.groupRef]), s && /* @__PURE__ */ U.jsx(
    "group",
    {
      ref: (a) => {
        a && r.setGroupRef(a);
      },
      children: r.meshInfos.map((a) => /* @__PURE__ */ U.jsx(zd, { meshInfo: a }, a.name))
    }
  ) || null;
}), Yd = Ve(
  ns((e, t) => {
    const [r] = hr(() => new Ld()), [n, o] = hr(!1);
    return Si(
      t,
      () => ({
        state: r
      }),
      [r]
    ), tt(() => (o(!0), () => {
      o(!1), r.dispose();
    }), [r]), n ? /* @__PURE__ */ U.jsx(zf, { state: r, children: /* @__PURE__ */ U.jsxs(Bd, { children: [
      /* @__PURE__ */ U.jsx(Dd, {}),
      /* @__PURE__ */ U.jsx(Vd, {}),
      /* @__PURE__ */ U.jsx(jd, {}),
      /* @__PURE__ */ U.jsx(Wd, {})
    ] }) }) : null;
  })
), Kd = Ve(() => {
  const { assetManager: e, viewerManager: t } = hi(), r = dt(null), n = dt(null), o = () => {
    const a = t.viewManager?.meshInfoJson;
    if (!a) {
      We.warn("No mesh info JSON to export");
      return;
    }
    try {
      const c = JSON.stringify(a, null, 2), l = new Blob([c], { type: "application/json" }), u = URL.createObjectURL(l), f = document.createElement("a");
      f.href = u, f.download = "mesh-info.json", document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(u);
    } catch (c) {
      We.error(`Error exporting JSON: ${c}`);
    }
  }, s = () => {
    r.current?.click();
  }, i = (a) => {
    const c = a.target.files?.[0];
    if (c) {
      n.current && URL.revokeObjectURL(n.current);
      const l = URL.createObjectURL(c);
      n.current = l, e.setGlbUrl(l), t.viewManager?.setGlbUrl(l);
    }
    r.current && (r.current.value = "");
  };
  return /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    /* @__PURE__ */ U.jsx(
      "input",
      {
        ref: r,
        type: "file",
        accept: ".glb",
        style: { display: "none" },
        onChange: i
      }
    ),
    /* @__PURE__ */ U.jsx(li, { position: "fixed", sx: { bgcolor: "#1976d2", zIndex: 1300 }, children: /* @__PURE__ */ U.jsxs(pi, { children: [
      /* @__PURE__ */ U.jsx(ci, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: "Portal Hosted 3D Viewer" }),
      /* @__PURE__ */ U.jsxs(Vt, { sx: { display: "flex", gap: 2 }, children: [
        /* @__PURE__ */ U.jsx(
          Tn,
          {
            variant: "contained",
            onClick: o,
            sx: { "&:hover": { bgcolor: "#1976d2" }, bgcolor: "#2196f3" },
            children: "Export JSON"
          }
        ),
        /* @__PURE__ */ U.jsx(
          Tn,
          {
            variant: "contained",
            onClick: s,
            sx: { "&:hover": { bgcolor: "#388e3c" }, bgcolor: "#4caf50" },
            children: "Load GLB"
          }
        )
      ] })
    ] }) })
  ] });
}), rp = Ve(() => {
  const { assetManager: e, viewerManager: t } = hi(), r = dt(null), { data: n, loading: o } = Gf("./init.json");
  return tt(() => (t.__setViewer(r.current), () => {
    t.__dispose(), e.clear();
  }), [e, t]), tt(() => {
    n && !o && e.setMeshInfoJson(n);
  }, [e, n, o]), tt(() => {
    !t.viewerMounted || !e.meshInfoJson || t.viewManager?.setMeshInfoJson(e.meshInfoJson);
  }, [e.meshInfoJson, t, t.viewerMounted]), /* @__PURE__ */ U.jsxs(Vt, { sx: { bgcolor: "white", height: "100vh", width: "100%" }, children: [
    /* @__PURE__ */ U.jsx(Kd, {}),
    /* @__PURE__ */ U.jsx(
      Vt,
      {
        sx: {
          display: "flex",
          height: "calc(100vh - 64px)",
          marginTop: "64px",
          width: "100%"
        },
        children: /* @__PURE__ */ U.jsx(Vt, { sx: { flex: 1 }, children: /* @__PURE__ */ U.jsx(Yd, { ref: r }) })
      }
    )
  ] });
});
export {
  zf as MainContextProvider,
  Ld as StateManager,
  rp as Viewer,
  Yd as Viewer3D,
  Un as useMainContext
};
