import { html } from 'preact'
import { styled } from 'goober'

const Image = styled('img')`
    margin: 34px;
`

const Logo = () => {
    return html`<${Image} src="./assets/logo-dark.svg" />`
}

export default Logo
