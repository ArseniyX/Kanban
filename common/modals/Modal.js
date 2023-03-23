import { html } from 'preact'
import { styled } from 'goober'

const ModalBackground = styled('div')`
    position: fixed;
    top: -50px;
    right: 0;
    left: 0;
    bottom: -50px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

const ModalContainer = styled('div')`
    width: 480px;
    background: var(--secondary-elements);
    border-radius: 6px;
    padding: 32px;
`

const Modal = ({ children, open = true, onClose = () => {} }) => {
    const preventPropagation = (e) => {
        e.stopPropagation()
    }

    return (
        open &&
        html`<${ModalBackground} onClick="${onClose}">
            <${ModalContainer} onClick="${preventPropagation}"> ${children} <//>
        <//>`
    )
}

export default Modal
