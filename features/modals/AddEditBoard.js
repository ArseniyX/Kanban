import { html } from 'preact'
import { styled } from 'goober'
import DetailsModal from '../../common/modals/DetailsModal.js'
import { withRoot } from '../../store/storeAdapter.js'
import { closeAddEditBoard } from '../../store/rootStore.js'
import Subtasks from './Subtasks.js'
import ButtonPrimary from '../../common/inputs/Button.js'

const AddEditBoard = ({ openEditBoard, openAddBoard, columns }) => {
    const formatTitle = `${openAddBoard ? 'Add New' : 'Edit'} Board`
    return html`<${DetailsModal}
        open="${openEditBoard || openAddBoard}"
        onClose="${closeAddEditBoard}"
        title="${formatTitle}"
    >
        <${Subtasks} elements="${columns}" elementName="column" />
        <${ButtonPrimary} top="24">${openAddBoard ? 'Add New' : 'Edit'} Board<//>
    <//>`
}

export default withRoot(AddEditBoard)
