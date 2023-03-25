import { html } from 'preact'
import { styled } from 'goober'
import ButtonPrimary from '../../src/common/inputs/Button.js'
import TextField from '../../src/common/inputs/TextField.js'
import { withRoot } from '../../store/storeAdapter.js'

const SubtasksContainer = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const EditElements = ({ elements = [], elementName }) => {
    return html`<${SubtasksContainer}>
        ${elements.map(
            ({ title }) => html` <${TextField} defaultValue="${title}" placeholder="${elementName} Name" /> `
        )}
        <${ButtonPrimary} variant="secondary" label=" + Add New ${elementName}" />
    <//>`
}

export default EditElements
