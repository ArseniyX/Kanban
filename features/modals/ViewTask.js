import { html } from 'preact'
import { styled } from 'goober'
import { withRoot } from '../../store/storeAdapter.js'
import DetailsModal from '../../common/modals/DetailsModal.js'
import { closeTask, openEditTask } from '../../store/rootStore.js'
import { SubtaskStat } from '../board/Task.js'
import Dropdown from '../../common/Dropdown.js'
import CheckFiled from '../../common/inputs/CheckFiled.js'

const TaskContent = styled('span')`
    display: block;
    margin-top: 24px;
    font-size: 13px;
    color: #828fa3;
`

const Subtasks = ({ subtasks }) => {
    return subtasks.map(
        ({ isCompleted, title }) => html` <${CheckFiled} defaultState="${isCompleted}" text="${title}" /> `
    )
}
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

const ViewTask = ({ selectedTask, openTask }) => {
    const { title, subtasks = [], description, status } = selectedTask
    const countCompleted = subtasks.filter(({ isCompleted }) => isCompleted).length
    return html` <${DetailsModal} title="${title}" open="${openTask}" onClose="${closeTask}" options="${options}">
        <${TaskContent}>${description}<//>
        <${SubtaskStat} countCompleted="${countCompleted}" size="${subtasks.length}" />
        <${Subtasks} subtasks="${subtasks}" />
        <${Dropdown} label="Current Status" selectedValue="${status}" />
    <//>`
}

export default withRoot(ViewTask)
