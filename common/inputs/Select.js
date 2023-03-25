import { html, useState } from 'preact'
import { styled } from 'goober'
import { LabelStyle } from '../data-display/Label.js'

const SelectContainer = styled('div')`
    position: relative;
`

const SelectStyled = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    border: 1px solid ${({ open }) => (open ? 'var(--secondary-color)' : '#828FA340')};
    border-radius: 4px;
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
    background: var(--primary-elements);
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

const Items = ({ items = ['Todo', 'Doing', 'Done'], onSelectChange }) => {
    return html`<${DropContainer}>
        ${items.map(
            (item, index) => html`<${Item} onClick="${() => onSelectChange({ status: item, index })}">${item}<//>`
        )}
    <//>`
}

const Select = ({ label, selectedValue = 'Todo', setSelected }) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(selectedValue)

    const onSelectChange = ({ status, index }) => {
        setSelected({ status, index, prev: value })
        setValue(status)
        setOpen(false)
    }

    return html`<${SelectContainer}>
        ${label && html`<${LabelStyle}>${label}<//>`}

        <${SelectStyled} open="${open}" onClick="${() => setOpen(!open)}">
            <${SelectValue}>${value}<//>
            <img src="${'./assets/icon-chevron-arrow.svg'.replace('arrow', open ? 'up' : 'down')}" />
        <//>
        ${open && html`<${Items} onSelectChange="${onSelectChange}" />`}
    <//>`
}

export default Select
