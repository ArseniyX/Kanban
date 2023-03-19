import { html } from 'preact'
import { styled } from 'goober'
import Logo from './Logo.js'
import Navigation from './navigation/Navigation.js'
import ThemeSwitch from './ThemeSwitch.js'

const SidebarContainer = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    max-width: 300px;
    height: 100vh;
    background: #fff;
    border-right: 1px solid #e4ebfa;
    background: var(--secondary-elements);
`

const Sidebar = () => {
    return html`<${SidebarContainer}><${Logo}/><${Navigation}/> <${ThemeSwitch}/></${SidebarContainer}>`
}

export default Sidebar
