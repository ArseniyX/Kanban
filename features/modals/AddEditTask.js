import { html } from 'preact'
import DetailsModal from '../../src/common/modals/DetailsModal.js'
import { withRoot } from '../../store/storeAdapter.js'
import { closeAddEditTask } from '../../store/rootStore.js'
import TextField from '../../src/common/inputs/TextField.js'
import ButtonPrimary from '../../src/common/inputs/Button.js'
import EditElements from './EditElements.js'
import Select from '../../src/common/inputs/Select.js'

const AddEditTask = ({ openEditTask, openAddTask, selectedTask }) => {
    const { subtasks, title, description } = selectedTask
    const formatTitle = `${openAddTask ? 'Add' : 'Edit'} Task`

    return html`<${DetailsModal}
        open="${openEditTask || openAddTask}"
        onClose="${closeAddEditTask}"
        title="${formatTitle}"
    >
        <${TextField} defaultValue="${title}" label="Title" placeholder="Task Name..." withoutDelete />
        <${TextField}
            defaultValue="${description}"
            label="Description"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
            withoutClear
        />
        <${EditElements} elements="${subtasks}" elementName="task" />
        <${Select} label="Status" />
        <${ButtonPrimary} label="Save Changes" />
    <//>`
}

export default withRoot(AddEditTask)
