import { html } from 'preact'
import { styled } from 'goober'
import Sidebar from '../sidebar/Sidebar.js'

const LayoutContainer = styled('div')`
    background: #f4f7fd;
`

const Layout = () => {
    return html`<${LayoutContainer}>
        <${Sidebar} />
    <//>`
}

export default Layout
