import _n, { useEffect as se, useMemo as hn, useState as ii, Suspense as cs, useRef as Ce, forwardRef as Ci, useImperativeHandle as Ni } from "react";
import { useGLTF as ri, useEnvironment as Li, ContactShadows as Fi, Environment as oi, CameraControls as ai } from "@react-three/drei";
import { useThree as ci, useLoader as ot, useFrame as Ui, Canvas as li } from "@react-three/fiber";
import { observer as Ye } from "mobx-react-lite";
import * as N from "three";
import { Box3 as De, Matrix4 as be, BufferAttribute as Rt, Vector3 as U, Line3 as je, Plane as ui, Vector2 as Le, Triangle as At, BackSide as Oi, DoubleSide as fi, REVISION as di, Ray as ki, FrontSide as jn, UnsignedIntType as Ht, FloatType as et, DataTexture as Kn, NearestFilter as Ze, IntType as En, UnsignedByteType as Vt, UnsignedShortType as Hi, ByteType as ws, ShortType as Vi, RGBAFormat as xn, RGBAIntegerFormat as Yn, RGIntegerFormat as hi, RedIntegerFormat as zi, RGFormat as Gi, RedFormat as ji, TrianglesDrawMode as Ki, TriangleFanDrawMode as Wn, TriangleStripDrawMode as mi, Loader as pi, LoaderUtils as zt, FileLoader as ls, MeshPhysicalMaterial as Ue, Color as ht, LinearSRGBColorSpace as Fe, SRGBColorSpace as Kt, SpotLight as Yi, PointLight as Wi, DirectionalLight as Xi, Quaternion as gi, InstancedMesh as $i, InstancedBufferAttribute as qi, Object3D as xi, TextureLoader as Ji, ImageBitmapLoader as Zi, InterleavedBuffer as Qi, InterleavedBufferAttribute as er, LinearMipmapLinearFilter as yi, NearestMipmapLinearFilter as tr, LinearMipmapNearestFilter as nr, NearestMipmapNearestFilter as sr, LinearFilter as mt, RepeatWrapping as Xn, MirroredRepeatWrapping as ir, ClampToEdgeWrapping as mn, PointsMaterial as rr, Material as Dn, LineBasicMaterial as or, MeshStandardMaterial as vi, MeshBasicMaterial as kt, PropertyBinding as ar, BufferGeometry as cr, SkinnedMesh as lr, Mesh as ur, LineSegments as fr, Line as dr, LineLoop as hr, Points as mr, Group as In, PerspectiveCamera as pr, MathUtils as gr, OrthographicCamera as xr, Skeleton as yr, AnimationClip as vr, Bone as _r, InterpolateDiscrete as wr, InterpolateLinear as _i, Texture as Ts, VectorKeyframeTrack as Ms, NumberKeyframeTrack as As, QuaternionKeyframeTrack as bs, ColorManagement as Rs, Interpolant as Tr, Sphere as Mr, Data3DTexture as Ar, DataTextureLoader as br, HalfFloatType as Xt, DataUtils as $t } from "three";
import { makeAutoObservable as nt, observable as Ss } from "mobx";
var qt = { exports: {} }, Dt = {};
var Es;
function Rr() {
  if (Es) return Dt;
  Es = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.fragment");
  function t(s, n, r) {
    var i = null;
    if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) {
      r = {};
      for (var o in n)
        o !== "key" && (r[o] = n[o]);
    } else r = n;
    return n = r.ref, {
      $$typeof: c,
      type: s,
      key: i,
      ref: n !== void 0 ? n : null,
      props: r
    };
  }
  return Dt.Fragment = e, Dt.jsx = t, Dt.jsxs = t, Dt;
}
var It = {};
var Ds;
function Sr() {
  return Ds || (Ds = 1, process.env.NODE_ENV !== "production" && (function() {
    function c(D) {
      if (D == null) return null;
      if (typeof D == "function")
        return D.$$typeof === E ? null : D.displayName || D.name || null;
      if (typeof D == "string") return D;
      switch (D) {
        case p:
          return "Fragment";
        case g:
          return "Profiler";
        case v:
          return "StrictMode";
        case R:
          return "Suspense";
        case M:
          return "SuspenseList";
        case A:
          return "Activity";
      }
      if (typeof D == "object")
        switch (typeof D.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), D.$$typeof) {
          case x:
            return "Portal";
          case m:
            return D.displayName || "Context";
          case _:
            return (D._context.displayName || "Context") + ".Consumer";
          case w:
            var F = D.render;
            return D = D.displayName, D || (D = F.displayName || F.name || "", D = D !== "" ? "ForwardRef(" + D + ")" : "ForwardRef"), D;
          case T:
            return F = D.displayName || null, F !== null ? F : c(D.type) || "Memo";
          case S:
            F = D._payload, D = D._init;
            try {
              return c(D(F));
            } catch {
            }
        }
      return null;
    }
    function e(D) {
      return "" + D;
    }
    function t(D) {
      try {
        e(D);
        var F = !1;
      } catch {
        F = !0;
      }
      if (F) {
        F = console;
        var O = F.error, G = typeof Symbol == "function" && Symbol.toStringTag && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return O.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          G
        ), e(D);
      }
    }
    function s(D) {
      if (D === p) return "<>";
      if (typeof D == "object" && D !== null && D.$$typeof === S)
        return "<...>";
      try {
        var F = c(D);
        return F ? "<" + F + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var D = b.A;
      return D === null ? null : D.getOwner();
    }
    function r() {
      return Error("react-stack-top-frame");
    }
    function i(D) {
      if (I.call(D, "key")) {
        var F = Object.getOwnPropertyDescriptor(D, "key").get;
        if (F && F.isReactWarning) return !1;
      }
      return D.key !== void 0;
    }
    function o(D, F) {
      function O() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          F
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(D, "key", {
        get: O,
        configurable: !0
      });
    }
    function a() {
      var D = c(this.type);
      return V[D] || (V[D] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), D = this.props.ref, D !== void 0 ? D : null;
    }
    function u(D, F, O, G, ge, _e) {
      var k = O.ref;
      return D = {
        $$typeof: y,
        type: D,
        key: F,
        props: O,
        _owner: G
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(D, "ref", {
        enumerable: !1,
        get: a
      }) : Object.defineProperty(D, "ref", { enumerable: !1, value: null }), D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(D, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(D, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ge
      }), Object.defineProperty(D, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _e
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    }
    function f(D, F, O, G, ge, _e) {
      var k = F.children;
      if (k !== void 0)
        if (G)
          if (P(k)) {
            for (G = 0; G < k.length; G++)
              l(k[G]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else l(k);
      if (I.call(F, "key")) {
        k = c(D);
        var Y = Object.keys(F).filter(function(me) {
          return me !== "key";
        });
        G = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", K[k + G] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          G,
          k,
          Y,
          k
        ), K[k + G] = !0);
      }
      if (k = null, O !== void 0 && (t(O), k = "" + O), i(F) && (t(F.key), k = "" + F.key), "key" in F) {
        O = {};
        for (var oe in F)
          oe !== "key" && (O[oe] = F[oe]);
      } else O = F;
      return k && o(
        O,
        typeof D == "function" ? D.displayName || D.name || "Unknown" : D
      ), u(
        D,
        k,
        O,
        n(),
        ge,
        _e
      );
    }
    function l(D) {
      d(D) ? D._store && (D._store.validated = 1) : typeof D == "object" && D !== null && D.$$typeof === S && (D._payload.status === "fulfilled" ? d(D._payload.value) && D._payload.value._store && (D._payload.value._store.validated = 1) : D._store && (D._store.validated = 1));
    }
    function d(D) {
      return typeof D == "object" && D !== null && D.$$typeof === y;
    }
    var h = _n, y = /* @__PURE__ */ Symbol.for("react.transitional.element"), x = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), v = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), _ = /* @__PURE__ */ Symbol.for("react.consumer"), m = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), R = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.suspense_list"), T = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), A = /* @__PURE__ */ Symbol.for("react.activity"), E = /* @__PURE__ */ Symbol.for("react.client.reference"), b = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, P = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(D) {
        return D();
      }
    };
    var L, V = {}, j = h.react_stack_bottom_frame.bind(
      h,
      r
    )(), q = C(s(r)), K = {};
    It.Fragment = p, It.jsx = function(D, F, O) {
      var G = 1e4 > b.recentlyCreatedOwnerStacks++;
      return f(
        D,
        F,
        O,
        !1,
        G ? Error("react-stack-top-frame") : j,
        G ? C(s(D)) : q
      );
    }, It.jsxs = function(D, F, O) {
      var G = 1e4 > b.recentlyCreatedOwnerStacks++;
      return f(
        D,
        F,
        O,
        !0,
        G ? Error("react-stack-top-frame") : j,
        G ? C(s(D)) : q
      );
    };
  })()), It;
}
var Is;
function Er() {
  return Is || (Is = 1, process.env.NODE_ENV === "production" ? qt.exports = Rr() : qt.exports = Sr()), qt.exports;
}
var W = Er();
const us = _n.createContext(null), wi = 0, Dr = 1, Ir = 2, Ps = 2, Pn = 1.25, Bs = 1, fe = 32, ce = fe / 4, fs = 65535, Pr = fs << 16, pn = Math.pow(2, -24), ds = /* @__PURE__ */ Symbol("SKIP_GENERATION"), Ti = {
  strategy: wi,
  maxDepth: 40,
  maxLeafSize: 10,
  useSharedArrayBuffer: !1,
  setBoundingBox: !0,
  onProgress: null,
  indirect: !1,
  verbose: !0,
  range: null,
  [ds]: !1
};
function te(c, e, t) {
  return t.min.x = e[c], t.min.y = e[c + 1], t.min.z = e[c + 2], t.max.x = e[c + 3], t.max.y = e[c + 4], t.max.z = e[c + 5], t;
}
function Cs(c) {
  let e = -1, t = -1 / 0;
  for (let s = 0; s < 3; s++) {
    const n = c[s + 3] - c[s];
    n > t && (t = n, e = s);
  }
  return e;
}
function Ns(c, e) {
  e.set(c);
}
function Ls(c, e, t) {
  let s, n;
  for (let r = 0; r < 3; r++) {
    const i = r + 3;
    s = c[r], n = e[r], t[r] = s < n ? s : n, s = c[i], n = e[i], t[i] = s > n ? s : n;
  }
}
function Jt(c, e, t) {
  for (let s = 0; s < 3; s++) {
    const n = e[c + 2 * s], r = e[c + 2 * s + 1], i = n - r, o = n + r;
    i < t[s] && (t[s] = i), o > t[s + 3] && (t[s + 3] = o);
  }
}
function Pt(c) {
  const e = c[3] - c[0], t = c[4] - c[1], s = c[5] - c[2];
  return 2 * (e * t + t * s + s * e);
}
function ie(c, e) {
  return e[c + 15] === fs;
}
function pe(c, e) {
  return e[c + 6];
}
function ye(c, e) {
  return e[c + 14];
}
function de(c) {
  return c + ce;
}
function he(c, e) {
  const t = e[c + 6];
  return c + t * ce;
}
function wn(c, e) {
  return e[c + 7];
}
function Bn(c, e, t, s, n) {
  let r = 1 / 0, i = 1 / 0, o = 1 / 0, a = -1 / 0, u = -1 / 0, f = -1 / 0, l = 1 / 0, d = 1 / 0, h = 1 / 0, y = -1 / 0, x = -1 / 0, p = -1 / 0;
  const v = c.offset || 0;
  for (let g = (e - v) * 6, _ = (e + t - v) * 6; g < _; g += 6) {
    const m = c[g + 0], w = c[g + 1], R = m - w, M = m + w;
    R < r && (r = R), M > a && (a = M), m < l && (l = m), m > y && (y = m);
    const T = c[g + 2], S = c[g + 3], A = T - S, E = T + S;
    A < i && (i = A), E > u && (u = E), T < d && (d = T), T > x && (x = T);
    const b = c[g + 4], I = c[g + 5], P = b - I, C = b + I;
    P < o && (o = P), C > f && (f = C), b < h && (h = b), b > p && (p = b);
  }
  s[0] = r, s[1] = i, s[2] = o, s[3] = a, s[4] = u, s[5] = f, n[0] = l, n[1] = d, n[2] = h, n[3] = y, n[4] = x, n[5] = p;
}
const Ve = 32, Br = (c, e) => c.candidate - e.candidate, $e = /* @__PURE__ */ new Array(Ve).fill().map(() => ({
  count: 0,
  bounds: new Float32Array(6),
  rightCacheBounds: new Float32Array(6),
  leftCacheBounds: new Float32Array(6),
  candidate: 0
})), Zt = /* @__PURE__ */ new Float32Array(6);
function Cr(c, e, t, s, n, r) {
  let i = -1, o = 0;
  if (r === wi)
    i = Cs(e), i !== -1 && (o = (e[i] + e[i + 3]) / 2);
  else if (r === Dr)
    i = Cs(c), i !== -1 && (o = Nr(t, s, n, i));
  else if (r === Ir) {
    const a = Pt(c);
    let u = Pn * n;
    const f = t.offset || 0, l = (s - f) * 6, d = (s + n - f) * 6;
    for (let h = 0; h < 3; h++) {
      const y = e[h], v = (e[h + 3] - y) / Ve;
      if (n < Ve / 4) {
        const g = [...$e];
        g.length = n;
        let _ = 0;
        for (let w = l; w < d; w += 6, _++) {
          const R = g[_];
          R.candidate = t[w + 2 * h], R.count = 0;
          const {
            bounds: M,
            leftCacheBounds: T,
            rightCacheBounds: S
          } = R;
          for (let A = 0; A < 3; A++)
            S[A] = 1 / 0, S[A + 3] = -1 / 0, T[A] = 1 / 0, T[A + 3] = -1 / 0, M[A] = 1 / 0, M[A + 3] = -1 / 0;
          Jt(w, t, M);
        }
        g.sort(Br);
        let m = n;
        for (let w = 0; w < m; w++) {
          const R = g[w];
          for (; w + 1 < m && g[w + 1].candidate === R.candidate; )
            g.splice(w + 1, 1), m--;
        }
        for (let w = l; w < d; w += 6) {
          const R = t[w + 2 * h];
          for (let M = 0; M < m; M++) {
            const T = g[M];
            R >= T.candidate ? Jt(w, t, T.rightCacheBounds) : (Jt(w, t, T.leftCacheBounds), T.count++);
          }
        }
        for (let w = 0; w < m; w++) {
          const R = g[w], M = R.count, T = n - R.count, S = R.leftCacheBounds, A = R.rightCacheBounds;
          let E = 0;
          M !== 0 && (E = Pt(S) / a);
          let b = 0;
          T !== 0 && (b = Pt(A) / a);
          const I = Bs + Pn * (E * M + b * T);
          I < u && (i = h, u = I, o = R.candidate);
        }
      } else {
        for (let m = 0; m < Ve; m++) {
          const w = $e[m];
          w.count = 0, w.candidate = y + v + m * v;
          const R = w.bounds;
          for (let M = 0; M < 3; M++)
            R[M] = 1 / 0, R[M + 3] = -1 / 0;
        }
        for (let m = l; m < d; m += 6) {
          let M = ~~((t[m + 2 * h] - y) / v);
          M >= Ve && (M = Ve - 1);
          const T = $e[M];
          T.count++, Jt(m, t, T.bounds);
        }
        const g = $e[Ve - 1];
        Ns(g.bounds, g.rightCacheBounds);
        for (let m = Ve - 2; m >= 0; m--) {
          const w = $e[m], R = $e[m + 1];
          Ls(w.bounds, R.rightCacheBounds, w.rightCacheBounds);
        }
        let _ = 0;
        for (let m = 0; m < Ve - 1; m++) {
          const w = $e[m], R = w.count, M = w.bounds, S = $e[m + 1].rightCacheBounds;
          R !== 0 && (_ === 0 ? Ns(M, Zt) : Ls(M, Zt, Zt)), _ += R;
          let A = 0, E = 0;
          _ !== 0 && (A = Pt(Zt) / a);
          const b = n - _;
          b !== 0 && (E = Pt(S) / a);
          const I = Bs + Pn * (A * _ + E * b);
          I < u && (i = h, u = I, o = w.candidate);
        }
      }
    }
  } else
    console.warn(`BVH: Invalid build strategy value ${r} used.`);
  return { axis: i, pos: o };
}
function Nr(c, e, t, s) {
  let n = 0;
  const r = c.offset;
  for (let i = e, o = e + t; i < o; i++)
    n += c[(i - r) * 6 + s * 2];
  return n / t;
}
class Cn {
  constructor() {
    this.boundingData = new Float32Array(6);
  }
}
function Lr(c, e, t, s, n, r) {
  let i = s, o = s + n - 1;
  const a = r.pos, u = r.axis * 2, f = t.offset || 0;
  for (; ; ) {
    for (; i <= o && t[(i - f) * 6 + u] < a; )
      i++;
    for (; i <= o && t[(o - f) * 6 + u] >= a; )
      o--;
    if (i < o) {
      for (let l = 0; l < e; l++) {
        let d = c[i * e + l];
        c[i * e + l] = c[o * e + l], c[o * e + l] = d;
      }
      for (let l = 0; l < 6; l++) {
        const d = i - f, h = o - f, y = t[d * 6 + l];
        t[d * 6 + l] = t[h * 6 + l], t[h * 6 + l] = y;
      }
      i++, o--;
    } else
      return i;
  }
}
let Mi, gn, $n, Ai;
const Fr = Math.pow(2, 32);
function qn(c) {
  return "count" in c ? 1 : 1 + qn(c.left) + qn(c.right);
}
function Ur(c, e, t) {
  return Mi = new Float32Array(t), gn = new Uint32Array(t), $n = new Uint16Array(t), Ai = new Uint8Array(t), Jn(c, e);
}
function Jn(c, e) {
  const t = c / 4, s = c / 2, n = "count" in e, r = e.boundingData;
  for (let i = 0; i < 6; i++)
    Mi[t + i] = r[i];
  if (n)
    return e.buffer ? (Ai.set(new Uint8Array(e.buffer), c), c + e.buffer.byteLength) : (gn[t + 6] = e.offset, $n[s + 14] = e.count, $n[s + 15] = fs, c + fe);
  {
    const { left: i, right: o, splitAxis: a } = e, u = c + fe;
    let f = Jn(u, i);
    const l = c / fe, h = f / fe - l;
    if (h > Fr)
      throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");
    return gn[t + 6] = h, gn[t + 7] = a, Jn(f, o);
  }
}
function Or(c, e, t, s, n, r) {
  const {
    maxDepth: i,
    verbose: o,
    maxLeafSize: a,
    strategy: u,
    onProgress: f
  } = n, l = c.primitiveBuffer, d = c.primitiveBufferStride, h = new Float32Array(6);
  let y = !1;
  const x = new Cn();
  return Bn(e, t, s, x.boundingData, h), v(x, t, s, h), x;
  function p(g) {
    f && f((g - r.offset) / r.count);
  }
  function v(g, _, m, w = null, R = 0) {
    if (!y && R >= i && (y = !0, o && console.warn(`BVH: Max depth of ${i} reached when generating BVH. Consider increasing maxDepth.`)), m <= a || R >= i)
      return p(_ + m), g.offset = _, g.count = m, g;
    const M = Cr(g.boundingData, w, e, _, m, u);
    if (M.axis === -1)
      return p(_ + m), g.offset = _, g.count = m, g;
    const T = Lr(l, d, e, _, m, M);
    if (T === _ || T === _ + m)
      p(_ + m), g.offset = _, g.count = m;
    else {
      g.splitAxis = M.axis;
      const S = new Cn(), A = _, E = T - _;
      g.left = S, Bn(e, A, E, S.boundingData, h), v(S, A, E, h, R + 1);
      const b = new Cn(), I = T, P = m - E;
      g.right = b, Bn(e, I, P, b.boundingData, h), v(b, I, P, h, R + 1);
    }
    return g;
  }
}
function kr(c, e) {
  const t = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, s = c.getRootRanges(e.range), n = s[0], r = s[s.length - 1], i = {
    offset: n.offset,
    count: r.offset + r.count - n.offset
  }, o = new Float32Array(6 * i.count);
  o.offset = i.offset, c.computePrimitiveBounds(i.offset, i.count, o), c._roots = s.map((a) => {
    const u = Or(c, o, a.offset, a.count, e, i), f = qn(u), l = new t(fe * f);
    return Ur(0, u, l), l;
  });
}
class hs {
  constructor(e) {
    this._getNewPrimitive = e, this._primitives = [];
  }
  getPrimitive() {
    const e = this._primitives;
    return e.length === 0 ? this._getNewPrimitive() : e.pop();
  }
  releasePrimitive(e) {
    this._primitives.push(e);
  }
}
class Hr {
  constructor() {
    this.float32Array = null, this.uint16Array = null, this.uint32Array = null;
    const e = [];
    let t = null;
    this.setBuffer = (s) => {
      t && e.push(t), t = s, this.float32Array = new Float32Array(s), this.uint16Array = new Uint16Array(s), this.uint32Array = new Uint32Array(s);
    }, this.clearBuffer = () => {
      t = null, this.float32Array = null, this.uint16Array = null, this.uint32Array = null, e.length !== 0 && this.setBuffer(e.pop());
    };
  }
}
const J = /* @__PURE__ */ new Hr();
let Qe, bt;
const gt = [], Qt = /* @__PURE__ */ new hs(() => new De());
function Vr(c, e, t, s, n, r) {
  Qe = Qt.getPrimitive(), bt = Qt.getPrimitive(), gt.push(Qe, bt), J.setBuffer(c._roots[e]);
  const i = Zn(0, c.geometry, t, s, n, r);
  J.clearBuffer(), Qt.releasePrimitive(Qe), Qt.releasePrimitive(bt), gt.pop(), gt.pop();
  const o = gt.length;
  return o > 0 && (bt = gt[o - 1], Qe = gt[o - 2]), i;
}
function Zn(c, e, t, s, n = null, r = 0, i = 0) {
  const { float32Array: o, uint16Array: a, uint32Array: u } = J;
  let f = c * 2;
  if (ie(f, a)) {
    const d = pe(c, u), h = ye(f, a);
    return te(c, o, Qe), s(d, h, !1, i, r + c / ce, Qe);
  } else {
    let A = function(b) {
      const { uint16Array: I, uint32Array: P } = J;
      let C = b * 2;
      for (; !ie(C, I); )
        b = de(b), C = b * 2;
      return pe(b, P);
    }, E = function(b) {
      const { uint16Array: I, uint32Array: P } = J;
      let C = b * 2;
      for (; !ie(C, I); )
        b = he(b, P), C = b * 2;
      return pe(b, P) + ye(C, I);
    };
    const d = de(c), h = he(c, u);
    let y = d, x = h, p, v, g, _;
    if (n && (g = Qe, _ = bt, te(y, o, g), te(x, o, _), p = n(g), v = n(_), v < p)) {
      y = h, x = d;
      const b = p;
      p = v, v = b, g = _;
    }
    g || (g = Qe, te(y, o, g));
    const m = ie(y * 2, a), w = t(g, m, p, i + 1, r + y / ce);
    let R;
    if (w === Ps) {
      const b = A(y), P = E(y) - b;
      R = s(b, P, !0, i + 1, r + y / ce, g);
    } else
      R = w && Zn(
        y,
        e,
        t,
        s,
        n,
        r,
        i + 1
      );
    if (R) return !0;
    _ = bt, te(x, o, _);
    const M = ie(x * 2, a), T = t(_, M, v, i + 1, r + x / ce);
    let S;
    if (T === Ps) {
      const b = A(x), P = E(x) - b;
      S = s(b, P, !0, i + 1, r + x / ce, _);
    } else
      S = T && Zn(
        x,
        e,
        t,
        s,
        n,
        r,
        i + 1
      );
    return !!S;
  }
}
const Gt = /* @__PURE__ */ new J.constructor(), yn = /* @__PURE__ */ new J.constructor(), Je = /* @__PURE__ */ new hs(() => new De()), xt = /* @__PURE__ */ new De(), yt = /* @__PURE__ */ new De(), Nn = /* @__PURE__ */ new De(), Ln = /* @__PURE__ */ new De();
let Fn = !1;
function zr(c, e, t, s) {
  if (Fn)
    throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");
  Fn = !0;
  const n = c._roots, r = e._roots;
  let i, o = 0, a = 0;
  const u = new be().copy(t).invert();
  for (let f = 0, l = n.length; f < l; f++) {
    Gt.setBuffer(n[f]), a = 0;
    const d = Je.getPrimitive();
    te(0, Gt.float32Array, d), d.applyMatrix4(u);
    for (let h = 0, y = r.length; h < y && (yn.setBuffer(r[h]), i = Se(
      0,
      0,
      t,
      u,
      s,
      o,
      a,
      0,
      0,
      d
    ), yn.clearBuffer(), a += r[h].byteLength / fe, !i); h++)
      ;
    if (Je.releasePrimitive(d), Gt.clearBuffer(), o += n[f].byteLength / fe, i)
      break;
  }
  return Fn = !1, i;
}
function Se(c, e, t, s, n, r = 0, i = 0, o = 0, a = 0, u = null, f = !1) {
  let l, d;
  f ? (l = yn, d = Gt) : (l = Gt, d = yn);
  const h = l.float32Array, y = l.uint32Array, x = l.uint16Array, p = d.float32Array, v = d.uint32Array, g = d.uint16Array, _ = c * 2, m = e * 2, w = ie(_, x), R = ie(m, g);
  let M = !1;
  if (R && w)
    f ? M = n(
      pe(e, v),
      ye(e * 2, g),
      pe(c, y),
      ye(c * 2, x),
      a,
      i + e / ce,
      o,
      r + c / ce
    ) : M = n(
      pe(c, y),
      ye(c * 2, x),
      pe(e, v),
      ye(e * 2, g),
      o,
      r + c / ce,
      a,
      i + e / ce
    );
  else if (R) {
    const T = Je.getPrimitive();
    te(e, p, T), T.applyMatrix4(t);
    const S = de(c), A = he(c, y);
    te(S, h, xt), te(A, h, yt);
    const E = T.intersectsBox(xt), b = T.intersectsBox(yt);
    M = E && Se(
      e,
      S,
      s,
      t,
      n,
      i,
      r,
      a,
      o + 1,
      T,
      !f
    ) || b && Se(
      e,
      A,
      s,
      t,
      n,
      i,
      r,
      a,
      o + 1,
      T,
      !f
    ), Je.releasePrimitive(T);
  } else {
    const T = de(e), S = he(e, v);
    te(T, p, Nn), te(S, p, Ln);
    const A = u.intersectsBox(Nn), E = u.intersectsBox(Ln);
    if (A && E)
      M = Se(
        c,
        T,
        t,
        s,
        n,
        r,
        i,
        o,
        a + 1,
        u,
        f
      ) || Se(
        c,
        S,
        t,
        s,
        n,
        r,
        i,
        o,
        a + 1,
        u,
        f
      );
    else if (A)
      if (w)
        M = Se(
          c,
          T,
          t,
          s,
          n,
          r,
          i,
          o,
          a + 1,
          u,
          f
        );
      else {
        const b = Je.getPrimitive();
        b.copy(Nn).applyMatrix4(t);
        const I = de(c), P = he(c, y);
        te(I, h, xt), te(P, h, yt);
        const C = b.intersectsBox(xt), L = b.intersectsBox(yt);
        M = C && Se(
          T,
          I,
          s,
          t,
          n,
          i,
          r,
          a,
          o + 1,
          b,
          !f
        ) || L && Se(
          T,
          P,
          s,
          t,
          n,
          i,
          r,
          a,
          o + 1,
          b,
          !f
        ), Je.releasePrimitive(b);
      }
    else if (E)
      if (w)
        M = Se(
          c,
          S,
          t,
          s,
          n,
          r,
          i,
          o,
          a + 1,
          u,
          f
        );
      else {
        const b = Je.getPrimitive();
        b.copy(Ln).applyMatrix4(t);
        const I = de(c), P = he(c, y);
        te(I, h, xt), te(P, h, yt);
        const C = b.intersectsBox(xt), L = b.intersectsBox(yt);
        M = C && Se(
          S,
          I,
          s,
          t,
          n,
          i,
          r,
          a,
          o + 1,
          b,
          !f
        ) || L && Se(
          S,
          P,
          s,
          t,
          n,
          i,
          r,
          a,
          o + 1,
          b,
          !f
        ), Je.releasePrimitive(b);
      }
  }
  return M;
}
const Fs = /* @__PURE__ */ new De(), vt = /* @__PURE__ */ new Float32Array(6);
class Gr {
  constructor() {
    this._roots = null, this.primitiveBuffer = null, this.primitiveBufferStride = null;
  }
  init(e) {
    e = {
      ...Ti,
      ...e
    }, kr(this, e);
  }
  getRootRanges() {
    throw new Error("BVH: getRootRanges() not implemented");
  }
  // write the i-th primitive bounds in a 6-value min / max format to the buffer
  // starting at the given "writeOffset"
  writePrimitiveBounds() {
    throw new Error("BVH: writePrimitiveBounds() not implemented");
  }
  // writes the union bounds of all primitives in the given range in a min / max format
  // to the buffer
  writePrimitiveRangeBounds(e, t, s, n) {
    let r = 1 / 0, i = 1 / 0, o = 1 / 0, a = -1 / 0, u = -1 / 0, f = -1 / 0;
    for (let l = e, d = e + t; l < d; l++) {
      this.writePrimitiveBounds(l, vt, 0);
      const [h, y, x, p, v, g] = vt;
      h < r && (r = h), p > a && (a = p), y < i && (i = y), v > u && (u = v), x < o && (o = x), g > f && (f = g);
    }
    return s[n + 0] = r, s[n + 1] = i, s[n + 2] = o, s[n + 3] = a, s[n + 4] = u, s[n + 5] = f, s;
  }
  computePrimitiveBounds(e, t, s) {
    const n = s.offset || 0;
    for (let r = e, i = e + t; r < i; r++) {
      this.writePrimitiveBounds(r, vt, 0);
      const [o, a, u, f, l, d] = vt, h = (o + f) / 2, y = (a + l) / 2, x = (u + d) / 2, p = (f - o) / 2, v = (l - a) / 2, g = (d - u) / 2, _ = (r - n) * 6;
      s[_ + 0] = h, s[_ + 1] = p + (Math.abs(h) + p) * pn, s[_ + 2] = y, s[_ + 3] = v + (Math.abs(y) + v) * pn, s[_ + 4] = x, s[_ + 5] = g + (Math.abs(x) + g) * pn;
    }
    return s;
  }
  /**
   * Adjusts all primitive offsets stored in the BVH leaf nodes by the given value. Useful when
   * geometry buffers have been shifted or compacted (e.g. when merging geometries).
   * @param {number} offset
   */
  shiftPrimitiveOffsets(e) {
    const t = this._indirectBuffer;
    if (t)
      for (let s = 0, n = t.length; s < n; s++)
        t[s] += e;
    else {
      const s = this._roots;
      for (let n = 0; n < s.length; n++) {
        const r = s[n], i = new Uint32Array(r), o = new Uint16Array(r), a = r.byteLength / fe;
        for (let u = 0; u < a; u++) {
          const f = ce * u, l = 2 * f;
          ie(l, o) && (i[f + 6] += e);
        }
      }
    }
  }
  /**
   * Traverses all nodes of the BVH, invoking a callback for each node.
   *
   * For leaf nodes the callback receives `( depth, isLeaf, boundingData, offset, count )`.
   * For internal nodes it receives `( depth, isLeaf, boundingData, splitAxis )` and may
   * return `true` to stop descending into that node's children.
   *
   * @param {Function} callback
   * @param {number} [rootIndex=0]
   */
  traverse(e, t = 0) {
    const s = this._roots[t], n = new Uint32Array(s), r = new Uint16Array(s);
    i(0);
    function i(o, a = 0) {
      const u = o * 2, f = ie(u, r);
      if (f) {
        const l = n[o + 6], d = r[u + 14];
        e(a, f, new Float32Array(s, o * 4, 6), l, d);
      } else {
        const l = de(o), d = he(o, n), h = wn(o, n);
        e(a, f, new Float32Array(s, o * 4, 6), h) || (i(l, a + 1), i(d, a + 1));
      }
    }
  }
  /**
   * Refits all BVH node bounds to reflect the current primitive positions. Faster than
   * rebuilding the BVH but produces a less optimal tree after large vertex deformations.
   */
  refit() {
    const e = this._roots;
    for (let t = 0, s = e.length; t < s; t++) {
      const n = e[t], r = new Uint32Array(n), i = new Uint16Array(n), o = new Float32Array(n), a = n.byteLength / fe;
      for (let u = a - 1; u >= 0; u--) {
        const f = u * ce, l = f * 2;
        if (ie(l, i)) {
          const h = pe(f, r), y = ye(l, i);
          this.writePrimitiveRangeBounds(h, y, vt, 0), o.set(vt, f);
        } else {
          const h = de(f), y = he(f, r);
          for (let x = 0; x < 3; x++) {
            const p = o[h + x], v = o[h + x + 3], g = o[y + x], _ = o[y + x + 3];
            o[f + x] = p < g ? p : g, o[f + x + 3] = v > _ ? v : _;
          }
        }
      }
    }
  }
  /**
   * Computes the axis-aligned bounding box of all primitives in the BVH.
   * @param {Box3} target - Target box to write the result into.
   * @returns {Box3}
   */
  getBoundingBox(e) {
    return e.makeEmpty(), this._roots.forEach((s) => {
      te(0, new Float32Array(s), Fs), e.union(Fs);
    }), e;
  }
  /**
   * A generalized traversal function for performing spatial queries against the BVH. Returns
   * `true` as soon as a primitive has been reported as intersected. The tree is traversed
   * depth-first; `boundsTraverseOrder` controls which child is visited first. Returning
   * `CONTAINED` from `intersectsBounds` skips further child traversal and intersects all
   * primitives in that subtree immediately.
   *
   * @param {Object} callbacks
   * @param {IntersectsBoundsCallback} callbacks.intersectsBounds
   * @param {IntersectsRangeCallback} [callbacks.intersectsRange]
   * @param {BoundsTraverseOrderCallback} [callbacks.boundsTraverseOrder]
   * @returns {boolean}
   */
  // TODO: see if we can get rid of "iterateFunc" here as well as the primitive so the function
  // API aligns with the "shapecast" implementation
  shapecast(e) {
    let {
      boundsTraverseOrder: t,
      intersectsBounds: s,
      intersectsRange: n,
      intersectsPrimitive: r,
      scratchPrimitive: i,
      iterate: o
    } = e;
    if (n && r) {
      const l = n;
      n = (d, h, y, x, p) => l(d, h, y, x, p) ? !0 : o(d, h, this, r, y, x, i);
    } else n || (r ? n = (l, d, h, y) => o(l, d, this, r, h, y, i) : n = (l, d, h) => h);
    let a = !1, u = 0;
    const f = this._roots;
    for (let l = 0, d = f.length; l < d; l++) {
      const h = f[l];
      if (a = Vr(this, l, s, n, t, u), a)
        break;
      u += h.byteLength / fe;
    }
    return a;
  }
  /**
   * Simultaneously traverses two BVH structures to find intersecting primitive pairs. Returns
   * `true` as soon as any intersection is reported. Both trees are traversed depth-first with
   * alternating descent. `matrixToLocal` transforms `otherBvh` into the local space of this BVH.
   *
   * @param {BVH} otherBvh
   * @param {Matrix4} matrixToLocal
   * @param {Object} callbacks
   * @param {IntersectsRangesCallback} callbacks.intersectsRanges
   * @returns {boolean}
   */
  bvhcast(e, t, s) {
    let { intersectsRanges: n } = s;
    return zr(this, e, t, n);
  }
}
function jr() {
  return typeof SharedArrayBuffer < "u";
}
function Tn(c) {
  return c.index ? c.index.count : c.attributes.position.count;
}
function Mn(c) {
  return Tn(c) / 3;
}
function bi(c, e = ArrayBuffer) {
  return c > 65535 ? new Uint32Array(new e(4 * c)) : new Uint16Array(new e(2 * c));
}
function Kr(c, e) {
  if (!c.index) {
    const t = c.attributes.position.count, s = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, n = bi(t, s);
    c.setIndex(new Rt(n, 1));
    for (let r = 0; r < t; r++)
      n[r] = r;
  }
}
function Yr(c, e, t) {
  const s = Tn(c) / t, n = e || c.drawRange, r = n.start / t, i = (n.start + n.count) / t, o = Math.max(0, r), a = Math.min(s, i) - o;
  return {
    offset: Math.floor(o),
    count: Math.floor(a)
  };
}
function Wr(c, e) {
  return c.groups.map((t) => ({
    offset: t.start / e,
    count: t.count / e
  }));
}
function Us(c, e, t) {
  const s = Yr(c, e, t), n = Wr(c, t);
  if (!n.length)
    return [s];
  const r = [], i = s.offset, o = s.offset + s.count, a = Tn(c) / t, u = [];
  for (const d of n) {
    const { offset: h, count: y } = d, x = h, p = isFinite(y) ? y : a - h, v = h + p;
    x < o && v > i && (u.push({ pos: Math.max(i, x), isStart: !0 }), u.push({ pos: Math.min(o, v), isStart: !1 }));
  }
  u.sort((d, h) => d.pos !== h.pos ? d.pos - h.pos : d.type === "end" ? -1 : 1);
  let f = 0, l = null;
  for (const d of u) {
    const h = d.pos;
    f !== 0 && h !== l && r.push({
      offset: l,
      count: h - l
    }), f += d.isStart ? 1 : -1, l = h;
  }
  return r;
}
function Xr(c, e) {
  const t = c[c.length - 1], s = t.offset + t.count > 2 ** 16, n = c.reduce((u, f) => u + f.count, 0), r = s ? 4 : 2, i = e ? new SharedArrayBuffer(n * r) : new ArrayBuffer(n * r), o = s ? new Uint32Array(i) : new Uint16Array(i);
  let a = 0;
  for (let u = 0; u < c.length; u++) {
    const { offset: f, count: l } = c[u];
    for (let d = 0; d < l; d++)
      o[a + d] = f + d;
    a += l;
  }
  return o;
}
class $r extends Gr {
  /**
   * Whether the BVH was built in indirect mode.
   * @type {boolean}
   * @readonly
   */
  get indirect() {
    return !!this._indirectBuffer;
  }
  get primitiveStride() {
    return null;
  }
  get primitiveBufferStride() {
    return this.indirect ? 1 : this.primitiveStride;
  }
  set primitiveBufferStride(e) {
  }
  get primitiveBuffer() {
    return this.indirect ? this._indirectBuffer : this.geometry.index.array;
  }
  set primitiveBuffer(e) {
  }
  constructor(e, t = {}) {
    if (e.isBufferGeometry) {
      if (e.index && e.index.isInterleavedBufferAttribute)
        throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.");
    } else throw new Error("BVH: Only BufferGeometries are supported.");
    if (t.useSharedArrayBuffer && !jr())
      throw new Error("BVH: SharedArrayBuffer is not available.");
    super(), this.geometry = e, this.resolvePrimitiveIndex = t.indirect ? (s) => this._indirectBuffer[s] : (s) => s, this.primitiveBuffer = null, this.primitiveBufferStride = null, this._indirectBuffer = null, t = {
      ...Ti,
      ...t
    }, t[ds] || this.init(t);
  }
  init(e) {
    const { geometry: t, primitiveStride: s } = this;
    if (e.indirect) {
      const n = Us(t, e.range, s), r = Xr(n, e.useSharedArrayBuffer);
      this._indirectBuffer = r;
    } else
      Kr(t, e);
    super.init(e), !t.boundingBox && e.setBoundingBox && (t.boundingBox = this.getBoundingBox(new De()));
  }
  // Abstract methods to be implemented by subclasses
  getRootRanges(e) {
    return this.indirect ? [{ offset: 0, count: this._indirectBuffer.length }] : Us(this.geometry, e, this.primitiveStride);
  }
  raycastObject3D() {
    throw new Error("BVH: raycastObject3D() not implemented");
  }
}
class Ke {
  constructor() {
    this.min = 1 / 0, this.max = -1 / 0;
  }
  setFromPointsField(e, t) {
    let s = 1 / 0, n = -1 / 0;
    for (let r = 0, i = e.length; r < i; r++) {
      const a = e[r][t];
      s = a < s ? a : s, n = a > n ? a : n;
    }
    this.min = s, this.max = n;
  }
  setFromPoints(e, t) {
    let s = 1 / 0, n = -1 / 0;
    for (let r = 0, i = t.length; r < i; r++) {
      const o = t[r], a = e.dot(o);
      s = a < s ? a : s, n = a > n ? a : n;
    }
    this.min = s, this.max = n;
  }
  isSeparated(e) {
    return this.min > e.max || e.min > this.max;
  }
}
Ke.prototype.setFromBox = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U();
  return function(t, s) {
    const n = s.min, r = s.max;
    let i = 1 / 0, o = -1 / 0;
    for (let a = 0; a <= 1; a++)
      for (let u = 0; u <= 1; u++)
        for (let f = 0; f <= 1; f++) {
          c.x = n.x * a + r.x * (1 - a), c.y = n.y * u + r.y * (1 - u), c.z = n.z * f + r.z * (1 - f);
          const l = t.dot(c);
          i = Math.min(l, i), o = Math.max(l, o);
        }
    this.min = i, this.max = o;
  };
})();
const qr = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new U();
  return function(n, r, i) {
    const o = n.start, a = c, u = r.start, f = e;
    t.subVectors(o, u), c.subVectors(n.end, n.start), e.subVectors(r.end, r.start);
    const l = t.dot(f), d = f.dot(a), h = f.dot(f), y = t.dot(a), p = a.dot(a) * h - d * d;
    let v, g;
    p !== 0 ? v = (l * d - y * h) / p : v = 0, g = (l + v * d) / h, i.x = v, i.y = g;
  };
})(), ms = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Le(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new U();
  return function(n, r, i, o) {
    qr(n, r, c);
    let a = c.x, u = c.y;
    if (a >= 0 && a <= 1 && u >= 0 && u <= 1) {
      n.at(a, i), r.at(u, o);
      return;
    } else if (a >= 0 && a <= 1) {
      u < 0 ? r.at(0, o) : r.at(1, o), n.closestPointToPoint(o, !0, i);
      return;
    } else if (u >= 0 && u <= 1) {
      a < 0 ? n.at(0, i) : n.at(1, i), r.closestPointToPoint(i, !0, o);
      return;
    } else {
      let f;
      a < 0 ? f = n.start : f = n.end;
      let l;
      u < 0 ? l = r.start : l = r.end;
      const d = e, h = t;
      if (n.closestPointToPoint(l, !0, e), r.closestPointToPoint(f, !0, t), d.distanceToSquared(l) <= h.distanceToSquared(f)) {
        i.copy(d), o.copy(l);
        return;
      } else {
        i.copy(f), o.copy(h);
        return;
      }
    }
  };
})(), Jr = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new ui(), s = /* @__PURE__ */ new je();
  return function(r, i) {
    const { radius: o, center: a } = r, { a: u, b: f, c: l } = i;
    if (s.start = u, s.end = f, s.closestPointToPoint(a, !0, c).distanceTo(a) <= o || (s.start = u, s.end = l, s.closestPointToPoint(a, !0, c).distanceTo(a) <= o) || (s.start = f, s.end = l, s.closestPointToPoint(a, !0, c).distanceTo(a) <= o)) return !0;
    const x = i.getPlane(t);
    if (Math.abs(x.distanceToPoint(a)) <= o) {
      const v = x.projectPoint(a, e);
      if (i.containsPoint(v)) return !0;
    }
    return !1;
  };
})(), Zr = ["x", "y", "z"], ze = 1e-15, Os = ze * ze;
function we(c) {
  return Math.abs(c) < ze;
}
class Ee extends At {
  constructor(...e) {
    super(...e), this.isExtendedTriangle = !0, this.satAxes = new Array(4).fill().map(() => new U()), this.satBounds = new Array(4).fill().map(() => new Ke()), this.points = [this.a, this.b, this.c], this.plane = new ui(), this.isDegenerateIntoSegment = !1, this.isDegenerateIntoPoint = !1, this.degenerateSegment = new je(), this.needsUpdate = !0;
  }
  /**
   * Returns whether the triangle intersects the given sphere.
   * @param {Sphere} sphere
   * @returns {boolean}
   */
  intersectsSphere(e) {
    return Jr(e, this);
  }
  update() {
    const e = this.a, t = this.b, s = this.c, n = this.points, r = this.satAxes, i = this.satBounds, o = r[0], a = i[0];
    this.getNormal(o), a.setFromPoints(o, n);
    const u = r[1], f = i[1];
    u.subVectors(e, t), f.setFromPoints(u, n);
    const l = r[2], d = i[2];
    l.subVectors(t, s), d.setFromPoints(l, n);
    const h = r[3], y = i[3];
    h.subVectors(s, e), y.setFromPoints(h, n);
    const x = u.length(), p = l.length(), v = h.length();
    this.isDegenerateIntoPoint = !1, this.isDegenerateIntoSegment = !1, x < ze ? p < ze || v < ze ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(e), this.degenerateSegment.end.copy(s)) : p < ze ? v < ze ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(t), this.degenerateSegment.end.copy(e)) : v < ze && (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(s), this.degenerateSegment.end.copy(t)), this.plane.setFromNormalAndCoplanarPoint(o, e), this.needsUpdate = !1;
  }
}
Ee.prototype.closestPointToSegment = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new je();
  return function(n, r = null, i = null) {
    const { start: o, end: a } = n, u = this.points;
    let f, l = 1 / 0;
    for (let d = 0; d < 3; d++) {
      const h = (d + 1) % 3;
      t.start.copy(u[d]), t.end.copy(u[h]), ms(t, n, c, e), f = c.distanceToSquared(e), f < l && (l = f, r && r.copy(c), i && i.copy(e));
    }
    return this.closestPointToPoint(o, c), f = o.distanceToSquared(c), f < l && (l = f, r && r.copy(c), i && i.copy(o)), this.closestPointToPoint(a, c), f = a.distanceToSquared(c), f < l && (l = f, r && r.copy(c), i && i.copy(a)), Math.sqrt(l);
  };
})();
Ee.prototype.intersectsTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Ee(), e = /* @__PURE__ */ new Ke(), t = /* @__PURE__ */ new Ke(), s = /* @__PURE__ */ new U(), n = /* @__PURE__ */ new U(), r = /* @__PURE__ */ new U(), i = /* @__PURE__ */ new U(), o = /* @__PURE__ */ new je(), a = /* @__PURE__ */ new je(), u = /* @__PURE__ */ new U(), f = /* @__PURE__ */ new Le(), l = /* @__PURE__ */ new Le();
  function d(_, m, w, R) {
    const M = s;
    !_.isDegenerateIntoPoint && !_.isDegenerateIntoSegment ? M.copy(_.plane.normal) : M.copy(m.plane.normal);
    const T = _.satBounds, S = _.satAxes;
    for (let b = 1; b < 4; b++) {
      const I = T[b], P = S[b];
      if (e.setFromPoints(P, m.points), I.isSeparated(e) || (i.copy(M).cross(P), e.setFromPoints(i, _.points), t.setFromPoints(i, m.points), e.isSeparated(t))) return !1;
    }
    const A = m.satBounds, E = m.satAxes;
    for (let b = 1; b < 4; b++) {
      const I = A[b], P = E[b];
      if (e.setFromPoints(P, _.points), I.isSeparated(e) || (i.crossVectors(M, P), e.setFromPoints(i, _.points), t.setFromPoints(i, m.points), e.isSeparated(t))) return !1;
    }
    return w && (R || console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."), w.start.set(0, 0, 0), w.end.set(0, 0, 0)), !0;
  }
  function h(_, m, w, R, M, T, S, A, E, b, I) {
    let P = S / (S - A);
    b.x = R + (M - R) * P, I.start.subVectors(m, _).multiplyScalar(P).add(_), P = S / (S - E), b.y = R + (T - R) * P, I.end.subVectors(w, _).multiplyScalar(P).add(_);
  }
  function y(_, m, w, R, M, T, S, A, E, b, I) {
    if (M > 0)
      h(_.c, _.a, _.b, R, m, w, E, S, A, b, I);
    else if (T > 0)
      h(_.b, _.a, _.c, w, m, R, A, S, E, b, I);
    else if (A * E > 0 || S != 0)
      h(_.a, _.b, _.c, m, w, R, S, A, E, b, I);
    else if (A != 0)
      h(_.b, _.a, _.c, w, m, R, A, S, E, b, I);
    else if (E != 0)
      h(_.c, _.a, _.b, R, m, w, E, S, A, b, I);
    else
      return !0;
    return !1;
  }
  function x(_, m, w, R) {
    const M = m.degenerateSegment, T = _.plane.distanceToPoint(M.start), S = _.plane.distanceToPoint(M.end);
    return we(T) ? we(S) ? d(_, m, w, R) : (w && (w.start.copy(M.start), w.end.copy(M.start)), _.containsPoint(M.start)) : we(S) ? (w && (w.start.copy(M.end), w.end.copy(M.end)), _.containsPoint(M.end)) : _.plane.intersectLine(M, s) != null ? (w && (w.start.copy(s), w.end.copy(s)), _.containsPoint(s)) : !1;
  }
  function p(_, m, w) {
    const R = m.a;
    return we(_.plane.distanceToPoint(R)) && _.containsPoint(R) ? (w && (w.start.copy(R), w.end.copy(R)), !0) : !1;
  }
  function v(_, m, w) {
    const R = _.degenerateSegment, M = m.a;
    return R.closestPointToPoint(M, !0, s), M.distanceToSquared(s) < Os ? (w && (w.start.copy(M), w.end.copy(M)), !0) : !1;
  }
  function g(_, m, w, R) {
    if (_.isDegenerateIntoSegment)
      if (m.isDegenerateIntoSegment) {
        const M = _.degenerateSegment, T = m.degenerateSegment, S = n, A = r;
        M.delta(S), T.delta(A);
        const E = s.subVectors(T.start, M.start), b = S.x * A.y - S.y * A.x;
        if (we(b))
          return !1;
        const I = (E.x * A.y - E.y * A.x) / b, P = -(S.x * E.y - S.y * E.x) / b;
        if (I < 0 || I > 1 || P < 0 || P > 1)
          return !1;
        const C = M.start.z + S.z * I, L = T.start.z + A.z * P;
        return we(C - L) ? (w && (w.start.copy(M.start).addScaledVector(S, I), w.end.copy(M.start).addScaledVector(S, I)), !0) : !1;
      } else return m.isDegenerateIntoPoint ? v(_, m, w) : x(m, _, w, R);
    else {
      if (_.isDegenerateIntoPoint)
        return m.isDegenerateIntoPoint ? m.a.distanceToSquared(_.a) < Os ? (w && (w.start.copy(_.a), w.end.copy(_.a)), !0) : !1 : m.isDegenerateIntoSegment ? v(m, _, w) : p(m, _, w);
      if (m.isDegenerateIntoPoint)
        return p(_, m, w);
      if (m.isDegenerateIntoSegment)
        return x(_, m, w, R);
    }
  }
  return function(m, w = null, R = !1) {
    this.needsUpdate && this.update(), m.isExtendedTriangle ? m.needsUpdate && m.update() : (c.copy(m), c.update(), m = c);
    const M = g(this, m, w, R);
    if (M !== void 0)
      return M;
    const T = this.plane, S = m.plane;
    let A = S.distanceToPoint(this.a), E = S.distanceToPoint(this.b), b = S.distanceToPoint(this.c);
    we(A) && (A = 0), we(E) && (E = 0), we(b) && (b = 0);
    const I = A * E, P = A * b;
    if (I > 0 && P > 0)
      return !1;
    let C = T.distanceToPoint(m.a), L = T.distanceToPoint(m.b), V = T.distanceToPoint(m.c);
    we(C) && (C = 0), we(L) && (L = 0), we(V) && (V = 0);
    const j = C * L, q = C * V;
    if (j > 0 && q > 0)
      return !1;
    n.copy(T.normal), r.copy(S.normal);
    const K = n.cross(r);
    let D = 0, F = Math.abs(K.x);
    const O = Math.abs(K.y);
    O > F && (F = O, D = 1), Math.abs(K.z) > F && (D = 2);
    const ge = Zr[D], _e = this.a[ge], k = this.b[ge], Y = this.c[ge], oe = m.a[ge], me = m.b[ge], Re = m.c[ge];
    if (y(this, _e, k, Y, I, P, A, E, b, f, o))
      return d(this, m, w, R);
    if (y(m, oe, me, Re, j, q, C, L, V, l, a))
      return d(this, m, w, R);
    if (f.y < f.x) {
      const le = f.y;
      f.y = f.x, f.x = le, u.copy(o.start), o.start.copy(o.end), o.end.copy(u);
    }
    if (l.y < l.x) {
      const le = l.y;
      l.y = l.x, l.x = le, u.copy(a.start), a.start.copy(a.end), a.end.copy(u);
    }
    return f.y < l.x || l.y < f.x ? !1 : (w && (l.x > f.x ? w.start.copy(a.start) : w.start.copy(o.start), l.y < f.y ? w.end.copy(a.end) : w.end.copy(o.end)), !0);
  };
})();
Ee.prototype.distanceToPoint = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U();
  return function(t) {
    return this.closestPointToPoint(t, c), t.distanceTo(c);
  };
})();
Ee.prototype.distanceToTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = ["a", "b", "c"], s = /* @__PURE__ */ new je(), n = /* @__PURE__ */ new je();
  return function(i, o = null, a = null) {
    const u = o || a ? s : null;
    if (this.intersectsTriangle(i, u, !0))
      return (o || a) && (o && u.getCenter(o), a && u.getCenter(a)), 0;
    let f = 1 / 0;
    for (let l = 0; l < 3; l++) {
      let d;
      const h = t[l], y = i[h];
      this.closestPointToPoint(y, c), d = y.distanceToSquared(c), d < f && (f = d, o && o.copy(c), a && a.copy(y));
      const x = this[h];
      i.closestPointToPoint(x, c), d = x.distanceToSquared(c), d < f && (f = d, o && o.copy(x), a && a.copy(c));
    }
    for (let l = 0; l < 3; l++) {
      const d = t[l], h = t[(l + 1) % 3];
      s.set(this[d], this[h]);
      for (let y = 0; y < 3; y++) {
        const x = t[y], p = t[(y + 1) % 3];
        n.set(i[x], i[p]), ms(s, n, c, e);
        const v = c.distanceToSquared(e);
        v < f && (f = v, o && o.copy(c), a && a.copy(e));
      }
    }
    return Math.sqrt(f);
  };
})();
class ve {
  constructor(e, t, s) {
    this.isOrientedBox = !0, this.min = new U(), this.max = new U(), this.matrix = new be(), this.invMatrix = new be(), this.points = new Array(8).fill().map(() => new U()), this.satAxes = new Array(3).fill().map(() => new U()), this.satBounds = new Array(3).fill().map(() => new Ke()), this.alignedSatBounds = new Array(3).fill().map(() => new Ke()), this.needsUpdate = !1, e && this.min.copy(e), t && this.max.copy(t), s && this.matrix.copy(s);
  }
  /**
   * Sets the oriented box parameters.
   * @param {Vector3} min
   * @param {Vector3} max
   * @param {Matrix4} matrix
   */
  set(e, t, s) {
    this.min.copy(e), this.max.copy(t), this.matrix.copy(s), this.needsUpdate = !0;
  }
  copy(e) {
    this.min.copy(e.min), this.max.copy(e.max), this.matrix.copy(e.matrix), this.needsUpdate = !0;
  }
}
ve.prototype.update = /* @__PURE__ */ (function() {
  return function() {
    const e = this.matrix, t = this.min, s = this.max, n = this.points;
    for (let u = 0; u <= 1; u++)
      for (let f = 0; f <= 1; f++)
        for (let l = 0; l <= 1; l++) {
          const d = 1 * u | 2 * f | 4 * l, h = n[d];
          h.x = u ? s.x : t.x, h.y = f ? s.y : t.y, h.z = l ? s.z : t.z, h.applyMatrix4(e);
        }
    const r = this.satBounds, i = this.satAxes, o = n[0];
    for (let u = 0; u < 3; u++) {
      const f = i[u], l = r[u], d = 1 << u, h = n[d];
      f.subVectors(o, h), l.setFromPoints(f, n);
    }
    const a = this.alignedSatBounds;
    a[0].setFromPointsField(n, "x"), a[1].setFromPointsField(n, "y"), a[2].setFromPointsField(n, "z"), this.invMatrix.copy(this.matrix).invert(), this.needsUpdate = !1;
  };
})();
ve.prototype.intersectsBox = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Ke();
  return function(t) {
    this.needsUpdate && this.update();
    const s = t.min, n = t.max, r = this.satBounds, i = this.satAxes, o = this.alignedSatBounds;
    if (c.min = s.x, c.max = n.x, o[0].isSeparated(c) || (c.min = s.y, c.max = n.y, o[1].isSeparated(c)) || (c.min = s.z, c.max = n.z, o[2].isSeparated(c))) return !1;
    for (let a = 0; a < 3; a++) {
      const u = i[a], f = r[a];
      if (c.setFromBox(u, t), f.isSeparated(c)) return !1;
    }
    return !0;
  };
})();
ve.prototype.intersectsTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Ee(), e = /* @__PURE__ */ new Array(3), t = /* @__PURE__ */ new Ke(), s = /* @__PURE__ */ new Ke(), n = /* @__PURE__ */ new U();
  return function(i) {
    this.needsUpdate && this.update(), i.isExtendedTriangle ? i.needsUpdate && i.update() : (c.copy(i), c.update(), i = c);
    const o = this.satBounds, a = this.satAxes;
    e[0] = i.a, e[1] = i.b, e[2] = i.c;
    for (let d = 0; d < 3; d++) {
      const h = o[d], y = a[d];
      if (t.setFromPoints(y, e), h.isSeparated(t)) return !1;
    }
    const u = i.satBounds, f = i.satAxes, l = this.points;
    for (let d = 0; d < 3; d++) {
      const h = u[d], y = f[d];
      if (t.setFromPoints(y, l), h.isSeparated(t)) return !1;
    }
    for (let d = 0; d < 3; d++) {
      const h = a[d];
      for (let y = 0; y < 4; y++) {
        const x = f[y];
        if (n.crossVectors(h, x), t.setFromPoints(n, e), s.setFromPoints(n, l), t.isSeparated(s)) return !1;
      }
    }
    return !0;
  };
})();
ve.prototype.closestPointToPoint = /* @__PURE__ */ (function() {
  return function(e, t) {
    return this.needsUpdate && this.update(), t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min, this.max).applyMatrix4(this.matrix), t;
  };
})();
ve.prototype.distanceToPoint = (function() {
  const c = new U();
  return function(t) {
    return this.closestPointToPoint(t, c), t.distanceTo(c);
  };
})();
ve.prototype.distanceToBox = /* @__PURE__ */ (function() {
  const c = ["x", "y", "z"], e = /* @__PURE__ */ new Array(12).fill().map(() => new je()), t = /* @__PURE__ */ new Array(12).fill().map(() => new je()), s = /* @__PURE__ */ new U(), n = /* @__PURE__ */ new U();
  return function(i, o = 0, a = null, u = null) {
    if (this.needsUpdate && this.update(), this.intersectsBox(i))
      return (a || u) && (i.getCenter(n), this.closestPointToPoint(n, s), i.closestPointToPoint(s, n), a && a.copy(s), u && u.copy(n)), 0;
    const f = o * o, l = i.min, d = i.max, h = this.points;
    let y = 1 / 0;
    for (let p = 0; p < 8; p++) {
      const v = h[p];
      n.copy(v).clamp(l, d);
      const g = v.distanceToSquared(n);
      if (g < y && (y = g, a && a.copy(v), u && u.copy(n), g < f))
        return Math.sqrt(g);
    }
    let x = 0;
    for (let p = 0; p < 3; p++)
      for (let v = 0; v <= 1; v++)
        for (let g = 0; g <= 1; g++) {
          const _ = (p + 1) % 3, m = (p + 2) % 3, w = v << _ | g << m, R = 1 << p | v << _ | g << m, M = h[w], T = h[R];
          e[x].set(M, T);
          const A = c[p], E = c[_], b = c[m], I = t[x], P = I.start, C = I.end;
          P[A] = l[A], P[E] = v ? l[E] : d[E], P[b] = g ? l[b] : d[E], C[A] = d[A], C[E] = v ? l[E] : d[E], C[b] = g ? l[b] : d[E], x++;
        }
    for (let p = 0; p <= 1; p++)
      for (let v = 0; v <= 1; v++)
        for (let g = 0; g <= 1; g++) {
          n.x = p ? d.x : l.x, n.y = v ? d.y : l.y, n.z = g ? d.z : l.z, this.closestPointToPoint(n, s);
          const _ = n.distanceToSquared(s);
          if (_ < y && (y = _, a && a.copy(s), u && u.copy(n), _ < f))
            return Math.sqrt(_);
        }
    for (let p = 0; p < 12; p++) {
      const v = e[p];
      for (let g = 0; g < 12; g++) {
        const _ = t[g];
        ms(v, _, s, n);
        const m = s.distanceToSquared(n);
        if (m < y && (y = m, a && a.copy(s), u && u.copy(n), m < f))
          return Math.sqrt(m);
      }
    }
    return Math.sqrt(y);
  };
})();
class Qr extends hs {
  constructor() {
    super(() => new Ee());
  }
}
const Ae = /* @__PURE__ */ new Qr(), Bt = /* @__PURE__ */ new U(), Un = /* @__PURE__ */ new U();
function eo(c, e, t = {}, s = 0, n = 1 / 0) {
  const r = s * s, i = n * n;
  let o = 1 / 0, a = null;
  if (c.shapecast(
    {
      boundsTraverseOrder: (f) => (Bt.copy(e).clamp(f.min, f.max), Bt.distanceToSquared(e)),
      intersectsBounds: (f, l, d) => d < o && d < i,
      intersectsTriangle: (f, l) => {
        f.closestPointToPoint(e, Bt);
        const d = e.distanceToSquared(Bt);
        return d < o && (Un.copy(Bt), o = d, a = l), d < r;
      }
    }
  ), o === 1 / 0) return null;
  const u = Math.sqrt(o);
  return t.point ? t.point.copy(Un) : t.point = Un.clone(), t.distance = u, t.faceIndex = a, t;
}
const en = parseInt(di) >= 169, to = parseInt(di) <= 161, at = /* @__PURE__ */ new U(), ct = /* @__PURE__ */ new U(), lt = /* @__PURE__ */ new U(), tn = /* @__PURE__ */ new Le(), nn = /* @__PURE__ */ new Le(), sn = /* @__PURE__ */ new Le(), ks = /* @__PURE__ */ new U(), Hs = /* @__PURE__ */ new U(), Vs = /* @__PURE__ */ new U(), Ct = /* @__PURE__ */ new U();
function no(c, e, t, s, n, r, i, o) {
  let a;
  if (r === Oi ? a = c.intersectTriangle(s, t, e, !0, n) : a = c.intersectTriangle(e, t, s, r !== fi, n), a === null) return null;
  const u = c.origin.distanceTo(n);
  return u < i || u > o ? null : {
    distance: u,
    point: n.clone()
  };
}
function zs(c, e, t, s, n, r, i, o, a, u, f) {
  at.fromBufferAttribute(e, r), ct.fromBufferAttribute(e, i), lt.fromBufferAttribute(e, o);
  const l = no(c, at, ct, lt, Ct, a, u, f);
  if (l) {
    if (s) {
      tn.fromBufferAttribute(s, r), nn.fromBufferAttribute(s, i), sn.fromBufferAttribute(s, o), l.uv = new Le();
      const h = At.getInterpolation(Ct, at, ct, lt, tn, nn, sn, l.uv);
      en || (l.uv = h);
    }
    if (n) {
      tn.fromBufferAttribute(n, r), nn.fromBufferAttribute(n, i), sn.fromBufferAttribute(n, o), l.uv1 = new Le();
      const h = At.getInterpolation(Ct, at, ct, lt, tn, nn, sn, l.uv1);
      en || (l.uv1 = h), to && (l.uv2 = l.uv1);
    }
    if (t) {
      ks.fromBufferAttribute(t, r), Hs.fromBufferAttribute(t, i), Vs.fromBufferAttribute(t, o), l.normal = new U();
      const h = At.getInterpolation(Ct, at, ct, lt, ks, Hs, Vs, l.normal);
      l.normal.dot(c.direction) > 0 && l.normal.multiplyScalar(-1), en || (l.normal = h);
    }
    const d = {
      a: r,
      b: i,
      c: o,
      normal: new U(),
      materialIndex: 0
    };
    if (At.getNormal(at, ct, lt, d.normal), l.face = d, l.faceIndex = r, en) {
      const h = new U();
      At.getBarycoord(Ct, at, ct, lt, h), l.barycoord = h;
    }
  }
  return l;
}
function Gs(c) {
  return c && c.isMaterial ? c.side : c;
}
function An(c, e, t, s, n, r, i) {
  const o = s * 3;
  let a = o + 0, u = o + 1, f = o + 2;
  const { index: l, groups: d } = c;
  c.index && (a = l.getX(a), u = l.getX(u), f = l.getX(f));
  const { position: h, normal: y, uv: x, uv1: p } = c.attributes;
  if (Array.isArray(e)) {
    const v = s * 3;
    for (let g = 0, _ = d.length; g < _; g++) {
      const { start: m, count: w, materialIndex: R } = d[g];
      if (v >= m && v < m + w) {
        const M = Gs(e[R]), T = zs(t, h, y, x, p, a, u, f, M, r, i);
        if (T)
          if (T.faceIndex = s, T.face.materialIndex = R, n)
            n.push(T);
          else
            return T;
      }
    }
  } else {
    const v = Gs(e), g = zs(t, h, y, x, p, a, u, f, v, r, i);
    if (g)
      if (g.faceIndex = s, g.face.materialIndex = 0, n)
        n.push(g);
      else
        return g;
  }
  return null;
}
function re(c, e, t, s) {
  const n = c.a, r = c.b, i = c.c;
  let o = e, a = e + 1, u = e + 2;
  t && (o = t.getX(o), a = t.getX(a), u = t.getX(u)), n.x = s.getX(o), n.y = s.getY(o), n.z = s.getZ(o), r.x = s.getX(a), r.y = s.getY(a), r.z = s.getZ(a), i.x = s.getX(u), i.y = s.getY(u), i.z = s.getZ(u);
}
function so(c, e, t, s, n, r, i, o) {
  const { geometry: a, _indirectBuffer: u } = c;
  for (let f = s, l = s + n; f < l; f++)
    An(a, e, t, f, r, i, o);
}
function io(c, e, t, s, n, r, i) {
  const { geometry: o, _indirectBuffer: a } = c;
  let u = 1 / 0, f = null;
  for (let l = s, d = s + n; l < d; l++) {
    let h;
    h = An(o, e, t, l, null, r, i), h && h.distance < u && (f = h, u = h.distance);
  }
  return f;
}
function ro(c, e, t, s, n, r, i) {
  const { geometry: o } = t, { index: a } = o, u = o.attributes.position;
  for (let f = c, l = e + c; f < l; f++) {
    let d;
    if (d = f, re(i, d * 3, a, u), i.needsUpdate = !0, s(i, d, n, r))
      return !0;
  }
  return !1;
}
function oo(c, e = null) {
  e && Array.isArray(e) && (e = new Set(e));
  const t = c.geometry, s = t.index ? t.index.array : null, n = t.attributes.position;
  let r, i, o, a, u = 0;
  const f = c._roots;
  for (let d = 0, h = f.length; d < h; d++)
    r = f[d], i = new Uint32Array(r), o = new Uint16Array(r), a = new Float32Array(r), l(0, u), u += r.byteLength;
  function l(d, h, y = !1) {
    const x = d * 2;
    if (ie(x, o)) {
      const p = pe(d, i), v = ye(x, o);
      let g = 1 / 0, _ = 1 / 0, m = 1 / 0, w = -1 / 0, R = -1 / 0, M = -1 / 0;
      for (let T = 3 * p, S = 3 * (p + v); T < S; T++) {
        let A = s[T];
        const E = n.getX(A), b = n.getY(A), I = n.getZ(A);
        E < g && (g = E), E > w && (w = E), b < _ && (_ = b), b > R && (R = b), I < m && (m = I), I > M && (M = I);
      }
      return a[d + 0] !== g || a[d + 1] !== _ || a[d + 2] !== m || a[d + 3] !== w || a[d + 4] !== R || a[d + 5] !== M ? (a[d + 0] = g, a[d + 1] = _, a[d + 2] = m, a[d + 3] = w, a[d + 4] = R, a[d + 5] = M, !0) : !1;
    } else {
      const p = de(d), v = he(d, i);
      let g = y, _ = !1, m = !1;
      if (e) {
        if (!g) {
          const A = p / ce + h / fe, E = v / ce + h / fe;
          _ = e.has(A), m = e.has(E), g = !_ && !m;
        }
      } else
        _ = !0, m = !0;
      const w = g || _, R = g || m;
      let M = !1;
      w && (M = l(p, h, g));
      let T = !1;
      R && (T = l(v, h, g));
      const S = M || T;
      if (S)
        for (let A = 0; A < 3; A++) {
          const E = p + A, b = v + A, I = a[E], P = a[E + 3], C = a[b], L = a[b + 3];
          a[d + A] = I < C ? I : C, a[d + A + 3] = P > L ? P : L;
        }
      return S;
    }
  }
}
function tt(c, e, t, s, n) {
  let r, i, o, a, u, f;
  const l = 1 / t.direction.x, d = 1 / t.direction.y, h = 1 / t.direction.z, y = t.origin.x, x = t.origin.y, p = t.origin.z;
  let v = e[c], g = e[c + 3], _ = e[c + 1], m = e[c + 3 + 1], w = e[c + 2], R = e[c + 3 + 2];
  return l >= 0 ? (r = (v - y) * l, i = (g - y) * l) : (r = (g - y) * l, i = (v - y) * l), d >= 0 ? (o = (_ - x) * d, a = (m - x) * d) : (o = (m - x) * d, a = (_ - x) * d), r > a || o > i || ((o > r || isNaN(r)) && (r = o), (a < i || isNaN(i)) && (i = a), h >= 0 ? (u = (w - p) * h, f = (R - p) * h) : (u = (R - p) * h, f = (w - p) * h), r > f || u > i) ? !1 : ((u > r || r !== r) && (r = u), (f < i || i !== i) && (i = f), r <= n && i >= s);
}
function ao(c, e, t, s, n, r, i, o) {
  const { geometry: a, _indirectBuffer: u } = c;
  for (let f = s, l = s + n; f < l; f++) {
    let d = u ? u[f] : f;
    An(a, e, t, d, r, i, o);
  }
}
function co(c, e, t, s, n, r, i) {
  const { geometry: o, _indirectBuffer: a } = c;
  let u = 1 / 0, f = null;
  for (let l = s, d = s + n; l < d; l++) {
    let h;
    h = An(o, e, t, a ? a[l] : l, null, r, i), h && h.distance < u && (f = h, u = h.distance);
  }
  return f;
}
function lo(c, e, t, s, n, r, i) {
  const { geometry: o } = t, { index: a } = o, u = o.attributes.position;
  for (let f = c, l = e + c; f < l; f++) {
    let d;
    if (d = t.resolveTriangleIndex(f), re(i, d * 3, a, u), i.needsUpdate = !0, s(i, d, n, r))
      return !0;
  }
  return !1;
}
function uo(c, e, t, s, n, r, i) {
  J.setBuffer(c._roots[e]), Qn(0, c, t, s, n, r, i), J.clearBuffer();
}
function Qn(c, e, t, s, n, r, i) {
  const { float32Array: o, uint16Array: a, uint32Array: u } = J, f = c * 2;
  if (ie(f, a)) {
    const d = pe(c, u), h = ye(f, a);
    so(e, t, s, d, h, n, r, i);
  } else {
    const d = de(c);
    tt(d, o, s, r, i) && Qn(d, e, t, s, n, r, i);
    const h = he(c, u);
    tt(h, o, s, r, i) && Qn(h, e, t, s, n, r, i);
  }
}
const fo = ["x", "y", "z"];
function ho(c, e, t, s, n, r) {
  J.setBuffer(c._roots[e]);
  const i = es(0, c, t, s, n, r);
  return J.clearBuffer(), i;
}
function es(c, e, t, s, n, r) {
  const { float32Array: i, uint16Array: o, uint32Array: a } = J;
  let u = c * 2;
  if (ie(u, o)) {
    const l = pe(c, a), d = ye(u, o);
    return io(e, t, s, l, d, n, r);
  } else {
    const l = wn(c, a), d = fo[l], y = s.direction[d] >= 0;
    let x, p;
    y ? (x = de(c), p = he(c, a)) : (x = he(c, a), p = de(c));
    const g = tt(x, i, s, n, r) ? es(x, e, t, s, n, r) : null;
    if (g) {
      const w = g.point[d];
      if (y ? w <= i[p + l] : (
        // min bounding data
        w >= i[p + l + 3]
      ))
        return g;
    }
    const m = tt(p, i, s, n, r) ? es(p, e, t, s, n, r) : null;
    return g && m ? g.distance <= m.distance ? g : m : g || m || null;
  }
}
const rn = /* @__PURE__ */ new De(), _t = /* @__PURE__ */ new Ee(), wt = /* @__PURE__ */ new Ee(), Nt = /* @__PURE__ */ new be(), js = /* @__PURE__ */ new ve(), on = /* @__PURE__ */ new ve();
function mo(c, e, t, s) {
  J.setBuffer(c._roots[e]);
  const n = ts(0, c, t, s);
  return J.clearBuffer(), n;
}
function ts(c, e, t, s, n = null) {
  const { float32Array: r, uint16Array: i, uint32Array: o } = J;
  let a = c * 2;
  if (n === null && (t.boundingBox || t.computeBoundingBox(), js.set(t.boundingBox.min, t.boundingBox.max, s), n = js), ie(a, i)) {
    const f = e.geometry, l = f.index, d = f.attributes.position, h = t.index, y = t.attributes.position, x = pe(c, o), p = ye(a, i);
    if (Nt.copy(s).invert(), t.boundsTree)
      return te(c, r, on), on.matrix.copy(Nt), on.needsUpdate = !0, t.boundsTree.shapecast({
        intersectsBounds: (g) => on.intersectsBox(g),
        intersectsTriangle: (g) => {
          g.a.applyMatrix4(s), g.b.applyMatrix4(s), g.c.applyMatrix4(s), g.needsUpdate = !0;
          for (let _ = x * 3, m = (p + x) * 3; _ < m; _ += 3)
            if (re(wt, _, l, d), wt.needsUpdate = !0, g.intersectsTriangle(wt))
              return !0;
          return !1;
        }
      });
    {
      const v = Mn(t);
      for (let g = x * 3, _ = (p + x) * 3; g < _; g += 3) {
        re(_t, g, l, d), _t.a.applyMatrix4(Nt), _t.b.applyMatrix4(Nt), _t.c.applyMatrix4(Nt), _t.needsUpdate = !0;
        for (let m = 0, w = v * 3; m < w; m += 3)
          if (re(wt, m, h, y), wt.needsUpdate = !0, _t.intersectsTriangle(wt))
            return !0;
      }
    }
  } else {
    const f = de(c), l = he(c, o);
    return te(f, r, rn), !!(n.intersectsBox(rn) && ts(f, e, t, s, n) || (te(l, r, rn), n.intersectsBox(rn) && ts(l, e, t, s, n)));
  }
}
const an = /* @__PURE__ */ new be(), On = /* @__PURE__ */ new ve(), Lt = /* @__PURE__ */ new ve(), po = /* @__PURE__ */ new U(), go = /* @__PURE__ */ new U(), xo = /* @__PURE__ */ new U(), yo = /* @__PURE__ */ new U();
function vo(c, e, t, s = {}, n = {}, r = 0, i = 1 / 0) {
  e.boundingBox || e.computeBoundingBox(), On.set(e.boundingBox.min, e.boundingBox.max, t), On.needsUpdate = !0;
  const o = c.geometry, a = o.attributes.position, u = o.index, f = e.attributes.position, l = e.index, d = Ae.getPrimitive(), h = Ae.getPrimitive();
  let y = po, x = go, p = null, v = null;
  n && (p = xo, v = yo);
  let g = 1 / 0, _ = null, m = null;
  return an.copy(t).invert(), Lt.matrix.copy(an), c.shapecast(
    {
      boundsTraverseOrder: (w) => On.distanceToBox(w),
      intersectsBounds: (w, R, M) => M < g && M < i ? (R && (Lt.min.copy(w.min), Lt.max.copy(w.max), Lt.needsUpdate = !0), !0) : !1,
      intersectsRange: (w, R) => {
        if (e.boundsTree)
          return e.boundsTree.shapecast({
            boundsTraverseOrder: (T) => Lt.distanceToBox(T),
            intersectsBounds: (T, S, A) => A < g && A < i,
            intersectsRange: (T, S) => {
              for (let A = T, E = T + S; A < E; A++) {
                re(h, 3 * A, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
                for (let b = w, I = w + R; b < I; b++) {
                  re(d, 3 * b, u, a), d.needsUpdate = !0;
                  const P = d.distanceToTriangle(h, y, p);
                  if (P < g && (x.copy(y), v && v.copy(p), g = P, _ = b, m = A), P < r)
                    return !0;
                }
              }
            }
          });
        {
          const M = Mn(e);
          for (let T = 0, S = M; T < S; T++) {
            re(h, 3 * T, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
            for (let A = w, E = w + R; A < E; A++) {
              re(d, 3 * A, u, a), d.needsUpdate = !0;
              const b = d.distanceToTriangle(h, y, p);
              if (b < g && (x.copy(y), v && v.copy(p), g = b, _ = A, m = T), b < r)
                return !0;
            }
          }
        }
      }
    }
  ), Ae.releasePrimitive(d), Ae.releasePrimitive(h), g === 1 / 0 ? null : (s.point ? s.point.copy(x) : s.point = x.clone(), s.distance = g, s.faceIndex = _, n && (n.point ? n.point.copy(v) : n.point = v.clone(), n.point.applyMatrix4(an), x.applyMatrix4(an), n.distance = x.sub(n.point).length(), n.faceIndex = m), s);
}
function _o(c, e = null) {
  e && Array.isArray(e) && (e = new Set(e));
  const t = c.geometry, s = t.index ? t.index.array : null, n = t.attributes.position;
  let r, i, o, a, u = 0;
  const f = c._roots;
  for (let d = 0, h = f.length; d < h; d++)
    r = f[d], i = new Uint32Array(r), o = new Uint16Array(r), a = new Float32Array(r), l(0, u), u += r.byteLength;
  function l(d, h, y = !1) {
    const x = d * 2;
    if (ie(x, o)) {
      const p = pe(d, i), v = ye(x, o);
      let g = 1 / 0, _ = 1 / 0, m = 1 / 0, w = -1 / 0, R = -1 / 0, M = -1 / 0;
      for (let T = p, S = p + v; T < S; T++) {
        const A = 3 * c.resolveTriangleIndex(T);
        for (let E = 0; E < 3; E++) {
          let b = A + E;
          b = s ? s[b] : b;
          const I = n.getX(b), P = n.getY(b), C = n.getZ(b);
          I < g && (g = I), I > w && (w = I), P < _ && (_ = P), P > R && (R = P), C < m && (m = C), C > M && (M = C);
        }
      }
      return a[d + 0] !== g || a[d + 1] !== _ || a[d + 2] !== m || a[d + 3] !== w || a[d + 4] !== R || a[d + 5] !== M ? (a[d + 0] = g, a[d + 1] = _, a[d + 2] = m, a[d + 3] = w, a[d + 4] = R, a[d + 5] = M, !0) : !1;
    } else {
      const p = de(d), v = he(d, i);
      let g = y, _ = !1, m = !1;
      if (e) {
        if (!g) {
          const A = p / ce + h / fe, E = v / ce + h / fe;
          _ = e.has(A), m = e.has(E), g = !_ && !m;
        }
      } else
        _ = !0, m = !0;
      const w = g || _, R = g || m;
      let M = !1;
      w && (M = l(p, h, g));
      let T = !1;
      R && (T = l(v, h, g));
      const S = M || T;
      if (S)
        for (let A = 0; A < 3; A++) {
          const E = p + A, b = v + A, I = a[E], P = a[E + 3], C = a[b], L = a[b + 3];
          a[d + A] = I < C ? I : C, a[d + A + 3] = P > L ? P : L;
        }
      return S;
    }
  }
}
function wo(c, e, t, s, n, r, i) {
  J.setBuffer(c._roots[e]), ns(0, c, t, s, n, r, i), J.clearBuffer();
}
function ns(c, e, t, s, n, r, i) {
  const { float32Array: o, uint16Array: a, uint32Array: u } = J, f = c * 2;
  if (ie(f, a)) {
    const d = pe(c, u), h = ye(f, a);
    ao(e, t, s, d, h, n, r, i);
  } else {
    const d = de(c);
    tt(d, o, s, r, i) && ns(d, e, t, s, n, r, i);
    const h = he(c, u);
    tt(h, o, s, r, i) && ns(h, e, t, s, n, r, i);
  }
}
const To = ["x", "y", "z"];
function Mo(c, e, t, s, n, r) {
  J.setBuffer(c._roots[e]);
  const i = ss(0, c, t, s, n, r);
  return J.clearBuffer(), i;
}
function ss(c, e, t, s, n, r) {
  const { float32Array: i, uint16Array: o, uint32Array: a } = J;
  let u = c * 2;
  if (ie(u, o)) {
    const l = pe(c, a), d = ye(u, o);
    return co(e, t, s, l, d, n, r);
  } else {
    const l = wn(c, a), d = To[l], y = s.direction[d] >= 0;
    let x, p;
    y ? (x = de(c), p = he(c, a)) : (x = he(c, a), p = de(c));
    const g = tt(x, i, s, n, r) ? ss(x, e, t, s, n, r) : null;
    if (g) {
      const w = g.point[d];
      if (y ? w <= i[p + l] : (
        // min bounding data
        w >= i[p + l + 3]
      ))
        return g;
    }
    const m = tt(p, i, s, n, r) ? ss(p, e, t, s, n, r) : null;
    return g && m ? g.distance <= m.distance ? g : m : g || m || null;
  }
}
const cn = /* @__PURE__ */ new De(), Tt = /* @__PURE__ */ new Ee(), Mt = /* @__PURE__ */ new Ee(), Ft = /* @__PURE__ */ new be(), Ks = /* @__PURE__ */ new ve(), ln = /* @__PURE__ */ new ve();
function Ao(c, e, t, s) {
  J.setBuffer(c._roots[e]);
  const n = is(0, c, t, s);
  return J.clearBuffer(), n;
}
function is(c, e, t, s, n = null) {
  const { float32Array: r, uint16Array: i, uint32Array: o } = J;
  let a = c * 2;
  if (n === null && (t.boundingBox || t.computeBoundingBox(), Ks.set(t.boundingBox.min, t.boundingBox.max, s), n = Ks), ie(a, i)) {
    const f = e.geometry, l = f.index, d = f.attributes.position, h = t.index, y = t.attributes.position, x = pe(c, o), p = ye(a, i);
    if (Ft.copy(s).invert(), t.boundsTree)
      return te(c, r, ln), ln.matrix.copy(Ft), ln.needsUpdate = !0, t.boundsTree.shapecast({
        intersectsBounds: (g) => ln.intersectsBox(g),
        intersectsTriangle: (g) => {
          g.a.applyMatrix4(s), g.b.applyMatrix4(s), g.c.applyMatrix4(s), g.needsUpdate = !0;
          for (let _ = x, m = p + x; _ < m; _++)
            if (re(Mt, 3 * e.resolveTriangleIndex(_), l, d), Mt.needsUpdate = !0, g.intersectsTriangle(Mt))
              return !0;
          return !1;
        }
      });
    {
      const v = Mn(t);
      for (let g = x, _ = p + x; g < _; g++) {
        const m = e.resolveTriangleIndex(g);
        re(Tt, 3 * m, l, d), Tt.a.applyMatrix4(Ft), Tt.b.applyMatrix4(Ft), Tt.c.applyMatrix4(Ft), Tt.needsUpdate = !0;
        for (let w = 0, R = v * 3; w < R; w += 3)
          if (re(Mt, w, h, y), Mt.needsUpdate = !0, Tt.intersectsTriangle(Mt))
            return !0;
      }
    }
  } else {
    const f = de(c), l = he(c, o);
    return te(f, r, cn), !!(n.intersectsBox(cn) && is(f, e, t, s, n) || (te(l, r, cn), n.intersectsBox(cn) && is(l, e, t, s, n)));
  }
}
const un = /* @__PURE__ */ new be(), kn = /* @__PURE__ */ new ve(), Ut = /* @__PURE__ */ new ve(), bo = /* @__PURE__ */ new U(), Ro = /* @__PURE__ */ new U(), So = /* @__PURE__ */ new U(), Eo = /* @__PURE__ */ new U();
function Do(c, e, t, s = {}, n = {}, r = 0, i = 1 / 0) {
  e.boundingBox || e.computeBoundingBox(), kn.set(e.boundingBox.min, e.boundingBox.max, t), kn.needsUpdate = !0;
  const o = c.geometry, a = o.attributes.position, u = o.index, f = e.attributes.position, l = e.index, d = Ae.getPrimitive(), h = Ae.getPrimitive();
  let y = bo, x = Ro, p = null, v = null;
  n && (p = So, v = Eo);
  let g = 1 / 0, _ = null, m = null;
  return un.copy(t).invert(), Ut.matrix.copy(un), c.shapecast(
    {
      boundsTraverseOrder: (w) => kn.distanceToBox(w),
      intersectsBounds: (w, R, M) => M < g && M < i ? (R && (Ut.min.copy(w.min), Ut.max.copy(w.max), Ut.needsUpdate = !0), !0) : !1,
      intersectsRange: (w, R) => {
        if (e.boundsTree) {
          const M = e.boundsTree;
          return M.shapecast({
            boundsTraverseOrder: (T) => Ut.distanceToBox(T),
            intersectsBounds: (T, S, A) => A < g && A < i,
            intersectsRange: (T, S) => {
              for (let A = T, E = T + S; A < E; A++) {
                const b = M.resolveTriangleIndex(A);
                re(h, 3 * b, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
                for (let I = w, P = w + R; I < P; I++) {
                  const C = c.resolveTriangleIndex(I);
                  re(d, 3 * C, u, a), d.needsUpdate = !0;
                  const L = d.distanceToTriangle(h, y, p);
                  if (L < g && (x.copy(y), v && v.copy(p), g = L, _ = I, m = A), L < r)
                    return !0;
                }
              }
            }
          });
        } else {
          const M = Mn(e);
          for (let T = 0, S = M; T < S; T++) {
            re(h, 3 * T, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
            for (let A = w, E = w + R; A < E; A++) {
              const b = c.resolveTriangleIndex(A);
              re(d, 3 * b, u, a), d.needsUpdate = !0;
              const I = d.distanceToTriangle(h, y, p);
              if (I < g && (x.copy(y), v && v.copy(p), g = I, _ = A, m = T), I < r)
                return !0;
            }
          }
        }
      }
    }
  ), Ae.releasePrimitive(d), Ae.releasePrimitive(h), g === 1 / 0 ? null : (s.point ? s.point.copy(x) : s.point = x.clone(), s.distance = g, s.faceIndex = _, n && (n.point ? n.point.copy(v) : n.point = v.clone(), n.point.applyMatrix4(un), x.applyMatrix4(un), n.distance = x.sub(n.point).length(), n.faceIndex = m), s);
}
function Ys(c, e, t) {
  return c === null ? null : (c.point.applyMatrix4(e.matrixWorld), c.distance = c.point.distanceTo(t.ray.origin), c.object = e, c);
}
const fn = /* @__PURE__ */ new ve(), dn = /* @__PURE__ */ new ki(), Ws = /* @__PURE__ */ new U(), Xs = /* @__PURE__ */ new be(), $s = /* @__PURE__ */ new U(), Hn = ["getX", "getY", "getZ"];
class vn extends $r {
  /**
   * Generates a representation of the complete bounds tree and the geometry index buffer which
   * can be used to recreate a bounds tree using the `deserialize` function. The `serialize` and
   * `deserialize` functions can be used to generate a MeshBVH asynchronously in a background web
   * worker to prevent the main thread from stuttering. The BVH roots buffer stored in the
   * serialized representation are the same as the ones used by the original BVH so they should
   * not be modified. If `SharedArrayBuffers` are used then the same BVH memory can be used for
   * multiple BVH in multiple WebWorkers.
   *
   * @static
   * @param {MeshBVH} bvh - The BVH to serialize.
   * @param {Object} [options]
   * @param {boolean} [options.cloneBuffers=true] - If `true`, the index and BVH root buffers
   *   are cloned so the serialized data is independent of the live BVH.
   * @returns {SerializedBVH}
   */
  static serialize(e, t = {}) {
    t = {
      cloneBuffers: !0,
      ...t
    };
    const s = e.geometry, n = e._roots, r = e._indirectBuffer, i = s.getIndex(), o = {
      version: 1,
      roots: null,
      index: null,
      indirectBuffer: null
    };
    return t.cloneBuffers ? (o.roots = n.map((a) => a.slice()), o.index = i ? i.array.slice() : null, o.indirectBuffer = r ? r.slice() : null) : (o.roots = n, o.index = i ? i.array : null, o.indirectBuffer = r), o;
  }
  /**
   * Returns a new MeshBVH instance from the serialized data. `geometry` is the geometry used
   * to generate the original BVH `data` was derived from. The root buffers stored in `data`
   * are set directly on the new BVH so the memory is shared.
   *
   * @static
   * @param {SerializedBVH} data - Serialized BVH data.
   * @param {BufferGeometry} geometry - The geometry the BVH was originally built from.
   * @param {Object} [options]
   * @param {boolean} [options.setIndex=true] - If `true`, sets `geometry.index` from the
   *   serialized index buffer (creating one if none exists).
   * @returns {MeshBVH}
   */
  static deserialize(e, t, s = {}) {
    s = {
      setIndex: !0,
      indirect: !!e.indirectBuffer,
      ...s
    };
    const { index: n, roots: r, indirectBuffer: i } = e;
    e.version || (console.warn(
      "MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."
    ), a(r));
    const o = new vn(t, { ...s, [ds]: !0 });
    if (o._roots = r, o._indirectBuffer = i || null, s.setIndex) {
      const u = t.getIndex();
      if (u === null) {
        const f = new Rt(e.index, 1, !1);
        t.setIndex(f);
      } else u.array !== n && (u.array.set(n), u.needsUpdate = !0);
    }
    return o;
    function a(u) {
      for (let f = 0; f < u.length; f++) {
        const l = u[f], d = new Uint32Array(l), h = new Uint16Array(l);
        for (let y = 0, x = l.byteLength / fe; y < x; y++) {
          const p = ce * y, v = 2 * p;
          ie(v, h) || (d[p + 6] = d[p + 6] / ce - y);
        }
      }
    }
  }
  get primitiveStride() {
    return 3;
  }
  /**
   * Helper function for use when `indirect` is set to true. This function takes a triangle
   * index in the BVH layout and returns the associated triangle index in the geometry index
   * buffer or position attribute.
   * @type {function(number): number}
   * @readonly
   */
  get resolveTriangleIndex() {
    return this.resolvePrimitiveIndex;
  }
  constructor(e, t = {}) {
    t.maxLeafTris && (console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'), t = {
      ...t,
      maxLeafSize: t.maxLeafTris
    }), super(e, t);
  }
  /**
   * Adjusts all triangle offsets stored in the BVH by the given offset. This is useful when the
   * triangle data has been compacted or shifted in the geometry buffers (e.g. in `BatchedMesh`
   * when geometries are compacted using the 'optimize' function or constructing a 'merged' BVH).
   * This function only adjusts the BVH to point to different triangles in the geometry. The
   * geometry's index buffer and/or position attributes must be updated separately to match.
   *
   * @param {number} offset
   * @returns {void}
   */
  // implement abstract methods from BVH base class
  shiftTriangleOffsets(e) {
    return super.shiftPrimitiveOffsets(e);
  }
  // write primitive bounds to the buffer - used only for validateBounds at the moment
  writePrimitiveBounds(e, t, s) {
    const n = this.geometry, r = this._indirectBuffer, i = n.attributes.position, o = n.index ? n.index.array : null, u = (r ? r[e] : e) * 3;
    let f = u + 0, l = u + 1, d = u + 2;
    o && (f = o[f], l = o[l], d = o[d]);
    for (let h = 0; h < 3; h++) {
      const y = i[Hn[h]](f), x = i[Hn[h]](l), p = i[Hn[h]](d);
      let v = y;
      x < v && (v = x), p < v && (v = p);
      let g = y;
      x > g && (g = x), p > g && (g = p), t[s + h] = v, t[s + h + 3] = g;
    }
    return t;
  }
  // precomputes the bounding box for each triangle; required for quickly calculating tree splits.
  // result is an array of size count * 6 where triangle i maps to a
  // [x_center, x_delta, y_center, y_delta, z_center, z_delta] tuple starting at index (i - offset) * 6,
  // representing the center and half-extent in each dimension of triangle i
  computePrimitiveBounds(e, t, s) {
    const n = this.geometry, r = this._indirectBuffer, i = n.attributes.position, o = n.index ? n.index.array : null, a = i.normalized;
    if (e < 0 || t + e - s.offset > s.length / 6)
      throw new Error("MeshBVH: compute triangle bounds range is invalid.");
    const u = i.array, f = i.offset || 0;
    let l = 3;
    i.isInterleavedBufferAttribute && (l = i.data.stride);
    const d = ["getX", "getY", "getZ"], h = s.offset;
    for (let y = e, x = e + t; y < x; y++) {
      const v = (r ? r[y] : y) * 3, g = (y - h) * 6;
      let _ = v + 0, m = v + 1, w = v + 2;
      o && (_ = o[_], m = o[m], w = o[w]), a || (_ = _ * l + f, m = m * l + f, w = w * l + f);
      for (let R = 0; R < 3; R++) {
        let M, T, S;
        a ? (M = i[d[R]](_), T = i[d[R]](m), S = i[d[R]](w)) : (M = u[_ + R], T = u[m + R], S = u[w + R]);
        let A = M;
        T < A && (A = T), S < A && (A = S);
        let E = M;
        T > E && (E = T), S > E && (E = S);
        const b = (E - A) / 2, I = R * 2;
        s[g + I + 0] = A + b, s[g + I + 1] = b + (Math.abs(A) + b) * pn;
      }
    }
    return s;
  }
  /**
   * A convenience function for performing a raycast based on a mesh. Results are formed like
   * three.js raycast results in world frame.
   *
   * @param {Object3D} object
   * @param {Raycaster} raycaster
   * @param {Array<Intersection>} [intersects=[]]
   * @returns {Array<Intersection>}
   */
  raycastObject3D(e, t, s = []) {
    const { material: n } = e;
    if (n === void 0)
      return;
    Xs.copy(e.matrixWorld).invert(), dn.copy(t.ray).applyMatrix4(Xs), $s.setFromMatrixScale(e.matrixWorld), Ws.copy(dn.direction).multiply($s);
    const r = Ws.length(), i = t.near / r, o = t.far / r;
    if (t.firstHitOnly === !0) {
      let a = this.raycastFirst(dn, n, i, o);
      a = Ys(a, e, t), a && s.push(a);
    } else {
      const a = this.raycast(dn, n, i, o);
      for (let u = 0, f = a.length; u < f; u++) {
        const l = Ys(a[u], e, t);
        l && s.push(l);
      }
    }
    return s;
  }
  /**
   * Refit the node bounds to the current triangle positions. This is quicker than regenerating
   * a new BVH but will not be optimal after significant changes to the vertices. `nodeIndices`
   * is a set of node indices (provided by the `shapecast` function) that need to be refit
   * including all internal nodes.
   *
   * @param {Set<number>|Array<number>|null} [nodeIndices=null]
   */
  refit(e = null) {
    return (this.indirect ? _o : oo)(this, e);
  }
  /* Core Cast Functions */
  /**
   * Returns all raycast triangle hits in unsorted order. It is expected that `ray` is in the
   * frame of the BVH already. Likewise the returned results are also provided in the local
   * frame of the BVH. The `side` identifier is used to determine the side to check when
   * raycasting or a material with the given side field can be passed. If an array of materials
   * is provided then it is expected that the geometry has groups and the appropriate material
   * side is used per group.
   *
   * Note that unlike three.js' Raycaster results the points and distances in the intersections
   * returned from this function are relative to the local frame of the MeshBVH. When using the
   * `acceleratedRaycast` function as an override for `Mesh.raycast` they are transformed into
   * world space to be consistent with three's results.
   *
   * @param {Ray} ray
   * @param {number|Material|Array<Material>} [materialOrSide=FrontSide]
   * @param {number} [near=0]
   * @param {number} [far=Infinity]
   * @returns {Array<Intersection>}
   */
  raycast(e, t = jn, s = 0, n = 1 / 0) {
    const r = this._roots, i = [], o = this.indirect ? wo : uo;
    for (let a = 0, u = r.length; a < u; a++)
      o(this, a, t, e, i, s, n);
    return i;
  }
  /**
   * Returns the first raycast hit in the model. This is typically much faster than returning
   * all hits. See `raycast` for information on the side and material options as well as the
   * frame of the returned intersections.
   *
   * @param {Ray} ray
   * @param {number|Material|Array<Material>} [materialOrSide=FrontSide]
   * @param {number} [near=0]
   * @param {number} [far=Infinity]
   * @returns {Intersection|null}
   */
  raycastFirst(e, t = jn, s = 0, n = 1 / 0) {
    const r = this._roots;
    let i = null;
    const o = this.indirect ? Mo : ho;
    for (let a = 0, u = r.length; a < u; a++) {
      const f = o(this, a, t, e, s, n);
      f != null && (i == null || f.distance < i.distance) && (i = f);
    }
    return i;
  }
  /**
   * Returns whether or not the mesh intersects the given geometry.
   *
   * The `geometryToBvh` parameter is the transform of the geometry in the BVH's local frame.
   *
   * Performance improves considerably if the provided geometry also has a `boundsTree`.
   *
   * @param {BufferGeometry} otherGeometry
   * @param {Matrix4} geometryToBvh - Transform of `otherGeometry` into the local space of
   *   this BVH.
   * @returns {boolean}
   */
  intersectsGeometry(e, t) {
    let s = !1;
    const n = this._roots, r = this.indirect ? Ao : mo;
    for (let i = 0, o = n.length; i < o && (s = r(this, i, e, t), !s); i++)
      ;
    return s;
  }
  /**
   * A generalized cast function that can be used to implement intersection logic for custom
   * shapes. This is used internally for `intersectsBox`, `intersectsSphere`, and more. The
   * function returns as soon as a triangle has been reported as intersected and returns `true`
   * if a triangle has been intersected.
   *
   * @param {Object} callbacks
   * @param {IntersectsBoundsCallback} callbacks.intersectsBounds
   * @param {IntersectsTriangleCallback} [callbacks.intersectsTriangle]
   * @param {IntersectsRangeCallback} [callbacks.intersectsRange]
   * @param {BoundsTraverseOrderCallback} [callbacks.boundsTraverseOrder]
   * @returns {boolean}
   */
  shapecast(e) {
    const t = Ae.getPrimitive(), s = super.shapecast(
      {
        ...e,
        intersectsPrimitive: e.intersectsTriangle,
        scratchPrimitive: t,
        // TODO: is the performance significant enough for the added complexity here?
        // can we just use one function?
        iterate: this.indirect ? lo : ro
      }
    );
    return Ae.releasePrimitive(t), s;
  }
  /**
   * A generalized cast function that traverses two BVH structures simultaneously to perform
   * intersection tests between them. This is used internally by `intersectsGeometry`. The
   * function returns `true` as soon as a triangle pair has been reported as intersected by
   * the callbacks.
   *
   * `matrixToLocal` is a Matrix4 that transforms `otherBvh` into the local space of this BVH.
   * The other BVH's triangles are transformed by this matrix before intersection tests.
   *
   * @param {MeshBVH} otherBvh
   * @param {Matrix4} matrixToLocal - Transforms `otherBvh` into the local space of this BVH.
   * @param {Object} callbacks
   * @param {IntersectsRangesCallback} [callbacks.intersectsRanges]
   * @param {IntersectsTrianglesCallback} [callbacks.intersectsTriangles]
   * @returns {boolean}
   */
  bvhcast(e, t, s) {
    let {
      intersectsRanges: n,
      intersectsTriangles: r
    } = s;
    const i = Ae.getPrimitive(), o = this.geometry.index, a = this.geometry.attributes.position, u = this.indirect ? (y) => {
      const x = this.resolveTriangleIndex(y);
      re(i, x * 3, o, a);
    } : (y) => {
      re(i, y * 3, o, a);
    }, f = Ae.getPrimitive(), l = e.geometry.index, d = e.geometry.attributes.position, h = e.indirect ? (y) => {
      const x = e.resolveTriangleIndex(y);
      re(f, x * 3, l, d);
    } : (y) => {
      re(f, y * 3, l, d);
    };
    if (r) {
      if (!(e instanceof vn))
        throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');
      const y = (x, p, v, g, _, m, w, R) => {
        for (let M = v, T = v + g; M < T; M++) {
          h(M), f.a.applyMatrix4(t), f.b.applyMatrix4(t), f.c.applyMatrix4(t), f.needsUpdate = !0;
          for (let S = x, A = x + p; S < A; S++)
            if (u(S), i.needsUpdate = !0, r(i, f, S, M, _, m, w, R))
              return !0;
        }
        return !1;
      };
      if (n) {
        const x = n;
        n = function(p, v, g, _, m, w, R, M) {
          return x(p, v, g, _, m, w, R, M) ? !0 : y(p, v, g, _, m, w, R, M);
        };
      } else
        n = y;
    }
    return super.bvhcast(e, t, { intersectsRanges: n });
  }
  /* Derived Cast Functions */
  /**
   * Returns whether or not the mesh intersects the given box.
   *
   * The `boxToBvh` parameter is the transform of the box in the meshes frame.
   *
   * @param {Box3} box
   * @param {Matrix4} boxToBvh - Transform of the box in the local space of this BVH.
   * @returns {boolean}
   */
  intersectsBox(e, t) {
    return fn.set(e.min, e.max, t), fn.needsUpdate = !0, this.shapecast(
      {
        intersectsBounds: (s) => fn.intersectsBox(s),
        intersectsTriangle: (s) => fn.intersectsTriangle(s)
      }
    );
  }
  /**
   * Returns whether or not the mesh intersects the given sphere.
   *
   * @param {Sphere} sphere
   * @returns {boolean}
   */
  intersectsSphere(e) {
    return this.shapecast(
      {
        intersectsBounds: (t) => e.intersectsBox(t),
        intersectsTriangle: (t) => t.intersectsSphere(e)
      }
    );
  }
  /**
   * Computes the closest distance from the geometry to the mesh and puts the closest point on
   * the mesh in `target1` (in the frame of the BVH) and the closest point on the other
   * geometry in `target2` (in the geometry frame). If `target1` is not provided a new Object
   * is created and returned from the function.
   *
   * The `geometryToBvh` parameter is the transform of the geometry in the BVH's local frame.
   *
   * If a point is found that is closer than `minThreshold` then the function will return that
   * result early. Any triangles or points outside of `maxThreshold` are ignored. If no point
   * is found within the min / max thresholds then `null` is returned and the target objects
   * are not modified.
   *
   * The returned faceIndex in `target1` and `target2` can be used with the standalone function
   * `getTriangleHitPointInfo` to obtain more information like UV coordinates, triangle normal
   * and materialIndex.
   *
   * _Note that this function can be very slow if `geometry` does not have a
   * `geometry.boundsTree` computed._
   *
   * @param {BufferGeometry} otherGeometry
   * @param {Matrix4} geometryToBvh - Transform of `otherGeometry` into the local space of
   *   this BVH.
   * @param {HitPointInfo} [target1={}]
   * @param {HitPointInfo} [target2={}]
   * @param {number} [minThreshold=0]
   * @param {number} [maxThreshold=Infinity]
   * @returns {HitPointInfo|null}
   */
  closestPointToGeometry(e, t, s = {}, n = {}, r = 0, i = 1 / 0) {
    return (this.indirect ? Do : vo)(
      this,
      e,
      t,
      s,
      n,
      r,
      i
    );
  }
  /**
   * Computes the closest distance from the point to the mesh and gives additional information
   * in `target`. The target can be left undefined to default to a new object which is
   * ultimately returned by the function.
   *
   * If a point is found that is closer than `minThreshold` then the function will return that
   * result early. Any triangles or points outside of `maxThreshold` are ignored. If no point
   * is found within the min / max thresholds then `null` is returned and the `target` object
   * is not modified.
   *
   * The returned faceIndex can be used with the standalone function `getTriangleHitPointInfo`
   * to obtain more information like UV coordinates, triangle normal and materialIndex.
   *
   * @param {Vector3} point
   * @param {HitPointInfo} [target={}]
   * @param {number} [minThreshold=0]
   * @param {number} [maxThreshold=Infinity]
   * @returns {HitPointInfo|null}
   */
  closestPointToPoint(e, t = {}, s = 0, n = 1 / 0) {
    return eo(
      this,
      e,
      t,
      s,
      n
    );
  }
}
function Io(c) {
  switch (c) {
    case 1:
      return "R";
    case 2:
      return "RG";
    case 3:
      return "RGBA";
    case 4:
      return "RGBA";
  }
  throw new Error();
}
function Po(c) {
  switch (c) {
    case 1:
      return ji;
    case 2:
      return Gi;
    case 3:
      return xn;
    case 4:
      return xn;
  }
}
function qs(c) {
  switch (c) {
    case 1:
      return zi;
    case 2:
      return hi;
    case 3:
      return Yn;
    case 4:
      return Yn;
  }
}
class Ri extends Kn {
  constructor() {
    super(), this.minFilter = Ze, this.magFilter = Ze, this.generateMipmaps = !1, this.overrideItemSize = null, this._forcedType = null;
  }
  /**
   * Updates the texture to have the data contained in the passed BufferAttribute using the
   * BufferAttribute `itemSize` field, `normalized` field, and TypedArray layout to determine
   * the appropriate texture layout, format, and type. The texture dimensions will always be
   * square. Because these are intended to be sampled as 1D arrays the width of the texture must
   * be taken into account to derive a sampling uv. See `texelFetch1D` in shaderFunctions.
   *
   * @param {BufferAttribute} attribute
   * @returns {void}
   */
  updateFrom(e) {
    const t = this.overrideItemSize, s = e.itemSize, n = e.count;
    if (t !== null) {
      if (s * n % t !== 0)
        throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");
      e.itemSize = t, e.count = n * s / t;
    }
    const r = e.itemSize, i = e.count, o = e.normalized, a = e.array.constructor, u = a.BYTES_PER_ELEMENT;
    let f = this._forcedType, l = r;
    if (f === null)
      switch (a) {
        case Float32Array:
          f = et;
          break;
        case Uint8Array:
        case Uint16Array:
        case Uint32Array:
          f = Ht;
          break;
        case Int8Array:
        case Int16Array:
        case Int32Array:
          f = En;
          break;
      }
    let d, h, y, x, p = Io(r);
    switch (f) {
      case et:
        y = 1, h = Po(r), o && u === 1 ? (x = a, p += "8", a === Uint8Array ? d = Vt : (d = ws, p += "_SNORM")) : (x = Float32Array, p += "32F", d = et);
        break;
      case En:
        p += u * 8 + "I", y = o ? Math.pow(2, a.BYTES_PER_ELEMENT * 8 - 1) : 1, h = qs(r), u === 1 ? (x = Int8Array, d = ws) : u === 2 ? (x = Int16Array, d = Vi) : (x = Int32Array, d = En);
        break;
      case Ht:
        p += u * 8 + "UI", y = o ? Math.pow(2, a.BYTES_PER_ELEMENT * 8 - 1) : 1, h = qs(r), u === 1 ? (x = Uint8Array, d = Vt) : u === 2 ? (x = Uint16Array, d = Hi) : (x = Uint32Array, d = Ht);
        break;
    }
    l === 3 && (h === xn || h === Yn) && (l = 4);
    const v = Math.ceil(Math.sqrt(i)) || 1, g = l * v * v, _ = new x(g), m = e.normalized;
    e.normalized = !1;
    for (let w = 0; w < i; w++) {
      const R = l * w;
      _[R] = e.getX(w) / y, r >= 2 && (_[R + 1] = e.getY(w) / y), r >= 3 && (_[R + 2] = e.getZ(w) / y, l === 4 && (_[R + 3] = 1)), r >= 4 && (_[R + 3] = e.getW(w) / y);
    }
    e.normalized = m, this.internalFormat = p, this.format = h, this.type = d, this.image.width = v, this.image.height = v, this.image.data = _, this.needsUpdate = !0, this.dispose(), e.itemSize = s, e.count = n;
  }
}
class Bo extends Ri {
  constructor() {
    super(), this._forcedType = Ht;
  }
}
class Co extends Ri {
  constructor() {
    super(), this._forcedType = et;
  }
}
class No {
  constructor() {
    this.index = new Bo(), this.position = new Co(), this.bvhBounds = new Kn(), this.bvhContents = new Kn(), this._cachedIndexAttr = null, this.index.overrideItemSize = 3;
  }
  /**
   * Updates the object and associated textures with data from the provided BVH.
   *
   * @param {MeshBVH} bvh
   * @returns {void}
   */
  updateFrom(e) {
    const { geometry: t } = e;
    if (Fo(e, this.bvhBounds, this.bvhContents), this.position.updateFrom(t.attributes.position), e.indirect) {
      const s = e._indirectBuffer;
      if (this._cachedIndexAttr === null || this._cachedIndexAttr.count !== s.length)
        if (t.index)
          this._cachedIndexAttr = t.index.clone();
        else {
          const n = bi(Tn(t));
          this._cachedIndexAttr = new Rt(n, 1, !1);
        }
      Lo(t, s, this._cachedIndexAttr), this.index.updateFrom(this._cachedIndexAttr);
    } else
      this.index.updateFrom(t.index);
  }
  /**
   * Dispose of the associated textures.
   *
   * @returns {void}
   */
  dispose() {
    const { index: e, position: t, bvhBounds: s, bvhContents: n } = this;
    e && e.dispose(), t && t.dispose(), s && s.dispose(), n && n.dispose();
  }
}
function Lo(c, e, t) {
  const s = t.array, n = c.index ? c.index.array : null;
  for (let r = 0, i = e.length; r < i; r++) {
    const o = 3 * r, a = 3 * e[r];
    for (let u = 0; u < 3; u++)
      s[o + u] = n ? n[a + u] : a + u;
  }
}
function Fo(c, e, t) {
  const s = c._roots;
  if (s.length !== 1)
    throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");
  const n = s[0], r = new Uint16Array(n), i = new Uint32Array(n), o = new Float32Array(n), a = n.byteLength / fe, u = 2 * Math.ceil(Math.sqrt(a / 2)), f = new Float32Array(4 * u * u), l = Math.ceil(Math.sqrt(a)), d = new Uint32Array(2 * l * l);
  for (let h = 0; h < a; h++) {
    const y = h * fe / 4, x = y * 2, p = y;
    for (let v = 0; v < 3; v++)
      f[8 * h + 0 + v] = o[p + 0 + v], f[8 * h + 4 + v] = o[p + 3 + v];
    if (ie(x, r)) {
      const v = ye(x, r), g = pe(y, i), _ = Pr | v;
      d[h * 2 + 0] = _, d[h * 2 + 1] = g;
    } else {
      const v = i[y + 6], g = wn(y, i);
      d[h * 2 + 0] = g, d[h * 2 + 1] = v;
    }
  }
  e.image.data = f, e.image.width = u, e.image.height = u, e.format = xn, e.type = et, e.internalFormat = "RGBA32F", e.minFilter = Ze, e.magFilter = Ze, e.generateMipmaps = !1, e.needsUpdate = !0, e.dispose(), t.image.data = d, t.image.width = l, t.image.height = l, t.format = hi, t.type = Ht, t.internalFormat = "RG32UI", t.minFilter = Ze, t.magFilter = Ze, t.generateMipmaps = !1, t.needsUpdate = !0, t.dispose();
}
const Uo = (
  /* glsl */
  `

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`
), Oo = (
  /* glsl */
  `

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;

			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return found;

}
`
), ko = (
  /* glsl */
  `
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`
), Ho = ko, Vo = `
	${Uo}
	${Oo}
`, pt = () => {
  const c = _n.useContext(us);
  if (!c)
    throw new Error("useMainContext must be used within MainContextProvider");
  return c;
};
function zo(c) {
  c.updateMatrixWorld(!0);
  const e = new N.Box3(), t = new N.Vector3();
  let s = !1;
  const n = c.parent, r = n ? new N.Matrix4().copy(n.matrixWorld).invert() : new N.Matrix4(), i = new N.Matrix4();
  return c.traverse((o) => {
    const a = o;
    if (a.isMesh && a.geometry?.attributes?.position) {
      const u = a.geometry.attributes.position;
      i.multiplyMatrices(r, a.matrixWorld);
      for (let f = 0; f < u.count; f++)
        t.fromBufferAttribute(u, f), t.applyMatrix4(i), e.expandByPoint(t), s = !0;
    }
  }), s || (e.setFromObject(c), n && e.applyMatrix4(r)), e;
}
function Go(c, e = -Math.PI / 4, t = -Math.PI / 10, s = Math.PI / 3) {
  c.rotation.set(0, 0, 0), c.position.set(0, 0, 0), c.updateMatrixWorld(!0);
  const n = new N.Box3().setFromObject(c), r = new N.Vector3();
  n.getCenter(r);
  const i = new N.Vector3();
  n.getSize(i), i.length() === 0 && (i.set(1, 1, 1), n.min.set(-0.5, -0.5, -0.5), n.max.set(0.5, 0.5, 0.5), r.set(0, 0, 0)), c.rotation.set(e, t, s), c.updateMatrixWorld(!0);
  const o = zo(c), a = new N.Vector3();
  o.getCenter(a);
  const u = o.min.y, f = o.max.y;
  c.position.copy(a).negate(), c.updateMatrixWorld(!0);
  const l = u - a.y, d = f - a.y;
  return {
    localBox: n,
    localCenter: r,
    localSize: i,
    rotatedCenterOffset: a,
    minY: l,
    maxY: d,
    rotatedBox: o
  };
}
class ut extends N.TextureLoader {
  load(e, t, s, n) {
    if (!e) {
      const r = new N.Texture();
      return t && setTimeout(() => t(r), 0), r;
    }
    return super.load(
      e,
      (r) => {
        t && t(r);
      },
      s,
      (r) => {
        console.warn(`SafeTextureLoader: Failed to load texture at "${e}".`);
        const i = new N.Texture();
        t && t(i);
      }
    );
  }
}
const jo = (
  /* glsl */
  `
  out vec3 vWorldPos;
  out vec3 vViewPos;

  void main() {
    vec4 worldPos4  = modelMatrix * vec4(position, 1.0);
    vWorldPos       = worldPos4.xyz;

    vec4 mvPos      = modelViewMatrix * vec4(position, 1.0);
    vViewPos        = mvPos.xyz;

    gl_Position     = projectionMatrix * mvPos;
  }
`
), Ko = (
  /* glsl */
  `
  precision highp float;
  precision highp sampler2D;
  precision highp isampler2D;

  ${Ho}
  ${Vo}

  uniform BVH bvh;
  uniform sampler2D tDiffuse;
  uniform vec2      resolution;
  uniform sampler2D envMap;

  uniform vec3  uColor;
  uniform float uIOR;
  uniform float uAberration;
  uniform float uFresnel;
  uniform float uReflectivity;
  uniform float uBlur;
  uniform float uEnvRotation;
  uniform vec3  uHighlightColor;
  uniform float uHighlightTolerance;
  uniform vec3  uAttenuationColor;
  uniform float uAttenuationDistance;
  uniform int   uBounces;

  uniform mat4 uModelMatrix;
  uniform mat4 uModelMatrixInverse;

  // cameraPosition is provided by Three.js

  in vec3 vWorldPos;
  in vec3 vViewPos;

  out vec4 pc_fragColor;

  #define PI 3.14159265359

  vec2 equirectUV(vec3 dir) {
    float phi   = atan(dir.z, dir.x);
    float theta = asin(clamp(dir.y, -1.0, 1.0));
    return vec2(phi / (2.0 * PI) + 0.5, theta / PI + 0.5);
  }

  vec3 rotateY(vec3 v, float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return vec3(v.x * c + v.z * s, v.y, -v.x * s + v.z * c);
  }

  vec3 sampleEnv(vec3 dir) {
    return texture(envMap, equirectUV(dir)).rgb;
  }

  vec3 sampleScreen(vec2 uv) {
    return texture(tDiffuse, clamp(uv, vec2(0.0), vec2(1.0))).rgb;
  }

  // Derive perfectly sharp geometric face normal from screen-space derivatives.
  // This is anti-aliased by the GPU naturally and avoids both flat-shading
  // pixel popping and smooth-normal blurring across facets.
  vec3 geometricNormal(vec3 worldPos) {
    return normalize(cross(dFdx(worldPos), dFdy(worldPos)));
  }

  // Same but in view space for the glass-offset calculation
  vec3 geometricNormalView(vec3 viewPos) {
    return normalize(cross(dFdx(viewPos), dFdy(viewPos)));
  }

  vec4 calculateInternalBounces(vec3 worldPos, vec3 rd, vec3 worldNormal, float ior) {
    vec3 worldRefractDir = refract(rd, worldNormal, 1.0 / ior);
    vec3 rayOrigin    = (uModelMatrixInverse * vec4(worldPos, 1.0)).xyz;
    vec3 rayDirection = normalize((uModelMatrixInverse * vec4(worldRefractDir, 0.0)).xyz);
    rayOrigin        += rayDirection * 0.001;

    float totalDist = 0.0;
    for (int i = 0; i < 8; i++) {
      if (i >= uBounces) break;
      uvec4 faceIndices;
      vec3  faceNormal;
      vec3  barycoord;
      float side;
      float dist;
      bool didHit = bvhIntersectFirstHit(bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist);
      if (!didHit) break;
      totalDist        += dist;
      vec3 hitPos       = rayOrigin + rayDirection * max(dist - 0.001, 0.0);
      // Diamond facets are geometrically flat — use flat face normal
      vec3 tempDir      = refract(rayDirection, faceNormal, ior);
      if (length(tempDir) > 0.0) {
        rayDirection = tempDir;
        break;
      }
      rayDirection = reflect(rayDirection, faceNormal);
      rayOrigin    = hitPos + rayDirection * 0.001;
    }
    vec3 finalDir = normalize((uModelMatrix * vec4(rayDirection, 0.0)).xyz);
    return vec4(finalDir, totalDist);
  }

  void main() {
    vec3 worldPos      = vWorldPos;
    vec3 viewDir       = normalize(worldPos - cameraPosition);
    // Derive sharp geometric face normal from position derivatives — no vertex
    // normal interpolation, no flat-shading pixel popping, naturally anti-aliased
    vec3 worldNormal   = geometricNormal(worldPos);
    vec3 viewNormal    = geometricNormalView(vViewPos);
    vec2 screenUV      = gl_FragCoord.xy / resolution;

    float dotNL        = dot(viewDir, worldNormal);
    float facingRatio  = -dotNL;
    float isFrontFacing = smoothstep(-0.2, 0.0, facingRatio);

    float iorR = uIOR * (1.0 - uAberration);
    float iorG = uIOR;
    float iorB = uIOR * (1.0 + uAberration);

    vec4 exitR_data = calculateInternalBounces(worldPos, viewDir, worldNormal, iorR);
    vec4 exitG_data = calculateInternalBounces(worldPos, viewDir, worldNormal, iorG);
    vec4 exitB_data = calculateInternalBounces(worldPos, viewDir, worldNormal, iorB);

    vec3 exitR = exitR_data.xyz;
    vec3 exitG = exitG_data.xyz;
    vec3 exitB = exitB_data.xyz;
    float totalDist = (exitR_data.w + exitG_data.w + exitB_data.w) / 3.0;

    vec3 envDiamond = vec3(
      sampleEnv(rotateY(exitR, uEnvRotation)).r,
      sampleEnv(rotateY(exitG, uEnvRotation)).g,
      sampleEnv(rotateY(exitB, uEnvRotation)).b
    );

    float fireDistortion = 0.01;
    float o              = uBlur * 0.005;
    vec2  offsets[4] = vec2[](vec2(o,o), vec2(-o,o), vec2(o,-o), vec2(-o,-o));

    vec3 screenDiamond = vec3(0.0);
    for (int i = 0; i < 4; i++) {
      screenDiamond += vec3(
        sampleScreen(screenUV + exitR.xy * fireDistortion + offsets[i]).r,
        sampleScreen(screenUV + exitG.xy * fireDistortion + offsets[i]).g,
        sampleScreen(screenUV + exitB.xy * fireDistortion + offsets[i]).b
      );
    }
    screenDiamond /= 4.0;

    vec3 diamondResult = mix(screenDiamond, envDiamond, 0.82);
    diamondResult      = pow(max(diamondResult, vec3(0.0)), vec3(0.9));
    vec3 transmittance = pow(uAttenuationColor, vec3(totalDist / uAttenuationDistance));
    diamondResult     *= transmittance;

    vec3 glassDirWorldR = refract(viewDir, worldNormal, 1.0 / iorR);
    vec3 glassDirWorldG = refract(viewDir, worldNormal, 1.0 / iorG);
    vec3 glassDirWorldB = refract(viewDir, worldNormal, 1.0 / iorB);

    vec3 envGlass = vec3(
      sampleEnv(rotateY(glassDirWorldR, uEnvRotation)).r,
      sampleEnv(rotateY(glassDirWorldG, uEnvRotation)).g,
      sampleEnv(rotateY(glassDirWorldB, uEnvRotation)).b
    );

    vec3 viewDirView  = normalize(vViewPos);
    vec3 glassDirView = refract(viewDirView, viewNormal, 1.5 / uIOR);
    vec2 glassOffset  = glassDirView.xy * 0.1;

    vec3 screenGlass = sampleScreen(screenUV + glassOffset);
    vec3 glassResult = mix(screenGlass, envGlass, 0.95);

    vec3 baseRefract  = mix(glassResult, diamondResult, isFrontFacing);
    vec3 finalRefract = baseRefract * uColor;

    vec3 reflectionDir = normalize(viewDir - worldNormal * dot(viewDir, worldNormal) * 2.0);
    vec3 envReflect    = sampleEnv(rotateY(reflectionDir, uEnvRotation));
    vec2 reflectOffset = reflectionDir.xy * 0.01;
    vec3 screenReflect = sampleScreen(screenUV + reflectOffset);
    vec3 reflectionRGB = mix(screenReflect, envReflect, 0.85);

    float nFresnel  = pow(max(1.0 + dot(viewDir, worldNormal), 0.0), 5.0) * uFresnel;
    vec3 surfaceGlint = reflectionRGB * nFresnel * uReflectivity * 3.0;

    float highlightMask  = smoothstep(uHighlightTolerance, 1.0, facingRatio);
    highlightMask        = pow(highlightMask, 3.0);
    vec3 facetHighlight  = uHighlightColor * highlightMask * 5.0;

    vec3 finalColor = finalRefract + surfaceGlint + facetHighlight;
    pc_fragColor    = vec4(finalColor, 1.0);
  }
`
);
class Yo extends N.ShaderMaterial {
  constructor({
    geometry: e,
    bvh: t,
    envMap: s,
    backgroundTexture: n = null,
    resolution: r = new N.Vector2(1024, 768),
    ior: i = 2.4,
    bounces: o = 3,
    aberrationStrength: a = 1e-3,
    fresnel: u = 0.01,
    reflectivity: f = 1,
    color: l = 16777215,
    blur: d = 0.12,
    envRotation: h = 0,
    highlightColor: y = 16777215,
    highlightTolerance: x = 1,
    attenuationColor: p = 16777215,
    attenuationDistance: v = 1
  }) {
    const g = new No();
    g.updateFrom(t), super({
      glslVersion: N.GLSL3,
      vertexShader: jo,
      fragmentShader: Ko,
      uniforms: {
        bvh: { value: g },
        tDiffuse: { value: n },
        resolution: { value: r },
        envMap: { value: s },
        uColor: { value: new N.Color(l) },
        uIOR: { value: i },
        uAberration: { value: a },
        uFresnel: { value: u },
        uReflectivity: { value: f },
        uBlur: { value: d },
        uEnvRotation: { value: h },
        uHighlightColor: { value: new N.Color(y) },
        uHighlightTolerance: { value: x },
        uAttenuationColor: { value: new N.Color(p) },
        uAttenuationDistance: { value: v },
        uBounces: { value: o },
        uModelMatrix: { value: new N.Matrix4() },
        uModelMatrixInverse: { value: new N.Matrix4() }
      },
      transparent: !0,
      depthWrite: !0
    }), this.onBeforeRender = (_, m, w, R, M) => {
      this.uniforms.uModelMatrix.value.copy(M.matrixWorld), this.uniforms.uModelMatrixInverse.value.copy(M.matrixWorld).invert();
    };
  }
  get color() {
    return this.uniforms.uColor.value;
  }
  set color(e) {
    this.uniforms.uColor.value.set(e);
  }
  get blur() {
    return this.uniforms.uBlur.value;
  }
  set blur(e) {
    this.uniforms.uBlur.value = e;
  }
  get envRotation() {
    return this.uniforms.uEnvRotation.value;
  }
  set envRotation(e) {
    this.uniforms.uEnvRotation.value = e;
  }
  get highlightColor() {
    return this.uniforms.uHighlightColor.value;
  }
  set highlightColor(e) {
    this.uniforms.uHighlightColor.value.set(e);
  }
  get highlightTolerance() {
    return this.uniforms.uHighlightTolerance.value;
  }
  set highlightTolerance(e) {
    this.uniforms.uHighlightTolerance.value = e;
  }
  get attenuationColor() {
    return this.uniforms.uAttenuationColor.value;
  }
  set attenuationColor(e) {
    this.uniforms.uAttenuationColor.value.set(e);
  }
  get attenuationDistance() {
    return this.uniforms.uAttenuationDistance.value;
  }
  set attenuationDistance(e) {
    this.uniforms.uAttenuationDistance.value = e;
  }
  setResolution(e, t) {
    this.uniforms.resolution.value.set(e, t);
  }
  setBackgroundTexture(e) {
    this.uniforms.tDiffuse.value = e;
  }
}
const ft = (c, e) => {
  if (!c) return;
  for (const s of e)
    if (c[s]) return c[s];
  const t = e.map((s) => s.toLowerCase());
  for (const s of Object.keys(c))
    if (t.includes(s.toLowerCase()))
      return c[s];
}, Js = (c, e) => {
  if (!c) return;
  const t = e.map((s) => s.toLowerCase());
  for (const s of Object.keys(c)) {
    const n = s.toLowerCase();
    for (const r of t)
      if (n.includes(r))
        return c[s];
  }
  for (const s of Object.keys(c)) {
    const n = c[s];
    if (typeof n == "string") {
      const r = n.toLowerCase();
      for (const i of t)
        if (r.includes(i))
          return n;
    }
  }
};
function Wo(c, e, t, s, n, r, i, o = 0) {
  const a = ["♥", "♥︎♥︎", "○○", "⚭", "∞"];
  if (!a.some((p) => e.includes(p)) || !i) {
    c.textAlign = "center", c.fillText(e, t, s), o > 0 && c.strokeText(e, t, s);
    return;
  }
  const f = e.split(/(♥︎♥︎|○○|[♥⚭∞])/u), l = [];
  c.font = `bold ${n}px ${r}`;
  const d = n;
  for (const p of f)
    if (p)
      if (a.includes(p)) {
        const v = i[p];
        if (v && v.img) {
          const g = v.width, _ = v.height, m = _ > 0 ? g / _ * d : 0;
          l.push({
            type: "symbol",
            text: p,
            width: m,
            img: v.img
          });
        } else {
          const g = c.measureText(p).width;
          l.push({ type: "text", text: p, width: g });
        }
      } else {
        const v = c.measureText(p).width;
        l.push({ type: "text", text: p, width: v });
      }
  const h = l.reduce((p, v) => p + v.width, 0);
  let x = t - h / 2;
  c.textAlign = "left";
  for (const p of l) {
    if (p.type === "symbol" && p.img) {
      const v = s - d / 2;
      c.drawImage(p.img, x, v, p.width, d);
    } else
      c.fillText(p.text, x, s), o > 0 && c.strokeText(p.text, x, s);
    x += p.width;
  }
}
let Te = null;
function Zs(c, e, t) {
  const s = new Int32Array(e * t), n = new Float32Array(e * t), r = 1e9;
  for (let a = 0; a < e; a++) {
    let u = r;
    for (let f = 0; f < t; f++) {
      const l = f * e + a;
      c[l] !== 0 ? u = 0 : u = u === r ? r : u + 1, s[l] = u;
    }
    u = r;
    for (let f = t - 1; f >= 0; f--) {
      const l = f * e + a;
      c[l] !== 0 ? u = 0 : u = u === r ? r : u + 1, u < s[l] && (s[l] = u);
    }
  }
  const i = new Int32Array(e), o = new Int32Array(e);
  for (let a = 0; a < t; a++) {
    const u = a * e;
    let f = 0;
    i[0] = 0, o[0] = 0;
    for (let l = 1; l < e; l++) {
      const d = s[u + l], h = d === r ? r : d * d;
      for (; f >= 0; ) {
        const y = i[f], x = s[u + y], p = x === r ? r : x * x;
        let v = 0;
        if (h === r ? v = r : p === r ? v = 0 : v = 1 + Math.floor((l * l - y * y + (h - p)) / (2 * (l - y))), v < o[f])
          f--;
        else {
          v < e && (f++, i[f] = l, o[f] = v);
          break;
        }
      }
      f < 0 && (f = 0, i[0] = l, o[0] = 0);
    }
    for (let l = e - 1; l >= 0; l--) {
      for (; f > 0 && l < o[f]; )
        f--;
      const d = i[f], h = l - d, y = s[u + d], x = y === r ? r : y * y, p = h * h + x;
      n[u + l] = Math.sqrt(p);
    }
  }
  return n;
}
function rs(c) {
  const {
    text: e,
    width: t = 1024,
    height: s = 200,
    fontSize: n = 5,
    fontFamily: r = "Arial, sans-serif",
    blur: i = 5,
    mode: o = "emboss",
    offsetY: a = 0,
    offsetX: u = 0,
    symbolsMap: f = null,
    // SDF options
    bevelWidth: l = 4,
    engravingDepth: d = 0.35,
    edgeSoftness: h = 0.3,
    strokeWidth: y = 0
  } = c, p = document.createElement("canvas").getContext("2d");
  if (!p)
    throw new Error("2D Canvas Context is not supported in this environment.");
  const v = 20;
  p.font = `bold ${v}px ${r}`;
  let g = 0;
  const _ = ["♥", "♥︎♥︎", "○○", "⚭", "∞"];
  if (!_.some((k) => e.includes(k)) || !f)
    g = p.measureText(e).width;
  else {
    const k = e.split(/(♥︎♥︎|○○|[♥⚭∞])/u), Y = v;
    for (const oe of k)
      if (oe)
        if (_.includes(oe)) {
          const me = f[oe];
          if (me && me.img) {
            const Re = me.width, le = me.height, ae = le > 0 ? Re / le * Y : 0;
            g += ae;
          } else
            g += p.measureText(oe).width;
        } else
          g += p.measureText(oe).width;
  }
  const w = 0.85, R = g / v + i * 8 / n, M = 1 + i * 8 / n, T = R > 0 ? (t * w - 20 - Math.abs(u) * 2) / R : 1 / 0, S = M > 0 ? (s * w - 20 - Math.abs(a) * 2) / M : 1 / 0, b = p.measureText("AaBbCcDdEeFfGgHhIiJj").width / v + i * 8 / n, I = b > 0 ? (t * w - 20 - Math.abs(u) * 2) / b : 1 / 0, P = Math.max(
    1,
    Math.floor(Math.min(T, S, I))
  );
  let C = "";
  f && (C = Object.keys(f).sort().map((k) => `${k}:${f[k]?.img.src || ""}`).join(","));
  const L = 2, V = t * L, j = s * L;
  let q, K;
  if (Te && Te.text === e && Te.fontFamily === r && Te.width === t && Te.height === s && Te.offsetY === a && Te.offsetX === u && Te.symbolsKey === C && Te.strokeWidth === y)
    q = Te.sdf, K = Te.coverage;
  else {
    const k = document.createElement("canvas");
    k.width = V, k.height = j;
    const Y = k.getContext("2d");
    if (!Y)
      throw new Error("Could not get 2D context for temp canvas");
    Y.fillStyle = "#FFFFFF", Y.fillRect(0, 0, V, j), Y.fillStyle = "#000000", Y.strokeStyle = "#000000", Y.lineWidth = y * L;
    const oe = P * L;
    Y.font = `bold ${oe}px ${r}`, Y.textBaseline = "middle";
    const me = V / 2 + u * L, Re = j / 2 + a * L;
    Wo(
      Y,
      e,
      me,
      Re,
      oe,
      r,
      f,
      y * L
    );
    const le = Y.getImageData(0, 0, V, j), ae = new Uint8Array(V * j);
    K = new Uint8Array(V * j);
    for (let X = 0; X < V * j; X++) {
      const xe = le.data[X * 4];
      ae[X] = xe < 128 ? 1 : 0, K[X] = 255 - xe;
    }
    const Ie = Zs(ae, V, j), Pe = new Uint8Array(V * j);
    for (let X = 0; X < V * j; X++)
      Pe[X] = ae[X] === 0 ? 1 : 0;
    const Oe = Zs(Pe, V, j);
    q = new Float32Array(V * j);
    for (let X = 0; X < V * j; X++)
      q[X] = Ie[X] - Oe[X];
    Te = {
      text: e,
      fontFamily: r,
      width: t,
      height: s,
      offsetY: a,
      offsetX: u,
      symbolsKey: C,
      strokeWidth: y,
      sdf: q,
      coverage: K
    };
  }
  const D = document.createElement("canvas");
  D.width = t, D.height = s;
  const F = D.getContext("2d");
  if (!F)
    throw new Error("2D Canvas Context is not supported in this environment.");
  const O = document.createElement("canvas");
  O.width = V, O.height = j;
  const G = O.getContext("2d");
  if (!G)
    throw new Error("Could not get 2D context for tempOutCanvas");
  const ge = G.createImageData(V, j), _e = ge.data;
  for (let k = 0; k < V * j; k++) {
    let Y = q[k];
    const oe = Math.abs(Y), me = 1.5 * L;
    if (oe < me) {
      const st = (me - oe) / me, bn = (0.5 - K[k] / 255) * me;
      Y = (1 - st) * Y + st * bn;
    }
    let Re = 0;
    if (Y >= 0) {
      const st = 1.5 * L;
      Re = Y / st;
    } else {
      const st = Math.max(0.1, l * L);
      Re = Y / st;
    }
    const ae = (Math.max(-1, Math.min(1, Re)) + 1) / 2, Ie = 3 * ae * ae - 2 * ae * ae * ae, Pe = (1 - h) * ae + h * Ie, Oe = 1 - d + d * Pe, X = Math.round(255 * Oe), xe = k * 4;
    _e[xe] = X, _e[xe + 1] = X, _e[xe + 2] = X, _e[xe + 3] = 255;
  }
  return G.putImageData(ge, 0, 0), F.imageSmoothingEnabled = !0, F.imageSmoothingQuality = "high", F.drawImage(O, 0, 0, t, s), D;
}
function Xo(c, e, t) {
  fetch(c).then((s) => {
    if (!s.ok) throw new Error("Failed to fetch SVG");
    return s.text();
  }).then((s) => {
    let n = s.replace(/fill="[^"]*"/g, `fill="${e}"`).replace(/stroke="[^"]*"/g, `stroke="${e}"`);
    const r = new Blob([n], {
      type: "image/svg+xml;charset=utf-8"
    }), i = URL.createObjectURL(r), o = new Image();
    o.onload = () => {
      t(o, o.naturalWidth || 20, o.naturalHeight || 20), URL.revokeObjectURL(i);
    }, o.onerror = () => {
      t(null, 0, 0), URL.revokeObjectURL(i);
    }, o.src = i;
  }).catch((s) => {
    console.error("Error loading SVG symbol:", s), t(null, 0, 0);
  });
}
function $o(c, e = 4) {
  const t = c.width, s = c.height, n = document.createElement("canvas");
  n.width = t, n.height = s;
  const r = n.getContext("2d"), i = c.getContext("2d");
  if (!r || !i) return n;
  const o = i.getImageData(0, 0, t, s), a = r.createImageData(t, s), u = (f, l) => {
    const d = Math.max(0, Math.min(t - 1, f)), h = Math.max(0, Math.min(s - 1, l));
    return o.data[(h * t + d) * 4];
  };
  for (let f = 0; f < s; f++)
    for (let l = 0; l < t; l++) {
      const d = u(l - 1, f), h = u(l + 1, f), y = u(l, f - 1), x = u(l, f + 1), p = (h - d) / 255 * e, v = (x - y) / 255 * e, g = 1, _ = Math.sqrt(p * p + v * v + g * g), m = p / _, w = v / _, R = g / _, M = (f * t + l) * 4;
      a.data[M] = Math.round((m + 1) * 127.5), a.data[M + 1] = Math.round((w + 1) * 127.5), a.data[M + 2] = Math.round((R + 1) * 127.5), a.data[M + 3] = 255;
    }
  return r.putImageData(a, 0, 0), n;
}
const qo = Ye(({ textOffsetX: c = 0 }) => {
  const { design3DManager: e } = pt(), { ringManager: t } = e, s = t.engravingText || "", n = t.engravingFont;
  return se(() => {
    if (!s) {
      console.log("BBoxEngrave: No text engraved");
      return;
    }
    const r = rs({
      text: s,
      fontFamily: n,
      mode: "engrave",
      blur: 0.01,
      offsetY: 0,
      offsetX: c
    }), i = r.getContext("2d");
    if (!i) return;
    const { width: o, height: a } = r, f = i.getImageData(0, 0, o, a).data;
    let l = o, d = 0, h = a, y = 0, x = !1;
    for (let p = 0; p < a; p++)
      for (let v = 0; v < o; v++) {
        const g = (p * o + v) * 4, _ = f[g], m = f[g + 1], w = f[g + 2];
        (_ < 240 || m < 240 || w < 240) && (v < l && (l = v), v > d && (d = v), p < h && (h = p), p > y && (y = p), x = !0);
      }
    x ? (console.log(`BBoxEngrave - Text: "${s}", OffsetX: ${c}`), console.log(
      `Bounding Box -> minX: ${l}, maxX: ${d}, minY: ${h}, maxY: ${y}`
    )) : console.log(
      `BBoxEngrave - Text: "${s}", OffsetX: ${c} -> No pixels found`
    );
  }, [s, n, c]), null;
}), Jo = Ye(
  ({ modelUrl: c }) => {
    const { design3DManager: e } = pt(), { ringManager: t } = e, {
      currentView: s,
      engravingText: n,
      engravingSymbol: r,
      engravingFont: i,
      bevelWidth: o,
      engravingDepth: a,
      edgeSoftness: u,
      normalStrength: f,
      aoStrength: l,
      strokeWidth: d,
      showDiamond: h
    } = t, { scene: y } = ri(c), x = hn(() => {
      if (!y) return null;
      let m = null;
      return y.traverse((w) => {
        const R = w;
        if (R.isMesh) {
          const M = R.name, T = M.toLowerCase();
          if (M === "Engraving Mesh" || M === "Engraving Metal" || M === "Engraving_Mesh" || M === "Engraving_Metal" || T.includes("engrav")) {
            const A = T.includes("nodiamond");
            h ? A && m || (m = R) : A ? m = R : m || (m = R);
          }
        }
      }), m;
    }, [y, h]), [p, v] = ii({ normalTexture: null, aoTexture: null });
    se(() => {
      if (s !== 2 || !n && !r) {
        v((M) => (M.normalTexture?.dispose(), M.aoTexture?.dispose(), { normalTexture: null, aoTexture: null })), t.setEngravingCanvas(null), t.setNormalMapCanvas(null);
        return;
      }
      let m = !0;
      const w = (M, T) => new Promise((S) => {
        Xo(M, T, (A, E, b) => {
          S(A ? { img: A, width: E, height: b } : null);
        });
      });
      return (async () => {
        const M = ["♥", "♥︎♥︎", "○○", "⚭", "∞"], T = {
          "♥": "/message/OneH.svg",
          "♥︎♥︎": "/message/TwoH.svg",
          "○○": "/message/TwoR.svg",
          "⚭": "/message/TwoR.svg",
          "∞": "/message/Infinite.svg"
        }, S = M.filter(
          (D) => (n || "").includes(D)
        ), A = [], E = {};
        for (const D of S) {
          const F = T[D];
          A.push(
            w(F, "#000000").then((O) => {
              E[D] = O;
            })
          );
        }
        if (await Promise.all(A), typeof document < "u" && document.fonts && i)
          try {
            await document.fonts.load(`bold 30px ${i}`);
          } catch (D) {
            console.error("Failed to load engraving font:", D);
          }
        if (!m) return;
        const b = rs({
          text: n || "",
          fontFamily: i,
          width: 2048,
          height: 400,
          mode: "engrave",
          blur: 0,
          offsetY: 0,
          offsetX: -10,
          symbolsMap: E,
          bevelWidth: o,
          engravingDepth: a,
          edgeSoftness: u,
          strokeWidth: d
        }), I = rs({
          text: n || "",
          fontFamily: i,
          width: 2048,
          height: 400,
          mode: "engrave",
          blur: 0,
          offsetY: 0,
          offsetX: -10,
          symbolsMap: E,
          bevelWidth: o,
          engravingDepth: 1,
          // Force full depth (0.0 height/blackness) inside the letters for perfect shadow contrast
          edgeSoftness: u,
          strokeWidth: d
        }), P = $o(b, f), C = new N.CanvasTexture(P), L = new N.CanvasTexture(I);
        C.anisotropy = 16, L.anisotropy = 16;
        const V = b.width / b.height, j = 2.2, q = -1 * j, K = 1 * j * V;
        C.wrapS = N.ClampToEdgeWrapping, C.wrapT = N.ClampToEdgeWrapping, C.repeat.set(q, K), C.offset.set(0.5 - 0.5 * q, 0.5 - 0.5 * K), C.colorSpace = N.NoColorSpace, L.wrapS = N.ClampToEdgeWrapping, L.wrapT = N.ClampToEdgeWrapping, L.repeat.set(q, K), L.offset.set(0.5 - 0.5 * q, 0.5 - 0.5 * K), L.colorSpace = N.NoColorSpace, t.setEngravingCanvas(b), t.setNormalMapCanvas(P), v((D) => (D.normalTexture?.dispose(), D.aoTexture?.dispose(), { normalTexture: C, aoTexture: L }));
      })(), () => {
        m = !1;
      };
    }, [
      n,
      r,
      i,
      s,
      o,
      a,
      u,
      f,
      l,
      d,
      x
    ]), se(() => () => {
      v((m) => (m.normalTexture?.dispose(), m.aoTexture?.dispose(), { normalTexture: null, aoTexture: null })), t.setEngravingCanvas(null), t.setNormalMapCanvas(null);
    }, []);
    const { normalTexture: g, aoTexture: _ } = p;
    return se(() => {
      if (!x || !x.geometry) return;
      x.geometry.computeBoundingBox();
      const m = x.geometry.boundingBox;
      if (m) {
        const M = new N.Vector3();
        m.getSize(M), console.log("--- DEBUG RING MESH SIZE ---", {
          name: x.name,
          x: M.x,
          y: M.y,
          z: M.z
        });
      }
      const w = x.onBeforeRender, R = x.onAfterRender;
      return x.onBeforeRender = (M, T, S, A, E, b) => {
        w && w.call(
          x,
          M,
          T,
          S,
          A,
          E,
          b
        ), S instanceof N.OrthographicCamera && A.setDrawRange(0, 0);
      }, x.onAfterRender = (M, T, S, A, E, b) => {
        R && R.call(
          x,
          M,
          T,
          S,
          A,
          E,
          b
        ), A.setDrawRange(0, 1 / 0);
      }, () => {
        x.onBeforeRender = w, x.onAfterRender = R, x.geometry && x.geometry.setDrawRange(0, 1 / 0);
      };
    }, [x]), se(() => {
      if (!(!x || !x.geometry))
        if (s === 2 && g && _) {
          let m = x.userData.originalMaterial;
          if (!m) {
            const R = x.material;
            R && !R.userData?.isEngraved && (m = R, x.userData.originalMaterial = m);
          }
          let w = x.userData.engravedMaterial;
          !w && m && (w = m.clone(), w.userData.isEngraved = !0, w.normalScale = new N.Vector2(-0.05, 0.05), x.userData.engravedMaterial = w), w && (w.normalMap = g, w.aoMap = _, w.aoMapIntensity = l, x.material !== w && (x.material = w));
        } else
          x.userData.originalMaterial && (x.material = x.userData.originalMaterial);
    }, [
      x,
      g,
      _,
      s,
      l
    ]), se(() => () => {
      x && (x.userData.originalMaterial && (x.material = x.userData.originalMaterial, x.userData.originalMaterial = null), x.userData.engravedMaterial && (x.userData.engravedMaterial.dispose(), x.userData.engravedMaterial = null));
    }, [x]), /* @__PURE__ */ W.jsx(qo, {});
  }
), Zo = Ye(
  ({ diamondEnvMap: c }) => {
    const { design3DManager: e } = pt(), { ringManager: t } = e, { size: s } = ci(), n = t.modelUrl;
    return /* @__PURE__ */ W.jsx(cs, { fallback: null, children: n && /* @__PURE__ */ W.jsx(
      Qo,
      {
        modelUrl: n,
        diamondEnvMap: c,
        size: s
      },
      n
    ) });
  }
), Qo = Ye(
  ({
    modelUrl: c,
    diamondEnvMap: e,
    size: t,
    role: s,
    opacitiesRef: n,
    onLoad: r,
    visible: i = !0,
    texturesProp: o
  }) => {
    const { design3DManager: a, designManager: u } = pt(), { ringManager: f } = a, l = o !== void 0 ? o : f?.textures, {
      colorHex: d,
      baseColorHex: h,
      finishingColorHex: y,
      engravingColorHex: x,
      roughness: p,
      finish: v,
      showDiamond: g,
      currentView: _
    } = f, { scene: m } = ri(c), w = Ce(new N.Color(h)), R = Ce(new N.Color(y)), M = Ce(new N.Color(x)), T = Ce(p);
    se(() => {
      w.current.set(h), R.current.set(y), M.current.set(x), T.current = p;
    }, [h, y, x, p]);
    const S = hn(() => {
      if (!m) return null;
      const H = {
        x: -Math.PI / 4,
        y: -Math.PI / 10,
        z: Math.PI / 3
      }, $ = {
        x: -Math.PI,
        y: 0,
        z: 0
      }, B = _ === 2 ? $ : H;
      return Go(m, B.x, B.y, B.z);
    }, [m, _]);
    se(() => {
      S && i && u.setModelMinY(S.minY || 0);
    }, [S, u, i]), se(() => {
      f._markLoaded(), m && r && r(m);
    }, [m, f, r]);
    const A = Ce(_);
    se(() => {
      A.current = _;
    }, [_]), se(() => {
      const H = a.cameraManager.cameraRef;
      if (m && H) {
        const $ = setTimeout(() => {
          if (A.current === 2)
            H.setLookAt(0, 2, -4.4, 0, 0, 0, !1), H.minDistance = 4.3, H.maxDistance = 5.5, H.minAzimuthAngle = -1 / 0, H.maxAzimuthAngle = 1 / 0, H.minPolarAngle = 0.94, H.maxPolarAngle = 1.3399999999999999;
          else {
            const B = u.viewManager.settings, ue = B.homeDistance;
            H.setLookAt(0, 0, ue, 0, 0, 0, !1), H.minDistance = B.minDistance, H.maxDistance = B.maxDistance, H.minAzimuthAngle = -1 / 0, H.maxAzimuthAngle = 1 / 0, H.minPolarAngle = B.minPolarAngle, H.maxPolarAngle = B.maxPolarAngle;
          }
        }, 50);
        return () => clearTimeout($);
      }
    }, [m, a.cameraManager.cameraRef, u]);
    const E = ft(l, [
      "aoGold",
      "Base_metal_AO",
      "Base_Metal_AO",
      "Base_metal_Ao",
      "base_metal_ao",
      "Gold_Metal_AO",
      "Gold_metal_AO",
      "Gold_Metal_Ao",
      "gold_metal_ao",
      "Base_Metal",
      "Gold_Metal"
    ]), b = !!E, I = ft(l, [
      "aoSilver",
      "Finishing_Metal_Ao",
      "Finishing_Metal_AO",
      "Finishing_metal_AO",
      "Finishing_metal_Ao",
      "finishing_metal_ao",
      "Silver_Metal_AO",
      "Silver_metal_AO",
      "Silver_Metal_Ao",
      "silver_metal_ao",
      "Finishing_Metal",
      "Silver_Metal"
    ]), P = !!I, C = ft(l, [
      "aoEngraving",
      "aoEngrave",
      "aoEngravingMesh",
      "aoEngraving_Mesh",
      "Engraving_Mesh_AO",
      "Engraving_Mesh",
      "aoEngravingMetal",
      "aoEngraving_Metal",
      "Engraving_Metal_AO",
      "Engraving_Metal"
    ]), L = !!C, V = ft(l, [
      "noDiamondBase",
      "aoNoDiamond",
      "ao_no_diamond",
      "Base_Metal_NoDiamond_AO",
      "Base_metal_NoDiamond_AO",
      "base_metal_nodiamond_ao",
      "Base_Metal_NoDiamond",
      "Base_metal_NoDiamond",
      "Base_Metal_No_Diamond",
      "Base_metal_No_Diamond"
    ]), j = !!V, q = ft(l, [
      "noDiamondFinishing",
      "aoNoDiamondSilver",
      "ao_no_diamond_silver",
      "Finishing_Metal_NoDiamond_AO",
      "Finishing_metal_NoDiamond_AO",
      "finishing_metal_nodiamond_ao",
      "Finishing_Metal_NoDiamond",
      "Finishing_metal_NoDiamond",
      "Finishing_Metal_No_Diamond",
      "Finishing_metal_No_Diamond"
    ]), K = !!q, D = ft(l, [
      "normalBase",
      "Base_Metal_Normal",
      "Base_metal_Normal",
      "base_metal_normal",
      "Base_Metal_Normal.webp",
      "Base_metal_Normal.webp",
      "base_metal_normal.webp"
    ]) || Js(l, [
      "Base_Metal_Normal",
      "base_metal_normal"
    ]), F = !!D, O = ft(l, [
      "normalFinishing",
      "Finishing_Metal_Normal",
      "Finishing_metal_Normal",
      "finishing_metal_normal",
      "Finishing_Metal_Normal.webp",
      "Finishing_metal_Normal.webp",
      "finishing_metal_normal.webp"
    ]) || Js(l, [
      "Finishing_Metal_Normal",
      "finishing_metal_normal"
    ]), G = !!O, ge = b && E ? E : "", _e = P && I ? I : "", k = L && C ? C : "", Y = j && V ? V : "", oe = K && q ? q : "", me = F && D ? D : "", Re = G && O ? O : "", le = ot(
      ut,
      ge
    );
    le && (le.flipY = !1);
    const ae = ot(
      ut,
      _e
    );
    ae && (ae.flipY = !1);
    const Ie = ot(
      ut,
      k
    );
    Ie && (Ie.flipY = !1);
    const Pe = ot(
      ut,
      Y
    );
    Pe && (Pe.flipY = !1);
    const Oe = ot(
      ut,
      oe
    );
    Oe && (Oe.flipY = !1);
    const X = ot(
      ut,
      me
    );
    X && (X.flipY = !1, X.colorSpace = N.NoColorSpace);
    const xe = ot(
      ut,
      Re
    );
    xe && (xe.flipY = !1, xe.colorSpace = N.NoColorSpace);
    const Et = c ? ((H) => {
      const $ = H.split("/"), B = $.findIndex((ue) => ue === "BehytRings");
      return B !== -1 && $.length > B + 3 ? {
        collection: $[B + 1],
        modelId: $[B + 2],
        variation: $[B + 3]
      } : null;
    })(c) : null, bn = Et ? `/BehytRings/${Et.collection}/${Et.modelId}/${Et.variation}/Roughness_Map.jpg` : "", Rn = l;
    Rn?.roughness && !Rn.roughness.endsWith("roughness.jpg") && Rn.roughness;
    const it = 1, Q = Ce(
      new N.MeshPhysicalMaterial({
        color: d,
        metalness: 1,
        roughness: 0,
        aoMap: b ? le : null,
        aoMapIntensity: b ? 1 : 0,
        clearcoat: v === "Polished" ? 1 : 0,
        normalScale: new N.Vector2(it, it),
        normalMap: F ? X : null,
        alphaMap: b ? le : null
      })
    ), ne = Ce(
      new N.MeshPhysicalMaterial({
        color: "#f6f5f5",
        metalness: 1,
        roughness: 0,
        aoMap: P ? ae : null,
        aoMapIntensity: P ? 0.8 : 0,
        clearcoat: v === "Polished" ? 1 : 0,
        clearcoatRoughness: 0.1,
        normalScale: new N.Vector2(it, it),
        normalMap: G ? xe : null
      })
    ), ee = Ce(
      new N.MeshPhysicalMaterial({
        color: d,
        metalness: 1,
        roughness: p,
        aoMap: L ? Ie : null,
        aoMapIntensity: L ? 1 : 0,
        clearcoat: v === "Polished" ? 1 : 0,
        clearcoatRoughness: 0.1
      })
    );
    se(() => {
      let H = null;
      g ? H = b ? le : null : H = j ? Pe : b ? le : null;
      let $ = null;
      g ? $ = P ? ae : null : $ = K ? Oe : P ? ae : null;
      const B = L ? Ie : null;
      Q.current.aoMap = H, Q.current.aoMapIntensity = H ? 1 : 0, Q.current.normalMap = F ? X : null, Q.current.alphaMap = b ? le : null, Q.current.needsUpdate = !0, ne.current.aoMap = $, ne.current.aoMapIntensity = $ ? 0.8 : 0, ne.current.normalMap = G ? xe : null, ne.current.needsUpdate = !0, ee.current.aoMap = B, ee.current.aoMapIntensity = B ? 1 : 0, ee.current.needsUpdate = !0, console.log("--- Active 3D Ring Texture Maps Applied ---", {
        showDiamond: g,
        goldMaterialAo: H === Pe ? "noDiamondBase" : H ? "aoGold" : "None",
        silverMaterialAo: $ === Oe ? "noDiamondFinishing" : $ ? "aoSilver" : "None",
        engravingMaterialAo: B ? "aoEngrave" : "None"
      });
    }, [
      le,
      ae,
      Ie,
      Pe,
      Oe,
      X,
      xe,
      b,
      P,
      L,
      j,
      K,
      F,
      G,
      g
    ]), Ui((H, $) => {
      const B = 1 - Math.pow(0.01, $), ue = v === "Polished" ? 1 : 0;
      Q.current.color.lerp(w.current, B), Q.current.roughness = N.MathUtils.lerp(
        Q.current.roughness,
        T.current,
        B
      ), Q.current.clearcoat = N.MathUtils.lerp(
        Q.current.clearcoat,
        ue,
        B
      ), Q.current.clearcoatRoughness = N.MathUtils.lerp(
        Q.current.clearcoatRoughness,
        0.1,
        B
      ), ne.current.color.lerp(
        R.current,
        B
      ), ne.current.roughness = N.MathUtils.lerp(
        ne.current.roughness,
        T.current,
        B
      ), ne.current.clearcoat = N.MathUtils.lerp(
        ne.current.clearcoat,
        ue,
        B
      ), ne.current.clearcoatRoughness = N.MathUtils.lerp(
        ne.current.clearcoatRoughness,
        0.1,
        B
      ), ee.current.color.lerp(
        M.current,
        B
      ), ee.current.roughness = N.MathUtils.lerp(
        ee.current.roughness,
        T.current,
        B
      ), ee.current.clearcoat = N.MathUtils.lerp(
        ee.current.clearcoat,
        ue,
        B
      ), ee.current.clearcoatRoughness = N.MathUtils.lerp(
        ee.current.clearcoatRoughness,
        0.1,
        B
      );
      const Z = n && n.current[c] !== void 0 ? n.current[c] : 1, We = Z < 1;
      Q.current.transparent = We, Q.current.opacity = Z, ne.current.transparent = We, ne.current.opacity = Z, ee.current.transparent = We, ee.current.opacity = Z, m && i && m.traverse((ke) => {
        ke instanceof N.Mesh && ke.material && (Array.isArray(ke.material) ? ke.material : [ke.material]).forEach((Be) => {
          Be !== Q.current && Be !== ne.current && Be !== ee.current && (Be.transparent = We, Be.opacity = Z);
        });
      });
    }), _n.useLayoutEffect(() => {
      const H = n && n.current[c] !== void 0 ? n.current[c] : 1, $ = H < 1;
      Q.current.transparent = $, Q.current.opacity = H, ne.current.transparent = $, ne.current.opacity = H, ee.current.transparent = $, ee.current.opacity = H, m && m.traverse((B) => {
        B instanceof N.Mesh && B.material && (Array.isArray(B.material) ? B.material : [B.material]).forEach((Z) => {
          Z !== Q.current && Z !== ne.current && Z !== ee.current && (Z.transparent = $, Z.opacity = H);
        });
      });
    }, [m, i, c, n]), se(() => () => {
      Q.current.dispose(), ne.current.dispose(), ee.current.dispose();
    }, []);
    const {
      hasNoDiamondBaseMesh: ps,
      hasNoDiamondFinishingMesh: gs,
      hasNoDiamondEngravingMesh: xs
    } = hn(() => {
      let H = !1, $ = !1, B = !1;
      return m ? (m.traverse((ue) => {
        if (ue.name) {
          const Z = ue.name.toLowerCase();
          Z.includes("nodiamond") && (Z.includes("engrav") ? B = !0 : Z.includes("finishing") || Z.includes("silver") ? $ = !0 : H = !0);
        }
      }), {
        hasNoDiamondBaseMesh: H,
        hasNoDiamondFinishingMesh: $,
        hasNoDiamondEngravingMesh: B
      }) : {
        hasNoDiamondBaseMesh: !1,
        hasNoDiamondFinishingMesh: !1,
        hasNoDiamondEngravingMesh: !1
      };
    }, [m]);
    return hn(() => {
      if (!m) return;
      const H = [];
      Q.current.normalMap = null, ne.current.normalMap = null, ee.current.normalMap = null, m.traverse(($) => {
        if ($ instanceof N.Mesh) {
          const B = $;
          B.geometry && B.geometry.computeVertexNormals();
          const ue = (He, Xe) => {
            let rt = He;
            const Sn = Xe.toLowerCase();
            for (; rt; ) {
              if (rt.name && rt.name.toLowerCase().includes(Sn))
                return !0;
              rt = rt.parent;
            }
            return !1;
          }, Z = ue(B, "NoDiamond"), We = !Z && (ue(B, "diamond") || ue(B, "diam_centr")), ke = ue(B, "engrav"), Yt = ue(B, "finishing") || ue(B, "silver");
          B.userData.originalNormalMap === void 0 && (B.userData.originalNormalMap = B.material?.normalMap || null, B.userData.originalNormalScale = B.material?.normalScale ? B.material.normalScale.clone() : null);
          const Be = B.userData.originalNormalMap, Wt = B.userData.originalNormalScale, ys = ne.current, vs = Q.current, _s = (He, Xe) => {
            const rt = Xe ? F : G, Sn = Xe ? X : xe;
            rt ? (He.normalMap = Sn, He.normalScale.set(it, it)) : Be && (He.normalMap = Be, Wt && He.normalScale.copy(Wt));
          };
          if (g ? Z ? B.visible = !1 : B.visible = !0 : We ? B.visible = !1 : ke ? Z ? B.visible = !0 : B.visible = !xs : Yt ? Z ? B.visible = !0 : B.visible = !gs : Z ? B.visible = !0 : B.visible = !ps, H.push({
            "Mesh Name": B.name,
            "Parent Name": B.parent?.name || "None",
            "Is Diamond": We,
            "Is NoDiamond": Z,
            "Is Finishing": Yt,
            "Is Engraving": ke,
            "Calculated Visibility": B.visible
          }), We) {
            if (g) {
              const He = new vn(B.geometry, { strategy: 1 });
              B.material = new Yo({
                geometry: B.geometry,
                bvh: He,
                envMap: e,
                resolution: new N.Vector2(t.width, t.height),
                ior: 2.4,
                bounces: 3,
                aberrationStrength: 5e-3,
                envMapIntensity: 0.6,
                reflectivity: 0,
                fresnel: 0.3
              });
            }
          } else ke ? (B.material = ee.current, Be && (ee.current.normalMap = Be, Wt && ee.current.normalScale.copy(
            Wt
          ))) : Yt ? (B.material = ys, _s(ys, !1)) : (B.material = vs, _s(vs, !0));
          B.material && (Array.isArray(B.material) ? B.material : [B.material]).forEach((Xe) => {
            Xe && (Xe.flatShading = !1, Xe.needsUpdate = !0);
          });
        }
      }), i && (console.log(
        `%c[SDK Model Content Matrix] --- Configuration State (showDiamond: ${g}) ---`,
        "color: #00ffca; font-weight: bold; font-size: 12px;"
      ), console.table(H));
    }, [
      m,
      Q.current,
      ne.current,
      ee.current,
      e,
      t,
      g,
      Ie,
      X,
      xe,
      F,
      G,
      it,
      ps,
      gs,
      xs,
      i
    ]), m && S ? /* @__PURE__ */ W.jsx("primitive", { object: m, visible: i }) : null;
  }
), Si = Ye(
  ({ diamondEnvPath: c }) => {
    const { design3DManager: e } = pt(), { ringManager: t } = e, s = Li({ files: c });
    return t.modelUrl ? /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
      /* @__PURE__ */ W.jsx(Zo, { diamondEnvMap: s }),
      !t.isTransitioning && /* @__PURE__ */ W.jsx(Jo, { modelUrl: t.modelUrl })
    ] }) : null;
  }
);
function Qs(c, e) {
  if (e === Ki)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), c;
  if (e === Wn || e === mi) {
    let t = c.getIndex();
    if (t === null) {
      const i = [], o = c.getAttribute("position");
      if (o !== void 0) {
        for (let a = 0; a < o.count; a++)
          i.push(a);
        c.setIndex(i), t = c.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), c;
    }
    const s = t.count - 2, n = [];
    if (e === Wn)
      for (let i = 1; i <= s; i++)
        n.push(t.getX(0)), n.push(t.getX(i)), n.push(t.getX(i + 1));
    else
      for (let i = 0; i < s; i++)
        i % 2 === 0 ? (n.push(t.getX(i)), n.push(t.getX(i + 1)), n.push(t.getX(i + 2))) : (n.push(t.getX(i + 2)), n.push(t.getX(i + 1)), n.push(t.getX(i)));
    n.length / 3 !== s && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = c.clone();
    return r.setIndex(n), r.clearGroups(), r;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), c;
}
class ea extends pi {
  /**
   * Constructs a new glTF loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new ra(t);
    }), this.register(function(t) {
      return new oa(t);
    }), this.register(function(t) {
      return new pa(t);
    }), this.register(function(t) {
      return new ga(t);
    }), this.register(function(t) {
      return new xa(t);
    }), this.register(function(t) {
      return new ca(t);
    }), this.register(function(t) {
      return new la(t);
    }), this.register(function(t) {
      return new ua(t);
    }), this.register(function(t) {
      return new fa(t);
    }), this.register(function(t) {
      return new ia(t);
    }), this.register(function(t) {
      return new da(t);
    }), this.register(function(t) {
      return new aa(t);
    }), this.register(function(t) {
      return new ma(t);
    }), this.register(function(t) {
      return new ha(t);
    }), this.register(function(t) {
      return new na(t);
    }), this.register(function(t) {
      return new ya(t);
    }), this.register(function(t) {
      return new va(t);
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
  load(e, t, s, n) {
    const r = this;
    let i;
    if (this.resourcePath !== "")
      i = this.resourcePath;
    else if (this.path !== "") {
      const u = zt.extractUrlBase(e);
      i = zt.resolveURL(u, this.path);
    } else
      i = zt.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(u) {
      n ? n(u) : console.error(u), r.manager.itemError(e), r.manager.itemEnd(e);
    }, a = new ls(this.manager);
    a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(u) {
      try {
        r.parse(u, i, function(f) {
          t(f), r.manager.itemEnd(e);
        }, o);
      } catch (f) {
        o(f);
      }
    }, s, o);
  }
  /**
   * Sets the given Draco loader to this loader. Required for decoding assets
   * compressed with the `KHR_draco_mesh_compression` extension.
   *
   * @param {DRACOLoader} dracoLoader - The Draco loader to set.
   * @return {GLTFLoader} A reference to this loader.
   */
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  /**
   * Sets the given KTX2 loader to this loader. Required for loading KTX2
   * compressed textures.
   *
   * @param {KTX2Loader} ktx2Loader - The KTX2 loader to set.
   * @return {GLTFLoader} A reference to this loader.
   */
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  /**
   * Sets the given meshopt decoder. Required for decoding assets
   * compressed with the `EXT_meshopt_compression` extension.
   *
   * @param {Object} meshoptDecoder - The meshopt decoder to set.
   * @return {GLTFLoader} A reference to this loader.
   */
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  /**
   * Registers a plugin callback. This API is internally used to implement the various
   * glTF extensions but can also used by third-party code to add additional logic
   * to the loader.
   *
   * @param {function(parser:GLTFParser)} callback - The callback function to register.
   * @return {GLTFLoader} A reference to this loader.
   */
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  /**
   * Unregisters a plugin callback.
   *
   * @param {Function} callback - The callback function to unregister.
   * @return {GLTFLoader} A reference to this loader.
   */
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  /**
   * Parses the given FBX data and returns the resulting group.
   *
   * @param {string|ArrayBuffer} data - The raw glTF data.
   * @param {string} path - The URL base path.
   * @param {function(GLTFLoader~LoadObject)} onLoad - Executed when the loading process has been finished.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  parse(e, t, s, n) {
    let r;
    const i = {}, o = {}, a = new TextDecoder();
    if (typeof e == "string")
      r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (a.decode(new Uint8Array(e, 0, 4)) === Ei) {
        try {
          i[z.KHR_BINARY_GLTF] = new _a(e);
        } catch (l) {
          n && n(l);
          return;
        }
        r = JSON.parse(i[z.KHR_BINARY_GLTF].content);
      } else
        r = JSON.parse(a.decode(e));
    else
      r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const u = new Ca(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    u.fileLoader.setRequestHeader(this.requestHeader);
    for (let f = 0; f < this.pluginCallbacks.length; f++) {
      const l = this.pluginCallbacks[f](u);
      l.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[l.name] = l, i[l.name] = !0;
    }
    if (r.extensionsUsed)
      for (let f = 0; f < r.extensionsUsed.length; ++f) {
        const l = r.extensionsUsed[f], d = r.extensionsRequired || [];
        switch (l) {
          case z.KHR_MATERIALS_UNLIT:
            i[l] = new sa();
            break;
          case z.KHR_DRACO_MESH_COMPRESSION:
            i[l] = new wa(r, this.dracoLoader);
            break;
          case z.KHR_TEXTURE_TRANSFORM:
            i[l] = new Ta();
            break;
          case z.KHR_MESH_QUANTIZATION:
            i[l] = new Ma();
            break;
          default:
            d.indexOf(l) >= 0 && o[l] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + l + '".');
        }
      }
    u.setExtensions(i), u.setPlugins(o), u.parse(s, n);
  }
  /**
   * Async version of {@link GLTFLoader#parse}.
   *
   * @async
   * @param {string|ArrayBuffer} data - The raw glTF data.
   * @param {string} path - The URL base path.
   * @return {Promise<GLTFLoader~LoadObject>} A Promise that resolves with the loaded glTF when the parsing has been finished.
   */
  parseAsync(e, t) {
    const s = this;
    return new Promise(function(n, r) {
      s.parse(e, t, n, r);
    });
  }
}
function ta() {
  let c = {};
  return {
    get: function(e) {
      return c[e];
    },
    add: function(e, t) {
      c[e] = t;
    },
    remove: function(e) {
      delete c[e];
    },
    removeAll: function() {
      c = {};
    }
  };
}
const z = {
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
class na {
  constructor(e) {
    this.parser = e, this.name = z.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let s = 0, n = t.length; s < n; s++) {
      const r = t[s];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, s = "light:" + e;
    let n = t.cache.get(s);
    if (n) return n;
    const r = t.json, a = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let u;
    const f = new ht(16777215);
    a.color !== void 0 && f.setRGB(a.color[0], a.color[1], a.color[2], Fe);
    const l = a.range !== void 0 ? a.range : 0;
    switch (a.type) {
      case "directional":
        u = new Xi(f), u.target.position.set(0, 0, -1), u.add(u.target);
        break;
      case "point":
        u = new Wi(f), u.distance = l;
        break;
      case "spot":
        u = new Yi(f), u.distance = l, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle !== void 0 ? a.spot.innerConeAngle : 0, a.spot.outerConeAngle = a.spot.outerConeAngle !== void 0 ? a.spot.outerConeAngle : Math.PI / 4, u.angle = a.spot.outerConeAngle, u.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, u.target.position.set(0, 0, -1), u.add(u.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
    }
    return u.position.set(0, 0, 0), Ne(u, a), a.intensity !== void 0 && (u.intensity = a.intensity), u.name = t.createUniqueName(a.name || "light_" + e), n = Promise.resolve(u), t.cache.add(s, n), n;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, s = this.parser, r = s.json.nodes[e], o = (r.extensions && r.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(a) {
      return s._getNodeRef(t.cache, o, a);
    });
  }
}
class sa {
  constructor() {
    this.name = z.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return kt;
  }
  extendParams(e, t, s) {
    const n = [];
    e.color = new ht(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const i = r.baseColorFactor;
        e.color.setRGB(i[0], i[1], i[2], Fe), e.opacity = i[3];
      }
      r.baseColorTexture !== void 0 && n.push(s.assignTexture(e, "map", r.baseColorTexture, Kt));
    }
    return Promise.all(n);
  }
}
class ia {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = n.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class ra {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    if (i.clearcoatFactor !== void 0 && (t.clearcoat = i.clearcoatFactor), i.clearcoatTexture !== void 0 && r.push(s.assignTexture(t, "clearcoatMap", i.clearcoatTexture)), i.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = i.clearcoatRoughnessFactor), i.clearcoatRoughnessTexture !== void 0 && r.push(s.assignTexture(t, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), i.clearcoatNormalTexture !== void 0 && (r.push(s.assignTexture(t, "clearcoatNormalMap", i.clearcoatNormalTexture)), i.clearcoatNormalTexture.scale !== void 0)) {
      const o = i.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Le(o, o);
    }
    return Promise.all(r);
  }
}
class oa {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = n.extensions[this.name];
    return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class aa {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    return i.iridescenceFactor !== void 0 && (t.iridescence = i.iridescenceFactor), i.iridescenceTexture !== void 0 && r.push(s.assignTexture(t, "iridescenceMap", i.iridescenceTexture)), i.iridescenceIor !== void 0 && (t.iridescenceIOR = i.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), i.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = i.iridescenceThicknessMinimum), i.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = i.iridescenceThicknessMaximum), i.iridescenceThicknessTexture !== void 0 && r.push(s.assignTexture(t, "iridescenceThicknessMap", i.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class ca {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [];
    t.sheenColor = new ht(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const i = n.extensions[this.name];
    if (i.sheenColorFactor !== void 0) {
      const o = i.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], Fe);
    }
    return i.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = i.sheenRoughnessFactor), i.sheenColorTexture !== void 0 && r.push(s.assignTexture(t, "sheenColorMap", i.sheenColorTexture, Kt)), i.sheenRoughnessTexture !== void 0 && r.push(s.assignTexture(t, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(r);
  }
}
class la {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    return i.transmissionFactor !== void 0 && (t.transmission = i.transmissionFactor), i.transmissionTexture !== void 0 && r.push(s.assignTexture(t, "transmissionMap", i.transmissionTexture)), Promise.all(r);
  }
}
class ua {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    t.thickness = i.thicknessFactor !== void 0 ? i.thicknessFactor : 0, i.thicknessTexture !== void 0 && r.push(s.assignTexture(t, "thicknessMap", i.thicknessTexture)), t.attenuationDistance = i.attenuationDistance || 1 / 0;
    const o = i.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new ht().setRGB(o[0], o[1], o[2], Fe), Promise.all(r);
  }
}
class fa {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = n.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class da {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    t.specularIntensity = i.specularFactor !== void 0 ? i.specularFactor : 1, i.specularTexture !== void 0 && r.push(s.assignTexture(t, "specularIntensityMap", i.specularTexture));
    const o = i.specularColorFactor || [1, 1, 1];
    return t.specularColor = new ht().setRGB(o[0], o[1], o[2], Fe), i.specularColorTexture !== void 0 && r.push(s.assignTexture(t, "specularColorMap", i.specularColorTexture, Kt)), Promise.all(r);
  }
}
class ha {
  constructor(e) {
    this.parser = e, this.name = z.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    return t.bumpScale = i.bumpFactor !== void 0 ? i.bumpFactor : 1, i.bumpTexture !== void 0 && r.push(s.assignTexture(t, "bumpMap", i.bumpTexture)), Promise.all(r);
  }
}
class ma {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    return i.anisotropyStrength !== void 0 && (t.anisotropy = i.anisotropyStrength), i.anisotropyRotation !== void 0 && (t.anisotropyRotation = i.anisotropyRotation), i.anisotropyTexture !== void 0 && r.push(s.assignTexture(t, "anisotropyMap", i.anisotropyTexture)), Promise.all(r);
  }
}
class pa {
  constructor(e) {
    this.parser = e, this.name = z.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, s = t.json, n = s.textures[e];
    if (!n.extensions || !n.extensions[this.name])
      return null;
    const r = n.extensions[this.name], i = t.options.ktx2Loader;
    if (!i) {
      if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, i);
  }
}
class ga {
  constructor(e) {
    this.parser = e, this.name = z.EXT_TEXTURE_WEBP;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, n = s.json, r = n.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const i = r.extensions[t], o = n.images[i.source];
    let a = s.textureLoader;
    if (o.uri) {
      const u = s.options.manager.getHandler(o.uri);
      u !== null && (a = u);
    }
    return s.loadTextureImage(e, i.source, a);
  }
}
class xa {
  constructor(e) {
    this.parser = e, this.name = z.EXT_TEXTURE_AVIF;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, n = s.json, r = n.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const i = r.extensions[t], o = n.images[i.source];
    let a = s.textureLoader;
    if (o.uri) {
      const u = s.options.manager.getHandler(o.uri);
      u !== null && (a = u);
    }
    return s.loadTextureImage(e, i.source, a);
  }
}
class ya {
  constructor(e) {
    this.name = z.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, s = t.bufferViews[e];
    if (s.extensions && s.extensions[this.name]) {
      const n = s.extensions[this.name], r = this.parser.getDependency("buffer", n.buffer), i = this.parser.options.meshoptDecoder;
      if (!i || !i.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(o) {
        const a = n.byteOffset || 0, u = n.byteLength || 0, f = n.count, l = n.byteStride, d = new Uint8Array(o, a, u);
        return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(f, l, d, n.mode, n.filter).then(function(h) {
          return h.buffer;
        }) : i.ready.then(function() {
          const h = new ArrayBuffer(f * l);
          return i.decodeGltfBuffer(new Uint8Array(h), f, l, d, n.mode, n.filter), h;
        });
      });
    } else
      return null;
  }
}
class va {
  constructor(e) {
    this.name = z.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, s = t.nodes[e];
    if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0)
      return null;
    const n = t.meshes[s.mesh];
    for (const u of n.primitives)
      if (u.mode !== Me.TRIANGLES && u.mode !== Me.TRIANGLE_STRIP && u.mode !== Me.TRIANGLE_FAN && u.mode !== void 0)
        return null;
    const i = s.extensions[this.name].attributes, o = [], a = {};
    for (const u in i)
      o.push(this.parser.getDependency("accessor", i[u]).then((f) => (a[u] = f, a[u])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((u) => {
      const f = u.pop(), l = f.isGroup ? f.children : [f], d = u[0].count, h = [];
      for (const y of l) {
        const x = new be(), p = new U(), v = new gi(), g = new U(1, 1, 1), _ = new $i(y.geometry, y.material, d);
        for (let m = 0; m < d; m++)
          a.TRANSLATION && p.fromBufferAttribute(a.TRANSLATION, m), a.ROTATION && v.fromBufferAttribute(a.ROTATION, m), a.SCALE && g.fromBufferAttribute(a.SCALE, m), _.setMatrixAt(m, x.compose(p, v, g));
        for (const m in a)
          if (m === "_COLOR_0") {
            const w = a[m];
            _.instanceColor = new qi(w.array, w.itemSize, w.normalized);
          } else m !== "TRANSLATION" && m !== "ROTATION" && m !== "SCALE" && y.geometry.setAttribute(m, a[m]);
        xi.prototype.copy.call(_, y), this.parser.assignFinalMaterial(_), h.push(_);
      }
      return f.isGroup ? (f.clear(), f.add(...h), f) : h[0];
    }));
  }
}
const Ei = "glTF", Ot = 12, ei = { JSON: 1313821514, BIN: 5130562 };
class _a {
  constructor(e) {
    this.name = z.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Ot), s = new TextDecoder();
    if (this.header = {
      magic: s.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Ei)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - Ot, r = new DataView(e, Ot);
    let i = 0;
    for (; i < n; ) {
      const o = r.getUint32(i, !0);
      i += 4;
      const a = r.getUint32(i, !0);
      if (i += 4, a === ei.JSON) {
        const u = new Uint8Array(e, Ot + i, o);
        this.content = s.decode(u);
      } else if (a === ei.BIN) {
        const u = Ot + i;
        this.body = e.slice(u, u + o);
      }
      i += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class wa {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = z.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const s = this.json, n = this.dracoLoader, r = e.extensions[this.name].bufferView, i = e.extensions[this.name].attributes, o = {}, a = {}, u = {};
    for (const f in i) {
      const l = os[f] || f.toLowerCase();
      o[l] = i[f];
    }
    for (const f in e.attributes) {
      const l = os[f] || f.toLowerCase();
      if (i[f] !== void 0) {
        const d = s.accessors[e.attributes[f]], h = St[d.componentType];
        u[l] = h.name, a[l] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(f) {
      return new Promise(function(l, d) {
        n.decodeDracoFile(f, function(h) {
          for (const y in h.attributes) {
            const x = h.attributes[y], p = a[y];
            p !== void 0 && (x.normalized = p);
          }
          l(h);
        }, o, u, Fe, d);
      });
    });
  }
}
class Ta {
  constructor() {
    this.name = z.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class Ma {
  constructor() {
    this.name = z.KHR_MESH_QUANTIZATION;
  }
}
class Di extends Tr {
  constructor(e, t, s, n) {
    super(e, t, s, n);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, s = this.sampleValues, n = this.valueSize, r = e * n * 3 + n;
    for (let i = 0; i !== n; i++)
      t[i] = s[r + i];
    return t;
  }
  interpolate_(e, t, s, n) {
    const r = this.resultBuffer, i = this.sampleValues, o = this.valueSize, a = o * 2, u = o * 3, f = n - t, l = (s - t) / f, d = l * l, h = d * l, y = e * u, x = y - u, p = -2 * h + 3 * d, v = h - d, g = 1 - p, _ = v - d + l;
    for (let m = 0; m !== o; m++) {
      const w = i[x + m + o], R = i[x + m + a] * f, M = i[y + m + o], T = i[y + m] * f;
      r[m] = g * w + _ * R + p * M + v * T;
    }
    return r;
  }
}
const Aa = new gi();
class ba extends Di {
  interpolate_(e, t, s, n) {
    const r = super.interpolate_(e, t, s, n);
    return Aa.fromArray(r).normalize().toArray(r), r;
  }
}
const Me = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, St = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, ti = {
  9728: Ze,
  9729: mt,
  9984: sr,
  9985: nr,
  9986: tr,
  9987: yi
}, ni = {
  33071: mn,
  33648: ir,
  10497: Xn
}, Vn = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, os = {
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
}, qe = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Ra = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: _i,
  STEP: wr
}, zn = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Sa(c) {
  return c.DefaultMaterial === void 0 && (c.DefaultMaterial = new vi({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: jn
  })), c.DefaultMaterial;
}
function dt(c, e, t) {
  for (const s in t.extensions)
    c[s] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[s] = t.extensions[s]);
}
function Ne(c, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(c.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Ea(c, e, t) {
  let s = !1, n = !1, r = !1;
  for (let u = 0, f = e.length; u < f; u++) {
    const l = e[u];
    if (l.POSITION !== void 0 && (s = !0), l.NORMAL !== void 0 && (n = !0), l.COLOR_0 !== void 0 && (r = !0), s && n && r) break;
  }
  if (!s && !n && !r) return Promise.resolve(c);
  const i = [], o = [], a = [];
  for (let u = 0, f = e.length; u < f; u++) {
    const l = e[u];
    if (s) {
      const d = l.POSITION !== void 0 ? t.getDependency("accessor", l.POSITION) : c.attributes.position;
      i.push(d);
    }
    if (n) {
      const d = l.NORMAL !== void 0 ? t.getDependency("accessor", l.NORMAL) : c.attributes.normal;
      o.push(d);
    }
    if (r) {
      const d = l.COLOR_0 !== void 0 ? t.getDependency("accessor", l.COLOR_0) : c.attributes.color;
      a.push(d);
    }
  }
  return Promise.all([
    Promise.all(i),
    Promise.all(o),
    Promise.all(a)
  ]).then(function(u) {
    const f = u[0], l = u[1], d = u[2];
    return s && (c.morphAttributes.position = f), n && (c.morphAttributes.normal = l), r && (c.morphAttributes.color = d), c.morphTargetsRelative = !0, c;
  });
}
function Da(c, e) {
  if (c.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, s = e.weights.length; t < s; t++)
      c.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (c.morphTargetInfluences.length === t.length) {
      c.morphTargetDictionary = {};
      for (let s = 0, n = t.length; s < n; s++)
        c.morphTargetDictionary[t[s]] = s;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Ia(c) {
  let e;
  const t = c.extensions && c.extensions[z.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Gn(t.attributes) : e = c.indices + ":" + Gn(c.attributes) + ":" + c.mode, c.targets !== void 0)
    for (let s = 0, n = c.targets.length; s < n; s++)
      e += ":" + Gn(c.targets[s]);
  return e;
}
function Gn(c) {
  let e = "";
  const t = Object.keys(c).sort();
  for (let s = 0, n = t.length; s < n; s++)
    e += t[s] + ":" + c[t[s]] + ";";
  return e;
}
function as(c) {
  switch (c) {
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
function Pa(c) {
  return c.search(/\.jpe?g($|\?)/i) > 0 || c.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : c.search(/\.webp($|\?)/i) > 0 || c.search(/^data\:image\/webp/) === 0 ? "image/webp" : c.search(/\.ktx2($|\?)/i) > 0 || c.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const Ba = new be();
class Ca {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new ta(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = !1, n = -1, r = !1, i = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      s = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const a = o.match(/Version\/(\d+)/);
      n = s && a ? parseInt(a[1], 10) : -1, r = o.indexOf("Firefox") > -1, i = r ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || s && n < 17 || r && i < 98 ? this.textureLoader = new Ji(this.options.manager) : this.textureLoader = new Zi(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new ls(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const s = this, n = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(i) {
      return i._markDefs && i._markDefs();
    }), Promise.all(this._invokeAll(function(i) {
      return i.beforeRoot && i.beforeRoot();
    })).then(function() {
      return Promise.all([
        s.getDependencies("scene"),
        s.getDependencies("animation"),
        s.getDependencies("camera")
      ]);
    }).then(function(i) {
      const o = {
        scene: i[0][n.scene || 0],
        scenes: i[0],
        animations: i[1],
        cameras: i[2],
        asset: n.asset,
        parser: s,
        userData: {}
      };
      return dt(r, o, n), Ne(o, n), Promise.all(s._invokeAll(function(a) {
        return a.afterRoot && a.afterRoot(o);
      })).then(function() {
        for (const a of o.scenes)
          a.updateMatrixWorld();
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   *
   * @private
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], s = this.json.meshes || [];
    for (let n = 0, r = t.length; n < r; n++) {
      const i = t[n].joints;
      for (let o = 0, a = i.length; o < a; o++)
        e[i[o]].isBone = !0;
    }
    for (let n = 0, r = e.length; n < r; n++) {
      const i = e[n];
      i.mesh !== void 0 && (this._addNodeRef(this.meshCache, i.mesh), i.skin !== void 0 && (s[i.mesh].isSkinnedMesh = !0)), i.camera !== void 0 && this._addNodeRef(this.cameraCache, i.camera);
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
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
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
  _getNodeRef(e, t, s) {
    if (e.refs[t] <= 1) return s;
    const n = s.clone(), r = (i, o) => {
      const a = this.associations.get(i);
      a != null && this.associations.set(o, a);
      for (const [u, f] of i.children.entries())
        r(f, o.children[u]);
    };
    return r(s, n), n.name += "_instance_" + e.uses[t]++, n;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let s = 0; s < t.length; s++) {
      const n = e(t[s]);
      if (n) return n;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const s = [];
    for (let n = 0; n < t.length; n++) {
      const r = e(t[n]);
      r && s.push(r);
    }
    return s;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   *
   * @private
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const s = e + ":" + t;
    let n = this.cache.get(s);
    if (!n) {
      switch (e) {
        case "scene":
          n = this.loadScene(t);
          break;
        case "node":
          n = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          n = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          n = this.loadAccessor(t);
          break;
        case "bufferView":
          n = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          n = this.loadBuffer(t);
          break;
        case "material":
          n = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          n = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          n = this.loadSkin(t);
          break;
        case "animation":
          n = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          n = this.loadCamera(t);
          break;
        default:
          if (n = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
          }), !n)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(s, n);
    }
    return n;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   *
   * @private
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const s = this, n = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(n.map(function(r, i) {
        return s.getDependency(e, i);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   *
   * @private
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], s = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[z.KHR_BINARY_GLTF].body);
    const n = this.options;
    return new Promise(function(r, i) {
      s.load(zt.resolveURL(t.uri, n.path), r, void 0, function() {
        i(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
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
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(s) {
      const n = t.byteLength || 0, r = t.byteOffset || 0;
      return s.slice(r, r + n);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   *
   * @private
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, s = this.json, n = this.json.accessors[e];
    if (n.bufferView === void 0 && n.sparse === void 0) {
      const i = Vn[n.type], o = St[n.componentType], a = n.normalized === !0, u = new o(n.count * i);
      return Promise.resolve(new Rt(u, i, a));
    }
    const r = [];
    return n.bufferView !== void 0 ? r.push(this.getDependency("bufferView", n.bufferView)) : r.push(null), n.sparse !== void 0 && (r.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(r).then(function(i) {
      const o = i[0], a = Vn[n.type], u = St[n.componentType], f = u.BYTES_PER_ELEMENT, l = f * a, d = n.byteOffset || 0, h = n.bufferView !== void 0 ? s.bufferViews[n.bufferView].byteStride : void 0, y = n.normalized === !0;
      let x, p;
      if (h && h !== l) {
        const v = Math.floor(d / h), g = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + v + ":" + n.count;
        let _ = t.cache.get(g);
        _ || (x = new u(o, v * h, n.count * h / f), _ = new Qi(x, h / f), t.cache.add(g, _)), p = new er(_, a, d % h / f, y);
      } else
        o === null ? x = new u(n.count * a) : x = new u(o, d, n.count * a), p = new Rt(x, a, y);
      if (n.sparse !== void 0) {
        const v = Vn.SCALAR, g = St[n.sparse.indices.componentType], _ = n.sparse.indices.byteOffset || 0, m = n.sparse.values.byteOffset || 0, w = new g(i[1], _, n.sparse.count * v), R = new u(i[2], m, n.sparse.count * a);
        o !== null && (p = new Rt(p.array.slice(), p.itemSize, p.normalized)), p.normalized = !1;
        for (let M = 0, T = w.length; M < T; M++) {
          const S = w[M];
          if (p.setX(S, R[M * a]), a >= 2 && p.setY(S, R[M * a + 1]), a >= 3 && p.setZ(S, R[M * a + 2]), a >= 4 && p.setW(S, R[M * a + 3]), a >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        p.normalized = y;
      }
      return p;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   *
   * @private
   * @param {number} textureIndex
   * @return {Promise<?Texture>}
   */
  loadTexture(e) {
    const t = this.json, s = this.options, r = t.textures[e].source, i = t.images[r];
    let o = this.textureLoader;
    if (i.uri) {
      const a = s.manager.getHandler(i.uri);
      a !== null && (o = a);
    }
    return this.loadTextureImage(e, r, o);
  }
  loadTextureImage(e, t, s) {
    const n = this, r = this.json, i = r.textures[e], o = r.images[t], a = (o.uri || o.bufferView) + ":" + i.sampler;
    if (this.textureCache[a])
      return this.textureCache[a];
    const u = this.loadImageSource(t, s).then(function(f) {
      f.flipY = !1, f.name = i.name || o.name || "", f.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (f.name = o.uri);
      const d = (r.samplers || {})[i.sampler] || {};
      return f.magFilter = ti[d.magFilter] || mt, f.minFilter = ti[d.minFilter] || yi, f.wrapS = ni[d.wrapS] || Xn, f.wrapT = ni[d.wrapT] || Xn, f.generateMipmaps = !f.isCompressedTexture && f.minFilter !== Ze && f.minFilter !== mt, n.associations.set(f, { textures: e }), f;
    }).catch(function() {
      return null;
    });
    return this.textureCache[a] = u, u;
  }
  loadImageSource(e, t) {
    const s = this, n = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((l) => l.clone());
    const i = n.images[e], o = self.URL || self.webkitURL;
    let a = i.uri || "", u = !1;
    if (i.bufferView !== void 0)
      a = s.getDependency("bufferView", i.bufferView).then(function(l) {
        u = !0;
        const d = new Blob([l], { type: i.mimeType });
        return a = o.createObjectURL(d), a;
      });
    else if (i.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const f = Promise.resolve(a).then(function(l) {
      return new Promise(function(d, h) {
        let y = d;
        t.isImageBitmapLoader === !0 && (y = function(x) {
          const p = new Ts(x);
          p.needsUpdate = !0, d(p);
        }), t.load(zt.resolveURL(l, r.path), y, void 0, h);
      });
    }).then(function(l) {
      return u === !0 && o.revokeObjectURL(a), Ne(l, i), l.userData.mimeType = i.mimeType || Pa(i.uri), l;
    }).catch(function(l) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", a), l;
    });
    return this.sourceCache[e] = f, f;
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
  assignTexture(e, t, s, n) {
    const r = this;
    return this.getDependency("texture", s.index).then(function(i) {
      if (!i) return null;
      if (s.texCoord !== void 0 && s.texCoord > 0 && (i = i.clone(), i.channel = s.texCoord), r.extensions[z.KHR_TEXTURE_TRANSFORM]) {
        const o = s.extensions !== void 0 ? s.extensions[z.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const a = r.associations.get(i);
          i = r.extensions[z.KHR_TEXTURE_TRANSFORM].extendTexture(i, o), r.associations.set(i, a);
        }
      }
      return n !== void 0 && (i.colorSpace = n), e[t] = i, i;
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
  assignFinalMaterial(e) {
    const t = e.geometry;
    let s = e.material;
    const n = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, i = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + s.uuid;
      let a = this.cache.get(o);
      a || (a = new rr(), Dn.prototype.copy.call(a, s), a.color.copy(s.color), a.map = s.map, a.sizeAttenuation = !1, this.cache.add(o, a)), s = a;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + s.uuid;
      let a = this.cache.get(o);
      a || (a = new or(), Dn.prototype.copy.call(a, s), a.color.copy(s.color), a.map = s.map, this.cache.add(o, a)), s = a;
    }
    if (n || r || i) {
      let o = "ClonedMaterial:" + s.uuid + ":";
      n && (o += "derivative-tangents:"), r && (o += "vertex-colors:"), i && (o += "flat-shading:");
      let a = this.cache.get(o);
      a || (a = s.clone(), r && (a.vertexColors = !0), i && (a.flatShading = !0), n && (a.normalScale && (a.normalScale.y *= -1), a.clearcoatNormalScale && (a.clearcoatNormalScale.y *= -1)), this.cache.add(o, a), this.associations.set(a, this.associations.get(s))), s = a;
    }
    e.material = s;
  }
  getMaterialType() {
    return vi;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   *
   * @private
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, s = this.json, n = this.extensions, r = s.materials[e];
    let i;
    const o = {}, a = r.extensions || {}, u = [];
    if (a[z.KHR_MATERIALS_UNLIT]) {
      const l = n[z.KHR_MATERIALS_UNLIT];
      i = l.getMaterialType(), u.push(l.extendParams(o, r, t));
    } else {
      const l = r.pbrMetallicRoughness || {};
      if (o.color = new ht(1, 1, 1), o.opacity = 1, Array.isArray(l.baseColorFactor)) {
        const d = l.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], Fe), o.opacity = d[3];
      }
      l.baseColorTexture !== void 0 && u.push(t.assignTexture(o, "map", l.baseColorTexture, Kt)), o.metalness = l.metallicFactor !== void 0 ? l.metallicFactor : 1, o.roughness = l.roughnessFactor !== void 0 ? l.roughnessFactor : 1, l.metallicRoughnessTexture !== void 0 && (u.push(t.assignTexture(o, "metalnessMap", l.metallicRoughnessTexture)), u.push(t.assignTexture(o, "roughnessMap", l.metallicRoughnessTexture))), i = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), u.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    r.doubleSided === !0 && (o.side = fi);
    const f = r.alphaMode || zn.OPAQUE;
    if (f === zn.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, f === zn.MASK && (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && i !== kt && (u.push(t.assignTexture(o, "normalMap", r.normalTexture)), o.normalScale = new Le(1, 1), r.normalTexture.scale !== void 0)) {
      const l = r.normalTexture.scale;
      o.normalScale.set(l, l);
    }
    if (r.occlusionTexture !== void 0 && i !== kt && (u.push(t.assignTexture(o, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && i !== kt) {
      const l = r.emissiveFactor;
      o.emissive = new ht().setRGB(l[0], l[1], l[2], Fe);
    }
    return r.emissiveTexture !== void 0 && i !== kt && u.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, Kt)), Promise.all(u).then(function() {
      const l = new i(o);
      return r.name && (l.name = r.name), Ne(l, r), t.associations.set(l, { materials: e }), r.extensions && dt(n, l, r), l;
    });
  }
  /**
   * When Object3D instances are targeted by animation, they need unique names.
   *
   * @private
   * @param {string} originalName
   * @return {string}
   */
  createUniqueName(e) {
    const t = ar.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
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
  loadGeometries(e) {
    const t = this, s = this.extensions, n = this.primitiveCache;
    function r(o) {
      return s[z.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(a) {
        return si(a, o, t);
      });
    }
    const i = [];
    for (let o = 0, a = e.length; o < a; o++) {
      const u = e[o], f = Ia(u), l = n[f];
      if (l)
        i.push(l.promise);
      else {
        let d;
        u.extensions && u.extensions[z.KHR_DRACO_MESH_COMPRESSION] ? d = r(u) : d = si(new cr(), u, t), n[f] = { primitive: u, promise: d }, i.push(d);
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
  loadMesh(e) {
    const t = this, s = this.json, n = this.extensions, r = s.meshes[e], i = r.primitives, o = [];
    for (let a = 0, u = i.length; a < u; a++) {
      const f = i[a].material === void 0 ? Sa(this.cache) : this.getDependency("material", i[a].material);
      o.push(f);
    }
    return o.push(t.loadGeometries(i)), Promise.all(o).then(function(a) {
      const u = a.slice(0, a.length - 1), f = a[a.length - 1], l = [];
      for (let h = 0, y = f.length; h < y; h++) {
        const x = f[h], p = i[h];
        let v;
        const g = u[h];
        if (p.mode === Me.TRIANGLES || p.mode === Me.TRIANGLE_STRIP || p.mode === Me.TRIANGLE_FAN || p.mode === void 0)
          v = r.isSkinnedMesh === !0 ? new lr(x, g) : new ur(x, g), v.isSkinnedMesh === !0 && v.normalizeSkinWeights(), p.mode === Me.TRIANGLE_STRIP ? v.geometry = Qs(v.geometry, mi) : p.mode === Me.TRIANGLE_FAN && (v.geometry = Qs(v.geometry, Wn));
        else if (p.mode === Me.LINES)
          v = new fr(x, g);
        else if (p.mode === Me.LINE_STRIP)
          v = new dr(x, g);
        else if (p.mode === Me.LINE_LOOP)
          v = new hr(x, g);
        else if (p.mode === Me.POINTS)
          v = new mr(x, g);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(v.geometry.morphAttributes).length > 0 && Da(v, r), v.name = t.createUniqueName(r.name || "mesh_" + e), Ne(v, r), p.extensions && dt(n, v, p), t.assignFinalMaterial(v), l.push(v);
      }
      for (let h = 0, y = l.length; h < y; h++)
        t.associations.set(l[h], {
          meshes: e,
          primitives: h
        });
      if (l.length === 1)
        return r.extensions && dt(n, l[0], r), l[0];
      const d = new In();
      r.extensions && dt(n, d, r), t.associations.set(d, { meshes: e });
      for (let h = 0, y = l.length; h < y; h++)
        d.add(l[h]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   *
   * @private
   * @param {number} cameraIndex
   * @return {Promise<Camera>|undefined}
   */
  loadCamera(e) {
    let t;
    const s = this.json.cameras[e], n = s[s.type];
    if (!n) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return s.type === "perspective" ? t = new pr(gr.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : s.type === "orthographic" && (t = new xr(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), Ne(t, s), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   *
   * @private
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], s = [];
    for (let n = 0, r = t.joints.length; n < r; n++)
      s.push(this._loadNodeShallow(t.joints[n]));
    return t.inverseBindMatrices !== void 0 ? s.push(this.getDependency("accessor", t.inverseBindMatrices)) : s.push(null), Promise.all(s).then(function(n) {
      const r = n.pop(), i = n, o = [], a = [];
      for (let u = 0, f = i.length; u < f; u++) {
        const l = i[u];
        if (l) {
          o.push(l);
          const d = new be();
          r !== null && d.fromArray(r.array, u * 16), a.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[u]);
      }
      return new yr(o, a);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   *
   * @private
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, s = this, n = t.animations[e], r = n.name ? n.name : "animation_" + e, i = [], o = [], a = [], u = [], f = [];
    for (let l = 0, d = n.channels.length; l < d; l++) {
      const h = n.channels[l], y = n.samplers[h.sampler], x = h.target, p = x.node, v = n.parameters !== void 0 ? n.parameters[y.input] : y.input, g = n.parameters !== void 0 ? n.parameters[y.output] : y.output;
      x.node !== void 0 && (i.push(this.getDependency("node", p)), o.push(this.getDependency("accessor", v)), a.push(this.getDependency("accessor", g)), u.push(y), f.push(x));
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(o),
      Promise.all(a),
      Promise.all(u),
      Promise.all(f)
    ]).then(function(l) {
      const d = l[0], h = l[1], y = l[2], x = l[3], p = l[4], v = [];
      for (let _ = 0, m = d.length; _ < m; _++) {
        const w = d[_], R = h[_], M = y[_], T = x[_], S = p[_];
        if (w === void 0) continue;
        w.updateMatrix && w.updateMatrix();
        const A = s._createAnimationTracks(w, R, M, T, S);
        if (A)
          for (let E = 0; E < A.length; E++)
            v.push(A[E]);
      }
      const g = new vr(r, void 0, v);
      return Ne(g, n), g;
    });
  }
  createNodeMesh(e) {
    const t = this.json, s = this, n = t.nodes[e];
    return n.mesh === void 0 ? null : s.getDependency("mesh", n.mesh).then(function(r) {
      const i = s._getNodeRef(s.meshCache, n.mesh, r);
      return n.weights !== void 0 && i.traverse(function(o) {
        if (o.isMesh)
          for (let a = 0, u = n.weights.length; a < u; a++)
            o.morphTargetInfluences[a] = n.weights[a];
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
  loadNode(e) {
    const t = this.json, s = this, n = t.nodes[e], r = s._loadNodeShallow(e), i = [], o = n.children || [];
    for (let u = 0, f = o.length; u < f; u++)
      i.push(s.getDependency("node", o[u]));
    const a = n.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", n.skin);
    return Promise.all([
      r,
      Promise.all(i),
      a
    ]).then(function(u) {
      const f = u[0], l = u[1], d = u[2];
      d !== null && f.traverse(function(h) {
        h.isSkinnedMesh && h.bind(d, Ba);
      });
      for (let h = 0, y = l.length; h < y; h++)
        f.add(l[h]);
      return f;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, s = this.extensions, n = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const r = t.nodes[e], i = r.name ? n.createUniqueName(r.name) : "", o = [], a = n._invokeOne(function(u) {
      return u.createNodeMesh && u.createNodeMesh(e);
    });
    return a && o.push(a), r.camera !== void 0 && o.push(n.getDependency("camera", r.camera).then(function(u) {
      return n._getNodeRef(n.cameraCache, r.camera, u);
    })), n._invokeAll(function(u) {
      return u.createNodeAttachment && u.createNodeAttachment(e);
    }).forEach(function(u) {
      o.push(u);
    }), this.nodeCache[e] = Promise.all(o).then(function(u) {
      let f;
      if (r.isBone === !0 ? f = new _r() : u.length > 1 ? f = new In() : u.length === 1 ? f = u[0] : f = new xi(), f !== u[0])
        for (let l = 0, d = u.length; l < d; l++)
          f.add(u[l]);
      if (r.name && (f.userData.name = r.name, f.name = i), Ne(f, r), r.extensions && dt(s, f, r), r.matrix !== void 0) {
        const l = new be();
        l.fromArray(r.matrix), f.applyMatrix4(l);
      } else
        r.translation !== void 0 && f.position.fromArray(r.translation), r.rotation !== void 0 && f.quaternion.fromArray(r.rotation), r.scale !== void 0 && f.scale.fromArray(r.scale);
      if (!n.associations.has(f))
        n.associations.set(f, {});
      else if (r.mesh !== void 0 && n.meshCache.refs[r.mesh] > 1) {
        const l = n.associations.get(f);
        n.associations.set(f, { ...l });
      }
      return n.associations.get(f).nodes = e, f;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   *
   * @private
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, s = this.json.scenes[e], n = this, r = new In();
    s.name && (r.name = n.createUniqueName(s.name)), Ne(r, s), s.extensions && dt(t, r, s);
    const i = s.nodes || [], o = [];
    for (let a = 0, u = i.length; a < u; a++)
      o.push(n.getDependency("node", i[a]));
    return Promise.all(o).then(function(a) {
      for (let f = 0, l = a.length; f < l; f++)
        r.add(a[f]);
      const u = (f) => {
        const l = /* @__PURE__ */ new Map();
        for (const [d, h] of n.associations)
          (d instanceof Dn || d instanceof Ts) && l.set(d, h);
        return f.traverse((d) => {
          const h = n.associations.get(d);
          h != null && l.set(d, h);
        }), l;
      };
      return n.associations = u(r), r;
    });
  }
  _createAnimationTracks(e, t, s, n, r) {
    const i = [], o = e.name ? e.name : e.uuid, a = [];
    qe[r.path] === qe.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && a.push(d.name ? d.name : d.uuid);
    }) : a.push(o);
    let u;
    switch (qe[r.path]) {
      case qe.weights:
        u = As;
        break;
      case qe.rotation:
        u = bs;
        break;
      case qe.translation:
      case qe.scale:
        u = Ms;
        break;
      default:
        s.itemSize === 1 ? u = As : u = Ms;
        break;
    }
    const f = n.interpolation !== void 0 ? Ra[n.interpolation] : _i, l = this._getArrayFromAccessor(s);
    for (let d = 0, h = a.length; d < h; d++) {
      const y = new u(
        a[d] + "." + qe[r.path],
        t.array,
        l,
        f
      );
      n.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(y), i.push(y);
    }
    return i;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const s = as(t.constructor), n = new Float32Array(t.length);
      for (let r = 0, i = t.length; r < i; r++)
        n[r] = t[r] * s;
      t = n;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(s) {
      const n = this instanceof bs ? ba : Di;
      return new n(this.times, this.values, this.getValueSize() / 3, s);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Na(c, e, t) {
  const s = e.attributes, n = new De();
  if (s.POSITION !== void 0) {
    const o = t.json.accessors[s.POSITION], a = o.min, u = o.max;
    if (a !== void 0 && u !== void 0) {
      if (n.set(
        new U(a[0], a[1], a[2]),
        new U(u[0], u[1], u[2])
      ), o.normalized) {
        const f = as(St[o.componentType]);
        n.min.multiplyScalar(f), n.max.multiplyScalar(f);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const r = e.targets;
  if (r !== void 0) {
    const o = new U(), a = new U();
    for (let u = 0, f = r.length; u < f; u++) {
      const l = r[u];
      if (l.POSITION !== void 0) {
        const d = t.json.accessors[l.POSITION], h = d.min, y = d.max;
        if (h !== void 0 && y !== void 0) {
          if (a.setX(Math.max(Math.abs(h[0]), Math.abs(y[0]))), a.setY(Math.max(Math.abs(h[1]), Math.abs(y[1]))), a.setZ(Math.max(Math.abs(h[2]), Math.abs(y[2]))), d.normalized) {
            const x = as(St[d.componentType]);
            a.multiplyScalar(x);
          }
          o.max(a);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    n.expandByVector(o);
  }
  c.boundingBox = n;
  const i = new Mr();
  n.getCenter(i.center), i.radius = n.min.distanceTo(n.max) / 2, c.boundingSphere = i;
}
function si(c, e, t) {
  const s = e.attributes, n = [];
  function r(i, o) {
    return t.getDependency("accessor", i).then(function(a) {
      c.setAttribute(o, a);
    });
  }
  for (const i in s) {
    const o = os[i] || i.toLowerCase();
    o in c.attributes || n.push(r(s[i], o));
  }
  if (e.indices !== void 0 && !c.index) {
    const i = t.getDependency("accessor", e.indices).then(function(o) {
      c.setIndex(o);
    });
    n.push(i);
  }
  return Rs.workingColorSpace !== Fe && "COLOR_0" in s && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Rs.workingColorSpace}" not supported.`), Ne(c, e), Na(c, e, t), Promise.all(n).then(function() {
    return e.targets !== void 0 ? Ea(c, e.targets, t) : c;
  });
}
class La extends pi {
  /**
   * Constructs a new Cube LUT loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.type = Vt;
  }
  /**
   * Sets the texture type.
   *
   * @param {(UnsignedByteType|FloatType)} type - The texture type to set.
   * @return {LUTCubeLoader} A reference to this loader.
   */
  setType(e) {
    return this.type = e, this;
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
  load(e, t, s, n) {
    const r = new ls(this.manager);
    r.setPath(this.path), r.setResponseType("text"), r.load(e, (i) => {
      try {
        t(this.parse(i));
      } catch (o) {
        n ? n(o) : console.error(o), this.manager.itemError(e);
      }
    }, s, n);
  }
  /**
   * Parses the given Cube LUT data and returns the resulting 3D data texture.
   *
   * @param {string} input - The raw Cube LUT data as a string.
   * @return {{title:string,size:number,domainMin:Vector3,domainMax:Vector3,texture3D:Data3DTexture}} The parsed Cube LUT.
   */
  parse(e) {
    const t = /TITLE +"([^"]*)"/, s = /LUT_3D_SIZE +(\d+)/, n = /DOMAIN_MIN +([\d.]+) +([\d.]+) +([\d.]+)/, r = /DOMAIN_MAX +([\d.]+) +([\d.]+) +([\d.]+)/, i = /^([\d.e+-]+) +([\d.e+-]+) +([\d.e+-]+) *$/gm;
    let o = t.exec(e);
    const a = o !== null ? o[1] : null;
    if (o = s.exec(e), o === null)
      throw new Error("LUTCubeLoader: Missing LUT_3D_SIZE information");
    const u = Number(o[1]), f = u ** 3 * 4, l = this.type === Vt ? new Uint8Array(f) : new Float32Array(f), d = new U(0, 0, 0), h = new U(1, 1, 1);
    if (o = n.exec(e), o !== null && d.set(Number(o[1]), Number(o[2]), Number(o[3])), o = r.exec(e), o !== null && h.set(Number(o[1]), Number(o[2]), Number(o[3])), d.x > h.x || d.y > h.y || d.z > h.z)
      throw new Error("LUTCubeLoader: Invalid input domain");
    const y = this.type === Vt ? 255 : 1;
    let x = 0;
    for (; (o = i.exec(e)) !== null; )
      l[x++] = Number(o[1]) * y, l[x++] = Number(o[2]) * y, l[x++] = Number(o[3]) * y, l[x++] = y;
    const p = new Ar();
    return p.image.data = l, p.image.width = u, p.image.height = u, p.image.depth = u, p.type = this.type, p.magFilter = mt, p.minFilter = mt, p.wrapS = mn, p.wrapT = mn, p.wrapR = mn, p.generateMipmaps = !1, p.needsUpdate = !0, {
      title: a,
      size: u,
      domainMin: d,
      domainMax: h,
      texture3D: p
    };
  }
}
class Fa extends br {
  /**
      * Constructs a new RGBE/HDR loader.
      *
      * @param {LoadingManager} [manager] - The loading manager.
      */
  constructor(e) {
    super(e), this.type = Xt;
  }
  /**
      * Parses the given RGBE texture data.
      *
      * @param {ArrayBuffer} buffer - The raw texture data.
      * @return {DataTextureLoader~TexData} An object representing the parsed texture data.
      */
  parse(e) {
    const i = function(T, S) {
      switch (T) {
        case 1:
          throw new Error("THREE.HDRLoader: Read Error: " + (S || ""));
        case 2:
          throw new Error("THREE.HDRLoader: Write Error: " + (S || ""));
        case 3:
          throw new Error("THREE.HDRLoader: Bad File Format: " + (S || ""));
        default:
        case 4:
          throw new Error("THREE.HDRLoader: Memory Error: " + (S || ""));
      }
    }, l = function(T, S, A) {
      S = S || 1024;
      let b = T.pos, I = -1, P = 0, C = "", L = String.fromCharCode.apply(null, new Uint16Array(T.subarray(b, b + 128)));
      for (; 0 > (I = L.indexOf(`
`)) && P < S && b < T.byteLength; )
        C += L, P += L.length, b += 128, L += String.fromCharCode.apply(null, new Uint16Array(T.subarray(b, b + 128)));
      return -1 < I ? (T.pos += P + I + 1, C + L.slice(0, I)) : !1;
    }, d = function(T) {
      const S = /^#\?(\S+)/, A = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, E = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, b = /^\s*FORMAT=(\S+)\s*$/, I = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, P = {
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
      let C, L;
      for ((T.pos >= T.byteLength || !(C = l(T))) && i(1, "no header found"), (L = C.match(S)) || i(3, "bad initial token"), P.valid |= 1, P.programtype = L[1], P.string += C + `
`; C = l(T), C !== !1; ) {
        if (P.string += C + `
`, C.charAt(0) === "#") {
          P.comments += C + `
`;
          continue;
        }
        if ((L = C.match(A)) && (P.gamma = parseFloat(L[1])), (L = C.match(E)) && (P.exposure = parseFloat(L[1])), (L = C.match(b)) && (P.valid |= 2, P.format = L[1]), (L = C.match(I)) && (P.valid |= 4, P.height = parseInt(L[1], 10), P.width = parseInt(L[2], 10)), P.valid & 2 && P.valid & 4) break;
      }
      return P.valid & 2 || i(3, "missing format specifier"), P.valid & 4 || i(3, "missing image size specifier"), P;
    }, h = function(T, S, A) {
      const E = S;
      if (
        // run length encoding is not allowed so read flat
        E < 8 || E > 32767 || // this file is not run length encoded
        T[0] !== 2 || T[1] !== 2 || T[2] & 128
      )
        return new Uint8Array(T);
      E !== (T[2] << 8 | T[3]) && i(3, "wrong scanline width");
      const b = new Uint8Array(4 * S * A);
      b.length || i(4, "unable to allocate buffer space");
      let I = 0, P = 0;
      const C = 4 * E, L = new Uint8Array(4), V = new Uint8Array(C);
      let j = A;
      for (; j > 0 && P < T.byteLength; ) {
        P + 4 > T.byteLength && i(1), L[0] = T[P++], L[1] = T[P++], L[2] = T[P++], L[3] = T[P++], (L[0] != 2 || L[1] != 2 || (L[2] << 8 | L[3]) != E) && i(3, "bad rgbe scanline format");
        let q = 0, K;
        for (; q < C && P < T.byteLength; ) {
          K = T[P++];
          const F = K > 128;
          if (F && (K -= 128), (K === 0 || q + K > C) && i(3, "bad scanline data"), F) {
            const O = T[P++];
            for (let G = 0; G < K; G++)
              V[q++] = O;
          } else
            V.set(T.subarray(P, P + K), q), q += K, P += K;
        }
        const D = E;
        for (let F = 0; F < D; F++) {
          let O = 0;
          b[I] = V[F + O], O += E, b[I + 1] = V[F + O], O += E, b[I + 2] = V[F + O], O += E, b[I + 3] = V[F + O], I += 4;
        }
        j--;
      }
      return b;
    }, y = function(T, S, A, E) {
      const b = T[S + 3], I = Math.pow(2, b - 128) / 255;
      A[E + 0] = T[S + 0] * I, A[E + 1] = T[S + 1] * I, A[E + 2] = T[S + 2] * I, A[E + 3] = 1;
    }, x = function(T, S, A, E) {
      const b = T[S + 3], I = Math.pow(2, b - 128) / 255;
      A[E + 0] = $t.toHalfFloat(Math.min(T[S + 0] * I, 65504)), A[E + 1] = $t.toHalfFloat(Math.min(T[S + 1] * I, 65504)), A[E + 2] = $t.toHalfFloat(Math.min(T[S + 2] * I, 65504)), A[E + 3] = $t.toHalfFloat(1);
    }, p = new Uint8Array(e);
    p.pos = 0;
    const v = d(p), g = v.width, _ = v.height, m = h(p.subarray(p.pos), g, _);
    let w, R, M;
    switch (this.type) {
      case et:
        M = m.length / 4;
        const T = new Float32Array(M * 4);
        for (let A = 0; A < M; A++)
          y(m, A * 4, T, A * 4);
        w = T, R = et;
        break;
      case Xt:
        M = m.length / 4;
        const S = new Uint16Array(M * 4);
        for (let A = 0; A < M; A++)
          x(m, A * 4, S, A * 4);
        w = S, R = Xt;
        break;
      default:
        throw new Error("THREE.HDRLoader: Unsupported type: " + this.type);
    }
    return {
      width: g,
      height: _,
      data: w,
      header: v.string,
      gamma: v.gamma,
      exposure: v.exposure,
      type: R
    };
  }
  /**
      * Sets the texture type.
      *
      * @param {(HalfFloatType|FloatType)} value - The texture type to set.
      * @return {HDRLoader} A reference to this loader.
      */
  setDataType(e) {
    return this.type = e, this;
  }
  load(e, t, s, n) {
    function r(i, o) {
      switch (i.type) {
        case et:
        case Xt:
          i.colorSpace = Fe, i.minFilter = mt, i.magFilter = mt, i.generateMipmaps = !1, i.flipY = !0;
          break;
      }
      t && t(i, o);
    }
    return super.load(e, r, s, n);
  }
}
class Ua extends Fa {
  constructor(e) {
    console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."), super(e);
  }
}
class jt {
  static enabled = !1;
  static log(e) {
  }
  static error(e) {
    console.error(e);
  }
  static warn(e) {
    console.warn(e);
  }
}
class Ge {
  static gltfLoader = new ea();
  static loadGLTF = (e) => new Promise((t, s) => {
    if (!e)
      return t(new N.Group());
    Ge.gltfLoader.load(
      e,
      (n) => {
        t(n.scene);
      },
      () => {
      },
      (n) => {
        s(n);
      }
    );
  });
  static async loadEnvironmentTexture(e) {
    const t = URL.createObjectURL(e), s = new Ua();
    try {
      const n = await s.loadAsync(t);
      return n.mapping = N.EquirectangularReflectionMapping, URL.revokeObjectURL(t), n;
    } catch (n) {
      throw URL.revokeObjectURL(t), jt.error(`Error loading environment map: ${n}`), n;
    }
  }
  static loadNodeMapForGLTF = async (e) => {
    const t = await Ge.loadGLTF(e), s = {};
    return t.traverse((n) => {
      n instanceof N.Mesh && (s[n.name] = n);
    }), s;
  };
  static loadTexture = async (e) => await new N.TextureLoader().loadAsync(e);
  /**
   * Draws a solid color on an offscreen canvas and returns a data URL image.
   * Use with TextureLoader to assign scene.background or other materials.
   */
  static getImageByColor(e, t = 4, s = 4) {
    const n = document.createElement("canvas");
    n.width = t, n.height = s;
    const r = n.getContext("2d");
    if (!r)
      throw new Error("Canvas 2D context not available");
    return r.fillStyle = e, r.fillRect(0, 0, t, s), n.toDataURL();
  }
  static loadLut = async (e) => await new La().loadAsync(e);
  static getImageUrlFromTexture(e) {
    const t = document.createElement("canvas");
    t.width = 2e3, t.height = 2e3;
    const s = e.repeat ?? new N.Vector2(1, 1), n = t.getContext("2d", { willReadFrequently: !0 });
    if (!n)
      return jt.error("Failed to get 2D context"), null;
    const r = n.createPattern(
      e.image,
      "repeat"
    );
    if (r)
      n.fillStyle = r, n.save(), n.scale(1 / s.x, 1 / s.y), n.fillRect(0, 0, t.width * s.x, t.height * s.y), n.restore();
    else
      return jt.error("Failed to create pattern"), null;
    return t.toDataURL();
  }
  static getBoundingBox = (e) => {
    const t = new N.Box3();
    return e.forEach((s) => {
      t.expandByObject(s);
    }), t;
  };
  static getCenterPointAndNormal = (e) => {
    const t = e.geometry, s = t.attributes.position, n = t.attributes.normal, r = t.attributes.uv, i = e.matrixWorld;
    if (!s || !n || !r)
      return {
        center: Ge.getBoundingBox([e]).getCenter(new N.Vector3()),
        normal: new N.Vector3(0, 0, 1),
        uv: new N.Vector2(0.5, 0.5)
      };
    const o = new N.Vector3(0, 0, 0), a = s.count;
    for (let y = 0; y < a; y++) {
      const x = new N.Vector3().fromBufferAttribute(s, y).applyMatrix4(i);
      o.add(x);
    }
    o.divideScalar(a);
    let u = 1 / 0, f = 0;
    for (let y = 0; y < a; y++) {
      const p = new N.Vector3().fromBufferAttribute(s, y).applyMatrix4(i).distanceTo(o);
      p < u && (u = p, f = y);
    }
    const l = new N.Vector3().fromBufferAttribute(n, f).applyMatrix4(i), d = new N.Vector3().fromBufferAttribute(s, f).applyMatrix4(i), h = new N.Vector2().fromBufferAttribute(r, f);
    return {
      center: d,
      normal: l,
      uv: h
    };
  };
  static getSizeAndCenter = (e) => {
    const t = Ge.getBoundingBox([e]), s = t.getSize(new N.Vector3()), n = t.getCenter(new N.Vector3());
    return {
      boundingBox: t,
      center: n,
      size: s
    };
  };
}
class Oa {
  _libState;
  _cameraRef = null;
  constructor(e) {
    this._libState = e, nt(this);
  }
  setCameraRef(e) {
    this._cameraRef = e;
  }
  get cameraRef() {
    return this._cameraRef;
  }
  resetCameraToRef = () => {
    const e = this._libState.design3DManager.meshManager.groupRef;
    e && this.focusCameraTo([e]);
  };
  zoomIn = () => {
    this._cameraRef?.dolly(0.5, !0);
  };
  zoomOut = () => {
    this._cameraRef?.dolly(-0.5, !0);
  };
  reset = () => {
    this._cameraRef?.reset(!0);
  };
  focusCameraTo = (e, t = !1) => {
    const s = Array.isArray(e) ? e[e.length - 1] : e, n = this._libState.designManager.viewManager.settings, r = n.homeDistance;
    this._cameraRef?.setLookAt(0, 0, r, 0, 0, 0, !1);
    const i = -1, { boundingBox: o, center: a } = Ge.getSizeAndCenter(s);
    if (s instanceof N.Mesh) {
      const { center: u } = Ge.getCenterPointAndNormal(
        s
      ), f = Math.abs(u.x);
      this._cameraRef?.setLookAt(
        a.x,
        a.y,
        a.z,
        f,
        u.y,
        i,
        t
      );
    } else
      this._cameraRef?.setLookAt(
        a.x,
        a.y,
        a.z,
        0,
        a.y,
        i,
        t
      );
    if (n.fitBoxScale !== 1) {
      const u = o.clone(), f = new N.Vector3(), l = new N.Vector3();
      u.getCenter(f), u.getSize(l), l.multiplyScalar(n.fitBoxScale), u.setFromCenterAndSize(f, l), this._cameraRef?.fitToBox(u, t);
    } else
      this._cameraRef?.fitToBox(o, t);
  };
  dispose() {
    this._cameraRef = null;
  }
}
class ka {
  _envVisibility = !1;
  _envIntensity = 1.6;
  _envRotation = {
    x: 0,
    y: 0,
    z: 1.5
  };
  _environmentTexture = null;
  constructor() {
    nt(this);
  }
  get envVisibility() {
    return this._envVisibility;
  }
  setEnvVisibility(e) {
    this._envVisibility = e;
  }
  get envIntensity() {
    return this._envIntensity;
  }
  setEnvIntensity(e) {
    this._envIntensity = e;
  }
  get envRotation() {
    return this._envRotation;
  }
  setEnvRotation(e) {
    this._envRotation = e;
  }
  get environmentTexture() {
    return this._environmentTexture;
  }
  setEnvironmentTexture(e) {
    this._environmentTexture = e;
  }
  async handleEnvUpload(e) {
    try {
      const t = await Ge.loadEnvironmentTexture(e);
      this.setEnvironmentTexture(t);
    } catch (t) {
      jt.error(`Failed to load environment: ${t}`);
    }
  }
  clearMap = (e) => {
    e === "envMap" && (this._envVisibility = !1, this._envIntensity = 1.6, this._envRotation = { x: 0, y: 0, z: 1.5 }, this._environmentTexture = null);
  };
  dispose() {
    this.clearMap("envMap");
  }
}
class Ha {
  _libState;
  _meshInfos = [];
  _groupRef = null;
  constructor(e) {
    this._libState = e, nt(this);
  }
  get meshInfos() {
    return this._meshInfos;
  }
  setMeshInfos(e) {
    this._meshInfos = e;
  }
  setGroupRef(e) {
    this._groupRef = e;
  }
  get groupRef() {
    return this._groupRef;
  }
  dispose() {
    this._meshInfos = [], this._groupRef = null;
  }
}
class Va {
  _modelUrl = "";
  _colorHex = "";
  _baseColorHex = "";
  _finishingColorHex = "";
  _engravingColorHex = "";
  _finish = "Polished";
  _showDiamond = !0;
  _textures = null;
  _currentView = 1;
  _engravingText = "";
  _engravingSymbol = null;
  _engravingFont = "Arial, sans-serif";
  _engravingCanvas = null;
  _normalMapCanvas = null;
  _bevelWidth = 3;
  _engravingDepth = 0.2;
  _edgeSoftness = 0.3;
  _normalStrength = 38;
  _aoStrength = 0.85;
  _strokeWidth = 0;
  _isTransitioning = !1;
  _animationDuration = 0.6;
  _collectionModels = [];
  /** True once the active variation's GLB has rendered for the first time. */
  isLoaded = !1;
  constructor() {
    nt(this, {
      _engravingCanvas: Ss.ref,
      _normalMapCanvas: Ss.ref
    });
  }
  get isTransitioning() {
    return this._isTransitioning;
  }
  setTransitioning(e) {
    this._isTransitioning = e;
  }
  get animationDuration() {
    return this._animationDuration;
  }
  setAnimationDuration(e) {
    this._animationDuration = e;
  }
  get collectionModels() {
    return this._collectionModels;
  }
  setCollectionModels(e) {
    this._collectionModels = e;
  }
  get modelUrl() {
    return this._modelUrl;
  }
  get textures() {
    return this._textures;
  }
  get colorHex() {
    return this._colorHex;
  }
  get baseColorHex() {
    return this._baseColorHex || this._colorHex;
  }
  get finishingColorHex() {
    return this._finishingColorHex || "#f6f5f5";
  }
  get engravingColorHex() {
    return this._engravingColorHex || this._colorHex;
  }
  get finish() {
    return this._finish;
  }
  get showDiamond() {
    return this._showDiamond;
  }
  get currentView() {
    return this._currentView;
  }
  get engravingText() {
    return this._engravingText;
  }
  get engravingSymbol() {
    return this._engravingSymbol;
  }
  get engravingFont() {
    return this._engravingFont;
  }
  get bevelWidth() {
    return this._bevelWidth;
  }
  get engravingDepth() {
    return this._engravingDepth;
  }
  get edgeSoftness() {
    return this._edgeSoftness;
  }
  get normalStrength() {
    return this._normalStrength;
  }
  get aoStrength() {
    return this._aoStrength;
  }
  get strokeWidth() {
    return this._strokeWidth;
  }
  get engravingCanvas() {
    return this._engravingCanvas;
  }
  get normalMapCanvas() {
    return this._normalMapCanvas;
  }
  // this is for the finishing
  get roughness() {
    return this._finish === "Polished" ? 0 : 0.2;
  }
  initModel(e) {
    this._isTransitioning || this._modelUrl !== e && (this._modelUrl = e, this.isLoaded = !1);
  }
  /** Called by RingModelContent once the active variation has rendered. */
  _markLoaded() {
    this.isLoaded = !0;
  }
  setMetalColor(e) {
    this._colorHex = e;
  }
  setMeshColors(e) {
    this._baseColorHex = e.base, this._finishingColorHex = e.finishing, this._engravingColorHex = e.engraving;
  }
  setFinish(e) {
    this._finish = e;
  }
  setDiamondsVisible(e) {
    this._showDiamond = e;
  }
  setTextures(e) {
    this._textures = e;
  }
  setCurrentView(e) {
    this._currentView = e;
  }
  setEngravingText(e) {
    this._engravingText = e;
  }
  setEngravingSymbol(e) {
    this._engravingSymbol = e;
  }
  setEngravingFont(e) {
    this._engravingFont = e;
  }
  setBevelWidth(e) {
    this._bevelWidth = e;
  }
  setEngravingDepth(e) {
    this._engravingDepth = e;
  }
  setEdgeSoftness(e) {
    this._edgeSoftness = e;
  }
  setNormalStrength(e) {
    this._normalStrength = e;
  }
  setAoStrength(e) {
    this._aoStrength = e;
  }
  setStrokeWidth(e) {
    this._strokeWidth = e;
  }
  setEngravingCanvas(e) {
    this._engravingCanvas = e;
  }
  setNormalMapCanvas(e) {
    this._normalMapCanvas = e;
  }
}
class za {
  _libState;
  _meshManager;
  _cameraManager;
  _envManager;
  _ringManager;
  constructor(e) {
    this._libState = e, this._meshManager = new Ha(e), this._cameraManager = new Oa(e), this._envManager = new ka(), this._ringManager = new Va(), nt(this);
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
  get ringManager() {
    return this._ringManager;
  }
}
var Ii = /* @__PURE__ */ ((c) => (c.WEBSITE = "website", c.CONFIG = "config", c))(Ii || {});
const Ga = {
  website: {
    canvasColor: "#f7f4eb",
    //f7f4eb
    minDistance: 6.2,
    maxDistance: 7.5,
    homeDistance: 6.5,
    minPolarAngle: 0,
    maxPolarAngle: Math.PI / 2,
    fitBoxScale: 1.35
  },
  config: {
    canvasColor: "#f2efe8",
    minDistance: 5,
    maxDistance: 10,
    homeDistance: 8,
    minPolarAngle: 0,
    maxPolarAngle: Math.PI / 1.75,
    fitBoxScale: 1
  }
};
class ja {
  _libState;
  _meshInfoJson = null;
  _jsonUrl = "./init.json";
  _source;
  constructor(e, t = Ii.WEBSITE) {
    this._libState = e, this._source = t, nt(this);
  }
  get source() {
    return this._source;
  }
  setSource(e) {
    this._source = e;
  }
  get settings() {
    return Ga[this._source];
  }
  get meshInfoJson() {
    return this._meshInfoJson;
  }
  setMeshInfoJson(e) {
    this._meshInfoJson = e;
  }
  setGlbUrl(e) {
    const t = {
      ...this._meshInfoJson || { availableColors: [] },
      glbUrl: e
    };
    this.setMeshInfoJson(t);
  }
  get glbUrl() {
    return this._meshInfoJson?.glbUrl;
  }
  get jsonUrl() {
    return this._jsonUrl;
  }
  setJsonUrl(e) {
    this._jsonUrl = e;
  }
  dispose() {
    this._meshInfoJson = null, this._jsonUrl = "./init.json";
  }
}
class Ka {
  _libState;
  _viewManager;
  modelMinY = 0;
  constructor(e, t) {
    this._libState = e, this._viewManager = new ja(e, t), nt(this);
  }
  get viewManager() {
    return this._viewManager;
  }
  setModelMinY(e) {
    this.modelMinY = e;
  }
  dispose() {
    this._viewManager.dispose();
  }
}
class Pi {
  _designManager;
  _design3DManager;
  constructor(e) {
    this._designManager = new Ka(this, e), this._design3DManager = new za(this), nt(this);
  }
  get designManager() {
    return this._designManager;
  }
  get design3DManager() {
    return this._design3DManager;
  }
  dispose() {
    this._designManager.dispose(), this._design3DManager.dispose();
  }
}
const Ya = "#f2efe8";
function Wa({
  color: c = Ya
}) {
  const { scene: e } = ci();
  return se(() => {
    let t = !1, s = null;
    const n = Ge.getImageByColor(c);
    return new N.TextureLoader().loadAsync(n).then((i) => {
      if (t) {
        i.dispose();
        return;
      }
      s = i, s.colorSpace = N.SRGBColorSpace, e.background = s;
    }).catch((i) => {
      jt.error(`Failed to load scene background texture: ${i}`);
    }), () => {
      t = !0, s && e.background === s && (e.background = null, s.dispose());
    };
  }, [c, e]), null;
}
const Bi = Ye(({ children: c }) => {
  const e = Ce(null), { designManager: t, design3DManager: s } = pt(), n = t.modelMinY, { currentView: r } = s.ringManager;
  return /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
    c && /* @__PURE__ */ W.jsx("group", { ref: e, children: c }),
    r !== 2 && /* @__PURE__ */ W.jsx(
      Fi,
      {
        position: [0, n - 0.02, 0],
        opacity: 0.45,
        scale: 4,
        blur: 2.5,
        far: 3
      }
    )
  ] });
}), Xa = Ye(() => {
  const { design3DManager: c, designManager: e } = pt(), { cameraManager: t, ringManager: s } = c, n = t.cameraRef, r = s.currentView, i = e.viewManager.settings;
  return se(() => {
    if (n)
      if (r === 2)
        n.minDistance = 1, n.maxDistance = 10, n.minAzimuthAngle = -1 / 0, n.maxAzimuthAngle = 1 / 0, n.minPolarAngle = 0, n.maxPolarAngle = Math.PI, n.smoothTime = 0.8, n.setLookAt(0, 2, -4.4, 0, 0, 0, !0).then(() => {
          if (n.smoothTime = 0.25, s.currentView === 2) {
            n.minDistance = 4.3, n.maxDistance = 5.5;
            const o = n.polarAngle;
            n.minAzimuthAngle = -1 / 0, n.maxAzimuthAngle = 1 / 0, n.minPolarAngle = o - 0.2, n.maxPolarAngle = o + 0.2;
          }
        });
      else {
        n.minDistance = i.minDistance, n.maxDistance = i.maxDistance, n.minAzimuthAngle = -1 / 0, n.maxAzimuthAngle = 1 / 0, n.minPolarAngle = i.minPolarAngle, n.maxPolarAngle = i.maxPolarAngle, n.smoothTime = 0.8;
        const o = i.homeDistance;
        n.setLookAt(0, 0, o, 0, 0, 0, !0).then(() => {
          n.smoothTime = 0.25;
        });
      }
  }, [r, n, s, i]), null;
}), tc = Ye(
  Ci(
    ({
      backgroundColor: c = "#f2efe8",
      className: e,
      diamondEnvPath: t = "/08.hdr",
      envPath: s = "/env/08.exr",
      style: n,
      source: r
    }, i) => {
      const [o] = ii(() => new Pi(r));
      Ni(
        i,
        () => ({
          stateManager: {
            cameraManager: o.design3DManager.cameraManager,
            envManager: o.design3DManager.envManager,
            meshManager: o.design3DManager.meshManager,
            ringManager: o.design3DManager.ringManager,
            viewManager: o.designManager.viewManager
          }
        }),
        [o]
      ), se(() => {
        r && o.designManager.viewManager.setSource(r);
      }, [r, o]), se(() => () => {
        o.dispose();
      }, [o]);
      const a = o.design3DManager.ringManager.isLoaded, u = r ? o.designManager.viewManager.settings.canvasColor : c;
      return /* @__PURE__ */ W.jsx(us.Provider, { value: o, children: /* @__PURE__ */ W.jsx(
        "div",
        {
          className: e,
          style: {
            height: "100%",
            width: "100%",
            backgroundColor: a ? void 0 : u,
            ...n
          },
          children: /* @__PURE__ */ W.jsxs(
            li,
            {
              frameloop: "always",
              shadows: !0,
              camera: { fov: 35, position: [0, 0, o.designManager.viewManager.settings.homeDistance] },
              children: [
                /* @__PURE__ */ W.jsx(
                  Wa,
                  {
                    color: r ? o.designManager.viewManager.settings.canvasColor : c
                  }
                ),
                /* @__PURE__ */ W.jsxs(cs, { fallback: null, children: [
                  /* @__PURE__ */ W.jsx(
                    oi,
                    {
                      files: s,
                      environmentIntensity: 0.7,
                      environmentRotation: [0, 3.63, 0]
                    }
                  ),
                  /* @__PURE__ */ W.jsx(Si, { diamondEnvPath: t }),
                  /* @__PURE__ */ W.jsx(Bi, {}),
                  /* @__PURE__ */ W.jsx(Xa, {}),
                  /* @__PURE__ */ W.jsx(
                    ai,
                    {
                      makeDefault: !0,
                      minDistance: o.designManager.viewManager.settings.minDistance,
                      maxDistance: o.designManager.viewManager.settings.maxDistance,
                      minPolarAngle: o.designManager.viewManager.settings.minPolarAngle,
                      maxPolarAngle: o.designManager.viewManager.settings.maxPolarAngle,
                      smoothTime: 0.25,
                      draggingSmoothTime: 0.1,
                      dollySpeed: 0.5,
                      truckSpeed: 0,
                      ref: (f) => {
                        f && o.design3DManager.cameraManager.setCameraRef(f);
                      }
                    }
                  )
                ] })
              ]
            }
          )
        }
      ) });
    }
  )
), nc = Ye(
  ({
    collection: c,
    modelId: e,
    variations: t,
    activeVariation: s,
    colorHex: n = "#e8c070",
    finish: r = "Polished",
    showDiamond: i = !0,
    envPath: o = "/env/08.exr",
    diamondEnvPath: a = "/08.hdr",
    backgroundColor: u = "#f2efe8"
  }) => {
    const l = Ce(new Pi()).current, { ringManager: d } = l.design3DManager, h = (p, v, g) => {
      const _ = p.charAt(0).toUpperCase() + p.slice(1);
      let m = g.replace(/\s+/g, "");
      return m.endsWith("mm") || (m = `${m}mm`), `/BehytRings/${_}/${v}/${m}/${v}_${m}.glb`;
    }, y = s || t[0] || "", x = y ? h(c, e, y) : "";
    return se(() => {
      x && d.initModel(x);
    }, [x, d]), se(() => {
      d.setMetalColor(n);
    }, [n, d]), se(() => {
      d.setFinish(r);
    }, [r, d]), se(() => {
      d.setDiamondsVisible(i);
    }, [i, d]), /* @__PURE__ */ W.jsx(us.Provider, { value: l, children: /* @__PURE__ */ W.jsxs(
      li,
      {
        frameloop: "always",
        shadows: !0,
        camera: { fov: 35, position: [0, 0, 8] },
        children: [
          /* @__PURE__ */ W.jsx("color", { attach: "background", args: [u] }),
          /* @__PURE__ */ W.jsxs(cs, { fallback: null, children: [
            /* @__PURE__ */ W.jsx(
              oi,
              {
                files: o,
                environmentIntensity: 0.7,
                environmentRotation: [0, 3.63, 0]
              }
            ),
            /* @__PURE__ */ W.jsx(Si, { diamondEnvPath: a }),
            /* @__PURE__ */ W.jsx(Bi, {}),
            /* @__PURE__ */ W.jsx(
              ai,
              {
                makeDefault: !0,
                minDistance: 5,
                maxDistance: 10,
                minPolarAngle: 0,
                maxPolarAngle: Math.PI / 1.75,
                smoothTime: 0.25,
                draggingSmoothTime: 0.1,
                dollySpeed: 0.5,
                truckSpeed: 0
              }
            )
          ] })
        ]
      }
    ) });
  }
);
export {
  nc as RingScene,
  tc as SDKViewer,
  tc as Viewer3D,
  Ii as ViewerSource
};
