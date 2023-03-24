import { html } from 'preact'
import { styled } from 'goober'

const SubtasksContainer = styled('div')``

const Subtasks = () => {
    return html`<${SubtasksContainer}>
        <${TextField} label="Title" placeholder="Task Name..." withoutClear />
        <${Dropdown} label="Status" />
        <${ButtonPrimary}> + Add New Subtask <//>
    <//>`
}

export default Subtasks