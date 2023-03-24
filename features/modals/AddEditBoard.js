import { html } from 'preact'
import { styled } from 'goober'
import DetailsModal from '../../common/modals/DetailsModal.js'
import { withRoot } from '../../store/storeAdapter.js'
import { closeAddEditBoard } from '../../store/rootStore.js'
import TextField from '../../common/TextField.js'

const AddEditBoard = ({ openEditBoard, openAddBoard }) => {
    const formatTitle = `${openAddBoard ? 'Add New' : 'Edit'} Board`
    return html`<${DetailsModal}
        open="${openEditBoard || openAddBoard}"
        onClose="${closeAddEditBoard}"
        title="${formatTitle}"
    >
        <${TextField} label="Title" placeholder="Task Name..." withoutClear />
        <${Dropdown} label="Status" />
        <${ButtonPrimary}>Create New Board<//>
    <//>`
}

export default withRoot(AddEditBoard)
