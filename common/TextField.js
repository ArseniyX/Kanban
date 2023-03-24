import { html, useState, useRef } from 'preact'
import { styled } from 'goober'
import { Label } from './ui/label.js'

const TextFieldContainer = styled('div')``

const InputField = styled('input')`
    width: 100%;
    padding: 8px 16px;
    font-size: 13px;
    line-height: 23px;
    border-radius: 4px;
    border: 1px solid ${({ isError }) => (isError ? 'rgba(130, 143, 163, 0.25)' : ' #ea5555')};
    &::placeholder {
        color: #00011239;
    }
`

const InputContainer = styled('div')`
    display: flex;
    align-items: center;
`

const ClearButton = styled('img')`
    width: 15px;
    height: 15px;
    cursor: pointer;
    margin-left: 16px;
`

const InputWrapper = styled('div')`
    position: relative;
    width: 100%;
`

const InputError = styled('span')`
    position: absolute;
    margin-top: auto;
    margin-bottom: auto;
    top: 0;
    right: 16px;
    font-size: 13px;
    bottom: 0;
    height: 23px;
    line-height: 23px;
    color: #ea5555;
`

const TextField = ({ value = '', onInputChange = () => {}, label = '', placeholder, withoutClear }) => {
    const [state, setState] = useState('')
    const [isError, setError] = useState(null)
    const inputRef = useRef(null)

    const onClear = () => {
        inputRef.current.base.value = ''
    }

    const onChange = (e) => {
        setState(e.target.value)
        onInputChange(e.target.value)
        if (e.target.value) {
            setError(false)
        } else {
            setError('Can’t be empty')
        }
    }

    return html`<${TextFieldContainer}
        >${label && html`<${Label} for="1">${label}<//>`}
        <${InputContainer}>
            <${InputWrapper}>
                <${InputField}
                    isError="${!isError}"
                    id="1"
                    ref="${inputRef}"
                    placeholder="${placeholder}"
                    value="${state}"
                    onInput="${onChange}"
                />
                ${isError && html`<${InputError}>${isError}<//>`}
            <//>
            ${!withoutClear && html`<${ClearButton} onClick="${onClear}" src="./assets/icon-cross.svg" />`}
        <//><//
    >`
}

export default TextField
