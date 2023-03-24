import { html } from 'preact'
import { styled } from 'goober'
import ButtonPrimary from '../../common/inputs/Button.js'
import TextField from '../../common/inputs/TextField.js'
import { withRoot } from '../../store/storeAdapter.js'

const SubtasksContainer = styled('div')``

const Subtasks = ({ elements = [], elementName }) => {
    return html`<${SubtasksContainer}>
        ${elements.map(
            ({ title }) =>
                html`
                    <${TextField} titleTop="24" top="12" defaultValue="${title}" placeholder="${elementName} Name" />
                `
        )}
        <${ButtonPrimary} variant="secondary" top="12"> + Add New ${elementName}<//>
    <//>`
}

export default Subtasks
