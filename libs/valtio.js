/* esm.sh - esbuild bundle(valtio@1.6.1) es2022 production */
import {
    useRef as a,
    useCallback as h,
    useEffect as m,
    useMemo as d,
    useDebugValue as S
} from 'preact'
import {
    isChanged as g,
    createProxy as x,
    affectedToPathList as y
} from 'proxy-compare'
import b from 'use-sync-store'
import { subscribe as E, snapshot as p } from 'vanilla'
import {
    getVersion as H,
    proxy as L,
    ref as P,
    snapshot as R,
    subscribe as I,
    getHandler as T
} from 'vanilla'
var { useSyncExternalStore: M } = b,
    k = (e, n) => {
        let t = a()
        m(() => {
            t.current = y(e, n)
        }),
            S(t.current)
    }
function D(e, n) {
    let t = n?.sync,
        s = a(),
        o = a(),
        f = !0,
        u = M(
            h(
                (r) => {
                    let i = E(e, r, t)
                    return r(), i
                },
                [e, t]
            ),
            () => {
                let r = p(e)
                try {
                    if (!f && s.current && o.current && !g(s.current, r, o.current, new WeakMap())) return s.current
                } catch {}
                return r
            },
            () => p(e)
        )
    f = !1
    let c = new WeakMap()
    m(() => {
        ;(s.current = u), (o.current = c)
    }),
        (import.meta.env && import.meta.env.MODE) !== 'production' && k(u, c)
    let l = d(() => new WeakMap(), [])
    return x(u, c, l)
}
export {
    H as getVersion,
    L as proxy,
    P as ref,
    R as snapshot,
    I as subscribe,
    T as unstable_getHandler,
    D as useSnapshot
}
//# sourceMappingURL=valtio.js.map
