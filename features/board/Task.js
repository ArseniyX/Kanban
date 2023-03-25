import { html } from 'preact'
import { styled } from 'goober'
import { openTask } from '../../store/rootStore.js'

const CardTitle = styled('span')`
    color: var(--text-color);
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
`

const TaskContainer = styled('div')`
    margin-top: 20px;
    padding: 23px 16px;
    background: var(--secondary-elements);
    box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
    cursor: pointer;
    border-radius: 8px;
    &:hover {
        ${CardTitle} {
            color: var(--secondary-color);
        }
    }
`

const SubtaskStatStyle = styled('div')`
    margin-top: 8px;
    color: #828fa3;
`

export const SubtaskStat = ({ countCompleted, size }) => {
    return html`<${SubtaskStatStyle}> ${countCompleted} of ${size} subtasks <//>`
}

const Task = (props) => {
    const { title, subtasks, columnId, taskId } = props
    const countCompleted = subtasks.filter(({ isCompleted }) => isCompleted).length
    return html`<${TaskContainer} onClick="${() => openTask(columnId, taskId)}">
        <${CardTitle}> ${title}<//>
        <${SubtaskStat} countCompleted="${countCompleted}" size="${subtasks.length}" />
    <//>`
}

export default Task
