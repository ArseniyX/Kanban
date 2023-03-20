import { html } from 'preact'
import { styled } from 'goober'
import Logo from './Logo.js'
import Navigation from './navigation/Navigation.js'
import ThemeSwitch from './ThemeSwitch.js'
import HideSidebar from './HideSidebar.js'
import { withStore } from '../../store/storeAdapter.js'
import { rootStore } from '../../store/rootStore.js'

const SidebarContainer = styled('div')`
    position: fixed;
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
    top: 0;
    left: 0;
    max-width: 300px;
    height: 100vh;
    background: #fff;
    border-right: 1px solid #e4ebfa;
    background: var(--secondary-elements);
`

const BottomBlock = styled('div')`
    margin-bottom: 32px;
`

const Sidebar = ({ sidebarOpened }) => {
    return (
        sidebarOpened &&
        html`<${SidebarContainer}>
        <div> 
            <${Logo}/>
            <${Navigation}/>
        </div>
        <${BottomBlock}>
            <${ThemeSwitch}/>
            <${HideSidebar} />
        <//>
    </${SidebarContainer}>`
    )
}

export default withStore(Sidebar, rootStore)
