import { html } from 'preact'
import { styled } from 'goober'
import { connect } from '../../../store/utils.js'
import { useSnapshot } from 'valtio'
import { rootStore } from '../../../store/rootStore.js'

const BoardStatsContainer = styled('div')`
    color: #828fa3;
    padding-left: 32px;
`

const BoardStats = ({ tabs }) => {
    return html`<${BoardStatsContainer}><span>ALL BOARDS </span><span>(${tabs.length})</span><//>`
}

export default connect(BoardStats, rootStore)
