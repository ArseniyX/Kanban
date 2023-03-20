import { html } from 'preact'
import { styled } from 'goober'
import { withRoot } from '../../../store/storeAdapter.js'

const BoardStatsContainer = styled('div')`
    color: #828fa3;
    padding-left: 32px;
`

const BoardStats = ({ boards }) => {
    return html`<${BoardStatsContainer}><span>ALL BOARDS </span><span>(${boards.length})</span><//>`
}

export default withRoot(BoardStats)
