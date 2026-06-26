import ln, { useEffect as re, useMemo as Dn, useState as sn, useRef as Te, Suspense as rn, forwardRef as mr, useImperativeHandle as pr } from "react";
import { useGLTF as Hs, useEnvironment as gr, ContactShadows as xr, Environment as Vs, CameraControls as zs } from "@react-three/drei";
import { useThree as Gs, useFrame as js, useLoader as gt, Canvas as Ks } from "@react-three/fiber";
import { observer as He } from "mobx-react-lite";
import * as B from "three";
import { Box3 as Ie, Matrix4 as Ae, BufferAttribute as ht, Vector3 as U, Line3 as Oe, Plane as Ws, Vector2 as Ce, Triangle as ft, BackSide as yr, DoubleSide as Ys, REVISION as Xs, Ray as vr, FrontSide as Pn, UnsignedIntType as Dt, FloatType as We, DataTexture as Cn, NearestFilter as je, IntType as mn, UnsignedByteType as Pt, UnsignedShortType as Tr, ByteType as ns, ShortType as wr, RGBAFormat as on, RGBAIntegerFormat as Bn, RGIntegerFormat as $s, RedIntegerFormat as _r, RGFormat as Mr, RedFormat as br, TrianglesDrawMode as Ar, TriangleFanDrawMode as Ln, TriangleStripDrawMode as qs, Loader as Js, LoaderUtils as Ct, FileLoader as $n, MeshPhysicalMaterial as Le, Color as et, LinearSRGBColorSpace as Be, SRGBColorSpace as Nt, SpotLight as Rr, PointLight as Sr, DirectionalLight as Er, Quaternion as Zs, InstancedMesh as Ir, InstancedBufferAttribute as Dr, Object3D as Qs, TextureLoader as Pr, ImageBitmapLoader as Cr, InterleavedBuffer as Br, InterleavedBufferAttribute as Lr, LinearMipmapLinearFilter as er, NearestMipmapLinearFilter as Nr, LinearMipmapNearestFilter as Fr, NearestMipmapNearestFilter as Ur, LinearFilter as tt, RepeatWrapping as Nn, MirroredRepeatWrapping as Or, ClampToEdgeWrapping as en, PointsMaterial as kr, Material as pn, LineBasicMaterial as Hr, MeshStandardMaterial as tr, MeshBasicMaterial as It, PropertyBinding as Vr, BufferGeometry as zr, SkinnedMesh as Gr, Mesh as jr, LineSegments as Kr, Line as Wr, LineLoop as Yr, Points as Xr, Group as gn, PerspectiveCamera as $r, MathUtils as qr, OrthographicCamera as Jr, Skeleton as Zr, AnimationClip as Qr, Bone as ei, InterpolateDiscrete as ti, InterpolateLinear as nr, Texture as ss, VectorKeyframeTrack as rs, NumberKeyframeTrack as is, QuaternionKeyframeTrack as os, ColorManagement as as, Interpolant as ni, Sphere as si, Data3DTexture as ri, DataTextureLoader as ii, HalfFloatType as Ft, DataUtils as Ut } from "three";
import { makeAutoObservable as Xe, observable as cs } from "mobx";
var Ot = { exports: {} }, xt = {};
var ls;
function oi() {
  if (ls) return xt;
  ls = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.fragment");
  function t(s, n, i) {
    var r = null;
    if (i !== void 0 && (r = "" + i), n.key !== void 0 && (r = "" + n.key), "key" in n) {
      i = {};
      for (var o in n)
        o !== "key" && (i[o] = n[o]);
    } else i = n;
    return n = i.ref, {
      $$typeof: c,
      type: s,
      key: r,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return xt.Fragment = e, xt.jsx = t, xt.jsxs = t, xt;
}
var yt = {};
var us;
function ai() {
  return us || (us = 1, process.env.NODE_ENV !== "production" && (function() {
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
        case y:
          return "StrictMode";
        case A:
          return "Suspense";
        case M:
          return "SuspenseList";
        case b:
          return "Activity";
      }
      if (typeof D == "object")
        switch (typeof D.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), D.$$typeof) {
          case w:
            return "Portal";
          case x:
            return D.displayName || "Context";
          case v:
            return (D._context.displayName || "Context") + ".Consumer";
          case T:
            var N = D.render;
            return D = D.displayName, D || (D = N.displayName || N.name || "", D = D !== "" ? "ForwardRef(" + D + ")" : "ForwardRef"), D;
          case _:
            return N = D.displayName || null, N !== null ? N : c(D.type) || "Memo";
          case S:
            N = D._payload, D = D._init;
            try {
              return c(D(N));
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
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var k = N.error, Y = typeof Symbol == "function" && Symbol.toStringTag && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return k.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Y
        ), e(D);
      }
    }
    function s(D) {
      if (D === p) return "<>";
      if (typeof D == "object" && D !== null && D.$$typeof === S)
        return "<...>";
      try {
        var N = c(D);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var D = R.A;
      return D === null ? null : D.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function r(D) {
      if (I.call(D, "key")) {
        var N = Object.getOwnPropertyDescriptor(D, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return D.key !== void 0;
    }
    function o(D, N) {
      function k() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(D, "key", {
        get: k,
        configurable: !0
      });
    }
    function a() {
      var D = c(this.type);
      return O[D] || (O[D] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), D = this.props.ref, D !== void 0 ? D : null;
    }
    function u(D, N, k, Y, de, he) {
      var H = k.ref;
      return D = {
        $$typeof: m,
        type: D,
        key: N,
        props: k,
        _owner: Y
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
        value: de
      }), Object.defineProperty(D, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: he
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    }
    function f(D, N, k, Y, de, he) {
      var H = N.children;
      if (H !== void 0)
        if (Y)
          if (P(H)) {
            for (Y = 0; Y < H.length; Y++)
              l(H[Y]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else l(H);
      if (I.call(N, "key")) {
        H = c(D);
        var K = Object.keys(N).filter(function(J) {
          return J !== "key";
        });
        Y = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", j[H + Y] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Y,
          H,
          K,
          H
        ), j[H + Y] = !0);
      }
      if (H = null, k !== void 0 && (t(k), H = "" + k), r(N) && (t(N.key), H = "" + N.key), "key" in N) {
        k = {};
        for (var q in N)
          q !== "key" && (k[q] = N[q]);
      } else k = N;
      return H && o(
        k,
        typeof D == "function" ? D.displayName || D.name || "Unknown" : D
      ), u(
        D,
        H,
        k,
        n(),
        de,
        he
      );
    }
    function l(D) {
      d(D) ? D._store && (D._store.validated = 1) : typeof D == "object" && D !== null && D.$$typeof === S && (D._payload.status === "fulfilled" ? d(D._payload.value) && D._payload.value._store && (D._payload.value._store.validated = 1) : D._store && (D._store.validated = 1));
    }
    function d(D) {
      return typeof D == "object" && D !== null && D.$$typeof === m;
    }
    var h = ln, m = /* @__PURE__ */ Symbol.for("react.transitional.element"), w = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.consumer"), x = /* @__PURE__ */ Symbol.for("react.context"), T = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.suspense_list"), _ = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), E = /* @__PURE__ */ Symbol.for("react.client.reference"), R = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, P = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(D) {
        return D();
      }
    };
    var L, O = {}, X = h.react_stack_bottom_frame.bind(
      h,
      i
    )(), ne = C(s(i)), j = {};
    yt.Fragment = p, yt.jsx = function(D, N, k) {
      var Y = 1e4 > R.recentlyCreatedOwnerStacks++;
      return f(
        D,
        N,
        k,
        !1,
        Y ? Error("react-stack-top-frame") : X,
        Y ? C(s(D)) : ne
      );
    }, yt.jsxs = function(D, N, k) {
      var Y = 1e4 > R.recentlyCreatedOwnerStacks++;
      return f(
        D,
        N,
        k,
        !0,
        Y ? Error("react-stack-top-frame") : X,
        Y ? C(s(D)) : ne
      );
    };
  })()), yt;
}
var fs;
function ci() {
  return fs || (fs = 1, process.env.NODE_ENV === "production" ? Ot.exports = oi() : Ot.exports = ai()), Ot.exports;
}
var W = ci();
const qn = ln.createContext(null), sr = 0, li = 1, ui = 2, ds = 2, xn = 1.25, hs = 1, le = 32, ce = le / 4, Jn = 65535, fi = Jn << 16, tn = Math.pow(2, -24), Zn = /* @__PURE__ */ Symbol("SKIP_GENERATION"), rr = {
  strategy: sr,
  maxDepth: 40,
  maxLeafSize: 10,
  useSharedArrayBuffer: !1,
  setBoundingBox: !0,
  onProgress: null,
  indirect: !1,
  verbose: !0,
  range: null,
  [Zn]: !1
};
function se(c, e, t) {
  return t.min.x = e[c], t.min.y = e[c + 1], t.min.z = e[c + 2], t.max.x = e[c + 3], t.max.y = e[c + 4], t.max.z = e[c + 5], t;
}
function ms(c) {
  let e = -1, t = -1 / 0;
  for (let s = 0; s < 3; s++) {
    const n = c[s + 3] - c[s];
    n > t && (t = n, e = s);
  }
  return e;
}
function ps(c, e) {
  e.set(c);
}
function gs(c, e, t) {
  let s, n;
  for (let i = 0; i < 3; i++) {
    const r = i + 3;
    s = c[i], n = e[i], t[i] = s < n ? s : n, s = c[r], n = e[r], t[r] = s > n ? s : n;
  }
}
function kt(c, e, t) {
  for (let s = 0; s < 3; s++) {
    const n = e[c + 2 * s], i = e[c + 2 * s + 1], r = n - i, o = n + i;
    r < t[s] && (t[s] = r), o > t[s + 3] && (t[s + 3] = o);
  }
}
function vt(c) {
  const e = c[3] - c[0], t = c[4] - c[1], s = c[5] - c[2];
  return 2 * (e * t + t * s + s * e);
}
function ie(c, e) {
  return e[c + 15] === Jn;
}
function pe(c, e) {
  return e[c + 6];
}
function xe(c, e) {
  return e[c + 14];
}
function ue(c) {
  return c + ce;
}
function fe(c, e) {
  const t = e[c + 6];
  return c + t * ce;
}
function un(c, e) {
  return e[c + 7];
}
function yn(c, e, t, s, n) {
  let i = 1 / 0, r = 1 / 0, o = 1 / 0, a = -1 / 0, u = -1 / 0, f = -1 / 0, l = 1 / 0, d = 1 / 0, h = 1 / 0, m = -1 / 0, w = -1 / 0, p = -1 / 0;
  const y = c.offset || 0;
  for (let g = (e - y) * 6, v = (e + t - y) * 6; g < v; g += 6) {
    const x = c[g + 0], T = c[g + 1], A = x - T, M = x + T;
    A < i && (i = A), M > a && (a = M), x < l && (l = x), x > m && (m = x);
    const _ = c[g + 2], S = c[g + 3], b = _ - S, E = _ + S;
    b < r && (r = b), E > u && (u = E), _ < d && (d = _), _ > w && (w = _);
    const R = c[g + 4], I = c[g + 5], P = R - I, C = R + I;
    P < o && (o = P), C > f && (f = C), R < h && (h = R), R > p && (p = R);
  }
  s[0] = i, s[1] = r, s[2] = o, s[3] = a, s[4] = u, s[5] = f, n[0] = l, n[1] = d, n[2] = h, n[3] = m, n[4] = w, n[5] = p;
}
const Ne = 32, di = (c, e) => c.candidate - e.candidate, Ve = /* @__PURE__ */ new Array(Ne).fill().map(() => ({
  count: 0,
  bounds: new Float32Array(6),
  rightCacheBounds: new Float32Array(6),
  leftCacheBounds: new Float32Array(6),
  candidate: 0
})), Ht = /* @__PURE__ */ new Float32Array(6);
function hi(c, e, t, s, n, i) {
  let r = -1, o = 0;
  if (i === sr)
    r = ms(e), r !== -1 && (o = (e[r] + e[r + 3]) / 2);
  else if (i === li)
    r = ms(c), r !== -1 && (o = mi(t, s, n, r));
  else if (i === ui) {
    const a = vt(c);
    let u = xn * n;
    const f = t.offset || 0, l = (s - f) * 6, d = (s + n - f) * 6;
    for (let h = 0; h < 3; h++) {
      const m = e[h], y = (e[h + 3] - m) / Ne;
      if (n < Ne / 4) {
        const g = [...Ve];
        g.length = n;
        let v = 0;
        for (let T = l; T < d; T += 6, v++) {
          const A = g[v];
          A.candidate = t[T + 2 * h], A.count = 0;
          const {
            bounds: M,
            leftCacheBounds: _,
            rightCacheBounds: S
          } = A;
          for (let b = 0; b < 3; b++)
            S[b] = 1 / 0, S[b + 3] = -1 / 0, _[b] = 1 / 0, _[b + 3] = -1 / 0, M[b] = 1 / 0, M[b + 3] = -1 / 0;
          kt(T, t, M);
        }
        g.sort(di);
        let x = n;
        for (let T = 0; T < x; T++) {
          const A = g[T];
          for (; T + 1 < x && g[T + 1].candidate === A.candidate; )
            g.splice(T + 1, 1), x--;
        }
        for (let T = l; T < d; T += 6) {
          const A = t[T + 2 * h];
          for (let M = 0; M < x; M++) {
            const _ = g[M];
            A >= _.candidate ? kt(T, t, _.rightCacheBounds) : (kt(T, t, _.leftCacheBounds), _.count++);
          }
        }
        for (let T = 0; T < x; T++) {
          const A = g[T], M = A.count, _ = n - A.count, S = A.leftCacheBounds, b = A.rightCacheBounds;
          let E = 0;
          M !== 0 && (E = vt(S) / a);
          let R = 0;
          _ !== 0 && (R = vt(b) / a);
          const I = hs + xn * (E * M + R * _);
          I < u && (r = h, u = I, o = A.candidate);
        }
      } else {
        for (let x = 0; x < Ne; x++) {
          const T = Ve[x];
          T.count = 0, T.candidate = m + y + x * y;
          const A = T.bounds;
          for (let M = 0; M < 3; M++)
            A[M] = 1 / 0, A[M + 3] = -1 / 0;
        }
        for (let x = l; x < d; x += 6) {
          let M = ~~((t[x + 2 * h] - m) / y);
          M >= Ne && (M = Ne - 1);
          const _ = Ve[M];
          _.count++, kt(x, t, _.bounds);
        }
        const g = Ve[Ne - 1];
        ps(g.bounds, g.rightCacheBounds);
        for (let x = Ne - 2; x >= 0; x--) {
          const T = Ve[x], A = Ve[x + 1];
          gs(T.bounds, A.rightCacheBounds, T.rightCacheBounds);
        }
        let v = 0;
        for (let x = 0; x < Ne - 1; x++) {
          const T = Ve[x], A = T.count, M = T.bounds, S = Ve[x + 1].rightCacheBounds;
          A !== 0 && (v === 0 ? ps(M, Ht) : gs(M, Ht, Ht)), v += A;
          let b = 0, E = 0;
          v !== 0 && (b = vt(Ht) / a);
          const R = n - v;
          R !== 0 && (E = vt(S) / a);
          const I = hs + xn * (b * v + E * R);
          I < u && (r = h, u = I, o = T.candidate);
        }
      }
    }
  } else
    console.warn(`BVH: Invalid build strategy value ${i} used.`);
  return { axis: r, pos: o };
}
function mi(c, e, t, s) {
  let n = 0;
  const i = c.offset;
  for (let r = e, o = e + t; r < o; r++)
    n += c[(r - i) * 6 + s * 2];
  return n / t;
}
class vn {
  constructor() {
    this.boundingData = new Float32Array(6);
  }
}
function pi(c, e, t, s, n, i) {
  let r = s, o = s + n - 1;
  const a = i.pos, u = i.axis * 2, f = t.offset || 0;
  for (; ; ) {
    for (; r <= o && t[(r - f) * 6 + u] < a; )
      r++;
    for (; r <= o && t[(o - f) * 6 + u] >= a; )
      o--;
    if (r < o) {
      for (let l = 0; l < e; l++) {
        let d = c[r * e + l];
        c[r * e + l] = c[o * e + l], c[o * e + l] = d;
      }
      for (let l = 0; l < 6; l++) {
        const d = r - f, h = o - f, m = t[d * 6 + l];
        t[d * 6 + l] = t[h * 6 + l], t[h * 6 + l] = m;
      }
      r++, o--;
    } else
      return r;
  }
}
let ir, nn, Fn, or;
const gi = Math.pow(2, 32);
function Un(c) {
  return "count" in c ? 1 : 1 + Un(c.left) + Un(c.right);
}
function xi(c, e, t) {
  return ir = new Float32Array(t), nn = new Uint32Array(t), Fn = new Uint16Array(t), or = new Uint8Array(t), On(c, e);
}
function On(c, e) {
  const t = c / 4, s = c / 2, n = "count" in e, i = e.boundingData;
  for (let r = 0; r < 6; r++)
    ir[t + r] = i[r];
  if (n)
    return e.buffer ? (or.set(new Uint8Array(e.buffer), c), c + e.buffer.byteLength) : (nn[t + 6] = e.offset, Fn[s + 14] = e.count, Fn[s + 15] = Jn, c + le);
  {
    const { left: r, right: o, splitAxis: a } = e, u = c + le;
    let f = On(u, r);
    const l = c / le, h = f / le - l;
    if (h > gi)
      throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");
    return nn[t + 6] = h, nn[t + 7] = a, On(f, o);
  }
}
function yi(c, e, t, s, n, i) {
  const {
    maxDepth: r,
    verbose: o,
    maxLeafSize: a,
    strategy: u,
    onProgress: f
  } = n, l = c.primitiveBuffer, d = c.primitiveBufferStride, h = new Float32Array(6);
  let m = !1;
  const w = new vn();
  return yn(e, t, s, w.boundingData, h), y(w, t, s, h), w;
  function p(g) {
    f && f((g - i.offset) / i.count);
  }
  function y(g, v, x, T = null, A = 0) {
    if (!m && A >= r && (m = !0, o && console.warn(`BVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`)), x <= a || A >= r)
      return p(v + x), g.offset = v, g.count = x, g;
    const M = hi(g.boundingData, T, e, v, x, u);
    if (M.axis === -1)
      return p(v + x), g.offset = v, g.count = x, g;
    const _ = pi(l, d, e, v, x, M);
    if (_ === v || _ === v + x)
      p(v + x), g.offset = v, g.count = x;
    else {
      g.splitAxis = M.axis;
      const S = new vn(), b = v, E = _ - v;
      g.left = S, yn(e, b, E, S.boundingData, h), y(S, b, E, h, A + 1);
      const R = new vn(), I = _, P = x - E;
      g.right = R, yn(e, I, P, R.boundingData, h), y(R, I, P, h, A + 1);
    }
    return g;
  }
}
function vi(c, e) {
  const t = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, s = c.getRootRanges(e.range), n = s[0], i = s[s.length - 1], r = {
    offset: n.offset,
    count: i.offset + i.count - n.offset
  }, o = new Float32Array(6 * r.count);
  o.offset = r.offset, c.computePrimitiveBounds(r.offset, r.count, o), c._roots = s.map((a) => {
    const u = yi(c, o, a.offset, a.count, e, r), f = Un(u), l = new t(le * f);
    return xi(0, u, l), l;
  });
}
class Qn {
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
class Ti {
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
const ee = /* @__PURE__ */ new Ti();
let Ke, dt;
const st = [], Vt = /* @__PURE__ */ new Qn(() => new Ie());
function wi(c, e, t, s, n, i) {
  Ke = Vt.getPrimitive(), dt = Vt.getPrimitive(), st.push(Ke, dt), ee.setBuffer(c._roots[e]);
  const r = kn(0, c.geometry, t, s, n, i);
  ee.clearBuffer(), Vt.releasePrimitive(Ke), Vt.releasePrimitive(dt), st.pop(), st.pop();
  const o = st.length;
  return o > 0 && (dt = st[o - 1], Ke = st[o - 2]), r;
}
function kn(c, e, t, s, n = null, i = 0, r = 0) {
  const { float32Array: o, uint16Array: a, uint32Array: u } = ee;
  let f = c * 2;
  if (ie(f, a)) {
    const d = pe(c, u), h = xe(f, a);
    return se(c, o, Ke), s(d, h, !1, r, i + c / ce, Ke);
  } else {
    let b = function(R) {
      const { uint16Array: I, uint32Array: P } = ee;
      let C = R * 2;
      for (; !ie(C, I); )
        R = ue(R), C = R * 2;
      return pe(R, P);
    }, E = function(R) {
      const { uint16Array: I, uint32Array: P } = ee;
      let C = R * 2;
      for (; !ie(C, I); )
        R = fe(R, P), C = R * 2;
      return pe(R, P) + xe(C, I);
    };
    const d = ue(c), h = fe(c, u);
    let m = d, w = h, p, y, g, v;
    if (n && (g = Ke, v = dt, se(m, o, g), se(w, o, v), p = n(g), y = n(v), y < p)) {
      m = h, w = d;
      const R = p;
      p = y, y = R, g = v;
    }
    g || (g = Ke, se(m, o, g));
    const x = ie(m * 2, a), T = t(g, x, p, r + 1, i + m / ce);
    let A;
    if (T === ds) {
      const R = b(m), P = E(m) - R;
      A = s(R, P, !0, r + 1, i + m / ce, g);
    } else
      A = T && kn(
        m,
        e,
        t,
        s,
        n,
        i,
        r + 1
      );
    if (A) return !0;
    v = dt, se(w, o, v);
    const M = ie(w * 2, a), _ = t(v, M, y, r + 1, i + w / ce);
    let S;
    if (_ === ds) {
      const R = b(w), P = E(w) - R;
      S = s(R, P, !0, r + 1, i + w / ce, v);
    } else
      S = _ && kn(
        w,
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
const Bt = /* @__PURE__ */ new ee.constructor(), an = /* @__PURE__ */ new ee.constructor(), Ge = /* @__PURE__ */ new Qn(() => new Ie()), rt = /* @__PURE__ */ new Ie(), it = /* @__PURE__ */ new Ie(), Tn = /* @__PURE__ */ new Ie(), wn = /* @__PURE__ */ new Ie();
let _n = !1;
function _i(c, e, t, s) {
  if (_n)
    throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");
  _n = !0;
  const n = c._roots, i = e._roots;
  let r, o = 0, a = 0;
  const u = new Ae().copy(t).invert();
  for (let f = 0, l = n.length; f < l; f++) {
    Bt.setBuffer(n[f]), a = 0;
    const d = Ge.getPrimitive();
    se(0, Bt.float32Array, d), d.applyMatrix4(u);
    for (let h = 0, m = i.length; h < m && (an.setBuffer(i[h]), r = Se(
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
    ), an.clearBuffer(), a += i[h].byteLength / le, !r); h++)
      ;
    if (Ge.releasePrimitive(d), Bt.clearBuffer(), o += n[f].byteLength / le, r)
      break;
  }
  return _n = !1, r;
}
function Se(c, e, t, s, n, i = 0, r = 0, o = 0, a = 0, u = null, f = !1) {
  let l, d;
  f ? (l = an, d = Bt) : (l = Bt, d = an);
  const h = l.float32Array, m = l.uint32Array, w = l.uint16Array, p = d.float32Array, y = d.uint32Array, g = d.uint16Array, v = c * 2, x = e * 2, T = ie(v, w), A = ie(x, g);
  let M = !1;
  if (A && T)
    f ? M = n(
      pe(e, y),
      xe(e * 2, g),
      pe(c, m),
      xe(c * 2, w),
      a,
      r + e / ce,
      o,
      i + c / ce
    ) : M = n(
      pe(c, m),
      xe(c * 2, w),
      pe(e, y),
      xe(e * 2, g),
      o,
      i + c / ce,
      a,
      r + e / ce
    );
  else if (A) {
    const _ = Ge.getPrimitive();
    se(e, p, _), _.applyMatrix4(t);
    const S = ue(c), b = fe(c, m);
    se(S, h, rt), se(b, h, it);
    const E = _.intersectsBox(rt), R = _.intersectsBox(it);
    M = E && Se(
      e,
      S,
      s,
      t,
      n,
      r,
      i,
      a,
      o + 1,
      _,
      !f
    ) || R && Se(
      e,
      b,
      s,
      t,
      n,
      r,
      i,
      a,
      o + 1,
      _,
      !f
    ), Ge.releasePrimitive(_);
  } else {
    const _ = ue(e), S = fe(e, y);
    se(_, p, Tn), se(S, p, wn);
    const b = u.intersectsBox(Tn), E = u.intersectsBox(wn);
    if (b && E)
      M = Se(
        c,
        _,
        t,
        s,
        n,
        i,
        r,
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
        i,
        r,
        o,
        a + 1,
        u,
        f
      );
    else if (b)
      if (T)
        M = Se(
          c,
          _,
          t,
          s,
          n,
          i,
          r,
          o,
          a + 1,
          u,
          f
        );
      else {
        const R = Ge.getPrimitive();
        R.copy(Tn).applyMatrix4(t);
        const I = ue(c), P = fe(c, m);
        se(I, h, rt), se(P, h, it);
        const C = R.intersectsBox(rt), L = R.intersectsBox(it);
        M = C && Se(
          _,
          I,
          s,
          t,
          n,
          r,
          i,
          a,
          o + 1,
          R,
          !f
        ) || L && Se(
          _,
          P,
          s,
          t,
          n,
          r,
          i,
          a,
          o + 1,
          R,
          !f
        ), Ge.releasePrimitive(R);
      }
    else if (E)
      if (T)
        M = Se(
          c,
          S,
          t,
          s,
          n,
          i,
          r,
          o,
          a + 1,
          u,
          f
        );
      else {
        const R = Ge.getPrimitive();
        R.copy(wn).applyMatrix4(t);
        const I = ue(c), P = fe(c, m);
        se(I, h, rt), se(P, h, it);
        const C = R.intersectsBox(rt), L = R.intersectsBox(it);
        M = C && Se(
          S,
          I,
          s,
          t,
          n,
          r,
          i,
          a,
          o + 1,
          R,
          !f
        ) || L && Se(
          S,
          P,
          s,
          t,
          n,
          r,
          i,
          a,
          o + 1,
          R,
          !f
        ), Ge.releasePrimitive(R);
      }
  }
  return M;
}
const xs = /* @__PURE__ */ new Ie(), ot = /* @__PURE__ */ new Float32Array(6);
class Mi {
  constructor() {
    this._roots = null, this.primitiveBuffer = null, this.primitiveBufferStride = null;
  }
  init(e) {
    e = {
      ...rr,
      ...e
    }, vi(this, e);
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
    let i = 1 / 0, r = 1 / 0, o = 1 / 0, a = -1 / 0, u = -1 / 0, f = -1 / 0;
    for (let l = e, d = e + t; l < d; l++) {
      this.writePrimitiveBounds(l, ot, 0);
      const [h, m, w, p, y, g] = ot;
      h < i && (i = h), p > a && (a = p), m < r && (r = m), y > u && (u = y), w < o && (o = w), g > f && (f = g);
    }
    return s[n + 0] = i, s[n + 1] = r, s[n + 2] = o, s[n + 3] = a, s[n + 4] = u, s[n + 5] = f, s;
  }
  computePrimitiveBounds(e, t, s) {
    const n = s.offset || 0;
    for (let i = e, r = e + t; i < r; i++) {
      this.writePrimitiveBounds(i, ot, 0);
      const [o, a, u, f, l, d] = ot, h = (o + f) / 2, m = (a + l) / 2, w = (u + d) / 2, p = (f - o) / 2, y = (l - a) / 2, g = (d - u) / 2, v = (i - n) * 6;
      s[v + 0] = h, s[v + 1] = p + (Math.abs(h) + p) * tn, s[v + 2] = m, s[v + 3] = y + (Math.abs(m) + y) * tn, s[v + 4] = w, s[v + 5] = g + (Math.abs(w) + g) * tn;
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
        const i = s[n], r = new Uint32Array(i), o = new Uint16Array(i), a = i.byteLength / le;
        for (let u = 0; u < a; u++) {
          const f = ce * u, l = 2 * f;
          ie(l, o) && (r[f + 6] += e);
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
    function r(o, a = 0) {
      const u = o * 2, f = ie(u, i);
      if (f) {
        const l = n[o + 6], d = i[u + 14];
        e(a, f, new Float32Array(s, o * 4, 6), l, d);
      } else {
        const l = ue(o), d = fe(o, n), h = un(o, n);
        e(a, f, new Float32Array(s, o * 4, 6), h) || (r(l, a + 1), r(d, a + 1));
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
      const n = e[t], i = new Uint32Array(n), r = new Uint16Array(n), o = new Float32Array(n), a = n.byteLength / le;
      for (let u = a - 1; u >= 0; u--) {
        const f = u * ce, l = f * 2;
        if (ie(l, r)) {
          const h = pe(f, i), m = xe(l, r);
          this.writePrimitiveRangeBounds(h, m, ot, 0), o.set(ot, f);
        } else {
          const h = ue(f), m = fe(f, i);
          for (let w = 0; w < 3; w++) {
            const p = o[h + w], y = o[h + w + 3], g = o[m + w], v = o[m + w + 3];
            o[f + w] = p < g ? p : g, o[f + w + 3] = y > v ? y : v;
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
      se(0, new Float32Array(s), xs), e.union(xs);
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
      iterate: o
    } = e;
    if (n && i) {
      const l = n;
      n = (d, h, m, w, p) => l(d, h, m, w, p) ? !0 : o(d, h, this, i, m, w, r);
    } else n || (i ? n = (l, d, h, m) => o(l, d, this, i, h, m, r) : n = (l, d, h) => h);
    let a = !1, u = 0;
    const f = this._roots;
    for (let l = 0, d = f.length; l < d; l++) {
      const h = f[l];
      if (a = wi(this, l, s, n, t, u), a)
        break;
      u += h.byteLength / le;
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
    return _i(this, e, t, n);
  }
}
function bi() {
  return typeof SharedArrayBuffer < "u";
}
function fn(c) {
  return c.index ? c.index.count : c.attributes.position.count;
}
function dn(c) {
  return fn(c) / 3;
}
function ar(c, e = ArrayBuffer) {
  return c > 65535 ? new Uint32Array(new e(4 * c)) : new Uint16Array(new e(2 * c));
}
function Ai(c, e) {
  if (!c.index) {
    const t = c.attributes.position.count, s = e.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, n = ar(t, s);
    c.setIndex(new ht(n, 1));
    for (let i = 0; i < t; i++)
      n[i] = i;
  }
}
function Ri(c, e, t) {
  const s = fn(c) / t, n = e || c.drawRange, i = n.start / t, r = (n.start + n.count) / t, o = Math.max(0, i), a = Math.min(s, r) - o;
  return {
    offset: Math.floor(o),
    count: Math.floor(a)
  };
}
function Si(c, e) {
  return c.groups.map((t) => ({
    offset: t.start / e,
    count: t.count / e
  }));
}
function ys(c, e, t) {
  const s = Ri(c, e, t), n = Si(c, t);
  if (!n.length)
    return [s];
  const i = [], r = s.offset, o = s.offset + s.count, a = fn(c) / t, u = [];
  for (const d of n) {
    const { offset: h, count: m } = d, w = h, p = isFinite(m) ? m : a - h, y = h + p;
    w < o && y > r && (u.push({ pos: Math.max(r, w), isStart: !0 }), u.push({ pos: Math.min(o, y), isStart: !1 }));
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
function Ei(c, e) {
  const t = c[c.length - 1], s = t.offset + t.count > 2 ** 16, n = c.reduce((u, f) => u + f.count, 0), i = s ? 4 : 2, r = e ? new SharedArrayBuffer(n * i) : new ArrayBuffer(n * i), o = s ? new Uint32Array(r) : new Uint16Array(r);
  let a = 0;
  for (let u = 0; u < c.length; u++) {
    const { offset: f, count: l } = c[u];
    for (let d = 0; d < l; d++)
      o[a + d] = f + d;
    a += l;
  }
  return o;
}
class Ii extends Mi {
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
    if (t.useSharedArrayBuffer && !bi())
      throw new Error("BVH: SharedArrayBuffer is not available.");
    super(), this.geometry = e, this.resolvePrimitiveIndex = t.indirect ? (s) => this._indirectBuffer[s] : (s) => s, this.primitiveBuffer = null, this.primitiveBufferStride = null, this._indirectBuffer = null, t = {
      ...rr,
      ...t
    }, t[Zn] || this.init(t);
  }
  init(e) {
    const { geometry: t, primitiveStride: s } = this;
    if (e.indirect) {
      const n = ys(t, e.range, s), i = Ei(n, e.useSharedArrayBuffer);
      this._indirectBuffer = i;
    } else
      Ai(t, e);
    super.init(e), !t.boundingBox && e.setBoundingBox && (t.boundingBox = this.getBoundingBox(new Ie()));
  }
  // Abstract methods to be implemented by subclasses
  getRootRanges(e) {
    return this.indirect ? [{ offset: 0, count: this._indirectBuffer.length }] : ys(this.geometry, e, this.primitiveStride);
  }
  raycastObject3D() {
    throw new Error("BVH: raycastObject3D() not implemented");
  }
}
class ke {
  constructor() {
    this.min = 1 / 0, this.max = -1 / 0;
  }
  setFromPointsField(e, t) {
    let s = 1 / 0, n = -1 / 0;
    for (let i = 0, r = e.length; i < r; i++) {
      const a = e[i][t];
      s = a < s ? a : s, n = a > n ? a : n;
    }
    this.min = s, this.max = n;
  }
  setFromPoints(e, t) {
    let s = 1 / 0, n = -1 / 0;
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i], a = e.dot(o);
      s = a < s ? a : s, n = a > n ? a : n;
    }
    this.min = s, this.max = n;
  }
  isSeparated(e) {
    return this.min > e.max || e.min > this.max;
  }
}
ke.prototype.setFromBox = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U();
  return function(t, s) {
    const n = s.min, i = s.max;
    let r = 1 / 0, o = -1 / 0;
    for (let a = 0; a <= 1; a++)
      for (let u = 0; u <= 1; u++)
        for (let f = 0; f <= 1; f++) {
          c.x = n.x * a + i.x * (1 - a), c.y = n.y * u + i.y * (1 - u), c.z = n.z * f + i.z * (1 - f);
          const l = t.dot(c);
          r = Math.min(l, r), o = Math.max(l, o);
        }
    this.min = r, this.max = o;
  };
})();
const Di = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new U();
  return function(n, i, r) {
    const o = n.start, a = c, u = i.start, f = e;
    t.subVectors(o, u), c.subVectors(n.end, n.start), e.subVectors(i.end, i.start);
    const l = t.dot(f), d = f.dot(a), h = f.dot(f), m = t.dot(a), p = a.dot(a) * h - d * d;
    let y, g;
    p !== 0 ? y = (l * d - m * h) / p : y = 0, g = (l + y * d) / h, r.x = y, r.y = g;
  };
})(), es = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Ce(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new U();
  return function(n, i, r, o) {
    Di(n, i, c);
    let a = c.x, u = c.y;
    if (a >= 0 && a <= 1 && u >= 0 && u <= 1) {
      n.at(a, r), i.at(u, o);
      return;
    } else if (a >= 0 && a <= 1) {
      u < 0 ? i.at(0, o) : i.at(1, o), n.closestPointToPoint(o, !0, r);
      return;
    } else if (u >= 0 && u <= 1) {
      a < 0 ? n.at(0, r) : n.at(1, r), i.closestPointToPoint(r, !0, o);
      return;
    } else {
      let f;
      a < 0 ? f = n.start : f = n.end;
      let l;
      u < 0 ? l = i.start : l = i.end;
      const d = e, h = t;
      if (n.closestPointToPoint(l, !0, e), i.closestPointToPoint(f, !0, t), d.distanceToSquared(l) <= h.distanceToSquared(f)) {
        r.copy(d), o.copy(l);
        return;
      } else {
        r.copy(f), o.copy(h);
        return;
      }
    }
  };
})(), Pi = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new Ws(), s = /* @__PURE__ */ new Oe();
  return function(i, r) {
    const { radius: o, center: a } = i, { a: u, b: f, c: l } = r;
    if (s.start = u, s.end = f, s.closestPointToPoint(a, !0, c).distanceTo(a) <= o || (s.start = u, s.end = l, s.closestPointToPoint(a, !0, c).distanceTo(a) <= o) || (s.start = f, s.end = l, s.closestPointToPoint(a, !0, c).distanceTo(a) <= o)) return !0;
    const w = r.getPlane(t);
    if (Math.abs(w.distanceToPoint(a)) <= o) {
      const y = w.projectPoint(a, e);
      if (r.containsPoint(y)) return !0;
    }
    return !1;
  };
})(), Ci = ["x", "y", "z"], Fe = 1e-15, vs = Fe * Fe;
function we(c) {
  return Math.abs(c) < Fe;
}
class Ee extends ft {
  constructor(...e) {
    super(...e), this.isExtendedTriangle = !0, this.satAxes = new Array(4).fill().map(() => new U()), this.satBounds = new Array(4).fill().map(() => new ke()), this.points = [this.a, this.b, this.c], this.plane = new Ws(), this.isDegenerateIntoSegment = !1, this.isDegenerateIntoPoint = !1, this.degenerateSegment = new Oe(), this.needsUpdate = !0;
  }
  /**
   * Returns whether the triangle intersects the given sphere.
   * @param {Sphere} sphere
   * @returns {boolean}
   */
  intersectsSphere(e) {
    return Pi(e, this);
  }
  update() {
    const e = this.a, t = this.b, s = this.c, n = this.points, i = this.satAxes, r = this.satBounds, o = i[0], a = r[0];
    this.getNormal(o), a.setFromPoints(o, n);
    const u = i[1], f = r[1];
    u.subVectors(e, t), f.setFromPoints(u, n);
    const l = i[2], d = r[2];
    l.subVectors(t, s), d.setFromPoints(l, n);
    const h = i[3], m = r[3];
    h.subVectors(s, e), m.setFromPoints(h, n);
    const w = u.length(), p = l.length(), y = h.length();
    this.isDegenerateIntoPoint = !1, this.isDegenerateIntoSegment = !1, w < Fe ? p < Fe || y < Fe ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(e), this.degenerateSegment.end.copy(s)) : p < Fe ? y < Fe ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(t), this.degenerateSegment.end.copy(e)) : y < Fe && (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(s), this.degenerateSegment.end.copy(t)), this.plane.setFromNormalAndCoplanarPoint(o, e), this.needsUpdate = !1;
  }
}
Ee.prototype.closestPointToSegment = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new Oe();
  return function(n, i = null, r = null) {
    const { start: o, end: a } = n, u = this.points;
    let f, l = 1 / 0;
    for (let d = 0; d < 3; d++) {
      const h = (d + 1) % 3;
      t.start.copy(u[d]), t.end.copy(u[h]), es(t, n, c, e), f = c.distanceToSquared(e), f < l && (l = f, i && i.copy(c), r && r.copy(e));
    }
    return this.closestPointToPoint(o, c), f = o.distanceToSquared(c), f < l && (l = f, i && i.copy(c), r && r.copy(o)), this.closestPointToPoint(a, c), f = a.distanceToSquared(c), f < l && (l = f, i && i.copy(c), r && r.copy(a)), Math.sqrt(l);
  };
})();
Ee.prototype.intersectsTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Ee(), e = /* @__PURE__ */ new ke(), t = /* @__PURE__ */ new ke(), s = /* @__PURE__ */ new U(), n = /* @__PURE__ */ new U(), i = /* @__PURE__ */ new U(), r = /* @__PURE__ */ new U(), o = /* @__PURE__ */ new Oe(), a = /* @__PURE__ */ new Oe(), u = /* @__PURE__ */ new U(), f = /* @__PURE__ */ new Ce(), l = /* @__PURE__ */ new Ce();
  function d(v, x, T, A) {
    const M = s;
    !v.isDegenerateIntoPoint && !v.isDegenerateIntoSegment ? M.copy(v.plane.normal) : M.copy(x.plane.normal);
    const _ = v.satBounds, S = v.satAxes;
    for (let R = 1; R < 4; R++) {
      const I = _[R], P = S[R];
      if (e.setFromPoints(P, x.points), I.isSeparated(e) || (r.copy(M).cross(P), e.setFromPoints(r, v.points), t.setFromPoints(r, x.points), e.isSeparated(t))) return !1;
    }
    const b = x.satBounds, E = x.satAxes;
    for (let R = 1; R < 4; R++) {
      const I = b[R], P = E[R];
      if (e.setFromPoints(P, v.points), I.isSeparated(e) || (r.crossVectors(M, P), e.setFromPoints(r, v.points), t.setFromPoints(r, x.points), e.isSeparated(t))) return !1;
    }
    return T && (A || console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."), T.start.set(0, 0, 0), T.end.set(0, 0, 0)), !0;
  }
  function h(v, x, T, A, M, _, S, b, E, R, I) {
    let P = S / (S - b);
    R.x = A + (M - A) * P, I.start.subVectors(x, v).multiplyScalar(P).add(v), P = S / (S - E), R.y = A + (_ - A) * P, I.end.subVectors(T, v).multiplyScalar(P).add(v);
  }
  function m(v, x, T, A, M, _, S, b, E, R, I) {
    if (M > 0)
      h(v.c, v.a, v.b, A, x, T, E, S, b, R, I);
    else if (_ > 0)
      h(v.b, v.a, v.c, T, x, A, b, S, E, R, I);
    else if (b * E > 0 || S != 0)
      h(v.a, v.b, v.c, x, T, A, S, b, E, R, I);
    else if (b != 0)
      h(v.b, v.a, v.c, T, x, A, b, S, E, R, I);
    else if (E != 0)
      h(v.c, v.a, v.b, A, x, T, E, S, b, R, I);
    else
      return !0;
    return !1;
  }
  function w(v, x, T, A) {
    const M = x.degenerateSegment, _ = v.plane.distanceToPoint(M.start), S = v.plane.distanceToPoint(M.end);
    return we(_) ? we(S) ? d(v, x, T, A) : (T && (T.start.copy(M.start), T.end.copy(M.start)), v.containsPoint(M.start)) : we(S) ? (T && (T.start.copy(M.end), T.end.copy(M.end)), v.containsPoint(M.end)) : v.plane.intersectLine(M, s) != null ? (T && (T.start.copy(s), T.end.copy(s)), v.containsPoint(s)) : !1;
  }
  function p(v, x, T) {
    const A = x.a;
    return we(v.plane.distanceToPoint(A)) && v.containsPoint(A) ? (T && (T.start.copy(A), T.end.copy(A)), !0) : !1;
  }
  function y(v, x, T) {
    const A = v.degenerateSegment, M = x.a;
    return A.closestPointToPoint(M, !0, s), M.distanceToSquared(s) < vs ? (T && (T.start.copy(M), T.end.copy(M)), !0) : !1;
  }
  function g(v, x, T, A) {
    if (v.isDegenerateIntoSegment)
      if (x.isDegenerateIntoSegment) {
        const M = v.degenerateSegment, _ = x.degenerateSegment, S = n, b = i;
        M.delta(S), _.delta(b);
        const E = s.subVectors(_.start, M.start), R = S.x * b.y - S.y * b.x;
        if (we(R))
          return !1;
        const I = (E.x * b.y - E.y * b.x) / R, P = -(S.x * E.y - S.y * E.x) / R;
        if (I < 0 || I > 1 || P < 0 || P > 1)
          return !1;
        const C = M.start.z + S.z * I, L = _.start.z + b.z * P;
        return we(C - L) ? (T && (T.start.copy(M.start).addScaledVector(S, I), T.end.copy(M.start).addScaledVector(S, I)), !0) : !1;
      } else return x.isDegenerateIntoPoint ? y(v, x, T) : w(x, v, T, A);
    else {
      if (v.isDegenerateIntoPoint)
        return x.isDegenerateIntoPoint ? x.a.distanceToSquared(v.a) < vs ? (T && (T.start.copy(v.a), T.end.copy(v.a)), !0) : !1 : x.isDegenerateIntoSegment ? y(x, v, T) : p(x, v, T);
      if (x.isDegenerateIntoPoint)
        return p(v, x, T);
      if (x.isDegenerateIntoSegment)
        return w(v, x, T, A);
    }
  }
  return function(x, T = null, A = !1) {
    this.needsUpdate && this.update(), x.isExtendedTriangle ? x.needsUpdate && x.update() : (c.copy(x), c.update(), x = c);
    const M = g(this, x, T, A);
    if (M !== void 0)
      return M;
    const _ = this.plane, S = x.plane;
    let b = S.distanceToPoint(this.a), E = S.distanceToPoint(this.b), R = S.distanceToPoint(this.c);
    we(b) && (b = 0), we(E) && (E = 0), we(R) && (R = 0);
    const I = b * E, P = b * R;
    if (I > 0 && P > 0)
      return !1;
    let C = _.distanceToPoint(x.a), L = _.distanceToPoint(x.b), O = _.distanceToPoint(x.c);
    we(C) && (C = 0), we(L) && (L = 0), we(O) && (O = 0);
    const X = C * L, ne = C * O;
    if (X > 0 && ne > 0)
      return !1;
    n.copy(_.normal), i.copy(S.normal);
    const j = n.cross(i);
    let D = 0, N = Math.abs(j.x);
    const k = Math.abs(j.y);
    k > N && (N = k, D = 1), Math.abs(j.z) > N && (D = 2);
    const de = Ci[D], he = this.a[de], H = this.b[de], K = this.c[de], q = x.a[de], J = x.b[de], ve = x.c[de];
    if (m(this, he, H, K, I, P, b, E, R, f, o))
      return d(this, x, T, A);
    if (m(x, q, J, ve, X, ne, C, L, O, l, a))
      return d(this, x, T, A);
    if (f.y < f.x) {
      const Re = f.y;
      f.y = f.x, f.x = Re, u.copy(o.start), o.start.copy(o.end), o.end.copy(u);
    }
    if (l.y < l.x) {
      const Re = l.y;
      l.y = l.x, l.x = Re, u.copy(a.start), a.start.copy(a.end), a.end.copy(u);
    }
    return f.y < l.x || l.y < f.x ? !1 : (T && (l.x > f.x ? T.start.copy(a.start) : T.start.copy(o.start), l.y < f.y ? T.end.copy(a.end) : T.end.copy(o.end)), !0);
  };
})();
Ee.prototype.distanceToPoint = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U();
  return function(t) {
    return this.closestPointToPoint(t, c), t.distanceTo(c);
  };
})();
Ee.prototype.distanceToTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new U(), e = /* @__PURE__ */ new U(), t = ["a", "b", "c"], s = /* @__PURE__ */ new Oe(), n = /* @__PURE__ */ new Oe();
  return function(r, o = null, a = null) {
    const u = o || a ? s : null;
    if (this.intersectsTriangle(r, u, !0))
      return (o || a) && (o && u.getCenter(o), a && u.getCenter(a)), 0;
    let f = 1 / 0;
    for (let l = 0; l < 3; l++) {
      let d;
      const h = t[l], m = r[h];
      this.closestPointToPoint(m, c), d = m.distanceToSquared(c), d < f && (f = d, o && o.copy(c), a && a.copy(m));
      const w = this[h];
      r.closestPointToPoint(w, c), d = w.distanceToSquared(c), d < f && (f = d, o && o.copy(w), a && a.copy(c));
    }
    for (let l = 0; l < 3; l++) {
      const d = t[l], h = t[(l + 1) % 3];
      s.set(this[d], this[h]);
      for (let m = 0; m < 3; m++) {
        const w = t[m], p = t[(m + 1) % 3];
        n.set(r[w], r[p]), es(s, n, c, e);
        const y = c.distanceToSquared(e);
        y < f && (f = y, o && o.copy(c), a && a.copy(e));
      }
    }
    return Math.sqrt(f);
  };
})();
class ye {
  constructor(e, t, s) {
    this.isOrientedBox = !0, this.min = new U(), this.max = new U(), this.matrix = new Ae(), this.invMatrix = new Ae(), this.points = new Array(8).fill().map(() => new U()), this.satAxes = new Array(3).fill().map(() => new U()), this.satBounds = new Array(3).fill().map(() => new ke()), this.alignedSatBounds = new Array(3).fill().map(() => new ke()), this.needsUpdate = !1, e && this.min.copy(e), t && this.max.copy(t), s && this.matrix.copy(s);
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
    const i = this.satBounds, r = this.satAxes, o = n[0];
    for (let u = 0; u < 3; u++) {
      const f = r[u], l = i[u], d = 1 << u, h = n[d];
      f.subVectors(o, h), l.setFromPoints(f, n);
    }
    const a = this.alignedSatBounds;
    a[0].setFromPointsField(n, "x"), a[1].setFromPointsField(n, "y"), a[2].setFromPointsField(n, "z"), this.invMatrix.copy(this.matrix).invert(), this.needsUpdate = !1;
  };
})();
ye.prototype.intersectsBox = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new ke();
  return function(t) {
    this.needsUpdate && this.update();
    const s = t.min, n = t.max, i = this.satBounds, r = this.satAxes, o = this.alignedSatBounds;
    if (c.min = s.x, c.max = n.x, o[0].isSeparated(c) || (c.min = s.y, c.max = n.y, o[1].isSeparated(c)) || (c.min = s.z, c.max = n.z, o[2].isSeparated(c))) return !1;
    for (let a = 0; a < 3; a++) {
      const u = r[a], f = i[a];
      if (c.setFromBox(u, t), f.isSeparated(c)) return !1;
    }
    return !0;
  };
})();
ye.prototype.intersectsTriangle = /* @__PURE__ */ (function() {
  const c = /* @__PURE__ */ new Ee(), e = /* @__PURE__ */ new Array(3), t = /* @__PURE__ */ new ke(), s = /* @__PURE__ */ new ke(), n = /* @__PURE__ */ new U();
  return function(r) {
    this.needsUpdate && this.update(), r.isExtendedTriangle ? r.needsUpdate && r.update() : (c.copy(r), c.update(), r = c);
    const o = this.satBounds, a = this.satAxes;
    e[0] = r.a, e[1] = r.b, e[2] = r.c;
    for (let d = 0; d < 3; d++) {
      const h = o[d], m = a[d];
      if (t.setFromPoints(m, e), h.isSeparated(t)) return !1;
    }
    const u = r.satBounds, f = r.satAxes, l = this.points;
    for (let d = 0; d < 3; d++) {
      const h = u[d], m = f[d];
      if (t.setFromPoints(m, l), h.isSeparated(t)) return !1;
    }
    for (let d = 0; d < 3; d++) {
      const h = a[d];
      for (let m = 0; m < 4; m++) {
        const w = f[m];
        if (n.crossVectors(h, w), t.setFromPoints(n, e), s.setFromPoints(n, l), t.isSeparated(s)) return !1;
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
  const c = ["x", "y", "z"], e = /* @__PURE__ */ new Array(12).fill().map(() => new Oe()), t = /* @__PURE__ */ new Array(12).fill().map(() => new Oe()), s = /* @__PURE__ */ new U(), n = /* @__PURE__ */ new U();
  return function(r, o = 0, a = null, u = null) {
    if (this.needsUpdate && this.update(), this.intersectsBox(r))
      return (a || u) && (r.getCenter(n), this.closestPointToPoint(n, s), r.closestPointToPoint(s, n), a && a.copy(s), u && u.copy(n)), 0;
    const f = o * o, l = r.min, d = r.max, h = this.points;
    let m = 1 / 0;
    for (let p = 0; p < 8; p++) {
      const y = h[p];
      n.copy(y).clamp(l, d);
      const g = y.distanceToSquared(n);
      if (g < m && (m = g, a && a.copy(y), u && u.copy(n), g < f))
        return Math.sqrt(g);
    }
    let w = 0;
    for (let p = 0; p < 3; p++)
      for (let y = 0; y <= 1; y++)
        for (let g = 0; g <= 1; g++) {
          const v = (p + 1) % 3, x = (p + 2) % 3, T = y << v | g << x, A = 1 << p | y << v | g << x, M = h[T], _ = h[A];
          e[w].set(M, _);
          const b = c[p], E = c[v], R = c[x], I = t[w], P = I.start, C = I.end;
          P[b] = l[b], P[E] = y ? l[E] : d[E], P[R] = g ? l[R] : d[E], C[b] = d[b], C[E] = y ? l[E] : d[E], C[R] = g ? l[R] : d[E], w++;
        }
    for (let p = 0; p <= 1; p++)
      for (let y = 0; y <= 1; y++)
        for (let g = 0; g <= 1; g++) {
          n.x = p ? d.x : l.x, n.y = y ? d.y : l.y, n.z = g ? d.z : l.z, this.closestPointToPoint(n, s);
          const v = n.distanceToSquared(s);
          if (v < m && (m = v, a && a.copy(s), u && u.copy(n), v < f))
            return Math.sqrt(v);
        }
    for (let p = 0; p < 12; p++) {
      const y = e[p];
      for (let g = 0; g < 12; g++) {
        const v = t[g];
        es(y, v, s, n);
        const x = s.distanceToSquared(n);
        if (x < m && (m = x, a && a.copy(s), u && u.copy(n), x < f))
          return Math.sqrt(x);
      }
    }
    return Math.sqrt(m);
  };
})();
class Bi extends Qn {
  constructor() {
    super(() => new Ee());
  }
}
const be = /* @__PURE__ */ new Bi(), Tt = /* @__PURE__ */ new U(), Mn = /* @__PURE__ */ new U();
function Li(c, e, t = {}, s = 0, n = 1 / 0) {
  const i = s * s, r = n * n;
  let o = 1 / 0, a = null;
  if (c.shapecast(
    {
      boundsTraverseOrder: (f) => (Tt.copy(e).clamp(f.min, f.max), Tt.distanceToSquared(e)),
      intersectsBounds: (f, l, d) => d < o && d < r,
      intersectsTriangle: (f, l) => {
        f.closestPointToPoint(e, Tt);
        const d = e.distanceToSquared(Tt);
        return d < o && (Mn.copy(Tt), o = d, a = l), d < i;
      }
    }
  ), o === 1 / 0) return null;
  const u = Math.sqrt(o);
  return t.point ? t.point.copy(Mn) : t.point = Mn.clone(), t.distance = u, t.faceIndex = a, t;
}
const zt = parseInt(Xs) >= 169, Ni = parseInt(Xs) <= 161, qe = /* @__PURE__ */ new U(), Je = /* @__PURE__ */ new U(), Ze = /* @__PURE__ */ new U(), Gt = /* @__PURE__ */ new Ce(), jt = /* @__PURE__ */ new Ce(), Kt = /* @__PURE__ */ new Ce(), Ts = /* @__PURE__ */ new U(), ws = /* @__PURE__ */ new U(), _s = /* @__PURE__ */ new U(), wt = /* @__PURE__ */ new U();
function Fi(c, e, t, s, n, i, r, o) {
  let a;
  if (i === yr ? a = c.intersectTriangle(s, t, e, !0, n) : a = c.intersectTriangle(e, t, s, i !== Ys, n), a === null) return null;
  const u = c.origin.distanceTo(n);
  return u < r || u > o ? null : {
    distance: u,
    point: n.clone()
  };
}
function Ms(c, e, t, s, n, i, r, o, a, u, f) {
  qe.fromBufferAttribute(e, i), Je.fromBufferAttribute(e, r), Ze.fromBufferAttribute(e, o);
  const l = Fi(c, qe, Je, Ze, wt, a, u, f);
  if (l) {
    if (s) {
      Gt.fromBufferAttribute(s, i), jt.fromBufferAttribute(s, r), Kt.fromBufferAttribute(s, o), l.uv = new Ce();
      const h = ft.getInterpolation(wt, qe, Je, Ze, Gt, jt, Kt, l.uv);
      zt || (l.uv = h);
    }
    if (n) {
      Gt.fromBufferAttribute(n, i), jt.fromBufferAttribute(n, r), Kt.fromBufferAttribute(n, o), l.uv1 = new Ce();
      const h = ft.getInterpolation(wt, qe, Je, Ze, Gt, jt, Kt, l.uv1);
      zt || (l.uv1 = h), Ni && (l.uv2 = l.uv1);
    }
    if (t) {
      Ts.fromBufferAttribute(t, i), ws.fromBufferAttribute(t, r), _s.fromBufferAttribute(t, o), l.normal = new U();
      const h = ft.getInterpolation(wt, qe, Je, Ze, Ts, ws, _s, l.normal);
      l.normal.dot(c.direction) > 0 && l.normal.multiplyScalar(-1), zt || (l.normal = h);
    }
    const d = {
      a: i,
      b: r,
      c: o,
      normal: new U(),
      materialIndex: 0
    };
    if (ft.getNormal(qe, Je, Ze, d.normal), l.face = d, l.faceIndex = i, zt) {
      const h = new U();
      ft.getBarycoord(wt, qe, Je, Ze, h), l.barycoord = h;
    }
  }
  return l;
}
function bs(c) {
  return c && c.isMaterial ? c.side : c;
}
function hn(c, e, t, s, n, i, r) {
  const o = s * 3;
  let a = o + 0, u = o + 1, f = o + 2;
  const { index: l, groups: d } = c;
  c.index && (a = l.getX(a), u = l.getX(u), f = l.getX(f));
  const { position: h, normal: m, uv: w, uv1: p } = c.attributes;
  if (Array.isArray(e)) {
    const y = s * 3;
    for (let g = 0, v = d.length; g < v; g++) {
      const { start: x, count: T, materialIndex: A } = d[g];
      if (y >= x && y < x + T) {
        const M = bs(e[A]), _ = Ms(t, h, m, w, p, a, u, f, M, i, r);
        if (_)
          if (_.faceIndex = s, _.face.materialIndex = A, n)
            n.push(_);
          else
            return _;
      }
    }
  } else {
    const y = bs(e), g = Ms(t, h, m, w, p, a, u, f, y, i, r);
    if (g)
      if (g.faceIndex = s, g.face.materialIndex = 0, n)
        n.push(g);
      else
        return g;
  }
  return null;
}
function oe(c, e, t, s) {
  const n = c.a, i = c.b, r = c.c;
  let o = e, a = e + 1, u = e + 2;
  t && (o = t.getX(o), a = t.getX(a), u = t.getX(u)), n.x = s.getX(o), n.y = s.getY(o), n.z = s.getZ(o), i.x = s.getX(a), i.y = s.getY(a), i.z = s.getZ(a), r.x = s.getX(u), r.y = s.getY(u), r.z = s.getZ(u);
}
function Ui(c, e, t, s, n, i, r, o) {
  const { geometry: a, _indirectBuffer: u } = c;
  for (let f = s, l = s + n; f < l; f++)
    hn(a, e, t, f, i, r, o);
}
function Oi(c, e, t, s, n, i, r) {
  const { geometry: o, _indirectBuffer: a } = c;
  let u = 1 / 0, f = null;
  for (let l = s, d = s + n; l < d; l++) {
    let h;
    h = hn(o, e, t, l, null, i, r), h && h.distance < u && (f = h, u = h.distance);
  }
  return f;
}
function ki(c, e, t, s, n, i, r) {
  const { geometry: o } = t, { index: a } = o, u = o.attributes.position;
  for (let f = c, l = e + c; f < l; f++) {
    let d;
    if (d = f, oe(r, d * 3, a, u), r.needsUpdate = !0, s(r, d, n, i))
      return !0;
  }
  return !1;
}
function Hi(c, e = null) {
  e && Array.isArray(e) && (e = new Set(e));
  const t = c.geometry, s = t.index ? t.index.array : null, n = t.attributes.position;
  let i, r, o, a, u = 0;
  const f = c._roots;
  for (let d = 0, h = f.length; d < h; d++)
    i = f[d], r = new Uint32Array(i), o = new Uint16Array(i), a = new Float32Array(i), l(0, u), u += i.byteLength;
  function l(d, h, m = !1) {
    const w = d * 2;
    if (ie(w, o)) {
      const p = pe(d, r), y = xe(w, o);
      let g = 1 / 0, v = 1 / 0, x = 1 / 0, T = -1 / 0, A = -1 / 0, M = -1 / 0;
      for (let _ = 3 * p, S = 3 * (p + y); _ < S; _++) {
        let b = s[_];
        const E = n.getX(b), R = n.getY(b), I = n.getZ(b);
        E < g && (g = E), E > T && (T = E), R < v && (v = R), R > A && (A = R), I < x && (x = I), I > M && (M = I);
      }
      return a[d + 0] !== g || a[d + 1] !== v || a[d + 2] !== x || a[d + 3] !== T || a[d + 4] !== A || a[d + 5] !== M ? (a[d + 0] = g, a[d + 1] = v, a[d + 2] = x, a[d + 3] = T, a[d + 4] = A, a[d + 5] = M, !0) : !1;
    } else {
      const p = ue(d), y = fe(d, r);
      let g = m, v = !1, x = !1;
      if (e) {
        if (!g) {
          const b = p / ce + h / le, E = y / ce + h / le;
          v = e.has(b), x = e.has(E), g = !v && !x;
        }
      } else
        v = !0, x = !0;
      const T = g || v, A = g || x;
      let M = !1;
      T && (M = l(p, h, g));
      let _ = !1;
      A && (_ = l(y, h, g));
      const S = M || _;
      if (S)
        for (let b = 0; b < 3; b++) {
          const E = p + b, R = y + b, I = a[E], P = a[E + 3], C = a[R], L = a[R + 3];
          a[d + b] = I < C ? I : C, a[d + b + 3] = P > L ? P : L;
        }
      return S;
    }
  }
}
function Ye(c, e, t, s, n) {
  let i, r, o, a, u, f;
  const l = 1 / t.direction.x, d = 1 / t.direction.y, h = 1 / t.direction.z, m = t.origin.x, w = t.origin.y, p = t.origin.z;
  let y = e[c], g = e[c + 3], v = e[c + 1], x = e[c + 3 + 1], T = e[c + 2], A = e[c + 3 + 2];
  return l >= 0 ? (i = (y - m) * l, r = (g - m) * l) : (i = (g - m) * l, r = (y - m) * l), d >= 0 ? (o = (v - w) * d, a = (x - w) * d) : (o = (x - w) * d, a = (v - w) * d), i > a || o > r || ((o > i || isNaN(i)) && (i = o), (a < r || isNaN(r)) && (r = a), h >= 0 ? (u = (T - p) * h, f = (A - p) * h) : (u = (A - p) * h, f = (T - p) * h), i > f || u > r) ? !1 : ((u > i || i !== i) && (i = u), (f < r || r !== r) && (r = f), i <= n && r >= s);
}
function Vi(c, e, t, s, n, i, r, o) {
  const { geometry: a, _indirectBuffer: u } = c;
  for (let f = s, l = s + n; f < l; f++) {
    let d = u ? u[f] : f;
    hn(a, e, t, d, i, r, o);
  }
}
function zi(c, e, t, s, n, i, r) {
  const { geometry: o, _indirectBuffer: a } = c;
  let u = 1 / 0, f = null;
  for (let l = s, d = s + n; l < d; l++) {
    let h;
    h = hn(o, e, t, a ? a[l] : l, null, i, r), h && h.distance < u && (f = h, u = h.distance);
  }
  return f;
}
function Gi(c, e, t, s, n, i, r) {
  const { geometry: o } = t, { index: a } = o, u = o.attributes.position;
  for (let f = c, l = e + c; f < l; f++) {
    let d;
    if (d = t.resolveTriangleIndex(f), oe(r, d * 3, a, u), r.needsUpdate = !0, s(r, d, n, i))
      return !0;
  }
  return !1;
}
function ji(c, e, t, s, n, i, r) {
  ee.setBuffer(c._roots[e]), Hn(0, c, t, s, n, i, r), ee.clearBuffer();
}
function Hn(c, e, t, s, n, i, r) {
  const { float32Array: o, uint16Array: a, uint32Array: u } = ee, f = c * 2;
  if (ie(f, a)) {
    const d = pe(c, u), h = xe(f, a);
    Ui(e, t, s, d, h, n, i, r);
  } else {
    const d = ue(c);
    Ye(d, o, s, i, r) && Hn(d, e, t, s, n, i, r);
    const h = fe(c, u);
    Ye(h, o, s, i, r) && Hn(h, e, t, s, n, i, r);
  }
}
const Ki = ["x", "y", "z"];
function Wi(c, e, t, s, n, i) {
  ee.setBuffer(c._roots[e]);
  const r = Vn(0, c, t, s, n, i);
  return ee.clearBuffer(), r;
}
function Vn(c, e, t, s, n, i) {
  const { float32Array: r, uint16Array: o, uint32Array: a } = ee;
  let u = c * 2;
  if (ie(u, o)) {
    const l = pe(c, a), d = xe(u, o);
    return Oi(e, t, s, l, d, n, i);
  } else {
    const l = un(c, a), d = Ki[l], m = s.direction[d] >= 0;
    let w, p;
    m ? (w = ue(c), p = fe(c, a)) : (w = fe(c, a), p = ue(c));
    const g = Ye(w, r, s, n, i) ? Vn(w, e, t, s, n, i) : null;
    if (g) {
      const T = g.point[d];
      if (m ? T <= r[p + l] : (
        // min bounding data
        T >= r[p + l + 3]
      ))
        return g;
    }
    const x = Ye(p, r, s, n, i) ? Vn(p, e, t, s, n, i) : null;
    return g && x ? g.distance <= x.distance ? g : x : g || x || null;
  }
}
const Wt = /* @__PURE__ */ new Ie(), at = /* @__PURE__ */ new Ee(), ct = /* @__PURE__ */ new Ee(), _t = /* @__PURE__ */ new Ae(), As = /* @__PURE__ */ new ye(), Yt = /* @__PURE__ */ new ye();
function Yi(c, e, t, s) {
  ee.setBuffer(c._roots[e]);
  const n = zn(0, c, t, s);
  return ee.clearBuffer(), n;
}
function zn(c, e, t, s, n = null) {
  const { float32Array: i, uint16Array: r, uint32Array: o } = ee;
  let a = c * 2;
  if (n === null && (t.boundingBox || t.computeBoundingBox(), As.set(t.boundingBox.min, t.boundingBox.max, s), n = As), ie(a, r)) {
    const f = e.geometry, l = f.index, d = f.attributes.position, h = t.index, m = t.attributes.position, w = pe(c, o), p = xe(a, r);
    if (_t.copy(s).invert(), t.boundsTree)
      return se(c, i, Yt), Yt.matrix.copy(_t), Yt.needsUpdate = !0, t.boundsTree.shapecast({
        intersectsBounds: (g) => Yt.intersectsBox(g),
        intersectsTriangle: (g) => {
          g.a.applyMatrix4(s), g.b.applyMatrix4(s), g.c.applyMatrix4(s), g.needsUpdate = !0;
          for (let v = w * 3, x = (p + w) * 3; v < x; v += 3)
            if (oe(ct, v, l, d), ct.needsUpdate = !0, g.intersectsTriangle(ct))
              return !0;
          return !1;
        }
      });
    {
      const y = dn(t);
      for (let g = w * 3, v = (p + w) * 3; g < v; g += 3) {
        oe(at, g, l, d), at.a.applyMatrix4(_t), at.b.applyMatrix4(_t), at.c.applyMatrix4(_t), at.needsUpdate = !0;
        for (let x = 0, T = y * 3; x < T; x += 3)
          if (oe(ct, x, h, m), ct.needsUpdate = !0, at.intersectsTriangle(ct))
            return !0;
      }
    }
  } else {
    const f = ue(c), l = fe(c, o);
    return se(f, i, Wt), !!(n.intersectsBox(Wt) && zn(f, e, t, s, n) || (se(l, i, Wt), n.intersectsBox(Wt) && zn(l, e, t, s, n)));
  }
}
const Xt = /* @__PURE__ */ new Ae(), bn = /* @__PURE__ */ new ye(), Mt = /* @__PURE__ */ new ye(), Xi = /* @__PURE__ */ new U(), $i = /* @__PURE__ */ new U(), qi = /* @__PURE__ */ new U(), Ji = /* @__PURE__ */ new U();
function Zi(c, e, t, s = {}, n = {}, i = 0, r = 1 / 0) {
  e.boundingBox || e.computeBoundingBox(), bn.set(e.boundingBox.min, e.boundingBox.max, t), bn.needsUpdate = !0;
  const o = c.geometry, a = o.attributes.position, u = o.index, f = e.attributes.position, l = e.index, d = be.getPrimitive(), h = be.getPrimitive();
  let m = Xi, w = $i, p = null, y = null;
  n && (p = qi, y = Ji);
  let g = 1 / 0, v = null, x = null;
  return Xt.copy(t).invert(), Mt.matrix.copy(Xt), c.shapecast(
    {
      boundsTraverseOrder: (T) => bn.distanceToBox(T),
      intersectsBounds: (T, A, M) => M < g && M < r ? (A && (Mt.min.copy(T.min), Mt.max.copy(T.max), Mt.needsUpdate = !0), !0) : !1,
      intersectsRange: (T, A) => {
        if (e.boundsTree)
          return e.boundsTree.shapecast({
            boundsTraverseOrder: (_) => Mt.distanceToBox(_),
            intersectsBounds: (_, S, b) => b < g && b < r,
            intersectsRange: (_, S) => {
              for (let b = _, E = _ + S; b < E; b++) {
                oe(h, 3 * b, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
                for (let R = T, I = T + A; R < I; R++) {
                  oe(d, 3 * R, u, a), d.needsUpdate = !0;
                  const P = d.distanceToTriangle(h, m, p);
                  if (P < g && (w.copy(m), y && y.copy(p), g = P, v = R, x = b), P < i)
                    return !0;
                }
              }
            }
          });
        {
          const M = dn(e);
          for (let _ = 0, S = M; _ < S; _++) {
            oe(h, 3 * _, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
            for (let b = T, E = T + A; b < E; b++) {
              oe(d, 3 * b, u, a), d.needsUpdate = !0;
              const R = d.distanceToTriangle(h, m, p);
              if (R < g && (w.copy(m), y && y.copy(p), g = R, v = b, x = _), R < i)
                return !0;
            }
          }
        }
      }
    }
  ), be.releasePrimitive(d), be.releasePrimitive(h), g === 1 / 0 ? null : (s.point ? s.point.copy(w) : s.point = w.clone(), s.distance = g, s.faceIndex = v, n && (n.point ? n.point.copy(y) : n.point = y.clone(), n.point.applyMatrix4(Xt), w.applyMatrix4(Xt), n.distance = w.sub(n.point).length(), n.faceIndex = x), s);
}
function Qi(c, e = null) {
  e && Array.isArray(e) && (e = new Set(e));
  const t = c.geometry, s = t.index ? t.index.array : null, n = t.attributes.position;
  let i, r, o, a, u = 0;
  const f = c._roots;
  for (let d = 0, h = f.length; d < h; d++)
    i = f[d], r = new Uint32Array(i), o = new Uint16Array(i), a = new Float32Array(i), l(0, u), u += i.byteLength;
  function l(d, h, m = !1) {
    const w = d * 2;
    if (ie(w, o)) {
      const p = pe(d, r), y = xe(w, o);
      let g = 1 / 0, v = 1 / 0, x = 1 / 0, T = -1 / 0, A = -1 / 0, M = -1 / 0;
      for (let _ = p, S = p + y; _ < S; _++) {
        const b = 3 * c.resolveTriangleIndex(_);
        for (let E = 0; E < 3; E++) {
          let R = b + E;
          R = s ? s[R] : R;
          const I = n.getX(R), P = n.getY(R), C = n.getZ(R);
          I < g && (g = I), I > T && (T = I), P < v && (v = P), P > A && (A = P), C < x && (x = C), C > M && (M = C);
        }
      }
      return a[d + 0] !== g || a[d + 1] !== v || a[d + 2] !== x || a[d + 3] !== T || a[d + 4] !== A || a[d + 5] !== M ? (a[d + 0] = g, a[d + 1] = v, a[d + 2] = x, a[d + 3] = T, a[d + 4] = A, a[d + 5] = M, !0) : !1;
    } else {
      const p = ue(d), y = fe(d, r);
      let g = m, v = !1, x = !1;
      if (e) {
        if (!g) {
          const b = p / ce + h / le, E = y / ce + h / le;
          v = e.has(b), x = e.has(E), g = !v && !x;
        }
      } else
        v = !0, x = !0;
      const T = g || v, A = g || x;
      let M = !1;
      T && (M = l(p, h, g));
      let _ = !1;
      A && (_ = l(y, h, g));
      const S = M || _;
      if (S)
        for (let b = 0; b < 3; b++) {
          const E = p + b, R = y + b, I = a[E], P = a[E + 3], C = a[R], L = a[R + 3];
          a[d + b] = I < C ? I : C, a[d + b + 3] = P > L ? P : L;
        }
      return S;
    }
  }
}
function eo(c, e, t, s, n, i, r) {
  ee.setBuffer(c._roots[e]), Gn(0, c, t, s, n, i, r), ee.clearBuffer();
}
function Gn(c, e, t, s, n, i, r) {
  const { float32Array: o, uint16Array: a, uint32Array: u } = ee, f = c * 2;
  if (ie(f, a)) {
    const d = pe(c, u), h = xe(f, a);
    Vi(e, t, s, d, h, n, i, r);
  } else {
    const d = ue(c);
    Ye(d, o, s, i, r) && Gn(d, e, t, s, n, i, r);
    const h = fe(c, u);
    Ye(h, o, s, i, r) && Gn(h, e, t, s, n, i, r);
  }
}
const to = ["x", "y", "z"];
function no(c, e, t, s, n, i) {
  ee.setBuffer(c._roots[e]);
  const r = jn(0, c, t, s, n, i);
  return ee.clearBuffer(), r;
}
function jn(c, e, t, s, n, i) {
  const { float32Array: r, uint16Array: o, uint32Array: a } = ee;
  let u = c * 2;
  if (ie(u, o)) {
    const l = pe(c, a), d = xe(u, o);
    return zi(e, t, s, l, d, n, i);
  } else {
    const l = un(c, a), d = to[l], m = s.direction[d] >= 0;
    let w, p;
    m ? (w = ue(c), p = fe(c, a)) : (w = fe(c, a), p = ue(c));
    const g = Ye(w, r, s, n, i) ? jn(w, e, t, s, n, i) : null;
    if (g) {
      const T = g.point[d];
      if (m ? T <= r[p + l] : (
        // min bounding data
        T >= r[p + l + 3]
      ))
        return g;
    }
    const x = Ye(p, r, s, n, i) ? jn(p, e, t, s, n, i) : null;
    return g && x ? g.distance <= x.distance ? g : x : g || x || null;
  }
}
const $t = /* @__PURE__ */ new Ie(), lt = /* @__PURE__ */ new Ee(), ut = /* @__PURE__ */ new Ee(), bt = /* @__PURE__ */ new Ae(), Rs = /* @__PURE__ */ new ye(), qt = /* @__PURE__ */ new ye();
function so(c, e, t, s) {
  ee.setBuffer(c._roots[e]);
  const n = Kn(0, c, t, s);
  return ee.clearBuffer(), n;
}
function Kn(c, e, t, s, n = null) {
  const { float32Array: i, uint16Array: r, uint32Array: o } = ee;
  let a = c * 2;
  if (n === null && (t.boundingBox || t.computeBoundingBox(), Rs.set(t.boundingBox.min, t.boundingBox.max, s), n = Rs), ie(a, r)) {
    const f = e.geometry, l = f.index, d = f.attributes.position, h = t.index, m = t.attributes.position, w = pe(c, o), p = xe(a, r);
    if (bt.copy(s).invert(), t.boundsTree)
      return se(c, i, qt), qt.matrix.copy(bt), qt.needsUpdate = !0, t.boundsTree.shapecast({
        intersectsBounds: (g) => qt.intersectsBox(g),
        intersectsTriangle: (g) => {
          g.a.applyMatrix4(s), g.b.applyMatrix4(s), g.c.applyMatrix4(s), g.needsUpdate = !0;
          for (let v = w, x = p + w; v < x; v++)
            if (oe(ut, 3 * e.resolveTriangleIndex(v), l, d), ut.needsUpdate = !0, g.intersectsTriangle(ut))
              return !0;
          return !1;
        }
      });
    {
      const y = dn(t);
      for (let g = w, v = p + w; g < v; g++) {
        const x = e.resolveTriangleIndex(g);
        oe(lt, 3 * x, l, d), lt.a.applyMatrix4(bt), lt.b.applyMatrix4(bt), lt.c.applyMatrix4(bt), lt.needsUpdate = !0;
        for (let T = 0, A = y * 3; T < A; T += 3)
          if (oe(ut, T, h, m), ut.needsUpdate = !0, lt.intersectsTriangle(ut))
            return !0;
      }
    }
  } else {
    const f = ue(c), l = fe(c, o);
    return se(f, i, $t), !!(n.intersectsBox($t) && Kn(f, e, t, s, n) || (se(l, i, $t), n.intersectsBox($t) && Kn(l, e, t, s, n)));
  }
}
const Jt = /* @__PURE__ */ new Ae(), An = /* @__PURE__ */ new ye(), At = /* @__PURE__ */ new ye(), ro = /* @__PURE__ */ new U(), io = /* @__PURE__ */ new U(), oo = /* @__PURE__ */ new U(), ao = /* @__PURE__ */ new U();
function co(c, e, t, s = {}, n = {}, i = 0, r = 1 / 0) {
  e.boundingBox || e.computeBoundingBox(), An.set(e.boundingBox.min, e.boundingBox.max, t), An.needsUpdate = !0;
  const o = c.geometry, a = o.attributes.position, u = o.index, f = e.attributes.position, l = e.index, d = be.getPrimitive(), h = be.getPrimitive();
  let m = ro, w = io, p = null, y = null;
  n && (p = oo, y = ao);
  let g = 1 / 0, v = null, x = null;
  return Jt.copy(t).invert(), At.matrix.copy(Jt), c.shapecast(
    {
      boundsTraverseOrder: (T) => An.distanceToBox(T),
      intersectsBounds: (T, A, M) => M < g && M < r ? (A && (At.min.copy(T.min), At.max.copy(T.max), At.needsUpdate = !0), !0) : !1,
      intersectsRange: (T, A) => {
        if (e.boundsTree) {
          const M = e.boundsTree;
          return M.shapecast({
            boundsTraverseOrder: (_) => At.distanceToBox(_),
            intersectsBounds: (_, S, b) => b < g && b < r,
            intersectsRange: (_, S) => {
              for (let b = _, E = _ + S; b < E; b++) {
                const R = M.resolveTriangleIndex(b);
                oe(h, 3 * R, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
                for (let I = T, P = T + A; I < P; I++) {
                  const C = c.resolveTriangleIndex(I);
                  oe(d, 3 * C, u, a), d.needsUpdate = !0;
                  const L = d.distanceToTriangle(h, m, p);
                  if (L < g && (w.copy(m), y && y.copy(p), g = L, v = I, x = b), L < i)
                    return !0;
                }
              }
            }
          });
        } else {
          const M = dn(e);
          for (let _ = 0, S = M; _ < S; _++) {
            oe(h, 3 * _, l, f), h.a.applyMatrix4(t), h.b.applyMatrix4(t), h.c.applyMatrix4(t), h.needsUpdate = !0;
            for (let b = T, E = T + A; b < E; b++) {
              const R = c.resolveTriangleIndex(b);
              oe(d, 3 * R, u, a), d.needsUpdate = !0;
              const I = d.distanceToTriangle(h, m, p);
              if (I < g && (w.copy(m), y && y.copy(p), g = I, v = b, x = _), I < i)
                return !0;
            }
          }
        }
      }
    }
  ), be.releasePrimitive(d), be.releasePrimitive(h), g === 1 / 0 ? null : (s.point ? s.point.copy(w) : s.point = w.clone(), s.distance = g, s.faceIndex = v, n && (n.point ? n.point.copy(y) : n.point = y.clone(), n.point.applyMatrix4(Jt), w.applyMatrix4(Jt), n.distance = w.sub(n.point).length(), n.faceIndex = x), s);
}
function Ss(c, e, t) {
  return c === null ? null : (c.point.applyMatrix4(e.matrixWorld), c.distance = c.point.distanceTo(t.ray.origin), c.object = e, c);
}
const Zt = /* @__PURE__ */ new ye(), Qt = /* @__PURE__ */ new vr(), Es = /* @__PURE__ */ new U(), Is = /* @__PURE__ */ new Ae(), Ds = /* @__PURE__ */ new U(), Rn = ["getX", "getY", "getZ"];
class cn extends Ii {
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
    const s = e.geometry, n = e._roots, i = e._indirectBuffer, r = s.getIndex(), o = {
      version: 1,
      roots: null,
      index: null,
      indirectBuffer: null
    };
    return t.cloneBuffers ? (o.roots = n.map((a) => a.slice()), o.index = r ? r.array.slice() : null, o.indirectBuffer = i ? i.slice() : null) : (o.roots = n, o.index = r ? r.array : null, o.indirectBuffer = i), o;
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
    ), a(i));
    const o = new cn(t, { ...s, [Zn]: !0 });
    if (o._roots = i, o._indirectBuffer = r || null, s.setIndex) {
      const u = t.getIndex();
      if (u === null) {
        const f = new ht(e.index, 1, !1);
        t.setIndex(f);
      } else u.array !== n && (u.array.set(n), u.needsUpdate = !0);
    }
    return o;
    function a(u) {
      for (let f = 0; f < u.length; f++) {
        const l = u[f], d = new Uint32Array(l), h = new Uint16Array(l);
        for (let m = 0, w = l.byteLength / le; m < w; m++) {
          const p = ce * m, y = 2 * p;
          ie(y, h) || (d[p + 6] = d[p + 6] / ce - m);
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
    const n = this.geometry, i = this._indirectBuffer, r = n.attributes.position, o = n.index ? n.index.array : null, u = (i ? i[e] : e) * 3;
    let f = u + 0, l = u + 1, d = u + 2;
    o && (f = o[f], l = o[l], d = o[d]);
    for (let h = 0; h < 3; h++) {
      const m = r[Rn[h]](f), w = r[Rn[h]](l), p = r[Rn[h]](d);
      let y = m;
      w < y && (y = w), p < y && (y = p);
      let g = m;
      w > g && (g = w), p > g && (g = p), t[s + h] = y, t[s + h + 3] = g;
    }
    return t;
  }
  // precomputes the bounding box for each triangle; required for quickly calculating tree splits.
  // result is an array of size count * 6 where triangle i maps to a
  // [x_center, x_delta, y_center, y_delta, z_center, z_delta] tuple starting at index (i - offset) * 6,
  // representing the center and half-extent in each dimension of triangle i
  computePrimitiveBounds(e, t, s) {
    const n = this.geometry, i = this._indirectBuffer, r = n.attributes.position, o = n.index ? n.index.array : null, a = r.normalized;
    if (e < 0 || t + e - s.offset > s.length / 6)
      throw new Error("MeshBVH: compute triangle bounds range is invalid.");
    const u = r.array, f = r.offset || 0;
    let l = 3;
    r.isInterleavedBufferAttribute && (l = r.data.stride);
    const d = ["getX", "getY", "getZ"], h = s.offset;
    for (let m = e, w = e + t; m < w; m++) {
      const y = (i ? i[m] : m) * 3, g = (m - h) * 6;
      let v = y + 0, x = y + 1, T = y + 2;
      o && (v = o[v], x = o[x], T = o[T]), a || (v = v * l + f, x = x * l + f, T = T * l + f);
      for (let A = 0; A < 3; A++) {
        let M, _, S;
        a ? (M = r[d[A]](v), _ = r[d[A]](x), S = r[d[A]](T)) : (M = u[v + A], _ = u[x + A], S = u[T + A]);
        let b = M;
        _ < b && (b = _), S < b && (b = S);
        let E = M;
        _ > E && (E = _), S > E && (E = S);
        const R = (E - b) / 2, I = A * 2;
        s[g + I + 0] = b + R, s[g + I + 1] = R + (Math.abs(b) + R) * tn;
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
    Is.copy(e.matrixWorld).invert(), Qt.copy(t.ray).applyMatrix4(Is), Ds.setFromMatrixScale(e.matrixWorld), Es.copy(Qt.direction).multiply(Ds);
    const i = Es.length(), r = t.near / i, o = t.far / i;
    if (t.firstHitOnly === !0) {
      let a = this.raycastFirst(Qt, n, r, o);
      a = Ss(a, e, t), a && s.push(a);
    } else {
      const a = this.raycast(Qt, n, r, o);
      for (let u = 0, f = a.length; u < f; u++) {
        const l = Ss(a[u], e, t);
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
    return (this.indirect ? Qi : Hi)(this, e);
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
  raycast(e, t = Pn, s = 0, n = 1 / 0) {
    const i = this._roots, r = [], o = this.indirect ? eo : ji;
    for (let a = 0, u = i.length; a < u; a++)
      o(this, a, t, e, r, s, n);
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
  raycastFirst(e, t = Pn, s = 0, n = 1 / 0) {
    const i = this._roots;
    let r = null;
    const o = this.indirect ? no : Wi;
    for (let a = 0, u = i.length; a < u; a++) {
      const f = o(this, a, t, e, s, n);
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
    const n = this._roots, i = this.indirect ? so : Yi;
    for (let r = 0, o = n.length; r < o && (s = i(this, r, e, t), !s); r++)
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
        iterate: this.indirect ? Gi : ki
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
      intersectsTriangles: i
    } = s;
    const r = be.getPrimitive(), o = this.geometry.index, a = this.geometry.attributes.position, u = this.indirect ? (m) => {
      const w = this.resolveTriangleIndex(m);
      oe(r, w * 3, o, a);
    } : (m) => {
      oe(r, m * 3, o, a);
    }, f = be.getPrimitive(), l = e.geometry.index, d = e.geometry.attributes.position, h = e.indirect ? (m) => {
      const w = e.resolveTriangleIndex(m);
      oe(f, w * 3, l, d);
    } : (m) => {
      oe(f, m * 3, l, d);
    };
    if (i) {
      if (!(e instanceof cn))
        throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');
      const m = (w, p, y, g, v, x, T, A) => {
        for (let M = y, _ = y + g; M < _; M++) {
          h(M), f.a.applyMatrix4(t), f.b.applyMatrix4(t), f.c.applyMatrix4(t), f.needsUpdate = !0;
          for (let S = w, b = w + p; S < b; S++)
            if (u(S), r.needsUpdate = !0, i(r, f, S, M, v, x, T, A))
              return !0;
        }
        return !1;
      };
      if (n) {
        const w = n;
        n = function(p, y, g, v, x, T, A, M) {
          return w(p, y, g, v, x, T, A, M) ? !0 : m(p, y, g, v, x, T, A, M);
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
    return Zt.set(e.min, e.max, t), Zt.needsUpdate = !0, this.shapecast(
      {
        intersectsBounds: (s) => Zt.intersectsBox(s),
        intersectsTriangle: (s) => Zt.intersectsTriangle(s)
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
    return (this.indirect ? co : Zi)(
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
    return Li(
      this,
      e,
      t,
      s,
      n
    );
  }
}
function lo(c) {
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
function uo(c) {
  switch (c) {
    case 1:
      return br;
    case 2:
      return Mr;
    case 3:
      return on;
    case 4:
      return on;
  }
}
function Ps(c) {
  switch (c) {
    case 1:
      return _r;
    case 2:
      return $s;
    case 3:
      return Bn;
    case 4:
      return Bn;
  }
}
class cr extends Cn {
  constructor() {
    super(), this.minFilter = je, this.magFilter = je, this.generateMipmaps = !1, this.overrideItemSize = null, this._forcedType = null;
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
    const i = e.itemSize, r = e.count, o = e.normalized, a = e.array.constructor, u = a.BYTES_PER_ELEMENT;
    let f = this._forcedType, l = i;
    if (f === null)
      switch (a) {
        case Float32Array:
          f = We;
          break;
        case Uint8Array:
        case Uint16Array:
        case Uint32Array:
          f = Dt;
          break;
        case Int8Array:
        case Int16Array:
        case Int32Array:
          f = mn;
          break;
      }
    let d, h, m, w, p = lo(i);
    switch (f) {
      case We:
        m = 1, h = uo(i), o && u === 1 ? (w = a, p += "8", a === Uint8Array ? d = Pt : (d = ns, p += "_SNORM")) : (w = Float32Array, p += "32F", d = We);
        break;
      case mn:
        p += u * 8 + "I", m = o ? Math.pow(2, a.BYTES_PER_ELEMENT * 8 - 1) : 1, h = Ps(i), u === 1 ? (w = Int8Array, d = ns) : u === 2 ? (w = Int16Array, d = wr) : (w = Int32Array, d = mn);
        break;
      case Dt:
        p += u * 8 + "UI", m = o ? Math.pow(2, a.BYTES_PER_ELEMENT * 8 - 1) : 1, h = Ps(i), u === 1 ? (w = Uint8Array, d = Pt) : u === 2 ? (w = Uint16Array, d = Tr) : (w = Uint32Array, d = Dt);
        break;
    }
    l === 3 && (h === on || h === Bn) && (l = 4);
    const y = Math.ceil(Math.sqrt(r)) || 1, g = l * y * y, v = new w(g), x = e.normalized;
    e.normalized = !1;
    for (let T = 0; T < r; T++) {
      const A = l * T;
      v[A] = e.getX(T) / m, i >= 2 && (v[A + 1] = e.getY(T) / m), i >= 3 && (v[A + 2] = e.getZ(T) / m, l === 4 && (v[A + 3] = 1)), i >= 4 && (v[A + 3] = e.getW(T) / m);
    }
    e.normalized = x, this.internalFormat = p, this.format = h, this.type = d, this.image.width = y, this.image.height = y, this.image.data = v, this.needsUpdate = !0, this.dispose(), e.itemSize = s, e.count = n;
  }
}
class fo extends cr {
  constructor() {
    super(), this._forcedType = Dt;
  }
}
class ho extends cr {
  constructor() {
    super(), this._forcedType = We;
  }
}
class mo {
  constructor() {
    this.index = new fo(), this.position = new ho(), this.bvhBounds = new Cn(), this.bvhContents = new Cn(), this._cachedIndexAttr = null, this.index.overrideItemSize = 3;
  }
  /**
   * Updates the object and associated textures with data from the provided BVH.
   *
   * @param {MeshBVH} bvh
   * @returns {void}
   */
  updateFrom(e) {
    const { geometry: t } = e;
    if (go(e, this.bvhBounds, this.bvhContents), this.position.updateFrom(t.attributes.position), e.indirect) {
      const s = e._indirectBuffer;
      if (this._cachedIndexAttr === null || this._cachedIndexAttr.count !== s.length)
        if (t.index)
          this._cachedIndexAttr = t.index.clone();
        else {
          const n = ar(fn(t));
          this._cachedIndexAttr = new ht(n, 1, !1);
        }
      po(t, s, this._cachedIndexAttr), this.index.updateFrom(this._cachedIndexAttr);
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
function po(c, e, t) {
  const s = t.array, n = c.index ? c.index.array : null;
  for (let i = 0, r = e.length; i < r; i++) {
    const o = 3 * i, a = 3 * e[i];
    for (let u = 0; u < 3; u++)
      s[o + u] = n ? n[a + u] : a + u;
  }
}
function go(c, e, t) {
  const s = c._roots;
  if (s.length !== 1)
    throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");
  const n = s[0], i = new Uint16Array(n), r = new Uint32Array(n), o = new Float32Array(n), a = n.byteLength / le, u = 2 * Math.ceil(Math.sqrt(a / 2)), f = new Float32Array(4 * u * u), l = Math.ceil(Math.sqrt(a)), d = new Uint32Array(2 * l * l);
  for (let h = 0; h < a; h++) {
    const m = h * le / 4, w = m * 2, p = m;
    for (let y = 0; y < 3; y++)
      f[8 * h + 0 + y] = o[p + 0 + y], f[8 * h + 4 + y] = o[p + 3 + y];
    if (ie(w, i)) {
      const y = xe(w, i), g = pe(m, r), v = fi | y;
      d[h * 2 + 0] = v, d[h * 2 + 1] = g;
    } else {
      const y = r[m + 6], g = un(m, r);
      d[h * 2 + 0] = g, d[h * 2 + 1] = y;
    }
  }
  e.image.data = f, e.image.width = u, e.image.height = u, e.format = on, e.type = We, e.internalFormat = "RGBA32F", e.minFilter = je, e.magFilter = je, e.generateMipmaps = !1, e.needsUpdate = !0, e.dispose(), t.image.data = d, t.image.width = l, t.image.height = l, t.format = $s, t.type = Dt, t.internalFormat = "RG32UI", t.minFilter = je, t.magFilter = je, t.generateMipmaps = !1, t.needsUpdate = !0, t.dispose();
}
const xo = (
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
), yo = (
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
), vo = (
  /* glsl */
  `
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`
), To = vo, wo = `
	${xo}
	${yo}
`, nt = () => {
  const c = ln.useContext(qn);
  if (!c)
    throw new Error("useMainContext must be used within MainContextProvider");
  return c;
};
function _o(c) {
  c.updateMatrixWorld(!0);
  const e = new B.Box3(), t = new B.Vector3();
  let s = !1;
  const n = c.parent, i = n ? new B.Matrix4().copy(n.matrixWorld).invert() : new B.Matrix4(), r = new B.Matrix4();
  return c.traverse((o) => {
    const a = o;
    if (a.isMesh && a.geometry?.attributes?.position) {
      const u = a.geometry.attributes.position;
      r.multiplyMatrices(i, a.matrixWorld);
      for (let f = 0; f < u.count; f++)
        t.fromBufferAttribute(u, f), t.applyMatrix4(r), e.expandByPoint(t), s = !0;
    }
  }), s || (e.setFromObject(c), n && e.applyMatrix4(i)), e;
}
function Mo(c, e = -Math.PI / 4, t = -Math.PI / 10, s = Math.PI / 3) {
  c.rotation.set(0, 0, 0), c.position.set(0, 0, 0), c.updateMatrixWorld(!0);
  const n = new B.Box3().setFromObject(c), i = new B.Vector3();
  n.getCenter(i);
  const r = new B.Vector3();
  n.getSize(r), r.length() === 0 && (r.set(1, 1, 1), n.min.set(-0.5, -0.5, -0.5), n.max.set(0.5, 0.5, 0.5), i.set(0, 0, 0)), c.rotation.set(e, t, s), c.updateMatrixWorld(!0);
  const o = _o(c), a = new B.Vector3();
  o.getCenter(a);
  const u = o.min.y, f = o.max.y;
  c.position.copy(a).negate(), c.updateMatrixWorld(!0);
  const l = u - a.y, d = f - a.y;
  return {
    localBox: n,
    localCenter: i,
    localSize: r,
    rotatedCenterOffset: a,
    minY: l,
    maxY: d,
    rotatedBox: o
  };
}
class Rt extends B.TextureLoader {
  load(e, t, s, n) {
    if (!e) {
      const i = new B.Texture();
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
        const r = new B.Texture();
        t && t(r);
      }
    );
  }
}
const bo = (
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
), Ao = (
  /* glsl */
  `
  precision highp float;
  precision highp sampler2D;
  precision highp isampler2D;

  ${To}
  ${wo}

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
class Ro extends B.ShaderMaterial {
  constructor({
    geometry: e,
    bvh: t,
    envMap: s,
    backgroundTexture: n = null,
    resolution: i = new B.Vector2(1024, 768),
    ior: r = 2.4,
    bounces: o = 3,
    aberrationStrength: a = 1e-3,
    fresnel: u = 0.01,
    reflectivity: f = 1,
    color: l = 16777215,
    blur: d = 0.12,
    envRotation: h = 0,
    highlightColor: m = 16777215,
    highlightTolerance: w = 1,
    attenuationColor: p = 16777215,
    attenuationDistance: y = 1
  }) {
    const g = new mo();
    g.updateFrom(t), super({
      glslVersion: B.GLSL3,
      vertexShader: bo,
      fragmentShader: Ao,
      uniforms: {
        bvh: { value: g },
        tDiffuse: { value: n },
        resolution: { value: i },
        envMap: { value: s },
        uColor: { value: new B.Color(l) },
        uIOR: { value: r },
        uAberration: { value: a },
        uFresnel: { value: u },
        uReflectivity: { value: f },
        uBlur: { value: d },
        uEnvRotation: { value: h },
        uHighlightColor: { value: new B.Color(m) },
        uHighlightTolerance: { value: w },
        uAttenuationColor: { value: new B.Color(p) },
        uAttenuationDistance: { value: y },
        uBounces: { value: o },
        uModelMatrix: { value: new B.Matrix4() },
        uModelMatrixInverse: { value: new B.Matrix4() }
      },
      transparent: !0,
      depthWrite: !0
    }), this.onBeforeRender = (v, x, T, A, M) => {
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
const St = (c, e) => {
  if (!c) return;
  for (const s of e)
    if (c[s]) return c[s];
  const t = e.map((s) => s.toLowerCase());
  for (const s of Object.keys(c))
    if (t.includes(s.toLowerCase()))
      return c[s];
}, Cs = (c, e) => {
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
function So(c, e, t, s, n, i, r, o = 0) {
  const a = ["♥", "♥︎♥︎", "○○", "⚭", "∞"];
  if (!a.some((p) => e.includes(p)) || !r) {
    c.textAlign = "center", c.fillText(e, t, s), o > 0 && c.strokeText(e, t, s);
    return;
  }
  const f = e.split(/(♥︎♥︎|○○|[♥⚭∞])/u), l = [];
  c.font = `bold ${n}px ${i}`;
  const d = n;
  for (const p of f)
    if (p)
      if (a.includes(p)) {
        const y = r[p];
        if (y && y.img) {
          const g = y.width, v = y.height, x = v > 0 ? g / v * d : 0;
          l.push({
            type: "symbol",
            text: p,
            width: x,
            img: y.img
          });
        } else {
          const g = c.measureText(p).width;
          l.push({ type: "text", text: p, width: g });
        }
      } else {
        const y = c.measureText(p).width;
        l.push({ type: "text", text: p, width: y });
      }
  const h = l.reduce((p, y) => p + y.width, 0);
  let w = t - h / 2;
  c.textAlign = "left";
  for (const p of l) {
    if (p.type === "symbol" && p.img) {
      const y = s - d / 2;
      c.drawImage(p.img, w, y, p.width, d);
    } else
      c.fillText(p.text, w, s), o > 0 && c.strokeText(p.text, w, s);
    w += p.width;
  }
}
let _e = null;
function Bs(c, e, t) {
  const s = new Int32Array(e * t), n = new Float32Array(e * t), i = 1e9;
  for (let a = 0; a < e; a++) {
    let u = i;
    for (let f = 0; f < t; f++) {
      const l = f * e + a;
      c[l] !== 0 ? u = 0 : u = u === i ? i : u + 1, s[l] = u;
    }
    u = i;
    for (let f = t - 1; f >= 0; f--) {
      const l = f * e + a;
      c[l] !== 0 ? u = 0 : u = u === i ? i : u + 1, u < s[l] && (s[l] = u);
    }
  }
  const r = new Int32Array(e), o = new Int32Array(e);
  for (let a = 0; a < t; a++) {
    const u = a * e;
    let f = 0;
    r[0] = 0, o[0] = 0;
    for (let l = 1; l < e; l++) {
      const d = s[u + l], h = d === i ? i : d * d;
      for (; f >= 0; ) {
        const m = r[f], w = s[u + m], p = w === i ? i : w * w;
        let y = 0;
        if (h === i ? y = i : p === i ? y = 0 : y = 1 + Math.floor((l * l - m * m + (h - p)) / (2 * (l - m))), y < o[f])
          f--;
        else {
          y < e && (f++, r[f] = l, o[f] = y);
          break;
        }
      }
      f < 0 && (f = 0, r[0] = l, o[0] = 0);
    }
    for (let l = e - 1; l >= 0; l--) {
      for (; f > 0 && l < o[f]; )
        f--;
      const d = r[f], h = l - d, m = s[u + d], w = m === i ? i : m * m, p = h * h + w;
      n[u + l] = Math.sqrt(p);
    }
  }
  return n;
}
function Wn(c) {
  const {
    text: e,
    width: t = 1024,
    height: s = 200,
    fontSize: n = 5,
    fontFamily: i = "Arial, sans-serif",
    blur: r = 5,
    mode: o = "emboss",
    offsetY: a = 0,
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
  const y = 20;
  p.font = `bold ${y}px ${i}`;
  let g = 0;
  const v = ["♥", "♥︎♥︎", "○○", "⚭", "∞"];
  if (!v.some((H) => e.includes(H)) || !f)
    g = p.measureText(e).width;
  else {
    const H = e.split(/(♥︎♥︎|○○|[♥⚭∞])/u), K = y;
    for (const q of H)
      if (q)
        if (v.includes(q)) {
          const J = f[q];
          if (J && J.img) {
            const ve = J.width, Re = J.height, ge = Re > 0 ? ve / Re * K : 0;
            g += ge;
          } else
            g += p.measureText(q).width;
        } else
          g += p.measureText(q).width;
  }
  const T = 0.85, A = g / y + r * 8 / n, M = 1 + r * 8 / n, _ = A > 0 ? (t * T - 20 - Math.abs(u) * 2) / A : 1 / 0, S = M > 0 ? (s * T - 20 - Math.abs(a) * 2) / M : 1 / 0, R = p.measureText("AaBbCcDdEeFfGgHhIiJj").width / y + r * 8 / n, I = R > 0 ? (t * T - 20 - Math.abs(u) * 2) / R : 1 / 0, P = Math.max(
    1,
    Math.floor(Math.min(_, S, I))
  );
  let C = "";
  f && (C = Object.keys(f).sort().map((H) => `${H}:${f[H]?.img.src || ""}`).join(","));
  const L = 2, O = t * L, X = s * L;
  let ne, j;
  if (_e && _e.text === e && _e.fontFamily === i && _e.width === t && _e.height === s && _e.offsetY === a && _e.offsetX === u && _e.symbolsKey === C && _e.strokeWidth === m)
    ne = _e.sdf, j = _e.coverage;
  else {
    const H = document.createElement("canvas");
    H.width = O, H.height = X;
    const K = H.getContext("2d");
    if (!K)
      throw new Error("Could not get 2D context for temp canvas");
    K.fillStyle = "#FFFFFF", K.fillRect(0, 0, O, X), K.fillStyle = "#000000", K.strokeStyle = "#000000", K.lineWidth = m * L;
    const q = P * L;
    K.font = `bold ${q}px ${i}`, K.textBaseline = "middle";
    const J = O / 2 + u * L, ve = X / 2 + a * L;
    So(
      K,
      e,
      J,
      ve,
      q,
      i,
      f,
      m * L
    );
    const Re = K.getImageData(0, 0, O, X), ge = new Uint8Array(O * X);
    j = new Uint8Array(O * X);
    for (let V = 0; V < O * X; V++) {
      const te = Re.data[V * 4];
      ge[V] = te < 128 ? 1 : 0, j[V] = 255 - te;
    }
    const me = Bs(ge, O, X), Z = new Uint8Array(O * X);
    for (let V = 0; V < O * X; V++)
      Z[V] = ge[V] === 0 ? 1 : 0;
    const Q = Bs(Z, O, X);
    ne = new Float32Array(O * X);
    for (let V = 0; V < O * X; V++)
      ne[V] = me[V] - Q[V];
    _e = {
      text: e,
      fontFamily: i,
      width: t,
      height: s,
      offsetY: a,
      offsetX: u,
      symbolsKey: C,
      strokeWidth: m,
      sdf: ne,
      coverage: j
    };
  }
  const D = document.createElement("canvas");
  D.width = t, D.height = s;
  const N = D.getContext("2d");
  if (!N)
    throw new Error("2D Canvas Context is not supported in this environment.");
  const k = document.createElement("canvas");
  k.width = O, k.height = X;
  const Y = k.getContext("2d");
  if (!Y)
    throw new Error("Could not get 2D context for tempOutCanvas");
  const de = Y.createImageData(O, X), he = de.data;
  for (let H = 0; H < O * X; H++) {
    let K = ne[H];
    const q = Math.abs(K), J = 1.5 * L;
    if (q < J) {
      const F = (J - q) / J, ae = (0.5 - j[H] / 255) * J;
      K = (1 - F) * K + F * ae;
    }
    let ve = 0;
    if (K >= 0) {
      const F = 1.5 * L;
      ve = K / F;
    } else {
      const F = Math.max(0.1, l * L);
      ve = K / F;
    }
    const ge = (Math.max(-1, Math.min(1, ve)) + 1) / 2, me = 3 * ge * ge - 2 * ge * ge * ge, Z = (1 - h) * ge + h * me, Q = 1 - d + d * Z, V = Math.round(255 * Q), te = H * 4;
    he[te] = V, he[te + 1] = V, he[te + 2] = V, he[te + 3] = 255;
  }
  return Y.putImageData(de, 0, 0), N.imageSmoothingEnabled = !0, N.imageSmoothingQuality = "high", N.drawImage(k, 0, 0, t, s), D;
}
function Eo(c, e, t) {
  fetch(c).then((s) => {
    if (!s.ok) throw new Error("Failed to fetch SVG");
    return s.text();
  }).then((s) => {
    let n = s.replace(/fill="[^"]*"/g, `fill="${e}"`).replace(/stroke="[^"]*"/g, `stroke="${e}"`);
    const i = new Blob([n], {
      type: "image/svg+xml;charset=utf-8"
    }), r = URL.createObjectURL(i), o = new Image();
    o.onload = () => {
      t(o, o.naturalWidth || 20, o.naturalHeight || 20), URL.revokeObjectURL(r);
    }, o.onerror = () => {
      t(null, 0, 0), URL.revokeObjectURL(r);
    }, o.src = r;
  }).catch((s) => {
    console.error("Error loading SVG symbol:", s), t(null, 0, 0);
  });
}
function Io(c, e = 4) {
  const t = c.width, s = c.height, n = document.createElement("canvas");
  n.width = t, n.height = s;
  const i = n.getContext("2d"), r = c.getContext("2d");
  if (!i || !r) return n;
  const o = r.getImageData(0, 0, t, s), a = i.createImageData(t, s), u = (f, l) => {
    const d = Math.max(0, Math.min(t - 1, f)), h = Math.max(0, Math.min(s - 1, l));
    return o.data[(h * t + d) * 4];
  };
  for (let f = 0; f < s; f++)
    for (let l = 0; l < t; l++) {
      const d = u(l - 1, f), h = u(l + 1, f), m = u(l, f - 1), w = u(l, f + 1), p = (h - d) / 255 * e, y = (w - m) / 255 * e, g = 1, v = Math.sqrt(p * p + y * y + g * g), x = p / v, T = y / v, A = g / v, M = (f * t + l) * 4;
      a.data[M] = Math.round((x + 1) * 127.5), a.data[M + 1] = Math.round((T + 1) * 127.5), a.data[M + 2] = Math.round((A + 1) * 127.5), a.data[M + 3] = 255;
    }
  return i.putImageData(a, 0, 0), n;
}
const Do = He(({ textOffsetX: c = 0 }) => {
  const { design3DManager: e } = nt(), { ringManager: t } = e, s = t.engravingText || "", n = t.engravingFont;
  return re(() => {
    if (!s) {
      console.log("BBoxEngrave: No text engraved");
      return;
    }
    const i = Wn({
      text: s,
      fontFamily: n,
      mode: "engrave",
      blur: 0.01,
      offsetY: 0,
      offsetX: c
    }), r = i.getContext("2d");
    if (!r) return;
    const { width: o, height: a } = i, f = r.getImageData(0, 0, o, a).data;
    let l = o, d = 0, h = a, m = 0, w = !1;
    for (let p = 0; p < a; p++)
      for (let y = 0; y < o; y++) {
        const g = (p * o + y) * 4, v = f[g], x = f[g + 1], T = f[g + 2];
        (v < 240 || x < 240 || T < 240) && (y < l && (l = y), y > d && (d = y), p < h && (h = p), p > m && (m = p), w = !0);
      }
    w ? (console.log(`BBoxEngrave - Text: "${s}", OffsetX: ${c}`), console.log(
      `Bounding Box -> minX: ${l}, maxX: ${d}, minY: ${h}, maxY: ${m}`
    )) : console.log(
      `BBoxEngrave - Text: "${s}", OffsetX: ${c} -> No pixels found`
    );
  }, [s, n, c]), null;
}), Po = He(
  ({ modelUrl: c }) => {
    const { design3DManager: e } = nt(), { ringManager: t } = e, {
      currentView: s,
      engravingText: n,
      engravingSymbol: i,
      engravingFont: r,
      bevelWidth: o,
      engravingDepth: a,
      edgeSoftness: u,
      normalStrength: f,
      aoStrength: l,
      strokeWidth: d
    } = t, { scene: h } = Hs(c), m = Dn(() => {
      if (!h) return null;
      let T = null;
      return h.traverse((A) => {
        const M = A;
        if (M.isMesh) {
          const _ = M.name;
          (_ === "Engraving Mesh" || _ === "Engraving Metal" || _ === "Engraving_Mesh" || _ === "Engraving_Metal" || _.includes("Engraving")) && (T = M);
        }
      }), T;
    }, [h]), [w, p] = sn({ normalTexture: null, aoTexture: null });
    re(() => {
      if (s !== 2 || !n && !i) {
        p((_) => (_.normalTexture?.dispose(), _.aoTexture?.dispose(), { normalTexture: null, aoTexture: null })), t.setEngravingCanvas(null), t.setNormalMapCanvas(null);
        return;
      }
      let T = !0;
      const A = (_, S) => new Promise((b) => {
        Eo(_, S, (E, R, I) => {
          b(E ? { img: E, width: R, height: I } : null);
        });
      });
      return (async () => {
        const _ = ["♥", "♥︎♥︎", "○○", "⚭", "∞"], S = {
          "♥": "/message/OneH.svg",
          "♥︎♥︎": "/message/TwoH.svg",
          "○○": "/message/TwoR.svg",
          "⚭": "/message/TwoR.svg",
          "∞": "/message/Infinite.svg"
        }, b = _.filter(
          (N) => (n || "").includes(N)
        ), E = [], R = {};
        for (const N of b) {
          const k = S[N];
          E.push(
            A(k, "#000000").then((Y) => {
              R[N] = Y;
            })
          );
        }
        if (await Promise.all(E), typeof document < "u" && document.fonts && r)
          try {
            await document.fonts.load(`bold 30px ${r}`);
          } catch (N) {
            console.error("Failed to load engraving font:", N);
          }
        if (!T) return;
        const I = Wn({
          text: n || "",
          fontFamily: r,
          width: 2048,
          height: 400,
          mode: "engrave",
          blur: 0,
          offsetY: 0,
          offsetX: -10,
          symbolsMap: R,
          bevelWidth: o,
          engravingDepth: a,
          edgeSoftness: u,
          strokeWidth: d
        }), P = Wn({
          text: n || "",
          fontFamily: r,
          width: 2048,
          height: 400,
          mode: "engrave",
          blur: 0,
          offsetY: 0,
          offsetX: -10,
          symbolsMap: R,
          bevelWidth: o,
          engravingDepth: 1,
          // Force full depth (0.0 height/blackness) inside the letters for perfect shadow contrast
          edgeSoftness: u,
          strokeWidth: d
        }), C = Io(I, f), L = new B.CanvasTexture(C), O = new B.CanvasTexture(P);
        L.anisotropy = 16, O.anisotropy = 16;
        const X = I.width / I.height, ne = 2.2, j = -1 * ne, D = 1 * ne * X;
        L.wrapS = B.ClampToEdgeWrapping, L.wrapT = B.ClampToEdgeWrapping, L.repeat.set(j, D), L.offset.set(0.5 - 0.5 * j, 0.5 - 0.5 * D), L.colorSpace = B.NoColorSpace, O.wrapS = B.ClampToEdgeWrapping, O.wrapT = B.ClampToEdgeWrapping, O.repeat.set(j, D), O.offset.set(0.5 - 0.5 * j, 0.5 - 0.5 * D), O.colorSpace = B.NoColorSpace, t.setEngravingCanvas(I), t.setNormalMapCanvas(C), p((N) => (N.normalTexture?.dispose(), N.aoTexture?.dispose(), { normalTexture: L, aoTexture: O }));
      })(), () => {
        T = !1;
      };
    }, [
      n,
      i,
      r,
      s,
      o,
      a,
      u,
      f,
      l,
      d,
      m
    ]), re(() => () => {
      p((T) => (T.normalTexture?.dispose(), T.aoTexture?.dispose(), { normalTexture: null, aoTexture: null })), t.setEngravingCanvas(null), t.setNormalMapCanvas(null);
    }, []);
    const { normalTexture: y, aoTexture: g } = w;
    re(() => {
      if (!m || !m.geometry) return;
      m.geometry.computeBoundingBox();
      const T = m.geometry.boundingBox;
      if (T) {
        const _ = new B.Vector3();
        T.getSize(_), console.log("--- DEBUG RING MESH SIZE ---", {
          name: m.name,
          x: _.x,
          y: _.y,
          z: _.z
        });
      }
      const A = m.onBeforeRender, M = m.onAfterRender;
      return m.onBeforeRender = (_, S, b, E, R, I) => {
        A && A.call(
          m,
          _,
          S,
          b,
          E,
          R,
          I
        ), b instanceof B.OrthographicCamera && E.setDrawRange(0, 0);
      }, m.onAfterRender = (_, S, b, E, R, I) => {
        M && M.call(
          m,
          _,
          S,
          b,
          E,
          R,
          I
        ), E.setDrawRange(0, 1 / 0);
      }, () => {
        m.onBeforeRender = A, m.onAfterRender = M, m.geometry && m.geometry.setDrawRange(0, 1 / 0);
      };
    }, [m]);
    const v = Te(null), x = Te(null);
    return re(() => {
      if (!(!m || !m.geometry))
        if (s === 2 && y && g) {
          let T = m.material;
          if (T.userData?.isEngraved ? T = v.current : v.current !== T && (v.current = T, x.current && (x.current.dispose(), x.current = null)), T) {
            if (!x.current) {
              const M = T.clone();
              M.userData.isEngraved = !0, M.normalScale = new B.Vector2(-0.05, 0.05), x.current = M;
            }
            const A = x.current;
            A.normalMap = y, A.aoMap = g, A.aoMapIntensity = l, m.material !== A && (m.material = A);
          }
        } else
          v.current && m.material !== v.current && (m.material = v.current);
    }, [
      m,
      m?.material,
      y,
      g,
      s,
      l
    ]), re(() => () => {
      m && v.current && (m.material = v.current), x.current && (x.current.dispose(), x.current = null);
    }, [m]), /* @__PURE__ */ W.jsx(Do, {});
  }
);
var ts = /* @__PURE__ */ ((c) => (c.WEBSITE = "website", c.CONFIG = "config", c))(ts || {});
const Co = {
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
}, Bo = He(
  ({ diamondEnvMap: c }) => {
    const { design3DManager: e, designManager: t } = nt(), { ringManager: s } = e, { size: n, clock: i } = Gs(), r = t.viewManager.source === ts.WEBSITE, [o, a] = sn(null), [u, f] = sn(null), l = Te({}), d = Te({}), h = Te({
      stage: 0,
      startTime: 0,
      active: !1,
      startDistance: 0,
      triggered: !1,
      originalSmoothTime: 0.25
    }), m = s.modelUrl, w = s.collectionModels, p = r && w.length > 0 ? w : m ? [{ modelUrl: m, textures: s.textures }] : [], y = e.cameraManager.cameraRef, g = t.viewManager.settings.homeDistance, v = g + 4, x = 0.8, T = 0.6;
    return re(() => {
      r && m && (s.isTransitioning || (o ? m !== o && m !== u && (s.setTransitioning(!0), f(m), d.current[m] = 0, h.current.stage = 1, h.current.startTime = i.getElapsedTime(), h.current.startDistance = y ? y.distance : g, h.current.triggered = !1, h.current.active = !0) : (a(m), d.current[m] = 1)));
    }, [m, o, u, s, r, y, g]), re(() => {
      o && s._markLoaded();
    }, [o, s]), re(() => () => {
      s.setTransitioning(!1);
    }, [s]), js(() => {
      if (!r || !h.current.active) return;
      const A = i.getElapsedTime() - h.current.startTime;
      if (h.current.stage === 1) {
        if (h.current.triggered || (y && (y.maxDistance = 20, h.current.originalSmoothTime = y.smoothTime, y.smoothTime = x, y.dollyTo(v, !0)), h.current.triggered = !0), A >= x) {
          const M = u ? l.current[u] : null;
          if (u && !M) {
            y && y.dollyTo(v, !1);
            return;
          }
          h.current.stage = 2, h.current.startTime = i.getElapsedTime(), h.current.triggered = !1, d.current[o] = 1, d.current[u] = 0;
        }
      } else if (h.current.stage === 2) {
        const M = Math.min(A / T, 1), _ = 0.5 * (1 - Math.cos(M * Math.PI)), S = o ? l.current[o] : null, b = u ? l.current[u] : null;
        S && b && (b.rotation.copy(S.rotation), b.position.copy(S.position), b.scale.copy(S.scale)), d.current[o] = 1 - _, d.current[u] = _, M >= 1 && (h.current.stage = 3, h.current.startTime = i.getElapsedTime(), h.current.triggered = !1, d.current[o] = 0, d.current[u] = 1, a(u), f(null));
      } else h.current.stage === 3 && (h.current.triggered || (y && (y.smoothTime = x, y.dollyTo(g, !0)), h.current.triggered = !0), A >= x && (h.current.stage = 0, h.current.active = !1, h.current.triggered = !1, y && (y.maxDistance = t.viewManager.settings.maxDistance, y.smoothTime = h.current.originalSmoothTime), s.setTransitioning(!1)));
    }), r ? /* @__PURE__ */ W.jsx(W.Fragment, { children: p.map((A) => {
      const M = A.modelUrl, _ = M === o, S = M === u, b = _ || S;
      return /* @__PURE__ */ W.jsx(rn, { fallback: null, children: /* @__PURE__ */ W.jsx(
        Ls,
        {
          modelUrl: M,
          diamondEnvMap: c,
          size: n,
          role: _ ? "current" : S ? "next" : void 0,
          opacitiesRef: d,
          onLoad: (E) => {
            l.current[M] = E;
          },
          visible: b,
          texturesProp: A.textures
        }
      ) }, M);
    }) }) : /* @__PURE__ */ W.jsx(rn, { fallback: null, children: m && /* @__PURE__ */ W.jsx(
      Ls,
      {
        modelUrl: m,
        diamondEnvMap: c,
        size: n
      },
      m
    ) });
  }
), Ls = He(
  ({
    modelUrl: c,
    diamondEnvMap: e,
    size: t,
    role: s,
    opacitiesRef: n,
    onLoad: i,
    visible: r = !0,
    texturesProp: o
  }) => {
    const { design3DManager: a, designManager: u } = nt(), { ringManager: f } = a, l = o !== void 0 ? o : f?.textures, {
      colorHex: d,
      baseColorHex: h,
      finishingColorHex: m,
      engravingColorHex: w,
      roughness: p,
      finish: y,
      showDiamond: g,
      currentView: v
    } = f, { scene: x } = Hs(c), T = Te(new B.Color(h)), A = Te(new B.Color(m)), M = Te(new B.Color(w)), _ = Te(p);
    re(() => {
      T.current.set(h), A.current.set(m), M.current.set(w), _.current = p;
    }, [h, m, w, p]);
    const S = Dn(() => {
      if (!x) return null;
      const te = {
        x: -Math.PI / 4,
        y: -Math.PI / 10,
        z: Math.PI / 3
      }, F = {
        x: te.x - 8.42,
        y: te.y + 6.67,
        z: te.z - 1.05
      }, z = v === 2 ? F : te;
      return Mo(x, z.x, z.y, z.z);
    }, [x, v]);
    re(() => {
      S && r && u.setModelMinY(S.minY || 0);
    }, [S, u, r]), re(() => {
      f._markLoaded(), x && i && i(x);
    }, [x, f, i]);
    const b = St(l, [
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
    ]), E = !!b, R = St(l, [
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
    ]), I = !!R, P = St(l, [
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
    ]), C = !!P, L = St(l, [
      "normalBase",
      "Base_Metal_Normal",
      "Base_metal_Normal",
      "base_metal_normal",
      "Base_Metal_Normal.webp",
      "Base_metal_Normal.webp",
      "base_metal_normal.webp"
    ]) || Cs(l, [
      "Base_Metal_Normal",
      "base_metal_normal"
    ]), O = !!L, X = St(l, [
      "normalFinishing",
      "Finishing_Metal_Normal",
      "Finishing_metal_Normal",
      "finishing_metal_normal",
      "Finishing_Metal_Normal.webp",
      "Finishing_metal_Normal.webp",
      "finishing_metal_normal.webp"
    ]) || Cs(l, [
      "Finishing_Metal_Normal",
      "finishing_metal_normal"
    ]), ne = (te) => {
      const F = te.split("/"), z = F.findIndex((ae) => ae === "BehytRings");
      return z !== -1 && F.length > z + 3 ? {
        collection: F[z + 1],
        modelId: F[z + 2],
        variation: F[z + 3]
      } : null;
    }, j = !!X, D = E && b ? b : "", N = I && R ? R : "", k = C && P ? P : "", Y = O && L ? L : "", de = j && X ? X : "", he = gt(
      Rt,
      D
    );
    he && (he.flipY = !1);
    const H = gt(
      Rt,
      N
    );
    H && (H.flipY = !1);
    const K = gt(
      Rt,
      k
    );
    K && (K.flipY = !1);
    const q = gt(
      Rt,
      Y
    );
    q && (q.flipY = !1, q.colorSpace = B.NoColorSpace);
    const J = gt(
      Rt,
      de
    );
    J && (J.flipY = !1, J.colorSpace = B.NoColorSpace);
    const ve = c ? ne(c) : null, Re = ve ? `/BehytRings/${ve.collection}/${ve.modelId}/${ve.variation}/Roughness_Map.jpg` : "", ge = l;
    ge?.roughness && !ge.roughness.endsWith("roughness.jpg") && ge.roughness;
    const me = 1, Z = Te(
      new B.MeshPhysicalMaterial({
        color: d,
        metalness: 1,
        roughness: 0,
        aoMap: E ? he : null,
        aoMapIntensity: E ? 1 : 0,
        // roughnessMap: roughnessTexture,
        clearcoat: y === "Polished" ? 1 : 0,
        normalScale: new B.Vector2(me, me),
        normalMap: O ? q : null,
        alphaMap: he
      })
    ), Q = Te(
      new B.MeshPhysicalMaterial({
        color: "#f6f5f5",
        metalness: 1,
        roughness: 0,
        aoMap: I ? H : null,
        aoMapIntensity: I ? 0.8 : 0,
        // roughnessMap: roughnessTexture,
        clearcoat: y === "Polished" ? 1 : 0,
        clearcoatRoughness: 0.1,
        normalScale: new B.Vector2(me, me),
        normalMap: j ? J : null
      })
    ), V = Te(
      new B.MeshPhysicalMaterial({
        color: d,
        metalness: 1,
        roughness: p,
        aoMap: C ? K : null,
        aoMapIntensity: C ? 1 : 0,
        // roughnessMap: roughnessTexture,
        clearcoat: y === "Polished" ? 1 : 0,
        clearcoatRoughness: 0.1
      })
    );
    return re(() => {
      Z.current.aoMap = E ? he : null, Z.current.aoMapIntensity = E ? 1 : 0, Z.current.normalMap = O ? q : null, Z.current.needsUpdate = !0, Q.current.aoMap = I ? H : null, Q.current.aoMapIntensity = I ? 0.8 : 0, Q.current.normalMap = j ? J : null, Q.current.needsUpdate = !0, V.current.aoMap = C ? K : null, V.current.aoMapIntensity = C ? 1 : 0, V.current.needsUpdate = !0;
    }, [
      he,
      H,
      K,
      q,
      J,
      E,
      I,
      C,
      O,
      j,
      Y,
      de
    ]), js((te, F) => {
      const z = 1 - Math.pow(0.01, F), ae = y === "Polished" ? 1 : 0;
      Z.current.color.lerp(T.current, z), Z.current.roughness = B.MathUtils.lerp(
        Z.current.roughness,
        _.current,
        z
      ), Z.current.clearcoat = B.MathUtils.lerp(
        Z.current.clearcoat,
        ae,
        z
      ), Z.current.clearcoatRoughness = B.MathUtils.lerp(
        Z.current.clearcoatRoughness,
        0.1,
        z
      ), Q.current.color.lerp(
        A.current,
        z
      ), Q.current.roughness = B.MathUtils.lerp(
        Q.current.roughness,
        _.current,
        z
      ), Q.current.clearcoat = B.MathUtils.lerp(
        Q.current.clearcoat,
        ae,
        z
      ), Q.current.clearcoatRoughness = B.MathUtils.lerp(
        Q.current.clearcoatRoughness,
        0.1,
        z
      ), V.current.color.lerp(
        M.current,
        z
      ), V.current.roughness = B.MathUtils.lerp(
        V.current.roughness,
        _.current,
        z
      ), V.current.clearcoat = B.MathUtils.lerp(
        V.current.clearcoat,
        ae,
        z
      ), V.current.clearcoatRoughness = B.MathUtils.lerp(
        V.current.clearcoatRoughness,
        0.1,
        z
      );
      const $ = n && n.current[c] !== void 0 ? n.current[c] : 1, De = $ < 1;
      Z.current.transparent = De, Z.current.opacity = $, Q.current.transparent = De, Q.current.opacity = $, V.current.transparent = De, V.current.opacity = $, x && r && x.traverse(($e) => {
        $e instanceof B.Mesh && $e.material && (Array.isArray($e.material) ? $e.material : [$e.material]).forEach((pt) => {
          pt !== Z.current && pt !== Q.current && pt !== V.current && (pt.transparent = De, pt.opacity = $);
        });
      });
    }), ln.useLayoutEffect(() => {
      const te = n && n.current[c] !== void 0 ? n.current[c] : 1, F = te < 1;
      Z.current.transparent = F, Z.current.opacity = te, Q.current.transparent = F, Q.current.opacity = te, V.current.transparent = F, V.current.opacity = te, x && x.traverse((z) => {
        z instanceof B.Mesh && z.material && (Array.isArray(z.material) ? z.material : [z.material]).forEach(($) => {
          $ !== Z.current && $ !== Q.current && $ !== V.current && ($.transparent = F, $.opacity = te);
        });
      });
    }, [x, r, c, n]), re(() => () => {
      Z.current.dispose(), Q.current.dispose(), V.current.dispose();
    }, []), Dn(() => {
      Z.current.normalMap = null, Q.current.normalMap = null, V.current.normalMap = null, x.traverse((te) => {
        if (te instanceof B.Mesh) {
          const F = te;
          F.userData.originalNormalMap === void 0 && (F.userData.originalNormalMap = F.material?.normalMap || null, F.userData.originalNormalScale = F.material?.normalScale ? F.material.normalScale.clone() : null);
          const z = F.userData.originalNormalMap, ae = F.userData.originalNormalScale, $ = Q.current, De = Z.current;
          if (F.name === "Silver_Metal" && (F.visible = !g, F.material = $, j ? ($.normalMap = J, $.normalScale.set(
            me,
            me
          )) : z && ($.normalMap = z, ae && $.normalScale.copy(ae))), F.name === "Silver_Diamond" && (F.visible = g, F.material = $, j ? ($.normalMap = J, $.normalScale.set(
            me,
            me
          )) : z && ($.normalMap = z, ae && $.normalScale.copy(ae))), F.name === "Diamond_Mesh" || F.name.includes("Diam_Centr") || F.name.includes("Diamond_Metal")) {
            if (F.visible = g, g) {
              const $e = new cn(F.geometry, { strategy: 1 });
              F.material = new Ro({
                geometry: F.geometry,
                bvh: $e,
                envMap: e,
                resolution: new B.Vector2(t.width, t.height),
                ior: 2.4,
                bounces: 3,
                aberrationStrength: 5e-4
              });
            }
          } else F.name === "Engraving Mesh" || F.name === "Engraving Metal" || F.name === "Engraving_Mesh" || F.name === "Engraving_Metal" || F.name.includes("Engraving") ? (F.material = V.current, z && (V.current.normalMap = z, ae && V.current.normalScale.copy(
            ae
          ))) : F.name.includes("Custom") || F.name === "Gold" || F.name === "Base_Metal" || F.name === "Base_metal" || F.name.includes("Base") ? (F.material = De, O ? (De.normalMap = q, De.normalScale.set(
            me,
            me
          )) : z && (De.normalMap = z, ae && De.normalScale.copy(ae))) : (F.name === "Finishing_Metal" || F.name.includes("Finishing")) && (F.material = $, j ? ($.normalMap = J, $.normalScale.set(
            me,
            me
          )) : z && ($.normalMap = z, ae && $.normalScale.copy(ae)));
        }
      });
    }, [
      x,
      Z.current,
      Q.current,
      V.current,
      e,
      t,
      g,
      K,
      q,
      J,
      O,
      j,
      me
    ]), x && S ? /* @__PURE__ */ W.jsx("primitive", { object: x, visible: r }) : null;
  }
), lr = He(
  ({ diamondEnvPath: c }) => {
    const { design3DManager: e } = nt(), { ringManager: t } = e, s = gr({ files: c });
    return t.modelUrl ? /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
      /* @__PURE__ */ W.jsx(Bo, { diamondEnvMap: s }),
      !t.isTransitioning && /* @__PURE__ */ W.jsx(Po, { modelUrl: t.modelUrl })
    ] }) : null;
  }
);
function Ns(c, e) {
  if (e === Ar)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), c;
  if (e === Ln || e === qs) {
    let t = c.getIndex();
    if (t === null) {
      const r = [], o = c.getAttribute("position");
      if (o !== void 0) {
        for (let a = 0; a < o.count; a++)
          r.push(a);
        c.setIndex(r), t = c.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), c;
    }
    const s = t.count - 2, n = [];
    if (e === Ln)
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
class Lo extends Js {
  /**
   * Constructs a new glTF loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new ko(t);
    }), this.register(function(t) {
      return new Ho(t);
    }), this.register(function(t) {
      return new $o(t);
    }), this.register(function(t) {
      return new qo(t);
    }), this.register(function(t) {
      return new Jo(t);
    }), this.register(function(t) {
      return new zo(t);
    }), this.register(function(t) {
      return new Go(t);
    }), this.register(function(t) {
      return new jo(t);
    }), this.register(function(t) {
      return new Ko(t);
    }), this.register(function(t) {
      return new Oo(t);
    }), this.register(function(t) {
      return new Wo(t);
    }), this.register(function(t) {
      return new Vo(t);
    }), this.register(function(t) {
      return new Xo(t);
    }), this.register(function(t) {
      return new Yo(t);
    }), this.register(function(t) {
      return new Fo(t);
    }), this.register(function(t) {
      return new Zo(t);
    }), this.register(function(t) {
      return new Qo(t);
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
      const u = Ct.extractUrlBase(e);
      r = Ct.resolveURL(u, this.path);
    } else
      r = Ct.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(u) {
      n ? n(u) : console.error(u), i.manager.itemError(e), i.manager.itemEnd(e);
    }, a = new $n(this.manager);
    a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(u) {
      try {
        i.parse(u, r, function(f) {
          t(f), i.manager.itemEnd(e);
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
    let i;
    const r = {}, o = {}, a = new TextDecoder();
    if (typeof e == "string")
      i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (a.decode(new Uint8Array(e, 0, 4)) === ur) {
        try {
          r[G.KHR_BINARY_GLTF] = new ea(e);
        } catch (l) {
          n && n(l);
          return;
        }
        i = JSON.parse(r[G.KHR_BINARY_GLTF].content);
      } else
        i = JSON.parse(a.decode(e));
    else
      i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const u = new ha(i, {
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
      l.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[l.name] = l, r[l.name] = !0;
    }
    if (i.extensionsUsed)
      for (let f = 0; f < i.extensionsUsed.length; ++f) {
        const l = i.extensionsUsed[f], d = i.extensionsRequired || [];
        switch (l) {
          case G.KHR_MATERIALS_UNLIT:
            r[l] = new Uo();
            break;
          case G.KHR_DRACO_MESH_COMPRESSION:
            r[l] = new ta(i, this.dracoLoader);
            break;
          case G.KHR_TEXTURE_TRANSFORM:
            r[l] = new na();
            break;
          case G.KHR_MESH_QUANTIZATION:
            r[l] = new sa();
            break;
          default:
            d.indexOf(l) >= 0 && o[l] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + l + '".');
        }
      }
    u.setExtensions(r), u.setPlugins(o), u.parse(s, n);
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
function No() {
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
const G = {
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
class Fo {
  constructor(e) {
    this.parser = e, this.name = G.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
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
    const i = t.json, a = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
    let u;
    const f = new et(16777215);
    a.color !== void 0 && f.setRGB(a.color[0], a.color[1], a.color[2], Be);
    const l = a.range !== void 0 ? a.range : 0;
    switch (a.type) {
      case "directional":
        u = new Er(f), u.target.position.set(0, 0, -1), u.add(u.target);
        break;
      case "point":
        u = new Sr(f), u.distance = l;
        break;
      case "spot":
        u = new Rr(f), u.distance = l, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle !== void 0 ? a.spot.innerConeAngle : 0, a.spot.outerConeAngle = a.spot.outerConeAngle !== void 0 ? a.spot.outerConeAngle : Math.PI / 4, u.angle = a.spot.outerConeAngle, u.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, u.target.position.set(0, 0, -1), u.add(u.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
    }
    return u.position.set(0, 0, 0), Pe(u, a), a.intensity !== void 0 && (u.intensity = a.intensity), u.name = t.createUniqueName(a.name || "light_" + e), n = Promise.resolve(u), t.cache.add(s, n), n;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, s = this.parser, i = s.json.nodes[e], o = (i.extensions && i.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(a) {
      return s._getNodeRef(t.cache, o, a);
    });
  }
}
class Uo {
  constructor() {
    this.name = G.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return It;
  }
  extendParams(e, t, s) {
    const n = [];
    e.color = new et(1, 1, 1), e.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const r = i.baseColorFactor;
        e.color.setRGB(r[0], r[1], r[2], Be), e.opacity = r[3];
      }
      i.baseColorTexture !== void 0 && n.push(s.assignTexture(e, "map", i.baseColorTexture, Nt));
    }
    return Promise.all(n);
  }
}
class Oo {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}
class ko {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    if (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && i.push(s.assignTexture(t, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && i.push(s.assignTexture(t, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (i.push(s.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
      const o = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Ce(o, o);
    }
    return Promise.all(i);
  }
}
class Ho {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name];
    return t.dispersion = i.dispersion !== void 0 ? i.dispersion : 0, Promise.resolve();
  }
}
class Vo {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && i.push(s.assignTexture(t, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && i.push(s.assignTexture(t, "iridescenceThicknessMap", r.iridescenceThicknessTexture)), Promise.all(i);
  }
}
class zo {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new et(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const r = n.extensions[this.name];
    if (r.sheenColorFactor !== void 0) {
      const o = r.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], Be);
    }
    return r.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && i.push(s.assignTexture(t, "sheenColorMap", r.sheenColorTexture, Nt)), r.sheenRoughnessTexture !== void 0 && i.push(s.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(i);
  }
}
class Go {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return r.transmissionFactor !== void 0 && (t.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && i.push(s.assignTexture(t, "transmissionMap", r.transmissionTexture)), Promise.all(i);
  }
}
class jo {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && i.push(s.assignTexture(t, "thicknessMap", r.thicknessTexture)), t.attenuationDistance = r.attenuationDistance || 1 / 0;
    const o = r.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new et().setRGB(o[0], o[1], o[2], Be), Promise.all(i);
  }
}
class Ko {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}
class Wo {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && i.push(s.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const o = r.specularColorFactor || [1, 1, 1];
    return t.specularColor = new et().setRGB(o[0], o[1], o[2], Be), r.specularColorTexture !== void 0 && i.push(s.assignTexture(t, "specularColorMap", r.specularColorTexture, Nt)), Promise.all(i);
  }
}
class Yo {
  constructor(e) {
    this.parser = e, this.name = G.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return t.bumpScale = r.bumpFactor !== void 0 ? r.bumpFactor : 1, r.bumpTexture !== void 0 && i.push(s.assignTexture(t, "bumpMap", r.bumpTexture)), Promise.all(i);
  }
}
class Xo {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], r = n.extensions[this.name];
    return r.anisotropyStrength !== void 0 && (t.anisotropy = r.anisotropyStrength), r.anisotropyRotation !== void 0 && (t.anisotropyRotation = r.anisotropyRotation), r.anisotropyTexture !== void 0 && i.push(s.assignTexture(t, "anisotropyMap", r.anisotropyTexture)), Promise.all(i);
  }
}
class $o {
  constructor(e) {
    this.parser = e, this.name = G.KHR_TEXTURE_BASISU;
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
class qo {
  constructor(e) {
    this.parser = e, this.name = G.EXT_TEXTURE_WEBP;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, n = s.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], o = n.images[r.source];
    let a = s.textureLoader;
    if (o.uri) {
      const u = s.options.manager.getHandler(o.uri);
      u !== null && (a = u);
    }
    return s.loadTextureImage(e, r.source, a);
  }
}
class Jo {
  constructor(e) {
    this.parser = e, this.name = G.EXT_TEXTURE_AVIF;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, n = s.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], o = n.images[r.source];
    let a = s.textureLoader;
    if (o.uri) {
      const u = s.options.manager.getHandler(o.uri);
      u !== null && (a = u);
    }
    return s.loadTextureImage(e, r.source, a);
  }
}
class Zo {
  constructor(e) {
    this.name = G.EXT_MESHOPT_COMPRESSION, this.parser = e;
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
      return i.then(function(o) {
        const a = n.byteOffset || 0, u = n.byteLength || 0, f = n.count, l = n.byteStride, d = new Uint8Array(o, a, u);
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
class Qo {
  constructor(e) {
    this.name = G.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, s = t.nodes[e];
    if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0)
      return null;
    const n = t.meshes[s.mesh];
    for (const u of n.primitives)
      if (u.mode !== Me.TRIANGLES && u.mode !== Me.TRIANGLE_STRIP && u.mode !== Me.TRIANGLE_FAN && u.mode !== void 0)
        return null;
    const r = s.extensions[this.name].attributes, o = [], a = {};
    for (const u in r)
      o.push(this.parser.getDependency("accessor", r[u]).then((f) => (a[u] = f, a[u])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((u) => {
      const f = u.pop(), l = f.isGroup ? f.children : [f], d = u[0].count, h = [];
      for (const m of l) {
        const w = new Ae(), p = new U(), y = new Zs(), g = new U(1, 1, 1), v = new Ir(m.geometry, m.material, d);
        for (let x = 0; x < d; x++)
          a.TRANSLATION && p.fromBufferAttribute(a.TRANSLATION, x), a.ROTATION && y.fromBufferAttribute(a.ROTATION, x), a.SCALE && g.fromBufferAttribute(a.SCALE, x), v.setMatrixAt(x, w.compose(p, y, g));
        for (const x in a)
          if (x === "_COLOR_0") {
            const T = a[x];
            v.instanceColor = new Dr(T.array, T.itemSize, T.normalized);
          } else x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && m.geometry.setAttribute(x, a[x]);
        Qs.prototype.copy.call(v, m), this.parser.assignFinalMaterial(v), h.push(v);
      }
      return f.isGroup ? (f.clear(), f.add(...h), f) : h[0];
    }));
  }
}
const ur = "glTF", Et = 12, Fs = { JSON: 1313821514, BIN: 5130562 };
class ea {
  constructor(e) {
    this.name = G.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Et), s = new TextDecoder();
    if (this.header = {
      magic: s.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== ur)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - Et, i = new DataView(e, Et);
    let r = 0;
    for (; r < n; ) {
      const o = i.getUint32(r, !0);
      r += 4;
      const a = i.getUint32(r, !0);
      if (r += 4, a === Fs.JSON) {
        const u = new Uint8Array(e, Et + r, o);
        this.content = s.decode(u);
      } else if (a === Fs.BIN) {
        const u = Et + r;
        this.body = e.slice(u, u + o);
      }
      r += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class ta {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = G.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const s = this.json, n = this.dracoLoader, i = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, o = {}, a = {}, u = {};
    for (const f in r) {
      const l = Yn[f] || f.toLowerCase();
      o[l] = r[f];
    }
    for (const f in e.attributes) {
      const l = Yn[f] || f.toLowerCase();
      if (r[f] !== void 0) {
        const d = s.accessors[e.attributes[f]], h = mt[d.componentType];
        u[l] = h.name, a[l] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", i).then(function(f) {
      return new Promise(function(l, d) {
        n.decodeDracoFile(f, function(h) {
          for (const m in h.attributes) {
            const w = h.attributes[m], p = a[m];
            p !== void 0 && (w.normalized = p);
          }
          l(h);
        }, o, u, Be, d);
      });
    });
  }
}
class na {
  constructor() {
    this.name = G.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class sa {
  constructor() {
    this.name = G.KHR_MESH_QUANTIZATION;
  }
}
class fr extends ni {
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
    const i = this.resultBuffer, r = this.sampleValues, o = this.valueSize, a = o * 2, u = o * 3, f = n - t, l = (s - t) / f, d = l * l, h = d * l, m = e * u, w = m - u, p = -2 * h + 3 * d, y = h - d, g = 1 - p, v = y - d + l;
    for (let x = 0; x !== o; x++) {
      const T = r[w + x + o], A = r[w + x + a] * f, M = r[m + x + o], _ = r[m + x] * f;
      i[x] = g * T + v * A + p * M + y * _;
    }
    return i;
  }
}
const ra = new Zs();
class ia extends fr {
  interpolate_(e, t, s, n) {
    const i = super.interpolate_(e, t, s, n);
    return ra.fromArray(i).normalize().toArray(i), i;
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
}, mt = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Us = {
  9728: je,
  9729: tt,
  9984: Ur,
  9985: Fr,
  9986: Nr,
  9987: er
}, Os = {
  33071: en,
  33648: Or,
  10497: Nn
}, Sn = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Yn = {
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
}, ze = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, oa = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: nr,
  STEP: ti
}, En = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function aa(c) {
  return c.DefaultMaterial === void 0 && (c.DefaultMaterial = new tr({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Pn
  })), c.DefaultMaterial;
}
function Qe(c, e, t) {
  for (const s in t.extensions)
    c[s] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[s] = t.extensions[s]);
}
function Pe(c, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(c.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function ca(c, e, t) {
  let s = !1, n = !1, i = !1;
  for (let u = 0, f = e.length; u < f; u++) {
    const l = e[u];
    if (l.POSITION !== void 0 && (s = !0), l.NORMAL !== void 0 && (n = !0), l.COLOR_0 !== void 0 && (i = !0), s && n && i) break;
  }
  if (!s && !n && !i) return Promise.resolve(c);
  const r = [], o = [], a = [];
  for (let u = 0, f = e.length; u < f; u++) {
    const l = e[u];
    if (s) {
      const d = l.POSITION !== void 0 ? t.getDependency("accessor", l.POSITION) : c.attributes.position;
      r.push(d);
    }
    if (n) {
      const d = l.NORMAL !== void 0 ? t.getDependency("accessor", l.NORMAL) : c.attributes.normal;
      o.push(d);
    }
    if (i) {
      const d = l.COLOR_0 !== void 0 ? t.getDependency("accessor", l.COLOR_0) : c.attributes.color;
      a.push(d);
    }
  }
  return Promise.all([
    Promise.all(r),
    Promise.all(o),
    Promise.all(a)
  ]).then(function(u) {
    const f = u[0], l = u[1], d = u[2];
    return s && (c.morphAttributes.position = f), n && (c.morphAttributes.normal = l), i && (c.morphAttributes.color = d), c.morphTargetsRelative = !0, c;
  });
}
function la(c, e) {
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
function ua(c) {
  let e;
  const t = c.extensions && c.extensions[G.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + In(t.attributes) : e = c.indices + ":" + In(c.attributes) + ":" + c.mode, c.targets !== void 0)
    for (let s = 0, n = c.targets.length; s < n; s++)
      e += ":" + In(c.targets[s]);
  return e;
}
function In(c) {
  let e = "";
  const t = Object.keys(c).sort();
  for (let s = 0, n = t.length; s < n; s++)
    e += t[s] + ":" + c[t[s]] + ";";
  return e;
}
function Xn(c) {
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
function fa(c) {
  return c.search(/\.jpe?g($|\?)/i) > 0 || c.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : c.search(/\.webp($|\?)/i) > 0 || c.search(/^data\:image\/webp/) === 0 ? "image/webp" : c.search(/\.ktx2($|\?)/i) > 0 || c.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const da = new Ae();
class ha {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new No(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = !1, n = -1, i = !1, r = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      s = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const a = o.match(/Version\/(\d+)/);
      n = s && a ? parseInt(a[1], 10) : -1, i = o.indexOf("Firefox") > -1, r = i ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || s && n < 17 || i && r < 98 ? this.textureLoader = new Pr(this.options.manager) : this.textureLoader = new Cr(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new $n(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
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
      const o = {
        scene: r[0][n.scene || 0],
        scenes: r[0],
        animations: r[1],
        cameras: r[2],
        asset: n.asset,
        parser: s,
        userData: {}
      };
      return Qe(i, o, n), Pe(o, n), Promise.all(s._invokeAll(function(a) {
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
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n].joints;
      for (let o = 0, a = r.length; o < a; o++)
        e[r[o]].isBone = !0;
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
    const n = s.clone(), i = (r, o) => {
      const a = this.associations.get(r);
      a != null && this.associations.set(o, a);
      for (const [u, f] of r.children.entries())
        i(f, o.children[u]);
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
      return Promise.resolve(this.extensions[G.KHR_BINARY_GLTF].body);
    const n = this.options;
    return new Promise(function(i, r) {
      s.load(Ct.resolveURL(t.uri, n.path), i, void 0, function() {
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
      const r = Sn[n.type], o = mt[n.componentType], a = n.normalized === !0, u = new o(n.count * r);
      return Promise.resolve(new ht(u, r, a));
    }
    const i = [];
    return n.bufferView !== void 0 ? i.push(this.getDependency("bufferView", n.bufferView)) : i.push(null), n.sparse !== void 0 && (i.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(i).then(function(r) {
      const o = r[0], a = Sn[n.type], u = mt[n.componentType], f = u.BYTES_PER_ELEMENT, l = f * a, d = n.byteOffset || 0, h = n.bufferView !== void 0 ? s.bufferViews[n.bufferView].byteStride : void 0, m = n.normalized === !0;
      let w, p;
      if (h && h !== l) {
        const y = Math.floor(d / h), g = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + y + ":" + n.count;
        let v = t.cache.get(g);
        v || (w = new u(o, y * h, n.count * h / f), v = new Br(w, h / f), t.cache.add(g, v)), p = new Lr(v, a, d % h / f, m);
      } else
        o === null ? w = new u(n.count * a) : w = new u(o, d, n.count * a), p = new ht(w, a, m);
      if (n.sparse !== void 0) {
        const y = Sn.SCALAR, g = mt[n.sparse.indices.componentType], v = n.sparse.indices.byteOffset || 0, x = n.sparse.values.byteOffset || 0, T = new g(r[1], v, n.sparse.count * y), A = new u(r[2], x, n.sparse.count * a);
        o !== null && (p = new ht(p.array.slice(), p.itemSize, p.normalized)), p.normalized = !1;
        for (let M = 0, _ = T.length; M < _; M++) {
          const S = T[M];
          if (p.setX(S, A[M * a]), a >= 2 && p.setY(S, A[M * a + 1]), a >= 3 && p.setZ(S, A[M * a + 2]), a >= 4 && p.setW(S, A[M * a + 3]), a >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
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
    let o = this.textureLoader;
    if (r.uri) {
      const a = s.manager.getHandler(r.uri);
      a !== null && (o = a);
    }
    return this.loadTextureImage(e, i, o);
  }
  loadTextureImage(e, t, s) {
    const n = this, i = this.json, r = i.textures[e], o = i.images[t], a = (o.uri || o.bufferView) + ":" + r.sampler;
    if (this.textureCache[a])
      return this.textureCache[a];
    const u = this.loadImageSource(t, s).then(function(f) {
      f.flipY = !1, f.name = r.name || o.name || "", f.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (f.name = o.uri);
      const d = (i.samplers || {})[r.sampler] || {};
      return f.magFilter = Us[d.magFilter] || tt, f.minFilter = Us[d.minFilter] || er, f.wrapS = Os[d.wrapS] || Nn, f.wrapT = Os[d.wrapT] || Nn, f.generateMipmaps = !f.isCompressedTexture && f.minFilter !== je && f.minFilter !== tt, n.associations.set(f, { textures: e }), f;
    }).catch(function() {
      return null;
    });
    return this.textureCache[a] = u, u;
  }
  loadImageSource(e, t) {
    const s = this, n = this.json, i = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((l) => l.clone());
    const r = n.images[e], o = self.URL || self.webkitURL;
    let a = r.uri || "", u = !1;
    if (r.bufferView !== void 0)
      a = s.getDependency("bufferView", r.bufferView).then(function(l) {
        u = !0;
        const d = new Blob([l], { type: r.mimeType });
        return a = o.createObjectURL(d), a;
      });
    else if (r.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const f = Promise.resolve(a).then(function(l) {
      return new Promise(function(d, h) {
        let m = d;
        t.isImageBitmapLoader === !0 && (m = function(w) {
          const p = new ss(w);
          p.needsUpdate = !0, d(p);
        }), t.load(Ct.resolveURL(l, i.path), m, void 0, h);
      });
    }).then(function(l) {
      return u === !0 && o.revokeObjectURL(a), Pe(l, r), l.userData.mimeType = r.mimeType || fa(r.uri), l;
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
    const i = this;
    return this.getDependency("texture", s.index).then(function(r) {
      if (!r) return null;
      if (s.texCoord !== void 0 && s.texCoord > 0 && (r = r.clone(), r.channel = s.texCoord), i.extensions[G.KHR_TEXTURE_TRANSFORM]) {
        const o = s.extensions !== void 0 ? s.extensions[G.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const a = i.associations.get(r);
          r = i.extensions[G.KHR_TEXTURE_TRANSFORM].extendTexture(r, o), i.associations.set(r, a);
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
      const o = "PointsMaterial:" + s.uuid;
      let a = this.cache.get(o);
      a || (a = new kr(), pn.prototype.copy.call(a, s), a.color.copy(s.color), a.map = s.map, a.sizeAttenuation = !1, this.cache.add(o, a)), s = a;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + s.uuid;
      let a = this.cache.get(o);
      a || (a = new Hr(), pn.prototype.copy.call(a, s), a.color.copy(s.color), a.map = s.map, this.cache.add(o, a)), s = a;
    }
    if (n || i || r) {
      let o = "ClonedMaterial:" + s.uuid + ":";
      n && (o += "derivative-tangents:"), i && (o += "vertex-colors:"), r && (o += "flat-shading:");
      let a = this.cache.get(o);
      a || (a = s.clone(), i && (a.vertexColors = !0), r && (a.flatShading = !0), n && (a.normalScale && (a.normalScale.y *= -1), a.clearcoatNormalScale && (a.clearcoatNormalScale.y *= -1)), this.cache.add(o, a), this.associations.set(a, this.associations.get(s))), s = a;
    }
    e.material = s;
  }
  getMaterialType() {
    return tr;
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
    const o = {}, a = i.extensions || {}, u = [];
    if (a[G.KHR_MATERIALS_UNLIT]) {
      const l = n[G.KHR_MATERIALS_UNLIT];
      r = l.getMaterialType(), u.push(l.extendParams(o, i, t));
    } else {
      const l = i.pbrMetallicRoughness || {};
      if (o.color = new et(1, 1, 1), o.opacity = 1, Array.isArray(l.baseColorFactor)) {
        const d = l.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], Be), o.opacity = d[3];
      }
      l.baseColorTexture !== void 0 && u.push(t.assignTexture(o, "map", l.baseColorTexture, Nt)), o.metalness = l.metallicFactor !== void 0 ? l.metallicFactor : 1, o.roughness = l.roughnessFactor !== void 0 ? l.roughnessFactor : 1, l.metallicRoughnessTexture !== void 0 && (u.push(t.assignTexture(o, "metalnessMap", l.metallicRoughnessTexture)), u.push(t.assignTexture(o, "roughnessMap", l.metallicRoughnessTexture))), r = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), u.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    i.doubleSided === !0 && (o.side = Ys);
    const f = i.alphaMode || En.OPAQUE;
    if (f === En.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, f === En.MASK && (o.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && r !== It && (u.push(t.assignTexture(o, "normalMap", i.normalTexture)), o.normalScale = new Ce(1, 1), i.normalTexture.scale !== void 0)) {
      const l = i.normalTexture.scale;
      o.normalScale.set(l, l);
    }
    if (i.occlusionTexture !== void 0 && r !== It && (u.push(t.assignTexture(o, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && r !== It) {
      const l = i.emissiveFactor;
      o.emissive = new et().setRGB(l[0], l[1], l[2], Be);
    }
    return i.emissiveTexture !== void 0 && r !== It && u.push(t.assignTexture(o, "emissiveMap", i.emissiveTexture, Nt)), Promise.all(u).then(function() {
      const l = new r(o);
      return i.name && (l.name = i.name), Pe(l, i), t.associations.set(l, { materials: e }), i.extensions && Qe(n, l, i), l;
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
    const t = Vr.sanitizeNodeName(e || "");
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
    function i(o) {
      return s[G.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(a) {
        return ks(a, o, t);
      });
    }
    const r = [];
    for (let o = 0, a = e.length; o < a; o++) {
      const u = e[o], f = ua(u), l = n[f];
      if (l)
        r.push(l.promise);
      else {
        let d;
        u.extensions && u.extensions[G.KHR_DRACO_MESH_COMPRESSION] ? d = i(u) : d = ks(new zr(), u, t), n[f] = { primitive: u, promise: d }, r.push(d);
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
    const t = this, s = this.json, n = this.extensions, i = s.meshes[e], r = i.primitives, o = [];
    for (let a = 0, u = r.length; a < u; a++) {
      const f = r[a].material === void 0 ? aa(this.cache) : this.getDependency("material", r[a].material);
      o.push(f);
    }
    return o.push(t.loadGeometries(r)), Promise.all(o).then(function(a) {
      const u = a.slice(0, a.length - 1), f = a[a.length - 1], l = [];
      for (let h = 0, m = f.length; h < m; h++) {
        const w = f[h], p = r[h];
        let y;
        const g = u[h];
        if (p.mode === Me.TRIANGLES || p.mode === Me.TRIANGLE_STRIP || p.mode === Me.TRIANGLE_FAN || p.mode === void 0)
          y = i.isSkinnedMesh === !0 ? new Gr(w, g) : new jr(w, g), y.isSkinnedMesh === !0 && y.normalizeSkinWeights(), p.mode === Me.TRIANGLE_STRIP ? y.geometry = Ns(y.geometry, qs) : p.mode === Me.TRIANGLE_FAN && (y.geometry = Ns(y.geometry, Ln));
        else if (p.mode === Me.LINES)
          y = new Kr(w, g);
        else if (p.mode === Me.LINE_STRIP)
          y = new Wr(w, g);
        else if (p.mode === Me.LINE_LOOP)
          y = new Yr(w, g);
        else if (p.mode === Me.POINTS)
          y = new Xr(w, g);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(y.geometry.morphAttributes).length > 0 && la(y, i), y.name = t.createUniqueName(i.name || "mesh_" + e), Pe(y, i), p.extensions && Qe(n, y, p), t.assignFinalMaterial(y), l.push(y);
      }
      for (let h = 0, m = l.length; h < m; h++)
        t.associations.set(l[h], {
          meshes: e,
          primitives: h
        });
      if (l.length === 1)
        return i.extensions && Qe(n, l[0], i), l[0];
      const d = new gn();
      i.extensions && Qe(n, d, i), t.associations.set(d, { meshes: e });
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
    return s.type === "perspective" ? t = new $r(qr.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : s.type === "orthographic" && (t = new Jr(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), Pe(t, s), Promise.resolve(t);
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
      const i = n.pop(), r = n, o = [], a = [];
      for (let u = 0, f = r.length; u < f; u++) {
        const l = r[u];
        if (l) {
          o.push(l);
          const d = new Ae();
          i !== null && d.fromArray(i.array, u * 16), a.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[u]);
      }
      return new Zr(o, a);
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
    const t = this.json, s = this, n = t.animations[e], i = n.name ? n.name : "animation_" + e, r = [], o = [], a = [], u = [], f = [];
    for (let l = 0, d = n.channels.length; l < d; l++) {
      const h = n.channels[l], m = n.samplers[h.sampler], w = h.target, p = w.node, y = n.parameters !== void 0 ? n.parameters[m.input] : m.input, g = n.parameters !== void 0 ? n.parameters[m.output] : m.output;
      w.node !== void 0 && (r.push(this.getDependency("node", p)), o.push(this.getDependency("accessor", y)), a.push(this.getDependency("accessor", g)), u.push(m), f.push(w));
    }
    return Promise.all([
      Promise.all(r),
      Promise.all(o),
      Promise.all(a),
      Promise.all(u),
      Promise.all(f)
    ]).then(function(l) {
      const d = l[0], h = l[1], m = l[2], w = l[3], p = l[4], y = [];
      for (let v = 0, x = d.length; v < x; v++) {
        const T = d[v], A = h[v], M = m[v], _ = w[v], S = p[v];
        if (T === void 0) continue;
        T.updateMatrix && T.updateMatrix();
        const b = s._createAnimationTracks(T, A, M, _, S);
        if (b)
          for (let E = 0; E < b.length; E++)
            y.push(b[E]);
      }
      const g = new Qr(i, void 0, y);
      return Pe(g, n), g;
    });
  }
  createNodeMesh(e) {
    const t = this.json, s = this, n = t.nodes[e];
    return n.mesh === void 0 ? null : s.getDependency("mesh", n.mesh).then(function(i) {
      const r = s._getNodeRef(s.meshCache, n.mesh, i);
      return n.weights !== void 0 && r.traverse(function(o) {
        if (o.isMesh)
          for (let a = 0, u = n.weights.length; a < u; a++)
            o.morphTargetInfluences[a] = n.weights[a];
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
    const t = this.json, s = this, n = t.nodes[e], i = s._loadNodeShallow(e), r = [], o = n.children || [];
    for (let u = 0, f = o.length; u < f; u++)
      r.push(s.getDependency("node", o[u]));
    const a = n.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", n.skin);
    return Promise.all([
      i,
      Promise.all(r),
      a
    ]).then(function(u) {
      const f = u[0], l = u[1], d = u[2];
      d !== null && f.traverse(function(h) {
        h.isSkinnedMesh && h.bind(d, da);
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
    const i = t.nodes[e], r = i.name ? n.createUniqueName(i.name) : "", o = [], a = n._invokeOne(function(u) {
      return u.createNodeMesh && u.createNodeMesh(e);
    });
    return a && o.push(a), i.camera !== void 0 && o.push(n.getDependency("camera", i.camera).then(function(u) {
      return n._getNodeRef(n.cameraCache, i.camera, u);
    })), n._invokeAll(function(u) {
      return u.createNodeAttachment && u.createNodeAttachment(e);
    }).forEach(function(u) {
      o.push(u);
    }), this.nodeCache[e] = Promise.all(o).then(function(u) {
      let f;
      if (i.isBone === !0 ? f = new ei() : u.length > 1 ? f = new gn() : u.length === 1 ? f = u[0] : f = new Qs(), f !== u[0])
        for (let l = 0, d = u.length; l < d; l++)
          f.add(u[l]);
      if (i.name && (f.userData.name = i.name, f.name = r), Pe(f, i), i.extensions && Qe(s, f, i), i.matrix !== void 0) {
        const l = new Ae();
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
    const t = this.extensions, s = this.json.scenes[e], n = this, i = new gn();
    s.name && (i.name = n.createUniqueName(s.name)), Pe(i, s), s.extensions && Qe(t, i, s);
    const r = s.nodes || [], o = [];
    for (let a = 0, u = r.length; a < u; a++)
      o.push(n.getDependency("node", r[a]));
    return Promise.all(o).then(function(a) {
      for (let f = 0, l = a.length; f < l; f++)
        i.add(a[f]);
      const u = (f) => {
        const l = /* @__PURE__ */ new Map();
        for (const [d, h] of n.associations)
          (d instanceof pn || d instanceof ss) && l.set(d, h);
        return f.traverse((d) => {
          const h = n.associations.get(d);
          h != null && l.set(d, h);
        }), l;
      };
      return n.associations = u(i), i;
    });
  }
  _createAnimationTracks(e, t, s, n, i) {
    const r = [], o = e.name ? e.name : e.uuid, a = [];
    ze[i.path] === ze.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && a.push(d.name ? d.name : d.uuid);
    }) : a.push(o);
    let u;
    switch (ze[i.path]) {
      case ze.weights:
        u = is;
        break;
      case ze.rotation:
        u = os;
        break;
      case ze.translation:
      case ze.scale:
        u = rs;
        break;
      default:
        s.itemSize === 1 ? u = is : u = rs;
        break;
    }
    const f = n.interpolation !== void 0 ? oa[n.interpolation] : nr, l = this._getArrayFromAccessor(s);
    for (let d = 0, h = a.length; d < h; d++) {
      const m = new u(
        a[d] + "." + ze[i.path],
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
      const s = Xn(t.constructor), n = new Float32Array(t.length);
      for (let i = 0, r = t.length; i < r; i++)
        n[i] = t[i] * s;
      t = n;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(s) {
      const n = this instanceof os ? ia : fr;
      return new n(this.times, this.values, this.getValueSize() / 3, s);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function ma(c, e, t) {
  const s = e.attributes, n = new Ie();
  if (s.POSITION !== void 0) {
    const o = t.json.accessors[s.POSITION], a = o.min, u = o.max;
    if (a !== void 0 && u !== void 0) {
      if (n.set(
        new U(a[0], a[1], a[2]),
        new U(u[0], u[1], u[2])
      ), o.normalized) {
        const f = Xn(mt[o.componentType]);
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
    const o = new U(), a = new U();
    for (let u = 0, f = i.length; u < f; u++) {
      const l = i[u];
      if (l.POSITION !== void 0) {
        const d = t.json.accessors[l.POSITION], h = d.min, m = d.max;
        if (h !== void 0 && m !== void 0) {
          if (a.setX(Math.max(Math.abs(h[0]), Math.abs(m[0]))), a.setY(Math.max(Math.abs(h[1]), Math.abs(m[1]))), a.setZ(Math.max(Math.abs(h[2]), Math.abs(m[2]))), d.normalized) {
            const w = Xn(mt[d.componentType]);
            a.multiplyScalar(w);
          }
          o.max(a);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    n.expandByVector(o);
  }
  c.boundingBox = n;
  const r = new si();
  n.getCenter(r.center), r.radius = n.min.distanceTo(n.max) / 2, c.boundingSphere = r;
}
function ks(c, e, t) {
  const s = e.attributes, n = [];
  function i(r, o) {
    return t.getDependency("accessor", r).then(function(a) {
      c.setAttribute(o, a);
    });
  }
  for (const r in s) {
    const o = Yn[r] || r.toLowerCase();
    o in c.attributes || n.push(i(s[r], o));
  }
  if (e.indices !== void 0 && !c.index) {
    const r = t.getDependency("accessor", e.indices).then(function(o) {
      c.setIndex(o);
    });
    n.push(r);
  }
  return as.workingColorSpace !== Be && "COLOR_0" in s && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${as.workingColorSpace}" not supported.`), Pe(c, e), ma(c, e, t), Promise.all(n).then(function() {
    return e.targets !== void 0 ? ca(c, e.targets, t) : c;
  });
}
class pa extends Js {
  /**
   * Constructs a new Cube LUT loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.type = Pt;
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
    const i = new $n(this.manager);
    i.setPath(this.path), i.setResponseType("text"), i.load(e, (r) => {
      try {
        t(this.parse(r));
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
    const t = /TITLE +"([^"]*)"/, s = /LUT_3D_SIZE +(\d+)/, n = /DOMAIN_MIN +([\d.]+) +([\d.]+) +([\d.]+)/, i = /DOMAIN_MAX +([\d.]+) +([\d.]+) +([\d.]+)/, r = /^([\d.e+-]+) +([\d.e+-]+) +([\d.e+-]+) *$/gm;
    let o = t.exec(e);
    const a = o !== null ? o[1] : null;
    if (o = s.exec(e), o === null)
      throw new Error("LUTCubeLoader: Missing LUT_3D_SIZE information");
    const u = Number(o[1]), f = u ** 3 * 4, l = this.type === Pt ? new Uint8Array(f) : new Float32Array(f), d = new U(0, 0, 0), h = new U(1, 1, 1);
    if (o = n.exec(e), o !== null && d.set(Number(o[1]), Number(o[2]), Number(o[3])), o = i.exec(e), o !== null && h.set(Number(o[1]), Number(o[2]), Number(o[3])), d.x > h.x || d.y > h.y || d.z > h.z)
      throw new Error("LUTCubeLoader: Invalid input domain");
    const m = this.type === Pt ? 255 : 1;
    let w = 0;
    for (; (o = r.exec(e)) !== null; )
      l[w++] = Number(o[1]) * m, l[w++] = Number(o[2]) * m, l[w++] = Number(o[3]) * m, l[w++] = m;
    const p = new ri();
    return p.image.data = l, p.image.width = u, p.image.height = u, p.image.depth = u, p.type = this.type, p.magFilter = tt, p.minFilter = tt, p.wrapS = en, p.wrapT = en, p.wrapR = en, p.generateMipmaps = !1, p.needsUpdate = !0, {
      title: a,
      size: u,
      domainMin: d,
      domainMax: h,
      texture3D: p
    };
  }
}
class ga extends ii {
  /**
      * Constructs a new RGBE/HDR loader.
      *
      * @param {LoadingManager} [manager] - The loading manager.
      */
  constructor(e) {
    super(e), this.type = Ft;
  }
  /**
      * Parses the given RGBE texture data.
      *
      * @param {ArrayBuffer} buffer - The raw texture data.
      * @return {DataTextureLoader~TexData} An object representing the parsed texture data.
      */
  parse(e) {
    const r = function(_, S) {
      switch (_) {
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
    }, l = function(_, S, b) {
      S = S || 1024;
      let R = _.pos, I = -1, P = 0, C = "", L = String.fromCharCode.apply(null, new Uint16Array(_.subarray(R, R + 128)));
      for (; 0 > (I = L.indexOf(`
`)) && P < S && R < _.byteLength; )
        C += L, P += L.length, R += 128, L += String.fromCharCode.apply(null, new Uint16Array(_.subarray(R, R + 128)));
      return -1 < I ? (_.pos += P + I + 1, C + L.slice(0, I)) : !1;
    }, d = function(_) {
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
      for ((_.pos >= _.byteLength || !(C = l(_))) && r(1, "no header found"), (L = C.match(S)) || r(3, "bad initial token"), P.valid |= 1, P.programtype = L[1], P.string += C + `
`; C = l(_), C !== !1; ) {
        if (P.string += C + `
`, C.charAt(0) === "#") {
          P.comments += C + `
`;
          continue;
        }
        if ((L = C.match(b)) && (P.gamma = parseFloat(L[1])), (L = C.match(E)) && (P.exposure = parseFloat(L[1])), (L = C.match(R)) && (P.valid |= 2, P.format = L[1]), (L = C.match(I)) && (P.valid |= 4, P.height = parseInt(L[1], 10), P.width = parseInt(L[2], 10)), P.valid & 2 && P.valid & 4) break;
      }
      return P.valid & 2 || r(3, "missing format specifier"), P.valid & 4 || r(3, "missing image size specifier"), P;
    }, h = function(_, S, b) {
      const E = S;
      if (
        // run length encoding is not allowed so read flat
        E < 8 || E > 32767 || // this file is not run length encoded
        _[0] !== 2 || _[1] !== 2 || _[2] & 128
      )
        return new Uint8Array(_);
      E !== (_[2] << 8 | _[3]) && r(3, "wrong scanline width");
      const R = new Uint8Array(4 * S * b);
      R.length || r(4, "unable to allocate buffer space");
      let I = 0, P = 0;
      const C = 4 * E, L = new Uint8Array(4), O = new Uint8Array(C);
      let X = b;
      for (; X > 0 && P < _.byteLength; ) {
        P + 4 > _.byteLength && r(1), L[0] = _[P++], L[1] = _[P++], L[2] = _[P++], L[3] = _[P++], (L[0] != 2 || L[1] != 2 || (L[2] << 8 | L[3]) != E) && r(3, "bad rgbe scanline format");
        let ne = 0, j;
        for (; ne < C && P < _.byteLength; ) {
          j = _[P++];
          const N = j > 128;
          if (N && (j -= 128), (j === 0 || ne + j > C) && r(3, "bad scanline data"), N) {
            const k = _[P++];
            for (let Y = 0; Y < j; Y++)
              O[ne++] = k;
          } else
            O.set(_.subarray(P, P + j), ne), ne += j, P += j;
        }
        const D = E;
        for (let N = 0; N < D; N++) {
          let k = 0;
          R[I] = O[N + k], k += E, R[I + 1] = O[N + k], k += E, R[I + 2] = O[N + k], k += E, R[I + 3] = O[N + k], I += 4;
        }
        X--;
      }
      return R;
    }, m = function(_, S, b, E) {
      const R = _[S + 3], I = Math.pow(2, R - 128) / 255;
      b[E + 0] = _[S + 0] * I, b[E + 1] = _[S + 1] * I, b[E + 2] = _[S + 2] * I, b[E + 3] = 1;
    }, w = function(_, S, b, E) {
      const R = _[S + 3], I = Math.pow(2, R - 128) / 255;
      b[E + 0] = Ut.toHalfFloat(Math.min(_[S + 0] * I, 65504)), b[E + 1] = Ut.toHalfFloat(Math.min(_[S + 1] * I, 65504)), b[E + 2] = Ut.toHalfFloat(Math.min(_[S + 2] * I, 65504)), b[E + 3] = Ut.toHalfFloat(1);
    }, p = new Uint8Array(e);
    p.pos = 0;
    const y = d(p), g = y.width, v = y.height, x = h(p.subarray(p.pos), g, v);
    let T, A, M;
    switch (this.type) {
      case We:
        M = x.length / 4;
        const _ = new Float32Array(M * 4);
        for (let b = 0; b < M; b++)
          m(x, b * 4, _, b * 4);
        T = _, A = We;
        break;
      case Ft:
        M = x.length / 4;
        const S = new Uint16Array(M * 4);
        for (let b = 0; b < M; b++)
          w(x, b * 4, S, b * 4);
        T = S, A = Ft;
        break;
      default:
        throw new Error("THREE.HDRLoader: Unsupported type: " + this.type);
    }
    return {
      width: g,
      height: v,
      data: T,
      header: y.string,
      gamma: y.gamma,
      exposure: y.exposure,
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
    function i(r, o) {
      switch (r.type) {
        case We:
        case Ft:
          r.colorSpace = Be, r.minFilter = tt, r.magFilter = tt, r.generateMipmaps = !1, r.flipY = !0;
          break;
      }
      t && t(r, o);
    }
    return super.load(e, i, s, n);
  }
}
class xa extends ga {
  constructor(e) {
    console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."), super(e);
  }
}
class Lt {
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
class Ue {
  static gltfLoader = new Lo();
  static loadGLTF = (e) => new Promise((t, s) => {
    if (!e)
      return t(new B.Group());
    Ue.gltfLoader.load(
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
    const t = URL.createObjectURL(e), s = new xa();
    try {
      const n = await s.loadAsync(t);
      return n.mapping = B.EquirectangularReflectionMapping, URL.revokeObjectURL(t), n;
    } catch (n) {
      throw URL.revokeObjectURL(t), Lt.error(`Error loading environment map: ${n}`), n;
    }
  }
  static loadNodeMapForGLTF = async (e) => {
    const t = await Ue.loadGLTF(e), s = {};
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
    const i = n.getContext("2d");
    if (!i)
      throw new Error("Canvas 2D context not available");
    return i.fillStyle = e, i.fillRect(0, 0, t, s), n.toDataURL();
  }
  static loadLut = async (e) => await new pa().loadAsync(e);
  static getImageUrlFromTexture(e) {
    const t = document.createElement("canvas");
    t.width = 2e3, t.height = 2e3;
    const s = e.repeat ?? new B.Vector2(1, 1), n = t.getContext("2d", { willReadFrequently: !0 });
    if (!n)
      return Lt.error("Failed to get 2D context"), null;
    const i = n.createPattern(
      e.image,
      "repeat"
    );
    if (i)
      n.fillStyle = i, n.save(), n.scale(1 / s.x, 1 / s.y), n.fillRect(0, 0, t.width * s.x, t.height * s.y), n.restore();
    else
      return Lt.error("Failed to create pattern"), null;
    return t.toDataURL();
  }
  static getBoundingBox = (e) => {
    const t = new B.Box3();
    return e.forEach((s) => {
      t.expandByObject(s);
    }), t;
  };
  static getCenterPointAndNormal = (e) => {
    const t = e.geometry, s = t.attributes.position, n = t.attributes.normal, i = t.attributes.uv, r = e.matrixWorld;
    if (!s || !n || !i)
      return {
        center: Ue.getBoundingBox([e]).getCenter(new B.Vector3()),
        normal: new B.Vector3(0, 0, 1),
        uv: new B.Vector2(0.5, 0.5)
      };
    const o = new B.Vector3(0, 0, 0), a = s.count;
    for (let m = 0; m < a; m++) {
      const w = new B.Vector3().fromBufferAttribute(s, m).applyMatrix4(r);
      o.add(w);
    }
    o.divideScalar(a);
    let u = 1 / 0, f = 0;
    for (let m = 0; m < a; m++) {
      const p = new B.Vector3().fromBufferAttribute(s, m).applyMatrix4(r).distanceTo(o);
      p < u && (u = p, f = m);
    }
    const l = new B.Vector3().fromBufferAttribute(n, f).applyMatrix4(r), d = new B.Vector3().fromBufferAttribute(s, f).applyMatrix4(r), h = new B.Vector2().fromBufferAttribute(i, f);
    return {
      center: d,
      normal: l,
      uv: h
    };
  };
  static getSizeAndCenter = (e) => {
    const t = Ue.getBoundingBox([e]), s = t.getSize(new B.Vector3()), n = t.getCenter(new B.Vector3());
    return {
      boundingBox: t,
      center: n,
      size: s
    };
  };
}
class ya {
  _libState;
  _cameraRef = null;
  constructor(e) {
    this._libState = e, Xe(this);
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
    const t = Array.isArray(e) ? e[e.length - 1] : e, s = -1, { boundingBox: n, center: i } = Ue.getSizeAndCenter(t);
    if (t instanceof B.Mesh) {
      const { center: o } = Ue.getCenterPointAndNormal(
        t
      ), a = Math.abs(o.x);
      this._cameraRef?.setLookAt(
        i.x,
        i.y,
        i.z,
        a,
        o.y,
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
    const r = this._libState.designManager.viewManager.settings;
    if (r.fitBoxScale !== 1) {
      const o = n.clone(), a = new B.Vector3(), u = new B.Vector3();
      o.getCenter(a), o.getSize(u), u.multiplyScalar(r.fitBoxScale), o.setFromCenterAndSize(a, u), this._cameraRef?.fitToBox(o, !0);
    } else
      this._cameraRef?.fitToBox(n, !0);
  };
  dispose() {
    this._cameraRef = null;
  }
}
class va {
  _envVisibility = !1;
  _envIntensity = 1.6;
  _envRotation = {
    x: 0,
    y: 0,
    z: 1.5
  };
  _environmentTexture = null;
  constructor() {
    Xe(this);
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
      const t = await Ue.loadEnvironmentTexture(e);
      this.setEnvironmentTexture(t);
    } catch (t) {
      Lt.error(`Failed to load environment: ${t}`);
    }
  }
  clearMap = (e) => {
    e === "envMap" && (this._envVisibility = !1, this._envIntensity = 1.6, this._envRotation = { x: 0, y: 0, z: 1.5 }, this._environmentTexture = null);
  };
  dispose() {
    this.clearMap("envMap");
  }
}
class Ta {
  _libState;
  _meshInfos = [];
  _groupRef = null;
  constructor(e) {
    this._libState = e, Xe(this);
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
class wa {
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
    Xe(this, {
      _engravingCanvas: cs.ref,
      _normalMapCanvas: cs.ref
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
class _a {
  _libState;
  _meshManager;
  _cameraManager;
  _envManager;
  _ringManager;
  constructor(e) {
    this._libState = e, this._meshManager = new Ta(e), this._cameraManager = new ya(e), this._envManager = new va(), this._ringManager = new wa(), Xe(this);
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
class Ma {
  _libState;
  _meshInfoJson = null;
  _jsonUrl = "./init.json";
  _source;
  constructor(e, t = ts.WEBSITE) {
    this._libState = e, this._source = t, Xe(this);
  }
  get source() {
    return this._source;
  }
  setSource(e) {
    this._source = e;
  }
  get settings() {
    return Co[this._source];
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
class ba {
  _libState;
  _viewManager;
  modelMinY = 0;
  constructor(e, t) {
    this._libState = e, this._viewManager = new Ma(e, t), Xe(this);
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
class dr {
  _designManager;
  _design3DManager;
  constructor(e) {
    this._designManager = new ba(this, e), this._design3DManager = new _a(this), Xe(this);
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
const Aa = "#f2efe8";
function Ra({
  color: c = Aa
}) {
  const { scene: e } = Gs();
  return re(() => {
    let t = !1, s = null;
    const n = Ue.getImageByColor(c);
    return new B.TextureLoader().loadAsync(n).then((r) => {
      if (t) {
        r.dispose();
        return;
      }
      s = r, s.colorSpace = B.SRGBColorSpace, e.background = s;
    }).catch((r) => {
      Lt.error(`Failed to load scene background texture: ${r}`);
    }), () => {
      t = !0, s && e.background === s && (e.background = null, s.dispose());
    };
  }, [c, e]), null;
}
const hr = He(({ children: c }) => {
  const e = Te(null), { designManager: t, design3DManager: s } = nt(), n = t.modelMinY, { currentView: i } = s.ringManager;
  return /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
    c && /* @__PURE__ */ W.jsx("group", { ref: e, children: c }),
    i !== 2 && /* @__PURE__ */ W.jsx(
      xr,
      {
        position: [0, n - 0.02, 0],
        opacity: 0.45,
        scale: 4,
        blur: 2.5,
        far: 3
      }
    )
  ] });
}), Sa = He(() => {
  const { design3DManager: c, designManager: e } = nt(), { cameraManager: t, ringManager: s } = c, n = t.cameraRef, i = s.currentView, r = e.viewManager.settings;
  return re(() => {
    if (n)
      if (i === 2)
        n.minDistance = 1, n.maxDistance = 4, n.smoothTime = 0.8, n.setLookAt(0, 2, -4.4, 0, 0, 0, !0).then(() => {
          n.smoothTime = 0.25;
        });
      else {
        n.smoothTime = 0.8;
        const o = r.homeDistance;
        n.setLookAt(0, 0, o, 0, 0, 0, !0).then(() => {
          n.smoothTime = 0.25, s.currentView !== 2 && (n.minDistance = r.minDistance, n.maxDistance = r.maxDistance);
        });
      }
  }, [i, n, s, r]), null;
}), Na = He(
  mr(
    ({
      backgroundColor: c = "#f2efe8",
      className: e,
      diamondEnvPath: t = "/08.hdr",
      envPath: s = "/env/08.exr",
      style: n,
      source: i
    }, r) => {
      const [o] = sn(() => new dr(i));
      pr(
        r,
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
      ), re(() => {
        i && o.designManager.viewManager.setSource(i);
      }, [i, o]), re(() => () => {
        o.dispose();
      }, [o]);
      const a = o.design3DManager.ringManager.isLoaded, u = i ? o.designManager.viewManager.settings.canvasColor : c;
      return /* @__PURE__ */ W.jsx(qn.Provider, { value: o, children: /* @__PURE__ */ W.jsx(
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
            Ks,
            {
              frameloop: "always",
              shadows: !0,
              camera: { fov: 35, position: [0, 0, o.designManager.viewManager.settings.homeDistance] },
              children: [
                /* @__PURE__ */ W.jsx(
                  Ra,
                  {
                    color: i ? o.designManager.viewManager.settings.canvasColor : c
                  }
                ),
                /* @__PURE__ */ W.jsxs(rn, { fallback: null, children: [
                  /* @__PURE__ */ W.jsx(
                    Vs,
                    {
                      files: s,
                      environmentIntensity: 0.7,
                      environmentRotation: [0, 3.63, 0]
                    }
                  ),
                  /* @__PURE__ */ W.jsx(lr, { diamondEnvPath: t }),
                  /* @__PURE__ */ W.jsx(hr, {}),
                  /* @__PURE__ */ W.jsx(Sa, {}),
                  /* @__PURE__ */ W.jsx(
                    zs,
                    {
                      makeDefault: !0,
                      minDistance: o.design3DManager.ringManager.currentView === 2 ? 1 : o.designManager.viewManager.settings.minDistance,
                      maxDistance: o.design3DManager.ringManager.currentView === 2 ? 4 : o.designManager.viewManager.settings.maxDistance,
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
), Fa = He(
  ({
    collection: c,
    modelId: e,
    variations: t,
    activeVariation: s,
    colorHex: n = "#e8c070",
    finish: i = "Polished",
    showDiamond: r = !0,
    envPath: o = "/env/08.exr",
    diamondEnvPath: a = "/08.hdr",
    backgroundColor: u = "#f8f7f2"
  }) => {
    const l = Te(new dr()).current, { ringManager: d } = l.design3DManager, h = (p, y, g) => {
      const v = p.charAt(0).toUpperCase() + p.slice(1);
      let x = g.replace(/\s+/g, "");
      return x.endsWith("mm") || (x = `${x}mm`), `/BehytRings/${v}/${y}/${x}/${y}_${x}.glb`;
    }, m = s || t[0] || "", w = m ? h(c, e, m) : "";
    return re(() => {
      w && d.initModel(w);
    }, [w, d]), re(() => {
      d.setMetalColor(n);
    }, [n, d]), re(() => {
      d.setFinish(i);
    }, [i, d]), re(() => {
      d.setDiamondsVisible(r);
    }, [r, d]), /* @__PURE__ */ W.jsx(qn.Provider, { value: l, children: /* @__PURE__ */ W.jsxs(
      Ks,
      {
        frameloop: "always",
        shadows: !0,
        camera: { fov: 35, position: [0, 0, 8] },
        children: [
          /* @__PURE__ */ W.jsx("color", { attach: "background", args: [u] }),
          /* @__PURE__ */ W.jsxs(rn, { fallback: null, children: [
            /* @__PURE__ */ W.jsx(
              Vs,
              {
                files: o,
                environmentIntensity: 0.7,
                environmentRotation: [0, 3.63, 0]
              }
            ),
            /* @__PURE__ */ W.jsx(lr, { diamondEnvPath: a }),
            /* @__PURE__ */ W.jsx(hr, {}),
            /* @__PURE__ */ W.jsx(
              zs,
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
  Fa as RingScene,
  Na as SDKViewer,
  Na as Viewer3D,
  ts as ViewerSource
};
