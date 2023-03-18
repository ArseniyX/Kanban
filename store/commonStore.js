import { proxy } from 'valtio'

export const commonStore = proxy({
    boardStat: 0
})

export const appendBoardStat = () => ++commonStore.boardStat

export const prependBoardStat = () => --commonStore.boardStat
