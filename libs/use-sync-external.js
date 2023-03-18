/* esm.sh - esbuild bundle(use-sync-external-store@1.1.0/cjs/use-sync-external-store-shim.production.min.js) es2022 production */
import * as __0$ from 'preact'
var m = Object.create
var d = Object.defineProperty
var x = Object.getOwnPropertyDescriptor
var E = Object.getOwnPropertyNames
var w = Object.getPrototypeOf,
    _ = Object.prototype.hasOwnProperty
var g = ((e) =>
    typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
        ? new Proxy(e, { get: (t, n) => (typeof require < 'u' ? require : t)[n] })
        : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments)
    throw new Error('Dynamic require of "' + e + '" is not supported')
})
var h = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    j = (e, t) => {
        for (var n in t) d(e, n, { get: t[n], enumerable: !0 })
    },
    s = (e, t, n, f) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
            for (let u of E(t))
                !_.call(e, u) && u !== n && d(e, u, { get: () => t[u], enumerable: !(f = x(t, u)) || f.enumerable })
        return e
    },
    o = (e, t, n) => (s(e, t, 'default'), n && s(n, t, 'default')),
    p = (e, t, n) => (
        (n = e != null ? m(w(e)) : {}),
        s(t || !e || !e.__esModule ? d(n, 'default', { value: e, enumerable: !0 }) : n, e)
    )
var l = h((S) => {
    'use strict'
    var i = __0$
    function q(e, t) {
        return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
    }
    var O = typeof Object.is == 'function' ? Object.is : q,
        k = i.useState,
        D = i.useEffect,
        L = i.useLayoutEffect,
        V = i.useDebugValue
    function z(e, t) {
        var n = t(),
            f = k({ inst: { value: n, getSnapshot: t } }),
            u = f[0].inst,
            c = f[1]
        return (
            L(
                function () {
                    ;(u.value = n), (u.getSnapshot = t), a(u) && c({ inst: u })
                },
                [e, n, t]
            ),
            D(
                function () {
                    return (
                        a(u) && c({ inst: u }),
                        e(function () {
                            a(u) && c({ inst: u })
                        })
                    )
                },
                [e]
            ),
            V(n),
            n
        )
    }
    function a(e) {
        var t = e.getSnapshot
        e = e.value
        try {
            var n = t()
            return !O(e, n)
        } catch {
            return !0
        }
    }
    function A(e, t) {
        return t()
    }
    var B = typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u' ? A : z
    S.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : B
})
var r = {}
j(r, { default: () => G, useSyncExternalStore: () => C })
var y = p(l())
o(r, p(l()))
var { useSyncExternalStore: C } = y,
    { default: v, ...F } = y,
    G = v !== void 0 ? v : F
export { G as default, C as useSyncExternalStore }
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=use-sync-external-store-shim.production.min.js.map
