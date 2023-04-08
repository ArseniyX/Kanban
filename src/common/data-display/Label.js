import { html } from 'preact'
import { styled } from 'goober'

export const LabelStyle = styled('label')`
    display: block;
    text-transform: capitalize;
    color: var(--input-field-text-color);
    margin-bottom: 8px;
`

const LabelContainer = styled('div')``

const Label = ({ children }) => {
    return html`<${LabelContainer}>${children}<//>`
}

export default Label
