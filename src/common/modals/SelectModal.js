import { html } from 'preact'
import { styled } from 'goober'

const SelectModalContainer = styled('div')`
    position: absolute;
    top: 46px;
    right: ${({ position }) => ({ right: '0', center: '-100px' }[position])};
    width: 192px;
    padding: 16px;
    padding-bottom: 0;
    background: var(--main-background);
    box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
`

const Option = styled('div')`
    margin-bottom: 16px;
    color: ${({ variant }) => ({ regular: '#828fa3', warning: '#EA5555' }[variant])};
    cursor: pointer;
`

const SelectModal = ({ options = [], open, position = 'center' }) => {
    return (
        open &&
        html`<${SelectModalContainer} position="${position}">
            ${options.map(
                ({ title, handler, variant }) =>
                    html`<${Option} onClick="${handler}" variant="${variant}"> ${title}<//>`
            )}
        <//>`
    )
}

export default SelectModal
