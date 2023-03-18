/* esm.sh - esbuild bundle(proxy-compare@2.1.0) es2022 production */
var l = Symbol(),
    h = Symbol(),
    g = Symbol(),
    f = Object.getPrototypeOf,
    u = new WeakMap(),
    p = (e) => e && (u.has(e) ? u.get(e) : f(e) === Object.prototype || f(e) === Array.prototype),
    y = (e) => typeof e == 'object' && e !== null,
    b = (e, n) => {
        let c = !1,
            s = (t, r, o) => {
                if (!c) {
                    let i = t.a.get(e)
                    i || ((i = new Set()), t.a.set(e, i)), (o && i.has(l)) || i.add(r)
                }
            },
            a = {
                f: n,
                get(t, r) {
                    return r === g ? e : (s(this, r), O(t[r], this.a, this.c))
                },
                has(t, r) {
                    return r === h ? ((c = !0), this.a.delete(e), !0) : (s(this, r), r in t)
                },
                getOwnPropertyDescriptor(t, r) {
                    return s(this, r, !0), Object.getOwnPropertyDescriptor(t, r)
                },
                ownKeys(t) {
                    return s(this, l), Reflect.ownKeys(t)
                }
            }
        return n && (a.set = a.deleteProperty = () => !1), a
    },
    O = (e, n, c) => {
        if (!p(e)) return e
        let s = e[g] || e,
            a = ((r) =>
                Object.isFrozen(r) || Object.values(Object.getOwnPropertyDescriptors(r)).some((o) => !o.writable))(s),
            t = c && c.get(s)
        return (
            (t && t.f === a) ||
                ((t = b(s, a)),
                (t.p = new Proxy(
                    a
                        ? ((r) => {
                              if (Array.isArray(r)) return Array.from(r)
                              let o = Object.getOwnPropertyDescriptors(r)
                              return (
                                  Object.values(o).forEach((i) => {
                                      i.configurable = !0
                                  }),
                                  Object.create(f(r), o)
                              )
                          })(s)
                        : s,
                    t
                )),
                c && c.set(s, t)),
            (t.a = n),
            (t.c = c),
            t.p
        )
    },
    w = (e, n) => {
        let c = Reflect.ownKeys(e),
            s = Reflect.ownKeys(n)
        return c.length !== s.length || c.some((a, t) => a !== s[t])
    },
    j = (e, n, c, s) => {
        if (Object.is(e, n)) return !1
        if (!y(e) || !y(n)) return !0
        let a = c.get(e)
        if (!a) return !0
        if (s) {
            let r = s.get(e)
            if (r && r.n === n) return r.g
            s.set(e, { n, g: !1 })
        }
        let t = null
        for (let r of a) {
            let o = r === l ? w(e, n) : j(e[r], n[r], c, s)
            if (((o !== !0 && o !== !1) || (t = o), t)) break
        }
        return t === null && (t = !0), s && s.set(e, { n, g: t }), t
    },
    d = (e) => !!p(e) && h in e,
    P = (e) => (p(e) && e[g]) || null,
    m = (e, n = !0) => {
        u.set(e, n)
    },
    k = (e, n) => {
        let c = [],
            s = new WeakSet(),
            a = (t, r) => {
                if (s.has(t)) return
                y(t) && s.add(t)
                let o = n.get(t)
                o
                    ? o.forEach((i) => {
                          a(t[i], r ? [...r, i] : [i])
                      })
                    : r && c.push(r)
            }
        return a(e), c
    }
export {
    k as affectedToPathList,
    O as createProxy,
    P as getUntracked,
    j as isChanged,
    m as markToTrack,
    d as trackMemo
}
//# sourceMappingURL=proxy-compare.js.map
