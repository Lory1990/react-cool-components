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
export const SelectedString: Story<IButtonArrayProps> = Template.bind({})
export const SelectedArray: Story<IButtonArrayProps> = Template.bind({})
export const SelectedFunction: Story<IButtonArrayProps> = Template.bind({})

Plain.args = {
    buttons
} as IButtonArrayProps

SelectedString.args = {
    buttons,
    selected: "a"
} as IButtonArrayProps
SelectedArray.args = {
    buttons,
    selected: ["a", "b"]
} as IButtonArrayProps
SelectedFunction.args = {
    buttons,
    selected: button => button.id === "c"
} as IButtonArrayProps
