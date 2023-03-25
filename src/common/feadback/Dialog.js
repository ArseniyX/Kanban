import { html } from 'preact'
import { styled } from 'goober'
import Modal from '../modals/Modal.js'
import ButtonPrimary from '../inputs/Button.js'

const WarningTitle = styled('span')`
    color: #ea5555;
    font-size: 18px;
    line-height: 23px;
`

const DialogContent = styled('div')`
    color: #828fa3;
    font-size: 13px;
    line-height: 23px;
`

const ActionsContainer = styled('div')`
    display: flex;
    gap: 16px;
`

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Dialog = ({ title, content, actions = [] }) => {
    return html`<${Modal}>
        <${Wrapper}>
            <${WarningTitle}>${title}<//>
            <${DialogContent}>${content}<//>
            <${ActionsContainer}>
                ${actions.map(
                    ({ title, handler, variant }) =>
                        html`<${ButtonPrimary} onClick="${handler}" variant="${variant}" label="${title}" />`
                )}
            <//>
        <//>
    <//>`
}

export default Dialog
