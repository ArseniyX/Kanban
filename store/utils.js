export const connect = (Comp, ...args) => {
    return () => Comp.apply(null, args)
}
