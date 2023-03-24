import { html } from 'preact'
import { styled } from 'goober'
import Switch from '../../common/inputs/Switch.js'
import { withRoot } from '../../store/storeAdapter.js'
import { rootStore, setDarkMode } from '../../store/rootStore.js'

const ThemeSwitchContainer = styled('div')`
    margin: 25px;
    margin-bottom: 8px;
    padding: 14px;
    background: var(--main-background);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-left: 64px;
    padding-right: 64px;
`

const Wrapper = styled('div')`
    display: flex;
    width: 115px;
    justify-content: space-between;
    align-items: center;
`

const ThemeSwitch = ({ darkMode }) => {
    return html`<${ThemeSwitchContainer}>
        <${Wrapper}>
            <img src="./assets/icon-light-theme.svg" />
            <${Switch} state="${darkMode}" handleChange="${setDarkMode}" />
            <img src="./assets/icon-dark-theme.svg" />
        <//>
    <//>`
}

export default withRoot(ThemeSwitch, rootStore)
