import { html, useState } from 'preact'
import { styled } from 'goober'

const CheckFiledContainer = styled('label')`
    display: flex;
    align-items: center;
    padding: 12px;
    background: var(--main-background);
    height: 40px;
    text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : 'none')};
    cursor: pointer;
    border-radius: 4px;
    mix-blend-mode: normal;
    &:hover {
        background: var(--main-hover-color);
    }
`

const Checkbox = styled('input')`
    height: 16px;
    width: 16px;
    margin-right: 16px;
    accent-color: var(--primary-background-color);
`

const TextStyle = styled('span')`
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: var(--text-color);
    height: 15px;
    margin-top: 1px;
    opacity: ${({ isChecked }) => (isChecked ? 0.5 : 1)};
`

const CheckFiled = ({ setSelected = () => {}, defaultState, text = '' }) => {
    const [state, setState] = useState(defaultState)

    const onChange = () => {
        setState(!state)
        setSelected(state)
    }

    return html`<${CheckFiledContainer} value="${state}" onInput="${onChange}" isChecked="${state}">
        <${Checkbox} type="checkbox" checked="${state}" /><${TextStyle} isChecked="${state}">${text}<//><//
    >`
}

export default CheckFiled
