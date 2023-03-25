import { html } from 'preact'
import { styled } from 'goober'
import Task from './Task.js'

const ColumnContainer = styled('div')`
    margin-right: 24px;
    width: 280px;
`

const ColumnStat = styled('div')`
    display: flex;
    align-items: center;
`
const ColumnName = styled('div')`
    color: #828fa3;
    text-transform: uppercase;
    margin-left: 12px;
`

const Circle = styled('div')`
    width: 15px;
    height: 15px;
    background: #49c4e5;
    border-radius: 50%;
`

const ColumnStatistics = ({ title, size }) => {
    return html`<${ColumnStat}>
        <${Circle} />
        <${ColumnName}>${title} (${size})<//>
    <//>`
}

const Column = ({ title, tasks, columnId }) => {
    return html`<${ColumnContainer}>
        <${ColumnStatistics} size="${tasks.length}" title="${title}" />
        ${tasks.map((task, taskId) => html`<${Task} ...${task} taskId="${taskId}" columnId="${columnId}" /> `)}
    <//>`
}

export default Column
