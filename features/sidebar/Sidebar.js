import { html } from 'preact'
import { styled } from 'goober'
import Logo from './Logo.js'
import Navigation from './navigation/Navigation.js'

const SidebarContainer = styled('div')`
    max-width: 300px;
    background: #fff;
    border-right: 1px solid #e4ebfa;
`

const Sidebar = () => {
    return html`<${SidebarContainer}><${Logo}/><${Navigation}/></${SidebarContainer}>`
}

export default Sidebar
