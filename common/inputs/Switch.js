import { html } from 'preact'
import { styled, css } from 'goober'

const SwitchContainer = styled('label')`
    position: relative;
    width: 40px;
    height: 20px;
    background: var(--secondary-color);
    border-radius: 12px;
    cursor: pointer;
`

const LightMode = css`
    top: 3px;
    left: 3px;
`

const DarkMode = css`
    top: 3px;
    right: 3px;
`

const ToggleHandler = styled('div')`
    position: absolute;
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 50%;
`

const Checkbox = styled('input')`
    display: none;
`

const Switch = ({ state, handleChange }) => {
    const id = crypto.randomUUID()
    return html`<${SwitchContainer} for="${id}">
        <${ToggleHandler} className="${state ? DarkMode : LightMode}" />
        <${Checkbox} id="${id}" onInput="${() => handleChange(!state)}" type="checkbox" />
    <//>`
}

export default Switch
