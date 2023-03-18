import { html } from 'preact'
import { styled } from 'goober'
import BoardSVG from './icons/BoardSVG.js'
import { appendBoardStat } from '../store/commonStore.js'

const TabContainer = styled('div')`
    display: inline-flex;
    align-items: center;
    padding: 16px 32px;
    width: 200px;
    background: ${({ active }) => (active ? 'var(--primary-background-color)' : 'transparent')};
    border-radius: 0px 100px 100px 0px;
    cursor: pointer;
    svg {
        fill: #828fa3;
    }
    &:hover {
        background: #635fc715;
        svg {
            fill: var(--primary-background-color);
        }
        span {
            color: var(--primary-background-color);
        }
    }
`

const TabImage = styled('div')`
    display: inline-flex;
    margin-right: 16px;
`

const Title = styled('span')`
    font-size: 15px;
    text-transform: capitalize;
    color: ${({ active }) => (active ? '#fff' : '#828FA3')};
`

const Tab = ({ active, title = 'hello' }) => {
    return html`<${TabContainer} active="${active}" onClick="${appendBoardStat}">
        <${TabImage}>
            <${BoardSVG} />
        <//>
        <${Title}>${title}<//>
    <//>`
}

export default Tab
