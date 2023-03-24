import { html } from 'preact'
import { styled } from 'goober'
import Logo from './sidebar/Logo.js'
import BoardTab from './sidebar/navigation/BoardTabs.js'
import TextField from '../common/inputs/TextField.js'
import Select from '../common/inputs/Select.js'
import CheckFiled from '../common/inputs/CheckFiled.js'

const StoryContainer = styled('div')`
    display: flex;
    flex-direction: column;
`

const Story = () => {
    return html`<${StoryContainer}>
        <${Logo} /> <${BoardTab} /> <${CheckFiled} text="hello" /> <${TextField} value="hello" label="test" />
        <${Select} label="hello" items="${['Todo', 'Doing', 'Done']}" />
    <//>`
}

export default Story
