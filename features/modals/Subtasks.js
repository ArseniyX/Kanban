import { html } from 'preact'
import { styled } from 'goober'
import ButtonPrimary from '../../common/inputs/Button.js'
import TextField from '../../common/inputs/TextField.js'

const SubtasksContainer = styled('div')``

const Subtasks = () => {
    return html`<${SubtasksContainer}>
        <${TextField} label="Title" placeholder="Task Name..." />
        <${ButtonPrimary} variant="secondary"> + Add New Subtask <//>
    <//>`
}

export default Subtasks
