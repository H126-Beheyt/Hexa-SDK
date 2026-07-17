import Kt, { useEffect as ie, useMemo as mn, useState as ii, Suspense as os, useRef as Oe, forwardRef as Ni, useImperativeHandle as Li } from "react";
import { useGLTF as ri, useEnvironment as Fi, ContactShadows as Oi, Environment as oi, CameraControls as ai } from "@react-three/drei";
import { useThree as ci, useLoader as at, useFrame as Ui, Canvas as li } from "@react-three/fiber";
import { observer as $e } from "mobx-react-lite";
import * as L from "three";
import { Box3 as Ne, Matrix4 as Ee, BufferAttribute as St, Vector3 as O, Line3 as Ye, Plane as ui, Vector2 as ke, Triangle as bt, BackSide as ki, DoubleSide as fi, REVISION as di, Ray as Hi, FrontSide as Gn, UnsignedIntType as Ht, FloatType as nt, DataTexture as jn, NearestFilter as et, IntType as Sn, UnsignedByteType as Vt, UnsignedShortType as Vi, ByteType as _s, ShortType as zi, RGBAFormat as yn, RGBAIntegerFormat as Kn, RGIntegerFormat as hi, RedIntegerFormat as Gi, RGFormat as ji, RedFormat as Ki, TrianglesDrawMode as Wi, TriangleFanDrawMode as Wn, TriangleStripDrawMode as mi, Loader as pi, LoaderUtils as zt, FileLoader as as, MeshPhysicalMaterial as Ve, Color as mt, LinearSRGBColorSpace as He, SRGBColorSpace as jt, SpotLight as Yi, PointLight as Xi, DirectionalLight as $i, Quaternion as gi, InstancedMesh as qi, InstancedBufferAttribute as Ji, Object3D as xi, TextureLoader as Zi, ImageBitmapLoader as Qi, InterleavedBuffer as er, InterleavedBufferAttribute as tr, LinearMipmapLinearFilter as yi, NearestMipmapLinearFilter as nr, LinearMipmapNearestFilter as sr, NearestMipmapNearestFilter as ir, LinearFilter as pt, RepeatWrapping as Yn, MirroredRepeatWrapping as rr, ClampToEdgeWrapping as pn, PointsMaterial as or, Material as En, LineBasicMaterial as ar, MeshStandardMaterial as vi, MeshBasicMaterial as kt, PropertyBinding as cr, BufferGeometry as lr, SkinnedMesh as ur, Mesh as fr, LineSegments as dr, Line as hr, LineLoop as mr, Points as pr, Group as Dn, PerspectiveCamera as gr, MathUtils as xr, OrthographicCamera as yr, Skeleton as vr, AnimationClip as _r, Bone as wr, InterpolateDiscrete as Tr, InterpolateLinear as _i, Texture as ws, VectorKeyframeTrack as Ts, NumberKeyframeTrack as Ms, QuaternionKeyframeTrack as As, ColorManagement as bs, Interpolant as Mr, Sphere as Ar, Data3DTexture as br, DataTextureLoader as Rr, HalfFloatType as $t, DataUtils as qt } from "three";
import { makeAutoObservable as it, observable as Rs } from "mobx";
var Jt = { exports: {} }, Dt = {};
var Ss;
function Sr() {
  if (Ss) return Dt;
  Ss = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.fragment");
  function t(s, n, r) {
    var i = null;
    if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) {
      r = {};
      for (var a in n)
        a !== "key" && (r[a] = n[a]);
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
function Er() {
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
        case _:
          return "StrictMode";
        case T:
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
          case v:
            return (D._context.displayName || "Context") + ".Consumer";
          case w:
            var F = D.render;
            return D = D.displayName, D || (D = F.displayName || F.name || "", D = D !== "" ? "ForwardRef(" + D + ")" : "ForwardRef"), D;
          case M:
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
        var U = F.error, j = typeof Symbol == "function" && Symbol.toStringTag && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return U.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
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
    function a(D, F) {
      function U() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          F
        ));
      }
      U.isReactWarning = !0, Object.defineProperty(D, "key", {
        get: U,
        configurable: !0
      });
    }
    function o() {
      var D = c(this.type);
      return H[D] || (H[D] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), D = this.props.ref, D !== void 0 ? D : null;
    }
    function u(D, F, U, j, le, he) {
      var k = U.ref;
      return D = {
        $$typeof: x,
        type: D,
        key: F,
        props: U,
        _owner: j
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(D, "ref", {
        enumerable: !1,
        get: o
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
        value: he
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    }
    function f(D, F, U, j, le, he) {
      var k = F.children;
      if (k !== void 0)
        if (j)
          if (P(k)) {
            for (j = 0; j < k.length; j++)
              l(k[j]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else l(k);
      if (I.call(F, "key")) {
        k = c(D);
        var W = Object.keys(F).filter(function(me) {
          return me !== "key";
        });
        j = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", K[k + j] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          k,
          W,
          k
        ), K[k + j] = !0);
      }
      if (k = null, U !== void 0 && (t(U), k = "" + U), i(F) && (t(F.key), k = "" + F.key), "key" in F) {
        U = {};
        for (var ae in F)
          ae !== "key" && (U[ae] = F[ae]);
      } else U = F;
      return k && a(
        U,
        typeof D == "function" ? D.displayName || D.name || "Unknown" : D
      ), u(
        D,
        k,
        U,
        n(),
        le,
        he
      );
    }
    function l(D) {
      d(D) ? D._store && (D._store.validated = 1) : typeof D == "object" && D !== null && D.$$typeof === S && (D._payload.status === "fulfilled" ? d(D._payload.value) && D._payload.value._store && (D._payload.value._store.validated = 1) : D._store && (D._store.validated = 1));
    }
    function d(D) {
      return typeof D == "object" && D !== null && D.$$typeof === x;
    }
    var h = Kt, x = /* @__PURE__ */ Symbol.for("react.transitional.element"), y = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.fragment"), _ = /* @__PURE__ */ Symbol.for("react.strict_mode"), p = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), T = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.suspense_list"), M = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), E = /* @__PURE__ */ Symbol.for("react.client.reference"), R = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, P = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(D) {
        return D();
      }
    };
    var N, H = {}, G = h.react_stack_bottom_frame.bind(
      h,
      r
    )(), X = B(s(r)), K = {};
    It.Fragment = m, It.jsx = function(D, F, U) {
      var j = 1e4 > R.recentlyCreatedOwnerStacks++;
      return f(
        D,
        F,
        U,
        !1,
        j ? Error("react-stack-top-frame") : G,
        j ? B(s(D)) : X
      );
    }, It.jsxs = function(D, F, U) {
      var j = 1e4 > R.recentlyCreatedOwnerStacks++;
      return f(
        D,
        F,
        U,
        !0,
        j ? Error("react-stack-top-frame") : G,
        j ? B(s(D)) : X
      );
    };
  })()), It;
}
var Ds;
function Dr() {
  return Ds || (Ds = 1, process.env.NODE_ENV === "production" ? Jt.exports = Sr() : Jt.exports = Er()), Jt.exports;
}
var Y = Dr();
const cs = Kt.createContext(null), wi = 0, Ir = 1, Pr = 2, Is = 2, In = 1.25, Ps = 1, ue = 32, ce = ue / 4, ls = 65535, Cr = ls << 16, gn = Math.pow(2, -24), us = /* @__PURE__ */ Symbol("SKIP_GENERATION"), Ti = {
  strategy: wi,
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
function ne(c, e, t) {
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
function Bs(c, e) {
  e.set(c);
}
function Ns(c, e, t) {
  let s, n;
  for (let r = 0; r < 3; r++) {
    const i = r + 3;
    s = c[r], n = e[r], t[r] = s < n ? s : n, s = c[i], n = e[i], t[i] = s > n ? s : n;
  }
}
function Zt(c, e, t) {
  for (let s = 0; s < 3; s++) {
    const n = e[c + 2 * s], r = e[c + 2 * s + 1], i = n - r, a = n + r;
    i < t[s] && (t[s] = i), a > t[s + 3] && (t[s + 3] = a);
  }
}
function Pt(c) {
  const e = c[3] - c[0], t = c[4] - c[1], s = c[5] - c[2];
  return 2 * (e * t + t * s + s * e);
}
function re(c, e) {
  return e[c + 15] === ls;
}
function pe(c, e) {
  return e[c + 6];
}
function ge(c, e) {
  return e[c + 14];
}
function fe(c) {
  return c + ce;
}
function de(c, e) {
  const t = e[c + 6];
  return c + t * ce;
}
function wn(c, e) {
  return e[c + 7];
}
function Pn(c, e, t, s, n) {
  let r = 1 / 0, i = 1 / 0, a = 1 / 0, o = -1 / 0, u = -1 / 0, f = -1 / 0, l = 1 / 0, d = 1 / 0, h = 1 / 0, x = -1 / 0, y = -1 / 0, m = -1 / 0;
  const _ = c.offset || 0;
  for (let p = (e - _) * 6, v = (e + t - _) * 6; p < v; p += 6) {
    const g = c[p + 0], w = c[p + 1], T = g - w, A = g + w;
    T < r && (r = T), A > o && (o = A), g < l && (l = g), g > x && (x = g);
    const M = c[p + 2], S = c[p + 3], b = M - S, E = M + S;
    b < i && (i = b), E > u && (u = E), M < d && (d = M), M > y && (y = M);
    const R = c[p + 4], I = c[p + 5], P = R - I, B = R + I;
    P < a && (a = P), B > f && (f = B), R < h && (h = R), R > m && (m = R);
  }
  s[0] = r, s[1] = i, s[2] = a, s[3] = o, s[4] = u, s[5] = f, n[0] = l, n[1] = d, n[2] = h, n[3] = x, n[4] = y, n[5] = m;
}
const je = 32, Br = (c, e) => c.candidate - e.candidate, Je = /* @__PURE__ */ new Array(je).fill().map(() => ({
  count: 0,
  bounds: new Float32Array(6),
  rightCacheBounds: new Float32Array(6),
  leftCacheBounds: new Float32Array(6),
  candidate: 0
})), Qt = /* @__PURE__ */ new Float32Array(6);
function Nr(c, e, t, s, n, r) {
  let i = -1, a = 0;
  if (r === wi)
    i = Cs(e), i !== -1 && (a = (e[i] + e[i + 3]) / 2);
  else if (r === Ir)
    i = Cs(c), i !== -1 && (a = Lr(t, s, n, i));
  else if (r === Pr) {
    const o = Pt(c);
    let u = In * n;
    const f = t.offset || 0, l = (s - f) * 6, d = (s + n - f) * 6;
    for (let h = 0; h < 3; h++) {
      const x = e[h], _ = (e[h + 3] - x) / je;
      if (n < je / 4) {
        const p = [...Je];
        p.length = n;
        let v = 0;
        for (let w = l; w < d; w += 6, v++) {
          const T = p[v];
          T.candidate = t[w + 2 * h], T.count = 0;
          const {
            bounds: A,
            leftCacheBounds: M,
            rightCacheBounds: S
          } = T;
          for (let b = 0; b < 3; b++)
            S[b] = 1 / 0, S[b + 3] = -1 / 0, M[b] = 1 / 0, M[b + 3] = -1 / 0, A[b] = 1 / 0, A[b + 3] = -1 / 0;
          Zt(w, t, A);
        }
        p.sort(Br);
        let g = n;
        for (let w = 0; w < g; w++) {
          const T = p[w];
          for (; w + 1 < g && p[w + 1].candidate === T.candidate; )
            p.splice(w + 1, 1), g--;
        }
        for (let w = l; w < d; w += 6) {
          const T = t[w + 2 * h];
          for (let A = 0; A < g; A++) {
            const M = p[A];
            T >= M.candidate ? Zt(w, t, M.rightCacheBounds) : (Zt(w, t, M.leftCacheBounds), M.count++);
          }
        }
        for (let w = 0; w < g; w++) {
          const T = p[w], A = T.count, M = n - T.count, S = T.leftCacheBounds, b = T.rightCacheBounds;
          let E = 0;
          A !== 0 && (E = Pt(S) / o);
          let R = 0;
          M !== 0 && (R = Pt(b) / o);
          const I = Ps + In * (E * A + R * M);
          I < u && (i = h, u = I, a = T.candidate);
        }
      } else {
        for (let g = 0; g < je; g++) {
          const w = Je[g];
          w.count = 0, w.candidate = x + _ + g * _;
          const T = w.bounds;
          for (let A = 0; A < 3; A++)
            T[A] = 1 / 0, T[A + 3] = -1 / 0;
        }
        for (let g = l; g < d; g += 6) {
          let A = ~~((t[g + 2 * h] - x) / _);
          A >= je && (A = je - 1);
          const M = Je[A];
          M.count++, Zt(g, t, M.bounds);
        }
        const p = Je[je - 1];
        Bs(p.bounds, p.rightCacheBounds);
        for (let g = je - 2; g >= 0; g--) {
          const w = Je[g], T = Je[g + 1];
          Ns(w.bounds, T.rightCacheBounds, w.rightCacheBounds);
        }
        let v = 0;
        for (let g = 0; g < je - 1; g++) {
          const w = Je[g], T = w.count, A = w.bounds, S = Je[g + 1].rightCacheBounds;
          T !== 0 && (v === 0 ? Bs(A, Qt) : Ns(A, Qt, Qt)), v += T;
          let b = 0, E = 0;
          v !== 0 && (b = Pt(Qt) / o);
          const R = n - v;
          R !== 0 && (E = Pt(S) / o);
          const I = Ps + In * (b * v + E * R);
          I < u && (i = h, u = I, a = w.candidate);
        }
      }
    }
  } else
    console.warn(`BVH: Invalid build strategy value ${r} used.`);
  return { axis: i, pos: a };
}
function Lr(c, e, t, s) {
  let n = 0;
  const r = c.offset;
  for (let i = e, a = e + t; i < a; i++)
    n += c[(i - r) * 6 + s * 2];
  return n / t;
}
class Cn {
  constructor() {
    this.boundingData = new Float32Array(6);
  }
}
function Fr(c, e, t, s, n, r) {
  let i = s, a = s + n - 1;
  const o = r.pos, u = r.axis * 2, f = t.offset || 0;
  for (; ; ) {
    for (; i <= a && t[(i - f) * 6 + u] < o; )
      i++;
    for (; i <= a && t[(a - f) * 6 + u] >= o; )
      a--;
    if (i < a) {
      for (let l = 0; l < e; l++) {
        let d = c[i * e + l];
        c[i * e + l] = c[a * e + l], c[a * e + l] = d;
      }
      for (let l = 0; l < 6; l++) {
        const d = i - f, h = a - f, x = t[d * 6 + l];
        t[d * 6 + l] = t[h * 6 + l], t[h * 6 + l] = x;
      }
      i++, a--;
    } else
      return i;
  }
}
let Mi, xn, Xn, Ai;
const Or = Math.pow(2, 32);
function $n(c) {
  return "count" in c ? 1 : 1 + $n(c.left) + $n(c.right);
}
function Ur(c, e, t) {
  return Mi = new Float32Array(t), xn = new Uint32Array(t), Xn = new Uint16Array(t), Ai = new Uint8Array(t), qn(c, e);
}
function qn(c, e) {
  const t = c / 4, s = c / 2, n = "count" in e, r = e.boundingData;
  for (let i = 0; i < 6; i++)
    Mi[t + i] = r[i];
  if (n)
    return e.buffer ? (Ai.set(new Uint8Array(e.buffer), c), c + e.buffer.byteLength) : (xn[t + 6] = e.offset, Xn[s + 14] = e.count, Xn[s + 15] = ls, c + ue);
  {
    const { left: i, right: a, splitAxis: o } = e, u = c + ue;
    let f = qn(u, i);
    const l = c / ue, h = f / ue - l;
    if (h > Or)
      throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");
    return xn[t + 6] = h, xn[t + 7] = o, qn(f, a);
  }
}
function kr(c, e, t, s, n, r) {
  const {
    maxDepth: i,
    verbose: a,
    maxLeafSize: o,
    strategy: u,
    onProgress: f
  } = n, l = c.primitiveBuffer, d = c.primitiveBufferStride, h = new Float32Array(6);
  let x = !1;
  const y = new Cn();
  return Pn(e, t, s, y.boundingData, h), _(y, t, s, h), y;
  function m(p) {
    f && f((p - r.offset) / r.count);
  }
  function _(p, v, g, w = null, T = 0) {
    if (!x && T >= i && (x = !0, a && console.warn(`BVH: Max depth of ${i} reached when generating BVH. Consider increasing maxDepth.`)), g <= o || T >= i)
      return m(v + g), p.offset = v, p.count = g, p;
    const A = Nr(p.boundingData, w, e, v, g, u);
    if (A.axis === -1)
      return m(v + g), p.offset = v, p.count = g, p;
    const M = Fr(l, d, e, v, g, A);
    if (M === v || M === v + g)
      m(v + g), p.offset = v, p.count = g;
    else {
      p.splitAxis = A.axis;
      const S = new Cn(), b = v, E = M - v;
      p.left = S, Pn(e, b, E, S.boundingData, h), _(S, b, E, h, T + 1);
      const R = new Cn(), I = M, P = g - E;
      p.right = R, Pn(e, I, P, R.boundingData, h), _(R, I, P, h, T + 1);
    }
    return p;
  }
}
function Hr(c, e) {
  const t = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, s = c.getRootRanges(e.range), n = s[0], r = s[s.length - 1], i = {
    offset: n.offset,
    count: r.offset + r.count - n.offset
  }, a = new Float32Array(6 * i.count);
  a.offset = i.offset, c.computePrimitiveBounds(i.offset, i.count, a), c._roots = s.map((o) => {
    const u = kr(c, a, o.offset, o.count, e, i), f = $n(u), l = new t(ue * f);
    return Ur(0, u, l), l;
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
class Vr {
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
const J = /* @__PURE__ */ new Vr();
let tt, Rt;
const xt = [], en = /* @__PURE__ */ new fs(() => new Ne());
function zr(c, e, t, s, n, r) {
  tt = en.getPrimitive(), Rt = en.getPrimitive(), xt.push(tt, Rt), J.setBuffer(c._roots[e]);
  const i = Jn(0, c.geometry, t, s, n, r);
  J.clearBuffer(), en.releasePrimitive(tt), en.releasePrimitive(Rt), xt.pop(), xt.pop();
  const a = xt.length;
  return a > 0 && (Rt = xt[a - 1], tt = xt[a - 2]), i;
}
function Jn(c, e, t, s, n = null, r = 0, i = 0) {
  const { float32Array: a, uint16Array: o, uint32Array: u } = J;
  let f = c * 2;
  if (re(f, o)) {
    const d = pe(c, u), h = ge(f, o);
    return ne(c, a, tt), s(d, h, !1, i, r + c / ce, tt);
  } else {
    let b = function(R) {
      const { uint16Array: I, uint32Array: P } = J;
      let B = R * 2;
      for (; !re(B, I); )
        R = fe(R), B = R * 2;
      return pe(R, P);
    }, E = function(R) {
      const { uint16Array: I, uint32Array: P } = J;
      let B = R * 2;
      for (; !re(B, I); )
        R = de(R, P), B = R * 2;
      return pe(R, P) + ge(B, I);
    };
    const d = fe(c), h = de(c, u);
    let x = d, y = h, m, _, p, v;
    if (n && (p = tt, v = Rt, ne(x, a, p), ne(y, a, v), m = n(p), _ = n(v), _ < m)) {
      x = h, y = d;
      const R = m;
      m = _, _ = R, p = v;
    }
    p || (p = tt, ne(x, a, p));
    const g = re(x * 2, o), w = t(p, g, m, i + 1, r + x / ce);
    let T;
    if (w === Is) {
      const R = b(x), P = E(x) - R;
      T = s(R, P, !0, i + 1, r + x / ce, p);
    } else
      T = w && Jn(
        x,
        e,
        t,
        s,
        n,
        r,
        i + 1
      );
    if (T) return !0;
    v = Rt, ne(y, a, v);
    const A = re(y * 2, o), M = t(v, A, _, i + 1, r + y / ce);
    let S;
    if (M === Is) {
      const R = b(y), P = E(y) - R;
      S = s(R, P, !0, i + 1, r + y / ce, v);
    } else
      S = M && Jn(
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
const Gt = /* @__PURE__ */ new J.constructor(), vn = /* @__PURE__ */ new J.constructor(), Qe = /* @__PURE__ */ new fs(() => new Ne()), yt = /* @__PURE__ */ new Ne(), vt = /* @__PURE__ */ new Ne(), Bn = /* @__PURE__ */ new Ne(), Nn = /* @__PURE__ */ new Ne();
let Ln = !1;
function Gr(c, e, t, s) {
  if (Ln)
    throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");
  Ln = !0;
  const n = c._roots, r = e._roots;
  let i, a = 0, o = 0;
  const u = new Ee().copy(t).invert();
  for (let f = 0, l = n.length; f < l; f++) {
    Gt.setBuffer(n[f]), o = 0;
    const d = Qe.getPrimitive();
    ne(0, Gt.float32Array, d), d.applyMatrix4(u);
    for (let h = 0, x = r.length; h < x && (vn.setBuffer(r[h]), i = Ce(
      0,
      0,
      t,
      u,
      s,
      a,
      o,
      0,
      0,
      d
    ), vn.clearBuffer(), o += r[h].byteLength / ue, !i); h++)
      ;
    if (Qe.releasePrimitive(d), Gt.clearBuffer(), a += n[f].byteLength / ue, i)
      break;
  }
  return Ln = !1, i;
}
function Ce(c, e, t, s, n, r = 0, i = 0, a = 0, o = 0, u = null, f = !1) {
  let l, d;
  f ? (l = vn, d = Gt) : (l = Gt, d = vn);
  const h = l.float32Array, x = l.uint32Array, y = l.uint16Array, m = d.float32Array, _ = d.uint32Array, p = d.uint16Array, v = c * 2, g = e * 2, w = re(v, y), T = re(g, p);
  let A = !1;
  if (T && w)
    f ? A = n(
      pe(e, _),
      ge(e * 2, p),
      pe(c, x),
      ge(c * 2, y),
      o,
      i + e / ce,
      a,
      r + c / ce
    ) : A = n(
      pe(c, x),
      ge(c * 2, y),
      pe(e, _),
      ge(e * 2, p),
      a,
      r + c / ce,
      o,
      i + e / ce
    );
  else if (T) {
    const M = Qe.getPrimitive();
    ne(e, m, M), M.applyMatrix4(t);
    const S = fe(c), b = de(c, x);
    ne(S, h, yt), ne(b, h, vt);
    const E = M.intersectsBox(yt), R = M.intersectsBox(vt);
    A = E && Ce(
      e,
      S,
      s,
      t,
      n,
      i,
      r,
      o,
      a + 1,
      M,
      !f
    ) || R && Ce(
      e,
      b,
      s,
      t,
      n,
      i,
      r,
      o,
      a + 1,
      M,
      !f
    ), Qe.releasePrimitive(M);
  } else {
    const M = fe(e), S = de(e, _);
    ne(M, m, Bn), ne(S, m, Nn);
    const b = u.intersectsBox(Bn), E = u.intersectsBox(Nn);
    if (b && E)
      A = Ce(
        c,
        M,
        t,
        s,
        n,
        r,
        i,
        a,
        o + 1,
        u,
        f
      ) || Ce(
        c,
        S,
        t,
        s,
        n,
        r,
        i,
        a,
        o + 1,
        u,
        f
      );
    else if (b)
      if (w)
        A = Ce(
          c,
          M,
          t,
          s,
          n,
          r,
          i,
          a,
          o + 1,
          u,
          f
        );
      else {
        const R = Qe.getPrimitive();
        R.copy(Bn).applyMatrix4(t);
        const I = fe(c), P = de(c, x);
        ne(I, h, yt), ne(P, h, vt);
        const B = R.intersectsBox(yt), N = R.intersectsBox(vt);
        A = B && Ce(
          M,
          I,
          s,
          t,
          n,
          i,
          r,
          o,
          a + 1,
          R,
          !f
        ) || N && Ce(
          M,
          P,
          s,
          t,
          n,
          i,
          r,
          o,
          a + 1,
          R,
          !f
        ), Qe.releasePrimitive(R);
      }
    else if (E)
      if (w)
        A = Ce(
          c,
          S,
          t,
          s,
          n,
          r,
          i,
          a,
          o + 1,
          u,
          f
        );
      else {
        const R = Qe.getPrimitive();
        R.copy(Nn).applyMatrix4(t);
        const I = fe(c), P = de(c, x);
        ne(I, h, yt), ne(P, h, vt);
        const B = R.intersectsBox(yt), N = R.intersectsBox(vt);
        A = B && Ce(
          S,
          I,
          s,
          t,
          n,
          i,
          r,
          o,
          a + 1,
          R,
          !f
        ) || N && Ce(
          S,
          P,
          s,
          t,
          n,
          i,
          r,
          o,
          a + 1,
          R,
          !f
        ), Qe.releasePrimitive(R);
      }
  }
  return A;
}
const Ls = /* @__PURE__ */ new Ne(), _t = /* @__PURE__ */ new Float32Array(6);
class jr {
  constructor() {
    this._roots = null, this.primitiveBuffer = null, this.primitiveBufferStride = null;
  }
  init(e) {
    e = {
      ...Ti,
      ...e
    }, Hr(this, e);
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
    let r = 1 / 0, i = 1 / 0, a = 1 / 0, o = -1 / 0, u = -1 / 0, f = -1 / 0;
    for (let l = e, d = e + t; l < d; l++) {
      this.writePrimitiveBounds(l, _t, 0);
      const [h, x, y, m, _, p] = _t;
      h < r && (r = h), m > o && (o = m), x < i && (i = x), _ > u && (u = _), y < a && (a = y), p > f && (f = p);
    }
    return s[n + 0] = r, s[n + 1] = i, s[n + 2] = a, s[n + 3] = o, s[n + 4] = u, s[n + 5] = f, s;
  }
  computePrimitiveBounds(e, t, s) {
    const n = s.offset || 0;
    for (let r = e, i = e + t; r < i; r++) {
      this.writePrimitiveBounds(r, _t, 0);
      const [a, o, u, f, l, d] = _t, h = (a + f) / 2, x = (o + l) / 2, y = (u + d) / 2, m = (f - a) / 2, _ = (l - o) / 2, p = (d - u) / 2, v = (r - n) * 6;
      s[v + 0] = h, s[v + 1] = m + (Math.abs(h) + m) * gn, s[v + 2] = x, s[v + 3] = _ + (Math.abs(x) + _) * gn, s[v + 4] = y, s[v + 5] = p + (Math.abs(y) + p) * gn;
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
        const r = s[n], i = new Uint32Array(r), a = new Uint16Array(r), o = r.byteLength / ue;
        for (let u = 0; u < o; u++) {
          const f = ce * u, l = 2 * f;
          re(l, a) && (i[f + 6] += e);
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
    function i(a, o = 0) {
      const u = a * 2, f = re(u, r);
      if (f) {
        const l = n[a + 6], d = r[u + 14];
        e(o, f, new Float32Array(s, a * 4, 6), l, d);
      } else {
        const l = fe(a), d = de(a, n), h = wn(a, n);
        e(o, f, new Float32Array(s, a * 4, 6), h) || (i(l, o + 1), i(d, o + 1));
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
      const n = e[t], r = new Uint32Array(n), i = new Uint16Array(n), a = new Float32Array(n), o = n.byteLength / ue;
      for (let u = o - 1; u >= 0; u--) {
        const f = u * ce, l = f * 2;
        if (re(l, i)) {
          const h = pe(f, r), x = ge(l, i);
          this.writePrimitiveRangeBounds(h, x, _t, 0), a.set(_t, f);
        } else {
          const h = fe(f), x = de(f, r);
          for (let y = 0; y < 3; y++) {
            const m = a[h + y], _ = a[h + y + 3], p = a[x + y], v = a[x + y + 3];
            a[f + y] = m < p ? m : p, a[f + y + 3] = _ > v ? _ : v;
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
      ne(0, new Float32Array(s), Ls), e.union(Ls);
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
      iterate: a
    } = e;
    if (n && r) {
      const l = n;
      n = (d, h, x, y, m) => l(d, h, x, y, m) ? !0 : a(d, h, this, r, x, y, i);
    } else n || (r ? n = (l, d, h, x) => a(l, d, this, r, h, x, i) : n = (l, d, h) => h);
    let o = !1, u = 0;
    const f = this._roots;
    for (let l = 0, d = f.length; l < d; l++) {
      const h = f[l];
      if (o = zr(this, l, s, n, t, u), o)
        break;
      u += h.byteLength / ue;
    }
    return o;
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
    return Gr(this, e, t, n);
  }
}
function Kr() {
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
function Wr(c, e) {
  if (!c.index) {
    const t = c.attributes.position.count, s = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, n = bi(t, s);
    c.setIndex(new St(n, 1));
    for (let r = 0; r < t; r++)
      n[r] = r;
  }
}
function Yr(c, e, t) {
  const s = Tn(c) / t, n = e || c.drawRange, r = n.start / t, i = (n.start + n.count) / t, a = Math.max(0, r), o = Math.min(s, i) - a;
  return {
    offset: Math.floor(a),
    count: Math.floor(o)
  };
}
function Xr(c, e) {
  return c.groups.map((t) => ({
    offset: t.start / e,
    count: t.count / e
  }));
}
function Fs(c, e, t) {
  const s = Yr(c, e, t), n = Xr(c, t);
  if (!n.length)
    return [s];
  const r = [], i = s.offset, a = s.offset + s.count, o = Tn(c) / t, u = [];
  for (const d of n) {
    const { offset: h, count: x } = d, y = h, m = isFinite(x) ? x : o - h, _ = h + m;
    y < a && _ > i && (u.push({ pos: Math.max(i, y), isStart: !0 }), u.push({ pos: Math.min(a, _), isStart: !1 }));
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
function $r(c, e) {
  const t = c[c.length - 1], s = t.offset + t.count > 2 ** 16, n = c.reduce((u, f) => u + f.count, 0), r = s ? 4 : 2, i = e ? new SharedArrayBuffer(n * r) : new ArrayBuffer(n * r), a = s ? new Uint32Array(i) : new Uint16Array(i);
  let o = 0;
  for (let u = 0; u < c.length; u++) {
    const { offset: f, count: l } = c[u];
    for (let d = 0; d < l; d++)
      a[o + d] = f + d;
    o += l;
  }
  return a;
}
class qr extends jr {
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
    if (t.useSharedArrayBuffer && !Kr())
      throw new Error("BVH: SharedArrayBuffer is not available.");
    super(), this.geometry = e, this.resolvePrimitiveIndex = t.indirect ? (s) => this._indirectBuffer[s] : (s) => s, this.primitiveBuffer = null, this.primitiveBufferStride = null, this._indirectBuffer = null, t = {
      ...Ti,
      ...t
    }, t[us] || this.init(t);
  }
  init(e) {
    const { geometry: t, primitiveStride: s } = this;
    if (e.indirect) {
      const n = Fs(t, e.range, s), r = $r(n, e.useSharedArrayBuffer);
      this._indirectBuffer = r;
    } else
      Wr(t, e);
    super.init(e), !t.boundingBox && e.setBoundingBox && (t.boundingBox = this.getBoundingBox(new Ne()));
  }
  // Abstract methods to be implemented by subclasses
  getRootRanges(e) {
    return this.indirect ? [{ offset: 0, count: this._indirectBuffer.length }] : Fs(this.geometry, e, this.primitiveStride);
  }
  raycastObject3D() {
    throw new Error("BVH: raycastObject3D() not implemented");
  }
}
class Xe {
  constructor() {
    this.min = 1 / 0, this.max = -1 / 0;
  }
  setFromPointsField(e, t) {
    let s = 1 / 0, n = -1 / 0;
    for (let r = 0, i = e.length; r < i; r++) {
      const o = e[r][t];
      s = o < s ? o : s, n = o > n ? o : n;
    }
    this.min = s, this.max = n;
  }
  setFromPoints(e, t) {
    let s = 1 / 0, n = -1 / 0;
    for (let r = 0, i = t.length; r < i; r++) {
      const a = t[r], o = e.dot(a);
      s = o < s ? o : s, n = o > n ? o : n;
    }
    this.min = s, this.max = n;
  }
  isSeparated(e) {
    return this.min > e.max || e.min > this.max;
  }
}
Xe.prototype.setFromBox = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new O();
  return function(t, s) {
    const n = s.min, r = s.max;
    let i = 1 / 0, a = -1 / 0;
    for (let o = 0; o <= 1; o++)
      for (let u = 0; u <= 1; u++)
        for (let f = 0; f <= 1; f++) {
          c.x = n.x * o + r.x * (1 - o), c.y = n.y * u + r.y * (1 - u), c.z = n.z * f + r.z * (1 - f);
          const l = t.dot(c);
          i = Math.min(l, i), a = Math.max(l, a);
        }
    this.min = i, this.max = a;
  };
})();
const Jr = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new O(), e = /* @__PURE__ */ new O(), t = /* @__PURE__ */ new O();
  return function(n, r, i) {
    const a = n.start, o = c, u = r.start, f = e;
    t.subVectors(a, u), c.subVectors(n.end, n.start), e.subVectors(r.end, r.start);
    const l = t.dot(f), d = f.dot(o), h = f.dot(f), x = t.dot(o), m = o.dot(o) * h - d * d;
    let _, p;
    m !== 0 ? _ = (l * d - x * h) / m : _ = 0, p = (l + _ * d) / h, i.x = _, i.y = p;
  };
})(), ds = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new ke(), e = /* @__PURE__ */ new O(), t = /* @__PURE__ */ new O();
  return function(n, r, i, a) {
    Jr(n, r, c);
    let o = c.x, u = c.y;
    if (o >= 0 && o <= 1 && u >= 0 && u <= 1) {
      n.at(o, i), r.at(u, a);
      return;
    } else if (o >= 0 && o <= 1) {
      u < 0 ? r.at(0, a) : r.at(1, a), n.closestPointToPoint(a, !0, i);
      return;
    } else if (u >= 0 && u <= 1) {
      o < 0 ? n.at(0, i) : n.at(1, i), r.closestPointToPoint(i, !0, a);
      return;
    } else {
      let f;
      o < 0 ? f = n.start : f = n.end;
      let l;
      u < 0 ? l = r.start : l = r.end;
      const d = e, h = t;
      if (n.closestPointToPoint(l, !0, e), r.closestPointToPoint(f, !0, t), d.distanceToSquared(l) <= h.distanceToSquared(f)) {
        i.copy(d), a.copy(l);
        return;
      } else {
        i.copy(f), a.copy(h);
        return;
      }
    }
  };
})(), Zr = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new O(), e = /* @__PURE__ */ new O(), t = /* @__PURE__ */ new ui(), s = /* @__PURE__ */ new Ye();
  return function(r, i) {
    const { radius: a, center: o } = r, { a: u, b: f, c: l } = i;
    if (s.start = u, s.end = f, s.closestPointToPoint(o, !0, c).distanceTo(o) <= a || (s.start = u, s.end = l, s.closestPointToPoint(o, !0, c).distanceTo(o) <= a) || (s.start = f, s.end = l, s.closestPointToPoint(o, !0, c).distanceTo(o) <= a)) return !0;
    const y = i.getPlane(t);
    if (Math.abs(y.distanceToPoint(o)) <= a) {
      const _ = y.projectPoint(o, e);
      if (i.containsPoint(_)) return !0;
    }
    return !1;
  };
})(), Qr = ["x", "y", "z"], Ke = 1e-15, Os = Ke * Ke;
function Ae(c) {
  return Math.abs(c) < Ke;
}
class Be extends bt {
  constructor(...e) {
    super(...e), this.isExtendedTriangle = !0, this.satAxes = new Array(4).fill().map(() => new O()), this.satBounds = new Array(4).fill().map(() => new Xe()), this.points = [this.a, this.b, this.c], this.plane = new ui(), this.isDegenerateIntoSegment = !1, this.isDegenerateIntoPoint = !1, this.degenerateSegment = new Ye(), this.needsUpdate = !0;
  }
  /**
   * Returns whether the triangle intersects the given sphere.
   * @param {Sphere} sphere
   * @returns {boolean}
   */
  intersectsSphere(e) {
    return Zr(e, this);
  }
  update() {
    const e = this.a, t = this.b, s = this.c, n = this.points, r = this.satAxes, i = this.satBounds, a = r[0], o = i[0];
    this.getNormal(a), o.setFromPoints(a, n);
    const u = r[1], f = i[1];
    u.subVectors(e, t), f.setFromPoints(u, n);
    const l = r[2], d = i[2];
    l.subVectors(t, s), d.setFromPoints(l, n);
    const h = r[3], x = i[3];
    h.subVectors(s, e), x.setFromPoints(h, n);
    const y = u.length(), m = l.length(), _ = h.length();
    this.isDegenerateIntoPoint = !1, this.isDegenerateIntoSegment = !1, y < Ke ? m < Ke || _ < Ke ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(e), this.degenerateSegment.end.copy(s)) : m < Ke ? _ < Ke ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(t), this.degenerateSegment.end.copy(e)) : _ < Ke && (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(s), this.degenerateSegment.end.copy(t)), this.plane.setFromNormalAndCoplanarPoint(a, e), this.needsUpdate = !1;
  }
}
Be.prototype.closestPointToSegment = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new O(), e = /* @__PURE__ */ new O(), t = /* @__PURE__ */ new Ye();
  return function(n, r = null, i = null) {
    const { start: a, end: o } = n, u = this.points;
    let f, l = 1 / 0;
    for (let d = 0; d < 3; d++) {
      const h = (d + 1) % 3;
      t.start.copy(u[d]), t.end.copy(u[h]), ds(t, n, c, e), f = c.distanceToSquared(e), f < l && (l = f, r && r.copy(c), i && i.copy(e));
    }
    return this.closestPointToPoint(a, c), f = a.distanceToSquared(c), f < l && (l = f, r && r.copy(c), i && i.copy(a)), this.closestPointToPoint(o, c), f = o.distanceToSquared(c), f < l && (l = f, r && r.copy(c), i && i.copy(o)), Math.sqrt(l);
  };
})();
Be.prototype.intersectsTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Be(), e = /* @__PURE__ */ new Xe(), t = /* @__PURE__ */ new Xe(), s = /* @__PURE__ */ new O(), n = /* @__PURE__ */ new O(), r = /* @__PURE__ */ new O(), i = /* @__PURE__ */ new O(), a = /* @__PURE__ */ new Ye(), o = /* @__PURE__ */ new Ye(), u = /* @__PURE__ */ new O(), f = /* @__PURE__ */ new ke(), l = /* @__PURE__ */ new ke();
  function d(v, g, w, T) {
    const A = s;
    !v.isDegenerateIntoPoint && !v.isDegenerateIntoSegment ? A.copy(v.plane.normal) : A.copy(g.plane.normal);
    const M = v.satBounds, S = v.satAxes;
    for (let R = 1; R < 4; R++) {
      const I = M[R], P = S[R];
      if (e.setFromPoints(P, g.points), I.isSeparated(e) || (i.copy(A).cross(P), e.setFromPoints(i, v.points), t.setFromPoints(i, g.points), e.isSeparated(t))) return !1;
    }
    const b = g.satBounds, E = g.satAxes;
    for (let R = 1; R < 4; R++) {
      const I = b[R], P = E[R];
      if (e.setFromPoints(P, v.points), I.isSeparated(e) || (i.crossVectors(A, P), e.setFromPoints(i, v.points), t.setFromPoints(i, g.points), e.isSeparated(t))) return !1;
    }
    return w && (T || console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."), w.start.set(0, 0, 0), w.end.set(0, 0, 0)), !0;
  }
  function h(v, g, w, T, A, M, S, b, E, R, I) {
    let P = S / (S - b);
    R.x = T + (A - T) * P, I.start.subVectors(g, v).multiplyScalar(P).add(v), P = S / (S - E), R.y = T + (M - T) * P, I.end.subVectors(w, v).multiplyScalar(P).add(v);
  }
  function x(v, g, w, T, A, M, S, b, E, R, I) {
    if (A > 0)
      h(v.c, v.a, v.b, T, g, w, E, S, b, R, I);
    else if (M > 0)
      h(v.b, v.a, v.c, w, g, T, b, S, E, R, I);
    else if (b * E > 0 || S != 0)
      h(v.a, v.b, v.c, g, w, T, S, b, E, R, I);
    else if (b != 0)
      h(v.b, v.a, v.c, w, g, T, b, S, E, R, I);
    else if (E != 0)
      h(v.c, v.a, v.b, T, g, w, E, S, b, R, I);
    else
      return !0;
    return !1;
  }
  function y(v, g, w, T) {
    const A = g.degenerateSegment, M = v.plane.distanceToPoint(A.start), S = v.plane.distanceToPoint(A.end);
    return Ae(M) ? Ae(S) ? d(v, g, w, T) : (w && (w.start.copy(A.start), w.end.copy(A.start)), v.containsPoint(A.start)) : Ae(S) ? (w && (w.start.copy(A.end), w.end.copy(A.end)), v.containsPoint(A.end)) : v.plane.intersectLine(A, s) != null ? (w && (w.start.copy(s), w.end.copy(s)), v.containsPoint(s)) : !1;
  }
  function m(v, g, w) {
    const T = g.a;
    return Ae(v.plane.distanceToPoint(T)) && v.containsPoint(T) ? (w && (w.start.copy(T), w.end.copy(T)), !0) : !1;
  }
  function _(v, g, w) {
    const T = v.degenerateSegment, A = g.a;
    return T.closestPointToPoint(A, !0, s), A.distanceToSquared(s) < Os ? (w && (w.start.copy(A), w.end.copy(A)), !0) : !1;
  }
  function p(v, g, w, T) {
    if (v.isDegenerateIntoSegment)
      if (g.isDegenerateIntoSegment) {
        const A = v.degenerateSegment, M = g.degenerateSegment, S = n, b = r;
        A.delta(S), M.delta(b);
        const E = s.subVectors(M.start, A.start), R = S.x * b.y - S.y * b.x;
        if (Ae(R))
          return !1;
        const I = (E.x * b.y - E.y * b.x) / R, P = -(S.x * E.y - S.y * E.x) / R;
        if (I < 0 || I > 1 || P < 0 || P > 1)
          return !1;
        const B = A.start.z + S.z * I, N = M.start.z + b.z * P;
        return Ae(B - N) ? (w && (w.start.copy(A.start).addScaledVector(S, I), w.end.copy(A.start).addScaledVector(S, I)), !0) : !1;
      } else return g.isDegenerateIntoPoint ? _(v, g, w) : y(g, v, w, T);
    else {
      if (v.isDegenerateIntoPoint)
        return g.isDegenerateIntoPoint ? g.a.distanceToSquared(v.a) < Os ? (w && (w.start.copy(v.a), w.end.copy(v.a)), !0) : !1 : g.isDegenerateIntoSegment ? _(g, v, w) : m(g, v, w);
      if (g.isDegenerateIntoPoint)
        return m(v, g, w);
      if (g.isDegenerateIntoSegment)
        return y(v, g, w, T);
    }
  }
  return function(g, w = null, T = !1) {
    this.needsUpdate && this.update(), g.isExtendedTriangle ? g.needsUpdate && g.update() : (c.copy(g), c.update(), g = c);
    const A = p(this, g, w, T);
    if (A !== void 0)
      return A;
    const M = this.plane, S = g.plane;
    let b = S.distanceToPoint(this.a), E = S.distanceToPoint(this.b), R = S.distanceToPoint(this.c);
    Ae(b) && (b = 0), Ae(E) && (E = 0), Ae(R) && (R = 0);
    const I = b * E, P = b * R;
    if (I > 0 && P > 0)
      return !1;
    let B = M.distanceToPoint(g.a), N = M.distanceToPoint(g.b), H = M.distanceToPoint(g.c);
    Ae(B) && (B = 0), Ae(N) && (N = 0), Ae(H) && (H = 0);
    const G = B * N, X = B * H;
    if (G > 0 && X > 0)
      return !1;
    n.copy(M.normal), r.copy(S.normal);
    const K = n.cross(r);
    let D = 0, F = Math.abs(K.x);
    const U = Math.abs(K.y);
    U > F && (F = U, D = 1), Math.abs(K.z) > F && (D = 2);
    const le = Qr[D], he = this.a[le], k = this.b[le], W = this.c[le], ae = g.a[le], me = g.b[le], De = g.c[le];
    if (x(this, he, k, W, I, P, b, E, R, f, a))
      return d(this, g, w, T);
    if (x(g, ae, me, De, G, X, B, N, H, l, o))
      return d(this, g, w, T);
    if (f.y < f.x) {
      const Ie = f.y;
      f.y = f.x, f.x = Ie, u.copy(a.start), a.start.copy(a.end), a.end.copy(u);
    }
    if (l.y < l.x) {
      const Ie = l.y;
      l.y = l.x, l.x = Ie, u.copy(o.start), o.start.copy(o.end), o.end.copy(u);
    }
    return f.y < l.x || l.y < f.x ? !1 : (w && (l.x > f.x ? w.start.copy(o.start) : w.start.copy(a.start), l.y < f.y ? w.end.copy(o.end) : w.end.copy(a.end)), !0);
  };
})();
Be.prototype.distanceToPoint = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new O();
  return function(t) {
    return this.closestPointToPoint(t, c), t.distanceTo(c);
  };
})();
Be.prototype.distanceToTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new O(), e = /* @__PURE__ */ new O(), t = ["a", "b", "c"], s = /* @__PURE__ */ new Ye(), n = /* @__PURE__ */ new Ye();
  return function(i, a = null, o = null) {
    const u = a || o ? s : null;
    if (this.intersectsTriangle(i, u, !0))
      return (a || o) && (a && u.getCenter(a), o && u.getCenter(o)), 0;
    let f = 1 / 0;
    for (let l = 0; l < 3; l++) {
      let d;
      const h = t[l], x = i[h];
      this.closestPointToPoint(x, c), d = x.distanceToSquared(c), d < f && (f = d, a && a.copy(c), o && o.copy(x));
      const y = this[h];
      i.closestPointToPoint(y, c), d = y.distanceToSquared(c), d < f && (f = d, a && a.copy(y), o && o.copy(c));
    }
    for (let l = 0; l < 3; l++) {
      const d = t[l], h = t[(l + 1) % 3];
      s.set(this[d], this[h]);
      for (let x = 0; x < 3; x++) {
        const y = t[x], m = t[(x + 1) % 3];
        n.set(i[y], i[m]), ds(s, n, c, e);
        const _ = c.distanceToSquared(e);
        _ < f && (f = _, a && a.copy(c), o && o.copy(e));
      }
    }
    return Math.sqrt(f);
  };
})();
class ye {
  constructor(e, t, s) {
    this.isOrientedBox = !0, this.min = new O(), this.max = new O(), this.matrix = new Ee(), this.invMatrix = new Ee(), this.points = new Array(8).fill().map(() => new O()), this.satAxes = new Array(3).fill().map(() => new O()), this.satBounds = new Array(3).fill().map(() => new Xe()), this.alignedSatBounds = new Array(3).fill().map(() => new Xe()), this.needsUpdate = !1, e && this.min.copy(e), t && this.max.copy(t), s && this.matrix.copy(s);
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
ye.prototype.update = /* @__PURE__ */ (function() {
  return function() {
    const e = this.matrix, t = this.min, s = this.max, n = this.points;
    for (let u = 0; u <= 1; u++)
      for (let f = 0; f <= 1; f++)
        for (let l = 0; l <= 1; l++) {
          const d = 1 * u | 2 * f | 4 * l, h = n[d];
          h.x = u ? s.x : t.x, h.y = f ? s.y : t.y, h.z = l ? s.z : t.z, h.applyMatrix4(e);
        }
    const r = this.satBounds, i = this.satAxes, a = n[0];
    for (let u = 0; u < 3; u++) {
      const f = i[u], l = r[u], d = 1 << u, h = n[d];
      f.subVectors(a, h), l.setFromPoints(f, n);
    }
    const o = this.alignedSatBounds;
    o[0].setFromPointsField(n, "x"), o[1].setFromPointsField(n, "y"), o[2].setFromPointsField(n, "z"), this.invMatrix.copy(this.matrix).invert(), this.needsUpdate = !1;
  };
})();
ye.prototype.intersectsBox = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Xe();
  return function(t) {
    this.needsUpdate && this.update();
    const s = t.min, n = t.max, r = this.satBounds, i = this.satAxes, a = this.alignedSatBounds;
    if (c.min = s.x, c.max = n.x, a[0].isSeparated(c) || (c.min = s.y, c.max = n.y, a[1].isSeparated(c)) || (c.min = s.z, c.max = n.z, a[2].isSeparated(c))) return !1;
    for (let o = 0; o < 3; o++) {
      const u = i[o], f = r[o];
      if (c.setFromBox(u, t), f.isSeparated(c)) return !1;
    }
    return !0;
  };
})();
ye.prototype.intersectsTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Be(), e = /* @__PURE__ */ new Array(3), t = /* @__PURE__ */ new Xe(), s = /* @__PURE__ */ new Xe(), n = /* @__PURE__ */ new O();
  return function(i) {
    this.needsUpdate && this.update(), i.isExtendedTriangle ? i.needsUpdate && i.update() : (c.copy(i), c.update(), i = c);
    const a = this.satBounds, o = this.satAxes;
    e[0] = i.a, e[1] = i.b, e[2] = i.c;
    for (let d = 0; d < 3; d++) {
      const h = a[d], x = o[d];
      if (t.setFromPoints(x, e), h.isSeparated(t)) return !1;
    }
    const u = i.satBounds, f = i.satAxes, l = this.points;
    for (let d = 0; d < 3; d++) {
      const h = u[d], x = f[d];
      if (t.setFromPoints(x, l), h.isSeparated(t)) return !1;
    }
    for (let d = 0; d < 3; d++) {
      const h = o[d];
      for (let x = 0; x < 4; x++) {
        const y = f[x];
        if (n.crossVectors(h, y), t.setFromPoints(n, e), s.setFromPoints(n, l), t.isSeparated(s)) return !1;
      }
    }
    return !0;
  };
})();
ye.prototype.closestPointToPoint = /* @__PURE__ */ (function() {
  return function(e, t) {
    return this.needsUpdate && this.update(), t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min, this.max).applyMatrix4(this.matrix), t;
  };
})();
ye.prototype.distanceToPoint = (function() {
  const c = new O();
  return function(t) {
    return this.closestPointToPoint(t, c), t.distanceTo(c);
  };
})();
ye.prototype.distanceToBox = /* @__PURE__ */ (function() {
  const c = ["x", "y", "z"], e = /* @__PURE__ */ new Array(12).fill().map(() => new Ye()), t = /* @__PURE__ */ new Array(12).fill().map(() => new Ye()), s = /* @__PURE__ */ new O(), n = /* @__PURE__ */ new O();
  return function(i, a = 0, o = null, u = null) {
    if (this.needsUpdate && this.update(), this.intersectsBox(i))
      return (o || u) && (i.getCenter(n), this.closestPointToPoint(n, s), i.closestPointToPoint(s, n), o && o.copy(s), u && u.copy(n)), 0;
    const f = a * a, l = i.min, d = i.max, h = this.points;
    let x = 1 / 0;
    for (let m = 0; m < 8; m++) {
      const _ = h[m];
      n.copy(_).clamp(l, d);
      const p = _.distanceToSquared(n);
      if (p < x && (x = p, o && o.copy(_), u && u.copy(n), p < f))
        return Math.sqrt(p);
    }
    let y = 0;
    for (let m = 0; m < 3; m++)
      for (let _ = 0; _ <= 1; _++)
        for (let p = 0; p <= 1; p++) {
          const v = (m + 1) % 3, g = (m + 2) % 3, w = _ << v | p << g, T = 1 << m | _ << v | p << g, A = h[w], M = h[T];
          e[y].set(A, M);
          const b = c[m], E = c[v], R = c[g], I = t[y], P = I.start, B = I.end;
          P[b] = l[b], P[E] = _ ? l[E] : d[E], P[R] = p ? l[R] : d[E], B[b] = d[b], B[E] = _ ? l[E] : d[E], B[R] = p ? l[R] : d[E], y++;
        }
    for (let m = 0; m <= 1; m++)
      for (let _ = 0; _ <= 1; _++)
        for (let p = 0; p <= 1; p++) {
          n.x = m ? d.x : l.x, n.y = _ ? d.y : l.y, n.z = p ? d.z : l.z, this.closestPointToPoint(n, s);
          const v = n.distanceToSquared(s);
          if (v < x && (x = v, o && o.copy(s), u && u.copy(n), v < f))
            return Math.sqrt(v);
        }
    for (let m = 0; m < 12; m++) {
      const _ = e[m];
      for (let p = 0; p < 12; p++) {
        const v = t[p];
        ds(_, v, s, n);
        const g = s.distanceToSquared(n);
        if (g < x && (x = g, o && o.copy(s), u && u.copy(n), g < f))
          return Math.sqrt(g);
      }
    }
    return Math.sqrt(x);
  };
})();
class eo extends fs {
  constructor() {
    super(() => new Be());
  }
}
const Se = /* @__PURE__ */ new eo(), Ct = /* @__PURE__ */ new O(), Fn = /* @__PURE__ */ new O();
function to(c, e, t = {}, s = 0, n = 1 / 0) {
  const r = s * s, i = n * n;
  let a = 1 / 0, o = null;
  if (c.shapecast(
    {
      boundsTraverseOrder: (f) => (Ct.copy(e).clamp(f.min, f.max), Ct.distanceToSquared(e)),
      intersectsBounds: (f, l, d) => d < a && d < i,
      intersectsTriangle: (f, l) => {
        f.closestPointToPoint(e, Ct);
        const d = e.distanceToSquared(Ct);
        return d < a && (Fn.copy(Ct), a = d, o = l), d < r;
      }
    }
  ), a === 1 / 0) return null;
  const u = Math.sqrt(a);
  return t.point ? t.point.copy(Fn) : t.point = Fn.clone(), t.distance = u, t.faceIndex = o, t;
}
const tn = parseInt(di) >= 169, no = parseInt(di) <= 161, ct = /* @__PURE__ */ new O(), lt = /* @__PURE__ */ new O(), ut = /* @__PURE__ */ new O(), nn = /* @__PURE__ */ new ke(), sn = /* @__PURE__ */ new ke(), rn = /* @__PURE__ */ new ke(), Us = /* @__PURE__ */ new O(), ks = /* @__PURE__ */ new O(), Hs = /* @__PURE__ */ new O(), Bt = /* @__PURE__ */ new O();
function so(c, e, t, s, n, r, i, a) {
  let o;
  if (r === ki ? o = c.intersectTriangle(s, t, e, !0, n) : o = c.intersectTriangle(e, t, s, r !== fi, n), o === null) return null;
  const u = c.origin.distanceTo(n);
  return u < i || u > a ? null : {
    distance: u,
    point: n.clone()
  };
}
function Vs(c, e, t, s, n, r, i, a, o, u, f) {
  ct.fromBufferAttribute(e, r), lt.fromBufferAttribute(e, i), ut.fromBufferAttribute(e, a);
  const l = so(c, ct, lt, ut, Bt, o, u, f);
  if (l) {
    if (s) {
      nn.fromBufferAttribute(s, r), sn.fromBufferAttribute(s, i), rn.fromBufferAttribute(s, a), l.uv = new ke();
      const h = bt.getInterpolation(Bt, ct, lt, ut, nn, sn, rn, l.uv);
      tn || (l.uv = h);
    }
    if (n) {
      nn.fromBufferAttribute(n, r), sn.fromBufferAttribute(n, i), rn.fromBufferAttribute(n, a), l.uv1 = new ke();
      const h = bt.getInterpolation(Bt, ct, lt, ut, nn, sn, rn, l.uv1);
      tn || (l.uv1 = h), no && (l.uv2 = l.uv1);
    }
    if (t) {
      Us.fromBufferAttribute(t, r), ks.fromBufferAttribute(t, i), Hs.fromBufferAttribute(t, a), l.normal = new O();
      const h = bt.getInterpolation(Bt, ct, lt, ut, Us, ks, Hs, l.normal);
      l.normal.dot(c.direction) > 0 && l.normal.multiplyScalar(-1), tn || (l.normal = h);
    }
    const d = {
      a: r,
      b: i,
      c: a,
      normal: new O(),
      materialIndex: 0
    };
    if (bt.getNormal(ct, lt, ut, d.normal), l.face = d, l.faceIndex = r, tn) {
      const h = new O();
      bt.getBarycoord(Bt, ct, lt, ut, h), l.barycoord = h;
    }
  }
  return l;
}
function zs(c) {
  return c && c.isMaterial ? c.side : c;
}
function An(c, e, t, s, n, r, i) {
  const a = s * 3;
  let o = a + 0, u = a + 1, f = a + 2;
  const { index: l, groups: d } = c;
  c.index && (o = l.getX(o), u = l.getX(u), f = l.getX(f));
  const { position: h, normal: x, uv: y, uv1: m } = c.attributes;
  if (Array.isArray(e)) {
    const _ = s * 3;
    for (let p = 0, v = d.length; p < v; p++) {
      const { start: g, count: w, materialIndex: T } = d[p];
      if (_ >= g && _ < g + w) {
        const A = zs(e[T]), M = Vs(t, h, x, y, m, o, u, f, A, r, i);
        if (M)
          if (M.faceIndex = s, M.face.materialIndex = T, n)
            n.push(M);
          else
            return M;
      }
    }
  } else {
    const _ = zs(e), p = Vs(t, h, x, y, m, o, u, f, _, r, i);
    if (p)
      if (p.faceIndex = s, p.face.materialIndex = 0, n)
        n.push(p);
      else
        return p;
  }
  return null;
}
function oe(c, e, t, s) {
  const n = c.a, r = c.b, i = c.c;
  let a = e, o = e + 1, u = e + 2;
  t && (a = t.getX(a), o = t.getX(o), u = t.getX(u)), n.x = s.getX(a), n.y = s.getY(a), n.z = s.getZ(a), r.x = s.getX(o), r.y = s.getY(o), r.z = s.getZ(o), i.x = s.getX(u), i.y = s.getY(u), i.z = s.getZ(u);
}
function io(c, e, t, s, n, r, i, a) {
  const { geometry: o, _indirectBuffer: u } = c;
  for (let f = s, l = s + n; f < l; f++)
    An(o, e, t, f, r, i, a);
}
function ro(c, e, t, s, n, r, i) {
  const { geometry: a, _indirectBuffer: o } = c;
  let u = 1 / 0, f = null;
  for (let l = s, d = s + n; l < d; l++) {
    let h;
    h = An(a, e, t, l, null, r, i), h && h.distance < u && (f = h, u = h.distance);
  }
  return f;
}
function oo(c, e, t, s, n, r, i) {
  const { geometry: a } = t, { index: o } = a, u = a.attributes.position;
  for (let f = c, l = e + c; f < l; f++) {
    let d;
    if (d = f, oe(i, d * 3, o, u), i.needsUpdate = !0, s(i, d, n, r))
      return !0;
  }
  return !1;
}
function ao(c, e = null) {
  e && Array.isArray(e) && (e = new Set(e));
  const t = c.geometry, s = t.index ? t.index.array : null, n = t.attributes.position;
  let r, i, a, o, u = 0;
  const f = c._roots;
  for (let d = 0, h = f.length; d < h; d++)
    r = f[d], i = new Uint32Array(r), a = new Uint16Array(r), o = new Float32Array(r), l(0, u), u += r.byteLength;
  function l(d, h, x = !1) {
    const y = d * 2;
    if (re(y, a)) {
      const m = pe(d, i), _ = ge(y, a);
      let p = 1 / 0, v = 1 / 0, g = 1 / 0, w = -1 / 0, T = -1 / 0, A = -1 / 0;
      for (let M = 3 * m, S = 3 * (m + _); M < S; M++) {
        let b = s[M];
        const E = n.getX(b), R = n.getY(b), I = n.getZ(b);
        E < p && (p = E), E > w && (w = E), R < v && (v = R), R > T && (T = R), I < g && (g = I), I > A && (A = I);
      }
      return o[d + 0] !== p || o[d + 1] !== v || o[d + 2] !== g || o[d + 3] !== w || o[d + 4] !== T || o[d + 5] !== A ? (o[d + 0] = p, o[d + 1] = v, o[d + 2] = g, o[d + 3] = w, o[d + 4] = T, o[d + 5] = A, !0) : !1;
    } else {
      const m = fe(d), _ = de(d, i);
      let p = x, v = !1, g = !1;
      if (e) {
        if (!p) {
          const b = m / ce + h / ue, E = _ / ce + h / ue;
          v = e.has(b), g = e.has(E), p = !v && !g;
        }
      } else
        v = !0, g = !0;
      const w = p || v, T = p || g;
      let A = !1;
      w && (A = l(m, h, p));
      let M = !1;
      T && (M = l(_, h, p));
      const S = A || M;
      if (S)
        for (let b = 0; b < 3; b++) {
          const E = m + b, R = _ + b, I = o[E], P = o[E + 3], B = o[R], N = o[R + 3];
          o[d + b] = I < B ? I : B, o[d + b + 3] = P > N ? P : N;
        }
      return S;
    }
  }
}
function st(c, e, t, s, n) {
  let r, i, a, o, u, f;
  const l = 1 / t.direction.x, d = 1 / t.direction.y, h = 1 / t.direction.z, x = t.origin.x, y = t.origin.y, m = t.origin.z;
  let _ = e[c], p = e[c + 3], v = e[c + 1], g = e[c + 3 + 1], w = e[c + 2], T = e[c + 3 + 2];
  return l >= 0 ? (r = (_ - x) * l, i = (p - x) * l) : (r = (p - x) * l, i = (_ - x) * l), d >= 0 ? (a = (v - y) * d, o = (g - y) * d) : (a = (g - y) * d, o = (v - y) * d), r > o || a > i || ((a > r || isNaN(r)) && (r = a), (o < i || isNaN(i)) && (i = o), h >= 0 ? (u = (w - m) * h, f = (T - m) * h) : (u = (T - m) * h, f = (w - m) * h), r > f || u > i) ? !1 : ((u > r || r !== r) && (r = u), (f < i || i !== i) && (i = f), r <= n && i >= s);
}
function co(c, e, t, s, n, r, i, a) {
  const { geometry: o, _indirectBuffer: u } = c;
  for (let f = s, l = s + n; f < l; f++) {
    let d = u ? u[f] : f;
    An(o, e, t, d, r, i, a);
  }
}
function lo(c, e, t, s, n, r, i) {
  const { geometry: a, _indirectBuffer: o } = c;
  let u = 1 / 0, f = null;
  for (let l = s, d = s + n; l < d; l++) {
    let h;
    h = An(a, e, t, o ? o[l] : l, null, r, i), h && h.distance < u && (f = h, u = h.distance);
  }
  return f;
}
function uo(c, e, t, s, n, r, i) {
  const { geometry: a } = t, { index: o } = a, u = a.attributes.position;
  for (let f = c, l = e + c; f < l; f++) {
    let d;
    if (d = t.resolveTriangleIndex(f), oe(i, d * 3, o, u), i.needsUpdate = !0, s(i, d, n, r))
      return !0;
  }
  return !1;
}
function fo(c, e, t, s, n, r, i) {
  J.setBuffer(c._roots[e]), Zn(0, c, t, s, n, r, i), J.clearBuffer();
}
function Zn(c, e, t, s, n, r, i) {
  const { float32Array: a, uint16Array: o, uint32Array: u } = J, f = c * 2;
  if (re(f, o)) {
    const d = pe(c, u), h = ge(f, o);
    io(e, t, s, d, h, n, r, i);
  } else {
    const d = fe(c);
    st(d, a, s, r, i) && Zn(d, e, t, s, n, r, i);
    const h = de(c, u);
    st(h, a, s, r, i) && Zn(h, e, t, s, n, r, i);
  }
}
const ho = ["x", "y", "z"];
function mo(c, e, t, s, n, r) {
  J.setBuffer(c._roots[e]);
  const i = Qn(0, c, t, s, n, r);
  return J.clearBuffer(), i;
}
function Qn(c, e, t, s, n, r) {
  const { float32Array: i, uint16Array: a, uint32Array: o } = J;
  let u = c * 2;
  if (re(u, a)) {
    const l = pe(c, o), d = ge(u, a);
    return ro(e, t, s, l, d, n, r);
  } else {
    const l = wn(c, o), d = ho[l], x = s.direction[d] >= 0;
    let y, m;
    x ? (y = fe(c), m = de(c, o)) : (y = de(c, o), m = fe(c));
    const p = st(y, i, s, n, r) ? Qn(y, e, t, s, n, r) : null;
    if (p) {
      const w = p.point[d];
      if (x ? w <= i[m + l] : (
        // min bounding data
        w >= i[m + l + 3]
      ))
        return p;
    }
    const g = st(m, i, s, n, r) ? Qn(m, e, t, s, n, r) : null;
    return p && g ? p.distance <= g.distance ? p : g : p || g || null;
  }
}
const on = /* @__PURE__ */ new Ne(), wt = /* @__PURE__ */ new Be(), Tt = /* @__PURE__ */ new Be(), Nt = /* @__PURE__ */ new Ee(), Gs = /* @__PURE__ */ new ye(), an = /* @__PURE__ */ new ye();
function po(c, e, t, s) {
  J.setBuffer(c._roots[e]);
  const n = es(0, c, t, s);
  return J.clearBuffer(), n;
}
function es(c, e, t, s, n = null) {
  const { float32Array: r, uint16Array: i, uint32Array: a } = J;
  let o = c * 2;
  if (n === null && (t.boundingBox || t.computeBoundingBox(), Gs.set(t.boundingBox.min, t.boundingBox.max, s), n = Gs), re(o, i)) {
    const f = e.geometry, l = f.index, d = f.attributes.position, h = t.index, x = t.attributes.position, y = pe(c, a), m = ge(o, i);
    if (Nt.copy(s).invert(), t.boundsTree)
      return ne(c, r, an), an.matrix.copy(Nt), an.needsUpdate = !0, t.boundsTree.shapecast({
        intersectsBounds: (p) => an.intersectsBox(p),
        intersectsTriangle: (p) => {
          p.a.applyMatrix4(s), p.b.applyMatrix4(s), p.c.applyMatrix4(s), p.needsUpdate = !0;
          for (let v = y * 3, g = (m + y) * 3; v < g; v += 3)
            if (oe(Tt, v, l, d), Tt.needsUpdate = !0, p.intersectsTriangle(Tt))
              return !0;
          return !1;
        }
      });
    {
      const _ = Mn(t);
      for (let p = y * 3, v = (m + y) * 3; p < v; p += 3) {
        oe(wt, p, l, d), wt.a.applyMatrix4(Nt), wt.b.applyMatrix4(Nt), wt.c.applyMatrix4(Nt), wt.needsUpdate = !0;
        for (let g = 0, w = _ * 3; g < w; g += 3)
          if (oe(Tt, g, h, x), Tt.needsUpdate = !0, wt.intersectsTriangle(Tt))
            return !0;
      }
    }
  } else {
    const f = fe(c), l = de(c, a);
    return ne(f, r, on), !!(n.intersectsBox(on) && es(f, e, t, s, n) || (ne(l, r, on), n.intersectsBox(on) && es(l, e, t, s, n)));
  }
}
const cn = /* @__PURE__ */ new Ee(), On = /* @__PURE__ */ new ye(), Lt = /* @__PURE__ */ new ye(), go = /* @__PURE__ */ new O(), xo = /* @__PURE__ */ new O(), yo = /* @__PURE__ */ new O(), vo = /* @__PURE__ */ new O();
function _o(c, e, t, s = {}, n = {}, r = 0, i = 1 / 0) {
  e.boundingBox || e.computeBoundingBox(), On.set(e.boundingBox.min, e.boundingBox.max, t), On.needsUpdate = !0;
  const a = c.geometry, o = a.attributes.position, u = a.index, f = e.attributes.position, l = e.index, d = Se.getPrimitive(), h = Se.getPrimitive();
  let x = go, y = xo, m = null, _ = null;
  n && (m = yo, _ = vo);
  let p = 1 / 0, v = null, g = null;
  return cn.copy(t).invert(), Lt.matrix.copy(cn), c.shapecast(
    {
      boundsTraverseOrder: (w) => On.distanceToBox(w),
      intersectsBounds: (w, T, A) => A < p && A < i ? (T && (Lt.min.copy(w.min), Lt.max.copy(w.max), Lt.needsUpdate = !0), !0) : !1,
      intersectsRange: (w, T) => {
        if (e.boundsTree)
          return e.boundsTree.shapecast({
            boundsTraverseOrder: (M) => Lt.distanceToBox(M),
            intersectsBounds: (M, S, b) => b < p && b < i,
            intersectsRange: (M, S) => {
              for (let b = M, E = M + S; b < E; b++) {
                oe(h, 3 * b, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
                for (let R = w, I = w + T; R < I; R++) {
                  oe(d, 3 * R, u, o), d.needsUpdate = !0;
                  const P = d.distanceToTriangle(h, x, m);
                  if (P < p && (y.copy(x), _ && _.copy(m), p = P, v = R, g = b), P < r)
                    return !0;
                }
              }
            }
          });
        {
          const A = Mn(e);
          for (let M = 0, S = A; M < S; M++) {
            oe(h, 3 * M, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
            for (let b = w, E = w + T; b < E; b++) {
              oe(d, 3 * b, u, o), d.needsUpdate = !0;
              const R = d.distanceToTriangle(h, x, m);
              if (R < p && (y.copy(x), _ && _.copy(m), p = R, v = b, g = M), R < r)
                return !0;
            }
          }
        }
      }
    }
  ), Se.releasePrimitive(d), Se.releasePrimitive(h), p === 1 / 0 ? null : (s.point ? s.point.copy(y) : s.point = y.clone(), s.distance = p, s.faceIndex = v, n && (n.point ? n.point.copy(_) : n.point = _.clone(), n.point.applyMatrix4(cn), y.applyMatrix4(cn), n.distance = y.sub(n.point).length(), n.faceIndex = g), s);
}
function wo(c, e = null) {
  e && Array.isArray(e) && (e = new Set(e));
  const t = c.geometry, s = t.index ? t.index.array : null, n = t.attributes.position;
  let r, i, a, o, u = 0;
  const f = c._roots;
  for (let d = 0, h = f.length; d < h; d++)
    r = f[d], i = new Uint32Array(r), a = new Uint16Array(r), o = new Float32Array(r), l(0, u), u += r.byteLength;
  function l(d, h, x = !1) {
    const y = d * 2;
    if (re(y, a)) {
      const m = pe(d, i), _ = ge(y, a);
      let p = 1 / 0, v = 1 / 0, g = 1 / 0, w = -1 / 0, T = -1 / 0, A = -1 / 0;
      for (let M = m, S = m + _; M < S; M++) {
        const b = 3 * c.resolveTriangleIndex(M);
        for (let E = 0; E < 3; E++) {
          let R = b + E;
          R = s ? s[R] : R;
          const I = n.getX(R), P = n.getY(R), B = n.getZ(R);
          I < p && (p = I), I > w && (w = I), P < v && (v = P), P > T && (T = P), B < g && (g = B), B > A && (A = B);
        }
      }
      return o[d + 0] !== p || o[d + 1] !== v || o[d + 2] !== g || o[d + 3] !== w || o[d + 4] !== T || o[d + 5] !== A ? (o[d + 0] = p, o[d + 1] = v, o[d + 2] = g, o[d + 3] = w, o[d + 4] = T, o[d + 5] = A, !0) : !1;
    } else {
      const m = fe(d), _ = de(d, i);
      let p = x, v = !1, g = !1;
      if (e) {
        if (!p) {
          const b = m / ce + h / ue, E = _ / ce + h / ue;
          v = e.has(b), g = e.has(E), p = !v && !g;
        }
      } else
        v = !0, g = !0;
      const w = p || v, T = p || g;
      let A = !1;
      w && (A = l(m, h, p));
      let M = !1;
      T && (M = l(_, h, p));
      const S = A || M;
      if (S)
        for (let b = 0; b < 3; b++) {
          const E = m + b, R = _ + b, I = o[E], P = o[E + 3], B = o[R], N = o[R + 3];
          o[d + b] = I < B ? I : B, o[d + b + 3] = P > N ? P : N;
        }
      return S;
    }
  }
}
function To(c, e, t, s, n, r, i) {
  J.setBuffer(c._roots[e]), ts(0, c, t, s, n, r, i), J.clearBuffer();
}
function ts(c, e, t, s, n, r, i) {
  const { float32Array: a, uint16Array: o, uint32Array: u } = J, f = c * 2;
  if (re(f, o)) {
    const d = pe(c, u), h = ge(f, o);
    co(e, t, s, d, h, n, r, i);
  } else {
    const d = fe(c);
    st(d, a, s, r, i) && ts(d, e, t, s, n, r, i);
    const h = de(c, u);
    st(h, a, s, r, i) && ts(h, e, t, s, n, r, i);
  }
}
const Mo = ["x", "y", "z"];
function Ao(c, e, t, s, n, r) {
  J.setBuffer(c._roots[e]);
  const i = ns(0, c, t, s, n, r);
  return J.clearBuffer(), i;
}
function ns(c, e, t, s, n, r) {
  const { float32Array: i, uint16Array: a, uint32Array: o } = J;
  let u = c * 2;
  if (re(u, a)) {
    const l = pe(c, o), d = ge(u, a);
    return lo(e, t, s, l, d, n, r);
  } else {
    const l = wn(c, o), d = Mo[l], x = s.direction[d] >= 0;
    let y, m;
    x ? (y = fe(c), m = de(c, o)) : (y = de(c, o), m = fe(c));
    const p = st(y, i, s, n, r) ? ns(y, e, t, s, n, r) : null;
    if (p) {
      const w = p.point[d];
      if (x ? w <= i[m + l] : (
        // min bounding data
        w >= i[m + l + 3]
      ))
        return p;
    }
    const g = st(m, i, s, n, r) ? ns(m, e, t, s, n, r) : null;
    return p && g ? p.distance <= g.distance ? p : g : p || g || null;
  }
}
const ln = /* @__PURE__ */ new Ne(), Mt = /* @__PURE__ */ new Be(), At = /* @__PURE__ */ new Be(), Ft = /* @__PURE__ */ new Ee(), js = /* @__PURE__ */ new ye(), un = /* @__PURE__ */ new ye();
function bo(c, e, t, s) {
  J.setBuffer(c._roots[e]);
  const n = ss(0, c, t, s);
  return J.clearBuffer(), n;
}
function ss(c, e, t, s, n = null) {
  const { float32Array: r, uint16Array: i, uint32Array: a } = J;
  let o = c * 2;
  if (n === null && (t.boundingBox || t.computeBoundingBox(), js.set(t.boundingBox.min, t.boundingBox.max, s), n = js), re(o, i)) {
    const f = e.geometry, l = f.index, d = f.attributes.position, h = t.index, x = t.attributes.position, y = pe(c, a), m = ge(o, i);
    if (Ft.copy(s).invert(), t.boundsTree)
      return ne(c, r, un), un.matrix.copy(Ft), un.needsUpdate = !0, t.boundsTree.shapecast({
        intersectsBounds: (p) => un.intersectsBox(p),
        intersectsTriangle: (p) => {
          p.a.applyMatrix4(s), p.b.applyMatrix4(s), p.c.applyMatrix4(s), p.needsUpdate = !0;
          for (let v = y, g = m + y; v < g; v++)
            if (oe(At, 3 * e.resolveTriangleIndex(v), l, d), At.needsUpdate = !0, p.intersectsTriangle(At))
              return !0;
          return !1;
        }
      });
    {
      const _ = Mn(t);
      for (let p = y, v = m + y; p < v; p++) {
        const g = e.resolveTriangleIndex(p);
        oe(Mt, 3 * g, l, d), Mt.a.applyMatrix4(Ft), Mt.b.applyMatrix4(Ft), Mt.c.applyMatrix4(Ft), Mt.needsUpdate = !0;
        for (let w = 0, T = _ * 3; w < T; w += 3)
          if (oe(At, w, h, x), At.needsUpdate = !0, Mt.intersectsTriangle(At))
            return !0;
      }
    }
  } else {
    const f = fe(c), l = de(c, a);
    return ne(f, r, ln), !!(n.intersectsBox(ln) && ss(f, e, t, s, n) || (ne(l, r, ln), n.intersectsBox(ln) && ss(l, e, t, s, n)));
  }
}
const fn = /* @__PURE__ */ new Ee(), Un = /* @__PURE__ */ new ye(), Ot = /* @__PURE__ */ new ye(), Ro = /* @__PURE__ */ new O(), So = /* @__PURE__ */ new O(), Eo = /* @__PURE__ */ new O(), Do = /* @__PURE__ */ new O();
function Io(c, e, t, s = {}, n = {}, r = 0, i = 1 / 0) {
  e.boundingBox || e.computeBoundingBox(), Un.set(e.boundingBox.min, e.boundingBox.max, t), Un.needsUpdate = !0;
  const a = c.geometry, o = a.attributes.position, u = a.index, f = e.attributes.position, l = e.index, d = Se.getPrimitive(), h = Se.getPrimitive();
  let x = Ro, y = So, m = null, _ = null;
  n && (m = Eo, _ = Do);
  let p = 1 / 0, v = null, g = null;
  return fn.copy(t).invert(), Ot.matrix.copy(fn), c.shapecast(
    {
      boundsTraverseOrder: (w) => Un.distanceToBox(w),
      intersectsBounds: (w, T, A) => A < p && A < i ? (T && (Ot.min.copy(w.min), Ot.max.copy(w.max), Ot.needsUpdate = !0), !0) : !1,
      intersectsRange: (w, T) => {
        if (e.boundsTree) {
          const A = e.boundsTree;
          return A.shapecast({
            boundsTraverseOrder: (M) => Ot.distanceToBox(M),
            intersectsBounds: (M, S, b) => b < p && b < i,
            intersectsRange: (M, S) => {
              for (let b = M, E = M + S; b < E; b++) {
                const R = A.resolveTriangleIndex(b);
                oe(h, 3 * R, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
                for (let I = w, P = w + T; I < P; I++) {
                  const B = c.resolveTriangleIndex(I);
                  oe(d, 3 * B, u, o), d.needsUpdate = !0;
                  const N = d.distanceToTriangle(h, x, m);
                  if (N < p && (y.copy(x), _ && _.copy(m), p = N, v = I, g = b), N < r)
                    return !0;
                }
              }
            }
          });
        } else {
          const A = Mn(e);
          for (let M = 0, S = A; M < S; M++) {
            oe(h, 3 * M, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
            for (let b = w, E = w + T; b < E; b++) {
              const R = c.resolveTriangleIndex(b);
              oe(d, 3 * R, u, o), d.needsUpdate = !0;
              const I = d.distanceToTriangle(h, x, m);
              if (I < p && (y.copy(x), _ && _.copy(m), p = I, v = b, g = M), I < r)
                return !0;
            }
          }
        }
      }
    }
  ), Se.releasePrimitive(d), Se.releasePrimitive(h), p === 1 / 0 ? null : (s.point ? s.point.copy(y) : s.point = y.clone(), s.distance = p, s.faceIndex = v, n && (n.point ? n.point.copy(_) : n.point = _.clone(), n.point.applyMatrix4(fn), y.applyMatrix4(fn), n.distance = y.sub(n.point).length(), n.faceIndex = g), s);
}
function Ks(c, e, t) {
  return c === null ? null : (c.point.applyMatrix4(e.matrixWorld), c.distance = c.point.distanceTo(t.ray.origin), c.object = e, c);
}
const dn = /* @__PURE__ */ new ye(), hn = /* @__PURE__ */ new Hi(), Ws = /* @__PURE__ */ new O(), Ys = /* @__PURE__ */ new Ee(), Xs = /* @__PURE__ */ new O(), kn = ["getX", "getY", "getZ"];
class _n extends qr {
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
    const s = e.geometry, n = e._roots, r = e._indirectBuffer, i = s.getIndex(), a = {
      version: 1,
      roots: null,
      index: null,
      indirectBuffer: null
    };
    return t.cloneBuffers ? (a.roots = n.map((o) => o.slice()), a.index = i ? i.array.slice() : null, a.indirectBuffer = r ? r.slice() : null) : (a.roots = n, a.index = i ? i.array : null, a.indirectBuffer = r), a;
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
    ), o(r));
    const a = new _n(t, { ...s, [us]: !0 });
    if (a._roots = r, a._indirectBuffer = i || null, s.setIndex) {
      const u = t.getIndex();
      if (u === null) {
        const f = new St(e.index, 1, !1);
        t.setIndex(f);
      } else u.array !== n && (u.array.set(n), u.needsUpdate = !0);
    }
    return a;
    function o(u) {
      for (let f = 0; f < u.length; f++) {
        const l = u[f], d = new Uint32Array(l), h = new Uint16Array(l);
        for (let x = 0, y = l.byteLength / ue; x < y; x++) {
          const m = ce * x, _ = 2 * m;
          re(_, h) || (d[m + 6] = d[m + 6] / ce - x);
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
    const n = this.geometry, r = this._indirectBuffer, i = n.attributes.position, a = n.index ? n.index.array : null, u = (r ? r[e] : e) * 3;
    let f = u + 0, l = u + 1, d = u + 2;
    a && (f = a[f], l = a[l], d = a[d]);
    for (let h = 0; h < 3; h++) {
      const x = i[kn[h]](f), y = i[kn[h]](l), m = i[kn[h]](d);
      let _ = x;
      y < _ && (_ = y), m < _ && (_ = m);
      let p = x;
      y > p && (p = y), m > p && (p = m), t[s + h] = _, t[s + h + 3] = p;
    }
    return t;
  }
  // precomputes the bounding box for each triangle; required for quickly calculating tree splits.
  // result is an array of size count * 6 where triangle i maps to a
  // [x_center, x_delta, y_center, y_delta, z_center, z_delta] tuple starting at index (i - offset) * 6,
  // representing the center and half-extent in each dimension of triangle i
  computePrimitiveBounds(e, t, s) {
    const n = this.geometry, r = this._indirectBuffer, i = n.attributes.position, a = n.index ? n.index.array : null, o = i.normalized;
    if (e < 0 || t + e - s.offset > s.length / 6)
      throw new Error("MeshBVH: compute triangle bounds range is invalid.");
    const u = i.array, f = i.offset || 0;
    let l = 3;
    i.isInterleavedBufferAttribute && (l = i.data.stride);
    const d = ["getX", "getY", "getZ"], h = s.offset;
    for (let x = e, y = e + t; x < y; x++) {
      const _ = (r ? r[x] : x) * 3, p = (x - h) * 6;
      let v = _ + 0, g = _ + 1, w = _ + 2;
      a && (v = a[v], g = a[g], w = a[w]), o || (v = v * l + f, g = g * l + f, w = w * l + f);
      for (let T = 0; T < 3; T++) {
        let A, M, S;
        o ? (A = i[d[T]](v), M = i[d[T]](g), S = i[d[T]](w)) : (A = u[v + T], M = u[g + T], S = u[w + T]);
        let b = A;
        M < b && (b = M), S < b && (b = S);
        let E = A;
        M > E && (E = M), S > E && (E = S);
        const R = (E - b) / 2, I = T * 2;
        s[p + I + 0] = b + R, s[p + I + 1] = R + (Math.abs(b) + R) * gn;
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
    Ys.copy(e.matrixWorld).invert(), hn.copy(t.ray).applyMatrix4(Ys), Xs.setFromMatrixScale(e.matrixWorld), Ws.copy(hn.direction).multiply(Xs);
    const r = Ws.length(), i = t.near / r, a = t.far / r;
    if (t.firstHitOnly === !0) {
      let o = this.raycastFirst(hn, n, i, a);
      o = Ks(o, e, t), o && s.push(o);
    } else {
      const o = this.raycast(hn, n, i, a);
      for (let u = 0, f = o.length; u < f; u++) {
        const l = Ks(o[u], e, t);
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
    return (this.indirect ? wo : ao)(this, e);
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
  raycast(e, t = Gn, s = 0, n = 1 / 0) {
    const r = this._roots, i = [], a = this.indirect ? To : fo;
    for (let o = 0, u = r.length; o < u; o++)
      a(this, o, t, e, i, s, n);
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
  raycastFirst(e, t = Gn, s = 0, n = 1 / 0) {
    const r = this._roots;
    let i = null;
    const a = this.indirect ? Ao : mo;
    for (let o = 0, u = r.length; o < u; o++) {
      const f = a(this, o, t, e, s, n);
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
    const n = this._roots, r = this.indirect ? bo : po;
    for (let i = 0, a = n.length; i < a && (s = r(this, i, e, t), !s); i++)
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
    const t = Se.getPrimitive(), s = super.shapecast(
      {
        ...e,
        intersectsPrimitive: e.intersectsTriangle,
        scratchPrimitive: t,
        // TODO: is the performance significant enough for the added complexity here?
        // can we just use one function?
        iterate: this.indirect ? uo : oo
      }
    );
    return Se.releasePrimitive(t), s;
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
    const i = Se.getPrimitive(), a = this.geometry.index, o = this.geometry.attributes.position, u = this.indirect ? (x) => {
      const y = this.resolveTriangleIndex(x);
      oe(i, y * 3, a, o);
    } : (x) => {
      oe(i, x * 3, a, o);
    }, f = Se.getPrimitive(), l = e.geometry.index, d = e.geometry.attributes.position, h = e.indirect ? (x) => {
      const y = e.resolveTriangleIndex(x);
      oe(f, y * 3, l, d);
    } : (x) => {
      oe(f, x * 3, l, d);
    };
    if (r) {
      if (!(e instanceof _n))
        throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');
      const x = (y, m, _, p, v, g, w, T) => {
        for (let A = _, M = _ + p; A < M; A++) {
          h(A), f.a.applyMatrix4(t), f.b.applyMatrix4(t), f.c.applyMatrix4(t), f.needsUpdate = !0;
          for (let S = y, b = y + m; S < b; S++)
            if (u(S), i.needsUpdate = !0, r(i, f, S, A, v, g, w, T))
              return !0;
        }
        return !1;
      };
      if (n) {
        const y = n;
        n = function(m, _, p, v, g, w, T, A) {
          return y(m, _, p, v, g, w, T, A) ? !0 : x(m, _, p, v, g, w, T, A);
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
    return dn.set(e.min, e.max, t), dn.needsUpdate = !0, this.shapecast(
      {
        intersectsBounds: (s) => dn.intersectsBox(s),
        intersectsTriangle: (s) => dn.intersectsTriangle(s)
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
    return (this.indirect ? Io : _o)(
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
    return to(
      this,
      e,
      t,
      s,
      n
    );
  }
}
function Po(c) {
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
function Co(c) {
  switch (c) {
    case 1:
      return Ki;
    case 2:
      return ji;
    case 3:
      return yn;
    case 4:
      return yn;
  }
}
function $s(c) {
  switch (c) {
    case 1:
      return Gi;
    case 2:
      return hi;
    case 3:
      return Kn;
    case 4:
      return Kn;
  }
}
class Ri extends jn {
  constructor() {
    super(), this.minFilter = et, this.magFilter = et, this.generateMipmaps = !1, this.overrideItemSize = null, this._forcedType = null;
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
    const r = e.itemSize, i = e.count, a = e.normalized, o = e.array.constructor, u = o.BYTES_PER_ELEMENT;
    let f = this._forcedType, l = r;
    if (f === null)
      switch (o) {
        case Float32Array:
          f = nt;
          break;
        case Uint8Array:
        case Uint16Array:
        case Uint32Array:
          f = Ht;
          break;
        case Int8Array:
        case Int16Array:
        case Int32Array:
          f = Sn;
          break;
      }
    let d, h, x, y, m = Po(r);
    switch (f) {
      case nt:
        x = 1, h = Co(r), a && u === 1 ? (y = o, m += "8", o === Uint8Array ? d = Vt : (d = _s, m += "_SNORM")) : (y = Float32Array, m += "32F", d = nt);
        break;
      case Sn:
        m += u * 8 + "I", x = a ? Math.pow(2, o.BYTES_PER_ELEMENT * 8 - 1) : 1, h = $s(r), u === 1 ? (y = Int8Array, d = _s) : u === 2 ? (y = Int16Array, d = zi) : (y = Int32Array, d = Sn);
        break;
      case Ht:
        m += u * 8 + "UI", x = a ? Math.pow(2, o.BYTES_PER_ELEMENT * 8 - 1) : 1, h = $s(r), u === 1 ? (y = Uint8Array, d = Vt) : u === 2 ? (y = Uint16Array, d = Vi) : (y = Uint32Array, d = Ht);
        break;
    }
    l === 3 && (h === yn || h === Kn) && (l = 4);
    const _ = Math.ceil(Math.sqrt(i)) || 1, p = l * _ * _, v = new y(p), g = e.normalized;
    e.normalized = !1;
    for (let w = 0; w < i; w++) {
      const T = l * w;
      v[T] = e.getX(w) / x, r >= 2 && (v[T + 1] = e.getY(w) / x), r >= 3 && (v[T + 2] = e.getZ(w) / x, l === 4 && (v[T + 3] = 1)), r >= 4 && (v[T + 3] = e.getW(w) / x);
    }
    e.normalized = g, this.internalFormat = m, this.format = h, this.type = d, this.image.width = _, this.image.height = _, this.image.data = v, this.needsUpdate = !0, this.dispose(), e.itemSize = s, e.count = n;
  }
}
class Bo extends Ri {
  constructor() {
    super(), this._forcedType = Ht;
  }
}
class No extends Ri {
  constructor() {
    super(), this._forcedType = nt;
  }
}
class Lo {
  constructor() {
    this.index = new Bo(), this.position = new No(), this.bvhBounds = new jn(), this.bvhContents = new jn(), this._cachedIndexAttr = null, this.index.overrideItemSize = 3;
  }
  /**
   * Updates the object and associated textures with data from the provided BVH.
   *
   * @param {MeshBVH} bvh
   * @returns {void}
   */
  updateFrom(e) {
    const { geometry: t } = e;
    if (Oo(e, this.bvhBounds, this.bvhContents), this.position.updateFrom(t.attributes.position), e.indirect) {
      const s = e._indirectBuffer;
      if (this._cachedIndexAttr === null || this._cachedIndexAttr.count !== s.length)
        if (t.index)
          this._cachedIndexAttr = t.index.clone();
        else {
          const n = bi(Tn(t));
          this._cachedIndexAttr = new St(n, 1, !1);
        }
      Fo(t, s, this._cachedIndexAttr), this.index.updateFrom(this._cachedIndexAttr);
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
function Fo(c, e, t) {
  const s = t.array, n = c.index ? c.index.array : null;
  for (let r = 0, i = e.length; r < i; r++) {
    const a = 3 * r, o = 3 * e[r];
    for (let u = 0; u < 3; u++)
      s[a + u] = n ? n[o + u] : o + u;
  }
}
function Oo(c, e, t) {
  const s = c._roots;
  if (s.length !== 1)
    throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");
  const n = s[0], r = new Uint16Array(n), i = new Uint32Array(n), a = new Float32Array(n), o = n.byteLength / ue, u = 2 * Math.ceil(Math.sqrt(o / 2)), f = new Float32Array(4 * u * u), l = Math.ceil(Math.sqrt(o)), d = new Uint32Array(2 * l * l);
  for (let h = 0; h < o; h++) {
    const x = h * ue / 4, y = x * 2, m = x;
    for (let _ = 0; _ < 3; _++)
      f[8 * h + 0 + _] = a[m + 0 + _], f[8 * h + 4 + _] = a[m + 3 + _];
    if (re(y, r)) {
      const _ = ge(y, r), p = pe(x, i), v = Cr | _;
      d[h * 2 + 0] = v, d[h * 2 + 1] = p;
    } else {
      const _ = i[x + 6], p = wn(x, i);
      d[h * 2 + 0] = p, d[h * 2 + 1] = _;
    }
  }
  e.image.data = f, e.image.width = u, e.image.height = u, e.format = yn, e.type = nt, e.internalFormat = "RGBA32F", e.minFilter = et, e.magFilter = et, e.generateMipmaps = !1, e.needsUpdate = !0, e.dispose(), t.image.data = d, t.image.width = l, t.image.height = l, t.format = hi, t.type = Ht, t.internalFormat = "RG32UI", t.minFilter = et, t.magFilter = et, t.generateMipmaps = !1, t.needsUpdate = !0, t.dispose();
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
), ko = (
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
), Ho = (
  /* glsl */
  `
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`
), Vo = Ho, zo = `
	${Uo}
	${ko}
`, gt = () => {
  const c = Kt.useContext(cs);
  if (!c)
    throw new Error("useMainContext must be used within MainContextProvider");
  return c;
};
function Go(c) {
  c.updateMatrixWorld(!0);
  const e = new L.Box3(), t = new L.Vector3();
  let s = !1;
  const n = c.parent, r = n ? new L.Matrix4().copy(n.matrixWorld).invert() : new L.Matrix4(), i = new L.Matrix4();
  return c.traverse((a) => {
    const o = a;
    if (o.isMesh && o.geometry?.attributes?.position) {
      const u = o.geometry.attributes.position;
      i.multiplyMatrices(r, o.matrixWorld);
      for (let f = 0; f < u.count; f++)
        t.fromBufferAttribute(u, f), t.applyMatrix4(i), e.expandByPoint(t), s = !0;
    }
  }), s || (e.setFromObject(c), n && e.applyMatrix4(r)), e;
}
function jo(c, e = -Math.PI / 4, t = -Math.PI / 10, s = Math.PI / 3) {
  c.rotation.set(0, 0, 0), c.position.set(0, 0, 0), c.updateMatrixWorld(!0);
  const n = new L.Box3().setFromObject(c), r = new L.Vector3();
  n.getCenter(r);
  const i = new L.Vector3();
  n.getSize(i), i.length() === 0 && (i.set(1, 1, 1), n.min.set(-0.5, -0.5, -0.5), n.max.set(0.5, 0.5, 0.5), r.set(0, 0, 0)), c.rotation.set(e, t, s), c.updateMatrixWorld(!0);
  const a = Go(c), o = new L.Vector3();
  a.getCenter(o);
  const u = a.min.y, f = a.max.y;
  c.position.copy(o).negate(), c.updateMatrixWorld(!0);
  const l = u - o.y, d = f - o.y;
  return {
    localBox: n,
    localCenter: r,
    localSize: i,
    rotatedCenterOffset: o,
    minY: l,
    maxY: d,
    rotatedBox: a
  };
}
class ft extends L.TextureLoader {
  load(e, t, s, n) {
    if (!e) {
      const r = new L.Texture();
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
        const i = new L.Texture();
        t && t(i);
      }
    );
  }
}
const Ko = (
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
), Wo = (
  /* glsl */
  `
  precision highp float;
  precision highp sampler2D;
  precision highp isampler2D;

  ${Vo}
  ${zo}

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
class Yo extends L.ShaderMaterial {
  constructor({
    geometry: e,
    bvh: t,
    envMap: s,
    backgroundTexture: n = null,
    resolution: r = new L.Vector2(1024, 768),
    ior: i = 2.4,
    bounces: a = 3,
    aberrationStrength: o = 1e-3,
    fresnel: u = 0.01,
    reflectivity: f = 1,
    color: l = 16777215,
    blur: d = 0.12,
    envRotation: h = 0,
    highlightColor: x = 16777215,
    highlightTolerance: y = 1,
    attenuationColor: m = 16777215,
    attenuationDistance: _ = 1
  }) {
    const p = new Lo();
    p.updateFrom(t), super({
      glslVersion: L.GLSL3,
      vertexShader: Ko,
      fragmentShader: Wo,
      uniforms: {
        bvh: { value: p },
        tDiffuse: { value: n },
        resolution: { value: r },
        envMap: { value: s },
        uColor: { value: new L.Color(l) },
        uIOR: { value: i },
        uAberration: { value: o },
        uFresnel: { value: u },
        uReflectivity: { value: f },
        uBlur: { value: d },
        uEnvRotation: { value: h },
        uHighlightColor: { value: new L.Color(x) },
        uHighlightTolerance: { value: y },
        uAttenuationColor: { value: new L.Color(m) },
        uAttenuationDistance: { value: _ },
        uBounces: { value: a },
        uModelMatrix: { value: new L.Matrix4() },
        uModelMatrixInverse: { value: new L.Matrix4() }
      },
      transparent: !0,
      depthWrite: !0
    }), this.onBeforeRender = (v, g, w, T, A) => {
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
const dt = (c, e) => {
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
function Xo(c, e, t, s, n, r, i, a = 0) {
  const o = ["♥", "♥︎♥︎", "○○", "⚭", "∞"];
  if (!o.some((m) => e.includes(m)) || !i) {
    c.textAlign = "center", c.fillText(e, t, s), a > 0 && c.strokeText(e, t, s);
    return;
  }
  const f = e.split(/(♥︎♥︎|○○|[♥⚭∞])/u), l = [];
  c.font = `bold ${n}px ${r}`;
  const d = n;
  for (const m of f)
    if (m)
      if (o.includes(m)) {
        const _ = i[m];
        if (_ && _.img) {
          const p = _.width, v = _.height, g = v > 0 ? p / v * d : 0;
          l.push({
            type: "symbol",
            text: m,
            width: g,
            img: _.img
          });
        } else {
          const p = c.measureText(m).width;
          l.push({ type: "text", text: m, width: p });
        }
      } else {
        const _ = c.measureText(m).width;
        l.push({ type: "text", text: m, width: _ });
      }
  const h = l.reduce((m, _) => m + _.width, 0);
  let y = t - h / 2;
  c.textAlign = "left";
  for (const m of l) {
    if (m.type === "symbol" && m.img) {
      const _ = s - d / 2;
      c.drawImage(m.img, y, _, m.width, d);
    } else
      c.fillText(m.text, y, s), a > 0 && c.strokeText(m.text, y, s);
    y += m.width;
  }
}
let be = null;
function Js(c, e, t) {
  const s = new Int32Array(e * t), n = new Float32Array(e * t), r = 1e9;
  for (let o = 0; o < e; o++) {
    let u = r;
    for (let f = 0; f < t; f++) {
      const l = f * e + o;
      c[l] !== 0 ? u = 0 : u = u === r ? r : u + 1, s[l] = u;
    }
    u = r;
    for (let f = t - 1; f >= 0; f--) {
      const l = f * e + o;
      c[l] !== 0 ? u = 0 : u = u === r ? r : u + 1, u < s[l] && (s[l] = u);
    }
  }
  const i = new Int32Array(e), a = new Int32Array(e);
  for (let o = 0; o < t; o++) {
    const u = o * e;
    let f = 0;
    i[0] = 0, a[0] = 0;
    for (let l = 1; l < e; l++) {
      const d = s[u + l], h = d === r ? r : d * d;
      for (; f >= 0; ) {
        const x = i[f], y = s[u + x], m = y === r ? r : y * y;
        let _ = 0;
        if (h === r ? _ = r : m === r ? _ = 0 : _ = 1 + Math.floor((l * l - x * x + (h - m)) / (2 * (l - x))), _ < a[f])
          f--;
        else {
          _ < e && (f++, i[f] = l, a[f] = _);
          break;
        }
      }
      f < 0 && (f = 0, i[0] = l, a[0] = 0);
    }
    for (let l = e - 1; l >= 0; l--) {
      for (; f > 0 && l < a[f]; )
        f--;
      const d = i[f], h = l - d, x = s[u + d], y = x === r ? r : x * x, m = h * h + y;
      n[u + l] = Math.sqrt(m);
    }
  }
  return n;
}
function Zs(c) {
  const {
    text: e,
    width: t = 1024,
    height: s = 200,
    fontSize: n = 5,
    fontFamily: r = "Arial, sans-serif",
    blur: i = 5,
    mode: a = "emboss",
    offsetY: o = 0,
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
  const _ = 20;
  m.font = `bold ${_}px ${r}`;
  let p = 0;
  const v = ["♥", "♥︎♥︎", "○○", "⚭", "∞"];
  if (!v.some((k) => e.includes(k)) || !f)
    p = m.measureText(e).width;
  else {
    const k = e.split(/(♥︎♥︎|○○|[♥⚭∞])/u), W = _;
    for (const ae of k)
      if (ae)
        if (v.includes(ae)) {
          const me = f[ae];
          if (me && me.img) {
            const De = me.width, Ie = me.height, ve = Ie > 0 ? De / Ie * W : 0;
            p += ve;
          } else
            p += m.measureText(ae).width;
        } else
          p += m.measureText(ae).width;
  }
  const w = 0.85, T = p / _ + i * 8 / n, A = 1 + i * 8 / n, M = T > 0 ? (t * w - 20 - Math.abs(u) * 2) / T : 1 / 0, S = A > 0 ? (s * w - 20 - Math.abs(o) * 2) / A : 1 / 0, R = m.measureText("AaBbCcDdEeFfGgHhIiJj").width / _ + i * 8 / n, I = R > 0 ? (t * w - 20 - Math.abs(u) * 2) / R : 1 / 0, P = Math.max(
    1,
    Math.floor(Math.min(M, S, I))
  );
  let B = "";
  f && (B = Object.keys(f).sort().map((k) => `${k}:${f[k]?.img.src || ""}`).join(","));
  const N = 2, H = t * N, G = s * N;
  let X, K;
  if (be && be.text === e && be.fontFamily === r && be.width === t && be.height === s && be.offsetY === o && be.offsetX === u && be.symbolsKey === B && be.strokeWidth === x)
    X = be.sdf, K = be.coverage;
  else {
    const k = document.createElement("canvas");
    k.width = H, k.height = G;
    const W = k.getContext("2d");
    if (!W)
      throw new Error("Could not get 2D context for temp canvas");
    W.fillStyle = "#FFFFFF", W.fillRect(0, 0, H, G), W.fillStyle = "#000000", W.strokeStyle = "#000000", W.lineWidth = x * N;
    const ae = P * N;
    W.font = `bold ${ae}px ${r}`, W.textBaseline = "middle";
    const me = H / 2 + u * N, De = G / 2 + o * N;
    Xo(
      W,
      e,
      me,
      De,
      ae,
      r,
      f,
      x * N
    );
    const Ie = W.getImageData(0, 0, H, G), ve = new Uint8Array(H * G);
    K = new Uint8Array(H * G);
    for (let q = 0; q < H * G; q++) {
      const Me = Ie.data[q * 4];
      ve[q] = Me < 128 ? 1 : 0, K[q] = 255 - Me;
    }
    const Te = Js(ve, H, G), Pe = new Uint8Array(H * G);
    for (let q = 0; q < H * G; q++)
      Pe[q] = ve[q] === 0 ? 1 : 0;
    const Le = Js(Pe, H, G);
    X = new Float32Array(H * G);
    for (let q = 0; q < H * G; q++)
      X[q] = Te[q] - Le[q];
    be = {
      text: e,
      fontFamily: r,
      width: t,
      height: s,
      offsetY: o,
      offsetX: u,
      symbolsKey: B,
      strokeWidth: x,
      sdf: X,
      coverage: K
    };
  }
  const D = document.createElement("canvas");
  D.width = t, D.height = s;
  const F = D.getContext("2d");
  if (!F)
    throw new Error("2D Canvas Context is not supported in this environment.");
  const U = document.createElement("canvas");
  U.width = H, U.height = G;
  const j = U.getContext("2d");
  if (!j)
    throw new Error("Could not get 2D context for tempOutCanvas");
  const le = j.createImageData(H, G), he = le.data;
  for (let k = 0; k < H * G; k++) {
    let W = X[k];
    const ae = Math.abs(W), me = 1.5 * N;
    if (ae < me) {
      const xe = (me - ae) / me, hs = (0.5 - K[k] / 255) * me;
      W = (1 - xe) * W + xe * hs;
    }
    let De = 0;
    if (W >= 0) {
      const xe = 1.5 * N;
      De = W / xe;
    } else {
      const xe = Math.max(0.1, l * N);
      De = W / xe;
    }
    const ve = (Math.max(-1, Math.min(1, De)) + 1) / 2, Te = 3 * ve * ve - 2 * ve * ve * ve, Pe = (1 - h) * ve + h * Te, Le = 1 - d + d * Pe, q = Math.round(255 * Le), Me = k * 4;
    he[Me] = q, he[Me + 1] = q, he[Me + 2] = q, he[Me + 3] = 255;
  }
  return j.putImageData(le, 0, 0), F.imageSmoothingEnabled = !0, F.imageSmoothingQuality = "high", F.drawImage(U, 0, 0, t, s), D;
}
function $o(c, e, t) {
  fetch(c).then((s) => {
    if (!s.ok) throw new Error("Failed to fetch SVG");
    return s.text();
  }).then((s) => {
    let n = s.replace(/fill="[^"]*"/g, `fill="${e}"`).replace(/stroke="[^"]*"/g, `stroke="${e}"`);
    const r = new Blob([n], {
      type: "image/svg+xml;charset=utf-8"
    }), i = URL.createObjectURL(r), a = new Image();
    a.onload = () => {
      t(a, a.naturalWidth || 20, a.naturalHeight || 20), URL.revokeObjectURL(i);
    }, a.onerror = () => {
      t(null, 0, 0), URL.revokeObjectURL(i);
    }, a.src = i;
  }).catch((s) => {
    console.error("Error loading SVG symbol:", s), t(null, 0, 0);
  });
}
function qo(c, e = 4) {
  const t = c.width, s = c.height, n = document.createElement("canvas");
  n.width = t, n.height = s;
  const r = n.getContext("2d"), i = c.getContext("2d");
  if (!r || !i) return n;
  const a = i.getImageData(0, 0, t, s), o = r.createImageData(t, s), u = (f, l) => {
    const d = Math.max(0, Math.min(t - 1, f)), h = Math.max(0, Math.min(s - 1, l));
    return a.data[(h * t + d) * 4];
  };
  for (let f = 0; f < s; f++)
    for (let l = 0; l < t; l++) {
      const d = u(l - 1, f), h = u(l + 1, f), x = u(l, f - 1), y = u(l, f + 1), m = (h - d) / 255 * e, _ = (y - x) / 255 * e, p = 1, v = Math.sqrt(m * m + _ * _ + p * p), g = m / v, w = _ / v, T = p / v, A = (f * t + l) * 4;
      o.data[A] = Math.round((g + 1) * 127.5), o.data[A + 1] = Math.round((w + 1) * 127.5), o.data[A + 2] = Math.round((T + 1) * 127.5), o.data[A + 3] = 255;
    }
  return r.putImageData(o, 0, 0), n;
}
const Jo = $e(({ textOffsetX: c = 0 }) => {
  const { design3DManager: e } = gt(), { ringManager: t } = e, s = t.engravingText || "", n = t.engravingFont;
  return ie(() => {
  }, [s, n, c]), null;
}), Zo = $e(
  ({ modelUrl: c }) => {
    const { design3DManager: e } = gt(), { ringManager: t } = e, {
      currentView: s,
      engravingText: n,
      engravingSymbol: r,
      engravingFont: i,
      bevelWidth: a,
      engravingDepth: o,
      edgeSoftness: u,
      normalStrength: f,
      aoStrength: l,
      strokeWidth: d,
      showDiamond: h
    } = t, { scene: x } = ri(c), y = mn(() => {
      if (!x) return null;
      let g = null;
      return x.traverse((w) => {
        const T = w;
        if (T.isMesh) {
          const A = T.name, M = A.toLowerCase();
          if (A === "Engraving Mesh" || A === "Engraving Metal" || A === "Engraving_Mesh" || A === "Engraving_Metal" || M.includes("engrav")) {
            const b = M.includes("nodiamond");
            h ? b && g || (g = T) : b ? g = T : g || (g = T);
          }
        }
      }), g;
    }, [x, h]), [m, _] = ii({ normalTexture: null, aoTexture: null });
    ie(() => {
      if (!n && !r) {
        _((A) => (A.normalTexture?.dispose(), A.aoTexture?.dispose(), { normalTexture: null, aoTexture: null })), t.setEngravingCanvas(null), t.setNormalMapCanvas(null);
        return;
      }
      let g = !0;
      const w = (A, M) => new Promise((S) => {
        $o(A, M, (b, E, R) => {
          S(b ? { img: b, width: E, height: R } : null);
        });
      });
      return (async () => {
        const A = ["♥", "♥︎♥︎", "○○", "⚭", "∞"], M = {
          "♥": "/message/OneH.svg",
          "♥︎♥︎": "/message/TwoH.svg",
          "○○": "/message/TwoR.svg",
          "⚭": "/message/TwoR.svg",
          "∞": "/message/Infinite.svg"
        }, S = A.filter(
          (D) => (n || "").includes(D)
        ), b = [], E = {};
        for (const D of S) {
          const F = M[D];
          b.push(
            w(F, "#000000").then((U) => {
              E[D] = U;
            })
          );
        }
        if (await Promise.all(b), typeof document < "u" && document.fonts && i)
          try {
            await document.fonts.load(`bold 30px ${i}`);
          } catch (D) {
            console.error("Failed to load engraving font:", D);
          }
        if (!g) return;
        const R = Zs({
          text: n || "",
          fontFamily: i,
          width: 2048,
          height: 400,
          mode: "engrave",
          blur: 0,
          offsetY: 0,
          offsetX: -10,
          symbolsMap: E,
          bevelWidth: a,
          engravingDepth: o,
          edgeSoftness: u,
          strokeWidth: d
        }), I = Zs({
          text: n || "",
          fontFamily: i,
          width: 2048,
          height: 400,
          mode: "engrave",
          blur: 0,
          offsetY: 0,
          offsetX: -10,
          symbolsMap: E,
          bevelWidth: a,
          engravingDepth: 1,
          // Force full depth (0.0 height/blackness) inside the letters for perfect shadow contrast
          edgeSoftness: u,
          strokeWidth: d
        }), P = qo(R, f), B = new L.CanvasTexture(P), N = new L.CanvasTexture(I);
        B.anisotropy = 16, N.anisotropy = 16;
        const H = R.width / R.height, G = 2.2, X = -1 * G, K = 1 * G * H;
        B.wrapS = L.ClampToEdgeWrapping, B.wrapT = L.ClampToEdgeWrapping, B.repeat.set(X, K), B.offset.set(0.5 - 0.5 * X, 0.5 - 0.5 * K), B.colorSpace = L.NoColorSpace, N.wrapS = L.ClampToEdgeWrapping, N.wrapT = L.ClampToEdgeWrapping, N.repeat.set(X, K), N.offset.set(0.5 - 0.5 * X, 0.5 - 0.5 * K), N.colorSpace = L.NoColorSpace, t.setEngravingCanvas(R), t.setNormalMapCanvas(P), _((D) => (D.normalTexture?.dispose(), D.aoTexture?.dispose(), { normalTexture: B, aoTexture: N }));
      })(), () => {
        g = !1;
      };
    }, [
      n,
      r,
      i,
      a,
      o,
      u,
      f,
      l,
      d,
      y
    ]), ie(() => () => {
      _((g) => (g.normalTexture?.dispose(), g.aoTexture?.dispose(), { normalTexture: null, aoTexture: null })), t.setEngravingCanvas(null), t.setNormalMapCanvas(null);
    }, []);
    const { normalTexture: p, aoTexture: v } = m;
    return ie(() => {
      if (!y || !y.geometry) return;
      const g = y.onBeforeRender, w = y.onAfterRender;
      return y.onBeforeRender = (T, A, M, S, b, E) => {
        g && g.call(
          y,
          T,
          A,
          M,
          S,
          b,
          E
        ), M instanceof L.OrthographicCamera && S.setDrawRange(0, 0);
      }, y.onAfterRender = (T, A, M, S, b, E) => {
        w && w.call(
          y,
          T,
          A,
          M,
          S,
          b,
          E
        ), S.setDrawRange(0, 1 / 0);
      }, () => {
        y.onBeforeRender = g, y.onAfterRender = w, y.geometry && y.geometry.setDrawRange(0, 1 / 0);
      };
    }, [y]), ie(() => {
      if (!(!y || !y.geometry))
        if (p && v) {
          let g = y.userData.originalMaterial;
          if (!g) {
            const T = y.material;
            T && !T.userData?.isEngraved && (g = T, y.userData.originalMaterial = g);
          }
          let w = y.userData.engravedMaterial;
          !w && g && (w = g.clone(), w.userData.isEngraved = !0, w.normalScale = new L.Vector2(-0.05, 0.05), y.userData.engravedMaterial = w), w && (w.normalMap = p, w.aoMap = v, w.aoMapIntensity = l, y.material !== w && (y.material = w));
        } else
          y.userData.originalMaterial && (y.material = y.userData.originalMaterial);
    }, [y, p, v, l]), ie(() => () => {
      y && (y.userData.originalMaterial && (y.material = y.userData.originalMaterial, y.userData.originalMaterial = null), y.userData.engravedMaterial && (y.userData.engravedMaterial.dispose(), y.userData.engravedMaterial = null));
    }, [y]), /* @__PURE__ */ Y.jsx(Jo, {});
  }
), Qo = $e(
  ({ diamondEnvMap: c }) => {
    const { design3DManager: e } = gt(), { ringManager: t } = e, { size: s } = ci(), n = t.modelUrl;
    return /* @__PURE__ */ Y.jsx(os, { fallback: null, children: n && /* @__PURE__ */ Y.jsx(
      ea,
      {
        modelUrl: n,
        diamondEnvMap: c,
        size: s
      },
      n
    ) });
  }
), ea = $e(
  ({
    modelUrl: c,
    diamondEnvMap: e,
    size: t,
    role: s,
    opacitiesRef: n,
    onLoad: r,
    visible: i = !0,
    texturesProp: a
  }) => {
    const { design3DManager: o, designManager: u } = gt(), { ringManager: f } = o, l = a !== void 0 ? a : f?.textures, {
      colorHex: d,
      baseColorHex: h,
      finishingColorHex: x,
      engravingColorHex: y,
      roughness: m,
      finish: _,
      showDiamond: p,
      currentView: v,
      homeRotation: g,
      engraveRotation: w
    } = f, { scene: T } = ri(c), A = Oe(new L.Color(h)), M = Oe(new L.Color(x)), S = Oe(new L.Color(y)), b = Oe(m);
    ie(() => {
      A.current.set(h), M.current.set(x), S.current.set(y), b.current = m;
    }, [h, x, y, m]);
    const E = mn(() => {
      if (!T) return null;
      const V = { x: 0, y: 0, z: 0 }, te = v === 2 ? w ?? V : g ?? V;
      return jo(T, te.x, te.y, te.z);
    }, [T, v, g, w]);
    ie(() => {
      E && i && u.setModelMinY(E.minY || 0);
    }, [E, u, i]), ie(() => {
      f._markLoaded(), T && r && r(T);
    }, [T, f, r]);
    const R = Oe(v);
    ie(() => {
      R.current = v;
    }, [v]), ie(() => {
      const V = o.cameraManager.cameraRef;
      if (T && V) {
        const $ = setTimeout(() => {
          if (R.current === 2)
            V.setLookAt(0, 2, -4.4, 0, 0, 0, !1), V.minDistance = 4.3, V.maxDistance = 5.5, V.minAzimuthAngle = -1 / 0, V.maxAzimuthAngle = 1 / 0, V.minPolarAngle = 0.94, V.maxPolarAngle = 1.3399999999999999;
          else {
            const C = u.viewManager.settings, te = C.homeDistance;
            V.setLookAt(0, 0, te, 0, 0, 0, !1), V.minDistance = C.minDistance, V.maxDistance = C.maxDistance, V.minAzimuthAngle = -1 / 0, V.maxAzimuthAngle = 1 / 0, V.minPolarAngle = C.minPolarAngle, V.maxPolarAngle = C.maxPolarAngle;
          }
        }, 50);
        return () => clearTimeout($);
      }
    }, [T, o.cameraManager.cameraRef, u]);
    const I = dt(l, [
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
    ]), P = !!I, B = dt(l, [
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
    ]), N = !!B, H = dt(l, [
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
    ]), G = !!H, X = dt(l, [
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
    ]), K = !!X, D = dt(l, [
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
    ]), F = !!D, U = dt(l, [
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
    ]), j = !!U, le = dt(l, [
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
    ]), he = !!le, k = P && I ? I : "", W = N && B ? B : "", ae = G && H ? H : "", me = K && X ? X : "", De = F && D ? D : "", Ie = j && U ? U : "", ve = he && le ? le : "", Te = at(
      ft,
      k
    );
    Te && (Te.flipY = !1);
    const Pe = at(
      ft,
      W
    );
    Pe && (Pe.flipY = !1);
    const Le = at(
      ft,
      ae
    );
    Le && (Le.flipY = !1);
    const q = at(
      ft,
      me
    );
    q && (q.flipY = !1);
    const Me = at(
      ft,
      De
    );
    Me && (Me.flipY = !1);
    const xe = at(
      ft,
      Ie
    );
    xe && (xe.flipY = !1, xe.colorSpace = L.NoColorSpace);
    const ze = at(
      ft,
      ve
    );
    ze && (ze.flipY = !1, ze.colorSpace = L.NoColorSpace);
    const Wt = c ? ((V) => {
      const $ = V.split("/"), C = $.findIndex((te) => te === "BehytRings");
      return C !== -1 && $.length > C + 3 ? {
        collection: $[C + 1],
        modelId: $[C + 2],
        variation: $[C + 3]
      } : null;
    })(c) : null, Bi = Wt ? `/BehytRings/${Wt.collection}/${Wt.modelId}/${Wt.variation}/Roughness_Map.jpg` : "", bn = l;
    bn?.roughness && !bn.roughness.endsWith("roughness.jpg") && bn.roughness;
    const rt = 1, ee = Oe(
      new L.MeshPhysicalMaterial({
        color: d,
        metalness: 1,
        roughness: 0,
        aoMap: P ? Te : null,
        aoMapIntensity: P ? 1 : 0,
        clearcoat: _ === "Polished" ? 1 : 0,
        normalScale: new L.Vector2(rt, rt),
        normalMap: j ? xe : null,
        alphaMap: P ? Te : null
      })
    ), se = Oe(
      new L.MeshPhysicalMaterial({
        color: "#f6f5f5",
        metalness: 1,
        roughness: 0,
        aoMap: N ? Pe : null,
        aoMapIntensity: N ? 0.8 : 0,
        clearcoat: _ === "Polished" ? 1 : 0,
        clearcoatRoughness: 0.1,
        normalScale: new L.Vector2(rt, rt),
        normalMap: he ? ze : null
      })
    ), Z = Oe(
      new L.MeshPhysicalMaterial({
        color: d,
        metalness: 1,
        roughness: m,
        aoMap: G ? Le : null,
        aoMapIntensity: G ? 1 : 0,
        clearcoat: _ === "Polished" ? 1 : 0,
        clearcoatRoughness: 0.1
      })
    );
    ie(() => {
      let V = null;
      p ? V = P ? Te : null : V = K ? q : P ? Te : null;
      let $ = null;
      p ? $ = N ? Pe : null : $ = F ? Me : N ? Pe : null;
      const C = G ? Le : null;
      ee.current.aoMap = V, ee.current.aoMapIntensity = V ? 1 : 0, ee.current.normalMap = j ? xe : null, ee.current.alphaMap = P ? Te : null, ee.current.needsUpdate = !0, se.current.aoMap = $, se.current.aoMapIntensity = $ ? 0.8 : 0, se.current.normalMap = he ? ze : null, se.current.needsUpdate = !0, Z.current.aoMap = C, Z.current.aoMapIntensity = C ? 1 : 0, Z.current.needsUpdate = !0;
    }, [
      Te,
      Pe,
      Le,
      q,
      Me,
      xe,
      ze,
      P,
      N,
      G,
      K,
      F,
      j,
      he,
      p
    ]), Ui((V, $) => {
      const C = 1 - Math.pow(0.01, $), te = _ === "Polished" ? 1 : 0;
      ee.current.color.lerp(A.current, C), ee.current.roughness = L.MathUtils.lerp(
        ee.current.roughness,
        b.current,
        C
      ), ee.current.clearcoat = L.MathUtils.lerp(
        ee.current.clearcoat,
        te,
        C
      ), ee.current.clearcoatRoughness = L.MathUtils.lerp(
        ee.current.clearcoatRoughness,
        0.1,
        C
      ), se.current.color.lerp(
        M.current,
        C
      ), se.current.roughness = L.MathUtils.lerp(
        se.current.roughness,
        b.current,
        C
      ), se.current.clearcoat = L.MathUtils.lerp(
        se.current.clearcoat,
        te,
        C
      ), se.current.clearcoatRoughness = L.MathUtils.lerp(
        se.current.clearcoatRoughness,
        0.1,
        C
      ), Z.current.color.lerp(
        S.current,
        C
      ), Z.current.roughness = L.MathUtils.lerp(
        Z.current.roughness,
        b.current,
        C
      ), Z.current.clearcoat = L.MathUtils.lerp(
        Z.current.clearcoat,
        te,
        C
      ), Z.current.clearcoatRoughness = L.MathUtils.lerp(
        Z.current.clearcoatRoughness,
        0.1,
        C
      );
      const Q = n && n.current[c] !== void 0 ? n.current[c] : 1, qe = Q < 1;
      ee.current.transparent = qe, ee.current.opacity = Q, se.current.transparent = qe, se.current.opacity = Q, Z.current.transparent = qe, Z.current.opacity = Q, T && i && T.traverse((Ge) => {
        Ge instanceof L.Mesh && Ge.material && (Array.isArray(Ge.material) ? Ge.material : [Ge.material]).forEach((Fe) => {
          Fe !== ee.current && Fe !== se.current && Fe !== Z.current && (Fe.transparent = qe, Fe.opacity = Q);
        });
      });
    }), Kt.useLayoutEffect(() => {
      const V = n && n.current[c] !== void 0 ? n.current[c] : 1, $ = V < 1;
      ee.current.transparent = $, ee.current.opacity = V, se.current.transparent = $, se.current.opacity = V, Z.current.transparent = $, Z.current.opacity = V, T && T.traverse((C) => {
        C instanceof L.Mesh && C.material && (Array.isArray(C.material) ? C.material : [C.material]).forEach((Q) => {
          Q !== ee.current && Q !== se.current && Q !== Z.current && (Q.transparent = $, Q.opacity = V);
        });
      });
    }, [T, i, c, n]), ie(() => () => {
      ee.current.dispose(), se.current.dispose(), Z.current.dispose();
    }, []);
    const {
      hasNoDiamondBaseMesh: ms,
      hasNoDiamondFinishingMesh: ps,
      hasNoDiamondEngravingMesh: gs
    } = mn(() => {
      let V = !1, $ = !1, C = !1;
      return T ? (T.traverse((te) => {
        if (te.name) {
          const Q = te.name.toLowerCase();
          Q.includes("nodiamond") && (Q.includes("engrav") ? C = !0 : Q.includes("finishing") || Q.includes("silver") ? $ = !0 : V = !0);
        }
      }), {
        hasNoDiamondBaseMesh: V,
        hasNoDiamondFinishingMesh: $,
        hasNoDiamondEngravingMesh: C
      }) : {
        hasNoDiamondBaseMesh: !1,
        hasNoDiamondFinishingMesh: !1,
        hasNoDiamondEngravingMesh: !1
      };
    }, [T]);
    return mn(() => {
      if (!T) return;
      const V = [];
      ee.current.normalMap = null, se.current.normalMap = null, Z.current.normalMap = null, T.traverse(($) => {
        if ($ instanceof L.Mesh) {
          const C = $;
          C.geometry && C.geometry.computeVertexNormals();
          const te = (_e, we) => {
            let ot = _e;
            const Rn = we.toLowerCase();
            for (; ot; ) {
              if (ot.name && ot.name.toLowerCase().includes(Rn))
                return !0;
              ot = ot.parent;
            }
            return !1;
          }, Q = te(C, "NoDiamond"), qe = !Q && (te(C, "diamond") || te(C, "diam_centr")), Ge = te(C, "engrav"), Yt = te(C, "finishing") || te(C, "silver");
          C.userData.originalNormalMap === void 0 && (C.userData.originalNormalMap = C.material?.normalMap || null, C.userData.originalNormalScale = C.material?.normalScale ? C.material.normalScale.clone() : null);
          const Fe = C.userData.originalNormalMap, Xt = C.userData.originalNormalScale, xs = se.current, ys = ee.current, vs = (_e, we) => {
            const ot = we ? j : he, Rn = we ? xe : ze;
            ot ? (_e.normalMap = Rn, _e.normalScale.set(rt, rt)) : Fe && (_e.normalMap = Fe, Xt && _e.normalScale.copy(Xt));
          };
          if (p ? Q ? C.visible = !1 : C.visible = !0 : qe ? C.visible = !1 : Ge ? Q ? C.visible = !0 : C.visible = !gs : Yt ? Q ? C.visible = !0 : C.visible = !ps : Q ? C.visible = !0 : C.visible = !ms, V.push({
            "Mesh Name": C.name,
            "Parent Name": C.parent?.name || "None",
            "Is Diamond": qe,
            "Is NoDiamond": Q,
            "Is Finishing": Yt,
            "Is Engraving": Ge,
            "Calculated Visibility": C.visible
          }), qe) {
            if (p) {
              const _e = new _n(C.geometry, { strategy: 1 });
              C.material = new Yo({
                geometry: C.geometry,
                bvh: _e,
                envMap: e,
                resolution: new L.Vector2(t.width, t.height),
                ior: 2.4,
                bounces: 3,
                aberrationStrength: 5e-3,
                envMapIntensity: 0.6,
                reflectivity: 0,
                fresnel: 0.3
              });
            }
          } else if (Ge)
            if (C.material && C.material.userData?.isEngraved) {
              const _e = C.material, we = Z.current;
              _e && we && (_e.color.copy(we.color), _e.roughness = we.roughness, _e.metalness = we.metalness);
            } else
              C.material = Z.current, Fe && (Z.current.normalMap = Fe, Xt && Z.current.normalScale.copy(
                Xt
              ));
          else Yt ? (C.material = xs, vs(xs, !1)) : (C.material = ys, vs(ys, !0));
          C.material && (Array.isArray(C.material) ? C.material : [C.material]).forEach((we) => {
            we && (we.flatShading = !1, we.needsUpdate = !0);
          });
        }
      });
    }, [
      T,
      ee.current,
      se.current,
      Z.current,
      e,
      t,
      p,
      Le,
      xe,
      ze,
      j,
      he,
      rt,
      ms,
      ps,
      gs,
      i
    ]), T && E ? /* @__PURE__ */ Y.jsx("primitive", { object: T, visible: i }) : null;
  }
), Si = $e(
  ({ diamondEnvPath: c }) => {
    const { design3DManager: e } = gt(), { ringManager: t } = e, s = Fi({ files: c });
    return t.modelUrl ? /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
      /* @__PURE__ */ Y.jsx(Qo, { diamondEnvMap: s }),
      !t.isTransitioning && /* @__PURE__ */ Y.jsx(Zo, { modelUrl: t.modelUrl })
    ] }) : null;
  }
);
function Qs(c, e) {
  if (e === Wi)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), c;
  if (e === Wn || e === mi) {
    let t = c.getIndex();
    if (t === null) {
      const i = [], a = c.getAttribute("position");
      if (a !== void 0) {
        for (let o = 0; o < a.count; o++)
          i.push(o);
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
class ta extends pi {
  /**
   * Constructs a new glTF loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new oa(t);
    }), this.register(function(t) {
      return new aa(t);
    }), this.register(function(t) {
      return new ga(t);
    }), this.register(function(t) {
      return new xa(t);
    }), this.register(function(t) {
      return new ya(t);
    }), this.register(function(t) {
      return new la(t);
    }), this.register(function(t) {
      return new ua(t);
    }), this.register(function(t) {
      return new fa(t);
    }), this.register(function(t) {
      return new da(t);
    }), this.register(function(t) {
      return new ra(t);
    }), this.register(function(t) {
      return new ha(t);
    }), this.register(function(t) {
      return new ca(t);
    }), this.register(function(t) {
      return new pa(t);
    }), this.register(function(t) {
      return new ma(t);
    }), this.register(function(t) {
      return new sa(t);
    }), this.register(function(t) {
      return new va(t);
    }), this.register(function(t) {
      return new _a(t);
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
    const a = function(u) {
      n ? n(u) : console.error(u), r.manager.itemError(e), r.manager.itemEnd(e);
    }, o = new as(this.manager);
    o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(u) {
      try {
        r.parse(u, i, function(f) {
          t(f), r.manager.itemEnd(e);
        }, a);
      } catch (f) {
        a(f);
      }
    }, s, a);
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
    const i = {}, a = {}, o = new TextDecoder();
    if (typeof e == "string")
      r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (o.decode(new Uint8Array(e, 0, 4)) === Ei) {
        try {
          i[z.KHR_BINARY_GLTF] = new wa(e);
        } catch (l) {
          n && n(l);
          return;
        }
        r = JSON.parse(i[z.KHR_BINARY_GLTF].content);
      } else
        r = JSON.parse(o.decode(e));
    else
      r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const u = new Na(r, {
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
      l.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[l.name] = l, i[l.name] = !0;
    }
    if (r.extensionsUsed)
      for (let f = 0; f < r.extensionsUsed.length; ++f) {
        const l = r.extensionsUsed[f], d = r.extensionsRequired || [];
        switch (l) {
          case z.KHR_MATERIALS_UNLIT:
            i[l] = new ia();
            break;
          case z.KHR_DRACO_MESH_COMPRESSION:
            i[l] = new Ta(r, this.dracoLoader);
            break;
          case z.KHR_TEXTURE_TRANSFORM:
            i[l] = new Ma();
            break;
          case z.KHR_MESH_QUANTIZATION:
            i[l] = new Aa();
            break;
          default:
            d.indexOf(l) >= 0 && a[l] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + l + '".');
        }
      }
    u.setExtensions(i), u.setPlugins(a), u.parse(s, n);
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
function na() {
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
class sa {
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
    const r = t.json, o = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let u;
    const f = new mt(16777215);
    o.color !== void 0 && f.setRGB(o.color[0], o.color[1], o.color[2], He);
    const l = o.range !== void 0 ? o.range : 0;
    switch (o.type) {
      case "directional":
        u = new $i(f), u.target.position.set(0, 0, -1), u.add(u.target);
        break;
      case "point":
        u = new Xi(f), u.distance = l;
        break;
      case "spot":
        u = new Yi(f), u.distance = l, o.spot = o.spot || {}, o.spot.innerConeAngle = o.spot.innerConeAngle !== void 0 ? o.spot.innerConeAngle : 0, o.spot.outerConeAngle = o.spot.outerConeAngle !== void 0 ? o.spot.outerConeAngle : Math.PI / 4, u.angle = o.spot.outerConeAngle, u.penumbra = 1 - o.spot.innerConeAngle / o.spot.outerConeAngle, u.target.position.set(0, 0, -1), u.add(u.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + o.type);
    }
    return u.position.set(0, 0, 0), Ue(u, o), o.intensity !== void 0 && (u.intensity = o.intensity), u.name = t.createUniqueName(o.name || "light_" + e), n = Promise.resolve(u), t.cache.add(s, n), n;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, s = this.parser, r = s.json.nodes[e], a = (r.extensions && r.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(o) {
      return s._getNodeRef(t.cache, a, o);
    });
  }
}
class ia {
  constructor() {
    this.name = z.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return kt;
  }
  extendParams(e, t, s) {
    const n = [];
    e.color = new mt(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const i = r.baseColorFactor;
        e.color.setRGB(i[0], i[1], i[2], He), e.opacity = i[3];
      }
      r.baseColorTexture !== void 0 && n.push(s.assignTexture(e, "map", r.baseColorTexture, jt));
    }
    return Promise.all(n);
  }
}
class ra {
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
class oa {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ve;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    if (i.clearcoatFactor !== void 0 && (t.clearcoat = i.clearcoatFactor), i.clearcoatTexture !== void 0 && r.push(s.assignTexture(t, "clearcoatMap", i.clearcoatTexture)), i.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = i.clearcoatRoughnessFactor), i.clearcoatRoughnessTexture !== void 0 && r.push(s.assignTexture(t, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), i.clearcoatNormalTexture !== void 0 && (r.push(s.assignTexture(t, "clearcoatNormalMap", i.clearcoatNormalTexture)), i.clearcoatNormalTexture.scale !== void 0)) {
      const a = i.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new ke(a, a);
    }
    return Promise.all(r);
  }
}
class aa {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ve;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = n.extensions[this.name];
    return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class ca {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ve;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    return i.iridescenceFactor !== void 0 && (t.iridescence = i.iridescenceFactor), i.iridescenceTexture !== void 0 && r.push(s.assignTexture(t, "iridescenceMap", i.iridescenceTexture)), i.iridescenceIor !== void 0 && (t.iridescenceIOR = i.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), i.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = i.iridescenceThicknessMinimum), i.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = i.iridescenceThicknessMaximum), i.iridescenceThicknessTexture !== void 0 && r.push(s.assignTexture(t, "iridescenceThicknessMap", i.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class la {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ve;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [];
    t.sheenColor = new mt(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const i = n.extensions[this.name];
    if (i.sheenColorFactor !== void 0) {
      const a = i.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], He);
    }
    return i.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = i.sheenRoughnessFactor), i.sheenColorTexture !== void 0 && r.push(s.assignTexture(t, "sheenColorMap", i.sheenColorTexture, jt)), i.sheenRoughnessTexture !== void 0 && r.push(s.assignTexture(t, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(r);
  }
}
class ua {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ve;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    return i.transmissionFactor !== void 0 && (t.transmission = i.transmissionFactor), i.transmissionTexture !== void 0 && r.push(s.assignTexture(t, "transmissionMap", i.transmissionTexture)), Promise.all(r);
  }
}
class fa {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ve;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    t.thickness = i.thicknessFactor !== void 0 ? i.thicknessFactor : 0, i.thicknessTexture !== void 0 && r.push(s.assignTexture(t, "thicknessMap", i.thicknessTexture)), t.attenuationDistance = i.attenuationDistance || 1 / 0;
    const a = i.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new mt().setRGB(a[0], a[1], a[2], He), Promise.all(r);
  }
}
class da {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ve;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = n.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class ha {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ve;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    t.specularIntensity = i.specularFactor !== void 0 ? i.specularFactor : 1, i.specularTexture !== void 0 && r.push(s.assignTexture(t, "specularIntensityMap", i.specularTexture));
    const a = i.specularColorFactor || [1, 1, 1];
    return t.specularColor = new mt().setRGB(a[0], a[1], a[2], He), i.specularColorTexture !== void 0 && r.push(s.assignTexture(t, "specularColorMap", i.specularColorTexture, jt)), Promise.all(r);
  }
}
class ma {
  constructor(e) {
    this.parser = e, this.name = z.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ve;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    return t.bumpScale = i.bumpFactor !== void 0 ? i.bumpFactor : 1, i.bumpTexture !== void 0 && r.push(s.assignTexture(t, "bumpMap", i.bumpTexture)), Promise.all(r);
  }
}
class pa {
  constructor(e) {
    this.parser = e, this.name = z.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ve;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    return i.anisotropyStrength !== void 0 && (t.anisotropy = i.anisotropyStrength), i.anisotropyRotation !== void 0 && (t.anisotropyRotation = i.anisotropyRotation), i.anisotropyTexture !== void 0 && r.push(s.assignTexture(t, "anisotropyMap", i.anisotropyTexture)), Promise.all(r);
  }
}
class ga {
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
class xa {
  constructor(e) {
    this.parser = e, this.name = z.EXT_TEXTURE_WEBP;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, n = s.json, r = n.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const i = r.extensions[t], a = n.images[i.source];
    let o = s.textureLoader;
    if (a.uri) {
      const u = s.options.manager.getHandler(a.uri);
      u !== null && (o = u);
    }
    return s.loadTextureImage(e, i.source, o);
  }
}
class ya {
  constructor(e) {
    this.parser = e, this.name = z.EXT_TEXTURE_AVIF;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, n = s.json, r = n.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const i = r.extensions[t], a = n.images[i.source];
    let o = s.textureLoader;
    if (a.uri) {
      const u = s.options.manager.getHandler(a.uri);
      u !== null && (o = u);
    }
    return s.loadTextureImage(e, i.source, o);
  }
}
class va {
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
      return r.then(function(a) {
        const o = n.byteOffset || 0, u = n.byteLength || 0, f = n.count, l = n.byteStride, d = new Uint8Array(a, o, u);
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
class _a {
  constructor(e) {
    this.name = z.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, s = t.nodes[e];
    if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0)
      return null;
    const n = t.meshes[s.mesh];
    for (const u of n.primitives)
      if (u.mode !== Re.TRIANGLES && u.mode !== Re.TRIANGLE_STRIP && u.mode !== Re.TRIANGLE_FAN && u.mode !== void 0)
        return null;
    const i = s.extensions[this.name].attributes, a = [], o = {};
    for (const u in i)
      a.push(this.parser.getDependency("accessor", i[u]).then((f) => (o[u] = f, o[u])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((u) => {
      const f = u.pop(), l = f.isGroup ? f.children : [f], d = u[0].count, h = [];
      for (const x of l) {
        const y = new Ee(), m = new O(), _ = new gi(), p = new O(1, 1, 1), v = new qi(x.geometry, x.material, d);
        for (let g = 0; g < d; g++)
          o.TRANSLATION && m.fromBufferAttribute(o.TRANSLATION, g), o.ROTATION && _.fromBufferAttribute(o.ROTATION, g), o.SCALE && p.fromBufferAttribute(o.SCALE, g), v.setMatrixAt(g, y.compose(m, _, p));
        for (const g in o)
          if (g === "_COLOR_0") {
            const w = o[g];
            v.instanceColor = new Ji(w.array, w.itemSize, w.normalized);
          } else g !== "TRANSLATION" && g !== "ROTATION" && g !== "SCALE" && x.geometry.setAttribute(g, o[g]);
        xi.prototype.copy.call(v, x), this.parser.assignFinalMaterial(v), h.push(v);
      }
      return f.isGroup ? (f.clear(), f.add(...h), f) : h[0];
    }));
  }
}
const Ei = "glTF", Ut = 12, ei = { JSON: 1313821514, BIN: 5130562 };
class wa {
  constructor(e) {
    this.name = z.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Ut), s = new TextDecoder();
    if (this.header = {
      magic: s.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Ei)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - Ut, r = new DataView(e, Ut);
    let i = 0;
    for (; i < n; ) {
      const a = r.getUint32(i, !0);
      i += 4;
      const o = r.getUint32(i, !0);
      if (i += 4, o === ei.JSON) {
        const u = new Uint8Array(e, Ut + i, a);
        this.content = s.decode(u);
      } else if (o === ei.BIN) {
        const u = Ut + i;
        this.body = e.slice(u, u + a);
      }
      i += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Ta {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = z.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const s = this.json, n = this.dracoLoader, r = e.extensions[this.name].bufferView, i = e.extensions[this.name].attributes, a = {}, o = {}, u = {};
    for (const f in i) {
      const l = is[f] || f.toLowerCase();
      a[l] = i[f];
    }
    for (const f in e.attributes) {
      const l = is[f] || f.toLowerCase();
      if (i[f] !== void 0) {
        const d = s.accessors[e.attributes[f]], h = Et[d.componentType];
        u[l] = h.name, o[l] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(f) {
      return new Promise(function(l, d) {
        n.decodeDracoFile(f, function(h) {
          for (const x in h.attributes) {
            const y = h.attributes[x], m = o[x];
            m !== void 0 && (y.normalized = m);
          }
          l(h);
        }, a, u, He, d);
      });
    });
  }
}
class Ma {
  constructor() {
    this.name = z.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class Aa {
  constructor() {
    this.name = z.KHR_MESH_QUANTIZATION;
  }
}
class Di extends Mr {
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
    const r = this.resultBuffer, i = this.sampleValues, a = this.valueSize, o = a * 2, u = a * 3, f = n - t, l = (s - t) / f, d = l * l, h = d * l, x = e * u, y = x - u, m = -2 * h + 3 * d, _ = h - d, p = 1 - m, v = _ - d + l;
    for (let g = 0; g !== a; g++) {
      const w = i[y + g + a], T = i[y + g + o] * f, A = i[x + g + a], M = i[x + g] * f;
      r[g] = p * w + v * T + m * A + _ * M;
    }
    return r;
  }
}
const ba = new gi();
class Ra extends Di {
  interpolate_(e, t, s, n) {
    const r = super.interpolate_(e, t, s, n);
    return ba.fromArray(r).normalize().toArray(r), r;
  }
}
const Re = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, Et = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, ti = {
  9728: et,
  9729: pt,
  9984: ir,
  9985: sr,
  9986: nr,
  9987: yi
}, ni = {
  33071: pn,
  33648: rr,
  10497: Yn
}, Hn = {
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
}, Ze = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Sa = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: _i,
  STEP: Tr
}, Vn = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Ea(c) {
  return c.DefaultMaterial === void 0 && (c.DefaultMaterial = new vi({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Gn
  })), c.DefaultMaterial;
}
function ht(c, e, t) {
  for (const s in t.extensions)
    c[s] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[s] = t.extensions[s]);
}
function Ue(c, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(c.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Da(c, e, t) {
  let s = !1, n = !1, r = !1;
  for (let u = 0, f = e.length; u < f; u++) {
    const l = e[u];
    if (l.POSITION !== void 0 && (s = !0), l.NORMAL !== void 0 && (n = !0), l.COLOR_0 !== void 0 && (r = !0), s && n && r) break;
  }
  if (!s && !n && !r) return Promise.resolve(c);
  const i = [], a = [], o = [];
  for (let u = 0, f = e.length; u < f; u++) {
    const l = e[u];
    if (s) {
      const d = l.POSITION !== void 0 ? t.getDependency("accessor", l.POSITION) : c.attributes.position;
      i.push(d);
    }
    if (n) {
      const d = l.NORMAL !== void 0 ? t.getDependency("accessor", l.NORMAL) : c.attributes.normal;
      a.push(d);
    }
    if (r) {
      const d = l.COLOR_0 !== void 0 ? t.getDependency("accessor", l.COLOR_0) : c.attributes.color;
      o.push(d);
    }
  }
  return Promise.all([
    Promise.all(i),
    Promise.all(a),
    Promise.all(o)
  ]).then(function(u) {
    const f = u[0], l = u[1], d = u[2];
    return s && (c.morphAttributes.position = f), n && (c.morphAttributes.normal = l), r && (c.morphAttributes.color = d), c.morphTargetsRelative = !0, c;
  });
}
function Ia(c, e) {
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
function Pa(c) {
  let e;
  const t = c.extensions && c.extensions[z.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + zn(t.attributes) : e = c.indices + ":" + zn(c.attributes) + ":" + c.mode, c.targets !== void 0)
    for (let s = 0, n = c.targets.length; s < n; s++)
      e += ":" + zn(c.targets[s]);
  return e;
}
function zn(c) {
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
function Ca(c) {
  return c.search(/\.jpe?g($|\?)/i) > 0 || c.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : c.search(/\.webp($|\?)/i) > 0 || c.search(/^data\:image\/webp/) === 0 ? "image/webp" : c.search(/\.ktx2($|\?)/i) > 0 || c.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const Ba = new Ee();
class Na {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new na(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = !1, n = -1, r = !1, i = -1;
    if (typeof navigator < "u") {
      const a = navigator.userAgent;
      s = /^((?!chrome|android).)*safari/i.test(a) === !0;
      const o = a.match(/Version\/(\d+)/);
      n = s && o ? parseInt(o[1], 10) : -1, r = a.indexOf("Firefox") > -1, i = r ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || s && n < 17 || r && i < 98 ? this.textureLoader = new Zi(this.options.manager) : this.textureLoader = new Qi(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new as(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
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
      const a = {
        scene: i[0][n.scene || 0],
        scenes: i[0],
        animations: i[1],
        cameras: i[2],
        asset: n.asset,
        parser: s,
        userData: {}
      };
      return ht(r, a, n), Ue(a, n), Promise.all(s._invokeAll(function(o) {
        return o.afterRoot && o.afterRoot(a);
      })).then(function() {
        for (const o of a.scenes)
          o.updateMatrixWorld();
        e(a);
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
      for (let a = 0, o = i.length; a < o; a++)
        e[i[a]].isBone = !0;
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
    const n = s.clone(), r = (i, a) => {
      const o = this.associations.get(i);
      o != null && this.associations.set(a, o);
      for (const [u, f] of i.children.entries())
        r(f, a.children[u]);
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
      const i = Hn[n.type], a = Et[n.componentType], o = n.normalized === !0, u = new a(n.count * i);
      return Promise.resolve(new St(u, i, o));
    }
    const r = [];
    return n.bufferView !== void 0 ? r.push(this.getDependency("bufferView", n.bufferView)) : r.push(null), n.sparse !== void 0 && (r.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(r).then(function(i) {
      const a = i[0], o = Hn[n.type], u = Et[n.componentType], f = u.BYTES_PER_ELEMENT, l = f * o, d = n.byteOffset || 0, h = n.bufferView !== void 0 ? s.bufferViews[n.bufferView].byteStride : void 0, x = n.normalized === !0;
      let y, m;
      if (h && h !== l) {
        const _ = Math.floor(d / h), p = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + _ + ":" + n.count;
        let v = t.cache.get(p);
        v || (y = new u(a, _ * h, n.count * h / f), v = new er(y, h / f), t.cache.add(p, v)), m = new tr(v, o, d % h / f, x);
      } else
        a === null ? y = new u(n.count * o) : y = new u(a, d, n.count * o), m = new St(y, o, x);
      if (n.sparse !== void 0) {
        const _ = Hn.SCALAR, p = Et[n.sparse.indices.componentType], v = n.sparse.indices.byteOffset || 0, g = n.sparse.values.byteOffset || 0, w = new p(i[1], v, n.sparse.count * _), T = new u(i[2], g, n.sparse.count * o);
        a !== null && (m = new St(m.array.slice(), m.itemSize, m.normalized)), m.normalized = !1;
        for (let A = 0, M = w.length; A < M; A++) {
          const S = w[A];
          if (m.setX(S, T[A * o]), o >= 2 && m.setY(S, T[A * o + 1]), o >= 3 && m.setZ(S, T[A * o + 2]), o >= 4 && m.setW(S, T[A * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
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
    let a = this.textureLoader;
    if (i.uri) {
      const o = s.manager.getHandler(i.uri);
      o !== null && (a = o);
    }
    return this.loadTextureImage(e, r, a);
  }
  loadTextureImage(e, t, s) {
    const n = this, r = this.json, i = r.textures[e], a = r.images[t], o = (a.uri || a.bufferView) + ":" + i.sampler;
    if (this.textureCache[o])
      return this.textureCache[o];
    const u = this.loadImageSource(t, s).then(function(f) {
      f.flipY = !1, f.name = i.name || a.name || "", f.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (f.name = a.uri);
      const d = (r.samplers || {})[i.sampler] || {};
      return f.magFilter = ti[d.magFilter] || pt, f.minFilter = ti[d.minFilter] || yi, f.wrapS = ni[d.wrapS] || Yn, f.wrapT = ni[d.wrapT] || Yn, f.generateMipmaps = !f.isCompressedTexture && f.minFilter !== et && f.minFilter !== pt, n.associations.set(f, { textures: e }), f;
    }).catch(function() {
      return null;
    });
    return this.textureCache[o] = u, u;
  }
  loadImageSource(e, t) {
    const s = this, n = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((l) => l.clone());
    const i = n.images[e], a = self.URL || self.webkitURL;
    let o = i.uri || "", u = !1;
    if (i.bufferView !== void 0)
      o = s.getDependency("bufferView", i.bufferView).then(function(l) {
        u = !0;
        const d = new Blob([l], { type: i.mimeType });
        return o = a.createObjectURL(d), o;
      });
    else if (i.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const f = Promise.resolve(o).then(function(l) {
      return new Promise(function(d, h) {
        let x = d;
        t.isImageBitmapLoader === !0 && (x = function(y) {
          const m = new ws(y);
          m.needsUpdate = !0, d(m);
        }), t.load(zt.resolveURL(l, r.path), x, void 0, h);
      });
    }).then(function(l) {
      return u === !0 && a.revokeObjectURL(o), Ue(l, i), l.userData.mimeType = i.mimeType || Ca(i.uri), l;
    }).catch(function(l) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", o), l;
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
        const a = s.extensions !== void 0 ? s.extensions[z.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const o = r.associations.get(i);
          i = r.extensions[z.KHR_TEXTURE_TRANSFORM].extendTexture(i, a), r.associations.set(i, o);
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
      const a = "PointsMaterial:" + s.uuid;
      let o = this.cache.get(a);
      o || (o = new or(), En.prototype.copy.call(o, s), o.color.copy(s.color), o.map = s.map, o.sizeAttenuation = !1, this.cache.add(a, o)), s = o;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + s.uuid;
      let o = this.cache.get(a);
      o || (o = new ar(), En.prototype.copy.call(o, s), o.color.copy(s.color), o.map = s.map, this.cache.add(a, o)), s = o;
    }
    if (n || r || i) {
      let a = "ClonedMaterial:" + s.uuid + ":";
      n && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), i && (a += "flat-shading:");
      let o = this.cache.get(a);
      o || (o = s.clone(), r && (o.vertexColors = !0), i && (o.flatShading = !0), n && (o.normalScale && (o.normalScale.y *= -1), o.clearcoatNormalScale && (o.clearcoatNormalScale.y *= -1)), this.cache.add(a, o), this.associations.set(o, this.associations.get(s))), s = o;
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
    const a = {}, o = r.extensions || {}, u = [];
    if (o[z.KHR_MATERIALS_UNLIT]) {
      const l = n[z.KHR_MATERIALS_UNLIT];
      i = l.getMaterialType(), u.push(l.extendParams(a, r, t));
    } else {
      const l = r.pbrMetallicRoughness || {};
      if (a.color = new mt(1, 1, 1), a.opacity = 1, Array.isArray(l.baseColorFactor)) {
        const d = l.baseColorFactor;
        a.color.setRGB(d[0], d[1], d[2], He), a.opacity = d[3];
      }
      l.baseColorTexture !== void 0 && u.push(t.assignTexture(a, "map", l.baseColorTexture, jt)), a.metalness = l.metallicFactor !== void 0 ? l.metallicFactor : 1, a.roughness = l.roughnessFactor !== void 0 ? l.roughnessFactor : 1, l.metallicRoughnessTexture !== void 0 && (u.push(t.assignTexture(a, "metalnessMap", l.metallicRoughnessTexture)), u.push(t.assignTexture(a, "roughnessMap", l.metallicRoughnessTexture))), i = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), u.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === !0 && (a.side = fi);
    const f = r.alphaMode || Vn.OPAQUE;
    if (f === Vn.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, f === Vn.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && i !== kt && (u.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new ke(1, 1), r.normalTexture.scale !== void 0)) {
      const l = r.normalTexture.scale;
      a.normalScale.set(l, l);
    }
    if (r.occlusionTexture !== void 0 && i !== kt && (u.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && i !== kt) {
      const l = r.emissiveFactor;
      a.emissive = new mt().setRGB(l[0], l[1], l[2], He);
    }
    return r.emissiveTexture !== void 0 && i !== kt && u.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, jt)), Promise.all(u).then(function() {
      const l = new i(a);
      return r.name && (l.name = r.name), Ue(l, r), t.associations.set(l, { materials: e }), r.extensions && ht(n, l, r), l;
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
    const t = cr.sanitizeNodeName(e || "");
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
    function r(a) {
      return s[z.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(o) {
        return si(o, a, t);
      });
    }
    const i = [];
    for (let a = 0, o = e.length; a < o; a++) {
      const u = e[a], f = Pa(u), l = n[f];
      if (l)
        i.push(l.promise);
      else {
        let d;
        u.extensions && u.extensions[z.KHR_DRACO_MESH_COMPRESSION] ? d = r(u) : d = si(new lr(), u, t), n[f] = { primitive: u, promise: d }, i.push(d);
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
    const t = this, s = this.json, n = this.extensions, r = s.meshes[e], i = r.primitives, a = [];
    for (let o = 0, u = i.length; o < u; o++) {
      const f = i[o].material === void 0 ? Ea(this.cache) : this.getDependency("material", i[o].material);
      a.push(f);
    }
    return a.push(t.loadGeometries(i)), Promise.all(a).then(function(o) {
      const u = o.slice(0, o.length - 1), f = o[o.length - 1], l = [];
      for (let h = 0, x = f.length; h < x; h++) {
        const y = f[h], m = i[h];
        let _;
        const p = u[h];
        if (m.mode === Re.TRIANGLES || m.mode === Re.TRIANGLE_STRIP || m.mode === Re.TRIANGLE_FAN || m.mode === void 0)
          _ = r.isSkinnedMesh === !0 ? new ur(y, p) : new fr(y, p), _.isSkinnedMesh === !0 && _.normalizeSkinWeights(), m.mode === Re.TRIANGLE_STRIP ? _.geometry = Qs(_.geometry, mi) : m.mode === Re.TRIANGLE_FAN && (_.geometry = Qs(_.geometry, Wn));
        else if (m.mode === Re.LINES)
          _ = new dr(y, p);
        else if (m.mode === Re.LINE_STRIP)
          _ = new hr(y, p);
        else if (m.mode === Re.LINE_LOOP)
          _ = new mr(y, p);
        else if (m.mode === Re.POINTS)
          _ = new pr(y, p);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(_.geometry.morphAttributes).length > 0 && Ia(_, r), _.name = t.createUniqueName(r.name || "mesh_" + e), Ue(_, r), m.extensions && ht(n, _, m), t.assignFinalMaterial(_), l.push(_);
      }
      for (let h = 0, x = l.length; h < x; h++)
        t.associations.set(l[h], {
          meshes: e,
          primitives: h
        });
      if (l.length === 1)
        return r.extensions && ht(n, l[0], r), l[0];
      const d = new Dn();
      r.extensions && ht(n, d, r), t.associations.set(d, { meshes: e });
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
    return s.type === "perspective" ? t = new gr(xr.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : s.type === "orthographic" && (t = new yr(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), Ue(t, s), Promise.resolve(t);
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
      const r = n.pop(), i = n, a = [], o = [];
      for (let u = 0, f = i.length; u < f; u++) {
        const l = i[u];
        if (l) {
          a.push(l);
          const d = new Ee();
          r !== null && d.fromArray(r.array, u * 16), o.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[u]);
      }
      return new vr(a, o);
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
    const t = this.json, s = this, n = t.animations[e], r = n.name ? n.name : "animation_" + e, i = [], a = [], o = [], u = [], f = [];
    for (let l = 0, d = n.channels.length; l < d; l++) {
      const h = n.channels[l], x = n.samplers[h.sampler], y = h.target, m = y.node, _ = n.parameters !== void 0 ? n.parameters[x.input] : x.input, p = n.parameters !== void 0 ? n.parameters[x.output] : x.output;
      y.node !== void 0 && (i.push(this.getDependency("node", m)), a.push(this.getDependency("accessor", _)), o.push(this.getDependency("accessor", p)), u.push(x), f.push(y));
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(a),
      Promise.all(o),
      Promise.all(u),
      Promise.all(f)
    ]).then(function(l) {
      const d = l[0], h = l[1], x = l[2], y = l[3], m = l[4], _ = [];
      for (let v = 0, g = d.length; v < g; v++) {
        const w = d[v], T = h[v], A = x[v], M = y[v], S = m[v];
        if (w === void 0) continue;
        w.updateMatrix && w.updateMatrix();
        const b = s._createAnimationTracks(w, T, A, M, S);
        if (b)
          for (let E = 0; E < b.length; E++)
            _.push(b[E]);
      }
      const p = new _r(r, void 0, _);
      return Ue(p, n), p;
    });
  }
  createNodeMesh(e) {
    const t = this.json, s = this, n = t.nodes[e];
    return n.mesh === void 0 ? null : s.getDependency("mesh", n.mesh).then(function(r) {
      const i = s._getNodeRef(s.meshCache, n.mesh, r);
      return n.weights !== void 0 && i.traverse(function(a) {
        if (a.isMesh)
          for (let o = 0, u = n.weights.length; o < u; o++)
            a.morphTargetInfluences[o] = n.weights[o];
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
    const t = this.json, s = this, n = t.nodes[e], r = s._loadNodeShallow(e), i = [], a = n.children || [];
    for (let u = 0, f = a.length; u < f; u++)
      i.push(s.getDependency("node", a[u]));
    const o = n.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", n.skin);
    return Promise.all([
      r,
      Promise.all(i),
      o
    ]).then(function(u) {
      const f = u[0], l = u[1], d = u[2];
      d !== null && f.traverse(function(h) {
        h.isSkinnedMesh && h.bind(d, Ba);
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
    const r = t.nodes[e], i = r.name ? n.createUniqueName(r.name) : "", a = [], o = n._invokeOne(function(u) {
      return u.createNodeMesh && u.createNodeMesh(e);
    });
    return o && a.push(o), r.camera !== void 0 && a.push(n.getDependency("camera", r.camera).then(function(u) {
      return n._getNodeRef(n.cameraCache, r.camera, u);
    })), n._invokeAll(function(u) {
      return u.createNodeAttachment && u.createNodeAttachment(e);
    }).forEach(function(u) {
      a.push(u);
    }), this.nodeCache[e] = Promise.all(a).then(function(u) {
      let f;
      if (r.isBone === !0 ? f = new wr() : u.length > 1 ? f = new Dn() : u.length === 1 ? f = u[0] : f = new xi(), f !== u[0])
        for (let l = 0, d = u.length; l < d; l++)
          f.add(u[l]);
      if (r.name && (f.userData.name = r.name, f.name = i), Ue(f, r), r.extensions && ht(s, f, r), r.matrix !== void 0) {
        const l = new Ee();
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
    const t = this.extensions, s = this.json.scenes[e], n = this, r = new Dn();
    s.name && (r.name = n.createUniqueName(s.name)), Ue(r, s), s.extensions && ht(t, r, s);
    const i = s.nodes || [], a = [];
    for (let o = 0, u = i.length; o < u; o++)
      a.push(n.getDependency("node", i[o]));
    return Promise.all(a).then(function(o) {
      for (let f = 0, l = o.length; f < l; f++)
        r.add(o[f]);
      const u = (f) => {
        const l = /* @__PURE__ */ new Map();
        for (const [d, h] of n.associations)
          (d instanceof En || d instanceof ws) && l.set(d, h);
        return f.traverse((d) => {
          const h = n.associations.get(d);
          h != null && l.set(d, h);
        }), l;
      };
      return n.associations = u(r), r;
    });
  }
  _createAnimationTracks(e, t, s, n, r) {
    const i = [], a = e.name ? e.name : e.uuid, o = [];
    Ze[r.path] === Ze.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && o.push(d.name ? d.name : d.uuid);
    }) : o.push(a);
    let u;
    switch (Ze[r.path]) {
      case Ze.weights:
        u = Ms;
        break;
      case Ze.rotation:
        u = As;
        break;
      case Ze.translation:
      case Ze.scale:
        u = Ts;
        break;
      default:
        s.itemSize === 1 ? u = Ms : u = Ts;
        break;
    }
    const f = n.interpolation !== void 0 ? Sa[n.interpolation] : _i, l = this._getArrayFromAccessor(s);
    for (let d = 0, h = o.length; d < h; d++) {
      const x = new u(
        o[d] + "." + Ze[r.path],
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
      const n = this instanceof As ? Ra : Di;
      return new n(this.times, this.values, this.getValueSize() / 3, s);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function La(c, e, t) {
  const s = e.attributes, n = new Ne();
  if (s.POSITION !== void 0) {
    const a = t.json.accessors[s.POSITION], o = a.min, u = a.max;
    if (o !== void 0 && u !== void 0) {
      if (n.set(
        new O(o[0], o[1], o[2]),
        new O(u[0], u[1], u[2])
      ), a.normalized) {
        const f = rs(Et[a.componentType]);
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
    const a = new O(), o = new O();
    for (let u = 0, f = r.length; u < f; u++) {
      const l = r[u];
      if (l.POSITION !== void 0) {
        const d = t.json.accessors[l.POSITION], h = d.min, x = d.max;
        if (h !== void 0 && x !== void 0) {
          if (o.setX(Math.max(Math.abs(h[0]), Math.abs(x[0]))), o.setY(Math.max(Math.abs(h[1]), Math.abs(x[1]))), o.setZ(Math.max(Math.abs(h[2]), Math.abs(x[2]))), d.normalized) {
            const y = rs(Et[d.componentType]);
            o.multiplyScalar(y);
          }
          a.max(o);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    n.expandByVector(a);
  }
  c.boundingBox = n;
  const i = new Ar();
  n.getCenter(i.center), i.radius = n.min.distanceTo(n.max) / 2, c.boundingSphere = i;
}
function si(c, e, t) {
  const s = e.attributes, n = [];
  function r(i, a) {
    return t.getDependency("accessor", i).then(function(o) {
      c.setAttribute(a, o);
    });
  }
  for (const i in s) {
    const a = is[i] || i.toLowerCase();
    a in c.attributes || n.push(r(s[i], a));
  }
  if (e.indices !== void 0 && !c.index) {
    const i = t.getDependency("accessor", e.indices).then(function(a) {
      c.setIndex(a);
    });
    n.push(i);
  }
  return bs.workingColorSpace !== He && "COLOR_0" in s && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bs.workingColorSpace}" not supported.`), Ue(c, e), La(c, e, t), Promise.all(n).then(function() {
    return e.targets !== void 0 ? Da(c, e.targets, t) : c;
  });
}
class Fa extends pi {
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
      } catch (a) {
        n ? n(a) : console.error(a), this.manager.itemError(e);
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
    let a = t.exec(e);
    const o = a !== null ? a[1] : null;
    if (a = s.exec(e), a === null)
      throw new Error("LUTCubeLoader: Missing LUT_3D_SIZE information");
    const u = Number(a[1]), f = u ** 3 * 4, l = this.type === Vt ? new Uint8Array(f) : new Float32Array(f), d = new O(0, 0, 0), h = new O(1, 1, 1);
    if (a = n.exec(e), a !== null && d.set(Number(a[1]), Number(a[2]), Number(a[3])), a = r.exec(e), a !== null && h.set(Number(a[1]), Number(a[2]), Number(a[3])), d.x > h.x || d.y > h.y || d.z > h.z)
      throw new Error("LUTCubeLoader: Invalid input domain");
    const x = this.type === Vt ? 255 : 1;
    let y = 0;
    for (; (a = i.exec(e)) !== null; )
      l[y++] = Number(a[1]) * x, l[y++] = Number(a[2]) * x, l[y++] = Number(a[3]) * x, l[y++] = x;
    const m = new br();
    return m.image.data = l, m.image.width = u, m.image.height = u, m.image.depth = u, m.type = this.type, m.magFilter = pt, m.minFilter = pt, m.wrapS = pn, m.wrapT = pn, m.wrapR = pn, m.generateMipmaps = !1, m.needsUpdate = !0, {
      title: o,
      size: u,
      domainMin: d,
      domainMax: h,
      texture3D: m
    };
  }
}
class Oa extends Rr {
  /**
      * Constructs a new RGBE/HDR loader.
      *
      * @param {LoadingManager} [manager] - The loading manager.
      */
  constructor(e) {
    super(e), this.type = $t;
  }
  /**
      * Parses the given RGBE texture data.
      *
      * @param {ArrayBuffer} buffer - The raw texture data.
      * @return {DataTextureLoader~TexData} An object representing the parsed texture data.
      */
  parse(e) {
    const i = function(M, S) {
      switch (M) {
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
    }, l = function(M, S, b) {
      S = S || 1024;
      let R = M.pos, I = -1, P = 0, B = "", N = String.fromCharCode.apply(null, new Uint16Array(M.subarray(R, R + 128)));
      for (; 0 > (I = N.indexOf(`
`)) && P < S && R < M.byteLength; )
        B += N, P += N.length, R += 128, N += String.fromCharCode.apply(null, new Uint16Array(M.subarray(R, R + 128)));
      return -1 < I ? (M.pos += P + I + 1, B + N.slice(0, I)) : !1;
    }, d = function(M) {
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
      let B, N;
      for ((M.pos >= M.byteLength || !(B = l(M))) && i(1, "no header found"), (N = B.match(S)) || i(3, "bad initial token"), P.valid |= 1, P.programtype = N[1], P.string += B + `
`; B = l(M), B !== !1; ) {
        if (P.string += B + `
`, B.charAt(0) === "#") {
          P.comments += B + `
`;
          continue;
        }
        if ((N = B.match(b)) && (P.gamma = parseFloat(N[1])), (N = B.match(E)) && (P.exposure = parseFloat(N[1])), (N = B.match(R)) && (P.valid |= 2, P.format = N[1]), (N = B.match(I)) && (P.valid |= 4, P.height = parseInt(N[1], 10), P.width = parseInt(N[2], 10)), P.valid & 2 && P.valid & 4) break;
      }
      return P.valid & 2 || i(3, "missing format specifier"), P.valid & 4 || i(3, "missing image size specifier"), P;
    }, h = function(M, S, b) {
      const E = S;
      if (
        // run length encoding is not allowed so read flat
        E < 8 || E > 32767 || // this file is not run length encoded
        M[0] !== 2 || M[1] !== 2 || M[2] & 128
      )
        return new Uint8Array(M);
      E !== (M[2] << 8 | M[3]) && i(3, "wrong scanline width");
      const R = new Uint8Array(4 * S * b);
      R.length || i(4, "unable to allocate buffer space");
      let I = 0, P = 0;
      const B = 4 * E, N = new Uint8Array(4), H = new Uint8Array(B);
      let G = b;
      for (; G > 0 && P < M.byteLength; ) {
        P + 4 > M.byteLength && i(1), N[0] = M[P++], N[1] = M[P++], N[2] = M[P++], N[3] = M[P++], (N[0] != 2 || N[1] != 2 || (N[2] << 8 | N[3]) != E) && i(3, "bad rgbe scanline format");
        let X = 0, K;
        for (; X < B && P < M.byteLength; ) {
          K = M[P++];
          const F = K > 128;
          if (F && (K -= 128), (K === 0 || X + K > B) && i(3, "bad scanline data"), F) {
            const U = M[P++];
            for (let j = 0; j < K; j++)
              H[X++] = U;
          } else
            H.set(M.subarray(P, P + K), X), X += K, P += K;
        }
        const D = E;
        for (let F = 0; F < D; F++) {
          let U = 0;
          R[I] = H[F + U], U += E, R[I + 1] = H[F + U], U += E, R[I + 2] = H[F + U], U += E, R[I + 3] = H[F + U], I += 4;
        }
        G--;
      }
      return R;
    }, x = function(M, S, b, E) {
      const R = M[S + 3], I = Math.pow(2, R - 128) / 255;
      b[E + 0] = M[S + 0] * I, b[E + 1] = M[S + 1] * I, b[E + 2] = M[S + 2] * I, b[E + 3] = 1;
    }, y = function(M, S, b, E) {
      const R = M[S + 3], I = Math.pow(2, R - 128) / 255;
      b[E + 0] = qt.toHalfFloat(Math.min(M[S + 0] * I, 65504)), b[E + 1] = qt.toHalfFloat(Math.min(M[S + 1] * I, 65504)), b[E + 2] = qt.toHalfFloat(Math.min(M[S + 2] * I, 65504)), b[E + 3] = qt.toHalfFloat(1);
    }, m = new Uint8Array(e);
    m.pos = 0;
    const _ = d(m), p = _.width, v = _.height, g = h(m.subarray(m.pos), p, v);
    let w, T, A;
    switch (this.type) {
      case nt:
        A = g.length / 4;
        const M = new Float32Array(A * 4);
        for (let b = 0; b < A; b++)
          x(g, b * 4, M, b * 4);
        w = M, T = nt;
        break;
      case $t:
        A = g.length / 4;
        const S = new Uint16Array(A * 4);
        for (let b = 0; b < A; b++)
          y(g, b * 4, S, b * 4);
        w = S, T = $t;
        break;
      default:
        throw new Error("THREE.HDRLoader: Unsupported type: " + this.type);
    }
    return {
      width: p,
      height: v,
      data: w,
      header: _.string,
      gamma: _.gamma,
      exposure: _.exposure,
      type: T
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
    function r(i, a) {
      switch (i.type) {
        case nt:
        case $t:
          i.colorSpace = He, i.minFilter = pt, i.magFilter = pt, i.generateMipmaps = !1, i.flipY = !0;
          break;
      }
      t && t(i, a);
    }
    return super.load(e, r, s, n);
  }
}
class Ua extends Oa {
  constructor(e) {
    console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."), super(e);
  }
}
class We {
  static gltfLoader = new ta();
  static loadGLTF = (e) => new Promise((t, s) => {
    if (!e)
      return t(new L.Group());
    We.gltfLoader.load(
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
      return n.mapping = L.EquirectangularReflectionMapping, URL.revokeObjectURL(t), n;
    } catch (n) {
      throw URL.revokeObjectURL(t), console.error(`Error loading environment map: ${n}`), n;
    }
  }
  static loadNodeMapForGLTF = async (e) => {
    const t = await We.loadGLTF(e), s = {};
    return t.traverse((n) => {
      n instanceof L.Mesh && (s[n.name] = n);
    }), s;
  };
  static loadTexture = async (e) => await new L.TextureLoader().loadAsync(e);
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
  static loadLut = async (e) => await new Fa().loadAsync(e);
  static getImageUrlFromTexture(e) {
    const t = document.createElement("canvas");
    t.width = 2e3, t.height = 2e3;
    const s = e.repeat ?? new L.Vector2(1, 1), n = t.getContext("2d", { willReadFrequently: !0 });
    if (!n)
      return console.error("Failed to get 2D context"), null;
    const r = n.createPattern(
      e.image,
      "repeat"
    );
    if (r)
      n.fillStyle = r, n.save(), n.scale(1 / s.x, 1 / s.y), n.fillRect(0, 0, t.width * s.x, t.height * s.y), n.restore();
    else
      return console.error("Failed to create pattern"), null;
    return t.toDataURL();
  }
  static getBoundingBox = (e) => {
    const t = new L.Box3();
    return e.forEach((s) => {
      t.expandByObject(s);
    }), t;
  };
  static getCenterPointAndNormal = (e) => {
    const t = e.geometry, s = t.attributes.position, n = t.attributes.normal, r = t.attributes.uv, i = e.matrixWorld;
    if (!s || !n || !r)
      return {
        center: We.getBoundingBox([e]).getCenter(new L.Vector3()),
        normal: new L.Vector3(0, 0, 1),
        uv: new L.Vector2(0.5, 0.5)
      };
    const a = new L.Vector3(0, 0, 0), o = s.count;
    for (let x = 0; x < o; x++) {
      const y = new L.Vector3().fromBufferAttribute(s, x).applyMatrix4(i);
      a.add(y);
    }
    a.divideScalar(o);
    let u = 1 / 0, f = 0;
    for (let x = 0; x < o; x++) {
      const m = new L.Vector3().fromBufferAttribute(s, x).applyMatrix4(i).distanceTo(a);
      m < u && (u = m, f = x);
    }
    const l = new L.Vector3().fromBufferAttribute(n, f).applyMatrix4(i), d = new L.Vector3().fromBufferAttribute(s, f).applyMatrix4(i), h = new L.Vector2().fromBufferAttribute(r, f);
    return {
      center: d,
      normal: l,
      uv: h
    };
  };
  static getSizeAndCenter = (e) => {
    const t = We.getBoundingBox([e]), s = t.getSize(new L.Vector3()), n = t.getCenter(new L.Vector3());
    return {
      boundingBox: t,
      center: n,
      size: s
    };
  };
}
class ka {
  _libState;
  _cameraRef = null;
  constructor(e) {
    this._libState = e, it(this);
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
    const i = -1, { boundingBox: a, center: o } = We.getSizeAndCenter(s);
    if (s instanceof L.Mesh) {
      const { center: u } = We.getCenterPointAndNormal(
        s
      ), f = Math.abs(u.x);
      this._cameraRef?.setLookAt(
        o.x,
        o.y,
        o.z,
        f,
        u.y,
        i,
        t
      );
    } else
      this._cameraRef?.setLookAt(
        o.x,
        o.y,
        o.z,
        0,
        o.y,
        i,
        t
      );
    if (n.fitBoxScale !== 1) {
      const u = a.clone(), f = new L.Vector3(), l = new L.Vector3();
      u.getCenter(f), u.getSize(l), l.multiplyScalar(n.fitBoxScale), u.setFromCenterAndSize(f, l), this._cameraRef?.fitToBox(u, t);
    } else
      this._cameraRef?.fitToBox(a, t);
  };
  dispose() {
    this._cameraRef = null;
  }
}
class Ha {
  _envVisibility = !1;
  _envIntensity = 1.6;
  _envRotation = {
    x: 0,
    y: 0,
    z: 1.5
  };
  _environmentTexture = null;
  constructor() {
    it(this);
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
      const t = await We.loadEnvironmentTexture(e);
      this.setEnvironmentTexture(t);
    } catch (t) {
      console.error(`Failed to load environment: ${t}`);
    }
  }
  clearMap = (e) => {
    e === "envMap" && (this._envVisibility = !1, this._envIntensity = 1.6, this._envRotation = { x: 0, y: 0, z: 1.5 }, this._environmentTexture = null);
  };
  dispose() {
    this.clearMap("envMap");
  }
}
class Va {
  _libState;
  _meshInfos = [];
  _groupRef = null;
  constructor(e) {
    this._libState = e, it(this);
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
class za {
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
  _homeRotation = null;
  _engraveRotation = null;
  /** True once the active variation's GLB has rendered for the first time. */
  isLoaded = !1;
  constructor() {
    it(this, {
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
  get homeRotation() {
    return this._homeRotation;
  }
  setHomeRotation(e, t, s) {
    this._homeRotation = { x: e, y: t, z: s };
  }
  get engraveRotation() {
    return this._engraveRotation;
  }
  setEngraveRotation(e, t, s) {
    this._engraveRotation = { x: e, y: t, z: s };
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
class Ga {
  _libState;
  _meshManager;
  _cameraManager;
  _envManager;
  _ringManager;
  constructor(e) {
    this._libState = e, this._meshManager = new Va(e), this._cameraManager = new ka(e), this._envManager = new Ha(), this._ringManager = new za(), it(this);
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
const ja = {
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
class Ka {
  _libState;
  _meshInfoJson = null;
  _jsonUrl = "./init.json";
  _source;
  constructor(e, t = Ii.WEBSITE) {
    this._libState = e, this._source = t, it(this);
  }
  get source() {
    return this._source;
  }
  setSource(e) {
    this._source = e;
  }
  get settings() {
    return ja[this._source];
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
class Wa {
  _libState;
  _viewManager;
  modelMinY = 0;
  constructor(e, t) {
    this._libState = e, this._viewManager = new Ka(e, t), it(this);
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
    this._designManager = new Wa(this, e), this._design3DManager = new Ga(this), it(this);
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
function Xa({
  color: c = Ya
}) {
  const { scene: e } = ci();
  return ie(() => {
    let t = !1, s = null;
    const n = We.getImageByColor(c);
    return new L.TextureLoader().loadAsync(n).then((i) => {
      if (t) {
        i.dispose();
        return;
      }
      s = i, s.colorSpace = L.SRGBColorSpace, e.background = s;
    }).catch((i) => {
      console.error(`Failed to load scene background texture: ${i}`);
    }), () => {
      t = !0, s && e.background === s && (e.background = null, s.dispose());
    };
  }, [c, e]), null;
}
const Ci = $e(({ children: c }) => {
  const e = Oe(null), { designManager: t, design3DManager: s } = gt(), n = t.modelMinY, { currentView: r } = s.ringManager;
  return /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
    c && /* @__PURE__ */ Y.jsx("group", { ref: e, children: c }),
    r !== 2 && /* @__PURE__ */ Y.jsx(
      Oi,
      {
        position: [0, n - 0.02, 0],
        opacity: 0.45,
        scale: 4,
        blur: 2.5,
        far: 3
      }
    )
  ] });
}), $a = $e(() => {
  const { design3DManager: c, designManager: e } = gt(), { cameraManager: t, ringManager: s } = c, n = t.cameraRef, r = s.currentView, i = e.viewManager.settings;
  return ie(() => {
    if (n)
      if (r === 2)
        n.minDistance = 1, n.maxDistance = 10, n.minAzimuthAngle = -1 / 0, n.maxAzimuthAngle = 1 / 0, n.minPolarAngle = 0, n.maxPolarAngle = Math.PI, n.smoothTime = 0.8, n.setLookAt(0, 2, -4.4, 0, 0, 0, !0).then(() => {
          if (n.smoothTime = 0.25, s.currentView === 2) {
            n.minDistance = 4.3, n.maxDistance = 5.5;
            const a = n.polarAngle;
            n.minAzimuthAngle = -1 / 0, n.maxAzimuthAngle = 1 / 0, n.minPolarAngle = a - 0.2, n.maxPolarAngle = a + 0.2;
          }
        });
      else {
        n.minDistance = i.minDistance, n.maxDistance = i.maxDistance, n.minAzimuthAngle = -1 / 0, n.maxAzimuthAngle = 1 / 0, n.minPolarAngle = i.minPolarAngle, n.maxPolarAngle = i.maxPolarAngle, n.smoothTime = 0.8;
        const a = i.homeDistance;
        n.setLookAt(0, 0, a, 0, 0, 0, !0).then(() => {
          n.smoothTime = 0.25;
        });
      }
  }, [r, n, s, i]), null;
}), nc = $e(
  Ni(
    ({
      backgroundColor: c = "#f2efe8",
      className: e,
      diamondEnvPath: t = "/08.hdr",
      envPath: s = "/env/08.exr",
      style: n,
      source: r
    }, i) => {
      const [a] = ii(() => new Pi(r));
      Li(
        i,
        () => ({
          stateManager: {
            cameraManager: a.design3DManager.cameraManager,
            envManager: a.design3DManager.envManager,
            meshManager: a.design3DManager.meshManager,
            ringManager: a.design3DManager.ringManager,
            viewManager: a.designManager.viewManager
          }
        }),
        [a]
      ), ie(() => {
        r && a.designManager.viewManager.setSource(r);
      }, [r, a]), ie(() => () => {
        a.dispose();
      }, [a]);
      const o = a.design3DManager.ringManager.isLoaded, u = r ? a.designManager.viewManager.settings.canvasColor : c, f = Kt.useCallback((l) => {
        if (l) {
          a.design3DManager.cameraManager.setCameraRef(l);
          const d = a.designManager.viewManager.settings;
          l.minDistance = d.minDistance, l.maxDistance = d.maxDistance, l.minPolarAngle = d.minPolarAngle, l.maxPolarAngle = d.maxPolarAngle;
        }
      }, [a]);
      return /* @__PURE__ */ Y.jsx(cs.Provider, { value: a, children: /* @__PURE__ */ Y.jsx(
        "div",
        {
          className: e,
          style: {
            height: "100%",
            width: "100%",
            backgroundColor: o ? void 0 : u,
            ...n
          },
          children: /* @__PURE__ */ Y.jsxs(
            li,
            {
              frameloop: "always",
              shadows: !0,
              camera: { fov: 35, position: [0, 0, a.designManager.viewManager.settings.homeDistance] },
              children: [
                /* @__PURE__ */ Y.jsx(
                  Xa,
                  {
                    color: r ? a.designManager.viewManager.settings.canvasColor : c
                  }
                ),
                /* @__PURE__ */ Y.jsxs(os, { fallback: null, children: [
                  /* @__PURE__ */ Y.jsx(
                    oi,
                    {
                      files: s,
                      environmentIntensity: 0.7,
                      environmentRotation: [0, 3.63, 0]
                    }
                  ),
                  /* @__PURE__ */ Y.jsx(Si, { diamondEnvPath: t }),
                  /* @__PURE__ */ Y.jsx(Ci, {}),
                  /* @__PURE__ */ Y.jsx($a, {}),
                  /* @__PURE__ */ Y.jsx(
                    ai,
                    {
                      makeDefault: !0,
                      smoothTime: 0.25,
                      draggingSmoothTime: 0.1,
                      dollySpeed: 0.5,
                      truckSpeed: 0,
                      ref: f
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
), sc = $e(
  ({
    collection: c,
    modelId: e,
    variations: t,
    activeVariation: s,
    colorHex: n = "#e8c070",
    finish: r = "Polished",
    showDiamond: i = !0,
    envPath: a = "/env/08.exr",
    diamondEnvPath: o = "/08.hdr",
    backgroundColor: u = "#f2efe8"
  }) => {
    const l = Oe(new Pi()).current, { ringManager: d } = l.design3DManager, h = (m, _, p) => {
      const v = m.charAt(0).toUpperCase() + m.slice(1);
      let g = p.replace(/\s+/g, "");
      return g.endsWith("mm") || (g = `${g}mm`), `/BehytRings/${v}/${_}/${g}/${_}_${g}.glb`;
    }, x = s || t[0] || "", y = x ? h(c, e, x) : "";
    return ie(() => {
      y && d.initModel(y);
    }, [y, d]), ie(() => {
      d.setMetalColor(n);
    }, [n, d]), ie(() => {
      d.setFinish(r);
    }, [r, d]), ie(() => {
      d.setDiamondsVisible(i);
    }, [i, d]), /* @__PURE__ */ Y.jsx(cs.Provider, { value: l, children: /* @__PURE__ */ Y.jsxs(
      li,
      {
        frameloop: "always",
        shadows: !0,
        camera: { fov: 35, position: [0, 0, 8] },
        children: [
          /* @__PURE__ */ Y.jsx("color", { attach: "background", args: [u] }),
          /* @__PURE__ */ Y.jsxs(os, { fallback: null, children: [
            /* @__PURE__ */ Y.jsx(
              oi,
              {
                files: a,
                environmentIntensity: 0.7,
                environmentRotation: [0, 3.63, 0]
              }
            ),
            /* @__PURE__ */ Y.jsx(Si, { diamondEnvPath: o }),
            /* @__PURE__ */ Y.jsx(Ci, {}),
            /* @__PURE__ */ Y.jsx(
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
  sc as RingScene,
  nc as SDKViewer,
  nc as Viewer3D,
  Ii as ViewerSource
};
