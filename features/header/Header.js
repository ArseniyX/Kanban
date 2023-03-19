import { html } from 'preact'
import { styled } from 'goober'
import ButtonPrimary from '../../common/Button.js'
import { rootStore } from '../../store/rootStore.js'
import { withStore } from '../../store/storeAdapter.js'

const HeaderContainer = styled('div')`
    position: fixed;
    display: flex;
    top: 0;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    height: 88px;
    width: 100%;
    padding-bottom: 8px;
    background: var(--secondary-elements);
`

const BoardName = styled('div')`
    font-weight: 700;
    font-size: 24px;
    margin-left: 324px;
`

const OptionsContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    margin-right: 32px;
`

const Header = ({ activeTabName }) => {
    return html`<${HeaderContainer}
        ><${BoardName}>${activeTabName}<//>
        <${OptionsContainer}>
            <${ButtonPrimary} variant="primary" size="large">+ Add New Task<//>
            <img src="./assets/icon-vertical-ellipsis.svg"
        /><//>
    <//>`
}

export default withStore(Header, rootStore)
