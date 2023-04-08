import { html } from 'preact'
import DetailsModal from '../../common/modals/DetailsModal.js'
import { withRoot } from '../../store/storeAdapter.js'
import { closeAddEditBoard, deleteColumn } from '../../store/rootStore.js'
import EditElements from './EditElements.js'
import ButtonPrimary from '../../common/inputs/Button.js'
import TextField from '../../common/inputs/TextField.js'

const AddEditBoard = ({ openEditBoard, openAddBoard, columns }) => {
    const formatTitle = `${openAddBoard ? 'Add New' : 'Edit'} Board`
    return html`<${DetailsModal}
        open="${openEditBoard || openAddBoard}"
        onClose="${closeAddEditBoard}"
        title="${formatTitle}"
    >
        <${TextField} defaultValue="${'column'}" label="Board Name" placeholder="Board Name..." withoutDelete />
        <${EditElements}
            firstLabel="Board Columns"
            elements="${columns}"
            elementName="column"
            onDeleteElement="${deleteColumn}"
        />
        <${ButtonPrimary} top="24" label="${formatTitle}" />
    <//>`
}

export default withRoot(AddEditBoard)
