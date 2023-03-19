import { html } from 'preact'
import { styled } from 'goober'

const TaskContainer = styled('div')`
    margin-top: 20px;
    padding: 23px 16px;
    background: #ffffff;
    box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
    border-radius: 8px;
`

const CardTitle = styled('div')`
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
`
const SubtaskStat = styled('div')`
    margin-top: 8px;
    color: #828fa3;
`

const Task = ({ title, description, status, subtasks }) => {
    const countCompleted = subtasks.filter(({ isCompleted }) => isCompleted).length
    return html`<${TaskContainer}>
        <${CardTitle}> ${title}<//>
        <${SubtaskStat}> ${countCompleted} of ${subtasks.length} subtasks <//>
    <//>`
}

export default Task
