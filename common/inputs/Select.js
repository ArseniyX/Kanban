import { html, useState } from 'preact'
import { styled } from 'goober'
import { Label } from '../data-display/label.js'

const SelectContainer = styled('div')`
    position: relative;
    margin-top: 24px;
`

const SelectStyled = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    cursor: pointer;
`

const DropContainer = styled('div')`
    position: absolute;
    top: 78px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px;
    padding-top: 8px;
    background: var(--main-background);
    box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
    border-radius: 8px;
`

const SelectValue = styled('span')`
    color: var(--text-color);
`

const Item = styled('span')`
    height: 23px;
    margin-top: 8px;
    cursor: pointer;
    color: #828fa3;
`

const Items = ({ items = ['Todo', 'Doing', 'Done'], setValue, setOpen }) => {
    return html`<${DropContainer}>
        ${items.map(
            (item) =>
                html`<${Item}
                    onClick="${() => {
                        setValue(item)
                        setOpen(false)
                    }}"
                    >${item}<//
                >`
        )}
    <//>`
}

const Select = ({ label, selectedValue = 'Todo' }) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(selectedValue)

    return html`<${SelectContainer}>
        ${label && html`<${Label}>${label}<//>`}

        <${SelectStyled} onClick="${() => setOpen(!open)}">
            <${SelectValue}>${value}<//>
            <img src="${'./assets/icon-chevron-arrow.svg'.replace('arrow', open ? 'up' : 'down')}" />
        <//>
        ${open && html`<${Items} ...${{ setValue, setOpen }} />`}
    <//>`
}

export default Select
