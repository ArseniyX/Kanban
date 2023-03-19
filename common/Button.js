import { html } from 'preact'
import { styled, css } from 'goober'

const PrimaryClass = css`
    color: var(--primary-text-color);
    background: var(--primary-background-color);
    border-radius: 24px;
    font-size: 15px;
    &:hover {
        background: var(--primary-background-hover-color);
    }
`

const SecondaryClass = css`
    color: var(--secondary-color);
    background: var(--secondary-background-color);
    border-radius: 20px;
    &:hover {
        background: var(--secondary-background-hover-color);
    }
`

const DestructiveClass = css`
    color: var(--destructive-color);
    background: var(--destructive-background-color);
    border-radius: 20px;
    &:hover {
        background: var(--destructive-background-hover-color);
    }
`

const LargeClass = css`
    padding: 15px;
    line-height: 19px;
    font-size: 15px;
    padding-bottom: 14px;
`

const SmallClass = css`
    padding: 8px;
    padding-bottom: 9px;
    line-height: 23px;
    font-size: 13px;
`

const ButtonPrimaryContainer = styled('button')`
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    cursor: pointer;
    border: none;
`

const ButtonPrimary = ({ children, variant, size }) => {
    return html`<${ButtonPrimaryContainer}
        className="${{
            primary: PrimaryClass,
            secondary: SecondaryClass,
            destructive: DestructiveClass
        }[variant]} 
        ${size === 'large' ? LargeClass : SmallClass}"
        >${children}<//
    >`
}

export default ButtonPrimary
