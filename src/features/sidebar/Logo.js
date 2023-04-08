import { html } from 'preact'
import { styled } from 'goober'
import { withRoot } from '../../store/storeAdapter.js'

const Image = styled('img')`
    margin: 34px;
`

const Logo = ({ darkMode }) => {
    return html`<${Image} src="./assets/logo-${darkMode ? 'light' : 'dark'}.svg" />`
}

export default withRoot(Logo)
