import { html } from 'preact'
import { styled } from 'goober'
import DetailsModal from '../../common/modals/DetailsModal.js'
import { withRoot } from '../../store/storeAdapter.js'
import { closeAddEditTask } from '../../store/rootStore.js'
import TextField from '../../common/inputs/TextField.js'
import ButtonPrimary from '../../common/inputs/Button.js'
import Select from '../../common/inputs/Select.js'
import Subtasks from './Subtasks.js'

const AddEditTask = ({ openEditTask, openAddTask }) => {
    const formatTitle = `${openAddTask ? 'Add' : 'Edit'} Task`
    return html`<${DetailsModal}
        open="${openEditTask || openAddTask}"
        onClose="${closeAddEditTask}"
        title="${formatTitle}"
    >
        <${TextField} label="Title" placeholder="Task Name..." withoutClear />
        <${TextField}
            label="Description"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
            withoutClear
        />
        <${Subtasks} />
        <${Select} label="Status" />
        <${ButtonPrimary}>Save Changes<//>
    <//>`
}

export default withRoot(AddEditTask)
