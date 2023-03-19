import { html } from 'preact'
import { styled } from 'goober'
import Sidebar from '../sidebar/Sidebar.js'
import Header from '../header/Header.js'

const LayoutContainer = styled('div')`
    background: #f4f7fd;
`

const Layout = ({ children }) => {
    return html`<${LayoutContainer}>
        <${Header} />
        <${Sidebar} />
        ${children}
    <//>`
}

export default Layout
