import { html } from 'preact'
import { styled } from 'goober'
import { connect } from '../../../store/utils.js'
import Tab from '../../../common/Tab.js'
import { appendTab, rootStore, setActive } from '../../../store/rootStore.js'
import { useSnapshot } from '../../../libs/valtio.js'

const BoardTabsContainer = styled('div')`
    margin-top: 19px;
`

const BoardTabs = () => {
    const { tabs, activeTab } = useSnapshot(rootStore)
    return html`<${BoardTabsContainer}>
        ${tabs.map(
            ({ title }, index) =>
                html`<${Tab} active="${index === activeTab}" title="${title}" handler="${() => setActive(index)}" />`
        )}
        <${Tab} handler="${() => appendTab({ title: 'test' })}" title="+ Create New Board"
    /><//>`
}

export default BoardTabs
