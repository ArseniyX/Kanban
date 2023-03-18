/* esm.sh - esbuild bundle(use-sync-external-store@1.1.0/shim/index) es2022 production */
import __0$ from 'use-sync-external'
var x = Object.create
var d = Object.defineProperty
var _ = Object.getOwnPropertyDescriptor
var a = Object.getOwnPropertyNames
var E = Object.getPrototypeOf,
    j = Object.prototype.hasOwnProperty
var q = ((e) =>
    typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
        ? new Proxy(e, { get: (r, t) => (typeof require < 'u' ? require : r)[t] })
        : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments)
    throw new Error('Dynamic require of "' + e + '" is not supported')
})
var v = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports),
    y = (e, r) => {
        for (var t in r) d(e, t, { get: r[t], enumerable: !0 })
    },
    n = (e, r, t, p) => {
        if ((r && typeof r == 'object') || typeof r == 'function')
            for (let u of a(r))
                !j.call(e, u) && u !== t && d(e, u, { get: () => r[u], enumerable: !(p = _(r, u)) || p.enumerable })
        return e
    },
    s = (e, r, t) => (n(e, r, 'default'), t && n(t, r, 'default')),
    c = (e, r, t) => (
        (t = e != null ? x(E(e)) : {}),
        n(r || !e || !e.__esModule ? d(t, 'default', { value: e, enumerable: !0 }) : t, e)
    )
var l = v((O, i) => {
    'use strict'
    i.exports = __0$
})
var o = {}
y(o, { default: () => h, useSyncExternalStore: () => N })
var m = c(l())
s(o, c(l()))
var { useSyncExternalStore: N } = m,
    { default: f, ...S } = m,
    h = f !== void 0 ? f : S
export { h as default, N as useSyncExternalStore }
//# sourceMappingURL=index.js.map
