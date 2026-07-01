import _n, { useEffect as ae, useMemo as hn, useState as si, useRef as De, Suspense as os, forwardRef as Bi, useImperativeHandle as Ci } from "react";
import { useGLTF as ii, useEnvironment as Ni, ContactShadows as Li, Environment as ri, CameraControls as oi } from "@react-three/drei";
import { useThree as ai, useLoader as ot, useFrame as Fi, Canvas as ci } from "@react-three/fiber";
import { observer as Ye } from "mobx-react-lite";
import * as B from "three";
import { Box3 as Pe, Matrix4 as Re, BufferAttribute as Rt, Vector3 as O, Line3 as je, Plane as li, Vector2 as Le, Triangle as At, BackSide as Ui, DoubleSide as ui, REVISION as fi, Ray as Oi, FrontSide as zn, UnsignedIntType as Ht, FloatType as tt, DataTexture as Gn, NearestFilter as Qe, IntType as Rn, UnsignedByteType as Vt, UnsignedShortType as ki, ByteType as _s, ShortType as Hi, RGBAFormat as xn, RGBAIntegerFormat as jn, RGIntegerFormat as di, RedIntegerFormat as Vi, RGFormat as zi, RedFormat as Gi, TrianglesDrawMode as ji, TriangleFanDrawMode as Kn, TriangleStripDrawMode as hi, Loader as mi, LoaderUtils as zt, FileLoader as as, MeshPhysicalMaterial as Ue, Color as ht, LinearSRGBColorSpace as Fe, SRGBColorSpace as Kt, SpotLight as Ki, PointLight as Yi, DirectionalLight as Wi, Quaternion as pi, InstancedMesh as Xi, InstancedBufferAttribute as $i, Object3D as gi, TextureLoader as qi, ImageBitmapLoader as Ji, InterleavedBuffer as Zi, InterleavedBufferAttribute as Qi, LinearMipmapLinearFilter as xi, NearestMipmapLinearFilter as er, LinearMipmapNearestFilter as tr, NearestMipmapNearestFilter as nr, LinearFilter as mt, RepeatWrapping as Yn, MirroredRepeatWrapping as sr, ClampToEdgeWrapping as mn, PointsMaterial as ir, Material as Sn, LineBasicMaterial as rr, MeshStandardMaterial as yi, MeshBasicMaterial as kt, PropertyBinding as or, BufferGeometry as ar, SkinnedMesh as cr, Mesh as lr, LineSegments as ur, Line as fr, LineLoop as dr, Points as hr, Group as En, PerspectiveCamera as mr, MathUtils as pr, OrthographicCamera as gr, Skeleton as xr, AnimationClip as yr, Bone as vr, InterpolateDiscrete as _r, InterpolateLinear as vi, Texture as ws, VectorKeyframeTrack as Ts, NumberKeyframeTrack as Ms, QuaternionKeyframeTrack as As, ColorManagement as bs, Interpolant as wr, Sphere as Tr, Data3DTexture as Mr, DataTextureLoader as Ar, HalfFloatType as Xt, DataUtils as $t } from "three";
import { makeAutoObservable as st, observable as Rs } from "mobx";
var qt = { exports: {} }, Dt = {};
var Ss;
function br() {
  if (Ss) return Dt;
  Ss = 1;
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
var Es;
function Rr() {
  return Es || (Es = 1, process.env.NODE_ENV !== "production" && (function() {
    function c(D) {
      if (D == null) return null;
      if (typeof D == "function")
        return D.$$typeof === E ? null : D.displayName || D.name || null;
      if (typeof D == "string") return D;
      switch (D) {
        case m:
          return "Fragment";
        case p:
          return "Profiler";
        case v:
          return "StrictMode";
        case M:
          return "Suspense";
        case A:
          return "SuspenseList";
        case b:
          return "Activity";
      }
      if (typeof D == "object")
        switch (typeof D.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), D.$$typeof) {
          case y:
            return "Portal";
          case g:
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
        var U = F.error, G = typeof Symbol == "function" && Symbol.toStringTag && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return U.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          G
        ), e(D);
      }
    }
    function s(D) {
      if (D === m) return "<>";
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
      var D = R.A;
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
      function U() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          F
        ));
      }
      U.isReactWarning = !0, Object.defineProperty(D, "key", {
        get: U,
        configurable: !0
      });
    }
    function a() {
      var D = c(this.type);
      return k[D] || (k[D] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), D = this.props.ref, D !== void 0 ? D : null;
    }
    function u(D, F, U, G, le, _e) {
      var H = U.ref;
      return D = {
        $$typeof: x,
        type: D,
        key: F,
        props: U,
        _owner: G
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(D, "ref", {
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
        value: le
      }), Object.defineProperty(D, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _e
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    }
    function f(D, F, U, G, le, _e) {
      var H = F.children;
      if (H !== void 0)
        if (G)
          if (P(H)) {
            for (G = 0; G < H.length; G++)
              l(H[G]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else l(H);
      if (I.call(F, "key")) {
        H = c(D);
        var j = Object.keys(F).filter(function(me) {
          return me !== "key";
        });
        G = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", Y[H + G] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          G,
          H,
          j,
          H
        ), Y[H + G] = !0);
      }
      if (H = null, U !== void 0 && (t(U), H = "" + U), i(F) && (t(F.key), H = "" + F.key), "key" in F) {
        U = {};
        for (var re in F)
          re !== "key" && (U[re] = F[re]);
      } else U = F;
      return H && o(
        U,
        typeof D == "function" ? D.displayName || D.name || "Unknown" : D
      ), u(
        D,
        H,
        U,
        n(),
        le,
        _e
      );
    }
    function l(D) {
      d(D) ? D._store && (D._store.validated = 1) : typeof D == "object" && D !== null && D.$$typeof === S && (D._payload.status === "fulfilled" ? d(D._payload.value) && D._payload.value._store && (D._payload.value._store.validated = 1) : D._store && (D._store.validated = 1));
    }
    function d(D) {
      return typeof D == "object" && D !== null && D.$$typeof === x;
    }
    var h = _n, x = /* @__PURE__ */ Symbol.for("react.transitional.element"), y = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.fragment"), v = /* @__PURE__ */ Symbol.for("react.strict_mode"), p = /* @__PURE__ */ Symbol.for("react.profiler"), _ = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), M = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.suspense_list"), T = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), E = /* @__PURE__ */ Symbol.for("react.client.reference"), R = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, P = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(D) {
        return D();
      }
    };
    var L, k = {}, V = h.react_stack_bottom_frame.bind(
      h,
      r
    )(), J = C(s(r)), Y = {};
    It.Fragment = m, It.jsx = function(D, F, U) {
      var G = 1e4 > R.recentlyCreatedOwnerStacks++;
      return f(
        D,
        F,
        U,
        !1,
        G ? Error("react-stack-top-frame") : V,
        G ? C(s(D)) : J
      );
    }, It.jsxs = function(D, F, U) {
      var G = 1e4 > R.recentlyCreatedOwnerStacks++;
      return f(
        D,
        F,
        U,
        !0,
        G ? Error("react-stack-top-frame") : V,
        G ? C(s(D)) : J
      );
    };
  })()), It;
}
var Ds;
function Sr() {
  return Ds || (Ds = 1, process.env.NODE_ENV === "production" ? qt.exports = br() : qt.exports = Rr()), qt.exports;
}
var K = Sr();
const cs = _n.createContext(null), _i = 0, Er = 1, Dr = 2, Is = 2, Dn = 1.25, Ps = 1, fe = 32, ce = fe / 4, ls = 65535, Ir = ls << 16, pn = Math.pow(2, -24), us = /* @__PURE__ */ Symbol("SKIP_GENERATION"), wi = {
  strategy: _i,
  maxDepth: 40,
  maxLeafSize: 10,
  useSharedArrayBuffer: !1,
  setBoundingBox: !0,
  onProgress: null,
  indirect: !1,
  verbose: !0,
  range: null,
  [us]: !1
};
function te(c, e, t) {
  return t.min.x = e[c], t.min.y = e[c + 1], t.min.z = e[c + 2], t.max.x = e[c + 3], t.max.y = e[c + 4], t.max.z = e[c + 5], t;
}
function Bs(c) {
  let e = -1, t = -1 / 0;
  for (let s = 0; s < 3; s++) {
    const n = c[s + 3] - c[s];
    n > t && (t = n, e = s);
  }
  return e;
}
function Cs(c, e) {
  e.set(c);
}
function Ns(c, e, t) {
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
function se(c, e) {
  return e[c + 15] === ls;
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
function In(c, e, t, s, n) {
  let r = 1 / 0, i = 1 / 0, o = 1 / 0, a = -1 / 0, u = -1 / 0, f = -1 / 0, l = 1 / 0, d = 1 / 0, h = 1 / 0, x = -1 / 0, y = -1 / 0, m = -1 / 0;
  const v = c.offset || 0;
  for (let p = (e - v) * 6, _ = (e + t - v) * 6; p < _; p += 6) {
    const g = c[p + 0], w = c[p + 1], M = g - w, A = g + w;
    M < r && (r = M), A > a && (a = A), g < l && (l = g), g > x && (x = g);
    const T = c[p + 2], S = c[p + 3], b = T - S, E = T + S;
    b < i && (i = b), E > u && (u = E), T < d && (d = T), T > y && (y = T);
    const R = c[p + 4], I = c[p + 5], P = R - I, C = R + I;
    P < o && (o = P), C > f && (f = C), R < h && (h = R), R > m && (m = R);
  }
  s[0] = r, s[1] = i, s[2] = o, s[3] = a, s[4] = u, s[5] = f, n[0] = l, n[1] = d, n[2] = h, n[3] = x, n[4] = y, n[5] = m;
}
const Ve = 32, Pr = (c, e) => c.candidate - e.candidate, qe = /* @__PURE__ */ new Array(Ve).fill().map(() => ({
  count: 0,
  bounds: new Float32Array(6),
  rightCacheBounds: new Float32Array(6),
  leftCacheBounds: new Float32Array(6),
  candidate: 0
})), Zt = /* @__PURE__ */ new Float32Array(6);
function Br(c, e, t, s, n, r) {
  let i = -1, o = 0;
  if (r === _i)
    i = Bs(e), i !== -1 && (o = (e[i] + e[i + 3]) / 2);
  else if (r === Er)
    i = Bs(c), i !== -1 && (o = Cr(t, s, n, i));
  else if (r === Dr) {
    const a = Pt(c);
    let u = Dn * n;
    const f = t.offset || 0, l = (s - f) * 6, d = (s + n - f) * 6;
    for (let h = 0; h < 3; h++) {
      const x = e[h], v = (e[h + 3] - x) / Ve;
      if (n < Ve / 4) {
        const p = [...qe];
        p.length = n;
        let _ = 0;
        for (let w = l; w < d; w += 6, _++) {
          const M = p[_];
          M.candidate = t[w + 2 * h], M.count = 0;
          const {
            bounds: A,
            leftCacheBounds: T,
            rightCacheBounds: S
          } = M;
          for (let b = 0; b < 3; b++)
            S[b] = 1 / 0, S[b + 3] = -1 / 0, T[b] = 1 / 0, T[b + 3] = -1 / 0, A[b] = 1 / 0, A[b + 3] = -1 / 0;
          Jt(w, t, A);
        }
        p.sort(Pr);
        let g = n;
        for (let w = 0; w < g; w++) {
          const M = p[w];
          for (; w + 1 < g && p[w + 1].candidate === M.candidate; )
            p.splice(w + 1, 1), g--;
        }
        for (let w = l; w < d; w += 6) {
          const M = t[w + 2 * h];
          for (let A = 0; A < g; A++) {
            const T = p[A];
            M >= T.candidate ? Jt(w, t, T.rightCacheBounds) : (Jt(w, t, T.leftCacheBounds), T.count++);
          }
        }
        for (let w = 0; w < g; w++) {
          const M = p[w], A = M.count, T = n - M.count, S = M.leftCacheBounds, b = M.rightCacheBounds;
          let E = 0;
          A !== 0 && (E = Pt(S) / a);
          let R = 0;
          T !== 0 && (R = Pt(b) / a);
          const I = Ps + Dn * (E * A + R * T);
          I < u && (i = h, u = I, o = M.candidate);
        }
      } else {
        for (let g = 0; g < Ve; g++) {
          const w = qe[g];
          w.count = 0, w.candidate = x + v + g * v;
          const M = w.bounds;
          for (let A = 0; A < 3; A++)
            M[A] = 1 / 0, M[A + 3] = -1 / 0;
        }
        for (let g = l; g < d; g += 6) {
          let A = ~~((t[g + 2 * h] - x) / v);
          A >= Ve && (A = Ve - 1);
          const T = qe[A];
          T.count++, Jt(g, t, T.bounds);
        }
        const p = qe[Ve - 1];
        Cs(p.bounds, p.rightCacheBounds);
        for (let g = Ve - 2; g >= 0; g--) {
          const w = qe[g], M = qe[g + 1];
          Ns(w.bounds, M.rightCacheBounds, w.rightCacheBounds);
        }
        let _ = 0;
        for (let g = 0; g < Ve - 1; g++) {
          const w = qe[g], M = w.count, A = w.bounds, S = qe[g + 1].rightCacheBounds;
          M !== 0 && (_ === 0 ? Cs(A, Zt) : Ns(A, Zt, Zt)), _ += M;
          let b = 0, E = 0;
          _ !== 0 && (b = Pt(Zt) / a);
          const R = n - _;
          R !== 0 && (E = Pt(S) / a);
          const I = Ps + Dn * (b * _ + E * R);
          I < u && (i = h, u = I, o = w.candidate);
        }
      }
    }
  } else
    console.warn(`BVH: Invalid build strategy value ${r} used.`);
  return { axis: i, pos: o };
}
function Cr(c, e, t, s) {
  let n = 0;
  const r = c.offset;
  for (let i = e, o = e + t; i < o; i++)
    n += c[(i - r) * 6 + s * 2];
  return n / t;
}
class Pn {
  constructor() {
    this.boundingData = new Float32Array(6);
  }
}
function Nr(c, e, t, s, n, r) {
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
        const d = i - f, h = o - f, x = t[d * 6 + l];
        t[d * 6 + l] = t[h * 6 + l], t[h * 6 + l] = x;
      }
      i++, o--;
    } else
      return i;
  }
}
let Ti, gn, Wn, Mi;
const Lr = Math.pow(2, 32);
function Xn(c) {
  return "count" in c ? 1 : 1 + Xn(c.left) + Xn(c.right);
}
function Fr(c, e, t) {
  return Ti = new Float32Array(t), gn = new Uint32Array(t), Wn = new Uint16Array(t), Mi = new Uint8Array(t), $n(c, e);
}
function $n(c, e) {
  const t = c / 4, s = c / 2, n = "count" in e, r = e.boundingData;
  for (let i = 0; i < 6; i++)
    Ti[t + i] = r[i];
  if (n)
    return e.buffer ? (Mi.set(new Uint8Array(e.buffer), c), c + e.buffer.byteLength) : (gn[t + 6] = e.offset, Wn[s + 14] = e.count, Wn[s + 15] = ls, c + fe);
  {
    const { left: i, right: o, splitAxis: a } = e, u = c + fe;
    let f = $n(u, i);
    const l = c / fe, h = f / fe - l;
    if (h > Lr)
      throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");
    return gn[t + 6] = h, gn[t + 7] = a, $n(f, o);
  }
}
function Ur(c, e, t, s, n, r) {
  const {
    maxDepth: i,
    verbose: o,
    maxLeafSize: a,
    strategy: u,
    onProgress: f
  } = n, l = c.primitiveBuffer, d = c.primitiveBufferStride, h = new Float32Array(6);
  let x = !1;
  const y = new Pn();
  return In(e, t, s, y.boundingData, h), v(y, t, s, h), y;
  function m(p) {
    f && f((p - r.offset) / r.count);
  }
  function v(p, _, g, w = null, M = 0) {
    if (!x && M >= i && (x = !0, o && console.warn(`BVH: Max depth of ${i} reached when generating BVH. Consider increasing maxDepth.`)), g <= a || M >= i)
      return m(_ + g), p.offset = _, p.count = g, p;
    const A = Br(p.boundingData, w, e, _, g, u);
    if (A.axis === -1)
      return m(_ + g), p.offset = _, p.count = g, p;
    const T = Nr(l, d, e, _, g, A);
    if (T === _ || T === _ + g)
      m(_ + g), p.offset = _, p.count = g;
    else {
      p.splitAxis = A.axis;
      const S = new Pn(), b = _, E = T - _;
      p.left = S, In(e, b, E, S.boundingData, h), v(S, b, E, h, M + 1);
      const R = new Pn(), I = T, P = g - E;
      p.right = R, In(e, I, P, R.boundingData, h), v(R, I, P, h, M + 1);
    }
    return p;
  }
}
function Or(c, e) {
  const t = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, s = c.getRootRanges(e.range), n = s[0], r = s[s.length - 1], i = {
    offset: n.offset,
    count: r.offset + r.count - n.offset
  }, o = new Float32Array(6 * i.count);
  o.offset = i.offset, c.computePrimitiveBounds(i.offset, i.count, o), c._roots = s.map((a) => {
    const u = Ur(c, o, a.offset, a.count, e, i), f = Xn(u), l = new t(fe * f);
    return Fr(0, u, l), l;
  });
}
class fs {
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
class kr {
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
const q = /* @__PURE__ */ new kr();
let et, bt;
const gt = [], Qt = /* @__PURE__ */ new fs(() => new Pe());
function Hr(c, e, t, s, n, r) {
  et = Qt.getPrimitive(), bt = Qt.getPrimitive(), gt.push(et, bt), q.setBuffer(c._roots[e]);
  const i = qn(0, c.geometry, t, s, n, r);
  q.clearBuffer(), Qt.releasePrimitive(et), Qt.releasePrimitive(bt), gt.pop(), gt.pop();
  const o = gt.length;
  return o > 0 && (bt = gt[o - 1], et = gt[o - 2]), i;
}
function qn(c, e, t, s, n = null, r = 0, i = 0) {
  const { float32Array: o, uint16Array: a, uint32Array: u } = q;
  let f = c * 2;
  if (se(f, a)) {
    const d = pe(c, u), h = ye(f, a);
    return te(c, o, et), s(d, h, !1, i, r + c / ce, et);
  } else {
    let b = function(R) {
      const { uint16Array: I, uint32Array: P } = q;
      let C = R * 2;
      for (; !se(C, I); )
        R = de(R), C = R * 2;
      return pe(R, P);
    }, E = function(R) {
      const { uint16Array: I, uint32Array: P } = q;
      let C = R * 2;
      for (; !se(C, I); )
        R = he(R, P), C = R * 2;
      return pe(R, P) + ye(C, I);
    };
    const d = de(c), h = he(c, u);
    let x = d, y = h, m, v, p, _;
    if (n && (p = et, _ = bt, te(x, o, p), te(y, o, _), m = n(p), v = n(_), v < m)) {
      x = h, y = d;
      const R = m;
      m = v, v = R, p = _;
    }
    p || (p = et, te(x, o, p));
    const g = se(x * 2, a), w = t(p, g, m, i + 1, r + x / ce);
    let M;
    if (w === Is) {
      const R = b(x), P = E(x) - R;
      M = s(R, P, !0, i + 1, r + x / ce, p);
    } else
      M = w && qn(
        x,
        e,
        t,
        s,
        n,
        r,
        i + 1
      );
    if (M) return !0;
    _ = bt, te(y, o, _);
    const A = se(y * 2, a), T = t(_, A, v, i + 1, r + y / ce);
    let S;
    if (T === Is) {
      const R = b(y), P = E(y) - R;
      S = s(R, P, !0, i + 1, r + y / ce, _);
    } else
      S = T && qn(
        y,
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
const Gt = /* @__PURE__ */ new q.constructor(), yn = /* @__PURE__ */ new q.constructor(), Ze = /* @__PURE__ */ new fs(() => new Pe()), xt = /* @__PURE__ */ new Pe(), yt = /* @__PURE__ */ new Pe(), Bn = /* @__PURE__ */ new Pe(), Cn = /* @__PURE__ */ new Pe();
let Nn = !1;
function Vr(c, e, t, s) {
  if (Nn)
    throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");
  Nn = !0;
  const n = c._roots, r = e._roots;
  let i, o = 0, a = 0;
  const u = new Re().copy(t).invert();
  for (let f = 0, l = n.length; f < l; f++) {
    Gt.setBuffer(n[f]), a = 0;
    const d = Ze.getPrimitive();
    te(0, Gt.float32Array, d), d.applyMatrix4(u);
    for (let h = 0, x = r.length; h < x && (yn.setBuffer(r[h]), i = Ee(
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
    if (Ze.releasePrimitive(d), Gt.clearBuffer(), o += n[f].byteLength / fe, i)
      break;
  }
  return Nn = !1, i;
}
function Ee(c, e, t, s, n, r = 0, i = 0, o = 0, a = 0, u = null, f = !1) {
  let l, d;
  f ? (l = yn, d = Gt) : (l = Gt, d = yn);
  const h = l.float32Array, x = l.uint32Array, y = l.uint16Array, m = d.float32Array, v = d.uint32Array, p = d.uint16Array, _ = c * 2, g = e * 2, w = se(_, y), M = se(g, p);
  let A = !1;
  if (M && w)
    f ? A = n(
      pe(e, v),
      ye(e * 2, p),
      pe(c, x),
      ye(c * 2, y),
      a,
      i + e / ce,
      o,
      r + c / ce
    ) : A = n(
      pe(c, x),
      ye(c * 2, y),
      pe(e, v),
      ye(e * 2, p),
      o,
      r + c / ce,
      a,
      i + e / ce
    );
  else if (M) {
    const T = Ze.getPrimitive();
    te(e, m, T), T.applyMatrix4(t);
    const S = de(c), b = he(c, x);
    te(S, h, xt), te(b, h, yt);
    const E = T.intersectsBox(xt), R = T.intersectsBox(yt);
    A = E && Ee(
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
    ) || R && Ee(
      e,
      b,
      s,
      t,
      n,
      i,
      r,
      a,
      o + 1,
      T,
      !f
    ), Ze.releasePrimitive(T);
  } else {
    const T = de(e), S = he(e, v);
    te(T, m, Bn), te(S, m, Cn);
    const b = u.intersectsBox(Bn), E = u.intersectsBox(Cn);
    if (b && E)
      A = Ee(
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
      ) || Ee(
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
    else if (b)
      if (w)
        A = Ee(
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
        const R = Ze.getPrimitive();
        R.copy(Bn).applyMatrix4(t);
        const I = de(c), P = he(c, x);
        te(I, h, xt), te(P, h, yt);
        const C = R.intersectsBox(xt), L = R.intersectsBox(yt);
        A = C && Ee(
          T,
          I,
          s,
          t,
          n,
          i,
          r,
          a,
          o + 1,
          R,
          !f
        ) || L && Ee(
          T,
          P,
          s,
          t,
          n,
          i,
          r,
          a,
          o + 1,
          R,
          !f
        ), Ze.releasePrimitive(R);
      }
    else if (E)
      if (w)
        A = Ee(
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
        const R = Ze.getPrimitive();
        R.copy(Cn).applyMatrix4(t);
        const I = de(c), P = he(c, x);
        te(I, h, xt), te(P, h, yt);
        const C = R.intersectsBox(xt), L = R.intersectsBox(yt);
        A = C && Ee(
          S,
          I,
          s,
          t,
          n,
          i,
          r,
          a,
          o + 1,
          R,
          !f
        ) || L && Ee(
          S,
          P,
          s,
          t,
          n,
          i,
          r,
          a,
          o + 1,
          R,
          !f
        ), Ze.releasePrimitive(R);
      }
  }
  return A;
}
const Ls = /* @__PURE__ */ new Pe(), vt = /* @__PURE__ */ new Float32Array(6);
class zr {
  constructor() {
    this._roots = null, this.primitiveBuffer = null, this.primitiveBufferStride = null;
  }
  init(e) {
    e = {
      ...wi,
      ...e
    }, Or(this, e);
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
      const [h, x, y, m, v, p] = vt;
      h < r && (r = h), m > a && (a = m), x < i && (i = x), v > u && (u = v), y < o && (o = y), p > f && (f = p);
    }
    return s[n + 0] = r, s[n + 1] = i, s[n + 2] = o, s[n + 3] = a, s[n + 4] = u, s[n + 5] = f, s;
  }
  computePrimitiveBounds(e, t, s) {
    const n = s.offset || 0;
    for (let r = e, i = e + t; r < i; r++) {
      this.writePrimitiveBounds(r, vt, 0);
      const [o, a, u, f, l, d] = vt, h = (o + f) / 2, x = (a + l) / 2, y = (u + d) / 2, m = (f - o) / 2, v = (l - a) / 2, p = (d - u) / 2, _ = (r - n) * 6;
      s[_ + 0] = h, s[_ + 1] = m + (Math.abs(h) + m) * pn, s[_ + 2] = x, s[_ + 3] = v + (Math.abs(x) + v) * pn, s[_ + 4] = y, s[_ + 5] = p + (Math.abs(y) + p) * pn;
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
          se(l, o) && (i[f + 6] += e);
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
      const u = o * 2, f = se(u, r);
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
        if (se(l, i)) {
          const h = pe(f, r), x = ye(l, i);
          this.writePrimitiveRangeBounds(h, x, vt, 0), o.set(vt, f);
        } else {
          const h = de(f), x = he(f, r);
          for (let y = 0; y < 3; y++) {
            const m = o[h + y], v = o[h + y + 3], p = o[x + y], _ = o[x + y + 3];
            o[f + y] = m < p ? m : p, o[f + y + 3] = v > _ ? v : _;
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
      te(0, new Float32Array(s), Ls), e.union(Ls);
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
      n = (d, h, x, y, m) => l(d, h, x, y, m) ? !0 : o(d, h, this, r, x, y, i);
    } else n || (r ? n = (l, d, h, x) => o(l, d, this, r, h, x, i) : n = (l, d, h) => h);
    let a = !1, u = 0;
    const f = this._roots;
    for (let l = 0, d = f.length; l < d; l++) {
      const h = f[l];
      if (a = Hr(this, l, s, n, t, u), a)
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
    return Vr(this, e, t, n);
  }
}
function Gr() {
  return typeof SharedArrayBuffer < "u";
}
function Tn(c) {
  return c.index ? c.index.count : c.attributes.position.count;
}
function Mn(c) {
  return Tn(c) / 3;
}
function Ai(c, e = ArrayBuffer) {
  return c > 65535 ? new Uint32Array(new e(4 * c)) : new Uint16Array(new e(2 * c));
}
function jr(c, e) {
  if (!c.index) {
    const t = c.attributes.position.count, s = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, n = Ai(t, s);
    c.setIndex(new Rt(n, 1));
    for (let r = 0; r < t; r++)
      n[r] = r;
  }
}
function Kr(c, e, t) {
  const s = Tn(c) / t, n = e || c.drawRange, r = n.start / t, i = (n.start + n.count) / t, o = Math.max(0, r), a = Math.min(s, i) - o;
  return {
    offset: Math.floor(o),
    count: Math.floor(a)
  };
}
function Yr(c, e) {
  return c.groups.map((t) => ({
    offset: t.start / e,
    count: t.count / e
  }));
}
function Fs(c, e, t) {
  const s = Kr(c, e, t), n = Yr(c, t);
  if (!n.length)
    return [s];
  const r = [], i = s.offset, o = s.offset + s.count, a = Tn(c) / t, u = [];
  for (const d of n) {
    const { offset: h, count: x } = d, y = h, m = isFinite(x) ? x : a - h, v = h + m;
    y < o && v > i && (u.push({ pos: Math.max(i, y), isStart: !0 }), u.push({ pos: Math.min(o, v), isStart: !1 }));
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
function Wr(c, e) {
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
class Xr extends zr {
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
    if (t.useSharedArrayBuffer && !Gr())
      throw new Error("BVH: SharedArrayBuffer is not available.");
    super(), this.geometry = e, this.resolvePrimitiveIndex = t.indirect ? (s) => this._indirectBuffer[s] : (s) => s, this.primitiveBuffer = null, this.primitiveBufferStride = null, this._indirectBuffer = null, t = {
      ...wi,
      ...t
    }, t[us] || this.init(t);
  }
  init(e) {
    const { geometry: t, primitiveStride: s } = this;
    if (e.indirect) {
      const n = Fs(t, e.range, s), r = Wr(n, e.useSharedArrayBuffer);
      this._indirectBuffer = r;
    } else
      jr(t, e);
    super.init(e), !t.boundingBox && e.setBoundingBox && (t.boundingBox = this.getBoundingBox(new Pe()));
  }
  // Abstract methods to be implemented by subclasses
  getRootRanges(e) {
    return this.indirect ? [{ offset: 0, count: this._indirectBuffer.length }] : Fs(this.geometry, e, this.primitiveStride);
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
  const c = /* @__PURE__ */ new O();
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
const $r = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new O(), e = /* @__PURE__ */ new O(), t = /* @__PURE__ */ new O();
  return function(n, r, i) {
    const o = n.start, a = c, u = r.start, f = e;
    t.subVectors(o, u), c.subVectors(n.end, n.start), e.subVectors(r.end, r.start);
    const l = t.dot(f), d = f.dot(a), h = f.dot(f), x = t.dot(a), m = a.dot(a) * h - d * d;
    let v, p;
    m !== 0 ? v = (l * d - x * h) / m : v = 0, p = (l + v * d) / h, i.x = v, i.y = p;
  };
})(), ds = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Le(), e = /* @__PURE__ */ new O(), t = /* @__PURE__ */ new O();
  return function(n, r, i, o) {
    $r(n, r, c);
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
})(), qr = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new O(), e = /* @__PURE__ */ new O(), t = /* @__PURE__ */ new li(), s = /* @__PURE__ */ new je();
  return function(r, i) {
    const { radius: o, center: a } = r, { a: u, b: f, c: l } = i;
    if (s.start = u, s.end = f, s.closestPointToPoint(a, !0, c).distanceTo(a) <= o || (s.start = u, s.end = l, s.closestPointToPoint(a, !0, c).distanceTo(a) <= o) || (s.start = f, s.end = l, s.closestPointToPoint(a, !0, c).distanceTo(a) <= o)) return !0;
    const y = i.getPlane(t);
    if (Math.abs(y.distanceToPoint(a)) <= o) {
      const v = y.projectPoint(a, e);
      if (i.containsPoint(v)) return !0;
    }
    return !1;
  };
})(), Jr = ["x", "y", "z"], ze = 1e-15, Us = ze * ze;
function Te(c) {
  return Math.abs(c) < ze;
}
class Ie extends At {
  constructor(...e) {
    super(...e), this.isExtendedTriangle = !0, this.satAxes = new Array(4).fill().map(() => new O()), this.satBounds = new Array(4).fill().map(() => new Ke()), this.points = [this.a, this.b, this.c], this.plane = new li(), this.isDegenerateIntoSegment = !1, this.isDegenerateIntoPoint = !1, this.degenerateSegment = new je(), this.needsUpdate = !0;
  }
  /**
   * Returns whether the triangle intersects the given sphere.
   * @param {Sphere} sphere
   * @returns {boolean}
   */
  intersectsSphere(e) {
    return qr(e, this);
  }
  update() {
    const e = this.a, t = this.b, s = this.c, n = this.points, r = this.satAxes, i = this.satBounds, o = r[0], a = i[0];
    this.getNormal(o), a.setFromPoints(o, n);
    const u = r[1], f = i[1];
    u.subVectors(e, t), f.setFromPoints(u, n);
    const l = r[2], d = i[2];
    l.subVectors(t, s), d.setFromPoints(l, n);
    const h = r[3], x = i[3];
    h.subVectors(s, e), x.setFromPoints(h, n);
    const y = u.length(), m = l.length(), v = h.length();
    this.isDegenerateIntoPoint = !1, this.isDegenerateIntoSegment = !1, y < ze ? m < ze || v < ze ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(e), this.degenerateSegment.end.copy(s)) : m < ze ? v < ze ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(t), this.degenerateSegment.end.copy(e)) : v < ze && (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(s), this.degenerateSegment.end.copy(t)), this.plane.setFromNormalAndCoplanarPoint(o, e), this.needsUpdate = !1;
  }
}
Ie.prototype.closestPointToSegment = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new O(), e = /* @__PURE__ */ new O(), t = /* @__PURE__ */ new je();
  return function(n, r = null, i = null) {
    const { start: o, end: a } = n, u = this.points;
    let f, l = 1 / 0;
    for (let d = 0; d < 3; d++) {
      const h = (d + 1) % 3;
      t.start.copy(u[d]), t.end.copy(u[h]), ds(t, n, c, e), f = c.distanceToSquared(e), f < l && (l = f, r && r.copy(c), i && i.copy(e));
    }
    return this.closestPointToPoint(o, c), f = o.distanceToSquared(c), f < l && (l = f, r && r.copy(c), i && i.copy(o)), this.closestPointToPoint(a, c), f = a.distanceToSquared(c), f < l && (l = f, r && r.copy(c), i && i.copy(a)), Math.sqrt(l);
  };
})();
Ie.prototype.intersectsTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Ie(), e = /* @__PURE__ */ new Ke(), t = /* @__PURE__ */ new Ke(), s = /* @__PURE__ */ new O(), n = /* @__PURE__ */ new O(), r = /* @__PURE__ */ new O(), i = /* @__PURE__ */ new O(), o = /* @__PURE__ */ new je(), a = /* @__PURE__ */ new je(), u = /* @__PURE__ */ new O(), f = /* @__PURE__ */ new Le(), l = /* @__PURE__ */ new Le();
  function d(_, g, w, M) {
    const A = s;
    !_.isDegenerateIntoPoint && !_.isDegenerateIntoSegment ? A.copy(_.plane.normal) : A.copy(g.plane.normal);
    const T = _.satBounds, S = _.satAxes;
    for (let R = 1; R < 4; R++) {
      const I = T[R], P = S[R];
      if (e.setFromPoints(P, g.points), I.isSeparated(e) || (i.copy(A).cross(P), e.setFromPoints(i, _.points), t.setFromPoints(i, g.points), e.isSeparated(t))) return !1;
    }
    const b = g.satBounds, E = g.satAxes;
    for (let R = 1; R < 4; R++) {
      const I = b[R], P = E[R];
      if (e.setFromPoints(P, _.points), I.isSeparated(e) || (i.crossVectors(A, P), e.setFromPoints(i, _.points), t.setFromPoints(i, g.points), e.isSeparated(t))) return !1;
    }
    return w && (M || console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."), w.start.set(0, 0, 0), w.end.set(0, 0, 0)), !0;
  }
  function h(_, g, w, M, A, T, S, b, E, R, I) {
    let P = S / (S - b);
    R.x = M + (A - M) * P, I.start.subVectors(g, _).multiplyScalar(P).add(_), P = S / (S - E), R.y = M + (T - M) * P, I.end.subVectors(w, _).multiplyScalar(P).add(_);
  }
  function x(_, g, w, M, A, T, S, b, E, R, I) {
    if (A > 0)
      h(_.c, _.a, _.b, M, g, w, E, S, b, R, I);
    else if (T > 0)
      h(_.b, _.a, _.c, w, g, M, b, S, E, R, I);
    else if (b * E > 0 || S != 0)
      h(_.a, _.b, _.c, g, w, M, S, b, E, R, I);
    else if (b != 0)
      h(_.b, _.a, _.c, w, g, M, b, S, E, R, I);
    else if (E != 0)
      h(_.c, _.a, _.b, M, g, w, E, S, b, R, I);
    else
      return !0;
    return !1;
  }
  function y(_, g, w, M) {
    const A = g.degenerateSegment, T = _.plane.distanceToPoint(A.start), S = _.plane.distanceToPoint(A.end);
    return Te(T) ? Te(S) ? d(_, g, w, M) : (w && (w.start.copy(A.start), w.end.copy(A.start)), _.containsPoint(A.start)) : Te(S) ? (w && (w.start.copy(A.end), w.end.copy(A.end)), _.containsPoint(A.end)) : _.plane.intersectLine(A, s) != null ? (w && (w.start.copy(s), w.end.copy(s)), _.containsPoint(s)) : !1;
  }
  function m(_, g, w) {
    const M = g.a;
    return Te(_.plane.distanceToPoint(M)) && _.containsPoint(M) ? (w && (w.start.copy(M), w.end.copy(M)), !0) : !1;
  }
  function v(_, g, w) {
    const M = _.degenerateSegment, A = g.a;
    return M.closestPointToPoint(A, !0, s), A.distanceToSquared(s) < Us ? (w && (w.start.copy(A), w.end.copy(A)), !0) : !1;
  }
  function p(_, g, w, M) {
    if (_.isDegenerateIntoSegment)
      if (g.isDegenerateIntoSegment) {
        const A = _.degenerateSegment, T = g.degenerateSegment, S = n, b = r;
        A.delta(S), T.delta(b);
        const E = s.subVectors(T.start, A.start), R = S.x * b.y - S.y * b.x;
        if (Te(R))
          return !1;
        const I = (E.x * b.y - E.y * b.x) / R, P = -(S.x * E.y - S.y * E.x) / R;
        if (I < 0 || I > 1 || P < 0 || P > 1)
          return !1;
        const C = A.start.z + S.z * I, L = T.start.z + b.z * P;
        return Te(C - L) ? (w && (w.start.copy(A.start).addScaledVector(S, I), w.end.copy(A.start).addScaledVector(S, I)), !0) : !1;
      } else return g.isDegenerateIntoPoint ? v(_, g, w) : y(g, _, w, M);
    else {
      if (_.isDegenerateIntoPoint)
        return g.isDegenerateIntoPoint ? g.a.distanceToSquared(_.a) < Us ? (w && (w.start.copy(_.a), w.end.copy(_.a)), !0) : !1 : g.isDegenerateIntoSegment ? v(g, _, w) : m(g, _, w);
      if (g.isDegenerateIntoPoint)
        return m(_, g, w);
      if (g.isDegenerateIntoSegment)
        return y(_, g, w, M);
    }
  }
  return function(g, w = null, M = !1) {
    this.needsUpdate && this.update(), g.isExtendedTriangle ? g.needsUpdate && g.update() : (c.copy(g), c.update(), g = c);
    const A = p(this, g, w, M);
    if (A !== void 0)
      return A;
    const T = this.plane, S = g.plane;
    let b = S.distanceToPoint(this.a), E = S.distanceToPoint(this.b), R = S.distanceToPoint(this.c);
    Te(b) && (b = 0), Te(E) && (E = 0), Te(R) && (R = 0);
    const I = b * E, P = b * R;
    if (I > 0 && P > 0)
      return !1;
    let C = T.distanceToPoint(g.a), L = T.distanceToPoint(g.b), k = T.distanceToPoint(g.c);
    Te(C) && (C = 0), Te(L) && (L = 0), Te(k) && (k = 0);
    const V = C * L, J = C * k;
    if (V > 0 && J > 0)
      return !1;
    n.copy(T.normal), r.copy(S.normal);
    const Y = n.cross(r);
    let D = 0, F = Math.abs(Y.x);
    const U = Math.abs(Y.y);
    U > F && (F = U, D = 1), Math.abs(Y.z) > F && (D = 2);
    const le = Jr[D], _e = this.a[le], H = this.b[le], j = this.c[le], re = g.a[le], me = g.b[le], ue = g.c[le];
    if (x(this, _e, H, j, I, P, b, E, R, f, o))
      return d(this, g, w, M);
    if (x(g, re, me, ue, V, J, C, L, k, l, a))
      return d(this, g, w, M);
    if (f.y < f.x) {
      const ge = f.y;
      f.y = f.x, f.x = ge, u.copy(o.start), o.start.copy(o.end), o.end.copy(u);
    }
    if (l.y < l.x) {
      const ge = l.y;
      l.y = l.x, l.x = ge, u.copy(a.start), a.start.copy(a.end), a.end.copy(u);
    }
    return f.y < l.x || l.y < f.x ? !1 : (w && (l.x > f.x ? w.start.copy(a.start) : w.start.copy(o.start), l.y < f.y ? w.end.copy(a.end) : w.end.copy(o.end)), !0);
  };
})();
Ie.prototype.distanceToPoint = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new O();
  return function(t) {
    return this.closestPointToPoint(t, c), t.distanceTo(c);
  };
})();
Ie.prototype.distanceToTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new O(), e = /* @__PURE__ */ new O(), t = ["a", "b", "c"], s = /* @__PURE__ */ new je(), n = /* @__PURE__ */ new je();
  return function(i, o = null, a = null) {
    const u = o || a ? s : null;
    if (this.intersectsTriangle(i, u, !0))
      return (o || a) && (o && u.getCenter(o), a && u.getCenter(a)), 0;
    let f = 1 / 0;
    for (let l = 0; l < 3; l++) {
      let d;
      const h = t[l], x = i[h];
      this.closestPointToPoint(x, c), d = x.distanceToSquared(c), d < f && (f = d, o && o.copy(c), a && a.copy(x));
      const y = this[h];
      i.closestPointToPoint(y, c), d = y.distanceToSquared(c), d < f && (f = d, o && o.copy(y), a && a.copy(c));
    }
    for (let l = 0; l < 3; l++) {
      const d = t[l], h = t[(l + 1) % 3];
      s.set(this[d], this[h]);
      for (let x = 0; x < 3; x++) {
        const y = t[x], m = t[(x + 1) % 3];
        n.set(i[y], i[m]), ds(s, n, c, e);
        const v = c.distanceToSquared(e);
        v < f && (f = v, o && o.copy(c), a && a.copy(e));
      }
    }
    return Math.sqrt(f);
  };
})();
class ve {
  constructor(e, t, s) {
    this.isOrientedBox = !0, this.min = new O(), this.max = new O(), this.matrix = new Re(), this.invMatrix = new Re(), this.points = new Array(8).fill().map(() => new O()), this.satAxes = new Array(3).fill().map(() => new O()), this.satBounds = new Array(3).fill().map(() => new Ke()), this.alignedSatBounds = new Array(3).fill().map(() => new Ke()), this.needsUpdate = !1, e && this.min.copy(e), t && this.max.copy(t), s && this.matrix.copy(s);
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
  const c = /* @__PURE__ */ new Ie(), e = /* @__PURE__ */ new Array(3), t = /* @__PURE__ */ new Ke(), s = /* @__PURE__ */ new Ke(), n = /* @__PURE__ */ new O();
  return function(i) {
    this.needsUpdate && this.update(), i.isExtendedTriangle ? i.needsUpdate && i.update() : (c.copy(i), c.update(), i = c);
    const o = this.satBounds, a = this.satAxes;
    e[0] = i.a, e[1] = i.b, e[2] = i.c;
    for (let d = 0; d < 3; d++) {
      const h = o[d], x = a[d];
      if (t.setFromPoints(x, e), h.isSeparated(t)) return !1;
    }
    const u = i.satBounds, f = i.satAxes, l = this.points;
    for (let d = 0; d < 3; d++) {
      const h = u[d], x = f[d];
      if (t.setFromPoints(x, l), h.isSeparated(t)) return !1;
    }
    for (let d = 0; d < 3; d++) {
      const h = a[d];
      for (let x = 0; x < 4; x++) {
        const y = f[x];
        if (n.crossVectors(h, y), t.setFromPoints(n, e), s.setFromPoints(n, l), t.isSeparated(s)) return !1;
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
  const c = new O();
  return function(t) {
    return this.closestPointToPoint(t, c), t.distanceTo(c);
  };
})();
ve.prototype.distanceToBox = /* @__PURE__ */ (function() {
  const c = ["x", "y", "z"], e = /* @__PURE__ */ new Array(12).fill().map(() => new je()), t = /* @__PURE__ */ new Array(12).fill().map(() => new je()), s = /* @__PURE__ */ new O(), n = /* @__PURE__ */ new O();
  return function(i, o = 0, a = null, u = null) {
    if (this.needsUpdate && this.update(), this.intersectsBox(i))
      return (a || u) && (i.getCenter(n), this.closestPointToPoint(n, s), i.closestPointToPoint(s, n), a && a.copy(s), u && u.copy(n)), 0;
    const f = o * o, l = i.min, d = i.max, h = this.points;
    let x = 1 / 0;
    for (let m = 0; m < 8; m++) {
      const v = h[m];
      n.copy(v).clamp(l, d);
      const p = v.distanceToSquared(n);
      if (p < x && (x = p, a && a.copy(v), u && u.copy(n), p < f))
        return Math.sqrt(p);
    }
    let y = 0;
    for (let m = 0; m < 3; m++)
      for (let v = 0; v <= 1; v++)
        for (let p = 0; p <= 1; p++) {
          const _ = (m + 1) % 3, g = (m + 2) % 3, w = v << _ | p << g, M = 1 << m | v << _ | p << g, A = h[w], T = h[M];
          e[y].set(A, T);
          const b = c[m], E = c[_], R = c[g], I = t[y], P = I.start, C = I.end;
          P[b] = l[b], P[E] = v ? l[E] : d[E], P[R] = p ? l[R] : d[E], C[b] = d[b], C[E] = v ? l[E] : d[E], C[R] = p ? l[R] : d[E], y++;
        }
    for (let m = 0; m <= 1; m++)
      for (let v = 0; v <= 1; v++)
        for (let p = 0; p <= 1; p++) {
          n.x = m ? d.x : l.x, n.y = v ? d.y : l.y, n.z = p ? d.z : l.z, this.closestPointToPoint(n, s);
          const _ = n.distanceToSquared(s);
          if (_ < x && (x = _, a && a.copy(s), u && u.copy(n), _ < f))
            return Math.sqrt(_);
        }
    for (let m = 0; m < 12; m++) {
      const v = e[m];
      for (let p = 0; p < 12; p++) {
        const _ = t[p];
        ds(v, _, s, n);
        const g = s.distanceToSquared(n);
        if (g < x && (x = g, a && a.copy(s), u && u.copy(n), g < f))
          return Math.sqrt(g);
      }
    }
    return Math.sqrt(x);
  };
})();
class Zr extends fs {
  constructor() {
    super(() => new Ie());
  }
}
const be = /* @__PURE__ */ new Zr(), Bt = /* @__PURE__ */ new O(), Ln = /* @__PURE__ */ new O();
function Qr(c, e, t = {}, s = 0, n = 1 / 0) {
  const r = s * s, i = n * n;
  let o = 1 / 0, a = null;
  if (c.shapecast(
    {
      boundsTraverseOrder: (f) => (Bt.copy(e).clamp(f.min, f.max), Bt.distanceToSquared(e)),
      intersectsBounds: (f, l, d) => d < o && d < i,
      intersectsTriangle: (f, l) => {
        f.closestPointToPoint(e, Bt);
        const d = e.distanceToSquared(Bt);
        return d < o && (Ln.copy(Bt), o = d, a = l), d < r;
      }
    }
  ), o === 1 / 0) return null;
  const u = Math.sqrt(o);
  return t.point ? t.point.copy(Ln) : t.point = Ln.clone(), t.distance = u, t.faceIndex = a, t;
}
const en = parseInt(fi) >= 169, eo = parseInt(fi) <= 161, at = /* @__PURE__ */ new O(), ct = /* @__PURE__ */ new O(), lt = /* @__PURE__ */ new O(), tn = /* @__PURE__ */ new Le(), nn = /* @__PURE__ */ new Le(), sn = /* @__PURE__ */ new Le(), Os = /* @__PURE__ */ new O(), ks = /* @__PURE__ */ new O(), Hs = /* @__PURE__ */ new O(), Ct = /* @__PURE__ */ new O();
function to(c, e, t, s, n, r, i, o) {
  let a;
  if (r === Ui ? a = c.intersectTriangle(s, t, e, !0, n) : a = c.intersectTriangle(e, t, s, r !== ui, n), a === null) return null;
  const u = c.origin.distanceTo(n);
  return u < i || u > o ? null : {
    distance: u,
    point: n.clone()
  };
}
function Vs(c, e, t, s, n, r, i, o, a, u, f) {
  at.fromBufferAttribute(e, r), ct.fromBufferAttribute(e, i), lt.fromBufferAttribute(e, o);
  const l = to(c, at, ct, lt, Ct, a, u, f);
  if (l) {
    if (s) {
      tn.fromBufferAttribute(s, r), nn.fromBufferAttribute(s, i), sn.fromBufferAttribute(s, o), l.uv = new Le();
      const h = At.getInterpolation(Ct, at, ct, lt, tn, nn, sn, l.uv);
      en || (l.uv = h);
    }
    if (n) {
      tn.fromBufferAttribute(n, r), nn.fromBufferAttribute(n, i), sn.fromBufferAttribute(n, o), l.uv1 = new Le();
      const h = At.getInterpolation(Ct, at, ct, lt, tn, nn, sn, l.uv1);
      en || (l.uv1 = h), eo && (l.uv2 = l.uv1);
    }
    if (t) {
      Os.fromBufferAttribute(t, r), ks.fromBufferAttribute(t, i), Hs.fromBufferAttribute(t, o), l.normal = new O();
      const h = At.getInterpolation(Ct, at, ct, lt, Os, ks, Hs, l.normal);
      l.normal.dot(c.direction) > 0 && l.normal.multiplyScalar(-1), en || (l.normal = h);
    }
    const d = {
      a: r,
      b: i,
      c: o,
      normal: new O(),
      materialIndex: 0
    };
    if (At.getNormal(at, ct, lt, d.normal), l.face = d, l.faceIndex = r, en) {
      const h = new O();
      At.getBarycoord(Ct, at, ct, lt, h), l.barycoord = h;
    }
  }
  return l;
}
function zs(c) {
  return c && c.isMaterial ? c.side : c;
}
function An(c, e, t, s, n, r, i) {
  const o = s * 3;
  let a = o + 0, u = o + 1, f = o + 2;
  const { index: l, groups: d } = c;
  c.index && (a = l.getX(a), u = l.getX(u), f = l.getX(f));
  const { position: h, normal: x, uv: y, uv1: m } = c.attributes;
  if (Array.isArray(e)) {
    const v = s * 3;
    for (let p = 0, _ = d.length; p < _; p++) {
      const { start: g, count: w, materialIndex: M } = d[p];
      if (v >= g && v < g + w) {
        const A = zs(e[M]), T = Vs(t, h, x, y, m, a, u, f, A, r, i);
        if (T)
          if (T.faceIndex = s, T.face.materialIndex = M, n)
            n.push(T);
          else
            return T;
      }
    }
  } else {
    const v = zs(e), p = Vs(t, h, x, y, m, a, u, f, v, r, i);
    if (p)
      if (p.faceIndex = s, p.face.materialIndex = 0, n)
        n.push(p);
      else
        return p;
  }
  return null;
}
function ie(c, e, t, s) {
  const n = c.a, r = c.b, i = c.c;
  let o = e, a = e + 1, u = e + 2;
  t && (o = t.getX(o), a = t.getX(a), u = t.getX(u)), n.x = s.getX(o), n.y = s.getY(o), n.z = s.getZ(o), r.x = s.getX(a), r.y = s.getY(a), r.z = s.getZ(a), i.x = s.getX(u), i.y = s.getY(u), i.z = s.getZ(u);
}
function no(c, e, t, s, n, r, i, o) {
  const { geometry: a, _indirectBuffer: u } = c;
  for (let f = s, l = s + n; f < l; f++)
    An(a, e, t, f, r, i, o);
}
function so(c, e, t, s, n, r, i) {
  const { geometry: o, _indirectBuffer: a } = c;
  let u = 1 / 0, f = null;
  for (let l = s, d = s + n; l < d; l++) {
    let h;
    h = An(o, e, t, l, null, r, i), h && h.distance < u && (f = h, u = h.distance);
  }
  return f;
}
function io(c, e, t, s, n, r, i) {
  const { geometry: o } = t, { index: a } = o, u = o.attributes.position;
  for (let f = c, l = e + c; f < l; f++) {
    let d;
    if (d = f, ie(i, d * 3, a, u), i.needsUpdate = !0, s(i, d, n, r))
      return !0;
  }
  return !1;
}
function ro(c, e = null) {
  e && Array.isArray(e) && (e = new Set(e));
  const t = c.geometry, s = t.index ? t.index.array : null, n = t.attributes.position;
  let r, i, o, a, u = 0;
  const f = c._roots;
  for (let d = 0, h = f.length; d < h; d++)
    r = f[d], i = new Uint32Array(r), o = new Uint16Array(r), a = new Float32Array(r), l(0, u), u += r.byteLength;
  function l(d, h, x = !1) {
    const y = d * 2;
    if (se(y, o)) {
      const m = pe(d, i), v = ye(y, o);
      let p = 1 / 0, _ = 1 / 0, g = 1 / 0, w = -1 / 0, M = -1 / 0, A = -1 / 0;
      for (let T = 3 * m, S = 3 * (m + v); T < S; T++) {
        let b = s[T];
        const E = n.getX(b), R = n.getY(b), I = n.getZ(b);
        E < p && (p = E), E > w && (w = E), R < _ && (_ = R), R > M && (M = R), I < g && (g = I), I > A && (A = I);
      }
      return a[d + 0] !== p || a[d + 1] !== _ || a[d + 2] !== g || a[d + 3] !== w || a[d + 4] !== M || a[d + 5] !== A ? (a[d + 0] = p, a[d + 1] = _, a[d + 2] = g, a[d + 3] = w, a[d + 4] = M, a[d + 5] = A, !0) : !1;
    } else {
      const m = de(d), v = he(d, i);
      let p = x, _ = !1, g = !1;
      if (e) {
        if (!p) {
          const b = m / ce + h / fe, E = v / ce + h / fe;
          _ = e.has(b), g = e.has(E), p = !_ && !g;
        }
      } else
        _ = !0, g = !0;
      const w = p || _, M = p || g;
      let A = !1;
      w && (A = l(m, h, p));
      let T = !1;
      M && (T = l(v, h, p));
      const S = A || T;
      if (S)
        for (let b = 0; b < 3; b++) {
          const E = m + b, R = v + b, I = a[E], P = a[E + 3], C = a[R], L = a[R + 3];
          a[d + b] = I < C ? I : C, a[d + b + 3] = P > L ? P : L;
        }
      return S;
    }
  }
}
function nt(c, e, t, s, n) {
  let r, i, o, a, u, f;
  const l = 1 / t.direction.x, d = 1 / t.direction.y, h = 1 / t.direction.z, x = t.origin.x, y = t.origin.y, m = t.origin.z;
  let v = e[c], p = e[c + 3], _ = e[c + 1], g = e[c + 3 + 1], w = e[c + 2], M = e[c + 3 + 2];
  return l >= 0 ? (r = (v - x) * l, i = (p - x) * l) : (r = (p - x) * l, i = (v - x) * l), d >= 0 ? (o = (_ - y) * d, a = (g - y) * d) : (o = (g - y) * d, a = (_ - y) * d), r > a || o > i || ((o > r || isNaN(r)) && (r = o), (a < i || isNaN(i)) && (i = a), h >= 0 ? (u = (w - m) * h, f = (M - m) * h) : (u = (M - m) * h, f = (w - m) * h), r > f || u > i) ? !1 : ((u > r || r !== r) && (r = u), (f < i || i !== i) && (i = f), r <= n && i >= s);
}
function oo(c, e, t, s, n, r, i, o) {
  const { geometry: a, _indirectBuffer: u } = c;
  for (let f = s, l = s + n; f < l; f++) {
    let d = u ? u[f] : f;
    An(a, e, t, d, r, i, o);
  }
}
function ao(c, e, t, s, n, r, i) {
  const { geometry: o, _indirectBuffer: a } = c;
  let u = 1 / 0, f = null;
  for (let l = s, d = s + n; l < d; l++) {
    let h;
    h = An(o, e, t, a ? a[l] : l, null, r, i), h && h.distance < u && (f = h, u = h.distance);
  }
  return f;
}
function co(c, e, t, s, n, r, i) {
  const { geometry: o } = t, { index: a } = o, u = o.attributes.position;
  for (let f = c, l = e + c; f < l; f++) {
    let d;
    if (d = t.resolveTriangleIndex(f), ie(i, d * 3, a, u), i.needsUpdate = !0, s(i, d, n, r))
      return !0;
  }
  return !1;
}
function lo(c, e, t, s, n, r, i) {
  q.setBuffer(c._roots[e]), Jn(0, c, t, s, n, r, i), q.clearBuffer();
}
function Jn(c, e, t, s, n, r, i) {
  const { float32Array: o, uint16Array: a, uint32Array: u } = q, f = c * 2;
  if (se(f, a)) {
    const d = pe(c, u), h = ye(f, a);
    no(e, t, s, d, h, n, r, i);
  } else {
    const d = de(c);
    nt(d, o, s, r, i) && Jn(d, e, t, s, n, r, i);
    const h = he(c, u);
    nt(h, o, s, r, i) && Jn(h, e, t, s, n, r, i);
  }
}
const uo = ["x", "y", "z"];
function fo(c, e, t, s, n, r) {
  q.setBuffer(c._roots[e]);
  const i = Zn(0, c, t, s, n, r);
  return q.clearBuffer(), i;
}
function Zn(c, e, t, s, n, r) {
  const { float32Array: i, uint16Array: o, uint32Array: a } = q;
  let u = c * 2;
  if (se(u, o)) {
    const l = pe(c, a), d = ye(u, o);
    return so(e, t, s, l, d, n, r);
  } else {
    const l = wn(c, a), d = uo[l], x = s.direction[d] >= 0;
    let y, m;
    x ? (y = de(c), m = he(c, a)) : (y = he(c, a), m = de(c));
    const p = nt(y, i, s, n, r) ? Zn(y, e, t, s, n, r) : null;
    if (p) {
      const w = p.point[d];
      if (x ? w <= i[m + l] : (
        // min bounding data
        w >= i[m + l + 3]
      ))
        return p;
    }
    const g = nt(m, i, s, n, r) ? Zn(m, e, t, s, n, r) : null;
    return p && g ? p.distance <= g.distance ? p : g : p || g || null;
  }
}
const rn = /* @__PURE__ */ new Pe(), _t = /* @__PURE__ */ new Ie(), wt = /* @__PURE__ */ new Ie(), Nt = /* @__PURE__ */ new Re(), Gs = /* @__PURE__ */ new ve(), on = /* @__PURE__ */ new ve();
function ho(c, e, t, s) {
  q.setBuffer(c._roots[e]);
  const n = Qn(0, c, t, s);
  return q.clearBuffer(), n;
}
function Qn(c, e, t, s, n = null) {
  const { float32Array: r, uint16Array: i, uint32Array: o } = q;
  let a = c * 2;
  if (n === null && (t.boundingBox || t.computeBoundingBox(), Gs.set(t.boundingBox.min, t.boundingBox.max, s), n = Gs), se(a, i)) {
    const f = e.geometry, l = f.index, d = f.attributes.position, h = t.index, x = t.attributes.position, y = pe(c, o), m = ye(a, i);
    if (Nt.copy(s).invert(), t.boundsTree)
      return te(c, r, on), on.matrix.copy(Nt), on.needsUpdate = !0, t.boundsTree.shapecast({
        intersectsBounds: (p) => on.intersectsBox(p),
        intersectsTriangle: (p) => {
          p.a.applyMatrix4(s), p.b.applyMatrix4(s), p.c.applyMatrix4(s), p.needsUpdate = !0;
          for (let _ = y * 3, g = (m + y) * 3; _ < g; _ += 3)
            if (ie(wt, _, l, d), wt.needsUpdate = !0, p.intersectsTriangle(wt))
              return !0;
          return !1;
        }
      });
    {
      const v = Mn(t);
      for (let p = y * 3, _ = (m + y) * 3; p < _; p += 3) {
        ie(_t, p, l, d), _t.a.applyMatrix4(Nt), _t.b.applyMatrix4(Nt), _t.c.applyMatrix4(Nt), _t.needsUpdate = !0;
        for (let g = 0, w = v * 3; g < w; g += 3)
          if (ie(wt, g, h, x), wt.needsUpdate = !0, _t.intersectsTriangle(wt))
            return !0;
      }
    }
  } else {
    const f = de(c), l = he(c, o);
    return te(f, r, rn), !!(n.intersectsBox(rn) && Qn(f, e, t, s, n) || (te(l, r, rn), n.intersectsBox(rn) && Qn(l, e, t, s, n)));
  }
}
const an = /* @__PURE__ */ new Re(), Fn = /* @__PURE__ */ new ve(), Lt = /* @__PURE__ */ new ve(), mo = /* @__PURE__ */ new O(), po = /* @__PURE__ */ new O(), go = /* @__PURE__ */ new O(), xo = /* @__PURE__ */ new O();
function yo(c, e, t, s = {}, n = {}, r = 0, i = 1 / 0) {
  e.boundingBox || e.computeBoundingBox(), Fn.set(e.boundingBox.min, e.boundingBox.max, t), Fn.needsUpdate = !0;
  const o = c.geometry, a = o.attributes.position, u = o.index, f = e.attributes.position, l = e.index, d = be.getPrimitive(), h = be.getPrimitive();
  let x = mo, y = po, m = null, v = null;
  n && (m = go, v = xo);
  let p = 1 / 0, _ = null, g = null;
  return an.copy(t).invert(), Lt.matrix.copy(an), c.shapecast(
    {
      boundsTraverseOrder: (w) => Fn.distanceToBox(w),
      intersectsBounds: (w, M, A) => A < p && A < i ? (M && (Lt.min.copy(w.min), Lt.max.copy(w.max), Lt.needsUpdate = !0), !0) : !1,
      intersectsRange: (w, M) => {
        if (e.boundsTree)
          return e.boundsTree.shapecast({
            boundsTraverseOrder: (T) => Lt.distanceToBox(T),
            intersectsBounds: (T, S, b) => b < p && b < i,
            intersectsRange: (T, S) => {
              for (let b = T, E = T + S; b < E; b++) {
                ie(h, 3 * b, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
                for (let R = w, I = w + M; R < I; R++) {
                  ie(d, 3 * R, u, a), d.needsUpdate = !0;
                  const P = d.distanceToTriangle(h, x, m);
                  if (P < p && (y.copy(x), v && v.copy(m), p = P, _ = R, g = b), P < r)
                    return !0;
                }
              }
            }
          });
        {
          const A = Mn(e);
          for (let T = 0, S = A; T < S; T++) {
            ie(h, 3 * T, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
            for (let b = w, E = w + M; b < E; b++) {
              ie(d, 3 * b, u, a), d.needsUpdate = !0;
              const R = d.distanceToTriangle(h, x, m);
              if (R < p && (y.copy(x), v && v.copy(m), p = R, _ = b, g = T), R < r)
                return !0;
            }
          }
        }
      }
    }
  ), be.releasePrimitive(d), be.releasePrimitive(h), p === 1 / 0 ? null : (s.point ? s.point.copy(y) : s.point = y.clone(), s.distance = p, s.faceIndex = _, n && (n.point ? n.point.copy(v) : n.point = v.clone(), n.point.applyMatrix4(an), y.applyMatrix4(an), n.distance = y.sub(n.point).length(), n.faceIndex = g), s);
}
function vo(c, e = null) {
  e && Array.isArray(e) && (e = new Set(e));
  const t = c.geometry, s = t.index ? t.index.array : null, n = t.attributes.position;
  let r, i, o, a, u = 0;
  const f = c._roots;
  for (let d = 0, h = f.length; d < h; d++)
    r = f[d], i = new Uint32Array(r), o = new Uint16Array(r), a = new Float32Array(r), l(0, u), u += r.byteLength;
  function l(d, h, x = !1) {
    const y = d * 2;
    if (se(y, o)) {
      const m = pe(d, i), v = ye(y, o);
      let p = 1 / 0, _ = 1 / 0, g = 1 / 0, w = -1 / 0, M = -1 / 0, A = -1 / 0;
      for (let T = m, S = m + v; T < S; T++) {
        const b = 3 * c.resolveTriangleIndex(T);
        for (let E = 0; E < 3; E++) {
          let R = b + E;
          R = s ? s[R] : R;
          const I = n.getX(R), P = n.getY(R), C = n.getZ(R);
          I < p && (p = I), I > w && (w = I), P < _ && (_ = P), P > M && (M = P), C < g && (g = C), C > A && (A = C);
        }
      }
      return a[d + 0] !== p || a[d + 1] !== _ || a[d + 2] !== g || a[d + 3] !== w || a[d + 4] !== M || a[d + 5] !== A ? (a[d + 0] = p, a[d + 1] = _, a[d + 2] = g, a[d + 3] = w, a[d + 4] = M, a[d + 5] = A, !0) : !1;
    } else {
      const m = de(d), v = he(d, i);
      let p = x, _ = !1, g = !1;
      if (e) {
        if (!p) {
          const b = m / ce + h / fe, E = v / ce + h / fe;
          _ = e.has(b), g = e.has(E), p = !_ && !g;
        }
      } else
        _ = !0, g = !0;
      const w = p || _, M = p || g;
      let A = !1;
      w && (A = l(m, h, p));
      let T = !1;
      M && (T = l(v, h, p));
      const S = A || T;
      if (S)
        for (let b = 0; b < 3; b++) {
          const E = m + b, R = v + b, I = a[E], P = a[E + 3], C = a[R], L = a[R + 3];
          a[d + b] = I < C ? I : C, a[d + b + 3] = P > L ? P : L;
        }
      return S;
    }
  }
}
function _o(c, e, t, s, n, r, i) {
  q.setBuffer(c._roots[e]), es(0, c, t, s, n, r, i), q.clearBuffer();
}
function es(c, e, t, s, n, r, i) {
  const { float32Array: o, uint16Array: a, uint32Array: u } = q, f = c * 2;
  if (se(f, a)) {
    const d = pe(c, u), h = ye(f, a);
    oo(e, t, s, d, h, n, r, i);
  } else {
    const d = de(c);
    nt(d, o, s, r, i) && es(d, e, t, s, n, r, i);
    const h = he(c, u);
    nt(h, o, s, r, i) && es(h, e, t, s, n, r, i);
  }
}
const wo = ["x", "y", "z"];
function To(c, e, t, s, n, r) {
  q.setBuffer(c._roots[e]);
  const i = ts(0, c, t, s, n, r);
  return q.clearBuffer(), i;
}
function ts(c, e, t, s, n, r) {
  const { float32Array: i, uint16Array: o, uint32Array: a } = q;
  let u = c * 2;
  if (se(u, o)) {
    const l = pe(c, a), d = ye(u, o);
    return ao(e, t, s, l, d, n, r);
  } else {
    const l = wn(c, a), d = wo[l], x = s.direction[d] >= 0;
    let y, m;
    x ? (y = de(c), m = he(c, a)) : (y = he(c, a), m = de(c));
    const p = nt(y, i, s, n, r) ? ts(y, e, t, s, n, r) : null;
    if (p) {
      const w = p.point[d];
      if (x ? w <= i[m + l] : (
        // min bounding data
        w >= i[m + l + 3]
      ))
        return p;
    }
    const g = nt(m, i, s, n, r) ? ts(m, e, t, s, n, r) : null;
    return p && g ? p.distance <= g.distance ? p : g : p || g || null;
  }
}
const cn = /* @__PURE__ */ new Pe(), Tt = /* @__PURE__ */ new Ie(), Mt = /* @__PURE__ */ new Ie(), Ft = /* @__PURE__ */ new Re(), js = /* @__PURE__ */ new ve(), ln = /* @__PURE__ */ new ve();
function Mo(c, e, t, s) {
  q.setBuffer(c._roots[e]);
  const n = ns(0, c, t, s);
  return q.clearBuffer(), n;
}
function ns(c, e, t, s, n = null) {
  const { float32Array: r, uint16Array: i, uint32Array: o } = q;
  let a = c * 2;
  if (n === null && (t.boundingBox || t.computeBoundingBox(), js.set(t.boundingBox.min, t.boundingBox.max, s), n = js), se(a, i)) {
    const f = e.geometry, l = f.index, d = f.attributes.position, h = t.index, x = t.attributes.position, y = pe(c, o), m = ye(a, i);
    if (Ft.copy(s).invert(), t.boundsTree)
      return te(c, r, ln), ln.matrix.copy(Ft), ln.needsUpdate = !0, t.boundsTree.shapecast({
        intersectsBounds: (p) => ln.intersectsBox(p),
        intersectsTriangle: (p) => {
          p.a.applyMatrix4(s), p.b.applyMatrix4(s), p.c.applyMatrix4(s), p.needsUpdate = !0;
          for (let _ = y, g = m + y; _ < g; _++)
            if (ie(Mt, 3 * e.resolveTriangleIndex(_), l, d), Mt.needsUpdate = !0, p.intersectsTriangle(Mt))
              return !0;
          return !1;
        }
      });
    {
      const v = Mn(t);
      for (let p = y, _ = m + y; p < _; p++) {
        const g = e.resolveTriangleIndex(p);
        ie(Tt, 3 * g, l, d), Tt.a.applyMatrix4(Ft), Tt.b.applyMatrix4(Ft), Tt.c.applyMatrix4(Ft), Tt.needsUpdate = !0;
        for (let w = 0, M = v * 3; w < M; w += 3)
          if (ie(Mt, w, h, x), Mt.needsUpdate = !0, Tt.intersectsTriangle(Mt))
            return !0;
      }
    }
  } else {
    const f = de(c), l = he(c, o);
    return te(f, r, cn), !!(n.intersectsBox(cn) && ns(f, e, t, s, n) || (te(l, r, cn), n.intersectsBox(cn) && ns(l, e, t, s, n)));
  }
}
const un = /* @__PURE__ */ new Re(), Un = /* @__PURE__ */ new ve(), Ut = /* @__PURE__ */ new ve(), Ao = /* @__PURE__ */ new O(), bo = /* @__PURE__ */ new O(), Ro = /* @__PURE__ */ new O(), So = /* @__PURE__ */ new O();
function Eo(c, e, t, s = {}, n = {}, r = 0, i = 1 / 0) {
  e.boundingBox || e.computeBoundingBox(), Un.set(e.boundingBox.min, e.boundingBox.max, t), Un.needsUpdate = !0;
  const o = c.geometry, a = o.attributes.position, u = o.index, f = e.attributes.position, l = e.index, d = be.getPrimitive(), h = be.getPrimitive();
  let x = Ao, y = bo, m = null, v = null;
  n && (m = Ro, v = So);
  let p = 1 / 0, _ = null, g = null;
  return un.copy(t).invert(), Ut.matrix.copy(un), c.shapecast(
    {
      boundsTraverseOrder: (w) => Un.distanceToBox(w),
      intersectsBounds: (w, M, A) => A < p && A < i ? (M && (Ut.min.copy(w.min), Ut.max.copy(w.max), Ut.needsUpdate = !0), !0) : !1,
      intersectsRange: (w, M) => {
        if (e.boundsTree) {
          const A = e.boundsTree;
          return A.shapecast({
            boundsTraverseOrder: (T) => Ut.distanceToBox(T),
            intersectsBounds: (T, S, b) => b < p && b < i,
            intersectsRange: (T, S) => {
              for (let b = T, E = T + S; b < E; b++) {
                const R = A.resolveTriangleIndex(b);
                ie(h, 3 * R, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
                for (let I = w, P = w + M; I < P; I++) {
                  const C = c.resolveTriangleIndex(I);
                  ie(d, 3 * C, u, a), d.needsUpdate = !0;
                  const L = d.distanceToTriangle(h, x, m);
                  if (L < p && (y.copy(x), v && v.copy(m), p = L, _ = I, g = b), L < r)
                    return !0;
                }
              }
            }
          });
        } else {
          const A = Mn(e);
          for (let T = 0, S = A; T < S; T++) {
            ie(h, 3 * T, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
            for (let b = w, E = w + M; b < E; b++) {
              const R = c.resolveTriangleIndex(b);
              ie(d, 3 * R, u, a), d.needsUpdate = !0;
              const I = d.distanceToTriangle(h, x, m);
              if (I < p && (y.copy(x), v && v.copy(m), p = I, _ = b, g = T), I < r)
                return !0;
            }
          }
        }
      }
    }
  ), be.releasePrimitive(d), be.releasePrimitive(h), p === 1 / 0 ? null : (s.point ? s.point.copy(y) : s.point = y.clone(), s.distance = p, s.faceIndex = _, n && (n.point ? n.point.copy(v) : n.point = v.clone(), n.point.applyMatrix4(un), y.applyMatrix4(un), n.distance = y.sub(n.point).length(), n.faceIndex = g), s);
}
function Ks(c, e, t) {
  return c === null ? null : (c.point.applyMatrix4(e.matrixWorld), c.distance = c.point.distanceTo(t.ray.origin), c.object = e, c);
}
const fn = /* @__PURE__ */ new ve(), dn = /* @__PURE__ */ new Oi(), Ys = /* @__PURE__ */ new O(), Ws = /* @__PURE__ */ new Re(), Xs = /* @__PURE__ */ new O(), On = ["getX", "getY", "getZ"];
class vn extends Xr {
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
    const o = new vn(t, { ...s, [us]: !0 });
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
        for (let x = 0, y = l.byteLength / fe; x < y; x++) {
          const m = ce * x, v = 2 * m;
          se(v, h) || (d[m + 6] = d[m + 6] / ce - x);
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
      const x = i[On[h]](f), y = i[On[h]](l), m = i[On[h]](d);
      let v = x;
      y < v && (v = y), m < v && (v = m);
      let p = x;
      y > p && (p = y), m > p && (p = m), t[s + h] = v, t[s + h + 3] = p;
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
    for (let x = e, y = e + t; x < y; x++) {
      const v = (r ? r[x] : x) * 3, p = (x - h) * 6;
      let _ = v + 0, g = v + 1, w = v + 2;
      o && (_ = o[_], g = o[g], w = o[w]), a || (_ = _ * l + f, g = g * l + f, w = w * l + f);
      for (let M = 0; M < 3; M++) {
        let A, T, S;
        a ? (A = i[d[M]](_), T = i[d[M]](g), S = i[d[M]](w)) : (A = u[_ + M], T = u[g + M], S = u[w + M]);
        let b = A;
        T < b && (b = T), S < b && (b = S);
        let E = A;
        T > E && (E = T), S > E && (E = S);
        const R = (E - b) / 2, I = M * 2;
        s[p + I + 0] = b + R, s[p + I + 1] = R + (Math.abs(b) + R) * pn;
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
    Ws.copy(e.matrixWorld).invert(), dn.copy(t.ray).applyMatrix4(Ws), Xs.setFromMatrixScale(e.matrixWorld), Ys.copy(dn.direction).multiply(Xs);
    const r = Ys.length(), i = t.near / r, o = t.far / r;
    if (t.firstHitOnly === !0) {
      let a = this.raycastFirst(dn, n, i, o);
      a = Ks(a, e, t), a && s.push(a);
    } else {
      const a = this.raycast(dn, n, i, o);
      for (let u = 0, f = a.length; u < f; u++) {
        const l = Ks(a[u], e, t);
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
    return (this.indirect ? vo : ro)(this, e);
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
  raycast(e, t = zn, s = 0, n = 1 / 0) {
    const r = this._roots, i = [], o = this.indirect ? _o : lo;
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
  raycastFirst(e, t = zn, s = 0, n = 1 / 0) {
    const r = this._roots;
    let i = null;
    const o = this.indirect ? To : fo;
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
    const n = this._roots, r = this.indirect ? Mo : ho;
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
    const t = be.getPrimitive(), s = super.shapecast(
      {
        ...e,
        intersectsPrimitive: e.intersectsTriangle,
        scratchPrimitive: t,
        // TODO: is the performance significant enough for the added complexity here?
        // can we just use one function?
        iterate: this.indirect ? co : io
      }
    );
    return be.releasePrimitive(t), s;
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
    const i = be.getPrimitive(), o = this.geometry.index, a = this.geometry.attributes.position, u = this.indirect ? (x) => {
      const y = this.resolveTriangleIndex(x);
      ie(i, y * 3, o, a);
    } : (x) => {
      ie(i, x * 3, o, a);
    }, f = be.getPrimitive(), l = e.geometry.index, d = e.geometry.attributes.position, h = e.indirect ? (x) => {
      const y = e.resolveTriangleIndex(x);
      ie(f, y * 3, l, d);
    } : (x) => {
      ie(f, x * 3, l, d);
    };
    if (r) {
      if (!(e instanceof vn))
        throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');
      const x = (y, m, v, p, _, g, w, M) => {
        for (let A = v, T = v + p; A < T; A++) {
          h(A), f.a.applyMatrix4(t), f.b.applyMatrix4(t), f.c.applyMatrix4(t), f.needsUpdate = !0;
          for (let S = y, b = y + m; S < b; S++)
            if (u(S), i.needsUpdate = !0, r(i, f, S, A, _, g, w, M))
              return !0;
        }
        return !1;
      };
      if (n) {
        const y = n;
        n = function(m, v, p, _, g, w, M, A) {
          return y(m, v, p, _, g, w, M, A) ? !0 : x(m, v, p, _, g, w, M, A);
        };
      } else
        n = x;
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
    return (this.indirect ? Eo : yo)(
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
    return Qr(
      this,
      e,
      t,
      s,
      n
    );
  }
}
function Do(c) {
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
function Io(c) {
  switch (c) {
    case 1:
      return Gi;
    case 2:
      return zi;
    case 3:
      return xn;
    case 4:
      return xn;
  }
}
function $s(c) {
  switch (c) {
    case 1:
      return Vi;
    case 2:
      return di;
    case 3:
      return jn;
    case 4:
      return jn;
  }
}
class bi extends Gn {
  constructor() {
    super(), this.minFilter = Qe, this.magFilter = Qe, this.generateMipmaps = !1, this.overrideItemSize = null, this._forcedType = null;
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
          f = tt;
          break;
        case Uint8Array:
        case Uint16Array:
        case Uint32Array:
          f = Ht;
          break;
        case Int8Array:
        case Int16Array:
        case Int32Array:
          f = Rn;
          break;
      }
    let d, h, x, y, m = Do(r);
    switch (f) {
      case tt:
        x = 1, h = Io(r), o && u === 1 ? (y = a, m += "8", a === Uint8Array ? d = Vt : (d = _s, m += "_SNORM")) : (y = Float32Array, m += "32F", d = tt);
        break;
      case Rn:
        m += u * 8 + "I", x = o ? Math.pow(2, a.BYTES_PER_ELEMENT * 8 - 1) : 1, h = $s(r), u === 1 ? (y = Int8Array, d = _s) : u === 2 ? (y = Int16Array, d = Hi) : (y = Int32Array, d = Rn);
        break;
      case Ht:
        m += u * 8 + "UI", x = o ? Math.pow(2, a.BYTES_PER_ELEMENT * 8 - 1) : 1, h = $s(r), u === 1 ? (y = Uint8Array, d = Vt) : u === 2 ? (y = Uint16Array, d = ki) : (y = Uint32Array, d = Ht);
        break;
    }
    l === 3 && (h === xn || h === jn) && (l = 4);
    const v = Math.ceil(Math.sqrt(i)) || 1, p = l * v * v, _ = new y(p), g = e.normalized;
    e.normalized = !1;
    for (let w = 0; w < i; w++) {
      const M = l * w;
      _[M] = e.getX(w) / x, r >= 2 && (_[M + 1] = e.getY(w) / x), r >= 3 && (_[M + 2] = e.getZ(w) / x, l === 4 && (_[M + 3] = 1)), r >= 4 && (_[M + 3] = e.getW(w) / x);
    }
    e.normalized = g, this.internalFormat = m, this.format = h, this.type = d, this.image.width = v, this.image.height = v, this.image.data = _, this.needsUpdate = !0, this.dispose(), e.itemSize = s, e.count = n;
  }
}
class Po extends bi {
  constructor() {
    super(), this._forcedType = Ht;
  }
}
class Bo extends bi {
  constructor() {
    super(), this._forcedType = tt;
  }
}
class Co {
  constructor() {
    this.index = new Po(), this.position = new Bo(), this.bvhBounds = new Gn(), this.bvhContents = new Gn(), this._cachedIndexAttr = null, this.index.overrideItemSize = 3;
  }
  /**
   * Updates the object and associated textures with data from the provided BVH.
   *
   * @param {MeshBVH} bvh
   * @returns {void}
   */
  updateFrom(e) {
    const { geometry: t } = e;
    if (Lo(e, this.bvhBounds, this.bvhContents), this.position.updateFrom(t.attributes.position), e.indirect) {
      const s = e._indirectBuffer;
      if (this._cachedIndexAttr === null || this._cachedIndexAttr.count !== s.length)
        if (t.index)
          this._cachedIndexAttr = t.index.clone();
        else {
          const n = Ai(Tn(t));
          this._cachedIndexAttr = new Rt(n, 1, !1);
        }
      No(t, s, this._cachedIndexAttr), this.index.updateFrom(this._cachedIndexAttr);
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
function No(c, e, t) {
  const s = t.array, n = c.index ? c.index.array : null;
  for (let r = 0, i = e.length; r < i; r++) {
    const o = 3 * r, a = 3 * e[r];
    for (let u = 0; u < 3; u++)
      s[o + u] = n ? n[a + u] : a + u;
  }
}
function Lo(c, e, t) {
  const s = c._roots;
  if (s.length !== 1)
    throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");
  const n = s[0], r = new Uint16Array(n), i = new Uint32Array(n), o = new Float32Array(n), a = n.byteLength / fe, u = 2 * Math.ceil(Math.sqrt(a / 2)), f = new Float32Array(4 * u * u), l = Math.ceil(Math.sqrt(a)), d = new Uint32Array(2 * l * l);
  for (let h = 0; h < a; h++) {
    const x = h * fe / 4, y = x * 2, m = x;
    for (let v = 0; v < 3; v++)
      f[8 * h + 0 + v] = o[m + 0 + v], f[8 * h + 4 + v] = o[m + 3 + v];
    if (se(y, r)) {
      const v = ye(y, r), p = pe(x, i), _ = Ir | v;
      d[h * 2 + 0] = _, d[h * 2 + 1] = p;
    } else {
      const v = i[x + 6], p = wn(x, i);
      d[h * 2 + 0] = p, d[h * 2 + 1] = v;
    }
  }
  e.image.data = f, e.image.width = u, e.image.height = u, e.format = xn, e.type = tt, e.internalFormat = "RGBA32F", e.minFilter = Qe, e.magFilter = Qe, e.generateMipmaps = !1, e.needsUpdate = !0, e.dispose(), t.image.data = d, t.image.width = l, t.image.height = l, t.format = di, t.type = Ht, t.internalFormat = "RG32UI", t.minFilter = Qe, t.magFilter = Qe, t.generateMipmaps = !1, t.needsUpdate = !0, t.dispose();
}
const Fo = (
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
), Uo = (
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
), Oo = (
  /* glsl */
  `
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`
), ko = Oo, Ho = `
	${Fo}
	${Uo}
`, pt = () => {
  const c = _n.useContext(cs);
  if (!c)
    throw new Error("useMainContext must be used within MainContextProvider");
  return c;
};
function Vo(c) {
  c.updateMatrixWorld(!0);
  const e = new B.Box3(), t = new B.Vector3();
  let s = !1;
  const n = c.parent, r = n ? new B.Matrix4().copy(n.matrixWorld).invert() : new B.Matrix4(), i = new B.Matrix4();
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
function zo(c, e = -Math.PI / 4, t = -Math.PI / 10, s = Math.PI / 3) {
  c.rotation.set(0, 0, 0), c.position.set(0, 0, 0), c.updateMatrixWorld(!0);
  const n = new B.Box3().setFromObject(c), r = new B.Vector3();
  n.getCenter(r);
  const i = new B.Vector3();
  n.getSize(i), i.length() === 0 && (i.set(1, 1, 1), n.min.set(-0.5, -0.5, -0.5), n.max.set(0.5, 0.5, 0.5), r.set(0, 0, 0)), c.rotation.set(e, t, s), c.updateMatrixWorld(!0);
  const o = Vo(c), a = new B.Vector3();
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
class ut extends B.TextureLoader {
  load(e, t, s, n) {
    if (!e) {
      const r = new B.Texture();
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
        const i = new B.Texture();
        t && t(i);
      }
    );
  }
}
const Go = (
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
), jo = (
  /* glsl */
  `
  precision highp float;
  precision highp sampler2D;
  precision highp isampler2D;

  ${ko}
  ${Ho}

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
class Ko extends B.ShaderMaterial {
  constructor({
    geometry: e,
    bvh: t,
    envMap: s,
    backgroundTexture: n = null,
    resolution: r = new B.Vector2(1024, 768),
    ior: i = 2.4,
    bounces: o = 3,
    aberrationStrength: a = 1e-3,
    fresnel: u = 0.01,
    reflectivity: f = 1,
    color: l = 16777215,
    blur: d = 0.12,
    envRotation: h = 0,
    highlightColor: x = 16777215,
    highlightTolerance: y = 1,
    attenuationColor: m = 16777215,
    attenuationDistance: v = 1
  }) {
    const p = new Co();
    p.updateFrom(t), super({
      glslVersion: B.GLSL3,
      vertexShader: Go,
      fragmentShader: jo,
      uniforms: {
        bvh: { value: p },
        tDiffuse: { value: n },
        resolution: { value: r },
        envMap: { value: s },
        uColor: { value: new B.Color(l) },
        uIOR: { value: i },
        uAberration: { value: a },
        uFresnel: { value: u },
        uReflectivity: { value: f },
        uBlur: { value: d },
        uEnvRotation: { value: h },
        uHighlightColor: { value: new B.Color(x) },
        uHighlightTolerance: { value: y },
        uAttenuationColor: { value: new B.Color(m) },
        uAttenuationDistance: { value: v },
        uBounces: { value: o },
        uModelMatrix: { value: new B.Matrix4() },
        uModelMatrixInverse: { value: new B.Matrix4() }
      },
      transparent: !0,
      depthWrite: !0
    }), this.onBeforeRender = (_, g, w, M, A) => {
      this.uniforms.uModelMatrix.value.copy(A.matrixWorld), this.uniforms.uModelMatrixInverse.value.copy(A.matrixWorld).invert();
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
}, qs = (c, e) => {
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
function Yo(c, e, t, s, n, r, i, o = 0) {
  const a = ["♥", "♥︎♥︎", "○○", "⚭", "∞"];
  if (!a.some((m) => e.includes(m)) || !i) {
    c.textAlign = "center", c.fillText(e, t, s), o > 0 && c.strokeText(e, t, s);
    return;
  }
  const f = e.split(/(♥︎♥︎|○○|[♥⚭∞])/u), l = [];
  c.font = `bold ${n}px ${r}`;
  const d = n;
  for (const m of f)
    if (m)
      if (a.includes(m)) {
        const v = i[m];
        if (v && v.img) {
          const p = v.width, _ = v.height, g = _ > 0 ? p / _ * d : 0;
          l.push({
            type: "symbol",
            text: m,
            width: g,
            img: v.img
          });
        } else {
          const p = c.measureText(m).width;
          l.push({ type: "text", text: m, width: p });
        }
      } else {
        const v = c.measureText(m).width;
        l.push({ type: "text", text: m, width: v });
      }
  const h = l.reduce((m, v) => m + v.width, 0);
  let y = t - h / 2;
  c.textAlign = "left";
  for (const m of l) {
    if (m.type === "symbol" && m.img) {
      const v = s - d / 2;
      c.drawImage(m.img, y, v, m.width, d);
    } else
      c.fillText(m.text, y, s), o > 0 && c.strokeText(m.text, y, s);
    y += m.width;
  }
}
let Me = null;
function Js(c, e, t) {
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
        const x = i[f], y = s[u + x], m = y === r ? r : y * y;
        let v = 0;
        if (h === r ? v = r : m === r ? v = 0 : v = 1 + Math.floor((l * l - x * x + (h - m)) / (2 * (l - x))), v < o[f])
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
      const d = i[f], h = l - d, x = s[u + d], y = x === r ? r : x * x, m = h * h + y;
      n[u + l] = Math.sqrt(m);
    }
  }
  return n;
}
function ss(c) {
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
    strokeWidth: x = 0
  } = c, m = document.createElement("canvas").getContext("2d");
  if (!m)
    throw new Error("2D Canvas Context is not supported in this environment.");
  const v = 20;
  m.font = `bold ${v}px ${r}`;
  let p = 0;
  const _ = ["♥", "♥︎♥︎", "○○", "⚭", "∞"];
  if (!_.some((H) => e.includes(H)) || !f)
    p = m.measureText(e).width;
  else {
    const H = e.split(/(♥︎♥︎|○○|[♥⚭∞])/u), j = v;
    for (const re of H)
      if (re)
        if (_.includes(re)) {
          const me = f[re];
          if (me && me.img) {
            const ue = me.width, ge = me.height, oe = ge > 0 ? ue / ge * j : 0;
            p += oe;
          } else
            p += m.measureText(re).width;
        } else
          p += m.measureText(re).width;
  }
  const w = 0.85, M = p / v + i * 8 / n, A = 1 + i * 8 / n, T = M > 0 ? (t * w - 20 - Math.abs(u) * 2) / M : 1 / 0, S = A > 0 ? (s * w - 20 - Math.abs(a) * 2) / A : 1 / 0, R = m.measureText("AaBbCcDdEeFfGgHhIiJj").width / v + i * 8 / n, I = R > 0 ? (t * w - 20 - Math.abs(u) * 2) / R : 1 / 0, P = Math.max(
    1,
    Math.floor(Math.min(T, S, I))
  );
  let C = "";
  f && (C = Object.keys(f).sort().map((H) => `${H}:${f[H]?.img.src || ""}`).join(","));
  const L = 2, k = t * L, V = s * L;
  let J, Y;
  if (Me && Me.text === e && Me.fontFamily === r && Me.width === t && Me.height === s && Me.offsetY === a && Me.offsetX === u && Me.symbolsKey === C && Me.strokeWidth === x)
    J = Me.sdf, Y = Me.coverage;
  else {
    const H = document.createElement("canvas");
    H.width = k, H.height = V;
    const j = H.getContext("2d");
    if (!j)
      throw new Error("Could not get 2D context for temp canvas");
    j.fillStyle = "#FFFFFF", j.fillRect(0, 0, k, V), j.fillStyle = "#000000", j.strokeStyle = "#000000", j.lineWidth = x * L;
    const re = P * L;
    j.font = `bold ${re}px ${r}`, j.textBaseline = "middle";
    const me = k / 2 + u * L, ue = V / 2 + a * L;
    Yo(
      j,
      e,
      me,
      ue,
      re,
      r,
      f,
      x * L
    );
    const ge = j.getImageData(0, 0, k, V), oe = new Uint8Array(k * V);
    Y = new Uint8Array(k * V);
    for (let W = 0; W < k * V; W++) {
      const We = ge.data[W * 4];
      oe[W] = We < 128 ? 1 : 0, Y[W] = 255 - We;
    }
    const Oe = Js(oe, k, V), Be = new Uint8Array(k * V);
    for (let W = 0; W < k * V; W++)
      Be[W] = oe[W] === 0 ? 1 : 0;
    const we = Js(Be, k, V);
    J = new Float32Array(k * V);
    for (let W = 0; W < k * V; W++)
      J[W] = Oe[W] - we[W];
    Me = {
      text: e,
      fontFamily: r,
      width: t,
      height: s,
      offsetY: a,
      offsetX: u,
      symbolsKey: C,
      strokeWidth: x,
      sdf: J,
      coverage: Y
    };
  }
  const D = document.createElement("canvas");
  D.width = t, D.height = s;
  const F = D.getContext("2d");
  if (!F)
    throw new Error("2D Canvas Context is not supported in this environment.");
  const U = document.createElement("canvas");
  U.width = k, U.height = V;
  const G = U.getContext("2d");
  if (!G)
    throw new Error("Could not get 2D context for tempOutCanvas");
  const le = G.createImageData(k, V), _e = le.data;
  for (let H = 0; H < k * V; H++) {
    let j = J[H];
    const re = Math.abs(j), me = 1.5 * L;
    if (re < me) {
      const Se = (me - re) / me, Et = (0.5 - Y[H] / 255) * me;
      j = (1 - Se) * j + Se * Et;
    }
    let ue = 0;
    if (j >= 0) {
      const Se = 1.5 * L;
      ue = j / Se;
    } else {
      const Se = Math.max(0.1, l * L);
      ue = j / Se;
    }
    const oe = (Math.max(-1, Math.min(1, ue)) + 1) / 2, Oe = 3 * oe * oe - 2 * oe * oe * oe, Be = (1 - h) * oe + h * Oe, we = 1 - d + d * Be, W = Math.round(255 * we), We = H * 4;
    _e[We] = W, _e[We + 1] = W, _e[We + 2] = W, _e[We + 3] = 255;
  }
  return G.putImageData(le, 0, 0), F.imageSmoothingEnabled = !0, F.imageSmoothingQuality = "high", F.drawImage(U, 0, 0, t, s), D;
}
function Wo(c, e, t) {
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
function Xo(c, e = 4) {
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
      const d = u(l - 1, f), h = u(l + 1, f), x = u(l, f - 1), y = u(l, f + 1), m = (h - d) / 255 * e, v = (y - x) / 255 * e, p = 1, _ = Math.sqrt(m * m + v * v + p * p), g = m / _, w = v / _, M = p / _, A = (f * t + l) * 4;
      a.data[A] = Math.round((g + 1) * 127.5), a.data[A + 1] = Math.round((w + 1) * 127.5), a.data[A + 2] = Math.round((M + 1) * 127.5), a.data[A + 3] = 255;
    }
  return r.putImageData(a, 0, 0), n;
}
const $o = Ye(({ textOffsetX: c = 0 }) => {
  const { design3DManager: e } = pt(), { ringManager: t } = e, s = t.engravingText || "", n = t.engravingFont;
  return ae(() => {
    if (!s) {
      console.log("BBoxEngrave: No text engraved");
      return;
    }
    const r = ss({
      text: s,
      fontFamily: n,
      mode: "engrave",
      blur: 0.01,
      offsetY: 0,
      offsetX: c
    }), i = r.getContext("2d");
    if (!i) return;
    const { width: o, height: a } = r, f = i.getImageData(0, 0, o, a).data;
    let l = o, d = 0, h = a, x = 0, y = !1;
    for (let m = 0; m < a; m++)
      for (let v = 0; v < o; v++) {
        const p = (m * o + v) * 4, _ = f[p], g = f[p + 1], w = f[p + 2];
        (_ < 240 || g < 240 || w < 240) && (v < l && (l = v), v > d && (d = v), m < h && (h = m), m > x && (x = m), y = !0);
      }
    y ? (console.log(`BBoxEngrave - Text: "${s}", OffsetX: ${c}`), console.log(
      `Bounding Box -> minX: ${l}, maxX: ${d}, minY: ${h}, maxY: ${x}`
    )) : console.log(
      `BBoxEngrave - Text: "${s}", OffsetX: ${c} -> No pixels found`
    );
  }, [s, n, c]), null;
}), qo = Ye(
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
    } = t, { scene: x } = ii(c), y = hn(() => {
      if (!x) return null;
      let M = null;
      return x.traverse((A) => {
        const T = A;
        if (T.isMesh) {
          const S = T.name, b = S.toLowerCase();
          if (S === "Engraving Mesh" || S === "Engraving Metal" || S === "Engraving_Mesh" || S === "Engraving_Metal" || b.includes("engrav")) {
            const R = b.includes("nodiamond");
            h ? R && M || (M = T) : R ? M = T : M || (M = T);
          }
        }
      }), M;
    }, [x, h]), [m, v] = si({ normalTexture: null, aoTexture: null });
    ae(() => {
      if (s !== 2 || !n && !r) {
        v((S) => (S.normalTexture?.dispose(), S.aoTexture?.dispose(), { normalTexture: null, aoTexture: null })), t.setEngravingCanvas(null), t.setNormalMapCanvas(null);
        return;
      }
      let M = !0;
      const A = (S, b) => new Promise((E) => {
        Wo(S, b, (R, I, P) => {
          E(R ? { img: R, width: I, height: P } : null);
        });
      });
      return (async () => {
        const S = ["♥", "♥︎♥︎", "○○", "⚭", "∞"], b = {
          "♥": "/message/OneH.svg",
          "♥︎♥︎": "/message/TwoH.svg",
          "○○": "/message/TwoR.svg",
          "⚭": "/message/TwoR.svg",
          "∞": "/message/Infinite.svg"
        }, E = S.filter(
          (U) => (n || "").includes(U)
        ), R = [], I = {};
        for (const U of E) {
          const G = b[U];
          R.push(
            A(G, "#000000").then((le) => {
              I[U] = le;
            })
          );
        }
        if (await Promise.all(R), typeof document < "u" && document.fonts && i)
          try {
            await document.fonts.load(`bold 30px ${i}`);
          } catch (U) {
            console.error("Failed to load engraving font:", U);
          }
        if (!M) return;
        const P = ss({
          text: n || "",
          fontFamily: i,
          width: 2048,
          height: 400,
          mode: "engrave",
          blur: 0,
          offsetY: 0,
          offsetX: -10,
          symbolsMap: I,
          bevelWidth: o,
          engravingDepth: a,
          edgeSoftness: u,
          strokeWidth: d
        }), C = ss({
          text: n || "",
          fontFamily: i,
          width: 2048,
          height: 400,
          mode: "engrave",
          blur: 0,
          offsetY: 0,
          offsetX: -10,
          symbolsMap: I,
          bevelWidth: o,
          engravingDepth: 1,
          // Force full depth (0.0 height/blackness) inside the letters for perfect shadow contrast
          edgeSoftness: u,
          strokeWidth: d
        }), L = Xo(P, f), k = new B.CanvasTexture(L), V = new B.CanvasTexture(C);
        k.anisotropy = 16, V.anisotropy = 16;
        const J = P.width / P.height, Y = 2.2, D = -1 * Y, F = 1 * Y * J;
        k.wrapS = B.ClampToEdgeWrapping, k.wrapT = B.ClampToEdgeWrapping, k.repeat.set(D, F), k.offset.set(0.5 - 0.5 * D, 0.5 - 0.5 * F), k.colorSpace = B.NoColorSpace, V.wrapS = B.ClampToEdgeWrapping, V.wrapT = B.ClampToEdgeWrapping, V.repeat.set(D, F), V.offset.set(0.5 - 0.5 * D, 0.5 - 0.5 * F), V.colorSpace = B.NoColorSpace, t.setEngravingCanvas(P), t.setNormalMapCanvas(L), v((U) => (U.normalTexture?.dispose(), U.aoTexture?.dispose(), { normalTexture: k, aoTexture: V }));
      })(), () => {
        M = !1;
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
      y
    ]), ae(() => () => {
      v((M) => (M.normalTexture?.dispose(), M.aoTexture?.dispose(), { normalTexture: null, aoTexture: null })), t.setEngravingCanvas(null), t.setNormalMapCanvas(null);
    }, []);
    const { normalTexture: p, aoTexture: _ } = m;
    ae(() => {
      if (!y || !y.geometry) return;
      y.geometry.computeBoundingBox();
      const M = y.geometry.boundingBox;
      if (M) {
        const S = new B.Vector3();
        M.getSize(S), console.log("--- DEBUG RING MESH SIZE ---", {
          name: y.name,
          x: S.x,
          y: S.y,
          z: S.z
        });
      }
      const A = y.onBeforeRender, T = y.onAfterRender;
      return y.onBeforeRender = (S, b, E, R, I, P) => {
        A && A.call(
          y,
          S,
          b,
          E,
          R,
          I,
          P
        ), E instanceof B.OrthographicCamera && R.setDrawRange(0, 0);
      }, y.onAfterRender = (S, b, E, R, I, P) => {
        T && T.call(
          y,
          S,
          b,
          E,
          R,
          I,
          P
        ), R.setDrawRange(0, 1 / 0);
      }, () => {
        y.onBeforeRender = A, y.onAfterRender = T, y.geometry && y.geometry.setDrawRange(0, 1 / 0);
      };
    }, [y]);
    const g = De(null), w = De(null);
    return ae(() => {
      if (!(!y || !y.geometry))
        if (s === 2 && p && _) {
          let M = y.material;
          if (M.userData?.isEngraved ? M = g.current : g.current !== M && (g.current = M, w.current && (w.current.dispose(), w.current = null)), M) {
            if (!w.current) {
              const T = M.clone();
              T.userData.isEngraved = !0, T.normalScale = new B.Vector2(-0.05, 0.05), w.current = T;
            }
            const A = w.current;
            A.normalMap = p, A.aoMap = _, A.aoMapIntensity = l, y.material !== A && (y.material = A);
          }
        } else
          g.current && y.material !== g.current && (y.material = g.current);
    }, [
      y,
      y?.material,
      p,
      _,
      s,
      l
    ]), ae(() => () => {
      y && g.current && (y.material = g.current), w.current && (w.current.dispose(), w.current = null);
    }, [y]), /* @__PURE__ */ K.jsx($o, {});
  }
), Jo = Ye(
  ({ diamondEnvMap: c }) => {
    const { design3DManager: e } = pt(), { ringManager: t } = e, { size: s } = ai(), n = t.modelUrl;
    return /* @__PURE__ */ K.jsx(os, { fallback: null, children: n && /* @__PURE__ */ K.jsx(
      Zo,
      {
        modelUrl: n,
        diamondEnvMap: c,
        size: s
      },
      n
    ) });
  }
), Zo = Ye(
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
      finishingColorHex: x,
      engravingColorHex: y,
      roughness: m,
      finish: v,
      showDiamond: p,
      currentView: _
    } = f, { scene: g } = ii(c), w = De(new B.Color(h)), M = De(new B.Color(x)), A = De(new B.Color(y)), T = De(m);
    ae(() => {
      w.current.set(h), M.current.set(x), A.current.set(y), T.current = m;
    }, [h, x, y, m]);
    const S = hn(() => {
      if (!g) return null;
      const $ = {
        x: -Math.PI / 4,
        y: -Math.PI / 10,
        z: Math.PI / 3
      }, X = {
        x: $.x - 8.42,
        y: $.y + 6.67,
        z: $.z - 1.05
      }, N = _ === 2 ? X : $;
      return zo(g, N.x, N.y, N.z);
    }, [g, _]);
    ae(() => {
      S && i && u.setModelMinY(S.minY || 0);
    }, [S, u, i]), ae(() => {
      f._markLoaded(), g && r && r(g);
    }, [g, f, r]);
    const b = ft(l, [
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
    ]), E = !!b, R = ft(l, [
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
    ]), I = !!R, P = ft(l, [
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
    ]), C = !!P, L = ft(l, [
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
    ]), k = !!L, V = ft(l, [
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
    ]), J = !!V, Y = ft(l, [
      "normalBase",
      "Base_Metal_Normal",
      "Base_metal_Normal",
      "base_metal_normal",
      "Base_Metal_Normal.webp",
      "Base_metal_Normal.webp",
      "base_metal_normal.webp"
    ]) || qs(l, [
      "Base_Metal_Normal",
      "base_metal_normal"
    ]), D = !!Y, F = ft(l, [
      "normalFinishing",
      "Finishing_Metal_Normal",
      "Finishing_metal_Normal",
      "finishing_metal_normal",
      "Finishing_Metal_Normal.webp",
      "Finishing_metal_Normal.webp",
      "finishing_metal_normal.webp"
    ]) || qs(l, [
      "Finishing_Metal_Normal",
      "finishing_metal_normal"
    ]), U = !!F, G = E && b ? b : "", le = I && R ? R : "", _e = C && P ? P : "", H = k && L ? L : "", j = J && V ? V : "", re = D && Y ? Y : "", me = U && F ? F : "", ue = ot(
      ut,
      G
    );
    ue && (ue.flipY = !1);
    const ge = ot(
      ut,
      le
    );
    ge && (ge.flipY = !1);
    const oe = ot(
      ut,
      _e
    );
    oe && (oe.flipY = !1);
    const Oe = ot(
      ut,
      H
    );
    Oe && (Oe.flipY = !1);
    const Be = ot(
      ut,
      j
    );
    Be && (Be.flipY = !1);
    const we = ot(
      ut,
      re
    );
    we && (we.flipY = !1, we.colorSpace = B.NoColorSpace);
    const W = ot(
      ut,
      me
    );
    W && (W.flipY = !1, W.colorSpace = B.NoColorSpace);
    const Se = c ? (($) => {
      const X = $.split("/"), N = X.findIndex((xe) => xe === "BehytRings");
      return N !== -1 && X.length > N + 3 ? {
        collection: X[N + 1],
        modelId: X[N + 2],
        variation: X[N + 3]
      } : null;
    })(c) : null, hs = Se ? `/BehytRings/${Se.collection}/${Se.modelId}/${Se.variation}/Roughness_Map.jpg` : "", Et = l;
    Et?.roughness && !Et.roughness.endsWith("roughness.jpg") && Et.roughness;
    const it = 1, Q = De(
      new B.MeshPhysicalMaterial({
        color: d,
        metalness: 1,
        roughness: 0,
        aoMap: E ? ue : null,
        aoMapIntensity: E ? 1 : 0,
        clearcoat: v === "Polished" ? 1 : 0,
        normalScale: new B.Vector2(it, it),
        normalMap: D ? we : null,
        alphaMap: E ? ue : null
      })
    ), ne = De(
      new B.MeshPhysicalMaterial({
        color: "#f6f5f5",
        metalness: 1,
        roughness: 0,
        aoMap: I ? ge : null,
        aoMapIntensity: I ? 0.8 : 0,
        clearcoat: v === "Polished" ? 1 : 0,
        clearcoatRoughness: 0.1,
        normalScale: new B.Vector2(it, it),
        normalMap: U ? W : null
      })
    ), ee = De(
      new B.MeshPhysicalMaterial({
        color: d,
        metalness: 1,
        roughness: m,
        aoMap: C ? oe : null,
        aoMapIntensity: C ? 1 : 0,
        clearcoat: v === "Polished" ? 1 : 0,
        clearcoatRoughness: 0.1
      })
    );
    ae(() => {
      let $ = null;
      p ? $ = E ? ue : null : $ = k ? Oe : E ? ue : null;
      let X = null;
      p ? X = I ? ge : null : X = J ? Be : I ? ge : null;
      const N = C ? oe : null;
      Q.current.aoMap = $, Q.current.aoMapIntensity = $ ? 1 : 0, Q.current.normalMap = D ? we : null, Q.current.alphaMap = E ? ue : null, Q.current.needsUpdate = !0, ne.current.aoMap = X, ne.current.aoMapIntensity = X ? 0.8 : 0, ne.current.normalMap = U ? W : null, ne.current.needsUpdate = !0, ee.current.aoMap = N, ee.current.aoMapIntensity = N ? 1 : 0, ee.current.needsUpdate = !0, console.log("--- Active 3D Ring Texture Maps Applied ---", {
        showDiamond: p,
        goldMaterialAo: $ === Oe ? "noDiamondBase" : $ ? "aoGold" : "None",
        silverMaterialAo: X === Be ? "noDiamondFinishing" : X ? "aoSilver" : "None",
        engravingMaterialAo: N ? "aoEngrave" : "None"
      });
    }, [
      ue,
      ge,
      oe,
      Oe,
      Be,
      we,
      W,
      E,
      I,
      C,
      k,
      J,
      D,
      U,
      p
    ]), Fi(($, X) => {
      const N = 1 - Math.pow(0.01, X), xe = v === "Polished" ? 1 : 0;
      Q.current.color.lerp(w.current, N), Q.current.roughness = B.MathUtils.lerp(
        Q.current.roughness,
        T.current,
        N
      ), Q.current.clearcoat = B.MathUtils.lerp(
        Q.current.clearcoat,
        xe,
        N
      ), Q.current.clearcoatRoughness = B.MathUtils.lerp(
        Q.current.clearcoatRoughness,
        0.1,
        N
      ), ne.current.color.lerp(
        M.current,
        N
      ), ne.current.roughness = B.MathUtils.lerp(
        ne.current.roughness,
        T.current,
        N
      ), ne.current.clearcoat = B.MathUtils.lerp(
        ne.current.clearcoat,
        xe,
        N
      ), ne.current.clearcoatRoughness = B.MathUtils.lerp(
        ne.current.clearcoatRoughness,
        0.1,
        N
      ), ee.current.color.lerp(
        A.current,
        N
      ), ee.current.roughness = B.MathUtils.lerp(
        ee.current.roughness,
        T.current,
        N
      ), ee.current.clearcoat = B.MathUtils.lerp(
        ee.current.clearcoat,
        xe,
        N
      ), ee.current.clearcoatRoughness = B.MathUtils.lerp(
        ee.current.clearcoatRoughness,
        0.1,
        N
      );
      const Z = n && n.current[c] !== void 0 ? n.current[c] : 1, Xe = Z < 1;
      Q.current.transparent = Xe, Q.current.opacity = Z, ne.current.transparent = Xe, ne.current.opacity = Z, ee.current.transparent = Xe, ee.current.opacity = Z, g && i && g.traverse((ke) => {
        ke instanceof B.Mesh && ke.material && (Array.isArray(ke.material) ? ke.material : [ke.material]).forEach((Ce) => {
          Ce !== Q.current && Ce !== ne.current && Ce !== ee.current && (Ce.transparent = Xe, Ce.opacity = Z);
        });
      });
    }), _n.useLayoutEffect(() => {
      const $ = n && n.current[c] !== void 0 ? n.current[c] : 1, X = $ < 1;
      Q.current.transparent = X, Q.current.opacity = $, ne.current.transparent = X, ne.current.opacity = $, ee.current.transparent = X, ee.current.opacity = $, g && g.traverse((N) => {
        N instanceof B.Mesh && N.material && (Array.isArray(N.material) ? N.material : [N.material]).forEach((Z) => {
          Z !== Q.current && Z !== ne.current && Z !== ee.current && (Z.transparent = X, Z.opacity = $);
        });
      });
    }, [g, i, c, n]), ae(() => () => {
      Q.current.dispose(), ne.current.dispose(), ee.current.dispose();
    }, []);
    const {
      hasNoDiamondBaseMesh: ms,
      hasNoDiamondFinishingMesh: ps,
      hasNoDiamondEngravingMesh: gs
    } = hn(() => {
      let $ = !1, X = !1, N = !1;
      return g ? (g.traverse((xe) => {
        if (xe.name) {
          const Z = xe.name.toLowerCase();
          Z.includes("nodiamond") && (Z.includes("engrav") ? N = !0 : Z.includes("finishing") || Z.includes("silver") ? X = !0 : $ = !0);
        }
      }), {
        hasNoDiamondBaseMesh: $,
        hasNoDiamondFinishingMesh: X,
        hasNoDiamondEngravingMesh: N
      }) : {
        hasNoDiamondBaseMesh: !1,
        hasNoDiamondFinishingMesh: !1,
        hasNoDiamondEngravingMesh: !1
      };
    }, [g]);
    return hn(() => {
      if (!g) return;
      const $ = [];
      Q.current.normalMap = null, ne.current.normalMap = null, ee.current.normalMap = null, g.traverse((X) => {
        if (X instanceof B.Mesh) {
          const N = X;
          N.geometry && N.geometry.computeVertexNormals();
          const xe = (He, $e) => {
            let rt = He;
            const bn = $e.toLowerCase();
            for (; rt; ) {
              if (rt.name && rt.name.toLowerCase().includes(bn))
                return !0;
              rt = rt.parent;
            }
            return !1;
          }, Z = xe(N, "NoDiamond"), Xe = !Z && (xe(N, "diamond") || xe(N, "diam_centr")), ke = xe(N, "engrav"), Yt = xe(N, "finishing") || xe(N, "silver");
          N.userData.originalNormalMap === void 0 && (N.userData.originalNormalMap = N.material?.normalMap || null, N.userData.originalNormalScale = N.material?.normalScale ? N.material.normalScale.clone() : null);
          const Ce = N.userData.originalNormalMap, Wt = N.userData.originalNormalScale, xs = ne.current, ys = Q.current, vs = (He, $e) => {
            const rt = $e ? D : U, bn = $e ? we : W;
            rt ? (He.normalMap = bn, He.normalScale.set(it, it)) : Ce && (He.normalMap = Ce, Wt && He.normalScale.copy(Wt));
          };
          if (p ? Z ? N.visible = !1 : N.visible = !0 : Xe ? N.visible = !1 : ke ? Z ? N.visible = !0 : N.visible = !gs : Yt ? Z ? N.visible = !0 : N.visible = !ps : Z ? N.visible = !0 : N.visible = !ms, $.push({
            "Mesh Name": N.name,
            "Parent Name": N.parent?.name || "None",
            "Is Diamond": Xe,
            "Is NoDiamond": Z,
            "Is Finishing": Yt,
            "Is Engraving": ke,
            "Calculated Visibility": N.visible
          }), Xe) {
            if (p) {
              const He = new vn(N.geometry, { strategy: 1 });
              N.material = new Ko({
                geometry: N.geometry,
                bvh: He,
                envMap: e,
                resolution: new B.Vector2(t.width, t.height),
                ior: 2.4,
                bounces: 3,
                aberrationStrength: 5e-3,
                envMapIntensity: 0.6,
                reflectivity: 0,
                fresnel: 0.3
              });
            }
          } else ke ? (N.material = ee.current, Ce && (ee.current.normalMap = Ce, Wt && ee.current.normalScale.copy(
            Wt
          ))) : Yt ? (N.material = xs, vs(xs, !1)) : (N.material = ys, vs(ys, !0));
          N.material && (Array.isArray(N.material) ? N.material : [N.material]).forEach(($e) => {
            $e && ($e.flatShading = !1, $e.needsUpdate = !0);
          });
        }
      }), i && (console.log(
        `%c[SDK Model Content Matrix] --- Configuration State (showDiamond: ${p}) ---`,
        "color: #00ffca; font-weight: bold; font-size: 12px;"
      ), console.table($));
    }, [
      g,
      Q.current,
      ne.current,
      ee.current,
      e,
      t,
      p,
      oe,
      we,
      W,
      D,
      U,
      it,
      ms,
      ps,
      gs,
      i
    ]), g && S ? /* @__PURE__ */ K.jsx("primitive", { object: g, visible: i }) : null;
  }
), Ri = Ye(
  ({ diamondEnvPath: c }) => {
    const { design3DManager: e } = pt(), { ringManager: t } = e, s = Ni({ files: c });
    return t.modelUrl ? /* @__PURE__ */ K.jsxs(K.Fragment, { children: [
      /* @__PURE__ */ K.jsx(Jo, { diamondEnvMap: s }),
      !t.isTransitioning && /* @__PURE__ */ K.jsx(qo, { modelUrl: t.modelUrl })
    ] }) : null;
  }
);
function Zs(c, e) {
  if (e === ji)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), c;
  if (e === Kn || e === hi) {
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
    if (e === Kn)
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
class Qo extends mi {
  /**
   * Constructs a new glTF loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new ia(t);
    }), this.register(function(t) {
      return new ra(t);
    }), this.register(function(t) {
      return new ma(t);
    }), this.register(function(t) {
      return new pa(t);
    }), this.register(function(t) {
      return new ga(t);
    }), this.register(function(t) {
      return new aa(t);
    }), this.register(function(t) {
      return new ca(t);
    }), this.register(function(t) {
      return new la(t);
    }), this.register(function(t) {
      return new ua(t);
    }), this.register(function(t) {
      return new sa(t);
    }), this.register(function(t) {
      return new fa(t);
    }), this.register(function(t) {
      return new oa(t);
    }), this.register(function(t) {
      return new ha(t);
    }), this.register(function(t) {
      return new da(t);
    }), this.register(function(t) {
      return new ta(t);
    }), this.register(function(t) {
      return new xa(t);
    }), this.register(function(t) {
      return new ya(t);
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
    }, a = new as(this.manager);
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
      if (a.decode(new Uint8Array(e, 0, 4)) === Si) {
        try {
          i[z.KHR_BINARY_GLTF] = new va(e);
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
    const u = new Ba(r, {
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
            i[l] = new na();
            break;
          case z.KHR_DRACO_MESH_COMPRESSION:
            i[l] = new _a(r, this.dracoLoader);
            break;
          case z.KHR_TEXTURE_TRANSFORM:
            i[l] = new wa();
            break;
          case z.KHR_MESH_QUANTIZATION:
            i[l] = new Ta();
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
function ea() {
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
class ta {
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
        u = new Wi(f), u.target.position.set(0, 0, -1), u.add(u.target);
        break;
      case "point":
        u = new Yi(f), u.distance = l;
        break;
      case "spot":
        u = new Ki(f), u.distance = l, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle !== void 0 ? a.spot.innerConeAngle : 0, a.spot.outerConeAngle = a.spot.outerConeAngle !== void 0 ? a.spot.outerConeAngle : Math.PI / 4, u.angle = a.spot.outerConeAngle, u.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, u.target.position.set(0, 0, -1), u.add(u.target);
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
class na {
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
class sa {
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
class ia {
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
class ra {
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
class oa {
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
class aa {
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
class ca {
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
class la {
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
class ua {
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
class fa {
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
class da {
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
class ha {
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
class ma {
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
class pa {
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
class ga {
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
class xa {
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
class ya {
  constructor(e) {
    this.name = z.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, s = t.nodes[e];
    if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0)
      return null;
    const n = t.meshes[s.mesh];
    for (const u of n.primitives)
      if (u.mode !== Ae.TRIANGLES && u.mode !== Ae.TRIANGLE_STRIP && u.mode !== Ae.TRIANGLE_FAN && u.mode !== void 0)
        return null;
    const i = s.extensions[this.name].attributes, o = [], a = {};
    for (const u in i)
      o.push(this.parser.getDependency("accessor", i[u]).then((f) => (a[u] = f, a[u])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((u) => {
      const f = u.pop(), l = f.isGroup ? f.children : [f], d = u[0].count, h = [];
      for (const x of l) {
        const y = new Re(), m = new O(), v = new pi(), p = new O(1, 1, 1), _ = new Xi(x.geometry, x.material, d);
        for (let g = 0; g < d; g++)
          a.TRANSLATION && m.fromBufferAttribute(a.TRANSLATION, g), a.ROTATION && v.fromBufferAttribute(a.ROTATION, g), a.SCALE && p.fromBufferAttribute(a.SCALE, g), _.setMatrixAt(g, y.compose(m, v, p));
        for (const g in a)
          if (g === "_COLOR_0") {
            const w = a[g];
            _.instanceColor = new $i(w.array, w.itemSize, w.normalized);
          } else g !== "TRANSLATION" && g !== "ROTATION" && g !== "SCALE" && x.geometry.setAttribute(g, a[g]);
        gi.prototype.copy.call(_, x), this.parser.assignFinalMaterial(_), h.push(_);
      }
      return f.isGroup ? (f.clear(), f.add(...h), f) : h[0];
    }));
  }
}
const Si = "glTF", Ot = 12, Qs = { JSON: 1313821514, BIN: 5130562 };
class va {
  constructor(e) {
    this.name = z.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Ot), s = new TextDecoder();
    if (this.header = {
      magic: s.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Si)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - Ot, r = new DataView(e, Ot);
    let i = 0;
    for (; i < n; ) {
      const o = r.getUint32(i, !0);
      i += 4;
      const a = r.getUint32(i, !0);
      if (i += 4, a === Qs.JSON) {
        const u = new Uint8Array(e, Ot + i, o);
        this.content = s.decode(u);
      } else if (a === Qs.BIN) {
        const u = Ot + i;
        this.body = e.slice(u, u + o);
      }
      i += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class _a {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = z.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const s = this.json, n = this.dracoLoader, r = e.extensions[this.name].bufferView, i = e.extensions[this.name].attributes, o = {}, a = {}, u = {};
    for (const f in i) {
      const l = is[f] || f.toLowerCase();
      o[l] = i[f];
    }
    for (const f in e.attributes) {
      const l = is[f] || f.toLowerCase();
      if (i[f] !== void 0) {
        const d = s.accessors[e.attributes[f]], h = St[d.componentType];
        u[l] = h.name, a[l] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(f) {
      return new Promise(function(l, d) {
        n.decodeDracoFile(f, function(h) {
          for (const x in h.attributes) {
            const y = h.attributes[x], m = a[x];
            m !== void 0 && (y.normalized = m);
          }
          l(h);
        }, o, u, Fe, d);
      });
    });
  }
}
class wa {
  constructor() {
    this.name = z.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class Ta {
  constructor() {
    this.name = z.KHR_MESH_QUANTIZATION;
  }
}
class Ei extends wr {
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
    const r = this.resultBuffer, i = this.sampleValues, o = this.valueSize, a = o * 2, u = o * 3, f = n - t, l = (s - t) / f, d = l * l, h = d * l, x = e * u, y = x - u, m = -2 * h + 3 * d, v = h - d, p = 1 - m, _ = v - d + l;
    for (let g = 0; g !== o; g++) {
      const w = i[y + g + o], M = i[y + g + a] * f, A = i[x + g + o], T = i[x + g] * f;
      r[g] = p * w + _ * M + m * A + v * T;
    }
    return r;
  }
}
const Ma = new pi();
class Aa extends Ei {
  interpolate_(e, t, s, n) {
    const r = super.interpolate_(e, t, s, n);
    return Ma.fromArray(r).normalize().toArray(r), r;
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
}, St = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, ei = {
  9728: Qe,
  9729: mt,
  9984: nr,
  9985: tr,
  9986: er,
  9987: xi
}, ti = {
  33071: mn,
  33648: sr,
  10497: Yn
}, kn = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, is = {
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
}, ba = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: vi,
  STEP: _r
}, Hn = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Ra(c) {
  return c.DefaultMaterial === void 0 && (c.DefaultMaterial = new yi({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: zn
  })), c.DefaultMaterial;
}
function dt(c, e, t) {
  for (const s in t.extensions)
    c[s] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[s] = t.extensions[s]);
}
function Ne(c, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(c.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Sa(c, e, t) {
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
function Ea(c, e) {
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
function Da(c) {
  let e;
  const t = c.extensions && c.extensions[z.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Vn(t.attributes) : e = c.indices + ":" + Vn(c.attributes) + ":" + c.mode, c.targets !== void 0)
    for (let s = 0, n = c.targets.length; s < n; s++)
      e += ":" + Vn(c.targets[s]);
  return e;
}
function Vn(c) {
  let e = "";
  const t = Object.keys(c).sort();
  for (let s = 0, n = t.length; s < n; s++)
    e += t[s] + ":" + c[t[s]] + ";";
  return e;
}
function rs(c) {
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
function Ia(c) {
  return c.search(/\.jpe?g($|\?)/i) > 0 || c.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : c.search(/\.webp($|\?)/i) > 0 || c.search(/^data\:image\/webp/) === 0 ? "image/webp" : c.search(/\.ktx2($|\?)/i) > 0 || c.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const Pa = new Re();
class Ba {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new ea(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = !1, n = -1, r = !1, i = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      s = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const a = o.match(/Version\/(\d+)/);
      n = s && a ? parseInt(a[1], 10) : -1, r = o.indexOf("Firefox") > -1, i = r ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || s && n < 17 || r && i < 98 ? this.textureLoader = new qi(this.options.manager) : this.textureLoader = new Ji(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new as(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
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
      const i = kn[n.type], o = St[n.componentType], a = n.normalized === !0, u = new o(n.count * i);
      return Promise.resolve(new Rt(u, i, a));
    }
    const r = [];
    return n.bufferView !== void 0 ? r.push(this.getDependency("bufferView", n.bufferView)) : r.push(null), n.sparse !== void 0 && (r.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(r).then(function(i) {
      const o = i[0], a = kn[n.type], u = St[n.componentType], f = u.BYTES_PER_ELEMENT, l = f * a, d = n.byteOffset || 0, h = n.bufferView !== void 0 ? s.bufferViews[n.bufferView].byteStride : void 0, x = n.normalized === !0;
      let y, m;
      if (h && h !== l) {
        const v = Math.floor(d / h), p = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + v + ":" + n.count;
        let _ = t.cache.get(p);
        _ || (y = new u(o, v * h, n.count * h / f), _ = new Zi(y, h / f), t.cache.add(p, _)), m = new Qi(_, a, d % h / f, x);
      } else
        o === null ? y = new u(n.count * a) : y = new u(o, d, n.count * a), m = new Rt(y, a, x);
      if (n.sparse !== void 0) {
        const v = kn.SCALAR, p = St[n.sparse.indices.componentType], _ = n.sparse.indices.byteOffset || 0, g = n.sparse.values.byteOffset || 0, w = new p(i[1], _, n.sparse.count * v), M = new u(i[2], g, n.sparse.count * a);
        o !== null && (m = new Rt(m.array.slice(), m.itemSize, m.normalized)), m.normalized = !1;
        for (let A = 0, T = w.length; A < T; A++) {
          const S = w[A];
          if (m.setX(S, M[A * a]), a >= 2 && m.setY(S, M[A * a + 1]), a >= 3 && m.setZ(S, M[A * a + 2]), a >= 4 && m.setW(S, M[A * a + 3]), a >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = x;
      }
      return m;
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
      return f.magFilter = ei[d.magFilter] || mt, f.minFilter = ei[d.minFilter] || xi, f.wrapS = ti[d.wrapS] || Yn, f.wrapT = ti[d.wrapT] || Yn, f.generateMipmaps = !f.isCompressedTexture && f.minFilter !== Qe && f.minFilter !== mt, n.associations.set(f, { textures: e }), f;
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
        let x = d;
        t.isImageBitmapLoader === !0 && (x = function(y) {
          const m = new ws(y);
          m.needsUpdate = !0, d(m);
        }), t.load(zt.resolveURL(l, r.path), x, void 0, h);
      });
    }).then(function(l) {
      return u === !0 && o.revokeObjectURL(a), Ne(l, i), l.userData.mimeType = i.mimeType || Ia(i.uri), l;
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
      a || (a = new ir(), Sn.prototype.copy.call(a, s), a.color.copy(s.color), a.map = s.map, a.sizeAttenuation = !1, this.cache.add(o, a)), s = a;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + s.uuid;
      let a = this.cache.get(o);
      a || (a = new rr(), Sn.prototype.copy.call(a, s), a.color.copy(s.color), a.map = s.map, this.cache.add(o, a)), s = a;
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
    return yi;
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
    r.doubleSided === !0 && (o.side = ui);
    const f = r.alphaMode || Hn.OPAQUE;
    if (f === Hn.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, f === Hn.MASK && (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && i !== kt && (u.push(t.assignTexture(o, "normalMap", r.normalTexture)), o.normalScale = new Le(1, 1), r.normalTexture.scale !== void 0)) {
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
    const t = or.sanitizeNodeName(e || "");
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
        return ni(a, o, t);
      });
    }
    const i = [];
    for (let o = 0, a = e.length; o < a; o++) {
      const u = e[o], f = Da(u), l = n[f];
      if (l)
        i.push(l.promise);
      else {
        let d;
        u.extensions && u.extensions[z.KHR_DRACO_MESH_COMPRESSION] ? d = r(u) : d = ni(new ar(), u, t), n[f] = { primitive: u, promise: d }, i.push(d);
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
      const f = i[a].material === void 0 ? Ra(this.cache) : this.getDependency("material", i[a].material);
      o.push(f);
    }
    return o.push(t.loadGeometries(i)), Promise.all(o).then(function(a) {
      const u = a.slice(0, a.length - 1), f = a[a.length - 1], l = [];
      for (let h = 0, x = f.length; h < x; h++) {
        const y = f[h], m = i[h];
        let v;
        const p = u[h];
        if (m.mode === Ae.TRIANGLES || m.mode === Ae.TRIANGLE_STRIP || m.mode === Ae.TRIANGLE_FAN || m.mode === void 0)
          v = r.isSkinnedMesh === !0 ? new cr(y, p) : new lr(y, p), v.isSkinnedMesh === !0 && v.normalizeSkinWeights(), m.mode === Ae.TRIANGLE_STRIP ? v.geometry = Zs(v.geometry, hi) : m.mode === Ae.TRIANGLE_FAN && (v.geometry = Zs(v.geometry, Kn));
        else if (m.mode === Ae.LINES)
          v = new ur(y, p);
        else if (m.mode === Ae.LINE_STRIP)
          v = new fr(y, p);
        else if (m.mode === Ae.LINE_LOOP)
          v = new dr(y, p);
        else if (m.mode === Ae.POINTS)
          v = new hr(y, p);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(v.geometry.morphAttributes).length > 0 && Ea(v, r), v.name = t.createUniqueName(r.name || "mesh_" + e), Ne(v, r), m.extensions && dt(n, v, m), t.assignFinalMaterial(v), l.push(v);
      }
      for (let h = 0, x = l.length; h < x; h++)
        t.associations.set(l[h], {
          meshes: e,
          primitives: h
        });
      if (l.length === 1)
        return r.extensions && dt(n, l[0], r), l[0];
      const d = new En();
      r.extensions && dt(n, d, r), t.associations.set(d, { meshes: e });
      for (let h = 0, x = l.length; h < x; h++)
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
    return s.type === "perspective" ? t = new mr(pr.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : s.type === "orthographic" && (t = new gr(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), Ne(t, s), Promise.resolve(t);
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
          const d = new Re();
          r !== null && d.fromArray(r.array, u * 16), a.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[u]);
      }
      return new xr(o, a);
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
      const h = n.channels[l], x = n.samplers[h.sampler], y = h.target, m = y.node, v = n.parameters !== void 0 ? n.parameters[x.input] : x.input, p = n.parameters !== void 0 ? n.parameters[x.output] : x.output;
      y.node !== void 0 && (i.push(this.getDependency("node", m)), o.push(this.getDependency("accessor", v)), a.push(this.getDependency("accessor", p)), u.push(x), f.push(y));
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(o),
      Promise.all(a),
      Promise.all(u),
      Promise.all(f)
    ]).then(function(l) {
      const d = l[0], h = l[1], x = l[2], y = l[3], m = l[4], v = [];
      for (let _ = 0, g = d.length; _ < g; _++) {
        const w = d[_], M = h[_], A = x[_], T = y[_], S = m[_];
        if (w === void 0) continue;
        w.updateMatrix && w.updateMatrix();
        const b = s._createAnimationTracks(w, M, A, T, S);
        if (b)
          for (let E = 0; E < b.length; E++)
            v.push(b[E]);
      }
      const p = new yr(r, void 0, v);
      return Ne(p, n), p;
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
        h.isSkinnedMesh && h.bind(d, Pa);
      });
      for (let h = 0, x = l.length; h < x; h++)
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
      if (r.isBone === !0 ? f = new vr() : u.length > 1 ? f = new En() : u.length === 1 ? f = u[0] : f = new gi(), f !== u[0])
        for (let l = 0, d = u.length; l < d; l++)
          f.add(u[l]);
      if (r.name && (f.userData.name = r.name, f.name = i), Ne(f, r), r.extensions && dt(s, f, r), r.matrix !== void 0) {
        const l = new Re();
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
    const t = this.extensions, s = this.json.scenes[e], n = this, r = new En();
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
          (d instanceof Sn || d instanceof ws) && l.set(d, h);
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
    Je[r.path] === Je.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && a.push(d.name ? d.name : d.uuid);
    }) : a.push(o);
    let u;
    switch (Je[r.path]) {
      case Je.weights:
        u = Ms;
        break;
      case Je.rotation:
        u = As;
        break;
      case Je.translation:
      case Je.scale:
        u = Ts;
        break;
      default:
        s.itemSize === 1 ? u = Ms : u = Ts;
        break;
    }
    const f = n.interpolation !== void 0 ? ba[n.interpolation] : vi, l = this._getArrayFromAccessor(s);
    for (let d = 0, h = a.length; d < h; d++) {
      const x = new u(
        a[d] + "." + Je[r.path],
        t.array,
        l,
        f
      );
      n.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(x), i.push(x);
    }
    return i;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const s = rs(t.constructor), n = new Float32Array(t.length);
      for (let r = 0, i = t.length; r < i; r++)
        n[r] = t[r] * s;
      t = n;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(s) {
      const n = this instanceof As ? Aa : Ei;
      return new n(this.times, this.values, this.getValueSize() / 3, s);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Ca(c, e, t) {
  const s = e.attributes, n = new Pe();
  if (s.POSITION !== void 0) {
    const o = t.json.accessors[s.POSITION], a = o.min, u = o.max;
    if (a !== void 0 && u !== void 0) {
      if (n.set(
        new O(a[0], a[1], a[2]),
        new O(u[0], u[1], u[2])
      ), o.normalized) {
        const f = rs(St[o.componentType]);
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
    const o = new O(), a = new O();
    for (let u = 0, f = r.length; u < f; u++) {
      const l = r[u];
      if (l.POSITION !== void 0) {
        const d = t.json.accessors[l.POSITION], h = d.min, x = d.max;
        if (h !== void 0 && x !== void 0) {
          if (a.setX(Math.max(Math.abs(h[0]), Math.abs(x[0]))), a.setY(Math.max(Math.abs(h[1]), Math.abs(x[1]))), a.setZ(Math.max(Math.abs(h[2]), Math.abs(x[2]))), d.normalized) {
            const y = rs(St[d.componentType]);
            a.multiplyScalar(y);
          }
          o.max(a);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    n.expandByVector(o);
  }
  c.boundingBox = n;
  const i = new Tr();
  n.getCenter(i.center), i.radius = n.min.distanceTo(n.max) / 2, c.boundingSphere = i;
}
function ni(c, e, t) {
  const s = e.attributes, n = [];
  function r(i, o) {
    return t.getDependency("accessor", i).then(function(a) {
      c.setAttribute(o, a);
    });
  }
  for (const i in s) {
    const o = is[i] || i.toLowerCase();
    o in c.attributes || n.push(r(s[i], o));
  }
  if (e.indices !== void 0 && !c.index) {
    const i = t.getDependency("accessor", e.indices).then(function(o) {
      c.setIndex(o);
    });
    n.push(i);
  }
  return bs.workingColorSpace !== Fe && "COLOR_0" in s && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bs.workingColorSpace}" not supported.`), Ne(c, e), Ca(c, e, t), Promise.all(n).then(function() {
    return e.targets !== void 0 ? Sa(c, e.targets, t) : c;
  });
}
class Na extends mi {
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
    const r = new as(this.manager);
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
    const u = Number(o[1]), f = u ** 3 * 4, l = this.type === Vt ? new Uint8Array(f) : new Float32Array(f), d = new O(0, 0, 0), h = new O(1, 1, 1);
    if (o = n.exec(e), o !== null && d.set(Number(o[1]), Number(o[2]), Number(o[3])), o = r.exec(e), o !== null && h.set(Number(o[1]), Number(o[2]), Number(o[3])), d.x > h.x || d.y > h.y || d.z > h.z)
      throw new Error("LUTCubeLoader: Invalid input domain");
    const x = this.type === Vt ? 255 : 1;
    let y = 0;
    for (; (o = i.exec(e)) !== null; )
      l[y++] = Number(o[1]) * x, l[y++] = Number(o[2]) * x, l[y++] = Number(o[3]) * x, l[y++] = x;
    const m = new Mr();
    return m.image.data = l, m.image.width = u, m.image.height = u, m.image.depth = u, m.type = this.type, m.magFilter = mt, m.minFilter = mt, m.wrapS = mn, m.wrapT = mn, m.wrapR = mn, m.generateMipmaps = !1, m.needsUpdate = !0, {
      title: a,
      size: u,
      domainMin: d,
      domainMax: h,
      texture3D: m
    };
  }
}
class La extends Ar {
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
    }, l = function(T, S, b) {
      S = S || 1024;
      let R = T.pos, I = -1, P = 0, C = "", L = String.fromCharCode.apply(null, new Uint16Array(T.subarray(R, R + 128)));
      for (; 0 > (I = L.indexOf(`
`)) && P < S && R < T.byteLength; )
        C += L, P += L.length, R += 128, L += String.fromCharCode.apply(null, new Uint16Array(T.subarray(R, R + 128)));
      return -1 < I ? (T.pos += P + I + 1, C + L.slice(0, I)) : !1;
    }, d = function(T) {
      const S = /^#\?(\S+)/, b = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, E = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, R = /^\s*FORMAT=(\S+)\s*$/, I = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, P = {
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
        if ((L = C.match(b)) && (P.gamma = parseFloat(L[1])), (L = C.match(E)) && (P.exposure = parseFloat(L[1])), (L = C.match(R)) && (P.valid |= 2, P.format = L[1]), (L = C.match(I)) && (P.valid |= 4, P.height = parseInt(L[1], 10), P.width = parseInt(L[2], 10)), P.valid & 2 && P.valid & 4) break;
      }
      return P.valid & 2 || i(3, "missing format specifier"), P.valid & 4 || i(3, "missing image size specifier"), P;
    }, h = function(T, S, b) {
      const E = S;
      if (
        // run length encoding is not allowed so read flat
        E < 8 || E > 32767 || // this file is not run length encoded
        T[0] !== 2 || T[1] !== 2 || T[2] & 128
      )
        return new Uint8Array(T);
      E !== (T[2] << 8 | T[3]) && i(3, "wrong scanline width");
      const R = new Uint8Array(4 * S * b);
      R.length || i(4, "unable to allocate buffer space");
      let I = 0, P = 0;
      const C = 4 * E, L = new Uint8Array(4), k = new Uint8Array(C);
      let V = b;
      for (; V > 0 && P < T.byteLength; ) {
        P + 4 > T.byteLength && i(1), L[0] = T[P++], L[1] = T[P++], L[2] = T[P++], L[3] = T[P++], (L[0] != 2 || L[1] != 2 || (L[2] << 8 | L[3]) != E) && i(3, "bad rgbe scanline format");
        let J = 0, Y;
        for (; J < C && P < T.byteLength; ) {
          Y = T[P++];
          const F = Y > 128;
          if (F && (Y -= 128), (Y === 0 || J + Y > C) && i(3, "bad scanline data"), F) {
            const U = T[P++];
            for (let G = 0; G < Y; G++)
              k[J++] = U;
          } else
            k.set(T.subarray(P, P + Y), J), J += Y, P += Y;
        }
        const D = E;
        for (let F = 0; F < D; F++) {
          let U = 0;
          R[I] = k[F + U], U += E, R[I + 1] = k[F + U], U += E, R[I + 2] = k[F + U], U += E, R[I + 3] = k[F + U], I += 4;
        }
        V--;
      }
      return R;
    }, x = function(T, S, b, E) {
      const R = T[S + 3], I = Math.pow(2, R - 128) / 255;
      b[E + 0] = T[S + 0] * I, b[E + 1] = T[S + 1] * I, b[E + 2] = T[S + 2] * I, b[E + 3] = 1;
    }, y = function(T, S, b, E) {
      const R = T[S + 3], I = Math.pow(2, R - 128) / 255;
      b[E + 0] = $t.toHalfFloat(Math.min(T[S + 0] * I, 65504)), b[E + 1] = $t.toHalfFloat(Math.min(T[S + 1] * I, 65504)), b[E + 2] = $t.toHalfFloat(Math.min(T[S + 2] * I, 65504)), b[E + 3] = $t.toHalfFloat(1);
    }, m = new Uint8Array(e);
    m.pos = 0;
    const v = d(m), p = v.width, _ = v.height, g = h(m.subarray(m.pos), p, _);
    let w, M, A;
    switch (this.type) {
      case tt:
        A = g.length / 4;
        const T = new Float32Array(A * 4);
        for (let b = 0; b < A; b++)
          x(g, b * 4, T, b * 4);
        w = T, M = tt;
        break;
      case Xt:
        A = g.length / 4;
        const S = new Uint16Array(A * 4);
        for (let b = 0; b < A; b++)
          y(g, b * 4, S, b * 4);
        w = S, M = Xt;
        break;
      default:
        throw new Error("THREE.HDRLoader: Unsupported type: " + this.type);
    }
    return {
      width: p,
      height: _,
      data: w,
      header: v.string,
      gamma: v.gamma,
      exposure: v.exposure,
      type: M
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
        case tt:
        case Xt:
          i.colorSpace = Fe, i.minFilter = mt, i.magFilter = mt, i.generateMipmaps = !1, i.flipY = !0;
          break;
      }
      t && t(i, o);
    }
    return super.load(e, r, s, n);
  }
}
class Fa extends La {
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
  static gltfLoader = new Qo();
  static loadGLTF = (e) => new Promise((t, s) => {
    if (!e)
      return t(new B.Group());
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
    const t = URL.createObjectURL(e), s = new Fa();
    try {
      const n = await s.loadAsync(t);
      return n.mapping = B.EquirectangularReflectionMapping, URL.revokeObjectURL(t), n;
    } catch (n) {
      throw URL.revokeObjectURL(t), jt.error(`Error loading environment map: ${n}`), n;
    }
  }
  static loadNodeMapForGLTF = async (e) => {
    const t = await Ge.loadGLTF(e), s = {};
    return t.traverse((n) => {
      n instanceof B.Mesh && (s[n.name] = n);
    }), s;
  };
  static loadTexture = async (e) => await new B.TextureLoader().loadAsync(e);
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
  static loadLut = async (e) => await new Na().loadAsync(e);
  static getImageUrlFromTexture(e) {
    const t = document.createElement("canvas");
    t.width = 2e3, t.height = 2e3;
    const s = e.repeat ?? new B.Vector2(1, 1), n = t.getContext("2d", { willReadFrequently: !0 });
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
    const t = new B.Box3();
    return e.forEach((s) => {
      t.expandByObject(s);
    }), t;
  };
  static getCenterPointAndNormal = (e) => {
    const t = e.geometry, s = t.attributes.position, n = t.attributes.normal, r = t.attributes.uv, i = e.matrixWorld;
    if (!s || !n || !r)
      return {
        center: Ge.getBoundingBox([e]).getCenter(new B.Vector3()),
        normal: new B.Vector3(0, 0, 1),
        uv: new B.Vector2(0.5, 0.5)
      };
    const o = new B.Vector3(0, 0, 0), a = s.count;
    for (let x = 0; x < a; x++) {
      const y = new B.Vector3().fromBufferAttribute(s, x).applyMatrix4(i);
      o.add(y);
    }
    o.divideScalar(a);
    let u = 1 / 0, f = 0;
    for (let x = 0; x < a; x++) {
      const m = new B.Vector3().fromBufferAttribute(s, x).applyMatrix4(i).distanceTo(o);
      m < u && (u = m, f = x);
    }
    const l = new B.Vector3().fromBufferAttribute(n, f).applyMatrix4(i), d = new B.Vector3().fromBufferAttribute(s, f).applyMatrix4(i), h = new B.Vector2().fromBufferAttribute(r, f);
    return {
      center: d,
      normal: l,
      uv: h
    };
  };
  static getSizeAndCenter = (e) => {
    const t = Ge.getBoundingBox([e]), s = t.getSize(new B.Vector3()), n = t.getCenter(new B.Vector3());
    return {
      boundingBox: t,
      center: n,
      size: s
    };
  };
}
class Ua {
  _libState;
  _cameraRef = null;
  constructor(e) {
    this._libState = e, st(this);
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
  focusCameraTo = (e) => {
    const t = Array.isArray(e) ? e[e.length - 1] : e, s = -1, { boundingBox: n, center: r } = Ge.getSizeAndCenter(t);
    if (t instanceof B.Mesh) {
      const { center: o } = Ge.getCenterPointAndNormal(
        t
      ), a = Math.abs(o.x);
      this._cameraRef?.setLookAt(
        r.x,
        r.y,
        r.z,
        a,
        o.y,
        s,
        !0
      );
    } else
      this._cameraRef?.setLookAt(
        r.x,
        r.y,
        r.z,
        0,
        r.y,
        s,
        !0
      );
    const i = this._libState.designManager.viewManager.settings;
    if (i.fitBoxScale !== 1) {
      const o = n.clone(), a = new B.Vector3(), u = new B.Vector3();
      o.getCenter(a), o.getSize(u), u.multiplyScalar(i.fitBoxScale), o.setFromCenterAndSize(a, u), this._cameraRef?.fitToBox(o, !0);
    } else
      this._cameraRef?.fitToBox(n, !0);
  };
  dispose() {
    this._cameraRef = null;
  }
}
class Oa {
  _envVisibility = !1;
  _envIntensity = 1.6;
  _envRotation = {
    x: 0,
    y: 0,
    z: 1.5
  };
  _environmentTexture = null;
  constructor() {
    st(this);
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
class ka {
  _libState;
  _meshInfos = [];
  _groupRef = null;
  constructor(e) {
    this._libState = e, st(this);
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
class Ha {
  _modelUrl = "";
  _colorHex = "";
  _baseColorHex = "";
  _finishingColorHex = "";
  _engravingColorHex = "";
  _finish = "Polished";
  _showDiamond = !0;
  _textures = null;
  _currentView = 1;
  _engravingText = "All we need is love";
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
    st(this, {
      _engravingCanvas: Rs.ref,
      _normalMapCanvas: Rs.ref
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
class Va {
  _libState;
  _meshManager;
  _cameraManager;
  _envManager;
  _ringManager;
  constructor(e) {
    this._libState = e, this._meshManager = new ka(e), this._cameraManager = new Ua(e), this._envManager = new Oa(), this._ringManager = new Ha(), st(this);
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
var Di = /* @__PURE__ */ ((c) => (c.WEBSITE = "website", c.CONFIG = "config", c))(Di || {});
const za = {
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
    canvasColor: "#f8f7f2",
    minDistance: 5,
    maxDistance: 10,
    homeDistance: 8,
    minPolarAngle: 0,
    maxPolarAngle: Math.PI / 1.75,
    fitBoxScale: 1
  }
};
class Ga {
  _libState;
  _meshInfoJson = null;
  _jsonUrl = "./init.json";
  _source;
  constructor(e, t = Di.WEBSITE) {
    this._libState = e, this._source = t, st(this);
  }
  get source() {
    return this._source;
  }
  setSource(e) {
    this._source = e;
  }
  get settings() {
    return za[this._source];
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
class ja {
  _libState;
  _viewManager;
  modelMinY = 0;
  constructor(e, t) {
    this._libState = e, this._viewManager = new Ga(e, t), st(this);
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
class Ii {
  _designManager;
  _design3DManager;
  constructor(e) {
    this._designManager = new ja(this, e), this._design3DManager = new Va(this), st(this);
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
const Ka = "#f2efe8";
function Ya({
  color: c = Ka
}) {
  const { scene: e } = ai();
  return ae(() => {
    let t = !1, s = null;
    const n = Ge.getImageByColor(c);
    return new B.TextureLoader().loadAsync(n).then((i) => {
      if (t) {
        i.dispose();
        return;
      }
      s = i, s.colorSpace = B.SRGBColorSpace, e.background = s;
    }).catch((i) => {
      jt.error(`Failed to load scene background texture: ${i}`);
    }), () => {
      t = !0, s && e.background === s && (e.background = null, s.dispose());
    };
  }, [c, e]), null;
}
const Pi = Ye(({ children: c }) => {
  const e = De(null), { designManager: t, design3DManager: s } = pt(), n = t.modelMinY, { currentView: r } = s.ringManager;
  return /* @__PURE__ */ K.jsxs(K.Fragment, { children: [
    c && /* @__PURE__ */ K.jsx("group", { ref: e, children: c }),
    r !== 2 && /* @__PURE__ */ K.jsx(
      Li,
      {
        position: [0, n - 0.02, 0],
        opacity: 0.45,
        scale: 4,
        blur: 2.5,
        far: 3
      }
    )
  ] });
}), Wa = Ye(() => {
  const { design3DManager: c, designManager: e } = pt(), { cameraManager: t, ringManager: s } = c, n = t.cameraRef, r = s.currentView, i = e.viewManager.settings;
  return ae(() => {
    if (n)
      if (r === 2)
        n.minDistance = 1, n.maxDistance = 10, n.minAzimuthAngle = -1 / 0, n.maxAzimuthAngle = 1 / 0, n.minPolarAngle = 0, n.maxPolarAngle = Math.PI, n.smoothTime = 0.8, n.setLookAt(0, 2, -4.4, 0, 0, 0, !0).then(() => {
          if (n.smoothTime = 0.25, s.currentView === 2) {
            n.minDistance = 4.3, n.maxDistance = 5.5;
            const o = n.azimuthAngle, a = n.polarAngle;
            n.minAzimuthAngle = o - 0.25, n.maxAzimuthAngle = o + 0.25, n.minPolarAngle = a - 0.2, n.maxPolarAngle = a + 0.2;
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
}), ec = Ye(
  Bi(
    ({
      backgroundColor: c = "#f2efe8",
      className: e,
      diamondEnvPath: t = "/08.hdr",
      envPath: s = "/env/08.exr",
      style: n,
      source: r
    }, i) => {
      const [o] = si(() => new Ii(r));
      Ci(
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
      ), ae(() => {
        r && o.designManager.viewManager.setSource(r);
      }, [r, o]), ae(() => () => {
        o.dispose();
      }, [o]);
      const a = o.design3DManager.ringManager.isLoaded, u = r ? o.designManager.viewManager.settings.canvasColor : c;
      return /* @__PURE__ */ K.jsx(cs.Provider, { value: o, children: /* @__PURE__ */ K.jsx(
        "div",
        {
          className: e,
          style: {
            height: "100%",
            width: "100%",
            backgroundColor: a ? void 0 : u,
            ...n
          },
          children: /* @__PURE__ */ K.jsxs(
            ci,
            {
              frameloop: "always",
              shadows: !0,
              camera: { fov: 35, position: [0, 0, o.designManager.viewManager.settings.homeDistance] },
              children: [
                /* @__PURE__ */ K.jsx(
                  Ya,
                  {
                    color: r ? o.designManager.viewManager.settings.canvasColor : c
                  }
                ),
                /* @__PURE__ */ K.jsxs(os, { fallback: null, children: [
                  /* @__PURE__ */ K.jsx(
                    ri,
                    {
                      files: s,
                      environmentIntensity: 0.7,
                      environmentRotation: [0, 3.63, 0]
                    }
                  ),
                  /* @__PURE__ */ K.jsx(Ri, { diamondEnvPath: t }),
                  /* @__PURE__ */ K.jsx(Pi, {}),
                  /* @__PURE__ */ K.jsx(Wa, {}),
                  /* @__PURE__ */ K.jsx(
                    oi,
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
), tc = Ye(
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
    backgroundColor: u = "#f8f7f2"
  }) => {
    const l = De(new Ii()).current, { ringManager: d } = l.design3DManager, h = (m, v, p) => {
      const _ = m.charAt(0).toUpperCase() + m.slice(1);
      let g = p.replace(/\s+/g, "");
      return g.endsWith("mm") || (g = `${g}mm`), `/BehytRings/${_}/${v}/${g}/${v}_${g}.glb`;
    }, x = s || t[0] || "", y = x ? h(c, e, x) : "";
    return ae(() => {
      y && d.initModel(y);
    }, [y, d]), ae(() => {
      d.setMetalColor(n);
    }, [n, d]), ae(() => {
      d.setFinish(r);
    }, [r, d]), ae(() => {
      d.setDiamondsVisible(i);
    }, [i, d]), /* @__PURE__ */ K.jsx(cs.Provider, { value: l, children: /* @__PURE__ */ K.jsxs(
      ci,
      {
        frameloop: "always",
        shadows: !0,
        camera: { fov: 35, position: [0, 0, 8] },
        children: [
          /* @__PURE__ */ K.jsx("color", { attach: "background", args: [u] }),
          /* @__PURE__ */ K.jsxs(os, { fallback: null, children: [
            /* @__PURE__ */ K.jsx(
              ri,
              {
                files: o,
                environmentIntensity: 0.7,
                environmentRotation: [0, 3.63, 0]
              }
            ),
            /* @__PURE__ */ K.jsx(Ri, { diamondEnvPath: a }),
            /* @__PURE__ */ K.jsx(Pi, {}),
            /* @__PURE__ */ K.jsx(
              oi,
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
  tc as RingScene,
  ec as SDKViewer,
  ec as Viewer3D,
  Di as ViewerSource
};
