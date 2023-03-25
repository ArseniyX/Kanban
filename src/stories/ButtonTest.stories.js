import { setup } from 'goober'
import { h } from 'preact'
import '../styles'
import ButtonPrimary from '../src/common/inputs/Button'

setup(h)

export default {
    title: 'Components/StyledButton',
    component: ButtonPrimary,
    argTypes: { onClick: { action: 'onClick' } }
}

const Template = (args) => <ButtonPrimary {...args} />

export const PrimaryLarge = Template.bind({})
PrimaryLarge.args = {
    backgroundColor: 'red',
    label: 'Press Me',
    size: 'large',
    variant: 'primary'
}

export const PrimarySmall = Template.bind({})
PrimarySmall.args = {
    backgroundColor: 'red',
    label: 'Press Me',
    size: 'small',
    variant: 'primary'
}

export const SecondarySmall = Template.bind({})
SecondarySmall.args = {
    backgroundColor: 'red',
    label: 'Press Me',
    size: 'small',
    variant: 'secondary'
}

export const DestructiveSmall = Template.bind({})
DestructiveSmall.args = {
    backgroundColor: 'red',
    label: 'Press Me',
    size: 'small',
    variant: 'destructive'
}
