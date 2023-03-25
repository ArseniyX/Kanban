import { html } from 'preact'
import { styled } from 'goober'
import DetailsModal from '../../src/common/modals/DetailsModal.js'
import { withRoot } from '../../store/storeAdapter.js'
import { closeAddEditBoard } from '../../store/rootStore.js'
import EditElements from './EditElements.js'
import ButtonPrimary from '../../src/common/inputs/Button.js'

const AddEditBoard = ({ openEditBoard, openAddBoard, columns }) => {
    const formatTitle = `${openAddBoard ? 'Add New' : 'Edit'} Board`
    return html`<${DetailsModal}
        open="${openEditBoard || openAddBoard}"
        onClose="${closeAddEditBoard}"
        title="${formatTitle}"
    >
        <${EditElements} elements="${columns}" elementName="column" />
        <${ButtonPrimary} top="24" label="${formatTitle}" />
    <//>`
}

export default withRoot(AddEditBoard)
