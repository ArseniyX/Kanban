import { html } from 'preact'
import { useSnapshot } from '../libs/valtio.js'
import { rootStore } from './rootStore.js'

export const withStore = (store) => (WrappedComponent) => {
    const StoreComponent = () => {
        const snap = useSnapshot(store)
        return html`<${WrappedComponent} ...${snap} />`
    }
    return StoreComponent
}

export const withRoot = withStore(rootStore)