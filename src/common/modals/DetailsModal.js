import { html, useState } from 'preact'
import { styled } from 'goober'
import SelectModal from './SelectModal.js'
import Modal from './Modal.js'

const DetailsHeader = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: start;
`

const DetailsTitle = styled('span')`
    color: var(--text-color);
    font-weight: 700;
    font-size: 18px;
`

const EllipsisBlock = styled('div')`
    position: relative;
`

const Ellipsis = styled('img')`
    cursor: pointer;
`

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const Options = ({ options, position }) => {
    const [open, setOpen] = useState(false)
    const onEllipsis = () => {
        setOpen(!open)
    }
    return html`<${EllipsisBlock}
        ><${Ellipsis} onClick="${onEllipsis}" src="./assets/icon-vertical-ellipsis.svg" />
        <${SelectModal} options="${options}" position="${position}" open="${open}"><//
    ><//>`
}

const DetailsModal = ({ children, title, options, open, onClose = () => {} }) => {
    return (
        open &&
        html`<${Modal} onClose="${onClose}" open="${open}">
            <${Wrapper}>
                <${DetailsHeader}>
                    <${DetailsTitle}>${title}<//>
                    ${options && html`<${Options} options="${options}" />`}
                <//>
                ${children}
            <//>
        <//>`
    )
}

export default DetailsModal
