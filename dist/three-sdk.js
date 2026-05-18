import Mn, { useRef as ot, useEffect as Ae, useMemo as zs, forwardRef as Gs, useState as js, useImperativeHandle as Ks, Suspense as hs } from "react";
import { useTexture as Kt, useGLTF as Xs, useEnvironment as qs, Environment as ps, Center as ms, ContactShadows as gs, CameraControls as ys } from "@react-three/drei";
import { useFrame as Ys, useThree as $s, Canvas as xs } from "@react-three/fiber";
import { observer as Ut } from "mobx-react-lite";
import * as F from "three";
import { Box3 as le, Matrix4 as ie, BufferAttribute as Xe, Vector3 as L, Line3 as ge, Plane as Ts, Vector2 as fe, Triangle as je, BackSide as Ws, DoubleSide as ws, REVISION as vs, Ray as Js, FrontSide as ln, UnsignedIntType as ct, FloatType as Ee, DataTexture as un, NearestFilter as be, IntType as Xt, UnsignedByteType as lt, UnsignedShortType as Zs, ByteType as Ln, ShortType as Qs, RGBAFormat as Ct, RGBAIntegerFormat as fn, RGIntegerFormat as _s, RedIntegerFormat as ei, RGFormat as ti, RedFormat as ni, TrianglesDrawMode as si, TriangleFanDrawMode as dn, TriangleStripDrawMode as As, Loader as bs, LoaderUtils as ut, FileLoader as En, MeshPhysicalMaterial as he, Color as Ne, LinearSRGBColorSpace as de, SRGBColorSpace as dt, SpotLight as ii, PointLight as ri, DirectionalLight as oi, Quaternion as Rs, InstancedMesh as ai, InstancedBufferAttribute as ci, Object3D as Ms, TextureLoader as li, ImageBitmapLoader as ui, InterleavedBuffer as fi, InterleavedBufferAttribute as di, LinearMipmapLinearFilter as Es, NearestMipmapLinearFilter as hi, LinearMipmapNearestFilter as pi, NearestMipmapNearestFilter as mi, LinearFilter as Ce, RepeatWrapping as hn, MirroredRepeatWrapping as gi, ClampToEdgeWrapping as Dt, PointsMaterial as yi, Material as qt, LineBasicMaterial as xi, MeshStandardMaterial as Ss, MeshBasicMaterial as at, PropertyBinding as Ti, BufferGeometry as wi, SkinnedMesh as vi, Mesh as _i, LineSegments as Ai, Line as bi, LineLoop as Ri, Points as Mi, Group as Yt, PerspectiveCamera as Ei, MathUtils as Si, OrthographicCamera as Ii, Skeleton as Pi, AnimationClip as Di, Bone as Bi, InterpolateDiscrete as Li, InterpolateLinear as Is, Texture as Nn, VectorKeyframeTrack as Cn, NumberKeyframeTrack as Fn, QuaternionKeyframeTrack as On, ColorManagement as Un, Interpolant as Ni, Sphere as Ci, Data3DTexture as Fi, DataTextureLoader as Oi, HalfFloatType as ht, DataUtils as pt } from "three";
import { makeAutoObservable as Ie } from "mobx";
var mt = { exports: {} }, We = {};
var kn;
function Ui() {
  if (kn) return We;
  kn = 1;
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
  return We.Fragment = e, We.jsx = t, We.jsxs = t, We;
}
var Je = {};
var Hn;
function ki() {
  return Hn || (Hn = 1, process.env.NODE_ENV !== "production" && (function() {
    function c(I) {
      if (I == null) return null;
      if (typeof I == "function")
        return I.$$typeof === S ? null : I.displayName || I.name || null;
      if (typeof I == "string") return I;
      switch (I) {
        case x:
          return "Fragment";
        case p:
          return "Profiler";
        case v:
          return "StrictMode";
        case A:
          return "Suspense";
        case b:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof I == "object")
        switch (typeof I.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), I.$$typeof) {
          case T:
            return "Portal";
          case m:
            return I.displayName || "Context";
          case y:
            return (I._context.displayName || "Context") + ".Consumer";
          case w:
            var N = I.render;
            return I = I.displayName, I || (I = N.displayName || N.name || "", I = I !== "" ? "ForwardRef(" + I + ")" : "ForwardRef"), I;
          case _:
            return N = I.displayName || null, N !== null ? N : c(I.type) || "Memo";
          case E:
            N = I._payload, I = I._init;
            try {
              return c(I(N));
            } catch {
            }
        }
      return null;
    }
    function e(I) {
      return "" + I;
    }
    function t(I) {
      try {
        e(I);
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var U = N.error, H = typeof Symbol == "function" && Symbol.toStringTag && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return U.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
        ), e(I);
      }
    }
    function s(I) {
      if (I === x) return "<>";
      if (typeof I == "object" && I !== null && I.$$typeof === E)
        return "<...>";
      try {
        var N = c(I);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var I = M.A;
      return I === null ? null : I.getOwner();
    }
    function r() {
      return Error("react-stack-top-frame");
    }
    function i(I) {
      if (P.call(I, "key")) {
        var N = Object.getOwnPropertyDescriptor(I, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return I.key !== void 0;
    }
    function a(I, N) {
      function U() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      U.isReactWarning = !0, Object.defineProperty(I, "key", {
        get: U,
        configurable: !0
      });
    }
    function o() {
      var I = c(this.type);
      return ee[I] || (ee[I] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), I = this.props.ref, I !== void 0 ? I : null;
    }
    function u(I, N, U, H, oe, Ye) {
      var G = U.ref;
      return I = {
        $$typeof: g,
        type: I,
        key: N,
        props: U,
        _owner: H
      }, (G !== void 0 ? G : null) !== null ? Object.defineProperty(I, "ref", {
        enumerable: !1,
        get: o
      }) : Object.defineProperty(I, "ref", { enumerable: !1, value: null }), I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(I, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(I, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.defineProperty(I, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ye
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    }
    function f(I, N, U, H, oe, Ye) {
      var G = N.children;
      if (G !== void 0)
        if (H)
          if (D(G)) {
            for (H = 0; H < G.length; H++)
              l(G[H]);
            Object.freeze && Object.freeze(G);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else l(G);
      if (P.call(N, "key")) {
        G = c(I);
        var Te = Object.keys(N).filter(function(Gt) {
          return Gt !== "key";
        });
        H = 0 < Te.length ? "{key: someKey, " + Te.join(": ..., ") + ": ...}" : "{key: someKey}", J[G + H] || (Te = 0 < Te.length ? "{" + Te.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          H,
          G,
          Te,
          G
        ), J[G + H] = !0);
      }
      if (G = null, U !== void 0 && (t(U), G = "" + U), i(N) && (t(N.key), G = "" + N.key), "key" in N) {
        U = {};
        for (var $e in N)
          $e !== "key" && (U[$e] = N[$e]);
      } else U = N;
      return G && a(
        U,
        typeof I == "function" ? I.displayName || I.name || "Unknown" : I
      ), u(
        I,
        G,
        U,
        n(),
        oe,
        Ye
      );
    }
    function l(I) {
      d(I) ? I._store && (I._store.validated = 1) : typeof I == "object" && I !== null && I.$$typeof === E && (I._payload.status === "fulfilled" ? d(I._payload.value) && I._payload.value._store && (I._payload.value._store.validated = 1) : I._store && (I._store.validated = 1));
    }
    function d(I) {
      return typeof I == "object" && I !== null && I.$$typeof === g;
    }
    var h = Mn, g = /* @__PURE__ */ Symbol.for("react.transitional.element"), T = /* @__PURE__ */ Symbol.for("react.portal"), x = /* @__PURE__ */ Symbol.for("react.fragment"), v = /* @__PURE__ */ Symbol.for("react.strict_mode"), p = /* @__PURE__ */ Symbol.for("react.profiler"), y = /* @__PURE__ */ Symbol.for("react.consumer"), m = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.suspense_list"), _ = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), R = /* @__PURE__ */ Symbol.for("react.activity"), S = /* @__PURE__ */ Symbol.for("react.client.reference"), M = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, D = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(I) {
        return I();
      }
    };
    var C, ee = {}, xe = h.react_stack_bottom_frame.bind(
      h,
      r
    )(), re = B(s(r)), J = {};
    Je.Fragment = x, Je.jsx = function(I, N, U) {
      var H = 1e4 > M.recentlyCreatedOwnerStacks++;
      return f(
        I,
        N,
        U,
        !1,
        H ? Error("react-stack-top-frame") : xe,
        H ? B(s(I)) : re
      );
    }, Je.jsxs = function(I, N, U) {
      var H = 1e4 > M.recentlyCreatedOwnerStacks++;
      return f(
        I,
        N,
        U,
        !0,
        H ? Error("react-stack-top-frame") : xe,
        H ? B(s(I)) : re
      );
    };
  })()), Je;
}
var Vn;
function Hi() {
  return Vn || (Vn = 1, process.env.NODE_ENV === "production" ? mt.exports = Ui() : mt.exports = ki()), mt.exports;
}
var V = Hi();
const Sn = Mn.createContext(null), Ps = 0, Vi = 1, zi = 2, zn = 2, $t = 1.25, Gn = 1, q = 32, X = q / 4, In = 65535, Gi = In << 16, Bt = Math.pow(2, -24), Pn = /* @__PURE__ */ Symbol("SKIP_GENERATION"), Ds = {
  strategy: Ps,
  maxDepth: 40,
  maxLeafSize: 10,
  useSharedArrayBuffer: !1,
  setBoundingBox: !0,
  onProgress: null,
  indirect: !1,
  verbose: !0,
  range: null,
  [Pn]: !1
};
function z(c, e, t) {
  return t.min.x = e[c], t.min.y = e[c + 1], t.min.z = e[c + 2], t.max.x = e[c + 3], t.max.y = e[c + 4], t.max.z = e[c + 5], t;
}
function jn(c) {
  let e = -1, t = -1 / 0;
  for (let s = 0; s < 3; s++) {
    const n = c[s + 3] - c[s];
    n > t && (t = n, e = s);
  }
  return e;
}
function Kn(c, e) {
  e.set(c);
}
function Xn(c, e, t) {
  let s, n;
  for (let r = 0; r < 3; r++) {
    const i = r + 3;
    s = c[r], n = e[r], t[r] = s < n ? s : n, s = c[i], n = e[i], t[i] = s > n ? s : n;
  }
}
function gt(c, e, t) {
  for (let s = 0; s < 3; s++) {
    const n = e[c + 2 * s], r = e[c + 2 * s + 1], i = n - r, a = n + r;
    i < t[s] && (t[s] = i), a > t[s + 3] && (t[s + 3] = a);
  }
}
function Ze(c) {
  const e = c[3] - c[0], t = c[4] - c[1], s = c[5] - c[2];
  return 2 * (e * t + t * s + s * e);
}
function j(c, e) {
  return e[c + 15] === In;
}
function W(c, e) {
  return e[c + 6];
}
function Z(c, e) {
  return e[c + 14];
}
function Y(c) {
  return c + X;
}
function $(c, e) {
  const t = e[c + 6];
  return c + t * X;
}
function kt(c, e) {
  return e[c + 7];
}
function Wt(c, e, t, s, n) {
  let r = 1 / 0, i = 1 / 0, a = 1 / 0, o = -1 / 0, u = -1 / 0, f = -1 / 0, l = 1 / 0, d = 1 / 0, h = 1 / 0, g = -1 / 0, T = -1 / 0, x = -1 / 0;
  const v = c.offset || 0;
  for (let p = (e - v) * 6, y = (e + t - v) * 6; p < y; p += 6) {
    const m = c[p + 0], w = c[p + 1], A = m - w, b = m + w;
    A < r && (r = A), b > o && (o = b), m < l && (l = m), m > g && (g = m);
    const _ = c[p + 2], E = c[p + 3], R = _ - E, S = _ + E;
    R < i && (i = R), S > u && (u = S), _ < d && (d = _), _ > T && (T = _);
    const M = c[p + 4], P = c[p + 5], D = M - P, B = M + P;
    D < a && (a = D), B > f && (f = B), M < h && (h = M), M > x && (x = M);
  }
  s[0] = r, s[1] = i, s[2] = a, s[3] = o, s[4] = u, s[5] = f, n[0] = l, n[1] = d, n[2] = h, n[3] = g, n[4] = T, n[5] = x;
}
const pe = 32, ji = (c, e) => c.candidate - e.candidate, we = /* @__PURE__ */ new Array(pe).fill().map(() => ({
  count: 0,
  bounds: new Float32Array(6),
  rightCacheBounds: new Float32Array(6),
  leftCacheBounds: new Float32Array(6),
  candidate: 0
})), yt = /* @__PURE__ */ new Float32Array(6);
function Ki(c, e, t, s, n, r) {
  let i = -1, a = 0;
  if (r === Ps)
    i = jn(e), i !== -1 && (a = (e[i] + e[i + 3]) / 2);
  else if (r === Vi)
    i = jn(c), i !== -1 && (a = Xi(t, s, n, i));
  else if (r === zi) {
    const o = Ze(c);
    let u = $t * n;
    const f = t.offset || 0, l = (s - f) * 6, d = (s + n - f) * 6;
    for (let h = 0; h < 3; h++) {
      const g = e[h], v = (e[h + 3] - g) / pe;
      if (n < pe / 4) {
        const p = [...we];
        p.length = n;
        let y = 0;
        for (let w = l; w < d; w += 6, y++) {
          const A = p[y];
          A.candidate = t[w + 2 * h], A.count = 0;
          const {
            bounds: b,
            leftCacheBounds: _,
            rightCacheBounds: E
          } = A;
          for (let R = 0; R < 3; R++)
            E[R] = 1 / 0, E[R + 3] = -1 / 0, _[R] = 1 / 0, _[R + 3] = -1 / 0, b[R] = 1 / 0, b[R + 3] = -1 / 0;
          gt(w, t, b);
        }
        p.sort(ji);
        let m = n;
        for (let w = 0; w < m; w++) {
          const A = p[w];
          for (; w + 1 < m && p[w + 1].candidate === A.candidate; )
            p.splice(w + 1, 1), m--;
        }
        for (let w = l; w < d; w += 6) {
          const A = t[w + 2 * h];
          for (let b = 0; b < m; b++) {
            const _ = p[b];
            A >= _.candidate ? gt(w, t, _.rightCacheBounds) : (gt(w, t, _.leftCacheBounds), _.count++);
          }
        }
        for (let w = 0; w < m; w++) {
          const A = p[w], b = A.count, _ = n - A.count, E = A.leftCacheBounds, R = A.rightCacheBounds;
          let S = 0;
          b !== 0 && (S = Ze(E) / o);
          let M = 0;
          _ !== 0 && (M = Ze(R) / o);
          const P = Gn + $t * (S * b + M * _);
          P < u && (i = h, u = P, a = A.candidate);
        }
      } else {
        for (let m = 0; m < pe; m++) {
          const w = we[m];
          w.count = 0, w.candidate = g + v + m * v;
          const A = w.bounds;
          for (let b = 0; b < 3; b++)
            A[b] = 1 / 0, A[b + 3] = -1 / 0;
        }
        for (let m = l; m < d; m += 6) {
          let b = ~~((t[m + 2 * h] - g) / v);
          b >= pe && (b = pe - 1);
          const _ = we[b];
          _.count++, gt(m, t, _.bounds);
        }
        const p = we[pe - 1];
        Kn(p.bounds, p.rightCacheBounds);
        for (let m = pe - 2; m >= 0; m--) {
          const w = we[m], A = we[m + 1];
          Xn(w.bounds, A.rightCacheBounds, w.rightCacheBounds);
        }
        let y = 0;
        for (let m = 0; m < pe - 1; m++) {
          const w = we[m], A = w.count, b = w.bounds, E = we[m + 1].rightCacheBounds;
          A !== 0 && (y === 0 ? Kn(b, yt) : Xn(b, yt, yt)), y += A;
          let R = 0, S = 0;
          y !== 0 && (R = Ze(yt) / o);
          const M = n - y;
          M !== 0 && (S = Ze(E) / o);
          const P = Gn + $t * (R * y + S * M);
          P < u && (i = h, u = P, a = w.candidate);
        }
      }
    }
  } else
    console.warn(`BVH: Invalid build strategy value ${r} used.`);
  return { axis: i, pos: a };
}
function Xi(c, e, t, s) {
  let n = 0;
  const r = c.offset;
  for (let i = e, a = e + t; i < a; i++)
    n += c[(i - r) * 6 + s * 2];
  return n / t;
}
class Jt {
  constructor() {
    this.boundingData = new Float32Array(6);
  }
}
function qi(c, e, t, s, n, r) {
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
        const d = i - f, h = a - f, g = t[d * 6 + l];
        t[d * 6 + l] = t[h * 6 + l], t[h * 6 + l] = g;
      }
      i++, a--;
    } else
      return i;
  }
}
let Bs, Lt, pn, Ls;
const Yi = Math.pow(2, 32);
function mn(c) {
  return "count" in c ? 1 : 1 + mn(c.left) + mn(c.right);
}
function $i(c, e, t) {
  return Bs = new Float32Array(t), Lt = new Uint32Array(t), pn = new Uint16Array(t), Ls = new Uint8Array(t), gn(c, e);
}
function gn(c, e) {
  const t = c / 4, s = c / 2, n = "count" in e, r = e.boundingData;
  for (let i = 0; i < 6; i++)
    Bs[t + i] = r[i];
  if (n)
    return e.buffer ? (Ls.set(new Uint8Array(e.buffer), c), c + e.buffer.byteLength) : (Lt[t + 6] = e.offset, pn[s + 14] = e.count, pn[s + 15] = In, c + q);
  {
    const { left: i, right: a, splitAxis: o } = e, u = c + q;
    let f = gn(u, i);
    const l = c / q, h = f / q - l;
    if (h > Yi)
      throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");
    return Lt[t + 6] = h, Lt[t + 7] = o, gn(f, a);
  }
}
function Wi(c, e, t, s, n, r) {
  const {
    maxDepth: i,
    verbose: a,
    maxLeafSize: o,
    strategy: u,
    onProgress: f
  } = n, l = c.primitiveBuffer, d = c.primitiveBufferStride, h = new Float32Array(6);
  let g = !1;
  const T = new Jt();
  return Wt(e, t, s, T.boundingData, h), v(T, t, s, h), T;
  function x(p) {
    f && f((p - r.offset) / r.count);
  }
  function v(p, y, m, w = null, A = 0) {
    if (!g && A >= i && (g = !0, a && console.warn(`BVH: Max depth of ${i} reached when generating BVH. Consider increasing maxDepth.`)), m <= o || A >= i)
      return x(y + m), p.offset = y, p.count = m, p;
    const b = Ki(p.boundingData, w, e, y, m, u);
    if (b.axis === -1)
      return x(y + m), p.offset = y, p.count = m, p;
    const _ = qi(l, d, e, y, m, b);
    if (_ === y || _ === y + m)
      x(y + m), p.offset = y, p.count = m;
    else {
      p.splitAxis = b.axis;
      const E = new Jt(), R = y, S = _ - y;
      p.left = E, Wt(e, R, S, E.boundingData, h), v(E, R, S, h, A + 1);
      const M = new Jt(), P = _, D = m - S;
      p.right = M, Wt(e, P, D, M.boundingData, h), v(M, P, D, h, A + 1);
    }
    return p;
  }
}
function Ji(c, e) {
  const t = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, s = c.getRootRanges(e.range), n = s[0], r = s[s.length - 1], i = {
    offset: n.offset,
    count: r.offset + r.count - n.offset
  }, a = new Float32Array(6 * i.count);
  a.offset = i.offset, c.computePrimitiveBounds(i.offset, i.count, a), c._roots = s.map((o) => {
    const u = Wi(c, a, o.offset, o.count, e, i), f = mn(u), l = new t(q * f);
    return $i(0, u, l), l;
  });
}
class Dn {
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
class Zi {
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
const k = /* @__PURE__ */ new Zi();
let Re, Ke;
const Fe = [], xt = /* @__PURE__ */ new Dn(() => new le());
function Qi(c, e, t, s, n, r) {
  Re = xt.getPrimitive(), Ke = xt.getPrimitive(), Fe.push(Re, Ke), k.setBuffer(c._roots[e]);
  const i = yn(0, c.geometry, t, s, n, r);
  k.clearBuffer(), xt.releasePrimitive(Re), xt.releasePrimitive(Ke), Fe.pop(), Fe.pop();
  const a = Fe.length;
  return a > 0 && (Ke = Fe[a - 1], Re = Fe[a - 2]), i;
}
function yn(c, e, t, s, n = null, r = 0, i = 0) {
  const { float32Array: a, uint16Array: o, uint32Array: u } = k;
  let f = c * 2;
  if (j(f, o)) {
    const d = W(c, u), h = Z(f, o);
    return z(c, a, Re), s(d, h, !1, i, r + c / X, Re);
  } else {
    let R = function(M) {
      const { uint16Array: P, uint32Array: D } = k;
      let B = M * 2;
      for (; !j(B, P); )
        M = Y(M), B = M * 2;
      return W(M, D);
    }, S = function(M) {
      const { uint16Array: P, uint32Array: D } = k;
      let B = M * 2;
      for (; !j(B, P); )
        M = $(M, D), B = M * 2;
      return W(M, D) + Z(B, P);
    };
    const d = Y(c), h = $(c, u);
    let g = d, T = h, x, v, p, y;
    if (n && (p = Re, y = Ke, z(g, a, p), z(T, a, y), x = n(p), v = n(y), v < x)) {
      g = h, T = d;
      const M = x;
      x = v, v = M, p = y;
    }
    p || (p = Re, z(g, a, p));
    const m = j(g * 2, o), w = t(p, m, x, i + 1, r + g / X);
    let A;
    if (w === zn) {
      const M = R(g), D = S(g) - M;
      A = s(M, D, !0, i + 1, r + g / X, p);
    } else
      A = w && yn(
        g,
        e,
        t,
        s,
        n,
        r,
        i + 1
      );
    if (A) return !0;
    y = Ke, z(T, a, y);
    const b = j(T * 2, o), _ = t(y, b, v, i + 1, r + T / X);
    let E;
    if (_ === zn) {
      const M = R(T), D = S(T) - M;
      E = s(M, D, !0, i + 1, r + T / X, y);
    } else
      E = _ && yn(
        T,
        e,
        t,
        s,
        n,
        r,
        i + 1
      );
    return !!E;
  }
}
const ft = /* @__PURE__ */ new k.constructor(), Ft = /* @__PURE__ */ new k.constructor(), _e = /* @__PURE__ */ new Dn(() => new le()), Oe = /* @__PURE__ */ new le(), Ue = /* @__PURE__ */ new le(), Zt = /* @__PURE__ */ new le(), Qt = /* @__PURE__ */ new le();
let en = !1;
function er(c, e, t, s) {
  if (en)
    throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");
  en = !0;
  const n = c._roots, r = e._roots;
  let i, a = 0, o = 0;
  const u = new ie().copy(t).invert();
  for (let f = 0, l = n.length; f < l; f++) {
    ft.setBuffer(n[f]), o = 0;
    const d = _e.getPrimitive();
    z(0, ft.float32Array, d), d.applyMatrix4(u);
    for (let h = 0, g = r.length; h < g && (Ft.setBuffer(r[h]), i = ae(
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
    ), Ft.clearBuffer(), o += r[h].byteLength / q, !i); h++)
      ;
    if (_e.releasePrimitive(d), ft.clearBuffer(), a += n[f].byteLength / q, i)
      break;
  }
  return en = !1, i;
}
function ae(c, e, t, s, n, r = 0, i = 0, a = 0, o = 0, u = null, f = !1) {
  let l, d;
  f ? (l = Ft, d = ft) : (l = ft, d = Ft);
  const h = l.float32Array, g = l.uint32Array, T = l.uint16Array, x = d.float32Array, v = d.uint32Array, p = d.uint16Array, y = c * 2, m = e * 2, w = j(y, T), A = j(m, p);
  let b = !1;
  if (A && w)
    f ? b = n(
      W(e, v),
      Z(e * 2, p),
      W(c, g),
      Z(c * 2, T),
      o,
      i + e / X,
      a,
      r + c / X
    ) : b = n(
      W(c, g),
      Z(c * 2, T),
      W(e, v),
      Z(e * 2, p),
      a,
      r + c / X,
      o,
      i + e / X
    );
  else if (A) {
    const _ = _e.getPrimitive();
    z(e, x, _), _.applyMatrix4(t);
    const E = Y(c), R = $(c, g);
    z(E, h, Oe), z(R, h, Ue);
    const S = _.intersectsBox(Oe), M = _.intersectsBox(Ue);
    b = S && ae(
      e,
      E,
      s,
      t,
      n,
      i,
      r,
      o,
      a + 1,
      _,
      !f
    ) || M && ae(
      e,
      R,
      s,
      t,
      n,
      i,
      r,
      o,
      a + 1,
      _,
      !f
    ), _e.releasePrimitive(_);
  } else {
    const _ = Y(e), E = $(e, v);
    z(_, x, Zt), z(E, x, Qt);
    const R = u.intersectsBox(Zt), S = u.intersectsBox(Qt);
    if (R && S)
      b = ae(
        c,
        _,
        t,
        s,
        n,
        r,
        i,
        a,
        o + 1,
        u,
        f
      ) || ae(
        c,
        E,
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
    else if (R)
      if (w)
        b = ae(
          c,
          _,
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
        const M = _e.getPrimitive();
        M.copy(Zt).applyMatrix4(t);
        const P = Y(c), D = $(c, g);
        z(P, h, Oe), z(D, h, Ue);
        const B = M.intersectsBox(Oe), C = M.intersectsBox(Ue);
        b = B && ae(
          _,
          P,
          s,
          t,
          n,
          i,
          r,
          o,
          a + 1,
          M,
          !f
        ) || C && ae(
          _,
          D,
          s,
          t,
          n,
          i,
          r,
          o,
          a + 1,
          M,
          !f
        ), _e.releasePrimitive(M);
      }
    else if (S)
      if (w)
        b = ae(
          c,
          E,
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
        const M = _e.getPrimitive();
        M.copy(Qt).applyMatrix4(t);
        const P = Y(c), D = $(c, g);
        z(P, h, Oe), z(D, h, Ue);
        const B = M.intersectsBox(Oe), C = M.intersectsBox(Ue);
        b = B && ae(
          E,
          P,
          s,
          t,
          n,
          i,
          r,
          o,
          a + 1,
          M,
          !f
        ) || C && ae(
          E,
          D,
          s,
          t,
          n,
          i,
          r,
          o,
          a + 1,
          M,
          !f
        ), _e.releasePrimitive(M);
      }
  }
  return b;
}
const qn = /* @__PURE__ */ new le(), ke = /* @__PURE__ */ new Float32Array(6);
class tr {
  constructor() {
    this._roots = null, this.primitiveBuffer = null, this.primitiveBufferStride = null;
  }
  init(e) {
    e = {
      ...Ds,
      ...e
    }, Ji(this, e);
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
      this.writePrimitiveBounds(l, ke, 0);
      const [h, g, T, x, v, p] = ke;
      h < r && (r = h), x > o && (o = x), g < i && (i = g), v > u && (u = v), T < a && (a = T), p > f && (f = p);
    }
    return s[n + 0] = r, s[n + 1] = i, s[n + 2] = a, s[n + 3] = o, s[n + 4] = u, s[n + 5] = f, s;
  }
  computePrimitiveBounds(e, t, s) {
    const n = s.offset || 0;
    for (let r = e, i = e + t; r < i; r++) {
      this.writePrimitiveBounds(r, ke, 0);
      const [a, o, u, f, l, d] = ke, h = (a + f) / 2, g = (o + l) / 2, T = (u + d) / 2, x = (f - a) / 2, v = (l - o) / 2, p = (d - u) / 2, y = (r - n) * 6;
      s[y + 0] = h, s[y + 1] = x + (Math.abs(h) + x) * Bt, s[y + 2] = g, s[y + 3] = v + (Math.abs(g) + v) * Bt, s[y + 4] = T, s[y + 5] = p + (Math.abs(T) + p) * Bt;
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
        const r = s[n], i = new Uint32Array(r), a = new Uint16Array(r), o = r.byteLength / q;
        for (let u = 0; u < o; u++) {
          const f = X * u, l = 2 * f;
          j(l, a) && (i[f + 6] += e);
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
      const u = a * 2, f = j(u, r);
      if (f) {
        const l = n[a + 6], d = r[u + 14];
        e(o, f, new Float32Array(s, a * 4, 6), l, d);
      } else {
        const l = Y(a), d = $(a, n), h = kt(a, n);
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
      const n = e[t], r = new Uint32Array(n), i = new Uint16Array(n), a = new Float32Array(n), o = n.byteLength / q;
      for (let u = o - 1; u >= 0; u--) {
        const f = u * X, l = f * 2;
        if (j(l, i)) {
          const h = W(f, r), g = Z(l, i);
          this.writePrimitiveRangeBounds(h, g, ke, 0), a.set(ke, f);
        } else {
          const h = Y(f), g = $(f, r);
          for (let T = 0; T < 3; T++) {
            const x = a[h + T], v = a[h + T + 3], p = a[g + T], y = a[g + T + 3];
            a[f + T] = x < p ? x : p, a[f + T + 3] = v > y ? v : y;
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
      z(0, new Float32Array(s), qn), e.union(qn);
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
      n = (d, h, g, T, x) => l(d, h, g, T, x) ? !0 : a(d, h, this, r, g, T, i);
    } else n || (r ? n = (l, d, h, g) => a(l, d, this, r, h, g, i) : n = (l, d, h) => h);
    let o = !1, u = 0;
    const f = this._roots;
    for (let l = 0, d = f.length; l < d; l++) {
      const h = f[l];
      if (o = Qi(this, l, s, n, t, u), o)
        break;
      u += h.byteLength / q;
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
    return er(this, e, t, n);
  }
}
function nr() {
  return typeof SharedArrayBuffer < "u";
}
function Ht(c) {
  return c.index ? c.index.count : c.attributes.position.count;
}
function Vt(c) {
  return Ht(c) / 3;
}
function Ns(c, e = ArrayBuffer) {
  return c > 65535 ? new Uint32Array(new e(4 * c)) : new Uint16Array(new e(2 * c));
}
function sr(c, e) {
  if (!c.index) {
    const t = c.attributes.position.count, s = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, n = Ns(t, s);
    c.setIndex(new Xe(n, 1));
    for (let r = 0; r < t; r++)
      n[r] = r;
  }
}
function ir(c, e, t) {
  const s = Ht(c) / t, n = e || c.drawRange, r = n.start / t, i = (n.start + n.count) / t, a = Math.max(0, r), o = Math.min(s, i) - a;
  return {
    offset: Math.floor(a),
    count: Math.floor(o)
  };
}
function rr(c, e) {
  return c.groups.map((t) => ({
    offset: t.start / e,
    count: t.count / e
  }));
}
function Yn(c, e, t) {
  const s = ir(c, e, t), n = rr(c, t);
  if (!n.length)
    return [s];
  const r = [], i = s.offset, a = s.offset + s.count, o = Ht(c) / t, u = [];
  for (const d of n) {
    const { offset: h, count: g } = d, T = h, x = isFinite(g) ? g : o - h, v = h + x;
    T < a && v > i && (u.push({ pos: Math.max(i, T), isStart: !0 }), u.push({ pos: Math.min(a, v), isStart: !1 }));
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
function or(c, e) {
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
class ar extends tr {
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
    if (t.useSharedArrayBuffer && !nr())
      throw new Error("BVH: SharedArrayBuffer is not available.");
    super(), this.geometry = e, this.resolvePrimitiveIndex = t.indirect ? (s) => this._indirectBuffer[s] : (s) => s, this.primitiveBuffer = null, this.primitiveBufferStride = null, this._indirectBuffer = null, t = {
      ...Ds,
      ...t
    }, t[Pn] || this.init(t);
  }
  init(e) {
    const { geometry: t, primitiveStride: s } = this;
    if (e.indirect) {
      const n = Yn(t, e.range, s), r = or(n, e.useSharedArrayBuffer);
      this._indirectBuffer = r;
    } else
      sr(t, e);
    super.init(e), !t.boundingBox && e.setBoundingBox && (t.boundingBox = this.getBoundingBox(new le()));
  }
  // Abstract methods to be implemented by subclasses
  getRootRanges(e) {
    return this.indirect ? [{ offset: 0, count: this._indirectBuffer.length }] : Yn(this.geometry, e, this.primitiveStride);
  }
  raycastObject3D() {
    throw new Error("BVH: raycastObject3D() not implemented");
  }
}
class ye {
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
ye.prototype.setFromBox = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new L();
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
const cr = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new L(), e = /* @__PURE__ */ new L(), t = /* @__PURE__ */ new L();
  return function(n, r, i) {
    const a = n.start, o = c, u = r.start, f = e;
    t.subVectors(a, u), c.subVectors(n.end, n.start), e.subVectors(r.end, r.start);
    const l = t.dot(f), d = f.dot(o), h = f.dot(f), g = t.dot(o), x = o.dot(o) * h - d * d;
    let v, p;
    x !== 0 ? v = (l * d - g * h) / x : v = 0, p = (l + v * d) / h, i.x = v, i.y = p;
  };
})(), Bn = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new fe(), e = /* @__PURE__ */ new L(), t = /* @__PURE__ */ new L();
  return function(n, r, i, a) {
    cr(n, r, c);
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
})(), lr = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new L(), e = /* @__PURE__ */ new L(), t = /* @__PURE__ */ new Ts(), s = /* @__PURE__ */ new ge();
  return function(r, i) {
    const { radius: a, center: o } = r, { a: u, b: f, c: l } = i;
    if (s.start = u, s.end = f, s.closestPointToPoint(o, !0, c).distanceTo(o) <= a || (s.start = u, s.end = l, s.closestPointToPoint(o, !0, c).distanceTo(o) <= a) || (s.start = f, s.end = l, s.closestPointToPoint(o, !0, c).distanceTo(o) <= a)) return !0;
    const T = i.getPlane(t);
    if (Math.abs(T.distanceToPoint(o)) <= a) {
      const v = T.projectPoint(o, e);
      if (i.containsPoint(v)) return !0;
    }
    return !1;
  };
})(), ur = ["x", "y", "z"], me = 1e-15, $n = me * me;
function te(c) {
  return Math.abs(c) < me;
}
class ce extends je {
  constructor(...e) {
    super(...e), this.isExtendedTriangle = !0, this.satAxes = new Array(4).fill().map(() => new L()), this.satBounds = new Array(4).fill().map(() => new ye()), this.points = [this.a, this.b, this.c], this.plane = new Ts(), this.isDegenerateIntoSegment = !1, this.isDegenerateIntoPoint = !1, this.degenerateSegment = new ge(), this.needsUpdate = !0;
  }
  /**
   * Returns whether the triangle intersects the given sphere.
   * @param {Sphere} sphere
   * @returns {boolean}
   */
  intersectsSphere(e) {
    return lr(e, this);
  }
  update() {
    const e = this.a, t = this.b, s = this.c, n = this.points, r = this.satAxes, i = this.satBounds, a = r[0], o = i[0];
    this.getNormal(a), o.setFromPoints(a, n);
    const u = r[1], f = i[1];
    u.subVectors(e, t), f.setFromPoints(u, n);
    const l = r[2], d = i[2];
    l.subVectors(t, s), d.setFromPoints(l, n);
    const h = r[3], g = i[3];
    h.subVectors(s, e), g.setFromPoints(h, n);
    const T = u.length(), x = l.length(), v = h.length();
    this.isDegenerateIntoPoint = !1, this.isDegenerateIntoSegment = !1, T < me ? x < me || v < me ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(e), this.degenerateSegment.end.copy(s)) : x < me ? v < me ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(t), this.degenerateSegment.end.copy(e)) : v < me && (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(s), this.degenerateSegment.end.copy(t)), this.plane.setFromNormalAndCoplanarPoint(a, e), this.needsUpdate = !1;
  }
}
ce.prototype.closestPointToSegment = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new L(), e = /* @__PURE__ */ new L(), t = /* @__PURE__ */ new ge();
  return function(n, r = null, i = null) {
    const { start: a, end: o } = n, u = this.points;
    let f, l = 1 / 0;
    for (let d = 0; d < 3; d++) {
      const h = (d + 1) % 3;
      t.start.copy(u[d]), t.end.copy(u[h]), Bn(t, n, c, e), f = c.distanceToSquared(e), f < l && (l = f, r && r.copy(c), i && i.copy(e));
    }
    return this.closestPointToPoint(a, c), f = a.distanceToSquared(c), f < l && (l = f, r && r.copy(c), i && i.copy(a)), this.closestPointToPoint(o, c), f = o.distanceToSquared(c), f < l && (l = f, r && r.copy(c), i && i.copy(o)), Math.sqrt(l);
  };
})();
ce.prototype.intersectsTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new ce(), e = /* @__PURE__ */ new ye(), t = /* @__PURE__ */ new ye(), s = /* @__PURE__ */ new L(), n = /* @__PURE__ */ new L(), r = /* @__PURE__ */ new L(), i = /* @__PURE__ */ new L(), a = /* @__PURE__ */ new ge(), o = /* @__PURE__ */ new ge(), u = /* @__PURE__ */ new L(), f = /* @__PURE__ */ new fe(), l = /* @__PURE__ */ new fe();
  function d(y, m, w, A) {
    const b = s;
    !y.isDegenerateIntoPoint && !y.isDegenerateIntoSegment ? b.copy(y.plane.normal) : b.copy(m.plane.normal);
    const _ = y.satBounds, E = y.satAxes;
    for (let M = 1; M < 4; M++) {
      const P = _[M], D = E[M];
      if (e.setFromPoints(D, m.points), P.isSeparated(e) || (i.copy(b).cross(D), e.setFromPoints(i, y.points), t.setFromPoints(i, m.points), e.isSeparated(t))) return !1;
    }
    const R = m.satBounds, S = m.satAxes;
    for (let M = 1; M < 4; M++) {
      const P = R[M], D = S[M];
      if (e.setFromPoints(D, y.points), P.isSeparated(e) || (i.crossVectors(b, D), e.setFromPoints(i, y.points), t.setFromPoints(i, m.points), e.isSeparated(t))) return !1;
    }
    return w && (A || console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."), w.start.set(0, 0, 0), w.end.set(0, 0, 0)), !0;
  }
  function h(y, m, w, A, b, _, E, R, S, M, P) {
    let D = E / (E - R);
    M.x = A + (b - A) * D, P.start.subVectors(m, y).multiplyScalar(D).add(y), D = E / (E - S), M.y = A + (_ - A) * D, P.end.subVectors(w, y).multiplyScalar(D).add(y);
  }
  function g(y, m, w, A, b, _, E, R, S, M, P) {
    if (b > 0)
      h(y.c, y.a, y.b, A, m, w, S, E, R, M, P);
    else if (_ > 0)
      h(y.b, y.a, y.c, w, m, A, R, E, S, M, P);
    else if (R * S > 0 || E != 0)
      h(y.a, y.b, y.c, m, w, A, E, R, S, M, P);
    else if (R != 0)
      h(y.b, y.a, y.c, w, m, A, R, E, S, M, P);
    else if (S != 0)
      h(y.c, y.a, y.b, A, m, w, S, E, R, M, P);
    else
      return !0;
    return !1;
  }
  function T(y, m, w, A) {
    const b = m.degenerateSegment, _ = y.plane.distanceToPoint(b.start), E = y.plane.distanceToPoint(b.end);
    return te(_) ? te(E) ? d(y, m, w, A) : (w && (w.start.copy(b.start), w.end.copy(b.start)), y.containsPoint(b.start)) : te(E) ? (w && (w.start.copy(b.end), w.end.copy(b.end)), y.containsPoint(b.end)) : y.plane.intersectLine(b, s) != null ? (w && (w.start.copy(s), w.end.copy(s)), y.containsPoint(s)) : !1;
  }
  function x(y, m, w) {
    const A = m.a;
    return te(y.plane.distanceToPoint(A)) && y.containsPoint(A) ? (w && (w.start.copy(A), w.end.copy(A)), !0) : !1;
  }
  function v(y, m, w) {
    const A = y.degenerateSegment, b = m.a;
    return A.closestPointToPoint(b, !0, s), b.distanceToSquared(s) < $n ? (w && (w.start.copy(b), w.end.copy(b)), !0) : !1;
  }
  function p(y, m, w, A) {
    if (y.isDegenerateIntoSegment)
      if (m.isDegenerateIntoSegment) {
        const b = y.degenerateSegment, _ = m.degenerateSegment, E = n, R = r;
        b.delta(E), _.delta(R);
        const S = s.subVectors(_.start, b.start), M = E.x * R.y - E.y * R.x;
        if (te(M))
          return !1;
        const P = (S.x * R.y - S.y * R.x) / M, D = -(E.x * S.y - E.y * S.x) / M;
        if (P < 0 || P > 1 || D < 0 || D > 1)
          return !1;
        const B = b.start.z + E.z * P, C = _.start.z + R.z * D;
        return te(B - C) ? (w && (w.start.copy(b.start).addScaledVector(E, P), w.end.copy(b.start).addScaledVector(E, P)), !0) : !1;
      } else return m.isDegenerateIntoPoint ? v(y, m, w) : T(m, y, w, A);
    else {
      if (y.isDegenerateIntoPoint)
        return m.isDegenerateIntoPoint ? m.a.distanceToSquared(y.a) < $n ? (w && (w.start.copy(y.a), w.end.copy(y.a)), !0) : !1 : m.isDegenerateIntoSegment ? v(m, y, w) : x(m, y, w);
      if (m.isDegenerateIntoPoint)
        return x(y, m, w);
      if (m.isDegenerateIntoSegment)
        return T(y, m, w, A);
    }
  }
  return function(m, w = null, A = !1) {
    this.needsUpdate && this.update(), m.isExtendedTriangle ? m.needsUpdate && m.update() : (c.copy(m), c.update(), m = c);
    const b = p(this, m, w, A);
    if (b !== void 0)
      return b;
    const _ = this.plane, E = m.plane;
    let R = E.distanceToPoint(this.a), S = E.distanceToPoint(this.b), M = E.distanceToPoint(this.c);
    te(R) && (R = 0), te(S) && (S = 0), te(M) && (M = 0);
    const P = R * S, D = R * M;
    if (P > 0 && D > 0)
      return !1;
    let B = _.distanceToPoint(m.a), C = _.distanceToPoint(m.b), ee = _.distanceToPoint(m.c);
    te(B) && (B = 0), te(C) && (C = 0), te(ee) && (ee = 0);
    const xe = B * C, re = B * ee;
    if (xe > 0 && re > 0)
      return !1;
    n.copy(_.normal), r.copy(E.normal);
    const J = n.cross(r);
    let I = 0, N = Math.abs(J.x);
    const U = Math.abs(J.y);
    U > N && (N = U, I = 1), Math.abs(J.z) > N && (I = 2);
    const oe = ur[I], Ye = this.a[oe], G = this.b[oe], Te = this.c[oe], $e = m.a[oe], Gt = m.b[oe], Vs = m.c[oe];
    if (g(this, Ye, G, Te, P, D, R, S, M, f, a))
      return d(this, m, w, A);
    if (g(m, $e, Gt, Vs, xe, re, B, C, ee, l, o))
      return d(this, m, w, A);
    if (f.y < f.x) {
      const jt = f.y;
      f.y = f.x, f.x = jt, u.copy(a.start), a.start.copy(a.end), a.end.copy(u);
    }
    if (l.y < l.x) {
      const jt = l.y;
      l.y = l.x, l.x = jt, u.copy(o.start), o.start.copy(o.end), o.end.copy(u);
    }
    return f.y < l.x || l.y < f.x ? !1 : (w && (l.x > f.x ? w.start.copy(o.start) : w.start.copy(a.start), l.y < f.y ? w.end.copy(o.end) : w.end.copy(a.end)), !0);
  };
})();
ce.prototype.distanceToPoint = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new L();
  return function(t) {
    return this.closestPointToPoint(t, c), t.distanceTo(c);
  };
})();
ce.prototype.distanceToTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new L(), e = /* @__PURE__ */ new L(), t = ["a", "b", "c"], s = /* @__PURE__ */ new ge(), n = /* @__PURE__ */ new ge();
  return function(i, a = null, o = null) {
    const u = a || o ? s : null;
    if (this.intersectsTriangle(i, u, !0))
      return (a || o) && (a && u.getCenter(a), o && u.getCenter(o)), 0;
    let f = 1 / 0;
    for (let l = 0; l < 3; l++) {
      let d;
      const h = t[l], g = i[h];
      this.closestPointToPoint(g, c), d = g.distanceToSquared(c), d < f && (f = d, a && a.copy(c), o && o.copy(g));
      const T = this[h];
      i.closestPointToPoint(T, c), d = T.distanceToSquared(c), d < f && (f = d, a && a.copy(T), o && o.copy(c));
    }
    for (let l = 0; l < 3; l++) {
      const d = t[l], h = t[(l + 1) % 3];
      s.set(this[d], this[h]);
      for (let g = 0; g < 3; g++) {
        const T = t[g], x = t[(g + 1) % 3];
        n.set(i[T], i[x]), Bn(s, n, c, e);
        const v = c.distanceToSquared(e);
        v < f && (f = v, a && a.copy(c), o && o.copy(e));
      }
    }
    return Math.sqrt(f);
  };
})();
class Q {
  constructor(e, t, s) {
    this.isOrientedBox = !0, this.min = new L(), this.max = new L(), this.matrix = new ie(), this.invMatrix = new ie(), this.points = new Array(8).fill().map(() => new L()), this.satAxes = new Array(3).fill().map(() => new L()), this.satBounds = new Array(3).fill().map(() => new ye()), this.alignedSatBounds = new Array(3).fill().map(() => new ye()), this.needsUpdate = !1, e && this.min.copy(e), t && this.max.copy(t), s && this.matrix.copy(s);
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
Q.prototype.update = /* @__PURE__ */ (function() {
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
Q.prototype.intersectsBox = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new ye();
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
Q.prototype.intersectsTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new ce(), e = /* @__PURE__ */ new Array(3), t = /* @__PURE__ */ new ye(), s = /* @__PURE__ */ new ye(), n = /* @__PURE__ */ new L();
  return function(i) {
    this.needsUpdate && this.update(), i.isExtendedTriangle ? i.needsUpdate && i.update() : (c.copy(i), c.update(), i = c);
    const a = this.satBounds, o = this.satAxes;
    e[0] = i.a, e[1] = i.b, e[2] = i.c;
    for (let d = 0; d < 3; d++) {
      const h = a[d], g = o[d];
      if (t.setFromPoints(g, e), h.isSeparated(t)) return !1;
    }
    const u = i.satBounds, f = i.satAxes, l = this.points;
    for (let d = 0; d < 3; d++) {
      const h = u[d], g = f[d];
      if (t.setFromPoints(g, l), h.isSeparated(t)) return !1;
    }
    for (let d = 0; d < 3; d++) {
      const h = o[d];
      for (let g = 0; g < 4; g++) {
        const T = f[g];
        if (n.crossVectors(h, T), t.setFromPoints(n, e), s.setFromPoints(n, l), t.isSeparated(s)) return !1;
      }
    }
    return !0;
  };
})();
Q.prototype.closestPointToPoint = /* @__PURE__ */ (function() {
  return function(e, t) {
    return this.needsUpdate && this.update(), t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min, this.max).applyMatrix4(this.matrix), t;
  };
})();
Q.prototype.distanceToPoint = (function() {
  const c = new L();
  return function(t) {
    return this.closestPointToPoint(t, c), t.distanceTo(c);
  };
})();
Q.prototype.distanceToBox = /* @__PURE__ */ (function() {
  const c = ["x", "y", "z"], e = /* @__PURE__ */ new Array(12).fill().map(() => new ge()), t = /* @__PURE__ */ new Array(12).fill().map(() => new ge()), s = /* @__PURE__ */ new L(), n = /* @__PURE__ */ new L();
  return function(i, a = 0, o = null, u = null) {
    if (this.needsUpdate && this.update(), this.intersectsBox(i))
      return (o || u) && (i.getCenter(n), this.closestPointToPoint(n, s), i.closestPointToPoint(s, n), o && o.copy(s), u && u.copy(n)), 0;
    const f = a * a, l = i.min, d = i.max, h = this.points;
    let g = 1 / 0;
    for (let x = 0; x < 8; x++) {
      const v = h[x];
      n.copy(v).clamp(l, d);
      const p = v.distanceToSquared(n);
      if (p < g && (g = p, o && o.copy(v), u && u.copy(n), p < f))
        return Math.sqrt(p);
    }
    let T = 0;
    for (let x = 0; x < 3; x++)
      for (let v = 0; v <= 1; v++)
        for (let p = 0; p <= 1; p++) {
          const y = (x + 1) % 3, m = (x + 2) % 3, w = v << y | p << m, A = 1 << x | v << y | p << m, b = h[w], _ = h[A];
          e[T].set(b, _);
          const R = c[x], S = c[y], M = c[m], P = t[T], D = P.start, B = P.end;
          D[R] = l[R], D[S] = v ? l[S] : d[S], D[M] = p ? l[M] : d[S], B[R] = d[R], B[S] = v ? l[S] : d[S], B[M] = p ? l[M] : d[S], T++;
        }
    for (let x = 0; x <= 1; x++)
      for (let v = 0; v <= 1; v++)
        for (let p = 0; p <= 1; p++) {
          n.x = x ? d.x : l.x, n.y = v ? d.y : l.y, n.z = p ? d.z : l.z, this.closestPointToPoint(n, s);
          const y = n.distanceToSquared(s);
          if (y < g && (g = y, o && o.copy(s), u && u.copy(n), y < f))
            return Math.sqrt(y);
        }
    for (let x = 0; x < 12; x++) {
      const v = e[x];
      for (let p = 0; p < 12; p++) {
        const y = t[p];
        Bn(v, y, s, n);
        const m = s.distanceToSquared(n);
        if (m < g && (g = m, o && o.copy(s), u && u.copy(n), m < f))
          return Math.sqrt(m);
      }
    }
    return Math.sqrt(g);
  };
})();
class fr extends Dn {
  constructor() {
    super(() => new ce());
  }
}
const se = /* @__PURE__ */ new fr(), Qe = /* @__PURE__ */ new L(), tn = /* @__PURE__ */ new L();
function dr(c, e, t = {}, s = 0, n = 1 / 0) {
  const r = s * s, i = n * n;
  let a = 1 / 0, o = null;
  if (c.shapecast(
    {
      boundsTraverseOrder: (f) => (Qe.copy(e).clamp(f.min, f.max), Qe.distanceToSquared(e)),
      intersectsBounds: (f, l, d) => d < a && d < i,
      intersectsTriangle: (f, l) => {
        f.closestPointToPoint(e, Qe);
        const d = e.distanceToSquared(Qe);
        return d < a && (tn.copy(Qe), a = d, o = l), d < r;
      }
    }
  ), a === 1 / 0) return null;
  const u = Math.sqrt(a);
  return t.point ? t.point.copy(tn) : t.point = tn.clone(), t.distance = u, t.faceIndex = o, t;
}
const Tt = parseInt(vs) >= 169, hr = parseInt(vs) <= 161, Pe = /* @__PURE__ */ new L(), De = /* @__PURE__ */ new L(), Be = /* @__PURE__ */ new L(), wt = /* @__PURE__ */ new fe(), vt = /* @__PURE__ */ new fe(), _t = /* @__PURE__ */ new fe(), Wn = /* @__PURE__ */ new L(), Jn = /* @__PURE__ */ new L(), Zn = /* @__PURE__ */ new L(), et = /* @__PURE__ */ new L();
function pr(c, e, t, s, n, r, i, a) {
  let o;
  if (r === Ws ? o = c.intersectTriangle(s, t, e, !0, n) : o = c.intersectTriangle(e, t, s, r !== ws, n), o === null) return null;
  const u = c.origin.distanceTo(n);
  return u < i || u > a ? null : {
    distance: u,
    point: n.clone()
  };
}
function Qn(c, e, t, s, n, r, i, a, o, u, f) {
  Pe.fromBufferAttribute(e, r), De.fromBufferAttribute(e, i), Be.fromBufferAttribute(e, a);
  const l = pr(c, Pe, De, Be, et, o, u, f);
  if (l) {
    if (s) {
      wt.fromBufferAttribute(s, r), vt.fromBufferAttribute(s, i), _t.fromBufferAttribute(s, a), l.uv = new fe();
      const h = je.getInterpolation(et, Pe, De, Be, wt, vt, _t, l.uv);
      Tt || (l.uv = h);
    }
    if (n) {
      wt.fromBufferAttribute(n, r), vt.fromBufferAttribute(n, i), _t.fromBufferAttribute(n, a), l.uv1 = new fe();
      const h = je.getInterpolation(et, Pe, De, Be, wt, vt, _t, l.uv1);
      Tt || (l.uv1 = h), hr && (l.uv2 = l.uv1);
    }
    if (t) {
      Wn.fromBufferAttribute(t, r), Jn.fromBufferAttribute(t, i), Zn.fromBufferAttribute(t, a), l.normal = new L();
      const h = je.getInterpolation(et, Pe, De, Be, Wn, Jn, Zn, l.normal);
      l.normal.dot(c.direction) > 0 && l.normal.multiplyScalar(-1), Tt || (l.normal = h);
    }
    const d = {
      a: r,
      b: i,
      c: a,
      normal: new L(),
      materialIndex: 0
    };
    if (je.getNormal(Pe, De, Be, d.normal), l.face = d, l.faceIndex = r, Tt) {
      const h = new L();
      je.getBarycoord(et, Pe, De, Be, h), l.barycoord = h;
    }
  }
  return l;
}
function es(c) {
  return c && c.isMaterial ? c.side : c;
}
function zt(c, e, t, s, n, r, i) {
  const a = s * 3;
  let o = a + 0, u = a + 1, f = a + 2;
  const { index: l, groups: d } = c;
  c.index && (o = l.getX(o), u = l.getX(u), f = l.getX(f));
  const { position: h, normal: g, uv: T, uv1: x } = c.attributes;
  if (Array.isArray(e)) {
    const v = s * 3;
    for (let p = 0, y = d.length; p < y; p++) {
      const { start: m, count: w, materialIndex: A } = d[p];
      if (v >= m && v < m + w) {
        const b = es(e[A]), _ = Qn(t, h, g, T, x, o, u, f, b, r, i);
        if (_)
          if (_.faceIndex = s, _.face.materialIndex = A, n)
            n.push(_);
          else
            return _;
      }
    }
  } else {
    const v = es(e), p = Qn(t, h, g, T, x, o, u, f, v, r, i);
    if (p)
      if (p.faceIndex = s, p.face.materialIndex = 0, n)
        n.push(p);
      else
        return p;
  }
  return null;
}
function K(c, e, t, s) {
  const n = c.a, r = c.b, i = c.c;
  let a = e, o = e + 1, u = e + 2;
  t && (a = t.getX(a), o = t.getX(o), u = t.getX(u)), n.x = s.getX(a), n.y = s.getY(a), n.z = s.getZ(a), r.x = s.getX(o), r.y = s.getY(o), r.z = s.getZ(o), i.x = s.getX(u), i.y = s.getY(u), i.z = s.getZ(u);
}
function mr(c, e, t, s, n, r, i, a) {
  const { geometry: o, _indirectBuffer: u } = c;
  for (let f = s, l = s + n; f < l; f++)
    zt(o, e, t, f, r, i, a);
}
function gr(c, e, t, s, n, r, i) {
  const { geometry: a, _indirectBuffer: o } = c;
  let u = 1 / 0, f = null;
  for (let l = s, d = s + n; l < d; l++) {
    let h;
    h = zt(a, e, t, l, null, r, i), h && h.distance < u && (f = h, u = h.distance);
  }
  return f;
}
function yr(c, e, t, s, n, r, i) {
  const { geometry: a } = t, { index: o } = a, u = a.attributes.position;
  for (let f = c, l = e + c; f < l; f++) {
    let d;
    if (d = f, K(i, d * 3, o, u), i.needsUpdate = !0, s(i, d, n, r))
      return !0;
  }
  return !1;
}
function xr(c, e = null) {
  e && Array.isArray(e) && (e = new Set(e));
  const t = c.geometry, s = t.index ? t.index.array : null, n = t.attributes.position;
  let r, i, a, o, u = 0;
  const f = c._roots;
  for (let d = 0, h = f.length; d < h; d++)
    r = f[d], i = new Uint32Array(r), a = new Uint16Array(r), o = new Float32Array(r), l(0, u), u += r.byteLength;
  function l(d, h, g = !1) {
    const T = d * 2;
    if (j(T, a)) {
      const x = W(d, i), v = Z(T, a);
      let p = 1 / 0, y = 1 / 0, m = 1 / 0, w = -1 / 0, A = -1 / 0, b = -1 / 0;
      for (let _ = 3 * x, E = 3 * (x + v); _ < E; _++) {
        let R = s[_];
        const S = n.getX(R), M = n.getY(R), P = n.getZ(R);
        S < p && (p = S), S > w && (w = S), M < y && (y = M), M > A && (A = M), P < m && (m = P), P > b && (b = P);
      }
      return o[d + 0] !== p || o[d + 1] !== y || o[d + 2] !== m || o[d + 3] !== w || o[d + 4] !== A || o[d + 5] !== b ? (o[d + 0] = p, o[d + 1] = y, o[d + 2] = m, o[d + 3] = w, o[d + 4] = A, o[d + 5] = b, !0) : !1;
    } else {
      const x = Y(d), v = $(d, i);
      let p = g, y = !1, m = !1;
      if (e) {
        if (!p) {
          const R = x / X + h / q, S = v / X + h / q;
          y = e.has(R), m = e.has(S), p = !y && !m;
        }
      } else
        y = !0, m = !0;
      const w = p || y, A = p || m;
      let b = !1;
      w && (b = l(x, h, p));
      let _ = !1;
      A && (_ = l(v, h, p));
      const E = b || _;
      if (E)
        for (let R = 0; R < 3; R++) {
          const S = x + R, M = v + R, P = o[S], D = o[S + 3], B = o[M], C = o[M + 3];
          o[d + R] = P < B ? P : B, o[d + R + 3] = D > C ? D : C;
        }
      return E;
    }
  }
}
function Se(c, e, t, s, n) {
  let r, i, a, o, u, f;
  const l = 1 / t.direction.x, d = 1 / t.direction.y, h = 1 / t.direction.z, g = t.origin.x, T = t.origin.y, x = t.origin.z;
  let v = e[c], p = e[c + 3], y = e[c + 1], m = e[c + 3 + 1], w = e[c + 2], A = e[c + 3 + 2];
  return l >= 0 ? (r = (v - g) * l, i = (p - g) * l) : (r = (p - g) * l, i = (v - g) * l), d >= 0 ? (a = (y - T) * d, o = (m - T) * d) : (a = (m - T) * d, o = (y - T) * d), r > o || a > i || ((a > r || isNaN(r)) && (r = a), (o < i || isNaN(i)) && (i = o), h >= 0 ? (u = (w - x) * h, f = (A - x) * h) : (u = (A - x) * h, f = (w - x) * h), r > f || u > i) ? !1 : ((u > r || r !== r) && (r = u), (f < i || i !== i) && (i = f), r <= n && i >= s);
}
function Tr(c, e, t, s, n, r, i, a) {
  const { geometry: o, _indirectBuffer: u } = c;
  for (let f = s, l = s + n; f < l; f++) {
    let d = u ? u[f] : f;
    zt(o, e, t, d, r, i, a);
  }
}
function wr(c, e, t, s, n, r, i) {
  const { geometry: a, _indirectBuffer: o } = c;
  let u = 1 / 0, f = null;
  for (let l = s, d = s + n; l < d; l++) {
    let h;
    h = zt(a, e, t, o ? o[l] : l, null, r, i), h && h.distance < u && (f = h, u = h.distance);
  }
  return f;
}
function vr(c, e, t, s, n, r, i) {
  const { geometry: a } = t, { index: o } = a, u = a.attributes.position;
  for (let f = c, l = e + c; f < l; f++) {
    let d;
    if (d = t.resolveTriangleIndex(f), K(i, d * 3, o, u), i.needsUpdate = !0, s(i, d, n, r))
      return !0;
  }
  return !1;
}
function _r(c, e, t, s, n, r, i) {
  k.setBuffer(c._roots[e]), xn(0, c, t, s, n, r, i), k.clearBuffer();
}
function xn(c, e, t, s, n, r, i) {
  const { float32Array: a, uint16Array: o, uint32Array: u } = k, f = c * 2;
  if (j(f, o)) {
    const d = W(c, u), h = Z(f, o);
    mr(e, t, s, d, h, n, r, i);
  } else {
    const d = Y(c);
    Se(d, a, s, r, i) && xn(d, e, t, s, n, r, i);
    const h = $(c, u);
    Se(h, a, s, r, i) && xn(h, e, t, s, n, r, i);
  }
}
const Ar = ["x", "y", "z"];
function br(c, e, t, s, n, r) {
  k.setBuffer(c._roots[e]);
  const i = Tn(0, c, t, s, n, r);
  return k.clearBuffer(), i;
}
function Tn(c, e, t, s, n, r) {
  const { float32Array: i, uint16Array: a, uint32Array: o } = k;
  let u = c * 2;
  if (j(u, a)) {
    const l = W(c, o), d = Z(u, a);
    return gr(e, t, s, l, d, n, r);
  } else {
    const l = kt(c, o), d = Ar[l], g = s.direction[d] >= 0;
    let T, x;
    g ? (T = Y(c), x = $(c, o)) : (T = $(c, o), x = Y(c));
    const p = Se(T, i, s, n, r) ? Tn(T, e, t, s, n, r) : null;
    if (p) {
      const w = p.point[d];
      if (g ? w <= i[x + l] : (
        // min bounding data
        w >= i[x + l + 3]
      ))
        return p;
    }
    const m = Se(x, i, s, n, r) ? Tn(x, e, t, s, n, r) : null;
    return p && m ? p.distance <= m.distance ? p : m : p || m || null;
  }
}
const At = /* @__PURE__ */ new le(), He = /* @__PURE__ */ new ce(), Ve = /* @__PURE__ */ new ce(), tt = /* @__PURE__ */ new ie(), ts = /* @__PURE__ */ new Q(), bt = /* @__PURE__ */ new Q();
function Rr(c, e, t, s) {
  k.setBuffer(c._roots[e]);
  const n = wn(0, c, t, s);
  return k.clearBuffer(), n;
}
function wn(c, e, t, s, n = null) {
  const { float32Array: r, uint16Array: i, uint32Array: a } = k;
  let o = c * 2;
  if (n === null && (t.boundingBox || t.computeBoundingBox(), ts.set(t.boundingBox.min, t.boundingBox.max, s), n = ts), j(o, i)) {
    const f = e.geometry, l = f.index, d = f.attributes.position, h = t.index, g = t.attributes.position, T = W(c, a), x = Z(o, i);
    if (tt.copy(s).invert(), t.boundsTree)
      return z(c, r, bt), bt.matrix.copy(tt), bt.needsUpdate = !0, t.boundsTree.shapecast({
        intersectsBounds: (p) => bt.intersectsBox(p),
        intersectsTriangle: (p) => {
          p.a.applyMatrix4(s), p.b.applyMatrix4(s), p.c.applyMatrix4(s), p.needsUpdate = !0;
          for (let y = T * 3, m = (x + T) * 3; y < m; y += 3)
            if (K(Ve, y, l, d), Ve.needsUpdate = !0, p.intersectsTriangle(Ve))
              return !0;
          return !1;
        }
      });
    {
      const v = Vt(t);
      for (let p = T * 3, y = (x + T) * 3; p < y; p += 3) {
        K(He, p, l, d), He.a.applyMatrix4(tt), He.b.applyMatrix4(tt), He.c.applyMatrix4(tt), He.needsUpdate = !0;
        for (let m = 0, w = v * 3; m < w; m += 3)
          if (K(Ve, m, h, g), Ve.needsUpdate = !0, He.intersectsTriangle(Ve))
            return !0;
      }
    }
  } else {
    const f = Y(c), l = $(c, a);
    return z(f, r, At), !!(n.intersectsBox(At) && wn(f, e, t, s, n) || (z(l, r, At), n.intersectsBox(At) && wn(l, e, t, s, n)));
  }
}
const Rt = /* @__PURE__ */ new ie(), nn = /* @__PURE__ */ new Q(), nt = /* @__PURE__ */ new Q(), Mr = /* @__PURE__ */ new L(), Er = /* @__PURE__ */ new L(), Sr = /* @__PURE__ */ new L(), Ir = /* @__PURE__ */ new L();
function Pr(c, e, t, s = {}, n = {}, r = 0, i = 1 / 0) {
  e.boundingBox || e.computeBoundingBox(), nn.set(e.boundingBox.min, e.boundingBox.max, t), nn.needsUpdate = !0;
  const a = c.geometry, o = a.attributes.position, u = a.index, f = e.attributes.position, l = e.index, d = se.getPrimitive(), h = se.getPrimitive();
  let g = Mr, T = Er, x = null, v = null;
  n && (x = Sr, v = Ir);
  let p = 1 / 0, y = null, m = null;
  return Rt.copy(t).invert(), nt.matrix.copy(Rt), c.shapecast(
    {
      boundsTraverseOrder: (w) => nn.distanceToBox(w),
      intersectsBounds: (w, A, b) => b < p && b < i ? (A && (nt.min.copy(w.min), nt.max.copy(w.max), nt.needsUpdate = !0), !0) : !1,
      intersectsRange: (w, A) => {
        if (e.boundsTree)
          return e.boundsTree.shapecast({
            boundsTraverseOrder: (_) => nt.distanceToBox(_),
            intersectsBounds: (_, E, R) => R < p && R < i,
            intersectsRange: (_, E) => {
              for (let R = _, S = _ + E; R < S; R++) {
                K(h, 3 * R, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
                for (let M = w, P = w + A; M < P; M++) {
                  K(d, 3 * M, u, o), d.needsUpdate = !0;
                  const D = d.distanceToTriangle(h, g, x);
                  if (D < p && (T.copy(g), v && v.copy(x), p = D, y = M, m = R), D < r)
                    return !0;
                }
              }
            }
          });
        {
          const b = Vt(e);
          for (let _ = 0, E = b; _ < E; _++) {
            K(h, 3 * _, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
            for (let R = w, S = w + A; R < S; R++) {
              K(d, 3 * R, u, o), d.needsUpdate = !0;
              const M = d.distanceToTriangle(h, g, x);
              if (M < p && (T.copy(g), v && v.copy(x), p = M, y = R, m = _), M < r)
                return !0;
            }
          }
        }
      }
    }
  ), se.releasePrimitive(d), se.releasePrimitive(h), p === 1 / 0 ? null : (s.point ? s.point.copy(T) : s.point = T.clone(), s.distance = p, s.faceIndex = y, n && (n.point ? n.point.copy(v) : n.point = v.clone(), n.point.applyMatrix4(Rt), T.applyMatrix4(Rt), n.distance = T.sub(n.point).length(), n.faceIndex = m), s);
}
function Dr(c, e = null) {
  e && Array.isArray(e) && (e = new Set(e));
  const t = c.geometry, s = t.index ? t.index.array : null, n = t.attributes.position;
  let r, i, a, o, u = 0;
  const f = c._roots;
  for (let d = 0, h = f.length; d < h; d++)
    r = f[d], i = new Uint32Array(r), a = new Uint16Array(r), o = new Float32Array(r), l(0, u), u += r.byteLength;
  function l(d, h, g = !1) {
    const T = d * 2;
    if (j(T, a)) {
      const x = W(d, i), v = Z(T, a);
      let p = 1 / 0, y = 1 / 0, m = 1 / 0, w = -1 / 0, A = -1 / 0, b = -1 / 0;
      for (let _ = x, E = x + v; _ < E; _++) {
        const R = 3 * c.resolveTriangleIndex(_);
        for (let S = 0; S < 3; S++) {
          let M = R + S;
          M = s ? s[M] : M;
          const P = n.getX(M), D = n.getY(M), B = n.getZ(M);
          P < p && (p = P), P > w && (w = P), D < y && (y = D), D > A && (A = D), B < m && (m = B), B > b && (b = B);
        }
      }
      return o[d + 0] !== p || o[d + 1] !== y || o[d + 2] !== m || o[d + 3] !== w || o[d + 4] !== A || o[d + 5] !== b ? (o[d + 0] = p, o[d + 1] = y, o[d + 2] = m, o[d + 3] = w, o[d + 4] = A, o[d + 5] = b, !0) : !1;
    } else {
      const x = Y(d), v = $(d, i);
      let p = g, y = !1, m = !1;
      if (e) {
        if (!p) {
          const R = x / X + h / q, S = v / X + h / q;
          y = e.has(R), m = e.has(S), p = !y && !m;
        }
      } else
        y = !0, m = !0;
      const w = p || y, A = p || m;
      let b = !1;
      w && (b = l(x, h, p));
      let _ = !1;
      A && (_ = l(v, h, p));
      const E = b || _;
      if (E)
        for (let R = 0; R < 3; R++) {
          const S = x + R, M = v + R, P = o[S], D = o[S + 3], B = o[M], C = o[M + 3];
          o[d + R] = P < B ? P : B, o[d + R + 3] = D > C ? D : C;
        }
      return E;
    }
  }
}
function Br(c, e, t, s, n, r, i) {
  k.setBuffer(c._roots[e]), vn(0, c, t, s, n, r, i), k.clearBuffer();
}
function vn(c, e, t, s, n, r, i) {
  const { float32Array: a, uint16Array: o, uint32Array: u } = k, f = c * 2;
  if (j(f, o)) {
    const d = W(c, u), h = Z(f, o);
    Tr(e, t, s, d, h, n, r, i);
  } else {
    const d = Y(c);
    Se(d, a, s, r, i) && vn(d, e, t, s, n, r, i);
    const h = $(c, u);
    Se(h, a, s, r, i) && vn(h, e, t, s, n, r, i);
  }
}
const Lr = ["x", "y", "z"];
function Nr(c, e, t, s, n, r) {
  k.setBuffer(c._roots[e]);
  const i = _n(0, c, t, s, n, r);
  return k.clearBuffer(), i;
}
function _n(c, e, t, s, n, r) {
  const { float32Array: i, uint16Array: a, uint32Array: o } = k;
  let u = c * 2;
  if (j(u, a)) {
    const l = W(c, o), d = Z(u, a);
    return wr(e, t, s, l, d, n, r);
  } else {
    const l = kt(c, o), d = Lr[l], g = s.direction[d] >= 0;
    let T, x;
    g ? (T = Y(c), x = $(c, o)) : (T = $(c, o), x = Y(c));
    const p = Se(T, i, s, n, r) ? _n(T, e, t, s, n, r) : null;
    if (p) {
      const w = p.point[d];
      if (g ? w <= i[x + l] : (
        // min bounding data
        w >= i[x + l + 3]
      ))
        return p;
    }
    const m = Se(x, i, s, n, r) ? _n(x, e, t, s, n, r) : null;
    return p && m ? p.distance <= m.distance ? p : m : p || m || null;
  }
}
const Mt = /* @__PURE__ */ new le(), ze = /* @__PURE__ */ new ce(), Ge = /* @__PURE__ */ new ce(), st = /* @__PURE__ */ new ie(), ns = /* @__PURE__ */ new Q(), Et = /* @__PURE__ */ new Q();
function Cr(c, e, t, s) {
  k.setBuffer(c._roots[e]);
  const n = An(0, c, t, s);
  return k.clearBuffer(), n;
}
function An(c, e, t, s, n = null) {
  const { float32Array: r, uint16Array: i, uint32Array: a } = k;
  let o = c * 2;
  if (n === null && (t.boundingBox || t.computeBoundingBox(), ns.set(t.boundingBox.min, t.boundingBox.max, s), n = ns), j(o, i)) {
    const f = e.geometry, l = f.index, d = f.attributes.position, h = t.index, g = t.attributes.position, T = W(c, a), x = Z(o, i);
    if (st.copy(s).invert(), t.boundsTree)
      return z(c, r, Et), Et.matrix.copy(st), Et.needsUpdate = !0, t.boundsTree.shapecast({
        intersectsBounds: (p) => Et.intersectsBox(p),
        intersectsTriangle: (p) => {
          p.a.applyMatrix4(s), p.b.applyMatrix4(s), p.c.applyMatrix4(s), p.needsUpdate = !0;
          for (let y = T, m = x + T; y < m; y++)
            if (K(Ge, 3 * e.resolveTriangleIndex(y), l, d), Ge.needsUpdate = !0, p.intersectsTriangle(Ge))
              return !0;
          return !1;
        }
      });
    {
      const v = Vt(t);
      for (let p = T, y = x + T; p < y; p++) {
        const m = e.resolveTriangleIndex(p);
        K(ze, 3 * m, l, d), ze.a.applyMatrix4(st), ze.b.applyMatrix4(st), ze.c.applyMatrix4(st), ze.needsUpdate = !0;
        for (let w = 0, A = v * 3; w < A; w += 3)
          if (K(Ge, w, h, g), Ge.needsUpdate = !0, ze.intersectsTriangle(Ge))
            return !0;
      }
    }
  } else {
    const f = Y(c), l = $(c, a);
    return z(f, r, Mt), !!(n.intersectsBox(Mt) && An(f, e, t, s, n) || (z(l, r, Mt), n.intersectsBox(Mt) && An(l, e, t, s, n)));
  }
}
const St = /* @__PURE__ */ new ie(), sn = /* @__PURE__ */ new Q(), it = /* @__PURE__ */ new Q(), Fr = /* @__PURE__ */ new L(), Or = /* @__PURE__ */ new L(), Ur = /* @__PURE__ */ new L(), kr = /* @__PURE__ */ new L();
function Hr(c, e, t, s = {}, n = {}, r = 0, i = 1 / 0) {
  e.boundingBox || e.computeBoundingBox(), sn.set(e.boundingBox.min, e.boundingBox.max, t), sn.needsUpdate = !0;
  const a = c.geometry, o = a.attributes.position, u = a.index, f = e.attributes.position, l = e.index, d = se.getPrimitive(), h = se.getPrimitive();
  let g = Fr, T = Or, x = null, v = null;
  n && (x = Ur, v = kr);
  let p = 1 / 0, y = null, m = null;
  return St.copy(t).invert(), it.matrix.copy(St), c.shapecast(
    {
      boundsTraverseOrder: (w) => sn.distanceToBox(w),
      intersectsBounds: (w, A, b) => b < p && b < i ? (A && (it.min.copy(w.min), it.max.copy(w.max), it.needsUpdate = !0), !0) : !1,
      intersectsRange: (w, A) => {
        if (e.boundsTree) {
          const b = e.boundsTree;
          return b.shapecast({
            boundsTraverseOrder: (_) => it.distanceToBox(_),
            intersectsBounds: (_, E, R) => R < p && R < i,
            intersectsRange: (_, E) => {
              for (let R = _, S = _ + E; R < S; R++) {
                const M = b.resolveTriangleIndex(R);
                K(h, 3 * M, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
                for (let P = w, D = w + A; P < D; P++) {
                  const B = c.resolveTriangleIndex(P);
                  K(d, 3 * B, u, o), d.needsUpdate = !0;
                  const C = d.distanceToTriangle(h, g, x);
                  if (C < p && (T.copy(g), v && v.copy(x), p = C, y = P, m = R), C < r)
                    return !0;
                }
              }
            }
          });
        } else {
          const b = Vt(e);
          for (let _ = 0, E = b; _ < E; _++) {
            K(h, 3 * _, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
            for (let R = w, S = w + A; R < S; R++) {
              const M = c.resolveTriangleIndex(R);
              K(d, 3 * M, u, o), d.needsUpdate = !0;
              const P = d.distanceToTriangle(h, g, x);
              if (P < p && (T.copy(g), v && v.copy(x), p = P, y = R, m = _), P < r)
                return !0;
            }
          }
        }
      }
    }
  ), se.releasePrimitive(d), se.releasePrimitive(h), p === 1 / 0 ? null : (s.point ? s.point.copy(T) : s.point = T.clone(), s.distance = p, s.faceIndex = y, n && (n.point ? n.point.copy(v) : n.point = v.clone(), n.point.applyMatrix4(St), T.applyMatrix4(St), n.distance = T.sub(n.point).length(), n.faceIndex = m), s);
}
function ss(c, e, t) {
  return c === null ? null : (c.point.applyMatrix4(e.matrixWorld), c.distance = c.point.distanceTo(t.ray.origin), c.object = e, c);
}
const It = /* @__PURE__ */ new Q(), Pt = /* @__PURE__ */ new Js(), is = /* @__PURE__ */ new L(), rs = /* @__PURE__ */ new ie(), os = /* @__PURE__ */ new L(), rn = ["getX", "getY", "getZ"];
class Ot extends ar {
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
    const a = new Ot(t, { ...s, [Pn]: !0 });
    if (a._roots = r, a._indirectBuffer = i || null, s.setIndex) {
      const u = t.getIndex();
      if (u === null) {
        const f = new Xe(e.index, 1, !1);
        t.setIndex(f);
      } else u.array !== n && (u.array.set(n), u.needsUpdate = !0);
    }
    return a;
    function o(u) {
      for (let f = 0; f < u.length; f++) {
        const l = u[f], d = new Uint32Array(l), h = new Uint16Array(l);
        for (let g = 0, T = l.byteLength / q; g < T; g++) {
          const x = X * g, v = 2 * x;
          j(v, h) || (d[x + 6] = d[x + 6] / X - g);
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
      const g = i[rn[h]](f), T = i[rn[h]](l), x = i[rn[h]](d);
      let v = g;
      T < v && (v = T), x < v && (v = x);
      let p = g;
      T > p && (p = T), x > p && (p = x), t[s + h] = v, t[s + h + 3] = p;
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
    for (let g = e, T = e + t; g < T; g++) {
      const v = (r ? r[g] : g) * 3, p = (g - h) * 6;
      let y = v + 0, m = v + 1, w = v + 2;
      a && (y = a[y], m = a[m], w = a[w]), o || (y = y * l + f, m = m * l + f, w = w * l + f);
      for (let A = 0; A < 3; A++) {
        let b, _, E;
        o ? (b = i[d[A]](y), _ = i[d[A]](m), E = i[d[A]](w)) : (b = u[y + A], _ = u[m + A], E = u[w + A]);
        let R = b;
        _ < R && (R = _), E < R && (R = E);
        let S = b;
        _ > S && (S = _), E > S && (S = E);
        const M = (S - R) / 2, P = A * 2;
        s[p + P + 0] = R + M, s[p + P + 1] = M + (Math.abs(R) + M) * Bt;
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
    rs.copy(e.matrixWorld).invert(), Pt.copy(t.ray).applyMatrix4(rs), os.setFromMatrixScale(e.matrixWorld), is.copy(Pt.direction).multiply(os);
    const r = is.length(), i = t.near / r, a = t.far / r;
    if (t.firstHitOnly === !0) {
      let o = this.raycastFirst(Pt, n, i, a);
      o = ss(o, e, t), o && s.push(o);
    } else {
      const o = this.raycast(Pt, n, i, a);
      for (let u = 0, f = o.length; u < f; u++) {
        const l = ss(o[u], e, t);
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
    return (this.indirect ? Dr : xr)(this, e);
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
  raycast(e, t = ln, s = 0, n = 1 / 0) {
    const r = this._roots, i = [], a = this.indirect ? Br : _r;
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
  raycastFirst(e, t = ln, s = 0, n = 1 / 0) {
    const r = this._roots;
    let i = null;
    const a = this.indirect ? Nr : br;
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
    const n = this._roots, r = this.indirect ? Cr : Rr;
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
    const t = se.getPrimitive(), s = super.shapecast(
      {
        ...e,
        intersectsPrimitive: e.intersectsTriangle,
        scratchPrimitive: t,
        // TODO: is the performance significant enough for the added complexity here?
        // can we just use one function?
        iterate: this.indirect ? vr : yr
      }
    );
    return se.releasePrimitive(t), s;
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
    const i = se.getPrimitive(), a = this.geometry.index, o = this.geometry.attributes.position, u = this.indirect ? (g) => {
      const T = this.resolveTriangleIndex(g);
      K(i, T * 3, a, o);
    } : (g) => {
      K(i, g * 3, a, o);
    }, f = se.getPrimitive(), l = e.geometry.index, d = e.geometry.attributes.position, h = e.indirect ? (g) => {
      const T = e.resolveTriangleIndex(g);
      K(f, T * 3, l, d);
    } : (g) => {
      K(f, g * 3, l, d);
    };
    if (r) {
      if (!(e instanceof Ot))
        throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');
      const g = (T, x, v, p, y, m, w, A) => {
        for (let b = v, _ = v + p; b < _; b++) {
          h(b), f.a.applyMatrix4(t), f.b.applyMatrix4(t), f.c.applyMatrix4(t), f.needsUpdate = !0;
          for (let E = T, R = T + x; E < R; E++)
            if (u(E), i.needsUpdate = !0, r(i, f, E, b, y, m, w, A))
              return !0;
        }
        return !1;
      };
      if (n) {
        const T = n;
        n = function(x, v, p, y, m, w, A, b) {
          return T(x, v, p, y, m, w, A, b) ? !0 : g(x, v, p, y, m, w, A, b);
        };
      } else
        n = g;
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
    return It.set(e.min, e.max, t), It.needsUpdate = !0, this.shapecast(
      {
        intersectsBounds: (s) => It.intersectsBox(s),
        intersectsTriangle: (s) => It.intersectsTriangle(s)
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
    return (this.indirect ? Hr : Pr)(
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
    return dr(
      this,
      e,
      t,
      s,
      n
    );
  }
}
function Vr(c) {
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
function zr(c) {
  switch (c) {
    case 1:
      return ni;
    case 2:
      return ti;
    case 3:
      return Ct;
    case 4:
      return Ct;
  }
}
function as(c) {
  switch (c) {
    case 1:
      return ei;
    case 2:
      return _s;
    case 3:
      return fn;
    case 4:
      return fn;
  }
}
class Cs extends un {
  constructor() {
    super(), this.minFilter = be, this.magFilter = be, this.generateMipmaps = !1, this.overrideItemSize = null, this._forcedType = null;
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
          f = Ee;
          break;
        case Uint8Array:
        case Uint16Array:
        case Uint32Array:
          f = ct;
          break;
        case Int8Array:
        case Int16Array:
        case Int32Array:
          f = Xt;
          break;
      }
    let d, h, g, T, x = Vr(r);
    switch (f) {
      case Ee:
        g = 1, h = zr(r), a && u === 1 ? (T = o, x += "8", o === Uint8Array ? d = lt : (d = Ln, x += "_SNORM")) : (T = Float32Array, x += "32F", d = Ee);
        break;
      case Xt:
        x += u * 8 + "I", g = a ? Math.pow(2, o.BYTES_PER_ELEMENT * 8 - 1) : 1, h = as(r), u === 1 ? (T = Int8Array, d = Ln) : u === 2 ? (T = Int16Array, d = Qs) : (T = Int32Array, d = Xt);
        break;
      case ct:
        x += u * 8 + "UI", g = a ? Math.pow(2, o.BYTES_PER_ELEMENT * 8 - 1) : 1, h = as(r), u === 1 ? (T = Uint8Array, d = lt) : u === 2 ? (T = Uint16Array, d = Zs) : (T = Uint32Array, d = ct);
        break;
    }
    l === 3 && (h === Ct || h === fn) && (l = 4);
    const v = Math.ceil(Math.sqrt(i)) || 1, p = l * v * v, y = new T(p), m = e.normalized;
    e.normalized = !1;
    for (let w = 0; w < i; w++) {
      const A = l * w;
      y[A] = e.getX(w) / g, r >= 2 && (y[A + 1] = e.getY(w) / g), r >= 3 && (y[A + 2] = e.getZ(w) / g, l === 4 && (y[A + 3] = 1)), r >= 4 && (y[A + 3] = e.getW(w) / g);
    }
    e.normalized = m, this.internalFormat = x, this.format = h, this.type = d, this.image.width = v, this.image.height = v, this.image.data = y, this.needsUpdate = !0, this.dispose(), e.itemSize = s, e.count = n;
  }
}
class Gr extends Cs {
  constructor() {
    super(), this._forcedType = ct;
  }
}
class jr extends Cs {
  constructor() {
    super(), this._forcedType = Ee;
  }
}
class Kr {
  constructor() {
    this.index = new Gr(), this.position = new jr(), this.bvhBounds = new un(), this.bvhContents = new un(), this._cachedIndexAttr = null, this.index.overrideItemSize = 3;
  }
  /**
   * Updates the object and associated textures with data from the provided BVH.
   *
   * @param {MeshBVH} bvh
   * @returns {void}
   */
  updateFrom(e) {
    const { geometry: t } = e;
    if (qr(e, this.bvhBounds, this.bvhContents), this.position.updateFrom(t.attributes.position), e.indirect) {
      const s = e._indirectBuffer;
      if (this._cachedIndexAttr === null || this._cachedIndexAttr.count !== s.length)
        if (t.index)
          this._cachedIndexAttr = t.index.clone();
        else {
          const n = Ns(Ht(t));
          this._cachedIndexAttr = new Xe(n, 1, !1);
        }
      Xr(t, s, this._cachedIndexAttr), this.index.updateFrom(this._cachedIndexAttr);
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
function Xr(c, e, t) {
  const s = t.array, n = c.index ? c.index.array : null;
  for (let r = 0, i = e.length; r < i; r++) {
    const a = 3 * r, o = 3 * e[r];
    for (let u = 0; u < 3; u++)
      s[a + u] = n ? n[o + u] : o + u;
  }
}
function qr(c, e, t) {
  const s = c._roots;
  if (s.length !== 1)
    throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");
  const n = s[0], r = new Uint16Array(n), i = new Uint32Array(n), a = new Float32Array(n), o = n.byteLength / q, u = 2 * Math.ceil(Math.sqrt(o / 2)), f = new Float32Array(4 * u * u), l = Math.ceil(Math.sqrt(o)), d = new Uint32Array(2 * l * l);
  for (let h = 0; h < o; h++) {
    const g = h * q / 4, T = g * 2, x = g;
    for (let v = 0; v < 3; v++)
      f[8 * h + 0 + v] = a[x + 0 + v], f[8 * h + 4 + v] = a[x + 3 + v];
    if (j(T, r)) {
      const v = Z(T, r), p = W(g, i), y = Gi | v;
      d[h * 2 + 0] = y, d[h * 2 + 1] = p;
    } else {
      const v = i[g + 6], p = kt(g, i);
      d[h * 2 + 0] = p, d[h * 2 + 1] = v;
    }
  }
  e.image.data = f, e.image.width = u, e.image.height = u, e.format = Ct, e.type = Ee, e.internalFormat = "RGBA32F", e.minFilter = be, e.magFilter = be, e.generateMipmaps = !1, e.needsUpdate = !0, e.dispose(), t.image.data = d, t.image.width = l, t.image.height = l, t.format = _s, t.type = ct, t.internalFormat = "RG32UI", t.minFilter = be, t.magFilter = be, t.generateMipmaps = !1, t.needsUpdate = !0, t.dispose();
}
const Yr = (
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
), $r = (
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
), Wr = (
  /* glsl */
  `
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`
), Jr = Wr, Zr = `
	${Yr}
	${$r}
`, Fs = () => {
  const c = Mn.useContext(Sn);
  if (!c)
    throw new Error("useMainContext must be used within MainContextProvider");
  return c;
}, Qr = (
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
), eo = (
  /* glsl */
  `
  precision highp float;
  precision highp sampler2D;
  precision highp isampler2D;

  ${Jr}
  ${Zr}

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
class to extends F.ShaderMaterial {
  constructor({
    geometry: e,
    bvh: t,
    envMap: s,
    backgroundTexture: n = null,
    resolution: r = new F.Vector2(1024, 768),
    ior: i = 2.4,
    bounces: a = 3,
    aberrationStrength: o = 1e-3,
    fresnel: u = 0.01,
    reflectivity: f = 1,
    color: l = 16777215,
    blur: d = 0.12,
    envRotation: h = 0,
    highlightColor: g = 16777215,
    highlightTolerance: T = 1,
    attenuationColor: x = 16777215,
    attenuationDistance: v = 1
  }) {
    const p = new Kr();
    p.updateFrom(t), super({
      glslVersion: F.GLSL3,
      vertexShader: Qr,
      fragmentShader: eo,
      uniforms: {
        bvh: { value: p },
        tDiffuse: { value: n },
        resolution: { value: r },
        envMap: { value: s },
        uColor: { value: new F.Color(l) },
        uIOR: { value: i },
        uAberration: { value: o },
        uFresnel: { value: u },
        uReflectivity: { value: f },
        uBlur: { value: d },
        uEnvRotation: { value: h },
        uHighlightColor: { value: new F.Color(g) },
        uHighlightTolerance: { value: T },
        uAttenuationColor: { value: new F.Color(x) },
        uAttenuationDistance: { value: v },
        uBounces: { value: a },
        uModelMatrix: { value: new F.Matrix4() },
        uModelMatrixInverse: { value: new F.Matrix4() }
      },
      transparent: !0,
      depthWrite: !0
    }), this.onBeforeRender = (y, m, w, A, b) => {
      this.uniforms.uModelMatrix.value.copy(b.matrixWorld), this.uniforms.uModelMatrixInverse.value.copy(b.matrixWorld).invert();
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
const no = Ut(
  ({ variation: c, diamondEnvMap: e, size: t }) => {
    const { design3DManager: s } = Fs(), { ringManager: n } = s, { colorHex: r, roughness: i, finish: a, showDiamond: o, activeVariation: u } = n, f = u === c, l = n.getModelUrl(c), d = n.getTextureUrls(c), h = Kt(d.aoGold);
    h && (h.flipY = !1);
    const g = Kt(d.aoSilver);
    g && (g.flipY = !1);
    const T = Kt(d.roughness);
    T && (T.flipY = !1);
    const { scene: x } = Xs(l), v = ot(new F.Color(r)), p = ot(i);
    Ae(() => {
      v.current.set(r), p.current = i;
    }, [r, i]);
    const y = ot(
      new F.MeshPhysicalMaterial({
        color: r,
        metalness: 1,
        roughness: i,
        aoMap: h,
        aoMapIntensity: 1,
        roughnessMap: T,
        clearcoat: a === "polished" ? 1 : 0,
        clearcoatRoughness: 0.1
      })
    ), m = ot(
      new F.MeshPhysicalMaterial({
        color: "#f6f5f5",
        metalness: 1,
        roughness: i,
        aoMap: g,
        aoMapIntensity: 0.8,
        roughnessMap: T,
        clearcoat: a === "polished" ? 1 : 0,
        clearcoatRoughness: 0.1
      })
    );
    return Ae(() => {
      y.current.aoMap = h, y.current.roughnessMap = T, y.current.needsUpdate = !0, m.current.aoMap = g, m.current.roughnessMap = T, m.current.needsUpdate = !0;
    }, [h, g, T]), Ys((w, A) => {
      const b = 1 - Math.pow(0.01, A), _ = a === "polished" ? 1 : 0;
      y.current.color.lerp(v.current, b), y.current.roughness = F.MathUtils.lerp(
        y.current.roughness,
        p.current,
        b
      ), y.current.clearcoat = F.MathUtils.lerp(
        y.current.clearcoat,
        _,
        b
      ), y.current.clearcoatRoughness = F.MathUtils.lerp(
        y.current.clearcoatRoughness,
        0.1,
        b
      ), m.current.roughness = F.MathUtils.lerp(
        m.current.roughness,
        p.current,
        b
      ), m.current.clearcoat = F.MathUtils.lerp(
        m.current.clearcoat,
        _,
        b
      ), m.current.clearcoatRoughness = F.MathUtils.lerp(
        m.current.clearcoatRoughness,
        0.1,
        b
      );
    }), zs(() => {
      x.traverse((w) => {
        if (!(w instanceof F.Mesh)) return;
        const A = w;
        if (A.name === "Silver_Metal" && (A.visible = !o, A.material = m.current), A.name === "Silver_Diamond" && (A.visible = o, A.material = m.current), A.name === "Diamond_Mesh" || A.name.includes("Diam_Centr")) {
          if (A.visible = o, o) {
            const b = new Ot(A.geometry, { strategy: 1 });
            A.material = new to({
              geometry: A.geometry,
              bvh: b,
              envMap: e,
              resolution: new F.Vector2(t.width, t.height),
              ior: 2.4,
              bounces: 3,
              aberrationStrength: 5e-4
            });
          }
        } else (A.name.includes("Custom") || A.name === "Gold" || A.name === "Engraving_Mesh") && (A.material = y.current);
      });
    }, [x, y.current, m.current, e, t, o]), /* @__PURE__ */ V.jsx(
      "primitive",
      {
        object: x,
        visible: f,
        rotation: [-Math.PI / 4, -Math.PI / 10, Math.PI / 3]
      }
    );
  }
), Os = Ut(
  ({ diamondEnvPath: c }) => {
    const { design3DManager: e } = Fs(), { ringManager: t } = e, { size: s } = $s(), n = qs({ files: c });
    return /* @__PURE__ */ V.jsx("group", { children: t.variations.map((r) => /* @__PURE__ */ V.jsx(
      no,
      {
        variation: r,
        diamondEnvMap: n,
        size: s
      },
      r
    )) });
  }
);
function cs(c, e) {
  if (e === si)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), c;
  if (e === dn || e === As) {
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
    if (e === dn)
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
class so extends bs {
  /**
   * Constructs a new glTF loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new co(t);
    }), this.register(function(t) {
      return new lo(t);
    }), this.register(function(t) {
      return new To(t);
    }), this.register(function(t) {
      return new wo(t);
    }), this.register(function(t) {
      return new vo(t);
    }), this.register(function(t) {
      return new fo(t);
    }), this.register(function(t) {
      return new ho(t);
    }), this.register(function(t) {
      return new po(t);
    }), this.register(function(t) {
      return new mo(t);
    }), this.register(function(t) {
      return new ao(t);
    }), this.register(function(t) {
      return new go(t);
    }), this.register(function(t) {
      return new uo(t);
    }), this.register(function(t) {
      return new xo(t);
    }), this.register(function(t) {
      return new yo(t);
    }), this.register(function(t) {
      return new ro(t);
    }), this.register(function(t) {
      return new _o(t);
    }), this.register(function(t) {
      return new Ao(t);
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
      const u = ut.extractUrlBase(e);
      i = ut.resolveURL(u, this.path);
    } else
      i = ut.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(u) {
      n ? n(u) : console.error(u), r.manager.itemError(e), r.manager.itemEnd(e);
    }, o = new En(this.manager);
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
      if (o.decode(new Uint8Array(e, 0, 4)) === Us) {
        try {
          i[O.KHR_BINARY_GLTF] = new bo(e);
        } catch (l) {
          n && n(l);
          return;
        }
        r = JSON.parse(i[O.KHR_BINARY_GLTF].content);
      } else
        r = JSON.parse(o.decode(e));
    else
      r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const u = new Oo(r, {
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
          case O.KHR_MATERIALS_UNLIT:
            i[l] = new oo();
            break;
          case O.KHR_DRACO_MESH_COMPRESSION:
            i[l] = new Ro(r, this.dracoLoader);
            break;
          case O.KHR_TEXTURE_TRANSFORM:
            i[l] = new Mo();
            break;
          case O.KHR_MESH_QUANTIZATION:
            i[l] = new Eo();
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
function io() {
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
const O = {
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
class ro {
  constructor(e) {
    this.parser = e, this.name = O.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
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
    const f = new Ne(16777215);
    o.color !== void 0 && f.setRGB(o.color[0], o.color[1], o.color[2], de);
    const l = o.range !== void 0 ? o.range : 0;
    switch (o.type) {
      case "directional":
        u = new oi(f), u.target.position.set(0, 0, -1), u.add(u.target);
        break;
      case "point":
        u = new ri(f), u.distance = l;
        break;
      case "spot":
        u = new ii(f), u.distance = l, o.spot = o.spot || {}, o.spot.innerConeAngle = o.spot.innerConeAngle !== void 0 ? o.spot.innerConeAngle : 0, o.spot.outerConeAngle = o.spot.outerConeAngle !== void 0 ? o.spot.outerConeAngle : Math.PI / 4, u.angle = o.spot.outerConeAngle, u.penumbra = 1 - o.spot.innerConeAngle / o.spot.outerConeAngle, u.target.position.set(0, 0, -1), u.add(u.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + o.type);
    }
    return u.position.set(0, 0, 0), ue(u, o), o.intensity !== void 0 && (u.intensity = o.intensity), u.name = t.createUniqueName(o.name || "light_" + e), n = Promise.resolve(u), t.cache.add(s, n), n;
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
class oo {
  constructor() {
    this.name = O.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return at;
  }
  extendParams(e, t, s) {
    const n = [];
    e.color = new Ne(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const i = r.baseColorFactor;
        e.color.setRGB(i[0], i[1], i[2], de), e.opacity = i[3];
      }
      r.baseColorTexture !== void 0 && n.push(s.assignTexture(e, "map", r.baseColorTexture, dt));
    }
    return Promise.all(n);
  }
}
class ao {
  constructor(e) {
    this.parser = e, this.name = O.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = n.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class co {
  constructor(e) {
    this.parser = e, this.name = O.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : he;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    if (i.clearcoatFactor !== void 0 && (t.clearcoat = i.clearcoatFactor), i.clearcoatTexture !== void 0 && r.push(s.assignTexture(t, "clearcoatMap", i.clearcoatTexture)), i.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = i.clearcoatRoughnessFactor), i.clearcoatRoughnessTexture !== void 0 && r.push(s.assignTexture(t, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), i.clearcoatNormalTexture !== void 0 && (r.push(s.assignTexture(t, "clearcoatNormalMap", i.clearcoatNormalTexture)), i.clearcoatNormalTexture.scale !== void 0)) {
      const a = i.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new fe(a, a);
    }
    return Promise.all(r);
  }
}
class lo {
  constructor(e) {
    this.parser = e, this.name = O.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : he;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = n.extensions[this.name];
    return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class uo {
  constructor(e) {
    this.parser = e, this.name = O.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : he;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    return i.iridescenceFactor !== void 0 && (t.iridescence = i.iridescenceFactor), i.iridescenceTexture !== void 0 && r.push(s.assignTexture(t, "iridescenceMap", i.iridescenceTexture)), i.iridescenceIor !== void 0 && (t.iridescenceIOR = i.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), i.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = i.iridescenceThicknessMinimum), i.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = i.iridescenceThicknessMaximum), i.iridescenceThicknessTexture !== void 0 && r.push(s.assignTexture(t, "iridescenceThicknessMap", i.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class fo {
  constructor(e) {
    this.parser = e, this.name = O.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : he;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [];
    t.sheenColor = new Ne(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const i = n.extensions[this.name];
    if (i.sheenColorFactor !== void 0) {
      const a = i.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], de);
    }
    return i.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = i.sheenRoughnessFactor), i.sheenColorTexture !== void 0 && r.push(s.assignTexture(t, "sheenColorMap", i.sheenColorTexture, dt)), i.sheenRoughnessTexture !== void 0 && r.push(s.assignTexture(t, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(r);
  }
}
class ho {
  constructor(e) {
    this.parser = e, this.name = O.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : he;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    return i.transmissionFactor !== void 0 && (t.transmission = i.transmissionFactor), i.transmissionTexture !== void 0 && r.push(s.assignTexture(t, "transmissionMap", i.transmissionTexture)), Promise.all(r);
  }
}
class po {
  constructor(e) {
    this.parser = e, this.name = O.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : he;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    t.thickness = i.thicknessFactor !== void 0 ? i.thicknessFactor : 0, i.thicknessTexture !== void 0 && r.push(s.assignTexture(t, "thicknessMap", i.thicknessTexture)), t.attenuationDistance = i.attenuationDistance || 1 / 0;
    const a = i.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Ne().setRGB(a[0], a[1], a[2], de), Promise.all(r);
  }
}
class mo {
  constructor(e) {
    this.parser = e, this.name = O.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : he;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = n.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class go {
  constructor(e) {
    this.parser = e, this.name = O.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : he;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    t.specularIntensity = i.specularFactor !== void 0 ? i.specularFactor : 1, i.specularTexture !== void 0 && r.push(s.assignTexture(t, "specularIntensityMap", i.specularTexture));
    const a = i.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Ne().setRGB(a[0], a[1], a[2], de), i.specularColorTexture !== void 0 && r.push(s.assignTexture(t, "specularColorMap", i.specularColorTexture, dt)), Promise.all(r);
  }
}
class yo {
  constructor(e) {
    this.parser = e, this.name = O.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : he;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    return t.bumpScale = i.bumpFactor !== void 0 ? i.bumpFactor : 1, i.bumpTexture !== void 0 && r.push(s.assignTexture(t, "bumpMap", i.bumpTexture)), Promise.all(r);
  }
}
class xo {
  constructor(e) {
    this.parser = e, this.name = O.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : he;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const r = [], i = n.extensions[this.name];
    return i.anisotropyStrength !== void 0 && (t.anisotropy = i.anisotropyStrength), i.anisotropyRotation !== void 0 && (t.anisotropyRotation = i.anisotropyRotation), i.anisotropyTexture !== void 0 && r.push(s.assignTexture(t, "anisotropyMap", i.anisotropyTexture)), Promise.all(r);
  }
}
class To {
  constructor(e) {
    this.parser = e, this.name = O.KHR_TEXTURE_BASISU;
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
class wo {
  constructor(e) {
    this.parser = e, this.name = O.EXT_TEXTURE_WEBP;
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
class vo {
  constructor(e) {
    this.parser = e, this.name = O.EXT_TEXTURE_AVIF;
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
class _o {
  constructor(e) {
    this.name = O.EXT_MESHOPT_COMPRESSION, this.parser = e;
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
class Ao {
  constructor(e) {
    this.name = O.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, s = t.nodes[e];
    if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0)
      return null;
    const n = t.meshes[s.mesh];
    for (const u of n.primitives)
      if (u.mode !== ne.TRIANGLES && u.mode !== ne.TRIANGLE_STRIP && u.mode !== ne.TRIANGLE_FAN && u.mode !== void 0)
        return null;
    const i = s.extensions[this.name].attributes, a = [], o = {};
    for (const u in i)
      a.push(this.parser.getDependency("accessor", i[u]).then((f) => (o[u] = f, o[u])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((u) => {
      const f = u.pop(), l = f.isGroup ? f.children : [f], d = u[0].count, h = [];
      for (const g of l) {
        const T = new ie(), x = new L(), v = new Rs(), p = new L(1, 1, 1), y = new ai(g.geometry, g.material, d);
        for (let m = 0; m < d; m++)
          o.TRANSLATION && x.fromBufferAttribute(o.TRANSLATION, m), o.ROTATION && v.fromBufferAttribute(o.ROTATION, m), o.SCALE && p.fromBufferAttribute(o.SCALE, m), y.setMatrixAt(m, T.compose(x, v, p));
        for (const m in o)
          if (m === "_COLOR_0") {
            const w = o[m];
            y.instanceColor = new ci(w.array, w.itemSize, w.normalized);
          } else m !== "TRANSLATION" && m !== "ROTATION" && m !== "SCALE" && g.geometry.setAttribute(m, o[m]);
        Ms.prototype.copy.call(y, g), this.parser.assignFinalMaterial(y), h.push(y);
      }
      return f.isGroup ? (f.clear(), f.add(...h), f) : h[0];
    }));
  }
}
const Us = "glTF", rt = 12, ls = { JSON: 1313821514, BIN: 5130562 };
class bo {
  constructor(e) {
    this.name = O.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, rt), s = new TextDecoder();
    if (this.header = {
      magic: s.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Us)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - rt, r = new DataView(e, rt);
    let i = 0;
    for (; i < n; ) {
      const a = r.getUint32(i, !0);
      i += 4;
      const o = r.getUint32(i, !0);
      if (i += 4, o === ls.JSON) {
        const u = new Uint8Array(e, rt + i, a);
        this.content = s.decode(u);
      } else if (o === ls.BIN) {
        const u = rt + i;
        this.body = e.slice(u, u + a);
      }
      i += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Ro {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = O.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const s = this.json, n = this.dracoLoader, r = e.extensions[this.name].bufferView, i = e.extensions[this.name].attributes, a = {}, o = {}, u = {};
    for (const f in i) {
      const l = bn[f] || f.toLowerCase();
      a[l] = i[f];
    }
    for (const f in e.attributes) {
      const l = bn[f] || f.toLowerCase();
      if (i[f] !== void 0) {
        const d = s.accessors[e.attributes[f]], h = qe[d.componentType];
        u[l] = h.name, o[l] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(f) {
      return new Promise(function(l, d) {
        n.decodeDracoFile(f, function(h) {
          for (const g in h.attributes) {
            const T = h.attributes[g], x = o[g];
            x !== void 0 && (T.normalized = x);
          }
          l(h);
        }, a, u, de, d);
      });
    });
  }
}
class Mo {
  constructor() {
    this.name = O.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class Eo {
  constructor() {
    this.name = O.KHR_MESH_QUANTIZATION;
  }
}
class ks extends Ni {
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
    const r = this.resultBuffer, i = this.sampleValues, a = this.valueSize, o = a * 2, u = a * 3, f = n - t, l = (s - t) / f, d = l * l, h = d * l, g = e * u, T = g - u, x = -2 * h + 3 * d, v = h - d, p = 1 - x, y = v - d + l;
    for (let m = 0; m !== a; m++) {
      const w = i[T + m + a], A = i[T + m + o] * f, b = i[g + m + a], _ = i[g + m] * f;
      r[m] = p * w + y * A + x * b + v * _;
    }
    return r;
  }
}
const So = new Rs();
class Io extends ks {
  interpolate_(e, t, s, n) {
    const r = super.interpolate_(e, t, s, n);
    return So.fromArray(r).normalize().toArray(r), r;
  }
}
const ne = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, qe = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, us = {
  9728: be,
  9729: Ce,
  9984: mi,
  9985: pi,
  9986: hi,
  9987: Es
}, fs = {
  33071: Dt,
  33648: gi,
  10497: hn
}, on = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, bn = {
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
}, ve = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Po = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Is,
  STEP: Li
}, an = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Do(c) {
  return c.DefaultMaterial === void 0 && (c.DefaultMaterial = new Ss({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: ln
  })), c.DefaultMaterial;
}
function Le(c, e, t) {
  for (const s in t.extensions)
    c[s] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[s] = t.extensions[s]);
}
function ue(c, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(c.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Bo(c, e, t) {
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
function Lo(c, e) {
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
function No(c) {
  let e;
  const t = c.extensions && c.extensions[O.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + cn(t.attributes) : e = c.indices + ":" + cn(c.attributes) + ":" + c.mode, c.targets !== void 0)
    for (let s = 0, n = c.targets.length; s < n; s++)
      e += ":" + cn(c.targets[s]);
  return e;
}
function cn(c) {
  let e = "";
  const t = Object.keys(c).sort();
  for (let s = 0, n = t.length; s < n; s++)
    e += t[s] + ":" + c[t[s]] + ";";
  return e;
}
function Rn(c) {
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
function Co(c) {
  return c.search(/\.jpe?g($|\?)/i) > 0 || c.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : c.search(/\.webp($|\?)/i) > 0 || c.search(/^data\:image\/webp/) === 0 ? "image/webp" : c.search(/\.ktx2($|\?)/i) > 0 || c.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const Fo = new ie();
class Oo {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new io(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = !1, n = -1, r = !1, i = -1;
    if (typeof navigator < "u") {
      const a = navigator.userAgent;
      s = /^((?!chrome|android).)*safari/i.test(a) === !0;
      const o = a.match(/Version\/(\d+)/);
      n = s && o ? parseInt(o[1], 10) : -1, r = a.indexOf("Firefox") > -1, i = r ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || s && n < 17 || r && i < 98 ? this.textureLoader = new li(this.options.manager) : this.textureLoader = new ui(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new En(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
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
      return Le(r, a, n), ue(a, n), Promise.all(s._invokeAll(function(o) {
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
      return Promise.resolve(this.extensions[O.KHR_BINARY_GLTF].body);
    const n = this.options;
    return new Promise(function(r, i) {
      s.load(ut.resolveURL(t.uri, n.path), r, void 0, function() {
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
      const i = on[n.type], a = qe[n.componentType], o = n.normalized === !0, u = new a(n.count * i);
      return Promise.resolve(new Xe(u, i, o));
    }
    const r = [];
    return n.bufferView !== void 0 ? r.push(this.getDependency("bufferView", n.bufferView)) : r.push(null), n.sparse !== void 0 && (r.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(r).then(function(i) {
      const a = i[0], o = on[n.type], u = qe[n.componentType], f = u.BYTES_PER_ELEMENT, l = f * o, d = n.byteOffset || 0, h = n.bufferView !== void 0 ? s.bufferViews[n.bufferView].byteStride : void 0, g = n.normalized === !0;
      let T, x;
      if (h && h !== l) {
        const v = Math.floor(d / h), p = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + v + ":" + n.count;
        let y = t.cache.get(p);
        y || (T = new u(a, v * h, n.count * h / f), y = new fi(T, h / f), t.cache.add(p, y)), x = new di(y, o, d % h / f, g);
      } else
        a === null ? T = new u(n.count * o) : T = new u(a, d, n.count * o), x = new Xe(T, o, g);
      if (n.sparse !== void 0) {
        const v = on.SCALAR, p = qe[n.sparse.indices.componentType], y = n.sparse.indices.byteOffset || 0, m = n.sparse.values.byteOffset || 0, w = new p(i[1], y, n.sparse.count * v), A = new u(i[2], m, n.sparse.count * o);
        a !== null && (x = new Xe(x.array.slice(), x.itemSize, x.normalized)), x.normalized = !1;
        for (let b = 0, _ = w.length; b < _; b++) {
          const E = w[b];
          if (x.setX(E, A[b * o]), o >= 2 && x.setY(E, A[b * o + 1]), o >= 3 && x.setZ(E, A[b * o + 2]), o >= 4 && x.setW(E, A[b * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        x.normalized = g;
      }
      return x;
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
      return f.magFilter = us[d.magFilter] || Ce, f.minFilter = us[d.minFilter] || Es, f.wrapS = fs[d.wrapS] || hn, f.wrapT = fs[d.wrapT] || hn, f.generateMipmaps = !f.isCompressedTexture && f.minFilter !== be && f.minFilter !== Ce, n.associations.set(f, { textures: e }), f;
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
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(T) {
          const x = new Nn(T);
          x.needsUpdate = !0, d(x);
        }), t.load(ut.resolveURL(l, r.path), g, void 0, h);
      });
    }).then(function(l) {
      return u === !0 && a.revokeObjectURL(o), ue(l, i), l.userData.mimeType = i.mimeType || Co(i.uri), l;
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
      if (s.texCoord !== void 0 && s.texCoord > 0 && (i = i.clone(), i.channel = s.texCoord), r.extensions[O.KHR_TEXTURE_TRANSFORM]) {
        const a = s.extensions !== void 0 ? s.extensions[O.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const o = r.associations.get(i);
          i = r.extensions[O.KHR_TEXTURE_TRANSFORM].extendTexture(i, a), r.associations.set(i, o);
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
      o || (o = new yi(), qt.prototype.copy.call(o, s), o.color.copy(s.color), o.map = s.map, o.sizeAttenuation = !1, this.cache.add(a, o)), s = o;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + s.uuid;
      let o = this.cache.get(a);
      o || (o = new xi(), qt.prototype.copy.call(o, s), o.color.copy(s.color), o.map = s.map, this.cache.add(a, o)), s = o;
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
    return Ss;
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
    if (o[O.KHR_MATERIALS_UNLIT]) {
      const l = n[O.KHR_MATERIALS_UNLIT];
      i = l.getMaterialType(), u.push(l.extendParams(a, r, t));
    } else {
      const l = r.pbrMetallicRoughness || {};
      if (a.color = new Ne(1, 1, 1), a.opacity = 1, Array.isArray(l.baseColorFactor)) {
        const d = l.baseColorFactor;
        a.color.setRGB(d[0], d[1], d[2], de), a.opacity = d[3];
      }
      l.baseColorTexture !== void 0 && u.push(t.assignTexture(a, "map", l.baseColorTexture, dt)), a.metalness = l.metallicFactor !== void 0 ? l.metallicFactor : 1, a.roughness = l.roughnessFactor !== void 0 ? l.roughnessFactor : 1, l.metallicRoughnessTexture !== void 0 && (u.push(t.assignTexture(a, "metalnessMap", l.metallicRoughnessTexture)), u.push(t.assignTexture(a, "roughnessMap", l.metallicRoughnessTexture))), i = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), u.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === !0 && (a.side = ws);
    const f = r.alphaMode || an.OPAQUE;
    if (f === an.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, f === an.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && i !== at && (u.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new fe(1, 1), r.normalTexture.scale !== void 0)) {
      const l = r.normalTexture.scale;
      a.normalScale.set(l, l);
    }
    if (r.occlusionTexture !== void 0 && i !== at && (u.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && i !== at) {
      const l = r.emissiveFactor;
      a.emissive = new Ne().setRGB(l[0], l[1], l[2], de);
    }
    return r.emissiveTexture !== void 0 && i !== at && u.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, dt)), Promise.all(u).then(function() {
      const l = new i(a);
      return r.name && (l.name = r.name), ue(l, r), t.associations.set(l, { materials: e }), r.extensions && Le(n, l, r), l;
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
    const t = Ti.sanitizeNodeName(e || "");
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
      return s[O.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(o) {
        return ds(o, a, t);
      });
    }
    const i = [];
    for (let a = 0, o = e.length; a < o; a++) {
      const u = e[a], f = No(u), l = n[f];
      if (l)
        i.push(l.promise);
      else {
        let d;
        u.extensions && u.extensions[O.KHR_DRACO_MESH_COMPRESSION] ? d = r(u) : d = ds(new wi(), u, t), n[f] = { primitive: u, promise: d }, i.push(d);
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
      const f = i[o].material === void 0 ? Do(this.cache) : this.getDependency("material", i[o].material);
      a.push(f);
    }
    return a.push(t.loadGeometries(i)), Promise.all(a).then(function(o) {
      const u = o.slice(0, o.length - 1), f = o[o.length - 1], l = [];
      for (let h = 0, g = f.length; h < g; h++) {
        const T = f[h], x = i[h];
        let v;
        const p = u[h];
        if (x.mode === ne.TRIANGLES || x.mode === ne.TRIANGLE_STRIP || x.mode === ne.TRIANGLE_FAN || x.mode === void 0)
          v = r.isSkinnedMesh === !0 ? new vi(T, p) : new _i(T, p), v.isSkinnedMesh === !0 && v.normalizeSkinWeights(), x.mode === ne.TRIANGLE_STRIP ? v.geometry = cs(v.geometry, As) : x.mode === ne.TRIANGLE_FAN && (v.geometry = cs(v.geometry, dn));
        else if (x.mode === ne.LINES)
          v = new Ai(T, p);
        else if (x.mode === ne.LINE_STRIP)
          v = new bi(T, p);
        else if (x.mode === ne.LINE_LOOP)
          v = new Ri(T, p);
        else if (x.mode === ne.POINTS)
          v = new Mi(T, p);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + x.mode);
        Object.keys(v.geometry.morphAttributes).length > 0 && Lo(v, r), v.name = t.createUniqueName(r.name || "mesh_" + e), ue(v, r), x.extensions && Le(n, v, x), t.assignFinalMaterial(v), l.push(v);
      }
      for (let h = 0, g = l.length; h < g; h++)
        t.associations.set(l[h], {
          meshes: e,
          primitives: h
        });
      if (l.length === 1)
        return r.extensions && Le(n, l[0], r), l[0];
      const d = new Yt();
      r.extensions && Le(n, d, r), t.associations.set(d, { meshes: e });
      for (let h = 0, g = l.length; h < g; h++)
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
    return s.type === "perspective" ? t = new Ei(Si.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : s.type === "orthographic" && (t = new Ii(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), ue(t, s), Promise.resolve(t);
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
          const d = new ie();
          r !== null && d.fromArray(r.array, u * 16), o.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[u]);
      }
      return new Pi(a, o);
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
      const h = n.channels[l], g = n.samplers[h.sampler], T = h.target, x = T.node, v = n.parameters !== void 0 ? n.parameters[g.input] : g.input, p = n.parameters !== void 0 ? n.parameters[g.output] : g.output;
      T.node !== void 0 && (i.push(this.getDependency("node", x)), a.push(this.getDependency("accessor", v)), o.push(this.getDependency("accessor", p)), u.push(g), f.push(T));
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(a),
      Promise.all(o),
      Promise.all(u),
      Promise.all(f)
    ]).then(function(l) {
      const d = l[0], h = l[1], g = l[2], T = l[3], x = l[4], v = [];
      for (let y = 0, m = d.length; y < m; y++) {
        const w = d[y], A = h[y], b = g[y], _ = T[y], E = x[y];
        if (w === void 0) continue;
        w.updateMatrix && w.updateMatrix();
        const R = s._createAnimationTracks(w, A, b, _, E);
        if (R)
          for (let S = 0; S < R.length; S++)
            v.push(R[S]);
      }
      const p = new Di(r, void 0, v);
      return ue(p, n), p;
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
        h.isSkinnedMesh && h.bind(d, Fo);
      });
      for (let h = 0, g = l.length; h < g; h++)
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
      if (r.isBone === !0 ? f = new Bi() : u.length > 1 ? f = new Yt() : u.length === 1 ? f = u[0] : f = new Ms(), f !== u[0])
        for (let l = 0, d = u.length; l < d; l++)
          f.add(u[l]);
      if (r.name && (f.userData.name = r.name, f.name = i), ue(f, r), r.extensions && Le(s, f, r), r.matrix !== void 0) {
        const l = new ie();
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
    const t = this.extensions, s = this.json.scenes[e], n = this, r = new Yt();
    s.name && (r.name = n.createUniqueName(s.name)), ue(r, s), s.extensions && Le(t, r, s);
    const i = s.nodes || [], a = [];
    for (let o = 0, u = i.length; o < u; o++)
      a.push(n.getDependency("node", i[o]));
    return Promise.all(a).then(function(o) {
      for (let f = 0, l = o.length; f < l; f++)
        r.add(o[f]);
      const u = (f) => {
        const l = /* @__PURE__ */ new Map();
        for (const [d, h] of n.associations)
          (d instanceof qt || d instanceof Nn) && l.set(d, h);
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
    ve[r.path] === ve.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && o.push(d.name ? d.name : d.uuid);
    }) : o.push(a);
    let u;
    switch (ve[r.path]) {
      case ve.weights:
        u = Fn;
        break;
      case ve.rotation:
        u = On;
        break;
      case ve.translation:
      case ve.scale:
        u = Cn;
        break;
      default:
        s.itemSize === 1 ? u = Fn : u = Cn;
        break;
    }
    const f = n.interpolation !== void 0 ? Po[n.interpolation] : Is, l = this._getArrayFromAccessor(s);
    for (let d = 0, h = o.length; d < h; d++) {
      const g = new u(
        o[d] + "." + ve[r.path],
        t.array,
        l,
        f
      );
      n.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), i.push(g);
    }
    return i;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const s = Rn(t.constructor), n = new Float32Array(t.length);
      for (let r = 0, i = t.length; r < i; r++)
        n[r] = t[r] * s;
      t = n;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(s) {
      const n = this instanceof On ? Io : ks;
      return new n(this.times, this.values, this.getValueSize() / 3, s);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Uo(c, e, t) {
  const s = e.attributes, n = new le();
  if (s.POSITION !== void 0) {
    const a = t.json.accessors[s.POSITION], o = a.min, u = a.max;
    if (o !== void 0 && u !== void 0) {
      if (n.set(
        new L(o[0], o[1], o[2]),
        new L(u[0], u[1], u[2])
      ), a.normalized) {
        const f = Rn(qe[a.componentType]);
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
    const a = new L(), o = new L();
    for (let u = 0, f = r.length; u < f; u++) {
      const l = r[u];
      if (l.POSITION !== void 0) {
        const d = t.json.accessors[l.POSITION], h = d.min, g = d.max;
        if (h !== void 0 && g !== void 0) {
          if (o.setX(Math.max(Math.abs(h[0]), Math.abs(g[0]))), o.setY(Math.max(Math.abs(h[1]), Math.abs(g[1]))), o.setZ(Math.max(Math.abs(h[2]), Math.abs(g[2]))), d.normalized) {
            const T = Rn(qe[d.componentType]);
            o.multiplyScalar(T);
          }
          a.max(o);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    n.expandByVector(a);
  }
  c.boundingBox = n;
  const i = new Ci();
  n.getCenter(i.center), i.radius = n.min.distanceTo(n.max) / 2, c.boundingSphere = i;
}
function ds(c, e, t) {
  const s = e.attributes, n = [];
  function r(i, a) {
    return t.getDependency("accessor", i).then(function(o) {
      c.setAttribute(a, o);
    });
  }
  for (const i in s) {
    const a = bn[i] || i.toLowerCase();
    a in c.attributes || n.push(r(s[i], a));
  }
  if (e.indices !== void 0 && !c.index) {
    const i = t.getDependency("accessor", e.indices).then(function(a) {
      c.setIndex(a);
    });
    n.push(i);
  }
  return Un.workingColorSpace !== de && "COLOR_0" in s && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Un.workingColorSpace}" not supported.`), ue(c, e), Uo(c, e, t), Promise.all(n).then(function() {
    return e.targets !== void 0 ? Bo(c, e.targets, t) : c;
  });
}
class ko extends bs {
  /**
   * Constructs a new Cube LUT loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.type = lt;
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
    const r = new En(this.manager);
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
    const u = Number(a[1]), f = u ** 3 * 4, l = this.type === lt ? new Uint8Array(f) : new Float32Array(f), d = new L(0, 0, 0), h = new L(1, 1, 1);
    if (a = n.exec(e), a !== null && d.set(Number(a[1]), Number(a[2]), Number(a[3])), a = r.exec(e), a !== null && h.set(Number(a[1]), Number(a[2]), Number(a[3])), d.x > h.x || d.y > h.y || d.z > h.z)
      throw new Error("LUTCubeLoader: Invalid input domain");
    const g = this.type === lt ? 255 : 1;
    let T = 0;
    for (; (a = i.exec(e)) !== null; )
      l[T++] = Number(a[1]) * g, l[T++] = Number(a[2]) * g, l[T++] = Number(a[3]) * g, l[T++] = g;
    const x = new Fi();
    return x.image.data = l, x.image.width = u, x.image.height = u, x.image.depth = u, x.type = this.type, x.magFilter = Ce, x.minFilter = Ce, x.wrapS = Dt, x.wrapT = Dt, x.wrapR = Dt, x.generateMipmaps = !1, x.needsUpdate = !0, {
      title: o,
      size: u,
      domainMin: d,
      domainMax: h,
      texture3D: x
    };
  }
}
class Ho extends Oi {
  /**
      * Constructs a new RGBE/HDR loader.
      *
      * @param {LoadingManager} [manager] - The loading manager.
      */
  constructor(e) {
    super(e), this.type = ht;
  }
  /**
      * Parses the given RGBE texture data.
      *
      * @param {ArrayBuffer} buffer - The raw texture data.
      * @return {DataTextureLoader~TexData} An object representing the parsed texture data.
      */
  parse(e) {
    const i = function(_, E) {
      switch (_) {
        case 1:
          throw new Error("THREE.HDRLoader: Read Error: " + (E || ""));
        case 2:
          throw new Error("THREE.HDRLoader: Write Error: " + (E || ""));
        case 3:
          throw new Error("THREE.HDRLoader: Bad File Format: " + (E || ""));
        default:
        case 4:
          throw new Error("THREE.HDRLoader: Memory Error: " + (E || ""));
      }
    }, l = function(_, E, R) {
      E = E || 1024;
      let M = _.pos, P = -1, D = 0, B = "", C = String.fromCharCode.apply(null, new Uint16Array(_.subarray(M, M + 128)));
      for (; 0 > (P = C.indexOf(`
`)) && D < E && M < _.byteLength; )
        B += C, D += C.length, M += 128, C += String.fromCharCode.apply(null, new Uint16Array(_.subarray(M, M + 128)));
      return -1 < P ? (_.pos += D + P + 1, B + C.slice(0, P)) : !1;
    }, d = function(_) {
      const E = /^#\?(\S+)/, R = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, S = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, M = /^\s*FORMAT=(\S+)\s*$/, P = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, D = {
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
      let B, C;
      for ((_.pos >= _.byteLength || !(B = l(_))) && i(1, "no header found"), (C = B.match(E)) || i(3, "bad initial token"), D.valid |= 1, D.programtype = C[1], D.string += B + `
`; B = l(_), B !== !1; ) {
        if (D.string += B + `
`, B.charAt(0) === "#") {
          D.comments += B + `
`;
          continue;
        }
        if ((C = B.match(R)) && (D.gamma = parseFloat(C[1])), (C = B.match(S)) && (D.exposure = parseFloat(C[1])), (C = B.match(M)) && (D.valid |= 2, D.format = C[1]), (C = B.match(P)) && (D.valid |= 4, D.height = parseInt(C[1], 10), D.width = parseInt(C[2], 10)), D.valid & 2 && D.valid & 4) break;
      }
      return D.valid & 2 || i(3, "missing format specifier"), D.valid & 4 || i(3, "missing image size specifier"), D;
    }, h = function(_, E, R) {
      const S = E;
      if (
        // run length encoding is not allowed so read flat
        S < 8 || S > 32767 || // this file is not run length encoded
        _[0] !== 2 || _[1] !== 2 || _[2] & 128
      )
        return new Uint8Array(_);
      S !== (_[2] << 8 | _[3]) && i(3, "wrong scanline width");
      const M = new Uint8Array(4 * E * R);
      M.length || i(4, "unable to allocate buffer space");
      let P = 0, D = 0;
      const B = 4 * S, C = new Uint8Array(4), ee = new Uint8Array(B);
      let xe = R;
      for (; xe > 0 && D < _.byteLength; ) {
        D + 4 > _.byteLength && i(1), C[0] = _[D++], C[1] = _[D++], C[2] = _[D++], C[3] = _[D++], (C[0] != 2 || C[1] != 2 || (C[2] << 8 | C[3]) != S) && i(3, "bad rgbe scanline format");
        let re = 0, J;
        for (; re < B && D < _.byteLength; ) {
          J = _[D++];
          const N = J > 128;
          if (N && (J -= 128), (J === 0 || re + J > B) && i(3, "bad scanline data"), N) {
            const U = _[D++];
            for (let H = 0; H < J; H++)
              ee[re++] = U;
          } else
            ee.set(_.subarray(D, D + J), re), re += J, D += J;
        }
        const I = S;
        for (let N = 0; N < I; N++) {
          let U = 0;
          M[P] = ee[N + U], U += S, M[P + 1] = ee[N + U], U += S, M[P + 2] = ee[N + U], U += S, M[P + 3] = ee[N + U], P += 4;
        }
        xe--;
      }
      return M;
    }, g = function(_, E, R, S) {
      const M = _[E + 3], P = Math.pow(2, M - 128) / 255;
      R[S + 0] = _[E + 0] * P, R[S + 1] = _[E + 1] * P, R[S + 2] = _[E + 2] * P, R[S + 3] = 1;
    }, T = function(_, E, R, S) {
      const M = _[E + 3], P = Math.pow(2, M - 128) / 255;
      R[S + 0] = pt.toHalfFloat(Math.min(_[E + 0] * P, 65504)), R[S + 1] = pt.toHalfFloat(Math.min(_[E + 1] * P, 65504)), R[S + 2] = pt.toHalfFloat(Math.min(_[E + 2] * P, 65504)), R[S + 3] = pt.toHalfFloat(1);
    }, x = new Uint8Array(e);
    x.pos = 0;
    const v = d(x), p = v.width, y = v.height, m = h(x.subarray(x.pos), p, y);
    let w, A, b;
    switch (this.type) {
      case Ee:
        b = m.length / 4;
        const _ = new Float32Array(b * 4);
        for (let R = 0; R < b; R++)
          g(m, R * 4, _, R * 4);
        w = _, A = Ee;
        break;
      case ht:
        b = m.length / 4;
        const E = new Uint16Array(b * 4);
        for (let R = 0; R < b; R++)
          T(m, R * 4, E, R * 4);
        w = E, A = ht;
        break;
      default:
        throw new Error("THREE.HDRLoader: Unsupported type: " + this.type);
    }
    return {
      width: p,
      height: y,
      data: w,
      header: v.string,
      gamma: v.gamma,
      exposure: v.exposure,
      type: A
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
        case Ee:
        case ht:
          i.colorSpace = de, i.minFilter = Ce, i.magFilter = Ce, i.generateMipmaps = !1, i.flipY = !0;
          break;
      }
      t && t(i, a);
    }
    return super.load(e, r, s, n);
  }
}
class Vo extends Ho {
  constructor(e) {
    console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."), super(e);
  }
}
class Nt {
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
class Me {
  static gltfLoader = new so();
  static loadGLTF = (e) => new Promise((t, s) => {
    if (!e)
      return t(new F.Group());
    Me.gltfLoader.load(
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
    const t = URL.createObjectURL(e), s = new Vo();
    try {
      const n = await s.loadAsync(t);
      return n.mapping = F.EquirectangularReflectionMapping, URL.revokeObjectURL(t), n;
    } catch (n) {
      throw URL.revokeObjectURL(t), Nt.error(`Error loading environment map: ${n}`), n;
    }
  }
  static loadNodeMapForGLTF = async (e) => {
    const t = await Me.loadGLTF(e), s = {};
    return t.traverse((n) => {
      n instanceof F.Mesh && (s[n.name] = n);
    }), s;
  };
  static loadTexture = async (e) => await new F.TextureLoader().loadAsync(e);
  static loadLut = async (e) => await new ko().loadAsync(e);
  static getImageUrlFromTexture(e) {
    const t = document.createElement("canvas");
    t.width = 2e3, t.height = 2e3;
    const s = e.repeat ?? new F.Vector2(1, 1), n = t.getContext("2d", { willReadFrequently: !0 });
    if (!n)
      return Nt.error("Failed to get 2D context"), null;
    const r = n.createPattern(
      e.image,
      "repeat"
    );
    if (r)
      n.fillStyle = r, n.save(), n.scale(1 / s.x, 1 / s.y), n.fillRect(0, 0, t.width * s.x, t.height * s.y), n.restore();
    else
      return Nt.error("Failed to create pattern"), null;
    return t.toDataURL();
  }
  static getBoundingBox = (e) => {
    const t = new F.Box3();
    return e.forEach((s) => {
      t.expandByObject(s);
    }), t;
  };
  static getCenterPointAndNormal = (e) => {
    const t = e.geometry, s = t.attributes.position, n = t.attributes.normal, r = t.attributes.uv, i = e.matrixWorld;
    if (!s || !n || !r)
      return {
        center: Me.getBoundingBox([e]).getCenter(new F.Vector3()),
        normal: new F.Vector3(0, 0, 1),
        uv: new F.Vector2(0.5, 0.5)
      };
    const a = new F.Vector3(0, 0, 0), o = s.count;
    for (let g = 0; g < o; g++) {
      const T = new F.Vector3().fromBufferAttribute(s, g).applyMatrix4(i);
      a.add(T);
    }
    a.divideScalar(o);
    let u = 1 / 0, f = 0;
    for (let g = 0; g < o; g++) {
      const x = new F.Vector3().fromBufferAttribute(s, g).applyMatrix4(i).distanceTo(a);
      x < u && (u = x, f = g);
    }
    const l = new F.Vector3().fromBufferAttribute(n, f).applyMatrix4(i), d = new F.Vector3().fromBufferAttribute(s, f).applyMatrix4(i), h = new F.Vector2().fromBufferAttribute(r, f);
    return {
      center: d,
      normal: l,
      uv: h
    };
  };
  static getSizeAndCenter = (e) => {
    const t = Me.getBoundingBox([e]), s = t.getSize(new F.Vector3()), n = t.getCenter(new F.Vector3());
    return {
      boundingBox: t,
      center: n,
      size: s
    };
  };
}
class zo {
  _libState;
  _cameraRef = null;
  constructor(e) {
    this._libState = e, Ie(this);
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
  focusCameraTo = (e) => {
    const t = Array.isArray(e) ? e[e.length - 1] : e, s = -1, { boundingBox: n, center: r } = Me.getSizeAndCenter(t);
    if (t instanceof F.Mesh) {
      const { center: i } = Me.getCenterPointAndNormal(
        t
      ), a = Math.abs(i.x);
      this._cameraRef?.setLookAt(
        r.x,
        r.y,
        r.z,
        a,
        i.y,
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
    this._cameraRef?.fitToBox(n, !0);
  };
  dispose() {
    this._cameraRef = null;
  }
}
class Go {
  _envVisibility = !1;
  _envIntensity = 1.6;
  _envRotation = {
    x: 0,
    y: 0,
    z: 1.5
  };
  _environmentTexture = null;
  constructor() {
    Ie(this);
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
      const t = await Me.loadEnvironmentTexture(e);
      this.setEnvironmentTexture(t);
    } catch (t) {
      Nt.error(`Failed to load environment: ${t}`);
    }
  }
  clearMap = (e) => {
    e === "envMap" && (this._envVisibility = !1, this._envIntensity = 1.6, this._envRotation = { x: 0, y: 0, z: 1.5 }, this._environmentTexture = null);
  };
  dispose() {
    this.clearMap("envMap");
  }
}
class jo {
  _libState;
  _meshInfos = [];
  _groupRef = null;
  constructor(e) {
    this._libState = e, Ie(this);
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
class Ko {
  collection = "";
  modelId = "";
  variations = [];
  activeVariation = "";
  colorHex = "#f2bd61";
  finish = "polished";
  showDiamond = !0;
  constructor() {
    Ie(this);
  }
  get roughness() {
    return this.finish === "polished" ? 0.2 : 0.75;
  }
  initModel(e, t, s) {
    this.collection = e, this.modelId = t, this.variations = s, (!this.activeVariation || !s.includes(this.activeVariation)) && (this.activeVariation = s[0] ?? "");
  }
  setActiveVariation(e) {
    this.activeVariation = e;
  }
  setMetalColor(e) {
    this.colorHex = e;
  }
  setFinish(e) {
    this.finish = e;
  }
  setDiamondsVisible(e) {
    this.showDiamond = e;
  }
  getModelUrl(e) {
    const t = this.collection.charAt(0).toUpperCase() + this.collection.slice(1), s = e.replace(/\s+/g, "");
    return `/BehytRings/${t}/${this.modelId}/${s}/${this.modelId}_${s}.glb`;
  }
  getTextureUrls(e) {
    const t = this.collection.charAt(0).toUpperCase() + this.collection.slice(1), s = e.replace(/\s+/g, ""), n = `/BehytRings/${t}/${this.modelId}/${s}`;
    return {
      aoGold: `${n}/Gold_Metal_AO.webp`,
      aoSilver: `${n}/Silver_Metal_AO.webp`,
      roughness: `${n}/Roughness_Map.jpg`
    };
  }
}
class Xo {
  _libState;
  _meshManager;
  _cameraManager;
  _envManager;
  _ringManager;
  constructor(e) {
    this._libState = e, this._meshManager = new jo(e), this._cameraManager = new zo(e), this._envManager = new Go(), this._ringManager = new Ko(), Ie(this);
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
class qo {
  _libState;
  _meshInfoJson = null;
  _jsonUrl = "./init.json";
  constructor(e) {
    this._libState = e, Ie(this);
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
class Yo {
  _libState;
  _viewManager;
  constructor(e) {
    this._libState = e, this._viewManager = new qo(e), Ie(this);
  }
  get viewManager() {
    return this._viewManager;
  }
  dispose() {
    this._viewManager.dispose();
  }
}
class Hs {
  constructor() {
    Ie(this);
  }
  _designManager = new Yo(this);
  get designManager() {
    return this._designManager;
  }
  _design3DManager = new Xo(this);
  get design3DManager() {
    return this._design3DManager;
  }
  dispose() {
    this._designManager.dispose(), this._design3DManager.dispose();
  }
}
const ta = Ut(
  Gs(
    ({
      backgroundColor: c = "#f8f7f2",
      className: e,
      diamondEnvPath: t = "/08.hdr",
      envPath: s = "/env/08.hdr",
      style: n
    }, r) => {
      const [i] = js(() => new Hs());
      return Ks(
        r,
        () => ({
          stateManager: {
            cameraManager: i.design3DManager.cameraManager,
            envManager: i.design3DManager.envManager,
            meshManager: i.design3DManager.meshManager,
            ringManager: i.design3DManager.ringManager,
            viewManager: i.designManager.viewManager
          }
        }),
        [i]
      ), Ae(() => () => {
        i.dispose();
      }, [i]), /* @__PURE__ */ V.jsx(Sn.Provider, { value: i, children: /* @__PURE__ */ V.jsx(
        "div",
        {
          className: e,
          style: { height: "100%", width: "100%", ...n },
          children: /* @__PURE__ */ V.jsxs(
            xs,
            {
              frameloop: "always",
              shadows: !0,
              camera: { fov: 35, position: [0, 0, 8] },
              children: [
                /* @__PURE__ */ V.jsx("color", { attach: "background", args: [c] }),
                /* @__PURE__ */ V.jsxs(hs, { fallback: null, children: [
                  /* @__PURE__ */ V.jsx(
                    ps,
                    {
                      files: s,
                      environmentIntensity: 0.9,
                      environmentRotation: [0, 3.63, 0]
                    }
                  ),
                  /* @__PURE__ */ V.jsx(ms, { children: /* @__PURE__ */ V.jsx(Os, { diamondEnvPath: t }) }),
                  /* @__PURE__ */ V.jsx(
                    gs,
                    {
                      position: [0, -1, 0],
                      opacity: 0.5,
                      scale: 4,
                      blur: 4.5,
                      far: 4
                    }
                  ),
                  /* @__PURE__ */ V.jsx(
                    ys,
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
          )
        }
      ) });
    }
  )
), na = Ut(
  ({
    collection: c,
    modelId: e,
    variations: t,
    activeVariation: s,
    colorHex: n = "#e8c070",
    finish: r = "polished",
    showDiamond: i = !0,
    envPath: a = "/env/08.hdr",
    diamondEnvPath: o = "/08.hdr",
    backgroundColor: u = "#f8f7f2"
  }) => {
    const l = ot(new Hs()).current, { ringManager: d } = l.design3DManager;
    return Ae(() => {
      d.initModel(c, e, t);
    }, [c, e, t, d]), Ae(() => {
      s && d.setActiveVariation(s);
    }, [s, d]), Ae(() => {
      d.setMetalColor(n);
    }, [n, d]), Ae(() => {
      d.setFinish(r);
    }, [r, d]), Ae(() => {
      d.setDiamondsVisible(i);
    }, [i, d]), /* @__PURE__ */ V.jsx(Sn.Provider, { value: l, children: /* @__PURE__ */ V.jsxs(
      xs,
      {
        frameloop: "always",
        shadows: !0,
        camera: { fov: 35, position: [0, 0, 8] },
        children: [
          /* @__PURE__ */ V.jsx("color", { attach: "background", args: [u] }),
          /* @__PURE__ */ V.jsxs(hs, { fallback: null, children: [
            /* @__PURE__ */ V.jsx(
              ps,
              {
                files: a,
                environmentIntensity: 0.9,
                environmentRotation: [0, 3.63, 0]
              }
            ),
            /* @__PURE__ */ V.jsx(ms, { children: /* @__PURE__ */ V.jsx(Os, { diamondEnvPath: o }) }),
            /* @__PURE__ */ V.jsx(
              gs,
              {
                position: [0, -1, 0],
                opacity: 0.5,
                scale: 4,
                blur: 4.5,
                far: 4
              }
            ),
            /* @__PURE__ */ V.jsx(
              ys,
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
  na as RingScene,
  ta as SDKViewer,
  ta as Viewer3D
};
