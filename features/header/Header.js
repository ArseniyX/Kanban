import { html } from 'preact'
import { styled } from 'goober'
import ButtonPrimary from '../../common/Button.js'
import { withRoot } from '../../store/storeAdapter.js'
import { openAddTask } from '../../store/rootStore.js'
import { Options } from '../../common/modals/DetailsModal.js'

const HeaderContainer = styled('div')`
    position: fixed;
    display: flex;
    padding-left: ${({ isSidebar }) => (isSidebar ? '324px' : '24px')};
    top: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    height: 88px;
    padding-bottom: 8px;
    background: var(--secondary-elements);
`

const BoardName = styled('div')`
    color: var(--text-color);
    font-weight: 700;
    font-size: 24px;
`

const OptionsContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    margin-right: 24px;
`

const Header = ({ activeTabName, sidebarOpened }) => {
    return html`<${HeaderContainer} isSidebar="${sidebarOpened}"
        ><${BoardName}>${activeTabName}<//>
        <${OptionsContainer}>
            <${ButtonPrimary} onClick="${openAddTask}" variant="primary" size="large">+ Add New Task<//>
            <${Options} />
        <//>
    <//>`
}

export default withRoot(Header)
