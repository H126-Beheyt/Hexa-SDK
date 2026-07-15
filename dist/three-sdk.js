import Yt, { useEffect as ie, useMemo as pn, useState as ri, Suspense as cs, useRef as Ue, forwardRef as Li, useImperativeHandle as Fi } from "react";
import { useGLTF as oi, useEnvironment as Ui, ContactShadows as Oi, Environment as ai, CameraControls as ci } from "@react-three/drei";
import { useThree as li, useLoader as at, useFrame as ki, Canvas as ui } from "@react-three/fiber";
import { observer as $e } from "mobx-react-lite";
import * as L from "three";
import { Box3 as Ne, Matrix4 as Ee, BufferAttribute as St, Vector3 as U, Line3 as We, Plane as fi, Vector2 as ke, Triangle as bt, BackSide as Hi, DoubleSide as di, REVISION as hi, Ray as Vi, FrontSide as jn, UnsignedIntType as Ht, FloatType as nt, DataTexture as Kn, NearestFilter as et, IntType as En, UnsignedByteType as Vt, UnsignedShortType as zi, ByteType as Ts, ShortType as Gi, RGBAFormat as vn, RGBAIntegerFormat as Yn, RGIntegerFormat as mi, RedIntegerFormat as ji, RGFormat as Ki, RedFormat as Yi, TrianglesDrawMode as Wi, TriangleFanDrawMode as Wn, TriangleStripDrawMode as pi, Loader as gi, LoaderUtils as zt, FileLoader as ls, MeshPhysicalMaterial as Ve, Color as mt, LinearSRGBColorSpace as He, SRGBColorSpace as Kt, SpotLight as Xi, PointLight as $i, DirectionalLight as qi, Quaternion as xi, InstancedMesh as Ji, InstancedBufferAttribute as Zi, Object3D as yi, TextureLoader as Qi, ImageBitmapLoader as er, InterleavedBuffer as tr, InterleavedBufferAttribute as nr, LinearMipmapLinearFilter as vi, NearestMipmapLinearFilter as sr, LinearMipmapNearestFilter as ir, NearestMipmapNearestFilter as rr, LinearFilter as pt, RepeatWrapping as Xn, MirroredRepeatWrapping as or, ClampToEdgeWrapping as gn, PointsMaterial as ar, Material as Dn, LineBasicMaterial as cr, MeshStandardMaterial as _i, MeshBasicMaterial as kt, PropertyBinding as lr, BufferGeometry as ur, SkinnedMesh as fr, Mesh as dr, LineSegments as hr, Line as mr, LineLoop as pr, Points as gr, Group as In, PerspectiveCamera as xr, MathUtils as yr, OrthographicCamera as vr, Skeleton as _r, AnimationClip as wr, Bone as Tr, InterpolateDiscrete as Mr, InterpolateLinear as wi, Texture as Ms, VectorKeyframeTrack as As, NumberKeyframeTrack as bs, QuaternionKeyframeTrack as Rs, ColorManagement as Ss, Interpolant as Ar, Sphere as br, Data3DTexture as Rr, DataTextureLoader as Sr, HalfFloatType as qt, DataUtils as Jt } from "three";
import { makeAutoObservable as it, observable as Es } from "mobx";
var Zt = { exports: {} }, Dt = {};
var Ds;
function Er() {
  if (Ds) return Dt;
  Ds = 1;
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
var Is;
function Dr() {
  return Is || (Is = 1, process.env.NODE_ENV !== "production" && (function() {
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
          case g:
            return "Portal";
          case x:
            return D.displayName || "Context";
          case _:
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
        var O = F.error, j = typeof Symbol == "function" && Symbol.toStringTag && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return O.call(
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
      function O() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          F
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(D, "key", {
        get: O,
        configurable: !0
      });
    }
    function o() {
      var D = c(this.type);
      return V[D] || (V[D] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), D = this.props.ref, D !== void 0 ? D : null;
    }
    function u(D, F, O, j, le, he) {
      var k = O.ref;
      return D = {
        $$typeof: y,
        type: D,
        key: F,
        props: O,
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
    function f(D, F, O, j, le, he) {
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
        var Y = Object.keys(F).filter(function(me) {
          return me !== "key";
        });
        j = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", K[k + j] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          k,
          Y,
          k
        ), K[k + j] = !0);
      }
      if (k = null, O !== void 0 && (t(O), k = "" + O), i(F) && (t(F.key), k = "" + F.key), "key" in F) {
        O = {};
        for (var ae in F)
          ae !== "key" && (O[ae] = F[ae]);
      } else O = F;
      return k && a(
        O,
        typeof D == "function" ? D.displayName || D.name || "Unknown" : D
      ), u(
        D,
        k,
        O,
        n(),
        le,
        he
      );
    }
    function l(D) {
      d(D) ? D._store && (D._store.validated = 1) : typeof D == "object" && D !== null && D.$$typeof === S && (D._payload.status === "fulfilled" ? d(D._payload.value) && D._payload.value._store && (D._payload.value._store.validated = 1) : D._store && (D._store.validated = 1));
    }
    function d(D) {
      return typeof D == "object" && D !== null && D.$$typeof === y;
    }
    var h = Yt, y = /* @__PURE__ */ Symbol.for("react.transitional.element"), g = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.fragment"), v = /* @__PURE__ */ Symbol.for("react.strict_mode"), p = /* @__PURE__ */ Symbol.for("react.profiler"), _ = /* @__PURE__ */ Symbol.for("react.consumer"), x = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), T = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.suspense_list"), M = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), E = /* @__PURE__ */ Symbol.for("react.client.reference"), R = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, P = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(D) {
        return D();
      }
    };
    var N, V = {}, G = h.react_stack_bottom_frame.bind(
      h,
      r
    )(), $ = C(s(r)), K = {};
    It.Fragment = m, It.jsx = function(D, F, O) {
      var j = 1e4 > R.recentlyCreatedOwnerStacks++;
      return f(
        D,
        F,
        O,
        !1,
        j ? Error("react-stack-top-frame") : G,
        j ? C(s(D)) : $
      );
    }, It.jsxs = function(D, F, O) {
      var j = 1e4 > R.recentlyCreatedOwnerStacks++;
      return f(
        D,
        F,
        O,
        !0,
        j ? Error("react-stack-top-frame") : G,
        j ? C(s(D)) : $
      );
    };
  })()), It;
}
var Ps;
function Ir() {
  return Ps || (Ps = 1, process.env.NODE_ENV === "production" ? Zt.exports = Er() : Zt.exports = Dr()), Zt.exports;
}
var W = Ir();
const us = Yt.createContext(null), Ti = 0, Pr = 1, Br = 2, Bs = 2, Pn = 1.25, Cs = 1, ue = 32, ce = ue / 4, fs = 65535, Cr = fs << 16, xn = Math.pow(2, -24), ds = /* @__PURE__ */ Symbol("SKIP_GENERATION"), Mi = {
  strategy: Ti,
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
function ne(c, e, t) {
  return t.min.x = e[c], t.min.y = e[c + 1], t.min.z = e[c + 2], t.max.x = e[c + 3], t.max.y = e[c + 4], t.max.z = e[c + 5], t;
}
function Ns(c) {
  let e = -1, t = -1 / 0;
  for (let s = 0; s < 3; s++) {
    const n = c[s + 3] - c[s];
    n > t && (t = n, e = s);
  }
  return e;
}
function Ls(c, e) {
  e.set(c);
}
function Fs(c, e, t) {
  let s, n;
  for (let r = 0; r < 3; r++) {
    const i = r + 3;
    s = c[r], n = e[r], t[r] = s < n ? s : n, s = c[i], n = e[i], t[i] = s > n ? s : n;
  }
}
function Qt(c, e, t) {
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
  return e[c + 15] === fs;
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
function Tn(c, e) {
  return e[c + 7];
}
function Bn(c, e, t, s, n) {
  let r = 1 / 0, i = 1 / 0, a = 1 / 0, o = -1 / 0, u = -1 / 0, f = -1 / 0, l = 1 / 0, d = 1 / 0, h = 1 / 0, y = -1 / 0, g = -1 / 0, m = -1 / 0;
  const v = c.offset || 0;
  for (let p = (e - v) * 6, _ = (e + t - v) * 6; p < _; p += 6) {
    const x = c[p + 0], w = c[p + 1], T = x - w, A = x + w;
    T < r && (r = T), A > o && (o = A), x < l && (l = x), x > y && (y = x);
    const M = c[p + 2], S = c[p + 3], b = M - S, E = M + S;
    b < i && (i = b), E > u && (u = E), M < d && (d = M), M > g && (g = M);
    const R = c[p + 4], I = c[p + 5], P = R - I, C = R + I;
    P < a && (a = P), C > f && (f = C), R < h && (h = R), R > m && (m = R);
  }
  s[0] = r, s[1] = i, s[2] = a, s[3] = o, s[4] = u, s[5] = f, n[0] = l, n[1] = d, n[2] = h, n[3] = y, n[4] = g, n[5] = m;
}
const je = 32, Nr = (c, e) => c.candidate - e.candidate, Je = /* @__PURE__ */ new Array(je).fill().map(() => ({
  count: 0,
  bounds: new Float32Array(6),
  rightCacheBounds: new Float32Array(6),
  leftCacheBounds: new Float32Array(6),
  candidate: 0
})), en = /* @__PURE__ */ new Float32Array(6);
function Lr(c, e, t, s, n, r) {
  let i = -1, a = 0;
  if (r === Ti)
    i = Ns(e), i !== -1 && (a = (e[i] + e[i + 3]) / 2);
  else if (r === Pr)
    i = Ns(c), i !== -1 && (a = Fr(t, s, n, i));
  else if (r === Br) {
    const o = Pt(c);
    let u = Pn * n;
    const f = t.offset || 0, l = (s - f) * 6, d = (s + n - f) * 6;
    for (let h = 0; h < 3; h++) {
      const y = e[h], v = (e[h + 3] - y) / je;
      if (n < je / 4) {
        const p = [...Je];
        p.length = n;
        let _ = 0;
        for (let w = l; w < d; w += 6, _++) {
          const T = p[_];
          T.candidate = t[w + 2 * h], T.count = 0;
          const {
            bounds: A,
            leftCacheBounds: M,
            rightCacheBounds: S
          } = T;
          for (let b = 0; b < 3; b++)
            S[b] = 1 / 0, S[b + 3] = -1 / 0, M[b] = 1 / 0, M[b + 3] = -1 / 0, A[b] = 1 / 0, A[b + 3] = -1 / 0;
          Qt(w, t, A);
        }
        p.sort(Nr);
        let x = n;
        for (let w = 0; w < x; w++) {
          const T = p[w];
          for (; w + 1 < x && p[w + 1].candidate === T.candidate; )
            p.splice(w + 1, 1), x--;
        }
        for (let w = l; w < d; w += 6) {
          const T = t[w + 2 * h];
          for (let A = 0; A < x; A++) {
            const M = p[A];
            T >= M.candidate ? Qt(w, t, M.rightCacheBounds) : (Qt(w, t, M.leftCacheBounds), M.count++);
          }
        }
        for (let w = 0; w < x; w++) {
          const T = p[w], A = T.count, M = n - T.count, S = T.leftCacheBounds, b = T.rightCacheBounds;
          let E = 0;
          A !== 0 && (E = Pt(S) / o);
          let R = 0;
          M !== 0 && (R = Pt(b) / o);
          const I = Cs + Pn * (E * A + R * M);
          I < u && (i = h, u = I, a = T.candidate);
        }
      } else {
        for (let x = 0; x < je; x++) {
          const w = Je[x];
          w.count = 0, w.candidate = y + v + x * v;
          const T = w.bounds;
          for (let A = 0; A < 3; A++)
            T[A] = 1 / 0, T[A + 3] = -1 / 0;
        }
        for (let x = l; x < d; x += 6) {
          let A = ~~((t[x + 2 * h] - y) / v);
          A >= je && (A = je - 1);
          const M = Je[A];
          M.count++, Qt(x, t, M.bounds);
        }
        const p = Je[je - 1];
        Ls(p.bounds, p.rightCacheBounds);
        for (let x = je - 2; x >= 0; x--) {
          const w = Je[x], T = Je[x + 1];
          Fs(w.bounds, T.rightCacheBounds, w.rightCacheBounds);
        }
        let _ = 0;
        for (let x = 0; x < je - 1; x++) {
          const w = Je[x], T = w.count, A = w.bounds, S = Je[x + 1].rightCacheBounds;
          T !== 0 && (_ === 0 ? Ls(A, en) : Fs(A, en, en)), _ += T;
          let b = 0, E = 0;
          _ !== 0 && (b = Pt(en) / o);
          const R = n - _;
          R !== 0 && (E = Pt(S) / o);
          const I = Cs + Pn * (b * _ + E * R);
          I < u && (i = h, u = I, a = w.candidate);
        }
      }
    }
  } else
    console.warn(`BVH: Invalid build strategy value ${r} used.`);
  return { axis: i, pos: a };
}
function Fr(c, e, t, s) {
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
function Ur(c, e, t, s, n, r) {
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
        const d = i - f, h = a - f, y = t[d * 6 + l];
        t[d * 6 + l] = t[h * 6 + l], t[h * 6 + l] = y;
      }
      i++, a--;
    } else
      return i;
  }
}
let Ai, yn, $n, bi;
const Or = Math.pow(2, 32);
function qn(c) {
  return "count" in c ? 1 : 1 + qn(c.left) + qn(c.right);
}
function kr(c, e, t) {
  return Ai = new Float32Array(t), yn = new Uint32Array(t), $n = new Uint16Array(t), bi = new Uint8Array(t), Jn(c, e);
}
function Jn(c, e) {
  const t = c / 4, s = c / 2, n = "count" in e, r = e.boundingData;
  for (let i = 0; i < 6; i++)
    Ai[t + i] = r[i];
  if (n)
    return e.buffer ? (bi.set(new Uint8Array(e.buffer), c), c + e.buffer.byteLength) : (yn[t + 6] = e.offset, $n[s + 14] = e.count, $n[s + 15] = fs, c + ue);
  {
    const { left: i, right: a, splitAxis: o } = e, u = c + ue;
    let f = Jn(u, i);
    const l = c / ue, h = f / ue - l;
    if (h > Or)
      throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");
    return yn[t + 6] = h, yn[t + 7] = o, Jn(f, a);
  }
}
function Hr(c, e, t, s, n, r) {
  const {
    maxDepth: i,
    verbose: a,
    maxLeafSize: o,
    strategy: u,
    onProgress: f
  } = n, l = c.primitiveBuffer, d = c.primitiveBufferStride, h = new Float32Array(6);
  let y = !1;
  const g = new Cn();
  return Bn(e, t, s, g.boundingData, h), v(g, t, s, h), g;
  function m(p) {
    f && f((p - r.offset) / r.count);
  }
  function v(p, _, x, w = null, T = 0) {
    if (!y && T >= i && (y = !0, a && console.warn(`BVH: Max depth of ${i} reached when generating BVH. Consider increasing maxDepth.`)), x <= o || T >= i)
      return m(_ + x), p.offset = _, p.count = x, p;
    const A = Lr(p.boundingData, w, e, _, x, u);
    if (A.axis === -1)
      return m(_ + x), p.offset = _, p.count = x, p;
    const M = Ur(l, d, e, _, x, A);
    if (M === _ || M === _ + x)
      m(_ + x), p.offset = _, p.count = x;
    else {
      p.splitAxis = A.axis;
      const S = new Cn(), b = _, E = M - _;
      p.left = S, Bn(e, b, E, S.boundingData, h), v(S, b, E, h, T + 1);
      const R = new Cn(), I = M, P = x - E;
      p.right = R, Bn(e, I, P, R.boundingData, h), v(R, I, P, h, T + 1);
    }
    return p;
  }
}
function Vr(c, e) {
  const t = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, s = c.getRootRanges(e.range), n = s[0], r = s[s.length - 1], i = {
    offset: n.offset,
    count: r.offset + r.count - n.offset
  }, a = new Float32Array(6 * i.count);
  a.offset = i.offset, c.computePrimitiveBounds(i.offset, i.count, a), c._roots = s.map((o) => {
    const u = Hr(c, a, o.offset, o.count, e, i), f = qn(u), l = new t(ue * f);
    return kr(0, u, l), l;
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
class zr {
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
const J = /* @__PURE__ */ new zr();
let tt, Rt;
const xt = [], tn = /* @__PURE__ */ new hs(() => new Ne());
function Gr(c, e, t, s, n, r) {
  tt = tn.getPrimitive(), Rt = tn.getPrimitive(), xt.push(tt, Rt), J.setBuffer(c._roots[e]);
  const i = Zn(0, c.geometry, t, s, n, r);
  J.clearBuffer(), tn.releasePrimitive(tt), tn.releasePrimitive(Rt), xt.pop(), xt.pop();
  const a = xt.length;
  return a > 0 && (Rt = xt[a - 1], tt = xt[a - 2]), i;
}
function Zn(c, e, t, s, n = null, r = 0, i = 0) {
  const { float32Array: a, uint16Array: o, uint32Array: u } = J;
  let f = c * 2;
  if (re(f, o)) {
    const d = pe(c, u), h = ge(f, o);
    return ne(c, a, tt), s(d, h, !1, i, r + c / ce, tt);
  } else {
    let b = function(R) {
      const { uint16Array: I, uint32Array: P } = J;
      let C = R * 2;
      for (; !re(C, I); )
        R = fe(R), C = R * 2;
      return pe(R, P);
    }, E = function(R) {
      const { uint16Array: I, uint32Array: P } = J;
      let C = R * 2;
      for (; !re(C, I); )
        R = de(R, P), C = R * 2;
      return pe(R, P) + ge(C, I);
    };
    const d = fe(c), h = de(c, u);
    let y = d, g = h, m, v, p, _;
    if (n && (p = tt, _ = Rt, ne(y, a, p), ne(g, a, _), m = n(p), v = n(_), v < m)) {
      y = h, g = d;
      const R = m;
      m = v, v = R, p = _;
    }
    p || (p = tt, ne(y, a, p));
    const x = re(y * 2, o), w = t(p, x, m, i + 1, r + y / ce);
    let T;
    if (w === Bs) {
      const R = b(y), P = E(y) - R;
      T = s(R, P, !0, i + 1, r + y / ce, p);
    } else
      T = w && Zn(
        y,
        e,
        t,
        s,
        n,
        r,
        i + 1
      );
    if (T) return !0;
    _ = Rt, ne(g, a, _);
    const A = re(g * 2, o), M = t(_, A, v, i + 1, r + g / ce);
    let S;
    if (M === Bs) {
      const R = b(g), P = E(g) - R;
      S = s(R, P, !0, i + 1, r + g / ce, _);
    } else
      S = M && Zn(
        g,
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
const Gt = /* @__PURE__ */ new J.constructor(), _n = /* @__PURE__ */ new J.constructor(), Qe = /* @__PURE__ */ new hs(() => new Ne()), yt = /* @__PURE__ */ new Ne(), vt = /* @__PURE__ */ new Ne(), Nn = /* @__PURE__ */ new Ne(), Ln = /* @__PURE__ */ new Ne();
let Fn = !1;
function jr(c, e, t, s) {
  if (Fn)
    throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");
  Fn = !0;
  const n = c._roots, r = e._roots;
  let i, a = 0, o = 0;
  const u = new Ee().copy(t).invert();
  for (let f = 0, l = n.length; f < l; f++) {
    Gt.setBuffer(n[f]), o = 0;
    const d = Qe.getPrimitive();
    ne(0, Gt.float32Array, d), d.applyMatrix4(u);
    for (let h = 0, y = r.length; h < y && (_n.setBuffer(r[h]), i = Be(
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
    ), _n.clearBuffer(), o += r[h].byteLength / ue, !i); h++)
      ;
    if (Qe.releasePrimitive(d), Gt.clearBuffer(), a += n[f].byteLength / ue, i)
      break;
  }
  return Fn = !1, i;
}
function Be(c, e, t, s, n, r = 0, i = 0, a = 0, o = 0, u = null, f = !1) {
  let l, d;
  f ? (l = _n, d = Gt) : (l = Gt, d = _n);
  const h = l.float32Array, y = l.uint32Array, g = l.uint16Array, m = d.float32Array, v = d.uint32Array, p = d.uint16Array, _ = c * 2, x = e * 2, w = re(_, g), T = re(x, p);
  let A = !1;
  if (T && w)
    f ? A = n(
      pe(e, v),
      ge(e * 2, p),
      pe(c, y),
      ge(c * 2, g),
      o,
      i + e / ce,
      a,
      r + c / ce
    ) : A = n(
      pe(c, y),
      ge(c * 2, g),
      pe(e, v),
      ge(e * 2, p),
      a,
      r + c / ce,
      o,
      i + e / ce
    );
  else if (T) {
    const M = Qe.getPrimitive();
    ne(e, m, M), M.applyMatrix4(t);
    const S = fe(c), b = de(c, y);
    ne(S, h, yt), ne(b, h, vt);
    const E = M.intersectsBox(yt), R = M.intersectsBox(vt);
    A = E && Be(
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
    ) || R && Be(
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
    const M = fe(e), S = de(e, v);
    ne(M, m, Nn), ne(S, m, Ln);
    const b = u.intersectsBox(Nn), E = u.intersectsBox(Ln);
    if (b && E)
      A = Be(
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
      ) || Be(
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
        A = Be(
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
        R.copy(Nn).applyMatrix4(t);
        const I = fe(c), P = de(c, y);
        ne(I, h, yt), ne(P, h, vt);
        const C = R.intersectsBox(yt), N = R.intersectsBox(vt);
        A = C && Be(
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
        ) || N && Be(
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
        A = Be(
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
        R.copy(Ln).applyMatrix4(t);
        const I = fe(c), P = de(c, y);
        ne(I, h, yt), ne(P, h, vt);
        const C = R.intersectsBox(yt), N = R.intersectsBox(vt);
        A = C && Be(
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
        ) || N && Be(
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
const Us = /* @__PURE__ */ new Ne(), _t = /* @__PURE__ */ new Float32Array(6);
class Kr {
  constructor() {
    this._roots = null, this.primitiveBuffer = null, this.primitiveBufferStride = null;
  }
  init(e) {
    e = {
      ...Mi,
      ...e
    }, Vr(this, e);
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
      const [h, y, g, m, v, p] = _t;
      h < r && (r = h), m > o && (o = m), y < i && (i = y), v > u && (u = v), g < a && (a = g), p > f && (f = p);
    }
    return s[n + 0] = r, s[n + 1] = i, s[n + 2] = a, s[n + 3] = o, s[n + 4] = u, s[n + 5] = f, s;
  }
  computePrimitiveBounds(e, t, s) {
    const n = s.offset || 0;
    for (let r = e, i = e + t; r < i; r++) {
      this.writePrimitiveBounds(r, _t, 0);
      const [a, o, u, f, l, d] = _t, h = (a + f) / 2, y = (o + l) / 2, g = (u + d) / 2, m = (f - a) / 2, v = (l - o) / 2, p = (d - u) / 2, _ = (r - n) * 6;
      s[_ + 0] = h, s[_ + 1] = m + (Math.abs(h) + m) * xn, s[_ + 2] = y, s[_ + 3] = v + (Math.abs(y) + v) * xn, s[_ + 4] = g, s[_ + 5] = p + (Math.abs(g) + p) * xn;
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
        const l = fe(a), d = de(a, n), h = Tn(a, n);
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
          const h = pe(f, r), y = ge(l, i);
          this.writePrimitiveRangeBounds(h, y, _t, 0), a.set(_t, f);
        } else {
          const h = fe(f), y = de(f, r);
          for (let g = 0; g < 3; g++) {
            const m = a[h + g], v = a[h + g + 3], p = a[y + g], _ = a[y + g + 3];
            a[f + g] = m < p ? m : p, a[f + g + 3] = v > _ ? v : _;
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
      ne(0, new Float32Array(s), Us), e.union(Us);
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
      n = (d, h, y, g, m) => l(d, h, y, g, m) ? !0 : a(d, h, this, r, y, g, i);
    } else n || (r ? n = (l, d, h, y) => a(l, d, this, r, h, y, i) : n = (l, d, h) => h);
    let o = !1, u = 0;
    const f = this._roots;
    for (let l = 0, d = f.length; l < d; l++) {
      const h = f[l];
      if (o = Gr(this, l, s, n, t, u), o)
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
    return jr(this, e, t, n);
  }
}
function Yr() {
  return typeof SharedArrayBuffer < "u";
}
function Mn(c) {
  return c.index ? c.index.count : c.attributes.position.count;
}
function An(c) {
  return Mn(c) / 3;
}
function Ri(c, e = ArrayBuffer) {
  return c > 65535 ? new Uint32Array(new e(4 * c)) : new Uint16Array(new e(2 * c));
}
function Wr(c, e) {
  if (!c.index) {
    const t = c.attributes.position.count, s = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, n = Ri(t, s);
    c.setIndex(new St(n, 1));
    for (let r = 0; r < t; r++)
      n[r] = r;
  }
}
function Xr(c, e, t) {
  const s = Mn(c) / t, n = e || c.drawRange, r = n.start / t, i = (n.start + n.count) / t, a = Math.max(0, r), o = Math.min(s, i) - a;
  return {
    offset: Math.floor(a),
    count: Math.floor(o)
  };
}
function $r(c, e) {
  return c.groups.map((t) => ({
    offset: t.start / e,
    count: t.count / e
  }));
}
function Os(c, e, t) {
  const s = Xr(c, e, t), n = $r(c, t);
  if (!n.length)
    return [s];
  const r = [], i = s.offset, a = s.offset + s.count, o = Mn(c) / t, u = [];
  for (const d of n) {
    const { offset: h, count: y } = d, g = h, m = isFinite(y) ? y : o - h, v = h + m;
    g < a && v > i && (u.push({ pos: Math.max(i, g), isStart: !0 }), u.push({ pos: Math.min(a, v), isStart: !1 }));
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
function qr(c, e) {
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
class Jr extends Kr {
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
    if (t.useSharedArrayBuffer && !Yr())
      throw new Error("BVH: SharedArrayBuffer is not available.");
    super(), this.geometry = e, this.resolvePrimitiveIndex = t.indirect ? (s) => this._indirectBuffer[s] : (s) => s, this.primitiveBuffer = null, this.primitiveBufferStride = null, this._indirectBuffer = null, t = {
      ...Mi,
      ...t
    }, t[ds] || this.init(t);
  }
  init(e) {
    const { geometry: t, primitiveStride: s } = this;
    if (e.indirect) {
      const n = Os(t, e.range, s), r = qr(n, e.useSharedArrayBuffer);
      this._indirectBuffer = r;
    } else
      Wr(t, e);
    super.init(e), !t.boundingBox && e.setBoundingBox && (t.boundingBox = this.getBoundingBox(new Ne()));
  }
  // Abstract methods to be implemented by subclasses
  getRootRanges(e) {
    return this.indirect ? [{ offset: 0, count: this._indirectBuffer.length }] : Os(this.geometry, e, this.primitiveStride);
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
  const c = /* @__PURE__ */ new U();
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
const Zr = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new U();
  return function(n, r, i) {
    const a = n.start, o = c, u = r.start, f = e;
    t.subVectors(a, u), c.subVectors(n.end, n.start), e.subVectors(r.end, r.start);
    const l = t.dot(f), d = f.dot(o), h = f.dot(f), y = t.dot(o), m = o.dot(o) * h - d * d;
    let v, p;
    m !== 0 ? v = (l * d - y * h) / m : v = 0, p = (l + v * d) / h, i.x = v, i.y = p;
  };
})(), ms = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new ke(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new U();
  return function(n, r, i, a) {
    Zr(n, r, c);
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
})(), Qr = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new fi(), s = /* @__PURE__ */ new We();
  return function(r, i) {
    const { radius: a, center: o } = r, { a: u, b: f, c: l } = i;
    if (s.start = u, s.end = f, s.closestPointToPoint(o, !0, c).distanceTo(o) <= a || (s.start = u, s.end = l, s.closestPointToPoint(o, !0, c).distanceTo(o) <= a) || (s.start = f, s.end = l, s.closestPointToPoint(o, !0, c).distanceTo(o) <= a)) return !0;
    const g = i.getPlane(t);
    if (Math.abs(g.distanceToPoint(o)) <= a) {
      const v = g.projectPoint(o, e);
      if (i.containsPoint(v)) return !0;
    }
    return !1;
  };
})(), eo = ["x", "y", "z"], Ke = 1e-15, ks = Ke * Ke;
function Ae(c) {
  return Math.abs(c) < Ke;
}
class Ce extends bt {
  constructor(...e) {
    super(...e), this.isExtendedTriangle = !0, this.satAxes = new Array(4).fill().map(() => new U()), this.satBounds = new Array(4).fill().map(() => new Xe()), this.points = [this.a, this.b, this.c], this.plane = new fi(), this.isDegenerateIntoSegment = !1, this.isDegenerateIntoPoint = !1, this.degenerateSegment = new We(), this.needsUpdate = !0;
  }
  /**
   * Returns whether the triangle intersects the given sphere.
   * @param {Sphere} sphere
   * @returns {boolean}
   */
  intersectsSphere(e) {
    return Qr(e, this);
  }
  update() {
    const e = this.a, t = this.b, s = this.c, n = this.points, r = this.satAxes, i = this.satBounds, a = r[0], o = i[0];
    this.getNormal(a), o.setFromPoints(a, n);
    const u = r[1], f = i[1];
    u.subVectors(e, t), f.setFromPoints(u, n);
    const l = r[2], d = i[2];
    l.subVectors(t, s), d.setFromPoints(l, n);
    const h = r[3], y = i[3];
    h.subVectors(s, e), y.setFromPoints(h, n);
    const g = u.length(), m = l.length(), v = h.length();
    this.isDegenerateIntoPoint = !1, this.isDegenerateIntoSegment = !1, g < Ke ? m < Ke || v < Ke ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(e), this.degenerateSegment.end.copy(s)) : m < Ke ? v < Ke ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(t), this.degenerateSegment.end.copy(e)) : v < Ke && (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(s), this.degenerateSegment.end.copy(t)), this.plane.setFromNormalAndCoplanarPoint(a, e), this.needsUpdate = !1;
  }
}
Ce.prototype.closestPointToSegment = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new We();
  return function(n, r = null, i = null) {
    const { start: a, end: o } = n, u = this.points;
    let f, l = 1 / 0;
    for (let d = 0; d < 3; d++) {
      const h = (d + 1) % 3;
      t.start.copy(u[d]), t.end.copy(u[h]), ms(t, n, c, e), f = c.distanceToSquared(e), f < l && (l = f, r && r.copy(c), i && i.copy(e));
    }
    return this.closestPointToPoint(a, c), f = a.distanceToSquared(c), f < l && (l = f, r && r.copy(c), i && i.copy(a)), this.closestPointToPoint(o, c), f = o.distanceToSquared(c), f < l && (l = f, r && r.copy(c), i && i.copy(o)), Math.sqrt(l);
  };
})();
Ce.prototype.intersectsTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Ce(), e = /* @__PURE__ */ new Xe(), t = /* @__PURE__ */ new Xe(), s = /* @__PURE__ */ new U(), n = /* @__PURE__ */ new U(), r = /* @__PURE__ */ new U(), i = /* @__PURE__ */ new U(), a = /* @__PURE__ */ new We(), o = /* @__PURE__ */ new We(), u = /* @__PURE__ */ new U(), f = /* @__PURE__ */ new ke(), l = /* @__PURE__ */ new ke();
  function d(_, x, w, T) {
    const A = s;
    !_.isDegenerateIntoPoint && !_.isDegenerateIntoSegment ? A.copy(_.plane.normal) : A.copy(x.plane.normal);
    const M = _.satBounds, S = _.satAxes;
    for (let R = 1; R < 4; R++) {
      const I = M[R], P = S[R];
      if (e.setFromPoints(P, x.points), I.isSeparated(e) || (i.copy(A).cross(P), e.setFromPoints(i, _.points), t.setFromPoints(i, x.points), e.isSeparated(t))) return !1;
    }
    const b = x.satBounds, E = x.satAxes;
    for (let R = 1; R < 4; R++) {
      const I = b[R], P = E[R];
      if (e.setFromPoints(P, _.points), I.isSeparated(e) || (i.crossVectors(A, P), e.setFromPoints(i, _.points), t.setFromPoints(i, x.points), e.isSeparated(t))) return !1;
    }
    return w && (T || console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."), w.start.set(0, 0, 0), w.end.set(0, 0, 0)), !0;
  }
  function h(_, x, w, T, A, M, S, b, E, R, I) {
    let P = S / (S - b);
    R.x = T + (A - T) * P, I.start.subVectors(x, _).multiplyScalar(P).add(_), P = S / (S - E), R.y = T + (M - T) * P, I.end.subVectors(w, _).multiplyScalar(P).add(_);
  }
  function y(_, x, w, T, A, M, S, b, E, R, I) {
    if (A > 0)
      h(_.c, _.a, _.b, T, x, w, E, S, b, R, I);
    else if (M > 0)
      h(_.b, _.a, _.c, w, x, T, b, S, E, R, I);
    else if (b * E > 0 || S != 0)
      h(_.a, _.b, _.c, x, w, T, S, b, E, R, I);
    else if (b != 0)
      h(_.b, _.a, _.c, w, x, T, b, S, E, R, I);
    else if (E != 0)
      h(_.c, _.a, _.b, T, x, w, E, S, b, R, I);
    else
      return !0;
    return !1;
  }
  function g(_, x, w, T) {
    const A = x.degenerateSegment, M = _.plane.distanceToPoint(A.start), S = _.plane.distanceToPoint(A.end);
    return Ae(M) ? Ae(S) ? d(_, x, w, T) : (w && (w.start.copy(A.start), w.end.copy(A.start)), _.containsPoint(A.start)) : Ae(S) ? (w && (w.start.copy(A.end), w.end.copy(A.end)), _.containsPoint(A.end)) : _.plane.intersectLine(A, s) != null ? (w && (w.start.copy(s), w.end.copy(s)), _.containsPoint(s)) : !1;
  }
  function m(_, x, w) {
    const T = x.a;
    return Ae(_.plane.distanceToPoint(T)) && _.containsPoint(T) ? (w && (w.start.copy(T), w.end.copy(T)), !0) : !1;
  }
  function v(_, x, w) {
    const T = _.degenerateSegment, A = x.a;
    return T.closestPointToPoint(A, !0, s), A.distanceToSquared(s) < ks ? (w && (w.start.copy(A), w.end.copy(A)), !0) : !1;
  }
  function p(_, x, w, T) {
    if (_.isDegenerateIntoSegment)
      if (x.isDegenerateIntoSegment) {
        const A = _.degenerateSegment, M = x.degenerateSegment, S = n, b = r;
        A.delta(S), M.delta(b);
        const E = s.subVectors(M.start, A.start), R = S.x * b.y - S.y * b.x;
        if (Ae(R))
          return !1;
        const I = (E.x * b.y - E.y * b.x) / R, P = -(S.x * E.y - S.y * E.x) / R;
        if (I < 0 || I > 1 || P < 0 || P > 1)
          return !1;
        const C = A.start.z + S.z * I, N = M.start.z + b.z * P;
        return Ae(C - N) ? (w && (w.start.copy(A.start).addScaledVector(S, I), w.end.copy(A.start).addScaledVector(S, I)), !0) : !1;
      } else return x.isDegenerateIntoPoint ? v(_, x, w) : g(x, _, w, T);
    else {
      if (_.isDegenerateIntoPoint)
        return x.isDegenerateIntoPoint ? x.a.distanceToSquared(_.a) < ks ? (w && (w.start.copy(_.a), w.end.copy(_.a)), !0) : !1 : x.isDegenerateIntoSegment ? v(x, _, w) : m(x, _, w);
      if (x.isDegenerateIntoPoint)
        return m(_, x, w);
      if (x.isDegenerateIntoSegment)
        return g(_, x, w, T);
    }
  }
  return function(x, w = null, T = !1) {
    this.needsUpdate && this.update(), x.isExtendedTriangle ? x.needsUpdate && x.update() : (c.copy(x), c.update(), x = c);
    const A = p(this, x, w, T);
    if (A !== void 0)
      return A;
    const M = this.plane, S = x.plane;
    let b = S.distanceToPoint(this.a), E = S.distanceToPoint(this.b), R = S.distanceToPoint(this.c);
    Ae(b) && (b = 0), Ae(E) && (E = 0), Ae(R) && (R = 0);
    const I = b * E, P = b * R;
    if (I > 0 && P > 0)
      return !1;
    let C = M.distanceToPoint(x.a), N = M.distanceToPoint(x.b), V = M.distanceToPoint(x.c);
    Ae(C) && (C = 0), Ae(N) && (N = 0), Ae(V) && (V = 0);
    const G = C * N, $ = C * V;
    if (G > 0 && $ > 0)
      return !1;
    n.copy(M.normal), r.copy(S.normal);
    const K = n.cross(r);
    let D = 0, F = Math.abs(K.x);
    const O = Math.abs(K.y);
    O > F && (F = O, D = 1), Math.abs(K.z) > F && (D = 2);
    const le = eo[D], he = this.a[le], k = this.b[le], Y = this.c[le], ae = x.a[le], me = x.b[le], De = x.c[le];
    if (y(this, he, k, Y, I, P, b, E, R, f, a))
      return d(this, x, w, T);
    if (y(x, ae, me, De, G, $, C, N, V, l, o))
      return d(this, x, w, T);
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
Ce.prototype.distanceToPoint = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U();
  return function(t) {
    return this.closestPointToPoint(t, c), t.distanceTo(c);
  };
})();
Ce.prototype.distanceToTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = ["a", "b", "c"], s = /* @__PURE__ */ new We(), n = /* @__PURE__ */ new We();
  return function(i, a = null, o = null) {
    const u = a || o ? s : null;
    if (this.intersectsTriangle(i, u, !0))
      return (a || o) && (a && u.getCenter(a), o && u.getCenter(o)), 0;
    let f = 1 / 0;
    for (let l = 0; l < 3; l++) {
      let d;
      const h = t[l], y = i[h];
      this.closestPointToPoint(y, c), d = y.distanceToSquared(c), d < f && (f = d, a && a.copy(c), o && o.copy(y));
      const g = this[h];
      i.closestPointToPoint(g, c), d = g.distanceToSquared(c), d < f && (f = d, a && a.copy(g), o && o.copy(c));
    }
    for (let l = 0; l < 3; l++) {
      const d = t[l], h = t[(l + 1) % 3];
      s.set(this[d], this[h]);
      for (let y = 0; y < 3; y++) {
        const g = t[y], m = t[(y + 1) % 3];
        n.set(i[g], i[m]), ms(s, n, c, e);
        const v = c.distanceToSquared(e);
        v < f && (f = v, a && a.copy(c), o && o.copy(e));
      }
    }
    return Math.sqrt(f);
  };
})();
class ye {
  constructor(e, t, s) {
    this.isOrientedBox = !0, this.min = new U(), this.max = new U(), this.matrix = new Ee(), this.invMatrix = new Ee(), this.points = new Array(8).fill().map(() => new U()), this.satAxes = new Array(3).fill().map(() => new U()), this.satBounds = new Array(3).fill().map(() => new Xe()), this.alignedSatBounds = new Array(3).fill().map(() => new Xe()), this.needsUpdate = !1, e && this.min.copy(e), t && this.max.copy(t), s && this.matrix.copy(s);
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
  const c = /* @__PURE__ */ new Ce(), e = /* @__PURE__ */ new Array(3), t = /* @__PURE__ */ new Xe(), s = /* @__PURE__ */ new Xe(), n = /* @__PURE__ */ new U();
  return function(i) {
    this.needsUpdate && this.update(), i.isExtendedTriangle ? i.needsUpdate && i.update() : (c.copy(i), c.update(), i = c);
    const a = this.satBounds, o = this.satAxes;
    e[0] = i.a, e[1] = i.b, e[2] = i.c;
    for (let d = 0; d < 3; d++) {
      const h = a[d], y = o[d];
      if (t.setFromPoints(y, e), h.isSeparated(t)) return !1;
    }
    const u = i.satBounds, f = i.satAxes, l = this.points;
    for (let d = 0; d < 3; d++) {
      const h = u[d], y = f[d];
      if (t.setFromPoints(y, l), h.isSeparated(t)) return !1;
    }
    for (let d = 0; d < 3; d++) {
      const h = o[d];
      for (let y = 0; y < 4; y++) {
        const g = f[y];
        if (n.crossVectors(h, g), t.setFromPoints(n, e), s.setFromPoints(n, l), t.isSeparated(s)) return !1;
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
  const c = new U();
  return function(t) {
    return this.closestPointToPoint(t, c), t.distanceTo(c);
  };
})();
ye.prototype.distanceToBox = /* @__PURE__ */ (function() {
  const c = ["x", "y", "z"], e = /* @__PURE__ */ new Array(12).fill().map(() => new We()), t = /* @__PURE__ */ new Array(12).fill().map(() => new We()), s = /* @__PURE__ */ new U(), n = /* @__PURE__ */ new U();
  return function(i, a = 0, o = null, u = null) {
    if (this.needsUpdate && this.update(), this.intersectsBox(i))
      return (o || u) && (i.getCenter(n), this.closestPointToPoint(n, s), i.closestPointToPoint(s, n), o && o.copy(s), u && u.copy(n)), 0;
    const f = a * a, l = i.min, d = i.max, h = this.points;
    let y = 1 / 0;
    for (let m = 0; m < 8; m++) {
      const v = h[m];
      n.copy(v).clamp(l, d);
      const p = v.distanceToSquared(n);
      if (p < y && (y = p, o && o.copy(v), u && u.copy(n), p < f))
        return Math.sqrt(p);
    }
    let g = 0;
    for (let m = 0; m < 3; m++)
      for (let v = 0; v <= 1; v++)
        for (let p = 0; p <= 1; p++) {
          const _ = (m + 1) % 3, x = (m + 2) % 3, w = v << _ | p << x, T = 1 << m | v << _ | p << x, A = h[w], M = h[T];
          e[g].set(A, M);
          const b = c[m], E = c[_], R = c[x], I = t[g], P = I.start, C = I.end;
          P[b] = l[b], P[E] = v ? l[E] : d[E], P[R] = p ? l[R] : d[E], C[b] = d[b], C[E] = v ? l[E] : d[E], C[R] = p ? l[R] : d[E], g++;
        }
    for (let m = 0; m <= 1; m++)
      for (let v = 0; v <= 1; v++)
        for (let p = 0; p <= 1; p++) {
          n.x = m ? d.x : l.x, n.y = v ? d.y : l.y, n.z = p ? d.z : l.z, this.closestPointToPoint(n, s);
          const _ = n.distanceToSquared(s);
          if (_ < y && (y = _, o && o.copy(s), u && u.copy(n), _ < f))
            return Math.sqrt(_);
        }
    for (let m = 0; m < 12; m++) {
      const v = e[m];
      for (let p = 0; p < 12; p++) {
        const _ = t[p];
        ms(v, _, s, n);
        const x = s.distanceToSquared(n);
        if (x < y && (y = x, o && o.copy(s), u && u.copy(n), x < f))
          return Math.sqrt(x);
      }
    }
    return Math.sqrt(y);
  };
})();
class to extends hs {
  constructor() {
    super(() => new Ce());
  }
}
const Se = /* @__PURE__ */ new to(), Bt = /* @__PURE__ */ new U(), Un = /* @__PURE__ */ new U();
function no(c, e, t = {}, s = 0, n = 1 / 0) {
  const r = s * s, i = n * n;
  let a = 1 / 0, o = null;
  if (c.shapecast(
    {
      boundsTraverseOrder: (f) => (Bt.copy(e).clamp(f.min, f.max), Bt.distanceToSquared(e)),
      intersectsBounds: (f, l, d) => d < a && d < i,
      intersectsTriangle: (f, l) => {
        f.closestPointToPoint(e, Bt);
        const d = e.distanceToSquared(Bt);
        return d < a && (Un.copy(Bt), a = d, o = l), d < r;
      }
    }
  ), a === 1 / 0) return null;
  const u = Math.sqrt(a);
  return t.point ? t.point.copy(Un) : t.point = Un.clone(), t.distance = u, t.faceIndex = o, t;
}
const nn = parseInt(hi) >= 169, so = parseInt(hi) <= 161, ct = /* @__PURE__ */ new U(), lt = /* @__PURE__ */ new U(), ut = /* @__PURE__ */ new U(), sn = /* @__PURE__ */ new ke(), rn = /* @__PURE__ */ new ke(), on = /* @__PURE__ */ new ke(), Hs = /* @__PURE__ */ new U(), Vs = /* @__PURE__ */ new U(), zs = /* @__PURE__ */ new U(), Ct = /* @__PURE__ */ new U();
function io(c, e, t, s, n, r, i, a) {
  let o;
  if (r === Hi ? o = c.intersectTriangle(s, t, e, !0, n) : o = c.intersectTriangle(e, t, s, r !== di, n), o === null) return null;
  const u = c.origin.distanceTo(n);
  return u < i || u > a ? null : {
    distance: u,
    point: n.clone()
  };
}
function Gs(c, e, t, s, n, r, i, a, o, u, f) {
  ct.fromBufferAttribute(e, r), lt.fromBufferAttribute(e, i), ut.fromBufferAttribute(e, a);
  const l = io(c, ct, lt, ut, Ct, o, u, f);
  if (l) {
    if (s) {
      sn.fromBufferAttribute(s, r), rn.fromBufferAttribute(s, i), on.fromBufferAttribute(s, a), l.uv = new ke();
      const h = bt.getInterpolation(Ct, ct, lt, ut, sn, rn, on, l.uv);
      nn || (l.uv = h);
    }
    if (n) {
      sn.fromBufferAttribute(n, r), rn.fromBufferAttribute(n, i), on.fromBufferAttribute(n, a), l.uv1 = new ke();
      const h = bt.getInterpolation(Ct, ct, lt, ut, sn, rn, on, l.uv1);
      nn || (l.uv1 = h), so && (l.uv2 = l.uv1);
    }
    if (t) {
      Hs.fromBufferAttribute(t, r), Vs.fromBufferAttribute(t, i), zs.fromBufferAttribute(t, a), l.normal = new U();
      const h = bt.getInterpolation(Ct, ct, lt, ut, Hs, Vs, zs, l.normal);
      l.normal.dot(c.direction) > 0 && l.normal.multiplyScalar(-1), nn || (l.normal = h);
    }
    const d = {
      a: r,
      b: i,
      c: a,
      normal: new U(),
      materialIndex: 0
    };
    if (bt.getNormal(ct, lt, ut, d.normal), l.face = d, l.faceIndex = r, nn) {
      const h = new U();
      bt.getBarycoord(Ct, ct, lt, ut, h), l.barycoord = h;
    }
  }
  return l;
}
function js(c) {
  return c && c.isMaterial ? c.side : c;
}
function bn(c, e, t, s, n, r, i) {
  const a = s * 3;
  let o = a + 0, u = a + 1, f = a + 2;
  const { index: l, groups: d } = c;
  c.index && (o = l.getX(o), u = l.getX(u), f = l.getX(f));
  const { position: h, normal: y, uv: g, uv1: m } = c.attributes;
  if (Array.isArray(e)) {
    const v = s * 3;
    for (let p = 0, _ = d.length; p < _; p++) {
      const { start: x, count: w, materialIndex: T } = d[p];
      if (v >= x && v < x + w) {
        const A = js(e[T]), M = Gs(t, h, y, g, m, o, u, f, A, r, i);
        if (M)
          if (M.faceIndex = s, M.face.materialIndex = T, n)
            n.push(M);
          else
            return M;
      }
    }
  } else {
    const v = js(e), p = Gs(t, h, y, g, m, o, u, f, v, r, i);
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
function ro(c, e, t, s, n, r, i, a) {
  const { geometry: o, _indirectBuffer: u } = c;
  for (let f = s, l = s + n; f < l; f++)
    bn(o, e, t, f, r, i, a);
}
function oo(c, e, t, s, n, r, i) {
  const { geometry: a, _indirectBuffer: o } = c;
  let u = 1 / 0, f = null;
  for (let l = s, d = s + n; l < d; l++) {
    let h;
    h = bn(a, e, t, l, null, r, i), h && h.distance < u && (f = h, u = h.distance);
  }
  return f;
}
function ao(c, e, t, s, n, r, i) {
  const { geometry: a } = t, { index: o } = a, u = a.attributes.position;
  for (let f = c, l = e + c; f < l; f++) {
    let d;
    if (d = f, oe(i, d * 3, o, u), i.needsUpdate = !0, s(i, d, n, r))
      return !0;
  }
  return !1;
}
function co(c, e = null) {
  e && Array.isArray(e) && (e = new Set(e));
  const t = c.geometry, s = t.index ? t.index.array : null, n = t.attributes.position;
  let r, i, a, o, u = 0;
  const f = c._roots;
  for (let d = 0, h = f.length; d < h; d++)
    r = f[d], i = new Uint32Array(r), a = new Uint16Array(r), o = new Float32Array(r), l(0, u), u += r.byteLength;
  function l(d, h, y = !1) {
    const g = d * 2;
    if (re(g, a)) {
      const m = pe(d, i), v = ge(g, a);
      let p = 1 / 0, _ = 1 / 0, x = 1 / 0, w = -1 / 0, T = -1 / 0, A = -1 / 0;
      for (let M = 3 * m, S = 3 * (m + v); M < S; M++) {
        let b = s[M];
        const E = n.getX(b), R = n.getY(b), I = n.getZ(b);
        E < p && (p = E), E > w && (w = E), R < _ && (_ = R), R > T && (T = R), I < x && (x = I), I > A && (A = I);
      }
      return o[d + 0] !== p || o[d + 1] !== _ || o[d + 2] !== x || o[d + 3] !== w || o[d + 4] !== T || o[d + 5] !== A ? (o[d + 0] = p, o[d + 1] = _, o[d + 2] = x, o[d + 3] = w, o[d + 4] = T, o[d + 5] = A, !0) : !1;
    } else {
      const m = fe(d), v = de(d, i);
      let p = y, _ = !1, x = !1;
      if (e) {
        if (!p) {
          const b = m / ce + h / ue, E = v / ce + h / ue;
          _ = e.has(b), x = e.has(E), p = !_ && !x;
        }
      } else
        _ = !0, x = !0;
      const w = p || _, T = p || x;
      let A = !1;
      w && (A = l(m, h, p));
      let M = !1;
      T && (M = l(v, h, p));
      const S = A || M;
      if (S)
        for (let b = 0; b < 3; b++) {
          const E = m + b, R = v + b, I = o[E], P = o[E + 3], C = o[R], N = o[R + 3];
          o[d + b] = I < C ? I : C, o[d + b + 3] = P > N ? P : N;
        }
      return S;
    }
  }
}
function st(c, e, t, s, n) {
  let r, i, a, o, u, f;
  const l = 1 / t.direction.x, d = 1 / t.direction.y, h = 1 / t.direction.z, y = t.origin.x, g = t.origin.y, m = t.origin.z;
  let v = e[c], p = e[c + 3], _ = e[c + 1], x = e[c + 3 + 1], w = e[c + 2], T = e[c + 3 + 2];
  return l >= 0 ? (r = (v - y) * l, i = (p - y) * l) : (r = (p - y) * l, i = (v - y) * l), d >= 0 ? (a = (_ - g) * d, o = (x - g) * d) : (a = (x - g) * d, o = (_ - g) * d), r > o || a > i || ((a > r || isNaN(r)) && (r = a), (o < i || isNaN(i)) && (i = o), h >= 0 ? (u = (w - m) * h, f = (T - m) * h) : (u = (T - m) * h, f = (w - m) * h), r > f || u > i) ? !1 : ((u > r || r !== r) && (r = u), (f < i || i !== i) && (i = f), r <= n && i >= s);
}
function lo(c, e, t, s, n, r, i, a) {
  const { geometry: o, _indirectBuffer: u } = c;
  for (let f = s, l = s + n; f < l; f++) {
    let d = u ? u[f] : f;
    bn(o, e, t, d, r, i, a);
  }
}
function uo(c, e, t, s, n, r, i) {
  const { geometry: a, _indirectBuffer: o } = c;
  let u = 1 / 0, f = null;
  for (let l = s, d = s + n; l < d; l++) {
    let h;
    h = bn(a, e, t, o ? o[l] : l, null, r, i), h && h.distance < u && (f = h, u = h.distance);
  }
  return f;
}
function fo(c, e, t, s, n, r, i) {
  const { geometry: a } = t, { index: o } = a, u = a.attributes.position;
  for (let f = c, l = e + c; f < l; f++) {
    let d;
    if (d = t.resolveTriangleIndex(f), oe(i, d * 3, o, u), i.needsUpdate = !0, s(i, d, n, r))
      return !0;
  }
  return !1;
}
function ho(c, e, t, s, n, r, i) {
  J.setBuffer(c._roots[e]), Qn(0, c, t, s, n, r, i), J.clearBuffer();
}
function Qn(c, e, t, s, n, r, i) {
  const { float32Array: a, uint16Array: o, uint32Array: u } = J, f = c * 2;
  if (re(f, o)) {
    const d = pe(c, u), h = ge(f, o);
    ro(e, t, s, d, h, n, r, i);
  } else {
    const d = fe(c);
    st(d, a, s, r, i) && Qn(d, e, t, s, n, r, i);
    const h = de(c, u);
    st(h, a, s, r, i) && Qn(h, e, t, s, n, r, i);
  }
}
const mo = ["x", "y", "z"];
function po(c, e, t, s, n, r) {
  J.setBuffer(c._roots[e]);
  const i = es(0, c, t, s, n, r);
  return J.clearBuffer(), i;
}
function es(c, e, t, s, n, r) {
  const { float32Array: i, uint16Array: a, uint32Array: o } = J;
  let u = c * 2;
  if (re(u, a)) {
    const l = pe(c, o), d = ge(u, a);
    return oo(e, t, s, l, d, n, r);
  } else {
    const l = Tn(c, o), d = mo[l], y = s.direction[d] >= 0;
    let g, m;
    y ? (g = fe(c), m = de(c, o)) : (g = de(c, o), m = fe(c));
    const p = st(g, i, s, n, r) ? es(g, e, t, s, n, r) : null;
    if (p) {
      const w = p.point[d];
      if (y ? w <= i[m + l] : (
        // min bounding data
        w >= i[m + l + 3]
      ))
        return p;
    }
    const x = st(m, i, s, n, r) ? es(m, e, t, s, n, r) : null;
    return p && x ? p.distance <= x.distance ? p : x : p || x || null;
  }
}
const an = /* @__PURE__ */ new Ne(), wt = /* @__PURE__ */ new Ce(), Tt = /* @__PURE__ */ new Ce(), Nt = /* @__PURE__ */ new Ee(), Ks = /* @__PURE__ */ new ye(), cn = /* @__PURE__ */ new ye();
function go(c, e, t, s) {
  J.setBuffer(c._roots[e]);
  const n = ts(0, c, t, s);
  return J.clearBuffer(), n;
}
function ts(c, e, t, s, n = null) {
  const { float32Array: r, uint16Array: i, uint32Array: a } = J;
  let o = c * 2;
  if (n === null && (t.boundingBox || t.computeBoundingBox(), Ks.set(t.boundingBox.min, t.boundingBox.max, s), n = Ks), re(o, i)) {
    const f = e.geometry, l = f.index, d = f.attributes.position, h = t.index, y = t.attributes.position, g = pe(c, a), m = ge(o, i);
    if (Nt.copy(s).invert(), t.boundsTree)
      return ne(c, r, cn), cn.matrix.copy(Nt), cn.needsUpdate = !0, t.boundsTree.shapecast({
        intersectsBounds: (p) => cn.intersectsBox(p),
        intersectsTriangle: (p) => {
          p.a.applyMatrix4(s), p.b.applyMatrix4(s), p.c.applyMatrix4(s), p.needsUpdate = !0;
          for (let _ = g * 3, x = (m + g) * 3; _ < x; _ += 3)
            if (oe(Tt, _, l, d), Tt.needsUpdate = !0, p.intersectsTriangle(Tt))
              return !0;
          return !1;
        }
      });
    {
      const v = An(t);
      for (let p = g * 3, _ = (m + g) * 3; p < _; p += 3) {
        oe(wt, p, l, d), wt.a.applyMatrix4(Nt), wt.b.applyMatrix4(Nt), wt.c.applyMatrix4(Nt), wt.needsUpdate = !0;
        for (let x = 0, w = v * 3; x < w; x += 3)
          if (oe(Tt, x, h, y), Tt.needsUpdate = !0, wt.intersectsTriangle(Tt))
            return !0;
      }
    }
  } else {
    const f = fe(c), l = de(c, a);
    return ne(f, r, an), !!(n.intersectsBox(an) && ts(f, e, t, s, n) || (ne(l, r, an), n.intersectsBox(an) && ts(l, e, t, s, n)));
  }
}
const ln = /* @__PURE__ */ new Ee(), On = /* @__PURE__ */ new ye(), Lt = /* @__PURE__ */ new ye(), xo = /* @__PURE__ */ new U(), yo = /* @__PURE__ */ new U(), vo = /* @__PURE__ */ new U(), _o = /* @__PURE__ */ new U();
function wo(c, e, t, s = {}, n = {}, r = 0, i = 1 / 0) {
  e.boundingBox || e.computeBoundingBox(), On.set(e.boundingBox.min, e.boundingBox.max, t), On.needsUpdate = !0;
  const a = c.geometry, o = a.attributes.position, u = a.index, f = e.attributes.position, l = e.index, d = Se.getPrimitive(), h = Se.getPrimitive();
  let y = xo, g = yo, m = null, v = null;
  n && (m = vo, v = _o);
  let p = 1 / 0, _ = null, x = null;
  return ln.copy(t).invert(), Lt.matrix.copy(ln), c.shapecast(
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
                  const P = d.distanceToTriangle(h, y, m);
                  if (P < p && (g.copy(y), v && v.copy(m), p = P, _ = R, x = b), P < r)
                    return !0;
                }
              }
            }
          });
        {
          const A = An(e);
          for (let M = 0, S = A; M < S; M++) {
            oe(h, 3 * M, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
            for (let b = w, E = w + T; b < E; b++) {
              oe(d, 3 * b, u, o), d.needsUpdate = !0;
              const R = d.distanceToTriangle(h, y, m);
              if (R < p && (g.copy(y), v && v.copy(m), p = R, _ = b, x = M), R < r)
                return !0;
            }
          }
        }
      }
    }
  ), Se.releasePrimitive(d), Se.releasePrimitive(h), p === 1 / 0 ? null : (s.point ? s.point.copy(g) : s.point = g.clone(), s.distance = p, s.faceIndex = _, n && (n.point ? n.point.copy(v) : n.point = v.clone(), n.point.applyMatrix4(ln), g.applyMatrix4(ln), n.distance = g.sub(n.point).length(), n.faceIndex = x), s);
}
function To(c, e = null) {
  e && Array.isArray(e) && (e = new Set(e));
  const t = c.geometry, s = t.index ? t.index.array : null, n = t.attributes.position;
  let r, i, a, o, u = 0;
  const f = c._roots;
  for (let d = 0, h = f.length; d < h; d++)
    r = f[d], i = new Uint32Array(r), a = new Uint16Array(r), o = new Float32Array(r), l(0, u), u += r.byteLength;
  function l(d, h, y = !1) {
    const g = d * 2;
    if (re(g, a)) {
      const m = pe(d, i), v = ge(g, a);
      let p = 1 / 0, _ = 1 / 0, x = 1 / 0, w = -1 / 0, T = -1 / 0, A = -1 / 0;
      for (let M = m, S = m + v; M < S; M++) {
        const b = 3 * c.resolveTriangleIndex(M);
        for (let E = 0; E < 3; E++) {
          let R = b + E;
          R = s ? s[R] : R;
          const I = n.getX(R), P = n.getY(R), C = n.getZ(R);
          I < p && (p = I), I > w && (w = I), P < _ && (_ = P), P > T && (T = P), C < x && (x = C), C > A && (A = C);
        }
      }
      return o[d + 0] !== p || o[d + 1] !== _ || o[d + 2] !== x || o[d + 3] !== w || o[d + 4] !== T || o[d + 5] !== A ? (o[d + 0] = p, o[d + 1] = _, o[d + 2] = x, o[d + 3] = w, o[d + 4] = T, o[d + 5] = A, !0) : !1;
    } else {
      const m = fe(d), v = de(d, i);
      let p = y, _ = !1, x = !1;
      if (e) {
        if (!p) {
          const b = m / ce + h / ue, E = v / ce + h / ue;
          _ = e.has(b), x = e.has(E), p = !_ && !x;
        }
      } else
        _ = !0, x = !0;
      const w = p || _, T = p || x;
      let A = !1;
      w && (A = l(m, h, p));
      let M = !1;
      T && (M = l(v, h, p));
      const S = A || M;
      if (S)
        for (let b = 0; b < 3; b++) {
          const E = m + b, R = v + b, I = o[E], P = o[E + 3], C = o[R], N = o[R + 3];
          o[d + b] = I < C ? I : C, o[d + b + 3] = P > N ? P : N;
        }
      return S;
    }
  }
}
function Mo(c, e, t, s, n, r, i) {
  J.setBuffer(c._roots[e]), ns(0, c, t, s, n, r, i), J.clearBuffer();
}
function ns(c, e, t, s, n, r, i) {
  const { float32Array: a, uint16Array: o, uint32Array: u } = J, f = c * 2;
  if (re(f, o)) {
    const d = pe(c, u), h = ge(f, o);
    lo(e, t, s, d, h, n, r, i);
  } else {
    const d = fe(c);
    st(d, a, s, r, i) && ns(d, e, t, s, n, r, i);
    const h = de(c, u);
    st(h, a, s, r, i) && ns(h, e, t, s, n, r, i);
  }
}
const Ao = ["x", "y", "z"];
function bo(c, e, t, s, n, r) {
  J.setBuffer(c._roots[e]);
  const i = ss(0, c, t, s, n, r);
  return J.clearBuffer(), i;
}
function ss(c, e, t, s, n, r) {
  const { float32Array: i, uint16Array: a, uint32Array: o } = J;
  let u = c * 2;
  if (re(u, a)) {
    const l = pe(c, o), d = ge(u, a);
    return uo(e, t, s, l, d, n, r);
  } else {
    const l = Tn(c, o), d = Ao[l], y = s.direction[d] >= 0;
    let g, m;
    y ? (g = fe(c), m = de(c, o)) : (g = de(c, o), m = fe(c));
    const p = st(g, i, s, n, r) ? ss(g, e, t, s, n, r) : null;
    if (p) {
      const w = p.point[d];
      if (y ? w <= i[m + l] : (
        // min bounding data
        w >= i[m + l + 3]
      ))
        return p;
    }
    const x = st(m, i, s, n, r) ? ss(m, e, t, s, n, r) : null;
    return p && x ? p.distance <= x.distance ? p : x : p || x || null;
  }
}
const un = /* @__PURE__ */ new Ne(), Mt = /* @__PURE__ */ new Ce(), At = /* @__PURE__ */ new Ce(), Ft = /* @__PURE__ */ new Ee(), Ys = /* @__PURE__ */ new ye(), fn = /* @__PURE__ */ new ye();
function Ro(c, e, t, s) {
  J.setBuffer(c._roots[e]);
  const n = is(0, c, t, s);
  return J.clearBuffer(), n;
}
function is(c, e, t, s, n = null) {
  const { float32Array: r, uint16Array: i, uint32Array: a } = J;
  let o = c * 2;
  if (n === null && (t.boundingBox || t.computeBoundingBox(), Ys.set(t.boundingBox.min, t.boundingBox.max, s), n = Ys), re(o, i)) {
    const f = e.geometry, l = f.index, d = f.attributes.position, h = t.index, y = t.attributes.position, g = pe(c, a), m = ge(o, i);
    if (Ft.copy(s).invert(), t.boundsTree)
      return ne(c, r, fn), fn.matrix.copy(Ft), fn.needsUpdate = !0, t.boundsTree.shapecast({
        intersectsBounds: (p) => fn.intersectsBox(p),
        intersectsTriangle: (p) => {
          p.a.applyMatrix4(s), p.b.applyMatrix4(s), p.c.applyMatrix4(s), p.needsUpdate = !0;
          for (let _ = g, x = m + g; _ < x; _++)
            if (oe(At, 3 * e.resolveTriangleIndex(_), l, d), At.needsUpdate = !0, p.intersectsTriangle(At))
              return !0;
          return !1;
        }
      });
    {
      const v = An(t);
      for (let p = g, _ = m + g; p < _; p++) {
        const x = e.resolveTriangleIndex(p);
        oe(Mt, 3 * x, l, d), Mt.a.applyMatrix4(Ft), Mt.b.applyMatrix4(Ft), Mt.c.applyMatrix4(Ft), Mt.needsUpdate = !0;
        for (let w = 0, T = v * 3; w < T; w += 3)
          if (oe(At, w, h, y), At.needsUpdate = !0, Mt.intersectsTriangle(At))
            return !0;
      }
    }
  } else {
    const f = fe(c), l = de(c, a);
    return ne(f, r, un), !!(n.intersectsBox(un) && is(f, e, t, s, n) || (ne(l, r, un), n.intersectsBox(un) && is(l, e, t, s, n)));
  }
}
const dn = /* @__PURE__ */ new Ee(), kn = /* @__PURE__ */ new ye(), Ut = /* @__PURE__ */ new ye(), So = /* @__PURE__ */ new U(), Eo = /* @__PURE__ */ new U(), Do = /* @__PURE__ */ new U(), Io = /* @__PURE__ */ new U();
function Po(c, e, t, s = {}, n = {}, r = 0, i = 1 / 0) {
  e.boundingBox || e.computeBoundingBox(), kn.set(e.boundingBox.min, e.boundingBox.max, t), kn.needsUpdate = !0;
  const a = c.geometry, o = a.attributes.position, u = a.index, f = e.attributes.position, l = e.index, d = Se.getPrimitive(), h = Se.getPrimitive();
  let y = So, g = Eo, m = null, v = null;
  n && (m = Do, v = Io);
  let p = 1 / 0, _ = null, x = null;
  return dn.copy(t).invert(), Ut.matrix.copy(dn), c.shapecast(
    {
      boundsTraverseOrder: (w) => kn.distanceToBox(w),
      intersectsBounds: (w, T, A) => A < p && A < i ? (T && (Ut.min.copy(w.min), Ut.max.copy(w.max), Ut.needsUpdate = !0), !0) : !1,
      intersectsRange: (w, T) => {
        if (e.boundsTree) {
          const A = e.boundsTree;
          return A.shapecast({
            boundsTraverseOrder: (M) => Ut.distanceToBox(M),
            intersectsBounds: (M, S, b) => b < p && b < i,
            intersectsRange: (M, S) => {
              for (let b = M, E = M + S; b < E; b++) {
                const R = A.resolveTriangleIndex(b);
                oe(h, 3 * R, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
                for (let I = w, P = w + T; I < P; I++) {
                  const C = c.resolveTriangleIndex(I);
                  oe(d, 3 * C, u, o), d.needsUpdate = !0;
                  const N = d.distanceToTriangle(h, y, m);
                  if (N < p && (g.copy(y), v && v.copy(m), p = N, _ = I, x = b), N < r)
                    return !0;
                }
              }
            }
          });
        } else {
          const A = An(e);
          for (let M = 0, S = A; M < S; M++) {
            oe(h, 3 * M, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
            for (let b = w, E = w + T; b < E; b++) {
              const R = c.resolveTriangleIndex(b);
              oe(d, 3 * R, u, o), d.needsUpdate = !0;
              const I = d.distanceToTriangle(h, y, m);
              if (I < p && (g.copy(y), v && v.copy(m), p = I, _ = b, x = M), I < r)
                return !0;
            }
          }
        }
      }
    }
  ), Se.releasePrimitive(d), Se.releasePrimitive(h), p === 1 / 0 ? null : (s.point ? s.point.copy(g) : s.point = g.clone(), s.distance = p, s.faceIndex = _, n && (n.point ? n.point.copy(v) : n.point = v.clone(), n.point.applyMatrix4(dn), g.applyMatrix4(dn), n.distance = g.sub(n.point).length(), n.faceIndex = x), s);
}
function Ws(c, e, t) {
  return c === null ? null : (c.point.applyMatrix4(e.matrixWorld), c.distance = c.point.distanceTo(t.ray.origin), c.object = e, c);
}
const hn = /* @__PURE__ */ new ye(), mn = /* @__PURE__ */ new Vi(), Xs = /* @__PURE__ */ new U(), $s = /* @__PURE__ */ new Ee(), qs = /* @__PURE__ */ new U(), Hn = ["getX", "getY", "getZ"];
class wn extends Jr {
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
    const a = new wn(t, { ...s, [ds]: !0 });
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
        for (let y = 0, g = l.byteLength / ue; y < g; y++) {
          const m = ce * y, v = 2 * m;
          re(v, h) || (d[m + 6] = d[m + 6] / ce - y);
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
      const y = i[Hn[h]](f), g = i[Hn[h]](l), m = i[Hn[h]](d);
      let v = y;
      g < v && (v = g), m < v && (v = m);
      let p = y;
      g > p && (p = g), m > p && (p = m), t[s + h] = v, t[s + h + 3] = p;
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
    for (let y = e, g = e + t; y < g; y++) {
      const v = (r ? r[y] : y) * 3, p = (y - h) * 6;
      let _ = v + 0, x = v + 1, w = v + 2;
      a && (_ = a[_], x = a[x], w = a[w]), o || (_ = _ * l + f, x = x * l + f, w = w * l + f);
      for (let T = 0; T < 3; T++) {
        let A, M, S;
        o ? (A = i[d[T]](_), M = i[d[T]](x), S = i[d[T]](w)) : (A = u[_ + T], M = u[x + T], S = u[w + T]);
        let b = A;
        M < b && (b = M), S < b && (b = S);
        let E = A;
        M > E && (E = M), S > E && (E = S);
        const R = (E - b) / 2, I = T * 2;
        s[p + I + 0] = b + R, s[p + I + 1] = R + (Math.abs(b) + R) * xn;
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
    $s.copy(e.matrixWorld).invert(), mn.copy(t.ray).applyMatrix4($s), qs.setFromMatrixScale(e.matrixWorld), Xs.copy(mn.direction).multiply(qs);
    const r = Xs.length(), i = t.near / r, a = t.far / r;
    if (t.firstHitOnly === !0) {
      let o = this.raycastFirst(mn, n, i, a);
      o = Ws(o, e, t), o && s.push(o);
    } else {
      const o = this.raycast(mn, n, i, a);
      for (let u = 0, f = o.length; u < f; u++) {
        const l = Ws(o[u], e, t);
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
    return (this.indirect ? To : co)(this, e);
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
    const r = this._roots, i = [], a = this.indirect ? Mo : ho;
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
  raycastFirst(e, t = jn, s = 0, n = 1 / 0) {
    const r = this._roots;
    let i = null;
    const a = this.indirect ? bo : po;
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
    const n = this._roots, r = this.indirect ? Ro : go;
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
        iterate: this.indirect ? fo : ao
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
    const i = Se.getPrimitive(), a = this.geometry.index, o = this.geometry.attributes.position, u = this.indirect ? (y) => {
      const g = this.resolveTriangleIndex(y);
      oe(i, g * 3, a, o);
    } : (y) => {
      oe(i, y * 3, a, o);
    }, f = Se.getPrimitive(), l = e.geometry.index, d = e.geometry.attributes.position, h = e.indirect ? (y) => {
      const g = e.resolveTriangleIndex(y);
      oe(f, g * 3, l, d);
    } : (y) => {
      oe(f, y * 3, l, d);
    };
    if (r) {
      if (!(e instanceof wn))
        throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');
      const y = (g, m, v, p, _, x, w, T) => {
        for (let A = v, M = v + p; A < M; A++) {
          h(A), f.a.applyMatrix4(t), f.b.applyMatrix4(t), f.c.applyMatrix4(t), f.needsUpdate = !0;
          for (let S = g, b = g + m; S < b; S++)
            if (u(S), i.needsUpdate = !0, r(i, f, S, A, _, x, w, T))
              return !0;
        }
        return !1;
      };
      if (n) {
        const g = n;
        n = function(m, v, p, _, x, w, T, A) {
          return g(m, v, p, _, x, w, T, A) ? !0 : y(m, v, p, _, x, w, T, A);
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
    return hn.set(e.min, e.max, t), hn.needsUpdate = !0, this.shapecast(
      {
        intersectsBounds: (s) => hn.intersectsBox(s),
        intersectsTriangle: (s) => hn.intersectsTriangle(s)
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
    return (this.indirect ? Po : wo)(
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
    return no(
      this,
      e,
      t,
      s,
      n
    );
  }
}
function Bo(c) {
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
      return Yi;
    case 2:
      return Ki;
    case 3:
      return vn;
    case 4:
      return vn;
  }
}
function Js(c) {
  switch (c) {
    case 1:
      return ji;
    case 2:
      return mi;
    case 3:
      return Yn;
    case 4:
      return Yn;
  }
}
class Si extends Kn {
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
          f = En;
          break;
      }
    let d, h, y, g, m = Bo(r);
    switch (f) {
      case nt:
        y = 1, h = Co(r), a && u === 1 ? (g = o, m += "8", o === Uint8Array ? d = Vt : (d = Ts, m += "_SNORM")) : (g = Float32Array, m += "32F", d = nt);
        break;
      case En:
        m += u * 8 + "I", y = a ? Math.pow(2, o.BYTES_PER_ELEMENT * 8 - 1) : 1, h = Js(r), u === 1 ? (g = Int8Array, d = Ts) : u === 2 ? (g = Int16Array, d = Gi) : (g = Int32Array, d = En);
        break;
      case Ht:
        m += u * 8 + "UI", y = a ? Math.pow(2, o.BYTES_PER_ELEMENT * 8 - 1) : 1, h = Js(r), u === 1 ? (g = Uint8Array, d = Vt) : u === 2 ? (g = Uint16Array, d = zi) : (g = Uint32Array, d = Ht);
        break;
    }
    l === 3 && (h === vn || h === Yn) && (l = 4);
    const v = Math.ceil(Math.sqrt(i)) || 1, p = l * v * v, _ = new g(p), x = e.normalized;
    e.normalized = !1;
    for (let w = 0; w < i; w++) {
      const T = l * w;
      _[T] = e.getX(w) / y, r >= 2 && (_[T + 1] = e.getY(w) / y), r >= 3 && (_[T + 2] = e.getZ(w) / y, l === 4 && (_[T + 3] = 1)), r >= 4 && (_[T + 3] = e.getW(w) / y);
    }
    e.normalized = x, this.internalFormat = m, this.format = h, this.type = d, this.image.width = v, this.image.height = v, this.image.data = _, this.needsUpdate = !0, this.dispose(), e.itemSize = s, e.count = n;
  }
}
class No extends Si {
  constructor() {
    super(), this._forcedType = Ht;
  }
}
class Lo extends Si {
  constructor() {
    super(), this._forcedType = nt;
  }
}
class Fo {
  constructor() {
    this.index = new No(), this.position = new Lo(), this.bvhBounds = new Kn(), this.bvhContents = new Kn(), this._cachedIndexAttr = null, this.index.overrideItemSize = 3;
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
          const n = Ri(Mn(t));
          this._cachedIndexAttr = new St(n, 1, !1);
        }
      Uo(t, s, this._cachedIndexAttr), this.index.updateFrom(this._cachedIndexAttr);
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
function Uo(c, e, t) {
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
    const y = h * ue / 4, g = y * 2, m = y;
    for (let v = 0; v < 3; v++)
      f[8 * h + 0 + v] = a[m + 0 + v], f[8 * h + 4 + v] = a[m + 3 + v];
    if (re(g, r)) {
      const v = ge(g, r), p = pe(y, i), _ = Cr | v;
      d[h * 2 + 0] = _, d[h * 2 + 1] = p;
    } else {
      const v = i[y + 6], p = Tn(y, i);
      d[h * 2 + 0] = p, d[h * 2 + 1] = v;
    }
  }
  e.image.data = f, e.image.width = u, e.image.height = u, e.format = vn, e.type = nt, e.internalFormat = "RGBA32F", e.minFilter = et, e.magFilter = et, e.generateMipmaps = !1, e.needsUpdate = !0, e.dispose(), t.image.data = d, t.image.width = l, t.image.height = l, t.format = mi, t.type = Ht, t.internalFormat = "RG32UI", t.minFilter = et, t.magFilter = et, t.generateMipmaps = !1, t.needsUpdate = !0, t.dispose();
}
const ko = (
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
), Ho = (
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
), Vo = (
  /* glsl */
  `
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`
), zo = Vo, Go = `
	${ko}
	${Ho}
`, gt = () => {
  const c = Yt.useContext(us);
  if (!c)
    throw new Error("useMainContext must be used within MainContextProvider");
  return c;
};
function jo(c) {
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
function Ko(c, e = -Math.PI / 4, t = -Math.PI / 10, s = Math.PI / 3) {
  c.rotation.set(0, 0, 0), c.position.set(0, 0, 0), c.updateMatrixWorld(!0);
  const n = new L.Box3().setFromObject(c), r = new L.Vector3();
  n.getCenter(r);
  const i = new L.Vector3();
  n.getSize(i), i.length() === 0 && (i.set(1, 1, 1), n.min.set(-0.5, -0.5, -0.5), n.max.set(0.5, 0.5, 0.5), r.set(0, 0, 0)), c.rotation.set(e, t, s), c.updateMatrixWorld(!0);
  const a = jo(c), o = new L.Vector3();
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
const Yo = (
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

  ${zo}
  ${Go}

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
class Xo extends L.ShaderMaterial {
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
    highlightColor: y = 16777215,
    highlightTolerance: g = 1,
    attenuationColor: m = 16777215,
    attenuationDistance: v = 1
  }) {
    const p = new Fo();
    p.updateFrom(t), super({
      glslVersion: L.GLSL3,
      vertexShader: Yo,
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
        uHighlightColor: { value: new L.Color(y) },
        uHighlightTolerance: { value: g },
        uAttenuationColor: { value: new L.Color(m) },
        uAttenuationDistance: { value: v },
        uBounces: { value: a },
        uModelMatrix: { value: new L.Matrix4() },
        uModelMatrixInverse: { value: new L.Matrix4() }
      },
      transparent: !0,
      depthWrite: !0
    }), this.onBeforeRender = (_, x, w, T, A) => {
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
}, Zs = (c, e) => {
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
function $o(c, e, t, s, n, r, i, a = 0) {
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
        const v = i[m];
        if (v && v.img) {
          const p = v.width, _ = v.height, x = _ > 0 ? p / _ * d : 0;
          l.push({
            type: "symbol",
            text: m,
            width: x,
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
  let g = t - h / 2;
  c.textAlign = "left";
  for (const m of l) {
    if (m.type === "symbol" && m.img) {
      const v = s - d / 2;
      c.drawImage(m.img, g, v, m.width, d);
    } else
      c.fillText(m.text, g, s), a > 0 && c.strokeText(m.text, g, s);
    g += m.width;
  }
}
let be = null;
function Qs(c, e, t) {
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
        const y = i[f], g = s[u + y], m = g === r ? r : g * g;
        let v = 0;
        if (h === r ? v = r : m === r ? v = 0 : v = 1 + Math.floor((l * l - y * y + (h - m)) / (2 * (l - y))), v < a[f])
          f--;
        else {
          v < e && (f++, i[f] = l, a[f] = v);
          break;
        }
      }
      f < 0 && (f = 0, i[0] = l, a[0] = 0);
    }
    for (let l = e - 1; l >= 0; l--) {
      for (; f > 0 && l < a[f]; )
        f--;
      const d = i[f], h = l - d, y = s[u + d], g = y === r ? r : y * y, m = h * h + g;
      n[u + l] = Math.sqrt(m);
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
    mode: a = "emboss",
    offsetY: o = 0,
    offsetX: u = 0,
    symbolsMap: f = null,
    // SDF options
    bevelWidth: l = 4,
    engravingDepth: d = 0.35,
    edgeSoftness: h = 0.3,
    strokeWidth: y = 0
  } = c, m = document.createElement("canvas").getContext("2d");
  if (!m)
    throw new Error("2D Canvas Context is not supported in this environment.");
  const v = 20;
  m.font = `bold ${v}px ${r}`;
  let p = 0;
  const _ = ["♥", "♥︎♥︎", "○○", "⚭", "∞"];
  if (!_.some((k) => e.includes(k)) || !f)
    p = m.measureText(e).width;
  else {
    const k = e.split(/(♥︎♥︎|○○|[♥⚭∞])/u), Y = v;
    for (const ae of k)
      if (ae)
        if (_.includes(ae)) {
          const me = f[ae];
          if (me && me.img) {
            const De = me.width, Ie = me.height, ve = Ie > 0 ? De / Ie * Y : 0;
            p += ve;
          } else
            p += m.measureText(ae).width;
        } else
          p += m.measureText(ae).width;
  }
  const w = 0.85, T = p / v + i * 8 / n, A = 1 + i * 8 / n, M = T > 0 ? (t * w - 20 - Math.abs(u) * 2) / T : 1 / 0, S = A > 0 ? (s * w - 20 - Math.abs(o) * 2) / A : 1 / 0, R = m.measureText("AaBbCcDdEeFfGgHhIiJj").width / v + i * 8 / n, I = R > 0 ? (t * w - 20 - Math.abs(u) * 2) / R : 1 / 0, P = Math.max(
    1,
    Math.floor(Math.min(M, S, I))
  );
  let C = "";
  f && (C = Object.keys(f).sort().map((k) => `${k}:${f[k]?.img.src || ""}`).join(","));
  const N = 2, V = t * N, G = s * N;
  let $, K;
  if (be && be.text === e && be.fontFamily === r && be.width === t && be.height === s && be.offsetY === o && be.offsetX === u && be.symbolsKey === C && be.strokeWidth === y)
    $ = be.sdf, K = be.coverage;
  else {
    const k = document.createElement("canvas");
    k.width = V, k.height = G;
    const Y = k.getContext("2d");
    if (!Y)
      throw new Error("Could not get 2D context for temp canvas");
    Y.fillStyle = "#FFFFFF", Y.fillRect(0, 0, V, G), Y.fillStyle = "#000000", Y.strokeStyle = "#000000", Y.lineWidth = y * N;
    const ae = P * N;
    Y.font = `bold ${ae}px ${r}`, Y.textBaseline = "middle";
    const me = V / 2 + u * N, De = G / 2 + o * N;
    $o(
      Y,
      e,
      me,
      De,
      ae,
      r,
      f,
      y * N
    );
    const Ie = Y.getImageData(0, 0, V, G), ve = new Uint8Array(V * G);
    K = new Uint8Array(V * G);
    for (let q = 0; q < V * G; q++) {
      const we = Ie.data[q * 4];
      ve[q] = we < 128 ? 1 : 0, K[q] = 255 - we;
    }
    const Me = Qs(ve, V, G), Pe = new Uint8Array(V * G);
    for (let q = 0; q < V * G; q++)
      Pe[q] = ve[q] === 0 ? 1 : 0;
    const Le = Qs(Pe, V, G);
    $ = new Float32Array(V * G);
    for (let q = 0; q < V * G; q++)
      $[q] = Me[q] - Le[q];
    be = {
      text: e,
      fontFamily: r,
      width: t,
      height: s,
      offsetY: o,
      offsetX: u,
      symbolsKey: C,
      strokeWidth: y,
      sdf: $,
      coverage: K
    };
  }
  const D = document.createElement("canvas");
  D.width = t, D.height = s;
  const F = D.getContext("2d");
  if (!F)
    throw new Error("2D Canvas Context is not supported in this environment.");
  const O = document.createElement("canvas");
  O.width = V, O.height = G;
  const j = O.getContext("2d");
  if (!j)
    throw new Error("Could not get 2D context for tempOutCanvas");
  const le = j.createImageData(V, G), he = le.data;
  for (let k = 0; k < V * G; k++) {
    let Y = $[k];
    const ae = Math.abs(Y), me = 1.5 * N;
    if (ae < me) {
      const xe = (me - ae) / me, ps = (0.5 - K[k] / 255) * me;
      Y = (1 - xe) * Y + xe * ps;
    }
    let De = 0;
    if (Y >= 0) {
      const xe = 1.5 * N;
      De = Y / xe;
    } else {
      const xe = Math.max(0.1, l * N);
      De = Y / xe;
    }
    const ve = (Math.max(-1, Math.min(1, De)) + 1) / 2, Me = 3 * ve * ve - 2 * ve * ve * ve, Pe = (1 - h) * ve + h * Me, Le = 1 - d + d * Pe, q = Math.round(255 * Le), we = k * 4;
    he[we] = q, he[we + 1] = q, he[we + 2] = q, he[we + 3] = 255;
  }
  return j.putImageData(le, 0, 0), F.imageSmoothingEnabled = !0, F.imageSmoothingQuality = "high", F.drawImage(O, 0, 0, t, s), D;
}
function qo(c, e, t) {
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
function Jo(c, e = 4) {
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
      const d = u(l - 1, f), h = u(l + 1, f), y = u(l, f - 1), g = u(l, f + 1), m = (h - d) / 255 * e, v = (g - y) / 255 * e, p = 1, _ = Math.sqrt(m * m + v * v + p * p), x = m / _, w = v / _, T = p / _, A = (f * t + l) * 4;
      o.data[A] = Math.round((x + 1) * 127.5), o.data[A + 1] = Math.round((w + 1) * 127.5), o.data[A + 2] = Math.round((T + 1) * 127.5), o.data[A + 3] = 255;
    }
  return r.putImageData(o, 0, 0), n;
}
const Zo = $e(({ textOffsetX: c = 0 }) => {
  const { design3DManager: e } = gt(), { ringManager: t } = e, s = t.engravingText || "", n = t.engravingFont;
  return ie(() => {
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
    const { width: a, height: o } = r, f = i.getImageData(0, 0, a, o).data;
    let l = a, d = 0, h = o, y = 0, g = !1;
    for (let m = 0; m < o; m++)
      for (let v = 0; v < a; v++) {
        const p = (m * a + v) * 4, _ = f[p], x = f[p + 1], w = f[p + 2];
        (_ < 240 || x < 240 || w < 240) && (v < l && (l = v), v > d && (d = v), m < h && (h = m), m > y && (y = m), g = !0);
      }
    g ? (console.log(`BBoxEngrave - Text: "${s}", OffsetX: ${c}`), console.log(
      `Bounding Box -> minX: ${l}, maxX: ${d}, minY: ${h}, maxY: ${y}`
    )) : console.log(
      `BBoxEngrave - Text: "${s}", OffsetX: ${c} -> No pixels found`
    );
  }, [s, n, c]), null;
}), Qo = $e(
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
    } = t, { scene: y } = oi(c), g = pn(() => {
      if (!y) return null;
      let x = null;
      return y.traverse((w) => {
        const T = w;
        if (T.isMesh) {
          const A = T.name, M = A.toLowerCase();
          if (A === "Engraving Mesh" || A === "Engraving Metal" || A === "Engraving_Mesh" || A === "Engraving_Metal" || M.includes("engrav")) {
            const b = M.includes("nodiamond");
            h ? b && x || (x = T) : b ? x = T : x || (x = T);
          }
        }
      }), x;
    }, [y, h]), [m, v] = ri({ normalTexture: null, aoTexture: null });
    ie(() => {
      if (!n && !r) {
        v((A) => (A.normalTexture?.dispose(), A.aoTexture?.dispose(), { normalTexture: null, aoTexture: null })), t.setEngravingCanvas(null), t.setNormalMapCanvas(null);
        return;
      }
      let x = !0;
      const w = (A, M) => new Promise((S) => {
        qo(A, M, (b, E, R) => {
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
            w(F, "#000000").then((O) => {
              E[D] = O;
            })
          );
        }
        if (await Promise.all(b), typeof document < "u" && document.fonts && i)
          try {
            await document.fonts.load(`bold 30px ${i}`);
          } catch (D) {
            console.error("Failed to load engraving font:", D);
          }
        if (!x) return;
        const R = rs({
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
          bevelWidth: a,
          engravingDepth: 1,
          // Force full depth (0.0 height/blackness) inside the letters for perfect shadow contrast
          edgeSoftness: u,
          strokeWidth: d
        }), P = Jo(R, f), C = new L.CanvasTexture(P), N = new L.CanvasTexture(I);
        C.anisotropy = 16, N.anisotropy = 16;
        const V = R.width / R.height, G = 2.2, $ = -1 * G, K = 1 * G * V;
        C.wrapS = L.ClampToEdgeWrapping, C.wrapT = L.ClampToEdgeWrapping, C.repeat.set($, K), C.offset.set(0.5 - 0.5 * $, 0.5 - 0.5 * K), C.colorSpace = L.NoColorSpace, N.wrapS = L.ClampToEdgeWrapping, N.wrapT = L.ClampToEdgeWrapping, N.repeat.set($, K), N.offset.set(0.5 - 0.5 * $, 0.5 - 0.5 * K), N.colorSpace = L.NoColorSpace, t.setEngravingCanvas(R), t.setNormalMapCanvas(P), v((D) => (D.normalTexture?.dispose(), D.aoTexture?.dispose(), { normalTexture: C, aoTexture: N }));
      })(), () => {
        x = !1;
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
      g
    ]), ie(() => () => {
      v((x) => (x.normalTexture?.dispose(), x.aoTexture?.dispose(), { normalTexture: null, aoTexture: null })), t.setEngravingCanvas(null), t.setNormalMapCanvas(null);
    }, []);
    const { normalTexture: p, aoTexture: _ } = m;
    return ie(() => {
      if (!g || !g.geometry) return;
      g.geometry.computeBoundingBox();
      const x = g.geometry.boundingBox;
      if (x) {
        const A = new L.Vector3();
        x.getSize(A), console.log("--- DEBUG RING MESH SIZE ---", {
          name: g.name,
          x: A.x,
          y: A.y,
          z: A.z
        });
      }
      const w = g.onBeforeRender, T = g.onAfterRender;
      return g.onBeforeRender = (A, M, S, b, E, R) => {
        w && w.call(
          g,
          A,
          M,
          S,
          b,
          E,
          R
        ), S instanceof L.OrthographicCamera && b.setDrawRange(0, 0);
      }, g.onAfterRender = (A, M, S, b, E, R) => {
        T && T.call(
          g,
          A,
          M,
          S,
          b,
          E,
          R
        ), b.setDrawRange(0, 1 / 0);
      }, () => {
        g.onBeforeRender = w, g.onAfterRender = T, g.geometry && g.geometry.setDrawRange(0, 1 / 0);
      };
    }, [g]), ie(() => {
      if (!(!g || !g.geometry))
        if (p && _) {
          let x = g.userData.originalMaterial;
          if (!x) {
            const T = g.material;
            T && !T.userData?.isEngraved && (x = T, g.userData.originalMaterial = x);
          }
          let w = g.userData.engravedMaterial;
          !w && x && (w = x.clone(), w.userData.isEngraved = !0, w.normalScale = new L.Vector2(-0.05, 0.05), g.userData.engravedMaterial = w), w && (w.normalMap = p, w.aoMap = _, w.aoMapIntensity = l, g.material !== w && (g.material = w));
        } else
          g.userData.originalMaterial && (g.material = g.userData.originalMaterial);
    }, [g, p, _, l]), ie(() => () => {
      g && (g.userData.originalMaterial && (g.material = g.userData.originalMaterial, g.userData.originalMaterial = null), g.userData.engravedMaterial && (g.userData.engravedMaterial.dispose(), g.userData.engravedMaterial = null));
    }, [g]), /* @__PURE__ */ W.jsx(Zo, {});
  }
), ea = $e(
  ({ diamondEnvMap: c }) => {
    const { design3DManager: e } = gt(), { ringManager: t } = e, { size: s } = li(), n = t.modelUrl;
    return /* @__PURE__ */ W.jsx(cs, { fallback: null, children: n && /* @__PURE__ */ W.jsx(
      ta,
      {
        modelUrl: n,
        diamondEnvMap: c,
        size: s
      },
      n
    ) });
  }
), ta = $e(
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
      finishingColorHex: y,
      engravingColorHex: g,
      roughness: m,
      finish: v,
      showDiamond: p,
      currentView: _,
      homeRotation: x,
      engraveRotation: w
    } = f, { scene: T } = oi(c), A = Ue(new L.Color(h)), M = Ue(new L.Color(y)), S = Ue(new L.Color(g)), b = Ue(m);
    ie(() => {
      A.current.set(h), M.current.set(y), S.current.set(g), b.current = m;
    }, [h, y, g, m]);
    const E = pn(() => {
      if (!T) return null;
      const H = { x: 0, y: 0, z: 0 }, te = _ === 2 ? w ?? H : x ?? H;
      return Ko(T, te.x, te.y, te.z);
    }, [T, _, x, w]);
    ie(() => {
      E && i && u.setModelMinY(E.minY || 0);
    }, [E, u, i]), ie(() => {
      f._markLoaded(), T && r && r(T);
    }, [T, f, r]);
    const R = Ue(_);
    ie(() => {
      R.current = _;
    }, [_]), ie(() => {
      const H = o.cameraManager.cameraRef;
      if (T && H) {
        const X = setTimeout(() => {
          if (R.current === 2)
            H.setLookAt(0, 2, -4.4, 0, 0, 0, !1), H.minDistance = 4.3, H.maxDistance = 5.5, H.minAzimuthAngle = -1 / 0, H.maxAzimuthAngle = 1 / 0, H.minPolarAngle = 0.94, H.maxPolarAngle = 1.3399999999999999;
          else {
            const B = u.viewManager.settings, te = B.homeDistance;
            H.setLookAt(0, 0, te, 0, 0, 0, !1), H.minDistance = B.minDistance, H.maxDistance = B.maxDistance, H.minAzimuthAngle = -1 / 0, H.maxAzimuthAngle = 1 / 0, H.minPolarAngle = B.minPolarAngle, H.maxPolarAngle = B.maxPolarAngle;
          }
        }, 50);
        return () => clearTimeout(X);
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
    ]), P = !!I, C = dt(l, [
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
    ]), N = !!C, V = dt(l, [
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
    ]), G = !!V, $ = dt(l, [
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
    ]), K = !!$, D = dt(l, [
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
    ]), F = !!D, O = dt(l, [
      "normalBase",
      "Base_Metal_Normal",
      "Base_metal_Normal",
      "base_metal_normal",
      "Base_Metal_Normal.webp",
      "Base_metal_Normal.webp",
      "base_metal_normal.webp"
    ]) || Zs(l, [
      "Base_Metal_Normal",
      "base_metal_normal"
    ]), j = !!O, le = dt(l, [
      "normalFinishing",
      "Finishing_Metal_Normal",
      "Finishing_metal_Normal",
      "finishing_metal_normal",
      "Finishing_Metal_Normal.webp",
      "Finishing_metal_Normal.webp",
      "finishing_metal_normal.webp"
    ]) || Zs(l, [
      "Finishing_Metal_Normal",
      "finishing_metal_normal"
    ]), he = !!le, k = P && I ? I : "", Y = N && C ? C : "", ae = G && V ? V : "", me = K && $ ? $ : "", De = F && D ? D : "", Ie = j && O ? O : "", ve = he && le ? le : "", Me = at(
      ft,
      k
    );
    Me && (Me.flipY = !1);
    const Pe = at(
      ft,
      Y
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
    const we = at(
      ft,
      De
    );
    we && (we.flipY = !1);
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
    const Wt = c ? ((H) => {
      const X = H.split("/"), B = X.findIndex((te) => te === "BehytRings");
      return B !== -1 && X.length > B + 3 ? {
        collection: X[B + 1],
        modelId: X[B + 2],
        variation: X[B + 3]
      } : null;
    })(c) : null, Ni = Wt ? `/BehytRings/${Wt.collection}/${Wt.modelId}/${Wt.variation}/Roughness_Map.jpg` : "", Rn = l;
    Rn?.roughness && !Rn.roughness.endsWith("roughness.jpg") && Rn.roughness;
    const rt = 1, ee = Ue(
      new L.MeshPhysicalMaterial({
        color: d,
        metalness: 1,
        roughness: 0,
        aoMap: P ? Me : null,
        aoMapIntensity: P ? 1 : 0,
        clearcoat: v === "Polished" ? 1 : 0,
        normalScale: new L.Vector2(rt, rt),
        normalMap: j ? xe : null,
        alphaMap: P ? Me : null
      })
    ), se = Ue(
      new L.MeshPhysicalMaterial({
        color: "#f6f5f5",
        metalness: 1,
        roughness: 0,
        aoMap: N ? Pe : null,
        aoMapIntensity: N ? 0.8 : 0,
        clearcoat: v === "Polished" ? 1 : 0,
        clearcoatRoughness: 0.1,
        normalScale: new L.Vector2(rt, rt),
        normalMap: he ? ze : null
      })
    ), Z = Ue(
      new L.MeshPhysicalMaterial({
        color: d,
        metalness: 1,
        roughness: m,
        aoMap: G ? Le : null,
        aoMapIntensity: G ? 1 : 0,
        clearcoat: v === "Polished" ? 1 : 0,
        clearcoatRoughness: 0.1
      })
    );
    ie(() => {
      let H = null;
      p ? H = P ? Me : null : H = K ? q : P ? Me : null;
      let X = null;
      p ? X = N ? Pe : null : X = F ? we : N ? Pe : null;
      const B = G ? Le : null;
      ee.current.aoMap = H, ee.current.aoMapIntensity = H ? 1 : 0, ee.current.normalMap = j ? xe : null, ee.current.alphaMap = P ? Me : null, ee.current.needsUpdate = !0, se.current.aoMap = X, se.current.aoMapIntensity = X ? 0.8 : 0, se.current.normalMap = he ? ze : null, se.current.needsUpdate = !0, Z.current.aoMap = B, Z.current.aoMapIntensity = B ? 1 : 0, Z.current.needsUpdate = !0, console.log("--- Active 3D Ring Texture Maps Applied ---", {
        showDiamond: p,
        goldMaterialAo: H === q ? "noDiamondBase" : H ? "aoGold" : "None",
        silverMaterialAo: X === we ? "noDiamondFinishing" : X ? "aoSilver" : "None",
        engravingMaterialAo: B ? "aoEngrave" : "None"
      });
    }, [
      Me,
      Pe,
      Le,
      q,
      we,
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
    ]), ki((H, X) => {
      const B = 1 - Math.pow(0.01, X), te = v === "Polished" ? 1 : 0;
      ee.current.color.lerp(A.current, B), ee.current.roughness = L.MathUtils.lerp(
        ee.current.roughness,
        b.current,
        B
      ), ee.current.clearcoat = L.MathUtils.lerp(
        ee.current.clearcoat,
        te,
        B
      ), ee.current.clearcoatRoughness = L.MathUtils.lerp(
        ee.current.clearcoatRoughness,
        0.1,
        B
      ), se.current.color.lerp(
        M.current,
        B
      ), se.current.roughness = L.MathUtils.lerp(
        se.current.roughness,
        b.current,
        B
      ), se.current.clearcoat = L.MathUtils.lerp(
        se.current.clearcoat,
        te,
        B
      ), se.current.clearcoatRoughness = L.MathUtils.lerp(
        se.current.clearcoatRoughness,
        0.1,
        B
      ), Z.current.color.lerp(
        S.current,
        B
      ), Z.current.roughness = L.MathUtils.lerp(
        Z.current.roughness,
        b.current,
        B
      ), Z.current.clearcoat = L.MathUtils.lerp(
        Z.current.clearcoat,
        te,
        B
      ), Z.current.clearcoatRoughness = L.MathUtils.lerp(
        Z.current.clearcoatRoughness,
        0.1,
        B
      );
      const Q = n && n.current[c] !== void 0 ? n.current[c] : 1, qe = Q < 1;
      ee.current.transparent = qe, ee.current.opacity = Q, se.current.transparent = qe, se.current.opacity = Q, Z.current.transparent = qe, Z.current.opacity = Q, T && i && T.traverse((Ge) => {
        Ge instanceof L.Mesh && Ge.material && (Array.isArray(Ge.material) ? Ge.material : [Ge.material]).forEach((Fe) => {
          Fe !== ee.current && Fe !== se.current && Fe !== Z.current && (Fe.transparent = qe, Fe.opacity = Q);
        });
      });
    }), Yt.useLayoutEffect(() => {
      const H = n && n.current[c] !== void 0 ? n.current[c] : 1, X = H < 1;
      ee.current.transparent = X, ee.current.opacity = H, se.current.transparent = X, se.current.opacity = H, Z.current.transparent = X, Z.current.opacity = H, T && T.traverse((B) => {
        B instanceof L.Mesh && B.material && (Array.isArray(B.material) ? B.material : [B.material]).forEach((Q) => {
          Q !== ee.current && Q !== se.current && Q !== Z.current && (Q.transparent = X, Q.opacity = H);
        });
      });
    }, [T, i, c, n]), ie(() => () => {
      ee.current.dispose(), se.current.dispose(), Z.current.dispose();
    }, []);
    const {
      hasNoDiamondBaseMesh: gs,
      hasNoDiamondFinishingMesh: xs,
      hasNoDiamondEngravingMesh: ys
    } = pn(() => {
      let H = !1, X = !1, B = !1;
      return T ? (T.traverse((te) => {
        if (te.name) {
          const Q = te.name.toLowerCase();
          Q.includes("nodiamond") && (Q.includes("engrav") ? B = !0 : Q.includes("finishing") || Q.includes("silver") ? X = !0 : H = !0);
        }
      }), {
        hasNoDiamondBaseMesh: H,
        hasNoDiamondFinishingMesh: X,
        hasNoDiamondEngravingMesh: B
      }) : {
        hasNoDiamondBaseMesh: !1,
        hasNoDiamondFinishingMesh: !1,
        hasNoDiamondEngravingMesh: !1
      };
    }, [T]);
    return pn(() => {
      if (!T) return;
      const H = [];
      ee.current.normalMap = null, se.current.normalMap = null, Z.current.normalMap = null, T.traverse((X) => {
        if (X instanceof L.Mesh) {
          const B = X;
          B.geometry && B.geometry.computeVertexNormals();
          const te = (_e, Te) => {
            let ot = _e;
            const Sn = Te.toLowerCase();
            for (; ot; ) {
              if (ot.name && ot.name.toLowerCase().includes(Sn))
                return !0;
              ot = ot.parent;
            }
            return !1;
          }, Q = te(B, "NoDiamond"), qe = !Q && (te(B, "diamond") || te(B, "diam_centr")), Ge = te(B, "engrav"), Xt = te(B, "finishing") || te(B, "silver");
          B.userData.originalNormalMap === void 0 && (B.userData.originalNormalMap = B.material?.normalMap || null, B.userData.originalNormalScale = B.material?.normalScale ? B.material.normalScale.clone() : null);
          const Fe = B.userData.originalNormalMap, $t = B.userData.originalNormalScale, vs = se.current, _s = ee.current, ws = (_e, Te) => {
            const ot = Te ? j : he, Sn = Te ? xe : ze;
            ot ? (_e.normalMap = Sn, _e.normalScale.set(rt, rt)) : Fe && (_e.normalMap = Fe, $t && _e.normalScale.copy($t));
          };
          if (p ? Q ? B.visible = !1 : B.visible = !0 : qe ? B.visible = !1 : Ge ? Q ? B.visible = !0 : B.visible = !ys : Xt ? Q ? B.visible = !0 : B.visible = !xs : Q ? B.visible = !0 : B.visible = !gs, H.push({
            "Mesh Name": B.name,
            "Parent Name": B.parent?.name || "None",
            "Is Diamond": qe,
            "Is NoDiamond": Q,
            "Is Finishing": Xt,
            "Is Engraving": Ge,
            "Calculated Visibility": B.visible
          }), qe) {
            if (p) {
              const _e = new wn(B.geometry, { strategy: 1 });
              B.material = new Xo({
                geometry: B.geometry,
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
            if (B.material && B.material.userData?.isEngraved) {
              const _e = B.material, Te = Z.current;
              _e && Te && (_e.color.copy(Te.color), _e.roughness = Te.roughness, _e.metalness = Te.metalness);
            } else
              B.material = Z.current, Fe && (Z.current.normalMap = Fe, $t && Z.current.normalScale.copy(
                $t
              ));
          else Xt ? (B.material = vs, ws(vs, !1)) : (B.material = _s, ws(_s, !0));
          B.material && (Array.isArray(B.material) ? B.material : [B.material]).forEach((Te) => {
            Te && (Te.flatShading = !1, Te.needsUpdate = !0);
          });
        }
      }), i && (console.log(
        `%c[SDK Model Content Matrix] --- Configuration State (showDiamond: ${p}) ---`,
        "color: #00ffca; font-weight: bold; font-size: 12px;"
      ), console.table(H));
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
      gs,
      xs,
      ys,
      i
    ]), T && E ? /* @__PURE__ */ W.jsx("primitive", { object: T, visible: i }) : null;
  }
), Ei = $e(
  ({ diamondEnvPath: c }) => {
    const { design3DManager: e } = gt(), { ringManager: t } = e, s = Ui({ files: c });
    return t.modelUrl ? /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
      /* @__PURE__ */ W.jsx(ea, { diamondEnvMap: s }),
      !t.isTransitioning && /* @__PURE__ */ W.jsx(Qo, { modelUrl: t.modelUrl })
    ] }) : null;
  }
);
function ei(c, e) {
  if (e === Wi)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), c;
  if (e === Wn || e === pi) {
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
class na extends gi {
  /**
   * Constructs a new glTF loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new aa(t);
    }), this.register(function(t) {
      return new ca(t);
    }), this.register(function(t) {
      return new xa(t);
    }), this.register(function(t) {
      return new ya(t);
    }), this.register(function(t) {
      return new va(t);
    }), this.register(function(t) {
      return new ua(t);
    }), this.register(function(t) {
      return new fa(t);
    }), this.register(function(t) {
      return new da(t);
    }), this.register(function(t) {
      return new ha(t);
    }), this.register(function(t) {
      return new oa(t);
    }), this.register(function(t) {
      return new ma(t);
    }), this.register(function(t) {
      return new la(t);
    }), this.register(function(t) {
      return new ga(t);
    }), this.register(function(t) {
      return new pa(t);
    }), this.register(function(t) {
      return new ia(t);
    }), this.register(function(t) {
      return new _a(t);
    }), this.register(function(t) {
      return new wa(t);
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
    }, o = new ls(this.manager);
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
      if (o.decode(new Uint8Array(e, 0, 4)) === Di) {
        try {
          i[z.KHR_BINARY_GLTF] = new Ta(e);
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
    const u = new La(r, {
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
            i[l] = new ra();
            break;
          case z.KHR_DRACO_MESH_COMPRESSION:
            i[l] = new Ma(r, this.dracoLoader);
            break;
          case z.KHR_TEXTURE_TRANSFORM:
            i[l] = new Aa();
            break;
          case z.KHR_MESH_QUANTIZATION:
            i[l] = new ba();
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
function sa() {
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
class ia {
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
        u = new qi(f), u.target.position.set(0, 0, -1), u.add(u.target);
        break;
      case "point":
        u = new $i(f), u.distance = l;
        break;
      case "spot":
        u = new Xi(f), u.distance = l, o.spot = o.spot || {}, o.spot.innerConeAngle = o.spot.innerConeAngle !== void 0 ? o.spot.innerConeAngle : 0, o.spot.outerConeAngle = o.spot.outerConeAngle !== void 0 ? o.spot.outerConeAngle : Math.PI / 4, u.angle = o.spot.outerConeAngle, u.penumbra = 1 - o.spot.innerConeAngle / o.spot.outerConeAngle, u.target.position.set(0, 0, -1), u.add(u.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + o.type);
    }
    return u.position.set(0, 0, 0), Oe(u, o), o.intensity !== void 0 && (u.intensity = o.intensity), u.name = t.createUniqueName(o.name || "light_" + e), n = Promise.resolve(u), t.cache.add(s, n), n;
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
class ra {
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
      r.baseColorTexture !== void 0 && n.push(s.assignTexture(e, "map", r.baseColorTexture, Kt));
    }
    return Promise.all(n);
  }
}
class oa {
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
class aa {
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
class ca {
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
class la {
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
class ua {
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
    return i.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = i.sheenRoughnessFactor), i.sheenColorTexture !== void 0 && r.push(s.assignTexture(t, "sheenColorMap", i.sheenColorTexture, Kt)), i.sheenRoughnessTexture !== void 0 && r.push(s.assignTexture(t, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(r);
  }
}
class fa {
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
class da {
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
class ha {
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
class ma {
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
    return t.specularColor = new mt().setRGB(a[0], a[1], a[2], He), i.specularColorTexture !== void 0 && r.push(s.assignTexture(t, "specularColorMap", i.specularColorTexture, Kt)), Promise.all(r);
  }
}
class pa {
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
class ga {
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
class xa {
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
class ya {
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
class va {
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
class _a {
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
class wa {
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
      for (const y of l) {
        const g = new Ee(), m = new U(), v = new xi(), p = new U(1, 1, 1), _ = new Ji(y.geometry, y.material, d);
        for (let x = 0; x < d; x++)
          o.TRANSLATION && m.fromBufferAttribute(o.TRANSLATION, x), o.ROTATION && v.fromBufferAttribute(o.ROTATION, x), o.SCALE && p.fromBufferAttribute(o.SCALE, x), _.setMatrixAt(x, g.compose(m, v, p));
        for (const x in o)
          if (x === "_COLOR_0") {
            const w = o[x];
            _.instanceColor = new Zi(w.array, w.itemSize, w.normalized);
          } else x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && y.geometry.setAttribute(x, o[x]);
        yi.prototype.copy.call(_, y), this.parser.assignFinalMaterial(_), h.push(_);
      }
      return f.isGroup ? (f.clear(), f.add(...h), f) : h[0];
    }));
  }
}
const Di = "glTF", Ot = 12, ti = { JSON: 1313821514, BIN: 5130562 };
class Ta {
  constructor(e) {
    this.name = z.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Ot), s = new TextDecoder();
    if (this.header = {
      magic: s.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Di)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - Ot, r = new DataView(e, Ot);
    let i = 0;
    for (; i < n; ) {
      const a = r.getUint32(i, !0);
      i += 4;
      const o = r.getUint32(i, !0);
      if (i += 4, o === ti.JSON) {
        const u = new Uint8Array(e, Ot + i, a);
        this.content = s.decode(u);
      } else if (o === ti.BIN) {
        const u = Ot + i;
        this.body = e.slice(u, u + a);
      }
      i += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Ma {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = z.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const s = this.json, n = this.dracoLoader, r = e.extensions[this.name].bufferView, i = e.extensions[this.name].attributes, a = {}, o = {}, u = {};
    for (const f in i) {
      const l = os[f] || f.toLowerCase();
      a[l] = i[f];
    }
    for (const f in e.attributes) {
      const l = os[f] || f.toLowerCase();
      if (i[f] !== void 0) {
        const d = s.accessors[e.attributes[f]], h = Et[d.componentType];
        u[l] = h.name, o[l] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(f) {
      return new Promise(function(l, d) {
        n.decodeDracoFile(f, function(h) {
          for (const y in h.attributes) {
            const g = h.attributes[y], m = o[y];
            m !== void 0 && (g.normalized = m);
          }
          l(h);
        }, a, u, He, d);
      });
    });
  }
}
class Aa {
  constructor() {
    this.name = z.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class ba {
  constructor() {
    this.name = z.KHR_MESH_QUANTIZATION;
  }
}
class Ii extends Ar {
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
    const r = this.resultBuffer, i = this.sampleValues, a = this.valueSize, o = a * 2, u = a * 3, f = n - t, l = (s - t) / f, d = l * l, h = d * l, y = e * u, g = y - u, m = -2 * h + 3 * d, v = h - d, p = 1 - m, _ = v - d + l;
    for (let x = 0; x !== a; x++) {
      const w = i[g + x + a], T = i[g + x + o] * f, A = i[y + x + a], M = i[y + x] * f;
      r[x] = p * w + _ * T + m * A + v * M;
    }
    return r;
  }
}
const Ra = new xi();
class Sa extends Ii {
  interpolate_(e, t, s, n) {
    const r = super.interpolate_(e, t, s, n);
    return Ra.fromArray(r).normalize().toArray(r), r;
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
}, ni = {
  9728: et,
  9729: pt,
  9984: rr,
  9985: ir,
  9986: sr,
  9987: vi
}, si = {
  33071: gn,
  33648: or,
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
}, Ze = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Ea = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: wi,
  STEP: Mr
}, zn = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Da(c) {
  return c.DefaultMaterial === void 0 && (c.DefaultMaterial = new _i({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: jn
  })), c.DefaultMaterial;
}
function ht(c, e, t) {
  for (const s in t.extensions)
    c[s] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[s] = t.extensions[s]);
}
function Oe(c, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(c.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Ia(c, e, t) {
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
function Pa(c, e) {
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
function Ba(c) {
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
function Ca(c) {
  return c.search(/\.jpe?g($|\?)/i) > 0 || c.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : c.search(/\.webp($|\?)/i) > 0 || c.search(/^data\:image\/webp/) === 0 ? "image/webp" : c.search(/\.ktx2($|\?)/i) > 0 || c.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const Na = new Ee();
class La {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new sa(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = !1, n = -1, r = !1, i = -1;
    if (typeof navigator < "u") {
      const a = navigator.userAgent;
      s = /^((?!chrome|android).)*safari/i.test(a) === !0;
      const o = a.match(/Version\/(\d+)/);
      n = s && o ? parseInt(o[1], 10) : -1, r = a.indexOf("Firefox") > -1, i = r ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || s && n < 17 || r && i < 98 ? this.textureLoader = new Qi(this.options.manager) : this.textureLoader = new er(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new ls(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
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
      return ht(r, a, n), Oe(a, n), Promise.all(s._invokeAll(function(o) {
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
      const i = Vn[n.type], a = Et[n.componentType], o = n.normalized === !0, u = new a(n.count * i);
      return Promise.resolve(new St(u, i, o));
    }
    const r = [];
    return n.bufferView !== void 0 ? r.push(this.getDependency("bufferView", n.bufferView)) : r.push(null), n.sparse !== void 0 && (r.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(r).then(function(i) {
      const a = i[0], o = Vn[n.type], u = Et[n.componentType], f = u.BYTES_PER_ELEMENT, l = f * o, d = n.byteOffset || 0, h = n.bufferView !== void 0 ? s.bufferViews[n.bufferView].byteStride : void 0, y = n.normalized === !0;
      let g, m;
      if (h && h !== l) {
        const v = Math.floor(d / h), p = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + v + ":" + n.count;
        let _ = t.cache.get(p);
        _ || (g = new u(a, v * h, n.count * h / f), _ = new tr(g, h / f), t.cache.add(p, _)), m = new nr(_, o, d % h / f, y);
      } else
        a === null ? g = new u(n.count * o) : g = new u(a, d, n.count * o), m = new St(g, o, y);
      if (n.sparse !== void 0) {
        const v = Vn.SCALAR, p = Et[n.sparse.indices.componentType], _ = n.sparse.indices.byteOffset || 0, x = n.sparse.values.byteOffset || 0, w = new p(i[1], _, n.sparse.count * v), T = new u(i[2], x, n.sparse.count * o);
        a !== null && (m = new St(m.array.slice(), m.itemSize, m.normalized)), m.normalized = !1;
        for (let A = 0, M = w.length; A < M; A++) {
          const S = w[A];
          if (m.setX(S, T[A * o]), o >= 2 && m.setY(S, T[A * o + 1]), o >= 3 && m.setZ(S, T[A * o + 2]), o >= 4 && m.setW(S, T[A * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = y;
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
      return f.magFilter = ni[d.magFilter] || pt, f.minFilter = ni[d.minFilter] || vi, f.wrapS = si[d.wrapS] || Xn, f.wrapT = si[d.wrapT] || Xn, f.generateMipmaps = !f.isCompressedTexture && f.minFilter !== et && f.minFilter !== pt, n.associations.set(f, { textures: e }), f;
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
        let y = d;
        t.isImageBitmapLoader === !0 && (y = function(g) {
          const m = new Ms(g);
          m.needsUpdate = !0, d(m);
        }), t.load(zt.resolveURL(l, r.path), y, void 0, h);
      });
    }).then(function(l) {
      return u === !0 && a.revokeObjectURL(o), Oe(l, i), l.userData.mimeType = i.mimeType || Ca(i.uri), l;
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
      o || (o = new ar(), Dn.prototype.copy.call(o, s), o.color.copy(s.color), o.map = s.map, o.sizeAttenuation = !1, this.cache.add(a, o)), s = o;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + s.uuid;
      let o = this.cache.get(a);
      o || (o = new cr(), Dn.prototype.copy.call(o, s), o.color.copy(s.color), o.map = s.map, this.cache.add(a, o)), s = o;
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
    return _i;
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
      l.baseColorTexture !== void 0 && u.push(t.assignTexture(a, "map", l.baseColorTexture, Kt)), a.metalness = l.metallicFactor !== void 0 ? l.metallicFactor : 1, a.roughness = l.roughnessFactor !== void 0 ? l.roughnessFactor : 1, l.metallicRoughnessTexture !== void 0 && (u.push(t.assignTexture(a, "metalnessMap", l.metallicRoughnessTexture)), u.push(t.assignTexture(a, "roughnessMap", l.metallicRoughnessTexture))), i = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), u.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === !0 && (a.side = di);
    const f = r.alphaMode || zn.OPAQUE;
    if (f === zn.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, f === zn.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && i !== kt && (u.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new ke(1, 1), r.normalTexture.scale !== void 0)) {
      const l = r.normalTexture.scale;
      a.normalScale.set(l, l);
    }
    if (r.occlusionTexture !== void 0 && i !== kt && (u.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && i !== kt) {
      const l = r.emissiveFactor;
      a.emissive = new mt().setRGB(l[0], l[1], l[2], He);
    }
    return r.emissiveTexture !== void 0 && i !== kt && u.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, Kt)), Promise.all(u).then(function() {
      const l = new i(a);
      return r.name && (l.name = r.name), Oe(l, r), t.associations.set(l, { materials: e }), r.extensions && ht(n, l, r), l;
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
    const t = lr.sanitizeNodeName(e || "");
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
        return ii(o, a, t);
      });
    }
    const i = [];
    for (let a = 0, o = e.length; a < o; a++) {
      const u = e[a], f = Ba(u), l = n[f];
      if (l)
        i.push(l.promise);
      else {
        let d;
        u.extensions && u.extensions[z.KHR_DRACO_MESH_COMPRESSION] ? d = r(u) : d = ii(new ur(), u, t), n[f] = { primitive: u, promise: d }, i.push(d);
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
      const f = i[o].material === void 0 ? Da(this.cache) : this.getDependency("material", i[o].material);
      a.push(f);
    }
    return a.push(t.loadGeometries(i)), Promise.all(a).then(function(o) {
      const u = o.slice(0, o.length - 1), f = o[o.length - 1], l = [];
      for (let h = 0, y = f.length; h < y; h++) {
        const g = f[h], m = i[h];
        let v;
        const p = u[h];
        if (m.mode === Re.TRIANGLES || m.mode === Re.TRIANGLE_STRIP || m.mode === Re.TRIANGLE_FAN || m.mode === void 0)
          v = r.isSkinnedMesh === !0 ? new fr(g, p) : new dr(g, p), v.isSkinnedMesh === !0 && v.normalizeSkinWeights(), m.mode === Re.TRIANGLE_STRIP ? v.geometry = ei(v.geometry, pi) : m.mode === Re.TRIANGLE_FAN && (v.geometry = ei(v.geometry, Wn));
        else if (m.mode === Re.LINES)
          v = new hr(g, p);
        else if (m.mode === Re.LINE_STRIP)
          v = new mr(g, p);
        else if (m.mode === Re.LINE_LOOP)
          v = new pr(g, p);
        else if (m.mode === Re.POINTS)
          v = new gr(g, p);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(v.geometry.morphAttributes).length > 0 && Pa(v, r), v.name = t.createUniqueName(r.name || "mesh_" + e), Oe(v, r), m.extensions && ht(n, v, m), t.assignFinalMaterial(v), l.push(v);
      }
      for (let h = 0, y = l.length; h < y; h++)
        t.associations.set(l[h], {
          meshes: e,
          primitives: h
        });
      if (l.length === 1)
        return r.extensions && ht(n, l[0], r), l[0];
      const d = new In();
      r.extensions && ht(n, d, r), t.associations.set(d, { meshes: e });
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
    return s.type === "perspective" ? t = new xr(yr.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : s.type === "orthographic" && (t = new vr(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), Oe(t, s), Promise.resolve(t);
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
      return new _r(a, o);
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
      const h = n.channels[l], y = n.samplers[h.sampler], g = h.target, m = g.node, v = n.parameters !== void 0 ? n.parameters[y.input] : y.input, p = n.parameters !== void 0 ? n.parameters[y.output] : y.output;
      g.node !== void 0 && (i.push(this.getDependency("node", m)), a.push(this.getDependency("accessor", v)), o.push(this.getDependency("accessor", p)), u.push(y), f.push(g));
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(a),
      Promise.all(o),
      Promise.all(u),
      Promise.all(f)
    ]).then(function(l) {
      const d = l[0], h = l[1], y = l[2], g = l[3], m = l[4], v = [];
      for (let _ = 0, x = d.length; _ < x; _++) {
        const w = d[_], T = h[_], A = y[_], M = g[_], S = m[_];
        if (w === void 0) continue;
        w.updateMatrix && w.updateMatrix();
        const b = s._createAnimationTracks(w, T, A, M, S);
        if (b)
          for (let E = 0; E < b.length; E++)
            v.push(b[E]);
      }
      const p = new wr(r, void 0, v);
      return Oe(p, n), p;
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
        h.isSkinnedMesh && h.bind(d, Na);
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
      if (r.isBone === !0 ? f = new Tr() : u.length > 1 ? f = new In() : u.length === 1 ? f = u[0] : f = new yi(), f !== u[0])
        for (let l = 0, d = u.length; l < d; l++)
          f.add(u[l]);
      if (r.name && (f.userData.name = r.name, f.name = i), Oe(f, r), r.extensions && ht(s, f, r), r.matrix !== void 0) {
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
    const t = this.extensions, s = this.json.scenes[e], n = this, r = new In();
    s.name && (r.name = n.createUniqueName(s.name)), Oe(r, s), s.extensions && ht(t, r, s);
    const i = s.nodes || [], a = [];
    for (let o = 0, u = i.length; o < u; o++)
      a.push(n.getDependency("node", i[o]));
    return Promise.all(a).then(function(o) {
      for (let f = 0, l = o.length; f < l; f++)
        r.add(o[f]);
      const u = (f) => {
        const l = /* @__PURE__ */ new Map();
        for (const [d, h] of n.associations)
          (d instanceof Dn || d instanceof Ms) && l.set(d, h);
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
        u = bs;
        break;
      case Ze.rotation:
        u = Rs;
        break;
      case Ze.translation:
      case Ze.scale:
        u = As;
        break;
      default:
        s.itemSize === 1 ? u = bs : u = As;
        break;
    }
    const f = n.interpolation !== void 0 ? Ea[n.interpolation] : wi, l = this._getArrayFromAccessor(s);
    for (let d = 0, h = o.length; d < h; d++) {
      const y = new u(
        o[d] + "." + Ze[r.path],
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
      const n = this instanceof Rs ? Sa : Ii;
      return new n(this.times, this.values, this.getValueSize() / 3, s);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Fa(c, e, t) {
  const s = e.attributes, n = new Ne();
  if (s.POSITION !== void 0) {
    const a = t.json.accessors[s.POSITION], o = a.min, u = a.max;
    if (o !== void 0 && u !== void 0) {
      if (n.set(
        new U(o[0], o[1], o[2]),
        new U(u[0], u[1], u[2])
      ), a.normalized) {
        const f = as(Et[a.componentType]);
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
    const a = new U(), o = new U();
    for (let u = 0, f = r.length; u < f; u++) {
      const l = r[u];
      if (l.POSITION !== void 0) {
        const d = t.json.accessors[l.POSITION], h = d.min, y = d.max;
        if (h !== void 0 && y !== void 0) {
          if (o.setX(Math.max(Math.abs(h[0]), Math.abs(y[0]))), o.setY(Math.max(Math.abs(h[1]), Math.abs(y[1]))), o.setZ(Math.max(Math.abs(h[2]), Math.abs(y[2]))), d.normalized) {
            const g = as(Et[d.componentType]);
            o.multiplyScalar(g);
          }
          a.max(o);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    n.expandByVector(a);
  }
  c.boundingBox = n;
  const i = new br();
  n.getCenter(i.center), i.radius = n.min.distanceTo(n.max) / 2, c.boundingSphere = i;
}
function ii(c, e, t) {
  const s = e.attributes, n = [];
  function r(i, a) {
    return t.getDependency("accessor", i).then(function(o) {
      c.setAttribute(a, o);
    });
  }
  for (const i in s) {
    const a = os[i] || i.toLowerCase();
    a in c.attributes || n.push(r(s[i], a));
  }
  if (e.indices !== void 0 && !c.index) {
    const i = t.getDependency("accessor", e.indices).then(function(a) {
      c.setIndex(a);
    });
    n.push(i);
  }
  return Ss.workingColorSpace !== He && "COLOR_0" in s && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ss.workingColorSpace}" not supported.`), Oe(c, e), Fa(c, e, t), Promise.all(n).then(function() {
    return e.targets !== void 0 ? Ia(c, e.targets, t) : c;
  });
}
class Ua extends gi {
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
    const u = Number(a[1]), f = u ** 3 * 4, l = this.type === Vt ? new Uint8Array(f) : new Float32Array(f), d = new U(0, 0, 0), h = new U(1, 1, 1);
    if (a = n.exec(e), a !== null && d.set(Number(a[1]), Number(a[2]), Number(a[3])), a = r.exec(e), a !== null && h.set(Number(a[1]), Number(a[2]), Number(a[3])), d.x > h.x || d.y > h.y || d.z > h.z)
      throw new Error("LUTCubeLoader: Invalid input domain");
    const y = this.type === Vt ? 255 : 1;
    let g = 0;
    for (; (a = i.exec(e)) !== null; )
      l[g++] = Number(a[1]) * y, l[g++] = Number(a[2]) * y, l[g++] = Number(a[3]) * y, l[g++] = y;
    const m = new Rr();
    return m.image.data = l, m.image.width = u, m.image.height = u, m.image.depth = u, m.type = this.type, m.magFilter = pt, m.minFilter = pt, m.wrapS = gn, m.wrapT = gn, m.wrapR = gn, m.generateMipmaps = !1, m.needsUpdate = !0, {
      title: o,
      size: u,
      domainMin: d,
      domainMax: h,
      texture3D: m
    };
  }
}
class Oa extends Sr {
  /**
      * Constructs a new RGBE/HDR loader.
      *
      * @param {LoadingManager} [manager] - The loading manager.
      */
  constructor(e) {
    super(e), this.type = qt;
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
      let R = M.pos, I = -1, P = 0, C = "", N = String.fromCharCode.apply(null, new Uint16Array(M.subarray(R, R + 128)));
      for (; 0 > (I = N.indexOf(`
`)) && P < S && R < M.byteLength; )
        C += N, P += N.length, R += 128, N += String.fromCharCode.apply(null, new Uint16Array(M.subarray(R, R + 128)));
      return -1 < I ? (M.pos += P + I + 1, C + N.slice(0, I)) : !1;
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
      let C, N;
      for ((M.pos >= M.byteLength || !(C = l(M))) && i(1, "no header found"), (N = C.match(S)) || i(3, "bad initial token"), P.valid |= 1, P.programtype = N[1], P.string += C + `
`; C = l(M), C !== !1; ) {
        if (P.string += C + `
`, C.charAt(0) === "#") {
          P.comments += C + `
`;
          continue;
        }
        if ((N = C.match(b)) && (P.gamma = parseFloat(N[1])), (N = C.match(E)) && (P.exposure = parseFloat(N[1])), (N = C.match(R)) && (P.valid |= 2, P.format = N[1]), (N = C.match(I)) && (P.valid |= 4, P.height = parseInt(N[1], 10), P.width = parseInt(N[2], 10)), P.valid & 2 && P.valid & 4) break;
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
      const C = 4 * E, N = new Uint8Array(4), V = new Uint8Array(C);
      let G = b;
      for (; G > 0 && P < M.byteLength; ) {
        P + 4 > M.byteLength && i(1), N[0] = M[P++], N[1] = M[P++], N[2] = M[P++], N[3] = M[P++], (N[0] != 2 || N[1] != 2 || (N[2] << 8 | N[3]) != E) && i(3, "bad rgbe scanline format");
        let $ = 0, K;
        for (; $ < C && P < M.byteLength; ) {
          K = M[P++];
          const F = K > 128;
          if (F && (K -= 128), (K === 0 || $ + K > C) && i(3, "bad scanline data"), F) {
            const O = M[P++];
            for (let j = 0; j < K; j++)
              V[$++] = O;
          } else
            V.set(M.subarray(P, P + K), $), $ += K, P += K;
        }
        const D = E;
        for (let F = 0; F < D; F++) {
          let O = 0;
          R[I] = V[F + O], O += E, R[I + 1] = V[F + O], O += E, R[I + 2] = V[F + O], O += E, R[I + 3] = V[F + O], I += 4;
        }
        G--;
      }
      return R;
    }, y = function(M, S, b, E) {
      const R = M[S + 3], I = Math.pow(2, R - 128) / 255;
      b[E + 0] = M[S + 0] * I, b[E + 1] = M[S + 1] * I, b[E + 2] = M[S + 2] * I, b[E + 3] = 1;
    }, g = function(M, S, b, E) {
      const R = M[S + 3], I = Math.pow(2, R - 128) / 255;
      b[E + 0] = Jt.toHalfFloat(Math.min(M[S + 0] * I, 65504)), b[E + 1] = Jt.toHalfFloat(Math.min(M[S + 1] * I, 65504)), b[E + 2] = Jt.toHalfFloat(Math.min(M[S + 2] * I, 65504)), b[E + 3] = Jt.toHalfFloat(1);
    }, m = new Uint8Array(e);
    m.pos = 0;
    const v = d(m), p = v.width, _ = v.height, x = h(m.subarray(m.pos), p, _);
    let w, T, A;
    switch (this.type) {
      case nt:
        A = x.length / 4;
        const M = new Float32Array(A * 4);
        for (let b = 0; b < A; b++)
          y(x, b * 4, M, b * 4);
        w = M, T = nt;
        break;
      case qt:
        A = x.length / 4;
        const S = new Uint16Array(A * 4);
        for (let b = 0; b < A; b++)
          g(x, b * 4, S, b * 4);
        w = S, T = qt;
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
        case qt:
          i.colorSpace = He, i.minFilter = pt, i.magFilter = pt, i.generateMipmaps = !1, i.flipY = !0;
          break;
      }
      t && t(i, a);
    }
    return super.load(e, r, s, n);
  }
}
class ka extends Oa {
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
class Ye {
  static gltfLoader = new na();
  static loadGLTF = (e) => new Promise((t, s) => {
    if (!e)
      return t(new L.Group());
    Ye.gltfLoader.load(
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
    const t = URL.createObjectURL(e), s = new ka();
    try {
      const n = await s.loadAsync(t);
      return n.mapping = L.EquirectangularReflectionMapping, URL.revokeObjectURL(t), n;
    } catch (n) {
      throw URL.revokeObjectURL(t), jt.error(`Error loading environment map: ${n}`), n;
    }
  }
  static loadNodeMapForGLTF = async (e) => {
    const t = await Ye.loadGLTF(e), s = {};
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
  static loadLut = async (e) => await new Ua().loadAsync(e);
  static getImageUrlFromTexture(e) {
    const t = document.createElement("canvas");
    t.width = 2e3, t.height = 2e3;
    const s = e.repeat ?? new L.Vector2(1, 1), n = t.getContext("2d", { willReadFrequently: !0 });
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
    const t = new L.Box3();
    return e.forEach((s) => {
      t.expandByObject(s);
    }), t;
  };
  static getCenterPointAndNormal = (e) => {
    const t = e.geometry, s = t.attributes.position, n = t.attributes.normal, r = t.attributes.uv, i = e.matrixWorld;
    if (!s || !n || !r)
      return {
        center: Ye.getBoundingBox([e]).getCenter(new L.Vector3()),
        normal: new L.Vector3(0, 0, 1),
        uv: new L.Vector2(0.5, 0.5)
      };
    const a = new L.Vector3(0, 0, 0), o = s.count;
    for (let y = 0; y < o; y++) {
      const g = new L.Vector3().fromBufferAttribute(s, y).applyMatrix4(i);
      a.add(g);
    }
    a.divideScalar(o);
    let u = 1 / 0, f = 0;
    for (let y = 0; y < o; y++) {
      const m = new L.Vector3().fromBufferAttribute(s, y).applyMatrix4(i).distanceTo(a);
      m < u && (u = m, f = y);
    }
    const l = new L.Vector3().fromBufferAttribute(n, f).applyMatrix4(i), d = new L.Vector3().fromBufferAttribute(s, f).applyMatrix4(i), h = new L.Vector2().fromBufferAttribute(r, f);
    return {
      center: d,
      normal: l,
      uv: h
    };
  };
  static getSizeAndCenter = (e) => {
    const t = Ye.getBoundingBox([e]), s = t.getSize(new L.Vector3()), n = t.getCenter(new L.Vector3());
    return {
      boundingBox: t,
      center: n,
      size: s
    };
  };
}
class Ha {
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
    const i = -1, { boundingBox: a, center: o } = Ye.getSizeAndCenter(s);
    if (s instanceof L.Mesh) {
      const { center: u } = Ye.getCenterPointAndNormal(
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
class Va {
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
      const t = await Ye.loadEnvironmentTexture(e);
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
class za {
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
class Ga {
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
      _engravingCanvas: Es.ref,
      _normalMapCanvas: Es.ref
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
class ja {
  _libState;
  _meshManager;
  _cameraManager;
  _envManager;
  _ringManager;
  constructor(e) {
    this._libState = e, this._meshManager = new za(e), this._cameraManager = new Ha(e), this._envManager = new Va(), this._ringManager = new Ga(), it(this);
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
var Pi = /* @__PURE__ */ ((c) => (c.WEBSITE = "website", c.CONFIG = "config", c))(Pi || {});
const Ka = {
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
class Ya {
  _libState;
  _meshInfoJson = null;
  _jsonUrl = "./init.json";
  _source;
  constructor(e, t = Pi.WEBSITE) {
    this._libState = e, this._source = t, it(this);
  }
  get source() {
    return this._source;
  }
  setSource(e) {
    this._source = e;
  }
  get settings() {
    return Ka[this._source];
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
    this._libState = e, this._viewManager = new Ya(e, t), it(this);
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
class Bi {
  _designManager;
  _design3DManager;
  constructor(e) {
    this._designManager = new Wa(this, e), this._design3DManager = new ja(this), it(this);
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
const Xa = "#f2efe8";
function $a({
  color: c = Xa
}) {
  const { scene: e } = li();
  return ie(() => {
    let t = !1, s = null;
    const n = Ye.getImageByColor(c);
    return new L.TextureLoader().loadAsync(n).then((i) => {
      if (t) {
        i.dispose();
        return;
      }
      s = i, s.colorSpace = L.SRGBColorSpace, e.background = s;
    }).catch((i) => {
      jt.error(`Failed to load scene background texture: ${i}`);
    }), () => {
      t = !0, s && e.background === s && (e.background = null, s.dispose());
    };
  }, [c, e]), null;
}
const Ci = $e(({ children: c }) => {
  const e = Ue(null), { designManager: t, design3DManager: s } = gt(), n = t.modelMinY, { currentView: r } = s.ringManager;
  return /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
    c && /* @__PURE__ */ W.jsx("group", { ref: e, children: c }),
    r !== 2 && /* @__PURE__ */ W.jsx(
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
}), qa = $e(() => {
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
}), sc = $e(
  Li(
    ({
      backgroundColor: c = "#f2efe8",
      className: e,
      diamondEnvPath: t = "/08.hdr",
      envPath: s = "/env/08.exr",
      style: n,
      source: r
    }, i) => {
      const [a] = ri(() => new Bi(r));
      Fi(
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
      const o = a.design3DManager.ringManager.isLoaded, u = r ? a.designManager.viewManager.settings.canvasColor : c, f = Yt.useCallback((l) => {
        if (l) {
          a.design3DManager.cameraManager.setCameraRef(l);
          const d = a.designManager.viewManager.settings;
          l.minDistance = d.minDistance, l.maxDistance = d.maxDistance, l.minPolarAngle = d.minPolarAngle, l.maxPolarAngle = d.maxPolarAngle;
        }
      }, [a]);
      return /* @__PURE__ */ W.jsx(us.Provider, { value: a, children: /* @__PURE__ */ W.jsx(
        "div",
        {
          className: e,
          style: {
            height: "100%",
            width: "100%",
            backgroundColor: o ? void 0 : u,
            ...n
          },
          children: /* @__PURE__ */ W.jsxs(
            ui,
            {
              frameloop: "always",
              shadows: !0,
              camera: { fov: 35, position: [0, 0, a.designManager.viewManager.settings.homeDistance] },
              children: [
                /* @__PURE__ */ W.jsx(
                  $a,
                  {
                    color: r ? a.designManager.viewManager.settings.canvasColor : c
                  }
                ),
                /* @__PURE__ */ W.jsxs(cs, { fallback: null, children: [
                  /* @__PURE__ */ W.jsx(
                    ai,
                    {
                      files: s,
                      environmentIntensity: 0.7,
                      environmentRotation: [0, 3.63, 0]
                    }
                  ),
                  /* @__PURE__ */ W.jsx(Ei, { diamondEnvPath: t }),
                  /* @__PURE__ */ W.jsx(Ci, {}),
                  /* @__PURE__ */ W.jsx(qa, {}),
                  /* @__PURE__ */ W.jsx(
                    ci,
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
), ic = $e(
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
    const l = Ue(new Bi()).current, { ringManager: d } = l.design3DManager, h = (m, v, p) => {
      const _ = m.charAt(0).toUpperCase() + m.slice(1);
      let x = p.replace(/\s+/g, "");
      return x.endsWith("mm") || (x = `${x}mm`), `/BehytRings/${_}/${v}/${x}/${v}_${x}.glb`;
    }, y = s || t[0] || "", g = y ? h(c, e, y) : "";
    return ie(() => {
      g && d.initModel(g);
    }, [g, d]), ie(() => {
      d.setMetalColor(n);
    }, [n, d]), ie(() => {
      d.setFinish(r);
    }, [r, d]), ie(() => {
      d.setDiamondsVisible(i);
    }, [i, d]), /* @__PURE__ */ W.jsx(us.Provider, { value: l, children: /* @__PURE__ */ W.jsxs(
      ui,
      {
        frameloop: "always",
        shadows: !0,
        camera: { fov: 35, position: [0, 0, 8] },
        children: [
          /* @__PURE__ */ W.jsx("color", { attach: "background", args: [u] }),
          /* @__PURE__ */ W.jsxs(cs, { fallback: null, children: [
            /* @__PURE__ */ W.jsx(
              ai,
              {
                files: a,
                environmentIntensity: 0.7,
                environmentRotation: [0, 3.63, 0]
              }
            ),
            /* @__PURE__ */ W.jsx(Ei, { diamondEnvPath: o }),
            /* @__PURE__ */ W.jsx(Ci, {}),
            /* @__PURE__ */ W.jsx(
              ci,
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
  ic as RingScene,
  sc as SDKViewer,
  sc as Viewer3D,
  Pi as ViewerSource
};
