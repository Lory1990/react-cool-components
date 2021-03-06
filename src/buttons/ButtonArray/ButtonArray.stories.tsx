import { Story } from "@storybook/react"
import ButtonArray, { IButtonArrayProps } from "./ButtonArray"

export default {
    title: "Buttons/Button Array",
    component: ButtonArray
}

const buttons = [
    {
        id: "a",
        label: "First button"
    },
    {
        id: "b",
        label: "Second button"
    },
    {
        id: "c",
        label: "Third button"
    },
    {
        id: "d",
        label: "Fourth button"
    }
]

const Template = (args: IButtonArrayProps) => <ButtonArray {...args} />

export const Plain: Story<IButtonArrayProps> = Template.bind({})
export const Disabled: Story<IButtonArrayProps> = Template.bind({})
export const SelectedString: Story<IButtonArrayProps> = Template.bind({})
export const SelectedArray: Story<IButtonArrayProps> = Template.bind({})
export const SelectedFunction: Story<IButtonArrayProps> = Template.bind({})
export const DisabledString: Story<IButtonArrayProps> = Template.bind({})
export const DisabledArray: Story<IButtonArrayProps> = Template.bind({})
export const DisabledFunction: Story<IButtonArrayProps> = Template.bind({})

Plain.args = {
    buttons
} as IButtonArrayProps

Disabled.args = {
    buttons,
    disabled: true
} as IButtonArrayProps

SelectedString.args = {
    buttons,
    value: "a"
} as IButtonArrayProps

SelectedArray.args = {
    buttons,
    value: ["a", "b"]
} as IButtonArrayProps

SelectedFunction.args = {
    buttons,
    value: button => button.id === "c"
} as IButtonArrayProps

DisabledString.args = {
    buttons,
    disabledButton: "a"
} as IButtonArrayProps

DisabledArray.args = {
    buttons,
    disabledButton: ["a", "c"]
} as IButtonArrayProps

DisabledFunction.args = {
    buttons,
    disabledButton: button => button.id === "c"
} as IButtonArrayProps
