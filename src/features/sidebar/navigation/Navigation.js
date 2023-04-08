import { html } from 'preact'
import { styled } from 'goober'
import BoardStats from './BoardStats.js'
import BoardTabs from './BoardTabs.js'

const NavigationContainer = styled('div')`
    margin-top: 15px;
    padding-right: 24px;
`

const Navigation = () => {
    return html`<${NavigationContainer}>
        <${BoardStats} />
        <${BoardTabs} />
    <//>`
}

export default Navigation
