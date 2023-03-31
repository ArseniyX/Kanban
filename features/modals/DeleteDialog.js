import { html } from 'preact'
import Dialog from '../../src/common/feadback/Dialog.js'
import { withRoot } from '../../store/storeAdapter.js'
import { toggleDeleteDialog } from '../../store/rootStore.js'

const actions = [
    { title: 'delete', handler: () => {}, variant: 'destructive' },
    { title: 'cancel', handler: toggleDeleteDialog, variant: 'secondary' }
]

const DeleteDialog = ({ openDeleteBoard }) => {
    return (
        openDeleteBoard &&
        html`<${Dialog}
            title="Delete this board?"
            content="Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed."
            actions="${actions}"
        />`
    )
}

export default withRoot(DeleteDialog)
