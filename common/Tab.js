import { html } from 'preact'
import { styled, css } from 'goober'
import BoardSVG from './icons/BoardSVG.js'

const InactiveStyles = css`
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

const TabContainer = styled('div')`
    display: inline-flex;
    align-items: center;
    padding: 16px 32px;
    width: 200px;
    background: ${({ active }) => (active ? 'var(--primary-background-color)' : 'transparent')};
    border-radius: 0px 100px 100px 0px;
    cursor: pointer;
    svg {
        fill: ${({ active }) => (active ? '#fff' : '#828fa3')};
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

const Tab = ({ active, title, handler, Icon = BoardSVG }) => {
    return html`<${TabContainer} className="${active ? null : InactiveStyles}" active="${active}" onClick="${handler}">
        <${TabImage}>
            <${Icon} />
        <//>
        <${Title} active="${active}">${title}<//>
    <//>`
}

export default Tab
