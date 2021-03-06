import { Button, IButtonProps } from './button';

const story = {
    title: "Button",
    component: Button
}

export default story

const Template = (args: IButtonProps) => (
    <Button {...args} />
)

export const Default = Template.bind({})
