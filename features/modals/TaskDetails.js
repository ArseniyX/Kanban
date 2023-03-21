import { html } from 'preact'
import { styled } from 'goober'
import { withRoot } from '../../store/storeAdapter.js'
import Modal from '../../common/Modal.js'
import { closeTask } from '../../store/rootStore.js'
import { SubtaskStat } from '../board/Task.js'
import Dropdown from '../../common/Dropdown.js'
import CheckFiled from '../../common/CheckFiled.js'

const DetailsHeader = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: start;
`

const DetailsTitle = styled('span')`
    font-weight: 700;
    font-size: 18px;
`

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

const TaskDetails = ({ selectedTask, openTask }) => {
    const { title, subtasks = [], description, status } = selectedTask
    const countCompleted = subtasks.filter(({ isCompleted }) => isCompleted).length
    return html` <${Modal} open="${openTask}" onClose="${closeTask}">
        <${DetailsHeader}>
            <${DetailsTitle}>${title}<//>
            <img src="./assets/icon-vertical-ellipsis.svg" />
        <//>
        <${TaskContent}>${description}<//>
        <${SubtaskStat} countCompleted="${countCompleted}" size="${subtasks.length}" />
        <${Subtasks} subtasks="${subtasks}" />
        <${Dropdown} label="Current Status" selectedValue="${status}" />
    <//>`
}

export default withRoot(TaskDetails)
