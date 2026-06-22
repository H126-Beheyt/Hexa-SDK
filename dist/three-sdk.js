import Hn, { useEffect as ae, useMemo as _n, useState as Ds, useRef as Te, forwardRef as ar, useImperativeHandle as cr, Suspense as Ps } from "react";
import { useGLTF as Bs, useEnvironment as lr, ContactShadows as ur, Environment as Cs, CameraControls as Ls } from "@react-three/drei";
import { useLoader as ut, useFrame as fr, useThree as Ns, Canvas as Fs } from "@react-three/fiber";
import { observer as ze } from "mobx-react-lite";
import * as C from "three";
import { Box3 as be, Matrix4 as we, BufferAttribute as at, Vector3 as U, Line3 as Ce, Plane as Us, Vector2 as Re, Triangle as it, BackSide as dr, DoubleSide as Os, REVISION as ks, Ray as hr, FrontSide as Tn, UnsignedIntType as bt, FloatType as He, DataTexture as Mn, NearestFilter as Oe, IntType as rn, UnsignedByteType as At, UnsignedShortType as mr, ByteType as Yn, ShortType as pr, RGBAFormat as Jt, RGBAIntegerFormat as bn, RGIntegerFormat as Hs, RedIntegerFormat as gr, RGFormat as xr, RedFormat as yr, TrianglesDrawMode as vr, TriangleFanDrawMode as An, TriangleStripDrawMode as Vs, Loader as zs, LoaderUtils as Rt, FileLoader as Vn, MeshPhysicalMaterial as Ee, Color as Xe, LinearSRGBColorSpace as Se, SRGBColorSpace as It, SpotLight as wr, PointLight as _r, DirectionalLight as Tr, Quaternion as Gs, InstancedMesh as Mr, InstancedBufferAttribute as br, Object3D as js, TextureLoader as Ar, ImageBitmapLoader as Rr, InterleavedBuffer as Sr, InterleavedBufferAttribute as Er, LinearMipmapLinearFilter as Ks, NearestMipmapLinearFilter as Ir, LinearMipmapNearestFilter as Dr, NearestMipmapNearestFilter as Pr, LinearFilter as $e, RepeatWrapping as Rn, MirroredRepeatWrapping as Br, ClampToEdgeWrapping as Xt, PointsMaterial as Cr, Material as on, LineBasicMaterial as Lr, MeshStandardMaterial as Ws, MeshBasicMaterial as Mt, PropertyBinding as Nr, BufferGeometry as Fr, SkinnedMesh as Ur, Mesh as Or, LineSegments as kr, Line as Hr, LineLoop as Vr, Points as zr, Group as an, PerspectiveCamera as Gr, MathUtils as jr, OrthographicCamera as Kr, Skeleton as Wr, AnimationClip as Yr, Bone as Xr, InterpolateDiscrete as $r, InterpolateLinear as Ys, Texture as Xn, VectorKeyframeTrack as $n, NumberKeyframeTrack as qn, QuaternionKeyframeTrack as Jn, ColorManagement as Zn, Interpolant as qr, Sphere as Jr, Data3DTexture as Zr, DataTextureLoader as Qr, HalfFloatType as Dt, DataUtils as Pt } from "three";
import { makeAutoObservable as Ge, observable as Qn } from "mobx";
var Bt = { exports: {} }, ft = {};
var es;
function ei() {
  if (es) return ft;
  es = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.fragment");
  function t(s, n, i) {
    var r = null;
    if (i !== void 0 && (r = "" + i), n.key !== void 0 && (r = "" + n.key), "key" in n) {
      i = {};
      for (var a in n)
        a !== "key" && (i[a] = n[a]);
    } else i = n;
    return n = i.ref, {
      $$typeof: c,
      type: s,
      key: r,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return ft.Fragment = e, ft.jsx = t, ft.jsxs = t, ft;
}
var dt = {};
var ts;
function ti() {
  return ts || (ts = 1, process.env.NODE_ENV !== "production" && (function() {
    function c(I) {
      if (I == null) return null;
      if (typeof I == "function")
        return I.$$typeof === E ? null : I.displayName || I.name || null;
      if (typeof I == "string") return I;
      switch (I) {
        case p:
          return "Fragment";
        case g:
          return "Profiler";
        case v:
          return "StrictMode";
        case A:
          return "Suspense";
        case M:
          return "SuspenseList";
        case b:
          return "Activity";
      }
      if (typeof I == "object")
        switch (typeof I.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), I.$$typeof) {
          case _:
            return "Portal";
          case x:
            return I.displayName || "Context";
          case y:
            return (I._context.displayName || "Context") + ".Consumer";
          case w:
            var B = I.render;
            return I = I.displayName, I || (I = B.displayName || B.name || "", I = I !== "" ? "ForwardRef(" + I + ")" : "ForwardRef"), I;
          case T:
            return B = I.displayName || null, B !== null ? B : c(I.type) || "Memo";
          case S:
            B = I._payload, I = I._init;
            try {
              return c(I(B));
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
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var O = B.error, z = typeof Symbol == "function" && Symbol.toStringTag && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return O.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), e(I);
      }
    }
    function s(I) {
      if (I === p) return "<>";
      if (typeof I == "object" && I !== null && I.$$typeof === S)
        return "<...>";
      try {
        var B = c(I);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var I = R.A;
      return I === null ? null : I.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function r(I) {
      if (D.call(I, "key")) {
        var B = Object.getOwnPropertyDescriptor(I, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return I.key !== void 0;
    }
    function a(I, B) {
      function O() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(I, "key", {
        get: O,
        configurable: !0
      });
    }
    function o() {
      var I = c(this.type);
      return V[I] || (V[I] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), I = this.props.ref, I !== void 0 ? I : null;
    }
    function u(I, B, O, z, ie, pe) {
      var k = O.ref;
      return I = {
        $$typeof: m,
        type: I,
        key: B,
        props: O,
        _owner: z
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(I, "ref", {
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
        value: ie
      }), Object.defineProperty(I, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: pe
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    }
    function f(I, B, O, z, ie, pe) {
      var k = B.children;
      if (k !== void 0)
        if (z)
          if (P(k)) {
            for (z = 0; z < k.length; z++)
              l(k[z]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else l(k);
      if (D.call(B, "key")) {
        k = c(I);
        var H = Object.keys(B).filter(function(Y) {
          return Y !== "key";
        });
        z = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", K[k + z] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          k,
          H,
          k
        ), K[k + z] = !0);
      }
      if (k = null, O !== void 0 && (t(O), k = "" + O), r(B) && (t(B.key), k = "" + B.key), "key" in B) {
        O = {};
        for (var W in B)
          W !== "key" && (O[W] = B[W]);
      } else O = B;
      return k && a(
        O,
        typeof I == "function" ? I.displayName || I.name || "Unknown" : I
      ), u(
        I,
        k,
        O,
        n(),
        ie,
        pe
      );
    }
    function l(I) {
      d(I) ? I._store && (I._store.validated = 1) : typeof I == "object" && I !== null && I.$$typeof === S && (I._payload.status === "fulfilled" ? d(I._payload.value) && I._payload.value._store && (I._payload.value._store.validated = 1) : I._store && (I._store.validated = 1));
    }
    function d(I) {
      return typeof I == "object" && I !== null && I.$$typeof === m;
    }
    var h = Hn, m = /* @__PURE__ */ Symbol.for("react.transitional.element"), _ = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), v = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), y = /* @__PURE__ */ Symbol.for("react.consumer"), x = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.suspense_list"), T = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), E = /* @__PURE__ */ Symbol.for("react.client.reference"), R = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, P = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(I) {
        return I();
      }
    };
    var N, V = {}, X = h.react_stack_bottom_frame.bind(
      h,
      i
    )(), Q = L(s(i)), K = {};
    dt.Fragment = p, dt.jsx = function(I, B, O) {
      var z = 1e4 > R.recentlyCreatedOwnerStacks++;
      return f(
        I,
        B,
        O,
        !1,
        z ? Error("react-stack-top-frame") : X,
        z ? L(s(I)) : Q
      );
    }, dt.jsxs = function(I, B, O) {
      var z = 1e4 > R.recentlyCreatedOwnerStacks++;
      return f(
        I,
        B,
        O,
        !0,
        z ? Error("react-stack-top-frame") : X,
        z ? L(s(I)) : Q
      );
    };
  })()), dt;
}
var ns;
function ni() {
  return ns || (ns = 1, process.env.NODE_ENV === "production" ? Bt.exports = ei() : Bt.exports = ti()), Bt.exports;
}
var $ = ni();
const zn = Hn.createContext(null), Xs = 0, si = 1, ri = 2, ss = 2, cn = 1.25, rs = 1, le = 32, ce = le / 4, Gn = 65535, ii = Gn << 16, $t = Math.pow(2, -24), jn = /* @__PURE__ */ Symbol("SKIP_GENERATION"), $s = {
  strategy: Xs,
  maxDepth: 40,
  maxLeafSize: 10,
  useSharedArrayBuffer: !1,
  setBoundingBox: !0,
  onProgress: null,
  indirect: !1,
  verbose: !0,
  range: null,
  [jn]: !1
};
function ee(c, e, t) {
  return t.min.x = e[c], t.min.y = e[c + 1], t.min.z = e[c + 2], t.max.x = e[c + 3], t.max.y = e[c + 4], t.max.z = e[c + 5], t;
}
function is(c) {
  let e = -1, t = -1 / 0;
  for (let s = 0; s < 3; s++) {
    const n = c[s + 3] - c[s];
    n > t && (t = n, e = s);
  }
  return e;
}
function os(c, e) {
  e.set(c);
}
function as(c, e, t) {
  let s, n;
  for (let i = 0; i < 3; i++) {
    const r = i + 3;
    s = c[i], n = e[i], t[i] = s < n ? s : n, s = c[r], n = e[r], t[r] = s > n ? s : n;
  }
}
function Ct(c, e, t) {
  for (let s = 0; s < 3; s++) {
    const n = e[c + 2 * s], i = e[c + 2 * s + 1], r = n - i, a = n + i;
    r < t[s] && (t[s] = r), a > t[s + 3] && (t[s + 3] = a);
  }
}
function ht(c) {
  const e = c[3] - c[0], t = c[4] - c[1], s = c[5] - c[2];
  return 2 * (e * t + t * s + s * e);
}
function se(c, e) {
  return e[c + 15] === Gn;
}
function de(c, e) {
  return e[c + 6];
}
function he(c, e) {
  return e[c + 14];
}
function ue(c) {
  return c + ce;
}
function fe(c, e) {
  const t = e[c + 6];
  return c + t * ce;
}
function en(c, e) {
  return e[c + 7];
}
function ln(c, e, t, s, n) {
  let i = 1 / 0, r = 1 / 0, a = 1 / 0, o = -1 / 0, u = -1 / 0, f = -1 / 0, l = 1 / 0, d = 1 / 0, h = 1 / 0, m = -1 / 0, _ = -1 / 0, p = -1 / 0;
  const v = c.offset || 0;
  for (let g = (e - v) * 6, y = (e + t - v) * 6; g < y; g += 6) {
    const x = c[g + 0], w = c[g + 1], A = x - w, M = x + w;
    A < i && (i = A), M > o && (o = M), x < l && (l = x), x > m && (m = x);
    const T = c[g + 2], S = c[g + 3], b = T - S, E = T + S;
    b < r && (r = b), E > u && (u = E), T < d && (d = T), T > _ && (_ = T);
    const R = c[g + 4], D = c[g + 5], P = R - D, L = R + D;
    P < a && (a = P), L > f && (f = L), R < h && (h = R), R > p && (p = R);
  }
  s[0] = i, s[1] = r, s[2] = a, s[3] = o, s[4] = u, s[5] = f, n[0] = l, n[1] = d, n[2] = h, n[3] = m, n[4] = _, n[5] = p;
}
const De = 32, oi = (c, e) => c.candidate - e.candidate, Ne = /* @__PURE__ */ new Array(De).fill().map(() => ({
  count: 0,
  bounds: new Float32Array(6),
  rightCacheBounds: new Float32Array(6),
  leftCacheBounds: new Float32Array(6),
  candidate: 0
})), Lt = /* @__PURE__ */ new Float32Array(6);
function ai(c, e, t, s, n, i) {
  let r = -1, a = 0;
  if (i === Xs)
    r = is(e), r !== -1 && (a = (e[r] + e[r + 3]) / 2);
  else if (i === si)
    r = is(c), r !== -1 && (a = ci(t, s, n, r));
  else if (i === ri) {
    const o = ht(c);
    let u = cn * n;
    const f = t.offset || 0, l = (s - f) * 6, d = (s + n - f) * 6;
    for (let h = 0; h < 3; h++) {
      const m = e[h], v = (e[h + 3] - m) / De;
      if (n < De / 4) {
        const g = [...Ne];
        g.length = n;
        let y = 0;
        for (let w = l; w < d; w += 6, y++) {
          const A = g[y];
          A.candidate = t[w + 2 * h], A.count = 0;
          const {
            bounds: M,
            leftCacheBounds: T,
            rightCacheBounds: S
          } = A;
          for (let b = 0; b < 3; b++)
            S[b] = 1 / 0, S[b + 3] = -1 / 0, T[b] = 1 / 0, T[b + 3] = -1 / 0, M[b] = 1 / 0, M[b + 3] = -1 / 0;
          Ct(w, t, M);
        }
        g.sort(oi);
        let x = n;
        for (let w = 0; w < x; w++) {
          const A = g[w];
          for (; w + 1 < x && g[w + 1].candidate === A.candidate; )
            g.splice(w + 1, 1), x--;
        }
        for (let w = l; w < d; w += 6) {
          const A = t[w + 2 * h];
          for (let M = 0; M < x; M++) {
            const T = g[M];
            A >= T.candidate ? Ct(w, t, T.rightCacheBounds) : (Ct(w, t, T.leftCacheBounds), T.count++);
          }
        }
        for (let w = 0; w < x; w++) {
          const A = g[w], M = A.count, T = n - A.count, S = A.leftCacheBounds, b = A.rightCacheBounds;
          let E = 0;
          M !== 0 && (E = ht(S) / o);
          let R = 0;
          T !== 0 && (R = ht(b) / o);
          const D = rs + cn * (E * M + R * T);
          D < u && (r = h, u = D, a = A.candidate);
        }
      } else {
        for (let x = 0; x < De; x++) {
          const w = Ne[x];
          w.count = 0, w.candidate = m + v + x * v;
          const A = w.bounds;
          for (let M = 0; M < 3; M++)
            A[M] = 1 / 0, A[M + 3] = -1 / 0;
        }
        for (let x = l; x < d; x += 6) {
          let M = ~~((t[x + 2 * h] - m) / v);
          M >= De && (M = De - 1);
          const T = Ne[M];
          T.count++, Ct(x, t, T.bounds);
        }
        const g = Ne[De - 1];
        os(g.bounds, g.rightCacheBounds);
        for (let x = De - 2; x >= 0; x--) {
          const w = Ne[x], A = Ne[x + 1];
          as(w.bounds, A.rightCacheBounds, w.rightCacheBounds);
        }
        let y = 0;
        for (let x = 0; x < De - 1; x++) {
          const w = Ne[x], A = w.count, M = w.bounds, S = Ne[x + 1].rightCacheBounds;
          A !== 0 && (y === 0 ? os(M, Lt) : as(M, Lt, Lt)), y += A;
          let b = 0, E = 0;
          y !== 0 && (b = ht(Lt) / o);
          const R = n - y;
          R !== 0 && (E = ht(S) / o);
          const D = rs + cn * (b * y + E * R);
          D < u && (r = h, u = D, a = w.candidate);
        }
      }
    }
  } else
    console.warn(`BVH: Invalid build strategy value ${i} used.`);
  return { axis: r, pos: a };
}
function ci(c, e, t, s) {
  let n = 0;
  const i = c.offset;
  for (let r = e, a = e + t; r < a; r++)
    n += c[(r - i) * 6 + s * 2];
  return n / t;
}
class un {
  constructor() {
    this.boundingData = new Float32Array(6);
  }
}
function li(c, e, t, s, n, i) {
  let r = s, a = s + n - 1;
  const o = i.pos, u = i.axis * 2, f = t.offset || 0;
  for (; ; ) {
    for (; r <= a && t[(r - f) * 6 + u] < o; )
      r++;
    for (; r <= a && t[(a - f) * 6 + u] >= o; )
      a--;
    if (r < a) {
      for (let l = 0; l < e; l++) {
        let d = c[r * e + l];
        c[r * e + l] = c[a * e + l], c[a * e + l] = d;
      }
      for (let l = 0; l < 6; l++) {
        const d = r - f, h = a - f, m = t[d * 6 + l];
        t[d * 6 + l] = t[h * 6 + l], t[h * 6 + l] = m;
      }
      r++, a--;
    } else
      return r;
  }
}
let qs, qt, Sn, Js;
const ui = Math.pow(2, 32);
function En(c) {
  return "count" in c ? 1 : 1 + En(c.left) + En(c.right);
}
function fi(c, e, t) {
  return qs = new Float32Array(t), qt = new Uint32Array(t), Sn = new Uint16Array(t), Js = new Uint8Array(t), In(c, e);
}
function In(c, e) {
  const t = c / 4, s = c / 2, n = "count" in e, i = e.boundingData;
  for (let r = 0; r < 6; r++)
    qs[t + r] = i[r];
  if (n)
    return e.buffer ? (Js.set(new Uint8Array(e.buffer), c), c + e.buffer.byteLength) : (qt[t + 6] = e.offset, Sn[s + 14] = e.count, Sn[s + 15] = Gn, c + le);
  {
    const { left: r, right: a, splitAxis: o } = e, u = c + le;
    let f = In(u, r);
    const l = c / le, h = f / le - l;
    if (h > ui)
      throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");
    return qt[t + 6] = h, qt[t + 7] = o, In(f, a);
  }
}
function di(c, e, t, s, n, i) {
  const {
    maxDepth: r,
    verbose: a,
    maxLeafSize: o,
    strategy: u,
    onProgress: f
  } = n, l = c.primitiveBuffer, d = c.primitiveBufferStride, h = new Float32Array(6);
  let m = !1;
  const _ = new un();
  return ln(e, t, s, _.boundingData, h), v(_, t, s, h), _;
  function p(g) {
    f && f((g - i.offset) / i.count);
  }
  function v(g, y, x, w = null, A = 0) {
    if (!m && A >= r && (m = !0, a && console.warn(`BVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`)), x <= o || A >= r)
      return p(y + x), g.offset = y, g.count = x, g;
    const M = ai(g.boundingData, w, e, y, x, u);
    if (M.axis === -1)
      return p(y + x), g.offset = y, g.count = x, g;
    const T = li(l, d, e, y, x, M);
    if (T === y || T === y + x)
      p(y + x), g.offset = y, g.count = x;
    else {
      g.splitAxis = M.axis;
      const S = new un(), b = y, E = T - y;
      g.left = S, ln(e, b, E, S.boundingData, h), v(S, b, E, h, A + 1);
      const R = new un(), D = T, P = x - E;
      g.right = R, ln(e, D, P, R.boundingData, h), v(R, D, P, h, A + 1);
    }
    return g;
  }
}
function hi(c, e) {
  const t = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, s = c.getRootRanges(e.range), n = s[0], i = s[s.length - 1], r = {
    offset: n.offset,
    count: i.offset + i.count - n.offset
  }, a = new Float32Array(6 * r.count);
  a.offset = r.offset, c.computePrimitiveBounds(r.offset, r.count, a), c._roots = s.map((o) => {
    const u = di(c, a, o.offset, o.count, e, r), f = En(u), l = new t(le * f);
    return fi(0, u, l), l;
  });
}
class Kn {
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
class mi {
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
const Z = /* @__PURE__ */ new mi();
let ke, ot;
const Je = [], Nt = /* @__PURE__ */ new Kn(() => new be());
function pi(c, e, t, s, n, i) {
  ke = Nt.getPrimitive(), ot = Nt.getPrimitive(), Je.push(ke, ot), Z.setBuffer(c._roots[e]);
  const r = Dn(0, c.geometry, t, s, n, i);
  Z.clearBuffer(), Nt.releasePrimitive(ke), Nt.releasePrimitive(ot), Je.pop(), Je.pop();
  const a = Je.length;
  return a > 0 && (ot = Je[a - 1], ke = Je[a - 2]), r;
}
function Dn(c, e, t, s, n = null, i = 0, r = 0) {
  const { float32Array: a, uint16Array: o, uint32Array: u } = Z;
  let f = c * 2;
  if (se(f, o)) {
    const d = de(c, u), h = he(f, o);
    return ee(c, a, ke), s(d, h, !1, r, i + c / ce, ke);
  } else {
    let b = function(R) {
      const { uint16Array: D, uint32Array: P } = Z;
      let L = R * 2;
      for (; !se(L, D); )
        R = ue(R), L = R * 2;
      return de(R, P);
    }, E = function(R) {
      const { uint16Array: D, uint32Array: P } = Z;
      let L = R * 2;
      for (; !se(L, D); )
        R = fe(R, P), L = R * 2;
      return de(R, P) + he(L, D);
    };
    const d = ue(c), h = fe(c, u);
    let m = d, _ = h, p, v, g, y;
    if (n && (g = ke, y = ot, ee(m, a, g), ee(_, a, y), p = n(g), v = n(y), v < p)) {
      m = h, _ = d;
      const R = p;
      p = v, v = R, g = y;
    }
    g || (g = ke, ee(m, a, g));
    const x = se(m * 2, o), w = t(g, x, p, r + 1, i + m / ce);
    let A;
    if (w === ss) {
      const R = b(m), P = E(m) - R;
      A = s(R, P, !0, r + 1, i + m / ce, g);
    } else
      A = w && Dn(
        m,
        e,
        t,
        s,
        n,
        i,
        r + 1
      );
    if (A) return !0;
    y = ot, ee(_, a, y);
    const M = se(_ * 2, o), T = t(y, M, v, r + 1, i + _ / ce);
    let S;
    if (T === ss) {
      const R = b(_), P = E(_) - R;
      S = s(R, P, !0, r + 1, i + _ / ce, y);
    } else
      S = T && Dn(
        _,
        e,
        t,
        s,
        n,
        i,
        r + 1
      );
    return !!S;
  }
}
const St = /* @__PURE__ */ new Z.constructor(), Zt = /* @__PURE__ */ new Z.constructor(), Ue = /* @__PURE__ */ new Kn(() => new be()), Ze = /* @__PURE__ */ new be(), Qe = /* @__PURE__ */ new be(), fn = /* @__PURE__ */ new be(), dn = /* @__PURE__ */ new be();
let hn = !1;
function gi(c, e, t, s) {
  if (hn)
    throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");
  hn = !0;
  const n = c._roots, i = e._roots;
  let r, a = 0, o = 0;
  const u = new we().copy(t).invert();
  for (let f = 0, l = n.length; f < l; f++) {
    St.setBuffer(n[f]), o = 0;
    const d = Ue.getPrimitive();
    ee(0, St.float32Array, d), d.applyMatrix4(u);
    for (let h = 0, m = i.length; h < m && (Zt.setBuffer(i[h]), r = _e(
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
    ), Zt.clearBuffer(), o += i[h].byteLength / le, !r); h++)
      ;
    if (Ue.releasePrimitive(d), St.clearBuffer(), a += n[f].byteLength / le, r)
      break;
  }
  return hn = !1, r;
}
function _e(c, e, t, s, n, i = 0, r = 0, a = 0, o = 0, u = null, f = !1) {
  let l, d;
  f ? (l = Zt, d = St) : (l = St, d = Zt);
  const h = l.float32Array, m = l.uint32Array, _ = l.uint16Array, p = d.float32Array, v = d.uint32Array, g = d.uint16Array, y = c * 2, x = e * 2, w = se(y, _), A = se(x, g);
  let M = !1;
  if (A && w)
    f ? M = n(
      de(e, v),
      he(e * 2, g),
      de(c, m),
      he(c * 2, _),
      o,
      r + e / ce,
      a,
      i + c / ce
    ) : M = n(
      de(c, m),
      he(c * 2, _),
      de(e, v),
      he(e * 2, g),
      a,
      i + c / ce,
      o,
      r + e / ce
    );
  else if (A) {
    const T = Ue.getPrimitive();
    ee(e, p, T), T.applyMatrix4(t);
    const S = ue(c), b = fe(c, m);
    ee(S, h, Ze), ee(b, h, Qe);
    const E = T.intersectsBox(Ze), R = T.intersectsBox(Qe);
    M = E && _e(
      e,
      S,
      s,
      t,
      n,
      r,
      i,
      o,
      a + 1,
      T,
      !f
    ) || R && _e(
      e,
      b,
      s,
      t,
      n,
      r,
      i,
      o,
      a + 1,
      T,
      !f
    ), Ue.releasePrimitive(T);
  } else {
    const T = ue(e), S = fe(e, v);
    ee(T, p, fn), ee(S, p, dn);
    const b = u.intersectsBox(fn), E = u.intersectsBox(dn);
    if (b && E)
      M = _e(
        c,
        T,
        t,
        s,
        n,
        i,
        r,
        a,
        o + 1,
        u,
        f
      ) || _e(
        c,
        S,
        t,
        s,
        n,
        i,
        r,
        a,
        o + 1,
        u,
        f
      );
    else if (b)
      if (w)
        M = _e(
          c,
          T,
          t,
          s,
          n,
          i,
          r,
          a,
          o + 1,
          u,
          f
        );
      else {
        const R = Ue.getPrimitive();
        R.copy(fn).applyMatrix4(t);
        const D = ue(c), P = fe(c, m);
        ee(D, h, Ze), ee(P, h, Qe);
        const L = R.intersectsBox(Ze), N = R.intersectsBox(Qe);
        M = L && _e(
          T,
          D,
          s,
          t,
          n,
          r,
          i,
          o,
          a + 1,
          R,
          !f
        ) || N && _e(
          T,
          P,
          s,
          t,
          n,
          r,
          i,
          o,
          a + 1,
          R,
          !f
        ), Ue.releasePrimitive(R);
      }
    else if (E)
      if (w)
        M = _e(
          c,
          S,
          t,
          s,
          n,
          i,
          r,
          a,
          o + 1,
          u,
          f
        );
      else {
        const R = Ue.getPrimitive();
        R.copy(dn).applyMatrix4(t);
        const D = ue(c), P = fe(c, m);
        ee(D, h, Ze), ee(P, h, Qe);
        const L = R.intersectsBox(Ze), N = R.intersectsBox(Qe);
        M = L && _e(
          S,
          D,
          s,
          t,
          n,
          r,
          i,
          o,
          a + 1,
          R,
          !f
        ) || N && _e(
          S,
          P,
          s,
          t,
          n,
          r,
          i,
          o,
          a + 1,
          R,
          !f
        ), Ue.releasePrimitive(R);
      }
  }
  return M;
}
const cs = /* @__PURE__ */ new be(), et = /* @__PURE__ */ new Float32Array(6);
class xi {
  constructor() {
    this._roots = null, this.primitiveBuffer = null, this.primitiveBufferStride = null;
  }
  init(e) {
    e = {
      ...$s,
      ...e
    }, hi(this, e);
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
    let i = 1 / 0, r = 1 / 0, a = 1 / 0, o = -1 / 0, u = -1 / 0, f = -1 / 0;
    for (let l = e, d = e + t; l < d; l++) {
      this.writePrimitiveBounds(l, et, 0);
      const [h, m, _, p, v, g] = et;
      h < i && (i = h), p > o && (o = p), m < r && (r = m), v > u && (u = v), _ < a && (a = _), g > f && (f = g);
    }
    return s[n + 0] = i, s[n + 1] = r, s[n + 2] = a, s[n + 3] = o, s[n + 4] = u, s[n + 5] = f, s;
  }
  computePrimitiveBounds(e, t, s) {
    const n = s.offset || 0;
    for (let i = e, r = e + t; i < r; i++) {
      this.writePrimitiveBounds(i, et, 0);
      const [a, o, u, f, l, d] = et, h = (a + f) / 2, m = (o + l) / 2, _ = (u + d) / 2, p = (f - a) / 2, v = (l - o) / 2, g = (d - u) / 2, y = (i - n) * 6;
      s[y + 0] = h, s[y + 1] = p + (Math.abs(h) + p) * $t, s[y + 2] = m, s[y + 3] = v + (Math.abs(m) + v) * $t, s[y + 4] = _, s[y + 5] = g + (Math.abs(_) + g) * $t;
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
        const i = s[n], r = new Uint32Array(i), a = new Uint16Array(i), o = i.byteLength / le;
        for (let u = 0; u < o; u++) {
          const f = ce * u, l = 2 * f;
          se(l, a) && (r[f + 6] += e);
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
    const s = this._roots[t], n = new Uint32Array(s), i = new Uint16Array(s);
    r(0);
    function r(a, o = 0) {
      const u = a * 2, f = se(u, i);
      if (f) {
        const l = n[a + 6], d = i[u + 14];
        e(o, f, new Float32Array(s, a * 4, 6), l, d);
      } else {
        const l = ue(a), d = fe(a, n), h = en(a, n);
        e(o, f, new Float32Array(s, a * 4, 6), h) || (r(l, o + 1), r(d, o + 1));
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
      const n = e[t], i = new Uint32Array(n), r = new Uint16Array(n), a = new Float32Array(n), o = n.byteLength / le;
      for (let u = o - 1; u >= 0; u--) {
        const f = u * ce, l = f * 2;
        if (se(l, r)) {
          const h = de(f, i), m = he(l, r);
          this.writePrimitiveRangeBounds(h, m, et, 0), a.set(et, f);
        } else {
          const h = ue(f), m = fe(f, i);
          for (let _ = 0; _ < 3; _++) {
            const p = a[h + _], v = a[h + _ + 3], g = a[m + _], y = a[m + _ + 3];
            a[f + _] = p < g ? p : g, a[f + _ + 3] = v > y ? v : y;
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
      ee(0, new Float32Array(s), cs), e.union(cs);
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
      intersectsPrimitive: i,
      scratchPrimitive: r,
      iterate: a
    } = e;
    if (n && i) {
      const l = n;
      n = (d, h, m, _, p) => l(d, h, m, _, p) ? !0 : a(d, h, this, i, m, _, r);
    } else n || (i ? n = (l, d, h, m) => a(l, d, this, i, h, m, r) : n = (l, d, h) => h);
    let o = !1, u = 0;
    const f = this._roots;
    for (let l = 0, d = f.length; l < d; l++) {
      const h = f[l];
      if (o = pi(this, l, s, n, t, u), o)
        break;
      u += h.byteLength / le;
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
    return gi(this, e, t, n);
  }
}
function yi() {
  return typeof SharedArrayBuffer < "u";
}
function tn(c) {
  return c.index ? c.index.count : c.attributes.position.count;
}
function nn(c) {
  return tn(c) / 3;
}
function Zs(c, e = ArrayBuffer) {
  return c > 65535 ? new Uint32Array(new e(4 * c)) : new Uint16Array(new e(2 * c));
}
function vi(c, e) {
  if (!c.index) {
    const t = c.attributes.position.count, s = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, n = Zs(t, s);
    c.setIndex(new at(n, 1));
    for (let i = 0; i < t; i++)
      n[i] = i;
  }
}
function wi(c, e, t) {
  const s = tn(c) / t, n = e || c.drawRange, i = n.start / t, r = (n.start + n.count) / t, a = Math.max(0, i), o = Math.min(s, r) - a;
  return {
    offset: Math.floor(a),
    count: Math.floor(o)
  };
}
function _i(c, e) {
  return c.groups.map((t) => ({
    offset: t.start / e,
    count: t.count / e
  }));
}
function ls(c, e, t) {
  const s = wi(c, e, t), n = _i(c, t);
  if (!n.length)
    return [s];
  const i = [], r = s.offset, a = s.offset + s.count, o = tn(c) / t, u = [];
  for (const d of n) {
    const { offset: h, count: m } = d, _ = h, p = isFinite(m) ? m : o - h, v = h + p;
    _ < a && v > r && (u.push({ pos: Math.max(r, _), isStart: !0 }), u.push({ pos: Math.min(a, v), isStart: !1 }));
  }
  u.sort((d, h) => d.pos !== h.pos ? d.pos - h.pos : d.type === "end" ? -1 : 1);
  let f = 0, l = null;
  for (const d of u) {
    const h = d.pos;
    f !== 0 && h !== l && i.push({
      offset: l,
      count: h - l
    }), f += d.isStart ? 1 : -1, l = h;
  }
  return i;
}
function Ti(c, e) {
  const t = c[c.length - 1], s = t.offset + t.count > 2 ** 16, n = c.reduce((u, f) => u + f.count, 0), i = s ? 4 : 2, r = e ? new SharedArrayBuffer(n * i) : new ArrayBuffer(n * i), a = s ? new Uint32Array(r) : new Uint16Array(r);
  let o = 0;
  for (let u = 0; u < c.length; u++) {
    const { offset: f, count: l } = c[u];
    for (let d = 0; d < l; d++)
      a[o + d] = f + d;
    o += l;
  }
  return a;
}
class Mi extends xi {
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
    if (t.useSharedArrayBuffer && !yi())
      throw new Error("BVH: SharedArrayBuffer is not available.");
    super(), this.geometry = e, this.resolvePrimitiveIndex = t.indirect ? (s) => this._indirectBuffer[s] : (s) => s, this.primitiveBuffer = null, this.primitiveBufferStride = null, this._indirectBuffer = null, t = {
      ...$s,
      ...t
    }, t[jn] || this.init(t);
  }
  init(e) {
    const { geometry: t, primitiveStride: s } = this;
    if (e.indirect) {
      const n = ls(t, e.range, s), i = Ti(n, e.useSharedArrayBuffer);
      this._indirectBuffer = i;
    } else
      vi(t, e);
    super.init(e), !t.boundingBox && e.setBoundingBox && (t.boundingBox = this.getBoundingBox(new be()));
  }
  // Abstract methods to be implemented by subclasses
  getRootRanges(e) {
    return this.indirect ? [{ offset: 0, count: this._indirectBuffer.length }] : ls(this.geometry, e, this.primitiveStride);
  }
  raycastObject3D() {
    throw new Error("BVH: raycastObject3D() not implemented");
  }
}
class Le {
  constructor() {
    this.min = 1 / 0, this.max = -1 / 0;
  }
  setFromPointsField(e, t) {
    let s = 1 / 0, n = -1 / 0;
    for (let i = 0, r = e.length; i < r; i++) {
      const o = e[i][t];
      s = o < s ? o : s, n = o > n ? o : n;
    }
    this.min = s, this.max = n;
  }
  setFromPoints(e, t) {
    let s = 1 / 0, n = -1 / 0;
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i], o = e.dot(a);
      s = o < s ? o : s, n = o > n ? o : n;
    }
    this.min = s, this.max = n;
  }
  isSeparated(e) {
    return this.min > e.max || e.min > this.max;
  }
}
Le.prototype.setFromBox = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U();
  return function(t, s) {
    const n = s.min, i = s.max;
    let r = 1 / 0, a = -1 / 0;
    for (let o = 0; o <= 1; o++)
      for (let u = 0; u <= 1; u++)
        for (let f = 0; f <= 1; f++) {
          c.x = n.x * o + i.x * (1 - o), c.y = n.y * u + i.y * (1 - u), c.z = n.z * f + i.z * (1 - f);
          const l = t.dot(c);
          r = Math.min(l, r), a = Math.max(l, a);
        }
    this.min = r, this.max = a;
  };
})();
const bi = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new U();
  return function(n, i, r) {
    const a = n.start, o = c, u = i.start, f = e;
    t.subVectors(a, u), c.subVectors(n.end, n.start), e.subVectors(i.end, i.start);
    const l = t.dot(f), d = f.dot(o), h = f.dot(f), m = t.dot(o), p = o.dot(o) * h - d * d;
    let v, g;
    p !== 0 ? v = (l * d - m * h) / p : v = 0, g = (l + v * d) / h, r.x = v, r.y = g;
  };
})(), Wn = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Re(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new U();
  return function(n, i, r, a) {
    bi(n, i, c);
    let o = c.x, u = c.y;
    if (o >= 0 && o <= 1 && u >= 0 && u <= 1) {
      n.at(o, r), i.at(u, a);
      return;
    } else if (o >= 0 && o <= 1) {
      u < 0 ? i.at(0, a) : i.at(1, a), n.closestPointToPoint(a, !0, r);
      return;
    } else if (u >= 0 && u <= 1) {
      o < 0 ? n.at(0, r) : n.at(1, r), i.closestPointToPoint(r, !0, a);
      return;
    } else {
      let f;
      o < 0 ? f = n.start : f = n.end;
      let l;
      u < 0 ? l = i.start : l = i.end;
      const d = e, h = t;
      if (n.closestPointToPoint(l, !0, e), i.closestPointToPoint(f, !0, t), d.distanceToSquared(l) <= h.distanceToSquared(f)) {
        r.copy(d), a.copy(l);
        return;
      } else {
        r.copy(f), a.copy(h);
        return;
      }
    }
  };
})(), Ai = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new Us(), s = /* @__PURE__ */ new Ce();
  return function(i, r) {
    const { radius: a, center: o } = i, { a: u, b: f, c: l } = r;
    if (s.start = u, s.end = f, s.closestPointToPoint(o, !0, c).distanceTo(o) <= a || (s.start = u, s.end = l, s.closestPointToPoint(o, !0, c).distanceTo(o) <= a) || (s.start = f, s.end = l, s.closestPointToPoint(o, !0, c).distanceTo(o) <= a)) return !0;
    const _ = r.getPlane(t);
    if (Math.abs(_.distanceToPoint(o)) <= a) {
      const v = _.projectPoint(o, e);
      if (r.containsPoint(v)) return !0;
    }
    return !1;
  };
})(), Ri = ["x", "y", "z"], Pe = 1e-15, us = Pe * Pe;
function ge(c) {
  return Math.abs(c) < Pe;
}
class Me extends it {
  constructor(...e) {
    super(...e), this.isExtendedTriangle = !0, this.satAxes = new Array(4).fill().map(() => new U()), this.satBounds = new Array(4).fill().map(() => new Le()), this.points = [this.a, this.b, this.c], this.plane = new Us(), this.isDegenerateIntoSegment = !1, this.isDegenerateIntoPoint = !1, this.degenerateSegment = new Ce(), this.needsUpdate = !0;
  }
  /**
   * Returns whether the triangle intersects the given sphere.
   * @param {Sphere} sphere
   * @returns {boolean}
   */
  intersectsSphere(e) {
    return Ai(e, this);
  }
  update() {
    const e = this.a, t = this.b, s = this.c, n = this.points, i = this.satAxes, r = this.satBounds, a = i[0], o = r[0];
    this.getNormal(a), o.setFromPoints(a, n);
    const u = i[1], f = r[1];
    u.subVectors(e, t), f.setFromPoints(u, n);
    const l = i[2], d = r[2];
    l.subVectors(t, s), d.setFromPoints(l, n);
    const h = i[3], m = r[3];
    h.subVectors(s, e), m.setFromPoints(h, n);
    const _ = u.length(), p = l.length(), v = h.length();
    this.isDegenerateIntoPoint = !1, this.isDegenerateIntoSegment = !1, _ < Pe ? p < Pe || v < Pe ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(e), this.degenerateSegment.end.copy(s)) : p < Pe ? v < Pe ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(t), this.degenerateSegment.end.copy(e)) : v < Pe && (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(s), this.degenerateSegment.end.copy(t)), this.plane.setFromNormalAndCoplanarPoint(a, e), this.needsUpdate = !1;
  }
}
Me.prototype.closestPointToSegment = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new Ce();
  return function(n, i = null, r = null) {
    const { start: a, end: o } = n, u = this.points;
    let f, l = 1 / 0;
    for (let d = 0; d < 3; d++) {
      const h = (d + 1) % 3;
      t.start.copy(u[d]), t.end.copy(u[h]), Wn(t, n, c, e), f = c.distanceToSquared(e), f < l && (l = f, i && i.copy(c), r && r.copy(e));
    }
    return this.closestPointToPoint(a, c), f = a.distanceToSquared(c), f < l && (l = f, i && i.copy(c), r && r.copy(a)), this.closestPointToPoint(o, c), f = o.distanceToSquared(c), f < l && (l = f, i && i.copy(c), r && r.copy(o)), Math.sqrt(l);
  };
})();
Me.prototype.intersectsTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Me(), e = /* @__PURE__ */ new Le(), t = /* @__PURE__ */ new Le(), s = /* @__PURE__ */ new U(), n = /* @__PURE__ */ new U(), i = /* @__PURE__ */ new U(), r = /* @__PURE__ */ new U(), a = /* @__PURE__ */ new Ce(), o = /* @__PURE__ */ new Ce(), u = /* @__PURE__ */ new U(), f = /* @__PURE__ */ new Re(), l = /* @__PURE__ */ new Re();
  function d(y, x, w, A) {
    const M = s;
    !y.isDegenerateIntoPoint && !y.isDegenerateIntoSegment ? M.copy(y.plane.normal) : M.copy(x.plane.normal);
    const T = y.satBounds, S = y.satAxes;
    for (let R = 1; R < 4; R++) {
      const D = T[R], P = S[R];
      if (e.setFromPoints(P, x.points), D.isSeparated(e) || (r.copy(M).cross(P), e.setFromPoints(r, y.points), t.setFromPoints(r, x.points), e.isSeparated(t))) return !1;
    }
    const b = x.satBounds, E = x.satAxes;
    for (let R = 1; R < 4; R++) {
      const D = b[R], P = E[R];
      if (e.setFromPoints(P, y.points), D.isSeparated(e) || (r.crossVectors(M, P), e.setFromPoints(r, y.points), t.setFromPoints(r, x.points), e.isSeparated(t))) return !1;
    }
    return w && (A || console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."), w.start.set(0, 0, 0), w.end.set(0, 0, 0)), !0;
  }
  function h(y, x, w, A, M, T, S, b, E, R, D) {
    let P = S / (S - b);
    R.x = A + (M - A) * P, D.start.subVectors(x, y).multiplyScalar(P).add(y), P = S / (S - E), R.y = A + (T - A) * P, D.end.subVectors(w, y).multiplyScalar(P).add(y);
  }
  function m(y, x, w, A, M, T, S, b, E, R, D) {
    if (M > 0)
      h(y.c, y.a, y.b, A, x, w, E, S, b, R, D);
    else if (T > 0)
      h(y.b, y.a, y.c, w, x, A, b, S, E, R, D);
    else if (b * E > 0 || S != 0)
      h(y.a, y.b, y.c, x, w, A, S, b, E, R, D);
    else if (b != 0)
      h(y.b, y.a, y.c, w, x, A, b, S, E, R, D);
    else if (E != 0)
      h(y.c, y.a, y.b, A, x, w, E, S, b, R, D);
    else
      return !0;
    return !1;
  }
  function _(y, x, w, A) {
    const M = x.degenerateSegment, T = y.plane.distanceToPoint(M.start), S = y.plane.distanceToPoint(M.end);
    return ge(T) ? ge(S) ? d(y, x, w, A) : (w && (w.start.copy(M.start), w.end.copy(M.start)), y.containsPoint(M.start)) : ge(S) ? (w && (w.start.copy(M.end), w.end.copy(M.end)), y.containsPoint(M.end)) : y.plane.intersectLine(M, s) != null ? (w && (w.start.copy(s), w.end.copy(s)), y.containsPoint(s)) : !1;
  }
  function p(y, x, w) {
    const A = x.a;
    return ge(y.plane.distanceToPoint(A)) && y.containsPoint(A) ? (w && (w.start.copy(A), w.end.copy(A)), !0) : !1;
  }
  function v(y, x, w) {
    const A = y.degenerateSegment, M = x.a;
    return A.closestPointToPoint(M, !0, s), M.distanceToSquared(s) < us ? (w && (w.start.copy(M), w.end.copy(M)), !0) : !1;
  }
  function g(y, x, w, A) {
    if (y.isDegenerateIntoSegment)
      if (x.isDegenerateIntoSegment) {
        const M = y.degenerateSegment, T = x.degenerateSegment, S = n, b = i;
        M.delta(S), T.delta(b);
        const E = s.subVectors(T.start, M.start), R = S.x * b.y - S.y * b.x;
        if (ge(R))
          return !1;
        const D = (E.x * b.y - E.y * b.x) / R, P = -(S.x * E.y - S.y * E.x) / R;
        if (D < 0 || D > 1 || P < 0 || P > 1)
          return !1;
        const L = M.start.z + S.z * D, N = T.start.z + b.z * P;
        return ge(L - N) ? (w && (w.start.copy(M.start).addScaledVector(S, D), w.end.copy(M.start).addScaledVector(S, D)), !0) : !1;
      } else return x.isDegenerateIntoPoint ? v(y, x, w) : _(x, y, w, A);
    else {
      if (y.isDegenerateIntoPoint)
        return x.isDegenerateIntoPoint ? x.a.distanceToSquared(y.a) < us ? (w && (w.start.copy(y.a), w.end.copy(y.a)), !0) : !1 : x.isDegenerateIntoSegment ? v(x, y, w) : p(x, y, w);
      if (x.isDegenerateIntoPoint)
        return p(y, x, w);
      if (x.isDegenerateIntoSegment)
        return _(y, x, w, A);
    }
  }
  return function(x, w = null, A = !1) {
    this.needsUpdate && this.update(), x.isExtendedTriangle ? x.needsUpdate && x.update() : (c.copy(x), c.update(), x = c);
    const M = g(this, x, w, A);
    if (M !== void 0)
      return M;
    const T = this.plane, S = x.plane;
    let b = S.distanceToPoint(this.a), E = S.distanceToPoint(this.b), R = S.distanceToPoint(this.c);
    ge(b) && (b = 0), ge(E) && (E = 0), ge(R) && (R = 0);
    const D = b * E, P = b * R;
    if (D > 0 && P > 0)
      return !1;
    let L = T.distanceToPoint(x.a), N = T.distanceToPoint(x.b), V = T.distanceToPoint(x.c);
    ge(L) && (L = 0), ge(N) && (N = 0), ge(V) && (V = 0);
    const X = L * N, Q = L * V;
    if (X > 0 && Q > 0)
      return !1;
    n.copy(T.normal), i.copy(S.normal);
    const K = n.cross(i);
    let I = 0, B = Math.abs(K.x);
    const O = Math.abs(K.y);
    O > B && (B = O, I = 1), Math.abs(K.z) > B && (I = 2);
    const ie = Ri[I], pe = this.a[ie], k = this.b[ie], H = this.c[ie], W = x.a[ie], Y = x.b[ie], q = x.c[ie];
    if (m(this, pe, k, H, D, P, b, E, R, f, a))
      return d(this, x, w, A);
    if (m(x, W, Y, q, X, Q, L, N, V, l, o))
      return d(this, x, w, A);
    if (f.y < f.x) {
      const ne = f.y;
      f.y = f.x, f.x = ne, u.copy(a.start), a.start.copy(a.end), a.end.copy(u);
    }
    if (l.y < l.x) {
      const ne = l.y;
      l.y = l.x, l.x = ne, u.copy(o.start), o.start.copy(o.end), o.end.copy(u);
    }
    return f.y < l.x || l.y < f.x ? !1 : (w && (l.x > f.x ? w.start.copy(o.start) : w.start.copy(a.start), l.y < f.y ? w.end.copy(o.end) : w.end.copy(a.end)), !0);
  };
})();
Me.prototype.distanceToPoint = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U();
  return function(t) {
    return this.closestPointToPoint(t, c), t.distanceTo(c);
  };
})();
Me.prototype.distanceToTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = ["a", "b", "c"], s = /* @__PURE__ */ new Ce(), n = /* @__PURE__ */ new Ce();
  return function(r, a = null, o = null) {
    const u = a || o ? s : null;
    if (this.intersectsTriangle(r, u, !0))
      return (a || o) && (a && u.getCenter(a), o && u.getCenter(o)), 0;
    let f = 1 / 0;
    for (let l = 0; l < 3; l++) {
      let d;
      const h = t[l], m = r[h];
      this.closestPointToPoint(m, c), d = m.distanceToSquared(c), d < f && (f = d, a && a.copy(c), o && o.copy(m));
      const _ = this[h];
      r.closestPointToPoint(_, c), d = _.distanceToSquared(c), d < f && (f = d, a && a.copy(_), o && o.copy(c));
    }
    for (let l = 0; l < 3; l++) {
      const d = t[l], h = t[(l + 1) % 3];
      s.set(this[d], this[h]);
      for (let m = 0; m < 3; m++) {
        const _ = t[m], p = t[(m + 1) % 3];
        n.set(r[_], r[p]), Wn(s, n, c, e);
        const v = c.distanceToSquared(e);
        v < f && (f = v, a && a.copy(c), o && o.copy(e));
      }
    }
    return Math.sqrt(f);
  };
})();
class me {
  constructor(e, t, s) {
    this.isOrientedBox = !0, this.min = new U(), this.max = new U(), this.matrix = new we(), this.invMatrix = new we(), this.points = new Array(8).fill().map(() => new U()), this.satAxes = new Array(3).fill().map(() => new U()), this.satBounds = new Array(3).fill().map(() => new Le()), this.alignedSatBounds = new Array(3).fill().map(() => new Le()), this.needsUpdate = !1, e && this.min.copy(e), t && this.max.copy(t), s && this.matrix.copy(s);
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
me.prototype.update = /* @__PURE__ */ (function() {
  return function() {
    const e = this.matrix, t = this.min, s = this.max, n = this.points;
    for (let u = 0; u <= 1; u++)
      for (let f = 0; f <= 1; f++)
        for (let l = 0; l <= 1; l++) {
          const d = 1 * u | 2 * f | 4 * l, h = n[d];
          h.x = u ? s.x : t.x, h.y = f ? s.y : t.y, h.z = l ? s.z : t.z, h.applyMatrix4(e);
        }
    const i = this.satBounds, r = this.satAxes, a = n[0];
    for (let u = 0; u < 3; u++) {
      const f = r[u], l = i[u], d = 1 << u, h = n[d];
      f.subVectors(a, h), l.setFromPoints(f, n);
    }
    const o = this.alignedSatBounds;
    o[0].setFromPointsField(n, "x"), o[1].setFromPointsField(n, "y"), o[2].setFromPointsField(n, "z"), this.invMatrix.copy(this.matrix).invert(), this.needsUpdate = !1;
  };
})();
me.prototype.intersectsBox = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Le();
  return function(t) {
    this.needsUpdate && this.update();
    const s = t.min, n = t.max, i = this.satBounds, r = this.satAxes, a = this.alignedSatBounds;
    if (c.min = s.x, c.max = n.x, a[0].isSeparated(c) || (c.min = s.y, c.max = n.y, a[1].isSeparated(c)) || (c.min = s.z, c.max = n.z, a[2].isSeparated(c))) return !1;
    for (let o = 0; o < 3; o++) {
      const u = r[o], f = i[o];
      if (c.setFromBox(u, t), f.isSeparated(c)) return !1;
    }
    return !0;
  };
})();
me.prototype.intersectsTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Me(), e = /* @__PURE__ */ new Array(3), t = /* @__PURE__ */ new Le(), s = /* @__PURE__ */ new Le(), n = /* @__PURE__ */ new U();
  return function(r) {
    this.needsUpdate && this.update(), r.isExtendedTriangle ? r.needsUpdate && r.update() : (c.copy(r), c.update(), r = c);
    const a = this.satBounds, o = this.satAxes;
    e[0] = r.a, e[1] = r.b, e[2] = r.c;
    for (let d = 0; d < 3; d++) {
      const h = a[d], m = o[d];
      if (t.setFromPoints(m, e), h.isSeparated(t)) return !1;
    }
    const u = r.satBounds, f = r.satAxes, l = this.points;
    for (let d = 0; d < 3; d++) {
      const h = u[d], m = f[d];
      if (t.setFromPoints(m, l), h.isSeparated(t)) return !1;
    }
    for (let d = 0; d < 3; d++) {
      const h = o[d];
      for (let m = 0; m < 4; m++) {
        const _ = f[m];
        if (n.crossVectors(h, _), t.setFromPoints(n, e), s.setFromPoints(n, l), t.isSeparated(s)) return !1;
      }
    }
    return !0;
  };
})();
me.prototype.closestPointToPoint = /* @__PURE__ */ (function() {
  return function(e, t) {
    return this.needsUpdate && this.update(), t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min, this.max).applyMatrix4(this.matrix), t;
  };
})();
me.prototype.distanceToPoint = (function() {
  const c = new U();
  return function(t) {
    return this.closestPointToPoint(t, c), t.distanceTo(c);
  };
})();
me.prototype.distanceToBox = /* @__PURE__ */ (function() {
  const c = ["x", "y", "z"], e = /* @__PURE__ */ new Array(12).fill().map(() => new Ce()), t = /* @__PURE__ */ new Array(12).fill().map(() => new Ce()), s = /* @__PURE__ */ new U(), n = /* @__PURE__ */ new U();
  return function(r, a = 0, o = null, u = null) {
    if (this.needsUpdate && this.update(), this.intersectsBox(r))
      return (o || u) && (r.getCenter(n), this.closestPointToPoint(n, s), r.closestPointToPoint(s, n), o && o.copy(s), u && u.copy(n)), 0;
    const f = a * a, l = r.min, d = r.max, h = this.points;
    let m = 1 / 0;
    for (let p = 0; p < 8; p++) {
      const v = h[p];
      n.copy(v).clamp(l, d);
      const g = v.distanceToSquared(n);
      if (g < m && (m = g, o && o.copy(v), u && u.copy(n), g < f))
        return Math.sqrt(g);
    }
    let _ = 0;
    for (let p = 0; p < 3; p++)
      for (let v = 0; v <= 1; v++)
        for (let g = 0; g <= 1; g++) {
          const y = (p + 1) % 3, x = (p + 2) % 3, w = v << y | g << x, A = 1 << p | v << y | g << x, M = h[w], T = h[A];
          e[_].set(M, T);
          const b = c[p], E = c[y], R = c[x], D = t[_], P = D.start, L = D.end;
          P[b] = l[b], P[E] = v ? l[E] : d[E], P[R] = g ? l[R] : d[E], L[b] = d[b], L[E] = v ? l[E] : d[E], L[R] = g ? l[R] : d[E], _++;
        }
    for (let p = 0; p <= 1; p++)
      for (let v = 0; v <= 1; v++)
        for (let g = 0; g <= 1; g++) {
          n.x = p ? d.x : l.x, n.y = v ? d.y : l.y, n.z = g ? d.z : l.z, this.closestPointToPoint(n, s);
          const y = n.distanceToSquared(s);
          if (y < m && (m = y, o && o.copy(s), u && u.copy(n), y < f))
            return Math.sqrt(y);
        }
    for (let p = 0; p < 12; p++) {
      const v = e[p];
      for (let g = 0; g < 12; g++) {
        const y = t[g];
        Wn(v, y, s, n);
        const x = s.distanceToSquared(n);
        if (x < m && (m = x, o && o.copy(s), u && u.copy(n), x < f))
          return Math.sqrt(x);
      }
    }
    return Math.sqrt(m);
  };
})();
class Si extends Kn {
  constructor() {
    super(() => new Me());
  }
}
const ve = /* @__PURE__ */ new Si(), mt = /* @__PURE__ */ new U(), mn = /* @__PURE__ */ new U();
function Ei(c, e, t = {}, s = 0, n = 1 / 0) {
  const i = s * s, r = n * n;
  let a = 1 / 0, o = null;
  if (c.shapecast(
    {
      boundsTraverseOrder: (f) => (mt.copy(e).clamp(f.min, f.max), mt.distanceToSquared(e)),
      intersectsBounds: (f, l, d) => d < a && d < r,
      intersectsTriangle: (f, l) => {
        f.closestPointToPoint(e, mt);
        const d = e.distanceToSquared(mt);
        return d < a && (mn.copy(mt), a = d, o = l), d < i;
      }
    }
  ), a === 1 / 0) return null;
  const u = Math.sqrt(a);
  return t.point ? t.point.copy(mn) : t.point = mn.clone(), t.distance = u, t.faceIndex = o, t;
}
const Ft = parseInt(ks) >= 169, Ii = parseInt(ks) <= 161, je = /* @__PURE__ */ new U(), Ke = /* @__PURE__ */ new U(), We = /* @__PURE__ */ new U(), Ut = /* @__PURE__ */ new Re(), Ot = /* @__PURE__ */ new Re(), kt = /* @__PURE__ */ new Re(), fs = /* @__PURE__ */ new U(), ds = /* @__PURE__ */ new U(), hs = /* @__PURE__ */ new U(), pt = /* @__PURE__ */ new U();
function Di(c, e, t, s, n, i, r, a) {
  let o;
  if (i === dr ? o = c.intersectTriangle(s, t, e, !0, n) : o = c.intersectTriangle(e, t, s, i !== Os, n), o === null) return null;
  const u = c.origin.distanceTo(n);
  return u < r || u > a ? null : {
    distance: u,
    point: n.clone()
  };
}
function ms(c, e, t, s, n, i, r, a, o, u, f) {
  je.fromBufferAttribute(e, i), Ke.fromBufferAttribute(e, r), We.fromBufferAttribute(e, a);
  const l = Di(c, je, Ke, We, pt, o, u, f);
  if (l) {
    if (s) {
      Ut.fromBufferAttribute(s, i), Ot.fromBufferAttribute(s, r), kt.fromBufferAttribute(s, a), l.uv = new Re();
      const h = it.getInterpolation(pt, je, Ke, We, Ut, Ot, kt, l.uv);
      Ft || (l.uv = h);
    }
    if (n) {
      Ut.fromBufferAttribute(n, i), Ot.fromBufferAttribute(n, r), kt.fromBufferAttribute(n, a), l.uv1 = new Re();
      const h = it.getInterpolation(pt, je, Ke, We, Ut, Ot, kt, l.uv1);
      Ft || (l.uv1 = h), Ii && (l.uv2 = l.uv1);
    }
    if (t) {
      fs.fromBufferAttribute(t, i), ds.fromBufferAttribute(t, r), hs.fromBufferAttribute(t, a), l.normal = new U();
      const h = it.getInterpolation(pt, je, Ke, We, fs, ds, hs, l.normal);
      l.normal.dot(c.direction) > 0 && l.normal.multiplyScalar(-1), Ft || (l.normal = h);
    }
    const d = {
      a: i,
      b: r,
      c: a,
      normal: new U(),
      materialIndex: 0
    };
    if (it.getNormal(je, Ke, We, d.normal), l.face = d, l.faceIndex = i, Ft) {
      const h = new U();
      it.getBarycoord(pt, je, Ke, We, h), l.barycoord = h;
    }
  }
  return l;
}
function ps(c) {
  return c && c.isMaterial ? c.side : c;
}
function sn(c, e, t, s, n, i, r) {
  const a = s * 3;
  let o = a + 0, u = a + 1, f = a + 2;
  const { index: l, groups: d } = c;
  c.index && (o = l.getX(o), u = l.getX(u), f = l.getX(f));
  const { position: h, normal: m, uv: _, uv1: p } = c.attributes;
  if (Array.isArray(e)) {
    const v = s * 3;
    for (let g = 0, y = d.length; g < y; g++) {
      const { start: x, count: w, materialIndex: A } = d[g];
      if (v >= x && v < x + w) {
        const M = ps(e[A]), T = ms(t, h, m, _, p, o, u, f, M, i, r);
        if (T)
          if (T.faceIndex = s, T.face.materialIndex = A, n)
            n.push(T);
          else
            return T;
      }
    }
  } else {
    const v = ps(e), g = ms(t, h, m, _, p, o, u, f, v, i, r);
    if (g)
      if (g.faceIndex = s, g.face.materialIndex = 0, n)
        n.push(g);
      else
        return g;
  }
  return null;
}
function re(c, e, t, s) {
  const n = c.a, i = c.b, r = c.c;
  let a = e, o = e + 1, u = e + 2;
  t && (a = t.getX(a), o = t.getX(o), u = t.getX(u)), n.x = s.getX(a), n.y = s.getY(a), n.z = s.getZ(a), i.x = s.getX(o), i.y = s.getY(o), i.z = s.getZ(o), r.x = s.getX(u), r.y = s.getY(u), r.z = s.getZ(u);
}
function Pi(c, e, t, s, n, i, r, a) {
  const { geometry: o, _indirectBuffer: u } = c;
  for (let f = s, l = s + n; f < l; f++)
    sn(o, e, t, f, i, r, a);
}
function Bi(c, e, t, s, n, i, r) {
  const { geometry: a, _indirectBuffer: o } = c;
  let u = 1 / 0, f = null;
  for (let l = s, d = s + n; l < d; l++) {
    let h;
    h = sn(a, e, t, l, null, i, r), h && h.distance < u && (f = h, u = h.distance);
  }
  return f;
}
function Ci(c, e, t, s, n, i, r) {
  const { geometry: a } = t, { index: o } = a, u = a.attributes.position;
  for (let f = c, l = e + c; f < l; f++) {
    let d;
    if (d = f, re(r, d * 3, o, u), r.needsUpdate = !0, s(r, d, n, i))
      return !0;
  }
  return !1;
}
function Li(c, e = null) {
  e && Array.isArray(e) && (e = new Set(e));
  const t = c.geometry, s = t.index ? t.index.array : null, n = t.attributes.position;
  let i, r, a, o, u = 0;
  const f = c._roots;
  for (let d = 0, h = f.length; d < h; d++)
    i = f[d], r = new Uint32Array(i), a = new Uint16Array(i), o = new Float32Array(i), l(0, u), u += i.byteLength;
  function l(d, h, m = !1) {
    const _ = d * 2;
    if (se(_, a)) {
      const p = de(d, r), v = he(_, a);
      let g = 1 / 0, y = 1 / 0, x = 1 / 0, w = -1 / 0, A = -1 / 0, M = -1 / 0;
      for (let T = 3 * p, S = 3 * (p + v); T < S; T++) {
        let b = s[T];
        const E = n.getX(b), R = n.getY(b), D = n.getZ(b);
        E < g && (g = E), E > w && (w = E), R < y && (y = R), R > A && (A = R), D < x && (x = D), D > M && (M = D);
      }
      return o[d + 0] !== g || o[d + 1] !== y || o[d + 2] !== x || o[d + 3] !== w || o[d + 4] !== A || o[d + 5] !== M ? (o[d + 0] = g, o[d + 1] = y, o[d + 2] = x, o[d + 3] = w, o[d + 4] = A, o[d + 5] = M, !0) : !1;
    } else {
      const p = ue(d), v = fe(d, r);
      let g = m, y = !1, x = !1;
      if (e) {
        if (!g) {
          const b = p / ce + h / le, E = v / ce + h / le;
          y = e.has(b), x = e.has(E), g = !y && !x;
        }
      } else
        y = !0, x = !0;
      const w = g || y, A = g || x;
      let M = !1;
      w && (M = l(p, h, g));
      let T = !1;
      A && (T = l(v, h, g));
      const S = M || T;
      if (S)
        for (let b = 0; b < 3; b++) {
          const E = p + b, R = v + b, D = o[E], P = o[E + 3], L = o[R], N = o[R + 3];
          o[d + b] = D < L ? D : L, o[d + b + 3] = P > N ? P : N;
        }
      return S;
    }
  }
}
function Ve(c, e, t, s, n) {
  let i, r, a, o, u, f;
  const l = 1 / t.direction.x, d = 1 / t.direction.y, h = 1 / t.direction.z, m = t.origin.x, _ = t.origin.y, p = t.origin.z;
  let v = e[c], g = e[c + 3], y = e[c + 1], x = e[c + 3 + 1], w = e[c + 2], A = e[c + 3 + 2];
  return l >= 0 ? (i = (v - m) * l, r = (g - m) * l) : (i = (g - m) * l, r = (v - m) * l), d >= 0 ? (a = (y - _) * d, o = (x - _) * d) : (a = (x - _) * d, o = (y - _) * d), i > o || a > r || ((a > i || isNaN(i)) && (i = a), (o < r || isNaN(r)) && (r = o), h >= 0 ? (u = (w - p) * h, f = (A - p) * h) : (u = (A - p) * h, f = (w - p) * h), i > f || u > r) ? !1 : ((u > i || i !== i) && (i = u), (f < r || r !== r) && (r = f), i <= n && r >= s);
}
function Ni(c, e, t, s, n, i, r, a) {
  const { geometry: o, _indirectBuffer: u } = c;
  for (let f = s, l = s + n; f < l; f++) {
    let d = u ? u[f] : f;
    sn(o, e, t, d, i, r, a);
  }
}
function Fi(c, e, t, s, n, i, r) {
  const { geometry: a, _indirectBuffer: o } = c;
  let u = 1 / 0, f = null;
  for (let l = s, d = s + n; l < d; l++) {
    let h;
    h = sn(a, e, t, o ? o[l] : l, null, i, r), h && h.distance < u && (f = h, u = h.distance);
  }
  return f;
}
function Ui(c, e, t, s, n, i, r) {
  const { geometry: a } = t, { index: o } = a, u = a.attributes.position;
  for (let f = c, l = e + c; f < l; f++) {
    let d;
    if (d = t.resolveTriangleIndex(f), re(r, d * 3, o, u), r.needsUpdate = !0, s(r, d, n, i))
      return !0;
  }
  return !1;
}
function Oi(c, e, t, s, n, i, r) {
  Z.setBuffer(c._roots[e]), Pn(0, c, t, s, n, i, r), Z.clearBuffer();
}
function Pn(c, e, t, s, n, i, r) {
  const { float32Array: a, uint16Array: o, uint32Array: u } = Z, f = c * 2;
  if (se(f, o)) {
    const d = de(c, u), h = he(f, o);
    Pi(e, t, s, d, h, n, i, r);
  } else {
    const d = ue(c);
    Ve(d, a, s, i, r) && Pn(d, e, t, s, n, i, r);
    const h = fe(c, u);
    Ve(h, a, s, i, r) && Pn(h, e, t, s, n, i, r);
  }
}
const ki = ["x", "y", "z"];
function Hi(c, e, t, s, n, i) {
  Z.setBuffer(c._roots[e]);
  const r = Bn(0, c, t, s, n, i);
  return Z.clearBuffer(), r;
}
function Bn(c, e, t, s, n, i) {
  const { float32Array: r, uint16Array: a, uint32Array: o } = Z;
  let u = c * 2;
  if (se(u, a)) {
    const l = de(c, o), d = he(u, a);
    return Bi(e, t, s, l, d, n, i);
  } else {
    const l = en(c, o), d = ki[l], m = s.direction[d] >= 0;
    let _, p;
    m ? (_ = ue(c), p = fe(c, o)) : (_ = fe(c, o), p = ue(c));
    const g = Ve(_, r, s, n, i) ? Bn(_, e, t, s, n, i) : null;
    if (g) {
      const w = g.point[d];
      if (m ? w <= r[p + l] : (
        // min bounding data
        w >= r[p + l + 3]
      ))
        return g;
    }
    const x = Ve(p, r, s, n, i) ? Bn(p, e, t, s, n, i) : null;
    return g && x ? g.distance <= x.distance ? g : x : g || x || null;
  }
}
const Ht = /* @__PURE__ */ new be(), tt = /* @__PURE__ */ new Me(), nt = /* @__PURE__ */ new Me(), gt = /* @__PURE__ */ new we(), gs = /* @__PURE__ */ new me(), Vt = /* @__PURE__ */ new me();
function Vi(c, e, t, s) {
  Z.setBuffer(c._roots[e]);
  const n = Cn(0, c, t, s);
  return Z.clearBuffer(), n;
}
function Cn(c, e, t, s, n = null) {
  const { float32Array: i, uint16Array: r, uint32Array: a } = Z;
  let o = c * 2;
  if (n === null && (t.boundingBox || t.computeBoundingBox(), gs.set(t.boundingBox.min, t.boundingBox.max, s), n = gs), se(o, r)) {
    const f = e.geometry, l = f.index, d = f.attributes.position, h = t.index, m = t.attributes.position, _ = de(c, a), p = he(o, r);
    if (gt.copy(s).invert(), t.boundsTree)
      return ee(c, i, Vt), Vt.matrix.copy(gt), Vt.needsUpdate = !0, t.boundsTree.shapecast({
        intersectsBounds: (g) => Vt.intersectsBox(g),
        intersectsTriangle: (g) => {
          g.a.applyMatrix4(s), g.b.applyMatrix4(s), g.c.applyMatrix4(s), g.needsUpdate = !0;
          for (let y = _ * 3, x = (p + _) * 3; y < x; y += 3)
            if (re(nt, y, l, d), nt.needsUpdate = !0, g.intersectsTriangle(nt))
              return !0;
          return !1;
        }
      });
    {
      const v = nn(t);
      for (let g = _ * 3, y = (p + _) * 3; g < y; g += 3) {
        re(tt, g, l, d), tt.a.applyMatrix4(gt), tt.b.applyMatrix4(gt), tt.c.applyMatrix4(gt), tt.needsUpdate = !0;
        for (let x = 0, w = v * 3; x < w; x += 3)
          if (re(nt, x, h, m), nt.needsUpdate = !0, tt.intersectsTriangle(nt))
            return !0;
      }
    }
  } else {
    const f = ue(c), l = fe(c, a);
    return ee(f, i, Ht), !!(n.intersectsBox(Ht) && Cn(f, e, t, s, n) || (ee(l, i, Ht), n.intersectsBox(Ht) && Cn(l, e, t, s, n)));
  }
}
const zt = /* @__PURE__ */ new we(), pn = /* @__PURE__ */ new me(), xt = /* @__PURE__ */ new me(), zi = /* @__PURE__ */ new U(), Gi = /* @__PURE__ */ new U(), ji = /* @__PURE__ */ new U(), Ki = /* @__PURE__ */ new U();
function Wi(c, e, t, s = {}, n = {}, i = 0, r = 1 / 0) {
  e.boundingBox || e.computeBoundingBox(), pn.set(e.boundingBox.min, e.boundingBox.max, t), pn.needsUpdate = !0;
  const a = c.geometry, o = a.attributes.position, u = a.index, f = e.attributes.position, l = e.index, d = ve.getPrimitive(), h = ve.getPrimitive();
  let m = zi, _ = Gi, p = null, v = null;
  n && (p = ji, v = Ki);
  let g = 1 / 0, y = null, x = null;
  return zt.copy(t).invert(), xt.matrix.copy(zt), c.shapecast(
    {
      boundsTraverseOrder: (w) => pn.distanceToBox(w),
      intersectsBounds: (w, A, M) => M < g && M < r ? (A && (xt.min.copy(w.min), xt.max.copy(w.max), xt.needsUpdate = !0), !0) : !1,
      intersectsRange: (w, A) => {
        if (e.boundsTree)
          return e.boundsTree.shapecast({
            boundsTraverseOrder: (T) => xt.distanceToBox(T),
            intersectsBounds: (T, S, b) => b < g && b < r,
            intersectsRange: (T, S) => {
              for (let b = T, E = T + S; b < E; b++) {
                re(h, 3 * b, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
                for (let R = w, D = w + A; R < D; R++) {
                  re(d, 3 * R, u, o), d.needsUpdate = !0;
                  const P = d.distanceToTriangle(h, m, p);
                  if (P < g && (_.copy(m), v && v.copy(p), g = P, y = R, x = b), P < i)
                    return !0;
                }
              }
            }
          });
        {
          const M = nn(e);
          for (let T = 0, S = M; T < S; T++) {
            re(h, 3 * T, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
            for (let b = w, E = w + A; b < E; b++) {
              re(d, 3 * b, u, o), d.needsUpdate = !0;
              const R = d.distanceToTriangle(h, m, p);
              if (R < g && (_.copy(m), v && v.copy(p), g = R, y = b, x = T), R < i)
                return !0;
            }
          }
        }
      }
    }
  ), ve.releasePrimitive(d), ve.releasePrimitive(h), g === 1 / 0 ? null : (s.point ? s.point.copy(_) : s.point = _.clone(), s.distance = g, s.faceIndex = y, n && (n.point ? n.point.copy(v) : n.point = v.clone(), n.point.applyMatrix4(zt), _.applyMatrix4(zt), n.distance = _.sub(n.point).length(), n.faceIndex = x), s);
}
function Yi(c, e = null) {
  e && Array.isArray(e) && (e = new Set(e));
  const t = c.geometry, s = t.index ? t.index.array : null, n = t.attributes.position;
  let i, r, a, o, u = 0;
  const f = c._roots;
  for (let d = 0, h = f.length; d < h; d++)
    i = f[d], r = new Uint32Array(i), a = new Uint16Array(i), o = new Float32Array(i), l(0, u), u += i.byteLength;
  function l(d, h, m = !1) {
    const _ = d * 2;
    if (se(_, a)) {
      const p = de(d, r), v = he(_, a);
      let g = 1 / 0, y = 1 / 0, x = 1 / 0, w = -1 / 0, A = -1 / 0, M = -1 / 0;
      for (let T = p, S = p + v; T < S; T++) {
        const b = 3 * c.resolveTriangleIndex(T);
        for (let E = 0; E < 3; E++) {
          let R = b + E;
          R = s ? s[R] : R;
          const D = n.getX(R), P = n.getY(R), L = n.getZ(R);
          D < g && (g = D), D > w && (w = D), P < y && (y = P), P > A && (A = P), L < x && (x = L), L > M && (M = L);
        }
      }
      return o[d + 0] !== g || o[d + 1] !== y || o[d + 2] !== x || o[d + 3] !== w || o[d + 4] !== A || o[d + 5] !== M ? (o[d + 0] = g, o[d + 1] = y, o[d + 2] = x, o[d + 3] = w, o[d + 4] = A, o[d + 5] = M, !0) : !1;
    } else {
      const p = ue(d), v = fe(d, r);
      let g = m, y = !1, x = !1;
      if (e) {
        if (!g) {
          const b = p / ce + h / le, E = v / ce + h / le;
          y = e.has(b), x = e.has(E), g = !y && !x;
        }
      } else
        y = !0, x = !0;
      const w = g || y, A = g || x;
      let M = !1;
      w && (M = l(p, h, g));
      let T = !1;
      A && (T = l(v, h, g));
      const S = M || T;
      if (S)
        for (let b = 0; b < 3; b++) {
          const E = p + b, R = v + b, D = o[E], P = o[E + 3], L = o[R], N = o[R + 3];
          o[d + b] = D < L ? D : L, o[d + b + 3] = P > N ? P : N;
        }
      return S;
    }
  }
}
function Xi(c, e, t, s, n, i, r) {
  Z.setBuffer(c._roots[e]), Ln(0, c, t, s, n, i, r), Z.clearBuffer();
}
function Ln(c, e, t, s, n, i, r) {
  const { float32Array: a, uint16Array: o, uint32Array: u } = Z, f = c * 2;
  if (se(f, o)) {
    const d = de(c, u), h = he(f, o);
    Ni(e, t, s, d, h, n, i, r);
  } else {
    const d = ue(c);
    Ve(d, a, s, i, r) && Ln(d, e, t, s, n, i, r);
    const h = fe(c, u);
    Ve(h, a, s, i, r) && Ln(h, e, t, s, n, i, r);
  }
}
const $i = ["x", "y", "z"];
function qi(c, e, t, s, n, i) {
  Z.setBuffer(c._roots[e]);
  const r = Nn(0, c, t, s, n, i);
  return Z.clearBuffer(), r;
}
function Nn(c, e, t, s, n, i) {
  const { float32Array: r, uint16Array: a, uint32Array: o } = Z;
  let u = c * 2;
  if (se(u, a)) {
    const l = de(c, o), d = he(u, a);
    return Fi(e, t, s, l, d, n, i);
  } else {
    const l = en(c, o), d = $i[l], m = s.direction[d] >= 0;
    let _, p;
    m ? (_ = ue(c), p = fe(c, o)) : (_ = fe(c, o), p = ue(c));
    const g = Ve(_, r, s, n, i) ? Nn(_, e, t, s, n, i) : null;
    if (g) {
      const w = g.point[d];
      if (m ? w <= r[p + l] : (
        // min bounding data
        w >= r[p + l + 3]
      ))
        return g;
    }
    const x = Ve(p, r, s, n, i) ? Nn(p, e, t, s, n, i) : null;
    return g && x ? g.distance <= x.distance ? g : x : g || x || null;
  }
}
const Gt = /* @__PURE__ */ new be(), st = /* @__PURE__ */ new Me(), rt = /* @__PURE__ */ new Me(), yt = /* @__PURE__ */ new we(), xs = /* @__PURE__ */ new me(), jt = /* @__PURE__ */ new me();
function Ji(c, e, t, s) {
  Z.setBuffer(c._roots[e]);
  const n = Fn(0, c, t, s);
  return Z.clearBuffer(), n;
}
function Fn(c, e, t, s, n = null) {
  const { float32Array: i, uint16Array: r, uint32Array: a } = Z;
  let o = c * 2;
  if (n === null && (t.boundingBox || t.computeBoundingBox(), xs.set(t.boundingBox.min, t.boundingBox.max, s), n = xs), se(o, r)) {
    const f = e.geometry, l = f.index, d = f.attributes.position, h = t.index, m = t.attributes.position, _ = de(c, a), p = he(o, r);
    if (yt.copy(s).invert(), t.boundsTree)
      return ee(c, i, jt), jt.matrix.copy(yt), jt.needsUpdate = !0, t.boundsTree.shapecast({
        intersectsBounds: (g) => jt.intersectsBox(g),
        intersectsTriangle: (g) => {
          g.a.applyMatrix4(s), g.b.applyMatrix4(s), g.c.applyMatrix4(s), g.needsUpdate = !0;
          for (let y = _, x = p + _; y < x; y++)
            if (re(rt, 3 * e.resolveTriangleIndex(y), l, d), rt.needsUpdate = !0, g.intersectsTriangle(rt))
              return !0;
          return !1;
        }
      });
    {
      const v = nn(t);
      for (let g = _, y = p + _; g < y; g++) {
        const x = e.resolveTriangleIndex(g);
        re(st, 3 * x, l, d), st.a.applyMatrix4(yt), st.b.applyMatrix4(yt), st.c.applyMatrix4(yt), st.needsUpdate = !0;
        for (let w = 0, A = v * 3; w < A; w += 3)
          if (re(rt, w, h, m), rt.needsUpdate = !0, st.intersectsTriangle(rt))
            return !0;
      }
    }
  } else {
    const f = ue(c), l = fe(c, a);
    return ee(f, i, Gt), !!(n.intersectsBox(Gt) && Fn(f, e, t, s, n) || (ee(l, i, Gt), n.intersectsBox(Gt) && Fn(l, e, t, s, n)));
  }
}
const Kt = /* @__PURE__ */ new we(), gn = /* @__PURE__ */ new me(), vt = /* @__PURE__ */ new me(), Zi = /* @__PURE__ */ new U(), Qi = /* @__PURE__ */ new U(), eo = /* @__PURE__ */ new U(), to = /* @__PURE__ */ new U();
function no(c, e, t, s = {}, n = {}, i = 0, r = 1 / 0) {
  e.boundingBox || e.computeBoundingBox(), gn.set(e.boundingBox.min, e.boundingBox.max, t), gn.needsUpdate = !0;
  const a = c.geometry, o = a.attributes.position, u = a.index, f = e.attributes.position, l = e.index, d = ve.getPrimitive(), h = ve.getPrimitive();
  let m = Zi, _ = Qi, p = null, v = null;
  n && (p = eo, v = to);
  let g = 1 / 0, y = null, x = null;
  return Kt.copy(t).invert(), vt.matrix.copy(Kt), c.shapecast(
    {
      boundsTraverseOrder: (w) => gn.distanceToBox(w),
      intersectsBounds: (w, A, M) => M < g && M < r ? (A && (vt.min.copy(w.min), vt.max.copy(w.max), vt.needsUpdate = !0), !0) : !1,
      intersectsRange: (w, A) => {
        if (e.boundsTree) {
          const M = e.boundsTree;
          return M.shapecast({
            boundsTraverseOrder: (T) => vt.distanceToBox(T),
            intersectsBounds: (T, S, b) => b < g && b < r,
            intersectsRange: (T, S) => {
              for (let b = T, E = T + S; b < E; b++) {
                const R = M.resolveTriangleIndex(b);
                re(h, 3 * R, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
                for (let D = w, P = w + A; D < P; D++) {
                  const L = c.resolveTriangleIndex(D);
                  re(d, 3 * L, u, o), d.needsUpdate = !0;
                  const N = d.distanceToTriangle(h, m, p);
                  if (N < g && (_.copy(m), v && v.copy(p), g = N, y = D, x = b), N < i)
                    return !0;
                }
              }
            }
          });
        } else {
          const M = nn(e);
          for (let T = 0, S = M; T < S; T++) {
            re(h, 3 * T, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
            for (let b = w, E = w + A; b < E; b++) {
              const R = c.resolveTriangleIndex(b);
              re(d, 3 * R, u, o), d.needsUpdate = !0;
              const D = d.distanceToTriangle(h, m, p);
              if (D < g && (_.copy(m), v && v.copy(p), g = D, y = b, x = T), D < i)
                return !0;
            }
          }
        }
      }
    }
  ), ve.releasePrimitive(d), ve.releasePrimitive(h), g === 1 / 0 ? null : (s.point ? s.point.copy(_) : s.point = _.clone(), s.distance = g, s.faceIndex = y, n && (n.point ? n.point.copy(v) : n.point = v.clone(), n.point.applyMatrix4(Kt), _.applyMatrix4(Kt), n.distance = _.sub(n.point).length(), n.faceIndex = x), s);
}
function ys(c, e, t) {
  return c === null ? null : (c.point.applyMatrix4(e.matrixWorld), c.distance = c.point.distanceTo(t.ray.origin), c.object = e, c);
}
const Wt = /* @__PURE__ */ new me(), Yt = /* @__PURE__ */ new hr(), vs = /* @__PURE__ */ new U(), ws = /* @__PURE__ */ new we(), _s = /* @__PURE__ */ new U(), xn = ["getX", "getY", "getZ"];
class Qt extends Mi {
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
    const s = e.geometry, n = e._roots, i = e._indirectBuffer, r = s.getIndex(), a = {
      version: 1,
      roots: null,
      index: null,
      indirectBuffer: null
    };
    return t.cloneBuffers ? (a.roots = n.map((o) => o.slice()), a.index = r ? r.array.slice() : null, a.indirectBuffer = i ? i.slice() : null) : (a.roots = n, a.index = r ? r.array : null, a.indirectBuffer = i), a;
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
    const { index: n, roots: i, indirectBuffer: r } = e;
    e.version || (console.warn(
      "MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."
    ), o(i));
    const a = new Qt(t, { ...s, [jn]: !0 });
    if (a._roots = i, a._indirectBuffer = r || null, s.setIndex) {
      const u = t.getIndex();
      if (u === null) {
        const f = new at(e.index, 1, !1);
        t.setIndex(f);
      } else u.array !== n && (u.array.set(n), u.needsUpdate = !0);
    }
    return a;
    function o(u) {
      for (let f = 0; f < u.length; f++) {
        const l = u[f], d = new Uint32Array(l), h = new Uint16Array(l);
        for (let m = 0, _ = l.byteLength / le; m < _; m++) {
          const p = ce * m, v = 2 * p;
          se(v, h) || (d[p + 6] = d[p + 6] / ce - m);
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
    const n = this.geometry, i = this._indirectBuffer, r = n.attributes.position, a = n.index ? n.index.array : null, u = (i ? i[e] : e) * 3;
    let f = u + 0, l = u + 1, d = u + 2;
    a && (f = a[f], l = a[l], d = a[d]);
    for (let h = 0; h < 3; h++) {
      const m = r[xn[h]](f), _ = r[xn[h]](l), p = r[xn[h]](d);
      let v = m;
      _ < v && (v = _), p < v && (v = p);
      let g = m;
      _ > g && (g = _), p > g && (g = p), t[s + h] = v, t[s + h + 3] = g;
    }
    return t;
  }
  // precomputes the bounding box for each triangle; required for quickly calculating tree splits.
  // result is an array of size count * 6 where triangle i maps to a
  // [x_center, x_delta, y_center, y_delta, z_center, z_delta] tuple starting at index (i - offset) * 6,
  // representing the center and half-extent in each dimension of triangle i
  computePrimitiveBounds(e, t, s) {
    const n = this.geometry, i = this._indirectBuffer, r = n.attributes.position, a = n.index ? n.index.array : null, o = r.normalized;
    if (e < 0 || t + e - s.offset > s.length / 6)
      throw new Error("MeshBVH: compute triangle bounds range is invalid.");
    const u = r.array, f = r.offset || 0;
    let l = 3;
    r.isInterleavedBufferAttribute && (l = r.data.stride);
    const d = ["getX", "getY", "getZ"], h = s.offset;
    for (let m = e, _ = e + t; m < _; m++) {
      const v = (i ? i[m] : m) * 3, g = (m - h) * 6;
      let y = v + 0, x = v + 1, w = v + 2;
      a && (y = a[y], x = a[x], w = a[w]), o || (y = y * l + f, x = x * l + f, w = w * l + f);
      for (let A = 0; A < 3; A++) {
        let M, T, S;
        o ? (M = r[d[A]](y), T = r[d[A]](x), S = r[d[A]](w)) : (M = u[y + A], T = u[x + A], S = u[w + A]);
        let b = M;
        T < b && (b = T), S < b && (b = S);
        let E = M;
        T > E && (E = T), S > E && (E = S);
        const R = (E - b) / 2, D = A * 2;
        s[g + D + 0] = b + R, s[g + D + 1] = R + (Math.abs(b) + R) * $t;
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
    ws.copy(e.matrixWorld).invert(), Yt.copy(t.ray).applyMatrix4(ws), _s.setFromMatrixScale(e.matrixWorld), vs.copy(Yt.direction).multiply(_s);
    const i = vs.length(), r = t.near / i, a = t.far / i;
    if (t.firstHitOnly === !0) {
      let o = this.raycastFirst(Yt, n, r, a);
      o = ys(o, e, t), o && s.push(o);
    } else {
      const o = this.raycast(Yt, n, r, a);
      for (let u = 0, f = o.length; u < f; u++) {
        const l = ys(o[u], e, t);
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
    return (this.indirect ? Yi : Li)(this, e);
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
  raycast(e, t = Tn, s = 0, n = 1 / 0) {
    const i = this._roots, r = [], a = this.indirect ? Xi : Oi;
    for (let o = 0, u = i.length; o < u; o++)
      a(this, o, t, e, r, s, n);
    return r;
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
  raycastFirst(e, t = Tn, s = 0, n = 1 / 0) {
    const i = this._roots;
    let r = null;
    const a = this.indirect ? qi : Hi;
    for (let o = 0, u = i.length; o < u; o++) {
      const f = a(this, o, t, e, s, n);
      f != null && (r == null || f.distance < r.distance) && (r = f);
    }
    return r;
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
    const n = this._roots, i = this.indirect ? Ji : Vi;
    for (let r = 0, a = n.length; r < a && (s = i(this, r, e, t), !s); r++)
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
    const t = ve.getPrimitive(), s = super.shapecast(
      {
        ...e,
        intersectsPrimitive: e.intersectsTriangle,
        scratchPrimitive: t,
        // TODO: is the performance significant enough for the added complexity here?
        // can we just use one function?
        iterate: this.indirect ? Ui : Ci
      }
    );
    return ve.releasePrimitive(t), s;
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
      intersectsTriangles: i
    } = s;
    const r = ve.getPrimitive(), a = this.geometry.index, o = this.geometry.attributes.position, u = this.indirect ? (m) => {
      const _ = this.resolveTriangleIndex(m);
      re(r, _ * 3, a, o);
    } : (m) => {
      re(r, m * 3, a, o);
    }, f = ve.getPrimitive(), l = e.geometry.index, d = e.geometry.attributes.position, h = e.indirect ? (m) => {
      const _ = e.resolveTriangleIndex(m);
      re(f, _ * 3, l, d);
    } : (m) => {
      re(f, m * 3, l, d);
    };
    if (i) {
      if (!(e instanceof Qt))
        throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');
      const m = (_, p, v, g, y, x, w, A) => {
        for (let M = v, T = v + g; M < T; M++) {
          h(M), f.a.applyMatrix4(t), f.b.applyMatrix4(t), f.c.applyMatrix4(t), f.needsUpdate = !0;
          for (let S = _, b = _ + p; S < b; S++)
            if (u(S), r.needsUpdate = !0, i(r, f, S, M, y, x, w, A))
              return !0;
        }
        return !1;
      };
      if (n) {
        const _ = n;
        n = function(p, v, g, y, x, w, A, M) {
          return _(p, v, g, y, x, w, A, M) ? !0 : m(p, v, g, y, x, w, A, M);
        };
      } else
        n = m;
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
    return Wt.set(e.min, e.max, t), Wt.needsUpdate = !0, this.shapecast(
      {
        intersectsBounds: (s) => Wt.intersectsBox(s),
        intersectsTriangle: (s) => Wt.intersectsTriangle(s)
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
  closestPointToGeometry(e, t, s = {}, n = {}, i = 0, r = 1 / 0) {
    return (this.indirect ? no : Wi)(
      this,
      e,
      t,
      s,
      n,
      i,
      r
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
    return Ei(
      this,
      e,
      t,
      s,
      n
    );
  }
}
function so(c) {
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
function ro(c) {
  switch (c) {
    case 1:
      return yr;
    case 2:
      return xr;
    case 3:
      return Jt;
    case 4:
      return Jt;
  }
}
function Ts(c) {
  switch (c) {
    case 1:
      return gr;
    case 2:
      return Hs;
    case 3:
      return bn;
    case 4:
      return bn;
  }
}
class Qs extends Mn {
  constructor() {
    super(), this.minFilter = Oe, this.magFilter = Oe, this.generateMipmaps = !1, this.overrideItemSize = null, this._forcedType = null;
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
    const i = e.itemSize, r = e.count, a = e.normalized, o = e.array.constructor, u = o.BYTES_PER_ELEMENT;
    let f = this._forcedType, l = i;
    if (f === null)
      switch (o) {
        case Float32Array:
          f = He;
          break;
        case Uint8Array:
        case Uint16Array:
        case Uint32Array:
          f = bt;
          break;
        case Int8Array:
        case Int16Array:
        case Int32Array:
          f = rn;
          break;
      }
    let d, h, m, _, p = so(i);
    switch (f) {
      case He:
        m = 1, h = ro(i), a && u === 1 ? (_ = o, p += "8", o === Uint8Array ? d = At : (d = Yn, p += "_SNORM")) : (_ = Float32Array, p += "32F", d = He);
        break;
      case rn:
        p += u * 8 + "I", m = a ? Math.pow(2, o.BYTES_PER_ELEMENT * 8 - 1) : 1, h = Ts(i), u === 1 ? (_ = Int8Array, d = Yn) : u === 2 ? (_ = Int16Array, d = pr) : (_ = Int32Array, d = rn);
        break;
      case bt:
        p += u * 8 + "UI", m = a ? Math.pow(2, o.BYTES_PER_ELEMENT * 8 - 1) : 1, h = Ts(i), u === 1 ? (_ = Uint8Array, d = At) : u === 2 ? (_ = Uint16Array, d = mr) : (_ = Uint32Array, d = bt);
        break;
    }
    l === 3 && (h === Jt || h === bn) && (l = 4);
    const v = Math.ceil(Math.sqrt(r)) || 1, g = l * v * v, y = new _(g), x = e.normalized;
    e.normalized = !1;
    for (let w = 0; w < r; w++) {
      const A = l * w;
      y[A] = e.getX(w) / m, i >= 2 && (y[A + 1] = e.getY(w) / m), i >= 3 && (y[A + 2] = e.getZ(w) / m, l === 4 && (y[A + 3] = 1)), i >= 4 && (y[A + 3] = e.getW(w) / m);
    }
    e.normalized = x, this.internalFormat = p, this.format = h, this.type = d, this.image.width = v, this.image.height = v, this.image.data = y, this.needsUpdate = !0, this.dispose(), e.itemSize = s, e.count = n;
  }
}
class io extends Qs {
  constructor() {
    super(), this._forcedType = bt;
  }
}
class oo extends Qs {
  constructor() {
    super(), this._forcedType = He;
  }
}
class ao {
  constructor() {
    this.index = new io(), this.position = new oo(), this.bvhBounds = new Mn(), this.bvhContents = new Mn(), this._cachedIndexAttr = null, this.index.overrideItemSize = 3;
  }
  /**
   * Updates the object and associated textures with data from the provided BVH.
   *
   * @param {MeshBVH} bvh
   * @returns {void}
   */
  updateFrom(e) {
    const { geometry: t } = e;
    if (lo(e, this.bvhBounds, this.bvhContents), this.position.updateFrom(t.attributes.position), e.indirect) {
      const s = e._indirectBuffer;
      if (this._cachedIndexAttr === null || this._cachedIndexAttr.count !== s.length)
        if (t.index)
          this._cachedIndexAttr = t.index.clone();
        else {
          const n = Zs(tn(t));
          this._cachedIndexAttr = new at(n, 1, !1);
        }
      co(t, s, this._cachedIndexAttr), this.index.updateFrom(this._cachedIndexAttr);
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
function co(c, e, t) {
  const s = t.array, n = c.index ? c.index.array : null;
  for (let i = 0, r = e.length; i < r; i++) {
    const a = 3 * i, o = 3 * e[i];
    for (let u = 0; u < 3; u++)
      s[a + u] = n ? n[o + u] : o + u;
  }
}
function lo(c, e, t) {
  const s = c._roots;
  if (s.length !== 1)
    throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");
  const n = s[0], i = new Uint16Array(n), r = new Uint32Array(n), a = new Float32Array(n), o = n.byteLength / le, u = 2 * Math.ceil(Math.sqrt(o / 2)), f = new Float32Array(4 * u * u), l = Math.ceil(Math.sqrt(o)), d = new Uint32Array(2 * l * l);
  for (let h = 0; h < o; h++) {
    const m = h * le / 4, _ = m * 2, p = m;
    for (let v = 0; v < 3; v++)
      f[8 * h + 0 + v] = a[p + 0 + v], f[8 * h + 4 + v] = a[p + 3 + v];
    if (se(_, i)) {
      const v = he(_, i), g = de(m, r), y = ii | v;
      d[h * 2 + 0] = y, d[h * 2 + 1] = g;
    } else {
      const v = r[m + 6], g = en(m, r);
      d[h * 2 + 0] = g, d[h * 2 + 1] = v;
    }
  }
  e.image.data = f, e.image.width = u, e.image.height = u, e.format = Jt, e.type = He, e.internalFormat = "RGBA32F", e.minFilter = Oe, e.magFilter = Oe, e.generateMipmaps = !1, e.needsUpdate = !0, e.dispose(), t.image.data = d, t.image.width = l, t.image.height = l, t.format = Hs, t.type = bt, t.internalFormat = "RG32UI", t.minFilter = Oe, t.magFilter = Oe, t.generateMipmaps = !1, t.needsUpdate = !0, t.dispose();
}
const uo = (
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
), fo = (
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
), ho = (
  /* glsl */
  `
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`
), mo = ho, po = `
	${uo}
	${fo}
`, lt = () => {
  const c = Hn.useContext(zn);
  if (!c)
    throw new Error("useMainContext must be used within MainContextProvider");
  return c;
};
function go(c) {
  c.updateMatrixWorld(!0);
  const e = new C.Box3(), t = new C.Vector3();
  let s = !1;
  const n = c.parent, i = n ? new C.Matrix4().copy(n.matrixWorld).invert() : new C.Matrix4(), r = new C.Matrix4();
  return c.traverse((a) => {
    const o = a;
    if (o.isMesh && o.geometry?.attributes?.position) {
      const u = o.geometry.attributes.position;
      r.multiplyMatrices(i, o.matrixWorld);
      for (let f = 0; f < u.count; f++)
        t.fromBufferAttribute(u, f), t.applyMatrix4(r), e.expandByPoint(t), s = !0;
    }
  }), s || (e.setFromObject(c), n && e.applyMatrix4(i)), e;
}
function xo(c, e = -Math.PI / 4, t = -Math.PI / 10, s = Math.PI / 3) {
  c.rotation.set(0, 0, 0), c.position.set(0, 0, 0), c.updateMatrixWorld(!0);
  const n = new C.Box3().setFromObject(c), i = new C.Vector3();
  n.getCenter(i);
  const r = new C.Vector3();
  n.getSize(r), r.length() === 0 && (r.set(1, 1, 1), n.min.set(-0.5, -0.5, -0.5), n.max.set(0.5, 0.5, 0.5), i.set(0, 0, 0)), c.rotation.set(e, t, s), c.updateMatrixWorld(!0);
  const a = go(c), o = new C.Vector3();
  a.getCenter(o);
  const u = a.min.y, f = a.max.y;
  c.position.copy(o).negate(), c.updateMatrixWorld(!0);
  const l = u - o.y, d = f - o.y;
  return {
    localBox: n,
    localCenter: i,
    localSize: r,
    rotatedCenterOffset: o,
    minY: l,
    maxY: d,
    rotatedBox: a
  };
}
class wt extends C.TextureLoader {
  load(e, t, s, n) {
    if (!e) {
      const i = new C.Texture();
      return t && setTimeout(() => t(i), 0), i;
    }
    return super.load(
      e,
      (i) => {
        t && t(i);
      },
      s,
      (i) => {
        console.warn(`SafeTextureLoader: Failed to load texture at "${e}".`);
        const r = new C.Texture();
        t && t(r);
      }
    );
  }
}
const yo = (
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
), vo = (
  /* glsl */
  `
  precision highp float;
  precision highp sampler2D;
  precision highp isampler2D;

  ${mo}
  ${po}

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
class wo extends C.ShaderMaterial {
  constructor({
    geometry: e,
    bvh: t,
    envMap: s,
    backgroundTexture: n = null,
    resolution: i = new C.Vector2(1024, 768),
    ior: r = 2.4,
    bounces: a = 3,
    aberrationStrength: o = 1e-3,
    fresnel: u = 0.01,
    reflectivity: f = 1,
    color: l = 16777215,
    blur: d = 0.12,
    envRotation: h = 0,
    highlightColor: m = 16777215,
    highlightTolerance: _ = 1,
    attenuationColor: p = 16777215,
    attenuationDistance: v = 1
  }) {
    const g = new ao();
    g.updateFrom(t), super({
      glslVersion: C.GLSL3,
      vertexShader: yo,
      fragmentShader: vo,
      uniforms: {
        bvh: { value: g },
        tDiffuse: { value: n },
        resolution: { value: i },
        envMap: { value: s },
        uColor: { value: new C.Color(l) },
        uIOR: { value: r },
        uAberration: { value: o },
        uFresnel: { value: u },
        uReflectivity: { value: f },
        uBlur: { value: d },
        uEnvRotation: { value: h },
        uHighlightColor: { value: new C.Color(m) },
        uHighlightTolerance: { value: _ },
        uAttenuationColor: { value: new C.Color(p) },
        uAttenuationDistance: { value: v },
        uBounces: { value: a },
        uModelMatrix: { value: new C.Matrix4() },
        uModelMatrixInverse: { value: new C.Matrix4() }
      },
      transparent: !0,
      depthWrite: !0
    }), this.onBeforeRender = (y, x, w, A, M) => {
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
const _t = (c, e) => {
  if (!c) return;
  for (const s of e)
    if (c[s]) return c[s];
  const t = e.map((s) => s.toLowerCase());
  for (const s of Object.keys(c))
    if (t.includes(s.toLowerCase()))
      return c[s];
}, Ms = (c, e) => {
  if (!c) return;
  const t = e.map((s) => s.toLowerCase());
  for (const s of Object.keys(c)) {
    const n = s.toLowerCase();
    for (const i of t)
      if (n.includes(i))
        return c[s];
  }
  for (const s of Object.keys(c)) {
    const n = c[s];
    if (typeof n == "string") {
      const i = n.toLowerCase();
      for (const r of t)
        if (i.includes(r))
          return n;
    }
  }
};
function _o(c, e, t, s, n, i, r, a = 0) {
  const o = ["♥", "♥︎♥︎", "○○", "⚭", "∞"];
  if (!o.some((p) => e.includes(p)) || !r) {
    c.textAlign = "center", c.fillText(e, t, s), a > 0 && c.strokeText(e, t, s);
    return;
  }
  const f = e.split(/(♥︎♥︎|○○|[♥⚭∞])/u), l = [];
  c.font = `bold ${n}px ${i}`;
  const d = n;
  for (const p of f)
    if (p)
      if (o.includes(p)) {
        const v = r[p];
        if (v && v.img) {
          const g = v.width, y = v.height, x = y > 0 ? g / y * d : 0;
          l.push({
            type: "symbol",
            text: p,
            width: x,
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
  let _ = t - h / 2;
  c.textAlign = "left";
  for (const p of l) {
    if (p.type === "symbol" && p.img) {
      const v = s - d / 2;
      c.drawImage(p.img, _, v, p.width, d);
    } else
      c.fillText(p.text, _, s), a > 0 && c.strokeText(p.text, _, s);
    _ += p.width;
  }
}
let xe = null;
function bs(c, e, t) {
  const s = new Int32Array(e * t), n = new Float32Array(e * t), i = 1e9;
  for (let o = 0; o < e; o++) {
    let u = i;
    for (let f = 0; f < t; f++) {
      const l = f * e + o;
      c[l] !== 0 ? u = 0 : u = u === i ? i : u + 1, s[l] = u;
    }
    u = i;
    for (let f = t - 1; f >= 0; f--) {
      const l = f * e + o;
      c[l] !== 0 ? u = 0 : u = u === i ? i : u + 1, u < s[l] && (s[l] = u);
    }
  }
  const r = new Int32Array(e), a = new Int32Array(e);
  for (let o = 0; o < t; o++) {
    const u = o * e;
    let f = 0;
    r[0] = 0, a[0] = 0;
    for (let l = 1; l < e; l++) {
      const d = s[u + l], h = d === i ? i : d * d;
      for (; f >= 0; ) {
        const m = r[f], _ = s[u + m], p = _ === i ? i : _ * _;
        let v = 0;
        if (h === i ? v = i : p === i ? v = 0 : v = 1 + Math.floor((l * l - m * m + (h - p)) / (2 * (l - m))), v < a[f])
          f--;
        else {
          v < e && (f++, r[f] = l, a[f] = v);
          break;
        }
      }
      f < 0 && (f = 0, r[0] = l, a[0] = 0);
    }
    for (let l = e - 1; l >= 0; l--) {
      for (; f > 0 && l < a[f]; )
        f--;
      const d = r[f], h = l - d, m = s[u + d], _ = m === i ? i : m * m, p = h * h + _;
      n[u + l] = Math.sqrt(p);
    }
  }
  return n;
}
function Un(c) {
  const {
    text: e,
    width: t = 1024,
    height: s = 200,
    fontSize: n = 5,
    fontFamily: i = "Arial, sans-serif",
    blur: r = 5,
    mode: a = "emboss",
    offsetY: o = 0,
    offsetX: u = 0,
    symbolsMap: f = null,
    // SDF options
    bevelWidth: l = 4,
    engravingDepth: d = 0.35,
    edgeSoftness: h = 0.3,
    strokeWidth: m = 0
  } = c, p = document.createElement("canvas").getContext("2d");
  if (!p)
    throw new Error("2D Canvas Context is not supported in this environment.");
  const v = 20;
  p.font = `bold ${v}px ${i}`;
  let g = 0;
  const y = ["♥", "♥︎♥︎", "○○", "⚭", "∞"];
  if (!y.some((k) => e.includes(k)) || !f)
    g = p.measureText(e).width;
  else {
    const k = e.split(/(♥︎♥︎|○○|[♥⚭∞])/u), H = v;
    for (const W of k)
      if (W)
        if (y.includes(W)) {
          const Y = f[W];
          if (Y && Y.img) {
            const q = Y.width, ne = Y.height, F = ne > 0 ? q / ne * H : 0;
            g += F;
          } else
            g += p.measureText(W).width;
        } else
          g += p.measureText(W).width;
  }
  const w = 0.85, A = g / v + r * 8 / n, M = 1 + r * 8 / n, T = A > 0 ? (t * w - 20 - Math.abs(u) * 2) / A : 1 / 0, S = M > 0 ? (s * w - 20 - Math.abs(o) * 2) / M : 1 / 0, R = p.measureText("AaBbCcDdEeFfGgHhIiJj").width / v + r * 8 / n, D = R > 0 ? (t * w - 20 - Math.abs(u) * 2) / R : 1 / 0, P = Math.max(
    1,
    Math.floor(Math.min(T, S, D))
  );
  let L = "";
  f && (L = Object.keys(f).sort().map((k) => `${k}:${f[k]?.img.src || ""}`).join(","));
  const N = 2, V = t * N, X = s * N;
  let Q, K;
  if (xe && xe.text === e && xe.fontFamily === i && xe.width === t && xe.height === s && xe.offsetY === o && xe.offsetX === u && xe.symbolsKey === L && xe.strokeWidth === m)
    Q = xe.sdf, K = xe.coverage;
  else {
    const k = document.createElement("canvas");
    k.width = V, k.height = X;
    const H = k.getContext("2d");
    if (!H)
      throw new Error("Could not get 2D context for temp canvas");
    H.fillStyle = "#FFFFFF", H.fillRect(0, 0, V, X), H.fillStyle = "#000000", H.strokeStyle = "#000000", H.lineWidth = m * N;
    const W = P * N;
    H.font = `bold ${W}px ${i}`, H.textBaseline = "middle";
    const Y = V / 2 + u * N, q = X / 2 + o * N;
    _o(
      H,
      e,
      Y,
      q,
      W,
      i,
      f,
      m * N
    );
    const ne = H.getImageData(0, 0, V, X), F = new Uint8Array(V * X);
    K = new Uint8Array(V * X);
    for (let J = 0; J < V * X; J++) {
      const Ie = ne.data[J * 4];
      F[J] = Ie < 128 ? 1 : 0, K[J] = 255 - Ie;
    }
    const G = bs(F, V, X), te = new Uint8Array(V * X);
    for (let J = 0; J < V * X; J++)
      te[J] = F[J] === 0 ? 1 : 0;
    const oe = bs(te, V, X);
    Q = new Float32Array(V * X);
    for (let J = 0; J < V * X; J++)
      Q[J] = G[J] - oe[J];
    xe = {
      text: e,
      fontFamily: i,
      width: t,
      height: s,
      offsetY: o,
      offsetX: u,
      symbolsKey: L,
      strokeWidth: m,
      sdf: Q,
      coverage: K
    };
  }
  const I = document.createElement("canvas");
  I.width = t, I.height = s;
  const B = I.getContext("2d");
  if (!B)
    throw new Error("2D Canvas Context is not supported in this environment.");
  const O = document.createElement("canvas");
  O.width = V, O.height = X;
  const z = O.getContext("2d");
  if (!z)
    throw new Error("Could not get 2D context for tempOutCanvas");
  const ie = z.createImageData(V, X), pe = ie.data;
  for (let k = 0; k < V * X; k++) {
    let H = Q[k];
    const W = Math.abs(H), Y = 1.5 * N;
    if (W < Y) {
      const qe = (Y - W) / Y, or = (0.5 - K[k] / 255) * Y;
      H = (1 - qe) * H + qe * or;
    }
    let q = 0;
    if (H >= 0) {
      const qe = 1.5 * N;
      q = H / qe;
    } else {
      const qe = Math.max(0.1, l * N);
      q = H / qe;
    }
    const F = (Math.max(-1, Math.min(1, q)) + 1) / 2, G = 3 * F * F - 2 * F * F * F, te = (1 - h) * F + h * G, oe = 1 - d + d * te, J = Math.round(255 * oe), Ie = k * 4;
    pe[Ie] = J, pe[Ie + 1] = J, pe[Ie + 2] = J, pe[Ie + 3] = 255;
  }
  return z.putImageData(ie, 0, 0), B.imageSmoothingEnabled = !0, B.imageSmoothingQuality = "high", B.drawImage(O, 0, 0, t, s), I;
}
function To(c, e, t) {
  fetch(c).then((s) => {
    if (!s.ok) throw new Error("Failed to fetch SVG");
    return s.text();
  }).then((s) => {
    let n = s.replace(/fill="[^"]*"/g, `fill="${e}"`).replace(/stroke="[^"]*"/g, `stroke="${e}"`);
    const i = new Blob([n], {
      type: "image/svg+xml;charset=utf-8"
    }), r = URL.createObjectURL(i), a = new Image();
    a.onload = () => {
      t(a, a.naturalWidth || 20, a.naturalHeight || 20), URL.revokeObjectURL(r);
    }, a.onerror = () => {
      t(null, 0, 0), URL.revokeObjectURL(r);
    }, a.src = r;
  }).catch((s) => {
    console.error("Error loading SVG symbol:", s), t(null, 0, 0);
  });
}
function Mo(c, e = 4) {
  const t = c.width, s = c.height, n = document.createElement("canvas");
  n.width = t, n.height = s;
  const i = n.getContext("2d"), r = c.getContext("2d");
  if (!i || !r) return n;
  const a = r.getImageData(0, 0, t, s), o = i.createImageData(t, s), u = (f, l) => {
    const d = Math.max(0, Math.min(t - 1, f)), h = Math.max(0, Math.min(s - 1, l));
    return a.data[(h * t + d) * 4];
  };
  for (let f = 0; f < s; f++)
    for (let l = 0; l < t; l++) {
      const d = u(l - 1, f), h = u(l + 1, f), m = u(l, f - 1), _ = u(l, f + 1), p = (h - d) / 255 * e, v = (_ - m) / 255 * e, g = 1, y = Math.sqrt(p * p + v * v + g * g), x = p / y, w = v / y, A = g / y, M = (f * t + l) * 4;
      o.data[M] = Math.round((x + 1) * 127.5), o.data[M + 1] = Math.round((w + 1) * 127.5), o.data[M + 2] = Math.round((A + 1) * 127.5), o.data[M + 3] = 255;
    }
  return i.putImageData(o, 0, 0), n;
}
const bo = ze(({ textOffsetX: c = 0 }) => {
  const { design3DManager: e } = lt(), { ringManager: t } = e, s = t.engravingText || "", n = t.engravingFont;
  return ae(() => {
    if (!s) {
      console.log("BBoxEngrave: No text engraved");
      return;
    }
    const i = Un({
      text: s,
      fontFamily: n,
      mode: "engrave",
      blur: 0.01,
      offsetY: 0,
      offsetX: c
    }), r = i.getContext("2d");
    if (!r) return;
    const { width: a, height: o } = i, f = r.getImageData(0, 0, a, o).data;
    let l = a, d = 0, h = o, m = 0, _ = !1;
    for (let p = 0; p < o; p++)
      for (let v = 0; v < a; v++) {
        const g = (p * a + v) * 4, y = f[g], x = f[g + 1], w = f[g + 2];
        (y < 240 || x < 240 || w < 240) && (v < l && (l = v), v > d && (d = v), p < h && (h = p), p > m && (m = p), _ = !0);
      }
    _ ? (console.log(`BBoxEngrave - Text: "${s}", OffsetX: ${c}`), console.log(
      `Bounding Box -> minX: ${l}, maxX: ${d}, minY: ${h}, maxY: ${m}`
    )) : console.log(
      `BBoxEngrave - Text: "${s}", OffsetX: ${c} -> No pixels found`
    );
  }, [s, n, c]), null;
}), Ao = ze(
  ({ modelUrl: c }) => {
    const { design3DManager: e } = lt(), { ringManager: t } = e, {
      currentView: s,
      engravingText: n,
      engravingSymbol: i,
      engravingFont: r,
      bevelWidth: a,
      engravingDepth: o,
      edgeSoftness: u,
      normalStrength: f,
      aoStrength: l,
      strokeWidth: d
    } = t, { scene: h } = Bs(c), m = _n(() => {
      if (!h) return null;
      let w = null;
      return h.traverse((A) => {
        const M = A;
        if (M.isMesh) {
          const T = M.name;
          (T === "Engraving Mesh" || T === "Engraving Metal" || T === "Engraving_Mesh" || T === "Engraving_Metal" || T.includes("Engraving")) && (w = M);
        }
      }), w;
    }, [h]), [_, p] = Ds({ normalTexture: null, aoTexture: null });
    ae(() => {
      if (s !== 2 || !n && !i) {
        p((T) => (T.normalTexture?.dispose(), T.aoTexture?.dispose(), { normalTexture: null, aoTexture: null })), t.setEngravingCanvas(null), t.setNormalMapCanvas(null);
        return;
      }
      let w = !0;
      const A = (T, S) => new Promise((b) => {
        To(T, S, (E, R, D) => {
          b(E ? { img: E, width: R, height: D } : null);
        });
      });
      return (async () => {
        const T = ["♥", "♥︎♥︎", "○○", "⚭", "∞"], S = {
          "♥": "/message/OneH.svg",
          "♥︎♥︎": "/message/TwoH.svg",
          "○○": "/message/TwoR.svg",
          "⚭": "/message/TwoR.svg",
          "∞": "/message/Infinite.svg"
        }, b = T.filter(
          (B) => (n || "").includes(B)
        ), E = [], R = {};
        for (const B of b) {
          const O = S[B];
          E.push(
            A(O, "#000000").then((z) => {
              R[B] = z;
            })
          );
        }
        if (await Promise.all(E), typeof document < "u" && document.fonts && r)
          try {
            await document.fonts.load(`bold 30px ${r}`);
          } catch (B) {
            console.error("Failed to load engraving font:", B);
          }
        if (!w) return;
        const D = Un({
          text: n || "",
          fontFamily: r,
          width: 2048,
          height: 400,
          mode: "engrave",
          blur: 0,
          offsetY: 0,
          offsetX: -10,
          symbolsMap: R,
          bevelWidth: a,
          engravingDepth: o,
          edgeSoftness: u,
          strokeWidth: d
        }), P = Un({
          text: n || "",
          fontFamily: r,
          width: 2048,
          height: 400,
          mode: "engrave",
          blur: 0,
          offsetY: 0,
          offsetX: -10,
          symbolsMap: R,
          bevelWidth: a,
          engravingDepth: 1,
          // Force full depth (0.0 height/blackness) inside the letters for perfect shadow contrast
          edgeSoftness: u,
          strokeWidth: d
        }), L = Mo(D, f), N = new C.CanvasTexture(L), V = new C.CanvasTexture(P);
        N.anisotropy = 16, V.anisotropy = 16;
        const X = D.width / D.height, Q = 2.2, K = -1 * Q, I = 1 * Q * X;
        N.wrapS = C.ClampToEdgeWrapping, N.wrapT = C.ClampToEdgeWrapping, N.repeat.set(K, I), N.offset.set(0.5 - 0.5 * K, 0.5 - 0.5 * I), N.colorSpace = C.NoColorSpace, V.wrapS = C.ClampToEdgeWrapping, V.wrapT = C.ClampToEdgeWrapping, V.repeat.set(K, I), V.offset.set(0.5 - 0.5 * K, 0.5 - 0.5 * I), V.colorSpace = C.NoColorSpace, t.setEngravingCanvas(D), t.setNormalMapCanvas(L), p((B) => (B.normalTexture?.dispose(), B.aoTexture?.dispose(), { normalTexture: N, aoTexture: V }));
      })(), () => {
        w = !1;
      };
    }, [
      n,
      i,
      r,
      s,
      a,
      o,
      u,
      f,
      l,
      d,
      m
    ]), ae(() => () => {
      p((w) => (w.normalTexture?.dispose(), w.aoTexture?.dispose(), { normalTexture: null, aoTexture: null })), t.setEngravingCanvas(null), t.setNormalMapCanvas(null);
    }, []);
    const { normalTexture: v, aoTexture: g } = _;
    ae(() => {
      if (!m || !m.geometry) return;
      m.geometry.computeBoundingBox();
      const w = m.geometry.boundingBox;
      if (w) {
        const T = new C.Vector3();
        w.getSize(T), console.log("--- DEBUG RING MESH SIZE ---", {
          name: m.name,
          x: T.x,
          y: T.y,
          z: T.z
        });
      }
      const A = m.onBeforeRender, M = m.onAfterRender;
      return m.onBeforeRender = (T, S, b, E, R, D) => {
        A && A.call(
          m,
          T,
          S,
          b,
          E,
          R,
          D
        ), b instanceof C.OrthographicCamera && E.setDrawRange(0, 0);
      }, m.onAfterRender = (T, S, b, E, R, D) => {
        M && M.call(
          m,
          T,
          S,
          b,
          E,
          R,
          D
        ), E.setDrawRange(0, 1 / 0);
      }, () => {
        m.onBeforeRender = A, m.onAfterRender = M, m.geometry && m.geometry.setDrawRange(0, 1 / 0);
      };
    }, [m]);
    const y = Te(null), x = Te(null);
    return ae(() => {
      if (!(!m || !m.geometry))
        if (s === 2 && v && g) {
          let w = m.material;
          if (w.userData?.isEngraved ? w = y.current : y.current !== w && (y.current = w, x.current && (x.current.dispose(), x.current = null)), w) {
            if (!x.current) {
              const M = w.clone();
              M.userData.isEngraved = !0, M.normalScale = new C.Vector2(-0.05, 0.05), x.current = M;
            }
            const A = x.current;
            A.normalMap = v, A.aoMap = g, A.aoMapIntensity = l, m.material !== A && (m.material = A);
          }
        } else
          y.current && m.material !== y.current && (m.material = y.current);
    }, [
      m,
      m?.material,
      v,
      g,
      s,
      l
    ]), ae(() => () => {
      m && y.current && (m.material = y.current), x.current && (x.current.dispose(), x.current = null);
    }, [m]), /* @__PURE__ */ $.jsx(bo, {});
  }
), Ro = ze(
  ({ modelUrl: c, diamondEnvMap: e, size: t }) => {
    const { design3DManager: s, designManager: n } = lt(), { ringManager: i } = s, {
      colorHex: r,
      baseColorHex: a,
      finishingColorHex: o,
      engravingColorHex: u,
      roughness: f,
      finish: l,
      showDiamond: d,
      currentView: h
    } = i, { scene: m } = Bs(c), _ = Te(new C.Color(a)), p = Te(new C.Color(o)), v = Te(new C.Color(u)), g = Te(f);
    ae(() => {
      _.current.set(a), p.current.set(o), v.current.set(u), g.current = f;
    }, [a, o, u, f]);
    const y = _n(() => {
      if (!m) return null;
      const ne = {
        x: -Math.PI / 4,
        y: -Math.PI / 10,
        z: Math.PI / 3
      }, F = {
        x: ne.x - 8.42,
        y: ne.y + 6.67,
        z: ne.z - 1.05
      }, G = h === 2 ? F : ne;
      return xo(m, G.x, G.y, G.z);
    }, [m, h]);
    ae(() => {
      y && n.setModelMinY(y.minY || 0);
    }, [y, n]), ae(() => {
      i._markLoaded();
    }, [m, i]);
    const x = _t(i?.textures, [
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
    ]), w = !!x, A = _t(i?.textures, [
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
    ]), M = !!A, T = _t(i?.textures, [
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
    ]), S = !!T, b = _t(i?.textures, [
      "normalBase",
      "Base_Metal_Normal",
      "Base_metal_Normal",
      "base_metal_normal",
      "Base_Metal_Normal.webp",
      "Base_metal_Normal.webp",
      "base_metal_normal.webp"
    ]) || Ms(i?.textures, [
      "Base_Metal_Normal",
      "base_metal_normal"
    ]), E = !!b, R = _t(i?.textures, [
      "normalFinishing",
      "Finishing_Metal_Normal",
      "Finishing_metal_Normal",
      "finishing_metal_normal",
      "Finishing_Metal_Normal.webp",
      "Finishing_metal_Normal.webp",
      "finishing_metal_normal.webp"
    ]) || Ms(i?.textures, [
      "Finishing_Metal_Normal",
      "finishing_metal_normal"
    ]), D = (ne) => {
      const F = ne.split("/"), G = F.findIndex((te) => te === "BehytRings");
      return G !== -1 && F.length > G + 3 ? {
        collection: F[G + 1],
        modelId: F[G + 2],
        variation: F[G + 3]
      } : null;
    }, P = !!R, L = w && x ? x : "", N = M && A ? A : "", V = S && T ? T : "", X = E && b ? b : "", Q = P && R ? R : "", K = ut(
      wt,
      L
    );
    K && (K.flipY = !1);
    const I = ut(
      wt,
      N
    );
    I && (I.flipY = !1);
    const B = ut(
      wt,
      V
    );
    B && (B.flipY = !1);
    const O = ut(
      wt,
      X
    );
    O && (O.flipY = !1, O.colorSpace = C.NoColorSpace);
    const z = ut(
      wt,
      Q
    );
    z && (z.flipY = !1, z.colorSpace = C.NoColorSpace);
    const ie = i.modelUrl ? D(i.modelUrl) : null, pe = ie ? `/BehytRings/${ie.collection}/${ie.modelId}/${ie.variation}/Roughness_Map.jpg` : "", k = i.textures;
    k?.roughness && !k.roughness.endsWith("roughness.jpg") && k.roughness;
    const H = 1, W = Te(
      new C.MeshPhysicalMaterial({
        color: r,
        metalness: 1,
        roughness: 0,
        aoMap: w ? K : null,
        aoMapIntensity: w ? 1 : 0,
        // roughnessMap: roughnessTexture,
        clearcoat: l === "Polished" ? 1 : 0,
        normalScale: new C.Vector2(H, H),
        normalMap: E ? O : null,
        alphaMap: K
      })
    ), Y = Te(
      new C.MeshPhysicalMaterial({
        color: "#f6f5f5",
        metalness: 1,
        roughness: 0,
        aoMap: M ? I : null,
        aoMapIntensity: M ? 0.8 : 0,
        // roughnessMap: roughnessTexture,
        clearcoat: l === "Polished" ? 1 : 0,
        clearcoatRoughness: 0.1,
        normalScale: new C.Vector2(H, H),
        normalMap: P ? z : null
      })
    ), q = Te(
      new C.MeshPhysicalMaterial({
        color: r,
        metalness: 1,
        roughness: f,
        aoMap: S ? B : null,
        aoMapIntensity: S ? 1 : 0,
        // roughnessMap: roughnessTexture,
        clearcoat: l === "Polished" ? 1 : 0,
        clearcoatRoughness: 0.1
      })
    );
    return ae(() => {
      W.current.aoMap = w ? K : null, W.current.aoMapIntensity = w ? 1 : 0, W.current.normalMap = E ? O : null, W.current.needsUpdate = !0, Y.current.aoMap = M ? I : null, Y.current.aoMapIntensity = M ? 0.8 : 0, Y.current.normalMap = P ? z : null, Y.current.needsUpdate = !0, q.current.aoMap = S ? B : null, q.current.aoMapIntensity = S ? 1 : 0, q.current.needsUpdate = !0;
    }, [
      K,
      I,
      B,
      O,
      z,
      w,
      M,
      S,
      E,
      P,
      X,
      Q
    ]), fr((ne, F) => {
      const G = 1 - Math.pow(0.01, F), te = l === "Polished" ? 1 : 0;
      W.current.color.lerp(_.current, G), W.current.roughness = C.MathUtils.lerp(
        W.current.roughness,
        g.current,
        G
      ), W.current.clearcoat = C.MathUtils.lerp(
        W.current.clearcoat,
        te,
        G
      ), W.current.clearcoatRoughness = C.MathUtils.lerp(
        W.current.clearcoatRoughness,
        0.1,
        G
      ), Y.current.color.lerp(
        p.current,
        G
      ), Y.current.roughness = C.MathUtils.lerp(
        Y.current.roughness,
        g.current,
        G
      ), Y.current.clearcoat = C.MathUtils.lerp(
        Y.current.clearcoat,
        te,
        G
      ), Y.current.clearcoatRoughness = C.MathUtils.lerp(
        Y.current.clearcoatRoughness,
        0.1,
        G
      ), q.current.color.lerp(
        v.current,
        G
      ), q.current.roughness = C.MathUtils.lerp(
        q.current.roughness,
        g.current,
        G
      ), q.current.clearcoat = C.MathUtils.lerp(
        q.current.clearcoat,
        te,
        G
      ), q.current.clearcoatRoughness = C.MathUtils.lerp(
        q.current.clearcoatRoughness,
        0.1,
        G
      );
    }), ae(() => () => {
      W.current.dispose(), Y.current.dispose(), q.current.dispose();
    }, []), _n(() => {
      W.current.normalMap = null, Y.current.normalMap = null, q.current.normalMap = null, m.traverse((ne) => {
        if (ne instanceof C.Mesh) {
          const F = ne;
          F.userData.originalNormalMap === void 0 && (F.userData.originalNormalMap = F.material?.normalMap || null, F.userData.originalNormalScale = F.material?.normalScale ? F.material.normalScale.clone() : null);
          const G = F.userData.originalNormalMap, te = F.userData.originalNormalScale, oe = Y.current, J = W.current;
          if (F.name === "Silver_Metal" && (F.visible = !d, F.material = oe, P ? (oe.normalMap = z, oe.normalScale.set(
            H,
            H
          )) : G && (oe.normalMap = G, te && oe.normalScale.copy(te))), F.name === "Silver_Diamond" && (F.visible = d, F.material = oe, P ? (oe.normalMap = z, oe.normalScale.set(
            H,
            H
          )) : G && (oe.normalMap = G, te && oe.normalScale.copy(te))), F.name === "Diamond_Mesh" || F.name.includes("Diam_Centr") || F.name.includes("Diamond_Metal")) {
            if (F.visible = d, d) {
              const Ie = new Qt(F.geometry, { strategy: 1 });
              F.material = new wo({
                geometry: F.geometry,
                bvh: Ie,
                envMap: e,
                resolution: new C.Vector2(t.width, t.height),
                ior: 2.4,
                bounces: 3,
                aberrationStrength: 5e-4
              });
            }
          } else F.name === "Engraving Mesh" || F.name === "Engraving Metal" || F.name === "Engraving_Mesh" || F.name === "Engraving_Metal" || F.name.includes("Engraving") ? (F.material = q.current, G && (q.current.normalMap = G, te && q.current.normalScale.copy(
            te
          ))) : F.name.includes("Custom") || F.name === "Gold" || F.name === "Base_Metal" || F.name === "Base_metal" || F.name.includes("Base") ? (F.material = J, E ? (J.normalMap = O, J.normalScale.set(
            H,
            H
          )) : G && (J.normalMap = G, te && J.normalScale.copy(te))) : (F.name === "Finishing_Metal" || F.name.includes("Finishing")) && (F.material = oe, P ? (oe.normalMap = z, oe.normalScale.set(
            H,
            H
          )) : G && (oe.normalMap = G, te && oe.normalScale.copy(te)));
        }
      });
    }, [
      m,
      W.current,
      Y.current,
      q.current,
      e,
      t,
      d,
      B,
      O,
      z,
      E,
      P,
      H
    ]), m && y ? /* @__PURE__ */ $.jsx("primitive", { object: m, visible: !0 }) : null;
  }
), er = ze(
  ({ diamondEnvPath: c }) => {
    const { design3DManager: e } = lt(), { ringManager: t } = e, { size: s } = Ns(), n = lr({ files: c });
    return t.modelUrl ? /* @__PURE__ */ $.jsxs($.Fragment, { children: [
      /* @__PURE__ */ $.jsx(
        Ro,
        {
          modelUrl: t.modelUrl,
          diamondEnvMap: n,
          size: s
        },
        t.modelUrl
      ),
      /* @__PURE__ */ $.jsx(Ao, { modelUrl: t.modelUrl })
    ] }) : null;
  }
);
function As(c, e) {
  if (e === vr)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), c;
  if (e === An || e === Vs) {
    let t = c.getIndex();
    if (t === null) {
      const r = [], a = c.getAttribute("position");
      if (a !== void 0) {
        for (let o = 0; o < a.count; o++)
          r.push(o);
        c.setIndex(r), t = c.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), c;
    }
    const s = t.count - 2, n = [];
    if (e === An)
      for (let r = 1; r <= s; r++)
        n.push(t.getX(0)), n.push(t.getX(r)), n.push(t.getX(r + 1));
    else
      for (let r = 0; r < s; r++)
        r % 2 === 0 ? (n.push(t.getX(r)), n.push(t.getX(r + 1)), n.push(t.getX(r + 2))) : (n.push(t.getX(r + 2)), n.push(t.getX(r + 1)), n.push(t.getX(r)));
    n.length / 3 !== s && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const i = c.clone();
    return i.setIndex(n), i.clearGroups(), i;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), c;
}
class So extends zs {
  /**
   * Constructs a new glTF loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Bo(t);
    }), this.register(function(t) {
      return new Co(t);
    }), this.register(function(t) {
      return new zo(t);
    }), this.register(function(t) {
      return new Go(t);
    }), this.register(function(t) {
      return new jo(t);
    }), this.register(function(t) {
      return new No(t);
    }), this.register(function(t) {
      return new Fo(t);
    }), this.register(function(t) {
      return new Uo(t);
    }), this.register(function(t) {
      return new Oo(t);
    }), this.register(function(t) {
      return new Po(t);
    }), this.register(function(t) {
      return new ko(t);
    }), this.register(function(t) {
      return new Lo(t);
    }), this.register(function(t) {
      return new Vo(t);
    }), this.register(function(t) {
      return new Ho(t);
    }), this.register(function(t) {
      return new Io(t);
    }), this.register(function(t) {
      return new Ko(t);
    }), this.register(function(t) {
      return new Wo(t);
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
    const i = this;
    let r;
    if (this.resourcePath !== "")
      r = this.resourcePath;
    else if (this.path !== "") {
      const u = Rt.extractUrlBase(e);
      r = Rt.resolveURL(u, this.path);
    } else
      r = Rt.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(u) {
      n ? n(u) : console.error(u), i.manager.itemError(e), i.manager.itemEnd(e);
    }, o = new Vn(this.manager);
    o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(u) {
      try {
        i.parse(u, r, function(f) {
          t(f), i.manager.itemEnd(e);
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
    let i;
    const r = {}, a = {}, o = new TextDecoder();
    if (typeof e == "string")
      i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (o.decode(new Uint8Array(e, 0, 4)) === tr) {
        try {
          r[j.KHR_BINARY_GLTF] = new Yo(e);
        } catch (l) {
          n && n(l);
          return;
        }
        i = JSON.parse(r[j.KHR_BINARY_GLTF].content);
      } else
        i = JSON.parse(o.decode(e));
    else
      i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const u = new oa(i, {
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
      l.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[l.name] = l, r[l.name] = !0;
    }
    if (i.extensionsUsed)
      for (let f = 0; f < i.extensionsUsed.length; ++f) {
        const l = i.extensionsUsed[f], d = i.extensionsRequired || [];
        switch (l) {
          case j.KHR_MATERIALS_UNLIT:
            r[l] = new Do();
            break;
          case j.KHR_DRACO_MESH_COMPRESSION:
            r[l] = new Xo(i, this.dracoLoader);
            break;
          case j.KHR_TEXTURE_TRANSFORM:
            r[l] = new $o();
            break;
          case j.KHR_MESH_QUANTIZATION:
            r[l] = new qo();
            break;
          default:
            d.indexOf(l) >= 0 && a[l] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + l + '".');
        }
      }
    u.setExtensions(r), u.setPlugins(a), u.parse(s, n);
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
    return new Promise(function(n, i) {
      s.parse(e, t, n, i);
    });
  }
}
function Eo() {
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
const j = {
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
class Io {
  constructor(e) {
    this.parser = e, this.name = j.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let s = 0, n = t.length; s < n; s++) {
      const i = t[s];
      i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, s = "light:" + e;
    let n = t.cache.get(s);
    if (n) return n;
    const i = t.json, o = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
    let u;
    const f = new Xe(16777215);
    o.color !== void 0 && f.setRGB(o.color[0], o.color[1], o.color[2], Se);
    const l = o.range !== void 0 ? o.range : 0;
    switch (o.type) {
      case "directional":
        u = new Tr(f), u.target.position.set(0, 0, -1), u.add(u.target);
        break;
      case "point":
        u = new _r(f), u.distance = l;
        break;
      case "spot":
        u = new wr(f), u.distance = l, o.spot = o.spot || {}, o.spot.innerConeAngle = o.spot.innerConeAngle !== void 0 ? o.spot.innerConeAngle : 0, o.spot.outerConeAngle = o.spot.outerConeAngle !== void 0 ? o.spot.outerConeAngle : Math.PI / 4, u.angle = o.spot.outerConeAngle, u.penumbra = 1 - o.spot.innerConeAngle / o.spot.outerConeAngle, u.target.position.set(0, 0, -1), u.add(u.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + o.type);
    }
    return u.position.set(0, 0, 0), Ae(u, o), o.intensity !== void 0 && (u.intensity = o.intensity), u.name = t.createUniqueName(o.name || "light_" + e), n = Promise.resolve(u), t.cache.add(s, n), n;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, s = this.parser, i = s.json.nodes[e], a = (i.extensions && i.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(o) {
      return s._getNodeRef(t.cache, a, o);
    });
  }
}
class Do {
  constructor() {
    this.name = j.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Mt;
  }
  extendParams(e, t, s) {
    const n = [];
    e.color = new Xe(1, 1, 1), e.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const r = i.baseColorFactor;
        e.color.setRGB(r[0], r[1], r[2], Se), e.opacity = r[3];
      }
      i.baseColorTexture !== void 0 && n.push(s.assignTexture(e, "map", i.baseColorTexture, It));
    }
    return Promise.all(n);
  }
}
class Po {
  constructor(e) {
    this.parser = e, this.name = j.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}
class Bo {
  constructor(e) {
    this.parser = e, this.name = j.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ee;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    if (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && i.push(s.assignTexture(t, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && i.push(s.assignTexture(t, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (i.push(s.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
      const a = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Re(a, a);
    }
    return Promise.all(i);
  }
}
class Co {
  constructor(e) {
    this.parser = e, this.name = j.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ee;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name];
    return t.dispersion = i.dispersion !== void 0 ? i.dispersion : 0, Promise.resolve();
  }
}
class Lo {
  constructor(e) {
    this.parser = e, this.name = j.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ee;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && i.push(s.assignTexture(t, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && i.push(s.assignTexture(t, "iridescenceThicknessMap", r.iridescenceThicknessTexture)), Promise.all(i);
  }
}
class No {
  constructor(e) {
    this.parser = e, this.name = j.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ee;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new Xe(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const r = n.extensions[this.name];
    if (r.sheenColorFactor !== void 0) {
      const a = r.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], Se);
    }
    return r.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && i.push(s.assignTexture(t, "sheenColorMap", r.sheenColorTexture, It)), r.sheenRoughnessTexture !== void 0 && i.push(s.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(i);
  }
}
class Fo {
  constructor(e) {
    this.parser = e, this.name = j.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ee;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return r.transmissionFactor !== void 0 && (t.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && i.push(s.assignTexture(t, "transmissionMap", r.transmissionTexture)), Promise.all(i);
  }
}
class Uo {
  constructor(e) {
    this.parser = e, this.name = j.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ee;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && i.push(s.assignTexture(t, "thicknessMap", r.thicknessTexture)), t.attenuationDistance = r.attenuationDistance || 1 / 0;
    const a = r.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Xe().setRGB(a[0], a[1], a[2], Se), Promise.all(i);
  }
}
class Oo {
  constructor(e) {
    this.parser = e, this.name = j.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ee;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}
class ko {
  constructor(e) {
    this.parser = e, this.name = j.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ee;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && i.push(s.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const a = r.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Xe().setRGB(a[0], a[1], a[2], Se), r.specularColorTexture !== void 0 && i.push(s.assignTexture(t, "specularColorMap", r.specularColorTexture, It)), Promise.all(i);
  }
}
class Ho {
  constructor(e) {
    this.parser = e, this.name = j.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ee;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return t.bumpScale = r.bumpFactor !== void 0 ? r.bumpFactor : 1, r.bumpTexture !== void 0 && i.push(s.assignTexture(t, "bumpMap", r.bumpTexture)), Promise.all(i);
  }
}
class Vo {
  constructor(e) {
    this.parser = e, this.name = j.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Ee;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return r.anisotropyStrength !== void 0 && (t.anisotropy = r.anisotropyStrength), r.anisotropyRotation !== void 0 && (t.anisotropyRotation = r.anisotropyRotation), r.anisotropyTexture !== void 0 && i.push(s.assignTexture(t, "anisotropyMap", r.anisotropyTexture)), Promise.all(i);
  }
}
class zo {
  constructor(e) {
    this.parser = e, this.name = j.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, s = t.json, n = s.textures[e];
    if (!n.extensions || !n.extensions[this.name])
      return null;
    const i = n.extensions[this.name], r = t.options.ktx2Loader;
    if (!r) {
      if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, i.source, r);
  }
}
class Go {
  constructor(e) {
    this.parser = e, this.name = j.EXT_TEXTURE_WEBP;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, n = s.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], a = n.images[r.source];
    let o = s.textureLoader;
    if (a.uri) {
      const u = s.options.manager.getHandler(a.uri);
      u !== null && (o = u);
    }
    return s.loadTextureImage(e, r.source, o);
  }
}
class jo {
  constructor(e) {
    this.parser = e, this.name = j.EXT_TEXTURE_AVIF;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, n = s.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], a = n.images[r.source];
    let o = s.textureLoader;
    if (a.uri) {
      const u = s.options.manager.getHandler(a.uri);
      u !== null && (o = u);
    }
    return s.loadTextureImage(e, r.source, o);
  }
}
class Ko {
  constructor(e) {
    this.name = j.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, s = t.bufferViews[e];
    if (s.extensions && s.extensions[this.name]) {
      const n = s.extensions[this.name], i = this.parser.getDependency("buffer", n.buffer), r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return i.then(function(a) {
        const o = n.byteOffset || 0, u = n.byteLength || 0, f = n.count, l = n.byteStride, d = new Uint8Array(a, o, u);
        return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(f, l, d, n.mode, n.filter).then(function(h) {
          return h.buffer;
        }) : r.ready.then(function() {
          const h = new ArrayBuffer(f * l);
          return r.decodeGltfBuffer(new Uint8Array(h), f, l, d, n.mode, n.filter), h;
        });
      });
    } else
      return null;
  }
}
class Wo {
  constructor(e) {
    this.name = j.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, s = t.nodes[e];
    if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0)
      return null;
    const n = t.meshes[s.mesh];
    for (const u of n.primitives)
      if (u.mode !== ye.TRIANGLES && u.mode !== ye.TRIANGLE_STRIP && u.mode !== ye.TRIANGLE_FAN && u.mode !== void 0)
        return null;
    const r = s.extensions[this.name].attributes, a = [], o = {};
    for (const u in r)
      a.push(this.parser.getDependency("accessor", r[u]).then((f) => (o[u] = f, o[u])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((u) => {
      const f = u.pop(), l = f.isGroup ? f.children : [f], d = u[0].count, h = [];
      for (const m of l) {
        const _ = new we(), p = new U(), v = new Gs(), g = new U(1, 1, 1), y = new Mr(m.geometry, m.material, d);
        for (let x = 0; x < d; x++)
          o.TRANSLATION && p.fromBufferAttribute(o.TRANSLATION, x), o.ROTATION && v.fromBufferAttribute(o.ROTATION, x), o.SCALE && g.fromBufferAttribute(o.SCALE, x), y.setMatrixAt(x, _.compose(p, v, g));
        for (const x in o)
          if (x === "_COLOR_0") {
            const w = o[x];
            y.instanceColor = new br(w.array, w.itemSize, w.normalized);
          } else x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && m.geometry.setAttribute(x, o[x]);
        js.prototype.copy.call(y, m), this.parser.assignFinalMaterial(y), h.push(y);
      }
      return f.isGroup ? (f.clear(), f.add(...h), f) : h[0];
    }));
  }
}
const tr = "glTF", Tt = 12, Rs = { JSON: 1313821514, BIN: 5130562 };
class Yo {
  constructor(e) {
    this.name = j.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Tt), s = new TextDecoder();
    if (this.header = {
      magic: s.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== tr)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - Tt, i = new DataView(e, Tt);
    let r = 0;
    for (; r < n; ) {
      const a = i.getUint32(r, !0);
      r += 4;
      const o = i.getUint32(r, !0);
      if (r += 4, o === Rs.JSON) {
        const u = new Uint8Array(e, Tt + r, a);
        this.content = s.decode(u);
      } else if (o === Rs.BIN) {
        const u = Tt + r;
        this.body = e.slice(u, u + a);
      }
      r += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Xo {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = j.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const s = this.json, n = this.dracoLoader, i = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, a = {}, o = {}, u = {};
    for (const f in r) {
      const l = On[f] || f.toLowerCase();
      a[l] = r[f];
    }
    for (const f in e.attributes) {
      const l = On[f] || f.toLowerCase();
      if (r[f] !== void 0) {
        const d = s.accessors[e.attributes[f]], h = ct[d.componentType];
        u[l] = h.name, o[l] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", i).then(function(f) {
      return new Promise(function(l, d) {
        n.decodeDracoFile(f, function(h) {
          for (const m in h.attributes) {
            const _ = h.attributes[m], p = o[m];
            p !== void 0 && (_.normalized = p);
          }
          l(h);
        }, a, u, Se, d);
      });
    });
  }
}
class $o {
  constructor() {
    this.name = j.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class qo {
  constructor() {
    this.name = j.KHR_MESH_QUANTIZATION;
  }
}
class nr extends qr {
  constructor(e, t, s, n) {
    super(e, t, s, n);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, s = this.sampleValues, n = this.valueSize, i = e * n * 3 + n;
    for (let r = 0; r !== n; r++)
      t[r] = s[i + r];
    return t;
  }
  interpolate_(e, t, s, n) {
    const i = this.resultBuffer, r = this.sampleValues, a = this.valueSize, o = a * 2, u = a * 3, f = n - t, l = (s - t) / f, d = l * l, h = d * l, m = e * u, _ = m - u, p = -2 * h + 3 * d, v = h - d, g = 1 - p, y = v - d + l;
    for (let x = 0; x !== a; x++) {
      const w = r[_ + x + a], A = r[_ + x + o] * f, M = r[m + x + a], T = r[m + x] * f;
      i[x] = g * w + y * A + p * M + v * T;
    }
    return i;
  }
}
const Jo = new Gs();
class Zo extends nr {
  interpolate_(e, t, s, n) {
    const i = super.interpolate_(e, t, s, n);
    return Jo.fromArray(i).normalize().toArray(i), i;
  }
}
const ye = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, ct = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Ss = {
  9728: Oe,
  9729: $e,
  9984: Pr,
  9985: Dr,
  9986: Ir,
  9987: Ks
}, Es = {
  33071: Xt,
  33648: Br,
  10497: Rn
}, yn = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, On = {
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
}, Fe = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Qo = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Ys,
  STEP: $r
}, vn = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function ea(c) {
  return c.DefaultMaterial === void 0 && (c.DefaultMaterial = new Ws({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Tn
  })), c.DefaultMaterial;
}
function Ye(c, e, t) {
  for (const s in t.extensions)
    c[s] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[s] = t.extensions[s]);
}
function Ae(c, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(c.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function ta(c, e, t) {
  let s = !1, n = !1, i = !1;
  for (let u = 0, f = e.length; u < f; u++) {
    const l = e[u];
    if (l.POSITION !== void 0 && (s = !0), l.NORMAL !== void 0 && (n = !0), l.COLOR_0 !== void 0 && (i = !0), s && n && i) break;
  }
  if (!s && !n && !i) return Promise.resolve(c);
  const r = [], a = [], o = [];
  for (let u = 0, f = e.length; u < f; u++) {
    const l = e[u];
    if (s) {
      const d = l.POSITION !== void 0 ? t.getDependency("accessor", l.POSITION) : c.attributes.position;
      r.push(d);
    }
    if (n) {
      const d = l.NORMAL !== void 0 ? t.getDependency("accessor", l.NORMAL) : c.attributes.normal;
      a.push(d);
    }
    if (i) {
      const d = l.COLOR_0 !== void 0 ? t.getDependency("accessor", l.COLOR_0) : c.attributes.color;
      o.push(d);
    }
  }
  return Promise.all([
    Promise.all(r),
    Promise.all(a),
    Promise.all(o)
  ]).then(function(u) {
    const f = u[0], l = u[1], d = u[2];
    return s && (c.morphAttributes.position = f), n && (c.morphAttributes.normal = l), i && (c.morphAttributes.color = d), c.morphTargetsRelative = !0, c;
  });
}
function na(c, e) {
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
function sa(c) {
  let e;
  const t = c.extensions && c.extensions[j.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + wn(t.attributes) : e = c.indices + ":" + wn(c.attributes) + ":" + c.mode, c.targets !== void 0)
    for (let s = 0, n = c.targets.length; s < n; s++)
      e += ":" + wn(c.targets[s]);
  return e;
}
function wn(c) {
  let e = "";
  const t = Object.keys(c).sort();
  for (let s = 0, n = t.length; s < n; s++)
    e += t[s] + ":" + c[t[s]] + ";";
  return e;
}
function kn(c) {
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
function ra(c) {
  return c.search(/\.jpe?g($|\?)/i) > 0 || c.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : c.search(/\.webp($|\?)/i) > 0 || c.search(/^data\:image\/webp/) === 0 ? "image/webp" : c.search(/\.ktx2($|\?)/i) > 0 || c.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const ia = new we();
class oa {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Eo(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = !1, n = -1, i = !1, r = -1;
    if (typeof navigator < "u") {
      const a = navigator.userAgent;
      s = /^((?!chrome|android).)*safari/i.test(a) === !0;
      const o = a.match(/Version\/(\d+)/);
      n = s && o ? parseInt(o[1], 10) : -1, i = a.indexOf("Firefox") > -1, r = i ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || s && n < 17 || i && r < 98 ? this.textureLoader = new Ar(this.options.manager) : this.textureLoader = new Rr(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Vn(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const s = this, n = this.json, i = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(r) {
      return r._markDefs && r._markDefs();
    }), Promise.all(this._invokeAll(function(r) {
      return r.beforeRoot && r.beforeRoot();
    })).then(function() {
      return Promise.all([
        s.getDependencies("scene"),
        s.getDependencies("animation"),
        s.getDependencies("camera")
      ]);
    }).then(function(r) {
      const a = {
        scene: r[0][n.scene || 0],
        scenes: r[0],
        animations: r[1],
        cameras: r[2],
        asset: n.asset,
        parser: s,
        userData: {}
      };
      return Ye(i, a, n), Ae(a, n), Promise.all(s._invokeAll(function(o) {
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
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n].joints;
      for (let a = 0, o = r.length; a < o; a++)
        e[r[a]].isBone = !0;
    }
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (s[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
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
    const n = s.clone(), i = (r, a) => {
      const o = this.associations.get(r);
      o != null && this.associations.set(a, o);
      for (const [u, f] of r.children.entries())
        i(f, a.children[u]);
    };
    return i(s, n), n.name += "_instance_" + e.uses[t]++, n;
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
      const i = e(t[n]);
      i && s.push(i);
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
          n = this._invokeOne(function(i) {
            return i.loadNode && i.loadNode(t);
          });
          break;
        case "mesh":
          n = this._invokeOne(function(i) {
            return i.loadMesh && i.loadMesh(t);
          });
          break;
        case "accessor":
          n = this.loadAccessor(t);
          break;
        case "bufferView":
          n = this._invokeOne(function(i) {
            return i.loadBufferView && i.loadBufferView(t);
          });
          break;
        case "buffer":
          n = this.loadBuffer(t);
          break;
        case "material":
          n = this._invokeOne(function(i) {
            return i.loadMaterial && i.loadMaterial(t);
          });
          break;
        case "texture":
          n = this._invokeOne(function(i) {
            return i.loadTexture && i.loadTexture(t);
          });
          break;
        case "skin":
          n = this.loadSkin(t);
          break;
        case "animation":
          n = this._invokeOne(function(i) {
            return i.loadAnimation && i.loadAnimation(t);
          });
          break;
        case "camera":
          n = this.loadCamera(t);
          break;
        default:
          if (n = this._invokeOne(function(i) {
            return i != this && i.getDependency && i.getDependency(e, t);
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
      t = Promise.all(n.map(function(i, r) {
        return s.getDependency(e, r);
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
      return Promise.resolve(this.extensions[j.KHR_BINARY_GLTF].body);
    const n = this.options;
    return new Promise(function(i, r) {
      s.load(Rt.resolveURL(t.uri, n.path), i, void 0, function() {
        r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
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
      const n = t.byteLength || 0, i = t.byteOffset || 0;
      return s.slice(i, i + n);
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
      const r = yn[n.type], a = ct[n.componentType], o = n.normalized === !0, u = new a(n.count * r);
      return Promise.resolve(new at(u, r, o));
    }
    const i = [];
    return n.bufferView !== void 0 ? i.push(this.getDependency("bufferView", n.bufferView)) : i.push(null), n.sparse !== void 0 && (i.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(i).then(function(r) {
      const a = r[0], o = yn[n.type], u = ct[n.componentType], f = u.BYTES_PER_ELEMENT, l = f * o, d = n.byteOffset || 0, h = n.bufferView !== void 0 ? s.bufferViews[n.bufferView].byteStride : void 0, m = n.normalized === !0;
      let _, p;
      if (h && h !== l) {
        const v = Math.floor(d / h), g = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + v + ":" + n.count;
        let y = t.cache.get(g);
        y || (_ = new u(a, v * h, n.count * h / f), y = new Sr(_, h / f), t.cache.add(g, y)), p = new Er(y, o, d % h / f, m);
      } else
        a === null ? _ = new u(n.count * o) : _ = new u(a, d, n.count * o), p = new at(_, o, m);
      if (n.sparse !== void 0) {
        const v = yn.SCALAR, g = ct[n.sparse.indices.componentType], y = n.sparse.indices.byteOffset || 0, x = n.sparse.values.byteOffset || 0, w = new g(r[1], y, n.sparse.count * v), A = new u(r[2], x, n.sparse.count * o);
        a !== null && (p = new at(p.array.slice(), p.itemSize, p.normalized)), p.normalized = !1;
        for (let M = 0, T = w.length; M < T; M++) {
          const S = w[M];
          if (p.setX(S, A[M * o]), o >= 2 && p.setY(S, A[M * o + 1]), o >= 3 && p.setZ(S, A[M * o + 2]), o >= 4 && p.setW(S, A[M * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        p.normalized = m;
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
    const t = this.json, s = this.options, i = t.textures[e].source, r = t.images[i];
    let a = this.textureLoader;
    if (r.uri) {
      const o = s.manager.getHandler(r.uri);
      o !== null && (a = o);
    }
    return this.loadTextureImage(e, i, a);
  }
  loadTextureImage(e, t, s) {
    const n = this, i = this.json, r = i.textures[e], a = i.images[t], o = (a.uri || a.bufferView) + ":" + r.sampler;
    if (this.textureCache[o])
      return this.textureCache[o];
    const u = this.loadImageSource(t, s).then(function(f) {
      f.flipY = !1, f.name = r.name || a.name || "", f.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (f.name = a.uri);
      const d = (i.samplers || {})[r.sampler] || {};
      return f.magFilter = Ss[d.magFilter] || $e, f.minFilter = Ss[d.minFilter] || Ks, f.wrapS = Es[d.wrapS] || Rn, f.wrapT = Es[d.wrapT] || Rn, f.generateMipmaps = !f.isCompressedTexture && f.minFilter !== Oe && f.minFilter !== $e, n.associations.set(f, { textures: e }), f;
    }).catch(function() {
      return null;
    });
    return this.textureCache[o] = u, u;
  }
  loadImageSource(e, t) {
    const s = this, n = this.json, i = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((l) => l.clone());
    const r = n.images[e], a = self.URL || self.webkitURL;
    let o = r.uri || "", u = !1;
    if (r.bufferView !== void 0)
      o = s.getDependency("bufferView", r.bufferView).then(function(l) {
        u = !0;
        const d = new Blob([l], { type: r.mimeType });
        return o = a.createObjectURL(d), o;
      });
    else if (r.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const f = Promise.resolve(o).then(function(l) {
      return new Promise(function(d, h) {
        let m = d;
        t.isImageBitmapLoader === !0 && (m = function(_) {
          const p = new Xn(_);
          p.needsUpdate = !0, d(p);
        }), t.load(Rt.resolveURL(l, i.path), m, void 0, h);
      });
    }).then(function(l) {
      return u === !0 && a.revokeObjectURL(o), Ae(l, r), l.userData.mimeType = r.mimeType || ra(r.uri), l;
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
    const i = this;
    return this.getDependency("texture", s.index).then(function(r) {
      if (!r) return null;
      if (s.texCoord !== void 0 && s.texCoord > 0 && (r = r.clone(), r.channel = s.texCoord), i.extensions[j.KHR_TEXTURE_TRANSFORM]) {
        const a = s.extensions !== void 0 ? s.extensions[j.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const o = i.associations.get(r);
          r = i.extensions[j.KHR_TEXTURE_TRANSFORM].extendTexture(r, a), i.associations.set(r, o);
        }
      }
      return n !== void 0 && (r.colorSpace = n), e[t] = r, r;
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
    const n = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, r = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + s.uuid;
      let o = this.cache.get(a);
      o || (o = new Cr(), on.prototype.copy.call(o, s), o.color.copy(s.color), o.map = s.map, o.sizeAttenuation = !1, this.cache.add(a, o)), s = o;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + s.uuid;
      let o = this.cache.get(a);
      o || (o = new Lr(), on.prototype.copy.call(o, s), o.color.copy(s.color), o.map = s.map, this.cache.add(a, o)), s = o;
    }
    if (n || i || r) {
      let a = "ClonedMaterial:" + s.uuid + ":";
      n && (a += "derivative-tangents:"), i && (a += "vertex-colors:"), r && (a += "flat-shading:");
      let o = this.cache.get(a);
      o || (o = s.clone(), i && (o.vertexColors = !0), r && (o.flatShading = !0), n && (o.normalScale && (o.normalScale.y *= -1), o.clearcoatNormalScale && (o.clearcoatNormalScale.y *= -1)), this.cache.add(a, o), this.associations.set(o, this.associations.get(s))), s = o;
    }
    e.material = s;
  }
  getMaterialType() {
    return Ws;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   *
   * @private
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, s = this.json, n = this.extensions, i = s.materials[e];
    let r;
    const a = {}, o = i.extensions || {}, u = [];
    if (o[j.KHR_MATERIALS_UNLIT]) {
      const l = n[j.KHR_MATERIALS_UNLIT];
      r = l.getMaterialType(), u.push(l.extendParams(a, i, t));
    } else {
      const l = i.pbrMetallicRoughness || {};
      if (a.color = new Xe(1, 1, 1), a.opacity = 1, Array.isArray(l.baseColorFactor)) {
        const d = l.baseColorFactor;
        a.color.setRGB(d[0], d[1], d[2], Se), a.opacity = d[3];
      }
      l.baseColorTexture !== void 0 && u.push(t.assignTexture(a, "map", l.baseColorTexture, It)), a.metalness = l.metallicFactor !== void 0 ? l.metallicFactor : 1, a.roughness = l.roughnessFactor !== void 0 ? l.roughnessFactor : 1, l.metallicRoughnessTexture !== void 0 && (u.push(t.assignTexture(a, "metalnessMap", l.metallicRoughnessTexture)), u.push(t.assignTexture(a, "roughnessMap", l.metallicRoughnessTexture))), r = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), u.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    i.doubleSided === !0 && (a.side = Os);
    const f = i.alphaMode || vn.OPAQUE;
    if (f === vn.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, f === vn.MASK && (a.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && r !== Mt && (u.push(t.assignTexture(a, "normalMap", i.normalTexture)), a.normalScale = new Re(1, 1), i.normalTexture.scale !== void 0)) {
      const l = i.normalTexture.scale;
      a.normalScale.set(l, l);
    }
    if (i.occlusionTexture !== void 0 && r !== Mt && (u.push(t.assignTexture(a, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && r !== Mt) {
      const l = i.emissiveFactor;
      a.emissive = new Xe().setRGB(l[0], l[1], l[2], Se);
    }
    return i.emissiveTexture !== void 0 && r !== Mt && u.push(t.assignTexture(a, "emissiveMap", i.emissiveTexture, It)), Promise.all(u).then(function() {
      const l = new r(a);
      return i.name && (l.name = i.name), Ae(l, i), t.associations.set(l, { materials: e }), i.extensions && Ye(n, l, i), l;
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
    const t = Nr.sanitizeNodeName(e || "");
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
    function i(a) {
      return s[j.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(o) {
        return Is(o, a, t);
      });
    }
    const r = [];
    for (let a = 0, o = e.length; a < o; a++) {
      const u = e[a], f = sa(u), l = n[f];
      if (l)
        r.push(l.promise);
      else {
        let d;
        u.extensions && u.extensions[j.KHR_DRACO_MESH_COMPRESSION] ? d = i(u) : d = Is(new Fr(), u, t), n[f] = { primitive: u, promise: d }, r.push(d);
      }
    }
    return Promise.all(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   *
   * @private
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh|Line|Points>}
   */
  loadMesh(e) {
    const t = this, s = this.json, n = this.extensions, i = s.meshes[e], r = i.primitives, a = [];
    for (let o = 0, u = r.length; o < u; o++) {
      const f = r[o].material === void 0 ? ea(this.cache) : this.getDependency("material", r[o].material);
      a.push(f);
    }
    return a.push(t.loadGeometries(r)), Promise.all(a).then(function(o) {
      const u = o.slice(0, o.length - 1), f = o[o.length - 1], l = [];
      for (let h = 0, m = f.length; h < m; h++) {
        const _ = f[h], p = r[h];
        let v;
        const g = u[h];
        if (p.mode === ye.TRIANGLES || p.mode === ye.TRIANGLE_STRIP || p.mode === ye.TRIANGLE_FAN || p.mode === void 0)
          v = i.isSkinnedMesh === !0 ? new Ur(_, g) : new Or(_, g), v.isSkinnedMesh === !0 && v.normalizeSkinWeights(), p.mode === ye.TRIANGLE_STRIP ? v.geometry = As(v.geometry, Vs) : p.mode === ye.TRIANGLE_FAN && (v.geometry = As(v.geometry, An));
        else if (p.mode === ye.LINES)
          v = new kr(_, g);
        else if (p.mode === ye.LINE_STRIP)
          v = new Hr(_, g);
        else if (p.mode === ye.LINE_LOOP)
          v = new Vr(_, g);
        else if (p.mode === ye.POINTS)
          v = new zr(_, g);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(v.geometry.morphAttributes).length > 0 && na(v, i), v.name = t.createUniqueName(i.name || "mesh_" + e), Ae(v, i), p.extensions && Ye(n, v, p), t.assignFinalMaterial(v), l.push(v);
      }
      for (let h = 0, m = l.length; h < m; h++)
        t.associations.set(l[h], {
          meshes: e,
          primitives: h
        });
      if (l.length === 1)
        return i.extensions && Ye(n, l[0], i), l[0];
      const d = new an();
      i.extensions && Ye(n, d, i), t.associations.set(d, { meshes: e });
      for (let h = 0, m = l.length; h < m; h++)
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
    return s.type === "perspective" ? t = new Gr(jr.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : s.type === "orthographic" && (t = new Kr(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), Ae(t, s), Promise.resolve(t);
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
    for (let n = 0, i = t.joints.length; n < i; n++)
      s.push(this._loadNodeShallow(t.joints[n]));
    return t.inverseBindMatrices !== void 0 ? s.push(this.getDependency("accessor", t.inverseBindMatrices)) : s.push(null), Promise.all(s).then(function(n) {
      const i = n.pop(), r = n, a = [], o = [];
      for (let u = 0, f = r.length; u < f; u++) {
        const l = r[u];
        if (l) {
          a.push(l);
          const d = new we();
          i !== null && d.fromArray(i.array, u * 16), o.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[u]);
      }
      return new Wr(a, o);
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
    const t = this.json, s = this, n = t.animations[e], i = n.name ? n.name : "animation_" + e, r = [], a = [], o = [], u = [], f = [];
    for (let l = 0, d = n.channels.length; l < d; l++) {
      const h = n.channels[l], m = n.samplers[h.sampler], _ = h.target, p = _.node, v = n.parameters !== void 0 ? n.parameters[m.input] : m.input, g = n.parameters !== void 0 ? n.parameters[m.output] : m.output;
      _.node !== void 0 && (r.push(this.getDependency("node", p)), a.push(this.getDependency("accessor", v)), o.push(this.getDependency("accessor", g)), u.push(m), f.push(_));
    }
    return Promise.all([
      Promise.all(r),
      Promise.all(a),
      Promise.all(o),
      Promise.all(u),
      Promise.all(f)
    ]).then(function(l) {
      const d = l[0], h = l[1], m = l[2], _ = l[3], p = l[4], v = [];
      for (let y = 0, x = d.length; y < x; y++) {
        const w = d[y], A = h[y], M = m[y], T = _[y], S = p[y];
        if (w === void 0) continue;
        w.updateMatrix && w.updateMatrix();
        const b = s._createAnimationTracks(w, A, M, T, S);
        if (b)
          for (let E = 0; E < b.length; E++)
            v.push(b[E]);
      }
      const g = new Yr(i, void 0, v);
      return Ae(g, n), g;
    });
  }
  createNodeMesh(e) {
    const t = this.json, s = this, n = t.nodes[e];
    return n.mesh === void 0 ? null : s.getDependency("mesh", n.mesh).then(function(i) {
      const r = s._getNodeRef(s.meshCache, n.mesh, i);
      return n.weights !== void 0 && r.traverse(function(a) {
        if (a.isMesh)
          for (let o = 0, u = n.weights.length; o < u; o++)
            a.morphTargetInfluences[o] = n.weights[o];
      }), r;
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
    const t = this.json, s = this, n = t.nodes[e], i = s._loadNodeShallow(e), r = [], a = n.children || [];
    for (let u = 0, f = a.length; u < f; u++)
      r.push(s.getDependency("node", a[u]));
    const o = n.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", n.skin);
    return Promise.all([
      i,
      Promise.all(r),
      o
    ]).then(function(u) {
      const f = u[0], l = u[1], d = u[2];
      d !== null && f.traverse(function(h) {
        h.isSkinnedMesh && h.bind(d, ia);
      });
      for (let h = 0, m = l.length; h < m; h++)
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
    const i = t.nodes[e], r = i.name ? n.createUniqueName(i.name) : "", a = [], o = n._invokeOne(function(u) {
      return u.createNodeMesh && u.createNodeMesh(e);
    });
    return o && a.push(o), i.camera !== void 0 && a.push(n.getDependency("camera", i.camera).then(function(u) {
      return n._getNodeRef(n.cameraCache, i.camera, u);
    })), n._invokeAll(function(u) {
      return u.createNodeAttachment && u.createNodeAttachment(e);
    }).forEach(function(u) {
      a.push(u);
    }), this.nodeCache[e] = Promise.all(a).then(function(u) {
      let f;
      if (i.isBone === !0 ? f = new Xr() : u.length > 1 ? f = new an() : u.length === 1 ? f = u[0] : f = new js(), f !== u[0])
        for (let l = 0, d = u.length; l < d; l++)
          f.add(u[l]);
      if (i.name && (f.userData.name = i.name, f.name = r), Ae(f, i), i.extensions && Ye(s, f, i), i.matrix !== void 0) {
        const l = new we();
        l.fromArray(i.matrix), f.applyMatrix4(l);
      } else
        i.translation !== void 0 && f.position.fromArray(i.translation), i.rotation !== void 0 && f.quaternion.fromArray(i.rotation), i.scale !== void 0 && f.scale.fromArray(i.scale);
      if (!n.associations.has(f))
        n.associations.set(f, {});
      else if (i.mesh !== void 0 && n.meshCache.refs[i.mesh] > 1) {
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
    const t = this.extensions, s = this.json.scenes[e], n = this, i = new an();
    s.name && (i.name = n.createUniqueName(s.name)), Ae(i, s), s.extensions && Ye(t, i, s);
    const r = s.nodes || [], a = [];
    for (let o = 0, u = r.length; o < u; o++)
      a.push(n.getDependency("node", r[o]));
    return Promise.all(a).then(function(o) {
      for (let f = 0, l = o.length; f < l; f++)
        i.add(o[f]);
      const u = (f) => {
        const l = /* @__PURE__ */ new Map();
        for (const [d, h] of n.associations)
          (d instanceof on || d instanceof Xn) && l.set(d, h);
        return f.traverse((d) => {
          const h = n.associations.get(d);
          h != null && l.set(d, h);
        }), l;
      };
      return n.associations = u(i), i;
    });
  }
  _createAnimationTracks(e, t, s, n, i) {
    const r = [], a = e.name ? e.name : e.uuid, o = [];
    Fe[i.path] === Fe.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && o.push(d.name ? d.name : d.uuid);
    }) : o.push(a);
    let u;
    switch (Fe[i.path]) {
      case Fe.weights:
        u = qn;
        break;
      case Fe.rotation:
        u = Jn;
        break;
      case Fe.translation:
      case Fe.scale:
        u = $n;
        break;
      default:
        s.itemSize === 1 ? u = qn : u = $n;
        break;
    }
    const f = n.interpolation !== void 0 ? Qo[n.interpolation] : Ys, l = this._getArrayFromAccessor(s);
    for (let d = 0, h = o.length; d < h; d++) {
      const m = new u(
        o[d] + "." + Fe[i.path],
        t.array,
        l,
        f
      );
      n.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(m), r.push(m);
    }
    return r;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const s = kn(t.constructor), n = new Float32Array(t.length);
      for (let i = 0, r = t.length; i < r; i++)
        n[i] = t[i] * s;
      t = n;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(s) {
      const n = this instanceof Jn ? Zo : nr;
      return new n(this.times, this.values, this.getValueSize() / 3, s);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function aa(c, e, t) {
  const s = e.attributes, n = new be();
  if (s.POSITION !== void 0) {
    const a = t.json.accessors[s.POSITION], o = a.min, u = a.max;
    if (o !== void 0 && u !== void 0) {
      if (n.set(
        new U(o[0], o[1], o[2]),
        new U(u[0], u[1], u[2])
      ), a.normalized) {
        const f = kn(ct[a.componentType]);
        n.min.multiplyScalar(f), n.max.multiplyScalar(f);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = e.targets;
  if (i !== void 0) {
    const a = new U(), o = new U();
    for (let u = 0, f = i.length; u < f; u++) {
      const l = i[u];
      if (l.POSITION !== void 0) {
        const d = t.json.accessors[l.POSITION], h = d.min, m = d.max;
        if (h !== void 0 && m !== void 0) {
          if (o.setX(Math.max(Math.abs(h[0]), Math.abs(m[0]))), o.setY(Math.max(Math.abs(h[1]), Math.abs(m[1]))), o.setZ(Math.max(Math.abs(h[2]), Math.abs(m[2]))), d.normalized) {
            const _ = kn(ct[d.componentType]);
            o.multiplyScalar(_);
          }
          a.max(o);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    n.expandByVector(a);
  }
  c.boundingBox = n;
  const r = new Jr();
  n.getCenter(r.center), r.radius = n.min.distanceTo(n.max) / 2, c.boundingSphere = r;
}
function Is(c, e, t) {
  const s = e.attributes, n = [];
  function i(r, a) {
    return t.getDependency("accessor", r).then(function(o) {
      c.setAttribute(a, o);
    });
  }
  for (const r in s) {
    const a = On[r] || r.toLowerCase();
    a in c.attributes || n.push(i(s[r], a));
  }
  if (e.indices !== void 0 && !c.index) {
    const r = t.getDependency("accessor", e.indices).then(function(a) {
      c.setIndex(a);
    });
    n.push(r);
  }
  return Zn.workingColorSpace !== Se && "COLOR_0" in s && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Zn.workingColorSpace}" not supported.`), Ae(c, e), aa(c, e, t), Promise.all(n).then(function() {
    return e.targets !== void 0 ? ta(c, e.targets, t) : c;
  });
}
class ca extends zs {
  /**
   * Constructs a new Cube LUT loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.type = At;
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
    const i = new Vn(this.manager);
    i.setPath(this.path), i.setResponseType("text"), i.load(e, (r) => {
      try {
        t(this.parse(r));
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
    const t = /TITLE +"([^"]*)"/, s = /LUT_3D_SIZE +(\d+)/, n = /DOMAIN_MIN +([\d.]+) +([\d.]+) +([\d.]+)/, i = /DOMAIN_MAX +([\d.]+) +([\d.]+) +([\d.]+)/, r = /^([\d.e+-]+) +([\d.e+-]+) +([\d.e+-]+) *$/gm;
    let a = t.exec(e);
    const o = a !== null ? a[1] : null;
    if (a = s.exec(e), a === null)
      throw new Error("LUTCubeLoader: Missing LUT_3D_SIZE information");
    const u = Number(a[1]), f = u ** 3 * 4, l = this.type === At ? new Uint8Array(f) : new Float32Array(f), d = new U(0, 0, 0), h = new U(1, 1, 1);
    if (a = n.exec(e), a !== null && d.set(Number(a[1]), Number(a[2]), Number(a[3])), a = i.exec(e), a !== null && h.set(Number(a[1]), Number(a[2]), Number(a[3])), d.x > h.x || d.y > h.y || d.z > h.z)
      throw new Error("LUTCubeLoader: Invalid input domain");
    const m = this.type === At ? 255 : 1;
    let _ = 0;
    for (; (a = r.exec(e)) !== null; )
      l[_++] = Number(a[1]) * m, l[_++] = Number(a[2]) * m, l[_++] = Number(a[3]) * m, l[_++] = m;
    const p = new Zr();
    return p.image.data = l, p.image.width = u, p.image.height = u, p.image.depth = u, p.type = this.type, p.magFilter = $e, p.minFilter = $e, p.wrapS = Xt, p.wrapT = Xt, p.wrapR = Xt, p.generateMipmaps = !1, p.needsUpdate = !0, {
      title: o,
      size: u,
      domainMin: d,
      domainMax: h,
      texture3D: p
    };
  }
}
class la extends Qr {
  /**
      * Constructs a new RGBE/HDR loader.
      *
      * @param {LoadingManager} [manager] - The loading manager.
      */
  constructor(e) {
    super(e), this.type = Dt;
  }
  /**
      * Parses the given RGBE texture data.
      *
      * @param {ArrayBuffer} buffer - The raw texture data.
      * @return {DataTextureLoader~TexData} An object representing the parsed texture data.
      */
  parse(e) {
    const r = function(T, S) {
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
      let R = T.pos, D = -1, P = 0, L = "", N = String.fromCharCode.apply(null, new Uint16Array(T.subarray(R, R + 128)));
      for (; 0 > (D = N.indexOf(`
`)) && P < S && R < T.byteLength; )
        L += N, P += N.length, R += 128, N += String.fromCharCode.apply(null, new Uint16Array(T.subarray(R, R + 128)));
      return -1 < D ? (T.pos += P + D + 1, L + N.slice(0, D)) : !1;
    }, d = function(T) {
      const S = /^#\?(\S+)/, b = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, E = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, R = /^\s*FORMAT=(\S+)\s*$/, D = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, P = {
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
      let L, N;
      for ((T.pos >= T.byteLength || !(L = l(T))) && r(1, "no header found"), (N = L.match(S)) || r(3, "bad initial token"), P.valid |= 1, P.programtype = N[1], P.string += L + `
`; L = l(T), L !== !1; ) {
        if (P.string += L + `
`, L.charAt(0) === "#") {
          P.comments += L + `
`;
          continue;
        }
        if ((N = L.match(b)) && (P.gamma = parseFloat(N[1])), (N = L.match(E)) && (P.exposure = parseFloat(N[1])), (N = L.match(R)) && (P.valid |= 2, P.format = N[1]), (N = L.match(D)) && (P.valid |= 4, P.height = parseInt(N[1], 10), P.width = parseInt(N[2], 10)), P.valid & 2 && P.valid & 4) break;
      }
      return P.valid & 2 || r(3, "missing format specifier"), P.valid & 4 || r(3, "missing image size specifier"), P;
    }, h = function(T, S, b) {
      const E = S;
      if (
        // run length encoding is not allowed so read flat
        E < 8 || E > 32767 || // this file is not run length encoded
        T[0] !== 2 || T[1] !== 2 || T[2] & 128
      )
        return new Uint8Array(T);
      E !== (T[2] << 8 | T[3]) && r(3, "wrong scanline width");
      const R = new Uint8Array(4 * S * b);
      R.length || r(4, "unable to allocate buffer space");
      let D = 0, P = 0;
      const L = 4 * E, N = new Uint8Array(4), V = new Uint8Array(L);
      let X = b;
      for (; X > 0 && P < T.byteLength; ) {
        P + 4 > T.byteLength && r(1), N[0] = T[P++], N[1] = T[P++], N[2] = T[P++], N[3] = T[P++], (N[0] != 2 || N[1] != 2 || (N[2] << 8 | N[3]) != E) && r(3, "bad rgbe scanline format");
        let Q = 0, K;
        for (; Q < L && P < T.byteLength; ) {
          K = T[P++];
          const B = K > 128;
          if (B && (K -= 128), (K === 0 || Q + K > L) && r(3, "bad scanline data"), B) {
            const O = T[P++];
            for (let z = 0; z < K; z++)
              V[Q++] = O;
          } else
            V.set(T.subarray(P, P + K), Q), Q += K, P += K;
        }
        const I = E;
        for (let B = 0; B < I; B++) {
          let O = 0;
          R[D] = V[B + O], O += E, R[D + 1] = V[B + O], O += E, R[D + 2] = V[B + O], O += E, R[D + 3] = V[B + O], D += 4;
        }
        X--;
      }
      return R;
    }, m = function(T, S, b, E) {
      const R = T[S + 3], D = Math.pow(2, R - 128) / 255;
      b[E + 0] = T[S + 0] * D, b[E + 1] = T[S + 1] * D, b[E + 2] = T[S + 2] * D, b[E + 3] = 1;
    }, _ = function(T, S, b, E) {
      const R = T[S + 3], D = Math.pow(2, R - 128) / 255;
      b[E + 0] = Pt.toHalfFloat(Math.min(T[S + 0] * D, 65504)), b[E + 1] = Pt.toHalfFloat(Math.min(T[S + 1] * D, 65504)), b[E + 2] = Pt.toHalfFloat(Math.min(T[S + 2] * D, 65504)), b[E + 3] = Pt.toHalfFloat(1);
    }, p = new Uint8Array(e);
    p.pos = 0;
    const v = d(p), g = v.width, y = v.height, x = h(p.subarray(p.pos), g, y);
    let w, A, M;
    switch (this.type) {
      case He:
        M = x.length / 4;
        const T = new Float32Array(M * 4);
        for (let b = 0; b < M; b++)
          m(x, b * 4, T, b * 4);
        w = T, A = He;
        break;
      case Dt:
        M = x.length / 4;
        const S = new Uint16Array(M * 4);
        for (let b = 0; b < M; b++)
          _(x, b * 4, S, b * 4);
        w = S, A = Dt;
        break;
      default:
        throw new Error("THREE.HDRLoader: Unsupported type: " + this.type);
    }
    return {
      width: g,
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
    function i(r, a) {
      switch (r.type) {
        case He:
        case Dt:
          r.colorSpace = Se, r.minFilter = $e, r.magFilter = $e, r.generateMipmaps = !1, r.flipY = !0;
          break;
      }
      t && t(r, a);
    }
    return super.load(e, i, s, n);
  }
}
class ua extends la {
  constructor(e) {
    console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."), super(e);
  }
}
class Et {
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
class Be {
  static gltfLoader = new So();
  static loadGLTF = (e) => new Promise((t, s) => {
    if (!e)
      return t(new C.Group());
    Be.gltfLoader.load(
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
    const t = URL.createObjectURL(e), s = new ua();
    try {
      const n = await s.loadAsync(t);
      return n.mapping = C.EquirectangularReflectionMapping, URL.revokeObjectURL(t), n;
    } catch (n) {
      throw URL.revokeObjectURL(t), Et.error(`Error loading environment map: ${n}`), n;
    }
  }
  static loadNodeMapForGLTF = async (e) => {
    const t = await Be.loadGLTF(e), s = {};
    return t.traverse((n) => {
      n instanceof C.Mesh && (s[n.name] = n);
    }), s;
  };
  static loadTexture = async (e) => await new C.TextureLoader().loadAsync(e);
  /**
   * Draws a solid color on an offscreen canvas and returns a data URL image.
   * Use with TextureLoader to assign scene.background or other materials.
   */
  static getImageByColor(e, t = 4, s = 4) {
    const n = document.createElement("canvas");
    n.width = t, n.height = s;
    const i = n.getContext("2d");
    if (!i)
      throw new Error("Canvas 2D context not available");
    return i.fillStyle = e, i.fillRect(0, 0, t, s), n.toDataURL();
  }
  static loadLut = async (e) => await new ca().loadAsync(e);
  static getImageUrlFromTexture(e) {
    const t = document.createElement("canvas");
    t.width = 2e3, t.height = 2e3;
    const s = e.repeat ?? new C.Vector2(1, 1), n = t.getContext("2d", { willReadFrequently: !0 });
    if (!n)
      return Et.error("Failed to get 2D context"), null;
    const i = n.createPattern(
      e.image,
      "repeat"
    );
    if (i)
      n.fillStyle = i, n.save(), n.scale(1 / s.x, 1 / s.y), n.fillRect(0, 0, t.width * s.x, t.height * s.y), n.restore();
    else
      return Et.error("Failed to create pattern"), null;
    return t.toDataURL();
  }
  static getBoundingBox = (e) => {
    const t = new C.Box3();
    return e.forEach((s) => {
      t.expandByObject(s);
    }), t;
  };
  static getCenterPointAndNormal = (e) => {
    const t = e.geometry, s = t.attributes.position, n = t.attributes.normal, i = t.attributes.uv, r = e.matrixWorld;
    if (!s || !n || !i)
      return {
        center: Be.getBoundingBox([e]).getCenter(new C.Vector3()),
        normal: new C.Vector3(0, 0, 1),
        uv: new C.Vector2(0.5, 0.5)
      };
    const a = new C.Vector3(0, 0, 0), o = s.count;
    for (let m = 0; m < o; m++) {
      const _ = new C.Vector3().fromBufferAttribute(s, m).applyMatrix4(r);
      a.add(_);
    }
    a.divideScalar(o);
    let u = 1 / 0, f = 0;
    for (let m = 0; m < o; m++) {
      const p = new C.Vector3().fromBufferAttribute(s, m).applyMatrix4(r).distanceTo(a);
      p < u && (u = p, f = m);
    }
    const l = new C.Vector3().fromBufferAttribute(n, f).applyMatrix4(r), d = new C.Vector3().fromBufferAttribute(s, f).applyMatrix4(r), h = new C.Vector2().fromBufferAttribute(i, f);
    return {
      center: d,
      normal: l,
      uv: h
    };
  };
  static getSizeAndCenter = (e) => {
    const t = Be.getBoundingBox([e]), s = t.getSize(new C.Vector3()), n = t.getCenter(new C.Vector3());
    return {
      boundingBox: t,
      center: n,
      size: s
    };
  };
}
class fa {
  _libState;
  _cameraRef = null;
  constructor(e) {
    this._libState = e, Ge(this);
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
    const t = Array.isArray(e) ? e[e.length - 1] : e, s = -1, { boundingBox: n, center: i } = Be.getSizeAndCenter(t);
    if (t instanceof C.Mesh) {
      const { center: r } = Be.getCenterPointAndNormal(
        t
      ), a = Math.abs(r.x);
      this._cameraRef?.setLookAt(
        i.x,
        i.y,
        i.z,
        a,
        r.y,
        s,
        !0
      );
    } else
      this._cameraRef?.setLookAt(
        i.x,
        i.y,
        i.z,
        0,
        i.y,
        s,
        !0
      );
    this._cameraRef?.fitToBox(n, !0);
  };
  dispose() {
    this._cameraRef = null;
  }
}
class da {
  _envVisibility = !1;
  _envIntensity = 1.6;
  _envRotation = {
    x: 0,
    y: 0,
    z: 1.5
  };
  _environmentTexture = null;
  constructor() {
    Ge(this);
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
      const t = await Be.loadEnvironmentTexture(e);
      this.setEnvironmentTexture(t);
    } catch (t) {
      Et.error(`Failed to load environment: ${t}`);
    }
  }
  clearMap = (e) => {
    e === "envMap" && (this._envVisibility = !1, this._envIntensity = 1.6, this._envRotation = { x: 0, y: 0, z: 1.5 }, this._environmentTexture = null);
  };
  dispose() {
    this.clearMap("envMap");
  }
}
class ha {
  _libState;
  _meshInfos = [];
  _groupRef = null;
  constructor(e) {
    this._libState = e, Ge(this);
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
class ma {
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
  /** True once the active variation's GLB has rendered for the first time. */
  isLoaded = !1;
  constructor() {
    Ge(this, {
      _engravingCanvas: Qn.ref,
      _normalMapCanvas: Qn.ref
    });
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
    this._modelUrl !== e && (this._modelUrl = e, this.isLoaded = !1);
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
class pa {
  _libState;
  _meshManager;
  _cameraManager;
  _envManager;
  _ringManager;
  constructor(e) {
    this._libState = e, this._meshManager = new ha(e), this._cameraManager = new fa(e), this._envManager = new da(), this._ringManager = new ma(), Ge(this);
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
var sr = /* @__PURE__ */ ((c) => (c.WEBSITE = "website", c.CONFIG = "config", c))(sr || {});
const ga = {
  website: {
    canvasColor: "#f7f4eb"
  },
  config: {
    canvasColor: "#f8f7f2"
  }
};
class xa {
  _libState;
  _meshInfoJson = null;
  _jsonUrl = "./init.json";
  _source;
  constructor(e, t = sr.WEBSITE) {
    this._libState = e, this._source = t, Ge(this);
  }
  get source() {
    return this._source;
  }
  setSource(e) {
    this._source = e;
  }
  get settings() {
    return ga[this._source];
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
class ya {
  _libState;
  _viewManager;
  modelMinY = 0;
  constructor(e, t) {
    this._libState = e, this._viewManager = new xa(e, t), Ge(this);
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
class rr {
  _designManager;
  _design3DManager;
  constructor(e) {
    this._designManager = new ya(this, e), this._design3DManager = new pa(this), Ge(this);
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
const va = "#f2efe8";
function wa({
  color: c = va
}) {
  const { scene: e } = Ns();
  return ae(() => {
    let t = !1, s = null;
    const n = Be.getImageByColor(c);
    return new C.TextureLoader().loadAsync(n).then((r) => {
      if (t) {
        r.dispose();
        return;
      }
      s = r, s.colorSpace = C.SRGBColorSpace, e.background = s;
    }).catch((r) => {
      Et.error(`Failed to load scene background texture: ${r}`);
    }), () => {
      t = !0, s && e.background === s && (e.background = null, s.dispose());
    };
  }, [c, e]), null;
}
const ir = ze(({ children: c }) => {
  const e = Te(null), { designManager: t, design3DManager: s } = lt(), n = t.modelMinY, { currentView: i } = s.ringManager;
  return /* @__PURE__ */ $.jsxs($.Fragment, { children: [
    c && /* @__PURE__ */ $.jsx("group", { ref: e, children: c }),
    i !== 2 && /* @__PURE__ */ $.jsx(
      ur,
      {
        position: [0, n - 0.02, 0],
        opacity: 0.45,
        scale: 4,
        blur: 2.5,
        far: 3
      }
    )
  ] });
}), _a = ze(() => {
  const { design3DManager: c } = lt(), { cameraManager: e, ringManager: t } = c, s = e.cameraRef, n = t.currentView;
  return ae(() => {
    s && (n === 2 ? (s.minDistance = 1, s.maxDistance = 4, s.smoothTime = 0.8, s.setLookAt(0, 2, -4.4, 0, 0, 0, !0).then(() => {
      s.smoothTime = 0.25;
    })) : (s.smoothTime = 0.8, s.setLookAt(0, 0, 8, 0, 0, 0, !0).then(() => {
      s.smoothTime = 0.25, t.currentView !== 2 && (s.minDistance = 5, s.maxDistance = 10);
    })));
  }, [n, s, t]), null;
}), Ia = ze(
  ar(
    ({
      backgroundColor: c = "#f2efe8",
      className: e,
      diamondEnvPath: t = "/08.hdr",
      envPath: s = "/env/08.exr",
      style: n,
      source: i
    }, r) => {
      const [a] = Ds(() => new rr(i));
      return cr(
        r,
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
      ), ae(() => {
        i && a.designManager.viewManager.setSource(i);
      }, [i, a]), ae(() => () => {
        a.dispose();
      }, [a]), /* @__PURE__ */ $.jsx(zn.Provider, { value: a, children: /* @__PURE__ */ $.jsx(
        "div",
        {
          className: e,
          style: { height: "100%", width: "100%", ...n },
          children: /* @__PURE__ */ $.jsxs(
            Fs,
            {
              frameloop: "always",
              shadows: !0,
              camera: { fov: 35, position: [0, 0, 8] },
              children: [
                /* @__PURE__ */ $.jsx(
                  wa,
                  {
                    color: i ? a.designManager.viewManager.settings.canvasColor : c
                  }
                ),
                /* @__PURE__ */ $.jsxs(Ps, { fallback: null, children: [
                  /* @__PURE__ */ $.jsx(
                    Cs,
                    {
                      files: s,
                      environmentIntensity: 0.7,
                      environmentRotation: [0, 3.63, 0]
                    }
                  ),
                  /* @__PURE__ */ $.jsx(er, { diamondEnvPath: t }),
                  /* @__PURE__ */ $.jsx(ir, {}),
                  /* @__PURE__ */ $.jsx(_a, {}),
                  /* @__PURE__ */ $.jsx(
                    Ls,
                    {
                      makeDefault: !0,
                      minDistance: a.design3DManager.ringManager.currentView === 2 ? 1 : 5,
                      maxDistance: a.design3DManager.ringManager.currentView === 2 ? 4 : 10,
                      minPolarAngle: 0,
                      maxPolarAngle: Math.PI / 1.75,
                      smoothTime: 0.25,
                      draggingSmoothTime: 0.1,
                      dollySpeed: 0.5,
                      truckSpeed: 0,
                      ref: (o) => {
                        o && a.design3DManager.cameraManager.setCameraRef(o);
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
), Da = ze(
  ({
    collection: c,
    modelId: e,
    variations: t,
    activeVariation: s,
    colorHex: n = "#e8c070",
    finish: i = "Polished",
    showDiamond: r = !0,
    envPath: a = "/env/08.exr",
    diamondEnvPath: o = "/08.hdr",
    backgroundColor: u = "#f8f7f2"
  }) => {
    const l = Te(new rr()).current, { ringManager: d } = l.design3DManager, h = (p, v, g) => {
      const y = p.charAt(0).toUpperCase() + p.slice(1);
      let x = g.replace(/\s+/g, "");
      return x.endsWith("mm") || (x = `${x}mm`), `/BehytRings/${y}/${v}/${x}/${v}_${x}.glb`;
    }, m = s || t[0] || "", _ = m ? h(c, e, m) : "";
    return ae(() => {
      _ && d.initModel(_);
    }, [_, d]), ae(() => {
      d.setMetalColor(n);
    }, [n, d]), ae(() => {
      d.setFinish(i);
    }, [i, d]), ae(() => {
      d.setDiamondsVisible(r);
    }, [r, d]), /* @__PURE__ */ $.jsx(zn.Provider, { value: l, children: /* @__PURE__ */ $.jsxs(
      Fs,
      {
        frameloop: "always",
        shadows: !0,
        camera: { fov: 35, position: [0, 0, 8] },
        children: [
          /* @__PURE__ */ $.jsx("color", { attach: "background", args: [u] }),
          /* @__PURE__ */ $.jsxs(Ps, { fallback: null, children: [
            /* @__PURE__ */ $.jsx(
              Cs,
              {
                files: a,
                environmentIntensity: 0.7,
                environmentRotation: [0, 3.63, 0]
              }
            ),
            /* @__PURE__ */ $.jsx(er, { diamondEnvPath: o }),
            /* @__PURE__ */ $.jsx(ir, {}),
            /* @__PURE__ */ $.jsx(
              Ls,
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
  Da as RingScene,
  Ia as SDKViewer,
  Ia as Viewer3D,
  sr as ViewerSource
};
