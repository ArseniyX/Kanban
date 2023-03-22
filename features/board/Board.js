import { html } from 'preact'
import { styled } from 'goober'
import { withRoot } from '../../store/storeAdapter.js'
import { rootStore } from '../../store/rootStore.js'
import Column from './Column.js'
import NewColumn from './NewColumn.js'
import ViewTask from '../modals/ViewTask.js'
import AddEditTask from '../modals/AddEditTask.js'

const BoardContainer = styled('div')`
    display: flex;
    margin-top: 120px;
    margin-left: 325px;
    margin-bottom: 50px;
`

const Board = ({ columns = [] }) => {
    return html`<${BoardContainer}>
        ${columns.map(
            ({ name, tasks }, columnId) => html`<${Column} name="${name}" tasks="${tasks}" columnId="${columnId}" />`
        )}
        <${NewColumn} />
        <${ViewTask} />
        <${AddEditTask} />
    <//>`
}

export default withRoot(Board, rootStore)
