let e = { data: '' },
    t = (t2) =>
        typeof window == 'object'
            ? (
                  (t2 ? t2.querySelector('#_goober') : window._goober) ||
                  Object.assign((t2 || document.head).appendChild(document.createElement('style')), {
                      innerHTML: ' ',
                      id: '_goober'
                  })
              ).firstChild
            : t2 || e,
    r = (e2) => {
        let r2 = t(e2),
            l2 = r2.data
        return (r2.data = ''), l2
    },
    l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    a = /\/\*[^]*?\*\/|  +/g,
    n = /\n+/g,
    o = (e2, t2) => {
        let r2 = '',
            l2 = '',
            a2 = ''
        for (let n2 in e2) {
            let c2 = e2[n2]
            n2[0] == '@'
                ? n2[1] == 'i'
                    ? (r2 = n2 + ' ' + c2 + ';')
                    : (l2 += n2[1] == 'f' ? o(c2, n2) : n2 + '{' + o(c2, n2[1] == 'k' ? '' : t2) + '}')
                : typeof c2 == 'object'
                ? (l2 += o(
                      c2,
                      t2
                          ? t2.replace(/([^,])+/g, (e3) =>
                                n2.replace(/(^:.*)|([^,])+/g, (t3) =>
                                    /&/.test(t3) ? t3.replace(/&/g, e3) : e3 ? e3 + ' ' + t3 : t3
                                )
                            )
                          : n2
                  ))
                : c2 != null &&
                  ((n2 = /^--/.test(n2) ? n2 : n2.replace(/[A-Z]/g, '-$&').toLowerCase()),
                  (a2 += o.p ? o.p(n2, c2) : n2 + ':' + c2 + ';'))
        }
        return r2 + (t2 && a2 ? t2 + '{' + a2 + '}' : a2) + l2
    },
    c = {},
    s = (e2) => {
        if (typeof e2 == 'object') {
            let t2 = ''
            for (let r2 in e2) t2 += r2 + s(e2[r2])
            return t2
        }
        return e2
    },
    i = (e2, t2, r2, i2, p2) => {
        let u2 = s(e2),
            d2 =
                c[u2] ||
                (c[u2] = ((e3) => {
                    let t3 = 0,
                        r3 = 11
                    for (; t3 < e3.length; ) r3 = (101 * r3 + e3.charCodeAt(t3++)) >>> 0
                    return 'go' + r3
                })(u2))
        if (!c[d2]) {
            let t3 =
                u2 !== e2
                    ? e2
                    : ((e3) => {
                          let t4,
                              r3,
                              o2 = [{}]
                          for (; (t4 = l.exec(e3.replace(a, ''))); )
                              t4[4]
                                  ? o2.shift()
                                  : t4[3]
                                  ? ((r3 = t4[3].replace(n, ' ').trim()), o2.unshift((o2[0][r3] = o2[0][r3] || {})))
                                  : (o2[0][t4[1]] = t4[2].replace(n, ' ').trim())
                          return o2[0]
                      })(e2)
            c[d2] = o(p2 ? { ['@keyframes ' + d2]: t3 } : t3, r2 ? '' : '.' + d2)
        }
        let f2 = r2 && c.g ? c.g : null
        return (
            r2 && (c.g = c[d2]),
            ((e3, t3, r3, l2) => {
                l2
                    ? (t3.data = t3.data.replace(l2, e3))
                    : t3.data.indexOf(e3) === -1 && (t3.data = r3 ? e3 + t3.data : t3.data + e3)
            })(c[d2], t2, i2, f2),
            d2
        )
    },
    p = (e2, t2, r2) =>
        e2.reduce((e3, l2, a2) => {
            let n2 = t2[a2]
            if (n2 && n2.call) {
                let e4 = n2(r2),
                    t3 = (e4 && e4.props && e4.props.className) || (/^go/.test(e4) && e4)
                n2 = t3 ? '.' + t3 : e4 && typeof e4 == 'object' ? (e4.props ? '' : o(e4, '')) : e4 === false ? '' : e4
            }
            return e3 + l2 + (n2 == null ? '' : n2)
        }, '')
function u(e2) {
    let r2 = this || {},
        l2 = e2.call ? e2(r2.p) : e2
    return i(
        l2.unshift
            ? l2.raw
                ? p(l2, [].slice.call(arguments, 1), r2.p)
                : l2.reduce((e3, t2) => Object.assign(e3, t2 && t2.call ? t2(r2.p) : t2), {})
            : l2,
        t(r2.target),
        r2.g,
        r2.o,
        r2.k
    )
}
let d,
    f,
    g,
    b = u.bind({ g: 1 }),
    h = u.bind({ k: 1 })
function m(e2, t2, r2, l2) {
    ;(o.p = t2), (d = e2), (f = r2), (g = l2)
}
function j(e2, t2) {
    let r2 = this || {}
    return function () {
        let l2 = arguments
        function a2(n2, o2) {
            let c2 = Object.assign({}, n2),
                s2 = c2.className || a2.className
            ;(r2.p = Object.assign({ theme: f && f() }, c2)),
                (r2.o = / *go\d+/.test(s2)),
                (c2.className = u.apply(r2, l2) + (s2 ? ' ' + s2 : '')),
                t2 && (c2.ref = o2)
            let i2 = e2
            return e2[0] && ((i2 = c2.as || e2), delete c2.as), g && i2[0] && g(c2), d(i2, c2)
        }
        return t2 ? t2(a2) : a2
    }
}
export { u as css, r as extractCss, b as glob, h as keyframes, m as setup, j as styled }
export default null
