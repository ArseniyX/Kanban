import { html } from 'preact'
import { styled } from 'goober'
import Sidebar from '../sidebar/Sidebar.js'
import Header from '../header/Header.js'
import './styles.js'
import ShowSidebar from '../sidebar/ShowSidebar.js'

const LayoutContainer = styled('div')`
    position: relative;
`

const Layout = ({ children }) => {
    return html`<${LayoutContainer}>
        <${Header} />
        <${Sidebar} />
        <${ShowSidebar} />
        ${children}
    <//>`
}

export default Layout
