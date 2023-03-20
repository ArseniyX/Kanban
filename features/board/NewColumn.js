import { html } from 'preact'
import { styled } from 'goober'

const NewColumnContainer = styled('div')`
    background: var(--new-column-bg);
    border-radius: 6px;
    margin-right: 24px;
    width: 280px;
    height: 815px;
    font-weight: 700;
    font-size: 24px;
    color: #828fa3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const NewColumn = () => {
    return html`<${NewColumnContainer}>+ New Column<//>`
}

export default NewColumn
