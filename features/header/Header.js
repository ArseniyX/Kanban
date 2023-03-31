import { html } from 'preact'
import { styled } from 'goober'
import { withRoot } from '../../store/storeAdapter.js'
import { openAddTask, openEditBoard, toggleDeleteDialog } from '../../store/rootStore.js'
import { Options } from '../../src/common/modals/DetailsModal.js'
import ButtonPrimary from '../../src/common/inputs/Button.js'

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

const options = [
    {
        title: 'Edit Board',
        handler: openEditBoard,
        variant: 'regular'
    },
    {
        title: 'Delete Board',
        handler: toggleDeleteDialog,
        variant: 'warning'
    }
]

const Header = ({ activeTabName, sidebarOpened }) => {
    return html`<${HeaderContainer} isSidebar="${sidebarOpened}"
        ><${BoardName}>${activeTabName}<//>
        <${OptionsContainer}>
            <${ButtonPrimary} onClick="${openAddTask}" variant="primary" size="large" label="+ Add New Task"><//>
            <${Options} options="${options}" position="right" />
        <//>
    <//>`
}

export default withRoot(Header)
