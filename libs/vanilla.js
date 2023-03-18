/* esm.sh - esbuild bundle(valtio@1.6.1/vanilla) es2022 production */
import {
    getUntracked as H,
    markToTrack as D
} from 'proxy-compare'
var T = (import.meta.env && import.meta.env.MODE) !== 'production' ? Symbol('VERSION') : Symbol(),
    f = (import.meta.env && import.meta.env.MODE) !== 'production' ? Symbol('LISTENERS') : Symbol(),
    P = (import.meta.env && import.meta.env.MODE) !== 'production' ? Symbol('SNAPSHOT') : Symbol(),
    O = (import.meta.env && import.meta.env.MODE) !== 'production' ? Symbol('HANDLER') : Symbol(),
    p = (import.meta.env && import.meta.env.MODE) !== 'production' ? Symbol('PROMISE_RESULT') : Symbol(),
    L = (import.meta.env && import.meta.env.MODE) !== 'production' ? Symbol('PROMISE_ERROR') : Symbol(),
    b = new WeakSet()
function U(e) {
    return b.add(e), e
}
var h = (e) => typeof e == 'object' && e !== null,
    W = (e) =>
        h(e) &&
        !b.has(e) &&
        (Array.isArray(e) || !(Symbol.iterator in e)) &&
        !(e instanceof WeakMap) &&
        !(e instanceof WeakSet) &&
        !(e instanceof Error) &&
        !(e instanceof Number) &&
        !(e instanceof Date) &&
        !(e instanceof String) &&
        !(e instanceof RegExp) &&
        !(e instanceof ArrayBuffer),
    A = new WeakMap(),
    N = 1,
    I = new WeakMap()
function _(e = {}) {
    if (!h(e)) throw new Error('object required')
    let E = A.get(e)
    if (E) return E
    let a = N,
        u = new Set(),
        l = (o, t = ++N) => {
            a !== t && ((a = t), u.forEach((n) => n(o, t)))
        },
        m = new Map(),
        R = (o) => {
            let t = m.get(o)
            return (
                t ||
                    ((t = (n, r) => {
                        let s = [...n]
                        ;(s[1] = [o, ...s[1]]), l(s, r)
                    }),
                    m.set(o, t)),
                t
            )
        },
        v = (o) => {
            let t = m.get(o)
            return m.delete(o), t
        },
        V = (o, t) => {
            let n = I.get(t)
            if (n?.[0] === a) return n[1]
            let r = Array.isArray(o) ? [] : Object.create(Object.getPrototypeOf(o))
            return (
                D(r, !0),
                I.set(t, [a, r]),
                Reflect.ownKeys(o).forEach((s) => {
                    let i = Reflect.get(o, s, t)
                    if (b.has(i)) D(i, !1), (r[s] = i)
                    else if (i instanceof Promise)
                        if (p in i) r[s] = i[p]
                        else {
                            let d = i[L] || i
                            Object.defineProperty(r, s, {
                                get() {
                                    if (p in i) return i[p]
                                    throw d
                                }
                            })
                        }
                    else i?.[f] ? (r[s] = i[P]) : (r[s] = i)
                }),
                Object.freeze(r),
                r
            )
        },
        w = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e)),
        M = {
            get(o, t, n) {
                return t === T ? a : t === f ? u : t === P ? V(o, n) : t === O ? M : Reflect.get(o, t, n)
            },
            deleteProperty(o, t) {
                let n = Reflect.get(o, t),
                    r = n?.[f]
                r && r.delete(v(t))
                let s = Reflect.deleteProperty(o, t)
                return s && l(['delete', [t], n]), s
            },
            is: Object.is,
            canProxy: W,
            set(o, t, n, r) {
                var s
                let i = Reflect.has(o, t),
                    d = Reflect.get(o, t, r)
                if (i && this.is(d, n)) return !0
                let g = d?.[f]
                g && g.delete(v(t)), h(n) && (n = H(n) || n)
                let c
                return (
                    (s = Object.getOwnPropertyDescriptor(o, t)) != null && s.set
                        ? (c = n)
                        : n instanceof Promise
                        ? (c = n
                              .then((S) => ((c[p] = S), l(['resolve', [t], S]), S))
                              .catch((S) => {
                                  ;(c[L] = S), l(['reject', [t], S])
                              }))
                        : n?.[f]
                        ? ((c = n), c[f].add(R(t)))
                        : this.canProxy(n)
                        ? ((c = _(n)), c[f].add(R(t)))
                        : (c = n),
                    Reflect.set(o, t, c, r),
                    l(['set', [t], n, d]),
                    !0
                )
            }
        },
        y = new Proxy(w, M)
    return (
        A.set(e, y),
        Reflect.ownKeys(e).forEach((o) => {
            let t = Object.getOwnPropertyDescriptor(e, o)
            t.get || t.set ? Object.defineProperty(w, o, t) : (y[o] = e[o])
        }),
        y
    )
}
function C(e) {
    return h(e) ? e[T] : void 0
}
function K(e, E, a) {
    ;(import.meta.env && import.meta.env.MODE) !== 'production' && !e?.[f] && console.warn('Please use proxy object')
    let u,
        l = [],
        m = (R) => {
            if ((l.push(R), a)) {
                E(l.splice(0))
                return
            }
            u ||
                (u = Promise.resolve().then(() => {
                    ;(u = void 0), E(l.splice(0))
                }))
        }
    return (
        e[f].add(m),
        () => {
            e[f].delete(m)
        }
    )
}
function q(e) {
    return (
        (import.meta.env && import.meta.env.MODE) !== 'production' &&
            !e?.[P] &&
            console.warn('Please use proxy object'),
        e[P]
    )
}
function z(e) {
    return (
        (import.meta.env && import.meta.env.MODE) !== 'production' &&
            !e?.[O] &&
            console.warn('Please use proxy object'),
        e[O]
    )
}
export { z as getHandler, C as getVersion, _ as proxy, U as ref, q as snapshot, K as subscribe }
//# sourceMappingURL=vanilla.js.map
