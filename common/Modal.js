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
    background: #ffffff;
    border-radius: 6px;
    padding: 32px;
`

const Modal = () => {
    const [open, setOpen] = useState(defaultOpen)

    function handleClose() {
        setOpen(false)
    }

    const preventPropagation = (e) => {
        e.stopPropagation()
    }
    return (
        open &&
        html`<${ModalBackground}>
            <${ModalContainer}><//>
        <//>`
    )
}

export default Modal
