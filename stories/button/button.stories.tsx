import { Button, ButtonProps } from './button';

const story = {
    title: "Button",
    component: Button
}

export default story

const Template = (args: ButtonProps) => (
    <Button {...args} />
)

export const Default = Template.bind({})
