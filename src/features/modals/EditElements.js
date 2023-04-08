import { html } from 'preact'
import { styled } from 'goober'
import ButtonPrimary from '../../../src/common/inputs/Button.js'
import TextField from '../../../src/common/inputs/TextField.js'

const SubtasksContainer = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const EditElements = ({ elements = [], elementName, firstLabel = 'Subtasks', onDeleteElement, onAddElement }) => {
    return html`<${SubtasksContainer}>
        ${elements.map(
            ({ title }, index) =>
                html`
                    <${TextField}
                        index="${index}"
                        label="${!index ? firstLabel : null}"
                        defaultValue="${title}"
                        placeholder="${elementName} Name"
                        onDelete="${onDeleteElement}"
                    />
                `
        )}
        <${ButtonPrimary} variant="secondary" label=" + Add New ${elementName}" onClick="${onAddElement}" />
    <//>`
}

export default EditElements
