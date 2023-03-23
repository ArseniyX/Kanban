import { html } from 'preact'
import { styled } from 'goober'

const SelectModalContainer = styled('div')`
    position: absolute;
    top: 32px;
    right: 0;
    width: 192px;
    padding: 16px;
    background: var(--main-background);
`

const Option = styled('div')`
    margin-bottom: 16px;
`

const SelectModal = ({ options = [], position = 'center' }) => {
    return html`<${SelectModalContainer}>
        ${options.map(({ title, handler }) => html`<${Option} onClick="${handler}"> ${title}<//>`)}
    <//>`
}

export default SelectModal
