import { html } from 'preact'
import Tab from '../../../src/common/navigation/Tab.js'
import { toggleSidebar } from '../../../store/rootStore.js'

const Icon = () => html`<img src="./assets/icon-hide-sidebar.svg" />`

const HideSidebar = () => {
    return html`<${Tab} handler="${toggleSidebar}" title="Hide Sidebar" Icon="${Icon}" />`
}

export default HideSidebar
