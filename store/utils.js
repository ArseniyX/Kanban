export const connect = (Comp, store) => () => Comp.call(null, store)
