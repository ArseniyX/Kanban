import { html } from 'preact'
import { styled } from 'goober'
import { withStore } from '../../../store/storeAdapter.js'
import { rootStore } from '../../../store/rootStore.js'

const BoardStatsContainer = styled('div')`
    color: #828fa3;
    padding-left: 32px;
`

const BoardStats = ({ boards }) => {
    return html`<${BoardStatsContainer}><span>ALL BOARDS </span><span>(${boards.length})</span><//>`
}

export default withStore(BoardStats, rootStore)
