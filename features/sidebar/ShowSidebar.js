import { html } from 'preact'
import { styled } from 'goober'
import { withRoot } from '../../store/storeAdapter.js'
import { toggleSidebar } from '../../store/rootStore.js'

const ShowSidebarContainer = styled('div')`
    position: fixed;
    left: 0;
    bottom: 32px;
    padding: 19px;
    cursor: pointer;
    background: #635fc7;
    border-radius: 0px 100px 100px 0px;
`

const ShowSidebar = ({ sidebarOpened }) => {
    return (
        !sidebarOpened &&
        html`<${ShowSidebarContainer} onClick="${toggleSidebar}">
            <img src="./assets/icon-show-sidebar.svg" />
        <//>`
    )
}

export default withRoot(ShowSidebar)
