import { html } from 'preact'
import { styled } from 'goober'
import Switch from '../../common/Switch.js'
import { withStore } from '../../store/storeAdapter.js'
import { rootStore, setDarkMode } from '../../store/rootStore.js'

const ThemeSwitchContainer = styled('div')`
    margin: 25px;
    padding: 14px;
    max-width: 250px;
    background: #f4f7fd;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-left: 60px;
    padding-right: 60px;
`

const ThemeSwitch = ({ darkMode }) => {
    return html`<${ThemeSwitchContainer}>
        <img src="../../assets/icon-light-theme.svg" />
        <${Switch} state="${darkMode}" handleChange="${setDarkMode}" />
        <img src="../../assets/icon-dark-theme.svg" />
    <//>`
}

export default withStore(ThemeSwitch, rootStore)
