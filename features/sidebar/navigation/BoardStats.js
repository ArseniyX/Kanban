import { html } from 'preact'
import { styled } from 'goober'
import { connect } from '../../../store/utils.js'
import { commonStore } from '../../../store/commonStore.js'
import { useSnapshot } from 'valtio'

const BoardStatsContainer = styled('div')`
    color: #828fa3;
    padding-left: 32px;
`

const BoardStats = ({ boardStat }) => {
    const snap = useSnapshot(commonStore)
    return html`<${BoardStatsContainer}><span>ALL BOARDS </span><span>${snap.boardStat}</span><//>`
}

export default connect(BoardStats, commonStore)
