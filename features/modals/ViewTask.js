import { html } from 'preact'
import { styled } from 'goober'
import { withRoot } from '../../store/storeAdapter.js'
import DetailsModal from '../../common/modals/DetailsModal.js'
import { closeTask, openEditTask, updateStatus, updateSubtask } from '../../store/rootStore.js'
import { SubtaskStat } from '../board/Task.js'
import Select from '../../common/inputs/Select.js'
import CheckFiled from '../../common/inputs/CheckFiled.js'

const TaskContent = styled('span')`
    display: block;
    font-size: 13px;
    color: #828fa3;
`

const options = [
    {
        title: 'Edit Task',
        handler: openEditTask,
        variant: 'regular'
    },
    {
        title: 'Delete Task',
        handler: () => {},
        variant: 'warning'
    }
]

const Subtasks = ({ subtasks }) => {
    return subtasks.map(
        ({ isCompleted, title }, index) =>
            html`
                <${CheckFiled}
                    defaultState="${isCompleted}"
                    text="${title}"
                    index="${index}"
                    setSelected="${updateSubtask}"
                />
            `
    )
}

const ViewTask = ({ selectedTask, openTask }) => {
    const { title, subtasks = [], description, status } = selectedTask
    const countCompleted = subtasks.filter(({ isCompleted }) => isCompleted).length
    return html` <${DetailsModal} title="${title}" open="${openTask}" onClose="${closeTask}" options="${options}">
        ${description && html`<${TaskContent}>${description}<//>`}
        <${SubtaskStat} countCompleted="${countCompleted}" size="${subtasks.length}" />
        <${Subtasks} subtasks="${subtasks}" />
        <${Select} label="Current Status" selectedValue="${status}" setSelected="${updateStatus}" />
    <//>`
}

export default withRoot(ViewTask)
