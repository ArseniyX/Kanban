import { html } from 'preact'
import { styled } from 'goober'
import { connect } from '../../../store/utils.js'
import Tab from '../../../common/Tab.js'

const BoardTabsContainer = styled('div')`
    margin-top: 19px;
`

const BoardTabs = (props) => {
    return html`<${BoardTabsContainer}><${Tab} /><//>`
}

export default connect(BoardTabs, { test: 'test' })
