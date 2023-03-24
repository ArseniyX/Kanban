import { html } from 'preact'
import { styled } from 'goober'
import { withRoot } from '../../store/storeAdapter.js'
import Column from './Column.js'
import NewColumn from './NewColumn.js'
import ViewTask from '../modals/ViewTask.js'
import AddEditTask from '../modals/AddEditTask.js'
import AddEditBoard from '../modals/AddEditBoard.js'

const BoardContainer = styled('div')`
    display: flex;
    margin-top: 120px;
    margin-left: ${({ isSidebar }) => (isSidebar ? '325px' : '25px')};
    margin-bottom: 50px;
`

const Board = ({ columns = [], sidebarOpened }) => {
    return html`<${BoardContainer} isSidebar="${sidebarOpened}">
        ${columns.map(
            ({ title, tasks }, columnId) => html`<${Column} title="${title}" tasks="${tasks}" columnId="${columnId}" />`
        )}
        <${NewColumn} />
        <${ViewTask} />
        <${AddEditTask} />
        <${AddEditBoard} />
    <//>`
}

export default withRoot(Board)
