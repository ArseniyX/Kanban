import { html } from 'preact'
import { styled } from 'goober'
import Sidebar from '../sidebar/Sidebar.js'
import Header from '../header/Header.js'
import './styles.js'

const LayoutContainer = styled('div')``

const Layout = ({ children }) => {
    return html`<${LayoutContainer}>
        <${Header} />
        <${Sidebar} />
        ${children}
    <//>`
}

export default Layout
