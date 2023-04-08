import { html } from 'preact'
import { styled } from 'goober'
import { withRoot } from '../../../store/storeAdapter.js'
import Tab from '../../../../src/common/navigation/Tab.js'
import { openAddBoard, rootStore, setActive } from '../../../store/rootStore.js'

const BoardTabsContainer = styled('div')`
    margin-top: 19px;
`

const BoardTabs = ({ boards = [], activeTab }) => {
    return html`<${BoardTabsContainer}>
        ${boards.map(
            ({ name }, boardId) =>
                html`<${Tab} active="${boardId === activeTab}" title="${name}" handler="${() => setActive(boardId)}" />`
        )}
        <${Tab} handler="${openAddBoard}" title="+ Create New Board"
    /><//>`
}

export default withRoot(BoardTabs, rootStore)
