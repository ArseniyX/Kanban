import { html } from 'preact'
import { styled } from 'goober'
import BoardStats from './BoardStats.js'
import NewBoardButton from './NewBoardButton.js'
import BoardTabs from './BoardTabs.js'

const NavigationContainer = styled('div')`
    margin-top: 15px;
`

const Navigation = () => {
    return html`<${NavigationContainer}>
        <${BoardStats} />
        <${BoardTabs} />
        <${NewBoardButton} />
    <//>`
}

export default Navigation
