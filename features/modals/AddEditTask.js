import { html } from 'preact'
import { styled } from 'goober'
import DetailsModal from '../../common/modals/DetailsModal.js'
import { withRoot } from '../../store/storeAdapter.js'
import { toggleEditTask } from '../../store/rootStore.js'

const Title = styled('span')`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
`

const AddEditTask = ({ openEditTask, openAddTask }) => {
    return html`<${DetailsModal} open="${openEditTask || openAddTask}" onClose="${toggleEditTask}">
        <${Title}>${openEditTask && 'Edit'}${openAddTask && 'Add'} Task<//>
    <//>`
}

export default withRoot(AddEditTask)
