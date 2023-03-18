import { proxy } from 'valtio'
import { commonStore } from './commonStore'

export const rootStore = proxy({
    commonStore
})
