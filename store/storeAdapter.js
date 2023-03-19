import {  html } from 'preact'
import { useSnapshot } from '../libs/valtio.js'

export const withStore = (WrappedComponent, store) => {
    const StoreComponent = () => {
        const snap = useSnapshot(store)
        return html`<${WrappedComponent} ...${snap} />`
    }
    return StoreComponent
}
