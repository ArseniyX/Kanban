import { html, useState } from 'preact'
import { styled } from 'goober'
import SelectModal from './SelectModal.js'
import Modal from './Modal.js'

const DetailsHeader = styled('div')`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: start;
`

const DetailsTitle = styled('span')`
    font-weight: 700;
    font-size: 18px;
`

const Ellipsis = styled('img')`
    cursor: pointer;
`

export const Options = (options) => {
    const onEllipsis = () => {}
    return html`<${Ellipsis} click="${onEllipsis}" src="./assets/icon-vertical-ellipsis.svg" /> <${SelectModal}><//>`
}

const DetailsModal = ({ children, title, options, open, onClose = () => {} }) => {
    debugger
    return (
        open &&
        html`<${Modal} onClose="${onClose}" open="${open}">
            <${DetailsHeader}>
                <${DetailsTitle}>${title}<//>
                ${options && html`<${Options} options="${options}" />`}
            <//>
            ${children}
        <//>`
    )
}

export default DetailsModal
