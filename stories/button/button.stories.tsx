import { Button } from './button';

const story = {
    title: "Button",
    component: Button
}

export default story

const Template = (args) => (
    <Button {...args} />
)

export const Default = Template.bind({})
